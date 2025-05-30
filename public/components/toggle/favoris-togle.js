/**
 * @fileoverview Gestionnaire de l'affichage de la section favoris
 * @module favoris-toggle
 * @description Ce module gère l'affichage de la section favoris et le masquage des autres sections
 */

/**
 * Bascule l'affichage vers la section favoris
 * @function toggleFavoris
 * @description Affiche la section favoris et masque les sections home et country
 * @returns {void}
 * @throws {Error} Si un ou plusieurs éléments requis ne sont pas trouvés dans le DOM
 */
export function toggleFavoris() {
    console.log("Exécution de toggleFavoris");
    
    const favorisSection = document.getElementById('favoris');
    const homeSection = document.getElementById('home');
    const countrySection = document.getElementById('country');

    if (!favorisSection || !homeSection || !countrySection) {
        console.error("Un ou plusieurs éléments n'ont pas été trouvés");
        return;
    }

    // Afficher la section favoris
    favorisSection.style.display = 'flex';
    // Cacher les autres sections
    homeSection.style.display = 'none';
    countrySection.style.display = 'none';

    console.log("Affichage de la section favoris terminé");
}
