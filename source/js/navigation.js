const nav = document.querySelector('.main-header__site-nav');
const navToggle = document.querySelector('.site-nav__toggle');

// Функция, переключающая состояние меню по клику с открытого на закрытое
navToggle.onclick = function() {
  // Закрывает меню
  nav.classList.toggle('main-header__site-nav--closed');
  // Открывает меню
  nav.classList.toggle('main-header__site-nav--opened');
}

// // Ищет БЭМ-класс меню сайта main-header__site-nav
// const nav = document.querySelector('.main-header__site-nav');
// // Ищет БЭМ-класс, содержащий в себе кнопку меню site-nav__toggle
// const navToggle = document.querySelector('.site-nav__toggle');
// // Ищет БЭМ-класс без js меню main-header__site-nav--nojs
// const noJsMenu = document.querySelector('.main-header__site-nav--nojs');
// // Ищет класс для изображения кнопки menu-toggle
// const menuToggle = document.querySelector('.menu-toggle');

// // Скрывает main-header__site-nav--nojs
// navToggle.classList.remove('.main-header__site-nav--nojs')

// // Функция, переключающая состояние меню по клику с открытого на закрытое
// function navToggleClosed() {
//   // Вызывает стиль - Закрывает меню
//   nav.classList.toggle('main-header__site-nav--closed');
// }

// // Добавляем обработчик события - клик на закрыть меню
// nav.addEventListener('click', navToggleClosed);

// function
