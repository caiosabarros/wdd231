const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    // card build code
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const dateOfBirth = document.createElement("p");
        const placeOfBirth = document.createElement("p");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", prophet.name + prophet.lastname + "'s portrait" + `- ${prophet.order}${Number(prophet.order) == 1 ? 'st' : Number(prophet.order) == 2 ? 'nd' : Number(prophet.order) == 3 ? 'rd' : 'th'}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", '340');
        portrait.setAttribute("height", '440');

        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}