const hambugerMenu= document.querySelector('.hamburger-menu');
const menuClose= document.querySelector('.fa-bars');
const menuOpen= document.querySelector('.fa-times');

menuClose.addEventListener('click', function(){
    hambugerMenu.style.display= 'block';
});

menuOpen.addEventListener('click', function(){
    hambugerMenu.style.display= 'none';
});