# Expediente de evidencia · C3

**Denominación provisional: Fugas, cimarronajes y emancipaciones**

Preparado para la Dirección Académica de Pensamiento Caribe
Fecha: 12 de agosto de 2026
Rama: `feat/atlas-2-etapa-1-integrada`
Commit de referencia: `23166e1`
Corpus: `data/agua-de-por-medio/datos-atlas.json`, versión 1.16.1, fecha 2026-08-11
Catálogo de corrientes: `catalogos-atlas-2.json`, esquema `2.0-lotes.2`

Este documento reúne evidencia verificable para un dictamen que todavía no se ha emitido. No ratifica denominación, guion, vía de constitución ni fronteras. Ninguna obra se clasifica aquí, y ninguna se convierte en candidatura.

---

## 1. Respuesta directa: qué puede afirmarse y qué no

**Puede afirmarse, con evidencia localizable:**

- La denominación de C3 **no varió en ninguna de las cinco versiones del catálogo de corrientes que el historial conserva**. Español e inglés idénticos en las cinco. No se localizó incidencia de nombre, a diferencia de C1 y C9, que cambiaron dos veces cada una en el mismo periodo. Esa estabilidad es documental y no equivale a ratificación ni a suficiencia conceptual, según distingue el apartado 3.1.
- El corpus vigente tiene **26 entradas** con la etiqueta heredada `cimarronaje`, el **11,2069 %** de 232. Ambas cifras se comprobaron por dos procedimientos independientes que devolvieron los mismos 26 identificadores.
- Hay **cinco clasificaciones C3 principales confirmadas** y **una secundaria**, todas con fecha 2026-08-08 y responsable «Dirección académica de Pensamiento Caribe».
- De las 26 entradas con `cimarronaje`, **solo 5 han pasado por lote**, y **las cinco recibieron un rol en C3**. Ninguna entrada con esa etiqueta fue enviada a otra corriente sin conservar vínculo con C3.
- Existe **una clasificación C3 principal sin la etiqueta heredada**: `hazareesingh`, cuyas etiquetas son `soberanias` y `violencias`, y que llegó a C3 por corrección editorial.
- El catálogo de fenómenos declara **cuatro fenómenos** compatibles con C3, con **17 anclas**, de las cuales **9 no tienen la etiqueta `cimarronaje`**.
- **Existieron candidaturas C3 registradas como dato, y el historial de Git las conserva.** El commit `619ad67` guarda dos entradas con `corrientes_candidatas` que incluyen la clave de C3: `price` y `totumo`, ambas con el par `["fugas_cimarronajes_emancipaciones", "memorias_espiritualidades_archivos_vivos"]`. El campo desapareció 48 minutos después, en `99aec5b`.
- **Existieron otras dos candidaturas C3 cuyo contenido no es recuperable.** `helgnuncamas` y `tackysrevolt`, del lote A01, llevan `decision_aprobada: "confirmar_candidatura"`. No fueron localizadas como campo de datos en ninguna versión de A01 ni en el historial del repositorio examinado.
- **La migración consta como proceso en los registros.** 41 de los 57 registros de lote declaran `proceso` con el valor `migración`, entre ellos cuatro de las seis clasificaciones C3.

**No puede afirmarse:**

- Que el repositorio vigente conserve un artefacto que permita **reconstruir y auditar** las candidaturas previas de C3. El árbol actual no las contiene; el historial conserva solo dos de las cuatro atestiguadas, y no se localizó un listado general en ninguna versión examinada del repositorio.
- Que la vía de constitución sea, sin más, «migración del corpus heredado», como declara el documento de arquitectura. La migración está **parcialmente evidenciada** y **no es auditable para el corpus completo**.
- Que las 26 entradas con `cimarronaje` sean candidaturas de C3. Son etiqueta heredada, que es otra cosa.
- Que las nueve anclas de fenómenos añadidas al conjunto exploratorio sean candidaturas, entradas pendientes de C3 ni miembros probables de la corriente. El catálogo que las contiene es un borrador no aplicado al corpus.
- Que el guion provisional permita decidir todos los casos. **El expediente identifica ocho problemas o familias de casos que el guion provisional no resuelve de manera suficiente**, detallados en el apartado 4.3.
- Que la denominación esté ratificada. Sigue marcada `provisional: true`.

---

## 2. Fuentes consultadas y jerarquía de autoridad

| Nivel | Fuente | Ruta | Función |
|---|---|---|---|
| 1 | Corpus público vigente | `data/agua-de-por-medio/datos-atlas.json` y `.js` | Autoridad sobre identificadores, etiquetas heredadas y cifras |
| 1 | Resultados generados de los lotes | `atlas-2/piloto-generado.json`, `atlas-2/lotes/{s01,a01,a02}-generado.json` | Autoridad sobre clasificaciones existentes y fundamentos |
| 1 | Configuraciones de los lotes | `atlas-2/piloto-config.json`, `atlas-2/lotes/{s01,a01,a02}-config.json` | Entrada de las decisiones; no es resultado |
| 2 | Dictamen académico de C1 | `atlas-2/documentos/dictamen-academico-c1.md` | Autoridad sobre la denominación y las fronteras ya decididas de C1 |
| 2 | Dictamen académico de C2 | `atlas-2/documentos/dictamen-academico-c2.md` | Autoridad sobre la denominación, el guion y las fronteras ya decididas de C2 |
| 3 | Catálogo de corrientes | `atlas-2/catalogos-atlas-2.json` | Estado provisional de C3; no es aprobación académica |
| 3 | Arquitectura integrada de la Etapa 1 | `atlas-2/documentos/etapa-1-arquitectura-integrada.md` | Guion provisional de C3; aprobado como arquitectura, no ratificado como guion |
| 3 | Catálogo de fenómenos | `atlas-2/catalogo-fenomenos.json` | Estado declarado: «borrador para dictamen académico; no se ha aplicado al corpus publicado». Versión 0.1.0-borrador |
| 4 | Metodología revisada | `atlas-2/documentos/metodologia-revisada-borrador.md` | Borrador; describe la regla de derivación |
| 4 | Decisiones pendientes | `atlas-2/documentos/decisiones-pendientes.md` | Registro de cuestiones abiertas |
| 4 | Plan operativo de siete etapas | `Pagina/ATLAS /Plan_operativo_Atlas_2_Claude_7_etapas.docx` | Documento de planeación, anterior a los dictámenes |
| 4 | Ampliación de fenómenos | `atlas-2/documentos/fenomenos-ampliacion.md` | Borrador para dictamen, escrito contra la v1.15.0 |
| — | Visor de fenómenos | `herramientas/visor-fenomenos.html` | Herramienta interna no enlazada; reproduce el catálogo |

Otros lotes existentes que **no** son de los cuatro cerrados y no intervienen en esta auditoría: `atlas-2/lotes/f01-muestra.json` (prueba de fenómenos, estado `propuesto`) y `atlas-2/lotes/tp01-temporalidad.json` (capa de temporalidad, sin dictamen).

---

## 3. Historia documental de la denominación

### 3.1 Todas las apariciones en el catálogo, commit por commit

Horas en UTC. Los commits del repositorio están fechados en `-05:00` y se convirtieron para poder compararlos con metadatos externos.

| Commit | Fecha y hora (UTC) | Clave | Denominación ES | Denominación EN | `provisional` |
|---|---|---|---|---|---|
| `619ad67` | 2026-08-08 04:52:33 | `fugas_cimarronajes_emancipaciones` | Fugas, cimarronajes y emancipaciones | Flight, marronage and emancipations | `true` |
| `99aec5b` | 2026-08-08 05:40:29 | ídem | ídem | ídem | `true` |
| `2343008` | 2026-08-08 11:44:42 | ídem | ídem | ídem | `true` |
| `d3b15a7` | 2026-08-10 15:16:52 | ídem | ídem | ídem | `true` |
| `16fc252` | 2026-08-11 16:00:12 | ídem | ídem | ídem | `true` |

**La afirmación de que C3 no tiene incidencia de nombre queda comprobada y no repetida de un documento anterior.** Se verificó leyendo el objeto de la corriente número 3 en cada una de las cinco versiones del archivo. En el mismo periodo, C1 cambió de denominación dos veces y C9 dos veces.

**Tres cosas distintas, que este apartado no confunde:**

| Propiedad | Estado de C3 | Qué significa |
|---|---|---|
| **Estabilidad documental** | **Comprobada** | La redacción no varió en cinco versiones del catálogo |
| **Ratificación académica** | **Ausente** | Ninguna instancia ha dictaminado la denominación. El campo `provisional` sigue en `true` |
| **Suficiencia conceptual** | **No establecida** | Nadie ha examinado si el nombre cubre lo que la corriente debe cubrir. El apartado 3.4 reúne cinco tensiones abiertas |

Que un nombre no haya cambiado puede significar que es adecuado, o que nadie lo ha discutido. En el caso de C1 y C9 hubo discusión y hubo cambio; en el de C3 no consta discusión alguna. La estabilidad, por sí sola, no es un argumento a favor del nombre.

### 3.2 Dónde aparece la denominación fuera del catálogo

| Ruta | Contenido | Naturaleza |
|---|---|---|
| `atlas-2/catalogos-atlas-2.json` | Ambas denominaciones y la clave | Dato vigente |
| `atlas-2/documentos/etapa-1-arquitectura-integrada.md` | Ambas denominaciones, la clave y el guion | Documento aprobado como arquitectura |
| `herramientas/visor-fenomenos.html` | Ambas denominaciones, incrustadas en el objeto `D` del script | Copia de trabajo en una herramienta interna |
| `atlas-2/documentos/dictamen-academico-c2.md` | «C3 · fugas, cimarronajes y emancipaciones», en minúscula inicial, dentro de dos filas de tabla | Referencia externa, marcada allí como provisional |

La clave técnica aparece en diez archivos: el catálogo de corrientes, el de fenómenos, los seis archivos de configuración y resultado de P00, A01 y A02, el documento de arquitectura y el visor.

### 3.3 Lo que dice el plan operativo, y la tensión que introduce

El plan operativo de siete etapas, en su tabla de decisiones cerradas, fija individualmente C1 y C9 y dispone para las demás:

> Corrientes restantes: Conservar las ocho denominaciones restantes del catálogo, salvo correcciones ortotipográficas.

Y en su lista de riesgos que no deben resolverse sin intervención humana incluye:

> Cambiar nombres de corrientes distintos de C1 y C9.

**Contradicción documentada, no resuelta.** El plan operativo dispone conservar la denominación de C3. El dictamen académico de C1, posterior al plan, cambió la denominación de C1, que el plan sí había fijado. Existen por tanto dos criterios en el expediente: uno que congela las ocho denominaciones restantes y otro que somete cada denominación a dictamen específico. La jerarquía de autoridad de este expediente sitúa los dictámenes por encima de los planes, pero **la decisión de si C3 puede renombrarse corresponde a la Dirección Académica y no a este documento**.

### 3.4 Examen crítico de la denominación

No se propone denominación. Se registran las tensiones que la evidencia hace visibles.

**«Fugas» y «cimarronajes» juntos.** El corpus contiene obras donde la fuga es un acto y otras donde el cimarronaje es una formación social con territorio, lengua y gobierno propios: `escalante` y `friedemannlengua` sobre San Basilio, `alabi` y `rainforestwarriors` sobre los saramaka, `truebornmaroons` sobre la identidad maroon «como tratado, no solo como origen». Si los dos términos nombran lo mismo, uno sobra; si nombran cosas distintas, el título no dice cuál es la diferencia. La evidencia del corpus sugiere que sí son distintos y que el título los yuxtapone sin jerarquizarlos.

**«Emancipaciones» en plural.** Solo una entrada del corpus dispara el término «emancipación» en título o aporte. La palabra, sin embargo, carga la distinción que el propio guion declara como su tensión central: emancipación decretada frente a libertad conquistada. `helgnuncamas` documenta el segundo polo —«las estrategias mediante las cuales personas esclavizadas se liberaron»— y `lightfoot`, todavía sin revisar, trabaja explícitamente el primero: *Troubling Freedom: Antigua and the Aftermath of British Emancipation*. El plural cabe, pero el corpus no lo ha ejercitado.

**«Flight» como traducción.** El campo de estudios que el propio corpus contiene se nombra en inglés `marronage`, no `flight`: `roberts` publica *Freedom as Marronage* y `fouchard` *Les marrons de la liberté*. `Flight` traduce el acto y pierde el campo disciplinar. La denominación inglesa conserva `marronage` en segundo lugar, de modo que el problema es de orden, no de ausencia.

**Lo que el título no nombra y el corpus sí contiene.** Revolución e insurgencia. La única clasificación C3 que no proviene de `cimarronaje` es una biografía de Toussaint Louverture, y su fundamento cita «revolución, emancipación y estrategia». En la lista pendiente hay al menos tres obras de ese registro: `james`, `ferrerfreedomsmirror` y, en el límite, `fouchard`. El guion sí menciona la revolución; el título no.

**Escalas heterogéneas.** El título reúne un acto individual, una formación comunitaria y un proceso jurídico-político continental. Que sean heterogéneos no es defecto por sí mismo —el guion podría hacerlos convergir—, pero la denominación no hace visible esa tensión.

---

## 4. Guion provisional y problemas que plantea

### 4.1 Texto literal

Transcrito de `atlas-2/documentos/etapa-1-arquitectura-integrada.md`:

> ¿Qué se funda al huir? La corriente sigue la fuga como práctica política y como pensamiento, del palenque a la revolución y a las emancipaciones formales. Su tensión: la emancipación decretada y la libertad conquistada no son la misma cosa, y el archivo suele registrar la primera. Recorre obras que leen el cimarronaje como filosofía y no solo como resistencia, junto a las que documentan sus formas concretas.

Bloque estructurado que lo acompaña, también literal:

| Campo | Contenido |
|---|---|
| Alcance intelectual | Estudios de marronage, historia de las revoluciones caribeñas, filosofía política de la libertad, etnogénesis |
| Incluye | Fuga y palenque; insurgencia; revolución haitiana y otras; procesos de abolición leídos desde abajo |
| No incluye | El régimen del que se huye, que es C2; la diáspora y la migración, que son C5 |
| Corriente más próxima | C7. Se distinguen por la escala del sujeto: C3 trabaja la sustracción al poder, C7 la disputa por la forma estatal |
| Riesgo de solapamiento | Medio con C5, porque la fuga también es desplazamiento. Criterio: si el argumento es la sustracción, C3; si es la circulación, C5 |
| Vía de constitución | Migración del corpus heredado, con base en la etiqueta `cimarronaje` (26 entradas, 11 %) |
| Estado | Provisional |

### 4.2 Lo que el guion resuelve bien

**Distingue fuga de régimen.** Aplicado a los seis casos ya clasificados, el criterio funciona. `hall_slavesocietydanish` quedó en C2 con C3 secundaria porque «rebeliones y emancipación son capítulos de esa arquitectura, no el principio ordenador». `tackysrevolt` quedó en C3 con C2 secundaria porque «la insurrección es narrada como guerra atlántica con estrategia y redes propias». Las dos decisiones son coherentes entre sí y con el guion.

**«Cimarronaje como filosofía» tiene respaldo bibliográfico y no es formulación programática.** Dos obras del corpus lo sostienen: `lebroncimarronaje`, *Filosofía del cimarronaje*, cuyo aporte declara que «convierte el cimarronaje en categoría filosófica y no en episodio histórico: la huida como praxis de mundo y no como reacción», y `roberts`, *Freedom as Marronage*, «la libertad pensada como fuga y no como estado». Ambas siguen sin revisar en lote.

**No reduce toda agencia esclavizada a C3.** El dictamen de C2 ya fijó que los mundos producidos dentro y contra el régimen pertenecen a C2, y que solo la sustracción como argumento central pertenece a C3. Los seis casos clasificados respetan esa línea.

### 4.3 Casos concretos que el guion no resuelve

Ocho problemas, cada uno con el caso que lo demuestra, la evidencia que lo sostiene y la pregunta que corresponde al dictamen. **Este expediente no resuelve ninguna de las ocho preguntas.**

| # | Problema detectado | Caso y evidencia | Pregunta para el dictamen |
|---|---|---|---|
| 1 | El guion no distingue ruptura espiritual de sustracción | `chevannes`, etiqueta `cimarronaje`, aporte: «el rastafarismo como ideología de ruptura». No hay fuga, palenque, revolución ni emancipación | ¿Una ideología de ruptura espiritual pertenece a C3 o a C9? |
| 2 | El guion no dice si el uso figurado del cimarronaje basta | `quintero`, etiquetas `creolizacion` y `cimarronaje`, aporte: «cimarronería sonora: el baile y el ritmo como subversión» | ¿El cimarronaje sonoro, corporal o estético ingresa a C3, o la obra pertenece a C8 o C10? |
| 3 | El criterio de «escala del sujeto» no separa sustracción de litigio soberano | `rainforestwarriors`, aporte: «el cimarronaje del siglo XVII vuelto litigio internacional del XXI» | ¿Manda el origen cimarrón del sujeto o la forma soberana de la disputa? |
| 4 | El guion no decide entre fuga y desplazamiento cuando coexisten | `gonzalezsojourners`, aporte: «un pueblo que nace de la fuga y no de un territorio originario fijo», más el reasentamiento forzado. El fenómeno `etnogenesis` declara compatibilidad con C3, C5 y C8 | ¿Un pueblo que nace de la fuga y se constituye en el desplazamiento es C3 con C5 secundaria, o al revés? |
| 5 | El guion no contempla la no equivalencia entre indigeneidad y negritud | `rifkinfictions`, con etiqueta `cimarronaje` y a la vez ancla de un fenómeno de C1. Aporte: «la relación con la tierra que reclama la soberanía indígena y la que abre la fuga cimarrona no son la misma» | ¿C1, C3, o principal y secundaria explícitas? Es la única entrada que aparece en el expediente de C1 y en el de C3 |
| 6 | El guion incluye «abolición leída desde abajo» sin decir qué ocurre con la abolición leída desde arriba | `lightfoot`, *Troubling Freedom: Antigua and the Aftermath of British Emancipation*, etiquetas `postplantacion` y `soberanias`, fuera del conjunto de 35 | ¿La emancipación decretada pertenece a C3, a C2 o a C4, y bajo qué condición? |
| 7 | El guion no contempla la sustracción cotidiana | El fenómeno `contraplantacion` es compatible con C3 y define «vida cotidiana como sustracción». Sus tres anclas —`casimir`, `olwigstjohn`, `cuijla`— no tienen etiqueta `cimarronaje` ni han pasado por lote | ¿C3 admite formas de vida que se organizan contra la plantación sin fuga armada ni territorio separado? |
| 8 | El guion no tematiza formas femeninas, familiares, espirituales, rituales, corporales ni estéticas | De 21 pendientes con etiqueta, una sola centra una figura de mujer, `zips_nannysasafo`. Los casos 1, 2 y 7 cubren lo espiritual, lo estético y lo cotidiano; ninguno está previsto | ¿Debe el guion nombrar explícitamente estos registros, o se resuelven caso por caso? |

Los cuatro primeros problemas se detallan a continuación con su evidencia completa.

**Caso 1 · `chevannes`, *Rastafari: Roots and Ideology*.** Lleva la etiqueta `cimarronaje` en el corpus. Su aporte lo describe como «historia social del rastafarismo como ideología de ruptura». No hay fuga, ni palenque, ni revolución, ni emancipación formal. El guion, tal como está redactado, no permite decidir si una ideología de ruptura espiritual pertenece a C3 o a C9. **Insuficiencia registrada.**

**Caso 2 · `quintero`, *Cuerpo y cultura: las músicas «mulatas» y la subversión del baile*.** Etiquetas `creolizacion` y `cimarronaje`. Su aporte habla de «cimarronería sonora: el baile y el ritmo como subversión y creolización del cuerpo». Aquí el cimarronaje es una metáfora, no una práctica de sustracción. El guion no dice si el uso figurado del término basta para ingresar a C3, ni si la obra pertenece más bien a C8 o a C10. **Insuficiencia registrada.**

**Caso 3 · formas cotidianas, familiares y femeninas de sustracción.** El guion recorre «del palenque a la revolución y a las emancipaciones formales»: tres registros públicos y, dos de ellos, armados o jurídicos. El catálogo de fenómenos contiene sin embargo `contraplantacion`, definido como «rehacer sociedad por fuera de la lógica de la hacienda sin salir necesariamente de su territorio: lakou, conuco, comunidad campesina negra, vida cotidiana como sustracción», y lo declara compatible con C3. **Ninguna de sus tres anclas —`casimir`, `olwigstjohn`, `cuijla`— tiene la etiqueta `cimarronaje` ni ha pasado por lote.** El guion no contempla ese registro. **Insuficiencia registrada.**

En cuanto a lo femenino: de las 21 entradas pendientes con `cimarronaje`, una sola centra una figura de mujer, `zips_nannysasafo`, sobre Nanny, «única Héroe Nacional femenina de Jamaica». El guion no nombra formas femeninas de fuga ni las excluye; simplemente no las tematiza.

**Caso 4 · la frontera con C7 en las revoluciones.** El guion dice que C3 y C7 se distinguen «por la escala del sujeto». Aplicado a `rainforestwarriors` —«los saramaka llevan al Estado de Surinam ante la Corte Interamericana de Derechos Humanos y ganan: el cimarronaje del siglo XVII vuelto litigio internacional del XXI»— el criterio no decide: hay sustracción histórica y disputa jurídica contemporánea por soberanía territorial en la misma obra. **Insuficiencia registrada.**

### 4.4 Un error verificable dentro del propio guion

La fila «Vía de constitución» afirma: «Migración del corpus heredado, con base en la etiqueta `cimarronaje` (26 entradas, 11 %)».

Las dos cifras son exactas —el apartado 6 las recomputa y las confirma—. **La descripción del mecanismo no lo es**, por las razones de los apartados 5.3 y 5.4.

---

## 5. Vía de constitución anunciada frente a vía demostrada

### 5.1 Qué dice la metodología sobre la derivación

`metodologia-revisada-borrador.md` describe la regla:

> Cuando la clasificación anterior permite derivar un destino, la entrada recibe una candidatura preliminar, que es una hipótesis de lectura y no una clasificación: queda sujeta a confirmación editorial y se registra como tal hasta que alguien la confirme o la corrija. De las 203 entradas, 51 reciben una candidatura única y 152 exigen lectura porque la taxonomía anterior no permite derivar un destino sin ambigüedad.

**Esas tres cifras pertenecen a una versión anterior y no pueden seguir usándose como descripción vigente.**

| Cifra de la metodología | Base | Estado |
|---|---|---|
| 203 entradas | Corpus v1.14.0, 3 de agosto de 2026 | **Superada.** El corpus vigente tiene 232 |
| 51 candidaturas únicas | Ídem | **No reconstruible.** Ver abajo |
| 152 entradas que exigían lectura | Ídem | **No reconstruible**, por la misma razón |

**¿Puede reconstruirse la lista de 51?** No con la evidencia localizada. Haría falta la regla de derivación que asignaba etiqueta antigua a corriente nueva, y **no se localizó esa regla escrita en ningún archivo examinado del repositorio**: la metodología la enuncia como principio pero no la especifica etiqueta por etiqueta. Sin ella no puede recomputarse qué entradas producían candidatura única, ni sobre 203 ni sobre 232. Tampoco puede transportarse la cifra: entre la v1.14.0 y la v1.16.1 el corpus incorporó 30 entradas y fusionó una, de modo que 51 sobre 203 no equivale a ninguna cantidad determinable sobre 232.

**Este expediente no propone una distribución nueva.** Recalcular 51 y 152 exigiría inventar la regla ausente, que es exactamente lo que no debe hacerse. Lo único reproducible desde los archivos actuales es lo que este documento sí computa: las 26 entradas con `cimarronaje`, las 6 clasificaciones C3, los 4 fenómenos compatibles y sus 17 anclas.

### 5.2 Qué queda de las candidaturas C3

Hay que separar tres hechos que es fácil confundir en una sola frase.

**Hecho 1 · Dos candidaturas C3 existieron como dato y el historial de Git las conserva.**

Se recorrieron los 177 commits de todas las ramas y los 24 blobs JSON distintos de `atlas-2/`, buscando la coincidencia de un campo de candidatura con la clave de C3 dentro del mismo registro. El resultado:

| Commit | Fecha (UTC) | Archivo | Entrada | Campo | Valor |
|---|---|---|---|---|---|
| `619ad67` | 2026-08-08 04:52:33 | `atlas-2/piloto-config.json` | `price` | `corrientes_candidatas` | `["fugas_cimarronajes_emancipaciones", "memorias_espiritualidades_archivos_vivos"]` |
| `619ad67` | ídem | `atlas-2/piloto-config.json` | `totumo` | `corrientes_candidatas` | ídem |
| `619ad67` | ídem | `atlas-2/piloto-generado.json` | `price` | `corrientes_candidatas` | ídem |
| `619ad67` | ídem | `atlas-2/piloto-generado.json` | `totumo` | `corrientes_candidatas` | ídem |

El registro completo de `price` en esa versión muestra el estado en que vivía la candidatura:

```json
{
 "id": "price",
 "procedencia": "corpus heredado",
 "proceso": ["reclasificación"],
 "revision": { "estado": "pendiente_revision_con_texto" },
 "corrientes_candidatas": [
  "fugas_cimarronajes_emancipaciones",
  "memorias_espiritualidades_archivos_vivos"
 ],
 "pendientes": ["corriente_principal", "operaciones", "orillas", "temporalidades"]
}
```

Dos observaciones que cambian la lectura del caso. Primero, **la candidatura no era única**: proponía C3 y C9 a la vez, de modo que `price` y `totumo` pertenecían al grupo que la metodología describe como entradas que exigen lectura, no al de candidatura derivable sin ambigüedad. Segundo, **la candidatura convivía con el estado `pendiente_revision_con_texto`**, que es exactamente lo que la regla prevé.

**Hecho 2 · El campo desapareció 48 minutos después, al confirmarse.**

Precisión necesaria antes de cualquier tabla, y formulación que este expediente adopta de manera invariable en todas sus secciones:

> En `619ad67`, las diez entradas del piloto contienen una clave de candidatura. Nueve registran una o más corrientes candidatas con valor no vacío y una, `bourgoisethnicity`, presenta `corrientes_candidatas: []`.

La clave de candidatura es, según el caso, `corriente_candidata` en singular o `corrientes_candidatas` en plural. Las tres magnitudes —clave presente, valor no vacío, valor vacío— se declaran siempre por separado, para que ninguna quede implícita:

| Commit | Fecha (UTC) | Mensaje | Entradas del piloto | Con clave presente | Con valor no vacío | Con valor vacío |
|---|---|---|---|---|---|---|
| `619ad67` | 2026-08-08 04:52:33 | Añade piloto de arquitectura Atlas 2.0 | 10 | **10** | **9** | **1** (`bourgoisethnicity`) |
| `99aec5b` | 2026-08-08 05:40:29 | Corrige arquitectura y dictamen del piloto Atlas 2.0 | 10 | **0** | **0** | **0** |
| `2343008` | 2026-08-08 11:44:42 | Incorpora lote S01 y relaciones por obra componente | 10 | 0 | 0 | 0 |

La tabla siguiente recoge las nueve entradas con valor no vacío; `bourgoisethnicity` queda fuera de ella porque no propone ninguna corriente, y se registra arriba para que el recuento de diez no quede sin explicar. La lista es idéntica en `piloto-config.json` y en `piloto-generado.json`.

| # | Entrada | Campo | Estado de revisión | Valor |
|---|---|---|---|---|
| 1 | `mintz` | `corriente_candidata` | `candidatura_preliminar` | `postplantacion_trabajo_desposesion` |
| 2 | `price` | `corrientes_candidatas` | `pendiente_revision_con_texto` | `["fugas_cimarronajes_emancipaciones", "memorias_espiritualidades_archivos_vivos"]` |
| 3 | `totumo` | `corrientes_candidatas` | `pendiente_revision_con_texto` | `["fugas_cimarronajes_emancipaciones", "memorias_espiritualidades_archivos_vivos"]` |
| 4 | `chande` | `corrientes_candidatas` | `pendiente_revision_con_texto` | `["creolizaciones_traducciones_opacidades", "memorias_espiritualidades_archivos_vivos"]` |
| 5 | `steward` | `corriente_candidata` | `candidatura_preliminar` | `postplantacion_trabajo_desposesion` |
| 6 | `stewardpuertorico` | `corriente_candidata` | `candidatura_preliminar` | `postplantacion_trabajo_desposesion` |
| 7 | `bassiacuoso` | `corrientes_candidatas` | `pendiente_revision_con_texto` | `["soberanias_fronteras_ocupaciones", "rutas_diasporas_territorios_acuosos"]` |
| 8 | `williamscapitalismo` | `corrientes_candidatas` | `pendiente_revision_con_texto` | `["postplantacion_trabajo_desposesion", "trata_esclavizacion_plantacion"]` |
| 9 | `keeganhofman` | `corrientes_candidatas` | `pendiente_revision_con_texto` | `["invasiones_mundos_indigenas", "memorias_espiritualidades_archivos_vivos"]` |

La confirmación editorial sustituyó la candidatura por la corriente confirmada y **borró el campo en lugar de conservarlo**.

Dos observaciones de método que la tabla permite hacer.

**Primera.** El reparto exacto entre campo singular y campo plural, que este expediente formula siempre así:

> Tres entradas presentan `corriente_candidata` en singular y valor no vacío; seis presentan `corrientes_candidatas` en plural y valor no vacío; una séptima, `bourgoisethnicity`, presenta el campo plural con lista vacía.

Las tres del campo singular están en estado `candidatura_preliminar`; las seis del campo plural con contenido no vacío están en `pendiente_revision_con_texto`. La distinción entre candidatura única y candidatura ambigua funcionaba como el esquema prescribe: 3 únicas y 6 ambiguas, sobre las 9 con valor no vacío. Sumadas a `bourgoisethnicity`, que lleva el campo plural vacío, dan las 10 entradas con clave presente. El campo plural, por tanto, aparece en siete entradas: seis con contenido y una vacía.

**Segunda.** `memorias_espiritualidades_archivos_vivos` aparece como una de las opciones en **cuatro de las nueve** entradas con candidatura de valor no vacío y en **cuatro de las seis** candidaturas ambiguas con contenido no vacío: `price`, `totumo`, `chande` y `keeganhofman`. Fue la opción compartida más frecuente dentro de esas seis candidaturas ambiguas del piloto. El recuento completo de las seis con contenido no vacío, contando cada corriente citada, da:

| Corriente citada | Veces |
|---|---|
| `memorias_espiritualidades_archivos_vivos` | 4 |
| `fugas_cimarronajes_emancipaciones` | 2 |
| `creolizaciones_traducciones_opacidades` | 1 |
| `soberanias_fronteras_ocupaciones` | 1 |
| `rutas_diasporas_territorios_acuosos` | 1 |
| `postplantacion_trabajo_desposesion` | 1 |
| `trata_esclavizacion_plantacion` | 1 |
| `invasiones_mundos_indigenas` | 1 |

Ninguna otra corriente alcanza esa frecuencia ni la supera. Cuatro casos permiten decir que fue la más frecuente entre las seis ambiguas; no permiten decir que fuera una opción por defecto del procedimiento.

**Esto incumple el esquema del propio proyecto.** `esquema-datos-propuesto.json` documenta el campo así:

> «Candidatura preliminar derivada de la taxonomía anterior, sujeta a confirmación editorial. Se conserva junto a la corriente confirmada para poder auditar en qué casos la lectura corrigió a la derivación.»

El esquema ordena conservarla precisamente para permitir la auditoría que este expediente no puede hacer. El validador `validar-piloto-atlas-2.mjs` comprueba que las candidaturas sean válidas y que un estado `candidatura_preliminar` tenga corriente única, pero **no comprueba que la candidatura se conserve tras confirmarse**, de modo que el borrado pasa la validación.

**Hecho 3 · Otras dos candidaturas C3 no fueron localizadas como dato.**

`helgnuncamas` y `tackysrevolt`, ambas de A01, llevan `decision_aprobada: "confirmar_candidatura"`. **No fueron localizadas como campo de datos en ninguna versión de A01 ni en el historial del repositorio examinado**: `a01-config.json` y `a01-generado.json` tienen un solo commit cada uno, `58723f9`, y ninguno contiene campo de candidatura. Su existencia está atestiguada por el nombre de la decisión, pero su contenido no es recuperable con la evidencia localizada.

La distinción importa. Una ausencia en las versiones y rutas examinadas no es lo mismo que una inexistencia. El examen cubrió los 24 blobs JSON distintos de `atlas-2/` a lo largo de los 177 commits del repositorio; una candidatura que hubiera vivido fuera de esos archivos —en una hoja de cálculo, en un cuaderno de trabajo, en un intercambio no versionado— quedaría fuera del alcance de esta búsqueda.

El fenómeno no es exclusivo de C3: entre los cuatro lotes hay 17 decisiones cuyo nombre contiene «candidatura» —15 `confirmar_candidatura`, una `confirmar_candidatura_con_nota_diasporica` y una `confirmar_candidatura_y_corregir_bibliografia`—, de las cuales 2 corresponden a C3.

**Hecho 4 · La migración consta como proceso en los registros.** 41 de los 57 registros de lote declaran el valor `migración` en su campo `proceso`. De las seis clasificaciones C3, cuatro lo declaran: `helgnuncamas`, `tackysrevolt`, `hall_slavesocietydanish` y `hazareesingh`. Las otras dos, `price` y `totumo`, declaran solo `reclasificación`, coherentemente con que su candidatura fuera doble y exigiera lectura.

**Hecho 5 · No se localizó un artefacto completo ni reproducible.** El árbol vigente no contiene ningún campo de candidatura con valor C3: el único que existe en los cuatro generados pertenece a `gudynas` y apunta a C6. **No se localizó un listado general en ninguna versión examinada del repositorio** que corresponda a las «51 entradas con candidatura única» que anuncia la metodología, ni como archivo ni como campo.

**Sobre cómo se perdió cada cosa, tres situaciones distintas.** No se localizaron archivos eliminados dentro de `atlas-2/`. Para `price` y `totumo`, el historial demuestra que el campo de candidatura fue sustituido dentro de los archivos existentes entre `619ad67` y `99aec5b`. Para `helgnuncamas` y `tackysrevolt`, no se localizó el campo en ninguna versión examinada de A01. La causa de la no localización del artefacto general de 51 candidaturas no puede determinarse: la evidencia no permite establecer si nunca se produjo, si existió fuera del repositorio o si no fue incorporado a Git.

**Formulación que la evidencia sostiene:**

> El repositorio vigente no conserva un artefacto que permita reconstruir y auditar las candidaturas previas de C3. El historial de Git conserva dos de ellas —`price` y `totumo`, en el commit `619ad67`— y demuestra que fueron borradas al confirmarse, contra lo que el esquema del proyecto prescribe. Otras dos, `helgnuncamas` y `tackysrevolt`, están atestiguadas únicamente por el nombre de su decisión y su contenido no es recuperable. **No se localizó un listado general en ninguna versión examinada del repositorio.** Por ello, la migración está parcialmente evidenciada, pero no es auditable para el corpus completo.

La consecuencia práctica es acotada: no puede saberse cuántas de las 26 entradas con `cimarronaje` habrían recibido candidatura ni con qué corrientes alternativas. **C9 aparece como corriente alternativa en las dos candidaturas históricas recuperadas, `price` y `totumo`. La evidencia disponible no permite establecer si ese patrón se repetía en otras candidaturas.** Lo que sí puede hacerse es leer las 21 entradas etiquetadas sin revisar, que es de todos modos lo que la regla exige antes de confirmar.

### 5.3 Cómo llegaron realmente las seis clasificaciones

Los seis casos siguieron cuatro procedimientos distintos, y conviene no unificarlos.

| id | Procedimiento | Decisión aprobada | Etiquetas heredadas | `proceso` declarado | Candidatura previa |
|---|---|---|---|---|---|
| `price` | Confirmación directa | `confirmar` | cimarronaje, memoria | reclasificación | **Sí, registrada como dato en `619ad67`**: C3 y C9 |
| `totumo` | Confirmación con corrección | `confirmar_con_correccion` | cimarronaje, memoria | corrección bibliográfica, reclasificación | **Sí, registrada como dato en `619ad67`**: C3 y C9 |
| `helgnuncamas` | Confirmación de candidatura previa | `confirmar_candidatura` | cimarronaje, violencias | migración, reclasificación | Atestiguada por el nombre de la decisión; contenido no recuperable |
| `tackysrevolt` | Confirmación de candidatura previa | `confirmar_candidatura` | cimarronaje, violencias | migración, reclasificación | Ídem |
| `hall_slavesocietydanish` | Corrección de corriente | `corregir_corriente` | violencias, cimarronaje | migración, reclasificación | Sin rastro |
| `hazareesingh` | Corrección de corriente | `corregir_corriente` | **soberanias, violencias** | migración, reclasificación | Sin rastro |

Lo que cada columna permite y no permite afirmar:

- **Demostrado por los campos actuales**: las seis clasificaciones, sus fundamentos, sus responsables, sus fechas, y el valor `migración` en el campo `proceso` de cuatro de ellas.
- **Demostrado por el historial de Git**: que `price` y `totumo` tuvieron candidatura doble, C3 y C9, en estado `pendiente_revision_con_texto`.
- **Sugerido por el nombre de la decisión, no por un campo**: que `helgnuncamas` y `tackysrevolt` tuvieron candidatura previa. El nombre lo dice; ningún dato lo registra.
- **No reconstruible**: qué corrientes proponía esa candidatura en A01, y si era única o doble.
- **Papel de la etiqueta heredada**: `cimarronaje` está presente en cinco de las seis y orientó la lectura, pero no bastó por sí sola en ningún caso: las seis exigieron decisión editorial escrita.
- **Intervención editorial sin etiqueta**: la etiqueta heredada `cimarronaje`, considerada aisladamente, no habría permitido incluir `hazareesingh` en el conjunto inicial de 26 entradas. Su incorporación a C3 se produjo mediante una corrección editorial registrada. Qué habría propuesto la regla de derivación completa no puede afirmarse, porque no se localizó esa regla especificada en ningún archivo examinado del repositorio.

Cuatro procedimientos distintos para seis casos, dos de ellos correcciones de una asignación anterior, es un proceso editorial mixto. **No es una migración automática plenamente documentada, y tampoco es una relectura que ignore la migración.**

### 5.4 Vía demostrada

De las cinco descripciones posibles, la evidencia sostiene la tercera y abre la cuarta:

| Descripción | Sostenida por la evidencia |
|---|---|
| Migración automática, plenamente documentada | **No.** Ninguna clasificación se cerró sin decisión editorial escrita; el campo que permitiría auditar la derivación fue borrado al confirmarse; una de las seis entró sin la etiqueta |
| Migración parcial, evidenciada y no auditable | **Sí.** Consta en el campo `proceso` de 41 registros, en cuatro decisiones que nombran la candidatura y en dos candidaturas conservadas por el historial |
| Relectura dirigida | **Sí.** Es el procedimiento que cierra los seis casos, con responsable, fecha y fundamento |
| Intervención editorial fuera de la etiqueta | **Sí, en un caso.** `hazareesingh` |
| Siembra complementaria por vacíos | **No demostrada.** Depende de indicios que solo pueden confirmarse leyendo las 30 entradas del conjunto exploratorio que no han sido revisadas en los lotes auditados |

**Formulación general:** la constitución de C3 es un **proceso editorial mixto y solo parcialmente auditable**. La etiqueta heredada `cimarronaje` orientó una migración que consta en los registros y en el historial, pero cuyo rastro fue borrado en el momento de la confirmación; las seis clasificaciones se cerraron por lectura editorial con fundamento escrito; una de ellas ingresó por corrección, fuera de la etiqueta; y la siembra no puede evaluarse todavía.

La diferencia entre esta formulación y la del documento de arquitectura no es de matiz: decide si la etapa siguiente debe reconstruir el listado de candidaturas antes de seguir, o puede prescindir de él.

---

## 6. Recuento exacto de la etiqueta heredada `cimarronaje`

### 6.1 Cifras y método

| Indicador | Valor |
|---|---|
| Versión del corpus | 1.16.1, fecha 2026-08-11 |
| Entradas totales | 232 |
| Identificadores únicos | 232 |
| Entradas con `cimarronaje` | 26 |
| Identificadores únicos con `cimarronaje` | 26 |
| Porcentaje exacto | 11,2069 % |
| Porcentaje redondeado | 11 % |

Criterio de redondeo: redondeo al entero más próximo. 11,2069 redondea a 11.

**Procedimiento A.** Lectura de `datos-atlas.json` con Python, filtrando las obras cuyo campo `f` contiene `cimarronaje`, y recuento de identificadores únicos mediante conjunto.

**Procedimiento B.** Lectura independiente de `datos-atlas.js` con Node, extrayendo el objeto `window.ATLAS`, aplicando el mismo filtro y comparando la lista ordenada de identificadores.

Los dos procedimientos devolvieron 26, el mismo porcentaje con cuatro decimales y la misma lista de identificadores. No se copió el resultado de uno al otro: se ejecutaron sobre archivos distintos con herramientas distintas.

### 6.2 Los 26 identificadores

`alabi` · `chevannes` · `duboisturits` · `escalante` · `ferrerfreedomsmirror` · `fouchard` · `friedemannlengua` · `gonzalezsojourners` · `hall_slavesocietydanish` · `helgnuncamas` · `james` · `lebroncimarronaje` · `mendozaraices` · `price` · `pricefirst` · `quintero` · `rainforestwarriors` · `rebeldestiny` · `rifkinfictions` · `roberts` · `tackysrevolt` · `totumo` · `travelstooy` · `truebornmaroons` · `zapataarbol` · `zips_nannysasafo`

### 6.3 Diferencias con cifras de documentos anteriores

El documento de arquitectura declara «26 entradas, 11 %». Ambas coinciden con el recuento vigente. El documento `fenomenos-ampliacion.md` declara 26 entradas para `cimarronaje` sobre un corpus de 233, lo que da 11,16 %; la diferencia proviene de que ese documento se escribió contra la versión 1.15.0, antes de la fusión de `steward` y `stewardpuertorico`. **La cifra de entradas con `cimarronaje` no cambió con la fusión, porque ninguna de las dos entradas fusionadas llevaba esa etiqueta.**

No se detectaron duplicados, entradas compuestas ni retiradas que afecten el recuento de `cimarronaje`.

---

## 7. Auditoría de P00, S01, A01 y A02

### 7.1 Volumen y unicidad

| Lote | Entradas |
|---|---|
| P00 | 10 |
| S01 | 11 |
| A01 | 18 |
| A02 | 18 |
| **Total de registros** | **57** |

Identificadores únicos entre los cuatro lotes: 57. No hay repeticiones entre lotes.

### 7.2 Una discrepancia estructural, resuelta

La suma directa no cuadra con el corpus: 57 registros más 176 entradas no revisadas dan 233, y el corpus tiene 232.

**Causa localizada.** El registro `stewardpuertorico` del lote P00 tiene `decision_aprobada: "fusionar_y_redirigir"`, estado `revisada`, y su fundamento dice: «Es la misma obra que steward; sus metadatos y relaciones se conservan mediante fusión y redirección». Esa entrada ya no existe en el corpus vigente: figura como la única redirección registrada, `stewardpuertorico → steward`. El destino, `steward`, sí está en el corpus y también fue revisado en P00.

**Reconciliación correcta:**

```
57 registros de lote = 56 entradas efectivas del corpus + 1 registro de fusión
232 entradas del corpus = 56 revisadas + 176 no revisadas
```

Ambas igualdades cuadran por cantidad y por identificadores.

### 7.3 Campos consultados

Se buscó la clave `fugas_cimarronajes_emancipaciones` en la totalidad del objeto de migración de cada registro, no solo en campos concretos. Los campos existentes en el esquema de los lotes son: `id`, `decision_aprobada`, `procedencia`, `procedencia_verificada`, `proceso`, `revision` (con `estado`, `fundamento`, `responsable`, `fecha`), `corriente_confirmada`, `corrientes_secundarias`, `lenguas_publicacion`, `operaciones`, `orillas`, `temporalidades`, `fuentes_revision`, `pendientes` y, en un solo caso ajeno a C3, `corrientes_candidatas`.

---

## 8. Clasificaciones C3 confirmadas

Las seis clasificaciones tienen estado `confirmada`, responsable «Dirección académica de Pensamiento Caribe» y fecha 2026-08-08. Los fundamentos están entre comillas porque son transcripción literal del registro del lote.

### 8.1 C3 como corriente principal: cinco

| Lote | id | Título | Autoría | Año | Etiquetas heredadas | Secundarias | Fundamento literal | Frontera que ayuda a establecer |
|---|---|---|---|---|---|---|---|---|
| P00 | `price` | *Maroon Societies* | Richard Price (ed.) | 1973 | cimarronaje, memoria | ninguna | «El volumen organiza una comparación hemisférica de comunidades cimarronas y combina fuentes históricas y estudios antropológicos.» | Núcleo de la corriente: comunidad cimarrona como objeto |
| P00 | `totumo` | *Los acuerdos y la idealización del palenque en la provincia de Cartagena: el caso del Totumo (1714-1767)* | Dolcey Romero Jaramillo | sin año | cimarronaje, memoria | ninguna | «El artículo reconstruye acuerdos entre cimarrones y autoridades coloniales y cuestiona la idealización del palenque como libertad absoluta.» | El palenque como negociación y no solo como ruptura |
| A01 | `helgnuncamas` | *¡Nunca más esclavos! Una historia comparada de los esclavos que se liberaron en las Américas* | Aline Helg | 2016 / trad. esp. 2018 | cimarronaje, violencias | C2 | «Las estrategias mediante las cuales personas esclavizadas se liberaron articulan la comparación; el régimen esclavista es el contexto secundario.» | C3 frente a C2: la estrategia de liberación como argumento |
| A01 | `tackysrevolt` | *Tacky's Revolt: The Story of an Atlantic Slave War* | Vincent Brown | 2020 | cimarronaje, violencias | C2, C5 | «La insurrección es narrada como guerra atlántica con estrategia y redes propias; esclavización y rutas atlánticas son secundarias.» | C3 frente a C2 y C5: insurgencia con redes propias |
| A02 | `hazareesingh` | *Black Spartacus: The Epic Life of Toussaint Louverture* | Sudhir Hazareesingh | 2020 | **soberanias, violencias** | C7, C9 | «La biografía se organiza alrededor de revolución, emancipación y estrategia de Toussaint; soberanía y memoria política funcionan como secundarias.» | C3 frente a C7: la revolución como sustracción y no como forma estatal |

### 8.2 C3 como corriente secundaria: una

| Lote | id | Título | Autoría | Año | Etiquetas heredadas | Principal | Fundamento literal | Frontera que ayuda a establecer |
|---|---|---|---|---|---|---|---|---|
| A01 | `hall_slavesocietydanish` | *Slave Society in the Danish West Indies: St. Thomas, St. John and St. Croix* | Neville A. T. Hall, ed. B. W. Higman | 1992 | violencias, cimarronaje | C2 | «El libro define la esclavitud como fundamento de toda la sociedad colonial; rebeliones y emancipación son capítulos de esa arquitectura, no el principio ordenador.» | C2 frente a C3: la rebelión como capítulo y no como principio ordenador |

### 8.3 Dos hechos que conviene destacar

**`hazareesingh` entró a C3 sin la etiqueta heredada.** Sus etiquetas son `soberanias` y `violencias`. La etiqueta heredada `cimarronaje`, considerada aisladamente, no habría permitido incluirla en el conjunto inicial de 26 entradas. Su incorporación a C3 se produjo mediante una corrección editorial registrada, `corregir_corriente`, que enmendó una asignación previa. Qué habría producido la regla de derivación completa no puede afirmarse, porque no se localizó esa regla especificada en ningún archivo examinado del repositorio.

**`price` y `totumo` no declaran ninguna corriente secundaria.** Son las dos únicas clasificaciones C3 sin secundaria, y las dos son obras cuyo objeto es directamente la comunidad cimarrona. Las tres restantes —liberación comparada, insurrección, revolución— sí necesitaron secundarias.

---

## 9. Candidaturas: activas, resueltas y no recuperables

**No hay ninguna candidatura C3 activa.** Ningún registro de los cuatro lotes declara `fugas_cimarronajes_emancipaciones` en un campo de candidatura. El único campo `corrientes_candidatas` presente en los cuatro archivos generados pertenece a `gudynas`, con valor `["huracanes_ecologias_materialidades_vivas"]`.

**Hubo al menos cuatro candidaturas C3, y dos conservan su contenido.**

| Estado | Entradas | Evidencia | Contenido recuperable |
|---|---|---|---|
| Activa en el árbol vigente | 0 | Ningún campo de candidatura con valor C3 en los cuatro generados | — |
| Resuelta, con contenido conservado por el historial | 2: `price`, `totumo` | `corrientes_candidatas` en `619ad67`, archivos `piloto-config.json` y `piloto-generado.json` | **Sí**: C3 y C9, candidatura doble, estado `pendiente_revision_con_texto` |
| Resuelta, atestiguada solo por el nombre de la decisión | 2: `helgnuncamas`, `tackysrevolt` | `decision_aprobada: "confirmar_candidatura"` en A01 | **No**: ninguna versión de A01 registró el campo |
| Existencia posible, no atestiguada | indeterminado | No se localizó un listado general en ninguna versión examinada del repositorio | — |

**Recuento del piloto en `619ad67`, en la formulación invariable de este expediente.** En `619ad67`, las diez entradas del piloto contienen una clave de candidatura. Nueve registran una o más corrientes candidatas con valor no vacío y una, `bourgoisethnicity`, presenta `corrientes_candidatas: []`. De esas nueve, dos —`price` y `totumo`— citan C3. En `99aec5b`, 48 minutos después, las tres magnitudes caen a cero: 0 con clave presente, 0 con valor no vacío, 0 con valor vacío.

**No es recuperable el universo completo.** No puede establecerse cuántas candidaturas C3 produjo la regla sobre el corpus ni sobre cuáles de las 26 entradas con `cimarronaje` recayeron. La no localización del listado impide auditar y reproducir la migración; **no demuestra que la migración no haya ocurrido**, y tanto el campo `proceso` de 41 registros como las dos candidaturas conservadas en `619ad67` indican que sí ocurrió.

**Causas, separadas según lo que cada una tiene demostrado.** No conviene extender a todo el corpus lo que solo está probado para dos entradas.

No se localizaron archivos eliminados dentro de `atlas-2/` en ninguna versión del historial. Con esa base común, las tres situaciones son distintas y solo una tiene mecanismo identificado.

| Caso | Estatuto | Evidencia |
|---|---|---|
| Sustitución del campo en `price` y `totumo` | **Causa comprobada** | El campo existe en `619ad67` y no existe en `99aec5b`, dentro de los mismos dos archivos. Fue sustituido al pasar la entrada de `pendiente_revision_con_texto` a `confirmada` |
| Falta de registro en `helgnuncamas` y `tackysrevolt` | **Falta de registro comprobada** | Los dos archivos de A01 tienen un solo commit y ninguno contiene campo de candidatura. No hubo sustitución: no se localizó registro en ninguna versión examinada |
| Ausencia del artefacto general de 51 candidaturas | **Causa no determinada** | No se localizó el listado en ninguno de los 24 blobs JSON de `atlas-2/` a lo largo de 177 commits. Pudo no haberse versionado, haber existido fuera del repositorio o haberse registrado mediante un mecanismo no localizado |

El mecanismo comprobado para `price` y `totumo` **no puede extenderse a los otros dos casos**. La sustitución de campos está demostrada para dos entradas del piloto y para ninguna otra cosa.

Lo que sí es común a las tres es una omisión del control. El esquema del proyecto prescribe conservar la candidatura junto a la corriente confirmada, «para poder auditar en qué casos la lectura corrigió a la derivación», y el validador `validar-piloto-atlas-2.mjs` comprueba que las candidaturas sean válidas y que un estado `candidatura_preliminar` tenga corriente única, pero **no comprueba que la candidatura se conserve tras confirmarse**. Ningún borrado produjo error.

---

## 10. Entradas con `cimarronaje` revisadas sin rol en C3

**Ninguna.** Las cinco entradas con etiqueta `cimarronaje` que pasaron por lote recibieron todas un rol en C3: cuatro como principal y una como secundaria.

```
|cimarronaje ∩ revisadas| = 5
|cimarronaje ∩ revisadas ∩ (C3 principal ∪ C3 secundaria)| = 5
|cimarronaje ∩ revisadas sin rol C3| = 0
```

Es un contraste con C2, donde ocho entradas con señal fueron revisadas y confirmadas en otras corrientes.

**Lo que puede concluirse, y solo eso:** en los cinco casos revisados hasta ahora, la etiqueta heredada `cimarronaje` coincidió con la asignación de algún rol en C3. Este resultado describe únicamente los casos observados y no permite extrapolar el comportamiento de las 21 entradas restantes.

Hay una razón concreta para no extrapolar. Las cinco no son una muestra aleatoria: los lotes se armaron con criterios de selección propios, declarados en el campo `criterio_seleccion` de cada configuración, y dos de ellas —`price` y `totumo`— entraron al piloto de arquitectura precisamente por su relación evidente con el cimarronaje. Un conjunto elegido por su claridad no dice nada sobre los casos difíciles, y entre las 21 entradas etiquetadas sin revisar hay varias que el guion no resuelve, según la tabla del apartado 4.3.

---

## 11. Entradas pendientes de revisión con etiqueta `cimarronaje`: veintiuna

Ninguna es candidatura. Son entradas con etiqueta heredada, pendientes de lectura.

| id | Título | Autoría | Año | Etiquetas | Nota del aporte que orienta la lectura |
|---|---|---|---|---|---|
| `rebeldestiny` | *Rebel Destiny: Among the Bush Negroes of Dutch Guiana* | Melville y Frances Herskovits | 1934 | cimarronaje, memoria | «La primera etnografía de un pueblo cimarrón de las Américas» |
| `james` | *The Black Jacobins: Toussaint L'Ouverture and the San Domingo Revolution* | C.L.R. James | 1938 | cimarronaje, soberanias, colonialidad | «La revolución haitiana narrada como el acontecimiento que funda la modernidad negra» |
| `escalante` | *El Palenque de San Basilio* | Aquiles Escalante | 1954 | cimarronaje, memoria | «La primera etnografía académica de Palenque» |
| `fouchard` | *Les marrons de la liberté* | Jean Fouchard | 1972 | cimarronaje, soberanias | «El cimarronaje como motor de la Revolución haitiana» |
| `friedemannlengua` | *Lengua y sociedad en el Palenque de San Basilio* | Carlos Patiño Rosselli y Nina S. de Friedemann | 1983 | creolizacion, cimarronaje | «Fija la lengua palenquera como criollo con estatus propio» |
| `pricefirst` | *First-Time: The Historical Vision of an Afro-American People* | Richard Price | 1983 | cimarronaje, memoria | «La historia saramaka contada como los saramaka la cuentan» |
| `gonzalezsojourners` | *Sojourners of the Caribbean: Ethnogenesis and Ethnohistory of the Garifuna* | Nancie L. González | 1988 | cimarronaje, memoria | «Un pueblo que nace de la fuga y no de un territorio originario fijo» |
| `alabi` | *Alabi's World* | Richard Price | 1990 | cimarronaje, soberanias | «La soberanía cimarrona tramitada entre la fe morava y el poder colonial» |
| `chevannes` | *Rastafari: Roots and Ideology* | Barry Chevannes | 1994 | memoria, cimarronaje | «El rastafarismo como ideología de ruptura» |
| `truebornmaroons` | *True-Born Maroons* | Kenneth Bilby | 2005 | cimarronaje, memoria | «Identidad maroon como tratado, no solo como origen» |
| `travelstooy` | *Travels with Tooy: History, Memory, and the African American Imagination* | Richard Price | 2008 | memoria, cimarronaje | «Cómo la memoria ritual se hace historia» |
| `quintero` | *Cuerpo y cultura: las músicas «mulatas» y la subversión del baile* | Ángel Quintero Rivera | 2009 | creolizacion, cimarronaje | «Cimarronería sonora: el baile y el ritmo como subversión» |
| `rainforestwarriors` | *Rainforest Warriors: Human Rights on Trial* | Richard Price | 2011 | cimarronaje, soberanias | «El cimarronaje del siglo XVII vuelto litigio internacional del XXI» |
| `zips_nannysasafo` | *Nanny's Asafo Warriors: The Jamaican Maroons' African Experience* | Werner Zips | 2011 | cimarronaje, memoria | Relee a Nanny, «única Héroe Nacional femenina de Jamaica» |
| `zapataarbol` | *El árbol brujo de la libertad* | Manuel Zapata Olivella | 2014 | memoria, creolizacion, cimarronaje | «Africanía como categoría propia del Caribe colombiano» |
| `ferrerfreedomsmirror` | *Freedom's Mirror: Cuba and Haiti in the Age of Revolution* | Ada Ferrer | 2014 | colonialidad, cimarronaje | «Cuba y Haití como espejos invertidos de la misma era revolucionaria» |
| `roberts` | *Freedom as Marronage* | Neil Roberts | 2015 | cimarronaje, soberanias | «La libertad pensada como fuga y no como estado» |
| `rifkinfictions` | *Fictions of Land and Flesh: Blackness, Indigeneity, Speculation* | Mark Rifkin | 2019 | soberanias, cimarronaje, memoria | «La relación con la tierra que reclama la soberanía indígena y la que abre la fuga cimarrona no son la misma» |
| `duboisturits` | *Freedom Roots: Histories from the Caribbean* | Laurent Dubois y Richard Lee Turits | 2019 | soberanias, cimarronaje, postplantacion | «La libertad caribeña se pensó primero como acceso a la tierra y a la vida propia» |
| `lebroncimarronaje` | *Filosofía del cimarronaje* | Pedro Lebrón Ortiz | 2021 | cimarronaje, soberanias | «Convierte el cimarronaje en categoría filosófica y no en episodio histórico» |
| `mendozaraices` | *Raíces, Resistencias y Territorios: 500 años de experiencia Afro en Santa Marta* | María Angélica del Mar Mendoza Manotas (comp.) et al. | 2026 | memoria, cimarronaje | Medio milenio de presencia afro en Santa Marta |

---

## 12. Señales léxicas exploratorias

### 12.1 Patrón declarado

Condición del patrón, declarada sin ambigüedad:

- Es **exploratorio**. No fue aprobado previamente por ninguna instancia.
- Fue construido **para ordenar la lectura**, no para clasificar.
- **No es un mecanismo clasificatorio** y no ha sido validado como tal.
- Busca en **título, autoría y aporte al Atlas**, es decir en metadatos, **no en las obras completas**.
- **Presenta omisiones comprobadas respecto de la etiqueta heredada e indicios de ruido todavía no evaluados**, ambos documentados más abajo.
- **No puede crear candidaturas ni ampliar automáticamente la corriente.** Ninguna entrada ingresa a C3 por haber disparado un término.

Campos consultados: `t` (título), `a` (autoría), `ap` (aporte al atlas). No se consultó `tr`, porque en C3 la lengua no orienta.

| Grupo de términos | Expresión | Justificación |
|---|---|---|
| cimarrón | `cimarr` | Término central de la corriente en español |
| marronage | `marron`, `maroon`, `bush negro` | Nombre del campo disciplinar en inglés y francés; `bush negro` es el término histórico de la etnografía surinamesa |
| palenque | `palenqu` | Forma territorial hispanocaribeña |
| quilombo | `quilombo` | Forma territorial brasileña, incluida por comparatismo |
| fuga | `fuga`, `huida`, `huir`, `flight`, `escape` | El acto que da nombre a la corriente |
| rebelión | `rebelión`, `rebel`, `revuelta`, `revolt`, `uprising`, `insurg`, `insurrec` | Insurgencia declarada en el guion |
| revolución | `revolución`, `revolution` | Registro que el guion incluye y el título no |
| emancipación | `emancipa` | Tercer término de la denominación |
| abolición | `abolición`, `abolition` | «Procesos de abolición leídos desde abajo», según el guion |
| libertad | `libertad`, `freedom`, `liberty`, `liberar`, `liberated` | Concepto que articula la filosofía del cimarronaje |

### 12.2 Resultado y sus límites

| Indicador | Valor |
|---|---|
| Entradas con al menos una señal | 52 de 232 (22,4 %) |
| Señal sin etiqueta `cimarronaje` | 30 |
| Etiqueta `cimarronaje` sin señal | 4 |
| Clasificaciones C3 confirmadas con señal | 6 de 6 |
| Clasificaciones C3 confirmadas sin señal | 0 |

**Omisiones del patrón respecto del conjunto etiquetado `cimarronaje`.** Cuatro entradas llevan esa etiqueta y no disparan ningún término: `chevannes`, `mendozaraices`, `pricefirst` y `travelstooy`. En los cuatro casos el título y el aporte hablan de rastafarismo, presencia afro, visión histórica saramaka y memoria ritual, sin usar ninguna palabra del patrón. **Un método léxico no habría recuperado ninguna de las cuatro.**

No se las llama falsos negativos de C3, porque la etiqueta heredada no equivale a clasificación en la corriente: ninguna de las cuatro ha sido leída ni dictaminada respecto de C3. Lo comprobado es que el patrón omite obras que el propio corpus ya señala como cimarronas, y eso basta para acotar su alcance.

**Indicios de ruido, no falsos positivos comprobados.** Ninguna de las 46 entradas sin rol C3 ha sido leída ni sometida a decisión editorial respecto de esta corriente, de modo que **no puede llamarse falso positivo a ninguna de ellas**. Lo que sí puede decirse es que los dos términos más productivos son los que más riesgo de ruido introducen. `libertad` recoge `bonilla` (*Non-Sovereign Futures*), `lara` (*Queer Freedom: Black Sovereignty*) y `shellererotic` (*Citizenship from Below: Erotic Agency and Caribbean Freedom*), cuyos títulos apuntan a soberanía y erótica. `revolución` recoge `johnson_climatecuba` (*Climate and Catastrophe in Cuba and the Atlantic World in the Age of Revolution*), donde «Age of Revolution» parece una datación. Son hipótesis sobre el comportamiento del patrón, no dictámenes sobre esas obras.

**Comparación exigida:**

| Cruce | Cantidad |
|---|---|
| Señal sin pertinencia confirmada | 46 de las 52 entradas recuperadas por el patrón léxico no tienen actualmente un rol confirmado en C3 y permanecen sin evaluación específica para esta corriente |
| Pertinencia confirmada sin señal | 0 |
| Etiqueta heredada sin confirmación C3 | 21 de 26 siguen pendientes |
| Confirmación C3 sin etiqueta heredada | 1, `hazareesingh` |

Que las seis clasificaciones confirmadas tengan señal no valida el patrón: cinco de ellas tienen además la etiqueta, y la sexta habla de revolución en su propio título.

---

## 13. Fenómenos compatibles con C3 y sus anclas

El catálogo declara su estado: «borrador para dictamen académico; no se ha aplicado al corpus publicado», versión `0.1.0-borrador`, fecha 2026-08-10. **Una compatibilidad declarada no es una clasificación, y un ancla no es una candidatura.**

Cuatro fenómenos declaran C3 entre sus corrientes compatibles. Diecisiete anclas distintas, todas existentes en el corpus.

### 13.1 `cimarronaje_territorial` — familia `fuga`

Único fenómeno cuya lista de corrientes compatibles contiene solo C3.

Glosa: «Palenques, quilombos y territorios constituidos por la fuga, con sus tratados, sus lenguas y su gobierno propio.»
Criterio: «La obra trabaja una comunidad cimarrona determinada o su comparatismo, con territorio identificable.»
No confundir con: `contraplantacion`.

| Ancla | En corpus | En lote | Rol |
|---|---|---|---|
| `price` | sí | P00 | **C3 principal confirmada** |
| `totumo` | sí | P00 | **C3 principal confirmada** |
| `escalante` | sí | no | pendiente |
| `rebeldestiny` | sí | no | pendiente |
| `truebornmaroons` | sí | no | pendiente |

### 13.2 `etnogenesis` — familia `fuga`

Compatible con C3, C5 y C8.

Glosa: «Pueblos que nacen del desplazamiento forzado o de la fuga y no de un territorio de origen continuo.»

| Ancla | En corpus | En lote | Etiqueta `cimarronaje` |
|---|---|---|---|
| `gonzalezsojourners` | sí | no | sí |
| `cosgrovegarifuna` | sí | no | no |
| `mintzpricebirth` | sí | no | no |
| `womenancestors` | sí | no | no |

Este fenómeno es el que más tensiona la frontera C3/C5: la etnogénesis es a la vez fuga y desplazamiento.

### 13.3 `contraplantacion` — familia `fuga`

Compatible con C4 y C3.

Glosa: «Rehacer sociedad por fuera de la lógica de la hacienda sin salir necesariamente de su territorio: lakou, conuco, comunidad campesina negra, vida cotidiana como sustracción.»
Criterio: «La obra documenta formas de vida que se organizan contra la plantación sin constituirse en fuga armada ni en territorio separado.»

| Ancla | En corpus | En lote | Etiqueta `cimarronaje` |
|---|---|---|---|
| `casimir` | sí | no | no |
| `olwigstjohn` | sí | no | no |
| `cuijla` | sí | no | no |

**Es el hallazgo más significativo de esta fase.** Ninguna de sus tres anclas lleva la etiqueta `cimarronaje` ni ha pasado por lote. Si C3 admite la sustracción cotidiana y no solo la fuga territorial o armada, la etiqueta heredada no alcanza para constituir la corriente, y el guion actual tampoco la contempla.

### 13.4 `independencia_y_conflicto_regional` — familia `regimen`

Compatible con C7 y C3.

Glosa: «La independencia leída como disputa interna entre regiones, clases y castas de color, y no como gesta de élites ilustradas.»

| Ancla | En corpus | En lote | Etiqueta `cimarronaje` |
|---|---|---|---|
| `james` | sí | no | sí |
| `ferrerfreedomsmirror` | sí | no | sí |
| `muneraelfracaso` | sí | no | no |
| `saetheridentidades` | sí | no | no |
| `helglibertyequality` | sí | no | no |

Este fenómeno es el que más tensiona la frontera C3/C7.

### 13.5 Estatuto del conjunto de 35 entradas

```
|cimarronaje|                       = 26
|anclas de los 4 fenómenos|         = 17
|anclas sin etiqueta cimarronaje|   =  9
|unión cimarronaje ∪ anclas|        = 35
|unión no revisada en los lotes|    = 30
```

Las nueve anclas que amplían el conjunto son: `casimir`, `cosgrovegarifuna`, `cuijla`, `helglibertyequality`, `mintzpricebirth`, `muneraelfracaso`, `olwigstjohn`, `saetheridentidades` y `womenancestors`.

**Qué es y qué no es este conjunto.** Las 35 entradas constituyen **un conjunto de lectura exploratoria** para el dictamen. Nada más. Las nueve anclas añadidas **no son candidaturas, no son entradas pendientes de C3 y no son miembros probables de la corriente**: proceden de un catálogo de fenómenos que se declara a sí mismo «borrador para dictamen académico; no se ha aplicado al corpus publicado», en versión `0.1.0-borrador`. Una compatibilidad declarada entre un fenómeno y una corriente es una hipótesis de trabajo de ese borrador, no una asignación.

### 13.6 Tres conjuntos de lectura, y un problema de cobertura

El conjunto de 35 no agota el material que el dictamen debería mirar. Conviene distinguir tres conjuntos:

| Conjunto | Contenido | Cantidad | Fuente |
|---|---|---|---|
| 1 | Entradas con la etiqueta heredada `cimarronaje` | 26 | Corpus vigente, campo `f` |
| 2 | Anclas adicionales de los cuatro fenómenos compatibles | 9 | Catálogo de fenómenos, en borrador |
| 3 | Casos deliberados sobre emancipación, abolición, revolución e insurgencia que no aparecen en los dos anteriores | por determinar | Lectura editorial, no automática |

**El caso `lightfoot` demuestra por qué hace falta el tercer conjunto.** Este expediente lo identifica en dos lugares como la única entrada del corpus que trabaja de frente la emancipación británica: *Troubling Freedom: Antigua and the Aftermath of British Emancipation*, con etiquetas `postplantacion` y `soberanias`. **No pertenece al conjunto de 35**, porque no lleva `cimarronaje` y no es ancla de ninguno de los cuatro fenómenos. Sí aparece entre las 52 señales léxicas, por los términos «emancipación» y «libertad».

La limitación es estructural, no accidental. El conjunto de 35 se construye desde una etiqueta heredada y desde un catálogo en borrador, y ninguno de los dos fue diseñado para capturar la emancipación formal, que el guion de C3 sí incluye. Cualquier conjunto de trabajo que se apruebe solo con los criterios 1 y 2 dejará fuera ese registro.

**Este expediente no agrega `lightfoot` a C3 ni lo convierte en candidatura.** Solo documenta que el problema de cobertura existe y que la composición del tercer conjunto es una decisión editorial que corresponde al dictamen.

---

## 14. Fronteras

### 14.1 C3 y C2

Criterio ya ratificado en el dictamen de C2, que este expediente respeta: C2 organiza el aparato esclavista y los mundos producidos dentro y contra él; C3 organiza la sustracción, la fuga, el cimarronaje, la insurgencia o la emancipación cuando constituyen el argumento central. La presencia de agencia no convierte una obra en C3 y la presencia de esclavitud no la convierte en C2.

**Casos que lo sostienen.** `tackysrevolt` a C3 con C2 secundaria; `hall_slavesocietydanish` a C2 con C3 secundaria. Los dos fundamentos son simétricos y se explican mutuamente.

**Caso que lo tensiona.** `helgnuncamas` está en C3 con C2 secundaria por «las estrategias mediante las cuales personas esclavizadas se liberaron». Una obra sobre la abolición legal, en cambio, difícilmente sería C3 bajo el mismo criterio, aunque el guion incluya «procesos de abolición leídos desde abajo». `lightfoot`, todavía sin revisar, es el caso que obligará a decidirlo.

**Pregunta para dictamen.** ¿La abolición decretada pertenece a C3 cuando la obra la estudia desde arriba, o solo cuando la lee desde abajo?

### 14.2 C3 y C7

**Criterio provisional del guion:** la escala del sujeto. C3 trabaja la sustracción al poder, C7 la disputa por la forma estatal.

**Caso que lo sostiene.** `hazareesingh` quedó en C3 con C7 secundaria: la biografía de Toussaint se organiza «alrededor de revolución, emancipación y estrategia», y la soberanía es secundaria.

**Casos que lo tensionan.**
`rainforestwarriors`: los saramaka litigan ante la Corte Interamericana. Hay sustracción histórica y disputa jurídica por soberanía territorial en el mismo objeto; el criterio de escala no decide.
`james` y `ferrerfreedomsmirror`: ambos son anclas del fenómeno `independencia_y_conflicto_regional`, que el catálogo declara compatible con C7 y C3 en ese orden.
`alabi`: «la soberanía cimarrona tramitada entre la fe morava y el poder colonial» nombra la soberanía dentro del propio cimarronaje.

**Pregunta para dictamen.** Cuando una comunidad cimarrona ejerce y litiga soberanía, ¿la obra pertenece a C3 por el origen del sujeto o a C7 por la forma de la disputa?

### 14.3 C3 y C5

**Criterio provisional del guion:** si el argumento es la sustracción, C3; si es la circulación, C5.

**Caso que lo tensiona.** `gonzalezsojourners` narra la etnogénesis garífuna «desde el cimarronaje de San Vicente hasta el reasentamiento forzado en la costa centroamericana». Hay fuga y hay desplazamiento forzado, y el fenómeno `etnogenesis` declara compatibilidad con las dos corrientes. `tackysrevolt` ya recibió C5 como secundaria por sus «redes atlánticas».

**Pregunta para dictamen.** ¿Un pueblo que nace de la fuga y se constituye en el desplazamiento es C3 con C5 secundaria, o al revés?

### 14.4 C3 y C1

**Caso que la define.** `rifkinfictions` lleva la etiqueta `cimarronaje` y es a la vez ancla del fenómeno `indigeneidad_en_disputa`, que el dictamen de C1 registró entre las siete anclas de prioridad para esa corriente. Su aporte plantea el problema directamente: «la relación con la tierra que reclama la soberanía indígena y la que abre la fuga cimarrona no son la misma, y tratarlas como si lo fueran desactiva las dos».

**Pregunta para dictamen.** Una obra cuyo argumento central es precisamente la no equivalencia entre indigeneidad y negritud, ¿pertenece a C1, a C3, o exige una principal y una secundaria explícitas? Es la única entrada del corpus que aparece simultáneamente en el expediente de C1 y en el de C3.

### 14.5 C3 y C10

**Caso que lo tensiona.** `quintero` describe una «cimarronería sonora» donde el cuerpo y el baile son el lugar de la subversión. Sus etiquetas son `creolizacion` y `cimarronaje`, no `cuerpo_erotica`, pero su objeto es corporal.

**Pregunta para dictamen.** ¿El uso metafórico del cimarronaje —sonoro, corporal, estético— constituye pertenencia a C3, o C3 exige sustracción en sentido histórico y material?

### 14.6 C3 y C9

Frontera no prevista en el guion y que la evidencia obliga a plantear.

**Caso que la obliga.** `chevannes`, con etiqueta `cimarronaje`, estudia el rastafarismo como ideología de ruptura. `travelstooy` y `pricefirst`, ambos con la misma etiqueta, trabajan la memoria oral y ritual saramaka como archivo propio. Los tres pueden leerse como C9, archivos vivos y espiritualidades.

**Pregunta para dictamen.** ¿La transmisión de la memoria de un pueblo cimarrón pertenece a C3, porque el sujeto es cimarrón, o a C9, porque el argumento es la transmisión?

---

## 15. Vacíos y condiciones para siembra

No se propone bibliografía. La regla es leer y contar primero.

### 15.1 Indicios de vacíos y subrepresentaciones que requieren comprobación mediante lectura

**Ninguno de los cinco indicios siguientes está comprobado como vacío intelectual.** Todos derivan de metadatos —etiquetas, campo de lengua, campo de lugar, autoría y aportes breves— y ninguno de la lectura de las obras. Se clasifican según lo que la evidencia disponible permite afirmar.

| Indicio | Evidencia | Tipo de ausencia | Qué haría falta para confirmarlo |
|---|---|---|---|
| Sustracción cotidiana y no espectacular | El fenómeno `contraplantacion` es compatible con C3 y sus tres anclas no tienen etiqueta `cimarronaje` ni han sido revisadas; el guion no contempla el registro | **Vacío visible en los metadatos.** La etiqueta heredada no cubre esa zona | Leer las tres anclas y decidir si el registro pertenece a C3 |
| Experiencias femeninas de fuga | De 21 pendientes con etiqueta, una sola centra explícitamente a una mujer, `zips_nannysasafo` | **Indicio de subrepresentación en los títulos y aportes.** Una sola obra centrada en una mujer **no demuestra ausencia de experiencias femeninas en las demás obras**, que pueden tratarlas sin anunciarlo en el título | Lectura de las 21 obras, buscando el lugar de mujeres, familias y parentesco dentro de cada argumento |
| Publicación en neerlandés | Ninguna de las 26 declara lengua neerlandesa. Reparto: 16 anglófonas, 8 hispanas, 1 francófona, 1 anglófona/danesa | **Ausencia en el campo de lengua.** No demuestra por sí sola ausencia de producción intelectual del Caribe neerlandófono, que puede publicar en inglés o no estar recogida | Revisar si existe bibliografía neerlandófona pertinente fuera del corpus, y si su ausencia es del atlas o del campo |
| Concentración autoral en el núcleo surinamés | Seis de las 26 se sitúan en Surinam —`alabi`, `price`, `pricefirst`, `rainforestwarriors`, `rebeldestiny`, `travelstooy`— y cinco son de Richard Price | **Concentración comprobada en los metadatos.** No permite por sí sola identificar el lugar de producción intelectual, que el corpus no registra como campo propio | El campo `orillas` con función «lugar de producción intelectual», que el esquema prevé y el corpus todavía no puebla |
| Emancipación como proceso jurídico | Un solo disparo del término «emancipación» en títulos y aportes de todo el corpus; `lightfoot` es la única entrada que lo trabaja de frente | **Ausencia en los metadatos, no en las obras.** La escasa presencia de la palabra **no prueba ausencia del problema** en obras que lo traten sin nombrarlo así | Lectura de las obras sobre abolición y postabolición ya presentes en el corpus |

### 15.2 Sospechas de vacío, no comprobadas

Quilombos brasileños y cimarronaje en el Caribe francófono fuera de Haití.

**No se localizaron señales léxicas de `quilombo` en los campos `t`, `a` y `ap` del corpus vigente**, y `fouchard` es la única entrada francófona entre las 26. Tres precisiones sobre el alcance de esa comprobación:

- **No se leyeron las obras completas.** La búsqueda se hizo sobre metadatos.
- **Una obra podría tratar el problema sin utilizar el término en sus metadatos**, igual que ocurre con las cuatro entradas etiquetadas `cimarronaje` que el patrón no recupera.
- **La ausencia puede responder al alcance territorial declarado del Atlas**, que se define sobre la cuenca del Gran Caribe y podría excluir legítimamente el Brasil.

No puede distinguirse todavía entre esas tres explicaciones.

### 15.3 Ausencias causadas por el patrón de búsqueda

Las cuatro entradas con etiqueta `cimarronaje` y sin señal léxica —`chevannes`, `mendozaraices`, `pricefirst`, `travelstooy`— demuestran que el patrón no detecta obras cuyo aporte está redactado en el vocabulario de la memoria y el ritual. Cualquier vacío que se declare a partir del patrón léxico hereda ese punto ciego.

### 15.4 Condición para autorizar siembra

La evidencia sostiene esta secuencia: leer las 30 entradas del conjunto exploratorio que no han sido revisadas en los lotes auditados, dictaminar cuáles ingresan a C3 y con qué rol, y solo entonces medir vacíos sobre una corriente ya constituida. Sembrar antes definiría los vacíos por suposición.

**Esas 30 no constituyen por sí solas un universo suficiente.** El caso `lightfoot`, documentado en el apartado 13.6, demuestra que hace falta un tercer conjunto deliberado —casos sobre emancipación, abolición, revolución e insurgencia que ni la etiqueta heredada ni el catálogo en borrador capturan— cuya composición todavía no está determinada y corresponde al dictamen.

---

## 16. Contradicciones documentales

| # | Contradicción | Fuente A | Fuente B | Estado |
|---|---|---|---|---|
| 1 | La vía de constitución de C3 | Documento de arquitectura: «Migración del corpus heredado» | Datos de los lotes: migración registrada en el campo `proceso` de 41 registros y en dos decisiones de candidatura, pero sin listado auditable; una clasificación entró sin la etiqueta | **Evidencia parcial. Contradicción no completamente resuelta.** La migración ocurrió y consta, pero no puede auditarse ni reproducirse para el corpus completo |
| 2 | Recuperabilidad de las candidaturas derivadas | Metodología: «51 entradas reciben una candidatura única» | Repositorio: no se localizó ese listado en ninguna versión examinada, ni como archivo ni como campo; solo constan dos candidaturas ya resueltas | **No resuelta.** No se localizó el artefacto que la metodología presupone |
| 3 | Autoridad para renombrar C3 | Plan operativo: «Conservar las ocho denominaciones restantes» y «Cambiar nombres de corrientes distintos de C1 y C9» figura entre los riesgos | Precedente del dictamen de C1, posterior al plan, que sí cambió una denominación fijada por el plan | **Requiere decisión académica** |
| 4 | Base de cálculo de la metodología | Metodología: razona sobre 203 entradas | Corpus vigente: 232 entradas | **Resuelta.** El documento se escribió contra la versión 1.14.0 y lo declara |
| 5 | Recuento de lote frente a corpus | 57 registros de lote | 232 entradas de corpus, 176 sin revisar | **Resuelta.** `stewardpuertorico` es registro de fusión y ya no es entrada del corpus |

---

## 17. Riesgos conceptuales del nombre y del guion

**El nombre puede leerse como una secuencia histórica.** «Fugas, cimarronajes y emancipaciones» ordena tres términos que pueden entenderse como acto, formación y desenlace. El dictamen de C2 ya rechazó explícitamente que una denominación imponga cronología donde el criterio es analítico. El mismo riesgo aplica aquí y no ha sido examinado.

**El guion privilegia el registro público y armado.** «Del palenque a la revolución y a las emancipaciones formales» describe una escala ascendente de visibilidad. Las formas cotidianas de sustracción que el catálogo de fenómenos ya nombra quedan fuera de esa progresión.

**La etiqueta heredada puede confundirse con la corriente.** Las cinco entradas revisadas con `cimarronaje` recibieron todas rol en C3. Ese acierto perfecto invita a tratar las 21 restantes como si ya estuvieran clasificadas. No lo están, y dos de ellas —`chevannes` y `quintero`— son casos que el propio guion no resuelve.

**El acierto de la etiqueta puede ocultar el vacío del guion.** Que la migración funcione bien para las obras que ya se nombran cimarronas no dice nada sobre las obras que trabajan la sustracción sin usar esa palabra. El fenómeno `contraplantacion` señala exactamente esa zona.

---

## 18. Siete decisiones para dictamen

Cada una se presenta con alternativas, sin recomendación cerrada.

**Decisión 1 · Denominación.**
(a) Ratificar «Fugas, cimarronajes y emancipaciones» sin cambios.
(b) Ratificarla y remitir al guion la distinción entre fuga y cimarronaje, como se hizo con C2 y el par plantación/postplantación.
(c) Revisarla para hacer visible la revolución y la insurgencia, que el guion incluye y el título no.
(d) Aplazarla hasta que estén leídas las 30 entradas del conjunto exploratorio que no han sido revisadas en los lotes auditados.

**Decisión 2 · Autoridad para renombrar.**
(a) Sostener que el plan operativo congela las ocho denominaciones restantes, y no revisar el nombre de C3.
(b) Sostener que cada dictamen específico prevalece sobre el plan, como ya ocurrió con C1.
La contradicción n.º 3 del apartado 16 no puede resolverse sin esta decisión.

**Decisión 3 · Vía de constitución.**
(a) Conservar «migración del corpus heredado», la formulación del documento de arquitectura, aceptando que describe un proceso que consta pero no puede auditarse.
(b) Adoptar «migración parcialmente evidenciada, relectura dirigida y corrección editorial, con pérdida parcial del rastro de candidaturas», que es la formulación que la evidencia sostiene con precisión. **La siembra no forma parte de esta fórmula porque no está demostrada.**
(c) Adoptar «relectura dirigida orientada por la etiqueta heredada», que describe el mecanismo de cierre y omite la migración.

Ninguna de las tres incluye la siembra. La siembra complementaria es una **posibilidad futura**, no una parte de la vía demostrada, y su autorización está condicionada a cuatro pasos en orden: leer los conjuntos de trabajo, constituir la corriente, confirmar vacíos reales mediante lectura de las obras, y obtener autorización académica expresa.

**Decisión 3 bis · Qué hacer con el artefacto ausente.**
(a) Reconstruir el listado de candidaturas derivadas aplicando de nuevo la regla al corpus vigente, de modo que la migración vuelva a ser auditable.
(b) Renunciar a reconstruirlo y tratar las 21 entradas pendientes directamente como lectura editorial, sin fase de candidatura.
(c) Exigir que todo lote futuro registre la candidatura como dato y no solo como nombre de decisión, para que el problema no se repita en C4 y siguientes.

**Decisión 4 · Guion.**
(a) Ratificar el texto vigente.
(b) Corregir únicamente la fila «Vía de constitución», que contiene una descripción que la evidencia no sostiene.
(c) Ampliar el guion para incluir las formas cotidianas, familiares y femeninas de sustracción.
(d) Rechazarlo y encargar una redacción nueva a partir de los casos de los apartados 4.3 y 14.

**Decisión 5 · Alcance del cimarronaje metafórico.**
(a) C3 admite el cimarronaje sonoro, corporal o estético; `quintero` sería candidato.
(b) C3 exige sustracción histórica y material; `quintero` se lee en C8 o C10 y su etiqueta heredada se trata como uso figurado.
(c) Se admite con corriente secundaria obligatoria.

**Decisión 6 · Estatuto de las seis clasificaciones existentes.**
(a) Ratificarlas sin segunda lectura, como se hizo con las once de C2.
(b) Ratificar las cinco que provienen de `cimarronaje` y someter `hazareesingh` a segunda lectura, por haber entrado sin la etiqueta.
(c) Someter las seis a segunda lectura ahora que la corriente se dictamina de manera específica.

**Decisión 7 · Universo de trabajo.**
(a) Solo las 26 entradas con etiqueta `cimarronaje`.
(b) Las 35 de la unión con las anclas de los cuatro fenómenos, de las cuales 30 no han sido revisadas en los lotes auditados.
(b bis) Las 35 más un tercer conjunto deliberado sobre emancipación, abolición, revolución e insurgencia, cuya composición habría que fijar; `lightfoot` sería su primer caso.
(c) Las 35 más las señales léxicas que superen un umbral que la Dirección Académica fije.
La opción (a) deja fuera la sustracción cotidiana; la (c) introduce el ruido documentado en el apartado 12.

---

## 19. Apéndice de trazabilidad

### 19.1 Ecuaciones de reconciliación

```
CORPUS = 232 entradas, 232 identificadores únicos

232 = 56 revisadas en lotes + 176 no revisadas                    OK
 57 registros de lote = 56 entradas efectivas + 1 fusión          OK

CIMARRONAJE = 26
 26 = 5 revisadas + 21 pendientes                                 OK
  5 = 5 con rol en C3 + 0 sin rol en C3                           OK

C3 = 5 principales + 1 secundaria = 6
  6 = 5 con etiqueta cimarronaje + 1 sin etiqueta                 OK
  intersección principal ∩ secundaria = vacía                     OK

FENÓMENOS = 4 compatibles, 17 anclas distintas
 17 = 8 con etiqueta cimarronaje + 9 sin etiqueta                 OK
 UNIÓN cimarronaje ∪ anclas = 35
 35 = 5 revisadas en los lotes auditados
    + 30 no revisadas en esos lotes                               OK

SEÑAL LÉXICA = 52
 52 = 22 con etiqueta cimarronaje + 30 sin etiqueta               OK
 26 = 22 con señal + 4 sin señal                                  OK
  6 clasificaciones C3 = 6 con señal + 0 sin señal                OK
```

### 19.2 Listas de identificadores

**C3 principal confirmada (5):** `hazareesingh`, `helgnuncamas`, `price`, `tackysrevolt`, `totumo`

**C3 secundaria confirmada (1):** `hall_slavesocietydanish`

**Etiqueta `cimarronaje` revisada (5):** `hall_slavesocietydanish`, `helgnuncamas`, `price`, `tackysrevolt`, `totumo`

**Etiqueta `cimarronaje` pendiente (21):** `alabi`, `chevannes`, `duboisturits`, `escalante`, `ferrerfreedomsmirror`, `fouchard`, `friedemannlengua`, `gonzalezsojourners`, `james`, `lebroncimarronaje`, `mendozaraices`, `pricefirst`, `quintero`, `rainforestwarriors`, `rebeldestiny`, `rifkinfictions`, `roberts`, `travelstooy`, `truebornmaroons`, `zapataarbol`, `zips_nannysasafo`

**Anclas de fenómenos sin etiqueta `cimarronaje` (9):** `casimir`, `cosgrovegarifuna`, `cuijla`, `helglibertyequality`, `mintzpricebirth`, `muneraelfracaso`, `olwigstjohn`, `saetheridentidades`, `womenancestors`

**Etiqueta `cimarronaje` sin señal léxica (4):** `chevannes`, `mendozaraices`, `pricefirst`, `travelstooy`

### 19.3 Procedimiento exacto de la búsqueda histórica

Toda afirmación sobre el historial de este expediente procede del procedimiento siguiente, reproducible sin más herramientas que Git y Python.

**Comandos de solo lectura utilizados:**

```
git --no-optional-locks rev-list --all
git --no-optional-locks ls-tree -r <commit>
git --no-optional-locks cat-file -p <blob>
git --no-optional-locks show <commit>:<ruta>
git --no-optional-locks log --all -S'<cadena>' --format='%h %ad %s'
git --no-optional-locks log --all --diff-filter=D --name-only -- 'data/agua-de-por-medio/atlas-2/'
```

**Alcance:** `--all`, es decir todas las referencias locales y remotas del repositorio, no solo la rama activa.

**Rutas examinadas:** toda ruta que termine en `.json` y contenga `/atlas-2/`. Quedan fuera los `.md`, el corpus público y los scripts, que se examinaron por separado y con otros criterios.

**Criterio para contar commits:** número de líneas de `git rev-list --all`, sin filtrar por ruta ni por autor.

**Criterio para deduplicar blobs:** cada archivo se identifica por el hash de blob que devuelve `ls-tree`, no por su ruta ni por el commit. Un archivo que no cambia entre dos commits comparte blob y se examina una sola vez.

**Criterio para identificar un campo de candidatura:** presencia de la clave literal `corriente_candidata` o `corrientes_candidatas` dentro del objeto de migración de una entrada. Para atribuirla a C3 se exige además que el valor del campo contenga la cadena `fugas_cimarronajes_emancipaciones`.

**Resultados exactos:**

| Magnitud | Valor |
|---|---|
| Commits examinados | 177 |
| Blobs JSON distintos de `atlas-2/` | 24 |
| Blobs que contienen algún campo de candidatura | 13 |
| Registros con candidatura que incluye la clave de C3 | 4 |
| Entradas del piloto en `619ad67` | 10 |
| — con la clave de candidatura presente | **10**, idénticas en los dos archivos del piloto |
| — de ellas, con valor no vacío | **9** |
| — de ellas, con valor vacío | **1**: `bourgoisethnicity`, `corrientes_candidatas: []` |
| — con `corriente_candidata` en singular y valor no vacío | 3 |
| — con `corrientes_candidatas` en plural y valor no vacío | 6 |
| — con `corrientes_candidatas` en plural y lista vacía | 1 |
| Entradas con la clave presente en `99aec5b` | **0** (0 con valor no vacío, 0 con valor vacío) |
| Rutas eliminadas en `atlas-2/` en todo el historial | 0 |

**Segundo procedimiento histórico, independiente del anterior.** Los recuentos de commits y blobs se repitieron con otra vía de Git, sin reutilizar ningún resultado del primero:

```
git --no-optional-locks rev-list --all --count
git --no-optional-locks rev-list --objects --all
  | awk 'NF==2 && $2 ~ /\/atlas-2\/.*\.json$/ {print $1}' | sort -u
```

El primer procedimiento recolecta blobs recorriendo `ls-tree -r` commit por commit; el segundo los obtiene de la enumeración de objetos alcanzables de `rev-list --objects`. Se compararon los dos conjuntos resultantes: **son idénticos, sin elementos exclusivos en ninguno de los dos**. Ambas vías devuelven 177 commits, 24 blobs y 13 blobs con algún campo de candidatura.

Una advertencia de método que conviene dejar escrita. En una primera pasada, la segunda vía devolvió 12 en lugar de 13, por un fallo del bucle de shell que la implementaba y no por una diferencia en los datos. Reimplementada la comprobación sobre los dos conjuntos de blobs con el mismo criterio de contenido, ambas dan 13. **La cifra correcta es 13.**

**Lista completa de los cuatro registros con candidatura C3:**

| Commit | Archivo | Entrada | Campo |
|---|---|---|---|
| `619ad67` | `piloto-config.json` | `price` | `corrientes_candidatas` |
| `619ad67` | `piloto-config.json` | `totumo` | `corrientes_candidatas` |
| `619ad67` | `piloto-generado.json` | `price` | `corrientes_candidatas` |
| `619ad67` | `piloto-generado.json` | `totumo` | `corrientes_candidatas` |

Son dos entradas, cada una registrada en los dos archivos del piloto.

**Comprobación adicional sobre la regla de derivación.** Se buscaron en todo el repositorio las cadenas `regla_derivacion`, `derivacion_etiqueta`, `mapa_etiquetas` y expresiones de equivalencia entre etiquetas, en archivos `.json`, `.mjs` y `.md`. El único archivo que las contiene es este expediente, que las nombra para señalar que no fueron halladas. **No se localizó, en ninguna versión examinada del repositorio, un archivo que especifique la regla que asignaría etiqueta antigua a corriente nueva.**

**Búsqueda del listado general de 51 candidaturas.** Se buscó la cifra 51 y las expresiones asociadas a un listado de candidaturas únicas en los 24 blobs JSON de `atlas-2/` a lo largo de los 177 commits, y en los archivos `.md` y `.mjs` del árbol vigente. **No se localizó un listado general en ninguna versión examinada del repositorio.** La evidencia recogida no permite determinar si ese artefacto nunca se produjo, si existió fuera del repositorio o si no fue incorporado a Git.

### 19.4 Procedimientos de cómputo

| Recuento | Procedimiento A | Procedimiento B |
|---|---|---|
| Entradas del corpus | Python sobre `datos-atlas.json`, longitud de `obras` | Node sobre `datos-atlas.js`, longitud de `ATLAS.obras` |
| Entradas con `cimarronaje` | Python, filtro sobre el campo `f`, conjunto de identificadores | Node, mismo filtro sobre archivo distinto, lista ordenada comparada elemento a elemento |
| Clasificaciones C3 | Búsqueda de la clave en el objeto de migración completo de los cuatro archivos generados | Comparación contra la lista explícita de identificadores del apartado 19.2 |
| Conjuntos y ecuaciones | Operaciones de conjunto en Python, con verificación de inclusión y de intersección vacía | Comprobación aritmética independiente de cada igualdad |

Los cuatro archivos JSON de resultado generado, el corpus en sus dos formatos, el catálogo de corrientes y el catálogo de fenómenos se parsearon sin error.

---

## 20. Matriz de trazabilidad

Cada fila permite reproducir la afirmación sin depender de la certificación narrativa.

| Afirmación o cifra | Fuente exacta | Ruta | Campo o ubicación | Commit o versión | Procedimiento de comprobación | Resultado |
|---|---|---|---|---|---|---|
| 232 entradas y 232 identificadores únicos | Corpus público | `data/agua-de-por-medio/datos-atlas.json` y `datos-atlas.js` | `obras`; `obras[].id` | `23166e1`; corpus v1.16.1 | Longitud de `obras` y cardinalidad del conjunto de `id` en Python; misma operación sobre `ATLAS.obras` en Node | 232 entradas; 232 identificadores únicos · verificada |
| 26 entradas con `cimarronaje`, 11,2069 % | Corpus público | `datos-atlas.json` y `datos-atlas.js` | `obras[].f` | `23166e1`; v1.16.1 | Filtro del campo `f` en Python sobre JSON y en Node sobre JS; listas ordenadas comparadas elemento a elemento | 26 con `cimarronaje`; 11,2069 %; lista coincidente en JSON y JS · verificada |
| 57 registros de lote | Resultados generados | `atlas-2/piloto-generado.json`; `atlas-2/lotes/{s01,a01,a02}-generado.json` | `entradas` | `23166e1` | Suma de longitudes y cardinalidad del conjunto de `heredado.id` | 57 registros; P00 10, S01 11, A01 18, A02 18 · verificada |
| 56 entradas efectivas revisadas | Lotes y corpus | ídem más `datos-atlas.json` | `entradas[].heredado.id` ∩ `obras[].id` | `23166e1` | Intersección de conjuntos | 56 efectivas; 176 del corpus no revisadas · verificada |
| Fusión `stewardpuertorico → steward` | Lote P00 y corpus | `atlas-2/piloto-generado.json`; `datos-atlas.json` | `decision_aprobada: "fusionar_y_redirigir"`; `redirecciones` | `23166e1` | Diferencia entre identificadores de lote y de corpus; lectura del objeto `redirecciones` | 1 registro de fusión: `stewardpuertorico` · verificada |
| 5 clasificaciones C3 principales | Resultados generados | `atlas-2/piloto-generado.json`; `atlas-2/lotes/{a01,a02}-generado.json` | `migracion2.corriente_confirmada` | `23166e1` | Búsqueda de la clave en el objeto de migración completo; contraste con lista explícita del apartado 19.2 | 5: `hazareesingh`, `helgnuncamas`, `price`, `tackysrevolt`, `totumo` · verificada |
| 1 clasificación C3 secundaria | Resultado generado A01 | `atlas-2/lotes/a01-generado.json` | `migracion2.corrientes_secundarias` de `hall_slavesocietydanish` | `23166e1` | Lectura directa del campo | 1: `hall_slavesocietydanish` · verificada |
| 5 entradas con `cimarronaje` revisadas | Corpus y lotes | `datos-atlas.json`; los cuatro `-generado.json` | `obras[].f` ∩ `entradas[].heredado.id` | `23166e1` | Intersección de conjuntos con lista explícita | 5 de 26 revisadas; las 5 con rol en C3 · verificada |
| 21 entradas con `cimarronaje` pendientes de lectura | ídem | ídem | ídem | `23166e1` | Diferencia de conjuntos con lista explícita de los 21 | 21 etiquetadas sin revisar · verificada |
| 2 decisiones `confirmar_candidatura` en C3 | Lote A01 | `atlas-2/lotes/a01-config.json` y `a01-generado.json` | `migracion2.decision_aprobada` de `helgnuncamas` y `tackysrevolt` | `58723f9`; presente en `23166e1` | Filtro de decisiones cuyo nombre contiene «candidatura», cruzado con el conjunto C3 | 2 de 17 decisiones con «candidatura» en los cuatro lotes · verificada |
| 2 candidaturas C3 conservadas por el historial | Piloto, primera versión | `atlas-2/piloto-config.json` y `piloto-generado.json` | `corrientes_candidatas` de `price` y `totumo` | **`619ad67`**, 2026-08-08 04:52:33Z | Recorrido de 177 commits y 24 blobs JSON de `atlas-2/`, buscando coincidencia de campo de candidatura con la clave de C3 | 2 candidaturas históricas recuperadas con contenido: `price` y `totumo`, ambas con C3 y C9 · verificada |
| El campo de candidatura desapareció al confirmarse | Piloto, segunda versión | `atlas-2/piloto-config.json` y `piloto-generado.json` | Ausencia de `corrientes_candidatas` y `corriente_candidata` | **`99aec5b`**, 2026-08-08 05:40:29Z | Recuento de entradas con campo de candidatura commit por commit, distinguiendo clave presente, valor no vacío y valor vacío | En `619ad67`: **10 entradas con la clave presente, 9 con valor no vacío y 1 con lista vacía** (`bourgoisethnicity`). En `99aec5b`, 48 minutos después: 0 / 0 / 0 · verificada |
| Reparto entre campo singular y campo plural en `619ad67` | Piloto, primera versión | `atlas-2/piloto-config.json` y `piloto-generado.json` | `migracion.corriente_candidata`; `migracion.corrientes_candidatas` | **`619ad67`** | Recuento por nombre literal de clave y por vacuidad del valor | 3 con `corriente_candidata` en singular y valor no vacío; 6 con `corrientes_candidatas` en plural y valor no vacío; 1 con `corrientes_candidatas` en plural y lista vacía · verificada |
| El esquema prescribe conservar la candidatura | Esquema propuesto | `atlas-2/documentos/esquema-datos-propuesto.json` | Comentario `_corriente_candidata` | `23166e1` | Lectura literal del comentario del esquema | «Se conserva junto a la corriente confirmada para poder auditar» · verificada |
| `hazareesingh` en C3 sin etiqueta `cimarronaje` | Lote A02 y corpus | `atlas-2/lotes/a02-generado.json`; `datos-atlas.json` | `corriente_confirmada`; `obras[].f` = `["soberanias","violencias"]` | `23166e1` | Diferencia entre el conjunto C3 y el conjunto `cimarronaje`; único elemento | 1: `hazareesingh`, con `soberanias` y `violencias` · verificada |
| Migración declarada en 41 de 57 registros | Resultados generados | Los cuatro `-generado.json` | `migracion2.proceso` con valor `migración` | `23166e1` | Recuento del valor en el campo | 41 de 57; 4 de las 6 clasificaciones C3 · verificada |
| No se localizó un artefacto completo de candidaturas C3 | Metodología, lotes e historial | `atlas-2/documentos/metodologia-revisada-borrador.md`; todos los `-config.json` y `-generado.json` | Listado anunciado de 51 candidaturas; campos de candidatura | Todas las versiones examinadas, 177 commits | Búsqueda del listado en el historial examinado; comprobación de que no se borró ningún archivo de `atlas-2/` | 0 listados localizados en las versiones examinadas; 0 rutas eliminadas. No se determina si nunca se produjo, si existió fuera del repositorio o si no fue incorporado a Git · no recuperable |
| La migración de C3 no es auditable para el corpus completo | Derivada de las tres filas anteriores | ídem | ídem | ídem | Contraste entre proceso registrado, candidaturas parcialmente conservadas y no localización del listado | 2 de 4 candidaturas C3 con contenido recuperable · evidencia parcial |
| 4 fenómenos declaran C3 compatible | Catálogo de fenómenos | `atlas-2/catalogo-fenomenos.json` | `fenomenos[].corrientes` | `23166e1`; catálogo v0.1.0-borrador | Filtro por presencia de la clave de C3 | 4: `cimarronaje_territorial`, `etnogenesis`, `contraplantacion`, `independencia_y_conflicto_regional` · verificada |
| 17 anclas distintas, todas en el corpus | Catálogo y corpus | `atlas-2/catalogo-fenomenos.json`; `datos-atlas.json` | `fenomenos[].anclas`; `obras[].id` | `23166e1` | Unión de las listas de anclas y comprobación de inclusión | 17 anclas; 17 de 17 existen en el corpus · verificada |
| 9 anclas sin etiqueta `cimarronaje` | ídem | ídem | `fenomenos[].anclas`; `obras[].f` | `23166e1` | Diferencia de conjuntos con lista explícita | 9 sin etiqueta; 8 con etiqueta · verificada |
| Unión exploratoria de 35 entradas | Corpus, catálogo y lotes | ídem más los cuatro `-generado.json` | Unión de `cimarronaje` y anclas, intersecada con el corpus | `23166e1` | Unión e intersección de conjuntos | 35 = 26 ∪ 17, intersecada con el corpus · verificada |
| 30 de esas 35 no revisadas en los lotes auditados | ídem | ídem | ídem | `23166e1` | Diferencia con el conjunto de entradas revisadas | 30 no revisadas en los lotes auditados; 5 revisadas · verificada |
| 52 señales léxicas | Corpus | `datos-atlas.json` | `obras[].t`, `obras[].a`, `obras[].ap` | `23166e1` | Expresión regular declarada en el apartado 12.1 | 52 de 232; 22,4 % · verificada |
| 22 señales coinciden con `cimarronaje` | Corpus | ídem | `obras[].f` y campos de texto | `23166e1` | Intersección de los conjuntos señal y etiqueta | 22 señales con etiqueta; 30 sin etiqueta · verificada |
| 4 entradas con `cimarronaje` sin señal léxica | Corpus | ídem | ídem | `23166e1` | Diferencia de conjuntos | 4 etiquetadas sin señal: `chevannes`, `mendozaraices`, `pricefirst`, `travelstooy` · verificada |
| 30 señales sin etiqueta `cimarronaje` | Corpus | ídem | ídem | `23166e1` | Diferencia de conjuntos | 30 señales sin etiqueta `cimarronaje` · verificada |
| 6 clasificaciones C3 con señal léxica | Corpus y lotes | ídem más los cuatro `-generado.json` | ídem | `23166e1` | Intersección del conjunto C3 con el conjunto señal | 6 de 6 clasificaciones C3 tienen señal; 0 sin señal · verificada |
| `lightfoot` queda fuera del conjunto de 35 | Corpus, catálogo y lotes | `datos-atlas.json`; `atlas-2/catalogo-fenomenos.json` | `obras[].f` = `["postplantacion","soberanias"]`; ausencia en `anclas` | `23166e1` | Comprobación de no pertenencia a los dos conjuntos que forman la unión | `lightfoot` fuera de las 35; sí presente entre las 52 señales · verificada |
| El plan operativo dispone conservar las denominaciones distintas de C1 y C9 | Plan operativo | `Pagina/ATLAS /Plan_operativo_Atlas_2_Claude_7_etapas.docx` | Tabla de decisiones cerradas; lista de riesgos | Metadatos internos: 2026-08-11 10:00:00Z | Extracción del XML y lectura literal de las dos menciones | 2 menciones: tabla de decisiones cerradas y lista de riesgos · contradicción documentada |
| No se localizaron señales léxicas de `quilombo` en los campos `t`, `a` y `ap` del corpus vigente | Corpus | `datos-atlas.json` | `obras[].t`, `obras[].a`, `obras[].ap` | `23166e1`; v1.16.1 | Patrón léxico sobre metadatos, **sin lectura de las obras completas**. Una obra podría tratar el problema sin usar el término en sus metadatos, y la ausencia puede responder al alcance territorial declarado del Atlas sobre la cuenca del Gran Caribe | 0 coincidencias sobre 232 · evidencia parcial |
| La lista de 51 candidaturas únicas no puede reconstruirse | Metodología | `atlas-2/documentos/metodologia-revisada-borrador.md` | Enunciado sobre 203 entradas | `23166e1` | Búsqueda de las cadenas de la regla en `.json`, `.mjs` y `.md` de todo el repositorio | 0 archivos localizados que la especifiquen · no recuperable |

## 21. Certificación de verificación

El alcance de la verificación no es uniforme, y presentarlo como si lo fuera sería el primer defecto del expediente. Cinco niveles distintos:

**1 · Recuentos con doble comprobación independiente sobre fuentes equivalentes.** Los recuentos del corpus, de las etiquetas heredadas, de las clasificaciones y de los conjuntos se comprobaron mediante dos procedimientos independientes: Python sobre `datos-atlas.json` y Node sobre `datos-atlas.js`, con código escrito por separado. **Los dos procedimientos calcularon en memoria 22 magnitudes y cinco listas ordenadas de identificadores. La comparación confirmó igualdad exacta entre sus resultados. No se crearon archivos auxiliares dentro del repositorio.**

**2 · Recuentos históricos reproducidos por dos vías de Git.** Los recuentos de commits, blobs y campos de candidatura se obtuvieron primero recorriendo `ls-tree -r` commit por commit, y después mediante `rev-list --objects --all` con filtrado por ruta. Las dos vías devuelven los mismos conjuntos de blobs, sin elementos exclusivos, y las mismas cifras. **No son dos fuentes independientes** —ambas leen el mismo grafo de objetos de Git— sino dos caminos distintos hacia el mismo dato, lo que detecta errores de implementación pero no errores del propio historial.

**3 · Afirmaciones verificadas mediante lectura directa.** Los seis fundamentos literales de las clasificaciones, la prescripción del esquema sobre conservar la candidatura, el alcance del validador, las dos menciones del plan operativo y el estado declarado del catálogo de fenómenos se cotejaron carácter a carácter contra su fuente.

**4 · Evidencias parciales.** La vía de constitución, la causa de la no localización del artefacto general y la ausencia de quilombos brasileños. En los tres casos el expediente dice qué falta para cerrarlas.

**5 · Cuestiones no recuperables.** El contenido de las candidaturas de `helgnuncamas` y `tackysrevolt`, y el listado de 51 candidaturas únicas de la metodología.

**Recuento del piloto, formulación única y vinculante.** En `619ad67`, las diez entradas del piloto contienen una clave de candidatura. Nueve registran una o más corrientes candidatas con valor no vacío y una, `bourgoisethnicity`, presenta `corrientes_candidatas: []`. De esas diez, tres presentan `corriente_candidata` en singular y valor no vacío; seis presentan `corrientes_candidatas` en plural y valor no vacío; una séptima, `bourgoisethnicity`, presenta el campo plural con lista vacía. En `99aec5b` las tres magnitudes son 0, 0 y 0.

**Archivos auxiliares.** No se crearon archivos auxiliares dentro del repositorio durante la preparación de este expediente. El único archivo nuevo bajo el árbol del repositorio es este documento, `atlas-2/documentos/expediente-evidencia-c3.md`, que figura como no seguido en `git status`. Los cálculos de verificación se hicieron en memoria y sus resultados se compararon sin escritura intermedia.

Confirmo que cada identificador citado fue comprobado contra el corpus, que cada clasificación fue verificada en los lotes, que las citas literales fueron cotejadas con sus fuentes y que repetí todas las comprobaciones después de terminar la redacción.

Las afirmaciones que no pudieron verificarse quedaron marcadas como tales:

- **No verificable**: la existencia de un artefacto completo y reproducible de candidaturas C3. El repositorio vigente no conserva ninguno. El historial de Git conserva dos candidaturas concretas, las de `price` y `totumo` en el commit `619ad67`, y demuestra que el campo fue borrado al confirmarse, contra lo que el esquema del proyecto prescribe. Otras dos, `helgnuncamas` y `tackysrevolt`, están atestiguadas solo por el nombre de su decisión. **No se localizó en el historial examinado un artefacto general que permita reconstruir las 51 candidaturas anunciadas por la metodología. La evidencia no permite determinar si ese artefacto nunca se produjo, si existió fuera del repositorio o si no fue incorporado a Git.**
- **No verificable**: la reconstrucción de las 51 candidaturas únicas que la metodología anuncia sobre un corpus de 203 entradas. **No se localizó, en ninguna versión examinada, un archivo que especifique la regla de derivación** que asignaba etiqueta antigua a corriente nueva, de modo que la cifra no puede recomputarse ni transportarse a las 232 actuales.
- **Evidencia parcial**: la vía de constitución de C3, que es un proceso editorial mixto y solo parcialmente auditable.
- **Evidencia parcial**: la ausencia de quilombos brasileños, cuya causa —vacío bibliográfico real o alcance declarado del atlas sobre la cuenca del Gran Caribe— no pudo determinarse.
- **Contradicción documentada**: la autoridad para renombrar C3, entre el plan operativo y el precedente del dictamen de C1.
