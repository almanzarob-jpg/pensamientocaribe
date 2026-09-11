# Apertura de control · sincronización técnica pendiente · post-P4

## A. Posición en la secuencia

No existe, en el repositorio, un documento con un nombre de fase distinto de P1–P4 que gobierne lo que sigue. El documento rector de la recalibración —`apertura-recalibracion-p3-etapa-2-3g.md`, así llamado dentro del propio proyecto en `lectura-decision-grosfoguelcolonial-p3-etapa-2-3n.md` línea 69— cataloga en su §8 ("Pendientes técnicos, sincronizaciones ya decididas") exactamente dos casos, ninguno de los dos perteneciente a P3 ni a P4: `benedictykokken_haitiexception` y `gudynas`. `cola-lectura-pendiente-atlas-2.md` §6 registra el mismo catálogo, con el mismo total de 2. El primero se cerró en el commit `a413e63`. Este documento abre el cierre del segundo, que es literalmente lo único que queda de una lista ya cerrada en un 50%, no una fase nueva.

No hay, más allá de este punto, ningún documento que defina una fase siguiente con nombre, universo y criterio de cierre propios. Se reporta esto explícitamente en el informe final: no se inventa una "fase 5" ni una "P5" para llenar ese vacío.

## B. Objetivo

Sincronizar al corpus público el único dato bibliográfico de `gudynas` que tiene corrección ya aprobada (el título), sin tocar su bloqueo de elegibilidad territorial, que es una cuestión sustantiva distinta, no resuelta, y fuera del alcance de una sincronización técnica.

## C. Universo

Un caso: `gudynas`.

## D. Estado inicial

| id | estado actual | evidencia disponible | trabajo pendiente | bloqueo |
|:---:|:---:|:---:|:---:|:---:|
| `gudynas` | `t: "Extractivismos"` (título heredado, incompleto); `recorrido: null`; `estado_recorrido: "pendiente"` | `a02-config.json` (`decision_aprobada: "bloquear_por_alcance_y_corregir_bibliografia"`, `correcciones_aprobadas.t` con el título completo, `elegibilidad_atlas.estado: "bloqueada_por_alcance"`); verificado además contra la fuente primaria (PDF publicado por el propio Gudynas) | Sincronizar `t` al valor ya aprobado | Elegibilidad territorial sigue bloqueada — **no se resuelve aquí** |

## E. Dependencias

`a02-config.json` (decisión aprobada, 2026-08-08, Dirección Académica) es la fuente vinculante para el título. `dictamen-academico-c4.md` §10 y `ficha-decision-c4.md` (Decisión 8) son contexto de por qué la elegibilidad territorial de Veracruz permanece abierta; ninguno de los dos autoriza resolverla aquí.

## F. Riesgos

El riesgo real y específico de este caso es confundir la corrección bibliográfica (aprobada, sincronizable) con el bloqueo de elegibilidad (sustantivo, no resuelto): `decision_aprobada` los agrupa en una sola cadena (`"bloquear_por_alcance_y_corregir_bibliografia"`), lo que podría inducir a tratar ambos como una sola operación. Se ejecuta solo la mitad bibliográfica; `recorrido`, `recorridos_sec`, `f`, `ap`, `revision` y `elegibilidad_atlas` (este último ni siquiera existe en `datos-atlas.js`, y no se crea aquí) quedan intactos.

## G. Protocolo de ejecución

Reemplazo escalado de `"t":"Extractivismos"` por el título completo en el objeto de `gudynas` dentro de `datos-atlas.js`; regenerar `datos-atlas.json`; ejecutar los cuatro validadores; auditar alcance por objeto/campo contra `HEAD`; commit atómico único.

### Triage

`gudynas` → **`REQUIERE_SANEAMIENTO`** (la decisión bibliográfica ya existe; el dato vivo está incompleto).

**DETENTE parcial**: se ejecuta el saneamiento de título en esta misma operación por ser inequívoco y de una sola pieza, pero se reporta al final que no queda, después de este cierre, ninguna fase siguiente ya definida en la documentación — cualquier avance posterior (los frentes de §9–§13 de `cola-lectura-pendiente-atlas-2.md`: discrepancia C2 34/35, fronteras C3/C9, C3/C10 y C2/C10 sin resolver, y los universos internos de C1–C10 sin triar) requiere una decisión nueva de Dirección Académica sobre cuál abrir, no una continuación automática.
