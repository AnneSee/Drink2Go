document.addEventListener('DOMContentLoaded', () => {
  const noJsMenu = document.querySelector('.main-header__site-nav');
  const noJsToggle = document.querySelector('.main-header__toggle');

  // Ищет и выключает класс
  noJsMenu.classList.remove('.main-header__site-nav--nojs');
  noJsToggle.classList.remove('.main-header__toggle--nojs');
})

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-nav');
  const toggleButton = document.querySelector('.menu-toggle');

  function toggleMenuOpen() {
    header.classList.toggle('.main-header__site-nav--open');
    toggleButton.classList.toggle('.menu-toggle--open');
  }

  toggleButton.addEventListener('click', toggleMenuOpen)
})
