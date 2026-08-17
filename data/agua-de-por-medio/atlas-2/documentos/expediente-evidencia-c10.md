# Expediente de evidencia — Corriente C10

**Naturaleza del documento.** Probatorio, exploratorio y no decisorio. Reúne evidencia verificada sobre C10 para que la Dirección Académica decida. No fija principios, no reclasifica, no crea candidaturas, no redacta el dictamen de C10 y, por ser C10 la última corriente de esta etapa, no inicia ninguna fase posterior del Atlas 2.0 sin instrucción expresa. Donde dos fuentes se contradicen, se registra la tensión sin resolverla.

**Rama:** `feat/atlas-2-etapa-1-integrada`
**HEAD al iniciar:** `3313e06ebb0b6cbd61c795b8a7573ac43f3f20c9`
**Commit relevante anterior:** `3313e06` — Documenta expediente y dictamen académico de la corriente C9

**Estado inicial del repositorio, verificado antes de escribir cualquier otra cosa:**

```
$ git branch --show-current
feat/atlas-2-etapa-1-integrada
$ git rev-parse HEAD
3313e06ebb0b6cbd61c795b8a7573ac43f3f20c9
$ git rev-parse origin/feat/atlas-2-etapa-1-integrada
3313e06ebb0b6cbd61c795b8a7573ac43f3f20c9
$ git log -4 --oneline
3313e06 Documenta expediente y dictamen académico de la corriente C9
e5cdeca Documenta dictamen académico de la corriente C8
0d1f9ac Documenta expediente de evidencia de la corriente C8
5a68fdc Corrige evidencia de la vía constitutiva de C7
$ git status --short
(sin salida)
$ git diff --stat HEAD
(sin salida)
```

El HEAD local coincide exactamente con `origin/feat/atlas-2-etapa-1-integrada`: la condición de partida exigida se cumple.

**[NOTA METODOLÓGICA — entorno de trabajo]** Este expediente se redactó sobre una copia obtenida por `git clone` limpio de la rama, no sobre el directorio de trabajo persistente que usaron los expedientes de C1 a C9 en sesiones anteriores. Consecuencia verificada: los dos archivos heredados no rastreados que documentaron los expedientes de C8 y C9 (`expediente-evidencia-c7.md`, `ficha-decision-c4.md`) **no existen en esta copia de trabajo**, por tratarse de archivos que nunca se incorporaron a Git (`git status --short` no los reporta porque un clon no reproduce el estado no rastreado de otro directorio de trabajo). No se crearon, no se borraron y no se modificaron: sencillamente no forman parte de la historia versionada que este expediente puede ver. Se deja constancia para que la Dirección Académica sepa que la ausencia es una propiedad del método de trabajo de esta sesión, no un hallazgo sobre el repositorio.

---

## 1. Identidad documental de C10

Obtenida por lectura directa de `data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json` (HEAD) y de `data/agua-de-por-medio/atlas-2/documentos/etapa-1-arquitectura-integrada.md` (HEAD). No se presupone nada desde memoria.

| Campo | Valor |
|---|---|
| `n` | 10 |
| id interno (clave) | `cuerpos_parentescos_eroticas` |
| `label` (catálogo vigente) | Cuerpos, parentescos y eróticas |
| `label_en` (catálogo vigente) | Bodies, kinships and erotics |
| `provisional` | `true` |
| Guion (párrafo) | «El cuerpo caribeño como campo de disputa y también de placer. La corriente sigue cómo género, deseo y parentesco organizan a la vez el poder y las formas de libertad, del castigo esclavista a la erótica insurgente. Su tensión: el mismo cuerpo que fue objeto de propiedad es el que sostiene prácticas de soberanía, y leerlo solo como herida repite el despojo. Recorre obras que piensan el placer y lo sagrado como política.» |
| Alcance intelectual | Estudios de género y sexualidad caribeños, teoría queer del Caribe, antropología del parentesco, teoría feminista negra |
| Incluye | Parentesco y formas de familia; erótica y deseo; violencia sexual y de género; el cuerpo como archivo |
| No incluye | Las marcas `genero` y `racializacion`, que atraviesan varias corrientes |
| Corriente más próxima | C9, por la vía del cuerpo ritual y la transmisión, pero también C2, C3 y C4 |
| Riesgo de solapamiento | **Alto o medio con cuatro corrientes, no bajo**: con C2, propiedad, reproducción y violencia sobre cuerpos esclavizados; con C3, cuerpo, libertad y erótica insurgente; con C4, trabajo reproductivo, género y desposesión; con C9, cuerpo ritual, espiritualidad, transmisión y parentesco. La clasificación principal depende de si el argumento central de la obra es el cuerpo, el parentesco, el deseo o la erótica; si esos elementos aparecen como dimensión de otro argumento, C10 será secundaria o no aparecerá |
| Vía de constitución (declarada) | Migración del corpus heredado (`cuerpo y erótica`, 29 entradas, 12 %) |
| Estado | Provisional |

**[VERIFICADO]** El párrafo de «Riesgo de solapamiento» no es una observación editorial libre: `etapa-1-arquitectura-integrada.md` declara en su primera línea que la dirección académica aprobó la arquitectura «en su versión 2 e incorporó cuatro precisiones vinculantes», y una de las cuatro es explícitamente «los solapamientos reales de C10 (§2, C10)». Es decir, ese párrafo de cuatro corrientes en tensión fue objeto de aprobación expresa, a diferencia del resto del guion de C10 (que sigue sin ratificar, como las otras nueve).

**Identidad numérica, estable — sin tensión documental que registrar.** A diferencia de C1 (cuya `label` cambió de «colonialidades» a «despojos») y de C9 (que tuvo tres redacciones distintas de su nombre entre el 7 y el 11 de agosto), la entrada de C10 en `catalogos-atlas-2.json` es **idéntica en los cinco commits que tocaron ese archivo**, verificado con `git show <commit>:catalogos-atlas-2.json` en cada uno:

| Commit | Fecha (hora local del repo) | `n` / `label` / `label_en` / `provisional` de C10 |
|---|---|---|
| `619ad67` | 2026-08-07 23:52:33 | 10 / Cuerpos, parentescos y eróticas / Bodies, kinships and erotics / `true` |
| `99aec5b` | 2026-08-08 00:40:29 | idéntico |
| `2343008` | 2026-08-08 06:44:42 | idéntico |
| `d3b15a7` | 2026-08-10 10:16:52 | idéntico |
| `16fc252` (= HEAD del catálogo) | 2026-08-11 11:00:12 | idéntico |

El guion completo de C10 (el párrafo narrativo y la tabla de alcance) vive en `etapa-1-arquitectura-integrada.md`, cuya historia con `git log --follow` arroja **un único commit**: `d951345` («Documenta arquitectura integrada de la Etapa 1 del Atlas 2.0», 2026-08-12 13:20:59 UTC). Se verificó con `diff` que el contenido de ese commit es byte a byte idéntico al HEAD actual: el guion de C10 nunca se modificó desde que se escribió. De las diez corrientes, C10 es la que tiene la historia de identidad más estable — dato que no prejuzga su calidad conceptual, solo su historial documental.

---

## 2. Fuentes revisadas

Corpus (`datos-atlas.json`, versión **1.16.1**, 2026-08-11, 232 obras), catálogo de corrientes (`catalogos-atlas-2.json`), catálogo de fenómenos (`catalogo-fenomenos.json`, versión `0.1.0-borrador`, 35 fenómenos, estado «borrador para dictamen académico; no se ha aplicado al corpus publicado»), arquitectura integrada de la Etapa 1, `decisiones-pendientes.md`, `glosario-archipielico.md`, `esquema-datos-propuesto.json`, `fenomenos-ampliacion.md`, `incidencias-cerradas.md`, y los cuatro lotes obligatorios: piloto (P00, 10 registros heredados / 9 nodos efectivos), S01 (11 registros, bloqueos bibliográficos e identidad), A01 (18 registros, candidaturas únicas) y A02 (18 registros, candidaturas únicas) — 57 registros heredados en total, todos con `config` y `generado` revisados. Se revisaron además F01 (muestra de prueba del catálogo de fenómenos, 26 entradas, estado `propuesto`, no confirmado) y TP01 (temporalidad de publicación/periodo estudiado, 232 registros): ninguno de los dos clasifica por corriente, así que no se cuentan como «procesados» en el sentido de este expediente, pero F01 sí aportó evidencia metodológica real para C10 (§12) y se cita donde corresponde. Se consultaron los dictámenes académicos C1-C9 únicamente para cruces ya registrados, criterios ya ratificados y contradicciones documentales — no se reabrió ninguna de las nueve corrientes ya dictaminadas.

---

## 3. Historial Git de C10

Cubierto en la sección 1 para el catálogo y el guion, por ser evidencia directa de identidad. Añade aquí el rastreo del ID real (`cuerpos_parentescos_eroticas`) en todo el repositorio:

```
$ git log --oneline --all -S "cuerpos_parentescos_eroticas"
5df66be Documenta expediente de evidencia de la corriente C4
d951345 Documenta arquitectura integrada de la Etapa 1 del Atlas 2.0
d3b15a7 Amplía los fenómenos, cierra incidencias y prepara el depósito 1.15.0
024bb41 Incorpora lote A02 revisado y corroborado
58723f9 Incorpora lote A01 y valida fricciones documentadas
619ad67 Añade piloto de arquitectura Atlas 2.0
```

El identificador aparece por primera vez en `619ad67`, el commit que introduce el piloto de arquitectura del Atlas 2.0: C10 existe desde el primer boceto del esquema de diez corrientes, no fue añadida después. Los commits `58723f9` y `024bb41` corresponden a la incorporación de los lotes A01 y A02, que son —se confirma en la sección 6— los **únicos** lotes donde C10 recibe clasificaciones reales. `5df66be` es el expediente de evidencia de C4, que cita casos C10 al documentar la frontera C4/C10 (§9).

**Candidaturas, mención textual y artefacto de Git — distinción aplicada.** Los seis commits de la búsqueda `-S` corresponden todos a modificaciones sustantivas (arquitectura, catálogo, lotes, expediente de otra corriente que cita evidencia real). No se detectó ningún commit en el que el identificador apareciera y desapareciera por un artefacto de formato (reindentación, renombrado de archivo, etc.).

---

## 4. Vía constitutiva

El guion declara: «Migración del corpus heredado (`cuerpo y erótica`, 29 entradas, 12 %)». Verificado por lectura directa de `datos-atlas.json` con dos métodos independientes (`jq` y Python):

```
jq: [.obras[] | select(.f[]? == "cuerpo_erotica")] | length   →  29
python: len([o for o in obras if 'cuerpo_erotica' in o.get('f',[])])  →  29
```

29 de 232 obras = **12,5 %**, coherente con la cifra redondeada del guion.

**Composición de la vía, verificada obra por obra en A01 y A02 (únicos lotes que tocan C10):** de los 14 registros procesados que en algún momento tienen a C10 como principal o secundaria (§6), **los 14** llevan `procedencia: "corpus heredado"` y `procedencia_verificada: true`; **los 14** llevan en su campo `proceso` las etiquetas `migración` y `reclasificación` a la vez; **2 de los 14** (`downtownladies`, `floresvillalobos`) suman además `corrección bibliográfica`. Ninguno de los 14 proviene de S01 (el lote de bloqueos bibliográficos e identidad) ni del piloto. Esto confirma la vía declarada en el guion sin excepción: no hay clasificación directa de una obra nueva, no hay candidatura nacida fuera del corpus heredado, no hay corrección de identidad bibliográfica involucrada en ningún caso de C10.

**Pero la vía declarada no cubre todo lo que terminó en C10.** Tres de los 14 registros —`afrocentroam`, `floresvillalobos`, `islandscity`— **no llevan la etiqueta heredada `cuerpo_erotica`** (llevan `soberanias`/`capitalismo_racial` o `postplantacion`/`capitalismo_racial`/`violencias`). Llegaron a C10 exclusivamente por la lectura del comité durante la reclasificación, no por arrastre de etiqueta. El propio esquema explica cómo es posible pese a que la vía se declare como «migración del corpus heredado»: la migración no es un mecanismo automático de arrastre de `f`, es un proceso de relectura en el que la etiqueta heredada es punto de partida, no destino. Se registra la distinción sin resolver si esto matiza o no la fórmula del guion — es una pregunta para la Dirección Académica (§22, pregunta 3).

---

## 5. Taxonomía heredada (`cuerpo_erotica`)

| Indicador | Valor |
|---|---|
| Total con `f` = `cuerpo_erotica` | **29** (12,5 % del corpus, verificado por dos métodos) |
| Procesadas (aparecen en algún lote) | **11** |
| No procesadas (nunca en un lote) | **18** |
| De las procesadas, terminaron con C10 **principal** | **7** |
| De las procesadas, terminaron con C10 **secundaria** (sin ser principal) | **4** |
| De las procesadas, quedaron **fuera de C10 por completo** | **0** |

**Procesadas (11):** `belisodelirium`, `curtispleasures`, `downtownladies`, `fuentesdispossessed`, `gill`, `kempadoo`, `kutzinskisugar`, `nixon_resistingparadise`, `reddock`, `shepherdmaharani`, `stoutafterlove`.

**No procesadas (18):** `alexander`, `allenvenceremos`, `bahadurcoolie`, `barrowfamily`, `citizenshipedge`, `clarkemymother`, `curiel`, `fanon`, `gosinenature`, `kingisland`, `lara`, `mohammed_generosrealidades`, `rtsmithmatrifocal`, `shellererotic`, `smith_sexcitizen`, `sonicbodies`, `tinsley`, `womenancestors`.

**Lectura del dato, sin convertirlo en equivalencia automática.** De las 11 obras procesadas que llevaban la etiqueta `cuerpo_erotica`, el 100 % tocó C10 de una forma u otra (7 como principal, 4 como secundaria) — ninguna quedó fuera. Eso es una tasa de acierto alta de la etiqueta heredada *sobre lo que ya se procesó*, pero **no permite proyectar** que las 18 no procesadas vayan a comportarse igual: el propio esquema advierte que la etiqueta es punto de partida, y la sección 4 ya mostró tres casos (`afrocentroam`, `floresvillalobos`, `islandscity`) donde C10 se confirmó **sin** la etiqueta. La taxonomía heredada orienta la lectura; no la sustituye.

---

## 6. Clasificaciones existentes

Reconstruidas directamente contra `piloto-generado.json`, `s01-generado.json`, `a01-generado.json` y `a02-generado.json` (57 registros heredados en total: 10 piloto / 11 S01 / 18 A01 / 18 A02). **Todas las clasificaciones de C10 provienen exclusivamente de A01 y A02**; ni el piloto ni S01 contienen una sola mención de `cuerpos_parentescos_eroticas`.

**C10 principal (7), verificado por dos métodos (conteo por registro y por id único — coinciden):**

| id | Lote | Corrientes secundarias | Decisión aprobada | Fundamento del lote |
|---|---|---|---|---|
| `belisodelirium` | A01 | C7, C9 | `confirmar_candidatura_con_nota_diasporica` | «El cuerpo racializado convertido en diagnóstico y objeto de violencia estatal organiza el libro; la conexión caribeña es diaspórica y religiosa, no territorial» |
| `curtispleasures` | A01 | C4 | `confirmar_candidatura` | «Sexualidad, coerción, consentimiento y placer estructuran la etnografía; consumo y desigualdad económica son secundarios» |
| `gill` | A01 | C9 | `confirmar_candidatura` | «El eros es teoría, método y práctica política; arte, espiritualidad y memoria queer amplían la corriente sin desplazarla» |
| `kempadoo` | A01 | C4 | `confirmar_candidatura` | «Género, raza y trabajo sexual se estudian desde cuerpos y relaciones eróticas racializadas; turismo y mercado quedan como dimensión económica» |
| `kutzinskisugar` | A01 | C7 | `confirmar_candidatura` | «La figura erótica racializada organiza la crítica del nacionalismo cubano; nación y soberanía son la dimensión secundaria» |
| `nixon_resistingparadise` | A01 | C4, C5 | `confirmar_candidatura` | «La producción cultural y sexual del paraíso articula el libro; turismo y diáspora funcionan como economías y rutas secundarias» |
| `stoutafterlove` | A01 | C4 | `confirmar_candidatura` | «La intimidad queer, el deseo y las economías eróticas organizan el argumento; la transformación económica es secundaria» |

**C10 secundaria, sin ser principal (7), mismo doble método:**

| id | Lote | Corriente principal | Otras secundarias | Decisión aprobada |
|---|---|---|---|---|
| `downtownladies` | A01 | C4 | C5 | `corregir_corriente_y_fecha` |
| `reddock` | A01 | C4 | — | `corregir_corriente` |
| `shepherdmaharani` | A01 | C5 | C4 | `corregir_corriente` |
| `fuentesdispossessed` | A01 | C9 | C2 | `corregir_corriente` |
| `floresvillalobos` | A01 | C4 | C5 | `confirmar_corriente_y_corregir_fecha` |
| `afrocentroam` | A02 | C5 | C7 | `corregir_corriente` |
| `islandscity` | A02 | C5 | C7 | `corregir_corriente` |

**Total C10 (principal + secundaria, sin duplicar): 14 registros, 14 ids únicos.**

**Casos triples (entrada con tres corrientes en total — principal más dos secundarias, o dos secundarias sobre un principal ajeno): 8** — `downtownladies`, `nixon_resistingparadise`, `belisodelirium`, `shepherdmaharani`, `fuentesdispossessed`, `floresvillalobos`, `afrocentroam`, `islandscity`. Es decir, **8 de los 14 casos de C10 (57 %) son casos triples**: la mayoría de la evidencia de C10 no llega en pares limpios, sino en nudos de tres corrientes a la vez. Esto es consistente con lo que el propio guion advierte sobre el riesgo de solapamiento «alto o medio con cuatro corrientes, no bajo».

---

## 7. Candidaturas

**Regla aplicada:** solo se llama candidatura a un registro cuyo `decision_aprobada` contiene literalmente la palabra «candidatura» **y** cuya corriente confirmada es C10. No se cuentan como candidatura la etiqueta heredada, el fenómeno ni el ancla.

De los 15 registros de todos los lotes con `decision_aprobada` que contiene «candidatura», **7 tienen a C10 como corriente principal** — y son, exactamente, los 7 mismos ids de C10 principal de la sección 6: `belisodelirium` (con nota diaspórica), `curtispleasures`, `gill`, `kempadoo`, `kutzinskisugar`, `nixon_resistingparadise`, `stoutafterlove`.

**Candidaturas activas actuales:** los 7 anteriores. Todas resueltas como C10 **principal** — ninguna candidatura terminó resuelta como C10 secundaria; los siete casos de C10 secundaria (§6) llegaron por la vía de `corregir_corriente` / `confirmar_corriente_y_corregir_fecha`, es decir, por corrección de una clasificación existente, no por confirmación de una candidatura.

**Candidaturas verificadas hacia otra corriente:** se revisaron las otras dos decisiones con «candidatura y bibliografía» del corpus completo de lotes (`confirmar_candidatura_y_corregir_bibliografia`, `bloquear_por_alcance_y_corregir_bibliografia`); ninguna de las dos toca C10 (`beyondsun` → C6 principal; `gudynas` → sin corriente, bloqueada por alcance).

**Candidaturas descartadas:** no se encontró ningún registro con decisión de descarte explícito (`descartar_candidatura` o equivalente) que mencionara C10 en ningún lote.

**No se llama candidatura** a: la pertenencia de una obra al conjunto de 29 con etiqueta `cuerpo_erotica` (es taxonomía heredada, §5); la pertenencia de una obra a un fenómeno de la familia `cuerpo` (es ancla de un catálogo en borrador, §12); ni la aparición de un término léxico en `t` o `ap` (es señal, §10).

---

## 8. Frontera C9/C10 — prioridad especial

C9 documentó tres casos y dejó la frontera «provisionalmente abierta, sin criterio definitivo, hasta estudiar C10» (`dictamen-academico-c9.md`, Decisión 10). Se verificaron los tres directamente contra los lotes, no solo contra el texto del dictamen de C9:

**`gill`** — *Erotic Islands: Art and Activism in the Queer Caribbean.* Lote A01. **C10 principal, C9 secundaria.** Fundamento del lote: «El eros es teoría, método y práctica política; arte, espiritualidad y memoria queer amplían la corriente sin desplazarla». `ap` heredado: «El eros como categoría política, sensual y espiritual a la vez, leído en el mas de Carnaval, el calypso y el activismo contra el estigma del VIH en Trinidad. Retoma a Audre Lorde para rehacer el método etnográfico desde el propio cuerpo del investigador.» **Coincide exactamente** con lo que registra `dictamen-academico-c9.md` línea 147.

**`belisodelirium`** — *Excited Delirium: Race, Police Violence, and the Invention of a Disease.* Lote A01. **C10 principal, C9 y C7 secundarias** (el dictamen de C9 solo registraba la secundaria hacia C9; la evidencia del lote muestra que además lleva C7). Fundamento del lote: «El cuerpo racializado convertido en diagnóstico y objeto de violencia estatal organiza el libro; la conexión caribeña es diaspórica y religiosa, no territorial». `ap` heredado: «Una antropóloga formada en santería cubana rastrea cómo la policía estadounidense inventó un diagnóstico médico para justificar la violencia racial. El cuerpo religioso afrocubano como llave para leer la necropolítica en otro lugar.»

**`fuentesdispossessed`** — *Dispossessed Lives: Enslaved Women, Violence, and the Archive.* Lote A01. **C9 principal, C2 y C10 secundarias** (el dictamen de C9 solo registraba C2 como la otra secundaria; la evidencia del lote confirma que C10 es la tercera pata de un caso triple, no un caso simple C9/C10). Fundamento del lote: «La crítica de la forma y violencia del archivo organiza la producción de conocimiento; esclavización y cuerpos de mujeres son campos sustantivos secundarios». `ap` heredado: «Las mujeres esclavizadas de Bridgetown leídas a contrapelo de un archivo colonial que las nombra solo como propiedad o como cuerpo castigado: un método para hacer historia con las fuentes que fueron diseñadas para borrarlas.»

**Qué organiza el argumento en cada polo.** En los tres casos donde C10 aparece (como principal en dos, como secundaria en uno), lo que se lee como C10 es siempre el cuerpo sometido a un régimen de poder — policial, médico, esclavista, de archivo — y no el cuerpo como erótica autónoma o parentesco: ninguno de los tres casos activa el «placer» o el «deseo» del guion de C10, todos activan su mitad de «disputa» y «castigo». Lo que organiza C9 cuando aparece (en `gill` y `belisodelirium` como secundaria) es explícitamente la dimensión ritual-espiritual: santería en `belisodelirium`, y en `gill` un método etnográfico que Gill describe en términos de memoria y espiritualidad queer, no solo de eros. En `fuentesdispossessed`, donde C9 es principal, lo que organiza el argumento es el archivo y su violencia epistémica — el cuerpo aparece, pero subordinado a la pregunta archivística.

**¿La bidireccionalidad permite formular una pregunta decisoria estable?** La evidencia de los tres casos, ahora completa, muestra que la bidireccionalidad no es un empate 50/50: dos de tres tienen C10 como principal y C9 como secundaria; uno de tres tiene la relación invertida. Pero el patrón cualitativo es consistente: cuando el cuerpo violentado o disciplinado es el centro del argumento, C10 organiza; cuando lo que se estudia es cómo se transmite, se archiva o se ritualiza ese cuerpo, C9 organiza — incluso si el cuerpo sigue presente como objeto. Esto **sugiere** una pregunta posible («¿organiza el argumento el cuerpo como objeto de poder, o la forma en que ese cuerpo se transmite/archiva/ritualiza?»), pero tres casos —todos triples o con matices no capturados por el dictamen anterior de C9— siguen siendo pocos para fijar una regla. **No se fija criterio aquí.** Se deja formulada como pregunta en la sección 22.

---

## 9. Resto de fronteras

Se reconstruyó la copresencia de C10 con cada corriente vecina en los 14 registros, contando cada caso en el que ambas corrientes aparecen en la misma entrada (como principal o secundaria), incluidos los casos triples donde ninguna de las dos es principal de la otra directamente. Esta es una definición **más amplia** que la que usan algunos dictámenes anteriores (que a veces cuentan solo pares principal/secundaria directos); donde hay diferencia, se muestra explícitamente.

| Frontera | Casos (copresencia total) | Dirección | Antecedente en C1–C9 | Estado del criterio |
|---|---|---|---|---|
| **C10/C4** | 8 | Mixta: 4 con C10 principal/C4 secundaria, 3 con C4 principal/C10 secundaria, 1 con ambas secundarias de un tercero | `dictamen-academico-c4.md` registra los 7 casos directos (no agrega un total de copresencia) | Sin sección de frontera dedicada en el dictamen de C4; sin criterio fijado |
| **C10/C5** | 6 | Mixta: 1 con C10 principal/C5 secundaria, 3 con C5 principal/C10 secundaria, 2 con ambas secundarias | `dictamen-academico-c5.md` §7 registra exactamente los mismos 6 ids y declara la frontera **ratificada como propia e independiente**, distinta de la zona conjunta con C4, pese a que 4 de los 6 casos se solapan con la frontera C4/C5 | **Ya ratificada por la Dirección Académica** (única de las fronteras de C10 con esa condición); C10 hereda esa decisión sin poder reabrirla aquí |
| **C10/C7** | 4 (copresencia total) / **2** (si se exige que C10 sea principal, como hace C7) | 2 con C10 principal/C7 secundaria (`kutzinskisugar`, `belisodelirium`); 2 adicionales con ambas secundarias de C5 (`afrocentroam`, `islandscity`) | `dictamen-academico-c7.md` declara la frontera **«C10/C7 — abierta»**, contando solo 2 casos, con la definición más estricta | Provisionalmente abierta; **discrepancia de método, no de datos**, entre el conteo de C7 (2, definición estricta) y el de este expediente (4, copresencia total) — se registra sin resolver cuál definición debe regir |
| **C10/C9** | 3 | 2 con C10 principal/C9 secundaria, 1 con C9 principal/C10 secundaria | Objeto del §10 de este mismo expediente y de la Decisión 10 de `dictamen-academico-c9.md` | **Provisionalmente abierta**, remitida explícitamente al dictamen de C10 |
| **C10/C2** | 1 | C9 principal, C2 y C10 ambas secundarias (`fuentesdispossessed`) | No tiene sección propia en ningún dictamen anterior; aparece solo como nota lateral en C9 | Incidental — un solo caso, insuficiente para llamarla frontera estructural |
| **C10/C3** | 0 casos clasificados | — | `dictamen-academico-c3.md` §7.5 **ya fijó una regla ratificada** para esta frontera sin que exista todavía un caso clasificado: «si el argumento de la obra es la subversión estética o corporal, la principal es C8 o C10 según corresponda; C3 puede declararse secundaria cuando la obra piensa explícitamente esa práctica como forma de sustracción y no solo como metáfora de intensidad». El caso que motivó la regla, `quintero`, **sigue sin leerse** — nunca pasó por un lote | Regla ya escrita y ratificada; su aplicación, pendiente. `quintero` es una entrada explícitamente señalada desde C3 como prioritaria de lectura y sigue en el universo no procesado de C10 (§14) |
| **C10/C8** | 0 | — | `dictamen-academico-c8.md` declara la frontera **«C10/C8 — abierta, sin lectura dirigida»**: C8 ni siquiera examinó casos concretos | Abierta, sin evidencia todavía en ningún sentido — consistente con la ausencia total de copresencia encontrada aquí |
| **C10/C1, C10/C6** | 0 | — | Sin mención en ningún dictamen anterior | Sin evidencia, sin antecedente, no se declara abierta ni cerrada porque nunca se ha planteado |

**Lectura de conjunto.** C10 tiene fronteras activas y verificables con cuatro corrientes (C4, C5, C7, C9) y una quinta con regla ya escrita pero sin caso clasificado (C3). De las cinco con evidencia o regla, solo una —C5— tiene ya una decisión ratificada de la Dirección Académica sobre cómo tratarla (como frontera propia, no fusionada con C4, pese a la superposición empírica). Las demás siguen abiertas en distinto grado: C9 «provisionalmente abierta» y remitida aquí; C7 abierta con una discrepancia de método sin resolver; C3 con regla fijada pero sin aplicar; C8 abierta sin ningún caso ni lectura.

---

## 10. Señales léxicas

Términos extraídos literalmente del guion y de la tabla de alcance de C10: *cuerpo(s)*, *parentesco(s)*, *erótic(a/o/as)*, *deseo(s)*, *placer(es)*, *sexualidad(es)*, *queer*, *familia(s)*, *sagrad(a/o/as)*. Búsqueda con límites de palabra (`\b…\b`) sobre los campos `t` (título) y `ap` (anotación) de las 232 obras del corpus, aplicando la regla ratificada en C9: «nunca usar mera coincidencia interna de subcadena como evidencia conceptual».

**Método 1 (Python, `re` con límites de palabra, modo Unicode):**

| Término | Coincidencias |
|---|---|
| `cuerpo(s)` | 16 |
| `parentesco(s)` | 5 |
| `erótic[oa](s)` | 4 |
| `deseo(s)` | 6 |
| `placer(es)` | 0 |
| `sexualidad(es)` | 3 |
| `queer` | 5 |
| `familia(s)` | 3 |
| `sagrad[oa](s)` | 1 |
| **Unión de las nueve señales** | **29** |

**Método 2 (independiente — `grep -iE` con límites de palabra sobre un volcado de `t`+`ap`):** primer intento, **28** — un caso menos que el método 1. Se investigó la diferencia: `grep` con la configuración regional por defecto de este entorno (`LC_ALL` vacío → `POSIX`) no reconoce el límite de palabra `\b` correctamente alrededor de la vocal acentuada de «erótica», y perdía silenciosamente `shellererotic`. Repetido con `LC_ALL=C.UTF-8`, el resultado del método 2 pasa a **29**, y el conjunto exacto de ids coincide con el método 1 sin ninguna diferencia (`diff` vacío). **Se deja registrada la trampa de entorno** porque cualquier auditoría futura que repita este grep sin fijar la configuración regional obtendrá un resultado equivocado por una razón ajena a los datos.

**Unión de las nueve señales léxicas (29 ids, verificada por dos métodos independientes):** `alexander`, `bahadurcoolie`, `barrowfamily`, `belisodelirium`, `besson`, `clarkemymother`, `cunin`, `curtispleasures`, `fanon`, `fuentesdispossessed`, `gill`, `gomezexperiential`, `gosinenature`, `kempadoo`, `kingisland`, `kutzinskisugar`, `lara`, `lightfoot`, `morenofraginals`, `nixon_resistingparadise`, `quintero`, `rtsmithmatrifocal`, `shellererotic`, `shepherdmaharani`, `smith_sexcitizen`, `stoutafterlove`, `tinsley`, `wilsoncrabantics`, `womenancestors`.

**Cruce con la etiqueta heredada — dos conjuntos que casi coinciden en tamaño (29 y 29) pero no en composición:**

- **7 obras tienen señal léxica pero NO llevan `cuerpo_erotica`:** `besson`, `cunin`, `gomezexperiential`, `lightfoot`, `morenofraginals`, `quintero`, `wilsoncrabantics` — evaluadas una por una en la sección 11.
- **7 obras llevan `cuerpo_erotica` pero NO disparan ninguna de las nueve señales controladas:** `allenvenceremos`, `citizenshipedge`, `curiel`, `downtownladies`, `mohammed_generosrealidades`, `reddock`, `sonicbodies`. No es una contradicción: la etiqueta heredada puede fundarse en vocabulario fuera del diccionario controlado de nueve términos (intimidad, afecto, matrifocalidad, ciudadanía sexuada, feminismo) que este método, deliberadamente estrecho, no captura. Se registra como límite del método léxico, no como error del dato.

---

## 11. Falsos positivos y ambigüedades

Cada uno de los 7 casos de señal léxica sin etiqueta heredada se leyó directamente en su `ap`:

**Falso positivo confirmado, con evidencia de clasificación real:** `morenofraginals` — *El ingenio: complejo económico social cubano del azúcar*. `ap`: «cuerpos amortizados» en el sentido contable de la esclavitud como capital. **Este caso ya fue procesado** (lote S01/A01, verificar más abajo): quedó clasificado como C2 principal / C4 secundaria, **sin ningún rol en C10**. La señal léxica «cuerpo» era real pero organizada por completo dentro del argumento de C2 (propiedad y contabilidad esclavista), exactamente el tipo de solapamiento que el guion de C10 ya advertía con C2. Es el único de los 7 con verificación clasificatoria directa, no solo lectura de texto.

**Señal ambigua, sin lectura dirigida:** `gomezexperiential` — *The Experiential Caribbean.* `ap` habla de «el saber sobre el cuerpo y la curación como archivo propio»: la palabra «cuerpo» es real, pero el argumento —epistemología ritual afroamericana como archivo— se organiza mucho más cerca de C9 que de C10. No procesada; candidata a frontera C9/C10, no solo a C10.

**Señal ambigua, uso idiomático:** `wilsoncrabantics` — «le da cuerpo a esa dialéctica» es una expresión hecha («dar cuerpo a») sobre respetabilidad y reputación sociales, no sobre corporalidad como argumento. **Falso positivo probable**, no confirmado por clasificación.

**Señal ambigua, uso idiomático:** `lightfoot` — «la nombra en el cuerpo del texto» usa «cuerpo» en el sentido editorial de «cuerpo del texto», ajeno por completo al campo semántico de C10. **Falso positivo confirmado por lectura**, aunque sin verificación por clasificación (no procesada).

**Señal ambigua, límite con otra corriente:** `besson` — *Martha Brae's Two Histories.* `ap`: «parentesco y tierra como soberanía cotidiana». La palabra «parentesco» es real y pertenece al alcance declarado de C10 («parentesco y formas de familia»), pero el argumento la subordina a la tenencia de tierra campesina como forma de soberanía — más cerca de C4/C7 que de C10. No procesada.

**Señal ambigua, misma familia semántica que C10 sin caso resuelto:** `cunin` — *Identidades a flor de piel.* `ap`: «la superficie del cuerpo» como espacio de negociación racial en Cartagena. Señal genuina, sin resolver por falta de procesamiento.

**Caso ya resuelto por regla ratificada, sin caso clasificado todavía:** `quintero` — *Cuerpo y cultura: las músicas «mulatas» y la subversión del baile.* Título y `ap» activan la señal con fuerza («subversión y creolización del cuerpo»), pero **ya existe una regla ratificada** para este caso exacto (§9, frontera C10/C3): "el cimarronaje metafórico no basta para ingresar a C3"; la obra fue señalada desde el dictamen de C3 como caso testigo prioritario para C10, y sigue sin leerse. No es un falso positivo ni una ambigüedad nueva: es una lectura pendiente con regla ya fijada.

**Ningún término se convirtió en regla de clasificación.** El único de los 7 con desenlace verificable (`morenofraginals`) confirma exactamente lo que el guion advierte: la palabra «cuerpo» sola no basta, y el argumento —no el léxico— decide.

---

## 12. Fenómenos compatibles

`catalogo-fenomenos.json` (35 fenómenos, `0.1.0-borrador`) filtrado por `corrientes` que incluyan `cuerpos_parentescos_eroticas`:

| Fenómeno | Familia | Corrientes | Anclas | Exclusivo / compartido |
|---|---|---|---|---|
| `erotica_negra` | cuerpo | solo C10 | `allenvenceremos`, `tinsley`, `alexander` (3) | **Exclusivo de C10** |
| `fiesta_y_performance_publico` | ritual | C8, C10 | `scher`, `lizcanocarnaval`, `wirtzperforming`, `godreauscripts` (4) | Compartido con C8 |
| `nacion_heterosexual` | cuerpo | C7, C10 | `curiel`, `gosinenature` (2) | Compartido con C7 |
| `parentesco_y_organizacion_domestica` | cuerpo | C9, C10 | `clarkemymother`, `rtsmithmatrifocal`, `barrowfamily`, `womenancestors` (4) | Compartido con C9 |

**4 fenómenos**, **13 anclas totales, 13 anclas únicas** (sin repetición entre fenómenos, verificado). Solo 1 de los 4 (25 %) es exclusivo de C10; los otros tres cruzan con exactamente las corrientes que el propio guion de C10 señala como vecinas de mayor riesgo (C7, C9) o con C8 (no mencionada en el guion como vecina de riesgo — dato que se deja para la sección 21).

**Hallazgo verificado, no trivial:** de las 13 anclas, **ninguna (0 de 13) ha sido procesada en ningún lote**. Todas las anclas de fenómeno de C10 son, al mismo tiempo, entradas nunca clasificadas por corriente. Esto significa que la evidencia de fenómenos y la evidencia de clasificación de C10 son, hoy, **conjuntos completamente disjuntos**: nada de lo que ya se clasificó como C10 (los 14 de la sección 6) tiene todavía un fenómeno asignado, y nada de lo que tiene un fenómeno asignado ha pasado por clasificación de corriente.

**Contradicciones entre fenómeno, guion y dictamen anterior:** ninguna detectada de fondo. Se verificó de forma cruzada con F01 (muestra de prueba del catálogo, estado `propuesto`): tres de las 13 anclas (`curiel`, `allenvenceremos`, `sonicbodies`) fueron muestreadas también en F01, y sus `fenomenos_asignados` en ese ejercicio independiente coinciden con el catálogo vigente (`curiel` → `nacion_heterosexual`; `allenvenceremos` → `erotica_negra`), salvo `sonicbodies`, a quien F01 asignó fenómenos ajenos a la familia `cuerpo` (`sonido_y_escucha`, `ritual_como_conocimiento`) — coherente con que `sonicbodies` tampoco aparezca hoy entre las anclas de ningún fenómeno de C10 pese a llevar la etiqueta heredada `cuerpo_erotica`.

---

## 13. Universo exploratorio

Fórmula construida para C10, con conjuntos que tienen sustento documental verificado en este mismo expediente:

- **A** = etiqueta heredada `cuerpo_erotica` (§5) — 29
- **B** = anclas de fenómeno vinculado a C10 (§12) — 13
- **C** = candidaturas verificadas con C10 principal (§7) — 7
- **D** = clasificaciones existentes, C10 principal o secundaria (§6) — 14
- **E** = señales léxicas del guion, verificadas por dos métodos (§10) — 29

**Unión A∪B∪C∪D∪E = 43**, verificada por dos métodos (unión directa y unión incremental por pares — coinciden):

`afrocentroam`, `alexander`, `allenvenceremos`, `bahadurcoolie`, `barrowfamily`, `belisodelirium`, `besson`, `citizenshipedge`, `clarkemymother`, `cunin`, `curiel`, `curtispleasures`, `downtownladies`, `fanon`, `floresvillalobos`, `fuentesdispossessed`, `gill`, `godreauscripts`, `gomezexperiential`, `gosinenature`, `islandscity`, `kempadoo`, `kingisland`, `kutzinskisugar`, `lara`, `lightfoot`, `lizcanocarnaval`, `mohammed_generosrealidades`, `morenofraginals`, `nixon_resistingparadise`, `quintero`, `reddock`, `rtsmithmatrifocal`, `scher`, `shellererotic`, `shepherdmaharani`, `smith_sexcitizen`, `sonicbodies`, `stoutafterlove`, `tinsley`, `wilsoncrabantics`, `wirtzperforming`, `womenancestors`.

**Intersecciones clave:**

| Intersección | Tamaño | Lectura |
|---|---|---|
| A∩D (etiqueta heredada que sí se clasificó en C10) | 11 | Coincide con las «procesadas» de §5 |
| A−D (etiqueta heredada nunca clasificada en C10) | 18 | Las 18 no procesadas de §5 (ninguna procesada quedó fuera) |
| D−A (clasificadas en C10 sin la etiqueta heredada) | 3 | `afrocentroam`, `floresvillalobos`, `islandscity` — evidencia contra la equivalencia automática (§4) |
| E−A (señal léxica fuera de la etiqueta heredada) | 7 | Los 7 casos de §11 |
| A−E (etiqueta heredada sin señal léxica controlada) | 7 | Límite del diccionario de nueve términos, no del dato |
| B∩D (anclas de fenómeno ya clasificadas) | **0** | Confirma el hallazgo de §12: conjuntos disjuntos |
| D−(A∪B∪E) (clasificadas sin ningún otro rastro documental previo) | 3 | Mismos tres de D−A: llegaron a C10 solo por lectura directa del comité |

**Procesadas vs. no procesadas dentro del universo total de 43:** 15 ids del universo aparecen en algún lote (los 14 de D más `morenofraginals`, procesado y resuelto **fuera** de C10 — §11). **28 nunca pasaron por ningún lote.** Listado completo en la sección 14.

---

## 14. Listado de entradas nunca procesadas

Las 28 entradas del universo exploratorio de C10 que nunca pasaron por un lote, con id, título y territorio (`l`) tal como constan en el corpus — sin inferir ningún campo ausente:

| id | Título | Territorio |
|---|---|---|
| `alexander` | Pedagogies of Crossing: Feminism, Sexual Politics, Memory, and the Sacred | trinidad |
| `allenvenceremos` | ¡Venceremos? The Erotics of Black Self-Making in Cuba | cuba |
| `bahadurcoolie` | Coolie Woman: The Odyssey of Indenture | guyana |
| `barrowfamily` | Family in the Caribbean: Themes and Perspectives | barbados |
| `besson` | Martha Brae's Two Histories | jamaica |
| `citizenshipedge` | Citizenship on the Edge: Sex, Gender, Race | jamaica |
| `clarkemymother` | My Mother Who Fathered Me: A Study of the Families in Three Selected Communities of Jamaica | jamaica |
| `cunin` | Identidades a flor de piel: lo 'negro' entre apariencias y pertenencias | cartagena |
| `curiel` | La Nación Heterosexual | dominicana |
| `fanon` | Piel negra, máscaras blancas | martinica |
| `godreauscripts` | Scripts of Blackness: Race, Cultural Nationalism, and U.S. Colonialism in Puerto Rico | puertorico |
| `gomezexperiential` | The Experiential Caribbean: Creating Knowledge and Healing in the Early Modern Atlantic | cartagena |
| `gosinenature` | Nature's Wild: Love, Sex, and Law in the Caribbean | trinidad |
| `kingisland` | Island Bodies: Transgressive Sexualities in the Caribbean Imagination | trinidad |
| `lara` | Queer Freedom: Black Sovereignty | dominicana |
| `lightfoot` | Troubling Freedom: Antigua and the Aftermath of British Emancipation | antigua |
| `lizcanocarnaval` | Leyendo el carnaval: miradas desde Barranquilla, Bahía y Barcelona | barranquilla |
| `mohammed_generosrealidades` | Gendered Realities: Essays in Caribbean Feminist Thought | trinidad |
| `quintero` | Cuerpo y cultura: las músicas «mulatas» y la subversión del baile | puertorico |
| `rtsmithmatrifocal` | The Matrifocal Family: Power, Pluralism and Politics | guyana |
| `scher` | Carnival and the Formation of a Caribbean Transnation | trinidad |
| `shellererotic` | Citizenship from Below: Erotic Agency and Caribbean Freedom | jamaica |
| `smith_sexcitizen` | Sex and the Citizen: Interrogating the Caribbean | trinidad |
| `sonicbodies` | Sonic Bodies: Reggae Sound Systems, Performance Techniques, and Ways of Knowing | jamaica |
| `tinsley` | Ezili's Mirrors: Imagining Black Queer Genders | haiti |
| `wilsoncrabantics` | Crab Antics: The Social Anthropology of English-Speaking Negro Societies of the Caribbean | sanandres |
| `wirtzperforming` | Performing Afro-Cuba: Image, Voice, Spectacle in the Making of Race and History | cuba |
| `womenancestors` | Women and the Ancestors: Black Carib Kinship and Ritual | belize |

---

## 15. Territorio

**A. C10 confirmadas (los 14 de §6), por territorio (`l` heredado):** Cuba (3: `belisodelirium`, `kutzinskisugar`, `stoutafterlove`), Jamaica (3: `downtownladies`, `islandscity`, `nixon_resistingparadise`), Trinidad (2: `gill`, `reddock`), Guyana (2: `kempadoo`, `shepherdmaharani`), Nevis (1: `curtispleasures`), Panamá (1: `floresvillalobos`), Barbados (1: `fuentesdispossessed`), Belice (1: `afrocentroam`). Ocho territorios distintos, todos del Caribe anglófono o de la diáspora anglófona; ningún territorio hispanófono, francófono o neerlandófono figura entre las 14 confirmadas.

**B. Universo exploratorio sin lote (28, §14):** territorios adicionales que sí aparecen aquí y no entre las confirmadas — Cartagena (2), República Dominicana (2), Martinica (1), Puerto Rico (2), Antigua (1), Barranquilla (1), San Andrés (1), Haití (1) — es decir, **toda la presencia hispanófona y francófona de la señal léxica y la etiqueta heredada de C10 está, hoy, sin procesar.**

**C. Anclas de fenómeno (13, §12):** todas pertenecen también al universo sin lote (B); no se repite el listado.

No se declara sesgo ni representatividad. Se deja registrado el patrón para que la Dirección Académica lo valore: la clasificación confirmada de C10 es, hasta ahora, exclusivamente anglófona en su territorio de estudio; la lengua de publicación (§16) refuerza el mismo patrón.

---

## 16. Lenguas

**Regla aplicada:** `lenguas_publicacion` solo se usa para los lotes donde el campo existe realmente (los cuatro lotes lo llevan). Para el corpus no procesado, `tr` **no equivale** a `lenguas_publicacion` — no se infiere lo uno de lo otro.

**Los 14 registros de C10 (principal o secundaria) llevan `lenguas_publicacion: ["inglés"]` — el 100 %, sin una sola excepción.** No hay ningún caso confirmado en español, francés o neerlandés.

Para el universo no procesado, el campo `tr` (que describe la tradición lingüístico-editorial heredada, no la lengua de publicación verificada) muestra mayor variedad: `cunin` (francófono, Francia/Colombia), `fanon` (francófono, Martinica/Francia), `curiel` (hispano, Rep. Dominicana/Colombia), `quintero` (hispano, Puerto Rico), `lizcanocarnaval` (hispano, Colombia), `gomezexperiential` (anglófono, Colombia/EE.UU.), entre otros con matices comparados. **No se convierte esta lista en una cifra de lenguas de C10**, porque `tr` no es el campo verificado que exige la regla; se deja como dato de contexto para valorar si la concentración anglófona de las clasificaciones confirmadas es un efecto del orden de lectura (A01/A02 empezaron por el bloque anglófono) o un patrón más de fondo.

---

## 17. Elegibilidad

`elegibilidad_atlas` solo existe como campo en un lote: A02 (`config` y `generado`). Se buscó en los 14 registros de C10 y en los 43 del universo exploratorio: **una sola entrada de todo el corpus de lotes lleva el campo, `gudynas` (bloqueada por alcance, ecología política), y no tiene relación con C10.**

**C10 no tiene casos bloqueados, no tiene dudas territoriales registradas y no tiene ninguna incidencia de elegibilidad.** No se inventa un problema donde la evidencia no lo muestra.

---

## 18. Identidades bibliográficas

Se aplicó la metodología ya usada con `esquiva`, `chande` y `manoalzada` (distinguir `procedencia: "corpus heredado"` verificada de `procedencia: "manifestación"` no verificada, y documentar sin resolver cualquier discrepancia entre lote, corpus, commit y corrección aprobada). Ninguna de esas tres entradas concretas toca C10: `esquiva` quedó en C7 principal, `manoalzada` en C9 principal, y `chande` no aparece en ningún lote procesado — su relación con C10 es nula, y se cita aquí solo para dejar constancia de que se verificó, no se asumió.

**Sobre los 14 registros propios de C10:** los 14 llevan `procedencia: "corpus heredado"` y `procedencia_verificada: true` en su `migracion2` (§4); ninguno lleva `procedencia: "manifestación"`. En el corpus vigente (1.16.1), ninguno de los 14 tiene los campos `procedencia`/`procedencia_verificada` a nivel de entrada (esos campos solo se añadieron a `chande`, `esquiva`, `manoalzada`, `totumo` y `figueroa` en la nota de versión 1.16.1); los 14 mantienen `k: "obra"` sin excepción. **No se detectó ninguna discrepancia de identidad bibliográfica en las entradas de C10.**

---

## 19. Contradicciones con C1–C9

**No se corrige nada de lo hallado aquí; solo se documenta.**

1. **Discrepancia de método de conteo en la frontera C10/C7** (§9): C7 cuenta 2 casos con una definición estricta (C10 principal + C7 secundaria); este expediente cuenta 4 con copresencia total. No es un error de dato — ambos conteos son correctos bajo su propia definición — pero las definiciones nunca se hicieron explícitas entre dictámenes, lo que puede producir números que no coinciden cuando se citan sin aclarar el método.

2. **Asimetría en el tratamiento documental de fronteras**: C5 dedicó una sección propia a la frontera con C10 y fijó una decisión ratificada; C4 registró los mismos casos dispersos en sus tablas de clasificación sin una sección de frontera dedicada ni una cifra consolidada. El resultado (§9) es que la frontera C4/C10, siendo la de mayor volumen (8 casos), es la que menos discusión explícita tiene en el historial.

3. **Corpus fuente de los lotes (1.15.0, 233 obras) ya no coincide con el corpus en HEAD (1.16.1, 232 obras).** Verificado el origen exacto de la diferencia: la obra `stewardpuertorico` (Steward et al., *The People of Puerto Rico*) fue renombrada a `steward` entre 1.15.0 y 1.16.1, con edición menor de `a` y `ap`, y reducción de `f` de `[postplantacion, capitalismo_racial]` a `[postplantacion]`. Es la misma obra, no una obra perdida — pero el cambio no está descrito en la nota de la versión 1.16.1 (que declara «ninguna entrada ni relación se agrega o retira» para ese paso, refiriéndose solo a los cambios de `chande`/`totumo`/etc.). No afecta a C10: `steward` nunca llevó `cuerpo_erotica` ni aparece en ningún lote. Se registra por exhaustividad, no por relevancia clasificatoria.

4. **`quintero` fue señalado como caso prioritario de lectura para la frontera C10 desde el dictamen de C3** (11 de agosto según la fecha de generación de los lotes que cita, antes de que existiera ningún expediente de C10) **y sigue sin leerse.** No es una contradicción de datos, sino un recordatorio de que parte de la evidencia que este expediente organiza ya estaba anunciada, sin resolver, desde varias corrientes atrás.

---

## 20. Tabla de tamaño de muestra

| Indicador | Valor |
|---|---|
| Corpus total | 232 obras |
| Etiqueta heredada `cuerpo_erotica` | 29 (12,5 %) |
| — procesadas | 11 |
| — no procesadas | 18 |
| C10 principal | 7 |
| C10 secundaria (sin ser principal) | 7 |
| Total clasificaciones C10 (ids únicos) | 14 |
| Candidaturas verificadas (C10 principal) | 7 |
| Casos triples | 8 (57 % de las 14 clasificaciones) |
| Fenómenos compatibles con C10 | 4 (1 exclusivo, 3 compartidos) |
| Anclas de fenómeno | 13 (13 únicas, 0 procesadas) |
| Señales léxicas (unión, 2 métodos) | 29 |
| Falsos positivos confirmados por clasificación | 1 (`morenofraginals`) |
| Falsos positivos/ambiguos por lectura, sin clasificación | 5 |
| Universo exploratorio (unión A∪B∪C∪D∪E) | 43 |
| — procesadas (en algún lote) | 15 |
| — no procesadas | 28 |
| Fronteras con evidencia o regla ratificada | 6 (C2, C3, C4, C5, C7, C9) |
| Fronteras abiertas sin ningún caso | 2 (C1, C6) |
| Frontera examinada y declarada sin lectura dirigida | 1 (C8) |
| Casos bloqueados por elegibilidad | 0 |
| Discrepancias de identidad bibliográfica | 0 |

---

## 21. Asuntos no verificables

- **Si la concentración anglófona de las 14 clasificaciones confirmadas (§15, §16) refleja el corpus real de C10 o el orden en que se leyeron los lotes.** No hay forma de saberlo sin procesar las 28 entradas pendientes, muchas de ellas hispanófonas o francófonas.
- **Si los tres casos de la frontera C9/C10 alcanzan para una regla estable** (§8) o si hace falta leer más casos antes de proponer un criterio — en particular `gomezexperiential`, señalado en §11 como un cuarto caso posible que nunca se procesó.
- **Qué definición de «copresencia» debe regir el conteo de una frontera** (§9, §19-1): la estricta que usó C7 (solo pares donde una es principal) o la amplia que usa este expediente (cualquier copresencia, incluidos los triples). Ambas son legítimas y producen números distintos.
- **Si la ausencia total de casos en la frontera C10/C8** (§9) refleja que no existe tal frontera o que, como advierte el propio dictamen de C8, simplemente nunca se leyó con esa pregunta en mente.
- **Si `quintero` debe leerse ya, dado que la regla de la frontera C3/C10 lleva fijada desde antes de este expediente sin que nadie la haya aplicado** (§9, §11, §19-4).
- La hipótesis, sugerida pero no demostrada en §8, de que la diferencia C9/C10 se resuelve preguntando si el cuerpo funciona como objeto de poder o como soporte de transmisión/archivo/ritual.

---

## 22. Preguntas para la Dirección Académica

1. **Denominación y guion.** C10 es la única de las diez corrientes cuya `label`, `label_en` y guion nunca cambiaron desde su primera redacción (§1). ¿Debe leerse esa estabilidad como señal de que el guion está listo para ratificarse, o simplemente como que nadie lo ha vuelto a mirar con el mismo rigor que se aplicó a C1 o C9?

2. **Vía constitutiva.** El guion declara la vía como «migración del corpus heredado (`cuerpo y erótica`, 29 entradas)», pero 3 de los 14 casos ya confirmados llegaron sin esa etiqueta (§4). ¿La fórmula del guion debe matizarse para incluir la reclasificación directa como vía adicional, o el guion ya la contempla implícitamente dentro de «migración»?

3. **Etiqueta heredada y proyección.** De 11 entradas etiquetadas y procesadas, el 100 % tocó C10 (§5). ¿Es razonable, para priorizar la lectura, tratar esa tasa como indicio de que las 18 no procesadas restantes probablemente también toquen C10 — con el riesgo señalado en §5 de que eso convierta una correlación en expectativa?

4. **Candidaturas.** Las 7 candidaturas verificadas se resolvieron todas como C10 principal, nunca como secundaria (§7). ¿Es coherente con el diseño del proceso que una «candidatura» solo pueda confirmar un rol principal, dejando los roles secundarios exclusivamente a la vía de corrección de clasificaciones ya existentes?

5. **Frontera C9/C10.** Con los tres casos ya verificados directamente contra los lotes (§8): ¿bastan para fijar un criterio, o hace falta leer primero casos adicionales como `gomezexperiential` (§11, §21) antes de proponer una regla?

6. **Frontera C10/C7 — método de conteo.** ¿Debe adoptarse la definición estricta que ya usó C7 (2 casos) o la de copresencia total que usa este expediente (4 casos) como estándar para todas las fronteras de C10, incluyendo las que ya se cerraron en dictámenes anteriores?

7. **Frontera C10/C3.** Existe una regla ya ratificada (desde el dictamen de C3) sin ningún caso clasificado que la aplique, y una entrada (`quintero`) señalada como prioritaria desde hace varias corrientes. ¿Debe leerse `quintero` antes de avanzar con el dictamen de C10, dado que la regla ya existe y solo falta aplicarla?

8. **Señales léxicas.** El diccionario controlado de nueve términos capturó 29 entradas, pero dejó fuera 7 que sí llevan la etiqueta heredada (§10). ¿Debe ampliarse el diccionario con los términos que explican esos 7 casos (intimidad, afecto, matrifocalidad, ciudadanía sexuada, feminismo), o esas dimensiones deben seguir evaluándose solo por lectura directa?

9. **Fenómenos.** Los 4 fenómenos vinculados a C10 no comparten ni un solo caso con las 14 clasificaciones ya confirmadas (§12) — son evidencias completamente separadas. ¿Debe la Dirección Académica priorizar que ambas capas se encuentren (leer las anclas por corriente, o clasificar las 14 confirmadas por fenómeno), o pueden avanzar de forma independiente?

10. **Universo.** De 43 entradas en el universo exploratorio, 28 (65 %) nunca se han leído (§13, §14). ¿Cuál debe ser el orden de prioridad de lectura: las 18 con etiqueta heredada sin procesar, las 13 anclas de fenómeno (0 procesadas), o los 7 casos de señal léxica sin etiqueta ni ancla?

11. **Identidades bibliográficas.** No se encontró ninguna discrepancia de identidad en las 14 entradas de C10 (§18). ¿Debe considerarse esto una confirmación de que la capa de C10 está limpia en ese aspecto, dado que la muestra (14) es todavía pequeña frente al universo de 43?

12. **Territorio y lengua.** Las 14 clasificaciones confirmadas son 100 % de fuente anglófona y no incluyen ningún territorio hispanófono o francófono, mientras que el universo no procesado sí los tiene en abundancia (§15, §16). ¿Debe la lectura pendiente priorizar deliberadamente esas entradas para no dejar que el sesgo de orden se convierta en un sesgo de corpus?

13. **Lectura interna, antes de cerrar.** Dado que C10 es la última corriente de esta etapa, ¿qué debe ocurrir primero: cerrar el dictamen de C10 con lo ya verificado aquí, o completar antes la lectura de los casos ya señalados como prioritarios por corrientes anteriores (`quintero` desde C3, `gomezexperiential` como posible cuarto caso de la frontera C9/C10)?

14. **Siembra.** Este expediente no autoriza siembra bibliográfica nueva. Si el dictamen de C10 revela vacíos de corpus (por ejemplo, en el territorio hispanófono o francófono señalado en la pregunta 12), ¿debe la siembra futura de C10 tratarse como una tarea aparte, posterior y explícitamente autorizada, siguiendo el mismo patrón que las demás corrientes?

---

## 23. Límites

Este expediente:

- no ratifica C10;
- no fija principio analítico ni criterio de clasificación;
- no reclasifica ninguna entrada;
- no crea candidaturas;
- no modifica el corpus (`datos-atlas.json`);
- no modifica el catálogo de corrientes ni el de fenómenos;
- no modifica ningún lote (piloto, S01, A01, A02, F01, TP01);
- no corrige los dictámenes de C1 a C9, aunque haya encontrado discrepancias de método al citarlos (§9, §19);
- no ejecuta ningún script clasificatorio;
- no siembra bibliografía nueva;
- no redacta el dictamen académico de C10.

**Por ser C10 la última corriente de esta etapa, declara además expresamente: no inicia ninguna fase posterior del Atlas 2.0 sin instrucción expresa de la Dirección Académica.**
