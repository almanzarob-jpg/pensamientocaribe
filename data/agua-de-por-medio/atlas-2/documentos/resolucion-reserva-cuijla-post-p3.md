# Resolución de la reserva conceptual · `cuijla` · Saneamiento post-P3

## Gonzalo Aguirre Beltrán, *Cuijla: Esbozo etnográfico de un pueblo negro*

Este documento resuelve exclusivamente la deuda que mantenía `cuijla` en `estado_recorrido: "pendiente"`: el mecanismo técnico de registro de la reserva conceptual que la decisión académica dejó abierto en su §16. No reabre la clasificación C4/C2, no relee la obra ni la bibliografía, y no generaliza el precedente `sangbenvolviendo`.

### 1. Qué queda cerrado y qué queda abierto

`decision-academica-cuijla-p3-etapa-2-3h.md` resuelve sin ambigüedad la clasificación operativa: C4 principal, C2 secundaria estructurante (§8, §9). El propio documento distingue esa clasificación del hallazgo `VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO` (§4, §13) y afirma expresamente que ninguno de los dos pone en duda al otro: "el vacío no pone en duda que C4 sea la corriente correcta para lo que C4 fue llamada a representar" (`dictamen-resolucion-cuijla-p3-etapa-2-3h.md` §5).

Lo único que la decisión académica deja sin resolver es el **mecanismo** de registro de ese hallazgo — "campo de metadatos, nota en `fuente_recorrido`, anexo documental u otro" (§16) — con la instrucción explícita de que "no se inventa un campo técnico nuevo" y de que esa determinación "es posterior a la decisión académica y no corresponde a este documento". El `dictamen-resolucion-cuijla-p3-etapa-2-3h.md` (§7) confirma que la vía correcta, de llegar ese documento posterior, es sumarlo a `fuente_recorrido`.

### 2. Clasificación de la reserva

La reserva de `cuijla` corresponde al tipo **D — Técnica/documental**: la clasificación ya estaba resuelta y solo faltó formalizar el registro del hallazgo. No es descriptiva (no aporta un matiz menor: el propio expediente la trata como hallazgo epistemológico de primer orden), no es taxonómica en el sentido de dejar fuera un principio que aún pudiera reclasificar el caso dentro de C1–C10 sin tocar C4/C2, y no es arquitectónica: la decisión académica descarta expresamente `SINTESIS_MULTICORRIENTE(C4,C8,C9,C10)` (§7) precisamente porque C8, C9 y C10 no son individualmente co-necesarias, de modo que ninguna arquitectura distinta a C4/C2 representa mejor el caso. Lo que falta es exclusivamente el acto de registro, no una decisión sustantiva nueva.

### 3. Prueba mínima

*¿Si formalizamos la reserva conceptual sin modificar C4/C2, queda la obra suficientemente representada dentro del contrato actual?*

Sí. La propia decisión académica ya practicó esa prueba sin nombrarla así: aceptó C4/C2 como "mejor ajuste disponible" (§9) precisamente mientras reconocía, sin resolverlo dentro del vocabulario vigente, un principio transversal que ninguna corriente nombra. El hallazgo no exige una corriente distinta ni una arquitectura distinta — exige solamente que no se pierda en la sincronización del corpus (§16). Un registro documental suficientemente trazable cumple esa condición sin tocar C4/C2.

### 4. Mecanismo técnico: registro documental, sin campo nuevo

El propio expediente de `cuijla` cita como precedente procedimental a `wynterblackmetamorphosis` (`decision-academica-cuijla-p3-etapa-2-3h.md` §14, sobre `cierre-lote-p2-etapa-2-3f.md` §9): un caso en el que un hallazgo de vacío taxonómico "puede conservarse íntegramente como hallazgo, coexistir con una clasificación operativa dentro del sistema vigente, y hacerlo sin crear automáticamente una nueva corriente". El nodo vivo de `wynterblackmetamorphosis` confirma en los hechos cómo se registró ese precedente: sin ningún campo técnico dedicado a "reserva" o "vacío" — el hallazgo vive por completo en la documentación y se referencia mediante `fuente_recorrido`, mientras el nodo mismo queda en `estado_recorrido: "confirmado"`.

Esta tarea adopta el mismo mecanismo para `cuijla`, no por analogía sustantiva de contenido (`wynterblackmetamorphosis` es C8/C4, un caso distinto por completo), sino porque es el único precedente procedimental que la propia decisión de `cuijla` invocó para esta función, y porque satisface la condición de §16 sin inventar campo técnico nuevo. El registro documental de `VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO` para `cuijla` ya existe y es trazable por tres vías independientes, ninguna nueva:

1. `decision-academica-cuijla-p3-etapa-2-3h.md` §4 y §13, donde el hallazgo se formula y se fundamenta con detalle.
2. `dictamen-resolucion-cuijla-p3-etapa-2-3h.md` §4, §6 y §8, donde el hallazgo se distingue de la clasificación C4/C2 y se preserva como deuda metodológica sin resolución por analogía.
3. `cierre-p3-a-etapa-2-3h.md` §5bis, donde el hallazgo queda consolidado en la tabla de reservas conceptuales del sublote — documento de cierre ya cerrado, que este dictamen no reabre y se limita a referenciar.

Este documento formaliza ese registro como el mecanismo técnico exigido por §16 y lo suma a `fuente_recorrido` de `cuijla`.

### 5. Por qué esto no generaliza `sangbenvolviendo`

El cierre global de P3 detectó una convergencia superficial entre `cuijla` y `sangbenvolviendo`: ambos casos combinan una clasificación cerrada con una reserva no formalizada. Pero la estructura normativa de `sangbenvolviendo` — `sin_principal_clasificable` con dimensiones parciales bajo la norma de cardinalidad (`decision-normativa-cardinalidad-dimensiones-parciales-p3-etapa-2-3m.md`) — no tiene nada en común con la de `cuijla`, que es una clasificación ordinaria (C4 principal, C2 secundaria) sin arquitectura especial. Esta resolución no aplica la norma Sang Ben ni ninguna de sus condiciones; se apoya exclusivamente en el precedente procedimental que la propia decisión de `cuijla` ya había citado antes de que existiera el cierre global. No se crea ninguna norma nueva.

### 6. Autorización

Con la reserva formalizada por la vía documental descrita en §4, y sin modificar `recorrido`, `recorridos_sec` ni `arquitectura_recorrido`, se autoriza:

```json
"estado_recorrido": "confirmado",
"fuente_recorrido": [
  "decision-academica-cuijla-p3-etapa-2-3h.md",
  "dictamen-resolucion-cuijla-p3-etapa-2-3h.md",
  "resolucion-reserva-cuijla-post-p3.md"
]
```

El hallazgo `VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO` se preserva íntegro como deuda epistemológica de la taxonomía C1–C10, conforme a `decision-academica-cuijla-p3-etapa-2-3h.md` §13: no se resuelve, no se convierte en corriente nueva, y deberá acumular evidencia comparativa de otros casos antes de considerarse cualquier modificación del sistema de corrientes.

### Estado final

`RESERVA_CUIJLA_CLASIFICADA_D_TECNICA_DOCUMENTAL`
`PRUEBA_MINIMA_SUPERADA`
`MECANISMO_TECNICO_REGISTRO_DOCUMENTAL_SIN_CAMPO_NUEVO`
`CUIJLA_RESUELTO_IMPLEMENTADO`
`VACIO_TAXONOMICO_PRESERVADO_COMO_HALLAZGO`

**DETENTE.**
