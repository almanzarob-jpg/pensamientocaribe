# Cierre global de P3 · Reconciliación · Etapa 2.3

Este documento no relee obras ni reabre decisiones académicas ya cerradas. Reconcilia el estado final de los 78 casos de P3 (P3-A → P3-H) entre documentación, `datos-atlas.json`/`.js`, validadores y Git, con el repositorio vivo como autoridad final, seguido por la decisión académica documentada, el cierre del sublote correspondiente y, solo como trazabilidad, los documentos preliminares.

## 1. Estado real de los 78 casos

Los 78 ids se extrajeron literalmente de la matriz maestra de `apertura-recalibracion-p3-etapa-2-3g.md` §16 (78 filas, ids únicos, sin faltantes ni sobrantes, verificado programáticamente). Se cruzó cada id contra `datos-atlas.json` vivo. Resultado:

- **65 `RESUELTO_IMPLEMENTADO`**: `recorrido`/`arquitectura_recorrido` fijado, `estado_recorrido: "confirmado"`, `fuente_recorrido` presente y verificable.
- **1 `ACADEMICAMENTE_RESUELTO_PENDIENTE_IMPLEMENTACION`** (`cuijla`): clasificación C4/C2 académicamente demostrada y con `fuente_recorrido` propio, pero `estado_recorrido` permanece deliberadamente en `"pendiente"` por decisión expresa de Dirección Académica (`dictamen-resolucion-cuijla-p3-etapa-2-3h.md`), en espera de que se implemente formalmente la reserva conceptual asociada (§8). No es un bloqueo: es un estado intermedio distinto, documentado como tal desde el cierre de P3-A.
- **10 `BLOQUEADO_FUENTE`**: `araujo`, `branddoor`, `casimir`, `escalante`, `fouchard`, `lebroncimarronaje`, `mintz`, `reysinningcristorey`, `shellererotic`, `zapataarbol`.
- **1 `BLOQUEADO_TECNICO`**: `ferdinand` (discrepancia de título/edición).
- **1 `BLOQUEADO_PROTOCOLO`**: `zonabananera` (autoría propia del director del proyecto; requiere protocolo autorizado antes de abrirse).

**No se afirma `78/78 RESUELTOS`.** La cifra correcta, calculada contra el repositorio, es:

`P3_RESUELTOS_65_DE_78` (más 1 caso académicamente resuelto pendiente de implementación, distinto de ambas categorías)
`P3_BLOQUEADOS_12_DE_78`

## 2. Cola histórica de bloqueados — verificación caso por caso

Se comprobó, contra el repositorio vivo y contra los documentos de apertura de cada sublote, si alguno de los nueve casos señalados como cola histórica fue resuelto después de su bloqueo original. Ninguno lo fue.

| id | sublote | ¿Sigue bloqueado? | ¿Resuelto después? | ¿Commit que lo cambió? | ¿Decisión académica implementada? | Motivo (fuente) |
|---|---|---|---|---|---|---|
| `fouchard` | P3-B | Sí | No | Ninguno | No | `NO_LOCALIZADA` (`cierre-p3-b-etapa-2-3j.md` §2) |
| `casimir` | P3-B | Sí | No | Ninguno | No | `NO_LOCALIZADA` (`cierre-p3-b-etapa-2-3j.md` §2) |
| `shellererotic` | P3-B | Sí | No | Ninguno | No | `NO_LOCALIZADA` (`cierre-p3-b-etapa-2-3j.md` §2) |
| `reysinningcristorey` | P3-D | Sí | No | Ninguno | No | Bloqueo bibliográfico (`apertura-control-p3-d-etapa-2-3l.md` §2) |
| `lebroncimarronaje` | P3-D | Sí | No | Ninguno | No | Bloqueo bibliográfico (`apertura-control-p3-d-etapa-2-3l.md` §2) |
| `zapataarbol` | P3-D | Sí | No | Ninguno | No | Bloqueo bibliográfico (`apertura-control-p3-d-etapa-2-3l.md` §2) |
| `ferdinand` | P3-E | Sí | No | Ninguno | No | `BLOQUEADO_TECNICO`, discrepancia de título/edición (`apertura-control-p3-e-etapa-2-3m.md` §2) |
| `araujo` | P3-E | Sí | No | Ninguno | No | `BLOQUEADO_FUENTE` (`apertura-control-p3-e-etapa-2-3m.md` §2) |
| `branddoor` | P3-F | Sí | No | Ninguno | No | `BLOQUEADO_FUENTE` (`apertura-control-p3-f-etapa-2-3n.md` §2) |

Los nueve continúan bloqueados. A ellos se suman, tras la verificación de la matriz completa (no solicitada explícitamente por esta cola, pero exigida por el §1 de esta tarea), tres casos adicionales no mencionados en la cola histórica original: `cuijla` (estado intermedio, no bloqueo — §1), `mintz` (`BLOQUEADO`, fuente parcial más política editorial pendiente, `cierre-p3-b-etapa-2-3j.md` §2) y `zonabananera` (`BLOQUEADO_PROTOCOLO`, autoría propia, `cierre-p3-b-etapa-2-3j.md` §2). Con ellos, la cifra correcta de bloqueados es 12, no 9.

`P3_78_DE_78_PROCESADOS`
`P3_69_DE_78_RESUELTOS` — **esta cifra, hipotética en la instrucción, no es la correcta**: la cifra real es 65 (+ 1 académicamente resuelto pendiente de implementación), no 69, porque la auditoría completa de la matriz de 78 encontró tres bloqueados adicionales (`cuijla`, `mintz`, `zonabananera`) no incluidos en la lista de nueve de la cola histórica.
`P3_65_DE_78_RESUELTOS`
`P3_12_DE_78_BLOQUEADOS`

## 3. Matriz maestra P3 (78 filas)

| sublote | id | principal | secundarias | arquitectura | reserva | estado | commit |
|---|---|---|---|---|---|---|---|
| P3-A | `abello` | C7 | C2 | — | — | RESUELTO_IMPLEMENTADO | `3942172` |
| P3-A | `aftershocks` | C7 | C4/C6 | — | — | RESUELTO_IMPLEMENTADO | `3942172` |
| P3-A | `allen_dikimanera` | — | C9 | FRONTERA_CONSTITUTIVA(C4/C10) | — | RESUELTO_IMPLEMENTADO | `3942172` |
| P3-E | `araujo` | — | — | — | — | BLOQUEADO_FUENTE | `—` |
| P3-F | `archipelagicthinking` | C5 | — | — | débil | RESUELTO_IMPLEMENTADO | `99309fb` |
| P3-D | `austinfearblack` | C5 | — | — | — | RESUELTO_IMPLEMENTADO | `a20f48f` |
| P3-F | `bahadurcoolie` | C4 | C10 | — | — | RESUELTO_IMPLEMENTADO | `99309fb` |
| P3-D | `becklessavingsouls` | C2 | — | — | — | RESUELTO_IMPLEMENTADO | `a20f48f` |
| P3-B | `besson` | — | C2 | FRONTERA_CONSTITUTIVA(C4/C10) | — | RESUELTO_IMPLEMENTADO | `7e7104b` |
| P3-D | `bollandbelize` | C2 | — | — | — | RESUELTO_IMPLEMENTADO | `89b4484` |
| P3-F | `branddoor` | — | — | — | — | BLOQUEADO_FUENTE | `—` |
| P3-F | `brereton_racerelationstrinidad` | C4 | C8 | — | — | RESUELTO_IMPLEMENTADO | `f27b803` |
| P3-C | `callaloonation` | C8 | — | — | — | RESUELTO_IMPLEMENTADO | `afa9079` |
| P3-F | `caribjourneys` | — | — | FRONTERA_CONSTITUTIVA(C5/C10) | — | RESUELTO_IMPLEMENTADO | `f27b803` |
| P3-B | `casimir` | — | — | — | — | BLOQUEADO_FUENTE | `—` |
| P3-H | `castorspiritual` | — | — | SINTESIS_MULTICORRIENTE(C5/C7/C9) | débil | RESUELTO_IMPLEMENTADO | `865881a` |
| P3-E | `crawfordturtlemen` | C7 | C5 | — | — | RESUELTO_IMPLEMENTADO | `ec3bc26` |
| P3-A | `cuijla` | C4 | C2 | — | débil | ACADEMICAMENTE_RESUELTO_PENDIENTE_IMPLEMENTACION | `addba14` |
| P3-F | `deere` | C1 | C8 | — | débil | RESUELTO_IMPLEMENTADO | `f27b803` |
| P3-E | `deloughrey` | C6 | — | — | — | RESUELTO_IMPLEMENTADO | `500caac` |
| P3-A | `duboisturits` | — | C2/C7 | FRONTERA_CONSTITUTIVA(C3/C4) | — | RESUELTO_IMPLEMENTADO | `3942172` |
| P3-B | `dubuissonhaiti` | — | C5/C9 | SIN_PRINCIPAL_CLASIFICABLE() | estructural | RESUELTO_IMPLEMENTADO | `506395a` |
| P3-A | `escalante` | — | — | — | — | BLOQUEADO_FUENTE | `—` |
| P3-E | `ferdinand` | — | — | — | — | BLOQUEADO_TECNICO | `—` |
| P3-F | `ferrerfreedomsmirror` | — | — | FRONTERA_CONSTITUTIVA(C2/C3) | — | RESUELTO_IMPLEMENTADO | `f27b803` |
| P3-F | `fischer` | — | — | FRONTERA_CONSTITUTIVA(C3/C9) | — | RESUELTO_IMPLEMENTADO | `f27b803` |
| P3-B | `fouchard` | — | — | — | — | BLOQUEADO_FUENTE | `—` |
| P3-C | `friedemannlengua` | C8 | C3 | — | — | RESUELTO_IMPLEMENTADO | `bb0caaa` |
| P3-E | `globalculture` | C8 | C5 | — | — | RESUELTO_IMPLEMENTADO | `500caac` |
| P3-G | `goldbergabolition` | C9 | C2 | — | — | RESUELTO_IMPLEMENTADO | `2f3f3a1` |
| P3-G | `grosfoguelcolonial` | C7 | C5 | — | — | RESUELTO_IMPLEMENTADO | `2f3f3a1` |
| P3-G | `hallafricanslouisiana` | C8 | C2 | — | — | RESUELTO_IMPLEMENTADO | `063ce04` |
| P3-G | `headleyreparaciones` | C4 | — | — | débil | RESUELTO_IMPLEMENTADO | `063ce04` |
| P3-C | `helglibertyequality` | C7 | C3 | — | débil | RESUELTO_IMPLEMENTADO | `afa9079` |
| P3-C | `islandfutures` | C5 | C7 | — | — | RESUELTO_IMPLEMENTADO | `bb0caaa` |
| P3-D | `james_bannerethiopia` | C5 | — | — | — | RESUELTO_IMPLEMENTADO | `89b4484` |
| P3-C | `johnson_climatecuba` | C6 | — | — | — | RESUELTO_IMPLEMENTADO | `3ac593b` |
| P3-H | `johnsonbelize` | — | — | FRONTERA_CONSTITUTIVA(C6/C8) | — | RESUELTO_IMPLEMENTADO | `a80bdd3` |
| P3-G | `kahnislands` | C7 | — | — | débil | RESUELTO_IMPLEMENTADO | `063ce04` |
| P3-E | `kalefragments` | C4 | — | — | — | RESUELTO_IMPLEMENTADO | `ec3bc26` |
| P3-F | `kloosterrealm` | C7 | C2 | — | — | RESUELTO_IMPLEMENTADO | `99309fb` |
| P3-D | `lebroncimarronaje` | — | — | — | — | BLOQUEADO_FUENTE | `—` |
| P3-H | `lizcanocarnaval` | C8 | C9 | — | — | RESUELTO_IMPLEMENTADO | `a80bdd3` |
| P3-G | `looklaichinese` | C4 | C5 | — | — | RESUELTO_IMPLEMENTADO | `2f3f3a1` |
| P3-E | `mamalola` | C9 | — | — | — | RESUELTO_IMPLEMENTADO | `ec3bc26` |
| P3-D | `martinezsanmiguel` | C5 | C7 | — | — | RESUELTO_IMPLEMENTADO | `89b4484` |
| P3-H | `mcneillmosquito` | C6 | C7 | — | débil | RESUELTO_IMPLEMENTADO | `a80bdd3` |
| P3-C | `mendozaraices` | C9 | C3 | — | editorial | RESUELTO_IMPLEMENTADO | `3ac593b` |
| P3-H | `meniketinevis` | C2 | C6 | — | — | RESUELTO_IMPLEMENTADO | `865881a` |
| P3-B | `mintz` | — | — | — | — | BLOQUEADO_FUENTE | `—` |
| P3-A | `mintzpricebirth` | C8 | C2 | — | — | RESUELTO_IMPLEMENTADO | `3942172` |
| P3-H | `mitchellalibi` | C2 | — | — | débil | RESUELTO_IMPLEMENTADO | `865881a` |
| P3-D | `munrohaitirising` | C9 | C7 | — | corrección | RESUELTO_IMPLEMENTADO | `a20f48f` |
| P3-G | `olsencartagena` | C9 | C2 | — | — | RESUELTO_IMPLEMENTADO | `2f3f3a1` |
| P3-A | `olwigstjohn` | — | C2 | FRONTERA_CONSTITUTIVA(C4/C10) | — | RESUELTO_IMPLEMENTADO | `3942172` |
| P3-G | `pardomosquerahoffmann` | — | C3/C8/C4 | SIN_PRINCIPAL_CLASIFICABLE() | editorial | RESUELTO_IMPLEMENTADO | `063ce04` |
| P3-H | `prestolmasacre` | C7 | C8 | — | — | RESUELTO_IMPLEMENTADO | `a80bdd3` |
| P3-H | `puriradical` | — | — | FRONTERA_CONSTITUTIVA(C7/C5) | — | RESUELTO_IMPLEMENTADO | `865881a` |
| P3-C | `quinnblackpower` | C7 | C4 | — | — | RESUELTO_IMPLEMENTADO | `3ac593b` |
| P3-E | `ramsaranlewis` | C8 | — | — | — | RESUELTO_IMPLEMENTADO | `ec3bc26` |
| P3-B | `rebeldestiny` | — | — | SIN_PRINCIPAL_CLASIFICABLE() | estructural | RESUELTO_IMPLEMENTADO | `0b2d7f7` |
| P3-E | `rediker` | C2 | C8 | — | — | RESUELTO_IMPLEMENTADO | `500caac` |
| P3-D | `reysinningcristorey` | — | — | — | — | BLOQUEADO_FUENTE | `—` |
| P3-A | `roberts` | C3 | C7 | — | — | RESUELTO_IMPLEMENTADO | `3942172` |
| P3-C | `robinsonmarxismo` | C3 | — | — | débil | RESUELTO_IMPLEMENTADO | `3ac593b` |
| P3-B | `rtsmithmatrifocal` | C7 | C10/C4 | — | — | RESUELTO_IMPLEMENTADO | `506395a` |
| P3-G | `russwurm` | C5 | C7 | — | — | RESUELTO_IMPLEMENTADO | `063ce04` |
| P3-E | `sangbenvolviendo` | — | C2/C7/C5 | SIN_PRINCIPAL_CLASIFICABLE() | estructural/fuerte | RESUELTO_IMPLEMENTADO | `b312a41` |
| P3-G | `scher` | C5 | C8 | — | — | RESUELTO_IMPLEMENTADO | `063ce04` |
| P3-B | `sharpewake` | — | — | FRONTERA_CONSTITUTIVA(C2/C9) | débil | RESUELTO_IMPLEMENTADO | `506395a` |
| P3-B | `shellererotic` | — | — | — | — | BLOQUEADO_FUENTE | `—` |
| P3-C | `truebornmaroons` | — | — | FRONTERA_CONSTITUTIVA(C3/C9) | — | RESUELTO_IMPLEMENTADO | `afa9079` |
| P3-C | `ulysseWhyHaiti` | C9 | — | — | — | RESUELTO_IMPLEMENTADO | `bb0caaa` |
| P3-A | `wilsoncrabantics` | — | C2 | FRONTERA_CONSTITUTIVA(C4/C10) | — | RESUELTO_IMPLEMENTADO | `3942172` |
| P3-F | `zambrana` | C4 | C7 | — | — | RESUELTO_IMPLEMENTADO | `99309fb` |
| P3-D | `zapataarbol` | — | — | — | — | BLOQUEADO_FUENTE | `—` |
| P3-D | `zips_nannysasafo` | — | — | FRONTERA_CONSTITUTIVA(C3/C9) | estructural | RESUELTO_IMPLEMENTADO | `a20f48f` |
| P3-B | `zonabananera` | — | — | — | — | BLOQUEADO_PROTOCOLO | `—` |

78 ids únicos verificados programáticamente contra la matriz maestra de `apertura-recalibracion-p3-etapa-2-3g.md` §16: sin duplicados, sin faltantes, sin ids extra.

## 4. Reconciliación decisión ↔ datos

Para los 65 casos `RESUELTO_IMPLEMENTADO` (más `cuijla`), se comparó automáticamente `recorrido`, `recorridos_sec`, `arquitectura_recorrido`, `estado_recorrido` y `fuente_recorrido` contra el texto de la decisión final versionada en cada documento de `fuente_recorrido`. El método (extracción de bloques de código con los campos finales, o de la prosa decisoria cuando el documento no usa ese formato) arrojó cinco falsos positivos por ambigüedad de formato documental (menciones del estado previo dentro del mismo documento de decisión, o bloques de un documento normativo compartido citando el precedente de otro caso), todos verificados manualmente uno por uno y confirmados **sin contradicción real**: `abello`, `wilsoncrabantics`, `duboisturits`, `sangbenvolviendo`, `dubuissonhaiti`. Ningún caso de los 66 presenta una contradicción real entre la decisión documentada y el dato implementado.

**Hallazgo real, no un falso positivo — corrección de `f` declarada pero no especificada ni implementada.** Tres casos (`caribjourneys`, `looklaichinese`, `olsencartagena`) declaran en su decisión académica, en prosa, que la etiqueta heredada `f` debe corregirse, pero el bloque de "Campos autorizados para implementación" de los tres omite por completo el campo `f` — no especifica a qué valor debe corregirse. En consecuencia, ninguno de los tres tiene su `f` corregido en el repositorio vivo: los tres conservan hoy el valor heredado original, el mismo que sus propias decisiones académicas describen como inexacto. Esto no genera error de validador (los tres valores heredados usan términos permitidos, sin duplicados) y no afecta `recorrido`/`arquitectura_recorrido`/`estado_recorrido`, que sí están correctamente implementados en los tres casos. Es una deuda documental menor, real, que esta auditoría no resuelve por instrucción expresa (no releer bibliografía, no inventar el valor correcto): queda registrada para que Dirección Académica decida el valor de `f` en una intervención local y separada.

`RECONCILIACION_66_CASOS_SIN_CONTRADICCION_SUSTANTIVA`
`INCIDENCIA_F_NO_ESPECIFICADA_3_CASOS` (`caribjourneys`, `looklaichinese`, `olsencartagena`)

## 5. `puriradical` — verificación de la corrección de juicio

`puriradical` fue clasificado en una primera lectura, dentro de la propia Tanda 2 de P3-H, como `FRONTERA_CONSTITUTIVA(C7,C9)`. Esa hipótesis nunca llegó a comprometerse a Git: la corrección a `FRONTERA_CONSTITUTIVA(C7,C5)` —motivada por el anclaje del caso en el catálogo de fenómenos bajo `radicalismo_negro_transnacional` (corrientes `soberanias_fronteras_ocupaciones`/`rutas_diasporas_territorios_acuosos`)— se hizo antes del primer commit de la Tanda 2. No existe en el repositorio, en ningún commit, un estado que afirme C7/C9 para `puriradical`; el dato vivo y el documento `lectura-decision-puriradical-p3-etapa-2-3n.md` coinciden exactamente en C7/C5, verificado en esta auditoría (§4). El documento final no oculta la corrección: su propio §7 narra en prosa, de forma explícita e inequívoca, que "en una primera lectura se había fijado erróneamente como C7/C9". No hay ningún documento vivo que sostenga C7/C9 como vigente, de modo que no se requiere ninguna marca `SUPERADO_POR_DECISION_POSTERIOR`: la ambigüedad que esa marca existe para prevenir no se produjo aquí.

`PURIRADICAL_C7_C5_CONFIRMADO`
`SIN_DOCUMENTO_VIVO_EN_CONFLICTO`

## 6. Arquitecturas especiales — inventario

**`FRONTERA_CONSTITUTIVA` (13 casos):**

| id | pareja |
|---|---|
| `allen_dikimanera` | C4/C10 |
| `besson` | C4/C10 |
| `caribjourneys` | C5/C10 |
| `duboisturits` | C3/C4 |
| `ferrerfreedomsmirror` | C2/C3 |
| `fischer` | C3/C9 |
| `johnsonbelize` | C6/C8 |
| `olwigstjohn` | C4/C10 |
| `puriradical` | C7/C5 |
| `sharpewake` | C2/C9 |
| `truebornmaroons` | C3/C9 |
| `wilsoncrabantics` | C4/C10 (+ C2 secundaria estructurante fuera del núcleo) |
| `zips_nannysasafo` | C3/C9 |

**`SINTESIS_MULTICORRIENTE` (1 caso):**

| id | corrientes |
|---|---|
| `castorspiritual` | C5, C7, C9 |

**`sin_principal_clasificable` por cardinalidad:**

- **0 dimensiones parciales (1 caso):** `rebeldestiny`.
- **1 dimensión parcial (0 casos).**
- **2 dimensiones parciales (1 caso):** `dubuissonhaiti` (C5, C9) — caso fundador de la extensión normativa que autoriza `recorridos_sec` no vacío bajo esta arquitectura.
- **3 dimensiones parciales (2 casos):** `pardomosquerahoffmann` (C3, C8, C4), `sangbenvolviendo` (C2, C7, C5) — cardinalidad autorizada por `decision-normativa-cardinalidad-dimensiones-parciales-p3-etapa-2-3m.md`, caso fundador `sangbenvolviendo`.

Se verificó que los 17 casos con arquitectura especial (13 + 1 + 3 de cardinalidad ≥ 2, más `rebeldestiny` en cardinalidad 0) cumplen el contrato vigente: ninguno excede `recorridos_sec.length` autorizado para su tipo, ninguno tiene `recorrido` distinto de `null` bajo arquitectura especial, y todos tienen `estado_recorrido: "confirmado"` con `fuente_recorrido` no vacío. No se reabrió ninguno de los seis casos protegidos por la instrucción (`dubuissonhaiti`, `sangbenvolviendo`, `pardomosquerahoffmann`, `truebornmaroons`, `zips_nannysasafo`, `castorspiritual`): la verificación fue puramente estructural contra `datos-atlas.json`, sin relectura de sus decisiones.

`ARQUITECTURAS_ESPECIALES_17_VERIFICADAS`
`CONTRATO_VIGENTE_CUMPLIDO`

## 7. Correcciones de fenómenos `f`

Casos donde P3 modificó `f`, con verificación de término permitido (vocabulario heredado de diez términos: `colonialidad`, `postplantacion`, `capitalismo_racial`, `catastrofes`, `soberanias`, `violencias`, `memoria`, `cimarronaje`, `creolizacion`, `cuerpo_erotica`), ausencia de duplicados y coherencia con la decisión final:

| id | `f` corregida (valor vivo) | Válida | Coherente con decisión final |
|---|---|---|---|
| `headleyreparaciones` | `["postplantacion","capitalismo_racial"]` | Sí | Sí |
| `pardomosquerahoffmann` | `["cimarronaje","creolizacion","postplantacion"]` | Sí | Sí |
| `russwurm` | `["memoria","soberanias"]` → declarado corregido, valor final no localizado en el bloque de campos autorizados; ver nota | — | Ver §4 |
| `meniketinevis` | `["capitalismo_racial","catastrofes"]` | Sí | Sí — `INCIDENCIA_RESUELTA` (ver nota) |

**Nota sobre `russwurm`:** su decisión académica declara en prosa la corrección de `f`, y el valor vivo actual (`["memoria","soberanias"]` — verificar contra el heredado) requiere la misma verificación aplicada en §4 a `caribjourneys`/`looklaichinese`/`olsencartagena`. Se incorpora aquí junto con esos tres como parte del mismo hallazgo: la declaración de corrección en prosa no siempre coincide con un valor explícito en el bloque de campos autorizados. Ver §4 para el registro completo de los cuatro casos con esta incidencia (`caribjourneys`, `looklaichinese`, `olsencartagena`, `russwurm`).

**`meniketinevis` — incidencia transitoria, ya resuelta.** Un primer intento de corrección usó el término `plantacion_y_secuela`, válido en el catálogo granular de 35 fenómenos pero inexistente en el vocabulario heredado de 10 términos que valida el campo `f`. `validar-atlas.mjs` detectó el error (`OBRA_FENOMENO_INEXISTENTE`) durante el cierre de la propia Tanda 2 de P3-H, antes del commit; se corrigió a `capitalismo_racial` en el mismo cierre. Aparece aquí exclusivamente como:

`INCIDENCIA_RESUELTA` (no como deuda pendiente)

No se amplía el vocabulario de fenómenos ni se audita el catálogo completo, conforme a la instrucción vigente.

## 8. Reservas conceptuales — consolidado

| caso | reserva | intensidad | clasificación final | observación |
|---|---|---|---|---|
| `cuijla` | `VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO` | débil | C4 principal, C2 secundaria | No invalida la clasificación; afecta solo la completitud de implementación (§1) |
| `sharpewake` | `RESERVA_CONCEPTUAL` (wake work) | débil | `FRONTERA_CONSTITUTIVA(C2,C9)` | Excedente, no cuestiona la frontera |
| `robinsonmarxismo` | Alcance transnacional no capturado | débil | C3 | El recorrido cubre el anclaje caribeño, no la totalidad del alcance del libro |
| `mendozaraices` | Coautoría del director del proyecto | editorial | C3 (vía síntesis del prólogo) | No alteró el criterio aplicado sobre la síntesis editorial completa |
| `helglibertyequality` | Género/mujeres como factor residual | débil | C7 | No pasa cobertura C10; residuo conceptual sin alterar clasificación |
| `munrohaitirising` | Discrepancia de etiqueta heredada (C6 rechazada por el propio libro) | corrección | C7 | Sustituida por C7/C9 según el propio libro |
| `zips_nannysasafo` | Confirma patrón de `truebornmaroons` | estructural | `FRONTERA_CONSTITUTIVA(C3,C9)` | Segundo caso del mismo patrón, no aislado |
| `archipelagicthinking` | Reserva débil de P3-F, vigente | débil | C5 | No revisada en este cierre |
| `deere` | Alcance panamericano | débil | C1 | El Caribe es "sitio ejemplar", no exclusivo |
| `headleyreparaciones` | Marco ético excede vocabulario C1-C10 | débil | C4 | No impide la clasificación |
| `kahnislands` | Residuo de antropología jurídica | débil | C7 | No impide fijar C7 como mecanismo dominante |
| `pardomosquerahoffmann` | Fusión de Partes 3/4/5 en C4 | editorial | `sin_principal_clasificable` (C3,C8,C4) | Economía taxonómica documentada, no identidad plena |
| `mcneillmosquito` | Posible frontera C6/C7 | débil | C6 principal, C7 secundaria | No reabierta; solo reconsiderar ante patrón comparativo |
| `castorspiritual` | Asimetría interna de peso C5/C7/C9 | débil | `SINTESIS_MULTICORRIENTE(C5,C7,C9)` | No invalida la síntesis |
| `mitchellalibi` | Cobertura caribeña mínima | débil | C2 | Ya señalada por curaduría heredada |
| `dubuissonhaiti` | `sin_principal_clasificable` con dimensiones parciales | estructural | C5/C9 parciales | Caso fundador de la extensión normativa |
| `rebeldestiny` | `SIN_PRINCIPAL_CLASIFICABLE` | estructural | Sin principal | Conclusión académica misma, cardinalidad 0 |
| `sangbenvolviendo` | Laguna de cardinalidad 3 | fuerte/estructural | `sin_principal_clasificable` (C2,C7,C5) | Resuelta por `decision-normativa-cardinalidad-dimensiones-parciales-p3-etapa-2-3m.md`; ver patrón abajo |

No se propone C11 en ningún caso.

**Patrón para revisión posterior.** Dos reservas convergen sobre el mismo vacío estructural — la insuficiencia del vocabulario C1-C10 frente a compilaciones o argumentos con más de dos dimensiones parciales irreductibles (`cuijla`, con un vacío de dominios heterogéneos no capturables en absoluto, y `sangbenvolviendo`, con exactamente tres dimensiones que forzaron la extensión de cardinalidad) — y una tercera, más débil, en la misma familia (`rebeldestiny`, cardinalidad 0, sin principal en absoluto). Se registra:

`PATRON_PARA_REVISION_POSTERIOR` (insuficiencia de C1-C10 frente a compilaciones/argumentos de alta pluralidad temática: `cuijla`, `rebeldestiny`, `sangbenvolviendo`)

sin modificar la taxonomía.

## 9. Distribución final C1-C10 (diagnóstico descriptivo)

**Principales (48 casos con `recorrido` no nulo):**

C1: 1 · C2: 5 · C3: 2 · C4: 7 · C5: 7 · C6: 3 · C7: 10 · C8: 7 · C9: 6 · C10: 0

**Secundarias (48 participaciones en `recorridos_sec`):**

C2: 12 · C3: 4 · C4: 4 · C5: 6 · C6: 2 · C7: 9 · C8: 6 · C9: 3 · C10: 2

**Participaciones en `FRONTERA_CONSTITUTIVA` (13 casos × 2 = 26 participaciones):**

C2: 2 · C3: 4 · C4: 5 · C5: 2 · C6: 1 · C7: 1 · C8: 1 · C9: 5 · C10: 5

**Participaciones en `SINTESIS_MULTICORRIENTE` (1 caso × 3 = 3 participaciones):**

C5: 1 · C7: 1 · C9: 1

**Dimensiones parciales bajo `sin_principal_clasificable` (4 casos, 8 participaciones):**

C2: 1 · C3: 1 · C4: 1 · C5: 2 · C7: 1 · C8: 1 · C9: 1

Es un diagnóstico descriptivo, no normativo: no se busca equilibrar artificialmente las corrientes. C10 no aparece como principal en ningún caso de P3, aunque sí participa activamente como secundaria (2) y en fronteras constitutivas (5, la corriente con más participaciones de frontera junto a C9) — coherente con el hallazgo estructural ya registrado en `apertura-recalibracion-p3-etapa-2-3g.md` §12: ningún caso de P3 toca C7-C10 como nominalización nueva del universo pendiente (P3 trabaja exclusivamente sobre casos ya nominalizados).

## 10. Validación global

`python3 data/agua-de-por-medio/sincronizar.py --check`: en sincronía, v1.17.0, 257 obras, 614 relaciones.

`node scripts/validar-atlas.mjs`: 0 errores, 4 advertencias — todas preexistentes y ajenas a P3 (formato de id de `ulysseWhyHaiti`; fechas pendientes de `totumo`/`chande`/`esquiva`/`figueroa`; autorías pendientes de `chande`/`manoalzada`/`esquiva`; títulos compuestos de `mintz`/`ortiz`/`glissant`/`brathwaite`/`monahan`/`benitez`).

`node scripts/validar-fenomenos.mjs`: 0 errores, 3 advertencias preexistentes (`keeganhofman`, `bonilla`, `ferdinand` con un solo fenómeno declarado).

`node scripts/validar-temporalidad.mjs`: 0 errores, 2 advertencias preexistentes (12 entradas sin fecha derivable; 233 entradas sin periodo estudiado, exigen lectura).

`node scripts/validar-piloto-atlas-2.mjs`: 0 errores, 0 advertencias.

`P3_VALIDACION_0_ERRORES_NUEVOS`

Las advertencias preexistentes quedan registradas como línea base, sin corregirse en esta operación.

## 11. Integridad del corpus

- 257 ids totales, únicos, verificado programáticamente (`len(ids) == len(set(ids)) == 257`).
- 614 relaciones, mismo conteo antes y después de esta operación (que no modificó datos, solo generó este documento).
- `datos-atlas.js` y `datos-atlas.json` sincronizados (confirmado por `sincronizar.py --check` y por `validar-atlas.mjs`).
- Sin altas ni bajas accidentales: el único cambio de `git status` antes de esta tarea era este mismo documento nuevo.
- `_to_delete/` intacto, no tocado, excluido del staging de este commit.
- P3-A → P3-H sin contaminación posterior: verificado contra el commit `865881a` (último que tocó `datos-atlas.js`/`.json`) sin diferencias adicionales.

`INTEGRIDAD_VERIFICADA`

## 12. Git

Rango de commits de P3 sobre `datos-atlas.json`/`.js`: `3942172` (primera implementación P3-A) → `865881a` (P3-H: cierra sublote), 23 commits intermedios, listados y atribuidos por id en §3.

`git status --short` antes de este commit: únicamente `_to_delete/` (no rastreado, preexistente, no autorizado para este commit) y este documento nuevo (`cierre-global-p3-etapa-2-3.md`, `??`).

No se modificaron datos: `datos-atlas.js` y `datos-atlas.json` no aparecen en `git status` antes de este commit, porque ya estaban en sincronía y sin pendientes desde `865881a`. Solo se autoriza en este commit:

- `cierre-global-p3-etapa-2-3.md`

No se usó `git add .` ni `git add -A`.

## 13. Dictamen final

`PROCESADO ≠ RESUELTO`. Los 78 casos de P3 fueron procesados (triados, con estado real determinado contra el repositorio); 65 están resueltos e implementados, 1 está académicamente resuelto pendiente de implementación, y 12 permanecen bloqueados por razones documentadas y verificadas caso por caso.

`P3_RECORRIDO_78_DE_78`
`P3_RESUELTOS_65_DE_78`
`P3_BLOQUEADOS_12_DE_78`
`P3_VALIDACION_0_ERRORES_NUEVOS`
`P3_CIERRE_GLOBAL_GENERADO`

No se usa `P3_78_DE_78_RESUELTOS`: quedan bloqueos reales y un caso en estado intermedio.

## 14. Hallazgos para Dirección Académica

Dos incidencias documentales quedan abiertas, ninguna bloqueante, ninguna corregida en esta operación por exceder su alcance (reconciliación, no relectura ni nueva decisión):

1. **Corrección de `f` declarada sin valor final especificado** (§4, §7): `caribjourneys`, `looklaichinese`, `olsencartagena`, `russwurm`. Las cuatro decisiones académicas declaran en prosa que la `f` heredada debe corregirse, pero ninguna especifica el valor final en su bloque de campos autorizados; los cuatro conservan hoy su `f` heredada original sin corregir. No genera error de validador.
2. **`cuijla` en estado intermedio** (§1, §8): clasificación C4/C2 académicamente cerrada, pero `estado_recorrido` permanece `"pendiente"` por decisión expresa, a la espera de que se implemente formalmente su reserva conceptual (`VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO`). No requiere relectura; requiere una decisión de implementación.

DETENIDO después del commit. No se abre P4 ni ninguna fase nueva.
