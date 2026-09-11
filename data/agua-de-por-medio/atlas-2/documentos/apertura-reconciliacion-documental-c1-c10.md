# Apertura — Reconciliación documental C1–C10

Fase acotada, abierta después del cierre de P3, el saneamiento post-P3, P4, Grupo B, la sincronización de `benedictykokken_haitiexception` y de `gudynas`. Estado previo confirmado: `PENDIENTES_TECNICOS_DOCUMENTO_RECTOR = 0`.

Esta fase no reabre ninguno de los quince universos internos de corriente ni hace triage de obras nuevas. Trabaja exclusivamente sobre las cuatro discrepancias documentales registradas en `cola-lectura-pendiente-atlas-2.md` §§9–13.

## 1. Las cuatro discrepancias

| # | Discrepancia | Fuente documental | Estado inicial |
|---|---|---|---|
| 1 | C2 — `34/35` | `dictamen-academico-c2.md` §2, §4.2, §4.3, §4.5, §8; `cola-lectura-pendiente-atlas-2.md` §9 | El dictamen declara en prosa "34 entradas" en cinco lugares distintos; su propia tabla (§4.5) nombra 35. La cola registra la discrepancia sin resolverla. |
| 2 | Frontera C3/C9 | `matriz-fronteras-c1-c10.md` (fila C3/C9); `cola-lectura-pendiente-atlas-2.md` §2 (filas `chevannes`, `pricefirst`, `travelstooy`) y §10 | La matriz y la cola registran `chevannes`, `pricefirst` y `travelstooy` como lectura dirigida pendiente, sin resolver. El corpus vivo ya tiene arquitectura `FRONTERA_CONSTITUTIVA(C3,C9)` confirmada en cuatro obras. |
| 3 | Frontera C3/C10 | `matriz-fronteras-c1-c10.md` (fila C3/C10); `cola-lectura-pendiente-atlas-2.md` §2 (fila `quintero`) y §11 | La matriz y la cola registran `quintero` como caso testigo pendiente, sin clasificar. El corpus vivo ya tiene a `quintero` clasificado. |
| 4 | Frontera C2/C10 | `cola-lectura-pendiente-atlas-2.md` §12; `matriz-fronteras-c1-c10.md` (fila C2/C10); `marco-academico-consolidado-atlas-2.md` §17, §22.3 | La cola describe el par como `PR` (provisional). La matriz y el marco consolidado lo describen como `SC` (sin criterio formulado, vacío no tratado por ningún dictamen). |

## 2. Hipótesis de causa

- **Discrepancia 1 (C2 34/35):** error de conteo o derivación dentro del propio `dictamen-academico-c2.md`: la tabla se redactó con 35 filas y la prosa que la resume nunca se actualizó a ese número. Categoría hipotética: `CONTEO_O_DERIVACION_INCORRECTA`.
- **Discrepancia 2 (C3/C9):** `matriz-fronteras-c1-c10.md` (17-ago-2026) y la consolidación de `cola-lectura-pendiente-atlas-2.md` (17-ago-2026) son anteriores a `dictamen-academico-bloque-2-etapa-2-3.md` (18-ago-2026) y a las decisiones de P3-C/P3-D/P3-F (9-10-sep-2026), que cerraron los cuatro casos. Categoría hipotética: `DOCUMENTACION_DESACTUALIZADA`.
- **Discrepancia 3 (C3/C10):** los mismos dos documentos (17-ago-2026) son anteriores a `dictamen-academico-bloque-1-etapa-2-3.md` (18-ago-2026), que cerró el caso `quintero`. Categoría hipotética: `DOCUMENTACION_DESACTUALIZADA`.
- **Discrepancia 4 (C2/C10):** transcripción incorrecta del estado del par dentro de la cola: la matriz y el marco consolidado —ambos de autoridad igual o superior a la cola— coinciden en `SC`; solo la cola dice `PR`. Categoría hipotética: `CONTEO_O_DERIVACION_INCORRECTA`.

Ninguna de las cuatro hipótesis presupone `CONTRADICCION_REAL` ni `DECISION_ACADEMICA_INCOMPLETA`: en los cuatro casos existe una fuente normativa cerrada que permite resolver el desacuerdo sin consultar a Dirección Académica.

## 3. Procedimiento

Para cada discrepancia: (1) reconstrucción programática del estado vivo del corpus contra la fuente documental citada; (2) verificación de fechas de commit para establecer si la documentación es anterior o posterior a la decisión que debería reflejar; (3) clasificación en una de las cinco categorías A-E; (4) dictamen de resolución (uno de los cinco tipos autorizados); (5) si el corpus está correcto, corrección exclusivamente documental — sin tocar `datos-atlas.js`, `datos-atlas.json`, relaciones ni arquitectura de recorrido.

No se autoriza lectura bibliográfica nueva salvo que, agotada la verificación documental, persista una contradicción académica no resoluble por esta vía. No se recalculan las 45 fronteras de `matriz-fronteras-c1-c10.md` ni se reabre su auditoría interna (apartados C y D): esa tarea excede el mandato de esta fase, tal como la propia consolidación del marco académico señaló para un problema análogo (tensión 4, §22).

Autoridad aplicada, en este orden: `datos-atlas.js` vivo; decisiones académicas versionadas (dictámenes de bloque y de P3); documentos de cierre (`marco-academico-consolidado-atlas-2.md`); historial Git (fechas de commit); documentos preliminares (`matriz-fronteras-c1-c10.md`, marcada en su propio encabezado como borrador).
