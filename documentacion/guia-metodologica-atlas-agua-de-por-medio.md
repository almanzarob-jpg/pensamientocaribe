# Guía metodológica del atlas «Con el agua de por medio»

### Cómo ingresar, verificar y entregar una obra, paso a paso

Esta guía es para cualquier persona que trabaje en la sistematización bibliográfica del atlas: quien lea libros y decida qué entra, quien llene fichas en Zotero, quien visite una biblioteca física a buscar un título que no existe en PDF. No asume conocimiento previo del proyecto, pero sí asume una cosa: que quien la lea entiende que el valor del atlas depende de que cada relación que aparece en el sitio sea verificable, no plausible. El corpus muestra públicamente qué porcentaje de sus relaciones sigue "por corroborar" — eso no es una falla que haya que esconder apurando verificaciones flojas, es la regla de juego del proyecto.

---

## 1. Lo que hay que entender antes de llenar una ficha

**La unidad de análisis no es el libro, es la relación entre dos obras.** Un libro entra al atlas porque conversa con otros libros ya presentes: los cita, comparte un fenómeno, ilumina el mismo lugar desde otro ángulo, o lo contradice. Ficharlo sin pensar en esas conexiones es trabajo a medias.

**Cada obra necesita un `atlas-id` único**, una palabra corta y reconocible derivada del apellido del autor (por ejemplo `monahan`, `brereton`). Se escribe en la primera línea del campo Extra del ítem en Zotero:

```
atlas-id: apellido
```

**Las etiquetas controladas son cerradas, no libres.** No se inventa una categoría nueva porque el libro no encaje perfecto en las existentes; se elige la que más se acerque y, si de verdad no hay ninguna razonable, se avisa antes de fichar. Las etiquetas son:

- `fen:` — uno de los diez fenómenos vigentes: colonialidad, postplantación, capitalismo racial, catástrofes climáticas, soberanías, violencias, memoria, cimarronaje, creolización, cuerpo/género/erótica.
- `lugar:` — nación caribeña completa cuando el libro trabaja el país como unidad (Jamaica, Haití, Cuba); ciudad cuando el libro trabaja el Caribe continental en tensión con el resto del país (Cartagena, Veracruz, no "Colombia" ni "México" a secas).
- `capa:` — `investigacion` o `etnografica`. La capa etnográfica no es "el libro habla de antropología" — todo libro del corpus lo hace en algún grado. Es para manifestaciones culturales vivas fichadas como entrada propia: un carnaval, una práctica ritual, una tradición oral, no un estudio sobre ellas.
- `trad:` — tradición lingüística o intelectual del libro (anglófona, francófona, hispanófona, neerlandófona), solo relevante quien vaya a marcar relaciones que crucen tradiciones distintas.

**El aporte va en el campo Resumen, en 60 palabras o menos.** No es un resumen del libro entero — es la respuesta a "¿qué le aporta esta obra específicamente al argumento del atlas?". Un aporte que podría copiarse de la contraportada del libro no sirve; tiene que estar escrito desde adentro del proyecto.

**Las relaciones tienen dos tipos, y no son intercambiables.** Vienen de Michael J. Monahan, *Creolizing Practices of Freedom: Recognition and Dissonance* (Rowman & Littlefield, 2023): **resonancia** cuando dos obras se refuerzan o comparten un argumento; **disonancia** cuando lo tensionan o contradicen abiertamente. La fricción epistémica no es un tercer tipo ni se calcula sola: es una afirmación editorial aparte, que solo existe cuando quien ficha la argumenta con clase y evidencia — la categoría la formula José Medina y la reelabora el propio Monahan dentro de esa misma práctica creolizadora. Comparar las etiquetas `trad:` de dos obras relacionadas no produce una fricción: produce un **cruce lingüístico**, un dato derivado que el compilador calcula solo y que únicamente señala que las obras se publicaron en tradiciones distintas. Quien fiche sigue completando `trad:` con precisión, porque de ahí sale el cruce lingüístico, pero si además quiere declarar una fricción epistémica tiene que escribirla con argumento y fuente, igual que cualquier otra relación verificada.

**Una relación verificada necesita una fuente concreta, no una intuición temática.** "Los dos hablan de cimarronaje" no es una fuente, es una coincidencia de tema. Una fuente real es: el libro A cita al libro B en su bibliografía o en el cuerpo del texto, o ambos autores comparten un dato biográfico verificable (codirección de tesis, coautoría, correspondencia documentada), o hay una cita textual localizable. Si no se encuentra nada de eso, la relación se deja explícitamente como `Por corroborar`. Eso está bien. Inventar una fuente para no dejar el campo vacío rompe el proyecto.

---

## 2. Primer paso siempre: decidir en qué pista estás

Antes de fichar nada, una sola pregunta: **¿existe el libro en PDF o epub dentro de `Pagina/Bibliografia`?**

- Si sí → **Pista 1** (fuente digital). La verificación de relaciones se hace por búsqueda de texto, es rápida y más confiable.
- Si no, y el único acceso es una biblioteca física o una colección que no se puede descargar → **Pista 2** (biblioteca local). La verificación depende de la lectura directa de quien fiche, es más lenta y hay que dejar constancia distinta de cómo se hizo.

Las dos pistas llenan el mismo tipo de ficha con el mismo esquema de campos. Lo que cambia es cómo se verifica la relación y cómo se marca esa verificación en el campo `fuente` — y eso es la parte de esta guía donde hay que tener más cuidado, porque mezclar ambos estándares sin distinguirlos le resta credibilidad a todo el corpus, no solo a la ficha en cuestión.

---

## 3. Pista 1 — el libro existe en digital

**Paso 1. Revisar que no sea un duplicado.** Buscar el apellido del autor y el título aproximado contra los `atlas-id` ya existentes (la hoja de cálculo `corpus-atlas-agua-de-por-medio.xlsx` tiene el listado completo). Fichar dos veces la misma obra genera un `atlas-id` roto y relaciones huérfanas cuando se compile.

**Paso 2. Extraer la metadata real del archivo, no confiar en el nombre del PDF.** Un archivo llamado `libro_final_v2.pdf` no dice nada del autor real. Se abre el archivo (o se corre `pdfinfo` sobre él) y se confirma título, autor, año y editorial contra los datos internos del documento, no contra el nombre con que llegó descargado.

**Paso 3. Crear el ítem en Zotero con la metadata bibliográfica completa** — autor, título, año, editorial, DOI o ISBN si existe. Esto es lo que el esquema anterior del atlas no tenía y por lo que la migración a Zotero se decidió: sin estos campos el corpus no es interoperable con ningún sistema bibliográfico estándar.

**Paso 4. Leer el libro, o al menos las secciones centrales, y redactar el aporte en el campo Resumen.** Aquí es donde el trabajo intelectual real ocurre — todo lo anterior es administrativo. El prompt en `documentacion/prompt-notebooklm-ficha-atlas.md` ayuda a acelerar esta parte subiendo el libro a NotebookLM, pero el resultado hay que leerlo con criterio propio antes de copiarlo a la ficha, no pegarlo automático.

**Paso 5. Asignar las etiquetas controladas** (`fen:`, `lugar:`, `capa:`, `trad:`) siguiendo las listas cerradas de la sección 1.

**Paso 6. Identificar relaciones candidatas.** Mientras se lee, preguntarse con qué otras obras del corpus dialoga este libro. El mismo prompt de NotebookLM ya trae embebidos los 134 `atlas-id` del corpus para esto, pero hay que revisar si el corpus creció desde que se generó esa lista.

**Paso 7. Verificar cada relación candidata por búsqueda de texto.** Este es el paso técnico central de la pista 1:

```bash
# Para PDF:
pdftotext libro.pdf - | grep -a -i -c "apellido del otro autor"

# Para epub:
unzip -p libro.epub | grep -a -i -c "apellido del otro autor"
```

Si el conteo es mayor a cero, no basta con eso: hay que revisar el contexto para descartar falsos positivos.

```bash
pdftotext libro.pdf - | grep -a -i -m3 -B1 -A1 "apellido"
```

Dos ejemplos reales de por qué este paso no es opcional: "Ferdinand" puede ser el apellido de un rey español, no una mención a Malcom Ferdinand; "lebr" hace coincidencia falsa dentro de la palabra "celebración". Sin esta revisión de contexto, el conteo automático miente.

**Paso 8. Escribir la relación en el campo Extra**, debajo del `atlas-id`, con este formato exacto — una línea por relación, separadores `|`, sin saltos de línea dentro del campo `fuente`:

```
relacion: otro-atlas-id | tipo | descripción breve de la fuente (con cita o número de menciones)
```

**Paso 9. Si no hay verificación textual real, escribir explícitamente `fuente: Por corroborar`.** No dejar el campo vacío ni borrar la relación candidata — vale la pena registrarla como pendiente para que alguien la retome más adelante.

**Paso 10. Entregar el lote.** Ver sección 5 sobre cadencia.

---

## 4. Pista 2 — el libro solo existe en una biblioteca física

La diferencia de fondo con la pista 1 es que aquí no hay texto plano contra el cual correr `grep`. Quien fiche tiene que hacer a mano lo que el comando hace automático: revisar si el libro menciona a otro autor del corpus, y en qué página.

**Paso 1. Antes de ir a la biblioteca, revisar qué le falta al corpus.** No es eficiente ir sin rumbo — conviene mirar qué fenómenos están más delgados o qué lugares tienen pocas o ninguna obra (el documento `fuentes-ampliacion-atlas-agua-de-por-medio.md` mantiene ese diagnóstico actualizado) y buscar específicamente en esa dirección.

**Paso 2. Registrar la metadata bibliográfica completa a mano** — igual de exigente que en la pista 1: autor, título completo, año, editorial, ISBN si aparece en la página legal del libro.

**Paso 3. Revisar el índice onomástico y la bibliografía del libro buscando a los autores ya presentes en el corpus.** Esto reemplaza al `grep`: en vez de buscar en texto plano, se busca en el índice de nombres (si el libro lo trae) o se hojea la bibliografía final buscando apellidos conocidos. Vale la pena llevar impresa o a mano la lista de `atlas-id` del corpus antes de entrar a la biblioteca.

**Paso 4. Si aparece una mención, leer el pasaje completo y anotar la página exacta y una cita textual corta.** No basta con "aparece mencionado" — hay que poder decir en qué página y con qué palabras, igual que el `grep -m3` obliga a revisar el contexto en la pista 1.

**Paso 5. Fotografiar la página como respaldo**, cuando el reglamento de la biblioteca lo permita. Esto es lo que hace posible auditar después una verificación manual sin tener que volver físicamente al mismo ejemplar.

**Paso 6. Fichar en Zotero con el mismo esquema de siempre, pero con la fuente marcada de forma distinta:**

```
relacion: otro-atlas-id | tipo | verificado-manual | pág. XX | iniciales de quien verificó, fecha
```

Esta marca (`verificado-manual`) es la que separa una relación comprobada por lectura directa de una comprobada por búsqueda de texto. Las dos son válidas, pero no son lo mismo, y el compilador necesita poder distinguirlas para que el corpus siga siendo honesto sobre su propio nivel de certeza.

**Paso 7. Si no se encuentra ninguna mención cruzada, igual que en la pista 1: `fuente: Por corroborar`.** El trabajo de campo sin resultado también es información — evita que otra persona repita la misma búsqueda.

---

## 5. Qué pasa después de entregar un lote

Una vez entregadas las fichas (exportadas de Zotero en RDF, o llenadas en la hoja de cálculo `hoja-relaciones-atlas-agua-de-por-medio.xlsx` como plan B cuando Zotero no es práctico), el compilador hace el trabajo de control de calidad automático:

- Valida que cada `atlas-id` sea único y que no haya caracteres prohibidos (`|` o saltos de línea dentro de `fuente`, que rompen el formato).
- Valida que cada relación apunte a un `atlas-id` que exista — una relación a un id inexistente ("relación huérfana") se reporta como error, no se ignora.
- Valida que las etiquetas `fen:`, `lugar:`, `capa:`, `trad:` estén dentro de las listas cerradas.
- Calcula el cruce lingüístico automáticamente cuando dos obras relacionadas tienen `trad:` distintas — nadie tiene que marcarlo a mano. No calcula la fricción epistémica: esa la declara quien ficha, con argumento y fuente, y el compilador solo la registra si viene con ambos.
- Genera `datos-atlas.js` / `datos-atlas.json` actualizados y un reporte de errores legible, con las métricas del corpus (total de obras, relaciones, porcentaje por corroborar, distribución por fenómeno).

Ese reporte vuelve a quien fichó para corregir lo que haya que corregir antes de que el lote entre a producción.

---

## 6. Auditoría: por qué el trabajo manual necesita revisión periódica

Una búsqueda de texto automática no se cansa ni se distrae; una persona leyendo un índice sí. Por eso las relaciones marcadas `verificado-manual` deben pasar por un muestreo periódico: de vez en cuando, quien coordina el atlas vuelve a revisar un puñado de esas relaciones contra el libro físico (o contra la foto de respaldo del paso 5) para confirmar que la verificación fue sólida.

Esto no es desconfianza gratuita hacia el trabajo manual — es el mismo estándar que ya demostró su valor en la pista digital: el método de verificación por texto plano encontró una conexión real que nadie había buscado a propósito (Neville A. T. Hall como codirector de tesis doctoral de Bridget Brereton, mencionado por ella misma en su propio libro). La auditoría no es un obstáculo al trabajo de campo; es lo que le da a una relación fichada a mano el mismo peso que una encontrada por máquina.

---

## 7. Cadencia de trabajo

El atlas no se alimenta de fichas sueltas entregadas una por una — eso hace ineficiente tanto la revisión como la compilación. La forma de trabajo es por lotes: **tandas de 15 a 20 fichas**, mezclando pista 1 y pista 2 según lo que se haya conseguido en ese periodo. Se entrega el lote completo, se corre el compilador, se corrige lo que el reporte de errores señale, y solo entonces el lote pasa a producción. Esto también hace más manejable la auditoría de la sección 6: revisar una muestra de un lote de 20 es viable; revisar fichas dispersas entregadas a lo largo de semanas, no.

---

## 8. Errores que invalidan una ficha

- Marcar una relación como verificada por proximidad temática ("los dos hablan de lo mismo") sin haber encontrado cita, mención biográfica o coincidencia textual real.
- Confiar en el nombre del archivo o en la contraportada para la metadata bibliográfica en vez de revisar el documento mismo.
- Mezclar el estándar de verificación de las dos pistas sin marcarlo — es decir, escribir una fuente como si viniera de `grep` cuando en realidad se verificó a mano, o al revés.
- Dejar una relación sin fuente y sin la etiqueta `Por corroborar` — un campo vacío no es lo mismo que una duda declarada.
- Inventar una etiqueta de fenómeno o lugar fuera de las listas cerradas porque el libro "no encaja bien" en ninguna existente, en vez de consultar antes de fichar.
- Forzar un libro dentro de un fenómeno del corpus cuando en realidad no comparte su registro académico o su método (esto ya pasó una vez con un libro de texto escolar general que se decidió no sembrar, en vez de encajarlo a la fuerza).

---

## 9. Checklist antes de entregar una ficha

- [ ] `atlas-id` único, no repetido en el corpus existente
- [ ] Metadata bibliográfica completa (autor, título, año, editorial, ISBN/DOI si existe) verificada contra el documento o el ejemplar físico, no contra el nombre de archivo
- [ ] Aporte en Resumen, 60 palabras o menos, escrito desde el argumento del atlas
- [ ] Etiquetas `fen:` / `lugar:` / `capa:` / `trad:` dentro de las listas cerradas
- [ ] Cada relación tiene tipo (resonancia o disonancia; si además hay fricción epistémica, va declarada aparte con argumento y fuente, nunca inferida de `trad:`)
- [ ] Cada relación tiene fuente real y verificable, marcada como verificación por texto (pista 1) o `verificado-manual` con página e iniciales (pista 2), o explícitamente `Por corroborar`
- [ ] Sin caracteres `|` ni saltos de línea dentro del campo `fuente`
- [ ] Ficha revisada contra duplicados antes de entrar al lote
