# Guía: subir la versión 1.1.0 del atlas a Zenodo

**Actualización 25-jul-2026: versión publicada.** Rob subió la v2 en `zenodo.org/records/21554775` (DOI de esta versión: `10.5281/zenodo.21554775`; DOI de concepto, que ahora es el que usa el sitio: `10.5281/zenodo.21483568`). El dato en sí quedó correcto (134 obras, 238 relaciones, verificado descargando el archivo real de Zenodo). Pendiente: el archivo subido fue `datos-atlas.js` (con el envoltorio `window.ATLAS=`) en vez del `.json` canónico — funciona igual, pero si se sube una v3 conviene subir el `.json`. **Pendiente real, no cosmético: la licencia en Zenodo sigue en CC BY 4.0**, no se corrigió a CC BY-NC-SA 4.0 como pedía la guía original (ver más abajo). El sitio (CITATION.cff, JSON-LD, panel de cita, metodología) ya quedó actualizado con los DOI nuevos.

Este archivo lo tienes que ejecutar tú desde tu Mac porque Zenodo exige login con tu cuenta (ver `git-push-desde-mac`: por la misma razón el sandbox tampoco puede hacer esto por ti). Ya dejé todo listo de este lado: el dato y el texto de citación. Lo único que falta es la subida en sí.

## Lo que ya está hecho

- `data/agua-de-por-medio/datos-atlas.json` y su espejo `datos-atlas.js` quedaron actualizados: `version: "1.1.0"`, `fecha: "2026-07-23"`, 134 obras y 238 relaciones (verificado corriendo el archivo con Node antes de escribir esto — carga sin errores).
- `CITATION.cff` ya refleja 134 obras / 238 relaciones y versión 1.1.0 en la entrada del atlas. El campo `doi` sigue apuntando al registro actual (`10.5281/zenodo.21483569`) porque en Zenodo ese número puede seguir siendo válido como DOI de concepto — ver más abajo.

## Un problema que encontré y que debes corregir en Zenodo, no solo en el sitio

Revisé el registro publicado (`zenodo.org/records/21483569`) y su licencia ahí figura como **CC BY 4.0** (atribución simple). Pero el sitio, el `CITATION.cff` y el panel "Cómo citar" del atlas siempre han dicho **CC BY-NC-SA 4.0** (atribución, no comercial, compartir igual). Son licencias distintas — CC BY permite uso comercial y CC BY-NC-SA no. Alguien (probablemente el formulario de Zenodo, que por defecto sugiere CC BY) dejó pasar esa casilla la primera vez. Al crear la versión nueva, cambia la licencia en el formulario de Zenodo a CC BY-NC-SA 4.0 para que quede igual en los dos lados.

## Pasos en Zenodo

1. Entra a zenodo.org e inicia sesión con tu cuenta.
2. Ve a `zenodo.org/records/21483569` (el registro actual del atlas).
3. Busca el botón **"New version"** (en tu panel de "My dashboard" también aparece listado el depósito con esa opción).
4. En el formulario de la nueva versión:
   - **Reemplaza el archivo.** Borra el `datos-atlas.js` viejo (107.5 kB, 117 obras) y sube el nuevo `data/agua-de-por-medio/datos-atlas.json` desde tu carpeta local. Te recomiendo subir el `.json` en vez del `.js`: es el formato canónico, sin el envoltorio `window.ATLAS=...`, y es el que de verdad sirve si alguien más quiere reutilizar el dato fuera de tu sitio.
   - **Descripción:** actualiza el texto para que diga 134 obras (no 117) y menciona las 238 relaciones. Puedes copiar el abstract que ya dejé en `CITATION.cff`.
   - **Versión:** escribe `1.1.0`.
   - **Fecha:** 23 de julio de 2026 (o la fecha en que efectivamente publiques, si prefieres que coincida).
   - **Licencia:** cámbiala a CC BY-NC-SA 4.0 (ver el problema de arriba).
   - Autores, afiliación y palabras clave puedes dejarlos igual a la versión anterior.
5. Publica.

## Qué DOI mandarme después

Zenodo va a mostrarte, en la página del nuevo registro, dos números de DOI:

- El **DOI de esta versión específica** (1.1.0) — apunta siempre a esta versión exacta, aunque hagas una 1.2.0 después.
- El **DOI de concepto** (aparece como "Cite all versions?" o en una fila separada arriba de la lista de versiones) — apunta siempre a la versión más reciente, cualquiera que sea.

Mándame los dos. Para el panel "Cómo citar" del atlas y para `CITATION.cff` conviene usar el **DOI de concepto**, precisamente para no tener que tocar el sitio cada vez que agregues una ronda de siembra nueva — solo republicarías una versión nueva en Zenodo y el enlace ya existente seguiría siendo válido. Cuando me pases ambos números actualizo:

- `CITATION.cff` (campo `doi` de la entrada del atlas)
- El JSON-LD (`identifier`, `sameAs`) y el panel de citación en `proyectos/con-el-agua-de-por-medio.html`
