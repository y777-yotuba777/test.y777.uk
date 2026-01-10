const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', (event) => {
    const isExpanded = navMenu.classList.contains('active');
    navMenu.classList.toggle('active');
    menuBtn.setAttribute(' aria-expanded', (!isExpanded).toString());
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && event.target !== menuBtn) {
        navMenu.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
    }
});