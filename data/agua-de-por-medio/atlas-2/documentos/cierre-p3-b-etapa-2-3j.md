# Acta de cierre del sublote P3-B — Etapa 2.3J del Atlas 2.0

**Naturaleza de este documento.** Acta de consolidación documental del sublote P3-B, siguiendo el mismo precedente metodológico de `cierre-global-p1-etapa-2-3.md`, `cierre-lote-p2-etapa-2-3f.md` y `cierre-p3-a-etapa-2-3h.md`: distingue cierre académico de implementación técnica, y no reabre ninguna decisión ya emitida. **Este documento cierra P3-B, no P3.** El universo global de P3 permanece abierto (§6). Para las secciones "Estado" y "Cierre del primer microlote" de `apertura-control-p3-b-etapa-2-3i.md`, este documento es la referencia vigente: aquellas quedaron desactualizadas en cuanto avanzó el sublote más allá de su primer microlote (`rebeldestiny`, `besson`, `rtsmithmatrifocal`) y no se corrigieron en el propio acta de apertura, que se conserva sin alterar como registro histórico.

## 1. Universo

- **Universo global P3** (recalibrado en `apertura-recalibracion-p3-etapa-2-3g.md`, commit `6ec6ec8`): 78 casos, en ocho sublotes (P3-A a P3-H).
- **P3-B:** 10 casos, en el orden fijado por `apertura-recalibracion-p3-etapa-2-3g.md` §18 y registrado en `apertura-control-p3-b-etapa-2-3i.md`: `rebeldestiny`, `besson`, `rtsmithmatrifocal`, `sharpewake`, `zonabananera`, `dubuissonhaiti`, `fouchard`, `mintz`, `casimir`, `shellererotic`.

## 2. Resultado por caso

| # | Id | Lectura | Decisión académica | Arquitectura final | `estado_recorrido` | Condición de cierre |
|---|---|---|---|---|---|---|
| 1 | `rebeldestiny` | Sí, con ampliación dirigida | Sí | `SIN_PRINCIPAL_CLASIFICABLE`, sin dimensiones parciales | `confirmado` | RESUELTO — activó la creación normativa de la categoría (`decision-normativa-sin-principal-clasificable-atlas-2.md`) |
| 2 | `besson` | Sí | Sí | `FRONTERA_CONSTITUTIVA(C4,C10)`, secundaria C2 | `confirmado` | RESUELTO |
| 3 | `rtsmithmatrifocal` | Sí | Sí | `c7` principal, secundarias C10 y C4 | `confirmado` | RESUELTO — la primera adjudicación (C10 principal) se corrigió por inversión lógica antes del cierre del microlote; la versión vigente es la corregida |
| 4 | `sharpewake` | Sí | Sí | `FRONTERA_CONSTITUTIVA(C2,C9)`, sin secundarias | `confirmado` | RESUELTO — la primera adjudicación (C9 principal, C2/C5 secundarias) se corrigió a frontera constitutiva antes de cerrarse; control semántico final de reserva conceptual añadido después de la implementación, sin alterar la arquitectura |
| 5 | `zonabananera` | No iniciada | No existe | — | `pendiente` | **PENDIENTE DE PROTOCOLO** — fuente disponible (coautoría de Roberto Almanza y Margarita Granados Castellanos); requiere que Dirección Académica autorice un protocolo de lectura para un caso de autoría propia antes de abrirlo. No se abre en esta sesión: Dirección Académica decidió cerrar el sublote sin desbloquear este caso |
| 6 | `dubuissonhaiti` | Sí, con ampliación dirigida sobre el capítulo 3 | Sí | `SIN_PRINCIPAL_CLASIFICABLE`, dimensiones parciales C5 y C9 | `confirmado` | RESUELTO — activó la extensión normativa de la categoría para admitir dimensiones parciales (`decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md`) |
| 7 | `fouchard` | No iniciada | No existe | — | `pendiente` | **BLOQUEADO** — fuente no localizada en `Biliografia`. Instrucción vigente de Dirección Académica: no iniciar búsquedas nuevas sin pedido expreso |
| 8 | `mintz` | No iniciada | No existe | — | `pendiente` | **BLOQUEADO** — fuente parcial (*Dulzura y poder* localizada; *Caribbean Transformations* no); depende además de una decisión de política editorial sobre entradas de título compuesto todavía no tomada (`decisiones-pendientes.md` §6) |
| 9 | `casimir` | No iniciada | No existe | — | `pendiente` | **BLOQUEADO** — fuente no localizada en `Biliografia`. Misma instrucción que `fouchard` |
| 10 | `shellererotic` | No iniciada | No existe | — | `pendiente` | **BLOQUEADO** — fuente no localizada en `Biliografia` (solo se hallaron otras obras de Sheller con título distinto). Misma instrucción que `fouchard` |

**Distribución final: 5 casos resueltos e implementados, 5 casos sin abrir, ninguno a medio hacer.** Ningún caso tiene lectura o decisión parcial pendiente de completar: los cinco no resueltos no tienen expediente porque nunca se abrieron, no porque se hayan interrumpido.

## 3. Sincronización `datos-atlas.json` / `datos-atlas.js`

Verificada tras la implementación de `dubuissonhaiti`, el último de los cinco casos resueltos: `python3 data/agua-de-por-medio/sincronizar.py --check` reporta sincronía (v1.17.0, 257 obras, 614 relaciones). Los cuatro validadores del repositorio (`validar-atlas.mjs`, `validar-fenomenos.mjs`, `validar-temporalidad.mjs`, `validar-piloto-atlas-2.mjs`) corren en 0 errores; las advertencias restantes (`ID_FORMATO`, `FECHA_PENDIENTE`, `AUTORIA_PENDIENTE`, `ENTRADA_COMPUESTA`, `MINIMO` ×3, `PENDIENTE`, `PERIODO`) son deuda editorial preexistente, ajena a P3-B, y ninguna corresponde a los cinco casos resueltos de este sublote.

## 4. Reservas conceptuales — inventario consolidado (P3-B)

Consolida, en el acta de cierre, el inventario que `apertura-control-p3-b-etapa-2-3i.md` fue acumulando "a medida que P3-B avanza" (según su propio §"Reservas conceptuales", nota introductoria) — mismo mecanismo que `cierre-lote-p2-etapa-2-3f.md` §4 y `cierre-p3-a-etapa-2-3h.md` §5bis usaron para P2 y P3-A: una tabla dentro del acta del sublote, no un campo nuevo en `datos-atlas.json`.

De los cinco casos resueltos, tres registran reserva conceptual; dos no:

| Caso | Reserva | Núcleo | Consecuencia sobre la clasificación |
|---|---|---|---|
| `rebeldestiny` | `SIN_PRINCIPAL_CLASIFICABLE` (deuda taxonómica) | Persistencia y reinterpretación de africanismos a través de dominios heterogéneos; folclor/oralidad y arte/talla sin corriente propia en C1–C10 | Ninguna corriente clasifica como principal; es la conclusión académica misma |
| `sharpewake` | `RESERVA_CONCEPTUAL` (no cuestiona la clasificación) | La esclavitud como singularidad temporal/ontológica todavía activa (`wake work`), no nombrada por C2 ni por C9 ni por la regla de frontera entre ambas | Ninguna — la frontera C2/C9 es plenamente válida; la reserva se añade como excedente |
| `dubuissonhaiti` | `SIN_PRINCIPAL_CLASIFICABLE` con dimensiones parciales | Placemaking / inhabitability / homing / fractura-sutura / producción de futuro, dentro de fracturas coloniales persistentes | Ninguna corriente clasifica como principal, pero C5 y C9 se conservan como dimensiones sustantivas parciales — activó la extensión normativa del §6 |
| `besson` | Ninguna | — | — |
| `rtsmithmatrifocal` | Ninguna | — | — |

**Fuentes:** `decision-academica-rebeldestiny-p3-etapa-2-3i.md`, `dictamen-metodologico-rebeldestiny-p3-etapa-2-3i.md`, `decision-normativa-sin-principal-clasificable-atlas-2.md`; `decision-academica-sharpewake-p3-etapa-2-3j.md` §9-§10; `lectura-dubuissonhaiti-p3-etapa-2-3j.md`, `ampliacion-probatoria-dubuissonhaiti-cap3-p3-etapa-2-3j.md`, `decision-academica-dubuissonhaiti-p3-etapa-2-3j.md`, `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md`.

No se crea C11 a partir de ninguna de las tres reservas. No se reclasifica ningún caso futuro por analogía con ellas sin lectura y prueba propias — regla ya fijada en `decision-normativa-sin-principal-clasificable-atlas-2.md` §11 y reafirmada en `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md` §19, y que este cierre no modifica.

## 5. Estado de Git

| commit | contenido |
|---|---|
| `7e7104b` | Apertura del sublote; `besson` implementado completo; inicio de la exploración de `rebeldestiny` |
| `0b2d7f7` | Control probatorio de `rebeldestiny`/`besson`; creación de la deuda normativa `SIN_PRINCIPAL_CLASIFICABLE`; implementación de `rebeldestiny` |
| `9f030a8` | Resuelve `rtsmithmatrifocal` (versión inicial: C10 principal / C7, C4 secundarias) |
| `034dd68` | Corrige inversión lógica en `rtsmithmatrifocal` (C7 principal, no C10); cierra el primer microlote |
| `5dbd484` | Clasifica `sharpewake` (versión inicial: C9 principal, C2 y C5 secundarias) |
| `82a901c` | Corrige `sharpewake` a `FRONTERA_CONSTITUTIVA(C2,C9)` tras adjudicación C9/C2 |
| `524ba66` | Control semántico final de reserva conceptual de `sharpewake` (documental; no toca `datos-atlas.json`/`.js`) |
| `506395a` | `dubuissonhaiti`: implementa `sin_principal_clasificable` con dimensiones parciales; extiende la norma; ajusta el validador |

Los ocho commits están en `main`, publicados en `origin` (`506395a` es el `HEAD` actual de ambos tras el `push` confirmado por Roberto Almanza desde su equipo). No se ejecutó ningún `git push` desde este entorno en ningún momento del sublote: la publicación a `origin` corresponde siempre al equipo de Rob, conforme al criterio ya establecido.

Este acta de cierre se añade como commit propio, posterior a `506395a`, siguiendo el mismo precedente que `cierre-p3-a-etapa-2-3h.md`.

## 6. P3-B queda cerrado con dos correcciones metodológicas propias que vale la pena registrar

Dos de los cuatro casos resueltos tuvieron una primera adjudicación revertida antes del cierre: `rtsmithmatrifocal` (C10→C7 por inversión lógica de la prueba de direccionalidad) y `sharpewake` (C9 principal→frontera constitutiva). En ambos, la corrección fue de contenido —una relectura de la evidencia probatoria—, no de proceso: no hubo dato implementado sin decisión académica que lo sostuviera, a diferencia de la irregularidad que P3-A registró en `allen_dikimanera` (§2, `cierre-p3-a-etapa-2-3h.md`). Los dos casos con arquitectura `FRONTERA_CONSTITUTIVA` de P3-B (`besson` C4/C10, `sharpewake` C2/C9) no comparten recorridos entre sí ni con los de P3-A, y ninguno se adjudicó por analogía con otro caso del corpus.

## 7. P3 permanece abierto

**P3-B es 10 de los 78 casos de P3.** Sumado a P3-A, quedan procesados 20/78 casos del universo recalibrado; los sublotes **P3-C a P3-H (58 casos) permanecen íntegramente sin trabajar**: sin lectura, sin decisión académica, sin implementación. Dentro de P3-B, la distribución final no es "diez casos cerrados": son **5 casos confirmados** (`rebeldestiny`, `besson`, `rtsmithmatrifocal`, `sharpewake`, `dubuissonhaiti`) y **5 casos sin abrir**, cada uno con un bloqueo distinto y explícito (§2) — **1 pendiente de protocolo de autoría propia** (`zonabananera`), **3 bloqueados por fuente no localizada** (`fouchard`, `casimir`, `shellererotic`) y **1 con fuente parcial sujeto a política editorial pendiente** (`mintz`). Ninguno de los cinco requiere trabajo de lectura que ya estuviera en curso: los cinco están exactamente donde `apertura-control-p3-b-etapa-2-3i.md` los dejó.

Por instrucción expresa de Dirección Académica, el sublote se cierra aquí, sin desbloquear ninguno de los cinco casos pendientes en esta sesión. La apertura de cualquiera de ellos —incluida la continuación a P3-C— requiere una instrucción académica independiente: autorización del protocolo de lectura para `zonabananera`, autorización de búsqueda de fuente para `fouchard`/`casimir`/`shellererotic`, resolución de la política editorial de `decisiones-pendientes.md` §6 para `mintz`, o instrucción de abrir P3-C.

## Estado final

```
P3_B_CONSOLIDADO_5_DE_10_CASOS_CONFIRMADOS
P3_B_5_CASOS_SIN_ABRIR (zonabananera, fouchard, mintz, casimir, shellererotic — cada uno con bloqueo propio, ver §2)
P3_B_RESERVA_CONCEPTUAL_EN_3_DE_5_CASOS_RESUELTOS (rebeldestiny, sharpewake, dubuissonhaiti)
P3_B_VALIDACION_0_ERRORES
P3_B_CERRADO
P3_CONTINUA_ABIERTO — 58/78 casos de P3-C a P3-H sin trabajar
P3_NO_CERRADO
```
