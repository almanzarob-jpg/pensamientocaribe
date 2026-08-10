#!/usr/bin/env node

/**
 * Comprueba que las cifras escritas a mano en las páginas del sitio coincidan
 * con el corpus vivo.
 *
 * El atlas publica sus recuentos en once archivos que no leen el dato: lo repiten.
 * Cada versión del corpus obliga a revisarlos uno por uno, y eso ya falló varias
 * veces (el «198 obras» de marca-de-marea sobrevivió a dos versiones). Este script
 * convierte esa lista de verificación en una comprobación que se puede correr.
 *
 * Uso desde la raíz del repositorio:
 *   node scripts/verificar-cifras-sitio.mjs
 *
 * Sale con código 1 si alguna cifra publicada contradice al corpus.
 */

import fs from "node:fs";
import path from "node:path";

const raiz = process.cwd();
const corpus = JSON.parse(fs.readFileSync(path.join(raiz, "data/agua-de-por-medio/datos-atlas.json"), "utf8"));

const O = corpus.obras;
const R = corpus.relaciones;
const sinTildes = (s) => (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

// ------------------------------------------------------- la verdad del corpus
const V = {
  entradas: O.length,
  obras: O.filter((o) => o.k === "obra").length,
  manifestaciones: O.filter((o) => o.k === "manifestacion").length,
  relaciones: R.length,
  resonancias: R.filter((r) => r.tipo === "resonancia").length,
  disonancias: R.filter((r) => r.tipo === "disonancia").length,
  lugares: Object.keys(corpus.lugares).length,
  version: corpus.meta.version,
};
V.porCorroborar = R.filter((r) => /por corroborar/i.test(String(r.fuente || ""))).length;
V.corroboradas = V.relaciones - V.porCorroborar;
const lenguas = { anglofonas: 0, hispanas: 0, francofonas: 0, neerlandesas: 0 };
O.forEach((o) => {
  const s = sinTildes(o.tr);
  if (/anglofon|ingles/.test(s)) lenguas.anglofonas++;
  if (/hispanofon|hispano|espanol/.test(s)) lenguas.hispanas++;
  if (/francofon|frances/.test(s)) lenguas.francofonas++;
  if (/neerland|holandes/.test(s)) lenguas.neerlandesas++;
});
Object.assign(V, lenguas);

// --------------------------------------------------------------- afirmaciones
// Cada regla: archivo, patrón con un grupo capturado, y el valor que debe tener.
const reglas = [
  ["proyectos/con-el-agua-de-por-medio.html", /archipiélica: (\d+) obras/, "entradas"],
  ["proyectos/con-el-agua-de-por-medio.html", /(\d+) obras y manifestaciones del Gran Caribe conectadas/g, "entradas"],
  ["proyectos/con-el-agua-de-por-medio.html", /conecta (\d+) obras y manifestaciones/, "entradas"],
  ["proyectos/con-el-agua-de-por-medio.html", /(\d+) de 588 relaciones/g, "porCorroborar"],
  ["proyectos/marca-de-marea.html", /id="mObras">(\d+)</, "entradas"],
  ["proyectos/marca-de-marea.html", /id="mVer">([\d.]+)</, "version"],
  ["proyectos/marca-de-marea.html", /(\d+) de (?:\d+) corrientes esperan fuente/, "porCorroborar"],
  ["proyectos/marca-de-marea.html", /registra (\d+) disonancias/, "disonancias"],
  ["proyectos/marca-de-marea.html", /frente a (\d+) resonancias/, "resonancias"],
  ["proyectos/marca-de-marea.html", /(\d+) obras anglófonas/, "anglofonas"],
  ["proyectos/marca-de-marea.html", /anglófonas, (\d+) hispanas/, "hispanas"],
  ["proyectos/marca-de-marea.html", /hispanas, (\d+) francófonas/, "francofonas"],
  ["proyectos/marca-de-marea.html", /francófonas, (\d+) neerlandesas/, "neerlandesas"],
  ["proyectos/marca-de-marea.html", /(\d+) entradas frente a (?:\d+) obras de investigación/, "manifestaciones"],
  ["proyectos/marca-de-marea.html", /entradas frente a (\d+) obras de investigación/, "obras"],
  ["proyectos/reflujo-guia.html", /entre (\d+) obras/, "entradas"],
  ["proyectos/reflujo-guia.html", /las (\d+) entradas presentes/, "entradas"],
  ["proyectos/reflujo-guia.html", /De las (?:\d+) corrientes, (\d+) son resonancias/, "resonancias"],
  ["proyectos/reflujo-guia.html", /son resonancias y solo (\d+) son disonancias/, "disonancias"],
  ["proyectos/reflujo-guia-en.html", /between (\d+) works/, "entradas"],
  ["proyectos/reflujo-guia-en.html", /the (\d+) present entries/, "entradas"],
  ["proyectos/metodologia-agua-de-por-medio.html", /contiene cinco entradas frente a (\d+) obras/, "obras"],
  ["proyectos/metodologia-agua-de-por-medio.html", /registra (\d+) resonancias/, "resonancias"],
  ["proyectos/metodologia-agua-de-por-medio.html", /resonancias y (\d+) disonancias/, "disonancias"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /contains five entries against (\d+) works/, "obras"],
];

const errores = [];
const comprobadas = [];
const cache = new Map();
const leer = (p) => {
  if (!cache.has(p)) cache.set(p, fs.readFileSync(path.join(raiz, p), "utf8"));
  return cache.get(p);
};

for (const [archivo, patron, clave] of reglas) {
  let texto;
  try { texto = leer(archivo); } catch { errores.push(`[FALTA] ${archivo} no existe.`); continue; }
  const esperado = String(V[clave]);
  const global = patron.flags.includes("g");
  const encontrados = global ? [...texto.matchAll(patron)].map((m) => m[1]) : (texto.match(patron) || [])[1] !== undefined ? [texto.match(patron)[1]] : [];
  if (!encontrados.length) {
    errores.push(`[NO_ENCONTRADO] ${archivo}: el patrón de «${clave}» ya no aparece. ¿Se reescribió la frase?`);
    continue;
  }
  encontrados.forEach((hallado) => {
    if (hallado !== esperado) errores.push(`[DESFASE] ${archivo}: dice ${hallado} donde el corpus dice ${esperado} (${clave}).`);
    else comprobadas.push(`${archivo} · ${clave} = ${hallado}`);
  });
}

// ------------------------------------------------------------------- informe
console.log(`Corpus v${V.version}: ${V.entradas} entradas (${V.obras} obras, ${V.manifestaciones} manifestaciones), ` +
  `${V.relaciones} relaciones (${V.corroboradas} corroboradas, ${V.porCorroborar} por corroborar), ${V.lugares} lugares.`);
console.log(`Reparto por lengua: ${V.anglofonas} anglófonas, ${V.hispanas} hispanas, ${V.francofonas} francófonas, ${V.neerlandesas} neerlandesas.\n`);
console.log(`Afirmaciones comprobadas: ${comprobadas.length}`);
errores.forEach((e) => console.log(e));
console.log(`\nResultado: ${errores.length} desfase(s).`);
process.exit(errores.length ? 1 : 0);
