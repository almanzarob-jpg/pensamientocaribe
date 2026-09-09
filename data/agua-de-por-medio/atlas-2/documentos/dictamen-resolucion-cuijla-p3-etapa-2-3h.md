# Dictamen de resolución · Caso `cuijla` · P3-A · Etapa 2.3H

## Gonzalo Aguirre Beltrán, *Cuijla: Esbozo etnográfico de un pueblo negro*

Este documento resuelve, sobre la base exclusiva del expediente escrito, si el caso `cuijla` puede pasar a `estado_recorrido: "confirmado"` o debe permanecer en `"pendiente"`. No incorpora lectura nueva, no compara con otros casos del corpus para decidir por analogía y no usa como evidencia el valor `"confirmado"` que hoy tiene el nodo en `datos-atlas.json` y `datos-atlas.js`.

### 1. Problema detectado

La decisión académica de `cuijla` (`decision-academica-cuijla-p3-etapa-2-3h.md`) aprueba una clasificación operativa —C4 principal, C2 secundaria— pero escribe en su propio bloque de datos aprobado `"estado_recorrido": "pendiente"` y cierra con estado final `NO_IMPLEMENTADA`. El corpus, sin embargo, tiene hoy el nodo en `"confirmado"`, con `fuente_recorrido` apuntando a esa misma decisión. No existe ningún documento posterior a la decisión académica que autorice ese cambio: ni una nueva decisión, ni un informe de implementación, ni una nota de corrección. El propio caso lo advierte al cerrar: *"No se decidió dónde se almacenará técnicamente la reserva conceptual (§16)... esa decisión es posterior a esta decisión académica"*.

El problema, entonces, no es que la clasificación C4/C2 esté en duda. Es que el corpus dio un paso —de `pendiente` a `confirmado`— que ningún documento del expediente dio, y que la propia decisión académica, leída en detalle, no dejó librado a la coherencia técnica sino a una condición explícita que nunca se cumplió.

### 2. Evidencia probatoria

**C4 como corriente principal.**
`lectura-cuijla-p3-etapa-2-3h.md` §19, §22 (lectura original): primera recomendación de `recorrido: c4`.
`decision-academica-cuijla-p3-etapa-2-3h.md` §9: *"C4 constituye el mejor recorrido disponible para representar el componente histórico-estructural más sostenido del libro —la transición de la esclavitud colonial a la 'economía de terranía' y de ésta al ejido posrevolucionario, desarrollada con una categoría teórica de acuñación propia del autor a través de los caps. 2, 3, 4 y 8—"*.

**C2 como corriente secundaria.**
Decisión académica §9: C2 acompaña a C4 *"en su función de condición de origen narrativo y demográfico (los vaqueros esclavizados de las estancias ganaderas como fuente demográfica principal de la Cuijla actual, cap. 4)"*. §10 y §12 la fijan como "secundaria estructurante", distinta de C3, que queda contextual.

**El vacío taxonómico.**
Decisión académica §4: *"la tesis etnográfica central de Cuijla sobre persistencia, reinterpretación y transformación de africanismos a través de diversos dominios de la vida social no encuentra una corriente única adecuada dentro de C1–C10"*, con ancla textual en el cierre del cap. 7, donde Aguirre Beltrán agrupa vivienda, vestido y alimentación como manifestaciones intercambiables del mismo fenómeno de retención cultural africana —dos de esos tres ejemplos sin capítulo propio y sin lugar posible en ninguna corriente—. El origen del hallazgo está en `lectura-cuijla-p3-etapa-2-3h.md`, segunda ampliación §B.2–B.4 (prueba de retirada individual y de sustituibilidad sobre C8, C9 y C10) y §B.9 (formulación final `VACÍO_TAXONÓMICO_POSIBLE = SÍ`).

**`estado_recorrido: "pendiente"`.**
Decisión académica §8, bloque de datos aprobado literalmente:
```json
"recorrido": "c4",
"recorridos_sec": ["c2"],
"arquitectura_recorrido": null,
"estado_recorrido": "pendiente"
```
seguido de la frase: *"Esta clasificación todavía no se implementa (§10 de esta decisión)"*. El valor no es un descuido: está escrito dentro del bloque que la decisión llama expresamente aprobado.

**`NO_IMPLEMENTADA`.**
Decisión académica, bloque "Estado final": `DECISION_ACADEMICA_EMITIDA` / `NO_IMPLEMENTADA` / `VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO` / `NO_AUTORIZADO_PARA_AVANZAR_AL_CASO_4`. La razón se explicita en §16: la implementación futura *"deberá contemplar dos elementos distintos"* —la clasificación de §8 y una reserva conceptual que registre el hallazgo de §4— y la decisión *"no determina el mecanismo técnico de ese registro... esa determinación es posterior a la decisión académica y no corresponde a este documento"*.

**Rastreo documental posterior.** Una búsqueda sobre todo `data/agua-de-por-medio/atlas-2/documentos/` y sobre el repositorio completo no encuentra ningún documento posterior a la decisión académica que trate a `cuijla` de forma sustantiva. Las demás menciones (`expediente-evidencia-c3/c4/c9.md`, `dictamen-academico-c3/c4.md`, `ficha-decision-c4.md`, `matriz-clasificacion-fase-5a.csv`, `cola-lectura-pendiente-atlas-2.md`) son todas anteriores a la lectura probatoria: describen a `cuijla` como ancla sin lote, previa a que existiera lectura o decisión, y no aportan nada sobre su resolución. La decisión académica sigue siendo, hoy, la última palabra escrita sobre el caso.

### 3. Reconstrucción de la decisión original

El expediente documenta tres momentos sucesivos, ninguno borrado por el siguiente:

1. La lectura original propuso C4 principal / C2 secundaria con C1, C3, C8, C9 y C10 contextuales. No fue aprobada porque no estaba demostrado que C4 organizara la tesis general del libro.
2. La primera ampliación, tras leer los capítulos de ciclo vital, revisó C8, C9 y C10 de contextuales a estructurantes y propuso `SINTESIS_MULTICORRIENTE(C4,C8,C9,C10)`. Se aceptó la sustancialidad de las tres corrientes, pero no la síntesis: la necesidad del bloque conjunto no demuestra que cada corriente sea individualmente necesaria.
3. La segunda ampliación aplicó la prueba de retirada individual sobre C8, C9 y C10: retirar cualquiera de las tres, por separado, deja evidencia perdida pero no destruye la tesis general, porque siempre queda evidencia alternativa —incluida la de vivienda, que no depende de ninguna etiqueta C1–C10—. Esto revocó la síntesis y estableció el vacío taxonómico como hallazgo autónomo, con recomendación operativa de volver a C4/C2.

La decisión académica adopta esta tercera fase como base y añade una precisión que no estaba tan marcada en la lectura: separa expresamente un "nivel epistemológico" (la tesis compuesta del libro, que incluye un principio transversal no capturado por C1–C10) de un "nivel operativo" (C4 como mejor ajuste disponible dentro del vocabulario vigente). Aprueba la clasificación en el nivel operativo. Pero en lugar de cerrar ahí, en el §16 fija que la implementación completa del caso no es solo escribir C4/C2: es escribir C4/C2 *y* decidir cómo se registra la reserva conceptual del vacío, y dice explícitamente que esa segunda decisión no le corresponde a este documento. El bloque de §8 con `"estado_recorrido": "pendiente"` es la expresión literal de esa condición: no se autoriza a llamar terminado un caso cuya implementación, por diseño de la propia decisión, tiene una segunda pieza sin resolver.

### 4. Naturaleza exacta del vacío taxonómico

El vacío no es una dificultad de clasificar `cuijla` dentro de C1–C10: es un hallazgo sobre el vocabulario mismo. La tesis del libro tiene cuatro niveles (decisión académica §5): presencia histórica africana, agencia histórica organizada por C4, persistencia/transformación de rasgos africanos como proposición general, y una serie de ejemplos —vivienda, vestido, alimentación, parentesco, ciclo vital, espiritualidad, medicina, lengua— que documentan esa proposición general sin que ninguno sea individualmente indispensable para sostenerla.

C8 (lengua), C9 (sombra, tono, medicina) y C10 (parentesco, ciclo vital) capturan tres de esos dominios con evidencia primaria sólida, pero ninguna, ni su suma, nombra el principio que los organiza a todos: la persistencia, reinterpretación o extinción de rasgos africanos a través de dominios distintos. Dos de los ejemplos que el propio autor trata como equivalentes a los anteriores —vestido y alimentación— no tienen capítulo propio y no encajan en ninguna corriente existente. El vacío es, en ese sentido, un límite del vocabulario C1–C10 para nombrar un principio transversal, no una carencia de evidencia sobre `cuijla`.

### 5. Relación del vacío con C4/C2

El vacío taxonómico y la clasificación C4/C2 ocupan dominios distintos de la tesis del libro. C4 organiza las proposiciones 1 y 2 —presencia histórica, agencia—, con evidencia concentrada en los caps. 2, 3, 4 y 8; C2 aporta la condición demográfica de origen, cap. 4. El vacío corresponde a la proposición 3 —persistencia cultural— y a los dominios de los caps. 7, 10 a 15, que C4 no organiza ni pretende organizar: la decisión académica lo dice sin ambigüedad en su §9, *"C4 principal operativo ≠ principio intelectual total de la obra"*, y en el mismo párrafo aclara que C4 *"no aporta evidencia a la proposición 3... en ninguno de los dominios que la propia Introducción nombra"*. En ese sentido estricto, el vacío no pone en duda que C4 sea la corriente correcta para lo que C4 fue llamada a representar, ni que C2 sea la secundaria correcta.

Pero la decisión académica no reduce el caso a esa pregunta. En su §16 declara que la implementación del caso —lo que se escribe en el corpus como resultado de esta decisión— tiene dos partes inseparables: la clasificación operativa y el registro de la reserva conceptual del vacío. Mientras la segunda parte no tenga mecanismo decidido, el caso no está completo, y por eso la propia decisión —no una interpretación posterior— escribe `"pendiente"` dentro del bloque que aprueba y cierra con `NO_IMPLEMENTADA`. La suficiencia que está en juego para el estado `"confirmado"` no es "¿es C4 la corriente correcta?" —esa pregunta está resuelta— sino "¿basta con escribir C4/C2 solos, sin el registro del vacío, para dar por implementado lo que esta decisión aprobó?". La propia decisión responde que no.

### 6. Dictamen: PENDIENTE

El caso debe conservar `estado_recorrido: "pendiente"`. No porque C4 o C2 estén débilmente demostrados —tres fases de lectura y dos ampliaciones dirigidas los sostienen sin fisuras— sino porque la decisión académica condicionó expresamente el cierre del caso a un segundo elemento —el mecanismo de registro de la reserva conceptual— que nunca fue decidido por ningún documento posterior. Mientras ese elemento siga sin resolverse, "confirmado" describiría el caso como cerrado en un sentido que la propia decisión académica se negó a certificar.

Esto no equivale a decir que el vacío afecte la validez de C4/C2 como corrientes: afecta la completitud de lo que hay que implementar antes de poder llamar al caso resuelto. Es una distinción que la propia decisión traza con cuidado en su §9 y que esta lectura documental se limita a hacer explícita, sin resolverla por coherencia técnica ni por comparación con otros casos del corpus.

### 7. Modificación de datos que correspondería realizar

No se ejecuta en esta tarea, conforme a la instrucción recibida. De autorizarse, la corrección sería puntual: revertir `estado_recorrido` de `"confirmado"` a `"pendiente"` en `datos-atlas.json` y `datos-atlas.js`. Los demás campos del nodo —`recorrido: "c4"`, `recorridos_sec: ["c2"]`, `arquitectura_recorrido: null`— coinciden con lo aprobado en §8 de la decisión académica y no requerirían cambio. `fuente_recorrido` puede mantenerse citando la decisión académica mientras no exista un documento posterior que resuelva el mecanismo de registro de la reserva conceptual; si ese documento llega a existir, tendría que añadirse ahí.

Lo que falta para poder pasar el caso a `"confirmado"` es una decisión posterior de la Dirección Académica que determine el mecanismo técnico de registro de la reserva conceptual del vacío —campo de metadatos, nota en `fuente_recorrido`, anexo documental u otro, las tres opciones que la propia decisión deja abiertas en su §16— y autorice expresamente, una vez implementado ese mecanismo junto con la clasificación C4/C2, el cierre del caso.

### 8. Deuda metodológica/taxonómica a conservar

El hallazgo `VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO` debe preservarse íntegro, sin resolverse por analogía con otros casos y sin generar todavía una corriente C11: la propia decisión académica lo prohíbe expresamente en su §4 y §13, y señala que el hallazgo debe acumular evidencia comparativa de otros casos del corpus antes de que se considere cualquier modificación del sistema de corrientes. El precedente procedimental es `wynterblackmetamorphosis` (`cierre-lote-p2-etapa-2-3f.md` §9): un hallazgo de vacío puede convivir con una clasificación operativa dentro del sistema vigente sin que eso lo disuelva ni lo convierta automáticamente en corriente nueva. Ese precedente respalda la forma del hallazgo, no su contenido: la arquitectura sustantiva de aquel caso no se traslada a `cuijla`.

La tensión textual entre la Introducción de *Cuijla* (cimarrones como origen "principal" de los núcleos negros mexicanos) y el cap. 4 (los vaqueros esclavizados como base demográfica de Cuijla específicamente) también queda registrada como tensión propia de la obra, sin intento de resolución, siguiendo el mismo criterio que la decisión académica aplicó en su §12.

---

**Restricciones observadas en esta tarea:** no se modificó `datos-atlas.json` ni `datos-atlas.js`; no se alteró el vocabulario C1–C10 ni se propuso una corriente nueva; no se resolvió el vacío taxonómico por analogía con otros casos; el valor `"confirmado"` existente en el corpus no se usó como evidencia para el dictamen; no se avanzó a P3-B ni a ningún otro caso.

**DETENTE.**
