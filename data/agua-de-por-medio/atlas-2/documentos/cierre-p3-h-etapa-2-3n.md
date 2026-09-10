# Cierre · Sublote P3-H · Etapa 2.3N

P3-H es el octavo y último sublote de P3 (78 casos totales). Los ocho casos quedan resueltos en dos tandas: Tanda 1 (`a80bdd3`) y Tanda 2 (este cierre).

| caso | principal | secundarias | arquitectura | semáforo | reserva | certeza | estado |
|---|---|---|---|---|---|---|---|
| `lizcanocarnaval` | C8 | C9 | — | VERDE | ninguna | alto | RESUELTO |
| `johnsonbelize` | — | — | frontera_constitutiva C6/C8 | ROJO académico representable | ninguna | alto | RESUELTO |
| `prestolmasacre` | C7 | C8 | — | VERDE | ninguna | alto | RESUELTO |
| `mcneillmosquito` | C6 | C7 | — | AMARILLO | débil (posible frontera C6/C7, no reabierta) | alto | RESUELTO |
| `puriradical` | — | — | frontera_constitutiva C7/C5 | ROJO académico representable | ninguna | alto | RESUELTO |
| `meniketinevis` | C2 | C6 | — | VERDE | ninguna | alto | RESUELTO |
| `castorspiritual` | — | — | sintesis_multicorriente C5/C7/C9 | VERDE | débil (asimetría interna de peso entre las tres corrientes) | alto | RESUELTO |
| `mitchellalibi` | C2 | — | — | AMARILLO | débil (cobertura caribeña mínima, ya señalada por curaduría heredada) | medio-alto | RESUELTO |

## 1. Clasificaciones

Cuatro casos resueltos en principal más secundarias ordinarias (`lizcanocarnaval`, `prestolmasacre`, `meniketinevis`, `mitchellalibi`, este último sin secundaria). Dos casos en frontera constitutiva (`johnsonbelize` C6/C8, `puriradical` C7/C5). Uno en síntesis multicorriente (`castorspiritual` C5/C7/C9). Uno en principal más secundaria con reserva débil registrada (`mcneillmosquito` C6/C7).

## 2. Correcciones heredadas

`headleyreparaciones` y `pardomosquerahoffmann` (P3-G) ya habían corregido `f`; en P3-H solo `meniketinevis` requirió corrección, de `["postplantacion","catastrofes"]` a `["capitalismo_racial","catastrofes"]` — el libro trata el capitalismo de plantación esclavista, no su mutación posterior a la abolición. Un primer intento de corrección propuso `plantacion_y_secuela`, término del catálogo granular de fenómenos que no pertenece al vocabulario heredado de diez términos que valida el campo `f`; el error fue detectado por `validar-atlas.mjs` en la validación de cierre y corregido antes del commit (ver §5). Ninguna otra `f` heredada de P3-H requirió corrección: `puriradical` y `castorspiritual` quedaron sin corrección de `f` por ausencia de un término heredado equivalente a "diáspora/circulación" en el vocabulario de diez términos, documentado explícitamente en ambas lecturas-decisión.

## 3. Arquitecturas especiales

Dos fronteras constitutivas (`johnsonbelize` C6/C8, `puriradical` C7/C5) y una síntesis multicorriente (`castorspiritual` C5/C7/C9, verificada contra los precedentes `perezmorales` y `pinedashipwrecked`). `puriradical` corrigió en el curso de la propia tanda una primera clasificación frontera C7/C9 a C7/C5, al confrontarla con el anclaje del catálogo de fenómenos (`radicalismo_negro_transnacional`); la corrección quedó documentada en la propia lectura-decisión.

## 4. Reservas

Tres reservas débiles, ninguna fuerte. `mcneillmosquito` (Tanda 1) mantiene su reserva sobre una posible frontera C6/C7, no reabierta en esta tanda por instrucción expresa. `castorspiritual` registra una asimetría interna de peso entre sus tres corrientes sin invalidar la síntesis. `mitchellalibi` registra la naturaleza marginal de su cobertura caribeña, ya señalada por la curaduría heredada del corpus antes de esta lectura.

## 5. Validación

Los cuatro casos de la Tanda 2 se resolvieron consecutivamente con controles ligeros de sintaxis (`node -c`) tras cada implementación. Al cierre se ejecutó la batería completa: sincronización JS/JSON, `validar-atlas.mjs`, `validar-fenomenos.mjs`, `validar-temporalidad.mjs`, `validar-piloto-atlas-2.mjs`. Una primera corrida detectó un error nuevo (`OBRA_FENOMENO_INEXISTENTE` en `meniketinevis`, por el término de catálogo equivocado señalado en §2); corregido el término, la segunda corrida cerró con `0 errores nuevos` (las cuatro advertencias de `validar-atlas.mjs`, las tres de `validar-fenomenos.mjs` y las dos de `validar-temporalidad.mjs` son preexistentes y ajenas a P3-H).

## 6. Alcance

Auditoría programática confirmó: mismos 257 ids antes y después; únicamente `puriradical`, `meniketinevis`, `castorspiritual` y `mitchellalibi` con diferencias semánticas; los cuatro casos de la Tanda 1 (`lizcanocarnaval`, `johnsonbelize`, `prestolmasacre`, `mcneillmosquito`) y todos los sublotes anteriores (P3-A a P3-G) intactos; 614 relaciones sin cambio de conteo.

## 7. Estado final

`P3_H_8_DE_8_RESUELTOS`. Con este cierre concluyen los ocho sublotes de la Etapa P3 (78/78 casos).
