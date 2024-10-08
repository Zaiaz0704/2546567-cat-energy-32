/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

nav.classList.remove('nav--nojs');
nav.classList.remove('nav--opened');
nav.classList.add('nav--closed');

navToggle.addEventListener('click', () => {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});
