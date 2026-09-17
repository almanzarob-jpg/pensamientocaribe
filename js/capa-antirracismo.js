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
   del propio atlas, para que la capa nunca se despegue de sus nodos.
   ========================================================================== */
(function(){
  if(typeof window.ANTIRRACISMO==='undefined' || typeof render!=='function') return;
  const A = window.ANTIRRACISMO;
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (n,at={}) => { const e=document.createElementNS(NS,n); for(const k in at) e.setAttribute(k,at[k]); return e; };
  const esc = s => String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const sinT = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();

  /* ---------------- idioma propio, sin tocar el I18N del atlas ---------------- */
  const AI = {
    es:{ btn:'Antirracismo', btnTitle:'Abrir la capa de antirracismo y reparaciones',
         tit:'Antirracismo y reparaciones',
         quien:'Quién reclama', inst:'Ante qué instancia', cat:'Bajo qué categoría', des:'Desenlace',
         huecos:'Vacíos declarados', nodo:'nodo de la propuesta', sinleer:'sin leer', reserva:'con reserva',
         buscaPh:'obra, autor, instancia…', buscaLbl:'Buscar en los casos',
         cuenta:(n,t)=> n===t ? n+' casos' : n+' de '+t+' casos',
         nada:'Sin coincidencias.', limpiar:'Quitar filtro', quitar:'Quitar la capa',
         verObra:'Ver la obra en el atlas', soloCorriente:'La capa se lee en la vista Corriente.',
         anuncio:'{n} casos en {l} lugares, y {v} vacíos declarados.',
         anuncioSitio:'{s}: {n} casos.' },
    en:{ btn:'Antiracism', btnTitle:'Open the antiracism and reparations layer',
         tit:'Antiracism and reparations',
         quien:'Who claims', inst:'Before which body', cat:'Under what category', des:'Outcome',
         huecos:'Declared gaps', nodo:'node in the proposal', sinleer:'unread', reserva:'with reservation',
         buscaPh:'work, author, body…', buscaLbl:'Search the cases',
         cuenta:(n,t)=> n===t ? n+' cases' : n+' of '+t+' cases',
         nada:'No matches.', limpiar:'Clear filter', quitar:'Remove the layer',
         verObra:'See the work in the atlas', soloCorriente:'The layer reads in the Current view.',
         anuncio:'{n} cases in {l} places, and {v} declared gaps.',
         anuncioSitio:'{s}: {n} cases.' }
  };
  const at = k => (AI[LANG] && AI[LANG][k]!==undefined) ? AI[LANG][k] : AI.es[k];
  const loc = (o,c) => o[c+'_'+LANG] !== undefined ? o[c+'_'+LANG] : o[c+'_es'];
  const col = k => A.desenlaces[k].c;
  const desLbl = k => A.desenlaces[k][LANG] || A.desenlaces[k].es;
  const nomLugar = k => (typeof L!=='undefined' && L[k]) ? L[k][2] : k;

  const AR = { activa:false, sitio:null, caso:null, filtro:null, q:'' };
  window.AR_ESTADO = AR;   /* para las pruebas */

  function visibles(){
    return A.casos.filter(c=>{
      if(AR.filtro && c.desenlace!==AR.filtro) return false;
      if(!AR.q) return true;
      const heno=sinT([c.obra,c.anio,loc(c,'quien'),loc(c,'instancia'),loc(c,'categoria'),loc(c,'nota')].join(' '));
      return sinT(AR.q).split(/\s+/).every(w=>heno.includes(w));
    });
  }
  function agrupar(){
    const m=new Map();
    visibles().forEach(c=>{
      if(!m.has(c.lugar)) m.set(c.lugar,{clave:c.lugar,casos:[]});
      m.get(c.lugar).casos.push(c);
    });
    const anio=c=>parseInt(String(c.anio).match(/\d{4}/)||[0],10);
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
  main.appendChild(panel);
  const anuncio=document.createElement('div');
  anuncio.className='visually-hidden'; anuncio.setAttribute('role','status'); anuncio.setAttribute('aria-live','polite');
  main.appendChild(anuncio);

  if(typeof PANELES_LATERALES!=='undefined') PANELES_LATERALES.push(['panelAntirracismo','antirracismoBtn']);
  btn.addEventListener('click',()=>{
    if(panel.hidden){ activar(); abrirPanelLateral('panelAntirracismo','antirracismoBtn'); }
    else cerrarPanelLateral('panelAntirracismo','antirracismoBtn');
  });
  panel.addEventListener('keydown', ev=>{ if(ev.key==='Escape'){ ev.stopPropagation(); cerrarPanelLateral('panelAntirracismo','antirracismoBtn'); } });

  function activar(){
    AR.activa=true;
    if(state.view!=='corriente' && typeof setView==='function') setView('corriente'); else render();
    pintar(); anunciar();
  }
  function quitar(){
    AR.activa=false; AR.sitio=null; AR.caso=null; AR.filtro=null; AR.q='';
    borrar(); pintar(); marcarHash(); anuncio.textContent='';
  }
  function anunciar(){
    const g=agrupar(), n=visibles().length;
    anuncio.textContent=at('anuncio').replace('{n}',n).replace('{l}',g.length).replace('{v}',A.vacios.length);
  }

  /* ---------------- panel ---------------- */
  function ficha(o){
    return '<div class="ar-ficha" id="ar-f-'+o.id+'"><dl>'
      +'<dt>'+at('quien')+'</dt><dd>'+esc(loc(o,'quien'))+'</dd>'
      +'<dt>'+at('inst')+'</dt><dd>'+esc(loc(o,'instancia'))+'</dd>'
      +'<dt>'+at('cat')+'</dt><dd>'+esc(loc(o,'categoria'))+'</dd>'
      +'<dt>'+at('des')+'</dt><dd style="color:'+col(o.desenlace)+'">'+esc(desLbl(o.desenlace))+'</dd>'
      +'</dl><p>'+esc(loc(o,'nota'))+'</p>'
      +'<p class="ar-ir"><button type="button" class="ar-obra" data-obra="'+o.id+'">'+at('verObra')+'</button></p></div>';
  }
  function pintar(){
    const vis=visibles(), grupos=agrupar(), cuentas={};
    A.casos.forEach(c=>cuentas[c.desenlace]=(cuentas[c.desenlace]||0)+1);
    let s='<div class="ar-cab"><h2>'+esc(A['titulo_'+LANG]||A.titulo_es)+'</h2>'
      +'<button type="button" class="ar-quitar" id="arQuitar">'+at('quitar')+'</button></div>'
      +'<p class="ar-intro">'+esc(loc(A,'pie'))+'</p>'
      +'<label class="visually-hidden" for="arBusca">'+at('buscaLbl')+'</label>'
      +'<input id="arBusca" class="ar-busca" type="search" autocomplete="off" spellcheck="false" placeholder="'+esc(at('buscaPh'))+'" value="'+esc(AR.q)+'">'
      +'<div class="ar-chips">'
      +Object.keys(A.desenlaces).map(k=>'<button type="button" class="ar-chip" data-f="'+k+'" aria-pressed="'+(AR.filtro===k)+'">'
        +'<i style="background:'+col(k)+'"></i>'+esc(desLbl(k))+' <b>'+(cuentas[k]||0)+'</b></button>').join('')
      +(AR.filtro?'<button type="button" class="ar-chip" data-f="">'+at('limpiar')+'</button>':'')
      +'</div><div class="ar-cuenta">'+at('cuenta')(vis.length,A.casos.length)+'</div>';

    s += vis.length===0 ? '<p class="ar-nada">'+at('nada')+'</p>'
      : grupos.map(g=>'<section class="ar-grupo'+(AR.sitio===g.clave?' viva':'')+'" id="ar-g-'+g.clave+'">'
          +'<h3>'+esc(nomLugar(g.clave))+'<span>'+g.casos.length+'</span></h3>'
          +g.casos.map(o=>{
            const marcas=(o.sin_leer?'<span class="ar-marca">'+at('sinleer')+'</span>':'')
                       +(o.reserva?'<span class="ar-marca">'+at('reserva')+'</span>':'');
            return '<button type="button" class="ar-caso" data-id="'+o.id+'" aria-expanded="'+(AR.caso===o.id)+'" aria-controls="ar-f-'+o.id+'">'
              +'<span class="ar-obra-t">'+esc(o.obra)+'</span>'
              +'<span class="ar-meta"><span>'+esc(o.anio)+'</span>'
              +'<span class="ar-des" style="color:'+col(o.desenlace)+'">'+esc(desLbl(o.desenlace))+'</span>'+marcas+'</span></button>'
              +(AR.caso===o.id?ficha(o):'');
          }).join('')+'</section>').join('');

    s += '<div class="ar-huecos"><h3>'+at('huecos')+'</h3>'
      +A.vacios.map(v=>'<div class="ar-vacio" id="ar-v-'+v.id+'">'
        +'<div class="ar-vacio-t">'+esc(loc(v,'caso'))+'</div>'
        +'<div class="ar-vacio-l">'+esc(nomLugar(v.lugar))+(v.nodo?' · '+at('nodo'):'')+'</div>'
        +'<p>'+esc(loc(v,'nota'))+'</p></div>').join('')+'</div>';

    panel.innerHTML=s;
    panel.querySelector('#arQuitar').addEventListener('click',quitar);
    panel.querySelector('#arBusca').addEventListener('input',e=>{ AR.q=e.target.value.trim(); AR.caso=null; AR.sitio=null; pintar(); dibujar(); });
    panel.querySelectorAll('.ar-chip').forEach(b=>b.addEventListener('click',()=>{
      AR.filtro=b.dataset.f||null; AR.caso=null; AR.sitio=null; pintar(); dibujar(); anunciar(); }));
    panel.querySelectorAll('.ar-caso').forEach(b=>b.addEventListener('click',()=>abrirCaso(b.dataset.id)));
    panel.querySelectorAll('.ar-obra').forEach(b=>b.addEventListener('click',()=>{
      if(typeof openPanel==='function') openPanel(b.dataset.obra);
      else if(typeof focusNode==='function') focusNode(b.dataset.obra);
    }));
  }

  function abrirCaso(id){
    AR.caso = (AR.caso===id) ? null : id;
    if(AR.caso) AR.sitio=null;
    pintar(); dibujar(); marcarHash();
    const o=A.casos.find(c=>c.id===AR.caso);
    if(o) anuncio.textContent=o.obra+' · '+desLbl(o.desenlace);
  }
  /* El mapa selecciona el lugar; la lista resuelve la obra. Un lugar con un solo
     caso lo abre directo. Con más de uno no abre ninguno: abrir el primero daría
     a entender que esa obra es la principal del lugar, y el atlas no dice eso. */
  function abrirSitio(clave){
    const g=agrupar().find(s=>s.clave===clave); if(!g) return;
    if(g.casos.length===1){ AR.sitio=null; abrirCaso(g.casos[0].id); irA('#ar-f-'+g.casos[0].id); return; }
    AR.sitio=(AR.sitio===clave)?null:clave; AR.caso=null;
    pintar(); dibujar(); marcarHash();
    if(AR.sitio){
      irA('[id="ar-g-'+clave+'"]');
      anuncio.textContent=at('anuncioSitio').replace('{s}',nomLugar(clave)).replace('{n}',g.casos.length);
    }
  }
  function irA(sel){
    if(panel.hidden) abrirPanelLateral('panelAntirracismo','antirracismoBtn');
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

  function dibujar(){
    borrar();
    if(!AR.activa || state.view!=='corriente' || typeof vp==='undefined' || !vp) return;
    const inv = 1/Math.max((typeof vpt!=='undefined'?vpt.k:1), 0.0001);
    capaG=mk('g',{class:'ar-capa','aria-hidden':'true'});

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

    A.vacios.forEach(v=>{
      const lu=L[v.lugar]; if(!lu) return;
      const x=px(lu[1]), y=py(lu[0]), r=8.5*inv;
      const nodo=mk('g',{class:'ar-sitio ar-hueco','data-vacio':v.id});
      nodo.appendChild(mk('circle',{cx:x, cy:y, r:(r+6*inv).toFixed(2), class:'ar-aro'}));
      nodo.appendChild(mk('circle',{cx:x, cy:y, r:r.toFixed(2), class:'ar-base-hueco','stroke-width':(1.7*inv).toFixed(2),'stroke-dasharray':(3.2*inv).toFixed(2)+' '+(2.4*inv).toFixed(2)}));
      capaG.appendChild(nodo);
    });

    capaG.querySelectorAll('.ar-sitio').forEach(g=>{
      g.setAttribute('tabindex','0'); g.setAttribute('role','button');
      const clave=g.dataset.sitio, vac=g.dataset.vacio;
      const et = vac ? loc(A.vacios.find(v=>v.id===vac),'caso') : nomLugar(clave);
      g.setAttribute('aria-label', et);
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
    pintar(); dibujar(); abrirPanelLateral('panelAntirracismo','antirracismoBtn'); anunciar();
  }

  /* ---------------- enganche con el atlas ---------------- */
  const _render=render;    window.render=function(){ _render.apply(this,arguments); dibujar(); };
  if(typeof switchView==='function'){ const _sv=switchView; window.switchView=function(v){ _sv.apply(this,arguments); dibujar(); }; }
  if(typeof applyLang==='function'){ const _al=applyLang; window.applyLang=function(){ _al.apply(this,arguments); rotular(); if(AR.activa) pintar(); dibujar(); }; }

  function rotular(){ btn.textContent=at('btn'); btn.title=at('btnTitle'); btn.setAttribute('aria-label',at('btnTitle')); }
  rotular();
  window.addEventListener('hashchange',leerHash);
  leerHash();
})();
