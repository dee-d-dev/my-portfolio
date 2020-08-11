
var icon = document.querySelector('.icon');
var mobileNav = document.querySelector('.nav-mobile');
var mobileNavText = document.querySelector('.nav-mobile ul li');
var close = document.querySelector('.close');
var slide = document.querySelector('#nav-mobile');
var mobileLink = document.querySelector('.mobile');
var alter = document.querySelector('.btn');
var body = document.querySelector('body');
var wrapper = document.querySelector('.wrapper');
var bodyHeader = document.querySelector('.header--left');
var iconDay = document.querySelectorAll('.bar');
var sun = document.querySelector('.sun');
var icons = document.querySelectorAll('.icons')



icon.addEventListener('click', navFunction);

mobileLink.addEventListener('click', slide);

alter.addEventListener('click', change);


function navFunction() {
    if (icon.classList.toggle('change')) {
        mobileNav.style.animation = 'slideIn 1s';
        mobileNav.style.display = 'block'
    } else {
        mobileNav.style.animation = 'slideOut 1s ease-in-out forwards';   
    }

}

function slide() {
    mobileNav.style.animation = 'slideOut 1s ease-in-out forwards';
}

function change() {
    body.classList.toggle('day-mode');
    wrapper.classList.toggle('day-mode');

    bodyHeader.classList.toggle('day-mode');

    // icons.classList.toggle('day-mode');

    sun.classList.toggle('sun-dark');

    mobileNav.classList.toggle('nav-mobile-light');
    mobileNavText.classList.toggle('nav-mobile-light ul li a');

    
}












