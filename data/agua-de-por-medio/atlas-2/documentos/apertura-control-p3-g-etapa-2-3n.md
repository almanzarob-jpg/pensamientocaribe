# Apertura de control · Sublote P3-G · Etapa 2.3N

**Universo.** P3-G son 10 casos, tomados sin alteración del orden y la lista fijados en `apertura-recalibracion-p3-etapa-2-3g.md` §19: `grosfoguelcolonial`, `goldbergabolition`, `looklaichinese`, `olsencartagena`, `russwurm`, `hallafricanslouisiana`, `scher`, `headleyreparaciones`, `kahnislands`, `pardomosquerahoffmann`. Con P3-A, P3-B, P3-C, P3-D, P3-E y P3-F ya cerrados u operativamente cerrados (59/78), P3-G es el séptimo de los ocho sublotes de P3.

**Método.** Inventario en una sola pasada, igual al aplicado en P3-E y P3-F: existencia del id en `datos-atlas.js`, fuente completa en `Biliografia`, existencia de expediente previo, estado actual del recorrido, y anomalía técnica que impida entrar al protocolo acelerado. No se hizo lectura académica en esta fase.

| # | Caso | id en datos-atlas.js | Fuente | Expediente previo | Estado JSON | Condición |
|---|---|---|---|---|---|---|
| 1 | `grosfoguelcolonial` | Sí | Completa — *Colonial Subjects: Puerto Ricans in a Global Perspective* (Grosfoguel), PDF (286 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 2 | `goldbergabolition` | Sí | Completa — *Abolition Time: Grammars of Law, Poetics of Justice* (Goldberg), PDF (286 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 3 | `looklaichinese` | Sí | Completa — *The Chinese in the West Indies, 1806-1995: A Documentary History* (Look Lai), PDF (373 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 4 | `olsencartagena` | Sí | Completa — *Slavery and Salvation in Colonial Cartagena de Indias* (Olsen), PDF (214 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 5 | `russwurm` | Sí | Completa — *The Struggles of John Brown Russwurm: The Life and Writings of a Pan-Africanist Pioneer, 1799-1851* (Winston James), PDF (320 pp.). Se verificó que corresponde al título registrado en el corpus y no a *Holding Aloft the Banner of Ethiopia* (mismo autor, también presente en `Biliografia`) | No | `pendiente`, sin campos residuales | LISTO |
| 6 | `hallafricanslouisiana` | Sí | Completa — *Africans in Colonial Louisiana: The Development of Afro-Creole Culture in the Eighteenth Century* (Gwendolyn Midlo Hall), edición completa (epub) | No | `pendiente`, sin campos residuales | LISTO |
| 7 | `scher` | Sí | Completa — *Carnival and the Formation of a Caribbean Transnation* (Philip W. Scher), PDF (248 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 8 | `headleyreparaciones` | Sí | Completa — *A Philosophical Investigation into the Possibility/Impossibility of Reparations for Caribbean Slavery* (Headley), PDF (18 pp.). Es un artículo, no un libro, tal como registra la anotación curatorial del corpus | No | `pendiente`, sin campos residuales | LISTO |
| 9 | `kahnislands` | Sí | Completa — *Islands of Sovereignty: Haitian Migration and the Borders of Empire* (Jeffrey S. Kahn), PDF (373 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 10 | `pardomosquerahoffmann` | Sí | Completa — *Afrodescendientes en las Américas: trayectorias sociales e identitarias* (Pardo, Mosquera y Hoffmann, eds.), PDF (615 pp.) | No | `pendiente`, sin campos residuales | LISTO |

**Verificación en una sola pasada:**
- Existencia de id: los 10 casos existen en `datos-atlas.js`.
- Expedientes previos: ninguno de los 10 tiene `lectura-*` ni `decision-academica-*` previa. P3-G parte de cero documentalmente.
- Estado JSON: los 10 casos mantienen `recorrido: null`, `recorridos_sec: []`, `arquitectura_recorrido: null`, `estado_recorrido: "pendiente"`, sin `fuente_recorrido` residual.
- Fuentes: 10 completas (LISTO). Ninguna bloqueada por fuente en esta apertura.
- Anomalía técnica: ninguna detectada; el corpus está en sincronía y validado 0 errores tras el cierre de P3-F (commit `f27b803`).

## Clasificación de disponibilidad

**LISTO (10):** `grosfoguelcolonial`, `goldbergabolition`, `looklaichinese`, `olsencartagena`, `russwurm`, `hallafricanslouisiana`, `scher`, `headleyreparaciones`, `kahnislands`, `pardomosquerahoffmann`.

**BLOQUEADO_FUENTE (0):** ninguno.

**BLOQUEADO_TECNICO (0):** ninguno.

**BLOQUEADO_EXPEDIENTE (0):** ninguno.

## Organización por tandas

10 casos disponibles: tandas de 4 + 4 + restantes, en el orden fijado por §19.

- **Tanda 1 (4):** `grosfoguelcolonial`, `goldbergabolition`, `looklaichinese`, `olsencartagena`.
- **Tanda 2 (4):** `russwurm`, `hallafricanslouisiana`, `scher`, `headleyreparaciones`.
- **Tanda 3 (2, restante):** `kahnislands`, `pardomosquerahoffmann`.

```
APERTURA_DE_CONTROL_COMPLETA
DIEZ_IDS_VERIFICADOS
DIEZ_LISTOS
CERO_BLOQUEADO_FUENTE
CERO_BLOQUEADO_TECNICO
CERO_BLOQUEADO_EXPEDIENTE
TANDAS_ORGANIZADAS (4+4+2)
```
