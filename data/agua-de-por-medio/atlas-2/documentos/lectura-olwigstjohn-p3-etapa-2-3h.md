# Lectura probatoria — Caso 4/10 (sublote P3-A) — `olwigstjohn`

**P3 · Etapa 2-3h · Karen Fog Olwig, *Cultural Adaptation and Resistance on St. John: Three Centuries of Afro-Caribbean Life* (1985)**

Documento elaborado en cumplimiento estricto de "P3-A · CASO 4/10 — LECTURA PROBATORIA DESDE CERO". Reinicio metodológico total: ninguna arquitectura de los casos anteriores (Du Bois, Wilson, *Cuijla*) se transfiere a este expediente. Cada corriente, cada arquitectura especial y cada relación se evalúan aquí exclusivamente contra la evidencia de esta obra.

---

## 1. Naturaleza probatoria

Este documento es un expediente de **lectura probatoria**, no una decisión académica. Registra evidencia, reconstrucción de tesis, contraste con C1–C10, aplicación de pruebas metodológicas y una recomendación de arquitectura de clasificación. No implementa ningún campo del corpus, no modifica `datos-atlas.js`/`.json`, no corrige metadatos, no implementa relaciones y no crea corrientes nuevas. Los antecedentes del nodo (§2 más abajo) se registran como **antecedentes por auditar**, no como evidencia clasificatoria: la clasificación aquí propuesta se deriva exclusivamente de la lectura de la obra, no del valor previo de `f` (etiquetas heredadas) ni del recorrido provisional citado en la cola.

---

## 2. Identidad bibliográfica y antecedentes del nodo

| Campo | Valor verificado |
|---|---|
| `atlas-id` | `olwigstjohn` |
| Autora | Karen Fog Olwig |
| Título | *Cultural Adaptation and Resistance on St. John: Three Centuries of Afro-Caribbean Life* |
| Año (corpus) | 1985 |
| Editorial / lugar (verificado en el PDF) | University of Florida Press, Gainesville, 1985 |
| Ruta exacta del archivo fuente | `Biliografia /Cultural adaptation and resistance on St_ John _ three -- Olwig, Karen Fog, 1948- -- Gainesville, Florida, 1985 -- Gainesville _ University of Florida -- isbn13 9780813008189 -- 06bbf5cca0dd411d2ddded0513729854 -- Anna's Archive.pdf` (nota: la carpeta se llama literalmente `Biliografia ` con espacio final) |
| Edición efectivamente disponible | Digitalización de Internet Archive (enero 2022), PDF 1.5, 244 páginas físicas según `pdfinfo`; texto extraído con `pdftotext -layout` = 245 "páginas" al segmentar por salto de página (`\x0c`), por una página de créditos adicional al inicio |
| Estado del nodo (antes de esta lectura) | `recorrido: null`, `recorridos_sec: []`, `arquitectura_recorrido: null`, `estado_recorrido: "pendiente"` |
| Territorio (`l`) | `stjohn` |
| Etiquetas heredadas (`f`) | `["postplantacion", "memoria"]` |
| `ap` (resumen heredado) | "Tres siglos de vida afrocaribeña en una isla que cambió de imperio sin que sus habitantes dejaran de rehacer comunidad." |
| Recorrido provisional citado en la cola | C4 (vía mención independiente en `dictamen-academico-c4.md` §4, **no** como clasificación confirmada) |

### Relaciones entrantes y salientes (antecedentes, no evidencia)

Verificadas en `datos-atlas.json` antes de la lectura:

1. `steward → olwigstjohn` (resonancia) — fuente: "Comparten el fenómeno Postplantación. Por corroborar el vínculo directo."
2. `caribjourneys → olwigstjohn` (resonancia) — fuente: "Continuidad de autor (Olwig)."
3. `hall_slavesocietydanish → olwigstjohn` (resonancia) — fuente: "Hall es citado y discutido en el estudio de Olwig sobre St. John; ambos comparten archivo colonial danés (10 menciones verificadas)."
4. `olwigstjohn → clarkemymother` (resonancia) — fuente: "Olwig apoya en Clarke la lectura del hogar afrocaribeño como institución con historia propia. Cita verificada en el ejemplar."
5. `olwigstjohn → mintzpricebirth` (resonancia) — fuente: "Olwig lee la adaptación cultural en St. John con el marco de Mintz y Price. Vínculo verificado por lectura; falta precisar el pasaje."

Auditoría completa de estas cinco relaciones en §23.

### Verificación de la cola frente a la apertura del sublote

`apertura-recalibracion-p3-etapa-2-3g.md` §17 confirma: *"4 | `olwigstjohn` | C4 | St. John | **CONFIRMADA** | Segundo caso C4; territorio (antigua colonia danesa, hoy EE.UU.) sin ningún otro caso en P3."* `cola-lectura-pendiente-atlas-2.md` no contradice esto: registra `olwigstjohn` como `PENDIENTE_NO_LEIDA`, con el fenómeno `contraplantacion` como ancla independiente citada por `dictamen-academico-c4.md` §4, y aclara expresamente (nota de cabecera y `dictamen-academico-c3.md` §8.4) que C3 ya fue retirada como corriente implicada en este caso ("su propio dictamen la excluye expresamente"). No hay contradicción entre las dos fuentes. No se detuvo la lectura por este motivo.

---

## 3. Archivo fuente

PDF de 244 páginas (`pdfinfo`), digitalización de Internet Archive. Texto extraído con `pdftotext -layout` sobre una copia local, generando `olwig_layout.txt` (592.104 bytes, 245 segmentos al dividir por `\x0c`).

---

## 4. Método de extracción

1. `pdftotext -layout` sobre el PDF completo.
2. Segmentación por salto de página (`\x0c`) para obtener 245 "páginas físicas".
3. Mapeo de capítulos por escaneo de frecuencia de encabezados de página (primera línea de cada página física), identificando 8 páginas divisorias de capítulo con numeral aislado y títulos de capítulo recurrentes en las cabeceras.
4. Verificación de un **desfase de paginación constante**: página física = página impresa + 14, confirmado en múltiples puntos del texto principal (física 17 → impresa 3; física 175 → impresa 161; física 207 → impresa 193, inicio de "Notes"). No se detectaron láminas fotográficas sin numerar que alteraran el desfase (a diferencia de *Cuijla*).
5. Lectura íntegra, capítulo por capítulo, mediante extracción de rangos de páginas físicas y lectura del texto completo (no resúmenes ni muestreo por palabras clave, salvo en las tablas estadísticas ilegibles por OCR — ver §6).
6. Búsquedas dirigidas de texto completo (`grep`) sobre las cinco relaciones heredadas y sobre términos clave del aparato crítico (bibliografía completa).

---

## 5. Cobertura

**Leídos íntegramente:**

- Prefacio (físicas 11–14).
- Capítulo 1, "The Historical Anthropology of St. John" (impresas 1–14, físicas 15–28).
- Capítulo 2, "The Plantation Society" (impresas 15–43, físicas 29–57).
- Capítulo 3, "The Emergence of an Afro-Caribbean Culture" (impresas 44–81, físicas 58–95).
- Capítulo 4, "The Peasant Society" (impresas 82–102, físicas 96–116).
- Capítulo 5, "The Households" (impresas 103–130, físicas 117–144).
- Capítulo 6, "The Network of Exchanges" (impresas 131–159, físicas 145–173).
- Capítulo 7, "The Tourism Society" (impresas 160–173, físicas 174–187).
- Capítulo 8, "St. Johnian Culture and Community Today" (impresas 174–192, físicas 188–206).
- Referencias bibliográficas completas (físicas 215–230, impresas 201–216), incluida verificación cruzada de las cinco relaciones heredadas contra las entradas bibliográficas y las menciones en el cuerpo del texto.

**No leídos:**

- Notas al pie por capítulo (físicas 207–214, impresas 193–200), salvo la nota 1 del capítulo 1 (definición de "reproducción social"), citada porque aparece indexada junto a las referencias.
- Índice analítico (Index, físicas 231–244, impresas 217 en adelante), no necesario para la reconstrucción argumental.

*(Corrección formal mínima aplicada por instrucción de la Dirección Académica. El error: la versión anterior de este documento afirmaba simultáneamente "referencias bibliográficas completas: físicas 201–213" y "notas no leídas: físicas ~207–213" — un rango contradictorio consigo mismo, que mezclaba el número de página impresa (201) con la etiqueta "físicas" y hacía coincidir parcialmente el rango de notas con el de referencias. Verificado ahora de nuevo contra el mapa de páginas físicas de `olwig_layout.txt` (división por `\x0c`, divisores de sección "Notes", "References Cited" e "Index" localizados exactamente): las notas al pie ocupan las físicas 207–214 (impresas 193–200); las referencias bibliográficas ocupan las físicas 215–230 (impresas 201–216); el índice analítico ocupa las físicas 231–244 (impresas 217 en adelante). No se realizó ninguna lectura sustantiva nueva: esta es una corrección exclusivamente de rango de páginas, sobre contenido ya identificado en la lectura original.)*

Esto constituye lectura de la obra completa en su contenido argumental (prefacio + los ocho capítulos íntegros = la totalidad del cuerpo del libro), quedando fuera únicamente el aparato de notas al pie detalladas y el índice, que no son necesarios para resolver ninguna rivalidad entre corrientes en este caso.

---

## 6. Limitaciones

- Varias tablas estadísticas del capítulo 3 (Tablas 2 y 3, sobre matrimonios y parejas esclavizadas) están gravemente dañadas por el OCR (texto en columnas volcado como bloques ilegibles, aparentemente por una rotación de página o columnas verticales mal interpretadas por `pdftotext`). No fue posible extraer los valores numéricos exactos de esas dos tablas; el argumento cualitativo que las acompaña sí es legible y se registra en la lectura. Esto no afecta la reconstrucción de la tesis ni la clasificación C1–C10, porque el argumento no depende de esas cifras específicas sino del patrón cualitativo (mayor proporción de matrimonios extra-finca en las fincas pequeñas), que el propio texto narrativo confirma.
- No se verificó la existencia de erratas de paginación adicionales más allá de los puntos de control muestreados; el desfase +14 se comprobó en tres puntos distantes entre sí y se asume constante para el resto, dado que no se detectó ninguna lámina no numerada.
- Las notas al pie no fueron leídas sistemáticamente (ver §5); es posible que contengan matices menores no capturados aquí, pero no se detectó ninguna laguna que impida decidir sobre la clasificación C1–C10 o las arquitecturas especiales.

---

## 7. Problema

Cómo una comunidad afrocaribeña, formada bajo la esclavitud en una plantación colonial danesa marginal y periférica (St. John, la más pequeña y menos rentable de las tres Islas Vírgenes danesas), sostiene y rehace continuamente su vida social a través de tres regímenes económicos externos sucesivos —esclavitud de plantación, campesinado libre tras la emancipación, y economía turística bajo administración estadounidense— sin que ninguno de esos regímenes impuestos determine por completo su organización social interna.

---

## 8. Pregunta

¿Mediante qué mecanismo social los esclavizados y, después, sus descendientes libres logran reproducirse —material y culturalmente— bajo condiciones sucesivas de restricción extrema impuestas por un orden colonial cambiante, y qué explica la continuidad de una identidad afrocaribeña específica de St. John a través de rupturas históricas tan radicales (esclavitud → emancipación → colapso de la plantación azucarera → parque nacional y turismo de masas)?

---

## 9. Tesis

Tesis explícita del prefacio (cita textual): *"Cultural development on St. John has had a double character, constantly oscillating between strategies of adaptation and strategies of resistance to the conditions of life presented to the population"*, sostenida por *"an enduring system by which interpersonal relations are regulated"* — un sistema de intercambio que involucra una amplia red de parientes que se ha convertido en *"an ideology that has played an active role in the history of the island"*.

La tesis tiene una estructura compuesta con dos proposiciones interdependientes, ambas explícitas y sostenidas capítulo a capítulo:

1. **Proposición histórico-estructural**: el orden colonial impuesto sobre St. John atravesó tres "sociedades" sucesivas (plantación esclavista, campesinado, turismo/parque nacional), cada una de las cuales representa solo el *"marco externo"* (external framework) de la vida isleña, no su determinación completa.
2. **Proposición cultural-mecanismo**: lo que sostiene la continuidad a través de esas rupturas es un sistema de "reproducción social" —definido explícitamente por la autora como (1) la producción y distribución de los medios de vida y (2) la procreación y crianza de los hijos— operado mediante redes de parentesco consanguíneo y afín que se originaron bajo la esclavitud (cuando los esclavizados fueron autorizados a cultivar parcelas de subsistencia) y que se transformaron, tras la emancipación, en el principio organizador de la sociedad campesina, y hoy, bajo el turismo, en el mecanismo de defensa identitaria de la comunidad nativa frente a "continentales" y trabajadores extranjeros.

---

## 10. Objeto y método

**Objeto**: St. John, Islas Vírgenes (colonia danesa 1718–1917, posesión estadounidense desde 1917), como estudio de caso monográfico de "antropología histórica" (término explícito del título del capítulo 1).

**Método**: combinación deliberada de dos tipos de fuente, anunciada y justificada extensamente en el capítulo 1: (a) fuentes archivísticas coloniales danesas —registros del *landfoged* (funcionario colonial danés, con un acceso inusualmente directo y detallado a la vida esclava porque los propietarios de plantaciones en St. John eran mayormente absentistas), rollos fiscales, registros parroquiales moravos (desde 1833) y luteranos (desde 1822), censos de población (1835–1911)— y (b) trabajo de campo etnográfico contemporáneo (entrevistas de historia de vida, genealogías, observación participante, un cuestionario aplicado a 45 hogares en 1974–75). La autora cita explícitamente la distinción de Marc Bloch entre "fuentes narrativas" y "testigos a su pesar" (*witnesses in spite of themselves*) para justificar el uso de los registros judiciales coloniales como evidencia de la vida esclava, y la advertencia metodológica de Barry Higman contra equiparar "hogar" archivístico con "familia nuclear" occidental.

---

## 11. Fuentes / evidencias principales citadas por la obra

- Archivos coloniales daneses: registros del *landfoged* (`LA`), rollos fiscales (`VRR`), censos (`F`), registros de la Cancillería Danesa (`DK`).
- Registros parroquiales moravos (Iglesia de Emmaus) y luteranos.
- Entrevistas de historia oral e historias de vida propias, recogidas por la autora en St. John (1974–75 y visitas posteriores).
- Cuestionario aplicado a 45 hogares.
- Bibliografía secundaria: Sidney Mintz (*Caribbean Transformations*, 1974; "campesinados reconstituidos"), Mintz y Hall (mercados internos jamaicanos, 1960), Mintz y Price (1976, *An Anthropological Approach to the Afro-American Past*), Edith Clarke (1953, 1957), Peter Wilson (*Crab Antics*, 1973, citado explícitamente en el prefacio como excepción "holística" frente al reduccionismo funcionalista de otros estudios de familia afrocaribeña), R. T. Smith, M. G. Smith, Herskovits y Herskovits, Higman, Craton, Neville Hall (varios artículos 1976–1983) y Gwendolyn Midlo Hall (1971).

---

## 12. Arquitectura argumental

Arquitectura cronológico-estructural en cuatro fases correspondientes a "sociedades" sucesivas —Plantación (cap. 2–3), Campesina (cap. 4–5), Turística (cap. 7)— unidas por un capítulo teórico-central no cronológico (cap. 6, "The Network of Exchanges", explícitamente formulado como síntesis del principio que atraviesa todas las fases) y cerradas por un capítulo de síntesis etnográfica contemporánea (cap. 8) que reevalúa el argumento completo mediante tres estudios de caso de hogares actuales y una discusión metodológica explícita sobre la "antropología histórica de la familia".

La arquitectura no es una colección de estudios de caso paralelos por época: cada capítulo cronológico demuestra la persistencia, bajo condiciones cambiantes, del mismo mecanismo (redes de parentesco/intercambio) introducido en el capítulo 3 y teorizado en el capítulo 6. El capítulo 6 es explícitamente señalado por la propia autora como el eje: *"the community's socioeconomic exchanges took place ... within the strong kinship networks"* que "no eran la base" de los hogares sino su envoltura estructurante.

---

## 13. Temporalidad y escala

**Temporalidad**: larga duración, 1718 (colonización danesa) a mediados de la década de 1980 (presente etnográfico de la autora) — casi tres siglos, como anuncia el subtítulo.

**Escala territorial**: monográfica insular — una sola isla de 19 millas cuadradas, sin comparación sistemática con otras islas (aunque se citan St. Thomas, St. Croix y Tortola como referencias de contraste puntual, nunca como objeto de análisis paralelo).

---

## 14. Conceptos organizadores

- **Reproducción social** (*social reproduction*): concepto explícitamente definido por la autora (nota 1, cap. 1) con doble contenido — producción/distribución de medios de vida + procreación/crianza.
- **Adaptación y resistencia** (doble carácter): el par conceptual del título, presentado como una oscilación constante, no como dos fases sucesivas.
- **Red de intercambio** (*network of exchange*): el mecanismo concreto — parentesco consanguíneo y afín, tierra familiar, clubes de trabajo, préstamo de niños, dádivas de comida — mediante el cual se realiza la reproducción social.
- **Campesinado reconstituido** (*reconstituted peasantry*, tomado explícitamente de Mintz 1974): el campesinado de St. John no es una supervivencia "tradicional" sino una formación nueva, nacida dentro de la esclavitud y en oposición a ella.
- **"Una gran familia"** (*one big family*): la ideología nativa explícita que la autora documenta como articulación consciente del principio de intercambio.

---

## 15. Distinción tesis / corriente / dominio / ejemplo

Aplicando rigurosamente la regla reforzada del mandato (§5): el hecho de que "The Households" (cap. 5) sea un capítulo completo, o que el parentesco aparezca en casi todas las páginas del libro, **no** convierte automáticamente al parentesco en la corriente estructurante por defecto. Es necesario distinguir:

- **Tesis**: el doble carácter adaptación/resistencia, sostenido por la reproducción social.
- **Conceptos organizadores**: reproducción social, red de intercambio, campesinado reconstituido (§14).
- **Corrientes candidatas** (según el vocabulario C1–C10 vigente): C4 (postplantación/trabajo/desposesión) por el lado histórico-estructural de la tesis; C10 (cuerpos/parentescos/eróticas) por el lado del mecanismo cultural concreto.
- **Dominio empírico**: la isla de St. John a través de tres regímenes económicos.
- **Ejemplos**: tierra familiar, clubes de trabajo, préstamo de niños, matrimonio y ceremonias de "wake", historias de vida individuales citadas (Petronella, Susanna, Cousin Isaac, etc.).

El análisis de §16–20 se dedica precisamente a determinar si C4 y C10 son ambos estructurantes de la tesis compuesta (y no solo "dominios donde aparece mucha evidencia"), o si uno de los dos es en realidad solo un dominio/ejemplo extenso del otro.

---

## 16. Contraste C1–C10

Evaluación individual de las diez corrientes, con estatus explícito y justificación:

- **C1 — Mundos indígenas, invasiones y persistencias: AUSENTE.** No hay mención alguna de poblaciones indígenas caribeñas (taínas, caribes) ni de invasión/contacto indígena-europeo en ningún punto del libro leído. St. John es tratado como isla sin presencia indígena registrada en el periodo estudiado.

- **C2 — Trata, esclavización y plantación: SECUNDARIA ESTRUCTURANTE FUERTE.** Los capítulos 2 y 3 (más de 50 páginas impresas) están dedicados extensamente al régimen esclavista y su economía de plantación: trabajo forzado, códigos de esclavos, cimarronaje, procreación bajo esclavitud, formación de las primeras redes de parentesco. Es la condición de origen indispensable del argumento (sin la esclavitud no habría surgido el sistema de reproducción social que el libro rastrea). Pero, aplicando el criterio de frontera C2/C4 ya ratificado por la Dirección Académica ("régimen analítico dominante, no cronología"), el argumento de Olwig **no** se organiza alrededor del régimen esclavista en sí mismo, sino alrededor de qué sobrevive y se transforma más allá de él, a través de tres regímenes sucesivos de los cuales la esclavitud es solo el primero. C2 es, por tanto, evidencia fundacional extensísima y estructuralmente necesaria, pero subordinada al eje organizador postplantacionario — exactamente el patrón que el propio dictamen de C4 documenta en casos como `naveda_esclavoscordoba`.

- **C3 — Fugas, cimarronajes y emancipaciones: CONTEXTUAL.** El cimarronaje aparece extensamente en el capítulo 2 (huidas, código de 1733, sublevación de 1733, fugas a las Islas Vírgenes británicas) y el proceso de emancipación se narra en detalle. Sin embargo, el cimarronaje y la fuga se presentan explícitamente como **una estrategia entre varias** (junto con el cultivo de subsistencia, las redes familiares, la vida religiosa) dentro del argumento más amplio de adaptación/resistencia, no como el principio que organiza el libro. Este caso ya fue excluido de C3 por `dictamen-academico-c3.md` §8.4, y la propia lectura confirma independientemente esa exclusión: el argumento no se organiza alrededor de la fuga o la autonomía sustraída al orden dominante, sino alrededor de cómo la comunidad rehace la vida **dentro** de las estructuras sucesivas (el criterio mismo que el dictamen de C4 usa para distinguir C3 de C4). Coincide, pues, con el hallazgo previo, pero se llega a él aquí de forma independiente, no por transferencia del dictamen.

- **C4 — Postplantación, trabajo y desposesión: ESTRUCTURANTE.** Ver análisis extenso en §17–21. Los capítulos 4, 7 y buena parte del 8 están organizados exactamente alrededor de la definición ratificada de C4: "cómo sujetos y comunidades rehacen la vida, reorganizan el trabajo, sostienen la reproducción social, habitan, disputan y sobreviven dentro de estructuras postplantacionarias persistentes o transformadas." Esta es, casi literalmente, la tesis del libro aplicada a los períodos campesino y turístico.

- **C5 — Rutas, diásporas y territorios acuosos: CONTEXTUAL.** La migración circular hacia St. Thomas, República Dominicana, Cuba, Centroamérica y Estados Unidos se documenta extensamente en el capítulo 5 ("Wage labor") como una de las actividades económicas del campesinado y como fuente de remesas. Es evidencia sustantiva pero subordinada: sirve para completar el cuadro económico del campesinado (C4), no organiza un argumento propio sobre rutas o diásporas como fenómeno en sí.

- **C6 — Huracanes, ecologías y materialidades vivas: INCIDENTAL.** Huracanes (1867, 1916, 1924, 1928, 1932) y un terremoto (1867) se mencionan como eventos disruptivos puntuales (daño a plantaciones, destrucción de casas), sin desarrollo ecológico o material sostenido.

- **C7 — Soberanías, fronteras y ocupaciones: CONTEXTUAL, con tensión registrada.** El capítulo 7 documenta con detalle el traspaso de soberanía danesa a estadounidense (1917) y, sobre todo, la imposición de un concepto estadounidense de "parque de naturaleza" (Parque Nacional de las Islas Vírgenes, 1956) que restringe el uso tradicional de la tierra por los isleños. Este material es sustantivo y podría leerse como candidato a C7. Sin embargo, la propia obra enmarca explícitamente el parque como una **continuación** del mismo patrón de desposesión que la plantación y las fincas ganaderas post-emancipación ya habían impuesto ("lo que es bueno para Yellowstone es bueno para St. John", ironiza un entrevistado) — es decir, el capítulo 7 no introduce un principio organizador nuevo (soberanía/frontera como tal) sino que extiende el eje C4 (desposesión, reorganización del trabajo y la tierra) a un tercer régimen. Se registra como contextual con esta tensión explícita, sin resolverla: es defendible leer parte de este material como evidencia adicional de C4 antes que como C7 autónoma.

- **C8 — Creolizaciones, traducciones y opacidades: INCIDENTAL.** Aparecen términos criollos puntuales (*neappe*, *jumbie*, términos de parentesco en criollo) sin que se desarrolle un argumento lingüístico o de traducción cultural como tal.

- **C9 — Archivos vivos, espiritualidades y saberes transmitidos: CONTEXTUAL, con evidencia sustantiva no estructurante.** La sección "Social sanctions: positive and negative" del capítulo 6 es rica y extensa: creencias sobre obeah como sanción social contra la acumulación egoísta, historias de *jumbies*, el velorio (*wake*) como ritual funerario colectivo, cuentos de Anansi. Es evidencia genuina y sustantiva, con densidad textual propia. Sin embargo, aplicando la regla reforzada (§5/§6): esta evidencia funciona explícitamente, dentro de la propia arquitectura del capítulo 6, como uno de los **mecanismos de sanción** que sostienen el sistema de intercambio (C10/C4) — no organiza un argumento independiente sobre espiritualidad o transmisión de saberes. Se retira sin destruir la arquitectura del libro: el argumento sobre la red de intercambio sobrevive con la evidencia legal/judicial ya presente en los mismos capítulos. Por eso no alcanza estatus estructurante pese a su claro peso textual.

- **C10 — Cuerpos, parentescos y eróticas: ESTRUCTURANTE.** Ver análisis extenso en §17–21. Los capítulos 3, 5, 6 y 8 —la mayor parte del libro en volumen— están organizados alrededor del parentesco, el matrimonio, la procreación, la estructura del hogar y las redes de intercambio fundadas en el parentesco. Es, en términos de densidad textual y de función argumental, el contenido más extenso y más citado explícitamente por la autora como su aportación central a la antropología de la familia afrocaribeña (capítulo de cierre, "Toward a historical anthropology of the family").

---

## 17. Seis pruebas (aplicadas bilateralmente entre C4 y C10, las dos candidatas estructurantes)

**Causalidad.** ¿C4 causa/explica C10, o al revés? Ninguna dirección simple: la esclavitud (C2) crea las condiciones (parcelas de subsistencia, dispersión de esclavizados entre fincas) que dan origen al sistema de parentesco/intercambio (C10); ese sistema (C10) es luego el que se **despliega** y se **adapta** a través de los regímenes sucesivos que C4 describe (campesinado, turismo). C10 no es causado por C4; más bien C10 es el mecanismo constante que opera *dentro* de cada fase que C4 periodiza. Relación de mutua necesidad, no de causalidad unidireccional.

**Finalidad.** El propósito explícito del libro (declarado en el prefacio y retomado en el cierre del capítulo 8) es doble: explicar tanto la secuencia histórico-económica de desposesión sucesiva (C4) como el mecanismo cultural-parental que la media (C10). Ninguna de las dos finalidades es reducible a la otra: sin C4 el libro sería una etnografía sincrónica de parentesco (exactamente lo que la autora critica en otros autores); sin C10 sería una historia económica sin contenido antropológico-cultural distintivo.

**Criterio de valoración del autor.** Olwig valora explícitamente la agencia y la creatividad cultural afrocaribeña, contra los marcos que ven a la familia afrocaribeña como "desorganizada" o mero residuo de la esclavitud (crítica explícita a Frazier, Herskovits, R.T. Smith temprano). Este criterio de valoración es indisociable de C10 (defiende la validez cultural de las formas de parentesco no nucleares) y a la vez requiere el marco histórico C4 (para argumentar que esas formas son una respuesta activa a condiciones materiales sucesivas, no un residuo pasivo). El criterio de valoración del autor exige ambas corrientes a la vez.

**Dependencia.** El significado de "postplantación" en este libro específico (C4) depende del contenido de C10: sin la red de parentesco, "postplantación" quedaría vacía de mecanismo explicativo concreto. El significado de "parentesco como adaptación y resistencia" (C10) depende parcialmente de C4 para su historicidad y su distintividad frente a estudios sincrónicos de la familia afrocaribeña (Stack, R. T. Smith más reciente), que la autora cita y de los que se distingue explícitamente por añadir la profundidad histórica. Dependencia mutua, no jerárquica.

**Retirada.** Ver §18, desarrollado en detalle: ambas retiradas son destructivas de la arquitectura argumental, no solo pérdidas de ejemplos.

**Dominancia.** Ver §19.

---

## 18. Retirada individual

**Retirar C4** (eliminar los capítulos 2, 4 y 7, y el marco de periodización sucesiva plantación→campesinado→turismo): lo que queda es una etnografía de redes de parentesco e intercambio con trasfondo histórico vago. Esto destruye precisamente la contribución metodológica que la autora reivindica explícitamente como el aporte distintivo del libro: su capítulo de cierre ("Toward a historical anthropology of the family") argumenta en detalle que los estudios de familia afrocaribeña fallan por carecer de profundidad histórica, y que este libro se propone corregir exactamente ese defecto. Sin C4, el libro pierde su razón de ser declarada. **Destrucción de la arquitectura argumental**, no mera pérdida de ejemplos.

**Retirar C10** (eliminar los capítulos 3, 5, 6 y 8, el parentesco, el matrimonio, la procreación, la estructura del hogar y la red de intercambio): lo que queda es una historia económica genérica de una pequeña isla caribea a través de tres regímenes coloniales, sin ningún argumento antropológico-cultural distintivo sobre cómo la comunidad se sostuvo. El título mismo ("Cultural Adaptation and Resistance") queda sin contenido: la "cultura" de la adaptación y la resistencia es, en este libro, precisamente el sistema de parentesco/intercambio. **Destrucción de la arquitectura argumental**, no mera pérdida de ejemplos.

Ambas retiradas son de la forma fuerte (destrucción de la arquitectura, no pérdida de capítulo/proposición aislada), lo cual, según el mandato (§7), es exactamente el estándar que justifica una afirmación fuerte de irreductibilidad mutua.

**Retirada de C2, C3, C5, C6, C7, C8, C9** (contextuales/incidentales): en todos los casos, la retirada produce pérdida de evidencia o de un capítulo, pero no destruye la arquitectura del argumento central (adaptación/resistencia vía reproducción social a través de regímenes sucesivos). Justifica su estatus no estructurante.

---

## 19. Dominancia

Ninguna de las dos corrientes domina a la otra en el sentido de subordinarla funcionalmente. C4 no es un "ejemplo" o "dominio de aplicación" de C10, ni viceversa: cada una aporta un componente estructuralmente necesario y explícitamente distinto de la tesis compuesta ("doble carácter" + "reproducción social" con su doble definición). Es precisamente esta ausencia de dominancia clara —confirmada por la simetría de los resultados en las seis pruebas— lo que descarta una arquitectura jerárquica simple (una corriente principal con la otra como secundaria subordinada) y apunta hacia una arquitectura de frontera constitutiva.

---

## 20. Arquitecturas especiales

**FRONTERA_CONSTITUTIVA.** Se cumplen los dos requisitos del contrato: (a) mutua irreductibilidad, demostrada en §17–19 mediante las seis pruebas bilaterales, con retirada de forma fuerte en ambas direcciones; (b) constitución de un mismo argumento, no de dos argumentos distintos que compiten por ser "el" argumento del libro. La tesis explícita del prefacio ("doble carácter... adaptación... resistencia", sostenido por "reproducción social", definida por la autora misma como producción/distribución + procreación) **requiere literalmente ambos componentes para poder enunciarse**: C4 nombra el eje histórico-material de "qué se adapta/resiste" (regímenes sucesivos de trabajo, tierra, desposesión); C10 nombra el eje cultural-mecanismo de "cómo se adapta/resiste" (parentesco, procreación, redes de intercambio). Esto corresponde con precisión a la definición del contrato: "tres o más corrientes" no es el caso aquí (son dos), y el contrato admite explícitamente `FRONTERA_CONSTITUTIVA` para dos corrientes mutuamente irreductibles y constitutivas del mismo argumento.

**SINTESIS_MULTICORRIENTE.** Evaluada y **descartada**. Se consideró C2 como tercera corriente candidata (fundacional, extensa) y C9 (sustantiva, con sección propia). Aplicando la prueba de retirada individual (§16, §18): ni C2 ni C9 producen, al retirarse, destrucción de la arquitectura argumental — ambas producen pérdida de evidencia o de un capítulo, la forma débil de retirada. No hay, por tanto, una tercera corriente co-necesaria en el sentido exigido por el contrato ("tres o más corrientes [que] participen de manera estructurante e irreductible"). No se confunde aquí "varios temas importantes" (C2, C9, C5, C7 son todos temas sustantivos) con "varias corrientes co-necesarias" (solo C4 y C10 superan la prueba de retirada fuerte).

**VACÍO_TAXONÓMICO_POSIBLE.** Evaluada mediante la prueba adversarial obligatoria (§9 del mandato) y **descartada**, a diferencia de *cuijla*:

1. Principio supuestamente ausente formulado: "reproducción social" como proceso unitario que integra producción económica y procreación/parentesco a través de regímenes de trabajo cambiantes.
2. Intento de captura mediante C1–C10: C4 captura con precisión el eje histórico-económico (reorganización de trabajo/tierra/desposesión); C10 captura con precisión el eje de parentesco/procreación. Juntos, sin residuo relevante.
3. Qué se pierde en cada traducción individual: usar solo C4 pierde la especificidad del mecanismo de parentesco; usar solo C10 pierde la periodización histórico-material. Pero usando **ambas conjuntamente** (frontera), no queda un remanente sustantivo sin capturar — a diferencia de *cuijla*, donde ninguna combinación de corrientes disponibles lograba nombrar el principio transversal de persistencia/transformación de africanismos.
4. ¿Es el principio un concepto propio de la obra o una abstracción del lector? Es un concepto propio, explícitamente definido y citado por la autora (nota 1, cap. 1, con referencia directa a la bibliografía marxista sobre reproducción social) — pero, a diferencia de *cuijla*, ese concepto propio se deja traducir sin pérdida estructural en la combinación C4+C10.
5. Evidencia textual transversal: confirmada en todos los capítulos, pero precisamente porque se reparte, de forma consistente y sin residuo, entre los dos ejes ya nombrados por C4 y C10.

No sobrevive la prueba adversarial en su punto decisivo (paso 3): a diferencia de *cuijla*, aquí la taxonomía vigente **sí** captura el principio transversal, mediante la combinación de dos corrientes existentes en arquitectura de frontera. No se declara vacío taxonómico.

**REQUIERE_AMPLIACION_DIRIGIDA.** No aplica. La cobertura alcanzada (lectura íntegra de prefacio y ocho capítulos, más verificación bibliográfica completa) es suficiente para resolver con evidencia textual directa la rivalidad entre las corrientes candidatas y para descartar con evidencia, no por omisión, las demás arquitecturas especiales. No queda ninguna pregunta textual concreta pendiente de la cual dependa la decisión.

---

## 21. Arquitectura recomendada

**`FRONTERA_CONSTITUTIVA(C4, C10)`**, con **C2 como recorrido secundario** (secundaria estructurante fuerte, evidencia fundacional extensa pero subordinada al eje postplantacionario, según el criterio de frontera C2/C4 ya ratificado).

Esto es compatible con el contrato: el precedente `schwartz_seaofstorms` (frontera C6/C7) ya combina `recorrido: null` con `recorridos_sec` poblado (`["c2","c4"]`), demostrando que una arquitectura de frontera puede llevar secundarias. Aquí correspondería, en la misma lógica:

```
"recorrido": null,
"recorridos_sec": ["c2"],
"arquitectura_recorrido": {
  "tipo": "frontera_constitutiva",
  "recorridos": ["c4", "c10"]
}
```

*(Corrección formal mínima aplicada por instrucción de la Dirección Académica: el campo interno de `arquitectura_recorrido.tipo: "frontera_constitutiva"` es `"recorridos"`, no `"corrientes"` — este último no es un campo admitido por el contrato. Corregido aquí exclusivamente en el rótulo técnico; no se modifica la arquitectura académica recomendada.)*

Se presenta esta forma técnica **solo como referencia**, no como implementación: ningún campo se modifica en este documento, conforme a las restricciones absolutas del mandato (§13).

No se recomienda C4 como recorrido principal único (perdería la mitad estructurante del argumento, C10), ni C10 como principal único (perdería la mitad histórica, C4), ni síntesis multicorriente (no hay una tercera corriente co-necesaria que supere la prueba de retirada fuerte), ni vacío taxonómico (la combinación C4+C10 captura el principio transversal sin residuo).

---

## 22. Incidencias

Registradas por categoría, sin corrección automática, conforme al mandato (§11):

**Bibliográficas.**
- La relación `olwigstjohn → mintzpricebirth` cita como obra objetivo "The Birth of African-American Culture: An Anthropological Perspective" (con años "1976 / 1992 / ed. port. 2003" en el nodo del corpus). Lo que Olwig cita literalmente en el texto (pág. impresa 158, capítulo 6) y en su bibliografía es "Mintz, Sidney, and Richard Price. 1976. *An Anthropological Approach to the Afro-American Past: A Caribbean Perspective*. Institute for the Study of Human Issues Occasional Papers, no. 2." Es razonable que se trate del mismo texto reeditado posteriormente bajo el título "The Birth of African-American Culture", pero esta lectura no puede confirmar la identidad exacta entre ambas ediciones sin consultar directamente ambos textos. Se registra como incidencia bibliográfica a verificar, no como error.

**Taxonómicas / relaciones (la más significativa de este expediente).**
- La relación `hall_slavesocietydanish → olwigstjohn` afirma "Hall es citado y discutido en el estudio de Olwig... (10 menciones verificadas)". Verificación directa: el nodo `hall_slavesocietydanish` corresponde específicamente a *Slave Society in the Danish West Indies: St. Thomas, St. John and St. Croix* de **Neville A. T. Hall (ed. B. W. Higman), publicado en 1992**, siete años **después** de Olwig (1985) — una obra póstuma. Es cronológicamente imposible que Olwig (1985) haya citado ese libro específico de 1992. Lo que Olwig sí cita, de forma extensa y verificada, son **artículos anteriores** de Neville Hall (1976, 1977, 1979, 1980, 1983), bibliográficamente distintos del libro de 1992. Además, de las aproximadamente diez menciones de "Hall" localizadas en el cuerpo del texto de Olwig, al menos dos ("G. Hall 1971", líneas correspondientes a la página impresa 6 y 26 aprox.) corresponden a una autora **distinta**: Gwendolyn Midlo Hall (*Social Control in Slave Plantation Societies*, 1971), no a Neville Hall. La cifra "10 menciones verificadas" de la relación mezcla, por tanto, dos autores distintos y cita, para uno de ellos, un libro que no pudo haber sido usado por esta obra. El vínculo autoral entre Olwig y Neville Hall es real y sustantivo (ella se apoya extensamente en sus artículos sobre el archivo colonial danés), pero la relación tal como está formulada —anclada específicamente al nodo `hall_slavesocietydanish` de 1992— contiene una imprecisión cronológica y de identificación de autor que la Dirección Académica deberá resolver. No se corrige aquí.
- La relación `steward → olwigstjohn` ("Comparten el fenómeno Postplantación. Por corroborar el vínculo directo.") **no encuentra ningún apoyo textual** en esta lectura: una búsqueda de texto completo sobre la obra íntegra de Olwig (cuerpo del texto y bibliografía completa) arroja **cero menciones** de "Steward" en cualquier forma. Esto es señalable porque Olwig cita extensamente a Sidney Mintz (colaborador y antiguo alumno de Julian Steward en el proyecto de *The People of Puerto Rico*), pero nunca cita a Steward directamente. La relación permanece sin corroborar por esta lectura; no se recomienda su promoción a un estado más confirmado.
- La relación `caribjourneys → olwigstjohn` ("Continuidad de autor") está formulada correctamente en cuanto a dirección temporal (2007 → 1985, un libro posterior de la misma autora en relación con el anterior) y en cuanto a tipo (resonancia por continuidad de autor, no cita textual) — no presenta contradicción cronológica ni requiere corrección. Se confirma como bien formulada, sin poder verificarse su contenido específico desde el lado de `olwigstjohn` (por definición: un libro de 1985 no puede mencionar uno de 2007).

**Relaciones positivamente confirmadas por esta lectura.**
- `olwigstjohn → clarkemymother`: **confirmada con solidez.** Edith Clarke, *My Mother Who Fathered Me* (1957), aparece citada explícitamente dos veces en el cuerpo del texto (pág. impresa 129, sobre la crítica a los estudios funcionalistas de la familia; pág. impresa 158, en la bibliografía citada por R. T. Smith) y en la entrada bibliográfica completa de Olwig. Dirección y cronología correctas (1957 antes de 1985).
- `olwigstjohn → mintzpricebirth`: **confirmada, y se localiza el pasaje exacto** que la relación señalaba como pendiente ("falta precisar el pasaje"): capítulo 8, sección "Toward a historical anthropology of the family" (página impresa 190/191, física 204/205), donde Olwig cita "(Mintz and Price 1976: 50; Tanner 1974)" para apoyar la crítica de que la antropología no ha estudiado la estructura social afrocaribeña en sus propios términos.

**Etiquetas.**
- La etiqueta heredada `postplantacion` tiene fuerte respaldo textual (coincide con el eje C4 confirmado como estructurante en esta lectura).
- La etiqueta heredada `memoria` tiene respaldo más débil y periférico: el libro no es centralmente un estudio de prácticas de memoria o conmemoración; el único desarrollo relacionado aparece en el capítulo 8 ("A St. Johnian consciousness"), donde se describe el uso de prácticas de subsistencia como declaración de "solidaridad con el pasado de St. John" — apoyo real pero secundario, no un eje estructurante propio. No se recomienda ninguna acción; se registra como observación.

**Territoriales, temporales, conceptuales, editoriales, metadatos.**
- Ninguna incidencia detectada en estas categorías. El territorio (`stjohn`), el año (1985) y la ruta del archivo son consistentes y verificados sin contradicción.

---

## 23. Auditoría de relaciones

Resumen consolidado (desarrollo completo en §22 y §2):

| Relación | Dirección | Tipo | Resultado de la auditoría |
|---|---|---|---|
| `steward → olwigstjohn` | a→b | resonancia | **No corroborada.** Cero menciones de Steward en el texto o bibliografía de Olwig, pese a la extensa presencia de Mintz (su colaborador). Permanece "por corroborar". |
| `caribjourneys → olwigstjohn` | a→b | resonancia (continuidad de autor) | **Formulación correcta**, no verificable desde este lado (obra posterior, 2007, no puede aparecer citada en una obra de 1985). Sin incidencia de dirección/cronología. |
| `hall_slavesocietydanish → olwigstjohn` | a→b | resonancia | **Incidencia cronológica y de identificación de autor significativa**: el nodo objetivo es un libro póstumo de 1992 que Olwig (1985) no pudo citar; las citas reales de Olwig son a artículos anteriores de Neville Hall (distintos del libro de 1992) y, en parte, a una autora distinta (Gwendolyn Midlo Hall). Requiere revisión de la Dirección Académica. |
| `olwigstjohn → clarkemymother` | a→b | resonancia (cita) | **Confirmada con solidez** — cita textual verificada dos veces, dirección y cronología correctas. |
| `olwigstjohn → mintzpricebirth` | a→b | resonancia (cita) | **Confirmada** — cita textual localizada con precisión ("Mintz and Price 1976: 50", cap. 8); pasaje exacto identificado, resolviendo la nota "falta precisar el pasaje" de la relación existente. Persiste una incidencia bibliográfica menor sobre la identidad edición 1976/1992 (ver §22). |
| `olwigstjohn → wilsoncrabantics` | a→b | *(no existe actualmente en el corpus)* | **`CANDIDATURA_RAZONADA_NO_IMPLEMENTADA`.** Peter Wilson, *Crab Antics* (1973) — autor de `wilsoncrabantics`, Caso 2/10 de este mismo sublote — es mencionado explícitamente por Olwig en el prefacio y se le atribuye una función argumental concreta: una de las dos excepciones "holísticas" (junto con Mintz) frente al reduccionismo funcionalista de otros estudios de la familia afrocaribeña. Cita nominal directa, con función argumental precisa, dirección y cronología correctas (1973 antes de 1985). Evidencia significativa según el estándar del mandato (§10), pero no se registra como relación técnica ni se implementa. |

Corrección formal mínima aplicada por instrucción de la Dirección Académica: la candidatura `olwigstjohn → wilsoncrabantics`, señalada en la versión anterior de este documento solo en prosa, queda ahora formalizada en esta tabla de auditoría de relaciones como `CANDIDATURA_RAZONADA_NO_IMPLEMENTADA`, sin que ello constituya su implementación.

No se registra ninguna otra candidatura nueva de relación con evidencia suficiente para justificarla en este documento (conforme al mandato, §10: "Registra candidaturas nuevas solo cuando exista evidencia significativa").

No se implementa ninguna relación.

---

## 24. Pregunta decisoria

**Estado final: `LISTO_PARA_DECISION`.**

La cobertura de lectura alcanzada (prefacio y los ocho capítulos íntegros, más verificación bibliográfica completa de las cinco relaciones heredadas) es suficiente para resolver, con evidencia textual directa y sin necesidad de ampliación dirigida, la rivalidad entre las dos corrientes candidatas (C4 y C10) y para descartar, con prueba explícita y no por omisión, las arquitecturas de síntesis multicorriente y vacío taxonómico posible.

La pregunta que la Dirección Académica deberá decidir no es de naturaleza textual (no hay pasaje sin leer del que dependa la clasificación), sino estrictamente de política de contrato: **¿aprueba la Dirección Académica `FRONTERA_CONSTITUTIVA(C4, C10)` con `recorridos_sec: ["c2"]` como la clasificación operativa de esta obra, sobre la base de que ambas corrientes superan individualmente la prueba de retirada en su forma fuerte (destrucción de la arquitectura argumental) y de que ninguna de las dos es reductible a "ejemplo" o "dominio" de la otra?**

---

### Restricciones observadas

No se emitió decisión académica. No se implementó ningún recorrido. No se modificó `datos-atlas.js`, `datos-atlas.json`, protocolos, contrato, matriz, marco consolidado ni la cola. No se implementó ninguna relación. No se corrigió ningún metadato. No se inventó ningún campo. No se inventó ninguna corriente. No se avanzó al Caso 5/10. No se ejecutó ninguna operación Git de escritura (solo lectura, sobre el repositorio conectado del usuario).

**DETENTE al finalizar.**
