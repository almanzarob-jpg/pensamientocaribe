# INFORME DE IMPLEMENTACIÓN TÉCNICA — CASO 9/10 — `roberts` — P3-A · Etapa 2.3H

**Naturaleza de este documento.** Informe técnico de una implementación ya autorizada por `decision-academica-roberts-p3-etapa-2-3h.md`. No reinterpreta la obra, no vuelve a decidir corrientes, no modifica relaciones, no corrige territorio y no implementa `C8` ni `C9`.

## Control previo

Se verificó en modo solo lectura el estado del nodo `roberts` en `datos-atlas.json` y `datos-atlas.js` antes de escribir. El estado encontrado coincidió exactamente con el que el expediente académico reportaba como previo, sin ninguna divergencia, por lo que no se activó `CONFLICTO_TECNICO_PREEXISTENTE_ROBERTS` y se procedió a implementar.

## A. Estado anterior

```
recorrido: null
recorridos_sec: []
arquitectura_recorrido: null
estado_recorrido: "pendiente"
fuente_recorrido: (ausente)
```

Idéntico en `datos-atlas.js` y `datos-atlas.json`, y coincidente con lo registrado en la decisión académica.

## B. Estado implementado

```
recorrido: "c3"
recorridos_sec: ["c7"]
arquitectura_recorrido: null
estado_recorrido: "confirmado"
fuente_recorrido: ["decision-academica-roberts-p3-etapa-2-3h.md"]
```

Escrito de forma idéntica, campo por campo, en ambos archivos. Todos los demás campos del nodo (`id`, `k`, `t`, `a`, `y`, `f`, `l`, `tr`, `ap`) permanecen sin ningún cambio, incluidos sus valores exactos de texto, el arreglo `f: ["cimarronaje", "soberanias"]` y el orden original de las claves.

## C. Archivos modificados

Únicamente:

- `data/agua-de-por-medio/datos-atlas.js`
- `data/agua-de-por-medio/datos-atlas.json`

La escritura se hizo mediante reemplazo de cadena exacta, verificado como única coincidencia en cada archivo antes de escribir, no mediante reserialización completa del documento — por eso no hay reordenamiento de claves ni reformateo de bloques ajenos al nodo `roberts`.

## D. Validaciones

- **Sintaxis JSON:** `datos-atlas.json` cargó sin error con `json.load`; el corpus conserva sus 257 obras.
- **Sintaxis JS:** `datos-atlas.js` se parseó sin error de sintaxis (`new Function(src)`).
- **Unicidad del nodo:** exactamente un nodo con `id: "roberts"` en cada archivo, verificado por conteo.
- **Sincronía JS ↔ JSON:** el objeto `roberts` extraído de `datos-atlas.js` y el extraído de `datos-atlas.json` se compararon campo por campo de forma programática (`id, k, t, a, y, f, l, tr, ap, recorrido, recorridos_sec, arquitectura_recorrido, estado_recorrido, fuente_recorrido`): coinciden en todos los campos, sin divergencia.
- **Ausencia de C8/C9:** verificado explícitamente que `recorridos_sec` contiene exclusivamente `["c7"]` y no contiene `"c8"` ni `"c9"`.
- **Ausencia de C2:** verificado que `recorrido` no es `"c2"` y `recorridos_sec` no contiene `"c2"`.
- **Preservación de relaciones:** las once relaciones que tocan a `roberts` en `datos-atlas.json` (`fouchard`, `quintero`, `monahan`, `pricefirst`, `chevannes`, `ramadan`, `james`, `rainforestwarriors`, `tackysrevolt`, `rifkinfictions`, `wynterblackmetamorphosis`) se verificaron después de la escritura: mismo número (11), mismos nodos en cada extremo, misma dirección, mismo `tipo` y misma `fuente` textual, sin ningún campo alterado. Resultado: `RELACIONES_ROBERTS_PRESERVADAS_SIN_CAMBIOS`.
- **Preservación de metadatos:** confirmado en la comparación campo por campo del punto de sincronía — `id, k, t, a, y, f, l, tr, ap` idénticos antes y después. Resultado: `METADATOS_ROBERTS_PRESERVADOS`.
- **Preservación territorial:** `l` permanece `"jamaica"`; no se tocó `tr`.
- **Diff:** el reemplazo se hizo sobre una cadena exacta con una sola coincidencia verificada en cada archivo antes de escribir, lo que garantiza por construcción que ningún otro nodo del corpus fue tocado por esta operación. `git diff` después de la operación muestra el hunk correspondiente a `roberts` (único atribuible a esta tarea) junto con hunks preexistentes ya documentados de casos anteriores (`aftershocks`, `olwigstjohn`, `cuijla`, `abello`, `allen_dikimanera`, `wilsoncrabantics`); `git status --short` no muestra ningún archivo adicional modificado ni ningún `??` nuevo salvo este informe.

## E. Incidencias preservadas sin implementar

**Relacionales:**
- `roberts ↔ quintero`: `CANDIDATA_A_RETIRADA`. No se editó ni se cambió su `tipo`.
- `tackysrevolt ↔ roberts`: `CANDIDATA_A_RETIRADA`. No se editó ni se cambió su `tipo`.
- `monahan ↔ roberts`: `REQUIERE_REVISION_POSTERIOR`. No se resolvió.
- `pricefirst ↔ roberts`: `REQUIERE_REVISION_POSTERIOR`. No se sustituyó `First-Time` por `Maroon Societies`; la posible confusión de identidad de obra queda para una tarea relacional independiente.
- `ramadan ↔ roberts`: `REQUIERE_REVISION_POSTERIOR`. No se retiró la relación por su cronología posterior a Roberts.
- `rainforestwarriors ↔ roberts`: `REQUIERE_REVISION_POSTERIOR`. No se decidió si la resonancia retrospectiva es válida.

**Territorial:**
- `l: "jamaica"` → `REQUIERE_REVISION_TERRITORIAL_POSTERIOR`. No se modificó el campo ni se sustituyó por Haití ni se agregaron territorios múltiples.

**Modelo relacional:**
- Alta densidad de `james ↔ roberts`, señalada solo como observación académica. No se creó ningún campo de intensidad, peso, relevancia o jerarquía.

**Etiquetas:**
- `f: ["cimarronaje", "soberanias"]` no fue tocado, pese a la reclasificación académica de C10 a `CONTEXTUAL`. No se agregó ninguna etiqueta de género, cuerpo, parentesco o erótica.

## Verificación Git

Ejecutada con comandos de solo lectura, antes y después de la escritura. No se ejecutó `git add`, `git commit`, `git push`, `git reset`, `git restore`, `git checkout` para descartar cambios, ni `git stash` en ningún momento de esta tarea. El árbol de trabajo conserva, sin alterar, las modificaciones de casos anteriores que ya existían antes de esta operación.

## Estado final

`IMPLEMENTACION_TECNICA_ROBERTS_COMPLETADA_Y_VALIDADA`

**DETENTE.** No se avanza a `escalante`. No se inicia el Caso 10/10. No se realiza una nueva lectura probatoria. No se resuelven relaciones. No se cambia el territorio. No se reabre la decisión académica. El Caso 10 comenzará únicamente mediante una instrucción explícita de la Dirección Académica.
