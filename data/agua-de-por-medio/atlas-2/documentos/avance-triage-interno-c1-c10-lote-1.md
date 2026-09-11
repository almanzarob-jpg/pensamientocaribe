# Avance — Triage interno C1–C10, lote 1

Ejecuta el primer lote del `TRIAGE_INTERNO_C1_C10` abierto en `apertura-triage-interno-c1-c10.md` (commit `f52f19e`). No reabre los 16 lotes propuestos ni la Reconciliación documental C1–C10; procesa un único lote y se detiene.

## 1. Selección del lote

Se evaluaron los 16 lotes propuestos en la sección 12 de la apertura contra los cinco criterios de la instrucción, en orden. El **Lote 4** de esa propuesta (`mohammed_generosrealidades`, `cunin`, `lassoerased`, `garciapenaborders`) cumple simultáneamente los tres primeros criterios y se seleccionó sin comparar por los criterios menores:

1. Contiene `garciapenaborders`, uno de los cuatro ids de grado de solapamiento máximo (7) señalados por la propia apertura.
2. Avanza `C2_silencio_de_archivo`, uno de los dos universos MICRO de prioridad A (cierra 2 de sus 3 pendientes reales).
3. Sus cuatro casos están `LISTO_PARA_LECTURA`: los cuatro tenían evidencia bibliográfica local verificada en el primer corte automático de la apertura.
4. (De referencia, no necesario tras cumplir 1+2+3): es además el lote de mayor rendimiento de los 16 — 11 universos distintos avanzados con solo 4 lecturas, el máximo de toda la propuesta.
5. Ninguno de los cuatro casos es ambiguo, bloqueado o de autoautoría.

Exclusiones verificadas: ninguno de los cuatro casos depende de `almanzaorilla`, `zonabananera`, de los cinco congelados de la campaña bibliográfica, ni de fuente no confirmada.

No se reorganizaron los 16 lotes: no hay contradicción de diseño que lo exija.

## 2. Verificación manual de fuente

El corte de disponibilidad de la apertura fue automático por nombre de archivo. Se confirmó manualmente cada uno de los 4 casos contra el PDF real en `Pagina/Biliografia `:

| id | archivo verificado | páginas | coincide título/autor/año con el nodo | extracción de texto real |
|---|---|---:|---|---|
| `garciapenaborders` | *The Borders of Dominicanidad*, García-Peña, Duke UP, 2016 | 289 | sí | sí (introducción y epílogo legibles) |
| `lassoerased` | *Erased: The Untold Story of the Panama Canal*, Lasso, Harvard UP, 2019 | 352 | sí | sí (introducción y epílogo legibles) |
| `cunin` | *Identidades a flor de piel*, Cunin, 2003 | 372 | sí | sí (índice y cuerpo legibles) |
| `mohammed_generosrealidades` | *Gendered Realities*, Mohammed (ed.), 2002 | 562 | sí | sí (introducción editorial legible) |

Los 4 casos pasan la verificación manual. Ninguno se marca `BLOQUEADO_FUENTE_VERIFICACION_MANUAL`. No se hizo búsqueda externa.

## 3. Registro multipropósito por caso

| id | universos donde aparece (apertura, sección 6) |
|---|---|
| `garciapenaborders` | C2\_silencio\_de\_archivo, C7\_exploratorio, C7\_anclas\_fenomeno, C8\_exploratorio, C8\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno |
| `lassoerased` | C2\_silencio\_de\_archivo, C4\_universo\_pendiente, C7\_exploratorio, C7\_anclas\_fenomeno, C9\_exploratorio, C9\_anclas\_fenomeno |
| `cunin` | C7\_exploratorio, C7\_anclas\_fenomeno, C8\_exploratorio, C8\_anclas\_fenomeno, C10\_exploratorio |
| `mohammed_generosrealidades` | C8\_exploratorio, C8\_creolizacion\_sin\_lote, C10\_exploratorio, C10\_cuerpo\_erotica\_sin\_lote |

Cada obra se leyó una sola vez y se decidió una sola vez para todos sus universos, conforme al contrato `OBJETO → CONDICIONES → MECANISMO → PRINCIPIO ORGANIZADOR → RETIRADA → DIRECCIONALIDAD → COBERTURA → DEPENDENCIA`. Antes de decidir se comprobó el catálogo de fenómenos vigente (`catalogo-fenomenos.json`): `garciapenaborders` y `lassoerased` ya estaban anclados a `silencio_de_archivo`; `garciapenaborders` y `cunin` ya estaban anclados a `formacion_racial_nacional` (que liga precisamente C7 y C8); `lassoerased` ya estaba anclado a `enclave_y_extractivismo` (que liga precisamente C4 y C7). Ninguna de esas anclas se reabrió ni se modificó: se usaron como evidencia ya validada por dictámenes previos, no como conjetura propia.

## 4. Decisiones de lectura

### `garciapenaborders` — Lorgia García-Peña, *The Borders of Dominicanidad* (2016) — 🟢 VERDE

Lectura acelerada: nota terminológica, introducción completa, tabla de contenidos, epílogo completo (`Anti-Haitianism and the Global War on Blackness`).

- **Objeto:** genealogía de la "dominicanidad" como categoría racial-nacional producida por repetición narrativa en cinco episodios (1822–2010).
- **Mecanismo:** el "bordering" de la nación —violencia física e histórica sobre cuerpos racializados— sostenido por dictions (historia + literatura) que producen silencio archivístico.
- **Principio organizador:** la frontera Haití–República Dominicana como dispositivo de soberanía nacional, ocupada dos veces por EE.UU. (1916–24, 1965) y reforzada hoy por La Sentencia (2013) y el CESFRONT. Organiza el libro entero, título incluido.
- **Retirada / candidaturas descartadas:** ninguna corriente se descarta por completo; C9 no alcanza a ser principal.
- **Cobertura:** capítulo 1 (Vírgenes Galindo, Olivorio Mateo, espiritualidad afrodominicana como archivo del cuerpo vivo, cita a M. Jacqui Alexander) da sustantividad real pero secundaria a C9. Los capítulos 4–5 ("Rayano consciousness", "Writing from El Nié") dan sustantividad real pero secundaria a C8 (diction, bilingüismo, "linguistic terrorism").
- **Dependencia:** el ancla ya registrada de `formacion_racial_nacional` depende de C7+C8 conjuntamente; se confirma, no se reabre.

**Decisión:** `recorrido = c7` (soberanías/fronteras/ocupaciones); `recorridos_sec = [c8, c9]`. `estado_recorrido = confirmado`.

| universo | resolución |
|---|---|
| C2\_silencio\_de\_archivo | CONFIRMADO\_COMO\_CORRIENTE (ancla ya registrada, verificada) |
| C7\_exploratorio | CONFIRMADO\_COMO\_CORRIENTE (principal) |
| C7\_anclas\_fenomeno | CONFIRMADO\_COMO\_CORRIENTE (ancla ya registrada en `formacion_racial_nacional`) |
| C8\_exploratorio | SECUNDARIA |
| C8\_anclas\_fenomeno | CONFIRMADO\_COMO\_CORRIENTE (misma ancla de `formacion_racial_nacional`) |
| C9\_exploratorio | SECUNDARIA |
| C9\_anclas\_fenomeno | SECUNDARIA (presencia real —cap. 1— pero no cumple con rigor ningún fenómeno ya catalogado bajo C9; no se crea ancla nueva en esta fase) |

### `lassoerased` — Marixa Lasso, *Erased: The Untold Story of the Panama Canal* (2019) — 🟡 AMARILLO → resuelto

Duda localizada: ¿C4 principal con C7 secundaria, o arquitectura especial? Ampliación quirúrgica: lectura íntegra del epílogo (no solo introducción/TOC).

- **Objeto:** el despoblamiento de 40 000 personas y el borrado de las ciudades panameñas de la Zona del Canal (1913–16) de la narrativa oficial de una "jungla virgen".
- **Mecanismo:** el epílogo mismo lo declara en dos ejes iguales: (a) restituir la coautoría panameña, antillana e inmigrante de la modernidad urbana y republicana borrada (trabajo, mercados, autogobierno municipal); (b) desmontar el aparato de soberanía-enclave (la Zona como territorio "as if it were a sovereign") que ejecutó ese borrado.
- **Principio organizador:** ninguno de los dos ejes es reducible al otro — no hay forma de leer el libro como "fundamentalmente" desposesión postplantación sin la Zona-como-soberanía, ni al revés.
- **Retirada:** C9 se descarta por completo — el único asomo de memoria oral es el epígrafe del epílogo (testimonio del padre de Danilo Pérez Urriola); la evidencia central del libro son archivos oficiales (NARA), no archivo vivo.
- **Cobertura:** el ancla ya registrada `enclave_y_extractivismo` liga exactamente `postplantacion_trabajo_desposesion` (C4) y `soberanias_fronteras_ocupaciones` (C7) — confirma la lectura, no la origina.
- **Dependencia:** arquitectura FRONTERA\_CONSTITUTIVA, sin principal.

**Decisión:** `recorrido = null`; `arquitectura_recorrido = {tipo: frontera_constitutiva, recorridos: [c4, c7]}`. `estado_recorrido = confirmado`.

| universo | resolución |
|---|---|
| C2\_silencio\_de\_archivo | CONFIRMADO\_COMO\_CORRIENTE (ancla ya registrada, verificada) |
| C4\_universo\_pendiente | ARQUITECTURA\_ESPECIAL (frontera constitutiva C4/C7) |
| C7\_exploratorio | ARQUITECTURA\_ESPECIAL (frontera constitutiva C4/C7) |
| C7\_anclas\_fenomeno | ARQUITECTURA\_ESPECIAL (misma ancla de `enclave_y_extractivismo`) |
| C9\_exploratorio | DESCARTADO\_COMPLETAMENTE |
| C9\_anclas\_fenomeno | DESCARTADO\_COMPLETAMENTE |

### `cunin` — Elisabeth Cunin, *Identidades a flor de piel* (2003) — 🟢 VERDE

Lectura acelerada: tabla de contenidos completa (5 capítulos), introducción, secciones dirigidas a los capítulos 3 (cuerpo/reinas de belleza) y 4 (palenqueros/marco étnico).

- **Objeto:** cómo se clasifica "lo negro" en Cartagena entre apariencia corporal y pertenencia étnica, bajo el multiculturalismo colombiano nacido en 1991.
- **Principio organizador:** la ambigüedad/mezcla de las categorías raciales como práctica social cotidiana — mestizaje, invisibilidad negra, evitamiento de categorías — es el objeto declarado del libro entero (capítulos 1, 2 y 5).
- **Cobertura secundaria:** capítulo 3 completo ("la puesta en escena del cuerpo": reinas de belleza, "Barbie negra") da sustantividad real y acotada a C10. El ancla ya registrada `formacion_racial_nacional` (compartida con `garciapenaborders`) liga C7 (política multicultural del Estado, Ley 70, reconocimiento étnico de los palenqueros, capítulo 4) como secundaria real, no principal — el libro no es un análisis de política estatal sino de práctica social cotidiana de clasificación.
- **Retirada:** ninguna corriente se descarta por completo.

**Decisión:** `recorrido = c8` (creolizaciones/traducciones/opacidades); `recorridos_sec = [c7, c10]`. `estado_recorrido = confirmado`.

| universo | resolución |
|---|---|
| C7\_exploratorio | SECUNDARIA |
| C7\_anclas\_fenomeno | CONFIRMADO\_COMO\_CORRIENTE (ancla ya registrada en `formacion_racial_nacional`) |
| C8\_exploratorio | CONFIRMADO\_COMO\_CORRIENTE (principal) |
| C8\_anclas\_fenomeno | CONFIRMADO\_COMO\_CORRIENTE (misma ancla de `formacion_racial_nacional`) |
| C10\_exploratorio | SECUNDARIA |

### `mohammed_generosrealidades` — Patricia Mohammed (ed.), *Gendered Realities* (2002) — 🟢 VERDE

Lectura acelerada: tabla de contenidos completa (7 partes, 29 capítulos + prólogo), introducción editorial completa ("The Material of Gender").

- **Objeto:** volumen colectivo de pensamiento feminista caribeño — teoría de género, historiografía, academia, familia/economía, literatura, medios y "construcción del género".
- **Principio organizador:** la propia introducción de la editora declara el género como categoría analítica que organiza todo el volumen ("gendered identities", "masculinity and femininity", "the study of gender"). No requiere inferencia: es la declaración programática del libro.
- **Retirada:** C8 (creolización) se descarta por completo para el volumen como unidad. Los capítulos autónomos de Verene Shepherd (diáspora india en Jamaica) y Alissa Trotz (etnicidad en Guyana) tocan el tema de forma aislada, pero —aplicando el criterio ya establecido para volúmenes editados— un capítulo autónomo no arrastra corriente secundaria al volumen completo cuando la introducción editorial no articula una tesis transversal de mezcla/opacidad racial, que aquí no articula.

**Decisión:** `recorrido = c10` (cuerpos/parentescos/eróticas); `recorridos_sec = []`. `estado_recorrido = confirmado`.

| universo | resolución |
|---|---|
| C8\_exploratorio | DESCARTADO\_COMPLETAMENTE |
| C8\_creolizacion\_sin\_lote | DESCARTADO\_COMPLETAMENTE |
| C10\_exploratorio | CONFIRMADO\_COMO\_CORRIENTE (principal) |
| C10\_cuerpo\_erotica\_sin\_lote | CONFIRMADO\_COMO\_CORRIENTE (principal) |

## 5. Tabla resumen

| caso | universos | principal | secundarias | arquitectura | semáforo | deudas cerradas | estado |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `garciapenaborders` | 7 | C7 | C8, C9 | — | 🟢 VERDE | 7 | confirmado |
| `lassoerased` | 6 | — | — | FRONTERA\_CONSTITUTIVA C4/C7 | 🟡→resuelto | 6 | confirmado |
| `cunin` | 5 | C8 | C7, C10 | — | 🟢 VERDE | 5 | confirmado |
| `mohammed_generosrealidades` | 4 | C10 | — | — | 🟢 VERDE | 4 | confirmado |

## 6. Universos MICRO avanzados o cerrados

`C2_silencio_de_archivo` (MICRO, prioridad A): avanza de 3 a 1 pendiente real neto (`trouillotsilencing`, asignado al Lote 5, queda para una sesión futura). **No queda cerrado.**

`C3_anclas_fenomenos` (MICRO, prioridad A): no tocado por este lote — sus 2 pendientes (`escalante`, `casimir`… nota: `casimir` está `BLOQUEADO_FUENTE`, así que su único pendiente `LISTO_PARA_LECTURA` es `escalante`, en Lote 5) permanecen intactos.

Ningún universo de los quince queda `UNIVERSO_CERRADO_POR_TRABAJO_PREVIO` adicional a `C5_anclas_fenomenos`, ya cerrado desde la apertura.

## 7. Número de universos afectados

11 universos distintos avanzaron: `C2_silencio_de_archivo`, `C4_universo_pendiente`, `C7_exploratorio`, `C7_anclas_fenomeno`, `C8_exploratorio`, `C8_creolizacion_sin_lote`, `C8_anclas_fenomeno`, `C9_exploratorio`, `C9_anclas_fenomeno`, `C10_exploratorio`, `C10_cuerpo_erotica_sin_lote`. (`C7_soberanias_sin_lote` y `C10_anclas_fenomeno` no fueron tocados por ninguno de los 4 casos de este lote.)

## 8. Ratio de rendimiento

- **Casos leídos (N):** 4.
- **Universos afectados (U):** 11.
- **Pendencias internas cerradas (P):** 22 — la suma de las apariciones de universo resueltas por caso (`garciapenaborders` 7 + `lassoerased` 6 + `cunin` 5 + `mohammed_generosrealidades` 4). Cada aparición cuenta una sola vez y corresponde a un veredicto explícito y distinto (`CONFIRMADO_COMO_CORRIENTE`, `SECUNDARIA`, `DESCARTADO_COMPLETAMENTE` o `ARQUITECTURA_ESPECIAL`), no a una relectura.
- **Ratio P/N:** 22/4 = **5,5**.

No se optimizó la cifra: los 22 son deudas efectivamente resueltas con verdicto documentado, no universos meramente "tocados".

## 9. Ampliaciones

Una ampliación quirúrgica: lectura íntegra del epílogo de `lassoerased` (más allá de introducción/TOC) para resolver la duda AMARILLA sobre arquitectura especial frente a principal/secundaria simple.

## 10. Bloqueos

Ninguno. Los 4 casos pasaron la verificación manual de fuente (sección 2). No se generó ningún `BLOQUEADO_FUENTE_VERIFICACION_MANUAL` nuevo.

## 11. Validación

- Sincronización: `python3 data/agua-de-por-medio/sincronizar.py` — `datos-atlas.json` regenerado desde `datos-atlas.js`, 257 obras, 614 relaciones, sin cambios de conteo.
- Cuatro validadores (`validar-atlas.mjs`, `validar-fenomenos.mjs`, `validar-temporalidad.mjs`, `validar-piloto-atlas-2.mjs`): **0 errores** en los cuatro, antes y después del cambio. Las advertencias preexistentes (`ulysseWhyHaiti`, `totumo`/`figueroa` sin año, títulos compuestos, mínimos de fenómenos en `keeganhofman`/`bonilla`/`ferdinand`, pendientes de temporalidad) son las mismas de la línea base: **0 errores nuevos**.
- Auditoría de alcance: `git diff --stat` muestra cambios únicamente en `data/agua-de-por-medio/datos-atlas.js` y su espejo `datos-atlas.json`. Solo los 4 casos de este lote presentan cambio semántico (campos `recorrido`, `recorridos_sec`, `arquitectura_recorrido`, `estado_recorrido`, `revision`, `fuente_recorrido`); ninguna otra de las 257 obras fue tocada.

`0 errores nuevos` — cumplido.
