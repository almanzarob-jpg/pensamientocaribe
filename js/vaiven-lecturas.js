/* ════════════════════════════════════════════════
   CON EL VAIVÉN DE LAS CORRIENTES · LECTURAS
   ────────────────────────────────────────────────
   Cuatro maneras de leer el mapa que no añaden un solo dato:
     · corrientes  — en qué viajó la música (campo `corriente` de edges.json)
     · ramajes     — rutas publicadas, encadenadas
     · travesías   — recorridos de escucha para el aula, con libreta
     · mar de fondo — las corrientes superficiales del Atlántico, en esquema
   El contenido vive en data/vaiven-corrientes/lecturas.json. Este módulo se
   engancha al mapa por window.VaivenMapa, que js/mapa-afrodiasporico.js publica
   al terminar de dibujar. Si lecturas.json no carga, la barra no se pinta y el
   mapa queda como estaba.
   ════════════════════════════════════════════════ */
(function () {
  'use strict';
  var SRC = (document.currentScript && document.currentScript.src) || '';
  var BASE = SRC.replace(/js\/[^\/?#]*(?:[?#].*)?$/, 'data/vaiven-corrientes/');
  var D = null, M = null, montado = false;

  /* Lo que el mapa principal puede pedir aunque el módulo aún no esté listo. */
  var publico = window.VaivenLecturas = {
    lineaCorriente: function () { return ''; },
    notaUmbral: function () { return ''; },
    umbral: function () {},
    alCambiarEpoca: function () {}
  };

  function intentar() { if (D && M && !montado) { montado = true; montar(); } }
  if (/data\/vaiven-corrientes\/$/.test(BASE)) {
    fetch(BASE + 'lecturas.json').then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { if (d && d.corrientes) { D = d; intentar(); } }).catch(function () {});
  }
  if (window.VaivenMapa) M = window.VaivenMapa;
  document.addEventListener('vaiven:mapa', function () { M = window.VaivenMapa; intentar(); });
  intentar();

  function montar() {
    var map = M.map, EN = M.idioma === 'en';
    function t(es, en) { return EN ? en : es; }
    function tx(o, k) { return (EN && o[k + '_en']) ? o[k + '_en'] : o[k]; }
    function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

    var arcoDe = {}, corr = {}, rutasDe = {};
    M.arcos.forEach(function (a) { if (a.rutaData && a.rutaData.id) arcoDe[a.rutaData.id] = a; });
    D.corrientes.forEach(function (c) { corr[c.id] = c; rutasDe[c.id] = []; });
    M.arcos.forEach(function (a) { var k = a.rutaData.corriente; if (rutasDe[k]) rutasDe[k].push(a.rutaData.id); });
    function anoDe(id) { var m = String(arcoDe[id].rutaData.anos).match(/\d{4}/); return m ? +m[0] : 0; }
    Object.keys(rutasDe).forEach(function (k) { rutasDe[k].sort(function (a, b) { return anoDe(a) - anoDe(b); }); });
    var nodoDe = {}; M.nodos.forEach(function (n) { nodoDe[n.nombre] = n; });

    /* ── Mar de fondo ── */
    var marCapa = L.layerGroup(), giros = {}, marOn = true;
    if (!map.getPane('marFondo')) { var pm = map.createPane('marFondo'); pm.style.zIndex = 210; pm.style.pointerEvents = 'none'; }
    var marRender = L.svg({ pane: 'marFondo' });
    function suavizar(p) {   /* Catmull-Rom: el trazo pasa por los puntos sin quebrarse */
      var out = [], n = p.length;
      for (var i = 0; i < n - 1; i++) {
        var a = p[Math.max(i - 1, 0)], b = p[i], c = p[i + 1], d = p[Math.min(i + 2, n - 1)];
        for (var s = 0; s < 10; s++) {
          var u = s / 10, u2 = u * u, u3 = u2 * u;
          out.push([0, 1].map(function (j) {
            return 0.5 * ((2 * b[j]) + (-a[j] + c[j]) * u + (2 * a[j] - 5 * b[j] + 4 * c[j] - d[j]) * u2 + (-a[j] + 3 * b[j] - 3 * c[j] + d[j]) * u3);
          }));
        }
      }
      out.push(p[n - 1]); return out;
    }
    D.mar.corrientes.forEach(function (g) {
      giros[g.id] = L.polyline(suavizar(g.puntos), {
        pane: 'marFondo', renderer: marRender, interactive: false, className: 'vaiven-giro',
        color: '#5FB0B7', weight: 1.3, opacity: 0.4, dashArray: '2,9', lineCap: 'round'
      }).addTo(marCapa);
      L.marker(g.rotulo, { pane: 'marFondo', interactive: false, keyboard: false,
        icon: L.divIcon({ className: 'vaiven-giro-rotulo', html: '<span>' + esc(tx(g, 'nombre')) + '</span>', iconSize: [200, 16], iconAnchor: [100, 8] })
      }).addTo(marCapa);
    });
    marCapa.addTo(map);
    if (map.attributionControl) map.attributionControl.addAttribution(t('Corrientes: esquema', 'Currents: schematic'));
    function ponerMar(v) {
      marOn = v;
      if (v) marCapa.addTo(map); else map.removeLayer(marCapa);
      if (btnMar) btnMar.setAttribute('aria-pressed', v ? 'true' : 'false');
    }
    function pasaje(on) {
      if (on && !marOn) ponerMar(true);
      Object.keys(giros).forEach(function (id) {
        var fuerte = on && D.mar.pasaje.indexOf(id) >= 0;
        giros[id].setStyle(fuerte ? { weight: 3, opacity: 0.95, dashArray: '3,8' } : { weight: 1.3, opacity: on ? 0.18 : 0.4, dashArray: '2,9' });
      });
    }

    /* ── Estado visual de los arcos y rótulos de puerto ── */
    var modo = null, selCorr = null, rotulos = L.layerGroup().addTo(map);
    function colorArco(a) { return modo === 'corriente' && corr[a.rutaData.corriente] ? corr[a.rutaData.corriente].color : M.epocas[a.rutaData.epoca].color; }
    function pintar(vivos, brasas, apagarTodo) {
      var hay = apagarTodo || vivos.length || brasas.length, ver = {};
      M.arcos.forEach(function (a) {
        var id = a.rutaData.id, v = vivos.indexOf(id) >= 0, b = brasas.indexOf(id) >= 0;
        a.setStyle({ color: colorArco(a), opacity: v ? 0.95 : b ? 0.6 : (hay ? 0.07 : 0.65), weight: v ? 3.5 : b ? 2.2 : (hay ? 1.2 : 2) });
        if (v || b) { ver[a.rutaData.de] = 1; ver[a.rutaData.a] = 1; if (a.bringToFront && v) a.bringToFront(); }
      });
      rotulos.clearLayers();
      Object.keys(ver).forEach(function (nombre) {
        var n = nodoDe[nombre]; if (!n) return;
        var izq = n.lng < -58 && n.lng > -95;
        L.tooltip({ permanent: true, interactive: false, direction: izq ? 'left' : 'right', offset: [izq ? -9 : 9, 0], className: 'vaiven-rotulo' })
          .setLatLng([n.lat, n.lng]).setContent(esc(M.nombreDisp(n.nombre))).addTo(rotulos);
      });
    }
    function soltar() {   /* vuelve al mapa en reposo, con los colores de época */
      modo = null; selCorr = null; rotulos.clearLayers(); pasaje(false); M.detenerNavio();
      M.arcos.forEach(function (a) { a.setStyle({ color: M.epocas[a.rutaData.epoca].color }); });
      marcarBarra();
    }
    var propio = false;
    function entrar(m) {   /* todo modo empieza con todas las épocas visibles y sin travesía en curso */
      propio = true; M.aplicarEpoca('all'); propio = false;
      M.detenerNavio(); pasaje(false); modo = m; marcarBarra();
    }
    function enlace(tipo, id) { if (window.history && history.replaceState) history.replaceState(null, '', '#' + tipo + '=' + id); }

    /* ── Barra: visible encima del mapa, sin abrir nada ── */
    var filtros = document.querySelector('.caribe-mapa-filters');
    var barra = document.createElement('div');
    barra.className = 'caribe-mapa-filters vaiven-barra'; barra.setAttribute('role', 'group');
    barra.setAttribute('aria-label', t('Otras lecturas del mapa: corrientes, ramajes, travesías de escucha', 'Other readings of the map: currents, branchings, listening journeys'));
    var h = '<span class="vaiven-barra-rot">' + t('Leer por corrientes', 'Read by currents') + '</span>';
    D.corrientes.forEach(function (c) {
      h += '<button type="button" class="filter-btn" data-corr="' + c.id + '" aria-pressed="false" title="' + esc(tx(c, 'desc')) + '"><span class="filter-dot" style="background:' + c.color + '"></span>' + esc(tx(c, 'nombre')) + '</button>';
    });
    h += '<span class="vaiven-corte" aria-hidden="true"></span><span class="vaiven-barra-rot">' + t('Otras lecturas', 'Other readings') + '</span>' +
      '<button type="button" class="filter-btn filter-btn--lectura" data-vv="ramajes" aria-pressed="false">&#10547; ' + t('Ramajes', 'Branchings') + '</button>' +
      '<button type="button" class="filter-btn filter-btn--lectura" data-vv="travesias" aria-pressed="false">&#9998; ' + t('Travesías de escucha', 'Listening journeys') + '</button>' +
      '<button type="button" class="filter-btn" data-vv="mar" aria-pressed="true">&#8776; ' + t('Mar de fondo', 'The sea beneath') + '</button>';
    barra.innerHTML = h;
    if (filtros && filtros.parentNode) filtros.parentNode.insertBefore(barra, filtros.nextSibling);
    var btnMar = barra.querySelector('[data-vv="mar"]');
    function marcarBarra() {
      barra.querySelectorAll('[data-corr]').forEach(function (b) { b.setAttribute('aria-pressed', (modo === 'corriente' && selCorr === b.getAttribute('data-corr')) ? 'true' : 'false'); });
      barra.querySelector('[data-vv="ramajes"]').setAttribute('aria-pressed', modo === 'ramaje' ? 'true' : 'false');
      barra.querySelector('[data-vv="travesias"]').setAttribute('aria-pressed', modo === 'travesia' ? 'true' : 'false');
    }
    barra.addEventListener('click', function (ev) {
      var b = ev.target.closest('button'); if (!b) return;
      var c = b.getAttribute('data-corr'), v = b.getAttribute('data-vv');
      if (c) { if (modo === 'corriente' && selCorr === c) { soltar(); M.restaurarArcos(); M.panelIntro(); } else verCorriente(c); }
      else if (v === 'ramajes') verRamajes();
      else if (v === 'travesias') verTravesias();
      else if (v === 'mar') ponerMar(!marOn);
    });

    /* ── Piezas de panel ── */
    function cab(color, rotulo) { return M.panelCabecera(color, rotulo); }
    function volver(rotulo) { return '<button type="button" class="vaiven-volver" data-vv="volver">&larr; ' + esc(rotulo) + '</button>'; }
    function ficha(r) {
      var c = corr[r.corriente], color = M.epocas[r.epoca].color;
      return '<h3 class="atlantico-panel-title">' + tx(r, 'titulo') + '</h3>' +
        '<p class="atlantico-panel-sub">' + esc(M.nombreDisp(r.de)) + ' &harr; ' + esc(M.nombreDisp(r.a)) + ' &nbsp;·&nbsp; ' + tx(r, 'anos') + '</p>' +
        '<p class="atlantico-panel-desc">' + tx(r, 'desc') + '</p>' +
        M.panelCancion(r.cancion) + M.panelTags(tx(r, 'claves'), color) +
        (c ? publico.lineaCorriente(r) : '') +
        (r.fuente ? '<p class="atlantico-panel-fuente">' + t('Fuente:', 'Source:') + ' ' + r.fuente + '</p>' : '');
    }
    function lista(ids, conCancion) {
      return '<ul class="vaiven-lista">' + ids.map(function (id, i) {
        var r = arcoDe[id].rutaData, can = conCancion && r.cancion && r.cancion.titulo ? '<em>' + esc(r.cancion.titulo) + ' · ' + esc(r.cancion.artista) + '</em>' : '';
        return '<li><button type="button" data-ruta="' + id + '" data-i="' + i + '"><span>' + tx(r, 'titulo') + can + '</span><small>' + tx(r, 'anos') + '</small></button></li>';
      }).join('') + '</ul>';
    }
    function al(sel, fn) { var e = M.panel.querySelector(sel); if (e) e.addEventListener('click', fn); return e; }
    function alTodos(sel, fn) { M.panel.querySelectorAll(sel).forEach(function (e) { e.addEventListener('click', function () { fn(e); }); }); }
    function vistaAtlantico() { map.flyTo([16, -32], 3, { duration: 1.1 }); }

    /* ── Corrientes ── */
    function verCorriente(id) {
      var c = corr[id]; if (!c) return;
      entrar('corriente'); selCorr = id; marcarBarra();
      var ids = rutasDe[id]; pintar([], ids); vistaAtlantico();
      M.mostrarPanel(cab(c.color, t('Corriente', 'Current') + ' · ' + ids.length + ' ' + t('rutas', 'routes')) +
        '<h3 class="atlantico-panel-title">' + esc(tx(c, 'nombre')) + '</h3>' +
        '<p class="atlantico-panel-desc">' + esc(tx(c, 'desc')) + '</p>' +
        '<p class="vaiven-nota">' + t('Las épocas dicen cuándo viajó una música. Las corrientes dicen <strong>en qué</strong> viajó. Cada ruta tiene un vehículo principal.', 'The eras say when a music traveled. The currents say <strong>what it traveled in</strong>. Each route has one main vehicle.') + '</p>' +
        lista(ids, false));
      alTodos('[data-ruta]', function (b) { rutaEnCorriente(id, b.getAttribute('data-ruta')); });
      enlace('corriente', id);
    }
    function rutaEnCorriente(id, rid) {
      var c = corr[id], a = arcoDe[rid]; modo = 'corriente'; selCorr = id;
      pintar([rid], rutasDe[id]); M.volarAArco(a); M.navegarArco(a);
      M.mostrarPanel(cab(c.color, t('Corriente', 'Current') + ' · ' + esc(tx(c, 'nombre'))) + volver(tx(c, 'nombre')) + ficha(a.rutaData));
      var v = al('[data-vv="volver"]', function () { verCorriente(id); }); if (v) v.focus({ preventScroll: true });
    }

    /* ── Recorrido por pasos: lo comparten ramajes y travesías ── */
    function recorrido(cfg, i) {
      var p = cfg.pasos[i], esUmbral = p.ruta === 'umbral', a = esUmbral ? null : arcoDe[p.ruta];
      var antes = cfg.pasos.slice(0, i).filter(function (x) { return x.ruta !== 'umbral'; }).map(function (x) { return x.ruta; });
      M.detenerNavio();
      if (esUmbral) { pintar([], [], true); pasaje(true); map.flyTo([14, -34], 3, { duration: 1.2 }); }
      else { pasaje(false); pintar([p.ruta], antes); M.volarAArco(a); M.navegarArco(a); }
      var consigna = tx(p, 'consigna');
      var cuerpo = esUmbral
        ? '<h3 class="atlantico-panel-title">' + t('El viaje que este mapa no dibuja', 'The voyage this map does not draw') + '</h3>' +
          '<p class="atlantico-panel-desc">' + t('Antes de la primera ruta está el pasaje medio, la travesía forzada de la trata. El mapa no lo traza como una ruta más. Lo que sí muestra es el agua: encendidas, la corriente de Canarias y la Norecuatorial, que corren de la costa africana hacia las Antillas. Vientos y corrientes marcaron el rumbo de la trata.', 'Before the first route lies the Middle Passage, the forced crossing of the slave trade. The map does not trace it as one more route. What it does show is the water: lit up, the Canary Current and the North Equatorial Current, which run from the African coast toward the Antilles. Winds and currents set the course of the trade.') + '</p>' +
          '<p class="atlantico-panel-fuente">' + t('Fuentes:', 'Sources:') + ' Gilroy 1993 · Montes Pizarro 2018 · ' + tx(D.mar, 'fuente') + '</p>'
        : ficha(a.rutaData);
      M.mostrarPanel(cab(cfg.color, esc(cfg.titulo) + ' · ' + (i + 1) + '/' + cfg.pasos.length) + volver(cfg.rotuloVolver) +
        (consigna ? '<div class="vaiven-consigna"><p class="vaiven-consigna-rot">' + ((!esUmbral && a.rutaData.cancion && a.rutaData.cancion.titulo) ? t('Escucha', 'Listen') : t('Observa', 'Look')) + '</p><p>' + consigna + '</p></div>' : '') +
        cuerpo +
        '<div class="atlantico-tour-bar">' +
          '<button class="atlantico-tour-btn" type="button" data-vv="prev"' + (i === 0 ? ' disabled' : '') + '>&larr; ' + t('Anterior', 'Previous') + '</button>' +
          '<span class="atlantico-tour-paso">' + (i + 1) + ' / ' + cfg.pasos.length + '</span>' +
          '<button class="atlantico-tour-btn" type="button" data-vv="next">' + (i === cfg.pasos.length - 1 ? t('Terminar', 'Finish') : t('Siguiente', 'Next') + ' &rarr;') + '</button>' +
        '</div>');
      al('[data-vv="volver"]', cfg.alSalir);
      al('[data-vv="prev"]', function () { if (i > 0) recorrido(cfg, i - 1); });
      var nx = al('[data-vv="next"]', function () { if (i < cfg.pasos.length - 1) recorrido(cfg, i + 1); else cfg.alSalir(); });
      if (nx) nx.focus({ preventScroll: true });
    }

    /* ── Ramajes ── */
    function cadena(x) {   /* con flechas solo si cada ruta sale de donde llegó la anterior */
      var rs = x.rutas.map(function (id) { return arcoDe[id].rutaData; }), seguida = true, ps = [];
      for (var i = 1; i < rs.length; i++) if (rs[i].de !== rs[i - 1].a) seguida = false;
      rs.forEach(function (r) { [r.de, r.a].forEach(function (n) { if (seguida ? ps[ps.length - 1] !== n : ps.indexOf(n) < 0) ps.push(n); }); });
      return ps.map(M.nombreDisp).join(seguida ? ' → ' : ' · ');
    }
    function verRamajes() {
      entrar('ramaje'); pintar([], []); vistaAtlantico();
      M.mostrarPanel(cab('#E8935A', t('Ramajes', 'Branchings')) +
        '<h3 class="atlantico-panel-title">' + t('Más ramas que raíces, puesto en movimiento', 'More branches than roots, set in motion') + '</h3>' +
        '<p class="atlantico-panel-desc">' + t('Un puerto que recibe una música después la emite convertida en otra. Los ramajes siguen esa cadena con rutas que ya están en el mapa: cada eslabón tiene su fuente, y leerlos juntos es la tesis de Montes Pizarro hecha recorrido.', 'A port that receives a music later sends it out transformed into another. The branchings follow that chain through routes already on the map: each link has its source, and reading them together is Montes Pizarro\'s thesis turned into a journey.') + '</p>' +
        '<div class="vaiven-menu">' + D.ramajes.map(function (x) {
          return '<button type="button" data-id="' + x.id + '"><b>' + esc(tx(x, 'nombre')) + '</b><span>' + esc(cadena(x)) + '</span><small>' + esc(tx(x, 'anos')) + '</small></button>';
        }).join('') + '</div>');
      alTodos('.vaiven-menu button', function (b) { verRamaje(b.getAttribute('data-id')); });
      M.panel.querySelectorAll('.vaiven-menu button').forEach(function (b) {
        var x = buscar(D.ramajes, b.getAttribute('data-id'));
        b.addEventListener('mouseenter', function () { pintar([], x.rutas); }); b.addEventListener('focus', function () { pintar([], x.rutas); });
      });
    }
    function buscar(arr, id) { for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i]; return null; }
    function verRamaje(id) {
      var x = buscar(D.ramajes, id); if (!x) return;
      if (modo !== 'ramaje') entrar('ramaje');
      pintar([], x.rutas); vistaAtlantico();
      var cfg = { titulo: tx(x, 'nombre'), color: '#E8935A', rotuloVolver: tx(x, 'nombre'), pasos: x.rutas.map(function (r) { return { ruta: r }; }), alSalir: function () { verRamaje(id); } };
      M.mostrarPanel(cab('#E8935A', t('Ramaje', 'Branching') + ' · ' + esc(tx(x, 'anos'))) + volver(t('Ramajes', 'Branchings')) +
        '<h3 class="atlantico-panel-title">' + esc(tx(x, 'nombre')) + '</h3>' +
        '<p class="atlantico-panel-sub">' + esc(cadena(x)) + '</p>' +
        '<p class="atlantico-panel-desc">' + esc(tx(x, 'desc')) + '</p>' +
        '<div class="atlantico-tour-bar"><button class="atlantico-tour-btn atlantico-tour-btn--empezar" type="button" data-vv="empezar">&#9656; ' + t('Recorrer el ramaje', 'Travel the branching') + '</button></div>' +
        '<p class="vaiven-subtitulo">' + t('Escucha encadenada', 'Chained listening') + '</p>' + lista(x.rutas, true));
      al('[data-vv="volver"]', verRamajes);
      al('[data-vv="empezar"]', function () { recorrido(cfg, 0); });
      alTodos('[data-ruta]', function (b) { recorrido(cfg, +b.getAttribute('data-i')); });
      enlace('ramaje', id);
    }

    /* ── Travesías de escucha ── */
    function leer(k) { try { return localStorage.getItem(k) || ''; } catch (e) { return ''; } }
    function guardar(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
    function rutasDeTravesia(x) { return x.pasos.map(function (p) { return p.ruta; }).filter(function (r) { return r !== 'umbral'; }); }
    function verTravesias() {
      entrar('travesia'); pintar([], []); vistaAtlantico();
      M.mostrarPanel(cab('#C9A24D', t('Aprender con el mapa', 'Learning with the map')) +
        '<h3 class="atlantico-panel-title">' + t('Travesías de escucha', 'Listening journeys') + '</h3>' +
        '<p class="atlantico-panel-desc">' + t('Seis recorridos para el aula. Cada uno trae una pregunta, paradas con una consigna de escucha, preguntas para discutir, un producto y una libreta.', 'Six journeys for the classroom. Each comes with a question, stops with a listening prompt, questions for discussion, a product, and a notebook.') + '</p>' +
        '<div class="vaiven-menu">' + D.travesias.map(function (x) {
          return '<button type="button" data-id="' + x.id + '"><b>' + esc(tx(x, 'nombre')) + '</b><span>' + esc(tx(x, 'pregunta')) + '</span><small>' + esc(tx(x, 'nivel')) + ' · ' + x.pasos.length + ' ' + t('paradas', 'stops') + '</small></button>';
        }).join('') + '</div>');
      alTodos('.vaiven-menu button', function (b) { verTravesia(b.getAttribute('data-id')); });
      M.panel.querySelectorAll('.vaiven-menu button').forEach(function (b) {
        var x = buscar(D.travesias, b.getAttribute('data-id')), rs = rutasDeTravesia(x);
        b.addEventListener('mouseenter', function () { pintar([], rs); }); b.addEventListener('focus', function () { pintar([], rs); });
      });
    }
    function verTravesia(id) {
      var x = buscar(D.travesias, id); if (!x) return;
      if (modo !== 'travesia') entrar('travesia');
      pasaje(false); pintar([], rutasDeTravesia(x)); vistaAtlantico();
      var cfg = { titulo: tx(x, 'nombre'), color: '#C9A24D', rotuloVolver: tx(x, 'nombre'), pasos: x.pasos, alSalir: function () { verTravesia(id); } };
      var clave = 'vaiven-libreta-' + id;
      M.mostrarPanel(cab('#C9A24D', esc(tx(x, 'nivel'))) + volver(t('Travesías de escucha', 'Listening journeys')) +
        '<h3 class="atlantico-panel-title">' + esc(tx(x, 'nombre')) + '</h3>' +
        '<p class="vaiven-pregunta">' + esc(tx(x, 'pregunta')) + '</p>' +
        '<div class="atlantico-tour-bar"><button class="atlantico-tour-btn atlantico-tour-btn--empezar" type="button" data-vv="empezar">&#9656; ' + t('Empezar', 'Begin') + ' · ' + x.pasos.length + ' ' + t('paradas', 'stops') + '</button></div>' +
        '<p class="vaiven-subtitulo">' + t('Para discutir', 'For discussion') + '</p><ul class="vaiven-simple">' + tx(x, 'discutir').map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ul>' +
        '<p class="vaiven-subtitulo">' + t('Producto', 'Product') + '</p><p class="atlantico-panel-desc">' + esc(tx(x, 'producto')) + '</p>' +
        '<p class="vaiven-subtitulo"><label for="vaiven-libreta">' + t('Libreta de escucha', 'Listening notebook') + '</label></p>' +
        '<textarea id="vaiven-libreta" class="vaiven-libreta" rows="5" placeholder="' + t('Qué oí, qué reconocí, qué no supe nombrar…', 'What I heard, what I recognized, what I could not name…') + '"></textarea>' +
        '<p class="vaiven-nota">' + t('Se guarda solo en este navegador y en este equipo. No se envía a ningún servidor.', 'Saved only in this browser, on this device. Nothing is sent to a server.') + '</p>' +
        '<button class="atlantico-tour-btn" type="button" data-vv="copiar">' + t('Copiar las notas', 'Copy the notes') + '</button>' +
        '<span class="vaiven-aviso" role="status"></span>');
      al('[data-vv="volver"]', verTravesias);
      al('[data-vv="empezar"]', function () { recorrido(cfg, 0); });
      var ta = M.panel.querySelector('#vaiven-libreta'), aviso = M.panel.querySelector('.vaiven-aviso');
      ta.value = leer(clave); ta.addEventListener('input', function () { guardar(clave, ta.value); });
      al('[data-vv="copiar"]', function () {
        var txt = '# ' + tx(x, 'nombre') + '\n\n' + tx(x, 'pregunta') + '\n\n' + ta.value + '\n\n' + location.href.split('#')[0] + '#travesia=' + id;
        var ok = function () { aviso.textContent = t('Notas copiadas', 'Notes copied'); }, no = function () { ta.focus(); ta.select(); aviso.textContent = t('Selecciona el texto y cópialo', 'Select the text and copy it'); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, no); else no();
      });
      enlace('travesia', id);
    }

    /* ── Lo que el mapa principal le pide al módulo ── */
    publico.lineaCorriente = function (r) {
      var c = corr[r.corriente]; if (!c) return '';
      return '<p class="vaiven-corriente"><span style="background:' + c.color + '"></span>' + t('Corriente', 'Current') + ' · ' + esc(tx(c, 'nombre')) + ' <em>' + esc(tx(c, 'desc')) + '</em></p>';
    };
    publico.notaUmbral = function () {
      return '<p class="vaiven-nota">' + t('En el mapa quedan encendidas la corriente de Canarias y la Norecuatorial, que corren de la costa africana hacia las Antillas. Vientos y corrientes marcaron el rumbo de la trata (Eltis y Richardson 2010).', 'On the map the Canary Current and the North Equatorial Current stay lit; they run from the African coast toward the Antilles. Winds and currents set the course of the trade (Eltis & Richardson 2010).') + '</p>';
    };
    publico.umbral = function (on) { pasaje(!!on); };
    publico.alCambiarEpoca = function () { if (!propio && modo) soltar(); };

    /* Cerrar el panel o salir con Escape devuelve el mapa a su reposo. */
    if (M.panel) M.panel.addEventListener('click', function (ev) { if (ev.target.closest('.atlantico-panel-close') && modo) soltar(); });
    document.addEventListener('keydown', function (ev) {
      if (ev.key !== 'Escape' || !modo || !M.panel) return;
      var v = M.panel.querySelector('[data-vv="volver"]');
      if (v) v.click(); else { var c = M.panel.querySelector('.atlantico-panel-close'); if (c) c.click(); }
    });

    /* Enlaces directos: #corriente=…, #ramaje=…, #travesia=… */
    var m = (location.hash || '').match(/^#(corriente|ramaje|travesia)=([a-z0-9\-]+)$/);
    if (m) setTimeout(function () {
      if (m[1] === 'corriente' && corr[m[2]]) verCorriente(m[2]);
      else if (m[1] === 'ramaje' && buscar(D.ramajes, m[2])) { entrar('ramaje'); verRamaje(m[2]); }
      else if (m[1] === 'travesia' && buscar(D.travesias, m[2])) { entrar('travesia'); verTravesia(m[2]); }
    }, 350);
  }
})();
