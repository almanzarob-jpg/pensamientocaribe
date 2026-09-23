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
V.friccionesEvaluadas = R.filter((r) => r.friccion !== undefined).length;
V.friccionesDeclaradas = R.filter((r) => r.friccion && r.friccion.hay === true).length;
V.corroboradas = V.relaciones - V.porCorroborar;
V.porCorroborarPctEs = (V.porCorroborar / V.relaciones * 100).toFixed(1).replace(".", ",");
V.porCorroborarPctEn = (V.porCorroborar / V.relaciones * 100).toFixed(1);
// Mismo criterio que marca-de-marea.html, y por la misma razón: el campo tr tiene
// la forma «lengua (lugar, trayectoria o corpus estudiado)», así que la lengua se
// lee fuera del paréntesis. Contar por la cadena entera hacía que una obra hispana
// sobre Colombia y Francia figurara como francófona. Si los dos criterios divergen,
// el sitio y su comprobador dicen cosas distintas, que es peor que no comprobar.
const desc = (tr) => String(tr || "").replace(/\([^)]*\)/g, " ");
const LENGUAS = {
  anglofonas: /angl[oó]fon|ingl[eé]s/i,
  hispanas: /hispan[oó]|espa[nñ]ol/i,
  francofonas: /franc[oó]fon|franc[eé]s/i,
  neerlandesas: /neerland/i,
  danesas: /dan[eé]s/i,
  lusofonas: /lus[oó]fon|portugu[eé]s/i,
};
for (const [clave, re] of Object.entries(LENGUAS)) {
  V[clave] = O.filter((o) => re.test(desc(o.tr))).length;
}
V.sinLengua = O.filter((o) => !Object.values(LENGUAS).some((re) => re.test(desc(o.tr)))).length;

// --------------------------------------------------------------- afirmaciones
// Cada regla: archivo, patrón con un grupo capturado, y el valor que debe tener.
const reglas = [
  ["proyectos/con-el-agua-de-por-medio.html", /archipiélica: (\d+) obras/, "entradas"],
  ["proyectos/con-el-agua-de-por-medio.html", /(\d+) obras y manifestaciones del Gran Caribe conectadas/g, "entradas"],
  ["proyectos/con-el-agua-de-por-medio.html", /conecta (\d+) obras y manifestaciones/, "entradas"],
  ["proyectos/con-el-agua-de-por-medio.html", /(\d+) de (?:\d+) relaciones/g, "porCorroborar"],
  ["proyectos/con-el-agua-de-por-medio.html", /\d+ de (\d+) relaciones/g, "relaciones"],
  ["proyectos/con-el-agua-de-por-medio.html", /(\d+) of \d+ relations remain/, "porCorroborar"],
  ["proyectos/con-el-agua-de-por-medio.html", /\d+ of (\d+) relations remain/, "relaciones"],
  ["proyectos/con-el-agua-de-por-medio.html", /(\d+) de \d+ relaciones \(/g, "porCorroborar"],
  ["proyectos/con-el-agua-de-por-medio.html", /\d+ de (\d+) relaciones \(/g, "relaciones"],
  ["proyectos/con-el-agua-de-por-medio.html", /relaciones \(([\d,]+) %\)/g, "porCorroborarPctEs"],
  ["proyectos/con-el-agua-de-por-medio.html", /(\d+) of \d+ relations \(/, "porCorroborar"],
  ["proyectos/con-el-agua-de-por-medio.html", /\d+ of (\d+) relations \(/, "relaciones"],
  ["proyectos/con-el-agua-de-por-medio.html", /relations \(([\d.]+)%\)/, "porCorroborarPctEn"],
  // Añadidas el 22-09-2026: la guía del reflujo (ES y EN) no tenía ni una regla y por eso
  // llevaba meses diciendo 652 corrientes, 226 sin fuente y 20 fricciones con el corpus en
  // 841 / 246 / 7. La versión inglesa además se había desincronizado de la española.
  ["proyectos/reflujo-guia.html", /proyecto-meta-value">(\d+) de \d+</, "porCorroborar"],
  ["proyectos/reflujo-guia.html", /proyecto-meta-value">\d+ de (\d+)</, "relaciones"],
  ["proyectos/reflujo-guia.html", /proyecto-meta-value">(\d+) de \d+ evaluadas</, "friccionesDeclaradas"],
  ["proyectos/reflujo-guia.html", /proyecto-meta-value">\d+ de (\d+) evaluadas</, "friccionesEvaluadas"],
  ["proyectos/reflujo-guia.html", /De las (\d+) corrientes que traza/, "relaciones"],
  ["proyectos/reflujo-guia.html", /que traza entre (\d+) obras/, "obras"],
  ["proyectos/reflujo-guia.html", /obras, (\d+) —algo más/, "porCorroborar"],
  ["proyectos/reflujo-guia.html", /De las (\d+) corrientes, \d+ son resonancias/, "relaciones"],
  ["proyectos/reflujo-guia.html", /corrientes, (\d+) son resonancias/, "resonancias"],
  ["proyectos/reflujo-guia.html", /solo (\d+) son disonancias/, "disonancias"],
  ["proyectos/reflujo-guia.html", /apenas (\d+) de \d+ corrientes/, "disonancias"],
  ["proyectos/reflujo-guia.html", /apenas \d+ de (\d+) corrientes/, "relaciones"],
  ["proyectos/reflujo-guia.html", /declarada en (\d+) relaciones/, "friccionesDeclaradas"],
  ["proyectos/reflujo-guia.html", /de las (\d+) en que la pregunta/, "friccionesEvaluadas"],
  ["proyectos/reflujo-guia.html", /hay (\d+) casillas abiertas/, "porCorroborar"],
  ["proyectos/reflujo-guia-en.html", /proyecto-meta-value">(\d+) of \d+</, "porCorroborar"],
  ["proyectos/reflujo-guia-en.html", /proyecto-meta-value">\d+ of (\d+)</, "relaciones"],
  ["proyectos/reflujo-guia-en.html", /proyecto-meta-value">(\d+) of \d+ assessed</, "friccionesDeclaradas"],
  ["proyectos/reflujo-guia-en.html", /proyecto-meta-value">\d+ of (\d+) assessed</, "friccionesEvaluadas"],
  ["proyectos/reflujo-guia-en.html", /Of the (\d+) connections it draws/, "relaciones"],
  ["proyectos/reflujo-guia-en.html", /it draws between (\d+) works/, "obras"],
  ["proyectos/reflujo-guia-en.html", /works, (\d+) are still marked/, "porCorroborar"],
  ["proyectos/reflujo-guia-en.html", /Of the (\d+) connections, \d+ are resonances/, "relaciones"],
  ["proyectos/reflujo-guia-en.html", /connections, (\d+) are resonances/, "resonancias"],
  ["proyectos/reflujo-guia-en.html", /only (\d+) are dissonances/, "disonancias"],
  ["proyectos/reflujo-guia-en.html", /a mere (\d+) of \d+ connections/, "disonancias"],
  ["proyectos/reflujo-guia-en.html", /a mere \d+ of (\d+) connections/, "relaciones"],
  ["proyectos/reflujo-guia-en.html", /declared in (\d+) relations/, "friccionesDeclaradas"],
  ["proyectos/reflujo-guia-en.html", /out of the (\d+) where the question/, "friccionesEvaluadas"],
  ["proyectos/reflujo-guia-en.html", /since (\d+) boxes stand open/, "porCorroborar"],
  ["proyectos/marca-de-marea.html", /id="mObras">(\d+)</, "entradas"],
  ["proyectos/marca-de-marea.html", /id="mVer">([\d.]+)</, "version"],
  ["proyectos/marca-de-marea.html", /(\d+) de (?:\d+) corrientes esperan fuente/, "porCorroborar"],
  ["proyectos/marca-de-marea.html", /registra (\d+) disonancias/, "disonancias"],
  ["proyectos/marca-de-marea.html", /frente a (\d+) resonancias/, "resonancias"],
  ["proyectos/marca-de-marea.html", /(\d+) obras anglófonas/, "anglofonas"],
  ["proyectos/marca-de-marea.html", /(\d+) entradas no declaran lengua/, "sinLengua"],
  ["proyectos/marca-de-marea.html", /anglófonas, (\d+) hispanas/, "hispanas"],
  ["proyectos/marca-de-marea.html", /hispanas, (\d+) francófonas/, "francofonas"],
  ["proyectos/marca-de-marea.html", /francófonas, (\d+) neerlandesas/, "neerlandesas"],
  ["proyectos/marca-de-marea.html", /neerlandesas, (\d+) danesa/, "danesas"],
  ["proyectos/marca-de-marea.html", /(\d+) entradas frente a (?:\d+) obras de investigación/, "manifestaciones"],
  ["proyectos/marca-de-marea.html", /entradas frente a (\d+) obras de investigación/, "obras"],
  ["proyectos/reflujo-guia.html", /entre (\d+) obras/, "entradas"],
  ["proyectos/reflujo-guia.html", /las (\d+) entradas presentes/, "entradas"],
  ["proyectos/reflujo-guia.html", /De las (?:\d+) corrientes, (\d+) son resonancias/, "resonancias"],
  ["proyectos/reflujo-guia.html", /son resonancias y solo (\d+) son disonancias/, "disonancias"],
  ["proyectos/reflujo-guia-en.html", /between (\d+) works/, "entradas"],
  ["proyectos/reflujo-guia-en.html", /the (\d+) present entries/, "entradas"],
  ["proyectos/metodologia-agua-de-por-medio.html", /contiene \d+ entradas frente a (\d+) obras/, "obras"],
  ["proyectos/metodologia-agua-de-por-medio.html", /registra (\d+) resonancias/, "resonancias"],
  ["proyectos/metodologia-agua-de-por-medio.html", /resonancias y (\d+) disonancias/, "disonancias"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /contains \d+ entries against (\d+) works/, "obras"],
  // Añadidas el 17-09-2026: la revisión en vivo encontró la metodología (ES y EN) y la
  // marca de marea diciendo 257 obras / 614 relaciones con el corpus ya en 276 / 652,
  // y este comprobador en verde, porque esas frases no tenían regla.
  ["proyectos/metodologia-agua-de-por-medio.html", /Obras<\/span><span class="proyecto-meta-value">(\d+)</, "entradas"],
  ["proyectos/metodologia-agua-de-por-medio.html", /Relaciones<\/span><span class="proyecto-meta-value">(\d+)</, "relaciones"],
  ["proyectos/metodologia-agua-de-por-medio.html", /Corroboradas<\/span><span class="proyecto-meta-value">(\d+) \(/, "corroboradas"],
  ["proyectos/metodologia-agua-de-por-medio.html", /desacuerdos entre (\d+) vínculos/, "relaciones"],
  ["proyectos/metodologia-agua-de-por-medio.html", /De las (\d+) relaciones actuales/, "relaciones"],
  ["proyectos/metodologia-agua-de-por-medio.html", /actuales, (\d+) están corroboradas/, "corroboradas"],
  ["proyectos/metodologia-agua-de-por-medio.html", /y (\d+) siguen pendientes/, "porCorroborar"],
  ["proyectos/metodologia-agua-de-por-medio.html", /corpus va por la v([\d.]+)/, "version"],
  ["proyectos/metodologia-agua-de-por-medio.html", /Zenodo es la v[\d.]+ \((\d+) obras/, "entradas"],
  ["proyectos/metodologia-agua-de-por-medio.html", /Zenodo es la v[\d.]+ \(\d+ obras y (\d+) relaciones/, "relaciones"],
  ["proyectos/metodologia-agua-de-por-medio.html", /subrepresentadas: (\d+) de/, "disonancias"],
  ["proyectos/metodologia-agua-de-por-medio.html", /subrepresentadas: \d+ de (\d+) relaciones/, "relaciones"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /Works<\/span><span class="proyecto-meta-value">(\d+)</, "entradas"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /Relations<\/span><span class="proyecto-meta-value">(\d+)</, "relaciones"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /Corroborated<\/span><span class="proyecto-meta-value">(\d+) \(/, "corroboradas"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /records (\d+) resonances/, "resonancias"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /resonances and (\d+) dissonances/, "disonancias"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /disagreements in (\d+) links/, "relaciones"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /Of the current (\d+) relations/, "relaciones"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /relations, (\d+) are corroborated/, "corroboradas"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /and (\d+) remain pending/, "porCorroborar"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /corpus is at v([\d.]+)/, "version"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /Zenodo is v[\d.]+ \((\d+) works/, "entradas"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /Zenodo is v[\d.]+ \(\d+ works and (\d+) relations/, "relaciones"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /underrepresented: (\d+) of/, "disonancias"],
  ["proyectos/metodologia-agua-de-por-medio-en.html", /underrepresented: \d+ of (\d+) relations/, "relaciones"],
  ["proyectos/marca-de-marea.html", /desacuerdos entre (\d+) vínculos/, "relaciones"],
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
console.log(`Lengua de publicación declarada: ${V.anglofonas} anglófonas, ${V.hispanas} hispanas, ${V.francofonas} francófonas, ${V.neerlandesas} neerlandesas, ${V.danesas} danesa(s), ${V.lusofonas} lusófona(s); ${V.sinLengua} sin declarar.\n`);
console.log(`Afirmaciones comprobadas: ${comprobadas.length}`);
errores.forEach((e) => console.log(e));
console.log(`\nResultado: ${errores.length} desfase(s).`);
process.exit(errores.length ? 1 : 0);
