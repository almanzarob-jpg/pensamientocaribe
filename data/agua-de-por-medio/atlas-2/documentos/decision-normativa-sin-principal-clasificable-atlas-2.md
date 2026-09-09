# Decisión normativa · `SIN_PRINCIPAL_CLASIFICABLE` · Atlas 2.0 · Etapa 2.3J

**Instancia que decide:** Dirección Académica de Pensamiento Caribe. **Origen:** adjudicación metodológica de `rebeldestiny` (`dictamen-metodologico-rebeldestiny-p3-etapa-2-3i.md`), P3-B. **Naturaleza:** extensión puntual del contrato `decision-normativa-contrato-recorridos-fase-5a-d.md` (Fase 5A-D), registrada como addendum §26 de ese documento. No reabre ni reclasifica ninguna obra distinta de `rebeldestiny`.

## 1. Problema

El contrato vigente define `recorrido principal` como la corriente que organiza la arquitectura causal, interpretativa o valorativa central del argumento de una obra (§9), y reserva el valor `null` del campo `recorrido` exclusivamente para los casos de arquitectura especial: frontera constitutiva (§4) o síntesis multicorriente (§6). No existe una cuarta posibilidad prevista para una obra que ha sido evaluada por completo, con evidencia suficiente, y para la cual: ninguna corriente C1–C10 satisface la definición de principal; no hay dos corrientes conjuntamente indispensables (frontera); no hay tres o más corrientes estructurando irreductiblemente el argumento (síntesis); y sí existe, en cambio, una reserva conceptual confirmada — un principio transversal que ninguna corriente disponible nombra por sí sola.

`rebeldestiny` es ese caso. El dictamen metodológico ya estableció, mediante prueba de retirada, que ni C3 ni C9 organizan la arquitectura general del argumento (retirada parcial, no destructiva, en ambos casos), que no hay frontera constitutiva defendible entre ellas (asimetría de retirada, ya establecida en la lectura original) y que tampoco hay síntesis multicorriente (esta exige corrientes existentes estructurando irreductiblemente, y lo que hay aquí es, en cambio, un principio transversal sin corriente propia). Forzar cualquiera de las cuatro formas previstas por el contrato —principal, frontera, síntesis, o dejar el campo simplemente vacío sin más— produciría una de dos fallas: una clasificación falsa, o una entrada indistinguible de una obra no evaluada.

## 2. Evidencia que demuestra la laguna del contrato

Tres piezas de evidencia, ya reunidas en el dictamen metodológico, se ratifican aquí como base de esta decisión normativa:

**Textual.** El contrato dice, sin ambigüedad, que `recorrido` admite `null` "cuando la obra tenga arquitectura especial" (§9), y que la arquitectura especial tiene exactamente dos formas: frontera constitutiva y síntesis multicorriente (§4, §6, §8). No hay una tercera forma prevista, y no hay tampoco una previsión alternativa para "ninguna corriente clasifica y ninguna arquitectura especial aplica".

**Empírica.** Se recorrieron programáticamente las 254 obras de `datos-atlas.json`. La combinación `recorrido: null` + `arquitectura_recorrido: null` aparece en 166 obras, y en la totalidad de ellas `estado_recorrido` es `sin_evaluar` (94) o `pendiente` (72) por falta de lectura o de decisión — nunca por hallazgo académico cerrado de ausencia de principal. No existe una sola obra en el corpus con esa combinación y `estado_recorrido: confirmado`. No hay precedente que puedan seguirse ni un patrón de facto que puedan formalizarse: la laguna es real, no solo teórica.

**De control técnico.** `scripts/validar-atlas.mjs`, antes de esta decisión, no verificaba en absoluto los campos `recorrido`, `recorridos_sec`, `arquitectura_recorrido` ni `estado_recorrido` — el propio validador lo advertía ("los campos 2.0 se validan si aparecen, pero todavía no son obligatorios"). Esto significa que, de implementarse la salida académicamente correcta para `rebeldestiny` sin resolver antes esta laguna, ni el contrato ni el validador la reconocerían como una forma válida, y quedaría indistinguible, para cualquier lectura automatizada del corpus, de una obra simplemente no evaluada.

## 3. Alternativas consideradas

Se evaluaron, sin presuponer cuál debía prevalecer, las cuatro rutas de intervención y las cuatro variantes de solución que planteó el encargo.

**Rutas de intervención sobre el contrato.**

*(A) Sin modificar el contrato.* Descartada. Ya se demostró en el §2 que ninguna combinación disponible hoy (`recorrido` en c1–c10, o `null` bajo frontera/síntesis, o el par `null`/`null` reservado de facto a lo no evaluado) representa el hallazgo sin ambigüedad. No modificar el contrato obligaría a elegir entre una corriente falsa o una entrada confundible con "no evaluado" — las dos fallas que el encargo pidió evitar expresamente.

*(B) Extensión mínima del contrato.* Adoptada. Ver §5.

*(C) Nuevo estado de `estado_recorrido`.* Evaluada y descartada como forma principal de solución (ver Opción A de la siguiente lista, que es su desarrollo concreto).

*(D) Campo o anomalía explícita ya compatible con la arquitectura existente.* Evaluada y adoptada como la forma concreta de (B): el campo `arquitectura_recorrido` ya existe exactamente para declarar que una obra no sigue el caso ordinario de principal-más-secundarias. Ver §5.

**Variantes de solución (opciones A–D del encargo).**

*Opción A — nuevo valor de `estado_recorrido` (`"sin_principal_clasificable"`), manteniendo `recorrido: null` y `arquitectura_recorrido: null`.* Se descarta. `estado_recorrido` es, en el contrato vigente, una dimensión de **proceso** (¿existe decisión formal o no?), no de **resultado** (¿qué clasificación arrojó esa decisión?) — así lo fija expresamente el §11 del contrato: "Estado y revisión son dimensiones distintas (...) lo confirmado es la clasificación, lo pendiente es una incidencia sobre otro plano del registro". Una obra con frontera constitutiva o síntesis multicorriente no recibe un `estado_recorrido` propio distinto de `confirmado`/`pendiente`; su resultado especial se declara en `arquitectura_recorrido`, no en `estado_recorrido`. Introducir aquí un quinto valor de estado quebraría esa separación de planos ya establecida, y además dejaría el campo `arquitectura_recorrido` en `null` — es decir, no eliminaría la ambigüedad textual del §9 sobre cuándo `recorrido: null` es válido: seguiría sin haber, en el campo que el contrato usa para eso, ninguna marca de que la obra tiene arquitectura especial.

*Opción B — mantener `estado_recorrido` en su vocabulario vigente y añadir una marca explícita de anomalía o reserva conceptual.* Es la dirección correcta, pero como la planteó el encargo (una "marca" no situada) era subespecificada: no bastaba con "añadir algo", había que decidir dónde. La Opción C, abajo, es esta misma idea llevada a su lugar natural en la arquitectura existente.

*Opción C — ampliar la semántica de `recorrido: null` a los casos evaluados sin corriente clasificable, siempre que exista un estado diferenciado.* Adoptada, con la precisión siguiente: no se amplía la semántica de `recorrido: null` en el vacío — se amplía, como el propio §9 ya prevé en su redacción ("o `null` cuando la obra tenga arquitectura especial"), la lista de arquitecturas especiales que autorizan ese `null`. `arquitectura_recorrido` ya es, en el contrato vigente, el campo que registra por qué una obra no tiene principal en el sentido ordinario; añadirle un tercer valor de `tipo` no es una ampliación de semántica ambigua, es usar el campo para lo que ya existe. El "estado diferenciado" que la opción exige como condición se resuelve exigiendo `estado_recorrido: "confirmado"` (nunca `pendiente` ni `sin_evaluar`) para este tercer tipo — así solo puede aparecer en un caso académicamente cerrado.

*Opción D — otra solución ya existente en la arquitectura.* Se revisó el precedente `wynterblackmetamorphosis` (`C8_APLICACIÓN_CON_RESERVA_CONCEPTUAL = SÍ`) como posible mecanismo ya disponible. No aplica: ese mecanismo resuelve un caso distinto — una corriente principal que sí organiza el argumento general (pasa la prueba de retirada destructiva) pero cuyo vocabulario no captura con precisión el concepto propio de la obra. Es una reserva sobre una clasificación válida, no una ausencia de clasificación. No hay, fuera de eso, ningún mecanismo documentado que cubra el caso de `rebeldestiny`.

## 4. Criterio de selección

Se prefirió, entre las alternativas viables, la de menor intervención capaz de satisfacer simultáneamente cinco condiciones, en el orden en que el encargo las planteó: verdad académica (la representación no puede exigir elegir una corriente falsa), trazabilidad (debe quedar registrado qué se decidió, cuándo y por qué), compatibilidad con los datos existentes (cero obras del corpus deben verse afectadas), validación automática (el validador debe poder distinguir un uso legítimo de uno indebido) y capacidad futura de búsqueda y visualización (el frontend debe poder tratar este caso como una categoría, no como un vacío de datos).

La Opción A (nuevo estado) fue descartada precisamente por este criterio: introducía una distinción nueva en un plano del contrato (`estado_recorrido`) que el propio contrato ya había decidido mantener separado de la clasificación (§11), y no resolvía sola la ambigüedad de `recorrido: null`. La Opción C (extender `arquitectura_recorrido`), en cambio, reutiliza literalmente un campo, una forma de objeto (`{tipo, recorridos}`) y una regla de habilitación de `null` que ya existen y ya están ejercitadas en 11 obras del corpus — es la extensión de menor superficie posible.

## 5. Solución adoptada

Se añade un tercer valor de `tipo` al campo `arquitectura_recorrido`: **`sin_principal_clasificable`**, junto a los ya existentes `frontera_constitutiva` y `sintesis_multicorriente`. Su forma:

```json
"arquitectura_recorrido": { "tipo": "sin_principal_clasificable", "recorridos": [] }
```

El arreglo `recorridos` queda vacío por definición: a diferencia de frontera y síntesis, aquí ninguna corriente participa como estructurante — eso es precisamente lo que la categoría declara. Se mantiene el mismo objeto `{tipo, recorridos}` que ya usan los otros dos tipos, no una forma nueva, para que el validador y cualquier lectura futura del campo puedan tratar los tres tipos con la misma lógica estructural.

Cuando `arquitectura_recorrido.tipo` es `sin_principal_clasificable`, el resto del bloque queda fijado así: `recorrido: null` (autorizado por la extensión del §9, ver §7); `recorridos_sec` puede llevar cero, uno o dos elementos si existen dimensiones contextuales académicamente significativas que no alcancen el umbral de estructurantes — no es el caso de `rebeldestiny`, que no tiene secundarias formales, pero la categoría no lo prohíbe en general, igual que no lo prohíbe frontera constitutiva (`schwartz_seaofstorms` es frontera C6/C7 con dos secundarias); `estado_recorrido: "confirmado"` sin excepción; `fuente_recorrido` no vacío.

## 6. Definición formal de `SIN_PRINCIPAL_CLASIFICABLE`

Una obra se clasifica mediante `arquitectura_recorrido.tipo = "sin_principal_clasificable"` cuando, y solo cuando, se cumplen conjuntamente las seis condiciones siguientes, cada una con evidencia documental verificable:

1. La obra fue evaluada mediante lectura probatoria suficiente, no una lectura parcial ni una impresión general.
2. Se aplicó la prueba de retirada a cada corriente candidata razonable — no a una sola por conveniencia — y ninguna produjo retirada destructiva del argumento general.
3. Ninguna corriente C1–C10 satisface, en consecuencia, la definición de recorrido principal del §9 del contrato.
4. Se descartó expresamente `FRONTERA_CONSTITUTIVA` con la prueba de retirada bilateral que exige el §4.
5. Se descartó expresamente `SINTESIS_MULTICORRIENTE` verificando que no hay tres o más corrientes existentes estructurando irreductiblemente el argumento (si las hubiera, esa es la categoría que corresponde, no esta).
6. Existe una decisión académica explícita, formalizada en un documento identificable, que registra además la `RESERVA_CONCEPTUAL` correspondiente cuando la hay.

La categoría no es un tercer tipo de vacío de contenido — ese ya existe y se llama `RESERVA_CONCEPTUAL`, y se sigue registrando exactamente donde se registraba (§9 más abajo). `SIN_PRINCIPAL_CLASIFICABLE` es, exclusivamente, la representación en el campo `arquitectura_recorrido` del hecho de que ninguna corriente puede recibir honestamente el campo `recorrido`.

## 7. Cambios exactos en el contrato

Se registran como addendum §26 de `decision-normativa-contrato-recorridos-fase-5a-d.md`, sin alterar el texto original de los §1–25:

- Extensión del §8 (forma del campo `arquitectura_recorrido`): se añade el tercer valor de `tipo` con su forma de objeto, junto a los dos ya aprobados.
- Extensión del §9 (recorrido principal): la excepción "`null` cuando la obra tenga arquitectura especial" pasa a cubrir explícitamente los tres tipos de arquitectura especial, no solo frontera y síntesis.
- No se toca el §4 (frontera constitutiva), el §6 (síntesis multicorriente) ni el §11 (estados de `estado_recorrido`): esta decisión no crea un quinto estado (ver §3, Opción A descartada) y no reinterpreta las dos arquitecturas ya aprobadas.

## 8. Cambios exactos en validadores

Se añadió a `scripts/validar-atlas.mjs` una función `validateRecorridoArchitecture(work)`, invocada desde `validateV2Work` junto a las demás validaciones de campos 2.0. Comprueba, para toda obra donde los campos estén presentes:

- `recorrido`, si no es `null`, debe tener forma `c1`…`c10`.
- `recorridos_sec` debe ser un arreglo de máximo dos elementos, cada uno con forma `c1`…`c10`, sin repetir el principal.
- `estado_recorrido`, si está presente, debe ser uno de los cuatro valores aprobados por el contrato (`confirmado`, `preliminar`, `pendiente`, `sin_evaluar`).
- `arquitectura_recorrido`, si no es `null`, debe tener `tipo` en el conjunto de los tres valores aprobados y `recorridos` como arreglo de ids válidos; `frontera_constitutiva` exige exactamente dos; `sintesis_multicorriente` exige tres o más.
- `sin_principal_clasificable` exige además, específicamente: `recorridos` vacío, `recorrido: null`, `estado_recorrido: "confirmado"` y `fuente_recorrido` no vacío — las cuatro condiciones que impiden que la categoría se use como atajo de una lectura incompleta.
- Fuera de arquitectura especial, `recorrido: null` con `estado_recorrido: "confirmado"` es ahora un **error** (`RECORRIDO_NULL_SIN_ARQUITECTURA`): el contrato nunca permitió esa combinación, solo no existía código que la verificara.

Se ejecutó el validador extendido sobre el corpus completo antes de tocar ningún dato de `rebeldestiny`: **0 errores nuevos** sobre las 254 obras existentes (resultado idéntico al de antes de la extensión). La regla nueva no afecta retroactivamente ninguna obra ya clasificada.

## 9. Retrocompatibilidad

Verificación programática, previa a cualquier cambio de datos: de las 254 obras del corpus, 9 tienen `frontera_constitutiva` (las 9 con exactamente dos recorridos) y 2 tienen `sintesis_multicorriente` (las 2 con exactamente tres) — ninguna viola las cardinalidades que el validador ahora exige. Las 166 obras con `recorrido: null` y `arquitectura_recorrido: null` tienen todas `estado_recorrido` en `sin_evaluar` o `pendiente` — ninguna es `confirmado`, de modo que la nueva regla `RECORRIDO_NULL_SIN_ARQUITECTURA` no se dispara sobre ninguna de ellas. Ningún `recorrido` ni ninguna entrada de `recorridos_sec` ni de `arquitectura_recorrido.recorridos` tiene una forma distinta de `c1`…`c10` en todo el corpus. El validador extendido corre limpio: 0 errores, mismas 4 advertencias preexistentes y ajenas a este cambio. No se modificó, ni se necesitó modificar, ningún dato de ninguna obra distinta de `rebeldestiny` para llegar a este resultado.

## 10. Tratamiento de `rebeldestiny`

Se implementa conforme a la nueva regla:

```json
"recorrido": null,
"recorridos_sec": [],
"arquitectura_recorrido": { "tipo": "sin_principal_clasificable", "recorridos": [] },
"estado_recorrido": "confirmado",
"fuente_recorrido": [
  "decision-academica-rebeldestiny-p3-etapa-2-3i.md",
  "dictamen-metodologico-rebeldestiny-p3-etapa-2-3i.md",
  "decision-normativa-sin-principal-clasificable-atlas-2.md"
]
```

La `RESERVA_CONCEPTUAL` —persistencia y reinterpretación de africanismos a través de duelo/muerte, parentesco clasificatorio, gobierno, oficios, arte, folclor y religión, con folclor/oralidad y arte/talla sin corriente propia en C1–C10— no se traslada a ningún campo de `datos-atlas.json`: sigue el mismo mecanismo ya usado para `cuijla`, una tabla de inventario en un documento de acta, ahora en `apertura-control-p3-b-etapa-2-3i.md` (sección "Reservas conceptuales — inventario, P3-B en curso"), a consolidarse en el cierre del sublote. Resolver el problema de esquema no resuelve ni sustituye el problema taxonómico: la reserva sigue viva y registrada, y este documento no la modifica.

## 11. Regla para casos futuros

`SIN_PRINCIPAL_CLASIFICABLE` solo podrá usarse cuando se demuestre, con evidencia documental identificable para cada punto: lectura probatoria suficiente; prueba de retirada aplicada a cada corriente candidata razonable, no solo a la más obvia; que ninguna C1–C10 organiza el argumento general; que no hay frontera constitutiva defendible; que no hay síntesis multicorriente defendible; y una decisión académica explícita que lo declare. Ninguna de estas seis condiciones es opcional ni sustituible por las demás.

No podrá usarse nunca como atajo para una lectura incompleta, como sustituto cómodo de `pendiente`, ni como forma de cerrar un caso sin haber agotado las pruebas de retirada. El validador impone mecánicamente cuatro de las seis condiciones (`recorridos` vacío, `recorrido: null`, `estado_recorrido: confirmado`, `fuente_recorrido` no vacío); las otras dos —suficiencia de la lectura y aplicación correcta de las pruebas de retirada— son de naturaleza académica y no pueden automatizarse: quedan sujetas, como todo lo demás en este contrato, al juicio de Dirección Académica caso por caso.

Si en el curso de P3-B a P3-H aparecen casos que parezcan equivalentes a `rebeldestiny`, no se reclasifican por analogía: cada uno exige su propia lectura probatoria y su propia prueba de retirada, exactamente como esta decisión exigió para `rebeldestiny` frente a `cuijla`. Los casos anteriores a esta decisión que pudieran, en una relectura futura, resultar equivalentes no se reabren de oficio: se anota una lista de revisión futura (§ informe de entrega) y se deja intacta su clasificación vigente hasta que exista una instrucción académica específica para reabrirlos.

**Estado final:** `DECISION_NORMATIVA_SIN_PRINCIPAL_CLASIFICABLE_APROBADA` / `CONTRATO_EXTENDIDO_ADDENDUM_26` / `VALIDADOR_EXTENDIDO_0_ERRORES` / `REBELDESTINY_IMPLEMENTADO`.
