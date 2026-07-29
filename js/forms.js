(function () {
  /* Dónde aterrizan los formularios del sitio.
     El endpoint viejo `formspree.io/correo@dominio` dejó de existir cuando Formspree
     pasó a identificadores de formulario, así que el contacto llevaba meses fallando
     en silencio: el visitante veía un aviso de error y el mensaje no llegaba a nadie.
     Mientras no haya identificador nuevo, el formulario redacta el correo en el cliente
     del visitante, que funciona sin depender de ningún servicio. Para volver al envío
     en segundo plano basta con poner aquí el `formspree.io/f/xxxxxx`. */
  var ENDPOINT = '';
  var CORREO = 'cpensamientocaribe@gmail.com';

  var toast = document.getElementById('toast');
  var toastDefaultText = toast ? toast.textContent : '';
  var toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message || toastDefaultText;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('visible');
      toast.textContent = toastDefaultText;
    }, 4500);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearErrors(form) {
    var fields = form.querySelectorAll('.form-field');
    for (var i = 0; i < fields.length; i++) {
      fields[i].classList.remove('error');
    }
  }

  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors(contactForm);

      var emailField = contactForm.querySelector('[name="email"]');
      var nameField = contactForm.querySelector('[name="name"]');
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var valid = true;

      if (nameField && nameField.value.trim().length < 2) {
        nameField.closest('.form-field').classList.add('error');
        valid = false;
      }

      if (emailField && !validateEmail(emailField.value)) {
        emailField.closest('.form-field').classList.add('error');
        valid = false;
      }

      if (!valid) return;

      if (!ENDPOINT) {
        var nombre = nameField ? nameField.value.trim() : '';
        var correo = emailField ? emailField.value.trim() : '';
        var asuntoF = contactForm.querySelector('[name="subject"]');
        var mensajeF = contactForm.querySelector('[name="message"], textarea');
        var asunto = (asuntoF && asuntoF.value.trim()) || ('Mensaje de ' + (nombre || 'la web'));
        var cuerpo = (mensajeF ? mensajeF.value.trim() : '') +
          '\n\n— ' + nombre + (correo ? ' · ' + correo : '');
        window.location.href = 'mailto:' + CORREO +
          '?subject=' + encodeURIComponent(asunto) +
          '&body=' + encodeURIComponent(cuerpo);
        showToast('Se abrió tu correo con el mensaje listo. Si no se abrió, escríbenos a ' + CORREO + '.');
        return;
      }

      if (submitBtn) submitBtn.disabled = true;

      fetch(ENDPOINT, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            showToast('Gracias. Tu mensaje ha sido enviado al grupo.');
            contactForm.reset();
          } else {
            return response.json().then(function (data) {
              throw new Error((data && data.error) || 'Error al enviar');
            });
          }
        })
        .catch(function () {
          showToast('No se pudo enviar el mensaje. Escríbenos directamente a cpensamientocaribe@gmail.com.');
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  var subscribeForm = document.getElementById('subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors(subscribeForm);

      var emailField = subscribeForm.querySelector('[name="email"]');

      if (emailField && !validateEmail(emailField.value)) {
        emailField.closest('.form-field').classList.add('error');
        return;
      }

      showToast();
      subscribeForm.reset();
    });
  }
})();
