const toggleMenu = document.querySelector('#toggle-menu');
const navMenu = document.querySelector('.navbar-wrapper');
const hidden = document.querySelector('body');
const links = document.querySelectorAll('nav ul li a');

toggleMenu.onclick = () => {
  toggleMenu.classList.toggle('bx-x');
  hidden.classList.toggle('show');
  navMenu.classList.toggle('show');
};

for (const link of links) {
  link.addEventListener('click', () => {
    toggleMenu.classList.remove('bx-x');
    hidden.classList.remove('show');
    navMenu.classList.remove('show');
  });
}

window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal('.scroll-1', {
  delay: 100,
});
ScrollReveal().reveal('.scroll-2', {
  delay: 100,
});
ScrollReveal().reveal('.scroll-3', {
  delay: 100,
});
ScrollReveal().reveal('.scroll-4', {
  delay: 100,
});
ScrollReveal().reveal('.scroll-5', {
  delay: 100,
});
ScrollReveal().reveal('.scroll-6', {
  delay: 100,
});
ScrollReveal().reveal('.scroll-7', {
  delay: 100,
});
