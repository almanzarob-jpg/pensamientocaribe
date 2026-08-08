# Atlas 2.0 · lote piloto de 10 entradas

Este paquete prepara una prueba reversible de la arquitectura 2.0 sobre el corpus 1.15.0 (233 entradas y 588 relaciones). No modifica `datos-atlas.json`, `datos-atlas.js` ni la interfaz pública.

## Qué añade

- `catalogos-atlas-2.json`: vocabularios controlados y reglas de transición.
- `piloto-config.json`: diez casos seleccionados para probar migración, reclasificación, corrección bibliográfica, fusión y división.
- `generar-piloto-atlas-2.mjs`: copia los campos heredados sin alterarlos y añade una capa de migración separada.
- `validar-piloto-atlas-2.mjs`: comprueba que el piloto coincide con el corpus fuente y que no presenta como confirmada ninguna decisión pendiente.

## Principio editorial

Una candidatura no es una clasificación confirmada. El piloto conserva `f`, `l`, `tr` y `y`; no infiere operaciones epistémicas, orillas, rutas, temporalidades históricas ni fricciones sin lectura y fundamento. Los campos incompletos quedan enumerados en `pendientes`.

## Instalación en la rama de trabajo

Copie las carpetas `data` y `scripts` a la raíz del repositorio. Después, desde `pensamiento-caribe`, ejecute:

```bash
node scripts/generar-piloto-atlas-2.mjs
node scripts/validar-piloto-atlas-2.mjs
git status --short
```

El resultado esperado es `0 error(es)`. La salida generada queda en:

```text
data/agua-de-por-medio/atlas-2/piloto-generado.json
```

No se debe fusionar con el corpus público hasta que la dirección académica revise las diez entradas y autorice sus decisiones editoriales.
