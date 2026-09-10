# Apertura de control · Sublote P3-E · Etapa 2.3M

**Universo.** P3-E son 10 casos, tomados sin alteración del orden y la lista fijados en `apertura-recalibracion-p3-etapa-2-3g.md` §19: `mamalola`, `ferdinand`, `ramsaranlewis`, `araujo`, `crawfordturtlemen`, `kalefragments`, `deloughrey`, `rediker`, `globalculture`, `sangbenvolviendo`. Con P3-A, P3-B, P3-C y P3-D ya cerrados u operativamente cerrados (40/78), P3-E es el quinto de los ocho sublotes de P3.

**Método.** Inventario en una sola pasada, igual al aplicado en P3-D: existencia del id en `datos-atlas.js`, fuente completa en `Biliografia`, existencia de expediente previo, estado actual del recorrido, y anomalía técnica que impida entrar al protocolo acelerado. No se hizo lectura académica en esta fase.

| # | Caso | id en datos-atlas.js | Fuente | Expediente previo | Estado JSON | Condición |
|---|---|---|---|---|---|---|
| 1 | `mamalola` | Sí | Completa — *Mama Lola: A Vodou Priestess in Brooklyn* (McCarthy Brown), PDF (468 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 2 | `ferdinand` | Sí | **Discrepancia de título** — localizado *S'aimer la Terre* (Ferdinand, 2024) bajo el mismo autor, no *Une écologie décoloniale* (2019), el título registrado en el corpus. Ya señalado en `apertura-recalibracion-p3-etapa-2-3g.md` §20 como caso bloqueado pendiente de que Dirección Académica confirme cuál título corresponde | No | `pendiente`, sin campos residuales | BLOQUEADO_TECNICO |
| 3 | `ramsaranlewis` | Sí | Completa — *Caribbean Masala: Indian Identity in Guyana and Trinidad* (Ramsaran & Lewis), edición completa (epub) | No | `pendiente`, sin campos residuales | LISTO |
| 4 | `araujo` | Sí | **No localizada** — búsqueda por título (`Reparations for Slavery`) y por autora (`Araujo`) sin resultado en `Biliografia` | No | `pendiente`, sin campos residuales | BLOQUEADO_FUENTE |
| 5 | `crawfordturtlemen` | Sí | Completa — *The Last Turtlemen of the Caribbean* (Crawford), edición completa (epub) | No | `pendiente`, sin campos residuales | LISTO |
| 6 | `kalefragments` | Sí | Completa — *Fragments of Empire* (Kale), PDF (242 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 7 | `deloughrey` | Sí | Completa — *Allegories of the Anthropocene* (DeLoughrey), PDF (281 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 8 | `rediker` | Sí | Completa — *Barco de esclavos: una historia humana* (Rediker, trad. esp.), PDF (534 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 9 | `globalculture` | Sí | Completa — *Global Culture, Island Identity* (Olwig), PDF (218 pp.). Se verificó que corresponde exactamente al título registrado en el corpus y no a *Caribbean Journeys* ni a *Cultural Adaptation and Resistance on St. John*, otras dos obras de la misma autora presentes en `Biliografia` | No | `pendiente`, sin campos residuales | LISTO |
| 10 | `sangbenvolviendo` | Sí | Completa — *Volviendo al Caribe* (Sang Ben), PDF (513 pp.) | No | `pendiente`, sin campos residuales | LISTO |

**Verificación en una sola pasada:**
- Existencia de id: los 10 casos existen en `datos-atlas.js`.
- Expedientes previos: ninguno de los 10 tiene `lectura-*` ni `decision-academica-*` previa. P3-E parte de cero documentalmente.
- Estado JSON: los 10 casos mantienen `recorrido: null`, `recorridos_sec: []`, `arquitectura_recorrido: null`, `estado_recorrido: "pendiente"`, sin `fuente_recorrido` residual.
- Fuentes: 8 completas (LISTO), 1 no localizada (`araujo`, BLOQUEADO_FUENTE), 1 con discrepancia de título/edición ya documentada por la propia auditoría de recalibración (`ferdinand`, BLOQUEADO_TECNICO).
- No se buscó fuente nueva fuera de `Biliografia` para `araujo`, ni se intentó resolver la discrepancia de `ferdinand`, conforme a la instrucción vigente.

## Clasificación de disponibilidad

**LISTO (8):** `mamalola`, `ramsaranlewis`, `crawfordturtlemen`, `kalefragments`, `deloughrey`, `rediker`, `globalculture`, `sangbenvolviendo`.

**BLOQUEADO_FUENTE (1):** `araujo`.

**BLOQUEADO_TECNICO (1):** `ferdinand` — no es ausencia de fuente sino discrepancia de título/edición entre el corpus y lo localizado; requiere que Dirección Académica confirme cuál título corresponde antes de decidir si se lee la obra localizada o se adquiere la registrada.

**BLOQUEADO_EXPEDIENTE (0):** ninguno.

## Organización por tandas

8 casos disponibles (≥7): tandas de 4 + restantes, en el orden fijado por §19.

**Tanda 1:** `mamalola`, `ramsaranlewis`, `crawfordturtlemen`, `kalefragments`.

**Tanda 2:** `deloughrey`, `rediker`, `globalculture`, `sangbenvolviendo`.

## Estado

```
P3_E_APERTURA_COMPLETADA
8_CASOS_LISTOS_PARA_PROCESAR
1_CASO_BLOQUEADO_FUENTE (araujo)
1_CASO_BLOQUEADO_TECNICO (ferdinand)
TANDA_1_DEFINIDA
TANDA_2_DEFINIDA
```
