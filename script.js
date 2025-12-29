const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', (event) => {
    navMenu.classList.toggle('active');
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && event.target !== menuBtn) {
        navMenu.classList.remove('active');
    }
});