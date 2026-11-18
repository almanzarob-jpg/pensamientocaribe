/* =====================================================================
   LIBRETA DE TRAVESÍA · segunda versión (prototipo 15-nov-2026)
   ---------------------------------------------------------------------
   La libreta deja de guardar texto suelto. Cada hallazgo se ancla a una
   obra o a un vínculo anotado, y el argumento se gradúa con la misma
   distinción que el atlas aplica a su propio corpus:
     · evidencia localizada (vínculo corroborado)      → «documenta»
     · vínculo propuesto, por corroborar               → «sugiere»
     · lectura propia de una obra                      → «según mi lectura de…»
     · interpretación sin anclar                       → «propongo»
   No es un puntaje: es un espejo. Lo sin anclar no es un error, es lo que
   el argumento propone, y la libreta pide declararlo como tal.

   Las dudas pueden salir al reflujo con el argumento ya escrito, y las
   lecturas hechas con «Decidir antes de ver» quedan registradas junto a
   la del atlas. Todo vive en localStorage, en ese navegador y ese equipo.
   ===================================================================== */
(function(){
  if(typeof byId!=='function' || typeof relDe!=='function') return;
  const en=()=> (typeof LANG!=='undefined' && LANG==='en');
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const LS=(()=>{ try{ const k='__lb'; localStorage.setItem(k,'1'); localStorage.removeItem(k); return localStorage; }catch(e){ return null; } })();
  const KL='atlas-libreta-v1';
  const nid=()=>Math.random().toString(36).slice(2,9);

  const T={
    es:{aviso:'Se guarda solo en este navegador y en este equipo. No se envía a ningún servidor ni la ve nadie más. Si se borran los datos del navegador, se borra. Para conservarla o entregarla, cópiala o descárgala.',
      sinAlmacen:'Este navegador no permite guardar datos de la página: la libreta funciona mientras la página siga abierta. Cópiala o descárgala antes de cerrar.',
      pregunta:'Mi pregunta', phPregunta:'¿Qué quiero averiguar? Escríbelo antes de buscar.',
      obras:'Obras consultadas', fuentes:'Vínculos anotados', lecturas:'Mis lecturas antes de ver',
      hallazgos:'Hallazgos', dudas:'Dudas', argumento:'Argumento provisional',
      phHallazgo:'Lo que encontré. Una idea por hallazgo.', phDuda:'Lo que no pude resolver, lo que falta en el atlas, lo que tengo que leer.', phArgumento:'Lo que puedo sostener por ahora, con los hallazgos de arriba.',
      vacioObras:'Todavía ninguna. Desde cualquier ficha: «Anotar en la libreta».', vacioFuentes:'Todavía ninguno. Desde «Leer el vínculo»: «Anotar esta fuente».',
      vacioLecturas:'Todavía ninguna. Se registran al usar «Decidir antes de ver».',
      masHallazgo:'Añadir un hallazgo', masDuda:'Añadir una duda', hallazgoDe:'Hallazgo sobre este vínculo',
      loSostiene:'Lo sostiene', sinAncla:'Nada todavía: es mi interpretación', grObras:'Obras', grVinc:'Vínculos',
      verbo:'Verbo sugerido', alReflujo:'Llevar al reflujo', quitar:'Quitar',
      g:{doc:'Evidencia localizada en el atlas', pc:'Vínculo propuesto, por corroborar', obra:'Tu lectura de una obra', propia:'Interpretación propia, sin anclar'},
      v:{doc:'«documenta»', pc:'«sugiere»', obra:'«según mi lectura de…» (anota la página)', propia:'«propongo» o «queda por investigar»'},
      grad:'Cómo se sostiene tu argumento',
      gradTxt:(n,c)=>`${n} ${n===1?'hallazgo':'hallazgos'}: ${c.doc} con evidencia localizada en el atlas, ${c.pc} sobre vínculos por corroborar, ${c.obra} en tu lectura de obras y ${c.propia} sin anclar.`,
      gradVacio:'Cuando anotes hallazgos y digas qué los sostiene, aquí verás en qué descansa el argumento.',
      gradPropia:'Lo que está sin anclar no es un error: es lo que tu argumento propone. Escríbelo como propuesta, no como hecho.',
      gradPc:'Un vínculo por corroborar sostiene una hipótesis, no una prueba. Si encuentras el pasaje, el reflujo lo recibe.',
      gradNota:'Los verbos siguen la redacción graduada del atlas. Es una guía para escribir, no una calificación.',
      coinc:(c,n)=> n? `coinciden en ${c} de ${n}` : 'sin decidir',
      copiar:'Copiar como texto', descargar:'Descargar (.md)', vaciar:'Vaciar la libreta', confirmar:'Sí, vaciarla', cancelar:'No',
      copiada:'Libreta copiada', vaciada:'Libreta vaciada', titDoc:'Libreta de travesía · Con el agua de por medio', travesia:'Travesía', exportada:'Exportada el',
      ok:'corroborada', pcE:'por corroborar', tu:'Tú', atlas:'Atlas', porque:'Por qué',
      rfObra:'Propuesta desde la libreta de travesía', rfVinc:'Sobre el vínculo', rfLectura:'Mi lectura', rfDuda:'Duda'},
    en:{aviso:'Stored only in this browser on this device. It is not sent to any server and nobody else sees it. Clearing the browser’s data clears it. To keep it or hand it in, copy it or download it.',
      sinAlmacen:'This browser does not let the page store data: the notebook works while the page stays open. Copy or download it before closing.',
      pregunta:'My question', phPregunta:'What do I want to find out? Write it before searching.',
      obras:'Works consulted', fuentes:'Links noted', lecturas:'My readings before looking',
      hallazgos:'Findings', dudas:'Doubts', argumento:'Provisional argument',
      phHallazgo:'What I found. One idea per finding.', phDuda:'What I could not settle, what the atlas lacks, what I still have to read.', phArgumento:'What I can hold for now, with the findings above.',
      vacioObras:'None yet. From any entry: “Note in the notebook”.', vacioFuentes:'None yet. From “Read the link”: “Note this source”.',
      vacioLecturas:'None yet. They are recorded when you use “Decide before looking”.',
      masHallazgo:'Add a finding', masDuda:'Add a doubt', hallazgoDe:'Finding on this link',
      loSostiene:'Supported by', sinAncla:'Nothing yet: it is my interpretation', grObras:'Works', grVinc:'Links',
      verbo:'Suggested verb', alReflujo:'Take it to the reflux', quitar:'Remove',
      g:{doc:'Evidence located in the atlas', pc:'Proposed link, to be corroborated', obra:'Your reading of a work', propia:'Your own interpretation, not anchored'},
      v:{doc:'“documents”', pc:'“suggests”', obra:'“in my reading of…” (note the page)', propia:'“I propose” or “remains to be investigated”'},
      grad:'What your argument rests on',
      gradTxt:(n,c)=>`${n} ${n===1?'finding':'findings'}: ${c.doc} with evidence located in the atlas, ${c.pc} on links to be corroborated, ${c.obra} on your reading of works and ${c.propia} not anchored.`,
      gradVacio:'Once you note findings and say what supports them, you will see here what the argument rests on.',
      gradPropia:'What is not anchored is not a mistake: it is what your argument proposes. Write it as a proposal, not as a fact.',
      gradPc:'A link still to be corroborated supports a hypothesis, not a proof. If you find the passage, the reflux takes it.',
      gradNota:'The verbs follow the atlas’s graded wording. It is a guide for writing, not a grade.',
      coinc:(c,n)=> n? `agree on ${c} of ${n}` : 'undecided',
      copiar:'Copy as text', descargar:'Download (.md)', vaciar:'Empty the notebook', confirmar:'Yes, empty it', cancelar:'No',
      copiada:'Notebook copied', vaciada:'Notebook emptied', titDoc:'Crossing notebook · With the water in between', travesia:'Crossing', exportada:'Exported on',
      ok:'corroborated', pcE:'to be corroborated', tu:'You', atlas:'Atlas', porque:'Why',
      rfObra:'Proposal from the crossing notebook', rfVinc:'On the link', rfLectura:'My reading', rfDuda:'Doubt'}
  };
  const tx=k=>{ const d=T[en()?'en':'es']; return k.split('.').reduce((o,p)=>o&&o[p],d); };

  /* ---------- datos (con migración desde la primera versión) ---------- */
  const VACIA=()=>({pregunta:'',obras:[],fuentes:[],hallazgos:[],dudas:[],argumento:'',lecturas:[],travesia:null,act:null});
  function cargar(){
    let d={}; try{ const v=LS&&LS.getItem(KL); d=v?JSON.parse(v):{}; }catch(e){}
    const L=Object.assign(VACIA(),d);
    if(typeof L.hallazgos==='string') L.hallazgos= L.hallazgos.trim()? [{id:nid(),txt:L.hallazgos.trim(),ancla:''}] : [];
    if(typeof L.dudas==='string') L.dudas= L.dudas.trim()? [{id:nid(),txt:L.dudas.trim(),ancla:''}] : [];
    ['obras','fuentes','hallazgos','dudas','lecturas'].forEach(k=>{ if(!Array.isArray(L[k])) L[k]=[]; });
    return L;
  }
  let lib=cargar(), memoriaSola=!LS;
  const oyentes=new Set();
  function guardar(repintar){
    lib.act=new Date().toISOString();
    try{ if(LS){ LS.setItem(KL,JSON.stringify(lib)); memoriaSola=false; } }catch(e){ memoriaSola=true; }
    if(repintar!==false) repintarSiVisible();
    oyentes.forEach(f=>{ try{ f(); }catch(e){} });
  }
  const enlace=h=>location.origin+location.pathname+'#'+h;

  /* qué sostiene un hallazgo: se lee del atlas en vivo, no se guarda */
  function grado(ancla){
    if(!ancla) return 'propia';
    if(ancla.startsWith('v:')){ const [a,b]=ancla.slice(2).split('~'); if(!relDe(a,b)) return 'propia'; return esCorr(a,b)? 'doc' : 'pc'; }
    if(ancla.startsWith('o:')) return byId(ancla.slice(2))? 'obra' : 'propia';
    return 'propia';
  }
  function nombreAncla(ancla){
    if(!ancla) return '';
    if(ancla.startsWith('o:')){ const o=byId(ancla.slice(2)); return o? o.t : ''; }
    const [a,b]=ancla.slice(2).split('~'); const A=byId(a),B=byId(b); return (A&&B)? A.t+' ↔ '+B.t : '';
  }

  /* ---------- reflujo: sale con el argumento ya escrito ---------- */
  function alReflujo(texto, ancla){
    if(typeof rfAbrir!=='function') return;
    let tipo='obra', rel=null;
    if(ancla && ancla.startsWith('v:')){ const [a,b]=ancla.slice(2).split('~'); if(relDe(a,b) && !esCorr(a,b)){ tipo='corroboracion'; rel={a,b}; } else tipo='enmienda'; }
    else if(ancla && ancla.startsWith('o:')) tipo='enmienda';
    const nombre=nombreAncla(ancla);
    const cuerpo=(nombre? `${tx(ancla.startsWith('v:')?'rfVinc':'rfLectura')}: ${nombre}\n\n` : '')+texto+`\n\n— ${tx('rfObra')}`;
    rfAbrir(tipo, rel);
    setTimeout(()=>{ const t=document.getElementById('rfArg'); if(t){ t.value=cuerpo; t.dispatchEvent(new Event('input',{bubbles:true})); t.focus(); } },60);
  }

  /* ---------- API ---------- */
  const API={
    datos:()=>lib,
    tieneObra:id=>lib.obras.some(x=>x.id===id),
    anadirObra(id){ const o=byId(id); if(!o||API.tieneObra(id)) return; lib.obras.push({id,t:o.t,a:o.a,y:o.y||''}); guardar(); },
    quitarObra(id){ lib.obras=lib.obras.filter(x=>x.id!==id); guardar(); },
    tieneFuente:(a,b)=>lib.fuentes.some(x=>x.a===a&&x.b===b),
    anadirFuente(a,b){ const A=byId(a),B=byId(b); if(!A||!B||API.tieneFuente(a,b)) return;
      let f=''; try{ const raw=fuenteDe(a,b); f= esCorr(a,b)? fuenteLegible(raw) : raw; }catch(e){}
      lib.fuentes.push({a,b,ta:A.t,tb:B.t,estado: esCorr(a,b)?'ok':'pc', tipo: isDiso(a,b)?'diso':'reso', f:String(f||'').slice(0,600)}); guardar(); },
    anadirHallazgo(txt,ancla){ lib.hallazgos.push({id:nid(),txt:txt||'',ancla:ancla||''}); guardar(); },
    anadirDudas(lista){ lista.forEach(t=>lib.dudas.push({id:nid(),txt:t,ancla:''})); guardar(); },
    fijarPregunta(t){ if(!lib.pregunta){ lib.pregunta=t; guardar(); } },
    fijarTravesia(id){ lib.travesia=id; guardar(false); },
    registrarLectura(a,b,tu,atlas,porque){
      const A=byId(a),B=byId(b); if(!A||!B) return;
      lib.lecturas=lib.lecturas.filter(x=>!(x.a===a&&x.b===b));
      lib.lecturas.push({a,b,ta:A.t,tb:B.t,tu,atlas,porque:porque||'',fecha:new Date().toISOString()});
      if(!API.tieneFuente(a,b)) API.anadirFuente(a,b); else guardar();
    },
    lectura:(a,b)=>lib.lecturas.find(x=>x.a===a&&x.b===b),
    alReflujo, grado,
    alCambiar(f){ oyentes.add(f); },
    md, pintarEn, vaciar(){ lib=VACIA(); guardar(); }
  };
  window.LIBRETA_ATLAS=API;

  /* ---------- exportación ---------- */
  /* cuántos campos se pueden comparar y en cuántos coinciden: «no lo sé» no cuenta,
     ni «dónde» cuando el atlas no lo declara o cuando el estudiante dijo que no está documentado */
  function cotejo(l){ let n=0,c=0; ['tipo','doc','donde'].forEach(k=>{ const t=l.tu[k], a=l.atlas[k];
      if(!t||t==='nose') return; if(k==='donde' && (!a || l.tu.doc==='pc')) return;
      n++; if(t===a || (k==='donde' && a==='ambas' && (t==='media'||t==='fondo'))) c++; }); return {c,n}; }

  function cuentas(){ const c={doc:0,pc:0,obra:0,propia:0}; lib.hallazgos.filter(h=>h.txt.trim()).forEach(h=>c[grado(h.ancla)]++); return c; }
  const RES={es:{reso:'resonancia',diso:'disonancia',doc:'documentado',pc:'por corroborar',superficie:'cuerpo del texto',media:'notas',fondo:'bibliografía',ambas:'notas y bibliografía',nose:'no lo sé',nada:'no lo declara'},
             en:{reso:'resonance',diso:'dissonance',doc:'documented',pc:'to be corroborated',superficie:'body of the text',media:'notes',fondo:'bibliography',ambas:'notes and bibliography',nose:'don’t know',nada:'does not say'}};
  const r_=k=>RES[en()?'en':'es'][k]||k||'—';
  function md(){
    const E=en(); const s=[`# ${tx('titDoc')}`,'',`${tx('exportada')} ${new Date().toLocaleString(E?'en':'es')} · atlas v${(window.ATLAS&&ATLAS.meta&&ATLAS.meta.version)||''} · ${location.origin+location.pathname}`,''];
    let trav=null; try{ trav=lib.travesia && window.APRENDER_ATLAS && APRENDER_ATLAS.TRAVESIAS.find(t=>t.id===lib.travesia); }catch(e){}
    if(trav) s.push(`**${tx('travesia')}:** ${E?trav.t.en:trav.t.es}`,'');
    s.push(`## ${tx('pregunta')}`,'',lib.pregunta||'—','',`## ${tx('obras')}`,'');
    if(lib.obras.length) lib.obras.forEach(o=>s.push(`- ${o.a}${o.y?' ('+o.y+')':''}. *${o.t}*. ${enlace(o.id)}`)); else s.push('—');
    s.push('',`## ${tx('fuentes')}`,'');
    if(lib.fuentes.length) lib.fuentes.forEach(x=>s.push(`- *${x.ta}* ↔ *${x.tb}* (${x.estado==='ok'?tx('ok'):tx('pcE')}${x.tipo==='diso'?', '+r_('diso'):''}). ${x.f? x.f.replace(/\s+/g,' ') : ''} ${enlace('vinculo='+x.a+'~'+x.b)}`)); else s.push('—');
    s.push('',`## ${tx('lecturas')}`,'');
    if(lib.lecturas.length) lib.lecturas.forEach(l=>{ const {c,n}=cotejo(l);
      s.push(`- *${l.ta}* ↔ *${l.tb}* (${tx('coinc')(c,n)}). ${tx('tu')}: ${r_(l.tu.tipo)}, ${r_(l.tu.doc)}, ${r_(l.tu.donde)}. ${tx('atlas')}: ${r_(l.atlas.tipo)}, ${r_(l.atlas.doc)}, ${r_(l.atlas.donde||'nada')}.${l.porque?` ${tx('porque')}: ${l.porque}`:''}`); });
    else s.push('—');
    s.push('',`## ${tx('hallazgos')}`,'');
    const hs=lib.hallazgos.filter(h=>h.txt.trim());
    if(hs.length) hs.forEach(h=>{ const g=grado(h.ancla); s.push(`- ${h.txt.trim()}  \n  _${tx('g.'+g)}${h.ancla?' · '+nombreAncla(h.ancla):''} · ${tx('verbo')}: ${tx('v.'+g)}_`); }); else s.push('—');
    const c=cuentas(), n=hs.length; if(n) s.push('',`_${tx('gradTxt')(n,c)}_`);
    s.push('',`## ${tx('dudas')}`,'');
    const ds=lib.dudas.filter(d=>d.txt.trim()); if(ds.length) ds.forEach(d=>s.push(`- ${d.txt.trim()}${d.ancla?` _(${nombreAncla(d.ancla)})_`:''}`)); else s.push('—');
    s.push('',`## ${tx('argumento')}`,'',lib.argumento||'—');
    return s.join('\n')+'\n';
  }

  /* ---------- interfaz ---------- */
  let cont=null, opts={};
  function repintarSiVisible(){ if(cont && document.contains(cont)) pintarEn(cont,opts); }
  const opcionesAncla=sel=>{
    const o=lib.obras.map(x=>`<option value="o:${esc(x.id)}"${sel==='o:'+x.id?' selected':''}>${esc(x.t)}</option>`).join('');
    const v=lib.fuentes.map(x=>`<option value="v:${esc(x.a)}~${esc(x.b)}"${sel===`v:${x.a}~${x.b}`?' selected':''}>${esc(x.ta)} ↔ ${esc(x.tb)}</option>`).join('');
    return `<option value="">${esc(tx('sinAncla'))}</option>${o?`<optgroup label="${esc(tx('grObras'))}">${o}</optgroup>`:''}${v?`<optgroup label="${esc(tx('grVinc'))}">${v}</optgroup>`:''}`;
  };
  const trazo=g=>`<svg class="lb-trazo lb-${g}" viewBox="0 0 30 10" aria-hidden="true">${g==='propia'?'<circle cx="15" cy="5" r="3.2"/>':g==='obra'?'<circle cx="15" cy="5" r="3.2" class="lleno"/>':'<path d="M2 5 Q15 0 28 5"/>'}</svg>`;
  function itemHallazgo(h,i){
    const g=grado(h.ancla);
    return `<li class="lb-item" data-h="${h.id}">
      <textarea data-hid="${h.id}" rows="2" aria-label="${esc(tx('hallazgos'))} ${i+1}" placeholder="${esc(tx('phHallazgo'))}">${esc(h.txt)}</textarea>
      <div class="lb-fila"><label class="lb-sel"><span>${esc(tx('loSostiene'))}</span><select data-ancla="${h.id}">${opcionesAncla(h.ancla)}</select></label>
        <button type="button" class="ap-quitar" data-quitar-h="${h.id}" aria-label="${esc(tx('quitar'))}">×</button></div>
      <p class="lb-grado" data-grado="${h.id}">${trazo(g)}<span>${esc(tx('g.'+g))}</span> · <i>${esc(tx('verbo'))}: ${esc(tx('v.'+g))}</i></p></li>`;
  }
  function itemDuda(d,i){
    return `<li class="lb-item" data-d="${d.id}">
      <textarea data-did="${d.id}" rows="2" aria-label="${esc(tx('dudas'))} ${i+1}" placeholder="${esc(tx('phDuda'))}">${esc(d.txt)}</textarea>
      <div class="lb-fila"><label class="lb-sel"><span>${esc(tx('loSostiene'))}</span><select data-ancla-d="${d.id}">${opcionesAncla(d.ancla)}</select></label>
        <button type="button" class="ap-quitar" data-quitar-d="${d.id}" aria-label="${esc(tx('quitar'))}">×</button></div>
      <button type="button" class="ap-acc" data-rf="${d.id}">${esc(tx('alReflujo'))} →</button></li>`;
  }
  function graduacion(){
    const hs=lib.hallazgos.filter(h=>h.txt.trim()), n=hs.length, c=cuentas();
    if(!n) return `<p class="lb-gtxt">${esc(tx('gradVacio'))}</p>`;
    const seg=k=> c[k]? `<i class="lb-s lb-s-${k}" style="flex:${c[k]}" title="${esc(tx('g.'+k))}: ${c[k]}"></i>`:'';
    return `<div class="lb-barra" role="img" aria-label="${esc(tx('gradTxt')(n,c))}">${seg('doc')}${seg('pc')}${seg('obra')}${seg('propia')}</div>
      <p class="lb-gtxt">${esc(tx('gradTxt')(n,c))}</p>
      ${c.propia?`<p class="lb-gnota">${esc(tx('gradPropia'))}</p>`:''}${c.pc?`<p class="lb-gnota">${esc(tx('gradPc'))}</p>`:''}
      <p class="lb-gnota lb-gris">${esc(tx('gradNota'))}</p>`;
  }
  function lecturasHtml(){
    if(!lib.lecturas.length) return `<li class="ap-gris">${esc(tx('vacioLecturas'))}</li>`;
    return lib.lecturas.map(l=>{ const {c,n}=cotejo(l);
      return `<li><a href="#vinculo=${esc(l.a)}~${esc(l.b)}" data-vin-lb="${esc(l.a)}~${esc(l.b)}">${esc(l.ta)} ↔ ${esc(l.tb)}</a> <span class="ap-gris">${esc(tx('coinc')(c,n))}</span></li>`; }).join('');
  }
  function pintarEn(c,o){
    cont=c; opts=o||{};
    const foco=document.activeElement && c.contains(document.activeElement) ? (document.activeElement.dataset.hid||document.activeElement.dataset.did||document.activeElement.dataset.lib||null) : null;
    c.innerHTML=`<p class="ap-intro ap-almacen">${esc(memoriaSola?tx('sinAlmacen'):tx('aviso'))}</p>
      <label class="ap-campo"><span>${esc(tx('pregunta'))}</span><textarea data-lib="pregunta" rows="2" placeholder="${esc(tx('phPregunta'))}">${esc(lib.pregunta)}</textarea></label>
      <div class="ap-campo"><span>${esc(tx('obras'))}</span><ul class="ap-lista">${lib.obras.length? lib.obras.map(x=>`<li><a href="#${esc(x.id)}" data-go-lb="${esc(x.id)}">${esc(x.t)}</a> <span class="ap-gris">${esc(x.a)}${x.y?' · '+esc(x.y):''}</span> <button type="button" class="ap-quitar" data-quitar-o="${esc(x.id)}" aria-label="${esc(tx('quitar'))}: ${esc(x.t)}">×</button></li>`).join('') : `<li class="ap-gris">${esc(tx('vacioObras'))}</li>`}</ul></div>
      <div class="ap-campo"><span>${esc(tx('fuentes'))}</span><ul class="ap-lista">${lib.fuentes.length? lib.fuentes.map((x,i)=>`<li><a href="#vinculo=${esc(x.a)}~${esc(x.b)}" data-vin-lb="${esc(x.a)}~${esc(x.b)}">${esc(x.ta)} ↔ ${esc(x.tb)}</a> <span class="ap-gris">${esc(x.estado==='ok'?tx('ok'):tx('pcE'))}</span> <button type="button" class="lb-mini" data-h-de="v:${esc(x.a)}~${esc(x.b)}">+ ${esc(tx('hallazgoDe'))}</button> <button type="button" class="ap-quitar" data-quitar-f="${i}" aria-label="${esc(tx('quitar'))}">×</button></li>`).join('') : `<li class="ap-gris">${esc(tx('vacioFuentes'))}</li>`}</ul></div>
      <div class="ap-campo"><span>${esc(tx('lecturas'))}</span><ul class="ap-lista">${lecturasHtml()}</ul></div>
      <div class="ap-campo"><span>${esc(tx('hallazgos'))}</span><ol class="lb-items">${lib.hallazgos.map(itemHallazgo).join('')}</ol><button type="button" class="ap-acc sec" data-mas="h">+ ${esc(tx('masHallazgo'))}</button></div>
      <div class="ap-campo"><span>${esc(tx('dudas'))}</span><ol class="lb-items">${lib.dudas.map(itemDuda).join('')}</ol><button type="button" class="ap-acc sec" data-mas="d">+ ${esc(tx('masDuda'))}</button></div>
      <label class="ap-campo"><span>${esc(tx('argumento'))}</span><textarea data-lib="argumento" rows="4" placeholder="${esc(tx('phArgumento'))}">${esc(lib.argumento)}</textarea></label>
      <section class="lb-grad" aria-live="polite"><h4>${esc(tx('grad'))}</h4><div class="lb-gcuerpo">${graduacion()}</div></section>
      <div class="ap-fila ap-exp"><button type="button" class="ap-acc" data-lb="copiar">${esc(tx('copiar'))}</button><button type="button" class="ap-acc" data-lb="descargar">${esc(tx('descargar'))}</button><span class="ap-vaciar"><button type="button" class="ap-acc sec" data-lb="vaciar">${esc(tx('vaciar'))}</button></span></div>`;
    if(foco){ const f=c.querySelector(`[data-hid="${foco}"],[data-did="${foco}"],[data-lib="${foco}"]`); if(f) f.focus(); }
    if(c._enlazada) return; c._enlazada=true;
    let tG=null;
    const guardarPronto=()=>{ clearTimeout(tG); tG=setTimeout(()=>guardar(false),350); };
    c.addEventListener('input',ev=>{
      const t=ev.target, d=t.dataset;
      if(d.lib){ lib[d.lib]=t.value; guardarPronto(); return; }
      if(d.hid){ const h=lib.hallazgos.find(x=>x.id===d.hid); if(h){ h.txt=t.value; guardarPronto(); const gc=c.querySelector('.lb-gcuerpo'); if(gc) gc.innerHTML=graduacion(); } return; }
      if(d.did){ const x=lib.dudas.find(y=>y.id===d.did); if(x){ x.txt=t.value; guardarPronto(); } return; }
    });
    c.addEventListener('change',ev=>{
      const t=ev.target, d=t.dataset;
      if(d.ancla){ const h=lib.hallazgos.find(x=>x.id===d.ancla); if(h){ h.ancla=t.value; guardar(false); const g=grado(h.ancla); const p=c.querySelector(`[data-grado="${h.id}"]`); if(p) p.innerHTML=`${trazo(g)}<span>${esc(tx('g.'+g))}</span> · <i>${esc(tx('verbo'))}: ${esc(tx('v.'+g))}</i>`; const gc=c.querySelector('.lb-gcuerpo'); if(gc) gc.innerHTML=graduacion(); } return; }
      if(d.anclaD){ const x=lib.dudas.find(y=>y.id===d.anclaD); if(x){ x.ancla=t.value; guardar(false); } return; }
    });
    c.addEventListener('click',ev=>{
      const b=ev.target.closest('button,a'); if(!b||!c.contains(b)) return; const d=b.dataset;
      if(d.goLb){ ev.preventDefault(); if(opts.ir) opts.ir({obra:d.goLb}); return; }
      if(d.vinLb){ ev.preventDefault(); const [x,y]=d.vinLb.split('~'); if(opts.ir) opts.ir({vinculo:[x,y]}); return; }
      if(d.quitarO){ API.quitarObra(d.quitarO); return; }
      if(d.quitarF){ lib.fuentes.splice(+d.quitarF,1); guardar(); return; }
      if(d.quitarH){ lib.hallazgos=lib.hallazgos.filter(x=>x.id!==d.quitarH); guardar(); return; }
      if(d.quitarD){ lib.dudas=lib.dudas.filter(x=>x.id!==d.quitarD); guardar(); return; }
      if(d.hDe){ lib.hallazgos.push({id:nid(),txt:'',ancla:d.hDe}); guardar(); const ts=c.querySelectorAll('[data-hid]'); if(ts.length) ts[ts.length-1].focus(); return; }
      if(d.mas){ const k=d.mas==='h'?'hallazgos':'dudas'; lib[k].push({id:nid(),txt:'',ancla:''}); guardar(); const ts=c.querySelectorAll(d.mas==='h'?'[data-hid]':'[data-did]'); if(ts.length) ts[ts.length-1].focus(); return; }
      if(d.rf){ const x=lib.dudas.find(y=>y.id===d.rf); if(x){ if(opts.cerrar) opts.cerrar(); alReflujo(x.txt, x.ancla); } return; }
      if(d.lb==='copiar'){ const t=md(); const fin=()=>opts.avisar&&opts.avisar(tx('copiada')); try{ navigator.clipboard.writeText(t).then(fin,()=>respaldo(t,fin)); }catch(e){ respaldo(t,fin); } return; }
      if(d.lb==='descargar'){ const blob=new Blob([md()],{type:'text/markdown;charset=utf-8'}); const u=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=u; a.download='libreta-atlas-'+new Date().toISOString().slice(0,10)+'.md'; document.body.append(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(u),2000); return; }
      if(d.lb==='vaciar'){ const s=b.parentNode; s.innerHTML=`<button type="button" class="ap-acc sec" data-lb="si">${esc(tx('confirmar'))}</button> <button type="button" class="ap-acc sec" data-lb="no">${esc(tx('cancelar'))}</button>`; s.querySelector('[data-lb="no"]').focus(); return; }
      if(d.lb==='si'){ API.vaciar(); if(opts.avisar) opts.avisar(tx('vaciada')); return; }
      if(d.lb==='no'){ pintarEn(c,opts); const f=c.querySelector('[data-lb="vaciar"]'); if(f) f.focus(); return; }
    });
  }
  function respaldo(t,fin){ const a=document.createElement('textarea'); a.value=t; a.setAttribute('readonly',''); a.style.position='fixed'; a.style.opacity='0'; document.body.append(a); a.select(); try{ document.execCommand('copy'); }catch(e){} a.remove(); fin(); }
})();
