# Cierre de la siembra bibliográfica S17

Documento de cierre del frente concurrente detectado en el árbol de trabajo
el 2026-09-11, procesado de forma exclusiva y separada de
`TRIAGE_INTERNO_C1_C10`, según el protocolo de auditoría (§§1-13 del
encargo "Trabaja exclusivamente sobre el frente concurrente...") y su
enmienda normativa posterior (§§1-14 del encargo "Continúa exclusivamente
con el frente concurrente de las 17 obras").

Estado de partida: `HEAD = 337725a`. Estado de llegada: ver hashes al pie.

## 1. Las 17 obras

`antczakislandssalt`, `barriteauconfronting`, `becklesgreathouse`,
`boguesheretics`, `coopernoises`, `espinosahabitarmultiespecie`,
`featherstonecricket`, `forsdickhogsbjergreader`,
`friedemanncrossmangombe`, `hillmandagostinocaribbean`,
`honychurchcaribbeanpeople1`, `josephmocombefirmin`, `kingshoals`,
`quinterosalsa`, `schullerhumanitarian`, `scottvientocomun`,
`zeidermanartery`.

Las 17 pasaron auditoría de campos obligatorios (`id,k,t,a,ap,f,l,tr`), de
fenómenos válidos, de lugar heredado existente, y de ausencia de colisión
o duplicado bibliográfico entre las 274 entradas del corpus. Todas
declaran `lenguas_publicacion` (esquema 2.0, ya validado por
`validar-atlas.mjs` desde antes de esta siembra) y `edicion_consultada`
(metadato descriptivo, sin validador dedicado).

## 2. Las 18 relaciones

18 relaciones nuevas, todas `tipo: "resonancia"` (0 disonancias): 11 en
estado `corroborada` y 7 en `por_corroborar`. Cada una trae `fuente` con
cita a página/hoja concreta y declara su propio estado epistémico; varias
de las corroboradas son explícitas sobre el límite de la prueba ("presencia
documental, no adhesión argumentativa"; "no se afirma identidad
conceptual"). Los campos `estado` y `friccion` pertenecen al Esquema 2.0
de relaciones, ya presente y validado en `validar-atlas.mjs` antes de
`337725a` pero sin uso hasta esta siembra. Los campos `id_lote` /
`lote_incorporacion` (p. ej. `"S17-R01"`) son metadato de procedencia sin
validador dedicado; se conservan como tal, sin ampliar el esquema formal
para ellos.

Corroboradas (11): `zeidermanartery`↔`jaffeconcrete`,
`zeidermanartery`↔`ferdinand`, `scottvientocomun`↔`james`,
`espinosahabitarmultiespecie`↔`friedemanncrossmangombe`,
`schullerhumanitarian`↔`schuller_killingkindness`,
`friedemanncrossmangombe`↔`escalante`, `featherstonecricket`↔`james`,
`coopernoises`↔`glissant`, `josephmocombefirmin`↔`firmin`,
`forsdickhogsbjergreader`↔`james`, `kingshoals`↔`sharpewake`.

Por corroborar (7): `boguesheretics`↔`robinsonmarxismo`,
`barriteauconfronting`↔`reddock`, `becklesgreathouse`↔`williamscapitalismo`,
`antczakislandssalt`↔`mintz`, `hillmandagostinocaribbean`↔`mintz`,
`honychurchcaribbeanpeople1`↔`keeganhofman`, `quinterosalsa`↔`quintero`.

## 3. Decisión sobre `orillas` e integración territorial

El primer estado del frente (auditado antes de esta corrección) relajaba
`ORILLA_LUGAR` para eximir de `lugar` a toda orilla `tipo: "región"` o
`"cuenca"`, sin distinguir escala espacial legítimamente no puntual de
omisión accidental de integración territorial. Se detuvo el cierre en ese
punto y se reformuló la regla:

> Toda orilla debe enlazar a `lugar` cuando existe en el diccionario un
> referente canónico que representa efectivamente esa geografía. Solo las
> escalas o formaciones espaciales sin equivalente canónico adecuado
> pueden permanecer como `región`/`cuenca` mediante `label` sin `lugar`.

La nueva regla en `validar-atlas.mjs` sigue verificando toda referencia
`lugar` contra el diccionario de 30 lugares; acepta `región`/`cuenca` sin
`lugar` solo cuando la etiqueta no coincide (por nombre canónico, clave, o
un alias explícito y documentado en el propio validador) con ningún lugar
existente; y produce el error `ORILLA_LUGAR_EVITADO` cuando una etiqueta sí
corresponde a un referente disponible y no se enlazó. No se usó fuzzy
matching ni equivalencias generadas automáticamente: cada alias
(`"trinidad y tobago"→trinidad`, `"república dominicana"→dominicana`,
`"palenque de san basilio"→palenque`) se verificó a mano y quedó
documentado con comentario en el propio archivo.

Aplicada la regla, 15 orillas de 12 obras se corrigieron de etiqueta
suelta a enlace canónico:

* `becklesgreathouse`: Barbados → `barbados`
* `boguesheretics`: Jamaica → `jamaica`
* `coopernoises`: Jamaica → `jamaica`
* `espinosahabitarmultiespecie`: Palenque de San Basilio → `palenque`
* `featherstonecricket`: Trinidad y Tobago → `trinidad`
* `forsdickhogsbjergreader`: Trinidad y Tobago → `trinidad`
* `friedemanncrossmangombe`: Palenque de San Basilio → `palenque`
* `josephmocombefirmin`: Haití → `haiti`
* `quinterosalsa`: Puerto Rico → `puertorico`; Cuba → `cuba`; República
  Dominicana → `dominicana`
* `schullerhumanitarian`: Haití → `haiti`
* `scottvientocomun`: Jamaica → `jamaica`; Cuba → `cuba`
* `zeidermanartery`: Cartagena → `cartagena`

Se decidió explícitamente NO enlazar, por no ser equivalentes semánticos
del lugar canónico aunque compartan léxico o cercanía geográfica:

* `zeidermanartery` — "Río Magdalena" (cuenca hidrográfica completa; no
  hay lugar-punto que la represente, y no se sustituye por un lugar
  llamado "Magdalena" que representaría otra entidad).
* `friedemanncrossmangombe` — "Provincia histórica de Cartagena" (entidad
  administrativa colonial, distinta de la ciudad actual `cartagena`).
* `forsdickhogsbjergreader` y `scottvientocomun` — "Haití/Saint-Domingue" /
  "Saint-Domingue/Haití" (etiqueta compuesta que nombra deliberadamente dos
  momentos históricos a la vez; colapsarla en el punto `haiti` perdería
  esa doble temporalidad).
* `espinosahabitarmultiespecie` — "Palenquito" y "Gamero" (caseríos
  distintos de San Basilio de Palenque, sin lugar canónico propio).
* Regiones y cuencas sin equivalente real: Isla La Tortuga, Cayo Sal
  (archipiélago Los Roques), Caribe venezolano, Caribe anglófono, Caribe,
  África, Estados Unidos, Gran Bretaña, Circulación internacional,
  Norteamérica, Américas, Asia, Europa, Nueva York, Caribe hispano, Tierra
  Firme, Gran Caribe (×2, cuenca), Atlántico negro (×2, cuenca), Colombia
  (sin lugar canónico a escala país), Francia.

Las tres funciones nuevas de `con-el-agua-de-por-medio.html`
(`textoSeguro`, la lectura de `n.orillas`/`lenguas_publicacion`, y el
bloque `edicion_consultada`) se revisaron después de estabilizar
`orillas`: renderizan correctamente tanto las orillas canónicas (usan
`L[o.lugar][2]`) como las regiones/cuencas sin equivalente (usan
`o.label`), no crean un segundo modelo territorial paralelo — reutilizan
el mismo diccionario `lugares` — y no contienen ninguna decisión
académica embebida en el código. Se conservan.

## 4. Temporalidad

Se completaron los 17 registros faltantes en `tp01-temporalidad.json`,
todos con el mismo tratamiento mecánico ya aplicado al resto del corpus
para años de cuatro cifras limpios: `procedencia: "derivado del campo y"`,
`estado: "candidatura"`, `publicacion: {valor, era: "EC", precision:
"exacta"}`, `periodo_estudiado: null`. No se derivó ningún periodo
estudiado: el contrato exige lectura de la obra para eso, y no se simuló
esa lectura para pasar el validador. `validar-temporalidad.mjs` pasa de
reportar `[ERROR COBERTURA]` sobre las 17 a 0 errores.

## 5. Validaciones (estado final)

* `python3 data/agua-de-por-medio/sincronizar.py --check` → en sincronía,
  v1.18.0, 274 obras, 632 relaciones.
* `node scripts/validar-atlas.mjs` → 0 errores, 3 advertencias (las
  mismas de siempre: `ulysseWhyHaiti`, `totumo`/`figueroa` sin año,
  entradas compuestas con " / "; ninguna nueva).
* `node scripts/validar-fenomenos.mjs` → 0 errores, 3 advertencias (sin
  cambios respecto al estado previo).
* `node scripts/validar-temporalidad.mjs` → 0 errores. 274 registros:
  53 confirmados, 209 candidaturas, 12 pendientes.
* `node scripts/validar-piloto-atlas-2.mjs` → 0 errores, 0 advertencias.
* `node scripts/verificar-cifras-sitio.mjs` → 0 desfases, 32 afirmaciones
  comprobadas.

`ORILLAS_VALIDAS_17_DE_17`. `TEMPORALIDAD_CUBIERTA_17_DE_17`.

## 6. Cardinalidad final

`257 + 17 = 274 obras`. `614 + 18 = 632 relaciones`. Verificado
programáticamente contra `337725a`: `IDS_PREEXISTENTES_MODIFICADOS = 0`,
`IDS_ELIMINADOS = 0`. Nada cambió académicamente respecto a la cifra
esperada.

## 7. Commits

* Commit A — integración de datos/esquema: `877a5f0`
* Commit B — sitio y cifras derivadas: `bc1aa76`
* Commit C — este documento de cierre.

## 8. Deuda de integración con TRIAGE_INTERNO_C1_C10

Pendiente de ejecutar en el reporte final: la intersección conceptual de
las 17 obras con los 15 universos ya trabajados por el triage. No se
incorpora ninguna a los 82 casos históricos; cualquier caso que
corresponda queda registrado como `DEUDA_INTEGRACION_POST_S17`, separado
del universo original.
