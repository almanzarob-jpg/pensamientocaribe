# Cierre · Sublote P3-F · Etapa 2.3N

**Estado del sublote:** operativamente cerrado. 9 de 10 casos resueltos; 1 bloqueado por fuente (`branddoor`). Validación: 0 errores nuevos en la batería completa.

---

## Tabla de cierre

| caso | disponibilidad | principal | secundarias | arquitectura | semáforo | reserva | certeza | estado |
|---|---|---|---|---|---|---|---|---|
| `kloosterrealm` | LISTO | C7 | C2 | — | VERDE | ninguna | alta | confirmado |
| `zambrana` | LISTO | C4 | C7 | — | VERDE | ninguna | alta | confirmado |
| `archipelagicthinking` | LISTO | C5 | — | — | VERDE | débil | alta/media | confirmado |
| `bahadurcoolie` | LISTO | C4 | C10 | — | VERDE | ninguna | alta | confirmado |
| `branddoor` | BLOQUEADO_FUENTE | — | — | — | — | — | — | pendiente |
| `brereton_racerelationstrinidad` | LISTO | C4 | C8 | — | VERDE | ninguna | alta | confirmado |
| `caribjourneys` | LISTO | — | — | frontera_constitutiva (C5/C10) | ROJO representable | ninguna | alta | confirmado |
| `ferrerfreedomsmirror` | LISTO | — | — | frontera_constitutiva (C2/C3) | ROJO representable | ninguna | alta | confirmado |
| `deere` | LISTO | C1 | C8 | — | VERDE | débil | alta/media-alta | confirmado |
| `fischer` | LISTO | — | — | frontera_constitutiva (C3/C9) | ROJO representable | ninguna | alta | confirmado |

## 1. Casos resueltos

Nueve de diez: `kloosterrealm`, `zambrana`, `archipelagicthinking`, `bahadurcoolie` (Tanda 1, `99309fb`); `brereton_racerelationstrinidad`, `caribjourneys`, `ferrerfreedomsmirror`, `deere`, `fischer` (tanda final, este commit). Cada uno tiene su lectura-decisión documental propia; este cierre no repite sus argumentos.

## 2. Correcciones de etiquetas heredadas

`kloosterrealm`: corrección plena (C5 heredado → C7 confirmado). `caribjourneys`: corrección de los fenómenos heredados (`soberanias, memoria` → arquitectura frontera constitutiva C5/C10; la anotación curatorial `ap` sí anticipaba la lectura). `ferrerfreedomsmirror` y `fischer`: los fenómenos heredados nombraban solo una de las dos corrientes mutuamente constitutivas y se completan con la segunda; las anotaciones curatoriales `ap` de ambos casos corroboran la lectura independiente sin corrección. `brereton_racerelationstrinidad`, `zambrana`, `bahadurcoolie`, `deere`: etiquetas heredadas corroboradas sin corrección.

## 3. Ampliaciones quirúrgicas

Ninguna en esta tanda. No fue necesario extender ningún campo del contrato: los tres casos de arquitectura compleja (`caribjourneys`, `ferrerfreedomsmirror`, `fischer`) se resolvieron con `frontera_constitutiva`, ya disponible.

## 4. Arquitecturas especiales

Tres casos de `frontera_constitutiva`, los tres nuevos en esta tanda: `caribjourneys` (C5/C10 — parentesco y migración mutuamente constitutivos, declarado así por la propia introducción del libro); `ferrerfreedomsmirror` (C2/C3 — esclavización cubana y emancipación haitiana como espejo invertido, en el sentido explícito del título); `fischer` (C3/C9 — emancipación radical haitiana y su desmentida cultural activa, inseparables en el concepto de "disavowed modernity" que organiza el libro). En los tres casos la prueba de retirada global fue destructiva en ambas direcciones, lo que descarta la lógica ordinaria de principal más secundaria.

## 5. Reservas

`archipelagicthinking` (Tanda 1): reserva débil vigente, no revisada. `deere`: reserva débil nueva — el libro tiene alcance panamericano (Argentina, México, Norteamérica) y usa el Caribe como "sitio ejemplar" y no exclusivo; no impide la clasificación dentro del contrato.

## 6. `branddoor` bloqueado por fuente

*A Map to the Door of No Return: Notes to Belonging* (Dionne Brand) no se localizó en la Biliografia ni en otras ubicaciones del repositorio ya autorizadas. Permanece `BLOQUEADO_FUENTE`, acumulado para una futura campaña de recuperación bibliográfica junto con `araujo` (P3-E) y los demás casos bloqueados de P3-B y P3-D. No se buscó fuente nueva en esta tanda, conforme a la instrucción.

## 7. Resultados de validación

`python3 sincronizar.py --check`: en sincronía, v1.17.0, 257 obras, 614 relaciones. `validar-atlas.mjs`: 0 errores, 4 advertencias (todas preexistentes, ninguna nueva: formato de id, fechas pendientes, autorías pendientes, entradas compuestas — ninguna de las cinco entradas de esta tanda). `validar-fenomenos.mjs`: 0 errores, 3 advertencias preexistentes. `validar-temporalidad.mjs`: 0 errores, 2 advertencias preexistentes. `validar-piloto-atlas-2.mjs`: 0 errores, 0 advertencias. Auditoría programática de alcance: mismos 257 IDs antes/después; únicamente los cinco casos autorizados de esta tanda muestran diferencias semánticas; `branddoor`, `araujo`, `ferdinand` y los cuatro casos de la Tanda 1 quedan intactos; 614 relaciones sin cambio de conteo.

## 8. Estado del sublote

P3-F queda cerrado operativamente: 9 de 10 casos resueltos, 1 bloqueado por fuente sin detener el lote, 0 errores nuevos en la batería completa de validación, alcance auditado y limpio.

```
P3_F_9_DE_10_RESUELTOS
BRANDDOOR_BLOQUEADO_FUENTE
VALIDACION_0_ERRORES_NUEVOS
P3_F_CERRADO_OPERATIVAMENTE
P3_F_VERSIONADO
```
