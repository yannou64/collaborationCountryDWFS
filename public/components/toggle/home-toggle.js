/**
 * @fileoverview Gestionnaire de l'affichage de la section home
 * @module home-toggle
 * @description Ce module gère l'affichage de la section home et le masquage des autres sections
 */

/**
 * Bascule l'affichage vers la section home
 * @function toggleHome
 * @description Affiche la section home et masque les sections favoris et country
 * @returns {void}
 * @throws {Error} Si un ou plusieurs éléments requis ne sont pas trouvés dans le DOM
 */
export function toggleHome() {
    console.log("Exécution de toggleHome");
    
    const homeSection = document.getElementById('home');
    const favorisSection = document.getElementById('favoris');
    const countrySection = document.getElementById('country');

    if (!homeSection || !favorisSection || !countrySection) {
        console.error("Un ou plusieurs éléments n'ont pas été trouvés");
        return;
    }

    // Afficher la section home
    homeSection.style.display = 'flex';
    // Cacher les autres sections
    favorisSection.style.display = 'none';
    countrySection.style.display = 'none';

    console.log("Affichage de la section home terminé");
}
