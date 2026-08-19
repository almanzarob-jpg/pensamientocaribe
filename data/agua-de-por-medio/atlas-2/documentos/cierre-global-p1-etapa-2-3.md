# Cierre global P1
## Etapa 2.3 · Reclasificación transversal

Dirección Académica de Pensamiento Caribe · Etapa 2.3E-1
Rama `feat/atlas-2-etapa-1-integrada` · HEAD al momento de esta acta `f18468c86ffd3e02bc7818fb1f5b1668fd3cdffb` ("Documenta decisión académica sobre whiteheadtiger")

---

### 1. Objeto

Este documento consolida y declara formalmente el cierre académico de P1, reuniendo en una sola pieza las quince decisiones ya aprobadas y ya versionadas a lo largo de los Bloques 1 a 4 y del cierre de `gomezexperiential`. **No crea ninguna decisión nueva, no modifica ninguna decisión anterior, no implementa ninguna clasificación en corpus/cola/matriz/marco, y no reabre ningún bloque.** Cada decisión registrada aquí se copia literalmente de su documento versionado de origen; este documento no reinterpreta, no matiza ni añade fundamento nuevo a ninguna de ellas.

---

### 2. Universo P1

**P1 = 15 casos.**

Verificado contra `expediente-transversal-p1-etapa-2-3.md` (Etapa 2.3A, commit `562ed00`), que estableció el universo inicial de quince ids sometidos a lectura y decisión. La frase "15/15 casos revisados" que aparece en ese documento corresponde al **inventario inicial de evidencia**, no a un cierre decisorio: en el momento de ese expediente, 0 casos estaban en `LISTO_PARA_DECISION` y el propio documento confirmaba "no se clasificó ninguna obra". El cierre decisorio real se completó progresivamente a través de los Bloques 1 a 4 y del caso `gomezexperiential`, documentado en los apartados 3 a 8 de esta acta.

---

### 3. Bloque 1

Fuente: `dictamen-academico-bloque-1-etapa-2-3.md`, commit `562ed00`.

- **`gonzalezsojourners`** = C5 principal / C3 secundaria (C1 descartada).
- **`quintero`** = C10 principal, sin C3 secundaria.
- **`lightfoot`** = C4 principal / C3 secundaria (C2 descartada).
- **`rifkinfictions`** = `FRONTERA_CONSTITUTIVA C1/C3`, sin principal ni secundaria (C7 no clasificada).

**Total: 4 casos.**

---

### 4. Bloque 2

Fuente: `dictamen-academico-bloque-2-etapa-2-3.md`, commit `c1a5af0`.

- **`chevannes`** = C9 principal, sin C3 secundaria.
- **`pricefirst`** = `FRONTERA_CONSTITUTIVA C3/C9`, sin principal, sin secundaria.
- **`travelstooy`** = C9 principal, sin C3 secundaria.

**Total: 3 casos.**

---

### 5. Bloque 3

Fuente: `dictamen-academico-bloque-3-etapa-2-3.md`, commit `18320fb`.

- **`alabi`** = C7 principal / C3 secundaria.
- **`rainforestwarriors`** = C7 principal / C3 secundaria.
- **`james`** = C3 principal / C7 secundaria.

**Total: 3 casos.**

---

### 6. Bloque 4

Fuente: `dictamen-academico-bloque-4-etapa-2-3.md`, commit `f245506`.

- **`sherwood`** = C2 principal, sin C4 secundaria, sin C5 secundaria.
- **`exceptviolence`** = C4 principal / C5 secundaria (C2 descartada).
- **`jaffeconcrete`** = C6 principal, sin secundaria confirmada.
- **`perezmorales`** = `SINTESIS_MULTICORRIENTE`, C3/C5/C7 estructurantes, sin corriente principal.

Relaciones internas de `perezmorales`:

- C3/C5 = `FRONTERA_CONSTITUTIVA`.
- C3/C7 = `FRONTERA_CONSTITUTIVA`.
- C5/C7 = relación mixta (descriptor académico provisional, no categoría técnica).

**Total: 4 casos.**

---

### 7. Último caso P1

Fuente: `decision-academica-gomezexperiential-cierre-p1-etapa-2-3.md`, commit `cd1f731`.

- **`gomezexperiential`** = C9 principal / C5 secundaria.

**Total: 1 caso.**

---

### 8. Comprobación aritmética

```
Bloque 1          = 4
Bloque 2          = 3
Bloque 3          = 3
Bloque 4          = 4
gomezexperiential = 1
                    --
                    15
```

4 + 3 + 3 + 4 + 1 = 15.

**Resultado: 15/15 CASOS P1 ACADÉMICAMENTE RESUELTOS.**

---

### 9. Reglas académicas emergentes de P1

Registradas, sin reabrirlas, tal como quedaron aprobadas en los dictámenes de bloque:

1. **Principal / secundaria** — esquema general de clasificación con corriente principal explícita y hasta dos secundarias.
2. **`FRONTERA_CONSTITUTIVA`** — bilateral; excepcional; aprobada caso por caso (`rifkinfictions` C1/C3, `pricefirst` C3/C9, `perezmorales` C3/C5 y C3/C7).
3. **`SINTESIS_MULTICORRIENTE`** — arquitectura global excepcional; tres o más corrientes estructurantes; sin principal defendible; no sustituye a `FRONTERA_CONSTITUTIVA` (aprobada en el dictamen del Bloque 4, caso testigo `perezmorales`).
4. **Relación mixta** — descriptor académico provisional, no categoría técnica; no se convierte en enum ni en campo del corpus; se registra caso por caso.
5. **Precisión C3/C7** — causalidad, finalidad, criterio de valoración y dependencia argumental deciden la jerarquía entre C3 y C7; cronología y número de páginas no.
6. **Precisión C2/C4** — persistencia del régimen esclavista ≠ transformación postemancipatoria.
7. **Precisión C2/C5** — transporte forzado inherente a la trata ≠ circulación C5 automáticamente.

No se crea ninguna regla nueva en esta acta.

---

### 10. Estado del cierre

**P1 = ACADÉMICAMENTE CERRADO = 15/15 CASOS RESUELTOS.**

**P1 = DOCUMENTALMENTE CONSOLIDADO** mediante esta acta.

**No se afirma** que P1 esté implementado técnicamente: la sincronización de estas quince decisiones con `datos-atlas.json`, `cola-lectura-pendiente-atlas-2.md`, `matriz-fronteras-c1-c10.md` y `catalogos-atlas-2.json` permanece pendiente, sujeta al plan general de implementación técnica, y no se ejecuta en esta acta ni se autoriza aquí.

Se distingue expresamente:

- **CIERRE ACADÉMICO** — completo, las quince decisiones están tomadas, fundamentadas y versionadas.
- **IMPLEMENTACIÓN TÉCNICA** — separada, todavía pendiente, no autorizada por esta acta.

---

### 11. Transición a P2

Tras el cierre decisorio de `gomezexperiential`, P2 fue abierto. El primer caso P2 ya versionado es `whiteheadtiger` (commit `f18468c`, "Documenta decisión académica sobre whiteheadtiger"). Esta acta registra el hecho de continuidad y no reproduce ni reabre esa decisión académica.

---

### 12. `felicianosantos`

`felicianosantos` es un caso P2 con lectura y decisión académica ya redactadas (`lectura-felicianosantos-p2-etapa-2-3f.md`, `decision-academica-felicianosantos-p2-etapa-2-3f.md`), ambas todavía **sin versionar**. Esta acta no las analiza, no las corrige, no las stagea y no las versiona.

---

### 13. Confirmaciones

> P1 contiene exactamente 15 casos: confirmado.
> Ningún caso duplicado, ninguno omitido: confirmado.
> Las 15 decisiones fueron copiadas literalmente de sus documentos versionados de origen: confirmado.
> `gomezexperiential` incluido como caso 15: confirmado.
> P1 declarado académicamente cerrado: confirmado.
> `whiteheadtiger` mencionado únicamente como hecho de continuidad P2, sin reabrirse: confirmado.
> `felicianosantos` no tocado, no analizado, no versionado: confirmado.
> `datos-atlas.json`, `cola-lectura-pendiente-atlas-2.md`, `matriz-fronteras-c1-c10.md`, `marco-academico-consolidado-atlas-2.md`, `catalogos-atlas-2.json`, `catalogo-fenomenos.json`, lotes, scripts e interfaz: intactos.
> Los dos históricos preexistentes (`expediente-evidencia-c7.md`, `ficha-decision-c4.md`): intactos.
> No se hizo `git add`. No se hizo `commit`. No se hizo `push`.
