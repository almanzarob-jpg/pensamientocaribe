/* ════════════════════════════════════════════════
   LÍNEAS DE INVESTIGACIÓN DESPLEGABLES
   Clic en tarjeta → panel con texto, imágenes y audio.
   Las imágenes y el audio se cargan automáticamente si
   existen los archivos:
     assets/img/lineas/<slug>-01.jpg  (y -02.jpg)
     assets/audio/lineas/<slug>.mp3
   Si no existen, se muestran espacios "por agregar".
   ════════════════════════════════════════════════ */
(function () {
  function init() {
    var cards = document.querySelectorAll('.card-line--expandable');
    var panel = document.getElementById('linea-detalle');
    if (!cards.length || !panel) return;

    var panelTitle = panel.querySelector('.linea-detalle-title');
    var panelBody = panel.querySelector('.linea-detalle-body');
    var closeBtn = panel.querySelector('.linea-detalle-close');
    var activeSlug = null;

    // ── Comprueba si un archivo existe (para imágenes y audio) ──
    function fileExists(url) {
      return fetch(url, { method: 'HEAD' })
        .then(function (r) {
          var type = r.headers.get('content-type') || '';
          return r.ok && type.indexOf('text/html') === -1;
        })
        .catch(function () { return false; });
    }

    // ── Construye la columna de medios: imágenes + audio ──
    function buildMedia(aside) {
      var slug = aside.getAttribute('data-slug');
      if (!slug) return;

      var imgsWrap = document.createElement('div');
      imgsWrap.className = 'linea-media-imgs';
      aside.appendChild(imgsWrap);

      ['01', '02'].forEach(function (num) {
        var src = 'assets/img/lineas/' + slug + '-' + num + '.jpg';
        var fig = document.createElement('figure');
        fig.className = 'linea-img';
        fig.innerHTML = '<div class="linea-img-placeholder"><span>Imagen ' + num + '</span><span class="ph-note">por agregar</span></div>';
        imgsWrap.appendChild(fig);

        fileExists(src).then(function (ok) {
          if (ok) {
            fig.innerHTML = '<img src="' + src + '" alt="Imagen de la línea de investigación" loading="lazy">';
          }
        });
      });

      var audioWrap = document.createElement('div');
      audioWrap.className = 'linea-audio';
      audioWrap.innerHTML =
        '<p class="linea-audio-label"><span class="linea-audio-icon">♪</span> Paisaje sonoro</p>' +
        '<div class="linea-audio-placeholder">Audio por agregar</div>';
      aside.appendChild(audioWrap);

      var audioSrc = 'assets/audio/lineas/' + slug + '.mp3';
      fileExists(audioSrc).then(function (ok) {
        if (ok) {
          var ph = audioWrap.querySelector('.linea-audio-placeholder');
          var audio = document.createElement('audio');
          audio.controls = true;
          audio.preload = 'none';
          audio.src = audioSrc;
          ph.replaceWith(audio);
        }
      });
    }

    function closePanel() {
      panel.classList.remove('open');
      activeSlug = null;
      cards.forEach(function (c) {
        c.classList.remove('is-open');
        c.setAttribute('aria-expanded', 'false');
      });
      setTimeout(function () { panel.hidden = true; }, 350);
    }

    function openPanel(card) {
      var slug = card.getAttribute('data-linea');

      // Clic sobre la línea ya abierta → cerrar
      if (activeSlug === slug) { closePanel(); return; }

      var tpl = document.querySelector('template[data-linea-tpl="' + slug + '"]');
      if (!tpl) return;

      activeSlug = slug;
      cards.forEach(function (c) {
        var esEsta = c === card;
        c.classList.toggle('is-open', esEsta);
        c.setAttribute('aria-expanded', esEsta ? 'true' : 'false');
      });

      panelTitle.textContent = card.querySelector('h3').textContent;
      panelBody.innerHTML = '';
      panelBody.appendChild(tpl.content.cloneNode(true));

      var aside = panelBody.querySelector('.linea-detalle-media');
      if (aside) buildMedia(aside);

      panel.hidden = false;
      // Forzar reflow para que la transición se aplique
      void panel.offsetHeight;
      panel.classList.add('open');

      setTimeout(function () {
        var rect = panel.getBoundingClientRect();
        var navH = 80;
        var targetY = window.pageYOffset + rect.top - navH - 16;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }, 80);
    }

    // Marcar que init ya corrió
    if (cards[0]) cards[0]._lineasReady = true;

    cards.forEach(function (card) {
      card.addEventListener('click', function () { openPanel(card); });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openPanel(card);
        }
      });
    });

    closeBtn.addEventListener('click', closePanel);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && activeSlug) closePanel();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Fallback: re-intentar en load por si DOMContentLoaded se perdió
  window.addEventListener('load', function () {
    var panel = document.getElementById('linea-detalle');
    if (!panel) return;
    var firstCard = document.querySelector('.card-line--expandable');
    if (firstCard && !firstCard._lineasReady) {
      init();
    }
  });
})();
