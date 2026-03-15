// Mobile navigation hamburger toggle
(function () {
  'use strict';

  var hamburger = document.querySelector('.nav__hamburger');
  var menu = document.querySelector('.nav__menu');

  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', function () {
    var expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('nav__menu--open');
  });

  // Close menu on link click (mobile)
  menu.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav__link')) {
      hamburger.setAttribute('aria-expanded', 'false');
      menu.classList.remove('nav__menu--open');
    }
  });
})();
