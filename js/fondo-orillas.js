/* ════════════════════════════════════════════════
   FONDO DE ORILLAS · cartografía propia
   ────────────────────────────────────────────────
   Los mapas del sitio pedían sus fondos a CARTO. Desde que CARTO exige
   llave de API, sus teselas llegan estampadas con la marca de agua
   «API KEY REQUIRED» sobre todo el Caribe. En vez de cambiar un
   proveedor por otro —y quedar a merced del siguiente cambio de precios—
   el fondo se dibuja aquí: la tierra es una silueta vectorial tomada de
   Natural Earth (dominio público) y el mar es el propio fondo oscuro del
   contenedor. Ninguna petición a terceros, ninguna llave, ningún logo
   ajeno encima del mapa; y la única línea que queda dibujada es la costa,
   que es justo lo que este mapa quiere mostrar: la orilla.

   Uso:  crearFondoOrillas(map, { tierra: 'ruta.geojson', fronteras: '…' })
   ════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  var PALETA = {
    tierra:    '#1D1A15',  // tierra apenas por encima del negro del mar
    costa:     'rgba(245,237,221,0.40)',
    frontera:  'rgba(245,237,221,0.12)',
    graticula: 'rgba(245,237,221,0.055)'
  };

  // Respaldo si el GeoJSON no carga (p. ej. al abrir el HTML con file://):
  // teselas de Esri, que no piden llave ni estampan marca de agua.
  var RESPALDO_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}';
  var RESPALDO_ATRIB = 'Esri · Natural Earth';

  function crearPane(map) {
    var pane = map.getPane('fondoOrillas');
    if (!pane) {
      pane = map.createPane('fondoOrillas');
      pane.style.zIndex = 200;          // donde iban las teselas
      pane.style.pointerEvents = 'none';
    }
    return pane;
  }

  // Retícula de 10° en 10°: da escala y oficio cartográfico sin nombrar nada.
  function graticula(map, render, paso) {
    var lineas = [];
    var i;
    for (i = -180; i <= 180; i += paso) lineas.push([[-85, i], [85, i]]);
    for (i = -80; i <= 80; i += paso) lineas.push([[i, -180], [i, 180]]);
    return L.polyline(lineas, {
      pane: 'fondoOrillas',
      renderer: render,
      color: PALETA.graticula,
      weight: 0.6,
      opacity: 1,
      interactive: false
    }).addTo(map);
  }

  function capaGeoJSON(map, render, datos, estilo) {
    return L.geoJSON(datos, {
      pane: 'fondoOrillas',
      renderer: render,
      interactive: false,
      style: function () { return estilo; }
    }).addTo(map);
  }

  function crearFondoOrillas(map, opciones) {
    var o = opciones || {};
    if (typeof L === 'undefined' || !map) return;

    crearPane(map);
    // Lienzo de canvas: 400 y pico de polígonos de costa se dibujan sin
    // castigar el arrastre. Los nodos siguen en SVG (los necesita el lector
    // de pantalla), así que no se toca el renderizador por defecto.
    var render = L.canvas({ pane: 'fondoOrillas', padding: 0.6 });

    if (o.graticula !== false) graticula(map, render, o.pasoGraticula || 10);

    // El GeoJSON esta recortado a un rectangulo. Si el lector se aleja lo
    // suficiente ve ese recorte como un borde recto en mitad del oceano, que
    // es peor que cualquier marca de agua. El limite ata el encuadre al area
    // con datos y recalcula el alejamiento minimo segun el ancho real de la
    // pantalla, en vez de fijar un numero que solo sirve en un monitor.
    if (o.limite) {
      var limite = L.latLngBounds(o.limite);
      map.setMaxBounds(limite);
      map.options.maxBoundsViscosity = 1;
      var ajustarMinZoom = function () {
        var z = map.getBoundsZoom(limite, false);
        if (isFinite(z)) map.setMinZoom(Math.min(z, map.getZoom()));
      };
      ajustarMinZoom();
      map.on('resize', ajustarMinZoom);
    }

    if (map.attributionControl) {
      map.attributionControl.addAttribution(
        'Costas: <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener">Natural Earth</a>'
      );
    }

    var pendientes = [fetch(o.tierra).then(function (r) { return r.ok ? r.json() : null; })];
    if (o.fronteras) {
      pendientes.push(fetch(o.fronteras).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }));
    }

    return Promise.all(pendientes).then(function (res) {
      var tierra = res[0];
      var fronteras = res[1];
      if (!tierra || !tierra.features || !tierra.features.length) throw new Error('sin datos de tierra');

      capaGeoJSON(map, render, tierra, {
        color: PALETA.costa,
        weight: o.grosorCosta || 0.7,
        opacity: 1,
        fillColor: PALETA.tierra,
        fillOpacity: 1,
        lineJoin: 'round'
      });

      if (fronteras && fronteras.features && fronteras.features.length) {
        capaGeoJSON(map, render, fronteras, {
          color: PALETA.frontera,
          weight: 0.6,
          opacity: 1,
          dashArray: '3,5',
          fill: false
        });
      }
      return true;
    }).catch(function () {
      // Respaldo silencioso: mejor un fondo de otro proveedor que un mar vacío.
      L.tileLayer(RESPALDO_URL, {
        pane: 'fondoOrillas',
        attribution: RESPALDO_ATRIB,
        maxZoom: 16
      }).addTo(map);
      return false;
    });
  }

  global.crearFondoOrillas = crearFondoOrillas;
})(window);
