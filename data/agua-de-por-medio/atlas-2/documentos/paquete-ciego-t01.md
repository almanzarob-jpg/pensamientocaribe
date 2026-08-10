# Atlas 2.0 — paquete ciego para Claude: calibración T01 (24 entradas)

## Propósito

Actúa como revisor documental independiente y ciego de T01. Evalúa las 24 entradas siguientes sin solicitar, presuponer ni reconstruir una respuesta previa de ChatGPT. Tu dictamen no constituye aprobación académica ni autoriza cambios en el corpus.

## Reglas compartidas

1. Conserva `id` y `tr_original` literalmente.
2. Verifica primero si cada entrada representa una obra, varias obras, una traducción o una edición concreta.
3. No infieras lengua, orilla o territorio por nacionalidad, sede editorial o topónimo aislado.
4. Distingue:
   - `lengua_publicacion`: lengua de la edición efectivamente documentada;
   - `orilla_produccion`: lugar con función documentada de publicación, archivo, circulación o producción intelectual;
   - `territorio_estudiado`: caso o espacio efectivamente delimitado por título, resumen, índice o introducción;
   - `alcance_comparativo`: método o escala explícita, no la mera presencia de la palabra «comparado».
5. Usa `null` cuando la evidencia no alcance. No completes por plausibilidad.
6. Toda afirmación debe indicar fuente y página, sección o zona localizable.
7. No completes decisión humana, QA, aprobación ni `listo_para_integrar`.
8. No abras ni consultes el libro de trabajo con los dictámenes de ChatGPT.

## Escala de riesgo

- `A`: una obra/edición identificada; dato factual localizable; sin mezcla de funciones.
- `B`: trayectorias, traducciones, varias lenguas/territorios o función editorial ambigua.
- `C`: entrada compuesta o duplicada, comparación interpretativa, metadato contradictorio o fuente insuficiente.

## Salida obligatoria

Devuelve **un único arreglo JSON válido con 24 objetos**, en el mismo orden y sin texto antes ni después. Cada objeto debe tener exactamente estas claves:

```json
{
  "id": "",
  "riesgo_propuesto": "A|B|C",
  "fuente_consultada": [],
  "lengua_publicacion": null,
  "orilla_produccion": null,
  "territorio_estudiado": null,
  "alcance_comparativo": null,
  "fundamento": "",
  "pagina_o_seccion": "",
  "campos_no_verificables": [],
  "confianza": "alta|media|baja",
  "alertas": []
}
```

Si una entrada agrupa más de una obra o edición, no inventes un valor consolidado. Describe la incidencia en `alertas`, marca como no verificables los campos que dependan de resolverla y asigna el riesgo que corresponda.

## Archivos y fuentes

Para `monahan`, adjuntar también el PDF **Michael Monahan - Creolizing Practices of Freedom_ Recognition and Dissonance (Creolizing the Canon)-Rowman & Littlefield Publishers (2022).pdf**. Las demás fuentes son accesibles mediante los enlaces consignados.

## Entradas

```json
[
  {
    "orden": 1,
    "id": "mintz",
    "titulo": "Caribbean Transformations / Sweetness and Power",
    "autoria": "Sidney W. Mintz",
    "lote": "P00",
    "tr_original": "anglófono (EE.UU.)",
    "fuentes": [
      "https://sidneymintz.net/sugar.php",
      "https://www.penguinrandomhouse.com/books/322123/sweetness-and-power-by-sidney-w-mintz/"
    ],
    "edicion_o_alcance_documentado": "La segunda fuente corresponde a Sweetness and Power; verificar por separado la identidad y edición de Caribbean Transformations."
  },
  {
    "orden": 2,
    "id": "trouillot",
    "titulo": "The Caribbean Region: An Open Frontier",
    "autoria": "Michel-Rolph Trouillot",
    "lote": "C04",
    "tr_original": "francófono (Haití)",
    "fuentes": [
      "https://www.annualreviews.org/content/journals/10.1146/annurev.an.21.100192.000315"
    ],
    "edicion_o_alcance_documentado": "Annual Review of Anthropology 21 (1992), pp. 19–42."
  },
  {
    "orden": 3,
    "id": "totumo",
    "titulo": "Los acuerdos y la idealización del palenque en la provincia de Cartagena: el caso del Totumo (1714-1767)",
    "autoria": "Dolcey Romero Jaramillo",
    "lote": "P00",
    "tr_original": "hispano (Colombia)",
    "fuentes": [
      "https://revistas.uniatlantico.edu.co/index.php/Historia_Caribe/article/view/2403"
    ],
    "edicion_o_alcance_documentado": "Historia Caribe 15(37), 2020, pp. 215–247."
  },
  {
    "orden": 4,
    "id": "glissant",
    "titulo": "Poétique de la Relation / Le discours antillais",
    "autoria": "Édouard Glissant",
    "lote": "S01",
    "tr_original": "francófono (Martinica)",
    "fuentes": [
      "https://press.umich.edu/Books/P/Poetics-of-Relation"
    ],
    "edicion_o_alcance_documentado": "La fuente corresponde a la traducción inglesa de Poétique de la Relation; Le discours antillais no está fijado por esta ficha."
  },
  {
    "orden": 5,
    "id": "brathwaite",
    "titulo": "Nation Language / Tidalectics",
    "autoria": "Kamau Brathwaite",
    "lote": "S01",
    "tr_original": "anglófono (Barbados)",
    "fuentes": [
      "https://books.google.com/books/about/History_of_the_Voice.html?id=AvVZAAAAMAAJ"
    ],
    "edicion_o_alcance_documentado": "El catálogo corresponde a History of the Voice (1984); determinar si los dos elementos del título de entrada son obras, conceptos u otra unidad."
  },
  {
    "orden": 6,
    "id": "allen_dikimanera",
    "titulo": "Di ki manera? A Social History of Afro-Curaçaoans, 1863-1917",
    "autoria": "Rose Mary Allen",
    "lote": "B03",
    "tr_original": "neerlandófono (Curazao)",
    "fuentes": [
      "https://www.swpbook.com/boeken/3/antillen-en-caribbean/966/di-ki-manera",
      "https://dspace.library.uu.nl/bitstreams/e5fb7e89-d983-4bab-9afa-7f9e1bbc7a45/download"
    ],
    "edicion_o_alcance_documentado": "SWP Publishers, 2007; ficha editorial y tesis doctoral."
  },
  {
    "orden": 7,
    "id": "price",
    "titulo": "Maroon Societies",
    "autoria": "Richard Price (ed.)",
    "lote": "P00",
    "tr_original": "anglófono (EE.UU./Surinam)",
    "fuentes": [
      "https://www.penguinrandomhouse.com/books/134035/maroon-societies-by-richard-price/"
    ],
    "edicion_o_alcance_documentado": "Ficha editorial de Maroon Societies."
  },
  {
    "orden": 8,
    "id": "bonilla",
    "titulo": "Non-Sovereign Futures",
    "autoria": "Yarimar Bonilla",
    "lote": "C02",
    "tr_original": "francófono/anglófono (Guadalupe–PR)",
    "fuentes": [
      "https://press.uchicago.edu/ucp/books/book/chicago/N/bo21165284.html"
    ],
    "edicion_o_alcance_documentado": "University of Chicago Press, 2015."
  },
  {
    "orden": 9,
    "id": "olwigstjohn",
    "titulo": "Cultural Adaptation and Resistance on St. John",
    "autoria": "Karen Fog Olwig",
    "lote": "B02",
    "tr_original": "anglófono (hoy EE.UU., antes colonia danesa)",
    "fuentes": [
      "https://researchprofiles.ku.dk/en/persons/trw312-trw312/",
      "https://catalogue.nla.gov.au/catalog/1648522"
    ],
    "edicion_o_alcance_documentado": "University Press of Florida, 1985; perfil universitario y catálogo nacional."
  },
  {
    "orden": 10,
    "id": "mamalola",
    "titulo": "Mama Lola: A Vodou Priestess in Brooklyn",
    "autoria": "Karen McCarthy Brown",
    "lote": "B05",
    "tr_original": "anglófono (EE.UU., diáspora en Brooklyn)",
    "fuentes": [
      "https://www.ucpress.edu/book/9780520268104/mama-lola"
    ],
    "edicion_o_alcance_documentado": "University of California Press, tercera edición, 2011."
  },
  {
    "orden": 11,
    "id": "klein_battleparadise",
    "titulo": "The Battle for Paradise: Puerto Rico Takes on the Disaster Capitalists",
    "autoria": "Naomi Klein",
    "lote": "A02",
    "tr_original": "anglófono (Canadá) / hispanófono (Puerto Rico)",
    "fuentes": [
      "https://www.haymarketbooks.org/books/1235-the-battle-for-paradise"
    ],
    "edicion_o_alcance_documentado": "Haymarket Books, 2018."
  },
  {
    "orden": 12,
    "id": "zips_nannysasafo",
    "titulo": "Nanny's Asafo Warriors: The Jamaican Maroons' African Experience",
    "autoria": "Werner Zips",
    "lote": "B02",
    "tr_original": "anglófono (Jamaica) / alemán (Austria)",
    "fuentes": [
      "https://ianrandlepublishers.com/product/nannys-asafo-warriors-the-jamaican-maroons-african-experience/"
    ],
    "edicion_o_alcance_documentado": "Ian Randle Publishers, traducción inglesa, 2011."
  },
  {
    "orden": 13,
    "id": "monahan",
    "titulo": "Creolizing Practices of Freedom: Recognition and Dissonance / The Creolizing Subject: Race, Reason, and the Politics of Purity",
    "autoria": "Michael Monahan",
    "lote": "S01",
    "tr_original": "comparado (filosofía afrocaribe)",
    "fuentes": [
      "PDF adjunto: Michael Monahan - Creolizing Practices of Freedom_ Recognition and Dissonance (Creolizing the Canon)-Rowman & Littlefield Publishers (2022).pdf",
      "https://fordhampress.com/the-creolizing-subject-hb-9780823234493.html"
    ],
    "edicion_o_alcance_documentado": "Libro completo de Rowman & Littlefield con fecha editorial 2023 y ficha de Fordham University Press para el libro de 2011."
  },
  {
    "orden": 14,
    "id": "araujo",
    "titulo": "Reparations for Slavery and the Slave Trade: A Transnational and Comparative History",
    "autoria": "Ana Lucia Araujo",
    "lote": "A03",
    "tr_original": "comparado (transnacional)",
    "fuentes": [
      "https://www.bloomsbury.com/us/reparations-for-slavery-and-the-slave-trade-9781350297661/"
    ],
    "edicion_o_alcance_documentado": "Obra original de 2017; edición revisada y ampliada de 2023."
  },
  {
    "orden": 15,
    "id": "kingisland",
    "titulo": "Island Bodies: Transgressive Sexualities in the Caribbean Imagination",
    "autoria": "Rosamond S. King",
    "lote": "B01",
    "tr_original": "comparado (anglófono/francófono/hispano/neerlandés)",
    "fuentes": [
      "https://www.jstor.org/stable/j.ctvx073vv"
    ],
    "edicion_o_alcance_documentado": "University Press of Florida, 2014; consultar índice o introducción si están disponibles."
  },
  {
    "orden": 16,
    "id": "quinnblackpower",
    "titulo": "Black Power in the Caribbean",
    "autoria": "Kate Quinn (ed.)",
    "lote": "B03",
    "tr_original": "comparado (anglófono Caribe)",
    "fuentes": [
      "https://floridapress.org/9780813048611/black-power-in-the-caribbean/"
    ],
    "edicion_o_alcance_documentado": "University Press of Florida, 2014/2015."
  },
  {
    "orden": 17,
    "id": "archipelagicthinking",
    "titulo": "Contemporary Archipelagic Thinking: Towards New Comparative Methodologies and Disciplinary Formations",
    "autoria": "Michelle Stephens y Yolanda Martínez-San Miguel (eds.)",
    "lote": "C03",
    "tr_original": "comparado (métodos comparados)",
    "fuentes": [
      "https://search.library.wisc.edu/catalog/9913884231702121"
    ],
    "edicion_o_alcance_documentado": "Rowman & Littlefield, 2020; catálogo universitario."
  },
  {
    "orden": 18,
    "id": "fischer",
    "titulo": "Modernity Disavowed: Haiti and the Cultures of Slavery in the Age of Revolution",
    "autoria": "Sibylle Fischer",
    "lote": "C04",
    "tr_original": "comparado",
    "fuentes": [
      "https://www.dukeupress.edu/modernity-disavowed"
    ],
    "edicion_o_alcance_documentado": "Duke University Press, 2004."
  },
  {
    "orden": 19,
    "id": "ortiz",
    "titulo": "Contrapunteo cubano / Transculturación",
    "autoria": "Fernando Ortiz",
    "lote": "S01",
    "tr_original": "hispano (Cuba)",
    "fuentes": [
      "https://archive.org/details/contrapunteocuba0000orti"
    ],
    "edicion_o_alcance_documentado": "Biblioteca Ayacucho, 1978; original de 1940. Verificar si Transculturación identifica una obra independiente o un concepto asociado."
  },
  {
    "orden": 20,
    "id": "benitez",
    "titulo": "La isla que se repite / The Repeating Island",
    "autoria": "Antonio Benítez Rojo",
    "lote": "S01",
    "tr_original": "hispano (Cuba)",
    "fuentes": [
      "https://books.google.com/books/about/The_Repeating_Island.html?id=yTYWZnlz0akC"
    ],
    "edicion_o_alcance_documentado": "Traducción inglesa, Duke University Press, 1996; verificar la relación con el original español."
  },
  {
    "orden": 21,
    "id": "steward",
    "titulo": "The People of Puerto Rico: A Study in Social Anthropology",
    "autoria": "Julian Steward et al. (con Mintz, Wolf, Padilla Seda)",
    "lote": "P00",
    "tr_original": "anglófono (EE.UU.)",
    "fuentes": [
      "https://ehrafworldcultures.yale.edu/cultures/su01/documents/001"
    ],
    "edicion_o_alcance_documentado": "University of Illinois Press, 1956. Comparar identidad bibliográfica con la entrada stewardpuertorico."
  },
  {
    "orden": 22,
    "id": "stewardpuertorico",
    "titulo": "The People of Puerto Rico: A Study in Social Anthropology",
    "autoria": "Julian H. Steward, Robert A. Manners, Eric R. Wolf, Elena Padilla Seda, Sidney W. Mintz, Raymond L. Scheele",
    "lote": "P00",
    "tr_original": "anglófono (EE.UU.)",
    "fuentes": [
      "https://ehrafworldcultures.yale.edu/cultures/su01/documents/001"
    ],
    "edicion_o_alcance_documentado": "University of Illinois Press, 1956. Comparar identidad bibliográfica con la entrada steward."
  },
  {
    "orden": 23,
    "id": "chande",
    "titulo": "Sonoridades del Chandé en el Caribe seco",
    "autoria": "borrador / archivo",
    "lote": "P00",
    "tr_original": "hispano (Colombia)",
    "fuentes": [
      "https://dialnet.unirioja.es/descarga/articulo/5888296.pdf"
    ],
    "edicion_o_alcance_documentado": "Artículo candidato de Cuadernos de Literatura del Caribe e Hispanoamérica 24 (2016), pp. 87–107. Verificar si corresponde realmente al título y autoría de la entrada antes de usarlo como evidencia."
  },
  {
    "orden": 24,
    "id": "reysinningcristorey",
    "titulo": "Cristo Rey, un espacio para permanecer en el tiempo",
    "autoria": "Édgar Rey Sinning",
    "lote": "C04",
    "tr_original": "hispano (Colombia)",
    "fuentes": [
      "https://www.eltiempo.com/colombia/barranquilla/este-libro-recoge-la-vida-de-los-negros-de-cristo-rey-edgar-rey-sinning-presento-en-la-filbac-trabajo-sobre-la-memoria-africana-en-santa-marta-3506657"
    ],
    "edicion_o_alcance_documentado": "Entrevista periodística al autor; menciona ediciones de 1998 y 2006 y reedición de 2025."
  }
]
```

## Comprobación antes de responder

- Deben existir 24 objetos y 24 ids únicos.
- El orden y los ids deben coincidir con la entrada.
- No debe aparecer ningún campo adicional.
- Ningún valor puede basarse solo en `tr_original`.
- Toda limitación de fuente debe quedar explícita en `campos_no_verificables` y `alertas`.
