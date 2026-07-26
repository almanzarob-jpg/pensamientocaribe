#!/usr/bin/env python3
"""
Convierte una exportación RDF de Zotero (Mi biblioteca.rdf) en un catálogo
de fuentes JSON con clave estable (citekey), listo para que nodes.json /
edges.json del atlas lo referencien vía el campo zoteroKeys.

Uso:  python3 zotero_to_json.py "Mi biblioteca.rdf" fuentes.json
"""
import sys, json, re, unicodedata
import xml.etree.ElementTree as ET

NS = {
 'rdf':'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
 'z':'http://www.zotero.org/namespaces/export#',
 'dc':'http://purl.org/dc/elements/1.1/',
 'dcterms':'http://purl.org/dc/terms/',
 'foaf':'http://xmlns.com/foaf/0.1/',
 'bib':'http://purl.org/net/biblio#',
 'prism':'http://prismstandard.org/namespaces/1.2/basic/',
 'vcard':'http://nwalsh.com/rdf/vCard#',
}
BIBLIO_TYPES = {'Book','Article','BookSection','Document','Recording','Report','Thesis'}

def txt(el):
    return (el.text or '').strip() if el is not None else ''

def ascii_slug(s):
    s = unicodedata.normalize('NFD', s).encode('ascii','ignore').decode()
    return re.sub(r'[^A-Za-z0-9]', '', s)

def personas(el, rel):
    out = []
    cont = el.find('bib:'+rel, NS)
    if cont is None: return out
    seq = cont.find('rdf:Seq', NS)
    if seq is None: return out
    for li in seq.findall('rdf:li', NS):
        p = li.find('foaf:Person', NS)
        if p is None: continue
        sur = txt(p.find('foaf:surname', NS))
        giv = txt(p.find('foaf:givenName', NS))
        out.append({'apellido':sur, 'nombre':giv})
    return out

def year_of(s):
    m = re.search(r'(1[5-9]\d\d|20\d\d)', s or '')
    return m.group(1) if m else ''

def parse(path):
    root = ET.parse(path).getroot()
    items = []
    for el in root:
        tag = el.tag.split('}')[1]
        if tag not in BIBLIO_TYPES: continue
        it = txt(el.find('z:itemType', NS))
        if it == 'attachment': continue
        titulo = txt(el.find('dc:title', NS))
        if not titulo: continue
        autores = personas(el, 'authors') or personas(el, 'editors')
        fecha = txt(el.find('dc:date', NS)) or txt(el.find('dcterms:date', NS))
        anio = year_of(fecha)
        # publicacion (revista) / editorial / lugar
        publicacion = ''
        part = el.find('dcterms:isPartOf', NS)
        if part is not None:
            j = part.find('bib:Journal', NS) or part
            publicacion = txt(j.find('dc:title', NS))
        editorial = lugar = ''
        pub = el.find('dc:publisher', NS)
        if pub is not None:
            org = pub.find('foaf:Organization', NS)
            if org is not None:
                editorial = txt(org.find('foaf:name', NS))
                adr = org.find('.//vcard:locality', NS)
                lugar = txt(adr)
        # doi / url
        doi = url = ''
        for ident in el.findall('.//dc:identifier', NS) + el.findall('.//bib:identifier', NS):
            val = txt(ident)
            uri = ident.find('.//rdf:value', NS)
            if uri is not None: val = txt(uri) or val
            if not val:
                res = ident.find('.//{*}Resource') or ident.find('rdf:value', NS)
            if val.startswith('DOI') or '10.' in val: doi = val.replace('DOI ','').strip()
            elif val.startswith('http'): url = val
        # tags (dc:subject) -> útiles para categorías del atlas
        tags = [txt(s) for s in el.findall('dc:subject', NS) if txt(s)]
        items.append({
            'tipo': it, 'titulo': titulo, 'autores': autores, 'anio': anio,
            'publicacion': publicacion, 'editorial': editorial, 'lugar': lugar,
            'doi': doi, 'url': url, 'tags': tags
        })
    return items

def add_keys(items):
    seen = {}
    for x in items:
        base = ascii_slug(x['autores'][0]['apellido']) if x['autores'] else ascii_slug(x['titulo'][:12])
        base = (base or 'Anon') + (x['anio'] or 's.f.')
        n = seen.get(base, 0)
        seen[base] = n + 1
        x['key'] = base if n == 0 else base + chr(ord('a')+n-0)  # a,b,c...
    # reindex duplicates properly (first also gets 'a' if collisions)
    counts = {}
    for x in items:
        b = re.sub(r'[a-z]$','',x['key']) if False else x['key']
    return items

if __name__ == '__main__':
    src = sys.argv[1] if len(sys.argv)>1 else 'Mi biblioteca.rdf'
    out = sys.argv[2] if len(sys.argv)>2 else 'fuentes.json'
    items = parse(src)
    add_keys(items)
    # ordenar por apellido, año
    items.sort(key=lambda x:( (x['autores'][0]['apellido'] if x['autores'] else 'zzz').lower(), x['anio']))
    with open(out,'w',encoding='utf-8') as f:
        json.dump(items, f, ensure_ascii=False, indent=2)
    tipos = {}
    for x in items: tipos[x['tipo']] = tipos.get(x['tipo'],0)+1
    print('fuentes:', len(items))
    print('por tipo:', tipos)
    print('con año:', sum(1 for x in items if x['anio']))
    print('con DOI:', sum(1 for x in items if x['doi']))
    print('con tags:', sum(1 for x in items if x['tags']))
    print('ejemplo key:', items[0]['key'], '->', (items[0]['autores'][0]['apellido'] if items[0]['autores'] else '?'), items[0]['anio'])
