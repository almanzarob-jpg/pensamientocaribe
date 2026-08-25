# Dictamen académico de C8

## Creolizaciones, traducciones y opacidades

Dirección Académica de Pensamiento Caribe · 17 de agosto de 2026
Rama `feat/atlas-2-etapa-1-integrada` · HEAD de partida `0d1f9acfa9a9279cd135735848517ff11732c9c8` ("Documenta expediente de evidencia de la corriente C8") · corpus `datos-atlas.json` v1.16.1 (232 obras, 588 relaciones)

- **Corriente:** C8
- **Id interno:** `creolizaciones_traducciones_opacidades`
- **Denominación (ES):** Creolizaciones, traducciones y opacidades
- **Denominación (EN):** Creolizations, translations and opacities
- **Expediente de evidencia utilizado:** `data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c8.md`

---

### 1. Naturaleza del dictamen

`expediente-evidencia-c8.md` es un documento **probatorio**: reunió evidencia verificable —clasificaciones existentes, historial Git, señales léxicas, fronteras, universo exploratorio— sin tomar ninguna decisión académica. Este dictamen es el documento **decisorio**: convierte en decisión formal las diecisiete determinaciones que la Dirección Académica tomó, una por una, sobre esa base, a lo largo de la fase de decisiones abierta para C8. **No introduce ninguna decisión nueva, no reinterpreta las ya tomadas y no "mejora" silenciosamente su contenido.** Donde una decisión deja explícitamente un asunto abierto o una lectura autorizada sin clasificar, este dictamen conserva esa condición.

A lo largo del documento se distingue siempre entre evidencia verificada (heredada del expediente), decisión de la Dirección Académica, criterio ratificado, lectura autorizada de evidencia, autorización de lectura del corpus y asunto que permanece abierto. Ninguna observación del expediente se trata aquí como decisión salvo que la Dirección Académica la haya ratificado expresamente en alguna de las diecisiete determinaciones.

---

### 2. Decisión sobre la denominación

**«Creolizaciones, traducciones y opacidades» / «Creolizations, translations and opacities» queda ratificada.** La denominación deja de ser académicamente provisional.

El campo `provisional: true` de `catalogos-atlas-2.json` no se modifica en esta tarea — la ratificación es un acto documental y académico, no una escritura técnica sobre el catálogo; ese archivo permanece sin tocar salvo que una instrucción posterior lo autorice expresamente.

El fundamento documental verificado en el expediente (§4–5.1) es que el registro de C8 —`n`, `label`, `label_en`, `provisional`— es idéntico byte a byte en las cinco versiones de `catalogos-atlas-2.json` que existen en el historial de Git (`619ad67`, `99aec5b`, `2343008`, `d3b15a7`, `16fc252`), y que no existe ninguna denominación alternativa registrada en ningún commit.

---

### 3. Principio analítico

Queda ratificado: **una obra puede pertenecer a C8 cuando su argumento esté organizado centralmente por uno o varios de los siguientes núcleos:**

- lenguas criollas;
- creolización como proceso;
- traducción y sus límites;
- opacidad como derecho.

**La mera aparición léxica de estos términos no basta. Debe existir organización argumental sustantiva.** Esta distinción entre palabra y argumento no es abstracta: el apartado 9 de este dictamen documenta tres falsos positivos verificados en el expediente (`hazareesingh`, `muneraelfracaso`, `olsencartagena`) donde "traducción", "criollo" y "transparencia" aparecen sin que organicen el argumento de la obra — la evidencia directa que sostiene por qué la Dirección Académica exige organización sustantiva y no coincidencia léxica.

---

### 4. Guion conceptual

Se mantiene el guion conceptual de C8 **sin correcciones**, transcrito de `etapa-1-arquitectura-integrada.md`, apartado "2. Guiones conceptuales de C1–C10":

> ¿Qué nace del encuentro forzado que ninguna de sus partes contenía? La corriente sigue la creación impredecible de lenguas, formas y conceptos, junto al derecho a no ser transparente que Glissant reclama frente a la exigencia de explicarse. Su tensión: celebrar la mezcla puede volver amable una historia de violencia. Recorre obras que piensan la creolización como relación y no como síntesis pacífica.

| Campo | Contenido |
|---|---|
| Alcance intelectual | Teoría de la creolización, criollística, estudios de traducción, poética caribeña, oralitura |
| Incluye | Lenguas criollas; creolización como proceso; traducción y sus límites; opacidad como derecho |
| No incluye | La fricción epistémica, que pertenece a la relación entre obras; el cruce lingüístico, que es dato derivado |
| Corriente más próxima | C9. Se distinguen por el objeto: C8 trabaja la forma que nace del encuentro, C9 lo que se transmite y conserva |
| Riesgo de solapamiento | Medio |
| Vía de constitución | Migración del corpus heredado y reclasificación por lectura editorial directa (ver apartado 5) |
| Estado | Provisional |

**A diferencia de C7, el expediente no encontró aquí ninguna inconsistencia cuantitativa que exigiera corrección.** La cifra que declara el guion —`creolización`, 51 entradas, 22 %— se reprodujo exacta por conteo directo contra el corpus actual (51/232 = 22,0 %, verificado por dos métodos independientes). Este dictamen no introduce, por tanto, ninguna corrección de redacción sobre el guion.

---

### 5. Vía constitutiva

Queda ratificada como **vía constitutiva principal de C8 la migración del corpus heredado**, y se reconoce además una **segunda vía válida: la reclasificación por lectura editorial directa**, cuando una obra no lleve la etiqueta heredada `creolizacion` pero su argumento satisfaga el principio analítico ratificado en el apartado 3.

La evidencia verificada en el expediente (§6) corresponde a dos comprobaciones distintas, que se mantienen separadas y no se funden en una sola cifra. **De las 10 obras con algún rol confirmado en C8, 5 incluyen literalmente "migración" en su campo `proceso` y 5 no la incluyen.** Independientemente de eso, **7 de las 10 llevan la etiqueta heredada `creolizacion` y 3 no la llevan** (`benedictykokken_haitiexception`, `shellerconsuming`, `mahlertricontinental`, que llegaron por otra vía). Ambos conjuntos de cinco y de siete no coinciden exactamente entre sí.

**Evidencia adicional que sostiene reconocer la segunda vía:** de las 8 obras con etiqueta heredada `creolizacion` que sí pasaron por algún lote, una —`londonoargonauts`— terminó sin ningún rol en C8, lo que confirma que la etiqueta heredada no garantiza por sí sola la clasificación. Simétricamente, tres de las diez confirmaciones existentes llegaron sin llevar esa etiqueta. Reducir la vía constitutiva a la sola migración de `creolizacion` habría dejado sin explicación documental a esas tres confirmaciones.

---

### 6. Caso `chande`

`chande` es la única candidatura histórica de C8 verificable por Git (piloto, commits `619ad67` → `99aec5b`, ambos del 8 de agosto de 2026): comenzó como candidata doble (C8 y C9) y se resolvió, en ese mismo par de commits, a **C9 principal / C8 secundaria**, sin volver a cambiar desde entonces.

**Clasificación (Decisión 6): se mantiene sin revisión — C9 principal / C8 secundaria.** No se reabre esta clasificación, no se crea una nueva candidatura y no se invierte la relación principal/secundaria.

**Identidad bibliográfica (Decisión 5): queda pendiente de verificación específica.** El expediente (§21.1) registra que el lote piloto aprobó, en `99aec5b`, una corrección bibliográfica completa para `chande` (`correcciones_aprobadas`, con autoría, año, DOI y tipo `"obra"`); y que el commit posterior de sincronización del corpus (`dcf762f`, tres días después) dejó el registro base de `chande` en `datos-atlas.json` sin aplicar esa corrección, con `procedencia: "manifestación"` y `procedencia_verificada: false` — el mismo tratamiento que recibió `esquiva` en ese mismo commit, que nombra a ambas entradas explícitamente.

En consecuencia, este dictamen:

- no atribuye autoría;
- no atribuye año;
- no atribuye DOI;
- no fija tipo bibliográfico definitivo;
- no presenta ningún título como definitivamente verificado;
- no asume que la corrección aprobada en el piloto deba prevalecer, ni que deba prevalecer el estado del corpus sincronizado.

**La clasificación académica de `chande` (C9 principal, C8 secundaria) es estrictamente independiente de su identidad bibliográfica.** Este dictamen no usa una para resolver la otra. El corpus no fue modificado por esta tarea.

---

### 7. Clasificaciones que se mantienen

Ninguna de las 10 clasificaciones existentes verificadas en el expediente (§9) se reabre ni se reclasifica en este dictamen.

**C8 principal (6):** `ortiz` (C4 secundaria), `benitez` (C4 secundaria), `brathwaite` (C9 secundaria), `monahan` (sin secundaria), `glissant` (C7 secundaria), `benedictykokken_haitiexception` (C7 y C9 secundarias).

**C8 secundaria (4):** `chande` (C9 principal — ver apartado 6 sobre su identidad bibliográfica), `figueroa` (C4 principal), `shellerconsuming` (C4 principal, C5 co-secundaria), `mahlertricontinental` (C5 principal, C7 co-secundaria — ver apartado 8 sobre la frontera C5/C8).

**Candidaturas activas sin confirmar hoy: 0.** No se crea ninguna candidatura nueva en este dictamen.

---

### 8. Fronteras académicas

#### C4/C8 — ratificada

Queda fijado el siguiente criterio académico, transcrito literalmente conforme a la Decisión 8:

> **C8 será principal cuando el argumento esté organizado por procesos de creolización, producción de formas culturales o lingüísticas nuevas, traducción o derecho a la opacidad; C4 será principal cuando el argumento esté organizado por trabajo, economía política, propiedad, dependencia, explotación o desposesión.**

La otra dimensión puede mantenerse como secundaria cuando tenga peso sustantivo. Evidencia disponible: 4 casos, dirección mixta —2 con C8 principal/C4 secundaria (`ortiz`, `benitez`) y 2 con C4 principal/C8 secundaria (`figueroa`, `shellerconsuming`).

#### C9/C8 — ratificada

Queda fijado el siguiente criterio académico, transcrito literalmente conforme a la Decisión 9:

> **C8 trabaja aquello que se produce o transforma en el encuentro —formas, lenguas, traducciones, creolizaciones y opacidades—; C9 trabaja aquello que se transmite, conserva, recuerda, ritualiza o archiva. La corriente principal la determina el principio organizador del argumento.**

Este criterio adopta y precisa la distinción que el propio guion de C8 ya declaraba ("C8 trabaja la forma que nace del encuentro, C9 lo que se transmite y conserva"), pero queda ratificado ahora como criterio académico, no como mera observación del guion. Evidencia disponible: 3 casos, dirección mixta —2 con C8 principal/C9 secundaria (`brathwaite`, `benedictykokken_haitiexception`) y 1 con C9 principal/C8 secundaria (`chande`).

#### C7/C8 — abierta

**Permanece abierta.** Dos casos disponibles (`glissant`, `benedictykokken_haitiexception`), los dos con C8 principal/C7 secundaria. El dictamen académico de C7 ya dejó esta misma frontera abierta desde su lado, documentando "evidencia insuficiente para establecer regla académica estable". La Dirección Académica no encontró, tampoco ahora desde C8, base suficiente en dos casos unánimes para fijar un criterio definitivo.

#### C5/C8 — evidencia reconocida; contradicción del dictamen de C5 documentada para corrección posterior

El expediente (§13.2) verificó una contradicción interna dentro del dictamen académico de C5, ya ratificado: su §10 ("Clasificaciones ya existentes") registra a `mahlertricontinental` en su tabla de "C5 principal" con **C7 y C8** como secundarias; pero su §8 ("C8 como corriente más próxima") afirma que "no existe, en el repositorio, ningún caso confirmado donde C5 sea principal y C8 secundaria, ni al revés".

**La Dirección Académica determina que debe prevalecer el dato reproducible de los lotes: `mahlertricontinental` constituye un caso efectivo de C5 principal / C7 y C8 secundarias.** Esta determinación no fija un criterio generativo de frontera C5/C8 (no se formula una regla del tipo "C5 será principal cuando…"); se limita a establecer cuál evidencia académica debe considerarse válida para C8. **La contradicción interna del dictamen de C5 queda documentada para una corrección posterior de ese documento — este dictamen no modifica `dictamen-academico-c5.md` ni reabre C5 técnicamente en esta etapa.**

#### C1/C8, C2/C8, C3/C8, C6/C8, C10/C8 — abiertas, sin lectura dirigida

**Permanecen abiertas.** No existe, hoy, ningún caso confirmado en ninguna de estas cinco fronteras. La Dirección Académica no autorizó, para esta etapa, ninguna lectura exploratoria dirigida específicamente a ponerlas a prueba — a diferencia del tratamiento que recibió la frontera C1/C7 en el dictamen de C7. Podrán revisarse cuando aparezca evidencia empírica suficiente.

---

### 9. Señales léxicas y falsos positivos

Queda formalizado: **"criollo", "traducción", "transparencia" y términos afines no constituyen por sí solos una señal discriminante suficiente para C8.** Deben evaluarse por contexto y función conceptual, distinguiendo entre palabra, contexto, función conceptual y principio organizador del argumento.

El patrón verificado que sostiene esta regla, sin ampliarlo más allá de lo aprobado, son los tres falsos positivos documentados por lectura directa en el expediente (§12): `hazareesingh` ("cartas nunca antes traducidas" — traducción archivística, no conceptual), `muneraelfracaso` ("criollos"/"gesta criolla" — élite histórico-política, no creolización como proceso), `olsencartagena` ("no como ventana transparente" — metáfora historiográfica, no opacidad como derecho). Ninguno de los tres está clasificado en C8.

**`castrogomezhybris` se mantiene como señal ambigua, no como falso positivo.** Su uso de "ciencia criolla" —en un sentido próximo a la identidad racializada de la élite colonial ilustrada— no pudo resolverse en el expediente como perteneciente o no a C8. Este dictamen no lo convierte en falso positivo por comodidad metodológica; permanece sin clasificar y sin resolver.

---

### 10. Lecturas autorizadas

Quedan autorizadas las siguientes lecturas, ninguna de las cuales equivale a clasificación, candidatura previa, o autorización de modificar corpus, lotes o catálogos:

- **43 entradas** con etiqueta heredada `creolizacion` que todavía no han pasado por lote (Decisión 7) — sin asumir que deban clasificarse en C8. La autorización considera explícitamente que una de las ocho entradas ya procesadas con esa etiqueta (`londonoargonauts`) no obtuvo ningún rol en C8.
- **63 entradas** del universo exploratorio nunca procesadas por lote (Decisión 14).
- **34 anclas** de fenómenos compatibles con C8 todavía vírgenes (Decisión 15), incluidas las correspondientes a los dos fenómenos exclusivos de C8 (`lengua_nacion_y_criollo`, `teoria_de_la_creolizacion`). La condición de ancla no equivale automáticamente a clasificación.

---

### 11. Caso `benedictykokken_haitiexception`

El expediente (§21.3) documenta que el lote A02 aprobó una corrección del título heredado —de *"...Anthropology and the Predicaments of Development"* a *"...Anthropology and the Predicament of Narrative"*— que nunca se sincronizó al corpus público. A diferencia de `chande` y `esquiva`, esta entrada no lleva `procedencia_verificada: false` ni fue nombrada en el commit de sincronización 1.16.1: es una discrepancia de menor severidad, una corrección aprobada pendiente de sincronizar, no un estado documental en disputa.

**La Dirección Académica reconoce la corrección pendiente. No se ejecuta la sincronización dentro de este dictamen: queda autorizada para una fase técnica posterior y controlada**, ajena a la redacción de este documento.

---

### 12. Siembra

**Debe agotarse primero el corpus interno de C8 antes de considerar siembra bibliográfica nueva.** Esto comprende las 43 entradas `creolizacion` sin lote, las 63 entradas del universo exploratorio no procesadas y las 34 anclas de fenómeno todavía vírgenes. **No se autoriza siembra externa en esta etapa.** No se busca bibliografía nueva, no se incorporan obras nuevas y no se preparan lotes de siembra como parte de este dictamen.

---

### 13. Estado de C8 después del dictamen

**Ratificado:**
- Denominación: «Creolizaciones, traducciones y opacidades» / «Creolizations, translations and opacities».
- Principio analítico (apartado 3).
- Guion, sin correcciones (apartado 4).
- Vía constitutiva: migración del corpus heredado y reclasificación por lectura editorial directa (apartado 5).
- Clasificación histórica de `chande`: C9 principal / C8 secundaria (apartado 6).
- Frontera C4/C8 (apartado 8).
- Frontera C9/C8 (apartado 8).
- Caso `mahlertricontinental`: reconocido como C5 principal / C7 y C8 secundarias (apartado 8).
- Regla sobre falsos positivos léxicos (apartado 9).

**Abierto:**
- Identidad bibliográfica de `chande` (apartado 6).
- Frontera C7/C8 (apartado 8).
- Fronteras C1/C8, C2/C8, C3/C8, C6/C8, C10/C8 — sin lectura dirigida (apartado 8).
- Contradicción interna del dictamen de C5 sobre `mahlertricontinental` — documentada para corrección posterior de ese documento (apartado 8).
- Señal ambigua `castrogomezhybris` (apartado 9).
- Sincronización del título de `benedictykokken_haitiexception` — reconocida, pendiente de fase técnica posterior (apartado 11).

**Autorizado para lectura:**
- 43 entradas `creolizacion` sin lote.
- 63 entradas del universo exploratorio.
- 34 anclas de fenómeno vírgenes.

**No autorizado:**
- Siembra nueva.
- Reclasificación automática de cualquiera de las 10 clasificaciones existentes.
- Modificación de corpus, catálogos, fenómenos o lotes.
- Resolución automática de la identidad bibliográfica de `chande`.
- Corrección del dictamen de C5 dentro de esta tarea.
- Sincronización del título de `benedictykokken_haitiexception` dentro de esta tarea.
- Avance a C9.

---

### 14. Límites del dictamen

Este dictamen:

- no clasifica ninguna de las 43 entradas `creolizacion` sin lote, ninguna de las 63 del universo exploratorio ni ninguna de las 34 anclas de fenómeno vírgenes;
- no convierte ninguna lectura autorizada en candidatura ni en clasificación;
- no ejecuta ni autoriza siembra;
- no resuelve la identidad bibliográfica de `chande` — la conserva expresamente pendiente de verificación específica, sin atribuir autoría, año, DOI ni título definitivo, y sin asumir que la corrección aprobada en el piloto deba prevalecer sobre la sincronización posterior del corpus, ni al revés;
- no modifica `datos-atlas.json`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json` ni ningún archivo de lote (`piloto`, S01, A01, A02; ni `*-config.json` ni `*-generado.json`);
- no modifica `dictamen-academico-c5.md`, pese a documentar y reconocer su contradicción interna;
- no ejecuta la sincronización pendiente del título de `benedictykokken_haitiexception`;
- no fija criterio nuevo para las fronteras C1/C8, C2/C8, C3/C8, C6/C8 ni C10/C8, ni autoriza lectura dirigida hacia ellas;
- no convierte en falso positivo la señal ambigua `castrogomezhybris`;
- no reabre C1–C7;
- no implementa técnicamente la ratificación de la denominación sobre `catalogos-atlas-2.json` — el campo `provisional: true` permanece sin tocar salvo instrucción expresa posterior;
- no avanza a C9: no crea `expediente-evidencia-c9.md` ni ningún documento de C9, no inspecciona C9 y no inicia su clasificación ni su siembra.
