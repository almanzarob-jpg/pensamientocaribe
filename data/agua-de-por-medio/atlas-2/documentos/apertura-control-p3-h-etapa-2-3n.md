# Apertura de control · Sublote P3-H · Etapa 2.3N

**Universo.** P3-H son 8 casos, tomados sin alteración del orden y la lista fijados en `apertura-recalibracion-p3-etapa-2-3g.md` §19: `lizcanocarnaval`, `johnsonbelize`, `prestolmasacre`, `mcneillmosquito`, `puriradical`, `meniketinevis`, `castorspiritual`, `mitchellalibi`. Con P3-A a P3-G ya cerrados u operativamente cerrados (68/78), P3-H es el octavo y último sublote de P3.

**Método.** Inventario en una sola pasada, igual al aplicado en P3-F y P3-G: existencia del id en `datos-atlas.js`, fuente completa en `Biliografia`, existencia de expediente previo, estado actual del recorrido, y anomalía técnica que impida entrar al protocolo acelerado. No se hizo lectura académica en esta fase.

| # | Caso | id en datos-atlas.js | Fuente | Expediente previo | Estado JSON | Condición |
|---|---|---|---|---|---|---|
| 1 | `lizcanocarnaval` | Sí | Completa — *Leyendo el carnaval: miradas desde Barranquilla, Bahía y Barcelona* (Lizcano Angarita y González Cueto, comps.), PDF (158 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 2 | `johnsonbelize` | Sí | Completa — *Becoming Creole: Nature and Race in Belize* (Johnson), PDF (248 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 3 | `prestolmasacre` | Sí | Completa — *You Can Cross the Massacre on Foot* (Prestol Castillo), PDF (177 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 4 | `mcneillmosquito` | Sí | Completa — *Mosquito Empires: Ecology and War in the Greater Caribbean, 1620-1914* (McNeill), PDF (391 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 5 | `puriradical` | Sí | Completa — *The Legacies of Caribbean Radical Politics* (Puri, ed.), edición completa (epub, 44 entradas) | No | `pendiente`, sin campos residuales | LISTO |
| 6 | `meniketinevis` | Sí | Completa — *Sugar Cane Capitalism and Environmental Transformation: An Archaeology of Colonial Nevis, West Indies* (Meniketti), PDF (277 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 7 | `castorspiritual` | Sí | Completa — *Spiritual Citizenship: Transnational Pathways from Black Power to Ifá in Trinidad* (Castor), PDF (268 pp.) | No | `pendiente`, sin campos residuales | LISTO |
| 8 | `mitchellalibi` | Sí | Completa — *The Alibi of Capital: How We Broke the Earth to Steal the Future on the Promise of a Better Tomorrow* (Mitchell), edición completa (epub, 31 entradas) | No | `pendiente`, sin campos residuales | LISTO |

**Verificación en una sola pasada:**
- Existencia de id: los 8 casos existen en `datos-atlas.js`.
- Expedientes previos: ninguno de los 8 tiene `lectura-*` ni `decision-academica-*` previa. P3-H parte de cero documentalmente.
- Estado JSON: los 8 casos mantienen `recorrido: null`, `recorridos_sec: []`, `arquitectura_recorrido: null`, `estado_recorrido: "pendiente"`, sin `fuente_recorrido` residual.
- Fuentes: 8 completas (LISTO), 0 bloqueadas.
- No se buscó fuente nueva fuera de `Biliografia`; no se hizo búsqueda web.

## Clasificación de disponibilidad

**LISTO (8):** `lizcanocarnaval`, `johnsonbelize`, `prestolmasacre`, `mcneillmosquito`, `puriradical`, `meniketinevis`, `castorspiritual`, `mitchellalibi`.

**BLOQUEADO_FUENTE (0):** ninguno.

**BLOQUEADO_TECNICO (0):** ninguno.

**BLOQUEADO_EXPEDIENTE (0):** ninguno.

## Organización por tandas

8 casos disponibles: tandas de 4 + 4, en el orden fijado por §19.

- **Tanda 1 (4):** `lizcanocarnaval`, `johnsonbelize`, `prestolmasacre`, `mcneillmosquito`.
- **Tanda 2 (4):** `puriradical`, `meniketinevis`, `castorspiritual`, `mitchellalibi`.

```
APERTURA_DE_CONTROL_COMPLETA
OCHO_IDS_VERIFICADOS
OCHO_LISTOS
CERO_BLOQUEADO_FUENTE
CERO_BLOQUEADO_TECNICO
CERO_BLOQUEADO_EXPEDIENTE
TANDAS_ORGANIZADAS (4+4)
```
