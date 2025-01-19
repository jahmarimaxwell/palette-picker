export const deletePalette = (deleteButton, cardContainer) => {
    deleteButton.addEventListener('click', () => {
        const paletteCard = document.getElementById(cardContainer);
        if (paletteCard) {
            paletteCard.remove();
        }
    });
}