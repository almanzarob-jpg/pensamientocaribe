# La negrura frente a la blanquitud monumental · corpus conceptual

Los conceptos que articulan el marco teórico del proyecto, con su definición argumentada
y su bibliografía. Hasta julio de 2026 vivían incrustados en el HTML de la página, donde
no podían citarse, versionarse ni depositarse. Ahora son un conjunto de datos.

## Archivos

- **`conceptos.json`** — el corpus. Dos claves: `meta` (título, responsable, institución,
  versión, fecha, licencia, número de conceptos, ramas, borradores y fuentes) y `mapa`
  (el árbol).
- **`bibliografia.json`** — 110 registros exportados de Zotero, con autores, año,
  editorial, DOI y etiquetas temáticas.
- **`_construir_corpus.py`** — reconstruye `conceptos.json` conservando los
  identificadores y las descripciones ya revisadas.
- **`_cruzar_bibliografia.py`** — vincula la bibliografía a los conceptos y genera la
  tabla de revisión.
- **`conceptos-v1-respaldo.json`** — el corpus tal como estaba en la versión 1.0.0.

Cada nodo lleva `id`, `label`, `description` y, cuando corresponde, `children`, `parent`,
`fuentes` (claves de la bibliografía) y `borrador`.

El `id` es un slug estable y es lo que aparece en la dirección de cada concepto:

    https://pensamientocaribe.org/proyectos/mapa-negrura.html#opacidad-glissant

Ese identificador viaja en el dato, no se recalcula desde el título. Si mañana
reescribes la etiqueta de un concepto, el enlace publicado sigue funcionando. La
contrapartida es que **el `id` no debe cambiarse** una vez que el corpus se ha
depositado: si un concepto cambia de nombre, conserva su `id` viejo.

## Las ocho ramas

1. **Negrura** — experiencia y existencia, zona del no-ser, sociogénesis, doble
   conciencia, opacidad (Glissant), fugitividad (Moten), carne y captura (Hartman),
   nihilismo negro y afropesimismo.
2. **Vidas negras** — cotidianidad, memoria colectiva, Santa Marta y Caribe, vidas negras
   como praxis, duelo y supervivencia, la estela y la vida póstuma.
3. **Blanquitud monumental** — monumentalidad blanca, monumento y paisaje, archivo e
   institución, despojo, porosidad del despojo, ignorancia blanca, política de la pureza,
   hybris del punto cero.
4. **Blanquitud algorítmica** — monumentalidad algorítmica, trabajo de datos del Sur
   global, sesgo y vigilancia, colonialismo de datos, capitalismo de vigilancia,
   serialidad algorítmica, posfascismo tecnológico.
5. **Operadores conceptuales** — Juan Albañil, Calibán (despojado, susurro de Sycorax,
   expandido), cimarronería analéctica, muntu.
6. **Creolización y fricción** — fricción epistémica, ruido blanco, sujeto creolizante,
   marealéctica.
7. **Reparación y horizonte** — reparaciones, abolición, fabricación de mundos, esperanza
   frágil.
8. **Interlocutores** — diecisiete autores con quienes se piensa y a veces se discrepa.

## Vínculos con la bibliografía

Cada concepto declara sus fuentes por dos vías, y el mapa las distingue en pantalla:

- **Etiqueta** — la etiqueta temática del registro en Zotero nombra el concepto. El
  vínculo lo puso el investigador al catalogar.
- **Lectura** — el vínculo se propuso al construir el mapa porque el texto trabaja el
  concepto aunque su etiqueta no lo nombre.

La distinción existe para poder revisar por separado lo declarado y lo propuesto. Para
cambiar un vínculo se edita `_cruzar_bibliografia.py` y se vuelve a correr: el script
reescribe las claves `fuentes` de `conceptos.json` y regenera la tabla de revisión.

## Borradores

Los nodos con `"borrador": true` se redactaron en julio de 2026 a partir de la
bibliografía del proyecto y esperan revisión de autor. El mapa los publica marcados en
lugar de retenerlos: quien los lea sabe qué está leyendo. Al aprobar un texto se quita la
marca en `_construir_corpus.py` y se reconstruye el corpus.

## Cómo lo lee la página

`proyectos/mapa-negrura.html` pide `conceptos.json` y `bibliografia.json` por `fetch`. No
hay copia incrustada en el HTML: el dato tiene una sola fuente de verdad. Al abrir la
página con `file://` el navegador bloquea la lectura y aparece un aviso con la
instrucción para levantar el servidor local (`python3 server.py`).

## Versionado

Cambio de redacción en una descripción: sube el tercer número. Concepto nuevo, rama nueva
o cambio en los vínculos bibliográficos: sube el segundo. Reorganización que rompa
identificadores: sube el primero y documenta la correspondencia.

De 1.0.0 (33 conceptos, seis ramas) a 2.0.0 (69 conceptos, ocho ramas) no se perdió
ningún identificador: los treinta y tres conceptos originales conservan su dirección.

## Licencia

CC BY-NC-SA 4.0. Atribución, uso no comercial, compartir igual.
