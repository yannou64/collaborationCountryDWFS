/**
 * @fileoverview Gestionnaire de l'affichage de la section pays
 * @module country-toggle
 * @description Ce module gère l'affichage de la section pays et le masquage des autres sections
 */

/**
 * Bascule l'affichage vers la section pays
 * @function toggleCountry
 * @description Affiche la section pays et masque les sections home et favoris
 * @returns {void}
 * @throws {Error} Si un ou plusieurs éléments requis ne sont pas trouvés dans le DOM
 */
export function toggleCountry() {
    console.log("Exécution de toggleCountry");
    
    const favorisSection = document.getElementById('favoris');
    const homeSection = document.getElementById('home');
    const countrySection = document.getElementById('country');

    if (!favorisSection || !homeSection || !countrySection) {
        console.error("Un ou plusieurs éléments n'ont pas été trouvés");
        return;
    }

    // Afficher la section pays
    countrySection.style.display = 'flex';
    // Cacher les autres sections
    homeSection.style.display = 'none';
    favorisSection.style.display = 'none';

    console.log("Affichage de la section pays terminé");
}
