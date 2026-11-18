/* =====================================================================
   APRENDER CON EL ATLAS (primera versión, 15-nov-2026)
   ---------------------------------------------------------------------
   Una entrada para estudiar con el atlas sin convertirlo en otra cosa.
   Cinco partes en un mismo panel lateral:
     · Prácticas: seis maneras de investigar, cada una con un botón que
       acciona una función que el atlas ya tiene.
     · Travesías: cuatro recorridos de estudio con pregunta, objetivo,
       pasos y preguntas para discutir. Una tarjeta acompaña los pasos
       sobre el mapa, sin tapar la ficha.
     · Leer las corrientes: qué dice y qué no dice cada trazo.
     · Libreta: notas de cada estudiante, guardadas en su navegador.
     · En clase: movimiento, letra amplia, proyección, tabla y teclado.

   No toca el motor ni los datos. Usa solo funciones que el atlas ya
   expone (openPanel, focusFen, setView, setEvid, setLengua, setCronoModo,
   setTide, enterPresent, rfAbrir, QC_API, LEER_VINCULO) y cifras
   calculadas en vivo sobre el corpus cargado: no hay ningún número
   escrito a mano. Toda obra o vínculo citado aquí existe en el corpus;
   si un día deja de existir, su paso se marca «pendiente» en lugar de
   romperse. Si algo falla, el atlas sigue exactamente como estaba.
   ===================================================================== */
(function(){
  if(typeof openPanel!=='function' || typeof byId!=='function' || typeof state==='undefined') return;

  const en=()=> (typeof LANG!=='undefined' && LANG==='en');
  const L2=(o)=> (o && typeof o==='object' && ('es' in o)) ? (en()? o.en : o.es) : o;
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const el=(tag,cls,html)=>{ const e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e; };
  const LS=(()=>{ try{ const k='__ap'; localStorage.setItem(k,'1'); localStorage.removeItem(k); return localStorage; }catch(e){ return null; } })();
  const leer=(k,d)=>{ try{ const v=LS&&LS.getItem(k); return v?JSON.parse(v):d; }catch(e){ return d; } };
  const guardar=(k,v)=>{ try{ if(LS) LS.setItem(k,JSON.stringify(v)); return !!LS; }catch(e){ return false; } };

  /* ---------- cifras en vivo ---------- */
  const C={
    get obras(){ return N.length; },
    get rel(){ return RELS.length; },
    get pc(){ return RELS.filter(r=>!esCorr(r.a,r.b)).length; },
    get diso(){ return RELS.filter(r=>r.tipo==='disonancia').length; },
    get fric(){ return RELS.filter(r=>r.friccion&&r.friccion.hay===true).length; },
    get fricEval(){ return RELS.filter(r=>r.friccion&&typeof r.friccion==='object').length; },
    fen:f=>N.filter(o=>(o.f||[]).includes(f)).length,
    lugaresFen:f=>new Set(N.filter(o=>(o.f||[]).includes(f)).map(o=>o.l)).size,
    lengua:code=>N.filter(o=>{ let s; try{ s=tradCodes(o); }catch(e){ return false; } return code==='sin'? s.size===0 : s.has(code); }).length,
    get version(){ return (ATLAS.meta&&ATLAS.meta.version)||''; },
    get fecha(){ return (ATLAS.meta&&ATLAS.meta.fecha)||''; }
  };
  const num=n=>en()? String(n) : String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.');
  const pct=(a,b)=>{ const p=b? (100*a/b) : 0; const s=p.toFixed(1); return (en()? s : s.replace('.',','))+' %'; };
  const fechaLarga=iso=>{ const m=String(iso).match(/(\d{4})-(\d{2})-(\d{2})/); if(!m) return iso;
    const MES={es:['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
               en:['January','February','March','April','May','June','July','August','September','October','November','December']};
    const d=+m[3], mes=MES[en()?'en':'es'][+m[2]-1]; return en()? `${mes} ${d}, ${m[1]}` : `${d} de ${mes} de ${m[1]}`; };
  /* la versión depositada no se repite a mano: se lee de la ficha «Cómo citar» del marco */
  function versionZenodo(){
    /* se lee del texto en español: la versión inglesa de esa ficha no nombra la versión depositada */
    let txt=''; try{ txt=String(I18N.es.mc6p||''); }catch(e){}
    if(!txt){ const n=document.querySelector('#marco [data-i18n-html="mc6p"]'); txt=n? n.textContent : ''; }
    const m=txt.match(/(?:depositada|deposited)\s*(?:version\s*)?v?(\d+\.\d+\.\d+)/i);
    return m? m[1] : null;
  }

  /* ---------- textos ---------- */
  const T={
    es:{
      btn:'Aprender con el atlas', btnCorto:'Aprender', cerrar:'Cerrar Aprender con el atlas',
      tit:'Aprender con el atlas',
      intro:'El atlas no da respuestas hechas: ordena obras, fuentes y relaciones para que las preguntas se puedan investigar. Aquí hay maneras de empezar. Nada de esto reemplaza la exploración libre.',
      tabs:{practicas:'Prácticas', travesias:'Travesías', corrientes:'Leer las corrientes', libreta:'Libreta', clase:'En clase'},
      probar:'Probar', abrir:'Abrir',
      empezar:'Empezar la travesía', pregunta:'Pregunta', objetivo:'Objetivo', pasos:'pasos', discutir:'Para discutir',
      travIntro:'Cuatro travesías de estudio. Cada una parte de una pregunta, propone pasos sobre el mapa y termina en preguntas abiertas. No llevan a una conclusión: llevan a un argumento que cada quien tiene que construir. No confundir con «Recorridos», que agrupa las obras en diez corrientes de pensamiento (C1–C10).',
      paso:'Paso', de:'de', mostrar:'Mostrar en el atlas', ant:'Anterior', sig:'Siguiente', salir:'Terminar la travesía', plegar:'Plegar', desplegar:'Desplegar',
      observa:'Observa', final:'Preguntas para discutir', copiarPreg:'Llevar las preguntas a la libreta', llevadas:'Preguntas añadidas a la libreta',
      pendiente:'Pendiente: este paso nombra un dato que el corpus actual ya no tiene. No se muestra hasta revisarlo.',
      versionTxt:(v,f,z)=>`Atlas en funcionamiento: v${v}, ${f}.`+(z?` Última versión depositada en Zenodo: v${z}. Las cifras de esta guía se calculan sobre la versión en funcionamiento.`:''),
      cifrasZ:(v,z)=>`El atlas en funcionamiento va por la v${v}; la versión depositada (v${z}) es la que se cita con DOI de versión.`,
      lib:{tit:'Libreta de travesía', aviso:'Se guarda solo en este navegador y en este equipo. No se envía a ningún servidor ni la ve nadie más. Si se borran los datos del navegador, se borra. Para conservarla o entregarla, cópiala o descárgala.',
        sinAlmacen:'Este navegador no permite guardar datos de la página: la libreta funciona mientras la página siga abierta. Cópiala o descárgala antes de cerrar.',
        pregunta:'Mi pregunta', obras:'Obras consultadas', fuentes:'Fuentes y vínculos', hallazgos:'Hallazgos', dudas:'Dudas', argumento:'Argumento provisional',
        phPregunta:'¿Qué quiero averiguar? Escríbelo antes de buscar.', phHallazgos:'Lo que encontré, con la obra o la fuente que lo sostiene.', phDudas:'Lo que no pude resolver, lo que falta en el atlas, lo que tengo que leer.', phArgumento:'Lo que puedo sostener por ahora, y con qué evidencia.',
        vacioObras:'Todavía ninguna. Desde cualquier ficha: «Anotar en la libreta».', vacioFuentes:'Todavía ninguna. Desde «Leer el vínculo»: «Anotar esta fuente».',
        anotarObra:'Anotar en la libreta', anotada:'En la libreta', anotarFuente:'Anotar esta fuente',
        quitar:'Quitar', copiar:'Copiar como texto', descargar:'Descargar (.md)', vaciar:'Vaciar la libreta', confirmar:'Sí, vaciarla', cancelar:'No',
        copiada:'Libreta copiada', guardada:'Guardado en este navegador', vaciada:'Libreta vaciada', titDoc:'Libreta de travesía · Con el agua de por medio',
        travesia:'Travesía', exportada:'Exportada el'},
      clase:{tit:'En clase', mov:'Movimiento del mapa', movOn:'Detener el movimiento', movOff:'Reanudar el movimiento', movNota:'Con el movimiento detenido, el mapa queda quieto y las corrientes se leen en reposo. El sistema también lo respeta si el equipo pide reducir el movimiento.',
        decidir:'Decidir antes de ver', decidirOn:'Decidir antes de ver: en todas las lecturas', decidirOff:'Decidir antes de ver: solo en las travesías', decidirNota:'En «Leer el vínculo», el estudiante clasifica la relación antes de que el atlas muestre la suya: tipo, si está documentada y dónde estaría la prueba. Luego compara. No hay puntaje, y si difiere puede argumentarlo en el reflujo.',
        letra:'Letra amplia para leer y proyectar', letraOn:'Letra amplia: activada', letraOff:'Letra amplia: desactivada', letraNota:'Agranda el texto de las fichas, de «Leer el vínculo», de esta guía y de la tarjeta de la travesía. El mapa no cambia de escala.',
        pres:'Proyectar en pantalla completa', presNota:'Oculta los controles y deja el mapa. Teclas: 1 corriente, 2 constelación, M marea, ← → fenómenos, 0 despejar, Esc salir. La tarjeta de la travesía sigue visible.',
        tabla:'Ver el corpus como tabla', tablaNota:'La misma información sin mapa: se ordena, se filtra y se lee con lector de pantalla.',
        teclado:'Con el teclado', teclas:['Tab recorre los controles y luego las obras del mapa.','Flechas: de una obra a otra. Intro o espacio: abrir su ficha. Inicio y Fin: primera y última.','Escape cierra lo que esté arriba: lectura, ficha, panel.','En «Leer el vínculo», ← y → pasan al vínculo anterior o siguiente.'],
        citar:'Cada ficha y cada vínculo tienen enlace propio: sirven para señalar en clase exactamente qué se está mirando.'},
      umbral:'¿Primera vez, o en clase? <a href="#" id="apUmbral">Aprender con el atlas</a>',
      guiaAgua:'¿Qué dice cada trazo?'
    },
    en:{
      btn:'Learn with the atlas', btnCorto:'Learn', cerrar:'Close Learn with the atlas',
      tit:'Learn with the atlas',
      intro:'The atlas gives no ready-made answers: it arranges works, sources and relations so that questions can be researched. Here are ways to start. None of this replaces free exploration.',
      tabs:{practicas:'Practices', travesias:'Crossings', corrientes:'Reading the currents', libreta:'Notebook', clase:'In class'},
      probar:'Try it', abrir:'Open',
      empezar:'Start the crossing', pregunta:'Question', objetivo:'Aim', pasos:'steps', discutir:'For discussion',
      travIntro:'Four study crossings. Each starts from a question, proposes steps on the map and ends in open questions. They do not lead to a conclusion: they lead to an argument each person has to build. Not to be confused with “Itineraries”, which groups the works into ten currents of thought (C1–C10).',
      paso:'Step', de:'of', mostrar:'Show it in the atlas', ant:'Previous', sig:'Next', salir:'End the crossing', plegar:'Collapse', desplegar:'Expand',
      observa:'Look at', final:'Questions for discussion', copiarPreg:'Take the questions to the notebook', llevadas:'Questions added to the notebook',
      pendiente:'Pending: this step names something the current corpus no longer has. It stays hidden until reviewed.',
      versionTxt:(v,f,z)=>`Atlas in operation: v${v}, ${f}.`+(z?` Last version deposited in Zenodo: v${z}. The figures in this guide are computed on the version in operation.`:''),
      cifrasZ:(v,z)=>`The atlas in operation is at v${v}; the deposited version (v${z}) is the one cited with a version DOI.`,
      lib:{tit:'Crossing notebook', aviso:'Stored only in this browser on this device. It is not sent to any server and nobody else sees it. Clearing the browser’s data clears it. To keep it or hand it in, copy it or download it.',
        sinAlmacen:'This browser does not let the page store data: the notebook works while the page stays open. Copy or download it before closing.',
        pregunta:'My question', obras:'Works consulted', fuentes:'Sources and links', hallazgos:'Findings', dudas:'Doubts', argumento:'Provisional argument',
        phPregunta:'What do I want to find out? Write it before searching.', phHallazgos:'What I found, with the work or source that supports it.', phDudas:'What I could not settle, what the atlas lacks, what I still have to read.', phArgumento:'What I can hold for now, and on what evidence.',
        vacioObras:'None yet. From any entry: “Note in the notebook”.', vacioFuentes:'None yet. From “Read the link”: “Note this source”.',
        anotarObra:'Note in the notebook', anotada:'In the notebook', anotarFuente:'Note this source',
        quitar:'Remove', copiar:'Copy as text', descargar:'Download (.md)', vaciar:'Empty the notebook', confirmar:'Yes, empty it', cancelar:'No',
        copiada:'Notebook copied', guardada:'Saved in this browser', vaciada:'Notebook emptied', titDoc:'Crossing notebook · With the water in between',
        travesia:'Crossing', exportada:'Exported on'},
      clase:{tit:'In class', mov:'Map movement', movOn:'Stop the movement', movOff:'Resume the movement', movNota:'With movement stopped, the map holds still and the currents can be read at rest. The atlas also honours the device’s reduce-motion setting.',
        decidir:'Decide before looking', decidirOn:'Decide before looking: in every reading', decidirOff:'Decide before looking: only in the crossings', decidirNota:'In “Read the link”, the student classifies the relation before the atlas shows its own: type, whether it is documented and where the evidence would be. Then they compare. There is no score, and if they disagree they can argue it in the reflux.',
        letra:'Large text for reading and projecting', letraOn:'Large text: on', letraOff:'Large text: off', letraNota:'Enlarges the text of the entries, of “Read the link”, of this guide and of the crossing card. The map keeps its scale.',
        pres:'Project in full screen', presNota:'Hides the controls and leaves the map. Keys: 1 current, 2 constellation, M tide, ← → phenomena, 0 clear, Esc exit. The crossing card stays visible.',
        tabla:'See the corpus as a table', tablaNota:'The same information without the map: it sorts, filters and works with a screen reader.',
        teclado:'With the keyboard', teclas:['Tab moves through the controls and then the works on the map.','Arrows: from one work to the next. Enter or space: open its entry. Home and End: first and last.','Escape closes whatever is on top: reading, entry, panel.','In “Read the link”, ← and → move to the previous or next link.'],
        citar:'Every entry and every link has its own address: use them in class to point at exactly what is being looked at.'},
      umbral:'First time, or in class? <a href="#" id="apUmbral">Learn with the atlas</a>',
      guiaAgua:'What does each line say?'
    }
  };
  const tx=k=>{ const d=T[en()?'en':'es']; return k.split('.').reduce((o,p)=>o&&o[p],d); };

  /* ---------- acciones sobre el atlas (solo funciones existentes) ---------- */
  const existe=id=>!!byId(id);
  const hayRel=(a,b)=>!!relDe(a,b);
  function cerrarCapas(salvo){
    try{ if(window.LEER_VINCULO) LEER_VINCULO.cerrar({foco:false}); }catch(e){}
    /* la deriva se cierra con su propio botón, que alterna: solo si la barra está abierta */
    if(salvo!=='deriva'){ const barra=document.querySelector('.dv-barra'), b=document.getElementById('derivaBtn'); if(barra && !barra.hidden && b) try{ b.click(); }catch(e){} }
    if(salvo!=='caribe' && window.QC_API){ try{ QC_API.quitar(); if(typeof cerrarPanelLateral==='function') cerrarPanelLateral('panelCaribes','caribesBtn'); }catch(e){} }
  }
  function vista(v){ if(state.view!==v && typeof setView==='function') setView(v); }
  function conFichas(f){ if(window.FICHAS_ATLAS && !FICHAS_ATLAS.listo()) FICHAS_ATLAS.esperar(f); else f(); }
  const ACC={
    fen(f){ vista('corriente'); if(state.focusFen!==f) focusFen(f); else { state.active=null; ocultarFicha(); } },
    obra(id){ conFichas(()=>openPanel(id)); },
    vinculo([a,b],todo){ conFichas(()=>{ openPanel(a); if(window.LEER_VINCULO) LEER_VINCULO.abrir(a,b,{decidir: !!(todo&&todo.decidir) || !!pref.decidir}); }); },
    caribe(v){
      vista('corriente');
      const h='#caribe='+v;
      if(location.hash===h && window.QC_API){ const [x,y]=v.split('+'); QC_API.activar(x); if(y) QC_API.contrastarCon(y); }
      else { if(window.CAPAS_ATLAS) CAPAS_ATLAS.pedir(); location.hash=h; }
    },
    /* con @definición la deriva entra sin su ventana de ayuda: la tarjeta de la travesía ya explica qué mirar */
    deriva(){ vista('corriente'); if(window.CAPAS_ATLAS) CAPAS_ATLAS.pedir(); const p=(window.QC_API&&QC_API.orden[0])||'arciniegas'; const h='#deriva@'+p; if(location.hash===h) location.hash='#deriva'; location.hash=h; },
    crono([modo,f]){ vista('cronologia'); if(typeof setCronoModo==='function') setCronoModo(modo); if(f && state.focusFen!==f) setFocusFen(f); },
    evid(v){ vista('corriente'); if(typeof setEvid==='function') setEvid(v); },
    lengua(v){ vista('corriente'); if(typeof setLengua==='function') setLengua(v); },
    reflujo(){ if(typeof rfAbrir==='function') rfAbrir(); },
    recorridos(){ if(typeof abrirPanelLateral==='function') abrirPanelLateral('panelRecorridos','recorridosBtn'); },
    libreta(){ abrirPanel('libreta'); },
    guia(){ abrirPanel('corrientes'); }
  };
  /* ¿el dato que nombra la acción sigue en el corpus? */
  function vigente(a){
    if(!a) return true;
    if(a.obra) return existe(a.obra);
    if(a.vinculo) return existe(a.vinculo[0]) && existe(a.vinculo[1]) && hayRel(a.vinculo[0],a.vinculo[1]);
    if(a.fen) return !!(ATLAS.fenomenos||{})[a.fen];
    if(a.crono) return !a.crono[1] || !!(ATLAS.fenomenos||{})[a.crono[1]];
    return true;
  }
  function hacer(a){
    if(!a || !vigente(a)) return;
    const k=Object.keys(a)[0];
    cerrarCapas(k);
    if(!['evid','lengua','reflujo','recorridos','libreta','guia'].includes(k)){
      try{ if(typeof limpiarFiltros==='function' && (state.evid!=='todas'||state.lengua!=='todas'||state.recorrido||state.q)) limpiarFiltros(); }catch(e){}
    } else if(k==='evid'||k==='lengua'){
      try{ if(typeof limpiarFiltros==='function') limpiarFiltros(); }catch(e){}
    }
    try{ ACC[k](a[k], a); }catch(e){ console.warn('[aprender] la acción no pudo completarse:',e); }
  }

  /* ---------- prácticas ---------- */
  const PRACTICAS=[
    {t:{es:'Explorar un fenómeno',en:'Explore a phenomenon'},
     d:{es:'Elige un fenómeno en la columna «Fenómenos». Se encienden las obras que lo trabajan y aparece su guion. Mira dónde se concentran y qué orillas quedan a oscuras.',
        en:'Choose a phenomenon in the “Phenomena” column. The works that address it light up and its script appears. Look at where they cluster and which shores stay dark.'},
     b:{es:'Probar con Cimarronaje / fuga',en:'Try Marronage / flight'}, a:{fen:'cimarronaje'}},
    {t:{es:'Abrir y comparar obras',en:'Open and compare works'},
     d:{es:'Toca una obra para abrir su ficha: aporte, lugar, lengua y conexiones. Bajo cada conexión directa, «Leer el vínculo» pone las dos obras frente a frente con la prueba en medio.',
        en:'Tap a work to open its entry: contribution, place, language and connections. Under each direct connection, “Read the link” sets the two works face to face with the evidence between them.'},
     b:{es:'Abrir La isla que se repite',en:'Open The Repeating Island'}, a:{obra:'benitez'}},
    {t:{es:'Seguir una corriente',en:'Follow a current'},
     d:{es:'Cada corriente une dos obras. Desde una ficha, abre la obra del otro lado y sigue: la ficha guarda el camino («Volver a…»). Para mirar una de las diez agrupaciones de pensamiento del atlas, usa «Recorridos».',
        en:'Each current joins two works. From an entry, open the work on the other side and keep going: the entry keeps the path (“Back to…”). To look at one of the atlas’s ten groupings of thought, use “Itineraries”.'},
     b:{es:'Abrir Recorridos',en:'Open Itineraries'}, a:{recorridos:true}},
    {t:{es:'Consultar la evidencia',en:'Check the evidence'},
     d:{es:'La fuente de cada vínculo dice dónde está la prueba: en el cuerpo del texto, en una nota o en la bibliografía, con su página. «El calado» lo muestra de un vistazo.',
        en:'The source of each link says where the evidence sits: in the body of the text, in a note or in the bibliography, with its page. “The draught” shows it at a glance.'},
     b:{es:'Ver un ejemplo: Besson sobre Mintz',en:'See an example: Besson on Mintz'}, a:{vinculo:['besson','mintz']}},
    {t:{es:'Corroborada o por corroborar',en:'Corroborated or to be corroborated'},
     d:()=>en()? `Corroborated: the reference was located in a copy of the work. To be corroborated: the link is proposed, the passage is missing. Today ${num(C.pc)} of ${num(C.rel)} relations (${pct(C.pc,C.rel)}) are still pending.`
                : `Corroborada: la referencia se localizó en un ejemplar. Por corroborar: el vínculo se propone y falta el pasaje. Hoy siguen pendientes ${num(C.pc)} de ${num(C.rel)} relaciones (${pct(C.pc,C.rel)}).`,
     b:{es:'Mostrar solo las pendientes',en:'Show only the pending ones'}, a:{evid:'pc'},
     b2:{es:'Leer las corrientes',en:'Reading the currents'}, a2:{guia:true}},
    {t:{es:'Formular una pregunta propia',en:'Ask a question of your own'},
     d:{es:'Escribe la pregunta antes de buscar y vuelve a ella al final: ¿la respondiste, la cambiaste, la desplazaste? La libreta guarda obras, fuentes, hallazgos, dudas y un argumento provisional.',
        en:'Write the question before searching and return to it at the end: did you answer it, change it, displace it? The notebook keeps works, sources, findings, doubts and a provisional argument.'},
     b:{es:'Abrir la libreta',en:'Open the notebook'}, a:{libreta:true}}
  ];

  /* ---------- guía para leer las corrientes ---------- */
  const CORRIENTES=[
    {k:'loc', trazo:'corr',
     t:{es:'Una referencia localizada',en:'A located reference'},
     d:{es:'El atlas encontró en el ejemplar la mención de la otra obra: una cita en el cuerpo, una nota o una entrada de bibliografía. Dice que hubo contacto. No dice todavía qué hace una obra con la otra.',
        en:'The atlas found the mention of the other work in the copy: a quotation in the body, a note or a bibliography entry. It says there was contact. It does not yet say what one work does with the other.'},
     ej:{es:'Lara cita a Reddock en su bibliografía',en:'Lara cites Reddock in her bibliography'}, a:{vinculo:['larastreetwalking','reddock']}},
    {k:'sentido', trazo:'corr',
     t:{es:'El sentido de una relación',en:'The meaning of a relation'},
     d:{es:'Es la lectura: qué toma, discute o desplaza una obra de la otra. Es interpretación, y en el atlas se escribe en la fuente, con su pasaje cuando lo hay. Que una relación esté corroborada no quiere decir que su sentido ya esté interpretado.',
        en:'It is the reading: what one work takes from, disputes in or displaces in the other. It is interpretation, and the atlas writes it in the source, with its passage when there is one. A corroborated relation is not thereby an interpreted one.'},
     ej:{es:'Besson y Mintz: un pasaje en el cuerpo del texto',en:'Besson and Mintz: a passage in the body of the text'}, a:{vinculo:['besson','mintz']}},
    {k:'pc', trazo:'pend',
     t:{es:'Una relación por corroborar',en:'A relation to be corroborated'},
     d:()=>en()? `The link is proposed by argument or affinity, but the atlas does not yet have the passage. On the map it flows in stretches. It is an open hypothesis, and anyone can bring the source through the reflux. Pending today: ${num(C.pc)} of ${num(C.rel)}.`
                : `El vínculo se propone por argumento o afinidad, pero el atlas todavía no tiene el pasaje. En el mapa fluye a tramos. Es una hipótesis abierta y cualquiera puede aportar la fuente por el reflujo. Pendientes hoy: ${num(C.pc)} de ${num(C.rel)}.`,
     ej:{es:'Benítez Rojo y Ortiz',en:'Benítez Rojo and Ortiz'}, a:{vinculo:['benitez','ortiz']}},
    {k:'reso', trazo:'corr',
     t:{es:'Resonancia',en:'Resonance'},
     d:{es:'Una idea continúa, amplifica o hereda a otra sin fundirse con ella. La mayoría de las corrientes del atlas son resonancias.',
        en:'One idea continues, amplifies or inherits another without merging into it. Most of the atlas’s currents are resonances.'},
     ej:{es:'Best y Levitt parten de Williams',en:'Best and Levitt start from Williams'}, a:{vinculo:['bestlevitt','williamscapitalismo']}},
    {k:'diso', trazo:'diso',
     t:{es:'Disonancia',en:'Dissonance'},
     d:()=>en()? `One work argues against what the other holds. On the map it runs against the current. Its existence does not yet say what effect it has: that is analysed case by case. The atlas records ${num(C.diso)} among ${num(C.rel)} relations.`
                : `Una obra tensiona de forma argumentada lo que la otra sostiene. En el mapa va a contracorriente. Que exista no dice todavía qué efecto tiene: eso se analiza caso por caso. El atlas registra ${num(C.diso)} entre ${num(C.rel)} relaciones.`,
     ej:{es:'Glissant frente a la créolité',en:'Glissant against créolité'}, a:{vinculo:['glissant','creolite']}},
    {k:'fric', trazo:'diso',
     t:{es:'Fricción epistémica',en:'Epistemic friction'},
     d:()=>en()? `A framework of knowledge meets a resistance that reveals its limits and can transform it (Medina, reworked by Monahan). It is a second axis over a relation, not a third type, and it is declared only with an argument. Declared: ${num(C.fric)} among ${num(C.fricEval)} relations assessed.`
                : `Un marco de conocimiento choca con una resistencia que revela sus límites y puede transformarlo (Medina, reelaborado por Monahan). Es un segundo eje sobre la relación, no un tercer tipo, y solo se declara con argumento. Declaradas: ${num(C.fric)} entre ${num(C.fricEval)} relaciones evaluadas.`,
     ej:{es:'Bassi frente a Benítez Rojo',en:'Bassi against Benítez Rojo'}, a:{vinculo:['bassiacuoso','benitez']}},
    {k:'cruce', trazo:'cruce',
     t:{es:'Cruce lingüístico no es fricción',en:'A linguistic crossing is not friction'},
     d:{es:'La cruz del mapa marca que las dos obras vienen de tradiciones de lengua distintas. Es un dato de procedencia. La fricción exige argumento: dos obras en lenguas distintas pueden no rozarse, y dos en la misma lengua pueden chocar.',
        en:'The cross on the map marks that the two works come from different language traditions. It is a fact of provenance. Friction requires an argument: two works in different languages may not rub at all, and two in the same language may collide.'},
     ej:{es:'Trouillot y Mintz: cruce lingüístico, evaluado sin fricción',en:'Trouillot and Mintz: a linguistic crossing, assessed without friction'}, a:{vinculo:['trouillot','mintz']}}
  ];

  /* ---------- travesías (solo obras, vínculos y funciones verificados en el corpus) ---------- */
  const TRAVESIAS=[
    {id:'caribe',
     t:{es:'¿Qué es el Caribe?',en:'What is the Caribbean?'},
     p:{es:'¿Dónde empieza y dónde termina el Caribe, y con qué criterio se decide?',en:'Where does the Caribbean begin and end, and by what criterion is that decided?'},
     o:{es:'Contrastar definiciones del Caribe sobre el mismo mapa y observar qué lugares incluye cada una, cuáles deja al margen, cuáles disputa y cuáles calla.',
        en:'Contrast definitions of the Caribbean on the same map and observe which places each one includes, which it leaves at the margin, which it disputes and which it passes over.'},
     pasos:[
      {t:{es:'El Caribe insular según Girvan: «las islas, las tres Guyanas y Belice».',en:'Girvan’s insular Caribbean: “the islands, the three Guianas and Belize”.'},
       o:{es:'Qué orillas continentales quedan fuera. Dónde queda la costa colombiana.',en:'Which mainland shores are left out. Where the Colombian coast falls.'}, a:{caribe:'girvan-insular'}},
      {t:{es:'Dos Caribes en un mismo texto: el insular frente a la Cuenca, ambos en Girvan.',en:'Two Caribbeans in one text: the insular against the Basin, both in Girvan.'},
       o:{es:'Qué lugares cambian de estado al pasar de un criterio al otro. Un mismo autor puede sostener definiciones que se contradicen.',en:'Which places change state when you move from one criterion to the other. One author can hold definitions that contradict each other.'}, a:{caribe:'girvan-insular+girvan-cuenca'}},
      {t:{es:'El Caribe cultural de Benítez Rojo, que se fuga del marco.',en:'Benítez Rojo’s cultural Caribbean, which escapes the frame.'},
       o:{es:'Las fugas hacia fuera del mapa. Qué pasa con la idea de frontera cuando la definición es cultural.',en:'The escapes beyond the map. What happens to the idea of a border when the definition is cultural.'}, a:{caribe:'benitez'}},
      {t:{es:'Desde la costa colombiana: La isla encallada de Abello Vives.',en:'From the Colombian coast: Abello Vives’s stranded island.'},
       o:{es:'Cómo se ve el Caribe desde la costa colombiana: qué lugares quedan dentro, cuáles al margen y cuáles en disputa.',en:'How the Caribbean looks from the Colombian coast: which places are inside, which at the margin and which in dispute.'}, a:{caribe:'abello'}},
      {t:{es:'El Caribe de este atlas: entra un lugar cuando lo atraviesa una corriente.',en:'This atlas’s Caribbean: a place enters when a current runs through it.'},
       o:{es:'Qué lugar queda sin estado y por qué. Abre su nota en la capa: el atlas declara su propio silencio.',en:'Which place is left without a state, and why. Open its note in the layer: the atlas declares its own silence.'}, a:{caribe:'atlas'}},
      {t:{es:'La deriva: todas las definiciones, una tras otra en el tiempo.',en:'The drift: all the definitions, one after another in time.'},
       o:{es:'Qué lugares cambian de estado más veces. Qué lugar no cambia nunca.',en:'Which places change state most often. Which place never changes.'}, a:{deriva:true}}
     ],
     disc:{es:['¿Qué criterio usa cada definición: la geografía, la historia de la plantación, la cultura, la pertenencia a un organismo?','¿Quién decide que un lugar está «al margen»? ¿Desde dónde se mira el mapa en cada caso?','¿Qué gana y qué pierde el atlas al definir el Caribe por fenómenos y no por área?','¿Qué orilla de tu propia experiencia no aparece en ninguna definición?'],
           en:['What criterion does each definition use: geography, the history of the plantation, culture, membership in an organisation?','Who decides that a place is “at the margin”? From where is the map seen in each case?','What does the atlas gain and lose by defining the Caribbean by phenomena rather than by area?','Which shore of your own experience appears in no definition?']}},
    {id:'plantacion',
     t:{es:'Plantación y postplantación',en:'Plantation and post-plantation'},
     p:{es:'¿Es la plantación un pasado común del Caribe o una estructura que persiste, de maneras distintas, en cada orilla?',en:'Is the plantation a shared Caribbean past, or a structure that persists, in different ways, on each shore?'},
     o:{es:'Relacionar procesos históricos entre orillas sin borrar sus diferencias: azúcar y banano, isla y costa, esclavitud y trabajo asalariado.',
        en:'Relate historical processes across shores without erasing their differences: sugar and bananas, island and coast, slavery and wage labour.'},
     pasos:[
      {t:()=>en()? `Light up the Post-plantation phenomenon: ${num(C.fen('postplantacion'))} works across ${num(C.lugaresFen('postplantacion'))} places.` : `Enciende el fenómeno Postplantación: ${num(C.fen('postplantacion'))} obras en ${num(C.lugaresFen('postplantacion'))} lugares.`,
       o:{es:'Dónde se concentran las obras y qué orillas casi no aparecen. Lee el guion del fenómeno.',en:'Where the works cluster and which shores barely appear. Read the phenomenon’s script.'}, a:{fen:'postplantacion'}},
      {t:{es:'Abre Capitalismo y esclavitud, de Eric Williams.',en:'Open Eric Williams’s Capitalism and Slavery.'},
       o:{es:'Cuántas obras dialogan con ella y desde qué lenguas.',en:'How many works are in dialogue with it, and from which languages.'}, a:{obra:'williamscapitalismo'}},
      {t:{es:'Lee el vínculo entre el New World Group (Best y Levitt) y Williams.',en:'Read the link between the New World Group (Best and Levitt) and Williams.'},
       o:{es:'Qué dice la fuente sobre la plantación como estructura que la independencia no superó. Dónde está la prueba.',en:'What the source says about the plantation as a structure independence did not overcome. Where the evidence sits.'}, a:{vinculo:['bestlevitt','williamscapitalismo']}},
      {t:{es:'Lee el vínculo entre Besson y Beckford, Persistent Poverty.',en:'Read the link between Besson and Beckford’s Persistent Poverty.'},
       o:{es:'Cómo una etnografía de Jamaica lee una teoría económica. Qué toma y qué discute.',en:'How an ethnography of Jamaica reads an economic theory. What it takes and what it disputes.'}, a:{vinculo:['beckfordpersistent','besson']}},
      {t:{es:'Cruza a la costa colombiana: la Zona Bananera y La isla encallada.',en:'Cross to the Colombian coast: the Banana Zone and The Stranded Island.'},
       o:{es:'El enclave bananero frente a la plantación azucarera. Qué se parece y qué no.',en:'The banana enclave against the sugar plantation. What is alike and what is not.'}, a:{vinculo:['zonabananera','abello']}},
      {t:{es:'Pasa a Cronología y ordena por periodo estudiado, con Postplantación encendida.',en:'Go to Chronology and sort by period studied, with Post-plantation lit.'},
       o:{es:'La distancia entre cuándo se escribió cada obra y qué tiempo estudia. Qué épocas tienen pocas obras.',en:'The gap between when each work was written and which time it studies. Which periods have few works.'}, a:{crono:['investigado','postplantacion']}}
     ],
     disc:{es:['¿Qué diferencia hay entre la plantación azucarera de las Antillas y el enclave bananero del Magdalena? ¿Alcanza la misma palabra para las dos?','El prefijo «post» ¿supone un después? ¿Qué persiste en las obras que leíste?','¿Por qué las orillas hispanas del continente aparecen menos en este fenómeno? ¿Es un rasgo de la historia o del corpus?','¿Qué obra o qué fuente le falta al atlas para responder mejor tu pregunta?'],
           en:['What is the difference between the Antillean sugar plantation and the Magdalena banana enclave? Does the same word serve for both?','Does the prefix “post” assume an “after”? What persists in the works you read?','Why do the Hispanic mainland shores appear less in this phenomenon? Is it a feature of the history or of the corpus?','Which work or source is the atlas missing to answer your question better?']}},
    {id:'ideas',
     t:{es:'¿Cómo se conectan las ideas?',en:'How do ideas connect?'},
     p:{es:'¿Qué hace falta para afirmar que una obra dialoga con otra?',en:'What does it take to claim that one work is in dialogue with another?'},
     o:{es:'Examinar distintos tipos de evidencia y distinguir lo que cada uno permite concluir: no es lo mismo una cita discutida en el texto que una entrada de bibliografía, ni una afinidad argumentada que un pasaje.',
        en:'Examine different kinds of evidence and tell apart what each lets you conclude: a quotation discussed in the text is not a bibliography entry, and an argued affinity is not a passage.'},
     pasos:[
      {t:{es:'Primer vínculo: Besson y Mintz.',en:'First link: Besson and Mintz.'},
       o:{es:'Decide antes de ver: qué tipo de relación es, si está documentada y dónde estaría la prueba. Luego compara con el atlas y lee el pasaje.',en:'Decide before looking: what kind of relation it is, whether it is documented and where the evidence would be. Then compare with the atlas and read the passage.'}, a:{vinculo:['besson','mintz'],decidir:true}},
      {t:{es:'Segundo vínculo: Lara y Reddock.',en:'Second link: Lara and Reddock.'},
       o:{es:'Decide, compara y pregúntate qué prueba lo que encontró el atlas y qué no prueba.',en:'Decide, compare and ask yourself what the atlas’s finding proves and what it does not.'}, a:{vinculo:['larastreetwalking','reddock'],decidir:true}},
      {t:{es:'Tercer vínculo: Girvan y The Thought of New World.',en:'Third link: Girvan and The Thought of New World.'},
       o:{es:'Decide y compara. Fíjate en por qué el atlas admite este vínculo y en lo que no dice.',en:'Decide and compare. Notice why the atlas admits this link and what it does not say.'}, a:{vinculo:['girvanreinterpretar','meeksgirvannewworld'],decidir:true}},
      {t:{es:'Cuarto vínculo: Benítez Rojo y Ortiz.',en:'Fourth link: Benítez Rojo and Ortiz.'},
       o:{es:'Decide y compara. Si el atlas no tiene el pasaje, piensa qué habría que leer para tenerlo.',en:'Decide and compare. If the atlas lacks the passage, think about what would have to be read to get it.'}, a:{vinculo:['benitez','ortiz'],decidir:true}},
      {t:{es:'Quinto vínculo: Trouillot y Mintz.',en:'Fifth link: Trouillot and Mintz.'},
       o:{es:'Decide y compara. ¿Más páginas citadas quieren decir un vínculo más fuerte, o solo más visible?',en:'Decide and compare. Do more pages cited mean a stronger link, or only a more visible one?'}, a:{vinculo:['trouillot','mintz'],decidir:true}}
     ],
     disc:{es:['¿En qué coincidiste con el atlas y en qué no? Revisa tus lecturas en la libreta.','Ordena los cinco vínculos según lo que permiten afirmar. ¿Qué criterio usaste?','¿Dónde termina la evidencia y empieza la interpretación en cada caso?','Si tuvieras que corroborar el vínculo entre Benítez Rojo y Ortiz, ¿qué harías y qué aportarías por el reflujo?','¿Qué riesgos tiene un mapa que dibuja con el mismo trazo una cita en el cuerpo y una entrada de bibliografía?'],
           en:['Where did you agree with the atlas, and where not? Review your readings in the notebook.','Rank the five links by what they allow you to claim. What criterion did you use?','Where does evidence end and interpretation begin in each case?','If you had to corroborate the link between Benítez Rojo and Ortiz, what would you do and what would you bring through the reflux?','What are the risks of a map that draws a quotation in the body and a bibliography entry with the same line?']}},
    {id:'silencios',
     t:{es:'Disonancias y silencios',en:'Dissonances and silences'},
     p:{es:'¿Qué desacuerdos puede ver el atlas y qué ausencias no puede ver todavía?',en:'Which disagreements can the atlas see, and which absences can it not see yet?'},
     o:{es:'Reconocer tensiones, asimetrías e incertidumbres en el corpus, y distinguir las que vienen de la historia de las que vienen del archivo y del método.',
        en:'Recognise tensions, asymmetries and uncertainties in the corpus, and tell apart those that come from history from those that come from the archive and the method.'},
     pasos:[
      {t:{es:'Glissant y el Éloge de la créolité.',en:'Glissant and the Éloge de la créolité.'},
       o:{es:'Decide antes de ver y compara. Después: qué rechaza Glissant y con qué palabras. ¿El desacuerdo cancela el diálogo?',en:'Decide before looking and compare. Then: what Glissant rejects and in what words. Does the disagreement cancel the dialogue?'}, a:{vinculo:['glissant','creolite'],decidir:true}},
      {t:{es:'Bassi y Benítez Rojo.',en:'Bassi and Benítez Rojo.'},
       o:{es:'Decide y compara. Después lee el argumento de la fricción: el propio atlas dice que la objeción es discutible. ¿Por qué?',en:'Decide and compare. Then read the friction’s argument: the atlas itself says the objection is debatable. Why?'}, a:{vinculo:['bassiacuoso','benitez'],decidir:true}},
      {t:{es:'Mintz y Ortiz.',en:'Mintz and Ortiz.'},
       o:{es:'Decide y compara. Después: el atlas habla de «tensión de énfasis». ¿Es una disonancia o una diferencia? ¿Qué haría falta para saberlo?',en:'Decide and compare. Then: the atlas speaks of “a tension of emphasis”. Is it a dissonance or a difference? What would it take to know?'}, a:{vinculo:['mintz','ortiz'],decidir:true}},
      {t:()=>en()? `Show only the relations to be corroborated: ${num(C.pc)} of ${num(C.rel)}.` : `Muestra solo las relaciones por corroborar: ${num(C.pc)} de ${num(C.rel)}.`,
       o:{es:'Dónde se acumula la incertidumbre del mapa.',en:'Where the map’s uncertainty piles up.'}, a:{evid:'pc'}},
      {t:()=>en()? `Filter by language. English-language works: ${num(C.lengua('ang'))}; Portuguese: ${num(C.lengua('lus'))}; undeclared: ${num(C.lengua('sin'))}.` : `Filtra por lengua. Obras anglófonas: ${num(C.lengua('ang'))}; lusófonas: ${num(C.lengua('lus'))}; sin lengua declarada: ${num(C.lengua('sin'))}.`,
       o:{es:'El paso enciende «Sin declarar»; prueba luego las demás lenguas en Filtros. Qué voces del Caribe quedan casi fuera.',en:'The step turns on “Undeclared”; then try the other languages in Filters. Which Caribbean voices are almost left out.'}, a:{lengua:'sin'}},
      {t:()=>en()? `Light up Climate catastrophes: ${num(C.fen('catastrofes'))} works, the thinnest phenomenon in the corpus.` : `Enciende Catástrofes climáticas: ${num(C.fen('catastrofes'))} obras, el fenómeno más delgado del corpus.`,
       o:{es:'¿Es un silencio del Caribe o del archivo que el atlas ha podido leer?',en:'Is it a silence of the Caribbean or of the archive the atlas has been able to read?'}, a:{fen:'catastrofes'}},
      {t:{es:'Abre el reflujo: el lugar para proponer una obra ausente o una fuente que falta.',en:'Open the reflux: the place to propose a missing work or a missing source.'},
       o:{es:'Qué tendrías que aportar para que tu propuesta entre: fuente verificable y argumento.',en:'What you would have to bring for your proposal to enter: a verifiable source and an argument.'}, a:{reflujo:true}}
     ],
     disc:{es:[()=>`El atlas registra ${num(C.diso)} disonancias entre ${num(C.rel)} relaciones. La metodología lo atribuye en parte a que es más fácil verificar una herencia que una tensión deliberada. ¿Qué otras razones se te ocurren?`,'¿Qué diferencia hay entre un desacuerdo y un silencio? ¿Cómo se representa cada uno en un mapa?','¿Qué orillas, lenguas o voces faltan, y qué tendría que pasar para que entren?','¿Qué responsabilidad tiene quien hace un atlas frente a lo que su archivo no contiene?'],
           en:[()=>`The atlas records ${num(C.diso)} dissonances among ${num(C.rel)} relations. The methodology attributes this partly to the fact that inheritance is easier to verify in a text than deliberate tension. What other reasons can you think of?`,'What is the difference between a disagreement and a silence? How is each represented on a map?','Which shores, languages or voices are missing, and what would have to happen for them to enter?','What responsibility does an atlas-maker have towards what the archive does not contain?']}}
  ];

  /* ---------- libreta: vive en js/libreta-atlas.js ---------- */
  const LIBRETA=window.LIBRETA_ATLAS||null;

  /* ---------- estado de la interfaz ---------- */
  const KP='atlas-aprender-v1';
  const pref=Object.assign({letra:false, decidir:false, tab:'practicas'}, leer(KP,{}));
  window.LV_DECIDIR_SIEMPRE=!!pref.decidir;
  const guardarPref=()=>guardar(KP,pref);
  let guia=null; /* {t, i, plegada} */

  /* ---------- botón de cabecera y panel ---------- */
  const controls=document.querySelector('header .controls'); if(!controls) return;
  const grp=el('div','grp familia ap-grp'); const seg=el('div','seg base');
  const btn=el('button','ap-btn'); btn.id='aprenderBtn'; btn.type='button'; btn.setAttribute('aria-expanded','false'); btn.setAttribute('aria-controls','panelAprender');
  seg.append(btn); grp.append(seg);
  const infoGrp=document.getElementById('infoBtn'); const ancla=infoGrp? infoGrp.closest('.grp') : null;
  if(ancla) controls.insertBefore(grp,ancla); else controls.append(grp);

  const panel=el('aside','panelLateral ap-panel'); panel.id='panelAprender'; panel.hidden=true;
  (document.getElementById('main-content')||document.body).append(panel);
  const vivo=el('div','visually-hidden'); vivo.setAttribute('role','status'); vivo.setAttribute('aria-live','polite'); document.body.append(vivo);
  function avisar(m){ vivo.textContent=''; setTimeout(()=>{ vivo.textContent=m; },30); const a=document.querySelector('#panelAprender .ap-aviso'); if(a){ a.textContent=m; clearTimeout(a._t); a._t=setTimeout(()=>{ a.textContent=''; },2600); } }

  if(typeof PANELES_LATERALES!=='undefined') PANELES_LATERALES.push(['panelAprender','aprenderBtn']);
  function abrirPanel(tab){
    if(tab){ pref.tab=tab; guardarPref(); }
    pintarPanel();
    if(panel.hidden){ if(typeof abrirPanelLateral==='function') abrirPanelLateral('panelAprender','aprenderBtn'); else { panel.hidden=false; btn.setAttribute('aria-expanded','true'); } }
    const t=panel.querySelector('.ap-tabs [aria-pressed="true"]'); if(t) t.focus();
  }
  function cerrarPanel(){ if(typeof cerrarPanelLateral==='function') cerrarPanelLateral('panelAprender','aprenderBtn'); else { panel.hidden=true; btn.setAttribute('aria-expanded','false'); } }
  btn.addEventListener('click',()=>{ if(panel.hidden) abrirPanel(); else cerrarPanel(); });
  panel.addEventListener('keydown',ev=>{ if(ev.key==='Escape' && !ev.target.closest('textarea')){ ev.stopPropagation(); cerrarPanel(); } });

  const TRAZO={
    corr:'<svg class="ap-trazo" viewBox="0 0 44 10" aria-hidden="true"><path class="t-corr" d="M2 5 Q22 0 42 5"/></svg>',
    pend:'<svg class="ap-trazo" viewBox="0 0 44 10" aria-hidden="true"><path class="t-pend" d="M2 5 Q22 0 42 5"/></svg>',
    diso:'<svg class="ap-trazo" viewBox="0 0 44 10" aria-hidden="true"><path class="t-diso" d="M2 5 Q22 0 42 5"/></svg>',
    cruce:'<svg class="ap-trazo" viewBox="0 0 44 10" aria-hidden="true"><path class="t-corr" d="M2 5 Q22 0 42 5"/><path class="t-x" d="M18 0 L26 8 M26 0 L18 8"/></svg>'
  };
  const accBtn=(a,label,cls)=> `<button type="button" class="ap-acc${cls?' '+cls:''}" data-acc='${esc(JSON.stringify(a))}'${vigente(a)?'':' disabled'}>${esc(label)} →</button>${vigente(a)?'':`<span class="ap-pend">${esc(tx('pendiente'))}</span>`}`;

  function pintarPanel(){
    const tabs=['practicas','travesias','corrientes','libreta','clase'];
    if(!tabs.includes(pref.tab)) pref.tab='practicas';
    let cuerpo='';
    if(pref.tab==='practicas'){
      cuerpo=`<p class="ap-intro">${esc(tx('intro'))}</p><ol class="ap-practicas">`+PRACTICAS.map(p=>`<li><h3>${esc(L2(p.t))}</h3><p>${esc(typeof p.d==='function'?p.d():L2(p.d))}</p><div class="ap-fila">${accBtn(p.a,L2(p.b))}${p.a2?accBtn(p.a2,L2(p.b2),'sec'):''}</div></li>`).join('')+'</ol>';
    } else if(pref.tab==='travesias'){
      cuerpo=`<p class="ap-intro">${esc(tx('travIntro'))}</p>`+TRAVESIAS.map(t=>{
        const ok=t.pasos.filter(p=>vigente(p.a)).length;
        return `<article class="ap-trav"><h3>${esc(L2(t.t))}</h3><p class="ap-preg"><span>${esc(tx('pregunta'))}</span>${esc(L2(t.p))}</p><p class="ap-obj"><span>${esc(tx('objetivo'))}</span>${esc(L2(t.o))}</p><div class="ap-fila"><button type="button" class="ap-acc" data-trav="${t.id}">${esc(tx('empezar'))} →</button><span class="ap-n">${ok} ${esc(tx('pasos'))}</span></div></article>`; }).join('');
    } else if(pref.tab==='corrientes'){
      cuerpo=`<ul class="ap-corr">`+CORRIENTES.map(c=>`<li class="ap-c-${c.k}"><h3>${TRAZO[c.trazo]}${esc(L2(c.t))}</h3><p>${esc(typeof c.d==='function'?c.d():L2(c.d))}</p><div class="ap-fila">${accBtn(c.a,L2(c.ej),'sec')}</div></li>`).join('')+'</ul>';
    } else if(pref.tab==='libreta'){
      cuerpo= LIBRETA? '<div class="ap-lib"></div>' : `<p class="ap-intro">—</p>`;
    } else {
      const K=T[en()?'en':'es'].clase;
      cuerpo=`<div class="ap-clase">
        <section><h3>${esc(K.mov)}</h3><button type="button" class="ap-acc" data-clase="mov" aria-pressed="${state.tide?'false':'true'}">${esc(state.tide?K.movOn:K.movOff)}</button><p>${esc(K.movNota)}</p></section>
        <section><h3>${esc(K.decidir)}</h3><button type="button" class="ap-acc" data-clase="decidir" aria-pressed="${pref.decidir?'true':'false'}">${esc(pref.decidir?K.decidirOn:K.decidirOff)}</button><p>${esc(K.decidirNota)}</p></section>
        <section><h3>${esc(K.letra)}</h3><button type="button" class="ap-acc" data-clase="letra" aria-pressed="${pref.letra?'true':'false'}">${esc(pref.letra?K.letraOn:K.letraOff)}</button><p>${esc(K.letraNota)}</p></section>
        <section><h3>${esc(K.pres)}</h3><button type="button" class="ap-acc" data-clase="pres">${esc(K.pres)} →</button><p>${esc(K.presNota)}</p></section>
        <section><h3>${esc(K.tabla)}</h3><button type="button" class="ap-acc" data-clase="tabla">${esc(K.tabla)} →</button><p>${esc(K.tablaNota)}</p></section>
        <section><h3>${esc(K.teclado)}</h3><ul class="ap-teclas">${K.teclas.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p>${esc(K.citar)}</p></section></div>`;
    }
    const z=versionZenodo();
    panel.innerHTML=`<button type="button" class="panelCerrar ap-x" aria-label="${esc(tx('cerrar'))}">×</button>
      <h2>${esc(tx('tit'))}</h2>
      <div class="ap-tabs" role="group" aria-label="${esc(tx('tit'))}">${tabs.map(k=>`<button type="button" data-tab="${k}" aria-pressed="${pref.tab===k}">${esc(tx('tabs.'+k))}</button>`).join('')}</div>
      <div class="ap-cuerpo">${cuerpo}</div>
      <p class="ap-aviso" role="status" aria-live="polite"></p>
      <p class="ap-version">${esc(tx('versionTxt')(C.version, fechaLarga(C.fecha), z && z!==C.version ? z : null))}</p>`;
    if(pref.tab==='libreta' && LIBRETA) LIBRETA.pintarEn(panel.querySelector('.ap-lib'),{avisar, ir:a=>{ cerrarPanel(); hacer(a); }, cerrar:cerrarPanel});
  }
  panel.addEventListener('click',ev=>{
    const b=ev.target.closest('button,a'); if(!b) return;
    if(b.closest('.ap-lib')) return;
    if(b.classList.contains('ap-x')){ cerrarPanel(); return; }
    if(b.dataset.tab){ pref.tab=b.dataset.tab; guardarPref(); pintarPanel(); const t=panel.querySelector(`[data-tab="${b.dataset.tab}"]`); if(t) t.focus(); return; }
    if(b.dataset.acc){ const a=JSON.parse(b.dataset.acc); const k=Object.keys(a)[0]; if(!['libreta','guia','recorridos'].includes(k)) cerrarPanel(); hacer(a); return; }
    if(b.dataset.trav){ iniciar(b.dataset.trav); return; }
    if(b.dataset.clase==='mov'){ if(typeof setTide==='function') setTide(!state.tide); pintarPanel(); const f=panel.querySelector('[data-clase="mov"]'); if(f) f.focus(); return; }
    if(b.dataset.clase==='decidir'){ pref.decidir=!pref.decidir; window.LV_DECIDIR_SIEMPRE=pref.decidir; guardarPref(); pintarPanel(); const f=panel.querySelector('[data-clase="decidir"]'); if(f) f.focus(); return; }
    if(b.dataset.clase==='letra'){ pref.letra=!pref.letra; guardarPref(); aplicarLetra(); pintarPanel(); const f=panel.querySelector('[data-clase="letra"]'); if(f) f.focus(); return; }
    if(b.dataset.clase==='pres'){ cerrarPanel(); if(typeof enterPresent==='function') enterPresent(); return; }
    if(b.dataset.clase==='tabla'){ cerrarPanel(); if(typeof setView==='function') setView('tabla'); return; }
  });
  function aplicarLetra(){ document.body.classList.toggle('ap-letra', !!pref.letra); }
  aplicarLetra();

  /* ---------- la tarjeta de la travesía ---------- */
  const card=el('section','ap-guia'); card.id='apGuia'; card.hidden=true; card.setAttribute('role','region');
  (document.getElementById('main-content')||document.body).append(card);
  function iniciar(id){
    const t=TRAVESIAS.find(x=>x.id===id); if(!t) return;
    guia={t, i:0, plegada:false}; if(LIBRETA) LIBRETA.fijarTravesia(id);
    cerrarPanel(); pintarGuia(); card.hidden=false; document.body.classList.add('ap-guiando');
    const h=card.querySelector('.ap-g-paso'); if(h) h.focus();
  }
  function pasosVivos(){ return guia? guia.t.pasos : []; }
  function pintarGuia(){
    if(!guia){ card.hidden=true; document.body.classList.remove('ap-guiando'); return; }
    const t=guia.t, P=pasosVivos(), n=P.length, fin=guia.i>=n;
    card.setAttribute('aria-label',L2(t.t));
    card.classList.toggle('plegada',!!guia.plegada);
    let cuerpo='';
    if(!fin){
      const p=P[guia.i], ok=vigente(p.a);
      const tt=typeof p.t==='function'?p.t():L2(p.t);
      cuerpo=`<p class="ap-g-txt">${esc(tt)}</p>${p.o?`<p class="ap-g-obs"><span>${esc(tx('observa'))}</span>${esc(L2(p.o))}</p>`:''}
        ${ok?`<button type="button" class="ap-acc oro" data-g="hacer">${esc(tx('mostrar'))} →</button>`:`<p class="ap-pend">${esc(tx('pendiente'))}</p>`}`;
    } else {
      const D=L2(t.disc).map(q=>typeof q==='function'?q():q);
      cuerpo=`<ol class="ap-g-disc">${D.map(q=>`<li>${esc(q)}</li>`).join('')}</ol><button type="button" class="ap-acc oro" data-g="llevar">${esc(tx('copiarPreg'))} →</button>`;
    }
    card.innerHTML=`<div class="ap-g-cab"><p class="ap-g-k">${esc(L2(t.t))}</p>
        <button type="button" class="ap-g-ico" data-g="plegar" aria-expanded="${guia.plegada?'false':'true'}" aria-label="${esc(guia.plegada?tx('desplegar'):tx('plegar'))}">${guia.plegada?'▴':'▾'}</button>
        <button type="button" class="ap-g-ico" data-g="salir" aria-label="${esc(tx('salir'))}">×</button></div>
      <h2 class="ap-g-paso" tabindex="-1">${fin?esc(tx('final')):`${esc(tx('paso'))} ${guia.i+1} ${esc(tx('de'))} ${n}`}</h2>
      <div class="ap-g-cuerpo">${guia.i===0?`<p class="ap-g-preg">${esc(L2(t.p))}</p>`:''}${cuerpo}</div>
      <div class="ap-g-nav"><button type="button" class="ap-acc sec" data-g="ant"${guia.i===0?' disabled':''}>← ${esc(tx('ant'))}</button>
        <span class="ap-g-puntos" aria-hidden="true">${P.map((_,j)=>`<i class="${j<guia.i?'v':''}${j===guia.i?' a':''}"></i>`).join('')}<i class="${fin?'a':''} d"></i></span>
        <button type="button" class="ap-acc sec" data-g="sig"${fin?' disabled':''}>${esc(tx('sig'))} →</button></div>`;
  }
  card.addEventListener('click',ev=>{
    const b=ev.target.closest('[data-g]'); if(!b||!guia) return;
    const k=b.dataset.g;
    if(k==='hacer'){ hacer(guia.t.pasos[guia.i].a); return; }
    if(k==='sig'||k==='ant'){ guia.i=Math.max(0,Math.min(pasosVivos().length, guia.i+(k==='sig'?1:-1))); pintarGuia(); const h=card.querySelector('.ap-g-paso'); if(h) h.focus(); return; }
    if(k==='plegar'){ guia.plegada=!guia.plegada; pintarGuia(); const f=card.querySelector('[data-g="plegar"]'); if(f) f.focus(); return; }
    if(k==='salir'){ guia=null; pintarGuia(); btn.focus(); return; }
    if(k==='llevar'){ const D=L2(guia.t.disc).map(q=>typeof q==='function'?q():q); if(LIBRETA){ LIBRETA.anadirDudas(D); LIBRETA.fijarPregunta(L2(guia.t.p)); } avisar(tx('llevadas')); b.textContent=tx('llevadas'); b.disabled=true; return; }
  });

  /* ---------- puertas desde el resto del atlas ---------- */
  /* 1. en la ficha: anotar la obra en la libreta */
  function puertaFicha(id){
    if(!LIBRETA) return;
    const p=document.getElementById('panel'); if(!p||!p.classList.contains('open')||state.active!==id||p.querySelector('.ap-anotar')) return;
    const ap=p.querySelector('.aporte'); if(!ap) return;
    const b=el('button','ap-anotar'); b.type='button';
    const pinta=()=>{ const ya=LIBRETA.tieneObra(id); b.textContent=(ya?'✓ ':'+ ')+(ya?tx('lib.anotada'):tx('lib.anotarObra')); b.setAttribute('aria-pressed',ya?'true':'false'); };
    pinta();
    b.addEventListener('click',()=>{ if(LIBRETA.tieneObra(id)) LIBRETA.quitarObra(id); else LIBRETA.anadirObra(id); pinta(); avisar(b.textContent.replace(/^[✓+]\s*/,'')); });
    ap.after(b);
  }
  const origOpen=window.openPanel;
  window.openPanel=function(id){ const r=origOpen.apply(this,arguments); try{ puertaFicha(id); }catch(e){} return r; };
  try{ if(state.active) puertaFicha(state.active); }catch(e){}

  /* 2. junto a «El agua» de la clave: la guía de lectura */
  function puertaClave(){
    const ag=document.getElementById('clvAgua'); if(!ag || ag.querySelector('.ap-agua')) return;
    const b=el('button','ap-agua'); b.type='button'; b.textContent=tx('guiaAgua')+' →';
    b.addEventListener('click',()=>abrirPanel('corrientes')); ag.append(b);
  }
  /* 3. en la introducción */
  function puertaUmbral(){
    const box=document.querySelector('#umbral .box'); if(!box) return;
    let p=box.querySelector('.ap-umbral'); if(!p){ p=el('div','ap-umbral'); const e=box.querySelector('#entrar'); if(e) e.before(p); else box.append(p); }
    p.innerHTML=tx('umbral');
    const a=p.querySelector('#apUmbral'); if(a) a.addEventListener('click',ev=>{ ev.preventDefault(); const u=document.getElementById('umbral'); if(u) u.classList.add('gone'); abrirPanel('practicas'); });
  }
  /* 4. en el marco: la versión en funcionamiento junto a la depositada */
  function puertaMarco(){
    const c=document.querySelector('#marco [data-i18n-html="mc6p"]'); if(!c) return;
    let n=c.parentNode.querySelector('.ap-vz'); const z=versionZenodo();
    if(!z || z===C.version){ if(n) n.remove(); return; }
    if(!n){ n=el('p','ap-vz'); c.after(n); }
    n.textContent=tx('cifrasZ')(C.version,z);
  }
  function pintarPuertas(){
    btn.innerHTML=`<span class="ap-largo">${esc(tx('btn'))}</span><span class="ap-corto" aria-hidden="true">${esc(tx('btnCorto'))}</span>`;
    btn.setAttribute('aria-label',tx('btn'));
    const ab=document.querySelector('#clvAgua .ap-agua'); if(ab) ab.textContent=tx('guiaAgua')+' →';
    puertaClave(); puertaUmbral(); puertaMarco();
    panel.setAttribute('aria-label',tx('tit'));
    document.querySelectorAll('#panel .ap-anotar').forEach(b=>{ const id=state.active; if(!id||!LIBRETA) return; const ya=LIBRETA.tieneObra(id); b.textContent=(ya?'✓ ':'+ ')+(ya?tx('lib.anotada'):tx('lib.anotarObra')); });
  }
  pintarPuertas();

  /* idioma: el atlas tiene su conmutador; este módulo se repinta con él */
  if(typeof window.applyLang==='function'){
    const origLang=window.applyLang;
    window.applyLang=function(){ const r=origLang.apply(this,arguments); try{ pintarPuertas(); if(!panel.hidden) pintarPanel(); if(guia) pintarGuia(); }catch(e){} return r; };
  }

  window.APRENDER_ATLAS={abrir:abrirPanel, cerrar:cerrarPanel, iniciar, hacer, vigente, TRAVESIAS, PRACTICAS, CORRIENTES, C, libreta:()=>LIBRETA&&LIBRETA.datos(), md:()=>LIBRETA&&LIBRETA.md(), pref:()=>pref, guia:()=>guia};
})();
