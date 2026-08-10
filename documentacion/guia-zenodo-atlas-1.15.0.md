# Depositar la versión 1.15.0 del atlas en Zenodo

10 de agosto de 2026 · sustituye a `guia-zenodo-atlas-1.4.0.md`, que quedó escrita para un depósito anterior y ya no describe el estado del registro.

Esto lo ejecutas tú desde el Mac: Zenodo exige sesión con tu cuenta. De este lado está todo verificado.

---

## Punto de partida, comprobado hoy

Consulté el registro público. El depósito vigente es la **versión 1.14.0**, publicada el 3 de agosto de 2026, DOI de versión `10.5281/zenodo.21775402`, con 203 obras y 429 relaciones, licencia CC BY-NC-SA 4.0, autoría de Almanza, Roberto (Project leader) con ORCID y el grupo como *Contributor* con rol *Research group*. Los archivos depositados son `datos-atlas.json` y `reflujo.py`.

El DOI de concepto sigue siendo `10.5281/zenodo.21483568` y no cambia nunca.

**El `CITATION.cff` no está desactualizado.** Declara 1.14.0 con 203 obras y 429 relaciones porque describe correctamente la versión archivada. Se actualiza *después* de publicar la 1.15.0, no antes.

## Antes de entrar a Zenodo

Desde la raíz del repositorio:

```bash
python3 data/agua-de-por-medio/sincronizar.py --check
node scripts/validar-atlas.mjs
```

Debe responder `En sincronía · v1.15.0 · 233 obras · 588 relaciones` y `0 error(es), 6 advertencia(s)`. Las seis advertencias son deudas editoriales declaradas, no fallos: se nombran abajo en la descripción. Si el validador da un error, no deposites.

## Qué se sube

Cuatro archivos. Los dos primeros dan continuidad con la 1.14.0; los dos últimos son nuevos en este depósito.

| Archivo | Ruta | Tamaño | Qué es |
|---|---|---|---|
| `datos-atlas.json` | `data/agua-de-por-medio/` | 268 kB | El corpus. Formato canónico, sin el envoltorio `window.ATLAS=` |
| `reflujo.py` | `data/agua-de-por-medio/` | 12 kB | Cómo entra material externo al corpus. Idéntico al depositado en 1.14.0 |
| `validar-atlas.mjs` | `scripts/` | 24 kB | El validador del corpus |
| `validar-piloto-atlas-2.mjs` | `scripts/` | 16 kB | El validador de las capas de transición |

Los dos validadores entran porque el atlas argumenta que se distingue de una visualización bonita en que publica su método. Archivar la herramienta que comprueba el dato sostiene esa afirmación en el único lugar donde alguien externo iría a verificarla.

No entran el catálogo de fenómenos ni el lote F01: siguen en estado borrador y no conviene darles un DOI permanente todavía.

## Pasos en Zenodo

1. Entra a `zenodo.org` con tu cuenta.
2. Ve a `zenodo.org/records/21775402`, que es la 1.14.0.
3. Pulsa **New version**. No crees un depósito nuevo: rompería el encadenado de versiones y el DOI de concepto que ya está citado en el sitio y en el `CITATION.cff`.
4. **Archivos.** Borra los dos que trae y sube los cuatro de la tabla.
5. **Versión:** `1.15.0`.
6. **Fecha de publicación:** la del día en que publiques.
7. **Descripción:** reemplázala por el texto de abajo.
8. **Autoría y licencia:** no las toques. Ya están correctas.
9. **Palabras clave:** las actuales están en mayúsculas y son cosméticas. Si quieres corregirlas: antropología archipiélica, Gran Caribe, marealéctica, colonialidad, cimarronaje, creolización, humanidades digitales, datos abiertos.
10. Publica.

## Descripción, lista para pegar

Va en texto plano, sin asteriscos ni marcas de Markdown: el campo de Zenodo los mostraría literales. Si quieres los títulos en cursiva, aplícala con el editor de Zenodo una vez pegado.

---

Corpus bibliográfico y relacional de un atlas archipiélico del Gran Caribe, organizado por fenómenos que atraviesan la cuenca y no por fronteras nacionales: colonialidad, postplantación, capitalismo racial, catástrofes climáticas, soberanías, violencias, memoria y espiritualidad, cimarronaje, creolización, y cuerpo, género y erótica.

La versión 1.15.0 contiene 233 entradas: 228 obras de investigación y 5 manifestaciones culturales, enlazadas por 588 relaciones y ancladas en 30 lugares. Cada relación se tipifica como resonancia o disonancia, siguiendo la distinción que Michael Monahan desarrolla en Creolizing Practices of Freedom, y declara su propia fuente. De las 588, hay 382 corroboradas contra el texto de las obras; las 206 restantes quedan marcadas como pendientes.

El corpus registra 568 resonancias y 20 disonancias. Esa proporción describe el sesgo de quien traza el mapa, que reconoce continuidades con más facilidad que choques, y se publica para que pueda corregirse.

Frente a la 1.14.0, esta versión añade treinta entradas y ciento cincuenta y nueve relaciones, e incorpora dos nodos nuevos: Costa Rica y Granada. Entran Capitalismo y esclavitud de Eric Williams, el manuscrito inédito Black Metamorphosis de Sylvia Wynter, The Plural Society in the British West Indies de M. G. Smith y My Mother Who Fathered Me de Edith Clarke, junto con la línea de estudios de parentesco caribeño que el corpus no tenía y el bloque de indentura y trabajo importado.

Deudas declaradas de esta versión, todas detectables con el validador que se deposita junto al corpus: dos identificadores distintos, steward y stewardpuertorico, corresponden al mismo libro de 1956 y esperan fusión editorial; cuatro entradas carecen de año; tres no tienen autoría identificada; seis reúnen dos obras bajo un solo identificador y esperan decisión sobre su división; y el lugar guajira está definido en el catálogo sin que ninguna entrada lo refiera.

El depósito incluye los dos validadores que comprueban el corpus, para que la afirmación metodológica del proyecto se pueda verificar y no solo leer.

Desde julio de 2026 el corpus recibe aportes de investigadores externos bajo la misma regla de corroboración que se aplica a sí mismo, acreditados de manera individualizada en el registro público del proyecto.

Marco conceptual basado en Kamau Brathwaite, Michael Monahan, Derek Walcott y Ernesto Bassi.

Metodología completa, criterios de inclusión y limitaciones declaradas: https://pensamientocaribe.org/proyectos/metodologia-agua-de-por-medio.html

Atlas interactivo: https://pensamientocaribe.org/proyectos/con-el-agua-de-por-medio.html

---

## Después de publicar

Zenodo emite un DOI de versión nuevo. El de concepto no cambia. Mándamelo y actualizo los tres lugares donde debe quedar registrado:

- `CITATION.cff`: versión a `1.15.0`, fecha a `2026-08-07`, el resumen a 233 obras y 588 relaciones, y el identificador de versión nuevo. Hoy dice 1.14.0 y **es correcto**; solo deja de serlo cuando publiques.
- La sección «Datos abiertos, versiones y cita» de la metodología, en español y en inglés.
- La ficha «Cómo citar el corpus» del marco conceptual del atlas y su JSON-LD.

## Sumas de comprobación

Para confirmar que subiste exactamente lo que se validó aquí:

```
bb530496aecb270b2c2c2de93bde9e61  datos-atlas.json
765dc3d2a26f03688cdd6e9395e18c48  reflujo.py
cef496ab7fc4f41fcb7c6f1b69fd367e  validar-atlas.mjs
33aa9ba2a930cc994bce5917a9945a4e  validar-piloto-atlas-2.mjs
```

El `md5` de `validar-piloto-atlas-2.mjs` cambió el 10 de agosto: ahora valida las capas cerradas contra `instantaneas/datos-atlas-1.15.0.json` y no contra el corpus vivo. Cada capa se comprueba contra el corpus del que salió, que es lo que permite corregir el corpus sin romperlas. Ese archivo de instantánea no se deposita porque es byte a byte idéntico a `datos-atlas.json` en esta versión.

El `md5` de `reflujo.py` coincide con el del archivo ya depositado en la 1.14.0, así que ese no cambió.

## Por qué no esperar

Ningún dictamen pendiente bloquea este depósito. La migración a corrientes y la capa de fenómenos viven en `atlas-2/` y nunca han formado parte de lo que se archiva. Lo que se deposita es el corpus publicado, que está cerrado y validado desde el 7 de agosto.
