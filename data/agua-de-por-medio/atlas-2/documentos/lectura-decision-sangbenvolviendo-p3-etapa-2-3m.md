# Lectura-decisión · `sangbenvolviendo` · Atlas 2.0 · P3-E · Etapa 2.3M

**Protocolo aplicado:** PROTOCOLO ACELERADO DE EVALUACIÓN POR SEMÁFORO. Cuarto caso de la Tanda 2 de P3-E. **Semáforo: ROJO NORMATIVO.** No implementado en esta tanda.

---

## 1. Fuente y alcance de lectura

**Fuente:** Mukien Adriana Sang Ben, *Volviendo al Caribe*, Editorial Universidad del Magdalena, 2020. Edición completa localizada en la Biliografia (PDF, 513 pp.); extraída a texto plano (21.777 líneas).

**Alcance de lectura:** índice completo (introducción, prólogo, cuatro capítulos); introducción completa.

**Estructura del libro:** cuatro capítulos, explícitamente heterogéneos por diseño —el libro reúne columnas periodísticas y ensayos de la autora entre 2015 y 2019—: capítulo I, "¿Por qué las plantaciones?"; capítulo II, "¿Integración caribeña? Un mito, un sueño"; capítulo III, "Viajando por el Caribe" (crónica de viaje en primera persona); capítulo IV, "Libros sobre el Caribe" (reseñas y ensayos bibliográficos).

## 2. Tesis organizadora

La introducción declara, en sus propios términos, que el libro no tiene una tesis única sino una vocación panorámica: "la diversidad de temas abordados y la cantidad de obras leídas y sistematizadas demuestra, sin duda, que la autora quiere comprender el Caribe desde todas sus vertientes y temporalidades." La propia autora advierte que no debe leerse como una argumentación única sino como una compilación de reflexiones autónomas sobre distintas "vertientes" del mundo caribeño.

## 3. Objeto empírico

Cuatro objetos empíricos distintos, cada uno propio de un capítulo: la plantación como origen histórico del Caribe (cap. I); el fracaso reiterado de los proyectos de integración política regional caribeña (cap. II); el recorrido personal de la autora por distintas islas y países del Caribe (cap. III); y un corpus de libros sobre el Caribe leídos y comentados por la autora (cap. IV).

## 4. Problema de clasificación

Cada uno de los tres primeros capítulos admite una lectura bajo una corriente distinta y sin relación de dependencia mutua entre ellas: el capítulo I es legible bajo **C2/C4** (la plantación como origen del orden social y económico caribeño); el capítulo II es legible bajo **C7** (soberanías, fronteras y ocupaciones: el fracaso de los proyectos de integración estatal regional, desde la Asociación de Estados del Caribe hasta el CARICOM); el capítulo III es legible bajo **C5** (rutas, diásporas y territorios acuosos: la crónica de viaje de la autora por el archipiélago). El capítulo IV, dedicado a reseñar libros sobre el Caribe, no organiza un objeto empírico propio del corpus y queda fuera de las diez corrientes.

Se descartó **FRONTERA_CONSTITUTIVA**: no hay dependencia recíproca demostrable entre estos tres ejes —ninguno funda ni presupone a los otros; son capítulos autónomos de una compilación, no partes mutuamente constitutivas de un mismo argumento.

Se descartó **SINTESIS_MULTICORRIENTE**: esa arquitectura exige que tres o más corrientes estructuren de forma irreductible un mismo argumento unificado. Aquí no hay un argumento unificado que las tres corrientes sostengan en conjunto: son tres objetos de análisis distintos, cada uno autosuficiente, presentados uno junto a otro en una compilación que la propia introducción describe como deliberadamente diversa.

La figura que corresponde académicamente es **`sin_principal_clasificable` con dimensiones sustantivas parciales** (C2/C4 en el capítulo I, C7 en el capítulo II, C5 en el capítulo III): ninguna corriente organiza el argumento completo del libro, pero cada una organiza de forma sustantiva un segmento identificable y autosuficiente.

## 5. Bloqueo normativo detectado

Esta figura extendida está **aprobada conceptualmente pero no implementada** en el contrato vigente. El documento `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md` (Etapa 2.3J, caso `dubuissonhaiti`) registra que Dirección Académica aprobó la Opción 1 —permitir `recorridos_sec` no vacío bajo `arquitectura_recorrido.tipo: "sin_principal_clasificable"`— pero deja expresamente pendientes, sin ejecutar: (1) el ajuste del validador (`scripts/validar-atlas.mjs`, función `validateRecorridoArchitecture`, línea ~415, que hoy exige `recorridosSec.length === 0` sin excepción bajo esa arquitectura); (2) la implementación del propio `dubuissonhaiti` bajo esa figura. El documento cierra con el estado explícito `DUBUISSONHAITI_NO_IMPLEMENTADA_TODAVIA` y con una regla de implementación en cuatro pasos sujeta a "autorización conjunta de Dirección Académica."

Representar `sangbenvolviendo` hoy exige, por tanto, una de estas tres vías, ninguna aceptable dentro del protocolo acelerado de esta tanda:

- declarar `sin_principal_clasificable` con `recorridos_sec: []` — académicamente incompleto: borra del dato las tres dimensiones sustantivas que la lectura sí encontró;
- forzar un principal o una arquitectura que el propio dictamen descarta (frontera o síntesis) — académicamente falso;
- ejecutar por cuenta propia, dentro de esta tanda de P3-E, el ajuste pendiente del validador y la implementación retroactiva de `dubuissonhaiti` — excede el alcance de una lectura-decisión de obra individual y la propia decisión normativa exige autorización conjunta expresa de Dirección Académica antes de ese paso.

## 6. Decisión

**ROJO NORMATIVO.** Se detiene únicamente la implementación de `sangbenvolviendo`, no el sublote completo de P3-E: es el último caso LISTO de la Tanda 2 y no bloquea ningún caso posterior. `sangbenvolviendo` queda con lectura probatoria completa y clasificación de dimensiones ya establecida (C2/C4, C7, C5), pendiente de que Dirección Académica autorice la implementación del contrato ya aprobado en `decision-normativa-sin-principal-con-dimensiones-p3-etapa-2-3j.md`. No se modifica `datos-atlas.js` ni `datos-atlas.json` para este caso en esta tanda.

## 7. Estado

```
LECTURA_PROBATORIA_COMPLETA
CLASIFICACION_DE_DIMENSIONES_COMPLETA (c2_c4, c7, c5)
ARQUITECTURA_REQUERIDA_YA_APROBADA_PERO_NO_IMPLEMENTADA
CASO_ROJO_NORMATIVO
NO_IMPLEMENTADO_PENDIENTE_AUTORIZACION_DIRECCION_ACADEMICA
```
