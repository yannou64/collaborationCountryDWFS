/**
 * @fileoverview Gestionnaire de la barre de navigation
 * @module navbar-handler
 * @description Ce module gère les interactions avec les boutons de la barre de navigation,
 * notamment la navigation entre les sections favoris et home. Il configure les écouteurs
 * d'événements pour les boutons de navigation.
 */

import { toggleFavoris } from "../components/toggle/favoris-togle.js";
import { toggleHome } from "../components/toggle/home-toggle.js";

/**
 * Initialise les gestionnaires d'événements pour la barre de navigation
 * @function initNavbarHandlers
 * @description Configure les écouteurs d'événements pour les boutons de navigation
 * (favoris et home), permettant de basculer entre les différentes sections
 * @returns {void}
 * @throws {Error} Si les éléments du DOM requis ne sont pas trouvés
 * 
 * @example
 * // Initialiser les gestionnaires de la barre de navigation
 * initNavbarHandlers();
 */
export function initNavbarHandlers() {
    // Gestion du bouton favoris
    const favorisButton = document.getElementById('favoris-toggle');
    favorisButton.addEventListener('click', (e) => {
        e.preventDefault();
        toggleFavoris();
    });

    // Gestion du bouton home
    const homeButton = document.getElementById('home-toggle');
    homeButton.addEventListener('click', (e) => {
        e.preventDefault();
        toggleHome();
    });
}
