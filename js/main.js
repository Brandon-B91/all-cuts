
let x = document.querySelector('.fa-xmark');
let bars = document.querySelector('.fa-bars-staggered');
let menu = document.querySelector('.menu');

bars.addEventListener('click', () => {
    menu.classList.add('active')
    bars.classList.add('active')
    x.classList.add('active')
})

x.addEventListener('click', () => {
    menu.classList.remove('active')
    bars.classList.remove('active')
    x.classList.remove('active')
})

function mapApp() {
    let maps = document.querySelector('.maps');
    maps.addEventListener('click', () => {
        /* if we're on iOS, open in Apple Maps */
        if ((navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPad") != -1) ||
            (navigator.platform.indexOf("iPod") != -1))
            window.open('maps://maps.google.com/maps/dir/?daddr=3865 + Isleta + Blvd + SW, +Albuquerque, +NM + 87105');
        else /* else use Google */
            window.open('https://maps.google.com/maps/dir/?daddr=3865 + Isleta + Blvd + SW, +Albuquerque, +NM + 87105');
    });

};
mapApp();