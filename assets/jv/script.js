const hamMenu = document.querySelector('#Menu');
const OffScreenMenu = document.querySelector('#Menu-Off');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    OffScreenMenu.classList.toggle('active');
})