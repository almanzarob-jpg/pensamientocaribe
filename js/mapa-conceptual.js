(function () {
  var COLORS = ['#245f1e', '#f07a16', '#d83a2e'];
  var H_GAP = 220;
  var ROW_H = 40;
  var ROOT_R = 52;

  function initMapa(root, data) {
    var idCounter = 0;
    function assignIds(node) {
      node._id = idCounter++;
      (node.children || []).forEach(assignIds);
    }
    assignIds(data);

    var svg = root.querySelector('.mapa-conceptual__svg');
    var viewport = root.querySelector('.mapa-conceptual__viewport');
    var panelTitulo = root.querySelector('.mapa-conceptual__panel-titulo');
    var panelDesc = root.querySelector('.mapa-conceptual__panel-desc');
    var panelImgWrap = root.querySelector('.mapa-conceptual__panel-img-wrap');
    var panelImg = root.querySelector('.mapa-conceptual__panel-img');
    var panelCaption = root.querySelector('.mapa-conceptual__panel-caption');

    var pan = { x: 600, y: 380 };
    var zoom = 0.82;

    function syncViewBox() {
      var rect = svg.getBoundingClientRect();
      var w = Math.max(rect.width, 1);
      var h = Math.max(rect.height, 1);
      svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
    }

    function leafCount(node) {
      if (!node.children || node.children.length === 0 || node._collapsed) return 1;
      return node.children.reduce(function (sum, c) { return sum + leafCount(c); }, 0);
    }

    function layoutSide(node, depth, side, yStart, yEnd) {
      node._x = depth * H_GAP * side;
      node._y = (yStart + yEnd) / 2;
      node._side = side;
      if (!node.children || node.children.length === 0 || node._collapsed) return;
      var cursor = yStart;
      node.children.forEach(function (child) {
        var span = leafCount(child) * ROW_H;
        layoutSide(child, depth + 1, side, cursor, cursor + span);
        cursor += span;
      });
    }

    function colorSubtree(node, color) {
      node._color = color;
      (node.children || []).forEach(function (c) { colorSubtree(c, color); });
    }

    function computeLayout() {
      data._x = 0;
      data._y = 0;
      var children = data.children || [];
      var mid = Math.ceil(children.length / 2);
      var rightChildren = children.slice(0, mid);
      var leftChildren = children.slice(mid);

      var rightTotal = rightChildren.reduce(function (s, c) { return s + leafCount(c); }, 0) * ROW_H;
      var cursor = -rightTotal / 2;
      rightChildren.forEach(function (c, i) {
        c._color = COLORS[i % COLORS.length];
        var span = leafCount(c) * ROW_H;
        layoutSide(c, 1, 1, cursor, cursor + span);
        colorSubtree(c, c._color);
        cursor += span;
      });

      var leftTotal = leftChildren.reduce(function (s, c) { return s + leafCount(c); }, 0) * ROW_H;
      cursor = -leftTotal / 2;
      leftChildren.forEach(function (c, i) {
        c._color = COLORS[(i + mid) % COLORS.length];
        var span = leafCount(c) * ROW_H;
        layoutSide(c, 1, -1, cursor, cursor + span);
        colorSubtree(c, c._color);
        cursor += span;
      });
    }

    function ns(tag) {
      return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }

    function getBounds() {
      var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      function visit(node) {
        if (node._x < minX) minX = node._x;
        if (node._x > maxX) maxX = node._x;
        if (node._y < minY) minY = node._y;
        if (node._y > maxY) maxY = node._y;
        if (node.children && !node._collapsed) node.children.forEach(visit);
      }
      visit(data);
      return { minX: minX, maxX: maxX, minY: minY, maxY: maxY };
    }

    function fitView() {
      computeLayout();
      var b = getBounds();
      var vb = svg.viewBox && svg.viewBox.baseVal;
      var viewW = vb && vb.width ? vb.width : 1500;
      var viewH = vb && vb.height ? vb.height : 760;
      var padX = 40;
      var padY = 90;
      var contentW = Math.max(b.maxX - b.minX, 1);
      var contentH = Math.max(b.maxY - b.minY, 1);
      var fitZoom = Math.min((viewW - padX * 2) / contentW, (viewH - padY * 2) / contentH, 1.25);
      zoom = Math.max(fitZoom, 0.25);
      pan.x = viewW / 2 - ((b.minX + b.maxX) / 2) * zoom;
      pan.y = viewH / 2 - ((b.minY + b.maxY) / 2) * zoom;
    }

    function curvePath(x1, y1, x2, y2) {
      var mx = (x1 + x2) / 2;
      return 'M ' + x1 + ' ' + y1 + ' C ' + mx + ' ' + y1 + ', ' + mx + ' ' + y2 + ', ' + x2 + ' ' + y2;
    }

    function selectNode(node) {
      panelTitulo.textContent = node.label;
      panelDesc.textContent = node.description || 'Sin descripcion disponible.';
      if (node.image) {
        panelImgWrap.hidden = false;
        panelImg.src = node.image;
        panelCaption.textContent = node.imageCaption || '';
      } else {
        panelImgWrap.hidden = true;
      }
    }

    /* ══════════ ÍNDICE NAVEGABLE ══════════
       El grafo comunica la forma de la constelación; el árbol comunica su contenido a
       quien no puede usar un ratón. Ambas vistas leen el mismo objeto de datos y
       escriben en el mismo panel, así que no hay dos versiones del marco que mantener. */
    var arbolHost = root.querySelector('.mapa-arbol__host');
    var arbolWrap = root.querySelector('.mapa-arbol');
    var arbolNodos = [];

    function slugConcepto(s) {
      return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    }

    function construirArbol() {
      if (!arbolHost) return;
      var html = '';
      function nodoHTML(node, depth) {
        var tieneHijos = !!(node.children && node.children.length);
        var abierto = depth < 1;
        var id = 'mc-' + node._id;
        html += '<li>';
        html += '<button type="button" class="mapa-arbol__nodo' + (depth === 0 ? ' raiz' : '') + '"'
          + ' id="' + id + '" data-nid="' + node._id + '" role="treeitem" tabindex="-1"'
          + ' aria-level="' + (depth + 1) + '" aria-selected="false"'
          + (tieneHijos ? ' aria-expanded="' + abierto + '"' : '') + '>'
          + '<span class="tw" aria-hidden="true">' + (tieneHijos ? (abierto ? '▾' : '▸') : '·') + '</span>'
          + escapeHTML(node.label)
          + (tieneHijos ? '<span class="nkids">' + node.children.length + '</span>' : '')
          + '</button>';
        if (tieneHijos) {
          html += '<ul role="group" data-padre="' + node._id + '"' + (abierto ? '' : ' hidden') + '>';
          node.children.forEach(function (c) { nodoHTML(c, depth + 1); });
          html += '</ul>';
        }
        html += '</li>';
      }
      html += '<ul role="tree" aria-label="Conceptos del marco teórico">';
      nodoHTML(data, 0);
      html += '</ul>';
      arbolHost.innerHTML = html;
      arbolNodos = Array.prototype.slice.call(arbolHost.querySelectorAll('.mapa-arbol__nodo'));
      if (arbolNodos.length) arbolNodos[0].tabIndex = 0;
    }

    function escapeHTML(s) {
      return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
      });
    }

    function nodoPorId(id) {
      var encontrado = null;
      (function buscar(n) { if (encontrado) return; if (n._id === id) { encontrado = n; return; }
        (n.children || []).forEach(buscar); })(data);
      return encontrado;
    }

    function arbolVisibles() {
      return arbolNodos.filter(function (b) { return b.offsetParent !== null; });
    }

    function arbolSeleccionar(btn) {
      arbolNodos.forEach(function (x) { x.setAttribute('aria-selected', x === btn ? 'true' : 'false'); });
      var n = nodoPorId(parseInt(btn.dataset.nid, 10));
      if (n) {
        selectNode(n);
        try { history.replaceState(null, '', '#' + slugConcepto(n.label)); } catch (e) {}
      }
    }

    function arbolEnfocar(btn) {
      arbolNodos.forEach(function (x) { x.tabIndex = -1; });
      btn.tabIndex = 0; btn.focus();
      arbolSeleccionar(btn);
    }

    function arbolPlegar(btn, abrir) {
      var ul = arbolHost.querySelector('ul[data-padre="' + btn.dataset.nid + '"]');
      if (!ul) return;
      if (abrir === undefined) abrir = ul.hasAttribute('hidden');
      if (abrir) ul.removeAttribute('hidden'); else ul.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', String(abrir));
      var tw = btn.querySelector('.tw');
      if (tw) tw.textContent = abrir ? '▾' : '▸';
    }

    if (arbolHost) {
      construirArbol();
      arbolHost.addEventListener('click', function (e) {
        var b = e.target.closest('.mapa-arbol__nodo'); if (!b) return;
        if (b.hasAttribute('aria-expanded')) arbolPlegar(b);
        arbolEnfocar(b);
      });
      arbolHost.addEventListener('keydown', function (e) {
        var b = document.activeElement;
        if (!b || !b.classList || !b.classList.contains('mapa-arbol__nodo')) return;
        var vis = arbolVisibles(), i = vis.indexOf(b);
        if (e.key === 'ArrowDown') { e.preventDefault(); if (i < vis.length - 1) arbolEnfocar(vis[i + 1]); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); if (i > 0) arbolEnfocar(vis[i - 1]); }
        else if (e.key === 'ArrowRight') { e.preventDefault();
          if (b.getAttribute('aria-expanded') === 'false') arbolPlegar(b, true);
          else if (b.getAttribute('aria-expanded') === 'true' && i < vis.length - 1) arbolEnfocar(vis[i + 1]); }
        else if (e.key === 'ArrowLeft') { e.preventDefault();
          if (b.getAttribute('aria-expanded') === 'true') arbolPlegar(b, false);
          else if (i > 0) arbolEnfocar(vis[i - 1]); }
        else if (e.key === 'Home') { e.preventDefault(); arbolEnfocar(vis[0]); }
        else if (e.key === 'End') { e.preventDefault(); arbolEnfocar(vis[vis.length - 1]); }
        else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); arbolSeleccionar(b); }
      });
    }

    var botonesVista = Array.prototype.slice.call(root.querySelectorAll('.mapa-vista'));
    botonesVista.forEach(function (b) {
      b.addEventListener('click', function () {
        var v = b.dataset.vista;
        botonesVista.forEach(function (x) {
          var on = x === b;
          x.classList.toggle('on', on);
          x.setAttribute('aria-pressed', String(on));
        });
        var esArbol = v === 'indice';
        if (arbolWrap) arbolWrap.hidden = !esArbol;
        svg.style.visibility = esArbol ? 'hidden' : '';
        var ctrl = root.querySelector('.mapa-conceptual__controles');
        if (ctrl) ctrl.style.display = esArbol ? 'none' : '';
        if (esArbol && arbolNodos.length) arbolNodos.filter(function (x) { return x.tabIndex === 0; })[0].focus();
      });
    });

    function render() {
      computeLayout();
      viewport.innerHTML = '';
      viewport.setAttribute('transform', 'translate(' + pan.x + ' ' + pan.y + ') scale(' + zoom + ')');

      function drawLinks(node) {
        if (!node.children || node._collapsed) return;
        node.children.forEach(function (child) {
          var path = ns('path');
          path.setAttribute('d', curvePath(node._x, node._y, child._x, child._y));
          path.setAttribute('fill', 'none');
          path.setAttribute('stroke', child._color || '#b9b09f');
          path.setAttribute('stroke-width', '1.4');
          path.setAttribute('opacity', '0.55');
          viewport.appendChild(path);
          drawLinks(child);
        });
      }
      drawLinks(data);

      function drawNode(node, isRoot) {
        var g = ns('g');
        g.setAttribute('class', 'mn-node');
        g.setAttribute('transform', 'translate(' + node._x + ' ' + node._y + ')');

        if (isRoot) {
          var rect = ns('rect');
          rect.setAttribute('x', String(-ROOT_R * 1.8));
          rect.setAttribute('y', String(-ROOT_R * 0.55));
          rect.setAttribute('width', String(ROOT_R * 3.6));
          rect.setAttribute('height', String(ROOT_R * 1.1));
          rect.setAttribute('rx', '14');
          rect.setAttribute('fill', '#11150f');
          rect.setAttribute('stroke', '#245f1e');
          rect.setAttribute('stroke-width', '1.5');
          g.appendChild(rect);

          var text = ns('text');
          text.setAttribute('text-anchor', 'middle');
          text.setAttribute('dy', '0.32em');
          text.setAttribute('fill', '#f2ead8');
          text.setAttribute('font-size', '14');
          text.setAttribute('font-weight', '600');
          var words = node.label.split(' ');
          var midI = Math.ceil(words.length / 2);
          var line1 = words.slice(0, midI).join(' ');
          var line2 = words.slice(midI).join(' ');
          var t1 = ns('tspan');
          t1.setAttribute('x', '0');
          t1.setAttribute('dy', '-0.6em');
          t1.textContent = line1;
          var t2 = ns('tspan');
          t2.setAttribute('x', '0');
          t2.setAttribute('dy', '1.2em');
          t2.textContent = line2;
          text.appendChild(t1);
          text.appendChild(t2);
          g.appendChild(text);
        } else {
          var hasChildren = !!(node.children && node.children.length > 0);
          var circle = ns('circle');
          circle.setAttribute('r', '4.5');
          circle.setAttribute('fill', hasChildren && !node._collapsed ? (node._color || '#f07a16') : 'transparent');
          circle.setAttribute('stroke', node._color || '#f07a16');
          circle.setAttribute('stroke-width', '1.5');
          if (hasChildren) circle.setAttribute('class', 'mn-toggle');
          g.appendChild(circle);

          var text2 = ns('text');
          text2.setAttribute('fill', '#f2ead8');
          text2.setAttribute('font-size', '13');
          text2.setAttribute('dy', '0.32em');
          text2.setAttribute('x', String(node._side > 0 ? 10 : -10));
          text2.setAttribute('text-anchor', node._side > 0 ? 'start' : 'end');
          if (node.children && node.children.length > 0) text2.setAttribute('font-weight', '600');
          text2.textContent = node.label;
          g.appendChild(text2);

          if (hasChildren) {
            circle.addEventListener('click', function (e) {
              e.stopPropagation();
              node._collapsed = !node._collapsed;
              render();
            });
          }
        }

        g.addEventListener('click', function () { selectNode(node); });
        viewport.appendChild(g);

        if (node.children && !node._collapsed) {
          node.children.forEach(function (c) { drawNode(c, false); });
        }
      }

      drawNode(data, true);
    }

    syncViewBox();
    fitView();
    render();
    selectNode(data);

    var resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        syncViewBox();
        fitView();
        render();
      }, 150);
    });

    var dragging = false;
    var lastX = 0;
    var lastY = 0;

    svg.addEventListener('pointerdown', function (e) {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      svg.classList.add('dragging');
    });
    window.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      pan.x += e.clientX - lastX;
      pan.y += e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      viewport.setAttribute('transform', 'translate(' + pan.x + ' ' + pan.y + ') scale(' + zoom + ')');
    });
    window.addEventListener('pointerup', function () {
      dragging = false;
      svg.classList.remove('dragging');
    });

    svg.addEventListener('wheel', function (e) {
      e.preventDefault();
      var delta = e.deltaY > 0 ? 0.9 : 1.1;
      zoom = Math.min(2.2, Math.max(0.4, zoom * delta));
      viewport.setAttribute('transform', 'translate(' + pan.x + ' ' + pan.y + ') scale(' + zoom + ')');
    }, { passive: false });

    var zoomIn = root.querySelector('.mapa-zoom-in');
    var zoomOut = root.querySelector('.mapa-zoom-out');
    var reset = root.querySelector('.mapa-reset');
    if (zoomIn) zoomIn.addEventListener('click', function () {
      zoom = Math.min(2.2, zoom * 1.15);
      viewport.setAttribute('transform', 'translate(' + pan.x + ' ' + pan.y + ') scale(' + zoom + ')');
    });
    if (zoomOut) zoomOut.addEventListener('click', function () {
      zoom = Math.max(0.4, zoom * 0.87);
      viewport.setAttribute('transform', 'translate(' + pan.x + ' ' + pan.y + ') scale(' + zoom + ')');
    });
    if (reset) reset.addEventListener('click', function () {
      fitView();
      viewport.setAttribute('transform', 'translate(' + pan.x + ' ' + pan.y + ') scale(' + zoom + ')');
    });
  }

  document.querySelectorAll('.mapa-conceptual').forEach(function (root) {
    var dataEl = root.querySelector('script[type="application/json"]') || document.getElementById('mapa-conceptual-data');
    if (!dataEl) return;
    try {
      var data = JSON.parse(dataEl.textContent);
      initMapa(root, data);
    } catch (err) {
      console.error('No se pudo leer el mapa conceptual', err);
    }
  });
})();
