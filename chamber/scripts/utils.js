// I will replace the target substrings with te loaded json
function buildCardTemplateWithData(member) {
    const section = document.createElement("section");
    section.innerHTML =
        `
        <h2>${member.info.name}</h2>
        <p>${member.info.address}</p>
        <hr>
        <div>
            <img src="${member.info.image}" alt="${member.info.name} logo">
            <p><span><strong>EMAIL:</strong></span>${member.info.email}</p>
            <p><span><strong>PHONE:</strong></span>${member.info.phone}</p>
            <p><span><strong>URL:</strong></span>${member.info.url}</p>
            <p><span><strong>LEVEL:</strong></span>${member.info.level}</p>
        </div>
    `;

    return section;
}

// get the element
const cards = document.querySelector(".cards");

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("data/members.json");
    const data = await response.json();
    data.members.forEach((member) => {
        // pass the member to the helper function && get the return
        cards.appendChild(buildCardTemplateWithData(member));
    });
})

// change layout of members to grid or list
const displaySelection = document.querySelector("#display");
displaySelection.addEventListener("click", () => {
    // if it was grid when clicked, then display grid.
    if (displaySelection.textContent == 'Grid') {
        cards.classList.remove("list");
        cards.classList.add("grid");
        displaySelection.textContent = 'List';
    } else {
        cards.classList.remove("grid");
        cards.classList.add("list");
        displaySelection.textContent = 'Grid';
    }
});

// ham menu
const menu = document.querySelector("#menu");
const navMenu = document.querySelector(".navigation");
menu.addEventListener("click", () => {
    navMenu.classList.toggle("responsive");
});

// waywind
const menuList = document.querySelector("nav ul");
const matcher = document.querySelector("#menu-matcher");
menuList.addEventListener("click", (e) => {
    matcher.textContent = e.target.textContent;
})