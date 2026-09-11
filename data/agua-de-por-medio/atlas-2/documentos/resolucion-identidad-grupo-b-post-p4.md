# Resolución de identidad bibliográfica · Grupo B · post-P4

## `esquiva`, `chande`, `manoalzada`

Este documento resuelve las tres identidades bibliográficas que `cola-lectura-pendiente-atlas-2.md` §7 registraba como "genuinamente en disputa" y que `dictamen-academico-c7.md` §7 y `dictamen-academico-c9.md` §16 habían encontrado, sin aplicar, mediante arqueología directa de Git. No toca la clasificación académica de ninguno de los tres casos (C7/C4 para `esquiva`, C9/C8 para `chande`, C9/C5 para `manoalzada`), confirmada desde antes y no reabierta aquí.

---

### 1. Qué se había perdido y por qué

Los tres casos fueron corregidos bibliográficamente y aprobados por Dirección Académica el 8 de agosto de 2026, dentro de los lotes `piloto-generado.json` (commit `99aec5b`, para `chande`) y `s01-generado.json` (commit `2343008`, para `esquiva` y `manoalzada`). Cada uno lleva, en su campo `migracion2.correcciones_aprobadas`, autoría, título corregido y año — y en el caso de `chande`, además DOI y fuente de verificación.

Tres días después, el commit de sincronización `dcf762f` ("Sincroniza corpus público del Atlas 1.16.1") dejó los tres registros base en `datos-atlas.json` sin esa corrección aplicada, con `procedencia_verificada: false` y `k: "manifestacion"` — la categoría heredada para entradas sin autoría confirmada. Los dictámenes de C7 y C9 documentaron el hallazgo por archivo y commit exactos, pero deliberadamente no lo aplicaron: "este dictamen no lo reproduce como información bibliográfica ratificada, no lo valida ni lo descarta y no lo utiliza para completar los registros" (`dictamen-academico-c9.md` §16). Quedó reservado para esta tarea.

### 2. Verificación externa, no solo reproducción del hallazgo

Antes de aplicar la corrección ya aprobada, se verificó cada una de las tres atribuciones contra su fuente primaria, no solo contra el registro interno del lote:

- **`esquiva`** → Karen Engle, "La esquiva promesa de desarrollo para las comunidades afrodescendientes: el futuro de la Ley 70" (2011). Verificado directamente contra el PDF alojado en la facultad de derecho de la Universidad de Texas (`law.utexas.edu`), que reproduce la revista de origen: *Revista de Derecho Público* n.º 26, enero-junio de 2011.
- **`chande`** → Ernell Villa y Wilmer Villa, "Un silencio que habla: Las sonoridades narradas del Chandé en el Caribe seco colombiano" (2016), DOI `10.15648/cl.24.2016.6`. Verificado directamente contra el PDF de Dialnet, que reproduce la ficha completa: *Cuadernos de Literatura del Caribe e Hispanoamérica*, n.º 24, julio-diciembre de 2016.
- **`manoalzada`** → José Antonio Caicedo Ortiz, *A mano alzada... Memoria escrita de la diáspora intelectual afrocolombiana* (2013). Verificado directamente contra la página de créditos del propio libro (Sentipensar Editores, primera edición, junio de 2013, ISBN 978-958-46-2650-9).

Las tres fuentes primarias coinciden exactamente con la corrección que Dirección Académica ya había aprobado en agosto. No se encontró ninguna discrepancia que obligara a apartarse de la corrección de 2026-08-08.

### 3. Implementado

Para los tres, en `datos-atlas.js`/`datos-atlas.json`: `k: "manifestacion"` → `"obra"`, `a`, `t` e `y` actualizados a los datos verificados, `procedencia: "manifestación"` → `"corpus heredado"`, `procedencia_verificada: false` → `true`. Ningún otro campo se tocó — `recorrido`, `recorridos_sec`, `arquitectura_recorrido`, `estado_recorrido` y `f` permanecen exactamente como estaban, porque la clasificación académica nunca estuvo en duda.

Se corrigió además, por la misma razón que motivó esta tarea, el snapshot `y_heredado` de `chande` y `esquiva` en `atlas-2/lotes/tp01-temporalidad.json` (capa de validación de temporalidad, TP01), que citaba el valor previo del campo `y` y quedó desincronizado por este cambio — mismo mecanismo ya visto en el saneamiento post-P3 con el snapshot F01.

Los cuatro validadores (`validar-atlas`, `validar-temporalidad`, `validar-fenomenos`, `validar-piloto-atlas-2`) corren con 0 errores nuevos. La auditoría de alcance confirma que los únicos ids modificados son `esquiva`, `chande` y `manoalzada`, solo en los campos de identidad bibliográfica listados arriba; ninguna relación, fenómeno o lugar se tocó.

### Estado final

`GRUPO_B_3_DE_3_RESUELTOS`
`ESQUIVA_CHANDE_MANOALZADA_PROCEDENCIA_VERIFICADA`
`CLASIFICACION_ACADEMICA_NO_REABIERTA`

**DETENTE.**
