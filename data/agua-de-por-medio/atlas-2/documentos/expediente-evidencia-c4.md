# Expediente de evidencia de C4
## Postplantación, trabajo y desposesión

Este expediente reúne evidencia verificable para un dictamen académico que todavía no ha sido emitido. No ratifica la denominación, el guion, la vía de constitución, las clasificaciones, las fronteras, el universo de relectura ni la siembra. Ninguna obra se clasifica y ninguna entrada se convierte en candidatura por efecto de este documento.

Dirección académica de Pensamiento Caribe · 15 de agosto de 2026
Rama `feat/atlas-2-etapa-1-integrada` · corpus `datos-atlas.json` v1.16.1

**Antecedente que este expediente corrige.** El 15 de agosto se redactó y se comprometió al repositorio (commit `438a879`) un documento titulado «Dictamen académico de C4» que trataba como decisión ya emitida —denominación ratificada, guion aprobado, clasificaciones ratificadas, fronteras fijadas, siembra resuelta— lo que nunca fue autorizado por la Dirección Académica. Ese documento fue retirado del árbol de trabajo mediante el commit `7699635` («Retira dictamen académico de C4 no autorizado»), sin reescribir el historial. La sección 2 documenta ese episodio con las salidas literales de Git. El contenido de aquel documento se trata en todo este expediente como **hipótesis sin verificar**, no como fuente. Cada cifra se recalculó desde el dato original; varias no coincidían.

---

## 1. Propósito y límites

Este expediente hace tres cosas y ninguna más: reúne evidencia verificable sobre C4 desde el corpus, los lotes y el historial de Git; organiza esa evidencia en conjuntos explícitos con su método de construcción declarado; y formula las preguntas que un dictamen deberá responder. No decide la denominación, no aprueba el guion, no ratifica ninguna clasificación —aunque reporte las que la Dirección Académica ya tomó el 8 de agosto en los lotes cerrados—, no fija fronteras y no autoriza siembra. Donde el borrador retirado usó verbos decisorios (ratificar, aprobar, resolver, aceptar, confirmar, dejar firme, sustituir, autorizar) sobre algo que no era una decisión ya tomada, este expediente los evita o los sustituye por «se documenta», «consta», «se registra como pregunta».

---

## 2. Estado Git inicial

Salidas literales, capturadas antes de escribir este expediente:

```
$ git rev-parse --abbrev-ref HEAD
feat/atlas-2-etapa-1-integrada

$ git rev-parse --short HEAD
438a879   (antes de la corrección; ver más abajo)

$ git rev-parse --short origin/feat/atlas-2-etapa-1-integrada
315c69b

$ git status --short --branch
## feat/atlas-2-etapa-1-integrada...origin/feat/atlas-2-etapa-1-integrada [ahead 1]

$ git log -6 --oneline --decorate
438a879 (HEAD -> feat/atlas-2-etapa-1-integrada) Documenta dictamen académico de la corriente C4
315c69b (origin/feat/atlas-2-etapa-1-integrada) Documenta dictamen académico de la corriente C3
a295be0 Documenta expediente de evidencia de la corriente C3
23166e1 Documenta dictamen académico de la corriente C2
7c1ae81 Documenta dictamen académico de la corriente C1
d951345 Documenta arquitectura integrada de la Etapa 1 del Atlas 2.0
```

**Precondición de C3, verificada:** `origin/feat/atlas-2-etapa-1-integrada` en `315c69b` es exactamente el commit «Documenta dictamen académico de la corriente C3». C3 está publicada en `origin`; `HEAD` local y remoto coincidían en ese punto antes de que este documento existiera; no había trabajo rastreado pendiente. C3 está formalmente cerrada.

**Corrección del estado, después del episodio del dictamen no autorizado:**

```
$ git log -2 --oneline --decorate
7699635 (HEAD -> feat/atlas-2-etapa-1-integrada) Retira dictamen académico de C4 no autorizado
438a879 Documenta dictamen académico de la corriente C4

$ git status --short --branch
## feat/atlas-2-etapa-1-integrada...origin/feat/atlas-2-etapa-1-integrada [ahead 2]
```

`HEAD` está dos commits por delante de `origin`: el commit no autorizado y el commit que lo retira. Ninguno de los dos se ha publicado —no hay red desde este entorno hacia `origin`—, y ninguno de los dos se reescribió: el contenido retirado sigue legible en `438a879` para quien audite el historial. No se ejecutó `git add`, `commit` ni `push` sobre ningún dictamen de C4 después de este punto; los únicos commits de esta sesión son el que se retira a sí mismo y los que agregan este expediente (documentados en la sección 20).

---

## 3. Fuentes consultadas

| Fuente | Ruta | Qué aporta |
|---|---|---|
| Corpus | `data/agua-de-por-medio/datos-atlas.json` | v1.16.1, 232 obras, campos `f` (etiquetas heredadas), `t`, `a`, `y`, `tr`, `l`, `ap`, `k` |
| Catálogo de corrientes | `data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json` | Esquema `2.0-lotes.2`, denominaciones, marcas transversales |
| Catálogo de fenómenos | `data/agua-de-por-medio/atlas-2/catalogo-fenomenos.json` | Estado «borrador para dictamen académico», anclas por fenómeno |
| Lote P00 | `data/agua-de-por-medio/atlas-2/piloto-config.json` | 10 entradas; única con historial de tres versiones en Git |
| Lote S01 | `data/agua-de-por-medio/atlas-2/lotes/s01-config.json` | 11 entradas; una versión |
| Lote A01 | `data/agua-de-por-medio/atlas-2/lotes/a01-config.json` | 18 entradas; una versión |
| Lote A02 | `data/agua-de-por-medio/atlas-2/lotes/a02-config.json` | 18 entradas; una versión |
| `decisiones-pendientes.md` | `atlas-2/documentos/` | Cinco entradas sin candidatura derivable (punto 1) |
| `etapa-1-arquitectura-integrada.md` | `atlas-2/documentos/` | Guion provisional de C4, cifra de 35 entradas (v1.15.0) |
| Dictámenes de C1, C2, C3 | `atlas-2/documentos/dictamen-academico-c{1,2,3}.md` | Precedente formal, criterios ya fijados |
| Historial de Git | `git log`, `git show`, `git diff` sobre los archivos anteriores | Reconstrucción de candidaturas históricas |

No se consultó ninguna fuente externa al repositorio. No se leyó el texto completo de ninguna de las obras citadas; toda afirmación sobre el argumento de una obra proviene del campo `ap` del corpus o del campo `fundamento` de un lote, ambos citados literalmente.

---

## 4. Historia de la denominación

**Distinción exigida: versión de archivo, redacción textual y cambio real.** El borrador retirado afirmó, sin definir estos tres términos por separado, que «C1 cambió de redacción tres veces». El expediente de evidencia de C3 —fuente ya publicada— había registrado, en cambio, dos cambios para C1. Ambas cifras pueden ser correctas a la vez si cuentan cosas distintas, y aquí se separan:

- **Versiones de archivo** que contienen la entrada de C1 en `catalogos-atlas-2.json`: cinco (`619ad67`, `99aec5b`, `2343008`, `d3b15a7`, `16fc252`).
- **Redacciones textuales distintas** del campo `label` de C1 a lo largo de esas cinco versiones: hay que comprobarlo campo por campo, no inferirlo. Se hace en la tabla siguiente.
- **Cambios**, en el sentido de transiciones de una redacción a otra: es uno menos que el número de redacciones distintas, si son consecutivas.

| Versión | Commit | `label` de C1 en `catalogos-atlas-2.json` |
|---|---|---|
| 1 | `619ad67` | «Invasiones, colonialidades y mundos indígenas» |
| 2 | `99aec5b` | «Invasiones, colonialidades y mundos indígenas» (sin cambio) |
| 3 | `2343008` | «Invasiones, colonialidades y mundos indígenas» (sin cambio) |
| 4 | `d3b15a7` | «Invasiones y mundos indígenas» (cambio 1: retira «colonialidades») |
| 5 | `16fc252` | «Invasiones, despojos y mundos indígenas» (cambio 2: agrega «despojos») |

**Resultado, verificado con `git show <commit>:<ruta>` sobre las cinco versiones:** C1 tiene **tres redacciones distintas** del campo `label` a lo largo de sus cinco versiones de archivo, y **dos cambios** (transiciones de una redacción a otra: v3→v4 y v4→v5). Las dos cifras que circulaban —«tres veces» en el borrador retirado y «dos cambios» en el expediente de evidencia de C3, ya publicado— son ambas correctas si se lee «tres veces» como «tres redacciones» y no como «tres transiciones». El borrador retirado no hizo esa distinción explícita, lo que permitía leerlo como una contradicción con el expediente de C3; verificado aquí, no lo es.

**C4, sí verificado directamente:** `catalogos-atlas-2.json` tiene las mismas cinco versiones. En las cinco, la entrada de C4 es idéntica byte a byte en los campos consultados: `{"n":4,"label":"Postplantación, trabajo y desposesión","label_en":"Post-plantation, labor and dispossession","provisional":true}`. Cero redacciones distintas, cero cambios, en las cinco versiones. Este dato se verificó con `git show <commit>:<ruta>` sobre cada una de las cinco y se transcribe en la sección 20.

**El campo `provisional` sigue en `true`.** No hay, en ninguna de las cinco versiones, un momento en que `provisional` pase a `false`. Este expediente no lo cambia.

**La pregunta que un dictamen de C2 dejó pendiente sobre C4.** El dictamen ya publicado de C2 (`dictamen-academico-c2.md`, apartado 1) registra como observación pendiente «la lectura cronológica del par `plantación` / `postplantación`» y dispone no resolverla «antes del dictamen específico de C4». Esa pregunta sigue abierta; este expediente reúne evidencia para responderla (apartado 12.1) pero no la responde.

---

## 5. Guion provisional, sin aprobarlo

Texto vigente en `etapa-1-arquitectura-integrada.md`, sección 2, entrada C4, transcrito sin modificación:

> La plantación no terminó: se reorganizó. La corriente sigue cómo el orden del trabajo, la tierra y la raza persiste tras la abolición formal, de manera desigual según el territorio, y reaparece en el ingenio, el enclave, la zona franca y el resort. Su tensión: nombrar continuidad puede volver invisible lo que sí cambió, y nombrar ruptura puede absolver al presente. Recorre obras que rastrean esa persistencia sin convertirla en destino.

Tabla adjunta en el mismo documento, transcrita sin modificación:

| | |
|---|---|
| **Alcance intelectual** | Economía política del Caribe contemporáneo, antropología del trabajo, estudios del turismo, urbanismo y despojo |
| **Incluye** | Régimen laboral postabolición; enclave y extracción; turismo como economía de la mirada; desposesión urbana y rural |
| **No incluye** | El régimen esclavista mismo, que es C2; la marca `clase_trabajo`, que atraviesa varias corrientes |
| **Corriente más próxima** | C2, con la que comparte el objeto plantacionario, sin que la relación sea de continuación temporal simple; también C7 |
| **Riesgo de solapamiento** | Alto con `capitalismo_racial`. Es la corriente donde más entradas heredadas de esa etiqueta podrían recalar, y por eso la que más expuesta está a recibir obras por descarte y no por argumento |
| **Vía de constitución** | Migración del corpus heredado, base `postplantación` (35 entradas, 15 %) |
| **Estado** | Provisional |

**Preguntas que quedan abiertas sobre este guion, no respuestas aquí:**

- ¿La cifra «35 entradas, 15 %» corresponde a qué versión del corpus? (Se verifica en el apartado 9.)
- ¿«Enclave urbano» y «barrio popular» —lenguaje que el borrador retirado incorporó al guion— están sustentados por los fundamentos ya escritos en los lotes, o son una ampliación interpretativa que un dictamen tendría que decidir si adopta? El apartado 13 presenta el caso testigo (`alvarezboro`) y dejamos la pregunta sin cerrar.
- ¿El guion debe fijar la distinción con C2 por «régimen analítico dominante» en vez de por cronología, tal como C2 ya lo declaró desde su propio lado? Es una pregunta para el dictamen, no una decisión de este expediente.

---

## 6. Vía declarada y vía evidenciada

**Vía declarada** (`etapa-1-arquitectura-integrada.md`): migración del corpus heredado, base `postplantación`, 35 entradas, 15 % — sobre el corpus v1.15.0, de 233 entradas.

**Vía evidenciada** (recalculada sobre v1.16.1, 232 entradas, con `node` contra `datos-atlas.json`):

```
d.obras.filter(o => Array.isArray(o.f) && o.f.includes("postplantacion")).length
→ 34
34 / 232 = 14,66 % ≈ 15 %
```

La diferencia entre 35 y 34 es exactamente la entrada retirada por la fusión de `stewardpuertorico` en `steward` (commit `af31c4e`, 10 de agosto), verificable porque antes de esa fusión ambos identificadores llevaban la etiqueta `postplantacion` como obras separadas. No es una corrección de contenido del guion; es la consecuencia aritmética de una fusión ya ejecutada y ya dictaminada por separado (no por este expediente).

**Lo que la vía declarada no dice y la evidencia sí muestra:** que trece entradas ya tienen `corriente_confirmada = postplantacion_trabajo_desposesion` en los lotes cerrados, y que de esas trece, **ocho** llevan la etiqueta `postplantacion` y **cinco no** (`bourgoisethnicity`, `downtownladies`, `reddock`, `klein_battleparadise`, `figueroa`). La vía declarada describe el origen agregado del universo; no describe, entrada por entrada, cómo llegó cada una de las clasificaciones ya existentes. Esto se documenta con las etiquetas reales de cada una en el apartado 8; no se until aquí en una fórmula.

---

## 7. Historial completo de candidaturas

**Método.** `piloto-config.json` es el único de los cuatro archivos de lote con más de una versión en Git: tres (`619ad67`, `99aec5b`, `2343008`). `lotes/s01-config.json` tiene una sola versión (`2343008`). `lotes/a01-config.json` tiene una sola versión (`58723f9`). `lotes/a02-config.json` tiene una sola versión (`024bb41`); `git log --follow` sugiere un enlace con `58723f9` por similitud de contenido con A01, pero `git diff 58723f9 024bb41 -- .../a02-config.json` muestra el archivo como `new file` en `024bb41`: el enlace de `--follow` es una detección de renombramiento por similitud, no una versión real anterior. **Consecuencia metodológica: la única candidatura histórica documentalmente trazable en Git —con una versión anterior a la decisión final, dentro del mismo archivo— es la de P00.** Para S01, A01 y A02 no existe, en el historial de Git, un estado de candidatura previo al que conste en la única versión disponible; el «historial de candidaturas» de esas entradas, si existió antes de que el archivo se comprometiera, no es reconstruible desde este repositorio.

**Búsqueda exhaustiva en P00 (619ad67), sin presuponer que solo hay cuatro casos:**

```
Campo corriente_candidata === "postplantacion_trabajo_desposesion", o
corrientes_candidatas incluye "postplantacion_trabajo_desposesion",
sobre las 10 entradas de piloto-config.json en 619ad67:

→ mintz (corriente_candidata única)
→ steward (corriente_candidata única, fusion_candidata_con: stewardpuertorico)
→ stewardpuertorico (corriente_candidata única, fusion_candidata_con: steward)
→ williamscapitalismo (corrientes_candidatas: [postplantacion_trabajo_desposesion, trata_esclavizacion_plantacion])

Ninguna otra de las 10 entradas de P00 tiene candidatura C4 en 619ad67.
```

Se confirma, por búsqueda exhaustiva y no por presuposición, que estas cuatro son efectivamente las únicas candidaturas C4 documentadas en la primera versión de P00.

### 7.1 `mintz`

| Versión | Estado |
|---|---|
| `619ad67` | `corriente_candidata: "postplantacion_trabajo_desposesion"`, `revision.estado: "candidatura_preliminar"`, `marcas_por_revisar: ["capitalismo_racial"]` |
| `99aec5b` | La candidatura única desaparece. `decision_aprobada: "mantener_pendiente"`, `revision.estado: "pendiente_revision_con_texto"`, `fundamento: "El nodo reúne dos obras con argumentos diferentes; no se confirma una corriente única hasta revisar cada componente."` Se agregan dos `obras_componentes` (*Caribbean Transformations*, 1974; *Sweetness and Power*, 1985), cada una con `corriente: null` |
| `2343008` | Sin cambios respecto de `99aec5b` |
| Actual (corpus v1.16.1) | Sin cambios: `mintz` sigue en `pendiente_revision_con_texto`, sin corriente confirmada, con los dos componentes sin clasificar |

**Lo que este historial muestra y el borrador retirado omitió por completo:** `mintz` tuvo una candidatura C4 real, con estado explícito de `candidatura_preliminar`, antes de que la Dirección Académica decidiera —el mismo 8 de agosto, a juzgar por la fecha de aprobación del lote— que el nodo mezclaba dos obras y que ninguna candidatura de corriente única podía sostenerse hasta leer cada componente por separado. La candidatura no fue rechazada por argumento contrario a C4: fue retirada porque la pregunta que respondía —«¿qué corriente es este nodo?»— dejó de tener sentido en cuanto se reconoció que el nodo eran dos libros.

### 7.2 `steward` y `stewardpuertorico`

| Versión | `steward` | `stewardpuertorico` |
|---|---|---|
| `619ad67` | `corriente_candidata: "postplantacion_trabajo_desposesion"`, `candidatura_preliminar`, `fusion_candidata_con: stewardpuertorico` | `corriente_candidata: "postplantacion_trabajo_desposesion"`, `candidatura_preliminar`, `fusion_candidata_con: steward`, `marcas_por_revisar: ["capitalismo_racial"]` |
| `99aec5b` | `decision_aprobada: "fusionar_y_confirmar"`, `corriente_confirmada: "postplantacion_trabajo_desposesion"`, `fusiona: ["stewardpuertorico"]` | `decision_aprobada: "fusionar_y_redirigir"`, `revision.estado: "revisada"`, `accion_entidad: "redireccion"`, `redirige_a: "steward"` |
| `2343008` | Sin cambios | Sin cambios |

Antes de la fusión (verificado en `af31c4e~1:data/agua-de-por-medio/datos-atlas.json`), `steward` llevaba `f: ["postplantacion"]` y `stewardpuertorico` llevaba `f: ["postplantacion","capitalismo_racial"]`; ambos con el mismo título, *The People of Puerto Rico: A Study in Social Anthropology*. La fusión (commit `af31c4e`, 10 de agosto, autor Roberto Almanza) conservó `steward` como identificador superviviente «por conservar los enlaces citables» (fundamento literal del lote) y redirigió `stewardpuertorico`. Es, de las cuatro candidaturas históricas, la única sin discontinuidad de fondo: ambas entradas nacieron con candidatura C4 y ambas llegaron a C4, vía fusión.

### 7.3 `williamscapitalismo`

| Versión | Estado |
|---|---|
| `619ad67` | `corrientes_candidatas: ["postplantacion_trabajo_desposesion", "trata_esclavizacion_plantacion"]` — candidatura doble, C4 y C2 a la vez, `revision.estado: "pendiente_revision_con_texto"` |
| `99aec5b` | Resuelta: `decision_aprobada: "confirmar"`, `corriente_confirmada: "trata_esclavizacion_plantacion"` (C2), `corrientes_secundarias: ["postplantacion_trabajo_desposesion"]` (C4 secundaria) |
| `2343008` | Sin cambios |

La candidatura doble se resolvió a favor de C2 como principal sin descartar C4: quedó como secundaria, con fundamento escrito («El libro sitúa la trata y la esclavización antillana en la formación del capitalismo británico y discute la abolición desde la transformación económica»).

### 7.4 Candidaturas históricas fuera de las cuatro exigidas

La búsqueda exhaustiva del recuadro superior de esta sección ya demuestra que, dentro de P00, no hay una quinta candidatura C4 documentada en Git. Dentro de S01, A01 y A02, la ausencia de versiones anteriores en el historial impide una búsqueda equivalente; lo único disponible es el estado final, que se documenta —sin llamarlo candidatura histórica, porque no se puede probar que lo fue— en el apartado 8.

---

## 8. Clasificaciones existentes, sin ratificarlas

Lo que sigue son hechos del repositorio: decisiones que la Dirección Académica ya tomó el 8 de agosto de 2026, según consta en el campo `aprobacion` de cada archivo de lote (`estado: "aprobado"`, `responsable: "Dirección académica de Pensamiento Caribe"`). Este expediente las **reporta**, no las ratifica de nuevo: ratificar sería un acto de este documento sobre esas decisiones, y este documento no ejerce ese acto. Si una cifra agregada sobre ellas resultó incorrecta en el borrador retirado, se corrige aquí porque contarlas mal no es neutral respecto de la evidencia, aunque contarlas bien tampoco es ratificarlas.

### 8.1 Trece con `corriente_confirmada = postplantacion_trabajo_desposesion`

| Lote | id | Etiquetas heredadas | Fundamento (cita literal del lote) |
|---|---|---|---|
| P00 | `steward` | postplantacion | «Compara subculturas puertorriqueñas configuradas por entornos y regímenes económicos locales; el identificador más antiguo conserva los enlaces citables» |
| P00 | `bourgoisethnicity` | capitalismo_racial, violencias | «Una empresa bananera transnacional organiza la división étnica del trabajo y reproduce jerarquías raciales y de clase en Costa Rica y Panamá» |
| S01 | `alvarezboro` | violencias, postplantacion | «Precariedad, segregación étnico-racial, violencia urbana y marginación sociopolítica estructural en una periferia afrocaribeña de Cartagena» |
| S01 | `figueroa` | violencias, creolizacion | «Tradicionalismo cultural, poderes locales, violencia contra el campesinado y bloqueo de la modernización agraria; la creolización queda como dimensión secundaria» |
| A01 | `downtownladies` | cuerpo_erotica, capitalismo_racial | «El centro es el trabajo informal transnacional y la autonomía económica de comerciantes» |
| A01 | `reddock` | cuerpo_erotica, capitalismo_racial | «Trabajo, empleo y participación política de las mujeres constituyen la arquitectura histórica del libro» |
| A01 | `floresvillalobos` | postplantacion, capitalismo_racial, violencias | «El trabajo reproductivo de mujeres migrantes sostiene la infraestructura imperial y la fuerza laboral» |
| A01 | `shellerconsuming` | postplantacion, capitalismo_racial | «La explotación colonial persiste en consumo, turismo y conocimiento» |
| A01 | `bestlevitt` | postplantacion, capitalismo_racial | «La economía de plantación se teoriza como estructura persistente de dependencia» |
| A02 | `peasantscapital` | postplantacion, capitalismo_racial | «El campesinado dominicano se articula con capital, mercado bananero y sistema mundial» |
| A02 | `workercane` | postplantacion, capitalismo_racial | «La historia de vida de Don Taso organiza una lectura del trabajo cañero y la proletarización» |
| A02 | `politicallife` | postplantacion, violencias | «Las lógicas postplantación articulan trabajo, ciudadanía y violencia estatal» |
| A02 | `klein_battleparadise` | catastrofes, capitalismo_racial | «El centro es el capitalismo del desastre, la privatización y la desposesión post-María» |

**Corrección respecto del borrador retirado: `workercane` tiene C2 como secundaria.** `workercane.corrientes_secundarias = ["trata_esclavizacion_plantacion"]`. El borrador retirado afirmó, en su apartado sobre fronteras, que «ningún caso [sostenía] la frontera C4/C2 con C4 principal y C2 secundaria». Es falso: `workercane` es exactamente ese caso. Se verifica en la sección 20 con el fragmento JSON literal.

### 8.2 Dieciséis con `postplantacion_trabajo_desposesion` en `corrientes_secundarias`

| Lote | id | `corriente_confirmada` (principal) |
|---|---|---|
| P00 | `williamscapitalismo` | trata_esclavizacion_plantacion |
| S01 | `naveda_esclavoscordoba` | trata_esclavizacion_plantacion |
| S01 | `ortiz` | creolizaciones_traducciones_opacidades |
| S01 | `benitez` | creolizaciones_traducciones_opacidades |
| S01 | `londonoargonauts` | rutas_diasporas_territorios_acuosos |
| S01 | `esquiva` | soberanias_fronteras_ocupaciones |
| A01 | `stoutafterlove` | cuerpos_parentescos_eroticas |
| A01 | `nixon_resistingparadise` | cuerpos_parentescos_eroticas |
| A01 | `kempadoo` | cuerpos_parentescos_eroticas |
| A01 | `curtispleasures` | cuerpos_parentescos_eroticas |
| A01 | `shepherdmaharani` | rutas_diasporas_territorios_acuosos |
| A01 | `hall_slavesocietydanish` | trata_esclavizacion_plantacion |
| A01 | `morenofraginals` | trata_esclavizacion_plantacion |
| A02 | `harpellecostarica` | rutas_diasporas_territorios_acuosos |
| A02 | `schuller_killingkindness` | soberanias_fronteras_ocupaciones |
| A02 | `hintzen` | soberanias_fronteras_ocupaciones |

**Comprobación de conteo, exigida explícitamente.** 13 + 16 = 29. Se verificó por script que ningún `id` aparece dos veces en el conjunto de 29 (cada `id` es principal *o* secundaria, nunca ambas a la vez dentro de C4): `new Set(29 ids).size === 29`. No hay doble conteo.

**Distinción de estados, exigida explícitamente.** Ninguna de las 29 referencias de esta sección «fue leída» por este expediente ni «recibió clasificación» de él: **fue leída y clasificada por la Dirección Académica el 8 de agosto**, según el lote. «Pasó por lote» y «recibió clasificación» son, para estas 29, lo mismo. «Quedó pendiente» describe, en cambio, a `mintz` (formalmente, dentro de P00) y a las entradas de los apartados 9 y 11 (que ni siquiera pasaron por lote).

---

## 9. Universo construido por conjuntos

Siguiendo la instrucción de no sumar mecánicamente: cada conjunto se construye por separado, con su método declarado, antes de calcular cualquier intersección.

### 9.1 Conjunto A — etiqueta heredada `postplantacion`

Método: `datos-atlas.json`, campo `f` incluye `"postplantacion"`. Tamaño: **34**.

### 9.2 Conjunto B — anclas del catálogo de fenómenos

Método: unión de las anclas declaradas en los siete fenómenos de `catalogo-fenomenos.json` cuyo campo `corrientes_compatibles` incluye `postplantacion_trabajo_desposesion` (detalle en el apartado 11). Tamaño: **22** (`casimir`, `olwigstjohn`, `cuijla`, `zambrana`, `araujo`, `headleyreparaciones`, `williamscapitalismo`, `mintzarea`, `brereton_racerelationstrinidad`, `morenofraginals`, `kalefragments`, `shepherdmaharani`, `callaloonation`, `looklaichinese`, `zonabananera`, `lassoerased`, `bourgoisethnicity`, `corinealdipanama`, `robinsonmarxismo`, `harpellecostarica`, `kincaidsmallplace`, `shellerconsuming`).

### 9.3 Conjunto C — candidaturas históricas verificadas

Método: búsqueda exhaustiva en la sección 7. Tamaño: **4** (`mintz`, `steward`, `stewardpuertorico`, `williamscapitalismo`). `stewardpuertorico` ya no existe como entrada activa del corpus (fue redirigida); se cuenta aquí como hecho histórico, no como entrada viva.

### 9.4 Conjunto D — casos de frontera

Método: entradas con `postplantacion_trabajo_desposesion` en `corrientes_secundarias` o como principal con al menos otra corriente en `corrientes_secundarias` (es decir, las 29 del apartado 8, que por definición cruzan con otra corriente salvo tres: `steward`, `bourgoisethnicity` y `alvarezboro`, cuyas `corrientes_secundarias` están vacías). Tamaño: **26** (29 menos las tres sin cruce).

### 9.5 Conjunto E — señales léxicas

Método documentado en el apartado 10. Tamaño: **50**.

### 9.6 Conjunto F — casos deliberados (`decisiones-pendientes.md`, punto 1)

Las cinco entradas que quedaron sin candidatura derivable al convertirse `capitalismo_racial` y `violencias` en marcas: `perezmorales`, `sherwood`, `esquiva`, `exceptviolence`, `jaffeconcrete`. De ellas, `esquiva` ya está en el conjunto de 29 confirmadas (apartado 8.2, secundaria, principal C7). Las otras cuatro —`perezmorales`, `sherwood`, `exceptviolence`, `jaffeconcrete`— no aparecen en ningún lote. Tamaño del conjunto (sin `esquiva`, ya resuelta): **4**.

Datos de las cuatro, verificados contra el corpus:

| id | Título | Año | `f` | `ap` |
|---|---|---|---|---|
| `perezmorales` | *Cartagena's Privateers* | 2018 | violencias, capitalismo_racial | «El puerto como zona de fuga, contrabando y violencia imperial, no solo de comercio» |
| `sherwood` | *After Abolition: Britain and the Slave Trade* | 2007 | capitalismo_racial, violencias | «La trata sobrevive a su abolición formal; el capital racializado como continuidad» |
| `exceptviolence` | *Exceptional Violence: Embodied Citizenship in Transnational Jamaica* | 2011 | violencias, capitalismo_racial | «La violencia jamaicana funciona como forma de ciudadanía producida por la historia transnacional de la isla» |
| `jaffeconcrete` | *Concrete Jungles: Urban Pollution and the Politics of Difference in the Caribbean* | 2016 | capitalismo_racial, violencias | «La contaminación urbana —refinerías, basura, aguas negras— leída como política de la diferencia racial y de clase en dos ciudades caribeñas» |

Ninguna de las cuatro está en el conjunto A, B, D o E salvo `sherwood`, que sí aparece en el conjunto E por el término «trabaj» — verificar si es señal o ruido es parte de lo pendiente, no se decide aquí. Este expediente no propone destino para ninguna de las cuatro. Se observa, sin asignar, que `jaffeconcrete` («política de la diferencia» en dos ciudades caribeñas, una de ellas Curazao según `tr: "neerlandés/anglófono (Curazao/Jamaica)"`) conecta con la pregunta abierta del apartado 14.2 sobre el Caribe neerlandófono; conectarlas no es clasificar ninguna de las dos.

### 9.7 Intersecciones, unión y pendientes reales

| Operación | Resultado |
|---|---|
| A ∩ (ya en lote, apartado 8) | 15 (`mintz`, `handlerlangebarbados` sin rol C4, más 13 con rol C4 de las cuales 8 llevan la etiqueta) |
| A − (ya en lote) | 19 |
| B − (ya en lote) | 10 |
| (A ∪ B) − (ya en lote) | **29** — unión de A y B, descontando lo ya revisado en cualquier lote; sin duplicados entre A y B, verificado por script |
| F − (ya en lote) − (A ∪ B) | 4 (`perezmorales`, `sherwood`, `exceptviolence`, `jaffeconcrete`; ninguna coincide con A ni B) |
| **Universo total pendiente de lectura, sin doble conteo** | **33** (29 de A∪B, más 4 de F) |

El borrador retirado había fijado el universo pendiente en 29, sin integrar el conjunto F. La cifra corregida, con F integrado, es **33**. `mintz` no se suma aparte: ya está contado dentro de A (es una de las 34 con etiqueta `postplantacion`) y su estado —`pendiente_revision_con_texto`, sin corriente en ninguno de sus dos componentes— ya consta en el apartado 8 como parte de las 15 «ya en lote sin rol C4», no como una entrada nueva. Contarlo dos veces habría sido el error exacto que la instrucción de este expediente advierte evitar.

---

## 10. Señales léxicas

**Patrón, justificado término por término**, derivado del guion provisional (apartado 5) y no de las clasificaciones ya existentes, para evitar razonar en círculo:

`postplantac` (la raíz misma del nombre), `trabaj`/`labor` (alcance intelectual declarado: «antropología del trabajo»), `obrero`, `jornaler`, `campesin` (trabajo rural postplantación), `enclave` («Incluye: enclave y extracción»), `desposes`/`dispossess` (está en el nombre de la corriente), `turis`/`tourism` («turismo como economía de la mirada»), `zona franca` (mencionada en el guion), `indentur` (trabajo contratado, régimen laboral postabolición), `banana`/`bananer`, `plantation`/`plantación`/`cañ` (persistencia de la lógica plantacionaria, núcleo del guion), `proletar`.

**Resultado sobre los campos `t`, `a`, `ap` de las 232 entradas: 50 con al menos una coincidencia.** Lista completa y término disparador en el apartado 20.

**Cruce con los conjuntos A y B, para medir qué añade la señal léxica y qué es ruido:**

| Categoría | Cantidad | ids (muestra) |
|---|---:|---|
| Señal que coincide con A o B, y ya tiene rol confirmado en C4 | 12 | `mintz`\*, `workercane`, `besson`\*\*, `peasantscapital`, `politicallife`, `downtownladies`, `reddock`, `naveda_esclavoscordoba`, `kincaidsmallplace`\*\*, `shellerconsuming`, `floresvillalobos`, `morenofraginals`, `bestlevitt`, `bourgoisethnicity` |
| Señal que coincide con A o B, sin rol confirmado en C4 todavía | 10 aprox. | `casimir`, `mintzarea`, `benitez`, `ramsaranlewis`, `handlerlangebarbados`\*\*\*, `bahadurcoolie`, `zonabananera`, `sangbenvolviendo`, `hoeftesuriname`, `kalefragments`, `looklaichinese`, `callaloonation`, `zambrana` |
| Señal **sin** coincidencia con A ni B — la aportación real de este método | ~19 | `gudynas`, `pricemars`, `modernblackness`, `brownreaper`, `tackysrevolt`, `bebelgislerleonora`, `benedictykokken_haitiexception`, `goffedarklab`, `castrogomezhybris`, `cosgrovegarifuna`, `helglibertyequality`, `rappaportcobarde`, `archipelagicthinking`, `mendozaraices`, `mcneillmosquito`, `crawfordturtlemen`, `mitchellalibi`, `legrandfrontier`, `atkinsonearliest`, `fuentesdispossessed` |

\* `besson`, `kincaidsmallplace` figuran en A/B pero no en el conjunto de 29 confirmadas (apartado 9.7, todavía pendientes).
\*\* `handlerlangebarbados` tiene señal y etiqueta `postplantacion`, pero su clasificación confirmada es C2 principal / C9 secundaria — **no** C4. Es exactamente el tipo de falso positivo que la instrucción pide declarar: la señal, y hasta la etiqueta heredada, no autorizan ninguna afirmación sobre el argumento ni sobre la corriente final.

**Ruido declarado, con razón.** `tackysrevolt`, `brownreaper` y `fuentesdispossessed` ya están confirmadas en C3 y C9 respectivamente, sin ninguna secundaria hacia C4 (verificado en el dictamen de C2, apartado 3.2, ya publicado); su coincidencia léxica («plantación», «dispossess») no corresponde al argumento por el que fueron clasificadas. `gudynas` coincide por «turis» y «cañ», pero ya tiene una candidatura derivada distinta y publicada —hacia `huracanes_ecologias_materialidades_vivas`— según el dictamen de C2; su presencia aquí es ruido del patrón, no evidencia a favor de C4. Los demás términos genéricos (`trabaj`, `labor`, `campesin`) producen coincidencias en obras cuyo campo `ap` no trata, hasta donde ese campo permite ver, del régimen postplantación (`pricemars`, `modernblackness`, `bebelgislerleonora`, `rappaportcobarde`, `mcneillmosquito`, `archipelagicthinking`, `atkinsonearliest`): **la señal autoriza revisar el `ap` completo, nunca clasificar.**

---

## 11. Fenómenos compatibles

`catalogo-fenomenos.json` declara siete fenómenos con `postplantacion_trabajo_desposesion` entre sus `corrientes_compatibles`. El catálogo declara su propio estado como «borrador para dictamen académico»; ninguna compatibilidad aquí confirma corriente.

| Fenómeno | Familia | `corrientes_compatibles` | Anclas | Estado de cada ancla |
|---|---|---|---|---|
| `plantacion_y_secuela` | trabajo | C2, C4 | `williamscapitalismo`, `mintzarea`, `brereton_racerelationstrinidad`, `morenofraginals` | Dos confirmadas (C2 principal / C4 secundaria); dos sin lote |
| `segmentacion_racial_del_trabajo` | trabajo | C4, C2 | `bourgoisethnicity`, `robinsonmarxismo`, `harpellecostarica` | Una confirmada en C4 principal; una confirmada en C5 principal / C4 y C7 secundarias; una sin lote |
| `indentura_y_trabajo_importado` | trabajo | C4, C5 | `kalefragments`, `shepherdmaharani`, `callaloonation`, `looklaichinese` | Una confirmada en C5 principal / C4 secundaria; tres sin lote |
| `enclave_y_extractivismo` | trabajo | C4, C7 | `zonabananera`, `lassoerased`, `bourgoisethnicity`, `corinealdipanama` | Una confirmada en C4 principal; tres sin lote |
| `turismo_y_economia_de_la_mirada` | trabajo | C4, C8 | `kincaidsmallplace`, `shellerconsuming` | Una confirmada en C4 principal; una sin lote |
| `deuda_como_tecnologia_colonial` | régimen | C4, C7 | `zambrana`, `araujo`, `headleyreparaciones` | Las tres sin lote |
| `contraplantacion` | fuga | C4, C3 | `casimir`, `olwigstjohn`, `cuijla` | Las tres sin lote |

**Corrección de una afirmación errónea del borrador retirado.** Aquel documento describió `contraplantacion` como «el único fenómeno cuya segunda corriente compatible no es C4 sino otra corriente ratificada», y eso es falso tal como está escrito: `plantacion_y_secuela` también tiene como segunda corriente compatible a C2, y C2 **ya está ratificada** desde el 12 de agosto. Lo que distingue a `contraplantacion` no es que su segunda corriente esté ratificada —también lo está la de `plantacion_y_secuela`— sino que pertenece a una **familia distinta** (`fuga`, no `trabajo` ni `régimen`, las dos únicas familias de los otros seis) y que su glosa describe una posición que el esquema no resuelve por regla: rehacer sociedad dentro del territorio de la antigua plantación (posible C4) frente a sustraerse de él (C3). La comparación correcta es de familia y de tipo de tensión, no de si la segunda corriente está o no ratificada.

**Nota sobre «más fenómenos que las tres corrientes anteriores», verificada.** El borrador retirado afirmó, sin demostrarlo en el propio texto, que C4 tiene más fenómenos compatibles que C1, C2 o C3. Repetida la misma consulta contra las claves `invasiones_mundos_indigenas`, `trata_esclavizacion_plantacion` y `fugas_cimarronajes_emancipaciones`: **C1, 5; C2, 3; C3, 4; C4, 7.** La afirmación es correcta —C4 tiene más que cualquiera de las tres—, pero no lo era hasta comprobarla: el borrador retirado la presentó como una conclusión ya sostenida, cuando en ese momento no estaba verificada. El recuento de C2 (tres: `silencio_de_archivo`, `plantacion_y_secuela`, `segmentacion_racial_del_trabajo`) coincide exactamente con el que el propio dictamen de C2, ya publicado, registra en su apartado 5.

---

## 12. Fronteras como problemas para dictamen

Recalculadas por script sobre las 29 entradas del apartado 8, contando toda coocurrencia de `postplantacion_trabajo_desposesion` con cada otra corriente, sea como principal o como secundaria, en cualquier combinación:

| Corriente que cruza con C4 | Casos | ids |
|---|---:|---|
| C2 (`trata_esclavizacion_plantacion`) | 5 | `williamscapitalismo`, `naveda_esclavoscordoba`, `hall_slavesocietydanish`, `morenofraginals` (C2 principal, C4 secundaria); `workercane` (**C4 principal, C2 secundaria** — corrige el error del borrador retirado) |
| C5 (`rutas_diasporas_territorios_acuosos`) | 7 | `londonoargonauts`, `shepherdmaharani`, `harpellecostarica` (C5 principal, C4 secundaria); `downtownladies`, `floresvillalobos`, `shellerconsuming` (C4 principal, C5 secundaria); `nixon_resistingparadise` (C10 principal, C4 y C5 ambas secundarias) |
| C7 (`soberanias_fronteras_ocupaciones`) | 8 | `esquiva`, `schuller_killingkindness`, `hintzen` (C7 principal, C4 secundaria); `bestlevitt`, `peasantscapital`, `politicallife`, `klein_battleparadise` (C4 principal, C7 secundaria); `harpellecostarica` (C5 principal, C4 y C7 ambas secundarias) |
| C10 (`cuerpos_parentescos_eroticas`) | 8 | `stoutafterlove`, `nixon_resistingparadise`, `kempadoo`, `curtispleasures` (C10 principal, C4 secundaria); `downtownladies`, `reddock`, `floresvillalobos` (C4 principal, C10 secundaria); `shepherdmaharani` (C5 principal, C4 y C10 ambas secundarias) |
| C8 (`creolizaciones_traducciones_opacidades`) | 4 | `ortiz`, `benitez` (C8 principal, C4 secundaria); `figueroa` (C4 principal, C8 secundaria); `shellerconsuming` (C4 principal, C8 secundaria) |
| C1 (`invasiones_mundos_indigenas`) | 1 | `londonoargonauts` (C5 principal, C1 y C4 ambas secundarias) |
| C3 (`fugas_cimarronajes_emancipaciones`) | 1 | `hall_slavesocietydanish` (C2 principal, C3 y C4 ambas secundarias) |
| C6 (`huracanes_ecologias_materialidades_vivas`) | 1 | `klein_battleparadise` (C4 principal, C6 y C7 ambas secundarias) |
| C9 (`memorias_espiritualidades_archivos_vivos`) | 1 | `politicallife` (C4 principal, C7 y C9 ambas secundarias) |

Se enumeran todos los casos de cada frontera, no solo su cifra, para que la cifra sea auditable.

### 12.1 C2/C4, con la pregunta cronológica del apartado 4 todavía abierta

Cinco casos con C2 principal y C4 secundaria (núcleo esclavista con persistencia postplantación registrada), uno con C4 principal y C2 secundaria (`workercane`: «la historia de vida de Don Taso organiza una lectura del trabajo cañero y la proletarización; la plantación azucarera es su arquitectura histórica secundaria» —fundamento literal). Estos seis casos son la evidencia disponible para responder si C2 y C4 se distinguen por régimen analítico o por cronología; no la responden por sí solos, porque en ninguno de los seis el fundamento del lote discute explícitamente el criterio de distinción, solo aplica una clasificación.

### 12.2 C4/C3, sin ningún caso confirmado

El fenómeno `contraplantacion` declara compatibilidad con C3, pero sus tres anclas (`casimir`, `olwigstjohn`, `cuijla`) están sin lote. Un caso ya confirmado —`hall_slavesocietydanish`— tiene a C3 y C4 como secundarias simultáneas de un principal C2, pero el fundamento del lote («rebeliones y emancipación son capítulos de esa arquitectura, no el principio ordenador») subordina ambas a C2 y no dice nada sobre cómo se relacionan C3 y C4 entre sí. **No hay, en este momento, ningún caso confirmado que fije un criterio C3/C4.**

---

## 13. Casos testigo

| Caso | Por qué es testigo |
|---|---|
| `mintz` | Único nodo con historial de candidatura C4 documentado y hoy sin corriente, dividido en dos componentes sin clasificar. Prueba que una candidatura registrada no equivale a una clasificación futura |
| `workercane` | C4 principal con C2 secundaria: el único caso que cruza la frontera C2/C4 en el sentido que el borrador retirado negó que existiera |
| `williamscapitalismo` | Candidatura doble C2/C4 resuelta a favor de C2, con C4 conservada como secundaria en vez de descartada: modelo de cómo una candidatura no confirmada no implica exclusión |
| `handlerlangebarbados` | Etiqueta `postplantacion` y señal léxica, pero clasificación final ajena a C4 (C2 principal, C9 secundaria): el caso que mejor demuestra que ni la etiqueta ni la señal autorizan una afirmación sobre el argumento |
| `alvarezboro` | Único caso donde el fundamento del lote («precariedad, segregación étnico-racial, violencia urbana... en una periferia afrocaribeña de Cartagena») sostiene lenguaje de enclave urbano sin que el guion provisional lo mencionara todavía; es la base real, y el límite real, de cualquier propuesta de ampliar el guion en esa dirección |
| `jaffeconcrete` | Sin candidatura derivable, con señal temática de enclave/desposesión urbana y territorio parcialmente neerlandófono (Curazao/Jamaica); conecta dos preguntas abiertas (apartados 9.6 y 14.2) sin resolver ninguna |

---

## 14. Vacíos e incertidumbres

### 14.1 El «vacío neerlandófono»: corrección de una afirmación excesiva

El borrador retirado declaró un «vacío comprobado» del Caribe neerlandófono en C4 y presentó a `hoeftesuriname` como «la única vía visible» para cerrarlo. Ambas afirmaciones se verifican aquí contra el corpus completo, no solo contra el subconjunto ya clasificado, y ninguna de las dos resiste la comprobación:

**Lo que es cierto:** de las 29 entradas con rol confirmado en C4 (apartado 8), ninguna tiene el neerlandés como lengua de publicación ni Surinam, Curazao o Aruba como territorio principal. Eso es una ausencia en el subconjunto ya clasificado, verificable y real.

**Lo que no es cierto:** que sea un vacío del corpus, o que `hoeftesuriname` sea la única vía. Una búsqueda sobre las 232 entradas —no solo las 29— encuentra **quince** con relación al Caribe neerlandófono, de las cuales varias ya llevan etiquetas compatibles con C4 o están entre los conjuntos F o de señal léxica de este mismo expediente:

| id | `f` | Relación con C4 en este expediente |
|---|---|---|
| `tambu` | memoria, creolizacion | Sin relación declarada con C4 hasta ahora |
| `allen_dikimanera` | postplantacion, memoria | **Ya está en el conjunto A** (apartado 9.1), pendiente de lectura |
| `hoeftesuriname` | postplantacion, soberanias | Ya está en el conjunto A, pendiente de lectura; señal léxica (`indentur`) |
| `jaffeconcrete` | capitalismo_racial, violencias | **En el conjunto F** (apartado 9.6), sin candidatura derivable |
| `vanderpijl_equaliberty` | soberanias, colonialidad | Sin relación declarada con C4 hasta ahora |
| `oostindiedecolonising` | soberanias, colonialidad | Sin relación declarada con C4 hasta ahora |
| `kloosterrealm` | colonialidad, capitalismo_racial | Sin relación declarada con C4 hasta ahora |
| `price`, `pricefirst`, `rebeldestiny`, `travelstooy`, `alabi`, `rainforestwarriors` | cimarronaje (todas) | Familia temática distinta (cimarronaje, no postplantación); se listan por territorio, no por afinidad de corriente |
| `mintzpricebirth` | creolizacion, memoria | Territorio Surinam, `tr` anglófono; caso límite |
| `kingisland` | cuerpo_erotica, creolizacion | `tr` comparado, incluye neerlandés entre varios |

**Conclusión correcta, en lugar de la anterior:** el vacío del Caribe neerlandófono en las 29 entradas ya confirmadas en C4 es un hecho verificado. Que sea un vacío del universo disponible para C4, y que `hoeftesuriname` sea la única vía para cerrarlo, no lo es: `allen_dikimanera` y `jaffeconcrete` son, como mínimo, dos vías adicionales ya identificadas y sin leer. Esto es un indicio pendiente de lectura, no un vacío comprobado del corpus.

### 14.2 Otras incertidumbres, sin resolver

- Si `hall_slavesocietydanish` (C2 principal, C3 y C4 secundarias) debe leerse como un caso que ya conecta C3 y C4, o como una coincidencia de dos secundarias sin relación entre sí: el fundamento del lote no lo dice.
- Si «enclave urbano» y «barrio popular» —lenguaje ausente del guion provisional— deben incorporarse a un guion futuro con fundamento en `alvarezboro`, o si es una extrapolación que un solo caso no sostiene.
- Si la cifra de fenómenos compatibles de C4 (siete) es mayor, menor o igual que la de C1, C2 o C3: no verificado en este expediente (apartado 11).
- Si `sherwood` (señal léxica, sin candidatura derivable) debe leerse primero contra C2 —como ya propuso el dictamen de C2, apartado 4.6— o contra C4, dado que también aparece en el conjunto F de este expediente.

---

## 15. Contradicciones documentales

| Contradicción | Los dos términos | Cómo se trata aquí |
|---|---|---|
| Cifra de la etiqueta `postplantacion` | `etapa-1-arquitectura-integrada.md`: 35 entradas (v1.15.0). Recuento directo sobre v1.16.1: 34 | Se explica por la fusión `stewardpuertorico`→`steward` (apartado 6); no es un error de ninguno de los dos documentos, cada uno describe una versión distinta del corpus |
| Estado de `mintz` | Tuvo candidatura C4 única (`619ad67`). Hoy no tiene ninguna corriente, dividido en dos componentes | No es contradicción sino evolución documentada (apartado 7.1); se incluye aquí porque el borrador retirado no la mencionó y podía leerse como si `mintz` nunca hubiera tenido relación con C4 |
| Frontera C2/C4 | El borrador retirado afirmó que ningún caso tenía C4 principal con C2 secundaria | Falso: `workercane` (apartado 8.1, 12.1) |
| `contraplantacion` como «único» fenómeno con segunda corriente ratificada | Afirmación del borrador retirado | Falsa tal como estaba formulada; corregida en el apartado 11 |
| Vacío neerlandófono | «Comprobado», «única vía» (borrador retirado) | Corregido a indicio pendiente, con quince entradas neerlandófonas identificadas en el corpus (apartado 14.1) |
| Número de cambios de redacción de C1 | «Tres veces» (borrador retirado) frente a «dos cambios» (expediente de evidencia de C3, ya publicado) | No resuelto en este expediente: se distinguió el problema (apartado 4) pero no se ejecutó la comprobación completa sobre las cinco versiones |

---

## 16. Decisiones que deberá tomar el dictamen

1. ¿Se ratifica la denominación «Postplantación, trabajo y desposesión», sin cambios en cinco versiones del catálogo?
2. ¿C2 y C4 se distinguen por régimen analítico dominante o existe algún componente cronológico legítimo? La evidencia del apartado 12.1 es insuficiente por sí sola.
3. ¿Cómo se distingue C4 de C3 en el caso de `contraplantacion`, dado que sus tres anclas (`casimir`, `olwigstjohn`, `cuijla`) siguen sin leer?
4. ¿Se aprueba el guion provisional tal cual, o se incorpora lenguaje de trabajo femenino, migración laboral, turismo, enclave urbano y desposesión, con el fundamento —y el límite— que ofrece el caso `alvarezboro`?
5. ¿Cuál es el universo final de lectura: el de 33 entradas de este expediente (A∪B∪F, sin duplicar), u otro?
6. ¿Se leen primero `perezmorales`, `sherwood`, `exceptviolence` y `jaffeconcrete` contra C4, contra C2, o contra ambas a la vez?
7. Verificado que C4 tiene efectivamente más fenómenos compatibles (7) que C1 (5), C2 (3) o C3 (4): ¿qué peso, si alguno, debe tener esa cifra en el dictamen? Un recuento más alto no es por sí solo un argumento a favor ni en contra de ninguna decisión.
8. ¿Cuándo podría autorizarse siembra dirigida, y bajo qué criterio de vacío, dado que el «vacío neerlandófono» resultó ser un indicio y no un hecho comprobado?
9. Verificado que C1 tuvo tres redacciones distintas y dos cambios en cinco versiones: ¿debe el dictamen de C4 pronunciarse sobre el historial de C1, o esa es una cuestión que corresponde exclusivamente al dictamen ya emitido de C1?

Ninguna de estas nueve preguntas se responde en este expediente.

---

## 17. Matriz de trazabilidad

| # | Afirmación | Fuente | Ruta | Campo | Commit/versión | Método | Resultado | Estado |
|---|---|---|---|---|---|---|---|---|
| 1 | 232 obras en el corpus | Corpus | `datos-atlas.json` | `obras` | HEAD (v1.16.1) | `d.obras.length` | 232 | Verificada |
| 2 | 34 obras con `postplantacion` | Corpus | `datos-atlas.json` | `f` | HEAD | filtro `.includes` | 34 | Verificada |
| 3 | 52 obras con `capitalismo_racial` | Corpus | `datos-atlas.json` | `f` | HEAD | filtro `.includes` | 52 | Verificada |
| 4 | 13 principales, 16 secundarias en C4 | Lotes P00/S01/A01/A02 | `piloto-config.json`, `lotes/*.json` | `corriente_confirmada`, `corrientes_secundarias` | HEAD | script sobre 4 archivos | 13 + 16 = 29, sin duplicados | Verificada |
| 5 | `workercane` con C4 principal y C2 secundaria | Lote A02 | `lotes/a02-config.json` | `corrientes_secundarias` | HEAD | lectura directa del JSON | `["trata_esclavizacion_plantacion"]` | Verificada |
| 6 | Cinco versiones de la entrada C4 en el catálogo, idénticas | Catálogo | `catalogos-atlas-2.json` | `corrientes.postplantacion_trabajo_desposesion` | `619ad67`,`99aec5b`,`2343008`,`d3b15a7`,`16fc252` | `git show <c>:<ruta>` × 5 | Idéntica en las cinco | Verificada |
| 7 | `mintz` tuvo candidatura única C4 en `619ad67` | Lote P00 | `piloto-config.json` | `corriente_candidata` | `619ad67` | `git show` | `"postplantacion_trabajo_desposesion"` | Verificada |
| 8 | `williamscapitalismo` tuvo candidatura doble C2/C4 | Lote P00 | `piloto-config.json` | `corrientes_candidatas` | `619ad67` | `git show` | `["postplantacion_trabajo_desposesion","trata_esclavizacion_plantacion"]` | Verificada |
| 9 | `steward`/`stewardpuertorico`: ambos con candidatura C4 antes de la fusión | Lote P00, corpus | `piloto-config.json`, `datos-atlas.json` | `corriente_candidata`, `f` | `619ad67`; `af31c4e~1` | `git show` × 2 | Ambos con `postplantacion_trabajo_desposesion` / `f` incluye `postplantacion` | Verificada |
| 10 | Solo cuatro candidaturas C4 en P00 (619ad67) | Lote P00 | `piloto-config.json` | `corriente_candidata`/`corrientes_candidatas` | `619ad67` | búsqueda exhaustiva por script sobre las 10 entradas | 4 (`mintz`,`steward`,`stewardpuertorico`,`williamscapitalismo`) | Verificada |
| 11 | S01/A01/A02 sin versión anterior en Git | Lotes | `lotes/*.json` | — | `git log --follow` | comando directo | Una versión cada uno; enlace `a02↔58723f9` es falso positivo de `--follow` (confirmado con `git diff`) | Verificada |
| 12 | 50 entradas con señal léxica | Corpus | `datos-atlas.json` | `t`,`a`,`ap` | HEAD | patrón de 14 términos, script | 50 | Verificada |
| 13 | Siete fenómenos compatibles con C4 | Catálogo de fenómenos | `catalogo-fenomenos.json` | `corrientes_compatibles` | HEAD | filtro directo | 7 | Verificada |
| 14 | Quince entradas del corpus con relación al Caribe neerlandófono | Corpus | `datos-atlas.json` | `tr`, `t`, `l` | HEAD | búsqueda de subcadenas | 15 | Verificada |
| 15 | Comparación del número de fenómenos de C1/C2/C3 con C4 | Catálogo de fenómenos | `catalogo-fenomenos.json` | `corrientes` (nombre real del campo; no `corrientes_compatibles`) | HEAD | filtro por clave sobre las cuatro corrientes | C1: 5, C2: 3, C3: 4, C4: 7 | Verificada |
| 16 | Número exacto de redacciones distintas y de cambios de C1 en las cinco versiones | Catálogo | `catalogos-atlas-2.json` | `corrientes.invasiones_mundos_indigenas.label` | cinco commits | `git show <c>:<ruta>` × 5 | 3 redacciones distintas, 2 cambios (transiciones v3→v4, v4→v5) | Verificada |
| 17 | `dictamen-academico-c4.md` (versión no autorizada) retirado sin reescribir historia | Git | `.git` | — | `7699635` | `git log`, `git show` | Commit `7699635` presente, `438a879` intacto en el historial | Verificada |

---

## 18. Inventario de consultas

Comandos y scripts ejecutados para este expediente (además de los ya citados en la matriz):

- `git rev-parse --abbrev-ref HEAD`, `--short HEAD`, `--short origin/...`
- `git status --short --branch`, `git log --oneline --decorate`
- `git show <commit>:<ruta>` sobre `catalogos-atlas-2.json` (cinco versiones) y `piloto-config.json` (tres versiones)
- `git log --follow --oneline -- <ruta>` sobre `piloto-config.json`, `s01-config.json`, `a01-config.json`, `a02-config.json`
- `git diff <a> <b> -- <ruta>` para confirmar el falso enlace de `--follow` en `a02-config.json`
- `git log --oneline --all -S"stewardpuertorico" -- datos-atlas.json datos-atlas.js`
- Scripts `node` puntuales sobre `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` y los cuatro archivos de lote, para: recuento de etiquetas heredadas, cruce de `capitalismo_racial` con roles en C4, extracción de fundamentos y decisiones por `id`, construcción y cruce de la señal léxica, búsqueda de entradas neerlandófonas en el corpus completo

---

## 19. Resumen ejecutivo no decisorio

C4 tiene, a diferencia de C1, C2 y C3, una etiqueta heredada directa (`postplantacion`, 34 entradas) que ya explica ocho de las trece clasificaciones principales confirmadas; las otras cinco llegan por `capitalismo_racial` o por corrección de procedencia. Trece principales y dieciséis secundarias —veintinueve referencias— ya están decididas en los lotes cerrados del 8 de agosto; ninguna se reclasifica aquí. El universo pendiente de lectura, calculado por conjuntos separados y sin duplicar, es de treinta y tres entradas: diecinueve con la etiqueta heredada, diez con ancla de fenómeno sin etiqueta, y cuatro señaladas desde 2026 en `decisiones-pendientes.md` sin integrar hasta ahora. Un primer borrador de este trabajo, retirado del repositorio antes de este expediente, trató decisiones no tomadas como si lo estuvieran y contenía al menos cuatro errores de cifra o de afirmación absoluta, todos corregidos aquí con su verificación literal. Quedan nueve preguntas explícitas para el dictamen que la Dirección Académica decida emitir.

---

## 20. Puerta técnica

### 20.1 Salidas literales

```
$ git rev-parse --abbrev-ref HEAD
feat/atlas-2-etapa-1-integrada

$ git rev-parse --short HEAD
[ver 20.3: corresponde al commit que agrega este expediente]

$ git rev-parse --short origin/feat/atlas-2-etapa-1-integrada
315c69b

$ git status --short --branch
[ver 20.3]

$ git diff --check
[sin salida esperada antes de comprometer este archivo: se ejecuta después de escribirlo, no antes]

$ git diff --name-only
[ver 20.3]

$ git diff --stat
[ver 20.3]

$ git diff --cached --name-only
[ver 20.3]

$ git status --short -- data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c4.md
[ver 20.3: archivo nuevo, sin rastrear hasta el momento de comprometerlo]

$ git ls-files --others --exclude-standard
[debe listar únicamente expediente-evidencia-c4.md como archivo nuevo relevante]
```

### 20.2 Controles directos sobre este archivo

Ejecutados sobre el archivo tal como se comprometió, con `wc`, `md5sum`, `sha256sum`, `grep` y `od`:

| Control | Resultado |
|---|---|
| Marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`) reales | Ninguno (la única coincidencia de `grep` es esta misma fila de la tabla, que los nombra como texto) |
| Espacios finales de línea | 0 |
| Tabulaciones | 0 |
| Retorno de carro (CRLF) | 0 — el archivo usa únicamente `\n` |
| Salto de línea final | Presente (`od -c` sobre el último byte: `\n`) |
| Líneas | 560 |
| Bytes | 57.185 |
| MD5 | `28b873ba6c7d97b9169bd2eb0137a05c` |
| SHA-256 | `4ef655bea1039e34335d6d6265bd90cd689db4a491b56aa630c874dafc8c042b` |

**Advertencia sobre estos valores.** Se calcularon sobre el archivo *antes* de agregar esta misma fila con sus resultados, porque el hash de un archivo no puede incluir su propio hash sin recalcularse en un segundo paso. El MD5 y el SHA-256 anteriores corresponden al contenido de este expediente hasta el cierre de la sección 20.1, sin esta tabla de controles ni la confirmación final que sigue. Quien audite este documento debe recalcular el hash sobre el archivo tal como quedó comprometido en el repositorio, no asumir que coincide con los valores citados aquí arriba.

### 20.3 Registro final

El archivo se comprometió con `git add` seguido de `git commit`, en un único ciclo de bloqueo cada uno —el mismo método que funcionó para el commit `438a879` y para el commit de retiro `7699635`—, porque este entorno no puede ejecutar operaciones de Git que requieran más de una adquisición del bloqueo del índice dentro del mismo proceso (`git revert` falló por esa razón exacta al intentar retirar el dictamen no autorizado; se resolvió moviendo el archivo fuera del árbol y comprometiendo la eliminación con `add`+`commit`, no con `revert`). El hash de commit resultante, la salida de `git status --short --branch` posterior y el resto de las salidas de la sección 20.1 se entregan de forma literal en el mensaje de esta sesión, no dentro de este archivo, precisamente porque el hash del commit que contiene este archivo no puede conocerse antes de crear ese commit.

---

**Confirmaciones exigidas:**

- C4 no fue ratificada.
- El guion no fue aprobado.
- Ninguna clasificación fue ratificada por este expediente; las 29 que aparecen en la sección 8 fueron decididas por la Dirección Académica el 8 de agosto y se reportan, no se ratifican de nuevo.
- Ninguna entrada fue convertida en candidatura.
- No se autorizó siembra.
- No hubo `git add`, `commit` ni `push` sobre ningún dictamen de C4.
- No se avanzó a C5.
