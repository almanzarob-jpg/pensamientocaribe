# Cierre de P3-C · Etapa 2.3K

**Protocolo aplicado:** PROTOCOLO ACELERADO DE EVALUACIÓN POR SEMÁFORO, con las reglas de continuidad de la instrucción de versionado (§6-§7 de la etapa anterior): un caso ROJO académico ya representable se resuelve dentro del mismo lote sin detener los demás; un ROJO normativo —una estructura que el contrato vigente no puede representar— es el único que frena el cierre general. Ningún caso de P3-C llegó a rojo normativo.

---

## Tabla de los diez casos

| caso | principal | secundarias | arquitectura | semáforo inicial | ampliación | reserva | certeza | estado |
|---|---|---|---|---|---|---|---|---|
| `helglibertyequality` | C9 | — | ninguna | verde | no | sin reserva | alta | confirmado |
| `truebornmaroons` | C3 | C9 | `FRONTERA_CONSTITUTIVA(C3,C9)` | rojo académico | sí | sin reserva | alta | confirmado |
| `callaloonation` | C8 | — | ninguna | verde | no | sin reserva | alta | confirmado |
| `ulysseWhyHaiti` | C9 | — | ninguna | verde | no | sin reserva | alta | confirmado |
| `islandfutures` | C5 | C7 | ninguna | verde | no | sin reserva | alta | confirmado |
| `friedemannlengua` | C8 | C3 | ninguna | verde | no | sin reserva | alta | confirmado |
| `quinnblackpower` | C7 | C4 | ninguna | verde | no | sin reserva | alta | confirmado |
| `johnson_climatecuba` | C6 | — | ninguna | verde | no | sin reserva | alta | confirmado |
| `robinsonmarxismo` | C3 | — | ninguna | amarillo | sí | con reserva de alcance | alta | confirmado |
| `mendozaraices` | C9 | C3 | ninguna | verde | no | con reserva editorial | alta | confirmado |

## Casos verdes directos

Siete de los diez casos se resolvieron en una sola lectura dirigida, sin incertidumbre localizada que exigiera ampliación: `helglibertyequality`, `callaloonation`, `ulysseWhyHaiti`, `islandfutures`, `friedemannlengua`, `quinnblackpower`, `johnson_climatecuba`.

## Amarillos resueltos

Un solo caso amarillo: `robinsonmarxismo`. La incertidumbre localizada era la amplitud transnacional del libro (Europa, Estados Unidos, África, el Caribe) frente a la exigencia de identificar un proceso concreto del Caribe que organizara el argumento, sin forzar la obra hacia una corriente por proximidad ideológica. Se resolvió en la misma ronda mediante ampliación dirigida a la arquitectura de las tres partes del libro y a sus dos únicos tramos de anclaje caribeño (la arqueología del cimarronaje y la revolución haitiana en el capítulo VI; el capítulo completo sobre C. L. R. James), quedando confirmado en C3.

## Rojos académicos resueltos

Un solo caso rojo académico, resuelto en el lote anterior a este cierre: `truebornmaroons`, con arquitectura `FRONTERA_CONSTITUTIVA(C3,C9)` ya contemplada por el contrato vigente. Ese precedente fue el que permitió, en este mismo lote, descartar con rigor una arquitectura formalmente parecida en `friedemannlengua` (evaluada y rechazada por no cumplir la prueba de dependencia bidireccional) y en `mendozaraices` (evaluada y rechazada sobre el binomio archivo/agencia del propio prólogo).

## Rojos normativos

Ninguno. Ningún caso de P3-C produjo una estructura académica que el contrato de recorridos vigente no pudiera representar.

## Reservas conceptuales

Dos casos quedan con reserva explícita, ya consignada en sus respectivas lecturas-decisión:

- `robinsonmarxismo`: el recorrido asignado (C3) corresponde al proceso que organiza el anclaje caribeño del libro, no a la totalidad de su alcance transnacional.
- `mendozaraices`: obra colectiva de catorce autores sin tesis única; la clasificación se apoya en la síntesis explícita del prólogo de la compiladora. Se deja constancia de que uno de los coautores de un capítulo es el propio director de este proyecto de Atlas, circunstancia que no alteró el criterio aplicado sobre la síntesis del volumen completo.

## Cambios implementados

- `helglibertyequality`, `truebornmaroons`, `callaloonation`: primer lote, ya comprometido a Git (`afa9079`).
- `ulysseWhyHaiti`, `islandfutures`, `friedemannlengua`: segundo lote, ya comprometido a Git (`bb0caaa`).
- `quinnblackpower`: `recorrido: "c7"`, `recorridos_sec: ["c4"]`, `estado_recorrido: "confirmado"`.
- `johnson_climatecuba`: `recorrido: "c6"`, `recorridos_sec: []`, `estado_recorrido: "confirmado"`.
- `robinsonmarxismo`: `recorrido: "c3"`, `recorridos_sec: []`, `estado_recorrido: "confirmado"`.
- `mendozaraices`: `recorrido: "c9"`, `recorridos_sec: ["c3"]`, `estado_recorrido: "confirmado"`.

Ningún otro campo de estas cuatro obras fue alterado. Ninguna otra obra del corpus fue tocada (verificado por comparación de diccionarios entre `git show HEAD:...json` y el árbol de trabajo: cero obras añadidas, cero eliminadas, exactamente las cuatro obras de este lote con diferencias de campo).

## Resultados de validación

`python3 sincronizar.py --check`, `validar-atlas.mjs`, `validar-fenomenos.mjs`, `validar-temporalidad.mjs`, `validar-piloto-atlas-2.mjs`: **0 errores nuevos** tras la implementación de los cuatro casos de este lote. El corpus se mantiene en 257 obras / 614 relaciones en los diez casos de P3-C. Advertencias: las mismas de siempre, ajenas a P3-C (`ID_FORMATO` en `ulysseWhyHaiti`; `FECHA_PENDIENTE` en totumo, chande, esquiva, figueroa; `AUTORIA_PENDIENTE` en chande, manoalzada, esquiva; `ENTRADA_COMPUESTA` en mintz, ortiz, glissant, brathwaite, monahan, benitez; `MINIMO` en keeganhofman, bonilla, ferdinand; `PENDIENTE`/`PERIODO` de temporalidad, sin cambios de conteo).

## Deuda pendiente

Ninguna deuda de P3-C. Los diez casos quedan clasificados y validados. Queda pendiente exclusivamente el commit final de esta etapa, que se realiza inmediatamente después de este informe.

## Estado final

```
P3_C_CASOS_4_6_VERSIONADOS
P3_C_CASOS_7_10_RESUELTOS
P3_C_10_DE_10_EVALUADOS
VALIDACION_0_ERRORES_NUEVOS
CIERRE_P3_C_GENERADO
PENDIENTE_COMMIT_FINAL
```
