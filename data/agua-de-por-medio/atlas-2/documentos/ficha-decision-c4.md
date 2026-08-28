# Ficha de decisión de C4 — Postplantación, trabajo y desposesión

**Documento NO DECISORIO.** No ratifica denominación, no aprueba guion, no fija fronteras, no decide universo, no crea candidaturas, no reclasifica obras, no autoriza siembra. Prepara evidencia verificada para que la Dirección Académica responda las nueve preguntas del apartado 16 de `expediente-evidencia-c4.md`, en el mismo orden y con la misma numeración de ese apartado.

Rama `feat/atlas-2-etapa-1-integrada` · corpus `datos-atlas.json` v1.16.1 (232 obras) · 15 de agosto de 2026.

Cada cifra de esta ficha se recalculó ahora, en esta sesión, consultando directamente el corpus, el catálogo de corrientes, el catálogo de fenómenos, los cuatro archivos de lote y el historial de Git — no se copió del expediente. Donde el resultado coincide con el expediente, se dice explícitamente que coincide. Donde no coincide, se dice explícitamente que no coincide y se muestra la discrepancia sin resolverla.

---

## Decisión 1 — Denominación

### Pregunta reservada a la Dirección Académica

¿Se ratifica «Postplantación, trabajo y desposesión»?

### Evidencia verificada

Se consultó `catalogos-atlas-2.json` en las cinco versiones de archivo que existen en el historial de Git (`619ad67`, `99aec5b`, `2343008`, `d3b15a7`, `16fc252`), con `git show <commit>:<ruta>` sobre cada una, ahora mismo. En las cinco, el registro de la corriente `postplantacion_trabajo_desposesion` es idéntico byte a byte:

```
{"n":4,"label":"Postplantación, trabajo y desposesión","label_en":"Post-plantation, labor and dispossession","provisional":true}
```

Cero redacciones distintas, cero cambios, en las cinco versiones. El campo `provisional` permanece en `true` en las cinco; no hay ningún punto del historial en que pase a `false`.

### Casos relevantes

| Versión | Commit | `label` | `provisional` | Cambio respecto a la anterior |
|:---:|:---:|---|:---:|---|
| 1 | `619ad67` | Postplantación, trabajo y desposesión | true | — |
| 2 | `99aec5b` | Postplantación, trabajo y desposesión | true | Ninguno |
| 3 | `2343008` | Postplantación, trabajo y desposesión | true | Ninguno |
| 4 | `d3b15a7` | Postplantación, trabajo y desposesión | true | Ninguno |
| 5 | `16fc252` | Postplantación, trabajo y desposesión | true | Ninguno |

### Tensión académica

La estabilidad documental (cinco versiones idénticas) es un hecho verificable, pero no es lo mismo que un fundamento conceptual para el nombre. Un nombre puede permanecer estable simplemente porque nadie lo ha revisado, no porque se haya argumentado que es el correcto. El propio expediente (apartado 4) registra que el dictamen ya publicado de C2 dejó pendiente, explícitamente, "la lectura cronológica del par plantación/postplantación... antes del dictamen específico de C4" — es decir, hay al menos una cuestión conceptual abierta que la estabilidad del texto no resuelve por sí sola.

### Lo que el expediente NO permite decidir automáticamente

La estabilidad de cinco versiones no equivale a un argumento sobre por qué "postplantación" es el término correcto frente a alternativas no exploradas. El campo `provisional: true` es una marca editorial, no un juicio sobre la calidad del nombre. Ninguna de las 232 obras del corpus contiene una discusión textual, dentro de este repositorio, sobre la idoneidad del término mismo — la evidencia disponible es de estabilidad de archivo, no de deliberación conceptual documentada.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 2 — Frontera C2/C4

### Pregunta reservada a la Dirección Académica

¿C2 y C4 se distinguen por régimen analítico dominante, por cronología o mediante una combinación más precisa?

### Evidencia verificada

Seis casos confirmados cruzan C2 y C4 (verificado de nuevo, por script, sobre los cuatro archivos de lote): cinco con C2 principal y C4 secundaria, uno con C4 principal y C2 secundaria.

### Casos relevantes

| id | Estado actual | Evidencia relevante (`fundamento` del lote) | Qué permite afirmar | Qué NO permite afirmar |
|---|---|---|---|---|
| `williamscapitalismo` | C2 principal / C4 secundaria | «Sitúa la trata y la esclavización antillana en la formación del capitalismo británico y discute la abolición desde la transformación económica» | El régimen esclavista (C2) puede llevar una persistencia postplantación (C4) como secundaria | No dice si esa persistencia es la regla o la excepción entre las obras de C2 |
| `naveda_esclavoscordoba` | C2 principal / C4 secundaria | «Se organiza alrededor de la esclavitud negra y el sistema azucarero de Córdoba durante los siglos XVII a XIX; la postplantación queda como persistencia secundaria» | Misma estructura: núcleo esclavista, cola postplantación | No discute el criterio de distinción, solo lo aplica |
| `hall_slavesocietydanish` | C2 principal / C3 y C4 ambas secundarias | «Define la esclavitud como fundamento de toda la sociedad colonial; rebeliones y emancipación son capítulos de esa arquitectura, no el principio ordenador» | Un mismo libro puede tener C3 y C4 como secundarias simultáneas de un C2 principal | No dice cómo se relacionan C3 y C4 entre sí dentro de ese libro |
| `morenofraginals` | C2 principal / C4 secundaria | «El objeto es el complejo azucarero esclavista; postplantación describe mejor la persistencia posterior que el núcleo histórico del libro» | Es el caso más explícito: el propio fundamento nombra "persistencia posterior" como razón de la secundaria C4 | No convierte esto en una regla temporal general para todo C2/C4 |
| `esquiva` (referencia, no del núcleo de 6) | C7 principal / C4 secundaria | No cruza C2, se cita solo para no confundir "cruza con C4" con "cruza con C2" | — | — |
| `workercane` | **C4 principal / C2 secundaria** | «La historia de vida de Don Taso organiza una lectura del trabajo cañero y la proletarización; la plantación azucarera es su arquitectura histórica secundaria» | Existe al menos un caso en la dirección opuesta: un régimen laboral postplantación con el núcleo esclavista como trasfondo, no como argumento | Un solo caso no establece un patrón de dirección inversa |

(Se retira `esquiva` de la tabla de evidencia activa: no cruza C2, se dejó visible arriba solo para que quede explícito que no es parte de los seis casos C2/C4.)

### Tensión académica

En los cinco casos con C2 principal, el `fundamento` de lote describe una relación de sucesión histórica (el régimen esclavista como núcleo, la postplantación como persistencia o cola), lo que sugiere lectura cronológica. En `workercane`, la dirección se invierte sin que el fundamento discuta explícitamente por qué. Ningún caso, en ninguna dirección, contiene una declaración textual del tipo "esto se distingue de C2 por régimen analítico y no por época" — esa formulación pertenece al guion de C2, no a los fundamentos de los seis casos.

### Lo que el expediente NO permite decidir automáticamente

Ningún fundamento de lote discute explícitamente el criterio de distinción entre C2 y C4; todos aplican una clasificación sin argumentarla en esos términos. Seis casos son la evidencia disponible, no una muestra suficiente para inferir una regla general de cronología o de régimen analítico.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 3 — Frontera C3/C4

### Pregunta reservada a la Dirección Académica

¿Cómo distinguir contraplantación, fuga y reorganización postplantacionaria?

### Evidencia verificada

`catalogo-fenomenos.json` (releído ahora): el fenómeno `contraplantacion` declara `"familia":"fuga"` y `"corrientes":["postplantacion_trabajo_desposesion","fugas_cimarronajes_emancipaciones"]` — es decir, C4 y C3. Sus tres anclas son `casimir`, `olwigstjohn`, `cuijla`. Verificado ahora, directamente contra los cuatro archivos de lote: **ninguna de las tres tiene entrada en ningún lote** (`piloto-config.json`, `s01-config.json`, `a01-config.json`, `a02-config.json`). Siguen sin lote. El catálogo de fenómenos completo se declara a sí mismo, en su estado general, como «borrador para dictamen académico; no se ha aplicado al corpus publicado».

### Casos relevantes

| id | Estado actual | Evidencia relevante | Qué permite afirmar | Qué NO permite afirmar |
|---|---|---|---|---|
| `casimir` | Sin lote | Ancla de `contraplantacion` en el catálogo de fenómenos, sin fundamento de lote propio | Es una de las tres anclas declaradas del fenómeno | No hay `fundamento` de lote que explique por qué es ancla; no se ha leído contra C3 ni C4 |
| `olwigstjohn` | Sin lote | Ídem | Ídem | Ídem |
| `cuijla` | Sin lote | Ídem | Ídem | Ídem |
| `hall_slavesocietydanish` | C2 principal / C3 y C4 ambas secundarias | «Rebeliones y emancipación son capítulos de esa arquitectura [esclavista], no el principio ordenador» | Es el único caso confirmado donde C3 y C4 coexisten como secundarias de un mismo libro | El fundamento subordina ambas a C2 y no dice nada sobre cómo se relacionan C3 y C4 entre sí — no fija un criterio C3/C4 |

### Tensión académica

El fenómeno `contraplantacion` está formalmente definido (familia, corrientes compatibles, anclas) pero sus tres anclas no tienen fundamento de lote propio: la definición existe en el catálogo, no en una lectura documentada de las obras que la sostienen. El único caso con C3 y C4 simultáneas (`hall_slavesocietydanish`) no discute la distinción, la evita subordinando ambas a un tercer eje (C2).

### Lo que el expediente NO permite decidir automáticamente

No hay, en este repositorio, ningún caso confirmado que fije un criterio C3/C4. La regla de distinción —si «rehacer sociedad dentro del territorio de la antigua plantación» corresponde a C4 y «sustraerse de él» corresponde a C3, o cualquier otra formulación— puede enunciarse en abstracto, pero su aplicación a `casimir`, `olwigstjohn` y `cuijla` requiere leer esas tres obras, que siguen sin lote.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 4 — Guion de C4

### Pregunta reservada a la Dirección Académica

¿Se mantiene el guion provisional o debe ampliarse/modificarse?

### Evidencia verificada

Texto vigente del guion (`etapa-1-arquitectura-integrada.md`, sección 2, entrada C4), transcrito sin modificación:

> «Incluye»: Régimen laboral postabolición; enclave y extracción; turismo como economía de la mirada; desposesión urbana y rural.

Se revisó el `fundamento` de lote de los nueve casos citables para una posible ampliación, directamente contra los archivos de lote, ahora mismo. Distingo, caso por caso, si C4 es su corriente **principal** o solo **secundaria** — porque solo el primer tipo sostiene una obra como evidencia central del guion; el segundo es evidencia de cruce, no de contenido nuclear de C4.

### Casos relevantes

| id | C4 es | Dimensión que el `fundamento` del lote sostiene | Qué permite afirmar | Qué NO permite afirmar |
|---|---|---|---|---|
| `reddock` | Principal | «Trabajo, empleo y participación política de las mujeres... género atraviesa esa economía política» | El caso sostiene lenguaje de trabajo femenino como núcleo, no como añadido | Un caso no establece que "trabajo femenino" deba ser una línea explícita del guion |
| `downtownladies` | Principal | «Trabajo informal transnacional y la autonomía económica de comerciantes; género y cuerpo importan, pero no organizan por sí solos el libro» | Sostiene trabajo informal transnacional con componente de género, como principal | El propio fundamento aclara que género no es el eje organizador — matiza cualquier lectura de "trabajo femenino" como categoría única |
| `floresvillalobos` | Principal | «El trabajo reproductivo de mujeres migrantes sostiene la infraestructura imperial y la fuerza laboral» | Sostiene tanto trabajo femenino como migración laboral, como principal | No dice si ambas dimensiones deben separarse en el guion o tratarse como una sola |
| `shepherdmaharani` | **Secundaria** (principal es C5, `rutas_diasporas_territorios_acuosos`) | «La travesía y el traslado de trabajo contratado desde India al Caribe organizan el libro» | Apoya "migración laboral" solo como cruce, no como argumento nuclear de una obra C4 | No puede citarse como caso C4 principal — es evidencia de frontera C4/C5, no de contenido de C4 |
| `harpellecostarica` | **Secundaria** (principal es C5) | «La migración antillana y su asentamiento en Costa Rica estructuran el libro; trabajo bananero... secundarios» | Mismo tipo de apoyo parcial a "migración laboral" | Mismo límite: no es evidencia nuclear de C4 |
| `shellerconsuming` | Principal | «La explotación colonial persiste en consumo, turismo y conocimiento» | Sostiene turismo como principal | Un solo caso principal para toda la dimensión "turismo" |
| `bourgoisethnicity` | Principal | «Empresa bananera transnacional organiza la división étnica del trabajo... jerarquías raciales y de clase» | Sostiene enclave/extractivismo (bananero) como principal | No extiende automáticamente a otros tipos de enclave (minero, zona franca) sin lectura propia |
| `alvarezboro` | Principal | «Precariedad, segregación étnico-racial, violencia urbana y marginación sociopolítica estructural en una periferia afrocaribeña de Cartagena» | Único caso que sostiene "desposesión urbana" con fundamento propio, como principal | Un solo caso; el guion actual ya incluye "desposesión urbana y rural" en su lista de «Incluye», así que esto reforzaría, no ampliaría, esa línea |
| `klein_battleparadise` | Principal | «El centro es el capitalismo del desastre, la privatización y la desposesión post-María; ecología del huracán y soberanía son cruces secundarios» | Sostiene una dimensión no listada literalmente en el guion actual: desposesión ligada a desastre y privatización, distinta de "desposesión urbana y rural" en sentido genérico | Un solo caso; y el `fundamento` no usa el término "desastre" como categoría de guion, es mi lectura del texto del fundamento, no una cita textual del guion |

### Tensión académica

El guion actual ya incluye "desposesión urbana y rural" en términos generales; los casos con fundamento explícito de desposesión (`alvarezboro`, `klein_battleparadise`) podrían leerse como aplicación de lo ya escrito, no como ampliación. En cambio, "trabajo femenino" y "migración laboral" no aparecen como términos en el guion vigente, aunque varias obras principales los sostengan como núcleo. La pregunta genuina no es solo si ampliar, sino si el guion actual ya cubre implícitamente estos casos bajo "régimen laboral postabolición" o si necesita nombrarlos.

### Lo que el expediente NO permite decidir automáticamente

Ningún fundamento de lote fue escrito pensando en si debía o no ampliar el guion — son fundamentos de clasificación, no de redacción de guion. Los dos casos de `shepherdmaharani` y `harpellecostarica` no pueden usarse como evidencia nuclear porque C4 es secundaria en ambos. El caso de `klein_battleparadise` introduce una dimensión (desastre/privatización) que ningún documento de este repositorio ha propuesto todavía como línea de guion; se presenta aquí como observación factual, no como propuesta.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 5 — Universo de lectura

### Pregunta reservada a la Dirección Académica

¿Se adopta como universo de lectura el conjunto de 33 entradas construido por el expediente?

### Evidencia verificada

Reconstruí los tres conjuntos desde cero, con script, contra las fuentes vivas — no copié la cifra del expediente.

**Conjunto A — etiqueta heredada `postplantacion`.** Método: `datos-atlas.json`, campo `f` incluye `"postplantacion"`. Resultado: **34** identificadores, verificado por conteo directo.

**Conjunto B — anclas de fenómenos compatibles con C4.** Método: unión de los campos `anclas` de los siete fenómenos cuyo campo `corrientes` (nombre real, no `corrientes_compatibles`) incluye `postplantacion_trabajo_desposesion`. Resultado: **22** identificadores.

**Conjunto F — los cuatro casos deliberados de `decisiones-pendientes.md`.** `perezmorales`, `sherwood`, `exceptviolence`, `jaffeconcrete` (se excluye `esquiva`, ya clasificada: C7 principal / C4 secundaria). Resultado: **4** identificadores.

**Entradas ya revisadas hacia C4 (13 principales + 16 secundarias, sección 8 del expediente).** Verificado por script sobre los cuatro archivos de lote: **29**, sin duplicados entre sí.

**Deduplicación A∩B, verificada ahora por script — resultado distinto al que afirma el expediente.** El expediente (apartado 9.7, fila 4) dice: "sin duplicados entre A y B, verificado por script". Volví a comparar A y B directamente: **A y B se superponen en 9 identificadores**: `casimir`, `olwigstjohn`, `cuijla`, `mintzarea`, `brereton_racerelationstrinidad`, `kincaidsmallplace`, `shellerconsuming`, `williamscapitalismo`, `morenofraginals`. De esos 9, tres (`shellerconsuming`, `williamscapitalismo`, `morenofraginals`) ya están dentro de las 29 revisadas; los otros seis no. La afirmación "sin duplicados" del expediente no se sostiene frente a esta comprobación.

**Cálculo del universo bajo dos definiciones distintas de "ya revisado", ambas aplicadas ahora por script:**

*Definición estricta* — "ya revisado" = las 29 entradas con `corriente_confirmada` o `corrientes_secundarias` igual a C4 (exactamente la sección 8 del expediente, a la que la fila 1 de su apartado 9.7 dice remitirse):
- A ∩ 29 = 13 (no 15, como dice el expediente)
- A − 29 = 21 (no 19)
- B − 29 = 16 (no 10)
- (A∪B) − 29 = **31** (no 29)
- Universo final = 31 + 4 (conjunto F, ninguno de sus miembros está en A, B ni en las 29) = **35**

*Definición amplia* — "ya revisado" = cualquier identificador que aparezca en cualquiera de los cuatro archivos de lote, con cualquier corriente asignada o incluso sin ninguna (57 identificadores en total, no 29):
- A ∩ 57 = 15 (coincide con el expediente)
- A − 57 = 19 (coincide)
- (A∪B) − 57 = **29** (coincide)
- Universo final = 29 + 4 = **33** (coincide con el expediente)

**La cifra 33 del expediente es reproducible, pero solo bajo la definición amplia, que su propio apartado 9.7 nunca declara como tal** — remite a "apartado 8", y el apartado 8 solo enumera las 29 entradas con rol C4 confirmado, no las 57 que aparecen en cualquier lote con cualquier corriente o ninguna.

**La diferencia exacta entre 35 y 33 son dos identificadores: `mintz` y `handlerlangebarbados`.** Ambos tienen la etiqueta `postplantacion` (están en A). Ninguno de los dos tiene `corriente_confirmada` o `corrientes_secundarias` igual a C4. `mintz` está en el lote piloto, dividido en dos componentes (`mintz-caribbean-transformations`, `mintz-sweetness-and-power`), ambos con `"corriente":null` y `"estado_corriente":"pendiente_revision_con_texto"` — revisado, pero no clasificado hacia ninguna corriente. `handlerlangebarbados` sí fue clasificado, pero hacia `trata_esclavizacion_plantacion` (C2) principal y `memorias_espiritualidades_archivos_vivos` (C9) secundaria — no hacia C4.

### Casos relevantes

| id | Estado actual | Evidencia relevante | Qué permite afirmar | Qué NO permite afirmar |
|---|---|---|---|---|
| `mintz` | En lote, `pendiente_revision_con_texto`, sin corriente en ninguno de sus dos componentes | Candidatura C4 única en la primera versión del lote piloto (`619ad67`), luego dividida | Es la entrada cuya inclusión o exclusión del universo pendiente cambia el resultado entre 33 y 35 | No permite afirmar que "ya fue revisado hacia C4" en sentido de clasificación — fue revisado y quedó sin clasificar |
| `handlerlangebarbados` | Clasificado, pero hacia C2 principal / C9 secundaria | Etiqueta `postplantacion` y señal léxica presentes, argumento final ajeno a C4 | Es la otra entrada que decide la diferencia entre 33 y 35 | La etiqueta heredada no implica que la obra pertenezca a C4 — es justamente el caso que lo demuestra |

### Tensión académica

La pregunta no es aritmética, es de criterio: si una entrada "revisada pero no clasificada hacia ninguna corriente" (como `mintz`) debe contarse como "ya atendida" (fuera del universo pendiente, cifra 33) o como "todavía sin resolver" (dentro del universo pendiente, cifra 35). El expediente eligió la primera lectura sin declararla como una elección, presentándola como si derivara directamente de su propio apartado 8 — que en realidad no la sostiene.

### Lo que el expediente NO permite decidir automáticamente

No decide, porque no lo declara como pregunta, si `mintz` (y por extensión, cualquier entrada futura con revisión sin clasificación) cuenta como leída o como pendiente. Tampoco decide, porque no lo advierte, que su propia cifra de 33 depende de una definición de "ya en lote" más amplia que la que su apartado 8 documenta explícitamente.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 6 — Cuatro casos deliberados

### Pregunta reservada a la Dirección Académica

¿Deben leerse `perezmorales`, `sherwood`, `exceptviolence` y `jaffeconcrete` contra C4, contra C2, contra ambas, o contra otra corriente?

### Evidencia verificada

`documentos/decisiones-pendientes.md`, apartado 1, releído ahora completo: estas cinco entradas (las cuatro más `esquiva`, ya resuelta) quedaron sin candidatura derivable cuando `capitalismo_racial` y `violencias` —las dos etiquetas que las cuatro comparten en la taxonomía anterior— se convirtieron en marcas transversales en vez de corrientes. El documento aclara que son corpus heredado, no siembra, que su proceso es reclasificación y que requieren "lectura del texto para asignarles corriente principal", y se niega explícitamente a proponer destino "porque cualquier propuesta mía se apoyaría en el título".

### Casos relevantes

| id | Etiquetas (`f`) | `ap` | Territorio (`l` / `tr`) | Razón de entrada al conjunto F | Posibles fronteras que obligan a leerlos |
|---|---|---|---|---|---|
| `perezmorales` | violencias, capitalismo_racial | «El puerto como zona de fuga, contrabando y violencia imperial, no solo de comercio» | cartagena / hispano (Colombia) | Solo tenía violencias + capitalismo_racial en la taxonomía anterior | El `ap` menciona "fuga" — posible cruce con C3; el escenario portuario y "no solo de comercio" podría leerse contra C2 o C4 |
| `sherwood` | capitalismo_racial, violencias | «La trata sobrevive a su abolición formal; el capital racializado como continuidad» | jamaica / anglófono (R.U.) | Ídem | El `ap` nombra explícitamente "sobrevive a su abolición formal" — coincide en estructura con la relación C2→C4 (núcleo esclavista con persistencia posterior) documentada en la decisión 2 |
| `exceptviolence` | violencias, capitalismo_racial | «La violencia jamaicana funciona como forma de ciudadanía producida por la historia transnacional de la isla, no como excepción ni patología individual» | jamaica / anglófono (Jamaica/EE.UU.) | Ídem | No hay término léxico de plantación, trabajo o desposesión en el `ap`; la conexión con C4 no es evidente sin leer el texto completo |
| `jaffeconcrete` | capitalismo_racial, violencias | «La contaminación urbana —refinerías, basura, aguas negras— leída como política de la diferencia racial y de clase en dos ciudades caribeñas, no como simple falla de infraestructura» | curazao / neerlandés-anglófono (Curazao/Jamaica) | Ídem | Temática de contaminación urbana y diferencia racial podría leerse contra C4 (desposesión urbana, guion vigente) o contra C6 (`huracanes_ecologias_materialidades_vivas`); además conecta con la pregunta abierta sobre el Caribe neerlandófono (decisión 8) |

### Tensión académica

Los cuatro `ap` son descripciones breves; ninguno usa vocabulario de "plantación", "postplantación" o "trabajo" en el sentido técnico del guion de C4. Su inclusión en el universo de lectura de C4 depende del razonamiento por analogía estructural (persistencia tras abolición formal, en el caso de `sherwood`) o por tema conexo (desposesión urbana, en el caso de `jaffeconcrete`), no de una coincidencia léxica o de etiqueta directa.

### Lo que el expediente NO permite decidir automáticamente

El `ap` es una descripción breve, no la lectura del texto completo. `decisiones-pendientes.md` es explícito: "cualquier propuesta mía se apoyaría en el título, y eso es precisamente lo que la regla... prohíbe". Esta ficha no asigna corriente a ninguno de los cuatro casos ni propone cuál leer primero.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 7 — Fenómenos

### Pregunta reservada a la Dirección Académica

¿Qué significado académico tiene, si alguno, que C4 tenga más fenómenos compatibles que las tres anteriores?

### Evidencia verificada

Vuelto a contar ahora, por script, sobre `catalogo-fenomenos.json`, campo `corrientes` (nombre real del campo — no `corrientes_compatibles`) de cada fenómeno:

- C1 (`invasiones_mundos_indigenas`): **5** — `silencio_de_archivo`, `critica_del_saber_colonial`, `ecologia_colonial`, `mundos_indigenas_precoloniales`, `indigeneidad_en_disputa`
- C2 (`trata_esclavizacion_plantacion`): **3** — `silencio_de_archivo`, `plantacion_y_secuela`, `segmentacion_racial_del_trabajo`
- C3 (`fugas_cimarronajes_emancipaciones`): **4** — `cimarronaje_territorial`, `etnogenesis`, `contraplantacion`, `independencia_y_conflicto_regional`
- C4 (`postplantacion_trabajo_desposesion`): **7** — `contraplantacion`, `deuda_como_tecnologia_colonial`, `plantacion_y_secuela`, `indentura_y_trabajo_importado`, `enclave_y_extractivismo`, `segmentacion_racial_del_trabajo`, `turismo_y_economia_de_la_mirada`

Las cuatro cifras coinciden exactamente con las del expediente. El catálogo de fenómenos se declara a sí mismo «borrador para dictamen académico; no se ha aplicado al corpus publicado».

### Casos relevantes

No aplica una tabla de obras individuales — la evidencia de esta decisión es de estructura de catálogo, no de casos clasificados. Se advierte que `silencio_de_archivo` es compartido por C1 y C2 (un fenómeno puede pertenecer a más de una corriente), lo que ya reduce el valor de una comparación de conteos brutos entre corrientes.

### Tensión académica

Un número más alto de fenómenos compatibles puede reflejar mayor amplitud temática real de C4, o puede reflejar simplemente que quien redactó el catálogo de fenómenos (todavía en borrador, sin aplicar al corpus publicado) trabajó con más detalle sobre C4 que sobre C1, C2 o C3. Ninguna de las dos explicaciones se puede descartar con la evidencia disponible.

### Lo que el expediente NO permite decidir automáticamente

El conteo (7 frente a 5, 3 y 4) es un hecho verificado. Su significado —si alguno— no lo es: no hay en el repositorio ninguna declaración editorial sobre qué implica, si algo, que una corriente tenga más fenómenos catalogados que otra.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 8 — Siembra dirigida

### Pregunta reservada a la Dirección Académica

¿Existe evidencia suficiente para autorizar siembra dirigida y bajo qué criterio?

### Evidencia verificada

Se distinguen cuatro vacíos que no son lo mismo, y se verifica cada uno por separado:

1. **Vacío en las 29 clasificaciones actuales de C4**: no aplica — hay 29 obras clasificadas, no es un conjunto vacío.
2. **Vacío en el corpus completo (232 obras)**: se buscó, ahora, por coincidencia de subcadena en los campos `tr`, `t` y `l`, cualquier entrada con relación al Caribe neerlandófono (`neerland`, `curazao`/`curaçao`, `surinam`, `aruba`, `bonaire`, `dutch`). Resultado: **15 entradas**, no cero. No hay vacío en el corpus.
3. **Vacío en el universo pendiente de lectura**: de las 15 entradas neerlandófonas, dos (`jaffeconcrete`, ya en el conjunto F; `allen_dikimanera` y `hoeftesuriname`, ambas con etiqueta `postplantacion` y por tanto en el conjunto A) están dentro del universo pendiente calculado en la decisión 5. No hay vacío en el universo pendiente tampoco.
4. **Vacío historiográfico real** (ausencia de investigación académica sobre el Caribe neerlandófono en general): esto no puede verificarse desde este repositorio — requeriría una revisión bibliográfica externa, no una consulta de datos.

### Casos relevantes

| id | Etiquetas (`f`) | Territorio (`l` / `tr`) | Relación con C4 |
|---|---|---|---|
| `hoeftesuriname` | postplantacion, soberanias | suriname / neerlandés (Países Bajos/Surinam) | En conjunto A, dentro del universo pendiente |
| `allen_dikimanera` | postplantacion, memoria | curazao / neerlandófono (Curazao) | En conjunto A, dentro del universo pendiente |
| `jaffeconcrete` | capitalismo_racial, violencias | curazao / neerlandés-anglófono (Curazao/Jamaica) | En conjunto F, dentro del universo pendiente (decisión 6) |
| `tambu`, `vanderpijl_equaliberty`, `oostindiedecolonising`, `kloosterrealm` | memoria/creolizacion, soberanias/colonialidad | curazao | Ninguna con etiqueta `postplantacion`; no están en el universo pendiente calculado para C4 salvo revisión adicional |
| `price`, `pricefirst`, `rebeldestiny`, `travelstooy`, `alabi`, `rainforestwarriors`, `mintzpricebirth` | cimarronaje/memoria/soberanias | suriname | Ninguna con etiqueta `postplantacion`; territorio neerlandófono pero temática de cimarronaje, más cercana a C3 |
| `kingisland` | cuerpo_erotica, creolizacion | trinidad (comparado, incluye neerlandés) | Territorio solo parcialmente neerlandófono |

### Tensión académica

Hay 15 entradas con relación al Caribe neerlandófono en el corpus, pero solo tres tocan directamente el universo pendiente de C4 (`hoeftesuriname`, `allen_dikimanera`, `jaffeconcrete`), y ninguna ha sido leída todavía para C4 específicamente. Esto significa que la ausencia percibida no es una ausencia de datos, sino una ausencia de lectura — un dato distinto al que "vacío" sugiere de forma natural.

### Lo que el expediente NO permite decidir automáticamente

No hay ninguna evidencia, en este repositorio, de un vacío historiográfico real (el cuarto tipo). Lo que sí hay es un universo de tres casos sin leer, dentro de un conjunto pendiente cuya propia cifra (33 o 35) sigue sin resolverse (decisión 5). Autorizar siembra antes de leer estos tres casos adelantaría una conclusión sobre un vacío que la evidencia disponible no sostiene todavía.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 9 — Historial de C1

### Pregunta reservada a la Dirección Académica

¿El dictamen de C4 debe pronunciarse sobre el historial terminológico de C1 o debe excluirlo por corresponder al proceso cerrado de C1?

### Evidencia verificada

Vuelto a consultar ahora, con `git show <commit>:<ruta>` sobre las cinco versiones de `catalogos-atlas-2.json`, el campo `label` de C1 (`invasiones_mundos_indigenas`):

| Versión | Commit | `label` |
|:---:|:---:|---|
| 1 | `619ad67` | Invasiones, colonialidades y mundos indígenas |
| 2 | `99aec5b` | Invasiones, colonialidades y mundos indígenas (sin cambio) |
| 3 | `2343008` | Invasiones, colonialidades y mundos indígenas (sin cambio) |
| 4 | `d3b15a7` | Invasiones y mundos indígenas (cambio 1: retira «colonialidades») |
| 5 | `16fc252` | Invasiones, despojos y mundos indígenas (cambio 2: agrega «despojos») |

Confirmado: cinco versiones de archivo, **tres redacciones textuales distintas**, **dos cambios** (transiciones v3→v4 y v4→v5).

### Casos relevantes

No aplica tabla de obras — es evidencia de catálogo, ya cubierta en la tabla anterior.

### Tensión académica

C1 ya tiene un dictamen académico propio, ya publicado (`dictamen-academico-c1.md`, commit `7c1ae81`). Que el historial de C1 se mencione en el expediente de C4 (para desambiguar una cifra que el borrador retirado de C4 había citado mal) no significa que el dictamen de C4 tenga competencia sobre el proceso de C1.

### Lo que el expediente NO permite decidir automáticamente

La pregunta es de alcance institucional (qué le corresponde pronunciarse a cada dictamen), no de hecho verificable. El hecho verificado (tres redacciones, dos cambios) es el mismo sea cual sea la respuesta.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Nota de método

Cinco identificadores fuera de la lista original del punto 3 de la instrucción (`williamscapitalismo`, `steward`, `bourgoisethnicity`, `alvarezboro`, `handlerlangebarbados`) se verificaron junto con `naveda_esclavoscordoba`, `hall_slavesocietydanish`, `morenofraginals`, `figueroa`, `klein_battleparadise`, `downtownladies`, `floresvillalobos`, `reddock`, `shepherdmaharani`, `harpellecostarica`, `shellerconsuming` y `esquiva` — todos los casos citados en las nueve decisiones, no solo los listados explícitamente en la instrucción, para que ninguna afirmación de esta ficha dependiera de un caso no comprobado directamente contra su archivo de lote.
