# Lectura y contraste académico — `mintzarea`

**ETAPA 2.3F · P2 · Lectura dirigida (sin decisión)**
**Fecha de lectura:** 2026-08-22
**Rama:** `feat/atlas-2-etapa-1-integrada` · **HEAD verificado:** `e1c3323b663217c8cb9e69c3a1c89de02d8deedc`

> Este documento es una lectura y contraste académico. No contiene ni implica una decisión de la Dirección Académica. No modifica el corpus, la matriz de relaciones, ningún dictamen ni ningún caso previamente cerrado.

---

## 1. Identificación bibliográfica

El registro `mintzarea` en `datos-atlas.json` (línea 1301) declara:

```json
{
  "id": "mintzarea", "k": "obra",
  "t": "El Caribe como área sociocultural",
  "a": "Sidney W. Mintz", "y": "1966",
  "f": ["postplantacion", "colonialidad"],
  "l": "puertorico", "tr": "anglófono (EE.UU.)",
  "ap": "La definición fundacional del Caribe como unidad de estudio: no por geografía ni por lengua sino por una historia compartida de exterminio indígena, plantación esclavista y capitalismo agrario ultramarino. El propio texto que este atlas hereda y discute al proponer el fenómeno, y no el área, como unidad."
}
```

Siguiendo la instrucción expresa de no asumir por memoria ni por el apellido "Mintz", la identidad se verificó contra el archivo físico localizado en el repositorio del usuario: `Biliografia /El caribe como area sociocultural_Mintz.pdf` (copiado, por el procedimiento habitual de esta tarea, a `mintzarea-simple.pdf` para poder ser cargado). El PDF (40 páginas, PDF 1.6, sin cifrado) fue extraído con `pdftotext -layout` y leído en su totalidad.

El documento es la traducción al español de **"The Caribbean as a Socio-Cultural Area"**, ensayo de Sidney W. Mintz publicado originalmente en *Journal of World History*, vol. 9, núm. 4 (1966), pp. 912–937, y reeditado en 1971 en la antología de Michael M. Horowitz, *Peoples and Cultures of the Caribbean*. La traducción leída aquí se publicó como **"El Caribe como área sociocultural"** en *Op. Cit.*, núm. 23 (2014–2015), pp. 61–100, ISSN 1526-5323, Universidad de Puerto Rico, Recinto de Río Piedras — de ahí el campo `l: "puertorico"` del corpus, que corresponde a la **sede de publicación de la traducción**, no al alcance territorial del argumento (ver §19).

El PDF confirma título, autoría y año en su portadilla y en el resumen inicial, coincidiendo con el campo `t`/`a`/`y` del corpus. La identidad bibliográfica queda **verificada por evidencia documental directa**, no por inferencia del apellido ni del título abreviado.

## 2. Fuente y alcance de lectura

- Archivo fuente: `Biliografia /El caribe como area sociocultural_Mintz.pdf` (copia de trabajo: `mintzarea-simple.pdf`, fuera del repositorio git, nunca añadida a git).
- Extracción: `pdftotext -layout` → `mintzarea.txt` (1863 líneas).
- **Lectura completa del texto**, de principio a fin: resumen, notas del traductor sobre la publicación original de 1966 y la reedición de 1971, las nueve secciones argumentativas del cuerpo del ensayo, abstract en inglés, nota biográfica del autor (Mintz, 1922–2015) y agradecimientos de la traducción.
- No se leyeron fuentes secundarias sobre Mintz; el análisis se basa exclusivamente en el texto primario.

## 3. Estructura del texto

El ensayo se organiza como una argumentación progresiva, no como capítulos numerados de un libro: (a) planteamiento del problema de si el Caribe constituye o no una "área" susceptible de estudio comparativo; (b) discusión crítica del concepto de "culture area" heredado de la antropología cultural norteamericana y su inadecuación para el Caribe; (c) propuesta de un criterio alternativo, histórico-estructural, para definir el área; (d) enumeración y desarrollo de nueve rasgos definitorios convergentes; (e) discusión de las consecuencias metodológicas (comparatismo, unidad de análisis) de este re-planteamiento; (f) cierre con una reflexión sobre la vigencia y los límites del propio ejercicio de "área".

## 4. Pregunta central

**¿Qué problema organiza el argumento?** — siguiendo la instrucción expresa del documento de tarea de no clasificar por título ni por palabras clave, sino por el problema que el texto resuelve: Mintz no pregunta "¿qué tienen en común culturalmente las sociedades caribeñas?" (pregunta cultural-descriptiva), sino **"¿bajo qué criterio puede el Caribe constituirse como unidad legítima de comparación antropológica, si no comparte lengua, religión, ni una cultura homogénea?"** Es una pregunta de **fundamentación metodológica de la comparación**, no una pregunta etnográfica sobre un lugar.

## 5. Tesis

La tesis central: el Caribe **no** es un área cultural en el sentido clásico (unidad por rasgos culturales compartidos, difusión, parentesco lingüístico), sino un **área histórico-estructural**: una región cuyas sociedades, pese a su heterogeneidad cultural y lingüística, convergen en haber sido producidas por el **mismo proceso histórico** — exterminio de la población indígena, instauración temprana de la plantación esclavista como matriz de la economía colonial, y su inserción en el capitalismo agrario ultramarino europeo. La unidad, en palabras del propio Mintz, es de "sociedad" (`societal`) y no de "cultura" (ver §7). El texto propone explícitamente el término, más torpe pero más exacto, de **"área societal"** frente a "área cultural".

## 6. Explanandum / explanans / mecanismo

- **Explanandum:** la posibilidad (o no) de tratar al Caribe como unidad comparativa coherente pese a su fragmentación lingüística, religiosa y política.
- **Explanans:** una historia estructural compartida — no una cultura compartida.
- **Mecanismo:** la instauración de la plantación esclavista como institución fundacional (siglos XVI–XIX) que produjo, en cada isla o territorio, estructuras sociales bipolares (plantación/campesinado, blanco/negro, propietario/esclavizado) con escasa diferenciación interna, seguida de la persistencia colonial y de sucesivas oleadas de inmigración laboral tras la abolición. El mecanismo es, pues, **generativo-histórico**, no difusionista ni circulatorio.

## 7. Qué significa "area" en el argumento (control obligatorio §7 de la tarea)

Este es el control más delicado del ensayo y se trabaja aquí con el cuidado que la tarea exige. Mintz distingue explícitamente entre:

- **"Cultura"**: un conjunto de rasgos, prácticas y significados compartidos por transmisión y contacto — el criterio clásico del "culture area" en la antropología estadounidense (Kroeber, Wissler).
- **"Sociedad"**: una estructura de relaciones e instituciones producida por procesos históricos comunes, aunque las culturas resultantes sean radicalmente distintas entre sí (criollo francófono en Haití, hindú en Trinidad, garífuna en la costa centroamericana, etc.).

Mintz argumenta que el Caribe falla como "área cultural" (no hay lengua común, no hay religión común, no hay parentesco cultural directo entre, por ejemplo, Martinica y Jamaica), pero **sí** puede sostenerse como "área societal": la convergencia no está en el contenido cultural sino en la **forma estructural** que la historia de la plantación impuso a cada sociedad, con independencia de la cultura que terminó habitando esa forma. Por eso Mintz prefiere, aunque la reconoce como expresión "torpe" ("`awkward`" en el original), "área societal" sobre "área cultural".

Esto es decisivo para el contraste C1–C10: el "área" de Mintz **no es** una entidad geográfica ni una entidad de circulación (no es C5), **no es** una entidad de homogeneidad cultural (no es un C8 ingenuo), sino una **construcción comparativa retrospectiva** basada en convergencia estructural bajo dominación colonial-esclavista (afín a C2/C4). Es, en sentido estricto, un dispositivo metodológico del propio autor para poder comparar — no un "fenómeno" en el sentido que el Atlas mismo emplea (ver §31, hallazgo meta-metodológico).

## 8. C2 — Plantación esclavista y capitalismo agrario colonial (control obligatorio §8)

**Corriente organizadora principal.** El ensayo hace de la plantación esclavista el mecanismo generativo explícito: el rasgo (2) "exterminio rápido de la población nativa" y el rasgo (3) "definición temprana como esfera del capitalismo agrario ultramarino basado en la plantación azucarera-esclavista" son, en las propias palabras de Mintz, la **causa** de la que se derivan los demás rasgos (bipolaridad social, ausencia de diferenciación interna, oleadas migratorias posteriores). El lenguaje del texto es explícitamente de prioridad causal ("esta condición fue consecuencia de...", "de aquí se sigue que..."). C2 explica el origen (siglos XVI–XVIII) de la estructura que el resto del ensayo describe.

**Retirada:** si se sustrae C2, el argumento pierde su mecanismo generativo por completo — no queda ninguna razón estructural para agrupar a las sociedades caribeñas. **RETIRADA_DESTRUCTIVA.**

## 9. C4 — Transformación post-esclavitud / formación campesina e inmigración laboral (control obligatorio §9)

Distinguido rigurosamente de C2, tal como exige la tarea. Mintz dedica una parte sustancial del ensayo a los rasgos (5) "interacción continua entre plantación y agricultura campesina de pequeña escala" y (6) "sucesivas oleadas masivas de inmigración de nuevas poblaciones laborales" (trabajadores contratados de India, China, Java tras la abolición) — es decir, a la **transformación** del sistema de plantación tras el fin de la esclavitud, no a su fundación. Esta es la parte del argumento que conecta el ensayo con la propia trayectoria posterior de Mintz (campesinado puertorriqueño, "reconstituted peasantries").

**Retirada:** si se sustrae C4, el ensayo pierde la mitad de su evidencia empírica contemporánea (siglo XIX–XX) y su conexión con el presente etnográfico del autor, pero el núcleo causal (la plantación esclavista como origen) seguiría enunciable. **RETIRADA_SUSTANCIAL, rozando el límite de lo destructivo** — el argumento sobrevive en esqueleto, pero pierde buena parte de su desarrollo y de su relevancia etnográfica.

## 10. C5 — Circulación, rutas, contacto (control obligatorio §10)

Advertencia explícita de la tarea: "ÁREA ≠ RUTA". Se aplicó con rigor. El "área" de Mintz no se define por circulación de personas, mercancías o ideas entre puntos (lo que activaría C5), sino por la **convergencia estructural paralela**: cada territorio fue producido de forma comparable por el mismo tipo de proceso, no necesariamente por estar conectado o en contacto directo con los demás. De hecho, Mintz señala explícitamente la fragmentación política y la falta de comunicación entre colonias de distintas potencias europeas como parte de lo que vuelve difícil ver al Caribe como unidad. **C5 no se activa como organizador; a lo sumo aparece de forma marginal y contextual** (menciones de mercado mundial, redes comerciales imperiales) pero nunca como mecanismo explicativo del argumento.

**Prueba bilateral C2/C5 (§17):** confirma que la definición regional deriva de estructura histórica común, no de lógica de ruta/circulación. C5 **descartada** como organizadora.

## 11. C7 — (revisado y descartado como organizador; control §11)

No hay en el ensayo un tratamiento sostenido de fronteras jurídico-políticas, ciudadanía o regímenes de soberanía como mecanismo explicativo del argumento. Las menciones a la fragmentación colonial (inglesa, francesa, holandesa, española) son contextuales — sirven para explicar por qué el Caribe *no* aparece a primera vista como unidad, no para organizar una tesis sobre fronteras. **C7 descartada como principal o secundaria; aparece solo como telón de fondo.**

## 12. C8 — Cultura / identidad como unidad (control obligatorio §12)

Control central dado el §7. Precisamente porque Mintz **rechaza** el criterio de "área cultural" clásico como insuficiente para el Caribe, C8 en su forma ingenua (identidad-cultura como criterio unificador) queda **explícitamente refutada por el propio texto**, no simplemente ausente. El ensayo es, en este sentido, un argumento *contra* C8 como fundamento válido para el Caribe, y a favor de C2/C4 (estructura histórica) como sustituto. C8 no organiza el argumento; el argumento la discute para desecharla. **C8 descartada**, con la precisión de que su descarte es constitutivo del argumento, no accidental.

## 13. C1, C3, C6, C9, C10 (control §13)

- **C1 (razas, jerarquías raciales):** presente como consecuencia estructural (la bipolaridad social blanco/negro que menciona el rasgo 4), pero no organiza el argumento — es un efecto de C2, no un mecanismo autónomo en este texto. **Contextual, no organizadora.**
- **C3:** sin evidencia textual sostenida que la active como organizadora en este ensayo.
- **C6 (género):** ausente; el ensayo no trata relaciones de género como eje analítico.
- **C9 (persistencia cultural, memoria, ritual, diáspora):** ausente como organizadora; el ensayo trata explícitamente de desactivar el criterio cultural como fundamento (ver C8), por lo que mal podría sostener C9 como mecanismo propio. Nota: esto contrasta con `cosgrovegarifuna` (C9 principal), lo cual es metodológicamente coherente — son problemas distintos.
- **C10 (efectos contemporáneos / legado):** presente como horizonte final del argumento (rasgo 7, "ausencia prevaleciente de una ideología de identidad nacional"; rasgo 9, individuación económica) pero como **consecuencia derivada**, no como mecanismo organizador. **Secundaria/efecto, no principal.**

## 14. Prueba de retirada (todas las corrientes supervivientes)

| Corriente | Retirada | Resultado |
|---|---|---|
| C2 | Elimina el mecanismo generativo completo | RETIRADA_DESTRUCTIVA |
| C4 | Elimina desarrollo empírico posterior y conexión con el presente etnográfico | RETIRADA_SUSTANCIAL (límite alto) |
| C1, C10 | Argumento pierde matices pero conserva su núcleo | RETIRADA_NO_ESTRUCTURAL |
| C5, C7, C8, C9 | No hay retirada aplicable: no organizan el argumento (C8 activamente refutada) | N/A |

## 15. Prueba de dominancia (C2 vs. C4)

Aplicando el criterio habitual del Atlas (prioridad causal/generativa vs. prioridad expositiva/empírica): C2 es **generativamente anterior** en el propio lenguaje del texto ("de esta condición se derivan..."). C4 aporta, sin embargo, el desarrollo empírico central y la conexión explícita con el programa de investigación del propio Mintz. Ninguna domina por completo a la otra en volumen textual ni en función argumentativa — ambas son necesarias y se relacionan como causa (C2) y desarrollo/consecuencia estructural (C4).

## 16. Relación bilateral C2/C4 (§16)

Test bilateral obligatorio realizado. Resultado: **RELACIÓN_MIXTA**. C2 es prioritaria en el orden causal explícito del texto (la plantación esclavista genera la estructura). C4 es prioritaria en el orden expositivo-empírico y en la conexión con el resto de la obra de Mintz (ver §21, relación `mintz`). No hay subordinación limpia en una sola dirección: **A>B no se sostiene de forma simple**; se trata de una relación causa→consecuencia estructural donde ambos términos son necesarios para la tesis completa.

## 17. Relación bilateral C2/C5 (§17)

Test bilateral obligatorio realizado. Resultado: **C5 no se activa como organizadora frente a C2.** La definición del área depende de estructura histórica compartida (plantación, esclavitud, capitalismo agrario), no de circulación o contacto entre puntos. No hay relación de rivalidad real entre ambas corrientes en este texto: C5 es prácticamente ausente, por lo que la prueba bilateral resuelve en **NO_DETERMINABLE por insuficiencia de C5**, equivalente en la práctica a la no activación de C5.

## 18. FRONTERA_CONSTITUTIVA — hipótesis (si procede, sin aprobar)

**Hipótesis a evaluar, no aprobar:** podría plantearse que C2 y C4 no son corrientes plenamente separables en este texto, sino que juntas constituyen una única frontera analítica (plantación-esclavitud/post-emancipación como un continuo). Sin embargo, el propio texto sí distingue temporalmente y causalmente entre fundación (esclavitud) y transformación (post-emancipación), lo que permite tratarlas como corrientes relacionadas pero diferenciables (relación mixta, no frontera constitutiva). **Se registra como hipótesis débil, no se aprueba.** La decisión sobre si constituyen frontera queda reservada a Dirección Académica.

## 19. SINTESIS_MULTICORRIENTE — hipótesis (si procede, sin aprobar)

Dado que solo dos corrientes (C2, C4) organizan efectivamente el argumento, con C1 y C10 como efectos contextuales y el resto descartadas, **no hay evidencia suficiente para plantear una síntesis multicorriente en sentido fuerte** (que requeriría tres o más corrientes co-organizando en pie de igualdad). Se registra como **hipótesis no aplicable / improcedente por insuficiencia de corrientes concurrentes**, sin cerrar la puerta a que Dirección Académica lo evalúe de otro modo.

## 20. VACÍO_TAXONÓMICO_POSIBLE

Aplicando la cautela explícita de la tarea (no concluir vacío solo porque "área" es un término original del autor): el mecanismo generativo real de este texto (plantación esclavista + transformación post-emancipación) **ya está cubierto por C2 y C4** en la arquitectura existente del Atlas. "Área" no es un tipo de fenómeno adicional no capturado, sino el **dispositivo metodológico propio de Mintz** para nombrar el resultado de C2+C4 como unidad comparativa. **Determinación: NO hay vacío taxonómico** en el sentido de un mecanismo causal no cubierto por C1–C10.

Se señala, como hallazgo distinto y no equivalente a vacío taxonómico, un punto meta-metodológico (ver §31): el propio Atlas, según su campo `ap`, declara heredar y discutir este texto proponiendo "el fenómeno" en vez de "el área" como su propia unidad de análisis — es decir, el Atlas ya tiene una relación reflexiva con este ensayo a nivel de diseño metodológico, no solo a nivel de contenido clasificable.

## 21. Incidencia territorial

- **Territorio de publicación/traducción:** Puerto Rico (`l: "puertorico"` en el corpus corresponde a la revista *Op. Cit.*, Universidad de Puerto Rico, Recinto de Río Piedras, sede de la traducción de 2014–2015).
- **Territorio del argumento:** pan-caribeño/archipelágico. El ensayo trata explícitamente islas de habla inglesa, francesa, holandesa y española, y áreas continentales vinculadas a la plantación (Guyanas); Puerto Rico aparece solo como un caso comparativo más, sin privilegio especial dentro del argumento.
- **INCIDENCIA_TERRITORIAL_PENDIENTE a señalar:** el campo `l: "puertorico"` del corpus podría inducir a lectura errónea de que el argumento privilegia o se centra en Puerto Rico, cuando en realidad es la sede editorial de la traducción, no del argumento. Se recomienda que Dirección Académica evalúe si el campo debe distinguir "sede de publicación" de "alcance territorial argumental" — sin proponer aquí la corrección, solo señalando la incidencia.

## 22. Incidencia temporal

El argumento cubre un arco temporal amplio: desde la conquista/colonización temprana (siglo XVI, exterminio indígena) hasta el presente etnográfico del autor (mediados del siglo XX, inmigración laboral post-emancipación y su legado). No se detecta incidencia temporal problemática: la periodización es consistente con C2 (fundación, XVI–XIX) y C4 (transformación, XIX–XX) tal como se han caracterizado.

## 23. C1 — síntesis de hallazgo

Ver §13: presente como efecto estructural (bipolaridad racial), no organizador. Sin retirada estructural aplicable de forma independiente.

## 24. C2 — síntesis de hallazgo

Ver §8: **principal**, RETIRADA_DESTRUCTIVA, mecanismo generativo del argumento completo.

## 25. C3 — síntesis de hallazgo

Sin evidencia textual sostenida. Descartada.

## 26. C4 — síntesis de hallazgo

Ver §9: **candidata principal secundaria**, RETIRADA_SUSTANCIAL en el límite alto, desarrollo empírico y conexión con el presente etnográfico del autor.

## 27. C5 — síntesis de hallazgo

Ver §10 y §17: descartada como organizadora; "área ≠ ruta" confirmado por lectura directa.

## 28. C6 — síntesis de hallazgo

Ausente. Descartada.

## 29. C7 — síntesis de hallazgo

Ver §11: contextual, no organizadora. Descartada como principal o secundaria.

## 30. C8 — síntesis de hallazgo

Ver §12: **activamente refutada por el propio texto**, no meramente ausente — el ensayo argumenta explícitamente contra el criterio de área cultural. Descartada, con esta precisión especial.

## 31. C9/C10 — síntesis de hallazgo y hallazgo meta-metodológico

- **C9:** ausente/descartada como organizadora (ver §13); contraste notable con `cosgrovegarifuna`, coherente al tratarse de problemas distintos.
- **C10:** efecto/consecuencia derivada (ver §13), no organizadora principal.
- **Hallazgo meta-metodológico (no clasificable en C1–C10):** el campo `ap` del propio corpus para `mintzarea` declara que el Atlas "hereda y discute" este texto proponiendo "el fenómeno" en lugar de "el área" como unidad de análisis. Esto sitúa a `mintzarea` en una posición singular dentro del corpus: no es solo un caso a clasificar, sino un **antecedente metodológico directo del diseño del propio Atlas**. Se señala como hallazgo relevante para Dirección Académica, sin proponer categoría nueva ni vacío taxonómico por esta vía.

## 32. Relaciones heredadas — verificación (las cinco registradas en el corpus)

1. **`mintzarea` → `mintz`** (resonancia): *"El área sociocultural que Mintz define en 1966 es la misma que pone a prueba en su propio trabajo de campo puertorriqueño."* El corpus describe `mintz` como "Caribbean Transformations / Sweetness and Power" (1974–85). El propio ensayo de 1966 contiene una nota de autor con proyección directa: *"Los materiales presentados aquí aparecerán de forma más elaborada en un libro sobre la historia y etnología social de las islas caribeñas, ahora en preparación por el autor."* Esta es una referencia textual explícita y auto-anticipatoria a la obra posterior. **Verdicto: CORROBORADA**, anclada directamente en el texto leído.

2. **`mintzarea` → `casimir`** (disonancia): *"Posible tensión entre la unidad de área definida desde la economía política de la plantación (Mintz) y la historia decolonial endógena de Casimir."* No se encontró cita directa a Casimir en el texto (esperable: Casimir publica después). La tensión descrita es **consistente internamente** con lo leído (Mintz define el área desde fuera/estructura impuesta; una historia decolonial endógena sería un contraste lógico plausible), pero no verificable por cita directa. **Verdicto: PLAUSIBLE.**

3. **`mintzarea` → `williamscapitalismo`** (resonancia): *"Mintz apoya en Williams el argumento de la plantación como matriz económica común."* **Confirmado por cita directa** en nota al pie (nota 19 del texto leído), donde Mintz remite explícitamente a Eric Williams para el argumento de la plantación como matriz del capitalismo colonial. **Verdicto: CORROBORADA.**

4. **`mintzarea` → `mgsmithplural`** (disonancia): *"El área sociocultural de Mintz y la sociedad plural de Smith son dos respuestas incompatibles a la misma pregunta."* **Confirmado por cita/discusión directa** en notas 5 y 26 del texto leído, con la tensión efectivamente presente tal y como la describe el corpus (estructura histórica común vs. coacción de mercado en sociedad plural). **Verdicto: CORROBORADA.**

5. **`mintzarea` → `clarkemymother`** (resonancia): *"Mintz cuenta el estudio de Clarke entre los trabajos que hicieron del Caribe un área comparable."* **Confirmado por cita directa** en la nota 33 (bibliografía de parentesco) del texto leído. **Verdicto: CORROBORADA.**

## 33. Comparaciones metodológicas

No se realizaron comparaciones adicionales a las cinco relaciones heredadas: la tarea de `mintzarea` no mandató comparaciones cruzadas con otros casos del corpus (a diferencia de la tarea de `cosgrovegarifuna`, que exigía dos comparaciones explícitas). Se deja constancia de que este documento no amplía comparaciones no solicitadas, en cumplimiento de la restricción de no exceder el alcance de la tarea.

## 34. Hallazgos metodológicos generales

- El ensayo de Mintz constituye un antecedente metodológico directo y explícitamente reconocido del propio diseño del Atlas (ver §31), lo cual lo distingue de la mayoría de los casos leídos hasta ahora en esta etapa.
- El control "área ≠ ruta" (§10/§17) resultó decisivo: sin este control, una lectura superficial por palabras clave podría haber activado C5 erróneamente por la sola presencia de la palabra "área" y menciones de mercado mundial.
- El control C8 (§12) mostró un caso especial: no basta con "ausencia" de una corriente, sino que el propio texto puede **refutar activamente** una corriente candidata — distinción metodológicamente relevante para el vocabulario de descarte del Atlas.
- La distinción C2/C4 (fundación vs. transformación) resultó más productiva que tratar "plantación esclavista" como bloque único, confirmando la utilidad del control §8/§9 tal como está diseñado.

## 35. Confirmaciones

- Identidad bibliográfica de `mintzarea` verificada por evidencia documental directa (PDF físico), no por memoria ni por apellido/título. **Confirmado.**
- Lectura completa del texto (40 páginas / 1863 líneas de extracción) realizada íntegramente. **Confirmado.**
- Los seis controles obligatorios especiales para este caso (§7 "área", §8 C2, §9 C4, §10 C5, §11 C7, §12 C8) fueron aplicados con evidencia textual directa. **Confirmado.**
- Prueba de retirada aplicada a todas las corrientes supervivientes. **Confirmado.**
- Prueba de dominancia C2/C4 realizada. **Confirmado.**
- Dos pruebas bilaterales obligatorias (C2/C4, C2/C5) realizadas y resueltas. **Confirmado.**
- FRONTERA_CONSTITUTIVA evaluada como hipótesis, no aprobada. **Confirmado.**
- SINTESIS_MULTICORRIENTE evaluada como hipótesis, resuelta como no aplicable por insuficiencia de corrientes concurrentes, no aprobada como decisión. **Confirmado.**
- VACÍO_TAXONÓMICO_POSIBLE determinado como NO, con hallazgo meta-metodológico señalado por separado. **Confirmado.**
- Incidencia territorial (Puerto Rico como sede editorial vs. alcance pan-caribeño del argumento) y temporal reconstruidas. **Confirmado.**
- Las cinco relaciones heredadas verificadas contra el texto completo: cuatro CORROBORADAS (`mintz`, `williamscapitalismo`, `mgsmithplural`, `clarkemymother`), una PLAUSIBLE (`casimir`). **Confirmado.**
- **No se emite decisión final.** La decisión queda reservada a la Dirección Académica.
- **No se avanzó** a `pricemars`, `wynterblackmetamorphosis` ni `atkinsonearliest`.
- **No se tocó** el corpus, la matriz de relaciones, ningún dictamen ni ningún caso previamente cerrado (incluidos los de `cosgrovegarifuna`, ya decididos).
- **No se ejecutó** ningún `git add`, `git commit`, `git push`, `git reset`, `git restore`, `git checkout` ni `git stash`.
- Verificación git antes y después de escribir este documento: rama `feat/atlas-2-etapa-1-integrada`, HEAD `e1c3323b663217c8cb9e69c3a1c89de02d8deedc` (idéntico a `origin/feat/atlas-2-etapa-1-integrada`), sin cambios en archivos rastreados. Se detectó, como en lecturas anteriores, un artefacto transitorio `.git/index.lock` autogenerado por el propio comando `git status` de verificación, no eliminable por permisos del entorno — **reportado, no eliminado**, conforme al protocolo.
- Estado final de este caso: **LISTO_PARA_DECISION.** Las dos corrientes organizadoras (C2 principal, C4 secundaria de alta intensidad) están claramente establecidas con evidencia textual completa, ambas pruebas bilaterales resueltas, y no hay ambigüedad estructural pendiente de más lectura.

---

## Pregunta exacta para Dirección Académica

**¿Debe `mintzarea` decidirse como C2 principal con C4 secundaria (relación mixta causa/desarrollo), reconociendo además su estatus singular de antecedente metodológico explícito del propio Atlas (ver §31), o prefiere Dirección Académica una arquitectura distinta que trate C2/C4 como frontera constitutiva única en lugar de corrientes diferenciadas?**

---

*Fin del documento. Lectura y contraste académico de `mintzarea` — Etapa 2.3F, P2. Sin decisión. `DETENERSE DESPUÉS DE LA LECTURA`, conforme a la instrucción explícita de la tarea.*
