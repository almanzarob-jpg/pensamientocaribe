# LECTURA PROBATORIA — CASO 8/10 — `abello` — P3-A · Etapa 2.3H

**Naturaleza del documento:** expediente de lectura probatoria desde cero, generado en ejecución exclusiva de la instrucción "P3-A · CASO 8/10 — LECTURA PROBATORIA DESDE CERO" (Etapa 2.3H). No constituye decisión académica. No implementa recorridos. No modifica `datos-atlas.js`, `datos-atlas.json`, etiquetas, metadatos, relaciones, cola, protocolos, dictámenes C1–C10, matriz de fronteras ni marco consolidado. No usa los Casos 1–7 como precedente sustantivo. Al cierre de este documento: **DETENTE.**

---

## §0. Control de cierre del Caso 7 (`mintzpricebirth`)

Verificación read-only en `data/agua-de-por-medio/datos-atlas.js` (nodo `mintzpricebirth`, `.obras[208]`):

```json
{
  "id": "mintzpricebirth",
  "recorrido": null,
  "recorridos_sec": [],
  "arquitectura_recorrido": null,
  "estado_recorrido": "pendiente"
}
```

**Discrepancia técnica sustancial encontrada.** La `decision-academica-mintzpricebirth-p3-etapa-2-3h.md` (§12) aprobó, pero **explícitamente no implementó**, la arquitectura:

```
recorrido: "c8", recorridos_sec: ["c2"], arquitectura_recorrido: null,
estado_recorrido: "confirmado", fuente_recorrido: ["decision-academica-mintzpricebirth-p3-etapa-2-3h.md"]
```

El nodo real en `datos-atlas.js` permanece sin tocar (`recorrido: null`, `estado_recorrido: "pendiente"`, sin campo `fuente_recorrido`). Esto es coherente con el estado documentado de la decisión (`APROBADA_PARA_IMPLEMENTACION_POSTERIOR` / `NO_IMPLEMENTADA`), no una contradicción con ella — pero sí una discrepancia respecto de lo que §0 de esta instrucción presupone ("verifica que exista la implementación técnica aprobada"). Se documenta y **no se corrige** aquí; la implementación está fuera de alcance de esta tarea.

No se reabre la interpretación académica del Caso 7. No se vuelve a decidir C8/C2/C10 de `mintzpricebirth`.

Diagnóstico de este control: `CASO_7_CERRADO_ACADEMICAMENTE_PERO_NO_IMPLEMENTADO_TECNICAMENTE` — se continúa de inmediato al Caso 8, conforme lo autoriza la Dirección Académica, dejando constancia de la discrepancia.

---

## §1. Identificación obligatoria del Caso 8

Fuentes consultadas, en el orden mandado: (1) `apertura-recalibracion-p3-etapa-2-3g.md` §17 "Sublote P3-A"; (2) `cola-lectura-pendiente-atlas-2.md`; (3) nodo correspondiente en `datos-atlas.js`.

**§17 (apertura), tabla completa de P3-A**, orden interno sugerido 1→10: `duboisturits`(C3), `wilsoncrabantics`(C5), `cuijla`(C4), `olwigstjohn`(C4), `allen_dikimanera`(C2,C4), `aftershocks`(C6), `mintzpricebirth`(C3,C5) — fila 7, **ya leído y decidido como Caso 7/10** —, `abello`(C5) — **fila 8** —, `roberts`(C2,C3), `escalante`(C3).

Nota sobre un hallazgo que podía parecer una contradicción y que se verificó explícitamente para descartarla: en §18 (Sublote P3-B, tabla distinta e independiente de la de §17), la fila número **7 de esa otra tabla** corresponde a `fouchard` (C3, Haití, NO_LOCALIZADA). Se leyó el texto íntegro de §17 y §18 (no solo por grep) para confirmar que se trata de dos tablas con numeraciones internas independientes (P3-A tiene su propio 1–10; P3-B tiene otro 1–10 distinto) y que ninguna de las dos es la secuencia oficial "Caso N/10" fuera de P3-A. **No hay contradicción real**: `fouchard` es la fila 7 de la tabla de P3-B, no "Caso 7/10"; el Caso 7/10 (ya decidido) es `mintzpricebirth`, fila 7 de P3-A, la tabla que sí gobierna la numeración de "Caso N/10" para este sublote.

**Cola (`cola-lectura-pendiente-atlas-2.md`, línea 60):** entrada `abello` — autor/título/año "no mencionado" (la cola no lleva esos campos), corriente candidata **C5**, territorio "no indicada", origen: "universo pendiente de lectura (lista nominal, §11)", estado: "Nunca pasó por lote; pendiente de lectura, sin candidatura", estado_recorrido **PENDIENTE_NO_LEIDA**, lote **P3**, tipo **CORRIENTE**, pregunta abierta: "¿Corresponde a C5?", fuente: `dictamen-academico-c5.md` §11, sin observación adicional.

Se verificó además el contexto de esa referencia en `dictamen-academico-c5.md` §11 ("Universo pendiente de lectura"): `abello` es uno de los 40 ids que integran el "universo pendiente" de C5 construido por el método de unión de conjuntos B∪D∪E∪F (fenómenos compatibles, clasificaciones existentes, señales léxicas, herencia de C4) — es decir, es **candidato por método de construcción de universo, nunca leído, sin fase de candidatura documentada en Git**. Esto es antecedente a auditar, no evidencia.

**Coincidencia/contradicción entre apertura y cola:** ambas fuentes coinciden en que `abello` es el ítem correspondiente a la fila 8 de P3-A / al ítem correspondiente del universo pendiente de C5. **No hay contradicción** entre apertura y cola sobre la identidad del Caso 8. No aplica la regla de detención por contradicción del §1 de la instrucción.

**Identificación completa (informe previo a la lectura sustantiva):**

| Campo | Valor |
|---|---|
| Número de caso | 8/10 |
| `atlas-id` | `abello` |
| Autor/a | Alberto Abello Vives |
| Título | *La isla encallada: el Caribe colombiano en el archipiélago* |
| Año | 2015 (registrado en `datos-atlas.js`); edición impresa localizada: Siglo del Hombre Editores, 1ª ed., 2015-06-01 |
| Territorio | Cartagena / Caribe colombiano (continental) |
| Ruta exacta del archivo fuente | `Pagina/Biliografia /La isla encallada_ El caribe colombiano en el archipiélago -- Abello Vives, Alberto -- 1, 2015-06-01 -- Siglo del Hombre Editores Ltda -- 9789586653329 -- a23fadaa699758ac3f45c218a15d639f -- Anna's Archive.epub` |
| Edición efectivamente disponible | EPUB completo (texto íntegro: portada, prólogo, introducción, 8 capítulos, bibliografía) — coincide en título, autor, año y editorial con el registro bibliográfico del nodo |
| Estado actual del nodo | `recorrido: null`, `recorridos_sec: []`, `arquitectura_recorrido: null`, `estado_recorrido: "pendiente"` |
| Etiquetas heredadas (`f`) | `["soberanias", "colonialidad"]` — **antecedente a auditar, no evidencia** |
| `recorrido` heredado | ninguno (`null`) |
| `recorridos_sec` heredados | ninguno (`[]`) |
| `arquitectura_recorrido` heredada | ninguna (`null`) |
| Relaciones entrantes/salientes | 11 relaciones tipo `resonancia` que involucran a `abello` (detalle completo en §18 de este documento) |
| Observaciones de la cola | Universo pendiente C5 (método B∪D∪E∪F), nunca leído, pregunta abierta "¿Corresponde a C5?" |
| Coincidencia/contradicción apertura↔cola | Coinciden. Sin contradicción. |

Diagnóstico de §1: **IDENTIFICACIÓN CONFIRMADA SIN CONTRADICCIÓN — PROCEDE LECTURA SUSTANTIVA.**

---

## §2. Naturaleza probatoria de este documento

Este documento reporta una lectura académica probatoria e independiente del Caso 8/10, realizada desde cero, sin transferir la arquitectura de ningún caso anterior (1–7) como precedente sustantivo, y sin tratar como evidencia ninguna etiqueta, relación, resumen curatorial o clasificación heredada. Su función es dejar la obra en condiciones de ser decidida por la Dirección Académica, no decidirla.

## §3. Identidad bibliográfica

Alberto Abello Vives, *La isla encallada: el Caribe colombiano en el archipiélago*, Cartagena de Indias / Bogotá, Siglo del Hombre Editores – Observatorio del Caribe Colombiano – Universidad Tecnológica de Bolívar, 2015 (ISBN 9789586653329). Compilación de ocho ensayos —dos de ellos con coautoría (cap. 3 con Ernesto Bassi Arévalo)— con prólogo de Gustavo Bell Lemus (18 de octubre de 2014) e introducción del propio Abello Vives fechada en Cartagena de Indias, 17 de abril de 2014. Los ensayos fueron escritos y publicados originalmente en distintos momentos (2007–2014) y reunidos aquí "en un orden distinto al de su publicación original" (Introducción, §5).

## §4. Posición exacta como Caso 8/10

Fila 8 de la tabla del Sublote P3-A (§17 de `apertura-recalibracion-p3-etapa-2-3g.md`), en el orden interno sugerido 1→10 que gobierna la secuencia "Caso N/10" de este sublote. Ver §1 para el detalle completo de identificación y el descarte explícito de la falsa alarma de contradicción con la fila 7 de la tabla (distinta) de P3-B.

## §5. Archivo fuente

EPUB completo localizado en `Pagina/Biliografia /La isla encallada_...epub` (ver ruta exacta en §1). El archivo contiene el texto íntegro de portada, dedicatoria, epígrafe, agradecimientos, prólogo, introducción, los 8 capítulos completos (algunos divididos en varios archivos XHTML internos: cap1–cap3 en 3 partes cada uno; cap4–cap8 en archivo único), bibliografía completa (2 partes) y una página final. No se detectaron capítulos faltantes ni truncamiento del archivo.

## §6. Método de extracción y lectura

El EPUB (formato ZIP/XHTML) se descomprimió localmente (`unzip`) y cada archivo `.xhtml` de `OEBPS/Text/` se convirtió a texto plano mediante un script Python que elimina marcado HTML preservando saltos de párrafo, en el orden narrativo real del libro (portada → título → copyright → índice → dedicatoria → epígrafe → agradecimientos → prólogo → introducción → cap. 1 a cap. 8 → bibliografía → página final). El resultado (≈514.000 caracteres, 4.684 líneas) se leyó de forma secuencial y completa, capítulo por capítulo, sin saltos, con verificación cruzada de las notas al pie de cada capítulo (que contienen citas bibliográficas exactas usadas para la auditoría de relaciones). Además de la lectura corrida, se hicieron búsquedas dirigidas de texto completo sobre términos nucleares de las diez corrientes (`criolliz`/`creoliz`, `huracán`, `género`/`erótic`, `espiritual`/`oralidad`, `parentesco`, `memoria`, `indígena`, `esclav`, `soberan`, `frontera`, `cimarron`) para verificar densidad y descartar presencia no detectada en la lectura corrida.

## §7. Cobertura real de lectura

**100 % del cuerpo del libro fue leído de forma íntegra y secuencial**: dedicatoria, epígrafe, agradecimientos, prólogo completo, introducción completa, los 8 capítulos completos (incluidas todas las notas al pie, que en este libro llevan información argumental y bibliográfica sustantiva, no solo referencial), y un muestreo estructurado de la bibliografía (las ≈700 líneas de referencias se recorrieron íntegramente por bloques, con búsquedas dirigidas adicionales sobre nombres de autores potencialmente relacionados con otros nodos del corpus). No hay secciones del cuerpo argumental sin leer. Esto excede el mínimo exigido por §5 de la instrucción (introducción, conclusión, capítulos de tesis y capítulos candidatos): aquí se leyó la obra completa, dado que se trata de una compilación de 8 ensayos de extensión moderada (≈4.600 líneas en total) donde cada capítulo es independiente y potencialmente decisivo por sí mismo.

## §8. Reconstrucción independiente de problema/pregunta/tesis/objeto/método/corpus

**Problema central:** la posición paradójica del Caribe colombiano —caribeño por geografía, historia y cultura, pero desconectado tanto del resto del "Gran Caribe" como, en términos de desarrollo, del centro andino de su propio país—, condensada en la metáfora que titula el libro: una "isla encallada" (varada, que no despega) dentro del archipiélago caribeño.

**Pregunta explícita** (introducción, §5): "¿Qué es en el fondo el Caribe colombiano? ¿Qué significa la pertenencia de este territorio colombiano al Gran Caribe? ¿Qué somos y qué no somos frente al Gran Caribe? ¿Es la cultura del Caribe la causa de su situación?"

**Tesis:** el Caribe colombiano es una región caribeña genuina pero estructuralmente distinta del arquetipo antillano (no tuvo plantación esclavista azucarera colonial, no sufrió exterminio indígena total, se independizó tempranamente en vez de tardíamente), y esa distinción histórica explica tanto su débil integración al Gran Caribe como su marginación relativa dentro de la nación colombiana; superar ambas marginaciones —regional, nacional y supranacional— exige reconocer la cultura como palanca de desarrollo, no como causa del rezago.

**Objeto:** el Caribe colombiano (14 departamentos/territorio continental + archipiélago de San Andrés, Providencia y Santa Catalina) estudiado en tres escalas explícitamente declaradas (tomadas de Gerhard Sandner): local/regional, nacional, supranacional.

**Método:** compilación de ensayos de historia económica, historia política, geografía cultural y análisis literario-antropológico, con uso extensivo de fuentes secundarias (historiografía cubana, colombiana y caribeñista), estadística comparada (indicadores de la AEC) y análisis de fuentes literarias (García Márquez) como evidencia histórica auxiliar.

**Corpus/evidencia:** historiografía sobre plantación y hacienda (Mintz, Wolf, Benítez Rojo, Moreno Fraginal, Knight), historiografía de la independencia de Cartagena y Cuba, estadísticas de la AEC/Banco de la República/DANE, obra de García Márquez (*Cien años de soledad*, *La hojarasca*, *Vivir para contarla*), fuentes de prensa (El País, El Tiempo, The New York Times), tratados internacionales (Esguerra-Bárcenas 1928, fallo CIJ 2012), trabajo de campo propio (entrevistas, investigación en San Andrés sobre narcotráfico).

**Arquitectura argumental:** tres escalas de análisis (local-nacional-supranacional) aplicadas de forma explícita y recurrente (cap. 1 §3, cap. 8 §2) organizan los ocho capítulos, que se leen como variaciones sobre una misma pregunta: por qué el Caribe colombiano no encaja ni en el arquetipo antillano ni en el proyecto nacional andino, y qué seguiría para que "despegue".

**Temporalidad:** desde el poblamiento prehispánico hasta 2014 (fecha de cierre de la introducción), con énfasis en tres momentos: la Colonia (ausencia de plantación), 1810–1821 (independencia de Cartagena vs. auge azucarero de La Habana) y 1980–2014 (narcotráfico, fallo CIJ, postconflicto).

**Escala territorial:** regional (Caribe colombiano continental e insular), nacional (Colombia) y supranacional (Gran Caribe / AEC), explícitamente articuladas.

**Conceptos organizadores:** "isla encallada" (metáfora central), archipiélago/rizoma (Glissant, Benítez Rojo), hacienda vs. plantación (Mintz y Wolf), las "tres escalas" (Sandner), "desencallamiento" mediante cultura como palanca de desarrollo (Sen, PNUD).

**Mecanismo causal/explicativo:** la ausencia histórica de plantación esclavista de exportación (a diferencia de Cuba y las Antillas) más la independencia temprana (a diferencia de la descolonización tardía antillana) produjeron una trayectoria distinta que, combinada con el modelo económico nacional centrado en el café andino (enfermedad holandesa, según Meisel Roca), dejó al Caribe colombiano aislado tanto de la nación como del Gran Caribe — de ahí la "isla encallada".

**Proposición final:** el "despegue" de la isla encallada requiere simultáneamente (a) integración regional interna, (b) mayor convergencia con la nación colombiana y (c) una política exterior colombiana de acercamiento al Gran Caribe — y la cultura, lejos de ser causa del rezago (como sugiere el estereotipo de la "pereza costeña"), es el activo transversal que puede apalancar las tres integraciones.

## §9. Arquitectura argumental (síntesis)

El libro no tiene arquitectura de monografía única sino de compilación con eje ordenador explícito (introducción §5): cap. 1 plantea el problema (definición/delimitación de la "isla encallada" en las tres escalas); caps. 2–4 examinan la historia comparada del Caribe (definición general del archipiélago, la cuestión de la plantación, el contraste Cartagena/La Habana); cap. 5 examina la frontera occidental (narcotráfico, San Andrés-Nicaragua) como caso de fractura territorial contemporánea; cap. 6 examina el enclave bananero (UFC, huelga de 1928, García Márquez) como el único episodio de economía de plantación real en el Caribe colombiano; cap. 7 hace un balance historiográfico/institucional de "los estudios del Caribe" en Colombia; cap. 8 cierra proponiendo la cultura como palanca de "despegue". Los capítulos son legibles independientemente (lo declara la introducción) pero comparten vocabulario, metáfora y las tres escalas.

## §10. Conceptos organizadores (lista)

"Isla encallada" (metáfora rectora); "archipiélago"/"rizoma" (Glissant/Benítez Rojo); "tres escalas" (Sandner); hacienda vs. plantación (Mintz y Wolf); "isla que se repite" (Benítez Rojo, contrapunto explícito); "bisagra" entre Andes y Gran Caribe; "desencallamiento" vía cultura (Sen/PNUD); "reputación vs. respetabilidad" (Wilson, aplicado al narcotráfico en San Andrés).

---

## §11. Análisis C1–C10

Para cada corriente: evidencia textual, función, densidad, distribución, relación con la tesis, resultado de retirada (cuando aplica) y clasificación provisional.

### C1 — Mundos indígenas
**Evidencia:** cap. 1 §1 (los wayuu, cuna/kuna, chimila, zenú, iku/kogui/wiwa; cifras de población indígena 2005; "no exterminio total" como rasgo distintivo del Caribe colombiano frente al arquetipo antillano); mención de Hermes Tovar sobre la catástrofe demográfica del siglo XVI; mención de los chimila en Aracataca (cap. 6). **Función:** un factor entre varios (junto con "no plantación" y "no exterminio") que explica la distinción del Caribe colombiano frente al arquetipo antillano en cap. 1 §1. **Densidad:** moderada, concentrada casi enteramente en una sección de cap. 1; ausente como eje en el resto del libro. **Distribución:** muy localizada (1 capítulo de 8). **Relación con la tesis:** apoya un argumento comparativo secundario ("nuestro Caribe tiene indígenas sobrevivientes, a diferencia del arquetipo antillano"), no es la tesis. **Retirada:** si se retira, cap. 1 pierde uno de tres factores comparativos pero conserva "no plantación" y "no exterminio total→independencia temprana" como argumento suficiente; no se pierde la pregunta, la tesis ni el mecanismo causal. Es DENSIDAD_EMPIRICA localizada, no NECESIDAD_ARQUITECTONICA. **Clasificación provisional: CONTEXTUAL.**

### C2 — Trata, esclavización y plantación
**Evidencia:** cap. 2 (mercantilismo español vs. plantación inglesa/francesa/holandesa; abolición de la trata 1807–1817; élite esclavista habanera); cap. 3 completo (coautoría con Bassi Arévalo: por qué NO hubo plantación en el Caribe neogranadino — engagement extenso y directo con Wolf y Mintz, "Haciendas y plantaciones en Mesoamérica y las Antillas", con cuadro comparativo íntegro hacienda/plantación; también con Mintz, *Dulzura y poder*); cap. 4 completo (Cartagena independentista vs. La Habana plantadora: cronología detallada del auge azucarero cubano, cifras de población esclava, tratos de la Corona con la "sacarocracia"); cap. 6 completo (enclave bananero de la UFC, huelga de 1928, masacre de las bananeras — el único caso real de economía de plantación de exportación en el Caribe colombiano, aunque del siglo XX y no esclavista). **Función:** mecanismo explicativo central de la distinción histórica del Caribe colombiano: 3 capítulos completos (3, 4, 6) de 8 están dedicados total o predominantemente a la cuestión de la plantación (su ausencia colonial y su única aparición real, la bananera). **Densidad:** muy alta — con diferencia la corriente con mayor desarrollo argumental sostenido del libro. **Distribución:** capítulos 2, 3, 4 y 6 (4 de 8). **Relación con la tesis:** es el mecanismo histórico-causal que la introducción (§5) identifica explícitamente como uno de "los dos grandes fenómenos que enmarcan la existencia del Caribe contemporáneo" que el libro usa para explicar la "isla encallada". **Retirada:** si se retiran los capítulos 3, 4 y 6 (y la sección correspondiente de cap. 2), se pierden literalmente 3 capítulos completos y el mecanismo explicativo que la introducción declara como eje comparativo central; la pregunta "por qué el Caribe colombiano es distinto" queda sin su respuesta histórico-económica principal. Esto es NECESIDAD_ARQUITECTONICA, no solo densidad. **Operación respecto del modelo de Benítez Rojo/Mintz-Wolf:** el cap. 3 no se limita a aplicar el modelo hacienda/plantación — lo usa para **cuestionar** la tesis de Benítez Rojo de que "la plantación es la máquina que se repite" en todo el Caribe, proponiendo que hubo "dos máquinas distintas" (minería y plantación) en el Caribe hispano. Esto es Operación B (nueva proposición necesaria) / A (revisión del modelo), no D (mera aplicación). **Clasificación provisional: pasa retirada — candidato fuerte a SECUNDARIA_ESTRUCTURANTE o PRINCIPAL (se resuelve en la prueba de dominancia, §12).**

### C3 — Fugas, cimarronajes y emancipaciones
**Evidencia:** cap. 1 (lista de revueltas de esclavos del siglo XVIII en el Caribe, una frase); cap. 2 (mención de "la historia colonial de Cartagena de Indias es también una historia de palenques en sus cercanías", una frase); cap. 5 (cimarrones de Jamaica poblando San Andrés/Providencia en el siglo XVII). **Función:** menciones de contexto histórico general, nunca desarrolladas como argumento independiente. **Densidad:** baja, dispersa en 3 capítulos, ninguna mención supera el nivel de la frase o el párrafo breve. **Relación con la tesis:** ninguna — no participa del mecanismo causal ni de la arquitectura. **Retirada:** su eliminación no afecta nada del argumento. **Clasificación provisional: INCIDENTAL.**

### C4 — Postplantación, trabajo y desposesión
**Evidencia:** cap. 1 (economía cafetera andina, "enfermedad holandesa" según Meisel Roca, latifundio heredado de las haciendas coloniales, paramilitarismo y concentración de tierra, desplazamiento); cap. 6 (relaciones laborales UFC-trabajadores, sistema de comisariatos, contratistas, huelga de 1928 como génesis del sindicalismo colombiano); cap. 5 (jóvenes raizales como "mano de obra especializada" del narcotráfico, "un negocio que no les pertenece" — dispossession framing explícito). **Función:** refuerza el diagnóstico de marginación económica regional (cap. 1, cap. 7) y es consecuencia directa del episodio de plantación bananera (cap. 6), pero no organiza ningún capítulo por sí sola —siempre aparece subordinada a C2 (el enclave bananero) o a C7 (el diagnóstico de rezago nacional-regional). **Densidad:** moderada, dispersa en 3 capítulos, sin capítulo propio. **Retirada:** si se retira, el diagnóstico de rezago económico (cap. 1, cap. 7) pierde detalle empírico pero no su tesis (que es sobre integración/soberanía territorial y convergencia con la nación, no sobre relaciones de trabajo); el episodio bananero (cap. 6) conserva su función principal como caso de plantación (C2) y como hito de la memoria literaria (García Márquez), no como estudio de relaciones laborales per se. Es DENSIDAD_EMPIRICA subordinada, no arquitectura propia. **Clasificación provisional: CONTEXTUAL.**

### C5 — Rutas, diásporas y territorios acuosos
**Evidencia:** cap. 2 completo (definición del Caribe como archipiélago/rizoma según Glissant y Benítez Rojo; flujos poblacionales, diáspora caribeña, "puentes" culturales); cap. 5 (rutas de poblamiento de San Andrés desde Jamaica/Bermuda/Providencia, rutas comerciales históricas con Centroamérica, rutas actuales del narcotráfico como inversión perversa de las antiguas rutas comerciales/familiares). **Función:** aparato conceptual-definitorio (qué es el Caribe, cómo se mueve, cómo se conecta) puesto al servicio del argumento de pertenencia/distancia del Caribe colombiano respecto del Gran Caribe — es decir, sirve al problema de integración/soberanía (C7), no constituye un argumento autónomo sobre migración o diáspora como objeto de estudio en sí. **Densidad:** alta en cap. 2 (capítulo completo dedicado a la definición del "archipiélago"), moderada en cap. 5. **Retirada:** si se retira el aparato archipiélago/rizoma, cap. 2 pierde su vocabulario pero conserva su función real, que es la delimitación conceptual del "Caribe" como paso previo a preguntar si Colombia pertenece a él — pregunta que es de soberanía/pertenencia (C7), no de rutas en sí. El argumento sobrevive con otro lenguaje descriptivo. **Clasificación provisional: CONTEXTUAL** (con densidad textual notable, pero sin necesidad arquitectónica propia — funciona en apoyo de C7).

### C6 — Huracanes, ecologías y catástrofes climáticas
**Evidencia:** "huracán" aparece 8 veces en todo el libro, todas como metáfora retórica (Glissant/Benítez Rojo: el Caribe como "trayectoria de un huracán"; Arciniegas: "charco...por donde han pasado todos los huracanes"; "huracán neoliberal" como figura política) o como mención lateral de una hora (huracán Mitch 1998, una frase, como catalizador logístico de rutas de narcotráfico en Nicaragua) o de la erupción del volcán Soufrière en Montserrat (una frase, en el contexto de estatutos coloniales). **No hay análisis ecológico ni de catástrofe climática como objeto de estudio.** **Clasificación provisional: AUSENTE.**

### C7 — Soberanías, fronteras y ocupaciones
**Evidencia:** presente y central en los 8 capítulos. Cap. 1: fallo CIJ 2012, soberanía marítima, autonomía regional constitucional (art. de 1991), paramilitarismo territorial, regionalismo, Corpes, departamentalización. Cap. 2: cronología completa de la descolonización de todo el Gran Caribe, estatutos políticos vigentes (departamentos de ultramar, estados asociados, territorios de la Corona), AEC. Cap. 3–4: independencia de Cartagena vs. sumisión colonial de La Habana, como comparación explícitamente política. Cap. 5: capítulo íntegro sobre la disputa fronteriza marítima Colombia-Nicaragua (Tratado Esguerra-Bárcenas 1928, fallo CIJ 2012, cronología jurisdiccional del archipiélago desde 1510). Cap. 7: crítica de la debilidad de la ciencia política regional. Cap. 8: las "tres escalas" de integración (regional/nacional/supranacional) como propuesta programática de cierre. **Función:** es el problema mismo que el libro plantea desde el título y la introducción — pertenencia, integración, fronteras internas y externas, autonomía. **Densidad:** la más alta y sostenida de todas las corrientes, presente sin excepción en los 8 capítulos. **Distribución:** total (8/8 capítulos). **Relación con la tesis:** es la tesis. **Retirada:** si se retira C7, desaparece la pregunta rectora del libro ("¿qué es el Caribe colombiano frente a la nación y frente al Gran Caribe?"), la metáfora "isla encallada" pierde sentido (una isla "encallada" lo está respecto de un mar/territorio de pertenencia), y los tres capítulos dedicados a plantación (C2) pierden su función porque quedan sin la pregunta de pertenencia que responden. Es NECESIDAD_ARQUITECTONICA de primer orden. **Clasificación provisional: PRINCIPAL.**

### C8 — Creolizaciones
**Evidencia:** búsqueda de texto completo de "criolliz"/"creoliz": **cero coincidencias en las 4.684 líneas del libro.** El término "criollo" aparece únicamente como categoría social colonial (élite criolla vs. peninsulares, "criollos" en la administración), no como proceso cultural de creolización. Glissant es citado para su concepto de "rizoma" (aplicado a la definición geográfico-cultural del Caribe, C5/C7), no para su teoría de la créolisation. **Clasificación provisional: AUSENTE.**

### C9 — Archivos vivos, espiritualidades y saberes transmitidos
**Evidencia:** cap. 6 (transmisión oral de la memoria familiar de García Márquez —su abuelo relatándole la masacre de las bananeras—, como fuente de la ficción); cap. 7 (inventario de archivos institucionales, fototecas, archivos audiovisuales de la región, en sentido bibliotecario/patrimonial, no de saberes transmitidos comunitarios); "memoria" aparece 20 veces en el libro pero mayoritariamente en sentido de memoria histórica/colectiva-nacional (la independencia, el estereotipo regional), no de saberes rituales o espirituales transmitidos. Búsqueda de "espiritual"/"oralidad": solo 2 coincidencias, ambas adjetivos sueltos ("fortaleza espiritual", "enriquecimiento espiritual"), sin desarrollo temático. **Clasificación provisional: AUSENTE** (no INCIDENTAL: no hay ni siquiera una mención puntual de un fenómeno espiritual/religioso o de saber transmitido comunitario propiamente dicho; los usos de "memoria" y "archivo" corresponden a otros registros).

### C10 — Cuerpos, parentescos y eróticas
**Evidencia:** búsqueda de texto completo de "género"/"erótic": las dos coincidencias son falsos positivos ("congéneres", "géneros" en el sentido de disciplinas/categorías). Búsqueda de "parentesco": cero coincidencias. No hay análisis de cuerpo, sexualidad, parentesco o relaciones eróticas en ningún capítulo. **Clasificación provisional: AUSENTE.**

---

## §12. Prueba de retirada (síntesis para las corrientes candidatas)

Solo C2 y C7 superan la prueba de retirada (pérdida de NECESIDAD_ARQUITECTONICA, no solo de densidad empírica) — ver detalle en §11. C1, C4 y C5 tienen densidad textual real pero su retirada no destruye la pregunta, la tesis, el mecanismo ni la arquitectura del libro: quedan como CONTEXTUAL.

## §13. Prueba de dominancia (C2 vs. C7)

Ambas corrientes superan retirada de forma independiente. Se pregunta si hay dominancia consistente o co-necesidad irreductible.

**Dirección de la subordinación funcional:** en los 8 capítulos, el material de C2 (ausencia de plantación colonial, enclave bananero) se despliega siempre **para responder a una pregunta de C7** (¿por qué el Caribe colombiano no encaja en el arquetipo del Gran Caribe? ¿por qué está débilmente integrado a él y al mismo tiempo marginado dentro de la nación?). La introducción (§5) lo declara explícitamente: los capítulos sobre plantación existen para "explicar qué de la caracterización de ese archipiélago aplica o no para el Caribe colombiano" — es decir, la plantación (C2) es evidencia al servicio de la pregunta de pertenencia/distinción (C7), no al revés. No hay ningún tramo del libro en el que la pregunta de pertenencia/soberanía (C7) se subordine a, o dependa de, un argumento sobre plantación (C2): C7 aparece también en capítulos donde C2 está ausente o es marginal (cap. 1 §2 sobre autonomía regional constitucional, cap. 5 sobre la frontera con Nicaragua, cap. 7 sobre institucionalidad académica, cap. 8 sobre las tres escalas), mientras que ningún capítulo desarrolla C2 sin que sirva, explícita o implícitamente, al argumento de C7.

**Conclusión de la prueba de dominancia: dominancia consistente de C7 sobre C2.** Corresponde `PRINCIPAL` (C7) `+ SECUNDARIA_ESTRUCTURANTE` (C2), no frontera constitutiva.

## §14. Prueba de FRONTERA_CONSTITUTIVA

Requiere dos corrientes simultáneamente necesarias e irreductibles, donde ninguna pueda explicar, organizar o subordinar a la otra. Descartada por el resultado de §13: hay dominancia clara y consistente de C7 sobre C2 en las 8 unidades del libro, no co-necesidad irreductible. **No aplica FRONTERA_CONSTITUTIVA.**

## §15. Prueba de SÍNTESIS_MULTICORRIENTE

Requiere que la obra exija estructuralmente más de dos corrientes sin que ninguna asuma dominancia. Aunque el libro toca, con distinta intensidad, hasta cinco corrientes (C1, C2, C4, C5, C7), solo dos (C2, C7) superan la prueba de retirada, y entre ellas hay dominancia clara. Las demás (C1, C4, C5) son CONTEXTUAL, no arquitectónicamente necesarias. **No aplica SÍNTESIS_MULTICORRIENTE.**

## §16. Prueba de VACÍO_TAXONÓMICO_POSIBLE

¿Hay una dimensión central de la obra que C1–C10 no puedan representar sin deformarla? El problema central del libro —pertenencia regional/nacional/supranacional, soberanía territorial, integración— está representado con precisión por C7 ("Soberanías, fronteras y ocupaciones"); no hay ningún componente de la tesis, el mecanismo causal o la proposición final que quede sin categoría disponible. La originalidad del libro (la metáfora "isla encallada", el marco de las tres escalas) es una forma de argumentar la pregunta de C7, no una dimensión ajena a las diez corrientes. Se aplica el criterio de prudencia exigido por la instrucción: originalidad o complejidad no equivalen a vacío taxonómico. **No aplica VACÍO_TAXONÓMICO_POSIBLE.**

## §17. Clasificación provisional completa C1–C10

| Corriente | Clasificación provisional |
|---|---|
| C1 — Mundos indígenas | CONTEXTUAL |
| C2 — Trata, esclavización y plantación | SECUNDARIA_ESTRUCTURANTE |
| C3 — Fugas, cimarronajes y emancipaciones | INCIDENTAL |
| C4 — Postplantación, trabajo y desposesión | CONTEXTUAL |
| C5 — Rutas, diásporas y territorios acuosos | CONTEXTUAL |
| C6 — Huracanes, ecologías y catástrofes climáticas | AUSENTE |
| C7 — Soberanías, fronteras y ocupaciones | PRINCIPAL |
| C8 — Creolizaciones | AUSENTE |
| C9 — Archivos vivos, espiritualidades y saberes transmitidos | AUSENTE |
| C10 — Cuerpos, parentescos y eróticas | AUSENTE |

## §18. Propuesta de arquitectura

`PRINCIPAL: C7` · `SECUNDARIA_ESTRUCTURANTE: C2` · arquitectura ordinaria (no hay frontera constitutiva, síntesis multicorriente ni vacío taxonómico). Se presenta como propuesta a evaluar por la Dirección Académica, no como decisión.

## §19. Auditoría de relaciones

Se auditaron las 11 relaciones tipo `resonancia` existentes en `datos-atlas.js` que involucran a `abello` (dirección, tipo, fuente heredada, evidencia realmente encontrada en la lectura, función intelectual, compatibilidad cronológica, identidad exacta de obra/autor, resultado). No se modificó, eliminó ni creó ninguna relación.

| Relación (a↔b) | Fuente heredada | Evidencia encontrada en la lectura | Resultado |
|---|---|---|---|
| `abello` ↔ `benitez` (*La isla que se repite*, Benítez Rojo) | "Abello cita directamente *La isla que se repite*... referencia textual verificable (nota 21, p. 16-17)" | Confirmado ampliamente: Benítez Rojo es citado y discutido en profundidad en caps. 1, 2, 3 y 7 (no solo nota 21); es el interlocutor teórico más citado del libro, con múltiples citas textuales directas ("la plantación es la máquina que se repite", "el Caribe difracta", etc.) | **CONFIRMADA** (la fuente subestima la intensidad real: no es una cita aislada sino el principal interlocutor teórico del libro) |
| `abello` ↔ `perezmorales` (*Cartagena's Privateers*, Pérez Morales) | "Ambos anclan en Cartagena y el Gran Caribe..." | Confirmado: introducción cita "El gran diablo hecho barco. Corsarios, esclavos y revolución en Cartagena y el Gran Caribe 1791-1817" de Edgardo Pérez Morales como ejemplo de historiografía que revela "cómo momentos clave de la historia nacional deben comprenderse desde una perspectiva grancaribeña" | **CONFIRMADA** |
| `helgnuncamas` ↔ `abello` (Aline Helg) | "El Caribe colombiano es uno de los casos centrales del estudio comparado de Helg..." | Aline Helg es citada extensamente en caps. 1, 3 y 4 (incluida una entrevista realizada por el propio Abello Vives y Bassi, "Cartagena no unía durante la independencia", Aguaita 12, 2005) — pero las citas textuales en el cuerpo del libro corresponden a su trabajo sobre por qué no hubo plantación en Nueva Granada, no específicamente a *¡Nunca más esclavos!* (obra distinta de Helg, etiquetada `cimarronaje`/`violencias`). No se pudo verificar en el cuerpo del texto una cita específica a esa obra por su título. | **CONFIRMADA_CON_INCIDENCIA** (autora e intensidad de la relación confirmadas; la obra específica de Helg citada en el cuerpo del texto no coincide con certeza con el título exacto de `helgnuncamas` — posible imprecisión de identidad de obra, sin poder resolverla sin acceso a la obra de Helg) |
| `bassiacuoso` ↔ `abello` (Ernesto Bassi) | "Dos lecturas del Caribe colombiano como archipiélago..." (nota: fuente registrada dice "Bassi 2016" en comparación con "Abello Vives 2015") | Confirmado y **más fuerte que lo registrado**: Bassi Arévalo es **coautor** del capítulo 3 completo del libro auditado ("Un Caribe por fuera de la ruta de la plantación") y es citado extensamente en el capítulo 4 (su tesis doctoral de 2012). No es solo resonancia temática entre dos obras separadas — hay coautoría directa de un capítulo. | **CONFIRMADA_CON_INCIDENCIA** (la relación es sustancialmente más fuerte que "resonancia": hay coautoría de capítulo, no solo afinidad temática entre obras) |
| `pardomosquerahoffmann` ↔ `abello` | "Ciento cincuenta años de abolición colombiana y el Caribe colombiano archipiélico son parte del mismo campo de estudios" | No se encontró cita textual directa a esta obra específica en el cuerpo del libro ni en la bibliografía revisada. Es plausible como afinidad de campo de estudio, pero no se verificó evidencia textual directa. | **NO_CORROBORADA** |
| `wilsoncrabantics` ↔ `abello` (Peter J. Wilson) | "Por corroborar." | **Corroborada con evidencia textual sólida**: cap. 5 (§4) cita y desarrolla explícitamente la tesis de Wilson sobre "reputación vs. respetabilidad" en Providencia para explicar el reclutamiento de jóvenes raizales en el narcotráfico, con cita directa al prólogo de 1995 de Sidney Mintz a la segunda edición de *Crab Antics* ("Las travesuras del cangrejo"). Es una relación sustantiva, no incidental. | **CONFIRMADA** |
| `castrogomezhybris` ↔ `abello` | "Por corroborar." | No se encontró mención de Santiago Castro-Gómez ni de *La hybris del punto cero* en ningún punto del libro. | **NO_CORROBORADA** |
| `manoalzada` ↔ `abello` | "Por corroborar." | No se encontró mención de este archivo/obra en el libro. | **NO_CORROBORADA** |
| `helglibertyequality` ↔ `abello` | "Comparten el fenómeno Soberanías/Colonialidad... Por corroborar el vínculo directo." | No se identificó cita textual específica a *Liberty and Equality in Caribbean Colombia* por su título exacto (hay citas genéricas a "Aline Helg" que no se pudieron adscribir con certeza a esta obra frente a otras de la misma autora citadas). | **NO_CORROBORADA** (con la salvedad de que Helg como autora sí está fuertemente presente; es la obra específica la que no se pudo corroborar) |
| `muneraelfracaso` ↔ `abello` | "Comparten el fenómeno Soberanías/Colonialidad... Por corroborar el vínculo directo." | No se encontró mención de Alfonso Múnera ni de *El fracaso de la nación* en el libro. | **NO_CORROBORADA** |
| `saetheridentidades` ↔ `abello` | "Comparten el fenómeno Soberanías/Colonialidad... Por corroborar el vínculo directo." | No se encontró mención de Steinar Sæther en el libro. | **NO_CORROBORADA** |
| `zonabananera` ↔ `abello` | "Cita directa a Abello (*La isla encallada*) sobre el Caribe bananero de García Márquez..." | Esta relación está registrada en dirección inversa (`zonabananera` cita a `abello`, no al revés), y es coherente: el capítulo 6 de *La isla encallada* es precisamente el estudio detallado de la zona bananera/UFC/García Márquez que el artículo `zonabananera` usaría como referencia. No hay en `abello` una cita a `zonabananera` (sería anacrónico verificarlo en esa dirección). | **CONFIRMADA** (en la dirección registrada; no aplica verificar la dirección opuesta) |

## §20. Candidaturas nuevas (documentadas, no implementadas)

1. **`abello` ↔ `mintz`** (nodo bloqueado, entrada compuesta *Caribbean Transformations*/*Dulzura y poder*, Sidney W. Mintz). No existe relación registrada en `datos-atlas.js` entre estos dos ids. Sin embargo, la lectura encontró **tres citas textuales directas y sustantivas** a obras de Sidney Mintz en *La isla encallada*: (a) Wolf y Mintz, "Haciendas y plantaciones en Mesoamérica y las Antillas" (1975) — base teórica completa del capítulo 3, con cuadro comparativo íntegro reproducido; (b) Mintz, *Dulzura y poder* (*Sweetness and Power*) — citado dos veces en el capítulo 3 sobre la historia del azúcar; (c) Mintz, "Prólogo 1995" a la segunda edición de *Crab Antics* de Peter Wilson — citado en el capítulo 5. Se documenta como **CANDIDATURA_RAZONADA_NO_IMPLEMENTADA**, con la advertencia expresa de que `mintz` está bloqueado por una decisión editorial pendiente sobre entradas compuestas (`decisiones-pendientes.md` §6) que corresponde exclusivamente a la Dirección Académica, y de que ninguna de las tres obras citadas es `mintzpricebirth` (que es una obra distinta, de Mintz y Richard Price, ya decidida como Caso 7/10) — se señala esto explícitamente para evitar cualquier confusión entre ambos.

2. **Fortalecimiento de `bassiacuoso` ↔ `abello`**: la relación existente está calificada como "resonancia" (afinidad temática entre obras separadas), pero la evidencia encontrada es de **coautoría directa de un capítulo completo** del libro auditado. Se documenta la incidencia (ver §19) sin modificar el campo `tipo` de la relación existente.

## §21. Incidencias

**Bibliográfica:** el año registrado en `datos-atlas.js` para `abello` (2015) coincide con la edición impresa localizada (Siglo del Hombre Editores, 1ª ed., 2015-06-01, ISBN 9789586653329). Sin incidencia de año/edición.

**Territorial:** el nodo registra `l: "cartagena"`. El objeto real del libro es el Caribe colombiano en su conjunto (14 subregiones, archipiélago de San Andrés incluido), con Cartagena como lugar de residencia/enunciación del autor y escenario recurrente, pero no como territorio exclusivo del análisis. Es una simplificación razonable del campo `l` (que en el esquema del corpus parece admitir un único valor), no un error, pero se señala para que la Dirección Académica valore si amerita nota.

**Conceptual:** la etiqueta heredada `f: ["soberanias", "colonialidad"]` es consistente con la clasificación C7=PRINCIPAL encontrada de forma independiente en esta lectura — coincidencia posterior a la lectura, no usada como evidencia (conforme al principio de independencia, §3 de la instrucción). Se señala como observación, no como fundamento.

**Relacional:** cinco de las once relaciones registradas resultaron NO_CORROBORADAS en el cuerpo del texto (ver §19); ninguna resultó FALSO_POSITIVO_PROBABLE ni ERROR_CRONOLOGICO/ERROR_IDENTIDAD_OBRA en sentido estricto, salvo la incidencia de identidad de obra señalada en `helgnuncamas`/`helglibertyequality` (ambigüedad sobre cuál obra específica de Aline Helg es la efectivamente citada).

**Técnica:** ninguna detectada en la estructura del nodo (`abello` tiene todos los campos esperables completos: `id`, `k`, `t`, `a`, `y`, `f`, `l`, `tr`, `ap`, `recorrido`, `recorridos_sec`, `arquitectura_recorrido`, `estado_recorrido`).

Ninguna incidencia se corrige en esta tarea.

## §22. Cobertura y límites probatorios

Cobertura: 100 % del cuerpo argumental del libro (8 capítulos + prólogo + introducción + notas al pie), más muestreo íntegro por bloques de la bibliografía con búsquedas dirigidas adicionales. Límite principal: la auditoría de relaciones solo pudo verificarse desde el lado de `abello` hacia las obras citadas por él; no se tuvo acceso a los textos de las obras del otro extremo de cada relación (Helg, Pérez Morales, Wilson, Múnera, Sæther, Castro-Gómez, Pardo/Mosquera/Hoffmann) para verificar si esas obras, a su vez, citan a `abello` — la dirección de verificación fue unidireccional, como corresponde al alcance de esta tarea (lectura de un solo nodo). No se leyeron las obras completas de terceros autores citados por `abello`; su contenido se tomó de las citas textuales que el propio Abello Vives reproduce, lo cual es suficiente para verificar la existencia y sustancia de la relación pero no para evaluar la fidelidad de la cita al pensamiento completo del autor citado.

## §23. Pregunta decisoria para la Dirección Académica

¿Confirma la Dirección Académica la arquitectura `PRINCIPAL: C7` (Soberanías, fronteras y ocupaciones) `+ SECUNDARIA_ESTRUCTURANTE: C2` (Trata, esclavización y plantación) para `abello`, con C1/C4/C5 como CONTEXTUAL, C3 como INCIDENTAL y C6/C8/C9/C10 como AUSENTE — arquitectura ordinaria, sin frontera constitutiva ni síntesis multicorriente —, tal como se sustenta en la prueba de dominancia del §13 (C7 organiza y subordina consistentemente el material de C2 en los 8 capítulos, sin que se detecte ningún tramo en que la relación se invierta)?

## Estado final

`LISTO_PARA_DECISION`

**DETENTE.** No se emite decisión académica. No se implementa la arquitectura propuesta. No se avanza al Caso 9/10. No se realiza ninguna operación adicional hasta que la Dirección Académica audite este expediente probatorio.
