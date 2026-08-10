#!/usr/bin/env node

/**
 * Ejecuta la fusión steward ← stewardpuertorico aprobada en el dictamen P00.
 *
 * No decide nada: aplica lo que el lote P00 ya aprobó.
 *   - steward sobrevive («el identificador más antiguo conserva los enlaces citables»)
 *   - stewardpuertorico se retira y redirige a steward
 *   - steward recibe la autoría corregida que P00 aprobó
 *   - la única relación de stewardpuertorico pasa a steward
 *
 * El archivo canónico es datos-atlas.js: sincronizar.py lee el .js y escribe el
 * .json, no al revés. Por eso este script escribe el .js y regenera el .json.
 *
 * Uso:
 *   node scripts/aplicar-fusion-steward.mjs --simular   (no escribe nada)
 *   node scripts/aplicar-fusion-steward.mjs             (aplica)
 *
 * Después:
 *   python3 data/agua-de-por-medio/sincronizar.py --check
 *   node scripts/validar-atlas.mjs
 */

import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const raiz = process.cwd();
const RUTA_JS = path.join(raiz, "data/agua-de-por-medio/datos-atlas.js");
const RUTA_JSON = path.join(raiz, "data/agua-de-por-medio/datos-atlas.json");
const simular = process.argv.includes("--simular");

const SUPERVIVIENTE = "steward";
const RETIRADO = "stewardpuertorico";
const AUTORIA_APROBADA =
  "Julian H. Steward, Robert A. Manners, Eric R. Wolf, Elena Padilla Seda, Sidney W. Mintz y Raymond L. Scheele";
const VERSION_NUEVA = "1.16.0";
const NOTA_VERSION =
  "1.16.0 ejecuta la fusión aprobada en el dictamen P00: stewardpuertorico se retira y redirige a steward, " +
  "que era la misma obra de 1956 registrada dos veces. El corpus pasa de 233 a 232 entradas. Las 588 relaciones " +
  "se conservan: la única relación de la entrada retirada se reasigna al identificador superviviente. " +
  "steward recibe la autoría completa corregida en P00.";

const fatal = (m) => { console.error("[ABORTA] " + m); process.exit(1); };

// ------------------------------------------------------------------ lectura
const textoJs = fs.readFileSync(RUTA_JS, "utf8");
const marca = "window.ATLAS=";
const inicio = textoJs.indexOf(marca);
if (inicio === -1) fatal("No encuentro «window.ATLAS=» en datos-atlas.js.");
const cabecera = textoJs.slice(0, inicio);
const cuerpo = textoJs.slice(inicio + marca.length).replace(/;?\s*$/, "");
const atlas = JSON.parse(cuerpo);

// ------------------------------------------------------- precondiciones
if (atlas.meta.version === VERSION_NUEVA) fatal("El corpus ya está en " + VERSION_NUEVA + ". La fusión ya se aplicó.");
if (atlas.meta.version !== "1.15.0") fatal("Esperaba la versión 1.15.0 y encontré " + atlas.meta.version + ".");

const vivo = atlas.obras.find((o) => o.id === SUPERVIVIENTE);
const muerto = atlas.obras.find((o) => o.id === RETIRADO);
if (!vivo) fatal(SUPERVIVIENTE + " no existe en el corpus.");
if (!muerto) fatal(RETIRADO + " no existe en el corpus. ¿Ya se fusionó a mano?");
if (vivo.t.trim() !== muerto.t.trim()) fatal("Los títulos no coinciden; no son la misma obra según el corpus.");

const rel = atlas.relaciones;
const bucle = rel.some((r) => (r.a === SUPERVIVIENTE && r.b === RETIRADO) || (r.b === SUPERVIVIENTE && r.a === RETIRADO));
if (bucle) fatal("Hay una relación directa entre las dos entradas: fusionarlas crearía un bucle.");

const vecinos = (id) => new Set(rel.filter((r) => r.a === id || r.b === id).map((r) => (r.a === id ? r.b : r.a)));
const comunes = [...vecinos(RETIRADO)].filter((x) => vecinos(SUPERVIVIENTE).has(x));
if (comunes.length) fatal("Vecinos comunes, la fusión duplicaría relaciones: " + comunes.join(", "));

const obrasAntes = atlas.obras.length;
const relAntes = rel.length;
const aReasignar = rel.filter((r) => r.a === RETIRADO || r.b === RETIRADO);

// ------------------------------------------------------------- aplicación
vivo.a = AUTORIA_APROBADA;
aReasignar.forEach((r) => {
  if (r.a === RETIRADO) r.a = SUPERVIVIENTE;
  if (r.b === RETIRADO) r.b = SUPERVIVIENTE;
});
atlas.obras = atlas.obras.filter((o) => o.id !== RETIRADO);
atlas.redirecciones = { ...(atlas.redirecciones || {}), [RETIRADO]: SUPERVIVIENTE };
atlas.meta.version = VERSION_NUEVA;
atlas.meta.fecha = new Date().toISOString().slice(0, 10);
atlas.meta.nota_version = NOTA_VERSION;

// --------------------------------------------------------- comprobaciones
const errores = [];
if (atlas.obras.length !== obrasAntes - 1) errores.push("El recuento de obras no bajó exactamente en una.");
if (atlas.relaciones.length !== relAntes) errores.push("Se perdieron o duplicaron relaciones.");
if (atlas.obras.some((o) => o.id === RETIRADO)) errores.push("La entrada retirada sigue presente.");
const huerfanas = atlas.relaciones.filter((r) => r.a === RETIRADO || r.b === RETIRADO);
if (huerfanas.length) errores.push(huerfanas.length + " relaciones siguen apuntando a la entrada retirada.");
const ids = new Set(atlas.obras.map((o) => o.id));
const rotas = atlas.relaciones.filter((r) => !ids.has(r.a) || !ids.has(r.b));
if (rotas.length) errores.push(rotas.length + " relaciones apuntan a un identificador inexistente.");
if (errores.length) fatal(errores.join(" | "));

// ----------------------------------------------------------------- salida
console.log("Fusión " + SUPERVIVIENTE + " ← " + RETIRADO);
console.log("  obras:       " + obrasAntes + " → " + atlas.obras.length);
console.log("  relaciones:  " + relAntes + " → " + atlas.relaciones.length + " (sin pérdida)");
console.log("  reasignadas: " + aReasignar.length + " → " + aReasignar.map((r) => r.a + "–" + r.b).join(", "));
console.log("  autoría:     " + AUTORIA_APROBADA);
console.log("  redirección: #" + RETIRADO + " → #" + SUPERVIVIENTE);
console.log("  versión:     1.15.0 → " + VERSION_NUEVA);

if (simular) {
  console.log("\n[SIMULACIÓN] No se escribió ningún archivo.");
  process.exit(0);
}

// Las copias van fuera del repositorio a propósito. La primera versión las
// dejaba junto al corpus y un «git add -A» las publicó: 580 kB de corpus viejo
// servidos en el sitio junto al vigente. El histórico de git ya es el respaldo.
const respaldo = path.join(os.tmpdir(), "atlas-respaldo-" + Date.now());
fs.mkdirSync(respaldo, { recursive: true });
fs.copyFileSync(RUTA_JS, path.join(respaldo, "datos-atlas.js"));
fs.copyFileSync(RUTA_JSON, path.join(respaldo, "datos-atlas.json"));
fs.writeFileSync(RUTA_JS, cabecera + marca + JSON.stringify(atlas) + "\n", "utf8");
fs.writeFileSync(RUTA_JSON, JSON.stringify(atlas, null, 2) + "\n", "utf8");
console.log("\nEscritos datos-atlas.js y datos-atlas.json. Copias previas en " + respaldo);
console.log("Ahora: python3 data/agua-de-por-medio/sincronizar.py --check && node scripts/validar-atlas.mjs");
