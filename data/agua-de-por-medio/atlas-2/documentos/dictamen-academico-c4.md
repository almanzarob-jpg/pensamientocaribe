# Dictamen académico de C4

## Postplantación, trabajo y desposesión

Dirección Académica de Pensamiento Caribe · 15 de agosto de 2026
Rama `feat/atlas-2-etapa-1-integrada` · corpus `datos-atlas.json` v1.16.1 (232 obras)

Este dictamen convierte en decisión formal las nueve determinaciones que la Dirección Académica tomó, una por una, sobre la base de `expediente-evidencia-c4.md` y `ficha-decision-c4.md`. No introduce ninguna decisión nueva. Donde el expediente o la ficha dejaron una pregunta abierta que la Dirección Académica no cerró en las nueve decisiones, este dictamen la deja igual de abierta.

---

### 1. Decisión sobre la denominación

**"Postplantación, trabajo y desposesión" queda ratificada** como denominación de C4.

El fundamento verificado de esta ratificación es documental: en las cinco versiones de archivo de `catalogos-atlas-2.json` que existen en el historial de Git (`619ad67`, `99aec5b`, `2343008`, `d3b15a7`, `16fc252`), el registro de C4 —`label`, `label_en`, `provisional`— es idéntico byte a byte. El campo `provisional` se mantuvo en `true` en las cinco versiones; este dictamen no lo cambia.

Esa estabilidad documental no equivale, por sí sola, a un fundamento conceptual completo. La propia Dirección Académica dejó constancia expresa de esto al decidir: la ratificación del nombre no resuelve la relación conceptual entre plantación y postplantación que el dictamen de C2 señaló como pendiente. Esa relación permanece sin resolver después de este dictamen.

---

### 2. Delimitación conceptual de la corriente

Según el guion vigente de Atlas 2.0 (apartado 5, sin modificar por este dictamen), C4 estudia las formas en que el orden del trabajo, la tierra y la raza persiste, se reorganiza o se transforma más allá del régimen esclavista formal —de manera desigual según el territorio— y reaparece en el ingenio, el enclave, la zona franca y el resort.

C4 no se define como "lo que viene después de la abolición". Esa formulación cronológica fue explícitamente descartada por la Dirección Académica en la decisión 2: la clasificación no depende principalmente de una fecha, sino de qué régimen analítico organiza el argumento de la obra. Una obra puede estudiar un período posterior a la abolición y no pertenecer a C4 si su argumento sigue organizado por el régimen esclavista; y puede tocar el período esclavista sin ser C2 si su argumento se organiza por la persistencia o reorganización posterior. C4 corresponde a argumentos organizados alrededor de reorganizaciones del trabajo, la tierra, la raza, la dependencia y la desposesión, y de las persistencias o transformaciones del orden plantacionario.

---

### 3. Frontera con C2 — Trata, esclavización y plantación

Criterio ratificado por la Dirección Académica: **régimen analítico dominante**, no cronología.

C2 corresponde a argumentos organizados alrededor de la trata, la esclavización, el régimen esclavista o la arquitectura plantacionaria misma. C4 corresponde a argumentos organizados alrededor de las reorganizaciones posteriores de ese orden. La fecha de publicación o el período estudiado pueden orientar la lectura, pero no deciden por sí solos —así lo estableció la Dirección Académica de forma expresa, y este dictamen no convierte la abolición en una frontera rígida.

Evidencia de frontera, verificada de nuevo contra los cuatro archivos de lote:

| id | Corriente confirmada | Corriente(s) secundaria(s) | El fundamento del lote registra |
|---|---|---|---|
| `williamscapitalismo` | C2 (`trata_esclavizacion_plantacion`) | C4 | «El libro sitúa la trata y la esclavización antillana en la formación del capitalismo británico y discute la abolición desde la transformación económica» |
| `naveda_esclavoscordoba` | C2 | C4 | «El estudio se organiza alrededor de la esclavitud negra y el sistema azucarero de Córdoba durante los siglos XVII a XIX; la postplantación queda como persistencia secundaria» |
| `hall_slavesocietydanish` | C2 | C3, C4 | «Define la esclavitud como fundamento de toda la sociedad colonial; rebeliones y emancipación son capítulos de esa arquitectura, no el principio ordenador» |
| `morenofraginals` | C2 | C4 | «El objeto es el complejo azucarero esclavista; postplantación describe mejor la persistencia posterior que el núcleo histórico del libro» |
| `workercane` | **C4** | C2 | «La historia de vida de Don Taso organiza una lectura del trabajo cañero y la proletarización; la plantación azucarera es su arquitectura histórica secundaria» |

Cuatro casos tienen C2 como corriente confirmada principal y C4 como secundaria; uno —`workercane`— tiene la relación invertida: C4 principal, C2 secundaria. Los cinco fundamentos aplican una clasificación; ninguno argumenta explícitamente el criterio de distinción entre régimen analítico y cronología. Este dictamen no deriva de los cinco casos una regla adicional a la ya ratificada por la Dirección Académica.

---

### 4. Frontera con C3 — Fugas, cimarronajes y emancipaciones

Criterio ratificado por la Dirección Académica: **principio organizador de la práctica**.

C3 corresponde a argumentos organizados alrededor de la fuga, la autonomía, el cimarronaje, la emancipación o la creación de espacios y prácticas sustraídas al orden dominante. C4 corresponde a argumentos organizados alrededor de cómo sujetos y comunidades rehacen la vida, reorganizan el trabajo, sostienen la reproducción social, habitan, disputan y sobreviven dentro de estructuras postplantacionarias persistentes o transformadas. La frontera no es una oposición cronológica ni una oposición simple de dentro/fuera de la plantación.

El fenómeno `contraplantacion` (familia `fuga`, catálogo `catalogo-fenomenos.json`) es la zona de frontera más explícita entre C3 y C4: su definición lo declara compatible con ambas corrientes. Sus tres anclas —`casimir`, `olwigstjohn`, `cuijla`— se verificaron de nuevo, ahora, contra los cuatro archivos de lote: **ninguna tiene entrada en ningún lote**. No pueden usarse como clasificaciones confirmadas ni como evidencia de un caso decidido.

El único caso confirmado con C3 y C4 simultáneas es `hall_slavesocietydanish` (C2 principal; C3 y C4 ambas secundarias), cuyo fundamento —«rebeliones y emancipación son capítulos de esa arquitectura, no el principio ordenador»— subordina ambas a C2 y no distingue C3 de C4 entre sí. No existe, en el repositorio, ningún caso confirmado que aplique el criterio ahora ratificado a una obra concreta de la frontera C3/C4.

---

### 5. Guion académico ratificado

El guion de C4 se mantiene sin ampliación, conforme a la decisión 4 de la Dirección Académica. Texto vigente, transcrito de `etapa-1-arquitectura-integrada.md`, sección 2, entrada C4, sin modificación:

> La plantación no terminó: se reorganizó. La corriente sigue cómo el orden del trabajo, la tierra y la raza persiste tras la abolición formal, de manera desigual según el territorio, y reaparece en el ingenio, el enclave, la zona franca y el resort. Su tensión: nombrar continuidad puede volver invisible lo que sí cambió, y nombrar ruptura puede absolver al presente. Recorre obras que rastrean esa persistencia sin convertirla en destino.

Categorías que integran el guion: régimen laboral postabolición; enclave y extracción; turismo como economía de la mirada; desposesión urbana y rural.

Trabajo femenino, trabajo reproductivo, migración laboral, proletarización, desastre y privatización aparecen en los fundamentos de varios casos ya clasificados como C4 principal —por ejemplo, `reddock`, `downtownladies` y `floresvillalobos` para trabajo femenino y reproductivo; `bourgoisethnicity` para enclave; `alvarezboro` para desposesión urbana; `klein_battleparadise` para desastre y privatización—. Por decisión expresa de la Dirección Académica, estas dimensiones se registran como expresiones concretas de las categorías ya existentes del guion, no como líneas nuevas y explícitas de él.

---

### 6. Clasificaciones ya existentes

Re-verificadas ahora, directamente contra `piloto-config.json`, `s01-config.json`, `a01-config.json` y `a02-config.json`: **13 obras con C4 como corriente principal**, **16 con C4 como corriente secundaria**, **29 referencias en total, sin duplicados entre las dos listas**. Ninguna de las 29 se reclasifica en este dictamen.

**C4 principal (13)**

| id | Corriente(s) secundaria(s) | El fundamento del lote registra |
|---|---|---|
| `alvarezboro` | — | «Precariedad, segregación étnico-racial, violencia urbana y marginación sociopolítica estructural en una periferia afrocaribeña de Cartagena» |
| `bestlevitt` | C7 | «La economía de plantación se teoriza como estructura persistente de dependencia» |
| `bourgoisethnicity` | — | «Una empresa bananera transnacional organiza la división étnica del trabajo y reproduce jerarquías raciales y de clase» |
| `downtownladies` | C5, C10 | «El trabajo informal transnacional y la autonomía económica de comerciantes» |
| `figueroa` | C8 | «Tradicionalismo cultural, poderes locales, violencia contra el campesinado y bloqueo de la modernización agraria» |
| `floresvillalobos` | C5, C10 | «El trabajo reproductivo de mujeres migrantes sostiene la infraestructura imperial y la fuerza laboral» |
| `klein_battleparadise` | C6, C7 | «El capitalismo del desastre, la privatización y la desposesión post-María» |
| `peasantscapital` | C7 | «Cómo el campesinado dominicano se articula con capital, mercado bananero» |
| `politicallife` | C7, C9 | «Las lógicas postplantación articulan trabajo, ciudadanía y violencia estatal» |
| `reddock` | C10 | «Trabajo, empleo y participación política de las mujeres constituyen la arquitectura histórica» |
| `shellerconsuming` | C5, C8 | «La explotación colonial persiste en consumo, turismo y conocimiento» |
| `steward` | — | «Subculturas puertorriqueñas configuradas por entornos y regímenes económicos locales» |
| `workercane` | C2 | «La historia de vida de Don Taso organiza una lectura del trabajo cañero y la proletarización» |

**C4 secundaria (16)**

| id | Corriente principal | El fundamento del lote registra |
|---|---|---|
| `benitez` | C8 | «*La isla que se repite* y *The Repeating Island*, obra original y su traducción» |
| `curtispleasures` | C10 | «Sexualidad, coerción, consentimiento y placer estructuran la etnografía» |
| `esquiva` | C7 | «La eficacia territorial y política de la Ley 70 en el Caribe» |
| `hall_slavesocietydanish` | C2 | «La esclavitud como fundamento de toda la sociedad colonial» |
| `harpellecostarica` | C5 | «La migración antillana y su asentamiento en Costa Rica» |
| `hintzen` | C7 | «La supervivencia del régimen, el Estado y la movilización racial» |
| `kempadoo` | C10 | «Género, raza y trabajo sexual desde cuerpos y relaciones eróticas racializadas» |
| `londonoargonauts` | C5 | «La navegación, las canoas, los intercambios y la costa como red de puertos» |
| `morenofraginals` | C2 | «El complejo azucarero esclavista; postplantación como persistencia posterior» |
| `naveda_esclavoscordoba` | C2 | «La esclavitud negra y el sistema azucarero de Córdoba» |
| `nixon_resistingparadise` | C10 | «La producción cultural y sexual del paraíso» |
| `ortiz` | C8 | «Transculturación como concepto y como objeto de la obra» |
| `schuller_killingkindness` | C7 | «El poder de ONG, donantes y Estado organiza la crítica del régimen de ayuda» |
| `shepherdmaharani` | C5 | «La travesía y el traslado de trabajo contratado desde India al Caribe» |
| `stoutafterlove` | C10 | «La intimidad queer, el deseo y las economías eróticas» |
| `williamscapitalismo` | C2 | «La trata y la esclavización antillana en la formación del capitalismo británico» |

---

### 7. Universo pendiente de lectura

El universo pendiente de lectura de C4 queda fijado en **33 entradas**, por decisión metodológica expresa de la Dirección Académica: para esta etapa, **una entrada que ya pasó por un lote se considera atendida**, aunque no tenga un rol C4 confirmado.

Esta cifra no se presenta aquí como un resultado matemático inevitable. El expediente de evidencia había mostrado una ambigüedad real: bajo una definición más estricta de "ya atendida" —solo las 29 entradas con rol C4 confirmado— el universo pendiente recalculado da 35, no 33. La diferencia exacta entre ambas cifras son dos identificadores: `mintz` y `handlerlangebarbados`. La Dirección Académica, al conocer esta ambigüedad, decidió expresamente el criterio operativo (haber pasado por lote, con cualquier corriente o ninguna, cuenta como atendido), y con ese criterio la cifra queda fijada en 33.

Por esa decisión:

- `mintz` no integra las 33. Verificado de nuevo en `piloto-config.json`: `decision_aprobada: "mantener_pendiente"`, con sus dos componentes (`mintz-caribbean-transformations`, `mintz-sweetness-and-power`) en `"corriente": null` y `"estado_corriente": "pendiente_revision_con_texto"`. Tuvo una candidatura histórica hacia C4 en la versión `619ad67` del catálogo, hoy superada por esta división. Que quede fuera de las 33 no equivale a afirmar que su situación académica esté resuelta.
- `handlerlangebarbados` no integra las 33. Conserva la etiqueta heredada `postplantacion`, pero ya fue clasificado por la Dirección Académica: `corriente_confirmada: "trata_esclavizacion_plantacion"` (C2), `corrientes_secundarias: ["memorias_espiritualidades_archivos_vivos"]` (C9). No se reabre esa clasificación por conservar la etiqueta.

---

### 8. Casos que deben leerse primero contra C4

`perezmorales`, `sherwood`, `exceptviolence` y `jaffeconcrete` quedan registrados como **casos priorizados para lectura contra C4**, por decisión de la Dirección Académica. Estos cuatro casos, junto con `esquiva` —ya resuelta dentro de las 29 confirmadas—, quedaron sin candidatura derivable en `decisiones-pendientes.md` cuando `capitalismo_racial` y `violencias` se convirtieron en marcas transversales en vez de corrientes.

**Prioridad de lectura no equivale a clasificación.** Ninguno de los cuatro es, por efecto de este dictamen, una candidatura, un integrante de C4 ni una clasificación provisional. El campo `ap` de cada uno registra una descripción breve del argumento, no la lectura del texto completo:

- `perezmorales`: el campo `ap` registra "el puerto como zona de fuga, contrabando y violencia imperial, no solo de comercio".
- `sherwood`: el campo `ap` registra "la trata sobrevive a su abolición formal; el capital racializado como continuidad".
- `exceptviolence`: el campo `ap` registra "la violencia jamaicana funciona como forma de ciudadanía producida por la historia transnacional de la isla".
- `jaffeconcrete`: el campo `ap` registra "la contaminación urbana leída como política de la diferencia racial y de clase en dos ciudades caribeñas".

---

### 9. Fenómenos compatibles

`catalogo-fenomenos.json` registra siete fenómenos compatibles con C4: `contraplantacion`, `deuda_como_tecnologia_colonial`, `plantacion_y_secuela`, `indentura_y_trabajo_importado`, `enclave_y_extractivismo`, `segmentacion_racial_del_trabajo`, `turismo_y_economia_de_la_mirada` — verificado de nuevo contra el catálogo. Para comparación, C1 tiene 5, C2 tiene 3, C3 tiene 4.

Por decisión expresa de la Dirección Académica, **este número no tiene ningún peso decisorio**. No se deriva de él ninguna conclusión sobre la centralidad, la amplitud o la legitimidad de C4 frente a las demás corrientes, ni se usa para justificar, ampliar o clasificar. El catálogo de fenómenos se declara a sí mismo, en su estado general, "borrador para dictamen académico; no se ha aplicado al corpus publicado".

---

### 10. Siembra

**No se autoriza siembra dirigida en esta etapa.** La justificación metodológica, decidida por la Dirección Académica, es que primero debe agotarse el universo interno ya disponible.

Como ejemplos relevantes de material todavía sin lectura específica para C4: `hoeftesuriname`, `allen_dikimanera` y `jaffeconcrete` —los tres con relación al Caribe neerlandófono y presentes en el universo pendiente definido en el apartado 7—. Este dictamen no declara un vacío neerlandófono ni un vacío historiográfico externo: la evidencia disponible muestra material identificado y sin leer, no una ausencia comprobada.

---

### 11. Decisiones operativas resultantes

Queda autorizado, únicamente, lo siguiente:

- Mantener la denominación "Postplantación, trabajo y desposesión".
- Mantener el guion actual, sin ampliación.
- Aplicar el criterio de régimen analítico dominante en la frontera C2/C4.
- Aplicar el principio organizador de la práctica en la frontera C3/C4.
- Trabajar sobre un universo pendiente de 33 entradas.
- Leer primero contra C4 los cuatro casos deliberados (`perezmorales`, `sherwood`, `exceptviolence`, `jaffeconcrete`).
- No usar el número de fenómenos compatibles como criterio de ninguna decisión.
- No sembrar todavía.

No se autoriza ninguna acción adicional a estas ocho.

---

### 12. Límites del dictamen

Este dictamen:

- no clasifica las 33 entradas del universo pendiente;
- no convierte a `perezmorales`, `sherwood`, `exceptviolence` ni `jaffeconcrete` en candidaturas;
- no autoriza siembra;
- no reabre C1;
- no modifica `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` ni ningún archivo de lote;
- no avanza a C5.
