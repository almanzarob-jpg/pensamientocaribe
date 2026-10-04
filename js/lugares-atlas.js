/* =====================================================================
   PUNTO POR LUGAR · «el archipiélago se lee antes que el arrecife»
   ---------------------------------------------------------------------
   En la vista Corriente cada obra se dibuja en espiral alrededor de su
   lugar. Con 401 entradas las espirales de Jamaica (71), Haití (50) o
   Trinidad (37) se funden en una sola mancha: el mapa deja de decir
   dónde, y en un teléfono hasta 41 obras caen bajo el mismo dedo.

   Aquí el mapa tiene dos escalas de lectura, como cualquier carta náutica:
   - De lejos, cada lugar es un punto de agua: un disco cuyo tamaño dice
     cuántas obras sostiene, con su cifra, y una onda que se abre despacio.
     La trama se agrupa en rutas entre orillas: un solo hilo por par de
     lugares y estatuto, más grueso cuantas más relaciones lleva.
   - Al acercar, cada lugar se abre en su espiral de obras. La apertura va
     de oeste a este, como la marea de las transiciones entre vistas.

   El umbral no es un número de zoom, es una distancia en pantalla: las
   obras se abren cuando la separación entre vecinas de la espiral alcanza
   12,5 px (y se cierran por debajo de 10,5, para que no parpadee). Por eso
   el mismo atlas se abre antes en un monitor grande que en un teléfono.

   Con una ficha abierta, el lugar de esa obra se abre siempre; las demás
   orillas quedan como discos y marcan cuántas de sus obras están en juego.
   Lo mismo con la búsqueda, los fenómenos y los recorridos.

   No reescribe el motor: envuelve computeBase, render, buildTrama,
   refreshHi, place y applyVP. Se carga después del script principal y
   antes de las capas y de las transiciones, que lo envuelven a él.
   ===================================================================== */
(function(){
  if(typeof computeBase!=='function' || typeof render!=='function' || typeof L==='undefined') return;

  const ABRE=12.5, CIERRA=10.5;          /* px entre obras vecinas de una espiral */
  const PASO=10.5;                       /* el mismo radio base de computeBase */
  const svgEl=document.getElementById('stage');
  const reducido=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css=getComputedStyle(document.documentElement);
  const msVar=(n,d)=>{ const v=css.getPropertyValue(n).trim(); if(!v) return d; return v.endsWith('ms')?parseFloat(v):parseFloat(v)*1000; };
  const DUR=msVar('--mov-lento',720), OLA=260;
  const en=()=> (typeof LANG!=='undefined' && LANG==='en');

  const LG={ modo:'lugares', f:{}, meta:{}, geo:{}, discos:{}, capa:null, anim:0, activo:null };
  window.LUGARES_ATLAS=LG;

  const corriente=()=> state.view==='corriente';
  function ppu(){ const m=vp && vp.getScreenCTM && vp.getScreenCTM(); return m && m.a ? m.a : 0; }
  function separacion(){ return PASO*ppu(); }
  function lugarDe(n){ return n.l; }

  /* ---------- geometría: centro de cada lugar y desplazamiento de cada obra ---------- */
  function registrar(){
    LG.geo={};
    N.forEach(n=>{
      const g=L[n.l]; if(!g || n._bx==null) return;
      const cx=px(g[1]), cy=py(g[0]);
      n._ox=n._bx-cx; n._oy=n._by-cy;
      const G=LG.geo[n.l]||(LG.geo[n.l]={cx,cy,obras:[]});
      G.obras.push(n);
    });
  }
  function multiples(k){ const G=LG.geo[k]; return G && G.obras.filter(visible).length>1; }
  function aplicarF(){
    Object.entries(LG.geo).forEach(([k,G])=>{
      const f = LG.f[k]==null ? 1 : LG.f[k];
      G.obras.forEach(n=>{ n._bx=G.cx+f*n._ox; n._by=G.cy+f*n._oy; });
    });
  }
  function metas(){
    const act = state.active ? (byId(state.active)||{}).l : null;
    const m={};
    Object.keys(LG.geo).forEach(k=>{ m[k] = (LG.modo==='obras' || k===act || !multiples(k)) ? 1 : 0; });
    return m;
  }

  /* ---------- computeBase: las obras nacen ya en el estado que toca ---------- */
  const _computeBase=computeBase;
  computeBase=function(){
    _computeBase.apply(this,arguments);
    if(!corriente()) return;
    registrar();
    LG.meta=metas(); LG.f=Object.assign({},LG.meta);
    aplicarF();
  };

  /* ---------- la trama de lejos: rutas entre orillas ---------- */
  const _buildTrama=buildTrama;
  buildTrama=function(){
    _buildTrama.apply(this,arguments);
    if(!corriente() || !tramaGroup || LG.modo!=='lugares') return;
    const grupos={corr:tramaGroup.querySelector('.hilos.corr'), pend:tramaGroup.querySelector('.hilos.pend'), diso:tramaGroup.querySelector('.hilos.diso')};
    if(!grupos.corr) return;
    Object.values(grupos).forEach(g=>g.innerHTML='');
    const rutas=new Map();
    R.forEach(([a,b])=>{
      const na=byId(a), nb=byId(b);
      if(!na||!nb||!visible(na)||!visible(nb)||na.l===nb.l) return;
      const tipo = isDiso(a,b)?'diso':esCorr(a,b)?'corr':'pend';
      const [la,lb] = na.l<nb.l ? [na.l,nb.l] : [nb.l,na.l];
      const clave=la+'|'+lb+'|'+tipo;
      rutas.set(clave,(rutas.get(clave)||0)+1);
    });
    rutas.forEach((c,clave)=>{
      const [la,lb,tipo]=clave.split('|'); const A=LG.geo[la], B=LG.geo[lb]; if(!A||!B) return;
      const ax=A.cx, ay=A.cy, bx=B.cx, by=B.cy, dx=bx-ax, dy=by-ay, len=Math.hypot(dx,dy); if(len<1) return;
      /* misma curvatura que la trama de cerca; los tres estatutos se separan un poco
         para que una ruta con corroboradas y disonancias no se lea como un solo trazo */
      const sep = tipo==='corr'?0 : tipo==='pend'?7 : -7;
      const cv = Math.min(26,len*0.13)+sep;
      const mx=(ax+bx)/2 - dy/len*cv, my=(ay+by)/2 + dx/len*cv;
      const p=el('path',{class:'hilo ruta', d:`M ${ax.toFixed(1)},${ay.toFixed(1)} Q ${mx.toFixed(1)},${my.toFixed(1)} ${bx.toFixed(1)},${by.toFixed(1)}`});
      p.style.strokeWidth=Math.min(4.2, 0.7+0.42*(Math.sqrt(c)-1)).toFixed(2);
      p._n=c; grupos[tipo].appendChild(p);
    });
  };

  /* ---------- los discos ---------- */
  function radio(n){ return 4+2*Math.sqrt(n); }
  function construirDiscos(){
    if(LG.capa) LG.capa.remove();
    if(LG.cifras) LG.cifras.remove();
    LG.capa=null; LG.cifras=null; LG.discos={};
    if(!corriente() || !vp) return;
    const capa=el('g',{class:'lugares'}), cifras=el('g',{class:'lugares-cifras'});
    const lista=Object.entries(LG.geo).map(([k,G])=>({k,G,vis:G.obras.filter(visible)})).filter(o=>o.vis.length>1)
      .sort((a,b)=>b.vis.length-a.vis.length);   /* los pequeños encima: no quedan tapados */
    lista.forEach(({k,G,vis},i)=>{
      const n=vis.length, r=radio(n);
      const g=el('g',{class:'lugar', role:'button', tabindex:'-1'});
      g._k=k; g._r=r; g._n=n; g._rep=vis[0];
      const onda=el('circle',{class:'lg-onda', r:r});
      onda.style.animationDelay=(-((G.cx*37+G.cy*11)%6200)/1000).toFixed(2)+'s';
      const toque=el('circle',{class:'lg-toque', r:r});
      const agua=el('circle',{class:'lg-agua', r:r});
      const nivel=el('circle',{class:'lg-nivel', r:Math.max(1.5,r-2.4), transform:'rotate(-90)'});
      /* la cifra va en una capa propia, encima de todos los discos: donde dos orillas
         se tocan (Cartagena y Barranquilla) ninguna tapa el número de la otra */
      const cifra=el('text',{class:'lg-n', 'text-anchor':'middle', 'dominant-baseline':'central'});
      cifra.textContent=n;
      const cg=el('g',{class:'lugar-cifra'}); cg.appendChild(cifra); cifras.appendChild(cg); g._cg=cg;
      [onda,toque,agua,nivel].forEach(x=>g.appendChild(x));
      g._onda=onda; g._toque=toque; g._agua=agua; g._nivel=nivel; g._cifra=cifra;
      g.addEventListener('keydown',ev=>{
        const dir={ArrowRight:'der',ArrowLeft:'izq',ArrowDown:'abajo',ArrowUp:'arriba'}[ev.key];
        if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); ev.stopPropagation(); irALugar(k); }
        else if(dir){ ev.preventDefault(); ev.stopPropagation(); const c=centroDisco(g); navegar(dir,c[0],c[1],g); }
        else if(ev.key==='Home'||ev.key==='End'){ ev.preventDefault(); ev.stopPropagation(); extremo(ev.key==='End'); }
      });
      g.addEventListener('focus',()=>{ if(svgEl) paradaEnDisco(g); cg.classList.add('ver'); });
      g.addEventListener('blur',()=>cg.classList.remove('ver'));
      /* en reposo la cifra no se ve: aparece al pasar por el disco o al enfocarlo */
      g.addEventListener('mouseenter',()=>cg.classList.add('ver'));
      g.addEventListener('mouseleave',()=>cg.classList.remove('ver'));
      capa.appendChild(g); LG.discos[k]=g;
    });
    /* debajo de los topónimos (que deben leerse) y de las obras de los lugares abiertos */
    const eti=vp.querySelector('text.placelbl'), primero=vp.querySelector('.node');
    const antesDe = eti ? eti.parentNode : primero;
    if(antesDe && antesDe.parentNode===vp){ vp.insertBefore(capa, antesDe); vp.insertBefore(cifras, antesDe); }
    else { vp.appendChild(capa); vp.appendChild(cifras); }
    LG.capa=capa; LG.cifras=cifras;
    rotular(); escalar(); pintarF(); nivelar();
  }
  function nombre(k){ return (L[k] && L[k][2]) || k; }
  function rotular(){
    Object.values(LG.discos).forEach(g=>{
      const txt = en() ? `${nombre(g._k)}: ${g._n} entries. Zoom in to open them.` : `${nombre(g._k)}: ${g._n} entradas. Acercar para abrirlas.`;
      g.setAttribute('aria-label', txt);
      let t=g.querySelector('title'); if(!t){ t=el('title'); g.insertBefore(t,g.firstChild); }
      t.textContent = en() ? `${nombre(g._k)} · ${g._n} entries` : `${nombre(g._k)} · ${g._n} entradas`;
    });
  }
  /* la cifra conserva su tamaño en pantalla, como los topónimos; el área de toque nunca
     baja de 44 px de diámetro en pantalla */
  function escalar(){
    const p=ppu(); if(!p) return;
    const cuerpo=9.5/p, minToque=22/p;
    Object.values(LG.discos).forEach(g=>{
      g._cifra.style.fontSize=cuerpo.toFixed(2)+'px';
      g._cifra.style.display = (g._r*p >= 7.5) ? '' : 'none';
      g._toque.setAttribute('r', Math.max(g._r, minToque).toFixed(1));
    });
  }
  /* cuánto está abierto cada lugar: el disco se recoge mientras la espiral se abre */
  function pintarF(){
    Object.entries(LG.geo).forEach(([k,G])=>{
      const f=LG.f[k]==null?1:LG.f[k], multi=!!LG.discos[k];
      G.obras.forEach(n=>{
        if(!n._g) return;
        const viaje=svgEl.classList.contains('en-transito');
        n._recogida = multi && f<=0;
        if(!multi || viaje){ n._g.style.opacity=''; n._g.style.visibility=''; n._g.style.pointerEvents=''; return; }
        n._g.style.opacity = f>=1 ? '' : (f*f).toFixed(3);
        /* visibility y no display: la obra recogida sigue teniendo sitio (su disco), y desde
           ahí sale cuando se cambia de vista; pero no se ve, no se toca y no toma el foco */
        n._g.style.visibility = n._recogida ? 'hidden' : '';
        n._g.style.pointerEvents = f<0.6 ? 'none' : '';
      });
      const d=LG.discos[k]; if(!d) return;
      const v=1-f;
      d.style.opacity = d._cg.style.opacity = v>=1 ? '' : (v*v).toFixed(3);
      d.style.display = d._cg.style.display = v<=0 ? 'none' : '';
      d._agua.setAttribute('r',(d._r*(0.55+0.45*v)).toFixed(2));
      d.classList.toggle('abriendo', v<1);
    });
    reubicarEtiquetas();
    asegurarParada();
  }
  /* el disco sigue el vaivén de sus obras: toma la posición de una de ellas */
  function moverDiscos(){
    Object.values(LG.discos).forEach(d=>{
      const n=d._rep, f=LG.f[d._k]==null?1:LG.f[d._k];
      if(n._x==null) return;
      const x=n._x-f*n._ox, y=n._y-f*n._oy;
      if(d._px!=null && Math.abs(d._px-x)<0.15 && Math.abs(d._py-y)<0.15) return;
      d._px=x; d._py=y; const tr=`translate(${x.toFixed(1)},${y.toFixed(1)})`;
      d.setAttribute('transform',tr); d._cg.setAttribute('transform',tr);
    });
  }
  /* con algo en juego, cada disco dice cuántas de sus obras lo están */
  function nivelar(){
    const foco = !!(state.active || (typeof QTERMS!=='undefined' && QTERMS.length) || state.focusFen || state.recorrido);
    const colorFoco = state.focusFen && typeof col==='function' ? col(state.focusFen) : null;
    Object.values(LG.discos).forEach(d=>{
      const vis=LG.geo[d._k].obras.filter(n=>n._c && visible(n));
      const encendidas = foco ? vis.filter(n=>parseFloat(n._c.style.opacity||'1')>=.5).length : vis.length;
      d.classList.toggle('foco', foco);
      d.classList.toggle('tocado', foco && encendidas>0);
      d.classList.toggle('fuera', foco && encendidas===0);
      d._cg.classList.toggle('tocado', foco && encendidas>0); d._cg.classList.toggle('fuera', foco && encendidas===0);
      const rr=parseFloat(d._nivel.getAttribute('r')), C=2*Math.PI*rr;
      d._nivel.style.strokeDasharray = foco ? `${(C*encendidas/Math.max(1,vis.length)).toFixed(2)} ${C.toFixed(2)}` : '';
      d._nivel.style.stroke = colorFoco || '';
      d._cifra.textContent = foco && encendidas ? encendidas : vis.length;
      d._cifra.classList.toggle('parcial', foco && encendidas>0 && encendidas<vis.length);
    });
  }
  /* los topónimos se apartan del disco para no quedar dentro */
  function reubicarEtiquetas(){
    if(!vp) return;
    vp.querySelectorAll('text.placelbl').forEach(t=>{
      const k=t._place, d=LG.discos[k], G=LG.geo[k]; if(!G) return;
      if(t._x0==null) t._x0=parseFloat(t.getAttribute('x'));
      const f=LG.f[k]==null?1:LG.f[k];
      const x = d ? G.cx + (d._r+4)*(1-f) + (t._x0-G.cx)*f : t._x0;
      const nx=x.toFixed(1); if(t.getAttribute('x')!==nx) t.setAttribute('x',nx);
    });
  }

  /* ---------- teclado: de lejos se recorren orillas, no obras escondidas ----------
     El atlas tiene una sola parada de tabulador en el mapa (el «foco itinerante») y las
     flechas siguen la geografía. Con los lugares recogidos, la parada y las flechas
     saltan entre lo que se ve: los discos y las obras sueltas de los lugares con una
     sola entrada. Intro sobre un disco lo abre y lleva el foco a su primera obra. */
  function centroDisco(d){ const b=d._agua.getBoundingClientRect(); return [b.left+b.width/2, b.top+b.height/2]; }
  function puntosVisibles(){
    const out=[];
    VNODES.forEach(n=>{ if(n._c && !n._recogida && visible(n) && n._g.style.visibility!=='hidden'){ const b=n._c.getBoundingClientRect(); out.push({n, x:b.left+b.width/2, y:b.top+b.height/2}); } });
    Object.values(LG.discos).forEach(d=>{ if(d.style.display!=='none'){ const [x,y]=centroDisco(d); out.push({d,x,y}); } });
    return out;
  }
  function paradaEnDisco(d){
    Object.values(LG.discos).forEach(x=>x.setAttribute('tabindex', x===d?'0':'-1'));
    const r=rovingId && byId(rovingId); if(d && r && r._g) r._g.setAttribute('tabindex','-1');
  }
  function asegurarParada(){
    const r=rovingId && byId(rovingId), act=document.activeElement;
    if(act && act._k && LG.discos[act._k]===act && act.style.display!=='none'){ paradaEnDisco(act); return; }
    /* si el disco que tenía el foco se abrió (por zoom), el foco pasa a una de sus obras */
    if(act && act._k && LG.discos[act._k]===act){
      const G=LG.geo[act._k], n=G && G.obras.find(o=>o._g && o._g.isConnected && visible(o) && !o._recogida);
      if(n){ Object.values(LG.discos).forEach(x=>x.setAttribute('tabindex','-1')); setRoving(n,{mover:true}); return; }
    }
    if(r && r._recogida && LG.discos[r.l] && LG.discos[r.l].style.display!=='none'){ paradaEnDisco(LG.discos[r.l]); return; }
    Object.values(LG.discos).forEach(x=>x.setAttribute('tabindex','-1'));
    if(r && r._g) r._g.setAttribute('tabindex','0');
  }
  function enfocar(p){
    if(p.n){ Object.values(LG.discos).forEach(x=>x.setAttribute('tabindex','-1')); setRoving(p.n,{mover:true}); if(typeof asegurarVisible==='function') asegurarVisible(p.n); return; }
    paradaEnDisco(p.d); p.d.focus({preventScroll:true});
    const A=areaLibreMapa(), [x,y]=centroDisco(p.d);
    const dx = x<A.l ? A.l-x+30 : x>A.r ? A.r-x-30 : 0, dy = y<A.t ? A.t-y+30 : y>A.b ? A.b-y-30 : 0;
    if(dx||dy){ zcMotor.panear(dx,dy); if(zc) zc.sincronizar(); }
  }
  function navegar(dir, x0, y0, desde){
    let mejor=null, pMejor=Infinity;
    puntosVisibles().forEach(p=>{
      if((p.d && p.d===desde) || (p.n && desde && p.n===desde)) return;
      const dx=p.x-x0, dy=p.y-y0;
      const [adelante,lado] = dir==='der'?[dx,dy] : dir==='izq'?[-dx,dy] : dir==='abajo'?[dy,dx] : [-dy,dx];
      if(adelante<=0.5) return;
      const s=adelante+2*Math.abs(lado);
      if(s<pMejor){ pMejor=s; mejor=p; }
    });
    if(mejor) enfocar(mejor);
  }
  function extremo(fin){
    const pts=puntosVisibles().sort((a,b)=>a.x-b.x);
    if(pts.length) enfocar(fin?pts[pts.length-1]:pts[0]);
  }
  const hayRecogidas=()=> corriente() && LG.capa && Object.values(LG.discos).some(d=>d.style.display!=='none');
  if(typeof moverEspacial==='function'){
    const _me=moverEspacial;
    moverEspacial=function(dir){
      if(!hayRecogidas()) return _me.apply(this,arguments);
      const a=rovingId && byId(rovingId);
      if(!a || !a._c){ extremo(false); return; }
      const [x,y]=centroPantalla(a); navegar(dir,x,y,a);
    };
  }
  if(typeof irAExtremo==='function'){
    const _ie=irAExtremo;
    irAExtremo=function(fin){ if(!hayRecogidas()) return _ie.apply(this,arguments); extremo(fin); };
  }

  /* ---------- abrir y cerrar: la marea de oeste a este ---------- */
  function hacia(nuevas, inmediato){
    cancelAnimationFrame(LG.anim); LG.anim=0;
    const cambian=Object.keys(nuevas).filter(k=>(LG.f[k]==null?1:LG.f[k])!==nuevas[k]);
    LG.meta=nuevas;
    if(!cambian.length){ return; }
    if(inmediato || reducido()){
      Object.assign(LG.f,nuevas); aplicarF(); pintarF(); buildTrama(); place(_ultT());
      return;
    }
    const xs=cambian.map(k=>LG.geo[k].cx), x0=Math.min(...xs), x1=Math.max(...xs), rango=Math.max(1,x1-x0);
    const desde={}; cambian.forEach(k=>desde[k]=LG.f[k]==null?1:LG.f[k]);
    const abre = cambian.some(k=>nuevas[k]>desde[k]);
    svgEl.classList.add('lod-viaje');
    const t0=performance.now();
    const paso=now=>{
      let fin=true;
      cambian.forEach(k=>{
        const ret = OLA*((abre? LG.geo[k].cx-x0 : x1-LG.geo[k].cx)/rango);
        let u=Math.min(1,Math.max(0,(now-t0-ret)/DUR)); if(u<1) fin=false;
        const e=1-Math.pow(1-u,4);
        LG.f[k]=desde[k]+(nuevas[k]-desde[k])*e;
      });
      aplicarF(); pintarF();
      if(!state.tide) place(0);
      if(!fin){ LG.anim=requestAnimationFrame(paso); return; }
      LG.anim=0; Object.assign(LG.f,nuevas); aplicarF(); pintarF();
      buildTrama(); if(!state.tide) place(0);
      requestAnimationFrame(()=>svgEl.classList.remove('lod-viaje'));
    };
    LG.anim=requestAnimationFrame(paso);
  }
  let _t=0; const _ultT=()=>state.tide?_t:0;

  function evaluar(inmediato){
    if(!corriente() || !vp || svgEl.classList.contains('en-transito')) return;
    const s=separacion(); if(!s) return;
    const antes=LG.modo;
    if(LG.modo==='lugares' && s>=ABRE) LG.modo='obras';
    else if(LG.modo==='obras' && s<CIERRA) LG.modo='lugares';
    const act=state.active?(byId(state.active)||{}).l:null;
    if(LG.modo!==antes || act!==LG.activo){
      LG.activo=act;
      hacia(metas(), inmediato);
    }
  }

  /* ---------- acercarse a un lugar ---------- */
  function irALugar(k){
    const G=LG.geo[k], d=LG.discos[k]; if(!G||!d) return;
    const p=ppu(); if(!p) return;
    const base=p/vpt.k;
    const A=areaLibreMapa(); const ancho=A.r-A.l, alto=A.b-A.t;
    const nvis=G.obras.filter(visible).length;
    const Rsp=PASO*Math.sqrt(nvis)+14;
    let kObj=Math.max(vpt.k*1.15, (ABRE+3)/(PASO*base));
    const kCabe=Math.min(ancho,alto)*0.82/(2*Rsp*base);
    if(kCabe>kObj) kObj=Math.min(kCabe, kObj*1.6);
    kObj=Math.min(kObj, typeof ZMAX!=='undefined'?ZMAX:7);
    const b=d._agua.getBoundingClientRect(); const cx=b.left+b.width/2, cy=b.top+b.height/2;
    const origen={k:vpt.k,tx:vpt.tx,ty:vpt.ty};
    zcMotor.aplicar(kObj, cx, cy);
    zcMotor.panear((A.l+A.r)/2-cx, (A.t+A.b)/2-cy);
    const destino={k:vpt.k,tx:vpt.tx,ty:vpt.ty};
    vpt=origen; applyVP();
    animarVP(destino, reducido()?0:620);
    /* el foco del teclado pasa a la primera obra del lugar cuando se abre */
    setTimeout(()=>{ if(document.activeElement===d){ const n=G.obras.find(o=>o._g && visible(o)); if(n && n._g && !n._recogida){ if(typeof setRoving==='function') setRoving(n); n._g.focus({preventScroll:true}); } } }, reducido()?50:900);
  }
  LG.irALugar=irALugar;

  /* ---------- enganches ---------- */
  /* Al volver a Corriente desde otra vista, las obras viajan primero a su espiral (ahí
     se reconocen: cada una llega a su orilla) y, posadas, se recogen en su disco. */
  if(typeof switchView==='function'){
    const _sv=switchView;
    switchView=function(v){
      const desde=state.view;
      LG.llegando = (v==='corriente' && desde!=='corriente' && desde!=='tabla' && !reducido());
      try{ return _sv.apply(this,arguments); }
      finally{
        LG.llegando=false;
        if(LG.recogerTrasViaje) requestAnimationFrame(()=>{ if(!svgEl.classList.contains('en-transito') && LG.recogerTrasViaje){ LG.recogerTrasViaje=false; hacia(metas()); } });
      }
    };
  }

  const _render=render;
  render=function(){
    cancelAnimationFrame(LG.anim); LG.anim=0; svgEl.classList.remove('lod-viaje');
    const r=_render.apply(this,arguments);
    if(corriente()){
      /* el encuadre se fija al final de render: solo entonces se sabe cuánto mide una
         obra en pantalla y si el mapa se ve de lejos o de cerca */
      const s=separacion(), antes=LG.modo;
      if(s){ if(s>=ABRE) LG.modo='obras'; else if(s<CIERRA) LG.modo='lugares'; }
      LG.activo=state.active?(byId(state.active)||{}).l:null;
      LG.meta=metas(); LG.f=Object.assign({},LG.meta);
      if(LG.llegando && Object.values(LG.meta).some(v=>v<1)){ Object.keys(LG.f).forEach(k=>LG.f[k]=1); LG.recogerTrasViaje=true; }
      aplicarF();
      if(LG.modo!==antes) buildTrama();
      construirDiscos();
      place(_ultT());
      if(typeof ajustarEtiquetas==='function') ajustarEtiquetas();
    } else { LG.capa=null; LG.discos={}; }
    return r;
  };
  const _place=place;
  place=function(t){ _t=t||_t; _place.apply(this,arguments); if(corriente() && LG.capa) moverDiscos(); };
  const _apply=applyVP;
  let _kEsc=null;
  applyVP=function(){
    _apply.apply(this,arguments);
    if(!corriente() || !LG.capa) return;
    if(vpt.k!==_kEsc){ _kEsc=vpt.k; escalar(); evaluar(false); }
  };
  const _refreshHi=refreshHi;
  refreshHi=function(){
    _refreshHi.apply(this,arguments);
    if(!corriente() || !LG.capa) return;
    evaluar(false); nivelar();
  };
  if(typeof applyLang==='function'){ const _al=applyLang; applyLang=function(){ _al.apply(this,arguments); rotular(); }; }

  /* una obra recogida está donde está su disco: así el encuadre de una ficha cuenta
     a sus vecinas en su orilla. Pero el tacto de «varias obras bajo el dedo» no debe
     ofrecerlas: mientras se resuelve un toque, las recogidas no están en ningún sitio. */
  let resolviendoToque=false;
  if(typeof centroPantalla==='function'){
    const _cp=centroPantalla;
    centroPantalla=function(n){
      const d=LG.discos[n.l];
      if(corriente() && d && n._recogida){
        if(resolviendoToque) return [-1e6,-1e6];
        const b=d._agua.getBoundingClientRect(); return [b.left+b.width/2, b.top+b.height/2];
      }
      return _cp.apply(this,arguments);
    };
  }
  /* el toque sobre un disco es del disco */
  window.addEventListener('click',ev=>{
    const d=ev.target && ev.target.closest && ev.target.closest('#stage .lugar');
    if(!d){ resolviendoToque=true; setTimeout(()=>{ resolviendoToque=false; },0); return; }
    ev.stopPropagation(); ev.preventDefault(); irALugar(d._k);
  }, true);

  /* al terminar un viaje entre vistas, las obras de los lugares cerrados se recogen */
  let _enViaje=false;
  new MutationObserver(()=>{
    const v=svgEl.classList.contains('en-transito');
    if(v===_enViaje) return; _enViaje=v;
    if(!corriente() || !LG.capa) return;
    pintarF();
    if(!v && LG.recogerTrasViaje){ LG.recogerTrasViaje=false; setTimeout(()=>hacia(metas()), 120); }
  })
    .observe(svgEl,{attributes:true, attributeFilter:['class']});

  /* el script principal ya dibujó el mapa: se rehace una vez con las dos escalas */
  if(corriente()) render();
})();
