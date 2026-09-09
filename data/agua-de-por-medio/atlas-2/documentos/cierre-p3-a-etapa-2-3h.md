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
| 3 | `cuijla` | Sí (con dos ampliaciones) | Sí | `c4` principal operativo, secundaria C2 | `pendiente` | El dato tenía `"confirmado"` sin documento que autorizara ese cambio desde el `"pendiente"` que fija literalmente la decisión académica (§8). Resuelto mediante `dictamen-resolucion-cuijla-p3-etapa-2-3h.md`, aprobado por la Dirección Académica: la clasificación C4/C2 está académicamente demostrada; el estado permanece `pendiente` exclusivamente por la deuda de implementación de la reserva conceptual (§5, §5bis) | `estado_recorrido` revertido a `pendiente`; `fuente_recorrido` ampliado con el dictamen; reserva conceptual registrada en §5bis |
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

Verificada mediante tres métodos independientes tras las correcciones: (1) `json.load` de `datos-atlas.json` sin error, 257 obras, 614 relaciones; (2) evaluación de `datos-atlas.js` en una sandbox de `node` (`vm.runInContext`) sin error de sintaxis; (3) comparación campo por campo (`recorrido`, `recorridos_sec`, `arquitectura_recorrido`, `estado_recorrido`, `fuente_recorrido`) de los cuatro nodos modificados (`duboisturits`, `mintzpricebirth`, `allen_dikimanera`, `cuijla`) entre ambos archivos: coinciden exactamente. Los cuatro validadores del repositorio (`validar-atlas.mjs`, `validar-fenomenos.mjs`, `validar-temporalidad.mjs`, `validar-piloto-atlas-2.mjs`) se ejecutaron después de los cambios: **0 errores** en los cuatro (`validar-atlas.mjs` reporta 4 advertencias preexistentes no relacionadas con P3-A: formato de id de `ulysseWhyHaiti`, fechas y autorías pendientes de casos ajenos a este sublote, y títulos compuestos que requieren decisión editorial).

## 5. Resolución del caso `cuijla`

La incertidumbre que este mismo documento dejó abierta en su versión anterior —si `estado_recorrido` debía permanecer `"confirmado"` o revertirse a `"pendiente"`— fue resuelta mediante reconstrucción documental íntegra, sin recurrir a la coherencia técnica ni al valor `"confirmado"` ya implementado como evidencia. El resultado consta en `dictamen-resolucion-cuijla-p3-etapa-2-3h.md` y fue aprobado por la Dirección Académica.

La reconstrucción distingue dos preguntas que el caso había mantenido confundidas: si C4 principal y C2 secundaria están académicamente demostrados, y si el caso puede darse por implementado sin más. La respuesta a la primera es sí, sin reservas: tres fases de lectura y dos ampliaciones dirigidas lo sostienen. La respuesta a la segunda es no, porque la propia decisión académica (§16) condiciona la implementación completa del caso a dos elementos —la clasificación operativa y el registro de una reserva conceptual sobre el hallazgo `VACÍO_TAXONÓMICO_POSIBLE`— y nunca determinó el mecanismo del segundo. Ningún documento posterior a la decisión académica lo hizo tampoco, hasta este cierre.

En consecuencia, `estado_recorrido` se revirtió de `"confirmado"` a `"pendiente"` en `datos-atlas.json` y `datos-atlas.js`, sin tocar `recorrido`, `recorridos_sec` ni `arquitectura_recorrido`, y `fuente_recorrido` se amplió para incluir el dictamen junto a la decisión académica. La reserva conceptual del hallazgo queda registrada formalmente en el §5bis, siguiendo el mismo mecanismo ya usado en el corpus para este propósito.

Ninguna otra incertidumbre residual: los nueve casos restantes de P3-A tienen decisión académica, implementación coincidente y, cuando corresponde, informe de implementación o auditoría que lo confirma.

## 5bis. Reservas conceptuales — inventario (P3-A)

Este inventario sigue la misma estructura procedimental que `cierre-lote-p2-etapa-2-3f.md` §4 usó para registrar las reservas conceptuales de P2 —una tabla dentro del acta de cierre del lote, no un campo nuevo en `datos-atlas.json`—. No se traslada de ese precedente ninguna categoría sustantiva: la de `cuijla` es una reserva propia, sin relación de contenido con la de `wynterblackmetamorphosis` (`INDIGENIZACIÓN ≠ CREOLIZACIÓN`, C8), que sirve aquí únicamente de modelo de forma.

| Caso | Estado | Descripción | Clasificación operativa vigente | Consecuencia | Condición de reevaluación | Prohibición provisional |
|---|---|---|---|---|---|---|
| `cuijla` | `VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO` | El vocabulario C1–C10 no captura adecuadamente el principio transversal mediante el cual *Cuijla* articula persistencia, reinterpretación y transformación de africanismos a través de dominios heterogéneos (vivienda, vestido, alimentación, parentesco, ciclo vital, espiritualidad, medicina, lengua); dos de esos dominios (vestido, alimentación) carecen incluso de capítulo propio y no tienen lugar posible en ninguna corriente existente | C4 principal, C2 secundaria | El vacío no invalida C4/C2: ambas corrientes siguen siendo la mejor representación disponible del componente histórico-estructural del libro. El vacío afecta la completitud de la implementación del caso, no la validez de su clasificación | Acumulación de evidencia comparativa procedente de otros casos del corpus que documenten una tensión equivalente entre el vocabulario C1–C10 y un principio organizador transversal | No crear una corriente nueva (C11) a partir de este único caso |

**Fuente:** `decision-academica-cuijla-p3-etapa-2-3h.md` §4, §13, §16; `dictamen-resolucion-cuijla-p3-etapa-2-3h.md` §4, §8.

## 6. Estado de Git

- **Commit de consolidación de P3-A** (lecturas, decisiones académicas —incluida la nueva de `allen_dikimanera`—, informes de implementación, gestión y localización de fuente de `escalante`, y `datos-atlas.json`/`.js` corregidos): `3942172c7547c4a12a15c51a46d1e0dc32aec8de`, rama `main`.
- **Commit del acta de cierre original** (`cierre-p3-a-etapa-2-3h.md`, primera versión): `f55fdc6357aa163f58e79859a3a5653f6e860e33`, rama `main`.
- **Commit de resolución de `cuijla`** (dictamen académico, corrección de `estado_recorrido` en `datos-atlas.json`/`.js`, ampliación de `fuente_recorrido`, y actualización de esta acta de cierre con la resolución del caso y el inventario de reservas conceptuales de §5bis): hash comunicado en el informe de entrega de esta tarea, siguiendo el mismo precedente que los dos commits anteriores.
- No se ejecutó `git push` en ningún momento: la publicación a `origin` sigue correspondiendo a Rob desde su equipo, conforme al criterio ya establecido en `git-desde-el-sandbox.md`.

## 7. P3 permanece abierto

**P3-A es 10 de los 78 casos de P3.** Los sublotes **P3-B a P3-H (68 casos) permanecen íntegramente sin trabajar**: sin lectura, sin decisión académica, sin implementación. Dentro de P3-A, la distribución final de estados no es "diez casos cerrados" de forma indiferenciada, sino tres situaciones distintas: **8 casos confirmados** (`duboisturits`, `wilsoncrabantics`, `olwigstjohn`, `allen_dikimanera`, `aftershocks`, `mintzpricebirth`, `abello`, `roberts`), **1 caso académicamente resuelto pero pendiente de implementación por deuda taxonómica** (`cuijla`, §5, §5bis) y **1 caso bloqueado por fuente insuficiente** (`escalante`, §2). No se avanza a `fouchard` ni a ningún otro caso de P3-B. La apertura de P3-B requiere una instrucción académica independiente.

## Estado final

`P3_A_CONSOLIDADO_8_DE_10_CASOS_CONFIRMADOS`
`P3_A_1_CASO_ACADEMICAMENTE_RESUELTO_PENDIENTE_POR_DEUDA_TAXONOMICA` (`cuijla`, §5, §5bis)
`P3_A_1_CASO_BLOQUEADO` (`escalante`)
`P3_A_CERRADO`
`P3_CONTINUA_ABIERTO` — 68/78 casos de P3-B a P3-H sin trabajar
`P3_NO_CERRADO`
