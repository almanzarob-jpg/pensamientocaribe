# LECTURA Y CONTRASTE ACADÉMICO — `atkinsonearliest`

**ATLAS 2.0 · Pensamiento Caribe — Etapa 2.3F — Lote P2**
**Fase:** lectura académica dirigida (SIN decisión de clasificación)
**Estado documental de entrega:** `LISTO_PARA_DECISION` (justificado en §26)

**Estándar de evidencia usado en todo el documento:**
`EVIDENCIA_DIRECTA` (constatado en el texto leído) · `INFERENCIA_CONTROLADA` (deducción explícita a partir de evidencia directa) · `METADATA_HEREDADA` (dato tomado de `datos-atlas.json` sin verificación textual propia) · `ANTECEDENTE_CONCEPTUAL` (precursor conceptual genuino, sin proyectar categoría posterior a 2006) · `POR_CORROBORAR` (hipótesis abierta, pendiente de evidencia adicional).

---

## 1. Identificación bibliográfica

| Campo | Heredado (`datos-atlas.json`) [`METADATA_HEREDADA`] | Verificado desde el objeto físico [`EVIDENCIA_DIRECTA`] |
|---|---|---|
| Título | *The Earliest Inhabitants: The Dynamics of the Jamaican Taíno* | Coincide exactamente (portada y página de derechos). |
| Editora | Lesley-Gail Atkinson (ed.) | Coincide. Volumen **editado**, no monografía de autor único: 14 capítulos, ~15 autores/as distintos/as (ver §5, §8). |
| Año | 2006 | Coincide (página de derechos: "© 2006", "Published 2006"). |
| Editorial | — (no consta como campo propio) | University of the West Indies Press, Jamaica. |
| Lugar (`l`) | jamaica | Confirmado (§18). |
| Tradición (`tr`) | anglófono (Jamaica) | Confirmado: obra íntegra en inglés, autores/as mayoritariamente radicados en Jamaica/UWI, con contribuciones de arqueólogos angloparlantes de EE. UU./Reino Unido. |
| Fenómenos (`f`) | memoria, colonialidad | Ambos confirmados textualmente (ver §10, C1 y C9). |
| Apunte (`ap`) heredado | "Arqueología taína hecha desde Jamaica... contraparte insular del trabajo de Whitehead sobre los caribes del continente" | El paralelismo con Whitehead es una lectura editorial razonable pero **no se verifica dentro de esta obra**: Whitehead no aparece citado en las secciones leídas. Se marca como `INFERENCIA_CONTROLADA` heredada, no como hallazgo propio. |

---

## 2. Fuente física y verificación bibliográfica

Localizado en `Biliografia /` (carpeta hermana del repositorio): *"The earliest inhabitants : the dynamics of the Jamaican Taíno -- edited by Lesley-Gail Atkinson -- University of the West Indies Press, Jamaica, 2006 -- isbn13 9781435689626 -- ... -- Anna's Archive.pdf"*. Copiado a nombre simplificado, verificado con `pdfinfo` y `pdftotext -layout`.

`pdfinfo`: Title "The Earliest Inhabitants: The Dynamics of the Jamaican Taino"; Author "Lesley-Gail Atkinson"; Subject "ISBN-13: 9789766401498"; 232 páginas; no cifrado; PDF 1.6. **[`EVIDENCIA_DIRECTA`]**

**Hallazgo bibliográfico — discrepancia de ISBN (tres valores distintos para el mismo objeto):**

1. Nombre de archivo: `9781435689626` (prefijo 978-1-4356-…, típico de reimpresiones bajo demanda tipo BiblioLife, no de la edición original UWI Press).
2. Metadato PDF (campo Subject): `9789766401498`.
3. Página de derechos impresa (verificada por lectura directa): `ISBN: 976-640-149-7`.

El valor (2) y el valor (3) son casi coincidentes (976-640-149-**7** en ISBN-10 vs. 978-976-640-149-**8** en el metadato, una diferencia solo en el dígito de control), lo que sugiere una única edición UWI Press con una posible errata de transcripción entre ambos. El valor (1), en cambio, corresponde a un bloque editorial distinto, compatible con una reimpresión facsímil/POD de un tercero, no con la imprenta original. **`EVIDENCIA_DIRECTA`** de la discrepancia; **`POR_CORROBORAR`** cuál explicación exacta es correcta. No se modifica ningún campo del corpus por este hallazgo.

---

## 3. Determinación de extractibilidad / OCR

A diferencia de `wynterblackmetamorphosis` (fotocopia escaneada, requirió OCR), este es un **PDF digital nativo**: texto extraíble directamente y con alta fidelidad mediante `pdftotext -layout`, sin necesidad de capa OCR. **[`EVIDENCIA_DIRECTA`]**

---

## 4. Método de lectura aplicado

Lectura mínima dirigida: apertura (Prefacio + Introducción), cierre (Cap. 14, último capítulo de contenido antes de Referencias), núcleo argumental identificado mediante mapeo de la estructura editorial + verificación cualitativa de un barrido léxico completo sobre el texto íntegro (232 páginas), seguida de lectura completa de los capítulos que el barrido léxico y el índice señalaron como más argumentativamente relevantes para C1–C10 (Caps. 1, 5, 10, 12, 14). Se aplica en todo momento la regla del propio encargo: *"la frecuencia nunca sustituye la lectura"* — todo conteo léxico fue verificado con lectura de contexto antes de ser usado como evidencia.

---

## 5. Estructura de la obra

Volumen editado, 14 capítulos + Introducción, organizados en 4 secciones **[`EVIDENCIA_DIRECTA`, tabla de contenidos]**:

- **Sección 1 — Assessment and Excavation of Taíno Sites** (Caps. 1–5): historiografía disciplinaria (Cap. 1, Keegan & Atkinson); informes técnicos de excavación de sitios (Caps. 2–4: Kingston, Chancery Hall, Green Castle); amenazas del desarrollo inmobiliario/infraestructural sobre sitios taínos (Cap. 5, Richards).
- **Sección 2 — Taíno Exploitation of Natural Resources** (Caps. 6–8): historia natural de Jamaica, vegetación, subsistencia (no leídos en su totalidad; ver §6).
- **Sección 3 — Analysis of Taíno Archaeological Data** (Caps. 9–12): petrografía, cerámica taína, "Redware" jamaicano, y cerámica del período post-contacto (Cap. 12, Woodward — leído completo).
- **Sección 4 — Taíno Art Forms** (Caps. 13–14): petroglifos (no leído completo); zemís, árboles y paisajes simbólicos (Cap. 14, Saunders & Gray — leído completo, capítulo de cierre).

El Prefacio (Atkinson) explicita el propósito editorial: corregir el desconocimiento público y la fama internacional de la arqueología jamaicana como "agujero negro" (*black hole*), reivindicar una tradición de investigación local con más de un siglo de historia, y ofrecer un volumen colectivo — no una monografía de tesis única. **[`EVIDENCIA_DIRECTA`]**

---

## 6. Lectura mínima realizada — alcance exacto

**Leído en su totalidad (7 de 15 secciones: Prefacio + Introducción + 5 capítulos):**
Prefacio · Introducción · Cap. 1 (*The Development of Jamaican Prehistory*) · Cap. 5 (*The Impact of Land-Based Development on Taíno Archaeology in Jamaica*) · Cap. 10 (*Jamaican Taíno Pottery*) · Cap. 12 (*Taíno Ceramics from Post-Contact Jamaica*) · Cap. 14 (*Zemís, Trees and Symbolic Landscapes*).

**No leídos en su totalidad (Caps. 2, 3, 4, 6, 7, 8, 9, 11, 13):** revisados solo por título, ubicación en el índice y verificación cualitativa puntual del barrido léxico donde aplicable. Son, según su propio título y según el barrido léxico global, capítulos técnico-descriptivos (informes de excavación de sitio, historia natural/vegetación, petrografía, tipología cerámica, petroglifos) sin señal léxica de contener un giro argumentativo distinto al ya capturado en los capítulos leídos completos. Esto se documenta como límite metodológico explícito, no como omisión oculta (ver §27).

**Criterio de selección de "secciones relevantes":** se priorizaron capítulos identificados, por apertura+cierre+barrido léxico, como los de mayor carga interpretativa (frente a los predominantemente técnico-descriptivos): Cap. 5 (única discusión sostenida de patrimonio/destrucción de sitios en el presente), Cap. 10 (contiene el único pasaje explícito sobre persistencia taína vía integración con cimarrones), Cap. 12 (única discusión sostenida de la sociedad colonial, encomienda, mestizaje/aculturación), Cap. 14 (capítulo de cierre, único desarrollo sostenido de cosmología/espiritualidad taína y su posible continuidad afrocaribeña).

---

## 7. Problema / objeto / tesis reconstruidos

**Advertencia metodológica previa:** al ser un volumen editado multiautor, no existe una "tesis" única en el sentido de una monografía. Se reconstruye (a) el problema/propósito editorial explícito y (b) el objeto empírico común a los 14 capítulos, sin forzar una tesis unificada que el texto mismo no sostiene. **[`INFERENCIA_CONTROLADA`]**

- **Problema editorial explícito** (Prefacio + Introducción): la arqueología taína jamaicana ha sido marginada, subpublicada y mal representada internacionalmente ("agujero negro"), pese a poseer una tradición investigativa local sustancial desde el siglo XIX. **[`EVIDENCIA_DIRECTA`]**
- **Objeto empírico común:** el registro arqueológico de las poblaciones taínas prehispánicas de Jamaica (cronología, cerámica, sitios, iconografía, cosmología) y, en un número menor de capítulos, su destrucción/amenaza contemporánea (Cap. 5) y su posible persistencia poscontacto (Caps. 10, 12).
- **Tesis/argumento editorial (no de tesis única sino de propósito colectivo):** Jamaica posee una cultura taína ("Western Taíno") autónoma y bien documentable, cuyo reconocimiento académico e institucional está pendiente; el volumen busca consolidar y visibilizar esa investigación. **[`EVIDENCIA_DIRECTA`]**
- **Mecanismo:** excavación arqueológica, análisis de artefactos (tipología cerámica, petrografía, fauna), investigación etnohistórica/archivística comparada, y (Cap. 5) análisis de política patrimonial.
- **Actores:** poblaciones taínas (Ostionoide → Meillacoide → "Taíno" propiamente dicho); colonizadores españoles (Esquivel, Garay, sistema de encomienda); instituciones/investigadores jamaicanos y extranjeros (ASJ, JNHT, UWI); de forma acotada, cimarrones jamaicanos y poblaciones afrojamaicanas; agencias estatales y desarrolladores contemporáneos (Cap. 5).
- **Conceptos propios de la obra** (no heredados del corpus, identificados en la lectura): *"Western Taíno"* (frente al término colonial "sub-Taíno"); *"archipelagic view"* (Watters 1997, citado en Cap. 1 como marco emergente frente al enfoque insular aislado); *"acculturation"* (definición explícita citada de Esteva-Fabregat 1995 en Cap. 12); *"syncretic Hispanic–Indian ware"* / *"New Seville ware"* (Cap. 12, categoría cerámica material concreta); *"cultural fusion"* (frase propia del Cap. 10, no "creolización"); *"sacred brilliance"* (Cap. 14, marco comparativo amazonianista de la simbología de los zemís). **[`EVIDENCIA_DIRECTA`]**

---

## 8. Barrido léxico (texto íntegro, 232 páginas / 77.694 palabras) con verificación cualitativa

| Categoría | Términos con conteo relevante | Verificación cualitativa |
|---|---|---|
| C1 | indigenous (28), conquest (8), coloniz- (6), survival (5) | **[`EVIDENCIA_DIRECTA`]** confirmados como uso analítico real (colonización española, conquista, supervivencia indígena), concentrados en Introducción, Cap. 1, Cap. 12. |
| C2 | slave/slavery (7), plantation (4), trade (11) | **[`EVIDENCIA_DIRECTA`]** "slave" refiere casi exclusivamente a mano de obra indígena forzada bajo encomienda (Cap. 12), no a trata atlántica africana ni a plantación azucarera (la obra termina su relato colonial en 1534, antes del período de plantación inglesa en Jamaica, que comienza en 1655). |
| C3 | maroon (4), flight (1) | **[`EVIDENCIA_DIRECTA`]** un pasaje explícito y significativo (Cap. 10, cierre): supervivencia taína vía integración con cimarrones jamaicanos (Agorsah 1994; Wilson 1997a). Único, no desarrollado más allá de ese párrafo. |
| C4 | labour (11) | Verificado: "labour" refiere a trabajo forzado colonial (encomienda, Cap. 12) o a mano de obra arqueológica genérica, **no** a desposesión postplantación en sentido histórico-laboral. **No confirma C4.** |
| C5 | sea (39), maritime (4), archipelag- (2) | Verificado: "sea" es casi íntegramente uso geográfico descriptivo (Caribbean Sea, contextos geológicos), no un marco analítico de rutas/diáspora. **No confirma C5** como corriente estructurante. |
| C6 | environment (62), hurricane (1) | Verificado parcialmente: concentrado en capítulos de historia natural/vegetación (Caps. 6–7, no leídos completos) como telón de fondo de subsistencia, no como "ecologías/materialidades vivas" en sentido de agente histórico. El único "hurricane" es la deidad taína Guabancex (Cap. 14) — de naturaleza espiritual, no ecológica-material. |
| C7 | occupation (33) | **Verificado como FALSO POSITIVO casi total**: "occupation" es, en 33/33 casos revisados, el término técnico arqueológico de "ocupación de sitio" (habitación temporal-espacial de un yacimiento), no ocupación política/territorial ni soberanía. **No confirma C7.** |
| C8 | creole (2), syncret- (2) | "creole" aparece **únicamente en títulos bibliográficos citados** (Deagan 1983, Ewan 1991), nunca como categoría propia del volumen. "Syncretic" sí es uso propio y directo del Cap. 12 ("this style of syncretic Hispanic–Indian ware"). Ver §16 (anacronismo). |
| C9 | zemís (62), spirit (37), shaman (21), ritual (9), obeah (3) | **[`EVIDENCIA_DIRECTA`]** densidad léxica más alta de las diez corrientes, casi toda concentrada en el Cap. 14, con presencia secundaria en Cap. 12 (artefactos rituales) y Cap. 1 (menciones de cosmovisión vía petroglifos). |
| C10 | body/bodies (19), gender (2), fertility (1) | Verificado: "body/bodies" refiere mayoritariamente a restos óseos humanos o al "cuerpo" técnico de una vasija cerámica (uso arqueológico estándar), no a una teoría de corporalidad/parentesco/erótica. "Fertility" refiere a la diosa Atabey (mejor situado en C9). **No confirma C10** como corriente autónoma. |
| Anacronismo | racial capitalism, Black Atlantic, decoloniality, necropolitics, intersectionality, indigeneity | **0 apariciones** de cualquiera de estos términos. Confirmado: no hay proyección retroactiva de vocabulario post-2006. |

---

## 9. Control de las diez corrientes (presencia / función / intensidad / autonomía / prueba de retirada)

**C1 — Mundos indígenas, invasiones y persistencias**
Presencia: **fuerte**, transversal. Función: **vertebradora** — organiza el propósito editorial completo (Prefacio, Introducción) y el contenido de al menos 8 de 14 capítulos de forma directa. Intensidad: alta en Introducción, Cap. 1, Cap. 12; moderada en Cap. 5, Cap. 10. Autonomía: **alta**, no depende de ninguna otra corriente para sostenerse. Prueba de retirada: **DESTRUCTIVA** — si se retira C1, la obra pierde su razón de ser editorial completa. **[`EVIDENCIA_DIRECTA`]**

**C2 — Trata, esclavización y plantación**
Presencia: acotada, subordinada. Función: de apoyo/mecanismo dentro del relato de invasión (encomienda como forma de trabajo forzado indígena, no trata atlántica africana ni plantación). Intensidad: moderada, solo en Cap. 12. Autonomía: **nula** — no sostiene un argumento propio distinto del de C1. Prueba de retirada: **NO_ESTRUCTURAL** (se pierde detalle de mecanismo, no el argumento). **No sobrevive como corriente autónoma.**

**C3 — Fuga, cimarronaje, emancipación y prácticas de libertad**
Presencia: **puntual pero explícita** (un párrafo, Cap. 10, cierre). Función: cita de apoyo a la tesis de persistencia indígena, no desarrollo propio. Intensidad: baja (una sola mención, sin desarrollo posterior en la obra). Autonomía: nula. Prueba de retirada: **LIMPIA** (el párrafo desaparece sin afectar el resto de la obra). **No sobrevive como corriente estructurante**, aunque se documenta como hallazgo genuino, no descartable del expediente (posible pista para trabajos futuros sobre Agorsah/arqueología cimarrona, que **no** es objeto de este volumen).

**C4 — Postplantación, trabajo y desposesión**
Presencia: **aparente pero engañosa**. El Cap. 5 (desarrollo inmobiliario contemporáneo que destruye sitios taínos) podría leerse superficialmente como "desposesión", pero el objeto real es gestión patrimonial/arqueológica del siglo XX-XXI, no desposesión laboral postplantación de poblaciones racializadas. Función: no aplica en el sentido de C4. Intensidad: control expresamente negativo. Prueba de retirada: **LIMPIA**. **No confirma C4** — se documenta explícitamente como corriente evaluada y descartada, no omitida.

**C5 — Rutas, diásporas y territorios acuosos**
Presencia: débil, de contexto (rutas oceánicas de exploración europea mencionadas en Cap. 12 como telón de fondo económico). Función: no estructurante. Prueba de retirada: **LIMPIA**. **No sobrevive.**

**C6 — Huracanes, ecologías y materialidades vivas**
Presencia: débil-ambigua, concentrada en capítulos no leídos en su totalidad (6–7). El único elemento fuerte (Guabancex, deidad-huracán) es de naturaleza espiritual y se reclasifica bajo C9. Prueba de retirada: **LIMPIA**, con la salvedad honesta de que los Caps. 6–7 no fueron leídos en su totalidad (ver §27). **No sobrevive con la evidencia disponible.**

**C7 — Soberanías, fronteras y ocupaciones**
Presencia: **falso positivo léxico verificado** ("occupation" = término técnico arqueológico). No hay discurso de soberanía indígena, frontera política o disputa territorial en sentido C7. Prueba de retirada: **LIMPIA.** **No sobrevive.**

**C8 — Creolizaciones, traducciones y opacidades**
Presencia: real pero **localizada y terminológicamente distinta** — "syncretic ware" y "acculturation" (Cap. 12), "cultural fusion" (Cap. 10). Función: de apoyo evidencial a C1, no de argumento autónomo. Intensidad: moderada-alta dentro del Cap. 12 específicamente; ausente en el resto del volumen. Autonomía: **baja-moderada** — podría leerse como argumento propio dentro de ese capítulo, pero el volumen no lo trata como tal. Prueba de retirada: **NO_ESTRUCTURAL** a nivel de la obra completa; **SUSTANCIAL_MENOR** a nivel del Cap. 12 específicamente. Ver §16 sobre la distinción "acculturation" ≠ "creolización".

**C9 — Archivos vivos, espiritualidades y saberes transmitidos**
Presencia: **fuerte**, concentrada casi enteramente en el Cap. 14 (con apoyo en Cap. 12 y Cap. 1). Función: **vertebradora del Cap. 14 específicamente** (argumento completo, autónomo, republicado originalmente en *Antiquity* 1996 como pieza independiente), secundaria en el resto de la obra. Intensidad: la más alta de las diez corrientes en densidad léxica. Autonomía: **alta dentro de su capítulo** — el argumento de Saunders y Gray no depende de C1 para sostenerse. Prueba de retirada: **DESTRUCTIVA para el Cap. 14**; **SUSTANCIAL** para el volumen completo (se pierde ~7% de las páginas y el capítulo de cierre). **[`EVIDENCIA_DIRECTA`]**

**C10 — Cuerpos, parentescos y eróticas**
Presencia: débil, mayoritariamente falso positivo léxico (huesos/vasijas). El material sobre uniones mixtas hispano-indígenas (Cap. 12) está mejor explicado por C1/C8 que por una teoría propia de corporalidad/parentesco. Prueba de retirada: **LIMPIA.** **No sobrevive.**

**Corrientes que sobreviven la prueba de retirada:** C1 (dominante), C9 (secundaria fuerte, autónoma dentro de su capítulo), C8 (secundaria débil, con reserva conceptual).

---

## 10. Prueba de dominancia

Dado que sobreviven 2+ corrientes (C1, C9, y en menor medida C8), se aplica la prueba de dominancia:

- **C1 vs. C9:** a nivel de volumen completo, **A>B** (C1 organiza 13 de 14 capítulos; C9 organiza 1). A nivel del Cap. 14 específicamente, la relación se invierte (C9 es autónoma y no depende de C1 en ese capítulo). Se documenta como **RELACIÓN_MIXTA**: dominancia global de C1, dominancia local de C9 dentro de su propio capítulo.
- **C1 vs. C8:** **A>B** claro — el material C8 (Cap. 12) es evidencia instrumental del argumento de persistencia/invasión de C1, no un argumento paralelo independiente.
- **C9 vs. C8:** **A>B** — C9 tiene mayor densidad textual, mayor autonomía argumental (capítulo republicado independientemente) y no depende de una reserva terminológica tan fuerte como la que exige C8 en este texto.

---

## 11. Controles bilaterales pertinentes

**C1↔C9:** pertinente y ya cubierto en la prueba de dominancia — no hay tensión definicional entre ambas corrientes en el texto; coexisten de forma aditiva (capítulos distintos), no dialéctica.
**C1↔C8:** pertinente — ver reserva conceptual en §16. No se detecta necesidad de otros controles bilaterales (C2↔C3, C4↔C7, etc.) porque las corrientes correspondientes no sobrevivieron individualmente la prueba de retirada.

---

## 12. FRONTERA_CONSTITUTIVA

**NO.** No hay evidencia textual de que dos corrientes se constituyan mutuamente como límite argumental dentro de esta obra. La coexistencia de C1 y C9 responde a la estructura de compilación editorial (14 capítulos independientes de distintos autores especializados), no a una tensión dialéctica interna construida por un argumento unificado. **[`EVIDENCIA_DIRECTA`/`INFERENCIA_CONTROLADA`]**

---

## 13. SINTESIS_MULTICORRIENTE

**NO.** No existe, ni en la Introducción ni en un capítulo de cierre editorial, una síntesis explícita que integre C1 y C9 (o cualquier otro par) en un argumento único. El propio Prefacio describe la obra como compilación de proyectos de investigación independientes, no como argumento sintético. **[`EVIDENCIA_DIRECTA`]**

---

## 14. VACÍO_TAXONÓMICO_POSIBLE

Control obligatorio realizado tras agotar las diez corrientes. A diferencia de `wynterblackmetamorphosis` (donde ninguna corriente vigente capturaba adecuadamente el término propio del texto, "indigenización"), aquí **C1** ("mundos indígenas, invasiones y persistencias") es un ajuste terminológico y conceptual muy preciso para el argumento dominante de la obra, y **C9** ("archivos vivos, espiritualidades y saberes transmitidos") ajusta igualmente bien al argumento del Cap. 14 (espiritualidad + transmisión/continuidad viva). No se fuerza ninguna categoría. **VACÍO_TAXONÓMICO_POSIBLE = NO.**

---

## 15. Control de anacronismo

Verificado mediante barrido léxico de la lista explícita del encargo (racial capitalism, Black Atlantic, creolización, diáspora, decolonialidad, necropolítica, interseccionalidad, soberanía, indigeneidad, ecología): **0 apariciones** de vocabulario analítico posterior a 2006 dentro del cuerpo argumental propio de la obra. El único término de la lista con apariciones (*creole*) aparece exclusivamente en **títulos bibliográficos citados** de otros autores (Deagan 1983; Ewan 1991), nunca como categoría analítica propia de este volumen — se registra como `ANTECEDENTE_CONCEPTUAL` de tercero, no como uso propio.

**Reserva conceptual necesaria (paralela a la aplicada en `wynterblackmetamorphosis`):** el volumen sí posee un concepto propio y explícitamente definido para la mezcla cultural colonial — **"acculturation"** (Cap. 12, citando la definición de Esteva-Fabregat 1995: *"a phenomenon resulting from the addition to an already existent cultural system of one or various elements of another... without necessarily transforming its political or social structure"*) — y una frase propia distinta, **"cultural fusion"** (Cap. 10). Ninguna de las dos equivale a "creolización" en el sentido en que la corriente C8 la usa en este proyecto (tradición Brathwaite/Glissant). Se recomienda que, si se aplica C8 a este caso, se documente expresamente: **`ACULTURACIÓN ≠ CREOLIZACIÓN`** — son conceptos de genealogías disciplinarias distintas (antropología cultural norteamericana de asimilación, vs. teoría caribeña de la creolización), aunque ambos aborden la mezcla cultural. **[`EVIDENCIA_DIRECTA` + `ANTECEDENTE_CONCEPTUAL`]**

---

## 16. Función de raza / categorías poblacionales

Control aplicable. Dos hallazgos:

1. **Tensión terminológica interna Arawak/Taíno**: la Introducción fija explícitamente una corrección editorial: "Taíno" es el etnónimo correcto (según Rouse), "Arawak" es un error histórico heredado. Sin embargo, varios capítulos individuales conservan "Arawak" en su propio título (Cap. 8: *"Early Arawak Subsistence Strategies"*; Cap. 9: *"...Some Arawak Rock Artefacts"*) — una inconsistencia interna de la propia compilación, no corregida uniformemente entre los capítulos originalmente redactados en distintos momentos. **[`EVIDENCIA_DIRECTA`]**
2. **Triada "race, class and gender"** citada explícitamente (Cap. 12, vía Paynter 2000) como marco analítico para la sociedad colonial de Sevilla la Nueva, sin desarrollo propio extenso más allá de la cita. Se registra como presencia real pero no desarrollada. **[`EVIDENCIA_DIRECTA`, intensidad baja]**
3. El lema nacional jamaicano *"Out of Many, One People"* se cita (Cap. 1) en el contexto de la diversificación de la arqueología jamaicana hacia lo afrojamaicano, español y judío — referencia ideológico-estatal mencionada, no analizada en profundidad por el texto mismo.

---

## 17. Territorialidad — reconstruida vs. heredada

Heredado: `l: "jamaica"` **[`METADATA_HEREDADA`]**. Reconstrucción: **confirmada sin discrepancia**. El volumen es íntegramente jamaicano en su objeto, con referencias comparativas puntuales a Hispaniola, Cuba, Puerto Rico (contexto taíno regional) y, en el Cap. 14, comparaciones etnográficas amazónicas (marco interpretativo, no objeto territorial). **[`EVIDENCIA_DIRECTA`]**

---

## 18. Temporalidad — reconstruida vs. heredada

Heredado: `y: "2006"` **[`METADATA_HEREDADA`]** — confirmado como año de publicación (página de derechos), sin discrepancia en ese punto específico.

Sin embargo, el **período estudiado** por la obra es mucho más amplio que una fecha única: prehispánico (c. 650–1500 d.C., grueso del volumen), colonial temprano/poscontacto (c. 1509–1534, Cap. 12), y contemporáneo (años 1990–2002, Cap. 5, sobre amenazas de desarrollo actuales a los sitios). El Cap. 14 fue además publicado originalmente en 1996 (*Antiquity*) y reeditado en este volumen de 2006. Se documenta como limitación de fidelidad del campo `y` (año único) frente a una compilación multitemporal — no como error, sino como característica estructural de los volúmenes editados que el esquema actual del corpus no captura. **[`INFERENCIA_CONTROLADA`]**

---

## 19. Relaciones heredadas en `datos-atlas.json` (búsqueda exhaustiva)

Búsqueda sobre las 588 relaciones del corpus: **3 relaciones** involucran a `atkinsonearliest`, todas tipo `resonancia` (ninguna `cita` directa):

1. **`keeganhofman → atkinsonearliest`** — fuente: *"Keegan y Hofman usan el volumen jamaiquino de Atkinson para el taíno insular. Cita verificada en el ejemplar (23 menciones)."* La verificación de las 23 menciones fue realizada, según el propio corpus, sobre el ejemplar de Keegan y Hofman — **no** sobre `atkinsonearliest` en esta lectura (que no es objeto de esta tarea). Se mantiene como `METADATA_HEREDADA` con alta plausibilidad, `POR_CORROBORAR` desde este lado del vínculo.
2. **`bollandbelize → atkinsonearliest`** — fuente: *"Comparten el fenómeno Colonialidad. Por corroborar el vínculo directo."* Vínculo por etiqueta de fenómeno compartido, no por cita textual. Esta lectura **confirma unilateralmente** que "colonialidad" es, en efecto, un contenido real, específico y bien evidenciado en `atkinsonearliest` (Caps. 5 y 12) — corroboración parcial (un solo lado del vínculo), se mantiene `POR_CORROBORAR` en su totalidad.
3. **`atkinsonearliest → whiteheadtiger`** — fuente: *"Comparten el fenómeno Memoria y espiritualidad. Por corroborar el vínculo directo."* Esta lectura **confirma unilateralmente y con fuerza** que "memoria y espiritualidad" es, en efecto, un contenido denso y sustantivo en `atkinsonearliest` (Cap. 14 especialmente). No se reabre `whiteheadtiger` (caso ya cerrado, en la lista NO-TOCAR) para verificar el otro lado del vínculo. Se mantiene `POR_CORROBORAR` en su totalidad, con la nota de que el lado `atkinsonearliest` del vínculo queda ahora mejor evidenciado que antes de esta lectura.

---

## 20. Comparación final: metadata heredada vs. hallazgos de lectura

| Campo | Heredado | Hallazgo de lectura | Discrepancia |
|---|---|---|---|
| `t` (título) | *The Earliest Inhabitants...* | Confirmado exacto | Ninguna |
| `a` (autor) | Lesley-Gail Atkinson (ed.) | Correcto como editora, pero **no refleja el carácter multiautor** (~15 autores/as de capítulo) | Limitación de esquema, no error |
| `y` (año) | 2006 | Confirmado como año de publicación; período estudiado es multitemporal (§18) | Matiz, no error |
| `f` (fenómenos) | memoria, colonialidad | Ambos confirmados con evidencia textual sólida | Ninguna |
| `l` (lugar) | jamaica | Confirmado | Ninguna |
| `tr` (tradición) | anglófono (Jamaica) | Confirmado | Ninguna |
| `ap` (apunte) | paralelismo con Whitehead | Razonable pero no verificable dentro de este volumen | Sin verificar |
| ISBN (no es campo del corpus) | — | Discrepancia de tres valores distintos (§2) | Hallazgo bibliográfico nuevo, documentado, no corregido en corpus |

---

## 21. Arquitecturas de clasificación posibles (hasta 3, sin decidir)

**Arquitectura A — C1 única.** Clasificar solo bajo C1 (mundos indígenas, invasiones y persistencias); tratar el material de C9 (Cap. 14) y C8 (Cap. 12) como evidencia interna de apoyo, no como corrientes clasificadas. Ventaja: simplicidad, fiel a la dominancia estructural de C1. Riesgo: subestima la autonomía real y el peso textual del Cap. 14.

**Arquitectura B — C1 principal + C9 secundaria fuerte.** Estructura análoga al precedente `wynterblackmetamorphosis` (C8 principal/C4 secundaria fuerte). Aquí: C1 principal (dominante en 13/14 capítulos) + C9 secundaria fuerte (autónoma y densa en el capítulo de cierre). Ventaja: reconoce el peso real y semiautónomo del argumento de Saunders y Gray. Riesgo: una obra editada podría no merecer el mismo tratamiento "secundaria fuerte" que una monografía de autor único, dado que C9 es obra de solo 2 de ~15 autores del volumen.

**Arquitectura C — C1 principal, C8 y C9 documentadas en el expediente sin clasificar formalmente.** La más conservadora: clasificar solo C1; registrar C8 (con la reserva conceptual acculturación≠creolización) y C9 (concentrada en un único capítulo) como hallazgos de expediente, no como resoluciones de clasificación — replicando cómo `VACÍO_TAXONÓMICO_POSIBLE` fue "mantenido como hallazgo de expediente, no adoptado como resolución" en `wynterblackmetamorphosis`.

---

## 22. Pregunta(s) exacta(s) para Dirección Académica

1. **¿Debe una corriente que es autónoma y textualmente densa dentro de un único capítulo de una obra editada multiautor (C9 en el Cap. 14, ~7% del volumen) ser elegible para clasificación secundaria formal, o el criterio de "secundaria fuerte" debe reservarse para corrientes que atraviesan una porción mayor del volumen, incluso en compilaciones?**
2. **¿Debe aplicarse C8 a este caso dado que el texto usa "acculturation" y "cultural fusion" como conceptos propios, expresamente distintos de "creolización" en su genealogía disciplinaria — y si se aplica, debe llevar la misma reserva conceptual literal que se exigió en `wynterblackmetamorphosis` para "indigenización ≠ creolización"?**
3. **¿Corresponde documentar formalmente en el expediente la discrepancia de ISBN de tres vías (§2), o se considera un hallazgo bibliográfico menor sin relevancia para la clasificación?**

---

## 23. Verificación NO-TOCAR

Confirmado explícitamente: **no se reabrió** `wynterblackmetamorphosis`, `pinedashipwrecked`, `cosgrovegarifuna`, `schwartz_seaofstorms`, `womenancestors`, `mintzarea`, `pricemars`, ni ningún otro caso P2 ya cerrado. **No se modificó** `datos-atlas.json`, `catalogos-atlas-2.json`, `cola-lectura-pendiente-atlas-2.md`, ni ningún archivo de infraestructura del proyecto. No se creó ficha de decisión ni expediente de evidencia — solo el archivo de lectura único autorizado.

---

## 24. Estado Git

**Antes de esta lectura** (verificado por `mcp__remote-devices__device_bash`):
```
git status --short
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
HEAD = origin/feat/atlas-2-etapa-1-integrada = 28cf799145e4aa9fcef0f4393a1d2891c9b7100f
```
Los dos archivos no rastreados son artefactos históricos ya conocidos de sesiones/casos anteriores (no relacionados con `atkinsonearliest`); no se tocan ni se explican de nuevo aquí más allá de constatar que siguen presentes sin cambios.

**Después de la entrega de este archivo:** se añadirá únicamente `lectura-atkinsonearliest-p2-etapa-2-3f.md` como archivo no rastreado adicional. **No se ejecuta `git add`, `git commit` ni `git push` en esta fase**, conforme a la instrucción explícita del encargo y a la convención ya establecida en este proyecto (la lectura se versiona junto con la decisión académica posterior, en un único commit conjunto, nunca sola).

---

## 25. Estado final y justificación

**`LISTO_PARA_DECISION`.**

Justificación: se completó una lectura mínima dirigida cubriendo apertura (Prefacio + Introducción), cierre (Cap. 14) y las secciones de mayor carga interpretativa identificadas mediante mapeo estructural y barrido léxico verificado cualitativamente sobre el texto íntegro (Caps. 1, 5, 10, 12). Las diez corrientes fueron evaluadas explícitamente, con pruebas de retirada documentadas para cada una. Se identificaron dos corrientes con evidencia sólida (C1 dominante, C9 secundaria fuerte y autónoma) y una tercera con evidencia real pero terminológicamente reservada (C8). Se descartaron explícitamente, con evidencia, las siete corrientes restantes (incluido un falso positivo léxico verificado en C7). El control de anacronismo, el control de raza/población, la reconstrucción de territorio/temporalidad y la búsqueda de relaciones heredadas se completaron íntegramente. Existe material suficiente para que Dirección Académica decida entre las arquitecturas presentadas (§21) y responda las preguntas exactas planteadas (§22).

---

## 26. Verificación anti-contaminación final

Confirmado: ningún archivo del corpus (`datos-atlas.json`, `catalogos-atlas-2.json`), ningún archivo de control (`cola-lectura-pendiente-atlas-2.md`, `esquema-datos-propuesto.json`) y ningún expediente de otro caso fue modificado durante esta tarea. El único archivo generado por esta tarea es el presente documento.

---

## 27. Limitaciones y advertencias residuales

1. Nueve de catorce capítulos (2, 3, 4, 6, 7, 8, 9, 11, 13) no fueron leídos en su totalidad — se evaluaron por título, ubicación estructural y barrido léxico global. Son, por su propio título y por el barrido léxico, capítulos técnico-descriptivos (informes de sitio, historia natural, petrografía, tipología cerámica, petroglifos) sin señal de contener un giro argumentativo distinto al ya documentado. Si Dirección Académica requiere certeza absoluta sobre la ausencia total de contenido C1–C10 adicional en esos nueve capítulos, correspondería solicitar `AMPLIACION_DIRIGIDA_NECESARIA` específicamente acotada a ellos.
2. La relación C9 (Cap. 14) recae específicamente en 2 de ~15 autores/as del volumen (Saunders y Gray) — su peso relativo frente al conjunto de la obra es una decisión de criterio editorial-académico, no un hecho que esta lectura pueda resolver por sí sola (de ahí la pregunta §22.1).
3. La discrepancia de ISBN (§2) no fue resuelta de forma concluyente; se documenta como hallazgo abierto.
