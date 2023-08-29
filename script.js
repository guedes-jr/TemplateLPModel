// Menu
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})

window.scroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}