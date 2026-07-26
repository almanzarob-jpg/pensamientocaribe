#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Sincroniza datos-atlas.json a partir de datos-atlas.js.

El Atlas guardaba su corpus dos veces: el .js que la página carga y el .json que
la página ofrece descargar. Eran copias manuales, así que bastaba editar una y
olvidar la otra para que el visitante se llevara un corpus distinto del que veía.

Aquí el .js es la única fuente de verdad y el .json se genera. Ejecutar después
de cada edición del corpus, antes de publicar:

    python3 data/agua-de-por-medio/sincronizar.py

Con --check no escribe nada y devuelve código 1 si los dos archivos difieren,
que es lo que conviene poner en un gancho de pre-commit.
"""
import io
import json
import os
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
JS = os.path.join(AQUI, 'datos-atlas.js')
JSON_ = os.path.join(AQUI, 'datos-atlas.json')


def leer_js(ruta):
    """Extrae el objeto literal de `const ATLAS = {...};`"""
    s = io.open(ruta, encoding='utf-8').read()
    i = s.find('{')
    j = s.rfind('}')
    if i == -1 or j == -1 or j <= i:
        raise SystemExit('No encontré el objeto de datos en %s' % ruta)
    return json.loads(s[i:j + 1])


def main():
    check = '--check' in sys.argv
    datos = leer_js(JS)
    salida = json.dumps(datos, ensure_ascii=False, indent=2) + '\n'

    obras = len(datos.get('obras', []))
    rels = len(datos.get('relaciones', []))
    ver = datos.get('meta', {}).get('version', '?')

    if check:
        actual = io.open(JSON_, encoding='utf-8').read() if os.path.exists(JSON_) else ''
        if actual != salida:
            print('DESINCRONIZADO: datos-atlas.json no coincide con datos-atlas.js')
            print('Ejecuta: python3 %s' % os.path.relpath(__file__))
            return 1
        print('En sincronía · v%s · %d obras · %d relaciones' % (ver, obras, rels))
        return 0

    io.open(JSON_, 'w', encoding='utf-8').write(salida)
    corr = sum(1 for r in datos.get('relaciones', [])
               if r.get('fuente') and 'corroborar' not in r['fuente'].lower())
    print('datos-atlas.json regenerado desde datos-atlas.js')
    print('  version %s · %d obras · %d relaciones' % (ver, obras, rels))
    print('  corroboradas %d de %d (%.0f %%)' % (corr, rels, corr * 100.0 / rels if rels else 0))
    return 0


if __name__ == '__main__':
    sys.exit(main())
