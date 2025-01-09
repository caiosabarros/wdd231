document.addEventListener('DOMContentLoaded', () => {
    let lastModified = document.lastModified;
    let paragraph = document.getElementById("lastModified");
    if (paragraph) {
        paragraph.textContent = `Last Modified ${lastModified}`;
    }

    const d = new Date();
    let year = d.getFullYear();
    let currentYear = document.querySelector("#currentyear");
    if (currentYear) {
        currentYear.textContent = `${year}`;
    }
}, { passive: true });