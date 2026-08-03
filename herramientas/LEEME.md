# Herramientas de autoría

Esta carpeta guarda herramientas que **producen material del sitio pero no son páginas del sitio**. Se versionan en el repositorio, pero ninguna página las enlaza y no forman parte de la navegación.

Estaban en `assets/`, que es la carpeta pública de recursos. Se movieron aquí el 3 de agosto de 2026 para que no ocupen espacio en la superficie publicada.

---

## `diagrama-caribe.html` — editor del diagrama archipiélico

Editor interactivo del diagrama **«La antropología del Caribe colombiano»**, el que aparece como imagen de portada cuando alguien comparte el sitio.

### Qué relación tiene con `assets/diagrama-antropologia-caribe.jpg`

Es su fuente editable.

El JPG que vive en `assets/` es la exportación de este editor. Y ese JPG **es la imagen Open Graph y de Twitter Card de diez páginas**:

| Página | |
|---|---|
| `index.html` · `index-en.html` | Portada ES y EN |
| `manifiesto/antropologia-del-caribe-colombiano.html` · `-en.html` | Manifiesto ES y EN |
| `medios/cine-caribe.html` · `-en.html` | Filmoteca ES y EN |
| `proyectos/mas-ramas-que-raices.html` · `-en.html` | Cartografía sonora ES y EN |
| `proyectos/negrura-blanquitud-monumental.html` · `-en.html` | Negrura ES y EN |

Es decir: esta herramienta es la única forma de volver a generar o modificar la imagen con la que Pensamiento Caribe se presenta en redes sociales y en los resultados de búsqueda. Por eso no se borró.

### Cómo abrirla localmente

Necesita servirse por HTTP, no abrirse con doble clic: carga D3 y tipografías desde CDN, y el protocolo `file://` bloquea parte de eso.

```bash
cd ~/"Pagina copia"/pensamiento-caribe
python3 server.py
```

Y en el navegador:

```
http://localhost:3000/herramientas/diagrama-caribe.html
```

También sirve cualquier servidor estático, por ejemplo `python3 -m http.server 8000` desde la raíz del repositorio.

### Qué genera

La herramienta tiene cuatro controles, arriba a la izquierda:

| Control | Qué hace |
|---|---|
| **✎ Editar** | Activa la edición del diagrama: mover, renombrar y reorganizar los elementos |
| **↺ Vista** | Vuelve al modo de solo lectura |
| **↓ SVG** | Descarga el diagrama como vectorial, para imprenta o para reescalar sin pérdida |
| **↓ PNG** | Descarga el diagrama como imagen de mapa de bits |
| **+ / −** | Zoom. También responden la rueda del ratón y el arrastre |

### Cómo actualizar la imagen Open Graph

Cuatro pasos. El tamaño importa: el informe de rediseño pide 1200×630 px para las imágenes de Open Graph, y el JPG actual **no cumple** esa proporción — conviene corregirlo cuando se regenere.

1. Abrir la herramienta según las instrucciones de arriba.
2. Editar el diagrama y exportar con **↓ PNG**.
3. Convertir a JPG en 1200×630 y sustituir el archivo:

   ```bash
   cd ~/"Pagina copia"/pensamiento-caribe
   # respaldo antes de sustituir
   cp assets/diagrama-antropologia-caribe.jpg \
      assets/diagrama-antropologia-caribe.jpg.anterior

   # convertir (requiere ImageMagick)
   magick ~/Downloads/diagrama.png \
     -resize 1200x630^ -gravity center -extent 1200x630 \
     -quality 82 assets/diagrama-antropologia-caribe.jpg
   ```

4. **No hay que tocar ningún HTML.** Las diez páginas apuntan a la misma ruta, así que basta con sustituir el archivo. Después conviene revalidar la vista previa con el depurador de Facebook o el validador de Twitter Cards, porque ambos cachean la imagen anterior.

### Dependencias

| Dependencia | Origen | Nota |
|---|---|---|
| D3 7.8.5 | `cdnjs.cloudflare.com` | Motor del diagrama. Sin atributo `integrity` |
| Cormorant Garamond | Google Fonts | Tipografía editorial del sitio |
| Jost | Google Fonts | **Solo la usan esta herramienta y `medios/cine-caribe.html`.** Candidata a eliminarse del sistema tipográfico |
| PNG incrustado | — | 800×369 px en base64, 243 KB de los 358 del archivo |

Necesita conexión a internet la primera vez, para D3 y las tipografías.

### Por qué no está publicada

Tres razones:

Es una herramienta, no una página: no tiene navegación, ni `<main>`, ni metadatos, ni forma de volver al sitio. Quien llegara por accidente no entendería qué es.

Pesa 358 KB, más que ninguna página real del sitio, y arrastra una dependencia de D3 que ninguna otra página de la portada necesita.

Y nadie la enlazaba: llevaba desde la migración de Netlify accesible por URL directa sin que ninguna página apuntara a ella.

---

## Nota sobre GitHub Pages

GitHub Pages publica el repositorio completo. Que un archivo esté en `herramientas/` **no lo hace inaccesible**: sigue alcanzable por URL directa en `pensamientocaribe.org/herramientas/diagrama-caribe.html`.

Lo que cambia es que deja de estar en la carpeta de recursos del sitio, queda agrupado con otras herramientas y su condición queda documentada.

Si en algún momento hace falta que **no** sea alcanzable, hay dos caminos: sacar la carpeta del repositorio y guardarla aparte, o renombrarla a `_herramientas/`, ya que Jekyll —que GitHub Pages ejecuta por defecto— excluye del build las carpetas que empiezan por guion bajo. La segunda opción es menos invasiva, pero depende de un comportamiento de Jekyll que conviene verificar antes de confiar en él.
