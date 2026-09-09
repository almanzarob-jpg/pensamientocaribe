# Lectura académica probatoria — `duboisturits`

**Sublote P3-A · Caso 1 de 10 · Etapa 2-3h**

**Segunda versión revisada**, a partir de una nueva auditoría académica recibida sobre la versión anterior de este mismo documento. Esta revisión no repite la lectura del libro desde cero: parte de la lectura íntegra ya realizada (pp. 1–320) y de la auditoría de notas ya realizada, y corrige tanto la validez técnica de la arquitectura propuesta contra `esquema-datos-propuesto.json` como la aplicación de las pruebas C3/C4 y C7, que la versión anterior había resuelto usando una definición incompleta de C4 y, en el caso de C7, apoyándose todavía en el volumen narrativo. Se corrige también una imprecisión de localización sobre Trouillot y se reubica el peso probatorio del precedente `james`.

**Cambio de fondo respecto de la versión anterior.** La versión anterior concluyó C3 principal con C2, C4 y C7 como tres corrientes secundarias. Esa arquitectura es **técnicamente inválida**: `esquema-datos-propuesto.json`, en sus reglas del validador, prohíbe expresamente más de dos corrientes secundarias (`"Más de dos corrientes secundarias."`, línea 278). Al reevaluar C3 frente a C4 con el guion **completo** de C4 —no reducido a dominación o desposesión, sino incluyendo, en los términos literales de su propio dictamen, "cómo sujetos y comunidades rehacen la vida, reorganizan el trabajo, sostienen la reproducción social, habitan, disputan y sobreviven dentro de estructuras postplantacionarias persistentes o transformadas"—, la evidencia ya no sostiene a C3 como principal indiscutido frente a C4. Sostiene, en cambio, una relación bilateral genuinamente irreductible entre ambas, del tipo que el Atlas ya reconoce y tiene codificado en su esquema de datos bajo `arquitectura_recorrido.tipo: "frontera_constitutiva"` (precedentes verificados: `whiteheadtiger`, C1/C7; `schwartz_seaofstorms`, C6/C7, este último con dos corrientes secundarias adicionales registradas aparte, exactamente la forma que se propone aquí). Esta revisión reconstruye la clasificación desde ese punto de partida corregido, y resuelve así, de una vez, tanto el problema técnico del esquema como el problema de fondo señalado sobre la prueba C3/C4.

---

## 1. Naturaleza probatoria y no decisoria

Este documento es una **lectura dirigida sustancial** del caso `duboisturits`. Reúne evidencia textual verificada, aplica las seis pruebas metodológicas del Atlas a las diez corrientes (C1–C10) contra el guion y las fronteras ya ratificadas por sus dictámenes específicos, y audita las relaciones heredadas del corpus. **No constituye una decisión académica.** No fija corriente principal con carácter definitivo, no cierra el caso, no autoriza avanzar a `wilsoncrabantics` ni a ningún otro caso del sublote, y no modifica `datos-atlas.json`, `datos-atlas.js`, la cola, la matriz de fronteras, el marco consolidado, catálogos, esquemas, scripts ni la interfaz. La arquitectura que se recomienda en las secciones 18 y 19 es una **propuesta razonada y verificada** para la Dirección Académica, no una resolución. La emisión de `decision-academica-duboisturits` queda expresamente fuera del alcance de este documento.

---

## 2. Identidad bibliográfica verificada

- **Autores:** Laurent Dubois y Richard Lee Turits.
- **Título:** *Freedom Roots: Histories from the Caribbean*.
- **Editorial:** University of North Carolina Press, Chapel Hill.
- **Año:** 2019.
- **ISBN-13:** 9781469653600.
- **Extensión verificada del PDF:** 409 páginas; archivo no cifrado.
- **Estructura verificada desde el propio archivo**: Introduction, p. 1. Parte I, "Land and Freedom": Cap. 1 "The Indigenous Caribbean" (p. 9), Cap. 2 "The Worlds of the Plantation" (p. 53), Cap. 3 "Emancipation and the Rooting of Freedom" (p. 93). Parte II, "Empire and Revolution": Cap. 4 "U.S. Occupations in the Independent Caribbean" (p. 139), Cap. 5 "The Making of the Cuban Revolution" (p. 188), Cap. 6 "Revolution and Intervention in Cuba and the Dominican Republic" (p. 227), Cap. 7 "Transformation in Jamaica, Grenada, and Haiti" (p. 281). Epilogue, "Caribbean Futures" (p. 319). Acknowledgments (p. 321). Notes (p. 323), verificadas por encabezado interno de cada tramo: Introduction, p. 323; Notes to Chapter One, pp. 324–328; Notes to Chapter Two, pp. 329–336; Notes to Chapter Three, pp. 337–342; Notes to Chapter Four, pp. 343–352; Notes to Chapter Five, pp. 353–359; Notes to Chapter Six, pp. 360–371; Notes to Chapter Seven, pp. 372–380 (sin tramo de notas propio para el Epílogo). Index (p. 381 en adelante).

La identidad bibliográfica queda corroborada de forma independiente del nombre de archivo, que además conserva correctamente el espacio final en "Biliografia " y no fue alterado.

---

## 3. Archivo exacto y método de extracción

**Ruta fuente exacta:**
`/Users/robertoalmanza/Pagina/Biliografia /Freedom Roots _ Histories From the Caribbean -- Laurent Dubois and Richard Lee Turits -- University of North Carolina Press, Chapel Hill, 2019 -- The -- isbn13 9781469653600 -- 270699cb028e840edba082a2a0514633 -- Anna's Archive.pdf`

**Método:** extracción de texto con `pdftotext` hacia un directorio temporal **fuera del repositorio** (`$HOME/scratch_dubois/`). Desplazamiento constante entre paginación impresa y física (`física = impresa + 13`), verificado contra los encabezados internos "Notes to Chapter N". En esta revisión se extrajo y leyó además el pasaje del cuerpo en torno a las pp. 310–311 (Cap. 7), necesario para localizar con precisión la nota de la p. 379 sobre Trouillot.

**Ningún artefacto de extracción, copia del PDF ni resultado intermedio se dejó dentro del repositorio.**

---

## 4. Secciones y páginas efectivamente leídas

Introduction (pp. 1–8); Cap. 1 (pp. 9–52); Cap. 2 (pp. 53–92); Cap. 3 (pp. 93–138); Cap. 4 (pp. 139–187); Cap. 5 (pp. 188–226); Cap. 6 (pp. 227–280); Cap. 7 (pp. 281–318); Epilogue (pp. 319–320): el cuerpo argumental completo (pp. 1–320). De las **Notas** (pp. 323–380) se hizo auditoría dirigida por apellido de autor sobre la totalidad del rango, con verificación de encabezado de capítulo, y en esta revisión se amplió con la lectura puntual del pasaje del cuerpo (pp. 310–311) al que remite la nota de la p. 379. **No se leyeron:** Acknowledgments (p. 321) e Index (p. 381 en adelante); no son necesarias para las pruebas exigidas.

---

## 5. Nivel de lectura, cobertura y limitaciones

**Nivel de lectura alcanzado:** lectura dirigida sustancial completa del cuerpo argumental, con verificación de citas por cotejo directo contra el PDF. Auditoría dirigida y verificada del aparato de notas para las ocho relaciones heredadas.

**Limitaciones declaradas**, sin cambio de fondo: auditoría de notas por apellido, no lectura corrida completa de las 58 páginas de notas; Index no leído; guionado silábico del PDF conservado en citas literales; correspondencia nota-cuerpo establecida por coincidencia temática verificada, no por extracción de superíndices.

Con estas salvedades, la cobertura es suficiente para las pruebas exigidas. No se declara `REQUIERE_AMPLIACION_DIRIGIDA`: todas las correcciones exigidas por la nueva auditoría académica se resolvieron con el mismo PDF, con `esquema-datos-propuesto.json` y con los dictámenes ya consultados, sin necesidad de material adicional no disponible.

---

## 6. Problema central

¿Cómo, y en qué términos, las poblaciones del Caribe —indígenas, esclavizadas, libertas y campesinas— produjeron, defendieron y reconstituyeron formas de libertad a través de más de cinco siglos de dominación colonial, esclavista, imperial y estatal, y en qué relación están, en el argumento propio del libro, el acto de sustraerse activamente al poder (fuga, insurgencia) y la construcción de una vida material y comunitaria autónoma y sostenida (tierra familiar, producción campesina, reproducción social) — dos dimensiones que el libro trata, según se muestra en las secciones 13 y 14, como inseparables entre sí y no como una al servicio de la otra?

---

## 7. Pregunta

¿Qué significó "libertad" en la práctica histórica del Caribe estudiado por Dubois y Turits, y corresponde esa libertad, en el argumento propio del libro, a un único principio explicativo —sea la sustracción activa (sección de la corriente C3) o la reconstrucción autónoma de la vida material dentro de estructuras postplantacionarias (C4)—, o corresponde más bien a la relación irreductible entre ambas, tal como los propios autores la formulan como "contradicción dialéctica"?

---

## 8. Tesis

La tesis explícita del libro, declarada programáticamente en la Introducción (pp. 1–4) y verificada a lo largo de los siete capítulos, es que la historia del Caribe debe leerse como una **"contradicción dialéctica"** —expresión literal de los autores— entre la **plantación** y el **"counter-plantation system"** (concepto atribuido explícitamente a Jean Casimir, desarrollado también con Ángel Quintero Rivera): *"Our book is rooted in the counter-plantation perspective. That perspective is that of the majority of the people who, from the period of slavery [...]"* (p. 2).

**Corrección de fondo respecto de las dos versiones anteriores de este documento.** Ni la equiparación automática "counter-plantation = C4" de la primera versión, ni la equiparación automática "counter-plantation = C3" de la segunda, resisten una lectura del guion **completo** de ambas corrientes. El "counter-plantation system" tiene, en el propio libro, dos caras inseparables: el **acto** de sustraerse, defender y disputar (fuga, insurgencia, defensa de la tierra frente a la reocupación) — territorio propio de C3 — y la **forma institucional resultante**, sostenida generación tras generación, que reorganiza el trabajo, la tierra y la reproducción social dentro de la estructura postplantacionaria — territorio propio de C4 en su definición completa, no reducida a dominación. El propio fenómeno `contraplantacion` del catálogo del Atlas ya registra esta doble pertenencia, declarándose compatible con **C3 y C4** a la vez, no con una sola. La libertad, en el argumento del libro, no es reducible a ninguna de las dos por separado: es, en los términos de los propios autores, la relación dialéctica entre sustraerse (C3) y rehacer y sostener la vida (C4) — con C2 como condición histórica de la que se parte y C7 como el terreno estatal donde esa relación se juega también a mayor escala, sin desplazar su criterio.

---

## 9. Objeto y método

**Objeto:** una historia comparada de larga duración del Caribe (con foco privilegiado en Haití, República Dominicana, Cuba, Jamaica y Granada), desde la conquista española hasta las crisis políticas de finales del siglo XX, organizada en torno al eje analítico plantación/counter-plantation.

**Método:** síntesis historiográfica de amplio espectro, estructurada cronológica y temáticamente por capítulos, con uso recurrente de citas directas de fuentes primarias y de entrevistas etnográficas ajenas (Edith Clarke). No es monografía de archivo primario propio.

---

## 10. Fuentes y evidencias utilizadas por los autores

- **Jean Casimir y Ángel Quintero Rivera** (no relacionados técnicamente en el corpus): marco conceptual del "counter-plantation", cuerpo, p. 2.
- **Eric Williams**: causas económicas de la abolición, cuerpo, cap. 3, pp. 97–99, 114.
- **C. L. R. James**: la Revolución Haitiana como insurgencia consciente hacia la libertad, cuerpo, cap. 3, p. 99.
- **Sidney Mintz**: economía campesina, mercados y provision grounds, cuerpo, caps. 2–3, pp. 88, 121.
- **Michel-Rolph Trouillot**: intersticios de la plantación (cuerpo, pp. 57, 91), fiscalidad y terror bajo ocupación/Duvalier (cuerpo, pp. 168, 185–186). **Precisión adicional exigida por la nueva auditoría:** la nota de la p. 379 ("Notes to Chapter Seven") —*"We are drawing here from the title of Michel-Rolph Trouillot's book, Haiti, State against Nation"*— no anuncia que el título de *Freedom Roots* proceda de Trouillot ni que Trouillot ofrezca la genealogía conceptual general del libro. Comenta, de forma local, el pasaje del cuerpo en pp. 310–311 (Cap. 7), donde se narra la elección de Aristide en 1990 y la consigna de campaña de la comisión electoral, "We [the people] are the state . . . / the state is us" (p. 310) — una fórmula que invierte directamente el diagnóstico de Trouillot de un Estado histórico "contra" la nación. La nota identifica esa inversión puntual, no una filiación general. Se corrige así, en todo el documento, cualquier formulación que la haya presentado como "genealogía conceptual del libro" o "marco del título".
- **Natasha Lightfoot**: mercados dominicales, cuerpo, p. 91.
- **Edith Clarke**: tierra familiar y parentesco, cuerpo, pp. 125–126.

No se detectaron citas inventadas ni páginas fabricadas.

---

## 11. Arquitectura argumental

El libro se organiza en **"Land and Freedom"** (caps. 1–3) y **"Empire and Revolution"** (caps. 4–7). La Parte I formula, en la tierra familiar (cap. 3, p. 134), el caso empírico más denso de la relación C3/C4: una institución que solo existe porque fue activamente ganada y defendida (C3) y que solo importa porque sostuvo, generación tras generación, una vida material y comunitaria autónoma (C4). La Parte II traslada esa misma relación a la escala del Estado, la ocupación y la revolución, donde C2 (en su forma tardía) y sobre todo C7 aparecen como el terreno narrativo donde la disputa C3/C4 se juega también a mayor escala.

---

## 12. Temporalidad y escala territorial

**Periodización:** conquista española (fines s. XV) hasta los años 1980-90. **Escala territorial:** historia comparada regional —Haití, República Dominicana, Cuba, Jamaica y Granada con capítulo propio—, no una historia de Haití con anexos, aunque Haití recibe atención más sostenida por ser, en el propio argumento del libro, el caso más temprano y completo de constitución de un "counter-plantation system" a escala nacional tras 1804. El libro documenta asimetrías estructurales entre territorios y no homogeniza "el Caribe".

---

## 13. Conceptos organizadores, incluido `counter-plantation system`

El concepto organizador central es el "counter-plantation system", adoptado explícitamente de Jean Casimir y Ángel Quintero Rivera (p. 2: *"[...] a 'dialectical contradiction' between 'plantation and counter-plantation,' and between 'slavery and escape.'"*). Cada uso sustantivo se clasifica aquí de forma individual:

| Página | Contexto textual | Qué describe | Corriente(s) |
|---|---|---|---|
| p. 2 (Introducción) | Definición programática; "dialectical contradiction" | Marco declarado de todo el libro | El polo "plantation" es **C2** (régimen esclavista, condición de partida). El polo "counter-plantation" no se reduce a un solo término: nombra tanto el acto de sustraerse (**C3**) como la matriz de estructuras alternativas que ese acto produce y sostiene (**C4**, en su sentido pleno de "rehacer la vida... dentro de estructuras postplantacionarias") |
| p. 4 (Introducción) | *"Hard-­earned forms of popular land access and the defense of them [...]"* | Acceso a tierra ganado con lucha **y** defendido de forma continuada | Ambos verbos —ganar y defender— son igual de centrales en la frase: **C3** (lo ganado con lucha) **y C4** (lo que se sostiene como forma de vida) aparecen unidos, no jerarquizados |
| p. 30 (Cap. 1) | La historia indígena "sentó las bases" del counter-plantation posterior | Genealogía profunda | **C1**, precedente estructural reconocido por los autores, no disuelto en C3 ni en C4 |
| p. 134 (Cap. 3) | *"The counter-­plantation system, based on the institution of family land [...] was in fact quite productive [...] sustained rural communities"* | Tierra familiar como institución **productiva** que **sostiene** comunidades | El énfasis del propio pasaje está en la productividad y la sostenibilidad de la institución —lenguaje que coincide, término por término, con el guion de C4 ("sostienen la reproducción social")—, sin que ello borre que esa institución "based on" (se funda en) actos de adquisición y defensa activa, que son **C3**. Es el pasaje más denso de la relación C3/C4 en todo el libro |
| p. 166 (Cap. 4) | El "counter-­plantation system" haitiano derrota un proyecto estadounidense de reconstrucción de plantación | Sustracción popular que derrota una imposición laboral | El acto de resistencia es **C3**; lo que se resiste —imposición fiscal y laboral bajo ocupación— es **C4** (reorganización postplantacionaria impuesta) y **C7** (autoridad de ocupación) |
| p. 255 (Cap. 6) | La revolución cubana de 1959 "cierra" el espacio para una "reestructuración counter-plantation" | Evaluación crítica de un resultado revolucionario | Lo que se pierde es explícitamente una **reestructuración** —una reorganización autónoma de la producción agraria, no un acto de fuga o insurgencia, que ya había ocurrido y triunfado en la guerra guerrillera previa—: es **C4** en su sentido pleno. El agente que cierra esa posibilidad es el nuevo Estado revolucionario, **C7** |

**Conclusión de esta sección.** El concepto no se traduce en bloque a una sola corriente, y tampoco se reparte limpiamente entre pasajes "C3" y pasajes "C4": en sus dos usos más decisivos (p. 134 y p. 255) aparecen **ambas corrientes entrelazadas en el mismo pasaje**, sin que ninguna funcione como mero contexto de la otra. Su polo antagonista corresponde a C2 (período esclavista) y, cuando el terreno se traslada al Estado, a C7, que en p. 166 y p. 255 funciona como el terreno donde la disputa C3/C4 se juega y es evaluada.

---

## 14. Causalidad, finalidad, criterio de valoración y dependencia

**C2 (trata, esclavización, plantación).** Condición histórica de partida; nunca criterio positivo de valoración; el cap. 2 la trata en sus propios términos (trabajo de tarea, provision grounds, mercados), pero orientada a mostrar los intersticios de donde surge la sustracción y la institución posteriores. Dependencia: alta hacia el par C3/C4, que evalúa sus efectos, no al revés.

**C3 y C4, reevaluadas conjuntamente con el guion completo de ambas.** Aplicando otra vez causalidad, finalidad, criterio de valoración, dependencia, retirada y dominancia, ahora sin reducir a C4 a "dominación" ni a "antagonista":

- *Causalidad.* C3 (fuga, defensa activa, insurgencia) es el motor recurrente que abre la posibilidad histórica; C4 (tierra familiar como institución, mercados, reorganización del trabajo, reproducción social) es la forma en que esa posibilidad se estabiliza y persiste. Ninguna de las dos es reducible a un efecto de la otra: sin C3 no habría institución que defender; sin C4 el acto de sustraerse no dejaría, en el propio relato del libro, ningún resultado material que el libro considere valioso.
- *Finalidad y criterio de valoración.* El pasaje más exigente del libro (p. 255) no evalúa la revolución cubana de 1959 por si hubo o no un acto de insurgencia exitoso —lo hubo, y el libro lo narra sin ambigüedad en los caps. 5–6 como logro—; la evalúa por si ese triunfo permitió o no una **reorganización autónoma de la producción agraria** —criterio explícitamente C4—. Pero, simétricamente, el pasaje sobre la tierra familiar (p. 134, p. 4) no valora la institución solo por su productividad: la valora porque fue "hard-earned" y porque su defensa es un acto sostenido de sustracción —criterio explícitamente C3—. El libro aplica, según el pasaje, uno u otro criterio, y en los dos pasajes más decisivos los aplica **entrelazados en la misma frase** (p. 134: "based on the institution of family land... quite productive... sustained rural communities", donde la institución se define a la vez por cómo se ganó y por lo que sostiene).
- *Dependencia.* No se encontró, en ningún pasaje decisivo, que C3 fije el criterio con el que se evalúa a C4 de forma consistente, ni lo contrario. La dependencia es bidireccional según el pasaje, no unidireccional.
- *Retirada.* Retirar C3 de la tierra familiar deja una institución sin explicación de cómo se ganó ni por qué se defiende generación tras generación — destructivo para el argumento del libro, que insiste en el carácter "hard-earned" de la tierra (p. 4). Retirar C4 deja actos de fuga e insurgencia sin ningún resultado material que el libro trate como lo que está en juego — igualmente destructivo, porque vacía de sentido el reproche explícito a la revolución cubana de 1959 (p. 255), que no lamenta la ausencia de un acto de insurgencia (ya ocurrido) sino la ausencia de una reorganización autónoma posterior.
- *Dominancia.* Ninguna de las dos gana de forma consistente. Se cumplen así las condiciones acumulativas de `FRONTERA_CONSTITUTIVA` ratificadas en `dictamen-academico-bloque-1-etapa-2-3.md` §4: ambas estructuran el argumento con evidencia explícita (condición 2); ninguna es reducible a contexto, mecanismo o resultado de la otra (condición 3, demostrado por la doble prueba de retirada); la no jerarquía pertenece al argumento del libro y no a una duda del clasificador —los propios autores la formulan como "dialectical contradiction", no como secuencia medio-fin (condición 4)—; se descarta expresamente que la causa sea falta de lectura, ambigüedad o insuficiencia de evidencia: la lectura es íntegra y los dos pasajes decisivos (p. 134, p. 255) son inequívocos, no vagos (condición 5). No es, por tanto, ni un "empate automático" ni una "clasificación múltiple libre", exclusiones expresas que la propia definición de `FRONTERA_CONSTITUTIVA` señala: es una relación bilateral con evidencia textual explícita de irreductibilidad mutua en los dos pasajes más centrales del libro.

**C7 (soberanías, fronteras y ocupaciones), evaluada por la forma del argumento, no por el volumen de capítulos.** El criterio ratificado en el dictamen de C7 para la frontera C3/C7 es *"C3 será principal cuando el argumento esté organizado por fuga, cimarronaje, insurgencia, sustracción o construcción de autonomía frente al poder; C7 será principal cuando el argumento esté organizado por la constitución, disputa o ejercicio de soberanía, autoridad, frontera, ocupación o estatus político"*, y "manda la forma del argumento, no el origen del sujeto". Aplicado a los dos pasajes decisivos: en p. 166, la autoridad de ocupación (C7) es el obstáculo que el counter-plantation (C3/C4) derrota, no el problema que el argumento busca resolver por sí mismo; en p. 255, el logro de soberanía plena (C7 en su forma más fuerte posible, la revolución misma) se evalúa por si habilitó o cerró la reorganización autónoma del par C3/C4, no al revés. El libro sí dedica desarrollo real y propio a preguntas de estatuto político, ocupación e independencia —esto se registra descriptivamente, no como prueba—, pero en ningún pasaje decisivo es C7 quien fija el criterio con el que se juzga a C3/C4. **Se retira aquí el argumento del volumen narrativo ("cuatro de siete capítulos") como evidencia de clasificación**, conforme a lo exigido: el volumen se menciona solo como dato descriptivo del desarrollo real de C7, nunca como parte de la prueba de dominancia.

**Sobre el precedente `james`.** *The Black Jacobins* —la misma obra que Dubois y Turits citan y adoptan en p. 99— fue clasificada por el Atlas como C3 principal/C7 secundaria en la propuesta normativa de síntesis multicorriente, con el fundamento de que la independencia es "garantía necesaria de una libertad ya conquistada, no fin en sí mismo". **Se corrige aquí la función de este precedente**, que la versión anterior usó como si cerrara por sí solo la prueba de dominancia C3/C7 en *Freedom Roots*. No la cierra: que Dubois y Turits citen y compartan la lectura de James sobre la Revolución Haitiana es evidencia de una tradición interpretativa común, útil como apoyo comparativo para leer C7 como dependiente en *Freedom Roots* también, pero no transfiere automáticamente la jerarquía de una obra a otra. La conclusión sobre C7 en esta sección se sostiene por los pasajes p. 166 y p. 255 del propio libro, con `james` registrado únicamente como antecedente comparativo dentro del Atlas, no como prueba decisiva.

---

## 15. Contraste individual C1–C10

**C1.** Cap. 1 completo (pp. 9–52). Vinculado explícitamente por los autores a la genealogía del counter-plantation (p. 30). **Contextual, con integración genealógica reconocida; no estructurante del núcleo del argumento.**

**C2.** Cap. 2 completo, trasfondo constante. El régimen esclavista organiza el cap. 2 en sus propios términos. **Secundaria estructurante, condición histórica de la que parte el par C3/C4.**

**C3.** Motor causal recurrente y, en los pasajes decisivos, co-criterio de valoración junto con C4 (sección 14). **Estructurante; forma, junto con C4, el núcleo del argumento (`FRONTERA_CONSTITUTIVA`, secciones 14 y 18).**

**C4, en su guion completo (no reducido a dominación).** Institución que reorganiza trabajo, tierra y reproducción social; co-criterio de valoración junto con C3 en los pasajes decisivos (sección 14). **Estructurante; forma, junto con C3, el núcleo del argumento.**

**C5.** Migración laboral haitiana y jamaicana hacia Cuba y RD (caps. 4–5), subordinada al argumento de C2/C4. **Contextual, no estructurante.**

**C6.** Sin desarrollo sostenido identificado. **Ausente como corriente estructurante.**

**C7.** Desarrollo real y propio en cuatro capítulos (dato descriptivo, no probatorio), evaluado en todos los pasajes decisivos por el criterio del par C3/C4, sin fijar nunca ese criterio (sección 14). **Secundaria estructurante, terreno donde se juega y evalúa la disputa C3/C4.**

**C8.** Prácticas culturales afrocaribeñas nacidas en los intersticios de la plantación (Trouillot, p. 57), sin desarrollo propio. **Tema mencionado, no estructurante.**

**C9.** Posible preservación de prácticas religiosas indígenas (p. 30); testimonios orales de Clarke (pp. 125–126). **Presente de forma incidental, no estructurante.**

**C10.** El parentesco es sustantivo en el tratamiento de la tierra familiar (Clarke, pp. 125–126), pero ocupa dos páginas dentro de un capítulo cuyo argumento central es la tenencia de tierra, no el parentesco, el cuerpo o el género como problema en sí. Verificado contra el guion ratificado de C10 (exige que el cuerpo, el parentesco, el deseo o el género **organicen sustantivamente el argumento**, no que aparezcan). **No organiza sustantivamente el argumento; no estructurante (sección 19).**

---

## 16. Pruebas de retirada y dominancia

| Corriente | Resultado de retirada | Naturaleza |
|---|---|---|
| C1 | Destructiva para la genealogía profunda | Contextual |
| C2 | Destructiva para la condición histórica de partida | Secundaria estructurante |
| C3 | Destructiva para el par C3/C4: vacía la institución de tierra de su origen y su defensa | Estructurante — núcleo, junto con C4 |
| C4 | Destructiva para el par C3/C4: vacía los actos de sustracción de su resultado material | Estructurante — núcleo, junto con C3 |
| C5 | No estructural | Contextual |
| C6 | No aplica (ausente) | — |
| C7 | Destructiva para el terreno narrativo de la Parte II; no destructiva para el criterio con el que se evalúa a C3/C4 | Secundaria estructurante |
| C8 | No estructural | Contextual/mencionada |
| C9 | No estructural | Incidental |
| C10 | No estructural | No organiza sustantivamente el argumento |

**Dominancia.** Entre C3 y C4: ninguna gana de forma consistente (sección 14) — relación bilateral irreductible, `FRONTERA_CONSTITUTIVA`. Entre el par C3/C4 y C2: el par evalúa los efectos de C2, no al revés. Entre el par C3/C4 y C7: el par fija el criterio con el que se evalúan los logros de soberanía (p. 255), no al revés. Entre el par C3/C4 y C1: C1 es precedente genealógico, no criterio de valoración. **El par C3/C4, tomado conjuntamente, gana sus tres comparaciones bilaterales frente a C1, C2 y C7; dentro del propio par, ninguna de las dos gana frente a la otra.**

---

## 17. Corrientes supervivientes, contextuales y descartadas

- **Núcleo estructurante, en relación bilateral irreductible (`FRONTERA_CONSTITUTIVA`):** C3 y C4.
- **Secundarias estructurantes, subordinadas al núcleo (máximo dos, conforme al esquema vigente):** C2 y C7.
- **Contextual, con integración genealógica reconocida:** C1.
- **Contextuales, mencionadas sin desarrollo propio:** C5, C8, C9.
- **Descartada por ausencia de desarrollo:** C6.
- **No organiza sustantivamente el argumento; no constituye vacío taxonómico (sección 19):** C10.

---

## 18. Arquitectura recomendada y alternativas

**Arquitectura recomendada, técnicamente válida contra `esquema-datos-propuesto.json`:** `arquitectura_recorrido.tipo = "frontera_constitutiva"`, con `recorridos: ["c3", "c4"]` como núcleo estructurante, y `recorridos_sec: ["c2", "c7"]` como las dos corrientes secundarias admitidas por el esquema. Esta forma reproduce exactamente la estructura de datos ya usada por el precedente `schwartz_seaofstorms` (`arquitectura_recorrido.tipo: "frontera_constitutiva"`, `recorridos: ["c6","c7"]`, con `recorridos_sec: ["c2","c4"]` registradas aparte): una frontera constitutiva puede coexistir con hasta dos secundarias adicionales sin infringir la regla del validador, porque esa regla se aplica al campo `recorridos_sec`, no al campo `arquitectura_recorrido.recorridos`.

**Fundamento.** C3 y C4, aplicadas con su guion completo, ganan juntas sus tres comparaciones bilaterales frente a C1, C2 y C7 (sección 16), pero ninguna de las dos gana consistentemente frente a la otra: los dos pasajes más decisivos del libro (p. 134 y p. 255) entrelazan ambos criterios en la misma frase, y los propios autores formulan la relación como "contradicción dialéctica", no como jerarquía. Se cumplen las seis condiciones acumulativas de `FRONTERA_CONSTITUTIVA` (sección 14).

**Se examinó y se retira, con evidencia explícita, la arquitectura jerárquica que sostenían las dos versiones anteriores de este documento** (primero C3 principal con C4 secundaria dentro de una frontera C3/C7 mal definida, luego C3 principal con C2, C4 y C7 como tres secundarias): ninguna de las dos resiste la prueba una vez aplicado el guion completo de C4 y el límite técnico de dos secundarias del esquema vigente.

**Se examinó y se retira `SINTESIS_MULTICORRIENTE`.** No corresponde: no hay tres o más corrientes sin principal defendible en absoluto — hay exactamente dos corrientes (C3, C4) mutuamente irreductibles entre sí que, tomadas juntas, sí dominan a las demás (C1, C2, C7). Esa es la forma exacta que la definición de `FRONTERA_CONSTITUTIVA` describe, no la de una síntesis sin ningún núcleo.

**Alternativa real, más débil, que se conserva como pregunta abierta (no como arquitectura competidora):** que C7 no sea uniformemente dependiente del par C3/C4 en toda la Parte II. La evidencia de dependencia proviene de dos pasajes decisivos (p. 166, p. 255); en el desarrollo más extenso del cap. 4 (arquitectura institucional de la ocupación) y del cap. 7 (reformas de Manley y Bishop) no se verificó, pasaje por pasaje, que C7 esté siempre subordinado del mismo modo. Esta lectura no encontró ningún pasaje en el que C7 fije el criterio de C3/C4, por lo que la alternativa no compite con la arquitectura recomendada; se registra como la evidencia adicional que, de existir, permitiría a la Dirección Académica decidir si C2 y C7 deben ambas permanecer como secundarias del par, o si una de ellas merece, en cambio, ser evaluada en una lectura ampliada como parte de una frontera propia con C7 (p. ej. C3/C7, ya descartada en esta lectura por falta de evidencia de irreductibilidad, pero que una relectura dirigida de los caps. 4 y 7 podría, en principio, reabrir).

---

## 19. Evaluación de frontera constitutiva, síntesis multicorriente y vacío taxonómico

**`FRONTERA_CONSTITUTIVA`:** **se declara, entre C3 y C4** (secciones 14, 16 y 18), con las seis condiciones acumulativas verificadas y documentadas. No se declara entre ningún otro par (C3/C7 y C1/C7 fueron evaluadas y no satisfacen irreductibilidad mutua: en ambos casos una corriente evalúa sistemáticamente a la otra sin reciprocidad).

**`SINTESIS_MULTICORRIENTE`:** evaluada y **no declarada** (sección 18): la estructura real de la evidencia es una frontera bilateral con dos secundarias dependientes, no un conjunto de tres o más corrientes sin ningún núcleo dominante.

**`VACÍO_TAXONÓMICO_POSIBLE`:** **NO.** El componente de parentesco de la tierra familiar (Clarke, pp. 125–126) ya está cubierto por definición dentro del guion de C10; el libro simplemente no lo desarrolla lo suficiente para que organice sustantivamente su argumento (sección 15). No se encontró ningún mecanismo central del libro que ninguna corriente C1–C10 pueda capturar sin deformación.

---

## 20. Incidencias bibliográficas, territoriales y temporales

- **Bibliográfica:** se confirma la discrepancia entre el encargo original (siete relaciones) y el corpus real (ocho, incluida `smithredblack`). Las etiquetas heredadas (`f`) del nodo `duboisturits` en `datos-atlas.json` son `soberanias`, `cimarronaje` y `postplantacion` —correspondientes aproximadamente a C7, C3 y C4—. **Precisión de esta revisión:** esas tres etiquetas no respaldan por sí solas ninguna arquitectura concreta, ni la de "tres secundarias" de la versión anterior ni la de "frontera C3/C4 con dos secundarias" de esta; una etiqueta heredada no constituye clasificación, y aquí se registra solo como dato de trazabilidad, no como evidencia. El campo `ap` del nodo `duboisturits`, anterior a esta lectura, describe el libro en términos de "acceso a la tierra y a la vida propia, no ciudadanía abstracta" y lo registra como "texto-brújula" junto a `trouillothaitistate` y `knight_genesisnacionalismo`; se deja constancia de esa nota curatorial previa sin usarla como evidencia clasificatoria.
- **Territorial y temporal:** sin cambios (sección 12).

---

## 21. Auditoría de las ocho relaciones heredadas y candidaturas nuevas

Se mantiene, sin cambio respecto de la revisión anterior, la distinción entre **estado de corroboración textual** y **función argumental**, con una sola corrección de función (relación 1).

**1. `james`.** Nodo del corpus verificado sin ambigüedad: *The Black Jacobins* (C. L. R. James, 1938), citado en el cuerpo p. 99 y en nota 10 del cap. 3 (p. 337). **Corrección de función exigida por esta revisión:** su papel no es el de precedente decisivo que cierre la prueba de dominancia C7 de *Freedom Roots* (sección 14); es el de un antecedente comparativo dentro del propio Atlas, que respalda pero no sustituye la evidencia interna del libro. **Estado: CORROBORADA. Función: resonancia directa; apoyo comparativo para la lectura de C7 como dependiente, no prueba decisiva por sí sola.**

**2. `mintz`.** Nodo compuesto, *"Caribbean Transformations / Sweetness and Power"*. **Sweetness and Power**: corroborado por cita directa en el cuerpo (pp. 88, 121) y notas (pp. 331, 334). **Caribbean Transformations**: corroborado de forma independiente por la nota del cap. 2 (p. 336, ensayo "The Origins of the Jamaican Market System"). Ambos componentes corroborados por separado. **Estado: CORROBORADA para ambos componentes. Función: resonancia central para el par C3/C4 (mercados campesinos, autoabastecimiento).**

**3. `trouillothaitistate`.** *Haiti, State against Nation* (1990). Cuerpo: pp. 168, 185–186 (fiscalidad rural bajo ocupación, terror duvalierista, cap. 4). **Corrección de función exigida por esta revisión:** la nota de la p. 379 (Notes to Chapter Seven) comenta de forma local el pasaje de pp. 310–311 sobre la consigna electoral "we are the state / the state is us" sección 10—, no una genealogía general del título o del marco conceptual del libro completo. Se retira toda formulación que la haya presentado como "la relación más profundamente integrada" sin esa evidencia comparativa. **Estado: CORROBORADA. Función: resonancia real y verificada en tres pasajes distintos del cuerpo (pp. 168, 185–186, y el eco puntual en pp. 310–311), sin que ello la distinga como más central que `mintz` o `clarkemymother` para el núcleo C3/C4 del argumento.**

**4. `knight_genesisnacionalismo`.** *The Caribbean: The Genesis of a Fragmented Nationalism* (1978). Citado en nota de la Introducción (p. 323), sin discusión nominal en el cuerpo. **Estado: CORROBORADA. Función: contextual/genealógica.**

**5. `lightfoot`.** *Troubling Freedom* (2015). Cuerpo, p. 91. **Estado: CORROBORADA. Función: resonancia directa para C3/C4 (mercados como espacio de autorreconocimiento colectivo).**

**6. `clarkemymother`.** *My Mother Who Fathered Me* (1957). Cuerpo, pp. 125–126, con citas textuales extensas de sus entrevistados. **Estado: CORROBORADA. Función: resonancia directa de máxima relevancia empírica para el núcleo C3/C4 (tierra familiar).**

**7. `williamscapitalismo`.** *Capitalism and Slavery* (1944). Cuerpo, pp. 97–99, 114, debate crítico explícito. **Estado: CORROBORADA. Función: resonancia crítica, relevante para C2.**

**8. `smithredblack`.** *Red and Black in Haiti* (2009). Notas cap. 4, pp. 351–352. No citado por nombre en el cuerpo; comunicación personal declarada en nota del cap. 7 (p. 373). **Estado: CORROBORADA. Función: contextual/de respaldo, sin centralidad argumental directa.**

**Candidaturas nuevas razonadas, no incorporadas:** Jean Casimir y Ángel Quintero Rivera, autores de quienes el libro toma su concepto organizador central (p. 2).

**Resumen de estados:** las ocho relaciones quedan **CORROBORADAS** en identidad bibliográfica y precisión de cita. Ninguna es `POR_CORROBORAR`, `PLAUSIBLE`, `DÉBIL` ni `FALSO_POSITIVO`. Por función: `mintz`, `clarkemymother`, `lightfoot` y `trouillothaitistate` — resonancia directa central para el núcleo C3/C4; `james` — resonancia directa, con función de apoyo comparativo (no decisiva) para C7; `williamscapitalismo` — resonancia crítica para C2; `knight_genesisnacionalismo` y `smithredblack` — función contextual/de respaldo.

---

## 22. Estado final, pregunta decisoria, auditoría técnica y confirmaciones

**Tabla comparativa final:**

| Corriente | Evidencia textual | Función argumental | Retirada | Dominancia | Estatus propuesto |
|---|---|---|---|---|---|
| C3 | Programática (p. 2, p. 4); pasajes decisivos p. 134, p. 166, p. 255 | Sustracción activa; co-criterio de valoración con C4 | Destructiva para el núcleo | No gana de forma consistente frente a C4 | **Núcleo (frontera constitutiva con C4)** |
| C4 | Cap. 3 (p. 134) y desarrollo en caps. 4–6; guion completo, no reducido a dominación | Reconstrucción y sostén de la vida material; co-criterio de valoración con C3 | Destructiva para el núcleo | No gana de forma consistente frente a C3 | **Núcleo (frontera constitutiva con C3)** |
| C2 | Cap. 2 completo | Condición histórica de partida | Destructiva | Evaluada por el núcleo C3/C4 | Secundaria |
| C7 | Desarrollo real en cuatro capítulos (dato descriptivo) | Terreno donde se juega y evalúa la disputa del núcleo | Destructiva a nivel narrativo | Evaluada por el núcleo C3/C4 (p. 166, p. 255); precedente comparativo `james`, no decisivo | Secundaria |

**Estado final alcanzado: `LISTO_PARA_DECISION`.**

Justificación: se resolvió la incompatibilidad técnica con `esquema-datos-propuesto.json` adoptando la forma de datos ya validada por el precedente `schwartz_seaofstorms` (frontera constitutiva + dos secundarias, campos separados); se repitió formalmente la prueba C3/C4 con el guion completo de C4, encontrando irreductibilidad mutua genuina en los dos pasajes más decisivos del libro, no una subordinación forzada; se corrigió la localización e interpretación de la nota sobre Trouillot (nota al cap. 7 que comenta un pasaje local, pp. 310–311, no una genealogía general); se evaluó C7 exclusivamente por la forma del argumento, retirando el conteo de capítulos como prueba; se reubicó el precedente `james` como apoyo comparativo, no como prueba decisiva; se verificó que las 22 secciones exigidas permanecen, que la arquitectura contiene un núcleo bilateral y un máximo de dos secundarias, que todas las tablas coinciden con la conclusión, y que no queda ninguna formulación descartada ("tres secundarias", "peso diferenciado", Trouillot como origen del título, C4 como simple antagonista, o el conteo de capítulos como prueba).

**Pregunta decisoria exacta para la Dirección Académica:**

Esta lectura recomienda registrar `duboisturits` con `arquitectura_recorrido.tipo = "frontera_constitutiva"` entre **C3 y C4**, y `recorridos_sec = ["c2", "c7"]` como las dos corrientes secundarias, arquitectura técnicamente válida contra el esquema vigente y sostenida por evidencia de irreductibilidad mutua en los dos pasajes más decisivos del libro (p. 134, p. 255). La incertidumbre real que queda abierta es puntual: **¿debe C7 leerse de forma ampliada en los capítulos 4 y 7 —más allá de los dos pasajes decisivos ya verificados— antes de confirmarla como secundaria simple del núcleo C3/C4, o la evidencia ya reunida es suficiente para esa confirmación?** Esa lectura ampliada, si se autoriza, es la evidencia concreta que permitiría cerrar la pregunta.

**Resultado coherente de las ocho relaciones:** las ocho **CORROBORADAS** en identidad bibliográfica y cita; distinguidas por función según la sección 21, con `james` corregida de "precedente decisivo" a "apoyo comparativo".

**Auditoría técnica y estado del repositorio:**

- Rama: `main` (sin cambio). HEAD: `2f4155cf330b5a192ec497dfacba153d42d99ca0` (sin cambio).
- `git status --short`: el único archivo afectado es el documento autorizado, ya existente como no rastreado (`??`); esta revisión lo modifica en el mismo lugar.
- No se ejecutó ningún comando de escritura de git.
- No se modificó `datos-atlas.json`, `datos-atlas.js`, `esquema-datos-propuesto.json`, la cola, la matriz de fronteras, el marco consolidado, catálogos, esquemas, scripts ni la interfaz.
- No se modificó ningún documento de P1 ni de P2, ni ningún dictamen académico existente.
- No se dejó ningún artefacto de extracción dentro del repositorio.
- No se avanzó a `wilsoncrabantics` ni a ningún otro caso del sublote P3-A.
- No se emitió `decision-academica-duboisturits` ni ninguna clasificación definitiva.

**Confirmación expresa:** este documento no constituye una decisión académica definitiva; no se avanzó a ningún otro caso; no se ejecutó ninguna operación de escritura Git.
