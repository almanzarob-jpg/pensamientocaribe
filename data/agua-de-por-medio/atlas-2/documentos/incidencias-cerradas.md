# Incidencias cerradas con evidencia

10 de agosto de 2026 · addendum a la hoja «Incidencias» de los libros de plan

La bitácora conserva las 37 incidencias de la Etapa 1 aunque se resuelvan, que es la regla correcta. Este archivo registra cuáles ya están resueltas, con la comprobación que lo demuestra, para que la hoja deje de marcarlas como pendientes.

No se editaron los `.xlsx` desde el entorno de trabajo: el round-trip de openpyxl elimina las validaciones de datos que esos libros usan en otras hojas. Las celdas se indican para cambiarlas a mano.

---

## Fila 5 · crítica · «Error de clasificación en la interfaz»

**Lo que decía.** `tradCode()` en `con-el-agua-de-por-medio.html` busca la subcadena «hispano», que no existe dentro de «hispanófono», y por eso `naveda_esclavoscordoba`, `alvarezboro` y `londonoargonauts` quedan clasificadas como «comparado». Mientras no se corrija, el mapa publicado dibuja fricciones epistémicas falsas sobre esas tres entradas.

**Por qué está resuelta.** El diagnóstico era correcto en su momento: «hispano» no es subcadena de «hispanófono», porque la ó lleva tilde. Pero la función hoy normaliza antes de comparar. En la línea 715 hace `sinTildes(n.tr||"")`, y `sinTildes` está definida en la línea 750 como `s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase()`. Con eso «hispanófono» se convierte en «hispanofono» y la alternativa `hispanofon` del patrón lo captura.

**Comprobación.** Ejecutada la lógica publicada sobre los valores reales del campo `tr`:

| Valor de `tr` | Códigos que devuelve |
|---|---|
| `hispanófono` | `["his"]` |
| `hispano (Colombia)` | `["his"]` |
| `hispanófono (Cuba)` | `["his"]` |
| `anglófono (EE.UU.)` | `["ang"]` |
| `comparado (filosofía afrocaribe)` | `[]` |

Ninguna entrada hispanófona cae ya en el vacío. **Estado propuesto: `resuelta`.**

---

## Fila 20 · alta · «Herramienta ausente»

**Lo que decía.** La metodología publicada afirma que «un compilador automatizado valida cada campo y cada relación contra el catálogo del atlas», y en el repositorio solo existe `sincronizar.py`, que compara el `.js` con el `.json` y no valida contenido alguno. Hoy la página promete una verificación que no ocurre.

**Por qué está resuelta.** El repositorio tiene ahora `scripts/validar-atlas.mjs` (23 KB) y `scripts/validar-piloto-atlas-2.mjs` (16 KB). El primero comprueba esquema, catálogos, corrientes, marcas, orillas, relaciones, fricciones, temporalidades y traducciones, con códigos de error propios y salida distinta de cero cuando bloquea.

**Comprobación.** `node scripts/validar-atlas.mjs` sobre el corpus 1.15.0 devuelve `0 error(es)` y advertencias que corresponden una a una con incidencias que la propia bitácora registra como deudas editoriales abiertas: fechas ausentes, autorías sin identificar, tipo en revisión y entradas compuestas. La promesa de la metodología se sostiene.

**Estado propuesto: `resuelta`.**

---

## Incidencia que sigue abierta y ahora sí tiene puerta automática

La fila 9 registra el duplicado `steward` / `stewardpuertorico` con severidad alta. Seguía abierta y, además, el validador no la veía: su regla `ID_DUPLICADO` compara identificadores, y aquí hay dos identificadores distintos para el mismo libro.

El 10 de agosto se añadió a `validar-atlas.mjs` la regla `TITULO_DUPLICADO`, que normaliza el título (sin tildes, sin puntuación, en minúsculas) y avisa cuando dos entradas comparten uno. Sobre las 233 entradas devuelve exactamente un aviso y ningún falso positivo:

```
[ADVERTENCIA TITULO_DUPLICADO] Entradas distintas con el mismo título:
steward = stewardpuertorico. Exigen fusión y redirección del ancla
superviviente antes de publicar.
```

La incidencia sigue abierta porque la fusión es una decisión editorial. Lo que cambia es que ya no depende de que alguien la recuerde.

---

## Qué cambiar a mano

En los tres libros de plan (`plan-operativo-t01-calibracion-chatgpt-24.xlsx` y sus dos versiones anteriores), hoja **Incidencias**, columna **Estado**:

| Fila | Valor actual | Valor nuevo |
|---|---|---|
| 5 | `pendiente` | `resuelta` |
| 20 | `pendiente` | `resuelta` |

Y en la hoja **Corrientes**, filas 5 y 13, columnas de etiqueta ES y EN, quedan pendientes los renombramientos aprobados el 10 de agosto: «Invasiones y mundos indígenas» / «Invasions and Indigenous worlds», y «Espiritualidades, rituales y archivos vivos» / «Spiritualities, rituals and living archives».
