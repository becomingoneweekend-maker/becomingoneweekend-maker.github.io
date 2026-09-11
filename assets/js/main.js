(function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (!toggle || !links) return;

  function closeNav() {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
})();

(function () {
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  if (!form || !status) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = 'Sending...';
    status.className = 'form-status';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        form.reset();
        status.textContent = "Thanks! We'll be in touch soon.";
        status.className = 'form-status success';
      } else {
        status.textContent = 'Something went wrong. Please try again.';
        status.className = 'form-status error';
      }
    }).catch(function () {
      status.textContent = 'Something went wrong. Please try again.';
      status.className = 'form-status error';
    });
  });
})();
