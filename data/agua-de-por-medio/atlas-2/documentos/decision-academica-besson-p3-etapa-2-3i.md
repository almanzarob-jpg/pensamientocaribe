# Decisión académica compacta · `besson` · P3-B · Etapa 2.3I

1. **Decisión.** Se aprueba la arquitectura de frontera propuesta en la lectura probatoria. La decisión se apoyaba originalmente solo en la introducción de la autora; un control probatorio focalizado posterior verificó la conclusión directamente sobre el cuerpo de los capítulos 4 y 8 (cap. 5 no fue necesario), sin cambio en el resultado: la lectura de capítulo confirma y refuerza, no corrige, la lectura de introducción.
2. **Evidencia decisiva.** Cap. 4 ("The Free Village of Martha Brae"): reconstrucción archivística (registros parroquiales, cartas de William Knibb de 1835) de la apropiación de tierra por ex-esclavos como acto de agencia, base material de la tenencia campesina. Cap. 8 ("Households, Marriage, Kinship, and Descent"): la autora rechaza explícitamente las lecturas previas centradas solo en tierra (Davenport) o solo en parentesco no corporativo (Clarke) y afirma que el sistema de descendencia cognática "forges... family lines that are most fully developed in dispersed family-land corporations" — parentesco y tierra son, en sus propios términos, la misma institución vista desde dos ángulos, no dos fenómenos correlacionados. Prueba de retirada aplicada a ambos capítulos: retirar C4 deja sin objeto material a la corporación de descendencia; retirar C10 deja a la tierra sin principio de transmisión intergeneracional (la autora descarta explícitamente residencia conjunta y kindred no corporativo como alternativas). Pérdida estructural comparable en ambos sentidos. Ver `lectura-besson-p3-etapa-2-3i.md`, sección AMPLIACIÓN DIRIGIDA.
3. **Recorrido principal.** Ninguno — arquitectura de frontera (ver 5).
4. **Secundarios.** C2 — Trata, esclavización y plantación.
5. **Arquitectura.** `FRONTERA_CONSTITUTIVA(C4,C10)` — Postplantación/trabajo/desposesión y Cuerpos/parentescos/eróticas. Tenencia consuetudinaria de tierra y descendencia cognática se constituyen mutuamente en el argumento del libro: ninguna de las dos es reducible a evidencia contextual de la otra (lectura §4).
6. **Alternativas descartadas.** C2 como tercer miembro de la frontera (descartado: proporcionalmente menor —1 de 8 capítulos— y no co-necesaria en el mismo sentido que C4/C10; tratada como secundaria); C9 como secundaria o estructurante (descartado: un solo capítulo, función de apoyo/mantenimiento explícitamente subordinada, no co-constitutiva); C4 o C10 como principal único sin frontera (descartado: la prueba de retirada no muestra dominancia consistente de una sobre la otra).
7. **Estado.** `DECISION_ACADEMICA_EMITIDA` / `LISTA_PARA_IMPLEMENTAR` / `CONFIRMADA_POR_CONTROL_PROBATORIO_FOCALIZADO`. La verificación de capítulo (cap. 4 y 8) cierra la reserva de verificación puntual dejada abierta en la emisión original.
8. **Reserva conceptual.** Ninguna.
9. **Bloque autorizado para implementación.**
```json
"recorrido": null,
"recorridos_sec": ["c2"],
"arquitectura_recorrido": {"tipo": "frontera_constitutiva", "recorridos": ["c4", "c10"]},
"estado_recorrido": "confirmado",
"fuente_recorrido": ["decision-academica-besson-p3-etapa-2-3i.md"]
```
