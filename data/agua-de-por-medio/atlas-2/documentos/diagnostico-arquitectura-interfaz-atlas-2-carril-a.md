# DIAGNÓSTICO Y ARQUITECTURA — INTERFAZ ATLAS 2.0 (CARRIL A)

**Primera entrega obligatoria, previa a cualquier modificación del frontend**

Fecha: 24 de agosto de 2026
Rama de trabajo declarada por Dirección Académica: `feat/atlas-2-etapa-1-integrada`
Documentos que rigen esta entrega: Instrucción Maestra «Nueva interfaz Atlas 2.0» (§33 y §40) y **Adenda Obligatoria «Mejorar la interfaz existente — no rediseñarla desde cero»** (§18, apartados A–H). Donde ambos difieren, manda la adenda, que declara expresamente modificar y precisar la instrucción anterior.

Alcance: diagnóstico, identidad visual encontrada, arquitectura propuesta y plan. **No se modificó ningún archivo del repositorio.** No se abrió ni se leyó ninguna obra de P3. No se avanzó P3-A. No se emitió ningún dictamen académico. No se ejecutó ningún comando Git.

---

## 0. Cómo se hizo esta inspección

La adenda exige en su §3 abrir la interfaz y revisarla visualmente en escritorio y móvil antes de diseñar nada. Eso se hizo, y de una forma que conviene declarar con precisión porque condiciona la validez de lo que sigue.

Se copiaron al entorno de trabajo, en modo lectura, `proyectos/con-el-agua-de-por-medio.html` junto con sus cinco dependencias reales (`datos-atlas.js`, `datos-temporalidad.js`, `js/zoom-caribe.js`, `css/zoom-caribe.css`) y se abrió esa copia en Chromium con Playwright a 1440, 1280, 430, 390, 375 y 320 px, midiendo geometría real del DOM y capturando pantalla en cada ancho. Los originales en el Mac no se tocaron: su integridad queda certificada por hash SHA-256 en el §12 de este documento. La única diferencia respecto de lo que ve un visitante es que el entorno de prueba no tiene salida a Google Fonts, de modo que Cormorant Garamond e Inter se sustituyeron por sus respaldos (Georgia y la tipografía de sistema). Eso no afecta a ninguna de las mediciones de geometría que se reportan más abajo, porque todos los controles del encabezado usan la familia monoespaciada, que es local en ambos casos.

Sobre Git: se mantiene la política ya establecida y verificada durante la auditoría P3 de la Etapa 2.3G, que prohíbe ejecutar comandos Git contra este repositorio desde el entorno de trabajo, incluso de solo lectura, porque dejó `.git/index.lock` colgado en ocasiones anteriores. El estado Git de partida que declara el §38 de la Instrucción Maestra se toma como información recibida, no como algo verificado aquí. Al momento de la inspección no había ningún archivo `.lock` en `.git/`.

Una precisión sobre el alcance de esta entrega. El §40 de la Instrucción Maestra lista quince pasos que incluyen implementar una primera versión, pero tanto el §33 de esa misma instrucción como el §18 de la adenda condicionan la implementación a que este documento se presente primero. Se cumple la condición más restrictiva: aquí no hay código escrito, solo la propuesta de qué escribir y por qué.

---

# A. Qué identidad visual encontré

## A.1 Paleta exacta, extraída de la implementación

Las variables CSS están declaradas en `:root`, en el bloque `<style>` interno del propio HTML (líneas 28–36). No hay que elegir paleta nueva: esta ya es la paleta.

| Variable | Valor | Función en la interfaz |
|---|---|---|
| `--bg-deep` | `#050604` | Fondo general, casi negro con una desviación verde mínima |
| `--bg-warm` | `#0a0b08` | Degradado superior del encabezado |
| `--panel` | `#11130d` | Fondo de paneles laterales (filtros, ficha) |
| `--green` | `#245f1e` | Verde base |
| `--green-l` | `#3f8a35` | Verde de acento, estado activo de la vista y estado «confirmada» |
| `--orange` | `#f07a16` | Naranja de resonancia, botón de entrada, `accent-color` de casillas |
| `--red` | `#d83a2e` | Rojo de disonancia y del subtítulo institucional |
| `--gold` | `#c9a24d` | Oro de capa activa, chips de filtro, enlaces destacados |
| `--gold-d` | `#8a6c2c` | Oro oscuro, bordes |
| `--cream` | `#f2ead8` | Texto principal |
| `--gray` | `#b9b09f` | Texto secundario y etiquetas de control |
| `--line` | `#2c2e24` | Bordes y separadores |

A esto se suman los diez colores de fenómeno, que no viven en el CSS sino en el corpus (`datos-atlas.js`, clave `c` de cada fenómeno), y que son los que pintan cada punto del mapa: colonialidad `#c65a3f`, postplantación `#caa14a`, capitalismo racial `#9b7d4e`, catástrofes climáticas `#5fa9a0`, soberanías `#4a86c0`, violencias `#a33b3b`, memoria y espiritualidad `#9d72c4`, cimarronaje `#e07b2c`, creolización `#5aa544`, cuerpo/género/erótica `#cf6a90`. Hay además dos colores puntuales que no pasan por variable: el azul `#4a9db0` del filtro de lengua y el rojo oscuro `#a8281f` usado solo en `:hover` de los botones de acción.

Ese `#a8281f` merece una nota, porque revela que alguien ya hizo trabajo de contraste con criterio. El comentario del código lo explica: crema sobre `--red` daba 3.84:1, por debajo de AA, y en lugar de tocar `--red` (que se usa como texto en el resto del sitio) se introdujo un tono más oscuro exclusivo para ese estado, que da 5.87:1. Lo mismo con el chip de filtro: se pasó de `--gold-d` a `--gold` sobre `#211a06` para subir de 3.51:1 a 7.21:1. Es exactamente el procedimiento que ordena el §4 de la adenda, ajustar luminosidad dentro de la misma familia en vez de importar un color ajeno, y ya está aplicado. No voy a rehacerlo, voy a extenderlo donde falte.

## A.2 Tipografía

Tres familias, declaradas como variables y cargadas desde Google Fonts:

- `--ff-display`: Cormorant Garamond (respaldo Georgia, serif). Títulos, `h1` a 32px, encabezados de panel a 19px, títulos de obra en las fichas.
- `--ff-body`: Inter (respaldo `system-ui`). Prosa, descripciones, glosas.
- `--ff-mono`: `ui-monospace` / SF Mono / Consolas. Todo el aparato de control: etiquetas de filtro (9px, versalitas, `letter-spacing` 1.6px), botones de vista (10.5px), chips (9px), barra de leyenda (9.5px), buscador (10.5px).

Esa división de tres registros es una decisión de diseño fuerte y consistente: la serif dice archivo y libro, la monoespaciada dice instrumento y aparato crítico, la sans dice lectura. Funciona, y no hay razón para introducir una pareja tipográfica distinta. El único problema real es de escala, no de elección: 9px en versalitas con `letter-spacing` amplio es el límite inferior de lo legible en pantalla, y en móvil queda por debajo del mínimo confortable que pide el §14 de la Instrucción Maestra.

## A.3 El mapa

Es un SVG propio, `<svg id="stage" viewBox="0 0 1200 640">`, con proyección escrita a mano (`const py = lat => PAD + (LAT1-lat)/(LAT1-LAT0)*(VH-2*PAD)`), sin ninguna librería cartográfica de terceros. Dibuja 232 entradas sobre 30 lugares del Gran Caribe, con zoom y desplazamiento propios (`applyVP`, `vpt`), líneas de relación animadas por `requestAnimationFrame` con la marea de Brathwaite como referencia declarada, y respeto a `prefers-reduced-motion` (línea 985). Cuatro vistas: Corriente (por defecto), Constelación, Cronología, Tabla.

El mapa es, efectivamente, el corazón de la interfaz, y es bueno. La instrucción de conservarlo no requiere argumentación adicional: sustituirlo por Leaflet o MapLibre destruiría la identidad cartográfica del proyecto sin resolver ningún problema que no se pueda resolver dentro del SVG actual.

## A.4 Componentes existentes

No hay componentización formal, pero sí patrones repetidos y estables que ya funcionan como componentes de facto: el grupo de control `.grp` + `.seg` con botones segmentados y acento por familia (verde para vista, oro para capa, azul para lengua, rojo para acción); el chip removible `.chip`; el panel lateral `.panelLateral` con su botón de cierre de 44×44; la barra de leyenda `#legendBar` compacta con leyenda completa plegable; el buscador `.buscador` con contador y botón de limpieza; el bloque `<details class="e20">` del esquema 2.0 dentro de la ficha; la tabla ordenable con `aria-sort`; el modal `#marco` con trampa de foco real. Todos comparten variables, tipografía y espaciado. Es un sistema, aunque no esté escrito como tal.

## A.5 Comportamiento

La página está anclada al viewport: `html, body { height: 100dvh; overflow: hidden; overflow-x: hidden }`, `body` en flex column, encabezado fijo arriba y mapa ocupando el resto. No hay scroll de página. Los paneles se abren en posición absoluta sobre el mapa. La navegación por teclado está resuelta en el mapa con foco móvil (`setRoving`, `moverRoving`, `irAExtremo`), hay atajos de presentación (1, 2, M, flechas, 0, Esc), skip-link, `<main id="main-content">`, y un contador de resultados en `role="status" aria-live="polite"`.

El inventario ARIA es sustancial: 24 `aria-pressed`, 15 `aria-label`, 6 `aria-labelledby`, 3 `aria-sort`, 3 `aria-expanded` con sus `aria-controls`, 2 `aria-describedby`, 2 `aria-current`, `aria-modal` en el modal. Esto no es un punto de partida en cero. El riesgo aquí no es la ausencia de accesibilidad sino perderla al reestructurar.

---

# B. Qué conservaré intacto

Sin tocar, ni siquiera para «mejorarlo»:

1. Las doce variables de color de `:root` y los diez colores de fenómeno del corpus. Ningún valor cambia.
2. Las tres familias tipográficas y su reparto de registros (serif para título, mono para aparato, sans para prosa).
3. El SVG del Gran Caribe, su `viewBox`, su proyección y su lógica de zoom y desplazamiento.
4. Las cuatro vistas y sus nombres visibles.
5. La lógica de capas de fenómenos: los diez colores, la leyenda, el guion que aparece al seleccionar un fenómeno, la distinción visual entre resonancia dorada, disonancia roja y fricción.
6. El fondo negro y el degradado del encabezado con su regla de acento verde y oro.
7. El aparato de corroboración: la barra `CORR_OK/RELS`, la marca de vínculo sin fuente declarada, el texto que distingue el vínculo documentado del propuesto por el investigador.
8. El umbral de entrada («Entrar en la corriente») y el marco conceptual con Brathwaite y Monahan.
9. El reflujo y su puerta de aportes.
10. El bloque `<details class="e20">` y su regla de no inventar valores.
11. Todo el aparato ARIA y la navegación por teclado ya existentes.
12. El aparato bibliográfico (BibTeX, RIS) y el bloque de cómo citar con su DOI.

---

# C. Qué mejoraré, clasificado elemento por elemento

La adenda pide en su §3 que cada elemento caiga en una de cinco categorías y que predomine REFINAR. Este es el reparto real:

| Elemento | Categoría | Qué se hace |
|---|---|---|
| Paleta `:root` | **CONSERVAR** | Ningún valor cambia |
| Colores de fenómeno | **CONSERVAR** | Ningún valor cambia |
| Familias tipográficas | **CONSERVAR** | Se mantienen las tres |
| Escala tipográfica en móvil | **REFINAR** | Subir los 9px del aparato de control a un mínimo confortable solo por debajo de 780px |
| SVG y proyección del mapa | **CONSERVAR** | Intacto |
| Tamaño del mapa en móvil | **CORREGIR** | Hoy ocupa 607px de alto en un viewport de 800 pero dibuja el archipiélago en una franja de ~150px; falta reencuadre inicial por ancho |
| Etiquetas de lugar en el mapa | **REFINAR** | Se superponen en el arco antillano; aplicar umbral de zoom o desplazamiento por colisión |
| Barra de controles del encabezado | **CORREGIR** | Falla funcionalmente en móvil (ver D.1); es el defecto más grave encontrado |
| Panel de filtros | **REFINAR + REORDENAR** | Se conserva el patrón; se añaden corriente y territorio, y un «limpiar filtros» que hoy no existe |
| Chips de filtro activo | **CONSERVAR** | Patrón sano, se reutiliza para las dimensiones nuevas |
| Barra de leyenda | **REORDENAR** | En móvil su botón queda fuera de pantalla; recolocar, no eliminar |
| Ficha de obra | **REFINAR** | Contenido excelente; sacar el estado de curaduría del `<details>` colapsado a zona visible |
| Bloque `<details class="e20">` | **REFINAR** | Se conserva entero; se le antepone el badge de estado |
| Apertura de ficha en escritorio | **CORREGIR** | Desplaza el `body` 504px a la izquierda (ver D.2) |
| Tabla | **CONSERVAR** | Ordenable, con `aria-sort`, funciona |
| Modal del marco conceptual | **CONSERVAR** | Trampa de foco correcta |
| Contraste de color | **REFINAR** | Continuar el método ya aplicado donde falte |
| CSS en bloque `<style>` interno | **REORDENAR** | A archivo propio, sin cambiar una sola regla |
| JavaScript en un solo `<script>` | **REORDENAR** | A módulos, por fases y por riesgo creciente |
| Doble fuente `datos-atlas.js` / `.json` | **CORREGIR** | Formalizar la generación, no hacerla a mano |
| Enlace a `css/zoom-caribe.css` | Pendiente de decisión | Es CSS de otro proyecto; confirmar qué depende de él antes de tocarlo |

Ningún elemento cae en ELIMINAR. Diecisiete de veintidós caen en CONSERVAR o REFINAR.

---

# D. Problemas concretos detectados

Los dos primeros son fallas funcionales medidas, no impresiones.

## D.1 En móvil no se puede filtrar, buscar, cambiar de idioma ni abrir la leyenda completa

El contenedor `.controls` del encabezado mide **867px de contenido** y se le da un ancho disponible de 406px a 430px de viewport, 366px a 390px, 351px a 375px y 296px a 320px. No hay envoltura efectiva ni scroll horizontal, porque `html, body` llevan `overflow-x: hidden` y `body` lleva además `overflow: hidden`. El resultado medido, idéntico en los cuatro anchos:

| Control | Posición horizontal | ¿Alcanzable? |
|---|---|---|
| Buscador | 333 → 501 px | **No** |
| Botón Filtros | 640 → 708 px | **No** |
| Botón Idioma | 833 → 866 px | **No** |
| Ver leyenda completa | 361 → 516 px | **No** |

Los cuatro quedan fuera del viewport y el `overflow: hidden` impide desplazarse hasta ellos. En un teléfono, hoy, la interfaz permite mirar el mapa y poco más. Esto no es un problema de estética ni de densidad: es la pérdida completa del aparato de control en el dispositivo desde el que probablemente entra la mayor parte del tráfico. Es la primera cosa que hay que arreglar, antes que cualquier funcionalidad nueva.

## D.2 En escritorio, abrir una ficha desplaza toda la página 504px a la izquierda

Medido a 1440px: antes de abrir una ficha, `document.body.scrollLeft` vale 0; después de `openPanel()`, vale **504**. El encabezado, el mapa y la barra de leyenda se salen de cuadro por la izquierda y aparece una franja negra vacía a la derecha. La causa probable es que el navegador hace scroll-into-view sobre el panel recién mostrado, y `overflow: hidden` oculta la barra de desplazamiento pero no impide el desplazamiento programático. Es reproducible y visible en la captura de comprobación adjunta.

## D.3 La primera impresión del mapa muestra cero relaciones

La barra de leyenda declara al entrar: «232 entradas · **0 relaciones visibles** · 65% corroborado». Las 588 relaciones existen pero solo se dibujan al seleccionar un fenómeno o una obra. Como la tesis central del atlas es que las obras se leen por lo que las conecta, la pantalla inicial contradice el argumento que la propia página acaba de enunciar en el umbral. No propongo dibujar las 588 de golpe, que sería ilegible: propongo que el estado inicial muestre algo, aunque sea un subconjunto corroborado, o que el texto explique que hay que seleccionar para verlas en vez de anunciar un cero.

## D.4 Las etiquetas de lugar se superponen en el arco antillano

Visible a 1440px: Antigua, Guadalupe, Dominica, Barbados, Granada y Trinidad se pisan entre sí, y en la zona continental «Rep. Dominicana», «Cartagena» y «Puerto Rico» quedan encimadas. La densidad de puntos es una virtud del corpus, pero las etiquetas necesitan un umbral de zoom o una separación por colisión.

## D.5 Solo existen tres puntos de corte responsive

`max-width: 760px`, `max-width: 780px` y una regla combinada de `780px` con `max-height: 480px`. Frente a los seis anchos que exige verificar el §14 de la Instrucción Maestra, un único corte real en torno a 780px explica por qué 320 y 375 se comportan igual de mal que 430.

## D.6 La palabra «corriente» ya nombra tres cosas distintas, y ninguna es C1–C10

Este es el hallazgo conceptual del diagnóstico, y conviene enunciarlo con cuidado porque toca el §11 de la Instrucción Maestra, que declara crítica la separación entre taxonomías.

En la interfaz publicada, «corriente» designa hoy: (1) la vista por defecto del mapa, el botón «CORRIENTE» del selector; (2) el vínculo entre dos obras, tanto en la prosa del marco conceptual («las corrientes de relación son la estructura del mapa», «las corrientes doradas resuenan, las rojas disienten») como en el encabezado de columna de la tabla, que se titula «Corrientes corroboradas» y cuenta relaciones con fuente declarada; y (3) por metonimia, el fenómeno que se elige en la leyenda, según el texto de ayuda del mapa: «selecciona una corriente en la leyenda», donde lo que la leyenda lista son los diez fenómenos.

Ninguno de esos tres usos corresponde a las corrientes C1–C10 del catálogo de Atlas 2.0. El riesgo no es teórico: si el frontend nuevo empieza a llamar «corriente» a C1–C10 mientras las otras tres acepciones siguen vivas en la misma página, se produce exactamente la confusión de sistemas que la instrucción prohíbe, pero por una vía que la instrucción no anticipó. Cómo se resuelve es una decisión de nomenclatura conceptual, no un detalle técnico de los que el §34 me autoriza a decidir por mi cuenta. Queda planteado, sin resolver, en el §10 de este documento.

## D.7 El corpus está vacío en la dimensión que Atlas 2.0 quiere publicar

Comprobado contra `datos-atlas.json` (232 obras): tienen `corriente` **0**, `revision` **0**, `marcas` **0**, `operaciones` **0**, `proceso` **0**, `lengua_publicacion` **0**, `temporalidades` **0**, `rutas` **0**. Solo 5 tienen `procedencia` y 2 `procedencia_verificada`. Las 26 decisiones académicas cerradas de P1 y P2 existen en prosa dentro de `atlas-2/documentos/`, pero ninguna está sincronizada en los datos: el propio `cierre-lote-p2-etapa-2-3f.md` lo dice en su §14. Hoy, el conjunto de obras publicables como «clasificación confirmada» en el sentido C1–C10 es el conjunto vacío. Esto no bloquea el carril de interfaz, pero determina qué puede enseñar la interfaz el día que se publique, y hay que decirlo antes de construir y no después.

## D.8 Deuda técnica de estructura

447 líneas de CSS y 93 funciones de JavaScript dentro de un solo archivo HTML de 2311 líneas, con nombres de variable de una y dos letras (`N`, `L`, `R`, `FEN`, `t()`, `place()`). Ninguna carga diferida: la búsqueda de `IntersectionObserver`, `requestIdleCallback`, `loading="lazy"`, `defer` y `async` no devuelve un solo resultado, y los 222 KB de `datos-atlas.js` se cargan y procesan de forma síncrona y bloqueante antes de que la página pinte nada.

## D.9 Un hallazgo favorable que conviene registrar

`estado20()` (líneas 636–643) y `esquema20Html()` (líneas 1383–1450) ya implementan la capa del esquema nuevo: leen `revision.estado`, `corriente`, `marcas`, `operaciones`, `procedencia_verificada`, `lengua_publicacion`, `temporalidades` y `rutas`, con nombres de campo que coinciden exactamente con los del `esquema-datos-propuesto.json`, y con la regla explícita, escrita como comentario en el código, de no inventar nunca un valor y declarar «pendiente» cuando el campo falta. Es el principio de integridad académica del §2 de la Instrucción Maestra, ya programado. La consecuencia práctica es importante: el sistema de estados académicos no hay que diseñarlo desde cero, hay que auditarlo, completarlo y sacarlo del `<details>` colapsado donde hoy vive.

## D.10 Consola

Sin errores ni advertencias en los cinco anchos probados, salvo el fallo de red de Google Fonts, que es un artefacto del entorno de prueba sin salida a internet y no ocurre en el sitio publicado.

---

# E. Qué archivos tocaría

Ninguno se ha tocado todavía. Esta es la lista propuesta, no ejecutada:

1. `proyectos/con-el-agua-de-por-medio.html` — extracción de CSS y JS, corrección de D.1 y D.2, filtros nuevos, zona de estado de curaduría.
2. `css/con-el-agua-de-por-medio.css` — **archivo nuevo**, con las 447 líneas actuales trasladadas sin cambio de reglas, más los puntos de corte que faltan.
3. `js/atlas2/` — **directorio nuevo** de módulos, poblado por fases según el §8.
4. `data/agua-de-por-medio/datos-atlas.js` y `.json` — **solo si** Dirección Académica autoriza por separado la sincronización de P1 y P2. No forman parte de la primera implementación propuesta.

# F. Qué archivos NO tocaría

- `data/agua-de-por-medio/datos-atlas.json` y `datos-atlas.js`, salvo la autorización separada del punto anterior. Se leen, no se escriben.
- `data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json` y `documentos/esquema-datos-propuesto.json`. Referencia, solo lectura.
- Los 78 documentos de `data/agua-de-por-medio/atlas-2/documentos/`: dictámenes C1–C10, expedientes de evidencia, decisiones y lecturas de P1 y P2, cola de lectura, cierres de lote y la auditoría P3 recién entregada.
- Los dos archivos históricos no rastreados que el §20 de la Instrucción Maestra señala expresamente: `data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md` y `data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md`. Se confirmó que ambos existen y se registró su hash en el §12; quedan excluidos de toda operación de este carril.
- `data/agua-de-por-medio/atlas-2/lotes/*.json`.
- `js/atlas-ficha.js`, `index.html`, `index-en.html` y lo relacionado con la portada del sitio. Se verificó que `atlas-ficha.js` pertenece a la portada, escucha un evento `atlas:seleccion` de un `caribbean-map.js` distinto, y no interviene en esta interfaz.
- `css/zoom-caribe.css` y el resto de `css/*.css`. Se siguen importando tal cual.
- `scripts/validar-atlas.mjs`, `scripts/validar-piloto-atlas-2.mjs` y `sincronizar.py`.

# G. Cambios que considero de bajo riesgo

Reversibles, verificables por comparación visual antes y después, sin efecto sobre la lógica:

1. Trasladar el bloque `<style>` a `css/con-el-agua-de-por-medio.css` sin modificar una sola regla. Verificación: capturas idénticas a 1440 y 390 antes y después.
2. Añadir los puntos de corte que faltan (430, 390, 375, 320) sin tocar los tres existentes.
3. Corregir D.1 permitiendo que `.controls` envuelva o se desplace en móvil. Es CSS, no toca JavaScript.
4. Corregir D.2 restableciendo `scrollLeft` tras abrir un panel, o evitando el scroll-into-view implícito. Son pocas líneas y el defecto es reproducible, de modo que la corrección es comprobable.
5. Subir la escala tipográfica del aparato de control solo por debajo de 780px.
6. Sacar el badge de estado del `<details>` a una zona visible «Estado de la curaduría» en la ficha, reutilizando `.e20-badge` tal como está.
7. Añadir el botón «Limpiar filtros», que hoy no existe como acción única.
8. Extraer a un módulo las funciones puras que ya lo son: `sinTildes`, `anoNum`, `apellidoDe`, `claveBib`, `tradCodes`, `estado20`, `esCorr`.

# H. Cambios que considero estructurales

Requieren decisión explícita y verificación pieza por pieza:

1. **Modularizar el JavaScript.** 93 funciones acopladas al DOM. Propongo tres olas de riesgo creciente: utilidades puras, luego construcción de HTML (`esquema20Html`, `tblRows`, `buildLegend`), y al final el estado e interacción del mapa (`render`, `place`, `syncEdges`, `refreshHi`). El motor del mapa se toca el último y solo si hace falta.
2. **Añadir corriente y territorio como dimensiones de filtro.** Es estructural porque toca `visible()`, la sincronización con el mapa y el contador, y porque la dimensión «corriente» operará sobre un conjunto hoy vacío, lo que exige decidir cómo se comporta el filtro cuando no hay nada que mostrar.
3. **Vistas de lista y tarjetas.** El §7.E de la Instrucción Maestra las pide, pero el §7 de la adenda advierte contra convertir la interfaz en una colección de rectángulos. Propongo tarjetas solo como vista alternativa explícita, nunca sustituyendo al mapa.
4. **Fichas de corriente y de territorio como unidades consultables.** Requieren decidir antes la cuestión de nomenclatura de D.6.
5. **URL propia por obra.** Cada obra ya tiene `id` estable usado en `openPanel(id)` y en el hash; convertir eso en dirección citable es viable pero cambia el modelo de navegación.
6. **Formalizar la generación de `datos-atlas.js` desde el `.json`.** Toca la arquitectura de datos y el flujo de publicación, no solo el frontend.

---

# Puntos del §33 de la Instrucción Maestra no cubiertos por A–H

## 5. Diseño de estados académicos

Los cinco estados que exige el §4 de la Instrucción Maestra, mapeados sobre lo que el código ya calcula:

| Estado exigido | ¿Ya calculado? | Campo que lo determina | Qué falta |
|---|---|---|---|
| CLASIFICACIÓN CONFIRMADA | Sí, como `confirmada` | `revision.estado` ∈ {confirmada, revisada} | Nada en la lógica. Falta que exista al menos una obra con el campo poblado (D.7) |
| EN REVISIÓN ACADÉMICA | Parcialmente, como `preliminar` | candidatura preliminar, o `procedencia` declarada | Distinguir «pertenece a un lote activo» de «tiene candidatura», que hoy se confunden |
| LECTURA PENDIENTE | No | — | Requiere cruzar el `id` contra la cola de lectura, que hoy solo existe en prosa |
| PROCEDENCIA POR VERIFICAR | Sí, como bandera dentro de la ficha | `procedencia_verificada === false` | Promoverlo a estado de primer nivel, no una nota interior |
| BLOQUEADA | No | — | Requiere un campo estructurado que hoy no existe |

Propongo generalizar `estado20(obra)` a `estadoAcademico(obra, colaP3)`, que reciba también el estado de la cola, para poder resolver LECTURA PENDIENTE y BLOQUEADA sin inventar campos en `datos-atlas.json` antes de que Dirección Académica decida cómo estructurarlos. Mientras esa fuente no exista, esos dos estados se declaran no disponibles en vez de simularse. Es la misma regla que el código ya se impuso a sí mismo.

## 6. Estructura de mapa, filtros y fichas

**Mapa.** Se conserva el SVG y la proyección. Se corrige el encuadre inicial en móvil (D.5) y la colisión de etiquetas (D.4). Se añade selección de territorio desde el propio mapa, que activa el filtro correspondiente. Queda pendiente para una fase posterior la representación textual alternativa del mapa que exige el §15, y que hoy no existe.

**Filtros.** De cinco dimensiones a siete: Capa, Evidencia, Lengua, Movimiento e Indirectas, que ya existen, más corriente y territorio. Todas combinables con el patrón de chip actual. Botón «Limpiar filtros» siempre visible. En móvil el panel ya se abre como superposición con `aria-expanded`, que es lo que pide el §13; lo que falla hoy es llegar al botón que lo abre (D.1).

**Fichas.** Se conserva íntegro el contenido actual, que es la parte más lograda de la interfaz: título, autoría, año, lengua, lugar, chips de fenómeno, glosa, y la lista de conexiones directas con su estado de corroboración declarado obra por obra. Se le añade arriba la zona «Estado de la curaduría» con el badge, y se prepara la estructura para URL propia.

## 7. Plan de implementación por fases

**Fase 1, auditoría.** Es este documento. Completada.

**Fase 2, arquitectura.** Es este documento. Completada.

**Fase 3, capa de orden y corrección.** Corresponde a las capas 1 a 3 del §6 de la adenda. Extracción de CSS sin cambio de reglas, corrección de D.1 y D.2, puntos de corte que faltan, escala tipográfica en móvil, badge de estado visible, botón de limpiar filtros. Todo del bloque G.

**Fase 4, capa de jerarquía y datos.** Filtros de corriente y territorio, primera ola de modularización, vista de lista.

**Fase 5, refinamiento.** Corresponde a la capa 6 de la adenda: transiciones, microinteracciones, fichas de corriente y territorio, `RelationView`. Solo después de que las fases 3 y 4 estén verificadas visualmente en los seis anchos.

Ninguna fase empieza sin que Dirección Académica haya visto este documento.

## 8. Riesgos

1. **Corpus vacío en la dimensión nueva** (D.7). Publicar filtros de corriente y de estado académico sobre un conjunto vacío puede leerse como interfaz rota en vez de como proyecto en construcción. Mitigación: el texto de transparencia metodológica del §27 tiene que estar junto a esos controles, no escondido en un panel aparte.
2. **Colisión de «corriente»** (D.6), con riesgo de que el propio desarrollo mezcle lógica de relación con lógica de clasificación al reutilizar nombres parecidos.
3. **Regresión visual al modularizar** (H.1). Es el riesgo técnico mayor. Se mitiga con el orden por riesgo creciente y comparación de capturas entre pasos.
4. **`css/zoom-caribe.css` compartido.** Esta página importa una hoja nombrada por otro proyecto del sitio. No se ha confirmado qué depende de ella; modificarla por error afectaría a «Con el vaivén de las corrientes» sin aviso.
5. **Doble fuente de datos** sin generación automatizada, con riesgo de desalineación silenciosa el día que se sincronicen P1 y P2.
6. **Perder accesibilidad al reestructurar** (A.5). El inventario ARIA actual es sustancial y es fácil romperlo moviendo marcado.

## 9. Incidencias académicas que deben quedar fuera del frontend

1. **Sincronizar las 26 decisiones cerradas de P1 y P2 en los datos.** Es una operación de datos que roza el §35, y prefiero pedirla explícitamente antes que asumirla. Sin ella, la interfaz nueva no tiene ninguna obra confirmada que mostrar.
2. **Nomenclatura pública de C1–C10 frente a los tres usos vivos de «corriente»** (D.6). Decisión conceptual, no técnica.
3. **La discrepancia C1/C3 entre catálogo y decisión**, registrada como `PENDIENTE_DE_NORMALIZACION_TAXONOMICA` en el cierre de P2. Si llega a publicarse una ficha de C1 o C3, mostrará la etiqueta vigente de `catalogos-atlas-2.json` sin intentar reconciliar nada.
4. **Ausencia de C7 a C10 en el universo P3 nominalizado**, según el §26. La interfaz las soportará con lo confirmado disponible, hoy nada, sin rellenarlas.
5. **Casos bibliográficamente bloqueados** (`esquiva`, `chande`, `manoalzada` entre los pendientes de identidad). Problema editorial; la interfaz solo necesita poder representarlos como BLOQUEADA cuando exista el campo.
6. **El duplicado `steward` / `stewardpuertorico`**, que `incidencias-cerradas.md` registra como abierto y que el validador ya detecta con la regla `TITULO_DUPLICADO`. Exige fusión editorial antes de publicar. No lo resuelvo.
7. **La política de entradas compuestas** que afecta a `mintz`, pendiente en `decisiones-pendientes.md`.

## 10. Propuesta concreta de primera implementación

Deliberadamente corta, toda dentro del bloque G, ejecutable en un solo movimiento verificable:

1. Trasladar el bloque `<style>` a `css/con-el-agua-de-por-medio.css` sin cambiar ninguna regla. Comprobación: capturas a 1440 y 390 idénticas antes y después.
2. Corregir D.1: hacer que la barra de controles sea alcanzable en 320, 375, 390 y 430px, sin quitar ningún control, agrupándolos o permitiendo su envoltura según manda el §11 de la adenda.
3. Corregir D.2: impedir el desplazamiento horizontal del `body` al abrir un panel.
4. Recolocar la barra de leyenda en móvil para que su botón sea alcanzable.
5. Subir la escala tipográfica del aparato de control por debajo de 780px.
6. Sacar el badge de estado a una zona «Estado de la curaduría» visible en la ficha.
7. Añadir «Limpiar filtros».

Verificación antes de dar por terminado: capturas a 1440, 1280, 430, 390, 375 y 320; consola sin errores nuevos; medición de que ningún control queda fuera del viewport; comprobación de que `body.scrollLeft` sigue en 0 tras abrir ficha; y hash SHA-256 de `datos-atlas.json`, `datos-atlas.js` y de los documentos de `atlas-2/documentos/` idéntico al registrado abajo.

Ningún `git add`, `commit` ni `push` en ningún punto sin instrucción expresa.

---

# 12. Verificación de integridad del árbol de trabajo, sin Git

Hashes SHA-256 calculados antes de escribir este documento:

```
f600016e9586dc6edaa67531628a000309f638dfa127fe9e1f054d10304e3158  proyectos/con-el-agua-de-por-medio.html
0885ea377bade5f4075b1f329b3bea9bdbc9b95fba3eb0007edcb71c50254645  js/atlas-ficha.js
b850f081c0107a72bfedd12b8d780aaf1efba638e3440a6e249219bf07e7313c  data/agua-de-por-medio/datos-atlas.json
d2f8e68dc8915c597e5f3ff93ec55cc601a5de98c35c1ffdaeb0ba938d469048  data/agua-de-por-medio/datos-atlas.js
f12ca9ac34a98836ac79091be6a63eead2b24eff6869c14a78bd727e5d97207b  data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json
c9900dad467d2e94cf74241b7621ceb733f98766a38c14014d3a2e60cc15cfc4  data/agua-de-por-medio/atlas-2/documentos/esquema-datos-propuesto.json
3ed1239348b8b886773cccabcd879b25d140b98f4e6fb45984cc10ba41fa121f  data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
2eb89027c02d7e461d5277c351dc6aaafb5ea57dcedd117bec762317cc232c8c  data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
a0c99d113ed140b97fad65319f760e00afa6b9211ea3f3c8b2b9194eb1ed59ff  css/zoom-caribe.css
0056a6d0fd1c92e6656ecd6fa6ee3f157f1b122d2ed3bda87a8e8e80543f32b3  css/components.css
9ed02eb6ea098f7dea66f1310439ac5c8284a18a1f91452dfa49461fb5044fcd  css/layout.css
58862fe39a99590b57395cd1749409b3e5cf18afa7b4edad856b3c514129b266  css/reset.css
```

Los dos archivos históricos no rastreados figuran en esa lista precisamente para dejar constancia de su estado sin tocarlos. No había ningún `.git/index.lock` ni `.git/HEAD.lock` al momento de la inspección. El único archivo nuevo que introduce esta entrega es él mismo. No se modificó `datos-atlas.json`, ni ningún documento de `atlas-2/documentos/`, ni ningún archivo de `proyectos/`, `js/` o `css/`. No se ejecutó ningún comando Git.

---

# 13. Condición visual comprometida

Cerrando con el criterio del §15 de la adenda: nada de lo propuesto aquí haría que alguien que conoce Pensamiento Caribe diga que parece otra página. La paleta no cambia, las tipografías no cambian, el mapa no cambia, las cuatro vistas no cambian, la leyenda de fenómenos no cambia, el umbral con Brathwaite no cambia. Lo que cambia es que los controles sean alcanzables en un teléfono, que abrir una ficha no descuadre la pantalla, que el estado de la curaduría se vea sin desplegar nada, y que el CSS y el JavaScript vivan en archivos donde se puedan mantener.

**Estado: `INTERFAZ_AUDITADA_Y_ARQUITECTURA_PROPUESTA — PENDIENTE_DE_VISTO_BUENO_ANTES_DE_IMPLEMENTAR`.**
