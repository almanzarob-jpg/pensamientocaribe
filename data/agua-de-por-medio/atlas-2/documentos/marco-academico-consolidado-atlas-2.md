# Marco académico consolidado del Atlas 2.0

Etapa 2.1 · Consolidación normativa de C1–C10 · Dirección Académica de Pensamiento Caribe
Preparado sobre la rama `feat/atlas-2-etapa-1-integrada`, HEAD `5751054d92e29fba2858d3059378e84797ee5b57` (local = remoto)
Borrador para revisión de la Dirección Académica. No versionado, no comprometido a Git.

---

## 1. Naturaleza y autoridad

Este documento sintetiza, ordena y hace trazables las diez decisiones académicas ya emitidas para las corrientes C1 a C10 del Atlas 2.0 (`dictamen-academico-c1.md` a `dictamen-academico-c10.md`, todos fechados entre el 12 y el 17 de agosto de 2026, comprometidos en `data/agua-de-por-medio/atlas-2/documentos/`). Es un ejercicio de consolidación, no de dictamen: no reinterpreta las decisiones ya tomadas, no corrige contradicciones por iniciativa propia, no completa vacíos y no crea criterios nuevos. Donde una corriente o una frontera quedó abierta, sigue abierta aquí.

**No sustituye a los dictámenes originales.** En caso de duda o de discrepancia entre este marco y cualquier dictamen específico, el dictamen específico sigue siendo la fuente normativa primaria. Este documento y `matriz-fronteras-c1-c10.md` son los dos únicos archivos creados para esta consolidación; ningún otro archivo del repositorio fue tocado.

Los expedientes de evidencia (`expediente-evidencia-cN.md`) se usaron únicamente donde el propio dictamen los cita para un dato puntual —nunca como fuente normativa autónoma frente a un dictamen—, y solo están disponibles para C3 y C5 a C10. **C1 y C2 no tienen expediente de evidencia propio en el repositorio**; sus dictámenes verifican la evidencia directamente contra `datos-atlas.json` y los cuatro archivos de lote, sin citar un documento probatorio intermedio. Este hallazgo se registra en el apartado 22.

---

## 2. Principios generales

Solo reglas ya ratificadas, con su fuente:

- **Una obra entra en una corriente porque esa corriente organiza su argumento.** El reparto numérico entre corrientes no es criterio de clasificación, ni para migración ni para siembra (`catalogos-atlas-2.json`, `regla_clasificacion`; ratificado individualmente en los diez dictámenes).
- **Ninguna corriente depende exclusivamente de su etiqueta heredada.** En las diez corrientes, el número de candidaturas derivables automáticamente de las diez etiquetas antiguas es cero; la etiqueta heredada es, cuando existe, una vía de entrada para la lectura, nunca una equivalencia clasificatoria (ratificado explícitamente para `catástrofes`≠C6 en `dictamen-academico-c6.md` §5, y en términos equivalentes en los nueve dictámenes restantes).
- **La migración del corpus heredado y la siembra bibliográfica dirigida son dos procesos que no se mezclan** (`decisiones-pendientes.md`, "Dos procesos que no se mezclan"; heredado sin contradicción por ningún dictamen posterior).
- **Toda clasificación confirmada exige responsable, fecha y fundamento escrito**, y una candidatura preliminar nunca equivale a una corriente confirmada (`catalogos-atlas-2.json`, `reglas_estado`).
- **El dictamen específico de cada corriente prevalece sobre el plan operativo de siete etapas** cuando ambos entran en conflicto. Precedente fijado por `dictamen-academico-c1.md` (cambio de denominación no previsto por el plan) y sostenido expresamente por `dictamen-academico-c3.md` §2 ("el dictamen específico de cada corriente prevalece sobre el plan operativo... ninguna corriente posterior queda obligada por esta decisión a conservar su nombre; queda obligada, eso sí, a argumentar el cambio si lo propone").
- **Ninguna clasificación existente se reabre por efecto de estos dictámenes.** Las clasificaciones confirmadas en los lotes P00, S01, A01 y A02 quedan ratificadas en el estado en que se encontraban; ningún dictamen de C1 a C10 modifica `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` ni ningún archivo de lote.
- **Ningún catálogo técnico fue actualizado todavía con las denominaciones ratificadas.** El campo `provisional: true` de `catalogos-atlas-2.json` permanece sin tocar en las diez corrientes; la ratificación de una denominación es un acto documental y académico, no una escritura técnica (declarado explícitamente en C7 a C10; aplicable por extensión a C1–C6, donde ningún dictamen registra lo contrario).
- **No se autoriza siembra bibliográfica nueva para ninguna corriente en esta etapa**, con la excepción documental de C1 (ver apartado 22, hallazgo 6): los nueve dictámenes restantes (C2 a C10) contienen una cláusula expresa de no autorización; C1 no la contiene.

---

## 3. Vocabulario operativo

Fuente principal: `glosario-archipielico.md` (borrador de Etapa 1, agosto de 2026) y los diez dictámenes, que lo usan de forma consistente sin redefinirlo.

| Término | Definición operativa | Fuente |
|---|---|---|
| **Corriente** | Recorrido relacional que permite seguir fenómenos entre obras, prácticas, lugares y temporalidades sin reducirlos a una nación ni a una disciplina; principal explícita más hasta dos secundarias | `glosario-archipielico.md` |
| **Corriente principal** | El recorrido que organiza el argumento central de la obra | Ratificado en los diez dictámenes |
| **Corriente secundaria** | Dimensión sustantiva pero subordinada; se declara "cuando tenga peso sustantivo" | Fórmula recurrente desde `dictamen-academico-c4.md` §3 en adelante (C4, C7, C8) |
| **Frontera** | Zona de posible solapamiento entre dos corrientes, resuelta por un criterio de qué organiza el argumento, no por coincidencia léxica ni por el origen del sujeto | Formulación estabilizada desde `dictamen-academico-c3.md` §7.2 ("manda la forma del argumento, no el origen del sujeto") |
| **Copresencia (total)** | Ambas corrientes aparecen en la misma entrada, incluso cuando las dos son secundarias de una tercera | `dictamen-academico-c10.md` §7, Decisión 6 — formalizada solo en el último dictamen de la serie (ver apartado 22, hallazgo 4) |
| **Caso directo (de frontera)** | Una corriente es principal y la otra aparece como secundaria en la misma entrada | Ídem |
| **Fenómeno** | Proceso histórico, material, cultural o epistémico que atraviesa la cuenca del Gran Caribe; unidad de análisis, no categoría temática | `glosario-archipielico.md` |
| **Etiqueta heredada** | Valor del campo `f` de la taxonomía anterior (diez categorías cerradas); vía de entrada para la lectura, nunca criterio de clasificación | Ratificado en los diez dictámenes |
| **Señal (léxica)** | Coincidencia de patrón en título, autoría o campo `ap`; justifica lectura, no afirma nada sobre el argumento | `dictamen-academico-c1.md` §4.1, sostenido sin variación hasta C10 |
| **Ancla** | Asociación editorial previa entre una obra y un fenómeno, con fundamento escrito; justifica prioridad de lectura, no confirma fenómeno ni corriente | Ídem |
| **Candidatura (preliminar)** | Hipótesis registrada, nunca confirmación; exige corriente candidata única y prohíbe declarar corriente confirmada | `catalogos-atlas-2.json`, `reglas_estado` |
| **Lectura autorizada** | Autorización expresa para leer un conjunto de entradas contra una corriente; no equivale a candidatura, clasificación, ni autoriza modificar corpus, lotes o catálogos | Categoría formal que se estabiliza a partir de `dictamen-academico-c7.md` §10 (ver apartado 22, hallazgo 9) |
| **Procedencia** | Corpus heredado / siembra nueva / aporte externo / manifestación / pendiente de incorporación | `catalogos-atlas-2.json` |
| **Identidad bibliográfica** | Autoría, año, tipo, título y DOI verificados de una entrada; estrictamente independiente de su clasificación por corriente | Regla aplicada de forma idéntica en `esquiva` (C7§6), `chande` (C8§6, C9§8) y `manoalzada` (C9§8) |

No se inventan definiciones donde no existe base suficiente: **remolino**, **rastro**, **operación epistémica** y **marealéctica** están definidos en `glosario-archipielico.md` pero ningún dictamen de C1–C10 los usa como criterio operativo de clasificación, por lo que no se incorporan a esta tabla como vocabulario activo del proceso C1–C10.

---

## 4. C1 — Mundos indígenas, invasiones y persistencias

**Id:** `invasiones_mundos_indigenas`
**Denominación EN:** Indigenous worlds, invasions and persistence
**Principio analítico:** El argumento central trata mundos indígenas, invasión, despojo territorial, soberanía o persistencia histórica; el reparto numérico no clasifica (dictamen §7)
**Guion:** Aprobado conceptualmente (dictamen §2); **no incorporado aún** al catálogo ni a los lotes
**Incluye:** Invasión, despojo, soberanía indígena, persistencias y reaparición contemporánea; no reduce lo indígena a un pasado anterior a 1492 ni a un residuo cultural
**No incluye:** No especificado en un campo "no incluye" formal (el dictamen no usa formato de tabla estructurada, a diferencia de C3–C10; ver apartado 22, hallazgo 8)
**Vía constitutiva:** Relectura dirigida del corpus heredado + siembra bibliográfica complementaria (dictamen §3). **Sin cláusula de suspensión de siembra** (ver apartado 22, hallazgo 6)
**Reglas especiales:** Cero candidaturas automáticas verificadas sobre 232 entradas (§3.1); distinción obligatoria entre señal, ancla y estado editorial formal (§4)
**Fronteras ratificadas:** Ninguna con caso empírico confirmado
**Fronteras provisionales:** C1/C6 (dictamen de C6 §11)
**Fronteras abiertas:** C1/C3 (rifkinfictions, sin clasificar), C1/C5 (keeganhofman), C1/C7 (lectura exploratoria de 4 anclas), C1/C8, C1/C9, C1/C10, C1/C4, C1/C2 (con antecedente)
**Lecturas pendientes:** 19 entradas del universo de exploración (7 anclas + 12 señales), listadas en el apartado 18
**Fenómenos / tensiones:** Pendiente independiente sobre la denominación de C9, remitida y resuelta por `dictamen-academico-c9.md` §2 (ver apartado 22, hallazgo 5)
**Bibliografía pendiente:** No se autoriza aquí ninguna lista nueva; la siembra complementaria ya forma parte de la vía constitutiva declarada
**Siembra:** Ver apartado 21 y hallazgo 6 del apartado 22 — es la única corriente sin cláusula expresa de suspensión
**Fuente normativa:** `dictamen-academico-c1.md`, apartados 1–11

---

## 5. C2 — Trata, esclavización y plantación

**Id:** `trata_esclavizacion_plantacion`
**Denominación EN:** Slave trade, enslavement and plantation
**Principio analítico:** El régimen esclavista y los mundos producidos dentro y contra él organizan el argumento (dictamen §6)
**Guion:** Aprobado y sustituye al provisional de `etapa-1-arquitectura-integrada.md` (dictamen §6)
**Incluye:** Trata, esclavización, trabajo forzado, organización racial del espacio, vida social y parentesco producidos dentro y contra el régimen esclavista
**No incluye:** Reduce toda agencia a C3 (reservada a fuga/cimarronaje/insurgencia/emancipación)
**Vía constitutiva:** Relectura dirigida ya ejecutada y dictaminada (8 de agosto) + siembra bibliográfica orientada por vacíos, **no exigida todavía** (dictamen §2, §8)
**Reglas especiales:** Once clasificaciones ratificadas (5 principales + 6 secundarias) sin segunda lectura obligatoria (§3); `goffedarklab` es caso confirmado que el patrón léxico no habría detectado (§3.3)
**Fronteras ratificadas:** C2/C3, C2/C4 (bilaterales)
**Fronteras con antecedente:** C1/C2
**Fronteras provisionales:** C2/C6
**Fronteras abiertas/sin criterio:** C2/C5, C2/C7, C2/C8, C2/C10 (ver hallazgo 3 del apartado 22)
**Ratificada bilateral adicional:** C2/C9 (fijada aquí desde C2 §7.3, ratificada bilateralmente en `dictamen-academico-c9.md` §10, Decisión 12)
**Lecturas pendientes:** 34 entradas de relectura + 5 sin candidatura derivable (`decisiones-pendientes.md`, punto 1), priorizando `sherwood`
**Fenómenos / tensiones:** `plantacion_y_secuela` relevante para la frontera C2/C4; `segmentacion_racial_del_trabajo` no anticipa corriente principal; `silencio_de_archivo` más próximo a C9
**Bibliografía pendiente:** No exigida todavía; siembra condicionada a una muestra de relectura previa
**Siembra:** No exigida hasta identificar vacíos por lectura (fraseo más suave que la prohibición expresa de C3–C10; ver apartado 21)
**Fuente normativa:** `dictamen-academico-c2.md`, apartados 1–10

---

## 6. C3 — Fugas, cimarronajes y emancipaciones

**Id:** `fugas_cimarronajes_emancipaciones`
**Denominación EN:** Flight, marronage and emancipations
**Principio analítico:** La sustracción al poder —fuga, cimarronaje, insurgencia, emancipación— organiza el argumento; decide la forma del argumento, no el origen del sujeto (dictamen §7.2)
**Guion:** Aprobado, sustituye al provisional; distingue fuga / cimarronaje / emancipación como tres cosas dentro de la misma corriente (dictamen §6)
**Incluye:** Fuga, palenque y quilombo, comunidad cimarrona con territorio/lengua/gobierno propios, insurgencia, revolución, abolición y emancipación leídas desde abajo, sustracción cotidiana
**No incluye:** El régimen del que se huye (C2); la diáspora como circulación (C5); la disputa por la forma estatal como argumento central (C7)
**Vía constitutiva:** Migración parcialmente evidenciada del corpus heredado + relectura dirigida + corrección editorial, con pérdida parcial del rastro de candidaturas. **Sin siembra**, no demostrada (dictamen §3)
**Reglas especiales:** El artefacto general de 51 candidaturas anunciado por la metodología no se localizó y no se reconstruye (§4); todo lote futuro debe conservar la candidatura como dato (§4.3, no ejecutado)
**Fronteras ratificadas:** C2/C3, C3/C7, C3/C5 (bilaterales)
**Fronteras con antecedente:** C3/C4, C3/C10
**Fronteras abiertas:** C1/C3 (rifkinfictions), C3/C9 (parcialmente, 3 lecturas pendientes), C3/C8, C3/C6
**Lecturas pendientes:** 35 de la unión (21 etiquetadas + 9 anclas), 30 sin revisar, más tercer conjunto (`lightfoot` como primer caso)
**Fenómenos / tensiones:** `cimarronaje_territorial` como núcleo exclusivo de C3; `contraplantacion` obliga a ampliar el guion hacia la sustracción cotidiana; `etnogenesis` e `independencia_y_conflicto_regional` tensionan C3/C5 y C3/C7
**Bibliografía pendiente:** No autorizada; solo cinco de 26 entradas etiquetadas han pasado por lote
**Siembra:** No autorizada (dictamen §10)
**Fuente normativa:** `dictamen-academico-c3.md`, apartados 1–12; expediente `expediente-evidencia-c3.md`, commit `a295be0`

---

## 7. C4 — Postplantación, trabajo y desposesión

**Id:** `postplantacion_trabajo_desposesion`
**Denominación EN:** Post-plantation, labor and dispossession
**Principio analítico:** Régimen analítico dominante, no fecha de abolición; reorganizaciones del trabajo, la tierra, la raza, la dependencia y la desposesión (dictamen §2)
**Guion:** Sin ampliación (dictamen §5); "la plantación no terminó: se reorganizó"
**Incluye:** Régimen laboral postabolición, enclave y extracción, turismo como economía de la mirada, desposesión urbana y rural
**No incluye:** No especificado como campo formal separado en el dictamen
**Vía constitutiva:** No se transcribe una fórmula de vía constitutiva propia en el dictamen (a diferencia de C1–C3 y C5–C10); se infiere del apartado de fronteras que opera por régimen analítico dominante sobre casos migrados y reclasificados
**Reglas especiales:** 13 principales + 16 secundarias = 29 referencias sin duplicados; universo pendiente fijado en 33 por decisión metodológica expresa (criterio operativo: "pasar por lote, con cualquier corriente o ninguna, cuenta como atendido"), frente a 35 bajo el criterio estricto (§7)
**Fronteras ratificadas:** C2/C4, C4/C5, C4/C7, C4/C8 (bilaterales)
**Fronteras con antecedente:** C3/C4
**Fronteras provisionales:** C4/C6
**Fronteras abiertas:** C4/C9, C4/C10
**Lecturas pendientes:** 33 entradas del universo; casos priorizados `perezmorales`, `sherwood`, `exceptviolence`, `jaffeconcrete`
**Fenómenos / tensiones:** Siete fenómenos compatibles, sin peso decisorio por decisión expresa
**Bibliografía pendiente:** `hoeftesuriname`, `allen_dikimanera`, `jaffeconcrete` identificados sin leer (Caribe neerlandófono); no se declara vacío comprobado
**Siembra:** No autorizada (dictamen §10)
**Fuente normativa:** `dictamen-academico-c4.md`, apartados 1–12; expediente `expediente-evidencia-c4.md`; `ficha-decision-c4.md` (no comprometido a Git — ver apartado 22, hallazgo 7)

---

## 8. C5 — Rutas, diásporas y territorios acuosos

**Id:** `rutas_diasporas_territorios_acuosos`
**Denominación EN:** Routes, diasporas and aqueous territories
**Principio analítico:** El trayecto o la circulación organizan el argumento dominante, no la sola mención de un elemento acuoso o de desplazamiento (dictamen §2)
**Guion:** Sin ampliación ni reescritura
**Incluye:** Migración, exilio, retorno, tránsito intelectual/musical/religioso, red diaspórica, geografías acuosas
**No incluye:** La trata como régimen (C2), la fuga (C3)
**Vía constitutiva:** Siembra bibliográfica dirigida (declarada, prevista); **las 15 entradas actuales son reclasificaciones preliminares del corpus heredado, no esa vía** — ninguna tiene `procedencia: "siembra nueva"` (dictamen §4)
**Reglas especiales:** 8 principales + 7 secundarias = 15, sin duplicados; sesgo territorial y lingüístico registrado sin convertirse en prioridad editorial (§13)
**Fronteras ratificadas:** C4/C5, C5/C7, C3/C5 (bilaterales)
**Fronteras con antecedente:** C5/C10, C5/C8 (con contradicción documental — ver apartado 22, hallazgo 2)
**Fronteras abiertas:** C5/C9
**Lecturas pendientes:** 40 entradas del universo (unión de conjuntos), 20 anclas de fenómeno
**Fenómenos / tensiones:** Seis fenómenos compatibles, sin peso decisorio; incorpora los cuatro casos heredados de C4 (`perezmorales`, `sherwood`, `exceptviolence`, `jaffeconcrete`) a su universo exploratorio sin alterar su prioridad de lectura fijada por C4
**Bibliografía pendiente:** Depende de que la Dirección Académica aporte lista completa, corriente de destino y citas con página; no recibida
**Siembra:** No autorizada en esta etapa (dictamen §14), aunque la vía declarada la prevé para el futuro
**Fuente normativa:** `dictamen-academico-c5.md`, apartados 1–17; `expediente-evidencia-c5.md`, `ficha-decision-c5.md`, `registro-decisiones-c5.md`

---

## 9. C6 — Huracanes, ecologías y materialidades vivas

**Id:** `huracanes_ecologias_materialidades_vivas`
**Denominación EN:** Hurricanes, ecologies and living materialities
**Principio analítico:** Huracanes, ecologías o materialidades vivas organizan el argumento dominante, no la sola mención (dictamen §2)
**Guion:** Sin ampliación; "el huracán es política antes que naturaleza" ([PROPUESTA] en el documento de arquitectura)
**Incluye:** Ecología política, humanidades ambientales, desastre, materialidad
**No incluye:** La marca `violencias` en su tipo ambiental
**Vía constitutiva:** Migración desde la etiqueta heredada `catástrofes`, sin equivalencia conceptual (`catástrofes` ≠ C6); puerta de entrada para lectura, nunca equivalencia clasificatoria (dictamen §4–5)
**Reglas especiales:** Solo 3 clasificaciones confirmadas (2 principales, 1 secundaria) — la muestra más pequeña de las diez corrientes; `gudynas` excluido por criterio territorial sin implementación técnica todavía (§7)
**Fronteras ratificadas:** Ninguna (las cuatro existentes son expresamente provisionales)
**Fronteras provisionales:** C1/C6, C2/C6, C4/C6, C6/C7 — las cuatro con máximo dos casos confirmados cada una, y dos de ellas (C1/C6, C2/C6) sostenidas por la misma obra (`goffedarklab`)
**Fronteras abiertas/sin criterio:** C3/C6, C5/C6, C6/C8, C6/C9, C6/C10
**Lecturas pendientes:** 17 del universo exploratorio (incluye las 11 heredadas `catástrofes` sin procesar), 11 anclas de fenómeno
**Fenómenos / tensiones:** Dos falsos positivos léxicos verificados por lectura (`felicianosantos`, `henrycaliban`)
**Bibliografía pendiente:** No se propone
**Siembra:** No autorizada (dictamen §16)
**Fuente normativa:** `dictamen-academico-c6.md`, apartados 1–19; `expediente-evidencia-c6.md`, `ficha-decision-c6.md`, `registro-decisiones-c6.md`

---

## 10. C7 — Soberanías, fronteras y ocupaciones

**Id:** `soberanias_fronteras_ocupaciones`
**Denominación EN:** Sovereignties, borders and occupations
**Principio analítico:** Estatus político no soberano, ocupación militar, frontera como dispositivo o formas de autoridad no estatal organizan el argumento; la mera aparición léxica no basta (dictamen §3)
**Guion:** Corregido solo en una cifra (retiro de la afirmación ordinal sobre `soberanias` como "segunda etiqueta más poblada"); resto sin cambio
**Incluye:** Estatus no soberano, ocupación militar, frontera, autoridad no estatal
**No incluye:** Insurgencia y fuga (C3); la marca `colonialidad`, que atraviesa todas
**Vía constitutiva:** Migración del corpus heredado (principal) + reclasificación por lectura editorial directa (segunda vía reconocida; 8 de 19 confirmaciones no tenían señal previa detectable)
**Reglas especiales:** Caso `esquiva` — identidad bibliográfica pendiente, clasificación (C7 principal/C4 secundaria) independiente de esa identidad (§6)
**Fronteras ratificadas:** C4/C7, C5/C7 (bilateral), C3/C7
**Fronteras provisionales:** C6/C7
**Fronteras abiertas:** C1/C7 (lectura exploratoria autorizada), C8/C7, C10/C7
**Sin criterio nuevo:** C2/C7 (cero casos, búsqueda expresa), C9/C7 (nunca binaria)
**Lecturas pendientes:** 52 `soberanias` sin lote, 78 del universo exploratorio, 38 anclas de fenómeno, 4 anclas de `indigeneidad_en_disputa`
**Fenómenos / tensiones:** Regla formal sobre `autoridad` como señal insuficiente sin calificar (3 falsos positivos verificados: `schweitzerbata`, `mitchellalibi`, `rappaportcobarde`)
**Bibliografía pendiente:** No se propone
**Siembra:** No autorizada; debe agotarse primero el corpus interno (dictamen §11)
**Fuente normativa:** `dictamen-academico-c7.md`, apartados 1–13; `expediente-evidencia-c7.md` (no comprometido a Git al momento de C9 — ver apartado 22, hallazgo 7)

---

## 11. C8 — Creolizaciones, traducciones y opacidades

**Id:** `creolizaciones_traducciones_opacidades`
**Denominación EN:** Creolizations, translations and opacities
**Principio analítico:** Lenguas criollas, creolización como proceso, traducción y sus límites, u opacidad como derecho organizan el argumento (dictamen §3)
**Guion:** Sin correcciones; cifra del 22% verificada exacta por dos métodos independientes
**Incluye:** Lenguas criollas, creolización, traducción, opacidad
**No incluye:** La fricción epistémica (pertenece a la relación entre obras); el cruce lingüístico (dato derivado)
**Vía constitutiva:** Migración del corpus heredado (principal) + reclasificación por lectura editorial directa (segunda vía; 3 de 10 confirmaciones llegaron sin la etiqueta heredada)
**Reglas especiales:** Caso `chande` — identidad bibliográfica pendiente, clasificación (C9 principal/C8 secundaria) independiente; caso `benedictykokken_haitiexception` — corrección de título aprobada y no sincronizada (§11)
**Fronteras ratificadas:** C4/C8, C9/C8 (bilaterales)
**Fronteras con antecedente / evidencia reconocida:** C5/C8 — contradicción documental de `dictamen-academico-c5.md` detectada y no corregida (ver apartado 22, hallazgo 2)
**Fronteras abiertas:** C7/C8, C1/C8, C2/C8, C3/C8, C6/C8, C10/C8 (estas cinco últimas, sin lectura dirigida)
**Lecturas pendientes:** 43 `creolizacion` sin lote, 63 del universo exploratorio, 34 anclas de fenómeno
**Fenómenos / tensiones:** Tres falsos positivos léxicos verificados (`hazareesingh`, `muneraelfracaso`, `olsencartagena`); `castrogomezhybris` señal ambigua sin resolver
**Bibliografía pendiente:** No se propone
**Siembra:** No autorizada (dictamen §12)
**Fuente normativa:** `dictamen-academico-c8.md`, apartados 1–14; `expediente-evidencia-c8.md`

---

## 12. C9 — Archivos vivos, espiritualidades y saberes transmitidos

**Id:** `memorias_espiritualidades_archivos_vivos`
**Denominación EN:** Living archives, spiritualities and transmitted knowledges
**Principio analítico:** Formas vivas, comunitarias, corporales, espirituales, performativas o insurgentes de transmisión, conservación, producción y activación de saber; el criterio de ingreso es la función, no el soporte (dictamen §3)
**Guion:** Ratificado sin reescritura; "contra el silenciamiento institucional, el archivo vivo"
**Incluye:** Archivos comunitarios, contraarchivos, archivos familiares, oralidad, testimonio, música, performance, ritual, espiritualidad como conocimiento
**No incluye:** La marca `memoria` (transversal); revisión historiográfica interna a la disciplina sin formas vivas o comunitarias, salvo compatibilidad condicionada (Decisión 6)
**Vía constitutiva:** Migración del corpus heredado con reparto obligado; `memoria` no es equivalencia automática (solo 3 de 11 confirmaciones llevan esa etiqueta)
**Reglas especiales:** Denominación resuelve la pendiente independiente registrada por `dictamen-academico-c1.md` §9 (ver apartado 22, hallazgo 5); regla técnica de detección léxica por límites de palabra (`ritual` dentro de `espiritual` no cuenta)
**Fronteras ratificadas:** C2/C9, C8/C9 (bilaterales)
**Fronteras abiertas:** C3/C9 (parcial), C4/C9, C1/C9
**Fronteras provisionales:** C9/C10
**Sin criterio nuevo, no reabiertas:** C6/C9, C7/C9 (antecedentes ya fijados desde esas corrientes)
**Lecturas pendientes:** 93 del universo exploratorio (incluye 86 con `memoria` sin lote), 40 anclas de fenómeno, 3 lecturas dirigidas C3/C9
**Fenómenos / tensiones:** `revision_historiografica` con compatibilidad condicionada, no eliminada ni ratificada plena; identidades bibliográficas de `chande` y `manoalzada` pendientes
**Bibliografía pendiente:** No se propone
**Siembra:** No autorizada (dictamen §13)
**Fuente normativa:** `dictamen-academico-c9.md`, apartados 1–17; `expediente-evidencia-c9.md` (estado de compromiso a Git verificado — ver apartado 22, hallazgo 7)

---

## 13. C10 — Cuerpos, parentescos y eróticas

**Id:** `cuerpos_parentescos_eroticas`
**Denominación EN:** Bodies, kinships and erotics
**Principio analítico:** Cuerpo, parentesco, sexualidad, deseo, erótica, violencia sexual/de género, familia o el cuerpo como espacio de inscripción, disputa, placer, libertad y poder (dictamen §2)
**Guion:** Ratificado sin reescritura; "el mismo cuerpo que fue objeto de propiedad es el que sostiene prácticas de soberanía"
**Incluye:** Ver principio analítico
**No incluye:** No especificado como campo formal separado
**Vía constitutiva:** Migración del corpus heredado (principal, 11 de 14 con etiqueta) + reclasificación editorial directa (3 de 14 sin etiqueta: `afrocentroam`, `floresvillalobos`, `islandscity`)
**Reglas especiales:** Candidaturas activas pendientes = 0 (corrección terminológica: las siete candidaturas históricas ya se resolvieron como C10 principal); estándar de conteo casos directos ≠ copresencia total (Decisión 6, formalizado aquí por primera vez); territorio ≠ lengua de publicación (corrección: Cuba y Panamá son hispanófonos entre los ocho territorios de las 14 confirmadas)
**Fronteras provisionales:** C9/C10
**Fronteras con antecedente, no reabiertas:** C3/C10 (desde C3), C5/C10 (desde C5, tratada como frontera propia)
**Fronteras abiertas:** C4/C10, C7/C10, C8/C10, C1/C10, C6/C10
**Sin tratamiento en ningún dictamen:** C2/C10 (ver apartado 22, hallazgo 3)
**Lecturas pendientes:** 28 del universo exploratorio (18 `cuerpo_erotica` sin lote como prioridad 2), 13 anclas de fenómeno, `quintero` (frontera C3/C10), `gomezexperiential` (frontera C9/C10)
**Fenómenos / tensiones:** B∩D = 0 entre anclas de fenómeno y clasificaciones confirmadas; no se interpreta como incompatibilidad
**Bibliografía pendiente:** Se autoriza ampliar deliberadamente la diversidad lingüística en la lectura de las 28 pendientes (español, francés, neerlandés, criollo)
**Siembra:** No autorizada (dictamen §15). Por ser la última corriente de la etapa, su cierre **no autoriza automáticamente** iniciar una fase posterior — requiere instrucción expresa e independiente
**Fuente normativa:** `dictamen-academico-c10.md`, apartados 1–19; `expediente-evidencia-c10.md`, comprometido y publicado (`ceb2df2`)

---

## 14. Reglas transversales

Verificación de autoridad documental para cada una de las diez distinciones que pide la instrucción de consolidación. Donde la evidencia no cubre las diez corrientes por igual, se marca como local o pendiente en vez de generalizarse.

| Regla | Autoridad documental | Alcance |
|---|---|---|
| Corriente principal = principio que organiza el argumento | Ratificada explícitamente en los diez dictámenes | **General** |
| Corriente secundaria = dimensión sustantiva pero subordinada | Fórmula recurrente desde C4 en adelante ("puede mantenerse como secundaria cuando tenga peso sustantivo": C4, C7, C8) | **General**, aunque la fórmula textual solo aparece desde C4 |
| Etiqueta heredada ≠ clasificación automática | Cero candidaturas automáticas verificadas en las diez corrientes | **General** |
| Señal léxica ≠ clasificación | Ratificada en C1 (§4.1) y reafirmada sin variación hasta C10 | **General** |
| Fenómeno ≠ corriente | `catalogo-fenomenos.json` declarado "borrador para dictamen académico" en todos los dictámenes que lo citan (C1–C10) | **General** |
| Ancla ≠ candidatura | Tabla de C1 §4.1, aplicada sin excepción en C2–C10 | **General** |
| Lectura autorizada ≠ candidatura | Categoría formal explícita solo a partir de C7 §10; C1–C6 usan "universo de exploración/relectura" sin ese nombre, con el mismo efecto | **General en sustancia, terminología estabilizada tardíamente** (ver apartado 22, hallazgo 9) |
| Candidatura ≠ clasificación | `catalogos-atlas-2.json`, `reglas_estado` | **General** |
| Clasificación ≠ identidad bibliográfica | Aplicada de forma idéntica en `esquiva` (C7), `chande` (C8, C9) y `manoalzada` (C9) | **Ratificada donde se probó (C7–C9); no puesta a prueba en C1–C6 ni C10** por ausencia de disputas bibliográficas registradas ahí |
| Caso directo de frontera ≠ copresencia total | Formalizada únicamente en `dictamen-academico-c10.md` §7, Decisión 6; aplicada explícitamente solo a C7/C10 | **Local.** No se aplicó retroactivamente a las demás 44 fronteras (ver apartado 22, hallazgo 4) |

---

## 15. Fronteras ratificadas

Bilaterales (criterio fijado y confirmado desde ambos lados, con casos): **C2/C3, C2/C4, C2/C9, C3/C5, C3/C7, C4/C5, C4/C7, C4/C8, C5/C7, C8/C9** (10 pares).

Con antecedente (criterio fijado, evidencia parcial o asimétrica): **C1/C2, C3/C4, C3/C10, C5/C8 (con contradicción documental pendiente), C5/C10** (5 pares).

Ver matriz completa en `matriz-fronteras-c1-c10.md`.

## 16. Fronteras provisionales

**C1/C6, C2/C6, C4/C6, C6/C7, C9/C10** (5 pares). Las cuatro fronteras de C6 quedan expresamente marcadas como provisionales y revisables por Decisión 16 de `dictamen-academico-c6.md` §17; C9/C10 queda provisional por Decisión 10 de C9 (§10) y Decisión 5 de C10 (§6), a la espera del dictamen de C10 —ya emitido— sin que ninguno de los dos documentos la reclasifique como ratificada.

## 17. Fronteras abiertas

Con evidencia (casos o anclas identificados, sin criterio fijado): **C1/C3, C1/C5, C1/C7, C3/C9, C4/C9, C5/C9, C7/C8, C7/C10** (8 pares).

Sin evidencia (lectura no dirigida, cero casos): **C1/C8, C2/C8, C3/C8, C6/C8, C8/C10** (5 pares).

Sin criterio formulado (no mencionadas, o mencionadas y descartadas sin caso): **C1/C4, C1/C9, C1/C10, C2/C5, C2/C7, C2/C10, C3/C6, C4/C10, C5/C6, C6/C9, C6/C10, C7/C9** (12 pares).

## 18. Lecturas pendientes consolidadas

Deduplicación de los ids que los propios dictámenes citan explícitamente en sus universos de lectura, anclas o lecturas dirigidas (metodología: unión de los conjuntos transcritos literalmente en cada dictamen; ver nota metodológica al final de este apartado). **40 ids aparecen citados en más de un universo o lectura autorizada**, de un total de 114 ids únicos citados de forma explícita en el corpus de los diez dictámenes:

| id | Corrientes que lo citan | Qué pregunta abre en cada una |
|---|---|---|
| `rifkinfictions` | C1 (ancla, `indigeneidad_en_disputa`), C3 (universo, frontera C1/C3), C7 (ancla, frontera C1/C7) | Si el argumento organiza indigeneidad, cimarronaje o soberanía frente a C7 |
| `felicianosantos` | C1 (ancla), C6 (falso positivo verificado), C7 (ancla, frontera C1/C7) | Ya resuelto para C6 (falso positivo); abierto para C1 y C7 |
| `womenancestors` | C1 (señal), C3 (ancla), C5 (universo) | Pertenencia a C1, C3 o C5 sin decidir |
| `gonzalezsojourners` | C1 (señal), C3 (universo, caso testigo frontera C3/C5), C5 (universo) | Caso testigo explícito de la frontera C3/C5 |
| `cosgrovegarifuna` | C1 (señal), C3 (ancla), C5 (universo) | Pertenencia a C1, C3 o C5 sin decidir |
| `sherwood` | C2 (universo, prioridad máxima), C4 (caso priorizado), C5 (universo, vía conjunto F) | Señal C2 más fuerte de las 34; prioridad compartida C2/C4/C5 |
| `perezmorales` | C2 (sin candidatura derivable), C4 (caso priorizado), C5 (universo, conjunto F) | Sin candidatura derivable desde que `capitalismo_racial`/`violencias` son marcas |
| `exceptviolence` | C2, C4, C5 (mismo patrón que `perezmorales`) | Ídem |
| `jaffeconcrete` | C2, C4, C5 (mismo patrón) | Ídem |
| `whiteheadtiger` | C1 (ancla), C7 (ancla, frontera C1/C7) | Frontera C1/C7 |
| `andersonblackindigenous` | C1 (ancla), C7 (ancla, frontera C1/C7) | Frontera C1/C7 |
| `schwartz_seaofstorms` | C1 (señal), C6 (universo, heredada `catástrofes`) | Pertenencia a C1 o C6 |
| `mintzarea` | C1 (señal), C2 (universo) | Pertenencia a C1 o C2 |
| `wynterblackmetamorphosis` | C1 (señal), C2 (universo) | Pertenencia a C1 o C2 |
| `ferrerfreedomsmirror` | C2 (universo), C3 (ancla `independencia_y_conflicto_regional`, frontera C3/C7) | Frontera C3/C7 |
| `casimir` | C2 (universo), C3 (ancla `contraplantacion`, prioridad de lectura 1) | El registro que obliga a ampliar el guion de C3 hacia la sustracción cotidiana |
| `roberts` | C2 (universo), C3 (universo, "cimarronaje como filosofía") | Pertenencia a C2 o C3 |
| `helglibertyequality` | C2 (universo), C3 (ancla) | Pertenencia a C2 o C3 |
| `mcneillmosquito`, `islandfutures`, `ferdinand`, `johnsonbelize`, `sharpewake`, `meniketinevis` | C2 (universo), C6 (universo) | Pertenencia a C2 o C6 |
| `mitchellalibi`, `sangbenvolviendo`, `pardomosquerahoffmann`, `kalefragments`, `becklessavingsouls` | C2 (universo), C5 (universo) | Pertenencia a C2 o C5 |
| `olsencartagena` | C2 (universo), C8 (falso positivo verificado) | Ya resuelto para C8; abierto para C2 |
| `chevannes`, `pricefirst`, `travelstooy` | C3 (universo, prioridad de lectura), C9 (lectura dirigida frontera C3/C9) | Si el argumento es sustracción (C3) o transmisión/ritual (C9) |
| `quintero` | C3 (caso que obligó a formular la regla del cimarronaje metafórico), C10 (lectura dirigida frontera C3/C10) | Si la subversión estética es principal (C10) o secundaria de C3 |
| `mintzpricebirth` | C3 (ancla), C5 (universo) | Pertenencia a C3 o C5 |
| `muneraelfracaso` | C3 (ancla), C8 (falso positivo verificado) | Ya resuelto para C8; abierto para C3 |
| `crawfordturtlemen`, `deloughrey` | C5 (universo), C6 (universo) | Pertenencia a C5 o C6 |
| `gomezexperiential` | C6 (universo), C10 (lectura dirigida frontera C9/C10) | Frontera C9/C10 |
| `atkinsonearliest` | C1 (ancla), C5 (universo) | Pertenencia a C1 o C5 |

**Nota metodológica.** Esta tabla deduplica únicamente los ids que cada dictamen transcribe literalmente en su propio texto. Cinco corrientes (C4, C7, C8, C9, C10) declaran universos de exploración más amplios que los que el dictamen imprime id por id (33, 78, 63, 93 y 28 entradas respectivamente) y solo transcriben ahí los casos priorizados, anclas nombradas o lecturas dirigidas específicas. Reconstruir esos universos completos exigiría cruzar `datos-atlas.json` directamente, lo que excede el mandato de esta consolidación (que trabaja sobre lo ya dictaminado, no sobre el corpus) y arriesgaría atribuir a una corriente una pertenencia que ningún dictamen afirmó. Se deja como tarea técnica separada en el apartado 22, hallazgo 4.

## 19. Incidencias bibliográficas pendientes

Vigentes según los dictámenes (identidad bibliográfica pendiente de verificación específica, sin fecha ni responsable asignado):

- **`esquiva`** — `dictamen-academico-c7.md` §6. No se atribuye autoría, año, tipo bibliográfico ni título definitivo.
- **`chande`** — `dictamen-academico-c8.md` §6, `dictamen-academico-c9.md` §8. Candidatura histórica doble (C8/C9) resuelta en C9 principal/C8 secundaria; identidad bibliográfica sin resolver.
- **`manoalzada`** — `dictamen-academico-c9.md` §8. Mismo tratamiento que `chande`.

No se resuelven aquí, conforme al mandato de esta consolidación.

## 20. Fenómenos

`catalogo-fenomenos.json` permanece en estado "borrador para dictamen académico; no se ha aplicado al corpus publicado" en las diez corrientes. Ninguna compatibilidad declarada ni ancla confirma corriente. Condición particular ratificada: `revision_historiografica` (C9, Decisión 6) puede permanecer compatible con C9 solo cuando trabaja críticamente el archivo como problema de silenciamiento, transmisión, contraarchivo o producción comunitaria de conocimiento — no cuando es revisión historiográfica interna a la disciplina sin formas vivas de transmisión. Esta precisión queda como ajuste conceptual futuro autorizado y no ejecutado en el catálogo técnico.

## 21. Siembra

Nueve de las diez corrientes (C2–C10) tienen cláusula expresa de no autorización de siembra bibliográfica nueva en esta etapa, condicionada a agotar primero el universo interno de cada corriente. C1 es la excepción: su vía constitutiva incluye la siembra complementaria como mecanismo ya aprobado, sin cláusula de suspensión (ver hallazgo 6 del apartado 22). C2 usa una fórmula más suave ("no se exige todavía") que C3–C10 ("no se autoriza"); en sustancia, ambas posponen la siembra a que una muestra de relectura identifique vacíos, así que no se trata como contradicción, aunque la diferencia de redacción queda registrada.

## 22. Tensiones que requieren revisión de la Dirección Académica

Solo problemas reales detectados durante la consolidación. Se numeran para la entrega final.

1. **[Asimetría documental]** No existen `expediente-evidencia-c1.md` ni `expediente-evidencia-c2.md` en el repositorio. C3 a C10 sí tienen expediente propio, citado explícitamente por su dictamen; C1 y C2 verifican su evidencia directamente contra `datos-atlas.json` y los lotes, sin documento probatorio intermedio. No se puede determinar desde este repositorio si esos expedientes existieron y no se comprometieron, o si nunca se produjeron.

2. **[Contradicción real, tipo A]** `dictamen-academico-c5.md` se contradice internamente: su §8 afirma que "no existe, en el repositorio, ningún caso confirmado donde C5 sea principal y C8 secundaria, ni al revés", pero su propia tabla de clasificaciones en §10 lista a `mahlertricontinental` como C5 principal con C7 **y C8** como secundarias. `dictamen-academico-c8.md` §8 detectó la contradicción, determinó que debe prevalecer el dato reproducible de los lotes, y declaró expresamente que "no modifica `dictamen-academico-c5.md` ni reabre C5 técnicamente en esta etapa". La contradicción interna del documento de C5 sigue sin corregirse en el documento mismo.

3. **[Vacío, tipo E]** La frontera C2/C10 no fue tratada por ningún dictamen, pese a que el guion ratificado de C10 (§2) declara expresamente "riesgo de solapamiento alto o medio con C2, C3, C4 y C9". De esas cuatro corrientes nombradas, C3, C4 y C9 sí recibieron tratamiento de frontera (con antecedente, abierta y provisional respectivamente); C2 es la única que no aparece en ningún apartado de fronteras de C10, y el dictamen de C2 tampoco menciona a C10.

4. **[Diferencia metodológica, tipo D]** El estándar "caso directo de frontera" vs. "copresencia total" (Decisión 6 de `dictamen-academico-c10.md` §7) se formalizó solo en el último dictamen de la serie y se aplicó explícitamente nada más a la frontera C7/C10. Los conteos de "cruces" en los nueve dictámenes anteriores no distinguen sistemáticamente entre ambas categorías. Esta consolidación no recalculó retroactivamente esa distinción para las demás 44 fronteras porque hacerlo excede el mandato de "extraer y ordenar" y equivaldría a producir un dato nuevo no dictaminado.

5. **[Evolución legítima, tipo C — a confirmar]** El dictamen de C1 (§9) registró como "pendiente independiente, no resuelta" la contradicción documental entre tres formulaciones sucesivas del nombre de C9, remitiéndola expresamente al dictamen de C9. El dictamen de C9 (§2) resuelve la tensión adoptando la formulación del catálogo vigente ("Archivos vivos, espiritualidades y saberes transmitidos"). Parece una resolución válida y dentro del mandato de C9, pero se señala para que la Dirección Académica confirme expresamente que da por cerrada esta remisión.

6. **[Asimetría con efecto práctico, tipo B]** `dictamen-academico-c1.md` es el único de los diez dictámenes que no incluye una cláusula explícita de "no se autoriza siembra en esta etapa". Su vía constitutiva (§3) ya incorpora la siembra bibliográfica complementaria como mecanismo aprobado, sin condicionarla a agotar antes el universo interno, a diferencia de las nueve corrientes restantes. No es evidente si esta ausencia es deliberada (C1 sí tiene la siembra habilitada ya) o un vacío de redacción que debería alinearse con el resto.

7. **[Pendiente técnico, no verificable desde este entorno]** El dictamen de C9 (§17) registra que, al momento de su redacción, `expediente-evidencia-c9.md`, `expediente-evidencia-c7.md` y `ficha-decision-c4.md` permanecían sin comprometer a Git ("archivos no rastreados"). La verificación hecha para esta consolidación (lectura directa del árbol de trabajo del repositorio) confirma que los tres archivos existen hoy en `data/agua-de-por-medio/atlas-2/documentos/`, pero esta consolidación no invocó `git status` ni `git log` sobre el repositorio del Mac de Rob, por la política de seguridad ya vigente para ese repositorio (ver apartado de verificación de esta entrega). Se recomienda que Rob confirme con `git status --short` desde su Mac si esos tres archivos ya están comprometidos.

8. **[Asimetría formal, tipo B]** Los guiones de C1 y C2 documentan su relación con otras corrientes en prosa (C1 §8, C2 §7 como apartado de fronteras separado del guion), mientras que C3 a C10 incorporan un bloque estructurado con campos "corriente más próxima" y "riesgo de solapamiento" dentro del guion mismo. No es necesariamente un defecto de contenido, pero es una asimetría de formato entre los diez documentos que la Dirección Académica podría querer homogeneizar si en algún momento se publican los diez guiones como conjunto.

9. **[Evolución terminológica, tipo C]** La categoría formal "lectura autorizada" —con su fórmula fija "no equivale a candidatura, clasificación, ni autoriza modificar corpus, lotes o catálogos"— aparece por primera vez en `dictamen-academico-c7.md` §10. Los dictámenes de C1 a C6 logran el mismo efecto de no vinculancia con fórmulas distintas ("universo de exploración", "universo de relectura", "queda registrado... sin convertirse en candidatura"). No hay contradicción de fondo, pero el vocabulario no está unificado entre las diez corrientes.

**Total de tensiones para Dirección Académica: 9.**
