# Informe de implementación · `dubuissonhaiti` · Atlas 2.0 · P3-B · Etapa 2.3J

**Instancia que decide:** Dirección Académica de Pensamiento Caribe. **Alcance:** implementación técnica y validación de regresión de la norma ya ratificada (`decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md`, con la corrección de escala segmentaria/global ya incorporada). No se reabrió la decisión académica. No se reabrió el libro. No se modificaron las definiciones de C1–C10. No se creó cuarta arquitectura ni campo nuevo.

---

## 1. Norma ratificada aplicada

Bajo `arquitectura_recorrido.tipo === "sin_principal_clasificable"` queda autorizado `recorridos_sec.length = 0..2`, siempre que exista decisión académica explícita que demuestre para cada secundaria: (1) sustantividad segmentaria; (2) retirada segmentaria destructiva o fuertemente degradante; (3) retirada global no destructiva; (4) fundamento textual; (5) descarte como principal; (6) descarte de frontera constitutiva y síntesis multicorriente. Norma no discutida de nuevo en esta ronda.

## 2. Cambio exacto en el validador

`scripts/validar-atlas.mjs`, función `validateRecorridoArchitecture`, exclusivamente en la rama `arquitectura.tipo === "sin_principal_clasificable"`:

```diff
     if (arquitectura.tipo === "sin_principal_clasificable") {
       // decision-normativa-sin-principal-clasificable-atlas-2.md: esta categoría exige un caso
-      // académicamente cerrado, no una lectura pendiente ni un atajo de clasificación. La regla
-      // es deliberadamente estricta (revisión de la Etapa 2.3J): no autoriza recorridos_sec,
-      // a diferencia de frontera_constitutiva, porque aquí no hay recorrido principal al que
-      // una secundaria pueda subordinarse.
+      // académicamente cerrado, no una lectura pendiente ni un atajo de clasificación.
+      // decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md: recorridos_sec admite
+      // 0 a 2 elementos bajo esta arquitectura (antes exigía arreglo vacío sin excepción). La
+      // subordinación ya no exige un recorrido principal: exige una decisión académica que
+      // documente, por cada elemento, sustantividad segmentaria y la doble prueba de retirada
+      // (destructiva o fuertemente degradante en su segmento; no destructiva para el libro
+      // completo) — condición académica que este validador no puede verificar por sí solo.
       if (arquitectura.recorridos.length !== 0) {
         report.error("SIN_PRINCIPAL_CLASIFICABLE", `${work.id}: sin_principal_clasificable no admite recorridos estructurantes.`);
       }
       if (recorrido !== null && recorrido !== undefined) {
         report.error("SIN_PRINCIPAL_CLASIFICABLE", `${work.id}: sin_principal_clasificable exige recorrido: null.`);
       }
-      if (!Array.isArray(recorridosSec) || recorridosSec.length !== 0) {
-        report.error("SIN_PRINCIPAL_CLASIFICABLE", `${work.id}: sin_principal_clasificable exige recorridos_sec: [] — no autoriza secundarias contextuales.`);
-      }
       if (estado !== "confirmado") {
         report.error("SIN_PRINCIPAL_CLASIFICABLE", `${work.id}: sin_principal_clasificable exige estado_recorrido "confirmado" — no puede quedar pendiente ni usarse como atajo de lectura incompleta.`);
       }
```

Se eliminó exclusivamente el bloque que exigía `recorridos_sec.length === 0`. No se sustituyó por una restricción de cardinalidad nueva: la validación genérica de `recorridos_sec` (arreglo, máximo dos elementos, ids `c1`–`c10` válidos, reglas de duplicación existentes), ya vigente al inicio de la función y no tocada, sigue resolviendo eso. Se conservan intactas, sin cambio, las condiciones `arquitectura.recorridos.length === 0`, `recorrido === null`, `estado === "confirmado"` y `fuente` no vacío. No se alteraron las ramas `frontera_constitutiva` ni `sintesis_multicorriente`, ni ninguna otra lógica del validador.

## 3. Validación preventiva

Ejecutada sobre las 257 obras del corpus (verificadas contra `git show HEAD:...` — la línea base real de esta ronda, idéntica en cardinalidad e IDs a la del último commit, `524ba66`; la cifra de 254 que citaba una versión anterior de este informe correspondía al estado del corpus el 25 de agosto, documentado en `decision-normativa-sin-principal-clasificable-atlas-2.md`, no al estado al inicio de esta ronda — ver auditoría pre-commit, `auditoria-precommit-dubuissonhaiti-p3-etapa-2-3j.md`, §1), con `dubuissonhaiti` todavía sin modificar, inmediatamente después de tocar el validador y antes de tocar cualquier dato:

```
$ node scripts/validar-atlas.mjs
[INFO] datos-atlas.js y datos-atlas.json están sincronizados.
...
Resultado: 0 error(es), 4 advertencia(s).
```

Idéntico a la línea base tomada antes de modificar el validador (mismas 4 advertencias: `ID_FORMATO`, `FECHA_PENDIENTE`, `AUTORIA_PENDIENTE`, `ENTRADA_COMPUESTA`). `rebeldestiny` conservó, sin tocarla, `recorrido: null` / `recorridos_sec: []` / `arquitectura_recorrido: {"tipo":"sin_principal_clasificable","recorridos":[]}` / `estado_recorrido: "confirmado"`. `sharpewake` conservó, sin tocarla, `frontera_constitutiva`. No aparecieron errores nuevos en ninguna obra del corpus. Se procedió a implementar `dubuissonhaiti`.

## 4. Implementación de `dubuissonhaiti`

`datos-atlas.js` es la fuente canónica (`data/agua-de-por-medio/sincronizar.py`: "el `.js` es la única fuente de verdad y el `.json` se genera"). Se localizó el objeto de `dubuissonhaiti` dentro del `.js` por coincidencia exacta y única de texto (verificado programáticamente: exactamente una ocurrencia antes de escribir) y se sustituyeron únicamente los cuatro campos autorizados. `datos-atlas.json` se regeneró íntegramente con `python3 data/agua-de-por-medio/sincronizar.py` — nunca se editó a mano.

## 5. Campos modificados

```diff
   "recorrido": null,
-  "recorridos_sec": [],
-  "arquitectura_recorrido": null,
-  "estado_recorrido": "pendiente"
+  "recorridos_sec": ["c5", "c9"],
+  "arquitectura_recorrido": {"tipo": "sin_principal_clasificable", "recorridos": []},
+  "estado_recorrido": "confirmado",
+  "fuente_recorrido": [
+    "lectura-dubuissonhaiti-p3-etapa-2-3j.md",
+    "ampliacion-probatoria-dubuissonhaiti-cap3-p3-etapa-2-3j.md",
+    "decision-academica-dubuissonhaiti-p3-etapa-2-3j.md",
+    "decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md"
+  ]
```

`recorrido` no cambió (seguía y sigue `null`). `fuente_recorrido` no existía previamente en esta entrada — no había fuentes legítimas que preservar; se creó con los cuatro documentos mínimos exigidos.

## 6. Campos preservados

Diff completo de la entrada, campo por campo — sin cambios en: `id` (`dubuissonhaiti`), `k` (`obra`), `t` (`Reclaiming Haiti's Futures`), `a` (`Darlène Elizabeth Dubuisson`), `y` (`2024`), `f` (`["memoria","soberanias","colonialidad"]`), `l` (`haiti`), `tr` (`anglófono (EE.UU.)`), `ap` (descripción breve, sin alteración de una sola palabra). No se tocó territorio, fenómenos, autoría, fecha, ni ningún metadato, relación o etiqueta fuera de los cuatro campos de recorrido listados en el §5.

## 7. Fuentes de trazabilidad incorporadas

```json
"fuente_recorrido": [
  "lectura-dubuissonhaiti-p3-etapa-2-3j.md",
  "ampliacion-probatoria-dubuissonhaiti-cap3-p3-etapa-2-3j.md",
  "decision-academica-dubuissonhaiti-p3-etapa-2-3j.md",
  "decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md"
]
```

Las cuatro son las exigidas como mínimo. No había fuentes previas que borrar.

## 8. Sincronía JSON/JS

```
$ python3 data/agua-de-por-medio/sincronizar.py
datos-atlas.json regenerado desde datos-atlas.js
  version 1.17.0 · 257 obras · 614 relaciones
  corroboradas 394 de 614 (64 %)

$ python3 data/agua-de-por-medio/sincronizar.py --check
En sincronía · v1.17.0 · 257 obras · 614 relaciones
```

## 9. Validadores ejecutados

| # | comando |
|---|---|
| 1 | `node scripts/validar-atlas.mjs` |
| 2 | `node scripts/validar-fenomenos.mjs` |
| 3 | `node scripts/validar-temporalidad.mjs` |
| 4 | `node scripts/validar-piloto-atlas-2.mjs` |

## 10. Resultados de validación

| validador | errores | advertencias | comparación con línea base |
|---|---|---|---|
| `validar-atlas.mjs` | **0** | 4 (`ID_FORMATO`, `FECHA_PENDIENTE`, `AUTORIA_PENDIENTE`, `ENTRADA_COMPUESTA`) | idéntica — 0 nuevas |
| `validar-fenomenos.mjs` | **0** | 3 (`MINIMO` ×3: `keeganhofman`, `bonilla`, `ferdinand`) | idéntica — 0 nuevas |
| `validar-temporalidad.mjs` | **0** | 2 (`PENDIENTE`, `PERIODO`) | idéntica — 0 nuevas |
| `validar-piloto-atlas-2.mjs` | **0** | 0 | idéntica |

`0 errores nuevos` en el corpus completo, no solo en `dubuissonhaiti`.

## 11. Pruebas negativas

Ejecutadas contra la lógica real del validador (`validateRecorridoArchitecture`, exportada temporalmente sin ninguna otra alteración — diff verificado: idéntica al archivo productivo salvo dos palabras `export` añadidas — para poder invocarla con objetos sintéticos fuera del corpus):

| caso | entrada | resultado exigido | resultado obtenido |
|---|---|---|---|
| NEG-1 | `sin_principal_clasificable` + `recorridos_sec` de 3 elementos | debe fallar | **falla** — `[RECORRIDOS_SEC]` |
| NEG-2 | `sin_principal_clasificable` + `recorrido: "c5"` | debe fallar | **falla** — `[SIN_PRINCIPAL_CLASIFICABLE]` |
| NEG-3 | `sin_principal_clasificable` + `estado_recorrido: "pendiente"` | debe fallar | **falla** — `[SIN_PRINCIPAL_CLASIFICABLE]` |
| NEG-4 | `recorrido: null` + `estado: "confirmado"` + `arquitectura_recorrido: null` | debe seguir fallando | **falla** — `[RECORRIDO_NULL_SIN_ARQUITECTURA]` |
| POS-1 (control) | `sin_principal_clasificable` + `recorridos_sec: []` (rebeldestiny-like) | debe pasar | **pasa** — 0 errores |
| POS-2 (control) | `sin_principal_clasificable` + `recorridos_sec: ["c5","c9"]` (dubuissonhaiti-like) | debe pasar | **pasa** — 0 errores |
| POS-3 (control) | `frontera_constitutiva` con `recorridos` propios (sharpewake-like) | no debe verse afectado | **pasa** — 0 errores |

Los cuatro casos negativos exigidos siguen bloqueados. La relajación autorizada es exclusivamente sobre `recorridos_sec.length === 0`; ninguna otra garantía se debilitó.

## 12. Comprobación de `rebeldestiny`

```json
{"recorrido": null, "recorridos_sec": [], "arquitectura_recorrido": {"tipo": "sin_principal_clasificable", "recorridos": []}, "estado_recorrido": "confirmado"}
```
Sin modificar. Sigue representando: sin principal + sin dimensiones parciales preservadas.

## 13. Comprobación de `dubuissonhaiti`

```json
{"recorrido": null, "recorridos_sec": ["c5", "c9"], "arquitectura_recorrido": {"tipo": "sin_principal_clasificable", "recorridos": []}, "estado_recorrido": "confirmado", "fuente_recorrido": [4 documentos]}
```
`recorrido === null` ✓; `recorridos_sec === ["c5","c9"]` ✓; `arquitectura_recorrido.tipo === "sin_principal_clasificable"` ✓; `arquitectura_recorrido.recorridos.length === 0` ✓; `estado_recorrido === "confirmado"` ✓; `fuente_recorrido` contiene la trazabilidad requerida ✓. Representa: sin principal + C5/C9 como dimensiones sustantivas parciales.

## 14. Comprobación de `sharpewake`

```json
{"recorrido": null, "recorridos_sec": [], "arquitectura_recorrido": {"tipo": "frontera_constitutiva", "recorridos": ["c2", "c9"]}, "estado_recorrido": "confirmado"}
```
Sin modificar. Sigue representando frontera constitutiva. Entra exclusivamente en la rama `arquitectura.tipo === "frontera_constitutiva"` de `validateRecorridoArchitecture`, estructuralmente distinta de la rama modificada: no hay ruta de código que la lleve a evaluar la condición eliminada. No queda confundida, ni semántica ni técnicamente, con la extensión de `sin_principal_clasificable`.

## 15. Diff final auditado

`git --no-optional-locks diff --stat` sobre el árbol de trabajo:

```
 .../atlas-2/documentos/apertura-control-p3-b-etapa-2-3i.md |  4 +++
 data/agua-de-por-medio/datos-atlas.js                      |  2 +-
 data/agua-de-por-medio/datos-atlas.json                    | 31 ++++++++++++++++----
 scripts/validar-atlas.mjs                                  | 14 +++++-----
 4 files changed, 38 insertions(+), 13 deletions(-)
```

`git --no-optional-locks status --short` confirma además documentos nuevos sin seguimiento de esta etapa (de los cuales solo `informe-implementacion-dubuissonhaiti-p3-etapa-2-3j.md` y la fila añadida a `apertura-control-p3-b-etapa-2-3i.md` pertenecen a esta ronda de implementación; `lectura-`, `ampliacion-probatoria-`, `decision-academica-` y `decision-normativa-sin-principal-con-dimensiones-` fueron producidos en rondas previas de esta misma etapa, dentro de esta sesión, y ya estaban sin seguimiento antes de que esta ronda comenzara — ver auditoría pre-commit §2) y `_to_delete/` intacto.

Comparación programática, obra por obra, entre `git show HEAD:data/agua-de-por-medio/datos-atlas.json` y el árbol de trabajo (257 obras en ambos, mismos IDs, diccionarios comparados campo por campo): la única obra con diferencia de contenido es `dubuissonhaiti` (los cuatro campos del §5). `sharpewake` y `rtsmithmatrifocal` son, campo por campo, idénticas entre HEAD y el árbol de trabajo (`valor antes === valor después` verificado programáticamente, no solo revisado visualmente); su aparición en el diff de texto de `datos-atlas.json` (ver §18) es exclusivamente de formato. Ninguna otra de las 257 obras aparece en ningún diff. No se detectaron modificaciones accidentales ni obras añadidas o eliminadas.

## 16. Reserva conceptual

`placemaking / inhabitability / homing / fractura-sutura / producción de futuro` no se convirtió en dato estructural: no se creó C11, no se creó `recorrido`, no se creó arquitectura, no se creó campo, no se creó alias taxonómico. Se registró exclusivamente mediante el mecanismo de reservas conceptuales ya vigente: una fila nueva para `dubuissonhaiti` en la tabla de `apertura-control-p3-b-etapa-2-3i.md` §"Reservas conceptuales — inventario (P3-B, en curso)", en el mismo formato que ya usan `rebeldestiny` y `sharpewake`, con su línea de fuente correspondiente.

## 17. Deuda taxonómica pendiente

Sigue abierta. Esta implementación resuelve la representación técnica —cómo declarar sin falsear el dictamen que no hay principal pero sí dimensiones parciales—, no la pregunta taxonómica de fondo: C1–C10 no nombra por sí solo el principio de producción de lugar y de futuro habitables dentro de fracturas coloniales persistentes que organiza el libro completo de Dubuisson. Queda anotada, como en los dos precedentes, para acumulación comparativa futura — no se abre C11 a partir de un solo caso.

## 18. Incidencias

Al regenerar `datos-atlas.json` con `sincronizar.py`, dos entradas ajenas a `dubuissonhaiti` cambiaron de formato en el diff — `sharpewake.arquitectura_recorrido` y `rtsmithmatrifocal.recorridos_sec`, que en el `.json` anterior estaban en una sola línea y ahora quedan expandidas a varias, como el resto del archivo. Verificado explícitamente que el contenido semántico de ambas es idéntico antes y después (mismos valores de `tipo`, `recorridos` y `recorridos_sec`); no se tocó su `.js` ni ningún otro campo suyo. No se trata de un cambio masivo (2 de 257 entradas, ambas de forma, ninguna de contenido) ni de una reformateada completa del archivo: es el efecto normal de que `sincronizar.py` —la única vía autorizada para escribir `datos-atlas.json`, según la convención ya establecida del repositorio— serialice con indentación consistente (`json.dumps(indent=2)`) un archivo que arrastraba una inconsistencia de formato previa a esta ronda. Revertir esas dos líneas exigiría editar `datos-atlas.json` a mano, lo que el propio archivo prohíbe en su comentario de cabecera; se optó por dejarlas, documentadas aquí, en vez de violar esa regla del repositorio.

## 19. Resultado final

`dubuissonhaiti` queda representado en el corpus productivo sin falsear su dictamen académico y sin perder a C5 ni a C9. El validador queda ajustado con el cambio mínimo posible (una condición eliminada, ningún código nuevo) y probado, tanto en positivo como en negativo, contra la lógica real. `rebeldestiny` y `sharpewake` pasan sin alteración y permanecen conceptualmente distinguibles de `dubuissonhaiti` y entre sí. El corpus completo valida limpio en los cuatro validadores, sin errores nuevos.

**Nota de alcance:** esta ronda no incluyó instrucción de control de versiones. Los cuatro archivos modificados y los cuatro documentos nuevos de esta etapa quedan en el árbol de trabajo, verificados y validados, sin commit.

## 20. Estado

```
DECISION_NORMATIVA_RATIFICADA
VALIDADOR_ACTUALIZADO
DUBUISSONHAITI_IMPLEMENTADO
RECORRIDO_NULL
RECORRIDOS_SEC_C5_C9
SIN_PRINCIPAL_CLASIFICABLE
RESERVA_CONCEPTUAL_FUERTE
REBELDESTINY_INTACTO
SHARPEWAKE_INTACTO
JSON_JS_SINCRONIZADOS
VALIDACION_COMPLETA_0_ERRORES_NUEVOS
PRUEBAS_NEGATIVAS_4_DE_4_BLOQUEADAS
IMPLEMENTACION_CERRADA
PENDIENTE_DE_COMMIT
```
