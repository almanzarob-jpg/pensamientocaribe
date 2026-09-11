# Apertura — Triage interno C1–C10

Fase abierta tras el cierre de la Reconciliación documental C1–C10 (`RECONCILIACION_DOCUMENTAL_C1_C10_CERRADA`) y el saneamiento de `matriz-fronteras-c1-c10.md`. No reabre ninguna de las cuatro discrepancias ya resueltas ni las cinco fronteras auditadas en esa fase, y no toca los cinco casos congelados de la campaña bibliográfica (`ferdinand`, `zapataarbol`, `mintz`, `lebroncimarronaje`, `castrogomezhybris`).

## 1. Objetivo de la fase

`TRIAGE_INTERNO_C1_C10` no es lectura. Es la reconstrucción, id por id y contra el corpus vivo de 257 obras, de los quince universos internos de corriente que `cola-lectura-pendiente-atlas-2.md` §13.A declara como pendientes de deuda efectiva de nominalización. El precedente de C2 (34/35) obliga a tratar toda cifra histórica como hipótesis a verificar, no como dato: esta fase extrae los ids de cada universo desde su fuente primaria (expediente de evidencia, dictamen académico, catálogo de fenómenos), los deduplica, los clasifica uno a uno contra `estado_recorrido` y las decisiones académicas cerradas, y solo entonces cuenta. El resultado no es una lista de lecturas por hacer: es un mapa de cuánto de ese trabajo ya está hecho, cuánto falta, dónde se repite entre universos y en qué orden conviene abordarlo. Ninguna obra se lee en esta fase.

## 2. Los quince universos originales

Los quince universos son los que `cola-lectura-pendiente-atlas-2.md` §13.A registra bajo la categoría "A. Con deuda efectiva" (excluye los dos registros ya nominalizados en su totalidad, C6 y C2, que la Reconciliación documental dejó fuera de esta fase). Ninguno de los quince corresponde a una frontera entre corrientes: las fronteras C1–C10 se auditan en `matriz-fronteras-c1-c10.md`, no aquí.

| # | Universo | Corriente | Nombre documental exacto | Fuente |
|---|---|---|---|---|
| 1 | `C2_silencio_de_archivo` | C2 | anclas del fenómeno silencio_de_archivo | `dictamen-academico-c2.md` §5 |
| 2 | `C3_anclas_fenomenos` | C3 | anclas del catálogo de fenómenos (borrador) compatibles con C3 | `dictamen-academico-c3.md` §9; `expediente-evidencia-c3.md` §13 |
| 3 | `C4_universo_pendiente` | C4 | universo pendiente de lectura de C4 | `dictamen-academico-c4.md` §7, §10; `expediente-evidencia-c4.md` §9 |
| 4 | `C5_anclas_fenomenos` | C5 | anclas de fenómeno compatibles con C5 todavía sin lote | `dictamen-academico-c5.md` §12; `expediente-evidencia-c5.md` §8-9 |
| 5 | `C7_exploratorio` | C7 | universo exploratorio nunca procesado por lote | `dictamen-academico-c7.md` §10-13; `expediente-evidencia-c7.md` §17 |
| 6 | `C7_soberanias_sin_lote` | C7 | entradas con etiqueta heredada soberanias sin lote | `dictamen-academico-c7.md` §10-13; `expediente-evidencia-c7.md` §17 |
| 7 | `C7_anclas_fenomeno` | C7 | anclas de fenómenos compatibles con C7 todavía vírgenes | `dictamen-academico-c7.md` §10-13; `expediente-evidencia-c7.md` §16 |
| 8 | `C8_exploratorio` | C8 | universo exploratorio no procesado por lote | `dictamen-academico-c8.md` §10, §12-14; `expediente-evidencia-c8.md` §15-16 |
| 9 | `C8_creolizacion_sin_lote` | C8 | entradas con etiqueta heredada creolizacion sin lote | `dictamen-academico-c8.md` §10, §12-14; `expediente-evidencia-c8.md` §15-16 |
| 10 | `C8_anclas_fenomeno` | C8 | anclas de fenómeno compatibles con C8 todavía vírgenes | `dictamen-academico-c8.md` §10, §12-14; `expediente-evidencia-c8.md` §14 |
| 11 | `C9_exploratorio` | C9 | universo exploratorio de C9 | `dictamen-academico-c9.md` §12; `expediente-evidencia-c9.md` §11-12 |
| 12 | `C9_anclas_fenomeno` | C9 | anclas de fenómenos compatibles con C9 todavía vírgenes | `dictamen-academico-c9.md` §12; `expediente-evidencia-c9.md` §10 |
| 13 | `C10_exploratorio` | C10 | universo exploratorio de C10 (28 nunca procesadas) | `dictamen-academico-c10.md` §11, §15-16; `expediente-evidencia-c10.md` §13-14 |
| 14 | `C10_cuerpo_erotica_sin_lote` | C10 | entradas con etiqueta heredada cuerpo_erotica sin lote | `dictamen-academico-c10.md` §4, §11 |
| 15 | `C10_anclas_fenomeno` | C10 | anclas de fenómeno vinculadas con C10 | `dictamen-academico-c10.md` §10-11; `expediente-evidencia-c10.md` §12 |

`UNIVERSOS_IDENTIFICADOS_15_DE_15`. Los quince coinciden uno a uno con los registros de `cola-lectura-pendiente-atlas-2.md` §13.A; no se ha inventado ni descartado ninguno.

## 3. Conteos brutos verificados

La cola declara tamaños para cada universo, pero esa cifra es la del momento en que se escribió el dictamen correspondiente, no la del corpus vivo hoy. La extracción programática contra la fuente primaria de cada universo (la lista de ids del expediente de evidencia, o la unión de anclas del catálogo de fenómenos vigente) arroja tamaños brutos distintos de los declarados en cinco de los quince casos, siempre por crecimiento del corpus o del catálogo de fenómenos desde que el dictamen respectivo se redactó, nunca por un error de conteo dentro del propio documento:

`C4_universo_pendiente` declaraba 33 y la extracción arroja 58 (la mitad del universo bruto son entradas nuevas por el filtro vigente de la etiqueta `postplantacion`, que ha pasado de 34 a 43 obras desde el dictamen original). `C7_soberanias_sin_lote` declaraba 52 y arroja 63. `C7_anclas_fenomeno` declaraba 38 y arroja 39. `C8_anclas_fenomeno` declaraba 34 y arroja 39. `C9_anclas_fenomeno` declaraba 40 y arroja 42. Los diez universos restantes coinciden exactamente con su cifra declarada.

La tabla maestra siguiente concentra los conteos verificados de los quince universos y sirve de referencia para el resto de este documento; las secciones 10 y 11 retoman sus columnas de tamaño y prioridad sin recalcularlas.

| Universo | Corriente | Bruto | Ya resueltos | Pendientes reales | Bloqueados¹ | Multipropósito | Tamaño | Prioridad |
|---|---|---:|---:|---:|---:|---:|---|---|
| `C2_silencio_de_archivo` | C2 | 5 | 2 | 3 | 0 | 3 | MICRO | A |
| `C3_anclas_fenomenos` | C3 | 17 | 13 | 2 | 0 | 2 | MICRO | A |
| `C4_universo_pendiente` | C4 | 58 | 43 | 14 | 1 | 7 | MEDIO | B |
| `C5_anclas_fenomenos` | C5 | 23 | 23 | 0 | 0 | 0 | CERRADO | — |
| `C7_exploratorio` | C7 | 78 | 38 | 34 | 1 | 34 | GRANDE | C |
| `C7_soberanias_sin_lote` | C7 | 63 | 37 | 22 | 1 | 20 | GRANDE | C |
| `C7_anclas_fenomeno` | C7 | 39 | 22 | 15 | 0 | 15 | MEDIO | B |
| `C8_exploratorio` | C8 | 63 | 24 | 35 | 2 | 35 | GRANDE | C |
| `C8_creolizacion_sin_lote` | C8 | 43 | 15 | 26 | 1 | 26 | GRANDE | C |
| `C8_anclas_fenomeno` | C8 | 39 | 18 | 19 | 1 | 19 | GRANDE | C |
| `C9_exploratorio` | C9 | 93 | 49 | 40 | 1 | 37 | GRANDE | C |
| `C9_anclas_fenomeno` | C9 | 42 | 20 | 20 | 0 | 20 | GRANDE | C |
| `C10_exploratorio` | C10 | 28 | 10 | 18 | 0 | 18 | GRANDE | C |
| `C10_cuerpo_erotica_sin_lote` | C10 | 18 | 3 | 15 | 0 | 15 | MEDIO | B |
| `C10_anclas_fenomeno` | C10 | 13 | 4 | 9 | 0 | 9 | MEDIO | B |
| **Total (con repetición entre universos)** | — | **622** | **321** | **272** | **8** | **260** | — | — |

¹ La columna «Bloqueados» de la tabla maestra cuenta únicamente los ids que ya llegan bloqueados desde la clasificación inicial (los cuatro casos congelados de la campaña bibliográfica que aparecen en el universo bruto de algún universo). La sección 8 añade una segunda capa de bloqueo, distinta de esta, sobre los pendientes reales sin evidencia bibliográfica local.

Entre los quince universos hay 622 apariciones de id (con repetición: un mismo id cuenta una vez por cada universo en el que su fuente primaria lo lista), pero solo 212 ids distintos. La diferencia —410 apariciones repetidas— es la primera medida directa del solapamiento que las secciones 6 y 7 documentan en detalle.

`CONTEOS_RECALCULADOS`.

## 4. Casos ya resueltos

De los 212 ids distintos que integran el universo bruto combinado, 121 tienen ya `estado_recorrido: confirmado` con una decisión académica final registrada en su dictamen de corriente correspondiente: quedan clasificados `YA_RESUELTO` y no se leen de nuevo. Con repetición entre universos, esto representa 321 de las 622 apariciones brutas —más de la mitad del trabajo que la cola daba por pendiente ya está hecho—, confirmando para el conjunto de los quince universos lo que la Reconciliación documental ya había mostrado para C2: los conteos declarados miden el universo bruto en el momento de redacción del dictamen, no el trabajo que de verdad queda por hacer.

A esto se suman 5 ids adicionales, excluidos de forma explícita y documentada en dictámenes previos por tratarse de falsos positivos verificados o de candidaturas descartadas expresamente: `muneraelfracaso` (falso positivo para C8, también descartado como pendiente de C3), `saetheridentidades` (descartado expresamente como pendiente de C3), `mitchellalibi` (falso positivo para C7, confirmado C2 principal), `rappaportcobarde` y `schweitzerbata` (falsos positivos para C7). Ninguno de los dos grupos —`YA_RESUELTO` o `EXCLUIDO`— requiere lectura en esta fase ni en las que la sigan.

`CASOS_YA_RESUELTOS_DESCONTADOS`.

## 5. Pendientes reales

Descontados los 121 `YA_RESUELTO`, los 5 `EXCLUIDO` y los 4 ids que ya llegaban bloqueados por pertenecer a la campaña bibliográfica congelada (`mintz`, `lebroncimarronaje`, `castrogomezhybris`, `zapataarbol`; `ferdinand` no aparece en el universo bruto de ningún universo interno), quedan **82 ids distintos en estado `PENDIENTE_REAL`** repartidos —con solapamiento— entre los quince universos. Ningún id quedó sin clasificar y ninguno resultó `NO_APLICA` o `DUPLICADO_DE_OTRO_UNIVERSO`: los 212 ids del universo bruto combinado se agotan exactamente en 121 + 5 + 4 + 82 = 212.

`PENDIENTES_REALES_82`.

## 6. Solapamientos entre universos

La matriz siguiente registra, para cada uno de los 82 pendientes reales, en cuántos y cuáles de los quince universos aparece, si tiene evidencia bibliográfica local disponible y a qué lote de lectura queda asignado (sección 12) o, si no la tiene, que espera confirmación de fuente (sección 8). Está ordenada de mayor a menor grado de solapamiento.

<details>
<summary>Tabla completa de solapamientos (82 filas)</summary>

| id | universos en los que aparece | grado | disponibilidad | acción |
|---|---|---:|---|---|
| `barrowfamily` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C9\_exploratorio, C9\_anclas\_fenomeno, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote, C10\_anclas\_fenomeno | 7 | LISTO_PARA_LECTURA | Lote 1 |
| `garciapenaborders` | C2\_silencio\_de\_archivo, C7\_exploratorio, C7\_anclas\_fenomeno, C8\_exploratorio, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 7 | LISTO_PARA_LECTURA | Lote 4 |
| `godreauscripts` | C7\_exploratorio, C7\_anclas\_fenomeno, C8\_exploratorio, C8\_creolizacion\_sin\_lote, C8\_anclas\_fenomeno, C10\_exploratorio, C10\_anclas\_fenomeno | 7 | LISTO_PARA_LECTURA | Lote 2 |
| `sonicbodies` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote | 7 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `clarkemymother` | C4\_universo\_pendiente, C9\_exploratorio, C9\_anclas\_fenomeno, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote, C10\_anclas\_fenomeno | 6 | LISTO_PARA_LECTURA | Lote 1 |
| `lassoerased` | C2\_silencio\_de\_archivo, C4\_universo\_pendiente, C7\_exploratorio, C7\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 6 | LISTO_PARA_LECTURA | Lote 4 |
| `wirtzperforming` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C8\_anclas\_fenomeno, C9\_exploratorio, C10\_exploratorio, C10\_anclas\_fenomeno | 6 | LISTO_PARA_LECTURA | Lote 2 |
| `almanzaorilla` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 5 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `bebelgislerleonora` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 5 | LISTO_PARA_LECTURA | Lote 12 |
| `chicamusicaafricana` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 5 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `corinealdipanama` | C4\_universo\_pendiente, C7\_exploratorio, C7\_soberanias\_sin\_lote, C7\_anclas\_fenomeno, C9\_exploratorio | 5 | LISTO_PARA_LECTURA | Lote 7 |
| `cunin` | C7\_exploratorio, C7\_anclas\_fenomeno, C8\_exploratorio, C8\_anclas\_fenomeno, C10\_exploratorio | 5 | LISTO_PARA_LECTURA | Lote 4 |
| `curiel` | C7\_exploratorio, C7\_anclas\_fenomeno, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote, C10\_anclas\_fenomeno | 5 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `gosinenature` | C7\_exploratorio, C7\_anclas\_fenomeno, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote, C10\_anclas\_fenomeno | 5 | LISTO_PARA_LECTURA | Lote 1 |
| `hagedorn` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 5 | LISTO_PARA_LECTURA | Lote 12 |
| `henrycaliban` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 5 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `vete` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 5 | LISTO_PARA_LECTURA | Lote 13 |
| `alexander` | C9\_exploratorio, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote, C10\_anclas\_fenomeno | 4 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `allenvenceremos` | C9\_exploratorio, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote, C10\_anclas\_fenomeno | 4 | LISTO_PARA_LECTURA | Lote 1 |
| `araujo` | C4\_universo\_pendiente, C7\_exploratorio, C7\_anclas\_fenomeno, C9\_exploratorio | 4 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `bogueslammingreader` | C7\_exploratorio, C7\_soberanias\_sin\_lote, C8\_exploratorio, C8\_creolizacion\_sin\_lote | 4 | LISTO_PARA_LECTURA | Lote 10 |
| `cabrera` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C9\_exploratorio, C9\_anclas\_fenomeno | 4 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `citizenshipedge` | C7\_exploratorio, C7\_soberanias\_sin\_lote, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote | 4 | LISTO_PARA_LECTURA | Lote 2 |
| `firmin` | C8\_exploratorio, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 4 | LISTO_PARA_LECTURA | Lote 13 |
| `kingisland` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote | 4 | LISTO_PARA_LECTURA | Lote 3 |
| `lara` | C7\_exploratorio, C7\_soberanias\_sin\_lote, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote | 4 | LISTO_PARA_LECTURA | Lote 3 |
| `millerbassey` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C9\_exploratorio, C9\_anclas\_fenomeno | 4 | LISTO_PARA_LECTURA | Lote 15 |
| `mohammed_generosrealidades` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote | 4 | LISTO_PARA_LECTURA | Lote 4 |
| `palmiengangas` | C8\_exploratorio, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 4 | LISTO_PARA_LECTURA | Lote 13 |
| `palmiewizards` | C8\_exploratorio, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 4 | LISTO_PARA_LECTURA | Lote 14 |
| `ramadan` | C7\_exploratorio, C8\_exploratorio, C8\_creolizacion\_sin\_lote, C9\_exploratorio | 4 | LISTO_PARA_LECTURA | Lote 11 |
| `reconfdominic` | C7\_exploratorio, C7\_anclas\_fenomeno, C8\_exploratorio, C8\_anclas\_fenomeno | 4 | LISTO_PARA_LECTURA | Lote 8 |
| `scottconscripts` | C7\_exploratorio, C7\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno | 4 | LISTO_PARA_LECTURA | Lote 9 |
| `shellererotic` | C7\_exploratorio, C7\_soberanias\_sin\_lote, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote | 4 | LISTO_PARA_LECTURA | Lote 3 |
| `smith_sexcitizen` | C7\_exploratorio, C7\_soberanias\_sin\_lote, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote | 4 | LISTO_PARA_LECTURA | Lote 3 |
| `tambu` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C9\_exploratorio, C9\_anclas\_fenomeno | 4 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `taylor` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C9\_exploratorio, C9\_anclas\_fenomeno | 4 | LISTO_PARA_LECTURA | Lote 15 |
| `tinsley` | C9\_exploratorio, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote, C10\_anclas\_fenomeno | 4 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `zonabananera` | C4\_universo\_pendiente, C7\_exploratorio, C7\_anclas\_fenomeno, C9\_exploratorio | 4 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `bonilla` | C7\_exploratorio, C7\_soberanias\_sin\_lote, C7\_anclas\_fenomeno | 3 | LISTO_PARA_LECTURA | Lote 7 |
| `casimir` | C3\_anclas\_fenomenos, C4\_universo\_pendiente, C7\_exploratorio | 3 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `creolenieworleans` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C9\_exploratorio | 3 | LISTO_PARA_LECTURA | Lote 15 |
| `dunham` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C9\_exploratorio | 3 | LISTO_PARA_LECTURA | Lote 16 |
| `hoeftetrajectories` | C7\_exploratorio, C7\_soberanias\_sin\_lote, C7\_anclas\_fenomeno | 3 | LISTO_PARA_LECTURA | Lote 8 |
| `hurboncomprendre` | C7\_exploratorio, C7\_soberanias\_sin\_lote, C9\_exploratorio | 3 | LISTO_PARA_LECTURA | Lote 10 |
| `kincaidsmallplace` | C4\_universo\_pendiente, C8\_exploratorio, C8\_anclas\_fenomeno | 3 | LISTO_PARA_LECTURA | Lote 7 |
| `meeks_postcolonial` | C7\_exploratorio, C7\_soberanias\_sin\_lote, C9\_exploratorio | 3 | LISTO_PARA_LECTURA | Lote 11 |
| `mgsmithplural` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C8\_anclas\_fenomeno | 3 | LISTO_PARA_LECTURA | Lote 12 |
| `oostindiedecolonising` | C7\_exploratorio, C7\_soberanias\_sin\_lote, C7\_anclas\_fenomeno | 3 | LISTO_PARA_LECTURA | Lote 8 |
| `tellmyhorse` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C9\_exploratorio | 3 | LISTO_PARA_LECTURA | Lote 16 |
| `trouillotsilencing` | C2\_silencio\_de\_archivo, C9\_exploratorio, C9\_anclas\_fenomeno | 3 | LISTO_PARA_LECTURA | Lote 5 |
| `trouillottransformaciones` | C8\_exploratorio, C8\_anclas\_fenomeno, C9\_exploratorio | 3 | LISTO_PARA_LECTURA | Lote 14 |
| `vanderpijl_equaliberty` | C7\_exploratorio, C7\_soberanias\_sin\_lote, C7\_anclas\_fenomeno | 3 | LISTO_PARA_LECTURA | Lote 8 |
| `brathwaitearchipelago` | C8\_exploratorio, C8\_creolizacion\_sin\_lote | 2 | LISTO_PARA_LECTURA | Lote 14 |
| `brownetropic` | C8\_exploratorio, C8\_creolizacion\_sin\_lote | 2 | LISTO_PARA_LECTURA | Lote 14 |
| `cesaire` | C8\_exploratorio, C8\_anclas\_fenomeno | 2 | LISTO_PARA_LECTURA | Lote 13 |
| `creolite` | C8\_exploratorio, C8\_creolizacion\_sin\_lote | 2 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `escalante` | C3\_anclas\_fenomenos, C9\_exploratorio | 2 | LISTO_PARA_LECTURA | Lote 5 |
| `fanon` | C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote | 2 | LISTO_PARA_LECTURA | Lote 2 |
| `fouchard` | C7\_exploratorio, C7\_soberanias\_sin\_lote | 2 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `grenaderevolution` | C7\_exploratorio, C7\_soberanias\_sin\_lote | 2 | LISTO_PARA_LECTURA | Lote 9 |
| `hurbondictadura` | C7\_exploratorio, C7\_soberanias\_sin\_lote | 2 | LISTO_PARA_LECTURA | Lote 9 |
| `knight_genesisnacionalismo` | C7\_exploratorio, C7\_soberanias\_sin\_lote | 2 | LISTO_PARA_LECTURA | Lote 9 |
| `lindskoog` | C7\_exploratorio, C7\_soberanias\_sin\_lote | 2 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `modernblackness` | C8\_exploratorio, C8\_creolizacion\_sin\_lote | 2 | LISTO_PARA_LECTURA | Lote 15 |
| `smithredblack` | C7\_exploratorio, C7\_soberanias\_sin\_lote | 2 | LISTO_PARA_LECTURA | Lote 10 |
| `trouillot` | C7\_exploratorio, C9\_exploratorio | 2 | LISTO_PARA_LECTURA | Lote 11 |
| `trouillothaitistate` | C7\_exploratorio, C7\_soberanias\_sin\_lote | 2 | LISTO_PARA_LECTURA | Lote 10 |
| `wilderfreedomtime` | C7\_exploratorio, C7\_soberanias\_sin\_lote | 2 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `yountaesecular` | C7\_exploratorio, C9\_exploratorio | 2 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `austinbroosgenesis` | C4\_universo\_pendiente | 1 | LISTO_PARA_LECTURA | Lote 5 |
| `beckfordpersistent` | C4\_universo\_pendiente | 1 | LISTO_PARA_LECTURA | Lote 5 |
| `benoistsocietesantillaises` | C4\_universo\_pendiente | 1 | LISTO_PARA_LECTURA | Lote 6 |
| `branddoor` | C9\_exploratorio | 1 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `chocolatecorn` | C9\_exploratorio | 1 | LISTO_PARA_LECTURA | Lote 16 |
| `ferdinandsaimer` | C7\_soberanias\_sin\_lote | 1 | LISTO_PARA_LECTURA | Lote 11 |
| `ochoasociety` | C4\_universo\_pendiente | 1 | LISTO_PARA_LECTURA | Lote 6 |
| `poloacunahistoriasocial` | C4\_universo\_pendiente | 1 | LISTO_PARA_LECTURA | Lote 6 |
| `pricebecomingrasta` | C7\_soberanias\_sin\_lote | 1 | LISTO_PARA_LECTURA | Lote 12 |
| `regentmaitres` | C4\_universo\_pendiente | 1 | LISTO_PARA_LECTURA | Lote 6 |
| `reysinningcristorey` | C9\_exploratorio | 1 | BLOQUEADO_FUENTE | En espera de confirmación de fuente |
| `yelvingtonproducing` | C4\_universo\_pendiente | 1 | LISTO_PARA_LECTURA | Lote 7 |

</details>

## 7. Casos multipropósito

De los 82 pendientes reales, **70 aparecen en dos o más universos** y quedan marcados `CASOS_MULTIPROPOSITO`; solo 12 son de universo único (`austinbroosgenesis`, `beckfordpersistent`, `benoistsocietesantillaises`, `branddoor`, `chocolatecorn`, `ferdinandsaimer`, `ochoasociety`, `poloacunahistoriasocial`, `pricebecomingrasta`, `regentmaitres`, `reysinningcristorey`, `yelvingtonproducing` — casi todos del universo bruto ampliado de C4). La proporción —85 % de los pendientes reales resuelven más de una pregunta documental a la vez— confirma la sospecha de partida: los quince universos declarados no son quince bolsas de trabajo independientes, sino quince preguntas distintas formuladas sobre un fondo bibliográfico compartido, sobre todo entre C7, C8, C9 y C10, cuyas versiones "exploratorio", "sin lote" y "anclas de fenómeno" remiten en gran medida al mismo corpus visto con tres filtros distintos.

El caso extremo es `barrowfamily`, `garciapenaborders`, `godreauscripts` y `sonicbodies`, cada uno con grado 7: una sola lectura de cualquiera de ellos puede avanzar simultáneamente hasta siete universos internos. Ninguno de los 70 casos multipropósito se convierte en varias tareas: el diseño de lotes de la sección 12 los agrupa precisamente para que una lectura bien dirigida resuelva de una vez todas las preguntas que ese id concentra, siguiendo el mandato de no multiplicar mecánicamente el trabajo.

`CASOS_MULTIPROPOSITO_70`.

## 8. Bloqueados

Esta fase distingue dos capas de bloqueo, de naturaleza distinta y que no deben confundirse.

La primera es la que ya arrastraba la clasificación inicial: 4 ids distintos —`mintz` (universo de C4), `lebroncimarronaje` (C7), `castrogomezhybris` (C8) y `zapataarbol` (C8 y C9)— pertenecen a los cinco casos congelados de la campaña bibliográfica y no se leen ni se reabren sin instrucción explícita de Dirección Académica. `ferdinand`, el quinto caso congelado, no forma parte del universo bruto de ninguno de los quince universos internos, así que no aparece en esta cuenta.

La segunda capa es interna a los 82 pendientes reales y responde a la verificación de disponibilidad bibliográfica local exigida por la sección 13 de la instrucción: de los 82, **63 tienen evidencia local localizada** (coincidencia de id, título o autor contra la carpeta de bibliografía y los archivos sueltos con sufijo `-simple`) y quedan `LISTO_PARA_LECTURA`; los **19 restantes no arrojaron coincidencia** en ese primer corte automático por nombre de archivo: `alexander`, `almanzaorilla`, `araujo`, `branddoor`, `cabrera`, `casimir`, `chicamusicaafricana`, `creolite`, `curiel`, `fouchard`, `henrycaliban`, `lindskoog`, `reysinningcristorey`, `sonicbodies`, `tambu`, `tinsley`, `wilderfreedomtime`, `yountaesecular` y `zonabananera`.

Esta cifra de 19 no equivale a "fuente inexistente": es el resultado de un cotejo automático por nombre de archivo contra una carpeta de 1357 documentos con nomenclatura heterogénea (mayoritariamente descargas de Anna's Archive, no catalogadas por id de obra), y no incluye ninguna búsqueda externa de recuperación —la sección 13 de la instrucción la prohíbe expresamente en esta fase—. Dos de los 19, `almanzaorilla` y `zonabananera`, son obra propia de Rob Almanza y es probable que su fuente esté disponible fuera de esa carpeta, en manuscrito o en repositorio personal, no en el fondo bibliográfico general. Los 19 quedan clasificados `BLOQUEADO_FUENTE` con el matiz explícito de que se trata de un primer corte automático pendiente de confirmación manual, no de un veredicto definitivo sobre su disponibilidad; no se les asigna lote de lectura en la sección 12 hasta que esa confirmación se haga. Ningún pendiente real quedó clasificado `BLOQUEADO_TECNICO`: no se detectó ninguna anomalía de id, de archivo corrupto o de referencia rota en el proceso.

Sumando ambas capas sin solapamiento entre sí (los 4 congelados no figuran entre los 82 pendientes reales), el total de casos bloqueados de esta fase es:

`BLOQUEADOS_23` (4 por fuente congelada de campaña bibliográfica + 19 pendientes reales sin evidencia local en el primer corte automático).

## 9. Universos vacíos

Un solo universo queda vacío tras descontar el trabajo ya resuelto: `C5_anclas_fenomenos` tenía un universo bruto de 23 ids, de los cuales los 23 ya tienen `estado_recorrido: confirmado` y decisión académica final. Queda marcado `UNIVERSO_CERRADO_POR_TRABAJO_PREVIO`: no se abre lote de lectura para él. La cola ya adelantaba una cifra cercana (3 de 23 nominalizados en su tabla histórica), pero la verificación programática contra el corpus vivo muestra que el trabajo pendiente de C5 se completó por entero en fases anteriores sin que la documentación de cabecera lo reflejara —el mismo patrón de desactualización documental, no de contradicción real, que motivó la Reconciliación documental C1–C10.

## 10. Clasificación por tamaño

Usando solo pendientes reales netos, ninguno de los quince universos cae en el rango PEQUEÑO (4-8): la distribución es bimodal. Dos universos son MICRO (`C2_silencio_de_archivo` con 3, `C3_anclas_fenomenos` con 2); cuatro son MEDIO (`C4_universo_pendiente` con 14, `C7_anclas_fenomeno` con 15, `C10_cuerpo_erotica_sin_lote` con 15, `C10_anclas_fenomeno` con 9); ocho son GRANDE (`C7_exploratorio` 34, `C7_soberanias_sin_lote` 22, `C8_exploratorio` 35, `C8_creolizacion_sin_lote` 26, `C8_anclas_fenomeno` 19, `C9_exploratorio` 40, `C9_anclas_fenomeno` 20, `C10_exploratorio` 18); y uno, `C5_anclas_fenomenos`, está cerrado. La ausencia total de universos PEQUEÑOS no es un artefacto del corte: es consecuencia directa de que C7, C8, C9 y C10 comparten un fondo bibliográfico amplio visto desde tres ángulos cada uno, mientras que C2, C3 y C5 son recortes mucho más acotados por diseño (silencio de archivo, anclas de frontera, anclas de fenómeno específicas).

## 11. Priorización A/B/C

**Prioridad A** —los dos universos MICRO, `C2_silencio_de_archivo` y `C3_anclas_fenomenos`— reúne exactamente los rasgos que la instrucción exige: tamaño mínimo, disponibilidad de fuente alta (100 % y 50 % respectivamente, y en `C3_anclas_fenomenos` la propia frontera C3/C9 y C3/C10 recién reconciliada da a estos dos casos un valor de cierre conceptual concreto), y una proporción de multipropósito total (los 3 y los 2 pendientes de cada universo aparecen todos en algún otro universo). Cerrar A no exige más de un lote por universo.

**Prioridad B** agrupa los cuatro universos MEDIO: `C4_universo_pendiente`, `C7_anclas_fenomeno`, `C10_cuerpo_erotica_sin_lote` y `C10_anclas_fenomeno`. Ninguno alcanza el tamaño de los universos GRANDE, todos tienen disponibilidad bibliográfica local por encima del 65 %, y su avance no depende de que se resuelva antes ningún universo de prioridad C.

**Prioridad C** son los ocho universos GRANDE: las tres variantes de C7 restantes ya asignadas a B aparte, `C7_exploratorio` y `C7_soberanias_sin_lote`; las tres variantes de C8 (`C8_exploratorio`, `C8_creolizacion_sin_lote`, `C8_anclas_fenomeno`); las dos de C9 (`C9_exploratorio`, `C9_anclas_fenomeno`); y `C10_exploratorio`. No es una prioridad baja por número de corriente —C7, C8, C9 y C10 concentran también la inmensa mayoría de los casos multipropósito— sino por volumen: son los universos donde más lotes hacen falta y donde, en la práctica, buena parte del trabajo de A y B ya adelanta avance sobre ellos por el solapamiento documentado en la sección 6.

`C5_anclas_fenomenos` no recibe prioridad: está cerrado por trabajo previo (sección 9).

## 12. Propuesta de lotes

El diseño de lotes se limita, en esta fase, a los 63 pendientes reales `LISTO_PARA_LECTURA` (sección 8); los 19 `BLOQUEADO_FUENTE` no reciben lote hasta que se confirme manualmente su disponibilidad, conforme a la prohibición expresa de reabrir la campaña bibliográfica en esta fase. Dentro de los 63, el orden de agrupación no es alfabético ni por universo: es por afinidad probatoria, entendida aquí como coincidencia exacta del conjunto de universos que cada id puede cerrar. Los ids se ordenan primero por ese conjunto de universos compartido y, dentro de cada grupo, por grado de solapamiento descendente, de modo que los lotes tempranos concentran los casos de mayor rendimiento documental y los tardíos, los de universo único que aún tienen fuente disponible. El resultado son 16 lotes de 3 a 4 casos, ninguno por encima de 4:

- **Lote 1** (4 casos): `clarkemymother`, `gosinenature`, `barrowfamily`, `allenvenceremos` — avanza 10 universo(s): C10\_anclas\_fenomeno, C10\_cuerpo\_erotica\_sin\_lote, C10\_exploratorio, C4\_universo\_pendiente, C7\_anclas\_fenomeno, C7\_exploratorio, C8\_creolizacion\_sin\_lote, C8\_exploratorio, C9\_anclas\_fenomeno, C9\_exploratorio.
- **Lote 2** (4 casos): `godreauscripts`, `wirtzperforming`, `fanon`, `citizenshipedge` — avanza 10 universo(s): C10\_anclas\_fenomeno, C10\_cuerpo\_erotica\_sin\_lote, C10\_exploratorio, C7\_anclas\_fenomeno, C7\_exploratorio, C7\_soberanias\_sin\_lote, C8\_anclas\_fenomeno, C8\_creolizacion\_sin\_lote, C8\_exploratorio, C9\_exploratorio.
- **Lote 3** (4 casos): `lara`, `shellererotic`, `smith_sexcitizen`, `kingisland` — avanza 6 universo(s): C10\_cuerpo\_erotica\_sin\_lote, C10\_exploratorio, C7\_exploratorio, C7\_soberanias\_sin\_lote, C8\_creolizacion\_sin\_lote, C8\_exploratorio.
- **Lote 4** (4 casos): `mohammed_generosrealidades`, `cunin`, `lassoerased`, `garciapenaborders` — avanza 11 universo(s): C10\_cuerpo\_erotica\_sin\_lote, C10\_exploratorio, C2\_silencio\_de\_archivo, C4\_universo\_pendiente, C7\_anclas\_fenomeno, C7\_exploratorio, C8\_anclas\_fenomeno, C8\_creolizacion\_sin\_lote, C8\_exploratorio, C9\_anclas\_fenomeno, C9\_exploratorio.
- **Lote 5** (4 casos): `trouillotsilencing`, `escalante`, `austinbroosgenesis`, `beckfordpersistent` — avanza 5 universo(s): C2\_silencio\_de\_archivo, C3\_anclas\_fenomenos, C4\_universo\_pendiente, C9\_anclas\_fenomeno, C9\_exploratorio.
- **Lote 6** (4 casos): `benoistsocietesantillaises`, `ochoasociety`, `poloacunahistoriasocial`, `regentmaitres` — avanza 1 universo(s): C4\_universo\_pendiente.
- **Lote 7** (4 casos): `yelvingtonproducing`, `corinealdipanama`, `kincaidsmallplace`, `bonilla` — avanza 7 universo(s): C4\_universo\_pendiente, C7\_anclas\_fenomeno, C7\_exploratorio, C7\_soberanias\_sin\_lote, C8\_anclas\_fenomeno, C8\_exploratorio, C9\_exploratorio.
- **Lote 8** (4 casos): `hoeftetrajectories`, `oostindiedecolonising`, `vanderpijl_equaliberty`, `reconfdominic` — avanza 5 universo(s): C7\_anclas\_fenomeno, C7\_exploratorio, C7\_soberanias\_sin\_lote, C8\_anclas\_fenomeno, C8\_exploratorio.
- **Lote 9** (4 casos): `scottconscripts`, `grenaderevolution`, `hurbondictadura`, `knight_genesisnacionalismo` — avanza 5 universo(s): C7\_anclas\_fenomeno, C7\_exploratorio, C7\_soberanias\_sin\_lote, C9\_anclas\_fenomeno, C9\_exploratorio.
- **Lote 10** (4 casos): `smithredblack`, `trouillothaitistate`, `bogueslammingreader`, `hurboncomprendre` — avanza 5 universo(s): C7\_exploratorio, C7\_soberanias\_sin\_lote, C8\_creolizacion\_sin\_lote, C8\_exploratorio, C9\_exploratorio.
- **Lote 11** (4 casos): `meeks_postcolonial`, `ramadan`, `trouillot`, `ferdinandsaimer` — avanza 5 universo(s): C7\_exploratorio, C7\_soberanias\_sin\_lote, C8\_creolizacion\_sin\_lote, C8\_exploratorio, C9\_exploratorio.
- **Lote 12** (4 casos): `pricebecomingrasta`, `mgsmithplural`, `bebelgislerleonora`, `hagedorn` — avanza 6 universo(s): C7\_soberanias\_sin\_lote, C8\_anclas\_fenomeno, C8\_creolizacion\_sin\_lote, C8\_exploratorio, C9\_anclas\_fenomeno, C9\_exploratorio.
- **Lote 13** (4 casos): `vete`, `cesaire`, `firmin`, `palmiengangas` — avanza 5 universo(s): C8\_anclas\_fenomeno, C8\_creolizacion\_sin\_lote, C8\_exploratorio, C9\_anclas\_fenomeno, C9\_exploratorio.
- **Lote 14** (4 casos): `palmiewizards`, `trouillottransformaciones`, `brathwaitearchipelago`, `brownetropic` — avanza 5 universo(s): C8\_anclas\_fenomeno, C8\_creolizacion\_sin\_lote, C8\_exploratorio, C9\_anclas\_fenomeno, C9\_exploratorio.
- **Lote 15** (4 casos): `modernblackness`, `millerbassey`, `taylor`, `creolenieworleans` — avanza 4 universo(s): C8\_creolizacion\_sin\_lote, C8\_exploratorio, C9\_anclas\_fenomeno, C9\_exploratorio.
- **Lote 16** (3 casos): `dunham`, `tellmyhorse`, `chocolatecorn` — avanza 3 universo(s): C8\_creolizacion\_sin\_lote, C8\_exploratorio, C9\_exploratorio.

Los lotes 1, 2 y 4 son los de mayor rendimiento: cada uno hace avanzar entre 10 y 11 de los quince universos con solo cuatro lecturas. El lote 6, en cambio, agrupa cuatro casos de universo único (todos pertenecientes al universo ampliado de C4) que no comparten frontera con ningún otro universo pero sí completan por sí solos buena parte de la prioridad B. Ningún universo GRANDE requirió dividirse por afinidad temática interna más allá de la que ya impone el agrupamiento por firma de universos, porque en los ocho universos de prioridad C esa firma compartida —el hecho de que casi todos sus pendientes reales toquen simultáneamente C7, C8 y C9, o C8, C9 y C10— ya concentra la afinidad probatoria real del corpus.

`LOTES_PROPUESTOS_16` (más 19 pendientes reales sin lote, en espera de confirmación de fuente, sección 8).

## 13. Criterio de cierre

Esta apertura se da por cerrada porque los quince universos están identificados sin presuponer correspondencia 1:1 con las corrientes C1–C10 (sección 2); sus conteos brutos y netos fueron recalculados programáticamente contra el corpus vivo y no contra la cifra declarada en la cola (sección 3); los 212 ids del universo bruto combinado tienen estado actual sin excepción, sin ningún `NO_APLICA` ni `DUPLICADO_DE_OTRO_UNIVERSO` (secciones 4-5); los solapamientos entre universos están documentados id por id en una matriz completa (sección 6) y los 70 casos multipropósito identificados y priorizados como una sola tarea de lectura, no como tareas múltiples (sección 7); los bloqueos están separados en sus dos capas —fuente congelada por decisión académica, y disponibilidad bibliográfica local pendiente de confirmación manual— sin mezclarlos (sección 8); el único universo vacío quedó marcado como cerrado por trabajo previo sin abrirle lectura (sección 9); y existe una propuesta explícita de 16 lotes ejecutables más 19 pendientes en espera de fuente, y una prioridad de ejecución A/B/C fundada en tamaño neto, disponibilidad y valor de cierre conceptual, no en el número de corriente (secciones 10-12). No se ha leído ninguna obra en esta fase.

## 14. Estado inicial de la fase

`TRIAGE_INTERNO_C1_C10` queda abierto con el mapa completo de su propio trabajo pendiente y sin haber empezado a ejecutarlo. La decisión sobre qué lote leer primero —presumiblemente uno de prioridad A, o alguno de los lotes de alto rendimiento de la sección 12— se deja explícitamente para después de que Rob revise este documento en su conjunto.

---

**Estado de cierre de esta apertura:**

`UNIVERSOS_IDENTIFICADOS_15_DE_15`
`CONTEOS_RECALCULADOS`
`CASOS_YA_RESUELTOS_DESCONTADOS`
`PENDIENTES_REALES_82`
`BLOQUEADOS_23`
`CASOS_MULTIPROPOSITO_70`
`LOTES_PROPUESTOS_16`
`TRIAGE_INTERNO_C1_C10_ABIERTO`
