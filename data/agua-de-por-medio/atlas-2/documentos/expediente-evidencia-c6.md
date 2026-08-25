# Expediente de evidencia de C6

## Huracanes, ecologías y materialidades vivas

Rama `feat/atlas-2-etapa-1-integrada` · HEAD `a7b145e` · corpus `datos-atlas.json` v1.16.1 (232 obras) · 17 de agosto de 2026.

Cada afirmación relevante de este expediente lleva una etiqueta de nivel de evidencia:

- **Verificado** — comprobable directamente en un archivo, lote, corpus o el historial de Git.
- **Derivado** — resultado reproducible de una operación de conjuntos o conteo sobre datos verificados.
- **Hipótesis** — explicación posible, no probada.
- **Decisión requerida** — cuestión que solo puede cerrar la Dirección Académica.

---

## 1. Propósito y límites

Este documento es **probatorio, no decisorio**. Reúne evidencia verificable sobre C6 para que la Dirección Académica pueda decidir. No ratifica la denominación de C6, no crea criterios académicos, no confirma la candidatura de `gudynas`, no reclasifica ninguna obra, no crea corrientes secundarias, no siembra bibliografía, no modifica corpus, lotes ni catálogos, no resuelve ninguna frontera entre C6 y otra corriente, no redacta dictamen académico y no avanza a C7. Toda formulación que sonaría a conclusión clasificatoria ("claramente pertenece", "debería ser C6", "la clasificación correcta es") se evita deliberadamente en todo el documento.

---

## 2. Estado del repositorio

**Verificado.**

```
rama activa:                                  feat/atlas-2-etapa-1-integrada
HEAD:                                          a7b145e84b182da47322d928f193a17f1e4b8566
origin/feat/atlas-2-etapa-1-integrada:         a7b145e84b182da47322d928f193a17f1e4b8566  (coincide con HEAD)
```

`git status` muestra dos archivos no rastreados: este mismo expediente en construcción, y `ficha-decision-c4.md` — una incidencia ya documentada en los expedientes de C4 y C5 (existe en la copia local de Rob, nunca se comprometió a Git, no toca C6). Ningún archivo de `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` ni de los cuatro lotes aparece modificado.

`git show a7b145e --stat` confirma que **C5 quedó comprometida correctamente**: el commit "Documenta dictamen académico de la corriente C5" contiene exclusivamente los cuatro documentos de C5 (`dictamen-academico-c5.md`, `expediente-evidencia-c5.md`, `ficha-decision-c5.md`, `registro-decisiones-c5.md`; 1275 inserciones, 0 eliminaciones); ningún otro archivo.

**No se detectó ninguna incidencia Git nueva que pueda contaminar C6.** El único hallazgo técnico pendiente sigue siendo `ficha-decision-c4.md`, ajeno a esta corriente.

**Nota operativa sobre `.git/index.lock`.** El punto de montaje de la copia local no permite que Git borre (`unlink`) sus propios archivos temporales; cada comando de Git deja un `index.lock` que se retira moviéndolo (no borrándolo) a `.git/_locks_to_delete/`, tras comprobar con `ps`/`lsof`/`fuser` que ningún proceso lo tiene abierto. Se aplicó ese procedimiento antes de cada comando de este expediente. Todos los comandos usados fueron de solo lectura.

---

## 3. Fuentes examinadas

**Verificado.**

| Fuente | Ruta |
|---|---|
| Corpus | `data/agua-de-por-medio/datos-atlas.json` |
| Catálogo de corrientes | `data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json` |
| Catálogo de fenómenos | `data/agua-de-por-medio/atlas-2/catalogo-fenomenos.json` |
| Arquitectura integrada | `data/agua-de-por-medio/atlas-2/documentos/etapa-1-arquitectura-integrada.md` |
| Decisiones pendientes | `data/agua-de-por-medio/atlas-2/documentos/decisiones-pendientes.md` |
| Glosario archipiélico | `data/agua-de-por-medio/atlas-2/documentos/glosario-archipielico.md` |
| Esquema de datos propuesto | `data/agua-de-por-medio/atlas-2/documentos/esquema-datos-propuesto.json` |
| Lote piloto | `data/agua-de-por-medio/atlas-2/piloto-config.json` |
| Lote S01 | `data/agua-de-por-medio/atlas-2/lotes/s01-config.json` |
| Lote A01 | `data/agua-de-por-medio/atlas-2/lotes/a01-config.json` |
| Lote A02 | `data/agua-de-por-medio/atlas-2/lotes/a02-config.json` |
| Dictamen C1 | `.../documentos/dictamen-academico-c1.md` (comprobación cruzada, sin reabrir) |
| Dictamen C2 | `.../documentos/dictamen-academico-c2.md` (comprobación cruzada, sin reabrir) |
| Dictamen C4 | `.../documentos/dictamen-academico-c4.md` (comprobación cruzada, sin reabrir) |
| Historial Git | `git log`, `git show`, `git log --follow`, `git log -S` |

---

## 4. Denominación e historial

**Verificado.**

- **Denominación (ES):** «Huracanes, ecologías y materialidades vivas»
- **Denominación (EN):** «Hurricanes, ecologies and living materialities»
- **Clave interna:** `huracanes_ecologias_materialidades_vivas`
- **`provisional`:** `true`

`git log --follow --oneline -- data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json` devuelve cinco commits (`619ad67`, `99aec5b`, `2343008`, `d3b15a7`, `16fc252`) — los mismos que ya se verificaron para C1, C4 y C5, porque es el mismo archivo. Se extrajo el objeto `corrientes.huracanes_ecologias_materialidades_vivas` de cada versión mediante `git show <commit>:<ruta>`:

```
{"n":6,"label":"Huracanes, ecologías y materialidades vivas","label_en":"Hurricanes, ecologies and living materialities","provisional":true}
```

**Idéntico byte a byte en las cinco versiones.** Cero cambios de redacción registrados en el historial.

---

## 5. Guion conceptual

**Verificado — transcripción literal, sin parafrasear.** Fuente: `etapa-1-arquitectura-integrada.md`, apartado "2. Guiones conceptuales de C1–C10", declarado en su totalidad como **"[PROPUESTA]"**, sin ninguna línea aprobada.

> El huracán es política antes que naturaleza. La corriente sigue cómo el desastre expone qué vidas se consideran prescindibles, y cómo suelo, agua, plantas y animales participan del conflicto en lugar de servirle de escenario. Su tensión: llamar natural a un desastre desplaza la responsabilidad, pero reducirlo a lo social borra la agencia de lo material. Recorre obras que leen el clima como relación histórica.

| Campo | Contenido (transcripción literal) |
|---|---|
| Alcance intelectual | Ecología política, humanidades ambientales, estudios de desastre, teoría de la materialidad |
| Incluye | Huracán y catástrofe climática; ecologías coloniales y poscoloniales; materialidades con agencia |
| No incluye | La marca `violencias` en su tipo ambiental, que puede acompañar a cualquier corriente |
| Corriente más próxima | C4, con la que comparte la pregunta por el despojo del territorio |
| Riesgo de solapamiento | Bajo. Es la corriente con perfil más definido en la taxonomía anterior (`catástrofes`, 16 entradas, 7 %), y también la más delgada del corpus heredado |
| Vía de constitución | Migración del corpus heredado |
| Estado | Provisional |

---

## 6. Vía constitutiva

**Hipótesis documental a comprobar (formulada así en la instrucción de esta etapa):** *C6 declara como vía constitutiva la migración del corpus heredado, particularmente desde la categoría heredada `catástrofes`.*

### 6.1 Cuántas obras del corpus heredado contienen `catástrofes`

**Verificado — recalculado ahora contra `datos-atlas.json`, sin copiar la cifra de ningún documento previo: 16.**

### 6.2 Cuáles son

**Verificado.**

| id | Título | Año | Etiquetas heredadas | Territorio |
|---|---|:---:|---|---|
| `ferdinand` | Une écologie décoloniale | 2019 | catastrofes, colonialidad | martinica |
| `beyondsun` | Beyond Sun and Sand | 2006 | catastrofes, capitalismo_racial | puertorico |
| `aftershocks` | Aftershocks of Disaster (huracán María) | 2019 | catastrofes, soberanias | puertorico |
| `gudynas` | Extractivismos | 2015 | capitalismo_racial, catastrofes | veracruz |
| `islandfutures` | Island Futures: Caribbean Survival in the Anthropocene | 2020 | catastrofes, colonialidad | haiti |
| `brownreaper` | The Reaper's Garden | 2008 | catastrofes, violencias | jamaica |
| `munrohaitirising` | Haiti Rising | 2010 | catastrofes, memoria | haiti |
| `meniketinevis` | Sugar Cane Capitalism and Environmental Transformation | 2015 | postplantacion, catastrofes | nevis |
| `ulysseWhyHaiti` | Why Haiti Needs New Narratives | 2015 | catastrofes, memoria | haiti |
| `deloughrey` | Allegories of the Anthropocene | 2019 | catastrofes, colonialidad | barbados |
| `johnson_climatecuba` | Climate and Catastrophe in Cuba and the Atlantic World | 2011 | catastrofes, colonialidad | cuba |
| `schwartz_seaofstorms` | Sea of Storms | 2015 | catastrofes, colonialidad | puertorico |
| `klein_battleparadise` | The Battle for Paradise | 2018 | catastrofes, capitalismo_racial | puertorico |
| `goffedarklab` | Dark Laboratory | 2025 | catastrofes, capitalismo_racial | jamaica |
| `mcneillmosquito` | Mosquito Empires | 2010 | catastrofes, colonialidad | cartagena |
| `crawfordturtlemen` | The Last Turtlemen of the Caribbean | 2020 | capitalismo_racial, soberanias, catastrofes | bluefields |

**Nota de verificación adicional.** `catastrofes` es, además, verificablemente la etiqueta heredada más delgada de las diez existentes en el corpus: `memoria` 93, `colonialidad` 77, `soberanias` 62, `capitalismo_racial` 52, `creolizacion` 51, `violencias` 36, `postplantacion` 34, `cuerpo_erotica` 29, `cimarronaje` 26, `catastrofes` 16. Esto sostiene, con cifra recalculada, la afirmación del guion (§5) de que es "también la más delgada del corpus heredado". La cifra "7 %" del guion corresponde a 16/232 = 6,9 %, coherente con el corpus actual.

### 6.3 Cuántas pasaron por algún lote

**Verificado — 5, no 3.** Esta es la primera discrepancia con la hipótesis de control de la instrucción de esta etapa (§18 de esa instrucción da "catástrofes procesadas: 3"), y se documenta sin forzarla: de las 16 entradas con etiqueta `catastrofes`, **cinco** tienen un registro en algún archivo de lote (todas en A02): `beyondsun`, `gudynas`, `brownreaper`, `klein_battleparadise`, `goffedarklab`. Las **once** restantes nunca pasaron por ningún lote: `ferdinand`, `aftershocks`, `islandfutures`, `munrohaitirising`, `meniketinevis`, `ulysseWhyHaiti`, `deloughrey`, `johnson_climatecuba`, `schwartz_seaofstorms`, `mcneillmosquito`, `crawfordturtlemen`.

La hipótesis de "3 procesadas" es correcta si se lee como "3 vinculadas a C6" (ver 6.4), pero no como "3 procesadas por lote" — cinco pasaron por lote, y de esas cinco solo tres quedaron con algún rol en C6. Este expediente usa la cifra recalculada (5 procesadas por lote / 11 nunca procesadas) y explica la diferencia con la hipótesis en vez de forzarla.

### 6.4 Cuáles quedaron vinculadas finalmente a C6

**Verificado.** De las 5 procesadas por lote:

- **3 con algún rol en C6:** `beyondsun` (C6 principal), `goffedarklab` (C6 principal), `klein_battleparadise` (C6 secundaria, C4 principal).
- **1 con candidatura C6 sin confirmar:** `gudynas` (ver §9, apartado propio).
- **1 sin ningún rol en C6:** `brownreaper` (confirmada C9 principal, C2 secundaria — la etiqueta heredada no se tradujo en ninguna relación con C6).

### 6.5 Procedencia y proceso de cada una

**Verificado, contra el campo de cada entrada de lote:**

| id | procedencia | proceso |
|---|---|---|
| `beyondsun` | corpus heredado | corrección bibliográfica, migración, reclasificación |
| `goffedarklab` | corpus heredado | migración, reclasificación |
| `klein_battleparadise` | corpus heredado | migración, reclasificación |
| `gudynas` | corpus heredado | corrección bibliográfica, migración, reclasificación |
| `brownreaper` | corpus heredado | migración, reclasificación |

Las cinco tienen `procedencia: "corpus heredado"`; ninguna tiene `procedencia: "siembra nueva"`. Las cinco incluyen `"migración"` y `"reclasificación"` en su proceso; ninguna tiene proceso `"siembra"`.

### Pregunta probatoria: ¿llegaron las clasificaciones confirmadas por la vía declarada?

**Derivado.** Las tres entradas con algún rol confirmado en C6 (`beyondsun`, `goffedarklab`, `klein_battleparadise`) tienen, las tres, `procedencia: "corpus heredado"` y proceso que incluye `"migración"`. **A diferencia de C5** —donde la vía declarada (siembra bibliográfica dirigida) no coincidía con ninguna de las quince entradas confirmadas—, aquí la vía declarada (migración del corpus heredado) **sí coincide** con las tres entradas confirmadas, sobre la evidencia disponible. Esta observación se limita a los datos: no se presupone ni se descarta una tensión donde no la hay, y no se generaliza a las 13 entradas restantes (11 nunca procesadas + la candidatura sin confirmar de `gudynas` + `brownreaper`, que si bien procede de migración no llegó a C6), que siguen sin leerse contra C6.

---

## 7. Clasificación existente

**Verificado, contra los 57 registros de los cuatro archivos de lote.**

| Obra | Rol en C6 | Otra(s) corriente(s) | Fundamento registrado |
|---|:---:|---|---|
| `beyondsun` | Principal | C7 secundaria | «Los ambientalismos caribeños organizan el volumen.» |
| `goffedarklab` | Principal | C1, C2 secundarias | «La crisis climática caribeña se explica mediante historias coloniales, raciales y extractivas; invasión y plantación son genealogías secundarias.» |
| `klein_battleparadise` | Secundaria | C4 principal, C7 también secundaria | «El centro es el capitalismo del desastre, la privatización y la desposesión post-María; ecología del huracán y soberanía son cruces secundarios.» |

**C6 principal: 2. C6 secundaria: 1. Total con algún rol: 3. Sin solapamiento entre ambas listas.**

**Candidatura viva sin confirmar (no cuenta en las cifras anteriores): 1** — `gudynas` (§9).

**Comprobación cruzada con dictámenes ya emitidos:**
- `dictamen-academico-c4.md` (línea 88): *"`klein_battleparadise` | C6, C7 | «El capitalismo del desastre, la privatización y la desposesión post-María»"* — coincide.
- `dictamen-academico-c2.md` (líneas 116–117): registra a `goffedarklab` como "C6 · huracanes y ecologías" y a `brownreaper` como "C9 · archivos vivos" — coincide, y confirma independientemente que `brownreaper` no tiene rol en C6.
- `dictamen-academico-c1.md` (líneas 186–194): menciona a `schwartz_seaofstorms` y `goffedarklab` dentro de una tabla de doce señales léxicas de su propio expediente que **no son candidaturas C1**, aclarando que `schwartz_seaofstorms` "entra por una sola mención de Columbus en un título sobre huracanes" — coherente con que ninguna de las dos tenga hoy C1 como corriente confirmada.

**Advertencia sobre el tamaño de la muestra.** Con solo tres obras con algún rol confirmado en C6, **este expediente no deriva ningún patrón general** (territorial, lingüístico, de fundamento o de frontera) a partir de esa muestra. Cualquier regularidad que aparezca en las tres (por ejemplo, que las tres estén en inglés — ver §15) se registra como dato, no como tendencia.

---

## 8. Herencia `catástrofes`

Ver §6.2 para la lista completa de las 16 entradas y §6.3–6.4 para su estado de lote. Se presentan aquí separadas exactamente como pide la instrucción de esta etapa, con la salvedad ya documentada en §6.3: la partición real no es 3/13, sino 5 procesadas por lote (3 vinculadas a C6 + 1 candidatura sin confirmar + 1 en otra corriente) / 11 nunca procesadas.

### A. Ya procesadas por lote (5)

| id | Rol respecto de C6 | procedencia | proceso | Fundamento registrado |
|---|---|---|---|---|
| `beyondsun` | C6 principal | corpus heredado | corrección bibliográfica, migración, reclasificación | «Los ambientalismos caribeños organizan el volumen.» |
| `goffedarklab` | C6 principal | corpus heredado | migración, reclasificación | «La crisis climática caribeña se explica mediante historias coloniales, raciales y extractivas.» |
| `klein_battleparadise` | C6 secundaria (C4 principal) | corpus heredado | migración, reclasificación | «El centro es el capitalismo del desastre, la privatización y la desposesión post-María.» |
| `gudynas` | candidatura C6 sin confirmar | corpus heredado | corrección bibliográfica, migración, reclasificación | «Pertinente para ecología política, pero la fuente no demuestra un caso u orilla admisible del Atlas.» (§9) |
| `brownreaper` | sin rol en C6 (C9 principal, C2 secundaria) | corpus heredado | migración, reclasificación | «La muerte, los rituales mortuorios y la política espiritual organizan el argumento.» |

### B. Nunca procesadas — entradas heredadas relevantes para lectura contra C6 (11)

No se clasifican aquí ni se llaman "C6 pendientes"; son entradas con la etiqueta heredada `catastrofes` que nunca pasaron por lote.

| id | Título | Año | Territorio | Etiquetas heredadas |
|---|---|:---:|---|---|
| `ferdinand` | Une écologie décoloniale | 2019 | martinica | catastrofes, colonialidad |
| `aftershocks` | Aftershocks of Disaster (huracán María) | 2019 | puertorico | catastrofes, soberanias |
| `islandfutures` | Island Futures: Caribbean Survival in the Anthropocene | 2020 | haiti | catastrofes, colonialidad |
| `munrohaitirising` | Haiti Rising | 2010 | haiti | catastrofes, memoria |
| `meniketinevis` | Sugar Cane Capitalism and Environmental Transformation | 2015 | nevis | postplantacion, catastrofes |
| `ulysseWhyHaiti` | Why Haiti Needs New Narratives | 2015 | haiti | catastrofes, memoria |
| `deloughrey` | Allegories of the Anthropocene | 2019 | barbados | catastrofes, colonialidad |
| `johnson_climatecuba` | Climate and Catastrophe in Cuba and the Atlantic World | 2011 | cuba | catastrofes, colonialidad |
| `schwartz_seaofstorms` | Sea of Storms | 2015 | puertorico | catastrofes, colonialidad |
| `mcneillmosquito` | Mosquito Empires | 2010 | cartagena | catastrofes, colonialidad |
| `crawfordturtlemen` | The Last Turtlemen of the Caribbean | 2020 | bluefields | capitalismo_racial, soberanias, catastrofes |

Autoría y lengua de publicación no están disponibles como campos propios en el corpus para las entradas sin lote (`datos-atlas.json` no trae `autor` ni `lenguas_publicacion` a nivel de obra fuera de los lotes); el campo `ap` (aporte) de cada una está disponible en el corpus pero no se transcribe aquí íntegro para no sobrecargar la tabla — es consultable directamente en `datos-atlas.json` por `id`. **Candidatura histórica comprobable por Git: ninguna de las once** (ver §6.3 y §9 sobre el único commit que introdujo A02).

---

## 9. Candidatura `gudynas`

**Apartado propio, como exige la instrucción de esta etapa.**

**Verificado — historial completo en Git.** `git log --follow --oneline -- data/agua-de-por-medio/atlas-2/lotes/a02-config.json` devuelve un único commit real que contiene el archivo: `024bb41` ("Incorpora lote A02 revisado y corroborado", 8 de agosto de 2026). `git log --oneline --all -S "gudynas" -- .../a02-config.json` confirma que la cadena `gudynas` solo aparece introducida en ese mismo commit — no existe una versión anterior del archivo con un estado de candidatura distinto. (Un segundo commit, `58723f9`, aparece en `--follow` por detección de similitud de contenido con `a01-config.json`; `git show 58723f9 --stat -- .../a02-config.json` no muestra cambios en esa ruta, confirmando que es un artefacto de la detección de renombrado, no una versión real de A02.)

**Corriente(s) candidata(s):** `corrientes_candidatas: ["huracanes_ecologias_materialidades_vivas"]` — una sola, C6. No tiene `corriente_confirmada` ni `corrientes_secundarias` (array vacío).

**Fundamento de la candidatura**, transcripción literal del campo `revision.fundamento`:

> «La obra es pertinente para ecología política, pero la fuente consultada no demuestra un caso u orilla admisible del Atlas. No se asigna corriente hasta resolver elegibilidad. Título completo: Extractivismos. Ecología, economía y política de un modo de entender el desarrollo y la Naturaleza.»

**Estado actual:** `revision.estado: "pendiente_revision_con_texto"`; `decision_aprobada: "bloquear_por_alcance_y_corregir_bibliografia"`; campo adicional `elegibilidad_atlas.estado: "bloqueada_por_alcance"`, con el mismo fundamento transcrito arriba. `pendientes`: `demostrar_orilla_admisible_del_gran_caribe_o_veracruz`, `resolver_elegibilidad_antes_de_confirmar_corriente`.

**Por qué no fue confirmado:** el registro es explícito — no por duda entre corrientes, sino porque no está demostrado que el territorio de la obra sea una orilla admisible del Atlas.

**Campo territorial:** `orillas: [{"tipo":"región","label":"América Latina","funcion":"territorio comparado"}]`; en el corpus principal, `l: "veracruz"`.

**Evidencia sobre Veracruz:** el propio campo `elegibilidad_atlas` es la única evidencia registrada; no hay, en ningún otro archivo consultado (`glosario-archipielico.md`, `etapa-1-arquitectura-integrada.md`, `decisiones-pendientes.md`), una definición explícita de qué territorios cuentan como "orilla admisible del Gran Caribe". Veracruz sí aparece como territorio de al menos otra obra ya presente en el corpus (`gudynas` mismo), pero eso no equivale, según el propio registro de la entrada, a que su admisibilidad esté demostrada para C6.

**Dónde quedó registrada la objeción territorial:** exclusivamente en la propia entrada de `gudynas` en `a02-config.json` (`elegibilidad_atlas` y `pendientes`). No se encontró ninguna mención adicional de esta objeción en `decisiones-pendientes.md` ni en ningún dictamen ya emitido.

### Verificación de la hipótesis formulada para esta etapa

**Derivado — la hipótesis se sostiene con la evidencia disponible:** `gudynas` conserva una candidatura viva hacia C6 (único caso de candidatura sin confirmar en todo el universo de C6), y el fundamento registrado de su bloqueo es exclusivamente de elegibilidad territorial ("no demuestra un caso u orilla admisible del Atlas"), no de duda conceptual entre C6 y otra corriente — no hay, en su entrada, ninguna otra corriente mencionada como alternativa.

### Pregunta para la Dirección Académica

**Decisión requerida.** ¿Puede una obra cuyo territorio registrado es Veracruz integrar el Atlas y, por tanto, ser evaluada definitivamente para C6? ¿Qué evidencia de conexión con una orilla admisible sería suficiente? — Este expediente no propone respuesta.

---

## 10. Señales léxicas

**Verificado — metodología idéntica a la ya usada en C5: solo términos que aparecen literalmente en el guion de C6 (§5), con límite de palabra, contra los campos `ap` y `t` de las 232 obras.**

| Término | ¿En el guion? | ids con coincidencia |
|---|:---:|---|
| huracán/huracanes | Sí | `islandfutures`, `felicianosantos` |
| ecología/ecológic- | Sí | `ferdinand`, `steward`, `johnsonbelize`, `mcneillmosquito` |
| desastre | Sí | `aftershocks`, `johnson_climatecuba`, `klein_battleparadise` |
| clima/climátic- | Sí | `sharpewake`, `deloughrey`, `johnson_climatecuba`, `goffedarklab`, `henrycaliban` |
| catástrofe(s) | Sí | **0 resultados** |
| materialidad(es) | Sí | **0 resultados** |

**Unión de los cuatro términos con resultado: 13 ids** — `aftershocks`, `deloughrey`, `felicianosantos`, `ferdinand`, `goffedarklab`, `henrycaliban`, `islandfutures`, `johnson_climatecuba`, `johnsonbelize`, `klein_battleparadise`, `mcneillmosquito`, `sharpewake`, `steward`.

**Términos adicionales probados y descartados por alto riesgo de falso positivo** (no incorporados a la señal final, siguiendo la misma disciplina que descartó "mar" en C5):

| Término | Resultado | Motivo del descarte |
|---|:---:|---|
| naturaleza/natural | 5 (`aftershocks`, `gosinenature`, `creolenieworleans`, `johnsonbelize`, `kalefragments`) | Mayoría ajena al tema del desastre; genérico |
| ambiente/ambiental | 1 (`beyondsun`) | Muestra insuficiente para evaluar, y `beyondsun` ya está confirmado por otra vía |
| tierra | 6 (`besson`, `rediker`, `rifkinfictions`, `kahnislands`, `duboisturits`, `legrandfrontier`) | Ninguno relacionado con `catastrofes` ni con anclas de fenómeno C6; palabra de uso general |
| agua | 3 (`lara`, `crawfordturtlemen`, `keeganhofman`) | Palabra de uso general; solo `crawfordturtlemen` tiene relación documentada con C6 (etiqueta `catastrofes`) |
| tormenta | 0 | Sin resultado |
| colonial (sin acotar) | 37 | 16 % del corpus completo — la misma clase de problema que "mar" tuvo para C5 |

---

## 11. Falsos positivos verificados

**Verificado por lectura directa del campo `ap` — no por inferencia.**

### `felicianosantos`

Campo `ap`, transcripción literal:

> «Cómo se disputa hoy, en el habla cotidiana y no solo en el archivo, la identidad taína en Puerto Rico. Cita a Bonilla y LeBrón por el año y la autoría exactos de su libro sobre los huracanes de 2017.»

La palabra "huracanes" aparece dentro de una **referencia bibliográfica citada por la obra** (el libro de Bonilla y LeBrón sobre los huracanes de 2017), no como argumento propio de `felicianosantos`, cuyo tema registrado es la disputa de la identidad taína puertorriqueña. **Confirmado como falso positivo léxico por lectura.**

### `henrycaliban`

Campo `ap`, transcripción literal:

> «Funda el campo como campo: distingue las corrientes historicista y poeticista de la filosofía afrocaribeña y lee a Calibán como razón propia, no derivada. Sostiene que la filosofía caribeña vive como saber subtextual, en el clima existencial antes que en el tratado.»

"Clima" funciona aquí como **metáfora existencial** ("clima existencial", estado de ánimo intelectual de un campo filosófico), no como análisis climático o ecológico. **Confirmado como falso positivo léxico por lectura.**

### Observación metodológica

**Derivado, presentado como evidencia, no como criterio nuevo.** Estos dos casos muestran que una coincidencia léxica de palabra no constituye, por sí sola, candidatura C6: la palabra puede estar presente sin que el tema, el argumento o la materialidad analítica de la obra tengan relación con C6. Si la Dirección Académica desea formalizar esta distinción (palabra / tema / argumento / materialidad analítica) como criterio de lectura para C6, es una decisión suya — este expediente no la fija.

---

## 12. Fronteras

**Verificado, calculado sobre las tres entradas con algún rol confirmado en C6 (§7). Con 1–2 casos por frontera, no se establece ningún criterio general.**

### C6/C4 — 1 caso

| Obra | Principal | Secundaria | Fundamento registrado |
|:---:|:---:|:---:|---|
| `klein_battleparadise` | C4 | C6, C7 | «El centro es el capitalismo del desastre, la privatización y la desposesión post-María; ecología del huracán y soberanía son cruces secundarios.» |

### C6/C7 — 2 casos

| Obra | Principal | Secundaria | Fundamento registrado |
|:---:|:---:|:---:|---|
| `beyondsun` | C6 | C7 | «Los ambientalismos caribeños organizan el volumen.» |
| `klein_battleparadise` | C4 | C6, C7 | (mismo fundamento de arriba; C6 y C7 ambas secundarias) |

### C6/C1 — 1 caso

| Obra | Principal | Secundaria | Fundamento registrado |
|:---:|:---:|:---:|---|
| `goffedarklab` | C6 | C1, C2 | «La crisis climática caribeña se explica mediante historias coloniales, raciales y extractivas; invasión y plantación son genealogías secundarias.» |

### C6/C2 — 1 caso

| Obra | Principal | Secundaria | Fundamento registrado |
|:---:|:---:|:---:|---|
| `goffedarklab` | C6 | C1, C2 | (mismo caso de arriba) |

**Comprobación cruzada:** el caso C4/C6 coincide exactamente con lo que `dictamen-academico-c4.md` (línea 88) ya había registrado desde su propia perspectiva.

### Distinción exigida por la instrucción de esta etapa

- **Frontera declarada por el guion:** el guion de C6 (§5) nombra únicamente a C4 como "corriente más próxima". No menciona a C1, C2 ni C7 como próximas ni como riesgo de solapamiento.
- **Evidencia empírica existente:** de las cuatro fronteras verificadas, C4 es la única con evidencia directa que corresponde a lo declarado por el guion; C7 tiene el doble de casos (2) que C4 (1), sin estar mencionada en el guion; C1 y C2 tienen 1 caso cada una, tampoco mencionadas.
- **Regla académica:** **todavía inexistente para las cuatro fronteras.** Este expediente no propone ninguna.

---

## 13. Universo exploratorio

**Derivado — recalculado de forma independiente, sin aceptar 17 como cifra dada.**

### 13.1 Conjuntos utilizados

Se usan únicamente los conjuntos efectivamente sustentados por el repositorio para C6 (no todos los que se usaron en C5 aplican aquí):

| Conjunto | Definición | Fuente | Número bruto |
|---|---|---|:---:|
| A | Etiqueta heredada `catastrofes` | `datos-atlas.json`, campo `f` | 16 |
| B | Anclas de fenómenos compatibles con C6 | `catalogo-fenomenos.json` | 11 |
| D | Clasificaciones existentes (principal + secundaria confirmadas) | Cuatro lotes | 3 |
| E | Señales léxicas verificadas contra el guion | `datos-atlas.json`, campos `ap`/`t` | 13 |

No se construyó un conjunto de "candidaturas históricas por Git" (equivalente al Conjunto C de C5) porque no existe ninguna para C6 (§6.3, §9): la única candidatura, la de `gudynas`, ya está incluida en A (por su etiqueta heredada) y no aporta ids adicionales a la unión. No se construyó un conjunto de "casos heredados priorizados por otro dictamen" (equivalente al Conjunto F de C5) porque no se encontró la fórmula "casos priorizados" en relación con C6 en ninguno de los cinco dictámenes ya emitidos (verificado por `grep` sobre los cinco archivos).

### 13.2 Intersecciones relevantes (calculadas, no presupuestas)

- **A ∩ D:** `beyondsun`, `goffedarklab`, `klein_battleparadise`, más `gudynas` (candidatura, no confirmación) — 4 de 16.
- **A ∩ B:** `ferdinand`, `deloughrey`, `islandfutures`, `johnson_climatecuba`, `mcneillmosquito`, `munrohaitirising`, `schwartz_seaofstorms`, `ulysseWhyHaiti` — 8 de 16 (las 16 menos `beyondsun`, `gudynas`, `brownreaper`, `klein_battleparadise`, `goffedarklab`, `meniketinevis`, `aftershocks`, `crawfordturtlemen`, que no son anclas de ningún fenómeno compatible con C6).
- **B ∩ E:** `ferdinand`, `johnson_climatecuba`, `mcneillmosquito` — 3 de 11 anclas también tienen señal léxica.
- **E \ A \ B \ D:** `felicianosantos`, `henrycaliban`, `steward`, `sharpewake` — 4 ids que entran a la unión solo por señal léxica (dos de ellos, además, verificados como falsos positivos en §11).

### 13.3 Unión final A∪B∪D∪E

**23 ids en total** — recalculado y verificado dos veces con el mismo script relanzado de forma independiente.

De los 23:
- **3 ya tienen rol confirmado en C6** (Conjunto D): `beyondsun`, `goffedarklab`, `klein_battleparadise`.
- **3 pasaron por lote sin tener rol confirmado en C6**: `gudynas` (candidatura sin confirmar), `brownreaper` (confirmada C9), `steward` (confirmada C4, sin relación con `catastrofes`: entra por señal léxica "ecología").
- **17 nunca pasaron por ningún lote.**

3 + 3 + 17 = 23. **La cifra de 17 sin lote queda confirmada**, con la composición exacta documentada, no simplemente aceptada.

### 13.4 Lista completa de las 17 entradas nunca procesadas

`aftershocks`, `crawfordturtlemen`, `deloughrey`, `dubuissonhaiti`, `felicianosantos`, `ferdinand`, `gomezexperiential`, `henrycaliban`, `islandfutures`, `johnson_climatecuba`, `johnsonbelize`, `mcneillmosquito`, `meniketinevis`, `munrohaitirising`, `schwartz_seaofstorms`, `sharpewake`, `ulysseWhyHaiti`.

**Once de las 17** traen la etiqueta heredada `catastrofes` (ver §8.B); las **seis restantes** (`dubuissonhaiti`, `felicianosantos`, `gomezexperiential`, `henrycaliban`, `johnsonbelize`, `sharpewake`) llegan a la unión exclusivamente por ancla de fenómeno o señal léxica, sin la etiqueta heredada — de estas seis, dos (`felicianosantos`, `henrycaliban`) ya están verificadas como falsos positivos léxicos (§11).

**Este universo se presenta como construido según el método descrito arriba, no como universo académico definitivo ni como techo cerrado.** Un método que incorporara los términos léxicos descartados en §10 (`colonial`, `naturaleza`, `tierra`, `agua`) produciría una unión mucho mayor y de peor calidad discriminante.

---

## 14. Fenómenos compatibles

**Verificado — recalculado contra `catalogo-fenomenos.json` (versión `0.1.0-borrador`, 35 fenómenos en total, "borrador para dictamen académico; no se ha aplicado al corpus publicado").**

| Fenómeno | Corrientes compatibles | Anclas |
|---|---|---|
| `huracan_como_politica` | C6 (exclusivo) | `schwartz_seaofstorms`, `johnson_climatecuba`, `munrohaitirising` |
| `ecologia_colonial` | C6, C1 | `ferdinand`, `deloughrey`, `islandfutures`, `johnsonbelize` |
| `enfermedad_y_biopolitica` | C6, C9 | `mcneillmosquito`, `gomezexperiential` |
| `narrativa_del_desastre` | C6, C9 | `ulysseWhyHaiti`, `dubuissonhaiti` |

**Cuatro fenómenos compatibles con C6. Once anclas únicas** (sin repetición entre fenómenos): `deloughrey`, `dubuissonhaiti`, `ferdinand`, `gomezexperiential`, `islandfutures`, `johnson_climatecuba`, `johnsonbelize`, `mcneillmosquito`, `munrohaitirising`, `schwartz_seaofstorms`, `ulysseWhyHaiti`.

**Anclas que ya pasaron por lote: 0. Anclas sin lote: 11.** La cifra "11 anclas, ninguna procesada" queda confirmada por recálculo independiente.

**Contraste metodológico con C5 (antecedente, no regla).** En C5, 3 de las 23 anclas de fenómeno ya habían pasado por lote antes de escribirse su expediente, lo que permitió una primera observación empírica de cómo se comportaban al leerse (una terminó como corriente principal, otra como secundaria). **En C6 no existe todavía ninguna observación equivalente: las 11 anclas están vírgenes.** Por tanto, **no puede inferirse que una ancla compatible con C6 vaya a convertirse en clasificación C6** — no hay ni un solo caso, a favor o en contra, que lo sugiera desde la práctica editorial.

---

## 15. Territorio y lengua

**Verificado, en dos apartados separados como exige la instrucción de esta etapa.**

### 15.1 Obras C6 confirmadas (muestra: 3)

| id | Rol | Lengua de publicación | Territorio registrado |
|---|:---:|---|---|
| `beyondsun` | C6 principal | inglés | Caribe insular y continental (territorio comparado); `l`=puertorico |
| `goffedarklab` | C6 principal | inglés | Gran Caribe (territorio comparado); `l`=jamaica |
| `klein_battleparadise` | C6 secundaria | inglés | Puerto Rico (territorio estudiado); `l`=puertorico |

Las tres están en inglés; dos tienen relación con Puerto Rico, una con Jamaica. **Con una muestra de tres, este expediente no llama a esto "sesgo de C6".** Se registra el dato exacto, no una tendencia: cualquiera de estas tres proporciones cambiaría por completo con una cuarta entrada.

### 15.2 Universo exploratorio (17 entradas sin lote, apartado separado)

No se calculó una distribución territorial/lingüística agregada de las 17 porque, para 6 de ellas (`dubuissonhaiti`, `felicianosantos`, `gomezexperiential`, `henrycaliban`, `johnsonbelize`, `sharpewake`), el territorio y la lengua de publicación no están fijados como campos propios de nivel-obra en `datos-atlas.json` fuera de un lote (`l` sí existe para todas, pero `lenguas_publicacion` solo se declara al pasar por lote). El territorio (`l`) de las 11 con etiqueta `catastrofes` sin lote ya está en la tabla de §8.B: `martinica`, `puertorico` (×1), `haiti` (×3), `nevis`, `barbados`, `cuba`, `cartagena`, `bluefields` — dispersión amplia, sin concentración dominante aparente, pero **no se declara esto como hallazgo de sesgo o vacío**: es una lectura preliminar del campo `l`, no una evaluación sistemática de las 17.

**No se propone siembra para corregir ningún vacío territorial o lingüístico**, conforme a la instrucción de esta etapa.

---

## 16. Asuntos no verificables

**Hipótesis / fuera de alcance del repositorio.**

- Si el corpus de 232 obras contiene, en general, material suficiente sobre ecología o desastre climático del Caribe francófono, hispanohablante insular o neerlandófono más allá de lo ya identificado — no evaluado aquí, excede el método de este expediente.
- Si existe una carencia real de investigación académica sobre estos temas fuera del corpus del proyecto — no evaluable desde este repositorio.
- Autoría y lengua de publicación exactas de las 11 entradas de `catastrofes` sin lote — no están registradas como campos propios a nivel de corpus fuera de los lotes; requerirían lectura editorial de cada obra, no disponible en este expediente.
- Qué territorios cuentan como "orilla admisible del Gran Caribe" a efectos de resolver el bloqueo de `gudynas` — no está definido en ningún documento consultado (§9).

---

## 17. Preguntas para la Dirección Académica

**Decisión requerida en todos los casos. Ninguna de estas catorce preguntas se responde en este expediente.**

**Decisión 1 — Denominación.** ¿Se ratifica «Huracanes, ecologías y materialidades vivas» / «Hurricanes, ecologies and living materialities»?

**Decisión 2 — Principio analítico.** ¿Qué debe organizar el argumento de una obra para pertenecer a C6?

**Decisión 3 — Guion.** ¿Se mantiene el guion vigente sin cambios?

**Decisión 4 — Vía constitutiva.** ¿Se ratifica la migración de `catástrofes` como vía constitutiva? La evidencia de las tres entradas confirmadas es consistente con la vía declarada (§6), pero proviene de una muestra de tres.

**Decisión 5 — Etiqueta heredada.** ¿Las once entradas de `catástrofes` todavía nunca procesadas (§8.B) deben leerse sistemáticamente contra C6?

**Decisión 6 — `gudynas`.** ¿Cómo resolver el problema de elegibilidad territorial de Veracruz antes de confirmar o descartar su candidatura?

**Decisión 7 — C4/C6.** Con un único caso confirmado (`klein_battleparadise`), ¿qué criterio debe gobernar la frontera entre ecología/materialidad y postplantación/desposesión cuando una obra trata ambas a la vez?

**Decisión 8 — C7/C6.** Con dos casos, ¿existe evidencia suficiente para establecer una regla, o debe permanecer abierta?

**Decisión 9 — C1/C6.** Con un caso, ¿existe evidencia suficiente para establecer una regla, o debe permanecer abierta?

**Decisión 10 — C2/C6.** Con un caso, ¿existe evidencia suficiente para establecer una regla, o debe permanecer abierta?

**Decisión 11 — Falsos positivos.** ¿Debe formalizarse que la presencia léxica de huracán/clima/ecología no basta y se exige función analítica dentro del argumento (§11)?

**Decisión 12 — Universo exploratorio.** ¿Se autoriza la lectura de las 17 entradas nunca procesadas (§13.4)?

**Decisión 13 — Fenómenos.** ¿Se autoriza la lectura de las 11 anclas compatibles todavía no procesadas (§14)?

**Decisión 14 — Siembra.** ¿Debe agotarse primero el corpus interno (las 11 entradas de `catastrofes` sin lote más el universo de 17) antes de considerar cualquier siembra?

---

## 18. Límites del expediente

Este expediente:

- no ratifica la denominación, el guion ni la vía constitutiva de C6;
- no confirma ni descarta la candidatura de `gudynas`;
- no clasifica ninguna de las 17 entradas del universo exploratorio ni las 11 de la etiqueta heredada sin lote;
- no convierte ninguna de las 11 anclas de fenómeno en candidatura;
- no fija ningún criterio de frontera con C4, C7, C1 o C2;
- no formaliza la distinción palabra/tema/argumento/materialidad analítica como criterio académico;
- no propone ni ejecuta siembra;
- no modifica `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` ni ningún archivo de lote;
- no reabre C1, C2, C3, C4 ni C5;
- no avanza a C7.

