# Informe de cierre · Lote P3-C, casos 4–6 · Etapa 2.3K

**Protocolo aplicado:** PROTOCOLO ACELERADO DE EVALUACIÓN POR SEMÁFORO, con las modificaciones de continuidad fijadas por Dirección Académica en la instrucción de versionado (§6-§7): un caso ROJO detiene únicamente ese caso, no el lote; una frontera constitutiva ya contemplada por el contrato no dispara por sí sola un punto de control.

**Punto de control alcanzado:** 3 casos resueltos (condición §7, primera de las dos que aplica).

---

## Tabla de resultados

| Obra | Principal | Secundarias | Arquitectura | Reserva | Certeza | Estado |
|---|---|---|---|---|---|---|
| `ulysseWhyHaiti` | C9 | — | ninguna | sin reserva | alta | confirmado |
| `islandfutures` | C5 | C7 | ninguna | sin reserva | alta | confirmado |
| `friedemannlengua` | C8 | C3 | ninguna | sin reserva | alta | confirmado |

Los tres casos resultaron VERDE tras la lectura probatoria. En dos de ellos (`islandfutures`, `friedemannlengua`) se evaluó explícitamente una arquitectura especial —frontera con el registro estatal en el primero, `FRONTERA_CONSTITUTIVA(C3,C8)` por analogía formal con `truebornmaroons` en el segundo— y en ambos casos se descartó por prueba de retirada: ninguna de las dos dimensiones secundarias resultó globalmente indispensable para el argumento organizador de la obra, a diferencia de `truebornmaroons`.

## Cambios implementados

- `ulysseWhyHaiti`: `recorrido: "c9"`, `recorridos_sec: []`, `estado_recorrido: "confirmado"`.
- `islandfutures`: `recorrido: "c5"`, `recorridos_sec: ["c7"]`, `estado_recorrido: "confirmado"`.
- `friedemannlengua`: `recorrido: "c8"`, `recorridos_sec: ["c3"]`, `estado_recorrido: "confirmado"`.

Ningún otro campo de estas tres obras fue alterado. Ninguna otra obra del corpus fue tocada (verificado por comparación de diccionarios entre las tres implementaciones).

## Documentos producidos

- `lectura-decision-ulyssewhyhaiti-p3-etapa-2-3k.md`
- `lectura-decision-islandfutures-p3-etapa-2-3k.md`
- `lectura-decision-friedemannlengua-p3-etapa-2-3k.md`
- Este informe: `informe-cierre-lote-p3-c-4-6-etapa-2-3k.md`

## Validadores ejecutados

Los cuatro validadores del repositorio se ejecutaron después de cada uno de los tres casos (no solo al cierre del lote): `python3 sincronizar.py --check`, `validar-atlas.mjs`, `validar-fenomenos.mjs`, `validar-temporalidad.mjs`, `validar-piloto-atlas-2.mjs`.

**0 errores nuevos en los tres casos, en las doce ejecuciones.** El corpus se mantuvo en 257 obras / 614 relaciones durante todo el lote — ninguna obra añadida ni eliminada, solo los campos de recorrido de las tres obras trabajadas.

## Advertencias

Las mismas de siempre, ajenas a este lote: `ID_FORMATO` (ulysseWhyHaiti — preexistente, sobre el formato del identificador, no sobre su contenido), `FECHA_PENDIENTE` (totumo, chande, esquiva, figueroa), `AUTORIA_PENDIENTE` (chande, manoalzada, esquiva), `ENTRADA_COMPUESTA` (mintz, ortiz, glissant, brathwaite, monahan, benitez), `MINIMO` (keeganhofman, bonilla, ferdinand), `PENDIENTE`/`PERIODO` (temporalidad, sin cambios de conteo).

## Incidencias

Ninguna técnica. Dos decisiones académicas requirieron descartar explícitamente una arquitectura especial antes de resolver principal/secundaria (`islandfutures` frente a la hipótesis de frontera C5/C7; `friedemannlengua` frente a la hipótesis de frontera C3/C8 por analogía formal con `truebornmaroons`) — ambas descritas en detalle en sus respectivas lecturas-decisión, sección 10. Ningún caso quedó en ROJO ni requirió ampliación probatoria: los tres se resolvieron en una sola lectura dirigida por caso.

## Casos con arquitectura o secundaria no trivial

- `islandfutures`: C7 secundaria confirmada por evidencia de capítulo dedicado ("Bordering Power"), siguiendo el patrón ya establecido en el corpus para la frontera C5/C7 (`dictamen-academico-c5.md` §6: seis cruces previos, todos C5 principal/C7 secundaria).
- `friedemannlengua`: C3 secundaria confirmada por evidencia de parte dedicada (Parte I completa, de autoría de Friedemann); se descartó `FRONTERA_CONSTITUTIVA(C3,C8)` por no cumplir la prueba de dependencia bidireccional que sí cumplió `truebornmaroons`.

## Estado técnico y de versionado

Ninguno de los cambios de este lote está todavía comprometido a Git. Las tres implementaciones (`datos-atlas.js`, `datos-atlas.json`) y los cuatro documentos nuevos permanecen en el árbol de trabajo, pendientes de la instrucción de versionado correspondiente.

## Estado final

```
LOTE_P3_C_CASOS_4_6_CONFIRMADO
VALIDACION_COMPLETA_0_ERRORES_NUEVOS
P3_C_6_DE_10_CASOS_RESUELTOS
P3_C_4_CASOS_PENDIENTES (quinnblackpower, johnson_climatecuba, robinsonmarxismo, mendozaraices)
PUNTO_DE_CONTROL_ALCANZADO_3_CASOS
PENDIENTE_DE_VERSIONADO
```
