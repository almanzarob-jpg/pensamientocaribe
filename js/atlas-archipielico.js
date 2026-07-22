/* ════════════════════════════════════════════════
   CON EL AGUA DE POR MEDIO · Motor SVG del atlas
   Prototipo: iluminar por fenómeno, ver cómo conectan sus obras
   Base: Brathwaite, Monahan, Walcott, Bassi
   ════════════════════════════════════════════════ */
(function () {
  var SCRIPT_SRC = (document.currentScript && document.currentScript.src) || '';

  function init(ATLAS) {
    var stage = document.getElementById('atlasarch-cy');
    if (!stage) return;

    // estado
    var state = { view: 'corriente', layer: 'ambas', active: null, focusFen: null, tide: true };
    var vpt = { k: 1, tx: 0, ty: 0 };
    var hoverNode = null;

    var FEN = ATLAS.fenomenos, FIDS = Object.keys(FEN);
    var obras = ATLAS.obras, rels = ATLAS.relaciones, LUG = ATLAS.lugares;
    var byId = {}, grado = {}, adj = {};
    obras.forEach(function (o) { byId[o.id] = o; grado[o.id] = 0; });
    rels.forEach(function (r) {
      grado[r.a] = (grado[r.a] || 0) + 1;
      grado[r.b] = (grado[r.b] || 0) + 1;
      (adj[r.a] = adj[r.a] || {})[r.b] = 1;
      (adj[r.b] = adj[r.b] || {})[r.a] = 1;
    });

    // proyección geográfica
    var VW = 1200, VH = 640, PAD = 95;
    var LNG0 = -98, LNG1 = -53, LAT0 = 2, LAT1 = 33;
    function px(lng) { return PAD + (lng - LNG0) / (LNG1 - LNG0) * (VW - 2 * PAD); }
    function py(lat) { return PAD + (LAT1 - lat) / (LAT1 - LAT0) * (VH - 2 * PAD); }

    // cluster por lugar (corriente) o fenómeno (constelación)
    var CLUSTERS = [], porLug = {};
    obras.forEach(function (o) { (porLug[o.l] = porLug[o.l] || []).push(o); });

    function computeBase() {
      CLUSTERS = [];
      obras.forEach(function (n) {
        if (state.view === 'corriente') {
          var arr = porLug[n.l] || [], bx = px(LUG[n.l][1]), by = py(LUG[n.l][0]);
          var idx = arr.indexOf(n), rr = arr.length <= 1 ? 0 : 10.5 * Math.sqrt(idx + 0.5), ang = idx * 2.399963;
          n._bx = bx + Math.cos(ang) * rr;
          n._by = by + Math.sin(ang) * rr;
        } else {
          var f = n.f[0], fenIdx = FIDS.indexOf(f), cx = VW / 2, cy = VH / 2, Rk = 270;
          var ang2 = (fenIdx / FIDS.length) * Math.PI * 2 - Math.PI / 2;
          var hx = cx + Math.cos(ang2) * Rk, hy = cy + Math.sin(ang2) * Rk * 0.85;
          var arr2 = obras.filter(function (x) { return x.f[0] === f; });
          var idx2 = arr2.indexOf(n), ring = arr2.length <= 1 ? 0 : 13 * Math.sqrt(idx2 + 0.5), ang3 = idx2 * 2.399963;
          n._bx = hx + Math.cos(ang3) * ring;
          n._by = hy + Math.sin(ang3) * ring;
        }
        n._x = n._bx;
        n._y = n._by;
      });
    }

    function capaOk(o) { return state.layer === 'ambas' || o.k === state.layer; }
    function visible(n) { return capaOk(n); }

    var NS = 'http://www.w3.org/2000/svg';
    var el = function (n, at) {
      var e = document.createElementNS(NS, n);
      for (var k in at) e.setAttribute(k, at[k]);
      return e;
    };

    var svg = stage.querySelector('svg') || stage;
    var vp = null;

    function render() {
      svg.innerHTML = '';
      vp = el('g', { id: 'vp' });
      svg.appendChild(vp);
      applyVP();
      computeBase();

      // hint
      var hint = document.getElementById('atlasarch-hint');
      if (hint) {
        if (state.view === 'corriente') {
          hint.textContent = 'Clic en un fenómeno en la leyenda para iluminar sus obras y lugares. Arrastra para navegar, rueda para zoom.';
        } else {
          hint.textContent = 'Constelación de fenómenos. Clic en uno para iluminar. Arrastra: navega · rueda: zoom.';
        }
      }

      // corrientes (edges): siempre se dibujan
      var eg = el('g');
      vp.appendChild(eg);
      rels.forEach(function (r, i) {
        var na = byId[r.a], nb = byId[r.b];
        if (!na || !nb || !visible(na) || !visible(nb)) return;
        var p = el('path', { class: 'atlasarch-edge ' + (r.tipo === 'disonancia' ? 'disonancia' : 'resonancia') });
        eg.appendChild(p);
        r._p = p;
      });

      // lugares (en corriente) o fenómenos (en constelación)
      if (state.view === 'corriente') {
        var pg = el('g');
        Object.keys(LUG).forEach(function (lid) {
          if (!porLug[lid] || !porLug[lid].some(visible)) return;
          var v = LUG[lid];
          var t = el('text', { class: 'atlasarch-placelbl ' + v[3], x: px(v[1]) + 14, y: py(v[0]) + 4 });
          t.textContent = v[2];
          pg.appendChild(t);
        });
        vp.appendChild(pg);
      } else {
        var cg = el('g');
        FIDS.forEach(function (f, i) {
          var cx = VW / 2, cy = VH / 2, Rk = 270;
          var ang = (i / FIDS.length) * Math.PI * 2 - Math.PI / 2;
          var x = cx + Math.cos(ang) * (Rk + 62), y = cy + Math.sin(ang) * Rk * 0.85 + Math.sin(ang) * 44;
          var t = el('text', { class: 'atlasarch-clbl', x: x, y: y, 'text-anchor': 'middle', fill: FEN[f].c });
          t.textContent = FEN[f].label;
          cg.appendChild(t);
        });
        vp.appendChild(cg);
      }

      // nodos
      obras.forEach(function (n) {
        if (!visible(n)) return;
        var g = el('g', { class: 'atlasarch-node' });
        var r = n.k === 'obra' ? 7 : 6.5;
        var c = el('circle', { class: 'atlasarch-dot', r: r, fill: n.k === 'obra' ? FEN[n.f[0]].c : '#050604', stroke: FEN[n.f[0]].c, 'stroke-width': n.k === 'obra' ? 1.2 : 2.6 });
        var hit = el('circle', { r: 16, fill: 'transparent' });
        g.appendChild(c);
        g.appendChild(hit);
        g.style.cursor = 'pointer';
        g.addEventListener('mouseenter', function () { hoverNode = n; updateTip(); });
        g.addEventListener('mouseleave', function () { if (hoverNode === n) hoverNode = null; updateTip(); });
        g.addEventListener('click', function (ev) { ev.stopPropagation(); abrirFicha(n.id); });
        vp.appendChild(g);
        n._g = g;
        n._c = c;
      });

      buildLegend();
      refreshHi();
      place(0);
    }

    function applyVP() {
      if (vp) vp.setAttribute('transform', 'translate(' + vpt.tx + ',' + vpt.ty + ') scale(' + vpt.k + ')');
    }

    function place(t) {
      if (state.view === 'tabla') return;
      var ph = t * 0.00045, flowing = state.tide;
      obras.forEach(function (n, idx) {
        var dx = 0, dy = 0;
        if (flowing) {
          if (state.view === 'corriente') {
            dx = 7 * Math.sin(ph * 0.6) + 4.5 * Math.sin(ph + n._bx * 0.012);
            dy = 3 * Math.sin(ph * 0.8 + n._by * 0.010 + 1.6);
          } else {
            dx = 2.2 * Math.sin(ph + idx * 0.5);
            dy = 2.2 * Math.cos(ph * 0.9 + idx * 0.5);
          }
        }
        n._x = n._bx + dx;
        n._y = n._by + dy;
        n._g.setAttribute('transform', 'translate(' + n._x + ',' + n._y + ')');
      });

      // animar corrientes (ondas)
      rels.forEach(function (r) {
        var na = byId[r.a], nb = byId[r.b];
        if (!na || !nb || !na._g || !nb._g) return;
        var ax = na._x, ay = na._y, bx = nb._x, by = nb._y;
        var dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy) || 1;
        var nx = -dy / len, ny = dx / len;
        var amp = Math.min(30, len * 0.16);
        if (r.tipo === 'disonancia') amp *= 1.35;
        var STEPS = 22, d = '';
        for (var i = 0; i <= STEPS; i++) {
          var tt = i / STEPS, env = Math.sin(Math.PI * tt);
          var wave = Math.sin(tt * 3.4 - ph * 1.7 + r._ph) + 0.45 * Math.sin(tt * 6.6 - ph * 1.5 + r._ph * 1.9);
          if (r.tipo === 'disonancia') wave = Math.sin(tt * 3.4 - ph * 1.7 + r._ph) - 0.55 * Math.sin(tt * 5.2 + ph * 1.3 + r._ph);
          var off = amp * env * wave * 0.6;
          var x = ax + dx * tt + nx * off, y = ay + dy * tt + ny * off;
          d += (i ? ' L ' : 'M ') + x.toFixed(1) + ',' + y.toFixed(1);
        }
        if (r._p) r._p.setAttribute('d', d);
        if (flowing) r._p.setAttribute('stroke-dashoffset', (-t * 0.03) % 1000);
      });

      updateTip();
    }

    function refreshHi() {
      var fn = state.active, ff = state.focusFen;
      obras.forEach(function (n) {
        var op = 1;
        if (fn) {
          if (n.id === fn) op = 1;
          else if (adj[fn] && adj[fn][n.id]) op = 1;
          else op = 0.08;
        } else if (ff) {
          op = (n.f || []).indexOf(ff) >= 0 ? 1 : 0.09;
        }
        n._c.style.opacity = op;
      });

      rels.forEach(function (r) {
        var op = '';
        if (fn) {
          var touchF = (r.a === fn || r.b === fn);
          op = touchF ? 0.82 : (adj[fn] && adj[fn][r.a] && adj[fn] && adj[fn][r.b]) ? 0.42 : 0.04;
        } else if (ff) {
          var na = byId[r.a], nb = byId[r.b];
          op = (na && na.f && na.f.indexOf(ff) >= 0 && nb && nb.f && nb.f.indexOf(ff) >= 0) ? 0.65 : 0.05;
        }
        if (r._p) r._p.style.strokeOpacity = op;
      });
    }

    function showGuion(f) {
      var guion = document.getElementById('atlasarch-caption');
      if (!guion) return;
      if (!f) { guion.classList.remove('is-on'); return; }
      guion.innerHTML = '<strong>' + FEN[f].label + '.</strong> ' + (FEN[f].g || '');
      guion.classList.add('is-on');
    }

    function focusFen(f) {
      state.active = null;
      var panel = document.getElementById('atlasarch-panel');
      if (panel) panel.classList.remove('is-open');
      state.focusFen = (state.focusFen === f) ? null : f;
      showGuion(state.focusFen);
      buildLegend();
      refreshHi();
      updateTip();
    }

    function buildLegend() {
      var fenList = document.getElementById('atlasarch-fen-list');
      if (!fenList) return;
      fenList.innerHTML = '';
      FIDS.forEach(function (id) {
        var f = FEN[id];
        var div = document.createElement('div');
        div.className = 'atlasarch-fen-item' + (state.focusFen === id ? ' is-sel' : '');
        div.dataset.fen = id;
        div.innerHTML = '<span class="atlasarch-fen-dot" style="background:' + f.c + ';color:' + f.c + '"></span><span class="atlasarch-fen-label">' + f.label + '</span>';
        div.addEventListener('click', function () { focusFen(id); });
        fenList.appendChild(div);
      });
    }

    function abrirFicha(id) {
      state.focusFen = null;
      showGuion(null);
      state.active = id;
      buildLegend();
      refreshHi();
      updateTip();
      var panel = document.getElementById('atlasarch-panel'), pbody = document.getElementById('atlasarch-panel-body');
      if (!panel || !pbody) return;
      var o = byId[id];
      pbody.innerHTML = '<h5>' + o.t + '</h5><p class="atlasarch-autor">' + o.a + (o.y ? ' · ' + o.y : '') + '</p><p class="atlasarch-lugar">' + LUG[o.l][2] + '</p>' + (o.ap ? '<p class="atlasarch-apunte">' + o.ap + '</p>' : '');
      panel.classList.add('is-open');
    }

    function updateTip() {
      // tooltip
    }

    // controles
    var viewSeg = document.getElementById('atlasarch-vista');
    if (viewSeg) {
      viewSeg.addEventListener('click', function (e) {
        if (e.target.dataset.v) {
          var v = e.target.dataset.v;
          state.view = v;
          state.active = null;
          var panel = document.getElementById('atlasarch-panel');
          if (panel) panel.classList.remove('is-open');
          render();
        }
      });
    }

    var capaSeg = document.getElementById('atlasarch-capa');
    if (capaSeg) {
      capaSeg.addEventListener('click', function (e) {
        if (e.target.dataset.v) {
          state.layer = e.target.dataset.v;
          render();
        }
      });
    }

    var mareaSeg = document.getElementById('atlasarch-marea');
    if (mareaSeg) {
      mareaSeg.addEventListener('click', function (e) {
        if (e.target.dataset.v) {
          state.tide = (e.target.dataset.v === 'flujo');
          if (!state.tide) place(0);
        }
      });
    }

    var resetBtn = document.getElementById('atlasarch-reset-fen');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () { focusFen(null); });
    }

    // mouse & zoom
    svg.addEventListener('wheel', function (e) {
      e.preventDefault();
      var r = svg.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width * VW;
      var py = (e.clientY - r.top) / r.height * VH;
      var factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      var nk = Math.max(0.6, Math.min(7, vpt.k * factor));
      var f = nk / vpt.k;
      vpt.tx = px - (px - vpt.tx) * f;
      vpt.ty = py - (py - vpt.ty) * f;
      vpt.k = nk;
      applyVP();
    }, { passive: false });

    var panning = false, sx = 0, sy = 0, otx = 0, oty = 0;
    svg.addEventListener('mousedown', function (e) { panning = true; sx = e.clientX; sy = e.clientY; otx = vpt.tx; oty = vpt.ty; });
    window.addEventListener('mousemove', function (e) {
      if (!panning) return;
      var r = svg.getBoundingClientRect();
      vpt.tx = otx + (e.clientX - sx) / r.width * VW;
      vpt.ty = oty + (e.clientY - sy) / r.height * VH;
      applyVP();
    });
    window.addEventListener('mouseup', function () { panning = false; });

    // fullscreen
    var fsBtn = document.getElementById('atlasarch-fullscreen');
    if (fsBtn) {
      fsBtn.addEventListener('click', function () {
        if (document.fullscreenElement) document.exitFullscreen();
        else if (svg.requestFullscreen) svg.requestFullscreen();
      });
    }

    render();
    requestAnimationFrame(function loop(t) { place(t); requestAnimationFrame(loop); });
  }

  function boot() {
    if (window.__ATLAS_DATA__) { init(window.__ATLAS_DATA__); return; }
    var base = SCRIPT_SRC.replace(/js\/[^\/?#]*(?:[?#].*)?$/, 'data/agua-de-por-medio/');
    fetch(base + 'datos-atlas.json')
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)); })
      .then(init)
      .catch(function (err) {
        var el = document.getElementById('atlasarch-cy');
        if (el) el.innerHTML = '<p style="padding:2rem;font-family:monospace;font-size:0.75rem;color:#b9b09f;">No se pudieron cargar los datos (' + err.message + ').</p>';
      });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
