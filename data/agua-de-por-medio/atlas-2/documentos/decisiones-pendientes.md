# Decisiones que requieren revisión humana

Etapa 1 · agosto de 2026 · revisión del 8 de agosto tras la aprobación de la dirección académica
Nada de lo que sigue puede resolverse desde el repositorio.

---

## Dos procesos que no se mezclan

Antes de la lista conviene fijar la distinción que ordena todo lo demás, porque la primera versión de este documento no la tenía y de ahí salió una decisión mal planteada.

**Migración del corpus heredado.** Revisión de las 203 entradas actuales contra la taxonomía nueva. Cada entrada recibe una candidatura preliminar cuando la taxonomía anterior permite derivarla, y esa candidatura queda sujeta a confirmación editorial. Ninguna corriente tiene que recibir obras de este proceso. Que una corriente termine sin entradas heredadas no es un defecto de la migración: significa que la taxonomía anterior no la nombraba.

**Siembra dirigida.** Incorporación de obras nuevas aportadas por la dirección académica, que entran directamente con el esquema nuevo y no pasan por migración. Es la vía por la que se constituyen C1, C2 y C5.

La consecuencia práctica: el reparto numérico entre corrientes no es un criterio de clasificación. Una obra entra en una corriente porque esa corriente organiza su argumento. Nunca porque falte llenar una casilla.

## Decisión cerrada: función de los fenómenos

La dirección académica aprobó que **fenómeno** sea la unidad abierta de investigación del atlas y no una categoría temática. Las corrientes son recorridos relacionales y anclajes de navegación; las marcas son dimensiones analíticas transversales; los remolinos son concentraciones territoriales o coyunturales; las operaciones indican cómo una obra produce conocimiento; y las orillas registran posiciones territoriales y epistémicas.

El modelo incorpora un catálogo abierto y curado de fenómenos y una asociación fundamentada entre cada obra y los fenómenos que permite seguir. No se crea una undécima taxonomía ni se deduce el fenómeno del título. Durante la transición el campo será opcional para no invalidar `P00`, `S01`, `A01` ni `A02`; se completará en una pasada editorial específica y será obligatorio antes de publicar la versión 2.0.0.

La fricción epistémica queda fuera de las marcas: solo puede existir en una relación entre obras cuando tiene clase, argumento y evidencia. El cruce lingüístico continúa como dato derivado y distinto.

---

## 1. Las cinco entradas sin correspondencia directa en la taxonomía anterior

Al convertir capitalismo racial y violencias en marcas transversales, cinco entradas quedan sin candidatura derivable, porque esas dos etiquetas son las únicas que llevan:

| id | Obra | Categorías anteriores |
|---|---|---|
| `perezmorales` | *Cartagena's Privateers* | violencias + capitalismo racial |
| `sherwood` | *After Abolition: Britain and the Slave Trade* | capitalismo racial + violencias |
| `esquiva` | *La esquiva promesa de desarrollo* | capitalismo racial + violencias |
| `exceptviolence` | *Exceptional Violence* | violencias + capitalismo racial |
| `jaffeconcrete` | *Concrete Jungles* | capitalismo racial + violencias |

Son corpus heredado y su proceso es reclasificación, no siembra: que no tengan candidatura derivable no las convierte en material nuevo. Requieren lectura del texto para asignarles corriente principal. No propongo destino aquí, porque cualquier propuesta mía se apoyaría en el título y eso es precisamente lo que la regla del punto 5.2 prohíbe.

## 2. Cómo se reparten las 68 entradas con «colonialidad»

Es el nudo de la migración del corpus heredado. Colonialidad es la categoría más poblada y la propuesta la disuelve en varios destinos. El reparto no admite regla automática, pero sí un orden de trabajo. Estas son las co-etiquetas que traen esas 68 entradas:

| Con qué viene | Cuántas |
|---|---|
| memoria | 16 |
| creolización | 9 |
| soberanías | 9 |
| catástrofes | 6 |
| postplantación | 5 |
| capitalismo racial | 5 |
| cuerpo y erótica | 3 |
| memoria + soberanías | 3 |
| memoria + violencias | 3 |
| sola | 3 |
| otras combinaciones | 6 |

La pregunta que ordena el reparto no es de qué habla la obra, sino en qué momento de la relación colonial trabaja: mundos indígenas y ocupación, régimen esclavista, administración imperial y estatus político, persistencia contemporánea. La co-etiqueta orienta la lectura y no la sustituye.

Parte de estas 68 entradas irá a C1 y a C2, que hoy no tienen candidaturas derivables. Eso no es redistribuir para llenar: es que colonialidad nombraba a la vez cuatro cosas y una de ellas era la invasión.

## 3. Calendario de la siembra dirigida para C1, C2 y C5

Tres corrientes no tienen correspondencia directa en la taxonomía anterior y se constituyen por siembra bibliográfica dirigida. La dirección académica tiene el material identificado.

Lo que necesito para incorporarlo:

- La lista bibliográfica con datos completos: autoría, título, año, editorial o revista, DOI cuando exista.
- Para cada obra, en qué corriente entra y por qué esa corriente organiza su argumento.
- Si la obra trae relaciones con entradas ya catalogadas, la cita con página, según la regla de corroboración.

Con eso, la siembra se carga directamente con el esquema nuevo. La matriz ya tiene el valor «pendiente de incorporación» activo y una fila de muestra que enseña el formato esperado.

**Decisión abierta:** si la siembra ocurre antes o después de cerrar la migración del corpus heredado. Hacerla antes permite que las tres corrientes nazcan con cuerpo. Hacerla después evita mezclar dos procesos con reglas distintas en la misma bitácora. Mi recomendación es después, y con commits separados, para que la bitácora distinga qué entrada llegó por revisión y cuál por siembra.

## 4. El campo `tr` no se puede migrar como está

92 valores distintos para 203 entradas, mezclando lengua, procedencia de la autoría y territorio estudiado en una sola cadena libre. «anglófono (EE.UU./Surinam)» dice tres cosas a la vez. «anglófono (hoy EE.UU., antes colonia danesa)» dice una cuarta.

Hay que decidir qué se hace con la información que ese campo guarda y no cabe en `lengua_publicacion`: en muchos casos es lo más parecido a una orilla que tiene el corpus, y perderla sería un retroceso. Recomiendo leer las 203 cadenas y repartirlas en `lengua_publicacion` y `orillas` en una sola pasada, antes de tocar cualquier otra cosa.

## 5. Qué hacer con la fricción ya publicada

El mapa dibuja hoy 189 fricciones epistémicas calculadas por diferencia de lengua. Bajo la regla nueva casi todas pasan a ser cruces lingüísticos, y el atlas quedará con muy pocas fricciones hasta que se relean pares.

Hay que decidir si se publica el mapa así y se explica por qué, o si se releen pares antes. La primera opción es más coherente con lo que el atlas dice de sí mismo. Y aquí sí conviene ser explícito: releer pares para que la figura no quede escasa sería usar el reparto numérico como criterio, que es exactamente lo que la dirección académica descartó. Los pares se releen porque hay razón para sospechar tensión en ellos, no porque falten fricciones.

## 6. Las seis entradas compuestas

`mintz`, `ortiz`, `glissant`, `brathwaite`, `monahan` y `benitez` reúnen dos obras bajo un solo identificador. Dividirlas mejora el corpus y rompe enlaces citables ya publicados, además de obligar a repartir las relaciones que hoy cuelgan del identificador único.

Salida intermedia: conservar el identificador y añadir un campo de obras componentes con sus datos bibliográficos propios, sin partir la entrada. Menos limpio, no rompe nada.

## 7. Los dos duplicados de The People of Puerto Rico

`steward` y `stewardpuertorico` son el mismo libro de 1956. Hay que fusionarlos, elegir qué identificador sobrevive y redirigir el ancla del otro. Tienen clasificación distinta, así que la fusión obliga a decidir cuál era la correcta.

## 8. Las cinco entradas marcadas como manifestación

La procedencia registra lo que la entrada es, no cómo entró al corpus. Aplicado a las cinco entradas que el campo `k` marca como manifestación, el criterio las parte en dos grupos.

`totumo` y `figueroa` son obras de investigación con autoría identificada: el artículo de Dolcey Romero Jaramillo sobre los acuerdos del palenque del Totumo entre 1714 y 1767, y el de José Antonio Figueroa que lee el vallenato como archivo de la violencia política del Magdalena Grande contra la interpretación mágico-realista que la naturaliza. Su procedencia es corpus heredado. Lo que hay que corregir es el campo `k`, y ninguna de las dos tiene año, así que la corrección bibliográfica es doble.

`chande`, `manoalzada` y `esquiva` tienen «archivo» o «borrador / archivo» donde debería ir la autoría, y dos de ellas tampoco tienen año. Bajo el criterio nuevo no puedo afirmar qué son: la única casilla del vocabulario que las acoge es «manifestación», pero eso sería registrar lo que el corpus dice y no lo que la entrada es, y el corpus no lo sabe. Quedan con procedencia sin verificar, y el esquema impide que una entrada en ese estado pase a confirmada.

Están en el corpus publicado y en el conjunto de datos depositado en Zenodo con DOI. O se completan o se retiran; sostenerlas así contradice la regla de corroboración que el atlas se aplica a sí mismo.

**Decisión abierta:** si las tres se completan antes del lote piloto o se retiran del corpus publicado mientras tanto. Retirarlas cambia el recuento de entradas y obliga a nota de versión; completarlas exige localizar las referencias, y `chande` y `esquiva` ni siquiera tienen año por donde empezar a buscar.

## 9. El validador que la metodología promete y no existe

La página de metodología, en español y en inglés, afirma que «un compilador automatizado valida cada campo y cada relación contra el catálogo del atlas». En el repositorio solo existe `sincronizar.py`, que compara el `.js` con el `.json` y no valida contenido.

La Etapa 2 depende de un validador, así que hay que escribirlo. Con la reforma tiene además que comprobar procedencia y tipo de proceso, e impedir combinaciones imposibles: una entrada de siembra nueva no puede llevar proceso de migración, y una de corpus heredado no puede llevar proceso de siembra.

## 10. Qué corriente da el color del nodo

Hoy el color sale de `f[0]`, la primera etiqueta escrita, que nadie declaró como principal. Con corriente principal explícita eso se resuelve solo. Queda decidir si las secundarias se muestran en el mapa o solo en la ficha. Diez colores ya son muchos; un segundo color por nodo probablemente lo vuelve ilegible.

## 11. Autoría de las decisiones editoriales

El esquema pide responsable, fecha y fundamento en cada reclasificación. Si el semillero va a participar, hay que definir quién puede decidir qué antes de empezar. Es también lo que permitiría que la reforma no dependa de una sola persona, que es la debilidad estructural ya identificada en el balance de julio.
