/* ════════════════════════════════════════════════
   MAPA INTERACTIVO DEL GRAN CARIBE
   Leaflet + cartografía oscura sobria + 42 nodos
   ════════════════════════════════════════════════ */
(function () {
  function init() {
    var container = document.getElementById('caribe-leaflet-map');
    if (!container || typeof L === 'undefined') return;

    // ── Configuración inicial ──
    var map = L.map('caribe-leaflet-map', {
      center: [15.5, -75.5],
      zoom: 5,
      minZoom: 4,
      maxZoom: 9,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
      worldCopyJump: false
    });

    // ── Tile layer oscuro y sobrio (CARTO Dark Matter) ──
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Etiqueta "Mar Caribe" en español (sutil, gris, estilo cartográfico)
    L.marker([15.4, -75.5], {
      icon: L.divIcon({
        className: 'caribe-sea-label',
        html: '<span class="caribe-sea-label-main">Mar Caribe</span>',
        iconSize: [200, 40],
        iconAnchor: [100, 20]
      }),
      interactive: false,
      keyboard: false
    }).addTo(map);

    // ── Nodos del Gran Caribe ──
    var nodos = [
      { nombre: 'Santa Marta',        pais: 'Colombia',                    lat: 11.2408, lng: -74.1990, categoria: 'Caribe colombiano',          desc: 'Bahía donde el grupo enuncia. Sierra Nevada, plantación bananera, vidas negras e indígenas, archivo de la Zona Bananera.', claves: ['Orilla de enunciación', 'Sierra Nevada', 'Zona Bananera'], cultura: 'Tambora · Chande · Fiesta del Mar', cancion: { titulo: 'Voy Ganao', artista: 'Sistema Solar', youtubeId: 'I9t4XTOwtEo' } },
      { nombre: 'Barranquilla',       pais: 'Colombia',                    lat: 10.9685, lng: -74.7813, categoria: 'Caribe colombiano',          desc: 'Puerta de oro, carnaval, cumbia. Cruce de migraciones árabes, judías y afrocaribeñas en la desembocadura del Magdalena.', claves: ['Carnaval', 'Cumbia', 'Migraciones'], cultura: 'Carnaval de Barranquilla (UNESCO) · Cumbia · Salsa', cancion: { titulo: 'La Rebuscona', artista: 'Pedro Ramayá Beltrán', youtubeId: 'QgJxmSl8qbc' } },
      { nombre: 'Cartagena de Indias',pais: 'Colombia',                    lat: 10.3910, lng: -75.4794, categoria: 'Caribe colombiano',          desc: 'Puerto negrero del Atlántico hispano. Murallas, Palenque, memoria de la trata. Patrimonio y herida colonial.', claves: ['Palenque', 'Memoria de la trata', 'Herida colonial'], cultura: 'Champeta · Picós · Bullerengue', cancion: { titulo: 'El Mecánico', artista: 'Charles King' } },
      { nombre: 'Riohacha',           pais: 'Colombia',                    lat: 11.5444, lng: -72.9072, categoria: 'Caribe colombiano',          desc: 'Frontera wayuu, contrabando, mar y desierto. Caribe indígena en disputa con la nación.', claves: ['Wayuu', 'Frontera', 'Caribe indígena'], cultura: 'Jayeechi wayuu · Vallenato · Tejido de mochilas', cancion: { titulo: 'La Gota Fría', artista: 'Emiliano Zuleta' } },
      { nombre: 'Valledupar',         pais: 'Colombia',                    lat: 10.4631, lng: -73.2532, categoria: 'Caribe colombiano',          desc: 'Magdalena Grande. Vallenato, juglares, hacienda ganadera, violencias y memorias campesinas.', claves: ['Vallenato', 'Hacienda', 'Memoria campesina'], cultura: 'Festival de la Leyenda Vallenata · Acordeón · Juglares', cancion: { titulo: 'La Diosa Coronada', artista: 'Diomedes Díaz' } },
      { nombre: 'San Andrés',         pais: 'Colombia',                    lat: 12.5847, lng: -81.7006, categoria: 'Caribe insular colombiano',  desc: 'Archipiélago raizal anglocaribeño. Creole, bautismo, pesca artesanal. Caribe colombiano que no es continental.', claves: ['Pueblo raizal', 'Creole', 'Archipiélago'], cultura: 'Calypso · Mento · Reggae isleño', cancion: { titulo: 'Sweet San Andrés', artista: 'Elkin Robinson' } },
      { nombre: 'Providencia',        pais: 'Colombia',                    lat: 13.3533, lng: -81.3739, categoria: 'Caribe insular colombiano',  desc: 'Isla raizal. Memoria puritana inglesa y vida afrocaribeña. Iota recordó la fragilidad de su soberanía.', claves: ['Pueblo raizal', 'Huracán Iota', 'Soberanía'], cultura: 'Calypso · Mento · Carreras de caballos en playa', cancion: { titulo: 'Old Providence', artista: 'tradicional raizal' } },
      { nombre: 'La Habana',          pais: 'Cuba',                        lat: 23.1136, lng: -82.3666, categoria: 'Antillas Mayores',           desc: 'Fernando Ortiz, transculturación, santería, pensamiento revolucionario. Capital intelectual afrocaribeña.', claves: ['Fernando Ortiz', 'Transculturación', 'Santería'], cultura: 'Son · Rumba · Timba · Cine cubano', cancion: { titulo: 'Chan Chan', artista: 'Buena Vista Social Club', youtubeId: 'tGbRZ73NvlY' } },
      { nombre: 'Santiago de Cuba',   pais: 'Cuba',                        lat: 20.0169, lng: -75.8302, categoria: 'Antillas Mayores',           desc: 'Cuna del son. Migraciones haitianas, francesas y africanas. Caribe insurgente.', claves: ['Son cubano', 'Migración haitiana', 'Insurgencia'], cultura: 'Son · Trova · Conga santiaguera', cancion: { titulo: 'Son de la Loma', artista: 'Trío Matamoros', youtubeId: 'LfdwBDo2jqA' } },
      { nombre: 'Kingston',           pais: 'Jamaica',                     lat: 17.9712, lng: -76.7936, categoria: 'Antillas Mayores',           desc: 'Marcus Garvey, panafricanismo, rastafari, reggae, dub. Pensamiento radical caribeño anglófono.', claves: ['Marcus Garvey', 'Rastafari', 'Panafricanismo'], cultura: 'Reggae · Dub · Dancehall · Sound systems', cancion: { titulo: 'Redemption Song', artista: 'Bob Marley', youtubeId: 'yv5xonFSC4c' } },
      { nombre: 'Port-au-Prince',     pais: 'Haití',                       lat: 18.5944, lng: -72.3074, categoria: 'Antillas Mayores',           desc: 'Primera revolución negra del mundo moderno. Vodú, oralidad y resistencia anticolonial.', claves: ['Revolución haitiana', 'Vodú', 'Anticolonialismo'], cultura: 'Rara · Konpa · Pintura naíf haitiana', cancion: { titulo: 'Choucoune', artista: 'tradicional haitiana' } },
      { nombre: 'Santo Domingo',      pais: 'República Dominicana',        lat: 18.4861, lng: -69.9312, categoria: 'Antillas Mayores',           desc: 'Antihaitianismo, identidad racial caribeña, migraciones y fronteras del archipiélago.', claves: ['Identidad racial', 'Frontera', 'Migraciones'], cultura: 'Merengue · Bachata · Gagá', cancion: { titulo: 'Compadre Pedro Juan', artista: 'Johnny Ventura' } },
      { nombre: 'San Juan',           pais: 'Puerto Rico',                 lat: 18.4655, lng: -66.1057, categoria: 'Antillas Mayores',           desc: 'Colonialidad vigente. Bomba y plena, negritud boricua, debates sobre soberanía caribeña.', claves: ['Colonialidad', 'Negritud boricua', 'Soberanía'], cultura: 'Bomba · Plena · Salsa · Reguetón', cancion: { titulo: 'Que Bonita Bandera', artista: 'César Concepción' } },
      { nombre: 'Bridgetown',         pais: 'Barbados',                    lat: 13.0975, lng: -59.6167, categoria: 'Antillas Menores',           desc: 'Caribe anglófono. George Lamming, plantación azucarera, descolonización tardía.', claves: ['George Lamming', 'Plantación azucarera', 'Descolonización'], cultura: 'Calypso · Soca · Crop Over', cancion: { titulo: 'Tempted to Touch', artista: 'Rupee', youtubeId: 'vPgCzQ1uKgQ' } },
      { nombre: 'Castries',           pais: 'Santa Lucía',                 lat: 14.0101, lng: -60.9875, categoria: 'Antillas Menores',           desc: 'Derek Walcott, créolité, lengua entre francés e inglés. El mar como historia.', claves: ['Derek Walcott', 'El mar es historia', 'Lenguas en contacto'], cultura: 'Soca · Kwéyòl · Festival de Jazz', cancion: { titulo: 'Famn Bele', artista: 'Ezra Charles' } },
      { nombre: 'Fort-de-France',     pais: 'Martinica',                   lat: 14.6161, lng: -61.0588, categoria: 'Antillas Menores',           desc: 'Aimé Césaire, Frantz Fanon, Édouard Glissant. Négritude, créolité, poética de la relación.', claves: ['Césaire · Fanon · Glissant', 'Négritude', 'Poética de la relación'], cultura: 'Zouk · Bèlè · Literatura antillana', cancion: { titulo: 'Zouk La Sé Sèl Médikaman Nou Ni', artista: "Kassav'", youtubeId: 'Dd3hjxxcTzw' } },
      { nombre: 'Pointe-à-Pitre',     pais: 'Guadalupe',                   lat: 16.2410, lng: -61.5331, categoria: 'Antillas Menores',           desc: 'Maryse Condé. Caribe francófono y departamento de ultramar.', claves: ['Maryse Condé', 'Ultramar francés'], cultura: 'Gwoka · Zouk · Carnaval guadalupeño', cancion: { titulo: 'Sirandane', artista: "Kassav'" } },
      { nombre: 'Roseau',             pais: 'Dominica',                    lat: 15.3092, lng: -61.3794, categoria: 'Antillas Menores',           desc: 'Última resistencia kalinago. Naturaleza y descolonización pendiente.', claves: ['Pueblo kalinago', 'Resistencia indígena'], cultura: 'Bouyon · Cadence-lypso', cancion: { titulo: "Tourment d'Amour", artista: 'Exile One' } },
      { nombre: "St. George's",       pais: 'Granada',                     lat: 12.0561, lng: -61.7488, categoria: 'Antillas Menores',           desc: 'Revolución del New Jewel Movement (1979–83), invasión estadounidense de 1983.', claves: ['New Jewel Movement', 'Revolución 1979', 'Invasión 1983'], cultura: 'Soca · Calypso · Big Drum', cancion: { titulo: 'Hot Hot Hot', artista: 'Arrow', youtubeId: '5HDgGzI0Pb8' } },
      { nombre: 'Kingstown',          pais: 'San Vicente y las Granadinas',lat: 13.1600, lng: -61.2248, categoria: 'Antillas Menores',           desc: 'Garífunas deportados desde aquí en 1797 hacia Centroamérica. Origen del Caribe continental negro.', claves: ['Garífunas', 'Deportación de 1797', 'Diáspora'], cultura: 'Soca · Big Drum · Raíz de la música garífuna', cancion: { titulo: 'Yurumein', artista: 'canto tradicional garífuna' } },
      { nombre: "St. John's",         pais: 'Antigua y Barbuda',           lat: 17.1274, lng: -61.8468, categoria: 'Antillas Menores',           desc: 'Jamaica Kincaid. Turismo, plantación y memoria.', claves: ['Jamaica Kincaid', 'Turismo', 'Plantación'], cultura: 'Calypso · Benna · Steelpan', cancion: { titulo: 'Tourist Leggo', artista: 'King Short Shirt', youtubeId: 'RVfXQVY9GAI' } },
      { nombre: 'Port of Spain',      pais: 'Trinidad y Tobago',           lat: 10.6549, lng: -61.5019, categoria: 'Caribe suroriental',         desc: 'C.L.R. James, Stuart Hall, calipso, carnaval. Caribe sur frente a Venezuela.', claves: ['C.L.R. James', 'Stuart Hall', 'Caribe sur'], cultura: 'Calipso · Soca · Steelpan · Carnaval de Trinidad', cancion: { titulo: 'Jean and Dinah', artista: 'Mighty Sparrow', youtubeId: 'JkJh2vBbQo8' } },
      { nombre: 'Belice',             pais: 'Belice',                      lat: 17.1899, lng: -88.4976, categoria: 'Caribe centroamericano',     desc: 'Garífunas, creoles, mayas. Caribe continental anglófono enclavado entre Yucatán y Guatemala.', claves: ['Garífunas', 'Creoles', 'Pueblos mayas'], cultura: 'Punta · Brukdown · Paranda', cancion: { titulo: 'Sopa de Caracol', artista: 'Banda Blanca', youtubeId: 'iPiHKOAMGqk' } },
      { nombre: 'Ciudad de Panamá',   pais: 'Panamá',                      lat: 8.9824,  lng: -79.5199, categoria: 'Caribe centroamericano',     desc: 'Canal, geopolítica del paso interoceánico, comunidades afroantillanas.', claves: ['Canal interoceánico', 'Afroantillanos', 'Geopolítica'], cultura: 'Salsa (Rubén Blades) · Reggae en español · Congos', cancion: { titulo: 'Pedro Navaja', artista: 'Rubén Blades', youtubeId: 'mWauuXEpEbs' } },
      { nombre: 'Colón',              pais: 'Panamá',                      lat: 9.3592,  lng: -79.9014, categoria: 'Caribe centroamericano',     desc: 'Entrada caribeña al canal. Migración antillana al ferrocarril y al canal en el siglo XIX-XX.', claves: ['Migración antillana', 'Ferrocarril', 'Canal'], cultura: 'Congo (UNESCO) · Calipso panameño', cancion: { titulo: 'Native Woman', artista: 'Lord Cobra' } },
      { nombre: 'Limón',              pais: 'Costa Rica',                  lat: 9.9907,  lng: -83.0350, categoria: 'Caribe centroamericano',     desc: 'Provincia afrocostarricense. Migración jamaiquina al banano y al ferrocarril.', claves: ['Afrocostarricenses', 'Migración jamaiquina', 'Banano'], cultura: 'Calypso limonense · Carnaval de Limón', cancion: { titulo: 'Cabin in the Wata', artista: 'Walter Ferguson', youtubeId: 'Xf7NP4lRvc8' } },
      { nombre: 'Bluefields',         pais: 'Nicaragua',                   lat: 12.0137, lng: -83.7635, categoria: 'Caribe centroamericano',     desc: 'Costa Caribe nicaragüense. Creoles, miskitos, autonomía y memoria de la Mosquitia.', claves: ['Mosquitia', 'Miskitos · Creoles', 'Autonomía'], cultura: 'Palo de Mayo · Country creole', cancion: { titulo: 'Mayo Ya', artista: 'tradicional palo de mayo' } },
      { nombre: 'Puerto Cortés',      pais: 'Honduras',                    lat: 15.8256, lng: -87.9297, categoria: 'Caribe centroamericano',     desc: 'Garífunas, plantación bananera, United Fruit Company.', claves: ['Garífunas', 'United Fruit Co.', 'Enclave bananero'], cultura: 'Punta garífuna · Paranda', cancion: { titulo: 'Wamada', artista: 'Aurelio Martínez' } },
      { nombre: 'Livingston',         pais: 'Guatemala',                   lat: 15.8283, lng: -88.7500, categoria: 'Caribe centroamericano',     desc: 'Comunidad garífuna en la desembocadura del Río Dulce. Caribe maya y afro.', claves: ['Garífunas', 'Río Dulce', 'Caribe maya'], cultura: 'Punta · Paranda · Tambores garífunas', cancion: { titulo: 'Naguya Nei', artista: 'Paul Nabor', youtubeId: 'i2R4xCtCViE' } },
      { nombre: 'Veracruz',           pais: 'México',                      lat: 19.1738, lng: -96.1342, categoria: 'Golfo de México',           desc: 'Puerto histórico. Africanías mexicanas, son jarocho, cimarronaje.', claves: ['Africanías mexicanas', 'Cimarronaje', 'Puerto histórico'], cultura: 'Son jarocho · Danzón · Fandango', cancion: { titulo: 'La Bamba', artista: 'tradicional son jarocho', youtubeId: 'mDSiET-brbU' } },
      { nombre: 'Campeche',           pais: 'México',                      lat: 19.8301, lng: -90.5349, categoria: 'Golfo de México',           desc: 'Puerto fortificado del Golfo. Mayas, piratería, comercio colonial.', claves: ['Piratería', 'Comercio colonial', 'Mayas'], cultura: 'Jarana · Son campechano', cancion: { titulo: 'El Torito', artista: 'jarana tradicional', youtubeId: 'mZxp6NYTouQ' } },
      { nombre: 'Mérida',             pais: 'México',                      lat: 20.9674, lng: -89.5926, categoria: 'Golfo de México',           desc: 'Yucatán maya. Hacienda henequenera, lengua maya, cruce con el Caribe insular.', claves: ['Henequén', 'Lengua maya', 'Yucatán'], cultura: 'Trova yucateca · Jarana · Vaquería', cancion: { titulo: 'Peregrina', artista: 'Ricardo Palmerín', youtubeId: 'VZ5InBVTec8' } },
      { nombre: 'Cancún',             pais: 'México',                      lat: 21.1619, lng: -86.8515, categoria: 'Caribe mexicano',           desc: 'Caribe turistizado. Tensión entre economía global y vida local maya.', claves: ['Turismo global', 'Vida maya', 'Despojo costero'], cultura: 'Maya pax · Trova peninsular', cancion: { titulo: 'Nunca', artista: 'Guty Cárdenas', youtubeId: 'lwGNln_LWH8' } },
      { nombre: 'Chetumal',           pais: 'México',                      lat: 18.5001, lng: -88.2961, categoria: 'Caribe mexicano',           desc: 'Frontera con Belice. Caribe mexicano más anglófono y afro.', claves: ['Frontera con Belice', 'Caribe afro'], cultura: 'Brukdown · Reggae fronterizo', cancion: { titulo: 'Sunrise', artista: 'Mr. Peters and the Boom & Chime' } },
      { nombre: 'Georgetown',         pais: 'Guyana',                      lat: 6.8013,  lng: -58.1551, categoria: 'Guyanas',                   desc: 'Caribe sudamericano anglófono. Indo-guyaneses, afro-guyaneses, plantación y petróleo.', claves: ['Indo-guyaneses', 'Afro-guyaneses', 'Petróleo'], cultura: 'Chutney · Soca · Calypso guyanés', cancion: { titulo: 'Mor Tor', artista: 'Terry Gajraj' } },
      { nombre: 'Paramaribo',         pais: 'Surinam',                     lat: 5.8520,  lng: -55.2038, categoria: 'Guyanas',                   desc: 'Caribe neerlandés. Cimarrones maroon, javaneses, hindostaníes, sranan tongo.', claves: ['Maroons', 'Sranan tongo', 'Caribe neerlandés'], cultura: 'Kaseko · Kawina · Baithak gana', cancion: { titulo: 'Wakaman', artista: 'Lieve Hugo' } },
      { nombre: 'Cayena',             pais: 'Guayana Francesa',            lat: 4.9224,  lng: -52.3135, categoria: 'Guyanas',                   desc: 'Departamento de ultramar francés. Caribe-Amazonía, presidio histórico, base espacial.', claves: ['Caribe-Amazonía', 'Presidio histórico', 'Ultramar'], cultura: 'Aleke · Kasékò · Carnaval de Cayena' },
      { nombre: 'Maracaibo',          pais: 'Venezuela',                   lat: 10.6545, lng: -71.6530, categoria: 'Caribe venezolano',         desc: 'Petroestado, lago y golfo. Wayuu transfronterizo con Colombia.', claves: ['Petróleo', 'Wayuu transfronterizo', 'Lago y golfo'], cultura: 'Gaita zuliana · Tambores de San Benito', cancion: { titulo: 'La Grey Zuliana', artista: 'Ricardo Aguirre', youtubeId: 'Vkwg5QUFhFc' } },
      { nombre: 'Coro',               pais: 'Venezuela',                   lat: 11.3946, lng: -69.6810, categoria: 'Caribe venezolano',         desc: 'Primer asentamiento europeo en tierra firme suramericana. Caribe colonial temprano.', claves: ['Colonial temprano', 'Tierra firme'], cultura: 'Polo coriano · Décimas' },
      { nombre: 'Caracas',            pais: 'Venezuela',                   lat: 10.4806, lng: -66.9036, categoria: 'Caribe venezolano',         desc: 'Capital caribeña andina. Independencias bolivarianas y geopolítica del Caribe sur.', claves: ['Independencias', 'Geopolítica', 'Caribe sur'], cultura: 'Salsa caraqueña · Tambores de la costa', cancion: { titulo: 'Llorarás', artista: "Oscar D'León", youtubeId: 'Obv4rk5Xs3s' } },
      { nombre: 'La Guaira',          pais: 'Venezuela',                   lat: 10.5990, lng: -66.9346, categoria: 'Caribe venezolano',         desc: 'Puerto de Caracas. Trata negrera y comercio colonial atlántico.', claves: ['Puerto colonial', 'Trata negrera'], cultura: 'Tambores de San Juan · Fulías' },
      { nombre: 'Porlamar',           pais: 'Venezuela',                   lat: 10.9570, lng: -63.8491, categoria: 'Caribe venezolano',         desc: 'Isla Margarita. Pesca de perlas, comercio caribeño, frontera con Trinidad.', claves: ['Pesca de perlas', 'Isla Margarita', 'Frontera Trinidad'], cultura: 'Polo margariteño · Galerón' }
    ];

    // Colores por categoría (paleta afrocaribeña sobria)
    var colorCategoria = {
      'Caribe colombiano':         '#7BB661',
      'Caribe insular colombiano': '#5DA84A',
      'Antillas Mayores':          '#F07A16',
      'Antillas Menores':          '#E89A3C',
      'Caribe centroamericano':    '#D83A2E',
      'Caribe venezolano':         '#C2410C',
      'Caribe mexicano':           '#B85C2E',
      'Golfo de México':           '#A66B3D',
      'Guyanas':                   '#8B4513',
      'Caribe suroriental':        '#9C4221'
    };

    // ── Formato de coordenadas legible ──
    function formatCoords(lat, lng) {
      var latDir = lat >= 0 ? 'N' : 'S';
      var lngDir = lng >= 0 ? 'E' : 'O';
      return Math.abs(lat).toFixed(2) + '°' + latDir + ' · ' + Math.abs(lng).toFixed(2) + '°' + lngDir;
    }

    var allMarkers = [];

    nodos.forEach(function (n) {
      var color = colorCategoria[n.categoria] || '#F5EDDD';
      var esColombia = n.categoria.indexOf('colombiano') !== -1;
      var radius = esColombia ? 8 : 6;

      var marker = L.circleMarker([n.lat, n.lng], {
        radius: radius,
        fillColor: color,
        color: esColombia ? '#FFFFFF' : color,
        weight: esColombia ? 2 : 1.2,
        opacity: 0.95,
        fillOpacity: esColombia ? 0.85 : 0.7,
        className: esColombia ? 'caribe-marker caribe-marker--colombia' : 'caribe-marker'
      });

      var tagsHtml = '';
      if (n.claves && n.claves.length) {
        tagsHtml = '<div class="caribe-popup-tags">' +
          n.claves.map(function (c) {
            return '<span style="border-color:' + color + '55; color:' + color + '">' + c + '</span>';
          }).join('') +
        '</div>';
      }

      var culturaHtml = n.cultura
        ? '<p class="caribe-popup-cultura"><span class="caribe-popup-cultura-icon">♪</span> ' + n.cultura + '</p>'
        : '';

      var cancionHtml = '';
      if (n.cancion && n.cancion.youtubeId) {
        cancionHtml =
          '<div class="caribe-popup-cancion-player">' +
            '<p class="caribe-popup-cancion-label"><span class="caribe-popup-cancion-icon">&#9658;</span> <em>' + n.cancion.titulo + '</em> &middot; ' + n.cancion.artista + '</p>' +
            '<iframe width="100%" height="120" src="https://www.youtube-nocookie.com/embed/' + n.cancion.youtubeId + '" title="' + n.cancion.titulo + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' +
          '</div>';
      } else if (n.cancion) {
        var query = encodeURIComponent(n.cancion.titulo + ' ' + n.cancion.artista);
        cancionHtml =
          '<a class="caribe-popup-cancion" href="https://www.youtube.com/results?search_query=' + query + '" target="_blank" rel="noopener">' +
            '<span class="caribe-popup-cancion-icon">&#9658;</span> ' +
            'Escuchar: <em>' + n.cancion.titulo + '</em> &middot; ' + n.cancion.artista +
          '</a>';
      }

      var popupHtml =
        '<div class="caribe-popup">' +
          '<div class="caribe-popup-head">' +
            '<span class="caribe-popup-dot" style="background:' + color + '"></span>' +
            '<span class="caribe-popup-cat" style="color:' + color + '">' + n.categoria + '</span>' +
          '</div>' +
          '<h4 class="caribe-popup-title">' + n.nombre + '</h4>' +
          '<p class="caribe-popup-country">' + n.pais + ' &nbsp;·&nbsp; ' + formatCoords(n.lat, n.lng) + '</p>' +
          '<p class="caribe-popup-desc">' + n.desc + '</p>' +
          culturaHtml +
          cancionHtml +
          tagsHtml +
        '</div>';

      var popupMaxWidth = (n.cancion && n.cancion.youtubeId) ? 320 : 300;
      marker.bindPopup(popupHtml, { className: 'caribe-popup-wrap', maxWidth: popupMaxWidth });
      marker.bindTooltip(n.nombre, { className: 'caribe-tooltip', direction: 'top', offset: [0, -8] });

      // Crecimiento al pasar el cursor
      marker.on('mouseover', function () {
        this.setStyle({ fillOpacity: 1 });
        this.setRadius(radius + 3);
      });
      marker.on('mouseout', function () {
        this.setStyle({ fillOpacity: esColombia ? 0.85 : 0.7 });
        this.setRadius(radius);
      });

      marker.categoria = n.categoria;
      marker.addTo(map);
      allMarkers.push(marker);
    });

    // ── Líneas conceptuales: rutas marítimas conectando regiones ──
    // Arco insular: Grandes y Pequeñas Antillas (animada)
    var arcoInsular = [
      [23.1136, -82.3666], // La Habana
      [20.0169, -75.8302], // Santiago de Cuba
      [18.5944, -72.3074], // Port-au-Prince
      [18.4861, -69.9312], // Santo Domingo
      [18.4655, -66.1057], // San Juan
      [17.1274, -61.8468], // St. John's
      [16.2410, -61.5331], // Pointe-à-Pitre
      [15.3092, -61.3794], // Roseau
      [14.6161, -61.0588], // Fort-de-France
      [14.0101, -60.9875], // Castries
      [13.1600, -61.2248], // Kingstown
      [13.0975, -59.6167], // Bridgetown
      [12.0561, -61.7488], // St. George's
      [10.6549, -61.5019]  // Port of Spain
    ];
    L.polyline(arcoInsular, {
      color: '#F07A16',
      weight: 1.6,
      opacity: 0.5,
      dashArray: '4,8',
      className: 'ruta-maritima'
    }).addTo(map);

    // Costa continental: Centroamérica (animada)
    var costaCentro = [
      [21.1619, -86.8515], // Cancún
      [18.5001, -88.2961], // Chetumal
      [17.1899, -88.4976], // Belice
      [15.8283, -88.7500], // Livingston
      [15.8256, -87.9297], // Puerto Cortés
      [12.0137, -83.7635], // Bluefields
      [9.9907,  -83.0350], // Limón
      [9.3592,  -79.9014]  // Colón
    ];
    L.polyline(costaCentro, {
      color: '#D83A2E',
      weight: 1.6,
      opacity: 0.45,
      dashArray: '4,8',
      className: 'ruta-maritima'
    }).addTo(map);

    // Costa Caribe venezolana (animada)
    var costaVenezuela = [
      [10.6545, -71.6530], // Maracaibo
      [11.3946, -69.6810], // Coro
      [10.5990, -66.9346], // La Guaira
      [10.9570, -63.8491]  // Porlamar
    ];
    L.polyline(costaVenezuela, {
      color: '#C2410C',
      weight: 1.6,
      opacity: 0.45,
      dashArray: '4,8',
      className: 'ruta-maritima'
    }).addTo(map);

    // ── Puntos de color en los botones de filtro ──
    var filterButtons = document.querySelectorAll('.caribe-mapa-filters .filter-btn');
    filterButtons.forEach(function (btn) {
      var layer = btn.getAttribute('data-layer');
      if (layer !== 'all' && colorCategoria[layer]) {
        var dot = document.createElement('span');
        dot.className = 'filter-dot';
        dot.style.background = colorCategoria[layer];
        btn.insertBefore(dot, btn.firstChild);
      }
    });

    // ── Leyenda visual con muestras de color ──
    var swatchesContainer = document.getElementById('caribe-legend-swatches');
    if (swatchesContainer) {
      var conteos = {};
      nodos.forEach(function (n) {
        conteos[n.categoria] = (conteos[n.categoria] || 0) + 1;
      });
      Object.keys(colorCategoria).forEach(function (cat) {
        var item = document.createElement('button');
        item.className = 'legend-swatch';
        item.type = 'button';
        item.setAttribute('data-layer', cat);
        item.innerHTML =
          '<span class="legend-swatch-dot" style="background:' + colorCategoria[cat] + '"></span>' +
          '<span class="legend-swatch-name">' + cat + '</span>' +
          '<span class="legend-swatch-count">' + (conteos[cat] || 0) + '</span>';
        item.addEventListener('click', function () {
          aplicarFiltro(cat);
        });
        swatchesContainer.appendChild(item);
      });
    }

    // ── Filtros por capa (compartido entre botones y leyenda) ──
    function aplicarFiltro(layer) {
      filterButtons.forEach(function (b) {
        b.classList.toggle('is-active', b.getAttribute('data-layer') === layer);
      });
      document.querySelectorAll('.legend-swatch').forEach(function (s) {
        s.classList.toggle('is-active', s.getAttribute('data-layer') === layer);
      });
      allMarkers.forEach(function (m) {
        if (layer === 'all' || m.categoria === layer) {
          if (!map.hasLayer(m)) m.addTo(map);
        } else {
          if (map.hasLayer(m)) map.removeLayer(m);
        }
      });
    }

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        aplicarFiltro(btn.getAttribute('data-layer'));
      });
    });

    // Habilitar scroll-wheel zoom solo cuando el mapa tiene foco
    container.addEventListener('click', function () {
      map.scrollWheelZoom.enable();
    });
    container.addEventListener('mouseleave', function () {
      map.scrollWheelZoom.disable();
    });

    // Recalcular tamaño cuando la sección entra en viewport (por animaciones)
    setTimeout(function () { map.invalidateSize(); }, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
