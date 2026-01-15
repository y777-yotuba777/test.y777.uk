const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

console.log('わざわざDevToolsとかを開いてるってことは君も同類？');

const setMenuState = (isActive) => {
    navMenu.classList.toggle('active', isActive);
    menuBtn.setAttribute('aria-expanded', isActive.toString());
};

menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isExpanded = navMenu.classList.contains('active');
    setMenuState(!isExpanded);
    
    if (!isExpanded) {
        navMenu.addEventListener('transitionend', () => {
            navMenu.querySelector('a')?.focus();
        }, { once: true });
    }
});

document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        setMenuState(false);
    }
});

menuBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuBtn.click();
    } else if (e.key === 'Escape') {
        setMenuState(false);
        menuBtn.focus();
    }
});
