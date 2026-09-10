# Cierre del saneamiento post-P3

P3 quedó formalmente cerrado en `a934e7f` (`P3: cierre global y reconciliación`). Este documento cierra la fase breve de saneamiento sobre la deuda explícita que ese cierre dejó registrada, ejecutada en tres frentes independientes y versionada en commits separados.

## 1. Deuda detectada en el cierre global

`cierre-global-p3-etapa-2-3.md` dejó dos hallazgos abiertos (§14) y un inventario consolidado que no había existido antes en un solo documento: cuatro casos con `f` heredada declarada inexacta por su propia decisión académica pero sin valor de reemplazo especificado (§4, §7); el caso `cuijla`, académicamente resuelto en C4/C2 pero retenido en `estado_recorrido: "pendiente"` por un elemento de implementación sin decidir; y doce casos bloqueados —nueve de la cola histórica más tres hallados durante la reconciliación (`cuijla` no cuenta aquí, es intermedio, no bloqueado)— dispersos en distintos documentos de apertura y cierre de sublote, sin tabla única.

## 2. Los cuatro casos de `f`

`caribjourneys`, `looklaichinese`, `olsencartagena` y `russwurm` comparten un mismo patrón: su lectura-decisión final declara en prosa que la `f` heredada es imprecisa, pero el bloque de "campos autorizados para implementación" de cada documento omite el campo `f`, de modo que ningún valor de reemplazo llegó nunca al corpus vivo.

| caso | f heredada | problema detectado | f propuesta | evidencia | certeza |
|---|---|---|---|---|---|
| `caribjourneys` | soberanias, memoria | ninguno de los dos términos corresponde al mecanismo confirmado (parentesco/relacionalidad reconfigurada por la migración, frontera C5/C10) | cuerpo_erotica | corriente C10 = cuerpos_parentescos_eroticas; la propia muestra F01 del catálogo de fenómenos (independiente de esta corrección) etiqueta el caso con `parentesco_y_organizacion_domestica` y `diaspora_y_hogar_disperso` | media — cubre la dimensión C10; el vocabulario no tiene término para la dimensión diaspórica C5 |
| `looklaichinese` | capitalismo_racial, creolizacion | no nombra el mecanismo específico: trabajo indenturado chino como reemplazo de la mano de obra esclavizada (1852-1884) | postplantacion | mecanismo textbook de posplantación; mismo término usado en el precedente directo `bahadurcoolie` (indenture índigo, C4 principal) | alta |
| `olsencartagena` | colonialidad, violencias, memoria | apunta hacia memoria sin precisión sobre el mecanismo archivístico (C9) ni sobre la trata explícita (C2); colonialidad es genérico | memoria, violencias | memoria por la lectura crítica del archivo jesuita de Sandoval (C9 principal); violencias por la trata que su propia glosa nombra explícitamente (C2 secundaria) | alta |
| `russwurm` | memoria, soberanias | memoria no corresponde a ningún mecanismo de la decisión final; soberanias solo cubre parte del caso | soberanias | cubre la gobernación de Cabo Palmas/Maryland-in-Liberia (C7 secundaria); el vocabulario no tiene término para la dimensión panafricanista del dilema diaspórico (C5 principal) | media — cobertura parcial pero fundada |

## 3. Resultado de cada corrección

Las cuatro correcciones se implementaron: ningún caso quedó en `F_PENDIENTE_DECISION`. En los dos casos de certeza media, el vocabulario legado de diez términos no tiene una entrada para la dimensión diaspórica en sí (patrón ya observado en `puriradical` y `castorspiritual` durante P3-H), pero el término elegido representa con precisión la dimensión que sí nombra sin duplicar mecánicamente el nombre de la corriente ni inventar vocabulario nuevo. Solo se modificó `f`; ningún otro campo de los cuatro nodos cambió. La corrección de `caribjourneys` exigió además sincronizar el `f_heredado` de su entrada en la muestra F01 del validador de fenómenos (`atlas-2/lotes/f01-muestra.json`), que compara ese valor contra el corpus vivo y había quedado desincronizada por el cambio. Commit: `066a1f6` (`Post-P3: sanea fenómenos heredados`).

## 4. Estado definitivo de `cuijla`

La decisión académica de `cuijla` (C4 principal, C2 secundaria, cerrada sin fisuras) dejó pendiente en su §16 un único elemento: el mecanismo técnico de registro de la reserva conceptual `VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO`, sin inventar campo nuevo. Esa reserva se clasifica como tipo **D — técnica/documental**: la clasificación ya estaba resuelta, solo faltaba formalizar el registro del hallazgo. La prueba mínima se supera: formalizar la reserva sin tocar C4/C2 deja la obra suficientemente representada dentro del contrato vigente. El mecanismo adoptado es el registro documental sin campo técnico nuevo, siguiendo el único precedente procedimental que la propia decisión de `cuijla` ya había citado (`wynterblackmetamorphosis`) — no `sangbenvolviendo`, cuya estructura normativa (`sin_principal_clasificable` con dimensiones parciales) no comparte nada con este caso. `estado_recorrido` pasa a `"confirmado"`; `recorrido`, `recorridos_sec` y `arquitectura_recorrido` quedan intactos; el hallazgo del vacío taxonómico se preserva íntegro como deuda epistemológica de la taxonomía C1–C10, sin resolverse ni convertirse en corriente nueva. Documento: `resolucion-reserva-cuijla-post-p3.md`. Commit: `447fbc6` (`Post-P3: resuelve estado de Cuijla`).

## 5. Los doce bloqueados

Inventario consolidado, sin búsqueda de fuente ni cambio de datos, preparado para una futura `CAMPAÑA_RECUPERACION_BIBLIOGRAFICA_POST_P3`:

| sublote | id | tipo de bloqueo | fuente faltante/problema | acción futura |
|---|---|---|---|---|
| P3-A | `escalante` | BLOQUEADO_POR_FUENTE_INSUFICIENTE | solo se localizó un anexo/reseña de 6 pp., no la monografía de 1954 | confirmar si el anexo basta para decidir corriente o si se requiere la obra completa |
| P3-B | `casimir` | BLOQUEADO_FUENTE | fuente no localizada en `Biliografia` | adquirir *The Haitians: A Decolonial History* (Casimir, 2020) |
| P3-B | `fouchard` | BLOQUEADO_FUENTE | fuente no localizada | adquirir *Les marrons de la liberté* (Fouchard, 1972) |
| P3-B | `mintz` | BLOQUEADO_FUENTE + académico | fuente parcial (*Dulzura y poder* sí, *Caribbean Transformations* no) y política editorial de entradas compuestas sin resolver | decisión de Dirección Académica sobre entradas compuestas (`decisiones-pendientes.md` §6) y adquisición del segundo componente |
| P3-B | `shellererotic` | BLOQUEADO_FUENTE | fuente no localizada; discrepancia con nota de memoria de otra ronda | adquirir o localizar *Citizenship from Below* (Sheller, 2012), o aclarar si ya existe con otro nombre de archivo |
| P3-B | `zonabananera` | BLOQUEADO_PROTOCOLO | fuente disponible (coautoría de Roberto Almanza); requiere protocolo autorizado para caso de autoría propia | autorización de Dirección Académica del protocolo de lectura |
| P3-D | `lebroncimarronaje` | BLOQUEADO_FUENTE | fuente no localizada; autor de circulación editorial reducida (Puerto Rico) | gestión de acceso bibliográfico; posible fuente en biblioteca física o carpeta no indexada |
| P3-D | `reysinningcristorey` | BLOQUEADO_FUENTE | fuente no localizada; autor de circulación editorial reducida (Santa Marta) | gestión de acceso bibliográfico |
| P3-D | `zapataarbol` | BLOQUEADO_FUENTE | fuente no localizada; autor de circulación editorial reducida (Cartagena) | gestión de acceso bibliográfico |
| P3-E | `araujo` | BLOQUEADO_FUENTE | fuente no localizada en `Biliografia` | adquisición o localización |
| P3-E | `ferdinand` | BLOQUEADO_TECNICO | archivo local bajo el autor corresponde a *S'aimer la Terre* (2024), no al título registrado *Une écologie décoloniale* (2019) | Dirección Académica confirma cuál título corresponde, o se adquiere el registrado |
| P3-F | `branddoor` | BLOQUEADO_FUENTE | fuente no localizada; campaña conjunta prevista con `araujo` | adquisición o localización |

Diez de los doce comparten el mismo tipo de bloqueo (fuente no localizada); tres de ellos (`lebroncimarronaje`, `reysinningcristorey`, `zapataarbol`) comparten además el mismo patrón de autoría hispanófona de circulación editorial reducida, ya señalado como tal en la apertura de P3-D.

## 6. Validación

Cada frente con cambio de datos se validó por separado antes de su commit: sincronización JS/JSON, `validar-atlas.mjs`, `validar-fenomenos.mjs`, `validar-temporalidad.mjs` y `validar-piloto-atlas-2.mjs`. Resultado en ambos casos: `0 errores nuevos`, con las mismas advertencias de línea base preexistentes (4 en `validar-atlas.mjs`, 3 en `validar-fenomenos.mjs`, 2 en `validar-temporalidad.mjs`, 0 en `validar-piloto-atlas-2.mjs`). El diff semántico de cada commit confirma alcance exacto: Frente A cambia únicamente `f` en los cuatro ids autorizados (más la sincronización puntual de la muestra F01); Frente B cambia únicamente `estado_recorrido` y `fuente_recorrido` de `cuijla`. Frente C no modificó datos.

## 7. Deuda que permanece

Los doce casos bloqueados del §5 permanecen bloqueados; ninguno se resolvió en esta fase, conforme a la instrucción. El hallazgo `VACÍO_TAXONÓMICO_POSIBLE_CONFIRMADO` de `cuijla` permanece como deuda epistemológica de la taxonomía C1–C10 (no de implementación): deberá acumular evidencia comparativa de otros casos antes de considerarse cualquier modificación del sistema de corrientes. La cobertura parcial del vocabulario `f` en `caribjourneys` y `russwurm` (certeza media, §2) queda documentada como límite estructural del vocabulario heredado de diez términos frente a mecanismos diaspóricos, sin ampliarse ese vocabulario.

## 8. Estado final

`POST_P3_F_SANEADAS_4_DE_4`
`CUIJLA_RESUELTO_IMPLEMENTADO`
`P3_RESUELTOS_66_DE_78`
`P3_BLOQUEADOS_12_DE_78`
`VALIDACION_0_ERRORES_NUEVOS`
`SANEAMIENTO_POST_P3_CERRADO`

**DETENTE.**
