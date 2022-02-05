const Bars = document.querySelector('#bars');
const Navlink = document.querySelector('.navlink');

Bars.addEventListener('click', () => {
    Navlink.classList.toggle('active');
});