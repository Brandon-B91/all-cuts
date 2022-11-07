
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