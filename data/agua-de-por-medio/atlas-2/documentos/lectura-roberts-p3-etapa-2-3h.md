# LECTURA PROBATORIA DESDE CERO — CASO 9/10 — `roberts` — P3-A · Etapa 2.3H

**Naturaleza de este documento.** Lectura evidenciaria independiente. No es una decisión académica, no propone una arquitectura definitiva y no autoriza ninguna implementación técnica. No se toca `datos-atlas.js`, `datos-atlas.json`, la cola de lectura, relaciones, etiquetas, metadatos, protocolos, la matriz de fronteras ni ninguna decisión previa. Al final de este documento: **DETENTE**.

## 0. Cierre previo verificado (Caso 8/10, `abello`)

Se verificó en modo solo lectura el nodo `abello` en `datos-atlas.json`. Su estado actual es:

```
recorrido: "c7"
recorridos_sec: ["c2"]
arquitectura_recorrido: null
estado_recorrido: "confirmado"
fuente_recorrido: ["decision-academica-abello-p3-etapa-2-3h.md"]
```

Coincide exactamente con la decisión académica emitida y con el informe de implementación técnica ya generado. El Caso 8 está cerrado académica y técnicamente. No hay conflicto que impida iniciar el Caso 9.

## 1. Identificación independiente del Caso 9/10

Se contrastaron tres fuentes de forma independiente:

- `apertura-recalibracion-p3-etapa-2-3g.md`, tabla del §17 (Sublote P3-A): Caso 9 de 10 = `roberts`, corrientes candidatas C2/C3, grado relacional 11, fuente local en estado CONFIRMADA.
- `cola-lectura-pendiente-atlas-2.md`, entrada correspondiente: `roberts`, candidatura C2 o C3, estado `PENDIENTE_NO_LEIDA`, remite a `dictamen-academico-c3.md §8.3, §8.5` y `dictamen-academico-c2.md §4.5`.
- Nodo `roberts` en `datos-atlas.json`:

```json
{
  "id": "roberts", "k": "obra",
  "t": "Freedom as Marronage", "a": "Neil Roberts", "y": "2015",
  "f": ["cimarronaje", "soberanias"],
  "l": "jamaica", "tr": "anglófono (Antillas)",
  "ap": "La libertad pensada como fuga y no como estado: cimarronaje sociogénico, agencia esclava.",
  "recorrido": null, "recorridos_sec": [], "arquitectura_recorrido": null,
  "estado_recorrido": "pendiente"
}
```

Las tres fuentes coinciden sin contradicción: el Caso 9/10 es `roberts`, *Freedom as Marronage* (2015), de Neil Roberts. No hay ambigüedad de identidad que resolver antes de leer.

Advertencia metodológica que se sigue en todo este documento: las etiquetas `f: ["cimarronaje", "soberanias"]`, las candidaturas C2/C3 anotadas en la cola y el resumen `ap` **no se tratan como evidencia**. Son antecedentes a auditar, no hallazgos de lectura (principio `ANTECEDENTE_A_AUDITAR_NO_EVIDENCIA`). La clasificación que sigue se construye exclusivamente desde la reconstrucción independiente del argumento del libro.

## 2. Principio de independencia

Esta lectura no usa los Casos 1–8 del Atlas como precedente interpretativo sustantivo. Cuando se menciona el criterio ya ratificado en `dictamen-academico-c5.md` o `dictamen-academico-c7.md` es únicamente para aplicar la prueba de dominancia o el guion oficial de una corriente tal como está formulado, nunca para trasladar una conclusión de otro caso a `roberts`. No se presupone ninguna corriente antes de completar la reconstrucción. No se acepta la clasificación heredada (`f: ["cimarronaje","soberanias"]`) como punto de partida: se reconstruye desde cero y, si coincide al final, coincide por evidencia propia, no por herencia.

## 3. Verificación de la fuente

Archivo localizado en el dispositivo del usuario: `Biliografia /Neil Roberts - Freedom as Marronage (2015, University of Chicago Press).pdf` (845,302 bytes, 269 páginas).

Verificación bibliográfica contra el nodo:

| Campo | Nodo | Página de derechos del PDF |
|---|---|---|
| Autor | Neil Roberts | Neil Roberts |
| Título | Freedom as Marronage | Freedom as Marronage |
| Año | 2015 | © 2015 by The University of Chicago; "Published 2015" |
| Editorial | (implícita) | The University of Chicago Press |
| ISBN | — | 978-0-226-12746-0 / -20104-7 / -20118-4 |

Coincidencia exacta en autor, título, año y editorial. El ejemplar es la primera edición y contiene portada, dedicatoria, índice, agradecimientos, introducción, cinco capítulos numerados, epílogo, notas, bibliografía e índice analítico — estructura completa, sin señales de edición abreviada o parcial.

Extracción de texto realizada con `pdftotext -layout` sobre las 269 páginas. El texto resultante (10,737 líneas) se leyó de forma secuencial y cotejada contra los cortes de página reales del PDF (encabezados de página del tipo "40 / Chapter one"), no por muestreo de palabras clave.

## 4. Alcance real de la lectura

Lectura corrida, secuencial y completa (100%) del cuerpo argumental íntegro del libro:

- Introducción completa, incluido el "Prospectus" con las seis contribuciones declaradas por el autor.
- Capítulo 1, "The Disavowal of Slave Agency", completo.
- Capítulo 2, "Comparative Freedom and the Flight from Slavery", completo.
- Capítulo 3, "Sovereign Marronage and Its Others", completo.
- Capítulo 4, "Sociogenic Marronage in a Slave Revolution", completo.
- Capítulo 5, "Marronage between Past and Future" (Glissant), completo.
- Epílogo, "Why Marronage Still Matters" (Rastafari), completo.

Esto cubre la totalidad del argumento sostenido del libro (páginas 1–181 aproximadamente).

Las Notas (apartado final, organizado por capítulo) y la Bibliografía **no se leyeron de forma corrida palabra por palabra**: se verificaron mediante búsqueda dirigida exhaustiva (no muestreo) sobre el texto íntegro extraído, con dos propósitos declarados de antemano: (a) corroborar o refutar cada una de las once relaciones existentes del nodo `roberts` contra el texto y el aparato de notas/bibliografía del propio libro, y (b) rastrear términos-señal de las diez corrientes que no aparecieron ya de forma evidente en el cuerpo (indígena/taíno, huracán/ecología/catástrofe, erótica/parentesco/cuerpo, archipiélago/diáspora/ruta, archivo). Estas búsquedas cubrieron el 100% del archivo, no una muestra, pero son búsquedas dirigidas y no lectura narrativa continua de las Notas y la Bibliografía.

En síntesis: 100% del cuerpo argumental leído de corrido; Notas y Bibliografía verificadas por búsqueda exhaustiva dirigida, no leídas como prosa corrida. No se declara "100% de lectura" sin esta precisión.

## 5. Reconstrucción independiente del argumento

**A. Pregunta que organiza el libro.** ¿Qué significa la libertad si se piensa no como un estado fijo (esclavitud/libertad como polos) sino como *fuga* — como cimarronaje? Roberts sostiene que la tradición filosófica occidental (Arendt, Pettit) y buena parte del pensamiento afroamericano y caribeño han "desautorizado" (disavowed) la agencia esclava, y propone reconstruir la libertad desde la experiencia de la fuga misma.

**B. Tesis central.** La libertad debe entenderse como marronage (cimarronaje): un proceso relacional de fuga, no una condición binaria. Roberts construye una tipología de cuatro modos de cimarronaje — *petit marronage* (fuga episódica individual), *grand marronage* (fuga colectiva aislacionista, comunidades cimarronas autónomas), *sovereign marronage* (fuga de masas bajo un legislador soberano, ejemplificada por Toussaint L'Ouverture) y *sociogenic marronage* (fuga no soberana, de masas, articulada mediante el nombramiento, la "arquitectónica vèvè", la reconfiguración del estado de la sociedad y el constitucionalismo) — y argumenta que esta última es la forma más radical y la que mejor explica la Revolución Haitiana desde abajo.

**C. Mecanismo argumentativo.** El libro procede por acumulación dialéctica: (1) muestra el fracaso del republicanismo (Arendt, Pettit) por desautorizar la esclavitud y la agencia esclava; (2) reconstruye en Douglass una "libertad comparativa" que capta la experiencia pero se queda corta (masculinismo, exceso de énfasis en la propiedad, rechazo de la revolución); (3) analiza la paradoja jurídica del Código Negro frente a la Declaración de Derechos del Hombre en Saint-Domingue y tipifica el cimarronaje pre-revolucionario y revolucionario; (4) muestra los límites del cimarronaje soberano de Toussaint (constitucionalismo cosmopolita, agricultura militarizada, colapso en dictadura); (5) propone el cimarronaje sociogénico como superación, apoyado en Fanon (zona del no-ser, sociogénesis) y en evidencia de las masas esclavizadas (nombramiento de Haití, ceremonia de Bois-Caïman, vodú, asambleas proto-constituyentes, demandas de las mujeres esclavizadas); (6) extiende la tesis a la modernidad tardía mediante Glissant (creolización, Relation, Antillanité) y cierra con Rastafari como caso de cimarronaje contemporáneo.

**D. Fuentes primarias trabajadas por Roberts.** Arendt (*On Revolution*, "What is Freedom?", *The Origins of Totalitarianism*), Pettit (*Republicanism*), Douglass (*My Bondage and My Freedom*, discursos), Du Bois (*Black Reconstruction*, *The Souls of Black Folk*), el Código Negro de 1685, la Declaración de los Derechos del Hombre de 1789, la Constitución de Toussaint de 1801, la Declaración de Independencia de Haití de 1804, la Constitución Imperial de 1805, C.L.R. James (*The Black Jacobins*), Fanon (*Black Skin, White Masks*, *The Wretched of the Earth*), Glissant (*Le quatrième siècle*, *Le discours antillais*, *Poetics of Relation*, *La case du commandeur*), Wynter, y fuentes primarias/secundarias del Rastafari (Chevannes, textos de Marley, Tosh, Garvey, el informe de 1960 sobre Rastafari en Kingston).

**E. Interlocutores teóricos explícitos.** Orlando Patterson (*Slavery and Social Death*, muerte social), James C. Scott (*The Art of Not Being Governed*), Angela Davis (*Lectures on Liberation*), Achille Mbembe, Saidiya Hartman, Sylvia Wynter, Michel-Rolph Trouillot.

**F. Alcance geográfico/temporal.** República romana (breve, vía Pettit) → EE. UU. antebellum y Guerra Civil (Douglass, Du Bois) → Saint-Domingue/Haití colonial y revolucionaria (1685–1806) → Martinica del siglo XX (Glissant) → Francia/departamentos de ultramar y Primavera Árabe (2009–2013) → Jamaica del siglo XX–XXI (Rastafari, hasta 2013 aprox.).

**G. Lo que el libro NO hace.** No es una historia económica de la esclavitud ni de la plantación; no ofrece una crítica sistemática y extensa del liberalismo/neoliberalismo (el propio autor lo advierte explícitamente); no analiza en profundidad la ecología, el clima o los desastres naturales del Caribe; no desarrolla una teoría del cuerpo, el parentesco o la erótica; no centra el mundo indígena antillano como objeto analítico (aparece de forma etimológica y alegórica, vía Calibán).

**H. Estructura declarada por el propio autor (Prospectus, Introducción).** Roberts enumera explícitamente seis contribuciones: (1) crítica de la desautorización de la agencia esclava en Arendt y Pettit (cap. 1); (2) exégesis de Douglass y la "libertad comparativa" (cap. 2); (3) tipología del cimarronaje y cimarronaje soberano en Toussaint (cap. 3) y cimarronaje sociogénico (cap. 4); (4) extensión a la modernidad tardía vía Glissant (cap. 5); (5) relación con el liberalismo y el neoliberalismo (transversal, explícitamente acotada); (6) el significado de la "no-libertad" (unfreedom) como tema transversal. El epílogo sobre Rastafari cierra el argumento sin abrir un capítulo numerado nuevo.

**I. Figura central del libro.** El cimarrón (maroon) y el cimarronaje (marronage) como concepto-eje: no una figura entre otras, sino la categoría que da título al libro y que organiza cada capítulo como una variación tipológica sobre el mismo fenómeno.

**J. Advertencia sobre el propio título del nodo.** El campo `ap` del nodo ("La libertad pensada como fuga y no como estado: cimarronaje sociogénico, agencia esclava") es una síntesis razonable de (E) y (H), pero — de nuevo — se trata como resumen curatorial a auditar, no como evidencia: la reconstrucción de arriba se hizo antes de leer ese campo con esta finalidad y coincide con él por evidencia propia, según lo leído.

## 6. Arquitectura capítulo por capítulo

| Capítulo | Título | Función argumentativa | Corrientes que activa con más fuerza |
|---|---|---|---|
| Introducción | — | Plantea la pregunta, sitúa el proyecto "desde el revés de la modernidad" (Dussel, Calibán/Próspero vía Paget Henry), anuncia las seis contribuciones | C3, C7 (tangencial) |
| 1 | The Disavowal of Slave Agency | Crítica de Arendt y Pettit; define desautorización y agencia esclava; recupera a Du Bois | C7 (republicanismo, dominación/no-dominación), C3 |
| 2 | Comparative Freedom and the Flight from Slavery | Exégesis de Douglass; "libertad comparativa"; crítica del masculinismo y del énfasis en la propiedad | C3, C2 (propiedad/esclavitud como institución), C10 (masculinismo, acotado) |
| 3 | Sovereign Marronage and Its Others | Código Negro, Declaración de 1789, tipología petit/grand/sovereign marronage; Toussaint | C3, C7, C2 (Código Negro) |
| 4 | Sociogenic Marronage in a Slave Revolution | Fanon, sociogénesis, nombramiento, vèvè, estado de la sociedad, constitucionalismo haitiano | C3, C9 (vodú/vèvè), C7 (constitucionalismo), C4 (incidental: tierra, jornada, salario) |
| 5 | Marronage between Past and Future | Glissant: creolización, Relation, Antillanité, rizoma; extensión a la modernidad tardía | C3, C8, C5 (contextual: diáspora, mar, archipiélago) |
| Epílogo | Why Marronage Still Matters | Rastafari: livity, dread, reasoning, reparaciones, repatriación | C3, C9 (muy fuerte) |

## 7. Análisis C1–C10

Para cada corriente: definición del guion oficial aplicada, densidad textual, si supera la prueba de retirada, y clasificación provisional.

**C1 — Mundos indígenas.** Presencia: la etimología taína de "Haití" (Ayiti, "tierra montañosa"), la alegoría de Calibán/Próspero (vía Shakespeare y Paget Henry) para describir al esclavo haitiano, y una mención breve a la exterminación de la población indígena de La Española (Las Casas, James). No hay tratamiento de cosmovisiones, saberes o formas de organización indígena como objeto analítico propio; Calibán funciona como figura retórica para introducir la desautorización, no como estudio de un mundo indígena. Prueba de retirada: si se elimina esta capa, el argumento no cambia — la alegoría es ilustrativa, no explicativa. **Clasificación: INCIDENTAL.**

**C2 — Trata, esclavización y plantación.** Presencia sostenida: análisis detallado del Código Negro de 1685 (artículos sobre fuga, castigo, manumisión), la economía de plantación de Saint-Domingue (demografía, número de plantaciones, tipo de cultivo), la teorización de Douglass sobre la esclavitud como reducción de persona a propiedad, y la "agricultura militarizada" de Toussaint. Prueba de retirada: si se elimina el análisis del Código Negro y de la propiedad-esclavitud, se pierde el mecanismo que explica *por qué* surgen los distintos tipos de cimarronaje (la "paradoja jurídica"); sin embargo, este análisis está siempre al servicio de explicar la fuga (C3) o la soberanía (C7), nunca es objeto de teorización autónoma sobre la trata o la plantación como sistema en sí. No figura entre las seis contribuciones que el propio autor declara. **Clasificación: CONTEXTUAL** (con función explicativa fuerte, pero subordinada).

**C3 — Fugas, cimarronajes y emancipaciones.** Es la categoría que da título al libro y que organiza cada capítulo (petit, grand, sovereign, sociogenic marronage). Prueba de retirada: eliminar esta corriente elimina el libro entero — no hay pregunta, tesis, tipología ni arquitectura sin ella. **Clasificación: PRINCIPAL.**

**C4 — Postplantación, trabajo y desposesión.** Presencia acotada: demandas de igualdad salarial de las mujeres esclavizadas, jornada de cinco días, reclamos de tierra en las asambleas proto-constituyentes (cap. 4), y una mención a la Oficina de Libertos (Freedmen's Bureau) en EE. UU. vía Du Bois. Prueba de retirada: esta evidencia es ilustrativa dentro del pilar "estado de la sociedad" del cimarronaje sociogénico; removerla no cambia la tipología ni la tesis, solo empobrece un ejemplo. **Clasificación: INCIDENTAL.**

**C5 — Rutas, diásporas y territorios acuosos.** Presencia real pero difusa: "diáspora" aparece con frecuencia (repatriación rastafari a Etiopía/África, la diáspora en el apéndice de Glissant), el Pasaje Medio y "el mar es historia" (Walcott/Glissant) se mencionan en el capítulo 5, y "archipiélago" aparece una vez (Glissant sobre Europa como "región-isla"). No hay, sin embargo, un análisis donde el trayecto o la circulación organicen el argumento dominante de ningún capítulo: la unidad de análisis siempre es el tipo de fuga (dónde se huye y bajo qué arquitectura política), no la ruta o el circuito en sí. Aplicando el criterio ya ratificado para esta corriente (la proximidad léxica a "archipiélago" o "diáspora" no basta si no organiza el argumento dominante), esta corriente no alcanza el umbral estructurante. **Clasificación: CONTEXTUAL.**

**C6 — Huracanes, ecologías y catástrofes climáticas.** Dos menciones: un listado retórico de clichés sobre Haití ("Hurricanes... earthquakes...") y una referencia de pasada al terremoto de 2010 como marco temporal de una estatua. Ninguna reflexión ecológica, climática o de desastre. **Clasificación: AUSENTE.**

**C7 — Soberanías, fronteras y ocupaciones.** Presencia estructural: todo el capítulo 1 discute la teoría de la no-dominación/no-interferencia (Pettit, Arendt) en términos de soberanía y dominación; todo el capítulo 3 se titula "Sovereign Marronage" y analiza el constitucionalismo de Toussaint, el problema del legislador soberano, y contiene una referencia explícita a Guantánamo como "estado de excepción" (Agamben) a propósito de la solicitud de una base naval en Môle St. Nicolas; el capítulo 4 analiza el constitucionalismo haitiano postrevolucionario (1805) como forma de soberanía no asimilada a Francia. Prueba de retirada: sin esta corriente desaparecen dos de los cinco capítulos del cuerpo del libro y el eje mismo de la crítica al republicanismo. **Clasificación: SECUNDARIA_ESTRUCTURANTE.**

**C8 — Creolizaciones.** El capítulo 5 completo está dedicado a la teoría de la creolización: debate Créolité (Bernabé/Chamoiseau/Confiant) vs. Brathwaite vs. la propuesta de Glissant (Relation, rizoma, retour/détour, Antillanité). Prueba de retirada: sin este capítulo desaparece la cuarta contribución que el propio autor declara (extensión a la modernidad tardía) y el puente teórico entre la Revolución Haitiana y el presente. **Clasificación: SECUNDARIA_ESTRUCTURANTE.**

**C9 — Archivos vivos, espiritualidades y saberes transmitidos.** Presencia estructural doble: (a) la "arquitectónica vèvè" (vèvè architectonics) —el vodú, la ceremonia de Bois-Caïman, el discurso de Boukman— es uno de los cuatro pilares explícitos del cimarronaje sociogénico, el concepto más original del libro (cap. 4); (b) el epílogo completo teoriza el Rastafari como movimiento de saberes transmitidos y espiritualidad viva (livity, reasoning, dread, houses, reparaciones, repatriación), con un aparato de fuentes propio (Chevannes y otras). Prueba de retirada: sin el vodú desaparece el mecanismo explicativo central del capítulo 4; sin el Rastafari desaparece el epílogo completo y el cierre argumental del libro. **Clasificación: SECUNDARIA_ESTRUCTURANTE.**

**C10 — Cuerpos, parentescos y eróticas.** Presencia acotada pero real: una subsección explícita titulada "Masculinism" en el capítulo 2 (crítica del lenguaje masculinista de Douglass, distinción masculinismo/patriarcado/misoginia) y las demandas de igualdad de género de las mujeres esclavizadas en las asambleas proto-constituyentes (cap. 4, con referencia explícita a la interseccionalidad). No hay, en cambio, ningún tratamiento del parentesco (ninguna mención de "kinship" en todo el libro) ni de la erótica o la sexualidad como categorías analíticas (ninguna mención de "erotic" o "queer"). Prueba de retirada: remover el subapartado de masculinismo empobrece la crítica a Douglass pero no cambia la tesis de la libertad comparativa ni la tipología del cimarronaje. **Clasificación: INCIDENTAL** (densidad real mediante el eje de género, pero sin parentesco ni erótica, y sin función arquitectónica propia).

## 8. Restricción de vocabulario aplicada

Todas las clasificaciones anteriores usan exclusivamente: PRINCIPAL, SECUNDARIA_ESTRUCTURANTE, CONTEXTUAL, INCIDENTAL, AUSENTE. Ninguna corriente nueva fue creada. Ninguno de los nombres oficiales C1–C10 fue alterado.

## 9. Prueba de retirada (síntesis)

Superan la prueba de retirada (su eliminación destruye la pregunta, la tesis, el mecanismo o la arquitectura del libro): **C3** (sin ella no hay libro), **C7** (sin ella colapsan los caps. 1 y 3, y la crítica al republicanismo), **C8** (sin ella colapsa el cap. 5 y la cuarta contribución declarada), **C9** (sin ella colapsa el mecanismo del cap. 4 y el epílogo completo).

No superan la prueba (su eliminación empobrece pero no destruye): C1, C2, C4, C5, C6, C10.

## 10. Prueba de dominancia

Entre las cuatro corrientes que superan la prueba de retirada (C3, C7, C8, C9), se aplicó la prueba de dominancia por función argumentativa, no por extensión ni frecuencia:

- C3 frente a C7: la "soberanía" es, en la propia arquitectura del libro, un **adjetivo que modifica** al cimarronaje ("sovereign marronage" es uno de cuatro tipos de marronage); el cimarronaje es el género, la soberanía la especie. C3 domina.
- C3 frente a C8: la creolización se introduce en el capítulo 5 explícitamente como *extensión* de la tesis del cimarronaje a la modernidad tardía, no como marco que subsuma al cimarronaje; el propio Roberts sitúa "marronage" como el concepto que atraviesa toda la obra de Glissant, y no al revés. C3 domina.
- C3 frente a C9: el vodú y el Rastafari se presentan como *evidencia* y *pilar constitutivo* de un tipo específico de cimarronaje (sociogénico) y como caso de cierre, no como el eje que organiza los otros capítulos (republicanismo, Douglass, Toussaint, Glissant). C3 domina.

No se detectó ningún par sin dominancia consistente entre estas cuatro (ver también §11).

## 11. Evaluación de FRONTERA_CONSTITUTIVA

No se identifica una frontera constitutiva en sentido estricto (dos corrientes co-necesarias e irreducibles sin dominancia consistente): en los tres pares analizados en el §10, C3 domina de forma estable y argumentativamente consistente a lo largo de todo el libro, no solo en un capítulo aislado.

## 12. Evaluación de SÍNTESIS_MULTICORRIENTE

No aplica: existe una corriente claramente dominante (C3) sobre las demás que superaron la prueba de retirada, de modo que no se trata de tres o más corrientes co-necesarias sin ninguna dominante.

## 13. Evaluación de VACÍO_TAXONÓMICO_POSIBLE

Se identifica una posible tensión, que se deja documentada para juicio académico posterior, no resuelta aquí: buena parte del aparato teórico más original del libro (la "zona del no-ser" de Fanon, la sociogénesis, la distinción "fact/form" en Douglass, el "trauma" de la desautorización) es una teorización **psicológico-existencial** de la libertad que no se reduce limpiamente a ninguna de las diez corrientes. El componente ritual/espiritual de ese aparato (vodú, vèvè) sí encaja en C9; pero el componente propiamente fenomenológico-existencial (la libertad como estado psíquico de "fact" frente a "form", la "zona del no-ser" como condición metafísica) no tiene una corriente C1–C10 que lo represente sin forzarlo dentro de C3 o C9. No se afirma que esto sea necesariamente un vacío del taxón — podría ser, razonablemente, una dimensión transversal que todo C1–C10 debe poder absorber sin necesidad de una corriente nueva — pero se señala para que la fase decisoria lo pondere explícitamente, tal como exige esta prueba.

## 14. Auditoría de las relaciones existentes del nodo `roberts`

El nodo `roberts` tiene once relaciones registradas en `datos-atlas.json`. Se verificó cada una contra el texto y el aparato de notas/bibliografía del propio libro de Roberts (nunca contra el libro del otro extremo de la relación, que no formaba parte del corpus de esta lectura, salvo cuando fue necesario identificar el título y el año de esa obra para el propio control cronológico).

| Relación | Tipo | Fuente registrada | Verificación en el texto de Roberts | Clasificación evidenciaria |
|---|---|---|---|---|
| `fouchard` ↔ `roberts` | resonancia | "Comparten cimarronaje/fuga. Por corroborar." | Jean Fouchard, *The Haitian Maroons: Liberty or Death* (trad. ingl. de *Les marrons de la liberté*), citado varias veces en las notas del cap. 3 sobre petit marronage y en la bibliografía. Cita directa y sustantiva. | **CONFIRMADA** |
| `roberts` ↔ `quintero` | resonancia | Mismo texto genérico. | Ninguna mención de "Quintero" en todo el libro (cuerpo, notas o bibliografía). La obra de Quintero Rivera (*Cuerpo y cultura*, 2009, sobre música y cuerpo) es, además, temáticamente distante del cimarronaje. | **NO_CORROBORADA** |
| `monahan` ↔ `roberts` | resonancia | "Por corroborar." | Michael Monahan, *The Creolizing Subject* (2011), aparece una sola vez, en una nota del cap. 5 que enumera una docena de obras sobre teoría de la creolización, sin desarrollo propio ni cita textual de Monahan en el cuerpo del argumento. | **CONFIRMADA_CON_INCIDENCIA** (mención bibliográfica de paso, no diálogo sustantivo) |
| `pricefirst` ↔ `roberts` | resonancia | "Comparten cimarronaje/fuga. Por corroborar." | Richard Price, *First-Time* (1983), no aparece en ningún lugar del libro. Roberts sí cita a Richard Price, pero como editor de *Maroon Societies* (1996), una obra distinta a la referida por este nodo. | **NO_CORROBORADA** (posible confusión con la obra editada por el mismo autor) |
| `chevannes` ↔ `roberts` | resonancia | "Comparten cimarronaje/fuga. Por corroborar." | Barry Chevannes, *Rastafari: Roots and Ideology* (1994), es fuente citada y desarrollada varias veces en el epílogo sobre Rastafari (orígenes, "Rastafari and the Coming of Age"). Cita directa y sustantiva. | **CONFIRMADA** |
| `ramadan` ↔ `roberts` | resonancia | "Rastafarismo y negritud espiritual leídos como cimarronaje contemporáneo (Roberts). Por corroborar." | Omar Ramadan-Santiago, *Constructing Spiritual Blackness* (2021), se publicó **seis años después** de *Freedom as Marronage* (2015). Es cronológicamente imposible que Roberts lo cite, y en efecto no aparece ninguna mención. | **ERROR_CRONOLOGICO** |
| `james` ↔ `roberts` | resonancia | "Roberts construye buena parte del libro sobre el relato de James." | C.L.R. James, *The Black Jacobins* (1938), es epígrafe de dos capítulos, se cita y discute extensamente en los caps. 3 y 4 (incluida una sección propia sobre "black Jacobin philosophy"), y aparece repetidamente en notas y bibliografía. Es, junto con Fanon, el interlocutor más citado del libro. | **CONFIRMADA** (con alta densidad) |
| `rainforestwarriors` ↔ `roberts` | resonancia | "El cimarronaje histórico se vuelve litigio de derechos humanos contemporáneo (Roberts 2015; Price 2011)." | Richard Price, *Rainforest Warriors* (2011), es cronológicamente anterior y por tanto citable, pero no aparece en el libro: no hay ninguna mención de los saramaka, Surinam (salvo una mención incidental como nombre de país en una lista) ni de litigio de derechos humanos. | **NO_CORROBORADA** |
| `tackysrevolt` ↔ `roberts` | resonancia | "La rebelión de Tacky es uno de los casos centrales... (Roberts 2015; Brown 2020)." | Vincent Brown, *Tacky's Revolt* (2020), se publicó **cinco años después** de *Freedom as Marronage*. Es cronológicamente imposible que Roberts lo cite; tampoco aparece ninguna mención de "Tacky" en el libro (ni la rebelión ni el nombre). | **ERROR_CRONOLOGICO** |
| `rifkinfictions` ↔ `roberts` | disonancia | "Rifkin sitúa *Freedom as Marronage* entre los relatos de indigenización negra... Cita verificada en el ejemplar de la biblioteca del grupo." | Mark Rifkin, *Fictions of Land and Flesh* (2019), es posterior a Roberts (2015): la relación describe correctamente que es Rifkin quien lee y discute a Roberts, no al revés. La evidencia de esta disonancia reside en el libro de Rifkin, no en el de Roberts, por lo que esta lectura —centrada exclusivamente en el texto de Roberts— no puede confirmarla ni refutarla desde el nodo auditado. | **NO_VERIFICABLE_DESDE_ESTA_LECTURA** (evidencia reside en el otro extremo de la relación; no hay contradicción con nada leído en Roberts) |
| `roberts` ↔ `wynterblackmetamorphosis` | resonancia | "Roberts apoya en Wynter su idea de la libertad como fuga... Cita verificada en el ejemplar (3 menciones)." | Sylvia Wynter, *Black Metamorphosis* (manuscrito inédito, c. 1970), aparece exactamente tres veces: una cita textual en el cuerpo del cap. 5, una nota al pie que la referencia, y la entrada bibliográfica. Coincide con precisión con lo declarado en la propia fuente de la relación. | **CONFIRMADA** |

Nota de auditoría transversal: las relaciones con fuente idéntica y genérica ("Comparten el fenómeno Cimarronaje / fuga. Por corroborar el vínculo directo.") — `fouchard`, `quintero`, `pricefirst`, `chevannes` — tienen resultados de verificación opuestos entre sí (dos confirmadas, dos no corroboradas), lo que indica que esa fórmula genérica fue aplicada de forma automática o plantillada en su momento, sin verificación individual previa. Esto no invalida las relaciones confirmadas, pero sí confirma que el texto genérico no puede tratarse como evidencia por sí mismo.

## 15. Nuevas candidaturas razonadas

No se propone ninguna relación nueva. La evidencia reunida en el §14 ya cubre los vínculos textualmente verificables de este nodo; no se detectó, durante la lectura, ningún vínculo directo y citado con obras del corpus del Atlas que no estuviera ya registrado como relación pendiente de auditar.

## 16. Incidencias

**Académicas:**
- La corriente C9 alcanza en este libro una densidad y una función arquitectónica (vèvè architectonics como pilar constitutivo del cimarronaje sociogénico) notablemente mayores que las que suele tener en obras donde aparece solo como telón de fondo religioso; se señala para que la fase decisoria la pondere con el peso adecuado.
- Se documenta en el §13 una posible tensión taxonómica (dimensión psicológico-existencial de la libertad en Fanon/Douglass) que ninguna corriente C1–C10 captura de forma limpia, sin afirmar que constituya un vacío del taxón.

**Bibliográficas:**
- `pricefirst` parece confundir dos obras distintas de Richard Price: *First-Time* (1983, no citada por Roberts) y *Maroon Societies* (1996, sí citada extensamente por Roberts como editor). Se recomienda revisar si el nodo `pricefirst` debía en realidad apuntar a la obra correcta o si la relación fue mal dirigida.
- `ramadan` y `tackysrevolt` tienen error de cronología: ambas obras del otro extremo de la relación se publicaron después de *Freedom as Marronage* (2021 y 2020, respectivamente, frente a 2015), por lo que la fórmula "Roberts 2015; [autor] [año]" que aparece en su propia fuente ya deja constancia de esa distancia temporal, pero el texto de la fuente sugiere erróneamente una relación de cita o cercanía argumentativa directa por parte de Roberts que el propio libro no puede sostener.

**Territoriales:**
- El campo `l: "jamaica"` del nodo simplifica un libro cuyo objeto territorial dominante es, en realidad, Saint-Domingue/Haití (caps. 3–4, el núcleo argumentativo del libro) y, en segundo lugar, Martinica (cap. 5); Jamaica solo pasa a primer plano en el epílogo sobre Rastafari. No se recomienda ni se ejecuta ningún cambio aquí — se documenta como una simplificación notable para que la fase decisoria la valore.

**Relacionales:**
- Cinco de las once relaciones (`quintero`, `pricefirst`, `ramadan`, `tackysrevolt`, `rainforestwarriors`) no encuentran corroboración textual en el libro de Roberts; dos de ellas (`ramadan`, `tackysrevolt`) tienen además imposibilidad cronológica de cita directa. Una relación (`rifkinfictions`) no es verificable desde este nodo porque la evidencia reside en la obra citante, publicada después.
- Cuatro relaciones (`fouchard`, `james`, `chevannes`, `wynterblackmetamorphosis`) quedan confirmadas con evidencia textual directa y, en el caso de `james`, con muy alta densidad.
- Una relación (`monahan`) queda confirmada solo de forma débil (mención bibliográfica de listado, no diálogo sustantivo).

**Técnicas:**
- Ninguna. No se tocó ningún archivo del corpus técnico durante esta lectura.

## 17. Tabla resumen obligatoria

| Corriente | Clasificación |
|---|---|
| C1 — Mundos indígenas | INCIDENTAL |
| C2 — Trata/esclavización/plantación | CONTEXTUAL |
| C3 — Fugas/cimarronajes/emancipaciones | PRINCIPAL |
| C4 — Postplantación/trabajo/desposesión | INCIDENTAL |
| C5 — Rutas/diásporas/territorios acuosos | CONTEXTUAL |
| C6 — Huracanes/ecologías/catástrofes climáticas | AUSENTE |
| C7 — Soberanías/fronteras/ocupaciones | SECUNDARIA_ESTRUCTURANTE |
| C8 — Creolizaciones | SECUNDARIA_ESTRUCTURANTE |
| C9 — Archivos vivos/espiritualidades/saberes transmitidos | SECUNDARIA_ESTRUCTURANTE |
| C10 — Cuerpos/parentescos/eróticas | INCIDENTAL |

## 18. Arquitectura provisional (propuesta, no vinculante)

De sostenerse en la fase decisoria el análisis anterior, la arquitectura resultante sería:

```
PRINCIPAL: C3
SECUNDARIA_ESTRUCTURANTE: C7, C8, C9
arquitectura_recorrido: null (no se detecta FRONTERA_CONSTITUTIVA ni SINTESIS_MULTICORRIENTE)
```

Se subraya que esta es una propuesta provisional derivada de la lectura, no una decisión. En particular, la coexistencia de tres corrientes secundarias estructurantes (C7, C8, C9) es inusual respecto a la arquitectura más habitual de "una principal + una secundaria" observada en decisiones previas de este Atlas, y merece escrutinio propio en la fase decisoria: cabe la posibilidad razonable de que un auditor considere que alguna de las tres (más probablemente C2, si se revalúa su función explicativa en el §7, o alguna de las tres secundarias aquí propuestas) deba reclasificarse tras un escrutinio adicional que esta lectura, por diseño, no está autorizada a resolver.

## 19. Pregunta decisoria de cierre

¿Sostiene la evidencia reunida en este documento que *Freedom as Marronage* tiene en el cimarronaje (C3) su corriente arquitectónicamente necesaria y dominante, con la soberanía (C7), la creolización (C8) y los saberes espirituales transmitidos (C9) como estructurantes subordinadas pero igualmente necesarias — o exige la evidencia reunida que una fase decisoria posterior reduzca el número de corrientes secundarias estructurantes mediante una prueba de dominancia más fina entre C7, C8 y C9, o revise al alza la clasificación de C2?

## 20. Verificación Git

Comandos ejecutados en modo solo lectura antes y después de esta lectura: `git status --short`. No se ejecutó `git add`, `git commit`, `git push`, `git reset`, `git restore`, `git checkout` para descartar cambios, ni `git stash`. El árbol de trabajo no fue alterado por esta tarea: no se modificó `datos-atlas.js`, `datos-atlas.json`, la cola de lectura, relaciones, etiquetas, metadatos, protocolos, la matriz de fronteras ni ninguna decisión previa. El único archivo nuevo producido por esta tarea es el presente documento.

## 21. Advertencia final de alcance

Este documento es una lectura evidenciaria. No emite arquitectura definitiva, no clasifica de forma vinculante, no resuelve relaciones pendientes y no autoriza ninguna implementación técnica. Toda conclusión aquí expresada queda sujeta a una fase decisoria posterior e independiente.

## 22. Estado final

`LECTURA_PROBATORIA_ROBERTS_COMPLETADA`

**DETENTE.** No se emite decisión académica. No se propone arquitectura definitiva vinculante. No se implementa ningún cambio técnico. No se avanza al Caso 10/10 (`escalante`). El Caso 9 solo continúa mediante una instrucción académica independiente que autorice la fase de decisión.
