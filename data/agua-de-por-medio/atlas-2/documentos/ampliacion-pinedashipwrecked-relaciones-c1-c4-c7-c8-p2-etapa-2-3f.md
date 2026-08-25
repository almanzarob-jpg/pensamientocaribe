# ETAPA 2.3F — P2 · AMPLIACIÓN PROBATORIA SOBRE RELACIONES C1/C4/C7/C8 EN `pinedashipwrecked`

Atlas 2.0 · Pensamiento Caribe · Dirección Académica

**Naturaleza de este documento.** Tarea estrictamente probatoria y relacional. NO rehace la lectura de `pinedashipwrecked` (documento intacto en `lectura-pinedashipwrecked-p2-etapa-2-3f.md`). NO clasifica definitivamente, NO emite decisión académica, NO aprueba `SINTESIS_MULTICORRIENTE`, NO implementa nada en corpus/catálogos/lotes. Somete a prueba adversarial la hipótesis de cuatro corrientes estructurantes (C1, C4, C7, C8) que la lectura anterior dejó abierta, mediante el análisis bilateral de los seis pares posibles y una revisión obligatoria y separada de C8.

---

## 0. Verificación git previa (sección 17 de la instrucción — solo lectura)

Ejecutada antes de iniciar cualquier trabajo sobre el texto, con los comandos de solo lectura autorizados:

```
$ git branch --show-current
feat/atlas-2-etapa-1-integrada
$ git rev-parse HEAD
1ff02ae29fe29fe5046bfeafc0087c0cbb48998c
$ git rev-parse origin/feat/atlas-2-etapa-1-integrada
1ff02ae29fe29fe5046bfeafc0087c0cbb48998c
$ git log -1 --oneline
1ff02ae Documenta decisión académica sobre andersonblackindigenous
$ git status --short
?? PensamientoCaribeCuraduriaDigital.docx
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
?? data/agua-de-por-medio/atlas-2/documentos/lectura-pinedashipwrecked-p2-etapa-2-3f.md
?? data/agua-de-por-medio/atlas-2/documentos/lectura-womenancestors-p2-etapa-2-3f.md
$ git diff --stat
(sin salida)
$ git diff --name-only
(sin salida)
$ git branch -a | grep respaldo
  respaldo-web-da5a6cb
```

**Resultado: verificación pasada sin anomalías.** Rama activa correcta, HEAD local = HEAD remoto (`1ff02ae`), exactamente los cinco archivos `??` esperados (sin ningún hallazgo no contemplado), y la rama `respaldo-web-da5a6cb` existe tal como declara la sección 0 de la instrucción. El estado real coincide exactamente con el "estado ya saneado" que Rob declaró. No se ejecutó ningún comando de escritura git en ningún momento.

**Nota de transparencia añadida al cierre de esta tarea (ver apartado 14).** Durante la auditoría final, un nuevo `git status --short` emitió la advertencia `unable to unlink '.git/index.lock': Operation not permitted`, y se confirmó que un `.git/index.lock` de 0 bytes había reaparecido (creado a las 12:32, dentro de esta misma sesión). No fue creado por ningún comando de escritura — este entorno solo ejecutó comandos de solo lectura (`status`, `diff`, `rev-parse`, `log`, `branch`) en toda la tarea —, sino que es un efecto colateral conocido de este entorno: los propios comandos de lectura de git intentan refrescar la caché del índice y, al no tener este entorno permiso para desvincular archivos dentro de `.git`, dejan un candado huérfano de 0 bytes en vez de limpiarlo. `git status` y `git diff` siguieron funcionando con normalidad pese al candado (ver salidas en el apartado 14), y la escritura del archivo nuevo de esta tarea no pasó por git en ningún momento (se realizó por fuera del repositorio, vía el puente al Mac). Pero, igual que en la tarea anterior, cualquier futura operación de escritura en git (`add`, `commit`) fallará hasta que Rob borre manualmente `~/Pagina/pensamiento-caribe/.git/index.lock` desde su propio Terminal.

---

## 1. Páginas adicionales leídas (sección 12 de la instrucción)

La lectura anterior no había leído completos los capítulos 3, 4 y 5. Para esta ampliación se leyeron, además de lo ya cubierto, las siguientes secciones nuevas, identificadas y priorizadas según los cinco ejes que pide la sección 12 (transición company time/Sandino time; producción institucional de categorías raciales; trabajo/economía e identificación; soberanía e identificación; función precisa de "Creole"):

- **Cap. 3, "From Bilwi to Puerto Cabezas," pp. 87–91** — el conflicto de tierras entre la Bragman's Bluff Lumber Company, la comunidad de Bilwi y la comunidad de Karatá, arbitrado por la comisión Ruiz (1927). **Nuevo.**
- **Cap. 3, pp. 99–106** — el resto de la sección "Sandino and the Mosquito Coast: Race War and Revolutionary Indigenism" (antes solo se había leído pp. 95–98). **Nuevo** (99–106); 95–98 ya leído.
- **Cap. 4, "Company Time," pp. 116–127** — resto de "Labor, Machete Men, and Municipal Self-Image" (segregación residencial, "la zona," clubes sociales separados, ascenso de la autoidentificación criolla en los años 50) y la sección completa "Company Commissaries and the Cultural Impact of Economic Dependence." **Nuevo** (la lectura anterior solo cubría pp. 108–~115).
- **Cap. 4, pp. 135–150** — "The Rise of Indian Institutions and Indian Collective Action" (ALPROMISU, ACARIC, la Iglesia Morava, misioneros capuchinos, el taller "Salvation History of the Miskito" de Smutko) y "Cultural Identity, Gender, and Political Economy" (Nietschmann, Helms, Hale sobre el caso de Tasbapauni). **Nuevo, íntegro.**
- **Cap. 5, "Neighborhoods and Official Ethnicity," pp. 154–177** — "Decapitalization and Abandonment," "The Atlantic Series," "Race and Myth in Indian Bilwi" y, de manera decisiva, "The Beach: Creole Neighborhood or Indigenous Community?" (antes solo se había leído pp. 152–154). **Nuevo.**
- **Cap. 2, pp. 32–35 y 53–57** — releídas con la lente específica que exige la sección 7/11 de la instrucción (releer obligatoriamente "The Case of the Creoles"): la definición del propio Pineda de "Creole" y "Miskito" como "dos etnónimos principales" (p. 33), y su rechazo explícito a la tesis de Olien sobre la etnogénesis criolla como elección cultural, sustituida por una explicación de alianza geopolítica.

No fue necesario releer el libro completo; se priorizaron exactamente los pasajes que la instrucción señala como los más probables de contener la evidencia decisiva para los seis pares.

---

## 2. Prueba de cada par (sección 4 de la instrucción — esquema A–I aplicado a los seis pares)

### C1 / C4

**A. Evidencia textual concreta.** El conflicto de tierras Bilwi/Karatá (pp. 87–91): el comisionado Ruiz niega los reclamos de tierra indígena precisamente cuando la Bragman's Bluff Lumber Company necesita esas tierras para expandirse ("Only after a large agro-industrial Enterprise was created... could greed possibly have any reason to exist," Ruiz y Ruiz 1927, 16); el propio Ruiz deslegitima a los indios de Bilwi apelando a un primitivismo cultural ("lairs," "nomadic life") para favorecer al capital extractivo. En cap. 4: la paradoja de los "machete men," identificados simultáneamente como "Indians" y "Spaniards" según su posición en la jerarquía laboral, no según origen étnico ("the term 'Indian' being used as a term that... indexed both race and class," p. 112); Porteños que se autoidentifican como miskitos se distancian de los "machete men" indios precisamente porque no comparten su posición laboral rural. En cap. 5: la identidad de El Cocal como "Miskito" se activa/estigmatiza según su función dentro de la economía de refugiados de posguerra.

**B. Capítulos/páginas.** 87–91, 108–120, 152–154 (ya documentado), 164–168 (El Cocal), 219–226 (Conclusión).

**C. Causalidad.** Predominantemente C4 → C1: la demanda de tierra y trabajo de la compañía (C4) es el detonante concreto que en cada episodio examinado obliga a que la identidad india se declare, se dispute o se estigmatice (comisión Ruiz 1927 convocada por la expansión de la compañía; identificación de "machete men" como Indios determinada por su posición laboral, no al revés). Pero hay una condición inversa no eliminable: sin el régimen de tenencia comunal indígena preexistente (títulos de las Diez Comunidades, tratado Harrison-Altamirano de 1905), no habría nada que la compañía necesitara disputar — C1 provee la estructura jurídica previa sobre la que C4 tiene que operar. No son efectos de una tercera dimensión: se producen entre sí, pero de forma asimétrica.

**D. Finalidad.** Ninguna conduce sola a la finalidad declarada del libro (explicar la interacción entre autoidentificación racial y cambios político-económicos); ambas son necesarias en igual medida para esa finalidad dual, aunque el libro nombra explícitamente "identidad" y "economía" como sus dos polos en la Conclusión (pp. 220–226), sin subordinar uno al otro en ese pasaje de cierre.

**E. Criterio de valoración.** Pineda interpreta la disputa por la tierra y el trabajo (C4) como el mecanismo que explica los cambios en la identificación (C1) — el aparato crítico del libro (desnaturalización histórica de la raza) exige tratar a C4 como *explanans* y a C1, en buena parte, como *explanandum*. Esto no ocurre en sentido inverso con la misma fuerza: Pineda no explica los cambios económicos apelando a la identidad india.

**F. Dependencia.** Retirar C4: el libro pierde el mecanismo que explica *por qué* cambia la identificación india entre "tiempo de compañía" y "tiempo sandinista" — queda una descripción sin motor causal. Retirar C1: el libro pierde el objeto de una parte sustancial de su propio argumento (persistencia y disputa de lo indígena, cap. 2 completo, El Cocal, comisión Ruiz), aunque la economía de la compañía (C4) sobreviviría como historia laboral y racial en sentido más amplio (Creole/Spaniard), sin la dimensión indígena.

**G. Subordinación.** `RELACION_MIXTA` — asimetría funcional real (C4 como mecanismo explicativo dominante en los episodios examinados) sin llegar a una subordinación limpia, porque C1 aporta la estructura jurídica/histórica previa (tenencia comunal, tratado) que condiciona cómo opera C4 localmente.

**H. Irreductibilidad.** PARCIAL.

**I. Función final de la relación.** Mixta, con sesgo hacia lo jerárquico (C4 como mecanismo, C1 como objeto explicado, sin que esto agote el contenido propio de C1).

---

### C1 / C7

**A. Evidencia textual concreta.** El protocolo electoral mosquito de 1865 clasifica oficialmente a los electores como "Creoles," "Indians" o "Half-Indians" específicamente porque "every document of the Reserve was under pressure to display a specifically Indian legitimacy" (Oertzen, Rossbach y Wunderich 1990, 67) frente a la propaganda estadounidense que denigraba al gobierno mosquito como "títere negro" — la necesidad de legitimidad soberana produce la categoría oficial india, no al revés. La comisión Ruiz (pp. 87–91) niega la soberanía territorial india apelando a un primitivismo cultural para favorecer la reivindicación de soberanía nicaragüense sobre la tierra ("Only the state is the legitimate owner"). El caso de The Beach (pp. 170–177) es el más decisivo del libro entero para este par: el funcionario de YATAMA, Rigoberto Carpentier, redefine estratégicamente a los residentes de The Beach — que ni siquiera se autoidentifican mayoritariamente como indios ("mix" es la respuesta más común) — como "comunidad indígena" precisamente para invocar la protección territorial del tratado Harrison-Altamirano frente al Estado (la Empresa Nacional de Puertos); el funcionario estatal, a su vez, refuta ese reclamo negando el estatus indígena. Aquí la identidad india se activa y se disputa enteramente como instrumento de una disputa de soberanía/propiedad estatal.

**B. Capítulos/páginas.** 43–65 (Reserva/protectorado/Tratado de Managua, ya documentado), 54–56 (protocolo de 1865), 61–63 (anexión de 1894, ya documentado), 87–91 (comisión Ruiz), 170–177 (The Beach), 190–211 (cap. 6 completo, ya documentado), 225 (Conclusión, ya documentado).

**C. Causalidad.** C7 → C1 predominante y verificado repetidamente en episodios concretos y separados por más de un siglo (protocolo de 1865, comisión Ruiz de 1927, disputa de The Beach de 1992): en cada caso, una necesidad de legitimación o disputa de soberanía/propiedad estatal es la que activa, institucionaliza o niega la identidad india, no la inversa. Pero existe una condición histórica de fondo genuinamente bilateral: el propio Reino/Reserva de la Mosquitia solo pudo constituirse y sostenerse como entidad cuasi-soberana reconocida por Gran Bretaña *en virtud de* ser percibido como un gobierno indígena — es decir, la existencia de C1 como categoría reconocible es, en el origen del siglo XVII–XVIII, condición de posibilidad de C7 (no habría protectorado que disputar sin un "gobierno mosquito indio" que proteger). Este es el mismo patrón —causalidad dominante en un sentido, condición de posibilidad recíproca en el fondo histórico— que la instrucción anticipa en la sección 6 al invitar a considerar `FRONTERA_CONSTITUTIVA`.

**D. Finalidad.** La disputa de soberanía (C7) es el terreno donde la pregunta central del libro (identificación racial vs. cambios político-económicos) se desarrolla de forma más extensa y sostenida a lo largo de tres siglos (caps. 2 y 6 completos); la identidad india es uno de los objetos en disputa sobre ese terreno, no un eje autónomo paralelo.

**E. Criterio de valoración.** Pineda juzga las categorías raciales, de manera explícita y reiterada, como instrumentos políticos desplegados en contiendas de soberanía — un criterio de valoración centrado en C7 que se aplica a C1 (y no al revés).

**F. Dependencia.** Retirar C7: el libro pierde el andamiaje político completo que explica cuándo y por qué la identidad india se vuelve saliente, se institucionaliza o se niega (Reserva, Tratado de Managua, anexión, comisión Ruiz, The Beach) — pérdida devastadora, más grave que la de C1. Retirar C1: el libro pierde el contenido específico de una de las categorías en disputa, pero el relato de soberanía (protectorado → anexión → autonomía → guerra Contra) sobreviviría estructuralmente, aunque perdería el vínculo con la legitimidad "india" que en la práctica histórica documentada (protocolo de 1865, discurso británico del naufragio) fue precisamente lo que estaba en juego.

**G. Subordinación.** `C7 > C1`, con la matización explícita de que la relación tiene un fuerte componente de mutua constitución en su origen histórico, cercano a lo que la instrucción llama hipótesis de `FRONTERA_CONSTITUTIVA` — no se aprueba aquí, solo se documenta como hallazgo.

**H. Irreductibilidad.** PARCIAL.

**I. Función final de la relación.** Mixta con fuerte componente constitutivo; candidata bilateral a `FRONTERA_CONSTITUTIVA` **solo como hipótesis** (ver apartado 4).

---

### C1 / C8

**A. Evidencia textual concreta.** Pineda declara explícitamente, al introducir el sistema clasificatorio moderno de la Costa (cap. 2, p. 33), que "Creole" y "Miskito" son "two principle ethnonyms" surgidos de la *misma* reestructuración del siglo XIX — no dos procesos independientes, sino dos polos de un único sistema binario de clasificación racial. Esta es la evidencia central de este par: C1 y C8 no se producen ni se explican mutuamente en el argumento de Pineda; ambos son etiquetas paralelas del mismo sistema, cuya génesis y transformación Pineda explica en ambos casos apelando a C4 y C7 (ver los dos pares siguientes), no a una relación C1↔C8 directa.

**B. Capítulos/páginas.** 32–35, 42–57.

**C. Causalidad.** Ninguna produce ni explica a la otra directamente. Son efectos de una tercera dimensión — o, más precisamente, de dos: C4 (régimen laboral/consumo) y C7 (legitimación de soberanía), ambas verificadas en los pares C4/C8 y C7/C8 como los mecanismos reales detrás de la aparición y transformación tanto de "Indian" como de "Creole" en momentos históricos concretos (1865, comisión Ruiz, "company time," The Beach).

**D. Finalidad.** Simétricas entre sí en tanto polos del mismo sistema clasificatorio, pero esta simetría queda subsumida por el hallazgo de la revisión obligatoria de C8 (apartado 3): si C8 no organiza un tramo propio del argumento en el sentido que exige su definición normativa, la pregunta sobre cuál de las dos "conduce más directamente" a la finalidad del libro deja de ser comparable en los mismos términos.

**E. Criterio de valoración.** Pineda aplica el mismo aparato crítico (desnaturalización histórico-política) a ambas categorías, sin privilegiar una sobre la otra como objeto — la asimetría relevante para este par no está en el criterio de valoración, sino en qué corriente realmente organiza cada una.

**F. Dependencia.** No aplicable en el sentido protocolar estándar: no se trata de que una corriente sostenga o requiera a la otra, sino de que ambas son etiquetas contiguas del mismo sistema, y la prueba de retirada relevante (apartado 3) recae sobre C8 como corriente, no sobre "Creole" como dato del objeto del libro (que no puede retirarse sin vaciar la mitad del objeto declarado).

**G. Subordinación.** `NO_DETERMINABLE` en el sentido causal exigido por el esquema — el hallazgo no es de jerarquía sino de contigüidad clasificatoria: dos etiquetas del mismo sistema binario, ninguna produce a la otra.

**H. Irreductibilidad.** No evaluable de forma limpia: dado que C8 no supera su propia prueba normativa (apartado 3), la pregunta de irreductibilidad frente a C1 queda parcialmente inaplicable — no corresponde evaluar la irreductibilidad de una corriente que no alcanza, por sí misma, rango estructurante.

**I. Función final de la relación.** Contextual / `NO_DETERMINABLE`, subsumida en el hallazgo del apartado 3.

---

### C4 / C7

**A. Evidencia textual concreta.** La ocupación militar estadounidense de 1912–1933 (incluida la guerra contra Sandino) protege explícitamente intereses económicos estadounidenses concretos ("US military and economic domination," p. 96); Pineda no separa ambos motivos. La anexión nicaragüense de 1894 (C7) es la condición política que permite, tres décadas después, que el gobierno nicaragüense otorgue a la Bragman's Bluff Lumber Company la concesión de más de 50 000 hectáreas (C4) — sin el cambio de soberanía no habría autoridad nicaragüense capaz de concederlas. En sentido inverso: el colapso económico del "tiempo de compañía" tras 1979 (nacionalización sandinista, fuga de capital) es simultáneo y causalmente entretejido con el estallido de la guerra Contra y la demanda de autonomía regional (C7) — el propio libro periodiza "tiempo sandinista" como el momento en que colapsan *a la vez* la economía de la compañía y el orden político-territorial previo. La crisis económica de los años 60–70 (fin del "tiempo de compañía" temprano) impulsa directamente el surgimiento de ALPROMISU y, más tarde, de organizaciones que desembocan en la demanda de autonomía regional (RAAN/RAAS) — es decir, C4 produce la movilización que desemboca en C7.

**B. Capítulos/páginas.** 61–63, 95–106 (Sandino), 108–127 (Company Time), 135–150 (Rise of Indian Institutions, crisis económica → movilización), 190–211 (cap. 6, guerra Contra/autonomía), 219–226 (Conclusión).

**C. Causalidad.** Recíproca y verificada en ambos sentidos en distintos momentos históricos: (1) C7 → C4: la anexión de 1894 habilita jurídicamente la concesión a la compañía; la ocupación militar protege la inversión estadounidense. (2) C4 → C7: la crisis económica de los 60–70 detona la movilización india que desemboca en demandas de autonomía; el colapso del "tiempo de compañía" tras 1979 es inseparable del estallido de la guerra Contra. No son efectos de una tercera dimensión — se producen mutuamente, en momentos distintos del arco narrativo del libro.

**D. Finalidad.** Ambas conducen igualmente a la finalidad declarada (interacción identidad/economía política): el propio libro trata "company time" y "Sandino time" como una periodización *compuesta* simultáneamente de colapso económico y de ruptura político-soberana, sin que una sea el trasfondo de la otra.

**E. Criterio de valoración.** Pineda no privilegia un criterio económico sobre uno político ni viceversa; interpreta ambos procesos como igualmente constitutivos del "régimen" que produce identificación racial (economía política regional).

**F. Dependencia.** Retirar C4: se pierde el mecanismo económico que explica el auge, la crisis y el colapso que periodizan el libro, y con él buena parte de la motivación de la intervención militar estadounidense misma. Retirar C7: se pierde el marco político-jurídico (anexión, protectorado, autonomía, guerra) sin el cual la economía de la compañía carece de condición de posibilidad (no hay concesión sin soberanía nicaragüense) y de desenlace (no hay fin del "tiempo de compañía" legible sin la revolución y la guerra). Ambas pruebas de retirada dan positivo con igual fuerza.

**G. Subordinación.** `RELACION_NO_JERARQUICA` — relación recíproca y bilateral, sin que la evidencia permita ni exija privilegiar una dirección causal por encima de la otra.

**H. Irreductibilidad.** SÍ.

**I. Función final de la relación.** Recíproca (mutua constitución) — el par con la evidencia más limpiamente simétrica de los seis, y candidato bilateral adicional, junto con C1/C7, para una eventual hipótesis de `FRONTERA_CONSTITUTIVA` (ver apartado 4).

---

### C4 / C8

**A. Evidencia textual concreta.** Esta es la relación con la evidencia causal más directa y explícita del libro. La compañía recluta selectivamente a trabajadores negros antillanos calificados que hablan inglés para los puestos de mando medio, reforzando y transformando la categoría criolla ("served to reinforce and transform the Creole category," p. 68 [cap. 3], sobre la misma dinámica en cap. 4). Pineda documenta directamente: "by the 1950s the Afro-Caribbean population of Puerto Cabezas, the majority of whom had arrived within the last generation, increasingly identified itself as Creole" (p. 119) — identificación producida por la inmigración laboral de la compañía, no por continuidad cultural (el propio Pineda anota a continuación que casi nunca encontró un "Creole" que no rastreara ascendencia inmigrante del siglo XX). La sección "Company Commissaries" describe cómo el salario, el script de la compañía y la cultura de consumo importada producen una "cosmopolitanism" que Porteños llegan a valorar activamente como identidad propia — dependencia económica naturalizada en autopercepción. La cita más decisiva es indirecta pero explícita: Pineda reproduce con aprobación el hallazgo de Charles Hale sobre Tasbapauni: "As people 'made it' economically... they often came to increasingly identify as Creole" (Hale 1994, 124, citado p. 147) — movilidad económica ascendente (C4) causa directamente el cambio de autoidentificación hacia "Creole" (C8).

**B. Capítulos/páginas.** 108–127 (jerarquía racial-laboral, comisarios, segregación residencial, clubes sociales separados), 135–150 (Tasbapauni, Hale sobre movilidad económica y cambio de identificación).

**C. Causalidad.** A produce B, fuerte y verificada textualmente en dos episodios independientes (reclutamiento laboral de la compañía en Puerto Cabezas; movilidad económica ascendente en Tasbapauni según Hale). No hay evidencia comparable de que la identificación criolla, en sí misma, produzca el régimen laboral o el patrón de consumo — la dirección es unívoca en el texto.

**D. Finalidad.** C4 conduce más directamente a la finalidad declarada del libro: esta relación es, textualmente, la instancia más limpia y explícita de la tesis central de Pineda (la autoidentificación racial sigue a los regímenes político-económicos, no a la inversa).

**E. Criterio de valoración.** Pineda interpreta explícitamente "Creole" desde el régimen laboral y de consumo — es, literalmente, el argumento que hace en esta sección del libro.

**F. Dependencia.** Retirar C4: desaparece el mecanismo explicativo completo de por qué y cuándo crece o se refuerza la identificación criolla (reclutamiento, comisario, movilidad económica) — la etiqueta "Creole" quedaría sin anclaje explicativo. Retirar "Creole"/C8: la historia laboral de la compañía (jerarquía racial, comisarios, segregación) sobrevive íntegra como historia económica sin que dependa de la etiqueta criolla para tener sentido.

**G. Subordinación.** `C4 > C8`, confirmada de forma directa y textual, no inferida.

**H. Irreductibilidad.** NO — dado (a) que C8 no supera su propia prueba normativa (apartado 3) y (b) que la evidencia muestra a "Creole" como efecto explicado por C4, no hay contenido irreductible propio en esta relación.

**I. Función final de la relación.** Jerárquica (C4 > C8).

---

### C7 / C8

**A. Evidencia textual concreta.** El protocolo electoral de 1865 institucionaliza "Creole," "Indian" y "Half-Indian" como categorías oficiales precisamente por presión de legitimación soberana frente a la propaganda estadounidense (el diplomático E. G. Squier ridiculizó al rey mosquito como "títere negro"): la categoría "Creole" entra al registro oficial del gobierno mosquito como parte de una estrategia de legitimidad política, no de autodescripción cultural. Pineda además rechaza explícitamente la explicación de Olien sobre la etnogénesis criolla como elección cultural ("Creoles choosing to adopt English customs instead of Indian customs") y la sustituye por una explicación abiertamente política: "groups that later would be called Creoles increased in prominence as they were able to form stronger alliances with the British" (p. 54–55) — es decir, el propio autor deriva la prominencia de "Creole" de la geopolítica de alianzas y protectorado (C7), no de un proceso lingüístico-cultural (que sería C8 en sentido normativo). El mito del naufragio (ya documentado en la lectura original, apartado 19) es instrumentalizado por británicos y estadounidenses en disputa de soberanía enfatizando alternativamente ascendencia "india" o "negra" — de nuevo, la disputa de soberanía (C7) determina qué categoría racial se activa retóricamente.

**B. Capítulos/páginas.** 33–35 (naufragio, ya documentado), 45–46 (Holm sobre Creole English, mención citacional no desarrollada), 53–57 (etnogénesis criolla, rechazo a Olien), 61–63 (anexión).

**C. Causalidad.** C7 → C8, fuerte y verificada en tres episodios distintos (protocolo de 1865, propaganda de Squier, y la explicación causal que el propio Pineda ofrece para la "etnogénesis criolla" como alianza política). No existe en el texto un movimiento inverso comparable (C8 produciendo C7): la existencia de una población criolla angloparlante es, a lo sumo, una condición instrumental que el gobierno mosquito y los actores geopolíticos pudieron *usar* en su disputa de soberanía, no una fuerza que genere por sí misma esa disputa.

**D. Finalidad.** La narrativa de soberanía (C7) es un eje estructural sostenido en dos capítulos completos (2 y 6) más la Conclusión; "Creole" aparece dentro de ella como material movilizado, no como un eje narrativo autónomo comparable.

**E. Criterio de valoración.** Pineda interpreta explícitamente la etnogénesis criolla desde una lente política — es exactamente el argumento con el que corrige a Olien.

**F. Dependencia.** Retirar C7: desaparece la explicación completa de por qué "Creole" se vuelve prominente, prestigioso e institucionalizado en momentos concretos (protocolo de 1865, alianza con Gran Bretaña, propaganda de Squier). Retirar C8/"Creole": el relato de soberanía (Reserva, Tratado de Managua, anexión, autonomía) sobrevive estructuralmente casi intacto; "Creole" es uno de varios materiales raciales movilizados en ese relato (junto con "Indian" y "Spaniard"), no su elemento portante.

**G. Subordinación.** `C7 > C8`, confirmada de forma directa y textual — mismo patrón que C4/C8.

**H. Irreductibilidad.** NO, por las mismas razones que en C4/C8.

**I. Función final de la relación.** Jerárquica (C7 > C8).

---

## 3. Revisión obligatoria de C8 (sección 11 de la instrucción)

Distinguiendo, como exige la instrucción, entre (A) CREOLE como etnónimo racial/étnico, (B) CREOLIZACIÓN como proceso, (C) traducción y sus límites, (D) opacidad:

**(A) Creole como etnónimo.** Es, sin ambigüedad, el uso dominante y prácticamente único en todo el libro. El propio Pineda lo declara así en la primera página donde introduce el término (p. 33): "Creole" y "Miskito" son "two principle ethnonyms" de un mismo sistema clasificatorio racial de la Costa, junto a "Spaniard"/"Mestizo." Las 181 apariciones de "creole" corresponden, en la inmensa mayoría verificada por muestreo de contexto en este ejercicio, a este uso: como etiqueta de identificación racial de personas y barrios ("Creole club," "Creole elite," "Creole village," "self-proclaimed Creole," "identify as Creole").

**(B) Creolización como proceso.** No se encontró ningún tramo del libro que analice la creolización como proceso lingüístico-cultural sustantivo en sentido antropológico (formación de una lengua criolla, sincretismo cultural estructural, genealogía interna de prácticas). La única sección que Pineda dedica explícitamente a la "etnogénesis" criolla (pp. 53–56, "The Case of the Creoles") es, además, una sección donde el propio autor **rechaza** la explicación de Olien (que se acerca más a un argumento cultural/de elección de costumbres) y la reemplaza por una explicación política de alianzas geopolíticas — es decir, el único pasaje candidato a analizar C8 como proceso es, en su propio desarrollo argumental, una desculturización/despolitización que traslada la explicación a C7.

**(C) Traducción y sus límites.** No hay tratamiento de la traducción como problema epistémico o práctica situada en ningún tramo del libro. Las tres apariciones de "Creole English" fuera de la sección de etnogénesis (pp. 41, 44, 188–189, notas) son menciones descriptivas de estatus sociolingüístico (prestigio, no como recurso educativo nacional) o citas de paso a la clasificación lingüística de John Holm ("one of the oldest varieties of English spoken outside of England," Holm 1978), nunca desarrolladas por Pineda como análisis propio.

**(D) Opacidad.** Cero apariciones de "opacity"/"opacidad" en el texto íntegro (verificado por búsqueda sobre las 11 708 líneas extraídas). No hay tratamiento de opacidad como derecho epistémico o político en ningún sentido glissantiano ni de otra procedencia teórica.

**Pregunta decisiva de la instrucción — ¿Pineda analiza un proceso de creolización en sentido sustantivo, o analiza una identidad denominada "Creole"?** La respuesta, verificada contra el texto y no asumida, es la segunda: Pineda analiza una identidad denominada "Creole," tratada exactamente con el mismo aparato crítico (desnaturalización histórico-política) que aplica a "Miskito" y "Spaniard." No hay evidencia de que la frecuencia léxica (181 apariciones) señale un proceso C8 organizando el argumento: señala, en cambio, que "Creole" es uno de los tres-cuatro términos etnorraciales constantes que estructuran toda descripción etnográfica del libro, exactamente como "Indian" (que aparece con frecuencia comparable) sin que ello implique que C1 "creolice" nada.

Esta conclusión normativa queda además **doblemente confirmada** por los dos pares bilaterales que involucran a C8 (apartado 2): tanto C4/C8 como C7/C8 muestran, con evidencia textual directa y no inferida, que "Creole" es un efecto explicado — por el régimen laboral/consumo de la compañía en un caso, por la disputa de legitimidad soberana en el otro —, nunca una fuerza estructurante que organice su propio tramo argumental irreductible.

**Resultado de esta revisión: C8 = NO ESTRUCTURANTE**, aunque la identidad "Creole" sea, en efecto, central para el objeto general declarado del libro (identificación racial en disputa). La centralidad del *dato* "Creole" no equivale a que la *corriente* C8 (creolización como proceso, traducción, opacidad) organice el argumento — que es precisamente la distinción que la sección 11 de la instrucción exige no colapsar.

---

## 4. `FRONTERA_CONSTITUTIVA` bilateral — hipótesis, no aprobación

Dos pares muestran evidencia de mutua constitución suficiente para justificar, como hipótesis bilateral pendiente de evaluación formal por la Dirección Académica, la figura `FRONTERA_CONSTITUTIVA`:

- **C1/C7**: relación con causalidad dominante verificada en un sentido (C7 → C1, en tres episodios históricos separados: 1865, comisión Ruiz 1927, The Beach 1992) pero con una condición de posibilidad recíproca en el origen histórico del propio objeto del libro (el Reino/Reserva de la Mosquitia solo existe como entidad protegida en tanto es reconocido como gobierno "indio"). Esta es la relación que la propia sección 6 de la instrucción invita explícitamente a considerar bajo esta figura.
- **C4/C7**: el par con la evidencia más limpiamente recíproca de los seis (`RELACION_NO_JERARQUICA`, irreductibilidad SÍ), verificada en ambas direcciones causales en momentos distintos del arco narrativo. No fue solicitada explícitamente por la instrucción como candidata a esta figura, pero la evidencia hallada en el apartado 2 la sitúa, por mérito propio, como candidata al menos tan fuerte como C1/C7.

**Ninguna de las dos se aprueba aquí.** Se documentan como hipótesis bilaterales para que la Dirección Académica decida si corresponde evaluarlas formalmente bajo el protocolo vigente (Bloque 1 §4, precisado en Bloque 2 §5).

---

## 5. Reevaluación de `SINTESIS_MULTICORRIENTE` (sección 13 de la instrucción)

1. **¿Siguen sobreviviendo 4 corrientes estructurantes?** NO — C8 no supera la revisión obligatoria del apartado 3, confirmada por los dos pares bilaterales que la involucran.
2. **¿Sobreviven solo 3?** SÍ, en principio: C1, C4, C7. Pero su configuración relacional (apartado 2) no es simétrica: C4/C7 muestra reciprocidad limpia (`RELACION_NO_JERARQUICA`); C1/C4 y C1/C7 muestran, en cambio, un patrón parcial y repetido en el que C1 ocupa la posición de objeto/contenido explicado por los otros dos (mecanismos), sin llegar a una subordinación limpia en ninguno de los dos casos (`RELACION_MIXTA` y `C7 > C1` con matización constitutiva, respectivamente).
3. **¿Alguna puede reducirse a secundaria?** No de forma limpia. C1 muestra la prueba de retirada positiva documentada ya en la lectura original (apartado 18 de ese documento): retirarla vacía al libro de la mitad de su objeto declarado (identificación *india*, no solo racial en general), y organiza por sí sola un tramo argumental propio extenso e irreductible (cap. 2 completo, comisión Ruiz, El Cocal). La asimetría funcional documentada en el apartado 2 (C1 como objeto explicado más que como mecanismo explicativo) es un hallazgo real y reportable, pero no equivale, por sí sola, a que C1 no organice un tramo propio del argumento — condición mínima para "estructurante" que C1 sí cumple, a diferencia de C8.
4. **¿Emerge una principal?** No de forma unívoca, pero el patrón relacional sugiere una configuración más precisa que la de "cuatro corrientes simétricas": C4 y C7 funcionan como los dos mecanismos explicativos recíprocos del libro (económico y político-soberano), mientras C1 funciona predominantemente como el contenido/objeto sobre el que ambos mecanismos actúan — sin que esto autorice a degradar C1 a secundaria (punto 3).
5. **¿La ausencia de jerarquía pertenece realmente al argumento?** Parcialmente. Entre C4 y C7: sí, de forma verificada y limpia. Entre C1 y los otros dos: no de forma limpia — hay una asimetría funcional real, aunque no resuelta del todo por la evidencia disponible.
6. **¿La configuración es de mutua constitución o de una cadena causal jerarquizable?** Ninguna de las dos de forma pura: es una configuración mixta, con un núcleo recíproco (C4/C7) y una periferia parcialmente jerarquizada (C1 frente a ambos).

**Resultado, en los términos permitidos por la instrucción:**

- Para la hipótesis original de cuatro corrientes (C1+C4+C7+C8): **`SINTESIS_MULTICORRIENTE` = NO** — la condición mínima de que las cuatro corrientes tengan función organizadora ya no se sostiene, porque C8 no la tiene.
- Para la configuración reconfigurada de tres corrientes (C1+C4+C7): **`SINTESIS_MULTICORRIENTE` = TODAVÍA NO DETERMINABLE** — la evidencia reunida en esta ampliación no permite decidir limpiamente entre una arquitectura de tres corrientes simétricas, una de "dos mecanismos recíprocos + un objeto estructurante," o alguna forma de principal/secundaria que la propia asimetría funcional documentada podría llegar a sostener con una lectura adicional dirigida.

**No se aprueba ninguna de las dos figuras.** Esta decisión corresponde exclusivamente a la Dirección Académica.

---

## 6. Corrientes que siguen siendo estructurantes

C1, C4, C7 — las tres superan la prueba de retirada y organizan tramos propios y extensos del argumento (apartados 20, 23, 26 de la lectura original; confirmado y matizado por los seis pares del apartado 2 de esta ampliación).

## 7. Corrientes degradadas

**C8 — degradada de "posible estructurante" (hipótesis de la lectura anterior) a NO ESTRUCTURANTE**, por las tres líneas de evidencia convergentes documentadas en el apartado 3 y en los pares C4/C8 y C7/C8 del apartado 2. La identidad "Creole" permanece como dato central del objeto general del libro, pero no como corriente organizadora en el sentido normativo de C8.

## 8. Principal posible

No emerge de forma unívoca. La evidencia de esta ampliación matiza, sin resolver, la pregunta: C4 y C7 muestran mayor peso como mecanismos explicativos recíprocos; C1 muestra mayor peso como objeto/contenido irreductible del argumento. Ninguna configuración de "principal única" queda respaldada de forma limpia por el texto (ver apartado 5, puntos 3–4).

## 9. Secundarias posibles

Ninguna de las tres corrientes supervivientes reúne, con la evidencia actual, las condiciones para degradarse a secundaria sin pérdida argumental sustancial (ver apartado 5, punto 3). No corresponde declarar secundarias en este momento.

## 10. `FRONTERA_CONSTITUTIVA` bilateral, como hipótesis

Dos candidatas, ninguna aprobada: **C1/C7** (la que la instrucción invita a considerar explícitamente) y **C4/C7** (hallazgo adicional de esta ampliación, con evidencia relacional más limpia). Ver apartado 4.

## 11. `SINTESIS_MULTICORRIENTE`

Ver apartado 5: **NO** para la hipótesis original de cuatro corrientes; **TODAVÍA NO DETERMINABLE** para una eventual reconfiguración de tres. Ninguna se aprueba.

## 12. Hasta 3 arquitecturas académicas finales

1. **C1 + C4 + C7, sin C8** (C8 degradada a NO ESTRUCTURANTE / dato contextual dentro de C1 y C4): tres corrientes co-necesarias, con C4/C7 en relación recíproca no jerárquica y C1 en posición parcialmente subordinada como objeto/contenido explicado por ambas — configuración de "síntesis de tres" pendiente de resolución sobre el estatus final de C1.
2. **C4 + C7 como corrientes co-principales recíprocas** (confirmado por el par C4/C7), **con C1 como corriente estructural necesaria pero funcionalmente subordinada** en los episodios examinados (comisión Ruiz, protocolo de 1865, The Beach) — una figura de "dos principales + una corriente-objeto," no contemplada aún de forma explícita por el protocolo vigente, que solo prevé principal única + hasta dos secundarias.
3. **C1 como corriente-objeto irreductible, con C4 y C7 como corrientes-mecanismo igualmente necesarias y no jerarquizables entre sí** — variante de énfasis de la arquitectura anterior, empíricamente equivalente en los datos reunidos, que evita forzar la pregunta de cuál corriente es "principal" y describe en cambio una función estructural distinta para cada una de las tres.

Estas tres arquitecturas reflejan la misma evidencia relacional desde énfasis distintos; no son mutuamente excluyentes en términos de qué datos las sostienen, sino en términos de qué figura protocolar terminaría adoptando la Dirección Académica.

---

## 13. Pregunta decisoria para Dirección Académica

Con la evidencia bilateral reunida —C8 degradada a NO ESTRUCTURANTE por tres líneas convergentes de evidencia (prueba normativa directa, subordinación causal a C4, subordinación causal a C7); C4/C7 en relación recíproca no jerárquica confirmada; C1 en posición parcialmente subordinada mas no reducible a secundaria frente a ambas—, ¿autoriza la Dirección Académica: **(a)** declarar formalmente C8 como NO ESTRUCTURANTE para `pinedashipwrecked`, dejando la identidad "Creole" registrada como dato central del objeto pero fuera de la clasificación por corrientes; **(b)** evaluar formalmente `FRONTERA_CONSTITUTIVA` como hipótesis bilateral para C1/C7, para C4/C7, o para ambas antes de decidir sobre la arquitectura final; **(c)** adoptar alguna de las tres arquitecturas de tres corrientes propuestas en el apartado 12, o una distinta que la Dirección Académica prefiera formular; o **(d)** instruir una lectura adicional dirigida de la porción aún no leída de los capítulos 3–5 (aproximadamente un tercio del contenido etnográfico de esos capítulos permanece sin leer) específicamente orientada a resolver si C1 puede reducirse a secundaria frente a C4/C7 o si, por el contrario, sostiene con la misma fuerza un tramo irreductible propio?

---

## 14. Documentos previos intactos, corpus intacto, git limpio

**No se ejecutó ninguna operación de escritura en git en ningún momento de esta tarea** (ni `git add`, ni `git commit`, ni `git push`, ni `git reset`, ni `git restore`, ni `git checkout`, ni `git stash`). Auditoría final, ejecutada justo antes de escribir el archivo autorizado por fuera de git (por eso todavía no muestra el sexto `??` en esta captura):

```
$ git status --short
?? PensamientoCaribeCuraduriaDigital.docx
?? data/agua-de-por-medio/atlas-2/documentos/expediente-evidencia-c7.md
?? data/agua-de-por-medio/atlas-2/documentos/ficha-decision-c4.md
?? data/agua-de-por-medio/atlas-2/documentos/lectura-pinedashipwrecked-p2-etapa-2-3f.md
?? data/agua-de-por-medio/atlas-2/documentos/lectura-womenancestors-p2-etapa-2-3f.md
warning: unable to unlink '.git/index.lock': Operation not permitted
$ git diff --stat
(sin salida)
$ git diff --name-only
(sin salida)
$ ls -la .git/index.lock
-rw------- 1 ... 0 ago 22 12:32 .git/index.lock
```

Los cinco archivos `??` previos siguen exactamente iguales; ninguno fue modificado. El `.git/index.lock` reapareció como efecto colateral de los propios comandos de lectura de esta tarea (ver nota de transparencia en el apartado 0) — no impide que `git status`/`git diff` sigan reportando correctamente, pero sí bloqueará cualquier futura operación de escritura hasta que Rob lo borre manualmente desde su Terminal. Una vez escrito el sexto archivo (`ampliacion-pinedashipwrecked-relaciones-c1-c4-c7-c8-p2-etapa-2-3f.md`, por fuera de git, vía el puente al Mac), el estado coincidirá exactamente con el "status final esperado" de la sección 18 de la instrucción (seis archivos `??`, el nuevo siendo el único cambio provocado por esta tarea), salvo por la incidencia del candado, ya reportada. `lectura-pinedashipwrecked-p2-etapa-2-3f.md` no fue modificado — no se abrió con intención de editar en ningún momento, solo se leyó para recuperar su contenido como insumo. `lectura-womenancestors-p2-etapa-2-3f.md`, `expediente-evidencia-c7.md`, `ficha-decision-c4.md`, `PensamientoCaribeCuraduriaDigital.docx`, `datos-atlas.json`, `cola-lectura-pendiente-atlas-2.md`, `matriz-fronteras-c1-c10.md`, `marco-academico-consolidado-atlas-2.md`, `catalogos-atlas-2.json` y `catalogo-fenomenos.json` no fueron tocados; `marco-academico-consolidado-atlas-2.md` se consultó (vía `git show`, solo lectura) únicamente para verificar las definiciones normativas exactas de C1, C4, C7 y C8 citadas en este documento. No se avanzó a `schwartz_seaofstorms`, a otro caso de P2, ni a P3/Etapa 2.4.

---

## 15. Cumplimiento de la entrega (sección 19 de la instrucción, 25 puntos)

1. Páginas adicionales leídas — apartado 1.
2. C1/C4 — apartado 2.
3. C1/C7 — apartado 2.
4. C1/C8 — apartado 2.
5. C4/C7 — apartado 2.
6. C4/C8 — apartado 2.
7. C7/C8 — apartado 2.
8. Revisión especial de C8 — apartado 3.
9. Corrientes que siguen siendo estructurantes — apartado 6.
10. Corrientes degradadas — apartado 7.
11. Principal posible, si emerge — apartado 8 (no emerge de forma unívoca).
12. Secundarias posibles — apartado 9 (ninguna).
13. `FRONTERA_CONSTITUTIVA` bilateral, si alguna queda como hipótesis — apartados 4 y 10.
14. `SINTESIS_MULTICORRIENTE`: sí/no/todavía no determinable — apartados 5 y 11.
15. Hasta 3 arquitecturas académicas finales — apartado 12.
16. Pregunta decisoria para Dirección Académica — apartado 13.
17. Ninguna decisión ejecutada — confirmado: este documento no clasifica, no aprueba ninguna figura, no cierra ninguna pregunta.
18. Documentos previos intactos — apartado 14.
19. `womenancestors` intacto — apartado 14 (no se leyó ni se tocó).
20. `PensamientoCaribeCuraduriaDigital.docx` intacto — apartado 14 (no se tocó).
21. Corpus intacto — apartado 14 (`datos-atlas.json`, catálogos y matriz de fronteras no modificados).
22. Status final — apartado 14.
23. Sin `add` — confirmado.
24. Sin `commit` — confirmado.
25. Sin `push` — confirmado.

**Cumplimiento de la prohibición final (sección 20):** no se emitió decisión académica; no se aprobó `SINTESIS_MULTICORRIENTE`; no se modificó la lectura original; no se implementó nada en corpus, catálogos o lotes; no se avanzó a `schwartz_seaofstorms`; no se avanzó a otro caso de P2. Esta tarea se detiene aquí, en la ampliación probatoria, tal como exige la instrucción.
