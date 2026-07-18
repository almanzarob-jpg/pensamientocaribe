/* ════════════════════════════════════════════════
   CON EL VAIVÉN DE LAS CORRIENTES
   Cartografías sonoras del Atlántico Negro
   Leaflet + arcos transatlánticos por épocas
   Inspirado en Errol L. Montes Pizarro (2018)
   ════════════════════════════════════════════════ */
(function () {
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

    // Etiqueta del océano: el Atlántico Negro (Gilroy)
    L.marker([13.5, -36], {
      icon: L.divIcon({
        className: 'caribe-sea-label',
        html: '<span class="caribe-sea-label-main">Atlántico Negro</span>',
        iconSize: [260, 40],
        iconAnchor: [130, 20]
      }),
      interactive: false,
      keyboard: false
    }).addTo(map);

    // ── Épocas históricas (capas del mapa) ──
    var epocas = {
      1: { nombre: 'Travesías fundacionales',                 anos: '1795–1900',  color: '#C9B27C' },
      2: { nombre: 'Puertos y despertar panafricano',         anos: '1900–1945',  color: '#E8935A' },
      3: { nombre: 'Independencias y modernidades alternas',  anos: '1945–1980',  color: '#D83A2E' },
      4: { nombre: 'Retornos y contemporaneidad',             anos: '1960–hoy',   color: '#5FB0B7' }
    };

    // ── Nodos: orillas del Atlántico Negro ──
    var colorCategoria = {
      'Caribe colombiano':   '#7BB661',
      'Gran Caribe':         '#F07A16',
      'África':              '#E0B341',
      'Diáspora del Norte':  '#9A8FC7'
    };

    var nodos = [
      { nombre: 'Kingston',          pais: 'Jamaica',            lat: 17.9712, lng: -76.7936, categoria: 'Gran Caribe',        desc: 'De aquí salieron los cimarrones de Trelawny deportados en 1796, aquí nació Marcus Garvey y aquí el rastafari volvió la mirada hacia Etiopía. Puerto matriz del panafricanismo popular. Aquí nació también el dub: en los estudios de Kingston de los años setenta, King Tubby y Lee «Scratch» Perry convirtieron la consola de mezcla en instrumento y el estudio de grabación en organismo vivo. Louis Chude-Sokei lee ese gesto como tecnopoética afrodiaspórica: una manera de creolizar la máquina que hereda —y responde a— el mismo lenguaje de amo y esclavo con que Occidente pensó la tecnología desde el siglo XIX.', claves: ['Cimarrones', 'Marcus Garvey', 'Rastafari', 'Dub y tecnopoética'], cultura: 'Gumbé · Mento · Reggae · Dancehall', cancion: { titulo: 'Redemption Song', artista: 'Bob Marley', youtubeId: 'yv5xonFSC4c' }, fuente: 'Montes Pizarro 2018 · Chude-Sokei 2015' },
      { nombre: 'La Habana',         pais: 'Cuba',               lat: 23.1136, lng: -82.3666, categoria: 'Gran Caribe',        desc: 'El son cubano viajó a África en discos de 78 revoluciones y allá lo escucharon como cosa propia, una rama que regresaba. Ninguna otra música caribeña sembró tanto en el continente.', claves: ['Son cubano', 'Discos GV', 'Semilla de la rumba congoleña'], cultura: 'Son · Rumba · Guaracha · Bolero', cancion: { titulo: 'Chan Chan', artista: 'Buena Vista Social Club', youtubeId: 'tGbRZ73NvlY' } },
      { nombre: 'Puerto España',     pais: 'Trinidad y Tobago',  lat: 10.6549, lng: -61.5019, categoria: 'Gran Caribe',        desc: 'Cuna del calipso y de tres arquitectos del panafricanismo: Henry Sylvester Williams, organizador del primer congreso panafricano (1900), George Padmore y C.L.R. James. El calipso trinitario no solo hizo historia política: también se volvió arquitectura de la memoria literaria. Njelle Hamilton lee la novela Night Calypso de Lawrence Scott como una «memoria fonográfica» que narra el trauma colonial a través del calipsonero, y The Swinging Bridge de Ramabai Espinet como una novela construida con estética de dub —cortes, ecos, remezcla— para narrar el desplazamiento de la diáspora indocaribeña. Dos maneras de que la música, aquí, no solo se escuche: se recuerde.', claves: ['Sylvester Williams', 'Padmore · C.L.R. James', 'Calipso', 'Memoria fonográfica'], cultura: 'Calipso · Soca · Steelpan', cancion: { titulo: 'Birth of Ghana', artista: 'Lord Kitchener', youtubeId: '057BmLQ9MfU' }, fuente: 'Hamilton 2019' },
      { nombre: 'Fort-de-France',    pais: 'Martinica',          lat: 14.6161, lng: -61.0588, categoria: 'Gran Caribe',        desc: 'Ciudad de Césaire y Fanon, laboratorio de la négritude. En 1967 recibió a la Ry-Co Jazz congoleña y de ese encuentro germinó parte de lo que después floreció como zouk.', claves: ['Aimé Césaire', 'Négritude', 'Semillero del zouk'], cultura: 'Bèlè · Biguine · Zouk', cancion: { titulo: 'Zouk La Sé Sèl Médikaman Nou Ni', artista: "Kassav'", youtubeId: 'Dd3hjxxcTzw' } },
      { nombre: 'San Juan',          pais: 'Puerto Rico',        lat: 18.4655, lng: -66.1057, categoria: 'Gran Caribe',        desc: 'Desde Radio Universidad de Puerto Rico, Errol L. Montes Pizarro transmite Rumba Africana desde 2001: el programa que dio origen al libro que inspira este mapa. Y desde aquí Ángel Quintero Rivera pensó las «músicas mulatas» y la salsa como una «manera de hacer música»: teoría caribeña del vaivén.', claves: ['Rumba Africana', 'Quintero Rivera · Músicas mulatas', 'Bomba y plena'], cultura: 'Bomba · Plena · Salsa', cancion: { titulo: 'Rumba Africana', artista: 'Radio Universidad de Puerto Rico' } },
      { nombre: 'Puerto Príncipe',   pais: 'Haití',              lat: 18.5944, lng: -72.3074, categoria: 'Gran Caribe',        desc: 'La revolución haitiana (1791–1804) es la matriz política de la negrura moderna: la primera vez que la libertad negra se hizo Estado. Benito Sylvain llevó esa herencia a los congresos panafricanos. En 1955 Nemours Jean-Baptiste bautizó el konpa direk, y esa cadencia terminó sonando en África occidental.', claves: ['Revolución haitiana', 'Benito Sylvain', 'Konpa direk 1955'], cultura: 'Vodú · Rara · Konpa', cancion: { titulo: 'Compas Mondial', artista: 'Nemours Jean-Baptiste', youtubeId: 'GoarcCaNQIA' } },
      { nombre: 'Barranquilla',      pais: 'Colombia',           lat: 10.9685, lng: -74.7813, categoria: 'Caribe colombiano',  desc: 'Aquí se fabricaron los primeros picós con tecnología criolla en 1939, y aquí se formó la estética del «brillo»: las altas frecuencias de la zona del boliche. En las verbenas de San Roque, picós con nombre propio —El Coreano, El Timbalero, El Gran Fidel— volvieron la «música africana» cultura de barrio, con corresponsales que viajaban por discos exclusivos (Giraldo 2016). Desde 2014, Radio Cultural FM retransmite aquí Rumba Africana, y ASOBAILES impulsa el picó como patrimonio.', claves: ['Picós desde 1939', 'El «brillo» · San Roque', 'Picó como patrimonio'], cultura: 'Cumbia · Salsa · Música africana de picó', cancion: { titulo: 'Shakalaodé', artista: 'Wganda Kenya', youtubeId: 'bMOajYNU60E' } },
      { nombre: 'Cartagena de Indias', pais: 'Colombia',         lat: 10.3910, lng: -75.4794, categoria: 'Caribe colombiano',  desc: 'Antiguo puerto negrero convertido en capital de la champeta: aquí los picós volvieron patrimonio popular los discos africanos y aquí canta la escuela palenquera. El sonido cartagenero tiene estética propia: el «meke», el predominio de las bajas frecuencias, con epicentro en Torices y Crisanto Luque. Desde 2018, las asociaciones de las «tres perlas» impulsan el picó como patrimonio cultural inmaterial.', claves: ['Champeta', 'El «meke» · Torices', 'World Picó 2024'], cultura: 'Champeta · Bullerengue · Terapia', cancion: { titulo: 'El Mecánico', artista: 'Charles King' } },
      { nombre: 'San Basilio de Palenque', pais: 'Colombia',     lat: 10.1031, lng: -75.1997, categoria: 'Caribe colombiano',  desc: 'Primer pueblo libre de América y cuna de la champeta criolla. De aquí salieron Justo Valdez con Son Palenque, Viviano Torres con Anne Zwing, Hernando Hernández con Kussima, y los «Reyes de la Terapia»: Charles King, Luis Towers, Melchor. Cunin lo documenta: en el paso de la música africana a la champeta, el pueblo es la bisagra.', claves: ['Primer pueblo libre', 'Cuna de la champeta criolla', 'Lengua palenquera'], cultura: 'Champeta criolla · Lumbalú · Sexteto palenquero', cancion: { titulo: 'El Rey Soy Yo', artista: 'Justo Valdez y su Son Palenque', youtubeId: 'TTgMRziJ-Rc' } },
      { nombre: 'Charlotte Amalie',  pais: 'Islas Vírgenes',     lat: 18.3419, lng: -64.9307, categoria: 'Gran Caribe',        desc: 'Aquí nació en 1832 Edward Wilmot Blyden, considerado padre del panafricanismo letrado. Emigró a Liberia a los 18 años y pensó África como unidad y destino.', claves: ['Edward W. Blyden', 'Personalidad africana', 'Emigración a Liberia'], cultura: 'Quelbe · Calipso virginislandés' },
      { nombre: 'Nueva York',        pais: 'Estados Unidos',     lat: 40.7128, lng: -74.0060, categoria: 'Diáspora del Norte', desc: 'Harlem: sede de la UNIA de Garvey y del renacimiento negro; después, capital de la salsa con Fania y estudio donde Africando juntó a soneros neoyorquinos con voces senegalesas.', claves: ['Harlem · UNIA', 'Fania Records', 'Jazz negro'], cultura: 'Jazz · Salsa · Hip-hop' },
      { nombre: 'París',             pais: 'Francia',            lat: 48.8566, lng: 2.3522,   categoria: 'Diáspora del Norte', desc: 'Encrucijada de la négritude y de Présence Africaine (1947). En los años 80 sus estudios grabaron el soukous y el zouk que circularon por África y el Caribe.', claves: ['Présence Africaine', 'Négritude', 'Estudios del soukous'], cultura: 'Négritude · Soukous parisino · Zouk' },
      { nombre: 'Freetown',          pais: 'Sierra Leona',       lat: 8.4840,  lng: -13.2340, categoria: 'África',             desc: 'Puerto fundado para africanos liberados. Los cimarrones jamaiquinos llegaron en 1800 con el tambor gumbé: la primera música afrocaribeña en hacer el viaje de vuelta a África.', claves: ['Gumbé desde 1800', 'Krios', 'Maringa'], cultura: 'Gumbé · Maringa · Palmwine', cancion: { titulo: 'Fire Fire Fire', artista: 'Ebenezer Calender', youtubeId: 'p3jorkz5J7A' } },
      { nombre: 'Monrovia',          pais: 'Liberia',            lat: 6.3005,  lng: -10.7969, categoria: 'África',             desc: 'Destino de Blyden y puerto de los marineros kru, que llevaron su guitarra de dos dedos por toda la costa occidental africana y tejieron la palmwine music.', claves: ['Edward W. Blyden', 'Marineros kru', 'Palmwine'], cultura: 'Palmwine · Highlife liberiano' },
      { nombre: 'Dakar',             pais: 'Senegal',            lat: 14.7167, lng: -17.4677, categoria: 'África',             desc: 'Ciudad de Senghor y del Festival Mundial de Artes Negras (1966). Su escena hizo del son y la salsa una lengua propia: de Laba Sosseh al Orchestra Baobab.', claves: ['Senghor', 'Festival de 1966', 'Salsa senegalesa'], cultura: 'Salsa senegalesa · Mbalax', cancion: { titulo: 'Utrus Horas', artista: 'Orchestra Baobab', youtubeId: 'm4yFmRNcX3I' } },
      { nombre: 'Conakry',           pais: 'Guinea',             lat: 9.6412,  lng: -13.5784, categoria: 'África',             desc: 'Tras la independencia (1958), la authenticité de Sékou Touré hizo de la música un proyecto de Estado: orquestas nacionales que tocaban son cubano con memoria mandinga.', claves: ['Authenticité', 'Sékou Touré', 'Orquestas nacionales'], cultura: 'Bembeya Jazz · Sily National' },
      { nombre: 'Accra',             pais: 'Ghana',              lat: 5.6037,  lng: -0.1870,  categoria: 'África',             desc: 'Capital del highlife y de la primera independencia subsahariana (1957). Nkrumah, formado en el panafricanismo diaspórico, hizo de la música parte de la nación nueva.', claves: ['Highlife', 'Kwame Nkrumah', 'Independencia 1957'], cultura: 'Highlife · Hiplife · Afrobeats', cancion: { titulo: 'All For You', artista: 'E.T. Mensah & The Tempos', youtubeId: 'OVB8isxRngs' } },
      { nombre: 'Lagos',             pais: 'Nigeria',            lat: 6.5244,  lng: 3.3792,   categoria: 'África',             desc: 'Fela Kuti fundió highlife, jazz negro y funk en el afrobeat: panafricanismo sonoro y militante. Hoy los afrobeats dialogan de vuelta con el dancehall jamaiquino.', claves: ['Fela Kuti', 'Afrobeat', 'Kalakuta Republic'], cultura: 'Afrobeat · Jùjú · Afrobeats', cancion: { titulo: 'Water No Get Enemy', artista: 'Fela Kuti', youtubeId: 'IQBC5URoF0s' } },
      { nombre: 'Kinshasa',          pais: 'R.D. del Congo',     lat: -4.4419, lng: 15.2663,  categoria: 'África',             desc: 'El son cubano llegado en disco se volvió rumba congoleña, la música africana más influyente del siglo XX. El Indépendance Cha Cha de Grand Kallé fue el himno de las independencias.', claves: ['Rumba congoleña', 'Grand Kallé', 'Indépendance Cha Cha'], cultura: 'Rumba congoleña · Soukous', cancion: { titulo: 'Indépendance Cha Cha', artista: 'Grand Kallé & African Jazz', youtubeId: 'RxkZ95PYcrM' } },
      { nombre: 'Brazzaville',       pais: 'Rep. del Congo',     lat: -4.2634, lng: 15.2429,  categoria: 'África',             desc: 'La otra orilla del río Congo y de la rumba. De aquí y de Kinshasa salió la Ry-Co Jazz de Henri Bowane, escuela ambulante de música congoleña que llegó hasta las Antillas.', claves: ['Ry-Co Jazz', 'Henri Bowane', 'Las dos orillas'], cultura: 'Rumba congoleña · Ndombolo' },
      { nombre: 'Adís Abeba',        pais: 'Etiopía',            lat: 9.0300,  lng: 38.7400,  categoria: 'África',             desc: 'Horizonte sagrado del etiopianismo y del rastafari. La coronación de Haile Selassie (1930) y las tierras de Shashamane hicieron de Etiopía la promesa del retorno.', claves: ['Etiopianismo', 'Haile Selassie', 'Shashamane'], cultura: 'Ethio-jazz · Himnos rastafari' },
      { nombre: 'Londres',           pais: 'Reino Unido',        lat: 51.5074, lng: -0.1278,  categoria: 'Diáspora del Norte', desc: 'Henry Sylvester Williams fundó aquí la African Association en 1897 y convocó la primera Conferencia Panafricana en julio de 1900. Casi medio siglo después, el V Congreso Panafricano de Mánchester (1945) puso los cimientos del panafricanismo contemporáneo y trazó el programa de la liberación política de África.', claves: ['Conferencia de 1900', 'African Association 1897', 'Mánchester 1945'], cultura: 'Calipso de la Windrush · Sound systems', cancion: { titulo: 'London Is the Place for Me', artista: 'Lord Kitchener', youtubeId: 'dGt21q1AjuI' } },
      { nombre: 'Mindelo',           pais: 'Cabo Verde',         lat: 16.8866, lng: -24.9880, categoria: 'África',             desc: 'Puerto criollo en medio del Atlántico. Aquí la cadence antillana pegó tan hondo que el grupo Apollo se formó como copia fiel de Exile One, y el zouk de Kassav&#39; encontró después una de sus orillas más fieles.', claves: ['Grupo Apollo', 'Cadence · Cabo-zouk', 'Puerto criollo atlántico'], cultura: 'Morna · Coladeira · Cabo-zouk' },
      { nombre: 'Johannesburgo',     pais: 'Sudáfrica',          lat: -26.2041, lng: 28.0473, categoria: 'África',             desc: 'Cuando los Virginia Jubilee Singers de Orpheus McAdoo desembarcaron en Ciudad del Cabo en 1890, los coros negros sudafricanos adoptaron los espirituales como música propia. De esa escucha —el «estereomodernismo» que estudia Tsitsi Jaji— vienen el marabi de los shebeens, Sophiatown, la revista Zonk! y Miriam Makeba.', claves: ['Marabi · Sophiatown', 'Revista Zonk!', 'Estereomodernismo'], cultura: 'Marabi · Mbube · Isicathamiya · Jazz sudafricano', cancion: { titulo: 'Pata Pata', artista: 'Miriam Makeba', youtubeId: 'lNeP3hrm__k' } }
    ];

    // ── Rutas: arcos transatlánticos por época ──
    var rutas = [
      // Época 1 · Travesías fundacionales
      { epoca: 1, de: 'Kingston', a: 'Freetown', curva: 0.22, titulo: 'El gumbé: el primer viaje de vuelta', anos: '1796–1800', desc: 'Los cimarrones de Trelawny, deportados a Nueva Escocia tras la segunda guerra cimarrona, fueron reembarcados a Freetown en 1800. Llevaron consigo el tambor gumbé: la primera música afrocaribeña documentada en regresar a África, donde echó ramas como goombay, gome y soumbe.', claves: ['Cimarrones de Trelawny', 'Vía Nueva Escocia', 'Tambor gumbé'], cancion: { titulo: 'Gumbay tradicional', artista: 'Salome Peters · Sierra Leona', youtubeId: 'ARZVVU9YRVs' }, fuente: 'Montes Pizarro 2018 · Bilby 2011' },
      { epoca: 1, de: 'Charlotte Amalie', a: 'Monrovia', curva: 0.16, titulo: 'Blyden: el panafricanismo letrado', anos: '1850–1912', desc: 'Edward Wilmot Blyden salió de St. Thomas hacia Liberia en 1850. Su idea de una «personalidad africana» —pensada desde el Caribe y escrita en África— abrió el camino intelectual que después recorrieron Garvey, Padmore y Nkrumah.', claves: ['Personalidad africana', 'Liberia y Sierra Leona', 'Caribe que piensa África'], fuente: 'Adi 2018' },
      { epoca: 1, de: 'Nueva York', a: 'Johannesburgo', curva: 0.12, titulo: 'Espirituales: el primer estéreo panafricano', anos: '1890–1898', desc: 'Los Virginia Jubilee Singers de Orpheus McAdoo desembarcaron en Ciudad del Cabo la noche del 30 de junio de 1890 y pasaron casi cinco años de gira: hasta el presidente Kruger los recibió en 1891. Los coros de la élite negra adoptaron los espirituales, y Erlmann traza desde ahí una línea continua que llega al canto coral zulú isicathamiya. Jaji lee en esa escucha el comienzo del «estereomodernismo»: la música afroamericana recibida en África como forma ya codificada de resistencia creativa.', claves: ['Ciudad del Cabo, 30-jun-1890', 'Del Hampton al isicathamiya', 'Estereomodernismo (Jaji)'], cancion: { titulo: 'Swing Low, Sweet Chariot (1909)', artista: 'Fisk Jubilee Singers', youtubeId: 'GUvBGZnL9rE' }, fuente: 'Erlmann 1991 · Jaji 2014' },
      // Época 2 · Puertos y despertar panafricano
      { epoca: 2, de: 'Freetown', a: 'Accra', curva: 0.25, titulo: 'Palmwine: puertos que se escuchan', anos: '1900–1930', desc: 'Los marineros kru llevaron su guitarra por los puertos de la costa occidental. La palmwine music que tejieron entre Freetown, Monrovia y Accra fue el suelo del que brotó el highlife ghanés: música de puerto, de encuentro y de vino de palma.', claves: ['Marineros kru', 'Guitarra de dos dedos', 'Raíz del highlife'], cancion: { titulo: 'All For You', artista: 'E.T. Mensah & The Tempos', youtubeId: 'OVB8isxRngs' }, fuente: 'Montes Pizarro 2018 · Collins 1994' },
      { epoca: 2, de: 'Puerto España', a: 'Freetown', curva: 0.14, titulo: 'Regimientos y calipso', anos: '1914–1945', desc: 'El calipso ya era crónica social cantada en Trinidad —Rohlehr historió su transición desde 1890 y los calipsos de la Gran Guerra— cuando los soldados caribeños de los British West Indian Regiments lo llevaron a África occidental. En Freetown se cruzó con el gumbé y la palmwine y nació la maringa que Ebenezer Calender volvió clásica. «Everybody Loves Saturday Night» es de ida y de vuelta: nadie sabe ya de qué orilla es.', claves: ['West Indian Regiments', 'Calipso y maringa', 'Canciones sin orilla'], cancion: { titulo: 'Everybody Loves Saturday Night', artista: 'tradicional atlántica' }, fuente: 'Montes Pizarro 2018 · Rohlehr 1990' },
      { epoca: 2, de: 'Kingston', a: 'Nueva York', curva: -0.2, titulo: 'Garvey y la Black Star Line', anos: '1916–1927', desc: 'Marcus Garvey fundó en Harlem la UNIA, el mayor movimiento negro de masas del siglo XX, y una naviera —la Black Star Line— para unir comercial y espiritualmente a África con su diáspora. El proyecto naufragó; el imaginario del retorno, no.', claves: ['UNIA', 'Black Star Line', 'África para los africanos'], cancion: { titulo: 'Marcus Garvey', artista: 'Burning Spear', youtubeId: 'oGN3R49-CAE' }, fuente: 'Adi 2018' },
      { epoca: 2, de: 'La Habana', a: 'Kinshasa', curva: 0.2, titulo: 'Discos GV: el son siembra la rumba', anos: '1932–1950', desc: 'La serie GV de discos de 78 rpm llevó el son cubano a los puertos africanos. En los dos Congos, «El Manisero» y sus parientes sonaron a memoria propia, y de esa escucha nació la rumba congoleña.', claves: ['Serie GV', 'Son en África', 'Escucha como reconocimiento'], cancion: { titulo: 'El Manisero', artista: 'Don Azpiazu & Antonio Machín', youtubeId: 'essMVyS1Om0' }, fuente: 'Montes Pizarro 2018 · Denning 2015' },
      { epoca: 2, de: 'La Habana', a: 'Lagos', curva: -0.22, titulo: 'El orisha atlántico: la nación lucumí', anos: '1890–1940', desc: 'La religión de los orishas no sobrevivió en Cuba como reliquia aislada. Matory muestra una nación yoruba transatlántica sostenida por viajeros, cartas y libros: el Renacimiento cultural lagosiano de fines del siglo XIX alimentó la ortodoxia de la nación lucumí en las dos orillas. Lo sagrado también fue correspondencia.', claves: ['Nación lucumí', 'Renacimiento lagosiano', 'Religión viajera'], cancion: { titulo: 'Cantos a los orishas', artista: 'Lázaro Ros' }, fuente: 'Matory 2005' },
      { epoca: 2, de: 'La Habana', a: 'Dakar', curva: 0.14, titulo: 'La Habana–París–Dakar: son y négritude', anos: '1930–1940', desc: 'Richard Shain documenta que la serie GV llegó a Dakar y Saint-Louis desde 1933, y que en los clubes afrocubanos de Montmartre estudiantes africanos y antillanos —Senghor entre ellos— compartieron pista y conversación: de esa sociabilidad emergió la négritude. La música afrocubana ofreció a los senegaleses una modernidad negra que no pasaba por Europa.', claves: ['Serie GV en Dakar', 'Clubes de Montmartre', 'Modernidad negra (Shain)'], fuente: 'Shain 2018' },
      { epoca: 2, de: 'Puerto España', a: 'Londres', curva: 0.1, titulo: 'Los congresos panafricanos', anos: '1900–1945', desc: 'La primera Conferencia Panafricana se reunió en Londres en julio de 1900, convocada por Henry Sylvester Williams, abogado trinitario, y la African Association que había fundado en 1897. La serie culminó en Mánchester en 1945, con Padmore entre los organizadores y Nkrumah entre los delegados: de ahí salió, dice Adi, el programa práctico para la liberación política de África. El eje Trinidad–Londres muestra al Caribe organizando el panafricanismo desde el corazón del imperio.', claves: ['Sylvester Williams 1900', 'Mánchester 1945', 'Padmore · Nkrumah · Du Bois'], cancion: { titulo: 'London Is the Place for Me', artista: 'Lord Kitchener', youtubeId: 'dGt21q1AjuI' }, fuente: 'Adi 2018' },
      // Época 3 · Independencias y modernidades alternas
      { epoca: 3, de: 'Kinshasa', a: 'Brazzaville', curva: 2.2, titulo: 'La rumba de las dos orillas', anos: '1948–1960', desc: 'A ambos lados del río Congo, Wendo Kolosoy, Grand Kallé y Franco convirtieron el son llegado en disco en una música nueva. El «Indépendance Cha Cha» (1960), compuesto durante la Mesa Redonda de Bruselas, fue el himno continental de las independencias.', claves: ['Wendo · Kallé · Franco', 'Mesa Redonda de Bruselas', 'Himno de las independencias'], cancion: { titulo: 'Marie Louise', artista: 'Wendo Kolosoy & Henri Bowane' }, fuente: 'Montes Pizarro 2018' },
      { epoca: 3, de: 'La Habana', a: 'Conakry', curva: 0.18, titulo: 'Authenticité: el son como política de Estado', anos: '1958–1975', desc: 'Tras decir no a Francia en 1958, la Guinea de Sékou Touré hizo de la música un proyecto nacional: orquestas estatales como Bembeya Jazz tocaban son y bolero cubanos con memoria mandinga. Modernidad alternativa: ni imitación de Europa ni folclor congelado.', claves: ['Authenticité', 'Bembeya Jazz National', 'Modernidad alternativa'], cancion: { titulo: 'Armée Guinéenne', artista: 'Bembeya Jazz National', youtubeId: 'YTISiYK58Sk' }, fuente: 'Montes Pizarro 2018' },
      { epoca: 3, de: 'Dakar', a: 'La Habana', curva: -0.16, titulo: 'La salsa senegalesa', anos: '1960–1985', desc: 'En el club Miami de Ibra Kassé nació el Star Band, que los músicos senegaleses reconocen como su conjunto «fundacional» (Shain): con Laba Sosseh y luego el Orchestra Baobab, Dakar cantó son y salsa en wolof, mandinga y castellano fonético, hasta volver la música cubana una lengua franca del Atlántico Negro.', claves: ['Star Band del club Miami', 'Laba Sosseh · Baobab', 'Lengua franca atlántica'], cancion: { titulo: 'Senegal An X', artista: 'Laba Sosseh', youtubeId: 'Nwp7NH44bwQ' }, fuente: 'Shain 2018' },
      { epoca: 3, de: 'Fort-de-France', a: 'Dakar', curva: -0.3, titulo: 'Négritude: la ruta de la palabra', anos: '1935–1966', desc: 'Césaire desde Martinica, Senghor desde Senegal, Damas desde Guayana: la négritude se tejió pasando por París y Présence Africaine, y culminó en el Festival Mundial de Artes Negras de Dakar (1966). Shain recuerda que ese encuentro tuvo pista de baile: los clubes afrocubanos de Montmartre fueron laboratorio de la idea. La palabra también viaja en barco.', claves: ['Césaire · Senghor · Damas', 'Présence Africaine', 'Dakar 1966'], fuente: 'Shain 2018 · Gilroy 1993' },
      { epoca: 3, de: 'Kingston', a: 'Adís Abeba', curva: 0.28, titulo: 'Etiopía: el retorno sagrado', anos: '1930–hoy', desc: 'La coronación de Haile Selassie (1930) confirmó para el etiopianismo jamaiquino una profecía: un rey negro en África. Sobre la concesión de tierras de Shashemene, los primeros repatriados —Helen y James Piper— llegaron en 1948, y Bonacci ha reconstruido esa historia con archivo en tres continentes. El rastafari hizo de Etiopía horizonte espiritual y del reggae su vehículo planetario.', claves: ['Etiopianismo', 'Shashemene 1948', 'Reggae roots'], cancion: { titulo: 'Exodus', artista: 'Bob Marley & The Wailers', youtubeId: 'OSOqWgqwynQ' }, fuente: 'Bonacci 2015 · Adi 2018' },
      { epoca: 3, de: 'Accra', a: 'Lagos', curva: 0.4, titulo: 'Del highlife al afrobeat', anos: '1950–1977', desc: 'El highlife viajó de Accra a Lagos y allí Fela Kuti lo fundió con el jazz negro americano y el funk: el afrobeat, música panafricanista militante que hizo de la canción una asamblea política. Kalakuta Republic fue su territorio liberado.', claves: ['Fela Kuti', 'Jazz negro + highlife', 'Canción como asamblea'], fuente: 'Montes Pizarro 2018' },
      { epoca: 3, de: 'Dakar', a: 'Lagos', curva: -0.18, titulo: 'Los festivales panafricanos', anos: '1966–1977', desc: 'El Festival Mundial de Artes Negras de Dakar (1966), impulsado por Senghor, fue la primera ocasión —señala Jaji— en que artistas negros de todo el planeta practicaron el panafricanismo cultural a gran escala. El formato probó su durabilidad: Argel 1969, Lagos con el FESTAC 77. Y los festivales generaron también contradiscursos frente al panafricanismo de Estado.', claves: ['FESMAN 1966', 'FESTAC 77', 'Contradiscursos (Jaji)'], fuente: 'Jaji 2014' },
      { epoca: 3, de: 'Nueva York', a: 'Accra', curva: 0.16, titulo: 'Jazz ambassadors: Satchmo en Accra', anos: '1956–1961', desc: 'Cuando Armstrong aterrizó en Accra en 1956, la ciudad lo recibió como a nadie antes. Cantó «Black and Blue» y Nkrumah lo escuchó con lágrimas en los ojos. En 1960 los congoleños lo pasearon en un trono por Leopoldville, mientras la CIA conspiraba contra Lumumba en la misma ciudad. Von Eschen documenta esa ironía: el jazz como embajador de un país que no resolvía su propio racismo.', claves: ['Accra 1956', 'Nkrumah y «Black and Blue»', 'Leopoldville 1960'], cancion: { titulo: 'Black and Blue', artista: 'Louis Armstrong', youtubeId: '2LDPUfbXRLM' }, fuente: 'Von Eschen 2004' },
      { epoca: 3, de: 'Nueva York', a: 'Kinshasa', curva: 0.26, titulo: 'Fania en Zaire 74: la salsa vuelve al Congo', anos: '1974', desc: 'Del 22 al 24 de septiembre de 1974, el festival Zaire 74 reunió en el Stade du 20 Mai de Kinshasa a James Brown, B.B. King, Miriam Makeba, la TPOK Jazz de Franco y la Fania All Stars con Celia Cruz, como antesala del combate Ali–Foreman. Celia cantó «Quimbara» y «Guantanamera» ante el público kinés. El círculo se cerró esa noche: el son que había sembrado la rumba congoleña en discos GV volvía convertido en salsa, al mismo estadio donde reinaban sus nietos congoleños.', claves: ['Stade du 20 Mai', 'Celia Cruz · «Quimbara»', 'Antesala del Ali–Foreman'], cancion: { titulo: 'Quimbara (en vivo, Zaire 1974)', artista: 'Celia Cruz & Fania All Stars', youtubeId: 'AXN-_asIaYs' }, fuente: 'Zaire 74: álbum y film Live in Africa · Manuel 1995 (Fania)' },
      // Época 4 · Retornos y contemporaneidad
      { epoca: 4, de: 'Brazzaville', a: 'Fort-de-France', curva: 0.24, titulo: 'Ry-Co Jazz: África toca en las Antillas', anos: '1967–1971', desc: 'Fundada por Henri Bowane, curtida en giras por África occidental y radicada luego en París, la Ry-Co Jazz llegó en 1967 a Martinica y Guadalupe. Su rumba congoleña se mezcló con la biguine y el konpa: una de las semillas de lo que germinaría como zouk.', claves: ['Rythme Congolais', 'Gira antillana 1967', 'Semilla del zouk'], cancion: { titulo: 'Bonne Année', artista: 'Ry-Co Jazz', youtubeId: 'Gto9mh58vRE' }, fuente: 'Montes Pizarro 2018 · Stewart 2000' },
      { epoca: 4, de: 'Kinshasa', a: 'Cartagena de Indias', curva: 0.2, titulo: 'La champeta africana: los discos que llegaron', anos: '1970–1990', desc: 'Marinos, coleccionistas y corresponsales picoteros trajeron a los puertos colombianos el soukous de los dos Congos, el highlife y el jùjú nigerianos, el mbaqanga sudafricano. Los picós convirtieron ese repertorio en patrimonio popular y lo bailaron con nombre propio: «música africana». El éxito continental de «Sweet Mother» sonó en las verbenas como en Lagos.', claves: ['Soukous · Highlife · Mbaqanga', 'Corresponsales picoteros', '«Música africana»'], cancion: { titulo: 'Sweet Mother', artista: 'Prince Nico Mbarga', youtubeId: '3mecNrIaWOA' }, fuente: 'Cunin 2006 · Giraldo Barbosa 2016 · Ewens 1991' },
      { epoca: 4, de: 'San Basilio de Palenque', a: 'Cartagena de Indias', curva: 1.6, titulo: 'La champeta criolla: Palenque responde', anos: '1984–hoy', desc: 'A mediados de los ochenta, los músicos palenqueros dejaron de solo versionar los discos africanos y grabaron lo suyo: Justo Valdez y Son Palenque abrieron el camino en el Festival de Música del Caribe de 1984, Viviano Torres lo consolidó con Anne Zwing en 1991. La champeta criolla es la respuesta del primer pueblo libre de América a la música del continente: África escuchada, bailada y reinventada en lengua propia.', claves: ['Festival del Caribe 1984', 'Justo Valdez → Viviano Torres', 'Respuesta criolla'], cancion: { titulo: 'Paquete Chileno', artista: 'Viviano Torres · Anne Zwing', youtubeId: '-BfqjW1tb5w' }, fuente: 'Cunin 2003 · Montes Pizarro 2018' },
      { epoca: 4, de: 'Nueva York', a: 'Dakar', curva: 0.2, titulo: 'Africando: dos orillas, un estudio', anos: '1993–hoy', desc: 'Africando juntó en Nueva York a soneros boricuas y dominicanos con las grandes voces de la salsa senegalesa. El disco confirmó lo que ambas orillas ya sabían: llevaban medio siglo cantando lo mismo. La salsa, dice Quintero Rivera, es una «manera de hacer música», y esa manera cabe en las dos orillas.', claves: ['Salsa atlántica', 'Voces senegalesas', '«Manera de hacer música»'], cancion: { titulo: 'Yay Boy', artista: 'Africando', youtubeId: 'x0acVDXeBrc' }, fuente: 'Shain 2018 · Quintero Rivera 1998' },
      { epoca: 4, de: 'Lagos', a: 'Kingston', curva: 0.24, titulo: 'Afrobeats y dancehall: el diálogo sigue', anos: '2010–hoy', desc: 'Los afrobeats nigerianos y ghaneses conversan hoy con el dancehall jamaiquino y el reguetón caribeño en tiempo real: colaboraciones, riddims compartidos, giras cruzadas. El circuito que este mapa dibuja sigue abierto.', claves: ['Afrobeats', 'Riddims compartidos', 'Presente sonoro'], cancion: { titulo: 'Ye', artista: 'Burna Boy', youtubeId: 'lPe09eE6Xio' }, fuente: 'registro contemporáneo' },
      { epoca: 4, de: 'Fort-de-France', a: 'Mindelo', curva: 0.18, titulo: 'Cadence y zouk: el eco caboverdiano', anos: '1970–1990', desc: 'La cadence antillana —con Exile One de Dominica al frente— caló en el África occidental francesa y portuguesa. En Cabo Verde el grupo Apollo se formó como copia fiel de Exile One. Y cuando Kassav&#39; llevó el zouk a la costa africana, su éxito se comparó allá con el de los Beatles. La raíz de toda esa familia rítmica es haitiana: el konpa direk que Nemours Jean-Baptiste bautizó en 1955.', claves: ['Exile One → Apollo', 'Kassav&#39; en África', 'Raíz konpa'], cancion: { titulo: 'Cadence-lypso', artista: 'Exile One · Dominica All Stars', youtubeId: 'wh1c8gbCOoA' }, fuente: 'Guilbault 1993 · Manuel 1995' },
      { epoca: 4, de: 'San Juan', a: 'Barranquilla', curva: 0.35, titulo: 'Rumba Africana: la radio como puente', anos: '2001–hoy', desc: 'Desde 2001, Errol L. Montes Pizarro transmite Rumba Africana por Radio Universidad de Puerto Rico; desde 2014 la retransmite Radio Cultural FM de Barranquilla. El libro que inspira este mapa nació de ese programa: la escucha compartida como método panafricanista.', claves: ['Radio Universidad PR', 'Radio Cultural FM', 'Escucha compartida'], fuente: 'Montes Pizarro 2018' }
    ];

    // ── Utilidades ──
    function buscarNodo(nombre) {
      for (var i = 0; i < nodos.length; i++) {
        if (nodos[i].nombre === nombre) return nodos[i];
      }
      return null;
    }

    function formatCoords(lat, lng) {
      var latDir = lat >= 0 ? 'N' : 'S';
      var lngDir = lng >= 0 ? 'E' : 'O';
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
          '<button type="button" class="atlantico-video-facade" data-yt="' + c.youtubeId + '" aria-label="Reproducir ' + c.titulo + '">' +
            '<img src="https://i.ytimg.com/vi/' + c.youtubeId + '/hqdefault.jpg" alt="Miniatura: ' + c.titulo + '" loading="lazy">' +
            '<span class="atlantico-video-play">&#9658;</span>' +
          '</button>' +
        '</div>';
      }
      var q = encodeURIComponent(c.titulo + ' ' + c.artista);
      return '<p class="atlantico-panel-cancion-label"><a href="https://www.youtube.com/results?search_query=' + q + '" target="_blank" rel="noopener" style="color:inherit">&#9658; Escuchar: <em>' + c.titulo + '</em> &middot; ' + c.artista + '</a></p>';
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
          marco.title = 'Reproductor de YouTube';
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
        '<button class="atlantico-panel-close" type="button" aria-label="Cerrar panel">&times;</button>' +
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
      mostrarPanel(
        panelCabecera(color, n.categoria) +
        '<h3 class="atlantico-panel-title">' + n.nombre + '</h3>' +
        '<p class="atlantico-panel-sub">' + n.pais + ' &nbsp;·&nbsp; ' + formatCoords(n.lat, n.lng) + '</p>' +
        '<p class="atlantico-panel-desc">' + n.desc + '</p>' +
        (n.cultura ? '<p class="atlantico-panel-cultura">♪ ' + n.cultura + '</p>' : '') +
        panelCancion(n.cancion) +
        panelTags(n.claves, color) +
        (n.fuente ? '<p class="atlantico-panel-fuente">Fuente: ' + n.fuente + '</p>' : '')
      );
    }

    function abrirPanelRuta(r, linea, enTour) {
      if (!enTour && tourActivo) abandonarTravesia(false);
      var color = epocas[r.epoca].color;
      var tourBar = '';
      if (enTour) {
        tourBar = '<div class="atlantico-tour-bar">' +
          '<button class="atlantico-tour-btn" type="button" data-tour="prev"' + (tourIdx === 0 ? ' disabled' : '') + '>&larr; Anterior</button>' +
          '<span class="atlantico-tour-paso">' + (tourIdx + 1) + ' / ' + arcos.length + '</span>' +
          '<button class="atlantico-tour-btn" type="button" data-tour="next"' + (tourIdx === arcos.length - 1 ? ' disabled' : '') + '>Siguiente &rarr;</button>' +
          '<button class="atlantico-tour-btn atlantico-tour-btn--salir" type="button" data-tour="salir">Salir</button>' +
        '</div>';
      }
      mostrarPanel(
        panelCabecera(color, 'Época ' + r.epoca + ' · ' + epocas[r.epoca].nombre) +
        '<h3 class="atlantico-panel-title">' + r.titulo + '</h3>' +
        '<p class="atlantico-panel-sub">' + r.de + ' &harr; ' + r.a + ' &nbsp;·&nbsp; ' + r.anos + '</p>' +
        '<p class="atlantico-panel-desc">' + r.desc + '</p>' +
        panelCancion(r.cancion) +
        panelTags(r.claves, color) +
        (r.fuente ? '<p class="atlantico-panel-fuente">Fuente: ' + r.fuente + '</p>' : '') +
        tourBar
      );
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
          '<span class="atlantico-panel-cat" style="color:#F07A16">Cartografía sonora</span>' +
        '</div>' +
        '<h3 class="atlantico-panel-title">El Atlántico Negro, ruta por ruta</h3>' +
        '<p class="atlantico-panel-vacio">Haz clic en un <em>arco</em> para leer la historia de esa ruta musical —con su fuente y su canción— o en un <em>puerto</em> para saber qué se pensó y qué sonó ahí. También puedes recorrerlo todo en orden: pulsa <em>Iniciar la travesía</em> y el mapa te lleva de 1795 hasta hoy.</p>';
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
          '<span class="legend-swatch-name">' + epocas[k].nombre + ' · ' + epocas[k].anos + '</span>' +
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
