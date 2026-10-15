/* =====================================================================
   BÚSQUEDA POR CONCEPTO Y TERRITORIO (prototipo 15-oct-2026)
   ---------------------------------------------------------------------
   Hasta ahora la consulta se comparaba con título y autor, y con una
   corriente solo si el texto nombraba exactamente una. «catástrofe»
   (una etiqueta de la propia leyenda), «fuga» (menos de 5 letras),
   «plantación» (nombra dos corrientes) y «Jamaica» (obras ancladas allí
   sin la palabra en el título) no encontraban nada o casi nada.

   Aquí se amplía lo que cuenta como coincidencia, sin tocar el motor:
   - Cada término puede encontrarse en título+autor (como siempre), o bien
     en el nombre de un fenómeno de la obra, en su territorio o en el nombre
     de cualquiera de sus corrientes (principal o secundaria).
   - Solo SUMA: toda búsqueda que antes encontraba una obra la sigue
     encontrando. El orden no cambia: la lista ya pone primero las
     coincidencias de título, luego título y autor, luego el resto.
   - Los términos de menos de 3 letras solo se buscan en título y autor; los de 3 o 4,
     al comienzo de palabra en conceptos y territorios (que «mar» no entre por «cimarronaje»).
   - Cada resultado que no coincide por título o autor dice por qué aparece
     («Fenómeno: …», «Territorio: …», «Corriente: …»).
   Si algo falla, la búsqueda vuelve a ser la de siempre.
   ===================================================================== */
(function(){
  if(typeof matchQ!=='function' || typeof sinTildes!=='function' || typeof N==='undefined') return;
  const TX={es:{fen:'Fenómeno',lug:'Territorio',cor:'Corriente'}, en:{fen:'Phenomenon',lug:'Territory',cor:'Current'}};
  const lang=()=> (typeof LANG!=='undefined' && LANG==='en') ? 'en' : 'es';
  const MIN=3, LARGO=5;
  /* ≥5 letras: dentro de la palabra («plantación» encuentra «Postplantación»). 3–4 letras: solo al
     comienzo de una palabra, para que «mar» no entre por «cimarronaje» ni «par» por «Caribe». */
  const enTexto=(texto,w)=> w.length>=LARGO ? texto.includes(w) : new RegExp('(^|[^a-z0-9])'+w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).test(texto);
  const cache=new Map();       /* id → {lang, fen[], lug[], cor[], todo} */

  function fuentes(n){
    const c=cache.get(n.id); if(c && c.lang===lang()) return c;
    const fen=[], lug=[], cor=[];
    try{ (n.f||[]).forEach(f=>{ const s=fenLabel(f); if(s) fen.push(String(s)); }); }catch(e){}
    try{ const l=L[n.l]; if(l && l[2]) lug.push(String(l[2])); (n.orillas||[]).forEach(o=>{ const s=o.label||(L[o.lugar]&&L[o.lugar][2]); if(s) lug.push(String(s)); }); }catch(e){}
    try{ RECORRIDOS.forEach(r=>{ if(recGrado(n,r.c)>0) cor.push(recCod(r.c)+' · '+recDen(r.c)); }); }catch(e){}
    const o={lang:lang(), fen, lug, cor};
    ['fen','lug','cor'].forEach(k=>{ o[k+'S']=o[k].map(sinTildes); });
    o.todo=[...o.fenS,...o.lugS,...o.corS].join(' | ');
    cache.set(n.id,o); return o;
  }

  const base=matchQ;
  window.matchQ=function(n){
    if(base(n)) return true;
    if(!QTERMS.length) return true;
    try{
      const h=sinTildes(n.t+' '+n.a), f=fuentes(n);
      return QTERMS.every(w=> h.includes(w) || (w.length>=MIN && enTexto(f.todo,w)));
    }catch(e){ return false; }
  };

  /* Motivo visible en la lista de resultados */
  function motivo(n){
    const h=sinTildes(n.t+' '+n.a);
    if(QTERMS.every(w=>h.includes(w))) return '';
    const f=fuentes(n), d=TX[lang()], out=[];
    const hay=(arr,arrS)=>{ const i=arrS.findIndex(s=>QTERMS.some(w=>w.length>=MIN && enTexto(s,w))); return i>=0? arr[i] : null; };
    const a=hay(f.fen,f.fenS), b=hay(f.lug,f.lugS), c=hay(f.cor,f.corS);
    if(a) out.push(d.fen+': '+a); if(b) out.push(d.lug+': '+b); if(c) out.push(d.cor+': '+c);
    return out.slice(0,2).join(' · ');
  }
  function decorar(){
    const q=document.getElementById('qlista'); if(!q || q.hidden || typeof qlOpciones==='undefined') return;
    q.querySelectorAll('[role="option"][data-i]').forEach(li=>{
      if(li.dataset.por!==undefined) return; li.dataset.por='1';
      const o=qlOpciones[+li.dataset.i]; if(!o || o.tipo!=='obra') return;
      const n=byId(o.id); if(!n) return; const m=motivo(n); if(!m) return;
      const s=document.createElement('span'); s.className='ql-por'; s.textContent=m; li.append(s);
    });
  }
  const q=document.getElementById('qlista');
  if(q) new MutationObserver(decorar).observe(q,{childList:true});
})();
