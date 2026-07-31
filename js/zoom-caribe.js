/* ══════════════════════════════════════════════════════════════════════
   ZOOM CARIBE · árbitro de gestos y cromo de controles
   Módulo compartido por el atlas SVG «Con el agua de por medio» y el mapa
   Leaflet «Con el vaivén de las corrientes».

   El problema que resuelve: las dos piezas viven embebidas dentro de
   artículos largos. Un mapa que se queda con la rueda del ratón o con el
   dedo del lector convierte la lectura en una trampa: para seguir bajando
   hay que rodear la pieza. La política aquí es la inversa. El gesto
   ordinario (rueda sola, un dedo) siempre pertenece a la página. El zoom
   pide un gesto deliberado: Cmd/Ctrl + rueda, pellizco, dos dedos, los
   botones o el teclado. Cuando alguien intenta el gesto equivocado no se
   le bloquea nada: aparece un aviso que se va solo.

   Excepción: si la página no tiene scroll (pieza a pantalla completa o en
   modo presentación) no hay nada que proteger y la rueda sola hace zoom.

   El motor es un adaptador que cada pieza implementa:
     escala()            → número, la escala actual
     limites()           → [mínimo, máximo]
     aplicar(k, cx, cy)  → fija la escala anclada a un punto de cliente
     panear(dx, dy)      → desplaza en píxeles de cliente
     recentrar()         → vuelve al encuadre inicial
   ══════════════════════════════════════════════════════════════════════ */

(function (global) {
  'use strict';

  var esMac = /Mac|iPhone|iPad|iPod/.test(
    (global.navigator && (global.navigator.platform || global.navigator.userAgent)) || ''
  );

  var TEXTOS_ES = {
    acercar: 'Acercar',
    alejar: 'Alejar',
    recentrar: 'Volver al encuadre inicial',
    pistaRueda: esMac
      ? 'Usa <kbd>⌘</kbd> + rueda para acercar el mapa'
      : 'Usa <kbd>Ctrl</kbd> + rueda para acercar el mapa',
    pistaDedo: 'Mueve el mapa con dos dedos',
    avisoEscala: 'Escala {v}'
  };

  var TEXTOS_EN = {
    acercar: 'Zoom in',
    alejar: 'Zoom out',
    recentrar: 'Back to the initial framing',
    pistaRueda: esMac
      ? 'Use <kbd>⌘</kbd> + scroll to zoom the map'
      : 'Use <kbd>Ctrl</kbd> + scroll to zoom the map',
    pistaDedo: 'Use two fingers to move the map',
    avisoEscala: 'Scale {v}'
  };

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  function dist(a, b) { return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY); }
  function medio(a, b) { return [(a.clientX + b.clientX) / 2, (a.clientY + b.clientY) / 2]; }

  /* ¿La página se puede desplazar? Si no, la rueda no le hace falta a nadie más
     y la pieza puede quedársela.

     El fallo seguro importa: cuando no hay información de maquetación —el
     documento todavía no se ha medido, o el entorno no maqueta— se responde
     que sí hay scroll. Equivocarse hacia «la rueda es de la página» solo
     obliga a pulsar una tecla de más; equivocarse hacia el otro lado deja al
     lector atrapado, que es el problema que este módulo vino a resolver. */
  function paginaTieneScroll() {
    var d = document.documentElement;
    if (!d || !d.clientHeight) return true;
    return (d.scrollHeight - d.clientHeight) > 4;
  }

  function montar(opciones) {
    var o = opciones || {};
    var host = o.host;
    var lienzo = o.lienzo || host;
    var motor = o.motor;
    if (!host || !motor) return null;

    var T = o.textos || (o.idioma === 'en' ? TEXTOS_EN : TEXTOS_ES);

    /* Dos aritméticas de escala. El atlas SVG trabaja con un factor
       multiplicativo (×1, ×2.4, ×7); Leaflet con niveles enteros que ya son
       logarítmicos de por sí, así que ahí los incrementos son aditivos.
       Todo lo demás del módulo es idéntico en los dos casos. */
    var aditiva = o.modoEscala === 'aditiva';
    var pasoFactor = o.pasoFactor || (aditiva ? 1 : 1.55);
    var sensRueda = o.sensibilidadRueda || (aditiva ? 0.0075 : 0.0032);
    var unDedoPanea = !!o.unDedoPanea;
    var formato = o.formatoLectura ||
      (aditiva ? function (k) { return 'z ' + (Math.round(k * 10) / 10); }
               : function (k) { return '×' + (Math.round(k * 10) / 10); });
    var reducirMovimiento = global.matchMedia
      ? global.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
    /* Una pieza que ocupa la ventana entera lo declara y no depende de medir
       nada. Las embebidas dejan que se mida, y la medida falla hacia el lado
       prudente. */
    var sinScroll = o.sinScrollDePagina ||
      (o.duenaDeLaVentana ? function () { return true; }
                          : function () { return !paginaTieneScroll(); });

    if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
    host.classList.add('zc-host');

    /* ── Cromo ─────────────────────────────────────────────────────── */
    var caja = document.createElement('div');
    caja.className = 'zc' + (o.subir ? ' zc--sube' : '');

    var grupo = document.createElement('div');
    grupo.className = 'zc-grupo';

    var bMas = document.createElement('button');
    bMas.type = 'button';
    bMas.className = 'zc-btn zc-btn--mas';
    bMas.textContent = '+';
    bMas.setAttribute('aria-label', T.acercar);
    bMas.title = T.acercar;

    var riel = document.createElement('div');
    riel.className = 'zc-riel';
    var marca = document.createElement('div');
    marca.className = 'zc-marca';
    riel.appendChild(marca);

    var bMenos = document.createElement('button');
    bMenos.type = 'button';
    bMenos.className = 'zc-btn zc-btn--menos';
    bMenos.textContent = '−';
    bMenos.setAttribute('aria-label', T.alejar);
    bMenos.title = T.alejar;

    grupo.appendChild(bMas);
    grupo.appendChild(riel);
    grupo.appendChild(bMenos);

    var grupoReset = document.createElement('div');
    grupoReset.className = 'zc-grupo';
    var bReset = document.createElement('button');
    bReset.type = 'button';
    bReset.className = 'zc-btn zc-btn--reset';
    /* Icono vectorial y no un glifo: «⤢» (U+2921) tiene cobertura irregular en
       las monoespaciadas del sistema y un botón sin rótulo que sale en blanco
       no se puede pulsar a ciegas. Cuatro esquinas leen «reencuadrar» sin texto. */
    bReset.innerHTML =
      '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" focusable="false" ' +
      'fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="square">' +
      '<path d="M2 5.6V2h3.6M10.4 2H14v3.6M14 10.4V14h-3.6M5.6 14H2v-3.6"/>' +
      '<rect x="6.1" y="6.1" width="3.8" height="3.8" stroke-opacity=".45"/>' +
      '</svg>';
    bReset.setAttribute('aria-label', T.recentrar);
    bReset.title = T.recentrar;
    grupoReset.appendChild(bReset);

    var lectura = document.createElement('div');
    lectura.className = 'zc-lectura';
    lectura.setAttribute('aria-hidden', 'true');

    caja.appendChild(grupo);
    caja.appendChild(grupoReset);
    caja.appendChild(lectura);

    var velo = document.createElement('div');
    velo.className = 'zc-velo';
    velo.setAttribute('aria-hidden', 'true');
    var veloTxt = document.createElement('span');
    velo.appendChild(veloTxt);

    var aviso = document.createElement('div');
    aviso.className = 'zc-sr';
    aviso.setAttribute('aria-live', 'polite');

    host.appendChild(velo);
    host.appendChild(caja);
    host.appendChild(aviso);

    /* El lienzo se vuelve enfocable para que el teclado tenga dónde caer. */
    if (!lienzo.hasAttribute('tabindex')) lienzo.setAttribute('tabindex', '0');
    lienzo.classList.add('zc-lienzo');
    if (!lienzo.hasAttribute('role')) lienzo.setAttribute('role', 'application');
    lienzo.setAttribute('aria-keyshortcuts', 'Plus Minus 0 ArrowUp ArrowDown ArrowLeft ArrowRight');

    /* ── Estado del cromo ──────────────────────────────────────────── */
    var relojMov = null;
    var relojVelo = null;
    var relojAviso = null;

    function marcarMovimiento() {
      caja.classList.add('is-moviendo');
      clearTimeout(relojMov);
      relojMov = setTimeout(function () { caja.classList.remove('is-moviendo'); }, 1100);
    }

    function sincronizar(conMovimiento) {
      var k = motor.escala();
      var lim = motor.limites();
      var lo = lim[0], hi = lim[1];
      /* Recorrido logarítmico cuando la escala es un factor: es como se
         percibe el acercamiento. Lineal cuando ya son niveles de zoom. */
      var t = aditiva
        ? clamp((k - lo) / (hi - lo), 0, 1)
        : clamp((Math.log(k) - Math.log(lo)) / (Math.log(hi) - Math.log(lo)), 0, 1);
      marca.style.top = ((1 - t) * 100) + '%';
      lectura.textContent = formato(k);
      var enTope = k >= hi - 1e-4;
      var enPiso = k <= lo + 1e-4;
      bMas.disabled = enTope;
      bMenos.disabled = enPiso;
      if (conMovimiento) marcarMovimiento();
    }

    function anunciar() {
      clearTimeout(relojAviso);
      relojAviso = setTimeout(function () {
        aviso.textContent = T.avisoEscala.replace('{v}', formato(motor.escala()));
      }, 400);
    }

    function mostrarPista(html) {
      veloTxt.innerHTML = html;
      velo.classList.add('is-visible');
      clearTimeout(relojVelo);
      relojVelo = setTimeout(function () { velo.classList.remove('is-visible'); }, 1500);
    }

    function ocultarPista() {
      clearTimeout(relojVelo);
      velo.classList.remove('is-visible');
    }

    /* ── Escalón animado (los botones no dan saltos secos) ─────────── */
    var anim = null;
    function escalonA(destino, cx, cy) {
      var lim = motor.limites();
      destino = clamp(destino, lim[0], lim[1]);
      if (anim) { cancelAnimationFrame(anim); anim = null; }
      if (reducirMovimiento) {
        motor.aplicar(destino, cx, cy);
        sincronizar(true); anunciar();
        return;
      }
      var desde = motor.escala();
      if (Math.abs(destino - desde) < 1e-4) return;
      var t0 = performance.now();
      var dur = 190;
      (function marco(t) {
        var p = clamp((t - t0) / dur, 0, 1);
        var e = 1 - Math.pow(1 - p, 3);
        motor.aplicar(desde + (destino - desde) * e, cx, cy);
        sincronizar(true);
        if (p < 1) anim = requestAnimationFrame(marco);
        else { anim = null; anunciar(); }
      })(t0);
    }

    function paso(dir, cx, cy) {
      var k = motor.escala();
      if (aditiva) escalonA(dir > 0 ? k + pasoFactor : k - pasoFactor, cx, cy);
      else escalonA(dir > 0 ? k * pasoFactor : k / pasoFactor, cx, cy);
    }

    function centroDelHost() {
      var r = host.getBoundingClientRect();
      return [r.left + r.width / 2, r.top + r.height / 2];
    }

    bMas.addEventListener('click', function () { var c = centroDelHost(); paso(1, c[0], c[1]); });
    bMenos.addEventListener('click', function () { var c = centroDelHost(); paso(-1, c[0], c[1]); });
    bReset.addEventListener('click', function () {
      if (anim) { cancelAnimationFrame(anim); anim = null; }
      motor.recentrar(); sincronizar(true); anunciar();
    });

    /* ── Rueda ─────────────────────────────────────────────────────── */
    function normalizarDelta(ev) {
      var dy = ev.deltaY;
      if (ev.deltaMode === 1) dy *= 16;        /* líneas */
      else if (ev.deltaMode === 2) dy *= 400;  /* páginas */
      /* Los trackpads con inercia disparan ráfagas de deltas grandes: se
         acotan para que un gesto suave no atraviese toda la escala. */
      return clamp(dy, -80, 80);
    }

    function alRodar(ev) {
      var esGestoDeZoom = ev.ctrlKey || ev.metaKey || sinScroll();
      if (!esGestoDeZoom) {
        /* La rueda le pertenece a la página. Solo se avisa. */
        mostrarPista(T.pistaRueda);
        return;
      }
      ev.preventDefault();
      ocultarPista();
      if (anim) { cancelAnimationFrame(anim); anim = null; }
      var lim = motor.limites();
      var dy = normalizarDelta(ev);
      var k = motor.escala();
      var nk = aditiva ? k - dy * sensRueda : k * Math.exp(-dy * sensRueda);
      motor.aplicar(clamp(nk, lim[0], lim[1]), ev.clientX, ev.clientY);
      sincronizar(true);
      anunciar();
    }
    lienzo.addEventListener('wheel', alRodar, { passive: false });

    /* ── Doble clic: acercar anclado al cursor; con Alt, alejar ────── */
    if (o.dobleClic !== false) {
      lienzo.addEventListener('dblclick', function (ev) {
        ev.preventDefault();
        paso(ev.altKey ? -1 : 1, ev.clientX, ev.clientY);
      });
    }

    /* ── Táctil ────────────────────────────────────────────────────── */
    var pellizco = false, d0 = 1, k0 = 1, midPrev = null, unDedoDesde = null, unDedoPrev = null;

    lienzo.addEventListener('touchstart', function (ev) {
      if (ev.touches.length === 2) {
        pellizco = true;
        ocultarPista();
        d0 = dist(ev.touches[0], ev.touches[1]) || 1;
        k0 = motor.escala();
        midPrev = medio(ev.touches[0], ev.touches[1]);
        if (anim) { cancelAnimationFrame(anim); anim = null; }
      } else if (ev.touches.length === 1) {
        pellizco = false;
        unDedoDesde = { x: ev.touches[0].clientX, y: ev.touches[0].clientY, avisado: false };
        unDedoPrev = [ev.touches[0].clientX, ev.touches[0].clientY];
      }
    }, { passive: true });

    lienzo.addEventListener('touchmove', function (ev) {
      if (pellizco && ev.touches.length === 2) {
        ev.preventDefault();
        var lim = motor.limites();
        var d = dist(ev.touches[0], ev.touches[1]) || 1;
        var mid = medio(ev.touches[0], ev.touches[1]);
        /* En escala aditiva duplicar la distancia entre los dedos equivale a
           subir un nivel entero: de ahí el logaritmo en base 2. */
        var nk = aditiva ? k0 + Math.log(d / d0) / Math.LN2 : k0 * (d / d0);
        motor.aplicar(clamp(nk, lim[0], lim[1]), mid[0], mid[1]);
        if (midPrev) motor.panear(mid[0] - midPrev[0], mid[1] - midPrev[1]);
        midPrev = mid;
        sincronizar(true);
        return;
      }

      if (ev.touches.length !== 1) return;
      var t = ev.touches[0];

      /* Pieza a pantalla completa: no hay página que proteger, el dedo panea. */
      if (unDedoPanea) {
        ev.preventDefault();
        if (unDedoPrev) motor.panear(t.clientX - unDedoPrev[0], t.clientY - unDedoPrev[1]);
        unDedoPrev = [t.clientX, t.clientY];
        return;
      }

      /* Pieza embebida: no se toca el evento. El scroll de la página manda. */
      if (unDedoDesde && !unDedoDesde.avisado &&
          Math.abs(t.clientX - unDedoDesde.x) + Math.abs(t.clientY - unDedoDesde.y) > 14) {
        unDedoDesde.avisado = true;
        mostrarPista(T.pistaDedo);
      }
    }, { passive: false });

    function finTacto(ev) {
      if (!ev.touches || ev.touches.length === 0) {
        pellizco = false; midPrev = null; unDedoDesde = null; unDedoPrev = null;
        anunciar();
      } else if (ev.touches.length === 1) {
        /* Al soltar un dedo del pellizco, el que queda retoma el paneo desde
           su posición actual: sin esto el mapa pega un tirón. */
        pellizco = false; midPrev = null;
        unDedoPrev = [ev.touches[0].clientX, ev.touches[0].clientY];
        unDedoDesde = { x: ev.touches[0].clientX, y: ev.touches[0].clientY, avisado: true };
      }
    }
    lienzo.addEventListener('touchend', finTacto);
    lienzo.addEventListener('touchcancel', finTacto);

    /* ── Teclado ───────────────────────────────────────────────────── */
    if (o.teclado !== false) {
      lienzo.addEventListener('keydown', function (ev) {
        if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
        var salto = ev.shiftKey ? 180 : 55;
        var c;
        switch (ev.key) {
          case '+': case '=': c = centroDelHost(); paso(1, c[0], c[1]); break;
          case '-': case '_': c = centroDelHost(); paso(-1, c[0], c[1]); break;
          case '0': motor.recentrar(); sincronizar(true); anunciar(); break;
          case 'ArrowUp': motor.panear(0, salto); sincronizar(false); break;
          case 'ArrowDown': motor.panear(0, -salto); sincronizar(false); break;
          case 'ArrowLeft': motor.panear(salto, 0); sincronizar(false); break;
          case 'ArrowRight': motor.panear(-salto, 0); sincronizar(false); break;
          default: return;
        }
        ev.preventDefault();
      });
    }

    sincronizar(false);

    return {
      sincronizar: function () { sincronizar(false); },
      destruir: function () {
        clearTimeout(relojMov); clearTimeout(relojVelo); clearTimeout(relojAviso);
        if (anim) cancelAnimationFrame(anim);
        lienzo.removeEventListener('wheel', alRodar);
        caja.remove(); velo.remove(); aviso.remove();
        host.classList.remove('zc-host');
      },
      elementos: { caja: caja, velo: velo }
    };
  }

  global.ZoomCaribe = { montar: montar, TEXTOS_ES: TEXTOS_ES, TEXTOS_EN: TEXTOS_EN };
})(typeof window !== 'undefined' ? window : this);
