const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.header__toggle');
const productsTitle = document.querySelector('.products');

navMain.classList.remove('navigation--nojs');
navToggle.classList.remove('header__toggle--nojs');

if (productsTitle !== null) {
  productsTitle.classList.remove('products--nojs');
}

if (navMain !== null && navToggle !== null) {
  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('navigation--opened')) {
      navMain.classList.remove('navigation--opened');
      navMain.classList.add('navigation--closed');
      navToggle.classList.remove('header__toggle--close');
      navToggle.classList.add('header__toggle--open');
    } else {
      navMain.classList.remove('navigation--closed');
      navMain.classList.add('navigation--opened');
      navToggle.classList.remove('header__toggle--open');
      navToggle.classList.add('header__toggle--close');
    }
  });
} else {
  console.error('required class not found');
}
