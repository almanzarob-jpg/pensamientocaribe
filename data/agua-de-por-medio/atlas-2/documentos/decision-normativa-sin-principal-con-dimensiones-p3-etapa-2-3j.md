# Decisión normativa · dimensiones parciales bajo `sin_principal_clasificable` · Atlas 2.0 · P3-B · Etapa 2.3J

**Instancia que decide:** Dirección Académica de Pensamiento Caribe. **Origen:** laguna normativa detectada al intentar representar técnicamente la decisión académica de `dubuissonhaiti` (`decision-academica-dubuissonhaiti-p3-etapa-2-3j.md`, §17). **Naturaleza:** extensión puntual de `decision-normativa-sin-principal-clasificable-atlas-2.md`, que a su vez es addendum §26 de `decision-normativa-contrato-recorridos-fase-5a-d.md`. No reabre ninguna decisión académica de obra. No modifica `datos-atlas.json` ni `datos-atlas.js`. No modifica todavía `scripts/validar-atlas.mjs`: propone el cambio, no lo ejecuta.

Sobre el nombre de este archivo: el nombre de archivo fue indicado por Dirección Académica como referencia de trabajo y se conserva por continuidad documental. No implica que la solución adoptada cree una cuarta figura de `arquitectura_recorrido` llamada `sin_principal_con_dimensiones`. Como se verá en los §6 a §9, la solución adoptada es una extensión de la figura ya existente `sin_principal_clasificable`, no una figura nueva.

**Estado del documento: arquitectura general aprobada, con una corrección conceptual incorporada antes de la ratificación.** La versión inicial de esta decisión describía la prueba de retirada de C5 y C9 con el mismo vocabulario que la prueba de retirada del principal ("destructiva" / "no destructiva"), sin distinguir escala. Dirección Académica corrigió esa formulación: la prueba de retirada opera aquí en dos escalas distintas —segmentaria y global (ver §2, §9 y §11)— y esa distinción, no una prueba única, es lo que sostiene la figura. La corrección se aplicó quirúrgicamente en §2, §8, §9, §11, §13, §17 y §20; el resto del documento, incluida la solución seleccionada, permanece sin cambios.

---

## 1. Problema normativo

El contrato vigente de recorridos (`decision-normativa-contrato-recorridos-fase-5a-d.md`, extendido por su addendum §26 y por `decision-normativa-sin-principal-clasificable-atlas-2.md`) no tiene forma de representar una obra que cumple simultáneamente estas seis condiciones:

1. ninguna corriente C1–C10 puede funcionar como principal;
2. existen una o más corrientes sustantivas y probatoriamente fuertes en segmentos determinados de la obra;
3. esas corrientes no son mutuamente constitutivas entre sí;
4. no forman una síntesis multicorriente;
5. existe un principio organizador propio de la obra que queda fuera de C1–C10;
6. la clasificación académica no debe falsearse para satisfacer el esquema técnico.

`dubuissonhaiti` es el primer caso del corpus que activa esta laguna. `rebeldestiny`, precedente inmediato de `sin_principal_clasificable`, no la activó porque en ese caso las condiciones 2 y 3 no se daban: no había dimensiones parciales que conservar.

## 2. Evidencia que activa la revisión

La decisión académica de `dubuissonhaiti` (`decision-academica-dubuissonhaiti-p3-etapa-2-3j.md`) está ratificada sustantivamente en estos términos:

- `principal: ninguna` — ninguna corriente organiza el argumento completo del libro (introducción, capítulos 1–5, coda).
- `secundarias académicas: [c5, c9]` — C5 organiza el desplazamiento, el exilio y el retorno en los capítulos 1–2; C9 organiza el rasanblaj y la producción performativa/comunitaria de saber, concentrada en los capítulos 4–5. La prueba de retirada opera aquí en dos escalas distintas: retirar C5 de los capítulos 1–2, o C9 del capítulo 4, es destructivo dentro de ese segmento —su explicación se derrumba sin ella—; retirar cualquiera de las dos del libro completo no destruye el principio organizador general, que sigue de pie sin necesitar a ninguna. Esa doble condición —indispensable en su segmento, prescindible en el conjunto— es la razón por la que ambas merecen conservarse como dimensiones sustantivas parciales sin convertirse en principal.
- `arquitectura_especial: ninguna` — C5 y C9 no mantienen dependencia recíproca suficiente para constituir frontera, y no hay una tercera corriente estructurante que autorice síntesis multicorriente.
- `reserva_conceptual: RESERVA_CONCEPTUAL_FUERTE` — el mecanismo que sí organiza el libro entero (fracturas coloniales/institucionales → precariedad → improvisación/rasanblaj/imaginación radical → producción de lugar y de futuro habitables) no coincide sin residuo con ninguna corriente vigente.

Al intentar traducir este dictamen a los campos de `datos-atlas.json`, ninguna combinación autorizada por el contrato lo representa sin pérdida o sin falsedad (desarrollado en el §4). Esa comprobación —no una relectura del libro ni una reapertura de C5, C9 o C7— es la evidencia que activa esta revisión.

## 3. Contrato vigente

Verificado directamente sobre los documentos y el código, no reconstruido de memoria.

**`decision-normativa-contrato-recorridos-fase-5a-d.md`:**

- §4, regla 5: `FRONTERA_CONSTITUTIVA` "puede coexistir con recorridos secundarios adicionales únicamente cuando una decisión académica expresa así lo establezca." Precedente: `schwartz_seaofstorms` (frontera C6/C7, secundarias C2 y C4). Verificado en el corpus: seis obras tienen hoy `frontera_constitutiva` con `recorridos_sec` no vacío (`olwigstjohn`, `besson`, `allen_dikimanera`, `schwartz_seaofstorms`, `wilsoncrabantics`, `duboisturits`).
- §9: `recorrido` admite `null` "cuando la obra tenga arquitectura especial."
- §10: un recorrido secundario es "una dimensión sustantiva del argumento que interviene de manera académicamente significativa, pero permanece subordinada a la arquitectura interpretativa definida por el recorrido principal."
- §26 (addendum Etapa 2.3J): extiende §8 y §9 con el tercer tipo `sin_principal_clasificable`, remitiendo el detalle a `decision-normativa-sin-principal-clasificable-atlas-2.md`.

**`decision-normativa-sin-principal-clasificable-atlas-2.md`:**

- §5 registra que una versión anterior de esa misma decisión autorizaba, por analogía con frontera constitutiva, que `recorridos_sec` llevara corrientes contextuales bajo `sin_principal_clasificable`, y que Dirección Académica **retiró esa autorización** antes de aprobar el documento: "la categoría nueva debe resolver únicamente la ausencia demostrada de principal, sin modificar de paso el alcance ya consolidado de `recorridos_sec`." La razón dada: en frontera constitutiva las secundarias se apoyan en una arquitectura que sigue siendo relacional entre corrientes; en `sin_principal_clasificable` "no hay ninguna corriente estructurante que sirva de ancla a una secundaria."
- El mismo §5 deja la puerta abierta, explícitamente, para el caso que ahora se presenta: "Si un caso futuro demuestra esa necesidad con evidencia propia, se decidirá mediante una decisión normativa separada — no por extensión silenciosa de esta."
- §6 fija seis condiciones conjuntas para usar `sin_principal_clasificable`, ninguna de las cuales menciona `recorridos_sec`.
- §11 ("regla para casos futuros") ordena que ningún caso posterior se reclasifique por analogía con `rebeldestiny`: cada uno exige su propia lectura y su propia prueba.

**`scripts/validar-atlas.mjs`** (función `validateRecorridoArchitecture`, líneas 368–429, leídas en el código vigente):

- Validación genérica de `recorridos_sec` (líneas ~372–379): debe ser arreglo de máximo dos elementos, cada uno con forma `c1`…`c10`, y ninguno igual al `recorrido` principal. Esta validación se aplica siempre, con independencia de la arquitectura.
- Bajo `arquitectura.tipo === "sin_principal_clasificable"` (líneas 402–422), cinco condiciones adicionales y específicas: `arquitectura.recorridos.length === 0`; `recorrido === null`; **`recorridosSec.length === 0`** (línea 415, sin excepción); `estado === "confirmado"`; `fuente` no vacío.
- Regla `RECORRIDO_NULL_SIN_ARQUITECTURA` (líneas 423–429): si `recorrido` es `null` o indefinido, `estado_recorrido` es `"confirmado"` y `arquitectura_recorrido` es nulo o indefinido, es error. Consecuencia: fuera de una arquitectura especial declarada, no existe forma válida de tener `recorrido: null` con el caso confirmado.

**Precedentes efectivos** (verificados sobre `datos-atlas.json`): `rebeldestiny` es la única obra del corpus con `arquitectura_recorrido.tipo === "sin_principal_clasificable"` — `recorrido: null`, `recorridos_sec: []`, `arquitectura_recorrido: {tipo: "sin_principal_clasificable", recorridos: []}`, `estado_recorrido: "confirmado"`. `sharpewake` es `frontera_constitutiva` (C2/C9), con `recorridos_sec: []` — no usa el mecanismo que aquí se discute y no puede verse afectado por él.

## 4. Limitación detectada

La afirmación que Dirección Académica pidió verificar es correcta: **el contrato actual presupone que toda corriente secundaria está subordinada a un recorrido principal, y por eso no puede representar una obra sin principal que, sin embargo, mantiene corrientes sustantivas parciales.**

Esa presuposición aparece en dos lugares distintos y se refuerza mutuamente:

- En la definición misma de recorrido secundario (§10 del contrato): "subordinada a la arquitectura interpretativa definida por el recorrido principal." Sin principal, la definición no tiene a qué subordinar la secundaria.
- En la regla específica de `sin_principal_clasificable` (línea 415 del validador, y §5 del documento que la creó): `recorridos_sec` debe estar vacío sin excepción, precisamente porque, según ese documento, no hay corriente estructurante que sirva de ancla.

Ninguna de las cuatro combinaciones que el contrato permite hoy representa el caso de `dubuissonhaiti` sin falsear el dictamen académico o sin perder información:

- Asignar `recorrido` a C5 o C9: falso — ninguna de las dos organiza el argumento completo (así lo estableció la ampliación probatoria sobre el capítulo 3, con prueba de retirada, prueba de direccionalidad y prueba de cobertura).
- Declarar `frontera_constitutiva(c5, c9)`: falso — la decisión académica estableció expresamente que no hay dependencia recíproca suficiente entre ambas; operan en segmentos distintos del libro.
- Declarar `sintesis_multicorriente`: falso — exige tres o más corrientes estructurando irreductiblemente, y aquí no hay una tercera corriente en ese papel; C7 fue evaluada y descartada como condición histórica, no como corriente estructurante.
- Declarar `sin_principal_clasificable` con `recorridos_sec: []`: académicamente incompleto — es la representación correcta de la ausencia de principal, pero borra a C5 y C9 del dato, contradiciendo el propio dictamen, que las mantiene como secundarias académicas.

La quinta combinación —`recorrido: null` sin ninguna arquitectura especial declarada— está bloqueada por `RECORRIDO_NULL_SIN_ARQUITECTURA` en cuanto `estado_recorrido` pasa a `"confirmado"`, y con razón: esa combinación es indistinguible de una obra no evaluada.

## 5. Diferencia entre `rebeldestiny` y `dubuissonhaiti`

**Caso A — `rebeldestiny`.** No hay principal clasificable ni corrientes secundarias que deban conservarse. El dictamen metodológico estableció retirada parcial (no destructiva) tanto para C3 como para C9, pero no las declaró secundarias académicas: lo que sostiene la obra, según ese dictamen, es un principio transversal (persistencia y reinterpretación de africanismos) sin corriente propia, no dos corrientes subordinadas operando en distintos tramos del argumento. `recorridos_sec: []` no es una omisión de este caso: es su contenido correcto.

**Caso B — `dubuissonhaiti`.** No hay principal clasificable, pero sí existen C5 y C9 como dimensiones estructurantes parciales, cada una con evidencia textual propia, cada una organizando segmentos identificables del libro (C5: capítulos 1–2; C9: capítulos 4–5, con presencia parcial en el 5), y cada una sometida a su propia prueba de retirada en la decisión académica. `recorridos_sec: []` en este caso sí sería una omisión: borraría del dato una parte del dictamen que Dirección Académica ratificó expresamente.

La diferencia no es de grado sino de tipo: en A, la prueba de retirada parcial establece que ninguna corriente candidata alcanza estatuto de secundaria académica; en B, la misma prueba establece lo contrario para dos corrientes. Tratar B como una variante trivial de A —dejando `recorridos_sec: []` también aquí— sería forzar el dato hacia el precedente más simple en lugar de hacia la evidencia. El contrato debe distinguir estos dos casos, no fusionarlos.

## 6. Alternativas consideradas

### Opción 1 — Extender `sin_principal_clasificable` para admitir `recorridos_sec` no vacío

Mantener el tipo ya existente y su forma `{tipo: "sin_principal_clasificable", recorridos: []}` sin cambios, y levantar, solo bajo condiciones explícitas, la exigencia de `recorridos_sec: []`. Redefine el sentido de "secundaria" en este contexto: no como corriente subordinada a un principal, sino como dimensión sustantiva parcial subordinada a la arquitectura declarada de la obra —que en este caso es, precisamente, la ausencia demostrada de principal más el principio organizador extra-taxonómico que la reserva conceptual registra.

### Opción 2 — Crear una arquitectura técnica diferenciada

Un cuarto valor de `tipo` (por ejemplo, aunque no se adopta, `sin_principal_con_dimensiones`), paralelo pero distinto de `sin_principal_clasificable`, exclusivamente para obras que además conservan dimensiones parciales.

### Opción 3 — Separar "secundarias" de "dimensiones sustantivas"

Mantener `sin_principal_clasificable` exactamente como está —`recorridos_sec: []` sin excepción— y registrar C5 y C9 en un campo distinto, nuevo, que no comparta nombre ni validación con `recorridos_sec`.

## 7. Evaluación comparativa

| criterio | Opción 1 (extender) | Opción 2 (nueva arquitectura) | Opción 3 (campo nuevo) |
|---|---|---|---|
| Fidelidad académica | Alta — representa exactamente el dictamen, sin inventar principal ni frontera | Alta — mismo resultado, por otra vía | Alta — mismo resultado, por otra vía |
| No pérdida de información | Alta — C5 y C9 quedan en el dato | Alta | Alta |
| Parsimonia | Alta — reutiliza campo, forma de objeto y patrón (`frontera` + secundarias) ya ejercitado seis veces en el corpus | Baja — duplica casi íntegramente las seis condiciones de `sin_principal_clasificable` (§6 del documento que la creó) en una cuarta categoría que solo difiere en un campo | Baja — introduce un campo estructuralmente idéntico a `recorridos_sec` (arreglo de hasta dos ids de corriente, con trazabilidad documental) bajo otro nombre |
| Generalización | Alta — cualquier caso futuro con el mismo perfil usa la misma regla | Media — cada figura nueva es un precedente más que mantener y explicar | Media — exige mantener dos campos con semántica casi idéntica |
| Compatibilidad retrospectiva | Alta si se acota bien (ver §14) — `rebeldestiny` y `sharpewake` no cambian | Alta — no toca los tipos existentes | Alta — no toca `recorridos_sec` |
| Validabilidad | Alta — el cambio es la eliminación de una condición sobrante; la validación genérica de `recorridos_sec` (máximo dos, ids válidos) ya existe y no cambia | Media — exige una función de validación nueva casi idéntica a la existente | Media — exige validar un campo nuevo con las mismas reglas que ya tiene `recorridos_sec` |

La objeción que en su momento hizo descartar esta misma vía para `sin_principal_clasificable` —"no hay ninguna corriente estructurante que sirva de ancla a una secundaria"— sigue siendo válida como advertencia, pero no como veto: es correcta en que el ancla no puede ser "otra corriente C1–C10", y por eso la Opción 1, tal como se especifica en el §8 y el §9, no ancla la dimensión parcial a una corriente principal encubierta, sino a la arquitectura declarada de la obra —que en `sin_principal_clasificable` es, por definición, la comprobación cerrada de que ninguna corriente organiza el conjunto, más el principio organizador propio que la reserva conceptual nombra. Esa arquitectura ya es, ella misma, una decisión positiva (§1 del documento monográfico: "es una decisión positiva sobre la arquitectura de la obra", dicho allí de frontera constitutiva pero aplicable en su forma a esta figura); puede servir de ancla exactamente como la relación bilateral sirve de ancla en frontera constitutiva.

## 8. Solución normativa seleccionada

**Opción 1**, con la precisión del §7: extender `sin_principal_clasificable` para admitir `recorridos_sec` no vacío, únicamente cuando una decisión académica explícita documente cada dimensión de forma individual —con su propia prueba de retirada aplicada en dos escalas (destructiva o fuertemente degradante dentro del segmento que organiza; no destructiva para el principio organizador del libro completo) y su propio fundamento textual—, exactamente en el mismo régimen que el §4, regla 5, del contrato ya aprueba para frontera constitutiva ("puede coexistir con recorridos secundarios adicionales únicamente cuando una decisión académica expresa así lo establezca").

No se crea un cuarto valor de `arquitectura_recorrido.tipo`. No se crea un campo nuevo. Se modifica una sola condición, en un solo lugar del validador, y se generaliza en un solo párrafo la definición de "recorrido secundario" del §10 del contrato.

## 9. Definición formal de la figura

Se sustituye la cláusula del §5 de `decision-normativa-sin-principal-clasificable-atlas-2.md` que fijaba "`recorridos_sec: []` sin excepción" por la siguiente:

> Cuando `arquitectura_recorrido.tipo` es `sin_principal_clasificable`, `recorridos_sec` admite entre cero y dos elementos. Es cero cuando la decisión académica no reconoce ninguna corriente como dimensión estructurante parcial (caso `rebeldestiny`). Es no vacío cuando la misma decisión académica que establece la ausencia de principal reconoce, además, una o dos corrientes como dimensiones sustantivas parciales no principales (caso `dubuissonhaiti`), documentadas en `fuente_recorrido`. Una corriente solo puede registrarse así cuando la decisión académica demuestra, conjuntamente: (1) sustantividad segmentaria — organiza un segmento identificable y relevante del argumento; (2) retirada segmentaria destructiva o fuertemente degradante — eliminarla de ese segmento destruye o deteriora sustancialmente su explicación; (3) retirada global no destructiva — eliminarla no destruye el principio organizador del libro completo; (4) fundamento textual individual; (5) descarte previo de que esa corriente sea principal; (6) descarte previo de frontera constitutiva y de síntesis multicorriente. La distinción entre (2) y (3) sostiene toda la figura: `destructiva en su dominio` no equivale a `destructiva para la obra completa`; es precisamente la coexistencia de ambas —indispensable en su segmento, prescindible en el conjunto— la que separa una dimensión sustantiva parcial de un principal encubierto. En ningún caso estas corrientes se tratan como principal encubierto, ni autorizan por sí solas declarar frontera constitutiva o síntesis multicorriente si esas arquitecturas ya fueron descartadas conforme al §6 de este documento.

Se generaliza en consecuencia el §10 del contrato (`decision-normativa-contrato-recorridos-fase-5a-d.md`), sin reescribir su texto original sino añadiendo esta precisión como addendum:

> Un recorrido secundario permanece subordinado, en todos los casos, a la arquitectura interpretativa que la decisión académica establece para la obra. Esa arquitectura es, en el caso ordinario, el recorrido principal; en frontera constitutiva, la relación bilateral entre los dos recorridos que la constituyen; y en `sin_principal_clasificable`, la comprobación cerrada de ausencia de principal, junto con el principio organizador propio de la obra que la reserva conceptual registra. El ancla cambia de naturaleza según la arquitectura; la subordinación no deja de existir en ningún caso.

## 10. Campos afectados

- `recorridos_sec`: se relaja, exclusivamente bajo `arquitectura_recorrido.tipo === "sin_principal_clasificable"`, la exigencia de arreglo vacío. Su validación genérica (máximo dos elementos, forma `c1`…`c10`, sin repetir el principal) no cambia.
- `scripts/validar-atlas.mjs`, función `validateRecorridoArchitecture`: se elimina una condición (línea 415 actual). No se añade código nuevo; no se toca ninguna otra rama de la función.

No se modifican: `recorrido`, `arquitectura_recorrido` (ni su forma ni sus otros dos tipos), `estado_recorrido`, `fuente_recorrido`, `revision`, ni ningún campo territorial o de fenómenos.

## 11. Invariantes

Válidos para toda obra con `arquitectura_recorrido.tipo === "sin_principal_clasificable"`, sin excepción, en ambos casos (con o sin dimensiones):

1. `arquitectura_recorrido.recorridos` tiene longitud cero. Ninguna corriente es estructurante en el sentido arquitectónico que exige frontera o síntesis.
2. `recorrido` es `null`.
3. `estado_recorrido` es `"confirmado"`.
4. `fuente_recorrido` no está vacío.
5. `recorridos_sec` tiene longitud entre cero y dos.
6. Si `recorridos_sec` tiene longitud mayor que cero, la decisión académica citada en `fuente_recorrido` documenta, para cada elemento, las seis condiciones del §9: sustantividad segmentaria, retirada segmentaria destructiva o fuertemente degradante, retirada global no destructiva, fundamento textual individual, descarte de principal y descarte de frontera/síntesis. La distinción entre retirada segmentaria y retirada global no es opcional: sin ella, no hay forma de separar una dimensión sustantiva parcial de un principal disfrazado. Esta condición es académica, no mecanizable en su totalidad por el validador —en el mismo sentido en que ya son inautomatizables dos de las seis condiciones de `sin_principal_clasificable` fijadas en el §11 de `decision-normativa-sin-principal-clasificable-atlas-2.md`.
7. Antes de declarar `recorridos_sec` no vacío bajo esta arquitectura, deben quedar descartadas expresamente `frontera_constitutiva` y `sintesis_multicorriente` para esa obra, conforme a las condiciones 4 y 5 del §6 de `decision-normativa-sin-principal-clasificable-atlas-2.md`, que esta decisión no modifica.

## 12. Casos válidos

```json
{
  "id": "rebeldestiny",
  "recorrido": null,
  "recorridos_sec": [],
  "arquitectura_recorrido": { "tipo": "sin_principal_clasificable", "recorridos": [] },
  "estado_recorrido": "confirmado",
  "fuente_recorrido": [
    "decision-academica-rebeldestiny-p3-etapa-2-3i.md",
    "dictamen-metodologico-rebeldestiny-p3-etapa-2-3i.md",
    "decision-normativa-sin-principal-clasificable-atlas-2.md"
  ]
}
```

```json
{
  "id": "dubuissonhaiti",
  "recorrido": null,
  "recorridos_sec": ["c5", "c9"],
  "arquitectura_recorrido": { "tipo": "sin_principal_clasificable", "recorridos": [] },
  "estado_recorrido": "confirmado",
  "fuente_recorrido": [
    "lectura-dubuissonhaiti-p3-etapa-2-3j.md",
    "ampliacion-probatoria-dubuissonhaiti-cap3-p3-etapa-2-3j.md",
    "decision-academica-dubuissonhaiti-p3-etapa-2-3j.md",
    "decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md"
  ]
}
```

Este segundo bloque se presenta como ejemplo de forma técnica válida bajo la norma que aquí se propone. Su implementación efectiva en `datos-atlas.json` no está autorizada por este documento (§9 de la regla de implementación, más abajo, y ver Regla de implementación de Dirección Académica).

## 13. Casos inválidos

```json
{ "recorridos_sec": ["c5", "c9", "c4"] }
```
Inválido: excede el máximo de dos, regla general de `recorridos_sec` no tocada por esta decisión.

```json
{
  "arquitectura_recorrido": { "tipo": "sin_principal_clasificable", "recorridos": [] },
  "recorridos_sec": ["c5", "c9"],
  "estado_recorrido": "pendiente"
}
```
Inválido: `sin_principal_clasificable` sigue exigiendo `estado_recorrido: "confirmado"` sin excepción; esta decisión no toca esa condición.

```json
{
  "arquitectura_recorrido": { "tipo": "sin_principal_clasificable", "recorridos": [] },
  "recorridos_sec": ["c5", "c9"],
  "fuente_recorrido": ["a01-generado.json"]
}
```
Inválido en sentido académico, aunque el validador no pueda impedirlo por sí solo: `fuente_recorrido` no documenta individualmente las seis condiciones del §9 para C5 ni para C9 —en particular la doble escala segmentaria/global que distingue una dimensión sustantiva parcial de un principal disfrazado. Usar esta figura para preservar corrientes sin sustentarlas una por una repite exactamente el atajo que `decision-normativa-sin-principal-clasificable-atlas-2.md` (§11) ya prohíbe para el caso general.

```json
{
  "arquitectura_recorrido": { "tipo": "sin_principal_clasificable", "recorridos": [] },
  "recorridos_sec": ["c5", "c9"]
}
```
Inválido si, examinado el caso, C5 y C9 en realidad mantienen dependencia recíproca suficiente para constituir frontera: usar `recorridos_sec` bajo esta figura para evitar declarar `frontera_constitutiva` cuando corresponde es el riesgo específico que el invariante 7 (§11) busca prevenir.

## 14. Compatibilidad retrospectiva

Verificación programática sobre `datos-atlas.json`: `sin_principal_clasificable` la usa hoy una sola obra, `rebeldestiny`, con `recorridos_sec: []`. Cero está dentro del rango nuevo (0 a 2), de modo que `rebeldestiny` sigue siendo válida sin ningún cambio en su dato.

`frontera_constitutiva` la usan hoy nueve obras (seis de ellas con `recorridos_sec` no vacío, entre ellas `sharpewake` no —`sharpewake` tiene `recorridos_sec: []`—). El cambio propuesto no toca la rama `frontera_constitutiva` de la función de validación: estructuralmente, el bloque de código que se modifica solo se ejecuta cuando `arquitectura.tipo === "sin_principal_clasificable"`, y `sharpewake` nunca entra en ese bloque.

`sintesis_multicorriente` la usan dos obras; tampoco entra en el bloque modificado.

Las 166 obras con `recorrido: null` y `arquitectura_recorrido: null` (todas `sin_evaluar` o `pendiente`, ninguna `confirmado`) no se ven afectadas: la regla `RECORRIDO_NULL_SIN_ARQUITECTURA` no cambia.

El cambio propuesto es estrictamente una relajación de una condición (de "debe ser exactamente vacío" a "debe tener como máximo dos elementos", que ya es la regla general). Una relajación no puede convertir en inválida ninguna obra que ya era válida: matemáticamente, todo arreglo que cumplía "longitud cero" sigue cumpliendo "longitud entre cero y dos."

## 15. Cambios necesarios en el validador

Propuesta conceptual, no ejecutada en esta etapa. En `scripts/validar-atlas.mjs`, dentro de `validateRecorridoArchitecture`, en el bloque `if (arquitectura.tipo === "sin_principal_clasificable")`:

Se elimina la condición:

```js
if (!Array.isArray(recorridosSec) || recorridosSec.length !== 0) {
  report.error("SIN_PRINCIPAL_CLASIFICABLE", `${work.id}: sin_principal_clasificable exige recorridos_sec: [] — no autoriza secundarias contextuales.`);
}
```

No se sustituye por una condición nueva de forma: la validación genérica de `recorridos_sec` (máximo dos elementos, ids válidos, sin repetir el principal —trivialmente cierto aquí porque el principal es siempre `null`—), ya presente al inicio de la función, sigue aplicándose sin cambios y es suficiente para la parte de esta regla que es mecanizable.

Se actualiza el comentario que precede al bloque (líneas 403–408 actuales), que hoy dice "no autoriza recorridos_sec... porque aquí no hay recorrido principal al que una secundaria pueda subordinarse", para reflejar la nueva regla: la subordinación ya no exige un recorrido principal, exige una arquitectura declarada con evidencia individual por dimensión (ver §9).

No se ejecuta el validador extendido en esta etapa. Cuando se autorice, debe correrse sobre el corpus completo antes de tocar cualquier dato, exactamente como se hizo al introducir `sin_principal_clasificable` (0 errores nuevos verificados entonces sobre 254 obras).

## 16. Prueba conceptual con `rebeldestiny`

`recorrido: null`, `recorridos_sec: []`, `arquitectura_recorrido: {tipo: "sin_principal_clasificable", recorridos: []}`, `estado_recorrido: "confirmado"`, `fuente_recorrido` no vacío. Bajo la regla nueva: `recorridos_sec.length` es 0, dentro del rango 0–2. Todas las demás condiciones, sin cambio, se cumplen igual que hoy. `rebeldestiny` sigue siendo válida sin modificar su dato.

## 17. Prueba conceptual con `dubuissonhaiti`

Representación propuesta (§12): `recorrido: null`, `recorridos_sec: ["c5", "c9"]`, `arquitectura_recorrido: {tipo: "sin_principal_clasificable", recorridos: []}`, `estado_recorrido: "confirmado"`, `fuente_recorrido` citando la lectura probatoria, la ampliación sobre el capítulo 3, la decisión académica y esta misma decisión normativa. Bajo la regla nueva: `arquitectura.recorridos.length === 0` ✓; `recorrido === null` ✓; `recorridos_sec.length === 2`, dentro del rango 0–2 ✓ (antes de esta decisión, este mismo dato producía error `SIN_PRINCIPAL_CLASIFICABLE`); `estado_recorrido === "confirmado"` ✓; `fuente_recorrido` no vacío ✓. La condición académica del invariante 6 (§11) se cumple porque la decisión académica de `dubuissonhaiti` ya documenta, en sus §5 y §6, las seis condiciones del §9 para C5 y para C9: cada una organiza un segmento identificable (capítulos 1–2 para C5; capítulo 4, con presencia parcial en el 5, para C9); retirar cada una de su propio segmento es destructivo para la explicación de ese segmento; retirar cualquiera de las dos del libro completo no es destructivo para el principio organizador general, que sigue funcionando —fracturas coloniales/institucionales → precariedad → improvisación/rasanblaj/imaginación radical → producción de lugar y de futuro habitables— sin necesitar a ninguna de las dos en particular. `dubuissonhaiti` puede representarse sin falsear el dictamen y sin perder a C5 ni a C9.

## 18. Prueba conceptual con `sharpewake`

`arquitectura_recorrido.tipo === "frontera_constitutiva"`. El bloque modificado por esta decisión (§15) es exclusivo de la rama `arquitectura.tipo === "sin_principal_clasificable"`; la ejecución de `validateRecorridoArchitecture` sobre `sharpewake` nunca entra en esa rama. `sharpewake` sigue rigiéndose íntegramente por §4 del contrato (exactamente dos recorridos en `arquitectura_recorrido.recorridos`, sin recorrido principal), sin ninguna intervención de esta decisión. No queda absorbida por la nueva regla porque estructuralmente no puede llegar a evaluarla.

## 19. Riesgos

**Uso de esta figura para evitar el trabajo de descartar frontera o síntesis con rigor.** Mitigado por el invariante 7 (§11): declarar `recorridos_sec` no vacío bajo `sin_principal_clasificable` exige haber descartado ya, con prueba, frontera constitutiva y síntesis multicorriente —exigencia que esta decisión no crea, ya estaba en el §6 de `decision-normativa-sin-principal-clasificable-atlas-2.md`, y que ahora se reafirma expresamente como condición previa también para el caso con dimensiones.

**Ambigüedad semántica de "recorrido secundario" al dejar de anclarse siempre a un principal.** Mitigado por la generalización explícita del §9: la subordinación no desaparece, cambia de ancla según la arquitectura declarada, y esa arquitectura queda siempre registrada en el propio dato (`arquitectura_recorrido.tipo`), de modo que nunca hay que inferir a qué está subordinada una secundaria dada.

**El validador comprueba forma, no sustancia.** No es un riesgo nuevo: ya es una limitación reconocida del contrato vigente para dos de las seis condiciones de `sin_principal_clasificable` (§11 de ese documento). Esta decisión no reduce la vigilancia académica existente; la extiende al mismo nivel de exigencia documental que ya rige el resto de la figura.

**Proliferación futura por uso laxo del precedente.** Mitigado reafirmando aquí la regla ya vigente en §11 de `decision-normativa-sin-principal-clasificable-atlas-2.md`: ningún caso futuro se clasifica por analogía con `dubuissonhaiti` ni con `rebeldestiny`; cada uno exige su propia lectura probatoria y su propia prueba de retirada.

## 20. Dictamen normativo final

Se aprueba, para someter a ratificación de Dirección Académica, la **Opción 1**: extensión puntual de `sin_principal_clasificable` para admitir `recorridos_sec` de cero a dos elementos, en lugar de exigir arreglo vacío sin excepción, condicionada en todos los casos no vacíos a documentación individual de cada dimensión —las seis condiciones del §9: sustantividad segmentaria, retirada segmentaria destructiva o fuertemente degradante, retirada global no destructiva, fundamento textual, descarte de principal y descarte de frontera/síntesis— en `fuente_recorrido`, y condicionada además al descarte previo y expreso de frontera constitutiva y síntesis multicorriente para esa obra.

Se rechazan la Opción 2 (nueva arquitectura técnica) por falta de parsimonia —duplicaría casi íntegramente las condiciones ya existentes de `sin_principal_clasificable` para diferenciarse en un solo campo— y la Opción 3 (campo nuevo) por redundancia estructural con `recorridos_sec`, que ya tiene la forma, el límite de cardinalidad y el régimen de trazabilidad que el caso necesita.

Ningún caso previamente clasificado del corpus (`rebeldestiny`, `sharpewake`, ni ninguna de las 254 obras existentes) queda afectado por este cambio, verificado en el §14. El cambio propuesto en el validador (§15) es la eliminación de una sola condición, sin código nuevo.

Regla de implementación: esta decisión no modifica `datos-atlas.json`, no modifica `datos-atlas.js`, no modifica todavía `scripts/validar-atlas.mjs`. La representación técnica de `dubuissonhaiti` mostrada en el §12 y probada en el §17 queda propuesta, no implementada. La siguiente etapa, sujeta a autorización conjunta de Dirección Académica, es: (1) ajustar el contrato y el validador conforme al §15; (2) implementar `dubuissonhaiti` conforme al §12; (3) ejecutar los cuatro validadores; (4) comprobar que `rebeldestiny`, `sharpewake` y el resto del corpus siguen pasando sin error nuevo.

```
DECISION_NORMATIVA_RATIFICADA
DISTINCION_RETIRADA_SEGMENTARIA_GLOBAL_CORREGIDA
OPCION_1_SELECCIONADA — EXTENSION_DE_SIN_PRINCIPAL_CLASIFICABLE
NO_CREA_CUARTO_TIPO_DE_ARQUITECTURA_RECORRIDO
VALIDADOR_PENDIENTE_DE_AJUSTE
DUBUISSONHAITI_NO_IMPLEMENTADA_TODAVIA
```
