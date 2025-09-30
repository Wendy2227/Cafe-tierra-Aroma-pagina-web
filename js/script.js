//  menú hamburguesa
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navToggle.checked = false;
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navToggle.checked = false;
  }
});
