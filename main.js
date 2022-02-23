let button = document.querySelector('button');
let arrow = document.querySelector('.left')
button.addEventListener('click', e => {
    arrow.classList.toggle('changeToCross')
})