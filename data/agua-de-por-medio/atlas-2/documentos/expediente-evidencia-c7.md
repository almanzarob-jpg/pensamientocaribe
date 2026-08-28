# Expediente de evidencia de C7

## Soberanías, fronteras y ocupaciones

Rama `feat/atlas-2-etapa-1-integrada` · HEAD `0c9ac32d1e2a3fdc027ea0e269f340efbf2ff673` · corpus `datos-atlas.json` v1.16.1 (232 obras, 588 relaciones) · 17 de agosto de 2026.

Cada afirmación relevante de este expediente lleva una etiqueta de nivel de evidencia:

- **Verificado** — comprobable directamente en un archivo, lote, corpus o el historial de Git.
- **Derivado** — resultado reproducible de una operación de conjuntos o conteo sobre datos verificados.
- **Hipótesis** — explicación posible, no probada.
- **Decisión requerida** — cuestión que solo puede cerrar la Dirección Académica.

---

## 1. Propósito y límites

Este documento es **probatorio, no decisorio**. Reúne evidencia verificable sobre C7 para que la Dirección Académica pueda decidir. No ratifica la denominación de C7, no crea criterios académicos, no reclasifica ninguna obra, no crea corrientes secundarias nuevas, no siembra bibliografía, no modifica corpus, lotes ni catálogos, no resuelve ninguna frontera entre C7 y otra corriente (incluida C6/C7, que C6 ya dejó como criterio provisional propio, no ratificado desde C7), no redacta dictamen académico, no redacta `ficha-decision-c7.md` ni `registro-decisiones-c7.md`, y no avanza a C8. Toda formulación que sonaría a conclusión clasificatoria ("claramente pertenece", "debería ser C7", "la clasificación correcta es") se evita deliberadamente en todo el documento.

---

## 2. Estado del repositorio

**Verificado.**

```
rama activa:                                  feat/atlas-2-etapa-1-integrada
HEAD:                                          0c9ac32d1e2a3fdc027ea0e269f340efbf2ff673
mensaje de HEAD:                               "Documenta dictamen académico de la corriente C6"
fecha de HEAD:                                 2026-08-17 16:11:34 +0000
origin/feat/atlas-2-etapa-1-integrada:         0c9ac32d1e2a3fdc027ea0e269f340efbf2ff673  (coincide con HEAD, según el último fetch registrado localmente)
```

`git status` muestra un único archivo no rastreado: `ficha-decision-c4.md` — la incidencia heredada ya documentada en los expedientes de C4, C5 y C6 (existe en la copia local de Rob, nunca se comprometió a Git, no toca C7). No se creó ni tocó ningún otro archivo antes de este expediente. `git diff --stat HEAD` no devuelve ninguna línea: no hay ninguna modificación de working tree sobre archivo rastreado alguno. Ningún archivo de `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` ni de los cuatro lotes (`piloto`, `S01`, `A01`, `A02`) aparece modificado.

**No se detectó ninguna incidencia Git nueva que pueda contaminar C7.** El único hallazgo técnico pendiente sigue siendo `ficha-decision-c4.md`, ajeno a esta corriente.

**Nota operativa sobre `.git/index.lock`.** Igual que en los expedientes anteriores, el punto de montaje de la copia local no permite que Git borre (`unlink`) su propio archivo temporal de índice; un `git status` de esta misma sesión devolvió `warning: unable to unlink '.../.git/index.lock': Operation not permitted` sin que eso afectara el resultado del comando (la salida fue idéntica en dos ejecuciones independientes). Un `git fetch` intentado en esta sesión falló por conectividad ("Connection closed by UNKNOWN port 65535"), así que la comparación con `origin` se apoya en la referencia local ya existente, que coincide con HEAD. Todos los comandos usados en este expediente fueron de solo lectura (`status`, `diff`, `log`, `show`, `log -S`, `log --follow`).

---

## 3. Fuentes examinadas

**Verificado.**

| Fuente | Ruta |
|---|---|
| Corpus | `data/agua-de-por-medio/datos-atlas.json` |
| Catálogo de corrientes | `data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json` |
| Catálogo de fenómenos | `data/agua-de-por-medio/atlas-2/catalogo-fenomenos.json` (borrador `0.1.0-borrador`) |
| Arquitectura integrada | `data/agua-de-por-medio/atlas-2/documentos/etapa-1-arquitectura-integrada.md` |
| Decisiones pendientes | `data/agua-de-por-medio/atlas-2/documentos/decisiones-pendientes.md` |
| Glosario archipiélico | `data/agua-de-por-medio/atlas-2/documentos/glosario-archipielico.md` |
| Esquema de datos propuesto | `data/agua-de-por-medio/atlas-2/documentos/esquema-datos-propuesto.json` |
| Ampliación de fenómenos | `data/agua-de-por-medio/atlas-2/documentos/fenomenos-ampliacion.md` |
| Incidencias cerradas | `data/agua-de-por-medio/atlas-2/documentos/incidencias-cerradas.md` (sin menciones a C7) |
| Lote piloto | `data/agua-de-por-medio/atlas-2/piloto-config.json` y `piloto-generado.json` |
| Lote S01 | `data/agua-de-por-medio/atlas-2/lotes/s01-config.json` y `s01-generado.json` |
| Lote A01 | `data/agua-de-por-medio/atlas-2/lotes/a01-config.json` y `a01-generado.json` |
| Lote A02 | `data/agua-de-por-medio/atlas-2/lotes/a02-config.json` y `a02-generado.json` |
| Dictamen C1 | `.../documentos/dictamen-academico-c1.md` (comprobación cruzada, sin reabrir) |
| Dictamen C2 | `.../documentos/dictamen-academico-c2.md` (comprobación cruzada, sin reabrir) |
| Dictamen C3 | `.../documentos/dictamen-academico-c3.md` (comprobación cruzada, sin reabrir) |
| Dictamen C4 | `.../documentos/dictamen-academico-c4.md` (comprobación cruzada, sin reabrir) |
| Dictamen C5 | `.../documentos/dictamen-academico-c5.md` (comprobación cruzada, sin reabrir) |
| Dictamen C6 | `.../documentos/dictamen-academico-c6.md` (comprobación cruzada, sin reabrir) |
| Expediente C6 | `.../documentos/expediente-evidencia-c6.md` (plantilla metodológica, sin reabrir) |
| Historial Git | `git log`, `git show`, `git log --follow`, `git log -S`, `git diff` |

**Fuente descartada deliberadamente.** La carpeta `Pagina/atlas-etapa-1/` (fuera de este repositorio Git, en la carpeta de trabajo de Rob) contiene copias de `decisiones-pendientes.md`, `glosario-archipielico.md` y `metodologia-revisada-borrador.md` con contenido parcialmente distinto al de la versión comprometida en Git. No son fuente de este expediente: la instrucción de esta etapa exige trabajar sobre el repositorio, y esos archivos no están versionados en él.

---

## 4. Identidad documental de C7

**Verificado**, transcripción exacta de `catalogos-atlas-2.json` (esquema `2.0-lotes.2`, fecha `2026-08-10`):

```json
"soberanias_fronteras_ocupaciones": {
  "n": 7,
  "label": "Soberanías, fronteras y ocupaciones",
  "label_en": "Sovereignties, borders and occupations",
  "provisional": true
}
```

- **Id interno:** `soberanias_fronteras_ocupaciones`
- **Denominación (ES):** «Soberanías, fronteras y ocupaciones»
- **Denominación (EN):** «Sovereignties, borders and occupations»
- **`provisional`:** `true`

**Verificado**, transcripción literal de `etapa-1-arquitectura-integrada.md`, apartado "2. Guiones conceptuales de C1–C10", declarado en su totalidad como **"[PROPUESTA]"**, sin ninguna línea aprobada — igual que el resto de los diez:

> ¿Qué significa libertad cuando la nación soberana dejó de ser la respuesta? La corriente sigue estatus políticos no soberanos, ocupaciones militares, fronteras y formas de autoridad que no caben en el molde del Estado-nación. Su tensión: el Caribe produjo la primera república negra y también los territorios no incorporados más antiguos del mundo, y ambos hechos pertenecen a la misma historia. Recorre obras que piensan la soberanía desde su falla.

| Campo | Contenido (transcripción literal) |
|---|---|
| Alcance intelectual | Teoría política del estatus no soberano, historia de las ocupaciones, estudios fronterizos, derecho colonial |
| Incluye | Estatus no soberano; ocupación militar; frontera como dispositivo; formas de autoridad no estatal |
| No incluye | La insurgencia y la fuga, que son C3; la marca `colonialidad`, que atraviesa todas |
| Corriente más próxima | C1 y C3. Con C1 comparte la ocupación, pero C1 la trabaja sobre mundos indígenas; con C3 comparte la libertad, pero C3 la trabaja como sustracción |
| Riesgo de solapamiento | Alto. Es la segunda etiqueta heredada más poblada (62 entradas, 27 %) y la que más candidaturas ambiguas puede generar |
| Vía de constitución | Migración del corpus heredado |
| Estado | Provisional |

**Inclusión y exclusión no están definidas en ningún otro documento consultado.** `glosario-archipielico.md` no trae una entrada propia para "soberanía" ni "frontera" (solo una mención de paso, ver §6). `decisiones-pendientes.md` no fija criterio de inclusión/exclusión para C7 más allá de la tabla de reparto de `colonialidad` (§8). No existe un "guion conceptual" alternativo en ningún archivo de lote.

**Nota de verificación — la afirmación "segunda etiqueta heredada más poblada" no se pudo reproducir con una lectura literal de la cifra.** Contra `datos-atlas.json` (232 obras), el reparto exacto de las diez etiquetas heredadas del campo `f` es (recalculado dos veces, ver §9 para el método):

| Etiqueta | Entradas | Cobertura |
|---|---:|---:|
| memoria | 93 | 40,1 % |
| colonialidad | 77 | 33,2 % |
| **soberanias** | **62** | **26,7 %** |
| capitalismo_racial | 52 | 22,4 % |
| creolizacion | 51 | 22,0 % |
| violencias | 36 | 15,5 % |
| postplantacion | 34 | 14,7 % |
| cuerpo_erotica | 29 | 12,5 % |
| cimarronaje | 26 | 11,2 % |
| catastrofes | 16 | 6,9 % |

Por conteo simple sobre las diez, `soberanias` es la **tercera**, no la segunda (detrás de `memoria` y `colonialidad`). El propio guion de C7 llama a `colonialidad` "una marca que atraviesa todas" (es decir, no la trata como corriente-etiqueta exclusiva), y la sección 1.3 de `etapa-1-arquitectura-integrada.md` llama a `memoria` "marca transversal" por el mismo motivo; `fenomenos-ampliacion.md` (§8 de este expediente) documenta además que "la reforma degradó `capitalismo racial` y `violencias` a marcas transversales". Si se excluyen las cuatro etiquetas que en algún documento del repositorio se llaman "marca" (`memoria`, `colonialidad`, `capitalismo_racial`, `violencias`), `soberanias` (62) queda **primera**, no segunda, por delante de `creolizacion` (51). Bajo ninguna de las dos convenciones de conteo verificables en el repositorio la cifra "segunda" se reproduce literalmente. **Esto se documenta como una afirmación del guion que no se pudo verificar con el método de este expediente, no como un error corregido**: puede que la cifra provenga de un estado anterior del corpus, de un criterio de conteo no documentado, o de un cálculo hecho fuera del repositorio. Lo que sí queda verificado sin ambigüedad es la cifra absoluta: 62 entradas, 26,7 % ≈ 27 %, coincide exactamente con el guion.

---

## 5. Historial Git

### 5.1 La clave y la etiqueta de C7 en `catalogos-atlas-2.json`

**Verificado.** `git log --follow --oneline -- data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json` devuelve los mismos cinco commits ya verificados para C1, C4, C5 y C6, porque es el mismo archivo: `16fc252`, `d3b15a7`, `2343008`, `99aec5b`, `619ad67`. Se extrajo el objeto `corrientes.soberanias_fronteras_ocupaciones` de cada versión con `git show <commit>:<ruta> | jq`:

```
{"n":7,"label":"Soberanías, fronteras y ocupaciones","label_en":"Sovereignties, borders and occupations","provisional":true}
```

**Idéntico byte a byte en las cinco versiones.** Cero cambios de redacción registrados en el historial — mismo patrón que C1, C4, C5 y C6.

### 5.2 El guion conceptual en `etapa-1-arquitectura-integrada.md`

**Verificado.** `git log --follow --oneline -- data/agua-de-por-medio/atlas-2/documentos/etapa-1-arquitectura-integrada.md` devuelve **un único commit**: `d951345`, "Documenta arquitectura integrada de la Etapa 1 del Atlas 2.0" (12 de agosto de 2026), que añadió el archivo completo (735 inserciones, 0 archivos previos). `git log --oneline --all` sin `--follow` confirma el mismo resultado único. El propio documento se autodenomina "Versión 3" y menciona una "versión 2" aprobada por la Dirección Académica con precisiones vinculantes — **esas versiones anteriores no están comprometidas en este repositorio Git**; solo existe la versión final. El guion de C7 nunca cambió de redacción dentro del historial de Git porque solo hay una versión comprometida.

### 5.3 Candidaturas históricas hacia C7 en todo el repositorio

**Verificado.** `git log --oneline --all -S "soberanias_fronteras_ocupaciones"` (sobre todo el árbol, sin restringir a una ruta) devuelve diez commits: los cinco de `catalogos-atlas-2.json` (§5.1) más `024bb41` (A02), `58723f9` (A01), `2343008` (S01), `d951345` (arquitectura) y `d3b15a7` (fenómenos). No aparece ningún commit adicional de dictamen o expediente porque C7 nunca fue reabierta en un documento de otra corriente hasta ahora.

De los cuatro archivos de lote, solo `piloto-generado.json` tiene más de un commit real en su historia (`619ad67` → `99aec5b` → `2343008`); `s01-generado.json` y `a01-generado.json` tienen exactamente un commit real cada uno; `a02-generado.json` también tiene un único commit real (`024bb41`) — el commit `58723f9` que aparece con `--follow` es, igual que ya se documentó para C6, un artefacto de detección de renombrado con `a01-generado.json` (`git show 58723f9 --stat -- .../a02-generado.json` no devuelve ninguna línea). Por tanto, **la única entrada cuya candidatura pudo haber cambiado de contenido a lo largo del tiempo es alguna de las diez del lote piloto**, y de esas diez solo una menciona C7 en cualquiera de sus tres versiones: `bassiacuoso`.

```
619ad67  bassiacuoso.corrientes_candidatas = ["soberanias_fronteras_ocupaciones", "rutas_diasporas_territorios_acuosos"]
99aec5b  bassiacuoso.corriente_confirmada = "rutas_diasporas_territorios_acuosos"; corrientes_secundarias = ["soberanias_fronteras_ocupaciones"]
2343008  bassiacuoso.corriente_confirmada = "rutas_diasporas_territorios_acuosos"; corrientes_secundarias = ["soberanias_fronteras_ocupaciones"]  (sin cambio)
```

**Una candidatura histórica verificable por Git hacia C7: `bassiacuoso`**, que comenzó con dos corrientes candidatas (C7 y C5) y se resolvió en C5 principal / C7 secundaria en el commit siguiente. Ningún otro id, en ningún commit del repositorio, tuvo alguna vez `soberanias_fronteras_ocupaciones` en `corrientes_candidatas`, `corriente_confirmada` o `corrientes_secundarias` para luego perderla. Esto coincide con lo que ya registró `dictamen-academico-c5.md` (línea 137) desde la perspectiva de C5.

---

## 6. Guion académico

Ver transcripción completa en §4. No se parafrasea aquí para no introducir una segunda versión del texto.

**Menciones adicionales de "soberanía"/"frontera" en el resto del repositorio, fuera del guion mismo:**
- `glosario-archipielico.md`, línea 34, define "fricción epistémica" con un ejemplo que incluye "movilidad y soberanía" — es un ejemplo ilustrativo del glosario, no una definición de C7.
- `esquema-datos-propuesto.json`, líneas 163–170, usa `"corriente": "rutas_diasporas_acuosos"` y `"corriente_candidata": "soberanias_fronteras"` como *ejemplo genérico* de cómo se rellenan esos campos — los valores no son las claves reales del catálogo (`rutas_diasporas_territorios_acuosos`, `soberanias_fronteras_ocupaciones`), son abreviaturas de ejemplo en un documento de esquema, no datos de una obra real.

---

## 7. Vía constitutiva

**Hipótesis documental a comprobar (formulada así en la instrucción de esta etapa):** *C7 declara como vía constitutiva la migración del corpus heredado, particularmente desde la etiqueta heredada `soberanias`.*

### 7.1 Las 19 obras con algún rol confirmado en C7, por procedencia y proceso

**Verificado**, contra el campo `migracion2.procedencia` y `migracion2.proceso` de cada una de las 19 entradas con rol en C7 (ver tabla completa en §9):

**Las 19 tienen `procedencia: "corpus heredado"`. Ninguna tiene `procedencia: "siembra nueva"`.** Sobre esa base, la vía declarada coincide con el 100 % de las confirmaciones.

Sin embargo, dentro de las 19, el campo `proceso` no es uniforme:

- **17 de 19** incluyen literalmente `"migración"` en su arreglo `proceso`.
- **2 de 19 no incluyen `"migración"`**: `esquiva` (proceso: `corrección bibliográfica`, `reclasificación`) y `bassiacuoso` (proceso: `reclasificación`, únicamente).

### 7.2 El caso `esquiva`, examinado con más detalle porque es una de las tres C7 principales

**Verificado — tensión documental real, no forzada.**

`esquiva` es, junto con `schuller_killingkindness` y `hintzen`, una de las tres únicas obras con C7 como corriente **principal** confirmada. Su registro presenta tres discrepancias con la vía declarada:

1. **No lleva la etiqueta heredada `soberanias`.** El campo `f` de `esquiva` en `datos-atlas.json` es `["capitalismo_racial", "violencias"]` — ninguna relación textual con `soberanias`. `decisiones-pendientes.md` (§1) la nombra explícitamente, junto con otras cuatro (`perezmorales`, `sherwood`, `exceptviolence`, `jaffeconcrete`), como una de las **"cinco entradas sin correspondencia directa en la taxonomía anterior"**, precisamente porque sus dos etiquetas (`capitalismo racial` + `violencias`) se convirtieron en marcas transversales y no permiten derivar candidatura por sí solas. El mismo documento aclara: "Requieren lectura del texto para asignarles corriente principal." La confirmación de `esquiva` como C7 no vino, entonces, de la migración algorítmica de una etiqueta heredada, sino de una lectura editorial directa sin candidatura derivable previa.

2. **El campo `proceso` de su registro en S01 no incluye `"migración"`** (ver §7.1) — coherente con el punto anterior: no hubo, técnicamente, una etiqueta heredada de la que migrar.

3. **Su registro base en el corpus contradice, en un commit posterior, la corrección bibliográfica que su propio lote aprobó.** El lote S01 (`git show 2343008:.../lotes/s01-generado.json`, 8 de agosto de 2026) aprobó `correcciones_aprobadas: {k: "obra", a: "Karen Engle", t: "La esquiva promesa de desarrollo para las comunidades afrodescendientes: el futuro de la Ley 70", y: 2011}` — es decir, identificó autora y año y la reconoció como `obra` verificada. Pero el commit `dcf762f` ("Sincroniza corpus público del Atlas 1.16.1", 11 de agosto de 2026, **tres días después**) dejó el registro base de `esquiva` en `datos-atlas.json` sin aplicar esa corrección: `k: "manifestacion"`, `a: "archivo"`, `y: ""`, y añadió explícitamente `procedencia: "manifestación"`, `procedencia_verificada: false`. La nota de versión del propio corpus (`meta.nota_version`, v1.16.1) confirma el cambio: "declara chande, manoalzada y esquiva con procedencia manifestación y procedencia_verificada false, sin inventar autoría ni año." **La corrección bibliográfica aprobada por S01 y la procedencia que hoy exhibe el corpus público son, en este momento, dos estados distintos y no reconciliados del mismo registro** — verificado por `git show` sobre ambos commits, con fechas que confirman el orden cronológico (S01: 2026-08-08; sincronización 1.16.1: 2026-08-11).

**Este expediente no propone cuál de los dos estados debe prevalecer.** Se documenta como tensión documental verificada, no como error a corregir aquí.

### 7.3 Pregunta probatoria: ¿llegaron las clasificaciones confirmadas por la vía declarada?

**Derivado.** La respuesta no es uniforme:

- **Coincidencia plena (16 de 19):** procedencia "corpus heredado" y proceso con "migración" — consistente con "migración del corpus heredado" tal como lo declara el guion.
- **Coincidencia parcial (2 de 19 — `bassiacuoso`, `esquiva`):** procedencia "corpus heredado" pero proceso sin "migración" explícita; en el caso de `esquiva`, además, sin la etiqueta heredada `soberanias` y con una discrepancia documental de procedencia entre S01 y la sincronización 1.16.1 del corpus. En `bassiacuoso` sí existe la etiqueta heredada (§8), y su único proceso registrado es "reclasificación" — compatible con una migración implícita no rotulada así.
- **Sin coincidencia:** ninguna de las 19 (cero casos de `procedencia: "siembra nueva"`).

**A diferencia de C6** (donde las tres confirmaciones coincidían limpiamente con la vía declarada) **y de manera distinta a C5** (donde ninguna de las quince coincidía), C7 queda en un punto intermedio: la vía declarada explica la gran mayoría de los casos, pero no todos, y el caso que menos encaja (`esquiva`) es, además, uno de los tres principales.

---

## 8. Taxonomía heredada

**Verificado — recalculado contra `datos-atlas.json`, no copiado de ningún documento previo: 62 entradas llevan la etiqueta heredada `soberanias`.** Reverificado por segunda vez con un método distinto (`jq` sobre el JSON crudo, en vez de `node`): **62**, coincide. Reverificado una tercera vez en Python con expresión regular independiente sobre el campo `ap`/`t`: no aplica a este conteo (ese es el método léxico de §11, un conjunto distinto).

`fenomenos-ampliacion.md` (10 de agosto de 2026, sobre un corpus de 233 obras, una más que el actual) reporta la misma cifra exacta — 62, 27 % — pese a estar calculada sobre una versión distinta del corpus. Esto es consistente con que la obra que se retiró entre v1.15.0 (233) y v1.16.0/v1.16.1 (232) — la fusión de `stewardpuertorico` en `steward`, según el mensaje del commit `af31c4e` — no llevaba la etiqueta `soberanias`.

### 8.1 Cuántas de las 62 ya pasaron por algún lote

**Verificado — 10 de 62.** Cruce directo entre el conjunto de 62 ids con etiqueta `soberanias` y el conjunto de 57 registros de los cuatro lotes:

| id | Corriente confirmada | C7 en el registro |
|---|---|:---:|
| `bassiacuoso` | C5 (rutas, diásporas, territorios acuosos) | Secundaria |
| `afrocentroam` | C5 | Secundaria |
| `harpellecostarica` | C5 | Secundaria |
| `islandscity` | C5 | Secundaria |
| `mahlertricontinental` | C5 | Secundaria |
| `putnamradical` | C5 | Secundaria |
| `hintzen` | **C7** | **Principal** |
| `schuller_killingkindness` | **C7** | **Principal** |
| `benedictykokken_haitiexception` | C8 (creolizaciones) | Secundaria |
| `hazareesingh` | C3 (fugas, cimarronajes) | Secundaria |

**52 de las 62 nunca pasaron por ningún lote.** La lista completa de las 52 aparece dentro del universo exploratorio no procesado (§16.4), porque la etiqueta heredada `soberanias` es, precisamente, uno de los cuatro conjuntos que constituyen ese universo.

### 8.2 Capacidad predictiva de la etiqueta heredada

**Derivado.** De las 10 entradas con `soberanias` que sí pasaron por lote, las diez tienen algún rol en C7: **2 como principal** (`hintzen`, `schuller_killingkindness`), **6 como secundaria bajo C5 principal** (`bassiacuoso`, `afrocentroam`, `harpellecostarica`, `islandscity`, `mahlertricontinental`, `putnamradical`) y **2 como secundaria bajo un principal distinto de C5** (`benedictykokken_haitiexception` bajo C8, `hazareesingh` bajo C3). 2 + 6 + 2 = 10: **ninguna de las diez quedó completamente fuera de C7.** Es un patrón mucho más fuerte que el de C6 (donde, de 5 procesadas, solo 3 quedaron vinculadas). **No se generaliza esta proporción a las 52 restantes sin lote**: el tamaño de muestra (10) sigue siendo pequeño frente al total de 62, y la vía de entrada real de algunas de las 19 confirmadas (`esquiva`, ver §7.2) no pasó por esta etiqueta en absoluto.

---

## 9. Clasificaciones existentes

**Verificado, contra los 57 registros de los cuatro archivos de lote (10 piloto + 11 S01 + 18 A01 + 18 A02).** Reverificado con `jq` de forma independiente: mismo resultado.

### 9.1 C7 principal — 3

| id | Otra(s) corriente(s) | Fundamento registrado |
|---|---|---|
| `esquiva` | C4 secundaria | «La pregunta central es la eficacia territorial y política de la Ley 70 en el Caribe; turismo, desplazamiento y desigualdad quedan como dimensiones secundarias de desposesión.» |
| `schuller_killingkindness` | C4 secundaria | «El poder de ONG, donantes y Estado organiza la crítica del régimen de ayuda; desigualdad y desposesión son una dimensión secundaria.» |
| `hintzen` | C4 secundaria | «La supervivencia del régimen, el Estado y la movilización racial organizan el argumento; economía política y clase son secundarias.» |

**Las tres tienen C4 (postplantación, trabajo y desposesión) como única secundaria.** Ningún otro patrón se deriva de una muestra de tres (ver §15).

### 9.2 C7 secundaria — 16

| id | Principal | Otras secundarias | Fundamento registrado |
|---|---|---|---|
| `bassiacuoso` | C5 | — | «La obra organiza su argumento alrededor de circulaciones marítimas, geografías vividas y un Gran Caribe transimperial.» |
| `glissant` | C8 | — (a nivel de la entrada; el componente `glissant-discours-antillais` lleva C7 propia, ver §9.3) | «Le Discours antillais y Poétique de la Relation son libros diferentes pero convergen en una arquitectura de antillanidad, relación, opacidad y crítica colonial.» |
| `kutzinskisugar` | C10 | — | «La figura erótica racializada organiza la crítica del nacionalismo cubano; nación y soberanía son la dimensión secundaria.» |
| `belisodelirium` | C10 | C9 | «El cuerpo racializado convertido en diagnóstico y objeto de violencia estatal organiza el libro; la conexión caribeña es diaspórica y religiosa, no territorial.» |
| `bestlevitt` | C4 | — | «La economía de plantación se teoriza como estructura persistente de dependencia; subordinación metropolitana y soberanía económica son secundarias.» |
| `peasantscapital` | C4 | — | «El argumento explica cómo el campesinado dominicano se articula con capital, mercado bananero y sistema mundial; soberanía y dependencia quedan como dimensión secundaria.» |
| `politicallife` | C4 | C9 | «Las lógicas postplantación articulan trabajo, ciudadanía y violencia estatal; soberanía y memoria de la incursión son secundarias sustantivas.» |
| `beyondsun` | C6 | — | «Los ambientalismos caribeños organizan el volumen.» |
| `klein_battleparadise` | C4 | C6 (triple, ver §13.4) | «El centro es el capitalismo del desastre, la privatización y la desposesión post-María; ecología del huracán y soberanía son cruces secundarios.» |
| `putnamradical` | C5 | — | «Las movilidades caribeñas y la circulación de ideas políticas organizan el libro; soberanía y fronteras son consecuencias secundarias.» |
| `harpellecostarica` | C5 | C4 | «La migración antillana y su asentamiento en Costa Rica estructuran el libro; trabajo bananero y fronteras nacionales son secundarios.» |
| `afrocentroam` | C5 | C10 | «La vida social y política garífuna se produce a través de la migración transnacional; ciudadanía, racialización y parentesco son dimensiones secundarias.» |
| `mahlertricontinental` | C5 | C8 | «La circulación de lenguajes, imágenes y solidaridad antiimperial desde la Tricontinental organiza el estudio; soberanía y traducción política son secundarias.» |
| `islandscity` | C5 | C10 | «El volumen compara migraciones caribeñas y formaciones transnacionales en Nueva York; ciudadanía, raza y parentesco son cruces secundarios.» |
| `benedictykokken_haitiexception` | C8 | C9 | «La obra interroga cómo la narrativa antropológica produce la excepcionalidad haitiana: representación, traducción y opacidad son el principio ordenador.» |
| `hazareesingh` | C3 | C9 | «La biografía se organiza alrededor de revolución, emancipación y estrategia de Toussaint; soberanía y memoria política funcionan como secundarias.» |

### 9.3 Nivel componente (obras divididas)

**Verificado.** `glissant` se dividió en dos componentes (`decision_aprobada: "descomponer_en_componentes"`). El componente `glissant-discours-antillais` (*Le Discours antillais*) lleva su propia `corrientes_secundarias: ["soberanias_fronteras_ocupaciones"]`, declarada de forma independiente del campo de nivel-entrada (que también la trae). El otro componente, `glissant-poetique-relation` (*Poétique de la Relation*), **no** lleva C7 en ningún nivel. No hay ningún otro caso de división de obra con relación a C7 entre los tres registros con `obras_componentes` del corpus (`mintz` en piloto, `monahan` y `glissant` en S01) — `mintz` y `monahan` no mencionan C7 en ninguno de sus componentes.

### 9.4 Totales

**C7 principal: 3. C7 secundaria: 16. Total con algún rol confirmado: 19.** Sin solapamiento entre ambas listas (ningún id aparece dos veces). **Candidaturas activas sin confirmar hoy: 0** (ver §10). **Candidatura histórica verificable por Git: 1** (`bassiacuoso`, ya resuelta, ver §5.3).

**Comprobación cruzada con dictámenes ya emitidos:**
- `dictamen-academico-c4.md` (líneas 83, 88–90, 102, 105, 112) registra exactamente las mismas siete obras que en este expediente cruzan con C4 (`bestlevitt`, `klein_battleparadise`, `peasantscapital`, `politicallife`, `esquiva`, `hintzen`, `schuller_killingkindness`) con el mismo reparto de dirección — coincide.
- `dictamen-academico-c5.md` (líneas 116–123, 78) registra los mismos seis cruces C5→C7 secundaria (`bassiacuoso`, `putnamradical`, `harpellecostarica`, `afrocentroam`, `mahlertricontinental`, `islandscity`) y los mismos fundamentos — coincide, y confirma que la dirección es unánime (C5 siempre principal en este cruce).
- `dictamen-academico-c6.md` (líneas 96–102) registra la frontera C7/C6 con los mismos dos casos (`beyondsun`, `klein_battleparadise`) — coincide.
- `dictamen-academico-c3.md` (línea 120) registra a `hazareesingh` con el mismo fundamento — coincide.
- `dictamen-academico-c2.md` (líneas 175, 177, 179) menciona a `bestlevitt`, `kutzinskisugar` y `politicallife` dentro de su propia tabla de señales léxicas descartadas para C2, aclarando en los tres casos que "la secundaria declarada es C7" — coincide, y confirma independientemente que ninguna de las tres tiene relación con C2.
- `dictamen-academico-c1.md` (líneas 222, 281) menciona a C7 solo en una tabla general de criterios y una nota de relación potencial con C5/C7/C9/C10 — no aporta casos verificables adicionales.

---

## 10. Candidaturas

**Apartado propio, como exige la instrucción de esta etapa.**

**Candidaturas activas hoy (campo `corrientes_candidatas` conteniendo C7 en cualquiera de los 57 registros de lote, estado HEAD actual): 0.** Verificado por búsqueda estructurada sobre los cuatro archivos `*-generado.json` y confirmado por `grep` crudo del string `soberanias_fronteras_ocupaciones` en cada archivo (20 ocurrencias totales en los cuatro archivos, todas contabilizadas y ninguna en un campo `corrientes_candidatas`).

**Candidatura histórica verificable por Git: 1 — `bassiacuoso`** (ver §5.3 para el detalle completo). Resumen: comenzó como candidata doble (C7 y C5) en el commit `619ad67` y se resolvió como C5 principal / C7 secundaria en `99aec5b`, sin volver a cambiar. No es un descarte de C7: C7 se conservó como secundaria confirmada.

**Ninguna candidatura fue descartada de C7 sin dejar rastro verificable.** No se encontró, en ningún commit, un caso donde C7 apareciera en `corrientes_candidatas` y luego desapareciera del registro sin pasar a `corriente_confirmada` o `corrientes_secundarias`.

---

## 11. Señales conceptuales y léxicas

**Verificado — metodología idéntica a la usada en C5 y C6: solo términos que aparecen literalmente en el guion de C7 (§4), con límite de palabra (incluyendo variantes de género/número), contra los campos `ap` y `t` de las 232 obras.** Reverificado con una segunda implementación independiente en Python (expresiones regulares reescritas desde cero): **mismo conjunto de 30 ids, sin diferencias.**

| Término | ¿En el guion? | Resultado | ids con coincidencia |
|---|:---:|:---:|---|
| soberanía/soberano/soberana | Sí | 14 | `casimir`, `bonilla`, `besson`, `alabi`, `politicallife`, `lara`, `hintzen`, `vanderpijl_equaliberty`, `schuller_killingkindness`, `trouillothaitistate`, `wilderfreedomtime`, `rifkinfictions`, `corinealdipanama`, `oostindiedecolonising` |
| ocupación/ocupaciones | Sí | 1 | `smithredblack` |
| frontera/fronteras | Sí | 8 | `trouillot`, `ramadan`, `bassiacuoso`, `helglibertyequality`, `archipelagicthinking`, `prestolmasacre`, `kahnislands`, `crawfordturtlemen` |
| república(s) | Sí | 3 | `schuller_killingkindness`, `helglibertyequality`, `hoeftetrajectories` |
| autoridad(es) | Sí | 3 | `rappaportcobarde`, `schweitzerbata`, `mitchellalibi` |
| estado-nación | Sí | 3 | `yountaesecular`, `castorspiritual`, `londonoargonauts` |

**Unión de los seis términos: 30 ids.**

**Término adicional probado y descartado por alto riesgo de falso positivo** (no incorporado a la señal final, siguiendo la misma disciplina que descartó "mar" en C5 y "colonial sin acotar" en C6):

| Término | Resultado | Motivo del descarte |
|---|:---:|---|
| colonial (sin acotar) | 37 (15,9 % del corpus) | Mismo problema ya documentado en C6: demasiado genérico para discriminar; y el propio guion de C7 llama a `colonialidad` "una marca que atraviesa todas", no un término propio de C7 |

### 11.1 Cruce con la clasificación existente

**Derivado.** De los 30 ids del léxico, **4 ya tienen rol confirmado en C7** (`politicallife`, `hintzen`, `schuller_killingkindness`, `bassiacuoso`) y **26 no tienen ningún rol en C7 hoy**. Esos 26 se dividen en tres grupos según el criterio pedido por esta etapa:

**A. Señales fuertes (comparten, además del léxico, la etiqueta heredada `soberanias` y/o una ancla de fenómeno compatible con C7 — 15 de los 26):** `bonilla`, `vanderpijl_equaliberty`, `oostindiedecolonising`, `helglibertyequality`, `kahnislands`, `hoeftetrajectories`, `corinealdipanama` (con ancla de fenómeno además del léxico), `besson`, `wilderfreedomtime`, `rifkinfictions`, `trouillothaitistate`, `smithredblack`, `crawfordturtlemen` (con etiqueta heredada), `alabi`, `lara` (con etiqueta heredada, pero ver nota de frontera C3/C7 más abajo).

**B. Señales ambiguas (el término aparece de forma temáticamente cercana pero no central, sin refuerzo de etiqueta heredada ni ancla de fenómeno — 8 de los 26):** `casimir` ("Pueblo soberano, lakou" — soberanía cotidiana de la comunidad postplantación, no del Estado), `trouillot` ("El Caribe como frontera abierta" — uso metodológico/metafórico de "frontera" para describir el objeto del proyecto, no un análisis de fronteras estatales), `ramadan` ("la frontera del Estado" que la identidad rastafari "desborda" — cercano al tema pero organizado por espiritualidad, no por el dispositivo estatal), `londonoargonauts` ("antecede y desborda al Estado-nación" — tecnología de navegación indígena, el término aparece pero no organiza el argumento), `castorspiritual` ("rehaciendo pertenencia por fuera del Estado-nación" — ciudadanía espiritual, tema afín pero no organizado por soberanía/frontera), `yountaesecular` ("ideología del Estado-nación" — teoría de la secularización, mención de paso), `archipelagicthinking` ("frontera nacional" — mención de paso dentro de un argumento metodológico sobre pensamiento archipelágico), `prestolmasacre` (etiqueta heredada `violencias`+`memoria`, sin `soberanias`; el término "frontera" aquí es literal —la matanza de 1937 ocurrió en la frontera dominico-haitiana— y el tema es cercano, pero el fundamento organizador es el testimonio de la violencia de Estado, no la teoría de la soberanía).

**C. Posibles falsos positivos verificados por lectura — ver §12 (3 de los 26).**

**Nota sobre `alabi` y `lara` (señal fuerte con tensión de frontera declarada).** Ambos usan literalmente "soberanía" para describir formas de autoridad que el propio guion de C7 podría excluir: `alabi` habla de "la soberanía cimarrona" (un capitán saramaka bajo la Corona holandesa) — el guion de C7 excluye explícitamente "la insurgencia y la fuga, que son C3"; `lara` habla de "la soberanía negra pensada no desde el Estado sino desde el cuerpo queer" — organizada por C10 (cuerpo/erótica) según su propia etiqueta heredada (`cuerpo_erotica`, `soberanias`). Ninguna de las dos está clasificada hoy. Se registran aquí como los dos casos del universo exploratorio donde la tensión conceptual C3/C7 y C10/C7 es más explícita en el propio texto, no como candidaturas.

---

## 12. Falsos positivos verificados

**Verificado por lectura directa del campo `ap` — no por inferencia.**

### `schweitzerbata`

> «El tambor batá como forma de conocimiento transmitida de maestro a discípulo, no como pieza de folclore para ilustrar un capítulo sobre religión. Reconoce a Fernando Ortiz como **la autoridad fundacional del campo**, aunque por obras distintas a la que el atlas cataloga.»

"Autoridad" nombra aquí **autoridad intelectual/académica** (Ortiz como referencia fundacional de un campo de estudio), no la "forma de autoridad no estatal" que el guion de C7 declara incluir. **Confirmado como falso positivo léxico por lectura.**

### `mitchellalibi`

> «Historia global del capital que no es un libro caribeño —su eje es Egipto y el petróleo— pero hace de la plantación azucarera del Caribe y de la Revolución Haitiana una bisagra estructural en el origen del capitalismo moderno, **citando a Cedric Robinson como autoridad**. Entra con esa salvedad declarada, no como obra centrada en la cuenca.»

Mismo patrón: "autoridad" como autoridad citacional, no política. Además, la propia entrada aclara "no es un libro caribeño", lo que la aleja de cualquier corriente del Atlas por razón de alcance, no solo de tema. **Confirmado como falso positivo léxico por lectura.**

### `rappaportcobarde`

> «Compartir **la autoridad investigativa** con las y los campesinos activistas de la ANUC como método: la Rosca de Investigación y Acción Social de Fals Borda frente al positivismo académico en las Sabanas del Caribe colombiano.»

"Autoridad" nombra aquí autoridad metodológica dentro de la investigación-acción participativa, no autoridad política ni estatal. **Confirmado como falso positivo léxico por lectura.**

### Observación metodológica

**Derivado, presentado como evidencia, no como criterio nuevo.** Las tres coincidencias descartadas comparten el mismo patrón: el término "autoridad" aparece en su sentido epistémico/citacional (alguien es "una autoridad" en un campo), no en el sentido político que organiza el guion de C7 ("formas de autoridad no estatal"). **De los tres términos con coincidencia, "autoridad" es el que produjo el 100 % de los falsos positivos verificados** (3 de 3 coincidencias de ese término fueron descartadas); ninguno de los otros cinco términos (soberanía, ocupación, frontera, república, estado-nación) produjo un falso positivo confirmado por lectura en este expediente, aunque §11.1-B registra ocho casos ambiguos que no se resolvieron en ningún sentido. Si la Dirección Académica desea formalizar que "autoridad" sin calificar es un término de bajo valor discriminante para C7, es una decisión suya — este expediente no la fija.

---

## 13. Fronteras

**Verificado, calculado sobre las 19 entradas con algún rol confirmado en C7 (§9).**

### 13.1 Tabla resumen

| Frontera | Casos | C7 principal | C7 secundaria | Dirección |
|:---:|:---:|:---:|:---:|---|
| C4/C7 | 7 | 3 | 4 | Mixta: 3 con C7 principal/C4 secundaria, 4 con C4 principal/C7 secundaria |
| C5/C7 | 6 | 0 | 6 | Unánime: siempre C5 principal, C7 secundaria |
| C8/C7 | 2 | 0 | 2 | Unánime: siempre C8 principal, C7 secundaria |
| C10/C7 | 2 | 0 | 2 | Unánime: siempre C10 principal, C7 secundaria |
| C6/C7 | 1 binario + 1 triple | 0 | 2 | Unánime: C7 siempre secundaria — principal C6 en el caso binario (`beyondsun`), principal C4 con C6 como co-secundaria en el triple (`klein_battleparadise`) |
| C3/C7 | 1 | 0 | 1 | Unánime: C3 principal, C7 secundaria |
| C1/C7 | 0 | — | — | **Sin ningún caso confirmado**, pese a ser declarada "corriente más próxima" en el guion (§4) |
| C2/C7 | 0 | — | — | Sin ningún caso confirmado |
| C9/C7 | — | — | — | C9 nunca aparece como principal cuando C7 es secundaria; sí aparece como **co-secundaria** junto con C7 en 4 casos (ver §13.4) |

**7 + 6 + 2 + 2 + 1 + 1 = 19 relaciones binarias directas C7↔otra-corriente contadas una vez por obra**, coincide con el total de 19 obras con rol confirmado (cada una de las 16 secundarias aporta exactamente una relación C7↔principal; cada una de las 3 principales aporta una relación C7↔C4 en dirección inversa). El caso `klein_battleparadise` se cuenta una vez en C4/C7 (por su relación con el principal C4) y aparece además como co-secundaria en la fila C6/C7 y en §13.4 porque es un caso triple.

### 13.2 Caso por caso — C4/C7 (la frontera más densa)

| Obra | Principal | Secundaria(s) | Fundamento registrado |
|:---:|:---:|:---:|---|
| `esquiva` | C7 | C4 | «La eficacia territorial y política de la Ley 70; turismo, desplazamiento y desigualdad son secundarias.» |
| `schuller_killingkindness` | C7 | C4 | «El poder de ONG, donantes y Estado; desigualdad y desposesión son secundarias.» |
| `hintzen` | C7 | C4 | «La supervivencia del régimen, el Estado y la movilización racial; economía política y clase son secundarias.» |
| `bestlevitt` | C4 | C7 | «La economía de plantación como estructura persistente de dependencia; subordinación metropolitana y soberanía económica son secundarias.» |
| `peasantscapital` | C4 | C7 | «El campesinado dominicano articulado con capital y mercado bananero; soberanía y dependencia son secundarias.» |
| `politicallife` | C4 | C7, C9 | «Trabajo, ciudadanía y violencia estatal; soberanía y memoria de la incursión son secundarias.» |
| `klein_battleparadise` | C4 | C6, C7 | «Capitalismo del desastre, privatización, desposesión post-María; ecología del huracán y soberanía son cruces secundarios.» |

### 13.3 Caso por caso — el resto de las fronteras con dos o más casos

**C5/C7 (6 casos, ya ratificado en criterio desde la perspectiva de C5):** `bassiacuoso`, `putnamradical` (secundaria única) y `harpellecostarica`, `afrocentroam`, `mahlertricontinental`, `islandscity` (con una segunda secundaria además de C7, ver §13.4) — las seis con C5 principal/C7 secundaria. `dictamen-academico-c5.md` (línea 76) ya fijó, como criterio ratificado por la Dirección Académica **desde C5**: *"C5 organiza el argumento cuando el núcleo es la circulación; C7 lo organiza cuando el núcleo es el dispositivo estatal, la soberanía, la frontera o la ocupación."* Este expediente no ratifica ese criterio desde C7 — lo registra como antecedente (ver §15.1).

**C8/C7 (2 casos):** `glissant` (C8 principal, C7 secundaria única — con el matiz de nivel-componente de §9.3) y `benedictykokken_haitiexception` (C8 principal, C7 secundaria junto con C9, ver §13.4).

**C10/C7 (2 casos):** `kutzinskisugar` (C10 principal, C7 secundaria única) y `belisodelirium` (C10 principal, C7 secundaria junto con C9, ver §13.4).

Dos entradas más tienen a C7 como secundaria bajo un principal C5, con C10 como segunda secundaria (`afrocentroam`, `islandscity`): en esos dos casos C7 responde directamente a C5, no a C10, así que se cuentan en C5/C7 (arriba) y no en C10/C7 — C10 aparece ahí como acompañante, no como principal frente a C7. El mismo criterio de lectura (qué corriente es la principal directa de C7 en cada entrada) es el que ordena todas las fronteras de esta sección y evita contar dos veces la misma relación.

### 13.4 Casos triples — no reducidos artificialmente a una frontera binaria

**Verificado — 9 de las 19 obras con rol en C7 cruzan una tercera corriente en la misma entrada** (llevan, además de su principal, dos corrientes secundarias en vez de una):

| Obra | Principal | Secundaria directa de C7* | Corriente acompañante | Lectura |
|---|:---:|:---:|:---:|---|
| `belisodelirium` | C10 | — | C9 | Triple C10/C7/C9 |
| `politicallife` | C4 | — | C9 | Triple C4/C7/C9 |
| `klein_battleparadise` | C4 | — | C6 | Triple C4/C6/C7 |
| `harpellecostarica` | C5 | — | C4 | Triple C5/C4/C7 |
| `afrocentroam` | C5 | — | C10 | Triple C5/C7/C10 |
| `mahlertricontinental` | C5 | — | C8 | Triple C5/C7/C8 |
| `islandscity` | C5 | — | C10 | Triple C5/C7/C10 |
| `benedictykokken_haitiexception` | C8 | — | C9 | Triple C8/C7/C9 |
| `hazareesingh` | C3 | — | C9 | Triple C3/C7/C9 |

*(En las nueve, C7 es secundaria directa del principal de la fila — la columna queda vacía porque la relación ya está descrita en la columna "Principal".)*

**C9 es la corriente que más aparece acompañando a C7 en un caso triple** (4 veces: `belisodelirium`, `politicallife`, `benedictykokken_haitiexception`, `hazareesingh`), sin ser nunca principal ni secundaria única frente a C7 — es decir, **no existe ningún caso binario C9/C7 puro**, solo estos cuatro triples donde C9 acompaña a otra corriente principal junto con C7. Ninguna de las nueve triples repite exactamente la misma combinación de tres corrientes.

### 13.5 No fijar fronteras automáticamente

**Ninguna de las nueve fronteras de esta sección tiene, hoy, un criterio académico propio ratificado desde la perspectiva de C7.** Con 1–2 casos (C3/C7, C6/C7, C8/C7, C10/C7), este expediente no presenta ninguna regla como establecida. Con 6–7 casos (C5/C7, C4/C7), la muestra es mayor que la de cualquier frontera examinada en los expedientes de C1 a C6, pero **eso no equivale a una regla fijada**: es evidencia suficiente para que la Dirección Académica decida si amerita un criterio, no un criterio en sí mismo.

---

## 14. Frontera C6/C7

**Apartado específico, como exige la instrucción de esta etapa.**

**El antecedente ya existe, fue fijado desde C6, y es explícitamente provisional.** `dictamen-academico-c6.md` (líneas 96–102) registra:

> **C7 será principal cuando el argumento esté organizado por soberanía, frontera, ocupación, administración territorial o dispositivo estatal; C6 será principal cuando el argumento esté organizado por huracanes, ecologías, fuerzas ambientales o materialidades vivas que producen efectos históricos y sociales.**

El mismo dictamen aclara (línea 172): *"todas las fronteras de C6 permanecen provisionales y revisables mientras aumente la evidencia"* y (línea 207) que su propio dictamen *"no convierte ninguna de las cuatro fronteras provisionales (C4/C6, C7/C6, C1/C6, C2/C6) en regla definitiva"*.

**Evidencia disponible desde la perspectiva de C7, recalculada de forma independiente: 1 caso binario (`beyondsun`, C6 principal/C7 secundaria) + 1 caso triple (`klein_battleparadise`, C4 principal, C6 y C7 ambas secundarias) — el mismo par de casos que ya usó C6 para formular su propio criterio.** No hay ningún caso adicional visible desde C7 que no fuera ya visible desde C6: es la misma evidencia, mirada desde el otro lado.

**En ninguno de los dos casos C7 aparece como principal.** El criterio de C6 predice que C7 debería ser principal cuando el argumento esté organizado por "soberanía, frontera, ocupación, administración territorial o dispositivo estatal" — pero la muestra disponible no incluye, todavía, ningún caso donde eso ocurra frente a C6. La evidencia es compatible con el criterio (no lo contradice), pero no lo pone a prueba en la dirección C7-principal.

**Este expediente NO ratifica el criterio desde C7.** Se limita a registrar que el antecedente existe, que la evidencia empírica disponible desde ambos lados es la misma, y que la Dirección Académica debe decidir si el criterio fijado desde C6 se adopta también como criterio de C7 o si merece una formulación propia (§21).

---

## 15. Otras fronteras prioritarias

**Verificado, según la evidencia real — no se presupone que sean las mismas fronteras que priorizó C6.**

### 15.1 C5/C7 — la frontera con más casos y la única con un criterio ya ratificado desde el otro lado

Con 6 casos, todos en la misma dirección (C5 principal), esta es la frontera más uniforme de las examinadas para C7 — el mismo patrón que ya observó `dictamen-academico-c5.md` (línea 78): *"la frontera con la dirección más uniforme de las cuatro verificadas para C5"*. El criterio ya ratificado desde C5 (circulación vs. dispositivo estatal, transcrito en §13.3) es, de las fronteras de C7, la que ya tiene el tratamiento académico más avanzado — pero ratificado unilateralmente desde C5, nunca desde C7. **Decisión pendiente:** si C7 debe simplemente heredar ese criterio o pronunciarse de forma independiente.

### 15.2 C4/C7 — la frontera más densa en número de casos, y bidireccional

Con 7 casos y dirección mixta (3 con C7 principal, 4 con C4 principal), esta es la única frontera de C7 donde ambas corrientes alternan el rol de principal con una muestra de más de un caso en cada dirección. Es también la que involucra a las tres únicas confirmaciones de C7 principal (§9.1), lo que la vuelve especialmente relevante: **el "núcleo duro" de casos C7-principal existente hoy es, en su totalidad, un subconjunto de la frontera C4/C7.** No existe, hasta ahora, ningún caso de C7 principal que no tenga a C4 como su única secundaria.

### 15.3 C3/C7 — un solo caso, pero con tensión conceptual ya declarada en dos lugares

El guion de C7 declara explícitamente: *"con C3 comparte la libertad, pero C3 la trabaja como sustracción"* (§4) — es decir, la tensión conceptual con C3 está anticipada en el propio guion, a diferencia de C5, C4, C6, C8 y C10, que no aparecen mencionadas ahí. Además, `dictamen-academico-c3.md` (§7.2, líneas 182–189) ya fijó, desde la perspectiva de C3, un criterio distintivo: *"manda la forma del argumento, no el origen del sujeto (…) que un Estado sea el interlocutor no lleva la obra a C7 si lo que argumenta es cómo un pueblo se sustrajo y se sostuvo."* El único caso confirmado hoy (`hazareesingh`, C3 principal/C7 secundaria) es compatible con ese criterio. **Dos casos adicionales, no clasificados, hacen tangible la misma tensión en el lenguaje de las propias obras** (§11.1): `alabi` ("la soberanía cimarrona") y, con más distancia, el propio guion de C3 (línea 310 de su dictamen) menciona el fenómeno `independencia_y_conflicto_regional` como el que "tensiona la frontera C3/C7" — el mismo fenómeno que en el catálogo de C7 (§16.2) aparece con anclas `muneraelfracaso`, `saetheridentidades`, `helglibertyequality`, `james`, `ferrerfreedomsmirror`, ninguna procesada todavía.

### 15.4 C1/C7 — ausencia notable

El guion de C7 nombra a C1 como una de las dos "corrientes más próximas" (junto con C3, §4), con una distinción declarada: *"con C1 comparte la ocupación, pero C1 la trabaja sobre mundos indígenas."* **No existe, sin embargo, ningún caso confirmado de frontera C1/C7 en los 57 registros de lote.** El fenómeno `indigeneidad_en_disputa` (§16.2), compatible con C1 y C7 a la vez, tiene cuatro anclas (`felicianosantos`, `rifkinfictions`, `andersonblackindigenous`, `whiteheadtiger`) — ninguna procesada. Esta es la única de las dos "corrientes más próximas" declaradas por el guion sin ningún caso empírico que la sostenga todavía.

### 15.5 C2/C7 — sin ningún caso, con evidencia negativa cruzada

`dictamen-academico-c2.md` (§9.1) evaluó explícitamente y descartó tres candidatos por señal léxica (`bestlevitt`, `kutzinskisugar`, `politicallife`) aclarando en los tres casos "la secundaria declarada es C7" — es decir, C2 miró hacia C7 y no encontró ningún cruce real. Esto no es solo ausencia de datos: es una búsqueda que se hizo y no encontró casos, desde el otro lado.

---

## 16. Fenómenos compatibles

**Verificado — recalculado contra `catalogo-fenomenos.json` (versión `0.1.0-borrador`, 35 fenómenos, "borrador para dictamen académico; no se ha aplicado al corpus publicado").** Reverificado con `jq` de forma independiente: mismo resultado.

### 16.1 Cuántos y cuántas anclas

**10 de los 35 fenómenos declaran compatibilidad con C7 — la cifra más alta de todas las corrientes examinadas hasta ahora en los expedientes de C3 a C6.** 40 anclas contadas con repetición, **39 anclas únicas** (`muneraelfracaso` aparece en dos fenómenos distintos).

### 16.2 Tabla completa

| Fenómeno | Corrientes compatibles | Anclas |
|---|---|---|
| `revision_historiografica` | C9, C7 | `scottconscripts`, `muneraelfracaso`, `zips_nannysasafo`, `becklessavingsouls` |
| `estatus_no_soberano` | C7 (exclusivo) | `bonilla`, `vanderpijl_equaliberty`, `oostindiedecolonising`, `hoeftetrajectories`, `grosfoguelcolonial` |
| `independencia_y_conflicto_regional` | C7, C3 | `muneraelfracaso`, `saetheridentidades`, `helglibertyequality`, `james`, `ferrerfreedomsmirror` |
| `deuda_como_tecnologia_colonial` | C4, C7 | `zambrana`, `araujo`, `headleyreparaciones` |
| `frontera_y_regimen_migratorio` | C7, C5 | `kahnislands`, `martinezsanmiguel`, `prestolmasacre` |
| `enclave_y_extractivismo` | C4, C7 | `zonabananera`, `lassoerased`, `bourgoisethnicity`, `corinealdipanama` |
| `nacion_heterosexual` | C10, C7 | `curiel`, `gosinenature` |
| `indigeneidad_en_disputa` | C1, C7 | `felicianosantos`, `rifkinfictions`, `andersonblackindigenous`, `whiteheadtiger` |
| `radicalismo_negro_transnacional` | C7, C5 | `quinnblackpower`, `james_bannerethiopia`, `austinfearblack`, `puriradical`, `russwurm` |
| `formacion_racial_nacional` | C8, C7 | `reconfdominic`, `godreauscripts`, `cunin`, `pinedashipwrecked`, `garciapenaborders` |

**Un fenómeno es exclusivo de C7** (`estatus_no_soberano`, con 5 anclas) — es decir, no comparte compatibilidad con ninguna otra corriente. Los otros nueve la comparten con exactamente una corriente cada uno, y esas nueve corrientes-pareja cubren siete de las otras nueve corrientes del catálogo (todas menos C2 y C6).

### 16.3 Cuántas ya pasaron por lote

**1 de 39 — `bourgoisethnicity`**, ancla de `enclave_y_extractivismo` (compatible con C4 y C7). Su clasificación confirmada es **C4 principal, sin ninguna secundaria** — no tiene rol en C7. **38 de 39 anclas están vírgenes.**

**No puede inferirse, con un solo caso y en dirección negativa, que ser ancla de un fenómeno compatible con C7 prediga o no prediga la clasificación C7** — la única observación disponible es que, en el único caso leído, no lo hizo. Igual que en C6, este expediente no convierte esa observación única en tendencia.

---

## 17. Universo exploratorio

**Derivado — construido desde los conjuntos efectivamente sustentados por el repositorio para C7, recalculado dos veces con métodos independientes (Node.js y una segunda pasada por separado sobre los mismos datos), sin partir de una cifra esperada.**

### 17.1 Conjuntos utilizados

| Conjunto | Definición | Fuente | Número bruto |
|---|---|---|:---:|
| A | Etiqueta heredada `soberanias` | `datos-atlas.json`, campo `f` | 62 |
| B | Anclas de fenómenos compatibles con C7 | `catalogo-fenomenos.json` | 39 |
| D | Clasificaciones existentes (principal + secundaria confirmadas) | Cuatro lotes | 19 |
| E | Señales léxicas verificadas contra el guion | `datos-atlas.json`, campos `ap`/`t` | 30 |

No se construyó un conjunto separado de "candidaturas históricas por Git": la única candidatura histórica hacia C7 (`bassiacuoso`, §5.3) ya está incluida en A (por su etiqueta heredada `soberanias`) y en D (por su confirmación como C7 secundaria); no aporta ids adicionales. No se construyó un conjunto de "casos priorizados por otro dictamen" porque ningún dictamen ya emitido (C1–C6) usa esa fórmula en relación con C7 (verificado por `grep` sobre los seis).

### 17.2 Fórmula

```
U = A ∪ B ∪ D ∪ E
```

### 17.3 Intersecciones relevantes (calculadas, no presupuestas)

- **A ∩ D (etiqueta heredada que sí llegó a clasificación):** 10 de 62 — `bassiacuoso`, `afrocentroam`, `harpellecostarica`, `islandscity`, `mahlertricontinental`, `putnamradical`, `hintzen`, `schuller_killingkindness`, `benedictykokken_haitiexception`, `hazareesingh` (ver §8.1).
- **B ∩ D (ancla de fenómeno que sí llegó a clasificación):** 0 — ninguna de las 19 clasificadas en C7 es ancla de ningún fenómeno del catálogo actual.
- **E ∩ D (señal léxica que sí llegó a clasificación):** 4 — `politicallife`, `hintzen`, `schuller_killingkindness`, `bassiacuoso`.
- **A ∩ B (etiqueta heredada y ancla de fenómeno a la vez):** 18 de 62.
- **A ∩ E:** 20 de 62.
- **B ∩ E:** 9 de 39.
- **D fuera de A, B y E (clasificadas por lectura editorial directa, sin señal previa en ningún conjunto):** 8 — `esquiva`, `glissant`, `kutzinskisugar`, `belisodelirium`, `bestlevitt`, `peasantscapital`, `beyondsun`, `klein_battleparadise`. **Es un hallazgo importante: el 42 % de las confirmaciones de C7 (8 de 19) no tenían ninguna señal previa detectable por etiqueta heredada, ancla de fenómeno o léxico del guion** — llegaron por lectura editorial directa del texto. Entre ellas están dos de las tres C7 principales examinadas en detalle en §7.2 (`esquiva`) y dos de los tres únicos casos triples con C6 (`klein_battleparadise`, `beyondsun`).

### 17.4 Unión final

**100 ids en total — recalculado y verificado dos veces con métodos independientes (Node.js y una reconstrucción manual de las intersecciones), mismo resultado en ambos pases.**

De los 100:
- **19 ya tienen rol confirmado en C7** (Conjunto D).
- **3 pasaron por lote sin tener rol confirmado en C7**: `bourgoisethnicity` (confirmada C4, ancla de fenómeno), `londonoargonauts` (confirmada C5, señal léxica ambigua), `manoalzada` (confirmada C9, entra al universo por etiqueta heredada `soberanias`).
- **78 nunca pasaron por ningún lote.**

19 + 3 + 78 = 100.

### 17.5 Listado completo de las 78 entradas nunca procesadas

**Verificado, con título y territorio (`l`) de cada una, tomados directamente de `datos-atlas.json`:**

| id | Título | Territorio (`l`) |
|---|---|---|
| `abello` | La isla encallada: el Caribe colombiano en el archipiélago | cartagena |
| `aftershocks` | Aftershocks of Disaster (huracán María) | puertorico |
| `alabi` | Alabi's World | suriname |
| `andersonblackindigenous` | Black and Indigenous: Garifuna Activism and Consumer Culture in Honduras | belize |
| `araujo` | Reparations for Slavery and the Slave Trade | haiti |
| `archipelagicthinking` | Contemporary Archipelagic Thinking | puertorico |
| `austinfearblack` | Fear of a Black Nation | trinidad |
| `becklessavingsouls` | Saving Souls: The Struggle to End the Transatlantic Trade in Africans | barbados |
| `besson` | Martha Brae's Two Histories | jamaica |
| `bogueslammingreader` | The George Lamming Reader | barbados |
| `bonilla` | Non-Sovereign Futures | guadalupe |
| `caribjourneys` | Caribbean Journeys | nevis |
| `casimir` | The Haitians: A Decolonial History | haiti |
| `castorspiritual` | Spiritual Citizenship | trinidad |
| `citizenshipedge` | Citizenship on the Edge | jamaica |
| `corinealdipanama` | Panama in Black | panama |
| `cosgrovegarifuna` | Surviving the Americas | bluefields |
| `crawfordturtlemen` | The Last Turtlemen of the Caribbean | bluefields |
| `cunin` | Identidades a flor de piel | cartagena |
| `curiel` | La Nación Heterosexual | dominicana |
| `duboisturits` | Freedom Roots: Histories from the Caribbean | haiti |
| `dubuissonhaiti` | Reclaiming Haiti's Futures | haiti |
| `felicianosantos` | A Contested Caribbean Indigeneity | puertorico |
| `ferrerfreedomsmirror` | Freedom's Mirror | cuba |
| `fouchard` | Les marrons de la liberté | haiti |
| `garciapenaborders` | The Borders of Dominicanidad | dominicana |
| `globalculture` | Global Culture, Island Identity | nevis |
| `godreauscripts` | Scripts of Blackness | puertorico |
| `gosinenature` | Nature's Wild | trinidad |
| `grenaderevolution` | The Grenada Revolution | granada |
| `grosfoguelcolonial` | Colonial Subjects | puertorico |
| `headleyreparaciones` | A Philosophical Investigation into Reparations for Caribbean Slavery | haiti |
| `helglibertyequality` | Liberty and Equality in Caribbean Colombia, 1770-1835 | cartagena |
| `hoeftesuriname` | Suriname in the Long Twentieth Century | suriname |
| `hoeftetrajectories` | Post-Colonial Trajectories in the Caribbean: The Three Guianas | guyana |
| `hurboncomprendre` | Comprendre Haïti | haiti |
| `hurbondictadura` | Culture et dictature en Haïti | haiti |
| `james` | The Black Jacobins | haiti |
| `james_bannerethiopia` | Holding Aloft the Banner of Ethiopia | jamaica |
| `kahnislands` | Islands of Sovereignty | haiti |
| `knight_genesisnacionalismo` | The Caribbean: The Genesis of a Fragmented Nationalism | jamaica |
| `lara` | Queer Freedom: Black Sovereignty | dominicana |
| `lassoerased` | Erased: The Untold Story of the Panama Canal | panama |
| `lebroncimarronaje` | Filosofía del cimarronaje | puertorico |
| `lightfoot` | Troubling Freedom | antigua |
| `lindskoog` | Detain and Punish: Haitian Refugees | haiti |
| `martinezsanmiguel` | Coloniality of Diasporas | puertorico |
| `meeks_postcolonial` | After the Postcolonial Caribbean | jamaica |
| `mitchellalibi` | The Alibi of Capital | haiti |
| `muneraelfracaso` | El fracaso de la nación | cartagena |
| `oostindiedecolonising` | Decolonising the Caribbean | curazao |
| `pinedashipwrecked` | Shipwrecked Identities | bluefields |
| `prestolmasacre` | El Masacre se pasa a pie | dominicana |
| `puriradical` | The Legacies of Caribbean Radical Politics | trinidad |
| `quinnblackpower` | Black Power in the Caribbean | trinidad |
| `rainforestwarriors` | Rainforest Warriors | suriname |
| `ramadan` | Constructing Spiritual Blackness | puertorico |
| `rappaportcobarde` | El cobarde no hace historia | cartagena |
| `reconfdominic` | Reconfiguring Dominicanness | dominicana |
| `rifkinfictions` | Fictions of Land and Flesh | jamaica |
| `roberts` | Freedom as Marronage | jamaica |
| `russwurm` | The Struggles of John Brown Russwurm | jamaica |
| `saetheridentidades` | Identidades e independencia en Santa Marta y Riohacha, 1750-1850 | santamarta |
| `sangbenvolviendo` | Volviendo al Caribe | santamarta |
| `schweitzerbata` | The Artistry of Afro-Cuban Batá Drumming | cuba |
| `scottconscripts` | Conscripts of Modernity | haiti |
| `shellererotic` | Citizenship from Below | jamaica |
| `smith_sexcitizen` | Sex and the Citizen | trinidad |
| `smithredblack` | Red and Black in Haiti | haiti |
| `trouillot` | The Caribbean Region: An Open Frontier | haiti |
| `trouillothaitistate` | Haiti: State Against Nation | haiti |
| `vanderpijl_equaliberty` | Equaliberty in the Dutch Caribbean | curazao |
| `whiteheadtiger` | Lords of the Tiger Spirit | guyana |
| `wilderfreedomtime` | Freedom Time | martinica |
| `yountaesecular` | The Coloniality of the Secular | martinica |
| `zambrana` | Colonial Debts: The Case of Puerto Rico | puertorico |
| `zips_nannysasafo` | Nanny's Asafo Warriors | jamaica |
| `zonabananera` | Las geografías negras en la Zona Bananera | santamarta |

### 17.6 No inflar el universo

**Ninguna señal léxica ambigua (§11.1-B) se incorporó a los conjuntos A, B o D.** Las ocho entradas de la categoría "ambigua" entraron al universo únicamente porque su coincidencia léxica forma parte del Conjunto E, que ya está definido de forma explícita como "señal léxica verificada contra el guion" — no como candidatura. Un método que incorporara el término descartado en §11 (`colonial` sin acotar, 37 resultados) produciría una unión sustancialmente mayor y de peor calidad discriminante, igual que ya advirtió el expediente de C6 para su propio caso.

---

## 18. Territorio

**Verificado, en tres apartados separados, sin mezclar los tres conjuntos, como exige la instrucción de esta etapa.**

### 18.1 A. Casos C7 confirmados (19)

| Territorio (`l`) | Entradas |
|---|:---:|
| haiti | 3 |
| cuba | 3 |
| cartagena | 2 |
| jamaica | 2 |
| puertorico | 2 |
| costarica | 2 |
| martinica | 1 |
| trinidad | 1 |
| dominica | 1 |
| belize | 1 |
| guyana | 1 |

**19 confirmadas en 11 territorios distintos — la distribución territorial menos concentrada de las examinadas hasta ahora en los expedientes de C3 a C6**, ninguno con más de tres casos. **Con una muestra de 19, tampoco se declara aquí una lectura de "cobertura" o "vacío" territorial**: la ausencia de, por ejemplo, obras sobre las Guayanas francesa/neerlandesa entre las 19 confirmadas no se interpreta como vacío, porque el universo exploratorio (§18.2) sí incluye entradas sobre Surinam y Curazao sin procesar.

### 18.2 B. Universo exploratorio (78 entradas sin lote, apartado separado)

**Verificado**, distribución por `l` (todas las 78 tienen el campo, a diferencia de C6 donde faltaba para algunas):

| Territorio | Entradas |
|---|:---:|
| haiti | 16 |
| jamaica | 10 |
| puertorico | 9 |
| trinidad | 6 |
| cartagena | 5 |
| dominicana | 5 |
| suriname | 3 |
| bluefields | 3 |
| santamarta | 3 |
| barbados | 2 |
| nevis | 2 |
| panama | 2 |
| cuba | 2 |
| guyana | 2 |
| curazao | 2 |
| martinica | 2 |
| belize | 1 |
| guadalupe | 1 |
| granada | 1 |
| antigua | 1 |

**Haití concentra el 20,5 % del universo sin procesar (16 de 78)** — la mayor concentración territorial de cualquiera de los tres conjuntos examinados en este expediente. **No se declara esto como vacío ni como prioridad editorial**: es una lectura descriptiva del campo `l`, no una evaluación de qué falta leer primero.

### 18.3 C. Anclas de fenómeno (39, apartado separado)

| Territorio | Entradas |
|---|:---:|
| haiti | 5 |
| puertorico | 5 |
| trinidad | 4 |
| jamaica | 4 |
| dominicana | 4 |
| cartagena | 3 |
| panama | 2 |
| guyana | 2 |
| curazao | 2 |
| santamarta | 2 |
| belize | 1 |
| barbados | 1 |
| guadalupe | 1 |
| costarica | 1 |
| cuba | 1 |
| bluefields | 1 |

---

## 19. Lenguas

**Verificado, en los mismos tres apartados.**

### 19.1 A. Casos C7 confirmados (19)

`lenguas_publicacion` solo se declara al pasar por lote — está disponible para las 19 (a diferencia de C6, donde la muestra era de solo tres):

| Lengua | Entradas |
|---|:---:|
| Inglés (exclusivo) | 16 |
| Francés (exclusivo) | 1 (`glissant`) |
| Español (exclusivo) | 1 (`esquiva`) |
| Inglés + Español (`manifestaciones_bibliograficas` con edición original y traducción) | 1 (`bassiacuoso`) |

**16 de 19 (84 %) están exclusivamente en inglés.** Con una muestra de 19 —mayor que la de C6 (3) pero todavía modesta frente al corpus de 232— **este expediente registra el dato exacto sin llamarlo "sesgo de C7"**: una quinta o sexta entrada adicional podría desplazar la proporción de forma apreciable.

### 19.2 B. Universo exploratorio (78, apartado separado)

`lenguas_publicacion` no está disponible como campo propio para las 78 entradas sin lote (mismo límite ya documentado en el expediente de C6). El corpus sí trae, para todas las obras, un campo `tr` (procedencia/circulación lingüístico-territorial) que **no es un sustituto exacto** de `lenguas_publicacion` — mezcla lengua con lugar y a veces declara más de una lengua por entrada. Como lectura aproximada, contando la primera mención de lengua en `tr`:

| Lengua dominante (aproximada, campo `tr`) | Entradas |
|---|:---:|
| Anglófono | 49 |
| Hispano | 14 |
| Francófono | 6 |
| Neerlandés | 2 |
| Otro / comparado sin lengua única | 7 |

**Esta cifra se presenta como aproximada, no como equivalente metodológico a `lenguas_publicacion`.** No se propone ninguna lectura de sesgo o prioridad editorial a partir de ella.

### 19.3 C. Anclas de fenómeno (39, apartado separado)

No se calculó una distribución lingüística separada para este conjunto: el campo `tr` está disponible pero, por la misma razón que en §19.2, no equivale a `lenguas_publicacion`, y este expediente prioriza no multiplicar lecturas aproximadas sobre el mismo campo débil.

**No se propone siembra para corregir ningún vacío territorial o lingüístico en ningún apartado de las secciones 18 y 19**, conforme a la instrucción de esta etapa.

---

## 20. Elegibilidad territorial

**Verificado — no se encontró, en ninguno de los 57 registros de lote, un caso comparable a `gudynas` en relación con C7.** Solo una entrada de todo el repositorio trae el campo `elegibilidad_atlas`: `gudynas` misma, y su bloqueo está documentado en relación con **C6**, no con C7 (`corrientes_candidatas: ["huracanes_ecologias_materialidades_vivas"]`, sin ninguna mención de C7). Verificado por `grep -l "elegibilidad_atlas"` sobre los ocho archivos de lote (config + generado × 4): solo `a02-config.json` y `a02-generado.json` contienen el campo, y en ambos la única entrada es `gudynas`.

**No hay, por tanto, ningún caso de candidatura hacia C7 bloqueada por alcance territorial, territorio ambiguo u orilla no demostrada.** Esta sección queda, con la evidencia actual, sin contenido adicional que aportar.

---

## 21. Tamaño de muestra

**Verificado, resumen de todas las cifras centrales de este expediente.**

| Categoría | N |
|---|:---:|
| C7 principal (confirmadas) | 3 |
| C7 secundaria (confirmadas) | 16 |
| Total con algún rol confirmado en C7 | 19 |
| Candidaturas activas sin confirmar hoy | 0 |
| Candidaturas históricas verificables por Git | 1 (`bassiacuoso`, ya resuelta) |
| Etiqueta heredada `soberanias` (total en corpus) | 62 |
| — de las cuales pasaron por lote | 10 |
| — de las cuales nunca pasaron por lote | 52 |
| Fenómenos compatibles con C7 | 10 de 35 |
| Anclas de fenómeno únicas | 39 |
| — de las cuales pasaron por lote | 1 (`bourgoisethnicity`, sin rol en C7) |
| — de las cuales nunca pasaron por lote | 38 |
| Señales léxicas (unión de 6 términos) | 30 |
| — con rol confirmado en C7 | 4 |
| — falsos positivos verificados por lectura | 3 |
| — señales ambiguas sin resolver | 8 |
| Universo exploratorio total (A∪B∪D∪E) | 100 |
| — procesadas por lote (con o sin rol en C7) | 22 |
| — nunca procesadas | 78 |
| Fronteras con 2 o más casos | 4 (C4/C7: 7, C5/C7: 6, C8/C7: 2, C10/C7: 2) |
| Fronteras con 0 casos pese a mención en el guion | 1 (C1/C7) |
| Casos triples (tres corrientes en una misma entrada) | 9 |
| Casos de elegibilidad territorial tipo `gudynas` | 0 |

**Este expediente no convierte ningún tamaño de muestra en seguridad conceptual.** Diecinueve confirmaciones es una muestra mayor que la de cualquier corriente examinada en los expedientes de C3 a C6 hasta ahora, pero sigue siendo pequeña frente al total de 232 obras del corpus y frente al universo exploratorio de 100 ids construido en §17.

---

## 22. Asuntos no verificables

**Hipótesis / fuera de alcance del repositorio.**

- Por qué el guion de C7 afirma que `soberanias` es "la segunda etiqueta heredada más poblada" cuando el recuento directo (§4) la sitúa en tercer lugar por conteo simple y en primer lugar si se excluyen las cuatro etiquetas que en algún documento del repositorio se llaman "marca" — no se encontró, en ningún archivo consultado, el método de conteo que produciría exactamente "segunda".
- Cuál de los dos estados de `esquiva` —la corrección bibliográfica aprobada en S01 (autora Karen Engle, año 2011, `k: obra`) o la sincronización posterior del corpus (`procedencia: manifestación`, `procedencia_verificada: false`)— refleja la intención editorial vigente. No está resuelto en ningún documento posterior a la sincronización 1.16.1.
- Si el criterio de frontera C4/C6 fijado desde C6 (régimen analítico dominante) o el de C5/C7 fijado desde C5 (circulación vs. dispositivo estatal) deberían aplicarse también, por analogía, a la frontera C4/C7 — no evaluado aquí, sería una decisión de criterio, no un hallazgo de evidencia.
- Si el corpus de 232 obras contiene, en general, material suficiente sobre estatus político no soberano, ocupación militar y derecho colonial del Caribe francófono, hispanohablante insular o neerlandófono más allá de lo ya identificado — no evaluado aquí, excede el método de este expediente.
- Autoría y lengua de publicación exactas de las 78 entradas del universo exploratorio sin lote — no están registradas como campos propios de nivel-obra fuera de los lotes (salvo el campo aproximado `tr`, ya señalado como no equivalente en §19.2); requerirían lectura editorial de cada obra.
- Si `alabi` y `lara` (§11.1) deben leerse como casos que ponen a prueba la frontera C3/C7 y C10/C7 respectivamente, o si su uso de "soberanía" es puramente retórico — no resuelto por este expediente, que se limita a señalar la tensión léxica.

---

## 23. Preguntas para la Dirección Académica

**Decisión requerida en todos los casos. Ninguna de estas dieciséis preguntas se responde en este expediente.**

**Decisión 1 — Denominación.** ¿Se ratifica «Soberanías, fronteras y ocupaciones» / «Sovereignties, borders and occupations»?

**Decisión 2 — Principio analítico.** ¿Qué debe organizar el argumento de una obra para pertenecer a C7? (El guion propone: estatus político no soberano, ocupación militar, frontera como dispositivo, formas de autoridad no estatal.)

**Decisión 3 — Guion.** ¿Se mantiene el guion vigente sin cambios, incluida la cifra "segunda etiqueta heredada más poblada" que este expediente no pudo reproducir por conteo directo (§4)?

**Decisión 4 — Vía constitutiva.** ¿Se ratifica la migración del corpus heredado como vía constitutiva de C7, sabiendo que 17 de 19 confirmaciones la siguen limpiamente pero 2 (`bassiacuoso`, `esquiva`) presentan coincidencia parcial, y que 8 de 19 no tenían ninguna señal previa detectable (§17.3)?

**Decisión 5 — El caso `esquiva`.** ¿Cómo debe resolverse la discrepancia entre la corrección bibliográfica aprobada por el lote S01 (autora Karen Engle, 2011, obra verificada) y la sincronización posterior del corpus público, que la marca como manifestación no verificada (§7.2)? Esto afecta a una de las tres únicas confirmaciones de C7 principal.

**Decisión 6 — Etiqueta heredada.** ¿Las 52 entradas de `soberanias` todavía nunca procesadas (§8.1) deben leerse sistemáticamente contra C7?

**Decisión 7 — Candidatura histórica `bassiacuoso`.** Ya resuelta como C5 principal/C7 secundaria desde `99aec5b` sin volver a cambiar — ¿se ratifica esa resolución o amerita revisión?

**Decisión 8 — C4/C7.** Con 7 casos en ambas direcciones —la frontera con más evidencia y la única bidireccional—, ¿existe base suficiente para fijar un criterio, o debe permanecer abierta? Las tres únicas confirmaciones de C7 principal son, todas, parte de esta frontera.

**Decisión 9 — C5/C7.** El criterio ya está ratificado desde C5 (circulación vs. dispositivo estatal). ¿Debe C7 adoptarlo tal cual, o pronunciarse de forma independiente?

**Decisión 10 — C3/C7.** Con 1 caso confirmado pero tensión conceptual ya declarada en el guion de C7 y en el dictamen de C3 (forma del argumento, no origen del sujeto), ¿es suficiente para fijar un criterio, o deben leerse primero los casos ambiguos (`alabi`, y el fenómeno `independencia_y_conflicto_regional`)?

**Decisión 11 — C1/C7.** El guion declara a C1 como una de las dos corrientes más próximas, pero no existe ningún caso confirmado. ¿Se autoriza la lectura del fenómeno `indigeneidad_en_disputa` (4 anclas, ninguna procesada) para poner a prueba esa cercanía declarada?

**Decisión 12 — C6/C7.** ¿Se ratifica desde C7 el criterio ya fijado desde C6 (§14), sabiendo que la evidencia disponible es la misma vista desde ambos lados y que C7 nunca aparece como principal frente a C6?

**Decisión 13 — C8/C7 y C10/C7.** Con 2 casos cada una, ¿existe evidencia suficiente para establecer una regla, o deben permanecer abiertas?

**Decisión 14 — Falsos positivos de "autoridad".** ¿Debe formalizarse que la presencia léxica de "autoridad" sin calificar tiene bajo valor discriminante para C7 (3 de 3 coincidencias verificadas fueron falsos positivos, §12)?

**Decisión 15 — Universo exploratorio y fenómenos.** ¿Se autoriza la lectura de las 78 entradas nunca procesadas (§17.5) y de las 38 anclas de fenómeno todavía vírgenes (§16.3)?

**Decisión 16 — Siembra.** ¿Debe agotarse primero el corpus interno (las 52 entradas de `soberanias` sin lote más el universo de 78) antes de considerar cualquier siembra?

---

## 24. Límites del expediente

Este expediente:

- no ratifica la denominación, el guion ni la vía constitutiva de C7;
- no resuelve la discrepancia documental sobre la procedencia de `esquiva`;
- no clasifica ninguna de las 78 entradas del universo exploratorio ni las 52 de la etiqueta heredada sin lote;
- no convierte ninguna de las 38 anclas de fenómeno vírgenes en candidatura;
- no fija ningún criterio de frontera con C1, C3, C4, C5, C6, C8, C9 ni C10;
- no ratifica desde C7 el criterio de frontera C6/C7 ya fijado desde C6;
- no formaliza la distinción palabra/tema/argumento como criterio académico para "autoridad" ni ningún otro término;
- no propone ni ejecuta siembra;
- no modifica `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` ni ningún archivo de lote;
- no reabre C1, C2, C3, C4, C5 ni C6;
- no avanza a C8;
- no creó ni modificó ningún otro archivo del repositorio además de sí mismo;
- no ejecutó `git add`, `commit`, `push`, `merge` ni `rebase`.
