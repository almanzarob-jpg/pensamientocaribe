# Cierre · Sublote P3-G · Etapa 2.3N

## Tabla de resultados

| caso | principal | secundarias | arquitectura | semáforo | ampliación | reserva | certeza | estado |
|---|---|---|---|---|---|---|---|---|
| `grosfoguelcolonial` | C7 | C5 | — | VERDE | no | — | alto | resuelto |
| `goldbergabolition` | C9 | C2 | — | VERDE | no | — | alto | resuelto |
| `looklaichinese` | C4 | C5 | — | VERDE | no | — | alto | resuelto |
| `olsencartagena` | C9 | C2 | — | VERDE | no | — | alto | resuelto |
| `russwurm` | C5 | C7 | — | VERDE | no | — | alto | resuelto |
| `hallafricanslouisiana` | C8 | C2 | — | VERDE | no | — | alto | resuelto |
| `scher` | C5 | C8 | — | VERDE | no | — | alto | resuelto |
| `headleyreparaciones` | C4 | — | — | VERDE | no | débil | alto | resuelto |
| `kahnislands` | C7 | — | — | VERDE | no | débil | alto | resuelto |
| `pardomosquerahoffmann` | — | C3, C8, C4 | `sin_principal_clasificable` (cardinalidad 3) | ROJO académico representable | no | débil | medio-alto | resuelto |

## 1. Verdes directos

Ocho de los diez casos se resolvieron en VERDE sin ampliación: `grosfoguelcolonial`, `goldbergabolition`, `looklaichinese` y `olsencartagena` en la Tanda 1 (commit `2f3f3a1`); `russwurm`, `hallafricanslouisiana`, `scher`, `headleyreparaciones` y `kahnislands` en el lote final. En todos ellos la lectura probatoria estratégica —índice, introducción, capítulos citados en el mecanismo— bastó para fijar principal y, cuando corresponde, secundaria, sin ambigüedad estructural relevante.

## 2. Ampliaciones quirúrgicas

Ninguna. El lote completo de P3-G se resolvió con lectura probatoria estratégica sin necesidad de ampliación sobre duda concreta (nivel AMARILLO no se activó en ningún caso).

## 3. Arquitecturas especiales

Un solo caso: `pardomosquerahoffmann`. Es una entrada compuesta y multiautoral (actas de un simposio con seis disciplinas representadas), organizada editorialmente en cinco partes. La lectura del índice y de la introducción mostró que las Partes 3, 4 y 5 comparten un mismo mecanismo (desposesión postabolición no resuelta: territorio, reparación, movilización étnica) y se agrupan en una sola corriente, reduciendo la obra a tres dimensiones irreductibles: C3 (Parte 1, cimarronaje y manumisión), C8 (Parte 2, identidad y mestizaje) y C4 (Partes 3+4+5). Se aplicó `sin_principal_clasificable` con `recorridos_sec: ["c3","c8","c4"]`, bajo la cardinalidad 0-3 ya autorizada por `decision-normativa-cardinalidad-dimensiones-parciales-p3-etapa-2-3m.md` (precedente `sangbenvolviendo`). No constituyó novedad normativa ni detuvo el lote, conforme al §3 de la instrucción vigente.

## 4. Correcciones de corriente heredada

`grosfoguelcolonial` corrigió el indicio de corriente del documento rector (Tanda 1, ya registrado en `2f3f3a1`). Ningún caso del lote final requirió corrección de corriente heredada: en `kahnislands` la `ap` heredada ("la frontera marítima como tecnología jurídica") anticipó correctamente C7, y en el resto no había indicio previo de corriente que contradijera la lectura independiente.

## 5. Correcciones de fenómenos

Tres correcciones locales, todas justificadas por omisión sustantiva que afectaba la representación del mecanismo confirmado:

- `headleyreparaciones`: `f` corregido de `["capitalismo_racial","memoria"]` a `["postplantacion","capitalismo_racial"]` — "memoria" no organiza el argumento (centrado en doctrina jurídica de responsabilidad, legitimación y causalidad), se sustituye por el término que sí nombra el mecanismo demostrado.
- `pardomosquerahoffmann`: `f` corregido de `["memoria","capitalismo_racial"]` a `["cimarronaje","creolizacion","postplantacion"]` — un valor por cada una de las tres dimensiones confirmadas de la arquitectura `sin_principal_clasificable`.
- `russwurm`: corrección ya registrada en el propio expediente del caso (la `f` heredada no nombraba la dimensión diaspórica).

## 6. Reservas

Reserva débil en `headleyreparaciones` (ensayo jurídico-filosófico normativo cuyo marco ético final excede el vocabulario histórico-espacial de C1-C10, sin impedir la clasificación), en `kahnislands` (residuo teórico de antropología jurídica que no impide fijar C7 como mecanismo dominante) y en `pardomosquerahoffmann` (la fusión de las Partes 3, 4 y 5 en una sola corriente C4 es una decisión de economía taxonómica documentada explícitamente, no una afirmación de identidad plena entre esas tres partes). Ninguna reserva alcanzó el umbral de reserva fuerte ni motivó apertura de C11.

## 7. Validación

Batería completa ejecutada una sola vez al cierre del lote, sobre el corpus ya sincronizado (v1.17.0, 257 obras, 614 relaciones):

- `sincronizar.py --check`: en sincronía.
- `validar-atlas.mjs`: 0 errores, 4 advertencias (las cuatro preexistentes: `ulysseWhyHaiti`, entradas sin año, autorías no identificadas, títulos compuestos — ninguna toca los diez casos de P3-G).
- `validar-fenomenos.mjs`: 0 errores, 3 advertencias preexistentes (`keeganhofman`, `bonilla`, `ferdinand`, sin relación con este lote).
- `validar-temporalidad.mjs`: 0 errores, 2 advertencias preexistentes.
- `validar-piloto-atlas-2.mjs`: 0 errores, 0 advertencias.

`0 errores nuevos` confirmado en los cinco controles.

## 8. Auditoría de alcance

Comparación programática entre `git show HEAD:datos-atlas.json` (previo al lote final) y el árbol de trabajo: mismos 257 ids antes y después (cero añadidos, cero eliminados); únicamente los seis casos autorizados del lote final (`russwurm`, `hallafricanslouisiana`, `scher`, `headleyreparaciones`, `kahnislands`, `pardomosquerahoffmann`) muestran diferencias semánticas; `relaciones` sin cambio (614 antes y después); los cuatro casos de la Tanda 1 (`grosfoguelcolonial`, `goldbergabolition`, `looklaichinese`, `olsencartagena`) y los bloqueados/cerrados de sublotes anteriores (`branddoor`, `araujo`, `ferdinand`) verificados sin modificación. `git status` confirma que solo `datos-atlas.js` y `datos-atlas.json` aparecen como modificados, y que los únicos archivos nuevos son los seis expedientes de lectura-decisión del lote final; el directorio `_to_delete/` permanece ajeno a este sublote y no se incorpora al commit.

## 9. Estado final P3-G

Los diez casos de P3-G quedan resueltos: cuatro en la Tanda 1 (`2f3f3a1`) y seis en el lote final de este documento. Nueve en arquitectura ordinaria (principal, con o sin secundaria) y uno (`pardomosquerahoffmann`) en `sin_principal_clasificable` con cardinalidad 3, aplicando un contrato normativo ya vigente sin necesidad de nueva decisión. Cero reservas fuertes, cero C11, cero errores nuevos.

```
P3_G_10_DE_10_RESUELTOS
VALIDACION_0_ERRORES_NUEVOS
ALCANCE_VERIFICADO
CIERRE_P3_G_GENERADO
P3_G_VERSIONADO
```
