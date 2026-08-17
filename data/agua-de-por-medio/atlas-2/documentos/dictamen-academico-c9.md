# Dictamen académico de C9

## Archivos vivos, espiritualidades y saberes transmitidos

Dirección Académica de Pensamiento Caribe · 17 de agosto de 2026
Rama `feat/atlas-2-etapa-1-integrada` · HEAD de partida `e5cdecaf895026b207f42902274932aae31d9f92` ("Documenta dictamen académico de la corriente C8") · corpus `datos-atlas.json` v1.16.1 (232 obras, 588 relaciones)

- **Corriente:** C9
- **Id interno:** `memorias_espiritualidades_archivos_vivos`
- **Denominación (ES):** Archivos vivos, espiritualidades y saberes transmitidos
- **Denominación (EN):** Living archives, spiritualities and transmitted knowledges
- **Expediente de evidencia utilizado:** `data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c9.md`

**Nota sobre el estado de Git al redactar este dictamen:** `expediente-evidencia-c9.md` existe en la copia local de trabajo pero **no había sido comprometido a Git** en el momento de escribir este documento — sigue como archivo no rastreado, igual que `expediente-evidencia-c7.md` y `ficha-decision-c4.md`. El HEAD de partida citado arriba es, por tanto, el mismo HEAD vigente cuando se redactó el expediente. Este dictamen no depende de que el expediente esté comprometido para poder redactarse; ambos archivos quedan pendientes del mismo commit de Rob (ver apartado 16).

---

### 1. Naturaleza del dictamen

`expediente-evidencia-c9.md` es un documento **probatorio**: reunió evidencia verificable —identidad documental, historial Git, clasificaciones existentes, señales léxicas, fronteras, universo exploratorio, identidades bibliográficas dudosas— sin tomar ninguna decisión académica. Este dictamen es el documento **decisorio**: incorpora, exactamente y sin reinterpretarlas, las quince decisiones que la Dirección Académica tomó sobre esa base y que llegaron consignadas en la instrucción «DECISIONES ACADÉMICAS RESUELTAS PARA C9». **No introduce ninguna decisión nueva, no amplía ni reformula las ya tomadas, y no "mejora" silenciosamente su contenido.** Donde una decisión deja explícitamente un asunto abierto o una lectura autorizada sin clasificar, este dictamen conserva esa condición.

A lo largo del documento se distingue siempre entre evidencia verificada (heredada del expediente), decisión de la Dirección Académica, criterio ratificado, lectura autorizada de evidencia, y asunto que permanece abierto. Ninguna observación del expediente se trata aquí como decisión salvo que la Dirección Académica la haya ratificado expresamente en alguna de las quince determinaciones.

---

### 2. Decisión 1 — Denominación

**«Archivos vivos, espiritualidades y saberes transmitidos» / «Living archives, spiritualities and transmitted knowledges» queda ratificada como denominación definitiva de C9.** Es la formulación vigente del catálogo (`catalogos-atlas-2.json`, commit `16fc252`) y, según la Dirección Académica, la que mejor expresa el principio conceptual de la corriente: no se limita a memoria ni a ritual, sino a formas vivas de transmisión, conservación y producción de saber.

Las tres denominaciones anteriores, verificadas en el expediente (§1, §3.1) contra los cinco commits que han tocado `catalogos-atlas-2.json`, quedan registradas **únicamente como historia documental** y no deben presentarse como nombres alternativos vigentes:

- Memorias, espiritualidades y archivos vivos (commits `619ad67`, `99aec5b`, `2343008`, 7-8 de agosto).
- Espiritualidades, rituales y archivos vivos (commit `d3b15a7`, 10 de agosto).
- Archivos vivos, espiritualidades y transmisión (`Plan_operativo_Atlas_2_Claude_7_etapas.docx`, 11 de agosto, nunca comprometida a `catalogos-atlas-2.json`).

Con esta decisión queda resuelta la tensión documental que `dictamen-academico-c1.md` §9 había registrado como pendiente independiente, remitida expresamente al dictamen de C9. El campo `provisional: true` de `catalogos-atlas-2.json` no se modifica en esta tarea — la ratificación es un acto documental y académico, no una escritura técnica sobre el catálogo; ese archivo permanece sin tocar salvo que una instrucción posterior lo autorice expresamente.

---

### 3. Decisión 2 — Principio analítico

Queda ratificado el siguiente principio analítico, transcrito literalmente:

> **C9 reúne obras cuyo argumento está organizado centralmente por formas vivas, comunitarias, corporales, espirituales, performativas o insurgentes de transmisión, conservación, producción y activación de saber. El criterio de ingreso no es el soporte —escrito, oral, corporal, sonoro, ritual o material— sino la función que ese repertorio cumple como forma de conocimiento, memoria, archivo o transmisión.**

Incluye especialmente: archivos comunitarios; contraarchivos; archivos familiares; colecciones materiales; oralidad; testimonio; música; performance; repertorios corporales; ritual; espiritualidad como conocimiento; escrituras contra el silenciamiento institucional.

**La mera aparición de palabras como `memoria`, `archivo`, `ritual`, `testimonio`, `oralidad` o `espiritualidad` no basta. Debe existir organización argumental sustantiva.** Esta distinción entre palabra y argumento no es abstracta: el apartado 11 de este dictamen documenta, heredados del expediente (§7.1), dos falsos positivos verificados donde una coincidencia de subcadena —no de palabra— simuló una señal que no existía (`ritual` capturado dentro de `espiritual`; `oralidad` capturado dentro de `temporalidad`) — la evidencia directa que sostiene por qué la Dirección Académica exige organización sustantiva y una regla de detección estricta, y no coincidencia léxica bruta.

---

### 4. Decisión 3 — Guion conceptual

Se ratifica el guion vigente de C9, transcrito de `etapa-1-arquitectura-integrada.md`. Debe conservarse la formulación de apertura:

> **Contra el silenciamiento institucional, el archivo vivo.**

Y debe mantenerse como principio central:

> **El criterio no es el soporte, sino la forma de transmisión.**

| Campo | Contenido |
|---|---|
| Alcance intelectual | Antropología de la religión afroatlántica, estudios de oralidad, teoría y crítica del archivo, archivos comunitarios, estudios de performance, etnomusicología, escrituras contra el silenciamiento |
| Incluye | Archivos comunitarios; contraarchivos; archivos familiares; colecciones materiales; prácticas performativas; música y repertorios corporales; oralidad y testimonio con estatuto de fuente; espiritualidad y ritual como conocimiento; escrituras que funcionan contra el silenciamiento institucional |
| No incluye | La marca `memoria` (transversal); la revisión historiográfica que opera dentro de la institución académica sobre archivos oficiales sin trabajar formas vivas o comunitarias de transmisión (ver Decisión 6, apartado 7, sobre su compatibilidad condicionada con `revision_historiografica`) |
| Corriente más próxima | C8 y C10 |
| Riesgo de solapamiento | El más alto de las diez corrientes |
| Vía de constitución | Migración del corpus heredado, con reparto obligado (ver Decisión 4, apartado 5) |
| Estado | Provisional en el catálogo técnico; académicamente ratificado por este dictamen en denominación, principio y guion |

**No se requiere reescritura conceptual del guion en esta etapa.** La denominación ratificada en la Decisión 1 funciona desde ahora como nombre oficial de la corriente.

---

### 5. Decisión 4 — Vía constitutiva

Se ratifica la formulación:

> **La migración del corpus heredado es la vía constitutiva de C9, pero exige reparto editorial porque la antigua marca `memoria` es transversal y no discriminante. C9 se constituye mediante lectura y reclasificación del corpus heredado según su principio analítico, no mediante trasposición automática de la etiqueta `memoria`.**

`memoria` no debe tratarse como equivalencia automática de C9. La evidencia verificada en el expediente (§4) que sostiene esta decisión:

- `memoria` marca 93 de las 232 obras del corpus (40,1 %);
- ninguna de esas 93 la lleva como etiqueta única;
- solo 7 de esas 93 fueron procesadas por algún lote;
- de las 11 clasificaciones C9 actuales (4 principal + 7 secundaria), únicamente 3 llevan `memoria` en su etiqueta heredada;
- 8 de las 11 confirmaciones llegaron desde otras etiquetas heredadas (`cuerpo_erotica`, `violencias`, `postplantacion`, `catastrofes`, `soberanias`, `capitalismo_racial`).

**`memoria` no se presenta como predictor suficiente.** Esta decisión no reclasifica ninguna de las 11 confirmaciones existentes ni introduce una regla generativa nueva más allá de la ya citada.

---

### 6. Decisión 5 — Frontera C3/C9: lectura de tres casos

Se autoriza la lectura dirigida de `chevannes`, `travelstooy` y `pricefirst` (las mismas tres entradas que `dictamen-academico-c3.md` §7.6 ya había señalado como pendientes de lectura, y que el expediente de C9 verificó que siguen sin procesar) **para poner a prueba la frontera C3/C9**. Esta autorización:

- no convierte a las tres entradas en candidaturas;
- no las clasifica automáticamente en ninguna corriente.

Se mantiene el antecedente ya fijado desde C3:

> **Decide la forma del argumento, no el origen del sujeto.**

Como hipótesis de lectura, no como clasificación:

- C3 debe prevalecer cuando fuga, cimarronaje, insurgencia, autonomía o sustracción frente al poder organizan el argumento;
- C9 debe prevalecer cuando memoria, ritual, transmisión, archivo vivo o producción comunitaria de conocimiento organizan el argumento.

La clasificación efectiva de las tres obras requerirá lectura específica, no ejecutada en este dictamen.

---

### 7. Decisión 6 — `revision_historiografica`

Se adopta una **solución de compatibilidad condicionada**, no una eliminación ni una ratificación plena. `revision_historiografica` puede permanecer como fenómeno compatible con C9 (tal como lo declara `catalogo-fenomenos.json`, verificado en el expediente §10) **solo cuando la revisión historiográfica trabaja críticamente el archivo como problema de silenciamiento, transmisión, contraarchivo o producción comunitaria de conocimiento**. No pertenece a C9 cuando consiste únicamente en:

- revisión académica de archivos oficiales;
- reconsideración historiográfica interna a la disciplina;
- relectura documental sin formas vivas, comunitarias o insurgentes de transmisión.

**No se elimina C9 del fenómeno, pero debe precisarse posteriormente esa condición en el catálogo de fenómenos.** Esta decisión resuelve, con una condición explícita, la tensión que el expediente (§10, §17.2) había registrado sin resolver entre `catalogo-fenomenos.json` y el guion de C9. **El catálogo de fenómenos no se modifica en esta tarea** — la precisión queda como ajuste conceptual futuro autorizado, no ejecutado ahora (ver apartado 15).

---

### 8. Decisión 7 — Identidad bibliográfica de `chande` y `manoalzada`

Las identidades bibliográficas de `chande` y `manoalzada` **permanecen pendientes de verificación específica**. No debe aplicarse todavía al corpus público la corrección bibliográfica aprobada en los lotes. No debe ratificarse automáticamente autoría, tipo bibliográfico, título definitivo, DOI, ni año cuando esté en disputa.

**El expediente (§16) documentó, mediante verificación directa contra Git, que los lotes piloto (`99aec5b`) y S01 (`2343008`) contienen correcciones bibliográficas aprobadas para `chande` y `manoalzada`. El commit posterior `dcf762f` mantuvo, sin embargo, ambos registros en el corpus público con `procedencia_verificada: false`. El contenido concreto de esas atribuciones queda documentado en el expediente por archivo, commit y campo, pero este dictamen no lo reproduce como información bibliográfica ratificada, no lo valida ni lo descarta y no lo utiliza para completar los registros.** El mismo commit `dcf762f` dejó también a `esquiva` (sin rol en C9) con idéntico tratamiento — dato que el expediente registra por igual, sin que afecte la clasificación de C9.

**La clasificación académica es independiente de la identidad bibliográfica.** Por tanto:

- `chande` se mantiene **C9 principal / C8 secundaria**;
- `manoalzada` se mantiene **C9 principal / C5 secundaria**;

sin utilizar esas clasificaciones para resolver sus identidades bibliográficas, ni al revés.

---

### 9. Clasificaciones que se mantienen

Ninguna de las 11 clasificaciones existentes verificadas en el expediente (§5) se reabre ni se reclasifica en este dictamen.

**C9 principal (4):** `chande` (C8 secundaria — ver apartado 8 sobre su identidad bibliográfica), `manoalzada` (C5 secundaria — ídem), `fuentesdispossessed` (C2 y C10 secundarias), `brownreaper` (C2 secundaria).

**C9 secundaria (7):** `brathwaite` (C8 principal), `gill` (C10 principal), `belisodelirium` (C10 principal, C7 co-secundaria), `handlerlangebarbados` (C2 principal), `politicallife` (C4 principal, C7 co-secundaria), `benedictykokken_haitiexception` (C8 principal, C7 co-secundaria), `hazareesingh` (C3 principal, C7 co-secundaria).

**Candidaturas activas sin confirmar hoy: 0.** No se crea ninguna candidatura nueva en este dictamen.

---

### 10. Fronteras académicas

#### C2/C9 — ratificada bilateralmente (Decisión 12)

Queda fijado el siguiente criterio, transcrito literalmente conforme a la Decisión 12, ratificado ahora desde C9 sobre lo ya establecido desde C2 (`dictamen-academico-c2.md` §7.3):

> **Una obra entra principalmente en C9 cuando su argumento central es el archivo, el silencio, la muerte, la espiritualidad o la transmisión. C2 puede permanecer como secundaria cuando el mundo esclavista estructura ese problema.**

En forma bidireccional: C9 organiza cuando archivo, ritual, transmisión, espiritualidad o memoria constituyen el problema central; C2 organiza cuando trata, esclavización y régimen esclavista constituyen el problema central. La otra dimensión puede conservarse como secundaria si es sustantiva. Evidencia disponible: `fuentesdispossessed` y `brownreaper` (C9 principal, C2 secundaria); `handlerlangebarbados` (C2 principal, C9 secundaria).

#### C8/C9 — ratificada bilateralmente (Decisión 11)

Queda fijado el siguiente criterio, transcrito literalmente conforme a la Decisión 11, ratificado ahora desde C9 sobre lo ya establecido desde C8 (`dictamen-academico-c8.md` §8):

> **C8 trabaja aquello que se produce o transforma en el encuentro —formas, lenguas, traducciones, creolizaciones y opacidades—; C9 trabaja aquello que se transmite, conserva, recuerda, ritualiza o archiva. La corriente principal la determina el principio organizador del argumento.**

A partir de C9, este criterio queda reconocido como **bilateral C8/C9** — ratificado por ambos dictámenes, no solo por el de C8. Evidencia disponible: `brathwaite` y `benedictykokken_haitiexception` (C8 principal, C9 secundaria); `chande` (C9 principal, C8 secundaria — ver apartado 8 sobre su identidad bibliográfica).

#### C3/C9 — parcialmente abierta (ver Decisión 5, apartado 6)

El criterio «decide la forma del argumento, no el origen del sujeto» se mantiene como antecedente ya fijado desde C3. La candidatura histórica doble (`price`, `totumo`) quedó resuelta hacia C3, fuera de C9, y no se reabre. La frontera permanece parcialmente abierta en tanto se ejecute la lectura autorizada de `chevannes`, `travelstooy` y `pricefirst` (apartado 6).

#### C4/C9 y C5/C9 — abiertas (Decisión 9)

Ambas permanecen **abiertas**. Cada una tiene un único caso disponible: C4/C9 solo `politicallife` (C4 principal, C9 secundaria); C5/C9 solo `manoalzada` (C9 principal, C5 secundaria). **No hay evidencia suficiente para fijar un criterio estable en ninguna de las dos. No se extrapola desde un solo caso.**

#### C9/C10 — provisionalmente abierta (Decisión 10)

La frontera C9/C10 queda **provisionalmente abierta**, sin criterio definitivo, hasta estudiar C10. Los tres casos actuales demuestran bidireccionalidad pero no bastan para fijar regla estable: `gill` (C10 principal, C9 secundaria); `belisodelirium` (C10 principal, C9 secundaria); `fuentesdispossessed` (C9 principal, C10 secundaria). **Este dictamen documenta los tres casos y declara que la frontera será revisada en el dictamen de C10.**

#### C6/C9 y C7/C9 — antecedentes ya fijados desde otras corrientes, no reabiertos

Sin ser objeto de ninguna de las quince decisiones de esta tarea, dos fronteras adicionales ya tenían criterio o hallazgo fijado desde el lado de la otra corriente, verificado de nuevo en el expediente (§8) y no alterado aquí: **C6/C9** — `brownreaper` procesó como candidatura hacia C6, excluida por decisión académica, y terminó C9 principal / C2 secundaria sin ningún rol en C6 (`dictamen-academico-c6.md` §5); **C7/C9** — nunca binaria, C9 aparece únicamente como acompañante en 4 de los 9 casos donde C7 cruza una tercera corriente (`dictamen-academico-c7.md` §8: «C9 nunca aparece como principal ni como secundaria única frente a C7»). Ninguna de las dos se reabre en este dictamen.

#### C1/C9 — sin caso, sin criterio

No existe, hoy, ningún caso confirmado en esta frontera. No fue objeto de ninguna de las quince decisiones. Permanece abierta sin lectura dirigida.

---

### 11. Regla de búsqueda léxica (Decisión 13)

Se formaliza la siguiente regla técnica-metodológica:

> **Las señales léxicas de C9 deben identificarse mediante límites de palabra y variantes morfológicas controladas. No debe utilizarse la mera coincidencia interna de subcadenas como evidencia conceptual.**

Por tanto: `ritual` dentro de `espiritual` no cuenta; `oralidad` dentro de `temporalidad` no cuenta — los dos falsos positivos que el expediente (§7.1) verificó y descartó por lectura directa del pasaje. **Esto es una regla de detección, no una regla de clasificación: incluso una coincidencia léxica correcta sigue requiriendo lectura contextual**, tal como ya aplicó el propio expediente al aceptar la variante morfológica `testimonios`/`testimonio` (§7.2) sin darla por buena automáticamente.

---

### 12. Lecturas autorizadas

Quedan autorizadas las siguientes lecturas, ninguna de las cuales equivale a clasificación, candidatura, ni autorización de modificar corpus, lotes o catálogos:

- **93 entradas** del universo exploratorio de C9 nunca procesadas por lote (Decisión 8; listado completo en `expediente-evidencia-c9.md` §12). La autorización no crea candidaturas, no produce clasificaciones automáticas, no autoriza modificación de corpus y no autoriza generación automática de lotes sin instrucción posterior. Debe aplicarse el principio analítico ratificado en la Decisión 2 (apartado 3).
- **86 entradas** con marca heredada `memoria` todavía sin lote (93 con la etiqueta menos las 7 ya procesadas, verificado en el expediente §4) — subconjunto del universo exploratorio anterior, no un conjunto adicional.
- **40 anclas** de fenómenos compatibles con C9 todavía vírgenes (Decisión 14), de un total de 42 anclas únicas en 11 fenómenos compatibles. Incluye especialmente el fenómeno exclusivo `religion_afroatlantica` (6 anclas, ninguna procesada). La condición de ancla no equivale a candidatura ni clasificación; las anclas deben leerse contra el principio analítico ratificado en la Decisión 2.
- Las tres lecturas dirigidas de la frontera C3/C9 (`chevannes`, `travelstooy`, `pricefirst`), ya autorizadas en la Decisión 5 (apartado 6) y no repetidas aquí como conjunto adicional.

---

### 13. Siembra (Decisión 15)

**No se autoriza siembra bibliográfica externa en esta etapa.** Debe agotarse primero el corpus interno disponible: las 93 entradas del universo exploratorio no procesadas, las 86 entradas con marca heredada `memoria` todavía sin lote (subconjunto de las anteriores), las 40 anclas de fenómenos compatibles todavía vírgenes, y las tres lecturas dirigidas C3/C9. Solo después de esa lectura interna podrá evaluarse si C9 necesita siembra externa.

---

### 14. Estado de C9 después del dictamen

**Ratificado:**
- Denominación: «Archivos vivos, espiritualidades y saberes transmitidos» / «Living archives, spiritualities and transmitted knowledges» (apartado 2).
- Principio analítico (apartado 3).
- Guion conceptual, sin reescritura (apartado 4).
- Vía constitutiva: migración del corpus heredado con reparto obligado (apartado 5).
- Frontera bilateral C8/C9 (apartado 10).
- Frontera bilateral C2/C9 (apartado 10).
- Regla técnica de detección léxica (apartado 11).
- Solución de compatibilidad condicionada para `revision_historiografica` (apartado 7) — condición ratificada; precisión técnica en el catálogo, pendiente.

**Abierto:**
- Identidad bibliográfica de `chande` (apartado 8).
- Identidad bibliográfica de `manoalzada` (apartado 8).
- Frontera C3/C9, parcialmente — pendiente de la lectura de `chevannes`, `travelstooy`, `pricefirst` (apartados 6 y 10).
- Frontera C4/C9 (apartado 10).
- Frontera C5/C9 (apartado 10).
- Frontera C9/C10, hasta estudiar C10 (apartado 10).
- Frontera C1/C9, sin caso ni criterio (apartado 10).

**Autorizado para lectura:**
- 93 entradas del universo exploratorio (incluye las 86 con `memoria` sin lote).
- 40 anclas de fenómenos compatibles vírgenes, incluido `religion_afroatlantica`.
- `chevannes`, `travelstooy`, `pricefirst` (frontera C3/C9).

**Ajuste conceptual futuro autorizado, pero no ejecutado ahora:**
- Precisar `revision_historiografica` en `catalogo-fenomenos.json` para establecer que solo es compatible con C9 cuando aborda silenciamiento, contraarchivo, formas comunitarias de transmisión, archivos vivos o producción alternativa de conocimiento.

**No autorizado:**
- Siembra externa.
- Reclasificación automática de cualquiera de las 11 clasificaciones existentes.
- Creación automática de candidaturas.
- Modificación inmediata de corpus, catálogo de corrientes, catálogo de fenómenos o lotes.
- Aplicación automática de la corrección bibliográfica de `chande` o `manoalzada`.
- Reapertura de C1-C8.
- Avance a C10 antes de cerrar formalmente C9.

---

### 15. Matriz de verificación — 15/15 decisiones

| # | Decisión | Incorporada en | Estado |
|---:|---|---|---|
| 1 | Denominación | Apartado 2 | Ratificado |
| 2 | Principio analítico | Apartado 3 | Ratificado |
| 3 | Guion conceptual | Apartado 4 | Ratificado |
| 4 | Vía constitutiva | Apartado 5 | Ratificado |
| 5 | Frontera C3/C9 — lectura de tres casos | Apartado 6 | Autorizado para lectura, sin clasificar |
| 6 | `revision_historiografica` | Apartado 7 | Compatibilidad condicionada, catálogo sin modificar |
| 7 | `chande` y `manoalzada` — identidad bibliográfica | Apartado 8 | Abierto, clasificación independiente ratificada |
| 8 | Universo exploratorio | Apartado 12 | Autorizado para lectura |
| 9 | Fronteras C4/C9 y C5/C9 | Apartado 10 | Abiertas, un caso cada una |
| 10 | Frontera C9/C10 | Apartado 10 | Provisionalmente abierta |
| 11 | Frontera C8/C9 | Apartado 10 | Ratificada bilateralmente |
| 12 | Frontera C2/C9 | Apartado 10 | Ratificada bilateralmente |
| 13 | Regla de búsqueda léxica | Apartado 11 | Formalizada |
| 14 | Fenómenos compatibles | Apartado 12 | Autorizado para lectura |
| 15 | Siembra | Apartado 13 | No autorizada en esta etapa |

**15 de 15 decisiones incorporadas y fieles. Los antecedentes de C1/C9, C6/C9 y C7/C9 se consignan únicamente como estado documental previo ya existente y no introducen nuevos criterios ni decisiones académicas en este dictamen.**

---

### 16. Límites del dictamen

Este dictamen:

- no clasifica ninguna de las 93 entradas del universo exploratorio, ninguna de las 40 anclas de fenómeno vírgenes, ni `chevannes`, `travelstooy` o `pricefirst`;
- no convierte ninguna lectura autorizada en candidatura ni en clasificación;
- no ejecuta ni autoriza siembra;
- no resuelve la identidad bibliográfica de `chande` ni de `manoalzada` — las conserva expresamente pendientes de verificación específica, sin atribuir autoría, año, DOI ni título definitivo, y sin asumir que la corrección aprobada en los lotes deba prevalecer sobre la sincronización posterior del corpus, ni al revés;
- no modifica `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` ni ningún archivo de lote (piloto, S01, A01, A02; ni `*-config.json` ni `*-generado.json`; tampoco F01 ni TP01);
- no precisa técnicamente `revision_historiografica` en el catálogo de fenómenos — queda como ajuste conceptual futuro autorizado, no ejecutado;
- no fija criterio definitivo para las fronteras C1/C9, C4/C9 ni C5/C9;
- no fija criterio para C9/C10 — la remite explícitamente al dictamen de C10;
- no reabre C6/C9 ni C7/C9, ya fijadas desde `dictamen-academico-c6.md` y `dictamen-academico-c7.md`;
- no reabre C1-C8;
- no implementa técnicamente la ratificación de la denominación sobre `catalogos-atlas-2.json` — el campo `provisional: true` permanece sin tocar salvo instrucción expresa posterior;
- no compromete a Git ni el expediente ni este dictamen — ambos quedan como archivos nuevos sin rastrear, para que Rob los comprometa desde su Mac (apartado 17);
- no avanza a C10: no crea ningún documento de C10, no inspecciona C10 y no inicia su clasificación, su siembra ni su expediente de evidencia.

---

### 17. Verificación Git y estado de entrega

Verificado con `git --no-optional-locks` para no dejar ningún candado en el índice desde este entorno (Cowork, sin acceso de escritura a `.git` de la copia de Rob):

```
$ git --no-optional-locks status --short
?? data/agua-de-por-medio/atlas-2/documentos/dictamen-academico-c9.md
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c9.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
$ git --no-optional-locks diff --stat HEAD
(sin salida)
$ git --no-optional-locks diff --name-only HEAD
(sin salida)
```

Los únicos dos archivos nuevos introducidos por el trabajo de C9 son `expediente-evidencia-c9.md` y `dictamen-academico-c9.md`. Los dos archivos heredados no rastreados (`expediente-evidencia-c7.md`, `ficha-decision-c4.md`) siguen exactamente como estaban: no se tocaron. Ningún archivo rastreado por Git fue modificado.

**No se ejecuta `git add`, `git commit` ni `git push` desde este entorno**, por el mismo acuerdo operativo ya vigente para el expediente. Los comandos exactos para que Rob comprometa ambos documentos en un solo commit desde su Mac se entregan junto con este documento, fuera del propio dictamen.
