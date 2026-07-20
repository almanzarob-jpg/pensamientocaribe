(function () {
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

      if (submitBtn) submitBtn.disabled = true;

      fetch(contactForm.action, {
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
