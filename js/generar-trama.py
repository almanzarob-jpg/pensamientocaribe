#!/usr/bin/env python3
"""
Genera assets/trama-gran-caribe.svg a partir de los nodos reales del mapa
interactivo del Gran Caribe (js/caribbean-map.js).

El SVG sustituye al fondo animado de three.js: mismo papel decorativo, pero
derivado de la cartografía del proyecto en vez de partículas aleatorias, y
sin bucle de animación.

Se ejecuta a mano cuando cambien los nodos del mapa:

    python3 js/generar-trama.py

Los colores van escritos en hexadecimal, no como var(--token), porque un SVG
cargado como background-image no puede leer las variables CSS del documento
que lo incluye. Los valores se mantienen sincronizados con css/reset.css a
través del diccionario TOKENS de este archivo.
"""
import re, math, os, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIGEN = os.path.join(RAIZ, 'js', 'caribbean-map.js')
DESTINO = os.path.join(RAIZ, 'assets', 'trama-gran-caribe.svg')

# Espejo de los tokens de css/reset.css. Si cambian allí, cambian aquí.
TOKENS = {
    '--c-green-light': '#3f8a35',
    '--c-orange':      '#f07a16',
    '--c-red':         '#d83a2e',
    '--c-gold':        '#c9a24d',
    '--c-gray':        '#b9b09f',
}

# Cada región del mapa conserva el color con que se lee en la leyenda.
COLOR_POR_CATEGORIA = {
    'Caribe colombiano':          '--c-orange',
    'Caribe insular colombiano':  '--c-orange',
    'Antillas Mayores':           '--c-green-light',
    'Antillas Menores':           '--c-green-light',
    'Caribe centroamericano':     '--c-gold',
    'Caribe mexicano':            '--c-gold',
    'Golfo de México':            '--c-gold',
    'Caribe venezolano':          '--c-red',
    'Guyanas':                    '--c-red',
    'Caribe suroriental':         '--c-red',
}

W, H = 1600, 900
LAT0, LAT1 = 3.0, 25.0        # sur, norte
LNG0, LNG1 = -98.0, -50.0     # oeste, este


def proyectar(lat, lng):
    """Equirectangular simple: suficiente para un fondo, no para medir."""
    x = (lng - LNG0) / (LNG1 - LNG0) * W
    y = (LAT1 - lat) / (LAT1 - LAT0) * H
    return round(x, 1), round(y, 1)


def leer_nodos():
    src = open(ORIGEN, encoding='utf-8').read()
    patron = re.compile(
        r"\{\s*nombre:\s*'([^']+)'.*?lat:\s*(-?[\d.]+),\s*lng:\s*(-?[\d.]+),"
        r"\s*categoria:\s*'([^']+)'", re.S)
    return [{'n': m.group(1), 'lat': float(m.group(2)),
             'lng': float(m.group(3)), 'cat': m.group(4)}
            for m in patron.finditer(src)]


def generar():
    nodos = leer_nodos()
    if not nodos:
        sys.exit('No se encontraron nodos en ' + ORIGEN)

    puntos = [(proyectar(n['lat'], n['lng']), n) for n in nodos]

    # Rutas: cada nodo se une a sus dos vecinos más próximos. Es una trama
    # de relación, no una red de rutas históricas: no afirma nada que el
    # mapa interactivo no diga.
    aristas = set()
    for i, (p1, _) in enumerate(puntos):
        cercanos = sorted((math.dist(p1, p2), j)
                          for j, (p2, _) in enumerate(puntos) if j != i)
        for _, j in cercanos[:2]:
            aristas.add(tuple(sorted((i, j))))

    lineas = ''.join(
        f'<line x1="{puntos[a][0][0]}" y1="{puntos[a][0][1]}"'
        f' x2="{puntos[b][0][0]}" y2="{puntos[b][0][1]}"/>'
        for a, b in sorted(aristas))

    circulos = ''.join(
        '<circle cx="{}" cy="{}" r="{}" fill="{}"/>'.format(
            p[0], p[1],
            5 if 'colombiano' in n['cat'] else 3.5,
            TOKENS[COLOR_POR_CATEGORIA.get(n['cat'], '--c-gray')])
        for p, n in puntos)

    rejilla = ''
    for lng in range(-95, -49, 5):
        x, _ = proyectar(0, lng)
        rejilla += f'<line x1="{x}" y1="0" x2="{x}" y2="{H}"/>'
    for lat in range(5, 26, 5):
        _, y = proyectar(lat, 0)
        rejilla += f'<line x1="0" y1="{y}" x2="{W}" y2="{y}"/>'

    verde = TOKENS['--c-green-light']
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
        f'width="{W}" height="{H}" role="img" '
        f'aria-label="Trama cartografica del Gran Caribe">\n'
        f'<title>Gran Caribe: trama de nodos y rutas</title>\n'
        f'<desc>Fondo cartografico generado a partir de los {len(nodos)} nodos '
        f'del mapa interactivo del Gran Caribe. Proyeccion equirectangular '
        f'entre {LNG0} y {LNG1} grados de longitud y {LAT0} y {LAT1} de latitud. '
        f'Elemento decorativo: el contenido equivalente esta en el mapa '
        f'interactivo de la portada, que si es consultable.</desc>\n'
        f'<g stroke="{verde}" stroke-width="0.5" opacity="0.10">{rejilla}</g>\n'
        f'<g stroke="{verde}" stroke-width="0.9" opacity="0.22" '
        f'stroke-linecap="round">{lineas}</g>\n'
        f'<g opacity="0.42">{circulos}</g>\n'
        f'</svg>\n')

    open(DESTINO, 'w', encoding='utf-8').write(svg)
    print(f'{DESTINO}: {len(nodos)} nodos, {len(aristas)} rutas, '
          f'{os.path.getsize(DESTINO)} bytes')


if __name__ == '__main__':
    generar()
