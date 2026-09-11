# Avance — Triage interno C1–C10, lotes 2–4

Ejecuta consecutivamente los lotes 1, 2 y 3 de `apertura-triage-interno-c1-c10.md` (commit `f52f19e`), continuando la numeración propia desde el lote 1 ya comprometido en `d487bb2` (que correspondía al Lote 4 de la apertura). Por tanto, en este documento:

- **Lote 2** (propio) = **Lote 1** de la apertura → commit `6b43d31`.
- **Lote 3** (propio) = **Lote 2** de la apertura → commit `6cde6a3`.
- **Lote 4** (propio) = **Lote 3** de la apertura → commit `61da24d`.

No se abrió el Lote 5 de la apertura. No se reabrió ninguno de los tres lotes ya cerrados ni la Reconciliación documental C1–C10.

## 1. Corrección de la cifra histórica

El commit `d487bb2` (lote propio 1) registró en su mensaje decorativo "80 de 82" pendientes reales restantes. Esa cifra fue un error aritmético ya señalado y ratificado como tal: el valor correcto tras el lote propio 1 (4 casos resueltos sobre 82) es

`PENDIENTES_REALES_78`

No se reescribe el commit `d487bb2`; esta corrección queda documentada aquí y en el commit de este bloque.

## 2. Implementación por lote

### Lote 2 (propio) = Lote 1 de la apertura — `6b43d31`

| id | universos | principal | secundarias | arquitectura | semáforo | deudas cerradas |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `clarkemymother` | 6 | C10 | C9, C4 | — | 🟢 VERDE | 6 |
| `gosinenature` | 5 | C10 | C7 | — | 🟢 VERDE | 5 |
| `barrowfamily` | 7 | C10 | C9, C8 | — | 🟢 VERDE | 7 |
| `allenvenceremos` | 4 | C10 | C9 | — | 🟢 VERDE | 4 |

Los cuatro casos leen y deciden en una sola pasada para todos sus universos. `clarkemymother` (Edith Clarke, *My Mother Who Fathered Me*, 1957/2000) y `barrowfamily` (Christine Barrow, *Family in the Caribbean*, 1996/1998) confirman principal C10 (parentesco/familia) con C9 secundaria real vía el ancla ya registrada `parentesco_y_organizacion_domestica`; `barrowfamily` suma C8 secundaria por el debate teórico sobre creolización que atraviesa varios capítulos de síntesis editorial (no un capítulo autónomo aislado). `gosinenature` (Andil Gosine, *Nature's Wild*, 2021) confirma principal C10 —el deseo/cuerpo erótico regulado por ley colonial es el objeto, no el derecho en sí— con C7 secundaria real (ancla `nacion_heterosexual`). `allenvenceremos` (Jafari S. Allen, *¡Venceremos?*, 2011) confirma principal C10 (ancla `erotica_negra`) con C9 secundaria (memoria oral como método).

N=4, U=10, P=22, R=5,5. Validación: `sincronizar.py --check` + 4 validadores, 0 errores nuevos.

### Lote 3 (propio) = Lote 2 de la apertura — `6cde6a3`

| id | universos | principal | secundarias | arquitectura | semáforo | deudas cerradas |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `godreauscripts` | 7 | C8 | C7, C10 | — | 🟢 VERDE | 7 |
| `wirtzperforming` | 6 | C8 | C9, C10 | — | 🟢 VERDE | 6 |
| `fanon` | 2 | C8 | C10 | — | 🔴 ROJO académico representable | 2 |
| `citizenshipedge` | 4 | C7 | C10 | — | 🟢 VERDE | 4 |

`godreauscripts` (Isar P. Godreau, *Scripts of Blackness*, 2015) y `wirtzperforming` (Kristina Wirtz, *Performing Afro-Cuba*, 2014) confirman principal C8 (anclas ya registradas `formacion_racial_nacional` y `fiesta_y_performance_publico`). `citizenshipedge` confirma principal C7 con C10 secundaria, con la salvedad ya registrada de que solo una fracción de sus capítulos trata casos específicamente caribeños.

`fanon` (*Piel negra, máscaras blancas*, 1952) es el caso relevante del lote. Llegó registrado como candidatura de universo C10 por una señal puramente léxica del expediente de evidencia C10 —nunca procesada, sin ancla alguna en el catálogo de fenómenos vigente—. La lectura directa de la introducción del propio Fanon (que declara la estructura en cinco capítulos) muestra que el objeto global del libro es la alienación racial del sujeto antillano producida por el lenguaje y la cultura impuestos por la civilización blanca: la máscara blanca sobre la piel negra es una figura de traducción/desdoblamiento identitario forzado, no un problema centrado en el cuerpo o la erótica. Esto corresponde a C8, no a C10. Se resuelve como ROJO académico representable con el contrato vigente: la candidatura de universo era solo una hipótesis de trabajo, y en este caso no coincidía con lo que efectivamente organiza la obra. C10 conserva sustantividad secundaria real y acotada (cap. 2, deseo interracial; cap. 5, "La experiencia vivida del negro", esquema corporal/epidérmico), dependiente del marco lingüístico-cultural más amplio.

N=4, U=10, P=19, R=4,75. Validación: `sincronizar.py --check` + 4 validadores, 0 errores nuevos.

### Lote 4 (propio) = Lote 3 de la apertura — `61da24d`

| id | universos | principal | secundarias | arquitectura | semáforo | deudas cerradas |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `lara` | 4 | — | — | FRONTERA\_CONSTITUTIVA C7/C10 | 🟡→resuelto | 4 |
| `shellererotic` | 4 | — | — | — | `BLOQUEADO_FUENTE_VERIFICACION_MANUAL` | 0 |
| `smith_sexcitizen` | 4 | — | — | FRONTERA\_CONSTITUTIVA C7/C10 | 🟢 VERDE | 4 |
| `kingisland` | 4 | C10 | — | — | 🟢 VERDE | 4 |

`lara` (Ana-Maurine Lara, *Queer Freedom: Black Sovereignty*, 2020) resuelve la duda amarilla localizada en el corte anterior: la ampliación quirúrgica (lectura íntegra del capítulo "opening ceremony", más allá de agradecimientos) confirma que el propio libro liga "queer freedom" y "Black sovereignty" con el signo ":" que la autora usa deliberadamente para significar co-constitución, no jerarquía. Arquitectura especial frontera_constitutiva [C7, C10], sin principal. `smith_sexcitizen` (Faith Smith, ed., *Sex and the Citizen*, 2011) confirma, por lectura propia e independiente, el mismo patrón: la introducción editorial "Sexing the Citizen" liga programáticamente sexualidad y ciudadanía/soberanía en todo el volumen, a diferencia de Mohammed 2002, donde la introducción no articulaba una tesis transversal semejante.

`kingisland` (Rosamond S. King, *Island Bodies*, 2014) confirma principal C10; el concepto "Caribglobal" de su introducción es un marco metodológico-comparativo, no una tesis de creolización, por lo que C8 se descarta por completo.

`shellererotic` (Mimi Sheller, *Citizenship from Below*, 2012) se verifica manualmente y no corresponde a ningún archivo disponible en `Pagina/Biliografia `. El hallazgo coincide con tres campañas documentales previas ya cerradas —`apertura-control-p3-b-etapa-2-3i.md` (§57, listado en `3_CASOS_BLOQUEADOS`), `apertura-recalibracion-p3-etapa-2-3g.md` (grado relacional 10, `NO_LOCALIZADA`) y `campana-recuperacion-bibliografica-post-p3.md` (búsqueda externa ya agotada: Duke UP, academia.edu, archive.org, sin PDF autoarchivado)—. Se marca `BLOQUEADO_FUENTE_VERIFICACION_MANUAL` sin nueva búsqueda externa, conforme al protocolo. Queda con `recorrido=null`, `estado_recorrido=pendiente`, `revision.estado=pendiente_revision_con_texto` (mismo valor de esquema ya usado en `mintz` para casos sin texto disponible). No cuenta como pendencia resuelta.

N=3 (más 1 bloqueado sin veredicto), U=6, P=12, R=4,0 (sobre los 3 casos con veredicto). Validación: `sincronizar.py --check` + 4 validadores, 0 errores nuevos — se corrigió dentro del propio lote un error nuevo transitorio (`revision.estado` inválido en `shellererotic`, ajustado al valor de esquema válido `pendiente_revision_con_texto` antes de cerrar el lote).

## 3. Universos MICRO

`C2_silencio_de_archivo` (prioridad A): no tocado por los lotes 2–4 — su único pendiente real, `trouillotsilencing`, no forma parte de ninguno de los tres. Permanece en 1 pendiente real, **no cerrado**, conforme a lo ya anticipado ("queda para una sesión futura").

`C3_anclas_fenomenos` (prioridad A): no tocado. Permanece en 2 pendientes reales (`escalante`, más `casimir` bloqueado desde antes).

Ningún universo de los quince se cerró durante los lotes 2–4. `C5_anclas_fenomenos` sigue siendo el único cerrado, y lo estaba desde antes de abrir esta fase.

## 4. Tabla resumen del bloque

| lote | casos | pendencias cerradas | universos afectados | universos cerrados | ratio |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 2 (= apertura L1) | 4 | 22 | 10 | 0 | 5,50 |
| 3 (= apertura L2) | 4 | 19 | 10 | 0 | 4,75 |
| 4 (= apertura L3) | 3 (+1 bloqueado) | 12 | 6 | 0 | 4,00 |
| **Total lotes 2–4** | **11 (+1 bloqueado)** | **53** | **12** | **0** | **4,82** |

## 5. Estado acumulado (desde apertura, lotes 1–4 propios)

- Casos resueltos desde apertura: **15** de 82 pendientes reales originales (`mohammed_generosrealidades`, `cunin`, `lassoerased`, `garciapenaborders`, `clarkemymother`, `gosinenature`, `barrowfamily`, `allenvenceremos`, `godreauscripts`, `wirtzperforming`, `fanon`, `citizenshipedge`, `lara`, `smith_sexcitizen`, `kingisland`).
- Pendientes reales restantes: **67** (82 − 15; `shellererotic` sigue contando como pendiente real, ahora con verificación de fuente agotada).
- Pendencias de universo cerradas (acumuladas): **75** (22 del lote 1 propio + 53 de los lotes 2–4).
- Universos afectados (acumulados, unión de los cuatro lotes): **13** de 15 (`C2_silencio_de_archivo`, `C4_universo_pendiente`, `C7_exploratorio`, `C7_soberanias_sin_lote`, `C7_anclas_fenomeno`, `C8_exploratorio`, `C8_creolizacion_sin_lote`, `C8_anclas_fenomeno`, `C9_exploratorio`, `C9_anclas_fenomeno`, `C10_exploratorio`, `C10_cuerpo_erotica_sin_lote`, `C10_anclas_fenomeno`). Sin tocar: `C3_anclas_fenomenos`, `C5_anclas_fenomenos` (este último, cerrado desde antes).
- Universos cerrados por este triage: **0** (ninguno de los quince alcanzó cero pendientes reales en los cuatro lotes propios).
- Bloqueados nuevos: **1** (`shellererotic`, `BLOQUEADO_FUENTE_VERIFICACION_MANUAL`).
- Ratio acumulado desde el lote propio 1: `R_acumulado = 75 / 15 = 5,0`.

## 6. Umbral de aceleración (§13 de la instrucción)

`R_acumulado = 5,0 ≥ 3`: el protocolo multipropósito sigue siendo altamente productivo. Se recomienda mantener bloques de 4 lotes de la apertura antes del próximo punto de control, en vez de reducir a bloques de 3.

## 7. Recalibración de los lotes 5–16 de la apertura

Se contrastó cada uno de los doce lotes restantes propuestos en la apertura (Lotes 5 a 16, 47 casos) contra los 15 ids ya resueltos en este bloque y contra el estado actual de los quince universos:

- **Casos ya resueltos que reaparecen en Lotes 5–16:** ninguno. Los 15 ids resueltos en los lotes propios 1–4 corresponden exactamente a los Lotes 1–4 de la apertura; ningún otro lote los repite.
- **Lotes que quedaron parcialmente vacíos:** ninguno. El único bloqueo nuevo (`shellererotic`) pertenecía al Lote 3 de la apertura, ya cerrado; no resta rendimiento a ningún lote pendiente.
- **Universos cerrados que reducirían el rendimiento anunciado de algún lote:** ninguno, porque ningún universo se cerró en este bloque (sección 3).
- **Casos multipropósito cuyo valor estratégico cambió:** no se detectó ninguno; los solapamientos declarados en la apertura para los Lotes 5–16 siguen siendo válidos tal como fueron calculados.

`PROPUESTA_COMPACTACION_LOTES_RESTANTES`: **mantener** los Lotes 5–16 tal como fueron diseñados en la apertura, sin recalcularlos ni fusionarlos. Dado el ratio acumulado (§6), se sugiere para la próxima fase ejecutarlos en bloques de cuatro (Lotes 5–8, luego 9–12, luego 13–16) con un punto de control de validación al cierre de cada bloque, replicando el ritmo de este bloque.

## 8. Nota sobre cambios concurrentes en el repositorio

Durante la ejecución del lote 4 propio se detectó, en el árbol de trabajo del repositorio, una siembra bibliográfica en curso ajena a este triage: 17 ids nuevos en `datos-atlas.json` (`boguesheretics`, `zeidermanartery`, `barriteauconfronting`, `scottvientocomun`, `becklesgreathouse`, `espinosahabitarmultiespecie`, `schullerhumanitarian`, `antczakislandssalt`, `friedemanncrossmangombe`, `featherstonecricket`, `coopernoises`, `josephmocombefirmin`, `forsdickhogsbjergreader`, `hillmandagostinocaribbean`, `kingshoals`, `honychurchcaribbeanpeople1`, `quinterosalsa`) y modificaciones sin comprometer en varios archivos de `proyectos/*.html` y `scripts/validar-atlas.mjs`, `scripts/verificar-cifras-sitio.mjs`. Ninguno de esos archivos ni ids fue tocado, leído para decisión académica ni incluido en el staging de los commits `6b43d31`, `6cde6a3` o `61da24d`: cada commit se auditó programáticamente (comparación semántica HEAD↔índice) para confirmar que solo los ids del lote correspondiente cambiaban antes de comprometer. Esos cambios concurrentes siguen sin comprometer en el árbol de trabajo, a la espera de quien los esté produciendo.

## 9. Validación acumulada

Los tres commits de este bloque (`6b43d31`, `6cde6a3`, `61da24d`) pasaron, cada uno por separado antes de comprometerse, `sincronizar.py --check` y los cuatro validadores vigentes (`validar-atlas.mjs`, `validar-fenomenos.mjs`, `validar-temporalidad.mjs`, `validar-piloto-atlas-2.mjs`) con **0 errores nuevos** y las mismas advertencias de línea base (`ulysseWhyHaiti`, `totumo`/`figueroa` sin año, títulos compuestos, mínimos de fenómenos en `keeganhofman`/`bonilla`/`ferdinand`, pendientes de temporalidad). El único error nuevo transitorio detectado (`revision.estado` inválido en `shellererotic` durante la preparación del lote 4 propio) se corrigió dentro del mismo lote, antes de comprometer, usando el valor de esquema `pendiente_revision_con_texto` ya validado por el precedente `mintz`.

`VALIDACION_0_ERRORES_NUEVOS`.
