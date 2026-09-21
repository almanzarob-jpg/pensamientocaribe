#!/usr/bin/env python3
"""Genera la capa «¿Qué Caribe?» del atlas Con el agua de por medio.

Salida: data/agua-de-por-medio/capa-caribes.json (datos abiertos) y capa-caribes.js
(lo que carga proyectos/con-el-agua-de-por-medio.html). Uso: python3 scripts/generar-capa-caribes.py

Regla de la capa: cada estado de un lugar sale de lo que dice el texto, con página.
Donde el texto no se pronuncia, el lugar queda sin estado; no se completa por
analogía. Las citas se cotejaron contra los ejemplares de «Pagina/Biliografia »
(pdftotext, y OCR en el caso de Meeks y Girvan 2010, que es un escaneo); solo se
corrigen errores de reconocimiento óptico, nunca la redacción.

Estados:
  dentro   el texto incluye el lugar de forma explícita o por el criterio que declara
  margen   lo incluye de forma secundaria: como contexto, como litoral, «tal vez»
  disputa  dos textos de la capa dicen cosas opuestas sobre ese lugar
  fuera    el texto lo deja fuera de forma explícita
"""
import json, datetime, pathlib

HOY = "2026-09-16"

# ---------------------------------------------------------------- lugares del atlas
ISL = ["cuba","jamaica","haiti","dominicana","puertorico","curazao","martinica","guadalupe",
       "barbados","trinidad","dominica","stjohn","nevis","antigua","granada"]
GUY = ["guyana","suriname"]
BEL = ["belize"]
CA  = ["bluefields","costarica","panama","honduras"]
COL = ["cartagena","santamarta","palenque","barranquilla","guajira","sanandres"]
MEX = ["veracruz","costachica"]
US  = ["nola"]
BR  = ["oriximina","palmaresbr"]   # nodos brasileños del corpus (lotes S20 y S21)
TODOS = ISL+GUY+BEL+CA+COL+MEX+US+BR

# ---------------------------------------------------------------- lugares que el atlas no tiene como nodo
# [lat, lng, etiqueta ES, etiqueta EN]. Los que están fuera del encuadre llevan flecha
# y se colocan en el borde, en la dirección real.
EXTRAS = {
  "bahamas":   [24.3,-76.6,"Bahamas","Bahamas"],
  "caiman":    [19.3,-81.3,"Islas Caimán","Cayman Islands"],
  "yucatan":   [20.4,-88.8,"Yucatán","Yucatán"],
  "elsalvador":[13.8,-89.2,"El Salvador","El Salvador"],
  "venezuela": [8.4,-66.2,"Venezuela","Venezuela"],
  "florida":   [27.6,-81.6,"Florida","Florida"],
  "miami":     [25.8,-80.2,"Miami","Miami"],
  "stlucia":   [13.9,-60.97,"Santa Lucía","St. Lucia"],
  "carriacou": [12.48,-61.45,"Carriacou","Carriacou"],
  "bermudas":  [31.2,-64.8,"Bermudas ↑","Bermuda ↑"],
  "sureeuu":   [31.3,-87.2,"Sur de EE. UU. ↑","US South ↑"],
  "nuevayork": [31.3,-75.0,"Nueva York ↑","New York ↑"],
  "brasil":    [3.1,-54.2,"Brasil ↘","Brazil ↘"],
  "recife":    [2.3,-59.6,"Recife ↘","Recife ↘"],
  "africa":    [15.5,-54.0,"África atlántica →","Atlantic Africa →"],
  "stthomas":  [18.34,-64.93,"Saint Thomas","St. Thomas"],
  "filadelfia":[31.3,-79.6,"Filadelfia ↑","Philadelphia ↑"],
  "guatemala": [14.4,-91.3,"Guatemala","Guatemala"],
}

# ---------------------------------------------------------------- fuentes
FUENTES = {
 "GAZ": {"ref":"Gaztambide-Géigel, A. (2006). La invención del Caribe a partir de 1898 (Las definiciones del Caribe, revisitadas). Jangwa Pana, 5(1), 1-24. Universidad del Magdalena. Versión revisada de Revista Mexicana del Caribe, 1 (1996).",
         "corto":"Gaztambide 2006", "ejemplar":True, "corpus":"gaztambideinvencion"},
 "TRO": {"ref":"Trouillot, M.-R. (2021 [1992]). The Caribbean Region: An Open Frontier in Anthropological Theory. En Y. Bonilla, G. Beckett y M. L. Mullings (eds.), Trouillot Remixed (pp. 159-180). Duke University Press. Orig. Annual Review of Anthropology, 21, 19-42.",
         "corto":"Trouillot 2021 [1992]", "ejemplar":True, "corpus":"trouillot"},
 "MIN": {"ref":"Mintz, S. W. (2014-2015 [1966]). El Caribe como área sociocultural. Op. Cit., 23, 61-100. Orig. Journal of World History, 9(4), 912-937.",
         "corto":"Mintz 1966", "ejemplar":True, "corpus":"mintzarea"},
 "SMI": {"ref":"Smith, M. G. (1965). The Plural Society in the British West Indies. University of California Press.",
         "corto":"Smith 1965", "ejemplar":True, "corpus":"mgsmithplural"},
 "BRA": {"ref":"Brathwaite, K. (2021 [1975]). Caribbean Man in Space and Time. Small Axe, 25(3), 90-. Orig. Savacou, 11/12.",
         "corto":"Brathwaite 1975", "ejemplar":True, "corpus":"brathwaitearchipelago"},
 "BEN": {"ref":"Benítez Rojo, A. (1992 [1989]). The Repeating Island: The Caribbean and the Postmodern Perspective (trad. J. Maraniss). Duke University Press.",
         "corto":"Benítez Rojo 1989", "ejemplar":True, "corpus":"benitez"},
 "GIR": {"ref":"Girvan, N. (2010). New World and Its Critics. En B. Meeks y N. Girvan (eds.), The Thought of New World: The Quest for Decolonisation. Ian Randle.",
         "corto":"Girvan 2010", "ejemplar":True, "corpus":"meeksgirvannewworld"},
 "BEC": {"ref":"Beckford, G. L. (1972). Persistent Poverty: Underdevelopment in Plantation Economies of the Third World. Oxford University Press.",
         "corto":"Beckford 1972", "ejemplar":True, "corpus":"beckfordpersistent"},
 "ABE": {"ref":"Abello Vives, A. (2015). La isla encallada: el Caribe colombiano en el archipiélago del Caribe. Siglo del Hombre / Parque Cultural del Caribe. Edición digital sin paginación: se cita por capítulo.",
         "corto":"Abello Vives 2015", "ejemplar":True, "corpus":"abello"},
 "GIR2000": {"ref":"Girvan, N. (2000). Reinterpretar al Caribe. Revista Mexicana del Caribe, 7, University of the West Indies. Copia digital de 25 páginas sin numeración impresa: se cita por página del PDF.",
         "corto":"Girvan 2000", "ejemplar":True, "corpus":"girvanreinterpretar"},
 "BAS": {"ref":"Bassi, E. (2021 [2016]). Un territorio acuoso: geografías marineras y el Gran Caribe transimperial de la Nueva Granada (trad. M. J. Montoya). Editorial Universidad del Norte / Banco de la República. Orig. An Aqueous Territory: Sailor Geographies and New Granada's Transimperial Greater Caribbean World, Duke University Press.",
         "corto":"Bassi 2021 [2016]", "ejemplar":True, "corpus":"bassiacuoso"},
 "ARC": {"ref":"Arciniegas, G. (1975 [1945]). Biografía del Caribe. Círculo de Lectores, Barcelona, con licencia de Editorial Sudamericana (ed. 1966). Orig. Editorial Sudamericana, Buenos Aires, 1945. Se cita por la paginación de la edición digital del ejemplar.",
         "corto":"Arciniegas 1945", "ejemplar":True, "corpus":None},
 "GLR": {"ref":"Glissant, É. (2017 [1990]). Poética de la Relación (trad. S. I. Sferco y A. P. Penchaszadeh; pról. M. Rebón). Universidad Nacional de Quilmes. Orig. Poétique de la Relation, Gallimard, 1990.",
         "corto":"Glissant 1990", "ejemplar":True, "corpus":"glissant"},
 "GLD": {"ref":"Glissant, É. (2010 [1981]). El discurso antillano (trad. A. M. Boadas y L. Arencibia Rodríguez). Fondo Editorial Casa de las Américas. Orig. Le Discours antillais, Seuil, 1981.",
         "corto":"Glissant 1981", "ejemplar":True, "corpus":"glissant"},
 "ATL": {"ref":"Grupo de Investigación Pensamiento Caribe (2026). Con el agua de por medio. Atlas para una antropología archipiélica. Marco conceptual.",
         "corto":"Este atlas", "ejemplar":True, "corpus":None},
}

def todos(lista, estado, nota=None, ref=None):
    return {k: {"e":estado, **({"n":nota} if nota else {}), **({"ref":ref} if ref else {})} for k in lista}

def junta(*dicts):
    out={}
    for d in dicts: out.update(d)
    return out

N = lambda es,en: {"es":es,"en":en}

# ---------------------------------------------------------------- notas que se repiten
N_SMITH_CTX = N("Fuera del campo de Smith, que se limita a las unidades británicas (p. 4), pero dentro del contexto comparativo «de Brasil a Estados Unidos» (p. 19).",
                "Outside Smith's field, restricted to the British units (p. 4), but inside the comparative context “from Brazil to the United States” (p. 19).")
N_SMITH_MID = N("Smith la agrupa entre los «Middle American states», con Colombia y Venezuela, como parte del contexto comparativo (p. 20).",
                "Smith groups it among the “Middle American states”, with Colombia and Venezuela, as comparative context (p. 20).")
N_MINTZ_CONT = N("Mintz se ocupa de las islas y «solo de forma secundaria» de las sociedades continentales (p. 65); las Guayanas entran por las migraciones asiáticas (p. 82).",
                 "Mintz deals with the islands and “only secondarily” with mainland societies (p. 65); the Guianas appear through Asian migration (p. 82).")
N_MINTZ_COL = N("Mintz no nombra la costa colombiana. Los «palenqueros» que cita son los de Cuba (p. 79) y Providencia solo aparece en una nota, por la tesis de Peter Wilson (p. 95).",
                "Mintz does not name the Colombian coast. The “palenqueros” he cites are Cuban (p. 79), and Providencia appears only in a note, via Peter Wilson's thesis (p. 95).")
N_NWG_LIT = N("Best: «muchas veces el Caribe también incluye el litoral que rodea nuestro mar» (Gaztambide, p. 19); Girvan: «all the islands and the adjacent mainland» (pp. 6-7).",
              "Best: the Caribbean “often also includes the littoral around our sea” (Gaztambide, p. 19); Girvan: “all the islands and the adjacent mainland” (pp. 6-7).")
N_BECK_BAN = N("Beckford cuenta las plantaciones bananeras de Colombia entre las economías de plantación del siglo XX (p. 112): la plantación llega a esta costa como enclave, no como ingenio esclavista.",
               "Beckford counts Colombia's banana plantations among twentieth-century plantation economies (p. 112): the plantation reaches this coast as an enclave, not as a slave sugar estate.")
N_CULT_COL = N("Gaztambide dice que partes importantes de Colombia «han sido siempre parte del Caribe» (p. 16) y funda el Caribe cultural en la plantación y la contraplantación (pp. 19-20). Abello y Bassi responden, en un capítulo escrito a cuatro manos, que en el Caribe colombiano la plantación «nunca se desarrolló» (cap. 3).",
               "Gaztambide says important parts of Colombia “have always been part of the Caribbean” (p. 16) and grounds the cultural Caribbean on plantation and counter-plantation (pp. 19-20). Abello and Bassi answer, in a co-written chapter, that in the Colombian Caribbean the plantation “never developed” (ch. 3).")

# ---------------------------------------------------------------- definiciones
DEF = []

DEF.append({
 "id":"arciniegas", "anio":1945, "autor":"Germán Arciniegas", "obra":"Biografía del Caribe",
 "apellido":N("Mar del Nuevo Mundo","Sea of the New World"),
 "forma":"area", "lectura":"ejemplar",
 "familia":{"clave":"grancaribe","fuente":"Gaztambide 2006, p. 15"},
 "criterio":N("El Caribe es un mar antes que una sociedad: el lugar donde, desde 1492, se cruzan todos los caminos y chocan los imperios. España se hace fuerte en los Andes y deja el mar como único frente. Lo delimita la navegación, y por eso entran las islas, las costas de Tierra Firme, el golfo de México y el Mississippi.",
              "The Caribbean is a sea before it is a society: the place where, from 1492, all roads cross and empires collide. Spain entrenches itself in the Andes and leaves the sea as its only front. Navigation sets its bounds, so the islands, the mainland coasts, the Gulf of Mexico and the Mississippi all come in."),
 "citas":[
   {"txt":"Cuando llegaron las naves de Colón, el Caribe pasó, de súbito, a ser cruce de todos los caminos. Por primera vez los pueblos de este hemisferio se vieron las caras. […] El Caribe empezó a ensancharse y fue el mar del Nuevo Mundo.","ref":"ARC","pag":"19"},
   {"txt":"El imperio de España en América está en la montaña, sobre la cumbre de los Andes, a donde no llegan las tentaciones del mar, ni se corre el peligro de los ingleses. […] Sólo quedó un frente de choque: el Caribe.","ref":"ARC","pag":"240"},
   {"txt":"Islas menudas, grandes continentes, pequeñas repúblicas, todos se miran en estas aguas y ponen en ellas su temor y su esperanza.","ref":"ARC","pag":"583"},
   {"txt":"«Caribe» es como decir «indio bravo». Es una palabra de guerra que cubre la floresta americana como el veneno de que se unta el aguijón de las flechas. Y así es el mar.","ref":"ARC","pag":"17","nota":N("el pasaje que cita Gaztambide (p. 15)","the passage Gaztambide quotes (p. 15)")},
 ],
 "lugares": junta(
   todos([k for k in ISL if k!="stjohn"],"dentro"),
   {"stjohn":{"e":None,"n":N("El capítulo de los daneses se ocupa de Saint Thomas (pp. 312-340); Saint John no aparece.","The chapter on the Danes deals with St. Thomas (pp. 312-340); St. John does not appear.")}},
   {"guyana":{"e":"dentro","n":N("La Guayana de Raleigh y El Dorado cierran el Libro Primero (pp. 212-236).","Raleigh's Guiana and El Dorado close Book One (pp. 212-236).")},
    "suriname":{"e":"dentro","n":N("Holanda recibe Surinam a cambio de Nueva York en la paz de Breda (p. 303).","The Netherlands receives Suriname in exchange for New York at the Peace of Breda (p. 303).")},
    "belize":{"e":"dentro","n":N("Los ingleses de Belice derrotan al filibustero Walker (pp. 478-479).","The Belize English defeat the filibuster Walker (pp. 478-479).")},
    "bluefields":{"e":"dentro","n":N("Los corsarios de Jamaica entran a Nicaragua por la costa de Mosquitos, «donde los indios se entienden con los ingleses» (p. 281).","Jamaica's privateers enter Nicaragua by the Mosquito Coast, “where the Indians get along with the English” (p. 281).")},
    "costarica":{"e":"dentro","n":N("«Costa Rica democrática», entre los que se miran en estas aguas (p. 583).","“Democratic Costa Rica”, among those who look at themselves in these waters (p. 583).")},
    "honduras":{"e":"dentro","n":N("«Honduras tantas veces oprimida» (p. 583).","“Honduras, so many times oppressed” (p. 583).")},
    "panama":{"e":"dentro","n":N("«Panamá corazón de la rosa de los mares» (p. 583). El libro termina con el canal (pp. 539-580).","“Panama, heart of the rose of the seas” (p. 583). The book ends with the canal (pp. 539-580).")},
    "cartagena":{"e":"dentro","n":N("«La llave que abre las puertas de Sudamérica» (p. 183) y «el puerto del Caribe» frente a Santa Fe, «la capital de los Andes» (p. 516). Aparece en 63 páginas y tiene capítulo propio: el sitio de Vernon y Blas de Lezo (pp. 379-390).","“The key that opens the doors of South America” (p. 183) and “the port of the Caribbean” as against Santa Fe, “the capital of the Andes” (p. 516). It appears on 63 pages and has its own chapter: the siege of Vernon and Blas de Lezo (pp. 379-390).")},
    "santamarta":{"e":"dentro","n":N("Río Hacha, Santa Marta y Cartagena son «los puntos de la costa en Tierra Firme donde España concentra su poder» (p. 183).","Río Hacha, Santa Marta and Cartagena are “the points on the Tierra Firme coast where Spain concentrates its power” (p. 183).")},
    "guajira":{"e":"dentro","n":N("Río Hacha y las perlas de la Ranchería, en las correrías de Hawkins y Drake (pp. 182-183 y 208).","Río Hacha and the pearls of La Ranchería, in the raids of Hawkins and Drake (pp. 182-183 and 208).")},
    "sanandres":{"e":"dentro","n":N("San Andrés y Providencia, colonia puritana «frente a la costa de Panamá» (pp. 256-263).","San Andrés and Providencia, a Puritan colony “off the coast of Panama” (pp. 256-263).")},
    "barranquilla":{"e":None,"n":N("No aparece en el libro.","It does not appear in the book.")},
    "palenque":{"e":None,"n":N("Los cimarrones del libro son los del istmo, aliados de Drake (pp. 190-192); los palenques de la costa colombiana no aparecen.","The book's maroons are those of the isthmus, Drake's allies (pp. 190-192); the palenques of the Colombian coast do not appear.")},
    "veracruz":{"e":"dentro","n":N("En San Juan de Ulúa el virrey destruye las naves de los contrabandistas ingleses: «un cambio de rumbo en la política europea» (p. 7).","At San Juan de Ulúa the viceroy destroys the English smugglers' ships: “a change of course in European politics” (p. 7).")},
    "costachica":{"e":None,"n":N("No aparece: el México del libro es el del golfo.","It does not appear: the book's Mexico is the Gulf's.")},
    "nola":{"e":"dentro","n":N("Un capítulo entero, «Canción de cuna del Mississippi», sigue la Luisiana francesa hasta la fundación de Nueva Orleans (pp. 345-359 y 588).","A whole chapter, “Mississippi lullaby”, follows French Louisiana to the founding of New Orleans (pp. 345-359 and 588).")}}),
 "extras":{"bahamas":{"e":"dentro","n":N("Guanahaní, donde Colón toca tierra (p. 16).","Guanahaní, where Columbus makes landfall (p. 16).")},
           "florida":{"e":"dentro","n":N("Ponce de León y la fuente de la eterna juventud (pp. 130-139).","Ponce de León and the fountain of youth (pp. 130-139).")},
           "yucatan":{"e":"dentro","n":N("«El mar Caribe y el golfo de Yucatán forman un ocho, que aprieta en la cintura el estrecho de Yucatán» (p. 107).","“The Caribbean Sea and the Gulf of Yucatán form a figure eight, pinched at the waist by the Yucatán Channel” (p. 107).")},
           "stthomas":{"e":"dentro","n":N("Capítulo de los daneses: «En Copenhague, como en Edimburgo, hay quienes sueñan sobre la rosa del mar» (pp. 312-340).","Chapter on the Danes: “In Copenhagen, as in Edinburgh, there are those who dream over the rose of the sea” (pp. 312-340).")},
           "venezuela":{"e":"dentro","n":N("«Venezuela redimida» (p. 583): Miranda y Bolívar cruzan estas aguas (pp. 489-524).","“Venezuela redeemed” (p. 583): Miranda and Bolívar cross these waters (pp. 489-524).")},
           "guatemala":{"e":"dentro","n":N("«Guatemala que viene del más remoto sueño de los indios» (p. 583).","“Guatemala, coming from the Indians' most remote dream” (p. 583).")}},
 "corpus":["gaztambideinvencion","abello"],
 "aviso":N("El ejemplar no confirma la lectura de Abello (cap. 1), que lo tiene por antillano y sin Colombia: Cartagena aparece en 63 páginas y Colombia figura entre los países que «se miran en estas aguas» (p. 583). Las páginas son las de la edición digital del ejemplar.",
           "The copy does not bear out Abello's reading (ch. 1), which takes the book as Antillean and without Colombia: Cartagena appears on 63 pages and Colombia is among the countries that “look at themselves in these waters” (p. 583). Page numbers follow the digital edition of the copy."),
})

DEF.append({
 "id":"wagley", "anio":1957, "autor":"Charles Wagley", "obra":"Plantation America: A Culture Sphere",
 "apellido":N("América de las plantaciones","Plantation America"),
 "forma":"area", "lectura":"referida",
 "familia":{"clave":"cultural","fuente":"Gaztambide 2006, p. 18"},
 "criterio":N("Tres esferas culturales para el hemisferio; el Caribe cae dentro de la que se organizó alrededor de la plantación, del sur de Estados Unidos a Brasil.",
              "Three culture spheres for the hemisphere; the Caribbean falls inside the one organised around the plantation, from the US South to Brazil."),
 "citas":[
   {"txt":"La América de las Plantaciones que quizás debió llamar Afro-América e incluye el sur de Estados Unidos, el Caribe insular, Brasil y todos aquellos lugares donde prevaleció la plantación como organización socio-económica predominante.","ref":"GAZ","pag":"18","nota":N("resumen de Gaztambide","Gaztambide's summary")},
   {"txt":"It drew from the work of historians, sociologists and cultural anthropologists, especially from Wagley's notion of ‘plantation America’.","ref":"GIR","pag":"6","nota":N("sobre el New World Group","on the New World Group")},
 ],
 "lugares": junta(todos(ISL+GUY+BEL,"dentro"), {"nola":{"e":"dentro"}},
                  todos(MEX,"fuera",N("México queda en Indo-América (Gaztambide, p. 18).","Mexico falls in Indo-America (Gaztambide, p. 18).")),
                  todos(CA,None) ),
 "extras":{"sureeuu":{"e":"dentro"},"brasil":{"e":"dentro"}},
 "corpus":["mintzarea","bestlevitt","beckfordpersistent"],
 "aviso":N("El atlas no tiene el ensayo de Wagley. Se reconstruye con Gaztambide y con la nota 4 de Mintz 1966, que lo cita.",
           "The atlas does not hold Wagley's essay. It is reconstructed from Gaztambide and from note 4 in Mintz 1966, which cites it."),
})

DEF.append({
 "id":"smith", "anio":1965, "autor":"M. G. Smith", "obra":"The Plural Society in the British West Indies",
 "apellido":N("Sociedad plural","Plural society"),
 "forma":"area", "lectura":"ejemplar",
 "familia":None,
 "criterio":N("Dos escalas. El objeto son las colonias británicas; el contexto de comparación va de Brasil a Estados Unidos. Lo que une a cada sociedad es el poder de una sección sobre las otras.",
              "Two scales. The object is the British colonies; the comparative context runs from Brazil to the United States. What holds each society together is one section's power over the rest."),
 "citas":[
   {"txt":"Despite the cultural continuities across imperial frontiers, I have also excluded the French, Dutch, American, and Latin units from my present field of interest.","ref":"SMI","pag":"4"},
   {"txt":"The historical conditions that define the area from Brazil to the United States as the broad comparative context of Caribbean studies are well known.","ref":"SMI","pag":"19"},
 ],
 "lugares": junta(
   {k:{"e":"margen","n":N_SMITH_CTX} for k in ["cuba","haiti","dominicana","puertorico","curazao","martinica","guadalupe","stjohn","suriname"]},
   todos(["jamaica","barbados","trinidad","guyana","belize","dominica","nevis","antigua","granada"],"dentro",
         N("Unidad del «British Caribbean» que Smith enumera (p. 10).","A unit of the “British Caribbean” listed by Smith (p. 10).")),
   todos(COL+CA+MEX,"margen",N_SMITH_MID),
   {"nola":{"e":"margen","n":N("El sur de Estados Unidos es una región del contexto comparativo (p. 20).","The US South is a region of the comparative context (p. 20).")}}),
 "extras":{"stlucia":{"e":"dentro"},"carriacou":{"e":"dentro","n":N("Smith le dedica un capítulo (p. 221).","Smith devotes a chapter to it (p. 221).")},
           "sureeuu":{"e":"margen"},"brasil":{"e":"margen"},"venezuela":{"e":"margen"}},
 "corpus":["mgsmithplural","rtsmithmatrifocal","wilsoncrabantics"],
})

DEF.append({
 "id":"mintz", "anio":1966, "autor":"Sidney W. Mintz", "obra":"El Caribe como área sociocultural",
 "apellido":N("Área societal","Societal area"),
 "forma":"area", "lectura":"ejemplar",
 "familia":{"clave":"cultural","fuente":"Gaztambide 2006, p. 19"},
 "criterio":N("Nueve rasgos que actúan juntos: ecología insular, exterminio indígena, plantación, estructura bipolar, campesinado, migración forzada, ausencia de ideología nacional, colonialismo prolongado e individuación. Las islas en el centro; el continente, en segundo plano.",
              "Nine features acting together: island ecology, indigenous extermination, plantation, bipolar structure, peasantry, forced migration, absence of national ideology, prolonged colonialism and individuation. The islands at the centre; the mainland in the background."),
 "citas":[
   {"txt":"Las islas del Caribe, unos cincuenta territorios habitados que se dispersan a través de 2,500 millas de mar entre la península de Yucatán y la costa norte de Sudamérica","ref":"MIN","pag":"62"},
   {"txt":"haciendo hincapié en las sociedades insulares y, solo de forma secundaria, en las continentales con las cuales comparten algunos rasgos.","ref":"MIN","pag":"65"},
   {"txt":"Probablemente sería más exacto (aunque de estilo torpe) referirse al Caribe como un “área societal”","ref":"MIN","pag":"66"},
 ],
 "lugares": junta(todos(ISL,"dentro"), todos(GUY,"margen",N_MINTZ_CONT),
                  todos(COL,None,N_MINTZ_COL)),
 "extras":{"bahamas":{"e":"dentro","n":N("Las islas «se extienden desde las Bahamas» (p. 67).","The islands “extend from the Bahamas” (p. 67).")},
           "yucatan":{"e":"margen","n":N("Límite del área, no parte de ella (p. 62).","The area's edge, not part of it (p. 62).")},
           "caiman":{"e":"dentro","n":N("Dentro del área, pero «difícilmente» parte de la «América de la plantación» (p. 64, n. 4).","Inside the area, yet “hardly” part of “Plantation America” (p. 64, n. 4).")}},
 "corpus":["mintzarea","mintz","workercane","steward"],
})

DEF.append({
 "id":"newworld", "anio":1967, "autor":"New World Group (Lloyd Best, Kari Levitt, George Beckford)", "obra":"Modelos de economía de plantación",
 "apellido":N("Economía de plantación","Plantation economy"),
 "forma":"area", "lectura":"ejemplar",
 "familia":{"clave":"cultural","fuente":"Gaztambide 2006, pp. 18-19"},
 "criterio":N("La plantación convertida en paradigma: una estructura que sobrevive a la esclavitud y a la independencia y explica economía, política, sociedad y cultura. Las islas y el continente vecino son el marco de la identidad regional.",
              "The plantation turned into a paradigm: a structure that outlives slavery and independence and explains economy, politics, society and culture. The islands and the adjacent mainland frame regional identity."),
 "citas":[
   {"txt":"What New World did was to turn the plantation into a basic paradigm for Caribbean society — a framework by which to interpret the past and the present, the economics, the politics, the society and the culture.","ref":"GIR","pag":"6"},
   {"txt":"New World's Pan-Caribbeanism, therefore, stemmed from a cosmology in which all the islands and the adjacent mainland were the frame of reference of regional identity.","ref":"GIR","pag":"6-7"},
   {"txt":"Es cierto que [el Caribe] incluye las Antillas —mayores y menores— y las Guyanas… Pero muchas veces el Caribe también incluye el litoral que rodea nuestro mar","ref":"GAZ","pag":"19","nota":N("Best 1967, citado por Gaztambide","Best 1967, quoted by Gaztambide")},
 ],
 "lugares": junta(todos(ISL+GUY+BEL,"dentro"),
                  todos(["cartagena","palenque","barranquilla","guajira","sanandres"],"margen",N_NWG_LIT),
                  {"santamarta":{"e":"margen","n":N_BECK_BAN}},
                  todos(["costarica","panama"],"margen",N_BECK_BAN),
                  {"bluefields":{"e":"margen","n":N_NWG_LIT}},
                  {"nola":{"e":"margen","n":N("Según Girvan, el pasaje de Best «sí incluía partes de Estados Unidos y de Brasil»; Gaztambide se aparta expresamente (p. 20, n. 72).","According to Girvan, Best's passage “did include parts of the United States and Brazil”; Gaztambide explicitly departs from it (p. 20, n. 72).")}}),
 "extras":{"sureeuu":{"e":"margen"},"brasil":{"e":"margen"}},
 "corpus":["meeksgirvannewworld","bestlevitt","beckfordpersistent","williamscapitalismo"],
})

DEF.append({
 "id":"bosch", "anio":1970, "autor":"Juan Bosch", "obra":"De Cristóbal Colón a Fidel Castro. El Caribe, frontera imperial",
 "apellido":N("Frontera imperial","Imperial frontier"),
 "forma":"area", "lectura":"referida",
 "familia":{"clave":"grancaribe","fuente":"Gaztambide 2006, pp. 13 y 16"},
 "criterio":N("El Caribe como el lugar donde los imperios se disputan el mundo. Lo define la disputa, así que entra toda costa que haya sido disputada.",
              "The Caribbean as the place where empires fight over the world. The dispute defines it, so every contested coast comes in."),
 "citas":[
   {"txt":"Bosch, sin embargo, no escribió sobre el mismo Caribe que Williams; mientras que éste hablaba del Caribe insular, la «frontera imperial» del primero se extendía por todo lo que hoy llamamos el Gran Caribe.","ref":"GAZ","pag":"13"},
   {"txt":"libro en el que amplía el universo Caribe a las costas de Tierra Firme, reafirma la inclusión de Colombia en él","ref":"ABE","pag":"cap. 1"},
 ],
 "lugares": junta(todos(ISL+GUY+BEL+CA+COL,"dentro"), {"veracruz":{"e":"dentro"}}),
 "extras":{"venezuela":{"e":"dentro"},"yucatan":{"e":"dentro"}},
 "corpus":["abello"],
 "aviso":N("El atlas no tiene el ejemplar de Bosch. La extensión se toma de Gaztambide y de Abello, que coinciden.",
           "The atlas does not hold Bosch's book. Its extent is taken from Gaztambide and Abello, who agree."),
})

DEF.append({
 "id":"brathwaite", "anio":1975, "autor":"Kamau Brathwaite", "obra":"Caribbean Man in Space and Time",
 "apellido":N("La unidad es submarina","The unity is submarine"),
 "forma":"fragmentos", "lectura":"ejemplar",
 "familia":None,
 "criterio":N("Fragmentos en la superficie y una placa común por debajo. Brathwaite no traza un borde: pregunta cómo estudiar a la vez los fragmentos y el todo, y avisa que el modelo de plantación puede volverse tumba de lo que quiere explicar.",
              "Fragments on the surface and a shared plate beneath. Brathwaite draws no border: he asks how to study fragments and whole at once, and warns that the plantation model may become the tomb of what it explains."),
 "citas":[
   {"txt":"hence cuba, hispaniola, puerto rico: continental outriders and the dust of the bahamas. atlantic africa pushing up the beaches of our eastern seawards","ref":"BRA","pag":"90"},
   {"txt":"subsistent plantation maroon […] the unity is submarine / breathing air, our problem is how to study the fragments/whole","ref":"BRA","pag":"90"},
   {"txt":"The plantation model, in other words, is in itself a product of the plantation and runs the hazard of becoming as much tool as tomb of the system that it seeks to understand and transform.","ref":"BRA","pag":"93"},
 ],
 "lugares": junta(todos(["cuba","haiti","dominicana","puertorico"],"dentro",N("Nombrada en el poema de apertura (p. 90).","Named in the opening poem (p. 90).")),
                  {"jamaica":{"e":"dentro","n":N("Su propia historia de la sociedad criolla y la voz de una reina kumina sostienen la «plantación interior» (pp. 95 y ss.).","His own history of creole society and the voice of a Kumina queen carry the “inner plantation” (pp. 95 ff.).")},
                   "barbados":{"e":"dentro","n":N("Por la landship, una de las formas de la «plantación interior».","Through the landship, one of the forms of the “inner plantation”.")}},
                  {"granada":{"e":"dentro","n":N("Por Carriacou, el ejemplo de lo que el modelo de plantación no explica (p. 93).","Through Carriacou, his example of what the plantation model fails to explain (p. 93).")}}),
 "extras":{"yucatan":{"e":"dentro"},"bahamas":{"e":"dentro"},"africa":{"e":"dentro"},
           "carriacou":{"e":"dentro","n":N("«Would an island like Carriacou, for instance, fit the model?» Las zonas sin plantación entran como «maroon economies» (p. 93).","“Would an island like Carriacou, for instance, fit the model?” Non-plantation areas enter as “maroon economies” (p. 93).")}},
 "corpus":["brathwaitearchipelago","brathwaite"],
})

DEF.append({
 "id":"benitez", "anio":1989, "autor":"Antonio Benítez Rojo", "obra":"La isla que se repite / The Repeating Island",
 "apellido":N("Meta-archipiélago","Meta-archipelago"),
 "forma":"sin_centro", "lectura":"ejemplar",
 "familia":{"clave":"cultural","fuente":"Gaztambide 2006, p. 20"},
 "criterio":N("Un meta-archipiélago sin borde ni centro, movido por la máquina de la plantación. Hay un núcleo de corrientes marinas del Amazonas al Mississippi, pero el Caribe se desborda hacia cualquier puerto del mundo.",
              "A meta-archipelago with neither boundary nor centre, driven by the plantation machine. There is a core of sea currents from the Amazon to the Mississippi, but the Caribbean overflows toward any port in the world."),
 "citas":[
   {"txt":"as a meta-archipelago it has the virtue of having neither a boundary nor a center. Thus the Caribbean flows outward past the limits of its own sea with a vengeance","ref":"BEN","pag":"4"},
   {"txt":"within the marine flows that extend from the mouth of the Amazon to the Mississippi delta, that bathe the north coasts of South and Central America, the old Arawak-Carib island bridge, and parts of the United States […] we would perhaps have to count New York","ref":"BEN","pag":"24-25"},
 ],
 "lugares": junta(todos(ISL+GUY+BEL+CA+COL,"dentro"), {"nola":{"e":"dentro","n":N("El delta del Mississippi es un extremo de sus corrientes (p. 24).","The Mississippi delta is one end of its currents (p. 24).")}},
                  {"veracruz":{"e":"margen","n":N("El pasaje de las corrientes no la nombra: el golfo queda entre el delta del Mississippi y las costas de Centroamérica que sí nombra.","The currents passage does not name it: the Gulf lies between the Mississippi delta and the Central American coasts it does name.")}}),
 "extras":{"miami":{"e":"dentro","n":N("Entre las candidatas a «isla que se repite» (p. 3).","Among the candidates for the “repeating island” (p. 3).")},
           "recife":{"e":"dentro","n":N("Entre las candidatas a «isla que se repite» (p. 3).","Among the candidates for the “repeating island” (p. 3).")},
           "brasil":{"e":"margen"},"nuevayork":{"e":"margen","n":N("«perhaps» (p. 25).","“perhaps” (p. 25).")}},
 "mundo":N("Bombay · Gambia · una taberna cantonesa · un pub de Bristol · un café de Manhattan (p. 4)","Bombay · Gambia · a Cantonese tavern · a Bristol pub · a Manhattan café (p. 4)"),
 "corpus":["benitez","ortiz","abello"],
})

N_GLI_ARCO = N("Por el criterio que declara: el Caribe como «un mar que contiene el estallido de tierras esparcidas en arco» (pp. 67-68).",
                "By his stated criterion: the Caribbean as “a sea that contains the burst of lands scattered in an arc” (pp. 67-68).")
N_GLI_FRANJA = N("En El discurso antillano, la presencia africana «forma una franja alrededor del mar Caribe, desde Brasil hasta Panamá hacia el Oeste (la costa)» (1981, p. 217). La creolización está «consagrada aquí al estallido de tierras que ya no son más islas» (1990, p. 68).",
                 "In Caribbean Discourse, the African presence “forms a band around the Caribbean Sea, from Brazil to Panama westward (the coast)” (1981, p. 217). Creolisation is “devoted here to the burst of lands that are no longer islands” (1990, p. 68).")
N_GLI_CARIFESTA = N("Carifesta «se inauguró en Guyana, tuvo su continuación en Jamaica y en 1982 se llevará a cabo en Barbados. Lo importante de Carifesta es el movimiento civilizacional» (1981, p. 218).",
                    "Carifesta “opened in Guyana, continued in Jamaica and in 1982 will take place in Barbados. What matters about Carifesta is the civilisational movement” (1981, p. 218).")
N_GLI_CREOL = N("Los dialectos del creol, frágiles frente al francés «en Guadalupe, en Martinica», «salvo en Haití, probablemente» (p. 103, nota).",
                "Creole dialects, fragile before French “in Guadeloupe, in Martinique”, “except in Haiti, probably” (p. 103, note).")

DEF.append({
 "id":"glissant", "anio":1990, "autor":"Édouard Glissant", "obra":"Poétique de la Relation",
 "apellido":N("Caribe-Relación","Caribbean-Relation"),
 "forma":"fragmentos", "lectura":"ejemplar",
 "familia":None,
 "criterio":N("El Caribe no constituye una unidad porque comparta una esencia, una frontera o un origen común, sino porque sus diferencias entran continuamente en relación. El archipiélago aproxima sin fundir: conecta islas, lenguas, memorias y trayectorias sin convertirlas en una totalidad homogénea. La unidad caribeña reside, así, menos en lo que sus territorios comparten que en las relaciones mediante las cuales se transforman mutuamente.",
              "The Caribbean is not a unity because it shares an essence, a border or a common origin, but because its differences keep entering into relation. The archipelago brings together without fusing: it connects islands, languages, memories and trajectories without turning them into a homogeneous totality. Caribbean unity lies less in what its territories share than in the relations through which they transform one another."),
 "citas":[
   {"txt":"En lo que me concierne, cito el Caribe como uno de los lugares del mundo donde la relación se hace más visible, una zona de destello donde parece reforzarse.","ref":"GLR","pag":"67"},
   {"txt":"En comparación con el Mediterráneo, que es un mar interior, cercado por tierras, un mar que concentra […], definiría el Caribe como un mar que contiene el estallido de tierras esparcidas en arco. Un mar que difracta.","ref":"GLR","pag":"67-68"},
   {"txt":"Pero el estallido de las culturas no es su esparcimiento, ni su disolución mutua. Es el signo violento de su reparto consentido, no impuesto.","ref":"GLR","pag":"68"},
   {"txt":"No se trata solo de consentir el derecho a la diferencia sino, antes bien, el derecho a la opacidad, que no es el encierro en una autarquía impenetrable, sino la subsistencia en una singularidad no reductible.","ref":"GLR","pag":"220"},
   {"txt":"La presencia africana, ocultada por mucho tiempo, forma una franja alrededor del mar Caribe, desde Brasil hasta Panamá hacia el Oeste (la costa), y desde Venezuela hasta Cuba hacia el Este (las islas).","ref":"GLD","pag":"217"},
 ],
 "lugares": junta(
   todos([k for k in ISL if k not in ("martinica","guadalupe","haiti","cuba","jamaica","barbados","curazao")],"dentro",N_GLI_ARCO),
   {"martinica":{"e":"dentro","n":N("Desde Martinica: «veo Santa Lucía en el horizonte. De este modo, yendo de lo próximo a lo próximo, evocando la extensión, pude realizar este arco-en-mar» (p. 238).","From Martinique: “I see Saint Lucia on the horizon. Thus, going from near to near, evoking the expanse, I was able to make this arc-in-sea” (p. 238).")}},
   todos(["guadalupe","haiti"],"dentro",N_GLI_CREOL),
   {"cuba":{"e":"dentro","n":N("Lo que se le pide a Cuba es «la voluntad de ser antillano, es decir, plurirrelatado» (1981, p. 218).","What is asked of Cuba is “the will to be Antillean, that is, multiply related” (1981, p. 218).")}},
   todos(["jamaica","barbados"],"dentro",N_GLI_CARIFESTA),
   {"curazao":{"e":"dentro","n":N("El papiamento, con base léxica hispánica «en países (Curazao) que dejaron de serlo» (p. 129, nota).","Papiamentu, with a Hispanic lexical base “in countries (Curaçao) that ceased to be so” (p. 129, note).")}},
   {"guyana":{"e":"dentro","n":N_GLI_CARIFESTA}},
   todos(["suriname","cartagena","santamarta","palenque","barranquilla","guajira","panama"],"dentro",N_GLI_FRANJA),
   {"sanandres":{"e":None,"n":N("No lo nombra: queda al oeste de las islas que van «desde Venezuela hasta Cuba» (1981, p. 217).","He does not name it: it lies west of the islands that run “from Venezuela to Cuba” (1981, p. 217).")}},
   todos(["belize","bluefields","costarica"],None,
         N("Quedan fuera de la franja que traza, que por la costa llega hasta Panamá (1981, p. 217). La «costa caribe de América Latina» aparece en la extensión del sistema de plantaciones (p. 97), sin nombrarlas.","They fall outside the band he draws, which reaches Panama along the coast (1981, p. 217). The “Caribbean coast of Latin America” appears within the spread of the plantation system (p. 97), without naming them.")),
   {"nola":{"e":None,"n":N("El sur de Estados Unidos comparte el sistema de plantaciones (p. 97), y la misma poética ocurre allí «bajo aspectos bien diferentes» (p. 68): lo lee a través de Faulkner, no como Caribe.","The US South shares the plantation system (p. 97), and the same poetics happens there “under very different guises” (p. 68): he reads it through Faulkner, not as Caribbean.")}}),
 "extras":{"stlucia":{"e":"dentro","n":N("El otro extremo del «arco-en-mar» que ve desde Martinica (p. 238).","The other end of the “arc-in-sea” he sees from Martinique (p. 238).")},
           "venezuela":{"e":"dentro","n":N("Donde empieza la franja de las islas, «desde Venezuela hasta Cuba» (1981, p. 217).","Where the island band begins, “from Venezuela to Cuba” (1981, p. 217).")},
           "brasil":{"e":"margen","n":N("La franja arranca en Brasil (1981, p. 217), pero en 1990 el Caribe y Brasil son dos conjuntos que podrían reencontrarse en «nuevas zonas de comunidad relacional» (p. 176).","The band starts in Brazil (1981, p. 217), but in 1990 the Caribbean and Brazil are two groupings that could meet again in “new zones of relational community” (p. 176).")},
           "sureeuu":{"e":"margen","n":N("«El sistema de plantaciones se extendió, con los mismos principios estructurales, en el sur de los Estados Unidos, el Caribe, la costa caribe de América Latina y el noreste de Brasil» (p. 97).","“The plantation system spread, on the same structural principles, across the US South, the Caribbean, the Caribbean coast of Latin America and north-eastern Brazil” (p. 97).")}},
 "corpus":["glissant","brathwaitearchipelago","archipelagicthinking","deere"],
 "aviso":N("Conceptos clave: Relación · archipiélago · diferencia · creolización · opacidad · pensamiento archipelágico. En la genealogía de la capa, Glissant es puente y no equivalente: Benítez Rojo ve un meta-archipiélago que se repite y desborda sus fronteras; Glissant, diferencias que entran en relación sin fundirse en una totalidad; Bassi, un espacio producido históricamente por circulaciones transimperiales; este atlas hace del fenómeno-relación su unidad de análisis, una categoría propia que no es de Glissant.",
           "Key concepts: Relation · archipelago · difference · creolisation · opacity · archipelagic thought. In the layer's genealogy Glissant is a bridge, not an equivalent: Benítez Rojo sees a meta-archipelago that repeats and overflows its borders; Glissant, differences entering into relation without fusing into a totality; Bassi, a space historically produced by trans-imperial circulation; this atlas makes the phenomenon-relation its unit of analysis, a category of its own that is not Glissant's."),
})

DEF.append({
 "id":"trouillot", "anio":1992, "autor":"Michel-Rolph Trouillot", "obra":"The Caribbean Region: An Open Frontier in Anthropological Theory",
 "apellido":N("Frontera abierta","Open frontier"),
 "forma":"relaciones", "lectura":"ejemplar",
 "familia":None,
 "criterio":N("La región no se delimita: se compara. Trouillot lee el área de Mintz como un parecido de familia y propone cruzar fronteras lingüísticas, porque lo que acerca a dos territorios no es lo que acerca a otros dos.",
              "The region is not bounded but compared. Trouillot reads Mintz's area as a family resemblance and proposes crossing language borders, because what brings two territories together is not what brings two others together."),
 "citas":[
   {"txt":"This region where boundaries are notoriously fuzzy has long been the open frontier of cultural anthropology: neither center nor periphery","ref":"TRO","pag":"159"},
   {"txt":"which I read as an exemplar of “family resemblance” à la Wittgenstein","ref":"TRO","pag":"178"},
   {"txt":"What makes Guadeloupe look like St. Lucia is not what makes Dominica look like Antigua; what makes Barbados look like Cuba is not what makes Cuba look like the Dominican Republic","ref":"TRO","pag":"179"},
 ],
 "lugares": junta(todos(["guadalupe","dominica","antigua","cuba","dominicana","haiti","martinica","curazao","puertorico"],"dentro",
                        N("Entra por las comparaciones que propone (p. 179).","Enters through the comparisons he proposes (p. 179).")),
                  todos(["jamaica","barbados","guyana","trinidad"],"dentro",
                        N("Uno de los cuatro territorios a los que el predominio del inglés reduce los estudios (p. 179).","One of the four territories to which English-language dominance narrows the field (p. 179).")),
                  {"suriname":{"e":"dentro","n":N("Por los saramaka de Richard Price (p. 165).","Through Richard Price's Saramaka (p. 165).")},
                   "stjohn":{"e":"dentro","n":N("Por la monografía de Karen Fog Olwig (p. 175).","Through Karen Fog Olwig's monograph (p. 175).")}}),
 "extras":{"stlucia":{"e":"dentro"}},
 "canon":["jamaica","barbados","guyana","trinidad"],
 "trazos":[["guadalupe","stlucia"],["dominica","antigua"],["barbados","cuba"],["cuba","dominicana"],
           ["jamaica","haiti"],["barbados","martinica"],["curazao","puertorico"]],
 "corpus":["trouillot","trouillottransformaciones","peasantscapital","mintzarea"],
})

GAZ_BASE = {"autor":"Antonio Gaztambide-Géigel","obra":"La invención del Caribe a partir de 1898","lectura":"ejemplar","forma":"area","grupo":"gaztambide","anio":1996}

DEF.append({**GAZ_BASE,
 "id":"gaz-insular",
 "apellido":N("Caribe insular o etnohistórico","Insular or ethno-historical Caribbean"),
 "familia":{"clave":"insular","fuente":"Gaztambide 2006, p. 11"},
 "criterio":N("Las Antillas y las West Indies, con las Guayanas y Belice. Es la definición más usada en la historiografía porque coincide con los usos antiguos y con las identidades de la región.",
              "The Antilles and the West Indies, plus the Guianas and Belize. The most used in historiography because it matches older usage and the region's own identities."),
 "citas":[{"txt":"El Caribe insular tiende a ser sinónimo de las Antillas y de las West Indies, por lo que suele incluir a las Guyanas y a Belize, y puede llegar tan al norte como a las Bahamas y Bermuda.","ref":"GAZ","pag":"11"}],
 "lugares": junta(todos(ISL+GUY+BEL,"dentro"), todos(COL+CA+MEX+US,"fuera"),
                  {"sanandres":{"e":None,"n":N("Isla del mar Caribe que no es antillana: Gaztambide no la menciona.","A Caribbean Sea island that is not Antillean: Gaztambide does not mention it.")}}),
 "extras":{"bahamas":{"e":"dentro"},"bermudas":{"e":"dentro"}},
 "corpus":["gaztambideinvencion","knight_genesisnacionalismo","hillmandagostinocaribbean"],
 "corpus_nota":N("Gaztambide pone a Knight y a Hillman y D'Agostino como muestras de la persistencia de esta definición (p. 13, n. 40).",
                 "Gaztambide cites Knight and Hillman & D'Agostino as evidence that this definition persists (p. 13, n. 40)."),
})
DEF.append({**GAZ_BASE,
 "id":"gaz-geopolitico",
 "apellido":N("Caribe geopolítico","Geopolitical Caribbean"),
 "familia":{"clave":"geopolitico","fuente":"Gaztambide 2006, p. 13"},
 "criterio":N("El Caribe insular más Centroamérica y Panamá: el mapa de las intervenciones militares de Estados Unidos. Es la única tendencia nacida por completo en Estados Unidos.",
              "The insular Caribbean plus Central America and Panama: the map of US military interventions. The only tendency born entirely in the United States."),
 "citas":[{"txt":"El Caribe geopolítico se refiere al Caribe insular, Centroamérica y Panamá, sobre todo después de 1945","ref":"GAZ","pag":"13"}],
 "lugares": junta(todos(ISL+GUY+BEL+CA,"dentro"), todos(COL+MEX+US,"fuera")),
 "extras":{"elsalvador":{"e":"dentro","n":N("«al cual no toca una gota de agua del Caribe» (p. 13).","“not touched by a drop of Caribbean water” (p. 13).")}},
 "corpus":["gaztambideinvencion"],
})
DEF.append({**GAZ_BASE,
 "id":"gaz-grancaribe",
 "apellido":N("Gran Caribe o Cuenca del Caribe","Greater Caribbean or Caribbean Basin"),
 "familia":{"clave":"grancaribe","fuente":"Gaztambide 2006, p. 15"},
 "criterio":N("Suma Venezuela y partes de Colombia y México. La impulsan Estados Unidos en los ochenta, pero también las élites regionales y la Asociación de Estados del Caribe.",
              "Adds Venezuela and parts of Colombia and Mexico. Pushed by the United States in the 1980s, but also by regional elites and the Association of Caribbean States."),
 "citas":[{"txt":"A los Caribes anteriores, éste añade a Venezuela y por lo menos a partes de Colombia y de México.","ref":"GAZ","pag":"15"},
          {"txt":"por lo menos partes importantes de Colombia y Venezuela han sido siempre parte del Caribe.","ref":"GAZ","pag":"16"}],
 "lugares": junta(todos(ISL+GUY+BEL+CA+COL,"dentro"), {"veracruz":{"e":"dentro"}},
                  {"costachica":{"e":None,"n":N("«Partes de México»: el texto no dice cuáles, y la Costa Chica mira al Pacífico.","“Parts of Mexico”: the text does not say which, and the Costa Chica faces the Pacific.")}}),
 "extras":{"venezuela":{"e":"dentro"},"yucatan":{"e":"dentro"},"florida":{"e":"margen","n":N("Florida «comenzó a reclamar un cierto parentesco con la Cuenca» (p. 16).","Florida “began to claim a certain kinship with the Basin” (p. 16).")}},
 "corpus":["gaztambideinvencion","abello"],
})
DEF.append({**GAZ_BASE,
 "id":"gaz-cultural",
 "apellido":N("Caribe cultural o Afro-América Central","Cultural Caribbean or Central Afro-America"),
 "familia":{"clave":"cultural","fuente":"Gaztambide 2006, p. 20"},
 "criterio":N("Las partes de la América de las plantaciones entre el sur de Estados Unidos y Brasil, sin ellos, y las diásporas. Lo común no es la plantación sino la respuesta a ella: la contraplantación.",
              "The parts of Plantation America between the US South and Brazil, excluding both, plus the diasporas. What is shared is not the plantation but the response to it: the counter-plantation."),
 "citas":[{"txt":"El Caribe cultural, por lo tanto, son todas esas partes de la América de las plantaciones que quedan entre el sur de Estados Unidos y el Brasil, pero sin incluirlos: una Afro-América Central.","ref":"GAZ","pag":"20"},
          {"txt":"La cultura caribeña es una respuesta a la sociedad de plantación, no es la cultura de la sociedad de plantación.","ref":"GAZ","pag":"19","nota":N("Jean Casimir, citado por Gaztambide","Jean Casimir, quoted by Gaztambide")}],
 "lugares": junta(todos(ISL+GUY,"dentro"), todos(["cartagena","santamarta","palenque","barranquilla","guajira"],"disputa",N_CULT_COL),
                  {"nola":{"e":"fuera","n":N("«pero sin incluirlos» (p. 20).","“but without including them” (p. 20).")}}),
 "extras":{"sureeuu":{"e":"fuera"},"brasil":{"e":"fuera"},"nuevayork":{"e":"dentro","n":N("«Puede, sin embargo, incluir las diásporas caribeñas en Estados Unidos y Europa» (p. 20).","“It may, however, include the Caribbean diasporas in the United States and Europe” (p. 20).")}},
 "corpus":["gaztambideinvencion","mintzarea","beckfordpersistent","benitez","quinterosalsa"],
 "corpus_nota":N("Gaztambide pone en esta tendencia a Mintz, Beckford, Benítez Rojo y el «cimarronaje cultural» de Quintero Rivera (pp. 19-20).",
                 "Gaztambide places Mintz, Beckford, Benítez Rojo and Quintero Rivera's “cultural marronage” in this tendency (pp. 19-20)."),
})

DEF.append({
 "id":"abello", "anio":2015, "autor":"Alberto Abello Vives", "obra":"La isla encallada",
 "apellido":N("Isla encallada","Stranded island"),
 "forma":"area", "lectura":"ejemplar",
 "familia":{"clave":"grancaribe","fuente":"Abello Vives 2015, cap. 2 (declarada por el autor)"},
 "criterio":N("El Gran Caribe como archipiélago de territorios insulares y continentales, con límites. El Caribe colombiano es una isla varada dentro de su propio país, parte del archipiélago pero fuera de la ruta de la plantación.",
              "The Greater Caribbean as an archipelago of island and mainland territories, with limits. The Colombian Caribbean is an island stranded inside its own country: part of the archipelago but off the plantation route."),
 "citas":[
   {"txt":"Asumir como Caribe la idea de un “archipiélago con territorios insulares y continentales”, al que se denomina Gran Caribe y que se agrupa en la AEC, puede que sea una definición más integral","ref":"ABE","pag":"cap. 2"},
   {"txt":"Pero si bien el Caribe supera los límites geográficos del mar Caribe, tampoco es ilimitado.","ref":"ABE","pag":"cap. 2"},
   {"txt":"este sistema se dio de manera tardía en el Caribe español y, en algunas regiones, como el Caribe colombiano, nunca se desarrolló.","ref":"ABE","pag":"cap. 3","nota":N("capítulo escrito con Ernesto Bassi","chapter co-written with Ernesto Bassi")},
 ],
 "lugares": junta(todos(ISL+GUY+BEL+CA,"dentro"),
                  todos(COL,"dentro",N("La «isla encallada»: dentro del archipiélago y rezagada dentro de Colombia (cap. 1).","The “stranded island”: inside the archipelago and lagging inside Colombia (ch. 1).")),
                  {"veracruz":{"e":"dentro","n":N("«se puede pertenecer a él, como ocurre con ciudades como Panamá, en el Pacífico, o Veracruz, en el golfo de México» (cap. 2).","One can belong to it, as Panama City on the Pacific or Veracruz on the Gulf of Mexico do (ch. 2).")},
                   "panama":{"e":"dentro","n":N("«se puede pertenecer a él, como ocurre con ciudades como Panamá, en el Pacífico» (cap. 2).","One can belong to it, “as with cities like Panama, on the Pacific” (ch. 2).")},
                   "nola":{"e":"disputa","n":N("Abello deja la pregunta abierta: incluir a Veracruz «invitaría entonces a la consideración de Nueva Orleans —y por lo tanto de EE.UU.—» (cap. 2).","Abello leaves it open: including Veracruz “would then invite considering New Orleans, and therefore the US” (ch. 2).")},
                   "costachica":{"e":None,"n":N("Abello pone el Pacífico colombiano y ecuatoriano en «otro universo cultural que dialoga con el Caribe» (cap. 2); de la Costa Chica no dice nada.","Abello places the Colombian and Ecuadorian Pacific in “another cultural universe in dialogue with the Caribbean” (ch. 2); he says nothing of the Costa Chica.")}}),
 "extras":{"venezuela":{"e":"dentro"},"elsalvador":{"e":"dentro","n":N("En el Gran Caribe de la AEC «sin tener costa en el Caribe» (cap. 2).","In the ACS Greater Caribbean “without a Caribbean coast” (ch. 2).")},
           "nuevayork":{"e":"fuera","n":N("«no faltan quienes aseguran que, por efecto de la diáspora poblacional, Nueva York haría parte del Caribe»; Abello responde que otras geografías «no son más que eso» (cap. 2).","Some claim New York belongs to the Caribbean through diaspora; Abello answers that other geographies “are no more than that” (ch. 2).")}},
 "encallada":["cartagena","santamarta","palenque","barranquilla","guajira","sanandres"],
 "corpus":["abello","muneraelfracaso","zonabananera","sangbenvolviendo"],
})

DEF.append({
 "id":"bassi", "anio":2016, "autor":"Ernesto Bassi", "obra":"Un territorio acuoso: geografías marineras y el Gran Caribe transimperial de la Nueva Granada",
 "apellido":N("Gran Caribe transimperial","Transimperial Greater Caribbean"),
 "forma":"rutas", "lectura":"ejemplar",
 "familia":{"clave":"grancaribe","fuente":"Bassi 2021, p. 5 (declarada por el autor)"},
 "criterio":N("La región la hacen los marineros al cruzar fronteras imperiales, no la plantación ni la naturaleza. El mar deja de ser un vacío entre puertos y se vuelve territorio. Sus bordes son vagos y cambian según la costa desde la que se mire: aquí, la de la Nueva Granada.",
              "Sailors make the region by crossing imperial borders; neither the plantation nor nature does. The sea stops being a void between ports and becomes territory. Its edges are vague and shift with the coast one looks from: here, New Granada's."),
 "citas":[
   {"txt":"develarlo hace visibles las interacciones humanas ocluidas por las definiciones convencionales del Caribe que tienden a crear una barrera artificial entre las costas continentales y las islas caribeñas","ref":"BAS","pag":"15"},
   {"txt":"intentar delimitar y fijar la forma del Gran Caribe transimperial se convierte en una tarea fútil","ref":"BAS","pag":"114"},
   {"txt":"puertos como Kingston, Les Cayes, Saint Thomas, Curaçao, Cartagena, La Habana e incluso Filadelfia fueron parte de un espacio geográfico más amplio e interconectado","ref":"BAS","pag":"114"},
 ],
 "lugares": junta(
   {"cartagena":{"e":"dentro","n":N("Puerto mayor de la Nueva Granada y uno de los nodos que nombra (p. 114; mapa 1.1, p. 39).","New Granada's main port and one of the nodes he names (p. 114; map 1.1, p. 39).")},
    "santamarta":{"e":"dentro","n":N("Entre los puertos neogranadinos que aparecen en primer plano desde esta costa (p. 5).","Among the New Granada ports that come to the fore from this coast (p. 5).")},
    "guajira":{"e":"dentro","n":N("Riohacha, en primer plano desde esta costa (p. 5); los wayúu, «indios marítimos» (p. 129).","Riohacha, in the foreground from this coast (p. 5); the Wayuu, “maritime Indians” (p. 129).")},
    "panama":{"e":"dentro","n":N("Portobelo (p. 5) y los cunas, «indios marítimos» (p. 129).","Portobelo (p. 5) and the Kuna, “maritime Indians” (p. 129).")},
    "barranquilla":{"e":"dentro","n":N("Por Sabanilla, puerto menor en el mapa 1.1 (p. 39). En el siglo XX, el departamento del Atlántico, con Barranquilla por capital, cierra «(casi) cien años de descaribeñización» (p. 301).","Through Sabanilla, a minor port on map 1.1 (p. 39). In the twentieth century, the Atlántico department, with Barranquilla as its capital, closes “(almost) a hundred years of de-Caribbeanisation” (p. 301).")},
    "sanandres":{"e":"dentro","n":N("En las redes comerciales del mapa 1.1 (p. 39) y en el mapa 4.1 (p. 172).","In the trade networks of map 1.1 (p. 39) and on map 4.1 (p. 172).")},
    "bluefields":{"e":"dentro","n":N("Los miskitos de la costa de Mosquitos, «indios marítimos» (p. 129); Bluefields figura en el mapa 4.1 (p. 172).","The Miskitu of the Mosquito Coast, “maritime Indians” (p. 129); Bluefields appears on map 4.1 (p. 172).")},
    "jamaica":{"e":"dentro","n":N("Kingston, que el sistema británico de puertos libres convirtió en «el centro comercial del Caribe» (p. 253).","Kingston, which the British free-port system turned into “the commercial centre of the Caribbean” (p. 253).")},
    "curazao":{"e":"dentro","n":N("Uno de los nodos que nombra (p. 114).","One of the nodes he names (p. 114).")},
    "haiti":{"e":"dentro","n":N("Les Cayes (p. 114). Antes de la revolución, Saint-Domingue rivalizaba con Jamaica como centro comercial (mapa 2.3, p. 89).","Les Cayes (p. 114). Before the revolution, Saint-Domingue rivalled Jamaica as a commercial centre (map 2.3, p. 89).")},
    "cuba":{"e":"dentro","n":N("La Habana (p. 114). Desde Cuba, la esclavitud es lo más visible de esta región; desde la Nueva Granada, no (p. 6).","Havana (p. 114). From Cuba, slavery is the most visible feature of this region; from New Granada it is not (p. 6).")},
    "dominicana":{"e":"dentro","n":N("Santo Domingo, en la ruta del capitán Juan Guardiola (mapa 2.1, p. 88).","Santo Domingo, on Captain Juan Guardiola's route (map 2.1, p. 88).")},
    "puertorico":{"e":"dentro","n":N("En la ruta del capitán Pedro Corrales (mapa 2.2, p. 89).","On Captain Pedro Corrales's route (map 2.2, p. 89).")}},
   todos(["martinica","guadalupe"],"margen",N("Solo como conexión con el Caribe francés en el mapa de los indios marítimos (mapa 3.1, p. 131).","Only as a link to the French Caribbean on the map of the maritime Indians (map 3.1, p. 131).")),
   {"belize":{"e":"margen","n":N("Asentamiento británico en el mapa 4.1 (p. 172).","A British settlement on map 4.1 (p. 172).")},
    "nola":{"e":"margen","n":N("Desde Nueva Orleans el mismo espacio pone en primer plano La Habana y Cap Français (p. 5): es otra vista de la región, no la del libro.","From New Orleans the same space brings Havana and Cap Français to the fore (p. 5): another view of the region, not the book's.")},
    "veracruz":{"e":"margen","n":N("Desde Nueva España, Veracruz es un punto nodal del Gran Caribe (p. 6); desde la Nueva Granada, no.","From New Spain, Veracruz is a nodal point of the Greater Caribbean (p. 6); from New Granada, it is not.")},
    "trinidad":{"e":None,"n":N("La «Trinidad» del mapa 2.1 es Trinidad de Cuba, no la isla (p. 88).","The “Trinidad” on map 2.1 is Trinidad de Cuba, not the island (p. 88).")}}),
 "extras":{"stthomas":{"e":"dentro","n":N("Uno de los nodos que nombra, en el Caribe «danés» (pp. 5 y 114).","One of the nodes he names, in the “Danish” Caribbean (pp. 5 and 114).")},
           "filadelfia":{"e":"dentro","n":N("«e incluso Filadelfia» (p. 114): las ciudades costeras de Estados Unidos están entre las conexiones de la costa neogranadina (p. 4).","“and even Philadelphia” (p. 114): US coastal cities are among the New Granada coast's connections (p. 4).")},
           "florida":{"e":"margen","n":N("Otro punto de vista posible sobre el Gran Caribe (p. 5).","Another possible vantage point on the Greater Caribbean (p. 5).")}},
 "trazos":[["cartagena","jamaica"],["cartagena","curazao"],["cartagena","haiti"],["cartagena","stthomas"],["cartagena","filadelfia"]],
 "corpus":["bassiacuoso","abello","perezmorales"],
 "corpus_nota":N("Bassi cita «Un Caribe por fuera de la ruta de la plantación», que escribió con Abello y es el capítulo 3 de La isla encallada (p. 16, n. 47).",
                 "Bassi cites “Un Caribe por fuera de la ruta de la plantación”, which he co-wrote with Abello and is chapter 3 of La isla encallada (p. 16, n. 47)."),
})

# ---------------------------------------------------------------- Girvan 2000: los tres Caribes de la Tabla 1
N_GIR_TESIS = N("Girvan sostiene que «no hay una definición “precisa” o consumada; el contenido depende más bien del contexto, pero ello debe especificarse con claridad cuando se emplee con propósitos descriptivos o analíticos» (p. 4). Por eso el artículo entra en la capa como tres definiciones y no como una: son tres de los siete Caribes que él mismo tabula.",
                "Girvan holds that “there is no ‘precise’ or finished definition; content depends rather on context, but this must be stated clearly when used for descriptive or analytical purposes” (p. 4). Hence the article enters the layer as three definitions rather than one: three of the seven Caribbeans he himself tabulates.")
N_GIR_ISLA = N("Isla: entra por la enumeración del criterio, «las islas, las tres Guyanas y Belice» (p. 4), y por la membresía del CCDC, que «se corresponde rígidamente con la pertenencia al Caribe insular» (p. 2).",
               "Island: it enters through the criterion's enumeration, \u201cthe islands, the three Guianas and Belize\u201d (p. 4), and through CDCC membership, which \u201ccorresponds rigidly to belonging to the insular Caribbean\u201d (p. 2).")
N_GIR_TERR_FR = N("Territorio francés de ultramar. La AEC los cuenta como «tres territorios franceses ultramarinos (no ratificados como miembros asociados)» (p. 5), y la lista del CCDC nombra los holandeses, los estadounidenses y tres dependencias británicas, no los franceses (p. 5).",
                  "French overseas territory. The ACS counts them as “three French overseas territories (not ratified as associate members)” (p. 5), and the CDCC list names the Dutch, US and three British dependencies, not the French ones (p. 5).")
N_GIR_TERR_COL = N("El artículo dice que «la mayoría de los territorios coloniales en el Caribe no pertenecen a CARICOM, CARIFORUM o a la AEC» (p. 2), pero no los nombra uno por uno: el lugar queda sin estado.",
                   "The article says that “most of the colonial territories in the Caribbean do not belong to CARICOM, CARIFORUM or the ACS” (p. 2), but does not name them one by one: the place is left without a state.")
N_GIR_CERRADA = N("Queda fuera por la enumeración cerrada del criterio —«las islas, las tres Guyanas y Belice» (p. 4)— y porque «la CCDC excluye a gran parte de los Estados de la cuenca» (p. 2).",
                  "Left out by the criterion's closed enumeration —“the islands, the three Guianas and Belize” (p. 4)— and because “the CDCC excludes a large part of the basin's states” (p. 2).")
N_GIR_CCDC_ULTRA = N("Entra por la lista del CCDC: «todos los Estados miembros pertenecen al Caribe insular únicamente, más los territorios ultramarinos de Holanda y Estados Unidos, así como tres territorios dependientes de Inglaterra» (p. 5).",
                     "Enters through the CDCC list: “all member states belong to the insular Caribbean only, plus the overseas territories of the Netherlands and the United States, as well as three British dependencies” (p. 5).")
N_GIR_CUENCA = N("Entra por la cobertura que el artículo declara para esta definición en la Tabla 1: «continente e islas», con principio «geopolítico / hegemónico» y la ICC como organismo (p. 4).",
                 "Enters through the coverage the article declares for this definition in Table 1: “mainland and islands”, with a “geopolitical / hegemonic” principle and the CBI as its carrying body (p. 4).")
N_GIR_AEC_ESTADO = N("La AEC «reúne a estados de toda la cuenca» (p. 2) y «todos los miembros son Estados de El Gran Caribe» (p. 5): el lugar entra por el Estado al que pertenece, no por sí mismo.",
                     "The ACS “brings together states from across the basin” (p. 2) and “all members are Greater Caribbean states” (p. 5): the place enters through the state it belongs to, not on its own.")

DEF.append({
 "id":"girvan-insular", "anio":2000, "autor":"Norman Girvan", "obra":"Reinterpretar al Caribe",
 "apellido":N("Caribe insular","Insular Caribbean"),
 "forma":"area", "lectura":"ejemplar",
 "familia":{"clave":"insular","fuente":"Girvan 2000, p. 4"},
 "criterio":N("Una categoría sociohistórica, no geográfica, con frontera nítida: las islas, las tres Guayanas y Belice. Es el Caribe que sostienen los organismos de cooperación —CCDC, Asociación de Economistas del Caribe— y el que deja el continente afuera. Girvan lo declara etnohistórico y lo separa expresamente de la cuenca.",
              "A sociohistorical rather than geographical category, with a sharp boundary: the islands, the three Guianas and Belize. It is the Caribbean upheld by the cooperation bodies —CDCC, Caribbean Association of Economists— and the one that leaves the mainland out. Girvan calls it ethnohistorical and separates it expressly from the basin."),
 "citas":[
   {"txt":"Desde el punto de vista conceptual resulta útil distinguir dos variantes: el Caribe insular (una categoría sociohistórica más que geográfica, que incluye las islas, las tres Guyanas y Belice) y el Gran Caribe (la cuenca).","ref":"GIR2000","pag":"4"},
   {"txt":"Insular o Isla caribeña · Etnohistórico · CCDC, AE, CCD · Islas, las tres Guyanas y Belice","ref":"GIR2000","pag":"4","nota":N("fila de la Tabla 1, «Los Caribes»","row from Table 1, “The Caribbeans”")},
   {"txt":"La CCDC excluye a gran parte de los Estados de la cuenca; la membresía se corresponde rígidamente con la pertenencia al Caribe insular.","ref":"GIR2000","pag":"2"},
   {"txt":"Todos los Estados miembros pertenecen al Caribe insular únicamente más los territorios ultramarinos de Holanda y Estados Unidos, así como tres territorios dependientes de Inglaterra.","ref":"GIR2000","pag":"5","nota":N("nota de siglas sobre el CCDC","acronym note on the CDCC")},
 ],
 "lugares": junta(
   todos([k for k in ISL if k not in ("martinica","guadalupe","puertorico","stjohn","curazao")],"dentro",N_GIR_ISLA),
   todos(["puertorico","stjohn","curazao"],"dentro",N_GIR_CCDC_ULTRA),
   todos(["martinica","guadalupe"],"margen",N_GIR_TERR_FR),
   todos(GUY,"dentro",N("«Las tres Guyanas» (p. 4): la tercera, la Guayana francesa, no es nodo de este atlas.",
                        "“The three Guianas” (p. 4): the third, French Guiana, is not a node of this atlas.")),
   todos(BEL,"dentro",N("Belice está nombrado en el criterio, letra por letra (p. 4).","Belize is named in the criterion, word for word (p. 4).")),
   {"sanandres":{"e":"margen","n":N("Es una isla de un Estado de la cuenca, y ahí se parte el criterio: Girvan define el Caribe insular como categoría sociohistórica «más que geográfica» (p. 4), y la membresía del CCDC va por Estado, no por isla (p. 2). El archipiélago queda en el borde de su propia definición.",
                                    "It is an island of a basin state, and that is where the criterion splits: Girvan defines the insular Caribbean as a sociohistorical category “rather than geographical” (p. 4), and CDCC membership goes by state, not by island (p. 2). The archipelago sits on the edge of his own definition.")}},
   todos(CA+[k for k in COL if k!="sanandres"]+MEX+US,"fuera",N_GIR_CERRADA)),
 "extras":{"bahamas":{"e":"dentro","n":N_GIR_CERRADA},
           "caiman":{"e":"dentro","n":N_GIR_CCDC_ULTRA},
           "venezuela":{"e":"fuera","n":N_GIR_CERRADA},
           "guatemala":{"e":"fuera","n":N_GIR_CERRADA},
           "yucatan":{"e":"fuera","n":N_GIR_CERRADA},
           "stthomas":{"e":"dentro","n":N_GIR_CCDC_ULTRA},
           "stlucia":{"e":"dentro"}},
 "corpus":["girvanreinterpretar","meeksgirvannewworld","gaztambideinvencion"],
 "aviso":N_GIR_TESIS,
})

DEF.append({
 "id":"girvan-aec", "anio":2000, "autor":"Norman Girvan", "obra":"Reinterpretar al Caribe",
 "apellido":N("Gran Caribe de la AEC","Greater Caribbean of the ACS"),
 "forma":"area", "lectura":"ejemplar",
 "familia":{"clave":"grancaribe","fuente":"Girvan 2000, p. 4"},
 "criterio":N("El Caribe definido por pertenencia a un organismo regional. La Asociación de Estados del Caribe reúne a los Estados de toda la cuenca y su principio no es la historia ni la cultura sino la geoeconomía y la cooperación. Es la única definición de la capa que se delimita por membresía, y la que mete al continente entero.",
              "The Caribbean defined by membership in a regional body. The Association of Caribbean States brings together the states of the whole basin, and its principle is neither history nor culture but geoeconomics and cooperation. It is the only definition in the layer bounded by membership, and the one that brings in the entire mainland."),
 "citas":[
   {"txt":"La Asociación de Estados del Caribe (AEC) reúne a estados de toda la cuenca.","ref":"GIR2000","pag":"2"},
   {"txt":"El Gran Caribe 1 (Greater Caribbean) · Continente e islas · Geoeconómico / cooperación · AEC","ref":"GIR2000","pag":"4","nota":N("fila de la Tabla 1, «Los Caribes»","row from Table 1, “The Caribbeans”")},
   {"txt":"Asociación de Estados del Caribe. Todos los miembros son Estados de El Gran Caribe, más tres territorios franceses ultramarinos (no ratificados como miembros asociados).","ref":"GIR2000","pag":"5"},
   {"txt":"la definición del Caribe podría fundamentarse en el idioma y la identidad, en la geografía, en la historia y la cultura, en la geopolítica, en la geoeconomía o incluso en la pertenencia a un organismo regional.","ref":"GIR2000","pag":"2"},
 ],
 "lugares": junta(
   todos([k for k in ISL if k not in ("martinica","guadalupe","puertorico","stjohn","curazao")],"dentro",N_GIR_AEC_ESTADO),
   todos(["martinica","guadalupe"],"margen",N_GIR_TERR_FR),
   todos(["puertorico","stjohn","curazao"],None,N_GIR_TERR_COL),
   todos(GUY+BEL+CA+COL+MEX,"dentro",N_GIR_AEC_ESTADO),
   {"nola":{"e":"fuera","n":N("«Todos los miembros son Estados de El Gran Caribe» (p. 5). Estados Unidos no lo es: es, en la otra definición de Girvan, quien nombra la cuenca desde afuera.",
                              "“All members are Greater Caribbean states” (p. 5). The United States is not one: in Girvan's other definition it is the power that names the basin from outside.")}}),
 "extras":{"venezuela":{"e":"dentro","n":N_GIR_AEC_ESTADO},
           "guatemala":{"e":"dentro","n":N_GIR_AEC_ESTADO},"elsalvador":{"e":"dentro","n":N_GIR_AEC_ESTADO},
           "yucatan":{"e":"dentro","n":N_GIR_AEC_ESTADO},"bahamas":{"e":"dentro","n":N_GIR_AEC_ESTADO},
           "caiman":{"e":None,"n":N_GIR_TERR_COL},"stlucia":{"e":"dentro","n":N_GIR_AEC_ESTADO},
           "florida":{"e":"fuera","n":N("Estados Unidos no es miembro de la AEC (p. 5).","The United States is not an ACS member (p. 5).")}},
 "corpus":["girvanreinterpretar","bassiacuoso","abello"],
 "aviso":N_GIR_TESIS,
})

DEF.append({
 "id":"girvan-cuenca", "anio":2000, "autor":"Norman Girvan", "obra":"Reinterpretar al Caribe",
 "apellido":N("La Cuenca del Caribe","The Caribbean Basin"),
 "forma":"area", "lectura":"referida",
 "familia":{"clave":"geopolitico","fuente":"Girvan 2000, p. 4"},
 "criterio":N("La definición hecha desde afuera y desde arriba. Girvan la tabula con nombre propio —«La Cuenca del Caribe (Estados Unidos)»— y principio declarado: geopolítico y hegemónico. Su linaje va de la expansión estadounidense de fines del siglo XIX a la Comisión Anglo-Americana del Caribe de 1942 y a la Iniciativa de la Cuenca del Caribe de Reagan. El nombre y su aplicación a una zona, dice, fueron invenciones de los poderes imperiales.",
              "The definition made from outside and from above. Girvan tabulates it under its own name —“The Caribbean Basin (United States)”— with a declared principle: geopolitical and hegemonic. Its lineage runs from late-nineteenth-century US expansion to the 1942 Anglo-American Caribbean Commission and Reagan's Caribbean Basin Initiative. The name and its application to a zone, he says, were inventions of the imperial powers."),
 "citas":[
   {"txt":"La Cuenca del Caribe (Estados Unidos) · Continente e islas · Geopolítico / hegemónico · ICC","ref":"GIR2000","pag":"4","nota":N("primera fila de la Tabla 1, «Los Caribes»","first row of Table 1, “The Caribbeans”")},
   {"txt":"Gaztambide-Geigel (1996, 76, 83) ha mostrado que el nombre de Caribe comenzó a ser usado para denominar a la región al final del siglo XIX, en el contexto de la expansión estadounidense hacia la frontera sur.","ref":"GIR2000","pag":"2"},
   {"txt":"Expresiones posteriores de tal denominación fueron la Comisión Anglo-Americana del Caribe (organizada en 1942, y conocida después como Comisión del Caribe) y la Iniciativa de la Cuenca del Caribe, impulsada por el presidente Ronald Reagan en la década de 1980. De modo que tanto el nombre como su aplicación posterior a una zona geográfica fueron invenciones de los poderes imperiales.","ref":"GIR2000","pag":"2"},
   {"txt":"Como muestra de resistencia, la noción de «cuenca», del poder imperial, ha sido invertida por los académicos de la región.","ref":"GIR2000","pag":"3"},
 ],
 "lugares": junta(
   todos([k for k in TODOS if k!="nola" and k not in BR],"dentro",N_GIR_CUENCA),
   todos(BR,None,N("La Tabla 1 declara la cobertura «continente e islas» de la cuenca del Caribe (p. 4); el artículo no dice nada de Brasil, que no es ribereño. El lugar queda sin estado.",
                   "Table 1 declares the coverage \u201cmainland and islands\u201d of the Caribbean basin (p. 4); the article says nothing about Brazil, which is not a riparian country. The place is left without a state.")),
   {"nola":{"e":None,"n":N("El artículo pone a Estados Unidos como quien inventa el nombre y su aplicación a una zona (p. 2), no como territorio que la denominación incluya. El lugar queda sin estado: es la sede de la definición, no su objeto.",
                           "The article casts the United States as the inventor of the name and of its application to a zone (p. 2), not as a territory the denomination includes. The place is left without a state: it is the seat of the definition, not its object.")}}),
 "extras":{"venezuela":{"e":"dentro","n":N_GIR_CUENCA},
           "guatemala":{"e":"dentro","n":N_GIR_CUENCA},"elsalvador":{"e":"dentro","n":N_GIR_CUENCA},
           "yucatan":{"e":"dentro","n":N_GIR_CUENCA},"bahamas":{"e":"dentro","n":N_GIR_CUENCA},
           "caiman":{"e":"dentro","n":N_GIR_CUENCA},"stlucia":{"e":"dentro","n":N_GIR_CUENCA},
           "florida":{"e":None,"n":N("Igual que Nueva Orleans: el artículo sitúa la frontera sur estadounidense como el lugar desde donde se nombra la cuenca (p. 2), no como parte nombrada.",
                                     "Like New Orleans: the article places the US southern frontier as the place from which the basin is named (p. 2), not as a named part.")}},
 "corpus":["girvanreinterpretar","gaztambideinvencion"],
 "aviso":N("El atlas no tiene el documento de la Iniciativa de la Cuenca del Caribe: esta definición se reconstruye con la Tabla 1 de Girvan, que declara su cobertura («continente e islas») y su principio, pero no enumera países miembros. Por eso la extensión sigue el criterio declarado y no una lista de membresía, y por eso la lectura es «referida».",
           "The atlas does not hold the Caribbean Basin Initiative document: this definition is reconstructed from Girvan's Table 1, which states its coverage (“mainland and islands”) and its principle, but does not enumerate member countries. Its extent therefore follows the declared criterion rather than a membership list, and that is why the reading is “reported”."),
})


DEF.append({
 "id":"atlas", "anio":2026, "autor":"Grupo de Investigación Pensamiento Caribe", "obra":"Con el agua de por medio",
 "apellido":N("El Caribe de este atlas","This atlas's Caribbean"),
 "forma":"trama", "lectura":"ejemplar",
 "familia":None,
 "criterio":N("La unidad es el fenómeno que cruza la cuenca, no el área. Un lugar entra cuando lo atraviesa una corriente. Por eso la Costa Chica, que casi todas las definiciones dejan fuera, está aquí.",
              "The unit is the phenomenon crossing the basin, not the area. A place enters when a current runs through it. That is why the Costa Chica, which nearly every definition leaves out, is here."),
 "citas":[{"txt":"aquí la unidad de análisis es el fenómeno que atraviesa la cuenca, no el lugar que lo aloja.","ref":"ATL","pag":"marco conceptual"}],
 "lugares": junta(todos([k for k in TODOS if k!="guajira" and k not in BR],"dentro"),
                  todos(BR,"dentro",N("Nodo propio del atlas: Oriximiná entró con el lote S20 y Palmares con el S21, por obras del corpus sobre los quilombos. Es el atlas, no un texto ajeno, quien los pone dentro.",
                                      "The atlas's own node: Oriximiná entered with batch S20 and Palmares with S21, through corpus works on the quilombos. It is the atlas, not another text, that places them inside.")),
                  {"guajira":{"e":None,"n":N("El atlas tiene el nodo, pero ninguna obra lo ancla todavía: por su propio criterio, aún no entra.","The atlas has the node, but no work anchors it yet: by its own criterion, it is not in yet.")}}),
 "extras":{},
 "corpus":[],
 "aviso":N("También es una definición, y la capa la pone al lado de las otras para que se pueda discutir.",
           "It is a definition too, and the layer sets it beside the others so it can be argued with."),
})

# ---------------------------------------------------------------- disputas entre definiciones
DISPUTAS = [
 {"a":"mintz","b":"smith","tipo":"apropiacion",
  "es":"Mintz toma de Smith «una buena generalización de relevancia histórica» (p. 64): el contexto que Smith dejó fuera de su campo se vuelve el objeto de Mintz.",
  "en":"Mintz borrows from Smith “a good generalisation of historical relevance” (p. 64): the context Smith left outside his field becomes Mintz's object.","ref":"MIN · p. 64"},
 {"a":"newworld","b":"wagley","tipo":"apropiacion",
  "es":"El New World Group toma la «plantation America» de Wagley y la convierte en paradigma económico y político (Girvan, p. 6).",
  "en":"The New World Group takes Wagley's “plantation America” and turns it into an economic and political paradigm (Girvan, p. 6).","ref":"GIR · p. 6"},
 {"a":"brathwaite","b":"newworld","tipo":"disonancia",
  "es":"Brathwaite advierte que el modelo de plantación «runs the hazard of becoming as much tool as tomb» y pregunta por Carriacou (p. 93).",
  "en":"Brathwaite warns that the plantation model “runs the hazard of becoming as much tool as tomb” and asks about Carriacou (p. 93).","ref":"BRA · p. 93"},
 {"a":"brathwaite","b":"smith","tipo":"disonancia",
  "es":"Frente a la «formulación original» de Smith, Brathwaite piensa la creolización y el pluralismo «as process rather than discovered structure» (p. 95).",
  "en":"Against Smith's “original formulation”, Brathwaite treats creolisation and pluralism “as process rather than discovered structure” (p. 95).","ref":"BRA · p. 95"},
 {"a":"benitez","b":"mintz","tipo":"apropiacion",
  "es":"Benítez Rojo concede que «one must agree with Mintz that the plantation seems indispensable» y la vuelve máquina que se repite (p. 38).",
  "en":"Benítez Rojo grants that “one must agree with Mintz that the plantation seems indispensable” and turns it into a repeating machine (p. 38).","ref":"BEN · p. 38"},
 {"a":"trouillot","b":"mintz","tipo":"apropiacion",
  "es":"Trouillot llama al área de Mintz «one of the most sophisticated conceptualizations of a sociocultural area» y la lee como parecido de familia (p. 178).",
  "en":"Trouillot calls Mintz's area “one of the most sophisticated conceptualizations of a sociocultural area” and reads it as family resemblance (p. 178).","ref":"TRO · p. 178"},
 {"a":"trouillot","b":"smith","tipo":"disonancia",
  "es":"Trouillot registra que los caribeñistas no ven «the insurmountable wall that Smith erects», pero le concede que en el Caribe «one cannot presume “culture”» (p. 164).",
  "en":"Trouillot notes that Caribbeanists fail to see “the insurmountable wall that Smith erects”, yet grants that in the Caribbean “one cannot presume ‘culture’” (p. 164).","ref":"TRO · p. 164"},
 {"a":"bosch","b":"gaz-insular","tipo":"disonancia",
  "es":"Bosch y Eric Williams publican en 1970 historias casi homónimas sobre dos Caribes distintos: la frontera imperial y el Caribe insular (Gaztambide, p. 13).",
  "en":"Bosch and Eric Williams publish almost identically titled histories in 1970 about two different Caribbeans: the imperial frontier and the insular Caribbean (Gaztambide, p. 13).","ref":"GAZ · p. 13"},
 {"a":"gaz-grancaribe","b":"arciniegas","tipo":"apropiacion",
  "es":"Gaztambide pone la Biografía de Arciniegas en los comienzos del Gran Caribe y lee en «“Caribe” es como decir “indio bravo”» una reivindicación de los aborígenes a la manera de los nacionalistas del siglo XIX (p. 15). El ejemplar le da la razón en la extensión: el libro recorre la Tierra Firme, el golfo y el Mississippi.",
  "en":"Gaztambide places Arciniegas's Biography at the beginnings of the Greater Caribbean and reads “Carib is like saying fierce Indian” as a vindication of the aborigines in the manner of nineteenth-century nationalists (p. 15). The copy bears him out on extent: the book ranges over the mainland, the Gulf and the Mississippi.","ref":"GAZ · p. 15 / ARC · p. 17"},
 {"a":"abello","b":"arciniegas","tipo":"disonancia",
  "es":"Abello lee un Caribe «antillano» en el que «Colombia no forma parte» (cap. 1). El ejemplar no lo sostiene: Cartagena, «el puerto del Caribe» (p. 516), aparece en 63 páginas, y Colombia está entre los que «se miran en estas aguas» (p. 583). Lo que Arciniegas sí ve es la espalda andina: el imperio español «está en la montaña» y deja el mar como «frente de choque» (p. 240). Esa imagen no queda lejos de la isla encallada.",
  "en":"Abello reads an “Antillean” Caribbean of which “Colombia is not part” (ch. 1). The copy does not bear this out: Cartagena, “the port of the Caribbean” (p. 516), appears on 63 pages, and Colombia is among those who “look at themselves in these waters” (p. 583). What Arciniegas does see is the Andean back turned to the sea: the Spanish empire “is in the mountains” and leaves the sea as its “front of collision” (p. 240). That image is not far from the stranded island.","ref":"ABE · cap. 1 / ARC · pp. 240, 516, 583"},
 {"a":"abello","b":"gaz-cultural","tipo":"disonancia",
  "es":"El Caribe cultural descansa en la plantación y la contraplantación; Abello y Bassi, en un capítulo escrito a cuatro manos, muestran que en el Caribe colombiano la plantación azucarera nunca se desarrolló (cap. 3).",
  "en":"The cultural Caribbean rests on plantation and counter-plantation; Abello and Bassi, in a co-written chapter, show the sugar plantation never developed in the Colombian Caribbean (ch. 3).","ref":"ABE · cap. 3"},
 {"a":"abello","b":"benitez","tipo":"apropiacion",
  "es":"Abello toma de Benítez la imagen del archipiélago y la del título, pero pregunta si la máquina de la plantación es de verdad lo que unifica al Caribe (cap. 2).",
  "en":"Abello takes Benítez's archipelago and his own title's image, but asks whether the plantation machine really unifies the Caribbean (ch. 2).","ref":"ABE · cap. 2"},
 {"a":"newworld","b":"gaz-cultural","tipo":"disonancia",
  "es":"Según Girvan, Best incluía partes de Estados Unidos y Brasil; Gaztambide se aparta: eso «sería la totalidad de Afro-América» (p. 20, n. 72).",
  "en":"According to Girvan, Best included parts of the US and Brazil; Gaztambide departs: that “would be the whole of Afro-America” (p. 20, n. 72).","ref":"GAZ · p. 20, n. 72"},
 {"a":"bassi","b":"mintz","tipo":"disonancia",
  "es":"Bassi retoma la «economía de tierras bajas, subtropical e insular» con que Mintz caracteriza el área y objeta que esa definición deja sin lugar a las costas continentales (p. 16).",
  "en":"Bassi takes up the “lowland, subtropical, insular economy” by which Mintz characterises the area and objects that this definition leaves no room for the mainland coasts (p. 16).","ref":"BAS · p. 16"},
 {"a":"bassi","b":"benitez","tipo":"disonancia",
  "es":"Bassi pone a Benítez Rojo entre quienes definen el Caribe por la plantación y dejan fuera las costas continentales (p. 16). Pero las corrientes del meta-archipiélago bañan «the north coasts of South and Central America» (Benítez, p. 24): la objeción alcanza a Mintz más que a Benítez.",
  "en":"Bassi places Benítez Rojo among those who define the Caribbean by the plantation and leave out the mainland coasts (p. 16). Yet the meta-archipelago's currents bathe “the north coasts of South and Central America” (Benítez, p. 24): the objection hits Mintz more than Benítez.","ref":"BAS · p. 16 / BEN · p. 24"},
 {"a":"abello","b":"bassi","tipo":"apropiacion",
  "es":"Abello toma de la tesis doctoral de Bassi (2012), origen de este libro, la pregunta por el papel de la Nueva Granada en el Gran Caribe, que según él «abre un nuevo momento en los estudios colombianos sobre el Caribe» (cap. 1). Los dos firman juntos el capítulo 3 de La isla encallada.",
  "en":"Abello takes from Bassi's 2012 dissertation, the origin of this book, the question of New Granada's role in the Greater Caribbean, which in his words “opens a new moment in Colombian studies of the Caribbean” (ch. 1). The two co-wrote chapter 3 of La isla encallada.","ref":"ABE · cap. 1"},
 {"a":"glissant","b":"brathwaite","tipo":"apropiacion",
  "es":"Glissant abre Poética de la Relación con «The unity is sub-marine» de Brathwaite como epígrafe, y ya lo había glosado en El discurso antillano: «Raíces submarinas: es decir, derivadas, no implantadas con un único mástil en un único limo, sino prolongadas en todas las direcciones de nuestro universo por su red de ramas» (1981, p. 128). La unidad submarina se vuelve raíz de la Relación.",
  "en":"Glissant opens Poetics of Relation with Brathwaite's “The unity is sub-marine” as epigraph, and had already glossed it in Caribbean Discourse: “Submarine roots: that is, derived, not planted with a single mast in a single silt, but extended in every direction of our universe through their network of branches” (1981, p. 128). The submarine unity becomes the root of Relation.","ref":"GLR · epígrafe / GLD · p. 128"},
]

DISPUTAS += [
 {"a":"girvan-cuenca","b":"gaz-geopolitico","tipo":"apropiacion",
  "es":"Girvan toma de Gaztambide la tesis del origen imperial del nombre —«el nombre de Caribe comenzó a ser usado… en el contexto de la expansión estadounidense»— y la lleva hasta la Iniciativa de Reagan (Gaztambide 1996, pp. 76 y 83, citado en p. 2).",
  "en":"Girvan takes from Gaztambide the thesis of the name's imperial origin —“the name Caribbean began to be used… in the context of US expansion”— and carries it to Reagan's Initiative (Gaztambide 1996, pp. 76 and 83, cited on p. 2).","ref":"GIR2000 · p. 2"},
 {"a":"girvan-insular","b":"girvan-cuenca","tipo":"disonancia",
  "es":"El mismo autor sostiene las dos y las separa por principio: etnohistórico una, geopolítico y hegemónico la otra (Tabla 1, p. 4). Es la única disputa de la capa que ocurre dentro de un solo texto.",
  "en":"The same author holds both and separates them by principle: ethnohistorical one, geopolitical and hegemonic the other (Table 1, p. 4). It is the layer's only dispute occurring inside a single text.","ref":"GIR2000 · p. 4"},
 {"a":"girvan-aec","b":"newworld","tipo":"apropiacion",
  "es":"Girvan recoge la fórmula de Best —«muchas veces el Caribe también incluye el litoral que rodea nuestro mar» (Best 1971, 7, citado en p. 3)— y la reencuentra treinta años después en el Gran Caribe de la AEC, ya no como cosmología sino como membresía.",
  "en":"Girvan picks up Best's formula —“the Caribbean often also includes the littoral around our sea” (Best 1971, 7, cited on p. 3)— and finds it again thirty years later in the ACS's Greater Caribbean, no longer as cosmology but as membership.","ref":"GIR2000 · p. 3"},
 {"a":"girvan-insular","b":"atlas","tipo":"disonancia",
  "es":"El Caribe insular deja fuera la costa colombiana por enumeración cerrada (p. 4); este atlas se ancla en ella. La frontera de Girvan corre justo por donde el atlas pone su centro.",
  "en":"The insular Caribbean leaves the Colombian coast out by closed enumeration (p. 4); this atlas is anchored there. Girvan's boundary runs exactly where the atlas places its centre.","ref":"GIR2000 · p. 4"},
]

FAMILIAS = {
 "insular":N("Insular","Insular"), "geopolitico":N("Geopolítico","Geopolitical"),
 "grancaribe":N("Gran Caribe","Greater Caribbean"), "cultural":N("Cultural","Cultural"),
}

# ---------------------------------------------------------------- nodos brasileños heredados
# Oriximiná (lote S20) y Palmares (lote S21) entraron al corpus después de escrita esta capa.
# Ninguna de las veinte definiciones se pronuncia sobre ellos; seis sí se pronuncian sobre Brasil.
# Se hereda ese estado, y la nota dice exactamente que el texto habla del país y no del lugar,
# para no romper la regla de la capa: un estado sale del texto, no de la analogía.
N_BR_HEREDA = N("El texto no nombra este lugar: se pronuncia sobre Brasil, y de ahí se hereda el estado. Oriximiná y Palmares entraron al corpus en septiembre de 2026, después de que esta capa se escribiera.",
                "The text does not name this place: it speaks of Brazil, and the state is inherited from there. Oriximiná and Palmares entered the corpus in September 2026, after this layer was written.")

for _d in DEF:
    _br = (_d.get("extras") or {}).get("brasil")
    if not _br or not _br.get("e"): continue
    for _k in ("oriximina","palmaresbr"):
        if _k in _d["lugares"]: continue
        _d["lugares"][_k] = {"e":_br["e"], "n":N_BR_HEREDA}

# ---------------------------------------------------------------- validación
def validar():
    ids=set()
    for d in DEF:
        assert d["id"] not in ids, d["id"]; ids.add(d["id"])
        for k,v in d["lugares"].items():
            assert k in TODOS, (d["id"],k)
            assert v.get("e") in ("dentro","margen","disputa","fuera",None), (d["id"],k,v)
        for k,v in d.get("extras",{}).items():
            assert k in EXTRAS, (d["id"],k)
        for c in d["citas"]:
            assert c["ref"] in FUENTES, (d["id"],c["ref"])
            assert c["pag"], (d["id"],c)
        for a,b in d.get("trazos",[]):
            assert (a in TODOS or a in EXTRAS) and (b in TODOS or b in EXTRAS)
        # un «disputa» tiene que traer la nota que dice quién discute con quién
        for k,v in d["lugares"].items():
            if v.get("e")=="disputa": assert v.get("n"), (d["id"],k)
    for x in DISPUTAS:
        assert x["a"] in ids and x["b"] in ids, x
    return ids

def limpiar(d):
    # los lugares sin estado y sin nota no dicen nada: se omiten
    d=dict(d)
    d["lugares"]={k:v for k,v in d["lugares"].items() if v.get("e") or v.get("n")}
    for k,v in d["lugares"].items():
        if v.get("e") is None: v.pop("e",None)
    return d

if __name__=="__main__":
    validar()
    salida={"meta":{"titulo":"¿Qué Caribe?","subtitulo":"Capa de definiciones del Caribe","version":"0.1.0-prototipo","fecha":HOY,
                    "nota":"Cada estado sale del texto citado. Un lugar sin estado es un lugar sobre el que el texto no se pronuncia."},
            "familias":FAMILIAS,"fuentes":FUENTES,"extras":EXTRAS,
            "definiciones":[limpiar(d) for d in DEF],"disputas":DISPUTAS}
    out=pathlib.Path(__file__).resolve().parent.parent/"data"/"agua-de-por-medio"
    js=json.dumps(salida,ensure_ascii=False,indent=1)
    (out/"capa-caribes.json").write_text(js+"\n",encoding="utf-8")
    (out/"capa-caribes.js").write_text("/* Generado por generar-capa-caribes.py — no editar a mano */\nwindow.CARIBES = "+js+";\n",encoding="utf-8")
    print(len(DEF),"definiciones ·",len(DISPUTAS),"disputas")
