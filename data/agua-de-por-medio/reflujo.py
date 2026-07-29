#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Ingiere en el corpus del atlas un aporte llegado por el reflujo.

El formulario del atlas no envía nada a ningún servidor: compone un bloque de
texto y lo entrega por correo. Este script toma ese bloque, lo valida contra el
esquema del corpus y lo aplica. Sin él, cada aporte aceptado cuesta un cuarto de
hora de edición a mano y el conducto se ahoga alrededor del trigésimo.

Nada se aplica sin haberlo leído antes: la decisión editorial sigue siendo del
investigador. Lo que el script evita es el error mecánico, que es distinto.

    # guardar el bloque del correo en un archivo y mirar qué haría
    python3 data/agua-de-por-medio/reflujo.py aporte.txt --simular

    # aplicarlo de verdad
    python3 data/agua-de-por-medio/reflujo.py aporte.txt

    # o pegarlo por la entrada estándar
    pbpaste | python3 data/agua-de-por-medio/reflujo.py -

Escribe en datos-atlas.js (la fuente canónica), regenera datos-atlas.json y
añade el asiento a creditos.json, que es lo que lee la marca de marea. Antes de
tocar nada deja una copia en .respaldo-reflujo/.
"""
import io
import json
import os
import re
import shutil
import sys
import unicodedata
from datetime import date

AQUI = os.path.dirname(os.path.abspath(__file__))
JS = os.path.join(AQUI, 'datos-atlas.js')
JSON_ = os.path.join(AQUI, 'datos-atlas.json')
CREDITOS = os.path.join(AQUI, 'creditos.json')
RESPALDO = os.path.join(AQUI, '.respaldo-reflujo')

TIPOS = ('obra', 'corriente', 'friccion', 'corroboracion', 'enmienda')
VERBO = {'obra': 'propuso', 'corriente': 'trazó', 'friccion': 'señaló fricción',
         'corroboracion': 'corroboró', 'enmienda': 'enmendó'}
CAMPO_ENMIENDA = {'año': 'y', 'anio': 'y', 'ano': 'y', 'autoría': 'a', 'autoria': 'a',
                  'título': 't', 'titulo': 't', 'lugar': 'l',
                  'tradición lingüística': 'tr', 'tradicion linguistica': 'tr'}
ARG_MIN, ARG_MAX = 200, 600


# ---------------------------------------------------------------- lectura

def parsea(texto):
    """Lee el bloque del formulario. Es YAML plano a propósito: sin dependencias.

    Reconoce «clave: valor» y el bloque «argumento: >» con líneas sangradas.
    """
    datos, clave_bloque, bloque = {}, None, []
    for linea in texto.splitlines():
        if clave_bloque is not None:
            if linea.startswith('  ') or not linea.strip():
                bloque.append(linea[2:] if linea.startswith('  ') else '')
                continue
            datos[clave_bloque] = '\n'.join(bloque).strip()
            clave_bloque, bloque = None, []
        linea = linea.rstrip()
        if not linea or linea.lstrip().startswith('#') or linea.strip() in ('```yaml', '```'):
            continue
        m = re.match(r'^([a-zA-Z_]+):\s*(.*)$', linea)
        if not m:
            continue
        k, v = m.group(1).strip(), m.group(2).strip()
        if v == '>':
            clave_bloque = k
        else:
            datos[k] = v
    if clave_bloque is not None:
        datos[clave_bloque] = '\n'.join(bloque).strip()
    return datos


def leer_corpus():
    s = io.open(JS, encoding='utf-8').read()
    i, j = s.find('{'), s.rfind('}')
    if i == -1 or j <= i:
        raise SystemExit('No encontré el objeto de datos en datos-atlas.js')
    return json.loads(s[i:j + 1]), s[:i]


def escribir_corpus(datos, cabecera):
    if not os.path.isdir(RESPALDO):
        os.makedirs(RESPALDO)
    sello = date.today().isoformat()
    for origen in (JS, JSON_):
        if os.path.exists(origen):
            shutil.copy2(origen, os.path.join(
                RESPALDO, '%s.%s' % (os.path.basename(origen), sello)))
    io.open(JS, 'w', encoding='utf-8').write(
        cabecera + json.dumps(datos, ensure_ascii=False, separators=(',', ':')) + ';')
    io.open(JSON_, 'w', encoding='utf-8').write(
        json.dumps(datos, ensure_ascii=False, indent=2) + '\n')


# ---------------------------------------------------------------- ayudas

def sin_tildes(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s)
                   if unicodedata.category(c) != 'Mn')


def id_nuevo(titulo, autoria, existentes):
    """Identificador en la convención del corpus: minúsculas, sin tildes ni espacios."""
    base = sin_tildes((autoria.split(',')[0].split()[-1] if autoria.split() else titulo))
    base = re.sub(r'[^a-z0-9]', '', base.lower())[:18] or 'entrada'
    if base not in existentes:
        return base
    n = 2
    while '%s%d' % (base, n) in existentes:
        n += 1
    return '%s%d' % (base, n)


def relacion_de(rels, a, b):
    for r in rels:
        if (r['a'] == a and r['b'] == b) or (r['a'] == b and r['b'] == a):
            return r
    return None


def error(msg):
    print('  ✕ ' + msg)
    return False


# ---------------------------------------------------------------- validación

def valida(ap, corpus):
    ids = {o['id'] for o in corpus['obras']}
    ok = True
    tipo = ap.get('tipo', '')
    if tipo not in TIPOS:
        return error('tipo desconocido: %r (esperaba uno de %s)' % (tipo, ', '.join(TIPOS)))

    if not ap.get('fuente'):
        ok = error('falta la fuente verificable')
    arg = ap.get('argumento', '')
    if len(arg) < ARG_MIN:
        ok = error('el argumento tiene %d caracteres, el mínimo son %d' % (len(arg), ARG_MIN))
    elif len(arg) > ARG_MAX:
        ok = error('el argumento tiene %d caracteres, el máximo son %d' % (len(arg), ARG_MAX))
    if not ap.get('credito'):
        ok = error('falta el crédito (nombre o «anonimo»)')

    if tipo == 'obra':
        for k in ('titulo', 'autoria', 'lugar', 'tradicion'):
            if not ap.get(k):
                ok = error('falta el campo %s' % k)
        fen = [f.strip() for f in ap.get('fenomenos', '').split(',') if f.strip()]
        if not fen:
            ok = error('falta al menos un fenómeno')
        for f in fen:
            if f not in corpus['fenomenos']:
                ok = error('fenómeno desconocido: %r' % f)
        if ap.get('lugar') and ap['lugar'] not in corpus['lugares']:
            ok = error('lugar desconocido: %r' % ap['lugar'])
        titulos = {o['t'].strip().lower() for o in corpus['obras']}
        if ap.get('titulo', '').strip().lower() in titulos:
            ok = error('ya hay una entrada con ese título')

    elif tipo in ('corriente', 'friccion', 'corroboracion'):
        a, b = ap.get('a'), ap.get('b')
        if a not in ids:
            ok = error('la entrada «%s» no existe en el corpus' % a)
        if b not in ids:
            ok = error('la entrada «%s» no existe en el corpus' % b)
        if a and a == b:
            ok = error('los dos extremos son la misma entrada')
        if ok:
            r = relacion_de(corpus['relaciones'], a, b)
            if tipo == 'corroboracion':
                if r is None:
                    ok = error('no hay ninguna corriente entre esas dos entradas')
                elif r.get('fuente') and 'corroborar' not in r['fuente'].lower():
                    ok = error('esa corriente ya tiene fuente: %s' % r['fuente'])
            elif r is not None:
                ok = error('esa corriente ya existe (tipo %s)' % r['tipo'])

    elif tipo == 'enmienda':
        if ap.get('entrada') not in ids:
            ok = error('la entrada «%s» no existe en el corpus' % ap.get('entrada'))
        campo = sin_tildes(ap.get('campo', '')).strip().lower()
        if campo not in {sin_tildes(k) for k in CAMPO_ENMIENDA}:
            ok = error('campo no reconocido: %r (año, autoría, título, lugar, tradición lingüística)'
                       % ap.get('campo'))
        if not ap.get('correccion') and not ap.get('argumento'):
            ok = error('falta el dato corregido')

    return ok


# ---------------------------------------------------------------- aplicación

def aplica(ap, corpus):
    """Devuelve (descripción del asiento, identificador afectado)."""
    tipo = ap['tipo']

    if tipo == 'obra':
        ids = {o['id'] for o in corpus['obras']}
        nid = ap.get('id') or id_nuevo(ap['titulo'], ap['autoria'], ids)
        obra = {'id': nid, 'k': 'obra', 't': ap['titulo'], 'a': ap['autoria'],
                'y': ap.get('anio', '') if ap.get('anio', '—') != '—' else '',
                'f': [f.strip() for f in ap['fenomenos'].split(',') if f.strip()],
                'l': ap['lugar'], 'tr': ap['tradicion'], 'ap': ap['argumento']}
        corpus['obras'].append(obra)
        return 'entrada «%s»' % ap['titulo'], nid

    if tipo in ('corriente', 'friccion'):
        corpus['relaciones'].append({
            'a': ap['a'], 'b': ap['b'],
            'tipo': 'disonancia' if tipo == 'friccion' else 'resonancia',
            'fuente': ap['fuente']})
        return 'corriente %s — %s' % (ap['a'], ap['b']), ap['a']

    if tipo == 'corroboracion':
        r = relacion_de(corpus['relaciones'], ap['a'], ap['b'])
        r['fuente'] = ap['fuente']
        return 'corriente %s — %s' % (ap['a'], ap['b']), ap['a']

    campo = CAMPO_ENMIENDA[sin_tildes(ap['campo']).strip().lower()]
    obra = next(o for o in corpus['obras'] if o['id'] == ap['entrada'])
    antes = obra.get(campo, '')
    obra[campo] = ap.get('correccion') or ap['argumento']
    return 'campo %s de «%s» (antes: %s)' % (ap['campo'], obra['t'], antes or '—'), obra['id']


def asienta(ap, que, afectado):
    creditos = []
    if os.path.exists(CREDITOS):
        creditos = json.loads(io.open(CREDITOS, encoding='utf-8').read())
    entrada = {'fecha': date.today().isoformat(),
               'verbo': VERBO[ap['tipo']],
               'quien': 'Aporte anónimo' if ap['credito'].strip().lower() in ('anonimo', 'anónimo') else ap['credito'],
               'que': que, 'fuente': ap['fuente'], 'ancla': afectado}
    for k in ('filiacion', 'orcid'):
        if ap.get(k):
            entrada[k] = ap[k]
    creditos.append(entrada)
    io.open(CREDITOS, 'w', encoding='utf-8').write(
        json.dumps(creditos, ensure_ascii=False, indent=2) + '\n')
    return entrada


# ---------------------------------------------------------------- principal

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    simular = '--simular' in sys.argv
    if not args:
        print(__doc__)
        return 2
    texto = sys.stdin.read() if args[0] == '-' else io.open(args[0], encoding='utf-8').read()

    ap = parsea(texto)
    corpus, cabecera = leer_corpus()

    print('Aporte tipo «%s» de %s' % (ap.get('tipo', '?'), ap.get('credito', '?')))
    if not valida(ap, corpus):
        print('\nNo se aplicó nada. Corrige el bloque o responde a quien lo envió.')
        return 1
    print('  ✓ validado contra el corpus v%s' % corpus['meta']['version'])

    antes_pend = sum(1 for r in corpus['relaciones']
                     if not r.get('fuente') or 'corroborar' in r['fuente'].lower())
    que, afectado = aplica(ap, corpus)
    despues_pend = sum(1 for r in corpus['relaciones']
                       if not r.get('fuente') or 'corroborar' in r['fuente'].lower())

    print('  → %s %s' % (VERBO[ap['tipo']], que))
    print('     ancla: con-el-agua-de-por-medio.html#%s' % afectado)
    print('     corpus: %d obras · %d corrientes · %d sin fuente (antes %d)'
          % (len(corpus['obras']), len(corpus['relaciones']), despues_pend, antes_pend))

    if simular:
        print('\n--simular: no se escribió nada.')
        return 0

    escribir_corpus(corpus, cabecera)
    entrada = asienta(ap, que, afectado)
    print('\nEscrito. Copia de seguridad en %s' % os.path.relpath(RESPALDO, AQUI))
    print('Asiento añadido a creditos.json:')
    print('  %s · %s · %s' % (entrada['fecha'], entrada['verbo'], entrada['quien']))
    print('\nQueda por hacer a mano:')
    print('  1. Subir la versión en meta.version si el cambio lo amerita.')
    print('  2. Responder a quien aportó.')
    print('  3. Publicar: git add -A && git commit && git push')
    return 0


if __name__ == '__main__':
    sys.exit(main())
