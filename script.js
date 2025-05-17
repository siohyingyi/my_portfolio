const toggleButton = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (toggleButton && navMenu) {
  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// ===== Close menu when link is clicked =====
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// ===== Trigger CSS animations once DOM is ready =====
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});
