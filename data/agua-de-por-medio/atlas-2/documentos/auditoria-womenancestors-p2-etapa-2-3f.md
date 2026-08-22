# ETAPA 2.3F — P2 · AUDITORÍA Y CONTRASTE ACADÉMICO DE `womenancestors`

Atlas 2.0 · Pensamiento Caribe · Dirección Académica

**Naturaleza de este documento.** Tarea estrictamente probatoria. NO emite decisión académica, NO clasifica definitivamente, NO abre ninguna hipótesis nueva sobre `pinedashipwrecked` ni sobre ningún otro caso, NO modifica `lectura-womenancestors-p2-etapa-2-3f.md` (auditada, no alterada) ni ningún archivo del corpus. Audita la lectura ya existente sobre `Women and the Ancestors: Black Carib Kinship and Ritual` (Virginia Kerns, 1983), verifica sus controles adversariales, comprueba las relaciones heredadas señaladas por la instrucción y determina, con una ampliación mínima y dirigida, si el caso está listo para decisión.

---

## 0. Estado confirmado del repositorio

Verificación previa, solo lectura:

```
$ git branch --show-current
feat/atlas-2-etapa-1-integrada
$ git rev-parse HEAD
84d9df2489d939a54726c7b2efa7d2da1ab8ad70
$ git rev-parse origin/feat/atlas-2-etapa-1-integrada
84d9df2489d939a54726c7b2efa7d2da1ab8ad70
$ git status --short
?? PensamientoCaribeCuraduriaDigital.docx
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
?? data/agua-de-por-medio/atlas-2/documentos/lectura-womenancestors-p2-etapa-2-3f.md
$ git diff --stat
(sin salida)
$ git diff --name-only
(sin salida)
$ ls -la .git/index.lock
ls: cannot access '.git/index.lock': No such file or directory
```

Coincide exactamente con lo esperado por la instrucción: rama correcta, HEAD local = HEAD remoto (`84d9df2...`), `pinedashipwrecked` cerrado y versionado (los tres documentos de ese caso ya no aparecen como `??` — están dentro del commit `84d9df2`, "Documenta decisión académica sobre pinedashipwrecked"), y solo tres archivos no rastreados previos (`PensamientoCaribeCuraduriaDigital.docx`, `expediente-evidencia-c7.md`, `ficha-decision-c4.md`, `lectura-womenancestors-p2-etapa-2-3f.md`). `.git/index.lock` no está presente en esta ocasión. `pinedashipwrecked` no se reabre en ningún momento de esta tarea.

---

## 1. Identidad bibliográfica, territorio, población, período (reconstrucción de la lectura existente)

Reconstruido íntegramente a partir de `lectura-womenancestors-p2-etapa-2-3f.md` (apartados 1–4), sin alterar ese documento:

1. **Identidad bibliográfica:** Virginia Kerns, *Women and the Ancestors: Black Carib Kinship and Ritual*, University of Illinois Press, 1983. ISBN 0-252-00982-7, LCCN 82-2601, LC F1505.2.C3K47. Primera edición, prólogo de Nancie L. González. xv + 205 pp. de texto principal (hasta ~p. 280 con aparato).
2. **Autora:** Virginia Kerns (n. 1948).
3. **Edición:** primera, sin indicación de reediciones.
4. **Territorio:** Belice, distrito del sur del país, comunidad de mayoría Black Carib (garífuna).
5. **Población:** Black Carib (garífunas) de Belice.
6. **Período estudiado:** doble registro — histórico (s. XVII–XIX, antecedente) y etnográfico (trabajo de campo de la autora, sin fecha exacta declarada en las secciones leídas más allá del huracán de 1961 como marcador).
7. **Pregunta central:** qué principio cultural explica que las mujeres, y sobre todo las de mayor edad, ocupen la posición central tanto en el parentesco cotidiano como en el ritual funerario.
8. **Tesis:** "la responsabilidad femenina hacia los parientes lineales sirve como principio organizador del parentesco y el ritual de los Black Carib" — enunciada verbatim tanto al abrir la Introducción como al abrir la Conclusión.
9. **Metodología:** etnografía de campo (observación participante, entrevistas, casos), análisis de terminología de parentesco, análisis histórico documental para el capítulo de antecedentes.
10. **Estructura del libro:** Introducción (planteamiento) → cap. 2 (antecedentes históricos, explícitamente subordinado) → caps. 3–4 (contexto nacional, mercado laboral) → caps. 5–7 (autonomía personal, edad/género, terminología de parentesco) → cap. 8 (hogares y familias extensas) → caps. 9–10 (ritual funerario y organización ritual) → cap. 11 (conclusión).
11. **Capítulos realmente leídos (antes de esta auditoría):** Introducción completa (1–16), cap. 2 sustancial (17–39), cap. 7 sustancial (105–119), caps. 9–10 sustanciales (147–182), cap. 11/Conclusión sustancial (183–198), más verificación de palabra clave sobre el texto íntegro.
12. **Páginas realmente leídas:** ver punto anterior; caps. 3, 4, 5, 6 y 8 (pp. 40–146) **no** se habían leído completos — solo mediante la síntesis de la propia autora y palabra clave.
13. **Conceptos centrales:** responsabilidad femenina hacia parientes lineales; matrifocalidad (sentido preciso de R. T. Smith); maternidad como fuerza y protección; parentesco bilateral con sesgo femenino; ritual como dominio de mediación entre vivos y muertos.
14. **Candidaturas de corriente propuestas:** C10 (principal) y C9 (secundaria posible, con advertencia de proximidad a `FRONTERA_CONSTITUTIVA`).
15. **Corrientes descartadas:** C1, C2, C3, C4, C5, C6, C7, C8 — las ocho, cada una con razón de descarte documentada.
16. **Dudas dejadas abiertas:** si la relación C9/C10 es jerárquica (C10 > C9, hipótesis 1) o de coordinación bilateral irreductible (`FRONTERA_CONSTITUTIVA`, hipótesis 2); si el material ritual, pese a su extensión, alcanza siquiera el umbral de secundaria (hipótesis 3, más débil).
17. **Nivel de lectura declarado:** `LECTURA_DIRIGIDA_SUSTANCIAL`.

**Auditoría de este punto:** la reconstrucción es fiel al documento original; no se detecta ninguna discrepancia entre lo que el documento declara y lo que efectivamente contiene.

---

## 2. Pregunta académica central (sección 5 de la instrucción)

No se pregunta si el libro habla de garífunas —eso es un hecho no discutido—, sino qué problema organiza su argumento. La lectura existente y esta auditoría convergen en que el libro está organizado, en la voz explícita de la propia autora, por **parentesco y organización social** (C10), con **ancestralidad y ritual** (C9) como el dominio donde ese principio de parentesco se ejecuta. No hay evidencia de que indigeneidad/persistencia territorial, racialización, diáspora/movilidad, soberanía, creolización, economía/trabajo o religión-como-sistema-social organicen el argumento por derecho propio; todas aparecen como material contextual subordinado (ver apartado 3).

---

## 3. Contraste C1–C10 (auditado; se confirma o se matiza cada resultado de la lectura existente)

Se contrastaron de nuevo las diez corrientes contra la definición normativa vigente (`marco-academico-consolidado-atlas-2.md` §4–13), sin dar por buena automáticamente ninguna conclusión previa.

- **C1 — Mundos indígenas, invasiones y persistencias.** Evidencia a favor: cap. 2 narra resistencia/autonomía Black Carib frente a Gran Bretaña y la guerra de 1795–96. Evidencia en contra decisiva: la propia autora declara expresamente que ese capítulo se incluye "no en una búsqueda excesiva de holismo, sino para clarificar la naturaleza de los vínculos entre parientes femeninas" (p. 2) — subordinación explícita a C10, sin retoma en ningún capítulo posterior. **Función: contextual/incidental. Resultado: DESCARTADA.** *Confirmado; ver control especial en el apartado 4.*
- **C2 — Trata, esclavización y plantación.** El naufragio de un barco negrero es dato de origen (29 [lectura previa] / 22 [conteo de esta auditoría, `slave/slaves`] apariciones), no análisis del régimen esclavista como sistema. **Función: incidental. Resultado: DESCARTADA.** *Confirmado.*
- **C3 — Fugas, cimarronajes y emancipaciones.** Mismo material del cap. 2 (libertad frente a captores, resistencia armada hasta 1796), mismo patrón de subordinación explícita por la autora, sin retoma posterior. **Función: contextual/incidental. Resultado: DESCARTADA.** *Confirmado; ver control especial en el apartado 5.*
- **C4 — Postplantación, trabajo y desposesión.** El trabajo asalariado masculino (77 apariciones de `wage*` verificadas en esta auditoría) se encuadra explícitamente como condición que explica la necesidad de redes de ayuda mutua entre mujeres parientes, no como argumento autónomo. **Función: contextual. Resultado: DESCARTADA.**
- **C5 — Rutas, diásporas y territorios acuosos.** Una sola mención sustantiva ("the appearance of an ongoing diaspora," Introducción p. 6), usada como metáfora de fluidez residencial intra e inter-comunitaria, no como circulación transnacional organizada. **Función: incidental. Resultado: DESCARTADA.** *Confirmado; ver control especial en el apartado 6.*
- **C6 — Huracanes, ecologías y materialidades vivas.** El huracán de 1961 es marcador cronológico/infraestructural, no argumento ecológico. **Función: incidental. Resultado: DESCARTADA.**
- **C7 — Soberanías, fronteras y ocupaciones.** El conflicto de soberanía/autonomía de 1795–96 (cap. 2) es, de nuevo, material explícitamente subordinado por la autora al problema de parentesco; sin desarrollo capitular propio posterior. **Función: contextual/incidental. Resultado: DESCARTADA.**
- **C8 — Creolizaciones, traducciones y opacidades.** "Creole" aparece de forma dispersa (24 según la lectura previa; 16 según el conteo de palabra completa de esta auditoría — la diferencia es de método de conteo, no sustantiva) y designa en cada caso un grupo étnico *distinto* de Belice (afrodescendientes angloparlantes), usado comparativamente junto a "garífuna", "maya" y "mestizo"; no hay tratamiento de creolización como proceso, traducción u opacidad. **Función: incidental (falso positivo léxico por homonimia). Resultado: DESCARTADA.**
- **C9 — Archivos vivos, espiritualidades y saberes transmitidos.** Dos capítulos completos (9–10, pp. 147–182) dedicados a la secuencia ritual para los muertos, la posesión espiritual en el *dügü*, la mediación de chamanes y mujeres mayores, y la transmisión de música/danza/saber espiritual. El propio texto discute como "espuria" la distinción entre ritos "tradicionales" y "cristianos". **Función: secundaria posible. Resultado: SECUNDARIA_POSIBLE, con la advertencia ya registrada de proximidad a frontera constitutiva.** *Reforzado por la nueva evidencia del apartado 7 de esta auditoría.*
- **C10 — Cuerpos, parentescos y eróticas.** El libro entero, por declaración explícita y repetida de la autora (Introducción y Conclusión, mismo enunciado), se organiza alrededor de la responsabilidad femenina hacia los parientes lineales; caps. 7–8 desarrollan en extenso terminología de parentesco y estructura doméstica; discusión explícita y sostenida de la matrifocalidad (R. T. Smith, González, Yanagisako, Rosaldo, Alexander). **Función: organizadora. Resultado: SOBREVIVE.** *Confirmado y reforzado por la nueva lectura del cap. 8 (apartado 7).*

No se usó frecuencia léxica como criterio decisorio en ningún caso: cada resultado se sostiene en función argumental verificada por lectura de contexto, no en conteo de menciones.

---

## 4. Control especial sobre C1 (sección 7 de la instrucción)

Pregunta: ¿la condición "Black Carib"/garífuna funciona como (A) problema de indigeneidad/invasión/persistencia territorial, (B) clasificación etnohistórica de la población estudiada, (C) simple denominación histórica/etnográfica, o (D) condición de fondo para estudiar otro problema (parentesco, género, ritual, ancestralidad)?

**Verificado: (D).** La propia autora dice, en la Introducción, que el capítulo de antecedentes históricos (donde vive todo el material potencialmente C1) se incluye "para clarificar la naturaleza de los vínculos entre parientes femeninas" (p. 2) — es decir, la identidad Black Carib funciona en el libro como (B)+(D): clasificación etnohistórica de la población estudiada, puesta explícitamente al servicio del problema de parentesco, no como argumento propio de invasión, despojo o persistencia territorial. **C1 no organiza el argumento; solo describe quiénes son los sujetos estudiados.** No se acepta "Garífuna = C1" como inferencia automática; se llega a este resultado por lectura de la función declarada, no por la etiqueta.

---

## 5. Control especial sobre C3 (sección 8 de la instrucción)

Pregunta: ¿la ancestralidad, la memoria ritual o la historia garífuna se articulan realmente con fuga, cimarronaje, emancipación, insurgencia, formación de comunidades fugitivas o prácticas de libertad en sentido estructural?

**Verificado: NO.** El episodio de resistencia armada Black Carib contra Gran Bretaña (1772–1796) aparece únicamente dentro del capítulo de antecedentes que la propia autora subordina explícitamente al problema de parentesco (p. 2); ningún capítulo posterior retoma la fuga, el cimarronaje o la insurgencia como argumento organizador; el ritual, el parentesco y la ancestralidad —los tres ejes reales del libro— no se articulan en ningún pasaje leído con una lógica de sustracción al poder. La obra aparece en documentación de fenómenos relacionada con C3 (ancla), pero eso, como advierte la instrucción, no es candidatura: se comprueba aquí expresamente que **no hay evidencia argumental que sostenga C3**, y la ancla no se convierte en clasificación.

---

## 6. Control especial sobre C5 (sección 9 de la instrucción)

Pregunta: ¿las rutas, diásporas o territorios acuosos organizan el libro, o la historia migratoria es solo trasfondo?

**Verificado: trasfondo, no problema central.** La única mención sustantiva usa "diáspora" en sentido metafórico para describir la fluidez residencial de las familias garífunas dentro y entre pueblos del mismo distrito ("people come and go so often that simply keeping track can become a full-time occupation," Introducción p. 6), no circulación transnacional organizada como argumento propio; hay referencias puntuales a mujeres asalariadas en Centroamérica en el s. XIX, pero sin desarrollo capitular. **No se activa C5 por la historia atlántica/caribeña de los garífunas**, precisamente porque el libro está organizado por parentesco y ritual, no por movilidad.

---

## 7. Control especial sobre C9 (sección 10 de la instrucción) — con ampliación dirigida

Pregunta: ¿el ritual, los ancestros y el parentesco constituyen prácticas culturales meramente descritas, o un sistema epistemológico/ontológico/religioso que organiza el argumento?

La lectura existente ya establecía, con los caps. 9–10 leídos sustancialmente, que C9 alcanza el umbral de secundaria (evidencia sustantiva, desarrollo argumental propio, relación necesaria con la principal, presencia muy superior a incidencia). **Esta auditoría amplió la lectura al cap. 8, "Households and Extended Families" (pp. 120–146)** — el único capítulo con desarrollo capitular propio central para la arquitectura C10/C9 que aún no se había leído directamente, solo por síntesis de la autora — precisamente para someter a prueba, con texto primario y no con síntesis editorial, la relación de dependencia entre parentesco y ritual.

**Hallazgo nuevo, decisivo.** El capítulo 8 abre con una declaración estructural casi idéntica a la de la Introducción: "Households and nonresidential extended families are the basic social groups of the Black Carib. Women, as mothers, are structurally central to most households and to extended families" (p. 120), desarrollada con una tipología cuantitativa completa de 242 hogares (Tabla 8: 45% nucleares, 44% de familia extensa, 11% unipersonales), organizada enteramente alrededor de la "mujer focal" y su etapa vital. El capítulo cierra con el estudio de caso de la familia extensa de Magdalena Elijio, en el que la propia autora narra cómo la responsabilidad de la mujer focal (Maka) hacia sus parientes vivos (alimentación, cuidado, dinero) la lleva, ante la enfermedad de un nieto, a consultar a un chamán y a organizar el ritual del *dügü* — y el capítulo termina con esta frase, que es la transición explícita de la propia autora hacia los capítulos 9–10: **"Like other extended families it ordinarily directs help to the living and occasionally, through ritual, to the dead. The next chapter deals with the rituals given to gubida... and the following one with the role of older women as organizers... of these rituals"** (p. 144).

Esta frase es la evidencia primaria más fuerte encontrada en todo el proceso de auditoría: la propia autora, en el punto exacto donde el libro pasa del parentesco al ritual, describe el ritual como lo que la familia extensa hace **"ocasionalmente"**, en contraste con lo que hace **"ordinariamente"** (ayudar a los vivos) — es decir, la propia arquitectura de la obra marca el parentesco/cuidado como el régimen habitual y el ritual como su extensión ocasional hacia los muertos, no como un dominio paralelo y coordinado en pie de igualdad.

**Resultado del control:** el ritual, los ancestros y el parentesco **no** son solo prácticas culturales descritas — C9 organiza con desarrollo propio, sustantivo y teóricamente elaborado dos capítulos completos del libro (posesión espiritual, mediación chamánica, la distinción "espuria" entre ritos tradicionales/cristianos) — pero esa organización queda, con la nueva evidencia del cap. 8, más claramente subordinada a C10 de lo que la lectura previa había podido establecer solo con la repetición verbatim del enunciado de apertura/cierre.

---

## 8. Género y parentesco (sección 11 de la instrucción)

¿Es el argumento central del libro realmente la organización del parentesco garífuna desde las mujeres? **Sí**, confirmado ahora con evidencia cuantitativa primaria (Tabla 8, cap. 8) además del enunciado programático repetido. ¿La ancestralidad ritual explica o reproduce esa organización? **La reproduce y la extiende** — el ritual es, en los propios términos del libro, la forma en que la responsabilidad de la mujer focal hacia sus parientes se prolonga hacia los muertos, no un dominio que genere o determine la estructura de parentesco por su cuenta. ¿El género funciona como objeto principal, mecanismo, resultado o dimensión transversal? **Como objeto principal y mecanismo a la vez**: la posición estructural de la mujer (edad, rango entre parientes, etapa vital) es simultáneamente lo que el libro describe y lo que explica la variación en composición de hogares, organización ritual y patrones de exchange. Existe una corriente C1–C10 que captura este problema con precisión suficiente: **C10 — Cuerpos, parentescos y eróticas**, cuya definición normativa incluye expresamente "parentesco... familia" (§13). No se fuerza la clasificación: el ajuste es genuino, no forzado.

---

## 9. Relaciones ya presentes en el Atlas (sección 12 de la instrucción)

Verificadas directamente contra `datos-atlas.json` (solo lectura, sin modificación):

- **`womenancestors` ↔ `rtsmithmatrifocal`** (Raymond T. Smith, *The Matrifocal Family*, 1996): tipo "resonancia", fuente registrada como **"Kerns lee el parentesco garífuna con la categoría de matrifocalidad de Smith. Cita verificada en el ejemplar."** — **sustentada y confirmada** por esta auditoría: coincide exactamente con lo que la lectura existente ya había establecido de forma independiente (apartado 14: "matrifocalidad en el sentido preciso de R. T. Smith") y con la discusión extensa de Smith/González/Yanagisako/Rosaldo/Alexander en la Introducción (pp. 3–5). Esta relación refuerza, no decide por sí sola, que el eje real de la obra es parentesco y organización social (C10), no C1 automáticamente.
- **`womenancestors` ↔ `afrocentroam`** (Sarah England, *Afro Central Americans in New York City*, 2006): tipo "resonancia", fuente registrada únicamente como **"Por corroborar."** — sin ninguna base citacional ni temática específica más allá de compartir la misma población garífuna en otro sitio (diáspora transnacional en Nueva York, tags `soberanias`/`capitalismo_racial`, ajenos al eje parentesco/ritual de `womenancestors`). **No hay sustento directo verificable dentro de esta auditoría** — solo semejanza de población, no de argumento; requeriría lectura independiente de England para corroborarse, algo fuera del alcance de esta tarea (que audita `womenancestors`, no `afrocentroam`).
- **`womenancestors` ↔ `chevannes`** (Barry Chevannes, *Rastafari: Roots and Ideology*, 1994): tipo "resonancia", fuente registrada como **"Comparten el fenómeno Memoria y espiritualidad. Por corroborar el vínculo directo."** — el fundamento es puramente de etiqueta compartida (`fenómeno` "memoria"), entre dos obras sin relación de población, territorio ni argumento evidente (Rastafari jamaicano vs. ritual garífuna beliceño). **Sin sustento directo verificable**; es la más débil de las tres relaciones examinadas.

Ninguna de estas tres relaciones decide la corriente de `womenancestors`; la única citacionalmente verificada (`rtsmithmatrifocal`) refuerza, sin determinar por sí sola, la conclusión ya alcanzada por lectura propia del argumento del libro.

---

## 10. Prueba de retirada (sección 13 de la instrucción)

- **C10:** retirarla destruye la explicación central del libro — sin el principio de responsabilidad femenina hacia los parientes lineales no hay mecanismo que explique la estructura de hogares (cap. 8, ahora verificada directamente) ni el patrón de organización ritual (caps. 9–10). **No puede retirarse sin pérdida sustancial → aspira a estructurante/principal.**
- **C9:** retirar los caps. 9–10 empobrece gravemente el libro y elimina el elemento que le da título ("the Ancestors"), pero no destruye la tesis sobre matrifocalidad, que sigue siendo sostenible con el material de los caps. 5–8 y con la literatura sobre matrifocalidad en la que el libro se inscribe explícitamente. **Pérdida real pero no estructural → no alcanza el umbral de estructurante/principal; sí supera el umbral de secundaria.**
- **Las demás ocho corrientes:** ninguna supera siquiera el umbral mínimo de la prueba de retirada — todas fueron descartadas en el apartado 3 por evidencia insuficiente o por subordinación explícita declarada por la propia autora.

---

## 11. Prueba de dominancia C9/C10 (sección 14 de la instrucción)

- **A. Causalidad:** el patrón de organización ritual (quién recauda fondos, quién recluta trabajadoras, quién oficia) se explica en el propio texto por el rango y la antigüedad de la organizadora entre sus parientes lineales (Introducción, p. 7) — C10 explica C9. No se encontró, ni en la lectura previa ni en la ampliación de esta auditoría (cap. 8), ningún pasaje en sentido inverso.
- **B. Finalidad:** el libro conduce hacia una tesis única y explícita ("principio organizador del parentesco y el ritual"), formulada desde el parentesco hacia el ritual, no al revés.
- **C. Criterio de valoración:** el material ritual se interpreta a través de la estructura de parentesco y rango; no se encontró el movimiento inverso.
- **D. Dependencia:** ver apartado 10 — asimétrica (C10 no puede retirarse sin destruir la explicación; C9 empobrece pero no destruye la tesis).
- **E. Distribución por capítulos:** parentesco (Introducción + caps. 5–8, aprox. 70 páginas) y ritual (caps. 9–10, 36 páginas) tienen extensión capitular comparable — esta es la razón por la que la lectura previa sometió el par a prueba reforzada de `FRONTERA_CONSTITUTIVA` en lugar de descartarlo sin más.
- **F. Prueba de retirada:** ver apartado 10.

**Hallazgo reforzado por la ampliación de esta auditoría (apartado 7):** la frase de transición del propio cap. 8 ("ordinarily... to the living and occasionally, through ritual, to the dead") es evidencia textual directa de que la propia autora concibe el ritual como extensión ocasional del régimen habitual de responsabilidad hacia los parientes vivos, no como un dominio coordinado en pie de igualdad. Esto inclina la prueba de dominancia, con más fuerza que en la lectura previa, hacia C10 > C9.

---

## 12. `FRONTERA_CONSTITUTIVA` (sección 15 de la instrucción)

Requisitos: bilateralidad estricta, mutua constitución, irreductibilidad, ausencia de jerarquía, evidencia suficiente, no mera duda clasificatoria.

**No se cumplen.** La evidencia (apartados 7 y 11) es consistentemente unidireccional: C10 explica C9 en cada pasaje examinado, incluido el nuevo hallazgo del cap. 8, y no se encontró en ningún momento el movimiento inverso. La extensión capitular comparable de ambas corrientes (que motivó someter el par a prueba reforzada) no equivale, verificado ahora con más evidencia, a ausencia de jerarquía. **No se propone `FRONTERA_CONSTITUTIVA` C9/C10.**

---

## 13. `SINTESIS_MULTICORRIENTE` (sección 16 de la instrucción)

**No aplica.** Solo dos corrientes sobreviven con evidencia sustantiva (C10, C9); la figura exige tres o más corrientes estructurantes. No se propone por acumulación temática.

---

## 14. Posibilidad de vacío de la taxonomía (sección 17 de la instrucción)

¿Queda bien capturado el problema central de *Women and the Ancestors* por las corrientes C1–C10? **Sí.** La definición normativa vigente de C10 incluye expresamente "parentesco... familia" (§13), y el problema central del libro —matrifocalidad, responsabilidad femenina hacia parientes lineales, estructura de hogares y familias extensas— encaja allí sin forzamiento. El dominio ritual encaja igualmente sin forzamiento en C9 ("formas vivas... espirituales... de transmisión, conservación, producción y activación de saber," §12). **No se reporta `VACÍO_TAXONÓMICO_POSIBLE`.** No se crea ninguna corriente nueva.

---

## 15. Ampliación dirigida realizada (sección 18 de la instrucción)

**Capítulo leído:** cap. 8, "Households and Extended Families" (pp. 120–146), del original en `Pagina/womenancestors-simple.pdf` (extracción `pdftotext -layout`, 280 páginas, 10 594 líneas — misma extracción cuyo conteo de líneas ya reportaba la lectura existente).

**Motivo:** era el único capítulo con desarrollo capitular propio y central para la arquitectura C10/C9 (la organización de hogares y familias extensas alrededor de mujeres) que no se había leído con texto primario, solo mediante la síntesis de la propia autora. Dado que la prueba de dominancia C9/C10 (apartado 11) depende directamente de si el parentesco explica al ritual, y ese mecanismo se expresa con más detalle precisamente en este capítulo, se consideró necesaria su lectura directa antes de poder confirmar con solidez el resultado de la lectura previa.

**No se leyó el resto de los capítulos no cubiertos** (3, 4, 5, 6): su contenido (contexto nacional beliceño, mercado laboral, autonomía personal, edad y género) ya estaba verificado por la síntesis explícita de la propia autora en "Research Background" y por palabra clave sobre el texto íntegro, y ninguno de los seis controles de esta auditoría (C1, C3, C5, C9, género/parentesco, relaciones) señaló una pregunta abierta que dependiera de ellos específicamente. No se releyó el libro completo.

**Resultado de la ampliación:** confirma y refuerza, con evidencia primaria nueva (Tabla 8, caso de Magdalena Elijio, frase de transición explícita de la autora), la hipótesis 1 de la lectura existente (C10 principal / C9 secundaria, sin `FRONTERA_CONSTITUTIVA`).

---

## 16. Principal posible y secundarias posibles

- **Principal posible:** C10 — Cuerpos, parentescos y eróticas.
- **Secundarias posibles:** C9 — Archivos vivos, espiritualidades y saberes transmitidos. No se identifica una segunda secundaria.

---

## 17. Hasta tres arquitecturas posibles

1. **C10 principal / C9 secundaria, sin `FRONTERA_CONSTITUTIVA` ni `SINTESIS_MULTICORRIENTE`.** La lectura mejor sostenida tanto por la lectura original como por la ampliación de esta auditoría: la propia autora declara, en el mismo enunciado repetido al abrir y cerrar el libro, y ahora también en la frase de transición del cap. 8, que el parentesco explica la organización ritual y no a la inversa.
2. **`FRONTERA_CONSTITUTIVA` C9/C10, como hipótesis alternativa a valorar por la Dirección Académica.** Sigue siendo formalmente posible que la Dirección Académica considere que la extensión capitular comparable de ambas corrientes describe una coordinación bilateral irreductible antes que una relación jerárquica de explicación; esta auditoría, sin embargo, encuentra la evidencia más inclinada hacia la hipótesis 1 que antes de la ampliación del cap. 8.
3. **C10 principal, sin secundarias**, si la Dirección Académica considera que el material ritual, pese a su extensión y desarrollo propio, permanece demasiado instrumentalizado por el argumento de parentesco como para alcanzar el estatus de secundaria en sentido pleno. Defendible, aunque esta auditoría, como la lectura previa, considera que subestima el desarrollo argumental sostenido de los caps. 9–10.

---

## 18. Estado final

**`LISTO_PARA_DECISION`.**

La ampliación dirigida realizada en esta auditoría (cap. 8) no reveló ninguna pregunta abierta que requiriera más lectura: confirmó y reforzó, con evidencia primaria adicional, el resultado ya alcanzado por la lectura existente. Las tres relaciones heredadas señaladas por la instrucción fueron verificadas (una sustentada y citacionalmente confirmada — `rtsmithmatrifocal` —, dos sin sustento directo verificable dentro del alcance de esta tarea — `afrocentroam`, `chevannes`). No se identifica vacío taxonómico. La identidad bibliográfica está comprobada, el problema/tesis están reconstruidos sin ambigüedad, y la lectura realizada (sustancial + ampliación dirigida de un capítulo) es suficiente en profundidad.

---

## 19. Pregunta exacta para Dirección Académica

Con la evidencia reunida —incluida la nueva lectura del capítulo 8, cuya frase de transición explícita ("ordinarily... to the living and occasionally, through ritual, to the dead") refuerza la dirección causal de parentesco hacia ritual—, ¿adopta la Dirección Académica la hipótesis 1 (`womenancestors` = C10 principal, C9 secundaria, sin `FRONTERA_CONSTITUTIVA` ni `SINTESIS_MULTICORRIENTE`), o considera que la fórmula "principio organizador del parentesco y el ritual", enunciada por la propia autora, describe en realidad una coordinación bilateral irreductible entre C9 y C10 que ameritaría `FRONTERA_CONSTITUTIVA` (hipótesis 2)?

---

## 20. Confirmaciones finales

- `lectura-womenancestors-p2-etapa-2-3f.md` — **intacta**, leída pero no modificada.
- `pinedashipwrecked` y sus tres documentos — **intactos**, no reabiertos en ningún momento.
- Corpus (`datos-atlas.json`) — **intacto**: consultado en solo lectura para verificar las tres relaciones del apartado 9; ningún campo modificado.
- `cola-lectura-pendiente-atlas-2.md` — **intacta**, no consultada ni modificada en esta tarea.
- `matriz-fronteras-c1-c10.md` — **intacta**, no modificada.
- `marco-academico-consolidado-atlas-2.md` — **intacto**, consultado en solo lectura para las definiciones normativas de C1–C10.
- `PensamientoCaribeCuraduriaDigital.docx`, `expediente-evidencia-c7.md`, `ficha-decision-c4.md` — **intactos**, no tocados.
- Históricos de P1 (`whiteheadtiger`, `felicianosantos`, `andersonblackindigenous`) y rama `respaldo-web-da5a6cb` — **intactos**, no tocados.
- **Status git:** ver apartado 0 (previo) y verificación final a continuación.
- **Sin `git add`, sin `git commit`, sin `git push`** en ningún momento de esta tarea.

---

## 21. Verificación Git final

```
$ git status --short
?? PensamientoCaribeCuraduriaDigital.docx
?? data/agua-de-por-medio/atlas-2/documentos/auditoria-womenancestors-p2-etapa-2-3f.md
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
?? data/agua-de-por-medio/atlas-2/documentos/lectura-womenancestors-p2-etapa-2-3f.md
$ git diff --stat
(sin salida)
$ git diff --name-only
(sin salida)
```

Coincide exactamente con el "status final esperado" de la sección 23 de la instrucción. Ningún archivo rastreado modificado. No se ejecutó ningún comando de escritura git en ningún momento.
