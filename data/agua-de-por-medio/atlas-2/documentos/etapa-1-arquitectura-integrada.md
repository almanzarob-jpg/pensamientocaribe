# Etapa 1 · Arquitectura conceptual, editorial, visual y técnica

Rama `feat/atlas-2-etapa-1-integrada` · punto de partida `1871125` · documento único autorizado
Versión 3 · 12 de agosto de 2026

**Estado de aprobación.** La dirección académica de Pensamiento Caribe aprobó esta arquitectura en su versión 2 e incorporó cuatro precisiones vinculantes, recogidas aquí: la relación entre C1 y C2 como distinción analítica y no secuencial (§2, C1); la relación entre C2 y C4 por régimen analítico dominante y no por frontera cronológica (§2, C2 y C4); el alcance ampliado de C9 más allá de oralidad, rito y espiritualidad (§2, C9); y los solapamientos reales de C10 (§2, C10). **La aprobación no ratifica todavía las diez denominaciones ni los diez guiones de la sección 2**, cuyo dictamen es la tarea siguiente.

Este documento no programa nada y no modifica ningún otro archivo del repositorio. Es una **propuesta para dictamen de la dirección académica de Pensamiento Caribe**, no una descripción del estado actual. Donde describe lo existente lo dice; donde propone algo nuevo lo dice también, y con esa marca: **[VERIFICADO]** para lo que puede comprobarse hoy en el repositorio, **[PROPUESTA]** para lo que este documento formula por primera vez y necesita aprobación.

---

## 0. Dos correcciones a la versión anterior de este documento

Antes de entrar en materia conviene enmendar dos afirmaciones de la primera versión, porque una de ellas era falsa y la otra estaba mal medida.

**Primera enmienda. La interfaz pública ya distingue cruce lingüístico de fricción epistémica.** La versión anterior afirmó que `con-el-agua-de-por-medio.html` "sigue confundiendo diferencia de lengua con fricción epistémica argumentada". Es incorrecto. La leyenda del mapa rotula ese marcador como `cruce lingüístico` / `linguistic crossing` (claves `lgFricc` en ambos idiomas), y la tarjeta del marco conceptual lo explica sin ambigüedad: "La cruz del mapa señala únicamente un cruce lingüístico derivado provisionalmente del campo heredado `tr`; una fricción epistémica solo se incorporará cuando la relación la declare con argumento y evidencia". La reforma conceptual del vocabulario ya llegó a la interfaz pública. Lo que sigue pendiente es el dato, no el nombre.

**Segunda enmienda. La discrepancia 232/233 no era un redondeo.** La versión anterior la despachó como "discrepancia menor no resuelta". Son dos cifras enteras que designan estados distintos del corpus en fechas distintas, y la sección 3 las separa por completo.

---

## 1. Condición de las diez corrientes

### 1.1 Qué está confirmado y qué no

| Elemento | Estado |
|---|---|
| Que las corrientes sean **diez** | **Confirmado** por la dirección académica |
| Las **denominaciones** actuales (ES y EN) de C1–C10 | **Propuestas vigentes**, no ratificadas |
| Su presencia en `catalogos-atlas-2.json` | Es registro operativo, **no equivale a ratificación académica** |
| El campo `provisional: true` en las diez | Se mantiene **hasta aprobación académica expresa** |
| Los guiones conceptuales de la sección 2 | **Propuesta nueva**, presentada para dictamen, no aprobada |

Ninguna denominación de este documento debe leerse como definitiva. El hecho de que una etiqueta lleve semanas escrita en el repositorio, e incluso que haya sobrevivido a dos rondas de renombramiento, dice que es la redacción vigente; no dice que haya sido ratificada. La distinción importa porque el propio catálogo registra que las etiquetas de C1 y C9 ya cambiaron dos veces en dos días, lo que muestra que la redacción está viva y no cerrada.

### 1.2 Las diez corrientes, denominación vigente

**[VERIFICADO]** Fuente: `data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json`, esquema `2.0-lotes.2`, fecha `2026-08-10`, rama `feat/atlas-2-etapa-1-integrada`.

| # | Clave interna | Denominación vigente (ES) | Denominación vigente (EN) | `provisional` |
|---|---|---|---|---|
| C1 | `invasiones_mundos_indigenas` | Invasiones, despojos y mundos indígenas | Invasions, dispossessions and Indigenous worlds | `true` |
| C2 | `trata_esclavizacion_plantacion` | Trata, esclavización y plantación | Slave trade, enslavement and plantation | `true` |
| C3 | `fugas_cimarronajes_emancipaciones` | Fugas, cimarronajes y emancipaciones | Flight, marronage and emancipations | `true` |
| C4 | `postplantacion_trabajo_desposesion` | Postplantación, trabajo y desposesión | Post-plantation, labor and dispossession | `true` |
| C5 | `rutas_diasporas_territorios_acuosos` | Rutas, diásporas y territorios acuosos | Routes, diasporas and aqueous territories | `true` |
| C6 | `huracanes_ecologias_materialidades_vivas` | Huracanes, ecologías y materialidades vivas | Hurricanes, ecologies and living materialities | `true` |
| C7 | `soberanias_fronteras_ocupaciones` | Soberanías, fronteras y ocupaciones | Sovereignties, borders and occupations | `true` |
| C8 | `creolizaciones_traducciones_opacidades` | Creolizaciones, traducciones y opacidades | Creolizations, translations and opacities | `true` |
| C9 | `memorias_espiritualidades_archivos_vivos` | Archivos vivos, espiritualidades y saberes transmitidos | Living archives, spiritualities and transmitted knowledges | `true` |
| C10 | `cuerpos_parentescos_eroticas` | Cuerpos, parentescos y eróticas | Bodies, kinships and erotics | `true` |

### 1.3 La clave de C9: nombre conceptual y nombre técnico

**[VERIFICADO]** La clave `memorias_espiritualidades_archivos_vivos` conserva la palabra `memorias`, que ya no aparece en la denominación visible porque `memoria` es una marca transversal y la regla de niveles prohíbe que una palabra nombre dos niveles a la vez. La clave no se renombró porque está escrita en los lotes ya cerrados. Ocurrencias exactas, contadas archivo por archivo:

| Archivo | Ocurrencias |
|---|---|
| `atlas-2/piloto-config.json` | 1 |
| `atlas-2/piloto-generado.json` | 1 |
| `atlas-2/lotes/s01-config.json` | 2 |
| `atlas-2/lotes/s01-generado.json` | 2 |
| `atlas-2/lotes/a01-config.json` | 3 |
| `atlas-2/lotes/a01-generado.json` | 3 |
| `atlas-2/lotes/a02-config.json` | 5 |
| `atlas-2/lotes/a02-generado.json` | 5 |
| **Total en lotes** | **22** |

Renombrar la clave hoy obligaría a regenerar cuatro lotes ya dictaminados, que es exactamente lo que prohíbe la regla 3 de la memoria operativa.

**[PROPUESTA]** Separar de manera explícita el **identificador técnico** del **nombre conceptual**, y dejar prevista una migración futura sin ejecutarla ahora:

1. El identificador técnico de una corriente es opaco: no debe leerse como si fuera su definición. Un identificador que contiene `memorias` no convierte a `memoria` en corriente.
2. Añadir al catálogo, cuando se autorice, un campo `alias_historicos` por corriente, que registre los identificadores anteriores y permita que un lote viejo siga resolviéndose sin regenerarse.
3. Cuando exista ese campo, la migración del identificador de C9 a algo como `archivos_vivos_espiritualidades` puede hacerse en un único commit que actualice el catálogo y añada el alias, sin tocar ninguno de los ocho archivos de lote.
4. Mientras tanto, ninguna interfaz debe derivar texto visible del identificador. Toda etiqueta mostrada al público sale del campo `label` / `label_en`, nunca de la clave.

No propongo ejecutar nada de esto en la Etapa 1. Lo dejo definido para que la deuda quede acotada y no reaparezca como sorpresa.

### 1.4 Una inconsistencia documental declarada, no un error

**[VERIFICADO]** `fenomenos-ampliacion.md` e `incidencias-cerradas.md` todavía nombran C9 como "Espiritualidades, rituales y archivos vivos", que fue la redacción del 10 de agosto, sustituida el 11. El propio `catalogos-atlas-2.json` declara que esa redacción intermedia se conserva a propósito, "no como error", porque es el registro correcto de lo que existió entre esas dos fechas. La arquitectura debe preservar esa distinción entre **texto vigente** y **registro histórico**, y no "corregir" retroactivamente los documentos de bitácora.

---

## 2. Guiones conceptuales de C1–C10

**[PROPUESTA] en su totalidad.** No existe prosa previa para nueve de las diez corrientes: `esquema-datos-propuesto.json` trae un único guion redactado, el de C1, y lo presenta como plantilla de formato, no como texto aprobado. Lo que sigue se construye a partir de material verificable —los repartos de etiquetas heredadas documentados en `fenomenos-ampliacion.md`, las definiciones del `glosario-archipielico.md`, la regla de los tres niveles y las vías de constitución declaradas en `metodologia-revisada-borrador.md`— pero la redacción es nueva y ninguna línea está aprobada.

Cada corriente lleva un guion de 50 a 90 palabras, según el formato que fija el esquema, y un bloque estructurado con los demás elementos pedidos, que no caben en ese límite de palabras sin destruirlo.

---

### C1 · Invasiones, despojos y mundos indígenas

> ¿Qué mundos existían antes de la ocupación europea y qué queda de ellos hoy? La corriente sigue la fuerza que liga invasión, despojo territorial y persistencia indígena en la cuenca, sin tratar lo indígena como pasado clausurado. Su tensión: la evidencia arqueológica y archivística fue producida en buena parte por el mismo aparato que ejecutó el despojo. Recorre obras que reconstruyen mundos anteriores y prácticas que todavía los sostienen.

| | |
|---|---|
| **Alcance intelectual** | Arqueología precolonial, etnohistoria, estudios de soberanía indígena caribeña, crítica del archivo colonial temprano |
| **Incluye** | Mundos precoloniales; el hecho de la invasión; despojo territorial como proceso; persistencia y reaparición indígena contemporánea |
| **No incluye** | La colonialidad como estructura de saber, que es marca transversal; el régimen esclavista posterior, que es C2 |
| **Corriente más próxima** | C2, y la diferencia entre ambas es **analítica, no cronológica**. Invasión, despojo indígena, esclavización africana y régimen plantacionario se superponen en el tiempo y en el territorio; no hay una secuencia de primero uno y después el otro. C1 organiza obras cuyo argumento central son los mundos indígenas, la invasión, el despojo territorial y las persistencias indígenas. C2 organiza obras cuyo argumento central es la conversión racializada de personas en propiedad. Una obra que estudia la articulación entre ambos procesos lleva una corriente principal y otra secundaria |
| **Riesgo de solapamiento** | Alto con la marca `colonialidad`, que es precisamente por lo que esa palabra salió del nombre. Una obra sobre colonialidad del saber no entra en C1 salvo que su argumento se organice alrededor de la invasión |
| **Vía de constitución** | Siembra bibliográfica dirigida; sin correspondencia en la taxonomía anterior |
| **Estado** | Provisional |

### C2 · Trata, esclavización y plantación

> ¿Cómo se montó y se sostuvo el régimen que convirtió personas en mercancía y territorio en plantación? La corriente sigue la articulación entre comercio transatlántico, trabajo esclavizado y organización plantacionaria del espacio. Su tensión: el archivo que documenta ese régimen es el archivo de quienes lo administraban, y contar esclavizados no es lo mismo que escucharlos. Recorre obras que reconstruyen el sistema y obras que trabajan contra su silencio.

| | |
|---|---|
| **Alcance intelectual** | Historia de la trata, economía política de la plantación, historiografía de la esclavitud, crítica del archivo esclavista |
| **Incluye** | Trata transatlántica; esclavización como régimen jurídico y laboral; la plantación como forma espacial y económica |
| **No incluye** | La fuga y la insurgencia, que son C3; las reconfiguraciones posteriores de la lógica plantacionaria, que son C4; `capitalismo_racial` como categoría, que es marca |
| **Corriente más próxima** | C4, y **la abolición no funciona como frontera cronológica rígida** entre ambas. Lo que las distingue es el **régimen analítico dominante**: C2 trabaja la propiedad sobre personas, la esclavización y la plantación esclavista; C4, la reconfiguración y persistencia de las lógicas plantacionarias en los regímenes posteriores de trabajo, tierra, enclave, extracción, turismo y desposesión. Las temporalidades se superponen y las transiciones fueron desiguales entre territorios: la abolición no ocurrió a la vez ni significó lo mismo en cada uno |
| **Riesgo de solapamiento** | Alto con la marca `capitalismo_racial`, cuyo mecanismo canónico es la plantación. La marca registra el mecanismo; la corriente organiza el argumento |
| **Vía de constitución** | Siembra bibliográfica dirigida; sin correspondencia en la taxonomía anterior |
| **Estado** | Provisional |

### C3 · Fugas, cimarronajes y emancipaciones

> ¿Qué se funda al huir? La corriente sigue la fuga como práctica política y como pensamiento, del palenque a la revolución y a las emancipaciones formales. Su tensión: la emancipación decretada y la libertad conquistada no son la misma cosa, y el archivo suele registrar la primera. Recorre obras que leen el cimarronaje como filosofía y no solo como resistencia, junto a las que documentan sus formas concretas.

| | |
|---|---|
| **Alcance intelectual** | Estudios de marronage, historia de las revoluciones caribeñas, filosofía política de la libertad, etnogénesis |
| **Incluye** | Fuga y palenque; insurgencia; revolución haitiana y otras; procesos de abolición leídos desde abajo |
| **No incluye** | El régimen del que se huye, que es C2; la diáspora y la migración, que son C5 |
| **Corriente más próxima** | C7. Se distinguen por la escala del sujeto: C3 trabaja la sustracción al poder, C7 la disputa por la forma estatal |
| **Riesgo de solapamiento** | Medio con C5, porque la fuga también es desplazamiento. Criterio: si el argumento es la sustracción, C3; si es la circulación, C5 |
| **Vía de constitución** | Migración del corpus heredado, con base en la etiqueta `cimarronaje` (26 entradas, 11 %) |
| **Estado** | Provisional |

### C4 · Postplantación, trabajo y desposesión

> La plantación no terminó: se reorganizó. La corriente sigue cómo el orden del trabajo, la tierra y la raza persiste tras la abolición formal, de manera desigual según el territorio, y reaparece en el ingenio, el enclave, la zona franca y el resort. Su tensión: nombrar continuidad puede volver invisible lo que sí cambió, y nombrar ruptura puede absolver al presente. Recorre obras que rastrean esa persistencia sin convertirla en destino.

| | |
|---|---|
| **Alcance intelectual** | Economía política del Caribe contemporáneo, antropología del trabajo, estudios del turismo, urbanismo y despojo |
| **Incluye** | Régimen laboral postabolición; enclave y extracción; turismo como economía de la mirada; desposesión urbana y rural |
| **No incluye** | El régimen esclavista mismo, que es C2; la marca `clase_trabajo`, que atraviesa varias corrientes |
| **Corriente más próxima** | C2, con la que comparte el objeto plantacionario, **sin que la relación sea de continuación temporal simple**: las separa el régimen analítico dominante, no la fecha de una abolición que llegó en momentos distintos y con efectos distintos a cada territorio. También C7, con la que comparte la cuestión del control territorial |
| **Riesgo de solapamiento** | Alto con `capitalismo_racial`. Es la corriente donde más entradas heredadas de esa etiqueta podrían recalar, y por eso la que más expuesta está a recibir obras por descarte y no por argumento |
| **Vía de constitución** | Migración del corpus heredado, base `postplantación` (35 entradas, 15 %) |
| **Estado** | Provisional |

### C5 · Rutas, diásporas y territorios acuosos

> ¿Qué ocurre cuando el mar deja de ser frontera y pasa a ser el territorio? La corriente sigue circulaciones documentadas —migración, exilio, retorno, tránsito intelectual, musical y religioso— y las geografías acuosas que las hacen posibles. Su tensión: registrar movimiento exige fuente, y la proximidad geográfica no prueba trayecto. Recorre obras que piensan el archipiélago como red de circulación y no como suma de islas.

| | |
|---|---|
| **Alcance intelectual** | Estudios de diáspora, historia marítima, geografía crítica, circulación cultural transatlántica |
| **Incluye** | Rutas documentadas; diáspora sostenida a distancia; el mar y la cuenca como espacio propio |
| **No incluye** | La trata como régimen, que es C2 aunque sea también una ruta; la fuga, que es C3 |
| **Corriente más próxima** | C8. Se distinguen por lo que producen: C5 sigue el trayecto, C8 lo que la mezcla genera en el lenguaje y la forma |
| **Riesgo de solapamiento** | Medio con C2 y C3, porque la trata y la fuga también son circulación. Criterio: si el argumento central es el trayecto, C5 |
| **Vía de constitución** | Siembra bibliográfica dirigida; sin correspondencia en la taxonomía anterior |
| **Estado** | Provisional |

### C6 · Huracanes, ecologías y materialidades vivas

> El huracán es política antes que naturaleza. La corriente sigue cómo el desastre expone qué vidas se consideran prescindibles, y cómo suelo, agua, plantas y animales participan del conflicto en lugar de servirle de escenario. Su tensión: llamar natural a un desastre desplaza la responsabilidad, pero reducirlo a lo social borra la agencia de lo material. Recorre obras que leen el clima como relación histórica.

| | |
|---|---|
| **Alcance intelectual** | Ecología política, humanidades ambientales, estudios de desastre, teoría de la materialidad |
| **Incluye** | Huracán y catástrofe climática; ecologías coloniales y poscoloniales; materialidades con agencia |
| **No incluye** | La marca `violencias` en su tipo ambiental, que puede acompañar a cualquier corriente |
| **Corriente más próxima** | C4, con la que comparte la pregunta por el despojo del territorio |
| **Riesgo de solapamiento** | Bajo. Es la corriente con perfil más definido en la taxonomía anterior (`catástrofes`, 16 entradas, 7 %), y también la más delgada del corpus heredado |
| **Vía de constitución** | Migración del corpus heredado |
| **Estado** | Provisional |

### C7 · Soberanías, fronteras y ocupaciones

> ¿Qué significa libertad cuando la nación soberana dejó de ser la respuesta? La corriente sigue estatus políticos no soberanos, ocupaciones militares, fronteras y formas de autoridad que no caben en el molde del Estado-nación. Su tensión: el Caribe produjo la primera república negra y también los territorios no incorporados más antiguos del mundo, y ambos hechos pertenecen a la misma historia. Recorre obras que piensan la soberanía desde su falla.

| | |
|---|---|
| **Alcance intelectual** | Teoría política del estatus no soberano, historia de las ocupaciones, estudios fronterizos, derecho colonial |
| **Incluye** | Estatus no soberano; ocupación militar; frontera como dispositivo; formas de autoridad no estatal |
| **No incluye** | La insurgencia y la fuga, que son C3; la marca `colonialidad`, que atraviesa todas |
| **Corriente más próxima** | C1 y C3. Con C1 comparte la ocupación, pero C1 la trabaja sobre mundos indígenas; con C3 comparte la libertad, pero C3 la trabaja como sustracción |
| **Riesgo de solapamiento** | Alto. Es la segunda etiqueta heredada más poblada (62 entradas, 27 %) y la que más candidaturas ambiguas puede generar |
| **Vía de constitución** | Migración del corpus heredado |
| **Estado** | Provisional |

### C8 · Creolizaciones, traducciones y opacidades

> ¿Qué nace del encuentro forzado que ninguna de sus partes contenía? La corriente sigue la creación impredecible de lenguas, formas y conceptos, junto al derecho a no ser transparente que Glissant reclama frente a la exigencia de explicarse. Su tensión: celebrar la mezcla puede volver amable una historia de violencia. Recorre obras que piensan la creolización como relación y no como síntesis pacífica.

| | |
|---|---|
| **Alcance intelectual** | Teoría de la creolización, criollística, estudios de traducción, poética caribeña, oralitura |
| **Incluye** | Lenguas criollas; creolización como proceso; traducción y sus límites; opacidad como derecho |
| **No incluye** | La fricción epistémica, que pertenece a la relación entre obras; el cruce lingüístico, que es dato derivado |
| **Corriente más próxima** | C9. Se distinguen por el objeto: C8 trabaja la forma que nace del encuentro, C9 lo que se transmite y conserva |
| **Riesgo de solapamiento** | Medio. Es también la corriente donde más fácilmente se confunde el nivel corriente con el nivel relación, por la cercanía entre creolización y fricción |
| **Vía de constitución** | Migración del corpus heredado (`creolización`, 51 entradas, 22 %) |
| **Estado** | Provisional |

### C9 · Archivos vivos, espiritualidades y saberes transmitidos

> Contra el silenciamiento institucional, el archivo vivo. La corriente sigue las formas comunitarias e insurgentes de transmitir, conservar y producir saber: el monte y el tambor, pero también el archivo familiar, el contraarchivo, la colección material y la escritura que trabaja contra el silencio oficial. Su tensión: dar estatuto de fuente a estos repertorios obliga a revisar qué cuenta como prueba. El criterio no es el soporte, sino la forma de transmisión.

| | |
|---|---|
| **Alcance intelectual** | Antropología de la religión afroatlántica, estudios de oralidad, teoría y crítica del archivo, archivos comunitarios, estudios de performance, etnomusicología, escrituras contra el silenciamiento |
| **Incluye** | Archivos comunitarios; contraarchivos; archivos familiares; colecciones materiales; prácticas performativas; música y repertorios corporales; oralidad y testimonio con estatuto de fuente; espiritualidad y ritual como conocimiento; escrituras que funcionan contra el silenciamiento institucional |
| **Criterio de ingreso** | **No es si el soporte es escrito o no escrito.** Es si la obra estudia formas vivas, comunitarias o insurgentes de transmisión, conservación y producción de saber. Un libro puede ser archivo vivo; una grabación institucional puede no serlo |
| **No incluye** | La marca `memoria`, que atraviesa varias corrientes y por eso salió de este nombre; la revisión historiográfica que opera dentro de la institución académica sobre archivos oficiales sin trabajar formas vivas o comunitarias de transmisión |
| **Corriente más próxima** | C8 y C10. Con C8 comparte la lengua, con C10 el cuerpo como soporte de transmisión |
| **Riesgo de solapamiento** | El más alto de las diez. La etiqueta heredada de base (`memoria`) marca 93 entradas, el 40 % del corpus, y **ninguna entrada la lleva como etiqueta única**. Sin un criterio estricto, C9 recibirá por inercia obras que pertenecen a otras corrientes |
| **Vía de constitución** | Migración del corpus heredado, con reparto obligado |
| **Estado** | Provisional, y de las diez es la que más necesita ratificación explícita del nombre y del criterio de ingreso |

### C10 · Cuerpos, parentescos y eróticas

> El cuerpo caribeño como campo de disputa y también de placer. La corriente sigue cómo género, deseo y parentesco organizan a la vez el poder y las formas de libertad, del castigo esclavista a la erótica insurgente. Su tensión: el mismo cuerpo que fue objeto de propiedad es el que sostiene prácticas de soberanía, y leerlo solo como herida repite el despojo. Recorre obras que piensan el placer y lo sagrado como política.

| | |
|---|---|
| **Alcance intelectual** | Estudios de género y sexualidad caribeños, teoría queer del Caribe, antropología del parentesco, teoría feminista negra |
| **Incluye** | Parentesco y formas de familia; erótica y deseo; violencia sexual y de género; el cuerpo como archivo |
| **No incluye** | Las marcas `genero` y `racializacion`, que atraviesan varias corrientes |
| **Corriente más próxima** | C9, por la vía del cuerpo ritual y la transmisión, pero también C2, C3 y C4 (ver la fila siguiente) |
| **Riesgo de solapamiento** | **Alto o medio con cuatro corrientes, no bajo.** Con **C2**: propiedad, reproducción y violencia sobre cuerpos esclavizados. Con **C3**: cuerpo, libertad y erótica insurgente. Con **C4**: trabajo reproductivo, género y desposesión. Con **C9**: cuerpo ritual, espiritualidad, transmisión y parentesco. La clasificación principal depende de si el argumento central de la obra es el cuerpo, el parentesco, el deseo o la erótica; si esos elementos aparecen como dimensión de otro argumento, C10 será secundaria o no aparecerá. `genero` sigue siendo marca transversal y no resuelve esta decisión |
| **Vía de constitución** | Migración del corpus heredado (`cuerpo y erótica`, 29 entradas, 12 %) |
| **Estado** | Provisional |

**Ninguno de estos diez guiones está aprobado.** Se presentan para dictamen, y el criterio de aceptación es que la dirección académica pueda usarlos para decidir, ante una obra concreta, en qué corriente entra y por qué no en la vecina.

---

## 3. Las cifras del corpus, resueltas

### 3.1 La regla exacta de conteo

Antes de dar cifras hay que fijar la regla, porque dos reglas razonables dan resultados distintos y una de las dos produce un número que no es el del proyecto.

**[VERIFICADO]** El proyecto usa una sola regla, escrita dos veces en el mismo sentido:

- En `proyectos/con-el-agua-de-por-medio.html`, línea 723:
  `const CORR_OK = RELS.filter(r=>!!r.fuente && !/corroborar/i.test(r.fuente)).length;`
- En `scripts/verificar-cifras-sitio.mjs`:
  `V.porCorroborar = R.filter((r) => /por corroborar/i.test(String(r.fuente || ""))).length;`

**Regla:** una relación está **corroborada** cuando su campo `fuente` no está vacío y **no contiene** la palabra "corroborar" en ningún punto de la cadena. Está **por corroborar** en caso contrario.

Esa precisión no es pedante. Muchas relaciones tienen una fuente que empieza describiendo el vínculo y termina reconociendo la deuda, por ejemplo: *"Comparten el fenómeno Colonialidad. Por corroborar el vínculo directo."* Si se contara solo lo que **empieza** con "Por corroborar", esa relación quedaría contada como corroborada y el resultado sería 72 en vez de 206. Aplicando la regla del proyecto —subcadena en cualquier posición— el resultado es 206. **La cifra correcta es 206, y la de 72 procede de una regla que el proyecto no usa.** Lo señalo porque yo mismo la calculé mal en un primer paso y solo la verificación contra el código del sitio lo detectó.

### 3.2 Cifras del corpus, con fuente exacta

**[VERIFICADO]** Todas obtenidas por lectura directa del JSON, no de la documentación.

| Indicador | Valor | Archivo | Rama | Versión | Fecha del corpus |
|---|---:|---|---|---|---|
| Entradas totales | **232** | `data/agua-de-por-medio/datos-atlas.json` | `feat/atlas-2-etapa-1-integrada` (= `HEAD`, `1871125`) | 1.16.1 | 2026-08-11 |
| — de ellas, `k: "obra"` | **229** | ídem | ídem | 1.16.1 | ídem |
| — de ellas, `k: "manifestacion"` | **3** | ídem | ídem | 1.16.1 | ídem |
| Relaciones totales | **588** | ídem | ídem | 1.16.1 | ídem |
| — corroboradas | **382** (65,0 %) | ídem | ídem | 1.16.1 | ídem |
| — por corroborar | **206** (35,0 %) | ídem | ídem | 1.16.1 | ídem |
| — con `fuente` vacía | **0** | ídem | ídem | 1.16.1 | ídem |
| Resonancias | **568** | ídem | ídem | 1.16.1 | ídem |
| Disonancias | **20** | ídem | ídem | 1.16.1 | ídem |
| Lugares | **30** | ídem | ídem | 1.16.1 | ídem |
| Redirecciones | **1** (`stewardpuertorico → steward`) | ídem | ídem | 1.16.1 | ídem |

**En la rama `main`, que es lo que el público ve hoy:** mismas 232 entradas, 588 relaciones, 382 corroboradas, 206 por corroborar, 568 resonancias, 20 disonancias, 30 lugares. La única diferencia es el reparto interno del campo `k`: en `main` (v1.16.0) hay **227 obras y 5 manifestaciones**; en esta rama (v1.16.1) hay **229 obras y 3 manifestaciones**, porque `dcf762f` reclasificó `totumo` y `figueroa` como obras de investigación. Ninguna entrada se agregó ni se retiró.

### 3.3 Qué designa exactamente la cifra 233

**[VERIFICADO]** No es una versión imprecisa de 232. Es el número de entradas de una versión anterior del corpus:

| Versión | Commit | Fecha | Entradas | `obra` | `manifestacion` | Relaciones |
|---|---|---|---:|---:|---:|---:|
| 1.14.0 | `d325c03` | 2026-08-03 | **203** | 198 | 5 | 429 |
| 1.15.0 | `620f3eb` | 2026-08-07 | **233** | 228 | 5 | 588 |
| 1.16.0 | `af31c4e` | 2026-08-10 | **232** | 227 | 5 | 588 |
| 1.16.1 | `dcf762f` | 2026-08-11 | **232** | 229 | 3 | 588 |

**El paso de 233 a 232 tiene una causa única y documentada.** El commit `af31c4e` se titula "Fusiona `stewardpuertorico` en `steward` y publica el corpus 1.16.0". Las dos entradas eran el mismo libro de 1956, y su fusión era la decisión número 7 de `decisiones-pendientes.md`. Al fusionarse, una entrada desapareció del listado y quedó como redirección, que es exactamente el único registro de `redirecciones` que hoy tiene el corpus. Las relaciones no variaron porque la fusión reasignó los vínculos en vez de eliminarlos.

**Por qué la documentación dice 233.** Los documentos que citan esa cifra se escribieron contra la versión 1.15.0 y así lo declaran ellos mismos:

| Documento | Cifra que usa | Base declarada |
|---|---|---|
| `atlas-2/README.md` | 233 entradas, 588 relaciones | "corpus 1.15.0" |
| `atlas-2/documentos/fenomenos-ampliacion.md` | 233 obras, 588 relaciones, 30 lugares | "`datos-atlas.json` v1.15.0" |
| `atlas-2/lotes/f01-muestra.json` | 233 obras | "`datos-atlas.json` v1.15.0" |
| `atlas-2/lotes/tp01-temporalidad.json` | 232 entradas | "`datos-atlas.json` v1.16.0" |

No hay contradicción entre estos documentos: cada uno declara su base y es consistente con ella. Lo que falta es una regla que impida leerlos como si hablaran del corpus actual.

**Un caso distinto: la cifra 203.** `decisiones-pendientes.md` y `metodologia-revisada-borrador.md`, ambos fechados el 8 de agosto, razonan sobre "las 203 entradas actuales". Esa era la cifra de la v1.14.0, del 3 de agosto; el 7 de agosto ya se había publicado la 1.15.0 con 233. Los dos documentos de planeación conceptual trabajan, por tanto, sobre un corpus que ya estaba superado cuando se escribieron. **Esto no invalida su argumento** —los repartos proporcionales entre etiquetas siguen siendo orientativos— **pero sí obliga a recontar antes de convertir cualquiera de sus cifras en criterio de decisión**. El propio `metodologia-revisada-borrador.md` ya lo advierte para otro caso: "Recontar todas las cifras antes de publicar".

**[PROPUESTA]** Que todo documento del Atlas 2.0 declare en su encabezado la versión exacta del corpus contra la que fue escrito, como ya hacen `f01-muestra.json` y `tp01-temporalidad.json`, y que ninguna cifra se cite sin esa referencia. No modifico ningún dato para resolver la discrepancia, porque no hay nada que resolver: hay que fecharla.

### 3.4 Nota sobre `verificar-cifras-sitio.mjs`

**[VERIFICADO] por lectura estática, sin ejecutar el script.** Existe `scripts/verificar-cifras-sitio.mjs`, que compara 28 cifras escritas a mano en siete páginas del sitio contra el corpus vivo y sale con código 1 si alguna discrepa. Entre sus reglas está `/(\d+) de 588 relaciones/g` contra `porCorroborar`. Como el corpus da 206 y las páginas dicen 206, esa regla debería pasar. Es la herramienta que corresponde usar para verificar las cifras publicadas cuando se autorice ejecutar scripts, y hasta entonces este documento no la ejecuta.

---

## 4. Arquitectura de datos: tres artefactos y un cuarto momento

### 4.1 Corrección de la versión anterior

La primera versión de este documento propuso que el corpus aprobado fuera "una nueva versión de `datos-atlas.json`". Eso confunde el corpus aprobado con el corpus publicado y elimina justamente el punto de control que la arquitectura necesita. Queda retirada.

También corrijo la denominación: **P00, S01, A01 y A02 no son "cuatro capas"**. Son **lotes del corpus de trabajo**. La capa es una sola; los lotes son las unidades en que esa capa se produce y se dictamina.

### 4.2 Los tres artefactos

| | **1. Corpus heredado** | **2. Corpus de trabajo** | **3. Corpus aprobado** |
|---|---|---|---|
| **Naturaleza** | Público y desplegado | Interno, versionado, reversible | Interno, dictaminado, **todavía no publicado** |
| **Ruta** | `data/agua-de-por-medio/datos-atlas.json` y `.js` | `data/agua-de-por-medio/atlas-2/` | **[PROPUESTA]** `data/agua-de-por-medio/atlas-2/aprobado/corpus-aprobado.json` — ruta a título de ejemplo, **no creada** |
| **Contenido** | 232 entradas, 588 relaciones, 30 lugares, 1 redirección | Catálogos, esquema y seis lotes (ver 4.3) | Solo entradas y relaciones que superaron dictamen, con su estado editorial completo |
| **Consulta** | Público general, vía la interfaz pública | Equipo editorial, vía prototipo de lectura | Equipo editorial y dirección académica |
| **Modificación** | Nadie desde este flujo | Equipo editorial, mediante generadores | Solo por incorporación dictaminada, nunca por generador |
| **Estados admitidos** | Ninguno declarado: es dato publicado | `pendiente_revision_con_texto`, `candidatura_preliminar`, `confirmada`, `revisada`; relaciones `corroborada` / `por_corroborar` | **[PROPUESTA]** Solo `confirmada` o `revisada`, con procedencia verificada |
| **Operaciones permitidas** | Lectura | Generar, validar, leer | Incorporar tras dictamen; leer |
| **Operaciones prohibidas** | Escritura por cualquier generador o script de lote | Escribir sobre el corpus heredado | Recibir entradas sin dictamen; ser leído por la interfaz pública |
| **Paso a la capa siguiente** | — | Dictamen académico por lote **y** validador en `0 error(es)` | **[PROPUESTA]** Ver el cuarto momento (4.4) |

**[VERIFICADO]** La prohibición de la fila "operaciones prohibidas" del corpus heredado no es solo normativa: hoy se cumple de hecho. Ningún script del repositorio escribe en sentido lote → `datos-atlas`. Los generadores leen `datos-atlas.json` y producen archivos de lote; el único script que escribe sobre el corpus público es `aplicar-etapa2-cifras.mjs`, que **fue incorporado en la línea de desarrollo de arquitectura, está presente en las ramas descendientes correspondientes y no forma parte de `main`**. Tiene modo `--simular` y aborta con `fatal()` si el estado no es el esperado.

**Evidencia de esa formulación, comprobada por inspección de ramas:** el archivo fue añadido por el commit `dcf762f` ("Sincroniza corpus público del Atlas 1.16.1"). Las ramas que contienen ese commit son `feat/atlas-2-arquitectura`, `feat/atlas-2-interfaz-preview` y `feat/atlas-2-etapa-1-integrada`. Comprobada además la presencia real del archivo en cada referencia con `git cat-file -e`:

| Referencia | `scripts/aplicar-etapa2-cifras.mjs` |
|---|---|
| `main` | ausente |
| `origin/main` | ausente |
| `feat/atlas-2-arquitectura` | presente |
| `origin/feat/atlas-2-arquitectura` | **ausente** |
| `feat/atlas-2-interfaz-preview` | presente |
| `feat/atlas-2-etapa-1-integrada` (`HEAD`) | presente |

Un matiz que la inspección añade y conviene registrar: el script tampoco está en `origin/feat/atlas-2-arquitectura`, porque esa rama remota va cinco commits por detrás de su copia local. **El script existe hoy únicamente en las tres ramas locales de este equipo y no en ningún remoto.** No tiene, por tanto, respaldo publicado.

### 4.3 Los seis lotes del corpus de trabajo

**[VERIFICADO]** El `README.md` del paquete enumera cuatro. Hay seis, y los dos que faltan están versionados en el repositorio:

| Lote | Archivo | Registros | Dictamen | Estado |
|---|---|---:|---|---|
| P00 | `piloto-generado.json` | 10 entradas / 3 relaciones | Aprobado 8-ago | Cerrado |
| S01 | `lotes/s01-generado.json` | 11 / 12 | Aprobado 8-ago | Cerrado |
| A01 | `lotes/a01-generado.json` | 18 / 14 | Aprobado 8-ago | Cerrado |
| A02 | `lotes/a02-generado.json` | 18 / 14 | Aprobado 8-ago | Cerrado |
| **F01** | `lotes/f01-muestra.json` | 26 asignaciones de fenómeno | **Sin dictamen** | `estado_general: "propuesto"`; base v1.15.0 |
| **TP01** | `lotes/tp01-temporalidad.json` | **232 registros** | **Sin dictamen** | 53 confirmados, 167 candidaturas, 12 pendientes; 24 con periodo estudiado, 208 sin él; base v1.16.0 |
| T01 | — | 24 previstas | Suspendido | Sin archivo generado |

**TP01 no aparece en ninguna documentación leída hasta ahora**, ni en el `README.md` del paquete ni en los informes de la Etapa 0. Es una capa aditiva de temporalidad, fechada el 10 de agosto, que separa publicación de periodo estudiado sin tocar el campo heredado `y` —exactamente la separación que el `glosario-archipielico.md` señala como condición para que la cronología cumpla la promesa marealéctica—. Su existencia debe incorporarse al inventario oficial. No propongo hacer nada con él en esta etapa más que registrarlo.

### 4.4 El cuarto momento: generación de los artefactos públicos

**[PROPUESTA]** Los tres artefactos anteriores son estados de un dato. Falta nombrar la **operación** que convierte el tercero en lo que el público lee, y separarla de todo lo demás para que nunca ocurra por inercia.

**Generación deliberada de artefactos públicos:** operación que produce `datos-atlas.json` y `datos-atlas.js` a partir del corpus aprobado. Requiere, en este orden y sin excepción:

1. **Validación** completa en `0 error(es)` sobre el corpus aprobado.
2. **Dictamen** académico escrito sobre el conjunto que se va a publicar, no solo sobre cada lote por separado.
3. **Versión** asignada, con nota de versión que declare qué cambió y qué sigue en deuda.
4. **Autorización explícita** de la dirección académica para publicar esa versión.
5. **Comprobación de cifras publicadas** con `verificar-cifras-sitio.mjs`, porque el sitio repite recuentos a mano en siete páginas y ese desfase ya ocurrió antes.
6. **Commit deliberado y revisado**, nunca automático.

El corpus heredado deja de llamarse heredado en el momento en que esta operación se ejecuta por primera vez: pasa a ser corpus publicado 2.0.0, y el corpus 1.x queda archivado con su propio identificador. Mientras esa operación no ocurra, el corpus público es y sigue siendo el 1.x, intacto.

El adaptador que realiza esta operación **no existe todavía en ningún punto del repositorio**, y no se construye en la Etapa 1.

---

## 5. Estados editoriales: cuatro ejes, no una secuencia

### 5.1 Corrección de la versión anterior

La primera versión presentó once pasos como una cadena lineal, con "sugerencia de IA" ocupando el cuarto lugar como si fuera un estado obligatorio por el que toda entrada debe pasar. Es incorrecto por dos razones: una entrada puede llegar a publicación sin que ninguna IA haya intervenido, y la intervención de una IA no hace avanzar nada por sí sola. Queda reemplazado por cuatro ejes independientes.

### 5.2 Los cuatro ejes

**[PROPUESTA]** Una entrada tiene simultáneamente un valor en cada uno de estos ejes, y los ejes no se derivan unos de otros.

**Eje 1 · Estado editorial de la obra.** Qué tan resuelta está su clasificación.

| Estado | Significado | Condición para entrar |
|---|---|---|
| `pendiente_revision_con_texto` | La taxonomía anterior no permite derivar destino; exige lectura | Por defecto cuando no hay candidatura derivable |
| `candidatura_preliminar` | Hay una hipótesis derivada, sujeta a confirmación | Candidatura única derivable; prohibido declarar corriente confirmada |
| `confirmada` | Una persona sostiene la clasificación con fundamento escrito | Responsable, fecha y fundamento; procedencia verificada |
| `revisada` | Confirmación revisada posteriormente por segunda lectura | Todo lo anterior, más una segunda revisión registrada |

**[VERIFICADO]** Los cuatro estados y sus reglas ya existen en `catalogos-atlas-2.json`, campo `reglas_estado`.

**Eje 2 · Procedencia de la clasificación.** De dónde salió la propuesta que hoy tiene esa entrada. Es el eje donde vive la IA.

| Valor | Significado |
|---|---|
| `derivacion_automatica` | Derivada de la taxonomía anterior por regla declarada |
| `lectura_editorial` | Propuesta por una persona tras leer la obra o su aporte |
| `sugerencia_ia` | Propuesta por una herramienta de asistencia |
| `dictamen_academico` | Fijada directamente por la dirección académica |
| `aporte_externo` | Llegó por el reflujo y superó revisión |

**Eje 3 · Estado de corroboración.** Aplica a relaciones, rutas y asignaciones de fenómeno, no a la obra.

| Valor | Significado |
|---|---|
| `corroborada` | Fuente localizable declarada, con páginas cuando corresponde |
| `por_corroborar` | Deuda declarada; se publica así, porque la deuda declarada es información |

**Eje 4 · Estado de publicación.** En qué artefacto vive hoy.

| Valor | Significado |
|---|---|
| `solo_trabajo` | Existe en un lote del corpus de trabajo |
| `aprobada_no_publicada` | Superó dictamen; está en el corpus aprobado |
| `publicada` | Presente en el corpus público desplegado |
| `archivada` | Estuvo publicada y fue retirada o fusionada; conserva redirección |

### 5.3 La intervención de IA, en concreto

**[PROPUESTA]** Se registra como **evento**, no como estado. Un evento tiene fecha, herramienta, contenido de la sugerencia y desenlace.

- Puede existir o no existir: una entrada sin ningún evento de IA es una entrada perfectamente válida.
- No reemplaza la revisión humana en ningún caso.
- No hace avanzar el eje 1 por sí sola. Una sugerencia de IA aceptada mueve la entrada a `candidatura_preliminar` como mucho, nunca a `confirmada`.
- Debe poder **aceptarse, corregirse o rechazarse**, y los tres desenlaces se registran. Un rechazo es información: dice dónde la herramienta se equivoca.
- Su aceptación queda **atribuida a una persona con nombre**, que es quien responde por ella. La atribución no puede ser un rol genérico.
- La IA puede sugerir, comparar y advertir. No corrobora y no publica.

### 5.4 Estados, acciones y controles

**[PROPUESTA]** El recorrido editorial se conserva, pero cada paso queda clasificado por lo que realmente es:

| Paso del recorrido | Tipo | Sobre qué eje actúa |
|---|---|---|
| Registro heredado | Estado | Eje 4 (`publicada`) |
| Candidatura | Estado | Eje 1 |
| Clasificación propuesta | **Acción** | Produce un valor en el eje 2 |
| Sugerencia de IA | **Evento** | Registra procedencia en el eje 2; no mueve el eje 1 |
| Evidencia | **Acción** | Prepara el eje 3 |
| Revisión humana | **Acción** | Puede mover el eje 1 a `confirmada` |
| Dictamen | **Control** | Autoriza el paso del eje 4 a `aprobada_no_publicada` |
| Corroboración | Estado | Eje 3 |
| Preparación para publicación | **Control** | Validador en `0 error(es)`; bloquea si falla |
| Incorporación al corpus aprobado | **Acción** | Mueve el eje 4 |
| Publicación | **Control** | Requiere autorización explícita; mueve el eje 4 a `publicada` |

Los tres **controles** son los puntos donde el flujo se detiene si algo falta. Ninguno es automático y ninguno puede delegarse en una herramienta.

### 5.5 Reglas de bloqueo y reversión

| Regla de bloqueo | Origen |
|---|---|
| Una entrada con `procedencia_verificada: false` no puede pasar a `confirmada` | **[VERIFICADO]** `esquema-datos-propuesto.json` |
| Una marca que exige tipo o mecanismo no se acepta sin él | **[VERIFICADO]** ídem |
| `candidatura_preliminar` prohíbe declarar corriente confirmada | **[VERIFICADO]** `catalogos-atlas-2.json` |
| Una fricción solo se acepta si la relación está corroborada, confirma disonancia y registra evidencia y argumento | **[VERIFICADO]** `README.md` de `atlas-2` |
| Una sugerencia de IA no aceptada por una persona no mueve ningún eje | **[PROPUESTA]** |
| Nada pasa a `publicada` sin autorización explícita | **[PROPUESTA]** |

Todo lo anterior al dictamen es reversible sin costo, porque no ha tocado ningún artefacto público. A partir del dictamen, la reversión exige un nuevo dictamen. A partir de la publicación, exige nueva versión y nota de versión.

---

## 6. Arquitectura futura de las dos interfaces

### 6.1 Qué es hoy `vista-previa.html`

**[VERIFICADO]** Es un **prototipo de lectura**, no la Mesa de corroboración. Son 448 líneas que cargan cuatro lotes, muestran barras de estadística, una tabla filtrable y una ficha de solo lectura. Su propio pie declara los dos límites que la definen: "Esta página no escribe ni modifica ninguno de esos archivos: solo los lee" y "no está enlazada desde ninguna página pública del sitio". No tiene edición, ni registro de responsable, ni historial, ni dictamen, ni comparación entre clasificación heredada y propuesta. Llamarla Mesa de corroboración sería prometer lo que no hace.

La Mesa de corroboración es un artefacto por construir, del que este prototipo es el primer fragmento útil.

### 6.2 Componentes que las dos interfaces deberán compartir

**[PROPUESTA]** Hoy no comparten ni una línea de código: son dos HTML independientes. Esa duplicación ya produjo dos fichas distintas para el mismo dato. Lo que sigue debe existir una sola vez y ser consumido por ambas.

| Componente compartido | Qué resuelve | Estado hoy |
|---|---|---|
| **Adaptador de datos** | Presenta corpus heredado, de trabajo y aprobado bajo una misma forma, para que la interfaz no sepa de cuál lee | No existe |
| **Catálogos conceptuales** | Corrientes, marcas, fenómenos, operaciones, orillas: una sola fuente | Existe el dato (`catalogos-atlas-2.json`, `catalogo-fenomenos.json`); no existe el módulo que lo sirve a ambas |
| **Búsqueda** | Título y autor, con conteo anunciado | Duplicada: `#qbox`/`#qcount` en la pública, `#qbox`/`#resCount` en el prototipo |
| **Estado de selección** | Qué obra está activa, con independencia de la vista | Existe en la pública; el prototipo no conserva selección |
| **Filtro por corriente** | El filtro central del atlas | No existe en ninguna de las dos |
| **Ficha base de obra** | Núcleo común: título, autoría, año, corriente, relaciones | Duplicada e incompatible entre ambas |
| **Navegación entre obras relacionadas** | Saltar de una obra a otra por sus vínculos | Existe en la pública (`data-go`); ausente en el prototipo |
| **Componentes de marcas, fricciones y fenómenos** | Mostrar los tres niveles sin confundirlos | No existen en ninguna de las dos |
| **Reglas de teclado, foco y `aria-live`** | Accesibilidad uniforme | Maduras en la pública (roving tabindex, `focosDe()`, `role="status"`); parciales en el prototipo |
| **Conservación de selección entre vistas** | No perder el nodo activo al cambiar de vista | Resuelta en la pública; el prototipo no tiene vistas múltiples |

### 6.3 Información exclusiva de la Mesa

**[PROPUESTA]** Nada de lo siguiente debe aparecer nunca en la interfaz pública sin una decisión editorial expresa y caso por caso:

| Información | Por qué queda en la Mesa |
|---|---|
| Procedencia editorial | Distingue corpus heredado, siembra, aporte y manifestación: es trazabilidad interna |
| Sugerencias de IA | Su desenlace importa al equipo, no al lector |
| Comparación entre clasificación heredada y propuesta | Muestra dónde la lectura corrigió a la derivación automática |
| Evidencias | Fuentes en bruto, notas de lectura, citas sin editar |
| Responsable | Nombre de quien firma cada decisión |
| Historial | Secuencia completa de cambios de estado |
| Dictamen | Texto del dictamen y su fecha |
| Advertencias | Salidas del validador que no bloquean pero exigen atención |
| Preparación para publicación | Qué falta para que un conjunto pueda publicarse |

La interfaz pública muestra el resultado y la deuda declarada. La Mesa muestra el proceso.

### 6.4 Correspondencia entre las vistas actuales y las denominaciones objetivo

**[VERIFICADO]** La interfaz pública tiene hoy cuatro vistas, con estas claves y etiquetas: `corriente` → "Corriente", `constelacion` → "Constelación", `cronologia` → "Cronología", `tabla` → "Tabla".

No son equivalentes automáticos de mapa, red, tabla y cronología, y conviene decir por qué:

| Vista actual | Qué dibuja realmente | Denominación objetivo | Observación |
|---|---|---|---|
| `corriente` "Corriente" | Geografía de la cuenca: islas por país, puntos continentales por ciudad, regiones en tensión con un centro no caribeño | **Mapa** | **Colisión de nombre.** "Corriente" nombra a la vez una vista y un nivel taxonómico (C1–C10). Un lector que ve "Vista: Corriente" puede creer que está filtrando por corriente, y no lo está: la selección de corriente ocurre en la leyenda, no ahí. Recomiendo renombrarla **Mapa** |
| `constelacion` "Constelación" | Grafo relacional de los fenómenos que atraviesan la cuenca, sin anclaje geográfico | **Red** | "Constelación" es evocador pero no dice que se trate de un grafo de relaciones. Recomiendo **Red**, conservando "constelación" como descripción en la ayuda si se quiere mantener el registro poético |
| `cronologia` "Cronología" | Dos reglas temporales: año de publicación abajo, periodo estudiado arriba, con tres modos de eje | **Cronología** | Correspondencia directa. El nombre ya es el correcto |
| `tabla` "Tabla" | Versión accesible del atlas, navegable con tabulador y legible por lectores de pantalla | **Tabla** | Correspondencia directa |

La colisión de "Corriente" es la más urgente de las cuatro, porque el filtro por corriente que se va a construir agravará el equívoco: habrá una vista llamada Corriente y un filtro llamado corriente que no tienen relación entre sí.

---

## 7. Arquitectura visual

La versión anterior dejó tres componentes sin definir. Aquí quedan definidos, con la marca correspondiente.

### 7.1 Tira de capas

**[PROPUESTA] completa.** No existe hoy y **no es** `#layerSeg`.

**[VERIFICADO]** `#layerSeg` es un grupo de tres botones excluyentes —Ambas / Obras / Manifestaciones culturales— que vive dentro del panel lateral de filtros y actúa sobre el campo `k`. Es un filtro binario de tipo de entrada, con tres opciones fijas, que nunca necesita desplazamiento.

**La tira de capas es otra cosa:**

| Requisito | Definición |
|---|---|
| Forma | Una sola fila horizontal, dentro del lienzo, no en el panel lateral |
| Jerarquía | Secundaria respecto del filtro por corriente; nunca compite con él por atención |
| Desplazamiento | Horizontal, cuando las opciones exceden el ancho disponible |
| Desbordamiento | Indicación visible de que hay opciones fuera del área: degradado en el borde y control de avance, no solo la posibilidad de arrastrar |
| Teclado | Navegable con flechas dentro de la tira; `Tab` entra y sale de ella como una sola parada |
| Persistencia | Su selección se conserva al cambiar de vista |
| Móvil | Se conserva como tira desplazable; no se convierte en menú desplegable |
| Distinción | No sustituye ni absorbe a `#layerSeg` |

**Criterio de aceptación:** un usuario puede recorrer todas las capas disponibles con teclado y con gesto táctil, sabe en todo momento que hay más opciones fuera de la vista, y su selección sobrevive al cambio de vista.

### 7.2 Controles dentro del lienzo

**[PROPUESTA]** Organización en tres niveles. Hoy los controles existen pero están repartidos sin jerarquía declarada, algunos en la barra superior y otros en el panel lateral.

**Nivel principal.** Lo que el atlas hace, siempre visible.

| Control | Estado hoy |
|---|---|
| Corrientes | No existe como control; la selección ocurre en la leyenda |
| Búsqueda | Existe (`#qbox`) |
| Resultados | Existe (`#qcount`, con `role="status"` y `aria-live="polite"`) |
| Restablecer | No existe un restablecimiento global; solo `#resetZoomBtn`, que restablece encuadre |

**Nivel de visualización.** Cómo se ve lo mismo.

| Control | Estado hoy |
|---|---|
| Mapa / Red / Tabla / Cronología | Existe (`#viewSeg`), con las denominaciones que la sección 6.4 propone revisar |

**Nivel contextual.** Ajustes que dependen de la vista activa.

| Control | Estado hoy |
|---|---|
| Capas | Existe (`#layerSeg`), hoy en el panel lateral |
| Leyenda | Existe (`#legendBar` / `#legend`), en dos niveles |
| Ayuda | Existe (`#hint`), con texto distinto por vista |
| Zoom | Existe (`#zoomGrp`, `#resetZoomBtn`, más `js/zoom-caribe.js`) |
| Relaciones | Existe parcialmente (`#toggleIndirectasMapa`, relaciones indirectas) |

**Criterio de aceptación:** cualquier control puede ubicarse en uno solo de los tres niveles sin discusión, y el nivel principal no crece con controles que dependan de la vista activa.

### 7.3 Aparición progresiva de relaciones

**[PROPUESTA], y corrijo la versión anterior.** La primera versión asoció este componente con la variable `flowing`, que gobierna el balanceo de los nodos. Es un error: **el movimiento de los nodos no es aparición progresiva de relaciones.** Son cosas distintas y `flowing` no tiene nada que ver con esto.

Regla requerida, en ocho pasos:

1. El estado inicial muestra obras o nodos, sin la maraña completa de relaciones.
2. Las relaciones permanecen ocultas mientras no haya selección.
3. Seleccionar una obra revela sus relaciones pertinentes.
4. Las relaciones no seleccionadas se ocultan o se atenúan, según lo que la vista permita; el conjunto sigue siendo contexto, no desaparece.
5. La interfaz explica el cambio con texto, no solo con color.
6. El conteo visible se actualiza al cambiar la selección.
7. La ficha permanece vinculada al nodo seleccionado mientras dure la selección.
8. La cronología continúa estática cuando la posición codifica tiempo.

**[VERIFICADO]** El punto 8 ya está resuelto en el código: el balanceo se suprime en la vista de cronología, con un comentario que explica por qué —si el nodo se mece, el año se lee mal—. Es el único de los ocho puntos que hoy se cumple.

**Criterio de aceptación:** con 588 relaciones cargadas, la vista inicial es legible; seleccionar una obra produce una lectura clara de sus vínculos; y el usuario entiende, sin adivinar, por qué el resto se atenuó.

### 7.4 Adaptación móvil

**[PROPUESTA].** La prueba visual queda para una etapa posterior, pero el comportamiento se define desde ahora.

| Requisito | Definición |
|---|---|
| Ficha | Panel inferior deslizable o vista completa; nunca un panel lateral estrecho superpuesto al lienzo |
| Controles | Sin superposición entre sí ni sobre el contenido activo del lienzo |
| Tira de capas | Horizontal y desplazable, según 7.1 |
| Objetivos táctiles | Tamaño suficiente para uso con el pulgar, incluidos los nodos del mapa, que hoy tienen radio 6,5–7 |
| Menú y filtros | Accesibles sin ocultar permanentemente el lienzo |
| Selección | Se conserva al abrir y cerrar la ficha y al cambiar de vista |
| Foco | Al cerrar la ficha, el foco vuelve al nodo que la abrió, no al inicio del documento |

**Criterio de aceptación:** las cuatro vistas son utilizables en pantalla de teléfono sin recurrir al zoom del navegador, y ninguna acción deja el foco perdido.

---

## 8. Filtro por corriente

### 8.1 Criterio de aceptación ampliado

**[PROPUESTA].** No existe hoy. La selección de corriente ocurre solo por clic en la leyenda, sin persistencia, sin chip y sin multiselección.

| Requisito | Definición |
|---|---|
| Jerarquía | Las diez corrientes se presentan con igual peso visual. Ninguna destacada por tener más entradas |
| Conteo | Cada corriente muestra cuántas entradas tiene bajo los filtros activos |
| Estados | `activo`, `inactivo` y `sin resultados` visualmente distintos. Una corriente sin resultados se muestra y se deshabilita; no se oculta |
| Multiselección | Explícita: seleccionar dos corrientes no reemplaza la primera |
| Combinación | La interfaz explica cómo se combinan los filtros: unión dentro del mismo filtro, intersección entre filtros distintos. El texto debe estar visible, no en una ayuda escondida |
| Chips | Un chip removible **por cada corriente seleccionada**, no un chip agregado que diga "3 corrientes" |
| Restablecer | Control claro que devuelve el filtro completo a su estado inicial, distinto del restablecimiento de encuadre |
| Persistencia | La selección se conserva al cambiar entre Mapa, Red, Tabla y Cronología |
| Contexto | Lo no seleccionado se atenúa, no se borra: el conjunto sigue siendo legible como fondo |
| Teclado | Navegable con flechas, con `aria-pressed` en cada opción, siguiendo el patrón ya maduro de "tipo de publicación" en `js/interactions.js` |
| Anuncio | Cada cambio de selección se anuncia por `aria-live`, con el conteo resultante |

**[VERIFICADO]** El precedente correcto es el filtro de tipo de publicación de `js/interactions.js`, que ya implementa multiselección con `aria-pressed` y control en página. El filtro de líneas de investigación del mismo archivo **no** sirve de precedente: solo lee un parámetro de URL (`lineaActiva`) y carece de control de alternancia en la página.

### 8.2 "Movimiento" no es un filtro

**[VERIFICADO]** La versión anterior lo contó de las dos maneras, y la ambigüedad viene del código, no de la redacción. El control `#movBtn` vive dentro de `#panelFiltros`, bajo una etiqueta "Movimiento", junto a Capa, Evidencia y Lengua. Además, `renderChips()` genera un chip para él cuando está desactivado, igual que para los filtros reales.

Pero no filtra nada: activa y desactiva el balanceo de los nodos. Con el movimiento apagado se ven exactamente las mismas entradas y las mismas relaciones.

**[PROPUESTA]** Es un **control contextual de visualización**, no un filtro. En consecuencia:

1. Sale del panel de filtros y pasa al nivel contextual de los controles del lienzo (7.2), junto a zoom y leyenda.
2. Deja de generar un chip en la fila de filtros activos, o bien lo genera con un tratamiento visual distinto que no lo confunda con un filtro de contenido.
3. Lo mismo aplica a "relaciones indirectas" (`#toggleIndirectasMapa`), que hoy también produce chip y tampoco filtra: revela relaciones adicionales, y pertenece al componente de aparición progresiva de relaciones descrito en 7.3.

El criterio general: **un chip de la fila de filtros activos debe significar siempre "hay entradas que no estás viendo".** Si un control no oculta ninguna entrada, no genera chip de filtro.

---

## 9. Gobierno académico

Toda decisión pendiente en este documento corresponde a la **dirección académica de Pensamiento Caribe**. Este documento no atribuye responsabilidades personales, no designa responsables individuales y no da por autorizado a nadie en particular para resolver ninguno de los puntos abiertos.

Donde el esquema exige "responsable, fecha y fundamento" para una reclasificación, el responsable es la persona que la dirección académica designe para esa función, y la designación es ella misma una decisión pendiente, registrada como tal en el punto 11 de `decisiones-pendientes.md`.

---

## 10. Decisiones, recomendaciones y pendientes

### 10.1 Decisiones que este documento no toma

Ninguna. Todo lo marcado **[PROPUESTA]** se somete a dictamen. Lo marcado **[VERIFICADO]** describe el repositorio y tampoco constituye una decisión.

### 10.2 Recomendaciones para dictamen

1. Ratificar el número diez y mantener las diez denominaciones como propuestas vigentes con `provisional: true`, sin darlas por cerradas.
2. Dictaminar los diez guiones de la sección 2, corriente por corriente.
3. Fijar la regla de conteo de la sección 3.1 como regla única del proyecto, y exigir que todo documento declare la versión de corpus contra la que fue escrito.
4. Adoptar la separación de tres artefactos más el cuarto momento operativo (sección 4), y en particular no volver a plantear el corpus aprobado como una versión del archivo público.
5. Incorporar TP01 y F01 al inventario oficial de lotes del corpus de trabajo.
6. Adoptar los cuatro ejes de estado (sección 5) y el tratamiento de la IA como evento con desenlace atribuido a una persona.
7. Renombrar la vista "Corriente" como "Mapa" y "Constelación" como "Red", para eliminar la colisión con el nivel taxonómico.
8. Sacar "Movimiento" y "relaciones indirectas" del panel de filtros.

### 10.3 Pendientes que requieren decisión de la dirección académica

| Pendiente | Por qué no puede resolverse aquí |
|---|---|
| Ratificación de las diez denominaciones y de los diez guiones | Es juicio académico sobre el contenido, no sobre la forma |
| Designación de quién puede decidir una reclasificación | Ya registrado como pendiente en `decisiones-pendientes.md`, punto 11 |
| Destino de T01 | Calibración suspendida; sin archivo generado ni dictamen |
| Dictamen sobre el catálogo de 35 fenómenos | El catálogo declara su propio estado como borrador para dictamen |
| Dictamen sobre TP01 | Capa de 232 registros sin dictamen y sin mención en la documentación oficial |
| Orden entre siembra dirigida y cierre de la migración heredada | Decisión abierta desde `decisiones-pendientes.md`, punto 3 |
| Qué hacer con las 189 fricciones publicadas bajo la regla anterior | Decisión abierta desde `decisiones-pendientes.md`, punto 5 |
| Diseño del adaptador lote → corpus aprobado | No existe ni como propuesta técnica; depende de que se apruebe antes la arquitectura de la sección 4 |

---

## 11. Cierre verificable

Salidas literales de los tres comandos exigidos, ejecutados en la raíz del repositorio, en la rama de trabajo:

```
$ git status --short --branch
## feat/atlas-2-etapa-1-integrada
?? data/agua-de-por-medio/atlas-2/documentos/etapa-1-arquitectura-integrada.md
```

```
$ git diff --name-status
(sin salida)
```

```
$ git diff --cached --name-status
(sin salida)
```

El documento de la Etapa 1 aparece como **sin rastrear**, no como modificado, porque nunca ha sido objeto de un commit. Es el único elemento que figura en la salida.

**Confirmaciones:**

1. **Ningún otro archivo fue alterado.** La única ruta que aparece en `git status` es la de este documento.
2. **El corpus público permanece intacto.** `main` sigue en `5aaf0a756f39d4d078326312b4061447071ca56f`, idéntico a `origin/main`; `datos-atlas.js` y `datos-atlas.json` no registran ninguna diferencia respecto de `HEAD`.
3. **No se ejecutaron generadores ni scripts.** Ni los generadores de lote, ni los validadores, ni `verificar-cifras-sitio.mjs`, ni `aplicar-etapa2-cifras.mjs`. Todas las cifras de este documento se obtuvieron leyendo los archivos JSON directamente y comparándolas con las reglas escritas en el código, sin ejecutar ese código.
4. **No se programó ninguna funcionalidad.** No se creó ni se modificó ningún archivo `.html`, `.js`, `.css` ni `.mjs`.
5. **No se hizo commit.**
6. **No se cambió de rama.** La rama activa sigue siendo `feat/atlas-2-etapa-1-integrada`, con `HEAD` en `1871125`.
