/**
 * @fileoverview Point d'entrée principal de l'application
 * @module main
 * @description Ce module initialise l'application et configure les gestionnaires
 * d'événements principaux. Il gère l'initialisation de la barre de navigation,
 * des boutons de recherche et des interactions utilisateur de base.
 */

// API
import { getCountries, getCountry } from "./public/services/api.js";
import { constructCountryPage, displayCountry } from "./public/components/country.js";
import { initNavbarHandlers } from "./public/handler/navbar-handler.js";
import { initButtonHandlers } from "./public/handler/button-handler.js";

/**
 * Initialise l'application lorsque le DOM est chargé
 * @function initApp
 * @description Configure les gestionnaires d'événements et initialise
 * les composants principaux de l'application
 * @returns {void}
 * 
 * @example
 * // L'initialisation se fait automatiquement au chargement du DOM
 * document.addEventListener('DOMContentLoaded', initApp);
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des handlers de la navbar
    initNavbarHandlers();
    
    // Initialisation des handlers des boutons
    initButtonHandlers();

    // On écoute le boutton d'exploration
    document.getElementById("btn_input").addEventListener("click", async () => {
        const country = document.getElementById("input").value.trim();
        if (country) {
            await displayCountry(country);
        } else {
            alert('Veuillez entrer un nom de pays');
        }
    });
});

