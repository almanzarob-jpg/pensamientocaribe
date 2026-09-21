# Depositar la versión 1.22.0 del atlas en Zenodo

21 de septiembre de 2026 · sustituye a `guia-zenodo-atlas-1.15.0.md`. Las guías de 1.4.0 y 1.15.0 quedan como registro histórico: ya no describen el estado del registro.

Esto lo ejecutas tú desde el Mac, porque Zenodo exige sesión con tu cuenta. De este lado está todo verificado hoy.

---

## Punto de partida, comprobado hoy

Consulté el registro público. El depósito vigente es la **versión 1.15.0**, publicada el 10 de agosto de 2026, DOI de versión `10.5281/zenodo.21875688`, con 233 obras y 588 relaciones. Zenodo no muestra ninguna versión posterior. Los archivos depositados allí son `datos-atlas.json`, `reflujo.py`, `validar-atlas.mjs` y `validar-piloto-atlas-2.mjs`.

El **DOI de concepto** sigue siendo `10.5281/zenodo.21483568` y no cambia nunca.

Entre aquel depósito y hoy el corpus avanzó siete versiones: de 1.15.0 a 1.22.0. No es una actualización menor, y ese es el argumento para depositar ahora y no esperar a la reforma 2.0.

**El `CITATION.cff` no está desactualizado.** Declara 1.15.0 con 233 obras y 588 relaciones porque describe correctamente la versión archivada. Se actualiza *después* de publicar la 1.22.0, no antes.

## Antes de entrar a Zenodo

Desde la raíz del repositorio:

```bash
python3 data/agua-de-por-medio/sincronizar.py --check
node scripts/validar-atlas.mjs
node scripts/verificar-cifras-sitio.mjs
```

Debe responder, en este orden:

```
En sincronía · v1.22.0 · 310 obras · 841 relaciones
Resultado: 0 error(es), 3 advertencia(s).
Afirmaciones comprobadas: 59
Resultado: 0 desfase(s).
```

Las tres advertencias son deudas editoriales declaradas, no fallos, y quedan nombradas en la descripción. Si el validador da un error, no deposites.

## Qué se sube, y por qué cambia el conjunto

Cinco archivos. El conjunto no es el mismo que en 1.15.0, y conviene que la decisión quede escrita.

| Archivo | Ruta en el repositorio | Tamaño | Qué es |
|---|---|---|---|
| `datos-atlas.js` | `data/agua-de-por-medio/` | 566 kB | La fuente canónica del corpus |
| `datos-atlas.json` | `data/agua-de-por-medio/` | 705 kB | El mismo corpus en formato de intercambio, generado del anterior |
| `sincronizar.py` | `data/agua-de-por-medio/` | 2 kB | Genera el `.json` desde el `.js` y comprueba que no hayan divergido |
| `reflujo.py` | `data/agua-de-por-medio/` | 12 kB | Cómo entra material externo al corpus. Idéntico al depositado en 1.14.0 y 1.15.0 |
| `validar-atlas.mjs` | `scripts/` | 32 kB | El validador del corpus |

**Entra `datos-atlas.js`, y esto corrige un fallo del depósito anterior.** En 1.15.0 se archivó el validador con el argumento de que el atlas se distingue de una visualización bonita en que publica su método. Pero `validar-atlas.mjs` compara el `.json` contra su espejo `.js`, así que con solo el `.json` depositado nadie de fuera podía ejecutarlo: falla con `[ERROR ARCHIVO_JS] No existe el espejo`. Comprobado hoy. Depositar los dos archivos, más `sincronizar.py`, hace que el depósito sea verificable por sí solo, que era la afirmación original.

**Sale `validar-piloto-atlas-2.mjs`.** Valida el lote piloto de la reforma 2.0 contra tres archivos de `data/agua-de-por-medio/atlas-2/` que siguen en transición y que no conviene fijar con un DOI permanente. Sin ellos no arranca. Archivar una herramienta que nadie puede correr debilita justamente el argumento del párrafo anterior; esta decisión queda declarada en la descripción para que la ausencia se lea como decisión y no como olvido.

**No entra la capa «¿Qué Caribe?»**, aunque esté publicada y sea lo más nuevo del atlas. Su propio archivo declara `version: 0.1.0-prototipo`. Cuando la promuevas a 1.0.0 puede depositarse —es un conjunto citable por derecho propio: veinte definiciones del Caribe con su pasaje y su página— pero no mientras se declare prototipo a sí misma.

Comprobado: con esos cinco archivos solos, en una carpeta vacía, `python3 sincronizar.py --check` y `node validar-atlas.mjs datos-atlas.json datos-atlas.js` corren y dan el resultado esperado.

## Pasos en Zenodo

1. Entra a `zenodo.org` con tu cuenta.
2. Ve a `zenodo.org/records/21875688`, que es la 1.15.0.
3. Pulsa **New version**. No crees un depósito nuevo: rompería el encadenado de versiones y el DOI de concepto que ya está citado en el sitio y en el `CITATION.cff`.
4. **Archivos.** Borra los cuatro que trae y sube los cinco de la tabla.
5. **Versión:** escribe exactamente `1.22.0`. En el depósito anterior este campo quedó como `1.15.0.md`, con la extensión pegada; míralo dos veces antes de publicar.
6. **Fecha de publicación:** la del día en que publiques.
7. **Descripción:** reemplázala entera por el texto de abajo. En 1.15.0 la descripción no se reemplazó y quedó conservando el texto de la 1.14.0.
8. **Autoría y licencia:** no las toques. Ya están correctas: Almanza, Roberto (Project leader) con ORCID, y el grupo como *Contributor* con rol *Research group*, CC BY-NC-SA 4.0.
9. **Palabras clave:** las actuales están en mayúsculas y son cosméticas. Si quieres corregirlas: antropología archipiélica, Gran Caribe, marealéctica, colonialidad, cimarronaje, creolización, humanidades digitales, datos abiertos.
10. Publica.

## Descripción, lista para pegar

Va en texto plano, sin asteriscos ni marcas de Markdown: el campo de Zenodo los mostraría literales. Si quieres los títulos en cursiva, aplícala con el editor de Zenodo una vez pegado.

---

Corpus bibliográfico y relacional de un atlas archipiélico del Gran Caribe, organizado por fenómenos que atraviesan la cuenca y no por fronteras nacionales: colonialidad, postplantación, capitalismo racial, catástrofes climáticas, soberanías, violencias, memoria y espiritualidad, cimarronaje, creolización, y cuerpo, género y erótica.

La versión 1.22.0 contiene 310 entradas enlazadas por 841 relaciones y ancladas en 33 lugares. Cada relación se tipifica como resonancia o disonancia, siguiendo la distinción que Michael Monahan desarrolla en Creolizing Practices of Freedom, y declara su propia fuente. De las 841, hay 595 corroboradas contra el texto de las obras; las 246 restantes quedan marcadas como pendientes. La corroboración se rige por una regla estricta: una cita solo confirma una relación si el título citado coincide con el título catalogado, nunca por coincidencia de autor ni por afinidad temática.

El corpus registra 816 resonancias y 25 disonancias. Esa proporción describe el sesgo de quien traza el mapa, que reconoce continuidades con más facilidad que choques, y se publica para que pueda corregirse.

El reparto por lengua de publicación declarada es de 201 obras anglófonas, 56 hispanas, 35 francófonas, 9 neerlandesas, 2 lusófonas y 1 danesa. El depósito publica ese desequilibrio porque reproduce el de la academia que el atlas critica.

Frente a la 1.15.0, esta versión añade setenta y ocho entradas y doscientas cincuenta y tres relaciones, retira una por fusión de duplicado, y sube la proporción corroborada del 65 al 71 por ciento. Entran tres nodos nuevos: Oriximiná y Trombetas, en la Amazonia quilombola; Tela, en la costa norte de Honduras, que cierra el arco centroamericano; y Serra da Barriga, en União dos Palmares, Alagoas. Los dos nodos brasileños son dos geografías quilombolas distintas y no se agregan bajo una etiqueta de país.

Entre las incorporaciones: la obra de Orlando Patterson desde The Sociology of Slavery hasta The Confounding Island; Walter Rodney con The Groundings with My Brothers y A History of the Guyanese Working People; Persistent Poverty de George Beckford; De Cristóbal Colón a Fidel Castro de Juan Bosch; el Toussaint Louverture de Aimé Césaire; la primera entrada lusófona del atlas, Freedom by a Thread de João José Reis y Flávio dos Santos Gomes, junto al Palmares del segundo; Race, Nation, and West Indian Immigration to Honduras de Glenn Chambers; Ma Ngombe de Nina S. de Friedemann y Richard Cross; y una línea de estudios feministas y de sexualidad caribeña que el corpus no tenía, con Eudine Barriteau, Gloria Wekker, Carolyn Cooper, Kaiama Glover y Jessica Marie Johnson.

La dirección académica abrió en septiembre de 2026 tres excepciones razonadas al criterio de admisión, declaradas en la metodología: una obra de ficción, Palace of the Peacock de Wilson Harris; un artículo de revista, Reinterpretar al Caribe de Norman Girvan; y dos volúmenes de una colección institucional de registro divulgativo con aparato crítico propio. Son excepciones de registro, no de criterio: el fenómeno de cuenca sigue siendo la condición de entrada.

Deudas declaradas de esta versión, detectables con el validador que se deposita junto al corpus: dos entradas carecen de año; seis reúnen dos obras bajo un solo identificador y esperan decisión sobre su división; un identificador está fuera de minúsculas ASCII y no puede renombrarse sin dejar redirección, porque las anclas del atlas se citan en publicaciones; y un lugar del catálogo sigue sin ninguna entrada que lo refiera. De las cinco deudas declaradas en la 1.15.0, dos quedaron saldadas —la fusión del duplicado de Steward y las tres entradas sin autoría identificada—, las entradas sin año bajaron de cuatro a dos, y siguen abiertas las seis entradas compuestas y el lugar definido en el catálogo sin ninguna entrada que lo refiera. Además, las veintitrés entradas del último lote llevan su clasificación por corrientes marcada como propuesta y no confirmada, con los motivos de la duda escritos en cada ficha.

El depósito incluye la fuente canónica del corpus, su formato de intercambio, el script que los mantiene sincronizados y el validador que los comprueba, de modo que cualquiera pueda reproducir desde estos archivos las cifras que el proyecto publica. No se incluye el validador del piloto de la reforma 2.0, presente en la versión 1.15.0, porque depende de archivos todavía en transición y no podría ejecutarse desde el depósito. Tampoco la capa de definiciones del Caribe del atlas, que se declara a sí misma en estado de prototipo.

Desde julio de 2026 el corpus recibe aportes de investigadores externos bajo la misma regla de corroboración que se aplica a sí mismo, acreditados de manera individualizada en el registro público del proyecto.

Marco conceptual basado en Kamau Brathwaite, Michael Monahan, Derek Walcott y Ernesto Bassi.

Metodología completa, criterios de inclusión y limitaciones declaradas: https://pensamientocaribe.org/proyectos/metodologia-agua-de-por-medio.html

Atlas interactivo: https://pensamientocaribe.org/proyectos/con-el-agua-de-por-medio.html

---

## Después de publicar

Zenodo emite un DOI de versión nuevo. El de concepto no cambia. Mándamelo y actualizo los cuatro lugares donde debe quedar registrado:

- `CITATION.cff`: versión a `1.22.0`, fecha a la de publicación, el resumen a 310 entradas y 841 relaciones, y el identificador de versión nuevo en lugar de `10.5281/zenodo.21875688`.
- La sección «Datos abiertos, versiones y cita» de la metodología, en español y en inglés.
- La ficha «Cómo citar el corpus» del marco conceptual del atlas y su JSON-LD.
- La marca de marea, si declara el DOI de la versión archivada.

## Sumas de comprobación

Para confirmar que subiste exactamente lo que se validó aquí:

```
de477610aff35623bd982b92b1bb13e9  datos-atlas.js
2cb5b3a106e5c2f169e07ae7475d3898  datos-atlas.json
0469204a8c47a57a7fede8f8ffeb4739  sincronizar.py
765dc3d2a26f03688cdd6e9395e18c48  reflujo.py
9896e574ebd6b46c83922a741cd97566  validar-atlas.mjs
```

El `md5` de `reflujo.py` coincide con el del archivo ya depositado en 1.14.0 y 1.15.0: ese no ha cambiado. El de `validar-atlas.mjs` sí cambió respecto a 1.15.0, porque el validador creció con las comprobaciones de los campos 2.0.

## Por qué no esperar a la reforma 2.0

Ningún dictamen pendiente bloquea este depósito. La migración a corrientes vive en `atlas-2/` y nunca ha formado parte de lo que se archiva. Lo que se deposita es el corpus publicado, cerrado y validado. La adjudicación académica de las veintitrés clasificaciones del último lote tampoco bloquea: van marcadas como propuestas, y esa marca es información que el depósito debe conservar, no una impureza que haya que limpiar antes de archivar.
