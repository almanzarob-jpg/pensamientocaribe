# Decisión normativa · cardinalidad de dimensiones parciales bajo `sin_principal_clasificable` · Atlas 2.0 · P3-E · Etapa 2.3M

**Instancia que decide:** Dirección Académica de Pensamiento Caribe. **Origen:** laguna normativa detectada en `auditoria-sangbenvolviendo-dimensiones-parciales-p3-etapa-2-3m.md`, que confirmó tres dimensiones sustantivas parciales indispensables en `sangbenvolviendo` —una más de las que el contrato vigente admite. **Naturaleza:** extensión puntual y acotada de `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md`, que a su vez extendió `decision-normativa-sin-principal-clasificable-atlas-2.md`. No reabre la lectura de `sangbenvolviendo`, ya cerrada en la auditoría citada. No reabre el precedente Dubuisson.

---

## 1. Problema normativo

El contrato vigente —`decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md`, §9— autoriza `recorridos_sec` de cero a dos elementos bajo `arquitectura_recorrido.tipo === "sin_principal_clasificable"`, condicionado a que cada elemento cumpla seis condiciones: sustantividad segmentaria, retirada segmentaria destructiva o fuertemente degradante, retirada global no destructiva, fundamento textual individual, descarte de principal y descarte de frontera o síntesis.

Ese límite de dos resolvió el caso que lo motivó —`dubuissonhaiti`, con C5 y C9— pero no fue derivado de ninguna razón académica que exija tope en dos: fue, simplemente, el número de dimensiones que ese caso presentaba. La auditoría de `sangbenvolviendo` presenta ahora un caso con tres dimensiones —C2, C7, C5—, cada una sometida individualmente a las seis condiciones del §9 y aprobada sin excepción, y con las tres combinaciones posibles de reducción a dos probadas y descartadas por pérdida estructural real (auditoría, §10). La pregunta pendiente es exclusivamente si `sin_principal_clasificable` debe admitir, en este tipo de caso, una tercera dimensión, sin que ese ajuste se filtre a ninguna otra arquitectura del contrato.

## 2. Precedente Dubuisson

`dubuissonhaiti` está implementado en `datos-atlas.js` con `recorrido: null`, `recorridos_sec: ["c5", "c9"]`, `arquitectura_recorrido: {tipo: "sin_principal_clasificable", recorridos: []}`, `estado_recorrido: "confirmado"`, desde el commit `506395a`. El validador ya no exige `recorridosSec.length === 0` bajo esta arquitectura: exige, desde ese mismo commit, un arreglo de cero a dos elementos. La auditoría de `sangbenvolviendo` (§1) reconcilió este estado directamente contra el repositorio y lo confirmó vigente. Esta decisión no toca `dubuissonhaiti`, no toca el rango 0–2 para el caso de dos dimensiones, y no reabre ninguna de las condiciones que ya rigen esa figura.

Lo que el precedente Dubuisson estableció y esta decisión conserva intacto: que una obra sin corriente principal puede, no obstante, retener dimensiones sustantivas parciales en `recorridos_sec`, ancladas no a un principal sino a la arquitectura declarada de la obra —la comprobación cerrada de que ninguna corriente organiza el conjunto, más la evidencia individual de cada dimensión. Lo que Dubuisson no estableció, porque su propio caso no lo exigía, es cuántas dimensiones puede admitir esa figura como máximo.

## 3. Evidencia Sang Ben

La auditoría de `sangbenvolviendo` (`auditoria-sangbenvolviendo-dimensiones-parciales-p3-etapa-2-3m.md`) documenta tres dimensiones, cada una correspondiente a un capítulo completo y autosuficiente del libro:

- **C2** (capítulo I, "¿Por qué las plantaciones?", pp. 27-74): la plantación azucarera como estructura económica y social que organiza el capítulo entero, en una revisión historiográfica de diez autores. Retirada segmentaria destructiva: el capítulo pierde su objeto declarado en el propio título.
- **C7** (capítulo II, "¿Integración caribeña? Un mito, un sueño", pp. 75-232): los proyectos de integración política regional entre Estados caribeños —Confederación Antillana, CARICOM, Federación de las Antillas Holandesas—, capítulo más extenso del libro. Retirada segmentaria destructiva: no queda nada que reseñar sin ese objeto.
- **C5** (capítulo III, "Viajando por el Caribe", pp. 233-342): el recorrido de la autora por el archipiélago, en primera persona, como método y objeto del capítulo. Retirada segmentaria destructiva: el capítulo es, literalmente, el viaje que describe.

Las tres pasan, de forma individual y verificada en la auditoría, las seis condiciones del §9 de `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md`. C4, examinada expresamente dentro del capítulo I, no califica como cuarta dimensión: el pasaje postabolición que la sustenta es una prolongación cronológica de la síntesis de un único autor citado (García Muñíz) dentro del argumento de C2, sin desarrollo propio en el resto del capítulo, y su retirada no afecta la tesis que sostiene el capítulo. Falla sustantividad segmentaria propia y retirada segmentaria destructiva; queda subordinada a C2, no es una dimensión que compita por lugar en `recorridos_sec`.

La auditoría probó, además, las tres combinaciones posibles de reducción a dos dimensiones (§10): en cada una, la dimensión excluida es un capítulo completo —de 110 a 157 páginas, con objeto y evidencia propios— y su pérdida no es recuperable mediante fenómenos, territorio, descripción, etiquetas, notas ni reserva conceptual. Probó también, por separado, que ningún par de las tres corrientes mantiene dependencia recíproca dentro de un mismo mecanismo (§11, descarta frontera constitutiva para los tres pares) y que no existe un principio organizador global que las convoque conjuntamente (§12, descarta síntesis multicorriente): la propia introducción del libro declara que se trata de una compilación de "vertientes" autónomas, no de un argumento unificado.

## 4. Diferencia entre Dubuisson y Sang Ben

No es una diferencia de tipo, sino de cardinalidad dentro del mismo tipo. Ambos casos comparten la misma estructura académica: ninguna corriente organiza el conjunto de la obra; existen dimensiones sustantivas parciales, cada una anclada a un segmento identificable; esas dimensiones no son mutuamente constitutivas; no hay síntesis multicorriente. Dubuisson presentó esa estructura con dos dimensiones (C5, capítulos 1-2; C9, capítulos 4-5). Sang Ben la presenta con tres (C2, C7, C5), cada una correspondiente a un capítulo completo del libro, no a una sección dentro de un capítulo compartido.

La diferencia relevante no es conceptual —el mismo principio que autorizó a Dubuisson autoriza en principio a Sang Ben— sino de cardinalidad: el contrato vigente fijó el rango 0–2 porque fue el rango que el caso que lo motivó requería, no porque tres dimensiones fueran conceptualmente imposibles bajo esta figura. La auditoría de Sang Ben demuestra, con evidencia propia y sin apoyarse en Dubuisson más que como forma, que ese rango es insuficiente para representar un caso real del corpus.

## 5. Diferencia frente a síntesis multicorriente

La distinción debe quedar explícita porque ambas figuras podrían confundirse por compartir el número tres. No lo son.

`SINTESIS_MULTICORRIENTE` exige tres o más corrientes necesarias conjuntamente para producir un mismo argumento global: las corrientes cooperan dentro de un único mecanismo explicativo, y ninguna de ellas es prescindible sin que el argumento completo se derrumbe. La condición decisiva es la convergencia: las tres corrientes explican la misma cosa, desde ángulos distintos pero irreductiblemente entrelazados.

La figura que aquí se extiende es la inversa en ese punto exacto: sin principal global, con múltiples dimensiones segmentarias indispensables, y sin dependencia constitutiva entre ellas. C2, C7 y C5 no cooperan en un mismo argumento: cada una explica un objeto empírico distinto, en un capítulo distinto, sin que las otras dos sean necesarias para sostener esa explicación. Son necesarias por separado, para conservar segmentos separados de una obra cuyo conjunto no tiene una corriente C1–C10 capaz de jerarquizarlas. La auditoría probó esta ausencia de convergencia de forma directa (§12): no existe un principio organizador global que las tres corrientes sostengan en conjunto, y la propia introducción del libro lo declara al presentarse como compilación de vertientes autónomas.

## 6. Alternativas posibles

**Opción 1 — Elevar a tres el máximo general de `recorridos_sec`, para toda arquitectura.** Resuelve Sang Ben pero desborda el problema real: no hay evidencia de que `frontera_constitutiva` o el caso ordinario necesiten una tercera secundaria, y elevar el límite general sin esa evidencia abre la puerta a acumulación de etiquetas en casos donde el límite de dos nunca fue un problema.

**Opción 2 — Extender exclusivamente `sin_principal_clasificable` a un rango 0–3, con condiciones adicionales específicas para el tercer elemento.** Resuelve Sang Ben sin tocar ninguna otra arquitectura. Requiere justificar por qué esta figura, y solo esta, tolera una dimensión más: la justificación es que, a diferencia de `frontera_constitutiva` (dos recorridos en relación bilateral, por definición) y del caso ordinario (una jerarquía principal-secundaria), `sin_principal_clasificable` no ancla sus dimensiones a una relación de cardinalidad fija, sino a la comprobación abierta de que ninguna corriente organiza el conjunto —una comprobación que no impone por sí misma ningún número de dimensiones parciales.

**Opción 3 — Crear una arquitectura técnica nueva para el caso de tres o más dimensiones.** Repite el defecto ya señalado en `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md` §7 para una alternativa análoga: duplicaría casi íntegramente las condiciones ya existentes de `sin_principal_clasificable`, diferenciándose solo en un número.

**Opción 4 — Cardinalidad abierta (0..N) bajo `sin_principal_clasificable`.** Resuelve Sang Ben y cualquier caso futuro sin necesidad de nueva evaluación normativa, pero elimina el único mecanismo de control que impide que esta figura se convierta en depósito indiscriminado de corrientes. Un solo caso con tres dimensiones no es evidencia suficiente para eliminar el límite por completo.

## 7. Solución seleccionada

**Opción 2**, con el límite fijado en tres, no abierto (desarrollado en el §10). Se extiende `sin_principal_clasificable`, exclusivamente, para admitir `recorridos_sec` de cero a tres elementos, condicionado el tercer elemento a tres condiciones adicionales a las seis ya vigentes (§9). Todas las demás arquitecturas —`frontera_constitutiva`, `sintesis_multicorriente`, el caso ordinario y la ausencia de arquitectura— conservan el máximo general de dos, sin excepción. No se crea una arquitectura nueva. No se crea un campo nuevo. `arquitectura_recorrido.recorridos` continúa vacío bajo `sin_principal_clasificable`, porque la ausencia de principal —no la presencia de tres dimensiones— sigue siendo lo que ese arreglo vacío representa.

## 8. Regla 0..3

Se sustituye, exclusivamente dentro de la definición de `sin_principal_clasificable`, el rango "cero a dos elementos" fijado en `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md` §9, por el siguiente:

> Cuando `arquitectura_recorrido.tipo` es `sin_principal_clasificable`, `recorridos_sec` admite entre cero y tres elementos. Los dos primeros elementos, cuando existen, se rigen íntegramente por las seis condiciones ya vigentes (§9 del documento citado). El tercer elemento, cuando existe, exige además las tres condiciones adicionales del §9 de esta decisión. Para toda otra arquitectura, o para la ausencia de arquitectura, el máximo general de `recorridos_sec` permanece en dos, sin cambio.

La cardinalidad tres no es una licencia general de esta figura: es una excepción condicionada, disponible únicamente cuando la tercera dimensión supera además el umbral más exigente que fija el §9.

## 9. Condiciones adicionales para cardinalidad 3

Declarar un tercer elemento en `recorridos_sec` bajo `sin_principal_clasificable` exige, además de las seis condiciones ya vigentes para cada uno de los tres elementos, que el conjunto de las tres dimensiones satisfaga:

**Condición 7 — autonomía macrosegmentaria.** Cada corriente debe corresponder a un macrosegmento identificable de la arquitectura de la obra —una parte, una sección mayor o una unidad argumentativa equivalente—, no a un capítulo temático aislado ni a un pasaje dentro de un segmento ya cubierto por otra dimensión. En `sangbenvolviendo`, cada una de las tres corrientes corresponde a un capítulo completo del libro (I, II y III respectivamente), con extensión comparable entre sí (48, 157 y 110 páginas) y sin superposición: satisface la condición.

**Condición 8 — irreductibilidad informativa.** Debe demostrarse que reducir las tres dimensiones a dos elimina una unidad argumentativa completa que no puede conservarse adecuadamente mediante fenómenos, territorio, descripción, etiquetas, notas o reserva conceptual. La auditoría de `sangbenvolviendo` probó esto para las tres combinaciones posibles de reducción (§10 de la auditoría): cada una descarta un capítulo entero, con objeto y evidencia propios, que ningún otro campo del dato puede sustituir sin pérdida.

**Condición 9 — ausencia de integración superior.** Debe demostrarse que las tres dimensiones no convergen en un mismo principio C1–C10 que justificaría `SINTESIS_MULTICORRIENTE` en lugar de esta figura. La auditoría probó esto de forma directa (§12): no hay un argumento unificado que las tres corrientes sostengan en conjunto, y la introducción del libro declara expresamente la ausencia de una tesis única.

Estas tres condiciones son acumulativas entre sí y con las seis ya vigentes: un caso con tres dimensiones que falle cualquiera de las nueve no puede representarse mediante `recorridos_sec.length === 3` bajo esta figura, y debe resolverse por otra vía —reducción a dos, frontera constitutiva, síntesis multicorriente, o una nueva consulta a Dirección Académica si ninguna de las anteriores aplica.

## 10. Límite conservador

El máximo se fija en tres, exclusivamente para `sin_principal_clasificable`, y no se autoriza cardinalidad abierta. La razón es la misma que ya sostuvo el límite de dos en la decisión anterior: el rango se fija por la evidencia disponible, no por proyección. Un solo caso del corpus —`sangbenvolviendo`— exige tres dimensiones; ningún caso hasta ahora ha exigido cuatro. Elevar el límite a un número mayor sin un caso real que lo demuestre repetiría, en sentido inverso, el mismo error que cometería negar la extensión a tres sin atender la evidencia de Sang Ben.

Si en el futuro aparece una obra que exige cuatro dimensiones parciales verdaderamente irreductibles —sometidas a las nueve condiciones aquí fijadas y con reducción a tres probada y descartada—, deberá producirse una nueva evaluación normativa, con su propia auditoría de dimensiones y su propia decisión. La aparición de Sang Ben no demuestra que el límite deba desaparecer; demuestra únicamente que dos era insuficiente para este caso.

## 11. Cambios del validador

En `scripts/validar-atlas.mjs`, función `validateRecorridoArchitecture`, se modifica la validación genérica de `recorridos_sec` para que el máximo dependa de la arquitectura declarada:

```js
const maxRecorridosSec = isObject(arquitectura) && arquitectura.tipo === "sin_principal_clasificable" ? 3 : 2;
if (!Array.isArray(recorridosSec) || recorridosSec.length > maxRecorridosSec) {
  report.error("RECORRIDOS_SEC", `${work.id}: recorridos_sec debe ser una lista de máximo ${maxRecorridosSec}.`);
} else {
  const vistos = new Set();
  for (const sec of recorridosSec) {
    if (!RECORRIDO_ID.test(sec)) report.error("RECORRIDOS_SEC", `${work.id}: recorrido secundario inválido ${sec}.`);
    if (sec === recorrido) report.error("RECORRIDOS_SEC", `${work.id}: el recorrido principal se repite como secundario.`);
    if (vistos.has(sec)) report.error("RECORRIDOS_SEC", `${work.id}: recorrido secundario repetido ${sec}.`);
    vistos.add(sec);
  }
}
```

Dos cambios sobre la validación anterior. Primero, el máximo deja de ser una constante fija (dos) para depender de `arquitectura.tipo`: tres únicamente bajo `sin_principal_clasificable`, dos en cualquier otro caso, incluida la ausencia de arquitectura. Segundo, se añade un chequeo de duplicados —ausente hasta ahora— porque la lista de validaciones que esta decisión debe preservar sin debilitar incluye explícitamente "sin duplicados", condición que el validador no comprobaba. Se verificó antes de introducirla que ningún `recorridos_sec` del corpus real contiene hoy elementos repetidos, de modo que la adición no genera error nuevo sobre ningún dato existente.

Ninguna otra rama de la función cambia. El bloque `if (arquitectura.tipo === "sin_principal_clasificable")` conserva sin modificación sus cinco condiciones: `arquitectura.recorridos.length === 0`, `recorrido === null`, `estado === "confirmado"`, `fuente` no vacío, y la condición de `RECORRIDO_ID` sobre `recorrido` cuando no es nulo. Las ramas `frontera_constitutiva`, `sintesis_multicorriente` y `RECORRIDO_NULL_SIN_ARQUITECTURA` no se tocan. Se añadió únicamente un comentario explicativo, sin efecto en la lógica, que cita esta decisión junto a las dos anteriores.

## 12. Compatibilidad retrospectiva

Verificado directamente sobre `datos-atlas.json`, antes de tocar ningún dato:

- `rebeldestiny`: `recorridos_sec: []`. Cero está dentro de cualquiera de los dos rangos posibles (0–2 o 0–3); no cambia.
- `dubuissonhaiti`: `recorridos_sec: ["c5", "c9"]`. Dos está dentro de ambos rangos; no cambia.
- `truebornmaroons` y `zips_nannysasafo`: ambos `arquitectura_recorrido.tipo === "frontera_constitutiva"`, con `arquitectura_recorrido.recorridos: ["c3", "c9"]`. El bloque modificado por esta decisión solo eleva el máximo cuando `arquitectura.tipo === "sin_principal_clasificable"`; para `frontera_constitutiva` el máximo general permanece en dos, exactamente el que ya regía. Ninguno de los dos casos queda reinterpretado como `sin_principal_clasificable`: esta decisión no toca la clasificación de ningún caso ya resuelto, solo la cardinalidad admisible dentro de una figura específica.

Se ejecutaron los cuatro validadores (`validar-atlas.mjs` en modo base y `--estricto-2`, `validar-fenomenos.mjs`, `validar-temporalidad.mjs`, `validar-piloto-atlas-2.mjs`) contra el corpus real, sin ningún dato modificado, antes y después de aplicar el cambio del §11, comparando el conteo de errores y advertencias: idéntico en ambos casos (0 errores, 4 advertencias en modo base; 2224 errores —todos `V2_CAMPO`, deuda editorial preexistente y ajena a este cambio— y 4 advertencias en `--estricto-2`). Ningún error `RECORRIDOS_SEC`, `SIN_PRINCIPAL_CLASIFICABLE`, `FRONTERA_CONSTITUTIVA` ni `RECORRIDO_NULL_SIN_ARQUITECTURA` aparece en ninguno de los dos modos sobre el corpus real. El cambio del validador, por sí solo, no introduce ningún error nuevo.

## 13. Casos positivos

Matriz de prueba ejecutada sobre un corpus sintético (copia del corpus real con entradas de prueba añadidas, ids reales de fenómeno y lugar para evitar ruido ajeno a `recorridos_sec`), antes de tocar cualquier dato real.

**`sin_principal_clasificable` + 3 secundarios válidos.** `recorrido: null`, `recorridos_sec: ["c2", "c7", "c5"]`, `arquitectura_recorrido: {tipo: "sin_principal_clasificable", recorridos: []}`, `estado_recorrido: "confirmado"`. Pasa sin error: `recorridos_sec.length === 3`, dentro del rango 0–3 nuevo para esta arquitectura.

**`sin_principal_clasificable` + 2 secundarios.** Sigue pasando: dos está dentro de ambos rangos, el anterior y el nuevo.

**`sin_principal_clasificable` + 0 secundarios.** Sigue pasando: cero está dentro de cualquier rango que incluya el cero, exactamente el caso de `rebeldestiny`.

## 14. Casos negativos

**`sin_principal_clasificable` + 4 secundarios.** Falla con `RECORRIDOS_SEC: recorridos_sec debe ser una lista de máximo 3`: el límite conservador del §10 se aplica sin excepción.

**Arquitectura ordinaria (`recorrido` asignado, sin arquitectura especial) + 3 secundarios.** Falla con `RECORRIDOS_SEC: recorridos_sec debe ser una lista de máximo 2`: el máximo general no cambia fuera de `sin_principal_clasificable`.

**`frontera_constitutiva` + 3 secundarios.** Falla con el mismo error y el mismo máximo de dos: el contrato general vigente para `frontera_constitutiva` no autoriza más de dos secundarios adicionales, y esta decisión no lo modifica.

**`sin_principal_clasificable` con `recorrido != null`.** Sigue fallando con `SIN_PRINCIPAL_CLASIFICABLE: sin_principal_clasificable exige recorrido: null`, condición no tocada por esta decisión.

**`sin_principal_clasificable` con `estado_recorrido: "pendiente"`.** Sigue fallando con `SIN_PRINCIPAL_CLASIFICABLE: sin_principal_clasificable exige estado_recorrido "confirmado"`, condición no tocada.

**`sin_principal_clasificable` con `arquitectura_recorrido.recorridos` no vacío.** Sigue fallando con `SIN_PRINCIPAL_CLASIFICABLE: sin_principal_clasificable no admite recorridos estructurantes`, condición no tocada.

**`recorrido: null` + `estado_recorrido: "confirmado"` + `arquitectura_recorrido: null`.** Sigue fallando con `RECORRIDO_NULL_SIN_ARQUITECTURA`, regla no tocada por esta decisión.

**Caso adicional no exigido explícitamente pero cubierto por el chequeo de duplicados nuevo del §11:** `recorridos_sec` con un elemento repetido falla con `RECORRIDOS_SEC: recorrido secundario repetido`.

Los nueve resultados exigidos por Dirección Académica se confirmaron exactamente en el sentido especificado, junto con el caso adicional de duplicados introducido por esta misma decisión.

## 15. Riesgos

**Uso de la cardinalidad tres como atajo para no depurar dimensiones dudosas.** Mitigado por las condiciones 7 a 9 (§9): no basta con que existan tres corrientes mencionadas en la obra, hace falta demostrar autonomía macrosegmentaria, irreductibilidad informativa y ausencia de integración superior para cada caso, con el mismo rigor documental que ya exigían las seis condiciones originales.

**Erosión del límite general de dos por analogía silenciosa.** Mitigado estructuralmente: el cambio del validador (§11) hace depender el máximo del valor exacto de `arquitectura.tipo`, no de ningún indicador que otra arquitectura pueda imitar. `frontera_constitutiva` y el caso ordinario no pueden alcanzar tres secundarios sin que esta misma decisión se reescriba primero.

**Proliferación futura de casos de cardinalidad tres sin evidencia comparable a la de Sang Ben.** Mitigado por el §10: el límite se mantiene en tres, no se abre, y cualquier caso que reclame una cuarta dimensión exige una nueva decisión normativa, con su propia auditoría de reducción y su propia prueba de las nueve condiciones.

**Confusión entre esta figura y síntesis multicorriente por compartir el número tres.** Mitigado explícitamente por el §5 y por la condición 9: la ausencia de integración superior es una condición de admisión, no una observación posterior, y obliga a probar en cada caso que no se está usando esta figura para evitar declarar síntesis multicorriente cuando correspondería.

## 16. Dictamen normativo

Se aprueba la **Opción 2**: extensión puntual de `sin_principal_clasificable` para admitir `recorridos_sec` de cero a tres elementos, exclusivamente bajo esa arquitectura, condicionado el tercer elemento a las tres condiciones adicionales del §9 —autonomía macrosegmentaria, irreductibilidad informativa, ausencia de integración superior— sobre la base ya vigente de las seis condiciones de `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md`. El límite general de `recorridos_sec` para toda otra arquitectura permanece en dos, sin excepción. No se crea una arquitectura nueva. No se crea un campo nuevo. El límite de tres es conservador y no abierto: una obra futura que exija una cuarta dimensión requiere una nueva decisión normativa propia.

`dubuissonhaiti`, `rebeldestiny`, `truebornmaroons` y `zips_nannysasafo` quedan verificados sin cambio (§12). El cambio del validador (§11) se ejecutó y se probó contra el corpus real antes de tocar cualquier dato: cero errores nuevos, en modo base y en `--estricto-2` (§12). La matriz completa de nueve casos exigidos, más el caso de duplicados, se verificó sobre un corpus sintético antes de aplicar esta norma a `sangbenvolviendo` (§13, §14).

Autorizada la implementación de `sangbenvolviendo` conforme a esta decisión y a la auditoría que la origina, con `recorridos_sec: ["c2", "c7", "c5"]`.

```
DECISION_NORMATIVA_RATIFICADA
PRECEDENTE_DUBUISSON_PRESERVADO
CARDINALIDAD_0_3_RATIFICADA_PARA_SIN_PRINCIPAL
LIMITE_GENERAL_0_2_PRESERVADO_PARA_OTRAS_ARQUITECTURAS
NO_CREA_CUARTO_TIPO_DE_ARQUITECTURA_RECORRIDO
NO_CREA_CAMPO_NUEVO
VALIDADOR_ACTUALIZADO_Y_PROBADO
VALIDACION_0_ERRORES_NUEVOS_SOBRE_CORPUS_REAL
MATRIZ_DE_PRUEBAS_CONFIRMADA
SANGBENVOLVIENDO_AUTORIZADA_PARA_IMPLEMENTACION
LIMITE_CONSERVADOR_NO_ABIERTO
```
