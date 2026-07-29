# Depositar la versión 1.4.0 del atlas en Zenodo

> **Depositada el 29 de julio de 2026.** DOI de versión: `10.5281/zenodo.21679251`. El DOI de concepto sigue siendo `10.5281/zenodo.21483568`. Subieron los archivos correctos: `datos-atlas.json` (145 kB) y `reflujo.py`. El sitio ya apunta al DOI nuevo en `CITATION.cff`, en las dos metodologías y en la ficha «Cómo citar el corpus» del atlas.
>
> **Quedaron cuatro campos sin editar en el formulario**, y se corrigen con el botón *Edit* del registro publicado, sin crear otra versión: el campo *Version* sigue vacío (debe decir `1.4.0`), la descripción es todavía la de la 1.2.0 y no menciona las 154 obras ni las 313 relaciones, las palabras clave siguen siendo ATLAS / ANTROPOLOGÍA / ARCHIPIÉLICA / HISTORIA, y la autoría no incluye al grupo. El texto listo para pegar está más abajo.


Sustituye a `guia-zenodo-atlas-agua-de-por-medio.md`, que quedó escrita para la 1.1.0. Este archivo lo ejecutas tú desde el Mac: Zenodo exige sesión con tu cuenta y el sandbox no puede entrar. De este lado ya está todo listo.

## Estado real del registro actual, comprobado hoy

Consulté la API de Zenodo del registro `21554775` el 29 de julio de 2026. Esto es lo que hay:

| Campo | Cómo está | Qué hacer |
|---|---|---|
| Licencia | `cc-by-nc-sa-4.0` | **Ya está bien.** La guía vieja advertía que seguía en CC BY 4.0; eso se corrigió en algún momento. No lo toques. |
| Archivo | `datos-atlas.js` · 96 kB | **Cambiar** por `datos-atlas.json`, que es el formato canónico y el único reutilizable fuera del sitio. |
| Campo *version* | vacío | **Escribir `1.4.0`.** El registro no lleva número de versión, así que las versiones no se distinguen entre sí. |
| Palabras clave | ATLAS, ANTROPOLOGÍA, ARCHIPIÉLICA, HISTORIA | **Cambiar.** Están en mayúsculas y son genéricas; abajo van las del `CITATION.cff`. |
| Autoría | solo «Almanza, Roberto» | **Añadir** al grupo de investigación como autor institucional, para que coincida con el `CITATION.cff`. |
| DOI de concepto | `10.5281/zenodo.21483568` | Es el que usa el sitio. No cambia nunca. |

## Antes de entrar a Zenodo

Desde la carpeta del sitio:

```
cd ~/Pagina/pensamiento-caribe
python3 data/agua-de-por-medio/sincronizar.py --check
```

Debe responder `En sincronía · v1.4.0 · 154 obras · 313 relaciones`. Si dice otra cosa, corre el script sin `--check` y vuelve a publicar antes de depositar: lo que se archiva en Zenodo tiene que ser exactamente lo que sirve el sitio.

## Pasos en Zenodo

1. Entra a `zenodo.org` con tu cuenta.
2. Ve a `zenodo.org/records/21554775`, que es la 1.2.0, la última publicada.
3. Pulsa **New version**. No crees un depósito nuevo: eso rompería el encadenado de versiones y el DOI de concepto que ya está citado en el sitio y en el `CITATION.cff`.
4. **Archivos.** Borra el `datos-atlas.js` que trae y sube `data/agua-de-por-medio/datos-atlas.json` (unos 145 kB). Si quieres, sube también `reflujo.py`: documenta cómo entra material externo al corpus, y eso es parte del método, no un accesorio.
5. **Versión.** Escribe `1.4.0` en el campo *Version*.
6. **Fecha de publicación.** La del día en que publiques.
7. **Descripción.** Reemplázala por el texto de abajo.
8. **Palabras clave.** Sustituye las cuatro actuales por: antropología archipiélica, Gran Caribe, marealéctica, colonialidad, cimarronaje, creolización, humanidades digitales, datos abiertos.
9. **Autoría.** Deja «Almanza, Roberto» y añade una segunda entrada de tipo institucional: «Grupo de Investigación Pensamiento Caribe, Universidad del Magdalena».
10. **Licencia.** Confirma que sigue en CC BY-NC-SA 4.0. No la cambies.
11. Publica.

## Descripción, lista para pegar

> Corpus bibliográfico y relacional de un atlas archipiélico del Gran Caribe, construido a partir de diez fenómenos transversales antes que de fronteras nacionales: colonialidad, postplantación, capitalismo racial, catástrofes climáticas, soberanías, violencias, memoria y espiritualidad, cimarronaje, creolización, y cuerpo, género y erótica.
>
> Esta versión 1.4.0 contiene 154 obras y manifestaciones enlazadas por 313 relaciones. Cada relación se tipifica como resonancia o disonancia, siguiendo la distinción que Michael Monahan desarrolla en *Creolizing Practices of Freedom* (2023), y declara su propia fuente. El corpus publica también su deuda: 150 de las 313 relaciones están corroboradas contra el texto de las obras, y las 163 restantes se marcan explícitamente como pendientes en lugar de presentarse como verificadas.
>
> La versión 1.4.0 añade nueve entradas dirigidas a los sesgos que el propio corpus declara: filosofía afrocaribeña con Paget Henry, cimarronaje en lengua española con Pedro Lebrón Ortiz, el sound system jamaicano como forma de conocimiento con Julian Henriques, y pensamiento afrocolombiano con Manuel Zapata Olivella, entre otras.
>
> Desde julio de 2026 el corpus recibe aportes de investigadores externos bajo la misma regla de corroboración que se aplica a sí mismo, acreditados de manera individualizada en el registro público del proyecto.
>
> Marco conceptual basado en Kamau Brathwaite, Michael Monahan, Derek Walcott y Ernesto Bassi. Metodología completa, criterios de inclusión y limitaciones declaradas: https://pensamientocaribe.org/proyectos/metodologia-agua-de-por-medio.html
>
> Atlas interactivo: https://pensamientocaribe.org/proyectos/con-el-agua-de-por-medio.html

## Después de publicar

Zenodo emite un DOI de versión nuevo para la 1.4.0. El DOI de concepto (`10.5281/zenodo.21483568`) sigue igual y no hay que tocarlo en ningún sitio.

Mándame el DOI de versión nuevo y actualizo los tres lugares donde debe quedar registrado:

- `CITATION.cff`, ya está en 1.4.0 con 154 obras y 313 relaciones; solo falta el identificador de versión.
- La sección «Datos abiertos, versiones y cita» de la metodología, que hoy dice que la última depositada es la 1.2.0.
- La ficha «Cómo citar el corpus» del marco conceptual del atlas y su JSON-LD.

## Por qué conviene no saltarse esto

El atlas argumenta que un proyecto de humanidades digitales se distingue de una visualización bonita en que publica su método y su deuda. Un depósito dos versiones atrás del corpus vivo contradice esa afirmación en el único lugar donde alguien externo iría a verificarla.
