// Mobile nav toggle
const headerBars = document.querySelector('.header__bars');
const mobileNav = document.querySelector('.mobile__nav');

headerBars.addEventListener('click', function () {
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile nav when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile__nav__link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function () {
        mobileNav.style.display = 'none';
    });
});