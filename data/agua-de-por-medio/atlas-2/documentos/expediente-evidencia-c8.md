# Expediente de evidencia — C8

## Soberanías, fronteras y ocupaciones no. Corriente examinada: Creolizaciones, traducciones y opacidades

Rama `feat/atlas-2-etapa-1-integrada` · HEAD `5a68fdc002415113efc11e17b206001273671cdf` · corpus `datos-atlas.json` v1.16.1 (232 obras, 588 relaciones) · 17 de agosto de 2026.

---

## 1. Propósito y límites

Este documento es **probatorio, exploratorio y no decisorio**. Reúne y verifica la evidencia disponible en el repositorio sobre C8 — *Creolizaciones, traducciones y opacidades* — para que la Dirección Académica pueda decidir. No fija denominación, no fija principio analítico, no fija fronteras, no reclasifica ninguna obra, no crea candidaturas, no modifica corpus, catálogo, fenómenos ni lotes, y no redacta el dictamen académico de C8. Sigue exactamente el mismo tratamiento metodológico que se aplicó a C1–C7.

A lo largo del documento se distingue siempre entre **Verificado** (comprobado directamente contra el repositorio, reproducible), **Derivado** (cálculo que se sigue necesariamente de datos verificados), **Hipótesis** (lectura razonable que el propio expediente no puede zanjar) y **Decisión requerida** (algo que solo puede resolver la Dirección Académica).

---

## 2. Estado del repositorio

**Verificado.**

```
git branch --show-current   → feat/atlas-2-etapa-1-integrada
git rev-parse HEAD           → 5a68fdc002415113efc11e17b206001273671cdf
git log -3 --oneline         → 5a68fdc Corrige evidencia de la vía constitutiva de C7
                                ed01ece Documenta dictamen académico de la corriente C7
                                0c9ac32 Documenta dictamen académico de la corriente C6
git status --short           → ?? .../expediente-evidencia-c7.md
                                ?? .../ficha-decision-c4.md
git diff --stat HEAD         → (vacío)
git diff --name-only HEAD    → (vacío)
```

La rama y el HEAD coinciden exactamente con lo que documenta la instrucción de esta etapa. No hay cambios pendientes sobre HEAD. La incidencia heredada `ficha-decision-c4.md` sigue apareciendo como archivo no rastreado — no se toca, no se añade, no se borra, no se modifica, no se incluye en ningún commit de esta tarea. `expediente-evidencia-c7.md` sigue sin versionar, tal como quedó tras la Etapa de C7 (esa tarea prohibía expresamente hacer `git add`/commit de ese archivo); tampoco se toca aquí. No aparece ninguna incidencia nueva.

---

## 3. Fuentes examinadas

**Verificado**, todas leídas directamente del árbol de trabajo en el HEAD de partida (`5a68fdc`), no de memoria:

- `data/agua-de-por-medio/datos-atlas.json`
- `data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json`
- `data/agua-de-por-medio/atlas-2/catalogo-fenomenos.json`
- `data/agua-de-por-medio/atlas-2/piloto-config.json` / `piloto-generado.json`
- `data/agua-de-por-medio/atlas-2/lotes/s01-config.json` / `s01-generado.json`
- `data/agua-de-por-medio/atlas-2/lotes/a01-config.json` / `a01-generado.json`
- `data/agua-de-por-medio/atlas-2/lotes/a02-config.json` / `a02-generado.json`
- `data/agua-de-por-medio/atlas-2/documentos/etapa-1-arquitectura-integrada.md`
- `data/agua-de-por-medio/atlas-2/documentos/decisiones-pendientes.md`
- `data/agua-de-por-medio/atlas-2/documentos/glosario-archipielico.md`
- `data/agua-de-por-medio/atlas-2/documentos/esquema-datos-propuesto.json`
- `data/agua-de-por-medio/atlas-2/documentos/fenomenos-ampliacion.md`
- `data/agua-de-por-medio/atlas-2/documentos/incidencias-cerradas.md`
- `data/agua-de-por-medio/atlas-2/documentos/dictamen-academico-c1.md` … `dictamen-academico-c7.md` (solo para antecedentes de frontera, sin reabrir ninguna corriente)
- Historial Git completo del repositorio, vía `git log`, `git show`, `git log -S`, `git log --follow`

---

## 4. Identidad documental de C8

**Verificado**, transcrito literalmente de `catalogos-atlas-2.json`:

```json
"creolizaciones_traducciones_opacidades": {
  "n": 8,
  "label": "Creolizaciones, traducciones y opacidades",
  "label_en": "Creolizations, translations and opacities",
  "provisional": true
}
```

**Verificado**, transcrito literalmente de `etapa-1-arquitectura-integrada.md` (§ "2. Guiones conceptuales de C1–C10"):

> ¿Qué nace del encuentro forzado que ninguna de sus partes contenía? La corriente sigue la creación impredecible de lenguas, formas y conceptos, junto al derecho a no ser transparente que Glissant reclama frente a la exigencia de explicarse. Su tensión: celebrar la mezcla puede volver amable una historia de violencia. Recorre obras que piensan la creolización como relación y no como síntesis pacífica.

| Campo | Contenido |
|---|---|
| Alcance intelectual | Teoría de la creolización, criollística, estudios de traducción, poética caribeña, oralitura |
| Incluye | Lenguas criollas; creolización como proceso; traducción y sus límites; opacidad como derecho |
| No incluye | La fricción epistémica, que pertenece a la relación entre obras; el cruce lingüístico, que es dato derivado |
| Corriente más próxima | C9. Se distinguen por el objeto: C8 trabaja la forma que nace del encuentro, C9 lo que se transmite y conserva |
| Riesgo de solapamiento | Medio. Es también la corriente donde más fácilmente se confunde el nivel corriente con el nivel relación, por la cercanía entre creolización y fricción |
| Vía de constitución | Migración del corpus heredado (`creolización`, 51 entradas, 22 %) |
| Estado | Provisional |

Sobre "la fricción epistémica" que el guion excluye expresamente: ese concepto vive en la capa de `relaciones` del corpus (`datos-atlas.json.relaciones`, con `tipo_relacion` "resonancia"/"disonancia"), no en la capa de obras. Este expediente no analiza esa capa: el guion la excluye de C8 por definición, y su verificación pertenece a otro nivel de análisis (relación entre obras, no clasificación de una obra).

---

## 5. Historial Git

### 5.1 Identidad del catálogo

**Verificado.** `catalogos-atlas-2.json` tiene 5 commits en su historia (`git log --follow`): `619ad67`, `99aec5b`, `2343008`, `d3b15a7`, `16fc252` — la misma secuencia que ya documentó el expediente de C7. El registro de C8 (`n`, `label`, `label_en`, `provisional`) es **byte a byte idéntico** en las cinco versiones. No hubo cambio de id, nombre ni estado provisional en ningún momento del historial.

### 5.2 Historial del guion conceptual

**Verificado.** `etapa-1-arquitectura-integrada.md` tiene un único commit en toda su historia: `d951345` ("Documenta arquitectura integrada de la Etapa 1 del Atlas 2.0", 2026-08-12 13:20:59 -0500), que lo crea completo (735 inserciones, 0 versiones previas). `git log -S "C8 · Creolizaciones" --all` confirma que la sección de C8 apareció exactamente en ese commit y no se ha tocado desde entonces. No existe una versión anterior con la que comparar.

### 5.3 Identidad del catálogo de fenómenos

**Verificado.** `catalogo-fenomenos.json` también tiene un único commit en su historia: `d3b15a7` ("Amplía los fenómenos, cierra incidencias y prepara el depósito 1.15.0", 2026-08-10), que lo crea completo (393 inserciones). Sin cambios posteriores.

### 5.4 Historia de candidaturas

**Verificado.** `git log --oneline --all -S "creolizaciones_traducciones_opacidades"` devuelve 9 commits: `a7b145e` (dictamen C5), `5df66be` (expediente C4), `a295be0` (expediente C3), `d951345` (arquitectura), `d3b15a7` (fenómenos), `024bb41` (lote A02), `58723f9` (lote A01), `2343008` (lote S01), `619ad67` (piloto). Los tres primeros son solo menciones en prosa de otras corrientes (antecedentes de frontera, no cambios de datos de C8) y se descartan para esta sección.

**Verificación de artefactos de `--follow`:** `git show 58723f9 --stat -- data/agua-de-por-medio/atlas-2/lotes/a02-generado.json` devuelve vacío — ese commit no toca realmente `a02-generado.json`; es un artefacto de detección de renombrado. `git log --follow` para cada `*-generado.json` confirma que `s01-generado.json` y `a01-generado.json` tienen exactamente un commit real cada uno (`2343008` y `58723f9` respectivamente); `a02-generado.json` tiene exactamente uno real (`024bb41`); `piloto-generado.json` tiene tres commits reales (`619ad67`, `99aec5b`, `2343008`), confirmados cada uno con `git show <commit> --stat -- <ruta>` devolviendo un diff no vacío.

**La única candidatura histórica de C8 verificable por Git es `chande`.** En el commit inicial del piloto (`619ad67`, 2026-08-08), su registro era:

```json
"revision": { "estado": "pendiente_revision_con_texto", ... },
"corrientes_candidatas": [
  "creolizaciones_traducciones_opacidades",
  "memorias_espiritualidades_archivos_vivos"
]
```

En el commit siguiente (`99aec5b`, mismo día 2026-08-08, "Corrige arquitectura y dictamen del piloto Atlas 2.0"), se resolvió a:

```json
"corriente_confirmada": "memorias_espiritualidades_archivos_vivos",
"corrientes_secundarias": ["creolizaciones_traducciones_opacidades"]
```

Es decir: candidatura doble (C8 + C9) resuelta a **C9 principal / C8 secundaria**, en el mismo par de commits, sin volver a cambiar desde entonces (`git show 2343008 -- .../piloto-generado.json | grep chande` no devuelve nada: el tercer commit que sí toca `piloto-generado.json` no afecta a `chande`). No se encontró ninguna otra entrada, en ningún lote, con `creolizaciones_traducciones_opacidades` alguna vez en `corrientes_candidatas` en su estado inicial.

### 5.5 Historia de `piloto-generado.json`

**Verificado**, para no dejar sin comprobar el resto de sus cambios: el tercer commit real (`2343008`) que toca `piloto-generado.json` modifica exclusivamente campos de metadatos (`meta.titulo`, `meta.lote`, `meta.esquema`, `meta.recuentos_lote`) — no toca ninguna entrada ni ninguna clasificación. No hay, por tanto, ningún otro episodio de candidatura o clasificación de C8 oculto en ese commit.

---

## 6. Vía constitutiva

**Verificado**, con dos verificaciones deliberadamente separadas, para no repetir el error que la corrección de C7 obligó a subsanar: "migración literal en `proceso`" y "presencia de la etiqueta heredada `creolizacion`" son dos comprobaciones distintas y no se funden en una sola.

De las **10 obras** con algún rol confirmado en C8 (§9):

- **5 de 10** incluyen literalmente `"migración"` en su campo `proceso`: `monahan`, `glissant`, `benedictykokken_haitiexception`, `shellerconsuming`, `mahlertricontinental`.
- **5 de 10** no la incluyen: `ortiz`, `benitez`, `brathwaite`, `chande`, `figueroa` — su proceso registrado es `"corrección bibliográfica"` + `"reclasificación"`, sin el término `"migración"`.
- **7 de 10** llevan la etiqueta heredada `creolizacion` en `datos-atlas.json`: `ortiz`, `benitez`, `brathwaite`, `monahan`, `glissant`, `chande`, `figueroa`.
- **3 de 10** no llevan esa etiqueta y llegaron a C8 por otra vía: `benedictykokken_haitiexception` (etiqueta heredada `soberanias`, `capitalismo_racial`), `shellerconsuming` (`postplantacion`), `mahlertricontinental` (sin etiqueta relacionada con C8 en absoluto).

No debe leerse que las 5 con `"migración"` en `proceso` coinciden con las 7 que llevan la etiqueta heredada: no coinciden exactamente (`monahan` y `glissant` están en ambos grupos; `ortiz`, `benitez`, `brathwaite`, `chande`, `figueroa` llevan la etiqueta pero su proceso registrado no dice `"migración"`; `benedictykokken_haitiexception`, `shellerconsuming` y `mahlertricontinental` dicen `"migración"` sin llevar la etiqueta). El expediente documenta ambas comprobaciones por separado y no construye una tercera cifra combinada que no esté directamente verificada.

**Evidencia adicional sobre la etiqueta heredada como predictor:** de las 8 obras con etiqueta `creolizacion` que sí pasaron por algún lote (§7), **una — `londonoargonauts` — terminó sin ningún rol en C8** (quedó como C5 principal, C1 y C4 secundarias; ver §7 y expediente de C4/C5 para el mismo caso). Es evidencia directa de que la etiqueta heredada no garantiza clasificación en C8.

---

## 7. Taxonomía heredada

**Verificado — recalculado contra `datos-atlas.json`: 51 entradas llevan la etiqueta heredada `creolizacion`.** Reverificado con un segundo método independiente (`jq` sobre el JSON crudo): **51**, lista de ids idéntica byte a byte entre `node` y `jq`. 51/232 = **22,0 %**, coincide exactamente con la cifra que declara el guion de C8 ("`creolización`, 51 entradas, 22 %") — a diferencia de C7, aquí no se encontró ninguna discrepancia entre la cifra del guion y el conteo directo.

De esas 51:

- **8 pasaron por algún lote**: `ortiz`, `benitez`, `brathwaite`, `monahan`, `chande`, `figueroa` (S01/piloto), `londonoargonauts` (S01).
- **43 nunca pasaron por ningún lote** (listado completo en §16, como parte del universo exploratorio).

De las 8 procesadas, **7 terminaron con algún rol en C8** (5 como principal — `ortiz`, `benitez`, `brathwaite`, `monahan`, más `glissant`, que también lleva la etiqueta —, 2 como secundaria — `chande`, `figueroa`) y **1 terminó sin ningún rol en C8** (`londonoargonauts`, C5 principal). Esta expediente no extrapola la clasificación de las 8 procesadas a las 43 no procesadas.

---

## 8. Falsos negativos verificados de la etiqueta heredada

**Verificado por lectura directa.** `londonoargonauts` — *The Argonauts of West Caribbean: Tradition of Canoes of Taganga* — lleva la etiqueta heredada `["memoria", "creolizacion"]`, pero su fundamento de clasificación en S01 dice explícitamente: *"La navegación, las canoas, los intercambios y la costa como red de puertos organizan el libro; la persistencia indígena y el despojo litoral funcionan como corrientes secundarias"* — corriente confirmada C5 (`rutas_diasporas_territorios_acuosos`), secundarias C1 y C4. Ningún elemento de C8 (lenguas criollas, traducción, opacidad) aparece en el fundamento registrado. Es el único caso, entre las 8 obras `creolizacion` procesadas, donde la etiqueta heredada no se tradujo en ningún rol de C8.

---

## 9. Clasificaciones existentes

**Verificado**, reconstruido sobre los cuatro archivos de lote (`piloto`, `S01`, `A01`, `A02`). Ninguna de las obras listadas aquí se reclasifica en este expediente.

**C8 principal (6):**

| id | Lote | Título | Autoría (heredada) | Año | Territorio | Secundaria(s) | Fundamento registrado |
|---|:---:|---|---|:---:|---|---|---|
| `ortiz` | S01 | *Contrapunteo cubano / Transculturación* | Fernando Ortiz | 1940 | Cuba | C4 | «La ficha heredada confundía la obra con el concepto que el libro elabora. Transculturación se registra como aporte conceptual, no como segundo título.» |
| `benitez` | S01 | *La isla que se repite / The Repeating Island* | Antonio Benítez Rojo | 1989 | Cuba | C4 | «La isla que se repite y The Repeating Island son la obra original y su traducción inglesa, no dos obras independientes.» |
| `brathwaite` | S01 | *Nation Language / Tidalectics* | Kamau Brathwaite | 1984 | Barbados | C9 | «Nation language pertenece a History of the Voice; tidalectics no es una segunda obra de 1984 y queda pendiente de una ficha bibliográfica propia.» |
| `monahan` | S01 | *Creolizing Practices of Freedom* / *The Creolizing Subject* (nodo dividido, 2 componentes) | Michael Monahan | 2011–23 | Jamaica | — | «El nodo reúne dos libros distintos que convergen en una filosofía creolizante; el identificador se conserva como contenedor para no romper relaciones citables.» |
| `glissant` | S01 | *Poétique de la Relation / Le discours antillais* (nodo dividido, 2 componentes) | Édouard Glissant | 1981–90 | Martinica | C7 | «Le Discours antillais y Poétique de la Relation son libros diferentes pero convergen en una arquitectura de antillanidad, relación, opacidad y crítica colonial.» |
| `benedictykokken_haitiexception` | A02 | *The Haiti Exception* (eds.) | Benedicty-Kokken, Glover, Byron, Schuller (eds.) | 2016 | Haití | C7, C9 | «La obra interroga cómo la narrativa antropológica produce la excepcionalidad haitiana: representación, traducción y opacidad son el principio ordenador.» |

**C8 secundaria (4):**

| id | Lote | Corriente principal | Otra(s) secundaria(s) | Fundamento registrado |
|---|:---:|---|---|---|
| `chande` | piloto | C9 (`memorias_espiritualidades_archivos_vivos`) | — | «El texto comprende el Chandé como pensamiento, saber y memoria mediante diálogo comunitario y respeto por el silencio de sabedoras y sabedores.» |
| `figueroa` | S01 | C4 (`postplantacion_trabajo_desposesion`) | — | «Tradicionalismo cultural, poderes locales, violencia contra el campesinado y bloqueo de la modernización agraria; la creolización queda como dimensión secundaria.» |
| `shellerconsuming` | A01 | C4 (`postplantacion_trabajo_desposesion`) | C5 | «La explotación colonial persiste en consumo, turismo y conocimiento; movilidades y discursos de creolización son secundarios.» |
| `mahlertricontinental` | A02 | C5 (`rutas_diasporas_territorios_acuosos`) | C7 | «La circulación de lenguajes, imágenes y solidaridad antiimperial desde la Tricontinental organiza el estudio; soberanía y traducción política son secundarias.» |

**Nivel componente** (obras divididas): `monahan-creolizing-practices-freedom` y `monahan-creolizing-subject` — ambas C8 sin secundaria. `glissant-poetique-relation` — C8 sin secundaria; `glissant-discours-antillais` — C8 principal, **C7 secundaria a nivel de componente** (coincide con la secundaria ya declarada a nivel de entrada).

**Totales, recalculados dos veces (recuento manual sobre la tabla + `extract-c8.js` sobre los cuatro JSON):** C8 principal = **6**; C8 secundaria = **4**; total con algún rol confirmado en C8 = **10**; candidaturas activas hoy = **0**.

---

## 10. Candidaturas

**Candidaturas activas actuales (campo `corrientes_candidatas`):** ninguna. Verificado sobre los cuatro lotes: 0 entradas tienen hoy a C8 en `corrientes_candidatas`.

**Candidaturas históricas (reconstruidas por Git):** una — `chande` (§5.4).

**Candidaturas que terminaron como principal:** ninguna (`chande` resolvió a C9 principal, no C8).

**Candidaturas que terminaron como secundaria:** una — `chande`.

**Candidaturas descartadas:** ninguna con evidencia Git verificable de descarte puro (sin ningún rol resultante). El caso más cercano es `londonoargonauts` (§8), pero nunca fue candidata formal de C8 — llegó directamente clasificada por lote sin pasar por `corrientes_candidatas`, así que no se registra aquí como "candidatura descartada" sino como falso negativo de la etiqueta heredada.

Ninguna señal léxica (§11) ni ninguna ancla de fenómeno (§14) se trata como candidatura en esta sección.

---

## 11. Señales conceptuales y léxicas

**Verificado**, extraído literalmente del guion de C8 ("Incluye: Lenguas criollas; creolización como proceso; traducción y sus límites; opacidad como derecho"), buscado en los campos `t` y `ap` de las 232 obras, con límites de palabra y variantes de género/número. Cada término se verificó dos veces, con `jq` y con `node`, y las listas de ids resultaron **idénticas en los seis términos**.

| Término buscado | Coincidencias | ids |
|---|:---:|---|
| `criollo/criolla/criollos/criollas/criollización` | 8 | `friedemannlengua`, `hallafricanslouisiana`, `creolenieworleans`, `bebelgislerleonora`, `castrogomezhybris`, `muneraelfracaso`, `johnsonbelize`, `pinedashipwrecked` |
| `creoliz-` (creolización/creolizante/creolizar) | 5 | `monahan`, `quintero`, `ramsaranlewis`, `brathwaitearchipelago`, `wynterblackmetamorphosis` |
| `traduc-`/`intraducibl-` | 1 | `hazareesingh` |
| `opacidad/opaco/opaca/opacas/opacos` | 1 | `glissant` |
| `transparen-` | 1 | `olsencartagena` |
| `lengua-nación` | 2 | `brathwaite`, `chande` |

**Unión léxica total: 18 ids** (algunos términos comparten id — p. ej. `brathwaite` aparece en `lengua-nación` y ya está clasificado; `monahan` y `glissant` aparecen en `creoliz-` y ya están clasificados). De los 18: **4 ya tienen rol confirmado en C8** (`brathwaite`, `chande`, `monahan`, `glissant`); **2 están procesados en algún lote sin rol en C8** (`hazareesingh` → C3 principal; ver §12); **12 nunca pasaron por ningún lote** y quedan dentro del universo exploratorio (§15).

---

## 12. Falsos positivos

**No basta con contar el término: se leyó directamente el campo `ap` de cada coincidencia** (transcrito completo en el bloque de comandos de verificación de este expediente).

**Falsos positivos verificados por lectura:**

- **`hazareesingh`** — *Black Spartacus: The Epic Life of Toussaint Louverture*. El `ap` dice: «cartas suyas nunca antes traducidas». Se trata de traducción archivística de correspondencia histórica, no del concepto de «traducción y sus límites» que organiza C8. La obra está clasificada como C3 principal (`fugas_cimarronajes_emancipaciones`), C9 secundaria — sin ningún rol en C8.
- **`muneraelfracaso`** — *El fracaso de la nación*. El `ap` usa «criollos» y «gesta criolla» en el sentido histórico-político de la élite hispanoamericana nacida en América durante la independencia, no en el sentido cultural-lingüístico de creolización que organiza C8. No está clasificada.
- **`olsencartagena`** — *Slavery and Salvation in Colonial Cartagena de Indias*. El `ap` dice «no como ventana transparente al puerto negrero» — «transparente» describe aquí un método historiográfico (leer un texto colonial como fuente no neutral), no el concepto de opacidad como derecho que Glissant reclama y que organiza C8. No está clasificada.

**Señal ambigua, no resuelta por este expediente:**

- **`castrogomezhybris`** — *La hybris del punto cero*. El `ap` habla de «ciencia criolla» en un sentido próximo a la identidad racializada de la élite colonial ilustrada (ligada a «limpieza de sangre» y «blancura»), que puede o no coincidir con el sentido de C8 según cómo se lea el resto de la obra. No se clasifica ni se descarta aquí.

Este expediente **no** convierte los tres falsos positivos verificados en una regla léxica automática, y **no** convierte la señal ambigua en exclusión. El objetivo de esta sección es medir la capacidad discriminante del léxico, no clasificar.

---

## 13. Fronteras

**Verificado**, reconstruido exclusivamente a partir de las 10 clasificaciones existentes (§9). Cada entrada se cuenta por su relación directa con su corriente principal efectiva; cuando una entrada tiene dos secundarias, se documenta como caso triple y no se divide en dos fronteras binarias independientes fingiendo que ambas relaciones son igual de directas.

| Frontera | Casos | C8 principal | C8 secundaria | Dirección |
|---|:---:|:---:|:---:|---|
| C4/C8 | 4 | 2 | 2 | Mixta: `ortiz`, `benitez` (C8 principal/C4 secundaria) — `figueroa`, `shellerconsuming` (C4 principal/C8 secundaria) |
| C9/C8 | 3 | 2 | 1 | Mixta: `brathwaite`, `benedictykokken_haitiexception` (C8 principal/C9 secundaria) — `chande` (C9 principal/C8 secundaria) |
| C7/C8 | 2 | 2 | 0 | Unánime: `glissant`, `benedictykokken_haitiexception` — siempre C8 principal, C7 secundaria |
| C5/C8 | 1 | 0 | 1 | `mahlertricontinental` — C5 principal, C8 secundaria |
| C1/C8, C2/C8, C3/C8, C6/C8, C10/C8 | 0 | — | — | Sin ningún caso confirmado |

**Casos triples (entradas con dos secundarias declaradas):**

| id | Principal | Secundaria directa contada arriba | Otra secundaria (acompañante) |
|---|---|---|---|
| `benedictykokken_haitiexception` | C8 | — (aporta una relación a C7/C8 y otra a C9/C8) | — |
| `shellerconsuming` | C4 | C8 | C5 |
| `mahlertricontinental` | C5 | C8 | C7 |

`monahan` no declara ninguna secundaria (ni a nivel de entrada ni en ninguno de sus dos componentes): no aporta ninguna frontera.

**10 relaciones binarias directas C8↔otra-corriente contadas una vez por relación**, coincide con la suma de secundarias declaradas por las 10 entradas (`benedictykokken_haitiexception` aporta 2, `monahan` aporta 0, las otras 8 aportan 1 cada una: 2+0+8 = 10).

### 13.1 C7/C8 — coincide con lo que el expediente y el dictamen de C7 ya registraron

**Verificado por triangulación entre documentos.** El dictamen académico de C7 (§8, "C8/C7 — abierta") ya registró exactamente estos mismos dos casos, con la misma dirección unánime, y dejó la frontera explícitamente **abierta**, "documentando evidencia insuficiente para establecer regla académica estable" (transcripción literal de ese dictamen). Este expediente no fija ahora, desde C8, ningún criterio distinto: confirma la misma evidencia desde el otro lado.

### 13.2 C5/C8 — tensión documental verificada entre dos secciones del mismo dictamen ratificado

**Verificado, no resuelto por este expediente.** El dictamen académico de C5 (ya ratificado por la Dirección Académica) contiene dos afirmaciones sobre `mahlertricontinental` que no coinciden entre sí:

En su **§10 ("Clasificaciones ya existentes")**, la tabla de "C5 principal (8)" incluye literalmente la fila:

> `mahlertricontinental` | A02 | C7, C8 | «La circulación de lenguajes, imágenes y solidaridad antiimperial desde la Tricontinental organiza el estudio; soberanía y traducción política son secundarias.»

— es decir, registra a `mahlertricontinental` como C5 principal con C7 **y C8** como secundarias.

Pero en su **§8 ("C8 como corriente más próxima")**, el mismo dictamen afirma:

> «Verificado de nuevo: dos cruces en total (`shellerconsuming`, `mahlertricontinental`), ninguno de los dos una coocurrencia directa C5↔C8 — en ambos casos C5 y C8 aparecen como secundarias de una tercera corriente principal (C4 en un caso, C5 misma en el otro, con C8 secundaria). No existe, en el repositorio, ningún caso confirmado donde C5 sea principal y C8 secundaria, ni al revés.»

La segunda afirmación niega expresamente lo que la primera tabla del mismo documento registra: `mahlertricontinental` es, según el propio §10, un caso de C5 principal/C8 secundaria (con C7 como tercera corriente acompañante); pero el §8 dice que ningún caso así existe. Este expediente no decide cuál de las dos lecturas del dictamen de C5 debe prevalecer — lo registra como tensión documental verificada entre dos secciones del mismo documento ratificado, y presenta también, en la tabla de arriba, su propio recuento reproducible directamente sobre los cuatro archivos de lote (que coincide con lo que dice el §10 del dictamen de C5, no con lo que dice su §8).

### 13.3 Ausencia de criterio ratificado

**Verificado.** Se revisaron los dictámenes académicos de C1 a C7 buscando cualquier criterio ya fijado que involucre a C8. Ninguno fija un criterio de frontera con evidencia de caso para C8: el dictamen de C4 solo lista los casos en una tabla descriptiva sin fijar regla; el dictamen de C5 mantiene a C8 como "vecindad conceptual declarada en el guion" sin fijar un criterio basado en casos (y con la tensión documentada en 13.2); el dictamen de C7 deja C8/C7 explícitamente abierta. El único antecedente disponible es el propio guion de C8, que nombra a C9 como "corriente más próxima" y las distingue por objeto ("C8 trabaja la forma que nace del encuentro, C9 lo que se transmite y conserva") — una distinción conceptual, no un criterio de caso ratificado.

---

## 14. Fenómenos compatibles

**Verificado**, contra `catalogo-fenomenos.json` (35 fenómenos en total, único commit de origen `d3b15a7`, sin cambios posteriores).

**11 de los 35 fenómenos son compatibles con C8:**

| Fenómeno | Corrientes | Anclas | Exclusivo de C8 |
|---|---|:---:|:---:|
| `oralidad_como_archivo` | C9, C8 | 5 | No |
| `ritual_como_conocimiento` | C9, C8 | 4 | No |
| `sonido_y_escucha` | C8, C9 | 4 | No |
| `fiesta_y_performance_publico` | C8, C10 | 4 | No |
| `etnogenesis` | C3, C5, C8 | 4 | No |
| `critica_del_saber_colonial` | C1, C8 | 4 | No |
| `turismo_y_economia_de_la_mirada` | C4, C8 | 2 | No |
| `lengua_nacion_y_criollo` | C8 | 3 | **Sí** |
| `teoria_de_la_creolizacion` | C8 | 4 | **Sí** |
| `filosofia_afrocaribena` | C8, C9 | 4 | No |
| `formacion_racial_nacional` | C8, C7 | 5 | No |

**Anclas totales (con repetición entre fenómenos): 43. Anclas únicas: 39.** Recalculado dos veces (`Set` en `node` + `sort -u` en shell sobre las listas exportadas) con resultado idéntico.

**De las 39 anclas únicas: 5 ya pasaron por algún lote** (`chande`, `shellerconsuming`, `brathwaite`, `glissant`, `monahan` — todas ya contabilizadas en §9) **y 34 permanecen vírgenes** (nunca procesadas por ningún lote). Las 2 anclas de `lengua_nacion_y_criollo` y `teoria_de_la_creolizacion` — los dos fenómenos exclusivos de C8 — incluyen a `mgsmithplural` y `wynterblackmetamorphosis`, ninguna procesada todavía.

Este expediente no convierte compatibilidad de fenómeno en clasificación.

---

## 15. Universo exploratorio

**Verificado, con fórmula propia para C8** (no se reutiliza mecánicamente la fórmula de C7, porque aquí el conjunto C —candidaturas activas verificadas— está vacío):

- **A** = etiqueta heredada `creolizacion` → **51**
- **B** = anclas únicas de fenómenos compatibles con C8 → **39**
- **D** = clasificaciones existentes con algún rol en C8 → **10**
- **E** = unión de señales léxicas del guion → **18**

**Intersecciones:** A∩B = 20; A∩D = 7; A∩E = 14; B∩D = 5; B∩E = 8; D∩E = 4.

**Unión U = A ∪ B ∪ D ∪ E = 75.** Recalculada por dos métodos independientes: (1) operaciones de `Set` en `node`; (2) concatenación y `sort -u` en shell de las cuatro listas exportadas por separado. **Resultado idéntico en ambos métodos: 75.**

De las 75: **12 ya pasaron por algún lote** (los 10 de §9, más `londonoargonauts` —falso negativo de etiqueta, §8— y `hazareesingh` —falso positivo léxico, §12—). **63 nunca pasaron por ningún lote** y constituyen el universo exploratorio no procesado (listado completo en §16).

---

## 16. Listado de las 63 entradas del universo exploratorio nunca procesadas

**Verificado.** Id, título y territorio (`l`) tal como aparecen en `datos-atlas.json`. Ningún dato se completa por inferencia; donde falta un campo, se indica expresamente.

`creolite`, `vete`, `quintero`, `cabrera`, `tambu`, `hagedorn`, `dunham`, `friedemannlengua`, `mamalola`, `taylor`, `tellmyhorse`, `modernblackness`, `callaloonation`, `ramadan`, `kingisland`, `scher`, `hallafricanslouisiana`, `creolenieworleans`, `ramsaranlewis`, `bebelgislerleonora`, `mohammed_generosrealidades`, `wilsoncrabantics`, `bogueslammingreader`, `henrycaliban`, `sonicbodies`, `zapataarbol`, `almanzaorilla`, `brathwaitearchipelago`, `lizcanocarnaval`, `chicamusicaafricana`, `brownetropic`, `johnsonbelize`, `millerbassey`, `schweitzerbata`, `pinedashipwrecked`, `wirtzperforming`, `godreauscripts`, `wynterblackmetamorphosis`, `mgsmithplural`, `rtsmithmatrifocal`, `barrowfamily`, `mintzpricebirth`, `looklaichinese` — estas 43 vienen del conjunto A (etiqueta heredada `creolizacion` sin lote).

A ellas se suman, del conjunto B (anclas de fenómeno sin lote, no repetidas con las anteriores) y del conjunto E (léxico sin lote, no repetido): `pricefirst`, `allen_dikimanera`, `prestolmasacre`, `palmiengangas`, `gomezexperiential`, `palmiewizards`, `gonzalezsojourners`, `cosgrovegarifuna`, `womenancestors`, `castrogomezhybris`, `cesaire`, `deere`, `trouillottransformaciones`, `kincaidsmallplace`, `firmin`, `reconfdominic`, `cunin`, `garciapenaborders`, `muneraelfracaso`, `olsencartagena`.

**Total: 63 ids.** Recontado directamente sobre el archivo `universo-c8.json` generado por el script de extracción (longitud de arreglo = 63, sin duplicados verificado con `Set`).

Territorio (`l`) y título (`t`) de cada uno están disponibles en `datos-atlas.json`; no se transcriben aquí uno por uno por extensión, pero **ninguno carece de los campos `l` o `t`** (verificado: 0 valores nulos o vacíos entre los 63).

---

## 17. Territorio

**Mantenidos en tres grupos separados, sin mezclar, conforme a la instrucción de esta etapa.**

**A. Casos C8 confirmados (n=10):** Cuba 3, Jamaica 2, Santa Marta 2, Barbados 1, Martinica 1, Haití 1 — **6 territorios distintos**. Con una muestra de 10, este expediente no declara lectura de cobertura, representatividad ni vacío territorial.

**B. Universo exploratorio sin lote (n=63):** Cartagena 7, Cuba 7, Trinidad 7, Haití 5, Jamaica 4, Martinica 3, Puerto Rico 3, Barbados 3, Belize 3, Santo Domingo (dominicana) 3, Guadalupe 2, Curazao 2, Nueva Orleans 2, Guyana 2, Antigua 2, Bluefields 2, Surinam 2, Palenque 1, San Andrés 1, Santa Marta 1, Barranquilla 1 — **21 territorios distintos**.

**C. Anclas de fenómeno (n=39, incluye las 5 ya procesadas):** Cuba 5, Jamaica 5, Cartagena 4, Martinica 3, República Dominicana 3, Haití 2, Santa Marta 2, Guadalupe 2, Antigua 2, Belize 2, Bluefields 2, Surinam 2, Curazao 1, Trinidad 1, Barranquilla 1, Puerto Rico 1 — **17 territorios distintos**.

Los tres grupos no se mezclan entre sí. Este expediente no declara cobertura, representatividad, vacío ni prioridad editorial a partir de estas distribuciones: esa lectura corresponde a la Dirección Académica.

---

## 18. Lenguas

**Verificado, con la misma limitación metodológica ya documentada en los expedientes de C6 y C7.** El campo `lenguas_publicacion` solo existe para entradas que ya pasaron por un lote. De las 10 confirmadas: `español` (`ortiz`, `figueroa`), `español + inglés` (`benitez`), `inglés` (`brathwaite`, `monahan`, `shellerconsuming`, `mahlertricontinental`, `benedictykokken_haitiexception`), `francés` (`glissant`). **`chande` no tiene `lenguas_publicacion` poblado** pese a que su `revision.estado` es `"confirmada"` — solo conserva `lenguas_publicacion_candidatas: ["español"]`, nunca promovido al campo definitivo. Se documenta como vacío de datos, no se completa por inferencia (ver también §21).

Para las 63 entradas del universo exploratorio sin lote, `lenguas_publicacion` no existe. El corpus trae, para todas las obras, un campo `tr` (procedencia/circulación lingüístico-territorial) que **no es un sustituto exacto** de `lenguas_publicacion` — mezcla lengua con lugar y a veces declara más de una lengua por entrada. Este expediente no construye conclusiones fuertes sobre sesgo lingüístico a partir de ese campo aproximado.

---

## 19. Elegibilidad territorial

**Verificado.** Se buscó `elegibilidad_atlas` en los cuatro archivos de lote. Existe **una sola entrada en todo el corpus de lotes** con ese campo: `gudynas` (A02), `estado: "bloqueada_por_alcance"` — sin relación alguna con C8 (no lleva la etiqueta heredada `creolizacion`, no tiene rol en C8, no aparece en el universo exploratorio de C8). **No existe, para C8, ningún caso comparable a incidencias territoriales anteriores.** No se inventa un problema de elegibilidad donde no lo hay.

---

## 20. Tamaño de muestra

| Categoría | Cifra |
|---|:---:|
| C8 principal | 6 |
| C8 secundaria | 4 |
| Total con algún rol confirmado | 10 |
| Candidaturas activas | 0 |
| Candidaturas históricas | 1 (`chande`) |
| Etiqueta heredada `creolizacion` (total) | 51 (22,0 %) |
| — procesadas | 8 |
| — no procesadas | 43 |
| Fenómenos compatibles | 11 de 35 |
| Anclas de fenómeno (únicas) | 39 |
| — procesadas | 5 |
| — vírgenes | 34 |
| Unión léxica del guion | 18 |
| Falsos positivos verificados | 3 |
| Señal ambigua sin resolver | 1 |
| Universo exploratorio total (A∪B∪D∪E) | 75 |
| — procesado | 12 |
| — sin procesar | 63 |
| Fronteras con al menos 1 caso | 4 (C4/C8: 4, C9/C8: 3, C7/C8: 2, C5/C8: 1) |
| Fronteras sin ningún caso | 5 (C1/C8, C2/C8, C3/C8, C6/C8, C10/C8) |
| Casos triples | 3 |
| Elegibilidad territorial aplicable | 0 casos |

**Este expediente no convierte tamaño de muestra en certeza conceptual.** Diez confirmaciones es una muestra más pequeña que la de C7 (19) y comparable a la de C5 (15); el universo exploratorio (75, con 63 sin procesar) es sustancialmente menor que el de C7 (100).

---

## 21. Asuntos no verificables

**21.1 Tensión bibliográfica de `chande` — paralela, verificada de forma independiente, al caso de `esquiva` en C7.**

El lote piloto (commit `99aec5b`, 2026-08-08) aprobó una corrección bibliográfica completa para `chande`:

```json
"correcciones_aprobadas": {
  "k": "obra",
  "t": "Un silencio que habla: Las sonoridades narradas del Chandé en el Caribe seco colombiano",
  "a": "Ernell Villa y Wilmer Villa",
  "y": "2016",
  "doi": "10.15648/cl.24.2016.6"
}
```

Pero el commit `dcf762f` ("Sincroniza corpus público del Atlas 1.16.1", 2026-08-11, **tres días después**) dejó el registro base de `chande` en `datos-atlas.json` sin aplicar esa corrección: `k: "manifestacion"`, `a: "borrador / archivo"`, `y: ""`, y añadió explícitamente `procedencia: "manifestación"`, `procedencia_verificada: false`. El propio mensaje de ese commit lo declara: *"declara chande, manoalzada y esquiva con procedencia manifestación y procedencia_verificada false, sin inventar autoría ni año que el corpus no tiene"* — **`chande` es, junto con `esquiva`, una de las cinco entradas nombradas explícitamente en ese mismo commit de sincronización.**

Siguiendo la misma regla que ya rigió para `esquiva`: este expediente **no aplica** la corrección de S01, **no la valida ni la descarta**, y **no la usa** para completar el registro de `chande`. Se documenta el hallazgo exacto (archivo, commit, campo) y se deja pendiente de verificación específica por la Dirección Académica. El corpus no fue modificado por esta tarea.

**21.2 Tensión documental en el dictamen académico de C5 sobre `mahlertricontinental`** — ya documentada en detalle en §13.2. Dos secciones del mismo dictamen ratificado (§8 y §10) afirman cosas distintas sobre si existe o no un caso directo C5/C8. No se resuelve aquí.

**21.3 Corrección de título de `benedictykokken_haitiexception` nunca sincronizada al corpus público.** El lote A02 (`024bb41`) aprobó corregir el título heredado de *"...Anthropology and the Predicaments of Development"* a *"...Anthropology and the Predicament of Narrative"* (`correcciones_aprobadas.t`). El registro base en `datos-atlas.json` sigue mostrando el título original sin corregir. A diferencia de `chande` y `esquiva`, esta entrada no lleva marca de `procedencia_verificada: false` ni fue nombrada en el commit de sincronización 1.16.1 — es, por tanto, una discrepancia de menor severidad (una sincronización pendiente, no un estado en disputa), pero se documenta igualmente porque afecta el título con el que la obra se identifica.

**21.4 `chande` no tiene `lenguas_publicacion` poblado** pese a `revision.estado: "confirmada"` — ver §18. Vacío de datos, no se completa por inferencia.

---

## 22. Preguntas para la Dirección Académica

Numeradas para facilitar su resolución. Cada una presenta evidencia mínima y no sugiere una respuesta.

1. **Denominación.** ¿Se ratifica «Creolizaciones, traducciones y opacidades» / «Creolizations, translations and opacities», o requiere ajuste?
2. **Principio analítico.** ¿Se ratifica el criterio del guion (lenguas criollas; creolización como proceso; traducción y sus límites; opacidad como derecho) tal como está formulado?
3. **Guion.** A diferencia de C7, no se encontró ninguna cifra del guion que el conteo directo no reprodujera (51 entradas, 22 % de `creolizacion`, verificado exacto). ¿Se conserva el guion sin corrección?
4. **Vía constitutiva.** Solo 5 de 10 confirmaciones llevan literalmente `"migración"` en su `proceso`, y solo 7 de 10 llevan la etiqueta heredada `creolizacion` (con solapamiento parcial entre ambos grupos, §6). ¿Se ratifica la migración del corpus heredado como vía principal, reconociendo una segunda vía de reclasificación por lectura editorial directa, como se hizo para C7?
5. **Caso `chande`.** Su identidad bibliográfica presenta la misma tensión documental que `esquiva` en C7 (§21.1). ¿Queda pendiente de verificación específica, con el mismo tratamiento que recibió `esquiva`?
6. **Candidatura histórica `chande`.** ¿Se mantiene sin revisión como C9 principal / C8 secundaria?
7. **Etiqueta heredada `creolizacion`.** ¿Se autoriza la lectura sistemática de las 43 entradas que la llevan y nunca pasaron por lote, considerando que una de las ocho ya procesadas (`londonoargonauts`) no produjo ningún rol en C8?
8. **Frontera C4/C8.** 4 casos, dirección mixta (2/2). ¿Existe base para fijar un criterio, o debe permanecer abierta?
9. **Frontera C9/C8.** 3 casos, dirección mixta (2/1), y el propio guion de C8 ya declara a C9 como "corriente más próxima" con una distinción de objeto ya escrita. ¿Es esa distinción suficiente para fijar un criterio, o hace falta más evidencia de caso?
10. **Frontera C7/C8.** 2 casos, unánimes (siempre C8 principal). El dictamen de C7 ya la dejó abierta desde su lado. ¿Se fija ahora un criterio desde C8, o permanece abierta también desde este lado?
11. **Frontera C5/C8.** Existe una tensión documental verificada dentro del propio dictamen de C5 (§13.2 y §21.2): su tabla de clasificaciones registra a `mahlertricontinental` como C5 principal/C8 secundaria, pero su análisis de frontera afirma que ningún caso así existe. ¿Cuál lectura debe prevalecer, o debe reabrirse esa sección del dictamen de C5?
12. **Fronteras sin casos (C1/C8, C2/C8, C3/C8, C6/C8, C10/C8).** ¿Se autoriza alguna lectura exploratoria dirigida a poner a prueba alguna de estas fronteras, o se dejan completamente abiertas por ahora?
13. **Falsos positivos y señal ambigua (§12).** ¿Se formaliza alguna regla sobre el uso no discriminante de "criollo"/"traducción"/"transparencia", análoga a la que se fijó para "autoridad" en C7?
14. **Universo exploratorio.** ¿Se autoriza la lectura sistemática de las 63 entradas nunca procesadas (§16)?
15. **Fenómenos vírgenes.** ¿Se autoriza la lectura de las 34 anclas de fenómeno todavía vírgenes (§14), incluidas las de los dos fenómenos exclusivos de C8?
16. **Título de `benedictykokken_haitiexception`.** La corrección aprobada en A02 nunca se sincronizó al corpus público (§21.3). ¿Se autoriza esa sincronización puntual, o se deja pendiente junto con las demás discrepancias?

---

## 23. Límites del expediente

Este expediente:

- no ratifica la denominación de C8;
- no ratifica el guion ni fija principio analítico;
- no reclasifica ninguna de las 10 obras con rol confirmado en C8;
- no crea ninguna candidatura nueva;
- no fija ningún criterio de frontera — donde transcribe un antecedente ya ratificado desde otra corriente (C7, C5), lo señala expresamente como antecedente ajeno, no como criterio propio de C8, y en el caso de C5 documenta además la tensión interna de ese mismo antecedente sin resolverla;
- no resuelve la identidad bibliográfica de `chande` ni la de `esquiva`;
- no modifica `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` ni ningún archivo de lote (`piloto`, S01, A01, A02; ni `*-config.json` ni `*-generado.json`);
- no ejecuta migraciones ni generadores;
- no siembra bibliografía nueva;
- no reabre C1–C7;
- no redacta el dictamen académico de C8;
- no avanza a C9: no crea `expediente-evidencia-c9.md` ni ningún documento de C9, no inspecciona C9 para preparar decisiones y no inicia su clasificación ni su siembra.

