# Cierre de P4 — Atlas 2.0, etapa 2.4

P4 tenía dos casos. Los dos se trabajaron en paralelo, sin esperar el uno al otro, y llegaron a estados distintos que no se confunden entre sí.

## 1. Resultado consolidado

| caso | fuente | principal | secundarias | arquitectura | semáforo | estado |
|---|---|:---:|:---:|:---:|:---:|---|
| `hoeftesuriname` | local (PDF completo, `Biliografia`) | C4 | C7 | — | VERDE | RESUELTO_IMPLEMENTADO |
| `castrogomezhybris` | no recuperada (`BUSQUEDA_AGOTADA_POR_AHORA`) | — | — | — | — | BLOQUEADO_FUENTE |

## 2. `hoeftesuriname`

Lectura probatoria completa sobre la fuente local (`lectura-decision-hoeftesuriname-p4-etapa-2-4a.md`): objeto empírico, condiciones históricas, mecanismo explicativo y principio organizador global reconstruidos de forma independiente, antes de consultar la etiqueta heredada. Las cinco pruebas (retirada global, retirada segmentaria, direccionalidad, cobertura, dependencia) convergen en semáforo verde. Implementado: `recorrido: "c4"`, `recorridos_sec: ["c7"]`, `estado_recorrido: "confirmado"`. Sincronización ejecutada (`datos-atlas.json` v1.17.0, 257 obras), los cuatro validadores (`validar-atlas`, `validar-temporalidad`, `validar-fenomenos`, `validar-piloto-atlas-2`) corren con 0 errores nuevos, y la auditoría de alcance confirma que el único id modificado es `hoeftesuriname`, únicamente en los cuatro campos de recorrido. No se tocó ninguna relación.

## 3. `castrogomezhybris`

Búsqueda bibliográfica acotada (`recuperacion-castrogomezhybris-p4-etapa-2-4a.md`) siguiendo el orden de prioridad del protocolo. No se localizó fuente completa ni parcial utilizable: el registro del repositorio institucional de Javeriana está bloqueado por acceso técnico, el ítem de Internet Archive con el título exacto no resuelve, y todo lo demás localizado son reseñas, fichas o un fragmento editorial de extensión no verificable — nada de eso se confunde con una fuente suficiente. El caso permanece `BLOQUEADO_FUENTE`, sin lectura ni cambio de datos.

## 4. Cierre

De los dos casos de P4, uno queda resuelto e implementado y el otro queda bloqueado por fuente, sin que el bloqueo del segundo haya detenido al primero ni se haya prolongado la búsqueda más allá de lo acotado. Conforme al criterio del propio encargo, ambos resultados juntos permiten considerar P4 recorrido completamente.

### Estado final

`P4_1_DE_2_RESUELTOS`
`CASTROGOMEZHYBRIS_BLOQUEADO_FUENTE`
`P4_RECORRIDO_COMPLETAMENTE`

**DETENTE.** No se abre ninguna fase siguiente.
