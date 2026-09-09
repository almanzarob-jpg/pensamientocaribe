# LECTURA PROBATORIA DESDE CERO — CASO 10/10 — `escalante` — P3-A · Etapa 2.3H

**Naturaleza de este documento.** Lectura académica probatoria, independiente y auditable. No es decisión académica, no implementa recorridos, no modifica datos técnicos y no cierra el Sublote P3-A.

---

## 0. CONTROL DE CIERRE DEL CASO 9

Verificación read-only del nodo `roberts` en ambos archivos:

```
recorrido: "c3"
recorridos_sec: ["c7"]
arquitectura_recorrido: null
estado_recorrido: "confirmado"
fuente_recorrido: ["decision-academica-roberts-p3-etapa-2-3h.md"]
```

Coincide exactamente, campo por campo, en `datos-atlas.js` y `datos-atlas.json`, con lo que fue aprobado. No se reabren C3, C7, C8, C9, las relaciones de Roberts ni `l: "jamaica"`.

**`CASO_9_CERRADO_ACADEMICA_Y_TECNICAMENTE`**

---

## 1. IDENTIFICACIÓN INDEPENDIENTE DEL CASO 10/10

Consultadas en el orden indicado:

1. **`apertura-recalibracion-p3-etapa-2-3g.md`** (líneas 210, 286, 288, 345, 406): registra `escalante` como Caso 10/10, obra *El Palenque de San Basilio*, Aquiles Escalante, candidatura C3, territorio "palenque", tradición hispano (Colombia), grado relacional 7. Señala explícitamente: **"AMBIGUA (solo anexo 6 pp.)"** — "solo se localizó un anexo/reseña de 6 páginas (`RdC_7_385-390_ESCALANTE_anexo.pdf`), no la monografía completa de 1954." Este documento ya anticipaba la limitación que se confirma en §4–§5 de esta lectura.
2. **`cola-lectura-pendiente-atlas-2.md`** (línea 82): registra `escalante` con candidatura C3, ancla en el fenómeno núcleo `cimarronaje_territorial`, estado `PENDIENTE_NO_LEIDA`, sublote P3.
3. **Nodo `escalante` en `datos-atlas.js`** y **4. en `datos-atlas.json`** (idénticos entre sí):

```
id: "escalante"
k: "obra"
t: "El Palenque de San Basilio"
a: "Aquiles Escalante"
y: "1954"
f: ["cimarronaje", "memoria"]
l: "palenque"
tr: "hispano (Colombia)"
ap: "La primera etnografía académica de Palenque; abre el campo que Friedemann y Patiño Rosselli continuarán treinta años después."
recorrido: null
recorridos_sec: []
arquitectura_recorrido: null
estado_recorrido: "pendiente"
```

Las cuatro fuentes **coinciden** en la identidad nominal del nodo (autor, título registrado, año, territorio, candidatura heredada C3). No hay `CONTRADICCION_DE_IDENTIFICACION_CASO_10` sobre *cuál* nodo/obra se trata.

Reconstrucción adicional:

- **Relaciones entrantes/salientes**: 7 (ver §18).
- **Fuente local disponible**: `RdC_7_385-390_ESCALANTE_anexo.pdf`, ruta `~/Pagina/Biliografia /RdC_7_385-390_ESCALANTE_anexo.pdf` — 6 páginas, sin más versiones localizadas en el proyecto.
- **Candidatura heredada**: C3 (Fugas, cimarronajes y emancipaciones). Se trata, según §3, como `ANTECEDENTE_A_AUDITAR_NO_EVIDENCIA`.

Lo que **no** coincide es la identidad exacta entre el registro (`t: "El Palenque de San Basilio"`, 1954) y el contenido real del único archivo localizable — ver §4 y §5, donde se documenta como incidencia bibliográfica, no como contradicción de identificación del nodo.

---

## 2. REGLA DE CONTRADICCIÓN

No aplica `CONTRADICCION_DE_IDENTIFICACION_CASO_10`: las cuatro fuentes identifican inequívocamente el mismo nodo. La discrepancia detectada es de otro orden (bibliográfico/material) y se trata en §4–§5 y §21.

---

## 3. PRINCIPIO DE INDEPENDENCIA

Se trata como `ANTECEDENTE_A_AUDITAR_NO_EVIDENCIA` toda la información heredada: candidatura C3, etiquetas `f: ["cimarronaje","memoria"]`, `ap`, las 7 relaciones, la cola, decisiones de Casos 1–9 y cualquier semejanza con Roberts, Fouchard, Helg u otras obras del corpus. La obra habla primero. Ninguna mención de fuga, palenque o cimarronaje se admite como corriente principal automáticamente por la candidatura heredada; la clasificación de §9–§11 se reconstruye exclusivamente desde el texto disponible.

---

## 4. LOCALIZACIÓN DEL ARCHIVO FUENTE

Único archivo localizado en el proyecto asociable a `escalante`:

**Ruta:** `~/Pagina/Biliografia /RdC_7_385-390_ESCALANTE_anexo.pdf`

**Metadatos técnicos del PDF** (`pdfinfo`): 6 páginas, tamaño A4, sin cifrado, creado originalmente en 2010 (reexportado 2026), sin ISBN (es un artículo de revista, no un libro).

**Identificación bibliográfica real del contenido** (verificada leyendo el propio texto y su nota al pie 1):

> Aquiles Escalante, **"Palenques en Colombia"**, en *Sociedades cimarronas*, Richard Price (comp.), Siglo Veintiuno, México, **1981**, pp. 72-78. Reimpreso en *Revista del CESLA*, No. 7, pp. 385-390.

Esto es **distinto** del registro del nodo (`t: "El Palenque de San Basilio"`, `y: "1954"`). Es el mismo autor, pero:

- el registro apunta a una **monografía específica sobre San Basilio** (1954, con 2ª ed. 1979 según se corrobora indirectamente en §18);
- el archivo disponible es un **artículo panorámico sobre varios palenques colombianos** (no solo San Basilio), publicado originalmente en 1981 dentro de una antología comparativa editada por Richard Price.

Se registra como incidencia bibliográfica mayor en §21; no se corrige el nodo (prohibido en esta fase).

**Tipo de archivo determinado:** artículo de revista/capítulo de antología (6 pp.), **no** la monografía completa registrada. Es la única versión disponible en el proyecto; no hay otra con la que comparar.

---

## 5. CONTROL MATERIAL DE LA FUENTE

Revisión de portada, introducción, desarrollo, cierre, notas y bibliografía del archivo disponible:

- **Portada/encabezado**: no tiene portada de libro; encabeza con el nombre del autor y el título del artículo.
- **Introducción**: sí, párrafo inicial de marco teórico general sobre formas de resistencia esclava.
- **División en capítulos**: no aplica; es un artículo corrido, sin subtítulos internos, organizado narrativamente por episodios/casos.
- **Cierre**: el texto termina con el párrafo sobre incorporación económica de San Basilio al siglo XX (ingenios azucareros, migración laboral); no hay una sección de "conclusiones" explícitamente rotulada.
- **Notas**: una nota al pie (la cita bibliográfica de origen del artículo).
- **Bibliografía**: sí, 5 referencias (Aragón 1939; De Escariche 1948; Mogollón s.f.; Posada e Ibáñez 1910; Urueta 1890).

Dentro de sus propios límites (pp. 385–390), el archivo está **completo**: la paginación es continua y no faltan páginas. Pero, como se documentó en §4, este archivo completo es solo un **fragmento muy pequeño** frente a la obra que el nodo registra (una monografía de 1954/1979 sobre El Palenque de San Basilio, presumiblemente de extensión muy superior a 6 páginas).

**`LIMITACION_MATERIAL_DE_FUENTE`**

Evaluación de si impide la lectura probatoria: **no la impide por completo**, porque el artículo disponible es sustantivo, autocontenido, del mismo autor, y centrado significativamente (aunque no exclusivamente) en San Basilio. **Sí limita su alcance**: esta lectura es probatoria del *artículo* "Palenques en Colombia" (1981), y solo indirecta y circunstancialmente probatoria de la *monografía* registrada como obra del nodo (1954/1979). Esta distinción se mantiene explícita en todo el documento y se traslada como pregunta decisoria en §25.

---

## 6. COBERTURA REAL DE LECTURA

- **Leído secuencialmente**: el 100% del cuerpo argumental del archivo disponible (las 6 páginas completas, extraídas y leídas en su totalidad, incluyendo la nota al pie y la bibliografía final).
- **Revisado mediante búsqueda dirigida**: no fue necesario; el archivo es corto y se leyó íntegro de corrido.
- **No leído**: la monografía registrada en el nodo (*El Palenque de San Basilio*, 1954/1979), que no se localizó en el proyecto.

En este caso, a diferencia de obras extensas, **100% del cuerpo argumental del archivo disponible coincide con 100% del archivo disponible** (no hay notas extensas, anexos o apéndices separados que solo se hayan revisado de forma dirigida). Pero debe distinguirse con toda claridad de un tercer porcentaje que **no aplica aquí por ausencia de acceso**: el porcentaje de la obra *registrada* (monografía 1954/1979) efectivamente leído, que es **0%**.

---

## 7. RECONSTRUCCIÓN DEL PROBLEMA ANTES DE TAXONOMIZAR

*(Reconstrucción hecha exclusivamente sobre "Palenques en Colombia", el texto realmente disponible.)*

### A. Problema central

Explicar cómo surgieron, resistieron y —en unos casos— sobrevivieron o —en otros— fueron destruidos o disueltos los palenques (asentamientos de esclavizados fugados) en distintas regiones de la actual Colombia, desde el siglo XVI hasta comienzos del XX.

### B. Pregunta

No hay formulación explícita en forma de pregunta. **Pregunta reconstruida (inferida):** ¿por qué algunos palenques colombianos fueron destruidos por la fuerza, otros disueltos mediante reducción misional, y uno —San Basilio— logró sobrevivir como comunidad autónoma reconocida hasta el presente?

### C. Tesis

No hay tesis explícita en forma de enunciado único; el texto es fundamentalmente narrativo-documental. La tesis implícita reconstruible es: la supervivencia diferencial de los palenques colombianos no depende solo de la capacidad de resistencia militar, sino del tipo de desenlace político-jurídico alcanzado con la administración colonial —destrucción armada (Castillo), disolución por reducción misional (Mocoa) o negociación con concesión de tierras y reconocimiento administrativo (San Basilio)—, siendo esta última vía la que permitió a San Basilio persistir como población diferenciada.

No se confunde tema (cimarronaje/palenques en Colombia) con esta tesis (la vía negociada de titulación territorial explica la supervivencia diferencial).

### D. Objeto

Comunidades cimarronas (palenques) en distintas regiones de Colombia: La Ramada (Santa Marta), El Castillo (valle del Patía, Popayán), la misión de Mocoa, un palenque no nombrado explícitamente en el río Magdalena (jurisdicción disputada entre Cartagena y Santa Marta, 1654), y —con mayor desarrollo— San Basilio de Palenque (Bolívar), fundado por Benkos Biohó.

### E. Método

**Historia social basada en archivo documental**: transcripción y glosa de actas del Cabildo de Cartagena (siglo XVI), relaciones virreinales, crónicas regionales (Aragón, De Escariche, Mogollón) y compilaciones documentales (Urueta, *Documentos para la historia de Cartagena*). No es etnografía de campo —pese a que la `ap` heredada del nodo lo llama "la primera etnografía académica de Palenque"—: este texto específico no describe trabajo de campo, informantes vivos ni observación directa; es reconstrucción histórico-documental.

### F. Corpus de fuentes

Actas del Cabildo de Cartagena (transcritas in extenso); la *Relación* del virrey Mendinueta; Aragón, *Fastos payaneses* (1939); De Escariche, biografía de Pedro Zapata (1948); Mogollón, compilación de historia/leyenda de Cartagena; Posada e Ibáñez, *Relaciones del mando* (1910); Urueta, *Documentos para la historia de Cartagena* (1890).

### G. Temporalidad

Desde finales del siglo XVI (últimas décadas, pregones del Cabildo de Cartagena) hasta comienzos del siglo XX (1907, ingenio de Sincerín; migración a la zona bananera del Magdalena y al canal de Panamá, ambas hacia 1904-1914). Más de 300 años.

### H. Escala territorial

**Regional/nacional** dentro de Colombia: Cartagena, Santa Marta/La Ramada, Popayán/valle del Patía, Mocoa (actual Putumayo), y el actual departamento de Bolívar (San Basilio, Mahates, Malagana). No es una escala local única (contra lo que sugeriría el título registrado, centrado solo en San Basilio) ni tampoco Caribe/Atlántico transnacional: es un panorama intracolombiano comparativo.

### I. Conceptos organizadores

**Palenque** (asentamiento fortificado de cimarrones); **cimarronaje/fuga** como forma de resistencia; **reducción** (sometimiento negociado o forzado); **titulación de tierras/comunales** como mecanismo de reconocimiento. Sin estos conceptos el argumento no funciona.

### J. Mecanismo explicativo

La relación entre **tipo de desenlace político-jurídico** (destrucción militar / disolución misional / negociación con concesión de tierras) y **supervivencia o desaparición del asentamiento** es lo que permite que el texto sea explicativo (por qué San Basilio persiste y otros no) y no meramente descriptivo (una simple crónica de episodios de fuga).

---

## 8. ARQUITECTURA ARGUMENTAL

El artículo no está dividido en capítulos; se reconstruye por unidades narrativas:

| Unidad | Pregunta | Evidencia | Concepto | Función argumentativa |
|:---:|:---:|:---:|:---:|:---:|
| 1. Marco general | ¿Cómo reaccionaron los esclavizados a la explotación? | Enunciado inicial de tipología de resistencia (ociosidad, fuga individual/colectiva) | Formas de resistencia | Encuadre teórico general (DENSIDAD_EMPIRICA baja, marco) |
| 2. Marco legal-punitivo de Cartagena (s. XVI) | ¿Cómo respondió la administración colonial a la fuga? | Actas del Cabildo transcritas (penas, plazos, recompensas) | Represión jurídica de la fuga | Establece el régimen represivo como telón de fondo (CONTEXTUAL) |
| 3. Episodio: La Ramada (Santa Marta) | ¿Qué consecuencias tuvo la fuga colectiva? | Incendio de Santa Marta por negros refugiados | Insurgencia cimarrona | Ejemplo breve, ilustrativo |
| 4. Episodio: El Castillo (Patía, Popayán) | ¿Puede el Estado colonial someter un palenque por la fuerza? | Expediciones fallidas, negociación fallida (1732), derrota militar (1745) | Resistencia armada / negociación fallida | Caso de destrucción por vía militar (contraste con San Basilio) |
| 5. Episodio: Misión de Mocoa | ¿Qué alternativa hay a la destrucción militar? | Relación del virrey Mendinueta (1793) | Reducción misional conjunta (indígenas + fugitivos) | Caso de disolución por absorción misional (contraste) |
| 6. Episodio: Palenque del río Magdalena (1654) | ¿Cómo se dirime la jurisdicción sobre un palenque? | Disputa Cartagena/Santa Marta (Pedro Zapata, Gabriel de Mencos) | Jurisdicción/frontera administrativa | Introduce la dimensión de soberanía/frontera colonial |
| 7. Episodio central: San Basilio de Palenque | ¿Por qué sobrevive este palenque y no los otros? | Fundación por Benkos Biohó, romance Orika/Campos, negociación con Juan Polo, ejecución de Benkos, reducción definitiva (Casiani, 1713-1717), titulación de tierras (1774/1779), aislamiento económico hasta el s. XIX, incorporación laboral (ingenios 1907, migración a Panamá/zona bananera) | Negociación + titulación territorial + condición de exclusividad ("no admitir nuevos prófugos") | Núcleo explicativo: mecanismo de supervivencia diferencial (NECESIDAD_ARQUITECTONICA) |
| 8. Bibliografía | — | 5 referencias documentales | — | Aparato erudito, no argumentativo |

La unidad 7 concentra la `NECESIDAD_ARQUITECTONICA` real del texto: es la única donde el mecanismo explicativo (negociación + tierra + condición de exclusividad) queda completo. Las unidades 3–6 aportan `DENSIDAD_EMPIRICA` comparativa (sirven de contraste), pero ninguna por sí sola sostiene la pregunta si se retira.

---

## 9. ANÁLISIS OBLIGATORIO C1–C10

### C1 — Mundos indígenas

1. **Evidencia**: "indios montareces" mencionados como fuerza auxiliar útil para combatir cimarrones (episodio San Basilio); "doscientos indios" reducidos junto a negros fugitivos en la misión de Mocoa; "naturales comarcanos" obligados por decreto a ayudar a capturar cimarrones.
2. **Localización**: episodios de Mocoa y San Basilio (disputa jurisdiccional).
3. **Densidad**: muy baja (tres menciones breves, instrumentales).
4. **Distribución**: puntual, no desarrollada.
5. **Función**: los indígenas aparecen como mano de obra auxiliar de la represión colonial o como co-sujetos de reducción misional; nunca como objeto de análisis en sí.
6. **Vínculo con tesis**: ninguno directo; no organiza ni la pregunta ni el mecanismo.
7. **Prueba de retirada**: si se retiran estas menciones, el argumento no cambia en nada.
8. **Clasificación provisional**: **INCIDENTAL**

### C2 — Trata, esclavización y plantación

1. **Evidencia**: marco general de "explotación" como causa de la fuga; actas punitivas del Cabildo de Cartagena (castigos a esclavizados fugados); referencias a "amos," "esclavos," compra-venta de personas (Domingo Bioho "adquirido por el comerciante Juan de Palacios").
2. **Localización**: unidad 1 (marco) y unidad 2 (legal-punitivo), y de forma dispersa en el episodio de San Basilio.
3. **Densidad**: media (una sección completa dedicada al régimen legal punitivo).
4. **Distribución**: concentrada al inicio, reaparece de forma dispersa.
5. **Función**: establece el régimen represivo y las condiciones de sujeción de las que se huye; es *contexto necesario* para entender por qué existe la fuga, no objeto de análisis en sí.
6. **Vínculo con tesis**: la esclavización se estudia aquí para comprender la fuga (dirección C2→sirve a C3), no al revés — ver escrutinio dedicado en §12.
7. **Prueba de retirada**: si se retira el detalle jurídico-punitivo del s. XVI, la pregunta y el mecanismo (por qué unos palenques sobreviven y otros no) permanecen intactos; solo se pierde color de época y evidencia ilustrativa. `DENSIDAD_EMPIRICA`, no `NECESIDAD_ARQUITECTONICA`.
8. **Clasificación provisional**: **CONTEXTUAL**

### C3 — Fugas, cimarronajes y emancipaciones

1. **Evidencia**: la totalidad del texto. Es literalmente su objeto declarado ("Palenques en Colombia"): fuga individual/colectiva, formación de palenques, rebeliones, negociaciones, reducción, supervivencia de San Basilio.
2. **Localización**: las 8 unidades del texto sin excepción.
3. **Densidad**: máxima; no hay párrafo ajeno al tema.
4. **Distribución**: total, sin interrupción.
5. **Función**: organiza la pregunta, la tesis, el archivo documental convocado, la secuencia narrativa (episodio tras episodio de palenques) y la causalidad explicativa (por qué unos sobreviven y otros no).
6. **Vínculo con tesis**: es la tesis misma.
7. **Prueba de retirada**: si se retira el cimarronaje/palenque, no queda texto. Es la condición de existencia del argumento completo.
8. **Clasificación provisional**: **PRINCIPAL**

**Escrutinio especial (§11)** — ver más abajo.

### C4 — Postplantación, trabajo y desposesión

1. **Evidencia**: párrafo final sobre incorporación de San Basilio a la economía nacional: ingenio de Sincerín (1907), ingenio Santa Cruz, salarios por primera vez percibidos, migración laboral al canal de Panamá y a la zona bananera del Magdalena.
2. **Localización**: solo el último párrafo de la unidad 7 (cierre del texto).
3. **Densidad**: baja en extensión (un párrafo de seis páginas), pero temáticamente definida.
4. **Distribución**: puntual, al final, sin desarrollo previo.
5. **Función**: cierra el arco narrativo mostrando el tránsito de aislamiento cimarrón a incorporación económica nacional; funciona como coda, no como eje.
6. **Vínculo con tesis**: complementa el desenlace de la tesis de supervivencia, pero no es su mecanismo explicativo (ese mecanismo es jurídico-territorial, no laboral — ver C7).
7. **Prueba de retirada**: si se retira este párrafo, la pregunta central (por qué San Basilio sobrevivió al periodo colonial) permanece explicada; solo se pierde el epílogo sobre qué pasó después. `DENSIDAD_EMPIRICA` cerrando el relato, no arquitectura.
8. **Clasificación provisional**: **CONTEXTUAL**

### C5 — Rutas, diásporas y territorios acuosos

1. **Evidencia**: menciones geográficas de ríos y ciénagas (río Magdalena, ciénaga de Matuna) como escenarios; rutas de migración laboral al final (Panamá, zona bananera).
2. **Localización**: dispersa, como telón geográfico.
3. **Densidad**: baja.
4. **Distribución**: puntual.
5. **Función**: marcadores de locación, no un análisis de rutas o territorios acuáticos como tal.
6. **Vínculo con tesis**: ninguno directo.
7. **Prueba de retirada**: sin efecto en el argumento.
8. **Clasificación provisional**: **INCIDENTAL**

### C6 — Huracanes, ecologías y catástrofes climáticas

1. **Evidencia**: ninguna.
2–7: no aplica.
8. **Clasificación provisional**: **AUSENTE**

### C7 — Soberanías, fronteras y ocupaciones

1. **Evidencia**: Benkos Biohó se autoproclama con títulos regios ("Rey del Arcabuco", "el Rey Benkos"); disputa jurisdiccional explícita entre las gobernaciones de Cartagena y Santa Marta por el palenque del río Magdalena (1654, con dictamen de Gabriel de Mencos); negociación de condiciones de asentamiento con Juan Polo; titulación formal de tierras ("comunales de San Basilio", 1774, título de 1779); condición impuesta de exclusividad territorial ("no admitiría ni abrigaría... a ningún desertor ni esclavo").
2. **Localización**: unidad 6 (disputa jurisdiccional) y, sobre todo, unidad 7 (San Basilio: proclamación regia, negociación, titulación).
3. **Densidad**: alta dentro de las unidades donde aparece.
4. **Distribución**: concentrada pero decisiva.
5. **Función**: **es el mecanismo mismo que explica la supervivencia diferencial** de San Basilio frente a los demás palenques: no es la resistencia armada lo que lo salva (eso fracasa en El Castillo), sino la transformación de un refugio cimarrón en una entidad territorial reconocida, con jurisdicción y tierra propias, mediante negociación.
6. **Vínculo con tesis**: constitutivo. La tesis reconstruida en §7.C ("la vía negociada de titulación territorial explica la supervivencia diferencial") **es**, en sustancia, un enunciado sobre soberanía/frontera/territorio.
7. **Prueba de retirada**: si se retira toda la dimensión de negociación jurisdiccional y titulación de tierras, desaparece el mecanismo explicativo distintivo del texto (por qué San Basilio y no El Castillo o Mocoa); quedaría solo una crónica de episodios de fuga sin explicación de por qué unos sobreviven y otros no. Esto es `NECESIDAD_ARQUITECTONICA`, no `DENSIDAD_EMPIRICA`.
8. **Clasificación provisional**: **SECUNDARIA_ESTRUCTURANTE**

### C8 — Creolizaciones

1. **Evidencia**: una sola cita histórica (transcripción de 1772): "hablan entre sí un particular idioma en que a sus solas instruyan a los muchachos sin embargo de que cortan con mucha expedición el castellano de que generalmente usan."
2. **Localización**: un único fragmento citado, dentro de la unidad 7.
3. **Densidad**: mínima (una frase).
4. **Distribución**: puntual, no desarrollada por el autor (es una cita documental de tercero, no un análisis propio de Escalante).
5. **Función**: nota de color dentro de la descripción de 1772; no hay análisis de mezcla lingüística, formación cultural o proceso de creolización.
6. **Vínculo con tesis**: ninguno; no se retoma en ningún otro punto del texto.
7. **Prueba de retirada**: si se retira esta cita, nada del argumento cambia.
8. **Clasificación provisional**: **INCIDENTAL**

### C9 — Archivos vivos, espiritualidades y saberes transmitidos

1. **Evidencia**: ninguna práctica ritual, espiritual o de transmisión oral de saberes es descrita o analizada en el texto.
2–7: no aplica.
8. **Clasificación provisional**: **AUSENTE**

### C10 — Cuerpos, parentescos y eróticas

1. **Evidencia**: episodio narrativo desarrollado del romance entre la princesa Orika (hija de Benkos Biohó) y el capitán español cautivo Francisco de Campos, incluyendo el antecedente de la relación amorosa previa de Benkos y su familia en cautiverio, y el desenlace (fuga planeada, muerte de Campos, condena a muerte de Orika).
2. **Localización**: un pasaje autónomo y relativamente extenso dentro de la unidad 7 (aproximadamente un quinto del texto total).
3. **Densidad**: notable para un texto tan breve; es el único pasaje con desarrollo narrativo dramático propio.
4. **Distribución**: puntual pero desarrollada, no una simple mención de una frase.
5. **Función**: humaniza y dramatiza el episodio de Benkos Biohó; ilustra el cruce de vínculos afectivos y de parentesco a través de la línea captor/cautivo, pero no es retomado fuera de ese episodio ni conecta con el mecanismo explicativo de la supervivencia territorial (C7).
6. **Vínculo con tesis**: ilustrativo/narrativo, no estructurante; el desenlace de Orika (su condena) no incide en el resultado que sí importa para la tesis (la negociación posterior de tierras, protagonizada por otros actores).
7. **Prueba de retirada**: si se retira el episodio Orika/Campos, la pregunta y el mecanismo explicativo (negociación + tierra) permanecen intactos; se pierde un episodio vívido, no la arquitectura.
8. **Clasificación provisional**: **CONTEXTUAL** (se distingue de INCIDENTAL por su desarrollo narrativo real, no una mera mención de una línea; pero no alcanza rango estructurante porque no participa del mecanismo explicativo del texto).

---

## 10. CLASIFICACIONES PERMITIDAS

Se usaron exclusivamente: `PRINCIPAL`, `SECUNDARIA_ESTRUCTURANTE`, `CONTEXTUAL`, `INCIDENTAL`, `AUSENTE`. No se crearon escalas intermedias.

---

## 11. ESCRUTINIO ESPECIAL DE C3

La candidatura heredada es C3, por lo que se le exige el estándar más alto.

> ¿La fuga, el cimarronaje o la emancipación constituyen el problema que la obra intenta explicar, o aparecen como episodios dentro de un argumento diferente?

Respuesta razonada: **constituyen el problema mismo**, no episodios de otro argumento. El texto no tiene ningún otro objeto declarado; su título, su estructura episódica completa y su bibliografía documental están dedicados exclusivamente a reconstruir la historia de los palenques colombianos.

- **A. Historia de cimarronaje como objeto principal**: **sí**, sin reservas. No hay un objeto distinto (por ejemplo, una historia económica regional o una historia eclesiástica) del que el cimarronaje sea apenas un capítulo.
- B/C/D: no aplican; no hay evidencia de que el cimarronaje sea mecanismo, evidencia episódica o simple mención dentro de un argumento ajeno.

**Verificación de que C3 organiza:**

- la pregunta: sí (§7.B);
- la tesis: sí (§7.C, es su contenido mismo);
- el archivo: sí (todas las fuentes documentales citadas son actas, relaciones y crónicas sobre fuga/palenques);
- la secuencia narrativa: sí (episodio tras episodio de palenques);
- la causalidad: sí, aunque —y esto es importante— el *mecanismo causal específico* que explica el desenlace diferencial no es la fuga en sí misma, sino la vía política-territorial que sigue a la fuga (ver C7 y §14).

No basta la sola presencia de palenques y fugitivos para esta clasificación, pero aquí se cumplen los cinco criterios de organización, no solo la presencia. **PRINCIPAL se confirma con el estándar más alto exigido.**

---

## 12. ESCRUTINIO DE C2 ↔ C3

> ¿La esclavitud se estudia para comprender la fuga, o la fuga se estudia para comprender el régimen esclavista?

El texto estudia la esclavitud (el marco legal-punitivo de Cartagena, las condiciones de sujeción) **para comprender la fuga y sus consecuencias**, no al revés. No hay en ningún punto un análisis del régimen esclavista como institución económica o social en sí misma (no se discute la organización de la plantación, la economía de la trata, la demografía esclava); el material sobre esclavización aparece siempre subordinado a explicar por qué se huye y qué arriesga quien huye.

**Conclusión**: **C3 PRINCIPAL + C2 no estructurante** (CONTEXTUAL). No se presupuso una frontera constitutiva entre esclavitud y fuga; se verificó la dirección de dependencia y esta resultó unívoca.

---

## 13. PRUEBA DE RETIRADA

Aplicada explícitamente a cada corriente con densidad significativa (C2, C3, C4, C7, C10) en el punto 7 del análisis de cada una en §9. Resultado resumido:

- C3: sin ella no hay texto — **supera la prueba** (arquitectónica).
- C7: sin ella desaparece el mecanismo explicativo de la supervivencia diferencial — **supera la prueba** (arquitectónica).
- C2: sin ella se pierde solo contexto/color de época — **no supera la prueba** (`DENSIDAD_EMPIRICA`).
- C4: sin ella se pierde solo el epílogo — **no supera la prueba** (`DENSIDAD_EMPIRICA`).
- C10: sin ella se pierde un episodio narrativo vívido pero no el mecanismo — **no supera la prueba** (`DENSIDAD_EMPIRICA`).

---

## 14. PRUEBA DE DOMINANCIA

C3 y C7 superan retirada. Se pregunta en qué dirección circula la explicación:

- ¿C3 explica C7? No: la fuga por sí sola no explica por qué la negociación territorial tuvo éxito en un caso y no en otro.
- ¿C7 explica C3? Tampoco en sentido estricto: sin la fuga y la formación del palenque no habría nada que negociar territorialmente.
- **Relación real**: C3 es la condición de existencia del fenómeno (sin fuga no hay palenque); C7 es el mecanismo que explica su desenlace diferencial (por qué un palenque sobrevive y otro no). Son funciones distintas y complementarias, no una relación de explicación mutua simétrica.
- La dominancia se decide aquí por **función en la arquitectura del argumento**, no por páginas: C3 organiza el objeto y la totalidad del relato; C7 organiza el momento explicativo decisivo (el porqué del desenlace). C3 es la corriente que sostiene el texto entero; C7 es estructurante pero subordinada en el sentido de que aparece como el mecanismo *dentro de* la historia de cimarronaje, no como un objeto autónomo paralelo.

**Resultado**: C3 domina como PRINCIPAL; C7 es SECUNDARIA_ESTRUCTURANTE (no hay empate ni frontera simétrica).

---

## 15. FRONTERA_CONSTITUTIVA

Condiciones: (1) dos corrientes superan retirada — sí, C3 y C7; (2) ambas irreductibles — C3 sí, C7 sí; (3) ninguna subordina consistentemente a la otra — **no se cumple**: C7 sí queda subordinada consistentemente a C3 como mecanismo explicativo dentro de la historia de cimarronaje, según §14; (4) convertir una en secundaria deforma la obra — no deforma nada convertir a C7 en secundaria, es precisamente su función.

**`FRONTERA_CONSTITUTIVA = NO`**

---

## 16. SINTESIS_MULTICORRIENTE

Solo dos corrientes (C3, C7) superan retirada, no tres o más, y sí existe dominancia clara de C3.

**`SINTESIS_MULTICORRIENTE = NO`**

---

## 17. VACIO_TAXONOMICO_POSIBLE

> ¿Existe una dimensión central de `escalante` que C1–C10 no puedan representar sin deformarla?

La dimensión más distintiva del texto —la disputa jurisdiccional colonial y la titulación de tierras como mecanismo de supervivencia— **sí tiene representación adecuada** dentro de C7 (Soberanías, fronteras y ocupaciones). No se identifica una dimensión que quede fuera de las diez corrientes; no se confunde aquí originalidad historiográfica (el uso de actas coloniales transcritas) con vacío taxonómico.

**`VACIO_TAXONOMICO_POSIBLE = NO`**

---

## 18. AUDITORÍA DE RELACIONES

Siete relaciones registradas que tocan a `escalante`. Se documentan con la identidad exacta de la obra en el otro extremo (verificada en `datos-atlas.json`) y su cronología.

### 18.1 `friedemannlengua` ↔ `escalante`

- **Dirección**: `friedemannlengua → escalante` (a=friedemannlengua, b=escalante). **Tipo**: resonancia.
- **Fuente registrada**: "Comparten el fenómeno Cimarronaje / fuga. Por corroborar el vínculo directo."
- **Identidad exacta del otro extremo**: Carlos Patiño Rosselli & Nina S. de Friedemann, *Lengua y sociedad en el Palenque de San Basilio*, 1983.
- **Evidencia encontrada**: el fenómeno compartido declarado (cimarronaje/fuga) es consistente con el contenido de `escalante` (que trata centralmente ese fenómeno), pero el propio registro admite que el "vínculo directo" está "por corroborar"; no se puede verificar desde la sola lectura de `escalante` si Patiño-Friedemann (1983) cita efectivamente a este artículo.
- **Cronología**: 1983 (friedemannlengua) es posterior a 1981 (escalante, "Palenques en Colombia") — dirección de cita cronológicamente posible, sin error.
- **Clasificación**: **NO_VERIFICABLE_DESDE_ESTA_LECTURA**

### 18.2 `escalante` ↔ `totumo`

- **Dirección**: `escalante → totumo`. **Tipo**: resonancia.
- **Fuente registrada**: misma fórmula genérica ("Comparten el fenómeno Cimarronaje / fuga. Por corroborar el vínculo directo.").
- **Identidad exacta**: Dolcey Romero Jaramillo, *Los acuerdos y la idealización del palenque en la provincia de Cartagena: el caso del Totumo (1714-1767)* (año no registrado en el nodo).
- **Evidencia encontrada**: el texto de `escalante` **no menciona explícitamente "El Totumo"**. Sí describe, en la unidad 6, un palenque no nombrado en la orilla del río Magdalena, disputado entre Cartagena y Santa Marta, pero fechado en **1654** (gobernación de Pedro Zapata), fuera del rango 1714-1767 que da título a `totumo`. No hay evidencia textual suficiente para afirmar que se trate del mismo asentamiento; tampoco hay evidencia para descartarlo.
- **Clasificación**: **NO_VERIFICABLE_DESDE_ESTA_LECTURA** (con nota: el rango cronológico y la ausencia de toponimia explícita debilitan, sin descartar, la hipótesis de un vínculo directo).

### 18.3 `escalante` ↔ `price`

- **Dirección**: `escalante → price`. **Tipo**: resonancia.
- **Fuente registrada**: misma fórmula genérica.
- **Identidad exacta**: Richard Price (ed.), *Maroon Societies*, 1973.
- **Evidencia encontrada**: **este es el vínculo más fuerte de los siete**. La propia nota al pie del artículo leído establece que "Palenques en Colombia" fue publicado "en *Sociedades cimarronas*, Richard Price (comp.), Siglo Veintiuno, México, 1981, pp. 72-78" — es decir, el artículo de Escalante es, literalmente, un capítulo de la antología editada por Price. *Sociedades cimarronas* (Siglo XXI, 1981) es la edición en español de *Maroon Societies* (el nodo registra la edición original en inglés de 1973). Se trata, con alta probabilidad, del mismo proyecto editorial en dos ediciones/idiomas.
- **Incidencia**: la fórmula registrada en el nodo ("comparten el fenómeno... por corroborar") **subestima** la naturaleza real del vínculo, que no es mera resonancia temática sino pertenencia editorial directa (Escalante es autor de un capítulo dentro del volumen de Price). Se señala como incidencia relacional en §21, sin modificar el campo.
- **Clasificación**: **CONFIRMADA_CON_INCIDENCIA** (confirmado el vínculo editorial directo; incidencia: año/edición registrados en el nodo `price` [1973, inglés] no son los de la edición efectivamente referenciada en el texto leído [1981, español]; y la fórmula de la relación no refleja la fuerza real del vínculo).

### 18.4 `cuijla` ↔ `escalante`

- **Dirección**: `cuijla → escalante`. **Tipo**: resonancia.
- **Fuente registrada**: "Comparten el fenómeno Memoria y espiritualidad. Por corroborar el vínculo directo."
- **Identidad exacta**: Gonzalo Aguirre Beltrán, *Cuijla: Esbozo etnográfico de un pueblo negro*, 1958 (México).
- **Evidencia encontrada**: el fenómeno declarado como compartido —"Memoria y espiritualidad"— **no se corrobora** en el texto de `escalante` leído. No hay ninguna referencia a espiritualidad, ritual o cosmovisión; el único elemento remotamente afín a "memoria" es una frase breve sobre el duelo familiar de los primeros palenqueros que partían a trabajar fuera ("hasta llegaron a llorarlos como a un difunto"), evidencia demasiado tenue para sostener el fenómeno declarado.
- **Clasificación**: **NO_CORROBORADA**

### 18.5 `zapataarbol` ↔ `escalante`

- **Dirección**: `zapataarbol → escalante`. **Tipo**: resonancia.
- **Fuente registrada**: "Por corroborar." (sin fenómeno ni evidencia especificados)
- **Identidad exacta**: Manuel Zapata Olivella, *El árbol brujo de la libertad*, 2014.
- **Evidencia encontrada**: no hay contenido verificable en el registro de la relación ni elementos en `escalante` que permitan evaluar un vínculo específico con esta obra.
- **Clasificación**: **NO_VERIFICABLE_DESDE_ESTA_LECTURA**

### 18.6 `olsencartagena` ↔ `escalante`

- **Dirección**: `olsencartagena → escalante`. **Tipo**: resonancia.
- **Fuente registrada**: "Olsen cita *El palenque de San Basilio* (2ª ed., Barranquilla, 1979) y *El negro en Colombia* (1964) en su bibliografía. Cita verificada en el ejemplar de la biblioteca del grupo."
- **Identidad exacta**: Margaret M. Olsen, *Slavery and Salvation in Colonial Cartagena de Indias*, 2004.
- **Evidencia encontrada**: la fuente registrada cita explícitamente **dos obras de Escalante distintas de la que se leyó en esta lectura** (*El palenque de San Basilio*, 2ª ed. 1979, y *El negro en Colombia*, 1964) — ninguna es "Palenques en Colombia" (1981), el único texto disponible en esta lectura. No es posible corroborar ni refutar esta relación desde el archivo efectivamente leído, precisamente porque remite a un objeto bibliográfico distinto (§4, §19).
- **Clasificación**: **NO_VERIFICABLE_DESDE_ESTA_LECTURA** (nota obligatoria de control de identidad de obra, §19: esta relación certifica una cita a la monografía registrada en el nodo, no al artículo aquí leído).

### 18.7 `reysinningcristorey` ↔ `escalante`

- **Dirección**: `reysinningcristorey → escalante`. **Tipo**: resonancia.
- **Fuente registrada**: "El prólogo ubica el libro dentro de los 'cuatro momentos' de los estudios afrocolombianos y cita a Aquiles Escalante (1954) como fundador del primer momento etnográfico: la misma pieza fundacional sobre San Basilio que abre este corpus."
- **Identidad exacta**: Édgar Rey Sinning, *Cristo Rey, un espacio para permanecer en el tiempo*, 1998/2020/2025.
- **Evidencia encontrada**: de nuevo remite explícitamente a "Aquiles Escalante (1954)" —la monografía registrada en el nodo—, no al artículo de 1981 aquí leído.
- **Clasificación**: **NO_VERIFICABLE_DESDE_ESTA_LECTURA** (misma nota de control de identidad de obra que 18.6).

---

## 19. CONTROL DE IDENTIDAD DE OBRA

Se aplicó el estándar más estricto a las relaciones donde el autor aparece pero no necesariamente la obra exacta. Este es, de hecho, el problema central de todo el Caso 10: **dos de las siete relaciones (`olsencartagena`, `reysinningcristorey`) citan explícitamente "Escalante (1954)" o su monografía sobre San Basilio, mientras que el archivo efectivamente disponible y leído en esta lectura es un artículo distinto de 1981 sobre varios palenques colombianos.** No se declaran estas relaciones como confirmadas por el solo hecho de que el autor coincide; se clasifican como `NO_VERIFICABLE_DESDE_ESTA_LECTURA` precisamente porque la obra exacta que citan no es la que se tiene en mano.

En sentido inverso, la relación con `price` (18.3) sí pudo confirmarse con evidencia textual directa (nota al pie del propio artículo leído), y se marca como incidencia menor solo por la diferencia de edición/idioma registrada en el nodo `price`.

---

## 20. CANDIDATURAS NUEVAS

El artículo leído cita, en su propia bibliografía, cinco fuentes documentales (Aragón 1939; De Escariche 1948; Mogollón s.f.; Posada e Ibáñez 1910; Urueta 1890). Ninguna de ellas corresponde a un nodo existente en el corpus, ni hay evidencia de discusión teórica, interlocución o dependencia metodológica con otra obra ya presente en el Atlas más allá de las siete relaciones ya registradas. No se propone ninguna candidatura nueva.

`CANDIDATURA_RAZONADA_NO_IMPLEMENTADA`: ninguna justificada en esta lectura.

---

## 21. INCIDENCIAS

### Académicas

Ninguna incidencia de clasificación/arquitectura distinta de la ya documentada en §9–§17 (C3 PRINCIPAL, C7 SECUNDARIA_ESTRUCTURANTE, resto CONTEXTUAL/INCIDENTAL/AUSENTE).

### Bibliográficas

**Mayor.** El nodo registra como obra *El Palenque de San Basilio* (Aquiles Escalante, 1954), pero el único archivo localizado en el proyecto (`RdC_7_385-390_ESCALANTE_anexo.pdf`) es en realidad **"Palenques en Colombia"**, artículo del mismo autor publicado en *Sociedades cimarronas* (Richard Price, comp., Siglo XXI, México, 1981, pp. 72-78), reimpreso en *Revista del CESLA* No. 7, pp. 385-390. Son obras distintas: la registrada es una monografía específica sobre San Basilio (con al menos una 2ª edición de 1979, según se corrobora indirectamente en la relación con `olsencartagena`); la disponible es un artículo panorámico sobre varios palenques colombianos, no una monografía centrada exclusivamente en San Basilio. No se corrige el nodo (prohibido en esta fase); se traslada como pregunta decisoria (§25).

### Territoriales

`l: "palenque"` (San Basilio) es razonable como simplificación admisible dado que San Basilio es el caso con mayor desarrollo narrativo en el texto disponible, pero el artículo realmente leído tiene alcance **multirregional** (Cartagena, Santa Marta/La Ramada, Popayán/Patía, Mocoa) y no exclusivamente centrado en San Basilio. `SIMPLIFICACION_ADMISIBLE`, no se modifica `l`.

### Conceptuales

La etiqueta `f: "memoria"` no encuentra respaldo sustantivo en el texto efectivamente leído (ver §18.4); es posible que esté justificada por la monografía registrada (no leída), pero no por el artículo disponible. Se señala sin corregir la etiqueta.

### Relacionales

Dos relaciones (`olsencartagena`, `reysinningcristorey`) certifican citas a una obra de Escalante distinta de la leída (§18.6, §18.7, §19). Una relación (`price`) está más fuertemente evidenciada de lo que su fórmula registrada sugiere, con una incidencia menor de edición/idioma (§18.3). Una relación (`cuijla`) declara un fenómeno compartido ("memoria y espiritualidad") no corroborado por el texto (§18.4).

### Técnicas

Ninguna. El nodo `escalante` está sincronizado entre `datos-atlas.js` y `datos-atlas.json` (idéntico en ambos, verificado en §1), sin campos faltantes ni estructura anómala.

No se corrigió ninguna de estas incidencias en esta fase.

---

## 22. TABLA FINAL C1–C10

| Corriente | Clasificación provisional | Evidencia principal | Función |
|:---|:---|:---|:---|
| C1 — Mundos indígenas | INCIDENTAL | Indígenas como auxiliares de represión/co-reducidos en Mocoa | Instrumental, sin desarrollo |
| C2 — Trata, esclavización y plantación | CONTEXTUAL | Marco legal-punitivo de Cartagena (s. XVI) | Contexto necesario de la fuga, no objeto de análisis |
| C3 — Fugas, cimarronajes y emancipaciones | PRINCIPAL | Totalidad del texto; historia de los palenques colombianos | Organiza pregunta, tesis, archivo, secuencia y causalidad |
| C4 — Postplantación, trabajo y desposesión | CONTEXTUAL | Incorporación laboral de San Basilio (ingenios, migración, s. XX) | Epílogo/coda, no mecanismo |
| C5 — Rutas, diásporas y territorios acuosos | INCIDENTAL | Menciones geográficas de ríos/ciénagas y migración laboral | Marcadores de locación |
| C6 — Huracanes, ecologías y catástrofes climáticas | AUSENTE | — | — |
| C7 — Soberanías, fronteras y ocupaciones | SECUNDARIA_ESTRUCTURANTE | Título de "Rey"; disputa jurisdiccional Cartagena/Santa Marta; titulación de tierras 1774/1779 | Mecanismo explicativo de la supervivencia diferencial |
| C8 — Creolizaciones | INCIDENTAL | Cita de 1772 sobre "particular idioma" | Nota de color, sin desarrollo |
| C9 — Archivos vivos, espiritualidades y saberes transmitidos | AUSENTE | — | — |
| C10 — Cuerpos, parentescos y eróticas | CONTEXTUAL | Episodio narrativo Orika/Francisco de Campos | Dramatización ilustrativa, no estructurante |

---

## 23. PROPUESTA PROVISIONAL DE ARQUITECTURA

```
PRINCIPAL: C3
SECUNDARIA_ESTRUCTURANTE: C7
arquitectura_recorrido: null
```

Esta propuesta es **no vinculante** y corresponde exclusivamente al artículo "Palenques en Colombia" (1981), único texto efectivamente leído. Queda explícitamente abierta la pregunta —trasladada a la Dirección Académica en §25— de si esta lectura basta como evidencia probatoria suficiente para el nodo `escalante` tal como está registrado (obra: *El Palenque de San Basilio*, 1954), o si se requiere localizar y leer esa monografía específica antes de emitir decisión académica.

---

## 24. CIERRE DEL SUBLOTE NO AUTORIZADO TODAVÍA

No se declara `P3-A CERRADO`. La lectura del Caso 10 no equivale al cierre académico y técnico del sublote. Restan, como mínimo: decisión académica de `escalante`, implementación técnica, y eventual auditoría final del Sublote P3-A. No se hace balance de los diez casos en esta fase.

---

## 25. PREGUNTA DECISORIA FINAL

Para la Dirección Académica: **la evidencia disponible (el artículo "Palenques en Colombia", Escalante 1981, único texto localizado) sostiene con solidez PRINCIPAL: C3 y SECUNDARIA_ESTRUCTURANTE: C7 —el mecanismo de titulación territorial negociada como explicación de la supervivencia diferencial de San Basilio frente a otros palenques colombianos—, sin frontera constitutiva, sin síntesis multicorriente y sin vacío taxonómico.**

Pero esta arquitectura corresponde estrictamente al artículo disponible, **no** a la monografía que el nodo registra como obra (*El Palenque de San Basilio*, 1954/1979), la cual no se localizó en el proyecto. ¿Debe la Dirección Académica: **(a)** aceptar el artículo "Palenques en Colombia" como evidencia probatoria suficiente y sustituta para decidir el recorrido de `escalante`, dado que es del mismo autor y desarrolla sustancialmente el caso de San Basilio; o **(b)** exigir la localización y lectura de la monografía específica de 1954/1979 antes de emitir la decisión académica, dado que dos de las siete relaciones registradas (`olsencartagena`, `reysinningcristorey`) certifican citas a esa monografía exacta y no al artículo aquí leído?

---

## 26. ARCHIVO DE SALIDA

Generado exclusivamente: `lectura-escalante-p3-etapa-2-3h.md`

---

## 27. PROHIBICIONES — CUMPLIMIENTO

No se modificó `datos-atlas.js`, `datos-atlas.json`, la cola, relaciones, etiquetas, metadatos, protocolos, dictámenes ni la matriz de fronteras. No se implementó `escalante`. No se emitió decisión académica. No se corrigieron relaciones. No se cerró el Sublote P3-A. No se inició P3-B. No se avanzó a `fouchard` ni a ningún otro nodo. No se ejecutó `git add`, `git commit`, `git push`, `git reset`, `git restore` ni `git stash`.

### Verificación Git

Ejecutados únicamente comandos de solo lectura (`git status --short`, lectura de archivos) antes de esta lectura, para confirmar el estado del Caso 9 (§0). No se ejecutó ninguna operación de escritura ni de historial en git durante esta tarea.

---

## 28. ESTADO FINAL

La evidencia disponible es suficiente para una clasificación C1–C10 defendible **del artículo efectivamente leído**, con una incidencia bibliográfica mayor explícitamente señalada (identidad de obra registrada vs. disponible) que la Dirección Académica debe resolver antes o durante la decisión académica.

**`LISTO_PARA_DECISION`**

(con la salvedad expresa, no bloqueante pero decisiva para la solidez final, documentada en §21 y §25: la obra registrada y la obra leída no son la misma pieza bibliográfica del mismo autor)

---

## 29. CIERRE

**DETENTE.**

No se emite decisión académica. No se implementa. No se cierra P3-A. No se inicia P3-B. La Dirección Académica deberá auditar primero este expediente probatorio, incluyendo la pregunta decisoria de §25 sobre la suficiencia de la fuente disponible frente a la obra registrada.
