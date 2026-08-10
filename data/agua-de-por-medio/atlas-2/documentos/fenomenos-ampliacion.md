# Ampliación y reagrupamiento de los fenómenos

Borrador para dictamen académico · 10 de agosto de 2026
Base: `datos-atlas.json` v1.15.0 · 233 obras · 588 relaciones · 30 lugares
**No modifica el corpus publicado, ni la interfaz, ni las capas P00, S01, A01 y A02.**

---

## El hueco que esta propuesta llena

La reforma de agosto declaró el fenómeno como unidad de análisis del atlas y le prometió un catálogo abierto y curado, obligatorio antes de publicar la versión 2.0.0. Ese catálogo es la única pieza del esquema 2.0 que nunca se escribió: `catalogos-atlas-2.json` trae corrientes, marcas, mecanismos, operaciones, orillas, lenguas y temporalidades, y no trae fenómenos. La unidad de análisis del atlas es, hoy, el campo vacío.

Mientras tanto el trabajo real lo siguen haciendo las diez etiquetas del campo heredado `f`, que la reforma renombró corrientes sin cambiarles el contenido. Este documento no propone tocarlas.

## Por qué diez etiquetas no alcanzan, con el dato delante

El reparto actual sobre las 233 entradas:

| Etiqueta | Entradas | Cobertura |
|---|---:|---:|
| memoria | 93 | 40 % |
| colonialidad | 77 | 33 % |
| soberanías | 62 | 27 % |
| capitalismo racial | 53 | 23 % |
| creolización | 51 | 22 % |
| violencias | 36 | 15 % |
| postplantación | 35 | 15 % |
| cuerpo y erótica | 29 | 12 % |
| cimarronaje | 26 | 11 % |
| catástrofes | 16 | 7 % |

Una etiqueta que marca cuatro de cada diez entradas no clasifica: acompaña. Filtrar por `memoria` devuelve casi la mitad del atlas, y por tanto no responde ninguna pregunta.

Hay un dato más severo. **Ninguna de las 233 entradas lleva `memoria` como etiqueta única.** Aparece siempre junto a otra. Ese es exactamente el criterio con que la reforma degradó `capitalismo racial` y `violencias` a marcas transversales: una etiqueta que nunca puede sostener sola una entrada no está nombrando aquello de lo que la obra trata, sino una dimensión que la atraviesa. `memoria` cumple ese criterio con más claridad que las dos que sí fueron degradadas, y la reforma no lo advirtió. `colonialidad` aparece sola tres veces sobre 77.

Un tercer indicio: 205 de las 233 entradas llevan exactamente dos etiquetas, 20 llevan tres y 8 llevan una. Esa regularidad no la produce la lectura de 233 obras distintas. La produce una plantilla.

Los solapamientos, en cambio, son bajos: el par más frecuente, `memoria` + `colonialidad`, tiene un Jaccard de 18 %. El problema no es que las diez se repitan entre sí. Es que las grandes son demasiado gruesas para discriminar.

## Qué hay realmente dentro de las dos etiquetas grandes

Leídas una por una las 93 entradas de `memoria` y las 77 de `colonialidad` a partir del campo `ap` que el propio corpus registra, aparecen agrupamientos que la etiqueta única confunde.

Dentro de `memoria` conviven al menos nueve cosas distintas: la producción activa del silencio de archivo (Trouillot, Fischer, Lasso, García Peña); la oralidad con estatuto de fuente (Price, Bèbel-Gisler, Allen, Prestol); el ritual como epistemología (Palmié, Gómez, Hagedorn); la formación histórica de una tradición religiosa (Cabrera, Chevannes, Miller); el sonido como saber (Henriques, el picó cartagenero, el batá); el radicalismo negro transnacional (Quinn, James, Austin, Puri); la etnogénesis (González, Cosgrove, Mintz y Price); la diáspora como hogar sostenido a distancia (Olwig, Brown, Castor); y la arqueología precolonial (Keegan y Hofman, Atkinson).

Llamar a todo eso «memoria» no es un error de precisión. Es perder el argumento: entre *Silenciando el pasado* y *First-Time* la diferencia no está en el tema sino en qué hace cada libro con el archivo, y ese es justamente el tipo de distinción que el atlas dice querer mostrar.

Dentro de `colonialidad` ocurre lo mismo con seis agrupamientos: crítica del saber colonial, estatus político no soberano, ecología colonial, formación racial nacional, independencia como conflicto regional, y régimen de trabajo importado.

## La propuesta

Un catálogo de **35 fenómenos en 10 familias**, derivado por lectura del corpus y no por deducción de un marco teórico previo. Cada fenómeno declara:

- **glosa** — qué nombra;
- **corrientes compatibles** — de cuáles de las diez puede colgar;
- **criterio** — qué debe mostrar la obra para recibirlo;
- **no confundir con** — el fenómeno vecino del que hay que distinguirlo, que es la regla que evita el deslizamiento;
- **anclas** — entre dos y seis entradas del corpus que lo sostienen.

Las 35 anclas cubren 120 entradas distintas, más de la mitad del corpus. Ninguna es inventada: todas se verificaron contra `datos-atlas.json`.

### Arquitectura: capa fina, estrictamente aditiva

Las diez corrientes siguen siendo el anclaje de navegación y el origen del color del nodo. Los fenómenos cuelgan por debajo y pueden cruzar corrientes, que es precisamente lo que la definición pide de ellos.

Esto no es una cortesía hacia la interfaz: es una condición técnica. El mapa lee `n.f` en diecisiete lugares, saca el color y el racimo de `n.f[0]`, y dibuja **un racimo por cada clave de `ATLAS.fenomenos`**. Ampliar ese catálogo, que es lo primero que uno haría, no añadiría matices: añadiría racimos vacíos flotando en el mapa. La única forma de ampliar sin romper es no tocarlo.

Por eso la capa vive en archivos separados, con campo propio (`fenomenos_asignados`) y validador propio que comprueba, entre otras cosas, que el lote no escriba ninguno de los campos del corpus publicado.

### Un detalle que el validador atrapó

La primera versión del lote llamaba `fenomenos` al campo de asignaciones. Esa palabra ya es la clave del catálogo de las diez en `datos-atlas.json`. El validador lo marcó como invasión en las 26 filas. La colisión no habría roto nada de inmediato, y por eso mismo era peligrosa: habría reaparecido el día en que alguien fusionara las dos capas. Quedó renombrado.

## La prueba: 26 entradas

La muestra no representa el corpus, lo tensiona: sobrerrepresenta a propósito `memoria` y `colonialidad`, incluye las cuatro entradas de `catastrofes` que cruzan con ellas y tres de las treinta nuevas de la 1.15.0.

| | Etiquetas heredadas | Fenómenos |
|---|---|---|
| Combinaciones distintas en 26 entradas | 15 | 26 |
| Cobertura de la etiqueta más frecuente | 17 de 26 (65 %) | 5 de 26 (19 %) |

Con las diez, once entradas comparten su descripción con alguna otra. Con los 35, cada una de las 26 queda descrita de forma única. Ese es el sentido de «dar más cuenta de los problemas»: no más etiquetas, sino etiquetas que separen lo que hoy queda junto.

La muestra ejercita 30 de los 35 fenómenos. Los cinco restantes —fiesta y performance público, etnogénesis, contraplantación, plantación y su secuela, turismo y economía de la mirada— tienen anclas verificadas pero no entraron en la muestra; se prueban en la ronda siguiente.

## Lo que esta ronda no resuelve

**El fundamento todavía no es fuente.** Las 26 asignaciones se apoyan en el campo `ap` del corpus y en el título, que es evidencia interna. Bajo la regla de corroboración que el atlas se aplica a sí mismo, eso alcanza para proponer y no para confirmar. Las 26 filas quedan en estado `propuesto`. Ninguna puede pasar a `confirmado` sin lectura de la obra o fuente localizable con página.

**Tres entradas no llegan al mínimo de dos fenómenos.** Keegan y Hofman, Bonilla y Ferdinand reciben uno solo. O la lectura completa aporta el segundo, o la regla del mínimo necesita una excepción declarada. La alternativa —forzar un segundo fenómeno para cumplir la regla— es el mismo vicio que la dirección académica descartó cuando prohibió usar el reparto numérico como criterio.

## La regla de los tres niveles

La dirección académica resolvió el 10 de agosto la ambigüedad de vocabulario que arrastraba la reforma, fijando tres niveles que no se mezclan:

| Nivel | Función |
|---|---|
| Corriente | Recorrido que organiza el argumento de una obra |
| Marca transversal | Dimensión que puede aparecer en varias corrientes |
| Fricción | Propiedad argumentada de una relación entre obras |

De ahí salieron tres correcciones, ya aplicadas en `catalogos-atlas-2.json` (esquema `2.0-lotes.2`):

`colonialidad` y `memoria` **se conservan como marcas** y salen del nombre de las corrientes. La corriente 1 pasa de «Invasiones, colonialidades y mundos indígenas» a **«Invasiones y mundos indígenas»**, que además devuelve el acuerdo con su propia clave. La corriente 9 pasa de «Memorias, espiritualidades y archivos vivos» a **«Espiritualidades, rituales y archivos vivos»**.

`friccion_epistemica` **sale del catálogo de marcas**. No se pierde nada: `esquema-datos-propuesto.json` ya la definía como «afirmación editorial perteneciente a una relación entre obras, nunca una marca de entrada», y el glosario decía lo mismo. El array de marcas era el único sitio que lo contradecía, y ninguna configuración ni ningún archivo generado la usaba.

**Solo se renombraron las etiquetas, no las claves.** Las claves `invasiones_mundos_indigenas` y `memorias_espiritualidades_archivos_vivos` están escritas en `piloto-config`, `s01`, `a01` y `a02`, en sus versiones de configuración y de salida. Renombrarlas obligaría a regenerar cuatro capas cerradas, que es lo que prohíbe la regla 3 de la memoria operativa. El precio es que la clave de la corriente 9 conserva una palabra que su etiqueta ya no usa; queda declarado en el propio catálogo para que nadie lo lea como descuido.

Las cuatro capas cerradas se revalidaron después del cambio: `0 error(es), 0 advertencia(s)` cada una.

## Orden de trabajo sugerido

1. Dictamen académico sobre el catálogo: qué fenómenos sobran, cuáles faltan y si las diez familias son las correctas.
2. Segunda ronda de prueba sobre los cinco fenómenos no ejercitados, con fuente y no con `ap`.
3. Solo entonces, pasada editorial sobre las 233 entradas.
4. Pendiente manual: la hoja «Corrientes» de los libros de plan, filas 5 y 13, todavía trae las etiquetas viejas en las columnas ES y EN. No se editaron desde aquí porque el round-trip de openpyxl elimina las validaciones de datos de esos libros.

Esta secuencia no compite con T01. T01 descompone el campo `tr` y esta capa no lo toca; pueden avanzar en paralelo con commits separados.

## Archivos

- `atlas-2/catalogo-fenomenos.json` — el catálogo, 35 fenómenos en 10 familias.
- `atlas-2/lotes/f01-muestra.json` — las 26 asignaciones de prueba.
- `scripts/validar-fenomenos.mjs` — validador de la capa.

Verificación desde la raíz del repositorio:

```bash
node scripts/validar-fenomenos.mjs
node scripts/validar-atlas.mjs
git status --short
```

Resultado esperado: la capa nueva pasa con `0 error(es)` y tres advertencias declaradas; el corpus publicado sigue dando `0 error(es), 5 advertencia(s)`, exactamente las mismas de antes; y `git status` no muestra ningún archivo modificado, solo archivos nuevos.
