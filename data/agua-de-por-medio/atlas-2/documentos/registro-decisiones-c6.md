# Registro de decisiones de C6

## Huracanes, ecologías y materialidades vivas

Rama `feat/atlas-2-etapa-1-integrada` · HEAD `a7b145e84b182da47322d928f193a17f1e4b8566` (= `origin/feat/atlas-2-etapa-1-integrada`) · 17 de agosto de 2026.

Este documento registra, sin ampliar ni reinterpretar, las 16 decisiones que la Dirección Académica tomó sobre `ficha-decision-c6.md`. Es un documento exclusivamente de registro: no clasifica obras, no confirma candidaturas, no modifica corpus, lotes ni catálogos, y no implementa todavía la exclusión de `gudynas`. **Las 16 decisiones están ahora completas — D10 (frontera C7/C6), la única que quedaba con formulación normativa pendiente, fue cerrada por la Dirección Académica con el criterio provisional específico registrado abajo.**

---

## Decisión 1 — Denominación

**Pregunta original:** ¿Se ratifica «Huracanes, ecologías y materialidades vivas» / «Hurricanes, ecologies and living materialities» como denominación de C6?

**Alternativa elegida:** A.

**Formulación de la decisión:** Se ratifica sin cambios la denominación «Huracanes, ecologías y materialidades vivas» («Hurricanes, ecologies and living materialities»).

**Evidencia mínima:** `label` y `label_en` verificados en `catalogos-atlas-2.json`; `provisional: true`; historial Git (`git log --follow`, cinco commits) muestra el objeto de C6 idéntico byte a byte en las cinco versiones.

**Consecuencia operativa:** La denominación queda fija para todo uso posterior de C6 en documentos, tablas y registros.

**Estado:** Cerrada.

---

## Decisión 2 — Principio analítico

**Pregunta original:** ¿Qué debe organizar el argumento dominante de una obra para pertenecer a C6?

**Alternativa elegida:** A.

**Formulación de la decisión:** «C6 se define cuando huracanes, ecologías o materialidades vivas organizan el argumento dominante de la obra.» La mera aparición de vocabulario ambiental no basta.

**Evidencia mínima:** Las tres obras con algún rol confirmado en C6 (`beyondsun`, `goffedarklab`, `klein_battleparadise`) organizan su argumento alrededor de ambientalismos, crisis climática o capitalismo del desastre; los falsos positivos léxicos verificados (`felicianosantos`, `henrycaliban`) muestran casos donde el vocabulario aparece sin organizar el argumento.

**Consecuencia operativa:** Este principio pasa a ser el criterio de lectura para evaluar las 11 entradas heredadas sin procesar, el universo de 17 y las 11 anclas de fenómeno.

**Estado:** Cerrada.

---

## Decisión 3 — Guion académico

**Pregunta original:** ¿Se mantiene el guion vigente de C6 sin cambios?

**Alternativa elegida:** A.

**Formulación de la decisión:** Se mantiene el guion vigente de C6 íntegramente, sin cambios, sin ampliación y sin reescritura. Transcripción exacta desde `etapa-1-arquitectura-integrada.md`:

> «El huracán es política antes que naturaleza. La corriente sigue cómo el desastre expone qué vidas se consideran prescindibles, y cómo suelo, agua, plantas y animales participan del conflicto en lugar de servirle de escenario. Su tensión: llamar natural a un desastre desplaza la responsabilidad, pero reducirlo a lo social borra la agencia de lo material. Recorre obras que leen el clima como relación histórica.»

**Evidencia mínima:** Texto verificado en la fuente citada, idéntico al transcrito en `expediente-evidencia-c6.md` §5 y en `ficha-decision-c6.md`, Decisión 3.

**Consecuencia operativa:** El guion, incluida su tensión interna no resuelta entre lo natural y lo social, permanece como marco de referencia sin modificación.

**Estado:** Cerrada.

---

## Decisión 4 — Vía constitutiva

**Pregunta original:** ¿Se ratifica la migración del corpus heredado desde `catástrofes` como vía constitutiva de C6?

**Alternativa elegida:** A.

**Formulación de la decisión:** Se ratifica la migración desde `catástrofes` como vía constitutiva de C6, sin asumir equivalencia conceptual entre la etiqueta heredada y la corriente. `catástrofes` ≠ C6. La migración es una vía de entrada y revisión, no una clasificación automática.

**Evidencia mínima:** 16 entradas heredadas con `catástrofes`; 5 procesadas por lote; de esas 5, 3 vinculadas a C6 (`beyondsun`, `goffedarklab` principal; `klein_battleparadise` secundaria), 1 candidatura sin confirmar (`gudynas`) y 1 sin ningún rol en C6 (`brownreaper`). Las tres entradas confirmadas tienen `procedencia: "corpus heredado"` y proceso con `"migración"`.

**Consecuencia operativa:** La vía constitutiva queda ratificada como marco de trabajo, sin que la etiqueta heredada determine automáticamente el resultado de clasificación de ninguna entrada.

**Estado:** Cerrada.

---

## Decisión 5 — Estatuto de `catástrofes`

**Pregunta original:** ¿Qué estatuto académico debe tener la etiqueta heredada `catástrofes` frente a la corriente C6?

**Alternativa elegida:** A.

**Formulación de la decisión:** `catástrofes` será tratada como puerta de entrada para lectura, nunca como equivalencia clasificatoria.

**Evidencia mínima — cinco casos procesados:** `beyondsun` → C6 principal; `goffedarklab` → C6 principal; `klein_battleparadise` → C4 principal / C6 secundaria; `gudynas` → candidatura no confirmada; `brownreaper` → C9 principal / C2 secundaria, sin rol C6. La existencia de destinos diferentes demuestra que la etiqueta heredada no predetermina el resultado.

**Consecuencia operativa:** Ninguna entrada con etiqueta `catástrofes` puede darse por clasificada en C6 sin lectura y evaluación individual.

**Estado:** Cerrada.

---

## Decisión 6 — Entradas heredadas todavía no procesadas

**Pregunta original:** ¿Deben leerse sistemáticamente contra C6 las 11 entradas de `catástrofes` todavía no procesadas por lote?

**Alternativa elegida:** A.

**Formulación de la decisión:** Se autoriza la lectura sistemática de las 11 entradas heredadas con `catástrofes` todavía no procesadas por lote. Esto no significa que pertenezcan a C6, que sean candidaturas, ni que deban terminar clasificadas en C6 — son únicamente entradas autorizadas para lectura contra C6.

**Evidencia mínima — 11 ids verificados en el expediente (§8.B):** `ferdinand`, `aftershocks`, `islandfutures`, `munrohaitirising`, `meniketinevis`, `ulysseWhyHaiti`, `deloughrey`, `johnson_climatecuba`, `schwartz_seaofstorms`, `mcneillmosquito`, `crawfordturtlemen`.

**Consecuencia operativa:** Queda autorizada la lectura de estas 11 entradas en una fase posterior; ningún resultado de esa lectura está predeterminado por esta decisión.

**Estado:** Cerrada.

---

## Decisión 7 — `gudynas` / Veracruz

**Pregunta original:** ¿Cómo debe resolverse la candidatura de `gudynas`, bloqueada por la cuestión territorial de Veracruz?

**Alternativa elegida:** D.

**Formulación de la decisión:** Se excluye `gudynas` por criterio territorial. Su candidatura hacia C6 no continúa; el caso queda excluido para esta corriente por decisión académica territorial. Esta decisión se refiere exclusivamente al caso `gudynas` — no se generaliza a Veracruz como territorio total, al Golfo de México, a otras obras futuras ni a otros territorios limítrofes, y no constituye doctrina territorial general.

**Evidencia mínima:** Candidatura `corrientes_candidatas: ["huracanes_ecologias_materialidades_vivas"]`; fundamento registrado: «La obra es pertinente para ecología política, pero la fuente consultada no demuestra un caso u orilla admisible del Atlas»; `elegibilidad_atlas.estado: "bloqueada_por_alcance"`; territorio registrado `l: "veracruz"`.

**Consecuencia operativa:** La candidatura de `gudynas` hacia C6 queda cerrada por decisión académica. **La implementación técnica de esta exclusión en los archivos de lote no se realiza en esta etapa** (ver §6 de la instrucción de esta fase); requiere instrucción específica posterior.

**Estado:** Cerrada.

---

## Decisión 8 — Falsos positivos léxicos

**Pregunta original:** ¿Debe formalizarse que la coincidencia léxica con términos del guion no basta para integrar una obra a C6?

**Alternativa elegida:** A.

**Formulación de la decisión:** Se formaliza que una coincidencia léxica solo tiene valor para C6 cuando el término o fenómeno cumple una función analítica dentro del argumento de la obra. La mera presencia de palabras como huracán, clima, ecología, desastre, ambiente o materialidad no basta.

**Evidencia mínima:** `felicianosantos` — "huracanes" aparece en una cita bibliográfica ajena (al libro de Bonilla y LeBrón) y no organiza el argumento de la obra, centrado en la disputa de la identidad taína en Puerto Rico. `henrycaliban` — "clima" funciona como metáfora existencial ("clima existencial") y no como análisis climático o ecológico. Ambos verificados por lectura directa del campo `ap`.

**Consecuencia operativa:** Toda futura señal léxica sobre las 11 entradas sin procesar, el universo de 17 y las 11 anclas de fenómeno deberá evaluarse por función analítica, no por sola presencia de palabra.

**Estado:** Cerrada.

---

## Decisión 9 — Frontera C4/C6

**Pregunta original:** ¿Qué debe gobernar la frontera entre C4 y C6?

**Alternativa elegida:** A.

**Formulación de la decisión:** Se adopta como criterio el régimen analítico dominante. C4 será principal cuando el argumento se organice principalmente alrededor de desposesión, trabajo, reconstrucción capitalista o economía política. C6 será principal cuando se organice principalmente alrededor de huracán, ecología o materialidad viva.

**Evidencia mínima:** `klein_battleparadise` — C4 principal, C6 secundaria; fundamento: «El centro es el capitalismo del desastre, la privatización y la desposesión post-María; ecología del huracán y soberanía son cruces secundarios.» Único caso verificado de esta frontera.

**Consecuencia operativa:** El criterio de régimen analítico dominante se aplica a futuros casos C4/C6. Por efecto de la Decisión 16, este criterio es **provisional y revisable**, no una regla definitiva.

**Estado:** Cerrada con criterio provisional y revisable.

---

## Decisión 10 — Frontera C7/C6

**Pregunta original:** ¿Existe evidencia suficiente para fijar un criterio C7/C6?

**Alternativa elegida:** A.

**Formulación de la decisión — transcripción exacta, sin resumir:**

> **C7 será principal cuando el argumento esté organizado por soberanía, frontera, ocupación, administración territorial o dispositivo estatal; C6 será principal cuando el argumento esté organizado por huracanes, ecologías, fuerzas ambientales o materialidades vivas que producen efectos históricos y sociales.**

Este criterio queda adoptado como específico para la frontera C7/C6, con carácter provisional y revisable.

**Evidencia mínima:** Dos casos verificados — `beyondsun` (C6 principal, C7 secundaria; fundamento: «Los ambientalismos caribeños organizan el volumen») y `klein_battleparadise` (C4 principal, C6 y C7 ambas secundarias). Ninguno de los dos tiene C7 como principal. La muestra empírica de esta frontera sigue siendo pequeña (dos casos).

**Consecuencia operativa:** El criterio adoptado se aplica a futuros casos C7/C6. Por efecto de la Decisión 16, permanece **provisional y revisable**, sujeto a reconsideración cuando aumente la evidencia; no sustituye ni se confunde con el criterio de régimen analítico dominante adoptado para C4/C6 (Decisión 9), que sigue siendo un criterio distinto y específico de esa otra frontera.

**Estado:** Cerrada — provisional y revisable.

---

## Decisión 11 — Frontera C1/C6

**Pregunta original:** ¿Existe evidencia suficiente para fijar un criterio C1/C6?

**Alternativa elegida:** C.

**Formulación de la decisión:** Se aplicará provisionalmente el criterio de régimen analítico dominante (el mismo adoptado para C4/C6 en la Decisión 9). Queda explícito que es provisional, revisable, se apoya en una muestra reducida y deberá reconsiderarse cuando aumente la evidencia.

**Evidencia mínima:** Un único caso — `goffedarklab` (C6 principal, C1 y C2 secundarias); fundamento: «La crisis climática caribeña se explica mediante historias coloniales, raciales y extractivas; invasión y plantación son genealogías secundarias.»

**Consecuencia operativa:** El régimen analítico dominante se aplica también a C1/C6, con el mismo carácter provisional que en C4/C6.

**Estado:** Cerrada con criterio provisional y revisable.

---

## Decisión 12 — Frontera C2/C6

**Pregunta original:** ¿Existe evidencia suficiente para fijar un criterio C2/C6?

**Alternativa elegida:** Formulación específica provista directamente por la Dirección Académica en esta instrucción (no una de las alternativas A–D de la ficha original).

**Formulación de la decisión — transcripción exacta, sin resumir:**

> **Cuando una obra estudie conjuntamente esclavización y ecología, C2 será principal si el mundo material aparece subordinado al análisis del régimen esclavista; C6 será principal si las materialidades, ecologías o fuerzas ambientales son constitutivas del argumento y reorganizan la comprensión de ese régimen.**

Queda explícito que: la mera presencia de esclavización no basta para hacer principal a C2; la mera presencia de clima, huracán o ecología no basta para hacer principal a C6; para C6, la dimensión material o ecológica debe ser constitutiva del argumento; para C2, el análisis debe estar organizado por el régimen esclavista y el mundo material funcionar subordinadamente dentro de ese análisis.

**Evidencia mínima:** Un único caso — `goffedarklab` (C6 principal, C1 y C2 secundarias), mismo fundamento que en la Decisión 11.

**Consecuencia operativa:** Este criterio provisional específico se aplica a futuros casos donde coincidan esclavización y ecología. Por efecto de la Decisión 16, la frontera C2/C6 permanece **provisional y revisable mientras aumente la evidencia**.

**Estado:** Cerrada con criterio provisional y revisable.

---

## Decisión 13 — Universo exploratorio

**Pregunta original:** ¿Se autoriza la lectura del universo de 17 entradas nunca procesadas para C6?

**Alternativa elegida:** A.

**Formulación de la decisión:** Se autoriza la lectura de las 17 entradas del universo exploratorio de C6. La lectura no equivale a candidatura, clasificación, pertenencia ni confirmación.

**Evidencia mínima — tres universos distintos, no confundibles:** Universo A: 16 entradas heredadas con `catástrofes`. Universo B: 11 de esas 16 todavía no procesadas. Universo C: 17 entradas del universo exploratorio total todavía no procesadas para C6 (unión de conjuntos A, anclas de fenómeno, clasificaciones confirmadas y señales léxicas verificadas; recalculada de forma independiente en el expediente, §13). Lista de las 17: `aftershocks`, `crawfordturtlemen`, `deloughrey`, `dubuissonhaiti`, `felicianosantos`, `ferdinand`, `gomezexperiential`, `henrycaliban`, `islandfutures`, `johnson_climatecuba`, `johnsonbelize`, `mcneillmosquito`, `meniketinevis`, `munrohaitirising`, `schwartz_seaofstorms`, `sharpewake`, `ulysseWhyHaiti`.

**Consecuencia operativa:** Queda autorizada la lectura de las 17 entradas en una fase posterior, sin que esta autorización prejuzgue ningún resultado de clasificación.

**Estado:** Cerrada.

---

## Decisión 14 — Fenómenos compatibles

**Pregunta original:** ¿Se autoriza la lectura de las 11 anclas de fenómeno compatibles con C6 todavía no procesadas?

**Alternativa elegida:** A.

**Formulación de la decisión:** Se autoriza la lectura de las 11 anclas de fenómeno compatibles con C6 todavía no procesadas. Ser ancla compatible no significa pertenecer a C6; la lectura no crea candidatura ni clasificación.

**Evidencia mínima — 11 anclas verificadas, 0 procesadas por lote:** `deloughrey`, `dubuissonhaiti`, `ferdinand`, `gomezexperiential`, `islandfutures`, `johnson_climatecuba`, `johnsonbelize`, `mcneillmosquito`, `munrohaitirising`, `schwartz_seaofstorms`, `ulysseWhyHaiti` (de los fenómenos `huracan_como_politica`, `ecologia_colonial`, `enfermedad_y_biopolitica`, `narrativa_del_desastre`).

**Consecuencia operativa:** Queda autorizada la lectura de estas 11 anclas en una fase posterior, sin efecto clasificatorio automático.

**Estado:** Cerrada.

---

## Decisión 15 — Siembra

**Pregunta original:** ¿Debe abrirse siembra bibliográfica para C6 o agotarse primero el corpus interno disponible?

**Alternativa elegida:** A.

**Formulación de la decisión:** No se abre siembra bibliográfica todavía; se agota primero el corpus interno disponible.

**Evidencia mínima:** Corpus interno sin agotar: 11 entradas heredadas `catástrofes` sin procesar (Decisión 6), universo de 17 (Decisión 13), 11 anclas de fenómeno sin procesar (Decisión 14). Muestra confirmada de C6: 3 obras con algún rol.

**Consecuencia operativa:** No se buscará nueva bibliografía, no se agregarán obras, no se diseñarán lotes de siembra, no se priorizarán vacíos territoriales o lingüísticos, y no se modificará el corpus mientras esta decisión esté vigente.

**Estado:** Cerrada.

---

## Decisión 16 — Tamaño de muestra y estado de las fronteras

**Pregunta original:** ¿Puede C6 fijar fronteras académicas con la evidencia actual o deben permanecer provisionales hasta contar con más casos clasificados?

**Alternativa elegida:** A.

**Formulación de la decisión:** Se mantienen todas las fronteras de C6 (C4/C6, C7/C6, C1/C6, C2/C6) como provisionales y revisables mientras aumente la evidencia. Los criterios actualmente adoptados son criterios de trabajo, no reglas definitivas e irreversibles.

**Evidencia mínima:** C6 principal: 2. C6 secundaria: 1. Las cuatro fronteras verificadas tienen entre 1 y 2 casos cada una; ninguna frontera tiene más de dos casos independientes, y los casos de C1/C6 y C2/C6 son la misma obra (`goffedarklab`).

**Consecuencia operativa:** Los criterios de las Decisiones 9, 11 y 12 quedan marcados expresamente como provisionales en todo uso posterior; ninguno se presenta como regla definitiva.

**Estado:** Cerrada con criterio provisional y revisable.

---

## Estado de las 16 decisiones

**Cerradas (11):** D1, D2, D3, D4, D5, D6, D7, D8, D13, D14, D15.

**Cerradas con criterio provisional y revisable (5):** D9, D10, D11, D12, D16.

**Pendientes (0):** ninguna.

`11 + 5 = 16`. No queda ninguna decisión académica pendiente.

---

## Límites de este registro

Este registro:

- no cambia ninguna respuesta de la Dirección Académica — la formulación de D10 se incorpora literalmente, tal como la entregó la Dirección Académica;
- no reclasifica ninguna obra;
- no confirma ninguna candidatura;
- no modifica `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` ni ningún archivo de lote;
- no implementa todavía la exclusión de `gudynas` en los datos — esa implementación técnica requiere una instrucción específica posterior;
- no autoriza siembra;
- no avanza a C7.

Con las 16 decisiones completas, el siguiente paso es la formalización de estas determinaciones en `dictamen-academico-c6.md`.
