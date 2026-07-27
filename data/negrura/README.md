# La negrura frente a la blanquitud monumental · corpus conceptual

Los 33 conceptos que articulan el marco teórico del proyecto, con su definición
argumentada. Hasta julio de 2026 vivían incrustados en el HTML de la página, donde no
podían citarse, versionarse ni depositarse. Ahora son un conjunto de datos.

## Archivo

`conceptos.json` tiene dos claves:

- **`meta`** — título, responsable, institución, versión, fecha, licencia y número de
  conceptos.
- **`mapa`** — el árbol. Cada nodo lleva `id`, `label`, `description` y, cuando tiene
  descendencia, `children`. Los nodos que no son raíz llevan `parent`.

El `id` es un slug estable y es lo que aparece en la dirección de cada concepto:

    https://pensamientocaribe.org/proyectos/negrura-blanquitud-monumental.html#opacidad-glissant

Ese identificador viaja en el dato, no se recalcula desde el título. Si mañana
reescribes la etiqueta de un concepto, el enlace publicado sigue funcionando. La
contrapartida es que **el `id` no debe cambiarse** una vez que el corpus se ha
depositado: si un concepto cambia de nombre, conserva su `id` viejo.

## Las seis ramas

1. **Negrura** — experiencia y existencia, opacidad (Glissant), fugitividad (Moten),
   carne y captura (Hartman).
2. **Vidas negras** — cotidianidad, memoria colectiva, Santa Marta y Caribe.
3. **Blanquitud monumental** — monumento y paisaje, archivo e institución.
4. **Blanquitud algorítmica** — clasificación y sesgo, visión y reconocimiento,
   trabajo de datos.
5. **Operadores conceptuales**.
6. **Interlocutores**.

## Cómo lo lee la página

`js/mapa-conceptual.js` pide este archivo mediante el atributo `data-fuente` de la
sección. El bloque JSON que sigue incrustado en el HTML es solo un respaldo para
cuando la página se abre con `file://` y el fetch no puede resolverse. La página marca
en `data-origen-datos` cuál de los dos usó, lo que sirve para diagnosticar.

**Al editar el corpus hay que tocar los dos.** Si solo cambias el JSON, quien abra el
archivo local seguirá viendo la versión vieja.

## Versionado

Sigue el mismo criterio que el Atlas. Cambio de redacción en una descripción: sube el
tercer número. Concepto nuevo o rama nueva: sube el segundo. Reorganización que rompa
identificadores: sube el primero y documenta la correspondencia.

## Licencia

CC BY-NC-SA 4.0. Atribución, uso no comercial, compartir igual.
