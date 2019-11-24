﻿function initScrollSuave() {
    const linksInternos = document.querySelectorAll(".header-menu-item a[href^='#']");

    console.log('teste')
    console.log(linksInternos)

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}

initScrollSuave();