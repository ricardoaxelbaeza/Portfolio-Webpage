
const hamMenu = document.querySelector('.hamburger-menu')
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click',() =>{
    offScreenMenu.classList.toggle('active');
})

