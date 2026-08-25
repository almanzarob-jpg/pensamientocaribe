# DECISIÓN NORMATIVA — ATLAS 2.0

## Contrato de recorridos, arquitecturas de clasificación y dimensión territorial

**Fase:** Carril A · 5A-D
**Fecha:** 25 de agosto de 2026
**Instancia que decide:** Dirección Académica de Pensamiento Caribe
**Rama de referencia:** `feat/atlas-2-etapa-1-integrada`
**Estado de partida:** `CARRIL_A_FASE_5A_CERRADA_Y_APROBADA`

Este documento tiene naturaleza académica y normativa. No es una instrucción de frontend, no es una instrucción de sincronización y no autoriza ninguna modificación del corpus productivo. Formaliza decisiones que ya existían dispersas en el proceso y resuelve las que la auditoría de Fase 5A dejó identificadas como bloqueantes.

Rige aquí un principio que ordena todo lo demás: **la estructura técnica se adapta a las decisiones académicas, y no al revés**. Queda prohibido forzar una obra hacia un recorrido principal, hacia una secundaria o hacia una jerarquía cuando la decisión académica existente establezca que esa jerarquía no puede sostenerse.

---

## 1. Antecedentes

La auditoría `auditoria-academica-fase-5a.md` estableció el estado real de la clasificación: 232 obras en el corpus, 80 con decisión académica confirmada, 84 pendientes y 69 sin evaluar, más una entrada fuera del corpus. De las 80 confirmadas, 74 tienen recorrido principal explícito y seis están confirmadas mediante una arquitectura que no admite principal.

Esa auditoría cerró con la recomendación `FASE_5B_AUTORIZABLE_CON_RESERVAS` y con dos reservas normativas que ninguna instancia técnica podía resolver: la figura `SINTESIS_MULTICORRIENTE` seguía en estado `LISTO_PARA_DECISION_NORMATIVA` mientras dos decisiones de P2 ya la aplicaban como resultado, y la representación técnica de `FRONTERA_CONSTITUTIVA` había quedado expresamente sin definir por los propios dictámenes. Este documento resuelve ambas.

---

## 2. Fuentes revisadas

- `data/agua-de-por-medio/atlas-2/documentos/auditoria-academica-fase-5a.md`
- `data/agua-de-por-medio/atlas-2/documentos/matriz-clasificacion-fase-5a.csv` (233 filas)
- `data/agua-de-por-medio/atlas-2/lotes/a01-generado.json`, `a02-generado.json`, `s01-generado.json`
- `data/agua-de-por-medio/atlas-2/piloto-generado.json`
- `data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json`
- `data/agua-de-por-medio/atlas-2/documentos/esquema-datos-propuesto.json`
- Dictámenes por corriente `dictamen-academico-c1.md` … `-c10.md`
- Dictámenes de bloque P1 (1 a 4) y decisiones académicas por obra de P1 y P2
- `propuesta-normativa-sintesis-multicorriente-etapa-2-3.md`, `marco-academico-consolidado-atlas-2.md`, `matriz-fronteras-c1-c10.md`

Todas las cifras de este documento proceden del recuento reproducible sobre la matriz de Fase 5A. Ninguna procede de inferencia sobre título, autor, territorio, disciplina o tema.

---

## 3. Fe de erratas — corrección cuantitativa de la Fase 5A

### Enunciado corregido

Donde la auditoría de Fase 5A dice:

> «63 de las 80 obras confirmadas declaran al menos un recorrido secundario; 19 declaran dos.»

debe entenderse y documentarse:

> **63 de las 80 obras confirmadas declaran al menos un recorrido secundario: 40 declaran uno y 23 declaran dos.**

### Recuento verificado

| obras confirmadas | nº de recorridos secundarios |
|---|---|
| 17 | ninguno |
| **40** | **uno** |
| **23** | **dos** |
| 80 | total |

### Origen del error

La cifra 19 no era una cifra inventada ni un error de suma: era el **subtotal de los lotes**, presentado por descuido como si fuera el total del corpus confirmado. El desglose lo demuestra:

| procedencia | confirmadas | 0 sec. | 1 sec. | 2 sec. |
|---|---|---|---|---|
| lotes (`a01`, `a02`, `s01`, `piloto`) | 54 | 6 | 29 | **19** |
| decisiones documentales (P1 y P2) | 26 | 11 | 11 | **4** |
| **total** | **80** | **17** | **40** | **23** |

19 + 4 = 23. El error consistió en detener el recuento en la capa de lote, que es la más homogénea y la que se auditó primero, sin sumar las cuatro obras cuya segunda secundaria proviene de decisión documental: `andersonblackindigenous`, `felicianosantos`, `cosgrovegarifuna` y `schwartz_seaofstorms`.

### Efectos de esta corrección

Ninguna clasificación cambia. Ninguna fila de la matriz se modifica. Es exclusivamente una corrección de recuento, y se registra por esta fe de erratas, **sin reescribir el documento histórico de la auditoría**, que conserva su hash y su redacción original conforme a la regla de conservación del pasado documental.

### Precisión adicional que debe conservarse

De las 23 obras con dos recorridos secundarios, **22 tienen además recorrido principal y una no lo tiene**: `schwartz_seaofstorms`, que es frontera constitutiva C6/C7 y conserva C2 y C4 como secundarias reconocidas por su propia decisión académica. Por tanto el reparto de las 74 obras con principal es 12 sin secundaria, 40 con una y 22 con dos. Esta precisión importa porque el máximo de dos secundarias del caso ordinario y la coexistencia de secundarias con una arquitectura especial son dos reglas distintas, y confundirlas produciría un recuento erróneo en la migración.

---

## 4. Decisión normativa 1 — `FRONTERA_CONSTITUTIVA`

### SE APRUEBA

`FRONTERA_CONSTITUTIVA` queda aprobada como **arquitectura académica válida de clasificación de una obra** en Atlas 2.0.

### Definición

Existe una frontera constitutiva cuando **dos recorridos son conjuntamente indispensables para reconstruir el argumento central de una obra y no existe fundamento académico suficiente para establecer entre ellos una relación de principal y secundaria sin producir una jerarquía falsa**.

### Lo que no significa

No significa indecisión, clasificación incompleta, falta de lectura, empate provisional, doble candidatura ni dificultad del investigador para decidir. Es una **decisión positiva sobre la arquitectura de la obra**: afirma algo sobre el texto, no sobre el estado del trabajo de quien lo clasifica.

### Reglas

1. Es estrictamente bilateral.
2. Contiene exactamente dos recorridos.
3. No tiene recorrido principal.
4. No tiene recorrido secundario entre esos dos.
5. Puede coexistir con recorridos secundarios adicionales únicamente cuando una decisión académica expresa así lo establezca.
6. Debe estar respaldada por un documento académico identificable.
7. No puede inferirse automáticamente por coexistencia temática.
8. No puede generarse mediante reglas léxicas.
9. **No equivale a `conflicto_clasificacion`.**
10. **No equivale a `pendiente`.**

---

## 5. Casos aprobados como frontera constitutiva

| obra | recorridos | secundarias adicionales | documento que la sustenta |
|---|---|---|---|
| `rifkinfictions` | C1 / C3 | ninguna | `dictamen-academico-bloque-1-etapa-2-3.md` |
| `pricefirst` | C3 / C9 | ninguna | `dictamen-academico-bloque-2-etapa-2-3.md` |
| `whiteheadtiger` | C1 / C7 | ninguna | `decision-academica-whiteheadtiger-p2-etapa-2-3f.md` |
| `schwartz_seaofstorms` | C6 / C7 | **C2 y C4** | `decision-academica-schwartz_seaofstorms-p2-etapa-2-3f.md` |

En `schwartz_seaofstorms` las dimensiones secundarias C2 y C4 se conservan tal como su decisión académica las reconoce. No se reinterpretan durante la sincronización, no se promueven a estructurantes y no se descartan por el hecho de que la obra carezca de principal.

---

## 6. Decisión normativa 2 — `SINTESIS_MULTICORRIENTE`

### SE APRUEBA

`SINTESIS_MULTICORRIENTE` queda aprobada como **arquitectura académica excepcional de obra**.

Con esta aprobación se levanta el estado `LISTO_PARA_DECISION_NORMATIVA` en que la figura permanecía desde su redacción, y queda regularizado su uso en las dos decisiones de P2 que ya la habían empleado como resultado.

### Definición

Existe una síntesis multicorriente cuando **tres o más recorridos participan de manera estructurante e irreductible en la arquitectura argumental de una obra y establecer un recorrido principal produciría una simplificación sustantiva de su operación intelectual**.

Es una arquitectura **de obra**. No es una nueva clase de frontera.

### Lo que no significa

No significa obra interdisciplinaria, obra compleja, obra que menciona muchos temas, tres candidaturas, ausencia de criterio, dificultad clasificatoria, ni la suma de un principal y dos secundarias. Debe existir decisión académica explícita.

### Regla fundamental

Queda expresamente prohibido crear `FRONTERA_CONSTITUTIVA_TRIPLE` o cualquier denominación equivalente. **La frontera constitutiva sigue siendo bilateral.** Cuando tres recorridos sean irreductiblemente estructurantes, la figura correcta es `SINTESIS_MULTICORRIENTE`.

---

## 7. Casos aprobados como síntesis multicorriente

| obra | recorridos estructurantes | documento que la sustenta |
|---|---|---|
| `perezmorales` | C3 / C5 / C7 | `dictamen-academico-bloque-4-etapa-2-3.md` |
| `pinedashipwrecked` | C1 / C4 / C7 | `decision-academica-pinedashipwrecked-p2-etapa-2-3f.md` |

Ambas se sincronizan como arquitectura no jerárquica. No se les impone recorrido principal ni se reordenan sus recorridos por ningún criterio automático: el orden de los estructurantes es de registro, no de rango.

---

## 8. Decisión normativa 3 — campo `arquitectura_recorrido`

### SE APRUEBA

La incorporación del campo `arquitectura_recorrido` al contrato de datos de Atlas 2.0.

### Forma del campo

**Caso ordinario** — existe un recorrido principal y cero, uno o dos secundarios:

```json
"arquitectura_recorrido": null
```

**Frontera constitutiva:**

```json
"arquitectura_recorrido": { "tipo": "frontera_constitutiva", "recorridos": ["c1", "c7"] }
```

**Síntesis multicorriente:**

```json
"arquitectura_recorrido": { "tipo": "sintesis_multicorriente", "recorridos": ["c3", "c5", "c7"] }
```

No se admite texto libre como sustituto de esta estructura. Las etiquetas descriptivas que aparecen en documentos históricos —`RELACION_MIXTA`, `RELACION_NO_JERARQUICA`— son prosa de decisión, no valores del campo, y no se transcriben a él.

---

## 9. Decisión normativa 4 — recorrido principal

### SE RATIFICA

El concepto de recorrido principal, definido como **el recorrido que organiza la arquitectura causal, interpretativa o valorativa central del argumento de una obra**.

No se decide mediante conteo de páginas, presencia de palabras, cronología, cantidad de capítulos, territorio, autor ni disciplina.

Campo: `recorrido`, con valores `c1` … `c10` en minúscula, o `null` cuando la obra tenga arquitectura especial.

---

## 10. Decisión normativa 5 — recorridos secundarios

### SE APRUEBA

El campo `recorridos_sec` como arreglo. Para el caso ordinario admite cero, uno o **máximo dos** elementos.

### Definición

Un recorrido secundario es **una dimensión sustantiva del argumento que interviene de manera académicamente significativa, pero permanece subordinada a la arquitectura interpretativa definida por el recorrido principal**.

No equivale a tema mencionado, palabra clave, territorio, fenómeno ni relación bibliográfica.

### Base empírica

La lógica no se inventa para el frontend: ya existe ejercitada en el corpus. 63 obras confirmadas declaran al menos una secundaria, 40 declaran una y 23 declaran dos.

### Misma frontera no significa misma jerarquía

Se ratifica el principio. Una obra puede tener C3 principal y C7 secundaria mientras otra tiene C7 principal y C3 secundaria: `james` frente a `alabi` y `rainforestwarriors` es el caso documentado. La frontera entre dos recorridos no determina la jerarquía dentro de cada obra. **Este proceso no se automatiza.**

---

## 11. Decisión normativa 6 — estado del recorrido

### SE APRUEBAN CUATRO ESTADOS

| estado | definición | obras |
|---|---|---|
| `confirmado` | existe decisión académica formal y fuente identificable | **80** |
| `preliminar` | existe candidatura académica explícita todavía no convertida en decisión final | **0** |
| `pendiente` | la obra entró al proceso académico pero la clasificación pública no está cerrada | **84** |
| `sin_evaluar` | la obra pertenece al corpus y no hay evidencia de que haya entrado al proceso clasificatorio | **69** |

`preliminar` se aprueba con cero obras y **no debe llenarse artificialmente**. Su existencia como valor previsto no es una invitación a poblarlo.

`pendiente` cubre lectura pendiente, bloqueo, decisión explícita de mantener pendiente e incidencia no resuelta. Son situaciones distintas y todas legítimas bajo el mismo estado.

### No se aprueba `disputado`

Queda descartado, por ahora, el estado `disputado`. Mezclaría el estado del proceso académico con la arquitectura clasificatoria, el conflicto entre recorridos y la frontera, que son tres cosas de distinto orden. **Un caso confirmado puede contener una tensión académica sin dejar de estar confirmado.**

### Estado y revisión son dimensiones distintas

No se fusionan `estado_recorrido` y `revision`. Una obra puede ser simultáneamente `estado_recorrido = confirmado` y `requiere_revision = sí` sin contradicción alguna: lo confirmado es la clasificación, lo pendiente es una incidencia sobre otro plano del registro.

---

## 12. Decisión normativa 7 — `fuente_recorrido`

### SE APRUEBA

`fuente_recorrido` como campo de trazabilidad documental. Debe contener referencias identificables a los documentos que sustentan la clasificación, y debe ser un arreglo aunque inicialmente contenga una sola fuente.

### No se incrustan expedientes completos

No se copian dentro de `datos-atlas.json` expedientes, dictámenes completos, citas largas ni lecturas completas. La trazabilidad se resuelve con cuatro preguntas y cuatro campos:

| pregunta | campo |
|---|---|
| ¿dónde se decidió? | `fuente_recorrido` |
| ¿quién decidió? | `revision.responsable` |
| ¿cuándo? | `revision.fecha` |
| ¿por qué? | `revision.fundamento` |

---

## 13. Decisión normativa 8 — `revision`

### SE RATIFICA

La estructura `revision` con sus cuatro componentes: `estado`, `responsable`, `fecha`, `fundamento`.

No se sustituye por un indicador simple. El frontend podrá sintetizarla visualmente —un sello, una marca, un color—, pero **el dato debe conservar la trazabilidad completa**. Una síntesis visual es una decisión de presentación; empobrecer el dato de origen sería una pérdida irreversible.

---

## 14. Decisión normativa 9 — territorio: `l`

### SE ESTABLECE

`l` **no representa el territorio académico estudiado por una obra**. `l` es exclusivamente el **anclaje cartográfico de la obra dentro de la interfaz del mapa**.

No se utilizará como fuente de ningún filtro territorial académico.

La evidencia que sostiene esta decisión ya está levantada: de las 35 entradas de lote que declaran una orilla con función «territorio estudiado», `l` coincide en 24 y difiere en 11, y las diferencias son sistemáticas, no accidentales. `brathwaite` tiene `l = barbados` y territorio estudiado «Caribe anglófono»; `bassiacuoso` tiene `l = cartagena` y «Gran Caribe»; `belisodelirium` tiene `l = cuba` y territorio estudiado Estados Unidos. A ello se suman nueve incidencias territoriales documentadas y sin resolver.

### No corregir `l` para hacerlo coincidir con `orillas`

Queda prohibido parchear `l` caso por caso para convertirlo artificialmente en territorio. Eso destruiría su función cartográfica, que cumple bien y que ninguna otra cosa cumple. Las incidencias territoriales se resuelven dentro de la arquitectura de `orillas`.

---

## 15. Decisión normativa 10 — `orillas`

### SE APRUEBA

`orillas` como **dimensión académica territorial de Atlas 2.0**. Su estructura conserva `tipo`, `label` y `funcion`.

### Funciones territoriales

Se conserva el vocabulario ya documentado, sin colapsarlo bajo una única categoría «territorio»:

| función | apariciones en los lotes |
|---|---|
| territorio estudiado | 37 |
| lugar de circulación | 11 |
| territorio comparado | 10 |
| espacio diaspórico | 5 |
| lugar de producción intelectual | 5 |
| destino migratorio | 1 |

### Filtro territorial futuro

Cuando se implemente, operará sobre `orillas` y permitirá distinguir la función territorial. Una obra situada cartográficamente en Cartagena puede estudiar el Gran Caribe, el Caribe colombiano, otra región o varios espacios a la vez. Por tanto: **punto cartográfico ≠ territorio estudiado**.

---

## 16. Nomenclatura pública y claves históricas

Se mantiene la decisión adoptada en la Fase 4B:

| ámbito | denominación |
|---|---|
| metáfora cartográfica del Atlas | **corriente** |
| clasificación académica C1–C10 | **recorrido** |

En la interfaz pública, C1–C10 serán **Recorridos**.

No se renombran retroactivamente `corriente_confirmada` ni `corrientes_secundarias` dentro de los lotes ya cerrados: esos documentos pertenecen a capas históricas del proceso. La estructura productiva nueva usará `recorrido` y `recorridos_sec` sin reescribir los documentos de origen. La traducción entre unas claves y otras es responsabilidad del procedimiento de transformación de la Fase 5B, no de una edición de los archivos históricos.

---

## 17. Campos autorizados conceptualmente para Fase 5B

**Núcleo del contrato de recorridos**, autorizado:

- `recorrido`
- `recorridos_sec`
- `arquitectura_recorrido`
- `estado_recorrido`
- `revision`
- `fuente_recorrido`

**Evaluables para sincronización controlada**, sin que esta instrucción decida cuáles entran en la primera migración:

- `procedencia`
- `procedencia_verificada`
- `proceso`
- `operaciones`
- `lenguas_publicacion`
- `temporalidades`
- `orillas`

La instrucción técnica de Fase 5B decidirá el alcance exacto de la primera migración.

---

## 18. Campos no autorizados todavía

| campo | cobertura | razón |
|---|---|---|
| `marcas` | 2 de 57 entradas de lote (3,5 %) | cobertura insuficiente: publicarla sugeriría un sistema transversal que no existe |
| `rutas` | 0 de 57 | cero cobertura estructurada: no hay dato que sincronizar |

No se crean valores faltantes en ninguno de los dos casos.

### No inferir `lenguas_publicacion`

No se deriva `lenguas_publicacion` desde `tr` ni desde ningún indicador equivalente. Lengua de publicación y traducción son dimensiones distintas, y el dictamen de C10 ya lo fijó expresamente. Cuando la evidencia no exista, el valor permanece ausente. Diez de las 57 entradas de lote no tienen el dato: seguirán sin tenerlo.

---

## 19. Reglas de conservación del corpus

### Las 232 obras

La Fase 5B conservará explícitamente la diferencia entre 80 confirmadas, 84 pendientes y 69 sin evaluar, teniendo en cuenta que la matriz incluye además una entrada fuera del corpus. **Las 153 obras sin recorrido confirmado no se convierten en registros vacíos ambiguos**: tendrán estado explícito. Que el Atlas diga con precisión lo que no sabe es parte de lo que debe mostrar.

### Las 80 confirmadas

| | obras |
|---|---|
| con recorrido principal explícito | **74** |
| confirmadas mediante arquitectura especial, sin recorrido principal | **6** |

En esos seis casos, `recorrido = null` **no significa falta de clasificación**. El significado lo aporta `arquitectura_recorrido`. Cualquier lectura del dato que interprete el nulo como vacío estará leyendo mal el contrato.

### Los tres casos pendientes con decisión

Se conservan como `pendiente` aunque exista decisión explícita, porque decisión explícita no equivale a recorrido confirmado. No se promocionan automáticamente:

| obra | decisión registrada |
|---|---|
| `gudynas` | `bloquear_por_alcance_y_corregir_bibliografia` |
| `mintz` | `mantener_pendiente` |
| `stewardpuertorico` | `fusionar_y_redirigir` |

**Precisión de identidad, para evitar un error de migración.** `mintz` (Sidney W. Mintz, *Caribbean Transformations / Sweetness and Power*) es una obra distinta de `mintzarea` (*The Caribbean as a Socio-Cultural Area*), que sí está confirmada en C2 con C4 secundaria. Del mismo modo, `steward` está en el corpus y confirmada, mientras que `stewardpuertorico` es el registro duplicado que queda fuera. Son cuatro identificadores y cuatro registros distintos: no se fusionan por semejanza de nombre.

### `stewardpuertorico`

Se mantiene fuera del corpus y pendiente de fusión y redirección. No se incorpora como obra independiente durante la sincronización. La fusión no se resuelve en esta fase normativa.

---

## 20. Incidencias que quedan abiertas

### `jaffeconcrete`

Mantiene recorrido principal C6 y estado `confirmado`, y conserva su reserva C6/C4 como **incidencia académica pendiente de revisión**. No se convierte automáticamente en frontera constitutiva, ni en `pendiente`, ni en síntesis multicorriente. Su arquitectura permanece ordinaria mientras no exista una nueva decisión académica.

Es, por tanto, el caso que ilustra con más claridad la separación aprobada en el §11: `estado_recorrido = confirmado` junto con `requiere_revision = sí`.

### C1

No se modifica todavía el catálogo. La denominación académica de C1 continúa pendiente de decisión específica de la Dirección Académica respecto de su incorporación formal al catálogo. **Esta instrucción no utiliza la aprobación de la arquitectura de datos para resolver indirectamente ese asunto**, que es de otro orden.

### `provisional: true`

No se retira masivamente `provisional: true` de C1–C10. La situación se revisará recorrido por recorrido. Una decisión de infraestructura no se convierte en ratificación académica general.

### Contradicción interna del dictamen de C5

La contradicción entre §8 y §10 de `dictamen-academico-c5.md` queda registrada. Hasta que exista corrección documental, **para el dato clasificatorio concreto prevalece el dato reproducible ya validado por los lotes y por el dictamen posterior que detectó la inconsistencia**. No se modifica silenciosamente el dictamen original: la corrección deberá producirse en una fase documental específica mediante una `FE_DE_ERRATAS` o nota normativa equivalente.

### `brownreaper` / `gudynas`

La contradicción entre el dictamen de C6 y el de C9 sobre cuál de las dos obras conservó candidatura hacia C6 queda registrada. **Ninguna de las dos afirmaciones contradictorias puede utilizarse para generar una clasificación nueva.** Debe resolverse documentalmente antes de que la trazabilidad pública cite ese pasaje como fuente definitiva.

### Documentos históricos

No se reescriben dictámenes, expedientes, lecturas, decisiones, cierres ni matrices históricas. Las correcciones se añaden mediante addendum, fe de erratas, decisión posterior o documento de consolidación. La historia del proceso se conserva.

---

## 21. La matriz de Fase 5A como instrumento de migración

`matriz-clasificacion-fase-5a.csv` se adopta como **matriz maestra de control para la futura migración de Fase 5B**. No es todavía el corpus productivo. Se utilizará para contrastar identificadores, verificar estado, identificar fuente y construir una transformación reproducible.

**Sus columnas no se copian mecánicamente.** La matriz se escribió antes de que existiera este contrato, y hay al menos un punto en que su vocabulario y el contrato aprobado divergen. Debe aplicarse esta regla de transformación:

> La columna `conflicto_clasificacion` de la matriz vale `sí` en siete filas: las seis de arquitectura especial y `jaffeconcrete`. Bajo la regla 9 del §4 de este documento, **una frontera constitutiva no es un conflicto de clasificación**. En la migración, las seis obras de arquitectura especial pasan a `arquitectura_recorrido` con `estado_recorrido = confirmado` y **no** se marcan como conflicto; `jaffeconcrete` es la única de las siete que corresponde a un conflicto académico realmente abierto, y se registra como incidencia de revisión sobre una arquitectura ordinaria.

Confundir ambas cosas produciría exactamente el efecto que este documento prohíbe: presentar como indecisión lo que es una decisión positiva sobre la arquitectura de una obra.

---

## 22. Ejemplos completos del contrato

**Caso ordinario:**

```json
{
  "id": "stoutafterlove",
  "recorrido": "c10",
  "recorridos_sec": ["c4"],
  "arquitectura_recorrido": null,
  "estado_recorrido": "confirmado",
  "revision": {
    "estado": "confirmada",
    "responsable": "Dirección académica de Pensamiento Caribe",
    "fecha": "2026-08-08",
    "fundamento": "La intimidad queer, el deseo y las economías eróticas organizan el argumento."
  },
  "fuente_recorrido": ["a01-generado.json"]
}
```

**Frontera constitutiva con secundarias reconocidas:**

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

**Síntesis multicorriente:**

```json
{
  "id": "perezmorales",
  "recorrido": null,
  "recorridos_sec": [],
  "arquitectura_recorrido": { "tipo": "sintesis_multicorriente", "recorridos": ["c3", "c5", "c7"] },
  "estado_recorrido": "confirmado",
  "fuente_recorrido": ["dictamen-academico-bloque-4-etapa-2-3.md"]
}
```

**Obra sin evaluar:**

```json
{
  "id": "…",
  "recorrido": null,
  "recorridos_sec": [],
  "arquitectura_recorrido": null,
  "estado_recorrido": "sin_evaluar"
}
```

El último ejemplo importa tanto como los otros tres: es la forma que tendrán 69 obras, y es lo que impide que el silencio del corpus se lea como una clasificación.

---

## 23. Condición para abrir la Fase 5B

Con las decisiones de este documento quedan resueltas las dos reservas normativas que la auditoría de Fase 5A había identificado como bloqueantes: `SINTESIS_MULTICORRIENTE` queda aprobada y `FRONTERA_CONSTITUTIVA` tiene ahora representación técnica definida.

La Fase 5B será una instrucción técnica distinta. Su función será **transformar decisiones académicas ya existentes en datos productivos mediante un procedimiento reproducible y auditable**. No clasificará obras. No completará vacíos. No interpretará títulos. No inferirá categorías.

Permanecen abiertas, sin bloquear la sincronización del dato pero sí la publicación de la etiqueta: la ratificación de C1 y la revisión recorrido por recorrido de `provisional: true`.

---

## 24. Alcance de esta fase

Esta instrucción no autoriza modificar `data/agua-de-por-medio/datos-atlas.json` ni `data/agua-de-por-medio/datos-atlas.js`. No autoriza modificar `proyectos/con-el-agua-de-por-medio.html` ni `css/con-el-agua-de-por-medio.css`. No se implementan filtros de recorridos ni filtros territoriales.

No se abren obras, no se clasifican obras nuevas, no se completan pendientes, no se recalibra P3 y no se emiten dictámenes. Esta fase formaliza decisiones ya existentes y no produce decisiones de clasificación obra por obra.

No se ejecutó ninguna operación Git.

---

## 25. Estado final

```
FASE_5A_D_DECISION_NORMATIVA_Y_CONTRATO_APROBADOS — LISTO_PARA_INSTRUCCION_TECNICA_5B
```

No se sincroniza todavía.
