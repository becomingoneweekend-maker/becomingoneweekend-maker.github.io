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
