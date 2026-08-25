# Expediente de evidencia — Corriente C9

**Naturaleza del documento.** Probatorio, exploratorio y no decisorio. Reúne evidencia verificada sobre C9 para que la Dirección Académica decida. No fija principios, no reclasifica, no crea candidaturas, no redacta el dictamen de C9 y no avanza a C10. Donde dos fuentes se contradicen, se registra la tensión sin resolverla.

**Rama:** `feat/atlas-2-etapa-1-integrada`
**HEAD al iniciar:** `e5cdecaf895026b207f42902274932aae31d9f92`
**Commits recientes verificados:** `e5cdeca` (Documenta dictamen académico de la corriente C8), `0d1f9ac` (Documenta expediente de evidencia de la corriente C8)

**Estado inicial del repositorio (verificado antes de escribir cualquier cosa, con `git --no-optional-locks` para no tocar el índice desde este entorno):**

```
$ git branch --show-current
feat/atlas-2-etapa-1-integrada
$ git rev-parse HEAD
e5cdecaf895026b207f42902274932aae31d9f92
$ git log -4 --oneline
e5cdeca Documenta dictamen académico de la corriente C8
0d1f9ac Documenta expediente de evidencia de la corriente C8
5a68fdc Corrige evidencia de la vía constitutiva de C7
ed01ece Documenta dictamen académico de la corriente C7
$ git --no-optional-locks status --short
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
$ git --no-optional-locks diff --stat HEAD
(sin salida)
$ git --no-optional-locks diff --name-only HEAD
(sin salida)
```

El HEAD coincide con el punto de partida confirmado. Los dos archivos no rastreados (`expediente-evidencia-c7.md`, `ficha-decision-c4.md`) son incidencias heredadas de etapas anteriores. No se añaden, no se borran, no se modifican, no se incluyen en el commit de C9.

---

## 1. Identidad documental de C9

Obtenida por lectura directa de `data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json` (HEAD) y de `data/agua-de-por-medio/atlas-2/documentos/etapa-1-arquitectura-integrada.md` (HEAD). No se presupone nada desde memoria.

| Campo | Valor |
|---|---|
| `n` | 9 |
| id interno (clave) | `memorias_espiritualidades_archivos_vivos` |
| `label` (catálogo vigente) | Archivos vivos, espiritualidades y saberes transmitidos |
| `label_en` (catálogo vigente) | Living archives, spiritualities and transmitted knowledges |
| `provisional` | `true` |
| Guion (párrafo) | «Contra el silenciamiento institucional, el archivo vivo. La corriente sigue las formas comunitarias e insurgentes de transmitir, conservar y producir saber: el monte y el tambor, pero también el archivo familiar, el contraarchivo, la colección material y la escritura que trabaja contra el silencio oficial. Su tensión: dar estatuto de fuente a estos repertorios obliga a revisar qué cuenta como prueba. El criterio no es el soporte, sino la forma de transmisión.» |
| Alcance intelectual | Antropología de la religión afroatlántica, estudios de oralidad, teoría y crítica del archivo, archivos comunitarios, estudios de performance, etnomusicología, escrituras contra el silenciamiento |
| Incluye | Archivos comunitarios; contraarchivos; archivos familiares; colecciones materiales; prácticas performativas; música y repertorios corporales; oralidad y testimonio con estatuto de fuente; espiritualidad y ritual como conocimiento; escrituras que funcionan contra el silenciamiento institucional |
| Criterio de ingreso | No es si el soporte es escrito o no escrito. Es si la obra estudia formas vivas, comunitarias o insurgentes de transmisión, conservación y producción de saber |
| No incluye | La marca `memoria` (transversal, salió del nombre por la regla de niveles); la revisión historiográfica que opera dentro de la institución académica sobre archivos oficiales sin trabajar formas vivas o comunitarias de transmisión |
| Corriente más próxima | C8 y C10. Con C8 comparte la lengua; con C10, el cuerpo como soporte de transmisión |
| Riesgo de solapamiento | El más alto de las diez corrientes. La etiqueta heredada de base (`memoria`) marca 93 entradas (40 % del corpus) y ninguna la lleva como etiqueta única (verificado en la sección 4) |
| Vía de constitución (declarada) | Migración del corpus heredado, con reparto obligado |
| Estado | Provisional; de las diez, la que más necesita ratificación explícita del nombre y del criterio de ingreso |

**[TENSIÓN DOCUMENTAL — no se resuelve aquí]** La denominación de C9 está en conflicto documental **desde antes de este expediente**, y ese conflicto ya fue registrado con evidencia cronológica exacta en `dictamen-academico-c1.md` (§9, «Pendiente independiente: la contradicción documental de C9»), remitido explícitamente al dictamen específico de C9. Se reproduce aquí, sin reabrirlo ni resolverlo, porque es la evidencia de identidad más importante que existe sobre esta corriente:

| # | Fuente | Identificador | Fecha y hora (UTC) | Denominación de C9 que contiene |
|---|---|---|---|---|
| 1 | `catalogos-atlas-2.json` | commit `619ad67` | 2026-08-08 04:52:33 | Memorias, espiritualidades y archivos vivos |
| 2 | `catalogos-atlas-2.json` | commit `99aec5b` | 2026-08-08 05:40:29 | Memorias, espiritualidades y archivos vivos |
| 3 | `catalogos-atlas-2.json` | commit `2343008` | 2026-08-08 11:44:42 | Memorias, espiritualidades y archivos vivos |
| 4 | `catalogos-atlas-2.json` | commit `d3b15a7` | 2026-08-10 15:16:52 | Espiritualidades, rituales y archivos vivos |
| 5 | `Plan_operativo_Atlas_2_Claude_7_etapas.docx` | metadatos internos, revisión 2 | 2026-08-11 10:00:00 | **Archivos vivos, espiritualidades y transmisión** |
| 6 | `catalogos-atlas-2.json` | commit `16fc252` (= HEAD actual del catálogo) | 2026-08-11 16:00:12 | **Archivos vivos, espiritualidades y saberes transmitidos** |

Este expediente verificó de forma independiente, releyendo directamente el objeto `corrientes.memorias_espiritualidades_archivos_vivos` en cada uno de los cinco commits que tocan `catalogos-atlas-2.json`, que las filas 1-4 y 6 de esa tabla son exactas: el catálogo pasó por **tres** redacciones distintas, no dos, y la del plan operativo (fila 5) **nunca apareció** en ningún commit de ese archivo. La fila 4 (`d3b15a7`, «Espiritualidades, rituales y archivos vivos») introduce además una palabra —«rituales»— que no estaba en la redacción anterior; no es una simple sustracción de «memorias». Sigue sin establecerse cuál de las dos formulaciones del 11 de agosto (fila 5 o fila 6) tiene autoridad sobre la denominación. Ninguna es, por sí sola, definitiva.

La propia `catalogos-atlas-2.json` contiene, en su campo `nota_renombramiento`, un relato de esta historia que **no coincide exactamente** con lo que git permite verificar: la nota describe un «primer ajuste intermedio ('Archivos vivos, espiritualidades y transmisión') que no llegó a publicarse» el 11 de agosto, mientras que la redacción intermedia que sí quedó publicada en git es la del 10 de agosto (`d3b15a7`, «Espiritualidades, rituales y archivos vivos», fila 4), que la nota no menciona con ese texto exacto. Ambas cosas pueden ser ciertas a la vez —la nota describe un borrador nunca comprometido, distinto del commit intermedio que sí existe—, pero el documento no lo aclara y esta ausencia de aclaración se registra como tensión, no se completa por inferencia.

---

## 2. Fuentes revisadas

Corpus (`datos-atlas.json`, versión 1.16.1, 232 obras / 588 relaciones), catálogo de corrientes (`catalogos-atlas-2.json`), catálogo de fenómenos (`catalogo-fenomenos.json`, 35 fenómenos), arquitectura integrada de la Etapa 1, `decisiones-pendientes.md`, `glosario-archipielico.md`, `esquema-datos-propuesto.json`, `fenomenos-ampliacion.md`, `incidencias-cerradas.md`, y los cuatro lotes obligatorios: piloto (P00, 10 registros), S01 (11 registros), A01 (18 registros), A02 (18 registros) — 57 registros heredados en total, todos con `config` y `generado` revisados. Se revisaron además, fuera de la lista mínima, dos lotes de otra capa que no clasifican por corriente y por eso no se cuentan como «procesados» en este expediente: F01 (muestra de prueba del catálogo de fenómenos, estado `propuesto`, no confirmado) y TP01 (temporalidad de publicación/periodo estudiado). Se consultaron los dictámenes académicos C1-C8 únicamente para cruces ya registrados, criterios ya ratificados y contradicciones documentales — no se reabrió ninguna de esas siete corrientes.

---

## 3. Historial Git de C9

### 3.1 Catálogo (`catalogos-atlas-2.json`)

`git log --follow` sobre el archivo devuelve exactamente cinco commits: `619ad67`, `99aec5b`, `2343008`, `d3b15a7`, `16fc252` (más reciente primero en la salida real; aquí en orden cronológico). El objeto de C9 se leyó con `git show <commit>:<ruta>` en los cinco:

| Commit | Fecha | `n` | `label` | `label_en` | `provisional` |
|---|---|---|---|---|---|
| `619ad67` | 2026-08-07 23:52 | 9 | Memorias, espiritualidades y archivos vivos | Memories, spiritualities and living archives | `true` |
| `99aec5b` | 2026-08-08 00:40 | 9 | Memorias, espiritualidades y archivos vivos | Memories, spiritualities and living archives | `true` |
| `2343008` | 2026-08-08 06:44 | 9 | Memorias, espiritualidades y archivos vivos | Memories, spiritualities and living archives | `true` |
| `d3b15a7` | 2026-08-10 10:16 | 9 | Espiritualidades, rituales y archivos vivos | Spiritualities, rituals and living archives | `true` |
| `16fc252` (= catálogo vigente) | 2026-08-11 11:00 | 9 | Archivos vivos, espiritualidades y saberes transmitidos | Living archives, spiritualities and transmitted knowledges | `true` |

No se puede afirmar «sin cambios» en ningún tramo: `n`, `provisional` y la clave se mantuvieron estables en las cinco versiones; `label` y `label_en` cambiaron dos veces (en `d3b15a7` y en `16fc252`).

### 3.2 Guion (`etapa-1-arquitectura-integrada.md`)

`git log --follow` sobre el archivo devuelve **un único commit**: `d951345` (2026-08-12 13:20), «Documenta arquitectura integrada de la Etapa 1 del Atlas 2.0». No existieron versiones anteriores comprometidas de este documento: nació ya con el guion de C9 en su redacción actual, posterior a las cinco versiones del catálogo. El propio documento menciona, en su `nota_renombramiento` (reproducida en la sección 1), una versión que él mismo declara no publicada — es exactamente el caso que este expediente debía buscar y no encontrar en git.

### 3.3 Candidaturas históricas (`git log --all -S` sobre el ID)

`git log --oneline --all -S "memorias_espiritualidades_archivos_vivos"` devuelve doce commits. Se inspeccionaron todos. Diez corresponden a documentos de dictamen o expediente de otras corrientes (C1, C2, C3, C4, C5, C6, C7, C8) que **mencionan** a C9 como corriente vecina, secundaria o de frontera — mera mención textual, no cambio del objeto de C9. Los dos commits que sí modifican el objeto de C9 en el catálogo (`d3b15a7`, `16fc252`) ya están cubiertos en la tabla 3.1. No se detectó ningún artefacto de renombrado espurio (falso positivo de detección de movimiento de Git): las cinco versiones del catálogo son ediciones directas del mismo archivo, no resultado de mover contenido entre archivos.

La única candidatura histórica de C9 verificable por Git con cambio de estado es **`chande`**: en el lote piloto, candidata doble a C8 y C9 en el commit `619ad67`, resuelta en el mismo par de commits (`619ad67` → `99aec5b`, ambos del 8 de agosto) a **C9 principal / C8 secundaria**, sin volver a cambiar desde entonces — dato ya ratificado en `dictamen-academico-c8.md` §6 y verificado aquí de forma independiente contra el propio `piloto-generado.json`.

Dos entradas adicionales, **`price`** y **`totumo`**, tuvieron candidatura doble C3/C9 (`pendiente_revision_con_texto` en `619ad67`, `piloto-config.json` y `piloto-generado.json`, según lo ya documentado en `dictamen-academico-c3.md` §7.6). Ese dictamen no llegó a resolver esas dos candidaturas dentro de C3; este expediente verificó contra los lotes vigentes (S01) que ambas terminaron con `corriente_confirmada: "fugas_cimarronajes_emancipaciones"` (C3), sin ningún rol en C9. Se registran como **candidaturas históricas resueltas hacia otra corriente**, no hacia C9.

---

## 4. Vía constitutiva, contrastada empíricamente

El guion declara la vía como «migración del corpus heredado, con reparto obligado» — sin nombrar, a diferencia de otras corrientes, una etiqueta heredada única con su porcentaje. La razón queda demostrada por los datos: la etiqueta heredada de base es `memoria` (93 de 232 obras del corpus, 40,1 %), **pero ninguna de esas 93 la lleva como etiqueta única** — verificado leyendo el campo `f` de las 232 entradas del corpus; el resultado (cero) se confirmó por dos métodos independientes (filtro directo y recuento por comprensión de lista sobre la misma estructura, con resultado idéntico).

De las 93 obras con `memoria` en `f`, solo **7 pasaron por algún lote** (piloto/S01/A01/A02): `chande`, `brathwaite`, `manoalzada`, `price`, `totumo`, `londonoargonauts`, `keeganhofman`. De esas 7:

- **2 quedaron C9 principal:** `chande`, `manoalzada`.
- **1 quedó C9 secundaria:** `brathwaite`.
- **4 quedaron fuera de C9:** `price` y `totumo` (→ C3), `londonoargonauts` (→ C5), `keeganhofman` (→ C1).

En sentido inverso — de las 11 obras procesadas con algún rol confirmado en C9 (4 principal + 7 secundaria, sección 5) — **solo 3 llevan `memoria` en su `f` heredado** (`chande`, `brathwaite`, `manoalzada`). Las otras 8 llegaron sin esa etiqueta, con `f` heredado de `cuerpo_erotica`, `violencias`, `postplantacion`, `catastrofes`, `soberanias` o `capitalismo_racial`: `gill` (`cuerpo_erotica`), `fuentesdispossessed` (`violencias`, `cuerpo_erotica`), `belisodelirium` (`violencias`, `cuerpo_erotica`), `handlerlangebarbados` (`postplantacion`, `violencias`), `politicallife` (`postplantacion`, `violencias`), `brownreaper` (`catastrofes`, `violencias`), `benedictykokken_haitiexception` (`soberanias`, `capitalismo_racial`), `hazareesingh` (`soberanias`, `violencias`).

**Regla aplicada, siguiendo la instrucción de no confundir estas dos comprobaciones:** «incluye literalmente `migración` en `proceso`» y «lleva la etiqueta heredada asociada a C9» son verificaciones distintas. Sobre el campo `proceso` de las 11 confirmaciones: **5 incluyen `migración` literalmente y 6 no** (`chande`, `manoalzada` y `brownreaper` no la incluyen — su proceso registrado es «corrección bibliográfica» y/o «reclasificación» sin la palabra «migración»; el resto sí la incluye).

**Conclusión empírica, sin fijar principio:** la vía declarada («migración del corpus heredado, con reparto obligado») es coherente con la evidencia en el sentido débil de que todas las confirmaciones proceden del corpus heredado (`procedencia: "corpus heredado"` en las 11), pero el mecanismo real de reclutamiento de C9 **no pasa mayoritariamente por la etiqueta `memoria`**: dos tercios de sus confirmaciones (8 de 11) llegan por reclasificación desde otras etiquetas heredadas. Esto es exactamente el «reparto obligado» que el guion anticipa, cuantificado aquí por primera vez.

---

## 5. Clasificaciones existentes

Reconstruidas leyendo los cuatro lotes obligatorios completos (57 entradas) y filtrando por `corriente_confirmada == C9` o `C9 ∈ corrientes_secundarias`. Ninguna entrada tiene a C9 a nivel de componente (`obras_componentes[].corriente`): la única entrada con componentes, `mintz`, está `pendiente_revision_con_texto` en ambos componentes, sin corriente asignada a ninguno.

### 5.1 C9 principal (4)

| Lote | id | Título | Secundarias | Fundamento |
|---|---|---|---|---|
| piloto | `chande` | Un silencio que habla: las sonoridades narradas del Chandé en el Caribe seco colombiano | C8 | El texto comprende el Chandé como pensamiento, saber y memoria mediante diálogo comunitario y respeto por el silencio de sabedoras y sabedores |
| S01 | `manoalzada` | A mano alzada: diáspora intelectual afrocolombiana | C5 (rutas/diásporas) | La obra se presenta como memoria escrita de una tradición intelectual afrodiaspórica; la diáspora organiza su circulación y queda como secundaria |
| A01 | `fuentesdispossessed` | Dispossessed Lives: Enslaved Women, Violence, and the Archive | C2, C10 | La crítica de la forma y violencia del archivo organiza la producción de conocimiento; esclavización y cuerpos de mujeres son campos sustantivos secundarios |
| A02 | `brownreaper` | The Reaper's Garden: Death and Power in the World of Atlantic Slavery | C2 | La muerte, los rituales mortuorios y la política espiritual organizan el argumento; esclavización y plantación constituyen la arquitectura secundaria |

### 5.2 C9 secundaria (7)

| Lote | id | Principal | Fundamento (fragmento) |
|---|---|---|---|
| S01 | `brathwaite` | C8 (creolizaciones) | Nation language pertenece a History of the Voice; tidalectics queda pendiente de ficha propia |
| A01 | `gill` | C10 (cuerpos/eróticas) | Arte, espiritualidad y memoria queer amplían la corriente sin desplazarla |
| A01 | `belisodelirium` | C10 (cuerpos/eróticas) | La conexión caribeña es diaspórica y religiosa, no territorial |
| A02 | `handlerlangebarbados` | C2 (trata/esclavización) | Memoria, entierro y archivo material sostienen una secundaria C9 |
| A02 | `politicallife` | C4 (postplantación) | Soberanía y memoria de la incursión son secundarias sustantivas |
| A02 | `benedictykokken_haitiexception` | C8 (creolizaciones) | Corregir título a *The Haiti Exception: Anthropology and the Predicament of Narrative* |
| A02 | `hazareesingh` | C3 (fugas/cimarronajes) | Soberanía y memoria política funcionan como secundarias |

### 5.3 Recuento, por dos métodos

**Método 1 (filtro directo sobre los 57 registros):** principales = 4; secundarias = 7; total con algún rol = 11.
**Método 2 (recuento independiente, iterando obra por obra y comprobando membresía en conjuntos separados de ids):** idéntico — 4 / 7 / 11.

Candidaturas activas hoy (`corrientes_candidatas` apuntando a C9): **0**. Se revisaron las tres entradas de los cuatro lotes que no llegaron a `estado: "confirmada"` (`mintz` y `stewardpuertorico` en piloto, `gudynas` en A02); ninguna declara a C9 como candidata.

---

## 6. Candidaturas — sección propia

- **Activas hoy:** ninguna.
- **Históricas (demostradas por Git):** `chande` (C8/C9, resuelta a C9 principal); `price` y `totumo` (C3/C9, resueltas a C3, fuera de C9).
- **Resueltas como principal:** `chande`.
- **Resueltas como secundaria:** ninguna candidatura *doble* se resolvió hacia C9 secundaria; las 7 secundarias de la sección 5.2 nunca fueron candidatura doble registrada en piloto — llegaron directamente clasificadas en S01/A01/A02, lotes donde el esquema ya no usa el campo `corrientes_candidatas` de la misma manera que el piloto.
- **Descartadas:** ninguna, en el sentido estricto que exige evidencia histórica de descarte explícito. No se llama candidatura a coincidencia léxica, etiqueta heredada, ancla de fenómeno ni fenómeno compatible — esas son las secciones 4, 7 y 9, y se mantienen separadas de esta.

---

## 7. Señales léxicas y conceptuales

Términos extraídos literalmente del guion de C9 (párrafo, alcance, incluye, criterio de ingreso), buscados en los campos `t` y `ap` de las 232 obras del corpus, con dos implementaciones independientes: (1) coincidencia de subcadena simple; (2) tokenización por palabra completa con `\b` para términos de una sola palabra, y coincidencia de subcadena para términos compuestos. Donde las dos difirieron, se leyó el pasaje completo antes de decidir.

| Término | Occurrencias verificadas | ids |
|---|---:|---|
| «archivo vivo» | 1 | `zonabananera` |
| «performance» | 3 | `hagedorn`, `sonicbodies`, `wirtzperforming` |
| «ritual» / «rituales» (palabra completa) | 7 | `gomezexperiential`, `lizcanocarnaval`, `palmiengangas`, `tambu`, `travelstooy`, `wirtzperforming`, `womenancestors` |
| «silencio» | 1 | `trouillotsilencing` |
| «tambor» | 2 | `hagedorn`, `schweitzerbata` |
| «monte» | 2 | `cabrera`, `millerbassey` |
| «testimonio»/«testimonios» | 4 | `munrohaitirising`, `politicallife`, `prestolmasacre`, `chicamusicaafricana` |
| «oralidad» | 1 | `vete` |

**Unión de señales léxicas genuinas (E):** 19 ids únicos (algunas obras responden a más de un término).

### 7.1 Falsos positivos verificados (excluidos de la tabla anterior)

Leyendo los pasajes completos:

- **«ritual» dentro de «espiritual»/«espiritualidad»:** el método de subcadena simple capturó `gill`, `castorspiritual` y `ramadan` porque sus resúmenes contienen «espiritual» — no la palabra «ritual». Ejemplo: `castorspiritual` — «ciudadanía **espiritual**» no contiene la palabra «ritual» como unidad. **Falso positivo verificado**, corregido con límite de palabra.
- **«oralidad» dentro de «temporalidad»:** el método de subcadena simple capturó `brathwaite` porque su resumen dice «la marea como **temporalidad**» — la cadena «oralidad» está efectivamente contenida ahí, pero no como palabra. **Falso positivo verificado**, mismo mecanismo que el anterior.

### 7.2 Variante morfológica aceptada, no descartada

`chicamusicaafricana` («construida sobre **testimonios** de administradores») solo aparece con el método de subcadena porque el método de tokenización exacta exige la forma singular. Se registra como variante razonable (plural de la misma palabra) y se conserva en la tabla, siguiendo el mandato de la instrucción de admitir «variantes razonables» junto a los límites de palabra.

### 7.3 Ambiguas

Ninguna de las coincidencias leídas quedó en una zona genuinamente ambigua entre sentido ordinario y sentido conceptual del guion; los dos falsos positivos de 7.1 eran claramente erróneos por el mecanismo de subcadena, no dudas de lectura. No se fuerza, por tanto, ninguna entrada a esta categoría solo para completarla.

---

## 8. Fronteras

Reconstruidas cruzando los 11 casos de la sección 5 con lo ya fijado en los dictámenes C1-C8 (antecedente, no ratificación nueva).

| Frontera | Casos | Antecedente en dictamen anterior | Estatuto |
|---|---|---|---|
| C2/C9 | `fuentesdispossessed` (C9 principal, C2 secundaria); `brownreaper` (C9 principal, C2 secundaria); `handlerlangebarbados` (C2 principal, C9 secundaria) | Fijada en `dictamen-academico-c2.md` §7.3: «Una obra entra principalmente en C9 cuando su argumento central es el archivo, el silencio, la muerte, la espiritualidad o la transmisión. C2 puede permanecer como secundaria cuando el mundo esclavista estructura ese problema» | **Antecedente existente. No se reabre ni se ratifica de nuevo aquí** |
| C3/C9 | Histórico: `price`, `totumo` (candidatura doble resuelta a C3). Sin leer todavía: `chevannes`, `travelstooy`, `pricefirst` (etiqueta `cimarronaje`, podrían leerse como C9) | Fijada en `dictamen-academico-c3.md` §7.6: «Decide el argumento, no el sujeto» | **Antecedente existente.** Este expediente verificó que las tres entradas señaladas como pendientes de lectura en el dictamen de C3 (`chevannes`, `travelstooy`, `pricefirst`) **siguen sin procesar** — las tres aparecen en el universo exploratorio de la sección 10 |
| C4/C9 | `politicallife` (C4 principal, C7 y C9 secundarias) | Mencionada en `dictamen-academico-c4.md` sin fijar criterio propio | Sin criterio fijado específico para esta frontera; se documenta el único caso |
| C5/C9 | `manoalzada` (C9 principal, C5 secundaria) | Mencionada en `dictamen-academico-c5.md` | Sin criterio fijado específico; un solo caso |
| C6/C9 | `brownreaper` (procesó como candidatura hacia C6, excluida; terminó C9 principal / C2 secundaria, sin ningún rol en C6) | Fijada en `dictamen-academico-c6.md` §5: la etiqueta heredada `catástrofes` no clasifica automáticamente | **Antecedente existente.** No se reabre |
| C7/C9 | Nunca binaria. C9 aparece como acompañante en 4 de los 9 casos donde C7 cruza una tercera corriente: `belisodelirium`, `politicallife`, `benedictykokken_haitiexception`, `hazareesingh` | Fijada en `dictamen-academico-c7.md` §8: «C9 nunca aparece como principal ni como secundaria única frente a C7» | **Antecedente existente, verificado de nuevo aquí de forma independiente y coincide exactamente.** No se reabre |
| C8/C9 | `brathwaite` (C8 principal/C9 secundaria); `benedictykokken_haitiexception` (C8 principal/C9 y C7 secundarias); `chande` (C9 principal/C8 secundaria) | **Criterio ratificado** en `dictamen-academico-c8.md` §8: «C8 trabaja aquello que se produce o transforma en el encuentro […]; C9 trabaja aquello que se transmite, conserva, recuerda, ritualiza o archiva. La corriente principal la determina el principio organizador del argumento» | **Antecedente existente y ratificado. No se reabre ni se reformula** |
| C9/C10 | `gill` (C10 principal, C9 secundaria); `belisodelirium` (C10 principal, C9 secundaria); `fuentesdispossessed` (C9 principal, C10 secundaria) | Sin dictamen propio todavía (C10 no ha tenido su dictamen) | **Sin antecedente ratificado.** Se documentan los tres casos disponibles sin fijar criterio |

---

## 9. Casos triples

Entradas con una corriente principal y **dos** secundarias, donde C9 es una de las tres corrientes involucradas.

| id | Principal | Secundaria 1 | Secundaria 2 | Qué aporta cada relación |
|---|---|---|---|---|
| `fuentesdispossessed` | **C9** | C2 (trata/esclavización) | C10 (cuerpos/eróticas) | C9 como principal: el archivo y su violencia organizan el argumento; C2 y C10 registran, sin desplazar a C9, que el objeto de ese archivo son mujeres esclavizadas |
| `belisodelirium` | C10 | C7 (soberanías/fronteras) | **C9** | El cuerpo racializado como diagnóstico organiza el libro; la violencia estatal (C7) y la dimensión diaspórica/religiosa (C9) son dos secundarias independientes entre sí |
| `politicallife` | C4 | C7 | **C9** | La incursión militar de 2010 como presente de la plantación; soberanía suspendida (C7) y memoria/testimonio de la incursión (C9) son las dos dimensiones secundarias |
| `benedictykokken_haitiexception` | C8 | C7 | **C9** | La narrativa antropológica sobre Haití como objeto central; soberanía (C7) y memoria/archivo (C9) acompañan sin desplazar el argumento sobre representación |
| `hazareesingh` | C3 | C7 | **C9** | La biografía de Toussaint Louverture como eje; soberanía (C7) y memoria política (C9) son secundarias |

No se cuenta ninguna de estas cinco entradas dos veces en los totales de la sección 5 (cada una aporta una sola fila de «principal» o «secundaria», según corresponda a C9). El método es el mismo recuento de la sección 5.3, aplicado sin reducir artificialmente estas cinco entradas a una sola frontera binaria.

**Patrón verificado, no convertido en regla:** en las cuatro entradas donde C9 es una de dos secundarias (todas menos `fuentesdispossessed`), la otra secundaria es siempre C7 (soberanías/fronteras/ocupaciones). Esto coincide exactamente con lo que `dictamen-academico-c7.md` §8 ya había registrado desde el lado de C7. No se deriva de esta coincidencia ninguna regla de asociación C7-C9; se documenta como lo que es, un patrón de cuatro casos.

---

## 10. Fenómenos compatibles

Sobre `catalogo-fenomenos.json` (35 fenómenos), se filtraron los que declaran `"corrientes"` incluyendo `memorias_espiritualidades_archivos_vivos`.

**11 de 35 fenómenos son compatibles con C9:** `silencio_de_archivo` (5 anclas), `oralidad_como_archivo` (5), `revision_historiografica` (4), `ritual_como_conocimiento` (4), `religion_afroatlantica` (6), `sonido_y_escucha` (4), `enfermedad_y_biopolitica` (2), `narrativa_del_desastre` (2), `filosofia_afrocaribena` (4), `parentesco_y_organizacion_domestica` (4), `diaspora_y_hogar_disperso` (4).

- **Anclas totales (con repetición entre fenómenos):** 44. **Anclas únicas:** 42.
- **Exclusivo de C9** (su lista `"corrientes"` contiene únicamente a C9, ningún otro corriente): **`religion_afroatlantica`** — 1 de 11.
- **Compartidos con otras corrientes:** los 10 restantes.
- **Procesadas (la ancla pasó por algún lote):** 2 — `chande`, `monahan`.
- **Vírgenes (no procesadas):** 40.

**[TENSIÓN DOCUMENTAL — no se resuelve aquí]** `revision_historiografica` figura entre los fenómenos compatibles con C9 en `catalogo-fenomenos.json` (`"corrientes": ["memorias_espiritualidades_archivos_vivos", "soberanias_fronteras_ocupaciones"]`), pero el guion de C9 en `etapa-1-arquitectura-integrada.md` excluye explícitamente «la revisión historiográfica que opera dentro de la institución académica sobre archivos oficiales sin trabajar formas vivas o comunitarias de transmisión» de su campo «No incluye». Las dos capas —catálogo de fenómenos (aditiva, `estado: "borrador"` según su propia cabecera) y guion de corrientes— no coinciden en este punto. No se reconcilia por iniciativa propia; se deja consignado para que la Dirección Académica decida cuál prevalece, o si ambas pueden convivir bajo una lectura más fina del criterio.

No se convierte compatibilidad de fenómeno en candidatura de corriente en ningún punto de esta sección.

---

## 11. Universo exploratorio

Fórmula propia para C9, con tres conjuntos realmente sustentados por el repositorio (se excluyeron `candidaturas verificadas` y `clasificaciones existentes` de la fórmula de universo *no procesado*, porque por definición ya están procesadas; se usan como cruce, no como insumo del universo):

- **A** = etiqueta heredada `memoria` en el corpus → 93 obras
- **B** = anclas únicas de los 11 fenómenos compatibles con C9 (sección 10) → 42 obras
- **E** = señales léxicas genuinas verificadas (sección 7, excluidos los falsos positivos) → 19 obras

| Conjunto | Tamaño |
|---|---:|
| A (etiqueta heredada `memoria`) | 93 |
| B (anclas de fenómenos compatibles) | 42 |
| E (señales léxicas genuinas) | 19 |
| A ∩ B | 34 |
| A ∩ E | 18 |
| B ∩ E | 13 |
| A ∩ B ∩ E | 13 |
| **A ∪ B ∪ E (unión)** | **102** |
| — de la unión, ya procesadas (algún lote) | 9 |
| — de la unión, **no procesadas** | **93** |

**Reproducción por dos métodos independientes:** (1) construcción por operaciones de conjuntos en Python sobre listas de ids; (2) iteración obra por obra del corpus completo comprobando pertenencia a A, B o E de forma independiente. Los dos métodos coinciden exactamente: 102 en la unión, mismos 102 ids.

De las 9 entradas de la unión ya procesadas, 6 tienen algún rol confirmado en C9 (`chande`, `manoalzada`, `brathwaite`, `politicallife` — más `price` y `totumo`, resueltas hacia C3, y `keeganhofman`, `londonoargonauts`, `monahan`, sin rol en C9). Esto confirma que la fórmula A∪B∪E captura razonablemente bien el universo de interés de C9 sin ser idéntica a sus clasificaciones reales.

---

## 12. Listado completo del universo no procesado (93 entradas)

Para cada entrada: id, título, territorio (`l` heredado). Donde falta un dato, se indica «[falta]» en vez de inferirlo.

| id | Título | Territorio |
|---|---|---|
| `alexander` | Pedagogies of Crossing: Feminism, Sexual Politics, Memory, and the Sacred | trinidad |
| `allen_dikimanera` | Di ki manera? A Social History of Afro-Curaçaoans, 1863-1917 | curazao |
| `allenvenceremos` | ¡Venceremos? The Erotics of Black Self-Making in Cuba | cuba |
| `almanzaorilla` | La orilla de Calibán: el rastro de la filosofía afrocaribe en el siglo XX | santamarta |
| `andersonblackindigenous` | Black and Indigenous: Garifuna Activism and Consumer Culture in Honduras | belize |
| `araujo` | Reparations for Slavery and the Slave Trade: A Transnational and Comparative History | haiti |
| `archipelagicthinking` | Contemporary Archipelagic Thinking: Towards New Comparative Methodologies and Disciplinary Formations | puertorico |
| `atkinsonearliest` | The Earliest Inhabitants: The Dynamics of the Jamaican Taíno | jamaica |
| `austinfearblack` | Fear of a Black Nation: Race, Sex, and Security in Sixties Montreal | trinidad |
| `barrowfamily` | Family in the Caribbean: Themes and Perspectives | barbados |
| `bebelgislerleonora` | Léonora: The Buried Story of Guadeloupe | guadalupe |
| `becklessavingsouls` | Saving Souls: The Struggle to End the Transatlantic Trade in Africans | barbados |
| `branddoor` | A Map to the Door of No Return: Notes to Belonging | trinidad |
| `cabrera` | El Monte | cuba |
| `callaloonation` | Callaloo Nation: Metaphors of Race and Religious Identity among South Asians in Trinidad | trinidad |
| `caribjourneys` | Caribbean Journeys: An Ethnography of Migration and Home in Three Family Networks | nevis |
| `castorspiritual` | Spiritual Citizenship: Transnational Pathways from Black Power to Ifá in Trinidad | trinidad |
| `chevannes` | Rastafari: Roots and Ideology | jamaica |
| `chicamusicaafricana` | ¿Dónde hay música africana? Cultura picotera y Festival Internacional de Música del Caribe en Cartagena | cartagena |
| `chocolatecorn` | Chocolate and Corn Flour: History, Race, and Place in the Making of Black Mexico | costachica |
| `clarkemymother` | My Mother Who Fathered Me: A Study of the Families in Three Selected Communities of Jamaica | jamaica |
| `corinealdipanama` | Panama in Black: Afro-Caribbean World Making in the Twentieth Century | panama |
| `cosgrovegarifuna` | Surviving the Americas: Garifuna Persistence from Nicaragua to New York City | bluefields |
| `creolenieworleans` | Creole New Orleans: Race and Americanization | nola |
| `cuijla` | Cuijla: Esbozo etnográfico de un pueblo negro | costachica |
| `dubuissonhaiti` | Reclaiming Haiti's Futures | haiti |
| `dunham` | Island Possessed | haiti |
| `escalante` | El Palenque de San Basilio | palenque |
| `felicianosantos` | A Contested Caribbean Indigeneity: Language, Social Practice, and Native Puerto Rican Identity | puertorico |
| `firmin` | De la igualdad de las razas humanas (The Equality of the Human Races) | haiti |
| `fischer` | Modernity Disavowed: Haiti and the Cultures of Slavery in the Age of Revolution | haiti |
| `garciapenaborders` | The Borders of Dominicanidad: Race, Nation, and Archives of Contradiction | dominicana |
| `goldbergabolition` | Abolition Time: Grammars of Law, Poetics of Justice | guyana |
| `gomezexperiential` | The Experiential Caribbean: Creating Knowledge and Healing in the Early Modern Atlantic | cartagena |
| `gonzalezsojourners` | Sojourners of the Caribbean: Ethnogenesis and Ethnohistory of the Garifuna | belize |
| `hagedorn` | Divine Utterances: The Performance of Afro-Cuban Santería | cuba |
| `headleyreparaciones` | A Philosophical Investigation into the Possibility/Impossibility of Reparations for Caribbean Slavery | haiti |
| `henrycaliban` | Caliban's Reason: Introducing Afro-Caribbean Philosophy | antigua |
| `hurboncomprendre` | Comprendre Haïti: essai sur l'État, la nation, la culture | haiti |
| `james_bannerethiopia` | Holding Aloft the Banner of Ethiopia: Caribbean Radicalism in Early Twentieth-Century America | jamaica |
| `lassoerased` | Erased: The Untold Story of the Panama Canal | panama |
| `lizcanocarnaval` | Leyendo el carnaval: miradas desde Barranquilla, Bahía y Barcelona | barranquilla |
| `mamalola` | Mama Lola: A Vodou Priestess in Brooklyn | haiti |
| `martinezsanmiguel` | Coloniality of Diasporas: Rethinking Intra-Colonial Migrations in a Pan Caribbean Context | puertorico |
| `mcneillmosquito` | Mosquito Empires: Ecology and War in the Greater Caribbean, 1620-1914 | cartagena |
| `meeks_postcolonial` | After the Postcolonial Caribbean: Memory, Imagination, Hope | jamaica |
| `mendozaraices` | Raíces, Resistencias y Territorios: 500 años de experiencia Afro en Santa Marta | santamarta |
| `millerbassey` | Voice of the Leopard: African Secret Societies and Cuba | cuba |
| `mintzpricebirth` | The Birth of African-American Culture: An Anthropological Perspective | suriname |
| `muneraelfracaso` | El fracaso de la nación: región, clase y raza en el Caribe colombiano (1717-1821) | cartagena |
| `munrohaitirising` | Haiti Rising: Haitian History, Culture and the Earthquake of 2010 | haiti |
| `olsencartagena` | Slavery and Salvation in Colonial Cartagena de Indias | cartagena |
| `olwigstjohn` | Cultural Adaptation and Resistance on St. John | stjohn |
| `palmiengangas` | Thinking with Ngangas | cuba |
| `palmiewizards` | Wizards and Scientists | cuba |
| `pardomosquerahoffmann` | Afrodescendientes en las Américas: trayectorias sociales e identitarias | cartagena |
| `prestolmasacre` | El Masacre se pasa a pie (You Can Cross the Massacre on Foot) | dominicana |
| `pricefirst` | First-Time: The Historical Vision of an Afro-American People | suriname |
| `pricemars` | Ainsi parla l'oncle | haiti |
| `puriradical` | The Legacies of Caribbean Radical Politics | trinidad |
| `quinnblackpower` | Black Power in the Caribbean | trinidad |
| `ramadan` | Constructing Spiritual Blackness: Rastafari in Puerto Rico | puertorico |
| `rappaportcobarde` | El cobarde no hace historia: Orlando Fals Borda y los inicios de la investigación-acción participativa | cartagena |
| `rebeldestiny` | Rebel Destiny: Among the Bush Negroes of Dutch Guiana | suriname |
| `rediker` | Barco de esclavos: una historia humana | jamaica |
| `reysinningcristorey` | Cristo Rey, un espacio para permanecer en el tiempo | santamarta |
| `rifkinfictions` | Fictions of Land and Flesh: Blackness, Indigeneity, Speculation | jamaica |
| `rtsmithmatrifocal` | The Matrifocal Family: Power, Pluralism and Politics | guyana |
| `russwurm` | The Struggles of John Brown Russwurm | jamaica |
| `scher` | Carnival and the Formation of a Caribbean Transnation | trinidad |
| `schweitzerbata` | The Artistry of Afro-Cuban Batá Drumming: Aesthetics, Transmission, and Bonding | cuba |
| `scottconscripts` | Conscripts of Modernity: The Tragedy of Colonial Enlightenment | haiti |
| `sharpewake` | In the Wake: On Blackness and Being | barbados |
| `sonicbodies` | Sonic Bodies: Reggae Sound Systems, Performance Techniques, and Ways of Knowing | jamaica |
| `tambu` | Tambú: Curaçao's African-Caribbean Ritual | curazao |
| `taylor` | Nation Dance: Religion, Identity, and Cultural Difference in the Caribbean | trinidad |
| `tellmyhorse` | Tell My Horse: Voodoo and Life in Haiti and Jamaica | haiti |
| `tinsley` | Ezili's Mirrors: Imagining Black Queer Genders | haiti |
| `travelstooy` | Travels with Tooy: History, Memory, and the African American Imagination | suriname |
| `trouillot` | The Caribbean Region: An Open Frontier | haiti |
| `trouillotsilencing` | Silenciando el pasado: el poder y la producción de la Historia | haiti |
| `trouillottransformaciones` | Transformaciones globales: la antropología y el mundo moderno | haiti |
| `truebornmaroons` | True-Born Maroons | jamaica |
| `ulysseWhyHaiti` | Why Haiti Needs New Narratives: A Post-Quake Chronicle | haiti |
| `vete` | The Caribbean Oral Tradition | guadalupe |
| `whiteheadtiger` | Lords of the Tiger Spirit: A History of the Caribs in Colonial Venezuela and Guyana, 1498–1820 | guyana |
| `wirtzperforming` | Performing Afro-Cuba: Image, Voice, Spectacle in the Making of Race and History | cuba |
| `womenancestors` | Women and the Ancestors: Black Carib Kinship and Ritual | belize |
| `wynterblackmetamorphosis` | Black Metamorphosis: New Natives in a New World | jamaica |
| `yountaesecular` | The Coloniality of the Secular: Race, Religion, and Poetics of World-Making | martinica |
| `zapataarbol` | El árbol brujo de la libertad | cartagena |
| `zips_nannysasafo` | Nanny's Asafo Warriors: The Jamaican Maroons' African Experience | jamaica |
| `zonabananera` | Las geografías negras en la Zona Bananera | santamarta |

Tres de estas 93 entradas ya estaban señaladas nominalmente en `dictamen-academico-c3.md` §7.6 como pendientes de lectura para la frontera C3/C9: `chevannes`, `travelstooy`, `pricefirst`. Siguen, verificado aquí, sin procesar.

---

## 13. Territorio

Tres distribuciones, sin mezclar.

### A. C9 confirmadas (11 entradas, principal + secundaria)

santamarta (1), cartagena (1), barbados (2), jamaica (2), trinidad (1), cuba (1), haiti (2), sin dato adicional: la entrada restante ya contada. Detalle: `chande`→santamarta, `manoalzada`→cartagena, `fuentesdispossessed`→barbados, `brownreaper`→jamaica, `brathwaite`→barbados, `gill`→trinidad, `belisodelirium`→cuba, `handlerlangebarbados`→barbados, `politicallife`→jamaica, `benedictykokken_haitiexception`→haiti, `hazareesingh`→haiti.

### B. Universo exploratorio sin lote (93 entradas, sección 12)

Territorio dominante: Haití (18 entradas), seguido de Cuba (7), Jamaica (9), Trinidad (8), Cartagena/Santa Marta —Caribe colombiano continental— (9 combinadas), Surinam (4), Guyana (3), Curazao (2), Guadalupe (2), Puerto Rico (3), Barbados (3), el resto disperso en una entrada por lugar.

### C. Anclas de fenómeno (42, sección 10)

No se recalculó una distribución territorial separada para las anclas por no duplicar el trabajo de B: 34 de las 42 anclas ya están contenidas en el universo exploratorio de la sección 12 (A∩B de la sección 11), y comparten, por tanto, esa misma distribución.

No se declara sesgo, representatividad, vacío ni prioridad a partir de estas tres distribuciones. Se describen, nada más.

---

## 14. Lenguas

Para las 11 entradas procesadas con rol en C9, `lenguas_publicacion` (poblado por el lote, no por `tr` heredado):

| id | `lenguas_publicacion` | `tr` heredado (no confundir con lo anterior) |
|---|---|---|
| `chande` | **sin confirmar** (solo `lenguas_publicacion_candidatas: ["español"]`) | hispano (Colombia) |
| `manoalzada` | `["español"]` | hispano (Colombia) |
| `fuentesdispossessed` | `["inglés"]` | anglófono (EE.UU.) |
| `brownreaper` | `["inglés"]` | anglófono (EE.UU.) |
| `brathwaite` | `["inglés"]` | anglófono (Barbados) |
| `gill` | `["inglés"]` | anglófono (Trinidad/EE.UU.) |
| `belisodelirium` | `["inglés"]` | anglófono (EE.UU.) |
| `handlerlangebarbados` | `["inglés"]` | anglófono (EE.UU.) |
| `politicallife` | `["inglés"]` | anglófono (Jamaica/EE.UU.) |
| `benedictykokken_haitiexception` | `["inglés"]` | francófono (Haití) / anglófono |
| `hazareesingh` | `["inglés"]` | comparado (Mauricio/Reino Unido) |

`chande` —una de las cuatro clasificaciones principales de C9— es la única de las 11 sin `lenguas_publicacion` confirmado. Para las 93 entradas del universo exploratorio sin lote (sección 12), **no existe `lenguas_publicacion`** en ninguna; solo tienen `tr` heredado. Siguiendo la instrucción expresa: **`tr` no equivale a `lenguas_publicacion`**, y no se completa el dato lingüístico de esas 93 entradas por inferencia a partir de `tr`.

---

## 15. Elegibilidad territorial

Se buscó `elegibilidad_atlas` en los cuatro lotes obligatorios. Aparece **una sola vez** en todo el corpus de lotes: en A01/A02, sobre `gudynas` (*Extractivismos*), con `"estado": "bloqueada_por_alcance"` — «pertinente para ecología política, pero la fuente consultada no demuestra un caso u orilla admisible del Atlas». Esta entrada **no tiene ninguna relación con C9**: su `f` heredado es `capitalismo_racial`/`catastrofes`, no aparece en ninguna de las secciones 4-12 de este expediente, y su candidatura (hacia C6, no C9) fue excluida por decisión académica según ya documenta `dictamen-academico-c6.md`.

**No existe ningún caso C9 bloqueado o dudoso por alcance territorial.**

---

## 16. Identidades bibliográficas dudosas

Aplicando la lección ya fijada por `esquiva` y `chande` en `dictamen-academico-c8.md` §6, verificado aquí directamente contra Git (no se repite de memoria lo que dice el dictamen anterior: se comprobó de nuevo con `git show`).

**El commit `dcf762f`** (2026-08-11 11:02:05 -05:00, «Sincroniza corpus público del Atlas 1.16.1») declara, en su propio mensaje y en `meta.nota_version` del corpus, que **tres** entradas —no solo dos— quedaron con `procedencia: "manifestación"` y `procedencia_verificada: false`: **`chande`, `manoalzada` y `esquiva`**. Dos de esas tres, `chande` y `manoalzada`, son exactamente dos de las cuatro clasificaciones principales de C9 (sección 5.1).

Estado verificado en `datos-atlas.json` (HEAD, commit `dcf762f`):

| id | `k` | `a` | `y` | `procedencia` | `procedencia_verificada` |
|---|---|---|---|---|---|
| `chande` | `manifestacion` | «borrador / archivo» | `""` | manifestación | `false` |
| `manoalzada` | `manifestacion` | «archivo» | `"2013"` | manifestación | `false` |
| `esquiva` | `manifestacion` | «archivo» | `""` | manifestación | `false` |

Frente a esto, los lotes atlas-2 (capa cerrada, aprobada por la Dirección Académica, `modifica_corpus_publico: false`) **sí registran una corrección bibliográfica completa con autoría real**, tres días antes:

| id | Lote / commit | `correcciones_aprobadas` |
|---|---|---|
| `chande` | piloto, commit `99aec5b` (2026-08-08) | autor: Ernell Villa y Wilmer Villa; título: *Un silencio que habla: Las sonoridades narradas del Chandé en el Caribe seco colombiano*; año: 2016; DOI: `10.15648/cl.24.2016.6`; `k: "obra"` |
| `manoalzada` | S01, commit `2343008` (2026-08-08) | autor: José Antonio Caicedo Ortiz; título: *A mano alzada: memoria escrita de la diáspora intelectual afrocolombiana*; año: 2013; `k: "obra"` |
| `esquiva` | S01, commit `2343008` (2026-08-08) | autor: Karen Engle; título: *La esquiva promesa de desarrollo para las comunidades afrodescendientes: el futuro de la Ley 70*; año: 2011; `k: "obra"` |

**Cronología exacta:** las tres correcciones fueron aprobadas el 8 de agosto (commits `99aec5b` y `2343008`). El 11 de agosto, tres días después, el commit `dcf762f` sincronizó el corpus público sin aplicar ninguna de las tres — las dejó explícitamente como `k: "manifestacion"`, sin autoría verificada. No se resuelve aquí cuál de los dos estados debe prevalecer. Se documenta el archivo (`datos-atlas.json`), los tres commits (`99aec5b`, `2343008`, `dcf762f`) y el campo exacto (`k`, `a`, `y`, `procedencia`, `procedencia_verificada`).

**Consecuencia para C9, explícita:** la mitad de las clasificaciones principales de C9 (`chande` y `manoalzada`, 2 de 4) descansan hoy, en el corpus público, sobre entradas cuya identidad bibliográfica básica —autoría real, tipo `"obra"` frente a `"manifestacion"`— no está verificada, pese a existir una corrección aprobada y sin aplicar. La clasificación académica de ambas en C9 (aprobada por la Dirección Académica en piloto y S01) es, siguiendo el mismo principio que ya fijó `dictamen-academico-c8.md` para `chande`, estrictamente independiente de su identidad bibliográfica — no se usa una para resolver la otra.

No se utilizaron fuentes externas ni conocimiento general para completar ningún registro de esta sección.

---

## 17. Contradicciones con dictámenes anteriores

1. **La denominación de C9 (sección 1).** Ya registrada por `dictamen-academico-c1.md` §9 como pendiente independiente, con evidencia cronológica exacta, remitida al dictamen de C9. Este expediente la reprodujo y la verificó de nuevo contra Git de forma independiente (sección 1 y 3.1): la reconstrucción coincide con la del dictamen de C1, con una precisión adicional (la redacción intermedia real del catálogo, `d3b15a7`, añade la palabra «rituales», dato que el dictamen de C1 no analiza porque su tabla se concentra en la denominación completa, no en qué palabras cambiaron). No se corrige el dictamen de C1; se añade una lectura complementaria.
2. **`revision_historiografica` como fenómeno compatible con C9 (sección 10)**, frente a la exclusión expresa de la revisión historiográfica en el guion de C9. No fue señalada por ningún dictamen anterior (es interna al par catálogo-de-fenómenos/guion-de-corrientes, no involucra a C1-C8). Se registra aquí por primera vez.
3. **Ningún otro punto de tensión cuantitativa** se detectó entre los dictámenes C1-C8 y los datos de C9 verificados en este expediente: las cifras que C2, C3, C6, C7 y C8 ya publicaron sobre C9 (fronteras, casos, criterios) se reprodujeron de forma independiente en las secciones 5, 8 y 9, y coincidieron exactamente en todos los casos verificados.

No se corrige ningún dictamen anterior. No se decide cuál de las dos denominaciones de C9 prevalece.

---

## 18. Tamaño de muestra

| Indicador | Valor |
|---|---:|
| Obras totales del corpus (HEAD, v1.16.1) | 232 |
| Registros procesados en los 4 lotes obligatorios | 57 |
| C9 principal | 4 |
| C9 secundaria | 7 |
| C9, algún rol (total) | 11 |
| Candidaturas activas hacia C9 | 0 |
| Candidaturas históricas verificadas por Git | 2 (`chande` resuelta a C9; `price`/`totumo` resueltas a C3) |
| Etiqueta heredada `memoria` (corpus completo) | 93 (40,1 %) |
| Etiqueta heredada `memoria`, procesadas | 7 |
| Fenómenos del catálogo compatibles con C9 | 11 de 35 |
| Anclas de esos fenómenos (únicas) | 42 |
| Anclas procesadas | 2 |
| Señales léxicas genuinas (unión de términos, tras excluir falsos positivos) | 19 |
| Universo exploratorio (A∪B∪E) | 102 |
| Universo exploratorio, no procesado | 93 |
| Fronteras documentadas (con antecedente en C1-C8) | 5 (C2, C3, C6, C7, C8) |
| Fronteras sin antecedente ratificado | 2 (C4, C5, con un caso cada una; C9/C10 con tres casos) |
| Casos triples con C9 | 5 |
| Casos con `elegibilidad_atlas` bloqueada relacionados con C9 | 0 |
| Identidades bibliográficas dudosas afectando clasificaciones principales de C9 | 2 de 4 (`chande`, `manoalzada`) |

Ningún tamaño de esta tabla se interpreta como certeza. Un universo de 93 obras sin procesar es, en sí mismo, evidencia de cuánto trabajo de lectura falta, no una proyección de cuántas terminarán en C9.

---

## 19. Asuntos no verificables

1. **[DECISIÓN REQUERIDA]** Cuál de las dos denominaciones del 11 de agosto (plan operativo vs. catálogo vigente) tiene autoridad sobre el nombre de C9 (sección 1).
2. **[TENSIÓN DOCUMENTAL, NO VERIFICABLE POR ESTE MEDIO]** La discrepancia entre la `nota_renombramiento` del propio catálogo y lo que Git permite reconstruir sobre la redacción intermedia del 10 de agosto (sección 1). No hay forma de verificar, solo con lo que hay en el repositorio, si el «primer ajuste intermedio» que la nota describe llegó a existir en algún borrador fuera de Git.
3. **[DECISIÓN REQUERIDA]** Si `revision_historiografica` debe seguir figurando como fenómeno compatible con C9, dado que el guion de C9 excluye expresamente ese tipo de obra (sección 10).
4. **[DECISIÓN REQUERIDA]** El estatuto bibliográfico de `chande` y `manoalzada` — aplicar o no la corrección aprobada en piloto/S01 al corpus público (sección 16).
5. **[HIPÓTESIS, NO VERIFICABLE AQUÍ]** Si el patrón «C9 siempre acompaña a C7 cuando aparece como una de dos secundarias» (sección 9) responde a algo sustantivo del corpus o es artefacto de que ambas corrientes tienen un umbral de ingreso relativamente amplio. Cuatro casos no permiten decidir esto y no se fuerza una lectura.
6. **[DATO AUSENTE, NO SE INFIERE]** `lenguas_publicacion` de `chande`, una de las cuatro clasificaciones principales de C9 (sección 14).

---

## 20. Preguntas para la Dirección Académica

1. ¿Cuál de las dos denominaciones documentadas en la sección 1 —«Archivos vivos, espiritualidades y transmisión» (plan operativo, 11-ago 10:00 UTC) o «Archivos vivos, espiritualidades y saberes transmitidos» (catálogo vigente, commit `16fc252`, 11-ago 16:00 UTC)— debe adoptarse como denominación de C9?
2. ¿Debe fijarse un principio analítico explícito para C9 más allá del guion actual, dado que es la corriente con el riesgo de solapamiento más alto de las diez y con la vía constitutiva menos determinada (sección 4)?
3. ¿El guion de C9 en `etapa-1-arquitectura-integrada.md` es aprobado, corregido o descartado?
4. Dado que dos tercios de las clasificaciones confirmadas de C9 (8 de 11) llegaron sin la etiqueta heredada `memoria`, ¿debe reformularse la vía de constitución declarada, o se ratifica «migración del corpus heredado, con reparto obligado» tal como está (sección 4)?
5. ¿Debe abrirse una candidatura formal para las tres entradas ya señaladas por el dictamen de C3 como pendientes de lectura para la frontera C3/C9 (`chevannes`, `travelstooy`, `pricefirst`), que siguen sin procesar (secciones 8 y 12)?
6. ¿Cómo debe leerse `revision_historiografica` frente a C9: se corrige el catálogo de fenómenos, se corrige el guion de la corriente, o conviven ambas lecturas bajo un criterio más fino (sección 10)?
7. ¿Debe aplicarse al corpus público la corrección bibliográfica aprobada para `chande` y `manoalzada` (piloto y S01, 8 de agosto), hoy sin reflejar en `datos-atlas.json` (sección 16)?
8. ¿Se autoriza la lectura del universo exploratorio de 93 entradas (sección 12), o de algún subconjunto priorizado de él, como siguiente paso de C9?
9. ¿Debe fijarse algún criterio para las fronteras C4/C9 y C5/C9, que hoy solo tienen un caso cada una y ningún criterio ratificado (sección 8)?
10. ¿Debe fijarse un criterio para la frontera C9/C10, que tiene tres casos documentados y ningún dictamen propio de C10 todavía (sección 8)?

Ninguna pregunta se responde en este documento.

---

## 21. Límites del expediente

Este expediente:

- no ratifica C9;
- no fija principios;
- no reclasifica ninguna obra;
- no crea candidaturas;
- no modifica el corpus (`datos-atlas.json`);
- no modifica el catálogo de corrientes ni el de fenómenos;
- no modifica ningún lote (piloto, S01, A01, A02, F01, TP01);
- no corrige los dictámenes académicos C1-C8;
- no resuelve ningún dato bibliográfico dudoso;
- no ejecuta ningún script clasificatorio sobre el corpus;
- no siembra ninguna obra nueva;
- no redacta el dictamen académico de C9;
- no reabre C1-C8;
- no avanza a C10.

---

## 22. Auditoría final

Recalculado dos veces (script estructurado + recuento independiente por iteración manual sobre estructuras separadas) donde la instrucción lo exige: total C9 (4+7=11, dos métodos, sección 5.3), etiqueta heredada `memoria` (93, filtro directo y comprensión de lista, sección 4), candidaturas (histórico verificado por Git contra tres archivos independientes por caso, sección 3.3 y 6), señales léxicas (dos implementaciones con y sin límite de palabra, sección 7), fenómenos (11 de 35, con anclas recontadas por deduplicación explícita, sección 10), anclas (44 con repetición / 42 únicas, sección 10), universo (102 por dos métodos, sección 11), intersecciones (A∩B, A∩E, B∩E, A∩B∩E, sección 11).

Verificación Git repetida al cierre, con `git --no-optional-locks` para no dejar ningún candado en el índice desde este entorno:

```
$ git --no-optional-locks status --short
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c9.md
$ git --no-optional-locks diff --stat HEAD
(sin salida: expediente-evidencia-c9.md es nuevo, no rastreado, no aparece en diff contra HEAD)
$ git --no-optional-locks diff --name-only HEAD
(sin salida)
```

El único archivo nuevo introducido por esta tarea es `data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c9.md`. Los dos archivos heredados no rastreados siguen exactamente como estaban al inicio (sección 0): no se tocaron.

**Este expediente se entrega para verificación de la Dirección Académica antes de cualquier commit**, siguiendo el acuerdo explícito de esta tarea: dado que este entorno de trabajo (Cowork, sobre un puente al equipo de Rob) ya causó antes un candado de Git irrecuperable al ejecutar operaciones que tocan el índice o el árbol de trabajo, **no se ejecuta `git add`, `git commit` ni `git push` desde aquí**. Los comandos exactos para que Rob los ejecute en su Mac se entregan junto con este documento, fuera del propio expediente.
