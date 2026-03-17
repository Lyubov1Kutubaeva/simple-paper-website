const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.list__logo');

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle('menu__active');
});