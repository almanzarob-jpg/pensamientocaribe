/* «La deriva» — recorrido por las veinte definiciones del Caribe.
 *
 * Se monta encima de la capa «¿Qué Caribe?» sin reescribir nada suyo: usa
 * window.QC_API (activar / quitar / orden / porId), que la capa expone, y añade
 * su propia barra inferior. Debe cargarse DESPUÉS de js/capa-caribes.js.
 *
 * Dos piezas: la pared (las veinte a la vez, en miniatura) y la deriva (la
 * secuencia cronológica, de 1945 a 2026). Ningún dato nuevo: todo sale de
 * capa-caribes.json y de datos-atlas.js.
 */
(function(){
  if(typeof window.CARIBES==='undefined' || !window.ATLAS) return;
  const C = window.CARIBES, A = window.ATLAS;
  const API = () => window.QC_API;           /* la capa la completa al final de su IIFE */
  const ES  = () => (document.documentElement.lang||'es').slice(0,2)!=='en';
  const loc = o => !o ? '' : (typeof o==='string' ? o : (ES()? o.es : (o.en||o.es)));

  const DEFS = C.definiciones.slice().sort((a,b)=> a.anio-b.anio || a.id.localeCompare(b.id));
  const LUGARES = Object.keys(A.lugares);
  const NOMBRE = k => (A.lugares[k]||[])[2] || k;
  const EST = (d,k) => { const v = d.lugares[k]; return (v && v.e) ? v.e : 'nada'; };

  /* ---------------- índice de parpadeo: cuántas veces cambia de estado cada lugar --- */
  const PERFIL = {}, CAMBIOS = {};
  for(const k of LUGARES){
    const s = DEFS.map(d => EST(d,k));
    PERFIL[k] = s;
    CAMBIOS[k] = s.reduce((n,x,i)=> i && x!==s[i-1] ? n+1 : n, 0);
  }
  const POR_PARPADEO = LUGARES.slice().sort((a,b)=> CAMBIOS[b]-CAMBIOS[a] || NOMBRE(a).localeCompare(NOMBRE(b)));
  const INESTABLES = new Set(POR_PARPADEO.filter(k => CAMBIOS[k] >= 5));

  /* ---------------- estado ---------------- */
  const D = { i:0, tocando:false, ritmo:7000, foco:null, temp:null, soloParpadeo:false, abierta:false, indice:false };
  const menosMovimiento = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- chrome ---------------- */
  const T = {
    btn:      {es:'La deriva', en:'The drift'},
    titulo:   {es:'La deriva · 1945-2026', en:'The drift · 1945-2026'},
    jugar:    {es:'Reproducir', en:'Play'},
    pausa:    {es:'Pausa',      en:'Pause'},
    ant:      {es:'Anterior',   en:'Previous'},
    sig:      {es:'Siguiente',  en:'Next'},
    pared:    {es:'La pared',   en:'The wall'},
    paredSub: {es:'Las veinte definiciones a la vez. Cada miniatura dibuja los lugares del atlas con el estado que esa definición les da: aguamarina dentro, arena al margen, gris fuera, vacío si el texto no se pronuncia.',
               en:'All twenty definitions at once. Each thumbnail draws the atlas places with the state that definition gives them: aquamarine inside, sand at the margin, grey outside, empty where the text says nothing.'},
    cerrar:   {es:'Cerrar',     en:'Close'},
    cambios:  {es:'Cambios al entrar aquí', en:'Changes on entering here'},
    nada:     {es:'Ningún lugar cambia de estado en este paso.', en:'No place changes state in this step.'},
    indice:   {es:'Índice de parpadeo', en:'Flicker index'},
    solo:     {es:'Solo lo que parpadea', en:'Only what flickers'},
    ritmo:    {es:'Ritmo', en:'Pace'},
    quieto:   {es:'{n} nunca cambia de estado: está dentro de las veinte.', en:'{n} never changes state: it is inside all twenty.'},
    salir:    {es:'Salir del foco', en:'Clear focus'}
  };
  const t = k => loc(T[k]);

  const btn = document.createElement('button');
  btn.id='derivaBtn'; btn.type='button'; btn.className='botonEncabezado'; btn.setAttribute('aria-pressed','false');
  btn.textContent = t('btn');
  const refBtn = document.getElementById('caribesBtn');
  if(refBtn && refBtn.parentNode) refBtn.parentNode.insertBefore(btn, refBtn.nextSibling);
  else document.body.appendChild(btn);

  const barra = document.createElement('div');
  barra.className='dv-barra'; barra.hidden=true; barra.setAttribute('role','region');
  barra.setAttribute('aria-label', t('titulo'));
  document.body.appendChild(barra);

  const pared = document.createElement('div');
  pared.className='dv-pared'; pared.hidden=true; pared.setAttribute('role','dialog'); pared.setAttribute('aria-modal','true');
  document.body.appendChild(pared);

  const vivo = document.createElement('p');
  vivo.className='visualmenteOculto'; vivo.setAttribute('aria-live','polite');
  vivo.style.cssText='position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);';
  document.body.appendChild(vivo);

  /* ---------------- proyección para las miniaturas ----------------
     El encuadre se calcula con los nodos de la cuenca; los que quedan muy lejos
     —los dos brasileños— se pegan al borde y se dibujan como rombo, igual que
     la capa hace con sus extras fuera de cuadro. Si no, Palmares estira el mapa
     y el Caribe se aplasta. */
  const FUERA_DE_CUADRO = new Set(['oriximina','palmaresbr']);
  const CUENCA = LUGARES.filter(k=>!FUERA_DE_CUADRO.has(k));
  const LATS = CUENCA.map(k=>A.lugares[k][0]), LNGS = CUENCA.map(k=>A.lugares[k][1]);
  const LA0=Math.min(...LATS), LA1=Math.max(...LATS), LN0=Math.min(...LNGS), LN1=Math.max(...LNGS);
  const W=150, H=104, M=9;
  const cl = (v,a,b) => Math.max(a, Math.min(b, v));
  const mx = lng => cl(M + (lng-LN0)/(LN1-LN0||1) * (W-2*M), 3, W-3);
  const my = lat => cl(M + (LA1-lat)/(LA1-LA0||1) * (H-2*M), 3, H-3);
  const COLOR = {dentro:'var(--qc-dentro,#4cc3c9)', margen:'var(--qc-margen,#e9d8a6)',
                 fuera:'var(--qc-fuera,#9b9588)', disputa:'var(--qc-disputa,#ff5a7a)'};

  function marca(k, e){
    const x=+mx(A.lugares[k][1]).toFixed(1), y=+my(A.lugares[k][0]).toFixed(1);
    if(e==='nada') return `<circle cx="${x}" cy="${y}" r="1.9" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-dasharray="1 1.4"/>`;
    if(FUERA_DE_CUADRO.has(k))   /* rombo en el borde: está, pero no cabe en el cuadro */
      return `<path d="M${x} ${y-3.2}L${x+3.2} ${y}L${x} ${y+3.2}L${x-3.2} ${y}Z" fill="${COLOR[e]}" fill-opacity="${e==='fuera'?'.5':'.9'}"/>`;
    if(e==='fuera')              /* anillo abierto: el lugar existe y la definición lo deja afuera */
      return `<circle cx="${x}" cy="${y}" r="2.6" fill="none" stroke="${COLOR.fuera}" stroke-width="1.1" stroke-opacity=".85"/>`;
    const r = e==='dentro' ? 3.1 : 2.5;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${COLOR[e]}" fill-opacity=".95"/>`;
  }

  function miniatura(d){
    const puntos = LUGARES.map(k => marca(k, EST(d,k))).join('');
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${loc(d.apellido)}"><rect width="${W}" height="${H}" fill="none"/>${puntos}</svg>`;
  }

  /* ---------------- la pared ---------------- */
  function pintarPared(){
    pared.innerHTML =
      `<button type="button" class="dv-btn dv-cerrar" data-cerrar="1">${t('cerrar')}</button>`+
      `<h2>${t('pared')}</h2><p class="dv-sub">${loc(T.paredSub)}</p><div class="dv-rejilla">`+
      DEFS.map((d,i)=>
        `<button type="button" class="dv-card" data-i="${i}">`+
        miniatura(d)+
        `<small>${d.anio}</small><strong>${loc(d.apellido)}</strong><small>${d.autor}</small>`+
        `</button>`).join('')+
      `</div>`;
  }
  pared.addEventListener('click', ev=>{
    const cerrar = ev.target.closest('[data-cerrar]'); if(cerrar){ pared.hidden=true; btn.focus(); return; }
    const card = ev.target.closest('.dv-card'); if(!card) return;
    pared.hidden=true; ir(+card.dataset.i, {parar:true});
  });
  pared.addEventListener('keydown', ev=>{ if(ev.key==='Escape'){ pared.hidden=true; btn.focus(); } });

  /* ---------------- la barra ---------------- */
  function cambiosEntre(i){
    if(i<=0) return [];
    const a=DEFS[i-1], b=DEFS[i], out=[];
    for(const k of LUGARES){
      const ea=EST(a,k), eb=EST(b,k);
      if(ea===eb) continue;
      if(D.soloParpadeo && !INESTABLES.has(k)) continue;
      out.push({k, a:ea, b:eb});
    }
    return out.sort((x,y)=> CAMBIOS[y.k]-CAMBIOS[x.k]);
  }

  function pintarBarra(){
    const d = DEFS[D.i];
    const anio0 = DEFS[0].anio, anio1 = DEFS[DEFS.length-1].anio;
    const pos = a => ((a-anio0)/(anio1-anio0||1)*100).toFixed(2);
    const ticks = DEFS.map((x,i)=>
      `<button type="button" class="dv-tick" style="left:${pos(x.anio)}%" data-i="${i}"`+
      (i===D.i?' aria-current="true"':'')+` title="${x.anio} · ${loc(x.apellido)}"><span class="vo"></span></button>`).join('');
    const anios = [...new Set([anio0, 1975, 2000, anio1])].map(a=>`<span class="dv-anio" style="left:${pos(a)}%">${a}</span>`).join('');

    const cam = cambiosEntre(D.i);
    const cinta = cam.length
      ? cam.slice(0,14).map(c=>
          `<span class="dv-chip" data-a="${c.a}" data-b="${c.b}"><b>${NOMBRE(c.k)}</b>`+
          `<span class="dv-pt" data-e="${c.a}"></span><i>→</i><span class="dv-pt" data-e="${c.b}"></span></span>`).join('')
        + (cam.length>14 ? `<span class="dv-chip"><i>+${cam.length-14}</i></span>` : '')
      : `<span class="dv-nada">${t('nada')}</span>`;

    const lista = (D.soloParpadeo ? POR_PARPADEO.filter(k=>INESTABLES.has(k)) : POR_PARPADEO).map(k=>
      `<button type="button" class="dv-lugar" data-k="${k}"`+(D.foco===k?' aria-pressed="true"':' aria-pressed="false"')+`>`+
      `<span class="dv-nombre">${NOMBRE(k)}</span><span class="dv-num">${CAMBIOS[k]}</span>`+
      `<span class="dv-perfil">`+PERFIL[k].map((e,i)=>`<span data-e="${e}"${i===D.i?' data-aqui="1"':''}></span>`).join('')+`</span></button>`).join('');

    barra.innerHTML =
      `<div class="dv-fila">`+
        `<span class="dv-ctrl">`+
          `<button type="button" class="dv-btn" data-acc="ant">←</button>`+
          `<button type="button" class="dv-btn dv-play" data-acc="play">${D.tocando? t('pausa') : t('jugar')}</button>`+
          `<button type="button" class="dv-btn" data-acc="sig">→</button>`+
        `</span>`+
        `<span class="dv-linea">${anios}${ticks}</span>`+
        `<span class="dv-ctrl"><label class="dv-rotulo" for="dvRitmo">${t('ritmo')}</label>`+
          `<select class="dv-btn" id="dvRitmo" data-acc="ritmo">`+
            [4000,7000,12000].map(v=>`<option value="${v}"${v===D.ritmo?' selected':''}>${v/1000}s</option>`).join('')+
          `</select></span>`+
        `<button type="button" class="dv-btn" data-acc="pared">${t('pared')}</button>`+
        `<button type="button" class="dv-btn" data-acc="solo" aria-pressed="${D.soloParpadeo}">${t('solo')}</button>`+
        `<button type="button" class="dv-btn" data-acc="indice" aria-pressed="${D.indice}" aria-expanded="${D.indice}">${t('indice')}</button>`+
      `</div>`+
      `<div class="dv-narra">`+
        `<span class="dv-titulo"><span class="dv-year">${d.anio}</span>${loc(d.apellido)} · ${d.autor}</span>`+
        `<span class="dv-criterio">${(loc(d.criterio)||'').split('. ')[0]}.</span>`+
      `</div>`+
      `<div class="dv-fila" style="align-items:flex-start">`+
        `<div style="flex:1 1 420px"><b class="dv-rotulo">${t('cambios')}</b>`+
          `<div class="dv-cinta" style="margin-top:.3rem">${cinta}</div></div>`+
        (D.indice ? `<div style="flex:1 1 260px"><b class="dv-rotulo">${t('indice')}</b>`+
          `<div class="dv-indice" style="margin-top:.3rem">${lista}</div></div>` : ``)+
      `</div>`;
  }

  /* ---------------- acciones ---------------- */
  function ir(i, {parar=false}={}){
    D.i = (i + DEFS.length) % DEFS.length;
    if(parar) detener();
    const api = API();
    if(api) api.activar(DEFS[D.i].id, {abrirFicha:false, anunciar:false});
    else location.hash = '#caribe='+DEFS[D.i].id;
    pintarBarra();
    const d=DEFS[D.i];
    vivo.textContent = `${d.anio}. ${loc(d.apellido)}, ${d.autor}. `+
      (cambiosEntre(D.i).slice(0,6).map(c=>`${NOMBRE(c.k)}: ${c.a} a ${c.b}`).join('; ') || t('nada'));
    marcarHash();
  }
  function avanzar(){ ir(D.i+1); if(D.i===0) detener(); }
  function tocar(){
    if(menosMovimiento()){ ir(D.i+1); return; }   /* sin animación automática */
    D.tocando=true; clearInterval(D.temp);
    D.temp = setInterval(avanzar, D.ritmo);
    pintarBarra();
  }
  function detener(){ D.tocando=false; clearInterval(D.temp); D.temp=null; pintarBarra(); }
  function enfocar(k){
    D.foco = (D.foco===k) ? null : k;
    if(D.foco) D.indice = true;
    if(D.foco){
      detener();
      const i = PERFIL[k].findIndex((e,idx)=> idx>D.i && e!==PERFIL[k][idx-1]);
      if(i>0) ir(i, {parar:true});
      vivo.textContent = CAMBIOS[k]===0 ? t('quieto').replace('{n}', NOMBRE(k))
        : `${NOMBRE(k)}: ${CAMBIOS[k]} cambios de estado en veinte definiciones.`;
    }
    pintarBarra();
  }
  function abrir(){
    D.abierta=true; barra.hidden=false; btn.setAttribute('aria-pressed','true');
    if(!barra.dataset.lista){ barra.dataset.lista='1'; }
    ir(D.i);
  }
  function cerrar(){
    D.abierta=false; detener(); barra.hidden=true; btn.setAttribute('aria-pressed','false');
    const api=API(); if(api) api.quitar();
    try{ history.replaceState(null,'',location.pathname+location.search); }catch(e){}
  }
  function marcarHash(){
    if(!D.abierta) return;
    try{ history.replaceState(null,'', location.pathname+location.search+'#deriva@'+DEFS[D.i].id); }catch(e){}
  }

  btn.addEventListener('click', ()=> barra.hidden ? abrir() : cerrar());

  barra.addEventListener('click', ev=>{
    const tick = ev.target.closest('.dv-tick'); if(tick){ ir(+tick.dataset.i, {parar:true}); return; }
    const lug  = ev.target.closest('.dv-lugar'); if(lug){ enfocar(lug.dataset.k); return; }
    const b = ev.target.closest('[data-acc]'); if(!b) return;
    const acc = b.dataset.acc;
    if(acc==='ant')  ir(D.i-1, {parar:true});
    if(acc==='sig')  ir(D.i+1, {parar:true});
    if(acc==='play') D.tocando ? detener() : tocar();
    if(acc==='pared'){ pintarPared(); pared.hidden=false; const c=pared.querySelector('[data-cerrar]'); if(c) c.focus(); }
    if(acc==='solo'){ D.soloParpadeo=!D.soloParpadeo; D.foco=null; pintarBarra(); }
    if(acc==='indice'){ D.indice=!D.indice; pintarBarra(); }
  });
  barra.addEventListener('change', ev=>{
    const s=ev.target.closest('[data-acc="ritmo"]'); if(!s) return;
    D.ritmo=+s.value; if(D.tocando) tocar();
  });

  document.addEventListener('keydown', ev=>{
    if(barra.hidden) return;
    const dst = ev.target;
    if(dst && typeof dst.closest==='function' && dst.closest('input,select,textarea')) return;
    if(ev.key==='ArrowLeft'){ ir(D.i-1,{parar:true}); ev.preventDefault(); }
    if(ev.key==='ArrowRight'){ ir(D.i+1,{parar:true}); ev.preventDefault(); }
    if(ev.key===' '){ D.tocando? detener() : tocar(); ev.preventDefault(); }
    if(ev.key==='Escape'){ if(!pared.hidden){ pared.hidden=true; } else cerrar(); }
  });

  function leerHash(){
    const m=decodeURIComponent(location.hash||'').match(/^#deriva(?:@([a-z0-9-]+))?$/);
    if(!m) return false;
    const i = m[1] ? DEFS.findIndex(d=>d.id===m[1]) : 0;
    D.i = i<0 ? 0 : i;
    const u=document.getElementById('umbral'); if(u) u.classList.add('gone');
    abrir();
    return true;
  }
  window.addEventListener('hashchange', leerHash);
  leerHash();

  /* para las pruebas */
  window.DV_ESTADO = { D, DEFS, PERFIL, CAMBIOS, POR_PARPADEO, INESTABLES, cambiosEntre, miniatura };
})();
