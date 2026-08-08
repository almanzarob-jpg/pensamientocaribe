# Glosario del dispositivo

Borrador de la Etapa 1 · agosto de 2026 · revisión del 8 de agosto
No reemplaza todavía ningún texto publicado.

Este glosario fija el vocabulario con que se hablará del atlas a partir de la reforma, y explica en cada caso qué existe hoy en el corpus y qué habría que construir. La distinción importa: varios de estos términos ya se usan en la página con un sentido más flojo que el que aquí se propone.

Cuando una entrada dice que algo «no existe en el corpus hoy», describe la taxonomía anterior y no un déficit del proyecto. Tres corrientes nuevas no tienen correspondencia directa en esa taxonomía y se constituyen por siembra bibliográfica dirigida, que es una vía distinta de la revisión del corpus heredado y con reglas propias.

---

## Fenómeno

Proceso histórico, material, cultural o epistémico que atraviesa la cuenca del Gran Caribe y permanece abierto a investigación: plantación, cimarronaje, migración, ocupación, creolización, huracán, archivo, parentesco, entre otros.

Es la unidad de análisis del atlas, no una categoría temática. Una obra no queda encerrada en un fenómeno: permite seguirlo desde determinadas orillas, mediante ciertas operaciones epistémicas y dentro de uno o varios recorridos relacionales.

**Lo que cambia:** los fenómenos se registran en un catálogo abierto y curado. Cada asociación entre una obra y un fenómeno exige fundamento editorial; no se infiere del título ni se usa para equilibrar cantidades. Durante la transición el campo es opcional para no invalidar los lotes ya revisados, pero deberá completarse antes de publicar la versión 2.0.0.

## Corriente

Recorrido relacional que permite seguir fenómenos entre obras, prácticas, lugares y temporalidades sin reducirlos a una nación ni a una disciplina.

Una corriente debe permitir conexiones entre más de una orilla y varias entradas del corpus, desbordar una sola disciplina y abrir preguntas en lugar de cerrar el sentido de las obras que reúne.

**En el corpus hoy:** el campo `f` de cada obra guarda entre una y tres etiquetas de un catálogo de diez, y ninguna está marcada como principal. La primera etiqueta de la lista se usa de hecho como principal, porque de ella salen el color del nodo y el orden de la tabla, pero eso no está declarado en ninguna parte ni fue una decisión editorial: es el orden en que quedaron escritas.

**Lo que cambia:** una corriente principal explícita, entendida como anclaje de navegación y no como identidad definitiva de la obra; hasta dos secundarias; y la obligación de justificar cada asignación. Cuando la taxonomía anterior permite derivar un destino, la entrada recibe una candidatura preliminar sujeta a confirmación editorial; la derivación orienta la lectura y no la sustituye.

**Regla que gobierna toda asignación:** una obra entra en una corriente porque esa corriente organiza su argumento. El reparto numérico entre corrientes no es criterio de clasificación, ni en la revisión del corpus heredado ni en la siembra.

## Remolino

Concentración histórica, territorial o coyuntural dentro de una corriente: una ciudad, una revolución, un canal, una plantación, una práctica.

**En el corpus hoy:** no existe. Lo más cercano son los once lugares de tipo `ciudad` del catálogo de lugares, que funcionan como punto en el mapa y no como concentración de un fenómeno.

**Advertencia:** el remolino es el concepto más caro de los seis. Exige decidir, para cada obra, si el lugar que registra es el escenario del fenómeno o solo el sitio donde el autor hizo trabajo de campo. Conviene dejarlo para la Etapa 2 y no prometerlo en la interfaz antes de tener datos que lo sostengan.

## Cruce

Encuentro entre dos o más corrientes en una misma entrada o entre entradas: plantación y ecología, movilidad y soberanía, espiritualidad y archivo.

**En el corpus hoy:** 195 de 203 entradas llevan dos o tres etiquetas, así que el cruce ya está registrado de facto, pero como coincidencia de etiquetas y no como relación con nombre. El mapa no lo dibuja.

## Fricción

Choque entre obras, lenguajes, epistemologías o interpretaciones que hace visibles los límites de un marco de conocimiento.

**En el corpus hoy:** aquí está el problema más serio del atlas. La fricción no se registra: se calcula. La función `tradCode()` compara la cadena del campo `tr` de los dos extremos de una relación y, si difieren, dibuja el marcador de fricción. Eso ocurre en 189 de las 429 relaciones, el 44 %, sin que ninguna declare argumento ni fuente.

**Lo que cambia:** la fricción pasa a ser una afirmación editorial que necesita crítica explícita, incompatibilidad conceptual, desestabilización de una categoría, conflicto entre epistemologías u objeción documentada. Lo que hoy se infiere por diferencia de lengua se registra como **cruce lingüístico**, que es lo que realmente es.

## Rastro

Huella histórica, documental, corporal, sonora, espiritual, material o territorial que permite seguir un fenómeno.

**En el corpus hoy:** no existe como campo. El más cercano es `ap`, el aporte al atlas, que es prosa libre.

## Orilla

Posición territorial y epistémica desde la que una obra, práctica o comunidad entra en una corriente. Una entrada puede tener varias.

**En el corpus hoy:** el campo `l` admite un solo valor de un catálogo de 28 lugares. Catorce entradas se declaran comparadas o transnacionales en el campo `tr` y quedan igualmente fijadas a un punto: *Mosquito Empires*, sobre la cuenca completa, aparece en un lugar; *The Slave Ship*, de Rediker, también.

**Lo que cambia:** lista de orillas con función declarada. Territorio estudiado, lugar de producción intelectual, destino migratorio, lugar de circulación, territorio comparado, espacio diaspórico.

## Marca transversal

Dimensión analítica que atraviesa varias corrientes y puede combinarse con otras: capitalismo racial, colonialidad, racialización, género, clase y trabajo, memoria y violencias. Estas siete dimensiones no dejan de ser fenómenos históricos; lo que cambia es su función técnica dentro del atlas. La fricción epistémica no es una marca: pertenece a una relación argumentada entre obras.

**En el corpus hoy:** capitalismo racial y violencias son dos de las diez categorías, con 41 y 31 entradas. Al convertirse en marcas, cinco entradas del corpus quedan sin ninguna corriente asignable, porque esas dos etiquetas son las únicas que llevan.

**Regla que la propuesta impone:** la violencia debe tipificarse (esclavista, colonial, estatal, policial, racial, sexual, ambiental, epistémica, archivística, militar, fronteriza) y el capitalismo racial debe indicar el mecanismo concreto por el que acumulación y racialización se articulan. Hoy ninguna entrada trae esa información.

## Operación epistémica

Lo que una obra hace para producir conocimiento, con independencia de su disciplina: reconstruir un archivo, producir etnografía, teorizar, fabular ante el silencio, narrar, cartografiar, escuchar, traducir, seguir una ruta, comparar orillas, preservar una memoria, elaborar un concepto, documentar una práctica, intervenir políticamente, confrontar una categoría, producir testimonio.

**En el corpus hoy:** no existe. Es el campo que permite que una novela y una etnografía entren en relación sin que una quede como ilustración de la otra, y es el que da contenido real a la palabra «indisciplinado». Sin él, la indisciplina es una declaración de intenciones en la página de metodología.

**Costo:** 203 entradas por clasificar a mano, más las que entren por siembra. Es el campo más caro de toda la reforma y también el que más la justifica.

## Ruta

Circulación documentada entre orillas: navegación indígena, trata, fuga, migración laboral, exilio, refugio, deportación, retorno, circulación intelectual, musical o religiosa, comercio, ruta imperial, ruta marítima, conexión portuaria.

**En el corpus hoy:** no existe.

**Regla:** solo se registra cuando la obra documenta efectivamente la circulación. No se crean rutas por proximidad geográfica ni se dibujan trayectorias exactas cuando la fuente solo da origen y destino.

**Nota sobre C5.** La corriente de rutas, diásporas y territorios acuosos no tiene correspondencia directa en la taxonomía anterior, así que ninguna entrada heredada la nombra. Se constituye por siembra bibliográfica dirigida, con el material que la dirección académica tiene identificado. Ninguna entrada del corpus heredado se mueve a C5 para poblarla: si alguna termina ahí será porque su argumento se organiza alrededor de la circulación, y eso solo puede decirlo la lectura.

## Temporalidad

Distinción entre año de publicación, periodo estudiado, acontecimiento, duración histórica, persistencia o retorno, y fecha incierta.

**En el corpus hoy:** un solo campo `y`, que en catorce entradas guarda algo que no es un año: rangos que agrupan libros distintos («1974–85» para Mintz), años de traducción («2016 / trad. esp. 2018»), reediciones («1998 / ed. corr. y ampliada 2020 / relanzada 2025») y cuatro casillas vacías.

## Marealéctica

Concepto de Kamau Brathwaite que el atlas ya usa en su marco público: el tiempo caribeño avanza y se retira como la marea, sin progreso lineal.

**Dónde se queda corto hoy:** la cronología del atlas ordena por el campo `y`, es decir por fecha de publicación académica. Ordena la producción del conocimiento sobre el Caribe, no los fenómenos caribeños. La marealéctica está enunciada en el marco conceptual y contradicha por la vista que debería encarnarla. Separar las temporalidades es lo que permitiría cumplir lo que ya se promete.
