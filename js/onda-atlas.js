/* =====================================================================
   LA ONDA · abrir una obra es tirar una piedra al agua
   ---------------------------------------------------------------------
   Todo en el atlas se mueve con intención (la marea, el viaje entre vistas,
   los lugares que se abren) salvo el gesto central de la lectura: abrir una
   obra. Hasta ahora sus corrientes aparecían todas a la vez, de golpe.

   LA ONDA. Al abrir una obra sale de ella un anillo de su color que se
   ensancha sobre el mapa. Cada corriente aparece cuando la onda alcanza su
   otro extremo, y cada obra vecina responde con un pequeño destello al ser
   tocada. Las vecinas cercanas llegan antes y las de otra orilla después:
   la distancia se lee como tiempo, que es como el agua une y separa.

   Solo decora: aria-hidden, sin pointer-events. Con «reducir movimiento» no hay
   onda: las corrientes aparecen de una vez.
   (4-oct-2026: la estela entre obras visitadas se retiró a pedido de Rob: trazos
   que no decían nada nuevo y ensuciaban el mapa.)
   ===================================================================== */
(function(){
  if(typeof refreshHi!=='function' || typeof place!=='function') return;

  const svgEl=document.getElementById('stage');
  const reducido=()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const O={ activo:null, onda:null, raf:0, capa:null, gOndas:null };
  window.ONDA_ATLAS=O;

  const enMapa=()=> state.view!=='tabla' && vp;
  const pos=n=> (n && n._x!=null) ? [n._x, n._y] : null;

  /* la capa vive dentro de #vp, debajo de las obras: hay que recrearla tras cada render */
  function asegurarCapas(){
    if(!enMapa()) return false;
    if(O.capa && O.capa.isConnected) return true;
    O.capa=el('g',{class:'onda-capa','aria-hidden':'true'});
    O.gOndas=el('g',{class:'ondas'}); O.capa.appendChild(O.gOndas);
    const primero=vp.querySelector('.node');
    if(primero) vp.insertBefore(O.capa, primero); else vp.appendChild(O.capa);
    return true;
  }

  /* ---------- la onda ---------- */
  function cancelarOnda(){
    if(O.raf){ cancelAnimationFrame(O.raf); O.raf=0; }
    if(O.onda){ O.onda.anillos.forEach(a=>a.remove()); O.onda.destellos.forEach(d=>d.el.remove()); O.onda=null; }
    EDGES.forEach(e=>{ e.p.style.opacity=''; if(e.marker) e.marker.style.opacity=''; });
  }
  function lanzarOnda(id){
    cancelarOnda();
    if(!asegurarCapas() || reducido()) return;
    const n=byId(id); if(!n || !n._g) return;
    const p0=pos(n); if(!p0) return;
    const {direct}=neighbors(id);
    /* cada corriente se enciende cuando la onda llega a su extremo más lejano */
    const dist=o=>{ const p=pos(o); return p ? Math.hypot(p[0]-p0[0], p[1]-p0[1]) : 0; };
    const aristas=EDGES.map(e=>({e, d:Math.max(dist(e.na), dist(e.nb))}));
    const vecinas=[...direct].map(byId).filter(o=>o && o._g && visible(o)).map(o=>({o, d:dist(o), tocada:false}));
    const alcance=Math.max(60, ...aristas.map(a=>a.d), ...vecinas.map(v=>v.d)) + 24;
    /* la velocidad es la de una onda, no un plazo fijo: lo cercano llega pronto, lo lejano
       tarda, pero nada pasa de 1,6 s para que la lectura no espere al adorno */
    const dur=Math.min(1600, Math.max(760, 420 + alcance*1.15));
    const color=col(n.f[0]);
    const anillos=[0,1].map(i=>{
      const c=el('circle',{class:'onda-anillo'+(i?' eco':''), cx:p0[0], cy:p0[1], r:0});
      c.style.stroke=color; O.gOndas.appendChild(c); return c;
    });
    aristas.forEach(a=>{ a.e.p.style.opacity='0'; if(a.e.marker) a.e.marker.style.opacity='0'; });
    O.onda={ id, t0:performance.now(), dur, alcance, anillos, aristas, vecinas, destellos:[], color };
    O.raf=requestAnimationFrame(pasoOnda);
  }
  const salida=u=>1-Math.pow(1-u,3);        /* rápida al salir, lenta al llegar: la curva de llegada */
  function pasoOnda(ahora){
    const w=O.onda; if(!w){ O.raf=0; return; }
    const n=byId(w.id); const p0=pos(n);
    const t=ahora-w.t0;
    const u=Math.min(1,t/w.dur), frente=w.alcance*salida(u);
    const k=(typeof vpt!=='undefined' && vpt.k)||1;
    w.anillos.forEach((a,i)=>{
      const ui=Math.max(0,Math.min(1,(t-i*170)/w.dur)), r=w.alcance*salida(ui);
      if(p0){ a.setAttribute('cx',p0[0].toFixed(1)); a.setAttribute('cy',p0[1].toFixed(1)); }
      a.setAttribute('r',r.toFixed(1));
      a.style.strokeWidth=((i?0.8:1.5)/k).toFixed(2);
      a.style.opacity=((1-ui)*(i?0.28:0.55)).toFixed(3);
    });
    /* las corrientes entran con un fundido corto cuando el frente las alcanza */
    w.aristas.forEach(a=>{
      const v=Math.max(0,Math.min(1,(frente-a.d+18)/36));
      const s=v>=1?'':v.toFixed(3);
      if(a.e.p.style.opacity!==s) a.e.p.style.opacity=s;
      if(a.e.marker && a.e.marker.style.opacity!==s) a.e.marker.style.opacity=s;
    });
    /* la vecina tocada responde: un destello de su color que se abre y se apaga */
    w.vecinas.forEach(v=>{
      if(v.tocada || frente<v.d) return; v.tocada=true;
      const c=el('circle',{class:'onda-destello', r:3}); c.style.stroke=col(v.o.f[0]);
      O.gOndas.appendChild(c); w.destellos.push({el:c, o:v.o, t0:ahora});
    });
    w.destellos.forEach(d=>{
      const q=Math.min(1,(ahora-d.t0)/620), p=pos(d.o);
      if(p){ d.el.setAttribute('cx',p[0].toFixed(1)); d.el.setAttribute('cy',p[1].toFixed(1)); }
      d.el.setAttribute('r',(3+13*salida(q)).toFixed(1));
      d.el.style.strokeWidth=(1.2/k).toFixed(2);
      d.el.style.opacity=((1-q)*0.75).toFixed(3);
    });
    const vivos=w.destellos.some(d=>ahora-d.t0<620);
    if(u<1 || vivos){ O.raf=requestAnimationFrame(pasoOnda); return; }
    cancelarOnda();
  }

  /* ---------- enganches ---------- */
  const _refreshHi=refreshHi;
  refreshHi=function(){
    _refreshHi.apply(this,arguments);
    const id=state.active||null;
    if(id!==O.activo){
      O.activo=id;
      if(id) lanzarOnda(id);
      else cancelarOnda();
    }
  };
  const _render=render;
  render=function(){
    cancelarOnda();
    const r=_render.apply(this,arguments);
    asegurarCapas();
    return r;
  };

})();
