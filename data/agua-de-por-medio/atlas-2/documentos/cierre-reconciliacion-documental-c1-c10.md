# Cierre — Reconciliación documental C1–C10

Cierra la fase abierta en `apertura-reconciliacion-documental-c1-c10.md`. Las cuatro discrepancias registradas en `cola-lectura-pendiente-atlas-2.md` §§9-13 quedan reconciliadas por vía exclusivamente documental. No se modificó `datos-atlas.js` ni `datos-atlas.json`: el corpus mantiene 257 obras y 614 relaciones, verificado antes y después de esta fase.

## 1. Tabla de cierre

| Discrepancia | Causa | Ids afectados | Acción | Resultado | Estado |
|---|---|---|---|---|---|
| C2 — `34/35` | `CONTEO_O_DERIVACION_INCORRECTA`: la tabla del §4.5 de `dictamen-academico-c2.md` contiene 35 filas únicas (verificado programáticamente, sin duplicados, sin solapamiento con los 18 ids ya revisados en §4.3); la prosa del dictamen (§2, §4.2, §4.3, §4.5, §8) decía 34. La aritmética declarada (18+34=52) no cerraba; la correcta es 18+35=53. | Las 35 entradas de la tabla §4.5 (ninguna se reclasifica) | Nota de corrección añadida a `dictamen-academico-c2.md` §4.7. Corregidas las cifras en `cola-lectura-pendiente-atlas-2.md` §9 y §13.A. | La cifra correcta del universo de relectura de C2 es 35 (53 señales totales). Las 35 entradas siguen pendientes de lectura académica; ninguna se clasificó. | `DISCREPANCIA_C2_34_35_RESUELTA` |
| Frontera C3/C9 | `DOCUMENTACION_DESACTUALIZADA`: `matriz-fronteras-c1-c10.md` y `cola-lectura-pendiente-atlas-2.md` (ambos consolidados 2026-08-17) son anteriores a `dictamen-academico-bloque-2-etapa-2-3.md` (2026-08-18) y a las decisiones de P3-C/P3-D/P3-F (2026-09-09/10), que ya habían cerrado e implementado cuatro casos de esta frontera. | `chevannes`, `pricefirst`, `travelstooy` (dictamen bloque 2); `truebornmaroons`, `zips_nannysasafo`, `fischer` (P3, no mencionados antes en la cola) | Las tres primeras filas se retiraron de la tabla activa (§2) y se trasladaron a §3 de la cola, con motivo de exclusión. §10 de la cola reescrito para registrar los cuatro casos vivos de `FRONTERA_CONSTITUTIVA(C3,C9)`. | El corpus vivo ya tenía la decisión correcta en los seis casos; solo la documentación estaba atrasada. Cuatro casos confirmados de `FRONTERA_CONSTITUTIVA(C3,C9)`: `pricefirst`, `truebornmaroons`, `zips_nannysasafo`, `fischer`. | `FRONTERA_C3_C9_RECONCILIADA` |
| Frontera C3/C10 | `DOCUMENTACION_DESACTUALIZADA`: los mismos dos documentos (2026-08-17) son anteriores a `dictamen-academico-bloque-1-etapa-2-3.md` (2026-08-18), que ya había cerrado e implementado el caso `quintero`. | `quintero` | La fila se retiró de la tabla activa (§2) y se trasladó a §3. §11 de la cola reescrito. | `quintero` es C10 principal, C3 descartada expresamente, sin frontera — ya implementado en el corpus. No existe ningún caso vivo de `FRONTERA_CONSTITUTIVA(C3,C10)`; el par permanece sin caso directo. | `FRONTERA_C3_C10_RECONCILIADA` |
| Frontera C2/C10 | `CONTEO_O_DERIVACION_INCORRECTA`: `cola-lectura-pendiente-atlas-2.md` §12 describía el par como `PR`; `matriz-fronteras-c1-c10.md` y `marco-academico-consolidado-atlas-2.md` §17 y §22 (tensión 3) coinciden en `SC` — vacío nunca tratado por ningún dictamen. | Ninguno (0 casos directos en el corpus, antes y después) | §12 de la cola corregido de PR a SC, con cita a las dos fuentes de autoridad superior. | El par permanece sin criterio formulado y sin caso empírico. Se documentaron cuatro casos de coexistencia C2+C10 sin constituir frontera (`olwigstjohn`, `besson`, `wilsoncrabantics`, `fuentesdispossessed`), ninguno reclasificado. | `FRONTERA_C2_C10_RECONCILIADA` |

## 2. Verificación

- El corpus vivo (`datos-atlas.json`) no fue tocado: 257 obras, 614 relaciones, idénticas antes y después de esta fase (verificado por `git status` sobre `datos-atlas.js`/`datos-atlas.json`, sin cambios).
- `sincronizar.py`, los cuatro validadores y la auditoría semántica de alcance no se ejecutaron porque ninguna discrepancia requirió corrección de datos (§12 de la instrucción de apertura de esta fase los reserva para cuando "se modifican datos").
- Archivos modificados, exactamente: `dictamen-academico-c2.md` (nota §4.7, añadida; ninguna decisión de clasificación alterada), `cola-lectura-pendiente-atlas-2.md` (§0, §3, §9, §10, §11, §12, §13.A, §14, §15). Archivo creado: `apertura-reconciliacion-documental-c1-c10.md`.
- La tabla activa de la cola (§2) se verificó programáticamente antes y después: 106 filas → 102 filas, 102 ids únicos, cero duplicados. La tabla de casos excluidos (§3) pasó de 51 a 55 filas. Las estadísticas de §14 (prioridad, corriente, tipo de lectura, estado de frontera) se recalcularon con el mismo método de conteo, verificado primero contra los totales originales de 106 filas antes de aplicarlo a las 102 restantes.
- Grupo B, P3, P4, `_to_delete/` y el resto del corpus permanecen intactos; no se reabrió ninguna decisión de clasificación.

`VALIDACION_0_ERRORES_NUEVOS`

## 3. Observación fuera de alcance, no ejecutada

`matriz-fronteras-c1-c10.md` (columna "Pendientes" de las filas C3/C9 y C3/C10) queda con la misma desactualización que tenía `cola-lectura-pendiente-atlas-2.md`: nombra como pendientes casos que ya están cerrados. Ese documento se autodescribe como "borrador para revisión, no versionado, no comprometido a Git" en su propio encabezado, pese a estar efectivamente versionado desde el commit `57dd72e`. Corregirlo, y resolver esa contradicción de su propio encabezado, excede el mandato de esta fase (limitado a `cola-lectura-pendiente-atlas-2.md` §§9-13) y no se ejecutó. Se señala para una consolidación documental posterior, a discreción de Dirección Académica.

`RECONCILIACION_DOCUMENTAL_C1_C10_CERRADA`

## 4. Después de este cierre

No se abren los quince universos internos de corriente. La fase `TRIAGE_INTERNO_C1_C10`, con universo, lotes y criterio de cierre propios, queda pendiente de diseño explícito, conforme a la instrucción de apertura de esta fase (§15).
