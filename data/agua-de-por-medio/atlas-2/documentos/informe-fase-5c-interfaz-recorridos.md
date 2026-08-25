# INFORME — CARRIL A · FASE 5C

## Implementación visual controlada de los Recorridos C1–C10

**Fecha:** 25 de agosto de 2026
**Repositorio:** `~/Pagina/pensamiento-caribe` · rama de referencia `feat/atlas-2-etapa-1-integrada`
**Partida:** `CARRIL_A_FASE_5B_CERRADA_Y_APROBADA`
**Naturaleza:** frontend y experiencia de navegación. No se clasificó ninguna obra, no se modificó ningún dato, no se avanzó P3, no se implementó territorio y no se ejecutó ninguna operación Git.

---

## 1. Resumen ejecutivo

Los Recorridos C1–C10 aparecen por primera vez en la interfaz, y aparecen leyendo lo que la Fase 5B escribió: nada más. Un control nuevo en la barra —**Recorridos**— abre un panel con las diez denominaciones completas, más «Todos los recorridos», «Pendientes» y «Sin evaluar». Elegir uno **focaliza y no oculta**: los 232 nodos siguen dibujados, ninguno desaparece, las 588 relaciones quedan intactas y el encuadre no se mueve.

La ficha gana un bloque discreto que distingue recorrido principal de «También dialoga con», y que nombra expresamente las dos arquitecturas especiales cuando existen. La vista Tabla gana una columna compacta que se entiende sin abrir la ficha. La búsqueda acepta ahora códigos y denominaciones **por unión**: ninguna consulta bibliográfica que antes encontraba algo deja de encontrarlo.

Ni la paleta, ni las tipografías, ni la estructura, ni el mapa, ni el zoom, ni el reencuadre móvil cambiaron. Medido: los seis `viewBox` iniciales son idénticos antes y después, y el alto del encabezado no varía en ningún ancho.

Dos incidencias quedan registradas y ninguna resuelta aquí: la discrepancia de denominación de C1 entre catálogo y dictamen, y el diagnóstico de `estado20()` que el §11 pedía elaborar sin corregir.

---

## 2. Archivos modificados

| archivo | hash antes | hash después | bytes |
|---|---|---|---|
| `proyectos/con-el-agua-de-por-medio.html` | `7a2051fc7fb70710c87e0c6612f213b407fc4ff2f94ecb480c351fb2dfeb2425` | `e56f5ca07643380fb8a027ee5975d969865ffb424bc140e832d254f933e2aa4b` | 164 927 → 179 039 |
| `css/con-el-agua-de-por-medio.css` | `5dd3948530c0f124c6dd083bfc9aef0e7f3910337f507bb2cabdd30c2ac14a55` | `904dcf247a95ce4d177b746ca9b0e2c0ce7b636e9c8fd2e140922e8204f34930` | 47 476 → 50 206 |

Ningún otro archivo del repositorio fue modificado.

---

## 3. Archivos creados

| archivo | qué es |
|---|---|
| `atlas-2/derivados/respaldo-previo-fase-5c/con-el-agua-de-por-medio.html` | el HTML tal como salió de la Fase 4B |
| `atlas-2/derivados/respaldo-previo-fase-5c/con-el-agua-de-por-medio.css` | el CSS tal como salió de la Fase 4B |
| `atlas-2/derivados/aplicar-fase-5c.mjs` | el procedimiento reproducible que produce esta fase |
| `atlas-2/documentos/informe-fase-5c-interfaz-recorridos.md` | este informe |

El respaldo del §24 no es una copia suelta: `aplicar-fase-5c.mjs` reconstruye la versión 5C desde esos dos originales con 26 sustituciones de texto exacto, cada una con su anclaje declarado. Si un anclaje no aparece exactamente una vez, el script aborta antes de escribir. Eso hace la intervención auditable línea por línea y reversible copiando los dos archivos de respaldo sobre los suyos.

---

## 4. Fuente normativa utilizada para C1–C10

Las diez denominaciones se transcriben literalmente de **`data/agua-de-por-medio/atlas-2/catalogos-atlas-2.json`**, campos `label` y `label_en`. No se reconstruyeron de memoria, no se abreviaron y no se renombraron. La página no hace peticiones de red, de modo que el catálogo no puede cargarse en tiempo de ejecución sin romper esa propiedad; la transcripción queda en el archivo con su procedencia anotada en un comentario.

Cotejadas una por una contra los diez dictámenes académicos, coinciden en nueve casos. La única divergencia es C1, y está en el apartado 20.

| | denominación (ES) | denominación (EN) |
|---|---|---|
| C1 | Invasiones, despojos y mundos indígenas | Invasions, dispossessions and Indigenous worlds |
| C2 | Trata, esclavización y plantación | Slave trade, enslavement and plantation |
| C3 | Fugas, cimarronajes y emancipaciones | Flight, marronage and emancipations |
| C4 | Postplantación, trabajo y desposesión | Post-plantation, labor and dispossession |
| C5 | Rutas, diásporas y territorios acuosos | Routes, diasporas and aqueous territories |
| C6 | Huracanes, ecologías y materialidades vivas | Hurricanes, ecologies and living materialities |
| C7 | Soberanías, fronteras y ocupaciones | Sovereignties, borders and occupations |
| C8 | Creolizaciones, traducciones y opacidades | Creolizations, translations and opacities |
| C9 | Archivos vivos, espiritualidades y saberes transmitidos | Living archives, spiritualities and transmitted knowledges |
| C10 | Cuerpos, parentescos y eróticas | Bodies, kinships and erotics |

Las diez siguen marcadas `provisional: true` en el catálogo. El panel lo dice una sola vez, en una línea sobria bajo el título: *«Denominaciones provisionales, en revisión académica.»* No se marca recorrido por recorrido, para no repetir diez veces la misma advertencia.

---

## 5. Descripción de la implementación

Todo lo nuevo se apoya en mecanismos que la interfaz ya tenía aprobados. No hay estética nueva porque no hacía falta inventarla.

**El control** es un botón más de la barra, con el mismo tratamiento que Reencuadrar, Filtros e Información, y abre un panel lateral construido con la clase `.panelLateral` que ya usan Filtros e Información. De ahí hereda gratis el cierre con Escape, el botón ×, el comportamiento excluyente entre paneles y la hoja inferior en móvil.

**El énfasis** reutiliza la gramática del foco por fenómeno que existe desde antes: `refreshHi()` ya tenía una cascada de estados —ficha abierta, búsqueda activa, fenómeno seleccionado— y el recorrido se añade al final de esa cascada, sin desplazar ninguno de los anteriores. La única diferencia es que el recorrido distingue **tres grados** en vez de dos, porque el contrato tiene tres.

**La lectura del dato** es estrictamente de lectura. Tres funciones nuevas —`recGrado()`, `recArquitectura()`, `recTextoCompacto()`— consultan `recorrido`, `recorridos_sec`, `arquitectura_recorrido` y `estado_recorrido` y no escriben nada. Ninguna asigna, completa ni infiere un recorrido: cuando una obra no declara clasificación, la interfaz dice que no la declara.

**Sin color por recorrido.** Los diez no reciben diez colores. Se distinguen por código, denominación, arquitectura y estado, que es lo que pide el §17 y también lo que evita sustituir la paleta existente. Los colores del mapa siguen siendo los de los fenómenos, exactamente como antes.

---

## 6. Comportamiento del control Recorridos

Trece opciones en una sola columna: el universo completo, los diez recorridos y las dos formas de consultar lo que todavía no está clasificado.

| opción | estructurantes | secundarias | total en foco |
|---|---|---|---|
| Todos los recorridos | — | — | 232 |
| C1 | 7 | 3 | 10 |
| C2 | 7 | 7 | 14 |
| C3 | 9 | 5 | 14 |
| C4 | 16 | 19 | 35 |
| C5 | 10 | 10 | 20 |
| C6 | 4 | 1 | 5 |
| C7 | 9 | 19 | 28 |
| C8 | 7 | 5 | 12 |
| C9 | 10 | 9 | 19 |
| C10 | 9 | 8 | 17 |
| Pendientes | 83 | — | 83 |
| Sin evaluar | 69 | — | 69 |

«Estructurantes» reúne el recorrido principal y los recorridos de una arquitectura especial: por eso C4 tiene 16 y no 15 —`pinedashipwrecked` participa de C4 como síntesis multicorriente, sin que C4 sea su principal—. La cifra visible es el total en foco, y su desglose viaja en el título accesible de cada opción, para que **35** no se lea como «treinta y cinco obras son C4».

**Al elegir un recorrido**, medido en los seis anchos con la geometría real del DOM:

- los 232 nodos siguen dibujados y **ninguno queda oculto**: 0 con opacidad 0 en los seis anchos;
- se enfatizan los estructurantes, se atenúan a la mitad los secundarios y se bajan al 9 % el resto;
- las relaciones no se rompen: se atenúan con el mismo criterio;
- el `viewBox` no cambia al focalizar ni al volver a «Todos los recorridos»: idéntico antes y después en los seis anchos;
- zoom, pan y reencuadre siguen operando igual;
- aparece un chip retirable en la barra de filtros activos, y «Limpiar filtros» lo suelta junto con los demás.

---

## 7. Ficha de obra

Bloque nuevo titulado **Recorridos**, colocado antes del bloque «Esquema 2.0», con una regla superior fina que lo separa sin introducir una caja nueva. Se adapta a los cinco casos y **no crea campos vacíos**: lo que la obra no declara, no se dibuja.

**Caso A · ordinaria confirmada** — `stoutafterlove`

```
Recorridos
  Recorrido principal
    C10 · Cuerpos, parentescos y eróticas
  También dialoga con
    C4 · Postplantación, trabajo y desposesión
  Estado del recorrido: confirmado
  Decidido en: a01-generado.json
```

**Caso B · frontera constitutiva** — `schwartz_seaofstorms`

```
Recorridos
  Frontera constitutiva
    C6 ↔ C7
    C6 · Huracanes, ecologías y materialidades vivas
    C7 · Soberanías, fronteras y ocupaciones
  También dialoga con
    C2 · Trata, esclavización y plantación
    C4 · Postplantación, trabajo y desposesión
  Estado del recorrido: confirmado
  Decidido en: decision-academica-schwartz_seaofstorms-p2-etapa-2-3f.md
```

**Caso C · síntesis multicorriente** — `perezmorales`

```
Recorridos
  Síntesis multicorriente
    C3 · C5 · C7
    C3 · Fugas, cimarronajes y emancipaciones
    C5 · Rutas, diásporas y territorios acuosos
    C7 · Soberanías, fronteras y ocupaciones
  Estado del recorrido: confirmado
```

**Casos D y E · pendiente y sin evaluar** — `gudynas`

```
Recorridos
  Clasificación de recorrido
    Pendiente
  Estado del recorrido: pendiente
  Decidido en: a02-generado.json
```

Ninguna de las seis obras de arquitectura especial recibe recorrido principal visual, y los secundarios nunca aparecen con la jerarquía tipográfica del principal: el rótulo que los precede dice literalmente «También dialoga con».

Sobre la fórmula del §10: la ficha dice **«Estado del recorrido: confirmado»**, nunca «confirmada» a secas. Lo confirmado es la clasificación de recorrido, no la obra.

---

## 8. Vista Tabla

Columna nueva **Recorrido**, esencial —no ocultable—, entre «Tipo» y «Estado (2.0)». Ordenable: primero C1…C10, luego las arquitecturas especiales, luego pendientes y sin evaluar.

| forma | significado | filas |
|---|---|---|
| `C4` | recorrido principal, sin secundarias | 12 |
| `C10 + C4` | principal más secundarias | 62 |
| `C1 ↔ C3` | frontera constitutiva | 4 |
| `C3 · C5 · C7` | síntesis multicorriente | 2 |
| `Pendiente` | clasificación no cerrada | 83 |
| `Sin evaluar` | fuera del proceso clasificatorio | 69 |
| | **total** | **232** |

Las cuatro formas se distinguen por el conector, no por el color: `+` subordina, `↔` iguala dos, `·` enumera tres. Se entiende sin abrir la ficha.

---

## 9. Búsqueda

La búsqueda bibliográfica **no se tocó**. Sigue filtrando por título y autor sin acentos, con las mismas reglas y los mismos resultados: «price» devuelve 7 obras antes y después.

Lo que se añadió es una **unión**, no una sustitución. Si la consulta nombra un recorrido —por código (`c6`) o por denominación (`huracanes`, con al menos cinco caracteres y coincidencia en un solo recorrido)—, las obras de ese recorrido se suman a los aciertos bibliográficos. Ninguna consulta que antes encontraba algo puede encontrar menos, porque el resultado anterior está contenido en el nuevo.

| consulta | resultado |
|---|---|
| `price` (bibliográfica) | 7 obras |
| `c6` (código) | 5 obras |
| `huracanes` (denominación) | 5 obras |

---

## 10. Fronteras constitutivas

Las cuatro se muestran como **Frontera constitutiva** y ninguna recibe recorrido principal visual.

| obra | recorridos | secundarias conservadas |
|---|---|---|
| `rifkinfictions` | C1 ↔ C3 | — |
| `pricefirst` | C3 ↔ C9 | — |
| `whiteheadtiger` | C1 ↔ C7 | — |
| `schwartz_seaofstorms` | C6 ↔ C7 | **C2 · C4** |

Al focalizar C6 o C7, `schwartz_seaofstorms` se enfatiza como estructurante, no como secundaria. Al focalizar C2 o C4 aparece atenuada a la mitad, que es lo que le corresponde. La bilateralidad se conserva: en ninguna parte de la interfaz existe una frontera de tres.

---

## 11. Síntesis multicorriente

Las dos se muestran como **Síntesis multicorriente**, sin principal y sin secundarias.

| obra | recorridos estructurantes |
|---|---|
| `perezmorales` | C3 · C5 · C7 |
| `pinedashipwrecked` | C1 · C4 · C7 |

Los tres recorridos se presentan en el orden en que el dato los registra, sin reordenar por ningún criterio. El separador `·` los enumera sin jerarquizarlos, a diferencia del `+` que subordina y del `↔` que empareja.

---

## 12. Pendientes y sin evaluar

Las 83 pendientes y las 69 sin evaluar **siguen existiendo, siguen siendo consultables y no se clasifican visualmente dentro de C1–C10**. Tienen dos entradas propias al final del panel, con su recuento, y su propia forma en la tabla y en la ficha.

Elegir «Pendientes» enfatiza 83 obras y atenúa el resto; elegir «Sin evaluar», 69. Comprobado en los seis anchos.

La nota al pie del panel lo dice en una línea: *«El Atlas sigue en investigación: las obras fuera del recorrido elegido no desaparecen, se atenúan.»* Es la frase que hace que 152 obras sin recorrido confirmado se lean como estado del trabajo y no como hueco.

---

## 13. Diagnóstico de Estado (2.0) · §11

**No se modificó `estado20()`.** Este apartado la diagnostica.

**Dónde aparece.** En tres lugares de la interfaz, los tres preexistentes:

1. el bloque **Estado de la curaduría** de la ficha, con distintivo y glosa explicativa;
2. el resumen plegable **Esquema 2.0** de la misma ficha, con el mismo distintivo;
3. la columna **Estado (2.0)** de la vista Tabla, que además ordena por ella.

**Qué campo consume.** Solo `revision.estado`, con un desempate por `procedencia`:

```js
function estado20(n){
  const rev = n.revision && n.revision.estado;
  if(rev==='confirmada' || rev==='revisada') return 'confirmada';
  if(rev==='candidatura_preliminar' || rev==='pendiente_revision_con_texto') return 'preliminar';
  if(n.procedencia) return 'preliminar';
  return 'pendiente';
}
```

**Cómo se relaciona con `revision.estado`.** Es una proyección de cuatro valores del vocabulario de revisión sobre tres etiquetas públicas. `confirmada` y `revisada` colapsan en «confirmada»; `candidatura_preliminar` y `pendiente_revision_con_texto` colapsan en «preliminar».

**Qué cambio visual produjo la Fase 5B.** El campo `revision` pasó de estar ausente en las 232 obras a existir en 79. El distintivo, que no se tocó, cambió en consecuencia:

| | antes de 5B | después de 5B |
|---|---|---|
| pendiente | 227 | 150 |
| preliminar | 5 | 5 |
| confirmada | **0** | **77** |

**Cómo podría confundirse con `estado_recorrido`.** De tres maneras, y las tres son ahora verificables en pantalla.

*Primera, léxica.* La ficha muestra, en menos de un centímetro de distancia vertical, «Estado del recorrido: **confirmado**», «Estado de la curaduría: **confirmada**» y «Esquema 2.0: **confirmada**». Tres palabras casi idénticas para tres cosas distintas: la clasificación de recorrido, el registro de revisión y el grado de migración al esquema 2.0.

*Segunda, de alcance.* La glosa de «confirmada» dice «Esta entrada tiene decisión académica formal registrada en el expediente del atlas», que es una afirmación sobre la obra entera. `estado_recorrido = confirmado` afirma bastante menos: que su recorrido está decidido. Es exactamente el riesgo que el §10 pide evitar, y vive en un texto que esta fase no tenía autorizado tocar.

*Tercera, y la más concreta: en cinco obras las dos dimensiones ya no coinciden.*

| `estado20` | `estado_recorrido` | obras |
|---|---|---|
| confirmada | confirmado | 227 → 77 |
| pendiente | pendiente | 81 |
| pendiente | sin_evaluar | 69 |
| **preliminar** | **confirmado** | **3** |
| **preliminar** | pendiente | 2 |

Las tres del cuarto renglón son `chande` (C9), `manoalzada` (C9) y `esquiva` (C7): la Fase 5B no migró su `revision` porque el corpus las declara `procedencia_verificada: false` y el validador prohíbe esa combinación. Su recorrido está confirmado y su distintivo dice «preliminar», con una glosa que afirma «todavía no tiene decisión definitiva». Sobre el recorrido, sí la tiene.

Las dos del quinto renglón son `gudynas` y `mintz`, con `revision.estado = pendiente_revision_con_texto`: la curaduría las llama «preliminar» y el recorrido las llama «pendiente». Aquí la divergencia es de vocabulario, no de fondo.

**Recomendación, para que la Dirección Académica decida y una fase posterior ejecute.** Tres caminos, en orden de menor a mayor intervención: renombrar las etiquetas públicas de `estado20()` para que no compartan palabra con `estado_recorrido`; reescribir la glosa de «confirmada» para que califique la revisión y no la obra; o fusionar los dos indicadores en uno solo que explique ambas dimensiones. **Ninguno se ejecuta en esta fase.**

---

## 14. Casos sentinela

Comprobados visual y funcionalmente, con assertions sobre el DOM real.

| caso | tabla | ficha |
|---|---|---|
| `stoutafterlove` | `C10 + C4` | principal C10 · también dialoga con C4 |
| `rifkinfictions` | `C1 ↔ C3` | frontera constitutiva, sin principal |
| `pricefirst` | `C3 ↔ C9` | frontera constitutiva, sin principal |
| `whiteheadtiger` | `C1 ↔ C7` | frontera constitutiva, sin principal |
| `schwartz_seaofstorms` | `C6 ↔ C7` | frontera constitutiva + también dialoga con C2 y C4 |
| `perezmorales` | `C3 · C5 · C7` | síntesis multicorriente, sin principal ni secundarias |
| `pinedashipwrecked` | `C1 · C4 · C7` | síntesis multicorriente, sin principal ni secundarias |
| `jaffeconcrete` | `C6` | principal C6, arquitectura ordinaria |
| `gudynas` | `Pendiente` | clasificación de recorrido: pendiente |
| `mintz` | `Pendiente` | clasificación de recorrido: pendiente |
| `mintzarea` | `C2 + C4` | registro distinto de `mintz` |
| `steward` | `C4` | permanece en el corpus |
| `stewardpuertorico` | — | **fuera del corpus**, confirmado expresamente |

---

## 15. Conteos

| magnitud | exigido | medido en la interfaz |
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

Medidos sobre `window.ATLAS` en el navegador, no sobre el archivo: es lo que la interfaz realmente carga.

---

## 16. Pruebas frontend

Ejecutadas con Chromium sobre los archivos escritos, en 1440, 1280, 430, 390, 375 y 320 px, con `prefers-reduced-motion`, cruzando el umbral de entrada.

| ancho | control | opciones | panel | nodos ocultos | foco C4 | encuadre | pend/sin | teclado | ficha + Escape | vistas | zoom | pan | reencuadre | errores JS |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1440 | ok | 13 | ok | **0** | 16/19/197 | estable | 83/69 | ok | ok | 232/232/232/232 | ok | ok | ok | **0** |
| 1280 | ok | 13 | ok | **0** | 16/19/197 | estable | 83/69 | ok | ok | 232/232/232/232 | ok | ok | ok | **0** |
| 430 | ok | 13 | ok | **0** | 16/19/197 | estable | 83/69 | ok | ok | 232/232/232/232 | ok | ok | ok | **0** |
| 390 | ok | 13 | ok | **0** | 16/19/197 | estable | 83/69 | ok | ok | 232/232/232/232 | ok | ok | ok | **0** |
| 375 | ok | 13 | ok | **0** | 16/19/197 | estable | 83/69 | ok | ok | 232/232/232/232 | ok | ok | ok | **0** |
| 320 | ok | 13 | ok | **0** | 16/19/197 | estable | 83/69 | ok | ok | 232/232/232/232 | ok | ok | ok | **0** |

«foco C4» son los nodos con opacidad plena / a media atenuación / atenuados al elegir C4: 16 estructurantes, 19 secundarias y 197 fuera de foco, y **ninguno oculto**.

---

## 17. Pruebas móvil

**No hay diez botones permanentes.** El recuento de controles de recorrido en la barra es **0**: las trece opciones viven en el panel, que en móvil es la hoja inferior que ya usaban Filtros e Información. El panel no desborda el viewport en ninguno de los cuatro anchos móviles, y su lista tiene desplazamiento propio limitado a `min(52vh, 420px)`.

**Comparación geométrica antes/después**, mismo instrumento, mismos anchos:

| ancho | alto del encabezado | alto del mapa | nodos en pantalla | `body.scrollLeft` | `viewBox` inicial |
|---|---|---|---|---|---|
| 1440 | 250 → **250** | 650 → **650** | 232/232 | 0 | idéntico |
| 1280 | 250 → **250** | 550 → **550** | 232/232 | 0 | idéntico |
| 430 | 239 → **239** | 694 → **694** | 206/232 | 0 | idéntico |
| 390 | 239 → **239** | 606 → **606** | 211/232 | 0 | idéntico |
| 375 | 239 → **239** | 574 → **574** | 211/232 | 0 | idéntico |
| 320 | 239 → **239** | 452 → **452** | 214/232 | 0 | idéntico |

El encabezado no creció en ningún ancho, el mapa no perdió un solo píxel y el reencuadre móvil de la Fase 4A entrega los mismos seis `viewBox` que antes.

**Lo que sí cambió, y conviene decirlo.** La barra de controles ya se desplazaba horizontalmente en móvil desde antes —era una limitación conocida de la Fase 4B, con `scrollbar-width: none` quitando la señal de que hay más a la derecha—. Añadir un botón la alarga:

| ancho | ancho desplazable antes | después | ancho visible |
|---|---|---|---|
| 430 | 981 px | **1090 px** | 406 px |
| 390 | 981 px | **1090 px** | 366 px |
| 375 | 981 px | **1090 px** | 351 px |
| 320 | 981 px | **1090 px** | 296 px |

Son 109 px más, un 11 %. En escritorio no hay desbordamiento: 1197 px de contenido en 1197 px visibles a 1280 y a 1440.

---

## 18. Accesibilidad

**Sin distinción por color.** Ningún recorrido tiene color propio. La identificación es siempre por código, texto, arquitectura y estado.

**Teclado.** Las trece opciones son botones nativos, alcanzables con Tab y operables con Enter y Espacio: comprobado que enfocar C1 y pulsar Enter deja `state.recorrido = 'c1'` en los seis anchos.

**Escape.** Cierra el panel de Recorridos como cierra los demás, por la misma escalera centralizada que fijó la Fase 4A. La ficha sigue abriendo y cerrando con Escape en los seis anchos.

**Nombres accesibles.** Cada opción lleva `aria-label` con la denominación completa y el desglose del recuento, y `aria-pressed` que refleja la selección. El botón de la barra declara `aria-expanded` y `aria-controls`, igual que Filtros e Información.

---

## 19. Validadores

```
node scripts/validar-atlas.mjs                       →  0 errores · 4 advertencias
python3 data/agua-de-por-medio/sincronizar.py --check →  En sincronía · v1.16.1 · 232 obras · 588 relaciones
```

Las cuatro advertencias son las mismas de siempre y ninguna procede de esta fase. Ningún validador se modificó.

---

## 20. Incidencias

**1 · Discrepancia de denominación en C1. Registrada, no resuelta.**

| | |
|---|---|
| denominación vigente en catálogo | **Invasiones, despojos y mundos indígenas** |
| denominación aprobada en dictamen | **Mundos indígenas, invasiones y persistencias** |
| estado | pendiente de incorporación al catálogo |
| acción en 5C | **ninguna** |

El dictamen de C1 aprueba la segunda y a la vez declara que «no debe incorporarse todavía al catálogo». La interfaz muestra la primera, que es la que la fuente canónica vigente declara, por decisión expresa de la Dirección Académica consultada durante esta fase: implementar la segunda equivaldría a resolver por vía de frontend una incorporación al catálogo que sigue pendiente. Queda elevada.

**2 · `estado20()` y `estado_recorrido` comparten vocabulario y ya divergen en cinco obras.** Diagnosticada en el apartado 13, no corregida, conforme al §11.

**3 · La barra de controles se alarga 109 px en móvil.** Medida en el apartado 17. No es un desbordamiento nuevo —la barra ya se desplazaba— pero agrava una limitación conocida. No se corrigió porque hacerlo exigiría rediseñar la barra, y el §1 lo prohíbe.

---

## 21. Hashes antes y después

**Modificados:**

```
proyectos/con-el-agua-de-por-medio.html
  antes    7a2051fc7fb70710c87e0c6612f213b407fc4ff2f94ecb480c351fb2dfeb2425   164 927 bytes
  después  e56f5ca07643380fb8a027ee5975d969865ffb424bc140e832d254f933e2aa4b   179 039 bytes

css/con-el-agua-de-por-medio.css
  antes    5dd3948530c0f124c6dd083bfc9aef0e7f3910337f507bb2cabdd30c2ac14a55    47 476 bytes
  después  904dcf247a95ce4d177b746ca9b0e2c0ce7b636e9c8fd2e140922e8204f34930    50 206 bytes
```

**Sin cambio, verificado antes y después:**

| archivo | hash |
|---|---|
| `data/agua-de-por-medio/datos-atlas.json` | `5a4e6a0dc9c404902d2b1e7008653134f5ff44a39c68338a25f7737350f4ba80` |
| `data/agua-de-por-medio/datos-atlas.js` | `19ebf3886a621f7dfacadbbac9f8290be31886d117e8598c45fee7d38f3af8b9` |
| `atlas-2/catalogos-atlas-2.json` | `f12ca9ac…d97207b` |
| `atlas-2/documentos/esquema-datos-propuesto.json` | `c9900dad…15cfc4` |
| `atlas-2/documentos/expediente-evidencia-c7.md` | `3ed12393…1fa121f` |
| `atlas-2/documentos/ficha-decision-c4.md` | `2eb89027…c232c8c` |
| `atlas-2/documentos/auditoria-academica-fase-5a.md` | `c154dca6…c4631` |
| `atlas-2/documentos/matriz-clasificacion-fase-5a.csv` | `de369834…d74d7e` |
| `atlas-2/documentos/decision-normativa-contrato-recorridos-fase-5a-d.md` | `ee7d3329…d0f331` |
| `atlas-2/documentos/informe-fase-5b-sincronizacion-recorridos.md` | `f44a26f9…3e26b` |
| los cuatro lotes generados | sin cambio |
| `js/zoom-caribe.js` · `css/zoom-caribe.css` | sin cambio |
| `scripts/validar-atlas.mjs` · `sincronizar.py` | sin cambio |

Los campos `recorrido`, `recorridos_sec`, `arquitectura_recorrido`, `estado_recorrido`, `revision` y `fuente_recorrido` no fueron alterados semánticamente por esta fase: la interfaz solo los lee. Los 232 identificadores y las 588 relaciones son los mismos.

---

## 22. No se avanzó P3

Confirmación expresa. No se abrió ninguna obra, no se clasificó nada nuevo, no se completó ninguna pendiente, no se recalibró P3 y no se emitió ningún dictamen. Las 83 pendientes y las 69 sin evaluar siguen exactamente donde estaban.

---

## 23. No se implementó territorio

Confirmación expresa. No hay filtro territorial, ni mapa geográfico nuevo, ni uso de `orillas`, ni corrección de `l`. Tampoco se implementaron filtros por marcas, rutas, operaciones, proceso, temporalidades ni nuevos filtros lingüísticos.

---

## 24. No se hizo Git

Confirmación expresa. No se ejecutó `git add`, `git commit`, `git push`, merge, cherry-pick, checkout ni cambio de rama, ni ninguna operación Git de solo lectura. La verificación se hizo por hashes, validadores, comparación de archivos y pruebas de interfaz, como pide el §23. No se tocó `.git/`.

---

## Estado final

```
CARRIL_A_FASE_5C_INTERFAZ_RECORRIDOS_IMPLEMENTADA_Y_VERIFICADA — PENDIENTE_DE_VISTO_BUENO_DE_DIRECCION_ACADEMICA
```

No se avanza a 5D, ni a P3, ni a territorio, ni a ninguna otra fase.
