#!/usr/bin/env node

/**
 * Sincronización controlada del contrato de recorridos — Atlas 2.0, Fase 5B.
 *
 * Transforma decisiones académicas ya aprobadas en estructura productiva. No
 * clasifica obras, no reinterpreta decisiones y no completa vacíos: cuando una
 * fila no puede transformarse mecánicamente, aborta y registra la incidencia.
 *
 * Contrato aplicado:
 *   data/agua-de-por-medio/atlas-2/documentos/decision-normativa-contrato-recorridos-fase-5a-d.md
 *
 * Uso desde la raíz del repositorio:
 *   node scripts/sincronizar-recorridos-atlas-2.mjs              # dry-run: solo lectura + candidato
 *   node scripts/sincronizar-recorridos-atlas-2.mjs --reporte    # además escribe el reporte obra por obra
 *   node scripts/sincronizar-recorridos-atlas-2.mjs --escribir   # escritura productiva (requiere dry-run correcto)
 *
 * El modo por defecto NUNCA toca los archivos productivos. La escritura exige
 * la opción explícita --escribir.
 *
 * Sobre la dirección de la sincronización: en este repositorio la fuente
 * canónica del corpus es datos-atlas.js y datos-atlas.json se genera desde él
 * mediante data/agua-de-por-medio/sincronizar.py. Este script respeta ese
 * mecanismo oficial: escribe el .js y delega la regeneración del .json.
 */

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";

const RAIZ = process.cwd();
const P = {
  js: path.join(RAIZ, "data/agua-de-por-medio/datos-atlas.js"),
  json: path.join(RAIZ, "data/agua-de-por-medio/datos-atlas.json"),
  matriz: path.join(RAIZ, "data/agua-de-por-medio/atlas-2/documentos/matriz-clasificacion-fase-5a.csv"),
  lotes: [
    "data/agua-de-por-medio/atlas-2/lotes/a01-generado.json",
    "data/agua-de-por-medio/atlas-2/lotes/a02-generado.json",
    "data/agua-de-por-medio/atlas-2/lotes/s01-generado.json",
    "data/agua-de-por-medio/piloto-generado.json",
  ],
  derivados: path.join(RAIZ, "data/agua-de-por-medio/atlas-2/derivados"),
  sincronizador: path.join(RAIZ, "data/agua-de-por-medio/sincronizar.py"),
};
// piloto-generado.json vive un nivel arriba de lotes/
P.lotes[3] = "data/agua-de-por-medio/atlas-2/piloto-generado.json";

const args = process.argv.slice(2);
const ESCRIBIR = args.includes("--escribir");
const REPORTE = args.includes("--reporte") || ESCRIBIR;

/* ------------------------------------------------------------------ */
/* Vocabulario y contrato normativo                                    */
/* ------------------------------------------------------------------ */

const RECORRIDOS = new Set(["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"]);
const ESTADOS = new Set(["confirmado", "preliminar", "pendiente", "sin_evaluar"]);

/**
 * Las seis arquitecturas especiales. No se infieren: se transcriben del
 * documento normativo de Fase 5A-D, §5 y §7. El código no las produce.
 */
const ARQUITECTURAS = {
  rifkinfictions:       { tipo: "frontera_constitutiva",  recorridos: ["c1", "c3"], sec: [] },
  pricefirst:           { tipo: "frontera_constitutiva",  recorridos: ["c3", "c9"], sec: [] },
  whiteheadtiger:       { tipo: "frontera_constitutiva",  recorridos: ["c1", "c7"], sec: [] },
  schwartz_seaofstorms: { tipo: "frontera_constitutiva",  recorridos: ["c6", "c7"], sec: ["c2", "c4"] },
  perezmorales:         { tipo: "sintesis_multicorriente", recorridos: ["c3", "c5", "c7"], sec: [] },
  pinedashipwrecked:    { tipo: "sintesis_multicorriente", recorridos: ["c1", "c4", "c7"], sec: [] },
};

/** Claves largas del catálogo histórico → identificador público de recorrido. */
const CLAVE_A_RECORRIDO = {
  invasiones_mundos_indigenas: "c1",
  trata_esclavizacion_plantacion: "c2",
  fugas_cimarronajes_emancipaciones: "c3",
  postplantacion_trabajo_desposesion: "c4",
  rutas_diasporas_territorios_acuosos: "c5",
  huracanes_ecologias_materialidades_vivas: "c6",
  soberanias_fronteras_ocupaciones: "c7",
  creolizaciones_traducciones_opacidades: "c8",
  memorias_espiritualidades_archivos_vivos: "c9",
  cuerpos_parentescos_eroticas: "c10",
};

/** Totales exigidos por la instrucción técnica. La migración aborta si no cuadran. */
const EXIGIDO = {
  obras: 232,
  relaciones: 588,
  confirmadas: 80,
  preliminares: 0,
  conPrincipal: 74,
  fronteras: 4,
  sintesis: 2,
  conAlgunaSecundaria: 63,
  conDosSecundarias: 23,
};

/* ------------------------------------------------------------------ */
/* Utilidades                                                          */
/* ------------------------------------------------------------------ */

const incidencias = [];
const errores = [];
const registrar = (codigo, mensaje) => incidencias.push({ codigo, mensaje });
const abortar = (codigo, mensaje) => errores.push({ codigo, mensaje });

const sha256 = (ruta) =>
  fs.existsSync(ruta) ? crypto.createHash("sha256").update(fs.readFileSync(ruta)).digest("hex") : null;

function leerJs(ruta) {
  const fuente = fs.readFileSync(ruta, "utf8");
  const marca = "window.ATLAS=";
  const i = fuente.indexOf(marca);
  if (i < 0) throw new Error(`${ruta} no contiene la asignación window.ATLAS=`);
  const cabecera = fuente.slice(0, i);
  let cuerpo = fuente.slice(i + marca.length);
  const finalDeLinea = cuerpo.endsWith("\n") ? "\n" : "";
  cuerpo = cuerpo.trim();
  if (cuerpo.endsWith(";")) cuerpo = cuerpo.slice(0, -1);
  return { datos: JSON.parse(cuerpo), cabecera, finalDeLinea };
}

const escribirJs = (ruta, { cabecera, finalDeLinea }, datos) =>
  fs.writeFileSync(ruta, cabecera + "window.ATLAS=" + JSON.stringify(datos) + finalDeLinea, "utf8");

/** Lector CSV mínimo con soporte de comillas dobles. No usa dependencias externas. */
function leerCsv(ruta) {
  const texto = fs.readFileSync(ruta, "utf8");
  const filas = [];
  let campo = "";
  let fila = [];
  let comillas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (comillas) {
      if (c === '"') {
        if (texto[i + 1] === '"') { campo += '"'; i++; } else comillas = false;
      } else campo += c;
    } else if (c === '"') comillas = true;
    else if (c === ",") { fila.push(campo); campo = ""; }
    else if (c === "\n") { fila.push(campo); filas.push(fila); fila = []; campo = ""; }
    else if (c !== "\r") campo += c;
  }
  if (campo.length || fila.length) { fila.push(campo); filas.push(fila); }
  const cabecera = filas.shift();
  return filas
    .filter((f) => f.length === cabecera.length && f.some((v) => v !== ""))
    .map((f) => Object.fromEntries(cabecera.map((k, j) => [k, f[j]])));
}

const listaRecorridos = (celda) =>
  (celda || "").split("|").map((v) => v.trim().toLowerCase()).filter(Boolean);

/* ------------------------------------------------------------------ */
/* 1. Lectura de fuentes                                               */
/* ------------------------------------------------------------------ */

console.log("== FASE 5B · sincronización del contrato de recorridos ==");
console.log(ESCRIBIR ? "modo: ESCRITURA PRODUCTIVA" : "modo: dry-run (solo lectura + candidato)");
console.log("");

const hashesAntes = {
  "datos-atlas.js": sha256(P.js),
  "datos-atlas.json": sha256(P.json),
};

const { datos: corpus, cabecera, finalDeLinea } = leerJs(P.js);
const espejo = JSON.parse(fs.readFileSync(P.json, "utf8"));
if (JSON.stringify(corpus) !== JSON.stringify(espejo)) {
  abortar("DESINCRONIZADO", "datos-atlas.js y datos-atlas.json no coinciden antes de migrar.");
}

const matriz = leerCsv(P.matriz);
const porId = new Map(matriz.map((f) => [f.id_obra, f]));

/** Estructura `revision` ya existente en los lotes, indexada por id de obra. */
const revisionDeLote = new Map();
const loteDeObra = new Map();
for (const rel of P.lotes) {
  const ruta = path.join(RAIZ, rel);
  if (!fs.existsSync(ruta)) { abortar("LOTE_AUSENTE", `No existe ${rel}.`); continue; }
  const nombre = path.basename(ruta);
  for (const entrada of JSON.parse(fs.readFileSync(ruta, "utf8")).entradas || []) {
    const m = entrada.migracion2 || {};
    const id = m.id || (entrada.heredado || {}).id;
    if (!id) continue;
    if (m.revision) revisionDeLote.set(id, m.revision);
    loteDeObra.set(id, nombre);
  }
}

/* ------------------------------------------------------------------ */
/* 2. Reconciliación de identificadores (§32)                          */
/* ------------------------------------------------------------------ */

const idsCorpus = corpus.obras.map((o) => o.id);
const setCorpus = new Set(idsCorpus);
const setMatriz = new Set(matriz.map((f) => f.id_obra));
const setLotes = new Set(loteDeObra.keys());

if (idsCorpus.length !== new Set(idsCorpus).size) {
  const vistos = new Set();
  const dup = idsCorpus.filter((id) => (vistos.has(id) ? true : (vistos.add(id), false)));
  abortar("ID_DUPLICADO", `Identificadores duplicados en el corpus: ${[...new Set(dup)].join(", ")}`);
}

const comunes = idsCorpus.filter((id) => setMatriz.has(id));
const soloMatriz = [...setMatriz].filter((id) => !setCorpus.has(id));
const soloCorpus = idsCorpus.filter((id) => !setMatriz.has(id));
const soloLotes = [...setLotes].filter((id) => !setCorpus.has(id));

console.log("-- Reconciliación de identificadores --");
console.log(`  corpus productivo .................. ${idsCorpus.length}`);
console.log(`  matriz de Fase 5A .................. ${setMatriz.size}`);
console.log(`  lotes generados .................... ${setLotes.size}`);
console.log(`  comunes corpus ∩ matriz ............ ${comunes.length}`);
console.log(`  solo en la matriz (fuera de corpus)  ${soloMatriz.length}${soloMatriz.length ? " · " + soloMatriz.join(", ") : ""}`);
console.log(`  solo en el corpus .................. ${soloCorpus.length}${soloCorpus.length ? " · " + soloCorpus.join(", ") : ""}`);
console.log(`  solo en lotes (fuera de corpus) .... ${soloLotes.length}${soloLotes.length ? " · " + soloLotes.join(", ") : ""}`);
console.log("");

for (const id of soloMatriz) {
  const fila = porId.get(id);
  if (fila.estado_recorrido === "confirmado") {
    abortar("CONFIRMADO_SIN_CORPUS", `${id} está confirmado en la matriz y no existe en el corpus.`);
  } else {
    registrar("FUERA_DE_CORPUS", `${id} (${fila.estado_recorrido}) permanece fuera del corpus; no se incorpora.`);
  }
}

/* Reconciliación de estados dentro y fuera del corpus (§7). */
const reconciliacion = {};
for (const fila of matriz) {
  const e = fila.estado_recorrido;
  reconciliacion[e] = reconciliacion[e] || { dentro: 0, fuera: 0 };
  if (setCorpus.has(fila.id_obra)) reconciliacion[e].dentro++;
  else reconciliacion[e].fuera++;
}
console.log("-- Reconciliación de estados --");
console.log("  estado matriz     dentro del corpus   fuera del corpus");
let sumaDentro = 0;
for (const e of ["confirmado", "preliminar", "pendiente", "sin_evaluar"]) {
  const r = reconciliacion[e] || { dentro: 0, fuera: 0 };
  sumaDentro += r.dentro;
  console.log(`  ${e.padEnd(16)}  ${String(r.dentro).padStart(11)}   ${String(r.fuera).padStart(16)}`);
}
console.log(`  ${"TOTAL".padEnd(16)}  ${String(sumaDentro).padStart(11)}`);
console.log("");
if (sumaDentro !== EXIGIDO.obras) {
  abortar("RECONCILIACION", `La suma dentro del corpus es ${sumaDentro} y debe ser ${EXIGIDO.obras}.`);
}

/* ------------------------------------------------------------------ */
/* 3. Aplicación del contrato                                          */
/* ------------------------------------------------------------------ */

const CAMPOS_NUEVOS = ["recorrido", "recorridos_sec", "arquitectura_recorrido", "estado_recorrido", "revision", "fuente_recorrido"];
const candidato = JSON.parse(JSON.stringify(corpus));
const reporte = [];

for (const obra of candidato.obras) {
  const fila = porId.get(obra.id);

  if (!fila) {
    // No figura en la matriz: no hay decisión que transformar.
    obra.recorrido = null;
    obra.recorridos_sec = [];
    obra.arquitectura_recorrido = null;
    obra.estado_recorrido = "sin_evaluar";
    reporte.push({ id: obra.id, estado: "sin_evaluar", recorrido: "", sec: "", arq: "", fuente: "", resultado: "sin decisión registrada" });
    registrar("SIN_FILA_EN_MATRIZ", `${obra.id} no figura en la matriz; se marca sin_evaluar.`);
    continue;
  }

  const estado = fila.estado_recorrido;
  if (!ESTADOS.has(estado)) {
    abortar("ESTADO_INVALIDO", `${obra.id}: estado «${estado}» fuera del vocabulario.`);
    continue;
  }
  if (estado === "preliminar") {
    abortar("PRELIMINAR", `${obra.id}: la migración no debe producir obras preliminares (fuente: ${fila.fuente_decision || "sin fuente"}).`);
    continue;
  }

  obra.estado_recorrido = estado;
  const arq = ARQUITECTURAS[obra.id];
  let resultado;

  if (estado === "confirmado") {
    if (arq) {
      obra.recorrido = null;
      obra.recorridos_sec = [...arq.sec];
      obra.arquitectura_recorrido = { tipo: arq.tipo, recorridos: [...arq.recorridos] };
      resultado = `arquitectura ${arq.tipo}`;
      // La matriz debe coincidir con el documento normativo.
      const matrizArq = listaRecorridos(fila.recorridos_en_conflicto);
      if (matrizArq.length && matrizArq.join(",") !== arq.recorridos.join(",")) {
        abortar("ARQUITECTURA_DISCREPA", `${obra.id}: la matriz declara ${matrizArq.join("/")} y el contrato ${arq.recorridos.join("/")}.`);
      }
      const matrizSec = listaRecorridos(fila.recorrido_secundario);
      if (matrizSec.join(",") !== arq.sec.join(",")) {
        abortar("SECUNDARIAS_DISCREPAN", `${obra.id}: secundarias de la matriz ${matrizSec.join("/") || "—"} frente al contrato ${arq.sec.join("/") || "—"}.`);
      }
      if (fila.recorrido_principal) {
        abortar("ARQUITECTURA_CON_PRINCIPAL", `${obra.id}: arquitectura especial con recorrido principal en la matriz.`);
      }
    } else {
      const principal = (fila.recorrido_principal || "").trim().toLowerCase();
      if (!principal) {
        abortar("CONFIRMADO_SIN_PRINCIPAL", `${obra.id}: confirmada, sin arquitectura aprobada y sin recorrido principal.`);
        continue;
      }
      obra.recorrido = principal;
      obra.recorridos_sec = listaRecorridos(fila.recorrido_secundario);
      obra.arquitectura_recorrido = null;
      resultado = "ordinaria";
    }
    if (fila.fuente_decision) obra.fuente_recorrido = [fila.fuente_decision];
    else abortar("SIN_FUENTE", `${obra.id}: confirmada sin fuente documental.`);
  } else {
    // pendiente · sin_evaluar
    obra.recorrido = null;
    obra.recorridos_sec = [];
    obra.arquitectura_recorrido = null;
    resultado = estado === "pendiente" ? "pendiente" : "sin evaluar";
    if (fila.fuente_decision) obra.fuente_recorrido = [fila.fuente_decision];
    if (fila.recorrido_principal) {
      abortar("NO_CONFIRMADO_CON_PRINCIPAL", `${obra.id}: estado ${estado} pero la matriz declara recorrido principal.`);
    }
  }

  // revision: se preserva la existente, no se inventa (§19).
  //
  // Excepción registrada como incidencia: tres manifestaciones del corpus llevan
  // `procedencia_verificada: false` mientras su lote las declara verificadas y
  // con revisión confirmada. El validador del proyecto prohíbe esa combinación y
  // esta fase no está autorizada a migrar `procedencia_verificada` (§6). No se
  // decide cuál de las dos capas tiene razón: se aplaza la revisión y se registra.
  const rev = revisionDeLote.get(obra.id);
  const revisionConfirmatoria = rev ? rev.estado === "confirmada" || rev.estado === "revisada" : true;
  if (obra.procedencia_verificada === false && revisionConfirmatoria) {
    registrar(
      "REVISION_APLAZADA",
      `${obra.id}: el corpus declara procedencia_verificada=false y el lote una revisión confirmada. ` +
      `No se migra revision; el recorrido sí, porque es una decisión independiente.`,
    );
  } else if (rev) {
    obra.revision = { ...rev };
  } else if (estado === "confirmado" && fila.evidencia) {
    obra.revision = { estado: "confirmada", fundamento: fila.evidencia };
  }

  reporte.push({
    id: obra.id,
    estado: obra.estado_recorrido,
    recorrido: obra.recorrido || "",
    sec: (obra.recorridos_sec || []).join("|"),
    arq: obra.arquitectura_recorrido ? `${obra.arquitectura_recorrido.tipo}:${obra.arquitectura_recorrido.recorridos.join("/")}` : "",
    fuente: (obra.fuente_recorrido || []).join("|"),
    resultado,
  });
}

/* Los campos nuevos se reordenan al final de cada obra siguiendo el orden del
   contrato, para que el corpus se lea como está escrito el documento normativo. */
for (const obra of candidato.obras) {
  const nuevos = {};
  for (const k of CAMPOS_NUEVOS) if (k in obra) { nuevos[k] = obra[k]; delete obra[k]; }
  for (const k of CAMPOS_NUEVOS) if (k in nuevos) obra[k] = nuevos[k];
}

/* ------------------------------------------------------------------ */
/* 4. Validaciones estructurales (§23)                                 */
/* ------------------------------------------------------------------ */

let conPrincipal = 0, fronteras = 0, sintesis = 0, ordinarias = 0;
const porEstado = { confirmado: 0, preliminar: 0, pendiente: 0, sin_evaluar: 0 };
const secConf = { 0: 0, 1: 0, 2: 0 };
const secConPrincipal = { 0: 0, 1: 0, 2: 0 };
const porRecorrido = {};
const porFuente = { lotes: 0, documentales: 0 };

for (const obra of candidato.obras) {
  const e = obra.estado_recorrido;
  if (!ESTADOS.has(e)) abortar("ESTADO_AUSENTE", `${obra.id}: sin estado_recorrido explícito.`);
  porEstado[e]++;

  const sec = obra.recorridos_sec || [];
  const a = obra.arquitectura_recorrido;

  if (obra.recorrido !== null) {
    conPrincipal++;
    if (!RECORRIDOS.has(obra.recorrido)) abortar("RECORRIDO_INEXISTENTE", `${obra.id}: recorrido «${obra.recorrido}» fuera del vocabulario.`);
    if (a !== null) abortar("PRINCIPAL_CON_ARQUITECTURA", `${obra.id}: tiene recorrido principal y arquitectura especial.`);
    if (e !== "confirmado") abortar("PRINCIPAL_SIN_CONFIRMAR", `${obra.id}: recorrido principal con estado ${e}.`);
    porRecorrido[obra.recorrido] = (porRecorrido[obra.recorrido] || 0) + 1;
  }

  if (a !== null) {
    if (obra.recorrido !== null) abortar("ARQUITECTURA_CON_PRINCIPAL", `${obra.id}: arquitectura especial con recorrido principal.`);
    if (a.tipo === "frontera_constitutiva") {
      fronteras++;
      if (a.recorridos.length !== 2) abortar("FRONTERA_NO_BILATERAL", `${obra.id}: la frontera tiene ${a.recorridos.length} recorridos y debe tener dos.`);
    } else if (a.tipo === "sintesis_multicorriente") {
      sintesis++;
      if (a.recorridos.length < 3) abortar("SINTESIS_INSUFICIENTE", `${obra.id}: la síntesis tiene ${a.recorridos.length} recorridos y necesita al menos tres.`);
    } else {
      abortar("ARQUITECTURA_TIPO", `${obra.id}: tipo de arquitectura no reconocido: ${a.tipo}.`);
    }
    for (const r of a.recorridos) if (!RECORRIDOS.has(r)) abortar("RECORRIDO_INEXISTENTE", `${obra.id}: arquitectura con recorrido «${r}».`);
  }

  if (e === "confirmado") {
    if (obra.recorrido === null && a === null) abortar("CONFIRMADO_VACIO", `${obra.id}: confirmada sin principal y sin arquitectura.`);
    ordinarias += a === null ? 1 : 0;
    secConf[Math.min(sec.length, 2)]++;
    if (obra.recorrido !== null) secConPrincipal[Math.min(sec.length, 2)]++;
    const f = (obra.fuente_recorrido || [])[0] || "";
    if (f.endsWith("-generado.json")) porFuente.lotes++; else porFuente.documentales++;
  } else if (obra.recorrido !== null || sec.length || a !== null) {
    abortar("NO_CONFIRMADO_CON_DATO", `${obra.id}: estado ${e} con datos de clasificación.`);
  }

  if (sec.length > 2) abortar("SECUNDARIAS_EXCEDIDAS", `${obra.id}: ${sec.length} recorridos secundarios; el máximo es dos.`);
  for (const r of sec) {
    if (!RECORRIDOS.has(r)) abortar("RECORRIDO_INEXISTENTE", `${obra.id}: secundaria «${r}» fuera del vocabulario.`);
    if (r === obra.recorrido) abortar("SECUNDARIA_REPETIDA", `${obra.id}: la principal se repite como secundaria.`);
    if (a && a.recorridos.includes(r)) abortar("SECUNDARIA_EN_ARQUITECTURA", `${obra.id}: «${r}» es a la vez estructurante y secundaria.`);
  }

  if (obra.revision !== undefined) {
    if (obra.revision.estado === "candidatura_preliminar") {
      abortar("REVISION_PRELIMINAR", `${obra.id}: revisión en candidatura preliminar; la migración no admite preliminares.`);
    }
    if ((obra.revision.estado === "confirmada" || obra.revision.estado === "revisada") && !obra.revision.fundamento) {
      abortar("REVISION_SIN_FUNDAMENTO", `${obra.id}: revisión ${obra.revision.estado} sin fundamento.`);
    }
    if (obra.procedencia_verificada === false && (obra.revision.estado === "confirmada" || obra.revision.estado === "revisada")) {
      abortar("REVISION_PROCEDENCIA", `${obra.id}: procedencia no verificada con revisión ${obra.revision.estado}.`);
    }
  }
}

/* Invariantes globales. */
if (candidato.obras.length !== EXIGIDO.obras) abortar("TOTAL_OBRAS", `El candidato tiene ${candidato.obras.length} obras y debe tener ${EXIGIDO.obras}.`);
if (candidato.relaciones.length !== EXIGIDO.relaciones) abortar("TOTAL_RELACIONES", `El candidato tiene ${candidato.relaciones.length} relaciones y debe tener ${EXIGIDO.relaciones}.`);
const comprobar = (nombre, obtenido, esperado) => {
  if (obtenido !== esperado) abortar("CONTEO", `${nombre}: ${obtenido} (se exige ${esperado}).`);
};
comprobar("confirmadas", porEstado.confirmado, EXIGIDO.confirmadas);
comprobar("preliminares", porEstado.preliminar, EXIGIDO.preliminares);
comprobar("con recorrido principal", conPrincipal, EXIGIDO.conPrincipal);
comprobar("fronteras constitutivas", fronteras, EXIGIDO.fronteras);
comprobar("síntesis multicorriente", sintesis, EXIGIDO.sintesis);
comprobar("confirmadas con alguna secundaria", secConf[1] + secConf[2], EXIGIDO.conAlgunaSecundaria);
comprobar("confirmadas con dos secundarias", secConf[2], EXIGIDO.conDosSecundarias);

/* El corpus previo debe quedar intacto salvo los campos autorizados (§34). */
const previo = new Map(corpus.obras.map((o) => [o.id, o]));
for (const obra of candidato.obras) {
  const antes = previo.get(obra.id);
  for (const [k, v] of Object.entries(antes)) {
    if (JSON.stringify(obra[k]) !== JSON.stringify(v)) abortar("CAMPO_ALTERADO", `${obra.id}: el campo heredado ${k} cambió.`);
  }
  for (const k of Object.keys(obra)) {
    if (!(k in antes) && !CAMPOS_NUEVOS.includes(k)) abortar("CAMPO_NO_AUTORIZADO", `${obra.id}: campo nuevo no autorizado ${k}.`);
  }
}
for (const clave of ["meta", "fenomenos", "lugares", "relaciones", "redirecciones"]) {
  if (JSON.stringify(candidato[clave]) !== JSON.stringify(corpus[clave])) abortar("BLOQUE_ALTERADO", `El bloque ${clave} cambió.`);
}

/* Casos sentinela (§29). */
const SENTINELA = {
  stoutafterlove:       (o) => o.estado_recorrido === "confirmado" && o.recorrido === "c10" && o.arquitectura_recorrido === null,
  rifkinfictions:       (o) => o.recorrido === null && o.arquitectura_recorrido?.tipo === "frontera_constitutiva" && o.arquitectura_recorrido.recorridos.join() === "c1,c3",
  pricefirst:           (o) => o.recorrido === null && o.arquitectura_recorrido?.recorridos.join() === "c3,c9",
  whiteheadtiger:       (o) => o.recorrido === null && o.arquitectura_recorrido?.recorridos.join() === "c1,c7",
  schwartz_seaofstorms: (o) => o.recorrido === null && o.arquitectura_recorrido?.recorridos.join() === "c6,c7" && o.recorridos_sec.join() === "c2,c4",
  perezmorales:         (o) => o.recorrido === null && o.arquitectura_recorrido?.tipo === "sintesis_multicorriente" && o.arquitectura_recorrido.recorridos.join() === "c3,c5,c7" && o.recorridos_sec.length === 0,
  pinedashipwrecked:    (o) => o.recorrido === null && o.arquitectura_recorrido?.recorridos.join() === "c1,c4,c7" && o.recorridos_sec.length === 0,
  jaffeconcrete:        (o) => o.recorrido === "c6" && o.estado_recorrido === "confirmado" && o.arquitectura_recorrido === null,
  gudynas:              (o) => o.estado_recorrido === "pendiente" && o.recorrido === null,
  mintz:                (o) => o.estado_recorrido === "pendiente" && o.recorrido === null,
  mintzarea:            (o) => o.estado_recorrido === "confirmado" && o.recorrido === "c2",
  steward:              (o) => o.estado_recorrido === "confirmado",
};
const sentinelas = [];
const indice = new Map(candidato.obras.map((o) => [o.id, o]));
for (const [id, prueba] of Object.entries(SENTINELA)) {
  const o = indice.get(id);
  const ok = o ? prueba(o) : false;
  sentinelas.push({ id, ok, detalle: o ? `${o.estado_recorrido} · ${o.recorrido || "null"} · sec ${(o.recorridos_sec || []).join("/") || "—"} · ${o.arquitectura_recorrido ? o.arquitectura_recorrido.tipo : "ordinaria"}` : "AUSENTE DEL CORPUS" });
  if (!ok) abortar("SENTINELA", `${id}: no cumple la condición esperada (${o ? "presente" : "ausente"}).`);
}
const externo = indice.has("stewardpuertorico");
sentinelas.push({ id: "stewardpuertorico", ok: !externo, detalle: externo ? "SE INCORPORÓ AL CORPUS" : "fuera del corpus, como debe" });
if (externo) abortar("SENTINELA", "stewardpuertorico entró al corpus productivo.");

/* ------------------------------------------------------------------ */
/* 5. Informe                                                          */
/* ------------------------------------------------------------------ */

console.log("-- Totales del candidato --");
console.log(`  obras ......................... ${candidato.obras.length}`);
console.log(`  relaciones .................... ${candidato.relaciones.length}`);
console.log(`  confirmadas ................... ${porEstado.confirmado}`);
console.log(`  pendientes .................... ${porEstado.pendiente}`);
console.log(`  sin evaluar ................... ${porEstado.sin_evaluar}`);
console.log(`  preliminares .................. ${porEstado.preliminar}`);
console.log("");
console.log("-- Arquitecturas --");
console.log(`  ordinarias (con principal) .... ${ordinarias}`);
console.log(`  fronteras constitutivas ....... ${fronteras}`);
console.log(`  síntesis multicorriente ....... ${sintesis}`);
console.log("");
console.log("-- Secundarias --");
console.log(`  entre las ${porEstado.confirmado} confirmadas:      0 → ${secConf[0]} · 1 → ${secConf[1]} · 2 → ${secConf[2]}`);
console.log(`  entre las ${conPrincipal} con principal:  0 → ${secConPrincipal[0]} · 1 → ${secConPrincipal[1]} · 2 → ${secConPrincipal[2]}`);
console.log("");
console.log("-- Distribución por recorrido --");
console.log("  " + Object.keys(porRecorrido).sort((a, b) => +a.slice(1) - +b.slice(1)).map((k) => `${k}:${porRecorrido[k]}`).join("  "));
console.log("");
console.log("-- Fuentes de las confirmadas --");
console.log(`  lotes generados ............... ${porFuente.lotes}`);
console.log(`  decisiones documentales ....... ${porFuente.documentales}`);
console.log("");
console.log("-- Casos sentinela --");
for (const s of sentinelas) console.log(`  ${s.ok ? "ok  " : "FALLA"} ${s.id.padEnd(22)} ${s.detalle}`);
console.log("");

if (incidencias.length) {
  console.log(`-- Incidencias (${incidencias.length}) --`);
  for (const i of incidencias) console.log(`  [${i.codigo}] ${i.mensaje}`);
  console.log("");
}

if (errores.length) {
  console.log(`== MIGRACIÓN ABORTADA · ${errores.length} inconsistencia(s) ==`);
  for (const e of errores) console.log(`  [${e.codigo}] ${e.mensaje}`);
  process.exit(1);
}

/* ------------------------------------------------------------------ */
/* 6. Candidato y escritura                                            */
/* ------------------------------------------------------------------ */

fs.mkdirSync(P.derivados, { recursive: true });
const rutaCandidato = path.join(P.derivados, "datos-atlas-fase-5b-candidato.json");
fs.writeFileSync(rutaCandidato, JSON.stringify(candidato, null, 2) + "\n", "utf8");
console.log(`candidato escrito: ${path.relative(RAIZ, rutaCandidato)} · ${sha256(rutaCandidato).slice(0, 16)}…`);

const rutaEspejoCandidato = path.join(P.derivados, "datos-atlas-fase-5b-candidato.js");
escribirJs(rutaEspejoCandidato, { cabecera, finalDeLinea }, candidato);
console.log(`espejo del candidato: ${path.relative(RAIZ, rutaEspejoCandidato)}`);

if (REPORTE) {
  const rutaReporte = path.join(P.derivados, "reporte-migracion-fase-5b.csv");
  const cols = ["id", "estado", "recorrido", "sec", "arq", "fuente", "resultado"];
  const esc = (v) => (/[",\n]/.test(v) ? `"${String(v).replace(/"/g, '""')}"` : v);
  fs.writeFileSync(rutaReporte, [cols.join(","), ...reporte.map((r) => cols.map((c) => esc(r[c] ?? "")).join(","))].join("\n") + "\n", "utf8");
  console.log(`reporte obra por obra: ${path.relative(RAIZ, rutaReporte)} · ${reporte.length} filas`);
}

if (!ESCRIBIR) {
  console.log("");
  console.log("dry-run completo. No se tocó ningún archivo productivo.");
  console.log("Para escribir: node scripts/sincronizar-recorridos-atlas-2.mjs --escribir");
  process.exit(0);
}

/* Copia de seguridad antes de sustituir (§42). */
const respaldo = path.join(P.derivados, "respaldo-previo-fase-5b");
fs.mkdirSync(respaldo, { recursive: true });
fs.copyFileSync(P.js, path.join(respaldo, "datos-atlas.js"));
fs.copyFileSync(P.json, path.join(respaldo, "datos-atlas.json"));
console.log("");
console.log("-- Escritura productiva --");
console.log(`  respaldo en ${path.relative(RAIZ, respaldo)}`);
console.log(`  hash previo datos-atlas.js ..... ${hashesAntes["datos-atlas.js"]}`);
console.log(`  hash previo datos-atlas.json ... ${hashesAntes["datos-atlas.json"]}`);

escribirJs(P.js, { cabecera, finalDeLinea }, candidato);
execFileSync("python3", [P.sincronizador], { cwd: RAIZ, stdio: "inherit" });

console.log(`  hash nuevo datos-atlas.js ...... ${sha256(P.js)}`);
console.log(`  hash nuevo datos-atlas.json .... ${sha256(P.json)}`);

const verificacion = leerJs(P.js).datos;
const espejoFinal = JSON.parse(fs.readFileSync(P.json, "utf8"));
if (JSON.stringify(verificacion) !== JSON.stringify(candidato)) { console.log("  FALLA: el .js escrito no coincide con el candidato."); process.exit(1); }
if (JSON.stringify(espejoFinal) !== JSON.stringify(candidato)) { console.log("  FALLA: el .json regenerado no coincide con el candidato."); process.exit(1); }
console.log("  .js y .json equivalentes al candidato · verificado");
console.log("");
console.log("escritura completada.");
