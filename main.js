const sitePop = document.querySelector('.popsite')
const closePop = document.querySelector('.x')

window.addEventListener('scroll', fromUp)

function fromUp(){
    sitePop.classList.add('active')
}

closePop.addEventListener('click', closeUp)

function closeUp(){
    sitePop.classList.add('endgame')
}