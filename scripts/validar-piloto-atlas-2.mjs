#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";

const root = process.cwd();
const args = process.argv.slice(2);
const sourcePath = path.resolve(root, args[0] || "data/agua-de-por-medio/datos-atlas.json");
const pilotPath = path.resolve(root, args[1] || "data/agua-de-por-medio/atlas-2/piloto-generado.json");
const catalogPath = path.resolve(root, args[2] || "data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json");
const configPath = path.resolve(root, args[3] || "data/agua-de-por-medio/atlas-2/piloto-config.json");

const sourceText = fs.readFileSync(sourcePath, "utf8");
const source = JSON.parse(sourceText);
const pilot = JSON.parse(fs.readFileSync(pilotPath, "utf8"));
const catalogs = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const sourceWorks = new Map(source.obras.map((work) => [work.id, work]));
const currentIds = new Set(Object.keys(catalogs.corrientes));
const provenances = new Set(catalogs.procedencias);
const processes = new Set(catalogs.procesos);
const states = new Set(catalogs.estados_revision);
const relationStates = new Set(catalogs.estados_relacion);
const operations = new Set(catalogs.operaciones);
const shores = new Set(catalogs.tipos_orilla);
const shoreFunctions = new Set(catalogs.funciones_orilla);
const eras = new Set(catalogs.eras_temporales);
const precisions = new Set(catalogs.precisiones_temporales);
const racialCapitalismMechanisms = new Set(catalogs.mecanismos_capitalismo_racial);
const relationTypes = new Set(catalogs.tipos_relacion);
const relations = pilot.relaciones_lote || pilot.relaciones_entre_entradas_piloto || [];
const relationKey = (a, b) => `${a}::${b}`;
const sourceRelations = new Map(source.relaciones.map((relation, index) => [relationKey(relation.a, relation.b), {
  relation,
  id: `R${String(index + 1).padStart(4, "0")}`
}]));
const errors = [];
const warnings = [];
const error = (code, message) => errors.push({ code, message });
const warn = (code, message) => warnings.push({ code, message });
const nonEmpty = (value) => typeof value === "string" && value.trim().length > 0;

function validateDate(value, where) {
  if (value === null) return;
  if (!value || !Number.isInteger(value.valor) || value.valor < 1) error("FECHA", `${where}: valor temporal inválido.`);
  if (!eras.has(value?.era)) error("FECHA", `${where}: era temporal inválida.`);
  if (!precisions.has(value?.precision)) error("FECHA", `${where}: precisión temporal inválida.`);
}

function comparableDate(value) {
  if (!value) return null;
  return value.era === "AEC" ? -value.valor : value.valor;
}

function validateTemporalities(value, where) {
  if (!value || typeof value !== "object") return;
  for (const key of ["publicacion", "traduccion_es"]) {
    if (key in value) validateDate(value[key], `${where}.${key}`);
  }
  if (value.periodo_estudiado) {
    const period = value.periodo_estudiado;
    validateDate(period.inicio, `${where}.periodo_estudiado.inicio`);
    validateDate(period.fin, `${where}.periodo_estudiado.fin`);
    if (period.precision && !precisions.has(period.precision)) error("FECHA", `${where}: precisión del periodo inválida.`);
    const start = comparableDate(period.inicio);
    const end = comparableDate(period.fin);
    if (start !== null && end !== null && start > end) error("FECHA", `${where}: periodo estudiado invertido.`);
  }
}

if (pilot.meta?.modifica_corpus_publico !== false) error("META", "El lote debe declarar que no modifica el corpus público.");
if (pilot.meta?.aprobacion?.estado !== "aprobado" || !nonEmpty(pilot.meta?.aprobacion?.responsable) || !/^\d{4}-\d{2}-\d{2}$/.test(pilot.meta?.aprobacion?.fecha || "")) {
  error("APROBACION", "El lote debe registrar aprobación, responsable y fecha.");
}
if (pilot.meta?.corpus_fuente !== source.meta?.version) error("VERSION", "La versión fuente del lote no coincide con el corpus.");
if (config.corpus_objetivo !== source.meta?.version) error("VERSION", "La configuración no apunta a la versión del corpus suministrado.");
if (pilot.meta?.corpus_fuente_sha256 !== crypto.createHash("sha256").update(sourceText).digest("hex")) error("HUELLA", "La huella del corpus fuente no coincide con la registrada al generar el lote.");
if (pilot.meta?.recuentos_fuente?.entradas !== source.obras.length || pilot.meta?.recuentos_fuente?.relaciones !== source.relaciones.length) {
  error("RECUENTOS", "Los recuentos fuente del lote no coinciden con el corpus actual.");
}
if (pilot.meta?.lote !== (config.lote || "P00")) error("LOTE", "El identificador del lote no coincide con su configuración.");
if (!Array.isArray(pilot.entradas) || pilot.entradas.length !== config.entradas?.length) error("TAMANO", "El lote no contiene las entradas declaradas en su configuración.");
const expectedEffective = (config.entradas || []).filter((item) => item.accion_entidad !== "redireccion").length;
const expectedRedirects = (config.entradas || []).filter((item) => item.accion_entidad === "redireccion").length;
if (pilot.meta?.recuentos_lote?.nodos_efectivos !== expectedEffective || pilot.meta?.recuentos_lote?.redirecciones !== expectedRedirects) {
  error("TAMANO", "Los recuentos efectivos del lote no coinciden con la configuración aprobada.");
}

const seen = new Set();
for (const [index, item] of (pilot.entradas || []).entries()) {
  const id = item?.heredado?.id;
  const migration = item?.migracion2;
  const where = `entradas[${index}]`;
  if (!nonEmpty(id)) { error("ID", `${where} no tiene id heredado.`); continue; }
  if (seen.has(id)) error("ID_DUPLICADO", `${id} aparece más de una vez en el lote.`);
  seen.add(id);
  if (!sourceWorks.has(id)) error("ID_INEXISTENTE", `${id} no existe en el corpus fuente.`);
  else if (!isDeepStrictEqual(item.heredado, sourceWorks.get(id))) error("HERENCIA", `${id}: los campos heredados fueron alterados.`);
  if (!migration || typeof migration !== "object") { error("MIGRACION", `${id}: falta migracion2.`); continue; }
  const isRedirect = migration.accion_entidad === "redireccion";
  if (!provenances.has(migration.procedencia)) error("PROCEDENCIA", `${id}: procedencia fuera del vocabulario.`);
  if (!Array.isArray(migration.proceso) || migration.proceso.length === 0 || migration.proceso.some((value) => !processes.has(value))) {
    error("PROCESO", `${id}: proceso vacío o fuera del vocabulario.`);
  }
  if (migration.proceso?.includes("fusión") && migration.proceso?.includes("división")) error("PROCESO", `${id}: no puede fusionarse y dividirse a la vez.`);
  const state = migration.revision?.estado;
  if (!states.has(state)) error("REVISION", `${id}: estado de revisión inválido.`);
  const candidates = migration.corrientes_candidatas || [];
  if (!Array.isArray(candidates) || candidates.some((value) => !currentIds.has(value))) error("CANDIDATAS", `${id}: corrientes candidatas inválidas.`);
  if (migration.corriente_candidata && !currentIds.has(migration.corriente_candidata)) error("CANDIDATA", `${id}: corriente candidata inexistente.`);
  if (state === "candidatura_preliminar" && !migration.corriente_candidata) error("CANDIDATA", `${id}: candidatura preliminar sin corriente única.`);
  if ((state === "candidatura_preliminar" || state === "pendiente_revision_con_texto") && migration.corriente_confirmada) {
    error("CONFIRMACION_PREMATURA", `${id}: una entrada pendiente no puede llevar corriente confirmada.`);
  }
  if ((state === "confirmada" || state === "revisada") && !isRedirect && (!migration.corriente_confirmada || !nonEmpty(migration.revision?.fundamento))) {
    error("CONFIRMACION", `${id}: la confirmación exige corriente y fundamento.`);
  }
  if ((state === "confirmada" || state === "revisada") && (!nonEmpty(migration.revision?.responsable) || !/^\d{4}-\d{2}-\d{2}$/.test(migration.revision?.fecha || ""))) {
    error("CONFIRMACION", `${id}: la decisión exige responsable y fecha.`);
  }
  if (migration.procedencia_verificada === false && (state === "confirmada" || state === "revisada")) error("PROCEDENCIA", `${id}: no puede confirmarse con procedencia sin verificar.`);
  if (!Array.isArray(migration.pendientes)) error("PENDIENTES", `${id}: pendientes debe ser una lista explícita, incluso si está vacía.`);
  if (!Array.isArray(migration.lenguas_publicacion_candidatas) || migration.lenguas_publicacion_candidatas.length === 0) warn("LENGUA", `${id}: no se derivó ninguna lengua candidata desde tr.`);
  if (isRedirect) {
    if (!nonEmpty(migration.redirige_a) || !sourceWorks.has(migration.redirige_a) || migration.redirige_a === id) error("REDIRECCION", `${id}: destino de redirección inválido.`);
    if (!migration.proceso.includes("fusión")) error("REDIRECCION", `${id}: una redirección por duplicado debe declarar fusión.`);
  } else if (migration.redirige_a) {
    error("REDIRECCION", `${id}: solo una redirección puede declarar redirige_a.`);
  }
  const secondary = migration.corrientes_secundarias || [];
  if (!Array.isArray(secondary) || secondary.length > 2 || secondary.some((value) => !currentIds.has(value) || value === migration.corriente_confirmada)) {
    error("CORRIENTES_SECUNDARIAS", `${id}: corrientes secundarias inválidas.`);
  }
  if (migration.operaciones && (!Array.isArray(migration.operaciones) || migration.operaciones.some((value) => !operations.has(value)))) {
    error("OPERACIONES", `${id}: operación epistémica fuera del vocabulario.`);
  }
  for (const [shoreIndex, shore] of (migration.orillas || []).entries()) {
    if (!shores.has(shore.tipo)) error("ORILLA", `${id}.orillas[${shoreIndex}]: tipo inválido.`);
    if (!shoreFunctions.has(shore.funcion)) error("ORILLA", `${id}.orillas[${shoreIndex}]: función inválida.`);
    if (shore.tipo === "punto" && !nonEmpty(shore.lugar)) error("ORILLA", `${id}.orillas[${shoreIndex}]: un punto exige identificador de lugar.`);
    if (shore.tipo !== "punto" && !nonEmpty(shore.label)) error("ORILLA", `${id}.orillas[${shoreIndex}]: una región o cuenca exige etiqueta.`);
  }
  for (const [markIndex, mark] of (migration.marcas || []).entries()) {
    if (!catalogs.marcas.includes(mark.m)) error("MARCA", `${id}.marcas[${markIndex}]: marca inválida.`);
    if (mark.m === "capitalismo_racial" && !racialCapitalismMechanisms.has(mark.mecanismo)) error("MARCA", `${id}.marcas[${markIndex}]: mecanismo de capitalismo racial inválido.`);
  }
  validateTemporalities(migration.temporalidades, id);
  for (const [componentIndex, component] of (migration.obras_componentes || []).entries()) {
    if (!nonEmpty(component.id_componente) || !nonEmpty(component.titulo)) error("COMPONENTE", `${id}.obras_componentes[${componentIndex}]: faltan identificador o título.`);
    validateDate(component.publicacion, `${id}.obras_componentes[${componentIndex}].publicacion`);
    if (component.corriente !== null && !currentIds.has(component.corriente)) error("COMPONENTE", `${id}.obras_componentes[${componentIndex}]: corriente inválida.`);
  }
}

const batchEntryIds = new Set((pilot.entradas || []).map((item) => item.heredado.id));
const dependencyIds = new Set(config.dependencias || []);
const allowedRelationIds = new Set([...batchEntryIds, ...dependencyIds]);
const redirectIds = new Set((pilot.entradas || []).filter((item) => item.migracion2?.accion_entidad === "redireccion").map((item) => item.heredado.id));
const effectiveIds = new Set([...allowedRelationIds].filter((id) => !redirectIds.has(id)));
for (const item of pilot.entradas || []) {
  if (item.migracion2?.redirige_a) effectiveIds.add(item.migracion2.redirige_a);
}
const componentsByNode = new Map((pilot.entradas || []).map((item) => [
  item.heredado.id,
  new Set((item.migracion2?.obras_componentes || []).map((component) => component.id_componente))
]));
if (relations.length !== (config.relaciones || []).length) error("RELACION", "El número de relaciones generadas no coincide con la configuración.");
for (const [index, item] of relations.entries()) {
  const relation = item?.heredada;
  const sourceRecord = relation ? sourceRelations.get(relationKey(relation.a, relation.b)) : null;
  if (!sourceRecord || !isDeepStrictEqual(relation, sourceRecord.relation)) error("HERENCIA_RELACION", `relaciones[${index}] no conserva exactamente la relación heredada.`);
  if (item?.migracion2?.id_transicion && item.migracion2.id_transicion !== sourceRecord?.id) error("ID_RELACION", `relaciones[${index}] declara un identificador de transición que no coincide con el orden del corpus.`);
  if (!relation || !allowedRelationIds.has(relation.a) || !allowedRelationIds.has(relation.b)) error("RELACION", `relaciones[${index}] conecta un extremo fuera del lote o sus dependencias.`);
  if (relation && !batchEntryIds.has(relation.a) && !batchEntryIds.has(relation.b)) error("RELACION", `relaciones[${index}] no toca ninguna entrada del lote actual.`);
  const friction = item?.migracion2?.friccion;
  if (typeof friction?.hay !== "boolean") {
    error("FRICCION", `relaciones[${index}] no declara la fricción como booleano.`);
  } else if (friction.hay) {
    if (item?.migracion2?.estado !== "corroborada") error("FRICCION", `relaciones[${index}] declara fricción sin corroborar la relación.`);
    if (item?.migracion2?.tipo_confirmado !== "disonancia") error("FRICCION", `relaciones[${index}] declara fricción sin confirmar una disonancia.`);
    if (!nonEmpty(friction.argumento)) error("FRICCION", `relaciones[${index}] declara fricción sin argumento editorial.`);
    if (!nonEmpty(item?.migracion2?.evidencia)) error("FRICCION", `relaciones[${index}] declara fricción sin evidencia localizable.`);
  }
  if (typeof item?.migracion2?.cruce_linguistico !== "boolean") error("CRUCE", `relaciones[${index}] no declara el cruce lingüístico como booleano.`);
  if (!relationStates.has(item?.migracion2?.estado)) error("CORROBORACION", `relaciones[${index}] no declara un estado válido.`);
  if (item?.migracion2?.estado === "por_corroborar" && item?.migracion2?.tipo_confirmado !== null) error("CORROBORACION", `relaciones[${index}] no puede confirmar tipo mientras está por corroborar.`);
  if (item?.migracion2?.estado === "corroborada" && !nonEmpty(item?.migracion2?.tipo_confirmado)) error("CORROBORACION", `relaciones[${index}] corroborada sin tipo confirmado.`);
  if (item?.migracion2?.tipo_confirmado !== null && !relationTypes.has(item?.migracion2?.tipo_confirmado)) error("RELACION_TIPO", `relaciones[${index}] declara un tipo confirmado fuera del vocabulario.`);
  if (item?.migracion2?.tipo_candidato && !relationTypes.has(item?.migracion2?.tipo_candidato)) error("RELACION_TIPO", `relaciones[${index}] declara un tipo candidato fuera del vocabulario.`);
  if (!nonEmpty(item?.migracion2?.fundamento)) error("RELACION", `relaciones[${index}] no registra fundamento.`);
  const effective = item?.migracion2?.extremos_efectivos;
  if (!effectiveIds.has(effective?.a) || !effectiveIds.has(effective?.b)) error("REDIRECCION", `relaciones[${index}] apunta a un nodo retirado o inexistente.`);
  for (const side of ["a", "b"]) {
    const componentId = item?.migracion2?.[`componente_${side}`];
    if (!componentId) continue;
    const nodeId = effective?.[side];
    if (!componentsByNode.get(nodeId)?.has(componentId)) error("COMPONENTE_RELACION", `relaciones[${index}] refiere ${componentId}, que no pertenece al extremo ${nodeId}.`);
  }
}

console.log(`[INFO] Corpus fuente ${source.meta.version}: ${source.obras.length} entradas y ${source.relaciones.length} relaciones.`);
console.log(`[INFO] Lote ${pilot.meta?.lote || "sin_id"}: ${pilot.entradas?.length || 0} entradas y ${relations.length} relaciones revisadas.`);
for (const item of warnings) console.log(`[ADVERTENCIA ${item.code}] ${item.message}`);
for (const item of errors) console.log(`[ERROR ${item.code}] ${item.message}`);
console.log(`\nResultado: ${errors.length} error(es), ${warnings.length} advertencia(s).`);
process.exitCode = errors.length ? 1 : 0;
