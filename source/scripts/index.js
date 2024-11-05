const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation--closed') && navToggle.classList.contains('header__toggle--open')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
    navToggle.classList.remove('header__toggle--open');
    navToggle.classList.add('header__toggle--close');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
    navToggle.classList.add('header__toggle--open');
    navToggle.classList.remove('header__toggle--close');
  }
});
