const hamButton = document.querySelector("#menu");
const navigationMenu = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigationMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// waywinding
function wayWind() {
    const currentPagePath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((navLink) => {
        if (String(navLink.getAttribute("href")).includes(navLink.textContent)) {
            // TODO: remove it from HOME nav link
            navLink.classList.add("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", wayWind);