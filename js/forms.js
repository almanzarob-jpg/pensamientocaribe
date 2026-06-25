(function () {
  var toast = document.getElementById('toast');
  var toastTimer;

  function showToast() {
    if (!toast) return;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('visible');
    }, 4000);
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

      showToast();
      contactForm.reset();
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
