# Apertura de control · Sublote P3-F · Etapa 2.3N

**Universo.** P3-F son 10 casos, tomados sin alteración del orden y la lista fijados en `apertura-recalibracion-p3-etapa-2-3g.md` §19: `kloosterrealm`, `zambrana`, `archipelagicthinking`, `bahadurcoolie`, `branddoor`, `brereton_racerelationstrinidad`, `caribjourneys`, `ferrerfreedomsmirror`, `deere`, `fischer`. Con P3-A, P3-B, P3-C, P3-D y P3-E ya cerrados u operativamente cerrados (50/78), P3-F es el sexto de los ocho sublotes de P3.

**Método.** Inventario en una sola pasada, igual al aplicado en P3-E: existencia del id en `datos-atlas.js`, fuente completa en `Biliografia`, existencia de expediente previo, estado actual del recorrido, y anomalía técnica que impida entrar al protocolo acelerado. No se hizo lectura académica en esta fase.

| # | Caso | id en datos-atlas.js | Fuente | Expediente previo | Estado JSON | Condición |
|---|---|---|---|---|---|---|
| 1 | `kloosterrealm` | Sí | Completa — *Realm between Empires: The Second Dutch Atlantic, 1680-1815* (Klooster y Oostindie), PDF (348 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 2 | `zambrana` | Sí | Completa — *Colonial Debts: The Case of Puerto Rico* (Zambrana), edición completa (epub) | No | `pendiente`, sin campos residuales | LISTO |
| 3 | `archipelagicthinking` | Sí | Completa — *Contemporary Archipelagic Thinking* (Stephens y Martínez-San Miguel, eds.), edición completa (epub) | No | `pendiente`, sin campos residuales | LISTO |
| 4 | `bahadurcoolie` | Sí | Completa — *Coolie Woman: The Odyssey of Indenture* (Bahadur), PDF (313 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 5 | `branddoor` | Sí | **No localizada** — búsqueda por título (`A Map to the Door of No Return`) y por autora (`Dionne Brand`) sin resultado en `Biliografia` ni en otras ubicaciones del repositorio ya autorizadas | No | `pendiente`, sin campos residuales | BLOQUEADO_FUENTE |
| 6 | `brereton_racerelationstrinidad` | Sí | Completa — *Race Relations in Colonial Trinidad, 1870-1900* (Brereton), PDF (261 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 7 | `caribjourneys` | Sí | Completa — *Caribbean Journeys: An Ethnography of Migration and Home in Three Family Networks* (Olwig), PDF (331 pp.). Se verificó que corresponde exactamente al título registrado en el corpus y no a *Cultural Adaptation and Resistance on St. John* ni a *Global Culture, Island Identity* (esta última, ya leída como `globalculture` en P3-E), otras dos obras de la misma autora presentes en `Biliografia` | No | `pendiente`, sin campos residuales | LISTO |
| 8 | `ferrerfreedomsmirror` | Sí | Completa — *Freedom's Mirror: Cuba and Haiti in the Age of Revolution* (Ferrer), PDF (402 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 9 | `deere` | Sí | Completa — *The Invention of Order: On the Coloniality of Space* (Deere), PDF (161 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 10 | `fischer` | Sí | Completa — *Modernity Disavowed: Haiti and the Cultures of Slavery in the Age of Revolution* (Fischer), PDF (375 pp.) | No | `pendiente`, sin campos residuales | LISTO |

**Verificación en una sola pasada:**
- Existencia de id: los 10 casos existen en `datos-atlas.js`.
- Expedientes previos: ninguno de los 10 tiene `lectura-*` ni `decision-academica-*` previa. P3-F parte de cero documentalmente.
- Estado JSON: los 10 casos mantienen `recorrido: null`, `recorridos_sec: []`, `arquitectura_recorrido: null`, `estado_recorrido: "pendiente"`, sin `fuente_recorrido` residual.
- Fuentes: 9 completas (LISTO), 1 no localizada (`branddoor`, BLOQUEADO_FUENTE).
- No se buscó fuente nueva fuera de `Biliografia` y del resto del repositorio ya autorizado para `branddoor`; no se hizo búsqueda web.

## Clasificación de disponibilidad

**LISTO (9):** `kloosterrealm`, `zambrana`, `archipelagicthinking`, `bahadurcoolie`, `brereton_racerelationstrinidad`, `caribjourneys`, `ferrerfreedomsmirror`, `deere`, `fischer`.

**BLOQUEADO_FUENTE (1):** `branddoor`.

**BLOQUEADO_TECNICO (0):** ninguno.

**BLOQUEADO_EXPEDIENTE (0):** ninguno.

`branddoor` queda acumulado, sin detener el sublote, para una futura campaña de recuperación bibliográfica conjunta con `araujo` (P3-E) y los demás casos bloqueados de P3-B y P3-D.

## Organización por tandas

9 casos disponibles (entre 8 y 10): tandas de 4 + 4 + restantes, en el orden fijado por §19, saltando `branddoor`.

- **Tanda 1 (4):** `kloosterrealm`, `zambrana`, `archipelagicthinking`, `bahadurcoolie`.
- **Tanda 2 (4):** `brereton_racerelationstrinidad`, `caribjourneys`, `ferrerfreedomsmirror`, `deere`.
- **Tanda 3 (1, restante):** `fischer`.

```
APERTURA_DE_CONTROL_COMPLETA
DIEZ_IDS_VERIFICADOS
NUEVE_LISTOS
UN_BLOQUEADO_FUENTE (branddoor)
CERO_BLOQUEADO_TECNICO
CERO_BLOQUEADO_EXPEDIENTE
TANDAS_ORGANIZADAS (4+4+1)
```
