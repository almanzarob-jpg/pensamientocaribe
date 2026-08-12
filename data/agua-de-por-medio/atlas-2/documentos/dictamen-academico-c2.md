# Dictamen académico de C2

**Trata, esclavización y plantación**

Dirección académica de Pensamiento Caribe · 12 de agosto de 2026
Rama `feat/atlas-2-etapa-1-integrada` · corpus `datos-atlas.json` v1.16.1
Catálogo vigente al momento del dictamen: `catalogos-atlas-2.json`, esquema `2.0-lotes.2`

Este documento registra un dictamen ya emitido. No modifica el catálogo, los lotes, el corpus, la interfaz, el dictamen de C1 ni el documento de arquitectura integrada.

**Este dictamen no crea clasificaciones nuevas. Ratifica cinco clasificaciones principales y seis secundarias ya presentes en lotes cerrados, sin modificar esos lotes.**

**Estado de las denominaciones citadas.** C1 y C2 son, hasta este momento, las dos únicas denominaciones ratificadas. Cada vez que este documento nombra C3, C4, C6 o C9 —en las tablas de clasificaciones secundarias, en las fronteras o en el registro de fenómenos— lo hace con su **denominación provisional**, sujeta a su dictamen específico. Las claves técnicas no cambian y las clasificaciones existentes tampoco: lo provisional es el nombre, no la asignación.

---

## 1. La denominación ratificada

| | |
|---|---|
| **Denominación conceptual (ES)** | **Trata, esclavización y plantación** |
| **Denominación conceptual (EN)** | **Slave trade, enslavement and plantation** |
| **Clave técnica** | `trata_esclavizacion_plantacion` — permanece sin cambio |
| **Estado** | Ratificada |

**Historial de renombramiento: ninguno.** A diferencia de C1, que cambió de redacción tres veces entre el 7 y el 12 de agosto, y de C9, cuya denominación sigue en conflicto documental, C2 conserva la redacción del catálogo inicial del 7 de agosto.

**Fundamento de la ratificación.** La denominación nombra deliberadamente el aparato histórico y económico que organiza esta corriente. Esto no convierte a las personas esclavizadas en sujetos pasivos dentro del guion ni obliga a trasladar toda forma de agencia a C3; el guion del apartado 6 resuelve esa cuestión sin tocar el título.

**Lectura cronológica del par `plantación` / `postplantación`.** Queda registrada como observación pendiente. **No se resolverá modificando C2 antes del dictamen específico de C4**, porque cualquier ajuste de una de las dos denominaciones sin la otra desplazaría el problema en vez de resolverlo.

---

## 2. Vía de constitución

**Formulación aprobada:** C2 se constituye mediante **relectura dirigida del corpus heredado, ya iniciada y dictaminada, y siembra bibliográfica complementaria orientada por vacíos**.

La diferencia con C1 es sustantiva y conviene dejarla escrita. En C1 la relectura dirigida era una vía por abrir; en C2 la relectura ya se ejecutó, se dictaminó el 8 de agosto y consta en los lotes cerrados. Lo que este dictamen hace con ella es ratificarla, no autorizarla.

Consecuencias operativas:

- Cero candidaturas automáticas derivadas de la taxonomía heredada.
- Cinco clasificaciones principales confirmadas.
- Seis clasificaciones secundarias confirmadas.
- Treinta y cuatro entradas pendientes de relectura.
- Ninguna asignación por coincidencia léxica.
- Ninguna obligación de equilibrar numéricamente la corriente.
- Siembra posterior únicamente cuando la relectura permita identificar vacíos territoriales, lingüísticos, temporales, disciplinares o temáticos.

### 2.1 Evidencia de las cero candidaturas automáticas

El corpus heredado clasifica cada obra mediante el campo `f`, de un catálogo cerrado de diez etiquetas. Recuento exacto sobre las 232 entradas de la v1.16.1, leído de `datos-atlas.json`:

| Etiqueta heredada | Entradas | Cobertura |
|---|---:|---:|
| `memoria` | 93 | 40 % |
| `colonialidad` | 77 | 33 % |
| `soberanias` | 62 | 27 % |
| `capitalismo_racial` | 52 | 22 % |
| `creolizacion` | 51 | 22 % |
| `violencias` | 36 | 16 % |
| `postplantacion` | 34 | 15 % |
| `cuerpo_erotica` | 29 | 12 % |
| `cimarronaje` | 26 | 11 % |
| `catastrofes` | 16 | 7 % |

Ninguna nombra la trata, la esclavización ni el régimen plantacionario esclavista.

La etiqueta heredada `postplantacion` conduce operativamente a C4, pero no porque establezca una frontera cronológica universal. C4 organiza obras cuyo argumento central aborda persistencias y reconfiguraciones de las lógicas plantacionarias en otros regímenes laborales y territoriales. La derivación de esa etiqueta no permite producir automáticamente una candidatura para C2.

La regla de migración deriva una candidatura preliminar solo cuando una etiqueta anterior conduce sin ambigüedad a una corriente nueva; como ninguna conduce a C2, **el número de candidaturas derivables automáticamente para C2 es cero**, sobre las 232 entradas.

**Comprobación adicional en los lotes.** Los lotes cerrados tienen **cuatro** archivos de resultado generado:

```
data/agua-de-por-medio/atlas-2/piloto-generado.json
data/agua-de-por-medio/atlas-2/lotes/s01-generado.json
data/agua-de-por-medio/atlas-2/lotes/a01-generado.json
data/agua-de-por-medio/atlas-2/lotes/a02-generado.json
```

En esos cuatro archivos existe un único campo de candidatura derivada, `corrientes_candidatas`, y pertenece a la entrada `gudynas`, con valor `["huracanes_ecologias_materialidades_vivas"]`. No apunta a C2.

*Corrección respecto de la primera redacción de este dictamen, que hablaba de cinco archivos.* El directorio `lotes/` contiene cinco archivos más —`s01-config.json`, `a01-config.json`, `a02-config.json`, `f01-muestra.json` y `tp01-temporalidad.json`—, pero ninguno es resultado generado de los cuatro lotes cerrados: los tres primeros son configuraciones de entrada y los dos últimos pertenecen a lotes distintos y sin dictamen. La comprobación se hizo sobre los cuatro generados.

*Nota sobre los recuentos.* Estas cifras difieren en una unidad de las que circulan en `fenomenos-ampliacion.md` para `capitalismo_racial` (53) y `postplantacion` (35), porque aquel documento se escribió contra la v1.15.0, de 233 entradas, antes de la fusión de `steward` y `stewardpuertorico`. La diferencia es la entrada retirada por esa fusión, no una corrección de contenido.

---

## 3. Clasificaciones ratificadas

Las once entradas de este apartado ya constan en los lotes cerrados, con estado `confirmada`, responsable «Dirección académica de Pensamiento Caribe» y fecha 2026-08-08. **Este dictamen las registra y ratifica; no modifica los lotes.**

No requieren una segunda lectura obligatoria para conservar su estado. Podrán revisarse posteriormente si aparece evidencia nueva, como cualquier clasificación confirmada.

### 3.1 Cinco clasificaciones principales

| Lote | id | Obra | Etiquetas heredadas de origen | Fundamento registrado |
|---|---|---|---|---|
| P00 | `williamscapitalismo` | *Capitalismo y esclavitud* — Eric Williams | capitalismo_racial, postplantacion, colonialidad | «El libro sitúa la trata y la esclavización antillana en la formación del capitalismo británico y discute la abolición desde la transformación económica» |
| A01 | `hall_slavesocietydanish` | *Slave Society in the Danish West Indies: St. Thomas, St. John and St. Croix* | violencias, cimarronaje | «El libro define la esclavitud como fundamento de toda la sociedad colonial; rebeliones y emancipación son capítulos de esa arquitectura, no el principio ordenador» |
| A01 | `morenofraginals` | *El ingenio: complejo económico social cubano del azúcar* | capitalismo_racial, postplantacion | «El objeto es el complejo azucarero esclavista; postplantación describe mejor la persistencia posterior que el núcleo histórico del libro» |
| A02 | `handlerlangebarbados` | *Plantation Slavery in Barbados: An Archaeological and Historical Investigation* | postplantacion, violencias | «El régimen esclavista de plantación y su cultura material organizan la obra; memoria, entierro y archivo material sostienen una secundaria C9» |
| S01 | `naveda_esclavoscordoba` | *Esclavos negros en las haciendas azucareras de Córdoba, Veracruz, 1690-1830* | postplantacion, violencias | «El estudio se organiza alrededor de la esclavitud negra y el sistema azucarero de Córdoba durante los siglos XVII a XIX; la postplantación queda como persistencia secundaria» |

Las cinco proceden del corpus heredado y llegaron por reclasificación. Sus etiquetas de origen son `capitalismo_racial`, `postplantacion`, `violencias`, `colonialidad` y `cimarronaje`: ninguna nombra a C2, y las cinco clasificaciones se sostienen exclusivamente en el argumento de cada obra.

### 3.2 Seis clasificaciones secundarias

| Lote | id | Obra | Corriente principal confirmada | Etiquetas heredadas |
|---|---|---|---|---|
| A01 | `fuentesdispossessed` | *Dispossessed Lives: Enslaved Women, Violence, and the Archive* | C9 · archivos vivos | violencias, cuerpo_erotica |
| A01 | `helgnuncamas` | *¡Nunca más esclavos!* | C3 · fugas, cimarronajes y emancipaciones | cimarronaje, violencias |
| A01 | `tackysrevolt` | *Tacky's Revolt: The Story of an Atlantic Slave War* | C3 · fugas, cimarronajes y emancipaciones | cimarronaje, violencias |
| A02 | `workercane` | *Worker in the Cane: A Puerto Rican Life History* | C4 · postplantación | postplantacion, capitalismo_racial |
| A02 | `goffedarklab` | *Dark Laboratory* | C6 · huracanes y ecologías | catastrofes, capitalismo_racial |
| A02 | `brownreaper` | *The Reaper's Garden: Death and Power in the World of Atlantic Slavery* | C9 · archivos vivos | catastrofes, violencias |

Estas seis documentan el criterio por su reverso: la presencia masiva de la esclavitud en una obra no basta para clasificarla en C2. *Tacky's Revolt* narra una guerra de esclavizados y su principal es C3, porque el argumento es la insurgencia. *The Reaper's Garden* trata de la muerte en el mundo de la esclavitud atlántica y su principal es C9, porque el argumento es lo que se hace con los muertos. La corriente secundaria registra esa segunda pertenencia sin falsear la primera.

### 3.3 Un caso que el método léxico no habría encontrado

De las once entradas ratificadas, **diez disparan el patrón léxico de C2 y una no**: `goffedarklab`. Su título —*Dark Laboratory: On Columbus, the Caribbean, and the Origins of the Climate Crisis*— y su campo `ap` hablan de 1492, de negritud, de indentura asiática y de crisis climática, sin usar ninguna de las palabras del patrón. La secundaria C2 se le asignó por lectura, no por coincidencia de términos.

El dato importa porque invierte la advertencia habitual. Sabíamos que **señal no implica pertinencia**; este caso muestra que **pertinencia no implica señal**. Un universo construido por patrón léxico es una ayuda para ordenar la lectura, nunca su sustituto, y su punto ciego no es solo el falso positivo: también el silencio.

Consecuencia para el conteo del apartado 4: `goffedarklab` está ratificada como secundaria de C2 y sin embargo **no forma parte de las 52 señales**, porque el patrón no la detecta.

---

## 4. Universo de relectura: 34 entradas

### 4.1 Los cuatro registros, que no deben confundirse

Se mantiene la distinción fijada en el dictamen de C1. Los dos primeros describen **cómo llegó** una obra a la mesa de trabajo; los dos últimos son **estados editoriales formales**.

| Registro | Qué es | Qué autoriza | Qué no autoriza |
|---|---|---|---|
| **Señal léxica** | Coincidencia de patrón en título, autoría o campo `ap` | Justifica lectura | Ninguna afirmación sobre el argumento de la obra |
| **Ancla** | Asociación editorial previa con un fenómeno, con fundamento escrito | Justifica prioridad | No confirma fenómeno ni corriente |
| **Candidatura preliminar** | Hipótesis registrada | Escribirse como candidata | Prohíbe declarar corriente confirmada |
| **Clasificación confirmada** | Decisión humana con responsable, fecha y fundamento | Escribirse como corriente | Exige procedencia verificada |

**Las 34 entradas no se convierten por este dictamen en candidaturas.** Son señal, y nada más.

### 4.2 Regla de conteo, declarada

Patrón aplicado a los campos `t`, `a` y `ap` de las 232 entradas, derivado de la definición de C2: trata, slave trade, negrero, middle passage, esclav·, enslav·, slave/slavery, chattel, plantación/plantation/plantador, ingenio, barracón, azúcar/sugar/cañaveral, hacienda azucarera, abolición/abolition.

Resultado: **52 entradas con señal**, de las cuales **18 ya están en lotes cerrados** y **34 no**. Estas 34 forman el universo de relectura.

### 4.3 Trazabilidad completa de las 52 señales

```
52 señales = 18 entradas ya revisadas en lote + 34 pendientes de relectura

18 revisadas = 5 principales C2 + 5 secundarias C2 + 8 revisadas sin rol C2
```

**El reparto de las 18 no es 5 + 6 + 7, sino 5 + 5 + 8.** La razón es la del apartado 3.3: las clasificaciones C2 ratificadas son once, pero solo diez tienen señal léxica. `goffedarklab`, secundaria de C2, queda fuera de las 52 y por tanto fuera de este reparto. Sumando fuera del universo léxico:

```
11 clasificaciones C2 ratificadas = 10 con señal + 1 sin señal (goffedarklab)
```

### 4.4 Las ocho entradas revisadas con señal de C2 y sin rol de C2

Ninguna se reclasifica. Los fundamentos son literales de los lotes; donde el lote no registra por qué C2 no fue incluida, se dice expresamente.

| id | Obra | Lote | Señal | Resultado editorial y corriente principal (denominación provisional salvo C1 y C2) | Situación de C2 | Fundamento registrado en el lote | Por qué no está entre las 34 |
|---|---|---|---|---|---|---|---|
| `bourgoisethnicity` | *Ethnicity at Work: Divided Labor on a Central American Banana Plantation* | P00 | plantación, plantation | C4 · postplantación, trabajo y desposesión | Omitida: no se declara ninguna secundaria | «La obra muestra cómo una empresa bananera transnacional organiza la división étnica del trabajo y reproduce jerarquías raciales y de clase en Costa Rica y Panamá» | Ya revisada y confirmada en lote P00 |
| `mintz` | *Caribbean Transformations / Sweetness and Power* | P00 | plantación | **Ninguna**: estado `pendiente_revision_con_texto` | Omitida: no se confirma ninguna corriente | «El nodo reúne dos obras con argumentos diferentes; no se confirma una corriente única hasta revisar cada componente» | Ya revisada en lote P00, con dictamen de mantener pendiente |
| `benitez` | *La isla que se repite / The Repeating Island* | S01 | plantación | C8 · creolizaciones, traducciones y opacidades | Omitida: la secundaria declarada es C4 | «La isla que se repite y The Repeating Island son la obra original y su traducción inglesa, no dos obras independientes» — el fundamento resuelve la cuestión de la entrada compuesta, no la elección de corriente | Ya revisada y confirmada en lote S01 |
| `bestlevitt` | *Essays on the Theory of Plantation Economy* | A01 | plantación, plantation | C4 · postplantación, trabajo y desposesión | Omitida: las secundarias declaradas son C7 | «La economía de plantación se teoriza como estructura persistente de dependencia; subordinación metropolitana y soberanía económica son secundarias» | Ya revisada y confirmada en lote A01 |
| `kempadoo` | *Sexing the Caribbean: Gender, Race and Sexual Labor* | A01 | esclav | C10 · cuerpos, parentescos y eróticas | Omitida: la secundaria declarada es C4 | «Género, raza y trabajo sexual se estudian desde cuerpos y relaciones eróticas racializadas; turismo y mercado quedan como dimensión económica» | Ya revisada y confirmada en lote A01 |
| `kutzinskisugar` | *Sugar's Secrets: Race and the Erotics of Cuban Nationalism* | A01 | sugar | C10 · cuerpos, parentescos y eróticas | Omitida: la secundaria declarada es C7 | «La figura erótica racializada organiza la crítica del nacionalismo cubano; nación y soberanía son la dimensión secundaria» | Ya revisada y confirmada en lote A01 |
| `shellerconsuming` | *Consuming the Caribbean: From Arawaks to Zombies* | A01 | azúcar, esclav, plantación | C4 · postplantación, trabajo y desposesión | Omitida: las secundarias declaradas son C5 y C8 | «La explotación colonial persiste en consumo, turismo y conocimiento; movilidades y discursos de creolización son secundarios» | Ya revisada y confirmada en lote A01 |
| `politicallife` | *Political Life in the Wake of the Plantation: Sovereignty, Witnessing, Repair* | A02 | plantación, plantation | C4 · postplantación, trabajo y desposesión | Omitida: las secundarias declaradas son C7 y C9 | «Las lógicas postplantación articulan trabajo, ciudadanía y violencia estatal; soberanía y memoria de la incursión son secundarias sustantivas» | Ya revisada y confirmada en lote A02 |

**Advertencia sobre la columna «situación de C2».** En las ocho entradas, la clave `trata_esclavizacion_plantacion` no aparece en ningún punto del registro de migración. Por tanto, no existe constancia de que C2 haya sido considerada y descartada.

En siete entradas, el lote confirma otra corriente principal, pero no conserva una justificación explícita de por qué C2 no fue incluida. En `mintz`, el lote mantiene la entrada en `pendiente_revision_con_texto` y tampoco registra una evaluación específica de C2.

La columna dice «omitida» y no «descartada» justamente por eso. En siete casos, los fundamentos citados explican por qué la corriente principal elegida es la correcta; en `mintz`, explican por qué no puede confirmarse todavía una corriente única. Ninguno de esos fundamentos explica específicamente por qué C2 no figura como principal o secundaria.

**Un patrón que conviene registrar.** Seis de las ocho llevan `postplantacion` entre sus etiquetas heredadas y cuatro terminaron confirmadas en C4. La señal que las trajo a esta lista fue casi siempre la palabra «plantación» dentro de un argumento que trata de su persistencia, no de su régimen esclavista. Es la frontera C2/C4 funcionando como debe: la palabra es la misma, el argumento no.

**Ninguna de estas ocho entradas se reclasifica por este dictamen.**

### 4.5 Las 34 entradas pendientes de relectura

| id | Obra | Año | Etiquetas heredadas | Señal |
|---|---|---|---|---|
| `rediker` | *Barco de esclavos: una historia humana* | 2007 | violencias, memoria | esclav, negrero |
| `araujo` | *Reparations for Slavery and the Slave Trade* | 2017 | capitalismo_racial, memoria | esclav, slave trade, slavery |
| `sherwood` | *After Abolition: Britain and the Slave Trade* | 2007 | capitalismo_racial, violencias | abolición, abolition, slave trade, trata |
| `becklessavingsouls` | *Saving Souls: The Struggle to End the Transatlantic Trade in Africans* | 2013 | capitalismo_racial, memoria | abolición, trata |
| `olsencartagena` | *Slavery and Salvation in Colonial Cartagena de Indias* | 2004 | colonialidad, violencias, memoria | esclav, negrero, slavery |
| `hallafricanslouisiana` | *Africans in Colonial Louisiana* | 1992 | creolizacion, postplantacion | esclav |
| `ferrerfreedomsmirror` | *Freedom's Mirror: Cuba and Haiti in the Age of Revolution* | 2014 | colonialidad, cimarronaje | azúcar, esclav |
| `kalefragments` | *Fragments of Empire: Capital, Slavery, and Indian Indentured Labor* | 1998 | capitalismo_racial, colonialidad | esclav, slavery |
| `meniketinevis` | *Sugar Cane Capitalism and Environmental Transformation* | 2015 | postplantacion, catastrofes | azúcar, sugar |
| `bahadurcoolie` | *Coolie Woman: The Odyssey of Indenture* | 2013 | postplantacion, cuerpo_erotica, violencias | plantación |
| `mintzarea` | *El Caribe como área sociocultural* | 1966 | postplantacion, colonialidad | esclav, plantación |
| `brereton_racerelationstrinidad` | *Race Relations in Colonial Trinidad, 1870-1900* | 1979 | postplantacion, colonialidad | ancla de `plantacion_y_secuela` |
| `fischer` | *Modernity Disavowed: Haiti and the Cultures of Slavery* | 2004 | memoria, colonialidad | slavery |
| `pardomosquerahoffmann` | *Afrodescendientes en las Américas… 150 años de la abolición* | 2002 | memoria, capitalismo_racial | abolición, esclav |
| `goldbergabolition` | *Abolition Time: Grammars of Law, Poetics of Justice* | 2024 | violencias, memoria | abolición, abolition |
| `headleyreparaciones` | *A Philosophical Investigation… Reparations* | 2026 | capitalismo_racial, memoria | esclav, slavery |
| `zambrana` | *Colonial Debts: The Case of Puerto Rico* | 2021 | colonialidad, capitalismo_racial | plantación |
| `casimir` | *The Haitians: A Decolonial History* | 2020 | postplantacion, colonialidad | plantación |
| `bollandbelize` | *The Formation of a Colonial Society: Belize* | 1977 | colonialidad, postplantacion | esclav |
| `johnsonbelize` | *Becoming Creole: Nature and Race in Belize* | 2019 | creolizacion, colonialidad | esclav |
| `helglibertyequality` | *Liberty and Equality in Caribbean Colombia, 1770-1835* | 2004 | soberanias, colonialidad | esclav |
| `allen_dikimanera` | *Di ki manera? A Social History of Afro-Curaçaoans, 1863-1917* | 2007 | postplantacion, memoria | abolición |
| `besson` | *Martha Brae's Two Histories* | 2002 | postplantacion, soberanias | plantación |
| `roberts` | *Freedom as Marronage* | 2015 | cimarronaje, soberanias | esclav |
| `sharpewake` | *In the Wake: On Blackness and Being* | 2016 | memoria, violencias | negrero |
| `ferdinand` | *Une écologie décoloniale* | 2019 | catastrofes, colonialidad | negrero |
| `mcneillmosquito` | *Mosquito Empires* | 2010 | catastrofes, colonialidad | esclav |
| `islandfutures` | *Island Futures: Caribbean Survival in the Anthropocene* | 2020 | catastrofes, colonialidad | plantación |
| `mitchellalibi` | *The Alibi of Capital* | 2026 | capitalismo_racial, colonialidad | azúcar, plantación |
| `wynterblackmetamorphosis` | *Black Metamorphosis: New Natives in a New World* | c. 1970 | creolizacion, capitalismo_racial, memoria | esclav |
| `rtsmithmatrifocal` | *The Matrifocal Family* | 1996 | cuerpo_erotica, creolizacion | esclav |
| `shellererotic` | *Citizenship from Below* | 2012 | cuerpo_erotica, soberanias | esclav |
| `sangbenvolviendo` | *Volviendo al Caribe* | 2020 | postplantacion, soberanias | plantación |
| `zonabananera` | *Las geografías negras en la Zona Bananera* | 2026 | capitalismo_racial, memoria | plantación |
| `reysinningcristorey` | *Cristo Rey, un espacio para permanecer en el tiempo* | 1998 | memoria, colonialidad | plantación |

### 4.6 Las cinco entradas sin candidatura derivable

`decisiones-pendientes.md`, punto 1, registra cinco entradas que quedaron sin candidatura derivable al convertirse `capitalismo_racial` y `violencias` en marcas transversales: `perezmorales`, `sherwood`, `esquiva`, `exceptviolence` y `jaffeconcrete`.

**Deben revisarse contra C2 y contra las demás corrientes compatibles.** La prioridad inicial es:

> `sherwood` · *After Abolition: Britain and the Slave Trade*

Es la entrada con la señal de C2 más fuerte de las 34: cuatro disparadores distintos, incluidos «slave trade» y «trata» en el propio título. **La fuerza de su señal no sustituye la lectura.**

---

## 5. Catálogo de fenómenos: compatibilidad y condición provisional

`catalogo-fenomenos.json` declara tres fenómenos con `trata_esclavizacion_plantacion` entre sus corrientes compatibles. **El catálogo continúa en estado de borrador para dictamen académico. Una ancla o una compatibilidad declarada no confirma por sí sola ninguna corriente.**

| Fenómeno | Familia | Corrientes compatibles | Registro de este dictamen |
|---|---|---|---|
| `plantacion_y_secuela` | `trabajo` | C2, C4 | **Especialmente relevante para examinar la frontera C2/C4.** Es el único de los tres cuyas anclas ya validaron el vínculo con C2 por dictamen: `williamscapitalismo` y `morenofraginals` están confirmadas en C2; `mintzarea` y `brereton_racerelationstrinidad` siguen sin lote |
| `segmentacion_racial_del_trabajo` | `trabajo` | C4, C2 | **Su compatibilidad con C2 no anticipa la corriente principal.** Sus dos anclas ya dictaminadas fueron a otras corrientes: `bourgoisethnicity` a C4 y `harpellecostarica` a C5. `robinsonmarxismo` sigue sin lote |
| `silencio_de_archivo` | `archivo` | C9, C1, C2 | **Vínculo posible, pero más próximo en principio a C9.** Su criterio apunta a la producción del silencio, no a la esclavización. Ninguna de sus cinco anclas ha pasado por lote |

---

## 6. Guion aprobado

Este guion **sustituye** al texto provisional que consta en `etapa-1-arquitectura-integrada.md`. Aquel documento no se modifica: conserva la redacción superada como registro de lo que existió, y este dictamen es desde ahora la autoridad sobre el guion de C2.

> ¿Cómo se construyó y sostuvo el régimen que convirtió personas en propiedad y territorios en espacios de extracción plantacionaria? La corriente sigue la articulación entre trata, esclavización, trabajo forzado y organización racial del espacio, pero también las formas de vida social, parentesco, cultura material y producción de mundos creadas por las personas esclavizadas dentro y contra ese régimen. Su tensión: reconstruir el aparato sin reproducir la mirada de sus administradores ni confundir toda agencia con fuga o insurgencia.

Lo que este guion hace:

- Mantiene como núcleo el régimen esclavista.
- Reconoce a las personas esclavizadas como productoras de relaciones y mundos.
- No reduce la agencia a C3.
- Reserva C3 para obras cuyo argumento central es la fuga, el cimarronaje, la insurgencia o la emancipación.
- Distingue C2 de C4 por el régimen analítico dominante, no por una fecha rígida de abolición.

Con este guion queda resuelta, sin tocar la denominación, la tensión registrada en el expediente de evidencia: que el título nombre solo el aparato no implica que la corriente trate a las personas esclavizadas como objeto.

---

## 7. Fronteras

### 7.1 C2 y C3

| | |
|---|---|
| **C2** | Aparato esclavista y mundos producidos dentro y contra él |
| **C3** | Sustracción, fuga, cimarronaje, insurgencia y emancipación como argumento central |

La distinción no es entre régimen y agencia. Es entre los mundos producidos **dentro y contra** el régimen, que son C2, y la **sustracción** al régimen, que es C3. `tackysrevolt` y `helgnuncamas` son los casos que fijan la frontera desde el lado de C3, con C2 como secundaria.

### 7.2 C2 y C4

| | |
|---|---|
| **C2** | Propiedad sobre personas, trabajo esclavizado y régimen plantacionario esclavista |
| **C4** | Persistencia y reconfiguración posterior de esas lógicas en otros regímenes laborales y territoriales |

**Las temporalidades pueden superponerse. La abolición no funciona como corte universal.** Los fundamentos de `morenofraginals` y `naveda_esclavoscordoba` aplican esta frontera de manera explícita: en ambos casos la postplantación queda como persistencia secundaria y el núcleo esclavista como principal.

### 7.3 C2 y C9

Una obra entra principalmente en C9 cuando su argumento central es el archivo, el silencio, la muerte, la espiritualidad o la transmisión. **C2 puede permanecer como secundaria cuando el mundo esclavista estructura ese problema.** `fuentesdispossessed` y `brownreaper` son los dos casos que fijan esta frontera.

---

## 8. Regla para la siembra futura

**No se exige todavía una lista bibliográfica nueva para C2.**

Primero debe realizarse una muestra de relectura del universo de 34 entradas. Solo después se identificarán vacíos, y solo entonces se autorizará siembra dirigida.

Dimensiones en las que se buscarán vacíos:

| Dimensión | Alcance |
|---|---|
| Lingüística y territorial | Caribe hispano, anglófono, francófono y neerlandófono |
| Circuitos | Trata intraamericana y circuitos no atlánticos |
| Social | Género, reproducción y niñez bajo esclavización |
| Material | Cultura material y arqueología de la esclavitud |
| Comunitaria | Formación de comunidades y parentescos |
| Geográfica | Territorios continentales e insulares |
| Temporal | Siglos y periodos insuficientemente representados |

El orden importa: sembrar antes de leer produciría una corriente cuyos vacíos se definieron por suposición y no por evidencia.

---

## 9. Las siete decisiones de este dictamen

| # | Decisión |
|---|---|
| 1 | **Denominación.** Se ratifica «Trata, esclavización y plantación» / «Slave trade, enslavement and plantation». La clave técnica permanece. La lectura cronológica del par `plantación`/`postplantación` queda registrada y no se resolverá antes del dictamen de C4 |
| 2 | **Vía de constitución.** C2 se constituye mediante relectura dirigida del corpus heredado, ya iniciada y dictaminada, y siembra bibliográfica complementaria orientada por vacíos. Cero candidaturas automáticas |
| 3 | **Clasificaciones ratificadas.** Cinco principales y seis secundarias quedan firmes, sin segunda lectura obligatoria. Los lotes no se modifican |
| 4 | **Universo de relectura.** Se acepta la lista de 34 entradas como universo de trabajo, sin convertirlas en candidaturas. Las cinco entradas sin candidatura derivable se revisan contra C2 y las demás corrientes compatibles, empezando por `sherwood` |
| 5 | **Fenómenos.** Se registra la relevancia de `plantacion_y_secuela` para la frontera C2/C4, la no anticipación de `segmentacion_racial_del_trabajo` y la proximidad de `silencio_de_archivo` a C9. El catálogo sigue en borrador |
| 6 | **Guion.** Se aprueba el texto del apartado 6, que sustituye al provisional del documento de arquitectura integrada |
| 7 | **Fronteras y siembra.** Quedan fijadas las fronteras con C3, C4 y C9, y la regla de que la siembra se autoriza solo después de una muestra de relectura que identifique vacíos |

---

## 10. Alcance y límites de este dictamen

Lo que este dictamen resuelve: la denominación de C2, su guion, su vía de constitución, el estatuto de las once clasificaciones ya presentes en los lotes cerrados, la delimitación de un universo de relectura y las fronteras con C3, C4 y C9.

Lo que deja abierto:

| Cuestión | Estado |
|---|---|
| Las 34 entradas del universo de relectura | Sin leer y sin clasificar. Son señal, no candidatura |
| Las ocho entradas revisadas sin rol de C2 | Siete están confirmadas en otras corrientes y `mintz` permanece en `pendiente_revision_con_texto`. Ninguna se reclasifica ni conserva una justificación explícita de la no inclusión de C2 |
| Las cinco entradas sin candidatura derivable | Pendientes de lectura contra C2 y las demás corrientes compatibles, empezando por `sherwood` |
| La lectura cronológica del par `plantación` / `postplantación` | Registrada, y remitida al dictamen de C4 |
| El catálogo de fenómenos | En borrador para dictamen académico. Ninguna compatibilidad declarada confirma corriente |
| La siembra bibliográfica | No autorizada hasta que una muestra de relectura identifique vacíos |
| La denominación de C3, C4, C6 y C9 | Provisional, pendiente de sus dictámenes respectivos |

Los lotes cerrados no se modifican por efecto de este dictamen. Las clasificaciones que contienen quedan ratificadas en el estado en que ya se encontraban, con la fecha y el responsable con que fueron dictaminadas el 8 de agosto de 2026.
