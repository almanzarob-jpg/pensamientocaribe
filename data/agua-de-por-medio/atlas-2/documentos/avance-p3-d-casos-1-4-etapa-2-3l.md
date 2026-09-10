# Avance P3-D · Casos 1-4 (Tanda 1) · Etapa 2.3L

| caso | principal | secundarias | arquitectura | semáforo | ampliación | reserva | certeza | estado |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `austinfearblack` | C5 | — | — | VERDE | No | No | ALTA | confirmado |
| `munrohaitirising` | C9 | C7 | — | AMARILLO | Sí | Discrepancia con etiqueta heredada (C6) | ALTA | confirmado |
| `becklessavingsouls` | C2 | — | — | VERDE | No | No | ALTA | confirmado |
| `zips_nannysasafo` | — | — | `FRONTERA_CONSTITUTIVA(C3,C9)` | ROJO académico representable | Sí (mínima, sobre precedente) | No (confirma patrón de `truebornmaroons`) | ALTA | confirmado |

## 1. Casos verdes directos

`austinfearblack` (C5: circulación diaspórica caribeña hacia Montreal, con retorno documentado hacia el Caribe) y `becklessavingsouls` (C2: la trata transatlántica y su abolición, reescrita desde la resistencia africana y caribeña).

## 2. Amarillos resueltos

`munrohaitirising`. La etiqueta heredada registraba C6; la lectura independiente encontró que el propio libro rechaza de forma explícita la explicación ecológico-causal del terremoto y organiza su argumento en torno al testimonio y la memoria (C9, principal) y a la soberanía haitiana comprometida (C7, secundaria). Resuelto en la misma ronda.

## 3. Rojos académicos resueltos

`zips_nannysasafo`. Arquitectura `FRONTERA_CONSTITUTIVA(C3,C9)`, sobre precedente directo de `truebornmaroons` (P3-C): la fundación por fuga y la transmisión ritual/oral se declaran mutuamente indispensables en el propio texto (prólogo especializado y capítulo de cierre). No exigió revisión normativa: el contrato ya representa esta arquitectura.

## 4. Rojos normativos

Ninguno.

## 5. Reservas

Una: la discrepancia de `munrohaitirising` frente a su etiqueta heredada (§11 de su lectura-decisión).

## 6. Validación

`sincronizar.py --check`: en sincronía, v1.17.0, 257 obras, 614 relaciones. Los cuatro validadores del repositorio corrieron en 0 errores nuevos, con el mismo baseline de advertencias preexistente (`ID_FORMATO` ulysseWhyHaiti; `FECHA_PENDIENTE`/`AUTORIA_PENDIENTE` de casos ajenos a este lote; `ENTRADA_COMPUESTA` de seis casos ajenos; `MINIMO` ×3 en fenómenos; `PENDIENTE`/`PERIODO` en temporalidad). Verificación de alcance por comparación JSON campo a campo: únicamente los cuatro casos de esta tanda cambiaron; ninguna adición ni eliminación de nodos.

## 7. Incidencias

Ninguna. Commit atómico `a20f48f` ("P3-D: clasifica primeros cuatro casos"), que incluye también el acta de apertura de control de P3-D según lo indicado.

## Estado

```
P3_D_ABIERTO
P3_D_TANDA_1_COMPLETA
CASOS_1_4_EVALUADOS
CASOS_IMPLEMENTADOS_SEGUN_DECISION
VALIDACION_0_ERRORES_NUEVOS
TRES_CASOS_BLOQUEADOS_POR_FUENTE
```
