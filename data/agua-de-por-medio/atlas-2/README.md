# Atlas 2.0 · transición controlada por lotes

Este paquete aplica el dictamen académico aprobado el 8 de agosto de 2026 al lote piloto. Trabaja sobre el corpus 1.15.0 —233 entradas y 588 relaciones—, pero no modifica `datos-atlas.json`, `datos-atlas.js` ni la interfaz pública.

La transición contiene ahora dos capas separadas y reversibles:

- `P00`: piloto de arquitectura, con 10 registros heredados, nueve nodos efectivos y una redirección.
- `S01`: primer lote editorial, con 11 entradas, 12 relaciones revisadas y cinco dependencias ya examinadas en `P00`.

## Resultado intelectual

- Nueve nodos efectivos y una redirección: `stewardpuertorico → steward`.
- Ocho clasificaciones confirmadas.
- `mintz` permanece pendiente y conserva dos obras componentes.
- `price–totumo` pasa a `por_corroborar`; su disonancia queda como candidatura.
- Las demás relaciones internas declaran corroboración de manera explícita.

## Correcciones de arquitectura

- El estado de corroboración ya no se infiere de una frase libre.
- Las fechas admiten era (`AEC`/`EC`) y precisión.
- Las obras componentes pueden registrar temporalidad y corriente propias.
- Las orillas pueden ser punto, región o cuenca.
- Se añade la operación `interpretar materialidades`.
- Se añade el mecanismo `segmentación étnico-racial del trabajo`.
- Las relaciones pueden declarar `componente_a` y `componente_b`; el validador comprueba que cada identificador pertenezca al nodo extremo correspondiente.
- Un lote puede revisar relaciones con nodos de lotes aprobados previamente mediante una lista explícita de `dependencias`.

## Dictamen S01

- `glissant` y `monahan` conservan sus identificadores y declaran dos obras componentes cada uno.
- `ortiz`, `benitez` y `brathwaite` se corrigen sin dividir sus nodos.
- `R0029 monahan–glissant` cambia de disonancia a resonancia corroborada y apunta a las obras componentes pertinentes.
- Cuatro relaciones quedan corroboradas y ocho permanecen por corroborar.
- S01 no crea nodos, no altera identificadores heredados y no carga sus correcciones en el corpus público.

## Archivos

- `catalogos-atlas-2.json`: vocabularios controlados y reglas de transición.
- `piloto-config.json`: dictamen aprobado, decisiones por entrada y estados explícitos de las relaciones.
- `piloto-generado.json`: salida reproducible que conserva intactos los campos heredados.
- `lotes/s01-config.json`: decisiones aprobadas para las 11 entradas y 12 relaciones de S01.
- `lotes/s01-generado.json`: capa S01 reproducible, separada del corpus público.
- `scripts/generar-piloto-atlas-2.mjs`: genera la capa piloto separada.
- `scripts/validar-piloto-atlas-2.mjs`: valida herencia, clasificación, temporalidades, orillas, operaciones, redirecciones y relaciones.

## Verificación

Desde la raíz del repositorio:

```bash
node scripts/generar-piloto-atlas-2.mjs
node scripts/validar-piloto-atlas-2.mjs
node scripts/generar-piloto-atlas-2.mjs data/agua-de-por-medio/datos-atlas.json data/agua-de-por-medio/atlas-2/lotes/s01-config.json data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json data/agua-de-por-medio/atlas-2/lotes/s01-generado.json
node scripts/validar-piloto-atlas-2.mjs data/agua-de-por-medio/datos-atlas.json data/agua-de-por-medio/atlas-2/lotes/s01-generado.json data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json data/agua-de-por-medio/atlas-2/lotes/s01-config.json
git diff --check
git status --short
```

El resultado esperado es `0 error(es), 0 advertencia(s)`.

## Límite

La aprobación alcanza P00, S01 y las correcciones del esquema de transición. No autoriza todavía la migración de los lotes siguientes, la escritura sobre `datos-atlas.json`/`datos-atlas.js` ni la fusión con `main`.
