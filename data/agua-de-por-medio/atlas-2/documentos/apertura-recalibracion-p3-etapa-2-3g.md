# APERTURA Y RECALIBRACIÓN DEL LOTE P3 — ATLAS 2.0, ETAPA 2.3G

**Auditoría de universo, no de contenido.** Este documento identifica, audita, prioriza y divide en sublotes el universo P3. **Ninguna obra P3 fue leída para producir este documento.** No se modificó `datos-atlas.json`, `catalogos-atlas-2.json`, `esquema-datos-propuesto.json` ni ningún documento de P1/P2. No se hizo `git add`, `commit` ni `push`.

Rama de trabajo: `feat/atlas-2-etapa-1-integrada`. Verificación Git sustituida por verificación de integridad del árbol de trabajo sin Git, según instrucción explícita de Dirección Académica del 24-08-2026 (documento adjunto a este encargo, "Cambio explícito al encargo original", secciones 1–7). Ver §26.

---

## 1. Estado heredado

**P1**: cerrado (`cierre-global-p1-etapa-2-3.md`, commit `2b77f1a`). No se reabrió ningún caso P1 en esta auditoría.

**P2**: cerrado y verificado documentalmente. `cierre-lote-p2-etapa-2-3f.md` declara `P2 = 11/11 CASOS RESUELTOS` y `P2_CERRADO_Y_VERIFICADO`, con matriz consolidada de las once decisiones (`andersonblackindigenous`, `atkinsonearliest`, `cosgrovegarifuna`, `felicianosantos`, `mintzarea`, `pinedashipwrecked`, `pricemars`, `schwartz_seaofstorms`, `whiteheadtiger`, `womenancestors`, `wynterblackmetamorphosis`), reservas conceptuales, fronteras constitutivas (2: `whiteheadtiger` C1/C7, `schwartz_seaofstorms` C6/C7) y síntesis multicorriente (1: `pinedashipwrecked`, C1+C4+C7). Ninguna decisión P2 fue reinterpretada aquí; los datos de §2 más abajo se copian literalmente de ese documento.

Nota heredada de P2 que sí toca a P3: `schwartz_seaofstorms ↔ aftershocks` quedó `POR_CORROBORAR` porque "falta leer `aftershocks` (caso P3)" (cierre P2 §9). Ese hilo se recoge en la priorización de P3-A (§17).

**Documentos históricos no rastreados** (`expediente-evidencia-c7.md`, `ficha-decision-c4.md`): verificados presentes, tamaño y contenido sin alterar (ver hashes, §26). No se tocaron.

---

## 2. Fuente de la cola

Se buscó `cola-lectura-pendiente-atlas-2.md` en todo `~/Pagina` (repo `pensamiento-caribe/` y también las carpetas paralelas `atlas-etapa-1/`, `ATLAS /`, `respaldo-atlas-2-piloto/`, `respaldo-hotfix-atlas-2026-08-07/`). **Existe una sola copia**, en `data/agua-de-por-medio/atlas-2/documentos/cola-lectura-pendiente-atlas-2.md`, 70 719 bytes, modificada el 2026-08-22. No hay versiones alternativas que reconciliar.

Esa cola ya es, en sí misma, una auditoría corregida ("Etapa 2.2 — Cola auditada y corregida", fechada tras el cierre de P2): retiró 7 ids indebidamente convertidos en candidatura o en caso de frontera, separó incidencias bibliográficas de sincronizaciones técnicas y recalculó el resumen cuantitativo desde cero. Este documento **no repite ese trabajo de depuración**: lo toma como insumo verificado y construye sobre él la apertura de P3 (identificación, cruce, priorización y sublotes), que la cola misma no hace.

---

## 3. Universo histórico P3

La instrucción original de apertura advertía no asumir que P3 seguía siendo exactamente 78. Verificado desde la cola vigente: **el recuento programático da exactamente 78** (ver §4). La cifra histórica de 78 se confirma, no se asume.

Aparte de P3, la cola vigente registra en su Grupo A (lectura académica activa): P1 = 15, P2 = 11, **P4 = 2**. Esta última prioridad no aparecía mencionada en el encargo original de apertura y se señala como hallazgo en §24.

---

## 4. Universo P3 actual

**Recalculado programáticamente contra la tabla de la cola vigente (§2 de ese documento), no de memoria:**

| Prioridad | Casos |
|---|---:|
| P1 | 15 |
| P2 | 11 (cerrado) |
| **P3** | **78** |
| P4 | 2 |
| **Total Grupo A** | **106** |

78 ids únicos verificados sin duplicados (control independiente, ver §22). Coincide exactamente con el total que la propia cola declara en su §14.A ("Ids únicos de lectura académica activa: 106") y su tabla de distribución por prioridad (§14.B).

---

## 5. Casos excluidos por estar resueltos

No aplica un recorte adicional sobre P3: la cola vigente ya separó los 51 casos con clasificación académica confirmada en su §3 propio (`williamscapitalismo`, `hall_slavesocietydanish`, `morenofraginals`, … hasta `muneraelfracaso`; lista completa en `cola-lectura-pendiente-atlas-2.md` §3). Ninguno de esos 51 ids coincide con los 78 de P3 (verificado por cruce de conjuntos). Se listan aquí solo como universo de control, no como parte de P3:

**Total de casos ya resueltos, fuera del universo P3: 51.**

Además, quedan fuera de P3 (y de Grupo A) por motivos distintos a "resuelto":
- **Anclas documentales que no constituyen lecturas pendientes: 1** (`saetheridentidades`).
- **Nombres de fenómeno incorporados por error a la tabla de obras: 2** (`lengua_nacion_y_criollo`, `teoria_de_la_creolizacion`).

---

## 6. Casos de lectura académica activa (P3_ACADEMICO)

**Los 78 casos P3 son, sin excepción, P3_ACADEMICO.** No existe dentro de P3 ningún caso cuyo pendiente real sea puramente bibliográfico o técnico: esos ya fueron separados por la propia cola en sus §6 y §7 (ver §7–8 de este documento). Verificado caso por caso contra la columna "tipo de lectura" de la tabla: ninguna de las 78 filas lleva `IDENTIDAD_BIBLIOGRAFICA` ni `SINCRONIZACION_TECNICA`; todas exigen una decisión de corriente (`CORRIENTE`, con o sin componente `FRONTERA`, `FENOMENO` o `TERRITORIO` adicional).

Esto significa que la separación A/B pedida por el encargo original (§9 de la instrucción de apertura) ya estaba hecha por la Etapa 2.2 antes de que empezara esta auditoría. Aportar aquí es confirmarlo con un cruce independiente, no repetirlo.

---

## 7. Pendientes bibliográficos (fuera de P3)

Grupo B de la cola, **identidades bibliográficas genuinamente en disputa**, con clasificación académica ya confirmada y no reabierta — `procedencia_verificada: false`:

| id | detalle |
|---|---|
| `esquiva` | C7 principal / C4 secundaria (confirmada). Corrección de identidad aprobada en lote S01 no aplicada en la sincronización posterior. |
| `chande` | C9 principal / C8 secundaria (confirmada). Sin autoría/año/DOI ratificados. |
| `manoalzada` | C9 principal / C5 secundaria (confirmada). Misma discrepancia. |

**Total: 3.** Verificado independientemente contra `datos-atlas.json`: ninguno de estos 3 ids aparece entre los 78 de P3, y ninguno de los 78 de P3 tiene `procedencia_verificada: false` (cruce hecho sobre los 78 registros completos del corpus; cero coincidencias). El Grupo B no contamina P3.

---

## 8. Pendientes técnicos (sincronizaciones ya decididas)

| id | tipo | detalle |
|---|---|---|
| `benedictykokken_haitiexception` | SINCRONIZACION_TECNICA_DE_TITULO | C8 ppal./C7,C9 sec., confirmada. Falta sincronizar el título ya aprobado (lote A02) al corpus público. |
| `gudynas` | SINCRONIZACION_TECNICA_DE_EXCLUSION | Candidatura hacia C6 ya excluida (territorio "veracruz", no admisible). Falta implementar la exclusión en `a02-config.json`. |

**Total: 2.** No requieren lectura académica. No se ejecuta la sincronización en esta auditoría (ese archivo de configuración no se toca). Ninguno de los dos es P3.

---

## 9. Casos ya abiertos

**Ninguno.** Se cruzaron los 78 ids de P3 contra el listado completo de archivos en `atlas-2/documentos/` (91 archivos). El único falso positivo detectado por coincidencia de subcadena fue `mintz` contra `lectura-mintzarea-…` / `decision-academica-mintzarea-…` — que corresponden al caso **`mintzarea`**, ya decidido en P2, un id distinto de `mintz` (P3, entrada compuesta "Caribbean Transformations / Sweetness and Power"). Descartado por inspección directa.

**Ningún caso P3 tiene expediente, lectura, ficha o decisión ya iniciada.** La regla del §12 de la instrucción original ("un caso ya abierto tiene prioridad sobre uno nuevo") no tiene ningún caso al que aplicarse dentro de P3 en este momento.

---

## 10. Casos de prioridad taxonómica alta

**Ninguno confirmado con el estándar de evidencia que la propia Etapa 2.2 estableció.** Este es un hallazgo, no una omisión: se revisó la columna "fronteras implicadas" de los 78 casos P3 y **ninguno lleva declarada una frontera obra-específica** (todos dicen "no indicada" o "no aplica"). Los únicos casos P1 con frontera confirmada por la matriz (`rifkinfictions` C1/C3, `gonzalezsojourners` C3/C5, `lightfoot`, `sherwood`, etc.) son P1, no P3.

Asignar `PRIORIDAD_TAXONOMICA_ALTA` a un caso P3 sin ese respaldo repetiría exactamente el error que la Etapa 2.2 corrigió en su §0 (conversión indebida de compatibilidad de fenómeno en caso de frontera). Por disciplina metodológica, esta auditoría se abstiene de inventar esa evidencia. Ningún caso P3 recibe esta etiqueta.

---

## 11. Casos de prioridad relacional alta

Construido sobre datos reales del corpus (`datos-atlas.json`, capa de fenómenos), no inferido: se contó el grado de cada id P3 en el arreglo `relaciones` (588 relaciones totales en el corpus). **Los 78 casos P3 tienen al menos una relación existente registrada** — ninguno llega a P3 sin conexión al resto del atlas.

**PRIORIDAD_RELACIONAL_ALTA** (grado ≥ 10, los 6 más conectados):

| id | grado | corriente(s) |
|---|---:|---|
| `mintz` | 18 | C2, C4 |
| `casimir` | 14 | C2, C4 |
| `abello` | 12 | C5 |
| `roberts` | 11 | C2, C3 |
| `shellererotic` | 10 | C2 |
| `mintzpricebirth` | 10 | C3, C5 |

**Advertencia de alcance, para que Dirección Académica la lea antes de usar esta tabla**: estas relaciones pertenecen a la capa de *fenómenos* del atlas "Con el agua de por medio" (`datos-atlas.js`/`.json`), no al sistema de *corrientes* C1–C10 que Atlas 2.0 está construyendo. Son dos taxonomías paralelas sobre el mismo corpus. Un grado relacional alto en la capa de fenómenos es una señal razonable de que la obra es un nodo denso del corpus y candidata a leerse pronto — no una prueba de que resolverá una frontera C1–C10. Se usa aquí exactamente así: como criterio de prioridad de lectura, no como clasificación anticipada.

---

## 12. Vacíos de cobertura

Cruzando la distribución de corrientes de Grupo A (cola §14.C) contra el estado de nominalización por corriente (cola §13.A), aparece un vacío estructural que **P3, tal como está compuesto hoy, no resuelve**:

| Corriente | Casos en P3 (de los 78) | Universo sin nominalizar (cola §13.A) |
|---|---:|---:|
| C1 | 0 | — (ya agotado en P1/P2, ver cola §8) |
| C2 | 34 | 5 (silencio de archivo) + discrepancia 34/35 |
| C3 | 13 | 6 |
| C4 | 5 | 30 |
| C5 | 30 | 20 |
| C6 | 11 | 0 (universo ya completo, 17/17) |
| **C7** | **0** | **168** (78+52+38) |
| **C8** | **0** | **140** (63+43+34) |
| **C9** | **0** | **133** (93+40) |
| **C10** | **0** | **59** (28+18+13) |

**Ningún caso de los 78 de P3 toca C7, C8, C9 o C10.** Son, con diferencia, las corrientes con mayor universo pendiente sin nominalizar del atlas entero, y P3-A a P3-H —tal como quedan divididos en este documento— no avanzan ni un solo caso en ninguna de las cuatro. Esto no es un defecto de esta auditoría: P3 se reconstruyó fielmente desde la cola vigente, y la cola vigente simplemente no tiene, hoy, ningún id nominalizado para C7–C10. Se registra como **hallazgo estructural para que Dirección Académica lo tenga presente al aprobar el orden de trabajo**: agotar P3-A hasta P3-H no mueve la aguja en C7–C10; esa nominalización es una tarea aparte, previa a cualquier lote de lectura sobre esas corrientes.

---

## 13. Balance territorial

78 casos P3, 22 territorios distintos. Concentración: Haití (13), Trinidad (9), Jamaica (9), Puerto Rico (7), Cartagena (6). Con una sola entrada cada uno (más frágiles, cualquier hallazgo ahí no tiene par de contraste dentro de P3): Bluefields, Costa Chica, Nueva Orleans, Barranquilla, St. John, República Dominicana, San Andrés.

Sin ninguna entrada dentro de P3: Antillas Menores anglófonas más pequeñas (Antigua, Dominica, Granada, Santa Lucía), Guayana Francesa, y —salvo Curazao (2) y Suriname (2)— el resto del Caribe neerlandófono. El Caribe indígena/afroindígena no tiene marcador propio en el esquema actual (recordar §29, limitación de esquema ya señalada en P2 §13/14); su presencia en P3 solo puede inferirse por título, no confirmarse por metadata.

---

## 14. Balance lingüístico

| Lengua de publicación (agrupado desde `tr`) | Casos |
|---|---:|
| Inglés | 48 (62 %) |
| Español | 17 (22 %) |
| Comparado/mixto | 8 |
| Francés | 3 |
| Neerlandés | 2 |

El sesgo anglófono señalado en rondas de siembra anteriores del atlas de fenómenos persiste dentro de P3 en la misma proporción. El francés está representado casi exclusivamente por casos en torno a Haití (`fouchard`, `ferdinand`, y `casimir`/`munrohaitirising` como francófono/anglófono mixto); el neerlandés, exclusivamente por Curazao (`allen_dikimanera`, `kloosterrealm`). Leer P3 en el orden que resulte de la sola priorización relacional (§11) profundizaría el sesgo anglófono, porque los 6 casos de mayor grado son todos anglófonos o francófonos de EE.UU./Haití. Por eso P3-A (§17) fuerza deliberadamente la entrada de un caso neerlandófono.

---

## 15. Balance disciplinar

**No ejecutado con confianza plena, y se dice así en lugar de forzar una clasificación.** `datos-atlas.json` no tiene campo de disciplina (los campos existentes por obra son `id, k, t, a, y, f, l, tr, ap`; `k` es un tipo de procedencia — "obra" en los 78 casos —, no una disciplina). Clasificar disciplina exigiría leer al menos la reseña o el índice de cada obra, que excede lo autorizado en esta fase ("sin lectura académica"). Se deja como **tarea explícitamente pendiente para la fase de lectura**, no como vacío resuelto por inferencia de título — inferir disciplina solo del título sería exactamente el tipo de atajo que P2 tuvo que corregir varias veces (cierre P2 §4, aprendizaje transversal).

---

## 16. Matriz maestra de P3

Los 78 casos P3 vigentes, con su corriente implicada, territorio, lengua, grado relacional (capa de fenómenos, ver advertencia §11), estado de la fuente bibliográfica local y el sublote asignado.

| Caso | Título | Autor | Corriente(s) | Territorio | Lengua/tr | Grado relacional* | Fuente local | Sublote |
|---|---|---|---|---|---|---|---|---|
| `abello` | La isla encallada: el Caribe colombiano en el archipiélago | Alberto Abello Vives | C5 | cartagena | hispano (Colombia) | 12 | CONFIRMADA | P3-A |
| `aftershocks` | Aftershocks of Disaster (huracán María) | Bonilla & LeBrón (eds.) | C6 | puertorico | anglófono (PR) | 7 | CONFIRMADA | P3-A |
| `allen_dikimanera` | Di ki manera? A Social History of Afro-Curaçaoans, 1863-1917 | Rose Mary Allen | C2,C4 | curazao | neerlandófono (Curazao) | 2 | CONFIRMADA | P3-A |
| `araujo` | Reparations for Slavery and the Slave Trade: A Transnational and Comparative History | Ana Lucia Araujo | C2 | haiti | comparado (transnacional) | 4 | no verificada en esta auditoría | P3-E |
| `archipelagicthinking` | Contemporary Archipelagic Thinking: Towards New Comparative Methodologies and Disciplinary Formations | Michelle Stephens y Yolanda Martínez-San Miguel (eds.) | C5 | puertorico | comparado (métodos comparados) | 3 | no verificada en esta auditoría | P3-F |
| `austinfearblack` | Fear of a Black Nation: Race, Sex, and Security in Sixties Montreal | David Austin | C5 | trinidad | anglófono (Canadá/Antillas) | 6 | no verificada en esta auditoría | P3-D |
| `bahadurcoolie` | Coolie Woman: The Odyssey of Indenture | Gaiutra Bahadur | C2 | guyana | anglófono (Guyana/EE.UU.) | 3 | no verificada en esta auditoría | P3-F |
| `becklessavingsouls` | Saving Souls: The Struggle to End the Transatlantic Trade in Africans | Hilary McD. Beckles y Verene A. Shepherd (eds.) | C2 | barbados | anglófono (Barbados/Jamaica) | 6 | no verificada en esta auditoría | P3-D |
| `besson` | Martha Brae's Two Histories | Jean Besson | C2 | jamaica | anglófono (Jamaica/R.U.) | 8 | no verificada | P3-B |
| `bollandbelize` | The Formation of a Colonial Society: Belize, From Conquest to Crown Colony | O. Nigel Bolland | C2 | belize | anglófono (Belice/R.U.) | 5 | no verificada en esta auditoría | P3-D |
| `branddoor` | A Map to the Door of No Return: Notes to Belonging | Dionne Brand | C5 | trinidad | anglófono (Trinidad/Canadá) | 3 | no verificada en esta auditoría | P3-F |
| `brereton_racerelationstrinidad` | Race Relations in Colonial Trinidad, 1870-1900 | Bridget Brereton | C2 | trinidad | anglófono (Trinidad) | 3 | no verificada en esta auditoría | P3-F |
| `callaloonation` | Callaloo Nation: Metaphors of Race and Religious Identity among South Asians in Trinidad | Aisha Khan | C5 | trinidad | anglófono (Trinidad/EE.UU.) | 7 | no verificada en esta auditoría | P3-C |
| `caribjourneys` | Caribbean Journeys: An Ethnography of Migration and Home in Three Family Networks | Karen Fog Olwig | C5 | nevis | anglófono (Dinamarca/Caribe) | 3 | no verificada en esta auditoría | P3-F |
| `casimir` | The Haitians: A Decolonial History | Jean Casimir | C2,C4 | haiti | francófono (Haití) | 14 | NO_LOCALIZADA | P3-B |
| `castorspiritual` | Spiritual Citizenship: Transnational Pathways from Black Power to Ifá in Trinidad | N. Fadeke Castor | C5 | trinidad | anglófono (EE.UU.) | 1 | no verificada en esta auditoría | P3-H |
| `crawfordturtlemen` | The Last Turtlemen of the Caribbean: Waterscapes of Labor, Conservation, and Boundary Making | Sharika D. Crawford | C5,C6 | bluefields | anglófono (EE.UU.) | 4 | no verificada en esta auditoría | P3-E |
| `cuijla` | Cuijla: Esbozo etnográfico de un pueblo negro | Gonzalo Aguirre Beltrán | C4 | costachica | hispano (México) | 3 | CONFIRMADA (ed. 1974 vs. 1958 en corpus) | P3-A |
| `deere` | The Invention of Order: On the Coloniality of Space | Don Thomas Deere | C5 | martinica | comparado (teoría decolonial americana) | 3 | no verificada en esta auditoría | P3-F |
| `deloughrey` | Allegories of the Anthropocene | Elizabeth M. DeLoughrey | C5,C6 | barbados | anglófono (EE.UU./Caribe) | 4 | no verificada en esta auditoría | P3-E |
| `duboisturits` | Freedom Roots: Histories from the Caribbean | Laurent Dubois y Richard Lee Turits | C3 | haiti | anglófono (EE.UU.) | 8 | CONFIRMADA | P3-A |
| `dubuissonhaiti` | Reclaiming Haiti's Futures | Darlène Elizabeth Dubuisson | C6 | haiti | anglófono (EE.UU.) | 4 | no verificada | P3-B |
| `escalante` | El Palenque de San Basilio | Aquiles Escalante | C3 | palenque | hispano (Colombia) | 7 | AMBIGUA (solo anexo 6 pp.) | P3-A |
| `ferdinand` | Une écologie décoloniale | Malcom Ferdinand | C2,C6 | martinica | francófono (Martinica) | 5 | no verificada en esta auditoría | P3-E |
| `ferrerfreedomsmirror` | Freedom's Mirror: Cuba and Haiti in the Age of Revolution | Ada Ferrer | C2,C3 | cuba | anglófono (EE.UU.) | 3 | no verificada en esta auditoría | P3-F |
| `fischer` | Modernity Disavowed: Haiti and the Cultures of Slavery in the Age of Revolution | Sibylle Fischer | C2 | haiti | comparado | 3 | no verificada en esta auditoría | P3-F |
| `fouchard` | Les marrons de la liberté | Jean Fouchard | C3 | haiti | francófono (Haití) | 5 | NO_LOCALIZADA | P3-B |
| `friedemannlengua` | Lengua y sociedad en el Palenque de San Basilio | Carlos Patiño Rosselli & Nina S. de Friedemann | C3 | palenque | hispano (Colombia) | 4 | no verificada en esta auditoría | P3-C |
| `globalculture` | Global Culture, Island Identity: Continuity and Change in the Afro-Caribbean Community of Nevis | Karen Fog Olwig | C5 | nevis | anglófono (Dinamarca/Caribe) | 4 | no verificada en esta auditoría | P3-E |
| `goldbergabolition` | Abolition Time: Grammars of Law, Poetics of Justice | Jess A. Goldberg | C2 | guyana | anglófono (EE. UU./Guyana) | 3 | no verificada en esta auditoría | P3-G |
| `grosfoguelcolonial` | Colonial Subjects: Puerto Ricans in a Global Perspective | Ramón Grosfoguel | C5 | puertorico | hispano (Puerto Rico) | 3 | no verificada en esta auditoría | P3-G |
| `hallafricanslouisiana` | Africans in Colonial Louisiana: The Development of Afro-Creole Culture in the Eighteenth Century | Gwendolyn Midlo Hall | C2 | nola | francófono/anglófono (Luisiana) | 2 | no verificada en esta auditoría | P3-G |
| `headleyreparaciones` | A Philosophical Investigation into the Possibility/Impossibility of Reparations for Caribbean Slavery: Assessing the Legal Challenges | Clevis Headley | C2 | haiti | comparado (transnacional) | 2 | no verificada en esta auditoría | P3-G |
| `helglibertyequality` | Liberty and Equality in Caribbean Colombia, 1770-1835 | Aline Helg | C2 | cartagena | hispano (Suiza/Colombia) | 8 | no verificada en esta auditoría | P3-C |
| `islandfutures` | Island Futures: Caribbean Survival in the Anthropocene | Mimi Sheller | C2,C6 | haiti | anglófono (EE.UU./Caribe) | 8 | no verificada en esta auditoría | P3-C |
| `james_bannerethiopia` | Holding Aloft the Banner of Ethiopia: Caribbean Radicalism in Early Twentieth-Century America | Winston James | C5 | jamaica | anglófono (Jamaica/EE.UU.) | 5 | no verificada en esta auditoría | P3-D |
| `johnson_climatecuba` | Climate and Catastrophe in Cuba and the Atlantic World in the Age of Revolution | Sherry Johnson | C6 | cuba | anglófono (EE.UU.) | 3 | no verificada en esta auditoría | P3-C |
| `johnsonbelize` | Becoming Creole: Nature and Race in Belize | Melissa A. Johnson | C2,C6 | belize | anglófono (comparado) | 1 | no verificada en esta auditoría | P3-H |
| `kahnislands` | Islands of Sovereignty: Haitian Migration and the Borders of Empire | Jeffrey S. Kahn | C5 | haiti | anglófono (EE.UU.) | 2 | no verificada en esta auditoría | P3-G |
| `kalefragments` | Fragments of Empire: Capital, Slavery, and Indian Indentured Labor in the British Caribbean | Madhavi Kale | C2 | guyana | anglófono (EE.UU./India) | 4 | no verificada en esta auditoría | P3-E |
| `kloosterrealm` | Realm between Empires: The Second Dutch Atlantic, 1680-1815 | Wim Klooster y Gert Oostindie | C5 | curazao | neerlandés (Países Bajos/Caribe) | 4 | no verificada en esta auditoría | P3-F |
| `lebroncimarronaje` | Filosofía del cimarronaje | Pedro Lebrón Ortiz | C3 | puertorico | hispano (Puerto Rico) | 2 | no verificada en esta auditoría | P3-D |
| `lizcanocarnaval` | Leyendo el carnaval: miradas desde Barranquilla, Bahía y Barcelona | Martha Lizcano Angarita y Danny González Cueto (comps.) | C5 | barranquilla | hispano (Colombia) | 2 | no verificada en esta auditoría | P3-H |
| `looklaichinese` | The Chinese in the West Indies, 1806-1995: A Documentary History | Walton Look Lai | C5 | trinidad | anglófono (Trinidad) | 3 | no verificada en esta auditoría | P3-G |
| `mamalola` | Mama Lola: A Vodou Priestess in Brooklyn | Karen McCarthy Brown | C5 | haiti | anglófono (EE.UU., diáspora en Brooklyn) | 5 | no verificada en esta auditoría | P3-E |
| `martinezsanmiguel` | Coloniality of Diasporas: Rethinking Intra-Colonial Migrations in a Pan Caribbean Context | Yolanda Martínez-San Miguel | C5 | puertorico | hispano (Puerto Rico/comparado) | 6 | no verificada en esta auditoría | P3-D |
| `mcneillmosquito` | Mosquito Empires: Ecology and War in the Greater Caribbean, 1620-1914 | J. R. McNeill | C2,C5 | cartagena | comparado (cuenca completa) | 1 | no verificada en esta auditoría | P3-H |
| `mendozaraices` | Raíces, Resistencias y Territorios: 500 años de experiencia Afro en Santa Marta | María Angélica del Mar Mendoza Manotas (comp.) et al. | C3 | santamarta | hispano (Colombia) | 3 | no verificada en esta auditoría | P3-C |
| `meniketinevis` | Sugar Cane Capitalism and Environmental Transformation: An Archaeology of Colonial Nevis, West Indies | Marco G. Meniketti | C2 | nevis | anglófono (EE.UU.) | 1 | no verificada en esta auditoría | P3-H |
| `mintz` | Caribbean Transformations / Sweetness and Power | Sidney W. Mintz | C2,C4 | puertorico | anglófono (EE.UU.) | 18 | AMBIGUA (falta "Caribbean Transformations") | P3-B |
| `mintzpricebirth` | The Birth of African-American Culture: An Anthropological Perspective | Sidney W. Mintz y Richard Price | C3,C5 | suriname | anglófono (EE.UU.) | 10 | CONFIRMADA (ed. port.) | P3-A |
| `mitchellalibi` | The Alibi of Capital: How We Broke the Earth to Steal the Future on the Promise of a Better Tomorrow | Timothy Mitchell | C2,C5 | haiti | anglófono (Reino Unido/EE.UU.) | 1 | no verificada en esta auditoría | P3-H |
| `munrohaitirising` | Haiti Rising: Haitian History, Culture and the Earthquake of 2010 | Martin Munro (ed.) | C6 | haiti | anglófono/francófono (Haití) | 3 | no verificada en esta auditoría | P3-D |
| `olsencartagena` | Slavery and Salvation in Colonial Cartagena de Indias | Margaret M. Olsen | C2 | cartagena | anglófono (EE. UU./Colombia) | 3 | no verificada en esta auditoría | P3-G |
| `olwigstjohn` | Cultural Adaptation and Resistance on St. John | Karen Fog Olwig | C4 | stjohn | anglófono (hoy EE.UU., antes colonia danesa) | 5 | CONFIRMADA | P3-A |
| `pardomosquerahoffmann` | Afrodescendientes en las Américas: trayectorias sociales e identitarias. 150 años de la abolición de la esclavitud en Colombia | Mauricio Pardo, Claudia Mosquera y Odile Hoffmann (eds.) | C2 | cartagena | hispano (Colombia/Francia) | 2 | no verificada en esta auditoría | P3-G |
| `prestolmasacre` | El Masacre se pasa a pie (You Can Cross the Massacre on Foot) | Freddy Prestol Castillo | C5 | dominicana | hispano (República Dominicana) | 2 | no verificada en esta auditoría | P3-H |
| `puriradical` | The Legacies of Caribbean Radical Politics | Shalini Puri (ed.) | C5 | trinidad | comparado (anglófono Caribe) | 2 | no verificada en esta auditoría | P3-H |
| `quinnblackpower` | Black Power in the Caribbean | Kate Quinn (ed.) | C5 | trinidad | comparado (anglófono Caribe) | 7 | no verificada en esta auditoría | P3-C |
| `ramsaranlewis` | Caribbean Masala: Indian Identity in Guyana and Trinidad | Dave Ramsaran y Linden F. Lewis | C5 | guyana | anglófono (Guyana/Trinidad) | 5 | no verificada en esta auditoría | P3-E |
| `rebeldestiny` | Rebel Destiny: Among the Bush Negroes of Dutch Guiana | Melville & Frances Herskovits | C3 | suriname | anglófono (EE.UU./Surinam neerlandés) | 9 | no verificada | P3-B |
| `rediker` | Barco de esclavos: una historia humana | Marcus Rediker | C2 | jamaica | comparado (transnacional) | 4 | no verificada en esta auditoría | P3-E |
| `reysinningcristorey` | Cristo Rey, un espacio para permanecer en el tiempo | Édgar Rey Sinning | C2 | santamarta | hispano (Colombia) | 6 | no verificada en esta auditoría | P3-D |
| `roberts` | Freedom as Marronage | Neil Roberts | C2,C3 | jamaica | anglófono (Antillas) | 11 | CONFIRMADA | P3-A |
| `robinsonmarxismo` | Marxismo negro: la formación de la tradición radical negra | Cedric J. Robinson | C2 | jamaica | comparado (transnacional) | 7 | no verificada en esta auditoría | P3-C |
| `rtsmithmatrifocal` | The Matrifocal Family: Power, Pluralism and Politics | Raymond T. Smith | C2 | guyana | anglófono (R.U./Guyana) | 8 | no verificada | P3-B |
| `russwurm` | The Struggles of John Brown Russwurm: The Life and Writings of a Pan-Africanist Pioneer, 1799-1851 | Winston James | C5 | jamaica | anglófono (Jamaica/EE.UU.) | 3 | no verificada en esta auditoría | P3-G |
| `sangbenvolviendo` | Volviendo al Caribe | Mukien Adriana Sang Ben | C2,C5 | santamarta | hispano (Rep. Dominicana/Colombia) | 4 | no verificada en esta auditoría | P3-E |
| `scher` | Carnival and the Formation of a Caribbean Transnation | Philip W. Scher | C5 | trinidad | anglófono (Trinidad/EE.UU.) | 3 | no verificada en esta auditoría | P3-G |
| `sharpewake` | In the Wake: On Blackness and Being | Christina Sharpe | C2,C6 | barbados | anglófono (Canadá/Barbados) | 8 | no verificada | P3-B |
| `shellererotic` | Citizenship from Below: Erotic Agency and Caribbean Freedom | Mimi Sheller | C2 | jamaica | anglófono (EE.UU./Caribe) | 10 | NO_LOCALIZADA | P3-B |
| `truebornmaroons` | True-Born Maroons | Kenneth Bilby | C3 | jamaica | anglófono (Jamaica/EE.UU.) | 5 | no verificada en esta auditoría | P3-C |
| `ulysseWhyHaiti` | Why Haiti Needs New Narratives: A Post-Quake Chronicle | Gina Athena Ulysse | C6 | haiti | anglófono (EE.UU./Haití) | 4 | no verificada en esta auditoría | P3-C |
| `wilsoncrabantics` | Crab Antics: The Social Anthropology of English-Speaking Negro Societies of the Caribbean | Peter J. Wilson | C5 | sanandres | anglófono (Nueva Zelanda/Providencia) | 8 | CONFIRMADA | P3-A |
| `zambrana` | Colonial Debts: The Case of Puerto Rico | Rocío Zambrana | C2 | puertorico | hispano (Puerto Rico) | 4 | no verificada en esta auditoría | P3-F |
| `zapataarbol` | El árbol brujo de la libertad | Manuel Zapata Olivella | C3 | cartagena | hispano (Colombia) | 1 | no verificada en esta auditoría | P3-D |
| `zips_nannysasafo` | Nanny's Asafo Warriors: The Jamaican Maroons' African Experience | Werner Zips | C3 | jamaica | anglófono (Jamaica) / alemán (Austria) | 3 | no verificada en esta auditoría | P3-D |
| `zonabananera` | Las geografías negras en la Zona Bananera: algunas cuestiones de método para encarar las vidas negras del Caribe colombiano | Roberto Almanza y Margarita Granados Castellanos | C2 | santamarta | hispano (Colombia) | 8 | no verificada | P3-B |

*Grado relacional: número de relaciones existentes en `datos-atlas.json` (capa de fenómenos) que involucran ese id — ver advertencia de alcance en §11. Fuente local: verificada por existencia de archivo en `Pagina/Biliografia `, solo para los 20 casos de P3-A y P3-B (§17–18); para el resto se declara honestamente "no verificada en esta auditoría", conforme al mandato de no exceder el trabajo de universo/secuenciación.

---

## 17. Sublote P3-A

**Propuesto como primer lote de lectura real. 10 casos.** Combina, según el criterio de composición pedido: 1 caso relacional muy alto (`mintzpricebirth`, dentro de P3-A) y otros de grado medio-alto; las 5 corrientes presentes en P3 (C2 a C6); 10 territorios distintos, sin repetir ninguno; 3 lenguas (inglés, español, neerlandés); y un caso que resuelve explícitamente un hilo pendiente heredado de P2.

| # | id | Corriente | Territorio | Fuente local | Motivo de inclusión |
|---|---|---|---|---|---|
| 1 | `duboisturits` | C3 | Haití | **CONFIRMADA** | Ver §18, primer caso propuesto. |
| 2 | `wilsoncrabantics` | C5 | San Andrés | **CONFIRMADA** | Territorio único en todo P3 (archipiélago colombiano); texto canónico de antropología caribeña (Peter Wilson, 1973); sin ambigüedad de identidad. |
| 3 | `cuijla` | C4 | Costa Chica | **CONFIRMADA** (ed. 1974 en archivo, corpus registra 1958 — discrepancia de edición, sin efecto clasificatorio, mismo tipo de nota que `atkinsonearliest` en P2) | Refuerza C4, la corriente más delgada dentro de P3 (solo 5 casos). Ancla del fenómeno *contraplantación* que C4 identificó de forma independiente (dictamen C4 §4) y que la cola no resuelve. |
| 4 | `olwigstjohn` | C4 | St. John | **CONFIRMADA** | Segundo caso C4; territorio (antigua colonia danesa, hoy EE.UU.) sin ningún otro caso en P3. |
| 5 | `allen_dikimanera` | C2, C4 | Curazao | **CONFIRMADA** | Único caso neerlandófono con fuente confirmada; cubre C2 y C4 a la vez. |
| 6 | `aftershocks` | C6 | Puerto Rico | **CONFIRMADA** | Resuelve el hilo dejado explícitamente abierto por el cierre de P2 (`schwartz_seaofstorms ↔ aftershocks`, POR_CORROBORAR "falta leer aftershocks, caso P3" — cierre P2 §9). Único caso C6 de este sublote. |
| 7 | `mintzpricebirth` | C3, C5 | Suriname | **CONFIRMADA** (edición portuguesa localizada; coincide con el año de esa edición en el corpus, 2003) | Grado relacional 10; territorio Guayanas, ausente del resto de P3-A; cubre C3 y C5 simultáneamente. |
| 8 | `abello` | C5 | Cartagena | **CONFIRMADA** | Grado relacional 12, el más alto de este sublote con fuente confirmada; autor colombiano, refuerza diversidad lingüística (español). |
| 9 | `roberts` | C2, C3 | Jamaica | **CONFIRMADA** | Grado relacional 11; *Freedom as Marronage* es un texto central de filosofía caribeña del cimarronaje, con alta afinidad temática al programa del atlas; cubre C2 y C3. |
| 10 | `escalante` | C3 | Palenque | **AMBIGUA** — solo se localizó un anexo/reseña de 6 páginas (`RdC_7_385-390_ESCALANTE_anexo.pdf`), no la monografía completa de 1954. Se incluye señalando esta ambigüedad; puede requerir localizar la edición completa antes de leerse en profundidad. | Grado relacional 7; texto fundacional del cimarronaje en el Caribe continental colombiano (San Basilio de Palenque), territorio sin ningún otro representante en P3. |

**Orden interno sugerido**: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 (los nueve primeros con fuente confirmada o casi; `escalante` al final porque su fuente es ambigua y quizá exija una gestión bibliográfica previa). La Dirección Académica puede cambiar este orden.

**Ausencia notada, no corregida**: ningún caso francófono (`fouchard`, `ferdinand`) tiene fuente confirmada en `Biliografia ` (ver §19), así que P3-A no logra diversidad francófona pese a intentarlo. Queda para P3-B.

---

## 18. Sublote P3-B

**10 casos**, segunda prioridad. Incluye los 3 casos de mayor grado relacional de todo P3 (`mintz` 18, `casimir` 14, `shellererotic` 10) pese a que dos de ellos tienen bloqueo bibliográfico — se documentan explícitamente en vez de omitirse, conforme al criterio "casos bloqueados" del §24.

| # | id | Corriente | Territorio | Fuente local | Observación |
|---|---|---|---|---|---|
| 1 | `rebeldestiny` | C3 | Suriname | no verificada en esta auditoría | Grado relacional 9; ancla del fenómeno *cimarronaje_territorial* (dictamen C3 §9). |
| 2 | `besson` | C2 | Jamaica | no verificada en esta auditoría | Grado relacional 8. |
| 3 | `rtsmithmatrifocal` | C2 | Guyana | no verificada en esta auditoría | Grado relacional 8; territorio Guayanas. |
| 4 | `sharpewake` | C2, C6 | Barbados | no verificada en esta auditoría | Grado relacional 8; texto teórico de referencia (Christina Sharpe). |
| 5 | `zonabananera` | C2 | Santa Marta | no verificada en esta auditoría | Grado relacional 8. **Nota de transparencia**: coautoría de Roberto Almanza y Margarita Granados Castellanos — se señala expresamente para que Dirección Académica decida si aplica algún protocolo especial de lectura por autoría propia; esta auditoría no toma esa decisión. |
| 6 | `dubuissonhaiti` | C6 | Haití | no verificada en esta auditoría | Grado relacional 4; refuerza C6. |
| 7 | `fouchard` | C3 | Haití | **NO_LOCALIZADA** | Único caso C3 francófono de P3; se incluye pese al bloqueo para no perder la diversidad lingüística que P3-A no logró (ver §17). Requiere gestión bibliográfica antes de lectura. |
| 8 | `mintz` | C2, C4 | Puerto Rico | **AMBIGUA** — localizado "Dulzura y poder" (= *Sweetness and Power*), no localizado el otro componente, *Caribbean Transformations* | Grado relacional 18, el más alto de todo P3. Entrada **compuesta** (dos títulos bajo un id): `decisiones-pendientes.md` §6 deja abierta la política editorial para entradas compuestas. **Se recomienda resolver esa decisión de política antes de asignar corriente a este caso**, no solo conseguir la fuente. |
| 9 | `casimir` | C2, C4 | Haití | **NO_LOCALIZADA** | Grado relacional 14. La Etapa 2.2 ya recalibró su prioridad de P1 a P3 (cola §0) retirando una frontera sin respaldo — la recalibración se sostiene; lo que falta es la fuente, no la evidencia de clasificación. |
| 10 | `shellererotic` | C2 | Jamaica | **NO_LOCALIZADA** | Grado relacional 10. La memoria de proyecto de otra ronda de siembra (jul-2026) da por sembrada una obra de Sheller con este mismo título en el corpus de fenómenos; no se encontró en `Biliografia ` durante esta auditoría. Se registra la discrepancia sin resolverla — puede ser un archivo mal nombrado, movido, o la referencia de memoria puede corresponder a otro corpus. |

**Orden interno sugerido**: 1 → 6 (los seis con fuente no verificada pero sin bloqueo conocido) → 7 → 9 → 10 → 8 (los cuatro con bloqueo o decisión pendiente, dejando `mintz` al final por depender de una política editorial, no solo de una búsqueda bibliográfica).

---

## 19. Sublotes restantes (P3-C a P3-H)

68 casos restantes, divididos en 6 sublotes de 10, 10, 10, 10, 10 y 8, agrupados por corriente principal declarada y ordenados dentro de cada corriente por grado relacional descendente, alternando entre corrientes para que ningún sublote quede monotemático. **Disponibilidad bibliográfica no verificada para ninguno de estos 58 casos** (fuera del alcance de esta auditoría; ver matriz §16). Ningún caso de C, D, E, F, G o H tiene bloqueo, sincronización o ambigüedad de identidad conocidos — eso ya se filtró en §7–9.

**P3-C** (10): `helglibertyequality` (C2, Cartagena), `truebornmaroons` (C3, Jamaica), `callaloonation` (C5, Trinidad), `ulysseWhyHaiti` (C6, Haití), `islandfutures` (C2/C6, Haití), `friedemannlengua` (C3, Palenque), `quinnblackpower` (C5, Trinidad), `johnson_climatecuba` (C6, Cuba), `robinsonmarxismo` (C2, Jamaica), `mendozaraices` (C3, Santa Marta).

**P3-D** (10): `austinfearblack` (C5, Trinidad), `munrohaitirising` (C6, Haití), `becklessavingsouls` (C2, Barbados), `zips_nannysasafo` (C3, Jamaica), `martinezsanmiguel` (C5, Puerto Rico), `reysinningcristorey` (C2, Santa Marta), `lebroncimarronaje` (C3, Puerto Rico), `james_bannerethiopia` (C5, Jamaica), `bollandbelize` (C2, Belice), `zapataarbol` (C3, Cartagena).

**P3-E** (10): `mamalola` (C5, Haití), `ferdinand` (C2/C6, Martinica — fuente local encontrada bajo el mismo autor pero título distinto, *S'aimer la Terre*, 2024, no *Une écologie décoloniale*, 2019; señalado como AMBIGUA si este sublote se abre), `ramsaranlewis` (C5, Guyana), `araujo` (C2, Haití), `crawfordturtlemen` (C5/C6, Bluefields), `kalefragments` (C2, Guyana), `deloughrey` (C5/C6, Barbados), `rediker` (C2, Jamaica), `globalculture` (C5, Nevis), `sangbenvolviendo` (C2/C5, Santa Marta).

**P3-F** (10): `kloosterrealm` (C5, Curazao), `zambrana` (C2, Puerto Rico), `archipelagicthinking` (C5, Puerto Rico), `bahadurcoolie` (C2, Guyana), `branddoor` (C5, Trinidad), `brereton_racerelationstrinidad` (C2, Trinidad), `caribjourneys` (C5, Nevis), `ferrerfreedomsmirror` (C2/C3, Cuba), `deere` (C5, Martinica), `fischer` (C2, Haití).

**P3-G** (10): `grosfoguelcolonial` (C5, Puerto Rico), `goldbergabolition` (C2, Guyana), `looklaichinese` (C5, Trinidad), `olsencartagena` (C2, Cartagena), `russwurm` (C5, Jamaica), `hallafricanslouisiana` (C2, Nueva Orleans), `scher` (C5, Trinidad), `headleyreparaciones` (C2, Haití), `kahnislands` (C5, Haití), `pardomosquerahoffmann` (C2, Cartagena).

**P3-H** (8): `lizcanocarnaval` (C5, Barranquilla), `johnsonbelize` (C2/C6, Belice), `prestolmasacre` (C5, Rep. Dominicana), `mcneillmosquito` (C2/C5, Cartagena — fuente confirmada al verificar disponibilidad para P3-A, ver §17 nota; no formalmente verificada como parte de este sublote), `puriradical` (C5, Trinidad), `meniketinevis` (C2, Nevis), `castorspiritual` (C5, Trinidad), `mitchellalibi` (C2/C5, Haití).

Estos seis sublotes **no se detallan con ficha individual por caso**: eso corresponde a la apertura de cada sublote cuando llegue su turno, no a esta auditoría de universo. Su composición puede reordenarse libremente por Dirección Académica sin afectar el control de conteo (§22), siempre que los 68 ids se mantengan dentro de C a H.

---

## 20. Casos bloqueados

# P3 — BLOQUEADOS / NO ABRIR AÚN

| id | Motivo | Qué falta | Quién/qué lo resuelve | Tipo de bloqueo |
|---|---|---|---|---|
| `casimir` | Fuente no localizada en `Biliografia ` | Adquirir *The Haitians: A Decolonial History* (Jean Casimir, 2020) | Rob (descarga/adquisición) | Bibliográfico |
| `shellererotic` | Fuente no localizada; discrepancia con nota de memoria de otra ronda de siembra | Adquirir o localizar *Citizenship from Below* (Mimi Sheller, 2012), o aclarar si ya existe con otro nombre de archivo | Rob | Bibliográfico |
| `fouchard` | Fuente no localizada | Adquirir *Les marrons de la liberté* (Jean Fouchard, 1972) | Rob | Bibliográfico |
| `mintz` | Entrada compuesta sin política editorial resuelta; además solo un componente tiene fuente confirmada | Decisión de Dirección Académica sobre cómo tratar entradas compuestas (`decisiones-pendientes.md` §6) antes de asignar lectura; adquirir *Caribbean Transformations* | Rob (decisión + adquisición) | Académico + bibliográfico |
| `escalante` | Solo se localizó un anexo/reseña de 6 páginas, no la monografía de 1954 | Confirmar si el anexo basta para decidir corriente o si se requiere la obra completa | Rob | Bibliográfico (ambiguo, no bloqueante duro) |
| `ferdinand` | El archivo local bajo ese autor no es el título registrado en el corpus (`S'aimer la Terre`, 2024, en vez de `Une écologie décoloniale`, 2019) | Confirmar cuál título corresponde al fenómeno registrado, o adquirir el título correcto | Rob | Bibliográfico |

No se intentó resolver ninguno de estos seis en esta tarea.

---

## 21. Casos de sincronización

# P3 — SINCRONIZACIÓN / IMPLEMENTACIÓN

Ya cubierto en §8: `benedictykokken_haitiexception` y `gudynas`. Ninguno de los dos es un caso P3 (ambos están fuera del universo de 78, clasificados aparte por la propia cola vigente). Se repite aquí solo para que esta sección exista en la estructura pedida y quede explícito que no hay solapamiento con los sublotes de lectura P3-A a P3-H.

---

## 22. Control de conteo

**P3 histórico (78) = P3 activo (78).** No hay diferencia que reconciliar: a diferencia de P1→P2, la Etapa 2.2 ya hizo la reconciliación de universo antes de esta auditoría (cola §0), y el recuento programático de esta auditoría reproduce exactamente su resultado.

Verificación independiente del cuadre de Grupo A completo:

```
P1 (15) + P2 (11) + P3 (78) + P4 (2) = 106
Total de filas en la tabla "Cola activa de lectura académica (Grupo A)" = 106
```

**Cuadra exactamente.** Verificado con un parser propio sobre la tabla markdown (no por conteo visual), incluyendo control de que ninguna fila de separador de tabla se contara por error.

Universos paralelos, fuera de Grupo A, verificados sin solapamiento con P3:
- Casos resueltos (§5): 51 — 0 coincidencias con los 78 de P3.
- Grupo B, identidad bibliográfica (§7): 3 — 0 coincidencias.
- Sincronización técnica (§8): 2 — 0 coincidencias.
- Anclas/fenómenos mal incorporados (§5): 3 — 0 coincidencias.

**No se encontró ninguna discrepancia que impida cerrar esta auditoría.**

---

## 23. Control de duplicados

Verificado programáticamente sobre los 78 ids de P3: **`len(lista) == len(set(lista))` → sin duplicados.** La propia cola declara además, para el total de 106 de Grupo A, "verificado programáticamente: 106 filas = 106 ids únicos, cero duplicados" (cola §15) — coincide con el resultado independiente de esta auditoría.

No se encontraron ids duplicados en la matriz P3 ni en la cola.

---

## 24. Control de archivos existentes

Cubierto en detalle en §9: cero coincidencias entre los 78 ids de P3 y los 91 archivos existentes en `atlas-2/documentos/`.

**Hallazgo adicional no pedido explícitamente por el encargo, registrado por transparencia**: existe una prioridad **P4** con 2 casos (`castrogomezhybris`, `hoeftesuriname`) que el encargo original de apertura no menciona en ningún punto (solo habla de P1/P2/P3). Uno de los dos, `castrogomezhybris`, tiene estado `LEIDA_SIN_DECISION` — es decir, ya fue leído pero nunca se decidió su corriente, un estado que no aparece en el vocabulario de estados que el encargo original define en su §8. **No se investigó ni se tocó**, por estar fuera del mandato de esta auditoría (que es P3, no P4), pero se señala para que Dirección Académica decida si P4 necesita su propia apertura en algún momento.

---

## 25. Control de disponibilidad bibliográfica

Verificado por existencia de archivo en `Pagina/Biliografia ` (con el espacio final del nombre real de la carpeta, sin renombrar), solo nombre/formato, **sin abrir ningún contenido**. Solo para los 20 casos de P3-A y P3-B, conforme al alcance que pide el encargo ("para cada candidato de P3-A" — se extendió por buena práctica a P3-B, dado que P3-B también quedó definido con el mismo nivel de detalle).

| Estado | Casos |
|---|---:|
| FUENTE_LOCAL_CONFIRMADA | 12 |
| FUENTE_AMBIGUA | 3 (`escalante`, `mintz`, y `ferdinand` si se cuenta desde P3-E) |
| FUENTE_NO_LOCALIZADA | 3 (`casimir`, `shellererotic`, `fouchard`) |
| No verificada (fuera de alcance de esta auditoría) | 58 (P3-C a P3-H) |

Detalle completo en la matriz §16 y en las fichas de §17–18.

---

## 26. Verificación de integridad del árbol de trabajo — sin Git

Sustituye a la verificación Git de las secciones 3 y 40 del encargo original, por instrucción explícita de Dirección Académica del 24-08-2026 (ver cabecera de este documento). No se ejecutó ningún comando `git` durante esta auditoría, en ningún momento, ni al inicio ni al cierre. No se detectó `.git/index.lock` ni `.git/HEAD.lock` preexistente al momento de iniciar (verificado por `ls`, no por `git status`); no se intervino `.git/` en ningún punto.

**1. Único archivo creado**: `data/agua-de-por-medio/atlas-2/documentos/apertura-recalibracion-p3-etapa-2-3g.md` (este documento).

**2. Archivos consultados** (lectura, ningún cambio): `cierre-lote-p2-etapa-2-3f.md`, `cola-lectura-pendiente-atlas-2.md`, `catalogos-atlas-2.json`, `esquema-datos-propuesto.json`, `decisiones-pendientes.md`, `incidencias-cerradas.md`, `marco-academico-consolidado-atlas-2.md` (existencia y metadatos, no leído en profundidad), `matriz-fronteras-c1-c10.md` (existencia y metadatos), `glosario-archipielico.md` (existencia), `cierre-global-p1-etapa-2-3.md`, `paquete-ciego-t01.md` (existencia), `expediente-evidencia-c7.md`, `ficha-decision-c4.md`, `README.md` (atlas-2), `catalogo-fenomenos.json` (existencia), `etapa-1-arquitectura-integrada.md` (existencia), los 8 archivos de `atlas-2/lotes/` (existencia), y `data/agua-de-por-medio/datos-atlas.json` (lectura completa, sin escritura) para cruzar metadata de los 78 casos P3.

**3. Hashes SHA-256 antes** (calculados con `shasum -a 256` directamente sobre los archivos del Mac, no sobre copias):

```
b850f081c0107a72bfedd12b8d780aaf1efba638e3440a6e249219bf07e7313c  datos-atlas.json
d2f8e68dc8915c597e5f3ff93ec55cc601a5de98c35c1ffdaeb0ba938d469048  datos-atlas.js
f12ca9ac34a98836ac79091be6a63eead2b24eff6869c14a78bd727e5d97207b  atlas-2/catalogos-atlas-2.json
c9900dad467d2e94cf74241b7621ceb733f98766a38c14014d3a2e60cc15cfc4  atlas-2/documentos/esquema-datos-propuesto.json
5f496d1ecd44d3cdbdde6b86e6766ca3341d20ead2ceb1ebf367080928c06869  atlas-2/documentos/cierre-lote-p2-etapa-2-3f.md
578a6237f25e57e4798d559e0d33d831886291bf52cc82723ccd60e94417ef4e  atlas-2/documentos/cola-lectura-pendiente-atlas-2.md
ad98e18dc3bc890d778a9be50686cda75a4ee4a5ef0eccd2e3514df88fec66e1  atlas-2/documentos/cierre-global-p1-etapa-2-3.md
3ed1239348b8b886773cccabcd879b25d140b98f4e6fb45984cc10ba41fa121f  atlas-2/documentos/expediente-evidencia-c7.md
2eb89027c02d7e461d5277c351dc6aaafb5ea57dcedd117bec762317cc232c8c  atlas-2/documentos/ficha-decision-c4.md
```

Calculadas el 2026-08-24, antes de escribir este documento.

**4. Hashes SHA-256 después** (recalculados tras escribir y confirmar en disco `apertura-recalibracion-p3-etapa-2-3g.md`, el 2026-08-24T17:06:37Z):

```
b850f081c0107a72bfedd12b8d780aaf1efba638e3440a6e249219bf07e7313c  datos-atlas.json
d2f8e68dc8915c597e5f3ff93ec55cc601a5de98c35c1ffdaeb0ba938d469048  datos-atlas.js
f12ca9ac34a98836ac79091be6a63eead2b24eff6869c14a78bd727e5d97207b  atlas-2/catalogos-atlas-2.json
c9900dad467d2e94cf74241b7621ceb733f98766a38c14014d3a2e60cc15cfc4  atlas-2/documentos/esquema-datos-propuesto.json
5f496d1ecd44d3cdbdde6b86e6766ca3341d20ead2ceb1ebf367080928c06869  atlas-2/documentos/cierre-lote-p2-etapa-2-3f.md
578a6237f25e57e4798d559e0d33d831886291bf52cc82723ccd60e94417ef4e  atlas-2/documentos/cola-lectura-pendiente-atlas-2.md
ad98e18dc3bc890d778a9be50686cda75a4ee4a5ef0eccd2e3514df88fec66e1  atlas-2/documentos/cierre-global-p1-etapa-2-3.md
3ed1239348b8b886773cccabcd879b25d140b98f4e6fb45984cc10ba41fa121f  atlas-2/documentos/expediente-evidencia-c7.md
2eb89027c02d7e461d5277c351dc6aaafb5ea57dcedd117bec762317cc232c8c  atlas-2/documentos/ficha-decision-c4.md
```

**5. Confirmación de que los hashes coinciden**: sí, los nueve son idénticos, carácter por carácter, a los de §26.3. **Ninguno de los ocho archivos de control ni el corpus (`datos-atlas.json`/`.js`) fue modificado durante esta auditoría.**

**6. Confirmación de que no se abrió ninguna obra P3**: correcto — ningún PDF/epub de los 78 casos, ni de los candidatos verificados en `Biliografia `, fue abierto; solo se comprobó existencia de archivo por nombre (§25).

**7. Confirmación de que no se modificó P2**: correcto — `cierre-lote-p2-etapa-2-3f.md` y los 11 pares lectura/decisión de P2 no se tocaron (hash idéntico del acta de cierre, arriba).

**8. Confirmación de que no se modificó corpus, catálogo ni esquema**: correcto — `datos-atlas.json`, `datos-atlas.js`, `catalogos-atlas-2.json` y `esquema-datos-propuesto.json` mantienen hash idéntico antes/después.

**9. Confirmación**: no se ejecutó ningún comando Git; no se intervino `.git/` en ningún punto de esta auditoría.

---

## 27. Git — pendiente de ejecución externa

**No aplica en esta fase.** Por instrucción expresa de Dirección Académica, la verificación Git (inicial y final) queda para que Dirección Académica la ejecute desde su terminal local:

```
git status --short
git diff --stat
git diff
git rev-parse HEAD
git rev-parse origin/feat/atlas-2-etapa-1-integrada
```

Se espera que `git status --short` muestre exactamente un archivo nuevo no rastreado (este documento) más los dos históricos ya conocidos (`expediente-evidencia-c7.md`, `ficha-decision-c4.md`, que deben seguir apareciendo como no rastreados y sin cambios). No se hizo `git add`, `commit` ni `push`.

---

## 28. Estado final

Hashes "después" verificados y coincidentes con los de §26.3 (ver §26.4–5). Único archivo creado: este documento. Ningún otro archivo del repositorio fue tocado.

**`P3_AUDITADO_Y_LISTO_PARA_APERTURA`**

Ningún dato de este documento depende de que la verificación Git se ejecute — depende solo de que los hashes coincidan, y coinciden. Queda pendiente, para Dirección Académica y fuera del alcance de esta auditoría: la verificación Git de cierre (§27), y las seis decisiones señaladas a lo largo del documento (política de entradas compuestas para `mintz`, §18; gestión bibliográfica de los cinco casos bloqueados, §20; y aprobación explícita de universo → prioridades → sublotes → primer caso, condición absoluta del encargo original).

*(Nota de honestidad metodológica: el criterio de cierre lo fija la Dirección Académica en su documento de cambio de protocolo, sección 7 — "la ausencia de comandos Git no impide declarar P3_AUDITADO_Y_LISTO_PARA_APERTURA si la auditoría académica y documental queda completa y la integridad de los archivos sensibles ha sido verificada por hashes." Ese criterio se cumple aquí en cuanto se confirmen los hashes de después.)*
