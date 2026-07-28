#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Construye conceptos.json v2.0.0 a partir del corpus v1.0.0 y de las ampliaciones
redactadas en julio de 2026. Conserva intactos los identificadores y las descripciones
de los conceptos que ya existían: un enlace publicado con #opacidad-glissant tiene que
seguir resolviendo al mismo concepto.

Los conceptos añadidos llevan "borrador": true hasta que Roberto los revise.
"""
import json, os, unicodedata, datetime

BASE = os.path.dirname(os.path.abspath(__file__))

def slug(s):
    s = unicodedata.normalize('NFD', s.lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    out = []
    for c in s:
        out.append(c if c.isalnum() else '-')
    r = ''.join(out)
    while '--' in r:
        r = r.replace('--', '-')
    return r.strip('-')

# ── corpus previo: de aquí salen las descripciones ya revisadas ────────────────
viejo = json.load(open(os.path.join(BASE, 'conceptos.json'), encoding='utf-8'))
PREV = {}
def recolectar(n):
    PREV[n['id']] = n
    for c in n.get('children', []):
        recolectar(c)
recolectar(viejo['mapa'])

def V(cid):
    """Descripción heredada del corpus revisado."""
    return PREV[cid]['description']

# ── redacciones nuevas (borradores de julio de 2026) ───────────────────────────
N = {}

N['zona-del-no-ser'] = """Fanon la nombra al pasar, en una nota de Piel negra, máscaras blancas, y Lewis Gordon la convierte en el eje de una lectura entera: hay una región de la experiencia donde el conflicto no es dialéctico porque a uno de los términos no se le reconoce siquiera la condición de término. En la zona del ser, dos sujetos se disputan el reconocimiento. En la zona del no-ser no hay disputa: hay ejercicio de fuerza sobre alguien cuya humanidad no está en discusión porque nunca fue concedida.

Esto tiene una consecuencia que interesa al proyecto. Si la negrura se produce ahí, entonces las demandas de inclusión chocan con un límite estructural: no se puede pedir un lugar en un orden cuya condición de posibilidad es que uno no lo tenga. Por eso Gordon insiste en que atravesar la zona no es integrarse, sino desarmar el régimen que la produce."""

N['sociogenesis'] = """Fanon opone la sociogénesis a la filogénesis y a la ontogénesis: lo que le pasa al sujeto negro no se explica ni por la especie ni por la biografía individual, sino por una estructura social que fabrica el modo en que ese sujeto se percibe a sí mismo. La inferioridad no está en el cuerpo, se epidermiza: se deposita en la piel por obra de una mirada que llega antes que cualquier encuentro.

Weheliye y Zakiyyah Iman Jackson han llevado el argumento más lejos. Si lo humano es un género socialmente producido y no un dato biológico, entonces el racismo no deshumaniza simplemente expulsando del ámbito humano: también humaniza en exceso, moldea, asigna plasticidad. Esa torsión importa para pensar la blanquitud algorítmica, donde el modelo no niega la humanidad del sujeto racializado sino que le asigna una versión degradada de ella."""

N['doble-conciencia'] = """Du Bois describe la experiencia de mirarse siempre a través de los ojos de otro, de medir el alma con la cinta de un mundo que la observa con desprecio divertido. La doble conciencia no es una patología del sujeto negro: es la forma que toma la subjetividad cuando el reconocimiento está mediado por el velo de la línea de color.

En el marco del proyecto, la doble conciencia es el antecedente directo de lo que la blanquitud monumental hace en escala institucional. El monumento obliga a la mirada a pasar por él; produce un desdoblamiento parecido, pero fijado en piedra y en currículo."""

N['nihilismo-negro'] = """Calvin Warren sostiene que la negrura no ocupa un lugar dentro del orden ontológico occidental sino que funciona como su reverso: el ser se sostiene sobre un terror que necesita algo que no sea. De ahí su rechazo a las políticas de esperanza que prometen reparar el orden desde dentro.

El proyecto discute esta posición sin descartarla. Clevis Headley objeta que el afropesimismo tiende a convertir una descripción estructural en un destino, y a borrar las prácticas concretas donde las vidas negras producen mundo. La tensión entre Warren y Headley es productiva: obliga a sostener a la vez la magnitud del terror y la evidencia de que algo se ha creado a pesar de él. El marco se ubica en esa tensión, no en su resolución."""

N['vidas-negras-como-praxis'] = """La expresión viene de Monahan y de una lectura política de Hägglund: las vidas negras no valen porque exista una propiedad intrínseca que las haga valiosas, sino porque se hacen valer en prácticas concretas de cuidado, organización, fiesta y duelo. El valor no antecede a la práctica, se produce en ella.

La consecuencia metodológica es directa. Estudiar las vidas negras no consiste en documentar cuánto se las ha dañado, sino en describir qué se hace con lo que quedó: cómo se sostiene una casa, cómo se enseña un canto, cómo se organiza un velorio. Ahí es donde el marco se juega su diferencia con el afropesimismo."""

N['duelo-y-supervivencia'] = """Nathalie Etoke llama melancolía africana a una condición que no es enfermedad ni resignación: la convivencia larga con una pérdida que no admite duelo terminado, y que sin embargo produce lengua, canto y comunidad. El duelo se vuelve técnica de supervivencia.

En el Caribe colombiano esto tiene formas precisas: los novenarios, los lumbalú, las cantadoras, los altares. Prácticas donde el manejo colectivo de la muerte es al mismo tiempo un modo de transmitir historia. Tomarlas en serio como pensamiento, y no solo como folclor documentable, es una de las apuestas del proyecto."""

N['la-estela'] = """Christina Sharpe usa la palabra wake en sus varios sentidos a la vez: la estela que deja un barco, el velorio, el estado de vigilia. Vivir en la estela es habitar el presente de una catástrofe que no terminó cuando terminó la trata. Hartman lo había nombrado como vida póstuma de la esclavitud: expectativa de vida acortada, encarcelamiento desproporcionado, pobreza heredada.

La estela le da al proyecto su marco temporal. No hay un después de la esclavitud desde el cual mirarla como pasado; hay una duración que sigue operando, y que la blanquitud monumental se encarga de presentar como historia cerrada."""

N['monumento-y-paisaje'] = """El monumento no termina en su pedestal. Organiza la plaza, orienta el tránsito, decide desde dónde se mira la ciudad. En Santa Marta, el monumento a Rodrigo de Bastidas preside el camellón que lleva su nombre: el paseo frente a la bahía por donde entró la conquista se recorre a diario bajo la firma del fundador, sin que nadie tenga que argumentar nada.

Pensar el paisaje como dispositivo, y no como fondo, permite ver que la monumentalización no necesita discursos: le basta con distribuir cuerpos en el espacio. Por eso las disputas por las estatuas no son simbólicas en el sentido menor de la palabra; son disputas por quién organiza el campo visual de una ciudad."""

N['archivo-e-institucion'] = """Trouillot mostró que el silencio no entra en la historia al final, cuando se escribe el libro, sino en cuatro momentos: en la creación del hecho, cuando se produce la fuente; en su reunión, cuando se arma el archivo; en su recuperación, cuando se construye el relato; y en la atribución retrospectiva de importancia, cuando se decide qué fue histórico. La Revolución haitiana no quedó fuera por descuido: fue impensable dentro de las categorías con que se registraba el mundo.

La universidad hereda esa arquitectura. Un currículo de filosofía sin Fanon ni Wynter no expresa una preferencia, expresa un archivo. Por eso el proyecto trata al plan de estudios como objeto de análisis y no solo como lugar de trabajo."""

N['ignorancia-blanca'] = """Charles Mills sostiene que el contrato racial incluye un acuerdo epistemológico: los firmantes se comprometen a no saber ciertas cosas sobre el mundo que habitan. La ignorancia blanca no es un vacío de información que se corrija con datos, es una producción activa, sostenida por instituciones, que permite habitar cómodamente un orden desigual.

Esto explica algo que la denuncia moralista no explica: por qué la evidencia rara vez basta. Quien no sabe por estructura no cambia de posición cuando se le informa, porque su no saber está haciendo un trabajo. George Yancy añade que nombrar la blanquitud, volverla visible como posición y no como norma sin marca, es la operación que esa ignorancia más resiste."""

N['politica-de-la-pureza'] = """Monahan llama política de la pureza al esfuerzo por mantener categorías limpias: razas sin mezcla, tradiciones sin contaminación, saberes sin préstamo. La blanquitud es su caso ejemplar, porque se define por lo que expulsa y necesita vigilancia permanente de sus bordes.

Lo que hace interesante el argumento es que la pureza no es solo un error descriptivo, es un programa: exige trabajo constante para sostener una ficción. La creolización no es entonces la excepción caribeña frente a la norma continental; es lo que ocurre siempre, y la pureza es el aparato que lo niega."""

N['hybris-del-punto-cero'] = """Castro-Gómez nombra así la pretensión de observar el mundo desde ningún lugar: un sujeto sin cuerpo, sin geografía y sin historia que se arroga el derecho de decir cómo son las cosas. En la Nueva Granada del siglo XVIII esa pretensión se sostenía en la limpieza de sangre; en el siglo XXI se sostiene en la objetividad del dato.

El proyecto retoma el punto cero como forma general de la monumentalidad epistemológica. El monumento, el canon y el modelo comparten un gesto: borrar el lugar desde el cual fueron hechos."""

N['colonialismo-de-datos'] = """Couldry y Mejías proponen que la extracción de datos repite la estructura del colonialismo histórico: apropiación de un recurso que antes no era mercancía, en este caso la vida cotidiana convertida en flujo capturable, y su conversión en insumo de un centro que la procesa y la revende.

La analogía tiene un límite que conviene mantener a la vista, porque no hay aquí desplazamiento forzado ni plantación. Pero la asimetría es real: quien entrega los datos no participa de las decisiones sobre lo que se hace con ellos, y la infraestructura que los procesa está concentrada en las mismas geografías que concentraron el capital colonial."""

N['capitalismo-de-vigilancia'] = """Zuboff describe un modelo de negocio que no vende lo que uno mira sino predicciones sobre lo que uno hará. El excedente conductual, esa sobra de datos que la interacción produce y que no hace falta para prestar el servicio, se convierte en la materia prima de un mercado de futuros sobre el comportamiento humano.

El proyecto le hace una objeción desde el Caribe: Zuboff narra el problema como una desviación del capitalismo informacional, cuando la captura de conducta para venderla tiene una historia mucho más larga, que empieza en el registro de cuerpos esclavizados y sus tasaciones. La novedad es la escala y la velocidad, no la operación."""

N['serialidad-algoritmica'] = """Monahan retoma de Sartre la distinción entre grupo y serie. Un grupo se constituye por un proyecto compartido; una serie es un conjunto de individuos alineados por una estructura externa que les asigna una posición sin que medie relación entre ellos, como la fila del bus. La clasificación algorítmica produce series: cohortes de usuarios que nunca se encuentran pero reciben el mismo tratamiento.

De ahí que la crítica al sesgo se quede corta. Aunque un sistema clasificara sin error, seguiría fabricando serialidad, es decir, seguiría relacionando a las personas por fuera de cualquier proyecto propio. La disputa no es solo por la exactitud del modelo, es por quién tiene derecho a constituir un nosotros."""

N['posfascismo-tecnologico'] = """Toscano advierte contra la tentación de reconocer al fascismo únicamente en su iconografía de los años treinta. Lo que hoy circula en el discurso de una parte de la industria tecnológica, y que Karp o Thiel formulan sin eufemismo, tiene otra forma: soberanía técnica, desprecio por la deliberación, apología de la élite fundadora, república gobernada por ingenieros.

Interesa a este proyecto porque ahí la blanquitud monumental se vuelve programa explícito de gobierno. No es que el algoritmo herede sesgos por descuido de sus diseñadores; es que hay un proyecto político que reclama abiertamente el derecho a decidir sobre poblaciones a las que no rinde cuentas."""

N['cimarroneria-analectica'] = """Malcom Ferdinand y Pedro Lebrón Ortiz nombran así un cimarronaje que no se agota en la huida. Analéctico, en el sentido que Dussel le da al término, quiere decir que el movimiento parte de una exterioridad no reconocida por el sistema y que no busca negarlo dialécticamente sino instituir otra cosa. El palenque no es la negación de la plantación: es un mundo con sus propias reglas de parentesco, cultivo y justicia.

Es un correctivo importante frente a lecturas que reducen la resistencia negra a reacción. Lo que se funda en el monte tiene positividad propia, y de ahí la insistencia de Ferdinand en pensar la ecología desde el cimarrón y no desde el ambientalismo blanco."""

N['muntu'] = """Manuel Zapata Olivella trae la noción bantú de muntu para nombrar una comunidad que no se limita a los vivos: incluye a los muertos, a los que están por nacer, a los animales, las plantas, los minerales y la palabra que los enlaza. La persona no es una unidad separada que después entra en relación; es un nudo dentro de una trama que la precede.

Para el proyecto, el muntu es la mayor apuesta filosófica del pensamiento negro colombiano y la menos leída como filosofía. Ofrece una ontología relacional que no viene de la fenomenología europea y que permite pensar el despojo como corte en una trama, no como pérdida de una propiedad individual."""

N['friccion-epistemica'] = """Monahan describe la creolización como roce entre saberes que no se armonizan. La fricción es lo que ocurre cuando dos formas de conocer se encuentran sin que ninguna pueda traducir a la otra sin resto: produce calor, desgaste y, a veces, algo nuevo.

El proyecto usa la fricción como criterio de método. Un marco teórico que solo cita a quienes lo confirman no ha pensado, ha compilado. De ahí que aquí convivan Warren y Headley, Zuboff y sus críticos, Glissant y quienes le objetan que la opacidad puede volverse coartada."""

N['ruido-blanco'] = """En la metáfora sónica de Monahan, la blanquitud opera como ruido blanco: un sonido que contiene todas las frecuencias y que, por eso mismo, deja de oírse como sonido y pasa a percibirse como silencio de fondo. Está en todas partes y nadie lo señala.

La imagen le sirve al proyecto para explicar por qué la blanquitud rara vez se nombra a sí misma. No se esconde: satura. Nombrarla exige el gesto técnico de aislar una frecuencia dentro de lo que se daba por ausencia de sonido."""

N['sujeto-creolizante'] = """Contra la idea de un sujeto que primero es y después se relaciona, Monahan propone un sujeto que se constituye en el proceso mismo de la relación. Creolizante y no creolizado: participio activo, porque no es un estado alcanzado sino una operación en curso.

Esto tiene un costo que el proyecto asume. Si el sujeto se hace en la relación, entonces no hay una negrura anterior a la historia del despojo a la cual regresar. La afirmación de lo negro no puede tomar la forma de un retorno al origen; tiene que tomar la forma de una creación."""

N['marealectica'] = """Kamau Brathwaite propuso pensar el Caribe con el movimiento de la marea en lugar de la dialéctica: no una tesis que avanza hacia su síntesis, sino un ir y venir donde el agua vuelve sin repetirse y cada retorno deja la orilla distinta.

En este marco la marealéctica cumple una función precisa. Impide leer la relación entre negrura y blanquitud como un conflicto que se resolverá en una superación, y obliga a pensarla como una duración con ritmo propio. Es también el puente con el atlas Con el agua de por medio, que organiza el corpus caribeño con esa misma lógica."""

N['reparaciones'] = """Táíwò desplaza la discusión sobre reparaciones desde la deuda hacia la construcción: no se trata de calcular cuánto se debe por un daño pasado, sino de rehacer el orden global que ese daño produjo y que sigue distribuyendo ventajas acumuladas. Ana Lucia Araujo recuerda, además, un hecho que la memoria pública tiende a soltar: las únicas reparaciones pagadas a gran escala fueron a los propietarios de esclavizados, y Haití pagó por su propia libertad durante más de un siglo.

David Scott introduce una objeción que el proyecto no resuelve: hay males que no admiten reparación porque devastaron mundos de vida enteros, y ninguna transferencia restituye un mundo. Sostener a la vez el programa constructivo y esa irreparabilidad es más honesto que elegir uno de los dos."""

N['abolicion'] = """Ruth Wilson Gilmore define el racismo como la producción y explotación, sancionada por el Estado o al margen de la ley, de una vulnerabilidad a la muerte prematura que se distribuye por grupos. La definición es útil porque saca la discusión del terreno de la actitud individual y la pone en el de la esperanza de vida.

De ahí su idea de la abolición como geografía y no como sustracción: abolir no es quitar la cárcel del mapa, es construir las condiciones que la vuelven innecesaria. El proyecto retoma ese desplazamiento para pensar qué significaría abolir el monumento, que tampoco se logra derribándolo."""

N['fabricacion-de-mundos'] = """Worldmaking, en Táíwò, nombra la capacidad de intervenir en la distribución material de un orden y no solo en su representación. Es un correctivo a lo que llama captura de élite: el proceso por el cual demandas colectivas terminan administradas por quienes ya ocupan posiciones de ventaja dentro del grupo agraviado.

La advertencia toca de cerca al trabajo académico sobre la negrura. Un proyecto de investigación puede ser el lugar donde se piensa la reparación o el lugar donde el prestigio de pensarla sustituye a la reparación misma."""

N['esperanza-fragil'] = """Hartmann llama esperanza frágil a una posición que no promete redención ni se refugia en el pesimismo: sostiene la posibilidad sin garantizarla, y sabe que puede perderse. Es distinta del optimismo, que necesita creer que la historia trabaja a su favor.

El proyecto adopta esa frágil como criterio de tono. Un marco que termine en la denuncia total deja sin explicar por qué hay canto, y uno que termine en la celebración deja sin explicar por qué hay muerte prematura. La esperanza frágil es lo que queda cuando no se acepta ninguno de esos dos atajos."""

# interlocutores nuevos
N['du-bois'] = """W. E. B. Du Bois aporta la doble conciencia, el velo y la línea de color, y con ellos la primera teorización sistemática de la experiencia racial como problema filosófico y no solo sociológico. Su pregunta inicial, cómo se siente ser un problema, sigue organizando buena parte del pensamiento negro posterior."""

N['gordon'] = """Lewis Gordon lee a Fanon como filósofo y no como síntoma, y desarrolla desde ahí una fenomenología existencial africana: mala fe, razón paradójica, crisis del hombre europeo. Su insistencia en que la filosofía se descoloniza haciéndola, y no solo denunciando su canon, es un criterio que este proyecto comparte."""

N['mills'] = """Charles Mills convierte la filosofía política en objeto de sospecha: el contrato social sobre el que se funda la modernidad fue, en los hechos, un contrato racial con firmantes y excluidos. Su noción de ignorancia blanca es una de las herramientas más directas del marco."""

N['monahan'] = """Michael Monahan aporta la creolización como proceso ontológico, la política de la pureza como su adversario, y la fricción epistémica como criterio de encuentro entre saberes. Es también el interlocutor con quien el proyecto piensa la serialidad algorítmica."""

N['sharpe'] = """Christina Sharpe piensa desde la estela: la esclavitud como clima y no como acontecimiento pasado. Su trabajo sobre el cuidado en condiciones de catástrofe conecta la reflexión teórica con prácticas concretas de sostenimiento de la vida."""

N['ferdinand'] = """Malcom Ferdinand articula ecología y colonialidad desde el Caribe, y muestra que el ambientalismo europeo pensó la crisis sin la plantación. Su cimarronería analéctica y su Calibán que escucha a Sycorax son operadores centrales de este marco."""

N['warren'] = """Calvin Warren formula la versión más radical del afropesimismo: la negrura como nada que sostiene el ser occidental. El proyecto discute su rechazo a toda política de la esperanza, pero le reconoce haber puesto el problema en el terreno ontológico donde efectivamente se juega."""

N['trouillot'] = """Michel-Rolph Trouillot enseñó a leer los silencios del archivo como producción y no como ausencia. Su análisis de la Revolución haitiana como acontecimiento impensable es el modelo del que este proyecto toma su lectura del archivo y la institución."""

N['zapata-olivella'] = """Manuel Zapata Olivella es el interlocutor colombiano ineludible: el muntu, la pieza de indias, el árbol brujo de la libertad. Su obra exige leer la literatura afrocolombiana como filosofía, no como material etnográfico para que otros la interpreten."""

# ── árbol ─────────────────────────────────────────────────────────────────────
def n(cid, label, desc=None, hijos=None, borrador=False):
    d = {'id': cid, 'label': label}
    d['description'] = desc if desc is not None else V(cid)
    if borrador:
        d['borrador'] = True
    if hijos:
        d['children'] = hijos
    return d

MAPA = n('la-negrura-frente-a-la-blanquitud-monumental',
         'La negrura frente a la blanquitud monumental',
         V('la-negrura-frente-a-la-blanquitud-monumental'), [

  n('negrura', 'Negrura', None, [
    n('experiencia-y-existencia', 'Experiencia y existencia'),
    n('zona-del-no-ser', 'Zona del no-ser', N['zona-del-no-ser'], borrador=True),
    n('sociogenesis', 'Sociogénesis', N['sociogenesis'], borrador=True),
    n('doble-conciencia', 'Doble conciencia', N['doble-conciencia'], borrador=True),
    n('opacidad-glissant', 'Opacidad (Glissant)'),
    n('fugitividad-moten', 'Fugitividad (Moten)'),
    n('carne-y-captura-hartman', 'Carne y captura (Hartman)'),
    n('nihilismo-negro', 'Nihilismo negro y afropesimismo', N['nihilismo-negro'], borrador=True),
  ]),

  n('vidas-negras', 'Vidas negras', None, [
    n('cotidianidad', 'Cotidianidad'),
    n('memoria-colectiva', 'Memoria colectiva'),
    n('santa-marta-y-caribe', 'Santa Marta y Caribe'),
    n('vidas-negras-como-praxis', 'Vidas negras como praxis', N['vidas-negras-como-praxis'], borrador=True),
    n('duelo-y-supervivencia', 'Duelo y supervivencia', N['duelo-y-supervivencia'], borrador=True),
    n('la-estela', 'La estela y la vida póstuma', N['la-estela'], borrador=True),
  ]),

  n('blanquitud-monumental', 'Blanquitud monumental', None, [
    n('monumentalidad-blanca', 'Monumentalidad blanca'),
    n('monumento-y-paisaje', 'Monumento y paisaje', N['monumento-y-paisaje'], borrador=True),
    n('archivo-e-institucion', 'Archivo e institución', N['archivo-e-institucion'], borrador=True),
    n('despojo', 'Despojo'),
    n('porosidad-del-despojo', 'Porosidad del despojo'),
    n('ignorancia-blanca', 'Ignorancia blanca', N['ignorancia-blanca'], borrador=True),
    n('politica-de-la-pureza', 'Política de la pureza', N['politica-de-la-pureza'], borrador=True),
    n('hybris-del-punto-cero', 'Hybris del punto cero', N['hybris-del-punto-cero'], borrador=True),
  ]),

  n('blanquitud-algoritmica', 'Blanquitud algorítmica', None, [
    n('monumentalidad-algoritmica', 'Monumentalidad algorítmica'),
    n('trabajo-de-datos-sur-global', 'Trabajo de datos (Sur global)'),
    n('sesgo-y-vigilancia-noble-buolamwini', 'Sesgo y vigilancia'),
    n('colonialismo-de-datos', 'Colonialismo de datos', N['colonialismo-de-datos'], borrador=True),
    n('capitalismo-de-vigilancia', 'Capitalismo de vigilancia', N['capitalismo-de-vigilancia'], borrador=True),
    n('serialidad-algoritmica', 'Serialidad algorítmica', N['serialidad-algoritmica'], borrador=True),
    n('posfascismo-tecnologico', 'Posfascismo tecnológico', N['posfascismo-tecnologico'], borrador=True),
  ]),

  n('operadores-conceptuales', 'Operadores conceptuales', None, [
    n('juan-albanil', 'Juan Albañil'),
    n('caliban', 'Calibán', None, [
      n('despojado', 'Despojado'),
      n('susurro-de-sycorax', 'Susurro de Sycorax'),
      n('expandido', 'Expandido'),
    ]),
    n('cimarroneria-analectica', 'Cimarronería analéctica', N['cimarroneria-analectica'], borrador=True),
    n('muntu', 'Muntu', N['muntu'], borrador=True),
  ]),

  n('creolizacion-y-friccion', 'Creolización y fricción',
    """Esta rama reúne los conceptos que impiden leer la relación entre negrura y blanquitud como un enfrentamiento entre dos bloques cerrados. Si la creolización describe lo que de hecho ocurre cuando los mundos se rozan, entonces la pureza es el trabajo que hay que hacer para negarlo, y la blanquitud monumental es el resultado de ese trabajo cuando tiene éxito.""",
    [
      n('friccion-epistemica', 'Fricción epistémica', N['friccion-epistemica'], borrador=True),
      n('ruido-blanco', 'Ruido blanco', N['ruido-blanco'], borrador=True),
      n('sujeto-creolizante', 'Sujeto creolizante', N['sujeto-creolizante'], borrador=True),
      n('marealectica', 'Marealéctica', N['marealectica'], borrador=True),
    ], borrador=True),

  n('reparacion-y-horizonte', 'Reparación y horizonte',
    """La pregunta que ordena esta rama es qué se hace con el daño una vez descrito. El marco se niega tanto a la salida redentora, que promete cerrar la herida mediante una transferencia, como a la clausura, que declara el daño total y con ello vuelve innecesaria cualquier práctica. Entre las dos hay un campo de trabajo que este proyecto quiere ocupar.""",
    [
      n('reparaciones', 'Reparaciones', N['reparaciones'], borrador=True),
      n('abolicion', 'Abolición', N['abolicion'], borrador=True),
      n('fabricacion-de-mundos', 'Fabricación de mundos', N['fabricacion-de-mundos'], borrador=True),
      n('esperanza-fragil', 'Esperanza frágil', N['esperanza-fragil'], borrador=True),
    ], borrador=True),

  n('interlocutores', 'Interlocutores', None, [
    n('fanon', 'Fanon'),
    n('du-bois', 'Du Bois', N['du-bois'], borrador=True),
    n('wynter', 'Wynter'),
    n('glissant', 'Glissant'),
    n('hartman', 'Hartman',
      """Saidiya Hartman trabaja donde el archivo esclavista no deja hablar a nadie: expedientes judiciales, anuncios de venta, cuentas de carga. De ahí salen dos aportes que el proyecto usa a diario. Uno es la vida póstuma de la esclavitud, que impide tratar la abolición como línea de llegada. El otro es la fabulación crítica, un procedimiento para escribir sobre vidas de las que solo queda el registro que las cosificó, sin inventarles una interioridad y sin resignarse al silencio.""",
      borrador=True),
    n('moten', 'Moten',
      """Fred Moten piensa lo negro desde la interrupción musical: el grito de Aunt Hester en Douglass, la nota que se sale del compás. Su tesis es que el objeto habla, que la mercancía cantó, y que ese exceso de la cosa sobre su condición de cosa es el punto de partida de la tradición radical negra. Con Stefano Harney añade los abajocomunes: el estudio que ocurre dentro de la universidad pero contra su régimen de deuda y credencial.""",
      borrador=True),
    n('gordon', 'Gordon', N['gordon'], borrador=True),
    n('mills', 'Mills', N['mills'], borrador=True),
    n('monahan', 'Monahan', N['monahan'], borrador=True),
    n('warren', 'Warren', N['warren'], borrador=True),
    n('ferreira-da-silva', 'Ferreira da Silva'),
    n('mckittrick', 'McKittrick'),
    n('sharpe', 'Sharpe', N['sharpe'], borrador=True),
    n('ferdinand', 'Ferdinand', N['ferdinand'], borrador=True),
    n('trouillot', 'Trouillot', N['trouillot'], borrador=True),
    n('zapata-olivella', 'Zapata Olivella', N['zapata-olivella'], borrador=True),
    n('benitez-rojo', 'Benítez Rojo'),
  ]),
])

# imagen heredada del nodo de blanquitud algorítmica
if 'image' in PREV.get('blanquitud-algoritmica', {}):
    for r in MAPA['children']:
        if r['id'] == 'blanquitud-algoritmica':
            r['image'] = PREV['blanquitud-algoritmica']['image']
            r['imageCaption'] = PREV['blanquitud-algoritmica'].get('imageCaption', '')

# ── comprobaciones ────────────────────────────────────────────────────────────
ids, sin_desc, borradores = [], [], []
def revisar(nodo, padre=None):
    ids.append(nodo['id'])
    if not nodo.get('description'):
        sin_desc.append(nodo['id'])
    if nodo.get('borrador'):
        borradores.append(nodo['id'])
    if padre:
        nodo['parent'] = padre
    for c in nodo.get('children', []):
        revisar(c, nodo['id'])
revisar(MAPA)

assert len(ids) == len(set(ids)), 'identificadores repetidos: %s' % [i for i in ids if ids.count(i) > 1]
for cid in ids:
    assert cid == slug(cid) or cid, cid
perdidos = [k for k in PREV if k not in set(ids)]

salida = {
    'meta': {
        'titulo': 'La negrura frente a la blanquitud monumental',
        'subtitulo': 'Constelación conceptual de una investigación en filosofía afrocaribeña',
        'responsable': 'Roberto Almanza Hernández',
        'institucion': 'Grupo de Investigación Pensamiento Caribe · Universidad del Magdalena',
        'version': '2.0.0',
        'fecha': datetime.date.today().isoformat(),
        'licencia': 'CC BY-NC-SA 4.0',
        'conceptos': len(ids) - 1,
        'ramas': len(MAPA['children']),
        'borradores': len(borradores),
        'url': 'https://pensamientocaribe.org/proyectos/mapa-negrura.html',
        'nota': 'Los nodos con "borrador": true fueron redactados en julio de 2026 y esperan revisión de autor.'
    },
    'mapa': MAPA
}

with open(os.path.join(BASE, 'conceptos.json'), 'w', encoding='utf-8') as f:
    json.dump(salida, f, ensure_ascii=False, indent=2)

print('nodos:', len(ids), '| conceptos:', len(ids) - 1, '| borradores:', len(borradores))
print('sin descripción:', sin_desc or 'ninguno')
print('identificadores del corpus 1.0.0 que ya no existen:', perdidos or 'ninguno')
