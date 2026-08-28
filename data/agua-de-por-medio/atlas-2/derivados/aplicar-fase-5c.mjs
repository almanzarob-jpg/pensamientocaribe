#!/usr/bin/env node
/**
 * Fase 5C · aplicación reproducible de la interfaz de Recorridos.
 *
 * Cada sustitución se declara con su texto exacto y aborta si no aparece
 * exactamente una vez. El script se ejecuta siempre desde los archivos
 * originales de la Fase 4B, de modo que el resultado no depende del orden ni
 * de ejecuciones anteriores.
 *
 *   node /tmp/5c/aplicar-5c.mjs <raizRepo> <raizOriginales>
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const RAIZ = process.argv[2];
const ORIG = process.argv[3] || RAIZ;
const HTML = path.join(RAIZ, 'proyectos/con-el-agua-de-por-medio.html');
const CSS  = path.join(RAIZ, 'css/con-el-agua-de-por-medio.css');
const sha = t => crypto.createHash('sha256').update(t).digest('hex');

let html = fs.readFileSync(path.join(ORIG, 'proyectos/con-el-agua-de-por-medio.html'), 'utf8');
let css  = fs.readFileSync(path.join(ORIG, 'css/con-el-agua-de-por-medio.css'), 'utf8');
const hashAntes = { html: sha(html), css: sha(css) };

let n = 0;
function sub(cual, buscar, poner) {
  const texto = cual === 'html' ? html : css;
  const veces = texto.split(buscar).length - 1;
  if (veces !== 1) {
    console.error(`ABORTA · el anclaje aparece ${veces} veces (se esperaba 1):\n${buscar.slice(0, 160)}`);
    process.exit(1);
  }
  const nuevo = texto.replace(buscar, () => poner);
  if (cual === 'html') html = nuevo; else css = nuevo;
  n++;
}

/* ══════════════════════════════════════════════════════════════════════
   1 · Control «Recorridos» en la barra de controles
   ══════════════════════════════════════════════════════════════════════ */
sub('html',
`    <div class="grp familia"><div class="seg base"><button id="filtrosBtn" type="button" aria-expanded="false" aria-controls="panelFiltros" data-i18n-title="btnFiltrosAbrir" data-i18n="lblFiltros">Filtros</button></div></div>`,
`    <div class="grp familia"><div class="seg base"><button id="recorridosBtn" type="button" aria-expanded="false" aria-controls="panelRecorridos" data-i18n-title="btnRecorridosAbrir" data-i18n="lblRecorridos">Recorridos</button></div></div>
    <div class="grp"><div class="seg base"><button id="filtrosBtn" type="button" aria-expanded="false" aria-controls="panelFiltros" data-i18n-title="btnFiltrosAbrir" data-i18n="lblFiltros">Filtros</button></div></div>`);

/* ══════════════════════════════════════════════════════════════════════
   2 · Panel lateral de Recorridos, con la misma forma que Filtros e Información
   ══════════════════════════════════════════════════════════════════════ */
sub('html',
`  <aside id="panelFiltros" class="panelLateral" aria-label="Filtros" hidden>`,
`  <aside id="panelRecorridos" class="panelLateral" aria-label="Recorridos" hidden>
    <button type="button" id="recorridosCerrar" class="panelCerrar" data-i18n-title="btnRecorridosCerrar" aria-label="Cerrar recorridos">×</button>
    <h2 data-i18n="lblRecorridos">Recorridos</h2>
    <p class="recNota" data-i18n="recProvisional">Denominaciones provisionales, en revisión académica.</p>
    <div class="grp"><div class="seg recSeg" id="recSeg" role="group" aria-label="Recorridos C1 a C10"></div></div>
    <p class="recNota recPie" data-i18n="recPie">El Atlas sigue en investigación: las obras fuera del recorrido elegido no desaparecen, se atenúan.</p>
  </aside>
  <aside id="panelFiltros" class="panelLateral" aria-label="Filtros" hidden>`);

/* ══════════════════════════════════════════════════════════════════════
   3 · Diccionario de interfaz · español
   ══════════════════════════════════════════════════════════════════════ */
sub('html',
`    lblCapa:"Capa", cAmbas:"Ambas", cObra:"Obras", cManif:"Manifestaciones culturales",`,
`    lblCapa:"Capa", cAmbas:"Ambas", cObra:"Obras", cManif:"Manifestaciones culturales",
    /* Fase 5C · Recorridos C1–C10. Las diez denominaciones se transcriben literalmente
       de data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json, que es la fuente canónica
       vigente, y coinciden con los dictámenes académicos salvo en C1, cuya denominación
       aprobada en dictamen sigue pendiente de incorporación al catálogo. */
    lblRecorridos:"Recorridos", btnRecorridosAbrir:"Consultar los recorridos C1–C10", btnRecorridosCerrar:"Cerrar recorridos",
    recTodos:"Todos los recorridos", recPendientes:"Pendientes", recSinEvaluar:"Sin evaluar",
    recProvisional:"Denominaciones provisionales, en revisión académica.",
    recPie:"El Atlas sigue en investigación: las obras fuera del recorrido elegido no desaparecen, se atenúan.",
    recPrincipal:"Recorrido principal", recTambien:"También dialoga con",
    recFrontera:"Frontera constitutiva", recSintesis:"Síntesis multicorriente",
    recClasif:"Clasificación de recorrido", recPendiente:"Pendiente", recSinEval:"Sin evaluar",
    recEstado:"Estado del recorrido", recEstConfirmado:"confirmado", recEstPendiente:"pendiente", recEstSinEvaluar:"sin evaluar",
    recFuente:"Decidido en", recBloque:"Recorridos", thRecorrido:"Recorrido", chipRecorrido:"Recorrido",
    recDesglose:"{e} estructurantes · {s} como recorrido secundario",`);

/* ══════════════════════════════════════════════════════════════════════
   4 · Diccionario de interfaz · inglés
   ══════════════════════════════════════════════════════════════════════ */
sub('html',
`    lblCapa:"Layer", cAmbas:"Both", cObra:"Works", cManif:"Cultural manifestations",`,
`    lblCapa:"Layer", cAmbas:"Both", cObra:"Works", cManif:"Cultural manifestations",
    lblRecorridos:"Itineraries", btnRecorridosAbrir:"Browse itineraries C1–C10", btnRecorridosCerrar:"Close itineraries",
    recTodos:"All itineraries", recPendientes:"Pending", recSinEvaluar:"Not assessed",
    recProvisional:"Provisional denominations, under academic review.",
    recPie:"The Atlas is still under research: works outside the chosen itinerary are dimmed, not removed.",
    recPrincipal:"Main itinerary", recTambien:"Also converses with",
    recFrontera:"Constitutive boundary", recSintesis:"Multi-itinerary synthesis",
    recClasif:"Itinerary classification", recPendiente:"Pending", recSinEval:"Not assessed",
    recEstado:"Itinerary status", recEstConfirmado:"confirmed", recEstPendiente:"pending", recEstSinEvaluar:"not assessed",
    recFuente:"Decided in", recBloque:"Itineraries", thRecorrido:"Itinerary", chipRecorrido:"Itinerary",
    recDesglose:"{e} structural · {s} as secondary itinerary",`);

/* ══════════════════════════════════════════════════════════════════════
   5 · Vocabulario de Recorridos y funciones de lectura del dato
   ══════════════════════════════════════════════════════════════════════ */
sub('html',
`const MARCAS_7 = ['capitalismo_racial','colonialidad','racializacion','genero','clase_trabajo','memoria','violencias'];`,
`/* ══════════ Fase 5C · Recorridos C1–C10 ══════════
   Las denominaciones se transcriben literalmente del catálogo vigente
   (data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json), que la interfaz no puede
   cargar porque la página no hace peticiones de red. No se reconstruyen de memoria,
   no se abrevian y no se renombran.

   Incidencia académica registrada y no resuelta aquí: el dictamen de C1 aprueba
   «Mundos indígenas, invasiones y persistencias», denominación que su propio documento
   declara «pendiente de incorporación al catálogo». La interfaz muestra la del catálogo
   y no anticipa esa incorporación.

   Estas funciones solo LEEN los campos sincronizados en la Fase 5B. Ninguna asigna,
   completa ni infiere recorridos. */
const RECORRIDOS = [
  {c:"c1",  es:"Invasiones, despojos y mundos indígenas",              en:"Invasions, dispossessions and Indigenous worlds"},
  {c:"c2",  es:"Trata, esclavización y plantación",                    en:"Slave trade, enslavement and plantation"},
  {c:"c3",  es:"Fugas, cimarronajes y emancipaciones",                 en:"Flight, marronage and emancipations"},
  {c:"c4",  es:"Postplantación, trabajo y desposesión",                en:"Post-plantation, labor and dispossession"},
  {c:"c5",  es:"Rutas, diásporas y territorios acuosos",               en:"Routes, diasporas and aqueous territories"},
  {c:"c6",  es:"Huracanes, ecologías y materialidades vivas",          en:"Hurricanes, ecologies and living materialities"},
  {c:"c7",  es:"Soberanías, fronteras y ocupaciones",                  en:"Sovereignties, borders and occupations"},
  {c:"c8",  es:"Creolizaciones, traducciones y opacidades",            en:"Creolizations, translations and opacities"},
  {c:"c9",  es:"Archivos vivos, espiritualidades y saberes transmitidos", en:"Living archives, spiritualities and transmitted knowledges"},
  {c:"c10", es:"Cuerpos, parentescos y eróticas",                      en:"Bodies, kinships and erotics"},
];
const REC_POR_CLAVE = Object.fromEntries(RECORRIDOS.map(r=>[r.c,r]));
const recCod = c => (c||"").toUpperCase();
const recDen = c => { const r=REC_POR_CLAVE[c]; return r ? (LANG==='en'?r.en:r.es) : ""; };
const recEtiqueta = c => \`\${recCod(c)} · \${recDen(c)}\`;

/* Grado de pertenencia de una obra a un recorrido, sin convertirlo en diez cajas:
     2 · estructurante — recorrido principal, o recorrido de una arquitectura especial
     1 · secundario   — declarado en recorridos_sec
     0 · fuera                                                                        */
function recGrado(n, r){
  if(!r) return 0;
  if(r==='pendiente')   return n.estado_recorrido==='pendiente'   ? 2 : 0;
  if(r==='sin_evaluar') return n.estado_recorrido==='sin_evaluar' ? 2 : 0;
  if(n.recorrido===r) return 2;
  const a=n.arquitectura_recorrido;
  if(a && Array.isArray(a.recorridos) && a.recorridos.includes(r)) return 2;
  if(Array.isArray(n.recorridos_sec) && n.recorridos_sec.includes(r)) return 1;
  return 0;
}
/* Arquitectura de la obra, tal como la escribió la Fase 5B. No se reinterpreta. */
function recArquitectura(n){
  const a=n.arquitectura_recorrido;
  if(a && a.tipo==='frontera_constitutiva')   return {tipo:'frontera', recorridos:a.recorridos||[]};
  if(a && a.tipo==='sintesis_multicorriente') return {tipo:'sintesis', recorridos:a.recorridos||[]};
  return null;
}
/* Texto compacto para la vista Tabla: C4 · C10 + C4 · C1 ↔ C3 · C3 · C5 · C7 */
function recTextoCompacto(n){
  const arq=recArquitectura(n);
  if(arq) return arq.recorridos.map(recCod).join(arq.tipo==='frontera' ? ' ↔ ' : ' · ');
  if(n.recorrido){
    const sec=(n.recorridos_sec||[]).map(recCod);
    return recCod(n.recorrido) + (sec.length ? ' + ' + sec.join(' + ') : '');
  }
  if(n.estado_recorrido==='pendiente')   return t('recPendiente');
  if(n.estado_recorrido==='sin_evaluar') return t('recSinEval');
  return '—';
}
/* Rango de ordenación de la columna Recorrido: primero C1…C10, luego arquitecturas,
   luego pendientes y sin evaluar. */
function recRango(n){
  if(n.recorrido) return parseInt(n.recorrido.slice(1),10);
  if(n.arquitectura_recorrido) return 50;
  if(n.estado_recorrido==='pendiente') return 90;
  return 99;
}
const MARCAS_7 = ['capitalismo_racial','colonialidad','racializacion','genero','clase_trabajo','memoria','violencias'];`);

/* ══════════════════════════════════════════════════════════════════════
   6 · Estado de la interfaz
   ══════════════════════════════════════════════════════════════════════ */
sub('html',
`let state={view:"corriente",layer:"ambas",active:null, focusFen:null, tide:tideInicial, q:"", evid:"todas", showIndirect:false, lengua:"todas", cronoModo:"publicacion"};`,
`let state={view:"corriente",layer:"ambas",active:null, focusFen:null, tide:tideInicial, q:"", evid:"todas", showIndirect:false, lengua:"todas", cronoModo:"publicacion", recorrido:null};`);

/* ══════════════════════════════════════════════════════════════════════
   7 · Búsqueda · se amplía por unión, nunca sustituyendo la bibliográfica
   ══════════════════════════════════════════════════════════════════════ */
sub('html',
`function setQuery(v){
  state.q=(v||"").trim();
  QTERMS=sinTildes(state.q).split(/\\s+/).filter(Boolean);
  const box=document.getElementById('buscador'); if(box) box.classList.toggle('has', !!state.q);
}
function matchQ(n){
  if(!QTERMS.length) return true;
  const h=sinTildes(n.t+" "+n.a);
  return QTERMS.every(w=>h.includes(w));
}`,
`/* Fase 5C · la consulta puede además nombrar un recorrido, por código («c4») o por
   denominación («rutas, diásporas»). Cuando lo hace, sus obras se SUMAN a los aciertos
   bibliográficos en vez de sustituirlos: ninguna búsqueda que antes encontraba algo
   deja de encontrarlo. */
let QREC=null;
function recDeConsulta(q){
  const s=sinTildes(q).trim();
  if(!s) return null;
  const cod=s.match(/^c\\s*([1-9]|10)$/);
  if(cod) return 'c'+cod[1];
  if(s.length<5) return null;
  const hits=RECORRIDOS.filter(r=>sinTildes(r.es).includes(s) || sinTildes(r.en).includes(s));
  return hits.length===1 ? hits[0].c : null;
}
function setQuery(v){
  state.q=(v||"").trim();
  QTERMS=sinTildes(state.q).split(/\\s+/).filter(Boolean);
  QREC=recDeConsulta(state.q);
  const box=document.getElementById('buscador'); if(box) box.classList.toggle('has', !!state.q);
}
function matchQ(n){
  if(!QTERMS.length) return true;
  const h=sinTildes(n.t+" "+n.a);
  if(QTERMS.every(w=>h.includes(w))) return true;
  return QREC ? recGrado(n, QREC)>0 : false;
}`);

/* ══════════════════════════════════════════════════════════════════════
   8 · Énfasis en el mapa · focalizar, nunca ocultar
   ══════════════════════════════════════════════════════════════════════ */
sub('html',
`function refreshHi(){
  const fn=state.active, ff=state.focusFen; let nb=null; if(fn) nb=neighbors(fn);`,
`function refreshHi(){
  const fn=state.active, ff=state.focusFen, fr=state.recorrido; let nb=null; if(fn) nb=neighbors(fn);`);

sub('html',
`    else if(ff){ if(n.f.includes(ff)){op=1;rmul=n.f[0]===ff?1.25:1;} else op=.09; }
    n._c.style.opacity=op;`,
`    else if(ff){ if(n.f.includes(ff)){op=1;rmul=n.f[0]===ff?1.25:1;} else op=.09; }
    /* Fase 5C · el recorrido seleccionado atenúa, no borra, y distingue tres grados:
       estructurante, secundario y fuera de foco. Reutiliza la gramática visual del
       foco por fenómeno, sin paleta nueva ni geometría nueva. */
    else if(fr){ const g=recGrado(n,fr); if(g===2){op=1;rmul=1.25;} else if(g===1){op=.5;rmul=1.05;} else op=.09; }
    n._c.style.opacity=op;`);

sub('html',
`    else if(ff){ op=(e.na.f.includes(ff)&&e.nb.f.includes(ff))?.65:.05; }`,
`    else if(ff){ op=(e.na.f.includes(ff)&&e.nb.f.includes(ff))?.65:.05; }
    else if(fr){ const ga=recGrado(e.na,fr), gb=recGrado(e.nb,fr); op=(ga&&gb)?.6:(ga||gb)?.2:.04; }`);

sub('html',
`    vp.querySelectorAll('.placelbl').forEach(t=>{ if(qOn){ const has=N.some(n=>n.l===t._place && visible(n) && matchQ(n)); t.style.opacity=has?1:.12; } else if(ff){ const has=N.some(n=>n.l===t._place && n.f.includes(ff)); t.style.opacity=has?1:.12; } else if(fn){`,
`    vp.querySelectorAll('.placelbl').forEach(t=>{ if(qOn){ const has=N.some(n=>n.l===t._place && visible(n) && matchQ(n)); t.style.opacity=has?1:.12; } else if(ff){ const has=N.some(n=>n.l===t._place && n.f.includes(ff)); t.style.opacity=has?1:.12; } else if(fr){ const has=N.some(n=>n.l===t._place && recGrado(n,fr)>0); t.style.opacity=has?1:.12; } else if(fn){`);

sub('html',
`      else if(ff){ const n=byId(c._id); op = (n && n.f.includes(ff)) ? .7 : .05; }
      c.style.strokeOpacity=op;`,
`      else if(ff){ const n=byId(c._id); op = (n && n.f.includes(ff)) ? .7 : .05; }
      else if(fr){ const n=byId(c._id); op = (n && recGrado(n,fr)>0) ? .7 : .05; }
      c.style.strokeOpacity=op;`);

sub('html',
`      else if(ff){ const n=byId(b._id); op = (n && n.f.includes(ff)) ? 1 : .12; }
      b.style.opacity=op;`,
`      else if(ff){ const n=byId(b._id); op = (n && n.f.includes(ff)) ? 1 : .12; }
      else if(fr){ const n=byId(b._id); op = (n && recGrado(n,fr)>0) ? 1 : .12; }
      b.style.opacity=op;`);

/* ══════════════════════════════════════════════════════════════════════
   9 · Bloque «Recorridos» de la ficha
   ══════════════════════════════════════════════════════════════════════ */
sub('html',
`function esquema20Html(n){`,
`/* Fase 5C · bloque discreto de la ficha. Se adapta a los cinco casos del contrato y
   no crea campos vacíos: lo que la obra no declara, no se dibuja. */
function recorridosHtml(n){
  const linea=(cod,den)=>\`<span class="rec-cod">\${cod}</span><span class="rec-den">\${den}</span>\`;
  const arq=recArquitectura(n);
  let cuerpo='';

  if(arq){
    const sep = arq.tipo==='frontera' ? ' ↔ ' : ' · ';
    cuerpo += \`<div class="rec-f"><span class="rec-l">\${arq.tipo==='frontera'?t('recFrontera'):t('recSintesis')}</span>\`+
              \`<p class="rec-arq">\${arq.recorridos.map(recCod).join(sep)}</p>\`+
              \`<ul class="rec-lista">\${arq.recorridos.map(c=>\`<li>\${linea(recCod(c),recDen(c))}</li>\`).join('')}</ul></div>\`;
    if((n.recorridos_sec||[]).length){
      cuerpo += \`<div class="rec-f"><span class="rec-l">\${t('recTambien')}</span>\`+
                \`<ul class="rec-lista">\${n.recorridos_sec.map(c=>\`<li>\${linea(recCod(c),recDen(c))}</li>\`).join('')}</ul></div>\`;
    }
  } else if(n.recorrido){
    cuerpo += \`<div class="rec-f"><span class="rec-l">\${t('recPrincipal')}</span>\`+
              \`<ul class="rec-lista"><li>\${linea(recCod(n.recorrido),recDen(n.recorrido))}</li></ul></div>\`;
    if((n.recorridos_sec||[]).length){
      cuerpo += \`<div class="rec-f"><span class="rec-l">\${t('recTambien')}</span>\`+
                \`<ul class="rec-lista">\${n.recorridos_sec.map(c=>\`<li>\${linea(recCod(c),recDen(c))}</li>\`).join('')}</ul></div>\`;
    }
  } else if(n.estado_recorrido==='pendiente' || n.estado_recorrido==='sin_evaluar'){
    const cual = n.estado_recorrido==='pendiente' ? t('recPendiente') : t('recSinEval');
    cuerpo += \`<div class="rec-f"><span class="rec-l">\${t('recClasif')}</span><p class="rec-estado">\${cual}</p></div>\`;
  } else {
    return '';
  }

  /* §10 · «confirmado» califica al recorrido, no a la obra entera. */
  if(n.estado_recorrido){
    const mapa={confirmado:'recEstConfirmado', pendiente:'recEstPendiente', sin_evaluar:'recEstSinEvaluar'};
    const clave=mapa[n.estado_recorrido];
    if(clave) cuerpo += \`<p class="rec-meta">\${t('recEstado')}: \${t(clave)}</p>\`;
  }
  if((n.fuente_recorrido||[]).length){
    cuerpo += \`<p class="rec-meta rec-fuente">\${t('recFuente')}: \${n.fuente_recorrido.join(' · ')}</p>\`;
  }
  return \`<div class="rec-block"><h3 class="rec-h">\${t('recBloque')}</h3>\${cuerpo}</div>\`;
}
function esquema20Html(n){`);

sub('html',
`    \${esquema20Html(n)}\`;`,
`    \${recorridosHtml(n)}
    \${esquema20Html(n)}\`;`);

/* ══════════════════════════════════════════════════════════════════════
   10 · Vista Tabla · columna compacta
   ══════════════════════════════════════════════════════════════════════ */
sub('html',
`  ["estado20","thEstado",true], ["procedencia","thProcedencia",false],`,
`  ["rec","thRecorrido",true],
  ["estado20","thEstado",true], ["procedencia","thProcedencia",false],`);

sub('html',
`    case "estado20": return \`<td>\${estadoCell(n)}</td>\`;`,
`    case "rec": return \`<td class="rec-td">\${recTextoCompacto(n)}</td>\`;
    case "estado20": return \`<td>\${estadoCell(n)}</td>\`;`);

sub('html',
`    else if(key==="estado20"){ va=ESTADO20_RANGO[estado20(a)]; vb=ESTADO20_RANGO[estado20(b)]; }`,
`    else if(key==="rec"){ va=recRango(a); vb=recRango(b); }
    else if(key==="estado20"){ va=ESTADO20_RANGO[estado20(a)]; vb=ESTADO20_RANGO[estado20(b)]; }`);

sub('html',
`  let rows=N.filter(n=>visible(n) && (!state.focusFen || n.f.includes(state.focusFen)) && matchQ(n));`,
`  let rows=N.filter(n=>visible(n) && (!state.focusFen || n.f.includes(state.focusFen)) && (!state.recorrido || recGrado(n,state.recorrido)>0) && matchQ(n));`);

/* ══════════════════════════════════════════════════════════════════════
   11 · Selector, chip y panel lateral
   ══════════════════════════════════════════════════════════════════════ */
sub('html',
`  if(!state.tide) chips.push({txt:t('chipMov')+': '+t('movOff'), reset:()=>setTide(true)});`,
`  if(state.recorrido){
    const nombre = state.recorrido==='pendiente' ? t('recPendientes')
                 : state.recorrido==='sin_evaluar' ? t('recSinEvaluar')
                 : recEtiqueta(state.recorrido);
    chips.push({txt:t('chipRecorrido')+': '+nombre, reset:()=>setRecorrido(null)});
  }
  if(!state.tide) chips.push({txt:t('chipMov')+': '+t('movOff'), reset:()=>setTide(true)});`);

sub('html',
`const PANELES_LATERALES = [['panelFiltros','filtrosBtn'],['panelInfo','infoBtn'],['legend','legendBtn']];`,
`const PANELES_LATERALES = [['panelRecorridos','recorridosBtn'],['panelFiltros','filtrosBtn'],['panelInfo','infoBtn'],['legend','legendBtn']];`);

sub('html',
`document.getElementById('filtrosCerrar').addEventListener('click',()=>cerrarPanelLateral('panelFiltros','filtrosBtn'));`,
`document.getElementById('recorridosCerrar').addEventListener('click',()=>cerrarPanelLateral('panelRecorridos','recorridosBtn'));
document.getElementById('filtrosCerrar').addEventListener('click',()=>cerrarPanelLateral('panelFiltros','filtrosBtn'));`);

/* Construcción del selector y su acción. Se engancha donde ya se enganchan los demás
   controles del panel de filtros, para no crear un punto de arranque nuevo. */
sub('html',
`function limpiarFiltros(){`,
`/* Fase 5C · doce opciones en una sola columna: el universo completo, los diez
   recorridos y las dos formas de consultar lo que todavía no está clasificado.
   En móvil el panel es la hoja inferior que ya usan Filtros e Información, de modo
   que no aparecen diez botones permanentes en la barra. */
function buildRecSeg(){
  const seg=document.getElementById('recSeg'); if(!seg) return;
  /* El número no dice «obras clasificadas en C4»: dice cuántas entradas quedan
     enfocadas al elegir ese recorrido, estructurantes y secundarias juntas. Se
     desglosa en el título accesible para que la cifra no se lea como una caja. */
  const cuenta=r=>{
    const e=N.filter(n=>recGrado(n,r)===2).length;
    const s=N.filter(n=>recGrado(n,r)===1).length;
    return {n:e+s, e, s};
  };
  const opciones=[{v:'', lbl:t('recTodos'), c:{n:N.length,e:N.length,s:0}}]
    .concat(RECORRIDOS.map(r=>({v:r.c, lbl:recEtiqueta(r.c), c:cuenta(r.c)})))
    .concat([{v:'pendiente', lbl:t('recPendientes'), c:cuenta('pendiente')},
             {v:'sin_evaluar', lbl:t('recSinEvaluar'), c:cuenta('sin_evaluar')}]);
  seg.innerHTML=opciones.map(o=>{
    const on=(state.recorrido||'')===o.v;
    const detalle = o.c.s ? t('recDesglose').replace('{e}',o.c.e).replace('{s}',o.c.s) : '';
    const aria = \`\${o.lbl} · \${o.c.n}\${detalle?' · '+detalle:''}\`;
    return \`<button type="button" data-rec="\${o.v}" class="\${on?'on':''}" aria-pressed="\${on?'true':'false'}" aria-label="\${aria}" title="\${aria}">\`+
           \`<span class="recTxt">\${o.lbl}</span><span class="recN">\${o.c.n}</span></button>\`;
  }).join('');
  seg.querySelectorAll('button').forEach(b=>b.onclick=()=>setRecorrido(b.dataset.rec||null));
}
function setRecorrido(v){
  state.recorrido = v || null;
  state.active=null; ocultarFicha();
  buildRecSeg();
  syncEdges(); buildLegend();
  if(state.view==="tabla") renderTable(); else refreshHi();
  updateTip(); renderChips();
  const rb=document.getElementById('recorridosBtn'); if(rb) rb.classList.toggle('activo', !!state.recorrido);
}
function limpiarFiltros(){`);

/* Arranque: construir el selector cuando ya existen los nodos. */
sub('html',
`function limpiarFiltros(){
  /* copia: cada reset vuelve a llamar a renderChips(), que reescribe FILTROS_ACTIVOS */
  [...FILTROS_ACTIVOS].forEach(c=>c.reset());`,
`function limpiarFiltros(){
  /* copia: cada reset vuelve a llamar a renderChips(), que reescribe FILTROS_ACTIVOS */
  [...FILTROS_ACTIVOS].forEach(c=>c.reset());
  if(state.recorrido) setRecorrido(null);`);

sub('html',
`PANELES_LATERALES.forEach(([id,btnId])=>{`,
`buildRecSeg();
PANELES_LATERALES.forEach(([id,btnId])=>{`);

/* ══════════════════════════════════════════════════════════════════════
   12 · Estilos · sin paleta nueva, sin tipografía nueva
   ══════════════════════════════════════════════════════════════════════ */
sub('css',
`  #panel .e20-nota{margin:4px 0 0; font-size:10.5px; line-height:1.5; color:var(--gray); font-style:italic}`,
`  #panel .e20-nota{margin:4px 0 0; font-size:10.5px; line-height:1.5; color:var(--gray); font-style:italic}

  /* ══ Fase 5C · Recorridos C1–C10 ══
     Sin colores nuevos, sin tipografías nuevas y sin geometría nueva: se reutilizan
     las variables, las familias y los ritmos que la interfaz ya tenía aprobados. Los
     recorridos no se distinguen por color, sino por código, texto y arquitectura. */
  #panel .rec-block{margin-top:18px; padding-top:14px; border-top:1px solid var(--line)}
  #panel .rec-h{font-family:var(--ff-mono); font-size:9px; text-transform:uppercase; letter-spacing:1.6px;
    color:var(--gold); margin:0 0 10px; font-weight:500}
  #panel .rec-f{margin-bottom:11px}
  #panel .rec-f:last-of-type{margin-bottom:0}
  #panel .rec-l{display:block; font-family:var(--ff-mono); font-size:8.5px; text-transform:uppercase;
    letter-spacing:1.1px; color:var(--gray); opacity:.75; margin-bottom:4px}
  #panel .rec-lista{list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:4px}
  #panel .rec-lista li{display:flex; align-items:baseline; gap:8px; font-size:12px; line-height:1.45}
  #panel .rec-cod{font-family:var(--ff-mono); font-size:10px; letter-spacing:.8px; color:var(--gold);
    border:1px solid var(--gold-d); border-radius:3px; padding:1px 6px; flex:0 0 auto}
  #panel .rec-den{color:var(--cream)}
  #panel .rec-arq{margin:0 0 6px; font-family:var(--ff-mono); font-size:12px; letter-spacing:1.4px; color:var(--cream)}
  #panel .rec-estado{margin:0; font-size:12px; color:var(--gray); font-style:italic}
  #panel .rec-meta{margin:8px 0 0; font-size:10.5px; line-height:1.5; color:var(--gray)}
  #panel .rec-fuente{font-family:var(--ff-mono); font-size:9.5px; letter-spacing:.3px; word-break:break-word}

  .panelLateral .recNota{margin:-6px 0 14px; font-size:10.5px; line-height:1.55; color:var(--gray); font-style:italic}
  .panelLateral .recPie{margin:14px 0 0}
  .seg.recSeg{flex-direction:column; flex-wrap:nowrap; max-height:min(52vh,420px); overflow-y:auto}
  .seg.recSeg button{display:flex; align-items:baseline; justify-content:space-between; gap:10px;
    width:100%; text-align:left; text-transform:none; letter-spacing:.2px; font-size:11px;
    padding:8px 11px; border-right:0; border-bottom:1px solid var(--line); line-height:1.35}
  .seg.recSeg button:last-child{border-bottom:0}
  .seg.recSeg button .recN{font-family:var(--ff-mono); font-size:9px; color:var(--gray); flex:0 0 auto}
  .seg.recSeg button.on .recN{color:inherit; opacity:.7}
  #recorridosBtn{position:relative}
  #recorridosBtn.activo::after{content:""; position:absolute; top:4px; right:5px; width:6px; height:6px;
    border-radius:50%; background:var(--gold)}
  #tabla td.rec-td{font-family:var(--ff-mono); font-size:10.5px; letter-spacing:.6px; white-space:nowrap; color:var(--cream)}`);

/* ══════════════════════════════════════════════════════════════════════ */
fs.writeFileSync(HTML, html, 'utf8');
fs.writeFileSync(CSS, css, 'utf8');

console.log(`sustituciones aplicadas: ${n}`);
console.log(`html  ${hashAntes.html}  ->  ${sha(html)}  (${Buffer.byteLength(html)} bytes)`);
console.log(`css   ${hashAntes.css}  ->  ${sha(css)}  (${Buffer.byteLength(css)} bytes)`);
