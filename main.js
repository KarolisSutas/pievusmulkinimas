(function () {
  'use strict';

  // Mobile meniu perjungimas
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Uždaryti meniu' : 'Atidaryti meniu');
    });

    // Paspaudus nuorodą – uždaryti meniu
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Atidaryti meniu');
      }
    });

    // Esc – uždaryti
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('is-open')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Scroll animacijos (reputation + family sekcijos)
  document.querySelectorAll('.reputation, .family').forEach(function (section) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
        }
      });
    }, { threshold: 0.15 });
    obs.observe(section);
  });

  // Footerio metai
  const metai = document.getElementById('metai');
  if (metai) { metai.textContent = String(new Date().getFullYear()); }
})();
