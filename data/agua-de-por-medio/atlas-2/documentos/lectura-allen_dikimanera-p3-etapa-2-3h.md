# Lectura probatoria · P3-A · Caso 5/10 · `allen_dikimanera`

## 1. Naturaleza probatoria del documento

Este documento es un **instrumento probatorio de lectura**, no una decisión académica. Registra la reconstrucción autónoma de la obra, su confrontación con las corrientes C1–C10, las pruebas de retirada y dominancia, la auditoría de relaciones heredadas y las candidaturas nuevas detectadas. No fija arquitectura de recorrido, no modifica el corpus y no autoriza ninguna implementación. Su función es dejar a la Dirección Académica en condiciones de emitir, en un documento separado, la decisión académica correspondiente.

## 2. Identidad bibliográfica

- **atlas-id**: `allen_dikimanera`
- **Autora**: Rose Mary Allen
- **Título**: *Di ki manera? A Social History of Afro-Curaçaoans, 1863–1917*
- **Año**: 2007
- **Editorial/edición**: Amsterdam, SWP (tesis doctoral publicada)
- **Ruta exacta del archivo fuente**: `Biliografia /Di ki manera_ _ A social history of Afro-Curaçaoans, -- Allen, Rose Mary -- Amsterdam, Netherlands, 2007 -- Amsterdam _ SWP -- isbn13 9789066658516 -- e5a9771bc112b992425453fc1ac8f1f0 -- Anna's Archive.pdf` (308 páginas físicas de PDF; digitalización con procedencia de Internet Archive, PDF 1.5)

## 3. Antecedentes del nodo (constituyen `ANTECEDENTE_POR_AUDITAR`, nunca evidencia clasificatoria)

- **Estado del nodo antes de esta lectura**: `"recorrido": null, "recorridos_sec": [], "arquitectura_recorrido": null, "estado_recorrido": "pendiente"`
- **Territorio**: `curazao`
- **Etiquetas heredadas (`f`)**: `["postplantacion", "memoria"]`
- **Resumen heredado (`ap`)**: "Historia oral poscolonial curazoleña: documenta cómo la comunidad afrocurazoleña disputó, con sus propios términos culturales, el poder asimétrico del Estado, los antiguos amos y la Iglesia tras la abolición."
- **Relaciones salientes heredadas**: `allen_dikimanera → tambu` (resonancia; fuente registrada: "Allen menciona el trabajo de Nanette de Jong sobre el tambú curazoleño (referencia puntual verificada); ambas comparten archivo etnográfico de Curazao.")
- **Relaciones entrantes heredadas**: `vanderpijl_equaliberty → allen_dikimanera` (resonancia; fuente registrada: "El volumen cita directamente a Rose Mary Allen y su Di ki manera? sobre la historia social afrocurazoleña. Cita verificada.")
- **Antecedentes documentales previos que mencionan la obra sin clasificarla**:
  - `dictamen-academico-c2.md` §4.5 ("Las 34 entradas pendientes de relectura"): `allen_dikimanera` figura únicamente como señal léxica ("abolición"); el propio dictamen no la reclasifica.
  - `dictamen-academico-c4.md` §10 ("Siembra"): `allen_dikimanera` se nombra solo como ejemplo de material neerlandófono identificado y no leído; el dictamen aclara expresamente que "no declara un vacío neerlandófono... la evidencia disponible muestra material identificado y sin leer, no una ausencia comprobada."
- **Verificación de identidad del Caso 5/10**: contrastada la tabla de `apertura-recalibracion-p3-etapa-2-3g.md` §17 con `cola-lectura-pendiente-atlas-2.md` (línea 62). Ambas fuentes coinciden sin contradicción en identificar `allen_dikimanera` (C2/C4, Curazao) como Caso 5/10 del sublote P3-A. No se detectó incidencia de identidad; no fue necesario invocar la cláusula de detención del §1 del mandato.

## 4. Archivo fuente y método de extracción

- **Archivo fuente**: PDF de 308 páginas físicas (ver §2).
- **Método de extracción**: `pdftotext -layout` ejecutado sobre el PDF en el shell del dispositivo del usuario, produciendo un volcado de texto plano de 1.013.671 bytes (14.335 líneas), preservando en gran medida la disposición tipográfica de columnas, notas al pie y tablas. El archivo se trasladó a la convención de scratch ya existente en el repositorio (`_to_delete/`) y se puso en escenario (`stage`) hacia el contenedor en la nube para su lectura paginada.
- **Verificación del desfase de paginación**: confirmado empíricamente en múltiples puntos ampliamente espaciados que **página física = página impresa + 2**, sin placas no numeradas que alteren el desfase (verificado en physical 65→63, 103→101, 121→119, 149→147, 179→177, 237→235, 259→257, 267→265).
- **Mapa de capítulos (páginas físicas)**:

| Capítulo | Páginas físicas | Páginas impresas |
|---|---|---|
| I. Introduction | 11–32 | 9–30 |
| II. A Methodology of Afro-Curaçaoan History | 33–64 | 31–62 |
| III. Afro-Curaçaoan Life and Culture Prior to Emancipation | 65–102 | 63–100 |
| IV. Celebrating Freedom | 103–120 | 101–118 |
| V. The Role of the State and the Plantation Owners after Emancipation | 121–148 | 119–146 |
| VI. The Roman Catholic Church's Effort to Instill Respectability | 149–178 | 147–176 |
| VII. Buska Bida: Making a Living | 179–216 | 177–214 |
| VIII. Biba un Bida Drechi: Living a Respectable Life | 217–236 | 215–234 |
| IX. Tambú di bida: An Afro-Curaçaoan Concept of Life | 237–258 | 235–256 |
| X. Conclusion: Survival and Cultural Complexity | 259–266 | 257–264 |
| Archival Records, Oral Documents and Bibliography | 267–290 | — |
| Apéndices (tablas estadísticas y de canciones) | 291–296 | — |
| Samenvatting (resumen en neerlandés) | 297–300 | — |
| Resumen (en papiamentu) | 301–304 | — |
| Curriculum vitae | 305 | — |
| Colofón/ISBN | 306–308 | — |

## 5. Método de extracción — observaciones de calidad

El OCR subyacente al PDF de Internet Archive presenta errores recurrentes y sistemáticos en la transliteración de caracteres especiales del neerlandés y del papiamentu (por ejemplo, "Curaçao" se renderiza de forma inconsistente como "Curagao" o "Curacao"; diacríticos como ç, á, é, ú se pierden o se sustituyen con frecuencia). Estos errores no afectan la inteligibilidad del argumento pero sí impiden una búsqueda textual perfectamente exhaustiva por cadenas exactas (mitigado en este trabajo mediante búsquedas con variantes múltiples). Las tablas estadísticas (por ejemplo, la Tabla 9.1 de taxonomía de espíritus, apéndices numéricos) se transcriben con pérdida parcial de estructura tabular, aunque el contenido textual permanece legible.

## 6. Cobertura de lectura

**Capítulos leídos íntegramente**: I (Introducción, físicas 11–32) y X (Conclusión, físicas 259–266).

**Capítulos leídos sustancialmente** (mayoría del cuerpo, incluidas todas las secciones con encabezado propio, pero sin garantía de haber leído cada línea): II (Metodología), III (Vida previa a la emancipación), IV (Celebración de la libertad), V (El papel del Estado), VI (la Iglesia católica — leída en su apertura, en la sección "Poor Relief"/"The Union of Marriage" y en su cierre, pero no verificada línea por línea en la totalidad de sus secciones intermedias), VII (Buska Bida — leída en su apertura programática completa y en la sección sobre la tierra; no verificada íntegramente en las secciones sobre trabajo asalariado/artesanal intermedias, aunque estas se tocaron vía las notas al pie), VIII (Biba un Bida Drechi — leída en su apertura, en "Gender Roles" y en su cierre sobre denegación de tierra a mujeres) y IX (Tambú di bida — leída en su apertura conceptual, en la sección de cosmología y, en una sesión previa a este informe, en el bloque sobre taxonomía de espíritus y brujería; no verificada íntegramente en todas sus subsecciones).

**Capítulos no leídos de forma continua**: la sección bibliográfica (físicas 267–290) fue objeto de búsquedas dirigidas por término (ver §7) más que de lectura corrida; se recorrió visualmente el tramo alfabético "Abbring"–"Onrust" sin leer cada entrada. Los apéndices estadísticos y de canciones (291–296), el resumen en neerlandés (297–300), el resumen en papiamentu (301–304), el currículum (305) y el colofón (306–308) **no fueron leídos**.

**Páginas impresas vs. físicas**: ver tabla de §4; desfase constante de +2 verificado en ocho puntos distintos.

**Notas al pie**: leídas extensamente en los tramos correspondientes a los capítulos V, VI y VII (referencias archivísticas del Archivo Nacional, citas de periódicos como *La Cruz*, *Amigoe*, *La Unión*); no se garantiza la lectura de la totalidad de las notas de los capítulos VIII y IX.

**Tablas o imágenes ilegibles**: la Tabla 9.1 (taxonomía de espíritus) se transcribió con estructura parcialmente degradada por el OCR, aunque su contenido textual es recuperable.

## 7. Búsquedas dirigidas realizadas (relaciones heredadas)

Se ejecutaron búsquedas de cadena sobre la totalidad del texto extraído (no limitadas a los capítulos leídos) para las siguientes cadenas, en apoyo de la auditoría de relaciones (§24):

- `Jong` → 2 apariciones, ambas correspondientes a "Jong, Janny de" (co-autora, con Gé Prince y Hugo s'Jacob, de *Niet-westerse geschiedenis* 1998), citada una vez en el Capítulo I en relación con la crítica a la historiografía "neerlandocéntrica". Ninguna aparición corresponde a Nanette de Jong.
- `Nanette` → 0 apariciones en la totalidad del texto extraído.
- `van der Pijl` / `vanderpijl` / `Equali[b]erty` → 0 apariciones en la totalidad del texto extraído.
- `tambú`/`tambu` (variantes ortográficas) → 104 apariciones, densamente distribuidas, con máxima concentración en el Capítulo IX pero presentes también en los Capítulos III, V, VI y en las notas.
- `Olwig` (bibliografía) → confirmada entrada bibliográfica: "Olwig, Karen Fog — 1993 — *Global Culture, Island Identity. Continuity and Change in the Afro-Caribbean Community of Nevis*. Amsterdam: Harwood Academic Publishers", además de "1995a" (capítulo en Palmié, ed., *Slave Cultures and the Cultures of Slavery*) y "1995c" (*Small Islands, Large Questions*, editado por la propia Olwig).

Los resultados de estas búsquedas se desarrollan en el §24 (Auditoría de relaciones) y el §25 (Candidaturas nuevas).

## 8. Problema

La obra aborda el problema de cómo se reorganizó, tras la abolición formal de la esclavitud en Curazao (1863), el poder sobre la tierra, el trabajo y la conducta moral de la población afrocurazoleña recién liberada, y cómo esa población, dentro de los límites impuestos por esa reorganización, produjo y sostuvo formas propias de vida material, social y espiritual.

## 9. Pregunta

La autora formula explícitamente la pregunta rectora en la apertura del Capítulo VII y la retoma sin variación sustantiva en la Conclusión: *¿de qué maneras intentaron los afrocurazoleños dar sentido a su existencia cotidiana en un sentido material, social y espiritual, dentro de los límites establecidos por las dos instituciones de poder — el Estado y la Iglesia católica — que gobernaban su vida tras la emancipación?* Esta no es una pregunta retórica aislada: la propia introducción al Capítulo VII la presenta como la pregunta que organiza "this and the following two Chapters" (VII, VIII y IX), es decir, como el eje que unifica el cuerpo empírico completo de la obra.

## 10. Tesis

Tras la abolición formal, el Estado colonial y la Iglesia católica desplegaron mecanismos sostenidos de control — el sistema de *paga tera* y las leyes de vagancia sobre tierra y trabajo (Estado), la regulación del matrimonio, la moral sexual y familiar (Iglesia) — orientados a producir una fuerza de trabajo disciplinada y una población convertida a los valores de "respetabilidad" burguesa y cristiana. Ese paquete de control nunca se impuso de manera total, uniforme ni exitosa: la cultura afrocurazoleña resultante es una mezcla de resistencia, adopción parcial y selectiva, y reinterpretación autónoma de los modelos impuestos, expresada simultáneamente en los tres dominios de la vida (material/económico, social/familiar, espiritual) que la autora organiza bajo el concepto unificador de *bida*. La obra reivindica explícitamente ir "más allá de la bipolaridad de resistencia y dominación" de las teorías de resistencia más antiguas, proponiendo en su lugar una noción de "complejidad cultural" tomada de Karen Fog Olwig (1993).

## 11. Objeto y método

**Objeto**: la vida cotidiana de la población afrocurazoleña entre 1863 y 1917, delimitación cronológica deliberada (la autora excluye expresamente la llegada de Shell en 1915 como punto de cierre, prefiriendo 1917 como cierre del arco de la obra).

**Método**: microhistoria/historia social de fuentes predominantemente orales, triangulada con archivo colonial escrito. La autora sitúa metodológicamente su trabajo en explícita continuidad con la crítica de Karen Fog Olwig (1993, 1995a, 1995c) al modelo de "sociedad de plantación" y a la "sociedad plural" de M. G. Smith, y en diálogo crítico con la "creolización" de Brathwaite (matizada por la crítica de Bolland), con Trouillot, y con las teorías de la resistencia de Genovese, Scott, de Certeau y Burton, a las que reprocha una bipolaridad excesiva entre dominación y resistencia.

## 12. Fuentes

- **Orales**: entrevistas propias de la autora y la colección Brenneker/Juliana-Zikinzá (más de 1.400 canciones/relatos, 267 informantes, Archivo Nacional de Willemstad), cuentos de Nanzi, proverbios, canciones de trabajo y de cosecha.
- **Escritas**: *Koloniale Verslagen*, correspondencia de los "district masters" (Brievenboeken), expedientes penales (*Rol van Strafzaken*), archivo eclesiástico, periódicos (*Amigoe*, *La Cruz*, *La Unión*, *Kerkelijke Courant*).
- **Historiografía secundaria caribeña comparada**, extensamente discutida en el Capítulo I.

## 13. Arquitectura argumental

La obra tiene una arquitectura explícitamente declarada por la propia autora, no reconstruida por inferencia externa: introducción teórico-metodológica (I) → método (II) → contexto pre-emancipación, presentado expresamente como antecedente necesario y no como objeto autónomo ("this study does not deal with slavery as such... social life following emancipation cannot be studied in isolation", citando a Olwig 1993:6) (III) → el momento mismo de la abolición, tratado como "lenguaje político" en disputa (IV) → el aparato de control estatal sobre tierra y trabajo (V) → el aparato de control eclesiástico sobre matrimonio y moral (VI) → tres capítulos empíricos, explícitamente anunciados como ramificaciones de una sola pregunta bajo el concepto de *bida* (economía en VII, vida social/familiar en VIII, vida espiritual en IX) → conclusión que reúne los tres dominios bajo una tesis única sobre poder y complejidad cultural (X). La cita textual decisiva —"Using the concept of bida, here and in the following two Chapters, I will focus on the dynamics of Afro-Curaçaoans' material, social and spiritual lives"— aparece en la apertura del Capítulo VII y es reforzada por la apertura del Capítulo IX, que se declara a sí mismo continuación explícita: "I am particularly interested in how Afro-Curaçaoans reflected on and conducted their lives in the context of the material and social conditions as described in Chapters VII and VIII."

## 14. Temporalidad y escala territorial

**Temporalidad**: 1863–1917, delimitación deliberada y argumentada por la propia autora (excluye 1915 como cierre para no subordinar el periodo estudiado al inicio de la industrialización petrolera).

**Escala territorial**: insular (Curazao), con distinciones internas explícitamente tematizadas: Punda/Otrobanda (ciudad) frente al *kunuku* (campo), y dentro del *kunuku*, Banda Bou (oeste) frente a Banda Riba (este) — distinciones que la autora usa para mostrar jerarquías internas de respetabilidad entre los propios afrocurazoleños.

## 15. Conceptos organizadores

- ***Bida*** (vida): concepto-marco explícitamente tripartito (material, social, espiritual) que organiza los Capítulos VII–IX.
- ***Bida drechi*** (vida recta/respetable): valor impuesto por la Iglesia católica, contrapuesto a *biba den pika* (vivir en pecado); organiza el Capítulo VIII.
- ***Tambú* / *tambú di bida***: metáfora nativa (registrada de un informante) de flexibilidad, persistencia y resistencia; organiza el Capítulo IX.
- **"Complejidad cultural"**: concepto explícitamente importado de Olwig (1993) y usado como marco de cierre de toda la obra en la Conclusión, en sustitución deliberada de la "creolización" (Brathwaite) y de la "sociedad plural" (M. G. Smith).

## 16. Distinción tesis / corriente / dominio empírico / evidencia / ejemplo

- **Tesis**: el control estatal-eclesiástico postplantación produjo una cultura afrocurazoleña de complejidad irreductible a la bipolaridad resistencia/dominación (ver §10).
- **Concepto organizador**: *bida* tripartito (ver §15).
- **Corriente(s) candidatas**: C4 (control institucional del trabajo y la tierra); C9 (espiritualidades transmitidas); C10 (parentescos, cuerpos, eróticas); C2 (esclavización/trata, como telón de fondo).
- **Dominio empírico**: la vida cotidiana afrocurazoleña 1863–1917 en sus tres registros (económico, familiar, espiritual).
- **Evidencia**: correspondencia de distrito, expedientes penales, canciones, entrevistas, proverbios.
- **Ejemplos** (retirables sin destruir la tesis): el cuento de Nanzi y la tierra, el caso de Mathias Apostel, la canción de la cosecha, el cuento de Warawara y la gallina, la Tabla 9.1 de espíritus. Estos son ilustraciones, no proposiciones necesarias de la tesis.

## 17. Evaluación C1–C10

| Corriente | Clasificación | Justificación |
|---|---|---|
| C1 (Mundos indígenas) | AUSENTE | Sin referencia relevante en el material leído. |
| C2 (Trata, esclavización y plantación) | CONTEXTUAL | El Capítulo III trata la esclavización pre-1863 explícitamente como antecedente necesario, no como objeto propio ("this study does not deal with slavery as such"); la Conclusión retoma el estatus de Curazao como puerto de tránsito trasatlántico como dato relevante para la formación étnica de la población. Es condición de origen del problema, no su eje. |
| C3 (Fugas, cimarronajes y emancipaciones) | INCIDENTAL | El cimarronaje marítimo se menciona en el Capítulo III; la abolición misma (Cap. IV) se trata como "lenguaje político" en disputa, no como proceso de fuga/emancipación en sentido estructurante. |
| C4 (Postplantación, trabajo y desposesión) | ESTRUCTURANTE | Eje explícito y sostenido: el sistema *paga tera*, las leyes de vagancia, la denegación de tierra a quienes "querían actuar por su cuenta" (Cap. V) constituyen, junto con la regulación eclesiástica del matrimonio (Cap. VI), el marco causal que la propia autora declara como el que da sentido a los tres capítulos empíricos siguientes. |
| C5 (Rutas, diásporas y territorios acuosos) | INCIDENTAL | Mencionado en la Conclusión (Curazao como puerto de tránsito de esclavizados hacia el continente español) pero no desarrollado como corriente propia. |
| C6 (Huracanes, ecologías) | INCIDENTAL | Solo menciones de aridez y limitaciones agroecológicas como condicionantes económicos, no como eje ecológico-catastrófico. |
| C7 (Soberanías, fronteras y ocupaciones) | AUSENTE | No se aborda Curazao en clave de soberanía o disputa geopolítica de fronteras. |
| C8 (Creolizaciones) | CONTEXTUAL | Discutida explícitamente en el Capítulo I (crítica a Brathwaite/Bolland) y en el análisis de la creolización del propio tambú en el Capítulo IX; funciona como interlocutor historiográfico, no como marco organizador que la autora adopte (prefiere "complejidad cultural" de Olwig). |
| C9 (Archivos vivos, espiritualidades y saberes transmitidos) | SECUNDARIA ESTRUCTURANTE | El Capítulo IX completo (cosmología, tambú, brujería/*brua*, ritual *wak èzè*) es denso y sustantivo, pero el propio capítulo se declara continuación subordinada de VII–VIII, no argumento autónomo. |
| C10 (Cuerpos, parentescos y eróticas) | SECUNDARIA ESTRUCTURANTE | El Capítulo VIII completo (matrimonio, género, disputas domésticas, herencia de tierra por parentesco) es igualmente denso, pero explícitamente enmarcado como respuesta al *bida drechi* impuesto por la Iglesia y a la política de tierra del Estado hacia las mujeres solteras. |

**Nota de incidencia de clasificación**: la evidencia de C9 y C10 es abundante y no debe confundirse, según exige el mandato (§7), con capacidad estructurante autónoma; ambas corrientes superan holgadamente el umbral de CONTEXTUAL pero no alcanzan el de ESTRUCTURANTE en sentido pleno, por las razones desarrolladas en los §18–20.

## 18. Seis pruebas (aplicadas a C4 frente a C9 y C4 frente a C10, únicas candidatas sobrevivientes tras el §17)

1. **Causalidad**: el control estatal-eclesiástico (C4) se presenta como la condición causal que genera el marco dentro del cual se despliegan las prácticas espirituales (C9) y de parentesco (C10); no se argumenta la relación inversa en ningún punto de la obra.
2. **Finalidad**: la finalidad explícita de los Capítulos VIII y IX —declarada por la propia autora— es iluminar cómo los afrocurazoleños "dieron sentido" a su vida *dentro* del marco de control ya establecido en V–VI, no producir una tesis autónoma sobre parentesco o espiritualidad afrocaribeña como tales.
3. **Criterio de valoración**: la Conclusión valora explícitamente la obra por su aporte a la comprensión de la relación entre poder y cultura, no por su aporte a la historia de la religión afrocaribeña ni a la historia de la familia caribeña como campos autónomos.
4. **Dependencia**: C9 y C10 dependen conceptualmente del marco C4 para su propia significación tal como la define la autora (*bida drechi* se define en relación directa con la Iglesia; el *tambú* se define en relación directa con su persecución y tolerancia variable por el Estado y la Iglesia). C4, en cambio, no depende de C9 ni de C10 para sostenerse: los Capítulos IV y V argumentan el aparato de control sin necesitar el contenido espiritual o de parentesco.
5. **Retirada**: ver §19 (desarrollo completo).
6. **Dominancia**: C4 es dominante de manera consistente y verificable en cuatro puntos estructurales distintos de la obra: (a) el marco teórico de la Introducción; (b) dos capítulos íntegros dedicados a su desarrollo (V y VI) que preceden a los capítulos empíricos; (c) la formulación explícita de la pregunta rectora en la apertura del Capítulo VII, que subordina los tres dominios empíricos a "the parameters of the two key institutions with power"; (d) la Conclusión, que retoma "the close relationship between culture and power" como el eje mismo del libro. C9 y C10 nunca alcanzan ese estatus dominante en ningún punto de la obra; permanecen dominios empíricos paralelos y estructuralmente equivalentes entre sí — ninguno subordina al otro, pero ambos se subordinan consistentemente a C4.

No se recurre en ningún momento a lenguaje de "gana/pierde": las relaciones descritas son de dependencia conceptual y de marco/dominio, no de competencia.

## 19. Retirada individual (prueba reforzada)

- **Retirar C9** (Cap. IX completo): se pierde un dominio empírico (la vida espiritual) y sus ejemplos (Nanzi, tambú, taxonomía de espíritus, *brua*, *wak èzè*). No se destruye el mecanismo explicativo (el marco de control Estado/Iglesia sigue intacto en V–VI) ni la arquitectura argumental general (la tesis sobre poder y cultura se sostiene con VII y VIII).
- **Retirar C10** (Cap. VIII completo): se pierde un dominio empírico (vida familiar y de género) y sus ejemplos (*bida drechi*, disputas domésticas, denegación de tierra a mujeres solteras). Igualmente, no se destruye el mecanismo explicativo ni la arquitectura general (la tesis se sostiene con VII y IX).
- **Retirar C4** (Caps. IV, V y VI): se destruye el mecanismo explicativo completo (el control estatal-eclesiástico como marco causal) y con él la arquitectura argumental entera — la Introducción pierde su marco teórico aplicado, la pregunta rectora del Capítulo VII pierde su segundo término ("the parameters of the two key institutions with power"), y la Conclusión pierde el objeto mismo de su síntesis ("the close relationship between culture and power").

**Conclusión de la prueba de retirada**: solo la retirada de C4 alcanza el nivel de destrucción del mecanismo explicativo y de la arquitectura argumental que el mandato (§9) exige para justificar afirmaciones fuertes de irreductibilidad. Las retiradas de C9 y C10 producen, cada una, pérdida de un dominio y de sus ejemplos — un nivel de pérdida que el propio mandato identifica como insuficiente para tales afirmaciones.

## 20. Dominancia

Desarrollada en el punto 6 del §18. C4 domina de forma consistente en cuatro momentos estructurales independientes de la obra (marco teórico, capítulos dedicados, formulación de la pregunta rectora, síntesis conclusiva). No se observa ausencia de dominancia: por el contrario, la dominancia de C4 es inusualmente explícita, al estar declarada por la propia autora y no solo inferida por el analista.

## 21. Arquitecturas especiales — evaluación y descarte razonado

### 21.1. `FRONTERA_CONSTITUTIVA` — prueba adversarial del §10 del mandato (aplicada a C4↔C9 y C4↔C10)

1. *¿Las dos corrientes argumentan el mismo problema desde dimensiones irreductibles?* No. C9 y C10 son dominios empíricos a través de los cuales se ilustra el argumento de C4 (poder/control institucional), no dimensiones irreductibles co-argumentando el mismo problema desde dentro.
2. *¿Puede una funcionar como mecanismo, contexto, condición de origen o dominio de la otra?* Sí, y de manera explícita: la propia autora encuadra los Capítulos VII–IX como "dominios" (material, social, espiritual) de una sola dinámica de poder/cultura.
3. *¿La retirada de ambas es verdaderamente destructiva?* No (ver §19): la retirada de C9 o de C10, individualmente, deja intactos el mecanismo explicativo y la arquitectura.
4. *¿Existe ausencia de dominancia consistente?* No: existe dominancia consistente y reiterada de C4 (ver §18.6 y §20).
5. *¿Una arquitectura principal/secundaria representaría la obra sin deformación sustantiva?* **Sí**, y sin forzamiento: C4 como principal, con C9 y C10 como secundarias, describe con precisión la arquitectura que la propia autora declara para su libro.

Conforme a la instrucción explícita del mandato ("si la respuesta a 5 es sí: NO declares frontera"), **se descarta `FRONTERA_CONSTITUTIVA`**. Se deja constancia expresa de que este descarte no obedece a un prejuicio contra las fronteras ni a la mera repetición estadística de arquitecturas especiales en el resto del sublote (expresamente irrelevante según el propio mandato), sino a que la prueba adversarial de las cinco preguntas fue superada punto por punto por la arquitectura ordinaria.

### 21.2. `SINTESIS_MULTICORRIENTE`

No aplica. El mandato exige tres o más corrientes individualmente co-necesarias, con retirada individual destructiva para cada una. Aquí solo C4 supera la prueba de retirada reforzada (§19); C9 y C10 son ambas retirables individualmente sin destruir la arquitectura. La necesidad conjunta del grupo (C4+C9+C10) para la riqueza empírica del libro no equivale, como advierte el propio mandato, a la necesidad individual de cada miembro.

### 21.3. `VACÍO_TAXONÓMICO_POSIBLE`

Se aplicó la prueba adversarial del §12 del mandato al candidato más plausible de "principio ausente": el concepto de "complejidad cultural" (tomado de Olwig 1993), que en la Conclusión funciona como el término de cierre de toda la obra. (1) El principio identificado —una noción de agencia cultural irreductible a la bipolaridad resistencia/dominación— pertenece efectivamente a la obra, siendo su término de cierre explícito. (2) Se intentó traducirlo mediante cada corriente plausible: como C4 (control institucional y respuesta laboral) cubre la dimensión de poder/dominación estructural; como C9+C10 (dominios secundarios) cubren la dimensión de agencia cultural cotidiana. (3) La combinación C4-principal + C9/C10-secundarias traduce sin residuo el argumento completo: el "poder" es C4, la "cultura" (en sus tres registros) es la suma de VII+VIII+IX, y la síntesis entre ambos es precisamente lo que la arquitectura principal/secundaria ya captura estructuralmente. (4) No se identifica un residuo conceptual indispensable para la tesis que quede fuera de esa traducción. **No se recomienda `VACÍO_TAXONÓMICO_POSIBLE = SÍ`.** No se usó `cuijla` como analogía sustantiva en este razonamiento, conforme exige el mandato.

## 22. Arquitectura recomendada

**Arquitectura ordinaria**: C4 como corriente principal (`recorrido`); C9 y C10 como corrientes secundarias (`recorridos_sec`). Esta recomendación no constituye una decisión académica (prohibida por el §18 del mandato) sino el resultado razonado de la lectura probatoria, a título de insumo para la decisión que corresponde emitir por separado a la Dirección Académica.

Se deja constancia de que esta recomendación **no presupuso** el resultado desde el inicio: el mandato exigió explícitamente (§2) no presuponer una arquitectura especial ni buscar frontera/síntesis/vacío salvo que la obra obligara a ello, y la obra, en efecto, no obligó a ninguna de las tres — más aún, la propia autora declaró por sí misma, en cuatro puntos estructurales distintos e independientes del texto, exactamente la arquitectura ordinaria que aquí se recomienda.

## 23. Incidencias (registradas por categoría, sin corrección automática)

- **Bibliográficas**: ninguna incidencia significativa detectada en la identidad bibliográfica del nodo (autora, título, año, editorial confirmados contra el archivo fuente).
- **Editoriales**: el resumen final del libro está en papiamentu (físicas 301–304), no en español ni en el neerlandés del *Samenvatting* que lo precede (297–300); se registra como observación editorial, sin implicación clasificatoria.
- **Territoriales**: ninguna incidencia; el territorio heredado `curazao` es plenamente consistente con el contenido.
- **Temporales**: ninguna incidencia; el marco 1863–1917 está explícitamente delimitado y argumentado por la propia autora.
- **Conceptuales**: el concepto de cierre de la obra ("complejidad cultural") es importado de un tercer autor (Olwig 1993) y no es nativo de ninguna corriente C1–C10 aisladamente; se evaluó bajo `VACÍO_TAXONÓMICO_POSIBLE` (§21.3) y se descartó como vacío, pero se deja constancia de la importación conceptual como dato relevante para lectura futura.
- **Taxonómicas**: C8 (creolizaciones) se evalúa como CONTEXTUAL en lugar de AUSENTE precisamente porque la autora posiciona su obra en diálogo crítico explícito con ese paradigma (Brathwaite/Bolland), aunque termine prefiriendo un concepto distinto ("complejidad cultural") para su síntesis final. Se registra para que la clasificación CONTEXTUAL no se lea como participación débil sino como interlocución historiográfica deliberada y explícita.
- **Relaciones**: ver desarrollo completo en el §24 — la justificación registrada para la relación `allen_dikimanera → tambu` (mención de "Nanette de Jong") no resultó verificable en el texto y aparenta ser errónea o referida a otra fuente.
- **Etiquetas**: la etiqueta heredada `postplantacion` resulta ampliamente confirmada por la lectura; la etiqueta `memoria` también resulta ampliamente confirmada (la metodología oral es central y explícita, no periférica, a diferencia de lo señalado como "respaldo débil" en el precedente procedimental de `olwigstjohn` — se aclara expresamente que esa comparación es solo procedimental y no analógica, conforme exige el §2 del mandato).
- **Metadatos**: ninguna incidencia detectada en los metadatos del nodo distintos de los ya señalados.

## 24. Auditoría de relaciones

### 24.1. `allen_dikimanera → tambu` (resonancia)

- **Fuente registrada en el corpus**: "Allen menciona el trabajo de Nanette de Jong sobre el tambú curazoleño (referencia puntual verificada); ambas comparten archivo etnográfico de Curazao."
- **Autor/obra/edición/año**: no aplicable de forma directa — la relación no cita una obra específica de Nanette de Jong, sino que afirma una mención dentro del texto de Allen.
- **Dirección**: `allen_dikimanera → tambu` (Allen menciona al trabajo asociado al nodo `tambu`).
- **Cronología**: compatible en principio (Nanette de Jong es investigadora activa en musicología afrocaribeña desde los años 1990).
- **Tipo de vínculo declarado**: cita textual puntual ("referencia puntual verificada").
- **Resultado de la auditoría**: se realizaron búsquedas exhaustivas de "Jong" y de "Nanette" en la totalidad del texto extraído. La única aparición de "Jong" corresponde a **Janny de Jong**, historiadora, coautora (con Gé Prince y Hugo s'Jacob) de *Niet-westerse geschiedenis* (1998), citada una única vez en el Capítulo I en el contexto de la crítica a la historiografía "neerlandocéntrica" — una persona distinta, un tema distinto (historiografía general, no etnomusicología del tambú) y una obra distinta. La cadena "Nanette" no aparece en ningún punto del texto extraído. En cambio, la discusión sustantiva del tambú en la obra —extensa, con 104 apariciones de la cadena— se apoya casi enteramente en **René Rosalia** (1997, 2002), con referencias adicionales a Paul Brenneker, Jan Paul Delgeur, Jennie Smith y Richard Burton, no en ningún trabajo firmado por una autora de apellido "de Jong".
- **Conclusión de la auditoría**: la justificación específica registrada para esta relación (mención de Nanette de Jong) **no resulta verificable en el texto leído** y aparenta ser una confusión de homónimos (con Janny de Jong) o una referencia a una fuente distinta a la aquí examinada. No se corrige la relación, conforme al §16 del mandato ("no corrijas automáticamente ninguna"); se registra como incidencia de relaciones. Se deja constancia, a título informativo y sin implicar corrección, de que la sustancia temática de la relación (afinidad etnográfica en torno al tambú curazoleño) sí está ampliamente respaldada por el texto, aunque no por la vía bibliográfica específica declarada.

### 24.2. `vanderpijl_equaliberty → allen_dikimanera` (resonancia)

- **Fuente registrada en el corpus**: "El volumen cita directamente a Rose Mary Allen y su Di ki manera? sobre la historia social afrocurazoleña. Cita verificada."
- **Dirección**: entrante — el nodo `vanderpijl_equaliberty` cita a `allen_dikimanera`, no a la inversa.
- **Cronología**: compatible — `allen_dikimanera` (2007) puede ser citada por una obra posterior de van der Pijl; no existe incompatibilidad cronológica aparente.
- **Resultado de la auditoría**: no se encontró ninguna aparición de "van der Pijl" ni de "Equaliberty" en el texto de Allen — resultado plenamente esperado, dado que la relación afirma que es el volumen de van der Pijl el que cita a Allen, y no al revés; el texto de Allen (2007) no podría, en ningún caso, citar una obra posterior. Esta relación **no es verificable ni refutable desde el lado de `allen_dikimanera`**: su verificación depende enteramente de la lectura del propio nodo `vanderpijl_equaliberty`, tarea fuera del alcance de esta lectura probatoria centrada en Allen. No se detecta incidencia; se registra como `ANTECEDENTE_POR_AUDITAR` sin evidencia contraria ni confirmatoria desde este lado.

### 24.3. Atención especial — homónimo detectado en relación con el corpus (Karen Fog Olwig)

El Capítulo I de la obra cita extensa y repetidamente a "Olwig" (1993, 1995a, 1995c) como inspiración metodológica directa para el concepto central de "complejidad cultural" que cierra la obra en el Capítulo X. Se verificó en la bibliografía de Allen que estas citas corresponden a **Karen Fog Olwig, *Global Culture, Island Identity: Continuity and Change in the Afro-Caribbean Community of Nevis* (1993)** — obra que **no es la misma** que la representada en el corpus por el nodo `olwigstjohn` (*Cultural Adaptation and Resistance on St. John*, 1985, sobre las Islas Vírgenes danesas/St. John). Se trata de la misma autora, pero de dos obras distintas, sobre dos territorios distintos (Nevis frente a St. John), publicadas en años distintos (1993 frente a 1985). Este es precisamente el tipo de situación que el §14 del mandato identifica como riesgo ("autores con varios libros en el corpus... no confundas relación autoral con relación obra-a-obra"). Se deja constancia expresa: **la extensa presencia de "Olwig" en el Capítulo I de `allen_dikimanera` no constituye evidencia de relación con `olwigstjohn`**, sino, como se desarrolla en el §25, evidencia de una posible relación con un nodo distinto ya existente en el corpus: `globalculture`.

## 25. Candidaturas nuevas (`CANDIDATURA_RAZONADA_NO_IMPLEMENTADA`)

### 25.1. `allen_dikimanera → globalculture`

- **Obra identificable**: Karen Fog Olwig, *Global Culture, Island Identity: Continuity and Change in the Afro-Caribbean Community of Nevis* (1993).
- **Nodo existente identificable**: `globalculture` (confirmado en el corpus: `"a":"Karen Fog Olwig", "t":"Global Culture, Island Identity...", "y":"1993", "l":"nevis", "estado_recorrido":"pendiente"`, sin relación actual con `allen_dikimanera`).
- **Cronología compatible**: sí — 1993 precede a 2007 sin conflicto.
- **Función argumental verificable**: la obra de Olwig (1993) no es mencionada de pasada, sino citada explícitamente en el Capítulo I como el marco teórico-metodológico directo del que Allen extrae su modelo de "complejidad cultural" — el concepto que, según se estableció en el §21.3, cierra y organiza la Conclusión (Capítulo X) de toda la obra. La cita "Olwig 1993:6" reaparece además en el Capítulo III como respaldo directo de la decisión metodológica de tratar la esclavitud como antecedente y no como objeto. Se trata, por tanto, de una relación de filiación teórica sostenida y estructuralmente significativa, no de una resonancia incidental.
- **Clasificación**: `CANDIDATURA_RAZONADA_NO_IMPLEMENTADA`. No se implementa relación alguna, conforme al §15 y al §18 del mandato.
- **Nota adicional**: se observa que el corpus ya registra una relación análoga de continuidad autoral, `caribjourneys → globalculture` ("Continuidad de autor (Olwig)"), lo que sugiere que una relación `allen_dikimanera → globalculture` sería coherente en tipo (resonancia por filiación teórica de autora) con el patrón ya existente en el corpus, aunque su fundamento aquí es más fuerte que una mera continuidad de autor: es una filiación conceptual declarada explícitamente por la propia Allen.

No se identificaron otras candidaturas nuevas con obra, nodo, cronología y función argumental verificables dentro del alcance de la lectura realizada. Las referencias a Olwig 1995a y 1995c, aunque presentes en la bibliografía de Allen, no fueron objeto de esta búsqueda de nodo correspondiente en el corpus y no se proponen como candidatura sin esa verificación adicional.

## 26. Pregunta decisoria

¿Debe la Dirección Académica confirmar `allen_dikimanera` como arquitectura ordinaria con C4 como corriente principal y C9 y C10 como corrientes secundarias — de acuerdo con la recomendación razonada de esta lectura probatoria (§22), sustentada en cuatro puntos de auto-declaración estructural convergente por parte de la propia autora y en el descarte explícito y punto por punto de las tres arquitecturas especiales (§21) — o considera la Dirección Académica que algún elemento de esta lectura requiere ampliación dirigida antes de decidir?

---

# AMPLIACIÓN DIRIGIDA — REVISIÓN DE LA RELACIÓN C4/C10

## A.1. Qué premisa anterior era incorrecta

El razonamiento original (§§17–22) trató "control estatal-eclesiástico" como una categoría unificada y la asignó en bloque a C4, sin descomponerla en sus dos aparatos institucionales distintos. Esa premisa era incorrecta por dos razones, ambas señaladas por la Dirección Académica y confirmadas por la relectura íntegra de los Capítulos VI y VIII:

1. **Error de contenido.** El aparato estatal (tierra, *paga tera*, trabajo, vagancia, desposesión) es efectivamente C4 por su contenido. Pero el aparato eclesiástico opera casi enteramente a través de matrimonio, legitimidad/ilegitimidad de los hijos, virginidad, moral sexual, bautismo diferenciado, confesión y comunión — es decir, a través de **cuerpos, parentescos y regulación de la sexualidad**, el contenido que define C10 en este corpus. Clasificar ese aparato como C4 solo por su *función* (control institucional) y no por su *dominio* (cuerpo/parentesco/sexualidad) traiciona el criterio de clasificación por contenido que el propio corpus usa para distinguir C4 de C10 en los demás casos del sublote.
2. **Error de dominancia no verificada.** El §18.6 y el §20 de la lectura original afirmaron dominancia "consistente" de C4 sin haber leído íntegramente el propio cierre del Capítulo VI, que contiene una afirmación textual expresa de sentido contrario.

## A.2. Qué evidencia nueva se leyó

Se leyeron íntegramente, palabra por palabra, los Capítulos VI (físicas 149–178) y VIII (físicas 217–236), incluidas todas las secciones intermedias no cubiertas en la lectura original ("Poor Relief", "The Union of Marriage", "Punitive and Encouraging Acts", "Creating Respectable Citizens", "Creating a Work Ethic", "Response to the Civilizing Mission" y la Conclusión propia del Cap. VI; "Poverty and its Impact on the Bida Drechi", "The Extended Family and Bida Drechi", la Tabla 8.1 de parentesco y la Conclusión propia del Cap. VIII). Se contrastaron puntualmente pasajes de la Introducción, el Capítulo VII y la Conclusión general, sin releerlos íntegramente, conforme autoriza el mandato.

Hallazgos decisivos:

- **El Capítulo VI tiene su propia sección de "Conclusion"** (líneas 8025–8057 del extracto), que afirma explícitamente: *"The Roman Catholic Church was the prime institution exercising authority and control over the lives of Afro-Curaçaoans... The Church succeeded in pervading the private lives of people in a way the State never did."* Esta es una afirmación textual expresa de **primacía de la Iglesia sobre el Estado**, no de subordinación de la Iglesia al marco estatal. Contradice directamente cualquier presunción de dominancia consistente de C4.
- **El Capítulo VI se dedica casi por completo a tecnologías de control sobre el cuerpo y el parentesco**: el sistema de bautismo de dos niveles (*yunan di klaridat* / *yunan di skuridat*, "hijos de la luz" / "hijos de la oscuridad"), el entierro diferenciado en el *chiké* para quienes cohabitaban sin matrimonio, el registro de confesión y comunión pascual como mecanismo de vigilancia moral (Tabla 6.2), el control de la virginidad femenina a través de la Legión de María (*kongregashi*), y la regulación misma del matrimonio (*salta garoti*, matrimonio civil vs. eclesiástico, legitimidad de los hijos). Es, en contenido, un capítulo de C10 puesto al servicio de un objetivo de control institucional — no un capítulo de C4 con ilustraciones C10.
- **El Capítulo VIII tiene igualmente su propia "Conclusion"** (líneas 10864–10893), que cierra explicando que el concepto de *bida drechi* —analizado durante todo el capítulo— fue "introducido por la Iglesia católica" y que **la pobreza (un factor económico, C4) dificultó sostener ese código moral**: *"poverty made it difficult for people to maintain the moral code of the bida drechi... migrated... which affected how well couples could and would live up to this model of family life."* Esto muestra que el propio libro liga explícitamente la *realización* del proyecto eclesiástico (C10) a la *condición económica* producida por el aparato estatal (C4) — es decir, plantea una relación de mutua condición, no una relación de subordinación unidireccional de C10 a C4.
- **Arquitectura de capítulos por pares, simétrica en su planteamiento**: Cap. V (imposición estatal, tierra/trabajo, C4) empareja con Cap. VII (respuesta económica, C4); Cap. VI (imposición eclesiástica, matrimonio/cuerpo/parentesco, C10) empareja con Cap. VIII (respuesta familiar/de género, C10). Ambos pares de capítulos de imposición (V y VI) tienen una extensión casi idéntica (27 y 29 páginas impresas respectivamente), lo que refuerza que la autora dio a ambos aparatos un desarrollo comparable, no un desarrollo principal/secundario.
- **Punto de articulación confirmado y ahora mejor evidenciado**: la denegación de tierra a mujeres solteras (Cap. VIII, ya registrada en la lectura original) muestra al aparato estatal (C4) reforzando directamente una norma matrimonial de origen eclesiástico (C10) — un entrecruzamiento real, aunque parcial, entre ambos aparatos, no una simple independencia paralela.

## A.3. Nueva causalidad C4/C10 (§4 del mandato de ampliación)

- **¿Qué pretende producir el Estado mediante tierra, trabajo y vagancia?** Una fuerza de trabajo dependiente, geográficamente inmóvil y disciplinada, mediante el sistema de *paga tera* y la denegación sistemática de tierra a quienes "querían actuar por su cuenta".
- **¿Qué pretende producir la Iglesia mediante matrimonio, moral sexual, familia y respetabilidad?** Un sujeto católico "civilizado", organizado en torno al matrimonio monógamo, la legitimidad de los hijos y la pureza sexual femenina — un proyecto de disciplinamiento del cuerpo y del parentesco, explícitamente comparado por la propia Iglesia con los estándares "civilizados" europeos.
- **¿Forman una sola lógica C4, dos dimensiones C4 y C10, C10 solo como respuesta, o C10 en imposición y respuesta simultáneamente?** La evidencia obliga a la última opción: **C10 aparece simultáneamente en la imposición (Cap. VI, aparato eclesiástico sobre cuerpo/matrimonio/parentesco) y en la respuesta (Cap. VIII, vida familiar y de género afrocurazoleña)**. No es reducible a "dominio empírico" posterior a una causalidad C4 ya cerrada: es ella misma, en su propio capítulo de imposición, un aparato causal con contenido C10, que la propia autora considera —en la conclusión del Cap. VI— más penetrante que el aparato estatal.

## A.4. Retirada completa de C10 (§5 del mandato de ampliación)

Retirado todo el material genuinamente C10 (el aparato matrimonial/bautismal/de virginidad del Cap. VI casi en su totalidad; el Cap. VIII casi en su totalidad; los pasajes sobre matrimonio y sexualidad dispersos en otros capítulos): se pierde el segundo de los dos términos que la propia obra declara como "the parameters of the two key institutions with power" en la apertura del Capítulo VII. Se pierde también el fundamento evidencial completo de la afirmación de primacía eclesiástica del cierre del Cap. VI. La pregunta rectora reconstruida en el §9 de este documento —formulada explícitamente en torno a dos instituciones— queda coja de una de sus dos mitades. **Resultado: destrucción de la arquitectura**, no mera pérdida de dominio o de ejemplos — el propio armazón dual que la autora anuncia y sostiene durante seis capítulos (I, V, VI, VII, VIII, X) deja de estar completo.

## A.5. Retirada completa de C4 (§6 del mandato de ampliación)

Retirado exclusivamente el material de tierra/trabajo/*paga tera*/vagancia/desposesión (Cap. V casi en su totalidad; el material económico del Cap. VII), sin retirar la regulación eclesiástica de matrimonio/familia/sexualidad: ¿puede sostenerse una parte estructuralmente autónoma de la tesis mediante Iglesia → respetabilidad → vida familiar/social? Parcialmente, pero de forma dañada: la propia conclusión del Capítulo VIII liga explícitamente el éxito o fracaso de la *bida drechi* a la pobreza y a la migración económica —factores C4—, de modo que sin el aparato económico se pierde el mecanismo explicativo que la autora usa para dar cuenta de la *variación* en el cumplimiento del ideal eclesiástico (por qué unas familias lo lograron y otras no). También desaparece el otro término de "the two key institutions with power". **Resultado: igualmente, destrucción de la arquitectura**, no mera pérdida de dominio.

**Conclusión de ambas retiradas**: a diferencia de lo que ocurría con C9 (cuya retirada, verificada en el §19 original y no alterada por esta ampliación, deja intacto el mecanismo explicativo), las retiradas de C4 y de C10 alcanzan ambas, de forma simétrica, el nivel de destrucción de la arquitectura argumental que el mandato exige para una afirmación fuerte de irreductibilidad. Esta es una diferencia cualitativa, no solo de grado, respecto de la relación de C9 con el resto de la obra.

## A.6. Seis pruebas bilaterales C4↔C10 (§7 del mandato de ampliación)

1. **Causalidad**: dos aparatos causales distintos e irreductibles entre sí (disciplina económica vía tierra/trabajo; disciplina corporal/moral vía matrimonio/bautismo/confesión), que convergen sobre la misma población sin que uno derive del otro, salvo en el punto de articulación puntual ya señalado (tierra denegada a mujeres solteras).
2. **Finalidad**: ambos aparatos comparten una finalidad convergente de largo alcance (producir un sujeto postplantación disciplinado y dependiente), pero la persiguen por vías genuinamente distintas y cada una con su propia lógica interna (económica vs. sacramental-moral), documentadas cada una en un capítulo dedicado de extensión comparable.
3. **Criterio de valoración**: la obra no privilegia textualmente un aparato sobre el otro de forma estable; el Cap. VI reclama primacía eclesiástica, mientras el Cap. VIII hace depender el éxito de esa primacía de condiciones económicas — el criterio de valoración de la obra (comprender "the close relationship between culture and power") no distingue entre ambos aparatos como fuente principal o secundaria del argumento.
4. **Dependencia**: dependencia mutua y parcial, no unidireccional — el aparato eclesiástico depende del aparato económico para su realización efectiva (Cap. VIII); el aparato estatal recurre puntualmente a criterios eclesiásticos (matrimonio) para regular el acceso a la tierra (Cap. VIII). Ninguno de los dos es un mero instrumento del otro.
5. **Retirada**: ambas retiradas son destructivas de la arquitectura (§§A.4–A.5), no meramente de dominio o ejemplo — a diferencia de C9.
6. **Dominancia**: **ausencia de dominancia consistente**, confirmada textualmente: el Cap. VI declara primacía eclesiástica sobre el Estado; el Cap. VIII hace depender esa primacía de condiciones materiales controladas por el aparato estatal. La obra no resuelve esta tensión a favor de ningún término; la sostiene abierta hasta la Conclusión general, que habla de "las dos instituciones de poder" sin jerarquizarlas.

## A.7. Tres arquitecturas comparadas (§8 del mandato de ampliación)

**A. Arquitectura ordinaria (C4 principal + C10 secundaria).** Se descarta. Requeriría que, tras retirar del aparato eclesiástico el material que no le corresponde a C4, C10 permaneciera realmente subordinada. La relectura íntegra muestra lo contrario: lo que queda del Capítulo VI al aislar su contenido genuinamente C10 (matrimonio, bautismo, virginidad, confesión) es la columna vertebral entera del capítulo, no un residuo menor, y esa columna sostiene la propia afirmación de primacía eclesiástica del texto.

**B. `FRONTERA_CONSTITUTIVA(C4, C10)`.** Se sostiene, por concurrencia de las cinco condiciones del §10 del mandato original: (1) ambas corrientes argumentan el mismo problema (poder y vida cotidiana postplantación) desde dimensiones irreductibles (económica vs. corporal-moral); (2) no hay subsunción global de una en la otra, solo articulación puntual; (3) ambas retiradas son destructivas de la arquitectura (§§A.4–A.5); (4) no existe dominancia consistente (§A.6.6); (5) una arquitectura principal/secundaria deformaría sustantivamente la obra, al resolver en un solo sentido una tensión que el propio texto mantiene abierta entre los Capítulos VI y VIII. **Se recomienda esta arquitectura**, en sustitución de la recomendación original del §22.

**C. C4 principal + C9/C10 secundarias.** Se descarta como arquitectura completa por las mismas razones que descartan a A, pero se conserva parcialmente: C9 sí permanece como secundaria (ver §A.8), ahora subordinada a la frontera C4/C10 en lugar de subordinada a un C4 único.

## A.8. Estatus de C9

Conforme instruye el mandato de ampliación, no se reabrió extensamente C9. La lectura íntegra del Capítulo VI no reveló contenido espiritual/cosmológico (creencias sobre Dios, espíritus, brujería, rituales agrícolas) que perteneciera a su desarrollo: el capítulo se ocupa de matrimonio, bautismo, virginidad, confesión, educación y socorro a los pobres — disciplina institucional y moral, no cosmología. El dominio espiritual sigue siendo desarrollado de forma autónoma y exclusiva en el Capítulo IX. **Se mantiene: `C9 = SECUNDARIA ESTRUCTURANTE`**, ahora subordinada a la nueva frontera C4/C10 en lugar de subordinada a C4 en solitario. La prueba de retirada de C9 realizada en el §19 original permanece válida y no se contradice por la nueva lectura: retirar C9 sigue dejando intacto el mecanismo explicativo dual (Estado/tierra + Iglesia/matrimonio) que ahora se reconoce como el verdadero núcleo causal de la obra.

## A.9. Resultado de la prueba sobre `bida` (§10 del mandato de ampliación)

`Bida` sigue funcionando como un dispositivo de organización expositiva de tres dominios empíricos (material, social, espiritual), ahora mejor descritos como los dominios de despliegue de una frontera C4/C10 (con C9 secundaria) en vez de una jerarquía C4-principal. La traducción mediante las corrientes —incluida la corrección de esta ampliación— sigue siendo suficiente: no aparece ningún residuo conceptual que la taxonomía corregida no capture. **Se conserva: `VACÍO_TAXONÓMICO_POSIBLE = NO`.** No se usó `cuijla` como analogía en este juicio.

## A.10. Relaciones e incidencias

Sin cambios respecto de los §23–25 del documento original. Las auditorías de `allen_dikimanera → tambu`, `vanderpijl_equaliberty → allen_dikimanera` y la candidatura `allen_dikimanera → globalculture` permanecen tal como se registraron; esta ampliación no introduce evidencia nueva sobre ninguna de las tres. Se añade una incidencia conceptual nueva: la afirmación de primacía eclesiástica del cierre del Cap. VI ("in a way the State never did") debía haberse registrado y ponderada en la primera lectura y no lo fue con el peso suficiente — se deja constancia como incidencia de método de lectura, sin que ello implique corrección retroactiva silenciosa del documento original, que permanece íntegro más arriba.

## A.11. Conclusión de la ampliación

La arquitectura recomendada cambia de **C4 principal + C9/C10 secundarias** (§22 original) a **`FRONTERA_CONSTITUTIVA(C4, C10)` con C9 secundaria estructurante subordinada a la frontera**. El cambio no obedece a la repetición estadística de fronteras en el sublote —expresamente irrelevante— sino a que la relectura íntegra y palabra por palabra de los Capítulos VI y VIII, exigida por esta ampliación, sacó a la luz dos elementos que la lectura original no había ponderado con suficiente peso: (a) el contenido del aparato eclesiástico es, por dominio, genuinamente C10 y no una variante de C4; y (b) el propio texto, en los cierres independientes de los Capítulos VI y VIII, sostiene una tensión de dominancia no resuelta entre el aparato estatal y el eclesiástico, en lugar de subordinar consistentemente uno al otro.

---

**Estado final de esta lectura probatoria (tras ampliación dirigida):**

`LISTO_PARA_DECISION`

**DETENTE.**
