let busquedaBtn = document.querySelector('#busqueda-btn');
let busquedaBar = document.querySelector('.busqueda-bar-contenedor');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-contenedor');
let cerrarForm = document.querySelector('#cerrar-formulario');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.video-btn');

window.onscroll = () => {
    busquedaBtn.classList.remove('fa-times');
    busquedaBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

/*===========Estos son los eventos de los botones======================== */

busquedaBtn.addEventListener('click', () => { /*=========Evento del boton de busqueda========================= */
    busquedaBtn.classList.toggle('fa-times');
    busquedaBar.classList.toggle('active');
});

menu.addEventListener('click', () => { /*=========Evento del boton de Menu========================= */
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', () => { /*=====Evento de abrir y cerrar login====== */
    loginForm.classList.toggle('active');
});

cerrarForm.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

/*=====Boton de los videos=============== */
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controles .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
});

var swiper = new Swiper(".revision-slider", {
    spaceBetwee: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnIteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
})

var swiper = new Swiper(".marca-slider", {
    spaceBetwee: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnIteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
})