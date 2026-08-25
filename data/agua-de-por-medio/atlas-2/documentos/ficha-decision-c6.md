# Ficha de decisión de C6

## Huracanes, ecologías y materialidades vivas

Rama `feat/atlas-2-etapa-1-integrada` · HEAD `a7b145e84b182da47322d928f193a17f1e4b8566` (= `origin/feat/atlas-2-etapa-1-integrada`) · corpus `datos-atlas.json` v1.16.1 (232 obras) · 17 de agosto de 2026.

Este documento es un **instrumento de decisión, no un dictamen**. Traduce en preguntas la evidencia ya reunida y verificada en `expediente-evidencia-c6.md`. No ratifica, no elige, no confirma candidaturas, no clasifica obras, no resuelve fronteras y no redacta dictamen. Cada decisión termina con un espacio explícito para la respuesta de la Dirección Académica.

**Corrección metodológica que atraviesa toda la ficha.** La etiqueta heredada `catástrofes` tiene 16 entradas. De ellas, **5** pasaron por algún lote — no 3. De esas 5, solo **3** terminaron con algún rol en C6 (`beyondsun` y `goffedarklab` principal, `klein_battleparadise` secundaria); **1** conserva candidatura sin confirmar (`gudynas`); **1** pasó por lote y no tiene ningún rol en C6 (`brownreaper`, confirmada C9 principal / C2 secundaria). En ningún punto de esta ficha se usa "procesada por lote" como sinónimo de "vinculada a C6".

**Tres universos, no confundir:**

| Universo | Definición | Número |
|---|---|:---:|
| A | Entradas heredadas con etiqueta `catástrofes` | 16 |
| B | De esas 16, las que nunca pasaron por lote | 11 |
| C | Universo exploratorio total (A ∪ anclas de fenómeno ∪ clasificaciones ∪ señales léxicas) nunca procesado para C6 | 17 |

B es un subconjunto de A. C es un conjunto distinto, construido con más fuentes que solo la etiqueta heredada: de las 17 entradas de C, 11 traen la etiqueta `catástrofes` (y son las mismas 11 de B) y las 6 restantes (`dubuissonhaiti`, `felicianosantos`, `gomezexperiential`, `henrycaliban`, `johnsonbelize`, `sharpewake`) llegan únicamente por ancla de fenómeno o señal léxica, sin la etiqueta heredada.

---

## Tabla de casos ya procesados relevantes para C6

| id | `catástrofes` heredada | Pasó por lote | Estado C6 | Clasificación final |
|---|:---:|:---:|---|---|
| `beyondsun` | sí | sí | principal | C6 principal / C7 secundaria |
| `goffedarklab` | sí | sí | principal | C6 principal / C1, C2 secundarias |
| `klein_battleparadise` | sí | sí | secundaria | C4 principal / C6, C7 secundarias |
| `gudynas` | sí | sí | candidatura sin confirmar | ninguna — bloqueada por elegibilidad territorial (Veracruz) |
| `brownreaper` | sí | sí | sin rol C6 | C9 principal / C2 secundaria |

`brownreaper`, `felicianosantos` y `henrycaliban` cumplen funciones distintas y no deben leerse como una sola categoría: `brownreaper` es evidencia de que una obra migrada desde `catástrofes` puede terminar fuera de C6; `felicianosantos` y `henrycaliban` son falsos positivos léxicos (coincidencia de palabra sin relación temática o argumental con C6), verificados por lectura directa del campo `ap`, no por migración de etiqueta heredada.

---

## Decisión 1 — Denominación

#### Pregunta

¿Se ratifica «Huracanes, ecologías y materialidades vivas» / «Hurricanes, ecologies and living materialities» como denominación de C6?

#### Evidencia mínima verificada

`label`: «Huracanes, ecologías y materialidades vivas». `label_en`: «Hurricanes, ecologies and living materialities». `provisional`: `true`. El historial de Git (`git log --follow` sobre `catalogos-atlas-2.json`, cinco commits) muestra el objeto `corrientes.huracanes_ecologias_materialidades_vivas` idéntico byte a byte en las cinco versiones: cero cambios de redacción desde su creación.

#### Alternativas

**A.** Ratificar la denominación (ES y EN) sin cambios, y retirar `provisional`.

**B.** Ratificar la denominación pero mantener `provisional` hasta que exista más evidencia clasificada.

**C.** Ajustar o reformular la denominación (ES, EN, o ambas).

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A fija el nombre de forma definitiva. B mantiene el nombre pero deja explícito que puede revisarse. C reabre la redacción del nombre antes de cualquier otra decisión sobre C6, lo que puede afectar cómo se lean las decisiones siguientes de esta misma ficha.

#### Dirección Académica

Espero su decisión.

---

## Decisión 2 — Principio analítico

#### Pregunta

¿Qué debe organizar el argumento dominante de una obra para pertenecer a C6?

#### Evidencia mínima verificada

Las dos obras C6 principal (`beyondsun`, `goffedarklab`) y la obra C6 secundaria (`klein_battleparadise`) son la totalidad de la muestra confirmada — 3 obras. Sus fundamentos registrados: `beyondsun` — «Los ambientalismos caribeños organizan el volumen»; `goffedarklab` — «La crisis climática caribeña se explica mediante historias coloniales, raciales y extractivas»; `klein_battleparadise` — «El centro es el capitalismo del desastre, la privatización y la desposesión post-María» (aquí C4 es principal, C6 secundaria). Adicionalmente, dos falsos positivos léxicos verificados por lectura (`felicianosantos`: "huracanes" aparece en una referencia bibliográfica ajena, no en el argumento propio; `henrycaliban`: "clima" funciona como metáfora existencial, no como análisis ecológico) muestran que la sola presencia de una palabra del guion no coincide con el argumento dominante de la obra en al menos estos dos casos.

#### Alternativas

**A.** El desastre/la ecología/la materialidad deben ser el argumento dominante de la obra.

**B.** Basta con que la obra trate la interacción entre un evento ambiental y las relaciones sociales, sin exigir que sea el argumento dominante.

**C.** Una formulación más amplia que incluya la agencia material o ecológica como eje, aunque no sea el tema central de la obra.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A es el criterio más restrictivo y dejaría fuera potencialmente a obras donde el desastre es un elemento entre varios (como en `klein_battleparadise`, hoy C6 secundaria). B es más permisivo y podría acercar a C6 casos como los falsos positivos léxicos ya descartados si no se combina con una exigencia de función analítica. C amplía el criterio a la agencia material, lo que puede reabrir la pregunta de cómo distinguir C6 de C4 en casos de desposesión con componente ecológico (ver Decisión 9).

#### Dirección Académica

Espero su decisión.

---

## Decisión 3 — Guion académico

#### Pregunta

¿Se mantiene el guion vigente de C6 sin cambios?

#### Evidencia mínima verificada

Transcripción literal del guion (`etapa-1-arquitectura-integrada.md`, declarado en su totalidad como "[PROPUESTA]", sin línea aprobada):

> «El huracán es política antes que naturaleza. La corriente sigue cómo el desastre expone qué vidas se consideran prescindibles, y cómo suelo, agua, plantas y animales participan del conflicto en lugar de servirle de escenario. Su tensión: llamar natural a un desastre desplaza la responsabilidad, pero reducirlo a lo social borra la agencia de lo material. Recorre obras que leen el clima como relación histórica.»

**Incluye:** huracán y catástrofe climática; ecologías coloniales y poscoloniales; materialidades con agencia. **No incluye:** la marca `violencias` en su tipo ambiental. **Corriente más próxima declarada:** C4, "con la que comparte la pregunta por el despojo del territorio". **Vía de constitución declarada:** migración del corpus heredado. **Tensión no resuelta, declarada por el propio guion:** llamar "natural" a un desastre frente a reducirlo enteramente a lo social.

#### Alternativas

**A.** Mantener el guion íntegro, incluyendo su calificación de "[PROPUESTA]".

**B.** Mantenerlo con algún ajuste puntual (por ejemplo, precisar la tensión natural/social o la relación con C4).

**C.** Reescribirlo.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A conserva la formulación actual, incluida su tensión interna sin resolver. B permite precisar puntos concretos sin reabrir el guion completo. C implica volver a partir de una definición nueva, lo que afectaría potencialmente las decisiones sobre vía constitutiva, principio analítico y fronteras.

#### Dirección Académica

Espero su decisión.

---

## Decisión 4 — Vía constitutiva

#### Pregunta

¿Se ratifica la migración del corpus heredado desde `catástrofes` como vía constitutiva de C6?

#### Evidencia mínima verificada

16 entradas heredadas con `catástrofes`. **5** procesadas por lote (no 3). De esas 5: **3** vinculadas a C6 (`beyondsun`, `goffedarklab` principal; `klein_battleparadise` secundaria); **1** candidatura no confirmada (`gudynas`); **1** procesada sin ningún rol en C6 (`brownreaper`). Las tres entradas con rol confirmado en C6 tienen, las tres, `procedencia: "corpus heredado"` y proceso que incluye `"migración"` — a diferencia de C5, donde la vía declarada no coincidía con ninguna de sus entradas confirmadas, aquí sí coincide con la muestra existente. Esa muestra es de tres obras.

#### Alternativas

**A.** Ratificar la migración desde `catástrofes` como vía constitutiva de C6, sin asumir equivalencia conceptual entre la etiqueta y la corriente.

**B.** Ratificarla solo como vía inicial de exploración, no como vía constitutiva definitiva.

**C.** Reformular la vía constitutiva.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A da carácter constitutivo a la migración, lo que podría orientar la lectura futura de las 11 entradas de `catástrofes` sin procesar (ver Decisión 5). B trata la migración como un punto de partida exploratorio, dejando abierta la posibilidad de que la vía constitutiva final sea otra o mixta. C reabre completamente cómo se entiende la formación de C6.

#### Dirección Académica

Espero su decisión.

---

## Decisión 5 — Relación entre `catástrofes` y C6

#### Pregunta

¿Qué estatuto académico debe tener la etiqueta heredada `catástrofes` frente a la corriente C6?

#### Evidencia mínima verificada

Los cinco destinos de las entradas procesadas de `catástrofes` no son iguales: `beyondsun` → C6 principal; `goffedarklab` → C6 principal; `klein_battleparadise` → C4 principal / C6 secundaria; `gudynas` → candidatura C6 sin confirmar, bloqueada por elegibilidad territorial; `brownreaper` → C9 principal / C2 secundaria, sin ningún rol en C6 pese a venir de la misma etiqueta heredada. Es decir, de 5 casos procesados, 3 confirmaron algún vínculo con C6, 1 quedó en candidatura sin resolver y 1 no tuvo ninguna relación con C6.

#### Alternativas

**A.** Tratar `catástrofes` como puerta de entrada para la lectura, nunca como equivalencia clasificatoria con C6.

**B.** Tratarla como antecedente fuerte de C6, sujeto en cada caso a validación conceptual individual.

**C.** Abandonar su uso como criterio operativo de priorización de lectura una vez agotada la migración de las entradas ya procesadas.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A minimiza el peso de la etiqueta heredada en la lectura futura. B le da un peso mayor sin llegar a la equivalencia automática. C limita el uso de `catástrofes` como guía de priorización hacia adelante, lo que afectaría directamente cómo se resuelve la Decisión 6.

#### Dirección Académica

Espero su decisión.

---

## Decisión 6 — Entradas heredadas todavía no procesadas

#### Pregunta

¿Deben leerse sistemáticamente contra C6 las 11 entradas de `catástrofes` todavía no procesadas por lote?

#### Evidencia mínima verificada

`16 − 5 = 11`, verificado. Las 11: `ferdinand`, `aftershocks`, `islandfutures`, `munrohaitirising`, `meniketinevis`, `ulysseWhyHaiti`, `deloughrey`, `johnson_climatecuba`, `schwartz_seaofstorms`, `mcneillmosquito`, `crawfordturtlemen`. Ninguna de las 11 tiene candidatura histórica comprobable por Git. Se registran como **entradas heredadas `catástrofes` todavía no procesadas y potencialmente relevantes para lectura contra C6**, no como "C6 pendientes".

#### Alternativas

**A.** Leer las 11.

**B.** Leer solo las que cumplan un filtro previo (por ejemplo, señal léxica adicional o ancla de fenómeno).

**C.** No dar prioridad especial a `catástrofes` frente a otras vías de lectura para C6.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A agota primero el conjunto más directamente ligado a la vía constitutiva declarada. B reduce el volumen de lectura inmediata a costa de dejar sin leer entradas que podrían tener rol en C6. C trata a `catástrofes` como una fuente más entre varias, sin trato preferente.

#### Dirección Académica

Espero su decisión.

---

## Decisión 7 — `gudynas` y Veracruz

#### Pregunta

¿Cómo debe resolverse la candidatura de `gudynas`, bloqueada por la cuestión territorial de Veracruz?

#### Evidencia mínima verificada

Candidatura viva: `corrientes_candidatas: ["huracanes_ecologias_materialidades_vivas"]`, sin corriente confirmada ni secundarias. Fundamento registrado (`revision.fundamento` y `elegibilidad_atlas.fundamento`, idénticos): «La obra es pertinente para ecología política, pero la fuente consultada no demuestra un caso u orilla admisible del Atlas. No se asigna corriente hasta resolver elegibilidad.» Territorio registrado: Veracruz (`l: "veracruz"`); `orillas: [{"tipo":"región","label":"América Latina","funcion":"territorio comparado"}]`. `elegibilidad_atlas.estado: "bloqueada_por_alcance"`. `pendientes`: demostrar orilla admisible del Gran Caribe o Veracruz; resolver elegibilidad antes de confirmar corriente. No se encontró, en ningún otro documento consultado, una definición de qué territorios cuentan como "orilla admisible del Gran Caribe". La objeción territorial no está registrada en ningún otro archivo fuera de la propia entrada de `gudynas`.

#### Alternativas

**A.** Admitir Veracruz como orilla válida del Atlas.

**B.** Exigir evidencia adicional de conexión histórica, territorial o relacional de la obra con el Caribe antes de resolver.

**C.** Mantener la candidatura suspendida, sin resolución por ahora.

**D.** Excluir el caso por criterio territorial.

**E.** Otra formulación de la Dirección Académica.

Si se opta por la alternativa D, debe quedar explícito que es una decisión de la Dirección Académica, no una conclusión de este expediente ni de esta ficha.

#### Consecuencias

A desbloquearía la candidatura y permitiría evaluarla en sus propios términos conceptuales. B mantiene el bloqueo mientras se reúne evidencia adicional, sin cerrar la puerta. C deja la situación actual sin cambios. D cierra el caso sin haber evaluado nunca su afinidad conceptual con C6.

#### Dirección Académica

Espero su decisión.

---

## Decisión 8 — Falsos positivos léxicos

#### Pregunta

¿Debe formalizarse que la coincidencia léxica con términos del guion no basta para integrar una obra a C6?

#### Evidencia mínima verificada

**`felicianosantos`** — campo `ap`: «Cómo se disputa hoy, en el habla cotidiana y no solo en el archivo, la identidad taína en Puerto Rico. Cita a Bonilla y LeBrón por el año y la autoría exactos de su libro sobre los huracanes de 2017.» "Huracanes" aparece dentro de una referencia bibliográfica citada, no en el argumento propio de la obra. **`henrycaliban`** — campo `ap`: «Funda el campo como campo: distingue las corrientes historicista y poeticista de la filosofía afrocaribeña y lee a Calibán como razón propia, no derivada. Sostiene que la filosofía caribeña vive como saber subtextual, en el clima existencial antes que en el tratado.» "Clima" funciona como metáfora existencial, no como análisis ecológico. Ambos, confirmados como falsos positivos por lectura directa, no por inferencia.

#### Alternativas

**A.** Exigir función analítica del término dentro del argumento de la obra, no solo su presencia léxica.

**B.** Mantener la búsqueda léxica únicamente como mecanismo exploratorio de primera pasada, sin ningún efecto clasificatorio.

**C.** No formalizar todavía ninguna regla sobre esto.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A convierte la observación en criterio de lectura explícito para las siguientes fases (11 entradas de `catástrofes` sin procesar, 17 del universo exploratorio, 11 anclas de fenómeno). B mantiene la búsqueda léxica como primer filtro sin darle valor clasificatorio, dejando el criterio de fondo abierto. C pospone la formalización, con el riesgo de que futuros falsos positivos se traten caso por caso sin criterio compartido.

#### Dirección Académica

Espero su decisión.

---

## Decisión 9 — Frontera C4/C6

#### Pregunta

¿Qué debe gobernar la frontera entre C4 y C6?

#### Evidencia mínima verificada

Un único caso verificado: `klein_battleparadise` — C4 principal, C6 y C7 secundarias. Fundamento registrado: «El centro es el capitalismo del desastre, la privatización y la desposesión post-María; ecología del huracán y soberanía son cruces secundarios.» El guion de C6 (§5 del expediente) declara a C4 como "corriente más próxima", "con la que comparte la pregunta por el despojo del territorio" — es la única frontera mencionada explícitamente por el guion. Con un solo caso, no hay margen para distinguir empíricamente un patrón entre desposesión/trabajo/economía política y huracán/ecología/materialidad dentro del mismo caso: en `klein_battleparadise` ambos elementos están presentes, y el registro los distribuye entre principal (C4) y secundaria (C6).

#### Alternativas

**A.** Definir un régimen analítico dominante: la obra pertenece a la corriente cuyo eje organiza el argumento central, aunque trate también elementos de la otra.

**B.** Distinguir explícitamente desastre/materialidad (C6) de economía política/desposesión (C4) como dos preguntas separables, incluso cuando coexisten en la misma obra.

**C.** Mantener la frontera abierta hasta contar con más casos.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A daría un criterio operativo inmediato, aplicable a las 11 entradas de `catástrofes` sin procesar. B exigiría, en cada obra futura, decidir explícitamente cuál pregunta organiza el argumento, lo que puede requerir lectura más detallada por caso. C deja sin resolver cómo tratar los próximos casos mixtos hasta que haya más evidencia.

#### Dirección Académica

Espero su decisión.

---

## Decisión 10 — Frontera C7/C6

#### Pregunta

¿Existe evidencia suficiente para fijar un criterio C7/C6?

#### Evidencia mínima verificada

Dos casos: `beyondsun` (C6 principal, C7 secundaria; fundamento: «Los ambientalismos caribeños organizan el volumen») y `klein_battleparadise` (C4 principal, C6 y C7 ambas secundarias). El guion de C6 no menciona a C7 como corriente próxima ni como riesgo de solapamiento. Con solo dos casos, ninguno de los dos con C7 como principal, no hay evidencia de una dirección dominante de la frontera.

#### Alternativas

**A.** Fijar un criterio provisional a partir de los dos casos existentes.

**B.** Mantener la frontera abierta.

**C.** Usar el mismo régimen analítico dominante que se decida para C4/C6 (Decisión 9) como criterio provisional también aquí.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A fijaría regla sobre una base de solo dos casos, ninguno con C7 como principal. B pospone la decisión. C ligaría esta frontera a la que se fije en la Decisión 9, lo que simplifica el criterio general pero asume que ambas fronteras se comportan igual sin evidencia propia que lo sostenga.

#### Dirección Académica

Espero su decisión.

---

## Decisión 11 — Frontera C1/C6

#### Pregunta

¿Existe evidencia suficiente para fijar un criterio C1/C6?

#### Evidencia mínima verificada

Un único caso: `goffedarklab` — C6 principal, C1 y C2 secundarias. Fundamento registrado: «La crisis climática caribeña se explica mediante historias coloniales, raciales y extractivas; invasión y plantación son genealogías secundarias.» El guion de C6 no menciona a C1 como corriente próxima. No debe extrapolarse un criterio de un solo caso.

#### Alternativas

**A.** Fijar un criterio provisional.

**B.** Mantener la frontera abierta.

**C.** Usar el mismo régimen analítico dominante que se decida para C4/C6 (Decisión 9).

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A generalizaría a partir de un único dato. B deja la pregunta pendiente hasta que existan más casos. C extiende el criterio general de la Decisión 9 a esta frontera sin evidencia propia adicional.

#### Dirección Académica

Espero su decisión.

---

## Decisión 12 — Frontera C2/C6

#### Pregunta

¿Existe evidencia suficiente para fijar un criterio C2/C6?

#### Evidencia mínima verificada

Mismo caso que la Decisión 11: `goffedarklab` — C6 principal, C1 y C2 secundarias, mismo fundamento registrado. Un único caso. El guion de C6 no menciona a C2 como corriente próxima. No debe extrapolarse un criterio de un solo caso.

#### Alternativas

**A.** Fijar un criterio provisional.

**B.** Mantener la frontera abierta.

**C.** Usar el mismo régimen analítico dominante que se decida para C4/C6 (Decisión 9).

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

Las mismas que en la Decisión 11, aplicadas a la frontera con C2: A generaliza desde un dato único, B pospone, C hereda el criterio de otra frontera sin evidencia propia.

#### Dirección Académica

Espero su decisión.

---

## Decisión 13 — Universo exploratorio

#### Pregunta

¿Se autoriza la lectura del universo de 17 entradas nunca procesadas para C6?

#### Evidencia mínima verificada

Método reproducido de forma independiente: unión de los conjuntos A (etiqueta `catástrofes`, 16), B (anclas de fenómeno compatibles con C6, 11), D (clasificaciones confirmadas, 3) y E (señales léxicas verificadas contra el guion, 13). Unión total: 23 ids. De los 23: 3 ya tienen rol confirmado en C6; 3 pasaron por lote sin rol en C6 (`gudynas`, `brownreaper`, `steward`); **17 nunca pasaron por ningún lote**. Lista completa de las 17: `aftershocks`, `crawfordturtlemen`, `deloughrey`, `dubuissonhaiti`, `felicianosantos`, `ferdinand`, `gomezexperiential`, `henrycaliban`, `islandfutures`, `johnson_climatecuba`, `johnsonbelize`, `mcneillmosquito`, `meniketinevis`, `munrohaitirising`, `schwartz_seaofstorms`, `sharpewake`, `ulysseWhyHaiti`. De estas 17, **11 coinciden con las 11 heredadas `catástrofes` sin procesar** (Decisión 6); las **6 restantes** (`dubuissonhaiti`, `felicianosantos`, `gomezexperiential`, `henrycaliban`, `johnsonbelize`, `sharpewake`) llegan solo por ancla de fenómeno o señal léxica, sin etiqueta heredada — dos de ellas (`felicianosantos`, `henrycaliban`) ya verificadas como falsos positivos léxicos (Decisión 8).

#### Alternativas

**A.** Autorizar la lectura de las 17.

**B.** Autorizar solo subconjuntos definidos (por ejemplo, excluyendo los dos falsos positivos ya verificados, o separando las 11 con etiqueta heredada de las 6 restantes).

**C.** Restringir primero la lectura a las 11 heredadas de `catástrofes` (Decisión 6), posponiendo las 6 restantes.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A abarca el universo completo construido por el método descrito. B reduce el volumen inicial de lectura evitando casos ya identificados como de bajo rendimiento. C prioriza la vía constitutiva declarada (migración de `catástrofes`) sobre el resto del universo exploratorio, dejando las 6 entradas léxicas/de fenómeno para una fase posterior.

#### Dirección Académica

Espero su decisión.

---

## Decisión 14 — Fenómenos compatibles

#### Pregunta

¿Se autoriza la lectura de las 11 anclas de fenómeno compatibles con C6 todavía no procesadas?

#### Evidencia mínima verificada

Cuatro fenómenos compatibles con C6 en `catalogo-fenomenos.json`: `huracan_como_politica` (exclusivo de C6), `ecologia_colonial` (C6, C1), `enfermedad_y_biopolitica` (C6, C9), `narrativa_del_desastre` (C6, C9). Once anclas únicas: `deloughrey`, `dubuissonhaiti`, `ferdinand`, `gomezexperiential`, `islandfutures`, `johnson_climatecuba`, `johnsonbelize`, `mcneillmosquito`, `munrohaitirising`, `schwartz_seaofstorms`, `ulysseWhyHaiti`. **Anclas ya procesadas por lote: 0.** A diferencia de C5, donde 3 de 23 anclas ya habían pasado por lote antes de escribirse su expediente, en C6 no existe todavía ninguna observación empírica de cómo se comportan estas anclas al pasar por clasificación — ni a favor ni en contra de C6.

#### Alternativas

**A.** Autorizar la lectura de las 11.

**B.** Priorizar solo ciertos fenómenos (por ejemplo, `huracan_como_politica`, el único exclusivo de C6).

**C.** Mantenerlas como contexto, sin darles prioridad de lectura por ahora.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A trata las 11 anclas como un bloque de lectura completo. B concentra el esfuerzo en el fenómeno más directamente ligado a C6, dejando los otros tres (compartidos con C1 o C9) para después. C pospone la lectura de las anclas de fenómeno frente a otras vías (por ejemplo, la etiqueta heredada de la Decisión 6).

#### Dirección Académica

Espero su decisión.

---

## Decisión 15 — Siembra

#### Pregunta

¿Debe abrirse siembra bibliográfica para C6 o agotarse primero el corpus interno disponible?

#### Evidencia mínima verificada

Corpus interno todavía sin agotar: 11 entradas heredadas `catástrofes` sin procesar (Decisión 6), universo exploratorio de 17 (Decisión 13), 11 anclas de fenómeno sin procesar (Decisión 14). Muestra confirmada de C6: apenas 3 obras con algún rol. Ningún caso de siembra nueva registrado hasta ahora en C6 (las 5 entradas procesadas de `catástrofes` tienen todas `procedencia: "corpus heredado"`).

#### Alternativas

**A.** No sembrar todavía; agotar primero el corpus interno.

**B.** Permitir siembra muy dirigida, en paralelo a la lectura del corpus interno.

**C.** Combinar lectura interna y siembra desde ahora.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A pospone cualquier incorporación bibliográfica nueva hasta agotar las fuentes ya existentes en el corpus. B abre una vía adicional acotada sin esperar a agotar el corpus interno. C trata ambas vías como simultáneas desde el inicio de esta fase de C6.

#### Dirección Académica

Espero su decisión.

---

## Decisión 16 — Tamaño de muestra y cierre de fronteras

#### Pregunta

¿Puede C6 fijar fronteras académicas con la evidencia actual o deben permanecer provisionales hasta contar con más casos clasificados?

#### Evidencia mínima verificada

C6 principal: 2. C6 secundaria: 1. Total con algún rol confirmado: 3. Las cuatro fronteras verificadas (C4/C6, C7/C6, C1/C6, C2/C6) tienen entre 1 y 2 casos cada una: C4/C6 (1 caso), C7/C6 (2 casos), C1/C6 (1 caso), C2/C6 (1 caso) — y los casos de C1/C6 y C2/C6 son, de hecho, la misma obra (`goffedarklab`). Ninguna frontera tiene más de dos casos independientes.

#### Alternativas

**A.** Mantener todas las fronteras (C4/C6, C7/C6, C1/C6, C2/C6) abiertas hasta contar con más casos.

**B.** Fijar un criterio solo para C4/C6, dejando las demás abiertas, dado que es la única frontera mencionada por el guion de C6.

**C.** Fijar criterios provisionales para todas, explícitamente revisables cuando aumente la muestra.

**D.** Otra formulación de la Dirección Académica.

#### Consecuencias

A preserva la incertidumbre en todas las fronteras al mismo nivel. B distingue la frontera declarada por el guion (C4/C6) del resto, que no tiene respaldo textual explícito. C permite operar desde ya con criterios explícitos, asumiendo el riesgo de tener que revisarlos cuando la muestra crezca.

#### Dirección Académica

Espero su decisión.

---

*Fin de la ficha. 16 decisiones. Ninguna fue respondida por quien redacta este documento. La Dirección Académica puede responder decisión por decisión, en el orden que prefiera, en un `registro-decisiones-c6.md` posterior, siguiendo el mismo formato ya usado para C1–C5.*
