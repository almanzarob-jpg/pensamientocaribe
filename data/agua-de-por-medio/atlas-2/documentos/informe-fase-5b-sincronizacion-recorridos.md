# INFORME — CARRIL A · FASE 5B

## Sincronización controlada del contrato de recorridos

**Fecha:** 25 de agosto de 2026
**Repositorio:** `~/Pagina/pensamiento-caribe` · rama de referencia `feat/atlas-2-etapa-1-integrada`
**Partida:** `FASE_5A_D_CERRADA_Y_APROBADA — FASE_5B_AUTORIZABLE`
**Naturaleza:** técnica y de migración de datos. No se clasificó ninguna obra, no se reinterpretó ninguna decisión, no se completó ningún vacío. No se ejecutó ninguna operación Git.

---

## A. Resumen ejecutivo

Las decisiones académicas aprobadas en la Fase 5A-D quedan escritas en el corpus productivo. Las 232 obras tienen ahora un estado de recorrido explícito; 74 llevan recorrido principal, seis llevan arquitectura especial sin principal y 152 declaran, sin ambigüedad, que su clasificación no está cerrada.

La migración se hizo con un transformador reproducible que corre por defecto en modo de solo lectura, y solo escribió después de que el candidato pasara la reconciliación de identificadores, los once conteos exigidos, los trece casos sentinela, el validador del proyecto y la prueba de compatibilidad del frontend en seis anchos. El candidato verificado y el archivo productivo escrito tienen el **mismo hash SHA-256**: lo que se validó es exactamente lo que se escribió.

Cuatro incidencias quedaron registradas y ninguna se resolvió por interpretación. La más consecuente no es un error de datos sino un efecto visible: **79 obras cambian el distintivo «Estado (2.0)» que la interfaz ya mostraba**, porque ese distintivo se calcula desde `revision`, que es uno de los campos que esta fase estaba mandada a sincronizar.

---

## B. El transformador

**Ruta:** `scripts/sincronizar-recorridos-atlas-2.mjs` · 30 282 bytes
**Hash:** `2a09882f601bc221aaaf64da2f905a6eff8cea619e9f8c26c4eed2b0eee73294`

```
node scripts/sincronizar-recorridos-atlas-2.mjs              # dry-run: solo lectura + candidato
node scripts/sincronizar-recorridos-atlas-2.mjs --reporte    # además, el reporte obra por obra
node scripts/sincronizar-recorridos-atlas-2.mjs --escribir    # escritura productiva
```

El modo por defecto no toca ningún archivo productivo. La escritura exige `--escribir`, y antes de sustituir nada copia los dos archivos originales a `derivados/respaldo-previo-fase-5b/` e imprime sus hashes.

**Secuencia:** lee el corpus → lee la matriz → lee los cuatro lotes → reconcilia identificadores → aplica el contrato → reordena los campos nuevos en el orden del documento normativo → valida → escribe el candidato → emite el reporte → aborta ante cualquier inconsistencia.

Las seis arquitecturas especiales están **transcritas** del documento normativo de Fase 5A-D, no inferidas, y el script comprueba que la matriz coincida con ellas: si discreparan, aborta. Es la aplicación literal del principio rector, que el código transforma decisiones y no las produce.

**Una nota sobre la dirección de la sincronización.** El §44 de la instrucción pide regenerar `datos-atlas.js` desde el `.json` y, a la vez, usar el mecanismo oficial si existe. Existe, y va en la dirección contraria: `data/agua-de-por-medio/sincronizar.py` genera el `.json` desde el `.js`, y la primera línea del `.js` declara que es la fuente canónica y que el `.json` no se edita a mano. No invertí la convención del repositorio. El script escribe el `.js` y delega en `sincronizar.py` la regeneración del `.json`. El resultado cumple lo sustantivo del §44 y del §45: un solo origen, ningún archivo editado a mano, y los dos equivalentes, comprobado con `sincronizar.py --check` y con la comparación profunda del validador.

---

## C. Reconciliación de identificadores

| conjunto | entradas |
|---|---|
| corpus productivo | 232 |
| matriz de Fase 5A | 233 |
| lotes generados | 57 |
| comunes corpus ∩ matriz | **232** |
| solo en la matriz | **1** · `stewardpuertorico` |
| solo en el corpus | 0 |
| solo en lotes | 1 · `stewardpuertorico` |

Sin emparejamiento aproximado, sin cotejo por título y sin cotejo por autor: la unión es por identificador exacto.

**Reconciliación de estados** — la cifra que el §7 pedía resolver antes de escribir:

| estado en la matriz | dentro del corpus | fuera del corpus |
|---|---|---|
| confirmado | 80 | 0 |
| preliminar | 0 | 0 |
| pendiente | **83** | **1** |
| sin_evaluar | **69** | 0 |
| **total dentro del corpus** | **232** | |

La respuesta a la duda del §7 es que **la resta no cae sobre `sin_evaluar` sino sobre `pendiente`**. `stewardpuertorico` figura en la matriz como pendiente con decisión `fusionar_y_redirigir`, de modo que las 84 pendientes de la matriz son 83 dentro del corpus, y las 69 sin evaluar siguen siendo 69. La suma cierra en 232 sin ajustar ninguna fila.

---

## D. Conteos antes y después

| magnitud | antes | después | exigido |
|---|---|---|---|
| obras | 232 | **232** | 232 |
| relaciones | 588 | **588** | 588 |
| lugares | 30 | 30 | — |
| con `estado_recorrido` explícito | 0 | **232** | 232 |
| confirmadas | — | **80** | 80 |
| pendientes (dentro del corpus) | — | **83** | reconciliado |
| sin evaluar | — | **69** | reconciliado |
| preliminares | — | **0** | 0 |
| con recorrido principal | 0 | **74** | 74 |
| fronteras constitutivas | 0 | **4** | 4 |
| síntesis multicorriente | 0 | **2** | 2 |
| confirmadas con al menos una secundaria | — | **63** | 63 |
| confirmadas con dos secundarias | — | **23** | 23 |

**Secundarias, los dos recuentos que pedía el §14:**

| | 0 | 1 | 2 |
|---|---|---|---|
| entre las 80 confirmadas | 17 | 40 | **23** |
| entre las 74 con recorrido principal | 12 | 40 | **22** |

La diferencia es `schwartz_seaofstorms`, que tiene dos secundarias y no tiene principal.

**Distribución por recorrido principal:**

| C1 | C2 | C3 | C4 | C5 | C6 | C7 | C8 | C9 | C10 |
|---|---|---|---|---|---|---|---|---|---|
| 4 | 7 | 6 | 15 | 9 | 3 | 5 | 7 | 9 | 9 |

**Fuentes de las 80 confirmadas:** 54 de lotes generados, 26 de decisiones documentales.

---

## E. Las seis arquitecturas especiales

| obra | tipo | recorridos | secundarias | fuente |
|---|---|---|---|---|
| `rifkinfictions` | frontera constitutiva | c1 / c3 | — | `dictamen-academico-bloque-1-etapa-2-3.md` |
| `pricefirst` | frontera constitutiva | c3 / c9 | — | `dictamen-academico-bloque-2-etapa-2-3.md` |
| `whiteheadtiger` | frontera constitutiva | c1 / c7 | — | `decision-academica-whiteheadtiger-p2-etapa-2-3f.md` |
| `schwartz_seaofstorms` | frontera constitutiva | c6 / c7 | **c2, c4** | `decision-academica-schwartz_seaofstorms-p2-etapa-2-3f.md` |
| `perezmorales` | síntesis multicorriente | c3 / c5 / c7 | — | `dictamen-academico-bloque-4-etapa-2-3.md` |
| `pinedashipwrecked` | síntesis multicorriente | c1 / c4 / c7 | — | `decision-academica-pinedashipwrecked-p2-etapa-2-3f.md` |

Las seis con `recorrido: null`, `estado_recorrido: "confirmado"` y ninguna marca de conflicto. Ninguna columna de la matriz se copió mecánicamente: la columna `conflicto_clasificacion`, que vale `sí` en estas seis y en `jaffeconcrete`, **no se migró en ninguna forma**, conforme al §12 y a la regla 9 del contrato.

Forma escrita, tal como queda en el corpus:

```json
{
  "id": "schwartz_seaofstorms",
  "recorrido": null,
  "recorridos_sec": ["c2", "c4"],
  "arquitectura_recorrido": { "tipo": "frontera_constitutiva", "recorridos": ["c6", "c7"] },
  "estado_recorrido": "confirmado",
  "fuente_recorrido": ["decision-academica-schwartz_seaofstorms-p2-etapa-2-3f.md"]
}
```

---

## F. Casos sentinela

| caso | resultado | estado en el corpus |
|---|---|---|
| `stoutafterlove` | ok | confirmado · c10 · sec c4 · ordinaria |
| `rifkinfictions` | ok | confirmado · null · frontera c1/c3 |
| `pricefirst` | ok | confirmado · null · frontera c3/c9 |
| `whiteheadtiger` | ok | confirmado · null · frontera c1/c7 |
| `schwartz_seaofstorms` | ok | confirmado · null · sec c2/c4 · frontera c6/c7 |
| `perezmorales` | ok | confirmado · null · síntesis c3/c5/c7 · sin secundarias |
| `pinedashipwrecked` | ok | confirmado · null · síntesis c1/c4/c7 · sin secundarias |
| `jaffeconcrete` | ok | confirmado · **c6** · arquitectura ordinaria |
| `gudynas` | ok | **pendiente** · null |
| `mintz` | ok | **pendiente** · null |
| `mintzarea` | ok | confirmado · c2 · sec c4 — registro distinto de `mintz` |
| `steward` | ok | confirmado · c4 — permanece en el corpus |
| `stewardpuertorico` | ok | **fuera del corpus**; sigue como redirección hacia `steward` |

Los trece son assertions dentro del script: si alguno fallara, la migración aborta antes de escribir.

---

## G. Campos añadidos

Exactamente seis, y ninguno más:

| campo | obras |
|---|---|
| `recorrido` | 232 |
| `recorridos_sec` | 232 |
| `arquitectura_recorrido` | 232 |
| `estado_recorrido` | 232 |
| `revision` | 79 |
| `fuente_recorrido` | 82 |

`revision` en 79 y no en 80 por las tres del apartado L.2. `fuente_recorrido` en 82 porque incluye las dos pendientes con decisión de lote, `gudynas` y `mintz`, cuya procedencia documental sí consta.

Los campos van al final de cada obra, en el orden del contrato: `recorrido`, `recorridos_sec`, `arquitectura_recorrido`, `estado_recorrido`, `revision`, `fuente_recorrido`.

---

## H. Campos no tocados

No se migró `marcas`, `rutas`, `orillas`, `operaciones`, `proceso`, `lenguas_publicacion`, `temporalidades` ni ninguna corrección bibliográfica, aunque varios existan en los lotes. `l` no se modificó en ninguna obra. `catalogos-atlas-2.json` no se tocó y `provisional: true` sigue en los diez recorridos. C1 no se resolvió.

Comprobación independiente del §34, hecha fuera del script y contra la copia de respaldo: **cero discrepancias**. Títulos, autores, años, lugares, fenómenos, identificadores, orden de las obras, metadatos existentes, las 588 relaciones y los bloques `meta`, `fenomenos`, `lugares` y `redirecciones` son idénticos byte a byte.

---

## I. Validadores

`scripts/validar-atlas.mjs` admite rutas explícitas, de modo que pudo correr sobre el candidato sin sustituir nada y sin alterar su semántica. No se modificó ningún validador.

```
# sobre el candidato, antes de escribir
node scripts/validar-atlas.mjs \
  data/agua-de-por-medio/atlas-2/derivados/datos-atlas-fase-5b-candidato.json \
  data/agua-de-por-medio/atlas-2/derivados/datos-atlas-fase-5b-candidato.js

# sobre el productivo, después de escribir
node scripts/validar-atlas.mjs
python3 data/agua-de-por-medio/sincronizar.py --check
```

| ejecución | errores | advertencias |
|---|---|---|
| referencia, antes de migrar | **0** | 4 |
| candidato | **0** | 4 |
| productivo, después de escribir | **0** | 4 |

Las cuatro advertencias son las mismas de siempre y ninguna procede de esta migración: identificador `ulysseWhyHaiti` fuera de minúsculas, cuatro entradas sin año, tres autorías no identificadas y seis títulos con separador « / ». `sincronizar.py --check` responde «En sincronía · v1.16.1 · 232 obras · 588 relaciones».

El validador no conoce todavía los campos del contrato de recorridos, de modo que no los valida ni los rechaza. Las comprobaciones del §23 las hace el propio transformador, con once condiciones de aborto.

---

## J. Frontend

Prueba automatizada con Chromium en seis anchos, con `prefers-reduced-motion`, cruzando el umbral de entrada y midiendo geometría real del DOM. Se ejecutó tres veces con el mismo instrumento: sobre los datos originales, sobre el candidato y sobre el archivo productivo escrito.

| ancho | obras | relaciones | nodos | vistas cor/con/cro/tab | búsqueda | ficha + Escape | zoom | pan | reencuadre | UI de Recorridos | errores JS |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1440 | 232 | 588 | 232 | 232/232/232/232 | 7 obras | ok | ok | ok | ok | ausente | **0** |
| 1280 | 232 | 588 | 232 | 232/232/232/232 | 7 obras | ok | ok | ok | ok | ausente | **0** |
| 430 | 232 | 588 | 232 | 232/232/232/232 | 7 obras | ok | ok | ok | ok | ausente | **0** |
| 390 | 232 | 588 | 232 | 232/232/232/232 | 7 obras | ok | ok | ok | ok | ausente | **0** |
| 375 | 232 | 588 | 232 | 232/232/232/232 | 7 obras | ok | ok | ok | ok | ausente | **0** |
| 320 | 232 | 588 | 232 | 232/232/232/232 | 7 obras | ok | ok | ok | ok | ausente | **0** |

**Las tres ejecuciones dan la misma tabla, celda por celda**, incluidos los seis `viewBox` iniciales: `0 0 1200 640` en 1440 y 1280, y en móvil `395.6 -131.1 603.7 973.7`, `383.9 -131.1 627.2 973.7`, `379.2 -131.1 636.7 973.7` y `352.5 -131.1 690.1 973.7`. El reencuadre móvil de la Fase 4A y los controles de la Fase 4B quedan intactos. No hay regresión atribuible a los campos nuevos.

No se implementó ninguna interfaz de Recorridos: ni filtro, ni chip, ni color, ni leyenda C1–C10, ni filtro territorial. La comprobación automática de que la palabra no aparece en la interfaz da «ausente» en los seis anchos.

Una precisión de método: el entorno de prueba no tiene salida a `fonts.googleapis.com`, de modo que la tipografía remota no carga. Es una limitación del contenedor, no del corpus, y afecta por igual a las tres ejecuciones, incluida la de referencia.

---

## K. Integridad

**Archivos productivos, antes y después:**

| archivo | antes | después |
|---|---|---|
| `datos-atlas.js` | `d2f8e68dc8915c597e5f3ff93ec55cc601a5de98c35c1ffdaeb0ba938d469048` | `19ebf3886a621f7dfacadbbac9f8290be31886d117e8598c45fee7d38f3af8b9` |
| `datos-atlas.json` | `b850f081c0107a72bfedd12b8d780aaf1efba638e3440a6e249219bf07e7313c` | `5a4e6a0dc9c404902d2b1e7008653134f5ff44a39c68338a25f7737350f4ba80` |

El candidato verificado tiene exactamente esos dos hashes. Lo que pasó las pruebas es, byte a byte, lo que quedó escrito.

**Archivos sensibles que no debían cambiar, y no cambiaron:**

| archivo | hash antes y después |
|---|---|
| `atlas-2/catalogos-atlas-2.json` | `f12ca9ac…d97207b` |
| `atlas-2/documentos/esquema-datos-propuesto.json` | `c9900dad…15cfc4` |
| `atlas-2/documentos/expediente-evidencia-c7.md` | `3ed12393…1fa121f` |
| `atlas-2/documentos/ficha-decision-c4.md` | `2eb89027…c232c8c` |
| `atlas-2/documentos/auditoria-academica-fase-5a.md` | `c154dca6…c4631` |
| `atlas-2/documentos/matriz-clasificacion-fase-5a.csv` | `de369834…d74d7e` |
| `atlas-2/documentos/decision-normativa-contrato-recorridos-fase-5a-d.md` | `ee7d3329…d0f331` |
| `atlas-2/lotes/a01-generado.json` | `15b566ae…1cf10` |
| `atlas-2/lotes/a02-generado.json` | `7d4e47d8…0c2029` |
| `atlas-2/lotes/s01-generado.json` | `cd68a91a…e6626` |
| `atlas-2/piloto-generado.json` | `92862557…65bf20` |
| `proyectos/con-el-agua-de-por-medio.html` | `7a2051fc…2425` |
| `css/con-el-agua-de-por-medio.css` | `5dd39485…4a55` |
| `data/agua-de-por-medio/sincronizar.py` | `50ad005d…5d6d6` |
| `scripts/validar-atlas.mjs` | `6c36f9fd…4bf1a8` |

Ningún dictamen, expediente, lectura, decisión, cierre ni matriz histórica fue modificado.

**Archivos creados:**

| archivo | bytes | hash |
|---|---|---|
| `scripts/sincronizar-recorridos-atlas-2.mjs` | 30 282 | `2a09882f…e73294` |
| `atlas-2/derivados/datos-atlas-fase-5b-candidato.json` | 333 866 | `5a4e6a0d…f4ba80` |
| `atlas-2/derivados/datos-atlas-fase-5b-candidato.js` | 267 815 | `19ebf388…3af8b9` |
| `atlas-2/derivados/reporte-migracion-fase-5b.csv` | 12 120 | `6ab3fd74…43e8ba` |
| `atlas-2/derivados/respaldo-previo-fase-5b/datos-atlas.js` | 222 350 | `d2f8e68d…69d048` |
| `atlas-2/derivados/respaldo-previo-fase-5b/datos-atlas.json` | 273 599 | `b850f081…7313c` |
| `atlas-2/documentos/informe-fase-5b-sincronizacion-recorridos.md` | este documento | — |

El espejo `.js` del candidato existe porque el validador del proyecto compara el JSON con su espejo y se negaría a validar un candidato huérfano: es el mecanismo seguro que pide el §38, y no altera la semántica del validador. El respaldo es la vía de reversión sin Git: restaurar esos dos archivos y ejecutar `sincronizar.py --check` devuelve el corpus a su estado previo.

---

## L. Incidencias

Cuatro, ninguna resuelta por interpretación.

**1. `stewardpuertorico` permanece fuera del corpus.** Figura en la matriz como pendiente con decisión `fusionar_y_redirigir` y no se incorporó. Sigue existiendo como redirección hacia `steward` en el bloque `redirecciones`, que no se tocó.

**2. Tres obras con `revision` aplazada: `chande`, `manoalzada` y `esquiva`.** El corpus las declara `procedencia: "manifestación"` con `procedencia_verificada: false`; sus lotes las declaran `corpus heredado`, `procedencia_verificada: true` y con revisión confirmada. Las dos capas se contradicen. El validador del proyecto prohíbe expresamente la combinación de procedencia no verificada con revisión confirmada, y el §6 de esta instrucción no autoriza migrar `procedencia_verificada`. Migrar la revisión habría hecho fallar al validador; corregir la procedencia habría sido tocar un campo prohibido; declarar cuál de las dos capas tiene razón habría sido una decisión académica. **No decidí ninguna de las tres cosas: no migré `revision` para esas obras y registro la contradicción.** Su recorrido sí se migró, porque es una decisión independiente y documentada: `chande` c9, `manoalzada` c9, `esquiva` c7. Son las tres identidades bibliográficas que la auditoría de Fase 5A ya había listado como no sincronizables.

**3. La dirección de la sincronización `.js` / `.json` contradice la convención del repositorio.** Explicada en el apartado B. Se respetó el mecanismo oficial y se documenta la divergencia respecto de la letra del §44.

**4. La migración cambia un distintivo que la interfaz ya mostraba.** Es la incidencia de mayor consecuencia y no procede de un error.

La vista Tabla y las fichas muestran desde antes un distintivo «Estado (2.0)» calculado por la función `estado20()`, que lee `revision.estado`. Al escribir `revision` —campo que el §5 manda sincronizar— ese distintivo cambia en **79 obras**:

| | antes | después |
|---|---|---|
| pendiente | 227 | 150 |
| preliminar | 5 | 5 |
| confirmada | 0 | **77** |

| tránsito | obras |
|---|---|
| pendiente → confirmada | 75 |
| preliminar → confirmada | 2 |
| pendiente → preliminar | 2 (`gudynas` y `mintz`, con revisión `pendiente_revision_con_texto`) |

Ninguna interfaz nueva se creó y el nombre «Recorridos» no aparece por ninguna parte, de modo que el §40 se cumple. Pero un lector que abra la tabla verá 77 entradas marcadas como confirmadas donde antes no había ninguna. Eso es exactamente lo que dicen los datos y lo que la Dirección Académica aprobó en la Fase 5A-D; lo señalo porque es visible, porque la instrucción no lo anticipaba y porque el visto bueno que cierra esta fase debería darse sabiéndolo. Si se prefiriera que el distintivo no cambie todavía, la salida no es retirar `revision` del corpus sino decidir qué muestra `estado20()`, y eso es trabajo de frontend, que esta fase tiene prohibido.

---

## M. Git

No se ejecutó ninguna operación Git. Ni `add`, ni `commit`, ni `push`, ni merge, ni cherry-pick, ni checkout, ni cambio de rama, ni `status` ni ninguna otra forma de inspección. La comprobación de qué se escribió se hizo por hashes y por listado de directorio. No se tocó `.git/`.

---

## Criterios de aceptación

| criterio | resultado |
|---|---|
| dry-run funciona | ✔ |
| no clasifica obras nuevas | ✔ |
| identificadores reconciliados | ✔ |
| 232 obras preservadas | ✔ |
| 588 relaciones preservadas | ✔ |
| 80 confirmadas | ✔ |
| 0 preliminares | ✔ |
| pendientes y sin evaluar reconciliadas | ✔ 83 + 69 |
| 74 recorridos principales | ✔ |
| 4 fronteras constitutivas | ✔ |
| 2 síntesis multicorriente | ✔ |
| 63 con secundarias | ✔ |
| 23 con dos secundarias | ✔ |
| `schwartz_seaofstorms` conserva c2/c4 | ✔ |
| `jaffeconcrete` sigue ordinaria c6 | ✔ |
| `gudynas` sigue pendiente | ✔ |
| `mintz` sigue pendiente | ✔ |
| `mintzarea` sigue siendo registro distinto | ✔ |
| `stewardpuertorico` no entra al corpus | ✔ |
| `steward` permanece | ✔ |
| ningún documento histórico cambió | ✔ |
| `datos-atlas.js` y `.json` generados por procedimiento reproducible | ✔ |
| frontend sin regresiones | ✔ |
| consola sin errores nuevos | ✔ |
| no se implementó interfaz de Recorridos | ✔ |
| no se implementó territorio | ✔ |
| no se avanzó P3 | ✔ |
| no se hizo Git | ✔ |

---

## Estado final

```
CARRIL_A_FASE_5B_SINCRONIZACION_RECORRIDOS_COMPLETADA_Y_VERIFICADA — PENDIENTE_DE_VISTO_BUENO_DE_DIRECCION_ACADEMICA
```

No se implementan los Recorridos en la interfaz. No se avanza P3.
