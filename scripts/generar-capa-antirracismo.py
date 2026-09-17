#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Genera los datos de la capa «Antirracismo y reparaciones».

Fuente editable: el bloque CASOS y VACIOS de este archivo. Escribe
data/agua-de-por-medio/capa-antirracismo.json (datos abiertos) y .js (lo que
carga la página). Reproducible: la misma entrada da el mismo md5.

    python3 scripts/generar-capa-antirracismo.py

La capa no guarda coordenadas: cada caso declara un lugar y el lugar lo resuelve
el corpus del atlas en tiempo de dibujo. Aquí solo se comprueba que exista.
"""
import hashlib
import io
import json
import os
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FUENTE = os.path.join(RAIZ, 'data', 'agua-de-por-medio', 'capa-antirracismo-fuente.json')
CORPUS = os.path.join(RAIZ, 'data', 'agua-de-por-medio', 'datos-atlas.json')
DEST_JSON = os.path.join(RAIZ, 'data', 'agua-de-por-medio', 'capa-antirracismo.json')
DEST_JS = os.path.join(RAIZ, 'data', 'agua-de-por-medio', 'capa-antirracismo.js')

CAMPOS_CASO = ('id lugar anio obra quien_es quien_en instancia_es instancia_en '
               'categoria_es categoria_en desenlace nota_es nota_en').split()


def main():
    datos = json.load(io.open(FUENTE, encoding='utf-8'))
    corpus = json.load(io.open(CORPUS, encoding='utf-8'))
    lugares, obras = corpus['lugares'], {o['id'] for o in corpus['obras']}

    errores = []
    for c in datos['casos']:
        for campo in CAMPOS_CASO:
            if not c.get(campo):
                errores.append('%s: falta %s' % (c.get('id', '?'), campo))
        if c['lugar'] not in lugares:
            errores.append('%s: lugar «%s» no existe en el corpus' % (c['id'], c['lugar']))
        if c['id'] not in obras:
            errores.append('%s: no es una obra del corpus' % c['id'])
        if c['desenlace'] not in datos['desenlaces']:
            errores.append('%s: desenlace «%s» no declarado' % (c['id'], c['desenlace']))
    for v in datos['vacios']:
        if v['lugar'] not in lugares:
            errores.append('vacío %s: lugar «%s» no existe en el corpus' % (v['id'], v['lugar']))
    if errores:
        for e in errores:
            print('  ERROR ' + e)
        raise SystemExit('%d error(es): no se escribe nada.' % len(errores))

    salida = json.dumps(datos, ensure_ascii=False, indent=2, sort_keys=False)
    io.open(DEST_JSON, 'w', encoding='utf-8').write(salida + '\n')
    js = ('/* Generado por scripts/generar-capa-antirracismo.py. No editar a mano:\n'
          '   la fuente es capa-antirracismo-fuente.json. */\n'
          'window.ANTIRRACISMO=' + json.dumps(datos, ensure_ascii=False, separators=(',', ':')) + ';\n')
    io.open(DEST_JS, 'w', encoding='utf-8').write(js)
    print('capa-antirracismo · %d casos en %d lugares · %d vacíos · md5 %s'
          % (len(datos['casos']), len({c['lugar'] for c in datos['casos']}),
             len(datos['vacios']), hashlib.md5(js.encode('utf-8')).hexdigest()))


if __name__ == '__main__':
    main()
