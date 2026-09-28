/* ══════════ TANDA 2 · 28-09-2026 · las tres capas bajo un solo botón ══════════
   ¿Qué Caribe?, Antirracismo y La deriva entraron al encabezado una a una, cada
   una con su botón. Sumadas partían la barra en dos filas entre 1200 y 1420 px
   de ancho, y una capa encendida no dejaba rastro cuando se cerraba su panel.
   Aquí los tres botones pasan, sin tocarse, a un menú «Capas»: conservan su id,
   sus oyentes y su panel. El menú dice cuáles están encendidas y permite
   apagarlas; el botón lleva el mismo punto dorado que Filtros y Recorridos cuando
   hay alguna activa. Se carga después de las tres capas. */
(function(){
  const controls=document.querySelector('header .controls');
  const ids=[['qc','caribesBtn'],['ar','antirracismoBtn'],['dv','derivaBtn']];
  const presentes=ids.filter(([,id])=>document.getElementById(id));
  if(!controls || !presentes.length) return;

  const T={
    es:{ capas:'Capas', titulo:'Capas de lectura', abrirT:'Abrir las capas de lectura del atlas',
         encendida:'Encendida', apagar:'Apagar', apagarAria:'Apagar la capa {c}',
         conActivas:'Capas ({n} encendida)', conActivasP:'Capas ({n} encendidas)',
         qc:'Las definiciones del Caribe, una a una, sobre el mapa.',
         ar:'Casos de antirracismo y reparaciones en los lugares del atlas.',
         dv:'Cómo cambia cada lugar de una definición a otra, de 1945 a 2026.' },
    en:{ capas:'Layers', titulo:'Reading layers', abrirT:'Open the atlas reading layers',
         encendida:'On', apagar:'Turn off', apagarAria:'Turn off the {c} layer',
         conActivas:'Layers ({n} on)', conActivasP:'Layers ({n} on)',
         qc:'The definitions of the Caribbean, one by one, on the map.',
         ar:'Cases of antiracism and reparations in the places of the atlas.',
         dv:'How each place shifts from one definition to the next, 1945 to 2026.' }
  };
  const lang=()=> (typeof LANG!=='undefined' && LANG==='en') ? 'en' : 'es';
  const ct=k=>T[lang()][k];

  /* botón */
  const grp=document.createElement('div'); grp.className='grp familia capas-grp';
  grp.innerHTML='<div class="seg base"><button id="capasBtn" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="capasMenu"></button></div>';
  const primero=document.getElementById(presentes[0][1]).closest('.grp');
  controls.insertBefore(grp, primero);
  const btn=document.getElementById('capasBtn');

  /* menú: los grupos originales se mudan dentro, con sus botones intactos */
  const menu=document.createElement('div');
  menu.id='capasMenu'; menu.className='capas-menu'; menu.hidden=true;
  menu.setAttribute('role','group'); menu.setAttribute('aria-labelledby','capasMenuTit');
  menu.innerHTML='<div class="capas-tit" id="capasMenuTit"></div>';
  presentes.forEach(([k,id])=>{
    const g=document.getElementById(id).closest('.grp');
    const it=document.createElement('div'); it.className='capa-it'; it.dataset.capa=k;
    it.appendChild(g);
    it.insertAdjacentHTML('beforeend','<p class="capa-d"></p><div class="capa-pie"><span class="capa-est"></span><button type="button" class="capa-off"></button></div>');
    menu.appendChild(it);
  });
  document.body.appendChild(menu);

  const activa={
    qc:()=> !!(window.QC_ESTADO && window.QC_ESTADO.def) && !activa.dv(),
    ar:()=> !!(window.AR_ESTADO && window.AR_ESTADO.activa),
    dv:()=> !!(window.DV_ESTADO && window.DV_ESTADO.D && window.DV_ESTADO.D.abierta)
  };
  const apagar={
    qc:()=>{ if(window.QC_API) window.QC_API.quitar(); },
    ar:()=>{ if(window.AR_API) window.AR_API.desactivar(); },
    dv:()=>{ const b=document.getElementById('derivaBtn'); if(b && activa.dv()) b.click(); }
  };

  function pintar(){
    const n=presentes.filter(([k])=>activa[k]()).length;
    btn.innerHTML=ct('capas');
    btn.title=ct('abrirT');
    btn.setAttribute('aria-label', n ? ct(n===1?'conActivas':'conActivasP').replace('{n}',n) : ct('abrirT'));
    btn.classList.toggle('activo', n>0);
    menu.querySelector('.capas-tit').textContent=ct('titulo');
    menu.querySelectorAll('.capa-it').forEach(it=>{
      const k=it.dataset.capa, on=activa[k]();
      const nombre=(it.querySelector('.grp button')||{}).textContent||'';
      it.classList.toggle('on',on);
      it.querySelector('.capa-d').textContent=ct(k);
      it.querySelector('.capa-est').textContent=on?ct('encendida'):'';
      const off=it.querySelector('.capa-off');
      off.hidden=!on; off.textContent=ct('apagar'); off.setAttribute('aria-label', ct('apagarAria').replace('{c}',nombre));
    });
  }
  window.CAPAS_PINTAR=pintar;

  function colocar(){
    const r=btn.getBoundingClientRect();
    const ancho=Math.min(320, window.innerWidth-16);
    menu.style.width=ancho+'px';
    menu.style.top=Math.round(r.bottom+6)+'px';
    menu.style.left=Math.round(Math.max(8, Math.min(r.left, window.innerWidth-ancho-8)))+'px';
  }
  function abrir(){ pintar(); menu.hidden=false; colocar(); btn.setAttribute('aria-expanded','true');
    const f=menu.querySelector('.grp button'); if(f) f.focus(); }
  function cerrar(foco){ if(menu.hidden) return; menu.hidden=true; btn.setAttribute('aria-expanded','false'); if(foco) btn.focus(); }

  btn.addEventListener('click',()=> menu.hidden ? abrir() : cerrar(false));
  menu.addEventListener('keydown',ev=>{ if(ev.key==='Escape'){ ev.stopPropagation(); cerrar(true); } });
  document.addEventListener('click',ev=>{ if(!menu.hidden && !menu.contains(ev.target) && !btn.contains(ev.target)) cerrar(false); });
  window.addEventListener('resize',()=>{ if(!menu.hidden) colocar(); });
  /* la franja del encabezado se desliza en teléfono: el menú sigue a su botón */
  controls.addEventListener('scroll',()=>{ if(!menu.hidden) colocar(); },{passive:true});

  /* elegir una capa: se cierra el menú y la capa hace lo suyo; su panel devuelve
     el foco al botón «Capas», que es el que se ve, y no al botón escondido */
  menu.querySelectorAll('.grp button').forEach(b=>{
    b.addEventListener('click',()=>{
      cerrar(false);
      setTimeout(()=>{ document.querySelectorAll('.panelLateral').forEach(p=>{ if(p._retornoFoco && menu.contains(p._retornoFoco)) p._retornoFoco=btn; }); pintar(); },0);
    });
  });
  menu.querySelectorAll('.capa-off').forEach(b=>{
    b.addEventListener('click',()=>{ const k=b.closest('.capa-it').dataset.capa; apagar[k](); setTimeout(()=>{ pintar(); btn.focus(); cerrar(false); },0); });
  });

  /* el estado cambia desde muchos sitios (paneles, chips, enlaces, teclado):
     se vigila lo que cada capa ya deja escrito en el DOM */
  const obs=new MutationObserver(()=>pintar());
  const st=document.getElementById('stage'); if(st) obs.observe(st,{attributes:true,attributeFilter:['class']});
  const dvb=document.getElementById('derivaBtn'); if(dvb) obs.observe(dvb,{attributes:true,attributeFilter:['aria-pressed']});
  const ch=document.getElementById('chipsActivos'); if(ch) obs.observe(ch,{childList:true});

  if(typeof applyLang==='function'){ const _al=applyLang; applyLang=function(){ _al.apply(this,arguments); pintar(); }; }
  pintar();
})();
