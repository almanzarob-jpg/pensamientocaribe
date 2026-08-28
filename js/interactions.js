(function () {
  var progressBar = document.querySelector('.scroll-progress');
  var nav = document.querySelector('.site-nav');
  var navToggle = document.querySelector('.nav-toggle');
  var mobileOverlay = document.querySelector('.nav-mobile-overlay');
  var reveals = document.querySelectorAll('.reveal');

  function updateProgress() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0 || !progressBar) return;
    var pct = (scrollTop / docHeight) * 100;
    progressBar.style.width = pct + '%';
  }

  var lastScroll = 0;
  function handleNavScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scrollTop;
  }

  window.addEventListener('scroll', function () {
    updateProgress();
    handleNavScroll();
  }, { passive: true });

  updateProgress();
  handleNavScroll();

  if (navToggle && mobileOverlay) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      mobileOverlay.classList.toggle('open');
      document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
    });

    var mobileLinks = mobileOverlay.querySelectorAll('a');
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener('click', function () {
        navToggle.classList.remove('active');
        mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    var mobileGroupLabels = mobileOverlay.querySelectorAll('.nav-m-label');
    for (var k = 0; k < mobileGroupLabels.length; k++) {
      mobileGroupLabels[k].addEventListener('click', function () {
        var group = this.parentNode;
        var isOpen = group.classList.toggle('open');
        this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
  }

  var navAnchors = document.querySelectorAll('a[href^="#"]');
  for (var j = 0; j < navAnchors.length; j++) {
    navAnchors[j].addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var navHeight = nav ? nav.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  }

  if ('IntersectionObserver' in window) {
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      for (var r = 0; r < reveals.length; r++) {
        reveals[r].classList.add('visible');
      }
    } else {
      var observer = new IntersectionObserver(function (entries) {
        for (var e = 0; e < entries.length; e++) {
          if (entries[e].isIntersecting) {
            entries[e].target.classList.add('visible');
            observer.unobserve(entries[e].target);
          }
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      for (var k = 0; k < reveals.length; k++) {
        observer.observe(reveals[k]);
      }
    }
  } else {
    for (var m = 0; m < reveals.length; m++) {
      reveals[m].classList.add('visible');
    }
  }

  var pubSearchInput = document.getElementById('pub-search-input');
  var pubList = document.getElementById('pub-list');
  if (pubSearchInput && pubList) {
    var pubEntries = pubList.querySelectorAll('.pub-entry');
    var pubEmpty = document.getElementById('pub-empty');
    var pubCount = document.getElementById('pub-search-count');
    var pubFilterPills = document.querySelectorAll('.pub-filter-pill');
    var activeTipos = new Set();

    // Línea de investigación, si se llega desde la portada con ?linea=…
    // Los botones de las seis líneas apuntan aquí, y hasta ahora los siete
    // llevaban al catálogo entero sin filtrar.
    var lineaActiva = '';
    try {
      lineaActiva = new URLSearchParams(window.location.search).get('linea') || '';
    } catch (e) { lineaActiva = ''; }

    function filterPubs() {
      var query = pubSearchInput.value.trim().toLowerCase();
      var visibleCount = 0;
      for (var p = 0; p < pubEntries.length; p++) {
        var entry = pubEntries[p];
        var matchesQuery = !query || entry.textContent.toLowerCase().indexOf(query) !== -1;
        var matchesTipo = activeTipos.size === 0 || activeTipos.has(entry.getAttribute('data-tipo'));
        // Una publicación puede pertenecer a dos líneas: el atributo las
        // guarda separadas por espacio.
        var lineas = (entry.getAttribute('data-linea') || '').split(' ');
        var matchesLinea = !lineaActiva || lineas.indexOf(lineaActiva) !== -1;
        var matches = matchesQuery && matchesTipo && matchesLinea;
        entry.hidden = !matches;
        if (matches) visibleCount++;
      }
      if (pubEmpty) pubEmpty.hidden = visibleCount !== 0;
      var filtering = !!query || activeTipos.size > 0 || !!lineaActiva;
      if (pubCount) pubCount.textContent = filtering ? visibleCount + ' / ' + pubEntries.length : '';
    }

    // Aviso de que el catálogo llega filtrado, con salida para verlo entero.
    if (lineaActiva) {
      var rotulo = document.getElementById('pub-linea-activa');
      var nombre = document.querySelector('[data-linea-nombre="' + lineaActiva + '"]');
      if (rotulo) {
        rotulo.hidden = false;
        var texto = rotulo.querySelector('.pub-linea-texto');
        if (texto) {
          texto.textContent = nombre ? nombre.textContent : lineaActiva;
        }
        var quitar = rotulo.querySelector('.pub-linea-quitar');
        if (quitar) {
          quitar.addEventListener('click', function () {
            lineaActiva = '';
            rotulo.hidden = true;
            history.replaceState(null, '', window.location.pathname);
            filterPubs();
          });
        }
      }
      filterPubs();
    }

    pubSearchInput.addEventListener('input', filterPubs);

    for (var f = 0; f < pubFilterPills.length; f++) {
      pubFilterPills[f].addEventListener('click', function () {
        var tipo = this.getAttribute('data-tipo-filter');
        if (activeTipos.has(tipo)) {
          activeTipos.delete(tipo);
          this.setAttribute('aria-pressed', 'false');
        } else {
          activeTipos.add(tipo);
          this.setAttribute('aria-pressed', 'true');
        }
        filterPubs();
      });
    }
  }

  // ── Efemérides: lightbox de lectura al señalar la pieza ──
  // Antes la tarjeta se escalaba 1.65x en su propio sitio dentro de la
  // grilla: en piezas de retrato quedaba pequeña y con bandas laterales
  // (su caja seguía siendo 16:11), y la ficha semitransparente tapaba
  // la parte baja del diseño. Ahora el clic, Enter/Espacio o el toque
  // abren un <dialog> centrado con la imagen a su proporción real y la
  // ficha en una línea aparte, debajo — nunca superpuesta.
  var efemeridesGrids = document.querySelectorAll('.efemerides-grid');
  var efemeridesLightbox = document.getElementById('efemerides-lightbox');
  if (efemeridesGrids.length && efemeridesLightbox) {
    var lightboxImg = document.getElementById('efemerides-lightbox-img');
    var lightboxFecha = document.getElementById('efemerides-lightbox-fecha');
    var lightboxNombre = document.getElementById('efemerides-lightbox-nombre');
    var lightboxCloseBtn = document.getElementById('efemerides-lightbox-close');
    var lightboxTrigger = null;

    var openLightbox = function (card) {
      var img = card.querySelector('img');
      if (!img) return;
      var fecha = card.querySelector('.efemeride-fecha');
      var nombre = card.querySelector('.efemeride-nombre');
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt;
      if (lightboxFecha) lightboxFecha.textContent = fecha ? fecha.textContent : '';
      if (lightboxNombre) lightboxNombre.textContent = nombre ? nombre.textContent : '';
      lightboxTrigger = card;
      if (typeof efemeridesLightbox.showModal === 'function') {
        efemeridesLightbox.showModal();
      } else {
        efemeridesLightbox.setAttribute('open', '');
      }
      if (lightboxCloseBtn) lightboxCloseBtn.focus();
    };

    var closeLightbox = function () {
      if (typeof efemeridesLightbox.close === 'function' && efemeridesLightbox.open) {
        efemeridesLightbox.close();
      } else {
        efemeridesLightbox.removeAttribute('open');
      }
    };

    for (var g = 0; g < efemeridesGrids.length; g++) {
      efemeridesGrids[g].addEventListener('click', function (e) {
        var card = e.target.closest('.efemeride-card');
        if (!card) return;
        openLightbox(card);
      });

      efemeridesGrids[g].addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        var card = e.target.closest('.efemeride-card');
        if (!card) return;
        e.preventDefault();
        openLightbox(card);
      });
    }

    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener('click', closeLightbox);
    }

    // Clic en el fondo del <dialog> (fuera de la figura) lo cierra;
    // Escape lo cierra solo mediante el comportamiento nativo de
    // showModal, así que aquí solo cubrimos el clic de fondo.
    efemeridesLightbox.addEventListener('click', function (e) {
      if (e.target === efemeridesLightbox) closeLightbox();
    });

    efemeridesLightbox.addEventListener('close', function () {
      if (lightboxTrigger) lightboxTrigger.focus();
    });
  }
})();
