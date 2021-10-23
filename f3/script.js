const navTransition = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-links');

    window.addEventListener('click', function (evt) {
        if (evt.target.matches('.nav-links') || evt.target.matches('.main-nav') || evt.target.matches(".nav-toggle") || evt.target.closest(".nav-toggle")) {
            return;
        }
        mainNav.classList.remove('active');
    });

    navToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });

    navLinks.forEach((links, index) => {
        if(links.style.animation) {
            links.style.animation = '';
        } else {
            links.style.animation = `navLinksFade .3s ease forwards ${index / 10 + .2}s`
        };
    });
};
navTransition();
