const open = document.querySelector('.mobel-icon');
const menu = document.querySelector('.nav-menu');
const close = document.querySelector('.nav-close');

const showMenu = () => {
    menu.classList.toggle('show');
    close.classList.toggle('show');
};

open.addEventListener('click', showMenu);
close.addEventListener('click', showMenu);