#!/usr/bin/env node
/**
 * Carril B · única intervención de externalización.
 *
 * Sube la marca de versión con que el HTML pide el corpus. El archivo cambió dos
 * veces desde que se escribió esa marca (Fase 5B y su regeneración), de modo que
 * un visitante con el JS anterior en caché recibiría el HTML nuevo y los datos
 * viejos. Medido: la interfaz no lanza errores, pero los trece contadores del
 * panel quedan en cero, elegir un recorrido atenúa las 232 obras sin destacar
 * ninguna y la ficha pierde su bloque de Recorridos.
 *
 *   node aplicar-carril-b.mjs <raizRepo> <raizOriginales>
 */
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto';
const RAIZ=process.argv[2], ORIG=process.argv[3]||RAIZ;
const REL='proyectos/con-el-agua-de-por-medio.html';
const sha=t=>crypto.createHash('sha256').update(t).digest('hex');
let html=fs.readFileSync(path.join(ORIG,REL),'utf8');
const antes=sha(html), bytesAntes=Buffer.byteLength(html);
const buscar='src="../data/agua-de-por-medio/datos-atlas.js?v=202608071"';
const poner ='src="../data/agua-de-por-medio/datos-atlas.js?v=202608251"';
const veces=html.split(buscar).length-1;
if(veces!==1){ console.error(`ABORTA · el anclaje aparece ${veces} veces`); process.exit(1); }
html=html.replace(buscar,poner);
fs.writeFileSync(path.join(RAIZ,REL),html,'utf8');
console.log(`1 sustitución · ${REL}`);
console.log(`  antes    ${antes}  ${bytesAntes} bytes`);
console.log(`  después  ${sha(html)}  ${Buffer.byteLength(html)} bytes`);
