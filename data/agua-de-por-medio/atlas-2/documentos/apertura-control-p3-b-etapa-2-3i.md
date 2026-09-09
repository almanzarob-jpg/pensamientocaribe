# Apertura de control · Sublote P3-B · Etapa 2.3I

**Universo.** P3-B son 10 casos, tomados sin alteración del orden y la lista fijados en `apertura-recalibracion-p3-etapa-2-3g.md` §18: `rebeldestiny`, `besson`, `rtsmithmatrifocal`, `sharpewake`, `zonabananera`, `dubuissonhaiti`, `fouchard`, `mintz`, `casimir`, `shellererotic`. Orden interno seguido: 1→6, luego 7, 9, 10, dejando `mintz` al final por depender de una política editorial pendiente (`decisiones-pendientes.md` §6), tal como recomienda §18.

**Método.** Inventario en una sola pasada: existencia de fuente en `Biliografia` (Google Drive local), existencia de expediente previo (lectura o decisión ya redactada), estado actual en `datos-atlas.json`/`.js`, y anomalías detectables sin interpretación académica de la obra.

| # | Caso | Fuente completa | Expediente previo | Estado JSON | Recorrido actual | Anomalía inicial | Condición |
|---|---|---|---|---|---|---|---|
| 1 | `rebeldestiny` | Sí — *Rebel Destiny* (Herskovits & Herskovits, 1934), PDF completo (424 pp.) | No | Sincronizado, `pendiente` | `null` | Ninguna | LISTO |
| 2 | `besson` | Sí — *Martha Brae's Two Histories* (Besson, 2002), PDF completo (438 pp.) | No | Sincronizado, `pendiente` | `null` | Ninguna | LISTO |
| 3 | `rtsmithmatrifocal` | Sí — *The Matrifocal Family* (R. T. Smith, 1996), PDF completo (247 pp.) | Sí — `lectura-rtsmithmatrifocal-p3-etapa-2-3j.md`, `decision-academica-rtsmithmatrifocal-p3-etapa-2-3j.md` | Sincronizado, `confirmado` | `c7` (`recorridos_sec: ["c10","c4"]`) | Resuelta: la prueba de dependencia argumentativa bidireccional mostró C10→C7 fuerte y C7→C10 débil; la adjudicación de direccionalidad (§10 de la decisión académica) distinguió centralidad editorial (Parte Uno primero, título del volumen) de centralidad explicativa (qué corriente organiza el mecanismo causal) y concluyó C7 principal por ser la variable invariante que produce tanto la forma familiar como la etnicidad/política del volumen | RESUELTO |
| 4 | `sharpewake` | Sí — *In the Wake* (Sharpe, 2016), PDF completo | No | Sincronizado, `pendiente` | `null` | Ninguna detectada en esta fase de inventario | LISTO |
| 5 | `zonabananera` | Sí — "Geografías negras zona bananera_Nov 21.docx" (`Proyectos /Geografias negras/`) | No | Sincronizado, `pendiente` | `null` | Coautoría de Roberto Almanza y Margarita Granados Castellanos, ya señalada como nota de transparencia en `apertura-recalibracion-p3-etapa-2-3g.md` §18; esa auditoría explícitamente no decidió si aplica un protocolo especial de lectura por autoría propia | REVISAR EXPEDIENTE — pendiente de que Dirección Académica autorice el protocolo de lectura antes de abrirlo |
| 6 | `dubuissonhaiti` | Sí — *Reclaiming Haiti's Futures* (Dubuisson, 2024), PDF completo | No | Sincronizado, `pendiente` | `null` | Ninguna | LISTO |
| 7 | `fouchard` | **No localizada** — confirmado en esta pasada (`Fouchard`, `marrons de la liberté` sin resultado en `Biliografia`) | No | Sincronizado, `pendiente` | `null` | Bloqueo bibliográfico, ya documentado en §18 | BLOQUEADO |
| 8 | `mintz` | **Parcial** — localizada *Dulzura y poder* (trad. esp. de *Sweetness and Power*, 1985); no localizada *Caribbean Transformations* | No | Sincronizado, `pendiente`, pero `fuente_recorrido: ["piloto-generado.json"]` — valor residual de una generación automática de un piloto anterior, no una fuente académica real | `null` | Entrada compuesta (dos títulos bajo un id) sujeta a una decisión de política editorial todavía no tomada (`decisiones-pendientes.md` §6); `fuente_recorrido` actual no debe tratarse como fuente válida | FUENTE PARCIAL — se deja al final del sublote, como recomienda §18 |
| 9 | `casimir` | **No localizada** — confirmado en esta pasada | No | Sincronizado, `pendiente` | `null` | Bloqueo bibliográfico, ya documentado en §18; la recalibración de prioridad de P1 a P3 se sostiene, lo que falta es la fuente | BLOQUEADO |
| 10 | `shellererotic` | **No localizada** — confirmado en esta pasada (solo se encontraron otras obras de Sheller con título distinto: *Consuming the Caribbean*, *Island Futures*) | No | Sincronizado, `pendiente` | `null` | Bloqueo bibliográfico, ya documentado en §18 | BLOQUEADO |

**Verificación en una sola pasada (§4 del procedimiento):**
- Coincidencia JSON/JS: verificada por los cuatro validadores del repositorio, 0 errores, antes de tocar ningún caso de P3-B (línea base).
- Expedientes previos: ninguno de los 10 casos tiene `lectura-*` ni `decision-academica-*` previa. P3-B parte de cero documentalmente.
- Fuentes: 6 completas, 1 parcial, 3 no localizadas (bloqueadas). Coincide con lo ya anticipado en §18.
- Casos implementados sin decisión: ninguno — los 10 tienen `recorrido: null`, `estado_recorrido: "pendiente"`, sin arquitectura previa.
- Duplicaciones sospechosas de arquitectura: no aplica todavía — ninguno tiene arquitectura implementada.

**No se hizo interpretación académica de las obras en esta fase**, salvo la lectura ya iniciada de `rtsmithmatrifocal` (caso 3), que se iba a abrir en el primer ciclo y cuya condición de "colección de ensayos" se detectó al revisar su introducción, no por juicio de clasificación.

## Reservas conceptuales — inventario (P3-B, en curso)

Este inventario sigue la misma estructura procedimental que `cierre-lote-p2-etapa-2-3f.md` §4 y `cierre-p3-a-etapa-2-3h.md` §5bis usaron para P2 y P3-A respectivamente — una tabla dentro del acta del sublote, no un campo nuevo en `datos-atlas.json`. Se actualiza a medida que P3-B avanza y se consolidará, con el resto del sublote, en el acta de cierre correspondiente.

| Caso | Estado | Descripción | Clasificación operativa vigente | Consecuencia | Condición de reevaluación | Prohibición provisional |
|---|---|---|---|---|---|---|
| `rebeldestiny` | `SIN_PRINCIPAL_CLASIFICABLE` (categoría normativa nueva, ver `decision-normativa-sin-principal-clasificable-atlas-2.md`) | El vocabulario C1–C10 no captura el principio transversal mediante el cual *Rebel Destiny* articula persistencia y reinterpretación de africanismos a través de dominios heterogéneos (duelo/muerte, parentesco clasificatorio, gobierno, oficios, arte, folclor, religión); dos de esos dominios (folclor/oralidad, arte/talla) no tienen corriente propia en C1–C10. A diferencia de `cuijla`, aquí ninguna corriente individual (C3, C9, C10) satisface la prueba de retirada que exige el recorrido principal: no hay clasificación operativa válida a la que la reserva se añada como excedente | Ninguna — `recorrido: null`, `arquitectura_recorrido: {"tipo":"sin_principal_clasificable"}` | La ausencia de principal es aquí la conclusión académica misma, no una limitación de la implementación (a diferencia de `cuijla`, donde C4/C2 sí clasificaban y solo faltaba el mecanismo de registro de la reserva) | Acumulación de evidencia comparativa de otros casos del corpus que documenten una tensión equivalente entre el vocabulario C1–C10 y un principio organizador transversal sin corriente candidata viable | No crear una corriente nueva (C11) a partir de este único caso; no reclasificar por analogía otros casos del corpus sin lectura y prueba de retirada propias |

**Fuente:** `lectura-rebeldestiny-p3-etapa-2-3i.md`, AMPLIACIÓN DIRIGIDA; `dictamen-metodologico-rebeldestiny-p3-etapa-2-3i.md`; `decision-academica-rebeldestiny-p3-etapa-2-3i.md`; `decision-normativa-sin-principal-clasificable-atlas-2.md`.

## Gestión de acceso acumulada

Se acumulan para tratamiento separado, sin gastar más tiempo en esta sesión: `fouchard`, `casimir`, `shellererotic` (bloqueo bibliográfico) y la decisión de política editorial para entradas compuestas que condiciona a `mintz` (`decisiones-pendientes.md` §6).

## Estado

`P3_B_APERTURA_COMPLETADA`
`3_CASOS_RESUELTOS` (`rebeldestiny`, `besson`, `rtsmithmatrifocal`)
`2_CASOS_LISTOS_PARA_PROCESAR` (`sharpewake`, `dubuissonhaiti`)
`1_CASO_PENDIENTE_DE_PROTOCOLO` (`zonabananera` — tiene fuente pero no puede abrirse sin que Dirección Académica autorice el protocolo de lectura por autoría propia)
`3_CASOS_BLOQUEADOS` (`fouchard`, `casimir`, `shellererotic`)
`1_CASO_FUENTE_PARCIAL_POLITICA_EDITORIAL_PENDIENTE` (`mintz`)

Total: 10. Ningún caso figura simultáneamente como RESUELTO y LISTO.

**Corrección de conteo (Etapa 2.3J):** la versión anterior de este acta contaba `zonabananera` simultáneamente como uno de los "casos listos" (con una nota "con reserva de protocolo") y, aparte, como el caso pendiente de autorización — un doble conteo. Queda corregido: `zonabananera` es exclusivamente el caso con fuente disponible pero pendiente de protocolo.

**Saneamiento del estado operativo (Etapa 2.3J, segunda pasada):** la distribución `5_CASOS_LISTOS` quedó obsoleta en cuanto `rebeldestiny`, `besson` y `rtsmithmatrifocal` pasaron de LISTO a RESUELTO; se sustituye por la distribución efectiva de arriba, que separa RESUELTOS de LISTOS_PARA_PROCESAR.

## Cierre del primer microlote (Etapa 2.3J)

`rebeldestiny`, `besson` y `rtsmithmatrifocal` quedan resueltos e implementados: `SIN_PRINCIPAL_CLASIFICABLE` (reserva conceptual confirmada), `FRONTERA_CONSTITUTIVA(C4,C10)` y `c7` principal / `recorridos_sec: ["c10","c4"]` respectivamente. Cuatro validadores del repositorio en 0 errores tras la implementación de los tres. Casos restantes del sublote (`sharpewake`, `zonabananera`, `dubuissonhaiti`, `fouchard`, `mintz`, `casimir`, `shellererotic`) sin abrir.
