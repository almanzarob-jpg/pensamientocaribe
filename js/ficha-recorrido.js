/* =====================================================================
   FICHA · RECORRIDO LEGIBLE (prototipo 15-oct-2026)
   ---------------------------------------------------------------------
   No toca el motor ni los datos. Envuelve openPanel() —como ya hace
   transiciones-atlas.js con switchView()— y, sobre la ficha ya dibujada:

   1. Nombra con palabras la disonancia, que solo se decía con ⚡ y color.
      Sale de isDiso(); no se inventa ninguna categoría. (La evidencia ya se
      dice en el texto: la cita o «Sin fuente declarada».)
   2. Pliega el fundamento largo (cita o explicación) a dos líneas, con un
      botón «Ver … completo». El texto no cambia: solo se oculta el exceso.
   3. Si la ficha tiene 8 o más conexiones directas, ofrece un filtro local
      (Todas · Disonancias · Por corroborar). No reordena: no hay centro.
   4. Muestra la ruta de lectura: «Volver a …» y «Punto de partida …».
   5. Tras navegar desde dentro de la ficha, devuelve el foco al título
      (antes se perdía en <body>) y sube la ficha al inicio.
   Si algo falla, la ficha queda exactamente como estaba.
   ===================================================================== */
(function(){
  if(typeof openPanel!=='function' || typeof byId!=='function') return;

  const TX={
    es:{ruta:'Recorrido de lectura', volver:'Volver a', inicio:'Punto de partida', paso:'paso',
        filtro:'Filtrar las conexiones de esta ficha', todas:'Todas', diso:'Disonancias', pc:'Por corroborar',
        muestra:(a,b)=>`Mostrando ${a} de ${b} conexiones`, corr:'Corriente', todasCorr:'Todas las corrientes',
        tDiso:'Disonancia', tOk:'Corroborada', tPc:'Por corroborar',
        masFu:'Ver la fuente completa', masEx:'Leer la explicación completa', menos:'Plegar'},
    en:{ruta:'Reading path', volver:'Back to', inicio:'Starting point', paso:'step',
        filtro:'Filter this entry’s connections', todas:'All', diso:'Dissonances', pc:'To be corroborated',
        muestra:(a,b)=>`Showing ${a} of ${b} connections`, corr:'Current', todasCorr:'All currents',
        tDiso:'Dissonance', tOk:'Corroborated', tPc:'To be corroborated',
        masFu:'Show full source', masEx:'Read full explanation', menos:'Collapse'}
  };
  const tx=k=>{ const d=TX[(typeof LANG!=='undefined'&&LANG==='en')?'en':'es']; return d[k]; };
  const UMBRAL_FILTRO=8, LIMITE_FU=150, ruta=[];
  const panel=()=>document.getElementById('panel');
  const el=(tag,cls,txt)=>{ const e=document.createElement(tag); if(cls) e.className=cls; if(txt!=null) e.textContent=txt; return e; };
  const titulo=id=>{ const n=byId(id); return n? n.t : id; };
  const corto=s=>s.length>46? s.slice(0,44).trim()+'…' : s;

  /* La ruta se vacía cuando la ficha se cierra (por cualquier vía). */
  const p0=panel();
  if(p0) new MutationObserver(()=>{ if(!p0.classList.contains('open')) ruta.length=0; }).observe(p0,{attributes:true,attributeFilter:['class']});

  function registrar(id){
    const i=ruta.lastIndexOf(id);
    if(i>=0) ruta.length=i+1; else { ruta.push(id); if(ruta.length>40) ruta.shift(); }
  }

  function nav(p,id){
    const prev=ruta.length>1? ruta[ruta.length-2] : null;
    if(!prev) return;
    const n=el('nav','rt-ruta'); n.setAttribute('aria-label',tx('ruta'));
    const b1=el('button','rt-b'); b1.type='button';
    b1.append('← '+tx('volver')+' «'+corto(titulo(prev))+'»');
    b1.addEventListener('click',()=>openPanel(prev));
    n.append(b1);
    if(ruta.length>2){
      const b2=el('button','rt-b'); b2.type='button';
      b2.append('⌂ '+tx('inicio')+' «'+corto(titulo(ruta[0]))+'»');
      b2.addEventListener('click',()=>openPanel(ruta[0]));
      n.append(b2);
    }
    const q=el('span','rt-paso',tx('paso')+' '+ruta.length); n.append(q);
    const c=p.querySelector('.close'); if(c) c.after(n); else p.prepend(n);
  }

  function filas(p,id){
    const dir=p.querySelector('.rel'); if(!dir) return;
    const rows=[...dir.querySelectorAll(':scope > a[data-go]')]; if(!rows.length) return;
    let nd=0, np=0;
    rows.forEach(a=>{
      const oid=a.dataset.go; let diso=false; try{ diso=isDiso(id,oid); }catch(e){}
      const ok=!!a.querySelector('.ev.ok');
      a.dataset.tipo=diso?'diso':(ok?'ok':'pc'); if(diso) nd++; if(!ok) np++;
      a.dataset.pc=ok?'0':'1';
      /* Corriente de la obra enlazada, tal como la declara el corpus. Sin corriente: no se dice nada. */
      const ob=byId(oid), rc=ob&&ob.recorrido; a.dataset.rec=rc||'';
      if(rc && typeof recCod==='function'){ const r=a.querySelector('.r'); if(r){ const c=el('span','rt-c',' · '+recCod(rc)); c.title=recDen(rc); r.append(c); } }
      /* La evidencia ya se dice con palabras en el propio texto («Sin fuente declarada»
         o la cita); lo que solo se decía con ⚡ y color es la disonancia: ahora se nombra. */
      const fu=a.querySelector('.fu');
      if(diso){ const tags=el('span','rt-tags'); tags.append(el('span','rt-t diso','⚡ '+tx('tDiso'))); if(fu) fu.before(tags); else a.append(tags); }
      /* fundamento largo → plegado, con botón hermano (no dentro del <a>) */
      if(fu && !fu.classList.contains('pc') && fu.textContent.length>LIMITE_FU){
        a.classList.add('fu-largo'); fu.id='fu-'+oid;
        const fila=el('div','rt-masfila'); const b=el('button','rt-mas',diso?tx('masEx'):tx('masFu'));
        b.type='button'; b.setAttribute('aria-expanded','false'); b.setAttribute('aria-controls',fu.id);
        b.addEventListener('click',()=>{ const ab=a.classList.toggle('fu-abierto'); b.setAttribute('aria-expanded',String(ab)); b.textContent= ab? tx('menos') : (diso?tx('masEx'):tx('masFu')); });
        fila.append(b); a.after(fila); a._fila=fila;
      }
    });
    if(rows.length<UMBRAL_FILTRO) return;
    const g=el('div','seg rt-filtro'); g.setAttribute('role','group'); g.setAttribute('aria-label',tx('filtro'));
    const est=el('span','rt-estado'); est.setAttribute('role','status'); est.setAttribute('aria-live','polite');
    const defs=[['todas',tx('todas')+' '+rows.length,()=>true]];
    if(nd) defs.push(['diso',tx('diso')+' '+nd,a=>a.dataset.tipo==='diso']);
    if(np) defs.push(['pc',tx('pc')+' '+np,a=>a.dataset.pc==='1']);
    let fn=()=>true, corr='';
    const aplicar=()=>{
      let v=0; rows.forEach(a=>{ const s=fn(a) && (!corr || a.dataset.rec===corr); a.hidden=!s; if(a._fila) a._fila.hidden=!s; if(s) v++; });
      est.textContent = (v===rows.length)? '' : tx('muestra')(v,rows.length);
    };
    let bs=[];
    if(defs.length>1){
      bs=defs.map(([k,txt,f])=>{ const b=el('button','',txt); b.type='button'; b.setAttribute('aria-pressed',k==='todas'?'true':'false');
        if(k==='todas') b.classList.add('on');
        b.addEventListener('click',()=>{ bs.forEach(x=>{ const on=x===b; x.classList.toggle('on',on); x.setAttribute('aria-pressed',String(on)); }); fn=f; aplicar(); });
        return b; });
      g.append(...bs);
    }
    /* Filtro por corriente: solo las que aparecen entre estas conexiones, con su cuenta. */
    const cuenta={}; rows.forEach(a=>{ if(a.dataset.rec) cuenta[a.dataset.rec]=(cuenta[a.dataset.rec]||0)+1; });
    const claves=Object.keys(cuenta).sort((x,y)=>parseInt(x.slice(1))-parseInt(y.slice(1)));
    let sel=null;
    if(claves.length>1 && typeof recCod==='function'){
      const lab=el('label','rt-corr'); const sid='rt-corr-'+id; lab.htmlFor=sid; lab.append(el('span','rt-corr-l',tx('corr')));
      sel=el('select'); sel.id=sid;
      sel.append(new Option(tx('todasCorr'),''));
      claves.forEach(k=>sel.append(new Option(recCod(k)+' · '+recDen(k)+' ('+cuenta[k]+')',k)));
      sel.addEventListener('change',()=>{ corr=sel.value; aplicar(); });
      lab.append(sel);
    }
    if(!bs.length && !sel) return;
    const h=dir.querySelector('h3.dir'); let ancla=h;
    if(bs.length){ h.after(g); ancla=g; }
    if(sel){ ancla.after(sel.parentNode); ancla=sel.parentNode; }
    ancla.after(est);
  }

  /* Aplica el recorrido a la ficha que ya está dibujada (idempotente). */
  function aplicar(id){
    const p=panel();
    if(p && p.classList.contains('open') && state.active===id && p.querySelector('.rel') && !p.querySelector('.rt-tags')){
      registrar(id); nav(p,id); filas(p,id); return true;
    }
    return false;
  }
  const orig=openPanel;
  window.openPanel=function(id){
    const p=panel(); const venia=!!(p && p.contains(document.activeElement));
    const r=orig.apply(this,arguments);
    try{
      if(aplicar(id) && venia){ p.scrollTop=0; const h=p.querySelector('#panelTitId'); if(h){ h.setAttribute('tabindex','-1'); h.focus({preventScroll:true}); } }
    }catch(e){ console.warn('[ficha-recorrido] la ficha queda como estaba:',e); }
    return r;
  };
  /* Enlace profundo (#obra): la ficha puede haberse abierto antes de que este módulo llegara. */
  try{ if(state.active) aplicar(state.active); }catch(e){}
})();
