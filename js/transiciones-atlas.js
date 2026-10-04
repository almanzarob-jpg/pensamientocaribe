/* =====================================================================
   TRANSICIONES ENTRE VISTAS · «la obra no se pierde»
   ---------------------------------------------------------------------
   El atlas sostiene que una obra es a la vez un lugar (Corriente), una
   vecindad de pensamiento (Constelación) y un tiempo (Cronología). Hasta
   ahora, al cambiar de vista, el lienzo se borraba y cada obra reaparecía
   en otro sitio: cuatro mapas distintos. Aquí cada obra viaja desde donde
   estaba hasta donde le toca, y el viaje es el argumento.

   Cómo se hace, sin tocar el motor del atlas:
   1. Antes de cambiar de vista se anota dónde está cada obra EN PANTALLA.
   2. Se deja que el atlas (y las capas que lo envuelven) redibujen.
   3. Esa posición de pantalla se traduce al sistema de la vista nueva con
      getScreenCTM(), que ya incluye viewBox, encuadre y zoom; así da igual
      que cada vista tenga su propia geometría.
   4. Se interpola _bx/_by de cada obra entre origen y destino, y la marea
      entra con ella (_pm, peso de 0 a 1, leído por place()). place(),
      que ya corre en cada fotograma, hace el resto: nodos y corrientes
      siguen a la obra sin que haya que saber nada de ellas.
   5. Lo que es escenario —costa, ejes, rótulos, la trama— se apaga
      durante el viaje y vuelve cuando las obras se han posado.

   La ola va de oeste a este: cada obra sale con un retardo según dónde
   estaba, de modo que el cambio se lee como una marea que cruza el mapa
   y no como un salto.

   Se carga DESPUÉS de todas las capas para ser la envoltura exterior.
   Con «reducir movimiento» no hay viaje: el cambio es inmediato.
   ===================================================================== */
(function(){
  if(typeof switchView!=='function' || typeof render!=='function') return;

  const svgEl = document.getElementById('stage');
  const css = getComputedStyle(document.documentElement);
  const ms = (nombre, porDefecto)=>{
    const v = css.getPropertyValue(nombre).trim();
    if(!v) return porDefecto;
    return v.endsWith('ms') ? parseFloat(v) : parseFloat(v)*1000;
  };
  const sinMovimiento = ()=> window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* curva de vaivén: la misma cubic-bezier(.65,0,.35,1) del CSS, resuelta a mano */
  function bezier(x1,y1,x2,y2){
    const A=(a,b)=>1-3*b+3*a, B=(a,b)=>3*b-6*a, C=a=>3*a;
    const f=(t,a,b)=>((A(a,b)*t+B(a,b))*t+C(a))*t;
    const df=(t,a,b)=>3*A(a,b)*t*t+2*B(a,b)*t+C(a);
    return x=>{ if(x<=0) return 0; if(x>=1) return 1;
      let t=x; for(let i=0;i<6;i++){ const d=df(t,x1,x2); if(Math.abs(d)<1e-6) break; t-=(f(t,x1,x2)-x)/d; }
      return f(Math.min(1,Math.max(0,t)),y1,y2); };
  }
  const vaiven = bezier(.65,0,.35,1);

  let viaje = null;          /* {obras:[{n,fx,fy,tx,ty,retardo}], t0, dur} */
  let rafViaje = 0;

  function posicionesEnPantalla(){
    const m = new Map();
    if(state.view==='tabla') return m;
    VNODES.forEach(n=>{
      if(!n._c) return;
      const b = n._c.getBoundingClientRect();
      if(b.width||b.height) m.set(n.id, [b.left+b.width/2, b.top+b.height/2]);
    });
    return m;
  }

  function terminar(){
    cancelAnimationFrame(rafViaje); rafViaje=0;
    if(viaje){ viaje.obras.forEach(o=>{ o.n._bx=o.tx; o.n._by=o.ty; o.n._pm=null; }); viaje=null; }
    svgEl.classList.remove('en-transito');
    if(typeof ajustarEtiquetas==='function') ajustarEtiquetas();
  }

  function paso(ahora){
    if(!viaje) return;
    let vivos = 0;
    viaje.obras.forEach(o=>{
      let u = (ahora - viaje.t0 - o.retardo) / viaje.dur;
      if(u<1) vivos++;
      u = vaiven(Math.max(0,Math.min(1,u)));
      o.n._bx = o.fx + (o.tx-o.fx)*u;
      o.n._by = o.fy + (o.ty-o.fy)*u;
      o.n._pm = u;   /* la marea se suma a medida que la obra llega */
    });
    if(vivos) rafViaje = requestAnimationFrame(paso);
    else terminar();
  }

  /* lo que no es obra ni corriente es escenario: se marca para apagarlo en el viaje */
  function marcarEscenario(){
    if(!vp) return;
    [...vp.children].forEach(c=>{
      if(c===egGroup || (c.classList && c.classList.contains('node'))) return;
      c.setAttribute('data-escena','');
    });
  }

  const _switchView = switchView;
  switchView = function(v){
    const desde = state.view;
    const origen = posicionesEnPantalla();
    if(viaje) terminar();
    _switchView.apply(this, arguments);

    const hacia = state.view;
    if(sinMovimiento() || desde===hacia) return;

    /* hacia o desde la Tabla no hay geometría que conservar: entra con un fundido */
    if(hacia==='tabla' || desde==='tabla'){
      const quien = hacia==='tabla' ? document.getElementById('tabla') : svgEl;
      quien.classList.remove('entra'); void quien.offsetWidth; quien.classList.add('entra');
      return;
    }

    const ctm = vp && vp.getScreenCTM();
    if(!ctm) return;
    const inv = ctm.inverse();
    const pt = svgEl.createSVGPoint();
    const obras = []; let xmin=Infinity, xmax=-Infinity;
    VNODES.forEach(n=>{
      const o = origen.get(n.id);
      if(!o){ if(n._g) n._g.classList.add('aparece'); return; }
      pt.x=o[0]; pt.y=o[1]; const q = pt.matrixTransform(inv);
      obras.push({n, fx:q.x, fy:q.y, tx:n._bx, ty:n._by, sx:o[0]});
      if(o[0]<xmin) xmin=o[0]; if(o[0]>xmax) xmax=o[0];
    });
    if(!obras.length) return;

    const dur = ms('--mov-lento', 720);
    const ola = dur*0.3;             /* cuánto tarda la ola en cruzar de oeste a este */
    const rango = Math.max(1, xmax-xmin);
    obras.forEach(o=>{ o.retardo = ola*(o.sx-xmin)/rango; o.n._bx=o.fx; o.n._by=o.fy; o.n._pm=0; });

    marcarEscenario();
    svgEl.classList.add('en-transito');
    viaje = { obras, t0: performance.now(), dur };
    rafViaje = requestAnimationFrame(paso);
  };

  /* si algo redibuja a mitad del viaje (un filtro, girar el teléfono), manda lo nuevo */
  const _render = render;
  render = function(){
    if(viaje){ cancelAnimationFrame(rafViaje); rafViaje=0; viaje.obras.forEach(o=>{ o.n._pm=null; }); viaje=null; svgEl.classList.remove('en-transito'); }
    return _render.apply(this, arguments);
  };

  /* banco de pruebas: permite a la verificación leer el estado del viaje */
  window.__transicionesAtlas = { enViaje: ()=>!!viaje, terminar };
})();
