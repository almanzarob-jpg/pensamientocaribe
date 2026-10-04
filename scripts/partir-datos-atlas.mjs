#!/usr/bin/env node
/**
 * Parte el corpus del atlas en lo que el visitante necesita y cuándo lo necesita.
 *
 *   data/agua-de-por-medio/datos-atlas.js   ← fuente canónica (no se toca; siembras,
 *                                             validadores, marca de marea y Zenodo leen esta)
 *   data/agua-de-por-medio/atlas-indice.js  ← lo que dibuja el mapa (se carga al entrar)
 *   data/agua-de-por-medio/atlas-fichas.js  ← lo que solo lee la ficha (llega en segundo plano)
 *
 * El expediente interno (revisiones, propuestas de clasificación, lotes, registro interno
 * de cada vínculo) no sale del canónico: la interfaz no lo muestra y no tiene por qué
 * viajar al navegador de cada visitante.
 *
 * Se excluye por lista negra, no por lista blanca: un campo nuevo que traiga una siembra
 * entra al índice por defecto. Puede pesar de más, pero nunca falta.
 *
 * Uso desde la raíz del repositorio:
 *   node scripts/partir-datos-atlas.mjs           (genera)
 *   node scripts/partir-datos-atlas.mjs --check   (sale con 1 si los derivados no están al día)
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const raiz = process.cwd();
const dir = path.join(raiz, "data/agua-de-por-medio");
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, "datos-atlas.js"), "utf8"), ctx);
const A = JSON.parse(JSON.stringify(ctx.window.ATLAS));

// --- campos que la página no lee nunca (comprobado en el código el 04-10-2026)
const INTERNO_OBRA = ["propuesta_clasificacion", "anclaje_cartografico", "fuente_recorrido", "fuentes_revision",
  "operaciones", "nota_bibliografica", "lote_incorporacion", "proceso", "lenguas_publicacion", "revision_previa",
  "procedencia_verificada", "division", "titulo_previo"];
const INTERNO_REL = ["revision_interna", "aspecto", "limite", "apoyo", "lote_incorporacion", "fuente_previa",
  "id_lote", "objeto_disonancia", "lote_revision", "tipo_previo"];
// --- campos que solo lee la ficha
const FICHA_OBRA = ["ap", "edicion_consultada", "orillas"];
// La fuente de una relación corroborada solo se lee entera en la ficha; el mapa solo
// necesita saber que existe. Se deja este rótulo, que esCorr() lee como corroborada y
// que es lo que se ve si las fichas no llegan a cargar.
const FUENTE_RESUMIDA = "Fuente declarada (detalle en la ficha completa)";
const esPendiente = (f) => !f || /corroborar/i.test(f);
const clave = (r) => r.a + "\u0001" + r.b;

const fichas = { version: A.meta.version, obras: {}, fuentes: {} };
for (const o of A.obras) {
  const f = {};
  for (const k of FICHA_OBRA) if (k in o) { f[k] = o[k]; delete o[k]; }
  if (Object.keys(f).length) fichas.obras[o.id] = f;
  for (const k of INTERNO_OBRA) delete o[k];
  // de la revisión, la página solo lee el estado (insignia 2.0 de la tabla)
  if (o.revision && typeof o.revision === "object") {
    if (o.revision.estado !== undefined) o.revision = { estado: o.revision.estado }; else delete o.revision;
  }
}
for (const r of A.relaciones) {
  for (const k of INTERNO_REL) delete r[k];
  if (!esPendiente(r.fuente)) {
    const k = clave(r);
    if (!(k in fichas.fuentes)) fichas.fuentes[k] = r.fuente;
    r.fuente = FUENTE_RESUMIDA;
  }
}
const cabecera = (que) => `/* GENERADO por scripts/partir-datos-atlas.mjs desde datos-atlas.js (v${A.meta.version}). No editar a mano: ${que}. */\n`;
const salida = {
  "atlas-indice.js": cabecera("lo que dibuja el mapa") + "window.ATLAS=" + JSON.stringify(A) + ";\n",
  "atlas-fichas.js": cabecera("lo que solo lee la ficha; llega en segundo plano") + "window.ATLAS_FICHAS=" + JSON.stringify(fichas) + ";\n",
};
const kb = (s) => (Buffer.byteLength(s) / 1024).toFixed(0) + " KB";
if (process.argv.includes("--check")) {
  const viejos = Object.entries(salida).filter(([f, s]) => { try { return fs.readFileSync(path.join(dir, f), "utf8") !== s; } catch { return true; } }).map(([f]) => f);
  if (viejos.length) { console.log("Desactualizados: " + viejos.join(", ") + ". Corre node scripts/partir-datos-atlas.mjs"); process.exit(1); }
  console.log(`Índice y fichas al día con el corpus v${A.meta.version}.`); process.exit(0);
}
for (const [f, s] of Object.entries(salida)) fs.writeFileSync(path.join(dir, f), s);
const canon = fs.statSync(path.join(dir, "datos-atlas.js")).size / 1024;
console.log(`Corpus v${A.meta.version}: canónico ${canon.toFixed(0)} KB → índice ${kb(salida["atlas-indice.js"])} + fichas ${kb(salida["atlas-fichas.js"])}.`);
