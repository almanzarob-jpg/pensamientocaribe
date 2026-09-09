# INFORME DE IMPLEMENTACIÓN TÉCNICA — CASO 8/10 — `abello` — P3-A · Etapa 2.3H

**Naturaleza de este documento.** Informe técnico de una implementación ya autorizada por `decision-academica-abello-p3-etapa-2-3h.md`. No reinterpreta la obra, no vuelve a decidir corrientes y no modifica la arquitectura aprobada. Registra únicamente qué cambió, cómo se verificó y qué quedó deliberadamente sin tocar.

## Control previo

Antes de escribir, se verificó en modo solo lectura el estado del nodo `abello` en `datos-atlas.js` y `datos-atlas.json`. El estado encontrado coincidió exactamente con el que el expediente académico reportaba como previo — sin divergencia alguna —, de modo que no se activó `CONFLICTO_TECNICO_PREEXISTENTE_ABELLO` y se procedió a implementar.

## A. Estado anterior

```
recorrido: null
recorridos_sec: []
arquitectura_recorrido: null
estado_recorrido: "pendiente"
fuente_recorrido: (ausente)
```

Idéntico en `datos-atlas.js` y `datos-atlas.json`, y coincidente con lo registrado en el expediente probatorio y en la decisión académica.

## B. Estado implementado

```
recorrido: "c7"
recorridos_sec: ["c2"]
arquitectura_recorrido: null
estado_recorrido: "confirmado"
fuente_recorrido: ["decision-academica-abello-p3-etapa-2-3h.md"]
```

Escrito de forma idéntica, campo por campo, en ambos archivos. Todos los demás campos del nodo (`id`, `k`, `t`, `a`, `y`, `f`, `l`, `tr`, `ap`) permanecen sin ningún cambio, incluidos sus valores exactos de texto y el orden original de las claves.

## C. Archivos modificados

Únicamente:

- `data/agua-de-por-medio/datos-atlas.js`
- `data/agua-de-por-medio/datos-atlas.json`

La escritura se hizo mediante reemplazo de cadena exacta y verificado como única en cada archivo (una sola coincidencia del bloque original antes de escribir), no mediante reserialización completa del documento — por eso no hay reordenamiento de claves ni reformateo de bloques ajenos al nodo `abello`.

## D. Validaciones

- **Sintaxis JSON:** `datos-atlas.json` cargó sin error con `json.load`; el corpus conserva sus 257 obras.
- **Sintaxis JS:** `datos-atlas.js` se parseó sin error de sintaxis.
- **Unicidad del nodo:** exactamente un nodo con `id: "abello"` en cada archivo, verificado por conteo.
- **Sincronía JS ↔ JSON:** el objeto `abello` extraído de `datos-atlas.js` y el extraído de `datos-atlas.json` son estructuralmente idénticos, campo por campo, tras la implementación. No se detectó divergencia; no fue necesaria ninguna corrección.
- **Preservación de relaciones:** las doce relaciones tipo `resonancia` que tocan a `abello` en `datos-atlas.json` (`benitez`, `perezmorales`, `helgnuncamas`, `bassiacuoso`, `pardomosquerahoffmann`, `wilsoncrabantics`, `castrogomezhybris`, `manoalzada`, `helglibertyequality`, `muneraelfracaso`, `saetheridentidades`, `zonabananera`) se verificaron después de la escritura: mismo número, mismo `tipo`, misma `fuente`, sin ningún campo alterado.
- **Preservación de metadatos:** confirmado — `id`, `k`, `t`, `a`, `y`, `f`, `l`, `tr`, `ap` idénticos antes y después.
- **Diff:** el reemplazo se hizo sobre una cadena exacta con una sola coincidencia verificada en cada archivo antes de escribir, lo que garantiza por construcción que ningún otro nodo del corpus fue tocado. `git status --short` después de la operación muestra únicamente las modificaciones (`M`) ya preexistentes en `datos-atlas.js` y `datos-atlas.json` —correspondientes a arquitecturas de casos anteriores ya implementadas (`aftershocks`, `olwigstjohn`, `cuijla`, `allen_dikimanera`, `wilsoncrabantics`)— más el incremento atribuible a esta tarea; no aparece ningún archivo adicional modificado ni ningún archivo `??` nuevo salvo este informe y la decisión académica ya generada en la tarea anterior.

## E. Incidencias preservadas sin implementar

- **`helgnuncamas` ↔ `abello`:** marcada en la decisión académica como `REQUIERE_REVISION_POSTERIOR` (confusión entre autora confirmada e identidad exacta de la obra-nodo). No se tocó el campo `tipo` ni ningún otro campo de la relación.
- **`bassiacuoso` ↔ `abello`:** marcada como `REQUIERE_REVISION_POSTERIOR` (coautoría real de capítulo registrada bajo el tipo `resonancia`, insuficiente para ese hecho). No se modificó.
- **Candidatura `abello` ↔ `mintz`:** `CANDIDATURA_RELACIONAL_ACADEMICAMENTE_JUSTIFICADA`, no implementada. No se creó la relación, no se tocó el nodo `mintz` ni `decisiones-pendientes.md`.
- **Simplificación territorial `l: "cartagena"`:** clasificada `SIMPLIFICACION_ADMISIBLE`. No se modificó el campo.
- **Deuda técnica independiente de `mintzpricebirth`:** `INCIDENCIA_TECNICA_PREEXISTENTE_NO_BLOQUEANTE`, ajena al Caso 8. No se implementó ni se mezcló con esta operación.

## Verificación Git

Ejecutada con comandos de solo lectura, antes y después de la escritura. No se ejecutó `git add`, `git commit`, `git push`, `git reset`, `git restore`, `git checkout` para descartar cambios, ni `git stash` en ningún momento de esta tarea. El árbol de trabajo conserva, sin alterar, las modificaciones de casos anteriores que ya existían antes de esta operación.

## Estado final

`IMPLEMENTACION_TECNICA_ABELLO_COMPLETADA_Y_VALIDADA`

**DETENTE.** No se avanza a `roberts`. No se inicia el Caso 9/10. No se realiza una nueva lectura P3. No se resuelven relaciones pendientes. No se implementa `mintzpricebirth`. El Caso 9 solo comienza mediante instrucción académica independiente.
