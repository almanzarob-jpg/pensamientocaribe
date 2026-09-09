# Informe de cierre de lote · P3-C casos 1–3 · Atlas 2.0 · Etapa 2.3K

**Protocolo aplicado:** PROTOCOLO ACELERADO DE EVALUACIÓN POR SEMÁFORO.

| obra | principal | secundarias | arquitectura | reserva | certeza | estado |
|---|:---:|:---:|---|---|:---:|---|
| `helglibertyequality` | C7 | C3 | — | débil | media-alta | confirmado |
| `truebornmaroons` | — | — | `frontera_constitutiva(C3,C9)` | sin reserva | alta | confirmado |
| `callaloonation` | C8 | — | — | sin reserva | alta | confirmado |

## Cambios implementados

Tres obras en `datos-atlas.js` (regenerado `datos-atlas.json` una vez por caso, sincronía verificada en cada paso). Ningún otro campo de ninguna de las tres obras fue tocado (`t`, `a`, `y`, `f`, `l`, `tr`, `ap` intactos). No se modificó el validador. No se creó ninguna figura normativa nueva: `truebornmaroons` usa la arquitectura `frontera_constitutiva` ya existente en el contrato técnico.

## Validadores ejecutados

`sincronizar.py`, `validar-atlas.mjs`, `validar-fenomenos.mjs`, `validar-temporalidad.mjs`, `validar-piloto-atlas-2.mjs` — ejecutados de forma íntegra después de cada uno de los tres casos (más granular que el mínimo del protocolo, sin incidencias que ameritaran aislar ningún caso).

## Errores

0 en los tres cierres de validación.

## Advertencias

Las mismas 4 + 3 + 2 + 0 advertencias preexistentes de siempre (`ID_FORMATO`, `FECHA_PENDIENTE`, `AUTORIA_PENDIENTE`, `ENTRADA_COMPUESTA`; `MINIMO` ×3; `PENDIENTE`, `PERIODO`), ninguna nueva, ninguna asociada a las tres obras de este lote.

## Incidencias

`truebornmaroons` pasó por ROJO → ampliación probatoria quirúrgica (documentada en `rojo-truebornmaroons-p3-etapa-2-3k.md` y `ampliacion-truebornmaroons-frontera-c3-c9-p3-etapa-2-3k.md`) antes de resolverse. No se trata de una incidencia técnica sino del funcionamiento esperado del protocolo ante una posible `FRONTERA_CONSTITUTIVA`.

## Casos que pasaron a AMARILLO o ROJO

`truebornmaroons`: ROJO inicial, resuelto mediante ampliación dirigida a capítulos 2 y 7, dictaminado `FRONTERA_CONSTITUTIVA(C3,C9)` con certeza alta.

## Documentos de este lote

- `lectura-decision-helglibertyequality-p3-etapa-2-3k.md`
- `rojo-truebornmaroons-p3-etapa-2-3k.md`
- `ampliacion-truebornmaroons-frontera-c3-c9-p3-etapa-2-3k.md`
- `lectura-decision-callaloonation-p3-etapa-2-3k.md`
- este informe

## Estado

```
LOTE_P3_C_CASOS_1_3_CONFIRMADO
VALIDACION_COMPLETA_0_ERRORES_NUEVOS
P3_C_3_DE_10_CASOS_RESUELTOS
P3_C_7_CASOS_PENDIENTES (ulysseWhyHaiti, islandfutures, friedemannlengua, quinnblackpower, johnson_climatecuba, robinsonmarxismo, mendozaraices)
```
