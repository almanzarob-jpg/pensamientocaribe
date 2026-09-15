/* ==========================================================================
   ¿Qué Caribe? · capa de definiciones sobre el mapa de «Con el agua de por medio»

   Gaztambide (2006, p. 21) pide que cada vez que se hable de la región se la
   «apellide». Esta capa hace eso sobre el mapa: cada definición enciende lo que
   incluye, deja en penumbra lo que no nombra, marca en rojo lo que se disputa y
   tacha lo que excluye. Nada se infiere: cada estado sale del texto citado, con
   página, y vive en data/agua-de-por-medio/capa-caribes.js (generado por
   generar-capa-caribes.py).

   Se engancha al atlas sin tocar su código: envuelve render, refreshHi,
   renderChips, ajustarEtiquetas y applyLang, que son declaraciones globales del
   script principal, y se registra en PANELES_LATERALES. Debe cargarse después
   del script principal. La forma de cada definición no es un adorno: un área se
   ilumina, los fragmentos de Brathwaite se encienden sueltos sobre la trama,
   la frontera abierta de Trouillot se dibuja como parecidos entre pares y el
   meta-archipiélago de Benítez Rojo se sale del marco.
   ========================================================================== */
(function(){
  if(typeof window.CARIBES==='undefined' || typeof render!=='function') return;
  const C = window.CARIBES;
  const DEFS = C.definiciones;
  const DEF_POR_ID = Object.fromEntries(DEFS.map(d=>[d.id,d]));
  const ORDEN = DEFS.map(d=>d.id);
  const ESTADOS = ['dentro','margen','disputa','fuera'];

  /* ---------------- idioma propio, sin tocar el I18N del atlas ---------------- */
  const QI = {
    es:{
      btn:'¿Qué Caribe?', btnTitle:'Abrir las definiciones del Caribe',
      tit:'¿Qué Caribe?',
      intro:'No hay un Caribe sino muchos, y cada uno dibuja otro mapa. Elige una definición: se enciende lo que incluye, queda en penumbra lo que no nombra, se marca en rojo lo que se disputa y se tacha lo que excluye.',
      epi:'«cada vez que hablemos de la región, debemos de apellidarla»', epiRef:'Gaztambide 2006, p. 21',
      gazGrupo:'Gaztambide 1996 · cuatro tendencias',
      volver:'Todas las definiciones', anterior:'Definición anterior', siguiente:'Definición siguiente',
      cerrar:'Cerrar', quitar:'Quitar la capa',
      ejemplar:'leída en el ejemplar', referida:'referida · sin ejemplar',
      familia:'Tendencia según', sinFamilia:'Fuera de la tipología de Gaztambide',
      criterio:'Criterio', citas:'En el texto', dibuja:'Qué dibuja en el mapa',
      e_dentro:'Dentro', e_margen:'Al margen', e_disputa:'En disputa', e_fuera:'Fuera', e_nada:'No se pronuncia',
      d_dentro:'el texto lo incluye', d_margen:'como contexto, litoral o «tal vez»', d_disputa:'dos textos se contradicen', d_fuera:'el texto lo excluye', d_nada:'el texto no lo nombra',
      fuera_mapa:'Fuera del atlas', mundo:'Sin borde', canon:'Canon anglófono', trazos:'Parecidos de familia',
      disputas:'Con quién discute', rel_toma:'toma de', rel_retoma:'la retoma', rel_discute:'discute con',
      corpus:'En el corpus del atlas', abrirObra:'Abrir la ficha de la obra',
      contrastar:'Contrastar con', sinContraste:'— ninguna —',
      soloA:'Solo en', soloB:'Solo en', ambas:'En las dos', ninguna:'En ninguna',
      fuentes:'Fuentes', copiar:'Copiar enlace', copiado:'Enlace copiado',
      chip:'Caribe', barraAbrir:'Ficha', verMapa:'Ir al mapa', soloCorriente:'La capa se lee en la vista Corriente.',
      encallada:'La isla encallada',
      anuncio:'{def}. {d} lugares dentro, {m} al margen, {x} en disputa, {f} fuera, {n} sin pronunciamiento.',
      anuncioC:'Contraste entre {a} y {b}. {sa} solo en la primera, {ab} en las dos, {sb} solo en la segunda.',
      submarina:'The unity is submarine: los fragmentos se encienden sueltos y la trama los une por debajo.',
      sinCentro:'Sin borde ni centro: el Caribe se sale de su propio mar.',
      relaciones:'Frontera abierta: la región se compara, no se delimita.',
      trama:'La unidad es el fenómeno: entra todo lo que una corriente atraviesa.',
      rutas:'Territorio acuoso: el mar es lugar, y las líneas son conexiones marineras, no fronteras.', rutasLeyenda:'Conexiones desde la costa neogranadina',
      contrasteLeyenda:'Contraste',
      lista:'Definiciones, de la más antigua a la más reciente'
    },
    en:{
      btn:'Which Caribbean?', btnTitle:'Open the definitions of the Caribbean',
      tit:'Which Caribbean?',
      intro:'There is no single Caribbean but many, and each one draws a different map. Choose a definition: what it includes lights up, what it does not name stays in shadow, what is disputed turns red and what it excludes is struck out.',
      epi:'“whenever we speak of the region, we must give it a surname”', epiRef:'Gaztambide 2006, p. 21',
      gazGrupo:'Gaztambide 1996 · four tendencies',
      volver:'All definitions', anterior:'Previous definition', siguiente:'Next definition',
      cerrar:'Close', quitar:'Remove the layer',
      ejemplar:'read in the copy', referida:'second-hand · no copy held',
      familia:'Tendency according to', sinFamilia:'Outside Gaztambide\'s typology',
      criterio:'Criterion', citas:'In the text', dibuja:'What it draws on the map',
      e_dentro:'Inside', e_margen:'At the margin', e_disputa:'Disputed', e_fuera:'Outside', e_nada:'Not addressed',
      d_dentro:'the text includes it', d_margen:'as context, littoral or “perhaps”', d_disputa:'two texts contradict each other', d_fuera:'the text excludes it', d_nada:'the text does not name it',
      fuera_mapa:'Beyond the atlas', mundo:'No boundary', canon:'Anglophone canon', trazos:'Family resemblances',
      disputas:'Who it argues with', rel_toma:'borrows from', rel_retoma:'taken up by', rel_discute:'argues with',
      corpus:'In the atlas corpus', abrirObra:'Open the work',
      contrastar:'Contrast with', sinContraste:'— none —',
      soloA:'Only in', soloB:'Only in', ambas:'In both', ninguna:'In neither',
      fuentes:'Sources', copiar:'Copy link', copiado:'Link copied',
      chip:'Caribbean', barraAbrir:'Details', verMapa:'Go to the map', soloCorriente:'The layer is read in the Current view.',
      encallada:'The stranded island',
      anuncio:'{def}. {d} places inside, {m} at the margin, {x} disputed, {f} outside, {n} not addressed.',
      anuncioC:'Contrast between {a} and {b}. {sa} only in the first, {ab} in both, {sb} only in the second.',
      submarina:'The unity is submarine: the fragments light up one by one and the web joins them underneath.',
      sinCentro:'Neither boundary nor centre: the Caribbean overflows its own sea.',
      relaciones:'Open frontier: the region is compared, not bounded.',
      trama:'The unit is the phenomenon: whatever a current crosses comes in.',
      rutas:'Aqueous territory: the sea is a place, and the lines are sailors\' connections, not borders.', rutasLeyenda:'Connections from the New Granada coast',
      contrasteLeyenda:'Contrast',
      lista:'Definitions, from the oldest to the most recent'
    }
  };
  const qt = k => (QI[LANG] && QI[LANG][k]!==undefined) ? QI[LANG][k] : (QI.es[k]||'');
  const loc = o => o ? (o[LANG]||o.es||'') : '';
  const esc = s => String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const nombreLugar = k => L[k] ? L[k][2] : (C.extras[k] ? (LANG==='en'?C.extras[k][3]:C.extras[k][2]).replace(/\s*[↑↘→]$/,'') : k);
  const etiquetaDef = d => `${d.grupo==='gaztambide' ? 'Gaztambide' : d.autor.split(' (')[0].split(',')[0]} ${d.anio}`;
  const tituloDef = d => loc(d.apellido);

  /* ---------------- estado de la capa ---------------- */
  const QC = { def:null, contra:null, vista:'lista' };
  window.QC_ESTADO = QC; /* para las pruebas */

  function estadoDe(d, k){ const v=d && d.lugares[k]; return v && v.e ? v.e : null; }
  function notaDe(d, k){ const v=d && (d.lugares[k] || (d.extras||{})[k]); return v && v.n ? loc(v.n) : ''; }
  const incluye = e => e==='dentro' || e==='margen' || e==='disputa';
  function cuentas(d){
    const c={dentro:0,margen:0,disputa:0,fuera:0,nada:0};
    Object.keys(L).forEach(k=>{ const e=estadoDe(d,k); c[e||'nada']++; });
    return c;
  }
  function contraste(a,b){
    const out={soloA:[],soloB:[],ambas:[],ninguna:[]};
    Object.keys(L).forEach(k=>{
      const ia=incluye(estadoDe(a,k)), ib=incluye(estadoDe(b,k));
      (ia&&ib?out.ambas:ia?out.soloA:ib?out.soloB:out.ninguna).push(k);
    });
    return out;
  }

  /* ---------------- marcado: botón del encabezado, panel, barra, anuncios ---------------- */
  const controls=document.querySelector('header .controls');
  const grpRec=document.getElementById('recorridosBtn') ? document.getElementById('recorridosBtn').closest('.grp') : null;
  const grp=document.createElement('div'); grp.className='grp familia';
  grp.innerHTML='<div class="seg base"><button id="caribesBtn" type="button" aria-expanded="false" aria-controls="panelCaribes"></button></div>';
  if(grpRec && grpRec.nextSibling) controls.insertBefore(grp, grpRec.nextSibling); else if(controls) controls.appendChild(grp);
  const btn=document.getElementById('caribesBtn');

  const main=document.getElementById('main-content');
  const panel=document.createElement('aside');
  panel.id='panelCaribes'; panel.className='panelLateral qc-panel'; panel.hidden=true;
  main.appendChild(panel);

  const barra=document.createElement('div');
  barra.id='qcBarra'; barra.hidden=true;
  main.appendChild(barra);

  const anuncio=document.createElement('div');
  anuncio.className='visually-hidden'; anuncio.setAttribute('role','status'); anuncio.setAttribute('aria-live','polite');
  main.appendChild(anuncio);

  if(typeof PANELES_LATERALES!=='undefined') PANELES_LATERALES.push(['panelCaribes','caribesBtn']);
  btn.addEventListener('click',()=>{ if(panel.hidden) abrirPanelLateral('panelCaribes','caribesBtn'); else cerrarPanelLateral('panelCaribes','caribesBtn'); });
  panel.addEventListener('keydown', ev=>{ if(ev.key==='Escape'){ ev.stopPropagation(); cerrarPanelLateral('panelCaribes','caribesBtn'); } });

  /* ---------------- acciones ---------------- */
  function activar(id, {abrirFicha=true, anunciar=true}={}){
    const d=DEF_POR_ID[id]; if(!d) return;
    QC.def=id;
    if(QC.contra===id) QC.contra=null;
    QC.vista='ficha';
    if(state.view!=='corriente' && typeof setView==='function') setView('corriente');
    else { if(state.active||state.focusFen) clearFocus(); render(); }
    pintarPanel(); pintarBarra(); renderChips(); marcarHash();
    if(abrirFicha && panel.hidden) abrirPanelLateral('panelCaribes','caribesBtn');
    if(anunciar) anunciar_();
  }
  function quitar(){
    QC.def=null; QC.contra=null; QC.vista='lista';
    if(state.view==='corriente') render(); else refreshHi();
    pintarPanel(); pintarBarra(); renderChips(); marcarHash();
    anuncio.textContent='';
  }
  function contrastarCon(id){
    QC.contra = id && id!==QC.def ? id : null;
    if(state.view==='corriente') render();
    pintarPanel(); pintarBarra(); marcarHash(); anunciar_();
  }
  function paso(delta){
    const i=QC.def ? ORDEN.indexOf(QC.def) : (delta>0?-1:0);
    const j=(i+delta+ORDEN.length)%ORDEN.length;
    activar(ORDEN[j], {abrirFicha:false});
  }
  function anunciar_(){
    const d=DEF_POR_ID[QC.def]; if(!d) return;
    if(QC.contra){
      const b=DEF_POR_ID[QC.contra], c=contraste(d,b);
      anuncio.textContent=qt('anuncioC').replace('{a}',tituloDef(d)).replace('{b}',tituloDef(b))
        .replace('{sa}',c.soloA.length).replace('{ab}',c.ambas.length).replace('{sb}',c.soloB.length);
      return;
    }
    const c=cuentas(d);
    anuncio.textContent=qt('anuncio').replace('{def}',`${tituloDef(d)}, ${etiquetaDef(d)}`)
      .replace('{d}',c.dentro).replace('{m}',c.margen).replace('{x}',c.disputa).replace('{f}',c.fuera).replace('{n}',c.nada);
  }
  function marcarHash(){
    try{
      const base=location.pathname+location.search;
      history.replaceState(null,'', QC.def ? base+'#caribe='+QC.def+(QC.contra?'+'+QC.contra:'') : base);
    }catch(e){}
  }

  /* ---------------- panel ---------------- */
  function pintarPanel(){
    btn.textContent=qt('btn'); btn.title=qt('btnTitle');
    btn.classList.toggle('activo', !!QC.def);
    panel.setAttribute('aria-label', qt('tit'));
    const d = QC.def ? DEF_POR_ID[QC.def] : null;
    const cerrarHtml=`<button type="button" class="panelCerrar" data-qc="cerrar" aria-label="${esc(qt('cerrar'))}" title="${esc(qt('cerrar'))}">×</button>`;
    /* al cambiar de definición o de vista, la ficha empieza arriba: si no, al elegir una
       definición del final de la lista se abría a media altura, con el título fuera de vista */
    const clave=(d&&QC.vista==='ficha')?d.id+'|'+(QC.contra||''):'lista';
    const mismaPantalla = panel._qcClave===clave;
    const scrollPrevio = panel.scrollTop;
    if(!d || QC.vista==='lista'){ panel.innerHTML = cerrarHtml + htmlLista(); }
    else { panel.innerHTML = cerrarHtml + htmlFicha(d); }
    panel.scrollTop = mismaPantalla ? scrollPrevio : 0;
    panel._qcClave=clave;
    cablearPanel();
  }
  function htmlLista(){
    let h=`<h2>${esc(qt('tit'))}</h2><p class="qc-intro">${esc(qt('intro'))}</p>`;
    h+=`<p class="qc-epi">${esc(qt('epi'))} <span>${esc(qt('epiRef'))}</span></p>`;
    h+=`<ol class="qc-lista" aria-label="${esc(qt('lista'))}">`;
    let gazAbierto=false;
    DEFS.forEach(d=>{
      if(d.grupo==='gaztambide'){
        if(!gazAbierto){
          gazAbierto=true;
          const grupo=DEFS.filter(x=>x.grupo==='gaztambide');
          h+=`<li class="qc-gaz"><span class="qc-anio">${d.anio}</span><div class="qc-gaz-cuerpo"><span class="qc-autor">${esc(qt('gazGrupo'))}</span><div class="qc-gaz-bts">`+
             grupo.map(g=>`<button type="button" data-def="${g.id}" aria-pressed="${QC.def===g.id}">${esc(loc(C.familias[g.familia.clave]))}</button>`).join('')+
             `</div></div></li>`;
        }
        return;
      }
      h+=`<li><button type="button" class="qc-item${QC.def===d.id?' on':''}" data-def="${d.id}" aria-pressed="${QC.def===d.id}">`+
         `<span class="qc-anio">${d.anio}</span><span class="qc-txt"><span class="qc-ap">${esc(tituloDef(d))}</span>`+
         `<span class="qc-autor">${esc(d.autor)}${d.lectura==='referida'?' · <i>'+esc(qt('referida'))+'</i>':''}</span></span></button></li>`;
    });
    h+='</ol>';
    return h;
  }
  function chipEstado(e, n){
    return `<span class="qc-sw qc-sw-${e}" aria-hidden="true"></span><span class="qc-en">${esc(qt('e_'+e))}</span>${n!=null?`<span class="qc-n">${n}</span>`:''}`;
  }
  function htmlFicha(d){
    const i=ORDEN.indexOf(d.id);
    const prev=DEF_POR_ID[ORDEN[(i-1+ORDEN.length)%ORDEN.length]], next=DEF_POR_ID[ORDEN[(i+1)%ORDEN.length]];
    let h=`<nav class="qc-nav"><button type="button" data-qc="lista" class="qc-volver">← ${esc(qt('volver'))}</button>`+
          `<span class="qc-pasos"><button type="button" data-qc="prev" aria-label="${esc(qt('anterior'))}: ${esc(tituloDef(prev))}" title="${esc(tituloDef(prev))}">‹</button>`+
          `<span class="qc-pos">${i+1}/${ORDEN.length}</span>`+
          `<button type="button" data-qc="next" aria-label="${esc(qt('siguiente'))}: ${esc(tituloDef(next))}" title="${esc(tituloDef(next))}">›</button></span></nav>`;
    h+=`<div class="qc-kind">${d.anio} · ${esc(d.lectura==='referida'?qt('referida'):qt('ejemplar'))}</div>`;
    h+=`<h2 class="qc-h">${esc(tituloDef(d))}</h2>`;
    h+=`<div class="qc-meta">${esc(d.autor)}, <i>${esc(d.obra)}</i></div>`;
    h+= d.familia
      ? `<div class="qc-fam">${esc(qt('familia'))} ${esc(d.familia.fuente.split(',')[0])}: <b>${esc(loc(C.familias[d.familia.clave]))}</b> <span>${esc(d.familia.fuente.split(', ').slice(1).join(', '))}</span></div>`
      : `<div class="qc-fam qc-fam-no">${esc(qt('sinFamilia'))}</div>`;
    h+=`<p class="qc-criterio">${esc(loc(d.criterio))}</p>`;
    if(d.aviso) h+=`<p class="qc-aviso">${esc(loc(d.aviso))}</p>`;
    h+=`<h3>${esc(qt('citas'))}</h3>`;
    h+=d.citas.map(c=>`<blockquote class="qc-cita"><p>${esc(c.txt)}</p><footer>${esc(C.fuentes[c.ref].corto)}, ${/^\d/.test(c.pag)?'p. ':''}${esc(c.pag)}${c.nota?' · '+esc(loc(c.nota)):''}</footer></blockquote>`).join('');

    /* contraste */
    const otras=DEFS.filter(x=>x.id!==d.id);
    h+=`<div class="qc-contra"><label for="qcContra">${esc(qt('contrastar'))}</label><select id="qcContra"><option value="">${esc(qt('sinContraste'))}</option>`+
       otras.map(o=>`<option value="${o.id}"${QC.contra===o.id?' selected':''}>${esc(etiquetaDef(o))} · ${esc(tituloDef(o))}</option>`).join('')+`</select></div>`;

    if(QC.contra){
      const b=DEF_POR_ID[QC.contra], c=contraste(d,b);
      const fila=(clase, rot, arr)=>`<details class="qc-grupo"${arr.length&&clase!=='ninguna'?' open':''}><summary><span class="qc-sw qc-sw-c-${clase}" aria-hidden="true"></span><span class="qc-en">${rot}</span><span class="qc-n">${arr.length}</span></summary>`+
        (arr.length?`<ul>${arr.map(k=>`<li>${esc(nombreLugar(k))}</li>`).join('')}</ul>`:'')+`</details>`;
      h+=`<h3>${esc(qt('contrasteLeyenda'))}</h3>`;
      h+=fila('a', `${esc(qt('soloA'))} ${esc(tituloDef(d))}`, c.soloA);
      h+=fila('ab', esc(qt('ambas')), c.ambas);
      h+=fila('b', `${esc(qt('soloB'))} ${esc(tituloDef(b))}`, c.soloB);
      h+=fila('ninguna', esc(qt('ninguna')), c.ninguna);
    } else {
      const c=cuentas(d);
      h+=`<h3>${esc(qt('dibuja'))}</h3>`;
      if(d.forma==='fragmentos') h+=`<p class="qc-forma">${esc(qt('submarina'))}</p>`;
      if(d.forma==='sin_centro') h+=`<p class="qc-forma">${esc(qt('sinCentro'))}</p>`;
      if(d.forma==='relaciones') h+=`<p class="qc-forma">${esc(qt('relaciones'))}</p>`;
      if(d.forma==='trama') h+=`<p class="qc-forma">${esc(qt('trama'))}</p>`;
      if(d.forma==='rutas') h+=`<p class="qc-forma">${esc(qt('rutas'))}</p>`;
      ['dentro','margen','disputa','fuera','nada'].forEach(e=>{
        const ks=Object.keys(L).filter(k=>(estadoDe(d,k)||'nada')===e);
        if(!ks.length) return;
        const abierto = (e==='disputa'||e==='fuera') || (e==='margen' && ks.length<=6) || (e==='nada' && ks.some(k=>notaDe(d,k)));
        /* los lugares que comparten nota van juntos: la nota se lee una vez */
        const porNota=[]; ks.forEach(k=>{ const n=notaDe(d,k); const g=porNota.find(x=>x.n===n); if(g) g.ks.push(k); else porNota.push({n, ks:[k]}); });
        porNota.sort((a,b)=>(a.n?1:0)-(b.n?1:0));
        h+=`<details class="qc-grupo"${abierto?' open':''}><summary>${chipEstado(e,ks.length)}<span class="qc-desc">${esc(qt('d_'+e))}</span></summary><ul>`+
           porNota.map(g=>`<li>${g.ks.map(nombreLugar).map(esc).join(', ')}${g.n?`<span class="qc-nota">${esc(g.n)}</span>`:''}</li>`).join('')+`</ul></details>`;
      });
      const ex=Object.entries(d.extras||{});
      if(ex.length || d.mundo){
        h+=`<details class="qc-grupo"><summary><span class="qc-sw qc-sw-extra" aria-hidden="true"></span><span class="qc-en">${esc(qt('fuera_mapa'))}</span><span class="qc-n">${ex.length}</span></summary><ul>`+
           ex.map(([k,v])=>`<li>${esc(nombreLugar(k))} <span class="qc-estado-mini qc-t-${v.e}">${esc(qt('e_'+v.e))}</span>${v.n?`<span class="qc-nota">${esc(loc(v.n))}</span>`:''}</li>`).join('')+
           (d.mundo?`<li><i>${esc(qt('mundo'))}:</i> ${esc(loc(d.mundo))}</li>`:'')+`</ul></details>`;
      }
      if(d.trazos){ const ru=d.forma==='rutas';
        h+=`<p class="qc-forma qc-leyenda-trazos"><span class="qc-sw ${ru?'qc-sw-ruta':'qc-sw-trazo'}" aria-hidden="true"></span>${esc(qt(ru?'rutasLeyenda':'trazos'))}: `+
           d.trazos.map(([a,b])=>`${esc(nombreLugar(a))} ${ru?'↔':'≈'} ${esc(nombreLugar(b))}`).join(' · ')+`</p>`; }
      if(d.canon) h+=`<p class="qc-forma"><span class="qc-sw qc-sw-canon" aria-hidden="true"></span>${esc(qt('canon'))}: ${d.canon.map(nombreLugar).map(esc).join(', ')}</p>`;
    }

    /* disputas */
    const disp=C.disputas.filter(x=>x.a===d.id||x.b===d.id);
    if(disp.length){
      h+=`<h3>${esc(qt('disputas'))}</h3><ul class="qc-disputas">`+disp.map(x=>{
        const otro=DEF_POR_ID[x.a===d.id?x.b:x.a];
        const rot = x.tipo==='disonancia' ? qt('rel_discute') : (x.a===d.id ? qt('rel_toma') : qt('rel_retoma'));
        return `<li class="qc-d-${x.tipo}"><button type="button" data-def="${otro.id}"><span class="qc-dtipo">${esc(rot)}</span> ${esc(etiquetaDef(otro))} · ${esc(tituloDef(otro))}</button><span class="qc-dtxt">${esc(x[LANG]||x.es)}</span></li>`;
      }).join('')+`</ul>`;
    }
    /* corpus */
    const obras=(d.corpus||[]).map(id=>byId(id)).filter(Boolean);
    if(obras.length){
      h+=`<h3>${esc(qt('corpus'))}</h3>`;
      if(d.corpus_nota) h+=`<p class="qc-forma">${esc(loc(d.corpus_nota))}</p>`;
      h+=`<ul class="qc-obras">`+obras.map(o=>`<li><button type="button" data-obra="${o.id}" title="${esc(qt('abrirObra'))}"><span class="qc-ot">${esc(o.t)}</span><span class="qc-oa">${esc(o.a)} · ${esc(o.y)}</span></button></li>`).join('')+`</ul>`;
    }
    /* fuentes */
    const refs=[...new Set(d.citas.map(c=>c.ref))];
    h+=`<details class="qc-fuentes"><summary>${esc(qt('fuentes'))}</summary><ul>${refs.map(r=>`<li>${esc(C.fuentes[r].ref)}</li>`).join('')}</ul></details>`;
    h+=`<div class="qc-pie"><button type="button" data-qc="copiar">${esc(qt('copiar'))}</button><button type="button" data-qc="quitar">${esc(qt('quitar'))}</button></div>`;
    return h;
  }
  function cablearPanel(){
    panel.querySelectorAll('[data-def]').forEach(b=>b.addEventListener('click',()=>activar(b.dataset.def,{abrirFicha:false})));
    panel.querySelectorAll('[data-obra]').forEach(b=>b.addEventListener('click',()=>{
      cerrarPanelLateral('panelCaribes','caribesBtn');
      document.getElementById('umbral').classList.add('gone');
      openPanel(b.dataset.obra);
    }));
    const on=(sel,fn)=>{ const b=panel.querySelector(sel); if(b) b.addEventListener('click',fn); };
    on('[data-qc="cerrar"]',()=>cerrarPanelLateral('panelCaribes','caribesBtn'));
    on('[data-qc="lista"]',()=>{ QC.vista='lista'; pintarPanel(); const p=panel.querySelector('.qc-item.on, .qc-gaz-bts [aria-pressed="true"], .qc-item'); if(p) p.focus(); });
    on('[data-qc="prev"]',()=>{ paso(-1); const b=panel.querySelector('[data-qc="prev"]'); if(b) b.focus(); });
    on('[data-qc="next"]',()=>{ paso(1); const b=panel.querySelector('[data-qc="next"]'); if(b) b.focus(); });
    on('[data-qc="quitar"]',()=>{ quitar(); const p=panel.querySelector('.qc-item'); if(p) p.focus(); });
    on('[data-qc="copiar"]',ev=>{
      const b=ev.currentTarget;
      try{ navigator.clipboard.writeText(location.href); }catch(e){}
      const antes=b.textContent; b.textContent=qt('copiado'); setTimeout(()=>{ b.textContent=antes; },1400);
    });
    const sel=panel.querySelector('#qcContra');
    if(sel) sel.addEventListener('change',()=>{ contrastarCon(sel.value); const s=panel.querySelector('#qcContra'); if(s) s.focus(); });
  }

  /* ---------------- barra compacta sobre el mapa ---------------- */
  function pintarBarra(){
    const d=QC.def?DEF_POR_ID[QC.def]:null;
    if(!d){ barra.hidden=true; barra.innerHTML=''; return; }
    barra.hidden=false;
    const b=QC.contra?DEF_POR_ID[QC.contra]:null;
    const fuera=state.view!=='corriente';
    barra.innerHTML=`<span class="qc-b-t">${esc(qt('tit'))}</span>`+
      `<button type="button" class="qc-b-paso" data-b="prev" aria-label="${esc(qt('anterior'))}">‹</button>`+
      `<span class="qc-b-def"><b>${esc(tituloDef(d))}</b> ${esc(etiquetaDef(d))}${b?` <span class="qc-b-vs">↔</span> <b class="qc-b-b">${esc(tituloDef(b))}</b> ${esc(etiquetaDef(b))}`:''}</span>`+
      `<button type="button" class="qc-b-paso" data-b="next" aria-label="${esc(qt('siguiente'))}">›</button>`+
      (fuera?`<button type="button" class="qc-b-acc" data-b="mapa">${esc(qt('verMapa'))}</button>`:
             `<button type="button" class="qc-b-acc" data-b="ficha" aria-controls="panelCaribes">${esc(qt('barraAbrir'))}</button>`)+
      `<button type="button" class="qc-b-x" data-b="quitar" aria-label="${esc(qt('quitar'))}" title="${esc(qt('quitar'))}">×</button>`;
    barra.querySelector('[data-b="prev"]').onclick=()=>paso(-1);
    barra.querySelector('[data-b="next"]').onclick=()=>paso(1);
    barra.querySelector('[data-b="quitar"]').onclick=quitar;
    const f=barra.querySelector('[data-b="ficha"]'); if(f) f.onclick=()=>{ QC.vista='ficha'; pintarPanel(); abrirPanelLateral('panelCaribes','caribesBtn'); };
    const m=barra.querySelector('[data-b="mapa"]'); if(m) m.onclick=()=>setView('corriente');
  }

  /* ---------------- dibujo sobre el mapa ---------------- */
  const NSV='http://www.w3.org/2000/svg';
  const mk=(n,at={})=>{ const e=document.createElementNS(NSV,n); for(const k in at) e.setAttribute(k,at[k]); return e; };
  let capaG=null, capaTxt=null;

  function geometriaLugares(){
    const g={};
    Object.entries(L).forEach(([k,v])=>{
      const nodos=N.filter(n=>n.l===k && visible(n));
      const cuenta=nodos.length;
      g[k]={x:px(v[1]), y:py(v[0]), r:cuenta>1 ? 10.5*Math.sqrt(cuenta-0.5)+8 : 9, n:cuenta};
    });
    return g;
  }
  function agrupar(pts, umbral=40){
    const grupos=[];
    pts.forEach(p=>{
      const g=grupos.find(gr=>gr.some(q=>Math.hypot(q.x-p.x,q.y-p.y)<umbral));
      if(g) g.push(p); else grupos.push([p]);
    });
    return grupos.map(gr=>{
      const x=gr.reduce((s,p)=>s+p.x,0)/gr.length, y=gr.reduce((s,p)=>s+p.y,0)/gr.length;
      const r=Math.max(...gr.map(p=>Math.hypot(p.x-x,p.y-y)+p.r));
      return {x,y,r};
    });
  }
  function centroDe(k, G){ if(G[k]) return G[k]; const e=C.extras[k]; return e ? {x:px(e[1]), y:py(e[0]), r:5, extra:true} : null; }

  function dibujarCapa(){
    capaG=null; capaTxt=null;
    svg.classList.remove('qc-activa','qc-submarina','qc-trama','qc-contraste');
    if(!QC.def || state.view!=='corriente' || !vp) return;
    const d=DEF_POR_ID[QC.def]; if(!d) return;
    const b=QC.contra?DEF_POR_ID[QC.contra]:null;
    const G=geometriaLugares();

    let defs=svg.querySelector('defs');
    if(!defs){ defs=mk('defs'); svg.insertBefore(defs, svg.firstChild); }
    if(!defs.querySelector('#qcBruma')){
      const f=mk('filter',{id:'qcBruma', x:'-50%', y:'-50%', width:'200%', height:'200%'});
      f.appendChild(mk('feGaussianBlur',{stdDeviation:'11'}));
      defs.appendChild(f);
      const f2=mk('filter',{id:'qcBrumaSuave', x:'-50%', y:'-50%', width:'200%', height:'200%'});
      f2.appendChild(mk('feGaussianBlur',{stdDeviation:'5'}));
      defs.appendChild(f2);
    }

    capaG=mk('g',{class:'qc-capa', 'aria-hidden':'true'});
    const brumaG=mk('g',{class:'qc-bruma', filter:'url(#qcBruma)'});
    const trazosG=mk('g',{class:'qc-trazos'});
    const marcasG=mk('g',{class:'qc-marcas'});
    capaG.append(brumaG, trazosG, marcasG);
    capaTxt=mk('g',{class:'qc-textos', 'aria-hidden':'true'});

    svg.classList.add('qc-activa');

    if(b){
      /* contraste: solo estados, con la misma bruma para las dos lecturas */
      svg.classList.add('qc-contraste');
      const c=contraste(d,b);
      const pinta=(arr, clase, op)=>arr.forEach(k=>{ const p=G[k]; if(!p) return; brumaG.appendChild(mk('circle',{cx:p.x, cy:p.y, r:p.r+16, class:'qc-luz '+clase, opacity:op})); });
      pinta(c.soloA,'qc-c-a',.34); pinta(c.soloB,'qc-c-b',.40); pinta(c.ambas,'qc-c-ab',.22);
      Object.keys(L).forEach(k=>{ const p=G[k]; if(!p) return;
        if(estadoDe(d,k)==='disputa'||estadoDe(b,k)==='disputa') marcasG.appendChild(mk('circle',{cx:p.x, cy:p.y, r:p.r+3, class:'qc-anillo qc-disputa'})); });
    } else {
      const forma=d.forma;
      if(forma==='fragmentos') svg.classList.add('qc-submarina');
      if(forma==='trama') svg.classList.add('qc-trama');
      const anillos={margen:[], disputa:[]};
      Object.keys(L).forEach(k=>{
        const p=G[k]; if(!p || !p.n) return;
        const e=estadoDe(d,k);
        if(forma==='fragmentos'){
          if(e==='dentro') marcasG.appendChild(mk('circle',{cx:p.x, cy:p.y, r:p.r+4, class:'qc-anillo qc-fragmento'}));
          return;
        }
        if(forma==='trama') return;
        if(e==='dentro') brumaG.appendChild(mk('circle',{cx:p.x, cy:p.y, r:p.r+(forma==='relaciones'?6:16), class:'qc-luz', opacity:forma==='relaciones'?.16:.30}));
        else if(e==='margen'){ brumaG.appendChild(mk('circle',{cx:p.x, cy:p.y, r:p.r+12, class:'qc-luz qc-luz-margen', opacity:.11})); anillos.margen.push(p); }
        else if(e==='disputa'){ brumaG.appendChild(mk('circle',{cx:p.x, cy:p.y, r:p.r+12, class:'qc-luz qc-luz-roja', opacity:.18})); anillos.disputa.push(p); }
        else if(e==='fuera'){ const s=Math.min(7,Math.max(4,p.r*.38)); marcasG.appendChild(mk('path',{d:`M ${p.x-s},${p.y-s} L ${p.x+s},${p.y+s} M ${p.x+s},${p.y-s} L ${p.x-s},${p.y+s}`, class:'qc-tacha'})); }
      });
      /* lugares vecinos con el mismo estado comparten un solo anillo: en la costa
         colombiana Cartagena, Palenque y Barranquilla casi se tocan, y cinco anillos
         encimados se leían como ruido, no como una disputa */
      Object.entries(anillos).forEach(([estado, pts])=>agrupar(pts).forEach(gp=>{
        marcasG.appendChild(mk('circle',{cx:gp.x, cy:gp.y, r:gp.r+4, class:'qc-anillo qc-'+estado}));
      }));
      /* la isla encallada: el contorno del Caribe colombiano como una sola orilla */
      if(d.encallada){
        const pts=d.encallada.map(k=>G[k]).filter(Boolean);
        if(pts.length){
          const xs=pts.map(p=>p.x), ys=pts.map(p=>p.y), rs=pts.map(p=>p.r);
          const x0=Math.min(...xs.map((x,i)=>x-rs[i]))-10, x1=Math.max(...xs.map((x,i)=>x+rs[i]))+10;
          const y0=Math.min(...ys.map((y,i)=>y-rs[i]))-10, y1=Math.max(...ys.map((y,i)=>y+rs[i]))+10;
          marcasG.appendChild(mk('rect',{x:x0, y:y0, width:x1-x0, height:y1-y0, rx:(y1-y0)/2, class:'qc-encallada'}));
          const t=mk('text',{x:(x0+x1)/2, y:y1+16, class:'qc-rotulo qc-rotulo-encallada', 'text-anchor':'middle'}); t.textContent=qt('encallada'); capaTxt.appendChild(t);
        }
      }
      /* parecidos de familia de Trouillot y rutas marineras de Bassi */
      (d.trazos||[]).forEach(([a,bb])=>{
        const pa=centroDe(a,G), pb=centroDe(bb,G); if(!pa||!pb) return;
        const dx=pb.x-pa.x, dy=pb.y-pa.y, len=Math.hypot(dx,dy)||1;
        const mx=(pa.x+pb.x)/2 + dy/len*Math.min(38,len*.28), my=(pa.y+pb.y)/2 - dx/len*Math.min(38,len*.28);
        trazosG.appendChild(mk('path',{d:`M ${pa.x},${pa.y} Q ${mx},${my} ${pb.x},${pb.y}`, class:forma==='rutas'?'qc-ruta':'qc-trazo'}));
        if(forma==='rutas') return;
        const t=mk('text',{x:mx, y:my, class:'qc-rotulo qc-rotulo-trazo', 'text-anchor':'middle', dy:'.35em'}); t.textContent='≈'; capaTxt.appendChild(t);
      });
      (d.canon||[]).forEach(k=>{ const p=G[k]; if(!p) return; marcasG.appendChild(mk('circle',{cx:p.x, cy:p.y, r:p.r+10, class:'qc-anillo qc-canon'})); });
      /* meta-archipiélago: corrientes que salen del marco */
      if(forma==='sin_centro'){
        const dentro=Object.keys(L).filter(k=>estadoDe(d,k)==='dentro' && G[k] && G[k].n);
        const cx=dentro.reduce((s,k)=>s+G[k].x,0)/dentro.length, cy=dentro.reduce((s,k)=>s+G[k].y,0)/dentro.length;
        const angs=[-165,-120,-70,-25,20,65,120,160];
        angs.forEach((a,i)=>{
          const r=a*Math.PI/180, L0=120, L1=760;
          const x0=cx+Math.cos(r)*L0, y0=cy+Math.sin(r)*L0*.62, x1=cx+Math.cos(r)*L1, y1=cy+Math.sin(r)*L1*.62;
          const qx=(x0+x1)/2 + Math.sin(r)*60*(i%2?1:-1), qy=(y0+y1)/2 - Math.cos(r)*60*(i%2?1:-1);
          trazosG.appendChild(mk('path',{d:`M ${x0.toFixed(1)},${y0.toFixed(1)} Q ${qx.toFixed(1)},${qy.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}`, class:'qc-fuga'}));
        });
      }
    }

    /* lugares que el atlas no tiene como nodo */
    const extras = b ? {} : (d.extras||{});
    Object.entries(extras).forEach(([k,v])=>{
      const e=C.extras[k]; if(!e) return;
      const x=px(e[1]), y=py(e[0]);
      if(v.e==='dentro' && d.forma!=='relaciones' && d.forma!=='fragmentos') brumaG.appendChild(mk('circle',{cx:x, cy:y, r:14, class:'qc-luz', opacity:.26}));
      marcasG.appendChild(mk('path',{d:`M ${x},${y-4.2} L ${x+4.2},${y} L ${x},${y+4.2} L ${x-4.2},${y} Z`, class:'qc-extra qc-t-'+v.e}));
      const t=mk('text',{x:x+8, y:y+3.4, class:'qc-rotulo qc-rotulo-extra qc-t-'+v.e}); t.textContent=(v.e==='fuera'?'× ':'')+(LANG==='en'?e[3]:e[2]); capaTxt.appendChild(t);
    });

    vp.insertBefore(capaG, egGroup || vp.firstChild);
    vp.appendChild(capaTxt);
    ajustarTextosCapa();
  }

  function ajustarTextosCapa(){
    if(!capaTxt) return;
    const k=Math.max(vpt.k,0.0001);
    capaTxt.querySelectorAll('.qc-rotulo').forEach(t=>{ t.style.fontSize=((t.classList.contains('qc-rotulo-trazo')?15:9.5)/k).toFixed(2)+'px'; });
  }

  function aplicarEstados(){
    if(!QC.def || state.view!=='corriente' || !vp) return;
    /* la capa cede ante cualquier foco del atlas: obra, fenómeno, búsqueda o recorrido */
    const hayFoco = state.active || state.focusFen || state.recorrido || (typeof QTERMS!=='undefined' && QTERMS.length);
    const d=DEF_POR_ID[QC.def], b=QC.contra?DEF_POR_ID[QC.contra]:null;
    const opE = e => ({dentro:1, margen:.62, disputa:.85, fuera:.1}[e] ?? .24);
    if(!hayFoco){
      VNODES.forEach(n=>{
        let op;
        if(d.forma==='trama') op=1;
        else if(b){ const ia=incluye(estadoDe(d,n.l)), ib=incluye(estadoDe(b,n.l)); op=(ia||ib)?1:.14; }
        else op=opE(estadoDe(d,n.l));
        n._c.style.opacity=op;
        n._g.classList.toggle('apagado', op<.2);
      });
    }
    vp.querySelectorAll('.placelbl').forEach(t=>{
      const k=t._place;
      t.classList.remove('qc-l-dentro','qc-l-margen','qc-l-disputa','qc-l-fuera','qc-l-nada');
      if(hayFoco) return;
      let e;
      if(d.forma==='trama') e='dentro';
      else if(b){ const ia=incluye(estadoDe(d,k)), ib=incluye(estadoDe(b,k)); e=(ia||ib)?'dentro':'nada'; }
      else e=estadoDe(d,k)||'nada';
      t.classList.add('qc-l-'+e);
      t.style.opacity='';
    });
  }

  /* ---------------- enganches al atlas ---------------- */
  const _render=render;
  render=function(){ _render(); dibujarCapa(); aplicarEstados(); pintarBarra(); };
  const _refreshHi=refreshHi;
  refreshHi=function(){ _refreshHi(); aplicarEstados(); };
  const _renderChips=renderChips;
  renderChips=function(){
    _renderChips();
    if(!QC.def) return;
    const box=document.getElementById('chipsActivos'); if(!box) return;
    const d=DEF_POR_ID[QC.def];
    const txt=`${qt('chip')}: ${tituloDef(d)} (${etiquetaDef(d)})`;
    const b=document.createElement('button'); b.type='button'; b.className='chip qc-chip';
    b.setAttribute('aria-label', (typeof t==='function' && t('chipQuitarAria')) ? t('chipQuitarAria').replace('{label}',txt) : txt);
    b.innerHTML=`${esc(txt)} <span aria-hidden="true">×</span>`;
    b.onclick=quitar;
    box.appendChild(b);
    if(typeof FILTROS_ACTIVOS!=='undefined') FILTROS_ACTIVOS.push({txt, reset:quitar});
    const lg=document.getElementById('limpiarGrp'); if(lg) lg.hidden=false;
  };
  const _ajustar=ajustarEtiquetas;
  ajustarEtiquetas=function(){ _ajustar(); ajustarTextosCapa(); };
  const _applyLang=applyLang;
  applyLang=function(){ _applyLang(); pintarPanel(); pintarBarra(); renderChips(); };
  const _switchView=switchView;
  switchView=function(v){ _switchView(v); pintarBarra(); };

  /* enlace profundo: #caribe=mintz o #caribe=mintz+abello */
  function leerHash(){
    const m=decodeURIComponent(location.hash||'').match(/^#caribe=([a-z0-9-]+)(?:\+([a-z0-9-]+))?$/);
    if(!m || !DEF_POR_ID[m[1]]) return false;
    document.getElementById('umbral').classList.add('gone');
    QC.contra = (m[2] && DEF_POR_ID[m[2]]) ? m[2] : null;
    activar(m[1], {abrirFicha:true});
    return true;
  }
  window.addEventListener('hashchange', leerHash);

  pintarPanel();
  leerHash();
})();
