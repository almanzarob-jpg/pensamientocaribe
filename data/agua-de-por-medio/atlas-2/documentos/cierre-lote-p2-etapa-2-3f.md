# CIERRE CONSOLIDADO DEL LOTE P2 — 11/11 CASOS

**ATLAS 2.0 · Pensamiento Caribe — Etapa 2.3F**
Dirección Académica de Pensamiento Caribe
Rama `feat/atlas-2-etapa-1-integrada` · HEAD al momento de esta acta `10249602567cbf156ef09131dea8b15569411850` ("Formaliza decisión académica sobre atkinsonearliest")

---

## 1. Estado del lote

**`P2 = 11/11 CASOS RESUELTOS`**

Este documento consolida y declara formalmente el cierre académico de P2, reuniendo en una sola pieza las once decisiones ya aprobadas y ya versionadas. **No crea ninguna decisión nueva, no modifica ninguna decisión anterior, no reinterpreta ninguna lectura, no implementa ninguna clasificación en corpus/cola/matriz/marco/catálogo, y no abre P3.** Cada dato registrado aquí se copia literalmente de su documento versionado de origen; este documento no reinterpreta, no matiza ni añade fundamento nuevo a ninguna decisión.

Se sigue expresamente el mismo precedente metodológico ya establecido por `cierre-global-p1-etapa-2-3.md` (commit `2b77f1a`): un acta de consolidación que **distingue cierre académico de implementación técnica**, y que no modifica ningún documento de control salvo crear la propia acta.

---

## 2. Lista exacta de los 11 casos

Reconstruida documentalmente desde `cola-lectura-pendiente-atlas-2.md` (fila "P2 | 11" en la tabla de distribución por prioridad) y verificada contra los archivos existentes en `data/agua-de-por-medio/atlas-2/documentos/` y el historial de git — no de memoria.

| # | Id | Lectura | Decisión | Commit de cierre |
|---|---|---|---|---|
| 1 | `andersonblackindigenous` | `lectura-andersonblackindigenous-p2-etapa-2-3f.md` | `decision-academica-andersonblackindigenous-p2-etapa-2-3f.md` | `1ff02ae` |
| 2 | `atkinsonearliest` | `lectura-atkinsonearliest-p2-etapa-2-3f.md` | `decision-academica-atkinsonearliest-p2-etapa-2-3f.md` | `1024960` |
| 3 | `cosgrovegarifuna` | `lectura-cosgrovegarifuna-p2-etapa-2-3f.md` | `decision-academica-cosgrovegarifuna-p2-etapa-2-3f.md` | `e1c3323` |
| 4 | `felicianosantos` | `lectura-felicianosantos-p2-etapa-2-3f.md` | `decision-academica-felicianosantos-p2-etapa-2-3f.md` | `c03a409` |
| 5 | `mintzarea` | `lectura-mintzarea-p2-etapa-2-3f.md` | `decision-academica-mintzarea-p2-etapa-2-3f.md` | `dde79f7` |
| 6 | `pinedashipwrecked` | `lectura-pinedashipwrecked-p2-etapa-2-3f.md` + `ampliacion-pinedashipwrecked-relaciones-c1-c4-c7-c8-p2-etapa-2-3f.md` | `decision-academica-pinedashipwrecked-p2-etapa-2-3f.md` | `84d9df2` |
| 7 | `pricemars` | `lectura-pricemars-p2-etapa-2-3f.md` | `decision-academica-pricemars-p2-etapa-2-3f.md` | `97d3a9c` |
| 8 | `schwartz_seaofstorms` | `lectura-schwartz-seaofstorms-p2-etapa-2-3f.md` + `ampliacion-c6-schwartz-seaofstorms-p2-etapa-2-3f.md` | `decision-academica-schwartz-seaofstorms-p2-etapa-2-3f.md` | `50cba6f` |
| 9 | `whiteheadtiger` | `lectura-whiteheadtiger-p2-etapa-2-3f.md` | `decision-academica-whiteheadtiger-p2-etapa-2-3f.md` | `f18468c` |
| 10 | `womenancestors` | `lectura-womenancestors-p2-etapa-2-3f.md` + `auditoria-womenancestors-p2-etapa-2-3f.md` | `decision-academica-womenancestors-p2-etapa-2-3f.md` | `88d2c20` |
| 11 | `wynterblackmetamorphosis` | `lectura-wynterblackmetamorphosis-p2-etapa-2-3f.md` | `decision-academica-wynterblackmetamorphosis-p2-etapa-2-3f.md` | `28cf799` |

Verificado: 11 identificadores, ninguno duplicado, ninguno omitido. Cada fila fue confirmada mediante `git log --oneline -- <archivo>` (commit real de cierre) y `ls`/`git ls-files` (existencia del archivo en el árbol de trabajo). El caso 9 (`whiteheadtiger`) fue el primer caso P2 versionado, según registra `cierre-global-p1-etapa-2-3.md` §11, inmediatamente después del cierre de P1.

**Estado de cada uno: `DECIDIDO / FORMALIZADO / VERSIONADO`.**

---

## 3. Matriz consolidada de decisiones

| Caso | Principal | Secundaria(s) | Frontera | Síntesis | Vacío | Reserva conceptual | Relaciones pendientes | Estado |
|---|---|---|---|---|---|---|---|---|
| `andersonblackindigenous` | C1 | C7, C10 | NO | NO | NO | — | ninguna registrada en la ficha | DECIDIDO/FORMALIZADO/VERSIONADO |
| `atkinsonearliest` | C1 | *ninguna formal* (C9 y C8 = hallazgos, no clasificatorios) | NO | NO | NO | ACULTURACIÓN ≠ CREOLIZACIÓN | `atkinsonearliest`↔`bollandbelize` (POR_CORROBORAR); `atkinsonearliest`↔`whiteheadtiger` (POR_CORROBORAR); `keeganhofman`→`atkinsonearliest` (plausible/heredada, sin reclasificar) | DECIDIDO/FORMALIZADO/VERSIONADO |
| `cosgrovegarifuna` | C9 | C5, C1 | NO | NO | NO | Garífuna ≠ C1 automáticamente; Interseccionalidad ≠ SINTESIS_MULTICORRIENTE | `cosgrovegarifuna`↔`gonzalezsojourners` (POR_CORROBORAR); `cosgrovegarifuna`↔`andersonblackindigenous` (POR_CORROBORAR); `cosgrovegarifuna`↔`afrocentroam` (PLAUSIBLE) | DECIDIDO/FORMALIZADO/VERSIONADO |
| `felicianosantos` | C1 | C7, C9 | NO (regla explícita: no reproduce `whiteheadtiger` C1/C7) | NO | NO | — | ninguna registrada en la ficha | DECIDIDO/FORMALIZADO/VERSIONADO |
| `mintzarea` | C2 | C4 | NO | NO | NO | ÁREA ≠ RUTA; CARIBE ≠ C5; COMPARACIÓN REGIONAL ≠ DIÁSPORA; "CULTURE AREA" ≠ C8; TRANSFORMACIÓN POSTEMANCIPACIÓN ≠ C2 automáticamente | ninguna registrada en la ficha | DECIDIDO/FORMALIZADO/VERSIONADO |
| `pinedashipwrecked` | *ninguna* | — | NO | **SÍ** (C1+C4+C7) | NO | El naufragio del título no activa C5 automáticamente | ninguna nueva creada (ampliación relacional ya incorporada a la síntesis) | DECIDIDO/FORMALIZADO/VERSIONADO |
| `pricemars` | C9 | C8 | NO | NO | NO | VODOU ≠ C9 automáticamente; ÁFRICA ≠ CATEGORÍA RACIAL; OCUPACIÓN ESTADOUNIDENSE ≠ C7 automáticamente; BOVARISMO COLECTIVO ≠ CORRIENTE NUEVA | `pricemars`↔`fischer` (PLAUSIBLE); `pricemars`↔`rebeldestiny` (POR_CORROBORAR) | DECIDIDO/FORMALIZADO/VERSIONADO |
| `schwartz_seaofstorms` | *ninguna* | — | **SÍ** (C6/C7) | NO | NO | — | `schwartz_seaofstorms`↔`mcneillmosquito` (FALSO_POSITIVO, resuelta); `schwartz_seaofstorms`↔`aftershocks` (POR_CORROBORAR) | DECIDIDO/FORMALIZADO/VERSIONADO |
| `whiteheadtiger` | *ninguna* | — | **SÍ** (C1/C7) | NO | NO | — | ninguna registrada en la ficha | DECIDIDO/FORMALIZADO/VERSIONADO |
| `womenancestors` | C10 | C9 | NO (evaluada y rechazada explícitamente: relación jerárquica, no bilateral) | NO | NO | Identidad de la población (Black Carib/garífuna) ≠ corriente argumental | `womenancestors`↔`afrocentroam` (POR_CORROBORAR); `womenancestors`↔`chevannes` (POR_CORROBORAR) | DECIDIDO/FORMALIZADO/VERSIONADO |
| `wynterblackmetamorphosis` | C8 | C4 (secundaria fuerte) | NO | NO | **SÍ**, como hallazgo de expediente — NO adoptado como resolución | INDIGENIZACIÓN ≠ CREOLIZACIÓN | `rifkinfictions`→`wynterblackmetamorphosis` (PLAUSIBLE); `wynterblackmetamorphosis`→`henrycaliban` (POR_CORROBORAR) | DECIDIDO/FORMALIZADO/VERSIONADO |

**`11/11 DECIDIDO / FORMALIZADO / VERSIONADO` → Lote P2 puede marcarse `P2_CERRADO_Y_VERIFICADO`** (sujeto a la verificación git de la §17).

---

## 4. Reservas conceptuales — inventario completo

| Caso | Formulación literal | Corriente implicada | Motivo | ¿Conservar en interfaz/ficha pública futura? |
|---|---|---|---|---|
| `wynterblackmetamorphosis` | **INDIGENIZACIÓN ≠ CREOLIZACIÓN** | C8 | El manuscrito distingue explícitamente ambos procesos; en pasajes concretos atribuye a "creolización/secularización" una función asimilacionista que contrasta con la dinámica afirmativa de la indigenización wynteriana | **Sí, obligatoria** — la ficha de decisión la declara explícitamente vinculante para toda descripción académica futura de la obra |
| `atkinsonearliest` | **ACULTURACIÓN ≠ CREOLIZACIÓN** | C8 | El volumen usa "acculturation" (Esteva-Fabregat 1995), de genealogía antropológica distinta (asimilación cultural norteamericana) de la creolización caribeña (tradición Brathwaite/Glissant); proximidad fenomenológica sin equivalencia terminológica | Sí |
| `cosgrovegarifuna` | Garífuna ≠ C1 automáticamente | C1 | La equivalencia "Garífuna = indígena" queda explícitamente rechazada como regla general; C1 se conserva en este caso concreto por desarrollo textual propio de territorialidad/despojo/settler colonialism, no por la etiqueta étnica | Sí |
| `cosgrovegarifuna` | Interseccionalidad ≠ `SINTESIS_MULTICORRIENTE` | (control general) | El uso nativo de un marco decolonial/interseccional por los autores no obliga al Atlas a declarar síntesis multicorriente ni a crear una corriente homónima | Sí |
| `mintzarea` | ÁREA ≠ RUTA; CARIBE ≠ C5; COMPARACIÓN REGIONAL ≠ DIÁSPORA | C5 | El "área sociocultural" de Mintz se construye por convergencia histórico-estructural, no por circulación/ruta/diáspora | Sí |
| `mintzarea` | "CULTURE AREA" ≠ C8 | C8 | Discutir y rechazar el concepto clásico de "culture area" no equivale a un argumento propio sobre creolización/traducción/opacidad | Sí |
| `mintzarea` | TRANSFORMACIÓN POSTEMANCIPACIÓN ≠ C2 automáticamente | C2/C4 | Distingue persistencia del régimen esclavista (C2) de su transformación posterior (C4) | Sí |
| `pricemars` | VODOU ≠ C9 automáticamente | C9 | En este caso C9 sí procede, pero por demostración estructural (estructura, finalidad, capítulos, prueba de retirada), no por la sola presencia temática de "vodou" | Sí |
| `pricemars` | ÁFRICA ≠ CATEGORÍA RACIAL | (control de raza/población) | — | Sí |
| `pricemars` | OCUPACIÓN ESTADOUNIDENSE ≠ C7 automáticamente | C7 | La ocupación de Haití (1915–1934) aparece en la obra pero no organiza un argumento propio de soberanía/frontera en el sentido normativo de C7 | Sí |
| `pricemars` | CONTEXTO HISTÓRICO DE PRODUCCIÓN ≠ PROBLEMA ORGANIZADOR | (control general) | — | Sí |
| `pricemars` | BOVARISMO COLECTIVO ≠ CORRIENTE NUEVA | (control de vacío) | El concepto propio de Price-Mars ("bovarysme collectif") es herramienta diagnóstica del propio autor, no evidencia de un vacío taxonómico del Atlas | Sí |
| `womenancestors` | Identidad de la población (Black Carib/garífuna) ≠ corriente argumental | C1 | Reformulación general de la misma disciplina que en `cosgrovegarifuna`: la etiqueta étnica de la población estudiada no determina la corriente | Sí |
| `felicianosantos` | Regla de no-precedente-automático C1/C7 | C1/C7 | Explícitamente registrada para impedir que la `FRONTERA_CONSTITUTIVA C1/C7` de `whiteheadtiger` se aplique mecánicamente a otro caso con presencia superficial similar de C1 y C7; cada caso se prueba de nuevo por retirada | Sí |

**Aprendizaje transversal más importante de P2:** en cuatro casos distintos (`wynterblackmetamorphosis`, `atkinsonearliest`, `cosgrovegarifuna`/`womenancestors`) la Dirección Académica tuvo que impedir explícitamente que un término propio del texto (indigenización, aculturación, interseccionalidad, identidad étnica de la población) se tradujera automáticamente al vocabulario normativo del Atlas. Esta disciplina —"la taxonomía se adapta descriptivamente al texto; el texto no se reescribe para hacerlo coincidir artificialmente con la taxonomía" (`wynterblackmetamorphosis`, §5)— es, junto con la de fronteras constitutivas (§5 más abajo), el resultado metodológico más significativo del lote.

---

## 5. Aprendizajes taxonómicos — qué funcionó y qué tensionó C1–C10

Reglas metodológicas explícitas que emergieron o se ratificaron durante P2 (registradas tal como constan en las fichas, sin generalizarlas más allá de lo que cada una autoriza expresamente):

1. **Presencia temática ≠ corriente.** Ratificada en casi todos los casos (`mintzarea` C1 descartada pese al exterminio indígena; `pricemars` C1 descartada pese al exterminio taíno puntual; `cosgrovegarifuna` C4/C7 mantenidas como "dimensiones contextuales sustantivas" pero no clasificatorias).
2. **Capítulo autónomo dentro de un volumen editado ≠ automáticamente corriente secundaria del volumen completo.** Principio nuevo, formulado explícitamente en `atkinsonearliest` §6 y §4 de su decisión, a partir de la autonomía intelectual del Cap. 14 (Saunders y Gray) frente al peso editorial reducido de ese capítulo en el conjunto de la obra.
3. **Ocupación arqueológica (término técnico de sitio) ≠ C7.** Falso positivo léxico verificado explícitamente en `atkinsonearliest`.
4. **Vocabulario nativo del texto (aculturación, indigenización, "culture area", interseccionalidad, bovarismo) ≠ equivalencia automática con el vocabulario normativo del Atlas.** Ver §4.
5. **Identidad étnica/racial de la población estudiada (Garífuna, Black Carib) ≠ corriente argumental automática.** Ratificada en `cosgrovegarifuna` y `womenancestors`.
6. **Movilidad/naufragio/desplazamiento ≠ automáticamente C5.** Formulada explícitamente en `pinedashipwrecked`: el naufragio del título opera como dispositivo territorial y de legitimación soberana, no como ruta/circulación.
7. **`FRONTERA_CONSTITUTIVA` no se transfiere automáticamente entre casos superficialmente similares.** Principio más importante en términos de disciplina procesal: `felicianosantos` presenta C1 y C7 con desarrollo textual real, igual que `whiteheadtiger`, y sin embargo la prueba de retirada llevó a arquitecturas distintas (principal/secundaria en un caso, frontera irreductible en el otro). Cada caso fue probado de nuevo, sin precedente automático.
8. **`SINTESIS_MULTICORRIENTE` no es una salida cómoda ante la dificultad de decidir un principal.** Solo se declaró en 1 de 11 casos (`pinedashipwrecked`), tras someter los seis pares posibles entre cuatro corrientes candidatas a prueba bilateral explícita — no por la sola coexistencia de varias corrientes fuertes.
9. **`VACÍO_TAXONÓMICO_POSIBLE` como hallazgo de expediente no equivale a su adopción como resolución clasificatoria.** Distinción aplicada de forma ejemplar en `wynterblackmetamorphosis`: el hallazgo se conserva íntegro en la lectura, pero la decisión final clasifica igualmente la obra dentro del sistema C1–C10 vigente, documentando la tensión mediante reserva conceptual en lugar de crear una corriente nueva.
10. **Autonomía de un capítulo ≠ corriente secundaria formal de un volumen editado completo** (repetido de la regla 2 por su relevancia como precedente citado explícitamente para futuros casos de obras editadas).

---

## 6. Fronteras constitutivas — casos aprobados

**2 de 11 casos.**

| Caso | Corrientes | Naturaleza de la frontera | Formulación exacta de la decisión |
|---|---|---|---|
| `whiteheadtiger` | C1 / C7 | Irreductibilidad mutua: la persistencia/transformación del mundo político indígena caribe no puede retirarse sin destruir el sujeto y la finalidad de la obra; la disputa de soberanías/fronteras/alianzas inter-imperiales no puede retirarse sin destruir su mecanismo explicativo central | *"C1 y C7 son irreductibles entre sí en `whiteheadtiger`. [...] Ninguna de las dos dimensiones funciona como mero contexto, vehículo o ejemplo de la otra."* No existe corriente principal ni secundaria entre ambas. |
| `schwartz_seaofstorms` | C6 / C7 | Causalidad relacional bidireccional verificada a lo largo de todo el arco cronológico (1492–2012/2014): los huracanes producen/modifican coyunturas de soberanía y control territorial (C6→C7), y los patrones sociopolíticos modifican el impacto de las tormentas (C7→C6) | Establecida tras ampliación correctiva que sometió C6/C7 a "análisis bilateral completo (esquema A–L)", documentando "irreductibilidad mutua y ausencia de jerarquía estable" |

**Límites de aplicación registrados:** ninguna de las dos fronteras se generaliza automáticamente a otros casos con presencia superficial similar de las mismas corrientes (ver regla 7 de §5 — `felicianosantos` es la prueba explícita de que C1/C7 no se aplica mecánicamente).

**Contraste con `matriz-fronteras-c1-c10.md` (vigente al momento de esta acta):** la fila C1/C7 de la matriz registra **0 casos directos / 0 de copresencia**, y la fila C6/C7 registra **1 caso directo (`klein_battleparadise`, ajeno a P2) / 2 de copresencia**. **Ninguna de las dos entradas incorpora todavía las decisiones de `whiteheadtiger` ni de `schwartz_seaofstorms`.** Acción registrada: **`REQUIERE_ACTUALIZACIÓN`** — ver §15.

---

## 7. Síntesis multicorriente — casos aprobados

**1 de 11 casos.**

`pinedashipwrecked`: C1 (Mundos indígenas, invasiones y persistencias), C4 (Postplantación, trabajo y desposesión) y C7 (Soberanías, fronteras y ocupaciones) como corrientes estructurantes simultáneas, **sin jerarquía entre ellas y sin corriente principal**. Justificación académica adoptada: la ampliación probatoria relacional sometió a prueba bilateral los seis pares posibles entre las cuatro corrientes candidatas originales (C1, C4, C7, C8), estableciendo que C8 queda causalmente subordinada a C4 y C7 (por tanto descartada), que C4/C7 mantienen relación recíproca irreductible y no jerárquica, y que C1/C4 y C1/C7 muestran relaciones mixtas sin que C1 se reduzca a secundaria en ninguno de los dos pares. Esto la diferencia de una simple coexistencia de etiquetas: la arquitectura fue sometida a prueba bilateral exhaustiva antes de adoptarse, no asumida por la sola presencia de varias corrientes.

No se convierte esta síntesis en arquitectura principal/secundaria: la decisión académica es explícita en que **no existe corriente principal**.

---

## 8. Vacíos taxonómicos — detectados vs. adoptados

| Caso | Vacío detectado | ¿Adoptado como resolución? | Solución final |
|---|---|---|---|
| `wynterblackmetamorphosis` | `VACÍO_TAXONÓMICO_POSIBLE = SÍ` (hallazgo de la lectura: ninguna corriente domina claramente entre C4 y C8) | **NO** | C8 principal + C4 secundaria fuerte, con reserva conceptual obligatoria (indigenización ≠ creolización); el hallazgo de vacío se conserva íntegro en el expediente, sin borrarse ni reinterpretarse |
| `atkinsonearliest` | Control realizado, resultado negativo | NO aplica (no se detectó vacío) | C1 captura con precisión el argumento; sin necesidad de nueva corriente |
| `cosgrovegarifuna` | Control realizado, resultado negativo | NO aplica | C9 principal + C5/C1 secundarias |
| `mintzarea` | Control realizado, resultado negativo | NO aplica | "Área societal" es formulación metodológica original de Mintz, pero el mecanismo ya está capturado por C2+C4; no se crea una corriente "área sociohistórica" |
| `pricemars` | Control realizado, resultado negativo | NO aplica | El bovarismo colectivo es herramienta diagnóstica, no corriente autónoma |
| `schwartz_seaofstorms` | Control realizado, resultado negativo | NO aplica | Resuelto mediante `FRONTERA_CONSTITUTIVA` C6/C7, sin necesidad de nueva corriente |
| `womenancestors` | Control realizado, resultado negativo | NO aplica | C10 principal + C9 secundaria |
| `andersonblackindigenous`, `felicianosantos`, `pinedashipwrecked`, `whiteheadtiger` | No se registró explícitamente el marcador `VACÍO_TAXONÓMICO` en la ficha (no se documentó como control fallido; la arquitectura adoptada —principal/secundaria, síntesis o frontera— no dejó tensión taxonómica sin resolver) | NO aplica | — |

**P2 produjo exactamente una tensión taxonómica real** (`wynterblackmetamorphosis`), que la Dirección Académica decidió no resolver creando una corriente nueva, sino manteniendo el sistema vigente con reserva conceptual explícita. No se crea ninguna corriente como consecuencia de esta revisión. El aprendizaje transversal es que el sistema C1–C10 resistió sin necesidad de expansión en 10 de 11 casos, y en el undécimo la tensión fue documentada, no resuelta por expansión del catálogo.

---

## 9. Relaciones — corroboradas y pendientes

Ningún caso usó los estados `CORROBORADA` o `CORROBORABLE` de forma explícita en el lote P2; los estados efectivamente utilizados en las fichas fueron `PLAUSIBLE`, `POR_CORROBORAR` y, en un caso, `FALSO_POSITIVO`.

**RELACIONES PENDIENTES DE CORROBORACIÓN DESPUÉS DE P2:**

| Origen | Destino | Tipo actual | Qué lado fue verificado | Qué falta |
|---|---|---|---|---|
| `atkinsonearliest` | `bollandbelize` | POR_CORROBORAR | Lado `atkinsonearliest`: confirma colonialidad/colonización | Falta leer `bollandbelize` |
| `atkinsonearliest` | `whiteheadtiger` | POR_CORROBORAR | Lado `atkinsonearliest`: confirma memoria y espiritualidad | `whiteheadtiger` no se reabre; falta cotejo cruzado |
| `keeganhofman` | `atkinsonearliest` | Plausible/heredada | Cita señalada desde el lado de Keegan y Hofman (no releído en P2) | Verificación directa desde `atkinsonearliest` no ejecutada en esta lectura |
| `cosgrovegarifuna` | `gonzalezsojourners` | POR_CORROBORAR | — | Falta leer `gonzalezsojourners` (caso P1, ya decidido: C5 principal/C3 secundaria — cotejo pendiente) |
| `cosgrovegarifuna` | `andersonblackindigenous` | POR_CORROBORAR, con resonancia temática fuerte (descriptiva, no técnica) | Ambos lados ya decididos en P2 (C9 ppal./C5+C1 sec. vs. C1 ppal./C7+C10 sec.) | Cotejo textual directo no ejecutado |
| `cosgrovegarifuna` | `afrocentroam` | PLAUSIBLE | Sarah England citada directamente en el análisis de migración garífuna | Corroboración bilateral completa requiere cotejo con `afrocentroam` |
| `pricemars` | `fischer` | PLAUSIBLE | — | Corroboración bilateral pendiente |
| `pricemars` | `rebeldestiny` | POR_CORROBORAR | — | Falta leer `rebeldestiny` |
| `schwartz_seaofstorms` | `aftershocks` | POR_CORROBORAR | — | Falta leer `aftershocks` (caso P3) |
| `schwartz_seaofstorms` | `mcneillmosquito` | **FALSO_POSITIVO** (resuelta, no pendiente) | Confirmado: *Mosquito Empires* es de 2010, *Sea of Storms* es de 2015; la cita "Schwartz 1985" corresponde a otra obra | — (cerrada) |
| `womenancestors` | `afrocentroam` | POR_CORROBORAR | — | Falta cotejo |
| `womenancestors` | `chevannes` | POR_CORROBORAR | — | Falta cotejo (caso P1, ya decidido: C9 principal) |
| `rifkinfictions` | `wynterblackmetamorphosis` | PLAUSIBLE | Alta coherencia temática: "new natives in a new world" es el subtítulo literal del manuscrito | No se convierte en corroborada sin lectura directa de `rifkinfictions` (caso P1, ya decidido: `FRONTERA_CONSTITUTIVA` C1/C3) |
| `wynterblackmetamorphosis` | `henrycaliban` | POR_CORROBORAR, con advertencia expresa contra validarla apoyándose en "creolización" | — | No se lee ahora |

**No se ejecuta ninguna de estas lecturas en esta acta de consolidación.**

---

## 10. Control de anacronismo — antecedentes conceptuales identificados

Casos donde se usó explícitamente `ANTECEDENTE_CONCEPTUAL` o donde se documentó una distinción histórico-conceptual equivalente:

| Caso | Término del texto | Concepto posterior al que se aproxima | Por qué no son equivalentes | Fecha relevante |
|---|---|---|---|---|
| `atkinsonearliest` | "acculturation" (Esteva-Fabregat 1995, citado en el volumen) | Creolización (tradición Brathwaite/Glissant) | Genealogía disciplinaria distinta (antropología de la asimilación cultural norteamericana vs. teoría caribeña de la creolización) | Obra de 2006, cita de 1995 |
| `atkinsonearliest` | "creole"/"Creole" | — | Aparece únicamente en títulos bibliográficos citados de terceros (Deagan 1983, Ewan 1991), nunca como categoría analítica propia del volumen | — |
| `wynterblackmetamorphosis` | "indigenización", "cultural reserve", "new natives", "myth of the cultural void" | Creolización | El manuscrito (c. 1970) distingue expresamente indigenización de creolización/secularización, a la que atribuye una función asimilacionista | c. 1970, con evidencia de revisión posterior a 1971 |
| `mintzarea` | "área sociocultural" / "culture area" | Corriente "área sociohistórica" (no existente en el Atlas) | Formulación metodológica original de Mintz (1966); el mecanismo que describe ya está capturado por C2+C4 sin necesidad de nueva categoría | 1966 (traducción usada: 2014–2015) |
| `pricemars` | "bovarysme collectif" (Jules de Gaultier) | — | Herramienta diagnóstica propia de Price-Mars, no anticipación de una corriente del Atlas | 1928 |

Ningún caso del lote P2 requirió proyectar retroactivamente categorías plenamente post-2006 (racial capitalism, Black Atlantic, decolonialidad, necropolítica, interseccionalidad como marco propio, indigeneidad como marco político contemporáneo) sobre un texto anterior sin distinguirlas expresamente como antecedente. Donde el vocabulario nativo de un texto tocaba estos campos semánticos (p. ej. "interseccionalidad" mencionada por los propios autores de `cosgrovegarifuna`, obra de 2021, o el marco decolonial que ellos mismos declaran), se registró la distinción de que el uso nativo por los autores no equivale a una aplicación normativa del Atlas (§4).

---

## 11. Territorialidades — limitaciones del esquema detectadas en P2

| Caso | `l` heredado | Territorio principal real (lectura) | ¿Suficiente? |
|---|---|---|---|
| `atkinsonearliest` | jamaica | Confirmado; comparaciones con Hispaniola, Cuba, Puerto Rico, Amazonía documentadas en prosa | Sí |
| `mintzarea` | puertorico | Alcance pan-caribeño y comparativo (anglófono, francófono, neerlandófono, hispano, Guyanas); `l` refleja solo la sede editorial de la traducción consultada | **NO — `INCIDENCIA_TERRITORIAL_PENDIENTE = SÍ`** |
| `pinedashipwrecked` | bluefields | Trabajo de campo principal verificado: Puerto Cabezas/Bilwi | **NO — `INCIDENCIA_TERRITORIAL_PENDIENTE = SÍ`** |
| `wynterblackmetamorphosis` | jamaica | Confirmado como territorio principal; alcance comparativo secundario documentado en prosa: Trinidad, Estados Unidos, África occidental, Haití | Sí (con incidencia secundaria documentada, no corregida) |
| `andersonblackindigenous` | (heredado no citado en el extracto revisado) | Honduras, confirmado como territorio efectivo del estudio | Sí |
| `pricemars` | haiti | Confirmado como territorio principal; África funciona como genealogía/archivo comparativo, no como territorio del estudio | Sí — `INCIDENCIA_TERRITORIAL_PENDIENTE = NO` (verificación explícita) |
| `cosgrovegarifuna`, `felicianosantos`, `schwartz_seaofstorms`, `whiteheadtiger`, `womenancestors` | — | Sin incidencia territorial marcada como pendiente en la ficha revisada | Sin incidencia registrada |

**LIMITACIONES TERRITORIALES DEL ESQUEMA DETECTADAS EN P2:** el campo único `l` no puede representar (a) multiterritorialidad comparativa sostenida (`wynterblackmetamorphosis`, `atkinsonearliest`), (b) una discrepancia entre sede editorial/de traducción y alcance argumental real (`mintzarea`), ni (c) una discrepancia entre el sitio históricamente nombrado y el sitio etnográfico efectivamente trabajado (`pinedashipwrecked`, Bluefields vs. Puerto Cabezas/Bilwi). Ninguna de estas incidencias fue corregida en `datos-atlas.json`; todas quedan documentadas en prosa dentro de sus respectivas fichas, disponibles para una eventual migración de esquema.

---

## 12. Temporalidades — limitaciones del esquema detectadas en P2

| Caso | `y` heredado | Naturaleza de `y` | Período(s) realmente estudiado(s) |
|---|---|---|---|
| `atkinsonearliest` | 2006 | Año de publicación, confirmado | c. 650–1500 d.C. (prehispánico); 1509–1534 (poscontacto); siglo XX–XXI (patrimonio contemporáneo, Cap. 5) |
| `mintzarea` | 1966 | Año de publicación original; traducción leída es de 2014–2015 | Siglo XVI → mediados del siglo XX |
| `pinedashipwrecked` | (registrado, `periodo_estudiado = null` en `tp01-temporalidad.json`) | — | Histórico: siglo XVII–2006; etnográfico principal: 1992–1993 — **`INCIDENCIA_TEMPORAL_PENDIENTE = SÍ`** |
| `wynterblackmetamorphosis` | c. 1970 (manuscrito inédito) | Fecha de composición, no de publicación (nunca publicado en vida de la autora) | Evidencia de redacción/revisión posterior a 1971 (referencia a Attica) |
| `schwartz_seaofstorms` | (no citado en extracto) | — | 1492–2012/2014, verificado, sin incidencia nueva marcada |
| `cosgrovegarifuna` | 2021 (heredado) | Año de publicación | Marco histórico siglo XVII–presente; trabajo de campo 2015–2019, con antecedentes autobiográficos desde 1992; se sugiere únicamente `VERIFICACIÓN_TEMPORAL_TÉCNICA_PENDIENTE`, sin incidencia fuerte |
| `pricemars` | 1928 | Año de publicación original | Temporalidad registrada correctamente, sin incidencia |
| `andersonblackindigenous`, `felicianosantos`, `whiteheadtiger`, `womenancestors` | — | Sin incidencia temporal marcada como pendiente en el extracto revisado | — |

**El caso más claro de insuficiencia del campo único `y` es `pinedashipwrecked`**, con incidencia temporal pendiente formalmente marcada. Los demás casos multitemporal (`atkinsonearliest`, `mintzarea`, `wynterblackmetamorphosis`) documentan la multiplicidad en prosa sin declarar incidencia técnica, por no existir discrepancia demostrada contra el campo técnico correspondiente (`tp01-temporalidad.json`, donde existe).

---

## 13. Problemas de metadata — incluidos volúmenes editados y particularidades bibliográficas

- **Imposibilidad actual de representar principal/secundaria/frontera/síntesis/reserva por obra**: confirmada de forma consistente en las 11 fichas mediante inspección directa de la entrada de cada obra en `datos-atlas.json` (campos `id, k, t, a, y, f, l, tr, ap` únicamente) y por la nota explícita de `esquema-datos-propuesto.json` ("Esquema técnico final de la Etapa 1... No se ha aplicado a datos-atlas.js ni a datos-atlas.json"). Es la limitación de esquema más citada del lote, presente en las 11 decisiones.
- **Volúmenes editados multiautor**: `atkinsonearliest` (Lesley-Gail Atkinson, ed., ~15 autores/as de capítulo) es el caso paradigmático; el campo `a` representa válidamente la responsabilidad editorial pero no la autoría real de cada capítulo. No se modificó ni se improvisó una lista de autores en el corpus.
- **Discrepancias de ISBN**: `atkinsonearliest` presenta tres valores de ISBN distintos entre el nombre del archivo fuente, el metadato del PDF y la página de derechos impresa — documentado en su ficha como `DISCREPANCIA_BIBLIOGRÁFICA_DOCUMENTADA — SIN EFECTO CLASIFICATORIO`.
- **Manuscrito inédito de circulación restringida**: `wynterblackmetamorphosis` (fotocopia, nunca publicado en vida de la autora) requirió verificación bibliográfica desde el objeto físico y no desde la reputación posterior de la autora — método aplicado consistentemente en todo P2.
- **Traducción vs. edición original**: `mintzarea` (original 1966, traducción consultada 2014–2015) generó la incidencia territorial documentada en §11.

---

## 14. Limitaciones técnicas — qué decisiones todavía no están implementadas en `datos-atlas.json`

**Las 11 decisiones del lote P2 están completas académicamente, pero NINGUNA está implementada en `datos-atlas.json`.** Ninguna de las 11 fichas modificó el corpus técnico. Ninguna de las 11 fichas creó campos nuevos ni implementó la clasificación de forma ad hoc. Todas documentan expresamente la misma incompatibilidad de esquema (§13).

Se distingue expresamente, replicando el precedente de `cierre-global-p1-etapa-2-3.md` §10:

- **CIERRE ACADÉMICO** — completo: las once decisiones están tomadas, fundamentadas y versionadas en git.
- **IMPLEMENTACIÓN TÉCNICA** — separada, todavía pendiente, **no autorizada por esta acta**: la sincronización de estas once decisiones (y de las quince de P1) con `datos-atlas.json`, `cola-lectura-pendiente-atlas-2.md`, `matriz-fronteras-c1-c10.md` y `catalogos-atlas-2.json` permanece pendiente, sujeta al plan general de implementación técnica.

---

## 15. Documentos de control — estado

| Documento | Estado frente a P2 | Acción |
|---|---|---|
| `cola-lectura-pendiente-atlas-2.md` | Los 11 casos P2 siguen figurando con estado `PENDIENTE_NO_LEIDA` en la tabla vigente (verificado por lectura directa de las filas 49–59 de la tabla de Grupo A) | **`REQUIERE_ACTUALIZACIÓN`** — no ejecutada en esta acta. No existe precedente de edición de la cola en la fase de consolidación (el cierre de P1 tampoco la editó); se documenta el pendiente y no se improvisa. |
| `matriz-fronteras-c1-c10.md` | Filas C1/C7 (0 directos/0 copresencia) y C6/C7 (1 directo ajeno a P2/2 copresencia) no incorporan `whiteheadtiger` ni `schwartz_seaofstorms` | **`REQUIERE_ACTUALIZACIÓN`** — no ejecutada en esta acta, mismo criterio que arriba |
| `marco-academico-consolidado-atlas-2.md` | Registra los 11 casos P2 en su tabla de casos pendientes (líneas 321–333) con estado "abierto"/"sin decidir"/"pertenencia sin decidir" — no refleja ninguna de las 11 decisiones ya tomadas | **`REQUIERE_ACTUALIZACIÓN`** — no ejecutada en esta acta |
| `catalogos-atlas-2.json` | Todas las corrientes marcadas `"provisional": true`; **dos denominaciones difieren de las usadas consistentemente en las 11 decisiones**: C1 figura como *"Invasiones, despojos y mundos indígenas"* en el catálogo, pero las 11 fichas usan de forma uniforme *"Mundos indígenas, invasiones y persistencias"* (denominación tomada de `dictamen-academico-c1.md`); C3 figura como *"Fugas, cimarronajes y emancipaciones"* en el catálogo, mientras el proyecto usa *"Fuga, cimarronaje, emancipación y prácticas de libertad"`. Las ocho corrientes restantes coinciden exactamente. | **`OBSERVACIÓN PARA FUTURA REVISIÓN DEL CATÁLOGO`** — no ejecutada en esta acta (ver §16) |
| `esquema-datos-propuesto.json` | Ya documenta la nota de incompatibilidad citada en §13/§14; no requiere cambio adicional por esta acta | `NO_APLICA` |
| `datos-atlas.json` | Intacto; no modificado por ninguna de las 11 decisiones ni por esta acta | `NO_APLICA` en esta fase (ver §14) |

---

## 16. Observaciones de P2 para futura revisión del catálogo

Sin ejecutarlas en esta acta:

1. **Divergencia de denominación C1**: catálogo dice *"Invasiones, despojos y mundos indígenas"*; el proyecto opera de facto con *"Mundos indígenas, invasiones y persistencias"* (fuente: `dictamen-academico-c1.md`, usada uniformemente en las 11 decisiones P2 y en las 15 de P1). Se recomienda homologar `catalogos-atlas-2.json` a la denominación normativa vigente del dictamen, no al revés.
2. **Divergencia de denominación C3**: catálogo dice *"Fugas, cimarronajes y emancipaciones"*; uso operativo *"Fuga, cimarronaje, emancipación y prácticas de libertad"*.
3. **Ausencia de campo de clasificación por obra**: confirmada de forma reiterada y consistente en las 11 fichas; es la limitación de esquema más citada de todo el lote (§13, §14).
4. **`"provisional": true` en las diez corrientes**: ninguna decisión P2 (ni P1) resolvió esta condición provisional; se mantiene sin cambios.

---

## 17. Verificación Git

**Estado inicial** (antes de crear este documento):

```
git branch --show-current
feat/atlas-2-etapa-1-integrada

git status --short
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md

git rev-parse HEAD
10249602567cbf156ef09131dea8b15569411850

git rev-parse origin/feat/atlas-2-etapa-1-integrada
10249602567cbf156ef09131dea8b15569411850
```

`HEAD = origin`. Confirmado que los 11 commits de cierre P2 (§2) figuran en `git log --oneline -20`. Los dos históricos no rastreados (`expediente-evidencia-c7.md`, `ficha-decision-c4.md`) permanecen intactos y fuera de esta operación, tal como en todas las fases anteriores de este lote.

**Estado final** se registra en el informe de entrega, tras el staging selectivo, commit y push de este documento único.

---

## 18. Declaración de cierre

**`P2_CERRADO_Y_VERIFICADO`**, sujeta a la verificación git final (staging exclusivo de este documento de consolidación, commit con el mensaje exacto instruido, y coincidencia `HEAD = origin` tras el push), registrada en el informe de entrega correspondiente.

**No se abrió P3. No se seleccionaron títulos nuevos. No se leyó ninguna obra nueva. No se modificó la interfaz. No se inició ninguna migración de datos. No se inició la Etapa 3.**

La Dirección Académica revisará este cierre consolidado y autorizará expresamente la siguiente etapa del Atlas 2.0.
