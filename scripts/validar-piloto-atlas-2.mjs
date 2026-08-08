#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";

const root = process.cwd();
const args = process.argv.slice(2);
const sourcePath = path.resolve(root, args[0] || "data/agua-de-por-medio/datos-atlas.json");
const pilotPath = path.resolve(root, args[1] || "data/agua-de-por-medio/atlas-2/piloto-generado.json");
const catalogPath = path.resolve(root, args[2] || "data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json");

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const pilot = JSON.parse(fs.readFileSync(pilotPath, "utf8"));
const catalogs = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const sourceWorks = new Map(source.obras.map((work) => [work.id, work]));
const currentIds = new Set(Object.keys(catalogs.corrientes));
const provenances = new Set(catalogs.procedencias);
const processes = new Set(catalogs.procesos);
const states = new Set(catalogs.estados_revision);
const errors = [];
const warnings = [];
const error = (code, message) => errors.push({ code, message });
const warn = (code, message) => warnings.push({ code, message });
const nonEmpty = (value) => typeof value === "string" && value.trim().length > 0;

if (pilot.meta?.modifica_corpus_publico !== false) error("META", "El piloto debe declarar que no modifica el corpus público.");
if (pilot.meta?.corpus_fuente !== source.meta?.version) error("VERSION", "La versión fuente del piloto no coincide con el corpus.");
if (pilot.meta?.recuentos_fuente?.entradas !== source.obras.length || pilot.meta?.recuentos_fuente?.relaciones !== source.relaciones.length) {
  error("RECUENTOS", "Los recuentos fuente del piloto no coinciden con el corpus actual.");
}
if (!Array.isArray(pilot.entradas) || pilot.entradas.length !== 10) error("TAMANO", "El lote piloto debe contener exactamente 10 entradas.");

const seen = new Set();
for (const [index, item] of (pilot.entradas || []).entries()) {
  const id = item?.heredado?.id;
  const migration = item?.migracion2;
  const where = `entradas[${index}]`;
  if (!nonEmpty(id)) { error("ID", `${where} no tiene id heredado.`); continue; }
  if (seen.has(id)) error("ID_DUPLICADO", `${id} aparece más de una vez en el piloto.`);
  seen.add(id);
  if (!sourceWorks.has(id)) error("ID_INEXISTENTE", `${id} no existe en el corpus fuente.`);
  else if (!isDeepStrictEqual(item.heredado, sourceWorks.get(id))) error("HERENCIA", `${id}: los campos heredados fueron alterados.`);
  if (!migration || typeof migration !== "object") { error("MIGRACION", `${id}: falta migracion2.`); continue; }
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
  if ((state === "confirmada" || state === "revisada") && (!migration.corriente_confirmada || !nonEmpty(migration.revision?.fundamento))) {
    error("CONFIRMACION", `${id}: la confirmación exige corriente y fundamento.`);
  }
  if (migration.procedencia_verificada === false && (state === "confirmada" || state === "revisada")) error("PROCEDENCIA", `${id}: no puede confirmarse con procedencia sin verificar.`);
  if (!Array.isArray(migration.pendientes) || migration.pendientes.length === 0) warn("SIN_PENDIENTES", `${id}: el piloto no declara campos pendientes.`);
  if (!Array.isArray(migration.lenguas_publicacion_candidatas) || migration.lenguas_publicacion_candidatas.length === 0) warn("LENGUA", `${id}: no se derivó ninguna lengua candidata desde tr.`);
}

for (const [index, item] of (pilot.relaciones_entre_entradas_piloto || []).entries()) {
  const relation = item?.heredada;
  if (!relation || !seen.has(relation.a) || !seen.has(relation.b)) error("RELACION", `relaciones[${index}] no conecta dos entradas del piloto.`);
  if (item?.migracion2?.friccion?.hay !== false) error("FRICCION", `relaciones[${index}] infiere fricción sin argumento editorial.`);
  if (item?.migracion2?.cruce_linguistico !== null) error("CRUCE", `relaciones[${index}] fija el cruce antes de verificar lenguas de publicación.`);
}

console.log(`[INFO] Corpus fuente ${source.meta.version}: ${source.obras.length} entradas y ${source.relaciones.length} relaciones.`);
console.log(`[INFO] Piloto: ${pilot.entradas?.length || 0} entradas y ${pilot.relaciones_entre_entradas_piloto?.length || 0} relaciones internas.`);
for (const item of warnings) console.log(`[ADVERTENCIA ${item.code}] ${item.message}`);
for (const item of errors) console.log(`[ERROR ${item.code}] ${item.message}`);
console.log(`\nResultado: ${errors.length} error(es), ${warnings.length} advertencia(s).`);
process.exitCode = errors.length ? 1 : 0;
