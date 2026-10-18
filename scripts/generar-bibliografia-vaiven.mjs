#!/usr/bin/env node
/* Bibliografía única de «Con el vaivén de las corrientes».
 *
 * La lista APA de las dos páginas del mapa (ES y EN) se genera desde
 * data/vaiven-corrientes/fuentes-sonora.json, que es la fuente de verdad.
 *
 *   node scripts/generar-bibliografia-vaiven.mjs            escribe las páginas
 *   node scripts/generar-bibliografia-vaiven.mjs --check    solo comprueba (exit 1 si difieren)
 *
 * Avisa —sin bloquear— de las referencias que las rutas o los puertos citan
 * (zoteroKeys) y que aún no están publicadas por falta de datos.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(raiz, 'data/vaiven-corrientes');
const check = process.argv.includes('--check');
const cat = JSON.parse(fs.readFileSync(path.join(dir, 'fuentes-sonora.json'), 'utf8'));
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function renderizar(r, lang) {
  const anio = r.sin_fecha ? (lang === 'en' ? 'n.d.' : 's. f.') : r.anio;
  const cabeza = `${esc(r.autores_texto)} (${anio}). `;
  const nota = r.nota ? (r.nota[lang] || r.nota.es) : '';
  if (r.tipo === 'articulo') {
    return `${cabeza}${esc(r.titulo)}. <em>${esc(r.contenedor)}</em>, ${esc(r.numero)}.`;
  }
  const t = esc(r.titulo);
  let s = `${cabeza}<em>${t}</em>`;
  if (r.editorial) s += (/[!?]$/.test(r.titulo) ? ' ' : '. ') + esc(r.editorial) + '.';
  else if (nota) s += (r.nota_estilo === 'aparte' ? `. [${esc(nota)}].` : ` [${esc(nota)}].`);
  else s += '.';
  return s;
}

const publicables = cat.referencias.filter((r) => r.enPagina);
const ordenar = (a, b) => a.autores_texto.localeCompare(b.autores_texto, 'es', { sensitivity: 'base' })
  || (a.anio || '9999').localeCompare(b.anio || '9999');
publicables.sort(ordenar);

const paginas = { es: 'proyectos/mas-ramas-que-raices.html', en: 'proyectos/mas-ramas-que-raices-en.html' };
let difieren = 0;
for (const [lang, rel] of Object.entries(paginas)) {
  const ruta = path.join(raiz, rel);
  const html = fs.readFileSync(ruta, 'utf8');
  const re = /(<ul class="apa-referencias">\n)([\s\S]*?)(<\/ul>)/;
  if (!re.test(html)) { console.error(`✗ ${rel}: no encuentro <ul class="apa-referencias">`); process.exit(1); }
  const items = publicables.map((r) => `<li>${renderizar(r, lang)}</li>`).join('\n') + '\n';
  const nuevo = html.replace(re, (_, a, _b, c) => a + items + c);
  if (nuevo !== html) {
    difieren++;
    if (check) console.log(`✗ ${rel}: la bibliografía de la página no coincide con fuentes-sonora.json`);
    else { fs.writeFileSync(ruta, nuevo); console.log(`✓ ${rel}: bibliografía regenerada (${publicables.length} referencias)`); }
  } else console.log(`✓ ${rel}: ya coincide (${publicables.length} referencias)`);
}

// Citadas en rutas o puertos pero ausentes de la bibliografía publicada
const nodos = JSON.parse(fs.readFileSync(path.join(dir, 'nodes.json'), 'utf8'));
const aristas = JSON.parse(fs.readFileSync(path.join(dir, 'edges.json'), 'utf8'));
const porClave = new Map(cat.referencias.map((r) => [r.key, r]));
const huecos = new Map();
for (const x of [...nodos, ...aristas]) for (const k of x.zoteroKeys || []) {
  const r = porClave.get(k);
  if (!r) huecos.set(k, [...(huecos.get(k) || []), `${x.id} (clave sin entrada en el catálogo)`]);
  else if (!r.enPagina) huecos.set(k, [...(huecos.get(k) || []), x.id]);
}
for (const [k, donde] of huecos) console.log(`⚠ ${k} está citada en ${donde.join(', ')} y no aparece en la bibliografía publicada: faltan sus datos.`);
console.log(`Referencias: ${cat.referencias.length} en el catálogo, ${publicables.length} publicadas, ${huecos.size} citadas sin publicar.`);
process.exit(check && difieren ? 1 : 0);
