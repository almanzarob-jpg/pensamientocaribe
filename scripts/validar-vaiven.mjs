#!/usr/bin/env node
/* Validador de «Con el vaivén de las corrientes».
 *
 * Comprueba que los datos del mapa sonoro son coherentes entre sí y que las
 * cifras que repiten las páginas (rutas, puertos, rutas con canción) coinciden
 * con data/vaiven-corrientes/. No corrige nada: avisa y sale con 1.
 *
 *   node scripts/validar-vaiven.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(raiz, 'data/vaiven-corrientes');
const json = (f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
const nodos = json('nodes.json'), rutas = json('edges.json'), lect = json('lecturas.json'), cat = json('fuentes-sonora.json');
const errores = [];
const err = (m) => errores.push(m);

const idNodo = new Set(nodos.map((n) => n.id));
const idRuta = new Set(rutas.map((r) => r.id));
const idCorr = new Set(lect.corrientes.map((c) => c.id));
const claves = new Set(cat.referencias.map((r) => r.key));
if (idNodo.size !== nodos.length) err('Hay puertos con id repetido.');
if (idRuta.size !== rutas.length) err('Hay rutas con id repetido.');
const titulos = new Set();
for (const r of rutas) {
  if (!idNodo.has(r.source) || !idNodo.has(r.target)) err(`${r.id}: puerto de origen o destino inexistente.`);
  const n = (id) => nodos.find((x) => x.id === id)?.nombre;
  if (r.source_nombre !== n(r.source) || r.target_nombre !== n(r.target)) err(`${r.id}: source_nombre/target_nombre no coinciden con los puertos.`);
  if (!idCorr.has(r.corriente)) err(`${r.id}: corriente «${r.corriente}» no está en lecturas.json.`);
  if (!r.fuente) err(`${r.id}: ruta sin fuente.`);
  if (!/\d{4}/.test(String(r.anos))) err(`${r.id}: «anos» sin un año de cuatro cifras; la travesía no puede ordenarla.`);
  for (const k of ['titulo', 'anos', 'desc', 'claves']) if (!r[k + '_en']) err(`${r.id}: falta ${k}_en.`);
  if (titulos.has(r.titulo)) err(`${r.id}: título repetido; el enlace #ruta= dejaría de ser único.`);
  titulos.add(r.titulo);
  for (const k of r.zoteroKeys || []) if (!claves.has(k)) err(`${r.id}: clave ${k} sin entrada en fuentes-sonora.json.`);
}
for (const n of nodos) for (const k of n.zoteroKeys || []) if (!claves.has(k)) err(`${n.id}: clave ${k} sin entrada en fuentes-sonora.json.`);
for (const x of lect.ramajes) for (const r of x.rutas) if (!idRuta.has(r)) err(`Ramaje ${x.id}: la ruta ${r} no existe.`);
for (const x of lect.travesias) for (const p of x.pasos) {
  if (p.ruta !== 'umbral' && !idRuta.has(p.ruta)) err(`Travesía ${x.id}: la ruta ${p.ruta} no existe.`);
  if (!p.consigna || !p.consigna_en) err(`Travesía ${x.id}: parada ${p.ruta} sin consigna en los dos idiomas.`);
}
const idMar = new Set(lect.mar.corrientes.map((c) => c.id));
for (const k of lect.mar.pasaje) if (!idMar.has(k)) err(`Mar de fondo: la corriente ${k} del pasaje no existe.`);
for (const k of lect.mar.zoteroKeys || []) if (!claves.has(k)) err(`Mar de fondo: clave ${k} sin entrada en fuentes-sonora.json.`);

/* Cifras que las páginas repiten en letras */
const ES = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
const DEC_ES = { 30: 'treinta', 40: 'cuarenta', 50: 'cincuenta', 60: 'sesenta', 70: 'setenta', 80: 'ochenta', 90: 'noventa' };
const es = (n) => n < 30 ? ES[n] : (n % 10 ? `${DEC_ES[n - n % 10]} y ${ES[n % 10]}` : DEC_ES[n]);
const EN = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const DEC_EN = { 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety' };
const en = (n) => n < 20 ? EN[n] : (n % 10 ? `${DEC_EN[n - n % 10]}-${EN[n % 10]}` : DEC_EN[n]);
const R = rutas.length, P = nodos.length, S = rutas.filter((r) => r.cancion && r.cancion.titulo).length;
const leer = (rel) => fs.readFileSync(path.join(raiz, rel), 'utf8');
const debe = (rel, frase) => { if (!leer(rel).toLowerCase().includes(frase.toLowerCase())) err(`${rel}: no dice «${frase}» (los datos tienen ${R} rutas, ${P} puertos, ${S} con canción).`); };
debe('proyectos/mas-ramas-que-raices.html', `${es(R)} rutas de ida y vuelta, ${es(P)} puertos`);
debe('proyectos/mas-ramas-que-raices.html', `${es(R)} rutas, ${es(P)} puertos, cada ruta con su fuente y ${es(S)} de ellas con registro sonoro`);
debe('proyectos/mas-ramas-que-raices.html', `Las ${es(R)} rutas en el tiempo`);
debe('proyectos/mas-ramas-que-raices-en.html', `${en(R)} routes there and back, ${en(P)} ports`);
debe('proyectos/mas-ramas-que-raices-en.html', `${en(R)} routes, ${en(P)} ports, each route with its academic source and ${en(S)} of them with a sound recording`);
debe('proyectos/mas-ramas-que-raices-en.html', `The ${en(R)} routes in time`);
debe('index.html', `${es(R)} rutas de ida y vuelta`);
debe('proyectos/index.html', `${es(R)} rutas de ida y vuelta`);

if (errores.length) { errores.forEach((e) => console.log('✗ ' + e)); console.log(`Vaivén: ${errores.length} error(es).`); process.exit(1); }
console.log(`Vaivén: ${R} rutas, ${P} puertos, ${S} con canción, ${lect.corrientes.length} corrientes, ${lect.ramajes.length} ramajes, ${lect.travesias.length} travesías; páginas al día.`);
