# INFORME — CARRIL B

## Externalización controlada de la interfaz del Atlas 2.0

**Fecha:** 25 de agosto de 2026
**Repositorio:** `~/Pagina/pensamiento-caribe` · rama de referencia `feat/atlas-2-etapa-1-integrada`
**Partida:** `CARRIL_A_FASE_5C_CERRADA_Y_APROBADA`
**Naturaleza:** preparación para publicación. No se rediseñó la interfaz, no se modificó ningún dato académico, no se avanzó P3, no se implementó territorio y no se ejecutó ninguna operación Git.

---

## 1. Estado inicial

### Archivos y hashes de partida

| archivo | hash | bytes |
|---|---|---|
| `proyectos/con-el-agua-de-por-medio.html` | `e56f5ca07643380fb8a027ee5975d969865ffb424bc140e832d254f933e2aa4b` | 179 039 |
| `css/con-el-agua-de-por-medio.css` | `904dcf247a95ce4d177b746ca9b0e2c0ce7b636e9c8fd2e140922e8204f34930` | 50 206 |
| `css/zoom-caribe.css` | `a0c99d113ed140b97fad65319f760e00afa6b9211ea3f3c8b2b9194eb1ed59ff` | 6 990 |
| `js/zoom-caribe.js` | `66d99ef187016bc0ae096f343e0293fd93ff634a7ab9525bb20f7a74679685cf` | 17 742 |
| `data/agua-de-por-medio/datos-atlas.js` | `19ebf3886a621f7dfacadbbac9f8290be31886d117e8598c45fee7d38f3af8b9` | 267 815 |
| `data/agua-de-por-medio/datos-atlas.json` | `5a4e6a0dc9c404902d2b1e7008653134f5ff44a39c68338a25f7737350f4ba80` | 333 866 |
| `data/agua-de-por-medio/datos-temporalidad.js` | `20a8c32d9d3bb5054cb370b00df7633eeff3957f621e8f17c740169223fb0f8f` | 2 309 |

### Conteos, medidos en el navegador sobre `window.ATLAS`

| magnitud | referencia | medido |
|---|---|---|
| obras | 232 | **232** |
| relaciones | 588 | **588** |
| confirmadas | 80 | **80** |
| pendientes | 83 | **83** |
| sin evaluar | 69 | **69** |
| preliminares | 0 | **0** |
| con recorrido principal | 74 | **74** |
| fronteras constitutivas | 4 | **4** |
| síntesis multicorriente | 2 | **2** |

Los nueve coinciden. No hubo que detener nada por discrepancia de cifras.

### Dependencias reales

Reconstruidas desde el HTML, no supuestas. La página declara exactamente estas referencias externas al propio archivo:

**Locales, todas relativas** — `../css/zoom-caribe.css`, `../css/con-el-agua-de-por-medio.css`, `../js/zoom-caribe.js`, `../data/agua-de-por-medio/datos-atlas.js?v=…`, `../data/agua-de-por-medio/datos-temporalidad.js?v=…`, `../data/agua-de-por-medio/datos-atlas.json` (descarga), `../index.html`, `../index.html#proyectos`, `../medios/cine-caribe.html`, `metodologia-agua-de-por-medio.html`, `mas-ramas-que-raices.html`, `negrura-blanquitud-monumental.html`, `reflujo-guia.html`.

**Remotas** — `fonts.googleapis.com` (hoja de estilo de Cormorant Garamond e Inter, con `preconnect` a `fonts.gstatic.com`), `doi.org` y `creativecommons.org` (enlaces, no recursos), y la URL canónica `pensamientocaribe.org`.

**Sin `fetch()`, sin `import`, sin CDN de scripts, sin imágenes externas.** El mapa es SVG generado en la propia página; no hay tiles, ni librería de cartografía, ni dependencia de terceros para dibujar.

**Conclusión sobre autocontención:** la interfaz es autocontenida **salvo por la tipografía**. Sin `fonts.googleapis.com` la página funciona íntegra —se midió— y solo cambia la familia tipográfica renderizada.

### Rutas locales del ordenador

Barrido de todo el repositorio en busca de `/Users/`, `localhost`, `127.0.0.1` y `~/Pagina`, en HTML, CSS, JS, JSON y TOML. **Un solo archivo aparece**, y no es de la interfaz: `.netlify/netlify.toml`. Ver incidencia 2.

---

## 2. Arquitectura de publicación

**Ruta pública:** `https://pensamientocaribe.org/proyectos/con-el-agua-de-por-medio.html`

Es la que ya existe, la que declara el `canonical` de la página y la que enlaza el sitio. **No se propone cambiarla.** La página está publicada hoy en esa dirección y responde: se comprobó que la versión en línea carga, con su título y su descripción correctos, y —como corresponde, porque nada se ha subido— **sin el control Recorridos**.

**Llegada desde el sitio.** `index.html` contiene **cuatro** enlaces al Atlas. Medido a 1440 px, **dos son visibles** —«Con el agua de por medio» en la tarjeta de proyecto y «Atlas del Gran Caribe» en el pie— y dos están ocultos a ese ancho, los del rótulo «Atlas» en la navegación. La navegación desde el home funciona: pulsar el enlace visible lleva a la página y esta carga completa. **La página no está huérfana.**

**Mecanismo de despliegue.** Netlify, sitio `4d684b99-a19d-4952-b435-eb84cd3d5691`, dominio propio declarado en `CNAME` (`pensamientocaribe.org`). No hay `netlify.toml` en la raíz del repositorio, de modo que la configuración efectiva vive en el panel de Netlify. El repositorio ya tiene su propia puerta de publicación, `scripts/publicar.sh`, que corre las comprobaciones y solo entonces commitea y empuja.

**Funcionamiento HTTP.** Verificado sobre un servidor HTTP real, no sobre `file://`. Sirviendo un espejo del sitio con la estructura de directorios de producción, la página resuelve todos sus recursos, todos sus enlaces internos devuelven 200 y no aparece ningún 404 salvo el `favicon.ico` que el navegador pide por su cuenta.

---

## 3. Archivos modificados

**Uno solo.**

| | |
|---|---|
| archivo | `proyectos/con-el-agua-de-por-medio.html` |
| qué cambió | la marca de versión con que el HTML pide el corpus: `datos-atlas.js?v=202608071` → `datos-atlas.js?v=202608251` |
| líneas | 1 |
| hash antes | `e56f5ca07643380fb8a027ee5975d969865ffb424bc140e832d254f933e2aa4b` |
| hash después | `05630227541ea4b901407a2abfefd7c2b502e04542a7915f0b9e592c107940e6` |
| bytes | 179 039 → **179 039** (idéntico) |

**Por qué.** El repositorio usa una marca de versión en la petición precisamente para forzar la recarga cuando el archivo cambia. `datos-atlas.js` cambió dos veces desde que se escribió esa marca —la sincronización de la Fase 5B y su regeneración— y la marca se quedó como estaba. Un visitante que ya conociera la página recibiría el HTML nuevo con el corpus viejo.

**No lo supuse: lo medí.** Serví el HTML de la Fase 5C junto al `datos-atlas.js` anterior a la 5B, el que guarda el respaldo de aquella fase:

| comprobación | resultado |
|---|---|
| errores de JavaScript | **0** — la interfaz no se rompe |
| obras cargadas | 232 |
| obras con el campo `recorrido` | **0** |
| contadores del panel de Recorridos | **232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0** |
| al elegir C4 | **232 nodos atenuados, ninguno destacado** — el mapa queda apagado |
| bloque Recorridos en la ficha | **no aparece** |

El fallo es silencioso: no hay error en consola, solo un panel lleno de ceros y un mapa que se apaga al usarlo. Es exactamente el tipo de avería que una externalización debe evitar antes de que ocurra.

La intervención cumple las cinco condiciones del §3: **mínima** (una cadena, cero bytes de diferencia), **justificada** (el archivo cambió y la marca no), **medida** (la tabla de arriba), **documentada** (aquí) y **reversible** (el respaldo del apartado 4).

---

## 4. Archivos creados

| archivo | finalidad |
|---|---|
| `atlas-2/derivados/respaldo-previo-carril-b/con-el-agua-de-por-medio.html` | el HTML tal como lo aprobó la Fase 5C. Copiarlo sobre `proyectos/` revierte la externalización sin Git. Hash `e56f5ca0…3e2aa4b`, idéntico al aprobado |
| `atlas-2/derivados/aplicar-carril-b.mjs` | el procedimiento reproducible: una sustitución de texto exacto que aborta si el anclaje no aparece exactamente una vez |
| `atlas-2/documentos/informe-externalizacion-interfaz.md` | este informe |

---

## 5. Elementos no modificados

Confirmación expresa, verificada por hash antes y después:

| | |
|---|---|
| **datos** | `datos-atlas.json` y `datos-atlas.js` intactos: `5a4e6a0d…f4ba80` y `19ebf388…3af8b9` |
| **recorridos** | `recorrido`, `recorridos_sec`, `arquitectura_recorrido`, `estado_recorrido`, `revision` y `fuente_recorrido` sin tocar en ninguna obra |
| **P3** | no se abrió ninguna obra, no se clasificó nada, no se completó ninguna pendiente |
| **territorio** | no se usó `orillas`, no se creó ningún filtro territorial, no se tocó `l` |
| **catálogos académicos** | `catalogos-atlas-2.json` sin cambio: `f12ca9ac…d97207b`. `provisional: true` sigue en los diez |
| **dictámenes** | ningún documento histórico modificado |
| **paleta** | el CSS no se tocó: `904dcf24…f34930`, el mismo hash que aprobó la 5C |
| **mapa** | `zoom-caribe.js` y `zoom-caribe.css` sin cambio; ninguna coordenada, ninguna proyección |
| **tipografía** | sin cambios: las mismas dos familias, cargadas del mismo sitio |

La denominación de C1 sigue siendo la del catálogo. `estado20()` no se tocó.

---

## 6. Pruebas

Ejecutadas **sobre servidor HTTP**, con Chromium, `prefers-reduced-motion`, cruzando el umbral de entrada, sobre un espejo del sitio con la estructura de directorios de producción.

| ancho | carga | obras/rel | nodos | opciones | en la barra | foco C4 | ocultos | viewBox estable | pend/sin | teclado | ficha+Esc | vistas | búsqueda | zoom | reencuadre | overflow | encabezado/mapa | errores JS | 404 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1440 | ok | 232/588 | 232 | 13 | 0 | 16/19/197 | **0** | sí | 83/69 | ok | ok | 232/232/232/232 | 7 · 5 · 5 | ok | ok | no | 250/650 | **0** | **0** |
| 1280 | ok | 232/588 | 232 | 13 | 0 | 16/19/197 | **0** | sí | 83/69 | ok | ok | 232/232/232/232 | 7 · 5 · 5 | ok | ok | no | 250/550 | **0** | **0** |
| 430 | ok | 232/588 | 232 | 13 | 0 | 16/19/197 | **0** | sí | 83/69 | ok | ok | 232/232/232/232 | 7 · 5 · 5 | ok | ok | no | 239/694 | **0** | **0** |
| 390 | ok | 232/588 | 232 | 13 | 0 | 16/19/197 | **0** | sí | 83/69 | ok | ok | 232/232/232/232 | 7 · 5 · 5 | ok | ok | no | 239/606 | **0** | **0** |
| 375 | ok | 232/588 | 232 | 13 | 0 | 16/19/197 | **0** | sí | 83/69 | ok | ok | 232/232/232/232 | 7 · 5 · 5 | ok | ok | no | 239/574 | **0** | **0** |
| 320 | ok | 232/588 | 232 | 13 | 0 | 16/19/197 | **0** | sí | 83/69 | ok | ok | 232/232/232/232 | 7 · 5 · 5 | ok | ok | no | 239/452 | **0** | **0** |

«en la barra» es el número de controles de recorrido permanentes en la barra de controles: **cero** en los seis anchos, las trece opciones viven en el panel. «búsqueda» son las tres consultas exigidas: `price`, `c6` y `huracanes`.

**`viewBox` inicial**, idéntico al que cerró la Fase 5C:

```
1440   0 0 1200 640
1280   0 0 1200 640
 430   412.9 -131.1 569.3 973.7
 390   404.3 -131.1 586.5 973.7
 375   400.9 -131.1 593.2 973.7
 320   381.8 -131.1 631.4 973.7
```

**Móvil.** El encabezado mide 239 px en los cuatro anchos móviles, igual que antes del control Recorridos, y el mapa conserva su altura. `document.body.scrollLeft` es 0 y el documento no desborda horizontalmente en ningún ancho. Los controles se alcanzan y no hay superposiciones en el encuadre inicial.

**Enlaces internos**, resueltos por HTTP desde `/proyectos/`:

| código | enlace | resuelve a |
|---|---|---|
| 200 | `../index.html` | `/index.html` |
| 200 | `../index.html#proyectos` | `/index.html` |
| 200 | `../data/agua-de-por-medio/datos-atlas.json` | `/data/agua-de-por-medio/datos-atlas.json` |
| 200 | `reflujo-guia.html` | `/proyectos/reflujo-guia.html` |
| 200 | `metodologia-agua-de-por-medio.html` | `/proyectos/metodologia-agua-de-por-medio.html` |
| 200 | `mas-ramas-que-raices.html` | `/proyectos/mas-ramas-que-raices.html` |
| 200 | `negrura-blanquitud-monumental.html` | `/proyectos/negrura-blanquitud-monumental.html` |
| 200 | `../medios/cine-caribe.html` | `/medios/cine-caribe.html` |

Los cuatro últimos merecen una nota: son enlaces sin `../` y por tanto resuelven **dentro de `proyectos/`**. Los cuatro archivos existen ahí. No hay enlace roto.

**Peticiones al servidor en la sesión completa:** 64 con código 200 y **una** con 404, `/favicon.ico`. Ver incidencia 3.

**Rendimiento.** Los recursos propios de la página se sirven en 22–27 ms cada uno:

| recurso | bytes | tiempo |
|---|---|---|
| `datos-atlas.js` | 268 115 | 23 ms |
| `con-el-agua-de-por-medio.css` | 50 506 | 23 ms |
| `zoom-caribe.js` | 18 042 | 23 ms |
| `zoom-caribe.css` | 7 290 | 23 ms |
| `datos-temporalidad.js` | 2 609 | 22 ms |
| HTML | 179 039 | — |

Sin recursos duplicados, sin imágenes pesadas en la carga inicial —la única imagen del proyecto, la de Open Graph, la piden las redes sociales, no el navegador—, y sin scripts de terceros.

Con las fuentes remotas atendidas al instante, `DOMContentLoaded` a **144 ms** y `load` a **165 ms**. Ver incidencia 1 para lo que ocurre cuando no lo son.

---

## 7. Casos sentinela

| caso | columna Recorrido | ficha |
|---|---|---|
| `stoutafterlove` | **C10 + C4** | principal C10 · «También dialoga con» C4 |
| `rifkinfictions` | **C1 ↔ C3** | frontera constitutiva, sin principal |
| `pricefirst` | **C3 ↔ C9** | frontera constitutiva, sin principal |
| `whiteheadtiger` | **C1 ↔ C7** | frontera constitutiva, sin principal |
| `schwartz_seaofstorms` | **C6 ↔ C7** | frontera constitutiva + «También dialoga con» C2 y C4 |
| `perezmorales` | **C3 · C5 · C7** | síntesis multicorriente, sin principal ni secundarias |
| `pinedashipwrecked` | **C1 · C4 · C7** | síntesis multicorriente, sin principal ni secundarias |
| `gudynas` | **Pendiente** | clasificación de recorrido: pendiente |
| `mintz` | **Pendiente** | clasificación de recorrido: pendiente |
| `mintzarea` | **C2 + C4** | registro distinto de `mintz` |
| `steward` | **C4** | permanece en el corpus |
| `stewardpuertorico` | — | **fuera del corpus** |

Ninguna frontera muestra recorrido principal. Ninguna síntesis recibió principal ni secundarias. Ninguna pendiente se completó.

**Vista Tabla**, columna presente y con las cuatro formas semánticas intactas: 12 filas `C4`, 62 `C10 + C4`, 4 `C1 ↔ C3`, 2 `C3 · C5 · C7`, 83 `Pendiente` y 69 `Sin evaluar`. Suman 232. `+` subordina, `↔` empareja, `·` enumera; ninguna se sustituyó por color.

---

## 8. Validadores

Ejecutados sin modificarlos, sobre el árbol real:

| comando | resultado |
|---|---|
| `node scripts/validar-atlas.mjs` | **0 errores · 4 advertencias** |
| `python3 data/agua-de-por-medio/sincronizar.py --check` | **En sincronía · v1.16.1 · 232 obras · 588 relaciones** |
| `node scripts/verificar-cifras-sitio.mjs` | **0 desfases** · 32 afirmaciones comprobadas |
| `node scripts/validar-fenomenos.mjs` | **0 errores · 3 advertencias** |
| `validar-piloto-atlas-2.mjs` sobre `piloto`, `s01`, `a01`, `a02` | **OK las cuatro** |

Los dos primeros coinciden exactamente con lo que cerró la Fase 5C. Los otros tres son el resto de la puerta de publicación `scripts/publicar.sh`, y también pasan: **la puerta oficial del repositorio está en verde**.

---

## 9. Incidencias

### Bloqueantes

**Ninguna.**

### No bloqueantes

**1 · La tipografía es la única dependencia remota, y el evento `load` cuelga de ella.** Medido: con `fonts.googleapis.com` inalcanzable, `DOMContentLoaded` tarda **12 717 ms**; con la petición abortada al instante, **144 ms**. La diferencia es íntegramente la espera de esa hoja de estilo remota. La página funciona en los dos casos —el atributo `display=swap` mantiene el texto visible con la tipografía de reserva— y ninguna función del Atlas depende de ella. En producción el host resuelve con normalidad, así que no es el escenario esperado; sí lo es para quien navegue en una red que bloquee Google Fonts. Resolverlo exigiría alojar las fuentes en el propio dominio, lo que toca la tipografía y excede la intervención mínima de esta fase.

**2 · `.netlify/netlify.toml` contiene una ruta absoluta del ordenador.** Es el único archivo del repositorio con `/Users/…`:

```toml
[build]
publish = "/Users/robertoalmanza/Pagina/pensamiento-caribe/dist"
command = "npm run build"
```

Ni `package.json` ni `dist/` existen en el repositorio, de modo que ese comando no podría funcionar. Hoy es inerte, porque Netlify solo lee `netlify.toml` de la **raíz** del repositorio y ahí no hay ninguno: la configuración efectiva vive en el panel, como delatan sus propios `publishOrigin = "ui"` y `commandOrigin = "ui"`. Pero `.netlify/` **no figura en `.gitignore`**, así que `git add -A` —que es lo que hace `publicar.sh`— lo incluiría si aún no está versionado. No lo toqué: la solución completa necesita una operación Git, y las operaciones Git son tuyas. Está en el apartado 11.

**3 · `favicon.ico` devuelve 404.** Es la única petición fallida de la sesión. No es un problema de esta página sino del sitio: no existe ningún favicon en el repositorio y **ninguna** página lo declara, tampoco `index.html`. Añadirlo solo aquí sería incoherente con el resto del sitio y crear el icono es una decisión de identidad visual, no de externalización. Queda registrado como asunto de sitio.

### Deuda futura, heredada y no tocada aquí

**4 · Denominación de C1.** El catálogo dice «Invasiones, despojos y mundos indígenas»; el dictamen aprueba «Mundos indígenas, invasiones y persistencias», pendiente de incorporación al catálogo. La interfaz publica la del catálogo. **No se resolvió**, conforme al §17 y al visto bueno de la Dirección Académica.

**5 · `estado20()` frente a `estado_recorrido`.** Comparten vocabulario y divergen ya en cinco obras. Comprobado que la externalización **no altera** su comportamiento: la función no se tocó y sus tres puntos de aparición siguen siendo los mismos. **No se fusionaron indicadores.**

**6 · Ancho desplazable de la barra móvil.** Registrado por la Fase 5C y ratificado por la Dirección Académica como deuda de UX. No se intentó rediseñar. Verificado que sigue siendo operable y que no produce desplazamiento horizontal del `body`.

---

## 10. Seguridad básica

| comprobación | resultado |
|---|---|
| enlaces `target="_blank"` | 5, **todos con `rel="noopener"`** |
| dependencias remotas innecesarias | ninguna: solo la tipografía |
| scripts de terceros | ninguno |
| `fetch()` o `import` remotos | ninguno |
| HTML construido desde datos | sí, 15 asignaciones de `innerHTML` sobre el corpus |

Sobre lo último: el corpus es un archivo del propio repositorio, revisado por los validadores y sin aportes externos ni entrada de usuario que llegue al DOM. Con la arquitectura actual —sin backend, sin formularios que reinyecten, sin comentarios— no hay superficie de inyección. Conviene tenerlo presente el día que se abran aportes comunitarios, que es una fase que esta instrucción declara fuera de alcance.

---

## 11. Comandos Git para ejecutar manualmente

**No se ejecutó ninguna operación Git.** Estos son los comandos, para que los corras tú.

Revisar antes de nada qué hay pendiente:

```bash
cd ~/Pagina/pensamiento-caribe
git status --short
```

Deberías ver, además de lo de esta fase, lo acumulado desde la Fase 5B y la 5C:

```
data/agua-de-por-medio/datos-atlas.json                                 (modificado · 5B)
data/agua-de-por-medio/datos-atlas.js                                   (modificado · 5B)
proyectos/con-el-agua-de-por-medio.html                                 (modificado · 5C y Carril B)
css/con-el-agua-de-por-medio.css                                        (modificado · 5C)
scripts/sincronizar-recorridos-atlas-2.mjs                              (nuevo · 5B)
data/agua-de-por-medio/atlas-2/derivados/                               (nuevo · 5B, 5C y Carril B)
data/agua-de-por-medio/atlas-2/documentos/auditoria-academica-fase-5a.md            (nuevo)
data/agua-de-por-medio/atlas-2/documentos/matriz-clasificacion-fase-5a.csv          (nuevo)
data/agua-de-por-medio/atlas-2/documentos/decision-normativa-contrato-recorridos-fase-5a-d.md  (nuevo)
data/agua-de-por-medio/atlas-2/documentos/informe-fase-5b-sincronizacion-recorridos.md  (nuevo)
data/agua-de-por-medio/atlas-2/documentos/informe-fase-5c-interfaz-recorridos.md    (nuevo)
data/agua-de-por-medio/atlas-2/documentos/informe-externalizacion-interfaz.md       (nuevo)
```

**Antes de publicar, decide sobre `.netlify/`** (incidencia 2). Si quieres sacarlo del repositorio:

```bash
printf '\n# Estado local de Netlify: contiene rutas absolutas del ordenador\n.netlify/\n' >> .gitignore
git rm -r --cached .netlify        # solo si git status lo muestra como versionado
```

**Publicar por la puerta oficial**, que vuelve a correr todas las comprobaciones del apartado 8 y solo entonces commitea y empuja:

```bash
bash scripts/publicar.sh --solo-revisar     # comprueba sin publicar
bash scripts/publicar.sh "Atlas 2.0: recorridos C1–C10 sincronizados y publicados en la interfaz"
```

Si prefieres hacerlo a mano:

```bash
git add -A
git commit -m "Atlas 2.0: recorridos C1–C10 sincronizados y publicados en la interfaz"
git push origin feat/atlas-2-etapa-1-integrada
```

Ten en cuenta que la rama de trabajo es `feat/atlas-2-etapa-1-integrada`: si el sitio se despliega desde otra rama, hará falta la fusión correspondiente, y eso es una decisión tuya.

---

## 12. Lo que no pude verificar

Conforme a la regla de entrega, esto es lo que **no** tengo probado y lo que conviene que compruebes tú.

**Las cabeceras de caché reales de Netlify.** Mis herramientas no me permiten inspeccionar las cabeceras de respuesta del sitio en producción. Si Netlify sirve `datos-atlas.js` con revalidación obligatoria, el cambio del apartado 3 es inocuo pero innecesario; si lo sirve con caché larga, ese cambio es lo que evita el fallo silencioso que medí. En cualquiera de los dos casos el cambio no hace daño. **Prueba manual:** en la terminal, `curl -sI https://pensamientocaribe.org/data/agua-de-por-medio/datos-atlas.js | grep -i cache-control`.

**El comportamiento tras la publicación real.** Todo lo de este informe se midió sobre un servidor HTTP local que sirve el árbol de archivos tal como quedará. No es el CDN de Netlify. **Prueba manual, después de publicar:** abre la URL pública, cruza el umbral, abre Recorridos y comprueba que los contadores no estén en cero; si lo estuvieran, sería caché del navegador y bastaría una recarga forzada.

**El aspecto con las tipografías reales.** El entorno de prueba no alcanza `fonts.googleapis.com`, de modo que todas mis mediciones se hicieron con la tipografía de reserva. La geometría medida —encabezado, mapa, `viewBox`, nodos— no depende de la familia tipográfica, pero el aspecto sí. **Prueba manual:** abrir la página con red y comprobar que Cormorant Garamond e Inter cargan como siempre.

---

## 13. Condición de externalización

> **¿La interfaz puede publicarse sin alterar el estado académico aprobado?**

**SÍ.**

La evidencia: los nueve conteos de referencia coinciden exactamente sobre el corpus que la interfaz carga en el navegador; los trece casos sentinela se comportan como los aprobó la Fase 5C; los cinco validadores del repositorio pasan, incluidos los tres que la 5C no había ejecutado; la interfaz funciona por HTTP en los seis anchos con **0 errores de JavaScript** y un único 404 ajeno a la página; todos los enlaces internos resuelven; el `viewBox`, el encabezado y la altura del mapa son idénticos a los aprobados; y el único archivo modificado cambió una cadena de once caracteres sin alterar un solo byte de tamaño.

Lo que se publicaría es, byte a byte, la interfaz que la Dirección Académica aprobó, con la sola diferencia de que pedirá el corpus con una marca de versión al día.

---

## Estado final

```
CARRIL_B_EXTERNALIZACION_INTERFAZ_IMPLEMENTADA_Y_VERIFICADA — LISTA_PARA_PUBLICACION_CONTROLADA
```

No se avanza a P3, ni a territorio, ni a ninguna otra fase.
