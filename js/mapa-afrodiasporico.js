/* ════════════════════════════════════════════════
   CON EL VAIVÉN DE LAS CORRIENTES
   Cartografías sonoras del Atlántico Negro
   Leaflet + arcos transatlánticos por épocas
   Inspirado en Errol L. Montes Pizarro (2018)
   ════════════════════════════════════════════════ */
(function () {
  // Fase 3 · datos declarativos: el mapa lee data/atlas/{nodes,edges}.json.
  // El bloque inline de más abajo queda SOLO como fallback si el fetch falla
  // (p. ej. al abrir el HTML con file://). En el sitio publicado manda el JSON.
  var SCRIPT_SRC = (document.currentScript && document.currentScript.src) || '';
  var ATLAS = null;

  function loadAtlas(done) {
    var base = SCRIPT_SRC.replace(/js\/[^\/?#]*(?:[?#].*)?$/, 'data/atlas/');
    if (!/data\/atlas\/$/.test(base)) { done(); return; }
    Promise.all([
      fetch(base + 'nodes.json').then(function (r) { return r.ok ? r.json() : null; }),
      fetch(base + 'edges.json').then(function (r) { return r.ok ? r.json() : null; })
    ]).then(function (res) {
      var n = res[0], e = res[1];
      if (n && n.length && e && e.length) {
        // Normaliza el esquema nuevo (source/target) al que espera el render (de/a).
        e.forEach(function (x) { x.de = x.source_nombre; x.a = x.target_nombre; });
        ATLAS = { nodos: n, rutas: e };
      }
      done();
    }).catch(function () { done(); });
  }

  function init() {
    var container = document.getElementById('atlantico-leaflet-map');
    if (!container || typeof L === 'undefined') return;

    // ── Configuración inicial: vista atlántica ──
    var map = L.map('atlantico-leaflet-map', {
      center: [16, -32],
      zoom: 3,
      minZoom: 2,
      maxZoom: 9,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
      worldCopyJump: false,
      maxBounds: [[-30, -125], [65, 70]],
      maxBoundsViscosity: 0.8
    });

    // Sin prefijo de Leaflet en la atribución (solo créditos de los mapas)
    if (map.attributionControl) map.attributionControl.setPrefix(false);

    // ── Tile layer oscuro y sobrio (CARTO Dark Matter) ──
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // ── Idioma del mapa: 'es' por defecto, o 'en' si la página lo indica ──
    var IDIOMA = (container.getAttribute('data-lang') === 'en') ? 'en' : 'es';
    function t(es, en) { return IDIOMA === 'en' ? en : es; }

    // Etiqueta del océano: el Atlántico Negro (Gilroy)
    L.marker([13.5, -36], {
      icon: L.divIcon({
        className: 'caribe-sea-label',
        html: '<span class="caribe-sea-label-main">' + t('Atlántico Negro', 'Black Atlantic') + '</span>',
        iconSize: [260, 40],
        iconAnchor: [130, 20]
      }),
      interactive: false,
      keyboard: false
    }).addTo(map);

    // ── Épocas históricas (capas del mapa) ──
    var epocas = {
      1: { nombre: 'Travesías fundacionales',                 nombre_en: 'Founding crossings',                     anos: '1795–1900',  anos_en: '1795–1900', color: '#C9B27C' },
      2: { nombre: 'Puertos y despertar panafricano',         nombre_en: 'Ports and the pan-African awakening',    anos: '1900–1945',  anos_en: '1900–1945', color: '#E8935A' },
      3: { nombre: 'Independencias y modernidades alternas',  nombre_en: 'Independence and alternative modernities', anos: '1945–1980', anos_en: '1945–1980', color: '#D83A2E' },
      4: { nombre: 'Retornos y contemporaneidad',             nombre_en: 'Returns and the contemporary',           anos: '1960–hoy',   anos_en: '1960–now',  color: '#5FB0B7' }
    };

    function epocaNombre(k) { return (IDIOMA === 'en' && epocas[k].nombre_en) ? epocas[k].nombre_en : epocas[k].nombre; }

    var paisEN = {
      'Trinidad y Tobago': 'Trinidad and Tobago', 'Martinica': 'Martinique', 'Haití': 'Haiti',
      'Islas Vírgenes': 'Virgin Islands', 'Estados Unidos': 'United States', 'Francia': 'France',
      'Sierra Leona': 'Sierra Leone', 'R.D. del Congo': 'D.R. Congo', 'Rep. del Congo': 'Republic of Congo',
      'Etiopía': 'Ethiopia', 'Reino Unido': 'United Kingdom', 'Sudáfrica': 'South Africa'
    };
    var categoriaEN = {
      'Caribe colombiano': 'Colombian Caribbean', 'Gran Caribe': 'Greater Caribbean',
      'África': 'Africa', 'Diáspora del Norte': 'Northern Diaspora'
    };
    var nombreEN = {
      'La Habana': 'Havana', 'Puerto España': 'Port of Spain', 'Puerto Príncipe': 'Port-au-Prince',
      'Cartagena de Indias': 'Cartagena', 'Nueva York': 'New York', 'París': 'Paris',
      'Adís Abeba': 'Addis Ababa', 'Londres': 'London', 'Johannesburgo': 'Johannesburg'
    };
    function nombreDisp(n) { return (IDIOMA === 'en' && nombreEN[n]) ? nombreEN[n] : n; }
    function paisDisp(p) { return (IDIOMA === 'en' && paisEN[p]) ? paisEN[p] : p; }
    function categoriaDisp(c) { return (IDIOMA === 'en' && categoriaEN[c]) ? categoriaEN[c] : c; }

    // ── Nodos: orillas del Atlántico Negro ──
    var colorCategoria = {
      'Caribe colombiano':   '#7BB661',
      'Gran Caribe':         '#F07A16',
      'África':              '#E0B341',
      'Diáspora del Norte':  '#9A8FC7'
    };

    var nodos = (ATLAS && ATLAS.nodos && ATLAS.nodos.length) ? ATLAS.nodos : [
      { nombre: 'Kingston',          pais: 'Jamaica',            lat: 17.9712, lng: -76.7936, categoria: 'Gran Caribe',        desc: 'De aquí salieron los cimarrones de Trelawny deportados en 1796, aquí nació Marcus Garvey y aquí el rastafari volvió la mirada hacia Etiopía. Puerto matriz del panafricanismo popular. Aquí nació también el dub: en los estudios de Kingston de los años setenta, King Tubby y Lee «Scratch» Perry convirtieron la consola de mezcla en instrumento y el estudio de grabación en organismo vivo. Louis Chude-Sokei lee ese gesto como tecnopoética afrodiaspórica: una manera de creolizar la máquina que hereda (y responde a) el mismo lenguaje de amo y esclavo con que Occidente pensó la tecnología desde el siglo XIX.', claves: ['Cimarrones', 'Marcus Garvey', 'Rastafari', 'Dub y tecnopoética'], cultura: 'Gumbé · Mento · Reggae · Dancehall', cancion: { titulo: 'Redemption Song', artista: 'Bob Marley', youtubeId: 'yv5xonFSC4c' }, fuente: 'Montes Pizarro 2018 · Chude-Sokei 2015',
        desc_en: 'The Trelawny Maroons deported in 1796 sailed from here; Marcus Garvey was born here; and here Rastafari turned its gaze toward Ethiopia. A matrix port for popular pan-Africanism. Dub was born here too: in the Kingston studios of the 1970s, King Tubby and Lee "Scratch" Perry turned the mixing console into an instrument and the recording studio into a living organism. Louis Chude-Sokei reads that gesture as an Afrodiasporic technopoetics — a way of creolizing the machine that inherits, and answers back to, the same master-and-slave language through which the West has thought about technology since the nineteenth century.', claves_en: ['Maroons', 'Marcus Garvey', 'Rastafari', 'Dub and technopoetics'], cultura_en: 'Gumbe · Mento · Reggae · Dancehall' },
      { nombre: 'La Habana',         pais: 'Cuba',               lat: 23.1136, lng: -82.3666, categoria: 'Gran Caribe',        desc: 'El son cubano viajó a África en discos de 78 revoluciones y allá lo escucharon como cosa propia, una rama que regresaba. Ninguna otra música caribeña sembró tanto en el continente.', claves: ['Son cubano', 'Discos GV', 'Semilla de la rumba congoleña'], cultura: 'Son · Rumba · Guaracha · Bolero', cancion: { titulo: 'Chan Chan', artista: 'Buena Vista Social Club', youtubeId: 'tGbRZ73NvlY' },
        nombre_en: 'Havana', desc_en: 'Cuban son traveled to Africa on 78 rpm records, and there it was heard as something of one\'s own — a branch returning home. No other Caribbean music took root on the continent so thoroughly.', claves_en: ['Cuban son', 'GV records', 'Seed of Congolese rumba'], cultura_en: 'Son · Rumba · Guaracha · Bolero' },
      { nombre: 'Puerto España',     pais: 'Trinidad y Tobago',  lat: 10.6549, lng: -61.5019, categoria: 'Gran Caribe',        desc: 'Cuna del calipso y de tres arquitectos del panafricanismo: Henry Sylvester Williams, organizador del primer congreso panafricano (1900), George Padmore y C.L.R. James. El calipso trinitario no solo hizo historia política: también se volvió arquitectura de la memoria literaria. Njelle Hamilton lee la novela Night Calypso de Lawrence Scott como una «memoria fonográfica» que narra el trauma colonial a través del calipsonero, y The Swinging Bridge de Ramabai Espinet como una novela construida con estética de dub (cortes, ecos, remezcla) para narrar el desplazamiento de la diáspora indocaribeña. Dos maneras de que la música, aquí, no solo se escuche: se recuerde.', claves: ['Sylvester Williams', 'Padmore · C.L.R. James', 'Calipso', 'Memoria fonográfica'], cultura: 'Calipso · Soca · Steelpan', cancion: { titulo: 'Birth of Ghana', artista: 'Lord Kitchener', youtubeId: '057BmLQ9MfU' }, fuente: 'Hamilton 2019',
        nombre_en: 'Port of Spain', desc_en: 'Birthplace of calypso and of three architects of pan-Africanism: Henry Sylvester Williams, organizer of the first Pan-African Conference (1900), George Padmore, and C.L.R. James. Trinidadian calypso didn\'t only make political history — it also became an architecture of literary memory. Njelle Hamilton reads Lawrence Scott\'s novel Night Calypso as a "phonographic memory" that narrates colonial trauma through the calypsonian, and Ramabai Espinet\'s The Swinging Bridge as a novel built with dub aesthetics — cuts, echoes, remix — to narrate Indo-Caribbean displacement. Two ways in which music, here, is not only heard: it is remembered.', claves_en: ['Sylvester Williams', 'Padmore · C.L.R. James', 'Calypso', 'Phonographic memory'], cultura_en: 'Calypso · Soca · Steelpan' },
      { nombre: 'Fort-de-France',    pais: 'Martinica',          lat: 14.6161, lng: -61.0588, categoria: 'Gran Caribe',        desc: 'Ciudad de Césaire y Fanon, laboratorio de la négritude. En 1967 recibió a la Ry-Co Jazz congoleña y de ese encuentro germinó parte de lo que después floreció como zouk.', claves: ['Aimé Césaire', 'Négritude', 'Semillero del zouk'], cultura: 'Bèlè · Biguine · Zouk', cancion: { titulo: 'Zouk La Sé Sèl Médikaman Nou Ni', artista: "Kassav'", youtubeId: 'Dd3hjxxcTzw' },
        pais_en: 'Martinique', desc_en: 'City of Césaire and Fanon, laboratory of négritude. In 1967 it welcomed the Congolese Ry-Co Jazz, and from that encounter part of what would later flourish as zouk began to take shape.', claves_en: ['Aimé Césaire', 'Négritude', 'Zouk\'s seedbed'], cultura_en: 'Bèlè · Biguine · Zouk' } ,
      { nombre: 'San Juan',          pais: 'Puerto Rico',        lat: 18.4655, lng: -66.1057, categoria: 'Gran Caribe',        desc: 'Desde Radio Universidad de Puerto Rico, Errol L. Montes Pizarro transmite Rumba Africana desde 2001: el programa que dio origen al libro que inspira este mapa. Y desde aquí Ángel Quintero Rivera pensó las «músicas mulatas» y la salsa como una «manera de hacer música»: teoría caribeña del vaivén.', claves: ['Rumba Africana', 'Quintero Rivera · Músicas mulatas', 'Bomba y plena'], cultura: 'Bomba · Plena · Salsa', cancion: { titulo: 'Rumba Africana', artista: 'Radio Universidad de Puerto Rico' },
        desc_en: 'From Radio Universidad de Puerto Rico, Errol L. Montes Pizarro has broadcast Rumba Africana since 2001 — the program that gave rise to the book behind this map. And it was here that Ángel Quintero Rivera theorized the "músicas mulatas" and salsa as a "way of making music": a Caribbean theory of vaivén, of back-and-forth motion.', claves_en: ['Rumba Africana', 'Quintero Rivera · Músicas mulatas', 'Bomba and plena'], cultura_en: 'Bomba · Plena · Salsa' },
      { nombre: 'Puerto Príncipe',   pais: 'Haití',              lat: 18.5944, lng: -72.3074, categoria: 'Gran Caribe',        desc: 'La revolución haitiana (1791–1804) es la matriz política de la negrura moderna: la primera vez que la libertad negra se hizo Estado. Benito Sylvain llevó esa herencia a los congresos panafricanos. En 1955 Nemours Jean-Baptiste bautizó el konpa direk, y esa cadencia terminó sonando en África occidental.', claves: ['Revolución haitiana', 'Benito Sylvain', 'Konpa direk 1955'], cultura: 'Vodú · Rara · Konpa', cancion: { titulo: 'Compas Mondial', artista: 'Nemours Jean-Baptiste', youtubeId: 'GoarcCaNQIA' },
        desc_en: 'The Haitian Revolution (1791–1804) is the political matrix of modern Blackness: the first time Black freedom became a state. Benito Sylvain carried that legacy to the Pan-African congresses. In 1955 Nemours Jean-Baptiste christened konpa direk, a cadence that would later find its way into West African music.', claves_en: ['Haitian Revolution', 'Benito Sylvain', 'Konpa direk, 1955'], cultura_en: 'Vodou · Rara · Konpa' },
      { nombre: 'Barranquilla',      pais: 'Colombia',           lat: 10.9685, lng: -74.7813, categoria: 'Caribe colombiano',  desc: 'Aquí se fabricaron los primeros picós con tecnología criolla en 1939, y aquí se formó la estética del «brillo»: las altas frecuencias de la zona del boliche. En las verbenas de San Roque, picós con nombre propio (El Coreano, El Timbalero, El Gran Fidel) volvieron la «música africana» cultura de barrio, con corresponsales que viajaban por discos exclusivos (Giraldo 2016). Desde 2014, Radio Cultural FM retransmite aquí Rumba Africana, y ASOBAILES impulsa el picó como patrimonio.', claves: ['Picós desde 1939', 'El «brillo» · San Roque', 'Picó como patrimonio'], cultura: 'Cumbia · Salsa · Música africana de picó', cancion: { titulo: 'Shakalaodé', artista: 'Wganda Kenya', youtubeId: 'bMOajYNU60E' },
        desc_en: 'The first picós were built here with homegrown technology in 1939, and here the aesthetic of "brillo" took shape: the high frequencies of the boliche district. In the open-air dances of San Roque, picós with names of their own — El Coreano, El Timbalero, El Gran Fidel — turned "African music" into neighborhood culture, with correspondents who traveled the world in search of exclusive records (Giraldo, 2016). Since 2014, Radio Cultural FM has rebroadcast Rumba Africana here, and ASOBAILES has pushed for the picó\'s recognition as heritage.', claves_en: ['Picós since 1939', 'The "brillo" · San Roque', 'Picó as heritage'], cultura_en: 'Cumbia · Salsa · Picó\'s African music' },
      { nombre: 'Cartagena de Indias', pais: 'Colombia',         lat: 10.3910, lng: -75.4794, categoria: 'Caribe colombiano',  desc: 'Antiguo puerto negrero convertido en capital de la champeta: aquí los picós volvieron patrimonio popular los discos africanos y aquí canta la escuela palenquera. El sonido cartagenero tiene estética propia: el «meke», el predominio de las bajas frecuencias, con epicentro en Torices y Crisanto Luque. Desde 2018, las asociaciones de las «tres perlas» impulsan el picó como patrimonio cultural inmaterial.', claves: ['Champeta', 'El «meke» · Torices', 'World Picó 2024'], cultura: 'Champeta · Bullerengue · Terapia', cancion: { titulo: 'El Mecánico', artista: 'Charles King' },
        desc_en: 'A former slaving port turned capital of champeta: here the picós made African records into popular heritage, and here the Palenque school sings. Cartagena\'s sound has its own aesthetic — the "meke," a preference for low frequencies, centered in Torices and Crisanto Luque. Since 2018, associations from the "three pearls" have pushed for the picó\'s recognition as intangible cultural heritage.', claves_en: ['Champeta', 'The "meke" · Torices', 'World Picó, 2024'], cultura_en: 'Champeta · Bullerengue · Terapia' },
      { nombre: 'San Basilio de Palenque', pais: 'Colombia',     lat: 10.1031, lng: -75.1997, categoria: 'Caribe colombiano',  desc: 'Primer pueblo libre de América y cuna de la champeta criolla. De aquí salieron Justo Valdez con Son Palenque, Viviano Torres con Anne Zwing, Hernando Hernández con Kussima, y los «Reyes de la Terapia»: Charles King, Luis Towers, Melchor. Cunin lo documenta: en el paso de la música africana a la champeta, el pueblo es la bisagra.', claves: ['Primer pueblo libre', 'Cuna de la champeta criolla', 'Lengua palenquera'], cultura: 'Champeta criolla · Lumbalú · Sexteto palenquero', cancion: { titulo: 'El Rey Soy Yo', artista: 'Justo Valdez y su Son Palenque', youtubeId: 'TTgMRziJ-Rc' },
        desc_en: 'The first free town in the Americas, and the birthplace of champeta criolla. From here came Justo Valdez with Son Palenque, Viviano Torres with Anne Zwing, Hernando Hernández with Kussima, and the "Kings of Terapia": Charles King, Luis Towers, Melchor. Cunin documents it: in the passage from African music to champeta, this town is the hinge.', claves_en: ['First free town in the Americas', 'Birthplace of champeta criolla', 'Palenquero language'], cultura_en: 'Champeta criolla · Lumbalú · Palenquero sextet' },
      { nombre: 'Charlotte Amalie',  pais: 'Islas Vírgenes',     lat: 18.3419, lng: -64.9307, categoria: 'Gran Caribe',        desc: 'Aquí nació en 1832 Edward Wilmot Blyden, considerado padre del panafricanismo letrado. Emigró a Liberia a los 18 años y pensó África como unidad y destino.', claves: ['Edward W. Blyden', 'Personalidad africana', 'Emigración a Liberia'], cultura: 'Quelbe · Calipso virginislandés',
        desc_en: 'Edward Wilmot Blyden was born here in 1832; he is considered the father of literary pan-Africanism. He emigrated to Liberia at eighteen and thought of Africa as a unity and a destiny.', claves_en: ['Edward W. Blyden', 'African personality', 'Emigration to Liberia'], cultura_en: 'Quelbe · Virgin Islands calypso' },
      { nombre: 'Nueva York',        pais: 'Estados Unidos',     lat: 40.7128, lng: -74.0060, categoria: 'Diáspora del Norte', desc: 'Harlem: sede de la UNIA de Garvey y del renacimiento negro; después, capital de la salsa con Fania y estudio donde Africando juntó a soneros neoyorquinos con voces senegalesas.', claves: ['Harlem · UNIA', 'Fania Records', 'Jazz negro'], cultura: 'Jazz · Salsa · Hip-hop',
        desc_en: 'Harlem: seat of Garvey\'s UNIA and of the Black cultural renaissance; later, the capital of salsa with Fania, and the studio where Africando brought New York soneros together with Senegalese voices.', claves_en: ['Harlem · UNIA', 'Fania Records', 'Black jazz'], cultura_en: 'Jazz · Salsa · Hip-hop' },
      { nombre: 'París',             pais: 'Francia',            lat: 48.8566, lng: 2.3522,   categoria: 'Diáspora del Norte', desc: 'Encrucijada de la négritude y de Présence Africaine (1947). En los años 80 sus estudios grabaron el soukous y el zouk que circularon por África y el Caribe.', claves: ['Présence Africaine', 'Négritude', 'Estudios del soukous'], cultura: 'Négritude · Soukous parisino · Zouk',
        desc_en: 'Crossroads of négritude and of Présence Africaine (1947). In the 1980s its studios recorded the soukous and zouk that circulated through Africa and the Caribbean.', claves_en: ['Présence Africaine', 'Négritude', 'Soukous studios'], cultura_en: 'Négritude · Parisian soukous · Zouk' },
      { nombre: 'Freetown',          pais: 'Sierra Leona',       lat: 8.4840,  lng: -13.2340, categoria: 'África',             desc: 'Puerto fundado para africanos liberados. Los cimarrones jamaiquinos llegaron en 1800 con el tambor gumbé: la primera música afrocaribeña en hacer el viaje de vuelta a África.', claves: ['Gumbé desde 1800', 'Krios', 'Maringa'], cultura: 'Gumbé · Maringa · Palmwine', cancion: { titulo: 'Fire Fire Fire', artista: 'Ebenezer Calender', youtubeId: 'p3jorkz5J7A' },
        desc_en: 'A port founded for liberated Africans. Jamaican Maroons arrived in 1800 carrying the gumbe drum: the first Afro-Caribbean music documented making the return voyage to Africa.', claves_en: ['Gumbe since 1800', 'Krios', 'Maringa'], cultura_en: 'Gumbe · Maringa · Palmwine' },
      { nombre: 'Monrovia',          pais: 'Liberia',            lat: 6.3005,  lng: -10.7969, categoria: 'África',             desc: 'Destino de Blyden y puerto de los marineros kru, que llevaron su guitarra de dos dedos por toda la costa occidental africana y tejieron la palmwine music.', claves: ['Edward W. Blyden', 'Marineros kru', 'Palmwine'], cultura: 'Palmwine · Highlife liberiano',
        desc_en: 'Blyden\'s destination, and a port for the kru sailors, who carried their two-finger guitar style along the whole West African coast and wove together the palmwine music tradition.', claves_en: ['Edward W. Blyden', 'Kru sailors', 'Palmwine'], cultura_en: 'Palmwine · Liberian highlife' },
      { nombre: 'Dakar',             pais: 'Senegal',            lat: 14.7167, lng: -17.4677, categoria: 'África',             desc: 'Ciudad de Senghor y del Festival Mundial de Artes Negras (1966). Su escena hizo del son y la salsa una lengua propia: de Laba Sosseh al Orchestra Baobab.', claves: ['Senghor', 'Festival de 1966', 'Salsa senegalesa'], cultura: 'Salsa senegalesa · Mbalax', cancion: { titulo: 'Utrus Horas', artista: 'Orchestra Baobab', youtubeId: 'm4yFmRNcX3I' },
        desc_en: 'City of Senghor and of the First World Festival of Negro Arts (1966). Its scene turned son and salsa into a language of its own, from Laba Sosseh to Orchestra Baobab.', claves_en: ['Senghor', '1966 Festival', 'Senegalese salsa'], cultura_en: 'Senegalese salsa · Mbalax' },
      { nombre: 'Conakry',           pais: 'Guinea',             lat: 9.6412,  lng: -13.5784, categoria: 'África',             desc: 'Tras la independencia (1958), la authenticité de Sékou Touré hizo de la música un proyecto de Estado: orquestas nacionales que tocaban son cubano con memoria mandinga.', claves: ['Authenticité', 'Sékou Touré', 'Orquestas nacionales'], cultura: 'Bembeya Jazz · Sily National',
        desc_en: 'After independence (1958), Sékou Touré\'s authenticité turned music into a matter of state: national orchestras played Cuban son with Mandinka memory.', claves_en: ['Authenticité', 'Sékou Touré', 'National orchestras'], cultura_en: 'Bembeya Jazz · Sily National' },
      { nombre: 'Accra',             pais: 'Ghana',              lat: 5.6037,  lng: -0.1870,  categoria: 'África',             desc: 'Capital del highlife y de la primera independencia subsahariana (1957). Nkrumah, formado en el panafricanismo diaspórico, hizo de la música parte de la nación nueva.', claves: ['Highlife', 'Kwame Nkrumah', 'Independencia 1957'], cultura: 'Highlife · Hiplife · Afrobeats', cancion: { titulo: 'All For You', artista: 'E.T. Mensah & The Tempos', youtubeId: 'OVB8isxRngs' },
        desc_en: 'The capital of highlife, and of the first sub-Saharan independence (1957). Nkrumah, shaped by diasporic pan-Africanism, made music part of the new nation.', claves_en: ['Highlife', 'Kwame Nkrumah', 'Independence, 1957'], cultura_en: 'Highlife · Hiplife · Afrobeats' },
      { nombre: 'Lagos',             pais: 'Nigeria',            lat: 6.5244,  lng: 3.3792,   categoria: 'África',             desc: 'Fela Kuti fundió highlife, jazz negro y funk en el afrobeat: panafricanismo sonoro y militante. Hoy los afrobeats dialogan de vuelta con el dancehall jamaiquino.', claves: ['Fela Kuti', 'Afrobeat', 'Kalakuta Republic'], cultura: 'Afrobeat · Jùjú · Afrobeats', cancion: { titulo: 'Water No Get Enemy', artista: 'Fela Kuti', youtubeId: 'IQBC5URoF0s' },
        desc_en: 'Fela Kuti fused highlife, Black American jazz, and funk into Afrobeat: a militant, sonic pan-Africanism. Today Afrobeats speaks back to Jamaican dancehall.', claves_en: ['Fela Kuti', 'Afrobeat', 'Kalakuta Republic'], cultura_en: 'Afrobeat · Jùjú · Afrobeats' },
      { nombre: 'Kinshasa',          pais: 'R.D. del Congo',     lat: -4.4419, lng: 15.2663,  categoria: 'África',             desc: 'El son cubano llegado en disco se volvió rumba congoleña, la música africana más influyente del siglo XX. El Indépendance Cha Cha de Grand Kallé fue el himno de las independencias.', claves: ['Rumba congoleña', 'Grand Kallé', 'Indépendance Cha Cha'], cultura: 'Rumba congoleña · Soukous', cancion: { titulo: 'Indépendance Cha Cha', artista: 'Grand Kallé & African Jazz', youtubeId: 'RxkZ95PYcrM' },
        desc_en: 'Cuban son, arriving on record, became Congolese rumba, the most influential African music of the twentieth century. Grand Kallé\'s "Indépendance Cha Cha" was the anthem of the independence era.', claves_en: ['Congolese rumba', 'Grand Kallé', 'Indépendance Cha Cha'], cultura_en: 'Congolese rumba · Soukous' },
      { nombre: 'Brazzaville',       pais: 'Rep. del Congo',     lat: -4.2634, lng: 15.2429,  categoria: 'África',             desc: 'La otra orilla del río Congo y de la rumba. De aquí y de Kinshasa salió la Ry-Co Jazz de Henri Bowane, escuela ambulante de música congoleña que llegó hasta las Antillas.', claves: ['Ry-Co Jazz', 'Henri Bowane', 'Las dos orillas'], cultura: 'Rumba congoleña · Ndombolo',
        desc_en: 'The other bank of the Congo River, and of rumba. From here and from Kinshasa came Henri Bowane\'s Ry-Co Jazz, a traveling school of Congolese music that reached as far as the Antilles.', claves_en: ['Ry-Co Jazz', 'Henri Bowane', 'The two banks'], cultura_en: 'Congolese rumba · Ndombolo' },
      { nombre: 'Adís Abeba',        pais: 'Etiopía',            lat: 9.0300,  lng: 38.7400,  categoria: 'África',             desc: 'Horizonte sagrado del etiopianismo y del rastafari. La coronación de Haile Selassie (1930) y las tierras de Shashamane hicieron de Etiopía la promesa del retorno.', claves: ['Etiopianismo', 'Haile Selassie', 'Shashamane'], cultura: 'Ethio-jazz · Himnos rastafari',
        desc_en: 'The sacred horizon of Ethiopianism and Rastafari. The coronation of Haile Selassie (1930) and the Shashamane land grant made Ethiopia the promise of return.', claves_en: ['Ethiopianism', 'Haile Selassie', 'Shashamane'], cultura_en: 'Ethio-jazz · Rastafari hymns' },
      { nombre: 'Londres',           pais: 'Reino Unido',        lat: 51.5074, lng: -0.1278,  categoria: 'Diáspora del Norte', desc: 'Henry Sylvester Williams fundó aquí la African Association en 1897 y convocó la primera Conferencia Panafricana en julio de 1900. Casi medio siglo después, el V Congreso Panafricano de Mánchester (1945) puso los cimientos del panafricanismo contemporáneo y trazó el programa de la liberación política de África.', claves: ['Conferencia de 1900', 'African Association 1897', 'Mánchester 1945'], cultura: 'Calipso de la Windrush · Sound systems', cancion: { titulo: 'London Is the Place for Me', artista: 'Lord Kitchener', youtubeId: 'dGt21q1AjuI' },
        desc_en: 'Henry Sylvester Williams founded the African Association here in 1897 and convened the first Pan-African Conference in July 1900. Nearly half a century later, the Fifth Pan-African Congress in Manchester (1945) laid the groundwork for contemporary pan-Africanism and charted the program for Africa\'s political liberation.', claves_en: ['1900 Conference', 'African Association, 1897', 'Manchester, 1945'], cultura_en: 'Windrush calypso · Sound systems' },
      { nombre: 'Mindelo',           pais: 'Cabo Verde',         lat: 16.8866, lng: -24.9880, categoria: 'África',             desc: 'Puerto criollo en medio del Atlántico. Aquí la cadence antillana pegó tan hondo que el grupo Apollo se formó como copia fiel de Exile One, y el zouk de Kassav&#39; encontró después una de sus orillas más fieles.', claves: ['Grupo Apollo', 'Cadence · Cabo-zouk', 'Puerto criollo atlántico'], cultura: 'Morna · Coladeira · Cabo-zouk',
        desc_en: 'A creole port in the middle of the Atlantic. Antillean cadence struck such a chord here that the group Apollo formed as a faithful copy of Exile One, and Kassav&#39;s zouk later found one of its most devoted shores.', claves_en: ['Grupo Apollo', 'Cadence · Cabo-zouk', 'Creole Atlantic port'], cultura_en: 'Morna · Coladeira · Cabo-zouk' },
      { nombre: 'Johannesburgo',     pais: 'Sudáfrica',          lat: -26.2041, lng: 28.0473, categoria: 'África',             desc: 'Cuando los Virginia Jubilee Singers de Orpheus McAdoo desembarcaron en Ciudad del Cabo en 1890, los coros negros sudafricanos adoptaron los espirituales como música propia. De esa escucha (el «estereomodernismo» que estudia Tsitsi Jaji) vienen el marabi de los shebeens, Sophiatown, la revista Zonk! y Miriam Makeba.', claves: ['Marabi · Sophiatown', 'Revista Zonk!', 'Estereomodernismo'], cultura: 'Marabi · Mbube · Isicathamiya · Jazz sudafricano', cancion: { titulo: 'Pata Pata', artista: 'Miriam Makeba', youtubeId: 'lNeP3hrm__k' },
        desc_en: 'When Orpheus McAdoo\'s Virginia Jubilee Singers landed in Cape Town in 1890, South Africa\'s Black choirs adopted spirituals as music of their own. From that listening — the "stereomodernism" Tsitsi Jaji studies — came the marabi of the shebeens, Sophiatown, Zonk! magazine, and Miriam Makeba.', claves_en: ['Marabi · Sophiatown', 'Zonk! magazine', 'Stereomodernism'], cultura_en: 'Marabi · Mbube · Isicathamiya · South African jazz' }
    ];

    // ── Rutas: arcos transatlánticos por época ──
    var rutas = (ATLAS && ATLAS.rutas && ATLAS.rutas.length) ? ATLAS.rutas : [
      // Época 1 · Travesías fundacionales
      { epoca: 1, de: 'Kingston', a: 'Freetown', curva: 0.22, titulo: 'El gumbé: el primer viaje de vuelta', anos: '1796–1800', desc: 'Los cimarrones de Trelawny, deportados a Nueva Escocia tras la segunda guerra cimarrona, fueron reembarcados a Freetown en 1800. Llevaron consigo el tambor gumbé: la primera música afrocaribeña documentada en regresar a África, donde echó ramas como goombay, gome y soumbe.', claves: ['Cimarrones de Trelawny', 'Vía Nueva Escocia', 'Tambor gumbé'], cancion: { titulo: 'Gumbay tradicional', artista: 'Salome Peters · Sierra Leona', youtubeId: 'ARZVVU9YRVs' }, fuente: 'Montes Pizarro 2018 · Bilby 2011',
        titulo_en: 'Gumbe: the first return voyage', anos_en: '1796–1800', desc_en: 'The Trelawny Maroons, deported to Nova Scotia after the Second Maroon War, were shipped onward to Freetown in 1800. They carried with them the gumbe drum — the first documented Afro-Caribbean music to make the journey back to Africa, where it branched into goombay, gome, and soumbe.', claves_en: ['Trelawny Maroons', 'Via Nova Scotia', 'Gumbe drum'] },
      { epoca: 1, de: 'Charlotte Amalie', a: 'Monrovia', curva: 0.16, titulo: 'Blyden: el panafricanismo letrado', anos: '1850–1912', desc: 'Edward Wilmot Blyden salió de St. Thomas hacia Liberia en 1850. Su idea de una «personalidad africana» (pensada desde el Caribe y escrita en África) abrió el camino intelectual que después recorrieron Garvey, Padmore y Nkrumah.', claves: ['Personalidad africana', 'Liberia y Sierra Leona', 'Caribe que piensa África'], fuente: 'Adi 2018',
        titulo_en: 'Blyden: literary pan-Africanism', anos_en: '1850–1912', desc_en: 'Edward Wilmot Blyden left St. Thomas for Liberia in 1850. His idea of an "African personality" — conceived in the Caribbean and written in Africa — opened the intellectual path that Garvey, Padmore, and Nkrumah would later follow.', claves_en: ['African personality', 'Liberia and Sierra Leone', 'A Caribbean that thinks Africa'] },
      { epoca: 1, de: 'Nueva York', a: 'Johannesburgo', curva: 0.12, titulo: 'Espirituales: el primer estéreo panafricano', anos: '1890–1898', desc: 'Los Virginia Jubilee Singers de Orpheus McAdoo desembarcaron en Ciudad del Cabo la noche del 30 de junio de 1890 y pasaron casi cinco años de gira: hasta el presidente Kruger los recibió en 1891. Los coros de la élite negra adoptaron los espirituales, y Erlmann traza desde ahí una línea continua que llega al canto coral zulú isicathamiya. Jaji lee en esa escucha el comienzo del «estereomodernismo»: la música afroamericana recibida en África como forma ya codificada de resistencia creativa.', claves: ['Ciudad del Cabo, 30-jun-1890', 'Del Hampton al isicathamiya', 'Estereomodernismo (Jaji)'], cancion: { titulo: 'Swing Low, Sweet Chariot (1909)', artista: 'Fisk Jubilee Singers', youtubeId: 'GUvBGZnL9rE' }, fuente: 'Erlmann 1991 · Jaji 2014',
        titulo_en: 'Spirituals: the first pan-African stereo', anos_en: '1890–1898', desc_en: 'Orpheus McAdoo\'s Virginia Jubilee Singers landed in Cape Town on the night of June 30, 1890, and toured for nearly five years — even President Kruger received them in 1891. Choirs of the Black elite adopted the spirituals, and Erlmann traces from there an unbroken line running to Zulu isicathamiya choral singing. Jaji reads in that act of listening the beginning of "stereomodernism": African American music received in Africa as an already-codified form of creative resistance.', claves_en: ['Cape Town, June 30, 1890', 'From Hampton to isicathamiya', 'Stereomodernism (Jaji)'] },
      // Época 2 · Puertos y despertar panafricano
      { epoca: 2, de: 'Freetown', a: 'Accra', curva: 0.25, titulo: 'Palmwine: puertos que se escuchan', anos: '1900–1930', desc: 'Los marineros kru llevaron su guitarra por los puertos de la costa occidental. La palmwine music que tejieron entre Freetown, Monrovia y Accra fue el suelo del que brotó el highlife ghanés: música de puerto, de encuentro y de vino de palma.', claves: ['Marineros kru', 'Guitarra de dos dedos', 'Raíz del highlife'], cancion: { titulo: 'All For You', artista: 'E.T. Mensah & The Tempos', youtubeId: 'OVB8isxRngs' }, fuente: 'Montes Pizarro 2018 · Collins 1994',
        titulo_en: 'Palmwine: ports that listen to each other', anos_en: '1900–1930', desc_en: 'Kru sailors carried their guitars from port to port along the West African coast. The palmwine music they wove together between Freetown, Monrovia, and Accra was the ground from which Ghanaian highlife grew — the music of harbors, of encounter, of palm wine.', claves_en: ['Kru sailors', 'Two-finger guitar', 'Root of highlife'] },
      { epoca: 2, de: 'Puerto España', a: 'Freetown', curva: 0.14, titulo: 'Regimientos y calipso', anos: '1914–1945', desc: 'El calipso ya era crónica social cantada en Trinidad (Rohlehr historió su transición desde 1890 y los calipsos de la Gran Guerra) cuando los soldados caribeños de los British West Indian Regiments lo llevaron a África occidental. En Freetown se cruzó con el gumbé y la palmwine y nació la maringa que Ebenezer Calender volvió clásica. «Everybody Loves Saturday Night» es de ida y de vuelta: nadie sabe ya de qué orilla es.', claves: ['West Indian Regiments', 'Calipso y maringa', 'Canciones sin orilla'], cancion: { titulo: 'Everybody Loves Saturday Night', artista: 'tradicional atlántica' }, fuente: 'Montes Pizarro 2018 · Rohlehr 1990',
        titulo_en: 'Regiments and calypso', anos_en: '1914–1945', desc_en: 'Calypso was already sung social chronicle in Trinidad — Rohlehr traces its transition from 1890 and the calypsos of the Great War — when Caribbean soldiers of the British West Indian Regiments carried it to West Africa. In Freetown it crossed with gumbe and palmwine, and maringa was born, the style Ebenezer Calender made a classic. "Everybody Loves Saturday Night" travels both ways: no one remembers anymore which shore it came from.', claves_en: ['West Indian Regiments', 'Calypso and maringa', 'Songs without a shore'] },
      { epoca: 2, de: 'Kingston', a: 'Nueva York', curva: -0.2, titulo: 'Garvey y la Black Star Line', anos: '1916–1927', desc: 'Marcus Garvey fundó en Harlem la UNIA, el mayor movimiento negro de masas del siglo XX, y una naviera (la Black Star Line) para unir comercial y espiritualmente a África con su diáspora. El proyecto naufragó; el imaginario del retorno, no.', claves: ['UNIA', 'Black Star Line', 'África para los africanos'], cancion: { titulo: 'Marcus Garvey', artista: 'Burning Spear', youtubeId: 'oGN3R49-CAE' }, fuente: 'Adi 2018',
        titulo_en: 'Garvey and the Black Star Line', anos_en: '1916–1927', desc_en: 'Marcus Garvey founded the UNIA in Harlem, the largest Black mass movement of the twentieth century, and a shipping line — the Black Star Line — meant to bind Africa to its diaspora commercially and spiritually. The venture sank; the imagination of return did not.', claves_en: ['UNIA', 'Black Star Line', 'Africa for the Africans'] },
      { epoca: 2, de: 'La Habana', a: 'Kinshasa', curva: 0.2, titulo: 'Discos GV: el son siembra la rumba', anos: '1932–1950', desc: 'La serie GV de discos de 78 rpm llevó el son cubano a los puertos africanos. En los dos Congos, «El Manisero» y sus parientes sonaron a memoria propia, y de esa escucha nació la rumba congoleña.', claves: ['Serie GV', 'Son en África', 'Escucha como reconocimiento'], cancion: { titulo: 'El Manisero', artista: 'Don Azpiazu & Antonio Machín', youtubeId: 'essMVyS1Om0' }, fuente: 'Montes Pizarro 2018 · Denning 2015',
        titulo_en: 'GV records: son plants rumba', anos_en: '1932–1950', desc_en: 'The GV series of 78 rpm records carried Cuban son to African ports. In the two Congos, "El Manisero" and its relatives sounded like memory recovered, and from that listening Congolese rumba was born.', claves_en: ['GV series', 'Son in Africa', 'Listening as recognition'] },
      { epoca: 2, de: 'La Habana', a: 'Lagos', curva: -0.22, titulo: 'El orisha atlántico: la nación lucumí', anos: '1890–1940', desc: 'La religión de los orishas no sobrevivió en Cuba como reliquia aislada. Matory muestra una nación yoruba transatlántica sostenida por viajeros, cartas y libros: el Renacimiento cultural lagosiano de fines del siglo XIX alimentó la ortodoxia de la nación lucumí en las dos orillas. Lo sagrado también fue correspondencia.', claves: ['Nación lucumí', 'Renacimiento lagosiano', 'Religión viajera'], cancion: { titulo: 'Cantos a los orishas', artista: 'Lázaro Ros' }, fuente: 'Matory 2005',
        titulo_en: 'The Atlantic orisha: the Lucumí nation', anos_en: '1890–1940', desc_en: 'The orisha religion did not survive in Cuba as an isolated relic. Matory shows a transatlantic Yoruba nation sustained by travelers, letters, and books: Lagos\'s cultural renaissance of the late nineteenth century fed the orthodoxy of the Lucumí nation on both shores. The sacred, too, traveled by correspondence.', claves_en: ['Lucumí nation', 'Lagos renaissance', 'A traveling religion'] },
      { epoca: 2, de: 'La Habana', a: 'Dakar', curva: 0.14, titulo: 'La Habana–París–Dakar: son y négritude', anos: '1930–1940', desc: 'Richard Shain documenta que la serie GV llegó a Dakar y Saint-Louis desde 1933, y que en los clubes afrocubanos de Montmartre estudiantes africanos y antillanos (Senghor entre ellos) compartieron pista y conversación: de esa sociabilidad emergió la négritude. La música afrocubana ofreció a los senegaleses una modernidad negra que no pasaba por Europa.', claves: ['Serie GV en Dakar', 'Clubes de Montmartre', 'Modernidad negra (Shain)'], fuente: 'Shain 2018',
        titulo_en: 'Havana–Paris–Dakar: son and négritude', anos_en: '1930–1940', desc_en: 'Richard Shain documents that the GV series reached Dakar and Saint-Louis as early as 1933, and that in the Afro-Cuban clubs of Montmartre, African and Antillean students — Senghor among them — shared the dance floor and the conversation from which négritude emerged. Afro-Cuban music offered Senegalese listeners a Black modernity that didn\'t run through Europe.', claves_en: ['GV records in Dakar', 'Montmartre clubs', 'Black modernity (Shain)'] },
      { epoca: 2, de: 'Puerto España', a: 'Londres', curva: 0.1, titulo: 'Los congresos panafricanos', anos: '1900–1945', desc: 'La primera Conferencia Panafricana se reunió en Londres en julio de 1900, convocada por Henry Sylvester Williams, abogado trinitario, y la African Association que había fundado en 1897. La serie culminó en Mánchester en 1945, con Padmore entre los organizadores y Nkrumah entre los delegados: de ahí salió, dice Adi, el programa práctico para la liberación política de África. El eje Trinidad–Londres muestra al Caribe organizando el panafricanismo desde el corazón del imperio.', claves: ['Sylvester Williams 1900', 'Mánchester 1945', 'Padmore · Nkrumah · Du Bois'], cancion: { titulo: 'London Is the Place for Me', artista: 'Lord Kitchener', youtubeId: 'dGt21q1AjuI' }, fuente: 'Adi 2018',
        titulo_en: 'The Pan-African congresses', anos_en: '1900–1945', desc_en: 'The first Pan-African Conference met in London in July 1900, convened by Henry Sylvester Williams, a Trinidadian lawyer, and the African Association he had founded in 1897. The series culminated in Manchester in 1945, with Padmore among the organizers and Nkrumah among the delegates: from it came, Adi argues, the practical program for Africa\'s political liberation. The Trinidad–London axis shows the Caribbean organizing pan-Africanism from the very heart of empire.', claves_en: ['Sylvester Williams, 1900', 'Manchester, 1945', 'Padmore · Nkrumah · Du Bois'] },
      // Época 3 · Independencias y modernidades alternas
      { epoca: 3, de: 'Kinshasa', a: 'Brazzaville', curva: 2.2, titulo: 'La rumba de las dos orillas', anos: '1948–1960', desc: 'A ambos lados del río Congo, Wendo Kolosoy, Grand Kallé y Franco convirtieron el son llegado en disco en una música nueva. El «Indépendance Cha Cha» (1960), compuesto durante la Mesa Redonda de Bruselas, fue el himno continental de las independencias.', claves: ['Wendo · Kallé · Franco', 'Mesa Redonda de Bruselas', 'Himno de las independencias'], cancion: { titulo: 'Marie Louise', artista: 'Wendo Kolosoy & Henri Bowane' }, fuente: 'Montes Pizarro 2018',
        titulo_en: 'Rumba of the two shores', anos_en: '1948–1960', desc_en: 'On both banks of the Congo River, Wendo Kolosoy, Grand Kallé, and Franco turned son arriving on record into a new music. "Indépendance Cha Cha" (1960), composed during the Brussels Round Table, became the continental anthem of independence.', claves_en: ['Wendo · Kallé · Franco', 'Brussels Round Table', 'Anthem of independence'] },
      { epoca: 3, de: 'La Habana', a: 'Conakry', curva: 0.18, titulo: 'Authenticité: el son como política de Estado', anos: '1958–1975', desc: 'Tras decir no a Francia en 1958, la Guinea de Sékou Touré hizo de la música un proyecto nacional: orquestas estatales como Bembeya Jazz tocaban son y bolero cubanos con memoria mandinga. Modernidad alternativa: ni imitación de Europa ni folclor congelado.', claves: ['Authenticité', 'Bembeya Jazz National', 'Modernidad alternativa'], cancion: { titulo: 'Armée Guinéenne', artista: 'Bembeya Jazz National', youtubeId: 'YTISiYK58Sk' }, fuente: 'Montes Pizarro 2018',
        titulo_en: 'Authenticité: son as state policy', anos_en: '1958–1975', desc_en: 'After saying no to France in 1958, Sékou Touré\'s Guinea made music a national project: state orchestras like Bembeya Jazz played Cuban son and bolero with Mandinka memory. An alternative modernity — neither imitation of Europe nor frozen folklore.', claves_en: ['Authenticité', 'Bembeya Jazz National', 'Alternative modernity'] },
      { epoca: 3, de: 'Dakar', a: 'La Habana', curva: -0.16, titulo: 'La salsa senegalesa', anos: '1960–1985', desc: 'En el club Miami de Ibra Kassé nació el Star Band, que los músicos senegaleses reconocen como su conjunto «fundacional» (Shain): con Laba Sosseh y luego el Orchestra Baobab, Dakar cantó son y salsa en wolof, mandinga y castellano fonético, hasta volver la música cubana una lengua franca del Atlántico Negro.', claves: ['Star Band del club Miami', 'Laba Sosseh · Baobab', 'Lengua franca atlántica'], cancion: { titulo: 'Senegal An X', artista: 'Laba Sosseh', youtubeId: 'Nwp7NH44bwQ' }, fuente: 'Shain 2018',
        titulo_en: 'Senegalese salsa', anos_en: '1960–1985', desc_en: 'In Ibra Kassé\'s Miami club, the Star Band was born — the group Senegalese musicians recognize as their "founding" ensemble (Shain). With Laba Sosseh and later Orchestra Baobab, Dakar sang son and salsa in Wolof, Mandinka, and phonetic Spanish, until Cuban music became a lingua franca of the Black Atlantic.', claves_en: ['Star Band, club Miami', 'Laba Sosseh · Baobab', 'Atlantic lingua franca'] },
      { epoca: 3, de: 'Fort-de-France', a: 'Dakar', curva: -0.3, titulo: 'Négritude: la ruta de la palabra', anos: '1935–1966', desc: 'Césaire desde Martinica, Senghor desde Senegal, Damas desde Guayana: la négritude se tejió pasando por París y Présence Africaine, y culminó en el Festival Mundial de Artes Negras de Dakar (1966). Shain recuerda que ese encuentro tuvo pista de baile: los clubes afrocubanos de Montmartre fueron laboratorio de la idea. La palabra también viaja en barco.', claves: ['Césaire · Senghor · Damas', 'Présence Africaine', 'Dakar 1966'], fuente: 'Shain 2018 · Gilroy 1993',
        titulo_en: 'Négritude: the route of the word', anos_en: '1935–1966', desc_en: 'Césaire from Martinique, Senghor from Senegal, Damas from Guiana: négritude was woven together by way of Paris and Présence Africaine, and culminated in the First World Festival of Negro Arts in Dakar (1966). Shain recalls that this encounter had a dance floor too: the Afro-Cuban clubs of Montmartre were a laboratory for the idea. The word also travels by ship.', claves_en: ['Césaire · Senghor · Damas', 'Présence Africaine', 'Dakar, 1966'] },
      { epoca: 3, de: 'Kingston', a: 'Adís Abeba', curva: 0.28, titulo: 'Etiopía: el retorno sagrado', anos: '1930–hoy', desc: 'La coronación de Haile Selassie (1930) confirmó para el etiopianismo jamaiquino una profecía: un rey negro en África. Sobre la concesión de tierras de Shashemene, los primeros repatriados (Helen y James Piper) llegaron en 1948, y Bonacci ha reconstruido esa historia con archivo en tres continentes. El rastafari hizo de Etiopía horizonte espiritual y del reggae su vehículo planetario.', claves: ['Etiopianismo', 'Shashemene 1948', 'Reggae roots'], cancion: { titulo: 'Exodus', artista: 'Bob Marley & The Wailers', youtubeId: 'OSOqWgqwynQ' }, fuente: 'Bonacci 2015 · Adi 2018',
        titulo_en: 'Ethiopia: the sacred return', anos_en: '1930–now', desc_en: 'The coronation of Haile Selassie (1930) confirmed, for Jamaican Ethiopianism, a prophecy: a Black king in Africa. On land granted at Shashemene, the first repatriates — Helen and James Piper — arrived in 1948, and Bonacci has reconstructed that history from archives on three continents. Rastafari made Ethiopia a spiritual horizon and reggae its planetary vehicle.', claves_en: ['Ethiopianism', 'Shashemene, 1948', 'Reggae roots'] },
      { epoca: 3, de: 'Accra', a: 'Lagos', curva: 0.4, titulo: 'Del highlife al afrobeat', anos: '1950–1977', desc: 'El highlife viajó de Accra a Lagos y allí Fela Kuti lo fundió con el jazz negro americano y el funk: el afrobeat, música panafricanista militante que hizo de la canción una asamblea política. Kalakuta Republic fue su territorio liberado.', claves: ['Fela Kuti', 'Jazz negro + highlife', 'Canción como asamblea'], fuente: 'Montes Pizarro 2018',
        titulo_en: 'From highlife to Afrobeat', anos_en: '1950–1977', desc_en: 'Highlife traveled from Accra to Lagos, where Fela Kuti fused it with Black American jazz and funk: Afrobeat, a militant pan-Africanist music that turned the song into a political assembly. Kalakuta Republic was its liberated territory.', claves_en: ['Fela Kuti', 'Black jazz + highlife', 'Song as assembly'] },
      { epoca: 3, de: 'Dakar', a: 'Lagos', curva: -0.18, titulo: 'Los festivales panafricanos', anos: '1966–1977', desc: 'El Festival Mundial de Artes Negras de Dakar (1966), impulsado por Senghor, fue la primera ocasión (señala Jaji) en que artistas negros de todo el planeta practicaron el panafricanismo cultural a gran escala. El formato probó su durabilidad: Argel 1969, Lagos con el FESTAC 77. Y los festivales generaron también contradiscursos frente al panafricanismo de Estado.', claves: ['FESMAN 1966', 'FESTAC 77', 'Contradiscursos (Jaji)'], fuente: 'Jaji 2014',
        titulo_en: 'The pan-African festivals', anos_en: '1966–1977', desc_en: 'The First World Festival of Negro Arts in Dakar (1966), driven by Senghor, was the first occasion — Jaji notes — on which Black artists from across the globe practiced cultural pan-Africanism at scale. The format proved durable: Algiers in 1969, Lagos with FESTAC 77. And the festivals also generated counter-discourses against state pan-Africanism.', claves_en: ['FESMAN 1966', 'FESTAC 77', 'Counter-discourses (Jaji)'] },
      { epoca: 3, de: 'Nueva York', a: 'Accra', curva: 0.16, titulo: 'Jazz ambassadors: Satchmo en Accra', anos: '1956–1961', desc: 'Cuando Armstrong aterrizó en Accra en 1956, la ciudad lo recibió como a nadie antes. Cantó «Black and Blue» y Nkrumah lo escuchó con lágrimas en los ojos. En 1960 los congoleños lo pasearon en un trono por Leopoldville, mientras la CIA conspiraba contra Lumumba en la misma ciudad. Von Eschen documenta esa ironía: el jazz como embajador de un país que no resolvía su propio racismo.', claves: ['Accra 1956', 'Nkrumah y «Black and Blue»', 'Leopoldville 1960'], cancion: { titulo: 'Black and Blue', artista: 'Louis Armstrong', youtubeId: '2LDPUfbXRLM' }, fuente: 'Von Eschen 2004',
        titulo_en: 'Jazz ambassadors: Satchmo in Accra', anos_en: '1956–1961', desc_en: 'When Armstrong landed in Accra in 1956, the city welcomed him like no one before. He sang "Black and Blue," and Nkrumah listened with tears in his eyes. In 1960 the Congolese carried him through Leopoldville on a throne, while the CIA plotted against Lumumba in that same city. Von Eschen documents the irony: jazz as ambassador for a country that hadn\'t settled its own racism.', claves_en: ['Accra, 1956', 'Nkrumah and "Black and Blue"', 'Leopoldville, 1960'] },
      { epoca: 3, de: 'Nueva York', a: 'Kinshasa', curva: 0.26, titulo: 'Fania en Zaire 74: la salsa vuelve al Congo', anos: '1974', desc: 'Del 22 al 24 de septiembre de 1974, el festival Zaire 74 reunió en el Stade du 20 Mai de Kinshasa a James Brown, B.B. King, Miriam Makeba, la TPOK Jazz de Franco y la Fania All Stars con Celia Cruz, como antesala del combate Ali–Foreman. Celia cantó «Quimbara» y «Guantanamera» ante el público kinés. El círculo se cerró esa noche: el son que había sembrado la rumba congoleña en discos GV volvía convertido en salsa, al mismo estadio donde reinaban sus nietos congoleños.', claves: ['Stade du 20 Mai', 'Celia Cruz · «Quimbara»', 'Antesala del Ali–Foreman'], cancion: { titulo: 'Quimbara (en vivo, Zaire 1974)', artista: 'Celia Cruz & Fania All Stars', youtubeId: 'AXN-_asIaYs' }, fuente: 'Zaire 74: álbum y film Live in Africa · Manuel 1995 (Fania)',
        titulo_en: 'Fania at Zaire 74: salsa returns to the Congo', anos_en: '1974', desc_en: 'From September 22 to 24, 1974, the Zaire 74 festival brought James Brown, B.B. King, Miriam Makeba, Franco\'s TPOK Jazz, and the Fania All Stars with Celia Cruz to Kinshasa\'s Stade du 20 Mai, as a prelude to the Ali–Foreman fight. Celia sang "Quimbara" and "Guantanamera" before a Kinois crowd. The circle closed that night: the son that had planted Congolese rumba by way of GV records came back transformed into salsa, in the very stadium where its Congolese grandchildren now reigned.', claves_en: ['Stade du 20 Mai', 'Celia Cruz · "Quimbara"', 'Prelude to Ali–Foreman'] },
      // Época 4 · Retornos y contemporaneidad
      { epoca: 4, de: 'Brazzaville', a: 'Fort-de-France', curva: 0.24, titulo: 'Ry-Co Jazz: África toca en las Antillas', anos: '1967–1971', desc: 'Fundada por Henri Bowane, curtida en giras por África occidental y radicada luego en París, la Ry-Co Jazz llegó en 1967 a Martinica y Guadalupe. Su rumba congoleña se mezcló con la biguine y el konpa: una de las semillas de lo que germinaría como zouk.', claves: ['Rythme Congolais', 'Gira antillana 1967', 'Semilla del zouk'], cancion: { titulo: 'Bonne Année', artista: 'Ry-Co Jazz', youtubeId: 'Gto9mh58vRE' }, fuente: 'Montes Pizarro 2018 · Stewart 2000',
        titulo_en: 'Ry-Co Jazz: Africa plays in the Antilles', anos_en: '1967–1971', desc_en: 'Founded by Henri Bowane, seasoned on tours through West Africa and later based in Paris, Ry-Co Jazz reached Martinique and Guadeloupe in 1967. Its Congolese rumba mixed with biguine and konpa — one of the seeds of what would germinate as zouk.', claves_en: ['Rythme Congolais', '1967 Antillean tour', 'Zouk\'s seed'] },
      { epoca: 4, de: 'Kinshasa', a: 'Cartagena de Indias', curva: 0.2, titulo: 'La champeta africana: los discos que llegaron', anos: '1970–1990', desc: 'Marinos, coleccionistas y corresponsales picoteros trajeron a los puertos colombianos el soukous de los dos Congos, el highlife y el jùjú nigerianos, el mbaqanga sudafricano. Los picós convirtieron ese repertorio en patrimonio popular y lo bailaron con nombre propio: «música africana». El éxito continental de «Sweet Mother» sonó en las verbenas como en Lagos.', claves: ['Soukous · Highlife · Mbaqanga', 'Corresponsales picoteros', '«Música africana»'], cancion: { titulo: 'Sweet Mother', artista: 'Prince Nico Mbarga', youtubeId: '3mecNrIaWOA' }, fuente: 'Cunin 2006 · Giraldo Barbosa 2016 · Ewens 1991',
        titulo_en: 'African champeta: the records that arrived', anos_en: '1970–1990', desc_en: 'Sailors, collectors, and picotero correspondents brought Colombian ports the soukous of the two Congos, Nigerian highlife and jùjú, South African mbaqanga. The picós turned that repertoire into popular heritage and danced it under a name of its own: "African music." The continental hit "Sweet Mother" sounded at the verbenas just as it did in Lagos.', claves_en: ['Soukous · Highlife · Mbaqanga', 'Picotero correspondents', '"African music"'] },
      { epoca: 4, de: 'San Basilio de Palenque', a: 'Cartagena de Indias', curva: 1.6, titulo: 'La champeta criolla: Palenque responde', anos: '1984–hoy', desc: 'A mediados de los ochenta, los músicos palenqueros dejaron de solo versionar los discos africanos y grabaron lo suyo: Justo Valdez y Son Palenque abrieron el camino en el Festival de Música del Caribe de 1984, Viviano Torres lo consolidó con Anne Zwing en 1991. La champeta criolla es la respuesta del primer pueblo libre de América a la música del continente: África escuchada, bailada y reinventada en lengua propia.', claves: ['Festival del Caribe 1984', 'Justo Valdez → Viviano Torres', 'Respuesta criolla'], cancion: { titulo: 'Paquete Chileno', artista: 'Viviano Torres · Anne Zwing', youtubeId: '-BfqjW1tb5w' }, fuente: 'Cunin 2003 · Montes Pizarro 2018',
        titulo_en: 'Champeta criolla: Palenque answers back', anos_en: '1984–now', desc_en: 'By the mid-1980s, Palenquero musicians stopped merely covering African records and began recording their own: Justo Valdez and Son Palenque opened the way at the 1984 Caribbean Music Festival, and Viviano Torres consolidated it with Anne Zwing in 1991. Champeta criolla is the first free town in the Americas answering back to the music of the continent: Africa heard, danced, and reinvented in a language of its own.', claves_en: ['1984 Caribbean Festival', 'Justo Valdez → Viviano Torres', 'A creole answer'] },
      { epoca: 4, de: 'Nueva York', a: 'Dakar', curva: 0.2, titulo: 'Africando: dos orillas, un estudio', anos: '1993–hoy', desc: 'Africando juntó en Nueva York a soneros boricuas y dominicanos con las grandes voces de la salsa senegalesa. El disco confirmó lo que ambas orillas ya sabían: llevaban medio siglo cantando lo mismo. La salsa, dice Quintero Rivera, es una «manera de hacer música», y esa manera cabe en las dos orillas.', claves: ['Salsa atlántica', 'Voces senegalesas', '«Manera de hacer música»'], cancion: { titulo: 'Yay Boy', artista: 'Africando', youtubeId: 'x0acVDXeBrc' }, fuente: 'Shain 2018 · Quintero Rivera 1998',
        titulo_en: 'Africando: two shores, one studio', anos_en: '1993–now', desc_en: 'Africando brought together, in New York, Puerto Rican and Dominican soneros with the great voices of Senegalese salsa. The record confirmed what both shores already knew: they had been singing the same thing for half a century. Salsa, Quintero Rivera says, is a "way of making music," and that way fits both shores at once.', claves_en: ['Atlantic salsa', 'Senegalese voices', '"A way of making music"'] },
      { epoca: 4, de: 'Lagos', a: 'Kingston', curva: 0.24, titulo: 'Afrobeats y dancehall: el diálogo sigue', anos: '2010–hoy', desc: 'Los afrobeats nigerianos y ghaneses conversan hoy con el dancehall jamaiquino y el reguetón caribeño en tiempo real: colaboraciones, riddims compartidos, giras cruzadas. El circuito que este mapa dibuja sigue abierto.', claves: ['Afrobeats', 'Riddims compartidos', 'Presente sonoro'], cancion: { titulo: 'Ye', artista: 'Burna Boy', youtubeId: 'lPe09eE6Xio' }, fuente: 'registro contemporáneo',
        titulo_en: 'Afrobeats and dancehall: the dialogue continues', anos_en: '2010–now', desc_en: 'Nigerian and Ghanaian Afrobeats now converse with Jamaican dancehall and Caribbean reggaetón in real time: collaborations, shared riddims, crossed tours. The circuit this map traces is still open.', claves_en: ['Afrobeats', 'Shared riddims', 'A living present'] },
      { epoca: 4, de: 'Fort-de-France', a: 'Mindelo', curva: 0.18, titulo: 'Cadence y zouk: el eco caboverdiano', anos: '1970–1990', desc: 'La cadence antillana (con Exile One de Dominica al frente) caló en el África occidental francesa y portuguesa. En Cabo Verde el grupo Apollo se formó como copia fiel de Exile One. Y cuando Kassav&#39; llevó el zouk a la costa africana, su éxito se comparó allá con el de los Beatles. La raíz de toda esa familia rítmica es haitiana: el konpa direk que Nemours Jean-Baptiste bautizó en 1955.', claves: ['Exile One → Apollo', 'Kassav&#39; en África', 'Raíz konpa'], cancion: { titulo: 'Cadence-lypso', artista: 'Exile One · Dominica All Stars', youtubeId: 'wh1c8gbCOoA' }, fuente: 'Guilbault 1993 · Manuel 1995',
        titulo_en: 'Cadence and zouk: the Cabo Verdean echo', anos_en: '1970–1990', desc_en: 'Antillean cadence — with Dominica\'s Exile One leading the way — struck deep in francophone and lusophone West Africa. In Cabo Verde, the group Apollo formed as a faithful copy of Exile One. And when Kassav&#39; brought zouk to the African coast, its success there was compared to the Beatles\'. The root of that whole rhythmic family is Haitian: the konpa direk Nemours Jean-Baptiste christened in 1955.', claves_en: ['Exile One → Apollo', 'Kassav&#39; in Africa', 'Konpa\'s root'] },
      { epoca: 4, de: 'San Juan', a: 'Barranquilla', curva: 0.35, titulo: 'Rumba Africana: la radio como puente', anos: '2001–hoy', desc: 'Desde 2001, Errol L. Montes Pizarro transmite Rumba Africana por Radio Universidad de Puerto Rico; desde 2014 la retransmite Radio Cultural FM de Barranquilla. El libro que inspira este mapa nació de ese programa: la escucha compartida como método panafricanista.', claves: ['Radio Universidad PR', 'Radio Cultural FM', 'Escucha compartida'], fuente: 'Montes Pizarro 2018',
        titulo_en: 'Rumba Africana: radio as a bridge', anos_en: '2001–now', desc_en: 'Since 2001, Errol L. Montes Pizarro has broadcast Rumba Africana on Radio Universidad de Puerto Rico; since 2014, Radio Cultural FM of Barranquilla has rebroadcast it. The book behind this map was born from that program: shared listening as a pan-African method.', claves_en: ['Radio Universidad PR', 'Radio Cultural FM', 'Shared listening'] }
    ];

    // ── Utilidades ──
    function buscarNodo(nombre) {
      for (var i = 0; i < nodos.length; i++) {
        if (nodos[i].nombre === nombre) return nodos[i];
      }
      return null;
    }

    // Identificador estable para enlaces directos (#ruta=... / #puerto=...)
    function slugDe(texto) {
      return texto.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[«»"'’,:;.!?()]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
        .replace(/\-+/g, '-')
        .replace(/^\-|\-$/g, '');
    }

    function fijarEnlace(tipo, texto) {
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', '#' + tipo + '=' + slugDe(texto));
      }
    }

    function formatCoords(lat, lng) {
      var latDir = lat >= 0 ? 'N' : 'S';
      var lngDir = lng >= 0 ? 'E' : (IDIOMA === 'en' ? 'W' : 'O');
      return Math.abs(lat).toFixed(2) + '°' + latDir + ' · ' + Math.abs(lng).toFixed(2) + '°' + lngDir;
    }

    // Arco cuadrático de Bézier entre dos puntos (en coordenadas geográficas)
    function trazarArco(p1, p2, k) {
      var mLat = (p1[0] + p2[0]) / 2;
      var mLng = (p1[1] + p2[1]) / 2;
      var dLat = p2[0] - p1[0];
      var dLng = p2[1] - p1[1];
      var ctrlLat = mLat + dLng * k;
      var ctrlLng = mLng - dLat * k;
      var puntos = [];
      for (var t = 0; t <= 1.0001; t += 0.025) {
        var a = (1 - t) * (1 - t);
        var b = 2 * (1 - t) * t;
        var c = t * t;
        puntos.push([
          a * p1[0] + b * ctrlLat + c * p2[0],
          a * p1[1] + b * ctrlLng + c * p2[1]
        ]);
      }
      return puntos;
    }

    function htmlCancion(cancion) {
      if (!cancion) return '';
      if (cancion.youtubeId) {
        return '<div class="caribe-popup-cancion-player">' +
          '<p class="caribe-popup-cancion-label"><span class="caribe-popup-cancion-icon">&#9658;</span> <em>' + cancion.titulo + '</em> &middot; ' + cancion.artista + '</p>' +
          '<iframe width="100%" height="120" src="https://www.youtube-nocookie.com/embed/' + cancion.youtubeId + '" title="' + cancion.titulo + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' +
        '</div>';
      }
      var query = encodeURIComponent(cancion.titulo + ' ' + cancion.artista);
      return '<a class="caribe-popup-cancion" href="https://www.youtube.com/results?search_query=' + query + '" target="_blank" rel="noopener">' +
        '<span class="caribe-popup-cancion-icon">&#9658;</span> Escuchar: <em>' + cancion.titulo + '</em> &middot; ' + cancion.artista +
      '</a>';
    }

    function htmlClaves(claves, color) {
      if (!claves || !claves.length) return '';
      return '<div class="caribe-popup-tags">' +
        claves.map(function (c) {
          return '<span style="border-color:' + color + '55; color:' + color + '">' + c + '</span>';
        }).join('') +
      '</div>';
    }

    // ── Dibujar nodos ──
    var marcadores = {};

    nodos.forEach(function (n) {
      var color = colorCategoria[n.categoria] || '#F5EDDD';
      var esColombia = n.categoria === 'Caribe colombiano';
      var radius = esColombia ? 8 : 6;

      var marker = L.circleMarker([n.lat, n.lng], {
        radius: radius,
        fillColor: color,
        color: esColombia ? '#FFFFFF' : color,
        weight: esColombia ? 2 : 1.2,
        opacity: 0.95,
        fillOpacity: esColombia ? 0.85 : 0.7,
        className: 'caribe-marker'
      });

      marker.on('click', function () { abrirPanelNodo(n); });
      marker.bindTooltip(n.nombre, { className: 'caribe-tooltip', direction: 'top', offset: [0, -8] });

      marker.on('mouseover', function () { this.setStyle({ fillOpacity: 1 }); this.setRadius(radius + 3); });
      marker.on('mouseout', function () { this.setStyle({ fillOpacity: esColombia ? 0.85 : 0.7 }); this.setRadius(radius); });

      marker.addTo(map);
      marcadores[n.nombre] = { marker: marker, radiusBase: radius, opacidadBase: esColombia ? 0.85 : 0.7 };
    });

    // ── Dibujar arcos ──
    var arcos = [];

    rutas.forEach(function (r) {
      var origen = buscarNodo(r.de);
      var destino = buscarNodo(r.a);
      if (!origen || !destino) return;

      var color = epocas[r.epoca].color;
      var puntos = trazarArco([origen.lat, origen.lng], [destino.lat, destino.lng], r.curva);

      var linea = L.polyline(puntos, {
        color: color,
        weight: 2,
        opacity: 0.65,
        dashArray: '5,9',
        className: 'ruta-maritima ruta-atlantica'
      });

      // Franja invisible y ancha que recibe el clic (la línea fina es difícil de acertar)
      var franjaClic = L.polyline(puntos, {
        color: '#000000',
        opacity: 0,
        weight: 18,
        interactive: true
      });

      function alSeleccionar() {
        seleccionarArco(linea);
        abrirPanelRuta(r, linea, tourActivo);
      }
      linea.on('click', alSeleccionar);
      franjaClic.on('click', alSeleccionar);

      linea.bindTooltip(r.titulo + ' · ' + r.anos, { className: 'caribe-tooltip', direction: 'top', sticky: true });
      franjaClic.bindTooltip(r.titulo + ' · ' + r.anos, { className: 'caribe-tooltip', direction: 'top', sticky: true });

      franjaClic.on('mouseover', function () { if (!tourActivo) linea.setStyle({ weight: 3.5, opacity: 0.95 }); });
      franjaClic.on('mouseout', function () { if (!tourActivo && linea !== arcoSeleccionado) linea.setStyle({ weight: 2, opacity: 0.65 }); });

      linea.epoca = r.epoca;
      linea.nodosConectados = [r.de, r.a];
      linea.rutaData = r;
      linea.puntos = puntos;
      linea.franja = franjaClic;
      linea.addTo(map);
      franjaClic.addTo(map);
      arcos.push(linea);
    });

    // ── Panel de lectura ──
    var panel = document.getElementById('atlantico-panel');
    var tourActivo = false;
    var tourIdx = 0;
    var arcoSeleccionado = null;

    // En pantallas angostas el panel es una hoja fija inferior. Un ancestro con
    // transform (el efecto reveal del sitio) rompe position:fixed en móviles,
    // así que ahí el panel se cuelga directamente de <body>.
    var panelSitioOriginal = panel ? panel.parentNode : null;
    function ubicarPanel() {
      if (!panel || !panelSitioOriginal || !document.body) return;
      if (window.innerWidth <= 960) {
        if (panel.parentNode !== document.body) document.body.appendChild(panel);
      } else {
        if (panel.parentNode !== panelSitioOriginal) panelSitioOriginal.appendChild(panel);
      }
    }
    ubicarPanel();
    window.addEventListener('resize', ubicarPanel);

    function seleccionarArco(linea) {
      if (tourActivo) return;
      arcos.forEach(function (a) {
        if (a === linea) a.setStyle({ weight: 3.5, opacity: 0.95 });
        else a.setStyle({ weight: 2, opacity: 0.45 });
      });
      arcoSeleccionado = linea;
    }

    function panelCancion(c) {
      if (!c) return '';
      if (c.youtubeId) {
        return '<div class="atlantico-panel-player">' +
          '<p class="atlantico-panel-cancion-label">&#9658; <em>' + c.titulo + '</em> &middot; ' + c.artista + '</p>' +
          '<button type="button" class="atlantico-video-facade" data-yt="' + c.youtubeId + '" aria-label="' + t('Reproducir', 'Play') + ' ' + c.titulo + '">' +
            '<img src="https://i.ytimg.com/vi/' + c.youtubeId + '/hqdefault.jpg" alt="' + t('Miniatura:', 'Thumbnail:') + ' ' + c.titulo + '" loading="lazy">' +
            '<span class="atlantico-video-play">&#9658;</span>' +
          '</button>' +
        '</div>';
      }
      var q = encodeURIComponent(c.titulo + ' ' + c.artista);
      return '<p class="atlantico-panel-cancion-label"><a href="https://www.youtube.com/results?search_query=' + q + '" target="_blank" rel="noopener" style="color:inherit">&#9658; ' + t('Escuchar:', 'Listen:') + ' <em>' + c.titulo + '</em> &middot; ' + c.artista + '</a></p>';
    }

    function activarVideos() {
      if (!panel || !panel.querySelectorAll) return;
      var facades = panel.querySelectorAll('.atlantico-video-facade');
      Array.prototype.forEach.call(facades, function (btn) {
        btn.addEventListener('click', function () {
          var id = btn.getAttribute('data-yt');
          var marco = document.createElement('iframe');
          marco.width = '100%';
          marco.height = '200';
          marco.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1';
          marco.title = t('Reproductor de YouTube', 'YouTube player');
          marco.setAttribute('frameborder', '0');
          marco.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
          marco.setAttribute('allowfullscreen', '');
          if (btn.parentNode) btn.parentNode.replaceChild(marco, btn);
        });
      });
    }

    function panelTags(claves, color) {
      if (!claves || !claves.length) return '';
      return '<div class="atlantico-panel-tags">' +
        claves.map(function (c) {
          return '<span style="border-color:' + color + '55; color:' + color + '">' + c + '</span>';
        }).join('') +
      '</div>';
    }

    function panelCabecera(color, categoria) {
      return '<div class="atlantico-panel-head">' +
        '<span class="atlantico-panel-dot" style="background:' + color + '"></span>' +
        '<span class="atlantico-panel-cat" style="color:' + color + '">' + categoria + '</span>' +
        '<button class="atlantico-panel-close" type="button" aria-label="' + t('Cerrar panel', 'Close panel') + '">&times;</button>' +
      '</div>';
    }

    function mostrarPanel(html) {
      if (!panel) return;
      panel.innerHTML = html;
      panel.classList.add('is-open');
      var cerrar = panel.querySelector('.atlantico-panel-close');
      if (cerrar) cerrar.addEventListener('click', function () {
        if (tourActivo) abandonarTravesia(true);
        restaurarArcos();
        panelIntro();
        panel.classList.remove('is-open');
      });
      activarVideos();
      panel.scrollTop = 0;
    }

    function abrirPanelNodo(n) {
      if (tourActivo) abandonarTravesia(false);
      var color = colorCategoria[n.categoria] || '#F5EDDD';
      var esEN = IDIOMA === 'en';
      var nombreN = esEN ? nombreDisp(n.nombre) : n.nombre;
      var paisN = esEN ? paisDisp(n.pais) : n.pais;
      var catN = esEN ? categoriaDisp(n.categoria) : n.categoria;
      var descN = (esEN && n.desc_en) ? n.desc_en : n.desc;
      var culturaN = (esEN && n.cultura_en) ? n.cultura_en : n.cultura;
      var clavesN = (esEN && n.claves_en) ? n.claves_en : n.claves;
      mostrarPanel(
        panelCabecera(color, catN) +
        '<h3 class="atlantico-panel-title">' + nombreN + '</h3>' +
        '<p class="atlantico-panel-sub">' + paisN + ' &nbsp;·&nbsp; ' + formatCoords(n.lat, n.lng) + '</p>' +
        '<p class="atlantico-panel-desc">' + descN + '</p>' +
        (culturaN ? '<p class="atlantico-panel-cultura">♪ ' + culturaN + '</p>' : '') +
        panelCancion(n.cancion) +
        panelTags(clavesN, color) +
        (n.fuente ? '<p class="atlantico-panel-fuente">' + t('Fuente:', 'Source:') + ' ' + n.fuente + '</p>' : '')
      );
      fijarEnlace('puerto', n.nombre);
    }

    function abrirPanelRuta(r, linea, enTour) {
      if (!enTour && tourActivo) abandonarTravesia(false);
      var color = epocas[r.epoca].color;
      var esEN = IDIOMA === 'en';
      var tourBar = '';
      if (enTour) {
        tourBar = '<div class="atlantico-tour-bar">' +
          '<button class="atlantico-tour-btn" type="button" data-tour="prev"' + (tourIdx === 0 ? ' disabled' : '') + '>&larr; ' + t('Anterior', 'Previous') + '</button>' +
          '<span class="atlantico-tour-paso">' + (tourIdx + 1) + ' / ' + arcos.length + '</span>' +
          '<button class="atlantico-tour-btn" type="button" data-tour="next"' + (tourIdx === arcos.length - 1 ? ' disabled' : '') + '>' + t('Siguiente', 'Next') + ' &rarr;</button>' +
          '<button class="atlantico-tour-btn atlantico-tour-btn--salir" type="button" data-tour="salir">' + t('Salir', 'Exit') + '</button>' +
        '</div>';
      }
      var tituloR = (esEN && r.titulo_en) ? r.titulo_en : r.titulo;
      var deR = esEN ? nombreDisp(r.de) : r.de;
      var aR = esEN ? nombreDisp(r.a) : r.a;
      var anosR = (esEN && r.anos_en) ? r.anos_en : r.anos;
      var descR = (esEN && r.desc_en) ? r.desc_en : r.desc;
      var clavesR = (esEN && r.claves_en) ? r.claves_en : r.claves;
      mostrarPanel(
        panelCabecera(color, t('Época ', 'Era ') + r.epoca + ' · ' + epocaNombre(r.epoca)) +
        '<h3 class="atlantico-panel-title">' + tituloR + '</h3>' +
        '<p class="atlantico-panel-sub">' + deR + ' &harr; ' + aR + ' &nbsp;·&nbsp; ' + anosR + '</p>' +
        '<p class="atlantico-panel-desc">' + descR + '</p>' +
        panelCancion(r.cancion) +
        panelTags(clavesR, color) +
        (r.fuente ? '<p class="atlantico-panel-fuente">' + t('Fuente:', 'Source:') + ' ' + r.fuente + '</p>' : '') +
        '<button class="atlantico-tour-btn" type="button" data-copiar style="margin-top:12px">' + t('Copiar enlace de esta ruta', 'Copy link to this route') + '</button>' +
        tourBar
      );
      fijarEnlace('ruta', r.titulo);
      var btnCopiar = panel ? panel.querySelector('[data-copiar]') : null;
      if (btnCopiar) btnCopiar.addEventListener('click', function () {
        var enlace = window.location.href.split('#')[0] + '#ruta=' + slugDe(r.titulo);
        var listo = function () { btnCopiar.textContent = t('Enlace copiado', 'Link copied'); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(enlace).then(listo, listo);
        } else { window.prompt(t('Copia el enlace:', 'Copy this link:'), enlace); }
      });
      if (enTour && panel) {
        var prev = panel.querySelector('[data-tour="prev"]');
        var next = panel.querySelector('[data-tour="next"]');
        var salir = panel.querySelector('[data-tour="salir"]');
        if (prev) prev.addEventListener('click', function () { if (tourIdx > 0) irAPaso(tourIdx - 1); });
        if (next) next.addEventListener('click', function () { if (tourIdx < arcos.length - 1) irAPaso(tourIdx + 1); });
        if (salir) salir.addEventListener('click', function () { abandonarTravesia(true); });
      }
    }

    function panelIntro() {
      if (!panel) return;
      panel.innerHTML =
        '<div class="atlantico-panel-head">' +
          '<span class="atlantico-panel-dot" style="background:#F07A16"></span>' +
          '<span class="atlantico-panel-cat" style="color:#F07A16">' + t('Cartografía sonora', 'Sonic cartography') + '</span>' +
        '</div>' +
        '<h3 class="atlantico-panel-title">' + t('El Atlántico Negro, ruta por ruta', 'The Black Atlantic, route by route') + '</h3>' +
        '<p class="atlantico-panel-vacio">' + t(
          'Haz clic en un <em>arco</em> para leer la historia de esa ruta musical (con su fuente y su canción) o en un <em>puerto</em> para saber qué se pensó y qué sonó ahí. También puedes recorrerlo todo en orden: pulsa <em>Iniciar la travesía</em> y el mapa te lleva de 1795 hasta hoy.',
          'Click an <em>arc</em> to read the story behind that musical route (with its source and its song), or a <em>port</em> to find out what was thought and heard there. You can also travel the whole map in order: press <em>Start the journey</em> and it will carry you from 1795 to today.'
        ) + '</p>';
    }

    // ── Travesía guiada ──
    function resaltarArco(arco) {
      arcos.forEach(function (a) {
        if (a === arco) a.setStyle({ opacity: 0.95, weight: 3.5 });
        else a.setStyle({ opacity: 0.1, weight: 1.4 });
      });
    }

    function restaurarArcos() {
      arcoSeleccionado = null;
      arcos.forEach(function (a) { a.setStyle({ opacity: 0.65, weight: 2 }); });
    }

    function volarAArco(arco) {
      var lats = arco.puntos.map(function (p) { return p[0]; });
      var lngs = arco.puntos.map(function (p) { return p[1]; });
      map.flyToBounds([
        [Math.min.apply(null, lats), Math.min.apply(null, lngs)],
        [Math.max.apply(null, lats), Math.max.apply(null, lngs)]
      ], { paddingTopLeft: [60, 60], paddingBottomRight: [60, 60], maxZoom: 5, duration: 1.3 });
    }

    function irAPaso(i) {
      tourIdx = i;
      var arco = arcos[i];
      if (!arco) return;
      if (!map.hasLayer(arco)) arco.addTo(map);
      if (arco.franja && !map.hasLayer(arco.franja)) arco.franja.addTo(map);
      resaltarArco(arco);
      volarAArco(arco);
      abrirPanelRuta(arco.rutaData, arco, true);
    }

    function iniciarTravesia() {
      aplicarEpoca('all');
      tourActivo = true;
      irAPaso(0);
    }

    function abandonarTravesia(volverVista) {
      tourActivo = false;
      restaurarArcos();
      if (volverVista) {
        map.flyTo([16, -32], 3, { duration: 1.2 });
        panelIntro();
      }
    }

    var btnTravesia = document.querySelector('.caribe-mapa-filters .filter-btn[data-action="travesia"]');
    if (btnTravesia) btnTravesia.addEventListener('click', iniciarTravesia);

    panelIntro();

    // Enlaces directos: #ruta=slug o #puerto=slug abren su ficha al cargar
    function leerEnlaceInicial() {
      var h = window.location.hash || '';
      var m = h.match(/^#(ruta|puerto)=(.+)$/);
      if (!m) return;
      var tipo = m[1], slug = decodeURIComponent(m[2]);
      if (tipo === 'ruta') {
        for (var i = 0; i < arcos.length; i++) {
          if (slugDe(arcos[i].rutaData.titulo) === slug) {
            seleccionarArco(arcos[i]);
            volarAArco(arcos[i]);
            abrirPanelRuta(arcos[i].rutaData, arcos[i], false);
            return;
          }
        }
      } else {
        for (var j = 0; j < nodos.length; j++) {
          if (slugDe(nodos[j].nombre) === slug) {
            map.flyTo([nodos[j].lat, nodos[j].lng], 5, { duration: 1.2 });
            abrirPanelNodo(nodos[j]);
            return;
          }
        }
      }
    }
    leerEnlaceInicial();

    // ── Filtros por época ──
    function aplicarEpoca(capa) {
      if (tourActivo) abandonarTravesia(false);
      // capa: 'all' | '1' | '2' | '3' | '4'
      document.querySelectorAll('.caribe-mapa-filters .filter-btn[data-layer]').forEach(function (b) {
        b.classList.toggle('is-active', b.getAttribute('data-layer') === capa);
      });
      document.querySelectorAll('.legend-swatch').forEach(function (s) {
        s.classList.toggle('is-active', s.getAttribute('data-layer') === capa);
      });

      var activos = {};
      arcos.forEach(function (arco) {
        var visible = (capa === 'all' || String(arco.epoca) === capa);
        if (visible) {
          if (!map.hasLayer(arco)) arco.addTo(map);
          if (arco.franja && !map.hasLayer(arco.franja)) arco.franja.addTo(map);
          arco.nodosConectados.forEach(function (nm) { activos[nm] = true; });
        } else {
          if (map.hasLayer(arco)) map.removeLayer(arco);
          if (arco.franja && map.hasLayer(arco.franja)) map.removeLayer(arco.franja);
        }
      });

      // Atenuar nodos que no participan de la época seleccionada
      Object.keys(marcadores).forEach(function (nombre) {
        var m = marcadores[nombre];
        if (capa === 'all' || activos[nombre]) {
          m.marker.setStyle({ fillOpacity: m.opacidadBase, opacity: 0.95 });
        } else {
          m.marker.setStyle({ fillOpacity: 0.18, opacity: 0.3 });
        }
      });
    }

    var botonesFiltro = document.querySelectorAll('.caribe-mapa-filters .filter-btn[data-layer]');
    botonesFiltro.forEach(function (btn) {
      var capa = btn.getAttribute('data-layer');
      if (capa !== 'all' && epocas[capa]) {
        var dot = document.createElement('span');
        dot.className = 'filter-dot';
        dot.style.background = epocas[capa].color;
        btn.insertBefore(dot, btn.firstChild);
      }
      btn.addEventListener('click', function () { aplicarEpoca(capa); });
    });

    // ── Botones de vista: Caribe / África / Atlántico ──
    var vistas = {
      caribe:    { center: [15, -72],  zoom: 5 },
      africa:    { center: [7, 3],     zoom: 4 },
      atlantico: { center: [16, -32],  zoom: 3 }
    };
    document.querySelectorAll('.caribe-mapa-filters .filter-btn[data-view]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var v = vistas[btn.getAttribute('data-view')];
        if (v) map.flyTo(v.center, v.zoom, { duration: 1.2 });
      });
    });

    // ── Leyenda con muestras por época ──
    var swatchesContainer = document.getElementById('atlantico-legend-swatches');
    if (swatchesContainer) {
      var conteos = {};
      rutas.forEach(function (r) { conteos[r.epoca] = (conteos[r.epoca] || 0) + 1; });
      Object.keys(epocas).forEach(function (k) {
        var item = document.createElement('button');
        item.className = 'legend-swatch';
        item.type = 'button';
        item.setAttribute('data-layer', k);
        item.innerHTML =
          '<span class="legend-swatch-dot" style="background:' + epocas[k].color + '"></span>' +
          '<span class="legend-swatch-name">' + epocaNombre(k) + ' · ' + (IDIOMA === 'en' ? epocas[k].anos_en : epocas[k].anos) + '</span>' +
          '<span class="legend-swatch-count">' + (conteos[k] || 0) + '</span>';
        item.addEventListener('click', function () { aplicarEpoca(k); });
        swatchesContainer.appendChild(item);
      });
    }

    // Scroll-wheel zoom solo con foco
    container.addEventListener('click', function () { map.scrollWheelZoom.enable(); });
    container.addEventListener('mouseleave', function () { map.scrollWheelZoom.disable(); });

    setTimeout(function () { map.invalidateSize(); }, 300);
  }

  function boot() { loadAtlas(function () { init(); }); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
