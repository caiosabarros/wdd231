const hamButton = document.querySelector("#menu");
const navigationMenu = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigationMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
});