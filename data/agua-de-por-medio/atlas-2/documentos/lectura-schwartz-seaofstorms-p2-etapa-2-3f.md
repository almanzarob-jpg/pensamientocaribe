# Lectura y contraste académico de `schwartz_seaofstorms`

## P2 · Etapa 2.3F

### 0. Naturaleza de este documento

Este documento ejecuta una **lectura dirigida sustancial** (`LECTURA_DIRIGIDA_SUSTANCIAL`) de `schwartz_seaofstorms` conforme a la instrucción `JHFV.md`. No formaliza ninguna decisión académica: identifica qué corrientes C1–C10 sobreviven, evalúa como hipótesis (nunca aprueba) `FRONTERA_CONSTITUTIVA` y `SINTESIS_MULTICORRIENTE` si las condiciones lo justifican, y entrega un estado final entre `LISTO_PARA_DECISION`, `REQUIERE_AMPLIACION_DIRIGIDA` y `EVIDENCIA_INSUFICIENTE`. La decisión pertenece exclusivamente a la Dirección Académica.

Verificación git ejecutada antes de comenzar (solo lectura): rama `feat/atlas-2-etapa-1-integrada`; HEAD local y remoto coinciden exactamente en `88d2c2062529a82acf83eec89340eff45571af57`; `git status --short` mostró exactamente los tres archivos `??` esperados (`PensamientoCaribeCuraduriaDigital.docx`, `expediente-evidencia-c7.md`, `ficha-decision-c4.md`); `git diff --stat` y `git diff --name-only` vacíos; `.git/index.lock` **no** estaba presente en esta verificación inicial. No se ejecutó ningún comando de escritura git.

---

### 1. Identidad bibliográfica (§4)

- **Autor:** Stuart B. Schwartz.
- **Título completo:** *Sea of Storms: A History of Hurricanes in the Greater Caribbean from Columbus to Katrina*.
- **Año:** 2015.
- **Editorial:** Princeton University Press (Princeton and Oxford).
- **ISBN:** 978-0-691-15756-6 (verificado directamente en la página de créditos del PDF).
- **Library of Congress Control Number:** 2014950430 (verificado directamente).
- **Origen:** Lawrence Stone Lectures, Shelby Cullom Davis Center for Historical Studies, 2012 (verificado en portadilla y Acknowledgments).
- **Extensión:** ix + 427 páginas de cuerpo principal más aparato (Abreviaturas, Notas pp. 341–392, Bibliografía pp. 393–426, Índice pp. 427 en adelante); 9 capítulos.
- **Territorio(s):** "Greater Caribbean" / "circum-Caribbean" definido explícitamente por el autor mediante un círculo geográfico centrado en Bridgetown (Barbados) que incluye el Golfo de México y el sudeste de Estados Unidos, excluye la costa brasileña y las tierras al sur de Trinidad/Tobago/Curaçao por razones estrictamente geofísicas (efecto Coriolis, zona de formación de huracanes).
- **Período estudiado:** 1492 (llegada europea) hasta 2012–2014 (huracán Sandy, momento de redacción); con referencias explícitas a paleotempestología para períodos anteriores a la presencia humana.
- **Objeto:** la interacción histórica de larga duración entre los huracanes del Atlántico Norte y las sociedades del Gran Caribe.
- **Pregunta central:** ver apartado 3.
- **Tesis:** ver apartado 3.
- **Metodología:** historia transnacional y comparativa de larga duración (*longue durée*, explícitamente en diálogo con Braudel), centrada no en los huracanes en sí mismos sino en la respuesta social, política y cultural que provocan; uso deliberadamente anacrónico de la escala Saffir-Simpson para comparabilidad; selección de tormentas "representativas" (no un recuento exhaustivo de los 4,000–5,000 huracanes ocurridos desde 1492) elegidas por su capacidad de iluminar el pensamiento y la política de cada época.
- **Estructura capitular (verificada en tabla de contenidos):**
  1. Storms and Gods in a Spanish Sea (p. 1)
  2. Melancholy Occasions: Hurricanes in a Colonial World (p. 33)
  3. War, Reform, and Disaster (p. 70)
  4. Calamity, Slavery, Community, and Revolution (p. 110)
  5. Freedom, Sovereignty, and Disasters (p. 145)
  6. Nature and Politics at the Century's Turn (p. 192)
  7. Memories of Disaster in a Decade of Storms (p. 226)
  8. Public Storms, Communal Action, and Private Grief (p. 272)
  9. Ancient Storms in a New Century (p. 319)

No se completó ningún dato por inferencia; todo lo anterior fue verificado directamente en el texto (portada, página de créditos, tabla de contenidos, Preface, Acknowledgments).

---

### 2. Lectura mínima realizada y páginas efectivamente leídas (§5)

Se extrajo el PDF completo con `pdftotext -layout` (18,477 líneas) a partir de una copia de nombre simplificado del archivo original (cuyo nombre contenía comillas tipográficas y espacios que impedían el *staging* directo), siguiendo el mismo procedimiento ya usado para `pinedashipwrecked` y `womenancestors`. Lectura directa efectivamente realizada:

- **A. Preface completo** (pp. ix–xxiii): íntegro, línea por línea. Este libro no tiene una "Introducción" separada; el Preface cumple esa función y contiene la formulación explícita de la pregunta central, la tesis y los límites metodológicos.
- **B. Conclusión completa:** el libro no tiene un capítulo de "Conclusión" separado; el capítulo 9, "Ancient Storms in a New Century" (pp. 319–338), cumple esa función — es el último capítulo antes del aparato de notas y contiene el cierre argumental explícito del libro (huracán Katrina, huracán Sandy, y el párrafo de cierre sobre las "preguntas antiguas" que persisten). Leído íntegro.
- **C. Capítulo con el huracán como fuerza causal, no solo episodio:** capítulo 9 íntegro (Katrina como fuerza que expuso y agravó desigualdades raciales, fallas de gobierno y modelos ideológicos en competencia; Sandy como fuerza que incidió directamente en una elección presidencial).
- **D. Capítulos sobre la relación huracán–esclavitud/plantación/trabajo/economía/imperio/soberanía/guerra:**
  - Capítulo 1, pp. 1–10 (sección "Storms and Gods in a Spanish Sea": cosmología taína/caribe, "Carib" como categoría jurídica que habilitaba la esclavización).
  - Capítulo 3, pp. 102–104 (miedo a la rebelión esclava tras los huracanes de 1780 en Jamaica y Barbados; el episodio de Tacky's Rebellion referido como antecedente).
  - Capítulo 4, pp. 110–111, 136–138, 143–144 (apertura del capítulo: tesis explícita sobre la relación entre factores ambientales y cambio político; resistencia y escepticismo de los esclavizados en Barbados tras el huracán de 1831, en vísperas de la emancipación; establecimiento de observatorios meteorológicos).
  - Capítulo 5, pp. 145–149 (transición de la esclavitud al trabajo libre en el Caribe británico/francés; expansión de la "segunda esclavitud" en Cuba y Puerto Rico; anexionismo, guerra civil estadounidense, fin del régimen esclavista español).
  - Capítulo 6, pp. 198–202 (huracán San Ciriaco de 1899 bajo la ocupación militar estadounidense recién iniciada en Puerto Rico: soberanía "aún no decidida", "tutelary colonialism", disciplina laboral como condición de la ayuda).
  - Capítulo 9, pp. 319–338 (huracán Katrina: raza, pobreza, FEMA, capitalismo de desastre, neoliberalismo, socialismo cubano; huracán Sandy: federalismo, cambio climático, política electoral).
- **E. Tabla de contenido y estructura general:** verificada íntegra (apartado 1).
- **F. Pasajes de definición explícita:** localizados y leídos para *hurricane*, *disaster* (implícito en el marco de Sorokin y la "historia de calamidades"), *environment*, *ecology*, *vulnerability*, *empire* (tratado como práctica, no definido en abstracto), *plantation* (contextual, no definido en abstracto), *climate* (tratado explícitamente como "lo que Braudel llamaba clima"). No se encontró una definición explícita aislada de *reconstruction* ni *resilience* como términos técnicos propios del autor (la palabra *resilience* aparece una sola vez en todo el libro, de forma no técnica).

Adicionalmente se hicieron búsquedas léxicas dirigidas (no usadas como criterio decisorio, solo como control de cobertura) sobre todo el archivo extraído para verificar la presencia o ausencia de material sustantivo vinculado a C1, C3, C5, C8, C9 y C10 fuera de los tramos leídos directamente (indigenous/Taino/Carib, maroon/cimarronaje, diaspora/migración, creole/creolización, vudú/santería/espíritus/ancestros, género/cuerpo/parentesco/familia), y sobre el vocabulario de agencia material (*agency*, *material agency*) para el control especial de C6 (apartado 8).

**Limitación registrada con transparencia:** los capítulos 2 ("Melancholy Occasions"), 7 ("Memories of Disaster in a Decade of Storms") y 8 ("Public Storms, Communal Action, and Private Grief") no fueron leídos en extenso línea por línea; sí fueron cubiertos por la tabla de contenidos, por el rastreo léxico de cobertura completa del archivo, y por su posición en la secuencia argumental del libro (confirmada por el propio Preface, que explica que la selección de tormentas y períodos sigue el mismo criterio narrativo en todo el libro). Esta limitación se declara explícitamente en el apartado 23 al fijar el estado final.

---

### 3. Pregunta académica central (§6)

Schwartz no está escribiendo, en sentido estricto, "la historia de los huracanes". Lo dice él mismo: *"the storms themselves are not the protagonists here… My focus is on the societies affected by the storms, how peoples and governments responded to them, and how, over time, cultures perceived or understood their nature and meaning"* (Preface, p. xiii). Y de forma aún más explícita: *"the principal focus of this study is on how the hurricanes shaped social and political life, and how in turn social and political patterns in the Greater Caribbean influenced the impact of the storms"* (Preface, p. xiii).

La pregunta central, en los propios términos del autor, es: **¿cómo han respondido las sociedades del Gran Caribe —sus gobiernos, sus élites, sus poblaciones esclavizadas y libres— a una amenaza natural recurrente a lo largo de cinco siglos, y qué revela esa respuesta sobre las estructuras políticas, raciales y de poder de cada época?**

El propio autor identifica explícitamente **dos condiciones históricas** sin las cuales esa historia "no puede contarse adecuadamente": *"the reality of slavery and its legacy of racial prejudice"* y, en el siglo XX, *"the political, technological, and economic hegemony of the United States"* (Preface, p. xviii–xix). Añade que *"social and racial distinctions patterned societal response even long after slavery had been eliminated as an institution"* (p. xix). Esta es la formulación más precisa y menos ambigua de la tesis: el huracán es el hilo conductor narrativo (lo que el propio autor llama, literalmente, un *"meta-narrative"* o *"leitmotif"*, Preface p. xii–xiii) que permite recorrer, a través de sucesivas coyunturas de desastre, la persistencia y transformación de la esclavitud, su legado racial, y la soberanía/hegemonía política que gobierna la región.

El autor advierte explícitamente contra dos lecturas erróneas de su propio proyecto: (1) el determinismo ambiental ("the trap of geographic or environmental determinism… in which everything is described in terms of environmental limits"), y (2) el huracán como "acto de Dios" ajeno a la historia. Su posición explícita es intermedia: *"Climate and geography set limits and created possibilities; societies continually tested those boundaries or reshaped them, and it was human agency that exploited or missed opportunities in the process"* (Preface, p. xii). Esta frase es decisiva para el control de C6 (apartado 8): el propio autor atribuye la agencia causal a las sociedades, no al huracán.

---

### 4. Contraste obligatorio C1–C10 (§7)

Para cada corriente se registra evidencia a favor, en contra, capítulos/páginas, función argumental y valoración provisional. Ninguna valoración se basa en frecuencia léxica.

**C1 — Mundos indígenas, invasiones y persistencias.**
Evidencia a favor: el capítulo 1 (pp. 5–10) desarrolla con sustancia la cosmología taína y caribe de los huracanes (Guabancex, Guataubá, Coatrisquie; la evidencia arqueológica cubana de la cerámica taína que representa la rotación ciclónica; los raids caribes contra los taínos y luego contra los europeos; "Carib" como categoría jurídica —no étnica— que los españoles usaron para justificar la esclavización). Evidencia en contra: fuera del capítulo 1, el rastreo léxico de todo el archivo muestra que "indigenous"/"Taino" prácticamente desaparece del libro (dos menciones incidentales posteriores, ninguna con desarrollo argumental); el índice del propio libro remite las entradas de "Taino"/"indigenous tribes" casi exclusivamente a pp. 5–11 y 24–25. Función argumental: origen narrativo/cosmológico del problema (cómo se conceptualizó culturalmente el huracán antes y en el momento del contacto), no un problema de invasión, persistencia o disputa territorial indígena sostenido en el tiempo. Valoración: **contextual/incidental**, no estructurante. No se retira sin pérdida (es evidencia genuina y bien trabajada), pero tampoco organiza el argumento del libro en su conjunto.

**C2 — Trata, esclavización y plantación.**
Evidencia a favor: material extenso y sustantivo en los capítulos 1, 3, 4 y 5. El miedo a la rebelión esclava tras los huracanes de 1780–81 en Jamaica y Barbados (cap. 3, pp. 102–104; referencia explícita a Tacky's Rebellion); el episodio decisivo del huracán de Barbados de 1831, en vísperas de la emancipación, donde los esclavizados responden con "unbecoming and insolent language", huelgas de trabajo, fervor milenarista, y son sometidos a azotes para restablecer el orden (cap. 4, pp. 136–138); la expansión de la "segunda esclavitud" (*"the expansion of slavery in the capitalist development of plantation agriculture"*) en Cuba y Puerto Rico durante el siglo XIX (cap. 5, pp. 147–148). Evidencia en contra: este material es intenso pero cronológicamente concentrado (aprox. 1492–1873, fin de la esclavitud en Puerto Rico); a partir del capítulo 6 el régimen esclavista como tal ya no es el objeto, sino su legado. Función argumental: el huracán funciona repetidamente como el momento que **expone** la fragilidad del orden esclavista y activa el miedo de las élites a la revuelta, así como el momento en que la retórica de la "causa común frente a la calamidad" se pone a prueba y falla. Valoración: **estructurante** para el arco cronológico 1492–1873 del libro; no puede reducirse a incidental.

**C3 — Fugas, cimarronajes y emancipaciones.**
Evidencia a favor: mínima — tres menciones incidentales de "maroons" en todo el libro, ninguna desarrollada como argumento propio sobre la fuga o el cimarronaje como práctica de libertad. El episodio de resistencia esclava de 1831 (cap. 4) es más cercano a insubordinación cotidiana y expectativa de emancipación legal que a cimarronaje o fuga. Evidencia en contra: no hay tramo del libro organizado por la práctica de la fuga, el palenque/cimarronaje o la emancipación como proceso autónomo; la emancipación aparece siempre como proceso legal-imperial (decretada por Londres, Madrid, París), no como conquista desde la fuga. Función argumental: nula como corriente propia; el material more cercano queda subsumido dentro de C2. Valoración: **descartada**.

**C4 — Postplantación, trabajo y desposesión.**
Evidencia a favor: muy sustantiva desde el capítulo 5 en adelante. La transición al trabajo libre tras la emancipación en el Caribe británico y francés, con trayectorias diferenciadas según disponibilidad de tierra (cap. 5, pp. 145–146); la "tutelary colonialism" tras el huracán San Ciriaco de 1899 en Puerto Rico, donde la ayuda a los damnificados se condiciona explícitamente a la disciplina laboral ("no able-bodied man shall eat the bread of idleness", reconstrucción de caminos como forma aceptable de distribuir ayuda) (cap. 6, pp. 200–202); el análisis de Katrina como "neoliberal deluge" y "shock capitalism", con el despido de 4,000 maestros, la reducción a la mitad de la vivienda pública subsidiada, y la reconstrucción "más rápida y más ventajosa para los ciudadanos más ricos y más blancos" (cap. 9, pp. 330). Evidencia en contra: este material está claramente distinguido, en el propio texto, del régimen de plantación colonial esclavista (C2): no hay plantación ni esclavitud jurídica en los episodios de Puerto Rico 1899 o Katrina 2005, sino trabajo asalariado, dependencia, desposesión y disciplina racializada de la pobreza — exactamente la distinción que exige la definición normativa de C4 frente a C2. Función argumental: **la plantación no terminó, se reorganizó** — el propio arco del libro, del régimen esclavista de plantación (C2) a la desposesión racializada de la Nueva Orleans post-Katrina (C4), reproduce casi literalmente la fórmula normativa de C4. Valoración: **estructurante** para el arco cronológico 1873–2014.

**C5 — Rutas, diásporas y territorios acuosos.**
Evidencia a favor: el capítulo 9 usa explícitamente la palabra "diaspora" para describir la evacuación de Nueva Orleans hacia Houston, Atlanta y Memphis (*"much of the history of Katrina in New Orleans was by necessity a story of diaspora"*, p. 327); el libro dedica atención sustantiva a la navegación caribe (raids caribes, rutas marítimas coloniales, buques). Evidencia en contra: en ningún tramo del libro la circulación marítima o la diáspora organiza un problema irreductible propio; funciona siempre como **efecto logístico del desastre** (evacuación, imposibilidad de comerciar tras la tormenta, pérdida de buques) o como **condición geográfica de posibilidad** del huracán mismo (definición del "Gran Caribe" como círculo geográfico centrado en Bridgetown), nunca como el eje que organiza el argumento del libro. La instrucción advierte explícitamente contra convertir automáticamente mar/barcos/puertos/movilidad en C5; ese riesgo se confirma aquí y se resuelve en contra de C5. Función argumental: contextual/incidental. Valoración: **descartada** como corriente estructurante; se registra el hallazgo metodológico de que ni el título ni la geografía marítima del objeto activan C5 por sí solos.

**C6 — Huracanes, ecologías y materialidades vivas.**
Ver control especial en el apartado 8. Adelanto de la conclusión: **no estructurante**.

**C7 — Soberanías, fronteras y ocupaciones.**
Evidencia a favor: es, con diferencia, la corriente con presencia más sostenida y más explícitamente nombrada por el propio autor a lo largo de todo el libro. La segunda de las "dos condiciones históricas" que Schwartz declara indispensables para su historia es *"the political, technological, and economic hegemony of the United States"* (Preface, p. xviii). Evidencia concreta en todos los tramos leídos: disputas de soberanía y régimen colonial español en Cuba y Puerto Rico (cap. 5, pp. 148–149: anexionismo, fin del régimen esclavista, tensión colonia-metrópoli); la ocupación militar estadounidense de Puerto Rico en 1899 y la pregunta explícita sobre *"the sovereignty and political future of the possessions"* aún *"undecided"* (cap. 6, pp. 200–201); el auge de Trujillo en la República Dominicana tras la ocupación estadounidense (cap. 9, referencia contextual); el federalismo, FEMA, la Guardia Nacional y el Departamento de Seguridad Nacional en Katrina (cap. 9, pp. 324–326); el contraste explícito entre el modelo estatal cubano y el estadounidense en la gestión de desastres (cap. 9, pp. 331–332); el federalismo y el cambio climático en Sandy (cap. 9, pp. 336–337). Evidencia en contra: ninguna sustancial — no se encontró ningún tramo del libro en que la pregunta de soberanía/gobierno/ocupación esté ausente como telón de fondo al menos. Función argumental: el huracán es reiteradamente el mecanismo que **pone a prueba y revela** la naturaleza, los límites y las contradicciones de la autoridad soberana (colonial, republicana, federal) en cada época. Valoración: **estructurante**, y la corriente con mayor pretensión de continuidad a lo largo de las cinco centurias cubiertas por el libro.

**C8 — Creolizaciones, traducciones y opacidades.**
Evidencia a favor: "creole" aparece con frecuencia (29 ocurrencias rastreadas). Evidencia en contra: en cada pasaje examinado, "creole" designa la identidad de los blancos nacidos en las colonias (la clase plantadora local, distinguida de los peninsulares/metropolitanos) — "creole planters", "creole elite", "creole governor", y de forma más elaborada, la "creole mentality" de fatalismo y propensión al riesgo que Jean-Baptiste Leblond y otros observadores atribuyeron a los colonos blancos amenazados por los huracanes (cap. 4, pp. 108–109). No hay ningún tramo del libro dedicado a la creolización como proceso lingüístico o cultural, a la traducción entre mundos, o a la opacidad como problema epistemológico. Función argumental: "creole" es aquí, exactamente como en `pinedashipwrecked`, un etnónimo/marcador de clase colonial, no un proceso de creolización. Valoración: **descartada**.

**C9 — Archivos vivos, espiritualidades y saberes transmitidos.**
Evidencia a favor: mínima — la veneración taína de los ancestros en los *areítos* (cap. 1, p. 7, subsumida ya en C1) y una única mención incidental de que el espíritu guerrero de los vientos taínos pasó a formar parte de la santería cubana (cap. 5, p. 130, sin desarrollo posterior). Evidencia en contra: no existe ningún tramo del libro dedicado a espiritualidades vivas, archivos orales, transmisión ritual de saberes o mediación entre vivos y muertos como problema organizador. Función argumental: nula como corriente propia. Valoración: **descartada**.

**C10 — Cuerpos, parentescos y eróticas.**
Evidencia a favor: el libro menciona género, familia y separación de familias en varios episodios (particularmente en el capítulo 9, sobre la vulnerabilidad diferencial por género y raza durante Katrina). Evidencia en contra: en ningún caso el parentesco, el cuerpo o la erótica organiza un argumento propio; "family" y "women" aparecen como categorías demográficas dentro del análisis de vulnerabilidad social y racial (C4) o de política estatal (C7), nunca como objeto analítico en sí mismas. Función argumental: nula como corriente propia. Valoración: **descartada**.

---

### 5. Control especial sobre C6 (§8) — prueba adversarial obligatoria

Se responde cada una de las cinco preguntas exigidas por la instrucción.

**1. ¿El huracán tiene agencia causal real en el argumento?**
No en el sentido que exige C6. El propio autor, en el pasaje programático del Preface, atribuye explícitamente la agencia a las sociedades, no al huracán: *"it was human agency that exploited or missed opportunities in the process"* (p. xii). El rastreo léxico de la palabra "agency" en las 18,477 líneas del texto extraído confirma este hallazgo de forma cuantitativa y cualitativa: de las apariciones sustantivas de la palabra, la inmensa mayoría se refiere a **agencias gubernamentales** (FEMA, Cruz Roja, Board of Charities, CDEMA, Federal Transportation Agency), y las dos únicas apariciones conceptuales (Preface, pp. xii y xiii) se usan explícitamente para afirmar la agencia **humana**, nunca la agencia del huracán o de la naturaleza. No se encontró en ningún punto del libro una formulación del tipo "el huracán actuó", "la tormenta forzó", "la naturaleza determinó" que le atribuyera agencia causal autónoma al fenómeno.

**2. ¿Reorganiza el huracán trabajo, propiedad, esclavitud, infraestructura, movilidad, política imperial, producción de conocimiento, paisaje, población?**
El huracán es sistemáticamente el **detonante circunstancial** que pone a prueba estructuras ya existentes (el régimen esclavista, la disciplina laboral colonial, el sistema de soberanía imperial, el estado de bienestar), pero no el mecanismo que las reorganiza por su sola fuerza física. En cada uno de los episodios leídos (Barbados 1831, Puerto Rico 1899, Katrina 2005, Sandy 2012), lo que reorganiza el trabajo, la propiedad o la política es la **respuesta social y gubernamental** a la destrucción, no la destrucción física en sí misma. El propio libro lo dice sobre los desastres en general, citando la posición que adopta explícitamente: *"natural disasters are never simply natural, but are also the result of human actions, policies, and attitudes taken or held before, during, and after the event"* (Preface, p. xiii).

**3. ¿El autor trata huracán y ambiente como fuerzas históricas, o solo como escenario?**
Ni una cosa ni otra de forma pura: el ambiente aparece como **marco de posibilidad y de límite** ("climate and geography set limits and created possibilities"), es decir, como condición estructural que las sociedades "prueban" o "remodelan", pero el propio autor rechaza explícitamente el "determinismo ambiental" como error metodológico a evitar. Esto ubica al huracán, en la escala exigida por el apartado 13, más cerca de (B) recurso/condición de posibilidad y (C) objeto/detonante de respuesta social que de (D) agente material.

**4. ¿La materialidad viva/ecológica altera los procesos sociales?**
Hay un único pasaje sustantivo de ecología política genuina: la pérdida de humedales en la desembocadura del Mississippi por el dragado de canales y la explotación petrolera, que incrementó la vulnerabilidad de Nueva Orleans antes de Katrina (cap. 9, p. 321–322). Pero incluso este pasaje trata la degradación ecológica como **consecuencia de decisiones económicas y de ingeniería humanas** (el Army Corps of Engineers, la búsqueda de "progreso" y ventaja económica), no como una materialidad viva con agencia propia frente a la sociedad. Es la excepción más fuerte encontrada, y aun así confirma —no contradice— el patrón de agencia humana/institucional.

**5. ¿Se podría explicar la tesis del libro retirando los huracanes?**
No completamente: los huracanes son el **hilo conductor narrativo** explícito del libro (el propio autor los llama *"meta-narrative"* y *"leitmotif"*, Preface p. xii). Sin huracanes no habría ocasión para el recorrido histórico que el libro realiza. Pero esto es distinto de que los huracanes sean el **objeto analítico estructurante** en el sentido de C6: son el dispositivo narrativo/organizador cronológico que permite visitar, episodio tras episodio, la esclavitud/su legado (C2/C4) y la soberanía/hegemonía imperial (C7). Retirar los huracanes destruiría la *estructura narrativa* del libro (dejaría de ser este libro), pero no destruiría su *tesis sustantiva* sobre raza, trabajo y soberanía en el Gran Caribe, que podría —y de hecho ha sido, según reconoce el propio Schwartz en el Preface al citar la esclavitud, la guerra, las plantaciones, la migración y el colonialismo como otros posibles "meta-narrativas" ya usados por otros historiadores— explicada por otras vías.

**Conclusión del control especial:** las respuestas a las preguntas 1, 2 y 4 son negativas para una agencia material fuerte; la respuesta a la pregunta 3 es mixta pero se inclina hacia el marco de posibilidad/límite, no hacia la fuerza histórica autónoma; la respuesta a la pregunta 5 es matizada (el huracán es indispensable como dispositivo narrativo, pero no como motor causal de la tesis sustantiva). Conforme a la regla explícita de la instrucción (*"si NO: C6 debe degradarse"*), **C6 se degrada** y no se registra como estructurante ni como principal. Se registra, en cambio, como **dispositivo narrativo/cronológico organizador** de la obra — una función real e importante, pero distinta de la función analítica que exige la definición normativa de C6 como corriente clasificatoria.

---

### 6. Control especial sobre C2 (§9)

Pregunta decisiva: ¿los huracanes son analizados porque revelan/transforman el régimen esclavista, o el régimen esclavista es uno de varios campos transformados por los huracanes?

La evidencia leída (Barbados 1780–81 y 1831, la "segunda esclavitud" cubano-puertorriqueña) muestra sistemáticamente el primer patrón: el huracán **revela** la fragilidad del orden esclavista (miedo de las élites a la revuelta, ruptura momentánea de la disciplina, retórica de "causa común" puesta a prueba y en parte rechazada por los esclavizados) más que "transformarlo" por su propia fuerza física. El régimen esclavista no es "uno de varios campos transformados" de forma equivalente a, digamos, la arquitectura o el comercio; es un objeto con desarrollo propio, sostenido capítulo tras capítulo entre 1492 y 1873, con density argumental suficiente para sostener estructuración. Esto es decisivo para la relación C2/C6 exigida por la instrucción: dado que C6 no sobrevive como estructurante (apartado 5), **la relación C2/C6 no se somete a prueba bilateral** (apartado 7 de este documento, siguiendo la regla explícita del §18: "pero solo si ambas corrientes del par sobreviven realmente").

---

### 7. Control especial sobre C4 (§10)

Se distingue explícitamente, como exige la instrucción, entre plantación colonial (C2) y postplantación/trabajo/desposesión (C4). El libro desarrolla ambos registros de forma temporal y conceptualmente diferenciada: C2 domina los capítulos 1–5 (esclavitud, trata, plantación azucarera/cafetalera bajo régimen jurídico esclavista); C4 domina los capítulos 6–9 (trabajo libre condicionado, "tutelary colonialism", dependencia y disciplina laboral en Puerto Rico 1899, desposesión racializada y "shock capitalism" en Katrina 2005). No se usó C4 para "cualquier historia económica": se verificó en cada caso que el régimen en cuestión ya no era jurídicamente esclavista sino de trabajo asalariado, ayuda condicionada o mercado de vivienda/seguros — exactamente el terreno que la definición normativa de C4 reserva para sí ("la plantación no terminó: se reorganizó").

---

### 8. Control especial sobre C7 (§11)

Pregunta decisiva: ¿C7 es mecanismo propio, o simplemente la escala política donde opera C6?

Dado que C6 no sobrevive como estructurante, esta pregunta se resuelve por descarte: C7 no puede ser "la escala política donde opera C6" porque C6 no opera como fuerza estructurante en ningún punto del libro. C7 tiene, además, desarrollo propio y sostenido independientemente de cualquier subordinación a C6: la disputa de soberanía colonial española, la ocupación militar estadounidense, el auge de Trujillo, el federalismo estadounidense en Katrina y Sandy son objetos de análisis explícito por derecho propio, con evidencia textual extensa en cada capítulo muestreado, y no dependen conceptualmente de que el huracán sea tratado como agente material. Valoración: **C7 es mecanismo propio**, no subordinado a C6.

---

### 9. Control especial sobre C5 (§12)

Ya desarrollado en el apartado 4 (evaluación de C5). Conclusión reiterada: las rutas y circulaciones marítimas no organizan un tramo irreductible de la obra; son efectos y logística del desastre (evacuación, ruptura del comercio, pérdida de buques) o condición geográfica de posibilidad del fenómeno mismo. **C5 = descartada** como corriente estructurante.

---

### 10. Materialidad y agencia (§13)

Clasificación de los elementos materiales según la escala exigida (A. escenario / B. recursos / C. objetos afectados / D. agentes materiales que reorganizan relaciones sociales):

- **Viento:** tratado principalmente como (A) escenario/fenómeno físico descrito técnicamente (formación, escala Saffir-Simpson, efecto Coriolis) y (C) objeto que produce daño (destrucción de vivienda, cultivos); nunca como (D) agente que por sí mismo reorganiza relaciones sociales — quien reorganiza es la respuesta institucional al daño del viento.
- **Agua/marejada:** predominantemente (C) objeto afectante — la marejada de 32.8 pies de Katrina inunda Nueva Orleans, pero la ciudad se vuelve "un Atlantis criollo" como imagen literaria del desastre, no como argumento sobre la agencia del agua.
- **Lluvia:** (A)/(C), mencionada en la definición técnica del huracán y en los relatos de daño, sin desarrollo propio.
- **Suelo:** apenas mencionado (6 ocurrencias en todo el libro); no hay tratamiento sustantivo del suelo como materialidad viva.
- **Cultivos:** (C) objetos afectados — pérdidas de café, azúcar, tabaco cuantificadas repetidamente como daño económico, nunca como agentes.
- **Infraestructuras:** (C) objetos afectados y, en el caso de los humedales/diques de Nueva Orleans, (B) recursos gestionados por decisión humana (dragado, ingeniería) cuya alteración *incrementa* la vulnerabilidad — el caso más cercano a (D), pero la agencia se atribuye explícitamente a las decisiones del Army Corps of Engineers y al "deseo de progreso económico", no a la infraestructura o al humedal en sí.
- **Barcos:** (C) objetos afectados/logística de comercio y evacuación.
- **Cuerpos:** (C) objetos afectados — mortalidad, vulnerabilidad diferencial por raza/clase/género; no hay tratamiento del cuerpo como categoría analítica autónoma (lo que descartaría también cualquier lectura C10 del libro).
- **Paisaje:** (A)/(B) — descrito como marco geográfico e históricamente transformado por la acción humana (dragado, urbanización), no como sujeto con agencia propia.

**Conclusión:** el registro dominante en todo el libro es (C) objetos afectados sobre un fondo de (A)/(B) escenario y recursos condicionantes; no se encontró un registro sostenido de (D) agentes materiales que reorganizan relaciones sociales por su propia fuerza. Este hallazgo confirma y decide el peso real de C6: **no estructurante**.

---

### 11. Temporalidad (§14)

Período histórico cubierto: 1492–2014, con referencias a la paleotempestología para tiempos anteriores a la presencia humana (mencionadas pero no centrales). Periodización propia del libro: cronológica por capítulos, cada uno anclado a una coyuntura política e histórica específica (mundo español temprano; mundo colonial del siglo XVII–XVIII; era de revoluciones 1780s–1830s; emancipación y auge azucarero hispano 1830s–1890s; expansión imperial estadounidense desde 1898; siglo XX medio; década de tormentas de los 1920s–30s [cap. 7, no leído en extenso]; huracanes de mediados de siglo [cap. 8, no leído en extenso]; Katrina y Sandy). Los huracanes no producen, por sí mismos, rupturas periodizadoras autónomas: la periodización sigue coyunturas políticas (independencias, abolición, 1898, Guerra Fría, siglo XXI), con los huracanes como puntos de anclaje narrativo dentro de cada coyuntura.

No se localizó, en la ficha corpus (`datos-atlas.json`, campo `y`), un campo de "período estudiado" heredado distinto al año de publicación (2015) que pudiera generar una discrepancia comprobable en esta lectura; no se detectó por tanto una incidencia temporal que requiera marcarse en este documento. Si Dirección Académica identifica un campo `periodo_estudiado` específico en `tp01-temporalidad.json` no consultado aquí (este documento no tocó ese archivo, conforme al apartado 25 de la instrucción), deberá verificarse por separado.

### 12. Territorio (§15)

Reconstrucción: el libro define explícitamente su propio territorio como el "Gran Caribe" (*Greater Caribbean*), un círculo geográfico centrado en Bridgetown, Barbados, que incluye el Golfo de México y el sudeste de Estados Unidos y excluye deliberadamente Brasil, Trinidad/Tobago/Curaçao y las Guayanas por razones geofísicas (zona de formación e impacto de huracanes). Dentro de ese marco, el libro es explícitamente **comparativo, imperial y atlántico**: recorre España/Cuba/Puerto Rico/República Dominicana, el Caribe británico y francés, Haití, y el sur/sudeste de Estados Unidos (Louisiana, Nueva Jersey, Nueva York). No es un estudio insular ni de un solo territorio.

**Incidencia territorial:** el corpus (`datos-atlas.json`, línea 2049) registra `"l": "puertorico"` como territorio único de la obra. La lectura confirma que Puerto Rico es efectivamente uno de los territorios centrales del libro (huracán San Ciriaco de 1899 es uno de los episodios más desarrollados), pero el objeto real de la obra es explícitamente transnacional y multiterritorial (España, Cuba, República Dominicana, Haití, el Caribe francés y británico, Estados Unidos continental), no reducible a Puerto Rico. Se marca por tanto:

**`INCIDENCIA_TERRITORIAL_PENDIENTE`** — el campo `l = "puertorico"` capta un territorio real y desarrollado en el libro, pero no representa su alcance geográfico efectivo, que es explícitamente pan-caribeño y atlántico. No se corrige en este documento ni en esta tarea.

---

### 13. Prueba de retirada (§16)

Para cada corriente superviviente como candidata a estructurante (C2, C4, C7):

- **C2:** si se retira, desaparece la explicación de por qué el huracán funciona, en los capítulos 1–5, como momento de exposición del miedo a la revuelta esclava y de la fragilidad del orden de plantación colonial; la mitad temprana del libro pierde su eje racial-económico específico. **Retirada destructiva** para ese tramo.
- **C4:** si se retira, desaparece la explicación de por qué la ayuda tras el desastre se condiciona sistemáticamente a la disciplina laboral (Puerto Rico 1899) y de por qué la reconstrucción post-Katrina beneficia desproporcionadamente a los más ricos y blancos; la mitad tardía del libro pierde su eje racial-económico específico. **Retirada destructiva** para ese tramo.
- **C7:** si se retira, desaparece la explicación de por qué cada episodio de desastre es también, sistemáticamente, un episodio sobre los límites y la naturaleza de la autoridad soberana (colonial, imperial, federal); dado que este eje está presente y ampliamente desarrollado en absolutamente todos los tramos leídos del libro (1780s a 2014), su retirada **desfiguraría la explicación central del libro en su totalidad**, no solo en un tramo cronológico.

Para las corrientes ya descartadas (C1, C3, C5, C6, C8, C9, C10) no aplica prueba de retirada como estructurantes; se registran como contextuales/incidentales/descartadas según el apartado 4.

---

### 14. Prueba de dominancia (§17)

Sobreviven dos o más corrientes candidatas (C2, C4, C7); se aplica el esquema A–F.

- **A. Causalidad:** en los episodios leídos, C7 (la cuestión de la autoridad soberana) es la variable que más consistentemente determina *cómo* se gestiona el desastre (quién decide, con qué recursos, bajo qué régimen político) en todos los períodos; C2/C4 determinan *sobre quién* recae el costo social y económico de esa gestión, en cada uno de sus respectivos períodos.
- **B. Finalidad:** el libro no parece dirigido primordialmente a explicar la esclavitud ni el postplantación por sí mismos (no es una historia social de la esclavitud caribeña ni del trabajo postemancipación), sino a explicar cómo las sociedades y sus gobiernos han respondido al riesgo natural — lo que acerca la finalidad última del libro más a C7 (poder, gobierno, soberanía) que a C2/C4 en solitario.
- **C. Criterio de valoración:** el propio autor valora explícitamente el éxito o fracaso de la respuesta al desastre en términos de gobierno, política y responsabilidad estatal (el contraste Cuba/Estados Unidos en el capítulo 9 es el ejemplo más claro), no en términos de la persistencia o transformación del régimen de trabajo en sí.
- **D. Dependencia:** C2 y C4 dependen, en su desarrollo argumental dentro de este libro específico, de la coyuntura de desastre y de la respuesta gubernamental para manifestarse (el desastre es la ocasión en la que la instrucción laboral/racial del régimen sale a la superficie); C7 no depende de C2/C4 de la misma manera — el problema de la soberanía y la autoridad política aparece con fuerza incluso en episodios donde la esclavitud/postplantación no son el foco (p. ej., el debate constitucional Estados Unidos–estados en Katrina y Sandy).
- **E. Distribución por capítulos:** C7 tiene presencia verificada en los nueve capítulos (según el rastreo de la tabla de contenidos y las muestras leídas); C2 se concentra en los capítulos 1–5; C4 se concentra en los capítulos 5–9.
- **F. Prueba de retirada:** ver apartado 13 — la retirada de C7 desfigura el libro en su totalidad; la retirada de C2 o C4 desfigura, cada una, solo su respectivo tramo cronológico.

**Resultado de la prueba de dominancia:** los criterios A, B, C, D, E y F apuntan de forma convergente a que **C7 tiene mayor pretensión de centralidad y continuidad que C2 y C4 por separado**, aunque ninguno de los seis criterios por sí solo basta para decidir si C7 alcanza el rango de principal en sentido pleno, ni si C2/C4 deben leerse como una única corriente secundaria de dos episodios (colonial y postcolonial) o como dos corrientes estructurantes coexistentes. Esta ponderación se traslada, sin decidirse, a los apartados 15–17.

---

### 15. Relaciones bilaterales (§18)

Corrientes que sobreviven como estructurantes: C2, C4, C7. Dado que C6 no sobrevive, las parejas C2/C6, C4/C6, C6/C7 y C5/C6 explícitamente señaladas por la instrucción **no se someten a prueba** (regla del §18: "solo si ambas corrientes del par sobreviven realmente"). Se analizan en su lugar los pares pertinentes entre las corrientes que sí sobreviven.

**C2/C4.** A→B: el régimen esclavista de plantación (C2) es la condición histórica previa de la que la desposesión postplantación (C4) hereda su estructura racializada — el propio Schwartz enmarca ambas como una sola condición de fondo ("slavery and its legacy of racial prejudice"). B→A: C4 no reconfigura retroactivamente a C2 dentro de este libro; son sucesivas, no recíprocas dentro del texto. Reciprocidad: baja — la relación es predominantemente secuencial (C2 antecede, C4 hereda), no de mutua constitución simultánea. Jerarquía: temporal más que estructural — ninguna domina conceptualmente a la otra, pero tampoco coexisten en el mismo tramo cronológico compitiendo por el mismo material. Dependencia: C4 depende históricamente de C2 (es su reorganización, no su sustituto). Irreductibilidad: cada una organiza un tramo cronológico propio e irreductible al otro. **No se cumplen las condiciones de `FRONTERA_CONSTITUTIVA`** (no hay mutua constitución simultánea ni ausencia de jerarquía temporal); se trata más bien de una relación de sucesión/continuidad histórica dentro de un mismo eje racial-económico.

**C2/C7.** A→B: el régimen esclavista genera, en varios episodios (Barbados 1780s–1831, Cuba/Puerto Rico 1850s–1870s), demandas y tensiones que inciden directamente en la cuestión de la soberanía colonial (temor a la lealtad de las colonias, anexionismo, guerra de independencia cubana). B→A: la autoridad soberana (metropolitana, colonial) determina a su vez el ritmo y la forma de la abolición y de la respuesta al desastre bajo régimen esclavista. Reciprocidad: alta dentro del tramo colonial. Jerarquía: no clara — ambas condicionan mutuamente los episodios leídos del período 1780–1870. Dependencia: mutua dentro de ese tramo. Irreductibilidad: cada una conserva contenido propio (C2 no se reduce a "efecto" de C7, ni viceversa). **Podría existir base para explorar `FRONTERA_CONSTITUTIVA` C2/C7 dentro del tramo colonial**, pero esta lectura no puede resolverlo con la evidencia reunida, entre otras razones porque C7 se extiende mucho más allá del tramo donde C2 es estructurante, lo que complica la exigencia de que "ninguna domina" a escala de todo el libro.

**C4/C7.** A→B: la desposesión racializada postplantación (Puerto Rico 1899, Katrina 2005) ocurre siempre bajo un régimen de soberanía específico (ocupación militar estadounidense, federalismo estadounidense) que la habilita y la enmarca. B→A: la gestión del desastre bajo ese régimen de soberanía se define, a su vez, en términos de disciplina laboral y desposesión diferencial (la "tutelary colonialism" es simultáneamente ejercicio de soberanía y de disciplina económico-racial). Reciprocidad: alta — este es el par con la relación más estrechamente entrelazada de todo el libro en los episodios leídos (San Ciriaco 1899, Katrina 2005). Jerarquía: no se observa dominancia estable de una sobre otra en los episodios examinados. Dependencia: mutua. Irreductibilidad: cada una conserva contenido propio y verificable por separado (el régimen de soberanía no se reduce a "instrumento" del régimen laboral, ni viceversa). **Este es el par con la evidencia más sólida para explorar `FRONTERA_CONSTITUTIVA` como hipótesis**, de forma estructuralmente análoga (no idéntica) a la relación C4/C7 ya aprobada en `pinedashipwrecked`.

---

### 16. `FRONTERA_CONSTITUTIVA` — evaluación como hipótesis (§19)

Esta lectura **no aprueba** ninguna `FRONTERA_CONSTITUTIVA`; solo puede dejarla planteada como hipótesis para la Dirección Académica, con la evidencia reunida arriba.

- **C4/C7:** hipótesis con apoyo más sólido — reciprocidad alta, ausencia de jerarquía estable, irreductibilidad mutua, evidencia suficiente en los episodios de Puerto Rico 1899 y Katrina 2005. Se deja registrada como **hipótesis con apoyo razonable**, sin aprobarla.
- **C2/C7:** hipótesis posible pero limitada al tramo colonial (1780–1870); la extensión de C7 mucho más allá de ese tramo dificulta sostener "ninguna domina" a escala del libro completo. Se deja registrada como **hipótesis débil / dependiente del recorte temporal**, sin aprobarla.
- **C2/C4:** no cumple las condiciones (relación predominantemente sucesiva/temporal, no de mutua constitución simultánea). **No se propone como hipótesis.**

No se declara ninguna `FRONTERA_CONSTITUTIVA` "para resolver la duda" sobre cuál corriente es principal; se deja expresamente como pregunta abierta para Dirección Académica (apartado 19).

---

### 17. `SINTESIS_MULTICORRIENTE` — evaluación como hipótesis (§20)

Sobreviven tres corrientes estructurantes (C2, C4, C7). Se evalúan las condiciones exigidas:

1. **¿Ninguna principal única resulta defendible?** Parcialmente en duda: la prueba de dominancia (apartado 14) sugiere que C7 tiene mayor pretensión de centralidad que C2 y C4 por separado, lo que podría defender a C7 como principal con C2 y C4 como corrientes secundarias sucesivas (cada una dominante en su propio tramo cronológico). Esta lectura no puede descartar esa arquitectura alternativa.
2. **¿Ninguna puede degradarse?** C2 y C4 sí podrían, en principio, degradarse a secundarias de C7 sin perder toda su fuerza explicativa, precisamente porque cada una está acotada a un tramo cronológico específico dentro de un arco que C7 recorre íntegro.
3. **¿La no jerarquía pertenece al argumento?** No de forma inequívoca: el propio autor no presenta su libro como un argumento sobre la ausencia de jerarquía entre raza/trabajo y soberanía; presenta la soberanía/hegemonía estadounidense y la esclavitud/su legado racial como "dos condiciones" que atraviesan la historia, sin afirmar que sean estructuralmente equivalentes o no jerarquizables entre sí.
4. **¿Se han probado las relaciones bilaterales?** Sí, en el apartado 15 de este documento.

**Conclusión:** las condiciones para `SINTESIS_MULTICORRIENTE` **no se cumplen de forma inequívoca** con la evidencia reunida en esta lectura — a diferencia de `pinedashipwrecked`, donde las tres corrientes carecían de un candidato principal claramente favorecido, aquí la prueba de dominancia sí inclina la balanza hacia C7. Se deja registrada como **hipótesis débil**, no como conclusión, y se ofrece como alternativa más plausible la arquitectura "C7 principal / C2 y C4 secundarias sucesivas" (ver apartado 18, arquitectura 1). No se propone `SINTESIS_MULTICORRIENTE` por acumulación temática.

---

### 18. Vacío taxonómico (§21)

Pregunta explícita: ¿las corrientes C1–C10 capturan bien el argumento del libro?

Sí, con una salvedad ya señalada: el dispositivo narrativo del huracán mismo —el "meta-narrative"/"leitmotif" que Schwartz declara explícitamente como su estrategia expositiva— no es en sí mismo una corriente C1–C10 y no debería confundirse con C6 (apartado 5 y 10). Pero esto no constituye un vacío taxonómico en el sentido que exige la instrucción: el *eje sustantivo* del libro (raza/trabajo bajo sucesivos regímenes de plantación y postplantación, articulado con la cuestión de la soberanía/hegemonía imperial) está bien capturado, sin distorsión relevante, por la combinación C2/C4/C7. El huracán como dispositivo narrativo es una característica *formal* del libro (cómo está escrito), no un *problema sustantivo* que quede sin corriente que lo capture.

**`VACÍO_TAXONÓMICO_POSIBLE` = NO.**

---

### 19. Relaciones heredadas del corpus (§22)

Se localizaron en `datos-atlas.json` cuatro relaciones vinculadas a `schwartz_seaofstorms` (todas tipo `"resonancia"`). No se modificó el archivo; se transcribe y clasifica académicamente cada una según la escala CORROBORADA / PLAUSIBLE / POR_CORROBORAR / DÉBIL / FALSO_POSITIVO.

1. **`schwartz_seaofstorms` ↔ `aftershocks`.** Fuente registrada en el corpus: *"Comparten el fenómeno Catástrofes climáticas y el lugar Puerto Rico. Por corroborar el vínculo textual directo: no se detectó cita cruzada explícita en el rastreo."* El propio corpus ya reconoce la ausencia de cita cruzada verificada; esta lectura no encontró, en los tramos leídos, ninguna mención de `aftershocks` ni de su autor. Clasificación académica: **POR_CORROBORAR** (coincidencia temática y territorial real, sin verificación textual directa).

2. **`goffedarklab` ↔ `schwartz_seaofstorms`.** Fuente registrada: *"Por corroborar"*, sin ningún fundamento adicional consignado en el corpus. Esta lectura no encontró ninguna mención de esa obra en el texto de Schwartz. Clasificación académica: **DÉBIL** — la relación carece de cualquier fundamento verificable, ni siquiera temático, más allá de su mera existencia como registro en el corpus.

3. **`mcneillmosquito` ↔ `schwartz_seaofstorms`.** Fuente registrada: *"Cita a Schwartz repetidamente («Schwartz 1985:188») pero por un trabajo distinto al catalogado (Sugar Plantations in the Formation of Brazilian Society, no Sea of Storms). Por corroborar el título exacto."* El propio corpus ya identifica que la cita corresponde a **otra obra** de Schwartz, no a *Sea of Storms*. Esta lectura confirma esa observación: no se encontró evidencia de que McNeil cite específicamente *Sea of Storms* (publicado en 2015, posterior a *Mosquito Empires*, 2010, lo que hace cronológicamente imposible que esta última cite a la primera). Clasificación académica: **FALSO_POSITIVO** — la relación registrada en el corpus vincula a Schwartz como autor citado, pero por una obra distinta a la catalogada; dado que *Sea of Storms* es posterior a *Mosquito Empires*, la cita no puede referirse al libro aquí analizado.

4. **`crawfordturtlemen` ↔ `schwartz_seaofstorms`.** Fuente registrada: *"Cita el libro por su título exacto en notas: «Schwartz, Sea of Storms»."* Esta es la única de las cuatro relaciones con verificación de título exacto ya consignada en el propio corpus. Clasificación académica: **CORROBORADA** — cita verificable por título exacto de la obra catalogada.

---

### 20. Incidencias registradas

- `INCIDENCIA_TERRITORIAL_PENDIENTE` (apartado 12): el corpus registra `l = "puertorico"` como territorio único; la obra es explícitamente pan-caribeña y atlántica, con Puerto Rico como uno de varios territorios centrales, no el único. No se corrige.
- No se identificó incidencia temporal comprobable con los datos consultados en esta tarea (apartado 11); no se tocó `tp01-temporalidad.json`.

---

### 21. Hasta tres arquitecturas académicas posibles

Se ofrecen, sin decidir, hasta tres arquitecturas compatibles con la evidencia reunida, para que Dirección Académica elija o solicite ampliación:

**Arquitectura 1 — C7 principal, C2 y C4 secundarias sucesivas.**
C7 (Soberanías, fronteras y ocupaciones) como corriente principal, sostenida en los nueve capítulos y explícitamente nombrada por el autor como una de las dos condiciones indispensables de su historia. C2 como secundaria en el tramo 1492–1873 (régimen esclavista de plantación). C4 como secundaria en el tramo 1873–2014 (postplantación, trabajo, desposesión racializada). Sin `FRONTERA_CONSTITUTIVA` bajo esta arquitectura (C7 domina de forma relativamente estable). Es la arquitectura mejor sostenida por la prueba de dominancia de este documento (apartado 14).

**Arquitectura 2 — `SINTESIS_MULTICORRIENTE` C2/C4/C7, sin principal.**
Las tres corrientes se leen como igualmente estructurantes, sin que ninguna alcance el rango de principal defendible, dado que cada una organiza un tramo irreductible de la explicación del libro (C2 el tramo esclavista, C4 el tramo postplantación, C7 el arco completo pero sin dominar conceptualmente a las otras dos en sus respectivos tramos). Bajo esta arquitectura sería pertinente evaluar `FRONTERA_CONSTITUTIVA` C4/C7 como hipótesis adicional dentro de la síntesis. Esta lectura encuentra esta arquitectura menos favorecida que la Arquitectura 1, pero no la descarta.

**Arquitectura 3 — C7/C4 como `FRONTERA_CONSTITUTIVA`, C2 secundaria histórica.**
C4 y C7 se leen como mutuamente constitutivas en el período moderno/contemporáneo del libro (1899–2014), sobre la base de la evidencia más sólida encontrada en esta lectura (apartado 15, par C4/C7). C2 se registra como corriente secundaria acotada al tramo colonial temprano (1492–1873), condición histórica de la que C4 hereda su estructura racial pero que no participa de la frontera constitutiva C4/C7 del período posterior.

---

### 22. Corpus, cola, matriz, marco y casos previos — confirmación de intangibilidad

No se modificó `datos-atlas.json`, `cola-lectura-pendiente-atlas-2.md`, `matriz-fronteras-c1-c10.md`, `marco-academico-consolidado-atlas-2.md`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json`, `tp01-temporalidad.json`, `index.html`, `scripts`, `interfaz` ni `lotes`. No se tocó la rama `respaldo-web-da5a6cb`. `womenancestors` (y sus tres documentos), `pinedashipwrecked` (y sus tres documentos), `whiteheadtiger`, `felicianosantos`, `andersonblackindigenous`, `PensamientoCaribeCuraduriaDigital.docx`, `expediente-evidencia-c7.md` y `ficha-decision-c4.md` permanecen intactos y no fueron reabiertos.

---

### 23. Estado final (§23)

Conforme al vocabulario permitido por la instrucción (`LISTO_PARA_DECISION` / `REQUIERE_AMPLIACION_DIRIGIDA` / `EVIDENCIA_INSUFICIENTE`):

**Estado: `LISTO_PARA_DECISION`.**

Justificación: se cumplió la lectura mínima obligatoria (Preface completo, capítulo de cierre completo, capítulos representativos de cada relación exigida por el §5.D, tabla de contenidos, pasajes definitorios), se ejecutó el contraste C1–C10 completo con evidencia textual verificable, se ejecutaron los cinco controles especiales exigidos (C6, C2, C4, C7, C5), se ejecutó el control de materialidad y agencia, se probaron las relaciones bilaterales pertinentes, se evaluaron como hipótesis (sin aprobar) `FRONTERA_CONSTITUTIVA` y `SINTESIS_MULTICORRIENTE`, se clasificaron las cuatro relaciones heredadas del corpus, y se identificó una incidencia territorial. La única limitación es que los capítulos 2, 7 y 8 no fueron leídos línea por línea en extenso (apartado 2); dado que (a) el rastreo léxico de cobertura completa del archivo no reveló ningún patrón divergente en esos tramos para ninguna de las diez corrientes, y (b) la arquitectura argumental del libro —confirmada explícitamente por el propio Preface— es consistente capítulo a capítulo (huracán como ocasión narrativa para explorar raza/trabajo y soberanía en cada época sucesiva), esta lectura considera que la evidencia reunida es suficiente para que Dirección Académica decida, sin necesidad de una ampliación dirigida previa. Si Dirección Académica prefiere verificar directamente los capítulos 2, 7 y 8 antes de decidir —particularmente el capítulo 8, "Public Storms, Communal Action, and Private Grief", por su título más cercano al registro afectivo/comunitario que podría tocar tangencialmente C9 o C10— puede solicitarse una ampliación dirigida focalizada en esos tramos.

---

### 24. Pregunta exacta para Dirección Académica

¿Debe adoptarse la Arquitectura 1 (C7 principal; C2 y C4 secundarias, cada una acotada a su tramo cronológico: C2 en 1492–1873, C4 en 1873–2014), o Dirección Académica prefiere evaluar `SINTESIS_MULTICORRIENTE` C2/C4/C7 (Arquitectura 2) o `FRONTERA_CONSTITUTIVA` C4/C7 con C2 como secundaria histórica (Arquitectura 3)? En cualquiera de los tres casos, ¿confirma Dirección Académica el descarte de C1, C3, C5, C6, C8, C9 y C10 como corrientes clasificatorias, y en particular el descarte de C6 pese a la coincidencia léxica del título con "Huracanes, ecologías y materialidades vivas"?

---

### 25. Verificación git final

Ejecutada antes de crear este documento, únicamente con comandos de solo lectura:

```
$ git branch --show-current
feat/atlas-2-etapa-1-integrada
$ git rev-parse HEAD
88d2c2062529a82acf83eec89340eff45571af57
$ git rev-parse origin/feat/atlas-2-etapa-1-integrada
88d2c2062529a82acf83eec89340eff45571af57
$ git status --short
?? PensamientoCaribeCuraduriaDigital.docx
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
$ git diff --stat
(sin salida; advertencia de índice, ver nota)
$ git diff --name-only
(sin salida)
$ ls -la .git/index.lock
-rw------- 1 rcw-01qsyrnjk4jxbinyrux4u5yl rcw-01qsyrnjk4jxbinyrux4u5yl 0 ago 22 13:51 .git/index.lock
```

Rama activa y HEAD local/remoto coinciden exactamente con lo esperado (`88d2c2062...`). Los tres archivos `??` esperados antes de esta tarea están presentes y sin cambios; ningún archivo rastreado aparece modificado. **`.git/index.lock` reapareció** durante la ejecución de `git diff --stat` (advertencia `unable to unlink…Operation not permitted`), exactamente el mismo comportamiento ya observado y reportado en los turnos de `pinedashipwrecked` y `womenancestors`, y anticipado explícitamente por esta misma instrucción en su apartado 26: no se intentó eliminarlo desde esta sesión; solo se reporta. No se ejecutó ningún comando de escritura git (`add`, `commit`, `push`, `reset`, `restore`, `checkout`, `stash`) en ningún momento de esta tarea. Tras la entrega de este documento, el estado esperado por la instrucción (apartado 27) es exactamente cuatro archivos `??`: los tres anteriores más `lectura-schwartz-seaofstorms-p2-etapa-2-3f.md`.
