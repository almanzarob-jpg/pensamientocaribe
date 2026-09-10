# Campaña de recuperación bibliográfica post-P3 · Ronda 1

Documento rector: `cierre-saneamiento-post-p3.md` §5 y la matriz consolidada de los 12 bloqueados que allí se presenta. No se reconstruyó la lista desde memoria; se extrajo directamente de esa tabla y del corpus vivo (`datos-atlas.json`).

## 1. Triage inicial

| prioridad | id | autor | obra | bloqueo | necesidad exacta | estado |
|:---:|---|---|---|---|---|---|
| 1 | `araujo` | Ana Lucia Araujo | *Reparations for Slavery and the Slave Trade* (2017) | FUENTE_NO_LOCALIZADA | texto completo (276 pp.) | REFERENCIA_CONFIRMADA_SIN_TEXTO |
| 1 | `shellererotic` | Mimi Sheller | *Citizenship from Below* (2012) | FUENTE_NO_LOCALIZADA | texto completo | REFERENCIA_CONFIRMADA_SIN_TEXTO |
| 1 | `zapataarbol` | Manuel Zapata Olivella | *El árbol brujo de la libertad* (2014, corpus) | FUENTE_NO_LOCALIZADA | texto completo, edición 2014 confirmada | EDICION_IDENTIFICADA (con reserva de edición) |
| 1 | `casimir` | Jean Casimir | *The Haitians: A Decolonial History* (2020) | FUENTE_NO_LOCALIZADA | texto completo | REFERENCIA_CONFIRMADA_SIN_TEXTO |
| 2 | `lebroncimarronaje` | Pedro Lebrón Ortiz | *Filosofía del cimarronaje* (2021) | FUENTE_NO_LOCALIZADA | texto completo | NO_LOCALIZADA |
| 2 | `fouchard` | Jean Fouchard | *Les marrons de la liberté* (1972) | FUENTE_NO_LOCALIZADA | texto completo | NO_LOCALIZADA |
| 2 | `branddoor` | Dionne Brand | *A Map to the Door of No Return* (2001) | FUENTE_NO_LOCALIZADA | texto completo | NO_LOCALIZADA |
| 2 | `mintz` | Sidney W. Mintz | *Caribbean Transformations* (1974) — componente faltante | FUENTE_NO_LOCALIZADA + académico | el componente que falta junto a *Dulzura y poder*, ya localizado | EDICION_IDENTIFICADA (préstamo controlado) |
| 2 | `escalante` | Aquiles Escalante | *El Palenque de San Basilio* (1954) | BLOQUEO_TECNICO_BIBLIOGRAFICO (fuente insuficiente) | monografía completa; hoy solo hay un anexo de 6 pp. | FUENTE_PARCIAL_UTIL (sin cambio; pista nueva sin confirmar) |
| 3 | `ferdinand` | Malcom Ferdinand | *Une écologie décoloniale* (2019) | BLOQUEO_TECNICO_BIBLIOGRAFICO (discrepancia de título) | confirmar identidad, luego texto completo del título registrado | BLOQUEO_TECNICO_RESUELTO (identidad) / REFERENCIA_CONFIRMADA_SIN_TEXTO (texto) |
| 3 | `reysinningcristorey` | Édgar Rey Sinning | *Cristo Rey, un espacio para permanecer en el tiempo* (1998/2020/2025) | FUENTE_NO_LOCALIZADA | texto completo | NO_LOCALIZADA |
| — | `zonabananera` | Roberto Almanza y Margarita Granados Castellanos | *Las geografías negras en la Zona Bananera...* (2026) | BLOQUEO_PROTOCOLO | autorización de protocolo de autoría propia, no búsqueda de fuente | NO SE BUSCÓ — ver §5 |

## 2. Clasificación por naturaleza del bloqueo

**A. `FUENTE_NO_LOCALIZADA` (8):** `araujo`, `shellererotic`, `casimir`, `lebroncimarronaje`, `fouchard`, `branddoor`, `reysinningcristorey`, y el componente faltante de `mintz`.

**B. `BLOQUEO_TECNICO_BIBLIOGRAFICO` (2):** `escalante` (fuente insuficiente: solo anexo de 6 pp.), `ferdinand` (discrepancia de título/edición).

**C. Otro bloqueo real (1):** `zonabananera` — `BLOQUEADO_PROTOCOLO`, documentado expresamente en el cierre post-P3 como ajeno a la disponibilidad bibliográfica: requiere autorización de Dirección Académica, no búsqueda externa. No se fuerza a la estrategia de este frente.

## 3. Resultado de la ronda 1 — tabla de trazabilidad

| id | búsqueda | repositorio/fuente | resultado | suficiencia | acción siguiente |
|---|---|---|---|---|---|
| `araujo` | título + autora en repositorios académicos y archive.org | Project MUSE, H-Net, ResearchGate, Smithsonian, academia.edu | solo reseñas (máx. 3 pp.); sin coincidencia en archive.org | insuficiente | `BUSQUEDA_EXTERNA_AGOTADA_POR_AHORA` |
| `shellererotic` | título + autora en Duke UP, academia.edu (dos perfiles), archive.org | Duke UP (venta), wpi.academia.edu/MimiSheller, drexel.academia.edu/MimiSheller | libro listado sin PDF autoarchivado; sin coincidencia en archive.org | insuficiente | `BUSQUEDA_EXTERNA_AGOTADA_POR_AHORA` |
| `zapataarbol` | título en el archivo institucional del autor (Universidad del Valle) y catálogos | `zapataolivella.univalle.edu.co` (archivo oficial del autor) | PDF alojado en Google Drive bajo el archivo oficial, pero con acceso restringido por sesión y la página lo describe como edición de 2002, no la de 2014 registrada en el corpus | edición sin confirmar, contenido sin verificar | Rob confirma si la edición de 2002 del archivo institucional coincide con la de 2014 registrada; si coincide, se solicita acceso al PDF |
| `casimir` | título + autor en UNC Press, JSTOR, archive.org | UNC Press (solo venta, incluso en su serie "Open Access"), JSTOR (de pago) | sin acceso abierto en ningún canal verificado | insuficiente | `BUSQUEDA_EXTERNA_AGOTADA_POR_AHORA` |
| `lebroncimarronaje` | título + autor en Amazon, PhilPapers/PhilArchive, sitio del autor | Amazon (venta), PhilArchive (artículo relacionado "Teorizando una filosofía del cimarronaje", no el libro) | libro sin versión libre; existe un artículo previo del mismo autor sobre el mismo tema, de acceso restringido (403 al verificar) | insuficiente para el libro | `BUSQUEDA_EXTERNA_AGOTADA_POR_AHORA`; el artículo relacionado queda anotado como pista para una decisión posterior de Dirección Académica sobre si ampliar la fuente del caso |
| `fouchard` | título + autor en catálogos, Google Books, Scribd | Persée (reseña), bibliotecas francesas (catálogo), Google Books (vista de catálogo), Scribd (solo una reseña) | ninguna fuente con texto completo | insuficiente | `BUSQUEDA_EXTERNA_AGOTADA_POR_AHORA` |
| `branddoor` | título + autora en archive.org, JSTOR, bibliotecas con préstamo digital | JSTOR (de pago), Ottawa/NYPL OverDrive (préstamo con carné bibliotecario) | sin coincidencia en archive.org; acceso solo vía préstamo bibliotecario local, no verificable ni descargable desde aquí | insuficiente | `BUSQUEDA_EXTERNA_AGOTADA_POR_AHORA` |
| `mintz` (componente) | título exacto *Caribbean Transformations* en archive.org | `archive.org/details/caribbeantransfo0000unse` | registro verificado: Aldine Publishing Company, 1974, xii+355 pp.; `Access-restricted-item: true`, sin opción de descarga, solo préstamo controlado | localización confirmada, texto no descargable | Rob decide si abre cuenta de préstamo en Internet Archive para lectura; la política editorial de entrada compuesta (`decisiones-pendientes.md` §6) sigue pendiente aparte |
| `escalante` | título + autor en bibliotecas colombianas, ICANH, Banco de la República | ICANH Biblioteca (ficha de *Notas sobre el Palenque de San Basilio*), Banco de la República (obras relacionadas de otros autores sobre Palenque) | se detectó una ficha catalográfica de un texto más corto del mismo autor, posible antecedente o versión parcial de la monografía de 1954, sin confirmar si es la misma obra que el anexo ya localizado | pista nueva, no resuelta | seguir la ficha ICANH (`biblioteca.icanh.gov.co`, registro 27410) en la próxima ronda para determinar si es la monografía completa o un texto distinto |
| `ferdinand` | comparación editorial de *Une écologie décoloniale* (2019) y *S'aimer la Terre* (2024) | Seuil, Wikipedia (FR), Cairn.info, IRISSO | confirmado: son dos libros distintos del mismo autor, no ediciones de una misma obra; el archivo local corresponde a *S'aimer la Terre* (2024) | identidad aclarada; texto de *Une écologie décoloniale* (2019) sigue sin recuperarse (solo reseñas en Cairn.info y academia.edu) | Rob decide: perseguir la adquisición del título de 2019 registrado, o autorizar reclasificar el nodo sobre el título de 2024 ya disponible |
| `reysinningcristorey` | título + autor en catálogos y prensa regional | Amazon (venta), El Tiempo (nota de presentación del libro) | ninguna fuente con texto completo; edición de circulación regional (Santa Marta) sin versión digital detectada | insuficiente | `BUSQUEDA_EXTERNA_AGOTADA_POR_AHORA` |
| `zonabananera` | no se buscó | — | — | no aplica | corresponde a Rob autorizar el protocolo de autoría propia, no a esta campaña |

## 4. Casos técnicos (Fase D)

`ferdinand` queda con identidad bibliográfica aclarada: *Une écologie décoloniale* (2019, Seuil, 464 pp.) y *S'aimer la Terre* (2024/2025, Seuil) son obras distintas del mismo autor. No se leyó ninguna de las dos. La decisión de cuál título corresponde al nodo del Atlas —mantener el registrado y seguir buscándolo, o sustituirlo por el ya disponible localmente— queda para Dirección Académica; no se modificó el nodo.

`escalante` no alcanzó identificación suficientemente segura de una fuente nueva: la ficha ICANH detectada podría ser el mismo texto, un antecedente parcial, o una obra distinta, y no se fuerza una conclusión sin verificarlo.

## 5. Caso fuera de esta campaña

`zonabananera` no se sometió a búsqueda externa: su bloqueo no es de disponibilidad de fuente (la fuente existe, es la propia coautoría de Roberto Almanza y Margarita Granados Castellanos) sino de protocolo — requiere que Dirección Académica autorice expresamente la lectura de un caso de autoría propia del director del proyecto antes de abrirlo. Buscar esa fuente externamente no tendría sentido ni objeto.

## 6. Casos desbloqueados

Ninguno. Ningún caso alcanzó `FUENTE_COMPLETA_RECUPERADA` ni `LISTO_PARA_LECTURA_P3` en esta ronda; en consecuencia, no se activó el micro-P3 de Fase E y no hubo lectura, decisión ni implementación de corriente para ningún caso. `estado_recorrido` y demás campos de los 12 nodos permanecen sin modificación.

## 7. Validación

No hubo cambios de datos en esta ronda: `git status` antes y después de la campaña confirma que `datos-atlas.js`/`.json` no se tocaron. No se ejecutó la batería de validadores porque no hay nada nuevo que validar; el estado de validación sigue siendo el del cierre del saneamiento (`VALIDACION_0_ERRORES_NUEVOS`).

## 8. Resumen de la ronda 1

1. Fuentes completas recuperadas: **0**.
2. Fuentes parciales o de acceso restringido identificadas: **2** — `zapataarbol` (Google Drive institucional, edición sin confirmar) y `mintz` (Internet Archive, préstamo controlado).
3. Problemas técnicos resueltos: **1** — la identidad bibliográfica de `ferdinand` (dos libros distintos del mismo autor, no una discrepancia de edición); su recuperación textual sigue pendiente.
4. Casos académicamente resueltos: **0**.
5. Casos todavía bloqueados: **12** (sin cambio; ninguno cruzó el umbral de recuperación).
6. Búsquedas agotadas por ahora: `araujo`, `shellererotic`, `casimir`, `lebroncimarronaje`, `fouchard`, `branddoor`, `reysinningcristorey`.
7. Validación: sin cambios de datos; no aplica nueva ejecución de validadores.
8. Commits: uno, exclusivamente documental (este expediente).

## 9. Nuevo conteo P3

Sin cambios respecto al cierre del saneamiento, porque ningún caso cruzó de bloqueado a listo o resuelto:

`P3_RESUELTOS_66_DE_78`
`P3_BLOQUEADOS_12_DE_78`
`VALIDACION_0_ERRORES_NUEVOS`

66 + 12 = 78, más `cuijla` como caso intermedio ya resuelto en el saneamiento (no cuenta como bloqueado).

## 10. Decisiones que corresponden a Rob antes de una ronda 2

- `ferdinand`: perseguir *Une écologie décoloniale* (2019) o reclasificar el nodo sobre *S'aimer la Terre* (2024).
- `zapataarbol`: confirmar si la edición de 2002 del archivo institucional de la Universidad del Valle es la misma obra que la edición de 2014 registrada en el corpus.
- `mintz`: si autoriza abrir una cuenta de préstamo en Internet Archive para leer *Caribbean Transformations*, y la política editorial pendiente sobre entradas compuestas (`decisiones-pendientes.md` §6).
- `zonabananera`: autorización del protocolo de lectura para el caso de autoría propia.
- `lebroncimarronaje`: si el artículo previo "Teorizando una filosofía del cimarronaje" debe considerarse fuente parcial admisible o el caso debe esperar únicamente al libro.

## Estado final

`CAMPANA_RONDA_1_CERRADA`
`FUENTES_COMPLETAS_RECUPERADAS_0`
`EDICIONES_IDENTIFICADAS_2` (`zapataarbol`, `mintz`)
`BLOQUEO_TECNICO_IDENTIDAD_RESUELTO_1` (`ferdinand`)
`P3_RESUELTOS_66_DE_78`
`P3_BLOQUEADOS_12_DE_78`
`VALIDACION_0_ERRORES_NUEVOS`

No se abre P4.

**DETENTE.**

---

# Ronda 2 · cinco frentes pendientes

Continuación dirigida, sin nueva ronda general de búsqueda: trabaja exclusivamente sobre `mintz`, `zapataarbol`, `ferdinand`, `lebroncimarronaje` y `zonabananera` (esta última auditada por separado en `auditoria-protocolo-zonabananera-post-p3.md`). Los siete casos de búsqueda agotada de la ronda 1 no se reabren.

## 1. `mintz` — acceso controlado

La copia de *Caribbean Transformations* en Internet Archive (`archive.org/details/caribbeantransfo0000unse`) permanece bajo préstamo controlado (`Access-restricted-item: true`). Este entorno no dispone de sesión ni cuenta de Internet Archive para abrir el préstamo, y no se intentó eludir el mecanismo de préstamo ni DRM alguno.

Estado: `ACCESO_CONTROLADO_IDENTIFICADO`, `INTERVENCION_MANUAL_REQUERIDA`. No se buscó otra copia mientras esta vía sigue siendo viable. Micro-P3 no se activa: falta que Rob abra el préstamo desde su propia cuenta y confirme si permite consulta suficientemente completa.

## 2. `zapataarbol` — auditoría de equivalencia 2002/2014

Metadatos confirmados de la edición registrada en el corpus (catálogo IUCAT Bloomington): *El árbol brujo de la libertad: África en Colombia: orígenes-transculturación-presencia: ensayo histórico mítico*, Bogotá, Ediciones Desde Abajo, 2014, ISBN 9789585856356, 289 pp., con **presentación y selección de William Mina Aragón** — una edición curada por un tercero, no una simple reimpresión del autor.

De la fuente institucional de 2002 (Universidad del Valle, archivo oficial de Zapata Olivella) no se obtuvo ninguno de los elementos exigidos por esta auditoría: el PDF está en Google Drive con acceso restringido por sesión, y ninguna búsqueda adicional arrojó un registro catalográfico independiente de esa edición de 2002 con editorial, ISBN, páginas o índice propios. No hay, por tanto, base documental para comparar título completo, estructura, capítulos ni prólogos entre ambas versiones.

**Resultado B.** La equivalencia sustantiva entre la fuente de 2002 y la edición de 2014 registrada en el corpus no puede demostrarse con la evidencia disponible. Se mantiene:

`BLOQUEADO_FUENTE_EDICION_2014`

No se clasifica el caso. No se modifican los metadatos bibliográficos del nodo.

## 3. `ferdinand` — búsqueda dirigida final sobre la obra de 2019

Se ratifica que *Une écologie décoloniale* (2019) y *S'aimer la Terre* (2024) son obras distintas del mismo autor (ronda 1). No se sustituye 2019 por 2024 ni se reclasifica el nodo.

Búsqueda dirigida sobre *Une écologie décoloniale* (2019) en repositorios institucionales, bibliotecas y préstamo digital: se localizó un extracto de la editorial alojado en una biblioteca pública belga (`bibliotheques.wallonie.be`) que contiene portada, dedicatoria, la reproducción de una pintura de Turner (1840), el prólogo completo ("Une double fracture coloniale et environnementale") y la bibliografía — aproximadamente 22 a 25 páginas de un libro de 464. Es un extracto promocional editorial, no el texto completo: no incluye los capítulos desarrollados ni la conclusión, y no permite aplicar retirada ni cobertura sobre el argumento completo del libro.

Estado: `BUSQUEDA_2019_AGOTADA_POR_AHORA`. La obra de 2024 queda anotada únicamente como `OBRA_DISTINTA_CANDIDATA_REVISION_FUTURA`, sin incorporarse al caso.

## 4. `lebroncimarronaje` — comprobación interna final

Búsqueda interna en el entorno de trabajo de Rob (`Biliografia`, y el resto de `~/Pagina` sin restricción de carpeta) por el nombre del autor y variantes: **sin resultado**. No existe ninguna copia de *Filosofía del cimarronaje* previamente descargada o utilizada en el repositorio. No se repitió la búsqueda web general de la ronda 1.

El artículo relacionado identificado en la ronda 1 ("Teorizando una filosofía del cimarronaje", PhilPapers/PhilArchive) sigue sin poder verificarse: ambos repositorios rechazaron el acceso automatizado desde este entorno (error 403) en dos intentos distintos. No fue posible evaluar si ese artículo reproduce evidencia suficiente sobre tesis, arquitectura global, cobertura, direccionalidad o prueba de retirada.

Estado: `FUENTE_PARCIAL_UTIL`, `BLOQUEADO_FUENTE_COMPLETA`. No se rebaja el estándar probatorio; no se clasifica el caso con el artículo como sustituto del libro.

## 5. Adenda — posible texto de Escalante

Verificación puntual sobre la ficha detectada en la ronda 1 (Google Books, registro asociado a ICANH biblionúmero 27410): *Notas sobre el Palenque de San Basilio: una comunidad negra en Colombia*, Aquiles Escalante, 1954. Comparte autor y año exactos con *El Palenque de San Basilio* (1954), pero es un **título distinto**; no se obtuvo editorial, extensión ni tabla de contenidos que permita determinar si es el mismo texto, un antecedente parcial (artículo previo a la monografía) o una obra autónoma. El acceso directo a la ficha ICANH devolvió error 403 en esta sesión.

No hay identidad documental demostrada. Este texto **no entra** como evidencia de `escalante`. Queda anotado, sin usarse, para una eventual ronda futura con acceso directo al catálogo ICANH o a la obra física.

## 6. Resultado consolidado — ronda 2

| id | estado inicial | operación realizada | evidencia nueva | estado final | micro-P3 | commit |
|---|---|---|---|---|---|---|
| `mintz` | `EDICION_IDENTIFICADA` | verificación de accesibilidad del préstamo controlado | ninguna (sin sesión IA) | `ACCESO_CONTROLADO_IDENTIFICADO`, `INTERVENCION_MANUAL_REQUERIDA` | No | este |
| `zapataarbol` | `EDICION_IDENTIFICADA` (con reserva) | auditoría de equivalencia 2002/2014 | metadatos completos de la edición 2014 (IUCAT); ninguno nuevo de 2002 | `BLOQUEADO_FUENTE_EDICION_2014` | No | este |
| `ferdinand` | `REFERENCIA_CONFIRMADA_SIN_TEXTO` | búsqueda dirigida final del título de 2019 | extracto editorial de ~23 pp. (prólogo), insuficiente | `BUSQUEDA_2019_AGOTADA_POR_AHORA` | No | este |
| `lebroncimarronaje` | `NO_LOCALIZADA` | búsqueda interna/local | ninguna | `FUENTE_PARCIAL_UTIL`, `BLOQUEADO_FUENTE_COMPLETA` | No | este |
| `zonabananera` | `BLOQUEADO_PROTOCOLO` | auditoría documental del expediente | ver `auditoria-protocolo-zonabananera-post-p3.md` | ver ese documento | No | separado |

Fuentes efectivamente recuperadas en esta ronda: **0**. Equivalencias editoriales confirmadas: **0** (una descartada por falta de evidencia: `zapataarbol`). Bloqueos mantenidos: `mintz`, `zapataarbol`, `ferdinand`, `lebroncimarronaje` — los cuatro, cada uno con su estado específico actualizado, ninguno resuelto. Casos implementados: **0**. No hubo cambios de datos; no se ejecutó la batería de validadores porque no hay nada que validar.

## Nuevo conteo P3 (ronda 2)

`P3_RESUELTOS_66_DE_78`
`P3_BLOQUEADOS_12_DE_78`
`VALIDACION_0_ERRORES_NUEVOS`

Sin cambio: ningún caso mejoró la descripción de su bloqueo hasta el punto de contar como resuelto, y esta ronda no aumenta N por mejorar solamente la descripción bibliográfica de un bloqueo, conforme a la instrucción vigente.

## Estado final — ronda 2

`RONDA_2_CERRADA`
`CINCO_FRENTES_TRABAJADOS`
`CERO_FUENTES_COMPLETAS_NUEVAS`
`P3_RESUELTOS_66_DE_78`
`P3_BLOQUEADOS_12_DE_78`
`VALIDACION_0_ERRORES_NUEVOS`

No se abre P4.

**DETENTE.**

---

# Actualización · exclusión de `zonabananera`

Por decisión explícita de Dirección Académica, posterior a las dos rondas de esta campaña, `zonabananera` queda retirado de ella y de todo el balance de bloqueados de P3. La exclusión no es un resultado de búsqueda ni de auditoría: es una decisión académica que no debe contabilizarse como bloqueo bibliográfico, técnico o normativo. En consecuencia:

- Todas las referencias a `zonabananera` en las secciones anteriores de este documento (triage inicial, clasificación por naturaleza del bloqueo, tabla de trazabilidad, ronda 2 y sus resúmenes) quedan como registro histórico de lo trabajado hasta esa decisión — no se reescriben ni se borran, siguiendo el mismo criterio de trazabilidad usado en todo P3 (`no lo borres, márcalo como superado`).
- Todas las etiquetas `P3_BLOQUEADOS_12_DE_78` que aparecen en las secciones anteriores quedan **superadas** por el balance corregido de abajo.
- El detalle completo de la exclusión —motivo, alcance y ausencia de cambios en corrientes o metadatos— está en `exclusion-zonabananera-post-p3.md`, no en este documento.

Balance corregido de la campaña, once bloqueados activos:

`P3_RECORRIDO_78_DE_78`
`P3_RESUELTOS_66_DE_78`
`P3_BLOQUEADOS_11_DE_78`
`P3_EXCLUIDOS_1_DE_78`
`VALIDACION_0_ERRORES_NUEVOS`

Sin datos modificados por esta actualización.

**DETENTE.**
