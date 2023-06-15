const menuToggle = document.getElementById('nav-toggle');

const mobileNav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', expandNav);

function expandNav() {
  mobileNav.classList.toggle('is-visible');
}
