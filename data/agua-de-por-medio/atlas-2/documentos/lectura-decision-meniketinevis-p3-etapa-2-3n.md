# Lectura-decisión · `meniketinevis` · P3-H (Tanda 2) · Etapa 2.3N

## 1. Fuente y alcance de lectura

Marco G. Meniketti, *Sugar Cane Capitalism and Environmental Transformation: An Archaeology of Colonial Nevis, West Indies*, University of Alabama Press, 2015. PDF (277 pp.). Lectura probatoria estratégica: capítulo 1 completo (marco teórico, organización del libro), capítulo 7 completo ("Environmental Change in Capitalism's Shadow": síntesis y conclusiones), e índice con el arco temporal declarado (colonización de 1627 hasta declive y ajuste, 1782-1833).

## 2. Objeto y mecanismo

Doce temporadas de excavación arqueológica en Nevis reconstruyen cómo la expansión de la economía azucarera colonial (1627-1833) transformó materialmente el paisaje de la isla —deforestación, erosión costera, patrones de asentamiento— y cómo ese registro material permite verificar, donde la documentación histórica es fragmentaria, un modelo de dos niveles: uno socioeconómico (capitalismo de plantación) y otro ambiental, con el segundo "dirigido o influido por la emergencia del capitalismo", en palabras de la propia síntesis final ("Environmental Change in Capitalism's Shadow").

## 3. Corriente principal

**C2 — trata_esclavizacion_plantacion.** El arco temporal del libro es explícitamente el de la plantación colonial esclavista, de la colonización a la emancipación de 1833/38 ("emancipation represents a new industrial phase deserving its own study" — fuera del alcance de este libro). La propia síntesis subordina el cambio ambiental al capitalismo de plantación como fuerza que lo dirige.

## 4. Secundaria

**C6 — huracanes_ecologias_materialidades_vivas.** La transformación ambiental y el registro material (erosión, deforestación, cambios de paisaje) son el método y la evidencia distintivos del libro, pero secundarios respecto del argumento sobre el capitalismo de plantación que los explica. Prueba de retirada: un argumento histórico-económico sobre el capitalismo de plantación (C2) puede sostenerse sin la evidencia arqueológica específica; en cambio, el registro ambiental por sí solo, sin el marco del capitalismo de plantación que la síntesis declara como fuerza directriz, no constituye el argumento del libro.

## 5. Etiquetas heredadas

La `f` heredada (`postplantacion`, `catastrofes`) requiere corrección: el libro no trata la desposesión posterior a la abolición (eso es C4, y la propia autora lo declara fuera de su alcance) sino la plantación y su secuela interna de declive y ajuste dentro del propio periodo esclavista (1782-1833, capítulo 6, "Decline and Adjustment"). Se corrige a `["capitalismo_racial","catastrofes"]`: `capitalismo_racial` nombra con precisión el capitalismo de plantación que la síntesis final del libro declara como fuerza que dirige el cambio ambiental, y pertenece al vocabulario heredado de diez fenómenos válido para el campo `f` (`data.fenomenos` en `datos-atlas.js`). Nota metodológica: en un primer intento se propuso el término `plantacion_y_secuela`, que existe en el catálogo granular de treinta y cinco fenómenos (`catalogo-fenomenos.json`) pero no en el vocabulario heredado de diez términos que valida el campo `f`; la ejecución de `validar-atlas.mjs` al cierre de la tanda detectó el error (`OBRA_FENOMENO_INEXISTENTE`) y se corrigió aquí, sustituyéndolo por `capitalismo_racial`. La `ap` heredada ("doce temporadas de excavación... transformó literalmente el paisaje... huella ecológica que la arqueología puede leer siglos después") es compatible con la lectura y no requiere cambio.

## 6. Reserva conceptual

Ninguna.

## 7. Nivel de certeza

Alto.

## 8. Decisión académica

**VERDE.** C2 principal, C6 secundaria. Corrección local de `f`.

## 9. Campos autorizados para implementación

```
"recorrido": "c2",
"recorridos_sec": ["c6"],
"arquitectura_recorrido": null,
"estado_recorrido": "confirmado",
"fuente_recorrido": ["lectura-decision-meniketinevis-p3-etapa-2-3n.md"]
```

`f` corregido a `["capitalismo_racial","catastrofes"]`.

## 10. Estado

RESUELTO.
