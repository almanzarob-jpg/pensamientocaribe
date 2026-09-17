/* ==========================================================================
   Antirracismo y reparaciones · capa de lectura sobre «Con el agua de por medio»

   El atlas clasifica por corrientes y por fenómenos; esta capa no clasifica
   nada. Toma obras ya clasificadas y las lee como casos: quién reclama, ante
   qué instancia, bajo qué categoría y con qué desenlace. Reúne dos fenómenos
   que el catálogo mantiene separados —el reclamo y la deuda— porque en la
   práctica se tramitan juntos, y declara en el mapa los sitios donde el atlas
   todavía no tiene obra que siga el reclamo.

   Se engancha sin tocar el código del atlas: envuelve render, applyLang y
   switchView, que son declaraciones globales del script principal, y se
   registra en PANELES_LATERALES. Debe cargarse después del script principal.
   Los datos viven en data/agua-de-por-medio/capa-antirracismo.js, generado por
   scripts/generar-capa-antirracismo.py. Las coordenadas no están ahí: cada
   caso declara un lugar y el lugar lo resuelve el corpus, con la proyección
   del propio atlas, para que la capa nunca se despegue de sus nodos. El autor,
   el título y el año de cada obra también salen del corpus, nunca de partir
   cadenas de texto.
   ========================================================================== */
(function(){
  if(typeof window.ANTIRRACISMO==='undefined' || typeof render!=='function') return;
  const A = window.ANTIRRACISMO;
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (n,at={}) => { const e=document.createElementNS(NS,n); for(const k in at) e.setAttribute(k,at[k]); return e; };
  const esc = s => String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const sinT = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
  const angosto = () => window.matchMedia && window.matchMedia('(max-width:780px)').matches;

  /* ---------------- idioma propio, sin tocar el I18N del atlas ---------------- */
  const AI = {
    es:{ btn:'Antirracismo', btnTitle:'Abrir la capa de antirracismo y reparaciones',
         quien:'Quién reclama', inst:'Ante qué instancia', cat:'Bajo qué categoría', des:'Desenlace',
         huecos:'Vacíos declarados',
         huecosNota:'Señalan lo que falta en el corpus del atlas, no la ausencia de procesos antirracistas en esos territorios.',
         nodo:'nodo de la propuesta', revision:'Revisión', sinleer:'sin leer', reserva:'con reserva',
         buscaPh:'obra, autor, instancia…', buscaLbl:'Buscar en los casos',
         resumen:(c,l,v)=>c+' casos · '+l+' lugares · '+v+' vacíos declarados',
         filtrados:(n,t)=>n+' de '+t+' casos', sinFiltro:'Todos los casos',
         nada:'Ningún caso coincide con la búsqueda.', limpiar:'Quitar filtro',
         comoSeLee:'Cómo se lee esta capa',
         cerrar:'Cerrar panel', cerrarT:'Cierra el panel y deja la capa encendida',
         desactivar:'Desactivar capa', desactivarT:'Retira las marcas del mapa y restablece la vista del atlas',
         verObra:'Ver la obra en el atlas', verMapa:'Ver el mapa',
         ampliar:'Ampliar', reducir:'Reducir',
         anuncio:'{n} casos en {l} lugares, y {v} vacíos declarados.',
         anuncioSitio:'{s}: {n} casos.' },
    en:{ btn:'Antiracism', btnTitle:'Open the antiracism and reparations layer',
         quien:'Who claims', inst:'Before which body', cat:'Under what category', des:'Outcome',
         huecos:'Declared gaps',
         huecosNota:'They mark what the atlas corpus lacks, not the absence of antiracist processes in those territories.',
         nodo:'node in the proposal', revision:'Review', sinleer:'unread', reserva:'with reservation',
         buscaPh:'work, author, body…', buscaLbl:'Search the cases',
         resumen:(c,l,v)=>c+' cases · '+l+' places · '+v+' declared gaps',
         filtrados:(n,t)=>n+' of '+t+' cases', sinFiltro:'All cases',
         nada:'No case matches the search.', limpiar:'Clear filter',
         comoSeLee:'How to read this layer',
         cerrar:'Close panel', cerrarT:'Closes the panel and leaves the layer on',
         desactivar:'Turn off layer', desactivarT:'Removes the map marks and restores the atlas view',
         verObra:'See the work in the atlas', verMapa:'See the map',
         ampliar:'Expand', reducir:'Collapse',
         anuncio:'{n} cases in {l} places, and {v} declared gaps.',
         anuncioSitio:'{s}: {n} cases.' }
  };
  const at = k => (AI[LANG] && AI[LANG][k]!==undefined) ? AI[LANG][k] : AI.es[k];
  const loc = (o,c) => o[c+'_'+LANG] !== undefined ? o[c+'_'+LANG] : o[c+'_es'];
  const col = k => A.desenlaces[k].c;
  const desLbl = k => A.desenlaces[k][LANG] || A.desenlaces[k].es;
  const nomLugar = k => (typeof L!=='undefined' && L[k]) ? L[k][2] : k;

  /* Autor, título y año salen del corpus. La capa guarda un rótulo de respaldo
     por si una obra se retirara del atlas, pero nunca parte cadenas de texto. */
  const OBRA = {};
  if(typeof N!=='undefined') N.forEach(n=>{ OBRA[n.id]=n; });
  const autorDe  = c => OBRA[c.id] ? OBRA[c.id].a : '';
  const tituloDe = c => OBRA[c.id] ? OBRA[c.id].t : c.obra;
  const anioDe   = c => (OBRA[c.id] && OBRA[c.id].y) ? OBRA[c.id].y : c.anio;

  const AR = { activa:false, sitio:null, caso:null, filtro:null, q:'', alto:'resumen' };
  window.AR_ESTADO = AR;   /* para las pruebas */

  function visibles(){
    return A.casos.filter(c=>{
      if(AR.filtro && c.desenlace!==AR.filtro) return false;
      if(!AR.q) return true;
      const heno=sinT([tituloDe(c),autorDe(c),anioDe(c),loc(c,'quien'),loc(c,'instancia'),loc(c,'categoria'),loc(c,'nota')].join(' '));
      return sinT(AR.q).split(/\s+/).every(w=>heno.includes(w));
    });
  }
  function agrupar(){
    const m=new Map();
    visibles().forEach(c=>{
      if(!m.has(c.lugar)) m.set(c.lugar,{clave:c.lugar,casos:[]});
      m.get(c.lugar).casos.push(c);
    });
    const anio=c=>parseInt(String(anioDe(c)).match(/\d{4}/)||[0],10);
    m.forEach(s=>s.casos.sort((a,b)=>anio(a)-anio(b)));
    return [...m.values()];
  }

  /* ---------------- botón del encabezado y panel ---------------- */
  const controls=document.querySelector('header .controls');
  const grpRef=document.getElementById('caribesBtn') ? document.getElementById('caribesBtn').closest('.grp')
             : (document.getElementById('recorridosBtn') ? document.getElementById('recorridosBtn').closest('.grp') : null);
  const grp=document.createElement('div'); grp.className='grp familia';
  grp.innerHTML='<div class="seg base"><button id="antirracismoBtn" type="button" aria-expanded="false" aria-controls="panelAntirracismo"></button></div>';
  if(grpRef && grpRef.nextSibling) controls.insertBefore(grp, grpRef.nextSibling); else if(controls) controls.appendChild(grp);
  const btn=document.getElementById('antirracismoBtn');

  const main=document.getElementById('main-content');
  const panel=document.createElement('aside');
  panel.id='panelAntirracismo'; panel.className='panelLateral ar-panel'; panel.hidden=true;
  panel.innerHTML='<div class="ar-cab" id="arCab"></div><div class="ar-cuerpo" id="arCuerpo"></div>';
  main.appendChild(panel);
  const anuncio=document.createElement('div');
  anuncio.className='visually-hidden'; anuncio.setAttribute('role','status'); anuncio.setAttribute('aria-live','polite');
  main.appendChild(anuncio);
  const cab = () => document.getElementById('arCab');
  const cuerpo = () => document.getElementById('arCuerpo');

  if(typeof PANELES_LATERALES!=='undefined') PANELES_LATERALES.push(['panelAntirracismo','antirracismoBtn']);
  btn.addEventListener('click',()=>{
    if(panel.hidden){ activar(); abrir_(); }
    else cerrarPanel();
  });
  panel.addEventListener('keydown', ev=>{ if(ev.key==='Escape'){ ev.stopPropagation(); cerrarPanel(); } });

  /* El panel y la capa son dos cosas distintas: cerrar el panel deja las marcas
     encendidas en el mapa; desactivar la capa las retira y devuelve el atlas a
     su estado anterior. Antes había un solo botón y la diferencia no existía. */
  function abrir_(){ abrirPanelLateral('panelAntirracismo','antirracismoBtn'); encuadrar(true); }
  function cerrarPanel(){ cerrarPanelLateral('panelAntirracismo','antirracismoBtn'); encuadrar(false); }

  function activar(){
    AR.activa=true;
    if(state.view!=='corriente' && typeof setView==='function') setView('corriente'); else render();
    pintarTodo(); atenuar(); anunciar();
  }
  function desactivar(){
    AR.activa=false; AR.sitio=null; AR.caso=null; AR.filtro=null; AR.q=''; 
    borrar(); atenuar(); encuadrar(false); marcarHash();
    cerrarPanelLateral('panelAntirracismo','antirracismoBtn');
    anuncio.textContent='';
  }
  function anunciar(){
    const g=agrupar(), n=visibles().length;
    anuncio.textContent=at('anuncio').replace('{n}',n).replace('{l}',g.length).replace('{v}',A.vacios.length);
  }

  /* ---------------- encuadre: el panel no tapa el mapa ----------------
     El panel cubre la banda derecha del lienzo. Mientras está abierto se
     desplaza el mapa lo justo para que los lugares sigan a la vista, y al
     cerrarlo se deshace exactamente el mismo desplazamiento, sin pelearse con
     el paneo del visitante. */
  let desplazado=0;
  function encuadrar(abrir){
    if(typeof vpt==='undefined' || typeof applyVP!=='function' || angosto()) return;
    const objetivo = abrir && AR.activa ? (panel.getBoundingClientRect().width||400)*0.42 : 0;
    const svgEl=document.getElementById('stage'); if(!svgEl) return;
    const u=(typeof VW!=='undefined'?VW:1200)/(svgEl.clientWidth||1200);
    const delta=(objetivo-desplazado)*u/Math.max(vpt.k,0.0001);
    if(!delta) return;
    vpt.tx-=delta; desplazado=objetivo; applyVP();
  }

  /* ---------------- jerarquía del mapa ----------------
     Mientras la capa está encendida, lo que no pertenece a ella baja de tono.
     Al abrir un caso, solo quedan encendidos su nodo y aquellos con los que el
     atlas declara una relación: se leen de ATLAS.relaciones, no se inventan. */
  function relacionadas(id){
    const s=new Set([id]);
    (typeof ATLAS!=='undefined' && ATLAS.relaciones ? ATLAS.relaciones : []).forEach(r=>{
      if(r.a===id) s.add(r.b); else if(r.b===id) s.add(r.a);
    });
    return s;
  }
  function atenuar(){
    const svgEl=document.getElementById('stage');
    if(svgEl) svgEl.classList.toggle('ar-activa', !!AR.activa && state.view==='corriente');
    if(typeof VNODES==='undefined') return;
    if(!AR.activa || state.view!=='corriente'){
      VNODES.forEach(n=>{ if(n._c){ n._c.style.opacity=''; } if(n._g) n._g.classList.remove('ar-apagado','ar-vivo'); });
      if(typeof EDGES!=='undefined') EDGES.forEach(e=>{ const p=e&&e.p; if(p) p.classList.remove('ar-apagada','ar-viva'); });
      return;
    }
    const delCaso = AR.caso ? relacionadas(AR.caso) : null;
    const lugares = new Set(visibles().map(c=>c.lugar));
    const idsCapa = new Set(visibles().map(c=>c.id));
    VNODES.forEach(n=>{
      if(!n._g) return;
      const propio = delCaso ? delCaso.has(n.id) : (idsCapa.has(n.id) || lugares.has(n.l));
      n._g.classList.toggle('ar-apagado', !propio);
      n._g.classList.toggle('ar-vivo', !!(delCaso && n.id===AR.caso));
    });
    if(typeof EDGES!=='undefined') EDGES.forEach(e=>{
      const p=e&&e.p; if(!p) return;
      const viva = delCaso && e.na && e.nb && delCaso.has(e.na.id) && delCaso.has(e.nb.id);
      p.classList.toggle('ar-viva', !!viva);
      p.classList.toggle('ar-apagada', !viva);
    });
  }

  /* ---------------- cabecera del panel ---------------- */
  function pintarCabecera(){
    const g=agrupar();
    cab().innerHTML =
      '<h2 class="ar-tit">'+esc(A['titulo_'+LANG]||A.titulo_es)+'</h2>'
      +'<p class="ar-resumen">'+esc(at('resumen')(A.casos.length,new Set(A.casos.map(c=>c.lugar)).size,A.vacios.length))+'</p>'
      +'<div class="ar-acciones">'
        +'<button type="button" class="ar-accion" id="arCerrar" title="'+esc(at('cerrarT'))+'">'+at('cerrar')+'</button>'
        +'<button type="button" class="ar-accion ar-accion-off" id="arOff" title="'+esc(at('desactivarT'))+'">'+at('desactivar')+'</button>'
        +'<button type="button" class="ar-accion ar-solo-movil" id="arAlto">'+at('ampliar')+'</button>'
      +'</div>'
      +'<details class="ar-como"><summary>'+at('comoSeLee')+'</summary><p>'+esc(loc(A,'pie'))+'</p></details>'
      +'<label class="visually-hidden" for="arBusca">'+at('buscaLbl')+'</label>'
      +'<input id="arBusca" class="ar-busca" type="search" autocomplete="off" spellcheck="false" placeholder="'+esc(at('buscaPh'))+'">'
      +'<div class="ar-chips" role="group" aria-label="'+esc(at('sinFiltro'))+'">'
        +Object.keys(A.desenlaces).map(k=>{
          const n=A.casos.filter(c=>c.desenlace===k).length;
          return '<button type="button" class="ar-chip" data-f="'+k+'" aria-pressed="false">'
            +'<span class="ar-tick" aria-hidden="true">✓</span><i style="background:'+col(k)+'"></i>'
            +'<span class="ar-chip-t">'+esc(desLbl(k))+'</span><b>'+n+'</b></button>';
        }).join('')
      +'</div><button type="button" class="ar-limpiar" id="arLimpiar" hidden>'+at('limpiar')+'</button>';

    const bus=document.getElementById('arBusca');
    bus.value=AR.q;
    bus.addEventListener('input',()=>{ AR.q=bus.value.trim(); AR.caso=null; AR.sitio=null; pintarLista(); dibujar(); atenuar(); });
    document.getElementById('arCerrar').addEventListener('click',cerrarPanel);
    document.getElementById('arOff').addEventListener('click',desactivar);
    document.getElementById('arAlto').addEventListener('click',alternarAlto);
    document.getElementById('arLimpiar').addEventListener('click',()=>ponFiltro(null));
    cab().querySelectorAll('.ar-chip').forEach(b=>b.addEventListener('click',()=>ponFiltro(b.dataset.f)));
    sincronizarChips();
  }
  function ponFiltro(f){
    AR.filtro = (AR.filtro===f || !f) ? null : f;
    AR.caso=null; AR.sitio=null;
    sincronizarChips(); pintarLista(); dibujar(); atenuar(); anunciar();
  }
  function sincronizarChips(){
    cab().querySelectorAll('.ar-chip').forEach(b=>b.setAttribute('aria-pressed', String(AR.filtro===b.dataset.f)));
    const l=document.getElementById('arLimpiar'); if(l) l.hidden=!AR.filtro;
  }
  function alternarAlto(){
    AR.alto = AR.alto==='resumen' ? 'ampliada' : 'resumen';
    panel.classList.toggle('ar-ampliada', AR.alto==='ampliada');
    const b=document.getElementById('arAlto'); if(b) b.textContent = AR.alto==='resumen' ? at('ampliar') : at('reducir');
  }

  /* ---------------- lista y fichas ---------------- */
  function ficha(o){
    const par=(et,v)=>'<div class="ar-par"><dt>'+et+'</dt><dd>'+esc(v)+'</dd></div>';
    return '<div class="ar-ficha" id="ar-f-'+o.id+'"><dl>'
      +par(at('quien'),loc(o,'quien'))+par(at('inst'),loc(o,'instancia'))+par(at('cat'),loc(o,'categoria'))
      +'<div class="ar-par"><dt>'+at('des')+'</dt><dd><span class="ar-desen" style="--c:'+col(o.desenlace)+'">'+esc(desLbl(o.desenlace))+'</span></dd></div>'
      +'</dl><p class="ar-nota">'+esc(loc(o,'nota'))+'</p>'
      +'<p class="ar-ir"><button type="button" class="ar-obra" data-obra="'+o.id+'">'+at('verObra')+'</button>'
      +'<button type="button" class="ar-obra ar-solo-movil" data-mapa="1">'+at('verMapa')+'</button></p></div>';
  }
  function pintarLista(){
    const vis=visibles(), grupos=agrupar();
    let s='<p class="ar-cuenta">'+(AR.filtro||AR.q ? esc(at('filtrados')(vis.length,A.casos.length)) : esc(at('sinFiltro')))+'</p>';
    s += vis.length===0 ? '<p class="ar-nada">'+at('nada')+'</p>'
      : grupos.map(g=>'<section class="ar-grupo'+(AR.sitio===g.clave?' viva':'')+'" id="ar-g-'+g.clave+'">'
          +'<h3>'+esc(nomLugar(g.clave))+'<span>'+g.casos.length+'</span></h3>'
          +g.casos.map(o=>{
            const marcas=[]; if(o.sin_leer) marcas.push(at('sinleer')); if(o.reserva) marcas.push(at('reserva'));
            return '<article class="ar-caso-c'+(AR.caso===o.id?' abierta':'')+'">'
              +'<button type="button" class="ar-caso" data-id="'+o.id+'" aria-expanded="'+(AR.caso===o.id)+'" aria-controls="ar-f-'+o.id+'">'
                +'<span class="ar-obra-t">'+esc(tituloDe(o))+'</span>'
                +'<span class="ar-autor">'+esc(autorDe(o))+(anioDe(o)?' · '+esc(anioDe(o)):'')+'</span>'
                +'<span class="ar-desen" style="--c:'+col(o.desenlace)+'">'+esc(desLbl(o.desenlace))+'</span>'
                +(marcas.length?'<span class="ar-rev">'+at('revision')+': '+marcas.map(esc).join(' · ')+'</span>':'')
              +'</button>'+(AR.caso===o.id?ficha(o):'')+'</article>';
          }).join('')+'</section>').join('');

    s += '<section class="ar-huecos"><h3>'+at('huecos')+'</h3><p class="ar-huecos-n">'+at('huecosNota')+'</p>'
      +A.vacios.map(v=>'<div class="ar-vacio" id="ar-v-'+v.id+'">'
        +'<div class="ar-vacio-t"><span class="ar-marca-hueco" aria-hidden="true"></span>'+esc(loc(v,'caso'))+'</div>'
        +'<div class="ar-vacio-l">'+esc(nomLugar(v.lugar))+(v.nodo?' · '+at('nodo'):'')+'</div>'
        +'<p>'+esc(loc(v,'nota'))+'</p></div>').join('')+'</section>';

    cuerpo().innerHTML=s;
    cuerpo().querySelectorAll('.ar-caso').forEach(b=>b.addEventListener('click',()=>abrirCaso(b.dataset.id)));
    cuerpo().querySelectorAll('.ar-obra').forEach(b=>b.addEventListener('click',()=>{
      if(b.dataset.mapa){ cerrarPanel(); return; }
      if(typeof openPanel==='function') openPanel(b.dataset.obra);
      else if(typeof focusNode==='function') focusNode(b.dataset.obra);
    }));
  }
  function pintarTodo(){ pintarCabecera(); pintarLista(); dibujar(); }

  function abrirCaso(id){
    AR.caso = (AR.caso===id) ? null : id;
    if(AR.caso) AR.sitio=null;
    pintarLista(); dibujar(); atenuar(); marcarHash();
    const o=A.casos.find(c=>c.id===AR.caso);
    if(o) anuncio.textContent=tituloDe(o)+' · '+desLbl(o.desenlace);
  }
  function abrirSitio(clave){
    const g=agrupar().find(s=>s.clave===clave); if(!g) return;
    if(g.casos.length===1){ AR.sitio=null; abrirCaso(g.casos[0].id); irA('#ar-f-'+g.casos[0].id); return; }
    AR.sitio=(AR.sitio===clave)?null:clave; AR.caso=null;
    pintarLista(); dibujar(); atenuar(); marcarHash();
    if(AR.sitio){
      irA('[id="ar-g-'+clave+'"]');
      anuncio.textContent=at('anuncioSitio').replace('{s}',nomLugar(clave)).replace('{n}',g.casos.length);
    }
  }
  function irA(sel){
    if(panel.hidden) abrir_();
    const el2=panel.querySelector(sel); if(el2 && el2.scrollIntoView) el2.scrollIntoView({behavior:'smooth',block:'start'});
  }

  /* ---------------- capa sobre el mapa ---------------- */
  let capaG=null;
  function borrar(){ if(capaG && capaG.parentNode) capaG.parentNode.removeChild(capaG); capaG=null; }
  function arco(cx,cy,r,color,a0,a1){
    const pt=a=>[cx+r*Math.cos(a), cy+r*Math.sin(a)];
    const [x0,y0]=pt(a0),[x1,y1]=pt(a1), grande=(a1-a0)>Math.PI?1:0;
    return mk('path',{d:'M'+x0.toFixed(2)+' '+y0.toFixed(2)+'A'+r.toFixed(2)+' '+r.toFixed(2)+' 0 '+grande+' 1 '+x1.toFixed(2)+' '+y1.toFixed(2),
      fill:'none', stroke:color, 'stroke-width':(r*0.62).toFixed(2)});
  }
  /* Posición de un nodo del atlas, leída de su propio transform: la capa no
     recalcula el grafo, solo pregunta dónde quedó cada obra. */
  function posNodo(id){
    const n=(typeof VNODES!=='undefined'?VNODES:[]).find(v=>v.id===id);
    const t=n && n._g && n._g.getAttribute('transform');
    const m=t && /translate\(([-\d.]+)[ ,]+([-\d.]+)\)/.exec(t);
    return m ? {x:parseFloat(m[1]), y:parseFloat(m[2])} : null;
  }
  /* Las conexiones del caso abierto se dibujan desde ATLAS.relaciones. No se
     infiere ninguna: si el corpus no la declara, no aparece. */
  function relacionesDe(id){
    return (typeof ATLAS!=='undefined' && ATLAS.relaciones ? ATLAS.relaciones : [])
      .filter(r=>r.a===id||r.b===id)
      .map(r=>({otro:r.a===id?r.b:r.a, tipo:r.tipo}));
  }

  function dibujar(){
    borrar();
    if(!AR.activa || state.view!=='corriente' || typeof vp==='undefined' || !vp) return;
    const inv = 1/Math.max((typeof vpt!=='undefined'?vpt.k:1), 0.0001);
    capaG=mk('g',{class:'ar-capa','aria-hidden':'true'});

    if(AR.caso){
      const pa=posNodo(AR.caso);
      if(pa){
        const hilos=mk('g',{class:'ar-hilos'});
        relacionesDe(AR.caso).forEach(rel=>{
          const pb=posNodo(rel.otro); if(!pb) return;
          const dx=pb.x-pa.x, dy=pb.y-pa.y, len=Math.hypot(dx,dy)||1;
          const mx=(pa.x+pb.x)/2 + dy/len*Math.min(34,len*0.22);
          const my=(pa.y+pb.y)/2 - dx/len*Math.min(34,len*0.22);
          hilos.appendChild(mk('path',{d:'M '+pa.x.toFixed(1)+','+pa.y.toFixed(1)+' Q '+mx.toFixed(1)+','+my.toFixed(1)+' '+pb.x.toFixed(1)+','+pb.y.toFixed(1),
            class:'ar-hilo ar-hilo-'+(rel.tipo||'resonancia')}));
        });
        capaG.appendChild(hilos);
      }
    }

    agrupar().forEach(g=>{
      const lu=L[g.clave]; if(!lu) return;
      const x=px(lu[1]), y=py(lu[0]), n=g.casos.length;
      const r=(9+5.5*Math.sqrt(n-1))*inv;
      const nodo=mk('g',{class:'ar-sitio'+(AR.sitio===g.clave||g.casos.some(c=>c.id===AR.caso)?' viva':''), 'data-sitio':g.clave});
      nodo.appendChild(mk('circle',{cx:x, cy:y, r:(r+6*inv).toFixed(2), class:'ar-aro', stroke:col(g.casos[0].desenlace)}));
      nodo.appendChild(mk('circle',{cx:x, cy:y, r:r.toFixed(2), class:'ar-base'}));
      let a=-Math.PI/2; const paso=(Math.PI*2)/n;
      g.casos.forEach(c=>{ nodo.appendChild(arco(x,y,r*0.72,col(c.desenlace),a,a+paso*0.995)); a+=paso; });
      if(n>1){ const t=mk('text',{x:x, y:(y+3.1*inv).toFixed(2), class:'ar-n'}); t.style.fontSize=(9*inv).toFixed(2)+'px'; t.textContent=n; nodo.appendChild(t); }
      capaG.appendChild(nodo);
    });

    /* El vacío no es un caso abierto: además del trazo discontinuo lleva un
       centro hueco y un signo de interrogación, para que no dependa del color. */
    A.vacios.forEach(v=>{
      const lu=L[v.lugar]; if(!lu) return;
      const x=px(lu[1]), y=py(lu[0]), r=8.5*inv;
      const nodo=mk('g',{class:'ar-sitio ar-hueco','data-vacio':v.id});
      nodo.appendChild(mk('circle',{cx:x, cy:y, r:(r+6*inv).toFixed(2), class:'ar-aro'}));
      nodo.appendChild(mk('circle',{cx:x, cy:y, r:r.toFixed(2), class:'ar-base-hueco','stroke-width':(1.7*inv).toFixed(2),'stroke-dasharray':(3.2*inv).toFixed(2)+' '+(2.4*inv).toFixed(2)}));
      const q=mk('text',{x:x, y:(y+3.2*inv).toFixed(2), class:'ar-q'}); q.style.fontSize=(9.5*inv).toFixed(2)+'px'; q.textContent='?';
      nodo.appendChild(q);
      capaG.appendChild(nodo);
    });

    capaG.querySelectorAll('.ar-sitio').forEach(g=>{
      g.setAttribute('tabindex','0'); g.setAttribute('role','button');
      const clave=g.dataset.sitio, vac=g.dataset.vacio;
      g.setAttribute('aria-label', vac ? loc(A.vacios.find(v=>v.id===vac),'caso') : nomLugar(clave));
      const act=()=>{ if(vac) irA('[id="ar-v-'+vac+'"]'); else abrirSitio(clave); };
      g.addEventListener('click',ev=>{ ev.stopPropagation(); act(); });
      g.addEventListener('keydown',ev=>{ if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); act(); } });
    });
    vp.appendChild(capaG);
  }

  /* ---------------- enlace profundo ---------------- */
  function marcarHash(){
    try{
      if(!AR.activa){ if(/^#antirracismo/.test(location.hash)) history.replaceState(null,'',location.pathname+location.search); return; }
      history.replaceState(null,'','#antirracismo'+(AR.caso?'='+AR.caso:''));
    }catch(e){}
  }
  function leerHash(){
    const m=/^#antirracismo(?:=(.+))?$/.exec(location.hash);
    if(!m) return;
    AR.activa=true;
    if(m[1]) AR.caso=decodeURIComponent(m[1]);
    if(state.view!=='corriente' && typeof setView==='function') setView('corriente');
    pintarTodo(); abrir_(); atenuar(); anunciar();
  }

  /* ---------------- enganche con el atlas ---------------- */
  const _render=render; window.render=function(){ _render.apply(this,arguments); dibujar(); atenuar(); };
  if(typeof switchView==='function'){ const _sv=switchView; window.switchView=function(v){ _sv.apply(this,arguments); dibujar(); atenuar(); }; }
  if(typeof applyLang==='function'){ const _al=applyLang; window.applyLang=function(){ _al.apply(this,arguments); rotular(); if(AR.activa) pintarTodo(); dibujar(); }; }

  function rotular(){ btn.textContent=at('btn'); btn.title=at('btnTitle'); btn.setAttribute('aria-label',at('btnTitle')); }
  rotular();
  window.addEventListener('hashchange',leerHash);
  window.addEventListener('resize',()=>{ if(AR.activa && !panel.hidden) encuadrar(true); });
  leerHash();
})();
