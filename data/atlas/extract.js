const fs = require('fs');
const SRC = '/sessions/loving-stoic-allen/mnt/Pagina/pensamiento-caribe/js/mapa-afrodiasporico.js';
const txt = fs.readFileSync(SRC, 'utf8');

function grab(varname){
  const start = txt.indexOf('var ' + varname + ' = [');
  const open = txt.indexOf('[', start);
  // find matching closing bracket
  let depth=0, i=open, inStr=false, q='';
  for(; i<txt.length; i++){
    const c=txt[i];
    if(inStr){ if(c==='\\'){i++; continue;} if(c===q) inStr=false; continue; }
    if(c==='\''||c==='"'){inStr=true;q=c;continue;}
    if(c==='[') depth++;
    else if(c===']'){ depth--; if(depth===0){ i++; break; } }
  }
  const lit = txt.slice(open, i);
  return eval('(' + lit + ')');
}

const nodos = grab('nodos');
const rutas = grab('rutas');

function slug(s){
  return s.normalize('NFD').replace(/[̀-ͯ]/g,'')
    .toLowerCase().replace(/['&#;]/g,'').replace(/[^a-z0-9]+/g,'-')
    .replace(/^-+|-+$/g,'');
}

// build name->id map
const idByName = {};
nodos.forEach(n => { idByName[n.nombre] = slug(n.nombre); });

const nodes = nodos.map(n => {
  const o = { id: slug(n.nombre) };
  Object.assign(o, n);
  o.fuente = n.fuente || '';
  o.zoteroKeys = [];   // puente al pipeline de Zotero
  return o;
});

const edges = rutas.map((r,i) => {
  const src = idByName[r.de], tgt = idByName[r.a];
  const o = {
    id: 'e' + String(i+1).padStart(2,'0'),
    source: src, target: tgt,
    source_nombre: r.de, target_nombre: r.a
  };
  // copy remaining fields except de/a
  Object.keys(r).forEach(k => { if(k!=='de'&&k!=='a') o[k]=r[k]; });
  o.fuente = r.fuente || '';
  o.zoteroKeys = [];
  if(!src) o._WARN_source = 'nombre no encontrado: '+r.de;
  if(!tgt) o._WARN_target = 'nombre no encontrado: '+r.a;
  return o;
});

const outDir = '/sessions/loving-stoic-allen/mnt/Pagina/pensamiento-caribe/data/atlas';
fs.mkdirSync(outDir, {recursive:true});
fs.writeFileSync(outDir+'/nodes.json', JSON.stringify(nodes, null, 2));
fs.writeFileSync(outDir+'/edges.json', JSON.stringify(edges, null, 2));

// report
const warns = edges.filter(e=>e._WARN_source||e._WARN_target);
console.log('nodos:', nodes.length, '| aristas:', edges.length);
console.log('nodos con fuente:', nodes.filter(n=>n.fuente).length);
console.log('aristas con fuente:', edges.filter(e=>e.fuente).length);
console.log('warnings de referencia:', warns.length);
warns.forEach(w=>console.log('  ', w.id, w._WARN_source||'', w._WARN_target||''));
