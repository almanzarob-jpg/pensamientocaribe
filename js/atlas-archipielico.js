/* ════════════════════════════════════════════════
   CON EL AGUA DE POR MEDIO
   Atlas para una antropología archipiélica — grafo Cytoscape.js
   Datos: data/agua-de-por-medio/datos-atlas.json (ver README del pipeline).
   La unidad de análisis es la obra y su relación, no el lugar.
   ════════════════════════════════════════════════ */
(function () {
  // Capturado en frío, síncronamente, mientras este script se ejecuta:
  // document.currentScript deja de ser válido en cuanto cede al event loop
  // (p. ej. dentro de un callback de DOMContentLoaded).
  var SCRIPT_SRC = (document.currentScript && document.currentScript.src) || '';

  function init(ATLAS) {
    const el = document.getElementById('atlasarch-cy');
    if (!el || typeof cytoscape === 'undefined') return;

    function fenColor(id) { return (ATLAS.fenomenos[id] && ATLAS.fenomenos[id].c) || '#888'; }

    // ── grado de cada obra (para tamaño de nodo) ──
    const grado = {};
    ATLAS.obras.forEach(o => grado[o.id] = 0);
    ATLAS.relaciones.forEach(r => { grado[r.a] = (grado[r.a]||0)+1; grado[r.b] = (grado[r.b]||0)+1; });

    // ── posiciones iniciales deterministas: un sector por fenómeno,
    //    un anillo de obras dentro de cada sector. Con randomize:false
    //    esto vuelve el layout estable entre recargas (mismo insumo,
    //    mismo resultado), a diferencia de un cose puramente aleatorio. ──
    const fenIds = Object.keys(ATLAS.fenomenos);
    const R1 = 380, R2 = 140;
    const porFen = {};
    fenIds.forEach(f => porFen[f] = []);
    ATLAS.obras.forEach(o => { const f = (o.f && o.f[0]) || fenIds[0]; (porFen[f] || (porFen[f]=[])).push(o); });

    const posiciones = {};
    fenIds.forEach((f, i) => {
      const angF = (i / fenIds.length) * 2 * Math.PI;
      const cx = Math.cos(angF) * R1, cy = Math.sin(angF) * R1;
      const grupo = porFen[f] || [];
      grupo.forEach((o, j) => {
        const angO = grupo.length > 1 ? (j / grupo.length) * 2 * Math.PI : 0;
        posiciones[o.id] = {
          x: cx + Math.cos(angO) * R2,
          y: cy + Math.sin(angO) * R2
        };
      });
    });

    const nodes = ATLAS.obras.map(o => ({
      data: {
        id: o.id,
        label: o.t.length > 34 ? o.t.slice(0, 32) + '…' : o.t,
        fen0: (o.f && o.f[0]) || null,
        fen1: (o.f && o.f[1]) || null,
        color0: fenColor(o.f && o.f[0]),
        color1: fenColor((o.f && o.f[1]) || (o.f && o.f[0])),
        grado: grado[o.id] || 0,
        obra: o
      },
      position: posiciones[o.id] || { x: 0, y: 0 }
    }));

    const edges = ATLAS.relaciones.map((r, i) => {
      const pendiente = /por corroborar/i.test(r.fuente || '');
      return {
        data: {
          id: 'r' + i, source: r.a, target: r.b,
          tipo: r.tipo, fuente: r.fuente,
          pendienteNum: pendiente ? 1 : 0
        }
      };
    });

    const cy = cytoscape({
      container: el,
      elements: { nodes, edges },
      minZoom: 0.15, maxZoom: 3.5,
      style: [
        { selector: 'node', style: {
            'background-color': 'data(color0)',
            'border-width': 2.2, 'border-color': 'data(color1)',
            'width': 'mapData(grado, 0, 14, 10, 32)',
            'height': 'mapData(grado, 0, 14, 10, 32)',
            'label': 'data(label)',
            'color': '#f2ead8',
            'font-family': 'Inter, sans-serif',
            'font-size': 6,
            'text-valign': 'bottom', 'text-margin-y': 4,
            'text-wrap': 'none', 'text-opacity': 0.75,
            'transition-property': 'opacity, border-width',
            'transition-duration': 120
        }},
        { selector: 'node.atlasarch-dim', style: { 'opacity': 0.08, 'text-opacity': 0 } },
        { selector: 'node.atlasarch-hl', style: { 'border-width': 3.6, 'border-color': '#f07a16', 'z-index': 999 } },
        { selector: 'edge', style: {
            'width': 1, 'curve-style': 'bezier',
            'line-color': '#b9b09f',
            'target-arrow-shape': 'none',
            'opacity': 'mapData(pendienteNum, 0, 1, 0.4, 0.15)'
        }},
        { selector: 'edge[tipo = "disonancia"]', style: { 'line-color': '#d83a2e', 'line-style': 'dashed' } },
        { selector: 'edge.atlasarch-dim', style: { 'opacity': 0.02 } }
      ],
      layout: {
        name: 'cose', randomize: false, animate: false,
        idealEdgeLength: 70, nodeRepulsion: 9000, gravity: 45,
        numIter: 1200, padding: 40
      }
    });

    // ── leyenda de fenómenos ──
    const fenListEl = document.getElementById('atlasarch-fen-list');
    const activos = new Set(fenIds);
    const conteos = {};
    ATLAS.obras.forEach(o => (o.f || []).forEach(f => conteos[f] = (conteos[f] || 0) + 1));

    fenIds.forEach(id => {
      const fen = ATLAS.fenomenos[id];
      const div = document.createElement('div');
      div.className = 'atlasarch-fen-item';
      div.dataset.fen = id;
      div.title = fen.g;
      div.innerHTML = '<span class="atlasarch-fen-dot" style="background:' + fen.c + '"></span>'
                    + '<span class="atlasarch-fen-label">' + fen.label + '</span>'
                    + '<span class="atlasarch-fen-count">' + (conteos[id] || 0) + '</span>';
      div.addEventListener('click', () => {
        if (activos.has(id)) activos.delete(id); else activos.add(id);
        applyFenFilter();
      });
      fenListEl.appendChild(div);
    });

    const resetBtn = document.getElementById('atlasarch-reset-fen');
    if (resetBtn) resetBtn.addEventListener('click', () => { fenIds.forEach(id => activos.add(id)); applyFenFilter(); });

    function applyFenFilter() {
      fenListEl.querySelectorAll('.atlasarch-fen-item').forEach(el2 => {
        el2.classList.toggle('is-off', !activos.has(el2.dataset.fen));
      });
      cy.nodes().forEach(n => {
        const visible = activos.has(n.data('fen0')) || activos.has(n.data('fen1'));
        n.toggleClass('atlasarch-dim', !visible);
      });
      cy.edges().forEach(e => {
        const s = cy.getElementById(e.data('source')), t = cy.getElementById(e.data('target'));
        e.toggleClass('atlasarch-dim', s.hasClass('atlasarch-dim') || t.hasClass('atlasarch-dim'));
      });
    }

    // ── búsqueda ──
    const searchEl = document.getElementById('atlasarch-search');
    if (searchEl) searchEl.addEventListener('input', (ev) => {
      const q = ev.target.value.trim().toLowerCase();
      cy.nodes().removeClass('atlasarch-hl');
      if (!q) return;
      cy.nodes().forEach(n => {
        const o = n.data('obra');
        if ((o.t + ' ' + o.a).toLowerCase().includes(q)) n.addClass('atlasarch-hl');
      });
    });

    // ── panel de detalle ──
    const panel = document.getElementById('atlasarch-panel');
    const panelBody = document.getElementById('atlasarch-panel-body');
    const panelClose = document.getElementById('atlasarch-panel-close');
    if (panelClose) panelClose.addEventListener('click', () => panel.classList.remove('is-open'));

    function lugarLabel(id) {
      const l = ATLAS.lugares[id];
      return l ? l[2] + (l[3] === 'ciudad' && l[4] ? ' · ' + l[4] : '') : id;
    }

    function abrirFicha(id) {
      const o = ATLAS.obras.find(x => x.id === id);
      if (!o) return;
      const fens = (o.f || []).map(f => '<span class="atlasarch-fen-chip" style="background:' + fenColor(f) + '">' + (ATLAS.fenomenos[f] ? ATLAS.fenomenos[f].label : f) + '</span>').join('');
      const rels = ATLAS.relaciones.filter(r => r.a === id || r.b === id);
      const relHtml = rels.map(r => {
        const otroId = r.a === id ? r.b : r.a;
        const otro = ATLAS.obras.find(x => x.id === otroId);
        const pend = /por corroborar/i.test(r.fuente || '');
        return '<div class="atlasarch-rel-item" data-jump="' + otroId + '">'
          + '<span class="atlasarch-rel-tipo ' + r.tipo + '">' + r.tipo + '</span>'
          + '<span class="atlasarch-rel-t">' + (otro ? otro.t : otroId) + '</span>'
          + '<span class="atlasarch-rel-fuente' + (pend ? ' is-pendiente' : '') + '">' + (r.fuente || '') + '</span>'
          + '</div>';
      }).join('') || '<p class="atlasarch-stat-line">Sin relaciones registradas todavía.</p>';

      panelBody.innerHTML = fens
        + '<h5>' + o.t + '</h5>'
        + '<p class="atlasarch-autor">' + o.a + (o.y ? ' · ' + o.y : '') + '</p>'
        + '<p class="atlasarch-lugar">' + lugarLabel(o.l) + ' · ' + o.tr + '</p>'
        + (o.ap ? '<p class="atlasarch-apunte">' + o.ap + '</p>' : '')
        + '<h6 class="atlasarch-rel-title">Relaciones (' + rels.length + ')</h6>'
        + relHtml;

      panelBody.querySelectorAll('.atlasarch-rel-item').forEach(item => {
        item.addEventListener('click', () => { abrirFicha(item.dataset.jump); centrarNodo(item.dataset.jump); });
      });
      panel.classList.add('is-open');
    }

    function centrarNodo(id) {
      const n = cy.getElementById(id);
      if (n && n.length) cy.animate({ center: { eles: n }, zoom: Math.max(cy.zoom(), 1.1) }, { duration: 300 });
    }

    cy.on('tap', 'node', (ev) => abrirFicha(ev.target.id()));
    cy.on('tap', (ev) => { if (ev.target === cy) panel.classList.remove('is-open'); });

    // ── pantalla completa ──
    // Externalizamos el contenedor completo (leyenda + grafo), no solo el
    // lienzo del grafo: así los fenómenos, el buscador y las convenciones
    // de los flujos siguen visibles a pantalla completa.
    const fsBtn = document.getElementById('atlasarch-fullscreen');
    const wrap = el.closest('.atlasarch-wrap') || el;
    function reflow(fit) {
      cy.resize();
      if (fit) cy.fit(cy.elements(':visible'), 48);
    }
    if (fsBtn) fsBtn.addEventListener('click', () => {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (wrap.requestFullscreen) wrap.requestFullscreen();
    });
    document.addEventListener('fullscreenchange', () => {
      const isFs = document.fullscreenElement === wrap;
      if (fsBtn) fsBtn.textContent = isFs ? 'Salir' : 'Pantalla completa';
      // dejamos que el navegador pinte el nuevo tamaño antes de recalcular
      setTimeout(() => reflow(true), 180);
    });

    // ── estado del corpus (argumento implícito, sin CTA) ──
    const pend = ATLAS.relaciones.filter(r => /por corroborar/i.test(r.fuente || '')).length;
    const statObras = document.getElementById('atlasarch-stat-obras');
    const statRel = document.getElementById('atlasarch-stat-rel');
    const statCorrob = document.getElementById('atlasarch-stat-corrob');
    if (statObras) statObras.innerHTML = '<b>' + ATLAS.obras.length + '</b> obras';
    if (statRel) statRel.innerHTML = '<b>' + ATLAS.relaciones.length + '</b> relaciones';
    if (statCorrob) statCorrob.innerHTML = '<b>' + (ATLAS.relaciones.length - pend) + '</b> corroboradas · <b class="is-pendiente">' + pend + '</b> por corroborar';
  }

  function boot() {
    var base = SCRIPT_SRC.replace(/js\/[^\/?#]*(?:[?#].*)?$/, 'data/agua-de-por-medio/');
    fetch(base + 'datos-atlas.json')
      .then(r => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)))
      .then(init)
      .catch(err => {
        const el = document.getElementById('atlasarch-cy');
        if (el) el.innerHTML = '<p style="padding:2rem;font-family:var(--ff-mono);font-size:0.75rem;color:#b9b09f;">No se pudieron cargar los datos del atlas (' + err.message + ').</p>';
      });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
