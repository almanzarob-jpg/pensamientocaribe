# Apertura de control · Sublote P3-D · Etapa 2.3L

**Universo.** P3-D son 10 casos, tomados sin alteración del orden y la lista fijados en `apertura-recalibracion-p3-etapa-2-3g.md` §19: `austinfearblack`, `munrohaitirising`, `becklessavingsouls`, `zips_nannysasafo`, `martinezsanmiguel`, `reysinningcristorey`, `lebroncimarronaje`, `james_bannerethiopia`, `bollandbelize`, `zapataarbol`. Con P3-A, P3-B y P3-C ya cerrados, P3-D es el cuarto de los ocho sublotes de P3 (30/78 casos procesados hasta ahora; P3-D los eleva a 40/78).

**Instrucción de apertura.** Dirección Académica cerró P3-C indicando expresamente, en cada acta de cierre anterior, que abrir el sublote siguiente requiere una instrucción independiente. La instrucción recibida para abrir este sublote fue la orden de continuar el trabajo inmediatamente después de recibido el cierre de P3-C, sin más especificación — coherente con el hecho de que el orden y la composición de P3-D ya estaban fijados de antemano en la auditoría de recalibración (§19 de ese documento) y no requieren una decisión de alcance nueva, solo la autorización de empezar. A diferencia de P3-A y P3-B, que tuvieron ficha individual de composición razonada (§17 y §18 respectivamente), P3-D quedó fijado en §19 solo como lista de ids con corriente tentativa y territorio, sin disponibilidad bibliográfica verificada — esa verificación es precisamente el objeto de esta acta, tal como el propio §19 anticipa: "eso corresponde a la apertura de cada sublote cuando llegue su turno".

**Método.** Inventario en una sola pasada, igual al aplicado en la apertura de P3-B: existencia de fuente en `Biliografia` (Google Drive local), existencia de expediente previo (lectura o decisión ya redactada), estado actual en `datos-atlas.json`/`.js`, y anomalías detectables sin interpretación académica de la obra. No se realizó ninguna búsqueda de fuente fuera de `Biliografia`, conforme a la instrucción vigente de no iniciar búsquedas nuevas sin pedido expreso.

| # | Caso | Fuente completa | Expediente previo | Estado JSON | Recorrido actual | Anomalía inicial | Condición |
|---|---|---|---|---|---|---|---|
| 1 | `austinfearblack` | Sí — *Fear of a Black Nation: Race, Sex, and Security in Sixties Montreal* (Austin, 2013), edición completa (epub) | No | Sincronizado, `pendiente` | `null` | Ninguna | LISTO |
| 2 | `munrohaitirising` | Sí — *Haiti Rising: Haitian History, Culture and the Earthquake of 2010* (Munro, ed., 2010), PDF completo (212 pp.) | No | Sincronizado, `pendiente` | `null` | Ninguna | LISTO |
| 3 | `becklessavingsouls` | Sí — *Saving Souls: The Struggle to End the Transatlantic Trade in Africans* (Beckles & Shepherd, eds., 2013), PDF completo (163 pp.) | No | Sincronizado, `pendiente` | `null` | Ninguna | LISTO |
| 4 | `zips_nannysasafo` | Sí — *Nanny's Asafo Warriors: The Jamaican Maroons' African Experience* (Zips, 2011), edición completa (epub) | No | Sincronizado, `pendiente` | `null` | Ninguna | LISTO |
| 5 | `martinezsanmiguel` | Sí — *Coloniality of Diasporas: Rethinking Intra-Colonial Migrations in a Pan Caribbean Context* (Martínez-San Miguel, 2014), PDF completo (284 pp.) | No | Sincronizado, `pendiente` | `null` | Ninguna | LISTO |
| 6 | `reysinningcristorey` | **No localizada** — búsqueda por título (`Cristo Rey`) y por autor (`Rey Sinning`) sin resultado en `Biliografia` ni en el resto de `~/Pagina` | No | Sincronizado, `pendiente` | `null` | Bloqueo bibliográfico | BLOQUEADO |
| 7 | `lebroncimarronaje` | **No localizada** — búsqueda por título (`Filosofía del cimarronaje`) y por autor (`Lebrón`) sin resultado en `Biliografia` ni en el resto de `~/Pagina`; el único resultado que coincide parcialmente con "Lebrón" es *Aftershocks of Disaster* de Marisol LeBrón, ya clasificado en P3-A y sin relación con Pedro Lebrón Ortiz | No | Sincronizado, `pendiente` | `null` | Bloqueo bibliográfico | BLOQUEADO |
| 8 | `james_bannerethiopia` | Sí — *Holding Aloft the Banner of Ethiopia: Caribbean Radicalism in Early Twentieth-Century America* (James, 2020), edición completa (epub) | No | Sincronizado, `pendiente` | `null` | Ninguna | LISTO |
| 9 | `bollandbelize` | Sí — *The Formation of a Colonial Society: Belize, From Conquest to Crown Colony* (Bolland), PDF completo (264 pp.) | No | Sincronizado, `pendiente` | `null` | Ninguna | LISTO |
| 10 | `zapataarbol` | **No localizada** — búsqueda por título (`El árbol brujo de la libertad`) y por autor (`Zapata Olivella`) sin resultado en `Biliografia` ni en el resto de `~/Pagina` | No | Sincronizado, `pendiente` | `null` | Bloqueo bibliográfico | BLOQUEADO |

**Verificación en una sola pasada:**
- Expedientes previos: ninguno de los 10 casos tiene `lectura-*` ni `decision-academica-*` previa. P3-D parte de cero documentalmente, igual que P3-B y P3-C en su apertura.
- Fuentes: 7 completas, 3 no localizadas (bloqueadas). A diferencia de P3-B, ninguna fuente aparece parcial: cada caso está o completo o ausente.
- Estado JSON: los 10 casos verificados uno por uno en `datos-atlas.js` mantienen `recorrido: null`, `recorridos_sec: []`, `arquitectura_recorrido: null`, `estado_recorrido: "pendiente"`, sin `fuente_recorrido` — ninguno arrastra un valor residual de generación automática, a diferencia de lo que ocurría con `mintz` en la apertura de P3-B.
- Casos implementados sin decisión: ninguno.
- Duplicaciones sospechosas de arquitectura: no aplica todavía — ninguno tiene arquitectura implementada.

**No se hizo interpretación académica de las obras en esta fase.** El inventario se limitó a confirmar existencia de archivo, formato y extensión declarada por el propio archivo (número de páginas cuando el lector de PDF lo informa); no se abrió el contenido de ninguna de las diez obras.

## Orden interno propuesto

Los siete casos con fuente completa (`austinfearblack`, `munrohaitirising`, `becklessavingsouls`, `zips_nannysasafo`, `martinezsanmiguel`, `james_bannerethiopia`, `bollandbelize`) quedan listos para el protocolo acelerado de evaluación por semáforo, en ese orden — el mismo orden en que aparecen en la lista fijada por §19, saltando los tres bloqueados. Los tres bloqueados (`reysinningcristorey`, `lebroncimarronaje`, `zapataarbol`) se acumulan para gestión de acceso separada, sin gastar tiempo de lectura en ellos mientras la fuente no aparezca.

## Gestión de acceso acumulada

Se acumulan para tratamiento separado, sin buscar fuente nueva sin pedido expreso: `reysinningcristorey`, `lebroncimarronaje` y `zapataarbol`. Los tres comparten el mismo patrón — autores hispanófonos o de circulación editorial reducida (Rey Sinning en Santa Marta, Lebrón Ortiz en Puerto Rico, Zapata Olivella en Cartagena) cuyas obras no circulan por los canales de descarga que nutren el grueso de `Biliografia` (mayoritariamente anglófono, vía Anna's Archive). El mismo patrón ya se observó de forma puntual en P3-B (`zonabananera`, localizada solo por ruta alterna en `Proyectos /Geografias negras/`, no en `Biliografia`) y sugiere que estos tres casos podrían tener fuente en otra carpeta del computador de Dirección Académica, en una biblioteca física, o requerir gestión de acceso editorial — no que la fuente no exista.

## Estado

`P3_D_APERTURA_COMPLETADA`
`7_CASOS_LISTOS_PARA_PROCESAR` (`austinfearblack`, `munrohaitirising`, `becklessavingsouls`, `zips_nannysasafo`, `martinezsanmiguel`, `james_bannerethiopia`, `bollandbelize`)
`3_CASOS_BLOQUEADOS` (`reysinningcristorey`, `lebroncimarronaje`, `zapataarbol`)

Total: 10. Ningún caso resuelto todavía — a diferencia de la apertura de P3-B, esta acta no adelanta ninguna lectura.

**Pendiente de autorización.** Antes de iniciar la lectura de los siete casos listos, se deja esta acta a la vista de Dirección Académica: confirma el universo y el diagnóstico de fuentes, pero la lectura misma de los siete casos listos no ha comenzado.
