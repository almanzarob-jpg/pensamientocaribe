# LECTURA PROBATORIA · P3-A · CASO 6/10 · `aftershocks`

## 1. Naturaleza probatoria

Este documento constituye la lectura probatoria desde cero del Caso 6/10 del sublote P3-A, ejecutada bajo la instrucción **P3-A · CASO 6/10 — LECTURA PROBATORIA DESDE CERO**, tras la auditoría y aprobación definitiva del Caso 5/10 (`allen_dikimanera`, estado `CASO_5_DECIDIDO_E_IMPLEMENTADO_AUDITADO`). No contiene decisión académica, no modifica el corpus (`datos-atlas.js` / `datos-atlas.json`), no implementa recorridos ni relaciones, y no avanza al Caso 7/10. Su función es exclusivamente entregar una reconstrucción autónoma y una evaluación C1–C10 con suficiente respaldo textual para que la Dirección Académica decida.

## 2. Identidad bibliográfica

- **atlas-id:** `aftershocks`
- **Título:** *Aftershocks of Disaster: Puerto Rico Before and After the Storm*
- **Editoras:** Yarimar Bonilla y Marisol LeBrón (volumen colectivo editado, ~30 contribuyentes)
- **Año:** 2019
- **Editorial:** Haymarket Books, Chicago
- **ISBN:** 978-1-64259-086-9
- **Territorio:** Puerto Rico (con diáspora, principalmente EE. UU. continental)
- **Tradición/lengua:** anglófono (PR)

## 3. Antecedentes del nodo (ANTECEDENTE_POR_AUDITAR)

Estado heredado en el corpus (`datos-atlas.json`), auditado antes del análisis sustantivo y tratado en todo momento como antecedente, nunca como evidencia clasificatoria:

```
"id":"aftershocks","k":"obra",
"t":"Aftershocks of Disaster (huracán María)",
"a":"Bonilla & LeBrón (eds.)","y":"2019",
"f":["catastrofes","soberanias"],
"l":"puertorico","tr":"anglófono (PR)",
"ap":"El desastre como revelador político de la relación colonial, no como evento natural.",
"recorrido":null,"recorridos_sec":[],
"arquitectura_recorrido":null,"estado_recorrido":"pendiente"
```

**Relaciones heredadas (7, todas tipo `resonancia`, ninguna implementada como `recorrido`):**

| a | b | fuente registrada |
|---|---|---|
| bonilla | aftershocks | "Comparten el fenómeno Soberanías. Por corroborar el vínculo directo." |
| aftershocks | lindskoog | "Comparten el fenómeno Soberanías. Por corroborar el vínculo directo." |
| islandfutures | aftershocks | "Comparten la tesis central de que el desastre revela la relación colonial en vez de ocultarla... (Sheller 2020; Bonilla y LeBrón 2019)." |
| schwartz_seaofstorms | aftershocks | "Comparten el fenómeno Catástrofes climáticas y el lugar Puerto Rico. Por corroborar el vínculo textual directo: no se detectó cita cruzada explícita en el rastreo." |
| klein_battleparadise | aftershocks | "Comparten fuente primaria: ambas obras se apoyan en el trabajo de Yarimar Bonilla sobre Puerto Rico pos-María." |
| zambrana | aftershocks | "Bonilla es reconocida como interlocutora directa del libro (\"a vital interlocutor...\") y se cita su trabajo de campo sobre las asambleas posteriores al huracán María." |
| felicianosantos | aftershocks | "Cita por año y autoría exactos: «(Bonilla and Lebrón 2019)», coincide con Aftershocks of Disaster ya catalogado." |

**Verificación de identidad (§1 del mandato):** consultadas la cola autoritativa (`cola-lectura-pendiente-atlas-2.md`, línea 61: `aftershocks`, C6, PENDIENTE_NO_LEIDA, referencia cruzada a `dictamen-academico-c6.md §6,§14`) y la apertura del sublote (`apertura-recalibracion-p3-etapa-2-3g.md`, líneas 15, 189 y 282: Caso 6/10 = `aftershocks`, C6, Puerto Rico, CONFIRMADA, "único caso C6 de este sublote", resolviendo el hilo heredado de P2 `schwartz_seaofstorms ↔ aftershocks`). **No se detectó contradicción** entre ambas fuentes ni con el nodo del corpus. Se procede sin selección por inferencia.

## 4. Archivo fuente

- **Ruta:** `Biliografia/Yarimar Bonilla, Marisol LeBrón - Aftershocks of Disaster_ Puerto Rico Before and After the Storm (2019, Haymarket Books).pdf`
- **Metadatos técnicos (`pdfinfo`):** Creator/Producer *calibre 3.48.0*; 400 páginas; tamaño de página 612×792 pt (Letter); sin cifrado; 7.180.655 bytes; `CreationDate` 2019-09-30.
- **Nota de identificación:** en la misma carpeta bibliográfica existen dos obras homónimas o adyacentes que deben distinguirse expresamente para no confundir el corpus: *Humanitarian Aftershocks in Haiti* (Mark Schuller, epub) — autor y territorio distintos — y *Non-Sovereign Futures* (Yarimar Bonilla, autoría individual) — ya catalogada como nodo `bonilla`, obra distinta de `aftershocks`.

## 5. Método de extracción

`pdftotext -layout` sobre el PDF completo → archivo `aftershocks_layout.txt` (10.834 líneas, 669.780 bytes) → copiado a la convención de scratch del repositorio (`_to_delete/_tmp_aftershocks_layout.txt`) → `device_stage_files` al contenedor en la nube → lectura mediante la herramienta `Read` en bloques secuenciales de 150–460 líneas, siguiendo el orden natural del volumen (portadilla → tabla de contenidos → Foreword → Introduction → Parte I → Parte II → Parte III → Parte IV → Parte V → Afterword).

## 6. Cobertura de lectura

**Naturaleza del objeto:** *Aftershocks of Disaster* es una **antología editada multiautoral**, no una monografía. Consta de Foreword, Introducción de las editoras, cinco Partes temáticas con ~30 piezas de autoría individual o colectiva (ensayo, periodismo, entrevista, poesía, crítica de arte, testimonio), Afterword, Agradecimientos, Semblanzas de contribuyentes e Índice. Esta estructura obliga a distinguir, dentro de la cobertura, entre las piezas donde se formula y sintetiza la tesis (Foreword, Introducción, Afterword) y las ~30 piezas individuales que aportan dominio empírico y evidencia heterogénea.

**Cobertura realizada — lectura íntegra:**
- Foreword (Arcadio Díaz-Quiñones) — íntegro.
- Introducción "Aftershocks of Disaster" (Bonilla y LeBrón) — íntegra.
- Afterword "Critique and Decoloniality in the Face of Crisis, Disaster, and Catastrophe" (Nelson Maldonado-Torres) — íntegro.
- Parte I: "The Trauma Doctrine" (diálogo Bonilla–Klein) — íntegro.
- Parte II (8 piezas): "María's Death Toll" (Carla Minet) íntegra; "'I'm Quite Comfortable'" (Torres Gotay) íntegra; "Narrating the Unnameable" (Lalo) íntegra; "If a Tree Falls in an Island" (Portnoy Brimmer, poema) íntegro; "This Was Meant to Be a Hurricane Diary" (Llenín Figueroa) íntegra; "Another Haphazard Gesture" (Gallisá Muriente) íntegra; "WAPA Radio" (Rodríguez Cotto) — sustancial (~65 %).
- Parte III (8 piezas): "Our Fellow Americans" (Negrón-Muntaner) íntegra; "US Media Depictions of Climate Migrants" (Lloréns) íntegra; el ensayo de Erika P. Rodríguez íntegro; "Lifting the Veil" (Gregory) íntegro; "The Importance of Politically Engaged Artistic..." (Ramírez-Aponte) íntegra; "Si no pudiera hacer arte, me iba" (Rivera Santana) íntegra; "Art and a Threshold Called Dignity" (TIAGO) íntegra; "Picking up the Pieces" (Roman) íntegra.
- Parte IV (6 piezas): "sinvergüenza sin nación/with no nation" (Salas Rivera, poema bilingüe) íntegro; "Puerto Rico's Unjust Debt" (Morales) íntegra; "Puerto Rico's Debt Is Odious" (Bannan) íntegra; "Dismantling Public Education in Puerto Rico" (Brusi y Godreau) íntegra; "Puerto Rico's Fight for a Citizen Debt Audit" (Prados-Rodríguez) íntegra; "Rhizomatic" (Portnoy Brimmer, poema) íntegro.
- Parte V (6 piezas): "Looking for a Way Forward in the Past" (Jiménez) íntegra; "Psychoanalysis as a Political Act after María" (Noboa Ortega) íntegra; "Authenticating Loss and Contesting Recovery" (Molinari) íntegra; "The Energy Uprising" (Massol-Deyá) íntegra; "Community Kitchens" (Roberto) íntegra; "Building Accountability and Secure Futures" (entrevista LeBrón–Mari Mari Narváez) íntegra.

**Cobertura parcial / no realizada, registrada con exactitud:**
- "¡Ay María!" (obra de teatro colectiva, Parte I) — leída parcialmente (~35 %: introducción editorial, introducción de la productora, primeras escenas del guion traducido). No se completó la lectura de la totalidad del guion.
- "(note for a friend who wants to commit suicide after the hurricane)" (poema de Raquel Salas Rivera, Parte II) — **no leída**, por decisión deliberada dado el contenido sensible (ideación suicida); se registró su existencia, ubicación y autoría en la tabla de contenidos, pero no se extrajo ni analizó su contenido.
- Agradecimientos, Semblanzas de contribuyentes e Índice — no leídos; no aportan material argumental.

**Páginas físicas vs. impresas:** el PDF es una conversión Calibre (epub→PDF) con paginación reflowed a tamaño Letter; **no se detectaron números de página originales embebidos en el texto extraído** (se verificó mediante búsqueda de líneas numéricas aisladas; los únicos números de línea aislados hallados corresponden a la numeración interna de los fragmentos de "This Was Meant to Be a Hurricane Diary", no a paginación del libro). En consecuencia, **no es posible reportar una correspondencia páginas físicas–páginas impresas**; la cobertura se documenta por pieza y por líneas del archivo de extracción, no por folio.

**No se declara cobertura no realizada.**

## 7. Limitaciones

- Ausencia de paginación impresa recuperable (ver §6).
- Un poema con contenido de autolesión/suicidio deliberadamente no leído en profundidad.
- La obra de teatro "¡Ay María!" leída solo parcialmente.
- Notas al pie / referencias bibliográficas revisadas de forma selectiva (se usaron para verificar citas cruzadas puntuales, no leídas exhaustivamente en su totalidad).
- No se verificó tablas o imágenes ilegibles: las imágenes (fotografías, obras de arte) no se analizaron visualmente; solo se leyeron los pies de foto y el texto ensayístico que las acompaña.

## 8. Problema

¿Qué es lo que verdaderamente ocurrió en Puerto Rico tras el huracán María — un desastre natural con una respuesta estatal deficiente, o la manifestación intensificada de una crisis colonial y económica preexistente que el huracán reveló más que produjo? ¿Qué significaría una "recuperación" genuina en esas condiciones?

## 9. Pregunta

Siguiendo el mandato ("¿Qué operación intelectual realiza esta obra?"): la obra pregunta qué revelan los "aftershocks" (réplicas) —entendidos como procesos continuos, no como el episodio meteorológico único— sobre la estructura colonial, económica y política de Puerto Rico, y qué posibilidades de transformación decolonial emergen de esa crisis prolongada.

## 10. Tesis

El huracán María no fue un evento singular sino el "mainshock" aparente de un desastre colonial de larga duración: la obra sostiene que la devastación de María no puede explicarse por la intensidad meteorológica sola, sino por las "premoniciones" (*foreshocks*) —la crisis de deuda, la austeridad impuesta por la Junta de Control Fiscal (PROMESA), el abandono de infraestructura pública, la migración forzada y la subordinación colonial de 120 años— que precedieron y determinaron la magnitud del daño y la lentitud de la respuesta. La "recuperación" tal como la enmarca el Estado (pago de deuda, privatización, capitalismo del desastre) reproduce la extracción colonial en vez de repararla; la obra sostiene que solo la descolonización puede constituir el centro de una recuperación justa (formulación explícita en la última frase de la Introducción).

## 11. Objeto y método

**Objeto:** la intersección entre el huracán María (2017) y su contexto/consecuencia colonial-económica: crisis de deuda y PROMESA, austeridad y privatización, migración/diáspora, capitalismo del desastre, violencia estatal, y autoorganización comunitaria.

**Método:** no monográfico-argumentativo sino **curatorial-multivocal**: periodismo de investigación, testimonio, poesía, crítica de arte, etnografía, entrevista, análisis jurídico-financiero y reflexión filosófica decolonial, organizados por las editoras en torno a una tesis común formulada en la Introducción y sintetizada filosóficamente en el Afterword.

## 12. Fuentes

Entrevistas y testimonio directo; bases de datos periodísticas propias (Centro de Periodismo Investigativo); documentos y datos gubernamentales/FEMA; registros legales y financieros (emisiones de bonos, litigios, PROMESA, sentencias del Tribunal Supremo); trabajo de campo etnográfico; documentación fotográfica y de arte; poesía; teoría decolonial y de la catástrofe (Quijano, Fanon, Maldonado-Torres, Aradau y Van Munster, Koselleck); teoría del capitalismo del desastre (Klein).

## 13. Arquitectura argumental

Foreword (marco histórico-colonial) → Introducción (tesis: *aftershocks*/*foreshocks*, colonialidad del desastre) → **Parte I "Openings"** (reformulación teórica: "trauma doctrine" vs. "shock doctrine"; apertura testimonial-teatral) → **Parte II "Narrating the Trauma"** (testimonio y periodismo sobre abandono, ocultamiento de la cifra de muertos, dificultad de narrar el trauma) → **Parte III "Representing the Disaster"** (crítica de la representación mediática/visual, raza, colonialidad de la ciudadanía, marco de "refugiado climático", estética decolonial) → **Parte IV "Capitalizing on the Crisis"** (núcleo económico-estructural: deuda, austeridad, privatización de educación y energía) → **Parte V "Transforming Puerto Rico"** (antecedentes históricos del pensamiento anticolonial, autoorganización, soberanía energética/alimentaria, represión policial, futuros decoloniales) → Afterword (síntesis filosófica: crisis/desastre/catástrofe, colonialidad, pensamiento decolonial).

**Nota estructural obligatoria (naturaleza antológica):** la tesis unificadora reside concentrada en las piezas editoriales (Foreword, Introducción, Afterword); las ~30 piezas individuales no construyen una progresión argumental acumulativa sino una constelación temática de evidencia convergente y a menudo intercambiable, con una minoría de piezas (especialmente el bloque de deuda de la Parte IV, y Jiménez/Massol-Deyá/Molinari en la Parte V) que sostienen un argumento propio y desarrollado.

## 14. Temporalidad y escala

**Temporalidad:** eje inmediato septiembre 2017–2019, con alcance retrospectivo explícito a 1898 (invasión estadounidense), 1930s (Gran Depresión, Albizu Campos, huracán San Ciprián de 1932), 1952 (ELA), 2006 (fin de exenciones fiscales sección 936), 2015–16 (crisis de deuda, PROMESA) y proyección hacia futuros decoloniales imaginados.

**Escala:** Puerto Rico como archipiélago más diáspora; comparaciones explícitas con Nueva Orleans/Katrina, Haití, Barbuda, Grecia, Argentina y Detroit, situando el caso puertorriqueño dentro de una geografía más amplia de capitalismo del desastre y deuda colonial.

## 15. Conceptos organizadores

*Aftershocks* / *foreshocks* (desastre como proceso continuo, no evento singular); "trauma doctrine" (reformulación por Bonilla del "shock doctrine" de Klein); "colonialidad del desastre"; "capitalismo del desastre"; deuda "odiosa"/"subyugada" (*odious/subjugated debt*); "apoyo mutuo" frente a marcos de recuperación centrados en el mercado/Estado; "resiliencia" como concepto ambivalente (autosuficiencia impuesta vs. autodeterminación genuina); "soberanía profunda" (energética, alimentaria, hídrica, habitacional) frente a "soberanía delgada" (individualista/libertaria).

## 16. Tesis / concepto organizador / corriente / dominio empírico / evidencia / ejemplo

- **Tesis:** el desastre revela, no crea, la subordinación colonial; la recuperación genuina exige descolonización, no restauración del *statu quo*.
- **Concepto organizador:** *aftershocks*/*foreshocks*; colonialidad del desastre; soberanía profunda vs. delgada.
- **Corriente:** categoría C1–C10 capaz o no de capturar ese mecanismo — evaluada en §17.
- **Dominio empírico:** Puerto Rico 2017–2019 (con profundidad histórica): daños del huracán, crisis de deuda, migración, organización comunitaria, violencia estatal.
- **Evidencia:** entrevistas, periodismo de investigación, datos legales/financieros, arte, poesía, etnografía.
- **Ejemplo (retirable sin destruir la tesis):** cualquier pieza individual de las ~30 contribuciones — la tesis se sostiene por convergencia redundante entre múltiples voces, no depende de un caso único.

## 17. Evaluación C1–C10

| Corriente | Clasificación | Justificación breve |
|---|---|---|
| **C1** Mundos indígenas | AUSENTE | No se detectó tratamiento sustantivo de mundos o agencia indígena en el material leído. |
| **C2** Trata, esclavización y plantación | AUSENTE / INCIDENTAL | La plantación aparece solo como referencia de fondo aislada (p. ej. una mención de "an abandoned sugar plantation" en un listado); no hay tratamiento sustantivo de trata o esclavización como dominio propio. |
| **C3** Fugas, cimarronajes y emancipaciones | AUSENTE | No se detectó tratamiento de cimarronaje o fuga histórica; la resistencia contemporánea (protesta, autogestión) no se plantea en estos términos históricos específicos. |
| **C4** Postplantación, trabajo y desposesión | **SECUNDARIA ESTRUCTURANTE** | La Parte IV completa (Morales, Bannan, Brusi/Godreau, Prados-Rodríguez) desarrolla, con densidad y sostenimiento propios, el mecanismo de desposesión económica: deuda "odiosa"/"subyugada", austeridad, privatización de educación y servicios, despojo de tierra/título de propiedad (Molinari; poema "Rhizomatic"). Ver prueba de dependencia/retirada en §18–19: funciona como **dominio y mecanismo concreto** de la tesis colonial más amplia, no como su eje explicativo último. |
| **C5** Rutas, diásporas y territorios acuosos | SECUNDARIA ESTRUCTURANTE (débil) / CONTEXTUAL | La migración/éxodo estructura la apertura de la Introducción (caso de Isabel) y el ensayo íntegro de Lloréns, además de atravesar TIAGO y el poema de Salas Rivera. Es un dominio narrativo y evidencial mayor, pero funciona como consecuencia vivida de la crisis, no como mecanismo explicativo independiente. |
| **C6** Huracanes, ecologías, catástrofes climáticas | SECUNDARIA ESTRUCTURANTE | Massol-Deyá desarrolla un argumento ecológico-energético sustantivo (ciencia climática, deslizamientos, energía renovable). Sin embargo, la propia obra —explícitamente en el Afterword de Maldonado-Torres (distinción crisis/desastre/catástrofe) y en la Introducción ("not just the effects of the wind or rain but also what followed")— **descentra deliberadamente** la lectura del huracán como evento natural-ecológico en favor de la lectura colonial-estructural. Es dominio empírico indispensable (sin huracán no hay libro) pero no mecanismo explicativo principal. |
| **C7** Soberanías, fronteras y ocupaciones | **ESTRUCTURANTE (principal)** | El estatus colonial, PROMESA/la Junta, las sentencias del Tribunal Supremo de 2016 (*Sánchez Valle*, *Franklin California*), la genealogía de Albizu Campos y el Partido Nacionalista, el debate "soberanía profunda vs. delgada" (diálogo Bonilla–Klein) y la síntesis decolonial del Afterword constituyen el marco causal y finalista explícito de la obra: la propia Introducción cierra identificando la descolonización como condición de una recuperación justa. Ver prueba de causalidad/finalidad en §18. |
| **C8** Creolizaciones | AUSENTE / INCIDENTAL | No se detectó tratamiento sustantivo de creolización cultural como proceso propio. |
| **C9** Archivos vivos, espiritualidades y saberes transmitidos | CONTEXTUAL | Presente de forma secundaria en la Parte III (el "Museum of the Old Colony" de Delano, el proyecto fotográfico "The Oldest Colony" de Rodríguez, los inventarios-poema de Gallisá Muriente como archivo vivo), pero no articula una proposición propia independiente de la tesis colonial general. |
| **C10** Cuerpos, parentescos y eróticas | CONTEXTUAL / INCIDENTAL | Presente vía trabajo de cuidado feminizado no remunerado (CAM), aumento de violencia doméstica y vulnerabilidad LGBTQ, trauma encarnado (Noboa Ortega); funciona como evidencia dentro de la narrativa de trauma/cuidado comunitario, no como corriente estructurante independiente. |

## 18. Seis pruebas (candidatas C7 y C4)

1. **Causalidad:** la Introducción y Bannan argumentan explícitamente que la falta de soberanía (C7) es la causa estructural que produce la vulnerabilidad a la deuda y la austeridad (C4): "the heart of the economic crisis is political... without fundamentally changing its colonial relationship with the United States" (Bannan).
2. **Finalidad:** la obra converge, en la Introducción y en Prados-Rodríguez, hacia la descolonización/autodeterminación como horizonte último; incluso el proyecto de auditoría de deuda se justifica en términos de "cambiar las dinámicas de poder" coloniales, no como fin económico-técnico en sí mismo.
3. **Criterio de valoración:** las piezas se valoran por su capacidad de desenmascarar la colonialidad y apuntar hacia la autodeterminación; el análisis de deuda es valorado precisamente por su implicación política-soberanista (la categoría "deuda odiosa/subyugada" es en sí misma una categoría jurídico-colonial, no meramente económica).
4. **Dependencia:** el argumento de deuda depende del marco de estatus colonial para su especificidad (Bannan invoca explícitamente el precedente Cuba-España de 1898); sin ese marco sería una crítica genérica antiausteridad aplicable a Grecia o Detroit, no un argumento puertorriqueño-colonial distintivo.
5. **Retirada:** retirar C7 destruiría el mecanismo explicativo (el argumento de deuda perdería su carácter "colonial/odioso" específico); retirar C4 elimina un dominio evidencial mayor (la Parte IV completa) pero el argumento soberanista sobrevive con fuerza propia (Foreword, genealogía de Albizu Campos, sentencias del Tribunal Supremo, diálogo Bonilla–Klein, Afterword).
6. **Dominancia:** dominancia consistente de C7 como marco articulado por las propias editoras en Introducción y Afterword; no se observó oscilación de dominancia comparable a la hallada en el Caso 5.

## 19. Retirada individual (por corriente candidata)

- **C7:** su retirada destruiría el **mecanismo explicativo** completo (la obra perdería su especificidad colonial y se reduciría a crítica genérica de desastres/austeridad) — justifica afirmación fuerte de irreductibilidad.
- **C4:** su retirada elimina un **dominio empírico** extenso (la Parte IV) y varias proposiciones concretas (mecánica de bonos, privatización educativa), pero no destruye la arquitectura argumental ni el mecanismo explicativo, que sobrevive por otras vías (Parte V, Foreword, Afterword).
- **C6:** su retirada elimina el **dominio empírico** fundacional (sin huracán no hay libro) pero, según el propio aparato teórico de la obra, no el mecanismo explicativo (que es explícitamente no-meteorológico).
- **C5:** su retirada elimina **ejemplos y evidencia** (el caso de Isabel, el ensayo de Lloréns) sin destruir la proposición central.
- **C9, C10:** su retirada elimina **evidencia puntual**, sin afectar la arquitectura.

## 20. Dominancia

No se observó oscilación de dominancia entre C7 y C4 comparable a la del Caso 5 (`allen_dikimanera`): la propia obra articula consistentemente a C4 (y a C6, C5) como dominios/mecanismos subordinados a la finalidad y causalidad soberanista (C7), tanto en la voz editorial (Introducción, Afterword) como en las piezas más argumentativas de la Parte IV (Bannan, Prados-Rodríguez).

## 21. Arquitecturas especiales — evaluación y descarte razonado

**Prueba adversarial contra `FRONTERA_CONSTITUTIVA` (§10 del mandato), aplicada a C7/C4:**

1. ¿Argumentan C7 y C4 el mismo problema desde dimensiones verdaderamente irreductibles? No: C4 es una manifestación/mecanismo concreto (económico) de la subordinación cuya causa y finalidad última la obra sitúa en C7.
2. ¿Puede una funcionar como mecanismo, contexto, condición de origen o dominio de la otra? Sí — C4 funciona como dominio/mecanismo de C7, según §18.
3. ¿Es la retirada de ambas verdaderamente destructiva por igual? No — asimétrica (§19): retirar C7 destruye el mecanismo explicativo; retirar C4 elimina un dominio importante pero no destructivo.
4. ¿Existe ausencia de dominancia consistente? No — hay dominancia consistente de C7 (§20).
5. ¿Representaría una arquitectura principal/secundaria la obra sin deformación sustantiva? **Sí.**

**Conclusión: no se declara `FRONTERA_CONSTITUTIVA`.** Conforme al mandato ("si la respuesta a 5 es sí, NO declares frontera"), y en explícita observancia de la advertencia del propio Caso 6 contra presuponer otra arquitectura especial tras varias ya encontradas en el sublote, se descarta la frontera constitutiva mediante prueba adversarial propia, sin apelar a la analogía estadística con el Caso 5.

**`SINTESIS_MULTICORRIENTE`:** evaluada y descartada. No se identificaron tres o más corrientes individualmente co-necesarias que sobrevivan la prueba de retirada individual exigiendo pérdida de proposición o de mecanismo explicativo (§9 del mandato); C6 y C5, pese a su desarrollo textual, retiran como pérdida de dominio/evidencia, no de mecanismo.

**`VACÍO_TAXONÓMICO_POSIBLE`:** evaluado y descartado. La combinación C7 (principal) + C4/C6/C5 (secundarias) + C9/C10 (contextuales) capta razonablemente la operación intelectual de la obra sin residuo conceptual indispensable detectado. No se recurrió a `cuijla` ni al concepto `bida` de `allen_dikimanera` como analogía.

## 22. Arquitectura recomendada

**Arquitectura ordinaria** (principal + secundarias), sin frontera constitutiva ni síntesis multicorriente:

- **Principal:** C7 — Soberanías, fronteras y ocupaciones.
- **Secundarias estructurantes:** C4 — Postplantación, trabajo y desposesión; C6 — Huracanes, ecologías y catástrofes climáticas; C5 — Rutas, diásporas y territorios acuosos.
- **Contextuales:** C9 — Archivos vivos, espiritualidades y saberes transmitidos; C10 — Cuerpos, parentescos y eróticas.
- **Ausentes/incidentales:** C1, C2, C3, C8.

## 23. Incidencias

**Bibliográficas:** ninguna corrección requerida; la identidad bibliográfica del PDF fuente coincide plenamente con el nodo del corpus.

**Editoriales:** el volumen es una conversión Calibre epub→PDF sin paginación impresa recuperable en el texto extraído (ver §6–7); se recomienda registrar esta limitación de forma permanente si se requiere trazabilidad de folio en el futuro.

**Territoriales:** ninguna.

**Temporales:** dos de las siete relaciones heredadas (`islandfutures`, `zambrana`) corresponden a obras publicadas **después** de `aftershocks` (2020 y 2021 respectivamente); la dirección de cualquier relación de cita, si se llegara a implementar, debe ir de esas obras posteriores hacia `aftershocks`, nunca al revés. Esto ya es coherente con el registro actual pero se señala como punto de atención explícito para el Caso 14 del mandato.

**Conceptuales:** ninguna que afecte la clasificación C1–C10.

**Taxonómicas:** ninguna — no se detectó vacío taxonómico (§21).

**Relaciones:** se identificó una **subestimación aparente** en la relación `klein_battleparadise → aftershocks`, registrada como mera "resonancia" por fuente primaria compartida. La lectura íntegra de la Parte I ("The Trauma Doctrine: A Conversation between Yarimar Bonilla and Naomi Klein") muestra que la relación es en realidad un **diálogo directo y explícito** dentro del propio texto de `aftershocks`: Bonilla entrevista a Klein sobre su libro *The Battle for Paradise*, lo cita por nombre, y ambas discuten extensamente su argumento central ("shock doctrine"/"trauma doctrine"). Se registra como incidencia de relaciones para que la Dirección Académica valore si la caracterización debe reforzarse más allá de "resonancia" — **no se corrige ni se reclasifica aquí**, conforme a la restricción del mandato.

Adicionalmente, la relación `bonilla → aftershocks` vincula dos obras de la misma autora (Yarimar Bonilla es autora individual del nodo `bonilla` —*Non-Sovereign Futures*— y coeditora de `aftershocks`); no se detectó cita textual explícita de *Non-Sovereign Futures* por título dentro del material leído de `aftershocks`, por lo que el estado "por corroborar" del registro heredado se mantiene sin poder confirmarse ni descartarse con la lectura realizada.

**Etiquetas:** ninguna corrección requerida — las etiquetas heredadas `catastrofes` y `soberanias` resultan ambas razonablemente compatibles con la arquitectura recomendada (C6 secundaria, C7 principal), aunque `catastrofes` por sí sola habría podido sugerir —incorrectamente, si se tomara como evidencia— que C6 es la corriente principal; se confirma que no lo es tras la prueba adversarial.

**Metadatos:** ninguna.

## 24. Auditoría de relaciones

| Relación | Autor / obra | Edición / año | Dirección | Cronología | Tipo de vínculo detectado en la lectura |
|---|---|---|---|---|---|
| bonilla → aftershocks | Yarimar Bonilla, *Non-Sovereign Futures* (2015) vs. Bonilla como coeditora de `aftershocks` (2019) | — | autoral (misma autora, obras distintas) | `bonilla` (2015) precede a `aftershocks` (2019) | Resonancia temática (soberanías); **no se detectó cita textual explícita** de *Non-Sovereign Futures* por título en el material leído. Atención: riesgo de confundir relación autoral con relación obra-a-obra — no confirmado como cita directa. |
| aftershocks → lindskoog | Carl Lindskoog, *Detain and Punish: Haitian Refugees* (2018) | — | por corroborar | `lindskoog` (2018) precede a `aftershocks` (2019) | No se detectó mención ni cita de esta obra en el material leído (cobertura no exhaustiva del 100 %; no puede descartarse en piezas no leídas). |
| islandfutures → aftershocks | Mimi Sheller, *Island Futures* (2020) | — | `islandfutures` cita/resuena con `aftershocks` | `islandfutures` (2020) **posterior** a `aftershocks` (2019) | Resonancia de tesis (desastre revela vs. oculta la relación colonial); dirección de cita, si existe, debe ser de `islandfutures` hacia `aftershocks`, nunca al revés — coherente con el registro. |
| schwartz_seaofstorms → aftershocks | Stuart B. Schwartz, *Sea of Storms* (2015) | — | por corroborar (hilo heredado de P2) | `schwartz_seaofstorms` (2015) precede a `aftershocks` (2019) | **No se detectó cita cruzada explícita** en la lectura íntegra realizada (Introducción, Afterword, Parte I con contenido más cercano a historia de huracanes). Confirma la nota ya registrada ("no se detectó cita cruzada explícita en el rastreo"); el hilo P2 permanece sin corroboración textual directa. |
| klein_battleparadise → aftershocks | Naomi Klein, *The Battle for Paradise* (2018) | — | diálogo directo dentro de `aftershocks` (Parte I) | `klein_battleparadise` (2018) precede a `aftershocks` (2019) | **Relación más fuerte que "resonancia por fuente compartida"**: diálogo textual explícito, citas directas, discusión sostenida del argumento de Klein dentro del propio texto de `aftershocks`. Ver incidencia en §23. |
| zambrana → aftershocks | Rocío Zambrana, *Colonial Debts* (2021) | — | `zambrana` cita/reconoce a Bonilla | `zambrana` (2021) **posterior** a `aftershocks` (2019) | Coherente con el registro heredado: Bonilla es reconocida como interlocutora en la obra posterior; no aplica en sentido inverso. |
| felicianosantos → aftershocks | Sherina Feliciano-Santos, *A Contested Caribbean Indigeneity* (2021) | — | `felicianosantos` cita a `aftershocks` | `felicianosantos` (2021) posterior a `aftershocks` (2019) | Cita explícita por año/autoría "(Bonilla and Lebrón 2019)" — relación limpia y verificable, coherente con el registro heredado. |

No se detectaron obras póstumas, reediciones con título distinto ni homónimos problemáticos entre las relaciones auditadas, salvo la necesaria distinción ya señalada en §4 respecto de *Humanitarian Aftershocks in Haiti* (obra distinta, no relacionada en el corpus).

## 25. Candidaturas nuevas

No se registran candidaturas nuevas de obra/nodo con función argumental verificable a partir de esta lectura. Las obras mencionadas dentro del propio `aftershocks` (p. ej. *The Battle for Paradise* de Klein, ya nodo `klein_battleparadise`; *Non-Sovereign Futures* de Bonilla, ya nodo `bonilla`) están representadas en el corpus como nodos existentes, no como candidaturas nuevas.

## 26. Pregunta decisoria

¿Confirma la Dirección Académica la arquitectura ordinaria recomendada — **C7 (Soberanías, fronteras y ocupaciones) como recorrido principal**, con **C4 (Postplantación, trabajo y desposesión), C6 (Huracanes, ecologías y catástrofes climáticas) y C5 (Rutas, diásporas y territorios acuosos) como recorridos secundarios estructurantes**, y C9/C10 como corrientes contextuales — descartando expresamente `FRONTERA_CONSTITUTIVA`, `SINTESIS_MULTICORRIENTE` y `VACÍO_TAXONÓMICO_POSIBLE` tras las pruebas adversariales aplicadas en §18–21?

---

**Estado final:** `LISTO_PARA_DECISION`

**Confirmación de no modificación del corpus:** no se modificaron `datos-atlas.js` ni `datos-atlas.json` en ningún momento de esta lectura.

**Confirmación de ausencia de operaciones Git de escritura:** no se ejecutó ninguna operación Git de escritura; toda verificación fue de solo lectura.

**Confirmación de no avance al Caso 7/10:** no se identificó, leyó ni analizó ninguna obra correspondiente al Caso 7/10 del sublote P3-A.

**DETENTE.**

---

# AMPLIACIÓN DIRIGIDA — C6/C7 Y CIERRE TAXONÓMICO

Ejecutada bajo la instrucción **P3-A · CASO 6/10 · `aftershocks` — AMPLIACIÓN DIRIGIDA — RELACIÓN C6/C7 Y CIERRE TAXONÓMICO**, emitida por la Dirección Académica tras auditar la lectura probatoria anterior. Esta sección no reemplaza ni corrige lo ya escrito arriba; lo complementa mediante una **relectura dirigida** (no una segunda lectura general) de piezas y pasajes puntuales, con búsquedas de texto completo registradas por número de línea del archivo de extracción (`_tmp_aftershocks_layout.txt`).

## A. Incidencia que motivó la ampliación

La lectura probatoria original clasificó C7 como estructurante/principal y C4, C6, C5 como secundarias estructurantes, pero desarrolló las seis pruebas obligatorias (§18) solo para el par C7↔C4, dejando sin prueba bilateral explícita el par **C7↔C6** — omisión sustantiva porque los propios conceptos organizadores del expediente (*aftershocks*/*foreshocks*, colonialidad del desastre, huracán como revelador) involucran directamente a C6. La ampliación exige resolver si C6 es (A) dominio subordinado, (B) condición de revelación, (C) secundaria dependiente, (D) dimensión irreductible co-necesaria, o (E) otra relación que la evidencia obligue a formular — sin presuponer ninguna de antemano.

## B. Evidencia nueva revisada

Relectura íntegra de los cuatro segmentos ordenados por la Dirección Académica, con líneas exactas del archivo de extracción:

- **Introducción** (Bonilla y LeBrón): líneas 292–836 (relectura completa, incluida la sección "COLONIAL DEBT AND DISASTER", líneas 436–571, y "FROM DISASTER TO DECOLONIAL FUTURES", líneas 610–795).
- **"The Trauma Doctrine"** (diálogo Bonilla–Klein): líneas 838–1359 (relectura completa).
- **"The Energy Uprising"** (Massol-Deyá): líneas 8168–8482 (relectura completa).
- **Afterword** (Maldonado-Torres): líneas 9187–9475 (relectura completa, incluidas las notas 1–18).

**Búsquedas dirigidas de texto completo (conteos de apariciones en las 10.834 líneas del volumen):** `aftershock`=30, `foreshock`=1, `disaster`=214, `catastrophe`=81, `crisis`=177, `hurricane`=460, `Maria/María`=445, `colonial`=237, `colonialism`=78, `coloniality`=31, `decoloni*`=47, `sovereignty`=51, `recovery`=92, `resilien*`=33.

Dado el volumen de apariciones de los términos genéricos (`hurricane`, `Maria`, `disaster`, `colonial`), no se revisó cada ocurrencia individualmente — la mayoría corresponde a uso referencial disperso a lo largo de las ~30 piezas ya cubiertas en la lectura original. Se revisaron **íntegramente** las 30 apariciones de `aftershock` y la única aparición de `foreshock` (línea 356), por ser los conceptos organizadores nucleares en disputa. No se amplió a piezas no leídas en la lectura original porque ninguno de estos pasajes remite a contenido fuera de lo ya cubierto.

**Hallazgo central de la búsqueda de `aftershock`/`foreshock`:** de las 30 apariciones de "aftershock(s)", solo el segmento de la Introducción (líneas 335–360) desarrolla el concepto teóricamente; el resto son usos descriptivos dispersos ("the aftershocks of Hurricane María", líneas 417, 607, 724, 2356, 2362, 6657, 8820, 8828) que dan por sentada la definición ya establecida, sin añadir contenido conceptual nuevo. **"Foreshock" aparece exactamente una vez en todo el volumen** (línea 356), dentro de la única oración que lo define: "Aftershocks of Disaster examines both Hurricane María's aftershocks and its foreshocks—the sociohistorical context of debt crisis, migration, and coloniality in which the storm took place." El concepto de *foreshocks*, pese a nombrar la arquitectura del título del libro, **no se desarrolla en ningún otro lugar del texto**: no vuelve a aparecer ni en el diálogo Bonilla–Klein, ni en el Afterword, ni en ninguna de las piezas de las cinco Partes.

## C. Operación intelectual del desastre

**Respuesta a la pregunta decisiva:** el concepto de desastre en *Aftershocks of Disaster* realiza simultáneamente las operaciones 2, 3 y 4 del listado del mandato, pero de forma **asimétrica** — no la operación 5 (términos mutuamente constitutivos en pie de igualdad).

El propio texto formula la distinción con total claridad (Introducción, líneas 342–360): el libro examina "not just the effects of the wind or rain but also what followed", y pregunta explícitamente "whether Hurricane María should be considered the 'mainshock' at all, or whether the storm and its effects are best understood as the compounded results of a longer colonial history." Bonilla lo repite en primera persona en el diálogo con Klein (líneas 1014–1016): "My focus since has thus not been on what María has caused, but what it has revealed: centuries of colonialism, decades of economic crisis, and deep forms of structural and infrastructural neglect."

Esto es la operación **3** (desastre como mecanismo epistemológico que revela estructuras coloniales) en su formulación más explícita y repetida. Simultáneamente, la obra sostiene la operación **4** (desastre como proceso material parcialmente producido por estructuras coloniales) en un registro más acotado: "these structural vulnerabilities... set the stage for María's impact" (línea 432-433); la infraestructura pública debilitada por austeridad y deuda intensificó objetivamente el daño material.

Es correcto no confundir "sin huracán no habría libro" con "sin C6 no puede existir el mecanismo explicativo" (advertencia del mandato, §3): el texto mismo evita esa confusión. El pasaje decisivo es la reformulación de Bonilla en el diálogo con Klein (líneas 1024–1028): "It's partly because of this that I argue that what we see in Puerto Rico is not a shock doctrine but a trauma doctrine: this is not a case of economic and political interests taking advantage of a moment of shock, but rather of corporate and political interests taking advantage of deep-seated colonial traumas." Aquí la obra **desplaza explícitamente el mecanismo explicativo del choque/desastre (registro C6) hacia el trauma colonial estructural (registro C7)** — es un movimiento argumental deliberado, no ambiguo.

Sobre la operación 5 (términos mutuamente constitutivos): el Afterword de Maldonado-Torres es el pasaje que más se acerca a esta formulación — "Hurricane María is a catastrophe inseparable from the catastrophe of Puerto Rican colonialism... and the catastrophe of modernity/coloniality" (líneas 9417–9419). Sin embargo, una lectura atenta muestra que Maldonado-Torres **redefine "catastrophe" como categoría filosófica que termina denotando la colonialidad misma** ("coloniality can be understood as metaphysical, demographic, and environmental catastrophe", líneas 9390–9391; "colonialism... otherwise known as coloniality", línea 9366). Es decir: el término "catástrofe" se estira conceptualmente hasta volverse el vocabulario mediante el cual se nombra la colonialidad (C7), no una categoría meteorológico-ecológica autónoma (C6) que se combine en pie de igualdad con C7. Este hallazgo es determinante para las pruebas siguientes: el aparente lenguaje de "inseparabilidad" no es evidencia de dos dimensiones irreductibles conviviendo, sino del desplazamiento conceptual de C6 hacia el vocabulario de C7.

## D. Seis pruebas C6↔C7

**D.1. Causalidad.** ¿La colonialidad produce o intensifica las condiciones materiales del desastre? Sí, explícitamente: la sección "Colonial Debt and Disaster" (líneas 436–571) documenta cómo la deuda, la Junta/PROMESA, la Ley Jones y la austeridad debilitaron la infraestructura pública antes de María. ¿El desastre revela la colonialidad? Sí, es la afirmación más repetida del volumen (§C). ¿La relación causal es C7→C6? Sí, en el registro material: la colonialidad explica por qué la infraestructura era vulnerable y por qué la respuesta fue tan deficiente. ¿Existe además una función epistemológica C6→C7? Sí, pero es **epistémica, no causal-material**: el huracán no produce ni explica la colonialidad; ofrece la ocasión y el material evidencial mediante los cuales la colonialidad se vuelve legible. ¿El texto distingue entre producir el desastre y hacer visible una estructura? Sí, de forma explícita y reiterada (§C). **Conclusión:** relación causal bidireccional pero asimétrica — C7→C6 es causalidad material parcial; C6→C7 es función reveladora, no causalidad. No se mezclan los dos registros porque el propio texto los mantiene separados.

**D.2. Finalidad.** De las seis posibilidades listadas en el mandato, el texto converge explícitamente en una combinación de "demostrar que María revela una estructura colonial previa", "demostrar que la recuperación reproduce colonialidad" y "usar la catástrofe para abrir un horizonte de descolonización" — las tres articuladas en la última frase de la Introducción: "the need for decolonization to serve as the centerpiece of a just recovery for Puerto Rico and the Caribbean as a whole" (líneas 793–795), y reafirmadas por el cierre del Afterword: "calls for a significant engagement with Caribbean decolonial thought" (líneas 9474–9475). "Reformular qué significa desastre" (la contribución específica de Maldonado-Torres) es instrumental a esta finalidad decolonial, no un fin autónomo de teoría de catástrofes.

**D.3. Criterio de valoración.** Sí, la explicación falla cuando naturaliza a María como mero fenómeno meteorológico: el volumen rechaza explícitamente esa lectura ("Lives were not lost to the wind and the rain... instead, residents drowned in bureaucracy and institutional neglect", líneas 398–400) y dedica el Afterword entero a rechazar el registro de "fatalidad"/azar implícito en la etimología de "disaster" (líneas 9258–9268). A la inversa: una explicación de la colonialidad sin la catástrofe, las réplicas y la recuperación específicas de María **tampoco representaría esta obra particular** — pierde su ocasión concreta, su título, su textura testimonial. Esto es exactamente la estructura mecanismo/dominio: C7 aporta el registro explicativo exigido (no naturalizar); C6 aporta la ocasión concreta exigida (no abstraer).

**D.4. Dependencia.** `C6 → C7`: sí, el desastre permite revelar/conceptualizar la relación colonial (función epistémica, ya establecida). `C7 → C6`: sí, la colonialidad explica por qué un huracán se convirtió en desastre prolongado (deuda, austeridad, Junta, Ley Jones — desarrollado extensamente en Introducción, Bannan, Massol-Deyá). **Conclusión:** dependencia bilateral pero de tipo distinto en cada dirección — no es dependencia simétrica del mismo tipo, sino una **relación mecanismo/dominio**: C7 funciona como mecanismo explicativo (explica el porqué de la magnitud y duración del desastre, y por qué la "recuperación" reproduce despojo); C6 funciona como dominio empírico y dispositivo epistémico-revelador (aporta la ocasión y el modo de demostración), sin operar como mecanismo explicativo autónomo de la colonialidad.

## E. Retirada bilateral C6/C7

**E.1. Retirada completa de C6** (huracán María, catástrofe, desastre, *aftershocks*/*foreshocks*, recuperación posdesastre, ecología/energía en tanto C6). Lo que queda: una crítica de la colonialidad puertorriqueña (deuda, PROMESA, soberanía, Junta) que permanece completamente articulable —de hecho, el propio corpus del Atlas contiene obras (p. ej. `zambrana`, *Colonial Debts*) que sostienen ese mismo tipo de argumento sin apoyarse en un huracán—. Lo que se pierde es la ocasión concreta, el dispositivo epistémico de "revelación" que organiza el modo de demostración del volumen, y la totalidad de su textura testimonial y evidencial (entrevistas, ¡Ay María!, poesía, fotografía, periodismo del huracán). **Clasificación de la pérdida: pérdida de dominio empírico fundacional + pérdida del dispositivo epistémico organizador — no pérdida del mecanismo explicativo**, porque el propio aparato conceptual de la obra (§C, §D.1) ya distingue explícitamente entre lo que el huracán *causó* y lo que *reveló*, y es precisamente lo revelado (la estructura colonial) lo que sobrevive intacto sin el huracán.

**E.2. Retirada completa de C7** (condición colonial, relación PR-EE.UU., PROMESA, Junta, ocupación/subordinación, soberanía, descolonización). Lo que queda **no** es una crítica coherente de vulnerabilidad climática, infraestructura, mala gestión y capitalismo del desastre genérico, aplicable a cualquier sociedad —esa es precisamente la lectura que la obra rechaza explícitamente mediante la reformulación "shock doctrine → trauma doctrine" (§C, líneas 1024–1028)—. Sin C7 desaparece la explicación que el propio libro da a su pregunta fundacional (por qué una tormenta de "sesenta y cuatro muertos" oficiales se convirtió en una catástrofe de miles de muertos y once meses sin electricidad): esa explicación es, en el propio texto, irreductiblemente colonial (imposibilidad constitucional de declararse en bancarrota, Junta impuesta sin representación, Ley Jones, estatus territorial). Sin C7 se pierde también el gesto argumental fundador del volumen (el diálogo Bonilla–Klein que abre el libro existe precisamente para especificar colonialmente el "shock doctrine" genérico de Klein). **Clasificación de la pérdida: pérdida del mecanismo explicativo Y destrucción de la arquitectura argumental** (se pierde tanto la respuesta a la pregunta central como el gesto inaugural que organiza la Parte I y de ahí el resto del volumen).

**E.3. Comparación.** Las dos retiradas no alcanzan el mismo nivel: E.1 (C6) produce pérdida de dominio y de dispositivo epistémico, pero el mecanismo explicativo sobrevive; E.2 (C7) produce pérdida de mecanismo explicativo y destrucción de arquitectura. Conforme al estándar del mandato (§5.3: ambas retiradas deben alcanzar pérdida de mecanismo o destrucción de arquitectura para justificar irreductibilidad), **solo C7 alcanza ese umbral**. No se concluye irreductibilidad bilateral únicamente porque ambas retiradas produzcan pérdidas importantes — la asimetría es real y se sostiene en evidencia textual directa, no en presuposición.

## F. Dominancia

Revisando específicamente Foreword, Introducción, cierre de la Introducción, arquitectura de las cinco Partes y Afterword: **C7 domina consistentemente el registro explicativo** en los cinco puntos. El Foreword de Díaz-Quiñones enmarca el volumen desde "colonial capitalism" y "legacies of colonialism" antes de mencionar el huracán en detalle. La Introducción dedica una sección completa e independiente ("Colonial Debt and Disaster", líneas 436–571) al marco colonial-económico antes de desarrollar el argumento del desastre. La Parte I abre con el diálogo Bonilla–Klein, cuyo eje explícito es la soberanía ("thin" vs. "deep sovereignty", líneas 1118–1157). Las cinco Partes en su conjunto avanzan de lo testimonial (Partes I–III) hacia lo estructural-económico (Parte IV) y hacia la soberanía/autodeterminación (Parte V), cerrando con el Afterword, que —pese a organizarse nominalmente en torno a "crisis/desastre/catástrofe"— culmina redefiniendo la catástrofe misma como colonialidad (§C).

Es importante, conforme advierte el propio mandato, no confundir el **horizonte político final** (la Introducción concluye proponiendo la descolonización) con la **dominancia argumental**: que el libro termine en un llamado político no demuestra por sí solo que C7 subordine argumentalmente a C6. Esta ampliación no basa la conclusión de dominancia únicamente en ese cierre teleológico, sino en evidencia convergente independiente: la asimetría causal (D.1), la asimetría de retirada (E.1–E.3) y el hecho de que el propio aparato conceptual del libro (la reformulación "trauma doctrine") desplaza explícitamente el mecanismo explicativo hacia el registro colonial. La dominancia de C7 está, por tanto, doblemente fundada — en la arquitectura explicativa y en el horizonte político — sin depender de que ambas coincidan necesariamente.

## G. Prueba de `FRONTERA_CONSTITUTIVA(C6,C7)`

1. ¿C6 y C7 argumentan el mismo problema desde dimensiones irreductibles? No — el problema central del volumen (por qué la tormenta produjo tal devastación, y qué exige una recuperación justa) se resuelve mediante un mecanismo único (la colonialidad), no mediante dos dimensiones que deban combinarse irreductiblemente para producir la explicación.
2. ¿Puede C6 funcionar completamente como dominio o evidencia de C7? Sí (§D, §E.1).
3. ¿Puede C7 funcionar completamente como causa explicativa de C6? Sí, en el registro material parcial (por qué el desastre fue tan severo y prolongado), aunque evidentemente no en el sentido meteorológico literal.
4. ¿La retirada de C6 destruye mecanismo o arquitectura? No (§E.1).
5. ¿La retirada de C7 destruye mecanismo o arquitectura? Sí (§E.2).
6. ¿Existe dominancia consistente? Sí (§F).
7. ¿Una arquitectura "C7 principal + C6 secundaria" representa la obra sin deformación sustantiva? **Sí** — captura tanto el mecanismo explicativo (colonialidad) como el dominio/ocasión indispensable (el desastre), sin necesidad de postular dos corrientes co-necesarias en pie de igualdad.

**Respuesta a 7 = SÍ → NO `FRONTERA_CONSTITUTIVA(C6,C7)`.** No se apela a ningún otro caso del Atlas como analogía sustantiva; la conclusión se sostiene en la evidencia textual específica desarrollada en §C–F de esta ampliación.

## H. Estatus definitivo de C4

No se reabre extensamente C4, conforme instruye el mandato (§8). Se mantiene: **C4 = SECUNDARIA ESTRUCTURANTE.** La resolución del par C6/C7 no obliga lógicamente a modificar esta clasificación: C4 (deuda, austeridad, privatización, desposesión) sigue funcionando como dominio/mecanismo económico concreto mediante el cual la colonialidad (C7) se traduce en despojo material específico —desarrollado con densidad propia en la Parte IV completa (Bannan, Morales, Brusi/Godreau, Prados-Rodríguez)—, sin alcanzar el nivel de mecanismo explicativo último: retirar C4 elimina un dominio evidencial extenso pero el argumento soberanista general sobrevive por otras vías (Foreword, diálogo Bonilla–Klein, Parte V, Afterword), tal como ya estableció §19 de la lectura original.

## I. Estatus definitivo de C5

Revisados específicamente: el caso de Isabel en la Introducción (líneas 296–334), el ensayo íntegro de Lloréns sobre el "éxodo" y el encuadre de "refugiados climáticos" (líneas 3699 en adelante), TIAGO/Richard Santiago sobre su desplazamiento a Chicago (líneas 5203 en adelante), y el poema de Salas Rivera ya cubierto en la lectura original.

En los cuatro casos, la migración/diáspora funciona como **evidencia y ejemplo vivido de la crisis colonial**, no como proposición argumentativa autónoma: Isabel abre la Introducción como ilustración testimonial de que el trauma se prolonga en el desplazamiento; Lloréns usa el material migratorio precisamente para **denunciar** un encuadre racio-colonial de "refugiado climático" —es decir, la migración es objeto de una crítica cuyo mecanismo explicativo es colonial (C7), no un dominio explicativo en sí mismo—; TIAGO narra su desplazamiento y la solidaridad de la diáspora como testimonio personal, sin formular una proposición sobre la migración como estructura; el poema de Salas Rivera evoca el exilio como imagen poética dentro de una denuncia colonial más amplia ("swallowed by colonialism").

Aplicando la prueba de retirada: retirar C5 produce pérdida de ejemplos vívidos (Isabel, TIAGO) y de un dominio narrativo (el ensayo de Lloréns), pero **ninguna proposición necesaria de la tesis general desaparece** — el argumento central (colonialidad del desastre, *trauma doctrine*, deuda colonial) permanece intacto sin necesidad de un tratamiento estructurante de la migración como corriente autónoma. No se usa la frecuencia textual como prueba de estructuralidad, conforme exige el mandato.

**Clasificación única y definitiva: C5 = CONTEXTUAL.**

## J. Tabla C1–C10 corregida (clasificación única, sin dobles)

| Corriente | Clasificación definitiva | Cambio respecto de la lectura original |
|---|---|---|
| **C1** Mundos indígenas | AUSENTE | Sin cambio. |
| **C2** Trata, esclavización y plantación | **INCIDENTAL** | Resuelto (antes "AUSENTE/INCIDENTAL"). El Afterword menciona "naturalized slavery, extractivism" (línea 9230) y "indigenous reservations and stolen lands, imprisonment and criminalization of Black men and women" (líneas 9379–9380) como parte de una genealogía filosófica de la colonialidad, no como tratamiento sustantivo de trata/plantación en sí — la mención es real pero incidental a un argumento distinto. |
| **C3** Fugas, cimarronajes y emancipaciones | AUSENTE | Sin cambio. |
| **C4** Postplantación, trabajo y desposesión | SECUNDARIA ESTRUCTURANTE | Sin cambio (§H). |
| **C5** Rutas, diásporas y territorios acuosos | **CONTEXTUAL** | Resuelto (antes "SECUNDARIA ESTRUCTURANTE (débil)/CONTEXTUAL") — ver §I. |
| **C6** Huracanes, ecologías y catástrofes climáticas | SECUNDARIA ESTRUCTURANTE | Sin cambio en la etiqueta, pero ahora **plenamente probado** mediante las seis pruebas bilaterales C6↔C7 (§D) y la prueba de frontera (§G), no solo asumido por analogía con C4. |
| **C7** Soberanías, fronteras y ocupaciones | ESTRUCTURANTE (principal) | Sin cambio; dominancia reforzada con evidencia adicional (§F). |
| **C8** Creolizaciones | **AUSENTE** | Resuelto (antes "AUSENTE/INCIDENTAL"). No se encontró, en la relectura dirigida ni en la lectura original, ninguna mención siquiera incidental de creolización como proceso teorizado (mezcla lingüística, religiosa o cultural); a diferencia de C2, no hay ni siquiera un anclaje textual puntual. |
| **C9** Archivos vivos, espiritualidades y saberes transmitidos | CONTEXTUAL | Sin cambio. |
| **C10** Cuerpos, parentescos y eróticas | **CONTEXTUAL** | Resuelto (antes "CONTEXTUAL/INCIDENTAL"). El aumento de violencia doméstica documentado con cifras específicas en la Introducción (líneas 406–411), el trabajo de cuidado y trauma corporal (Noboa Ortega) y el comentario de Klein sobre el umbral de dolor atribuido a cuerpos racializados (líneas 1234–1239) constituyen un hilo recurrente, no un incidente aislado — de ahí CONTEXTUAL y no INCIDENTAL, aunque sin alcanzar función estructurante propia. |

## K. Auditoría direccional `klein_battleparadise ↔ aftershocks`

Búsquedas de texto completo: `Naomi Klein` = 10 apariciones; `Battle for Paradise` = 6 apariciones.

**Evidencia de dirección:** (1) el diálogo "The Trauma Doctrine" (Parte I) es una conversación transcrita entre Bonilla y Klein, publicada dentro de `aftershocks`, en la que Klein misma nombra su libro ("I call the book The Battle for Paradise", línea 1125) y lo discute extensamente; (2) el ensayo de Natasha Bannan (Parte IV) cita formalmente en nota al pie: "Naomi Klein, The Battle for Paradise: Puerto Rico Takes on the Disaster Capitalists (Chicago: Haymarket Books, 2018)" (línea 7037), como referencia bibliográfica estándar.

**Respuesta a las tres preguntas del mandato:**
1. ¿Qué obra cita o discute a cuál? `aftershocks` discute y cita a `klein_battleparadise`, no al revés.
2. ¿La evidencia prueba `aftershocks → klein_battleparadise`, `klein_battleparadise → aftershocks`, o una relación bilateral? La evidencia prueba `klein_battleparadise → aftershocks` — coherente con la cronología (*The Battle for Paradise*, 2018, precede a `aftershocks`, 2019). No hay relación bilateral en sentido estricto: Klein no cita el libro `aftershocks` (que aún no existía cuando escribió su libro), sino que participa personalmente, como interlocutora invitada, en una pieza publicada dentro de `aftershocks`.
3. ¿La dirección heredada coincide con la evidencia textual disponible? **Sí, coincide plenamente.** No se registra `INCIDENCIA_DIRECCION_RELACION`.

**Distinción exigida por el mandato (existencia/fuerza/dirección):** la **existencia** de la relación está confirmada más allá de cualquier duda (dos vías independientes: diálogo directo + cita formal en nota al pie); la **dirección** es correcta tal como está registrada; pero la **fuerza/tipo** del vínculo permanece subestimada en el corpus, que lo registra como mera "resonancia por fuente primaria compartida". La evidencia de esta ampliación confirma y refuerza la incidencia ya señalada en §23 de la lectura original: se trata de una **discusión sustantiva directa** (Bannan) y de una **conversación textual explícita con reformulación conceptual** (Bonilla–Klein), no de una resonancia sin cita. No se implementa ninguna corrección, conforme a la restricción del mandato.

## L. Búsquedas dirigidas de relaciones

| Término buscado | Apariciones | Contexto / confirma, debilita o deja sin resolver |
|---|---|---|
| `Lindskoog` | 0 | No aparece en ningún punto del volumen. La relación `aftershocks ↔ lindskoog` **no se corrobora textualmente** en esta búsqueda; se mantiene "por corroborar" tal como estaba, sin poder confirmarse ni descartarse (cobertura no exhaustiva del 100%). |
| `Detain and Punish` | 0 | Igual que arriba — sin rastro textual. |
| `Schwartz` | 0 | Ninguna aparición. Confirma lo ya registrado en la lectura original: no se detecta cita cruzada explícita con `schwartz_seaofstorms`. |
| `Sea of Storms` | 0 | Igual — sin rastro textual. |
| `Non-Sovereign Futures` / `Non-sovereign Futures` | 2 | Línea 4123: nota al pie 34 del ensayo de Hilda Lloréns cita formalmente "Yarimar Bonilla, Non-sovereign Futures: French Caribbean Politics in the Wake of Disenchantment (Chicago: University of Chicago Press, 2015)" junto a Gamaliel-Ramos, *Islas migajas*, como aparato teórico sobre no-soberanía aplicado al encuadre migratorio. Línea 9595: mención en la semblanza biográfica de Bonilla (paratexto, no argumento). **Esto corrobora la relación `bonilla → aftershocks` como cita textual real**, no solo como coincidencia autoral — resuelve a favor de la confirmación el estado "por corroborar" que constaba en la lectura original (§24), con dirección correcta (2015 precede a 2019) y ubicación precisa (nota 34, ensayo de Lloréns). |
| `Battle for Paradise` | 6 | Ver §K — confirma fuertemente la relación con `klein_battleparadise`, dirección correcta, doble vía (diálogo + cita formal). |
| `Naomi Klein` | 10 | Ver §K. |

No se implementan relaciones nuevas ni se corrigen las existentes a partir de estos hallazgos, conforme a la restricción del mandato.

## M. Arquitectura recomendada tras ampliación

**Arquitectura A — recomendada:** C7 (principal) + C4, C6 (secundarias estructurantes) + C5 (contextual, resuelto en §I) + C9, C10 (contextuales) + C1, C3, C8 (ausentes) + C2 (incidental). Esta arquitectura queda ahora **plenamente probada** para el par C6/C7 mediante las seis pruebas bilaterales (§D), la retirada bilateral reforzada (§E) y la prueba adversarial de frontera (§G) — no solo asumida por extensión de las pruebas ya hechas para C7/C4 en la lectura original.

**Arquitectura B — descartada:** `FRONTERA_CONSTITUTIVA(C6,C7)` con C4 secundaria estructurante. Descartada explícitamente en §G: la respuesta a la pregunta 7 de la prueba adversarial es "sí" (una arquitectura principal/secundaria representa la obra sin deformación), lo que por mandato impide declarar frontera. La retirada bilateral es asimétrica (§E.3), no simétricamente destructiva como exige `FRONTERA_CONSTITUTIVA`.

**Arquitectura C — otra arquitectura obligada por la evidencia:** no se identificó ninguna. No se inventa una arquitectura alternativa solo para completar la comparación exigida por el mandato (§14): la evidencia revisada en esta ampliación no obliga a considerar ninguna arquitectura distinta de A.

**Conclusión: se ratifica y refuerza la Arquitectura A**, ya recomendada en §22 de la lectura original, ahora con la relación C6/C7 completamente probada mediante el protocolo bilateral reforzado exigido por esta ampliación.

## N. Pregunta decisoria

¿Confirma la Dirección Académica la arquitectura ordinaria — **C7 (Soberanías, fronteras y ocupaciones) como recorrido principal**, con **C4 (Postplantación, trabajo y desposesión) y C6 (Huracanes, ecologías y catástrofes climáticas) como recorridos secundarios estructurantes**, **C5 (Rutas, diásporas y territorios acuosos) reclasificado de forma definitiva y única como CONTEXTUAL**, C9/C10 como contextuales (C10 confirmado como CONTEXTUAL, no INCIDENTAL), C2 como INCIDENTAL, C8 reclasificado de forma definitiva y única como AUSENTE, y C1/C3 como AUSENTE — descartando expresamente `FRONTERA_CONSTITUTIVA(C6,C7)` tras la prueba adversarial bilateral reforzada de esta ampliación (§D–G)?

---

**Secuencia visible conforme al mandato:** lectura original → incidencia (par C7↔C6 sin prueba bilateral) → ampliación dirigida (presente sección) → nueva recomendación (Arquitectura A ratificada y reforzada) → decisión académica posterior (pendiente).

**Resultado de retirada C6:** pérdida de dominio empírico fundacional + dispositivo epistémico organizador; mecanismo explicativo sobreviviente (§E.1).

**Resultado de retirada C7:** pérdida de mecanismo explicativo y destrucción de arquitectura argumental (§E.2).

**Resultado de dominancia C6/C7:** dominancia consistente de C7, fundada en asimetría causal, asimetría de retirada y desplazamiento conceptual explícito ("trauma doctrine"), no solo en el horizonte político final (§F).

**Resultado de prueba de frontera:** `NO FRONTERA_CONSTITUTIVA(C6,C7)` (§G).

**Clasificación definitiva de C5:** CONTEXTUAL (§I).

**Incidencia direccional Klein/Aftershocks:** dirección heredada `klein_battleparadise → aftershocks` **confirmada correcta**; no se registra `INCIDENCIA_DIRECCION_RELACION`; se mantiene abierta la incidencia ya señalada (no nueva) sobre la subestimación del tipo/fuerza del vínculo, sin corregirla (§K).

**Estado final:** `LISTO_PARA_DECISION`

**Confirmación de no modificación del corpus:** no se modificaron `datos-atlas.js` ni `datos-atlas.json` en ningún momento de esta ampliación.

**Confirmación de ausencia de operaciones Git de escritura:** no se ejecutó ninguna operación Git de escritura; toda verificación fue de solo lectura.

**Confirmación de no avance al Caso 7/10:** no se identificó, leyó ni analizó ninguna obra correspondiente al Caso 7/10 del sublote P3-A.

**NO avances al Caso 7/10.**

**DETENTE.**
