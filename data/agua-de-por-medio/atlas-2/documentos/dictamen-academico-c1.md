# Dictamen académico de C1

**Mundos indígenas, invasiones y persistencias**

Dirección académica de Pensamiento Caribe · 12 de agosto de 2026
Rama `feat/atlas-2-etapa-1-integrada` · corpus `datos-atlas.json` v1.16.1
Catálogo vigente al momento del dictamen: `catalogos-atlas-2.json`, esquema `2.0-lotes.2`

Este documento registra un dictamen ya emitido. No modifica el catálogo, los lotes, el corpus ni la interfaz. Ninguna obra queda clasificada aquí.

---

## 1. La denominación aprobada

| | |
|---|---|
| **Denominación conceptual (ES)** | **Mundos indígenas, invasiones y persistencias** |
| **Denominación conceptual (EN)** | **Indigenous worlds, invasions and persistence** |
| **Clave técnica** | `invasiones_mundos_indigenas` — **no se modifica todavía** |
| **Estado** | Aprobada como denominación conceptual; pendiente de incorporación al catálogo |

Fundamento del dictamen, en sus propios términos: la denominación coloca los mundos indígenas antes que la acción colonial; evita construir la corriente únicamente desde los actos del invasor; incorpora la persistencia como dimensión constitutiva; evita la repetición entre el `despojos` de C1 y la `desposesión` de C4; y mantiene el despojo dentro del guion y de los fenómenos asociados, aunque no aparezca en el título.

**Denominaciones anteriores, para trazabilidad.** Ninguna se borra del historial.

| Vigencia | Denominación ES | Origen |
|---|---|---|
| 7 a 10 de agosto | Invasiones, colonialidades y mundos indígenas | Catálogo inicial |
| 10 de agosto | Invasiones y mundos indígenas | Retiro de `colonialidades`, ya constituida como marca |
| 11 de agosto | Invasiones, despojos y mundos indígenas | Plan operativo del Atlas 2.0 |
| 12 de agosto | **Mundos indígenas, invasiones y persistencias** | **Este dictamen** |

La clave técnica conserva la redacción del 7 de agosto porque está escrita en los lotes cerrados. Esa divergencia entre clave y nombre es deliberada y queda declarada; ninguna interfaz deriva texto visible de la clave.

---

## 2. El guion aprobado

Aprobado conceptualmente. **No debe incorporarse todavía al catálogo ni a los lotes.**

> ¿Cómo han sido invadidos y despojados los mundos indígenas del Caribe, y mediante qué prácticas han persistido, reaparecido y disputado el presente? La corriente sigue la relación entre ocupación territorial, producción colonial del archivo y continuidad indígena, sin reducir lo indígena a un pasado anterior a 1492 ni a un residuo cultural. Reúne obras cuyo argumento central aborda mundos indígenas, invasiones, territorialidades, soberanías y formas contemporáneas de persistencia.

---

## 3. Vía de constitución

**Formulación aprobada:** C1 se constituye mediante **relectura dirigida del corpus heredado y siembra bibliográfica complementaria**.

Queda corregida la inferencia anterior según la cual C1 debía constituirse exclusivamente por siembra. La ausencia de correspondencia entre C1 y las diez etiquetas heredadas demuestra únicamente que C1 no produce candidaturas automáticas por la regla de migración. No demuestra que el corpus carezca de obras pertinentes.

Consecuencias operativas:

- Cero candidaturas automáticas derivadas de las etiquetas anteriores.
- Siete anclas internas de revisión prioritaria.
- Diecinueve entradas que conforman el universo de exploración.
- Ninguna asignación automática, en ningún caso.
- Lectura humana obligatoria antes de confirmar corriente principal o secundaria.
- La siembra externa cubre vacíos; no sustituye la lectura del corpus existente.

### 3.1 Evidencia de las cero candidaturas automáticas

El corpus heredado clasifica cada obra mediante el campo `f`, que toma valores de un catálogo cerrado de diez etiquetas. Lista completa, leída de `datos-atlas.json` v1.16.1, clave `fenomenos`:

```
colonialidad · postplantacion · capitalismo_racial · catastrofes · soberanias
violencias · memoria · cimarronaje · creolizacion · cuerpo_erotica
```

Ninguna de las diez nombra la invasión, el despojo territorial, los mundos indígenas ni la persistencia indígena. La regla de migración deriva una candidatura preliminar únicamente cuando una etiqueta anterior conduce sin ambigüedad a una corriente nueva. Como ninguna etiqueta conduce a C1, **el número de candidaturas derivables automáticamente para C1 es cero**, sobre las 232 entradas del corpus.

Verificación adicional en los lotes ya dictaminados: la clave `invasiones_mundos_indigenas` aparece una vez en `piloto-config.json`, una en `piloto-generado.json`, una en `s01-config.json`, una en `s01-generado.json`, ninguna en `a01`, y una en `a02-config.json` y `a02-generado.json`. Esas apariciones corresponden al catálogo de corrientes que cada lote transcribe, no a obras asignadas. **Ninguna obra de P00, S01, A01 o A02 está clasificada en C1.**

---

## 4. Descubrimiento, estado y acción: tres registros que no deben confundirse

La confusión que este apartado previene es la que convertiría una búsqueda de texto en una clasificación. Para evitarla hay que separar tres cosas de naturaleza distinta: cómo se encuentra una obra, en qué estado editorial está, y qué hace una persona con ella. Solo el segundo registro es un estado del flujo.

### 4.1 Categorías de descubrimiento

**No son estados del flujo editorial.** Describen cómo llegó una obra a la mesa de trabajo, no en qué punto del proceso se encuentra. Una obra puede ser señal y ancla a la vez, o ninguna de las dos y estar sin embargo confirmada.

| Categoría | Qué es | Qué la produce | Qué autoriza | Qué no autoriza |
|---|---|---|---|---|
| **Señal** | Coincidencia léxica en título, autoría, campo `ap` o campo `tr` | Una búsqueda con patrón declarado | Incorporar la obra al universo de exploración | Ninguna afirmación sobre el argumento de la obra |
| **Ancla** | Asociación editorial previa entre la obra y un fenómeno, con fundamento escrito | Trabajo editorial anterior, verificado contra el corpus | Prioridad de lectura | No confirma fenómeno ni corriente |

### 4.2 Estado editorial formal

Es el único registro que constituye un estado del flujo. Sus valores y sus reglas están declarados en `catalogos-atlas-2.json`, campo `reglas_estado`.

| Estado | Qué es | Qué exige |
|---|---|---|
| **Candidatura preliminar** | Hipótesis registrada, nunca confirmación | Una sola corriente candidata; prohíbe declarar corriente confirmada |
| **Confirmada** | Clasificación sostenida por una persona | Responsable, fecha y fundamento escrito; procedencia verificada |
| **Revisada** | Clasificación confirmada sometida a una segunda lectura documentada | Todo lo anterior, más el registro de la segunda lectura |

El catálogo declara además un cuarto valor, `pendiente_revision_con_texto`, para las entradas cuya clasificación no puede resolverse sin leer la obra completa. Se menciona por exactitud documental; no interviene en la ruta que este dictamen describe.

### 4.3 Acción editorial

**Proponer una clasificación** es una acción que una persona realiza después de leer. Puede crear una candidatura preliminar o modificar una existente. **No constituye por sí misma un estado adicional**, y por eso no aparece en la tabla de 4.2.

### 4.4 Dónde queda cada obra de este dictamen

Las siete anclas son ancla en el registro de descubrimiento. Las doce entradas restantes del universo son señal. **Ninguna de las diecinueve tiene estado editorial formal respecto de C1**: ninguna es candidatura preliminar, ninguna está confirmada y ninguna está revisada. Adquirirán estado únicamente cuando alguien lea y proponga.

---

## 5. Las siete anclas de revisión prioritaria

Provienen del catálogo `catalogo-fenomenos.json`, que declara dos fenómenos de la familia `indigena` — "Mundos indígenas" — y verifica sus anclas contra el corpus. Los dos fenómenos declaran `invasiones_mundos_indigenas` entre sus corrientes compatibles.

**Fenómeno `mundos_indigenas_precoloniales`** · *Mundos indígenas precoloniales*
Glosa: «Poblamiento, navegación y sociedad archipiélica antes de 1492, contados como historia y no como prehistoria estática.»
Criterio: la obra trabaja el periodo anterior a la invasión con evidencia arqueológica o etnohistórica.
No confundir con: `indigeneidad_en_disputa`.
Corrientes compatibles: `invasiones_mundos_indigenas`, `rutas_diasporas_territorios_acuosos`.

| id | Obra | Año | Etiquetas heredadas | Fundamento registrado en el corpus (campo `ap`) |
|---|---|---|---|---|
| `keeganhofman` | *The Caribbean before Columbus* — William F. Keegan y Corinne L. Hofman | 2017 | memoria, colonialidad | Siete mil años de poblamiento archipiélico antes de 1492, contados como historia de navegación y no como prehistoria estática |
| `atkinsonearliest` | *The Earliest Inhabitants: The Dynamics of the Jamaican Taíno* — Lesley-Gail Atkinson (ed.) | 2006 | memoria, colonialidad | Arqueología taína hecha desde Jamaica, contra el lugar común de que la isla quedó vacía de indígenas antes de la llegada africana |
| `londonoargonauts` | *The Argonauts of West Caribbean: Tradition of Canoes of Taganga* — Wilhelm Londoño Díaz | 2025 | memoria, creolización | La canoa de Taganga como tecnología y tradición de navegación indígena que antecede y desborda al Estado-nación |

**Fenómeno `indigeneidad_en_disputa`** · *Indigeneidad en disputa*
Glosa: «La identidad indígena como reclamo contemporáneo, y la tensión entre soberanía indígena y fuga cimarrona, que no son la misma relación con la tierra.»
Criterio: la obra trabaja la disputa por el reconocimiento en el presente o su historia política.
No confundir con: `mundos_indigenas_precoloniales`.
Corrientes compatibles: `invasiones_mundos_indigenas`, `soberanias_fronteras_ocupaciones`.

| id | Obra | Año | Etiquetas heredadas | Fundamento registrado en el corpus (campo `ap`) |
|---|---|---|---|---|
| `whiteheadtiger` | *Lords of the Tiger Spirit: A History of the Caribs in Colonial Venezuela and Guyana, 1498–1820* — Neil L. Whitehead | 1988 | colonialidad, violencias, memoria | Tres siglos de historia caribe en el corredor Orinoco–Trinidad–Guayana, reconstruidos como estrategia política indígena y no como telón de fondo de la conquista |
| `felicianosantos` | *A Contested Caribbean Indigeneity: Language, Social Practice, and Native Puerto Rican Identity* — Sherina Feliciano-Santos | 2021 | memoria, colonialidad | Cómo se disputa hoy, en el habla cotidiana y no solo en el archivo, la identidad taína en Puerto Rico |
| `andersonblackindigenous` | *Black and Indigenous: Garifuna Activism and Consumer Culture in Honduras* — Mark Anderson | 2009 | memoria, soberanías | El activismo garífuna hondureño obligado a elegir entre reconocerse indígena o negro para acceder a derechos legales |
| `rifkinfictions` | *Fictions of Land and Flesh: Blackness, Indigeneity, Speculation* — Mark Rifkin | 2019 | soberanías, cimarronaje, memoria | Contra la equivalencia entre negritud e indigeneidad: la relación con la tierra que reclama la soberanía indígena y la que abre la fuga cimarrona no son la misma |

Ninguna de las siete queda clasificada. Pasan a lista prioritaria de lectura.

### 5.1 Qué está verificado en las anclas y qué no

De las siete anclas está verificado que:

- Existen en el corpus, con el identificador indicado.
- Están asociadas a un fenómeno en `catalogo-fenomenos.json`.
- Tienen un fundamento editorial escrito en el campo `ap` del propio corpus.
- Los dos fenómenos que las agrupan declaran compatibilidad con C1.

**Lo que no está verificado.** `catalogo-fenomenos.json` declara su propio estado como *«borrador para dictamen académico; no se ha aplicado al corpus publicado»*, y sus 26 asignaciones de prueba (`lotes/f01-muestra.json`) están todas en estado `propuesto`, ninguna en `confirmado`. En consecuencia:

- Está verificada **la existencia documental** de las siete anclas.
- **No está ratificada** todavía la corrección académica definitiva de cada asignación de fenómeno.
- Su condición de ancla autoriza **prioridad de lectura**; no confirma fenómeno ni corriente.
- El futuro dictamen del catálogo de fenómenos podrá **confirmar, corregir o retirar** cualquiera de esas asociaciones.

Esta precisión no reduce el valor del hallazgo. Delimita su autoridad: las anclas prueban que alguien ya leyó estas obras y escribió por qué pertenecen a un fenómeno indígena, lo cual es mucho más que una coincidencia léxica y bastante menos que un dictamen.

---

## 6. El universo de exploración: diecinueve entradas

### 6.1 Regla de conteo, declarada

El universo se obtuvo aplicando a los campos `t` (título), `a` (autoría), `ap` (aporte) y `tr` de las 232 entradas un patrón que busca **etnónimos y marcadores de indigeneidad o de periodo precolonial**: indígena / indigeneity, precolonial, prehistoria, taíno/taína, arawak, kalinago, amerindio, aborigen, garífuna, black carib, wayuu, kuna, miskito, etnogénesis, 1492, Columbus, Colón, nativo / native.

El patrón **excluye deliberadamente el topónimo «Caribe» / «Caribbean»**, que nombra el dominio entero del atlas y aparece en 74 entradas sin discriminar nada.

**Corrección de una cifra dada en el expediente previo.** El expediente de dictamen informó diecinueve entradas. El número coincide, pero **el conjunto no es el mismo**: aquel patrón omitía `keeganhofman` —una de las siete anclas, porque *The Caribbean before Columbus* no contiene la palabra «indígena»— y admitía tres falsos positivos (`sherwood`, `lindskoog`, `benitez`), que entraban por coincidencias del tipo «nativ» u «originari» ajenas a lo indígena. El universo que aquí se registra corrige ambos defectos: contiene las siete anclas y suma `goffedarklab` y `schwartz_seaofstorms`, que el patrón anterior no veía. La coincidencia numérica es casual y queda advertida para que nadie la lea como confirmación.

### 6.2 Las siete anclas (categoría de descubrimiento: ancla)

`keeganhofman` · `atkinsonearliest` · `londonoargonauts` · `whiteheadtiger` · `felicianosantos` · `andersonblackindigenous` · `rifkinfictions`

Documentadas en el apartado 5.

### 6.3 Las doce entradas restantes (categoría de descubrimiento: señal, sin fundamento editorial)

| id | Obra | Año | Etiquetas heredadas | Disparadores de la señal |
|---|---|---|---|---|
| `womenancestors` | *Women and the Ancestors: Black Carib Kinship and Ritual* | 1983 | cuerpo y erótica, memoria | black carib, garífuna |
| `gonzalezsojourners` | *Sojourners of the Caribbean: Ethnogenesis and Ethnohistory of the Garifuna* | 1988 | cimarronaje, memoria | etnogénesis, garífuna |
| `bourgoisethnicity` | *Ethnicity at Work: Divided Labor on a Central American Banana Plantation* | 1989 | capitalismo racial, violencias | indígena |
| `pinedashipwrecked` | *Shipwrecked Identities: Navigating Race on Nicaragua's Mosquito Coast* | 2006 | colonialidad, creolización | miskito |
| `afrocentroam` | *Afro Central Americans in New York City: Garifuna Tales of Transnational Movements* | 2006 | soberanías, capitalismo racial | garífuna |
| `shellerconsuming` | *Consuming the Caribbean: From Arawaks to Zombies* | 2011 | postplantación, capitalismo racial | arawak |
| `schwartz_seaofstorms` | *Sea of Storms: A History of Hurricanes in the Greater Caribbean from Columbus to Katrina* | 2015 | catástrofes, colonialidad | Columbus |
| `cosgrovegarifuna` | *Surviving the Americas: Garifuna Persistence from Nicaragua to New York City* | 2021 | memoria, soberanías, capitalismo racial | garífuna |
| `goffedarklab` | *Dark Laboratory: On Columbus, the Caribbean, and the Origins of the Climate Crisis* | 2025 | catástrofes, capitalismo racial | 1492, Columbus, prehistoria |
| `mintzarea` | *El Caribe como área sociocultural* | 1966 | postplantación, colonialidad | indígena |
| `pricemars` | *Ainsi parla l'oncle* | 1928 | memoria, colonialidad | indigène |
| `wynterblackmetamorphosis` | *Black Metamorphosis: New Natives in a New World* | c. 1970, manuscrito inédito | creolización, capitalismo racial, memoria | new natives, indigen |

Estas doce **no son candidaturas**. Son entradas cuyo texto contiene una señal que justifica mirarlas, y nada más. Varias podrían resultar ajenas a C1 tras la lectura: `schwartz_seaofstorms` entra por una sola mención de Columbus en un título sobre huracanes, y `bourgoisethnicity` por una mención de lo indígena dentro de un estudio sobre trabajo bananero. La señal no argumenta.

---

## 7. Regla de clasificación ratificada

**El reparto numérico no clasifica. El argumento central de la obra sí.**

La regla impide mover obras para equilibrar artificialmente el número de entradas entre corrientes. **No impide reclasificar una obra cuando su argumento central corresponde a C1.** Son dos cosas distintas y confundirlas fue el origen de la inferencia corregida en el apartado 3.

Si la lectura confirma que el argumento central de una obra —como podría ocurrir con *Lords of the Tiger Spirit*— es la estrategia política caribe, los mundos indígenas, la territorialidad o su persistencia histórica, esa obra debe clasificarse en C1 aunque proceda del corpus heredado. La comprobación se hace obra por obra.

---

## 8. Relación con otras corrientes

C1 se distingue de C2 **por el argumento central, no por una sucesión histórica**:

- **C1**: mundos indígenas, invasión, despojo territorial, soberanía y persistencias.
- **C2**: trata, conversión racializada de personas en propiedad, esclavización y régimen plantacionario.

Ambos procesos se superponen histórica y territorialmente. No hay primero uno y después el otro.

C1 puede articularse además con:

| Corriente | Cuándo |
|---|---|
| C5 · Rutas, diásporas y territorios acuosos | Cuando existen circulaciones o territorialidades acuosas indígenas |
| C7 · Soberanías, fronteras y ocupaciones | Cuando la obra estudia soberanía, frontera u ocupación |
| C9 · Archivos vivos | Cuando aborda transmisión, archivo comunitario o continuidad de saberes |
| C10 · Cuerpos, parentescos y eróticas | Cuando el parentesco o el cuerpo sostienen formas indígenas de persistencia |

Cuando una obra articule dos recorridos, debe declararse una corriente principal y, si la evidencia lo justifica, una secundaria.

---

## 9. Pendiente independiente: la contradicción documental de C9

**No se resuelve en este dictamen.** Se registra con la evidencia cronológica exacta que se exigió, y queda para el dictamen específico de C9.

Las dos formulaciones en conflicto:

- `Archivos vivos, espiritualidades y transmisión`
- `Archivos vivos, espiritualidades y saberes transmitidos`

### 9.1 Evidencia cronológica

Todas las horas en UTC. Los commits del repositorio están fechados en `-05:00`; se convierten para poder compararlos con los metadatos internos del documento, que están en UTC.

| # | Fuente | Identificador | Fecha y hora (UTC) | Denominación de C9 que contiene |
|---|---|---|---|---|
| 1 | `catalogos-atlas-2.json` | commit `619ad67` | 2026-08-08 04:52:33 | Memorias, espiritualidades y archivos vivos |
| 2 | `catalogos-atlas-2.json` | commit `99aec5b` | 2026-08-08 05:40:29 | Memorias, espiritualidades y archivos vivos |
| 3 | `catalogos-atlas-2.json` | commit `2343008` | 2026-08-08 11:44:42 | Memorias, espiritualidades y archivos vivos |
| 4 | `catalogos-atlas-2.json` | commit `d3b15a7` | 2026-08-10 15:16:52 | Espiritualidades, rituales y archivos vivos |
| 5 | `Plan_operativo_Atlas_2_Claude_7_etapas.docx` | metadatos internos `dcterms:created` y `dcterms:modified`, revisión 2 | 2026-08-11 10:00:00 | **Archivos vivos, espiritualidades y transmisión** |
| 6 | `catalogos-atlas-2.json` | commit `16fc252` | 2026-08-11 16:00:12 | **Archivos vivos, espiritualidades y saberes transmitidos** |

Ruta exacta del documento del punto 5: `Pagina/ATLAS /Plan_operativo_Atlas_2_Claude_7_etapas.docx`. Sus metadatos internos declaran `dc:creator` = Grupo de Investigación Pensamiento Caribe y `cp:lastModifiedBy` = Roberto Rafael Almanza Hernandez.

### 9.2 Relación de precedencia

1. La formulación del plan operativo (punto 5) **precede en seis horas y doce segundos** a la formulación del catálogo vigente (punto 6). Ambas son del 11 de agosto.
2. La formulación del plan operativo **no aparece en ningún commit** de `catalogos-atlas-2.json`. Los cinco commits que tocan ese archivo contienen únicamente tres redacciones, y ninguna es «Archivos vivos, espiritualidades y transmisión».
3. La formulación del catálogo vigente aparece por primera y única vez en `16fc252`, sin haber pasado por la del plan.

### 9.3 Qué queda sin resolver

La precedencia temporal está establecida y no admite discusión. Lo que no está establecido es **cuál de las dos fuentes tiene autoridad sobre la denominación**, y ese es exactamente el objeto del dictamen de C9:

- Si prevalece el documento de la dirección académica, la denominación es la del plan operativo, y el catálogo la contradice desde hace un día.
- Si prevalece el estado efectivo del repositorio, la denominación es la del catálogo, y el plan quedó superado seis horas después de escribirse.

El plan operativo enuncia una regla de prevalencia —«Repositorio y datos efectivamente publicados: prevalecen sobre cifras históricas copiadas en documentos»— que **no resuelve este caso**, porque está formulada para cifras y no para denominaciones conceptuales.

Hasta el dictamen específico de C9, **ambas son formulaciones provisionales en conflicto** y ninguna constituye por sí sola la denominación definitiva.

---

## 10. Las siete decisiones de este dictamen

| # | Decisión |
|---|---|
| 1 | **Vía de constitución.** C1 se constituye mediante relectura dirigida del corpus heredado y siembra bibliográfica complementaria. Queda corregida la inferencia de que debía constituirse solo por siembra |
| 2 | **Regla de clasificación.** Se ratifica: el reparto numérico no clasifica; el argumento central de la obra sí. La regla no impide reclasificar una obra heredada cuyo argumento corresponda a C1 |
| 3 | **Denominación.** Se aprueba «Mundos indígenas, invasiones y persistencias» / «Indigenous worlds, invasions and persistence». La clave técnica no se modifica todavía |
| 4 | **Guion.** Se aprueba conceptualmente el texto del apartado 2, sin incorporarlo aún al catálogo ni a los lotes |
| 5 | **Relación con otras corrientes.** C1 se distingue de C2 por argumento central y no por sucesión histórica; puede articularse con C5, C7, C9 y C10 declarando principal y secundaria |
| 6 | **Anclas y universo.** Las siete anclas pasan a lista prioritaria de lectura; las diecinueve entradas conforman un universo de exploración. Ninguna queda clasificada ni convertida en candidatura |
| 7 | **C9.** La contradicción documental queda registrada con evidencia cronológica exacta y sin resolver, como pendiente independiente |

---

## 11. Estado del repositorio al cierre

No se modificó `catalogos-atlas-2.json`. No se modificaron los lotes. No se modificó el corpus heredado. No se modificó la interfaz. No se modificó el documento arquitectónico ya confirmado. No se ejecutó ningún script. Ninguna obra fue clasificada. No se hizo commit. No se avanzó a C2.

La siguiente tarea es el dictamen de C2.
