# Auditoría · `sangbenvolviendo` · dimensiones parciales bajo `sin_principal_clasificable` · Atlas 2.0 · P3-E · Etapa 2.3M

**Instancia:** control probatorio previo a implementación. **Estado del caso: sigue en `SEMÁFORO: ROJO NORMATIVO`.** No se modifica `datos-atlas.js`, `datos-atlas.json` ni `scripts/validar-atlas.mjs`. No se relee el libro completo: esta auditoría trabaja sobre la lectura ya realizada (`lectura-decision-sangbenvolviendo-p3-etapa-2-3m.md`) y la amplía únicamente donde faltaba evidencia textual directa para las pruebas exigidas.

---

## 1. Estado del precedente Dubuisson

Verificado directamente sobre el repositorio, no sobre la memoria de la sesión anterior.

`dubuissonhaiti` está implementado en `datos-atlas.js`:

```
"recorrido":null,"recorridos_sec":["c5","c9"],
"arquitectura_recorrido":{"tipo":"sin_principal_clasificable","recorridos":[]},
"estado_recorrido":"confirmado"
```

Coincide exactamente con la representación que `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md` §12 proponía como válida.

`scripts/validar-atlas.mjs` (función `validateRecorridoArchitecture`, bloque `arquitectura.tipo === "sin_principal_clasificable"`) ya no exige `recorridosSec.length === 0`. La condición fue eliminada; el comentario que precede al bloque cita expresamente `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md` como la norma que autoriza entre 0 y 2 elementos en `recorridos_sec` bajo esta arquitectura.

El commit que introdujo ambos cambios es `506395a` — "dubuissonhaiti: implementa sin principal con dimensiones parciales", autoría de Roberto Almanza, `2026-09-09 17:45:32 +0000`. Es ancestro directo del `HEAD` actual (`500caac`); no hay divergencia de rama que reconciliar. `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md` está versionado (commiteado en el mismo `506395a`). Los cuatro validadores corren en 0 errores sobre el `HEAD` actual.

Corrección respecto al documento de bloqueo anterior (`lectura-decision-sangbenvolviendo-p3-etapa-2-3m.md`, §5): ese documento se apoyó en el texto de cierre de `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md` ("`DUBUISSONHAITI_NO_IMPLEMENTADA_TODAVIA`") sin verificar el estado vivo del repositorio. El texto de cierre describe el estado del documento en el momento en que Dirección Académica lo redactó; la implementación efectiva ocurrió después, en `506395a`, y el bloqueo que yo había registrado para `sangbenvolviendo` sobre esa base —la extensión de `sin_principal_clasificable` no estaba disponible— ya no es cierto.

```
PRECEDENTE_DUBUISSON_VIGENTE
```

No se reabre la decisión Dubuisson.

## 2. Tesis organizadora de Sang Ben

`Volviendo al Caribe` no declara una tesis única. La introducción lo dice de forma explícita: "la diversidad de temas abordados y la cantidad de obras leídas y sistematizadas demuestra, sin duda, que la autora quiere comprender el Caribe desde todas sus vertientes y temporalidades." El propio índice temático que la introducción ofrece (p. 19-20) presenta los cuatro capítulos como bloques autónomos, cada uno con su propio origen y ocasión: el capítulo I nace de una inquietud de hace treinta años sobre por qué el tema de la plantación domina la historiografía caribeña; el capítulo II nace de un evento académico de 2016 sobre integración regional; el capítulo III nace de la constatación de que el desconocimiento dominicano del Caribe anglófono y francófono es aún mayor que el del resto de la región; el capítulo IV nace del propósito de sistematizar la bibliografía caribeña leída por la autora. No hay, en ningún punto de la introducción, una afirmación que subordine unos capítulos a otros o que los presente como partes de un mismo argumento.

## 3. Función de C2

El capítulo I, "¿Por qué las plantaciones?", es una revisión historiográfica de diez autores (Moya Pons, Uc Sánchez, Mariñez, Martínez, García Muñíz, Márquez, Maglia Vercese, Vega, Pantojas, Naranjo) sobre la plantación azucarera como estructura económica y social que organizó la historia del Caribe insular. La cita que abre el capítulo transcribe a Moya Pons: "la unidad funcional del Caribe se percibe mejor al considerar el sistema de la plantación como la estructura económica subyacente." El capítulo entero —desde la importación de mano de obra esclavizada africana hasta la estructura racial y social resultante— se organiza bajo este eje. Es el objeto empírico declarado del capítulo, no un antecedente mencionado de paso.

## 4. Función de C4

Dentro del mismo capítulo I, la síntesis del trabajo de García Muñíz sobre Puerto Rico continúa la narrativa historiográfica más allá de la abolición: "los hacendados puertorriqueños se enfrentaron a una dislocación del sistema laboral con la abolición de la esclavitud en 1873. El liberto representó un papel clave en la transición a un mercado libre de mano de obra", seguida de la migración estacional del campesinado entre la zafra azucarera y la cosecha cafetalera. Es material postplantación genuino —trabajo libre, desposesión, migración estacional de mano de obra— pero aparece como la continuación cronológica del mismo argumento de Moya Pons sobre la plantación como estructura, dentro de la misma síntesis de un mismo autor citado, sin epígrafe, sección ni tratamiento propio que lo separe del eje esclavista que lo precede. Ningún otro pasaje del capítulo I retoma el tema postplantación de forma autónoma.

## 5. Función de C7

El capítulo II, "¿Integración caribeña? Un mito, un sueño", tiene como objeto exclusivo los proyectos de integración política regional entre Estados caribeños: la Confederación Antillana de Betances (siglo XIX), la CARICOM (vigente desde 1973), y la desaparecida Federación de las Antillas Holandesas (disuelta en 2010). La introducción del capítulo declara el diagnóstico que lo organiza: "ha sido precisamente la herencia de la fragmentación histórico-cultural, así como las diversas configuraciones de ordenamiento político... los elementos que más han condicionado la idea de la integración regional." Es el dispositivo estatal y la soberanía fragmentada de los Estados caribeños, no la circulación de personas, lo que el capítulo examina de principio a fin.

## 6. Función de C5

El capítulo III, "Viajando por el Caribe", se declara explícitamente como un viaje: "el desconocimiento de los dominicanos sobre el Caribe es más profundo si se trata del Caribe inglés y del Caribe francés"; el capítulo responde a ese vacío con dos partes, "viajes imaginarios" (a través de lecturas sobre el Caribe holandés y otras zonas poco conocidas) y bitácoras de viajes reales de la autora por el archipiélago. El propio epígrafe de Benedetti y García Márquez enmarca el capítulo como recorrido. Es circulación en primera persona, no como fenómeno social estudiado sino como método y objeto del capítulo mismo.

## 7. Retirada segmentaria individual

- **C2 (capítulo I):** retirar la plantación como estructura económica y social deja al capítulo sin objeto: su propio título pregunta "por qué las plantaciones", y los diez autores reseñados no tienen otro tema común. **DESTRUCTIVA.**
- **C4 (dentro del capítulo I):** retirar específicamente el pasaje sobre la dislocación laboral postabolición y la migración estacional (la síntesis de García Muñíz sobre 1873 en adelante) no afecta la tesis de Moya Pons que abre y sostiene el capítulo, ni la lectura de los otros nueve autores citados. El capítulo sigue respondiendo íntegramente a su propia pregunta sin ese pasaje. **NO_DESTRUCTIVA**, incluso a escala segmentaria: no hay allí una segunda sustantividad, sino una prolongación del mismo argumento de C2.
- **C7 (capítulo II):** retirar los proyectos de integración estatal deja al capítulo sin objeto: no queda nada más que reseñar. **DESTRUCTIVA.**
- **C5 (capítulo III):** retirar el viaje —real e imaginario— deja al capítulo sin objeto: es, literalmente, "viajando por el Caribe". **DESTRUCTIVA.**

## 8. Retirada global

Retirar C2 del libro completo no destruye los capítulos II, III y IV, que no dependen de él. Retirar C7 no destruye I, III y IV. Retirar C5 no destruye I, II y IV. Los tres ejes coexisten sin relación de dependencia entre sí: ninguno es condición de posibilidad de otro. **NO_DESTRUCTIVA** para los tres, en los tres sentidos.

## 9. Relación C2–C4

No forman una dimensión única por sustantividad compartida, sino por subordinación: C4 explica la continuación cronológica de lo que C2 estableció, dentro de la síntesis de un mismo autor citado (García Muñíz) y sin desarrollo propio en el resto del capítulo. No hay una relación constitutiva mutua (ninguno de los dos depende del otro para sostenerse: C2 sostiene el capítulo entero sin necesitar el pasaje postabolición; el pasaje postabolición sí depende de C2, porque no es inteligible sin la plantación esclavista que lo antecede). C4 no alcanza sustantividad segmentaria propia —falla la primera condición del §9 de `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md`— y por tanto no compite por un lugar en `recorridos_sec`: la dimensión del capítulo I es una sola, C2.

## 10. Prueba de reducción a máximo dos dimensiones

Las tres dimensiones que sí pasan sustantividad y retirada segmentaria destructiva son C2 (cap. I, pp. 27-74), C7 (cap. II, pp. 75-232) y C5 (cap. III, pp. 233-342): tres bloques de extensión comparable a un libro corto cada uno, no notas de color.

- **{C2, C7}, se pierde C5:** se pierde el capítulo III completo —110 páginas, objeto propio (el viaje), evidencia propia (bitácoras y lecturas sobre el Caribe holandés)—. No es información temática recuperable en fenómenos o territorio: es la ausencia total de uno de los cuatro objetos del libro.
- **{C2, C5}, se pierde C7:** se pierde el capítulo II completo —157 páginas, el más extenso del libro—, con su propio objeto (los proyectos de integración estatal) y su propia evidencia (Confederación Antillana, CARICOM, Federación de las Antillas Holandesas). Misma pérdida estructural.
- **{C7, C5}, se pierde C2:** se pierde el capítulo I completo —la revisión historiográfica de diez autores sobre la plantación—. Misma pérdida estructural.

Ninguna de las tres combinaciones reduce sin pérdida. No hay una combinación de dos que sea "académicamente válida" sin descartar arbitrariamente un capítulo entero y autosuficiente. Se descarta el Resultado A.

## 11. Prueba de frontera

Ningún par de los tres ejes muestra dependencia recíproca dentro de un mismo mecanismo. El capítulo I no presupone ni el capítulo II ni el capítulo III, y viceversa en cada caso: son, por diseño explícito de la autora (§2), bloques autónomos de una compilación. `FRONTERA_CONSTITUTIVA` queda descartada para los tres pares posibles (C2-C7, C2-C5, C7-C5).

## 12. Prueba de síntesis

`SINTESIS_MULTICORRIENTE` exige que tres o más corrientes sean irreductiblemente necesarias para el mismo principio organizador global. Aquí no hay un principio organizador global que las tres corrientes sostengan en conjunto: cada una organiza su propio capítulo con su propio objeto empírico, sin que ninguna de las otras dos sea necesaria para explicarlo. Que cada una organice un capítulo distinto no basta, y aquí ni siquiera hay una tesis unificadora subyacente que las convoque a las tres: la introducción declara expresamente que el libro es una compilación de "vertientes" autónomas, no un argumento sintético. Se descarta `SINTESIS_MULTICORRIENTE`.

## 13. Número mínimo de corrientes que deben preservarse

Tres: **C2, C7, C5.** Cada una cumple, de forma independiente y verificada en esta auditoría, las seis condiciones del §9 de `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md`: sustantividad segmentaria (§3, §5, §6), retirada segmentaria destructiva (§7), retirada global no destructiva (§8), fundamento textual individual (§3, §5, §6), descarte de principal (ninguna organiza el libro completo, §2), y descarte de frontera y síntesis (§11, §12). C4 fue evaluada y no califica: falla sustantividad segmentaria propia y retirada segmentaria destructiva (§4, §7, §9).

## 14. Compatibilidad con contrato vigente

El contrato vigente, extendido por `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md` §9, autoriza `recorridos_sec` de cero a **dos** elementos bajo `sin_principal_clasificable`. `sangbenvolviendo` exige preservar tres. Ninguna representación dentro del contrato actual lo hace sin pérdida (§10) ni sin falsear el dictamen. No es el mismo problema que resolvió Dubuisson —dos dimensiones, cardinalidad ya contemplada—: es un problema nuevo, de cardinalidad tres.

## 15. Dictamen

**Resultado B.** `sangbenvolviendo` tiene tres dimensiones sustantivas parciales indispensables —C2, C7, C5— que cumplen simultáneamente las seis condiciones exigidas, y ninguna combinación de dos las representa sin pérdida estructural real. Esto confirma una laguna normativa nueva, distinta de la que resolvió el precedente Dubuisson: el límite de cardinalidad de `recorridos_sec` (máximo dos) bajo `sin_principal_clasificable`.

Conforme a la regla decisiva de esta auditoría, no se amplía aquí ese máximo. El problema se entrega a Dirección Académica.

`sangbenvolviendo` permanece en **ROJO NORMATIVO**, sin implementar. No se modifica `datos-atlas.js`, `datos-atlas.json` ni `scripts/validar-atlas.mjs`.

## 16. Nivel de certeza

**ALTA** en la identificación de las tres dimensiones y en el descarte de frontera y síntesis: la evidencia textual es directa y no admite lectura alternativa razonable (cada capítulo declara su propio objeto en su primera página, y la introducción declara expresamente la falta de un argumento unificador). **ALTA** también en el descarte de C4 como dimensión independiente: el pasaje postabolición no tiene desarrollo propio fuera de la síntesis de un único autor citado dentro del capítulo I.

## 17. Estado

```
RECONCILIACION_PREVIA_COMPLETA
PRECEDENTE_DUBUISSON_VIGENTE
CORRECCION_REGISTRADA_SOBRE_BLOQUEO_ANTERIOR
TRES_DIMENSIONES_INDISPENSABLES_IDENTIFICADAS (c2, c7, c5)
C4_DESCARTADA_COMO_DIMENSION_INDEPENDIENTE
FRONTERA_CONSTITUTIVA_DESCARTADA
SINTESIS_MULTICORRIENTE_DESCARTADA
REDUCCION_A_DOS_DIMENSIONES_IMPOSIBLE_SIN_PERDIDA
LAGUNA_NORMATIVA_DE_CARDINALIDAD_CONFIRMADA (RESULTADO B)
NO_SE_AMPLIA_EL_CONTRATO
NO_IMPLEMENTADO
CASO_ROJO_NORMATIVO
PENDIENTE_DECISION_DIRECCION_ACADEMICA
```
