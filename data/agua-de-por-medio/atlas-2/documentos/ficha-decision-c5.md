# Ficha de decisión de C5 — Rutas, diásporas y territorios acuosos

**Documento NO DECISORIO.** No ratifica la corriente, no aprueba el guion, no decide la vía de constitución, no fija fronteras, no clasifica entradas nuevas, no crea candidaturas, no fija el universo, no autoriza lectura de anclas como clasificación, no autoriza siembra, no modifica C4, no modifica corpus, catálogos, fenómenos ni lotes. Convierte en trece decisiones breves y separables la evidencia ya reunida en `data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c5.md`, para que la Dirección Académica responda cada una por separado.

Rama `feat/atlas-2-etapa-1-integrada` · corpus `datos-atlas.json` v1.16.1 (232 obras) · 15 de agosto de 2026.

Cada cifra de esta ficha se recalculó de nuevo, ahora, en esta sesión, contra el corpus, el catálogo de corrientes, el catálogo de fenómenos y los cuatro archivos de lote — no se copió del expediente. Donde el resultado coincide con el expediente, se dice explícitamente que coincide. Donde no coincide, se muestra la discrepancia sin resolverla — ver §0.

---

## 0. Reverificación previa — resultado

Comandos de control ejecutados antes de redactar, sobre el mismo clon de solo lectura del remoto de GitHub que usó el expediente (`https://github.com/almanzarob-jpg/pensamientocaribe.git`, no la copia local de Rob — ver la nota metodológica de esa sección más abajo):

```
git fetch origin feat/atlas-2-etapa-1-integrada   → sin cambios
git rev-parse --abbrev-ref HEAD                   → feat/atlas-2-etapa-1-integrada
git rev-parse --short HEAD                        → 8dfdbd7
git rev-parse --short origin/feat/...              → 8dfdbd7
git status --short --branch                       → limpio, sin líneas adicionales
git diff --check / --name-only / --stat / --cached --name-only / ls-files --others → todos vacíos
```

**El repositorio no cambió desde el expediente de C5.** Se recalcularon de forma independiente las cifras que la reverificación previa exige comprobar:

| Cifra | Valor esperado (expediente) | Valor recalculado ahora | Coincide |
|---|:---:|:---:|:---:|
| Versiones del registro de C5 en el catálogo | 5, idénticas | 5, idénticas (`label`, `label_en`, `provisional: true` iguales en las 5) | Sí |
| C5 principal | 8 | 8, mismos ids | Sí |
| C5 secundaria | 7 | 7, mismos ids | Sí |
| Total de referencias C5 | 15 | 15, sin doble conteo | Sí |
| `procedencia: "corpus heredado"` | 15/15 | 15/15 | Sí |
| proceso incluye `"reclasificación"` | 15/15 | 15/15 | Sí |
| proceso incluye además `"migración"` | 10/15 | **11/15** | **No — discrepancia, ver abajo** |
| `procedencia: "siembra nueva"` | 0/15 | 0/15 | Sí |
| proceso `"siembra"` | 0/15 | 0/15 | Sí |
| Fenómenos compatibles con C5 | 6 | 6, mismos seis | Sí |
| Anclas únicas | 23 | 23 | Sí |
| Anclas ya con lote | 3 | 3, mismas tres | Sí |
| Anclas sin lote | 20 | 20 | Sí |
| Frontera C4 | 7 cruces | 7, mismos ids | Sí |
| Frontera C7 | 6 | 6, mismos ids | Sí |
| Frontera C10 | 6 | 6, mismos ids | Sí |
| Frontera C1 | 2 | 2, mismos ids | Sí |
| Frontera C8 | 2 | 2, mismos ids | Sí |
| Frontera C9 | 1 | 1, mismo id | Sí |
| Frontera C3 | 1 | 1, mismo id | Sí |
| Frontera C2 | 1 | 1, mismo id | Sí |
| Universo B∪D∪E∪F | 57 | 57 | Sí |
| Ya con rol C5 | 15 | 15 | Sí |
| Lotadas bajo otra corriente | 2 | 2, mismos ids (`glissant`, `benitez`) | Sí |
| Sin lote | 40 | 40, misma lista | Sí |

### Discrepancia detectada, reportada y no resuelta en silencio

**El número de entradas C5 cuyo proceso incluye `"migración"` además de `"reclasificación"` es 11 de 15, no 10 de 15.** Se recontó tres veces por métodos distintos (filtro directo sobre el array completo; extracción id por id con impresión de cada `proceso`; conteo separado de "con migración" vs. "sin migración" verificando que sumen 15) y las tres dieron 11. Las once son: `downtownladies`, `nixon_resistingparadise`, `shepherdmaharani`, `tackysrevolt`, `floresvillalobos`, `shellerconsuming`, `putnamradical`, `harpellecostarica`, `afrocentroam`, `mahlertricontinental`, `islandscity`. Las cuatro sin `"migración"` son: `bassiacuoso`, `keeganhofman`, `manoalzada`, `londonoargonauts`.

Esta cifra "10/15" también aparece así en `expediente-evidencia-c5.md` (§5 de ese documento: *"diez de las quince incluyen además 'migración'"*), es decir, **el error no es nuevo de esta ficha: ya estaba en el expediente entregado antes**, y esta reverificación lo encontró. No se corrige aquí el expediente —no es tarea de esta etapa modificarlo—, pero se reporta con claridad para que Rob decida si corregirlo. **Esta discrepancia no cambia el sentido de la Decisión 4** (§4 de esta ficha): la comprobación central de esa decisión —0 de 15 con `procedencia: "siembra nueva"` y 0 de 15 con proceso `"siembra"`— se mantiene exacta e idéntica en ambos conteos. Solo cambia el matiz de cuántas de las quince tenían, además, una candidatura derivable por la vía de migración antes de la reclasificación.

---

## Decisión 1 — Denominación

### Pregunta reservada a la Dirección Académica

¿Se ratifica «Rutas, diásporas y territorios acuosos» / «Routes, diasporas and aqueous territories» como denominación de C5?

### Evidencia verificada

1. Cinco versiones de archivo de `catalogos-atlas-2.json` en el historial de Git: `619ad67`, `99aec5b`, `2343008`, `d3b15a7`, `16fc252`.
2. El registro de C5 —`label`, `label_en`, `n: 5`— es idéntico byte a byte en las cinco.
3. `provisional: true` en las cinco; no hay ningún punto del historial en que pase a `false`.
4. Cero redacciones distintas, cero cambios registrados para C5 en ningún commit del historial.
5. En el mismo periodo, C1 y C9 sí cambiaron de redacción dos veces cada una — la estabilidad de C5 no es un efecto de que el catálogo entero esté congelado.
6. No existe, en ningún documento del repositorio, una denominación alternativa propuesta para C5.

### Tensión académica

La estabilidad documental (cinco versiones idénticas) es del mismo tipo que ya se usó como fundamento único para ratificar la denominación de C4. No hay, más allá de esa estabilidad, un argumento conceptual adicional registrado en el repositorio a favor o en contra del nombre. No se propone ningún nombre alternativo porque ninguno está documentado.

### Alternativas

- **A.** Ratificar la denominación tal como está.
- **B.** Mantenerla como provisional por otra etapa más, sin ratificar.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 2 — Definición conceptual de C5

### Pregunta reservada a la Dirección Académica

¿Cuál es el principio analítico que define C5, más allá de la redacción literal del guion?

### Evidencia verificada

1. El guion provisional describe C5 mediante una lista de fenómenos («migración, exilio, retorno, tránsito intelectual, musical y religioso») más que mediante un principio único explícito.
2. El campo «Incluye» del guion nombra: rutas documentadas, diáspora sostenida a distancia, el mar y la cuenca como espacio propio.
3. El campo «No incluye» excluye la trata (C2) y la fuga (C3) del centro de C5, aunque reconoce que ambas también son circulación.
4. En la práctica de los lotes, el fundamento que sostiene cada clasificación C5 principal siempre nombra explícitamente qué organiza el argumento del libro (circulación, migración, movilidad transnacional), no solo la presencia de un elemento acuoso o de desplazamiento.
5. Ningún caso confirmado de C5 principal tiene como único fundamento la mención de un mar, puerto o viaje sin que ese elemento organice el argumento central de la obra.
6. No existe en el repositorio una formulación alternativa a la que se presenta abajo como posibilidad a decidir.

### Tensión académica

El guion actual funciona más como una enumeración de temas afines (migración, exilio, retorno, tránsito, geografías acuosas) que como un criterio único aplicable caso por caso. Esto deja abierta la pregunta de si la clasificación como C5 debe exigir que el argumento central de la obra se organice alrededor de la circulación o el trayecto —un criterio de tipo "régimen analítico dominante", como el que ya se ratificó para la frontera C2/C4—, o si basta con que la obra documente una circulación significativa aunque no sea el argumento central. La evidencia de los lotes (punto 4 y 5) apunta hacia la primera lectura, pero eso es una observación de la práctica editorial, no una regla ya decidida.

### Alternativas

**Principio del trayecto o circulación como argumento dominante** (formulación a decidir, no decisión tomada): C5 correspondería a obras cuyo argumento se organiza alrededor de circulación, movilidad, travesía, migración, red o diáspora como territorio propio — y no simplemente porque aparezca un mar, puerto o desplazamiento mencionado de forma incidental.

- **A.** Adoptar este principio de forma explícita como criterio de clasificación.
- **B.** Mantener el guion actual sin fijar un principio único adicional.
- **C.** Otra formulación que la Dirección Académica considere mejor sostenida por la evidencia.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 3 — Guion

### Pregunta reservada a la Dirección Académica

¿Se mantiene el guion provisional de C5 tal como está redactado, o debe modificarse?

### Evidencia verificada

1. El guion está en `etapa-1-arquitectura-integrada.md`, apartado "2. Guiones conceptuales de C1–C10", declarado en su totalidad como "[PROPUESTA]" y sin ninguna línea aprobada.
2. Lo que parece sostenido por los quince casos ya clasificados: circulación documentada, migración, diáspora, navegación/circulación marítima, redes transnacionales, circulación política e intelectual, territorios acuosos como espacio de la obra.
3. Lo que requiere examen: la exclusión de la trata como C2 no impide que `tackysrevolt` (C3 principal, régimen de trata implicado) lleve C5 como secundaria por "redes atlánticas" — el límite declarado no se aplica de forma nítida en la práctica.
4. La exclusión de la fuga como C3 tampoco es nítida: el mismo caso `tackysrevolt` muestra fuga y circulación coexistiendo en una sola obra, sin que el guion diga cuál prevalece cuando ambas están presentes.
5. La declaración de C8 como "corriente más próxima" no tiene, hasta ahora, ningún caso confirmado de coocurrencia directa entre C5 y C8 en los lotes (ver Decisión 8).
6. El guion no menciona en absoluto a C4, C7 o C10, que son las tres corrientes con más cruces confirmados con C5 en los lotes (7, 6 y 6 respectivamente).

### Tensión académica

El guion parece describir con precisión el tipo de obra que hoy ocupa C5 principal, pero dos de sus tres afirmaciones de frontera —la exclusión limpia de trata y fuga, y C8 como vecina más próxima— no encuentran respaldo directo en la evidencia de los lotes. Esto no permite afirmar que el guion esté equivocado: puede ser una formulación conceptual válida que todavía no tiene casos que la pongan a prueba, o puede necesitar ajuste. No se aprueba el guion aquí.

### Alternativas

- **A.** Mantener el guion sin cambios, como corresponde a una etapa que "no aprueba el guion".
- **B.** Marcar explícitamente como pendientes de revisión las tres afirmaciones de frontera identificadas arriba, sin reescribir el texto todavía.
- **C.** Encargar una revisión del guion una vez que avance la lectura de los 40 ids sin lote.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 4 — Vía de constitución

### Pregunta reservada a la Dirección Académica

¿Cómo debe describirse realmente la vía de constitución de C5?

### Evidencia verificada

1. **Documento declarado** (`etapa-1-arquitectura-integrada.md`, `decisiones-pendientes.md`, `glosario-archipielico.md`, consistentes entre sí): C5 se constituye por "siembra bibliográfica dirigida", "sin correspondencia en la taxonomía anterior", junto con C1 y C2.
2. `decisiones-pendientes.md` declara además que ese material está "identificado" por la Dirección Académica pero pendiente de ser incorporado —la lista bibliográfica, la corriente de destino de cada obra y las citas con página siguen sin entregarse al repositorio.
3. **Evidencia real de las quince entradas actuales**: 15/15 tienen `procedencia: "corpus heredado"`; 15/15 tienen `"reclasificación"` en su proceso; **11/15** tienen además `"migración"` (cifra recalculada en esta ficha — ver §0, discrepancia con el expediente, que decía 10/15); 0/15 tienen `procedencia: "siembra nueva"`; 0/15 tienen proceso `"siembra"`.
4. `esquema-datos-propuesto.json` declara como combinación prohibida por diseño: "procedencia 'siembra nueva' con proceso 'migración' o 'reclasificación': no pasó por la taxonomía anterior" — es decir, el propio esquema reconoce ambas vías como mutuamente excluyentes.
5. La obra de ejemplo que el esquema usa para ilustrar el formato de una entrada es `bassiacuoso`, hoy C5 principal, con `procedencia: "corpus heredado"` y `proceso: ["reclasificación"]` — la vía observada, no la declarada.
6. Ninguna de las quince entradas C5 corresponde, hasta ahora, a la vía "siembra bibliográfica dirigida" que los tres documentos declaran como la propia de esta corriente.

### Casos relevantes

| id | estado | evidencia | qué permite afirmar | qué NO permite afirmar |
|:---:|:---:|---|---|---|
| `bassiacuoso` | C5 principal | `procedencia: corpus heredado`, `proceso: [reclasificación]`, además obra de ejemplo del esquema de datos | Que al menos una entrada C5 se constituyó por reclasificación de corpus heredado, sin ningún paso de migración | Que la vía "siembra bibliográfica dirigida" haya sido descartada como posibilidad futura |
| `harpellecostarica` | C5 principal | `procedencia: corpus heredado`, `proceso: [migración, reclasificación]` | Que la taxonomía anterior permitía derivar alguna candidatura preliminar antes de la lectura completa que la confirmó en C5 | Que esa candidatura preliminar haya apuntado alguna vez hacia C5 específicamente (no es verificable por Git para este id) |
| `keeganhofman` | C5 secundaria (C1 principal) | Candidatura histórica verificada hacia C1 y C9, nunca hacia C5; C5 se añadió directamente en la confirmación | Que una entrada puede llegar a tener rol C5 sin haber pasado nunca por una candidatura hacia C5 | Que ese sea el patrón general de las quince (solo es verificable para este id) |

### Tensión académica

Hay una contradicción documental clara, ya registrada en el expediente y confirmada de nuevo aquí: los tres documentos que describen la arquitectura del proyecto declaran una vía para C5 que ninguna de las quince entradas confirmadas ha usado todavía. Esto admite dos lecturas opuestas y una intermedia, ninguna de las cuales se decide en esta ficha. La primera es que la vía declarada sigue siendo válida como plan y las quince entradas actuales son simplemente el trabajo de reclasificación del corpus heredado que precede a la siembra, todavía no iniciada. La segunda es que la práctica —reclasificación argumentada— ha demostrado ser la vía real de constitución de C5 y la declaración debería actualizarse para reflejarla. La tercera reconoce ambas vías como legítimas y simultáneas.

### Alternativas

- **A. Mantener "siembra dirigida" como vía constitutiva prevista**, reconociendo que las 15 actuales son reclasificaciones preliminares pero no constituyen todavía la vía planificada.
- **B. Reconocer una doble vía**: C5 puede constituirse tanto por reclasificación argumentada del corpus heredado como por futura siembra dirigida.
- **C. Sustituir la vía declarada por reclasificación**, solo si la Dirección Académica considera que la práctica observada debe definir la corriente.
- **D. Otra formulación explícita de la Dirección Académica.**

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 5 — Frontera C5/C4

### Pregunta reservada a la Dirección Académica

¿Cómo debe distinguirse C5 de C4 cuando ambas corrientes coocurren en la misma obra?

### Evidencia verificada

1. Es la frontera con más cruces confirmados de todo el expediente: 7 de 15 entradas C5.
2. Tres casos tienen C5 principal con C4 secundaria: `londonoargonauts`, `shepherdmaharani`, `harpellecostarica`.
3. Tres casos tienen C4 principal con C5 secundaria: `downtownladies`, `floresvillalobos`, `shellerconsuming`.
4. Un caso tiene ambas —C4 y C5— como secundarias de una tercera corriente principal, C10: `nixon_resistingparadise`.
5. El guion de C5 no menciona a C4 en ningún punto (ni como próxima, ni como riesgo de solapamiento), pese a ser la frontera con más evidencia.
6. El guion de C4 sí menciona la frontera con C2 y C7 explícitamente, pero tampoco menciona a C5.

### Casos relevantes

| id | estado | evidencia | qué permite afirmar | qué NO permite afirmar |
|:---:|:---:|---|---|---|
| `shepherdmaharani` | C5 principal, C4 y C10 secundarias | «La travesía y el traslado de trabajo contratado desde India al Caribe organizan el libro; explotación laboral y género son secundarios» | Que un régimen de indentura (C4) puede ser secundario cuando el argumento central es el trayecto (C5) | Que toda obra sobre indentura deba llevar C5 como principal |
| `downtownladies` | C4 principal, C5 y C10 secundarias | «El centro es el trabajo informal transnacional y la autonomía económica de comerciantes; género y cuerpo importan, pero no organizan por sí solos el libro» | Que la migración puede ser secundaria cuando el argumento central es el trabajo y la desposesión (C4) | Que la migración deje de contar como evidencia de C5 secundaria en casos similares |
| `nixon_resistingparadise` | C10 principal, C4 y C5 ambas secundarias | «La producción cultural y sexual del paraíso articula el libro; turismo y diáspora funcionan como economías y rutas secundarias» | Que C4 y C5 pueden coexistir como secundarias sin que ninguna sea principal | Que ese patrón de triple corriente sea el más común (es el único caso así entre los quince) |

### Tensión académica

La evidencia sugiere una distinción posible entre C5 como circulación/trayecto y C4 como trabajo/desposesión/postplantación, pero la dirección de la clasificación (cuál es principal y cuál secundaria) no sigue un patrón único: en tres casos gana C5, en tres gana C4, y en uno ninguna es principal. Esto puede reflejar que el criterio correcto ya es "cuál organiza el argumento central de cada obra particular" y no admite una regla más general — o puede indicar que falta un criterio explícito para esta frontera específica, como ya existe para C2/C4.

### Alternativas

- **A.** Formular un criterio explícito de frontera C4/C5, análogo al ya ratificado para C2/C4 (régimen analítico dominante).
- **B.** No formular una regla general y mantener el criterio caso por caso ya aplicado en los siete casos existentes.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 6 — Frontera C5/C7

### Pregunta reservada a la Dirección Académica

¿Cómo debe distinguirse la circulación diaspórica (C5) de la soberanía, la frontera y la ocupación (C7)?

### Evidencia verificada

1. 6 cruces confirmados — la segunda frontera más poblada.
2. En los seis casos, sin excepción, C5 es principal y C7 es secundaria: `bassiacuoso`, `putnamradical`, `harpellecostarica`, `afrocentroam`, `mahlertricontinental`, `islandscity`.
3. Es la única frontera de las ocho registradas donde la dirección es enteramente unidireccional (C5 siempre principal).
4. El guion de C5 no menciona a C7 en ningún punto.
5. El guion de C7 (según `etapa-1-arquitectura-integrada.md`) declara su corriente más próxima como C1 y C3, tampoco menciona a C5.
6. Los fundamentos de los seis casos nombran, de forma recurrente, "fronteras nacionales", "soberanía", "ciudadanía" o "consecuencias secundarias" políticas de una circulación que organiza el argumento central.

### Casos relevantes

| id | estado | evidencia | qué permite afirmar | qué NO permite afirmar |
|:---:|:---:|---|---|---|
| `afrocentroam` | C5 principal, C7 y C10 secundarias | «La vida social y política garífuna se produce a través de la migración transnacional; ciudadanía, racialización y parentesco son dimensiones secundarias» | Que una obra puede tratar ciudadanía y Estado como consecuencia de la migración sin que eso la convierta en C7 principal | Que ninguna obra de migración pueda tener C7 como principal (no hay ningún caso confirmado en dirección contraria) |
| `mahlertricontinental` | C5 principal, C7 y C8 secundarias | «La circulación de lenguajes, imágenes y solidaridad antiimperial desde la Tricontinental organiza el estudio; soberanía y traducción política son secundarias» | Que circulación política e intelectual puede ser C5 principal | — |

### Tensión académica

La regularidad direccional (C5 siempre principal sobre C7) es la más marcada de toda la evidencia recogida, pero seis casos no bastan para descartar que exista, en el universo sin lotear, alguna obra donde la disputa por la forma estatal organice el argumento y la circulación sea secundaria — esa posibilidad simplemente no tiene, todavía, ningún caso confirmado que la sostenga ni que la descarte.

### Alternativas

- **A.** Adoptar como criterio provisional que C5 organiza el desplazamiento/circulación y C7 el dispositivo estatal, frontera, soberanía u ocupación, sin ratificarlo como regla definitiva.
- **B.** No fijar ningún criterio todavía y esperar más casos.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 7 — Frontera C5/C10

### Pregunta reservada a la Dirección Académica

¿Cómo distinguir movilidad/diáspora (C5) de cuerpo, parentesco y eróticas (C10) cuando ambas organizan una misma formación transnacional?

### Evidencia verificada

1. 6 cruces confirmados, empatada con C7 como segunda frontera más poblada.
2. Casos: `downtownladies`, `nixon_resistingparadise`, `shepherdmaharani`, `floresvillalobos`, `afrocentroam`, `islandscity`.
3. De los seis, cuatro (`downtownladies`, `shepherdmaharani`, `floresvillalobos`, junto con la triple de `nixon_resistingparadise`) coinciden también con la frontera C5/C4 — sugiere una zona de triple frontera C4/C5/C10, no una frontera C5/C10 aislada.
4. En tres casos C5 es principal con C10 secundaria (`shepherdmaharani`, `afrocentroam`, `islandscity`); en uno C10 es principal con C5 secundaria (`nixon_resistingparadise`); en dos, C5 y C10 son ambas secundarias de C4 (`downtownladies`, `floresvillalobos`).
5. Los fundamentos que mencionan C10 como secundaria de C5 nombran género, parentesco o cuerpo como dimensión del argumento, nunca como su centro.
6. Ningún guion —ni el de C5 ni el de C10— menciona explícitamente esta frontera.

### Casos relevantes

| id | estado | evidencia | qué permite afirmar | qué NO permite afirmar |
|:---:|:---:|---|---|---|
| `nixon_resistingparadise` | C10 principal, C4 y C5 secundarias | «La producción cultural y sexual del paraíso articula el libro; turismo y diáspora funcionan como economías y rutas secundarias» | Que cuando el argumento central es el cuerpo y la sexualidad, la migración puede quedar como secundaria | Que ese sea el único patrón posible |
| `afrocentroam` | C5 principal, C7 y C10 secundarias | «La vida social y política garífuna se produce a través de la migración transnacional; ciudadanía, racialización y parentesco son dimensiones secundarias» | Que el parentesco puede ser secundario de una migración que organiza el argumento | — |

### Tensión académica

La coincidencia empírica entre esta frontera y la de C5/C4 (cuatro de seis casos compartidos) sugiere que buena parte de lo que aquí aparece como "frontera C5/C10" es, en realidad, una zona de triple cruce alrededor del trabajo migrante, reproductivo y de género, más que una frontera binaria C5/C10 independiente. Esto no se convierte en regla: es una observación descriptiva que la Dirección Académica puede o no considerar relevante.

### Alternativas

- **A.** Tratar C5/C10 como frontera independiente, con criterio propio.
- **B.** Reconocer la zona de triple frontera C4/C5/C10 y tratarla como un problema conjunto, no como dos fronteras binarias separadas.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 8 — C5/C8 y la "corriente más próxima"

### Pregunta reservada a la Dirección Académica

¿Debe mantenerse C8 como "corriente más próxima" de C5, tal como declara el guion?

### Evidencia verificada

1. El guion de C5 declara: "Corriente más próxima: C8. Se distinguen por lo que producen: C5 sigue el trayecto, C8 lo que la mezcla genera en el lenguaje y la forma."
2. La evidencia de cruces en lote muestra solo 2 coocurrencias con C8 — la cifra más baja junto con C1, empatada.
3. De esas dos, una es indirecta: `shellerconsuming` tiene C5 y C8 ambas como secundarias de C4 principal, no una relación C5↔C8 directa.
4. La otra es `mahlertricontinental`: C5 principal, C8 secundaria (junto con C7).
5. En comparación, C4 tiene 7 cruces confirmados, C7 tiene 6, C10 tiene 6 — todas muy por encima de C8.
6. No existe ningún caso confirmado en los lotes de C8 principal con C5 secundaria.

### Tensión académica

Hay una discrepancia clara entre lo que el guion declara conceptualmente (C8 como vecina más próxima) y lo que la evidencia empírica de los lotes muestra hasta ahora (C4, C7 y C10 con mucha más coocurrencia real). Esto no permite concluir que el guion esté equivocado: la cercanía conceptual que describe —el trayecto frente a lo que la mezcla produce en el lenguaje— puede ser válida y simplemente no haber tenido todavía casos que la pongan a prueba, mientras que los cruces con C4/C7/C10 pueden reflejar otro tipo de relación (coocurrencia frecuente sin ser conceptualmente "las más próximas"). No se deduce aquí que más cruces equivalga a más proximidad conceptual.

### Alternativas

- **A. Mantener C8 como vecindad conceptual**, aunque la evidencia empírica actual sea pequeña.
- **B. Eliminar la idea de una única "corriente más próxima"** y trabajar en el guion con el conjunto completo de fronteras relevantes (C4, C7, C10, C8, C3, C1).
- **C. Cambiar la vecindad declarada**, solo si la Dirección Académica decide que la evidencia de cruces debe pesar más que la afinidad conceptual original.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 9 — Frontera C3/C5

### Pregunta reservada a la Dirección Académica

¿Cómo tratar un caso de fuga que también produce circulación propia?

### Evidencia verificada

1. Un único caso confirmado: `tackysrevolt` — C3 principal, C2 y C5 ambas secundarias.
2. Fundamento del lote: «La insurrección es narrada como guerra atlántica con estrategia y redes propias; esclavización y rutas atlánticas son secundarias.»
3. El expediente de evidencia de C3 ya dejó registrada, en su apartado 14.3, la misma pregunta desde la perspectiva de C3: «¿Un pueblo que nace de la fuga y se constituye en el desplazamiento es C3 con C5 secundaria, o al revés?» — sin que ese expediente la resolviera.
4. El guion de C5 excluye la fuga («la fuga, que es C3»), pero no dice qué ocurre cuando fuga y circulación coexisten en una sola obra, como en este caso.
5. El fenómeno `etnogenesis` (familia `fuga`, catálogo de fenómenos) declara compatibilidad explícita con C3, C5 y C8, reconociendo esta zona de tensión a nivel de fenómeno.
6. No existe ningún otro caso confirmado en los lotes que involucre a C3 y C5 simultáneamente.

### Casos relevantes

| id | estado | evidencia | qué permite afirmar | qué NO permite afirmar |
|:---:|:---:|---|---|---|
| `tackysrevolt` | C3 principal, C2 y C5 secundarias | «La insurrección es narrada como guerra atlántica con estrategia y redes propias; esclavización y rutas atlánticas son secundarias» | Que una insurgencia armada (C3) puede tener una dimensión de circulación reconocida como C5 secundaria sin dejar de ser C3 principal | Que toda fuga con componente de red o ruta deba llevar C5 como secundaria |

### Tensión académica

Este caso no se reabre desde C3 —el expediente de C5 no tiene autoridad para reabrir C3—, pero la pregunta que queda para C5 es distinta y más estrecha: qué evidencia mínima debe tener una obra de fuga para que se le reconozca una circulación secundaria hacia C5, sin que eso convierta cualquier fuga (que casi siempre implica desplazamiento físico) en candidata automática a C5 secundaria.

### Alternativas

- **A.** Adoptar el criterio ya usado en este caso —"redes propias" como evidencia de circulación reconocible, más allá del simple hecho de huir— como umbral mínimo para C5 secundaria en casos de fuga.
- **B.** No fijar ningún umbral y seguir decidiendo caso por caso.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 10 — Universo de lectura

### Pregunta reservada a la Dirección Académica

¿Se adopta como universo inicial de exploración de C5 el conjunto de 40 entradas sin lote construido por el método del expediente?

### Evidencia verificada

1. El expediente obtiene 40 entradas sin lote mediante la unión de cuatro conjuntos: anclas de fenómenos compatibles con C5 (Conjunto B, 23 anclas), clasificaciones ya existentes (Conjunto D, 15, ya excluidas del universo pendiente por estar atendidas), señales léxicas verificadas contra el guion (Conjunto E, 32 ids), y decisiones pendientes relevantes (Conjunto F, 4 ids) — el Conjunto A (etiqueta heredada dominante) resultó vacío por diseño y el Conjunto C (candidaturas históricas) quedó subsumido en D.
2. De la unión de 57 ids, 15 ya tienen rol C5 confirmado y 2 quedaron clasificados en otra corriente (`glissant`, `benitez`, ambos C8) — los 40 restantes son los que nunca pasaron por ningún lote.
3. Ningún método distinto se probó ni se descartó: uno que incluyera, por ejemplo, la búsqueda léxica sin filtrar la subcadena "mar" (que produjo 18 falsos positivos), o uno que ampliara los fenómenos compatibles por criterio editorial, daría un número distinto.
4. Este universo es exploratorio: ninguno de los 40 fue leído para determinar si su argumento se organiza alrededor de la circulación.
5. No se presenta esta cifra como el universo académico definitivo de C5 en ningún punto del expediente ni de esta ficha.
6. La instrucción de esta etapa exige explícitamente no tratar el universo como decisión ya tomada.

### Tensión académica

El expediente obtiene 40 entradas sin lote mediante el método B∪D∪E∪F; la Dirección Académica debe decidir si adopta ese método, lo ajusta, o exige uno distinto antes de fijar cualquier universo de lectura para C5.

### Alternativas

- **A.** Adoptar las 40 como universo inicial de exploración.
- **B.** Reducir el universo inicial solo a las 20 anclas de fenómeno sin lote (Conjunto B menos lo ya atendido), como subconjunto más acotado y con fundamento temático más fuerte.
- **C.** Priorizar subconjuntos (por ejemplo, primero las anclas de fenómeno, después las señales léxicas) antes de fijar un universo único.
- **D.** Otro criterio definido por la Dirección Académica.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 11 — Fenómenos

### Pregunta reservada a la Dirección Académica

¿Se autoriza leer las 20 anclas de fenómenos compatibles con C5 que todavía no pasaron por lote?

### Evidencia verificada

1. Seis fenómenos del catálogo son compatibles con C5: `etnogenesis`, `frontera_y_regimen_migratorio`, `indentura_y_trabajo_importado`, `mundos_indigenas_precoloniales`, `radicalismo_negro_transnacional`, `diaspora_y_hogar_disperso`.
2. Esos seis fenómenos suman 23 anclas únicas, sin repetición entre ellos.
3. De esas 23, solo 3 ya pasaron por lote: `shepherdmaharani` (C5 principal), `londonoargonauts` (C5 principal), `keeganhofman` (C5 secundaria, C1 principal).
4. Las 20 restantes nunca fueron leídas dentro de esta etapa del proyecto.
5. `catalogo-fenomenos.json` se declara a sí mismo "borrador para dictamen académico; no se ha aplicado al corpus publicado" — su estado formal es previo a cualquier autorización.
6. Que una obra sea ancla de un fenómeno compatible con C5 no implica que su corriente vaya a ser C5: `keeganhofman` es ancla de `mundos_indigenas_precoloniales` y terminó con C1 como principal.

### Tensión académica

Autorizar la lectura de las 20 anclas no equivale a autorizar su clasificación: son dos decisiones distintas. La pregunta aquí es exclusivamente si se abre esa lectura como paso de trabajo, no qué corriente resultará de ella.

### Alternativas

- **A.** Autorizar la lectura de las 20 anclas sin lote, dejando la clasificación resultante para una etapa posterior de lote.
- **B.** No autorizar todavía, a la espera de que se resuelvan primero las Decisiones 2, 3 y 4 (definición conceptual, guion, vía de constitución).

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 12 — Sesgo territorial y lingüístico

### Pregunta reservada a la Dirección Académica

¿Debe el sesgo territorial y lingüístico de las 15 clasificaciones actuales de C5 convertirse en prioridad editorial de la corriente?

### Evidencia verificada

1. De las 15 entradas C5, 12 tienen `lenguas_publicacion: ["inglés"]`; una es español (`manoalzada`); dos no tienen el campo completo.
2. Distribución territorial de las 15: seis en Jamaica, dos en Cartagena, dos en Costa Rica, una cada una en Santa Marta, Guyana, Panamá, Belice y Cuba.
3. Ninguna de las 15 tiene como territorio el Caribe neerlandófono.
4. Ninguna tiene como territorio Puerto Rico.
5. Ninguna tiene como territorio República Dominicana.
6. Ninguna tiene como territorio principal el Caribe francófono o Haití (Haití aparece mencionado dentro del fundamento de `downtownladies`, pero el territorio registrado de esa obra es Jamaica).

### Tensión académica

Esto es un sesgo verificado de las clasificaciones C5 actuales, no necesariamente del corpus completo — no se evaluó en esta ficha ni en el expediente si el corpus de 232 obras contiene, en general, material suficiente sobre esos territorios fuera de lo ya clasificado como C5. Por esa razón, esta ficha no llama a este hallazgo "vacío historiográfico": esa categoría, según el propio expediente, requeriría investigación externa al Atlas y no puede declararse como hecho desde este repositorio.

### Alternativas

- **A.** Convertir este sesgo en criterio de prioridad para la siembra dirigida o para la lectura de las 40 entradas sin lote, si esas etapas se autorizan.
- **B.** Registrar el sesgo sin convertirlo en prioridad todavía, a la espera de una evaluación más amplia del corpus completo.

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Decisión 13 — Siembra

### Pregunta reservada a la Dirección Académica

¿Debe autorizarse finalmente la siembra bibliográfica dirigida para C5?

### Evidencia verificada

1. La vía de constitución declarada para C5 es "siembra bibliográfica dirigida" (Decisión 4), sin que ninguna de las 15 entradas confirmadas haya llegado por esa vía todavía.
2. El universo interno disponible, por el método del expediente, es de 40 entradas sin lote (Decisión 10), sin fijar todavía.
3. De esas 40, 20 son anclas de fenómeno compatibles con C5 sin lectura (Decisión 11).
4. Existe un sesgo territorial y lingüístico verificado en lo ya clasificado (Decisión 12), que podría orientar el foco de una siembra si se autoriza.
5. `decisiones-pendientes.md` registra que la Dirección Académica ya tiene identificado material para la siembra de C1, C2 y C5, pero que la lista bibliográfica completa, la corriente de destino y las citas de corroboración siguen sin entregarse al repositorio.
6. El dictamen de C4 estableció, para esa corriente, el principio de que "primero debe agotarse el universo interno ya disponible" antes de sembrar — no se traslada aquí como decisión ya tomada para C5, se registra como precedente disponible.

### Tensión académica

Esta decisión depende de las tres anteriores (vía de constitución, universo, fenómenos) y del sesgo territorial detectado. No puede formularse de manera aislada: autorizar siembra sin haber resuelto si el universo interno de 40 entradas debe agotarse primero repetiría, para C5, la misma pregunta que ya se planteó y resolvió de un modo para C4.

### Alternativas

- **A. No sembrar todavía**, y agotar primero el material interno (las 40 entradas del universo construido, o al menos las 20 anclas de fenómeno).
- **B. Autorizar siembra dirigida**, bajo criterios expresos de territorio, lengua, problema o tipo de circulación, aprovechando el sesgo detectado en la Decisión 12.
- **C. Autorizar siembra solo después de procesar un subconjunto del universo existente** (por ejemplo, las 20 anclas de fenómeno).
- **D. Otro criterio.**

### Respuesta de la Dirección Académica

**PENDIENTE**

---

## Asunto heredado de C4 (no es una decisión propia de C5)

### Casos deliberados de C4: `perezmorales`, `sherwood`, `exceptviolence`, `jaffeconcrete`

El dictamen de C4 decidió leer estos cuatro casos primero contra C4, por no tener candidatura derivable tras convertir `capitalismo_racial` y `violencias` en marcas transversales. Esta ficha no asume que deban pasar automáticamente a lectura C5, ni contradice esa decisión de C4. Se registra aquí, separado de las trece decisiones propias de C5, porque toca un asunto ya decidido en otra corriente:

**Pregunta, solo si la Dirección Académica considera necesario resolverla:** ¿deben mantenerse `perezmorales`, `sherwood`, `exceptviolence` y `jaffeconcrete` exclusivamente en la prioridad de lectura de C4 por ahora, o pueden incorporarse simultáneamente al universo exploratorio de C5?

### Respuesta de la Dirección Académica

**PENDIENTE (opcional)**

---

## Incidencia técnica pendiente ajena al dictamen de C5

`ficha-decision-c4.md` existe en la copia local de Rob (`~/Pagina/pensamiento-caribe/data/agua-de-por-medio/atlas-2/documentos/`, 33 338 bytes) pero no está comprometida en Git — no aparece en el árbol de ningún commit del historial verificado. El dictamen de C4 (commit `8dfdbd7`) la cita como una de sus dos bases documentales. Esta ficha no propone corregirlo, no hace `git add`, no hace commit, y no mezcla esta cuestión con ninguna de las trece decisiones académicas de C5 formuladas arriba. Es exactamente el mismo hallazgo ya reportado en `expediente-evidencia-c5.md` §0 — se repite aquí solo porque la instrucción de esta etapa pide una sección separada y explícita para él, no porque haya cambiado.

---

## Nota metodológica sobre el entorno de verificación

Los comandos Git de esta ficha —igual que los del expediente— se ejecutaron sobre un clon de solo lectura del remoto público `https://github.com/almanzarob-jpg/pensamientocaribe.git`, no sobre la copia local de Rob en su máquina. Esto evita el riesgo ya documentado para este repositorio: cualquier comando `git`, incluso de solo lectura, ejecutado desde el entorno sandbox sobre la copia local puede dejar `.git/index.lock` colgado. El estado remoto verificado (`origin/feat/atlas-2-etapa-1-integrada` = `8dfdbd7`, árbol limpio) se declara aquí explícitamente como estado del remoto/clon. El estado de la copia local de Rob se verificó por separado, solo por listado de directorio (`device_list_dir`), no por comandos Git, y se limita a confirmar que el archivo `ficha-decision-c4.md` sigue presente y sin cambios de tamaño respecto a la verificación anterior — no se presenta como equivalente al estado remoto.
