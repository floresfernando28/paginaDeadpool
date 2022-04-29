// Funcionalidad al apartado 'Reparto Principal'

var typed = new Typed('#reparto__principal', {
    strings: ["Ryan Reynolds", "Vanessa Carlysle", "Cable", "Russell Collins"],
    backSpeed: 100,
    typeSpeed: 100,
    loop: true
})

// Funcionalidad al boton al modo responsive

const boton__menu = document.querySelectorAll('.boton__menu');
const menu = document.querySelector('.container-2');


boton__menu.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        menu.classList.toggle('active')
    })
})

// Le añadimos una clase al header

const header = document.querySelector('header');

document.addEventListener('scroll', ()=>{
    header.classList.toggle('active', scrollY>0)
})

// Slider


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerview: 1,
    spaceBetween: 10,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },


    breakpoints: {
        400: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        620: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        920:{
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1240:{
            slidesPerView: 3,
            spaceBetween: 15,
        }
    }
  });
