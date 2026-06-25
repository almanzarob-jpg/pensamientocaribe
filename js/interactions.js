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

    function filterPubs() {
      var query = pubSearchInput.value.trim().toLowerCase();
      var visibleCount = 0;
      for (var p = 0; p < pubEntries.length; p++) {
        var entry = pubEntries[p];
        var matches = !query || entry.textContent.toLowerCase().indexOf(query) !== -1;
        entry.hidden = !matches;
        if (matches) visibleCount++;
      }
      if (pubEmpty) pubEmpty.hidden = visibleCount !== 0;
      if (pubCount) pubCount.textContent = query ? visibleCount + ' / ' + pubEntries.length : '';
    }

    pubSearchInput.addEventListener('input', filterPubs);
  }
})();
