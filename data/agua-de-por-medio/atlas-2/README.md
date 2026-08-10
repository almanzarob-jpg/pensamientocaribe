# Atlas 2.0 · transición controlada por lotes

Este paquete aplica el dictamen académico aprobado el 8 de agosto de 2026 al lote piloto. Trabaja sobre el corpus 1.15.0 —233 entradas y 588 relaciones—, pero no modifica `datos-atlas.json`, `datos-atlas.js` ni la interfaz pública.

La transición contiene ahora cuatro capas separadas y reversibles:

- `P00`: piloto de arquitectura, con 10 registros heredados, nueve nodos efectivos y una redirección.
- `S01`: primer lote editorial, con 11 entradas, 12 relaciones revisadas y cinco dependencias ya examinadas en `P00`.
- `A01`: primer tramo de candidaturas únicas, con 18 entradas y 14 relaciones revisadas.
- `A02`: segundo tramo de candidaturas únicas, con 18 entradas y 14 relaciones revisadas.

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
- Una fricción solo se acepta cuando la relación está corroborada, confirma una disonancia y registra evidencia localizable y argumento editorial.

## Dictamen S01

- `glissant` y `monahan` conservan sus identificadores y declaran dos obras componentes cada uno.
- `ortiz`, `benitez` y `brathwaite` se corrigen sin dividir sus nodos.
- `R0029 monahan–glissant` cambia de disonancia a resonancia corroborada y apunta a las obras componentes pertinentes.
- Cuatro relaciones quedan corroboradas y ocho permanecen por corroborar.
- S01 no crea nodos, no altera identificadores heredados y no carga sus correcciones en el corpus público.

## Dictamen A01

- Doce candidaturas únicas se confirman y seis se redirigen por el argumento central de cada obra.
- `downtownladies` y `reddock` pasan a postplantación, trabajo y desposesión; `shepherdmaharani` a rutas, diásporas y territorios acuosos; `fuentesdispossessed` a espiritualidades, rituales y archivos vivos; `hall_slavesocietydanish` y `morenofraginals` a trata, esclavización y plantación.
- Se registran, sin sobrescribir el corpus heredado, las correcciones de fecha de `downtownladies` (2008), `shellerconsuming` (2003) y `floresvillalobos` (2023).
- Cuatro relaciones quedan corroboradas y diez permanecen por corroborar.
- `R0558 shepherdmaharani–reddock` cambia de resonancia a disonancia y declara una fricción documentada.

## Dictamen A02

- Siete candidaturas se confirman, diez se redirigen por su argumento central y `gudynas` queda pendiente de elegibilidad territorial.
- `handlerlangebarbados` pasa a trata, esclavización y plantación; `brownreaper` a espiritualidades, rituales y archivos vivos; `klein_battleparadise` a postplantación, trabajo y desposesión.
- `putnamradical`, `harpellecostarica`, `afrocentroam`, `mahlertricontinental` e `islandscity` pasan a rutas, diásporas y territorios acuosos.
- Se registran tres correcciones bibliográficas sin sobrescribir el corpus heredado: `gudynas`, `beyondsun` y `benedictykokken_haitiexception`.
- Tres relaciones quedan corroboradas con páginas y once permanecen por corroborar.
- No se declara ninguna fricción; `R0150 kempadoo–gudynas` conserva únicamente la marca de cruce lingüístico y su extremo `gudynas` permanece bloqueado.

## Archivos

- `catalogos-atlas-2.json`: vocabularios controlados y reglas de transición.
- `piloto-config.json`: dictamen aprobado, decisiones por entrada y estados explícitos de las relaciones.
- `piloto-generado.json`: salida reproducible que conserva intactos los campos heredados.
- `lotes/s01-config.json`: decisiones aprobadas para las 11 entradas y 12 relaciones de S01.
- `lotes/s01-generado.json`: capa S01 reproducible, separada del corpus público.
- `lotes/a01-config.json`: decisiones aprobadas para las 18 entradas y 14 relaciones de A01.
- `lotes/a01-generado.json`: capa A01 reproducible, separada del corpus público.
- `lotes/a02-config.json`: decisiones aprobadas para las 18 entradas y 14 relaciones de A02.
- `lotes/a02-generado.json`: capa A02 reproducible, separada del corpus público.
- `scripts/generar-piloto-atlas-2.mjs`: genera la capa piloto separada.
- `scripts/validar-piloto-atlas-2.mjs`: valida herencia, clasificación, temporalidades, orillas, operaciones, redirecciones y relaciones.

## Verificación

Desde la raíz del repositorio:

```bash
node scripts/generar-piloto-atlas-2.mjs
node scripts/validar-piloto-atlas-2.mjs
node scripts/generar-piloto-atlas-2.mjs data/agua-de-por-medio/datos-atlas.json data/agua-de-por-medio/atlas-2/lotes/s01-config.json data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json data/agua-de-por-medio/atlas-2/lotes/s01-generado.json
node scripts/validar-piloto-atlas-2.mjs data/agua-de-por-medio/datos-atlas.json data/agua-de-por-medio/atlas-2/lotes/s01-generado.json data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json data/agua-de-por-medio/atlas-2/lotes/s01-config.json
node scripts/generar-piloto-atlas-2.mjs data/agua-de-por-medio/datos-atlas.json data/agua-de-por-medio/atlas-2/lotes/a01-config.json data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json data/agua-de-por-medio/atlas-2/lotes/a01-generado.json
node scripts/validar-piloto-atlas-2.mjs data/agua-de-por-medio/datos-atlas.json data/agua-de-por-medio/atlas-2/lotes/a01-generado.json data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json data/agua-de-por-medio/atlas-2/lotes/a01-config.json
node scripts/generar-piloto-atlas-2.mjs data/agua-de-por-medio/datos-atlas.json data/agua-de-por-medio/atlas-2/lotes/a02-config.json data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json data/agua-de-por-medio/atlas-2/lotes/a02-generado.json
node scripts/validar-piloto-atlas-2.mjs data/agua-de-por-medio/datos-atlas.json data/agua-de-por-medio/atlas-2/lotes/a02-generado.json data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json data/agua-de-por-medio/atlas-2/lotes/a02-config.json
git diff --check
git status --short
```

El resultado esperado es `0 error(es), 0 advertencia(s)`.

## Límite

La aprobación alcanza P00, S01, A01, A02 y las correcciones del esquema de transición. No autoriza todavía la migración de los lotes siguientes, la escritura sobre `datos-atlas.json`/`datos-atlas.js` ni la fusión con `main`.
