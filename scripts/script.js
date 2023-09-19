const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')
const hide =  document.querySelector('body')
const menuLinks = document.querySelectorAll(".header__link");

burger.addEventListener('click', function () {
  menu.classList.toggle('navigation-list-active')
  hide.classList.toggle('noscroll');
})


menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove('navigation-list-active');
    hide.classList.remove('noscroll');
    burger.classList.remove('opened')
  })
);