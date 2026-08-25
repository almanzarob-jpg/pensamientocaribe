# INFORME — CARRIL A · FASE 5A

## Auditoría académica y contrato de datos de Atlas 2.0

**Fecha:** 24 de agosto de 2026
**Repositorio:** `~/Pagina/pensamiento-caribe` · rama de referencia `feat/atlas-2-etapa-1-integrada`
**Partida:** `CARRIL_A_FASE_4B_CERRADA_Y_APROBADA`
**Naturaleza:** auditoría académica y diseño de contrato de datos. No es desarrollo de interfaz, no es publicación, no es sincronización. No se modificó el frontend ni los datos productivos. No se ejecutó ningún comando Git.

Nota terminológica: el corpus documental usa **corriente** para C1–C10. La Fase 4B decidió reservar «corriente» para el sistema cartográfico-relacional y adoptar **recorrido** como denominación pública de C1–C10. Este informe usa «recorrido» cuando habla del campo futuro y «corriente» cuando cita los documentos, que no dicen otra cosa.

---

## A. Resumen ejecutivo

**1. La clasificación existe, y existe en forma de dato, no solo en prosa.** El hallazgo central de esta auditoría desmiente el diagnóstico que yo mismo escribí en el Carril A: los lotes `a01`, `a02`, `s01` y `piloto` contienen **57 entradas ya clasificadas en estructura de máquina**, con `corriente_confirmada`, `corrientes_secundarias`, `revision.estado`, `revision.responsable`, `revision.fecha` y `revision.fundamento` escrito. No es un borrador: es el contrato de datos ya ejercitado sobre una muestra real.

**2. El total con clasificación explícita es 74 obras, no 26.** Tres fuentes independientes y sin solapamiento: 54 de los lotes, 12 de P1 y 8 de P2. Otras 6 tienen decisión firme pero **sin recorrido principal**, por arquitectura declarada.

**3. El corpus se reparte en 80 confirmadas, 84 pendientes y 69 sin evaluar.** Ninguna preliminar. La distinción entre lo confirmado y lo desconocido es limpia y verificable obra por obra.

**4. Seis obras no admiten el campo `recorrido` tal como se ha imaginado.** `rifkinfictions` (C1/C3), `pricefirst` (C3/C9), `whiteheadtiger` (C1/C7) y `schwartz_seaofstorms` (C6/C7) son **fronteras constitutivas**: dos recorridos irreductibles, sin principal ni secundaria. `perezmorales` (C3/C5/C7) y `pinedashipwrecked` (C1/C4/C7) son **síntesis multicorriente**: tres estructurantes sin principal. Un contrato con un solo campo `recorrido` las falsearía.

**5. La figura `SINTESIS_MULTICORRIENTE` no está aprobada.** Su documento normativo se declara `LISTO_PARA_DECISION_NORMATIVA` y dice literalmente «no aprueba ninguna regla — solo la propone». Pero dos decisiones de P2 ya la aplican como resultado. Hay una decisión pendiente que bloquea la representación técnica de dos casos.

**6. `l` no es territorio estudiado.** Es un anclaje cartográfico: una clave única de un catálogo de 30 lugares, poblada en las 232 obras. Donde los lotes declaran una orilla con función «territorio estudiado», `l` coincide en 24 casos y difiere en 11, y cinco decisiones de P2 registran la discrepancia como incidencia abierta. El campo académico de territorio ya existe y se llama `orillas`, con `funcion` y `tipo` explícitos.

**7. Ninguna decisión está sincronizada.** En las 232 obras del corpus publicado: `corriente` 0, `revision` 0, `marcas` 0, `operaciones` 0, `proceso` 0, `lengua_publicacion` 0, `temporalidades` 0, `rutas` 0. Solo `procedencia` en 5.

**8. Las diez denominaciones siguen marcadas `provisional: true`.** Los dictámenes ratifican académicamente los nombres y declaran a la vez que no tocan ese campo. C1 es el único que ni siquiera se declara ratificado: «Aprobado conceptualmente. **No debe incorporarse todavía al catálogo**».

**9. Hay una contradicción interna sin corregir en el dictamen de C5** (§8 niega lo que §10 registra), detectada por C8, documentada por el marco consolidado y por la matriz de fronteras, y nunca enmendada en el documento de origen.

**10. Doce de las 45 fronteras no tienen ningún criterio formulado.** Diez están ratificadas bilateralmente. C9 se autodeclara «el más alto» riesgo de solapamiento de las diez corrientes, y C7 «Alto». C6 declara sus cuatro fronteras provisionales y dos de ellas se sostienen en la misma obra.

---

## B. Corpus auditado

**Datos leídos como estructura** (no como prosa):

| archivo | qué aporta |
|---|---|
| `data/agua-de-por-medio/datos-atlas.json` | 232 obras, 30 lugares, 10 fenómenos, 588 relaciones; estado real de cada dimensión académica |
| `atlas-2/lotes/a01-generado.json` | 18 entradas con clasificación completa |
| `atlas-2/lotes/a02-generado.json` | 18 entradas |
| `atlas-2/lotes/s01-generado.json` | 11 entradas |
| `atlas-2/piloto-generado.json` | 10 entradas |
| `atlas-2/catalogos-atlas-2.json` | vocabularios controlados; `provisional: true` en las diez corrientes |
| `atlas-2/documentos/esquema-datos-propuesto.json` | esquema objetivo v1.1-final-etapa-1 |

**Documentos leídos íntegramente** (39):

- Dictámenes por corriente: `dictamen-academico-c1.md` a `dictamen-academico-c10.md` (10).
- Dictámenes de bloque P1: `dictamen-academico-bloque-1` a `bloque-4-etapa-2-3.md` (4).
- Decisiones académicas P2: `decision-academica-` de `andersonblackindigenous`, `atkinsonearliest`, `cosgrovegarifuna`, `felicianosantos`, `mintzarea`, `pinedashipwrecked`, `pricemars`, `schwartz-seaofstorms`, `whiteheadtiger`, `womenancestors`, `wynterblackmetamorphosis` (11).
- Decisión de cierre P1: `decision-academica-gomezexperiential-cierre-p1-etapa-2-3.md`.
- Actas y expedientes: `cierre-global-p1-etapa-2-3.md`, `cierre-lote-p2-etapa-2-3f.md`, `expediente-transversal-p1-etapa-2-3.md`, `contraste-jaffeconcrete-c1-c10-bloque-4-etapa-2-3.md`.
- Normativa y consolidación: `marco-academico-consolidado-atlas-2.md`, `matriz-fronteras-c1-c10.md`, `propuesta-normativa-sintesis-multicorriente-etapa-2-3.md`, `metodologia-revisada-borrador.md`, `fenomenos-ampliacion.md`.
- Fichas y registros: `ficha-decision-c4.md`, `ficha-decision-c5.md`, `ficha-decision-c6.md`, `registro-decisiones-c5.md`, `registro-decisiones-c6.md`.
- Ampliaciones P2: `ampliacion-c6-schwartz-seaofstorms-p2-etapa-2-3f.md`, `ampliacion-pinedashipwrecked-relaciones-c1-c4-c7-c8-p2-etapa-2-3f.md`, `auditoria-womenancestors-p2-etapa-2-3f.md`.
- Cola y pendientes: `cola-lectura-pendiente-atlas-2.md`, `decisiones-pendientes.md`, `incidencias-cerradas.md`, `apertura-recalibracion-p3-etapa-2-3g.md`.

**No leídos, y por qué.** Los ocho expedientes `expediente-evidencia-c3.md` a `-c10.md` y los quince documentos `lectura-*.md`: son la evidencia de segundo nivel, y el marco consolidado fija que «nunca» se usan «como fuente normativa autónoma frente a un dictamen». Se auditó lo que decide, no lo que prueba. Queda registrado como límite de esta auditoría: **no verifiqué la evidencia textual de ninguna lectura contra la obra original.** Ningún documento leído es, él mismo, una lectura de obra.

---

## C. Jerarquía documental

La jerarquía no la propongo yo: está escrita en los propios documentos, y la reconstruyo citando dónde.

**Nivel A — decisión académica confirmada.** Dictámenes por corriente y por bloque, decisiones académicas por obra, y **los lotes generados**, que son el único lugar donde la decisión existe con `responsable`, `fecha` y `fundamento` en estructura verificable.

**Nivel B — evidencia académica robusta.** Expedientes de evidencia y documentos de lectura. Regla de precedencia expresa: se usan «únicamente donde el propio dictamen los cita para un dato puntual — nunca como fuente normativa autónoma frente a un dictamen».

**Nivel C — clasificación preliminar.** Fichas de decisión (`ficha-decision-c4/c5/c6.md`), que se autodeclaran «Documento NO DECISORIO», y la matriz de fronteras y el marco consolidado, ambos «Borrador para revisión. No versionado».

**Nivel D — cola de lectura.** `cola-lectura-pendiente-atlas-2.md` y la auditoría P3. Identifica obras relevantes; no evalúa. El §25 de la Instrucción Maestra ya lo fijó: «no equivale a una clasificación pública confirmada».

**Nivel E — inferencia externa.** No se incorpora. Ninguna clasificación de este informe procede de título, autor, región o tema.

**Reglas de precedencia citadas textualmente:**

1. Dictamen sobre marco: «en caso de duda o de discrepancia entre este marco y cualquier dictamen específico, el dictamen específico sigue siendo la fuente normativa primaria».
2. Dictamen de corriente sobre plan operativo: «el dictamen específico de cada corriente prevalece sobre el plan operativo de siete etapas cuando ambos entran en conflicto».
3. Dato reproducible sobre afirmación: ante la contradicción de C5, el dictamen de C8 «determinó que debe prevalecer el dato reproducible de los lotes» y a la vez «no modifica `dictamen-academico-c5.md`». Un dictamen puede corregir el dato, no el documento ajeno.
4. Dictamen sobre registro sobre ficha: la ficha es «instrumento de decisión, no un dictamen»; el registro «registra, sin ampliar ni reinterpretar».
5. Dirección Académica sobre todo documento redactado: «Ninguna regla aprobada por Claude: confirmado — este documento propone y recomienda; no aprueba».
6. Ninguna etiqueta heredada, señal léxica, ancla ni candidatura manda sobre la lectura del argumento.

**Un problema de esta jerarquía.** Los dos documentos que la consolidan —el marco y la matriz— son borradores no versionados. La norma vive en documentos que se declaran a sí mismos provisionales.

---

## D. Estado de las 232 obras

| estado | obras | qué significa |
|---|---|---|
| **confirmado** | **80** | decisión académica formal, con documento identificable |
| preliminar | 0 | ninguna obra está en candidatura activa |
| **pendiente** | **84** | en la cola de lectura de Atlas 2.0, sin abrir, o con decisión de bloqueo |
| **sin_evaluar** | **69** | ni leída ni incluida en ninguna cola |
| total en corpus | 232 | |
| fuera del corpus | 1 | `stewardpuertorico`, fusionado y redirigido |

De las 80 confirmadas:

| | obras |
|---|---|
| con recorrido principal explícito | **74** |
| sin recorrido principal, por arquitectura declarada | **6** |
| con al menos un recorrido secundario | 63 |
| con dos secundarias | 19 |
| con fundamento escrito y responsable identificado | 57 (las de lote) + 23 (documentales) |

**Distribución por recorrido principal:**

| | C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | C10 |
|---|---|---|---|---|---|---|---|---|---|---|
| obras | 4 | 7 | 6 | 15 | 9 | 3 | 5 | 7 | 9 | 9 |

C4 concentra el 20 % de lo clasificado; C6 tiene tres obras y C1 cuatro. La desigualdad es real y no debe corregirse rellenando.

**Procedencia de las 80 confirmadas:** 54 de los lotes (`a01` 18, `a02` 17, `s01` 11, `piloto` 8), 14 de los dictámenes de bloque P1, 12 de las decisiones académicas por obra (11 de P2 + `gomezexperiential`).

**Las 57 entradas de lote comparten una firma idéntica:** responsable «Dirección académica de Pensamiento Caribe», fecha `2026-08-08`, `procedencia: "corpus heredado"`, `procedencia_verificada: true`, y fundamento escrito en las 57. 56 declaran además `fuentes_revision`. Es el bloque más homogéneo y el más listo para sincronizar.

La matriz obra por obra está en `matriz-clasificacion-fase-5a.csv`, 233 filas, con las columnas que pide el §7 de la instrucción.

---

## E. Auditoría C1–C10

Una sección por recorrido. Las definiciones se citan de los dictámenes; no redacté ninguna.

### C1 — Invasiones, despojos y mundos indígenas
**Definición citada:** «¿Cómo han sido invadidos y despojados los mundos indígenas del Caribe, y mediante qué prácticas han persistido, reaparecido y disputado el presente?»
**Inclusión:** obras cuyo argumento central aborda mundos indígenas, invasiones, territorialidades, soberanías y persistencia contemporánea. **Exclusión:** «sin reducir lo indígena a un pasado anterior a 1492 ni a un residuo cultural»; ninguna asignación automática.
**Obras:** 4 confirmadas (`andersonblackindigenous`, `atkinsonearliest`, `felicianosantos`, más una de lote). **Fronterizas:** `whiteheadtiger` y `rifkinfictions`, ambas como frontera constitutiva.
**Estado:** el único recorrido **no ratificado**. «Aprobada como denominación conceptual; pendiente de incorporación al catálogo»; el guion «no debe incorporarse todavía».
**Riesgos declarados:** cero candidaturas automáticas sobre 232 entradas; falsos positivos del patrón léxico; único recorrido sin cláusula de no autorización de siembra, y el marco consolidado pregunta si es deliberado.

### C2 — Trata, esclavización y plantación
**Definición:** «¿Cómo se construyó y sostuvo el régimen que convirtió personas en propiedad y territorios en espacios de extracción plantacionaria?»
**Inclusión:** el régimen esclavista como núcleo, reconociendo a las personas esclavizadas como productoras de mundos. **Exclusión:** «la presencia masiva de la esclavitud en una obra no basta»; la fuga es C3.
**Obras:** 7 principales. **Estado:** «Ratificada. Historial de renombramiento: ninguno». De los mejor asentados.
**Riesgos:** solapamiento léxico con C4 («la palabra es la misma, el argumento no»); el punto ciego «no es solo el falso positivo: también el silencio» — ocho entradas donde C2 fue omitida y no descartada.

### C3 — Fugas, cimarronajes y emancipaciones
**Definición:** «¿Qué se funda al huir, y qué formas toma la sustracción cuando no se puede huir?»
**Exclusión:** «C3 exige sustracción en sentido histórico y material. El uso figurado del término —sonoro, corporal, estético— no basta».
**Obras:** 6 principales; núcleo sin solapamiento en `price` y `totumo`. **Estado:** ratificado.
**Riesgos:** escalas heterogéneas (acto individual, formación comunitaria, proceso continental); **pérdida parcial del rastro de candidaturas** — «la migración de C3 queda evidenciada y no auditable para el corpus completo», y «recalcularla sería inventarla».

### C4 — Postplantación, trabajo y desposesión
**Definición:** «La plantación no terminó: se reorganizó.»
**Exclusión:** «C4 no se define como "lo que viene después de la abolición". Esa formulación cronológica fue explícitamente descartada.»
**Obras:** 15 principales, el recorrido más poblado. **Estado:** ratificado, con reserva propia: «esa estabilidad documental no equivale, por sí sola, a un fundamento conceptual completo».
**Riesgos:** «la relación conceptual entre plantación y postplantación… permanece sin resolver después de este dictamen». Frontera C3/C4 sin ningún caso confirmado que aplique el criterio ratificado.

### C5 — Rutas, diásporas y territorios acuosos
**Definición:** «¿Qué ocurre cuando el mar deja de ser frontera y pasa a ser el territorio?»
**Exclusión:** «no por la sola mención de un elemento acuoso»; «la proximidad geográfica no prueba trayecto».
**Obras:** 9 principales. **Estado:** ratificado, con dos reservas graves del propio documento: la vía constitutiva declarada «describe un proceso que **todavía no ha ocurrido**», y **contradicción interna sin corregir** entre §8 y §10.
**Riesgos:** sesgo territorial y lingüístico registrado — ninguna obra con territorio en el Caribe neerlandófono, Puerto Rico, República Dominicana ni el francófono.

### C6 — Huracanes, ecologías y materialidades vivas
**Definición:** «El huracán es política antes que naturaleza.»
**Exclusión:** «`catástrofes` funciona como puerta de entrada para lectura, nunca como equivalencia clasificatoria. `catástrofes` ≠ C6.»
**Obras:** 3 principales. «La muestra confirmada de C6 es, sobre esta evidencia, extremadamente pequeña.»
**Estado:** ratificado en denominación; **las cuatro fronteras declaradas provisionales y revisables**. C1/C6 y C2/C6 se sostienen «de hecho, [en] la misma obra».
**Riesgos:** el más frágil de los diez por tamaño de muestra. `gudynas` excluido por criterio territorial y la exclusión no aplicada en los datos.

### C7 — Soberanías, fronteras y ocupaciones
**Definición:** «¿Qué significa libertad cuando la nación soberana dejó de ser la respuesta?»
**Exclusión:** cuatro usos de «autoridad» expresamente descartados como señal (intelectual, académica, citacional, investigativa, metodológica).
**Obras:** 5 principales, 16 como secundaria — el recorrido que más aparece subordinado.
**Estado:** «deja de ser académicamente provisional», pero el guion conserva «Estado | Provisional» y `provisional: true` sin tocar.
**Riesgos:** «Riesgo de solapamiento | **Alto.** Es la que más candidaturas ambiguas puede generar». C1/C7, C8/C7 y C10/C7 abiertas por «evidencia insuficiente». C2/C7 sin ningún caso.

### C8 — Creolizaciones, traducciones y opacidades
**Definición:** «¿Qué nace del encuentro forzado que ninguna de sus partes contenía?»
**Exclusión:** «"criollo", "traducción", "transparencia" y términos afines no constituyen por sí solos una señal discriminante suficiente».
**Obras:** 7 principales. **Estado:** ratificado académicamente, provisional en catálogo.
**Riesgos:** cinco fronteras (C1, C2, C3, C6, C10) «abiertas, sin lectura dirigida», ninguna con caso. `wynterblackmetamorphosis` se clasifica en C8 con **reserva conceptual declarada obligatoria**: la adscripción no equipara indigenización con creolización.

### C9 — Archivos vivos, espiritualidades y saberes transmitidos
**Definición:** «obras cuyo argumento está organizado centralmente por formas vivas, comunitarias, corporales, espirituales, performativas o insurgentes de transmisión».
**Exclusión:** la marca `memoria` no equivale a C9; la revisión historiográfica interna a la disciplina no basta.
**Obras:** 9 principales. **Estado:** «ratificada como denominación **definitiva**». Cierra la contradicción de nombre que C1 había señalado.
**Riesgos:** «Riesgo de solapamiento | **El más alto de las diez corrientes**». `memoria` marca 93 de 232 obras (40,1 %) y «no se presenta como predictor suficiente». C1/C9 «sin caso, sin criterio».

### C10 — Cuerpos, parentescos y eróticas
**Definición:** «El cuerpo caribeño como campo de disputa y también de placer.»
**Exclusión:** «no se amplía automáticamente con *intimidad*, *afecto*, *matrifocalidad*, *ciudadanía sexuada* o *feminismo*… porque… producir[ían] un incremento artificial del universo».
**Obras:** 9 principales. **Estado:** «C10 puede cerrarse académicamente ahora», pero condicionado: «no se considera cerrada C10 hasta que este dictamen sea revisado por la Dirección Académica y el commit correspondiente se confirme publicado».
**Riesgos:** solapamiento alto o medio con C2, C3, C4 y C9; C2/C10 no tratada por ningún dictamen pese a declararse de riesgo alto.

**Estado global de definición:**

| categoría | recorridos |
|---|---|
| ratificado sin salvedades | C2, C3, C9, C10 |
| ratificado académicamente, provisional en catálogo | C7, C8 |
| ratificado sobre base que el propio documento declara insuficiente | C4, C5, C6 |
| no ratificado | **C1** |

---

## F. Casos fronterizos

**Las seis obras sin recorrido principal, por decisión:**

| obra | recorridos | figura | documento |
|---|---|---|---|
| `rifkinfictions` | C1/C3 | frontera constitutiva | dictamen bloque 1 |
| `pricefirst` | C3/C9 | frontera constitutiva | dictamen bloque 2 |
| `whiteheadtiger` | C1/C7 | frontera constitutiva | decisión P2 |
| `schwartz_seaofstorms` | C6/C7 (+ C2 y C4 secundarias) | frontera constitutiva | decisión P2 |
| `perezmorales` | C3/C5/C7 | síntesis multicorriente | dictamen bloque 4 |
| `pinedashipwrecked` | C1/C4/C7 | síntesis multicorriente | decisión P2 |

**Un caso con principal pero conflicto abierto:** `jaffeconcrete`, C6 principal, con C4 registrada como «hipótesis abierta no aplicada». El documento de contraste pedía leer los capítulos 2, 4, 6 y 7 antes de cerrar; el dictamen cerró sin esa lectura. La reserva metodológica no se trasladó al acta.

**Fronteras con criterio ratificado bilateralmente (10):** C2/C3, C2/C4, C2/C9, C3/C5, C3/C7, C4/C5, C4/C7, C4/C8, C5/C7, C8/C9.

**Fronteras sin ningún criterio formulado (12):** C1/C4, C1/C9, C1/C10, C2/C5, C2/C7, C2/C10, C3/C6, C4/C10, C5/C6, C6/C9, C6/C10, C7/C9. La más grave es **C2/C10**: el guion de C10 declara riesgo alto o medio de solapamiento con C2 y ningún dictamen la ha tratado.

**Fronteras provisionales (5):** C1/C6, C2/C6, C4/C6, C6/C7, C9/C10. Las cuatro de C6 declaradas revisables por su propio dictamen.

Recuento del documento normativo: RB 10, RA 5, PR 5, AE 8, AS 5, SC 12 · total 45.

---

## G. Contradicciones

1. **`dictamen-academico-c5.md` se contradice a sí mismo.** §8 afirma que no existe ningún caso con C5 principal y C8 secundaria; §10 lista `mahlertricontinental` con exactamente eso. Detectada por C8, que resolvió a favor del dato y declaró expresamente que no modificaba el documento de C5. **Sigue sin corregirse.**

2. **`brownreaper` y `gudynas` intercambiados.** C6 distingue: `gudynas` conservó una candidatura hacia C6 «posteriormente excluida por decisión académica»; `brownreaper` «fue procesada y no obtuvo ningún rol». C9 escribe, citando ese mismo pasaje: «`brownreaper` procesó como candidatura hacia C6, excluida por decisión académica». Los dos enunciados no pueden ser ambos ciertos.

3. **Secuencia de casos P2 inconsistente.** `cosgrovegarifuna` afirma que `wynterblackmetamorphosis` no se abrió; `wynterblackmetamorphosis` afirma que `cosgrovegarifuna` «permanece sin abrir». Cada uno se declara anterior al otro.

4. **`perezmorales` en dos estados.** El documento de contraste lo fija como «decisión clasificatoria final suspendida»; el dictamen del bloque 4 lo declara «RESUELTO ACADÉMICAMENTE». La secuencia lo explica, pero el contraste no lleva marca de superado y sigue vigente en el árbol.

5. **Tres obras sin copia digital, luego leídas.** `sherwood`, `perezmorales` y `gomezexperiential` fueron declaradas `EVIDENCIA_TEXTUAL_INSUFICIENTE` por ausencia de archivo local; ningún documento explica cómo se resolvió. En `gomezexperiential` la contradicción es literal: el expediente dice que no se localizó ningún archivo, la decisión dice que la identidad se verificó «contra el propio archivo».

6. **«15/15» con dos sentidos.** El expediente transversal cierra con «15/15 casos revisados» y «no se clasificó ninguna obra»; el acta usa «15/15 casos académicamente resueltos». El acta desactiva la colisión expresamente, pero la fórmula sigue siendo reutilizable por error.

7. **Vocabulario usado antes de aprobarse.** Las ampliaciones de `schwartz_seaofstorms` y `pinedashipwrecked` emplean `SINTESIS_MULTICORRIENTE`, `RELACION_MIXTA` y `RELACION_NO_JERARQUICA` como etiquetas de resultado, mientras la propuesta normativa declara que la figura no está aprobada y que el tercer tipo de relación bilateral «no se formaliza en este documento».

8. **Errores de cifra corregidos en cadena y no en origen:** 10/15 vs 11/15 en C5; «sin duplicados» de C4 frente a 9 identificadores superpuestos; 33 vs 35 en el universo de C4; 3 vs 5 procesadas en C6; cinco filas de la matriz que contaban copresencia como caso directo.

**Ninguna de estas contradicciones invalida una clasificación.** Todas afectan a metadatos, cifras, secuencia o vocabulario. No encontré ni un solo caso en que dos documentos asignen recorridos principales distintos a la misma obra.

---

## H. Recorridos secundarios

**¿Existe ya la lógica? Sí, y está ejercitada.** 63 de las 80 obras confirmadas declaran al menos un recorrido secundario; 19 declaran dos. El vocabulario está fijado: «Corriente principal: el recorrido que organiza el argumento central»; «Corriente secundaria: dimensión sustantiva pero subordinada; se declara cuando tenga peso sustantivo». El principio de principal está «ratificado explícitamente en los diez dictámenes»; la fórmula de secundaria aparece desde C4.

**¿Se justifica?** Hay un test formal, no una impresión: reconstruir causalidad, finalidad, criterio de valoración y dependencia; «¿qué corriente permite al autor juzgar o interpretar a la otra?»; «la cronología y el conteo de capítulos y páginas no deciden». Y un principio que impide automatizarlo: «**misma frontera no significa misma jerarquía**» — `alabi` y `rainforestwarriors` dan C7>C3, `james` da C3>C7, sobre la misma frontera.

**¿Crea claridad o arbitrariedad?** Claridad, con dos límites documentados. El primero: el esquema falla en 6 casos, donde forzar un principal produciría «una jerarquía falsa». El segundo, en dirección contraria: declarar no-jerarquía sin prueba sería «la misma clase de error». La propuesta normativa añade por eso una novena condición para impedir que la dificultad del lector se disfrace de ausencia de jerarquía.

**Un techo del protocolo, ya detectado.** La ampliación de `pinedashipwrecked` propone «dos principales + una corriente-objeto» y observa que es «una figura no contemplada aún de forma explícita por el protocolo vigente, que solo prevé principal única + hasta dos secundarias».

**Recomendación.** Incorporar `recorridos_sec` como arreglo de cero a dos elementos. No es una hipótesis: es la forma que el corpus ya tiene en 63 casos, con un test explícito detrás. Mantener el límite de dos, que es el que el protocolo declara, y registrar como incidencia el caso que lo desborda.

---

## I. Otras dimensiones

Para cada una: si existe, en cuántas obras, si está normalizada, si tiene vocabulario controlado, y si debe entrar.

| dimensión | ¿existe en lotes? | obras | ¿normalizada? | ¿vocabulario? | ¿al Atlas público? | ¿ahora o después? |
|---|---|---|---|---|---|---|
| `revision` | sí | 57/57 | sí: estado, responsable, fecha, fundamento | sí, 4 estados | **sí** | **ahora** — es la trazabilidad misma |
| `procedencia` | sí | 57/57, todas «corpus heredado» | sí | sí, 5 valores | sí | ahora |
| `proceso` | sí | 57/57 | sí | sí, 6 valores | sí | ahora |
| `operaciones` | sí | 55/57 | sí | sí, 17 valores + traducción EN | sí | ahora |
| `lenguas_publicacion` | sí | 47/57 | sí | sí, 8 valores | sí | ahora, con reserva: 10 sin dato |
| `temporalidades` | sí | 53/57 | sí: valor, era, precisión | sí | sí | ahora |
| `orillas` | sí | 51/57 | sí: tipo, label, función | sí, 6 funciones y 3 tipos | **sí** | **ahora** — ver apartado J |
| `marcas` | sí | **2/57** | no evaluable | sí, 7 marcas | **no** | después: cobertura del 3,5 % |
| `rutas` | **no** | **0/57** | — | sí, en el esquema | **no** | no hay dato que sincronizar |

**Dos advertencias.** `lenguas_publicacion` no debe derivarse de `tr`: el dictamen de C10 lo prohíbe expresamente — «`tr` puede usarse únicamente como señal de priorización, nunca como prueba de `lenguas_publicacion`», y fija que «territorio y lengua de publicación se mantienen, de aquí en adelante, como variables estrictamente separadas». Y `marcas` no debe entrar por figurar en el esquema: dos obras de 57 no sostienen una capa pública.

---

## J. Territorio

**Qué es `l` hoy.** Una clave única de un catálogo de 30 lugares —19 países y 11 ciudades—, poblada en las 232 obras, sin ninguna vacía. Cada obra tiene exactamente una. Su función en el código es situar el punto en el mapa: es un **anclaje cartográfico**.

**Qué no es.** No es territorio estudiado, y hay prueba. De las 57 entradas de lote, 35 declaran una orilla con función «territorio estudiado». Comparando esa orilla con `l`: **coincide en 24, difiere en 11**, y 22 no declaran ninguna orilla de ese tipo. Las diferencias no son ruido, son sistemáticas: `l` es un punto, la orilla es una escala. `bassiacuoso` tiene `l = cartagena` y territorio estudiado «Gran Caribe»; `brathwaite` tiene `l = barbados` y «Caribe anglófono»; `keeganhofman` tiene `l = jamaica` y «Archipiélago del Caribe»; `belisodelirium` tiene `l = cuba` y territorio estudiado «Estados Unidos».

**Y hay incidencias documentadas.** Cinco decisiones de P2 registran `INCIDENCIA_TERRITORIAL_PENDIENTE` y ninguna se corrigió: `andersonblackindigenous` (`belize`, obra sobre Honduras), `cosgrovegarifuna` (`bluefields`, campo en Orinoco, Pearl Lagoon, Honduras y Nueva York), `pinedashipwrecked` (`bluefields`, campo en Puerto Cabezas), `mintzarea` (`puertorico`, alcance pan-caribeño), `schwartz_seaofstorms` (`puertorico`, escala del Gran Caribe). P1 añade cuatro más: `sherwood`, `rifkinfictions`, `jaffeconcrete`, `perezmorales`.

**Conclusión.** `l` no puede sostener un filtro territorial académico. Presentar «obras de Jamaica» filtrando por `l` afirmaría algo que el corpus no dice. El campo académico de territorio ya existe y se llama **`orillas`**, con `tipo` (punto, región, cuenca) y `funcion` (territorio estudiado, lugar de producción intelectual, destino migratorio, lugar de circulación, territorio comparado, espacio diaspórico). Está poblado en 51 de 57 entradas y su distribución real es: territorio estudiado 37, lugar de circulación 11, territorio comparado 10, espacio diaspórico 5, lugar de producción intelectual 5, destino migratorio 1.

**Recomendación.** No construir el filtro territorial sobre `l`. Construirlo, cuando llegue, sobre `orillas` filtrando por `funcion`, y conservar `l` para lo único que hace bien: colocar el punto. Son dos cosas distintas y deben seguir siéndolo.

---

## K. Contrato de datos propuesto

Comparado con el esquema propuesto y con la forma real de los lotes. **No lo adopto: lo propongo.**

```json
{
  "id": "stoutafterlove",

  "recorrido": "c10",
  "recorridos_sec": ["c4"],
  "estado_recorrido": "confirmado",
  "arquitectura_recorrido": null,

  "revision": {
    "estado": "confirmada",
    "responsable": "Dirección académica de Pensamiento Caribe",
    "fecha": "2026-08-08",
    "fundamento": "La intimidad queer, el deseo y las economías eróticas organizan el argumento."
  },
  "fuente_recorrido": ["a01-generado.json"],

  "procedencia": "corpus heredado",
  "procedencia_verificada": true,
  "proceso": ["migración", "reclasificación"],
  "operaciones": ["producir etnografía", "documentar una práctica"],
  "lenguas_publicacion": ["inglés"],
  "temporalidades": { "publicacion": { "valor": 2014, "era": "EC", "precision": "exacta" } },
  "orillas": [{ "tipo": "región", "label": "La Habana/Cuba", "funcion": "territorio estudiado" }]
}
```

**Diferencias respecto de la hipótesis del §16 de la instrucción, y por qué:**

1. **`estado_recorrido` con cuatro valores:** `confirmado`, `preliminar`, `pendiente`, `sin_evaluar`. **No añado `disputado`.** El conflicto no es un estado de la clasificación: es una propiedad de la arquitectura o de la frontera. Añadirlo mezclaría dos niveles y crearía la proliferación que el §12 pide evitar. Los siete casos con conflicto se registran en `arquitectura_recorrido` y en la matriz de fronteras, no en el estado.

2. **`arquitectura_recorrido` es el campo que faltaba.** Sin él, seis obras no son representables. Valores propuestos: `null` (el caso ordinario), `frontera_constitutiva` con su par, `sintesis_multicorriente` con sus estructurantes. Ejemplo:

```json
{ "id": "whiteheadtiger", "recorrido": null, "recorridos_sec": [],
  "arquitectura_recorrido": { "tipo": "frontera_constitutiva", "recorridos": ["c1","c7"] },
  "estado_recorrido": "confirmado" }
```

```json
{ "id": "perezmorales", "recorrido": null, "recorridos_sec": [],
  "arquitectura_recorrido": { "tipo": "sintesis_multicorriente", "recorridos": ["c3","c5","c7"] },
  "estado_recorrido": "confirmado" }
```

Esto respeta la prohibición expresa de crear `FRONTERA_CONSTITUTIVA_TRIPLE`: la frontera sigue siendo estrictamente bilateral y la síntesis es una capa de obra, no una relación entre pares.

3. **`fuente_recorrido` como arreglo de nombres de archivo, no de prosa.** El §13 pregunta si `evidencia_recorrido` debe contener texto, referencias, ids o una estructura compuesta. Mi recomendación: **referencias, no prosa**. El fundamento —una o dos frases— ya vive en `revision.fundamento` y es de longitud acotada. Volcar expedientes de 100 KB dentro de `datos-atlas.json` multiplicaría por cinco el peso de un archivo que la interfaz carga entero y de forma bloqueante, y convertiría el corpus en un contenedor de documentos. La trazabilidad del §17 se cumple igual: `fuente_recorrido` responde «en qué documento», `revision.responsable` responde «quién», `revision.fecha` responde «cuándo» y `revision.fundamento` responde «con qué razón».

4. **Nomenclatura.** El esquema y los lotes usan `corriente_confirmada` y `corrientes_secundarias`; la decisión de la Fase 4B adopta «recorrido» como nombre público. Propongo `recorrido` y `recorridos_sec` como claves nuevas y **conservar las claves de lote sin tocar**, por la misma razón que el catálogo conserva `memorias_espiritualidades_archivos_vivos` pese a haber cambiado su etiqueta: las claves están escritas en documentos cerrados y la regla del proyecto prohíbe reabrir capas cerradas. Los valores de recorrido en minúscula (`c1`…`c10`), no las claves largas del catálogo, para que el dato público no herede el problema de nomenclatura.

5. **Lo que no entra:** `marcas` (2 de 57) y `rutas` (0 de 57).

---

## L. Datos que NO deben sincronizarse todavía

1. **`marcas`.** Cobertura del 3,5 %. Publicarla sugeriría un sistema transversal que no existe.
2. **`rutas`.** Cero datos.
3. **Cualquier clasificación de las 84 pendientes y las 69 sin evaluar.** No hay decisión que sincronizar.
4. **La exclusión de `gudynas` de C6.** Decidida académicamente, «la implementación técnica de esta exclusión no se realiza en esta etapa».
5. **La fusión `steward` / `stewardpuertorico`.** Decisión editorial abierta; el validador la detecta con la regla `TITULO_DUPLICADO` y exige «fusión y redirección del ancla superviviente antes de publicar».
6. **Las correcciones bibliográficas aprobadas y no aplicadas:** título de `perezmorales`, subtítulo de `felicianosantos`, título de `benedictykokken_haitiexception`, ISBN de `atkinsonearliest`, identidades de `esquiva`, `chande` y `manoalzada` (las tres con `procedencia_verificada: false`).
7. **Las nueve incidencias territoriales.** Mientras `l` siga significando anclaje, corregirlo caso por caso mezclaría dos campos. La salida es `orillas`, no parchear `l`.
8. **El campo `provisional: true` del catálogo.** Los dictámenes lo dejan intacto deliberadamente: «la ratificación de una denominación es un acto documental y académico, no una escritura técnica».
9. **Los seis casos de arquitectura especial**, hasta que exista decisión sobre la representación técnica y sobre `SINTESIS_MULTICORRIENTE`.

---

## M. Decisiones pendientes de dirección académica

Solo las que requieren juicio humano. Las ordeno por lo que bloquean.

**Bloquean la sincronización de seis obras:**

1. **Aprobar o rechazar `SINTESIS_MULTICORRIENTE`.** El documento normativo está en `LISTO_PARA_DECISION_NORMATIVA` desde su redacción y dos decisiones de P2 ya la usan como resultado. Sin decisión, `perezmorales` y `pinedashipwrecked` no son representables.
2. **Aprobar la representación técnica de `FRONTERA_CONSTITUTIVA`.** Los dictámenes lo dejan expresamente sin definir: «no se define en este dictamen el esquema técnico exacto». Afecta a cuatro obras.

**Bloquean la publicación del nombre:**

3. **Retirar o mantener `provisional: true` en las diez corrientes.** Publicar C1–C10 como «Recorridos» mientras el catálogo las declara provisionales es una contradicción visible.
4. **Ratificar C1.** Es el único recorrido cuya denominación sigue «pendiente de incorporación al catálogo», y tiene cuatro obras confirmadas esperando.

**Afectan a la fiabilidad de lo que se publique:**

5. **Corregir la contradicción interna del dictamen de C5** (§8 frente a §10), o declarar formalmente que prevalece el dato de los lotes.
6. **Resolver el intercambio `brownreaper` / `gudynas`** entre C6 y C9.
7. **Decidir si `jaffeconcrete` se cierra sin la lectura de los capítulos 2, 4, 6 y 7**, como pedía su documento de contraste.
8. **Autorizar o no el uso de `orillas` como base del futuro filtro territorial**, y qué funciones se exponen públicamente.
9. **Resolver la fusión `steward` / `stewardpuertorico`.**
10. **Decidir si `evidencia_recorrido` debe existir como campo propio** o si `fuente_recorrido` más `revision.fundamento` bastan, como recomiendo.

---

## N. Recomendación para Fase 5B

**`FASE_5B_AUTORIZABLE_CON_RESERVAS`**

**Por qué autorizable.** La condición que la Fase 5A tenía que verificar era si puede implementarse un campo `recorrido` sin falsear el estado de la investigación. Puede, y con más base de la que yo mismo suponía. Hay 74 obras con recorrido principal explícito, cada una con documento identificable, y 57 de ellas con responsable, fecha y fundamento escrito en estructura de máquina, ya validada por el propio esquema del proyecto. El campo `estado_recorrido` con cuatro valores separa lo confirmado de lo pendiente y de lo no evaluado sin inventar nada: 80, 84 y 69, y ninguna obra en un limbo intermedio. El Atlas puede mostrar 74 clasificaciones y decir con exactitud que 153 obras todavía no la tienen. Eso no oculta el proceso: lo muestra.

**Por qué con reservas, y no sin ellas.** Tres reservas concretas, todas resolubles.

*Primera.* Seis obras no caben en el contrato sin el campo `arquitectura_recorrido`, y ese campo depende de dos decisiones normativas que nadie ha tomado. Sincronizar sin resolverlas obligaría a elegir entre omitir seis obras decididas o forzarles un principal que sus documentos niegan expresamente. Ninguna de las dos salidas es aceptable. **Recomiendo que 5B empiece por esas dos decisiones, no por el código.**

*Segunda.* Publicar los nombres mientras el catálogo los marca `provisional: true` y C1 sigue sin ratificar es una contradicción que un lector atento verá. No bloquea la sincronización del dato, sí la publicación de la etiqueta.

*Tercera.* La contradicción de C5 y el intercambio `brownreaper`/`gudynas` no afectan a ninguna clasificación, pero afectan a la credibilidad de la trazabilidad. Si el Atlas promete responder «quién decidió esto y en qué documento», los documentos citados no pueden contradecirse entre sí en los datos que el lector puede comprobar.

**Alcance que recomiendo para 5B**, si se autoriza:

1. Resolver las decisiones 1 y 2 del apartado M.
2. Sincronizar en `datos-atlas.json` únicamente `recorrido`, `recorridos_sec`, `estado_recorrido`, `arquitectura_recorrido`, `revision` y `fuente_recorrido`, para las 80 confirmadas.
3. Poblar `estado_recorrido` en las 232, incluidas las pendientes y las no evaluadas: es lo que permite que la interfaz diga la verdad sobre lo que no sabe.
4. No tocar `marcas` ni `rutas`.
5. No tocar `l`.
6. Regenerar `datos-atlas.js` desde el `.json` mediante procedimiento reproducible, y pasar `scripts/validar-atlas.mjs` antes de dar nada por bueno.

**Lo que no debe hacer 5B:** completar clasificaciones faltantes, tocar los documentos históricos, corregir las incidencias territoriales parcheando `l`, ni publicar los nombres de recorrido mientras sigan marcados provisionales.

---

## Control de integridad

Hashes SHA-256 tomados antes de esta auditoría y verificados después. Los seis coinciden:

```
b850f081c0107a72bfedd12b8d780aaf1efba638e3440a6e249219bf07e7313c  datos-atlas.json
d2f8e68dc8915c597e5f3ff93ec55cc601a5de98c35c1ffdaeb0ba938d469048  datos-atlas.js
f12ca9ac34a98836ac79091be6a63eead2b24eff6869c14a78bd727e5d97207b  atlas-2/catalogos-atlas-2.json
c9900dad467d2e94cf74241b7621ceb733f98766a38c14014d3a2e60cc15cfc4  atlas-2/documentos/esquema-datos-propuesto.json
3ed1239348b8b886773cccabcd879b25d140b98f4e6fb45984cc10ba41fa121f  atlas-2/documentos/expediente-evidencia-c7.md
2eb89027c02d7e461d5277c351dc6aaafb5ea57dcedd117bec762317cc232c8c  atlas-2/documentos/ficha-decision-c4.md
```

Los archivos del frontend cerrados en la Fase 4B tampoco se tocaron: `proyectos/con-el-agua-de-por-medio.html` en `7a2051fc…2425` y `css/con-el-agua-de-por-medio.css` en `5dd39485…4a55`.

Archivos creados por esta fase, los dos autorizados por el §20 y ninguno más:

- `atlas-2/documentos/auditoria-academica-fase-5a.md` (este documento)
- `atlas-2/documentos/matriz-clasificacion-fase-5a.csv` (233 filas)

Ningún documento histórico fue modificado. No se ejecutó ninguna operación Git. No había ningún `.lock` en `.git/`.

---

## Estado final

`CARRIL_A_FASE_5A_AUDITORIA_ACADEMICA_COMPLETADA — PENDIENTE_DE_REVISION_DE_DIRECCION`

No se avanza a Fase 5B sin nueva instrucción.
