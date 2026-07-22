# Atlas · modelo de datos declarativo

Fase 3: los datos del atlas dejan de estar soldados al código de dibujo.
Ahora viven aquí, en JSON, y el render (Leaflet hoy; Cytoscape.js o D3 mañana)
pasa a ser una vista intercambiable sobre este mismo modelo.

## Archivos

- **`nodes.json`** — 24 nodos (lugares) extraídos de `js/mapa-afrodiasporico.js`.
  Cada nodo conserva todos sus campos originales (`nombre`, `lat`, `lng`,
  `categoria`, `desc`/`desc_en`, `claves`, `cultura`, `cancion`, `fuente`) y
  añade dos nuevos: `id` (slug estable) y `zoteroKeys` (vacío por ahora).
- **`edges.json`** — 26 arcos transatlánticos. Los antiguos campos `de`/`a`
  ahora son `source`/`target` (apuntan al `id` del nodo), más `source_nombre`/
  `target_nombre` para lectura humana. Conserva `epoca`, `curva`, `titulo`,
  `anos`, `desc`, `claves`, `cancion`, `fuente`, y añade `id` y `zoteroKeys`.
- **`fuentes.json`** — 110 obras del catálogo de Zotero (`Mi biblioteca.rdf`),
  con `key` (citekey estable: apellido+año), `tipo`, `autores`, `titulo`,
  `anio`, `publicacion`, `editorial`, `lugar`, `doi`, `url`, `tags`.
- **`enlaces-sugeridos.json`** — reporte del cruce automático entre las citas
  en texto libre del mapa y el catálogo de Zotero. NO modifica los datos a
  mano: solo sugiere, para revisión manual (regla de corroboración).

## El puente `zoteroKeys`

Cada nodo y cada arista tienen un array `zoteroKeys` que apunta a las `key`
de `fuentes.json`. Ese es el reemplazo estructurado del campo `fuente` en
texto libre. Cuando esté poblado, el render puede mostrar la ficha completa
de la fuente y su estado de corroboración sin duplicar metadatos.

## Hallazgo del primer cruce

De las 41 citas en texto libre del mapa (Montes Pizarro 2018, Chude-Sokei
2015, Adi 2018, Gilroy 1993…), **0 coinciden** con el RDF exportado. La
conclusión no es un error del script: la biblioteca `Mi biblioteca.rdf` es el
corpus de negrura/blanquitud, no la bibliografía del mapa sonoro. Son dos
corpus distintos. Para que el pipeline Zotero→atlas sirva a *este* mapa, hay
que ingresar esas 41 referencias en Zotero. Para el atlas archipiélico
(las obras de filosofía), en cambio, `fuentes.json` ya es su fuente de verdad.

## Regenerar

```bash
# nodos + aristas desde el JS (Node)
node extract.js
# catálogo de fuentes desde el RDF (Python)
python3 zotero_to_json.py "Mi biblioteca.rdf" fuentes.json
```

## Pipeline recomendado (en build, no en el navegador)

GitHub Pages es estático: no llamar a la API de Zotero desde el cliente
(expondría la clave). El flujo es en tu Mac, antes de publicar:

1. Zotero + Better BibTeX exporta CSL-JSON o RDF al guardar.
2. `zotero_to_json.py` lo transforma en `fuentes.json` (citekey = ID estable).
3. Las relaciones curadas a mano viven en `edges.json`, apuntando a citekeys.
4. El estado de corroboración se etiqueta en Zotero (un tag) y fluye al mapa.
