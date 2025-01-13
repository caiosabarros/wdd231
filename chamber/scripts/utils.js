// I will replace the target substrings with te loaded json
function buildCardTemplateWithData(member) {

    const cardsDirectoryTemplate =
        `
    <section>
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
    </section>
    `;

    return cardsDirectoryTemplate;
}

// get the element
const cards = document.querySelector(".cards");

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("data/members.json");
    const data = await response.json();
    data.members.forEach((member) => {
        // pass the member to the helper function && get the return
        const templateCard = buildCardTemplateWithData(member)
        // insert it to the target .cards 
        cards.insertAdjacentHTML('afterbegin', templateCard);
    });
})




