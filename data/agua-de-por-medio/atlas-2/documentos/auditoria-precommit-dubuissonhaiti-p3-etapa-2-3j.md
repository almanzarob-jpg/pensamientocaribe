# Auditoría pre-commit mínima · `dubuissonhaiti` · Atlas 2.0 · P3-B · Etapa 2.3J

**Instancia que decide:** Dirección Académica de Pensamiento Caribe. **Alcance:** verificación de alcance y cardinalidad antes de autorizar commit. No se reabrió la lectura académica. No se cambió la clasificación de `dubuissonhaiti`. No se modificó el validador (no apareció ningún error real que lo exigiera). No se avanzó a ningún libro nuevo.

---

## 1. Discrepancia de cardinalidad — resuelta

El informe de implementación afirmaba, en su §3, que la validación preventiva se había ejecutado sobre "254 obras previas + `dubuissonhaiti` todavía sin modificar". Esa cifra es incorrecta como descripción del inicio de esta ronda, y queda corregida en el informe (§5 de esta auditoría).

Verificación mediante Git y conteo programático, no por inferencia:

```
$ git show HEAD:data/agua-de-por-medio/datos-atlas.json | <conteo de "obras">
→ 257 obras

$ (working tree) data/agua-de-por-medio/datos-atlas.json | <conteo de "obras">
→ 257 obras

$ diferencia de IDs (working tree − HEAD): set() — ninguna obra nueva
$ diferencia de IDs (HEAD − working tree): set() — ninguna obra eliminada
```

Respuestas a las cinco preguntas exactas:

1. **Cuántas obras había al inicio real de esta ronda:** 257 — el estado de `HEAD` (`524ba66`, el último commit, "sharpewake: control semántico final de reserva conceptual (C2/C9)"), que es el punto de partida real de esta ronda de implementación.
2. **Cuántas había inmediatamente antes de implementar `dubuissonhaiti`:** 257 — el ajuste del validador no añade ni elimina obras, y la corrida de validación preventiva (ya reportada en el informe, ejecutada antes de tocar el dato) lo confirma en su propia salida: `[INFO] 257 entradas; 614 relaciones; 30 lugares.`
3. **Cuántas hay después de la implementación:** 257 — implementar `dubuissonhaiti` consistió en modificar cuatro campos de una obra ya existente en el corpus, no en añadir una obra nueva.
4. **Qué IDs explican cualquier diferencia:** ninguno. La comparación programática por conjunto de IDs entre `HEAD` y el árbol de trabajo da diferencia vacía en ambos sentidos.
5. **Origen de las obras "adicionales":** no existen obras adicionales. La premisa de que esta ronda partió de 254 obras es falsa: esa cifra corresponde al estado del corpus el 25 de agosto de 2026, documentado en `decision-normativa-sin-principal-clasificable-atlas-2.md` §2 ("Se recorrieron programáticamente las 254 obras de `datos-atlas.json`"), un momento anterior en el que `rebeldestiny` se implementó y otras obras del corpus (entre ellas `besson`, `rtsmithmatrifocal`, `sharpewake`) todavía no formaban parte del recuento verificado en ese documento o no habían sido clasificadas. El crecimiento de 254 a 257 obras es trabajo legítimo de sesiones y rondas anteriores a esta, ajeno por completo a la implementación de `dubuissonhaiti`; la cifra de 254 nunca debió citarse como línea base de esta ronda. Corrección: de redacción únicamente, conforme a la rama que el propio encargo previó ("si las 257 obras son correctas y las obras adicionales proceden de trabajo previo legítimo, corrige únicamente la redacción del informe").

**No hay incidencia que documentar bajo el escenario de incorporación accidental**: esa rama del encargo no aplica.

## 2. Alcance real del diff

```
$ git status --short
 M data/agua-de-por-medio/atlas-2/documentos/apertura-control-p3-b-etapa-2-3i.md
 M data/agua-de-por-medio/datos-atlas.js
 M data/agua-de-por-medio/datos-atlas.json
 M scripts/validar-atlas.mjs
?? _to_delete/
?? data/agua-de-por-medio/atlas-2/documentos/ampliacion-probatoria-dubuissonhaiti-cap3-p3-etapa-2-3j.md
?? data/agua-de-por-medio/atlas-2/documentos/decision-academica-dubuissonhaiti-p3-etapa-2-3j.md
?? data/agua-de-por-medio/atlas-2/documentos/decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md
?? data/agua-de-por-medio/atlas-2/documentos/informe-implementacion-dubuissonhaiti-p3-etapa-2-3j.md
?? data/agua-de-por-medio/atlas-2/documentos/lectura-dubuissonhaiti-p3-etapa-2-3j.md

$ git diff --stat
 .../documentos/apertura-control-p3-b-etapa-2-3i.md |  4 +++
 data/agua-de-por-medio/datos-atlas.js              |  2 +-
 data/agua-de-por-medio/datos-atlas.json            | 31 ++++++++++++++++++----
 scripts/validar-atlas.mjs                          | 14 +++++-----
 4 files changed, 38 insertions(+), 13 deletions(-)
```

**Cambios sustantivos de esta ronda** (implementación técnica, la operación auditada aquí):

- `scripts/validar-atlas.mjs` — una condición eliminada bajo `sin_principal_clasificable`, comentario actualizado. Ninguna otra rama tocada.
- `data/agua-de-por-medio/datos-atlas.js` — cuatro campos de `dubuissonhaiti` (`recorridos_sec`, `arquitectura_recorrido`, `estado_recorrido`, `fuente_recorrido`).
- `data/agua-de-por-medio/datos-atlas.json` — regenerado desde el `.js` con `sincronizar.py`; el único cambio de contenido es el mismo de `dubuissonhaiti` (ver §3 para el resto del diff, que es de formato).
- `data/agua-de-por-medio/atlas-2/documentos/apertura-control-p3-b-etapa-2-3i.md` — una fila nueva en la tabla de reservas conceptuales, para `dubuissonhaiti`.
- `data/agua-de-por-medio/atlas-2/documentos/informe-implementacion-dubuissonhaiti-p3-etapa-2-3j.md` — documento nuevo de esta ronda.

**Cambios preexistentes en el árbol de trabajo** (producidos en rondas anteriores de esta misma etapa, dentro de esta sesión, ya sin seguimiento antes de que la ronda de implementación comenzara — no corresponden a esta auditoría ni fueron tocados por ella):

- `lectura-dubuissonhaiti-p3-etapa-2-3j.md`
- `ampliacion-probatoria-dubuissonhaiti-cap3-p3-etapa-2-3j.md`
- `decision-academica-dubuissonhaiti-p3-etapa-2-3j.md`
- `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md` (la corrección de escala segmentaria/global sobre este documento tampoco pertenece a la ronda de implementación: se hizo en la ronda inmediatamente anterior, antes de tocar el validador o el dato)

`_to_delete/` no aparece en ningún diff sustantivo — permanece como directorio no rastreado, sin tocar, en ambas rondas.

No se atribuye a `dubuissonhaiti` ninguna modificación que ya estuviera presente en el árbol de trabajo antes de esta ronda.

## 3. Incidencia de reformateo — reconfirmada

Comparación programática, campo por campo, entre `git show HEAD:datos-atlas.json` y el árbol de trabajo, para las dos obras que aparecen en el diff de texto sin ser `dubuissonhaiti`:

```
sharpewake:        HEAD == árbol de trabajo (diccionarios idénticos, todos los campos)
rtsmithmatrifocal:  HEAD == árbol de trabajo (diccionarios idénticos, todos los campos)
```

`valor antes === valor después` para todos los campos de ambas, confirmado por comparación de estructuras Python (no por inspección visual del diff de texto). El diff de texto que sí las muestra es exclusivamente la expansión de `arquitectura_recorrido` (`sharpewake`) y `recorridos_sec` (`rtsmithmatrifocal`) de una línea a varias, producto de que `sincronizar.py` serializa con `json.dumps(indent=2)` de forma uniforme en todo el archivo. No se editó manualmente `datos-atlas.json` para eliminar esos diffs: `datos-atlas.js` es la fuente canónica declarada en su propia cabecera ("no editar el .json a mano"), y `sincronizar.py` es el único mecanismo autorizado para escribir el `.json`. Revertir esas dos líneas exigiría precisamente la operación prohibida.

## 4. Cierre técnico reejecutado

```
$ python3 data/agua-de-por-medio/sincronizar.py --check
En sincronía · v1.17.0 · 257 obras · 614 relaciones

$ node scripts/validar-atlas.mjs
Resultado: 0 error(es), 4 advertencia(s).
  (ID_FORMATO, FECHA_PENDIENTE, AUTORIA_PENDIENTE, ENTRADA_COMPUESTA — las cuatro preexistentes, ninguna de dubuissonhaiti)

$ node scripts/validar-fenomenos.mjs
Resultado: 0 error(es), 3 advertencia(s).
  (MINIMO ×3: keeganhofman, bonilla, ferdinand — preexistentes)

$ node scripts/validar-temporalidad.mjs
Resultado: 0 error(es), 2 advertencia(s).
  (PENDIENTE, PERIODO — preexistentes)

$ node scripts/validar-piloto-atlas-2.mjs
Resultado: 0 error(es), 0 advertencia(s).
```

`0 errores nuevos` en los cuatro validadores. Ninguna advertencia mencionada corresponde a `dubuissonhaiti`; las ocho advertencias totales son, en su integridad, deuda editorial preexistente ajena a esta ronda.

## 5. Corrección del informe

Se corrigió `informe-implementacion-dubuissonhaiti-p3-etapa-2-3j.md` en dos lugares, sin reescribir la evaluación académica ni normativa ya cerrada:

- **§3 (Validación preventiva):** se sustituyó "254 obras previas + `dubuissonhaiti` todavía sin modificar" por la cardinalidad real (257, verificada contra `HEAD`) y una nota explicando el origen de la cifra anterior.
- **§15 (Diff final auditado):** se añadió la comparación programática, obra por obra, entre `HEAD` y el árbol de trabajo, que es la prueba de que `dubuissonhaiti` es la única obra con diferencia de contenido, y se precisó que solo la fila de `apertura-control-p3-b-etapa-2-3i.md` y el propio informe pertenecen a esta ronda —los otros tres documentos nuevos son de rondas anteriores de esta misma etapa.

No se tocó ninguna otra sección. La clasificación de `dubuissonhaiti`, la decisión normativa y sus seis condiciones, y el dictamen de los tres casos de referencia permanecen exactamente como se cerraron.

## 6. Estado de cierre

No hubo contaminación de alcance. Ninguna obra fue añadida o eliminada accidentalmente. La cardinalidad de 257 es correcta y corresponde a trabajo previo legítimo, ajeno a esta ronda.

```
AUDITORIA_PRECOMMIT_COMPLETA
CARDINALIDAD_CORPUS_RECONCILIADA
DUBUISSONHAITI_IMPLEMENTADO
VALIDADOR_ACTUALIZADO
RESERVA_CONCEPTUAL_REGISTRADA
REBELDESTINY_INTACTO
SHARPEWAKE_INTACTO
JSON_JS_SINCRONIZADOS
VALIDACION_COMPLETA_0_ERRORES_NUEVOS
LISTO_PARA_COMMIT
```

## 7. Regla final

No se hizo commit. Se entrega únicamente esta auditoría pre-commit y el informe corregido. DETENTE.
