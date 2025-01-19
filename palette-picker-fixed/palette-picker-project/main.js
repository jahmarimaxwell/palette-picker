// importing json into javascript
import palettes from '../palettes.json' with { type: 'json' };
// importng functions from another javascript file
import { handlePaletteSubmit } from './helper-function.js';
import { makePaletteCard } from './palette.js';
// import { deleteButtonAction } from './delete-palette.js';

const head = document.querySelector('head');

const displayPalettes = () => {
    palettes.forEach(palette => {
        makePaletteCard(palette);
    });
}

// Display palettes on page load
window.onload = displayPalettes;

const main = () => {
    handlePaletteSubmit();
    makePaletteCard();
// deleteButtonAction();
}

main();
