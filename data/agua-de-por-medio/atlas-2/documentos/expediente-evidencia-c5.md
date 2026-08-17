# Expediente de evidencia de C5

## Rutas, diásporas y territorios acuosos

> Este expediente reúne evidencia verificable para un dictamen académico que todavía no ha sido emitido. No ratifica la denominación, no aprueba el guion, no fija fronteras, no clasifica obras, no convierte entradas en candidaturas y no autoriza siembra.

Rama `feat/atlas-2-etapa-1-integrada` · corpus `datos-atlas.json` v1.16.1 (232 obras) · 15 de agosto de 2026.

Toda cifra de este expediente se calculó ahora, en esta sesión, contra el corpus, el catálogo de corrientes, el catálogo de fenómenos, los cuatro archivos de lote y el historial de Git — no se copió de ningún documento anterior. Donde un resultado coincide con lo que otro dictamen o expediente ya había registrado (C1, C3, C4), se dice explícitamente que coincide, como comprobación cruzada. Donde no coincide, se muestra la discrepancia sin resolverla.

**Nota metodológica sobre el entorno de verificación.** Los comandos Git de este expediente se ejecutaron contra un clon de solo lectura, hecho en esta sesión, del remoto público `https://github.com/almanzarob-jpg/pensamientocaribe.git` (rama `feat/atlas-2-etapa-1-integrada`, HEAD `8dfdbd7`) — no contra la copia local de Rob en su máquina. Esto sigue la regla ya registrada para este repositorio: cualquier comando `git` ejecutado desde el entorno sandbox sobre la copia local deja `.git/index.lock` colgado e irrecuperable, incluso comandos de solo lectura como `status` o `log`. El clon del remoto evita ese riesgo por completo y permite todavía verificar contra el estado público y compartido del repositorio, que es el que importa para un expediente de evidencia. La comparación de la carpeta `documentos/` local contra el árbol del commit `8dfdbd7` (§0) se hizo por listado de archivos y tamaños, no por `git status`.

---

## 0. Puerta de entrada — verificación de que C4 está cerrada

Comandos ejecutados sobre el clon de solo lectura:

```
git rev-parse --abbrev-ref HEAD          → feat/atlas-2-etapa-1-integrada
git rev-parse --short HEAD               → 8dfdbd7
git rev-parse --short origin/feat/atlas-2-etapa-1-integrada → 8dfdbd7
git status --short --branch              → ## feat/atlas-2-etapa-1-integrada...origin/feat/atlas-2-etapa-1-integrada (sin líneas adicionales: árbol limpio)
git log -10 --oneline --decorate         → ver lista abajo
```

```
8dfdbd7 (HEAD -> feat/atlas-2-etapa-1-integrada, origin/feat/atlas-2-etapa-1-integrada) Documenta dictamen académico de la corriente C4
5df66be Documenta expediente de evidencia de la corriente C4
7699635 Retira dictamen académico de C4 no autorizado
438a879 Documenta dictamen académico de la corriente C4
315c69b Documenta dictamen académico de la corriente C3
a295be0 Documenta expediente de evidencia de la corriente C3
23166e1 Documenta dictamen académico de la corriente C2
7c1ae81 Documenta dictamen académico de la corriente C1
d951345 Documenta arquitectura integrada de la Etapa 1 del Atlas 2.0
1871125 Agrega 11 piezas de efemérides de agosto y efecto de zoom al señalar
```

**Comprobaciones exigidas por la instrucción de entrada:**

1. **`data/agua-de-por-medio/atlas-2/documentos/dictamen-academico-c4.md` existe.** Verificado — 187 líneas, presente en el árbol de `8dfdbd7`.
2. **Existe un commit válido `Documenta dictamen académico de la corriente C4`.** Existe, pero **hay dos**, no uno: `438a879` (12 de agosto, dictamen ratificado luego retirado) y `8dfdbd7` (15 de agosto, dictamen vigente). Entre ambos, el commit `7699635` — *"Retira dictamen académico de C4 no autorizado"* — retiró la primera versión. `git show 438a879 --stat` y `git show 8dfdbd7 --stat` confirman que cada uno de los dos commits con ese mensaje modifica exclusivamente `dictamen-academico-c4.md` (ninguno toca otro archivo). El dictamen vigente es el de `8dfdbd7`; este expediente no reabre la pregunta de por qué existió una versión retirada, porque hacerlo sería reabrir C4.
3. **El commit `8dfdbd7` contiene exclusivamente el dictamen C4.** Verificado por `git show --stat`: `.../dictamen-academico-c4.md | 187 +++++++++++++++++++++`, 1 archivo modificado, sin ningún otro archivo en el mismo commit.
4. **C4 quedó cerrada conforme a las decisiones de la Dirección Académica.** El propio dictamen declara en su primera línea de cuerpo que documenta *"las nueve determinaciones que la Dirección Académica tomó, una por una"*. El documento no numera esas nueve determinaciones de forma corrida y explícita (sus doce apartados mezclan determinaciones, reafirmaciones de criterio ya fijado en dictámenes anteriores y apartados descriptivos); tres apartados citan explícitamente un número de decisión (`decisión 2`, `decisión 4`). Este expediente no reconstruye ni verifica la numeración interna de esas nueve determinaciones, porque hacerlo exigiría reabrir el contenido decisorio de C4, cosa que la instrucción de entrada prohíbe. Se toma como cerrada la declaración del propio dictamen.
5. **No existen modificaciones pendientes de C4 que se mezclen con C5.** Con una excepción puntual, documentada a continuación, no se detectó ninguna.

**Hallazgo no bloqueante, reportado y no resuelto.** La carpeta `documentos/` en la copia local de Rob (`/Users/robertoalmanza/Pagina/pensamiento-caribe/data/agua-de-por-medio/atlas-2/documentos/`, verificada por listado de directorio, no por Git) contiene un archivo adicional que **no existe en el árbol de `8dfdbd7`** ni en ningún commit del historial de `catalogos-atlas-2.json`, los lotes o los dictámenes: `ficha-decision-c4.md` (33 338 bytes, modificado apenas 56 minutos antes que el propio `dictamen-academico-c4.md` según su marca de tiempo). El propio dictamen de C4 lo cita como una de sus dos bases documentales (*"sobre la base de `expediente-evidencia-c4.md` y `ficha-decision-c4.md`"*), pero el archivo nunca se comprometió a Git. Se leyó su contenido para descartar que representara un riesgo de mezcla: es un documento explícitamente marcado **"NO DECISORIO"**, organizado para responder, pregunta por pregunta, el mismo cuestionario del apartado 16 del expediente de C4, y trata los cruces con C5 (`shepherdmaharani`, `harpellecostarica`) estrictamente como *"evidencia de frontera C4/C5, no de contenido de C4"* — no reclasifica, no opina sobre C5. Por ese contenido, y porque no toca `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` ni ningún archivo de lote, se concluye que **no impide separar C4 de C5** y no activa la regla de bloqueo. Sí se reporta como hallazgo pendiente de que Rob decida si ese archivo debe integrarse a Git — este expediente no lo hace ni lo recomienda como acción.

**Conclusión de la puerta de entrada: C4 está cerrada. Se procede a C5.**

---

## 1. Advertencia sobre el estado de la denominación de C5

Aunque el catálogo trae actualmente la denominación «Rutas, diásporas y territorios acuosos» para la clave `rutas_diasporas_territorios_acuosos`, ese hecho no equivale a ratificación. El campo `provisional` es `true` en las cinco versiones de archivo verificadas (§2). Este expediente trata la denominación, el guion y las fronteras de C5 como material a verificar, no como conclusiones ya sentadas.

---

## 2. Fuentes primarias consultadas

| Fuente | Ruta | Uso en este expediente |
|---|---|---|
| Corpus | `data/agua-de-por-medio/datos-atlas.json` | Campo `f` (etiquetas heredadas), `l` (territorio), `ap` (aporte/fundamento), conteo total de obras |
| Catálogo de corrientes | `data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json` | Denominación, `provisional`, historial de versiones |
| Catálogo de fenómenos | `data/agua-de-por-medio/atlas-2/catalogo-fenomenos.json` | Fenómenos compatibles con C5, anclas |
| Arquitectura integrada | `.../documentos/etapa-1-arquitectura-integrada.md` | Guion provisional de C5 (§2 del documento) |
| Decisiones pendientes | `.../documentos/decisiones-pendientes.md` | Vía de constitución declarada para C1, C2 y C5 |
| Glosario archipiélico | `.../documentos/glosario-archipielico.md` | Nota específica sobre C5 (línea 92) |
| Esquema de datos propuesto | `.../documentos/esquema-datos-propuesto.json` | Vocabulario de `procedencia`/`proceso`, combinaciones prohibidas, obra de ejemplo |
| Lotes | `piloto-config.json`, `lotes/s01-config.json`, `lotes/a01-config.json`, `lotes/a02-config.json` | Clasificaciones confirmadas, candidaturas, fundamentos |
| Dictámenes C1–C4 | `.../documentos/dictamen-academico-c{1..4}.md` | Precedentes de frontera con C5, sin reabrir su contenido |
| Expedientes C3 y C4 | `.../documentos/expediente-evidencia-c{3,4}.md` | Trabajo previo ya hecho sobre la frontera C3/C5 y C4/C5, usado como comprobación cruzada |
| Historial Git | `git log --follow`, `git show`, `git diff`, búsquedas por commit | Reconstrucción de versiones y candidaturas históricas |

---

## 3. Historia de la denominación de C5

`git log --follow --oneline -- data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json` devuelve **cinco commits**, el mismo número que registró el dictamen de C4 para la misma pregunta sobre `postplantacion_trabajo_desposesion`. No se copió ese número: se verificó de nuevo, ahora, para C5.

| Versión | Commit | Fecha | `label` | `provisional` | Cambio respecto a la anterior |
|:---:|:---:|:---:|---|:---:|---|
| 1 | `619ad67` | 2026-08-07 | Rutas, diásporas y territorios acuosos | `true` | — (primera versión) |
| 2 | `99aec5b` | 2026-08-08 | Rutas, diásporas y territorios acuosos | `true` | Ninguno en el registro de C5. El commit reescribió partes generales del esquema (versión, fecha, reglas de relación, mecanismos de capitalismo racial) |
| 3 | `2343008` | 2026-08-08 | Rutas, diásporas y territorios acuosos | `true` | Ninguno en el registro de C5. El commit incorporó S01 y reglas de relación entre obras componentes |
| 4 | `d3b15a7` | 2026-08-10 | Rutas, diásporas y territorios acuosos | `true` | Ninguno en el registro de C5. El commit reescribió por completo la sección de corrientes (formato de objeto a objeto multilínea) sin tocar el contenido de C5 |
| 5 | `16fc252` | 2026-08-11 | Rutas, diásporas y territorios acuosos | `true` | Ninguno en el registro de C5. El commit renombró las etiquetas de C1 y C9 (documentado en `nota_renombramiento`); C5 no aparece en esa nota |

**Verificación byte a byte.** Se extrajo el objeto `rutas_diasporas_territorios_acuosos` de las cinco versiones (`git show <commit>:<ruta>` + análisis de estructura) y es idéntico en las cinco: `{"n":5,"label":"Rutas, diásporas y territorios acuosos","label_en":"Routes, diasporas and aqueous territories","provisional":true}`. Se comprobó además por `diff` línea a línea entre cada par de versiones consecutivas del archivo completo: en los cuatro diffs, la línea de C5 nunca aparece como línea cambiada — sí aparecen, en cada diff, cambios en otras corrientes (C1 y C9 se reescriben dos veces; el formato completo del bloque `corrientes` cambia en la versión 4). **Cero redacciones distintas, cero cambios, en las cinco versiones — igual que el patrón que el dictamen de C4 documentó para su propia denominación.** Esta coincidencia de método no se traslada aquí como conclusión sobre C5: se verificó de nuevo, de forma independiente, y el resultado coincide.

---

## 4. Guion provisional de C5

Ubicado en `etapa-1-arquitectura-integrada.md`, apartado **"2. Guiones conceptuales de C1–C10"** (no en el apartado 5 del documento, que trata "Estados editoriales"; la cita del apartado 5 que aparece en el dictamen de C4 corresponde a la numeración de otro documento o a un error de referencia menor que no se resuelve aquí por no ser materia de C5). El propio apartado 2 se declara **"[PROPUESTA] en su totalidad"**: *"No existe prosa previa para nueve de las diez corrientes (…) la redacción es nueva y ninguna línea está aprobada."*

**Formulación narrativa (transcripción literal):**

> ¿Qué ocurre cuando el mar deja de ser frontera y pasa a ser el territorio? La corriente sigue circulaciones documentadas —migración, exilio, retorno, tránsito intelectual, musical y religioso— y las geografías acuosas que las hacen posibles. Su tensión: registrar movimiento exige fuente, y la proximidad geográfica no prueba trayecto. Recorre obras que piensan el archipiélago como red de circulación y no como suma de islas.

**Bloque estructurado (transcripción literal):**

| Campo | Contenido |
|---|---|
| Alcance intelectual | Estudios de diáspora, historia marítima, geografía crítica, circulación cultural transatlántica |
| Incluye | Rutas documentadas; diáspora sostenida a distancia; el mar y la cuenca como espacio propio |
| No incluye | La trata como régimen, que es C2 aunque sea también una ruta; la fuga, que es C3 |
| Corriente más próxima | C8. Se distinguen por lo que producen: C5 sigue el trayecto, C8 lo que la mezcla genera en el lenguaje y la forma |
| Riesgo de solapamiento | Medio con C2 y C3, porque la trata y la fuga también son circulación. Criterio: si el argumento central es el trayecto, C5 |
| Vía de constitución | Siembra bibliográfica dirigida; sin correspondencia en la taxonomía anterior |
| Estado | Provisional |

**Verificación de cada elemento contra la evidencia disponible (sin aprobar ni reescribir el guion):**

- **"No incluye… la trata… la fuga."** Consistente con lo que el propio expediente de C3 registró como pregunta abierta para el futuro dictamen de C3 (§14.3 de ese expediente: *"¿Un pueblo que nace de la fuga y se constituye en el desplazamiento es C3 con C5 secundaria, o al revés?"*), y con el hecho verificado en los lotes de que `tackysrevolt` (C3 principal) lleva C5 como secundaria por *"redes atlánticas"* — es decir, la exclusión declarada en el guion ("la fuga… es C3") no impide en la práctica que una obra de fuga lleve C5 como secundaria. El guion no distingue ese matiz.
- **"Corriente más próxima: C8."** No se encontró en los lotes ningún caso confirmado donde C5 y C8 coocurran como principal/secundaria directa entre sí (ver tabla de fronteras, §10): la única coocurrencia indirecta es `shellerconsuming`, que lleva C5 y C8 ambas como secundarias de C4 principal — no una relación C5↔C8 directa. La afirmación del guion no tiene, todavía, un caso confirmado que la sostenga.
- **"Vía de constitución: Siembra bibliográfica dirigida; sin correspondencia en la taxonomía anterior."** Verificado y, a la vez, en tensión documental seria con la práctica registrada en los lotes — ver §5 y §13 (contradicciones documentales).

---

## 5. Vía de constitución de C5

**Lo que declaran los documentos, de forma consistente entre sí:**

- `etapa-1-arquitectura-integrada.md`: *"Vía de constitución: Siembra bibliográfica dirigida; sin correspondencia en la taxonomía anterior."*
- `decisiones-pendientes.md`, apartado *"Dos procesos que no se mezclan"*: *"Siembra dirigida. Incorporación de obras nuevas aportadas por la dirección académica, que entran directamente con el esquema nuevo y no pasan por migración. Es la vía por la que se constituyen C1, C2 y C5."* Más adelante, apartado *"3. Calendario de la siembra dirigida para C1, C2 y C5"*: *"Tres corrientes no tienen correspondencia directa en la taxonomía anterior y se constituyen por siembra bibliográfica dirigida. La dirección académica tiene el material identificado."* El mismo apartado declara pendiente de recibir de la Dirección Académica: la lista bibliográfica completa, la corriente de destino de cada obra con su fundamento, y las citas con página para relaciones con entradas ya catalogadas.
- `glosario-archipielico.md`, línea 92: *"La corriente de rutas, diásporas y territorios acuosos no tiene correspondencia directa en la taxonomía anterior, así que ninguna entrada heredada la nombra. Se constituye por siembra bibliográfica dirigida (…) Ninguna entrada del corpus heredado se mueve a C5 para poblarla: si alguna termina ahí será porque su argumento se organiza alrededor de la circulación, y eso solo puede decirlo la lectura."*

**No existe una cifra histórica declarada para C5 que recalcular.** A diferencia de C3 (`cimarronaje`, 26 entradas/11 %) o C4 (`postplantación`, 35 entradas/15 %), ningún documento asigna a C5 una etiqueta heredada de base con un porcentaje del corpus 1.x. Se verificó que efectivamente **no existe una etiqueta heredada dominante para C5**: de las quince entradas hoy vinculadas a C5 en los lotes (§7), las etiquetas heredadas que traen (campo `f` de `datos-atlas.json`) son heterogéneas — `soberanias` (7), `capitalismo_racial` (9), `memoria` (3), `cuerpo_erotica` (3), `violencias` (3), `colonialidad` (2), `postplantacion` (2), `creolizacion` (1), `cimarronaje` (1) — sin ninguna etiqueta que domine ni que pueda leerse como "la etiqueta de C5". Esto confirma la parte de la declaración que dice "sin correspondencia en la taxonomía anterior".

**Lo que muestra la evidencia empírica de los lotes, y que no coincide con la parte "siembra bibliográfica dirigida":**

Las quince entradas actualmente vinculadas a C5 (§7) tienen, sin excepción, `procedencia: "corpus heredado"` — ninguna tiene `procedencia: "siembra nueva"`. En cuanto al campo `proceso`: las quince incluyen `"reclasificación"` (la vía que, según `esquema-datos-propuesto.json`, *"exige lectura editorial porque la taxonomía anterior no permite derivar un destino único"*); diez de las quince incluyen además `"migración"`. Ninguna de las quince tiene el proceso `"siembra"`. El propio `esquema-datos-propuesto.json` declara como **combinación prohibida**: *"procedencia 'siembra nueva' con proceso 'migración' o 'reclasificación': no pasó por la taxonomía anterior"* — es decir, el esquema del proyecto reconoce estos dos caminos como mutuamente excluyentes por diseño. La obra de ejemplo que el propio esquema usa para ilustrar el formato de una entrada (`obra_ejemplo`, en `esquema-datos-propuesto.json`) es, además, precisamente `bassiacuoso` — hoy una de las ocho entradas con C5 como corriente principal — con `procedencia: "corpus heredado"` y `proceso: ["reclasificación"]`.

**Esta tensión se documenta como contradicción sin resolver en §13; no se decide aquí cuál de las dos descripciones —la declarada o la observada— debe prevalecer.**

---

## 6. Candidaturas históricas de C5

Se buscó, en las tres versiones de `piloto-config.json`, la única versión de `s01-config.json`, la única versión de `a01-config.json` y las dos versiones de `a02-config.json`, cualquier aparición de `corriente_candidata` o `corrientes_candidatas` que mencionara `rutas_diasporas_territorios_acuosos`, en cualquier estado, extrayendo el archivo completo de cada commit y comparando campo por campo.

| id | Versión inicial con candidatura | Candidatura registrada | Decisión posterior | Estado actual |
|---|---|---|---|---|
| `bassiacuoso` | `piloto-10.1` (commit `619ad67`) | `corrientes_candidatas: ["soberanias_fronteras_ocupaciones", "rutas_diasporas_territorios_acuosos"]`, estado `pendiente_revision_con_texto` | Confirmada en `piloto-10.2` (commit `99aec5b`): `corriente_confirmada: rutas_diasporas_territorios_acuosos`, `corrientes_secundarias: [soberanias_fronteras_ocupaciones]` | C5 principal, C7 secundaria — sin cambios desde `99aec5b` |

**Es el único caso, en todo el historial verificable de los cuatro lotes, donde una candidatura declarada hacia C5 puede rastrearse por Git desde su estado preliminar hasta su confirmación.** Para las catorce entradas restantes hoy vinculadas a C5 (§7), su primera aparición en el historial de Git ya las muestra con `revision.estado: "confirmada"` y `corriente_confirmada` o `corrientes_secundarias` ya resueltos — es decir, si tuvieron una fase de candidatura, esa fase no quedó registrada en ningún commit de este repositorio. No se presupone que no la tuvieran: se declara que no es verificable por Git.

**Caso que ilustra lo contrario de una candidatura.** `keeganhofman` (hoy C1 principal, C5 secundaria) tuvo, en su primera versión (`piloto-10.1`), la candidatura `corrientes_candidatas: ["invasiones_mundos_indigenas", "memorias_espiritualidades_archivos_vivos"]` — **sin C5 en ningún momento**. En la confirmación (`piloto-10.2`), C5 aparece como corriente secundaria sin haber pasado nunca por el campo de candidatura. Esto muestra que la presencia de C5 en `corrientes_secundarias` no implica que haya existido una candidatura previa hacia C5 para esa entrada — puede incorporarse directamente en el momento de la confirmación editorial.

**Búsqueda de `corriente_candidata`/`corrientes_candidatas` hacia C5 en el estado actual de los cuatro lotes:** ninguna. El único registro vivo con cualquier campo de candidatura en los cuatro lotes hoy es `gudynas` (A02), con `corrientes_candidatas: ["huracanes_ecologias_materialidades_vivas"]` — no relacionado con C5.

---

## 7. Clasificaciones existentes hacia C5

Calculado directamente contra `piloto-config.json`, `lotes/s01-config.json`, `lotes/a01-config.json` y `lotes/a02-config.json` (57 entradas en total: 10 + 11 + 18 + 18).

### C5 principal — 8 entradas

| id | Lote | Corriente(s) secundaria(s) | Fundamento literal del lote |
|---|:---:|---|---|
| `bassiacuoso` | P00 | C7 | «La obra organiza su argumento alrededor de circulaciones marítimas, geografías vividas y un Gran Caribe transimperial.» |
| `londonoargonauts` | S01 | C1, C4 | «La navegación, las canoas, los intercambios y la costa como red de puertos organizan el libro; la persistencia indígena y el despojo litoral funcionan como corrientes secundarias.» |
| `shepherdmaharani` | A01 | C4, C10 | «La travesía y el traslado de trabajo contratado desde India al Caribe organizan el libro; explotación laboral y género son secundarios.» |
| `putnamradical` | A02 | C7 | «Las movilidades caribeñas y la circulación de ideas políticas organizan el libro; soberanía y fronteras son consecuencias secundarias.» |
| `harpellecostarica` | A02 | C4, C7 | «La migración antillana y su asentamiento en Costa Rica estructuran el libro; trabajo bananero y fronteras nacionales son secundarios.» |
| `afrocentroam` | A02 | C7, C10 | «La vida social y política garífuna se produce a través de la migración transnacional; ciudadanía, racialización y parentesco son dimensiones secundarias.» |
| `mahlertricontinental` | A02 | C7, C8 | «La circulación de lenguajes, imágenes y solidaridad antiimperial desde la Tricontinental organiza el estudio; soberanía y traducción política son secundarias.» |
| `islandscity` | A02 | C7, C10 | «El volumen compara migraciones caribeñas y formaciones transnacionales en Nueva York; ciudadanía, raza y parentesco son cruces secundarios.» |

### C5 secundaria — 7 entradas

| id | Lote | Corriente principal | Fundamento literal del lote |
|---|:---:|---|---|
| `keeganhofman` | P00 | C1 | «La síntesis arqueológica reconstruye poblamientos, redes interinsulares y mundos indígenas anteriores a la ocupación europea.» |
| `manoalzada` | S01 | C9 | «La obra se presenta como memoria escrita de una tradición intelectual afrodiaspórica; la diáspora organiza su circulación y queda como corriente secundaria.» |
| `downtownladies` | A01 | C4 (con C10 también secundaria) | «El centro es el trabajo informal transnacional y la autonomía económica de comerciantes; género y cuerpo importan, pero no organizan por sí solos el libro.» |
| `nixon_resistingparadise` | A01 | C10 (con C4 también secundaria) | «La producción cultural y sexual del paraíso articula el libro; turismo y diáspora funcionan como economías y rutas secundarias.» |
| `tackysrevolt` | A01 | C3 (con C2 también secundaria) | «La insurrección es narrada como guerra atlántica con estrategia y redes propias; esclavización y rutas atlánticas son secundarias.» |
| `floresvillalobos` | A01 | C4 (con C10 también secundaria) | «El trabajo reproductivo de mujeres migrantes sostiene la infraestructura imperial y la fuerza laboral; diáspora, intimidad y parentesco son secundarios.» |
| `shellerconsuming` | A01 | C4 (con C8 también secundaria) | «La explotación colonial persiste en consumo, turismo y conocimiento; movilidades y discursos de creolización son secundarios.» |

**Comprobación de conteo, verificada por script:** 8 + 7 = 15. `new Set(ids).size === 15 === ids.length` — ningún `id` aparece en ambas listas a la vez. No hay doble conteo.

**Comprobación cruzada contra el dictamen de C4.** El dictamen de C4 (§6, tabla de C4 principal/secundaria) ya había registrado, desde su propia perspectiva, siete de estas quince entradas como parte de la frontera C4/C5: `londonoargonauts`, `shepherdmaharani`, `harpellecostarica` (ahí registradas como C4 secundaria, coincide); `downtownladies`, `floresvillalobos`, `shellerconsuming` (ahí registradas como C4 principal con C5 secundaria, coincide); `nixon_resistingparadise` (ahí registrada como C10 principal con C4 y C5 ambas secundarias, coincide). Las ocho entradas restantes (`bassiacuoso`, `putnamradical`, `afrocentroam`, `mahlertricontinental`, `islandscity`, `keeganhofman`, `manoalzada`, `tackysrevolt`) no tienen relación con C4 y por eso no aparecían en ese dictamen — es consistente que falten ahí, porque ese documento solo listaba la frontera C4/C5, no el universo completo de C5.

**Distinción de estados.** Ninguna de las quince entradas fue «leída» ni «clasificada» por este expediente: fue leída y clasificada por la Dirección Académica en el momento de cada lote, según el fundamento transcrito. Este expediente documenta esas quince decisiones ya existentes; no las ratifica de nuevo.

---

## 8. Reconstrucción del universo por conjuntos

Siguiendo la instrucción de no producir una cifra total antes de construir conjuntos independientes.

**Conjunto A — etiquetas heredadas relacionadas con C5.** Vacío por diseño: verificado en §5 que ninguna etiqueta heredada del corpus 1.x (`postplantacion`, `capitalismo_racial`, `colonialidad`, `memoria`, `cimarronaje`, `soberanias`, `creolizacion`, `violencias`, `catastrofes`, `cuerpo_erotica`) corresponde de manera dominante a C5; las quince entradas ya vinculadas a C5 traen una mezcla heterogénea de hasta nueve etiquetas distintas, ninguna con peso mayoritario. No se inventa una etiqueta candidata a partir del nombre de la corriente.

**Conjunto B — anclas de fenómenos compatibles con C5.** Obtenido de `catalogo-fenomenos.json`: **6 fenómenos, 23 anclas únicas** (sin repetición entre fenómenos). Ver tabla completa en §9.

**Conjunto C — candidaturas históricas verificadas por Git.** **1 entrada**: `bassiacuoso` (§6). Ya incluida en el Conjunto D (clasificaciones existentes), porque su candidatura terminó confirmada.

**Conjunto D — clasificaciones existentes de C5 (principal + secundaria).** **15 entradas** (§7).

**Conjunto E — señales léxicas, derivadas exclusivamente de los términos verificados en el guion (§10).** **32 ids** con al menos una señal léxica genuina (excluida la búsqueda por la cadena «mar», que resultó enteramente falso positivo — ver §10).

**Conjunto F — decisiones pendientes que pueden afectar a C5.** `decisiones-pendientes.md` §1 registra cinco entradas sin candidatura derivable tras convertir `capitalismo_racial` y `violencias` en marcas transversales: `perezmorales`, `sherwood`, `esquiva`, `exceptviolence`, `jaffeconcrete`. De esas cinco, `esquiva` ya quedó resuelta como C7 principal/C4 secundaria en el dictamen de C4 (§8 de ese dictamen) y por tanto sale del universo pendiente. Las cuatro restantes —`perezmorales`, `sherwood`, `exceptviolence`, `jaffeconcrete`— fueron registradas por el dictamen de C4 como **"casos priorizados para lectura contra C4"**, sin que ese dictamen las excluyera de ninguna otra corriente; no tienen corriente derivable y no se les asigna ninguna aquí. **4 entradas.**

### Intersecciones y duplicados (calculados, no presupuestos)

- **B ∩ D** (anclas de fenómeno que ya pasaron por lote con C5): `shepherdmaharani`, `keeganhofman`, `londonoargonauts` — 3 de 23 anclas.
- **E ∩ D** (señal léxica en entradas ya clasificadas con C5): `manoalzada`, `islandscity`, `afrocentroam`, `nixon_resistingparadise`, `putnamradical`, `bassiacuoso` — 6 de 32.
- **B ∩ E**: `cosgrovegarifuna`, `kahnislands`, `martinezsanmiguel`, `looklaichinese`, `austinfearblack`, `mamalola`, `castorspiritual`, `scher` — 8 ids con señal doble (ancla de fenómeno y término léxico), ninguno todavía con lote.
- **F ∩ B**, **F ∩ D**, **F ∩ E**: vacías. Los cuatro casos priorizados por C4 no coinciden con ningún otro conjunto construido para C5.

### Unión B ∪ D ∪ E ∪ F (A vacío por diseño, C subsumido en D)

**57 ids en total.** De ellos:

- **15 ya tienen rol confirmado en C5** (Conjunto D, §7).
- **2 pasaron por lote y quedaron clasificados en otra corriente confirmada**: `glissant` y `benitez`, ambos C8 (`creolizaciones_traducciones_opacidades`) — señal léxica de «archipiélago» en ambos casos, sin que eso los convirtiera en C5.
- **40 nunca pasaron por ningún lote** — universo de exploración construido por este método, no leído todavía desde la perspectiva de C5: `abello`, `archipelagicthinking`, `atkinsonearliest`, `austinfearblack`, `becklessavingsouls`, `branddoor`, `callaloonation`, `caribjourneys`, `castorspiritual`, `cosgrovegarifuna`, `crawfordturtlemen`, `deere`, `deloughrey`, `exceptviolence`, `globalculture`, `gonzalezsojourners`, `grosfoguelcolonial`, `jaffeconcrete`, `james_bannerethiopia`, `kahnislands`, `kalefragments`, `kloosterrealm`, `lizcanocarnaval`, `looklaichinese`, `mamalola`, `martinezsanmiguel`, `mintzpricebirth`, `mitchellalibi`, `pardomosquerahoffmann`, `perezmorales`, `prestolmasacre`, `puriradical`, `quinnblackpower`, `ramsaranlewis`, `russwurm`, `sangbenvolviendo`, `scher`, `sherwood`, `wilsoncrabantics`, `womenancestors`.

**Esta cifra —57 ids en la unión, 40 de ellos sin lote— se presenta como universo construido según este método (fenómenos compatibles + señales léxicas verificadas + decisiones pendientes relevantes, sobre las quince clasificaciones ya existentes). No es un universo académico definitivo.** Un método distinto —por ejemplo, uno que incluyera obras con señal léxica basada en la cadena «mar» sin filtrar falsos positivos, o que ampliara los fenómenos compatibles a criterio editorial— daría un número distinto. La ambigüedad y el criterio de qué cuenta como "señal suficiente" quedan para la Dirección Académica.

---

## 9. Fenómenos compatibles con C5

`catalogo-fenomenos.json` (versión `0.1.0-borrador`, 35 fenómenos en total) registra **seis fenómenos compatibles con C5**, verificados contra el campo `corrientes` de cada uno:

| Fenómeno | Familia | Corrientes compatibles | Anclas | Estado de cada ancla |
|---|---|---|---|---|
| `etnogenesis` | fuga | C3, C5, C8 | `gonzalezsojourners`, `cosgrovegarifuna`, `mintzpricebirth`, `womenancestors` | Las cuatro sin lote |
| `frontera_y_regimen_migratorio` | régimen | C7, C5 | `kahnislands`, `martinezsanmiguel`, `prestolmasacre` | Las tres sin lote |
| `indentura_y_trabajo_importado` | trabajo | C4, C5 | `kalefragments`, `shepherdmaharani`, `callaloonation`, `looklaichinese` | Una confirmada C5 principal (`shepherdmaharani`); tres sin lote |
| `mundos_indigenas_precoloniales` | indígena | C1, C5 | `keeganhofman`, `atkinsonearliest`, `londonoargonauts` | Una confirmada C5 secundaria (`keeganhofman`, principal C1); una confirmada C5 principal (`londonoargonauts`); una sin lote |
| `radicalismo_negro_transnacional` | circulación | C7, C5 | `quinnblackpower`, `james_bannerethiopia`, `austinfearblack`, `puriradical`, `russwurm` | Las cinco sin lote |
| `diaspora_y_hogar_disperso` | circulación | C5, C9 | `caribjourneys`, `mamalola`, `castorspiritual`, `scher` | Las cuatro sin lote |

**Totales: 23 anclas, de las cuales 3 ya pasaron por lote (2 con rol C5 confirmado, 1 con C5 como secundaria) y 20 permanecen sin lote.** Es, junto con `frontera_y_regimen_migratorio` y `diaspora_y_hogar_disperso`, uno de los tres fenómenos donde ninguna ancla ha sido leída todavía dentro de esta etapa.

**No se convierte esta compatibilidad de fenómeno en clasificación.** Que una obra sea ancla de un fenómeno compatible con C5 no implica que su corriente principal o secundaria vaya a ser C5: `keeganhofman` es ancla de `mundos_indigenas_precoloniales` y terminó con C1 como principal, C5 como secundaria.

Para comparación de escala, sin que eso tenga peso decisorio (el catálogo se declara a sí mismo *"borrador para dictamen académico; no se ha aplicado al corpus publicado"*): C1 tiene 5 fenómenos compatibles, C2 tiene 3, C3 tiene 4, C4 tiene 7, C5 tiene 6.

---

## 10. Señales léxicas

Derivadas exclusivamente de los términos que aparecen literalmente en el guion provisional de C5 (§4), no de la lista orientativa de la instrucción de trabajo. Se verificó, término por término, cuáles de los términos sugeridos aparecen realmente en el guion y cuáles no:

| Término sugerido | ¿Aparece en el guion de C5? |
|---|:---:|
| rutas | Sí — «Rutas documentadas» |
| diáspora | Sí — «Estudios de diáspora», «diáspora sostenida a distancia» |
| migración | Sí — «migración, exilio, retorno…» |
| circulación | Sí — «circulaciones documentadas», «red de circulación», «circulación cultural transatlántica» |
| exilio | Sí — mismo listado |
| archipiélago | Sí — «piensan el archipiélago como red de circulación» |
| puerto | **No** |
| agua (como palabra literal, distinta de "acuosas/acuoso") | **No** — el guion usa «geografías acuosas», no «agua» |
| navegación | **No** |
| movilidad | **No** — el guion usa «movimiento», no «movilidad» |
| desplazamiento | **No** |
| litoral | **No** |
| travesía | **No** |
| marinería | **No** |
| migración laboral | **No** — el guion no liga migración a trabajo de forma explícita |

**Términos adicionales, verificados en el guion y no incluidos en la lista sugerida:** retorno, tránsito, geografías acuosas / acuoso, movimiento, trayecto, cuenca, transatlántico, marítima, geografía crítica.

**Búsqueda contra el corpus (`ap` + `t` de las 232 obras), con límite de palabra real, no subcadena.** La primera pasada, hecha con coincidencia de subcadena simple sobre el término «mar», devolvió 18 falsas coincidencias — «maroon», «marronage», «marrons», «marea», «maría», «martha», «marco», «martinica», «marginal», «marxismo», «marineros/marineras», «marta», «margarita», «marín», «marines» — **ninguna de ellas la palabra «mar» en sí**. Se declara aquí explícitamente como método fallido y se descarta: **el término «mar» no es usable como señal léxica sin desambiguación adicional que este expediente no aplicó.**

Con coincidencia de límite de palabra, los términos con resultado genuino en el corpus son:

| Término | ids con coincidencia |
|---|---|
| diáspora/diaspora | `manoalzada`, `mamalola`, `islandscity`, `afrocentroam`, `scher`, `nixon_resistingparadise`, `martinezsanmiguel`, `castorspiritual` |
| archipiélago | `glissant`, `deere`, `abello`, `benitez`, `wilsoncrabantics`, `cosgrovegarifuna`, `sangbenvolviendo`, `archipelagicthinking`, `deloughrey` |
| cuenca | `islandscity`, `ramsaranlewis`, `mitchellalibi`, `kloosterrealm`, `austinfearblack`, `looklaichinese` |
| migración/migraci- | `grosfoguelcolonial`, `cosgrovegarifuna`, `martinezsanmiguel`, `kahnislands`, `looklaichinese` |
| marítima | `kahnislands`, `crawfordturtlemen` |
| circulación | `globalculture`, `putnamradical` |
| transatlántico | `lizcanocarnaval`, `becklessavingsouls` |
| trayectoria(s) | `pardomosquerahoffmann` |
| tránsito | `kloosterrealm` |
| retorno | `branddoor` |
| acuoso | `bassiacuoso` |
| ruta | `castorspiritual` |

**Total: 32 ids con al menos una señal léxica genuina.** «Exilio», «movimiento», «geografía crítica» y «red de circulación» —verificados como presentes en el guion— no produjeron ninguna coincidencia en el corpus con este método.

**Falsos positivos declarados.** Dos de los 32 ids (`glissant`, `benitez`) tienen señal léxica de «archipiélago» y están confirmados en los lotes como C8, no C5 — evidencia directa de que la señal léxica no equivale a una candidatura ni predice la clasificación final.

**Una señal léxica nunca equivale a una candidatura. Ninguno de los 32 ids queda convertido en candidatura por este expediente.**

---

## 11. Fronteras de C5

Calculadas contando toda coocurrencia de C5 con otra corriente dentro de una misma entrada de lote (como principal de una, secundaria de la otra; o ambas secundarias de una tercera principal), sin decidir de antemano cuáles fronteras son relevantes.

| Corriente | N.º de cruces | ids | Dirección |
|---|:---:|---|---|
| **C4** — Postplantación, trabajo y desposesión | 7 | `londonoargonauts`, `downtownladies`, `nixon_resistingparadise`, `shepherdmaharani`, `floresvillalobos`, `shellerconsuming`, `harpellecostarica` | Mixta: 3 con C5 principal/C4 secundaria; 3 con C4 principal/C5 secundaria; 1 con ambas secundarias de C10 |
| **C7** — Soberanías, fronteras y ocupaciones | 6 | `bassiacuoso`, `putnamradical`, `harpellecostarica`, `afrocentroam`, `mahlertricontinental`, `islandscity` | Las seis con C5 principal, C7 secundaria |
| **C10** — Cuerpos, parentescos y eróticas | 6 | `downtownladies`, `nixon_resistingparadise`, `shepherdmaharani`, `floresvillalobos`, `afrocentroam`, `islandscity` | Mixta: 3 con C5 principal/C10 secundaria; 1 con C10 principal/C5 secundaria; 2 con ambas secundarias de C4 |
| **C1** — Invasiones, despojos y mundos indígenas | 2 | `keeganhofman`, `londonoargonauts` | Una con C1 principal/C5 secundaria; una con C5 principal/C1 secundaria |
| **C8** — Creolizaciones, traducciones y opacidades | 2 | `shellerconsuming`, `mahlertricontinental` | Una con ambas secundarias de C4; una con C5 principal/C8 secundaria |
| **C9** — Archivos vivos, espiritualidades y saberes transmitidos | 1 | `manoalzada` | C9 principal, C5 secundaria |
| **C3** — Fugas, cimarronajes y emancipaciones | 1 | `tackysrevolt` | C3 principal, C5 secundaria |
| **C2** — Trata, esclavización y plantación | 1 | `tackysrevolt` | Ambas (C2 y C5) secundarias de C3 principal |

**Comprobación cruzada.** El cruce con C4 (7 casos, mismos siete ids) coincide exactamente con lo que el dictamen de C4 ya había registrado desde su propia perspectiva (§6 de ese dictamen: *"C5 (rutas_diasporas_territorios_acuosos) | 7"*). El cruce con C3 (`tackysrevolt`) coincide con lo que el expediente de C3 ya había registrado en su tabla 8.1 (A01, `tackysrevolt`, C2/C5 secundarias). Ambas coincidencias se verificaron de nuevo de forma independiente en este expediente; no se copiaron.

**Preguntas conceptuales que la evidencia sostiene, sin resolverlas:**

- **C5/C7 (6 cruces, la frontera más pareja en dirección: siempre C5 principal, C7 secundaria).** Las seis obras narran migración o circulación caribeña que roza cuestiones de ciudadanía, soberanía o frontera estatal (`putnamradical`, `afrocentroam`, `islandscity`, `mahlertricontinental` tratan formaciones diaspóricas con dimensión política). El guion de C5 no menciona a C7 como corriente próxima ni de riesgo de solapamiento (dice C8, con 0 cruces directos verificados) — la evidencia empírica no coincide con lo que el guion declara como su vecina más cercana.
- **C5/C10 (6 cruces).** Coincide en gran medida con los mismos ids que cruzan con C4 (`downtownladies`, `nixon_resistingparadise`, `shepherdmaharani`, `floresvillalobos`), lo que sugiere una zona de triple frontera C4/C5/C10 alrededor del trabajo migrante, reproductivo y de género, no explorada por ningún guion de las tres corrientes de forma explícita.
- **C5/C8 (2 cruces, ninguno directo).** Pese a que el guion de C5 declara a C8 como su corriente más próxima, no existe todavía ningún caso confirmado de coocurrencia directa C5↔C8 en los lotes — la afirmación del guion carece, por ahora, de evidencia de caso.
- **C5/C1 (`londonoargonauts`, `keeganhofman`).** Ambos casos pasan por el fenómeno `mundos_indigenas_precoloniales` (§9), que explícitamente declara compatibilidad C1/C5 — la frontera tiene, aquí, respaldo tanto en lote como en fenómeno.

---

## 12. Casos testigo

Seleccionados después de reconstruir la evidencia de §6 a §11, cada uno representando un problema verificable distinto:

**1. `bassiacuoso` — la única candidatura históricamente verificable hacia C5.** Es el único caso, de las quince entradas clasificadas, donde Git permite ver el tránsito completo de `corrientes_candidatas: [C7, C5]` a `corriente_confirmada: C5`. Es testigo de que el mecanismo de candidatura-a-confirmación existió al menos una vez para C5, y de que el resto del historial no permite verificar si existió para los otros catorce casos.

**2. `keeganhofman` — una entrada llega a C5 sin haber pasado por candidatura hacia C5.** Su candidatura original (`invasiones_mundos_indigenas`, `memorias_espiritualidades_archivos_vivos`) nunca mencionó C5; la confirmación editorial le añadió C5 como secundaria directamente. Es testigo de que "pasar por candidatura hacia X" y "terminar clasificada en X" son eventos distintos que no siempre coinciden.

**3. `tackysrevolt` — frontera C3/C5 ya señalada como pregunta abierta por el propio expediente de C3.** C3 principal, C2 y C5 ambas secundarias, con el fundamento «redes atlánticas» sosteniendo la secundaria C5. El expediente de C3 (§14.3) ya dejó explícita la pregunta de si un caso de fuga que se resuelve en desplazamiento debería llevar C5 como secundaria o al revés — este expediente no la reabre, solo confirma que el caso sigue teniendo el mismo estado.

**4. `shellerconsuming` — triple corriente sin que ninguna sea C5 principal.** C4 principal, C5 y C8 ambas secundarias. Es el único caso, entre los quince, donde C5 comparte el rol de secundaria con otra corriente distinta de C1, C7 o C10 (aparece junto a C8, la corriente que el guion de C5 declara como "más próxima" — pero aquí ninguna de las dos es principal).

**5. Territorio y lengua entre las quince entradas ya clasificadas: fuertemente sesgado.** De las quince, trece llevan `lenguas_publicacion: ["inglés"]` (una es español —`manoalzada`— y dos no tienen el campo lleno). Territorialmente: cinco en Jamaica, dos en Cartagena, dos en Costa Rica, una cada una en Santa Marta, Guyana, Panamá, Belice y Cuba. **No hay ninguna entrada con territorio en el Caribe neerlandófono, ni en Puerto Rico, República Dominicana o el Caribe francófono/Haití como territorio propio** (Haití aparece mencionado dentro del fundamento de `downtownladies`, pero el territorio registrado de esa obra es Jamaica). Es testigo de un desequilibrio territorial y lingüístico dentro de lo ya clasificado, no de un vacío del corpus completo — ver §13.

---

## 13. Vacíos e incertidumbres

Distinguiendo estrictamente los cuatro tipos que pide la instrucción:

**1. Vacío dentro de las clasificaciones C5 actuales (evaluable desde el repositorio).** De los 23 anclas de fenómeno compatibles con C5, solo 3 pasaron por lote (§9). De las 15 entradas clasificadas, 13 están en inglés y ninguna tiene como territorio el Caribe neerlandófono, Puerto Rico, República Dominicana o el Caribe francófono/Haití (§12, caso testigo 5). Este es el vacío mejor evidenciado de todo el expediente.

**2. Vacío dentro del corpus (evaluable desde el repositorio).** No se evaluó de forma sistemática si el corpus de 232 obras contiene, en general, suficiente material sobre el Caribe neerlandófono, francófono o hispanohablante insular — solo se verificó el sesgo dentro de lo ya clasificado como C5. Extender esa evaluación al corpus completo excede el método de este expediente.

**3. Vacío dentro del universo pendiente (evaluable desde el repositorio).** De los 40 ids sin lote en la unión de conjuntos (§8), no se leyó ninguno para determinar si de verdad organiza su argumento alrededor de la circulación. Es, por definición, la extensión completa de lo no evaluado todavía.

**4. Vacío historiográfico externo (no evaluable desde este repositorio).** Este expediente no puede afirmar, ni afirma, que exista o no exista una carencia real de investigación académica sobre diáspora, rutas o territorios acuosos caribeños fuera del corpus de este proyecto. Cualquier afirmación de ese tipo requeriría investigación externa al Atlas y no se declara aquí como hecho.

**Vacíos analizados por eje, solo donde los datos lo permiten:**

- **Territorio:** ver §12, caso testigo 5 — sesgo verificado hacia el Caribe anglófono y circuncaribe migrante (Costa Rica, Panamá, Belice).
- **Lengua:** 13/15 en inglés — mismo hallazgo.
- **Periodo:** no se sistematizó; requeriría extraer `temporalidades.periodo_estudiado` de las quince entradas, tarea no realizada en esta sesión.
- **Tipo de movilidad:** de las quince, se leen migración laboral (`shepherdmaharani`, `harpellecostarica`, `afrocentroam`), navegación/comercio costero (`bassiacuoso`, `londonoargonauts`), circulación política/intelectual (`putnamradical`, `mahlertricontinental`), turismo y diáspora sexual (`nixon_resistingparadise`, `shellerconsuming`). No se identificó ningún caso de retorno como eje central, pese a que el guion lo nombra explícitamente («retorno»); el único hit léxico de «retorno» (`branddoor`) no pasó por lote.
- **Escala:** no se sistematizó.
- **Género:** no se sistematizó más allá de lo ya visible en los fundamentos citados (`shepherdmaharani`, `floresvillalobos` tocan trabajo femenino y reproductivo como secundario, nunca como argumento central de C5).
- **Rutas insulares/continentales:** de las quince, la mayoría son rutas hacia el continente (Costa Rica, Panamá, Nueva York) más que interinsulares — con la excepción parcial de `londonoargonauts` (ruta costera Taganga–Dibulla).
- **Caribe colombiano/Gran Caribe:** dos de las quince entradas (`bassiacuoso`, `manoalzada`) tienen territorio colombiano (Cartagena); una más, Santa Marta (`londonoargonauts`).

---

## 14. Contradicciones documentales

| Contradicción | Fuente A | Fuente B | Comprobación | Estado |
|---|---|---|---|---|
| Vía de constitución declarada vs. observada | `etapa-1-arquitectura-integrada.md` y `decisiones-pendientes.md`: C5 se constituye por "siembra bibliográfica dirigida", vía que `esquema-datos-propuesto.json` declara incompatible con `procedencia: corpus heredado` y con `proceso: migración/reclasificación` | Los cuatro archivos de lote: las 15 entradas con rol C5 tienen, sin excepción, `procedencia: "corpus heredado"`; las 15 incluyen `"reclasificación"` en su proceso, 10 incluyen además `"migración"`; ninguna tiene `procedencia: "siembra nueva"` ni `proceso: "siembra"` | Verificado por extracción de las 15 entradas de los 4 archivos de lote | Sin resolver. El `glosario-archipielico.md` anticipa parcialmente la tensión ("si alguna entrada heredada termina en C5 será porque su argumento se organiza alrededor de la circulación, y eso solo puede decirlo la lectura"), pero ni la arquitectura ni `decisiones-pendientes.md` incorporan esa salvedad a la declaración de vía de constitución |
| Corriente más próxima declarada (C8) vs. evidencia de coocurrencia real | Guion de C5 en `etapa-1-arquitectura-integrada.md`: "Corriente más próxima: C8" | Tabla de fronteras (§11): 0 cruces directos C5↔C8 en los lotes; C4, C7 y C10 tienen 6–7 cruces cada una | Verificado por conteo de coocurrencia en las 57 entradas de lote | Sin resolver. Puede ser una afirmación conceptual válida sin sustento empírico todavía, no necesariamente errónea |
| `ficha-decision-c4.md` sin comprometer a Git | Commit `8dfdbd7`: `dictamen-academico-c4.md` cita `ficha-decision-c4.md` como una de sus dos bases documentales | Listado de directorio de la copia local de Rob: el archivo existe (33 338 bytes) pero no aparece en ningún commit del árbol de Git | Verificado por listado de directorio local vs. árbol de `8dfdbd7` (no por `git status`, según nota metodológica) | Sin resolver — reportado también en §0 como hallazgo no bloqueante |
| Numeración de "apartado 5" del guion en el dictamen de C4 | Dictamen de C4, §2: "Según el guion vigente de Atlas 2.0 (apartado 5…)" | `etapa-1-arquitectura-integrada.md`: los guiones de C1–C10 están en el apartado 2, no en el 5 (que trata "Estados editoriales: cuatro ejes, no una secuencia") | Verificado por lectura directa de los encabezados `##` del documento | Menor, no afecta ninguna cifra ni clasificación. Se registra por exigencia de completitud, no se corrige aquí porque corregirla sería tocar contenido de C4 |

**Ninguna otra contradicción factual pendiente detectada más allá de las cuatro listadas.**

---

## 15. Preguntas que deberá responder el futuro dictamen

No se fija de antemano un número. Emergen directamente de la evidencia de este expediente:

1. **Denominación.** ¿Se ratifica «Rutas, diásporas y territorios acuosos» / «Routes, diasporas and aqueous territories»? La estabilidad documental (cinco versiones idénticas) es la misma que ya se usó como fundamento en C4; queda a criterio de la Dirección Académica si ese mismo tipo de evidencia basta aquí.
2. **Guion.** ¿Se aprueba el texto del guion tal como está redactado, incluyendo la exclusión expresa de la trata (C2) y la fuga (C3)? ¿Se ajusta la declaración de "corriente más próxima" (C8), dado que la evidencia de coocurrencia real señala a C4, C7 y C10 con más fuerza?
3. **Vía de constitución.** ¿Se mantiene la calificación "siembra bibliográfica dirigida" para C5, pese a que ninguna de las quince entradas confirmadas llegó por esa vía? ¿Se reconoce la reclasificación desde el corpus heredado como vía legítima y ya en curso, en lugar de la declarada?
4. **Frontera con C3.** El caso `tackysrevolt` deja abierta, también para C5, la pregunta que el expediente de C3 ya formuló: ¿un caso de fuga con redes de circulación propias debe llevar C5 como secundaria, o el criterio de "sustracción vs. circulación" del guion decide de otro modo?
5. **Frontera con C4, C7 y C10.** Las tres fronteras más pobladas por evidencia (6–7 cruces cada una) no tienen, en el guion de ninguna de las cuatro corrientes involucradas, un criterio explícito que las distinga entre sí. ¿Requiere esto una regla nueva, o basta con el criterio general de "argumento central" ya usado en C1–C4?
6. **Universo de lectura.** ¿Se adopta el método de este expediente (fenómenos compatibles + señales léxicas verificadas + decisiones pendientes) para fijar el universo pendiente de C5, con sus 40 ids sin lote? ¿Se incorpora algún otro criterio no contemplado aquí?
7. **Casos deliberados.** ¿Se leen primero, contra C5, los cuatro casos priorizados por el dictamen de C4 (`perezmorales`, `sherwood`, `exceptviolence`, `jaffeconcrete`), dado que ese dictamen los reservó solo para C4 sin excluirlos de otras corrientes?
8. **Fenómenos.** ¿Se autoriza avanzar la lectura de las 20 anclas de fenómeno compatibles con C5 que aún no han pasado por lote?
9. **Vacío territorial y lingüístico.** ¿Se reconoce como prioridad editorial el sesgo hacia el Caribe anglófono y circuncaribe migrante detectado en las quince entradas ya clasificadas, y la ausencia total de territorio neerlandófono, puertorriqueño, dominicano o francófono/haitiano dentro de C5?
10. **Siembra.** ¿Se autoriza, para esta etapa, iniciar la siembra bibliográfica dirigida que los documentos declaran como propia de C5 pero que hasta ahora no ha producido ninguna entrada confirmada?
11. **El archivo `ficha-decision-c4.md`.** ¿Debe integrarse a Git como parte del historial de C4, o queda fuera de forma deliberada? No es una pregunta sobre C5, pero condiciona la limpieza del punto de partida para cualquier corriente futura.

---

## 16. Matriz de trazabilidad

| # | Afirmación | Fuente | Ruta | Campo | Commit/versión | Método | Resultado | Estado |
|:---:|---|---|---|---|---|---|---|---|
| 1 | Corpus total: 232 obras | Corpus | `datos-atlas.json` | `meta.version`, `obras.length` | HEAD `8dfdbd7` | Lectura directa + conteo por script | 232 | Verificado |
| 2 | 5 versiones de archivo de `catalogos-atlas-2.json` en el historial | Git | — | — | `619ad67`,`99aec5b`,`2343008`,`d3b15a7`,`16fc252` | `git log --follow` | 5 commits | Verificado |
| 3 | Registro de C5 idéntico byte a byte en las 5 versiones | Catálogo de corrientes | `catalogos-atlas-2.json` | `corrientes.rutas_diasporas_territorios_acuosos` | Las 5 anteriores | `git show` + comparación de objeto + `diff` línea a línea | 0 cambios | Verificado |
| 4 | 57 entradas en los 4 lotes (10+11+18+18) | Lotes | `piloto-config.json`, `s01`,`a01`,`a02-config.json` | `entradas.length` | HEAD `8dfdbd7` | Conteo por script | 57 | Verificado |
| 5 | C5 principal: 8 entradas | Lotes | ídem | `corriente_confirmada` | HEAD `8dfdbd7` | Filtro por script | 8 | Verificado |
| 6 | C5 secundaria: 7 entradas | Lotes | ídem | `corrientes_secundarias` | HEAD `8dfdbd7` | Filtro por script | 7 | Verificado |
| 7 | Sin doble conteo entre principal y secundaria | Lotes | ídem | — | HEAD `8dfdbd7` | `Set.size === array.length` | 15 = 15 | Verificado |
| 8 | Coincide con el "7" de cruces C4/C5 ya registrado por el dictamen de C4 | Dictamen C4 + lotes | `dictamen-academico-c4.md` §6 vs. lotes | — | HEAD `8dfdbd7` | Comparación de listas de ids | Coincide | Verificado, comprobación cruzada |
| 9 | 1 candidatura histórica verificable por Git hacia C5 (`bassiacuoso`) | Git | `piloto-config.json` | `corrientes_candidatas` | `619ad67`→`99aec5b` | `git show` de cada versión + diff | 1 | Verificado |
| 10 | 6 fenómenos compatibles con C5, 23 anclas únicas | Catálogo de fenómenos | `catalogo-fenomenos.json` | `fenomenos.*.corrientes` | HEAD `8dfdbd7` | Filtro por script + verificación de unicidad | 6 fenómenos, 23 anclas | Verificado |
| 11 | 3 de 23 anclas ya pasaron por lote | Fenómenos + lotes | ídem | — | HEAD `8dfdbd7` | Cruce por script | 3 | Verificado |
| 12 | Universo construido (unión B∪D∪E∪F): 57 ids, 40 sin lote | Fenómenos + lotes + léxico + decisiones pendientes | Múltiples | — | HEAD `8dfdbd7` | Unión de conjuntos por script | 57 / 40 | Verificado, dependiente del método declarado en §8 |
| 13 | 32 ids con señal léxica genuina (término «mar» descartado) | Corpus | `datos-atlas.json` | `ap`, `t` | HEAD `8dfdbd7` | Regex con límite de palabra | 32 | Verificado |
| 14 | 15/15 entradas C5 con `procedencia: corpus heredado`, 0/15 con `siembra nueva` | Lotes | ídem | `procedencia`, `proceso` | HEAD `8dfdbd7` | Extracción por script | 15/15, 0/15 | Verificado |
| 15 | `ficha-decision-c4.md` no está en el árbol de `8dfdbd7` pero existe en la copia local | Git + copia local | — | — | HEAD `8dfdbd7` vs. listado local | Comparación de listado de archivos (no `git status`) | Discrepancia confirmada | Verificado, sin resolver |
| 16 | Historial del `label` de C5 nunca cambia (misma conclusión que #3, verificación independiente) | Catálogo de corrientes | `catalogos-atlas-2.json` | `label`, `label_en`, `provisional` | Las 5 versiones | Segunda pasada, extracción JSON estructurada en vez de diff de texto | 0 cambios | Verificado, coincide con #3 |

---

## 17. Inventario de consultas

**Comandos Git ejecutados** (todos sobre el clon de solo lectura, ninguno sobre la copia local de Rob):

```
git ls-remote https://github.com/almanzarob-jpg/pensamientocaribe.git
git clone https://github.com/almanzarob-jpg/pensamientocaribe.git
git checkout feat/atlas-2-etapa-1-integrada
git rev-parse --abbrev-ref HEAD
git rev-parse --short HEAD
git rev-parse --short origin/feat/atlas-2-etapa-1-integrada
git status --short --branch
git log -10 --oneline --decorate
git show <commit> --stat   (sobre 8dfdbd7, 438a879, 619ad67, 99aec5b, 2343008, d3b15a7, 16fc252, 58723f9, 024bb41)
git show <commit>:<ruta>   (extracción de versiones históricas de catalogos-atlas-2.json y los 4 lotes)
git log --follow --oneline -- <ruta>   (sobre catalogos-atlas-2.json, piloto-config.json, s01/a01/a02-config.json)
git diff <commit1> <commit2> -- <ruta>
git diff --check / --name-only / --stat / --cached --name-only
git ls-files --others --exclude-standard
```

**Scripts de lectura (Node.js), todos sobre datos ya extraídos, ninguno escribió sobre corpus, catálogos ni lotes:**

- Extracción y comparación estructurada del objeto `corrientes.rutas_diasporas_territorios_acuosos` en las 5 versiones históricas del catálogo.
- Extracción de las 57 entradas de los 4 archivos de lote, con filtros por `corriente_confirmada`, `corrientes_secundarias`, `corriente_candidata`, `corrientes_candidatas`.
- Extracción de campo `f` (etiquetas heredadas), `l` (territorio) y `ap` (fundamento) del corpus para las 15 entradas C5 y para la búsqueda léxica completa.
- Construcción de la matriz de coocurrencia de fronteras (§11) por recorrido de las 57 entradas.
- Cálculo de conjuntos A–F y sus intersecciones/uniones (§8), con verificación de tamaño de `Set` para descartar duplicados.
- Búsqueda léxica en dos pasadas: coincidencia de subcadena simple (descartada por falsos positivos) y coincidencia con límite de palabra (adoptada).
- Cruce de anclas de fenómeno contra el estado de lote de cada id (§9).

**Filtros y patrones léxicos:** lista de términos verificados en el guion de C5 (§10), aplicada con expresión regular de límite de palabra sobre los campos `ap` y `t` de las 232 obras del corpus.

**Métodos de deduplicación:** `new Set(ids).size` comparado contra `ids.length` en cada conteo que exigía descartar doble conteo (§7, §8).

**Herramientas fuera de Git usadas para el hallazgo de §0/§14:** `device_list_dir` sobre la copia local de Rob en `/Users/robertoalmanza/Pagina/pensamiento-caribe/data/agua-de-por-medio/atlas-2/documentos/`, comparación de listado de archivos y tamaños contra el árbol de `8dfdbd7`; lectura completa de `ficha-decision-c4.md` para descartar riesgo de mezcla con C5.

---

## Segunda pasada de verificación independiente

Antes de entregar este expediente se recalcularon de forma independiente, con una segunda ruta de cómputo distinta de la primera donde fue posible:

- **Historial del `label` de C5 (§3):** primera pasada por `diff` de texto completo entre versiones; segunda pasada por extracción JSON estructurada y comparación de objeto. **Coinciden: 0 cambios en las 5 versiones.**
- **C5 principal/secundaria (§7):** primera pasada por filtro directo sobre el array de 57 entradas; segunda pasada recalculada dentro del script de fronteras (§11), que vuelve a filtrar por `corriente_confirmada`/`corrientes_secundarias` de forma independiente para construir la matriz de cruces. **Coinciden: 8 principal, 7 secundaria, mismos ids.**
- **Cruce C4/C5 (§11):** recalculado y comparado contra la cifra ya publicada en el dictamen de C4 (7). **Coincide.**
- **Cruce C3/C5 (§11):** recalculado y comparado contra la tabla 8.1 del expediente de C3. **Coincide.**
- **Candidatura histórica de `bassiacuoso` (§6):** primera pasada detectada por `grep` sobre un `git diff` de texto; segunda pasada confirmada por extracción JSON estructurada de cada versión del archivo. **Coincide.**
- **Universo por conjuntos (§8):** recalculado dos veces con el mismo script pero relanzado de forma independiente después de fijar la lista final de ids del Conjunto E (léxico), para confirmar que el cambio de "mar" con subcadena a "mar" con límite de palabra no alteraba ningún otro conteo. **Coincide: 57 en la unión, 40 sin lote, en ambas corridas.**

**Ninguna cifra cambió entre la primera y la segunda pasada. No hubo que detenerse a explicar una discrepancia.**
