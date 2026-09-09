# Dictamen metodológico · `rebeldestiny` · P3-B · Etapa 2.3I

**Naturaleza de este documento.** No es una nueva lectura ni una nueva decisión de clasificación. Es una adjudicación exclusivamente metodológica: determina qué exige el sistema vigente para asignar `recorrido principal`, contrasta a C9 contra esa exigencia, compara el caso con el precedente `cuijla` y con el precedente `wynterblackmetamorphosis`, y resuelve si procede implementar, dejar pendiente con reserva registrada, o declarar una deuda metodológica del sistema. No se ha releído *Rebel Destiny*; toda la evidencia sustantiva es la ya producida en `lectura-rebeldestiny-p3-etapa-2-3i.md` (lectura original y AMPLIACIÓN DIRIGIDA).

## 1. Definición vigente de `recorrido principal`

El contrato `decision-normativa-contrato-recorridos-fase-5a-d.md`, Decisión normativa 4 (§9), ratifica el concepto sin ambigüedad:

> El concepto de recorrido principal, definido como **el recorrido que organiza la arquitectura causal, interpretativa o valorativa central del argumento de una obra**. No se decide mediante conteo de páginas, presencia de palabras, cronología, cantidad de capítulos, territorio, autor ni disciplina.

Esto responde directamente a la pregunta que abre el encargo: el criterio vigente es el **A** de los tres propuestos — la corriente que organiza la arquitectura del argumento —, no el B (mayor peso o densidad dentro de una tesis que excede el vocabulario) ni el C (mejor ajuste operativo aunque no organice la tesis). El contrato descarta expresamente el criterio B al prohibir decidir por "cantidad de capítulos" — que es justamente el rasgo que hace a C9 el candidato más visible en `rebeldestiny` (cinco de dieciocho capítulos, el bloque de mayor desarrollo teórico sostenido). Y no existe en el contrato una tercera vía general que autorice el criterio C como regla — solo existe, como se muestra en el §4, un precedente puntual y motivado, no una regla.

El campo técnico correspondiente tiene además una restricción de forma que resulta decisiva para este caso: "Campo: `recorrido`, con valores `c1` … `c10` en minúscula, **o `null` cuando la obra tenga arquitectura especial**" (§9). Es decir: el contrato no contempla `recorrido: null` como valor disponible fuera de una arquitectura de frontera constitutiva o de síntesis multicorriente formalmente declarada. Fuera de esos dos casos, toda obra con clasificación cerrada debe llevar un valor c1–c10 en el campo `recorrido`.

## 2. Evidencia documental del protocolo

Tres piezas de evidencia sostienen el dictamen, además de la cita anterior.

**Primera: verificación empírica sobre el corpus completo.** Se recorrió programáticamente `datos-atlas.json` (254 obras) buscando la combinación `recorrido: null` + `arquitectura_recorrido: null`. Aparece en 166 obras, y en todas ellas `estado_recorrido` es `sin_evaluar` (94) o `pendiente` (72) por falta de lectura o de decisión, nunca por hallazgo académico cerrado de ausencia de principal. La combinación `recorrido: null` + `arquitectura_recorrido` no nulo (frontera o síntesis) aparece en 11 obras, coherente con las seis confirmadas mediante arquitectura especial que reporta la auditoría del contrato más los casos abiertos desde entonces. **En ningún caso del corpus existe una obra con `recorrido: null`, `arquitectura_recorrido: null` y `estado_recorrido: confirmado`.** No hay precedente de una obra clasificada, cerrada académicamente, sin principal y sin arquitectura especial.

**Segunda: el validador técnico no impone ni verifica esta regla.** `scripts/validar-atlas.mjs` no contiene todavía ninguna comprobación sobre `recorrido` ni `arquitectura_recorrido` — el propio validador lo advierte ("los campos 2.0 se validan si aparecen, pero todavía no son obligatorios"). Esto significa que si se implementara la combinación null/null/confirmado, ni el contrato la reconocería como forma válida ni el validador la detectaría como anómala: quedaría indistinguible, para cualquier lectura automatizada del corpus, de una obra que sencillamente no ha sido evaluada. Es un problema de fondo, no de forma: la ausencia de sanción técnica no convierte en válida una combinación que el contrato no contempla.

**Tercera: el precedente `wynterblackmetamorphosis` sí ofrece una vía, pero no la que parece ofrecer a primera vista.** Se analiza en el §3.

## 3. Contraste de C9 contra la definición vigente

La pregunta del encargo es precisa: ¿satisface C9 los requisitos formales de `recorrido principal` aun cuando la propia lectura demuestre que la religión es uno entre varios dominios paralelos del argumento? La respuesta exige separar dos pruebas que el corpus ya usa y que no deben confundirse entre sí.

**La prueba de retirada aplicada correctamente no es "¿es C9 el dominio más desarrollado?" sino "¿retirar C9 destruye la arquitectura general del argumento?"** La Prueba C de la AMPLIACIÓN DIRIGIDA ya respondió esto, y lo hizo en sentido negativo: "C9 es el dominio con mayor densidad teórica y desarrollo capitular sostenido (...), pero funciona estructuralmente como uno más entre varios dominios paralelos, no como estructurante en el sentido fuerte que exige la pregunta 3 original." Si se retiran los cinco capítulos de obia y cosmología, la tesis transversal del libro —la persistencia de africanismos— sigue demostrada por el resto: parentesco clasificatorio (cap. VIII), gobierno (cap. X–XI), oficios y arte (cap. VI, XII, XV), folclor (cap. VII, XVI). La pérdida es parcial, no destructiva. C9 no pasa la prueba que la Decisión normativa 4 exige para ser principal: no organiza la arquitectura causal, interpretativa o valorativa central del argumento general — organiza, dentro de esa arquitectura, uno de sus dominios paralelos, el más extenso pero no el único ni el indispensable.

**El precedente que sí autoriza usar una corriente "más próxima disponible" como principal exige más de lo que `rebeldestiny` ofrece.** En `wynterblackmetamorphosis`, la Dirección Académica adoptó C8 como principal pese a una reserva conceptual expresa (`C8_APLICACIÓN_CON_RESERVA_CONCEPTUAL = SÍ`), y podría leerse como el precedente que habilita la Salida A para `rebeldestiny`. Pero la decisión de ese caso no se apoya en que C8 fuera "el dominio más desarrollado": se apoya en que el problema que C8 aproxima —transformación y reinvención cultural— pasó la prueba de retirada en su forma fuerte, la destructiva: "si se retira el problema de la transformación/reinvención cultural, desaparecen los capítulos 'Cultural Reserve' y 'Kingdom of Jah' —el núcleo central del libro— y con ellos el argumento organizador de la obra. RETIRADA_DESTRUCTIVA" (decisión académica, §6). La reserva conceptual en ese caso es terminológica —el vocabulario de "creolización" no captura con precisión el concepto wynteriano de "indigenización"— pero la función estructurante de C8 en el argumento general no está en duda. Es exactamente lo que la Prueba C de `rebeldestiny` no pudo establecer para C9: no hay aquí una `RETIRADA_DESTRUCTIVA` del problema que C9 aproxima, hay una `RETIRADA_PARCIAL`. El precedente `wynterblackmetamorphosis` exige, para aplicarse, precisamente la condición que este caso no satisface.

**Conclusión de esta sección: C9 no satisface los requisitos formales existentes para ser `recorrido principal`.** No por ser secundario o poco desarrollado —es, al contrario, el dominio de mayor desarrollo—, sino porque el desarrollo capitular no es el criterio, y en el único criterio que sí rige —organizar la arquitectura del argumento general— la propia evidencia ya reunida establece que no lo hace en solitario.

## 4. Comparación procedimental con `cuijla`

La distinción que pide el encargo es exacta y tiene una respuesta clara: los dos casos no son estructuralmente iguales, y la diferencia es de grado en el sentido fuerte, no accidental.

En `cuijla`, la decisión académica (§8 de `decision-academica-cuijla-p3-etapa-2-3h.md`) estableció que "la clasificación C4/C2 se considera académicamente demostrada" — es decir, existe una corriente que organiza una parte central y defendible de la tesis del libro (la vivienda y la economía doméstica como eje material del argumento), y la reserva conceptual (`VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO`) se registra como un excedente sobre esa clasificación válida: hay más en el libro de lo que C4/C2 puede nombrar, pero lo que C4/C2 nombra es real y suficiente para sostener el campo `recorrido`. La reserva conceptual convive con una clasificación operativa sólida; no la sustituye ni la pone en duda.

En `rebeldestiny`, tras la prueba de retirada aplicada correctamente a C3 (condición histórica, no objeto argumentativo — Prueba B) y a C9 (dominio paralelo, no estructurante en sentido fuerte — Prueba C, arriba), **ninguna corriente disponible en C1–C10 pasa la prueba que la Decisión normativa 4 exige para ser principal.** C10 queda descartado desde la lectura original por un solo capítulo sin desarrollo propio. No hay, en este caso, una clasificación operativa defendible sobre la cual la reserva conceptual se añada como excedente: la reserva conceptual ocupa aquí el lugar mismo donde debería estar la clasificación.

Esto responde la pregunta crucial del encargo: no existe en `rebeldestiny` una corriente que organice suficientemente una parte central de la tesis como C4 lo hacía en `cuijla`. Se trata, por tanto, de **una forma más fuerte de insuficiencia taxonómica** que la de `cuijla`, y así debe registrarse: no "reserva conceptual sobre clasificación válida" sino "reserva conceptual en ausencia de clasificación operativa defendible".

## 5. Naturaleza de la reserva conceptual

No cambia respecto de lo ya establecido en la AMPLIACIÓN DIRIGIDA: persistencia y reinterpretación de africanismos a través de dominios heterogéneos —duelo y muerte, parentesco clasificatorio, gobierno, oficios, arte, folclor y religión—, cada uno individualmente prescindible para sostener la tesis transversal (de ahí que ninguno solo alcance el estatuto de principal) y al menos dos de ellos —folclor/oralidad, arte/talla— sin corriente propia en C1–C10. Este dictamen no reabre ni modifica ese hallazgo; solo extrae su consecuencia sobre el campo `recorrido`, que es distinta de la que se había asumido.

## 6. Dictamen final

Se ratifican dos elementos ya aprobados por Dirección Académica y no se tocan aquí: la revocación de C3 como principal, y el hallazgo de `RESERVA_CONCEPTUAL`.

No se ratifica C9 como `recorrido principal`: la propia evidencia ya producida establece que C9 no organiza la arquitectura general del argumento, solo uno de sus dominios paralelos, y el único precedente que permitiría tratar "la corriente más próxima disponible" como principal (`wynterblackmetamorphosis`) exige una retirada destructiva que este caso no tiene.

Se descarta también, por falta de fundamento en la evidencia ya reunida, forzar una arquitectura especial: no hay frontera constitutiva demostrada (la lectura original ya la evaluó entre C3 y C9 y la descartó por asimetría de retirada, y la ampliación no reabre esa prueba) ni síntesis multicorriente (esta exige tres o más corrientes *existentes* en C1–C10 estructurando irreductiblemente el argumento; lo que hay aquí es un principio transversal que varias corrientes aproximan parcialmente, junto con dominios —folclor, oficios artesanales de raíz africana— que ninguna corriente nombra, lo cual es precisamente la definición de vacío taxonómico, no de síntesis).

La Salida B es, en consecuencia, la académicamente correcta: ninguna C1–C10 puede recibir honestamente el campo `recorrido`, y la única vía disponible sin forzar el sistema es dejar la obra sin principal, con la reserva conceptual registrada por separado.

Pero, tal como el propio encargo anticipó, esa combinación no está prevista en el esquema vigente. El contrato reserva `recorrido: null` exclusivamente para arquitectura especial (§1 y §2 de este dictamen), y no existe en el corpus completo un solo precedente de una obra `confirmado` sin principal y sin arquitectura especial (verificación empírica del §2). Implementar la Salida B tal como está definida en el encargo produciría una obra técnicamente indistinguible, para el contrato y para el validador, de una obra simplemente no evaluada — perdiendo exactamente la trazabilidad que el sistema existe para preservar.

**Por tanto: se registra el problema como deuda metodológica del sistema (§8) y no se cambian los datos.** `rebeldestiny` permanece en el estado que ya tiene desde el cierre de la ronda anterior: sin implementar, con la decisión académica marcada `NO_IMPLEMENTADA` / `RESERVA_CONCEPTUAL_PENDIENTE_DE_AUDITORIA`, a la espera de que Dirección Académica resuelva primero la deuda de esquema antes de que este caso —y previsiblemente otros futuros de la misma familia— puedan cerrarse con un bloque de datos válido.

## 7. Bloque de datos que correspondería implementar

Ninguno. No se autoriza implementación en este dictamen.

Si Dirección Académica decidiera, pese a lo anterior, forzar el cierre con los valores disponibles hoy en el esquema, el único bloque compatible con la Salida B sería:

```json
"recorrido": null,
"recorridos_sec": [],
"arquitectura_recorrido": null,
"estado_recorrido": "pendiente",
"fuente_recorrido": ["decision-academica-rebeldestiny-p3-etapa-2-3i.md", "dictamen-metodologico-rebeldestiny-p3-etapa-2-3i.md"]
```

Se advierte expresamente que este bloque, tal como el esquema lo permite hoy, sería indistinguible de las 72 obras `pendiente` sin lectura ni decisión. No se recomienda su implementación sin que Dirección Académica resuelva antes la deuda del §8 — por ejemplo mediante una anomalía explícita análoga a `C8_APLICACIÓN_CON_RESERVA_CONCEPTUAL`, o mediante un estado o marca que distinga "pendiente por falta de lectura" de "pendiente porque el sistema no tiene, todavía, forma de registrar una clasificación cerrada sin principal".

## 8. Deuda metodológica del sistema

El contrato de datos de Atlas 2.0 (`decision-normativa-contrato-recorridos-fase-5a-d.md`) no contempla un estado válido para una obra que ha sido evaluada por completo y para la cual se concluye, con evidencia suficiente, que ninguna corriente C1–C10 satisface la definición de `recorrido principal` y que tampoco existe frontera constitutiva ni síntesis multicorriente — solo una reserva conceptual. El campo `recorrido` solo admite `null` bajo arquitectura especial; fuera de ese supuesto, toda obra con clasificación cerrada debe llevar un valor c1–c10, lo cual fuerza indebidamente a elegir un principal que no cumple el estándar, tal como casi ocurrió aquí con C9. El validador técnico tampoco impone ni reconoce esta regla, por lo que una implementación fuera de norma no sería detectada automáticamente.

Se recomienda a Dirección Académica considerar, para este caso y para los que puedan repetir el mismo patrón, una extensión explícita del contrato: bien un nuevo valor o anomalía de registro —análogo a `C8_APLICACIÓN_CON_RESERVA_CONCEPTUAL`— que permita cerrar una obra como `SIN_PRINCIPAL_CLASIFICABLE` con reserva conceptual asociada, bien un criterio explícito que autorice, en casos motivados, adoptar como principal la corriente más próxima disponible sin exigir retirada destructiva. Mientras esa decisión no se tome, `rebeldestiny` queda correctamente representado por su estado actual —`NO_IMPLEMENTADA`— y no debe forzarse un cierre.

**Estado final del caso tras este dictamen:** `ADJUDICACION_METODOLOGICA_EMITIDA` / `C9_PRINCIPAL_NO_RATIFICADO` / `RESERVA_CONCEPTUAL_CONFIRMADA` / `DEUDA_METODOLOGICA_DEL_SISTEMA_REGISTRADA` / `NO_IMPLEMENTADA` / `NO_AUTORIZADO_PARA_AVANZAR_AL_CASO_3`.
