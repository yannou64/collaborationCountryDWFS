/**
 * @fileoverview Gestionnaire des boutons de recherche de pays
 * @module button-handler
 * @description Ce module gère les interactions avec les boutons de recherche
 * et les champs de saisie pour la recherche de pays. Il permet la recherche
 * soit par clic sur le bouton, soit par appui sur la touche Entrée.
 */

import { getCountry } from '../services/api.js';
import { displayCountry } from '../components/country.js';

/**
 * Initialise les gestionnaires d'événements pour les boutons de recherche
 * @function initButtonHandlers
 * @description Configure les écouteurs d'événements pour le bouton de recherche
 * et le champ de saisie, permettant la recherche de pays par clic ou par touche Entrée
 * @returns {void}
 * @throws {Error} Si les éléments du DOM requis ne sont pas trouvés
 * 
 * @example
 * // Initialiser les gestionnaires de boutons
 * initButtonHandlers();
 */
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
