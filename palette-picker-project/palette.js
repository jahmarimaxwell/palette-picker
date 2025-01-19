/// updating work
import { deletePalette } from './helper-function.js';
import { copyToClipboard } from './helper-function.js';

export const makePaletteCard = (palettes) => {
    if (palettes) {
    const { title, colors, temperature } = palettes;
    console.log({ title, colors, temperature });
    
    // Create the main card container
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", `${title}-container`);
    cardContainer.setAttribute("class", "card-container");

    const bigCardContainer = document.getElementById('big-card-container');
    const bodyContainer = document.createElement("div");
    bodyContainer.setAttribute("id", "body-container");

    // Create the card list item
    const cardLi = document.createElement("li");
    cardLi.setAttribute("id", "card-list");

    const titleContainer = document.createElement("p");
    titleContainer.setAttribute("id", "title-container");
    titleContainer.textContent = title;

    const colorContainer = document.createElement("div");
    colorContainer.setAttribute("id", "palette-color-container");

    const hexContainer = document.createElement("div");
    hexContainer.setAttribute("id", "hex-container");

    // Function to create a color div with text and example
    const createColorDiv = (color, hex) => {
        const colorDiv = document.createElement("div");
        colorDiv.setAttribute("id", "color");
        colorDiv.style.backgroundColor = color;

        const colorDivText = document.createElement("div");
        colorDivText.setAttribute("id", "color-div-text");

        const text = document.createElement("p");
        text.textContent = 'Text';
        text.style.color = "white";

        const example = document.createElement("p");
        example.textContent = 'Example';
        example.style.color = "black";
        
        colorDivText.append(text, example);
        colorDiv.append(colorDivText);

        const hexDiv = document.createElement("div");
        hexDiv.setAttribute("id", "hex");
        hexDiv.textContent = `Copy ${hex}`;

        const singleColorContainer = document.createElement("div");
        singleColorContainer.setAttribute("id", "single-color-container");
        singleColorContainer.append(colorDiv);

        return { singleColorContainer, hexDiv };
    };

    const { singleColorContainer: color1, hexDiv: hex1 } = createColorDiv(colors[0], colors[0]);
    const { singleColorContainer: color2, hexDiv: hex2 } = createColorDiv(colors[1], colors[1]);
    const { singleColorContainer: color3, hexDiv: hex3 } = createColorDiv(colors[2], colors[2]);

    const deleteButtonContainer = document.createElement("div");
    deleteButtonContainer.setAttribute("id", "delete-button-container");

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete-button");
    deleteButton.textContent = 'Delete Palette';

    const temperatureContainer = document.createElement("div");
    temperatureContainer.setAttribute("id", "temperature-container");
    temperatureContainer.textContent = temperature;

    colorContainer.append(color1, color2, color3);
    hexContainer.append(hex1, hex2, hex3);
    bodyContainer.append(colorContainer, hexContainer);
    deleteButtonContainer.append(deleteButton);

    cardLi.append(titleContainer, bodyContainer, deleteButtonContainer, temperatureContainer);
    cardContainer.append(cardLi);
    bigCardContainer.appendChild(cardContainer);

    deletePalette(deleteButton, `${title}-container`);
    copyToClipboard(hex1, colors[0]);
    copyToClipboard(hex2, colors[1]);
    copyToClipboard(hex3, colors[2]);
    };
}
    // cardContainer.style.backgroundColor = green;