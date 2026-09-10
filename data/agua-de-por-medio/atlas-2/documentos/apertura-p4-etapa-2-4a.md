# Apertura de P4 — Atlas 2.0, etapa 2.4A

**Auditoría de universo, no de contenido.** Este documento confirma el universo de P4, reconstruye el estado real de cada uno de sus dos casos y propone un protocolo de lectura para cada uno. No clasifica ninguna obra, no modifica `datos-atlas.json` ni ningún otro dato del corpus, y no lee todavía ninguno de los dos textos completos.

---

## 1. Universo P4

`apertura-recalibracion-p3-etapa-2-3g.md` §24 dejó constancia de que P4 existe como hallazgo, no como encargo: la cola de lectura académica activa (`cola-lectura-pendiente-atlas-2.md` §2, filas finales) registra dos casos bajo esa prioridad, y ningún documento de apertura anterior a esa auditoría los menciona.

| id | Autor | Obra | Año | `f` actual | `estado_recorrido` (corpus) | Estado en la cola |
|---|---|---|---|---|---|---|
| `castrogomezhybris` | Santiago Castro-Gómez | *La hybris del punto cero: ciencia, raza e ilustración en la Nueva Granada (1750-1816)* | 2005 | `colonialidad` | `pendiente` | `LEIDA_SIN_DECISION` |
| `hoeftesuriname` | Rosemarijn Hoefte | *Suriname in the Long Twentieth Century: Domination, Contestation, Globalization* | 2014 | `postplantacion`, `soberanias` | `pendiente` | `PENDIENTE_NO_LEIDA` |

Ambos nodos, verificados contra `datos-atlas.json`, tienen `recorrido: null`, `recorridos_sec: []` y `arquitectura_recorrido: null`. Ninguno ha entrado nunca al sistema de recorrido C1–C10.

---

## 2. `castrogomezhybris`: qué significa realmente `LEIDA_SIN_DECISION`

La etiqueta de la cola sugiere que el libro fue leído y que solo falta decidir su corriente. La reconstrucción documental no sostiene esa lectura del rótulo.

Lo que efectivamente ocurrió: durante el expediente de evidencia de C8 (`expediente-evidencia-c8.md` §12), se hizo una búsqueda léxica de "criollo/criolla/criollos/criollas/criollización" sobre el campo `ap` (la síntesis interna del corpus, no el texto de la obra) de todas las entradas del corpus. `castrogomezhybris` apareció entre los ocho resultados. Su `ap` — "la ciencia criolla se articula con la limpieza de sangre para producir blancura" — se leyó como señal ambigua: puede remitir a la creolización de C8 o ser una coincidencia léxica ajena a ese concepto, y el expediente lo dice sin rodeos: "no se clasifica ni se descarta aquí". El dictamen académico de C8 (`dictamen-academico-c8.md` §9, §13) ratificó exactamente esa indeterminación como asunto abierto.

Es decir: se leyó y evaluó una frase de metadato interno, no el libro. `matriz-clasificacion-fase-5a.csv` lo confirma de forma independiente — la misma fila que documenta `estado_recorrido: pendiente` describe el caso como una obra que "figura en la cola de lectura de Atlas 2.0, sin abrir". Las dos fuentes internas coinciden: el libro nunca se ha abierto. `LEIDA_SIN_DECISION` no es, entonces, una anomalía de sincronización entre la cola y el corpus — es un rótulo heredado de la etapa léxica de C8 que describe la lectura de un metadato, y que en el vocabulario de estados de recorrido del corpus corresponde simplemente a `pendiente`, sin discrepancia real que resolver.

**Fuente local**: se buscó *La hybris del punto cero* en la carpeta de bibliografía por título, autor y variantes de archivo — no se encontró ninguna copia. El caso no tiene, hoy, fuente disponible para una lectura que vaya más allá del metadato ya evaluado.

---

## 3. `hoeftesuriname`: estado real

Este caso no tiene ninguna lectura previa, ni siquiera a nivel de metadato dirigido a su clasificación. Aparece citado tres veces en la documentación de C4 (`dictamen-academico-c4.md` §10, `ficha-decision-c4.md` Decisión 8, `expediente-evidencia-c4.md` §D) exclusivamente como ejemplo de material neerlandófono identificado y no leído — nunca como un caso con lectura o candidatura. El propio dictamen de C4 es explícito en que esto "no declara un vacío neerlandófono comprobado, sino material identificado y sin leer" (§10), y la ficha de decisión 8 llega a la misma conclusión: "ninguna ha sido leída todavía para C4 específicamente".

Las etiquetas heredadas `f: [postplantacion, soberanias]` proceden del sistema de fenómenos heredado, no de una lectura de recorrido C1–C10 — no prejuzgan que C4 sea la corriente correcta, solo indican por qué la obra entró al universo pendiente de C4 en primer lugar.

**Fuente local**: localizada en la carpeta de bibliografía — *Suriname in the Long Twentieth Century: Domination, Contestation, Globalization*, Rosemarijn Hoefte, Palgrave Macmillan US / Springer Nature, 2014 (edición idéntica a la registrada en el corpus, mismo año). El caso sí tiene fuente disponible para una lectura completa.

---

## 4. Protocolo propuesto

Los dos casos no están en la misma situación y no deberían tratarse con el mismo paso siguiente:

- **`hoeftesuriname`**: tiene fuente local disponible y ninguna lectura previa que reutilizar. El paso siguiente natural es una lectura dirigida a la pregunta que la ficha de decisión 8 dejó abierta — ¿corresponde a C4? — con atención también a si la evidencia sostiene mejor C4 principal, una arquitectura distinta, o ninguna de las corrientes vigentes, sin asumir de entrada que C4 es el destino.

- **`castrogomezhybris`**: no tiene fuente local. Antes de cualquier lectura, el paso siguiente sería una búsqueda bibliográfica de recuperación equivalente a la que ya se hizo para los casos bloqueados de P3 — no una lectura, porque no hay qué leer todavía.

Ninguno de los dos pasos se ejecuta en este documento.

---

## 5. Lo que este documento no decide

No se abre ninguna lectura, no se busca ninguna fuente y no se modifica ningún dato del corpus. La pregunta de si P4 debía abrirse ya la resolvió la instrucción de continuar con P4; este documento resuelve únicamente el universo y el diagnóstico de partida. Falta que Dirección Académica autorice, específicamente, cuál de los dos pasos del §4 ejecutar primero — o si ambos proceden en paralelo.

### Estado final

`P4_UNIVERSO_CONFIRMADO_2_CASOS`
`CASTROGOMEZHYBRIS_ESTADO_REAL_PENDIENTE_SIN_FUENTE_LOCAL`
`HOEFTESURINAME_ESTADO_REAL_PENDIENTE_CON_FUENTE_LOCAL`
`NINGUN_DATO_DE_CORPUS_MODIFICADO`

**DETENTE.**
