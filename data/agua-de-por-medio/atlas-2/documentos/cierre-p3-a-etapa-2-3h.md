# Acta de cierre del sublote P3-A — Etapa 2.3H del Atlas 2.0

**Naturaleza de este documento.** Acta de consolidación documental del sublote P3-A, siguiendo el mismo precedente metodológico de `cierre-global-p1-etapa-2-3.md` y `cierre-lote-p2-etapa-2-3f.md`: distingue cierre académico de implementación técnica, y no reabre ninguna decisión ya emitida. **Este documento cierra P3-A, no P3.** El universo global de P3 permanece abierto (§7).

## 1. Universo

- **Universo global P3 (recalibrado en `apertura-recalibracion-p3-etapa-2-3g.md`, commit `6ec6ec8`):** 78 casos, divididos en ocho sublotes (P3-A a P3-H).
- **P3-A:** 10 casos — `duboisturits`, `wilsoncrabantics`, `cuijla`, `olwigstjohn`, `allen_dikimanera`, `aftershocks`, `mintzpricebirth`, `abello`, `roberts`, `escalante`.

## 2. Resultado por caso

| # | Id | Lectura | Decisión académica | Arquitectura final | `estado_recorrido` | Anomalía encontrada | Corrección |
|---|---|---|---|---|---|---|---|
| 1 | `duboisturits` | Sí (3 versiones) | Sí | `FRONTERA_CONSTITUTIVA(C3,C4)`, secundarias C2+C7 | `confirmado` | Decisión emitida, nunca implementada en `datos-atlas.json`/`.js` | Implementada en esta auditoría |
| 2 | `wilsoncrabantics` | Sí | Sí | `FRONTERA_CONSTITUTIVA(C4,C10)`, secundaria C2 | `confirmado` | Ninguna | Ninguna — verificado campo por campo, coincide con la decisión |
| 3 | `cuijla` | Sí (con dos ampliaciones) | Sí | `c4` principal operativo, secundaria C2 | `confirmado` | **Sin corregir.** La decisión académica (§8) aprueba la clasificación pero fija literalmente `"estado_recorrido": "pendiente"` mientras no se registre el hallazgo `VACÍO_TAXONÓMICO_POSIBLE`, y su estado final es `NO_IMPLEMENTADA`. El dato actual tiene `"confirmado"`. No es evidente si el valor implementado corrigió deliberadamente ese punto o si es un error de implementación | **Ninguna aplicada** — queda como incertidumbre residual para la Dirección Académica (§5) |
| 4 | `olwigstjohn` | Sí | Sí | `FRONTERA_CONSTITUTIVA(C4,C10)`, secundaria C2 | `confirmado` | Ninguna | Ninguna — verificado campo por campo, coincide con la decisión |
| 5 | `allen_dikimanera` | Sí (con ampliación dirigida sobre C4/C10) | **No existía** | `FRONTERA_CONSTITUTIVA(C4,C10)`, secundaria C9 | `confirmado` | Implementado citando como `fuente_recorrido` la lectura probatoria, no una decisión académica — viola el protocolo lectura → decisión → implementación | Redactada `decision-academica-allen_dikimanera-p3-etapa-2-3h.md`, que audita y ratifica de forma independiente la arquitectura ya implementada; corregido `fuente_recorrido` |
| 6 | `aftershocks` | Sí | Sí | `c7` principal, secundarias C4+C6 | `confirmado` | Ninguna | Ninguna |
| 7 | `mintzpricebirth` | Sí | Sí | `c8` principal, secundaria C2 | `confirmado` | Decisión emitida, nunca implementada (detectado de forma independiente en `decision-academica-abello-p3-etapa-2-3h.md` §14) | Implementada en esta auditoría |
| 8 | `abello` | Sí | Sí | `c7` principal, secundaria C2 | `confirmado` | Ninguna | Ninguna |
| 9 | `roberts` | Sí | Sí | `c3` principal, secundaria C7 | `confirmado` | Ninguna | Ninguna |
| 10 | `escalante` | Sí | **No existe** | — | `pendiente` | Ninguna (no es implementación fallida, es bloqueo genuino) | No aplica — permanece `BLOQUEADO_POR_FUENTE_INSUFICIENTE` |

## 3. Auditoría específica de la coincidencia `FRONTERA_CONSTITUTIVA(C4,C10)`

Tres casos de P3-A —`wilsoncrabantics`, `olwigstjohn` y `allen_dikimanera`— comparten la misma arquitectura especial (`frontera_constitutiva` entre C4 y C10). Por instrucción expresa, esta auditoría no asumió que la coincidencia fuera correcta y reconstruyó cada decisión de forma independiente:

- Cada uno de los tres casos llega a esa frontera por una prueba adversarial de seis pruebas metodológicas aplicada a su propia evidencia textual (Wilson 1973 sobre San Andrés; Olwig 1985 sobre St. John; Allen 2007 sobre Curazao — tres obras, tres territorios, tres autoras distintas).
- Ninguno de los tres reutiliza la evidencia de otro como sustento: las tres decisiones académicas declaran explícitamente que no usan los demás casos del sublote como precedente sustantivo, solo como precedente de forma documental.
- La corriente secundaria que acompaña a la frontera **difiere en cada caso** (C2 en `wilsoncrabantics`, C2 en `olwigstjohn`, C9 en `allen_dikimanera`), lo que habría sido idéntico en los tres si se tratara de un arrastre mecánico de un valor de implementación.
- El único problema real detectado no fue de contenido sino de **proceso**: `allen_dikimanera` llegó a esa arquitectura por una vía documental incompleta (lectura con ampliación dirigida, sin decisión académica formalizada), no por copiar el valor de los otros dos casos. Ver §2, fila 5.

**Conclusión:** la coincidencia de arquitectura entre los tres casos es sustantiva y casual (tres obras caribeñas distintas que documentan, cada una por su cuenta, una tensión estructural entre economía postplantación y cuerpo/parentesco), no un error de copiado. Sí hubo una irregularidad de proceso en `allen_dikimanera`, ya subsanada (§2).

## 4. Sincronización `datos-atlas.json` / `datos-atlas.js`

Verificada mediante tres métodos independientes tras las correcciones: (1) `json.load` de `datos-atlas.json` sin error, 257 obras, 614 relaciones; (2) evaluación de `datos-atlas.js` en una sandbox de `node` (`vm.runInContext`) sin error de sintaxis; (3) comparación campo por campo (`recorrido`, `recorridos_sec`, `arquitectura_recorrido`, `estado_recorrido`, `fuente_recorrido`) de los cuatro nodos modificados (`duboisturits`, `mintzpricebirth`, `allen_dikimanera`) más el nodo en observación (`cuijla`) entre ambos archivos: coinciden exactamente. Los cuatro validadores del repositorio (`validar-atlas.mjs`, `validar-fenomenos.mjs`, `validar-temporalidad.mjs`, `validar-piloto-atlas-2.mjs`) se ejecutaron después de los cambios: **0 errores** en los cuatro (`validar-atlas.mjs` reporta 4 advertencias preexistentes no relacionadas con P3-A: formato de id de `ulysseWhyHaiti`, fechas y autorías pendientes de casos ajenos a este sublote, y títulos compuestos que requieren decisión editorial).

## 5. Incertidumbre residual

**`cuijla`** es el único punto abierto de P3-A que no se resolvió unilateralmente. La propia decisión académica del caso aprueba `recorrido: "c4"` y `recorridos_sec: ["c2"]`, pero su §8 fija explícitamente `"estado_recorrido": "pendiente"` como parte de la clasificación aprobada, y su estado final declarado es `DECISION_ACADEMICA_EMITIDA` / `NO_IMPLEMENTADA` / `VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO` — a la espera de que se determine el mecanismo técnico para registrar la reserva conceptual del hallazgo `VACÍO_TAXONÓMICO_POSIBLE`, decisión que el propio documento remite expresamente a un momento posterior. El dato actualmente implementado tiene `"estado_recorrido": "confirmado"`, sin que exista ningún documento posterior que autorice ese cambio de "pendiente" a "confirmado" ni que registre la reserva conceptual pendiente. Esta auditoría no revirtió el valor porque hacerlo por su cuenta —sin una instrucción académica que lo pida— sería exactamente el tipo de modificación por inferencia que la regla metodológica de esta tarea prohíbe. **Queda pendiente de que la Dirección Académica confirme expresamente** si `estado_recorrido` debe permanecer `"confirmado"` (y en tal caso, cómo se registra la reserva conceptual) o si debe revertirse a `"pendiente"` conforme al texto literal de la decisión.

Ninguna otra incertidumbre residual: los nueve casos restantes de P3-A tienen decisión académica, implementación coincidente y, cuando corresponde, informe de implementación o auditoría de aftershocks que lo confirma.

## 6. Estado de Git

- **Commit de consolidación de P3-A** (lecturas, decisiones académicas —incluida la nueva de `allen_dikimanera`—, informes de implementación, gestión y localización de fuente de `escalante`, y `datos-atlas.json`/`.js` corregidos): `3942172c7547c4a12a15c51a46d1e0dc32aec8de`, rama `main`.
- Este documento de cierre se añade en un commit propio e independiente, posterior al anterior, siguiendo el mismo precedente que `cierre-lote-p2-etapa-2-3f.md` (que registró el commit de su propio cierre en el informe de entrega y no dentro de su propio texto). Su hash se comunica en el informe de entrega de esta tarea.
- No se ejecutó `git push` en ningún momento: la publicación a `origin` sigue correspondiendo a Rob desde su equipo, conforme al criterio ya establecido en `git-desde-el-sandbox.md`.

## 7. P3 permanece abierto

**P3-A es 10 de los 78 casos de P3.** Los sublotes **P3-B a P3-H (68 casos) permanecen íntegramente sin trabajar**: sin lectura, sin decisión académica, sin implementación. Este documento cierra únicamente el sublote P3-A y dentro de él deja un punto pendiente de confirmación (`cuijla`, §5) y un caso bloqueado (`escalante`, §2). No se avanza a `fouchard` ni a ningún otro caso de P3-B. La apertura de P3-B requiere una instrucción académica independiente.

## Estado final

`P3_A_CONSOLIDADO_9_DE_10_CASOS_CON_DECISION_E_IMPLEMENTACION`
`P3_A_1_CASO_BLOQUEADO` (`escalante`)
`P3_A_1_INCERTIDUMBRE_RESIDUAL_ABIERTA` (`cuijla`, §5)
`P3_CONTINUA_ABIERTO` — 68/78 casos de P3-B a P3-H sin trabajar
`P3_NO_CERRADO`
