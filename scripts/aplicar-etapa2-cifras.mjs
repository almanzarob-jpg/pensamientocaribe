#!/usr/bin/env node

/**
 * Aplica la Etapa 2 del plan operativo del Atlas 2.0 sobre el corpus vivo.
 *
 * No decide nada nuevo: ejecuta lo que decisiones-pendientes.md y el plan
 * operativo ya dejaron resuelto.
 *
 *   - Corrige la cabecera de datos-atlas.js: el archivo canónico es datos-atlas.js
 *     (sincronizar.py lee el .js y escribe el .json; aplicar-fusion-steward.mjs
 *     ya lo documentó así), no al revés. El comentario del propio archivo decía
 *     lo contrario y quedaba en contradicción con sincronizar.py.
 *   - Unifica meta.responsable como "Grupo de Investigación Pensamiento Caribe".
 *   - totumo y figueroa: k pasa de manifestacion a obra, con procedencia
 *     "corpus heredado" y procedencia_verificada true. Son obras de investigación
 *     con autoría identificada; lo único que corregía el campo era el tipo.
 *   - chande, manoalzada, esquiva: procedencia "manifestación" y
 *     procedencia_verificada false. No se reclasifican ni se inventa autoría o
 *     año: quedan declaradas explícitamente como pendientes de verificación,
 *     que es lo que ya eran de hecho.
 *
 * El archivo canónico es datos-atlas.js: sincronizar.py lee el .js y escribe el
 * .json, no al revés. Por eso este script escribe el .js y regenera el .json.
 *
 * Uso:
 *   node scripts/aplicar-etapa2-cifras.mjs --simular   (no escribe nada)
 *   node scripts/aplicar-etapa2-cifras.mjs             (aplica)
 *
 * Después:
 *   python3 data/agua-de-por-medio/sincronizar.py --check
 *   node scripts/validar-atlas.mjs
 *   node scripts/verificar-cifras-sitio.mjs
 */

import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const raiz = process.cwd();
const RUTA_JS = path.join(raiz, "data/agua-de-por-medio/datos-atlas.js");
const RUTA_JSON = path.join(raiz, "data/agua-de-por-medio/datos-atlas.json");
const simular = process.argv.includes("--simular");

const RESPONSABLE_ANTERIOR = "Centro de Pensamiento Caribe";
const RESPONSABLE_NUEVO = "Grupo de Investigación Pensamiento Caribe";

const CABECERA_ANTERIOR =
  "/* Generado desde datos-atlas.json (misma fuente canonica, espejo para carga por script sin depender de fetch). */\n";
const CABECERA_NUEVA =
  "/* Fuente canónica del corpus. datos-atlas.json se genera desde este archivo con sincronizar.py: no editar el .json a mano. */\n";

const RECLASIFICAR_OBRA = ["totumo", "figueroa"];
const DECLARAR_PENDIENTE = ["chande", "manoalzada", "esquiva"];

const fatal = (m) => { console.error("[ABORTA] " + m); process.exit(1); };

// ------------------------------------------------------------------ lectura
const textoJs = fs.readFileSync(RUTA_JS, "utf8");
if (!textoJs.startsWith(CABECERA_ANTERIOR)) {
  fatal("La cabecera de datos-atlas.js no es la esperada. ¿Ya se aplicó este script o cambió el archivo?");
}
const marca = "window.ATLAS=";
const inicio = textoJs.indexOf(marca);
if (inicio === -1) fatal("No encuentro «window.ATLAS=» en datos-atlas.js.");
const cuerpo = textoJs.slice(inicio + marca.length).replace(/;?\s*$/, "");
const atlas = JSON.parse(cuerpo);

// ------------------------------------------------------- precondiciones
if (atlas.meta.responsable !== RESPONSABLE_ANTERIOR) {
  fatal(`meta.responsable no es "${RESPONSABLE_ANTERIOR}" (es "${atlas.meta.responsable}"). ¿Ya se aplicó?`);
}
for (const id of [...RECLASIFICAR_OBRA, ...DECLARAR_PENDIENTE]) {
  const obra = atlas.obras.find((o) => o.id === id);
  if (!obra) fatal(`${id} no existe en el corpus.`);
  if (obra.k !== "manifestacion") fatal(`${id} ya no tiene k=manifestacion (tiene k=${obra.k}). ¿Ya se aplicó?`);
}

// ------------------------------------------------------------- aplicación
atlas.meta.responsable = RESPONSABLE_NUEVO;

const cambios = [];
for (const id of RECLASIFICAR_OBRA) {
  const obra = atlas.obras.find((o) => o.id === id);
  obra.k = "obra";
  obra.procedencia = "corpus heredado";
  obra.procedencia_verificada = true;
  cambios.push(`${id}: k manifestacion→obra, procedencia corpus heredado, procedencia_verificada true`);
}
for (const id of DECLARAR_PENDIENTE) {
  const obra = atlas.obras.find((o) => o.id === id);
  obra.procedencia = "manifestación";
  obra.procedencia_verificada = false;
  cambios.push(`${id}: k se conserva (manifestacion), procedencia manifestación, procedencia_verificada false`);
}

const VERSION_ANTERIOR = atlas.meta.version;
atlas.meta.version = "1.16.1";
atlas.meta.fecha = new Date().toISOString().slice(0, 10);
atlas.meta.nota_version =
  "1.16.1 ejecuta la Etapa 2 del plan operativo: unifica la denominación institucional como " +
  RESPONSABLE_NUEVO + " en el corpus, reclasifica totumo y figueroa como obras de investigación " +
  "(procedencia corpus heredado, procedencia_verificada true) y declara chande, manoalzada y esquiva " +
  "con procedencia manifestación y procedencia_verificada false, sin inventar autoría ni año. " +
  "Ninguna entrada ni relación se agrega o retira; solo cambian los campos meta.responsable, k, " +
  "procedencia y procedencia_verificada de las cinco entradas nombradas.";

// --------------------------------------------------------- comprobaciones
const errores = [];
if (atlas.obras.length !== 232) errores.push("El recuento de obras cambió (esperaba 232, hay " + atlas.obras.length + ").");
if (atlas.relaciones.length !== 588) errores.push("El recuento de relaciones cambió (esperaba 588, hay " + atlas.relaciones.length + ").");
for (const id of RECLASIFICAR_OBRA) {
  const obra = atlas.obras.find((o) => o.id === id);
  if (obra.k !== "obra") errores.push(`${id} no quedó con k=obra.`);
}
for (const id of DECLARAR_PENDIENTE) {
  const obra = atlas.obras.find((o) => o.id === id);
  if (obra.k !== "manifestacion") errores.push(`${id} no debía cambiar k y cambió.`);
  if (obra.procedencia_verificada !== false) errores.push(`${id} debía quedar con procedencia_verificada false.`);
}
if (atlas.meta.responsable !== RESPONSABLE_NUEVO) errores.push("meta.responsable no quedó unificado.");
if (errores.length) fatal(errores.join(" | "));

// ----------------------------------------------------------------- salida
console.log("Etapa 2 · corpus " + VERSION_ANTERIOR + " → " + atlas.meta.version);
console.log("  meta.responsable: " + RESPONSABLE_ANTERIOR + " → " + RESPONSABLE_NUEVO);
cambios.forEach((c) => console.log("  " + c));
console.log("  obras: " + atlas.obras.length + " (sin cambio) · relaciones: " + atlas.relaciones.length + " (sin cambio)");

if (simular) {
  console.log("\n[SIMULACIÓN] No se escribió ningún archivo.");
  process.exit(0);
}

const respaldo = path.join(os.tmpdir(), "atlas-respaldo-etapa2-" + Date.now());
fs.mkdirSync(respaldo, { recursive: true });
fs.copyFileSync(RUTA_JS, path.join(respaldo, "datos-atlas.js"));
fs.copyFileSync(RUTA_JSON, path.join(respaldo, "datos-atlas.json"));
fs.writeFileSync(RUTA_JS, CABECERA_NUEVA + marca + JSON.stringify(atlas) + "\n", "utf8");
fs.writeFileSync(RUTA_JSON, JSON.stringify(atlas, null, 2) + "\n", "utf8");
console.log("\nEscritos datos-atlas.js y datos-atlas.json. Copias previas en " + respaldo);
console.log("Ahora: python3 data/agua-de-por-medio/sincronizar.py --check && node scripts/validar-atlas.mjs && node scripts/verificar-cifras-sitio.mjs");
