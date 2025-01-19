// importing json into javascript
import { makePaletteCard } from './palette.js';

// selects form from html
const form = document.getElementById('new-palette-form');

// function for event listener for the form
export const handlePaletteSubmit = (event) => {
    if (event) {
    // prevents the default form submit behavior
    event.preventDefault();

    // uses events target
    const form = event.target;

    // store value from form into variable 
    const title = form.paletteName.value;
    const colors = [
        form.color1.value,
        form.color2.value,
        form.color3.value,
    ];
    const temperature = form.temperature.value;

    // empty array 
    let palettes = [];
    const newPalette = { title, colors, temperature };
    palettes.push(newPalette);
    localStorage.setItem(title, JSON.stringify(palettes));
    makePaletteCard({ title, colors, temperature });
    form.reset();
    }
}
export const deletePalette = (deleteButton, cardContainer) => {
    deleteButton.addEventListener('click', () => {
        const paletteCard = document.getElementById(cardContainer);
        if (paletteCard) {
            paletteCard.remove();
        }
    });
}
export const copyToClipboard = (element, hexCode) => {
    element.addEventListener('click', () => {
        navigator.clipboard.writeText(hexCode)
            .then(() => {
                console.log(`Copied ${hexCode} to clipboard`);
                alert(`Copied ${hexCode} to clipboard`);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
}
form.addEventListener('submit', handlePaletteSubmit);
