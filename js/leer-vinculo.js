/* =====================================================================
   LEER EL VÍNCULO (prototipo 15-nov-2026)
   ---------------------------------------------------------------------
   El atlas dice que dos obras dialogan; la prueba vivía plegada dentro de
   la ficha. Este módulo abre la relación como una mesa de lectura: las dos
   obras enfrentadas, el pasaje que las une en el centro y, debajo, dónde
   está ese pasaje dentro del libro (cuerpo, notas o bibliografía).

   No toca el motor ni los datos. Envuelve openPanel() como ya hacen
   transiciones-atlas.js y ficha-recorrido.js, y solo lee lo que la ficha
   ya publica: relDe(), fuenteLegible(), esCorr(), isDiso(), byId().
   No lee ni muestra el registro interno (`apoyo` y afines).

   Reglas que respeta:
   · Nada se infiere. Quién cita a quién solo se dice cuando la fuente
     nombra a un único autor de los dos, o cuando el título catalogado de
     una sola de las obras aparece dentro del pasaje. Si no, las dos obras
     se muestran sin dirección.
   · El título se resalta únicamente si aparece literal en el pasaje: es el
     criterio de cita exacta hecho visible.
   · La hoja del PDF y las rutas internas no asoman (pasa por fuenteLegible).
   Si algo falla, la ficha queda exactamente como estaba.
   ===================================================================== */
(function(){
  if(typeof openPanel!=='function' || typeof byId!=='function' || typeof relDe!=='function') return;

  const TX={
    es:{abrir:'Leer el vínculo', kicker:'Leer el vínculo', cerrar:'Cerrar la lectura',
        cita:'Quien cita', citada:'La obra citada', obra:'Obra',
        reso:'Resonancia', diso:'Disonancia', ok:'corroborada', pc:'por corroborar',
        dirSi:'cita a', dirDiso:'disiente de', dirNo:'dialoga con', dirNoDiso:'en disonancia con',
        pasaje:'El pasaje', pasajes:'Los pasajes', fundamento:'El fundamento',
        calado:'El calado', donde:'Dónde está la prueba', superficie:'Cuerpo del texto', media:'Notas', fondo:'Bibliografía',
        gCuerpo:'La obra se nombra en el cuerpo del texto: el autor la discute a la vista del lector.',
        gNotas:'La obra aparece en una nota: sostiene un argumento desde el aparato del libro.',
        gBiblio:'La obra figura en la bibliografía: prueba que fue consultada, no dice cómo se la usó.',
        gAmbas:'La obra aparece en las notas y en la bibliografía del libro.',
        exacta:'El título catalogado en el atlas aparece en el pasaje.',
        loc:'Localizador', completa:'La fuente completa, como la declara el atlas',
        sinFuente:'Este vínculo sigue por corroborar. El atlas lo propone, pero todavía no tiene un pasaje que lo sostenga.',
        conoces:'¿Conoces la fuente? Déjala en el reflujo',
        fric:'Fricción epistémica declarada', cruce:'Cruce lingüístico entre las tradiciones de las dos obras',
        ficha:'Abrir su ficha', ant:'Vínculo anterior', sig:'Vínculo siguiente', de:'de',
        copiar:'Copiar el enlace de este vínculo', copiado:'Enlace copiado', libreta:'Anotar esta fuente en la libreta', enLibreta:'✓ En la libreta',
        ayuda:'Flechas izquierda y derecha para pasar de un vínculo a otro. Escape para cerrar.',
        dec:{estado:'Antes de ver lo que dice el atlas, decide tú', y:'y', q1:'¿Cómo se relacionan?', reso:'Resonancia', resoD:'una continúa, amplifica o hereda a la otra', diso:'Disonancia', disoD:'una tensiona lo que la otra sostiene',
          q2:'¿Qué sostiene el vínculo?', doc:'Está documentado', docD:'una obra nombra a la otra en su texto, sus notas o su bibliografía', pc:'Es una propuesta', pcD:'se argumenta, pero todavía falta el pasaje',
          q3:'¿Dónde estaría la prueba?', superficie:'En el cuerpo del texto', media:'En una nota', fondo:'En la bibliografía', nose:'No lo sé todavía',
          porque:'Por qué lo crees (opcional)', phPorque:'Una frase basta.', ver:'Ver lo que dice el atlas',
          comp:'Tu lectura y la del atlas', fRel:'Relación', fDoc:'Evidencia', fDonde:'Dónde', tu:'Tú', atlas:'El atlas', si:'coinciden', no:'difieren', na:'—',
          docE:'documentado', pcE:'por corroborar', nada:'no lo declara', ambas:'notas y bibliografía',
          todoSi:'Coinciden. Que coincidan no prueba que tengan razón: lee la prueba.', algunoNo:'Difieren en algo. Lee la prueba antes de decidir quién tiene razón. El atlas también puede equivocarse.',
          disiento:'Sostengo mi lectura: argumentarla en el reflujo', enLibreta:'Tu lectura quedó en la libreta.', rfTxt:'Mi lectura difiere de la del atlas.'}},
    en:{abrir:'Read the link', kicker:'Read the link', cerrar:'Close the reading',
        cita:'The citing work', citada:'The work cited', obra:'Work',
        reso:'Resonance', diso:'Dissonance', ok:'corroborated', pc:'to be corroborated',
        dirSi:'cites', dirDiso:'dissents from', dirNo:'in dialogue with', dirNoDiso:'in dissonance with',
        pasaje:'The passage', pasajes:'The passages', fundamento:'The grounds',
        calado:'The draught', donde:'Where the evidence sits', superficie:'Body of the text', media:'Notes', fondo:'Bibliography',
        gCuerpo:'The work is named in the body of the text: the author discusses it in plain view.',
        gNotas:'The work appears in a note: it supports an argument from the apparatus of the book.',
        gBiblio:'The work is listed in the bibliography: proof that it was consulted, not of how it was used.',
        gAmbas:'The work appears in both the notes and the bibliography of the book.',
        exacta:'The title catalogued in the atlas appears in the passage.',
        loc:'Locator', completa:'The full source, as the atlas declares it',
        sinFuente:'This link is still to be corroborated. The atlas proposes it, but has no passage yet to support it.',
        conoces:'Know the source? Leave it in the reflux',
        fric:'Declared epistemic friction', cruce:'Linguistic crossing between the traditions of the two works',
        ficha:'Open its entry', ant:'Previous link', sig:'Next link', de:'of',
        copiar:'Copy the link to this connection', copiado:'Link copied', libreta:'Note this source in the notebook', enLibreta:'✓ In the notebook',
        ayuda:'Left and right arrows move between links. Escape closes.',
        dec:{estado:'Before seeing what the atlas says, decide for yourself', y:'and', q1:'How are they related?', reso:'Resonance', resoD:'one continues, amplifies or inherits the other', diso:'Dissonance', disoD:'one argues against what the other holds',
          q2:'What supports the link?', doc:'It is documented', docD:'one work names the other in its text, notes or bibliography', pc:'It is a proposal', pcD:'it is argued, but the passage is still missing',
          q3:'Where would the evidence be?', superficie:'In the body of the text', media:'In a note', fondo:'In the bibliography', nose:'I don’t know yet',
          porque:'Why you think so (optional)', phPorque:'One sentence is enough.', ver:'See what the atlas says',
          comp:'Your reading and the atlas’s', fRel:'Relation', fDoc:'Evidence', fDonde:'Where', tu:'You', atlas:'The atlas', si:'agree', no:'differ', na:'—',
          docE:'documented', pcE:'to be corroborated', nada:'does not say', ambas:'notes and bibliography',
          todoSi:'You agree. Agreeing does not prove you are right: read the evidence.', algunoNo:'You differ somewhere. Read the evidence before deciding who is right. The atlas can be wrong too.',
          disiento:'I hold my reading: argue it in the reflux', enLibreta:'Your reading is in the notebook.', rfTxt:'My reading differs from the atlas’s.'}}
  };
  const en=()=> (typeof LANG!=='undefined' && LANG==='en');
  const tx=k=>TX[en()?'en':'es'][k];
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const el=(tag,cls,txt)=>{ const e=document.createElement(tag); if(cls) e.className=cls; if(txt!=null) e.textContent=txt; return e; };
  const panel=()=>document.getElementById('panel');
  const RE_HASH=/^#vinculo=([\w-]+)~([\w-]+)$/;

  /* ---------- lectura de la fuente: solo lo que el texto declara ---------- */
  const apellidos=n=>String(n.a||'').replace(/\([^)]*\)/g,' ').split(/[\s,;&]+/)
      .filter(w=>w.length>=4 && /^[A-ZÁÉÍÓÚÑÜ]/.test(w) && !/^(eds?|comps?|coords?|otros)\.?$/i.test(w));
  const agujas=n=>{ const t=String(n.t||''); const out=[t.split(/[:(]/)[0].trim()];
      const par=t.match(/\(([^)]{6,})\)/); if(par) out.push(par[1].trim());
      return out.filter(x=>x.length>=6); };
  const contiene=(texto,n)=>{ const low=llano(texto); return agujas(n).some(a=>low.includes(llano(a))); };
  const primera=(texto,n)=>{ let p=-1; apellidos(n).forEach(w=>{ const i=texto.indexOf(w); if(i>=0 && (p<0||i<p)) p=i; }); return p; };

  function analizar(a,b){
    const r=relDe(a,b); if(!r) return null;
    const A=byId(a), B=byId(b); if(!A||!B) return null;
    const cruda=String(r.fuente||'');
    const ok=esCorr(a,b), diso=isDiso(a,b);
    const legible= ok ? fuenteLegible(cruda) : cruda;
    const pasajes=[]; let m;
    /* «…» puede llevar comillas “…” dentro: cada apertura se cierra con la suya */
    const re=/:\s*(?:«([^»]{25,})»|“([^”]{25,})”)/g;
    if(ok) while((m=re.exec(legible))) pasajes.push((m[1]||m[2]).trim());
    const junto=pasajes.join(' ');
    /* dónde está la prueba: la fórmula con que la propia fuente empieza */
    let estrato=null; const k=cruda.match(/^Verificada en (?:el |la |las |los )?([^.:]{3,40})[.:]/);
    if(ok && k){ const s=k[1].toLowerCase();
      if(/notas y bibliograf/.test(s)) estrato='ambas';
      else if(/bibliograf/.test(s)) estrato='fondo';
      else if(/^notas?\b/.test(s)) estrato='media';
      else if(/^(cuerpo del texto|texto)\b/.test(s)) estrato='superficie'; }
    /* quién cita a quién */
    let cita=null;
    if(ok){
      /* la fuente abre nombrando a quien cita («Trouillot, …», «Verificada en el texto. Kamugisha, 2019…»).
         Que un apellido aparezca más adentro no basta: «El volumen retoma de Rodney…» nombra al citado. */
      const cabeza=cruda.replace(/^Verificada en [^.:]*[.:]\s*/,'').split(/[«“]/)[0];
      const pa=primera(cabeza,A), pb=primera(cabeza,B);
      const ia=pa>=0&&pa<=26, ib=pb>=0&&pb<=26;
      const ta=junto && contiene(junto,A), tb=junto && contiene(junto,B);
      if(ta && !tb) cita=b; else if(tb && !ta) cita=a;
      else if(ia && !ib) cita=a; else if(ib && !ia) cita=b;
    }
    const locs=[]; (legible.match(/\bpp?\.\s*\d+(?:\s*[-–]\s*\d+)?/g)||[]).forEach(x=>{ x=x.replace(/\s+/g,' '); if(!locs.includes(x) && locs.length<5) locs.push(x); });
    let cruce=false; try{ cruce=cruceLinguistico(A,B); }catch(e){}
    return {r,ok,diso,legible,pasajes,estrato,cita,locs,cruce};
  }

  /* resalta el título catalogado solo si está literal en el pasaje */
  /* sin tildes y en minúscula, carácter a carácter (misma longitud): «Eloge de la Créolité»
     en el ejemplar es «Éloge de la créolité» en el catálogo */
  const llano=s=>Array.from(String(s),c=>c.normalize('NFD').charAt(0).toLowerCase()).join('');
  const chars=s=>Array.from(String(s));
  function resaltar(pasaje,n){
    const cs=chars(pasaje), base=llano(pasaje); const marca=new Array(cs.length).fill(false); let hubo=false;
    agujas(n).forEach(a=>{ const ag=llano(a); const L=chars(ag).length; let i=0;
      const bs=chars(base);
      for(;;){ const j=bs.slice(i).join('').indexOf(ag); if(j<0) break; const ini=i+chars(bs.slice(i).join('').slice(0,j)).length;
        for(let q=ini;q<ini+L;q++) marca[q]=true; hubo=true; i=ini+L; } });
    let h='', dentro=false;
    cs.forEach((c,i)=>{ if(marca[i]&&!dentro){ h+='<mark>'; dentro=true; } if(!marca[i]&&dentro){ h+='</mark>'; dentro=false; } h+=esc(c); });
    if(dentro) h+='</mark>';
    return {h,hubo};
  }

  /* ---------- la mesa ---------- */
  let caja=null, abierto=null, retorno=null, lista=[], decidir=false;
  const DEC={}; const kv=(a,b)=>a+'~'+b;
  function montar(){
    if(caja) return caja;
    caja=el('div'); caja.id='lectura'; caja.hidden=true;
    caja.setAttribute('role','dialog'); caja.setAttribute('aria-modal','true'); caja.setAttribute('aria-labelledby','lvTit');
    document.body.appendChild(caja);
    caja.addEventListener('click',ev=>{
      const b=ev.target.closest('[data-lv]'); if(!b) return;
      const k=b.dataset.lv;
      if(k==='cerrar') cerrar();
      else if(k==='ant') paso(-1); else if(k==='sig') paso(1);
      else if(k==='ficha'){ const id=b.dataset.id; cerrar({foco:false}); openPanel(id); }
      else if(k==='copiar') copiar(b);
      else if(k==='reflujo') alReflujo();
      else if(k==='ver' && abierto) revelar();
      else if(k==='disiento' && abierto) disentir();
      else if(k==='libreta' && window.LIBRETA_ATLAS && abierto){ LIBRETA_ATLAS.anadirFuente(abierto[0],abierto[1]); b.textContent=tx('enLibreta'); b.setAttribute('aria-pressed','true'); const av=caja.querySelector('.lv-aviso'); if(av) av.textContent=tx('enLibreta'); }
    });
    return caja;
  }

  /* «Trouillot 1992»: la frase de cabecera nombra a los autores; los títulos van en las páginas */
  const firma=n=>{ let a=''; try{ a=autoriaBreve(n); }catch(e){} if(!a) a=n.a||n.t; const y=String(n.y||'').match(/\d{4}/); return a+(y?' '+y[0]:''); };
  function pagina(n,rol,lado){
    const lu=(typeof L!=='undefined' && L[n.l]) ? L[n.l][2] : '';
    return `<article class="lv-pag lv-${lado}">
      <p class="lv-rol">${esc(rol)}</p>
      <h3 class="lv-t">${esc(n.t)}</h3>
      <p class="lv-a">${esc(n.a)}${n.y?' · '+esc(n.y):''}</p>
      <p class="lv-m">${esc(n.tr||'')}${lu?' · '+esc(lu):''}</p>
      ${n.ap?`<p class="lv-ap">${esc(n.ap)}</p>`:''}
      <button type="button" class="lv-b" data-lv="ficha" data-id="${esc(n.id)}">${tx('ficha')} →</button>
    </article>`;
  }

  function hilo(x){
    const cls='lv-hilo'+(x.diso?' diso':'')+(x.ok?'':' pc')+(x.cita?'':' vaiven');
    return `<div class="${cls}" aria-hidden="true">
      <svg class="lv-h" viewBox="0 0 200 40" preserveAspectRatio="none"><path class="lv-base" d="M0 20 C 25 4, 50 36, 75 20 S 125 4, 150 20 S 190 30, 200 20"/><path class="lv-flujo" d="M0 20 C 25 4, 50 36, 75 20 S 125 4, 150 20 S 190 30, 200 20"/></svg>
      <svg class="lv-v" viewBox="0 0 40 200" preserveAspectRatio="none"><path class="lv-base" d="M20 0 C 4 25, 36 50, 20 75 S 4 125, 20 150 S 30 190, 20 200"/><path class="lv-flujo" d="M20 0 C 4 25, 36 50, 20 75 S 4 125, 20 150 S 30 190, 20 200"/></svg>
    </div>`;
  }

  function estratos(x){
    if(!x.estrato) return '';
    const on=k=> (x.estrato===k || (x.estrato==='ambas' && (k==='media'||k==='fondo')));
    const glosa={superficie:'gCuerpo',media:'gNotas',fondo:'gBiblio',ambas:'gAmbas'}[x.estrato];
    return `<aside class="lv-donde"><h4>${tx('calado')}</h4><p class="lv-sub">${tx('donde')}</p>
      <ol class="lv-estratos lv-e-${x.estrato}">
        ${['superficie','media','fondo'].map(k=>`<li class="${on(k)?'on':''}"${on(k)?' aria-current="true"':''}><span class="lv-cala"></span>${tx(k)}</li>`).join('')}
      </ol>
      <p class="lv-glosa">${tx(glosa)}</p></aside>`;
  }

  function pintar(a,b){
    const x=analizar(a,b); if(!x) return false;
    if(decidir && !(DEC[kv(a,b)]&&DEC[kv(a,b)].revelado)) return pintarVelado(a,b,x);
    const A=byId(a), B=byId(b);
    const izq = x.cita ? byId(x.cita) : A, der = x.cita ? (x.cita===a?B:A) : B;
    const i=lista.findIndex(p=>p[0]===a&&p[1]===b), n=lista.length;
    const tipo = x.diso?tx('diso'):tx('reso');
    let prueba='';
    if(x.pasajes.length){
      let exacta=false;
      const cuerpo=x.pasajes.map(p=>{ const z=resaltar(p, x.cita?der:{t:''}); if(z.hubo) exacta=true; return `<blockquote class="lv-q${p.length>260?' largo':''}">${z.h}</blockquote>`; }).join('');
      prueba=`<h4 class="lv-h4">${x.pasajes.length>1?tx('pasajes'):tx('pasaje')}</h4>${cuerpo}
        ${exacta?`<p class="lv-exacta"><mark>&nbsp;</mark> ${tx('exacta')}</p>`:''}`;
    } else if(x.ok){
      prueba=`<h4 class="lv-h4">${tx('fundamento')}</h4><p class="lv-fund">${esc(x.legible)}</p>`;
    } else {
      prueba=`<h4 class="lv-h4">${tx('pc')}</h4><p class="lv-fund pc">${tx('sinFuente')}</p>${x.legible?`<p class="lv-nota">${esc(x.legible)}</p>`:''}
        <button type="button" class="lv-b oro" data-lv="reflujo">${tx('conoces')} →</button>`;
    }
    const fr=x.r.friccion && x.r.friccion.hay===true ? x.r.friccion : null;
    const friccion = fr ? `<section class="lv-fric"><h4>${tx('fric')}${fr.clase?' · '+esc(fr.clase):''}</h4>${fr.argumento?`<p>${esc(fr.argumento)}</p>`:''}</section>` : '';
    const locs = x.locs.length ? `<p class="lv-loc"><span>${tx('loc')}</span> ${x.locs.map(esc).join(' · ')}</p>` : '';
    const completa = (x.ok && x.pasajes.length) ? `<details class="lv-completa"><summary>${tx('completa')}</summary><p>${esc(x.legible)}</p></details>` : '';
    caja.className=(x.diso?'diso ':'')+(x.ok?'':'pc ')+(x.cita?'':'sin-dir');
    caja.innerHTML=`<div class="lv-mesa">
      <div class="lv-cab">
        <p class="lv-k" id="lvK">${tx('kicker')}</p>
        ${n>1?`<nav class="lv-nav" aria-label="${tx('kicker')}"><button type="button" class="lv-fl" data-lv="ant" aria-label="${tx('ant')}"${i<=0?' disabled':''}>←</button><span class="lv-n" aria-live="polite">${i+1} ${tx('de')} ${n}</span><button type="button" class="lv-fl" data-lv="sig" aria-label="${tx('sig')}"${i>=n-1?' disabled':''}>→</button></nav>`:''}
        <button type="button" class="lv-x" data-lv="cerrar" aria-label="${tx('cerrar')}">×</button>
      </div>
      <h2 id="lvTit" class="lv-frase" tabindex="-1"><span>${esc(firma(izq))}</span> <em>${x.cita?(x.diso?tx('dirDiso'):tx('dirSi')):(x.diso?tx('dirNoDiso'):tx('dirNo'))}</em> <span>${esc(firma(der))}</span></h2>
      <p class="lv-estado"><span class="lv-punto"></span>${esc(tipo)} · ${x.ok?tx('ok'):tx('pc')}${x.cruce?` <span class="lv-cruce" title="${tx('cruce')}">✕ ${tx('cruce')}</span>`:''}</p>
      <div class="lv-par">
        ${pagina(izq, x.cita?tx('cita'):tx('obra'), 'izq')}
        ${hilo(x)}
        ${pagina(der, x.cita?tx('citada'):tx('obra'), 'der')}
      </div>
      <section class="lv-prueba${x.estrato?' con-donde':''}">
        <div class="lv-texto">${comparacion(a,b,x)}${prueba}${locs}${friccion}${completa}</div>
        ${estratos(x)}
      </section>
      <div class="lv-pie"><button type="button" class="lv-b" data-lv="copiar">${tx('copiar')}</button>${window.LIBRETA_ATLAS?`<button type="button" class="lv-b" data-lv="libreta"${LIBRETA_ATLAS.tieneFuente(a,b)?' aria-pressed="true"':''}>${LIBRETA_ATLAS.tieneFuente(a,b)?tx('enLibreta'):tx('libreta')}</button>`:''}<span class="lv-ayuda">${tx('ayuda')}</span><span class="lv-aviso" role="status" aria-live="polite"></span></div>
    </div>`;
    abierto=[a,b];
    try{ history.replaceState(history.state,'','#vinculo='+a+'~'+b); }catch(e){}
    return true;
  }

  /* ---------- decidir antes de ver ---------- */
  const D=k=>tx('dec')[k];
  function lecturaAtlas(x){ return {tipo:x.diso?'diso':'reso', doc:x.ok?'doc':'pc', donde: x.ok? (x.estrato||null) : null}; }
  function pintarVelado(a,b,x){
    const A=byId(a), B=byId(b);
    const i=lista.findIndex(p=>p[0]===a&&p[1]===b), n=lista.length;
    const prev=DEC[kv(a,b)]||{};
    const op=(name,val,lab,desc)=>`<label class="lv-op"><input type="radio" name="${name}" value="${val}"${prev.tu&&prev.tu[name]===val?' checked':''}><span><b>${esc(lab)}</b>${desc?`<i>${esc(desc)}</i>`:''}</span></label>`;
    caja.className='velado';
    caja.innerHTML=`<div class="lv-mesa">
      <div class="lv-cab">
        <p class="lv-k" id="lvK">${tx('kicker')}</p>
        ${n>1?`<nav class="lv-nav" aria-label="${tx('kicker')}"><button type="button" class="lv-fl" data-lv="ant" aria-label="${tx('ant')}"${i<=0?' disabled':''}>←</button><span class="lv-n" aria-live="polite">${i+1} ${tx('de')} ${n}</span><button type="button" class="lv-fl" data-lv="sig" aria-label="${tx('sig')}"${i>=n-1?' disabled':''}>→</button></nav>`:''}
        <button type="button" class="lv-x" data-lv="cerrar" aria-label="${tx('cerrar')}">×</button>
      </div>
      <h2 id="lvTit" class="lv-frase" tabindex="-1"><span>${esc(firma(A))}</span> <em>${esc(D('y'))}</em> <span>${esc(firma(B))}</span></h2>
      <p class="lv-estado"><span class="lv-punto"></span>${esc(D('estado'))}</p>
      <div class="lv-par">${pagina(A,tx('obra'),'izq')}<div class="lv-hilo velado" aria-hidden="true"><svg class="lv-h" viewBox="0 0 200 40" preserveAspectRatio="none"><path class="lv-base" d="M0 20 C 25 4, 50 36, 75 20 S 125 4, 150 20 S 190 30, 200 20"/></svg><svg class="lv-v" viewBox="0 0 40 200" preserveAspectRatio="none"><path class="lv-base" d="M20 0 C 4 25, 36 50, 20 75 S 4 125, 20 150 S 30 190, 20 200"/></svg></div>${pagina(B,tx('obra'),'der')}</div>
      <form class="lv-decidir" onsubmit="return false">
        <fieldset><legend>${esc(D('q1'))}</legend>${op('tipo','reso',D('reso'),D('resoD'))}${op('tipo','diso',D('diso'),D('disoD'))}${op('tipo','nose',D('nose'))}</fieldset>
        <fieldset><legend>${esc(D('q2'))}</legend>${op('doc','doc',D('doc'),D('docD'))}${op('doc','pc',D('pc'),D('pcD'))}${op('doc','nose',D('nose'))}</fieldset>
        <fieldset><legend>${esc(D('q3'))}</legend>${op('donde','superficie',D('superficie'))}${op('donde','media',D('media'))}${op('donde','fondo',D('fondo'))}${op('donde','nose',D('nose'))}</fieldset>
        <label class="lv-porque"><span>${esc(D('porque'))}</span><textarea name="porque" rows="2" placeholder="${esc(D('phPorque'))}">${esc(prev.porque||'')}</textarea></label>
        <button type="button" class="lv-ver" data-lv="ver">${esc(D('ver'))} →</button>
      </form>
      <div class="lv-pie"><span class="lv-ayuda">${tx('ayuda')}</span><span class="lv-aviso" role="status" aria-live="polite"></span></div>
    </div>`;
    abierto=[a,b];
    try{ history.replaceState(history.state,'','#vinculo='+a+'~'+b); }catch(e){}
    return true;
  }
  function revelar(){
    const [a,b]=abierto; const f=caja.querySelector('form.lv-decidir'); if(!f) return;
    const v=n=>{ const r=f.querySelector(`input[name="${n}"]:checked`); return r? r.value : 'nose'; };
    const tu={tipo:v('tipo'), doc:v('doc'), donde:v('donde')}, porque=(f.querySelector('textarea[name="porque"]').value||'').trim();
    DEC[kv(a,b)]={tu, porque, revelado:true};
    const x=analizar(a,b);
    if(window.LIBRETA_ATLAS) try{ LIBRETA_ATLAS.registrarLectura(a,b,tu,lecturaAtlas(x),porque); }catch(e){}
    caja.classList.remove('ver'); void caja.offsetWidth;
    pintar(a,b); caja.classList.add('ver');
    const h=caja.querySelector('#lvComp'); if(h){ h.focus({preventScroll:true}); h.scrollIntoView({block:'start',behavior:'smooth'}); }
  }
  function comparacion(a,b,x){
    const d=DEC[kv(a,b)]; if(!d||!d.revelado) return '';
    const at=lecturaAtlas(x), tu=d.tu;
    const nombre=(campo,v)=>{ if(!v||v==='nose') return D('nose'); if(campo==='tipo') return D(v); if(campo==='doc') return v==='doc'?D('docE'):D('pcE'); return v==='ambas'?D('ambas'):D(v); };
    const fila=(campo,lab)=>{ const vt=tu[campo], va=at[campo];
      const na= vt==='nose' || (campo==='donde' && (!va || tu.doc==='pc'));
      const igual= !na && (vt===va || (campo==='donde' && va==='ambas' && (vt==='media'||vt==='fondo')));
      return {html:`<tr><th scope="row">${esc(lab)}</th><td>${esc(nombre(campo,vt))}</td><td>${esc(va?nombre(campo,va):D('nada'))}</td><td class="${na?'na':igual?'si':'no'}">${na?D('na'):igual?'✓ '+D('si'):'≠ '+D('no')}</td></tr>`, na, igual}; };
    const F=[fila('tipo',D('fRel')),fila('doc',D('fDoc')),fila('donde',D('fDonde'))];
    const evaluadas=F.filter(f=>!f.na), hayNo=evaluadas.some(f=>!f.igual);
    return `<section class="lv-comp"><h4 id="lvComp" tabindex="-1">${esc(D('comp'))}</h4>
      <table><thead><tr><th></th><th scope="col">${esc(D('tu'))}</th><th scope="col">${esc(D('atlas'))}</th><th></th></tr></thead><tbody>${F.map(f=>f.html).join('')}</tbody></table>
      ${d.porque?`<p class="lv-porq">«${esc(d.porque)}»</p>`:''}
      ${evaluadas.length?`<p class="lv-veredicto">${esc(hayNo?D('algunoNo'):D('todoSi'))}</p>`:''}
      ${hayNo?`<button type="button" class="lv-b oro" data-lv="disiento">${esc(D('disiento'))} →</button>`:''}
      ${window.LIBRETA_ATLAS?`<p class="lv-nota-lib">${esc(D('enLibreta'))}</p>`:''}</section>`;
  }
  function disentir(){
    const [a,b]=abierto, d=DEC[kv(a,b)]||{}, x=analizar(a,b), at=lecturaAtlas(x);
    const nombre=v=> v==='doc'?D('docE'):v==='pc'?D('pcE'):(D(v)||v);
    const txt=`${D('rfTxt')} ${D('tu')}: ${nombre(d.tu.tipo)}, ${nombre(d.tu.doc)}${d.tu.donde&&d.tu.donde!=='nose'?', '+D(d.tu.donde):''}. ${D('atlas')}: ${nombre(at.tipo)}, ${nombre(at.doc)}.${d.porque?' '+d.porque:''}`;
    cerrar({foco:false});
    if(window.LIBRETA_ATLAS) LIBRETA_ATLAS.alReflujo(txt,'v:'+a+'~'+b);
  }

  function vecinas(id){
    const p=panel(); const out=[];
    if(p && p.classList.contains('open') && state.active===id){
      const dir=p.querySelector('.rel');
      if(dir) dir.querySelectorAll(':scope > a[data-go]').forEach(a=>{ if(!a.hidden) out.push([id,a.dataset.go]); });
    }
    return out;
  }

  function abrir(a,b,o){
    montar();
    decidir = (o && o.decidir!==undefined) ? !!o.decidir : !!window.LV_DECIDIR_SIEMPRE;
    lista=vecinas(a); if(!lista.some(p=>p[1]===b)) lista=[[a,b]];
    if(!abierto) retorno=document.activeElement;
    if(!pintar(a,b)) return;
    caja.hidden=false; document.body.classList.add('lv-abierta');
    caja.scrollTop=0; const m=caja.querySelector('.lv-mesa'); if(m) m.scrollTop=0;
    requestAnimationFrame(()=>{ caja.classList.add('ver'); const h=caja.querySelector('#lvTit'); if(h) h.focus({preventScroll:true}); });
  }
  function paso(d){
    if(!abierto) return; const i=lista.findIndex(p=>p[0]===abierto[0]&&p[1]===abierto[1]); const j=i+d;
    if(j<0||j>=lista.length) return;
    caja.classList.remove('ver'); void caja.offsetWidth;
    pintar(lista[j][0],lista[j][1]); caja.classList.add('ver');
    const m=caja.querySelector('.lv-mesa'); if(m) m.scrollTop=0;
    const f=caja.querySelector(d>0?'[data-lv="sig"]:not([disabled])':'[data-lv="ant"]:not([disabled])')||caja.querySelector('#lvTit'); if(f) f.focus({preventScroll:true});
  }
  function cerrar(o){
    if(!abierto) return; o=o||{};
    abierto=null; caja.classList.remove('ver'); caja.hidden=true; document.body.classList.remove('lv-abierta');
    if(o.historia!==false){ try{ const p=panel(); history.replaceState(history.state,'', (p&&p.classList.contains('open')&&state.active)?'#'+state.active:location.pathname+location.search); }catch(e){} }
    if(o.foco!==false && retorno && document.contains(retorno)) retorno.focus({preventScroll:true});
    retorno=null;
  }
  function copiar(b){
    const url=location.origin+location.pathname+'#vinculo='+abierto[0]+'~'+abierto[1];
    const av=caja.querySelector('.lv-aviso'); const fin=()=>{ if(av){ av.textContent=tx('copiado'); setTimeout(()=>{ if(av) av.textContent=''; },2400); } };
    try{ navigator.clipboard.writeText(url).then(fin,fin); }catch(e){ fin(); }
  }
  function alReflujo(){
    const par=abierto; cerrar({foco:false});
    const p=panel(); if(!p||!par) return;
    const c=[...p.querySelectorAll('.conoces')].find(s=>s.dataset.rfb===par[1]); if(c) c.click();
  }

  /* teclado: mientras la mesa está abierta, nadie más recibe Escape ni las flechas */
  document.addEventListener('keydown',ev=>{
    if(!abierto) return;
    if(ev.key==='Escape'){ ev.stopPropagation(); ev.preventDefault(); cerrar(); return; }
    if(ev.key==='ArrowRight' && !/^(INPUT|TEXTAREA|SELECT)$/.test(ev.target.tagName)){ ev.stopPropagation(); paso(1); return; }
    if(ev.key==='ArrowLeft' && !/^(INPUT|TEXTAREA|SELECT)$/.test(ev.target.tagName)){ ev.stopPropagation(); paso(-1); return; }
    if(ev.key==='Tab'){
      const f=[...caja.querySelectorAll('button:not([disabled]),summary,a[href],input:checked,fieldset:not(:has(input:checked)) input,textarea')].filter(e=>e.offsetParent!==null); if(!f.length) return;
      const a0=f[0], z=f[f.length-1];
      if(!caja.contains(document.activeElement)){ ev.preventDefault(); a0.focus(); }
      else if(ev.shiftKey && (document.activeElement===a0 || document.activeElement.id==='lvTit')){ ev.preventDefault(); z.focus(); }
      else if(!ev.shiftKey && document.activeElement===z){ ev.preventDefault(); a0.focus(); }
    }
  },true);
  window.addEventListener('popstate',()=>{ if(abierto && !RE_HASH.test(location.hash)) cerrar({historia:false,foco:false}); });

  /* ---------- la puerta: un botón bajo cada conexión directa de la ficha ---------- */
  function puertas(id){
    const p=panel(); if(!p || !p.classList.contains('open') || state.active!==id) return;
    const dir=p.querySelector('.rel'); if(!dir || dir.querySelector('.lv-abrir')) return;
    dir.querySelectorAll(':scope > a[data-go]').forEach(a=>{
      const b=el('button','lv-abrir',tx('abrir')); b.type='button';
      const o=byId(a.dataset.go); if(o) b.setAttribute('aria-label',tx('abrir')+': '+o.t);
      b.addEventListener('click',()=>abrir(id,a.dataset.go));
      if(a._fila){ a._fila.append(b); }
      else{ const f=el('div','rt-masfila lv-fila'); f.append(b); a.after(f); a._fila=f; a.classList.add('lv-con'); }
    });
  }
  const orig=openPanel;
  window.openPanel=function(id){
    const r=orig.apply(this,arguments);
    try{ puertas(id); }catch(e){ console.warn('[leer-vinculo] la ficha queda como estaba:',e); }
    return r;
  };
  try{ if(state.active) puertas(state.active); }catch(e){}

  /* enlace profundo: #vinculo=a~b abre la ficha de a y, encima, la lectura */
  function desdeHash(){
    const m=location.hash.match(RE_HASH); if(!m) return;
    const a=m[1], b=m[2]; if(!byId(a)||!byId(b)||!relDe(a,b)) return;
    if(abierto && abierto[0]===a && abierto[1]===b) return;
    const u=document.getElementById('umbral'); if(u) u.classList.add('gone');
    const ir=()=>{ try{ window.openPanel(a); abrir(a,b); }catch(e){ console.warn('[leer-vinculo]',e); } };
    if(window.FICHAS_ATLAS && !FICHAS_ATLAS.listo()) FICHAS_ATLAS.esperar(ir); else ir();
  }
  window.addEventListener('hashchange',desdeHash);
  desdeHash();
  window.LEER_VINCULO={abrir,cerrar,analizar,decisiones:()=>DEC};
})();
