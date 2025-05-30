import { toggleFavoris } from "../components/favoris-togle.js";
import { toggleHome } from "../components/home-toggle.js";

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
