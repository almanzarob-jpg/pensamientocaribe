/* ════════════════════════════════════════════════════════════════
   Ficha del nodo seleccionado · panel inferior del atlas

   Escucha el evento `atlas:seleccion` que emite `caribbean-map.js` y vuelca
   en el panel el mismo contenido que antes iba al globo: descripción, claves
   de pensamiento, formas culturales y la canción con su reproductor. No se
   pierde nada; cambia dónde se lee.

   Sin dependencias. Si el script no carga, el mapa sigue funcionando: los
   marcadores conservan su tooltip con el nombre.
   ════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var lienzo = document.querySelector('.atlas__lienzo');
  if (!lienzo) return;

  var ficha = lienzo.querySelector('.ficha');
  var pista = lienzo.querySelector('.atlas__pista');
  var vivo = document.getElementById('atlas-vivo');
  var cuerpo = ficha && ficha.querySelector('.ficha__cuerpo');
  var cerrar = ficha && ficha.querySelector('.ficha__cerrar');
  if (!ficha || !cuerpo || !cerrar) return;

  var abierto = null;

  document.addEventListener('atlas:seleccion', function (e) {
    var n = e.detail.nodo;

    ficha.querySelector('.ficha__nombre').textContent = n.nombre;
    ficha.querySelector('.ficha__territorio').textContent = n.pais;
    ficha.querySelector('.ficha__region').textContent = n.categoria;
    ficha.style.setProperty('--ficha-acento', e.detail.color);

    cuerpo.innerHTML = e.detail.html;
    ficha.hidden = false;
    lienzo.setAttribute('data-estado', 'con-seleccion');
    if (pista) pista.hidden = true;

    marcar(e.detail.marcador);
    abierto = e.detail.marcador;

    // El anuncio va a una región aparte. Mover el foco al panel en cada clic
    // le quitaría el control del teclado a quien recorre el mapa nodo a nodo.
    if (vivo) vivo.textContent = n.nombre + ', ' + n.pais + '. ' + n.desc;

    // El panel se desplaza a su inicio: con un nodo largo abierto antes,
    // el siguiente aparecería a media lectura.
    ficha.scrollTop = 0;
  });

  function marcar(marcador) {
    var previos = lienzo.querySelectorAll('.nodo-activo');
    for (var i = 0; i < previos.length; i++) {
      previos[i].classList.remove('nodo-activo');
    }
    var el = marcador && marcador.getElement && marcador.getElement();
    if (el) el.classList.add('nodo-activo');
  }

  function cerrarFicha() {
    ficha.hidden = true;
    lienzo.setAttribute('data-estado', 'sin-seleccion');
    if (pista) pista.hidden = false;
    if (vivo) vivo.textContent = '';

    // Devolver el foco al nodo que estaba abierto: si se pierde, quien navega
    // con teclado vuelve al principio del documento.
    var el = abierto && abierto.getElement && abierto.getElement();
    marcar(null);
    if (el && el.focus) el.focus();
    abierto = null;

    // El reproductor incrustado seguiría sonando con el panel cerrado.
    cuerpo.innerHTML = '';
  }

  cerrar.addEventListener('click', cerrarFicha);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !ficha.hidden) cerrarFicha();
  });

  // ── Teclado sobre los nodos ──
  // Leaflet marca los círculos como enfocables pero no les da nombre ni rol,
  // así que un lector de pantalla anuncia «gráfico» sin más. Se completa aquí,
  // una vez el mapa ha dibujado sus marcadores.
  function prepararNodos() {
    var nodos = lienzo.querySelectorAll('#caribe-leaflet-map path.leaflet-interactive');
    for (var i = 0; i < nodos.length; i++) {
      var el = nodos[i];
      if (el.getAttribute('data-listo')) continue;
      el.setAttribute('data-listo', '1');
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          this.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }
      });
    }
  }

  var intentos = 0;
  var reloj = setInterval(function () {
    prepararNodos();
    if (++intentos > 20) clearInterval(reloj);
  }, 300);
})();
