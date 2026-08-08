# Atlas 2.0 · lote piloto de 10 registros · dictamen aprobado

Este paquete aplica el dictamen académico aprobado el 8 de agosto de 2026 al lote piloto. Trabaja sobre el corpus 1.15.0 —233 entradas y 588 relaciones—, pero no modifica `datos-atlas.json`, `datos-atlas.js` ni la interfaz pública.

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

## Archivos

- `catalogos-atlas-2.json`: vocabularios controlados y reglas de transición.
- `piloto-config.json`: dictamen aprobado, decisiones por entrada y estados explícitos de las relaciones.
- `piloto-generado.json`: salida reproducible que conserva intactos los campos heredados.
- `scripts/generar-piloto-atlas-2.mjs`: genera la capa piloto separada.
- `scripts/validar-piloto-atlas-2.mjs`: valida herencia, clasificación, temporalidades, orillas, operaciones, redirecciones y relaciones.

## Verificación

Desde la raíz del repositorio:

```bash
node scripts/generar-piloto-atlas-2.mjs
node scripts/validar-piloto-atlas-2.mjs
git diff --check
git status --short
```

El resultado esperado es `0 error(es), 0 advertencia(s)`.

## Límite

La aprobación alcanza el lote piloto y las correcciones del esquema. No autoriza todavía la migración masiva de las 233 entradas ni la fusión con `main`.
