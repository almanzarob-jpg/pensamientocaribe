# Con el vaivén de las corrientes · modelo de datos

Datos de la **cartografía sonora del Atlántico Negro**, no del Atlas *Con el agua
de por medio*. Esa confusión venía del nombre anterior de esta carpeta
(`data/atlas`), corregido el 25 de julio de 2026. Los datos del Atlas están en
`data/agua-de-por-medio/`.

Los datos dejaron de estar soldados al código de dibujo: viven aquí en JSON, y el
render (Leaflet hoy; otro motor mañana) es una vista intercambiable sobre este
mismo modelo.

## Archivos

- **`nodes.json`** — 24 nodos (puertos). Cada uno conserva sus campos originales
  (`nombre`, `lat`, `lng`, `categoria`, `desc`/`desc_en`, `claves`, `cultura`,
  `cancion`, `fuente`) y añade `id` (slug estable) y `zoteroKeys`.
  Estado: solo 2 de los 24 declaran `fuente`. Completarlos es trabajo pendiente.
- **`edges.json`** — 26 arcos transatlánticos. `source`/`target` apuntan al `id`
  del nodo, con `source_nombre`/`target_nombre` para lectura humana. Conserva
  `epoca`, `curva`, `titulo`, `anos`, `desc`, `claves`, `cancion`, `fuente`.
- **`fuentes.json`** — 110 obras exportadas de Zotero (`Mi biblioteca.rdf`).
  **Ojo: este es el corpus de negrura/blanquitud, no la bibliografía del mapa
  sonoro.** Está aquí por razones históricas y conviene moverlo al proyecto que
  le corresponde.
- **`enlaces-sugeridos.json`** — reporte del cruce automático entre las citas en
  texto libre del mapa y el catálogo de Zotero. No modifica datos: solo sugiere,
  para revisión manual (regla de corroboración).

## El puente `zoteroKeys`

Cada nodo y cada arista tienen un array `zoteroKeys` que apunta a las `key` de un
archivo de fuentes. Es el reemplazo estructurado del campo `fuente` en texto
libre. Hoy está vacío en los 24 nodos.

## Por qué el primer cruce no encontró nada

De las 41 citas en texto libre del mapa (Montes Pizarro 2018, Chude-Sokei 2015,
Adi 2018, Gilroy 1993…), ninguna coincide con el RDF exportado. No es un fallo
del script: son dos corpus distintos. Para que el pipeline Zotero→mapa sirva a
*esta* cartografía hay que ingresar esas 41 referencias en Zotero.

## Regenerar

```bash
node extract.js
python3 zotero_to_json.py "Mi biblioteca.rdf" fuentes.json
```

`extract.js` tiene una ruta de salida absoluta escrita a mano que apunta a una
sesión de trabajo antigua. Corregirla antes de volver a ejecutarlo.

## Pipeline recomendado

GitHub Pages es estático: no conviene llamar a la API de Zotero desde el cliente,
porque expondría la clave. El flujo va en el Mac, antes de publicar:

1. Zotero con Better BibTeX exporta CSL-JSON o RDF al guardar.
2. `zotero_to_json.py` lo transforma en `fuentes.json` (citekey como ID estable).
3. Las relaciones curadas a mano viven en `edges.json`, apuntando a citekeys.
4. El estado de corroboración se etiqueta en Zotero y fluye al mapa.
