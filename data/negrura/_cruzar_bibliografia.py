#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Cruza bibliografia.json con conceptos.json y escribe:

  · conceptos.json          → cada nodo recibe "fuentes": [claves]
  · fuentes-por-concepto.md → tabla revisable, con el motivo de cada vínculo

El vínculo se establece por dos vías. La primera es la etiqueta temática que el propio
registro trae de Zotero: si un texto está etiquetado "Zona del no-ser", entra en ese
concepto sin que medie interpretación. La segunda es una asignación explícita por clave,
que uso cuando el texto trabaja el concepto aunque la etiqueta no lo diga. Las dos
quedan marcadas por separado en la tabla para que se puedan revisar distinto.
"""
import json, os, unicodedata
from collections import defaultdict

BASE = os.path.dirname(os.path.abspath(__file__))

def norm(s):
    s = unicodedata.normalize('NFD', str(s).lower())
    return ''.join(c for c in s if unicodedata.category(c) != 'Mn').strip()

biblio = json.load(open(os.path.join(BASE, 'bibliografia.json'), encoding='utf-8'))
corpus = json.load(open(os.path.join(BASE, 'conceptos.json'), encoding='utf-8'))

# Registros que no son bibliografía: quedaron en la exportación de Zotero.
BASURA = {'wordprocesss.f.', 'CenterforHistoryandNewMedias.f.', 'GoogleNotebs.f.',
          'pocof75gps.f.', 'ElUnicoHAB2026', 'FundacionWs.f.'}

# ── etiquetas de Zotero que nombran un concepto del mapa ──────────────────────
# La clave es el identificador del concepto; los valores, etiquetas tal como
# aparecen en la biblioteca (incluidas las variantes con errata).
POR_ETIQUETA = {
 'negrura': ['negrura', 'singularidad de la negrura', 'negrura visible', 'razon negra',
             'devenir negro del mundo', 'negrura como matriz', 'concienca negra',
             'negrura como hendidura', 'quietud', 'poetica del ser'],
 'zona-del-no-ser': ['zona del no-ser', 'no-ser', 'razon paradojica'],
 'sociogenesis': ['sociogenesis', 'sociogenia', 'ensamblajes racializantes',
                  'plasticidad ontologica', 'humanizacion bestializadora',
                  'esquema epidermico racial', 'necropoder somatico'],
 'doble-conciencia': ['doble conciencia', 'velo', 'linea de color'],
 'opacidad-glissant': ['derecho a la opacidad'],
 'fugitividad-moten': ['fugitividad', 'abajocomunes', 'hapticabilidad', 'mala deuda',
                       'libertad como fuga'],
 'carne-y-captura-hartman': ['escenas de subjecion', 'esquema cognitivo de cautiverio',
                             'puerta de no retorno', 'gobernanza de la carne (skins)',
                             'cautivo vs. esclavo'],
 'nihilismo-negro': ['afropesimismo', 'nihilismo negro', 'terror ontologico',
                     'blacklash', 'liberalismo racial'],
 'experiencia-y-existencia': ['existencialismo negro', 'ontologia existencial',
                              'fenomenologia de la libertad', 'discurso existencial',
                              'desviacion existencial', 'dominios del ser',
                              'agencia afrocaribe', 'mala fe', 'colonialidad del ser'],
 'vidas-negras': ['vidas negras', 'melancholia africana', 'conciencia diasporica'],
 'vidas-negras-como-praxis': ['vidas negras como praxis', 'fe secular',
                              'libertad espiritual', 'cuidado', 'justicia viral'],
 'duelo-y-supervivencia': ['duelo y supervivencia', 'for/giving (per/donar)',
                           'estetica de la resistencia', 'desgaste'],
 'la-estela': ['afterlife de la esclavitud', 'vida postuma', 'perdida constitutiva',
               'diaspora', 'muerte prematura'],
 'memoria-colectiva': ['memoria publica', 'silenciamiento historico',
                       'revolucion haitiana impensable', 'quilombo', 'lakou'],
 'santa-marta-y-caribe': ['caribe', 'caribe como laboratorio teorico', 'caribe andaluz',
                          'fiolosofia del caribe', 'ron', 'dialectica del mar',
                          'trasatlantologia'],
 'blanquitud-monumental': ['blanquitud monumental', 'blanquirud monumental', 'blanquitud',
                           'monumentalidad', 'supremacia blanca', 'estado racial'],
 'monumentalidad-blanca': ['monumentalidad epistemologica', 'efecto matthew (canon monumental)',
                           'politicas de la pureza', 'poder en estado solido', 'encriptacion'],
 'monumento-y-paisaje': ['espacios condenados', 'terra nulius', 'geologia blanca',
                         'antropoceno negro', 'sedimentacion racial', 'laboratorio oscuro'],
 'archivo-e-institucion': ['epistemicidio', 'justicia cognitiva', 'silenciamiento historico',
                           'geopolitica del conocimiento', 'teodicea del texto'],
 'despojo': ['despojo', 'capitalismo racial', 'imperio racial global',
             'acumulacion de ventajas/desventajas', 'devastacion de mundos de vida',
             'enriquecimiento malvado', 'pieza de indias'],
 'porosidad-del-despojo': ['imaginacion radical', 'radio imaginacion'],
 'ignorancia-blanca': ['ignorancia blanca', 'epistemologia de la ignorancia',
                       'nombrar la blanquitud', 'contrato racial', 'filosofia no-ideal'],
 'politica-de-la-pureza': ['politica de la pureza', 'hendidura de la pureza',
                           'indiferencia a la diferencia'],
 'hybris-del-punto-cero': ['hybris del punto cero', 'limpieza de sangre', 'ilustracion',
                           'biopolitica', 'raza genomica', 'eugenesia'],
 'blanquitud-algoritmica': ['blanquitud monumental algoritmica', 'colonialidad de los datos'],
 'monumentalidad-algoritmica': ['algoritmo', 'adm', 'big data', 'bucles de retroalimentacion',
                                'clasificacion de personas', 'materealismo cognitivo',
                                'individuacion', 'tecnoestetica'],
 'trabajo-de-datos-sur-global': ['trabajo fantasma', 'inteligencia artificial artificial',
                                 'subempleo', 'humanidad surplus', 'explotacion cognitiva',
                                 'extractivismo'],
 'sesgo-y-vigilancia-noble-buolamwini': ['discriminacion tecnica', 'tecnochauvinismo',
                                         'justicia algorimica', 'nuevo codigo jim',
                                         'vigilancia genetica', 'tecnopolitica'],
 'colonialismo-de-datos': ['colonialismo de datos', 'imoerio de datos', 'imoerio de la nube',
                           'sector de cuantificacion social', 'desposesion digital',
                           'capitalismo computacional', 'antropologia de los medios'],
 'capitalismo-de-vigilancia': ['capitalismo de vigilancia', 'excedente conductual',
                               'ciclo de desposesion', 'gran otro', 'soberania del tiempo'],
 'serialidad-algoritmica': ['serielidad algoritmica', 'serielidad manipulada', 'ruido blanco'],
 'posfascismo-tecnologico': ['posfascismo', 'posliberalismo', 'republica tecnologica',
                             'poder duro', 'libertarismo extremo', 'fascismo racial',
                             'estado anti-estado', 'elite', 'nacionalismo',
                             'precedencia de la monarquia'],
 'juan-albanil': ['herramientas del amo'],
 'caliban': ['caliban', 'razon de caliban', 'filosofia poscontinetal', 'poeticismo',
             'historicismo', 'c.lr. james'],
 'susurro-de-sycorax': ['caliban que escucha el susurro de sycorax'],
 'cimarroneria-analectica': ['cimarroneria analectica', 'doble critica cimarrona',
                             'cimarronaje sociogenico', 'cimarronaje cultural',
                             'cimarroneria sonora', 'poetica de la resistencia',
                             'sistema de contra-plantacion', 'arquitectonica del ve ve'],
 'muntu': ['muntu', 'cosmologia bantu', 'tout moun se moun'],
 'friccion-epistemica': ['friccion epistemica', 'friscción espistemica',
                         'friscción espistémica', 'metafora sonica'],
 'ruido-blanco': ['ruido blanco', 'dominacion sonica', 'cuerpos sonicos',
                  'ritmo como fuerza', 'musicas mulatas', 'sociologia del ritmo'],
 'sujeto-creolizante': ['creolizacion', 'ontologia del devenir', 'sujeto de liberacion',
                        'raza como significante flotante', 'articulacion', 'identidad racial'],
 'marealectica': ['tidalectica', 'temporalidad'],
 'reparaciones': ['reparaciones (simbolicas vs. materiales)', 'compensacion financiera (a los amos)',
                  'deuda de haiti', 'reparaciones climaticas',
                  'responsabilidad vs. responsabilidad objetiva', 'vision constructiva'],
 'abolicion': ['abolicionismo', 'complejo carcelario'],
 'fabricacion-de-mundos': ['worldmaking (fabricacion de mundos)', 'pueblo soberano',
                           'federalismo posnacional', 'tiempo de libertad',
                           'descolonizacion', 'revolucion'],
 'esperanza-fragil': ['esperanza fragil', 'transformacion erotica', 'tranformacion erotica',
                      'espiritualidad politica', 'religion del amor', 'ecoteologia'],
 'operadores-conceptuales': ['panafricanismo', 'tradicion radical negra', 'negritud',
                             'rastafarismo', 'tricontinental'],
 'interlocutores': ['filosofia africana', 'filosofia afrocaribe', 'paget henry',
                    'fenomenologia africana', 'henry & gordon', 'crisis del hombre europeo',
                    'descolonizacion de la razon', 'giro decolonial', 'colonialidad del poder',
                    'heterarquia', 'colonialidad', 'descolonialidad',
                    'universalismo de izquierda', 'afrocentrismo'],
 'fanon': ['fanon'],
}

# ── asignaciones explícitas por clave, cuando la etiqueta no alcanza ──────────
POR_CLAVE = {
 'fanon': ['Fanon2009', 'GordonR2005', 'Wood2017', 'Marin2024'],
 'du-bois': ['Dubois2020', 'Hartmann2023', 'Rabaka2015'],
 'wynter': ['Jackson2020', 'Weheliye2014'],
 'glissant': ['Davis2023'],
 'hartman': ['Hartman1997', 'Hartman2007'],
 'moten': ['Harney2017'],
 'gordon': ['GordonRs.f.', 'GordonR2000', 'GordonR2005', 'GordonR2011', 'Gordon2006',
            'Henry2008', 'Marin2024'],
 'mills': ['Mills1997', 'Mills1998', 'Yancys.f.'],
 'monahan': ['Monahan2011', 'Monahan2023'],
 'warren': ['Warren2018', 'Headley2018'],
 'ferreira-da-silva': [],
 'mckittrick': ['Gilmore2022', 'Yussof2018'],
 'sharpe': ['Sharpe2016', 'Hartman2007'],
 'ferdinand': ['Ferdinand2022', 'Goffe2025', 'Loach2023'],
 'trouillot': ['Trouillot2017'],
 'zapata-olivella': ['ZapataOlivellas.f.'],
 'benitez-rojo': ['Helmreich2023'],
 'juan-albanil': ['Jones2021', 'Crawford2021', 'Harney2017'],
 'caliban': ['AlmanzaHernandez2024', 'Henry2000', 'MaldonadoTorres2022', 'Boguess.f.',
             'Ugalde2007'],
 'despojado': ['Brand2001', 'Hartman2007', 'Mirandas.f.'],
 'susurro-de-sycorax': ['Ferdinand2022', 'LebronOrtiz2021'],
 'expandido': ['AlmanzaHernandez2024', 'Henry2000', 'SekyiOtus.f.', 'Wilders.f.'],
 'santa-marta-y-caribe': ['MaldonadoTorres2020', 'Gomez2017', 'TheHaitians2020'],
 'cotidianidad': ['Etoke2019', 'Quashies.f.', 'Henriques2011'],
 'memoria-colectiva': ['Trouillot2017', 'Nascimentos.f.', 'Brand2001'],
 'monumento-y-paisaje': ['Yussof2024', 'SaninRestrepo2016'],
 'archivo-e-institucion': ['Collins2023', 'CastroGomez2005', 'Trouillot2017'],
 'monumentalidad-blanca': ['Rose2021', 'Alexander2021', 'SaninRestrepo2018'],
 'blanquitud-monumental': ['Monahan2011', 'Chabots.f.', 'Rose2021', 'Mills1997',
                           'Hall2019', 'Rabaka2015'],
 'blanquitud-algoritmica': ['Zuboff2019', 'Crawford2021', 'ONeils.f.', 'Couldry2019',
                            'Udupa2023', 'Zukerfelds.f.', 'Chafkin2021', 'Karp2025',
                            'Jones2021', 'Broussards.f.', 'Benjamin2019', 'Alombert2023'],
 'sesgo-y-vigilancia-noble-buolamwini': ['Broussards.f.', 'Benjamin2019', 'Roberts2011'],
 'trabajo-de-datos-sur-global': ['Jones2021', 'Crawford2021', 'Zukerfelds.f.'],
 'serialidad-algoritmica': ['Monahan2023', 'Toscano2023'],
 'posfascismo-tecnologico': ['Karp2025', 'Chafkin2021', 'Toscano2023', 'Rose2021', 'Hoppe2001'],
 'nihilismo-negro': ['Warren2018', 'Headley2018', 'Mbembes.f.'],
 'vidas-negras': ['Etoke2019', 'Quashies.f.', 'Boesak2021', 'Rabaka2015', 'Helmreich2023'],
 'vidas-negras-como-praxis': ['Hagglund2019', 'Monahan2023', 'ViralJustic2022'],
 'duelo-y-supervivencia': ['Etoke2019', 'Sharpe2016'],
 'la-estela': ['Sharpe2016', 'Hartman2007', 'Gilmore2022'],
 'reparaciones': ['Taiwo2022b', 'Araujo2017', 'Scott2024', 'TheHaitians2020'],
 'abolicion': ['Gilmore2022', 'Benjamin2019', 'ViralJustic2022'],
 'fabricacion-de-mundos': ['Taiwo2022', 'Taiwo2022b', 'Wilders.f.', 'Yountae2024'],
 'esperanza-fragil': ['Hartmann2023', 'Cornell2016', 'Davari2022'],
 'marealectica': ['Helmreich2023', 'Nascimentos.f.'],
 'sujeto-creolizante': ['Monahan2011', 'Monahan2023', 'Hall2019'],
 'friccion-epistemica': ['Monahan2023', 'Gordon2006'],
 'ruido-blanco': ['Monahan2023', 'Henriques2011', 'QuinteroRivera2009'],
 'muntu': ['ZapataOlivellas.f.', 'Alexander2021'],
 'cimarroneria-analectica': ['Ferdinand2022', 'LebronOrtiz2021', 'Roberts2015',
                             'Goffe2025', 'Ugalde2007', 'Nascimentos.f.'],
 'zona-del-no-ser': ['GordonR2005', 'Fanon2009', 'Wood2017', 'Roberts2015', 'Mirandas.f.'],
 'sociogenesis': ['Fanon2009', 'Weheliye2014', 'Jackson2020', 'Yussof2024', 'Jackson2024'],
 'doble-conciencia': ['Dubois2020', 'Hartmann2023'],
 'ignorancia-blanca': ['Mills1997', 'Mills1998', 'Yancys.f.', 'Haidts.f.'],
 'politica-de-la-pureza': ['Monahan2011', 'Monahan2023', 'Paquette2020', 'Alexander2021'],
 'hybris-del-punto-cero': ['CastroGomez2005', 'CastroGomezs.f.', 'Roberts2011', 'Bilgrami2016'],
 'colonialismo-de-datos': ['Couldry2019', 'Udupa2023', 'Crawford2021'],
 'capitalismo-de-vigilancia': ['Zuboff2019', 'Chafkin2021', 'ONeils.f.'],
 'experiencia-y-existencia': ['GordonR2000', 'Headley2014', 'Bamikole2017', 'Henry2000'],
 'opacidad-glissant': ['Davis2023', 'Quashies.f.'],
 'fugitividad-moten': ['Harney2017', 'Roberts2015', 'Gilmore2022'],
 'carne-y-captura-hartman': ['Hartman1997', 'Jackson2024', 'Brand2001', 'TheHaitians2020'],
 'despojo': ['Gilmore2022', 'Maher2022', 'Robinson2021', 'Scott2024', 'Roberts2017'],
 'porosidad-del-despojo': ['Ferdinand2022', 'Roberts2015', 'Benjamin2019'],
 'interlocutores': ['MaldonadoTorres2020', 'MaldonadoTorres2022', 'CastroGomezs.f.',
                    'SekyiOtus.f.', 'PartisanUni2021', 'Boguess.f.', 'Rabakas.f.',
                    'Douglas2009', 'Powel2024', 'Mahler2018'],
 'operadores-conceptuales': ['AlmanzaHernandez2024', 'Ajari2024', 'Rabaka2015', 'Robinson2021'],
 'negrura': ['Gordon2006', 'Quashies.f.', 'Mbembes.f.', 'Fanon2009', 'Boesak2021',
             'Mills1998', 'Warren2018'],
 'la-negrura-frente-a-la-blanquitud-monumental': ['AlmanzaHernandez2024'],
}

# ── cruce ─────────────────────────────────────────────────────────────────────
por_etiqueta_norm = {cid: set(norm(t) for t in tags) for cid, tags in POR_ETIQUETA.items()}
registro = {e['key']: e for e in biblio}

asignaciones = defaultdict(dict)   # cid -> key -> motivo
for e in biblio:
    if e['key'] in BASURA:
        continue
    etiquetas = set(norm(t) for t in e.get('tags', []))
    for cid, tags in por_etiqueta_norm.items():
        coincide = etiquetas & tags
        if coincide:
            asignaciones[cid][e['key']] = 'etiqueta: ' + ', '.join(sorted(coincide))

for cid, claves in POR_CLAVE.items():
    for k in claves:
        if k in BASURA:
            continue
        if k not in registro:
            raise SystemExit('clave inexistente en la bibliografía: ' + k)
        if k not in asignaciones[cid]:
            asignaciones[cid][k] = 'lectura'

def orden(k):
    e = registro[k]
    aus = e.get('autores') or [{}]
    return (aus[0].get('apellido') or 'zzz', e.get('anio') or '')

nodos = {}
def recorrer(nodo):
    nodos[nodo['id']] = nodo
    claves = sorted(asignaciones.get(nodo['id'], {}).keys(), key=orden)
    if claves:
        nodo['fuentes'] = claves
    elif 'fuentes' in nodo:
        del nodo['fuentes']
    for c in nodo.get('children', []):
        recorrer(c)
recorrer(corpus['mapa'])

usadas = set(k for d in asignaciones.values() for k in d)
huerfanas = [e['key'] for e in biblio if e['key'] not in usadas and e['key'] not in BASURA]

corpus['meta']['fuentes'] = len(usadas)
corpus['meta']['bibliografia'] = 'bibliografia.json'
json.dump(corpus, open(os.path.join(BASE, 'conceptos.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=2)

# ── tabla revisable ───────────────────────────────────────────────────────────
def cita(k):
    e = registro[k]
    au = '; '.join(a['apellido'] for a in e.get('autores', [])) or '[sin autor]'
    return '%s (%s), *%s*' % (au, e.get('anio') or 's. f.', e['titulo'].rstrip('.'))

lineas = ['# Fuentes por concepto · revisión',
          '',
          'Cruce entre `bibliografia.json` (%d registros) y `conceptos.json` (%d conceptos).'
          % (len(biblio), corpus['meta']['conceptos']),
          '',
          'Dos vías de vínculo. **Etiqueta**: la etiqueta temática del registro en Zotero nombra',
          'el concepto, así que el vínculo lo puso Roberto al catalogar. **Lectura**: lo propuse yo',
          'porque el texto trabaja el concepto aunque la etiqueta no lo diga. Los de la segunda',
          'columna son los que conviene revisar primero.',
          '',
          'Para quitar un vínculo, bórralo de `_cruzar_bibliografia.py` y vuelve a correr el script.',
          '']

def volcar(nodo, nivel=0):
    marca = ' *(borrador)*' if nodo.get('borrador') else ''
    lineas.append('#' * min(nivel + 2, 6) + ' ' + nodo['label'] + marca)
    lineas.append('')
    claves = nodo.get('fuentes', [])
    if not claves:
        lineas.append('_Sin fuentes asignadas._')
        lineas.append('')
    else:
        lineas.append('| Fuente | Vía |')
        lineas.append('|---|---|')
        for k in claves:
            motivo = asignaciones[nodo['id']][k]
            lineas.append('| %s | %s |' % (cita(k), motivo))
        lineas.append('')
    for c in nodo.get('children', []):
        volcar(c, nivel + 1)

volcar(corpus['mapa'])

lineas += ['## Registros sin concepto asignado', '']
lineas += ['- %s `%s`' % (cita(k), k) for k in huerfanas] or ['_Ninguno._']
lineas += ['', '## Registros que no son bibliografía', '',
           'Quedaron en la exportación de Zotero y conviene borrarlos de la biblioteca:', '']
lineas += ['- `%s` — %s' % (k, registro[k]['titulo']) for k in sorted(BASURA) if k in registro]
lineas.append('')

open(os.path.join(BASE, 'fuentes-por-concepto.md'), 'w', encoding='utf-8').write('\n'.join(lineas))

print('conceptos con fuentes:', sum(1 for n in nodos.values() if n.get('fuentes')), '/', len(nodos))
print('registros vinculados:', len(usadas), '| sin vincular:', len(huerfanas), huerfanas)
print('vínculos totales:', sum(len(d) for d in asignaciones.values()))
