import { getCountry } from '../services/api.js';
import { displayCountry } from '../components/country.js';

export function initButtonHandlers() {
    const exploreButton = document.getElementById('btn_input');
    const inputField = document.getElementById('input');

    if (exploreButton && inputField) {
        exploreButton.addEventListener('click', async () => {
            const countryName = inputField.value.trim();
            if (countryName) {
                await displayCountry(countryName);
            } else {
                alert('Veuillez entrer un nom de pays');
            }
        });

        // Ajouter aussi la possibilité de chercher en appuyant sur Entrée
        inputField.addEventListener('keypress', async (event) => {
            if (event.key === 'Enter') {
                const countryName = inputField.value.trim();
                if (countryName) {
                    await displayCountry(countryName);
                } else {
                    alert('Veuillez entrer un nom de pays');
                }
            }
        });
    }
}
