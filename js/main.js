const selectElement = (element) => document.querySelector(element);

const navToggle = selectElement('.burger');
const navMenu = selectElement('.nav__menu');

navToggle.addEventListener('click', (e) => {
  e.preventDefault();

  navToggle.classList.toggle('open');
  navMenu.classList.toggle('open');
});
