# Lectura y contraste académico — `cosgrovegarifuna` — ETAPA 2.3F · P2

**ATLAS 2.0 · Pensamiento Caribe — Dirección académica**
**Fecha de elaboración:** 22 de agosto de 2026
**Alcance:** lectura dirigida (no exhaustiva) de un único caso, `cosgrovegarifuna`, con contraste normativo contra las diez corrientes C1–C10 vigentes. Este documento **no emite decisión académica final**; esa competencia corresponde exclusivamente a Dirección Académica.

---

## §0. Naturaleza del documento y verificación Git previa

Este es el único archivo que esta tarea autoriza a crear:
`data/agua-de-por-medio/atlas-2/documentos/lectura-cosgrovegarifuna-p2-etapa-2-3f.md`

No se ha tocado ningún otro archivo del repositorio. No se ha ejecutado ningún comando `git add`, `git commit`, `git push`, `git reset`, `git restore`, `git checkout` ni `git stash` en ningún momento de esta sesión.

**Verificación git ANTES de leer** (ejecutada al reanudar la tarea, sesión previa a la compactación):

```
git branch --show-current            → feat/atlas-2-etapa-1-integrada
git rev-parse HEAD                   → 50cba6f09b8571664b6e12d7ab518fe5da514124
git rev-parse origin/feat/atlas-2-etapa-1-integrada → 50cba6f09b8571664b6e12d7ab518fe5da514124
git status --short                   →
  ?? PensamientoCaribeCuraduriaDigital.docx
  ?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
  ?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
git diff --stat                      → (vacío)
git diff --name-only                 → (vacío)
```

Coincide exactamente con el "ESTADO CONFIRMADO DEL REPOSITORIO" que exige el documento de instrucciones. Se procedió con la lectura.

**Verificación git DESPUÉS de leer, inmediatamente antes de cerrar este documento:**

```
git branch --show-current            → feat/atlas-2-etapa-1-integrada
git rev-parse HEAD                   → 50cba6f09b8571664b6e12d7ab518fe5da514124
git rev-parse origin/feat/atlas-2-etapa-1-integrada → 50cba6f09b8571664b6e12d7ab518fe5da514124
git status --short                   →
  ?? PensamientoCaribeCuraduriaDigital.docx
  ?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
  ?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
git diff --stat                      → (vacío)
git diff --name-only                 → (vacío)
```

Idéntico al estado previo: branch, HEAD y HEAD remoto coinciden; los tres no-rastreados preexistentes siguen siendo los únicos; ningún archivo rastreado fue modificado.

**Hallazgo a reportar, no a corregir:** al ejecutar `git status --short` para esta segunda verificación, el propio comando dejó un archivo `.git/index.lock` (0 bytes, creado en el instante de la verificación) que este entorno sandboxed no tiene permiso para eliminar (`Operation not permitted`). Siguiendo el protocolo explícito de la tarea ("si aparece `.git/index.lock`, NUNCA lo borres, solo repórtalo"), **no se intentó eliminarlo**. Se deja constancia de su existencia para que Dirección Académica o quien tenga permisos de escritura en `.git/` lo remueva si lo considera necesario; no proviene de ningún proceso de escritura de este documento (que se realiza por fuera de git, como archivo de disco puro) y no afectó la integridad de la verificación anterior ni posterior.

---

## §1. Identidad bibliográfica de la obra

| Campo | Valor verificado |
|---|---|
| Título | *Surviving the Americas: Garifuna Persistence from Nicaragua to New York City* |
| Autoría | Serena Cosgrove, José Idiáquez, Leonard Joseph Bent, Andrew Gorvetzian (autoría múltiple y desigual por capítulo — ver abajo) |
| Editorial | University of Cincinnati Press, Cincinnati, Ohio |
| Año | 2021 |
| ISBN | 978-1-947602-11-3 (tapa dura) · 978-1-947602-10-6 (EPUB) · 978-1-947602-12-0 (PDF) |
| Materias LCSH | Garifuna (Caribbean people)—Nicaragua—Social conditions · Garifuna (Caribbean people)—New York (State)—New York—Social conditions |

**Autoría por capítulo (verificada en portadillas):** Prefacio — Cosgrove & Idiáquez; Introducción "Being Garifuna" — Leonard Joseph Bent (garífuna, sociólogo, pastor morave y abogado, nacido en Orinoco); Cap. 1 "Persisting: Garifuna Histories" — Cosgrove & Idiáquez; Cap. 2 "Framing: Decolonial Intersectionality" — Cosgrove (individual); Cap. 3 "Rooting: Garifuna Connection to Nature" — los cuatro autores; Cap. 4 "Believing: Garifuna Spirituality" — Idiáquez (individual); Cap. 5 "Routing: Youth Persistence" — Gorvetzian (individual); Cap. 6 "Rooting, Routing, and Believing" — los cuatro autores; Cap. 7 "Unlearning/Relearning: Decolonial Methodologies" — Cosgrove (individual).

**Hallazgo de identidad bibliográfica a declarar de forma transparente (no completado por inferencia):**

1. La obra **no tiene una única "Conclusión" general** en el sentido monográfico clásico. Es una etnografía colaborativa multiautoral en la que cada capítulo cierra con su propia sección interna "Conclusion". No existe un capítulo de cierre del libro entero. Se documenta este hecho en vez de tratar arbitrariamente el cierre de cualquier capítulo como "la" conclusión de la obra.
2. La fuente utilizada es la edición **EPUB** (no PDF), extraída mediante `unzip` + `HTMLParser` de Python a texto plano por capítulo. El EPUB **no conserva numeración de página fija** (no hay paginación embebida en el XHTML de origen). En consecuencia, las citas de este documento se identifican por **capítulo + sección con encabezado propio** (los capítulos están claramente subdivididos por subtítulos temáticos, p. ej. "Ancestral Garifuna Spirituality", "Shipping Out and Hearing the Ancestors' Call: Eric's Story"), no por número de página. Esto difiere del patrón de citación por página usado en los casos-precedente (todos ellos PDF vía `pdftotext -layout`). Se declara esta diferencia de método de citación explícitamente en vez de inventar numeración de página inexistente.
3. Coautoría desigual: los capítulos 2 y 7 son de autoría individual de Cosgrove (antropóloga blanca, EE. UU.); los capítulos 4 y 5 son de autoría individual de Idiáquez (jesuita mestizo nicaragüense) y Gorvetzian (investigador blanco, EE. UU.) respectivamente; la Introducción es de autoría individual de Bent (garífuna). El Cap. 7 declara explícitamente esta heterogeneidad posicional del equipo investigador como parte de su metodología decolonial reflexiva.

**Territorio, temporalidad y objeto según metadatos del corpus** (`datos-atlas.json`, entrada `obra` `cosgrovegarifuna`, consultada sin modificar):

```json
{
  "id": "cosgrovegarifuna", "k": "obra",
  "t": "Surviving the Americas: Garifuna Persistence from Nicaragua to New York City",
  "a": "Cosgrove, Idiáquez, Bent & Gorvetzian", "y": "2021",
  "f": ["memoria", "soberanias", "capitalismo_racial"],
  "l": "bluefields", "tr": "anglófono (EE. UU./Nicaragua)",
  "ap": "La permanencia garífuna en Bluefields y Pearl Lagoon sostenida a la vez que la migración a Nueva York la dispersa. Etnografía colaborativa con la Universidad Centroamericana de Managua: la orilla nicaragüense del Gran Caribe, que casi nunca aparece en los mapas del archipiélago."
}
```

Cuatro relaciones inherentes, todas `tipo: "resonancia"`, todas con `cosgrovegarifuna` como lado `a` (evaluadas en §18).

---

## §2. Lectura mínima realizada

Se cumplió y **excedió** el mínimo exigido por el documento de instrucciones (§5 "LECTURA MÍNIMA OBLIGATORIA"). Se leyó **íntegramente**, capítulo por capítulo, sin fragmentación:

| Sección | Requisito que satisface | Estado |
|---|---|---|
| Portada/Copyright | identidad bibliográfica | íntegro |
| Índice (Table of Contents) | estructura de la obra | íntegro |
| Garifuna Timeline (front matter) | reconstrucción temporal | íntegro |
| Prefacio ("Welcoming: Garifuna Hospitality") | contexto | íntegro |
| **Introducción** ("Being Garifuna", Bent) | (A) introducción completa | **íntegro** |
| **Cap. 1** "Persisting: Garifuna Histories" | (D) núcleo histórico | **íntegro** |
| **Cap. 2** "Framing: Decolonial Intersectionality" | (F) pasajes donde se definen los conceptos centrales | **íntegro** |
| Cap. 3 "Rooting: Garifuna Connection to Nature" | control C1/C4/C6/C7 (territorio) | íntegro |
| Cap. 4 "Believing: Garifuna Spirituality" | control obligatorio C9 | íntegro |
| Cap. 5 "Routing: Youth Persistence" | control obligatorio C5 | íntegro |
| **Cap. 6** "Rooting, Routing, and Believing" | (E) capítulo que conecta identidad/territorio/movilidad/Estado/racialización/parentesco/cultura/soberanía/memoria | **íntegro** |
| Cap. 7 "Unlearning/Relearning: Decolonial Methodologies" | metodología, reflexividad, escala | íntegro |

No leído (fuera del mínimo exigido, y no necesario para los controles aplicados): Notas al pie completas como bloque aparte, Bibliografía completa, Agradecimientos, Índice analítico, "About the Authors". Se señala esta limitación de forma transparente: en particular, no se descarta que una revisión de Notas/Bibliografía pudiera aportar evidencia adicional sobre las relaciones `gonzalezsojourners` y `andersonblackindigenous` (§18), que aquí quedan en `POR_CORROBORAR` por ausencia de cita directa detectada en el cuerpo del texto leído.

**Verificación léxica de control** (barrido `grep -oi` sobre los ocho capítulos completos, usado como corroboración adicional, nunca como base única de clasificación):

| término | conteo | término | conteo |
|---|---|---|---|
| ancestor | 232 | migrat | 109 |
| indigenous | 228 | translation | 24 |
| ritual | 184 | gender | 35 |
| spiritual | 143 | kinship | 12 |
| persistence | 113 | matrifocal | 6 |
| diaspora | 73 | transmigration | 6 |
| route | 38 | plantation | 6 |
| syncretis(m) | 11 | enslav(ement) | 8 |
| body/bodies | 15 | border | 13 |
| sovereignty | 3 | settler colonial | 3 |
| occupation | 4 | hurricane | 1 |
| creoliz(ation) | 1 | ecolog(y/ical) | 2 |
| erotic | 0 | opacity | 0 |
| marronage | 0 | cimarron | 0 |
| invasion | 2 | | |

---

## §3. Reconstrucción del problema (no "de qué trata el libro")

- **Explanandum:** ¿cómo persiste la identidad étnica afro-indígena garífuna —y las prácticas comunitarias, espirituales y territoriales que la sostienen— a través de procesos simultáneos de despojo territorial (Nicaragua y Honduras), abandono/represión estatal, pluralización religiosa competitiva, e integración forzada al mercado neoliberal que produce una dispersión diaspórica multisituada (Pearl Lagoon → Bluefields/Managua/Costa Rica → Honduras → Bronx/Brooklyn)?
- **Explanans propuesto por los autores:** un marco que ellos mismos bautizan **"decolonial intersectionality"** (Cap. 2, síntesis explícita de Crenshaw/Collins + Mignolo/Walsh) combinado con tres "estrategias" teorizadas vía Clifford —**articulación, performance y traducción**— mediante las cuales los garífuna rehacen activamente (no simplemente pierden) su cultura; y el concepto de **survivance** (Vizenor) y **persistence** como categorías rectoras explícitas del libro entero (aparecen en el propio título).
- **Mecanismo concreto documentado:** transmisión intergeneracional oral (díadas abuelo-nieto, p. ej. Mateo y su nieto, Cap. 3/5); práctica ritual (walagallo/dügü, Cap. 4); práctica performativa (tambor, danza, comida, Cap. 2/5); acomodo sincrético con el catolicismo/protestantismo (Cap. 4); circulación diaspórica en bucle ("looping", "coming and going", Cap. 1/5/6) que permite mantenerse "garífuna" sin retorno permanente.
- **Objeto histórico:** el pueblo garífuna como grupo etnogenético específico (formado en San Vicente, Antillas Menores, s. XVII–XVIII, de la unión entre africanos náufragos/cimarrones y caribes/arawak insulares), su exilio a Roatán (1797), su dispersión a Honduras/Belice/Guatemala/Nicaragua, y su diaspora reciente a EE. UU. — no el Estado nicaragüense/hondureño en sí, no la negritud/indigeneidad centroamericana en general.
- **Escala:** explícitamente multisituada/translocal — etnografía de aldea (Orinoco y las cinco comunidades garífuna de Pearl Lagoon) + economía política nacional (Nicaragua y Honduras) + campo social transnacional (Bronx/Brooklyn, Nueva York).
- **Temporalidad:** marco histórico de longue durée (etnogénesis s. XVII–exilio 1797–fundación de Orinoco 1912–Revolución Sandinista 1979-1990–presente) que ancla un **trabajo de campo etnográfico primario de 2015 a 2019** (nueve meses en total, según el Cap. 7: "2015, 2016, 2017, 2018, and 2019, for a total of nine months"), más tres visitas a Nueva York (2016, 2017, 2018) y dos semanas en Honduras (marzo 2018), más la memoria autobiográfica de Idiáquez, que se remonta a 1992.
- **Finalidad declarada:** explícitamente aplicada/activista, no solo descriptiva — el Cap. 7 declara una "metodología decolonial" comprometida con la persistencia comunitaria garífuna, los autores destinan las regalías del libro a la educación de jóvenes garífuna de Pearl Lagoon, y afirman compartir el libro con los propios participantes de la investigación.

**Pregunta académica central reconstruida:** ¿Cómo persiste la identidad étnica afro-indígena garífuna —y las prácticas espirituales, territoriales y de parentesco que la sostienen— a través de procesos simultáneos de despojo territorial, presión estatal, competencia religiosa y dispersión diaspórica multisituada entre Nicaragua, Honduras y Nueva York?

---

## §4. Contraste obligatorio contra las diez corrientes C1–C10

Definiciones normativas citadas de `dictamen-academico-c1.md` … `c10.md` (fuente ratificante vigente, posterior y parcialmente sustitutiva de `marco-academico-consolidado-atlas-2.md`, consistente con el criterio ya usado en `lectura-schwartz-seaofstorms-p2-etapa-2-3f.md` de remitirse a la fuente más reciente disponible).

### C1 — `invasiones_mundos_indigenas` ("Mundos indígenas, invasiones y persistencias")

**A favor:** el Cap. 1 declara explícitamente a los garífuna como "an Afro-Indigenous people—both an Indigenous and an Afro-descendant people"; construye su aparato teórico sobre *survivance* (Vizenor), *settler colonialism* (definición de Lisa Slater citada literalmente) y la comparación con los miskitu (pueblo indígena no ambiguo de la costa); el Cap. 3 está íntegramente dedicado al despojo territorial de tierras comunales por colonos/Pañas, la Ley 445 de titulación comunal y el saneamiento pendiente.

**En contra / matización:** el propio Cap. 2 declara explícitamente que el marco teórico organizador del libro **no es** "mundos indígenas e invasión" sino **"decolonial intersectionality"** — un marco que trata la indigeneidad como uno más entre varios ejes que se combinan (raza, género, lugar, clase), no como el eje único organizador. El contenido de "invasión de mundos indígenas" ocupa de forma central un solo capítulo (Cap. 3) de siete.

**Función:** ORGANIZADORA-PARCIAL — densa y estructuralmente relevante (Cap. 1 teórico + Cap. 3 íntegro), pero subordinada al marco explícito de "persistencia"/intersectionalidad decolonial declarado por los propios autores como el eje del libro entero.

**Veredicto:** secundaria posible.

### C2 — `trata_esclavizacion_plantacion`

**A favor:** el Cap. 1 narra el origen etnogenético garífuna vinculándolo a la trata atlántica (barcos de esclavos naufragados en 1635/1675/1742), cifra en 15-25 millones los africanos traídos a América, y el Cap. 1/Introducción mencionan el "enclave" bananero estadounidense de la costa nicaragüense (concesiones libres de impuestos, trabajo mal pagado).

**En contra:** el propio relato de etnogénesis garífuna es, explícitamente, uno de **fuga/naufragio que evitó la esclavización en plantación** ("Survivors freed themselves from the wreckage of the ships and swam to shore"), no de trabajo esclavizado sostenido en plantación. La mención de la trata ocupa un párrafo de contexto de origen, sin análisis sostenido de régimen de trabajo esclavizado ni de plantación como institución. El enclave bananero se menciona de pasada, sin desarrollo analítico propio.

**Función:** CONTEXTUAL — dato de origen histórico, no organiza ningún capítulo ni argumento sostenido.

**Veredicto:** descartada.

### C3 — `fugas_cimarronajes_emancipaciones`

**A favor:** el Cap. 1 cita literalmente la "integration of African maroons from neighboring islands" en la etnogénesis garífuna, y describe la resistencia armada garífuna contra los británicos en San Vicente (1795-1797) como "an ill-fated armed insurrection".

**En contra:** se trata de un dato demográfico/etnogenético puntual (menos de una página), no de un análisis del cimarronaje como formación social ni de procesos jurídicos de emancipación (los garífuna nunca fueron, según el propio relato del libro, una población esclavizada corporativamente en Centroamérica; su historia es de destierro/exilio por los británicos, no de manumisión).

**Función:** contextual/incidental — detalle de origen, no problema analítico propio.

**Veredicto:** descartada.

### C4 — `plantacion_secuela` ("Postplantación, trabajo y desposesión")

**A favor:** eje muy sustancial — el Cap. 3 entero trata desposesión de tierra comunal, el concepto explícito de *"displacement-in-place"* (Mollett), la economía extractiva de posguerra (madera, ganadería, pesca comercial que agota el recurso), y el Cap. 5 trata la precarización laboral juvenil (cruceros, call centers, economía de la droga) y el "enclave" histórico bananero/minero de EE. UU. (Cap. 1/Introducción de Bent).

**En contra:** al igual que con C1, este material funciona como uno de los "mecanismos" o "fuerzas" contra las cuales la persistencia garífuna se afirma (marco explícito del Cap. 1 "A Theory of Persistence" y Cap. 2), no como el problema organizador autónomo del libro entero.

**Función:** ORGANIZADORA-PARCIAL — organiza íntegramente el Cap. 3 y buena parte del Cap. 5, pero subordinada al marco de persistencia declarado.

**Veredicto:** secundaria posible.

### C5 — `rutas_diasporas_territorios_acuosos`

**A favor — el más denso del corpus tras C9:** el Cap. 1 teoriza explícitamente "roots and routes" como marco dialéctico propio del libro (sección "Cultural 'Roots' and Diasporic 'Routes'"), citando *transmigración* (Glick-Schiller) y diáspora (Clifford) como conceptos analíticos centrales; el **Cap. 5 entero** ("Routing: Youth Persistence") está dedicado a la migración juvenil y su circulación de ida y vuelta; el Cap. 4 cierra con una sección dedicada, "Garifuna Spirituality in Diaspora"; el Cap. 6 se titula, en su propio nombre, "Rooting, **Routing**, and Believing" y trata directamente la diáspora en Nueva York. El propio **subtítulo del libro** —"Garifuna Persistence **from Nicaragua to New York City**"— codifica la trayectoria diaspórica como estructura macro de la obra entera.

**Control especial obligatorio (§6 de este documento):** ¿la movilidad organiza realmente el argumento dominante, o es "historia migratoria general"? A diferencia del precedente `andersonblackindigenous` (donde la diáspora fue hallada CONTEXTUAL por carecer de capítulo autónomo), aquí **sí existe un capítulo autónomo dedicado** (Cap. 5) más un segundo capítulo de síntesis que la retoma explícitamente (Cap. 6), más el propio subtítulo del libro. Esto es una diferencia estructural real, no un simple matiz de énfasis (desarrollado en §20).

**Función:** ORGANIZADORA — candidata seria a principal.

**Veredicto:** superviviente fuerte, candidata a principal (ver dominancia, §12).

### C6 — `huracanes_ecologias_materialidades_vivas`

**A favor:** el Cap. 3 ("Rooting: Garifuna Connection to Nature") trata extensamente tierra/mar/ríos como presencias vivas y sagradas; se menciona una vez, de pasada, la "vulnerability to hurricanes and other climate-related phenomena such as drought, tropical storms, and cold fronts".

**En contra:** ningún huracán ni evento ecológico concreto es analizado; no hay marco de humanidades ambientales desarrollado. La "naturaleza viva" aparece siempre subordinada o bien a la espiritualidad ancestral (C9: la tierra es sagrada porque ahí reposan los ancestros) o bien al despojo territorial (C1/C4/C7), nunca como problema ecológico-material autónomo.

**Función:** contextual/incidental, subsumida en C9 y C1/C4/C7.

**Veredicto:** descartada.

### C7 — `soberanias_fronteras_ocupaciones`

**A favor:** eje muy sustancial — el Cap. 3 trata en extenso la relación garífuna-Estado nicaragüense (represión sandinista, Ley 445, Ley de Autonomía 28 nunca cumplida plenamente, saneamiento pendiente) y garífuna-Estado hondureño (privatización de playas, turismo de megaproyecto); el epígrafe del Cap. 1 cita explícitamente "Aboriginal Sovereignties" (Irene Watson); el Cap. 5 trata la crisis política de abril de 2018 y el clientelismo sandinista.

**En contra (control especial, §7):** al igual que C1/C4, el Estado funciona en el texto como una de varias fuerzas estructurales contra las que se ejerce persistencia (junto con el mercado, la religión, la familia/género) — no como el eje único organizador del libro entero, a diferencia del caso `andersonblackindigenous`, donde la negociación garífuna-Estado hondureño sí fue hallada organizadora central.

**Función:** ORGANIZADORA-PARCIAL — organiza sustancialmente el Cap. 3 y buena parte del Cap. 5, entrelazada con C1/C4.

**Veredicto:** secundaria posible.

### C8 — `creolizaciones_traducciones_opacidades`

**A favor:** "traducción" ("translation") es, explícitamente, una de las tres "estrategias" nombradas y teorizadas formalmente por el libro (Cap. 2, sección propia "Articulation/Performance/Translation", derivada de Clifford: *"Translation is not transmission"*, *"carried across, transformed and reinvented in practice"*) — no es una señal léxica incidental, es una categoría analítica oficial del libro.

**En contra — hallazgo adverso relevante:** el término "opacity"/opacidad (categoría glissantiana nuclear del guion de C8, según su dictamen) **no aparece ni una sola vez** en las 8 secciones completas leídas. Y, más importante metodológicamente: la "traducción" que teoriza el libro proviene explícitamente de la genealogía de Clifford/Hall (estudios culturales, teoría de la articulación), **no** de la genealogía Glissant/Bhabha de creolización-como-proceso-relacional-opaco que —hasta donde permite verificar la lectura aquí realizada— parece ser la que exige el guion normativo de C8. "Creolización" como término aparece una única vez en el Cap. 1, y de forma crítica/distanciada ("mestizaje, hybridity, and creolization 'are rather unsatisfactory ways of naming the processes'…").

**Función:** **ambigua, no resuelta por esta lectura** — hay una categoría analítica formal ("traducción") que podría prestarse a una lectura C8, pero la ausencia total de "opacidad" y el linaje teórico divergente (Clifford, no Glissant) hacen prudente no asumir automáticamente la candidatura. Se señala expresamente como pregunta abierta que requeriría cotejo fino contra el guion exacto de `dictamen-academico-c8.md`, no resuelta por esta lectura para evitar decidir "por señal léxica" en un sentido inverso (descartar por ausencia de una sola palabra sin cotejo normativo pleno).

**Veredicto:** no determinable con la evidencia reunida — se recomienda revisión definitoria adicional por Dirección Académica antes de descartar o candidatear.

### C9 — `memorias_espiritualidades_archivos_vivos`

**A favor — el eje más denso de todo el corpus leído:** el **Cap. 4 entero** ("Believing: Garifuna Spirituality") está dedicado por completo al culto ancestral, el walagallo/dügü, el sincretismo con el catolicismo/protestantismo, y la espiritualidad en la diáspora; la Introducción autobiográfica de Bent es, en gran medida, una memoria espiritual; el Cap. 6 incluye "Believing" en su propio título; densidad léxica muy superior a cualquier otro eje (ancestor=232, ritual=184, spiritual=143).

**Control especial obligatorio (§9, cruzado explícitamente contra el precedente `womenancestors`):** en `womenancestors` (Kerns), el ritual/culto ancestral fue hallado **subordinado** al parentesco (C10 principal) — la propia autora, según ese dictamen, subordina explícitamente el material ritual a "clarificar la naturaleza de los vínculos entre parientes femeninas". Aquí la relación es la **inversa**: el propio texto presenta reiteradamente la tierra, la resistencia política e incluso la diáspora como *expresiones* de la espiritualidad ancestral, y no al contrario — el epígrafe mismo del Cap. 4 lo declara: *"the struggle for nature, land, and sea—we can't separate it from our spirituality. It's a spirituality of combat"* (Sister Soyapa). El parentesco (C10) aquí es comparativamente débil (§ C10 abajo), de modo que no hay, a diferencia de `womenancestors`, un eje de parentesco más fundamental al que la espiritualidad esté sirviendo.

**Función:** ORGANIZADORA — la más fuerte candidata a principal de las diez corrientes.

**Veredicto:** superviviente fuerte, candidata a principal (ver dominancia, §12).

### C10 — `cuerpos_parentescos_eroticas`

**A favor:** el Cap. 3 tiene una sección dedicada ("Gendered Effects of Land and Livelihood Pressures") que cita extensamente a Kerns sobre matrifocalidad y autonomía femenina garífuna; las parteras y sanadoras aparecen como figuras rituales centradas en el parentesco en el Cap. 4; el Cap. 6 toca parentesco tangencialmente.

**En contra:** densidad léxica comparativamente baja (kinship=12, matrifocal=6, erotic=0, body/bodies=15 —casi todas incidentales, no analíticas—); no existe ningún capítulo dedicado a la estructura de parentesco como problema organizador propio; el propio libro **cita a Kerns como autoridad externa establecida** sobre matrifocalidad en vez de desarrollar su propio argumento de parentesco — es decir, el libro usa el aparato teórico de parentesco de `womenancestors`, no lo genera.

**Función:** contextual/secundaria débil, subsumida en C4 (efectos de género del despojo) y C9 (género de los especialistas rituales).

**Veredicto:** descartada / secundaria débil marginal.

---

## §5–§10. Controles especiales adversariales obligatorios

### §5/6. Control C1 — ¿indigeneidad como problema organizador, o Garífuna como mera población?

Aplicado en detalle en §4-C1. Resultado: el libro **no** organiza su argumento en torno a "mundos indígenas e invasión" como categoría rectora única; su propio marco declarado (Cap. 2) es "decolonial intersectionality", que trata la indigeneidad como uno de varios ejes coextensivos (junto con lo afrodescendiente, el género, el lugar, la clase). C1 no se descarta, pero tampoco se otorga automáticamente por la etnonimia "Garífuna" ni por el uso reiterado de la palabra "Indigenous" (228 ocurrencias, en su mayoría como adjetivo descriptivo de identidad doble, no como marco analítico de invasión de un mundo indígena autónomo).

### §6/9. Control C5 — ¿movilidad/diáspora/ruta organiza el argumento dominante, o es dato biográfico general?

Aplicado en detalle en §4-C5. A diferencia de `andersonblackindigenous` (diáspora hallada CONTEXTUAL por falta de capítulo autónomo), aquí **sí existe capítulo autónomo** (Cap. 5) y un segundo capítulo de síntesis que retoma explícitamente el eje ("Routing" en el título del Cap. 6), además de que el propio subtítulo del libro codifica la trayectoria Nicaragua→Nueva York como su estructura macro. No se trata de "historia migratoria general" mencionada de pasada: es objeto de teorización propia (transmigración, Glick-Schiller; "roots and routes", Clifford) con estudios de caso nombrados y sostenidos (Eric, Esther). Supera el control.

### §7. Control C7 — ¿relación Garífuna-Estado como argumento organizador?

Aplicado en §4-C7. Es sustancial (Cap. 3 y parte del Cap. 5) pero funciona como una de varias fuerzas estructurales contra las que se narra persistencia, no como eje único. No alcanza el nivel de centralidad que tuvo en `andersonblackindigenous`.

### §8. Control C8 — ¿creolización como proceso, o mera descripción de diversidad cultural?

Aplicado en §4-C8. Resultado: no determinable de forma concluyente con la evidencia reunida en esta lectura dirigida; se identifica una tensión genealógica real (Clifford vs. Glissant) que requiere cotejo normativo adicional antes de asignar o descartar C8.

### §9. Control C9 — ¿espiritualidad/ritual organiza su propio problema, o sirve a otro argumento? (cruce obligatorio con `womenancestors`)

Aplicado en detalle en §4-C9. A diferencia de `womenancestors`, donde el ritual sirve al parentesco, aquí la propia obra presenta reiteradamente el parentesco, la tierra y la resistencia política como expresiones subordinadas de la espiritualidad ancestral, no al revés. Supera el control con más fuerza que cualquier otra corriente evaluada.

### §10. Control C10 — ¿parentesco/familia/género organiza la explicación, o es mera presencia?

Aplicado en §4-C10. El género/parentesco está presente pero no organiza ningún capítulo de forma autónoma; funciona como variable dentro de C4 (efectos de género del despojo) y C9 (género de los especialistas rituales). No supera el control como corriente organizadora.

---

## §11. Prueba de retirada, corriente por corriente

| Corriente | Retirar su evidencia del libro produce… | Veredicto retirada |
|---|---|---|
| C1 | pérdida del Cap. 3 completo y de buena parte del aparato teórico del Cap. 1 (settler colonialism, comparación miskitu); el argumento de persistencia sobrevive vía espiritualidad/diáspora, dañado pero no colapsado | RETIRADA_SUSTANCIAL |
| C4 | pérdida del Cap. 3 y de buena parte del Cap. 5; argumento de persistencia sobrevive vía espiritualidad/parentesco-débil/diáspora | RETIRADA_SUSTANCIAL |
| C5 | pérdida del Cap. 5 completo, de la sección de diáspora del Cap. 4, de buena parte del Cap. 6, y del propio subtítulo/estructura macro del libro; lo que queda es un libro distinto, más estrecho, sólo Nicaragua/Honduras | cercana a RETIRADA_DESTRUCTIVA (límite superior de RETIRADA_SUSTANCIAL) |
| C7 | pérdida de buena parte del Cap. 3 y de la sección de crisis política del Cap. 5; argumento de persistencia sobrevive vía espiritualidad/diáspora | RETIRADA_SUSTANCIAL |
| C9 | pérdida del Cap. 4 completo, de la mayor parte de la Introducción autobiográfica, y de buena parte del centro retórico del libro entero (el walagallo se invoca en casi todos los capítulos como fundamento último); el argumento de persistencia pierde su centro de gravedad conceptual | RETIRADA_DESTRUCTIVA (o el límite superior más severo de todas las corrientes evaluadas) |

Corrientes que no llegan a esta prueba por haber sido descartadas antes (C2, C3, C6, C10): no aplica retirada formal — su función nunca fue organizadora.
C8: prueba de retirada no aplicable mientras persista la indeterminación señalada en §8.

---

## §12. Prueba de dominancia (dos o más corrientes sobreviven)

Sobreviven con función organizadora sustancial: **C9** (retirada destructiva), **C5** (retirada sustancial-a-destructiva), **C1**, **C4**, **C7** (los tres, retirada sustancial, fuertemente entrelazados entre sí como un mismo clúster territorio-Estado-despojo).

**Dominancia C9 vs. C5** (los dos candidatos más fuertes): ¿organiza C9 a C5, organiza C5 a C9, o son mutuamente constitutivas?

- *A favor de C9 > C5:* la sección "Garifuna Spirituality in Diaspora" (Cap. 4) enmarca la diáspora como una **amenaza/prueba** para la continuidad espiritual ("dispersion... the opposite of cohesion"), sugiriendo que la espiritualidad es el sustrato continuo que la diáspora pone a prueba, no al revés; el orden del título del Cap. 6 ("Rooting, Routing, **and Believing**") coloca "Believing" al final, como síntesis/culminación.
- *A favor de C5 > C9:* el Cap. 1 teoriza "roots and routes" como par dialéctico **simétrico**, no jerárquico; la diáspora es presentada como el vehículo que **genera** nuevas formas sincréticas de espiritualidad (conversión pentecostal en el Bronx, Cap. 4) — es decir, la ruta parece producir cambio en la creencia, no al revés.
- *Evaluación:* la evidencia textual no permite establecer jerarquía limpia en ningún sentido — ambas corrientes están narrativamente fusionadas (el relato de Eric en el Cap. 5 es, literalmente, el de un walagallo que lo llama de vuelta desde la migración).

**Veredicto de dominancia:** RELACIÓN_MIXTA / NO claramente jerárquica entre C9 y C5. Respecto del clúster C1/C4/C7 (territorio-Estado-despojo): funcionan como secundarias entrelazadas entre sí, subordinadas por igual tanto a C9 como a C5 en el marco declarado por los propios autores.

---

## §13. Hipótesis FRONTERA_CONSTITUTIVA (evaluada, no aprobada)

**Par candidato: C5 / C9.** Condición estricta requerida (según los dictámenes ratificados): que ninguna de las dos corrientes pueda comprenderse ni retirarse sin destruir estructuralmente a la otra. La evidencia reunida en §11-§12 (ambas retiradas rozan lo destructivo; fusión narrativa explícita en Cap. 4 §"Spirituality in Diaspora" y en el propio título del Cap. 6) hace que esta hipótesis **merezca consideración seria**. No se aprueba aquí: se deja como hipótesis abierta para que Dirección Académica la contraste contra el criterio estricto vigente de frontera constitutiva, dado que esta lectura no tiene competencia para aprobarla.

---

## §14. Hipótesis SINTESIS_MULTICORRIENTE (evaluada, no aprobada)

Dado que sobreviven, en algún grado, cinco corrientes (C1, C4, C5, C7, C9) — y que el propio marco autodeclarado del libro ("decolonial intersectionality") es, por definición, un argumento que combina explícitamente múltiples ejes de diferencia en una explicación no reducible a uno solo —, cabe la hipótesis de que `cosgrovegarifuna` no sea un caso de "principal + secundarias" sino una síntesis multicorriente genuina (territorio-Estado-despojo [C1/C4/C7] + diáspora [C5] + espiritualidad [C9]). No se aprueba aquí, por las mismas razones de competencia señaladas en §13; se deja registrada como segunda hipótesis de arquitectura posible (ver §21).

---

## §15. VACÍO_TAXONÓMICO_POSIBLE

**Se reporta: SÍ**, con la siguiente justificación. El propio marco explícito y nombrado por los autores —"decolonial intersectionality", "survivance", "persistence"— es, por diseño teórico declarado, **anti-reduccionista**: no busca subordinarse a un solo eje (raza, indigeneidad, género, lugar, diáspora) sino explicar precisamente la persistencia de una identidad étnica a través de la combinación simultánea de todos ellos. Ninguna corriente C1–C10, ni siquiera el par C5/C9 en frontera, captura de forma limpia ese argumento de "persistencia intersectada" como tal — el objeto propio del libro (formación y sostenimiento de una identidad de pueblo/etnia panétnica —"Garifuna Nation"— a través de despojo + Estado + religión + diáspora + parentesco simultáneamente) no tiene, hasta donde permite verificar esta lectura, una casilla dedicada en la taxonomía vigente del Atlas. **No se propone ninguna corriente nueva**, conforme a la prohibición expresa de la tarea; se deja constancia del vacío para que Dirección Académica decida si corresponde ampliar la taxonomía, aceptar la síntesis multicorriente de §14, o resolverlo por asignación de principal/secundarias.

---

## §16. Incidencia territorial

El campo `l` del corpus es `"bluefields"`. La lectura muestra que Bluefields aparece en el texto sobre todo como **nodo de tránsito/mercado urbano** (destino de estudio, punto de embarque, sede de discriminación regional) — no como sitio etnográfico primario. El sitio etnográfico primario y explícito es **Orinoco y las comunidades garífuna de Pearl Lagoon** (Orinoco, San Vicente, La Fe, Marshall Point, Brown Bank), al norte de Bluefields. Además, capítulos enteros o secciones sustanciales tratan **Honduras** (Sangrelaya, Santa Fe, Limón, Santa Cristales, Río Negro, San Antonio — presentes en los Caps. 3, 4, 5 y 6) y **Nueva York** (Bronx/Brooklyn — tres viajes de campo dedicados, Caps. 4, 5, 6, y el propio subtítulo del libro). Esto es una etnografía genuinamente trinacional/multisituada; "bluefields" como única etiqueta territorial resulta una simplificación sustancial del alcance real de la obra.

**Se reporta:** `INCIDENCIA_TERRITORIAL_PENDIENTE` — no se corrige el campo, solo se señala para que Dirección Académica evalúe si procede ampliar la etiqueta territorial (p. ej. a Pearl Lagoon/Orinoco como sitio primario, con Honduras y Nueva York como sitios secundarios explícitos).

## §17. Incidencia temporal

El campo `y` del corpus registra `"2021"` (año de publicación). El alcance temporal real de la argumentación del libro es de longue durée (etnogénesis s. XVII–presente), con un **presente etnográfico primario de 2015–2019** (nueve meses de trabajo de campo distribuidos en cinco años, más tres visitas a Nueva York 2016-2018) — no un momento puntual. No se ha podido verificar en esta lectura si el campo `y` del esquema del corpus está destinado a registrar exclusivamente año de publicación (en cuyo caso no habría incidencia real, siendo consistente con el resto del corpus) o también a aproximar el período de referencia del objeto de estudio (en cuyo caso sí habría una brecha real entre "2021" y el período de campo 2015-2019).

**Se reporta, con esta reserva explícita de incertidumbre sobre la semántica del campo:** `INCIDENCIA_TEMPORAL_PENDIENTE` (calificada/condicional) — se deja a criterio de Dirección Académica determinar si el campo `y` está destinado solo a año de publicación (sin incidencia) o también a período de referencia (con incidencia real frente al campo de trabajo 2015-2019).

---

## §18. Relaciones heredadas en `datos-atlas.json` (verificadas, no modificadas)

| Relación (`cosgrovegarifuna` → …) | Fuente registrada en el corpus | Evidencia textual hallada en esta lectura | Veredicto |
|---|---|---|---|
| → `afrocentroam` | cita a Sarah England, *Afro-Central Americans in New York City…* | England es citada explícitamente por nombre en el Cap. 5 sobre patrones de migración de género garífuna ("As England notes, it is typical for men to migrate…"), coincidiendo temáticamente con lo descrito para `afrocentroam`. No se leyó la obra `afrocentroam` en sí (fuera del alcance de esta tarea) | **PLAUSIBLE** (cita directa confirmada del lado de `cosgrovegarifuna`; verificación plena del vínculo requeriría cotejo con el objeto propio de `afrocentroam`) |
| → `womenancestors` | cita repetida de Virginia Kerns en la línea de tiempo | Kerns es citada **repetida y explícitamente** como "the author of the foundational ethnography about the Garifuna in Belize" en el Cap. 4 (sincretismo, ritual) y en el Cap. 3 (autonomía sexual y económica de las mujeres garífuna), con cita textual directa en ambos casos | **CORROBORADA** |
| → `gonzalezsojourners` | "continúan la etnohistoria garífuna de González… Por corroborar" | No se detectó ninguna cita directa a una obra de González con este perfil en el cuerpo del texto leído (Prefacio–Cap. 7). Notas/Bibliografía no revisadas exhaustivamente | **POR_CORROBORAR** (sin evidencia positiva ni negativa concluyente) |
| → `andersonblackindigenous` | "los dos leen la identidad garífuna como negociación negro/indígena… Por corroborar" | Resonancia temática real y sustantiva confirmada de forma independiente en esta lectura (ver §20), pero no se detectó cita directa a Mark Anderson por nombre en el cuerpo del texto leído | **POR_CORROBORAR** (resonancia temática plausible, sin cita directa verificada) |

---

## §19. Comparación metodológica obligatoria con `womenancestors`

Misma población (garífuna), sitios distintos y solapados (Kerns: Belice, años 1970s-80s; Cosgrove et al.: Nicaragua/Honduras/Nueva York, 2015-2019) — ¿problema diferente? **Sí, con evidencia clara.** `womenancestors` fue hallado con C10 (parentesco) como corriente principal: la propia autora subordina explícitamente el material histórico/ritual a la explicación de la estructura de parentesco matrifocal. `cosgrovegarifuna`, en cambio, **cita a Kerns como autoridad externa establecida** precisamente sobre ese tema de parentesco/ritual (Caps. 3 y 4), sin desarrollar un argumento propio de parentesco como eje organizador (§4-C10, descartada). El problema organizador de `cosgrovegarifuna` es distinto: persistencia multiaxial (espiritualidad + diáspora + territorio-Estado), con el parentesco en función auxiliar/citacional, no generativa. No hay riesgo de arquitectura copiada: los dos libros llegan a estructuras de clasificación sustantivamente diferentes por razones textuales propias de cada uno.

## §20. Comparación metodológica obligatoria con `andersonblackindigenous`

Ambos libros teorizan explícitamente la identidad garífuna como negociación entre categorías "negro" e "indígena" frente al Estado centroamericano (Anderson: Honduras; Cosgrove et al.: Nicaragua+Honduras+EE. UU.). `andersonblackindigenous` fue hallado con **C1 principal** (indigeneidad/invasión/persistencia como eje organizador único y sostenido) y C7/C10 como secundarias, mientras que C4 y C5 fueron hallados **CONTEXTUALES** pese a tener densidad textual real, por carecer de capítulo autónomo propio y estar subordinados como mecanismo a C1/C7/C10.

**Divergencia metodológica relevante que esta lectura no traspone mecánicamente:** en `cosgrovegarifuna`, C1 se evalúa aquí como **secundaria posible** (no principal, a diferencia de Anderson) porque el marco explícito del libro es intersectorial-múltiple, no centrado en un único eje negro/indígena-vs-Estado. Y, de forma más significativa, **C5 no se descarta aquí por las mismas razones que en Anderson**: mientras en `andersonblackindigenous` la diáspora careció de capítulo autónomo, en `cosgrovegarifuna` **sí existe** un capítulo dedicado (Cap. 5) más un segundo capítulo de síntesis (Cap. 6) más el propio subtítulo del libro. Copiar mecánicamente el veredicto "C5 contextual" del precedente `andersonblackindigenous` habría sido un error metodológico — precisamente el tipo de "copia de arquitectura" que la tarea prohíbe expresamente. Se documenta este razonamiento explícito para evidenciar que la comparación se hizo respetando las diferencias estructurales reales entre ambas obras.

---

## §21. Arquitecturas posibles (hasta tres, sin decidir)

**Arquitectura A — C9 principal.** C9 (memorias/espiritualidades/archivos vivos) como corriente principal, con C5 (rutas/diásporas) como secundaria posible, y C1/C4/C7 (clúster territorio-Estado-despojo) como secundarias posibles adicionales. Fundamento: la propia obra narra reiteradamente el territorio, la resistencia política e incluso la diáspora como expresiones de la espiritualidad ancestral, nunca al revés; retirada de C9 es la más destructiva de todas las evaluadas.

**Arquitectura B — C5 principal.** C5 (rutas/diásporas/territorios acuosos) como corriente principal —sustentado en el subtítulo del libro, dos capítulos dedicados (5 y parcialmente 6), y la teorización explícita de "roots and routes" como marco dialéctico simétrico del Cap. 1—, con C9 como secundaria posible, y C1/C4/C7 como terciarias/contextuales.

**Arquitectura C — FRONTERA_CONSTITUTIVA C5/C9 o SÍNTESIS_MULTICORRIENTE.** C5 y C9 co-principales, mutuamente constitutivas y no reducibles la una a la otra (hipótesis evaluada en §13), con C1/C4/C7 como clúster secundario entrelazado; alternativamente, lectura de síntesis multicorriente genuina abarcando las cinco corrientes supervivientes (§14), acompañada del registro explícito de `VACÍO_TAXONÓMICO_POSIBLE` (§15) dado que el marco propio del libro ("decolonial intersectionality"/"persistence") no se reduce limpiamente a ninguna corriente ni par de fronteras de la taxonomía vigente.

Esta lectura **no decide** entre A, B y C. Las tres quedan documentadas con su fundamento evidencial para que Dirección Académica resuelva.

---

## §22. Estado final

**`LISTO_PARA_DECISION`**

Justificación: se cumplió y excedió la lectura mínima obligatoria (Prefacio + Introducción + Capítulos 1–7 íntegros, más portada, índice y cronología); se aplicaron los seis controles especiales obligatorios (C1, C5, C7, C8, C9, C10); se ejecutaron las pruebas de retirada y dominancia sobre las cinco corrientes supervivientes; se evaluaron (sin aprobar) las hipótesis de FRONTERA_CONSTITUTIVA y SÍNTESIS_MULTICORRIENTE; se determinó VACÍO_TAXONÓMICO_POSIBLE con justificación; se reconstruyeron territorio y temporalidad con sus incidencias señaladas; se verificaron las cuatro relaciones heredadas; se realizaron ambas comparaciones metodológicas obligatorias evitando copiar arquitecturas ajenas. La ambigüedad remanente (C9 vs. C5, síntesis vs. principal-secundaria, vacío taxonómico) es de naturaleza **interpretativa/decisoria**, no de insuficiencia evidencial — es exactamente el tipo de juicio que esta tarea reserva a Dirección Académica y no a esta lectura dirigida.

## §23. Pregunta exacta para Dirección Académica

> Dado que C5 (rutas/diásporas/territorios acuosos) y C9 (memorias/espiritualidades/archivos vivos) superan ambas la prueba de retirada en grado severo —C9 al borde de RETIRADA_DESTRUCTIVA, C5 en el límite superior de RETIRADA_SUSTANCIAL— y se presentan textualmente entrelazadas (sección "Garifuna Spirituality in Diaspora" del Cap. 4; título del Cap. 6, "Rooting, Routing, and Believing"), ¿corresponde clasificar `cosgrovegarifuna` (a) con C9 como corriente principal y C5 como secundaria, (b) con C5 como principal y C9 como secundaria, o (c) explorar formalmente FRONTERA_CONSTITUTIVA C5/C9 o SÍNTESIS_MULTICORRIENTE — y, en cualquiera de los tres casos, corresponde además registrar `VACÍO_TAXONÓMICO_POSIBLE`, dado que el marco propio de la obra ("decolonial intersectionality"/"persistence") no se reduce limpiamente a ninguna corriente ni par de fronteras vigente del Atlas?

---

## §24. Confirmaciones de integridad

- **Corpus** (`datos-atlas.json`): consultado únicamente por lectura programática (Python inline vía `device_bash`); **no modificado** en ningún campo ni relación.
- **Cola de casos:** no se abrió ningún otro caso pendiente. No se tocaron `mintzarea`, `pricemars`, `wynterblackmetamorphosis`, `atkinsonearliest`.
- **Matriz de fronteras** (`matriz-fronteras-c1-c10.md`): consultada como referencia normativa, no modificada.
- **Marco académico / dictámenes C1–C10:** consultados como fuente normativa (los diez `dictamen-academico-cN.md`), no modificados.
- **Integridad de casos cerrados:** no se reabrió ni modificó ninguno de los seis casos cerrados (`whiteheadtiger`, `felicianosantos`, `andersonblackindigenous`, `pinedashipwrecked`, `womenancestors`, `schwartz_seaofstorms`); ambos documentos de lectura citados (`womenancestors`, `andersonblackindigenous`) fueron leídos únicamente con fines de comparación metodológica obligatoria, sin alterar su contenido ni copiar su arquitectura de clasificación.
- **Archivos "NO TOCAR":** ninguno fue abierto en modo escritura ni modificado.
- **Copia auxiliar del EPUB:** `Pagina/cosgrovegarifuna-simple.epub` permanece en el disco de Rob, fuera del repositorio git y fuera de `Biliografia /`, siguiendo exactamente el patrón ya documentado para los seis casos anteriores (`*-simple.epub`/`*-simple.pdf`). Este entorno no tiene permisos para eliminarla y **no fue añadida a git**.

## §25. Verificación Git final (repetida aquí para cierre del documento)

Ver §0 — verificación "DESPUÉS de leer" ya reportada, idéntica en branch/HEAD/HEAD remoto/estado a la verificación previa a la lectura, con el único hallazgo del `.git/index.lock` no eliminado, reportado y no intervenido.

**Confirmación explícita:** no se ejecutó `git add`, `git commit`, `git push`, `git reset`, `git restore`, `git checkout` ni `git stash` en ningún momento de esta tarea. El `git status --short` esperado tras la creación de este documento es exactamente los tres no-rastreados preexistentes más este nuevo archivo, sin ningún archivo rastreado modificado.

---

## §26. Checklist de entrega (50 ítems)

1. Referencia bibliográfica completa — ✅ §1
2. Territorio — ✅ §1/§16 (con incidencia señalada)
3. Población — ✅ §1/§3 (garífuna, afro-indígena)
4. Período — ✅ §3/§17 (con incidencia condicional señalada)
5. Pregunta central — ✅ §3
6. Tesis — ✅ §3
7. Metodología del libro — ✅ §3 (Cap. 7, decolonial/etnográfica)
8. Estructura del libro — ✅ §1/§2 (Prefacio+Intro+7 caps., sin conclusión unificada)
9. Capítulos/secciones leídos — ✅ §2
10. Problema organizador reconstruido — ✅ §3
11–20. Veredictos C1–C10 individuales — ✅ §4
21. Control especial C1 — ✅ §5/6
22. Control especial C5 — ✅ §6/9
23. Control especial C7 — ✅ §7
24. Control especial C8 — ✅ §8 (no determinable)
25. Control especial C9 — ✅ §9
26. Control especial C10 — ✅ §10
27. Prueba de retirada — ✅ §11
28. Posible principal — ✅ §21 (dos candidatas, sin decidir)
29. Posibles secundarias — ✅ §4/§21 (C1, C4, C7; C5 o C9 según arquitectura)
30. Pares bilaterales relevantes — ✅ §12 (C5/C9)
31. Hipótesis FRONTERA_CONSTITUTIVA — ✅ §13 (evaluada, no aprobada)
32. Hipótesis SÍNTESIS_MULTICORRIENTE — ✅ §14 (evaluada, no aprobada)
33. VACÍO_TAXONÓMICO_POSIBLE — ✅ §15 (sí, con justificación)
34. Incidencia territorial — ✅ §16
35. Incidencia temporal — ✅ §17
36. Relaciones heredadas (4) — ✅ §18
37. Comparación metodológica con `womenancestors` — ✅ §19
38. Comparación metodológica con `andersonblackindigenous` — ✅ §20
39. Hasta tres arquitecturas posibles — ✅ §21
40. Estado final — ✅ §22
41. Pregunta exacta para Dirección Académica — ✅ §23
42. Confirmación corpus intacto — ✅ §24
43. Confirmación cola de casos — ✅ §24
44. Confirmación matriz intacta — ✅ §24
45. Confirmación marco/dictámenes intactos — ✅ §24
46. Confirmación integridad casos cerrados — ✅ §24
47. Git status antes — ✅ §0
48. Git status después — ✅ §0/§25
49. Confirmación no add/commit/push — ✅ §25
50. Archivo único creado — ✅ este documento, ruta exacta autorizada

---

## §27. Prohibiciones explícitas — confirmación de cumplimiento

- ❌ No se decidió la clasificación final. ✅ cumplido.
- ❌ No se clasificó Garífuna=C1 automáticamente. ✅ cumplido (C1 evaluado y hallado secundaria posible, no principal, con razonamiento explícito).
- ❌ No se clasificó movilidad=C5 automáticamente. ✅ cumplido (C5 evaluado con control especial completo, no asumido por densidad léxica).
- ❌ No se copió la arquitectura de `womenancestors`. ✅ cumplido — divergencia documentada en §19.
- ❌ No se copió la arquitectura de `andersonblackindigenous`. ✅ cumplido — divergencia documentada explícitamente en §20.
- ❌ No se creó ninguna corriente nueva. ✅ cumplido — VACÍO_TAXONÓMICO_POSIBLE reportado sin inventar corriente.
- ❌ No se implementó nada. ✅ cumplido.
- ❌ No se abrió `mintzarea`, `pricemars`, `wynterblackmetamorphosis` ni `atkinsonearliest`. ✅ cumplido.
- ❌ No se avanzó hacia una decisión más allá de la lectura. ✅ cumplido — este documento se detiene explícitamente en `LISTO_PARA_DECISION` con arquitecturas alternativas sin resolver.
