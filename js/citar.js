/* Copiar la cita de una publicacion al portapapeles.
   La cita se compone en el HTML desde los datos que ya tiene cada ficha
   (autoria, ano, titulo, fuente): no se inventa ningun metadato.
   Sin dependencias. Si el portapapeles no esta disponible (contexto no
   seguro, permisos denegados), recurre a un textarea temporal. */
(function () {
  'use strict';

  function avisar(boton, texto) {
    var original = boton.getAttribute('data-original') || boton.textContent;
    boton.setAttribute('data-original', original);
    boton.textContent = texto;
    boton.setAttribute('data-copiada', '');
    window.setTimeout(function () {
      boton.textContent = boton.getAttribute('data-original');
      boton.removeAttribute('data-copiada');
    }, 2200);
  }

  function respaldo(texto, boton) {
    var ta = document.createElement('textarea');
    ta.value = texto;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      avisar(boton, 'Cita copiada');
    } catch (e) {
      avisar(boton, 'No se pudo copiar');
    }
    document.body.removeChild(ta);
  }

  document.addEventListener('click', function (ev) {
    var boton = ev.target.closest('.pub-citar');
    if (!boton) return;
    var cita = boton.getAttribute('data-cita');
    if (!cita) return;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(cita).then(
        function () { avisar(boton, 'Cita copiada'); },
        function () { respaldo(cita, boton); }
      );
    } else {
      respaldo(cita, boton);
    }
  });
})();
