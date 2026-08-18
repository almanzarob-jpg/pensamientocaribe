# Lectura controlada — `whiteheadtiger` · Apertura P2 · Etapa 2.3F

Atlas 2.0 · Pensamiento Caribe · Dirección Académica
Rama `feat/atlas-2-etapa-1-integrada` · HEAD verificado al iniciar esta tarea: `cd1f731a20b6b9dcd9cc8f2718178aeb29188682` ("Documenta decisión académica sobre gomezexperiential")

**Naturaleza de este documento.** Evidencia de lectura, **probatoria y no decisoria**, para que la Dirección Académica decida la clasificación de `whiteheadtiger`. No clasifica, no modifica corpus ni catálogos, no crea relaciones bilaterales nuevas, no avanza a otro caso ni a P3.

---

## 1. Identidad bibliográfica verificada

- **Autor:** Neil L. Whitehead (Neil Lancelot Whitehead, 1956–2012).
- **Título completo:** *Lords of the Tiger Spirit: A History of the Caribs in Colonial Venezuela and Guyana, 1498–1820*.
- **Año:** 1988.
- **Editorial:** Foris Publications (Dordrecht-Holland / Providence-U.S.A.), para el Koninklijk Instituut voor Taal-, Land- en Volkenkunde (KITLV), Leiden — Caribbean Series, n.º 10.
- **Tipo de publicación:** monografía académica; originalmente tesis doctoral (D.Phil.) de la Universidad de Oxford, revisada para su publicación (Preface, p. ix).
- **Idioma:** inglés.
- **Páginas:** 254 (texto principal pp. 1–191; apéndices pp. 192–199; notas pp. 200–226; referencias pp. 227–240; índice pp. 241–254, según la paginación impresa del propio libro — la paginación del PDF, por tratarse de un escaneo, no coincide exactamente).
- **Identificadores:** ISBN 90 6765 240 7 (verificado en la página de créditos; corresponde al ISBN-13 9789067652407 del nombre de archivo).
- **Verificado directamente contra el propio archivo:** sí — portada, página de créditos/copyright, tabla de contenidos y Preface, mediante `pdftotext` sobre el PDF (escaneado, con capa OCR de calidad irregular, verificado con cautela frase por frase en los pasajes citados).
- **Territorio(s) cubierto(s):** cuenca del Orinoco y Guayana — específicamente el corredor Trinidad–Golfo de Paria–bajo y medio Orinoco–Guarapiche–Cuenca del Esequibo/Demerara/Berbice (hoy Venezuela oriental y Guyana), con referencias tangenciales a la Guayana Francesa y Surinam.
- **Temporalidad:** 1498–1820 (título), aunque el argumento sustantivo se concentra entre ca. 1580 y ca. 1780; el capítulo final y la conclusión llegan hasta principios del siglo XIX.

**Hallazgo bibliográfico:** el campo heredado del Atlas registra el territorio como `guyana` únicamente (`expediente-evidencia-c7.md`, `expediente-evidencia-c9.md`). La lectura confirma que el territorio real es más amplio: la mitad del libro (Partes I y II, capítulos I–VI) trata predominantemente el Orinoco venezolano, y solo la segunda mitad (capítulo VII, "The Dutch connection") se concentra en el Esequibo/Demerara/Berbice (Guyana). Se registra como hallazgo, sin corregir el dato heredado en esta tarea.

## 2. Archivo exacto utilizado

`Lords of the Tiger Spirit_ A History of the Caribs in -- Neil L Whitehead, (Neil Lancelot), 1956-2012 -- Caribbean series _ Koninklijk Instituut voor -- isbn13 9789067652407 -- a1f81ffbe64a3f1e47cbe4c5e297901a -- Anna's Archive.pdf` (13 917 776 bytes, 254 páginas de escaneo, sin cifrar).

**Ubicación real:** `Pagina/Biliografia /` (carpeta de biblioteca del investigador ya rastreada en tareas anteriores). No fue necesario ampliar la búsqueda a otras bibliotecas.

**Nota técnica sobre esta tarea:** el nombre de archivo original contiene un apóstrofe tipográfico y espacios que el mecanismo de staging de este entorno rechaza. Se hizo una copia del archivo, sin alterar el original, en `Pagina/whiteheadtiger-simple.pdf` (misma carpeta raíz que "Biliografia", fuera del repositorio Git) únicamente para poder leerlo. **Esa copia sigue en el disco de Rob y este entorno no puede borrarla** — se recomienda que Rob la borre manualmente si no la necesita; no forma parte del repositorio ni de ningún commit.

## 3. Secciones efectivamente leídas

- Portada, página de créditos, tabla de contenidos completa, lista de mapas/figuras/tablas.
- **Preface completo** (pp. ix–x).
- **Introducción completa** (pp. 1–6).
- Apertura del capítulo I, "The European encounter" (pp. 9–11).
- Apertura del capítulo IV, "The Carib frontier 1498–1700" (pp. 71–73).
- Apartado 4 del capítulo VI, "Rebels and fugitives" (pp. 141–142), leído específicamente para descartar con evidencia la lectura léxica "fugitivos" → C3.
- Apertura del capítulo VII, "The Dutch connection" (pp. 151–153).
- Apertura del capítulo VIII, "Cannibalism and slavery" (pp. 172–174).
- **Conclusión completa**, capítulo IX (pp. 189–191).

**No leído en esta tarea:** el desarrollo interior completo de los capítulos II, III, V y VI (demografía, estructura social interna, la "gran rebelión carib" de 1729–40, el sistema de misiones en detalle); el desarrollo interior completo de los capítulos VII y VIII más allá de su apertura; los apéndices censales, notas y referencias.

## 4. Nivel de lectura

**`LECTURA_DIRIGIDA_SUSTANCIAL`.** No es `LECTURA_INTEGRAL`: no se leyó capítulo por capítulo en su desarrollo completo. Cubre el mínimo exigido (índice, introducción y conclusión completos) más lectura dirigida de las aperturas de los cinco capítulos con mayor densidad argumental para la frontera C1/C7 (I, IV, VI§4, VII, VIII), suficiente para reconstruir con confianza el problema, la tesis y la arquitectura del libro, pero no para agotar cada episodio narrado.

## 5. Antecedentes de `whiteheadtiger` en Atlas 2.0

Reconstruidos por trazabilidad interna (grep de solo lectura), **sin convertirlos en verdad académica**:

- **Clasificación heredada / etiquetas:** `colonialidad`, `violencias`, `memoria` (`dictamen-academico-c1.md` §5).
- **Fundamento registrado en el corpus (campo `ap`, no verificado hasta ahora):** "Tres siglos de historia caribe en el corredor Orinoco–Trinidad–Guayana, reconstruidos como estrategia política indígena y no como telón de fondo de la conquista" (`dictamen-academico-c1.md` §5).
- **Fenómeno asociado:** `indigeneidad_en_disputa`, compatible declarado con C1 y C7 (`catalogo-fenomenos.json`; `dictamen-academico-c1.md` §5, glosa del fenómeno).
- **Motivo de entrada a P2:** es una de las cuatro anclas del fenómeno `indigeneidad_en_disputa` (junto con `felicianosantos`, `rifkinfictions`, `andersonblackindigenous`), citadas de forma idéntica en `dictamen-academico-c1.md` y `dictamen-academico-c7.md` como el único intento de poner a prueba la frontera C1/C7 — frontera que el guion de C7 declara como una de sus "corrientes más próximas" pero que, hasta esta lectura, **no tenía ningún caso confirmado** (`expediente-evidencia-c7.md` §8; `dictamen-academico-c7.md` §8).
- **Advertencia previa:** "Sin estado editorial formal; usada como ejemplo de que, si se confirma su argumento, correspondería a C1 aunque proceda del corpus heredado — sin resolverlo aquí" (`cola-lectura-pendiente-atlas-2.md`, fila `whiteheadtiger`). Pregunta abierta registrada: "¿Su argumento central confirma C1, o pertenece por completo a C7?"
- **Año heredado:** 1988 (`lotes/tp01-temporalidad.json`) — coincide con el año verificado en el propio libro.
- **Territorio heredado:** `guyana` (`expediente-evidencia-c7.md`, `expediente-evidencia-c9.md`) — matizado en el ítem 1 de este documento.

## 6. Problema central

¿Cómo y por qué un pueblo indígena disperso y sin organización política centralizada — los Caribes del Orinoco y Guayana — sostuvo durante casi tres siglos una influencia política y económica desproporcionada frente a las potencias coloniales rivales (España, Holanda, Francia, Inglaterra), y cómo se explica el contraste entre ese protagonismo histórico y la posición social marginal de sus descendientes modernos?

## 7. Pregunta de investigación

Formulación explícita del autor, retomando el modelo de tres etapas de Kloos (1971): "The evolution of Carib society has [...] seen three stages: (1) villages as part of political alliances, (2) isolated villages, (3) villages as part of a national state [...] It is intended that this study should deepen our understanding of the transition from 'stage (1)' to 'stage (2)'" (Introducción, p. 1).

## 8. Tesis

Los caribes no fueron ni el pueblo caníbal y hostil de la leyenda española ni una curiosidad étnica pasiva, sino actores políticos que capitalizaron la rivalidad entre potencias europeas —sobre todo mediante una alianza comercial y militar con los holandeses— para sostener y ampliar, durante casi tres siglos, una autonomía política descentralizada organizada en alianzas de aldeas independientes. Esa autonomía se perdió progresivamente frente al avance de las misiones españolas y la consolidación de los estados de Venezuela y Guyana, en un proceso explicado tanto por la política de alianzas como por el colapso demográfico causado por enfermedades del Viejo Mundo. De ese proceso emergió, paradójicamente, una identidad étnico-política "caribe" —construida en el contacto colonial, no heredada intacta de un pasado precolombino homogéneo— que persiste hasta el presente. Formulación explícita del propio autor en la Conclusión (p. 190): la organización política "dispersa y autónoma" de los caribes, sin mando centralizado, sostuvo "un grado de cooperación y alianza entre sus comunidades independientes" que explica por qué resistieron casi 300 años, a diferencia del colapso en una generación de los estados centralizados azteca e inca.

## 9. Objeto

Las poblaciones de habla caribe (kalinago/karinya) del corredor Orinoco–Guarapiche–Esequibo entre 1498 y 1820: su demografía, su organización social y política, sus estrategias de guerra y alianza, y su relación cambiante con las potencias coloniales españolas, holandesas, francesas e inglesas.

## 10. Método

Historia colonial de archivo ("ethnohistory") combinada explícitamente con etnografía moderna de los propios pueblos caribe-hablantes de Guayana. El autor declara en el Preface (p. ix) su compromiso metodológico con "firm grounding in modern Carib ethnography, in addition to a thorough knowledge of the various European colonial archives", y con el rigor historiográfico de distinguir fuentes primarias de secundarias y examinar series completas de registros, no documentos aislados.

## 11. Evidencia / fuentes

Archivo General de Indias (Sevilla), Algemeen Rijksarchief (La Haya, archivos holandeses), Public Record Office y British Library (Londres), Bodleian Library, Rhodes House y bibliotecas de Oxford; trabajo de campo etnográfico propio en la Guayana Francesa. Fuentes cruzadas con etnografía de Kloos, Colson, Riviere y Drummond sobre los caribes/karinya modernos.

## 12. Arquitectura argumental

Preface + Introducción (planteamiento y estado de la cuestión) → **Parte I, "Carib Society and Demography 1500–1700"**: cap. I (primer contacto europeo), cap. II (demografía), cap. III (sociedad caribe: subsistencia, comercio, guerra, liderazgo) → **Parte II, "The Carib Polity 1498–1811"**: cap. IV (la frontera caribe y la competencia hispano-holandesa-francesa 1498–1700), cap. V (la conquista de Caribana 1700–1771: avance misionero y la gran rebelión de 1729–40), cap. VI (las misiones españolas y sus efectos demográficos), cap. VII (la alianza holandesa: origen, carácter y ocaso), cap. VIII (canibalismo y esclavitud: la construcción del estereotipo y el comercio de esclavos caribe-holandés) → Conclusión (síntesis comparativa con los casos azteca e inca, y persistencia de la conciencia étnica caribe moderna).

## 13. Temporalidad

1498–1820 según el título; el peso argumental real cae entre ca. 1580 (primeras exploraciones documentadas de Berrio/Ralegh) y ca. 1780 (consolidación del régimen de misiones), con la Conclusión proyectándose hasta el siglo XIX.

## 14. Territorio / escala

Escala regional e inter-imperial: el corredor Trinidad–Golfo de Paria–bajo y medio Orinoco–Guarapiche (Venezuela oriental) y la cuenca del Esequibo–Demerara–Berbice (Guyana), leídos como un solo espacio político disputado por cuatro potencias coloniales, no como territorios nacionales separados.

## 15. Conceptos organizadores

"Carib-ismo" y "Arawak-ismo" como identidades políticas —no solo étnicas— forjadas en el contacto colonial ("alternative political responses... to the European invasions", Conclusión p. 190); la triple tipología de aldea de Kloos (alianza política / aldea aislada / aldea como parte del Estado nacional); la comparación estructural con los estados centralizados azteca e inca como contraste explicativo.

## 16. Causalidad

El libro ofrece dos cadenas causales entrelazadas, y esta lectura no puede establecer con certeza cuál subordina a cuál (ver ítem 24): (a) la organización política descentralizada y las alianzas inter-imperiales de los caribes explican tanto su prolongada autonomía como la particular identidad étnica que terminaron por adoptar; (b) el colapso demográfico por enfermedad y el avance del régimen de misiones explican la pérdida de esa autonomía política y, con ella, la marginación social observable en el presente etnográfico.

## 17. Finalidad

Corregir dos imágenes contrapuestas y ambas parciales: la leyenda española del caribe caníbal y hostil, y la imagen etnográfica moderna del caribe como grupo pequeño y socialmente marginal — sustituyéndolas por una historia de agencia política indígena sostenida que solo se pierde tardíamente, y explicar la genealogía política (no solo cultural) de la identidad "caribe" contemporánea.

## 18. Criterio de valoración

El propio autor señala como decisivo el rigor archivístico (fuentes primarias frente a secundarias, series completas de registros) y la combinación con la etnografía moderna — es decir, valora la reconstrucción empírica de la agencia política indígena por encima de la aplicación de marcos teóricos importados; el criterio narrativo de "éxito" u "objetivo" recurrente en el libro es la capacidad de una comunidad indígena de sostener autonomía política frente a la conquista, medida en términos de alianzas, control del comercio y evasión del control misional.

## 19. Dependencia argumental

Si se retira el problema indígena como mundo histórico y político propio (quiénes eran los caribes, cómo se formó y persistió su identidad), el libro pierde su sujeto: no queda historia que contar. Si se retira la dimensión de alianza inter-imperial, frontera disputada y autonomía política frente a soberanías rivales, el libro pierde su mecanismo explicativo central: no queda razón para explicar por qué los caribes, sin organización centralizada, resistieron casi tres siglos mientras imperios centralizados como el inca y el azteca cayeron en una generación. **Ninguna de las dos dimensiones se reduce a la otra sin destruir una parte estructural de la tesis** — ver la prueba específica en el ítem 24.

---

## 20. Contraste C1–C10

### C1 — Mundos indígenas, invasiones y persistencias

**A. Definición normativa vigente:** "El argumento central trata mundos indígenas, invasión, despojo territorial, soberanía o persistencia histórica" (`marco-academico-consolidado-atlas-2.md` §4).
**B. Evidencia a favor:** el libro es, en su título y su objeto declarado, una historia de un pueblo indígena (los caribes) a través de la invasión europea; el problema de investigación explícito es la persistencia/transformación de su mundo político entre 1498 y el presente (Introducción, p. 1); el propio libro dedica su párrafo final a "una continuidad de conciencia étnica entre los caribes modernos... una tradición de simplemente 'ser caribe'" (Conclusión, p. 191); se discute extensamente la propia identidad "caribe" como categoría histórica en disputa —etnónimo español impuesto o grupo lingüístico/social real— (Introducción, pp. 3–5).
**C. Páginas:** 1, 3–5, 9–11, 189–191.
**D. Evidencia en contra:** ninguna que reduzca la relevancia de C1; si acaso, el libro dedica proporcionalmente más páginas a describir el aparato político-diplomático inter-imperial que a la vida social interna caribe (capítulos II y III son los más cortos).
**E. Función posible:** ORGANIZADORA.
**F. Resultado:** SOBREVIVE.

### C2 — Trata, esclavización y plantación

**A. Definición normativa vigente:** "El régimen esclavista y los mundos producidos dentro y contra él organizan el argumento" (§5).
**B. Evidencia a favor:** el capítulo VIII completo trata canibalismo y esclavitud, incluyendo una sección dedicada a "The Dutch–Carib slave trade" (p. 184): los propios caribes capturaban y vendían esclavos amerindios de otros grupos a los holandeses.
**C. Páginas:** 172–174, 184.
**D. Evidencia en contra:** el régimen descrito no es el de plantación ni el de la trata atlántica de personas africanas que define C2; los caribes aparecen como **agentes comerciantes/captores**, no como el régimen esclavista mismo ni como los esclavizados dentro de él, y ese comercio se presenta como un instrumento más de la alianza político-comercial con los holandeses (capítulo VII), no como argumento autónomo sobre un régimen de trabajo.
**E. Función posible:** CONTEXTUAL.
**F. Resultado:** DESCARTADA.

### C3 — Fugas, cimarronajes y emancipaciones

**A. Definición normativa vigente:** "La sustracción al poder —fuga, cimarronaje, insurgencia, emancipación— organiza el argumento; decide la forma del argumento, no el origen del sujeto" (§6).
**B. Evidencia a favor:** el capítulo VI §4 se titula literalmente "Rebels and fugitives" y describe deserción y rebelión caribe frente al régimen de misiones (pp. 141–142).
**C. Páginas:** 141–142.
**D. Evidencia en contra:** leído directamente (no solo por título), ese apartado describe la huida hacia colonias holandesas más favorables políticamente y la rebelión como **tácticas dentro de la disputa de soberanía y alianza inter-imperial** ya en curso —no fuga de un régimen esclavista hacia la libertad, ni cimarronaje territorial en el sentido que define C3—. Es exactamente el caso que la regla "presencia léxica ≠ clasificación" (ítem 21 de este documento) exige descartar con lectura real.
**E. Función posible:** INCIDENTAL.
**F. Resultado:** DESCARTADA.

### C4 — Postplantación, trabajo y desposesión

**A. Definición normativa vigente:** "Régimen analítico dominante, no fecha de abolición; reorganizaciones del trabajo, la tierra, la raza, la dependencia y la desposesión" (§7).
**B. Evidencia a favor:** ninguna.
**C. Páginas:** —
**D. Evidencia en contra:** desajuste temporal (1498–1820, anterior a cualquier proceso de abolición/postplantación) y temático.
**E. Función posible:** AUSENTE.
**F. Resultado:** DESCARTADA.

### C5 — Rutas, diásporas y territorios acuosos

**A. Definición normativa vigente:** "El trayecto o la circulación organizan el argumento dominante, no la sola mención de un elemento acuoso o de desplazamiento" (§8).
**B. Evidencia a favor:** el Mapa 1 del libro se titula "Principal trade routes of the Caribs"; el comercio fluvial y marítimo (Orinoco, Esequibo) articula buena parte de la narrativa; los caribes son descritos como intermediarios comerciales móviles entre el interior amazónico-guayanés y los enclaves europeos costeros.
**C. Páginas:** mapa 1 (p. 10), 151–153.
**D. Evidencia en contra:** las rutas comerciales funcionan aquí como infraestructura de la alianza política caribe-holandesa (capítulo VII) y del control territorial disputado (capítulo IV) — son evidencia al servicio del argumento de soberanía/frontera, no un argumento propio sobre diáspora, migración o territorio acuoso como categoría analítica autónoma.
**E. Función posible:** CONTEXTUAL.
**F. Resultado:** DESCARTADA.

### C6 — Huracanes, ecologías y materialidades vivas

**A. Definición normativa vigente:** "Huracanes, ecologías o materialidades vivas organizan el argumento dominante, no la sola mención" (§9).
**B. Evidencia a favor:** el colapso demográfico caribe por enfermedades del Viejo Mundo (viruela, sarampión, enfermedades respiratorias, después malaria y fiebre amarilla) es un factor causal central y recurrente (Introducción, p. 2; Conclusión, p. 191).
**C. Páginas:** 2, 191.
**D. Evidencia en contra:** el tratamiento es demográfico-causal dentro de una historia política, no un argumento de ecología política, desastre o materialidad viva en el sentido que define C6 — no hay marco de humanidades ambientales ni tratamiento de la enfermedad como actor material-político autónomo.
**E. Función posible:** INCIDENTAL.
**F. Resultado:** DESCARTADA.

### C7 — Soberanías, fronteras y ocupaciones

**A. Definición normativa vigente:** "Estatus político no soberano, ocupación militar, frontera como dispositivo o formas de autoridad no estatal organizan el argumento; la mera aparición léxica no basta" (§10).
**B. Evidencia a favor:** el capítulo IV se titula literalmente "The Carib frontier" y describe la disputa territorial entre España, Holanda, Francia e Inglaterra por el Orinoco y Guayana, con los caribes como actores políticos no estatales que explotan esa rivalidad (pp. 71–73); el capítulo VII completo, "The Dutch connection", documenta una alianza político-militar formal entre una potencia no estatal indígena y una potencia colonial (pp. 151–153); la Conclusión enmarca explícitamente el proceso como pérdida de "independencia" caribe frente a "los estados emergentes de Venezuela y Guyana" (p. 189) y compara la organización política caribe —descentralizada, sin autoridad soberana única— con los estados centralizados azteca e inca (p. 190).
**C. Páginas:** 71–73, 151–153, 189–190.
**D. Evidencia en contra:** ninguna que reduzca su relevancia; si acaso, la extensión del libro dedicada a demografía y sociedad interna (capítulos II–III) no depende de este eje.
**E. Función posible:** ORGANIZADORA.
**F. Resultado:** SOBREVIVE.

### C8 — Creolizaciones, traducciones y opacidades

**A. Definición normativa vigente:** "Lenguas criollas, creolización como proceso, traducción y sus límites, u opacidad como derecho organizan el argumento" (§11).
**B. Evidencia a favor:** hay un tratamiento extenso de los sistemas de nombres amerindios (autodenominaciones, apodos atribuidos, nombres de origen ecológico, según Colson) y de cómo términos como "carib" cruzan lenguas y administraciones coloniales (Introducción, pp. 3–5).
**C. Páginas:** 3–5.
**D. Evidencia en contra:** el tratamiento se dirige a resolver una pregunta de identidad étnico-política (¿quiénes eran realmente los "caribes"?, materia de C1), no a un argumento sobre creolización lingüística, traducción cultural u opacidad como categoría analítica propia; no hay tratamiento de lenguas criollas ni de traducción como problema epistemológico en el sentido que exige C8.
**E. Función posible:** INCIDENTAL.
**F. Resultado:** DESCARTADA.

### C9 — Archivos vivos, espiritualidades y saberes transmitidos

**A. Definición normativa vigente:** "Formas vivas, comunitarias, corporales, espirituales, performativas o insurgentes de transmisión, conservación, producción y activación de saber" (§12).
**B. Evidencia a favor:** el capítulo VIII trata el canibalismo ritual (itoto) de cautivos de guerra como práctica documentada, con dimensión religiosa/ritual.
**C. Páginas:** 172–174.
**D. Evidencia en contra:** el tratamiento es historiográfico-desmitificador (cómo y por qué los españoles construyeron y explotaron políticamente la acusación de canibalismo), no una reconstrucción de una epistemología ritual o espiritual caribe como forma de conocimiento; no hay tratamiento de archivo vivo, transmisión comunitaria ni producción de saber en el sentido de C9.
**E. Función posible:** INCIDENTAL.
**F. Resultado:** DESCARTADA.

### C10 — Cuerpos, parentescos y eróticas

**A. Definición normativa vigente:** "Cuerpo, parentesco, sexualidad, deseo, erótica, violencia sexual/de género, familia o el cuerpo como espacio de inscripción, disputa, placer, libertad y poder" (§13).
**B. Evidencia a favor:** el epígrafe de Walter Ralegh que abre la Parte I dice explícitamente que los caribes "guerreaban más por mujeres que por oro o dominio... para acrecentar sus linajes" (p. 7 aprox.); el libro documenta cómo cautivos de guerra eran integrados como esposas o *poitos* (yernos) a la red de parentesco caribe, a diferencia del trato europeo de sus esclavizados como mercancía (Introducción, p. 3).
**C. Páginas:** 3, epígrafe Parte I.
**D. Evidencia en contra:** el parentesco por captura e integración matrimonial se presenta como **mecanismo de construcción de la red de alianzas políticas y comerciales caribe** (el mismo argumento del ítem C7), no como un argumento propio sobre cuerpo, sexualidad, deseo o familia en el sentido que exige C10; no hay tratamiento de erótica, violencia sexual/de género ni cuerpo como espacio de disputa autónomo del argumento político.
**E. Función posible:** CONTEXTUAL.
**F. Resultado:** DESCARTADA.

---

## 21. Corrientes supervivientes

C1 y C7, ambas con función ORGANIZADORA identificada — no hay una tercera corriente superviviente ni con función SECUNDARIA que se sostenga: todas las demás fueron descartadas por función CONTEXTUAL, INCIDENTAL o AUSENTE (ítem 20).

## 22. Corrientes descartadas

C2, C3, C4, C5, C6, C8, C9, C10 (ver ítem 20 para el detalle de evidencia a favor y en contra de cada una).

## 23. Corrientes contextuales no activadas

C2 (comercio de esclavos caribe-holandés, subordinado a la alianza política de C7), C5 (rutas comerciales, subordinadas al mismo argumento) y C10 (parentesco por captura, subordinado igualmente a la construcción de alianzas de C7) son las tres descartadas con mayor densidad textual real — las tres, notablemente, resultan subordinadas al mismo eje: la política de alianzas que también sostiene a C7.

## 24. Evaluación específica C1/C7

**A. ¿C1 explica a C7?** Lectura posible: las fronteras y alianzas político-militares aparecen porque los caribes, como mundo indígena históricamente activo (no marginal), tenían la capacidad y la necesidad de intervenir en la disputa imperial; el libro es, en el fondo, una reivindicación de agencia histórica indígena, y el aparato de alianzas/fronteras es el terreno donde esa agencia se demuestra. La Conclusión cierra explícitamente en el registro de C1 (persistencia de la "conciencia étnica" caribe moderna, p. 191), no en el de C7.

**B. ¿C7 explica a C1?** Lectura igualmente sostenible: la identidad "caribe" —qué grupos contaban como tales, qué significaba "ser caribe"— se formó y se consolidó **a través de** la posición estratégica de ciertos grupos en la disputa de soberanías (alianza con los holandeses, oposición a España); el propio libro llama a esto "Carib-ismo... como respuesta política alternativa... a las invasiones europeas" (Conclusión, p. 190). Bajo esta lectura, la etnogénesis caribe (materia de C1) es un efecto de su posicionamiento geopolítico (materia de C7), no al revés.

**C. ¿Son irreductibles?** La evidencia de A y B es simétrica: ninguna lectura logró imponerse sobre la otra con el material efectivamente leído. Ambas corrientes tienen desarrollo argumental sustantivo y propio (capítulos enteros: I–III y VI para el mundo/demografía/persistencia indígena; IV y VII para la frontera y la alianza), ninguna se reduce a mero contexto o ejemplo de la otra, y el propio libro no resuelve esa tensión explícitamente — la mantiene activa hasta su último párrafo.

**D. ¿Hay principal y secundaria?** No se puede establecer con la lectura realizada. Ver hipótesis en el ítem 26.

**E. ¿Hay verdadera `FRONTERA_CONSTITUTIVA`?** La evidencia reunida cumple, hasta donde esta lectura dirigida permite comprobar, las cinco condiciones del protocolo: (1) ambas tienen desarrollo argumental sustantivo (capítulos dedicados); (2) ambas son necesarias (ítem 19, prueba de retirar cada una); (3) ninguna se reduce a contexto — ambas organizan capítulos enteros con tesis propia; (4) ninguna es solo vehículo de la otra — cada una tiene evidencia que no depende de la otra (la demografía y la etnonimia para C1; la disputa inter-imperial y el sistema de postas para C7); (5) retirar cualquiera destruye una parte estructural equivalente de la tesis (ítem 19). **No se propone aquí como salida fácil**: se llegó a esta hipótesis después de intentar, en ambas direcciones, establecer una relación de explicación única (apartados A y B), y de descartar expresamente C3 pese a su superficie léxica ("rebels and fugitives") mediante lectura real. Se registra como: **SÍ COMO HIPÓTESIS** — no se aprueba ni se decide aquí.

## 25. ¿Existe corriente principal?

No se emite dictamen. Se documentan dos hipótesis igualmente sostenidas por la evidencia reunida, sin que esta lectura logre resolver entre ellas (ver ítem 24 y 26).

## 26. ¿Existen secundarias?

No, en el sentido estricto del protocolo (una corriente subordinada a una principal ya establecida): dado que no se logró establecer cuál de C1 o C7 es principal y cuál secundaria (ítem 24.D), no corresponde declarar una "secundaria" sin antes fijar la principal. Lo que sí se documenta son dos **hipótesis alternativas de jerarquía**, ninguna decidida:
- **Hipótesis A:** C1 principal (agencia y persistencia de un mundo indígena) / C7 secundaria (la alianza y la frontera como el terreno donde esa agencia se ejerce). Apoyo: el libro cierra explícitamente en el registro de C1 (conciencia étnica persistente, p. 191); el sujeto nombrado en el título es un pueblo indígena, no una frontera.
- **Hipótesis B:** C7 principal (la política de alianzas y fronteras inter-imperiales como motor causal) / C1 secundaria (la identidad indígena como resultado/efecto de esa política). Apoyo: la propia Conclusión describe el "Carib-ismo" como una respuesta política, no como una esencia cultural previa (p. 190); dos capítulos completos (IV, VII) desarrollan el mecanismo de alianza/frontera como explicación causal del resto.

## 27. Evaluación `FRONTERA_CONSTITUTIVA`

**SÍ COMO HIPÓTESIS.** Justificación completa en el ítem 24.E. No se aprueba: corresponde a la Dirección Académica evaluar y, si procede, aprobarla formalmente.

## 28. Evaluación `SINTESIS_MULTICORRIENTE`

**NO APLICA.** Solo sobrevivieron dos corrientes con función organizadora (C1 y C7), no tres o más estructurantes; la regla exige explícitamente tres o más para evaluarse.

## 29. Incidencias bibliográficas

Ninguna respecto a la identidad del texto (completamente verificada, ítem 1). Sí una de trazabilidad interna del Atlas: el territorio heredado (`guyana` únicamente) resulta incompleto frente al contenido real del libro, que trata en pie de igualdad el Orinoco venezolano y el Esequibo guyanés (ver ítem 1). Se registra como hallazgo, sin corregir el dato heredado.

**Hallazgo técnico adicional:** para poder leer el archivo, se generó una copia con nombre de archivo simplificado en `Pagina/whiteheadtiger-simple.pdf` (fuera del repositorio Git), que este entorno no puede eliminar. Ver ítem 2.

## 30. Hipótesis académicas finales (máximo 3)

1. `whiteheadtiger` organiza su argumento en una tensión genuina, no resuelta por el propio libro, entre la persistencia y transformación de un mundo político indígena (C1) y la disputa de fronteras y alianzas de soberanía entre potencias, con los caribes como actor no estatal (C7) — con evidencia textual sustantiva y propia para ambas, y sin que ninguna de las dos lecturas (C1 explica a C7 / C7 explica a C1) logre imponerse con la evidencia reunida.
2. La candidatura léxica de C3 ("Rebels and fugitives", cap. VI§4) queda desactivada por lectura real: describe táctica política dentro de la disputa de soberanía inter-imperial (C7), no fuga o cimarronaje en el sentido que define C3.
3. Tres corrientes contextuales (C2, C5, C10) comparten un mismo patrón: cada una aporta evidencia real pero subordinada al mismo argumento de alianza político-comercial que sostiene a C7 — comercio de esclavos, rutas comerciales y parentesco por captura son, los tres, instrumentos de esa alianza, no argumentos autónomos.

## 31. Estado final

**`LISTO_PARA_DECISION`**, con una advertencia explícita: la evidencia no apunta a una clasificación única sino a dos configuraciones posibles igualmente sostenidas (C1 principal/C7 secundaria; C7 principal/C1 secundaria) o a una `FRONTERA_CONSTITUTIVA` propuesta como hipótesis. No se trata de `LECTURA_ADICIONAL_REQUERIDA` en el sentido de que falte evidencia: la lectura dirigida realizada (introducción y conclusión completas, más los cinco pasajes más decisivos para C1/C7) es la que sostiene esta misma indeterminación como hallazgo, no como vacío. Si la Dirección Académica quisiera forzar un desempate por la vía de más lectura, el pasaje de mayor rendimiento sería el desarrollo completo del capítulo V ("The conquest of Caribana 1700–1771", con la gran rebelión caribe de 1729–40 y el desafío de Taricura), por ser el episodio narrativo donde agencia política indígena (C1) y disputa de soberanía/frontera (C7) convergen de forma más explícita en un solo evento.

## 32. Pregunta decisoria para Dirección Académica

Con la evidencia reunida —C1 y C7 ambas con función organizadora y desarrollo argumental propio, sin que la lectura logre establecer una relación de explicación única entre ellas, y con C3 desactivada por lectura real pese a su superficie léxica— ¿autoriza la Dirección Académica clasificar `whiteheadtiger` según la Hipótesis A (C1 principal / C7 secundaria), según la Hipótesis B (C7 principal / C1 secundaria), aprobar `FRONTERA_CONSTITUTIVA` para C1/C7, o instruye la lectura adicional del capítulo V antes de decidir?

---

## 33. Verificación del repositorio

Ejecutado desde la copia de trabajo de Rob antes de leer o escribir cualquier archivo:

```
$ rm -f .git/index.lock
$ git branch --show-current
feat/atlas-2-etapa-1-integrada
$ git rev-parse HEAD
cd1f731a20b6b9dcd9cc8f2718178aeb29188682
$ git rev-parse origin/feat/atlas-2-etapa-1-integrada
cd1f731a20b6b9dcd9cc8f2718178aeb29188682
$ git log -1 --oneline
cd1f731 Documenta decisión académica sobre gomezexperiential
$ git status --short
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
$ git diff --stat
(sin salida)
$ git diff --name-only
(sin salida)
```

Confirmado: rama correcta; HEAD local = HEAD remoto = el mismo hash que cierra `gomezexperiential`; sin modificaciones inesperadas; los dos históricos siguen como `??`, intactos. Punto de partida verificado, no presupuesto.

## 34. Auditoría técnica

Después de escribir este documento:

```
$ git status --short
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
?? data/agua-de-por-medio/atlas-2/documentos/lectura-whiteheadtiger-p2-etapa-2-3f.md
$ git diff --stat
(sin salida)
$ git diff --name-only
(sin salida)
```

Ningún archivo rastreado protegido fue modificado. El único archivo nuevo es este expediente. No se ejecutó `git add`, `git commit` ni `git push` en ningún momento de esta tarea.
