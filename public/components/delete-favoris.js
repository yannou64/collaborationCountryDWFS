/**
 * @fileoverview Gestionnaire de suppression des favoris
 * @module delete-favoris
 * @description Ce module gère la suppression des pays favoris dans l'interface utilisateur
 * et la synchronisation avec le stockage local. Il fournit une fonction pour gérer
 * les événements de suppression et met à jour à la fois le DOM et le stockage local.
 */

import { removeFavorite } from "../services/local-storage.js";

/**
 * Gère la suppression d'un favori lorsqu'un bouton de suppression est cliqué
 * @function handleFavoriteDeletion
 * @param {Event} e - L'événement de clic sur le bouton de suppression
 * @returns {void}
 * @throws {Error} Si l'ID du favori n'est pas un nombre valide ou si l'élément n'est pas trouvé
 * 
 * @example
 * // Ajouter l'écouteur d'événement
 * document.addEventListener('click', handleFavoriteDeletion);
 */
export function handleFavoriteDeletion(e) {
    console.log('[DEBUG] handleFavoriteDeletion - Événement reçu:', e.type);
    console.log('[DEBUG] Élément cliqué:', e.target);

    // Vérifie si l'élément cliqué est un bouton de suppression
    if (e.target.classList.contains("delete-button")) {
        console.log('[DEBUG] Bouton de suppression détecté');
        
        // Récupère l'ID du favori à supprimer
        const favoriteId = Number(e.target.getAttribute("data-favorite-id"));
        console.log('[DEBUG] ID du favori à supprimer:', favoriteId);

        if (isNaN(favoriteId)) {
            console.error('[ERROR] ID de favori invalide:', favoriteId);
            throw new Error('ID de favori invalide');
        }

        // Trouve l'élément de la carte correspondant au favori
        const favoriteCard = document.querySelector(`.favorite-card[data-favorite-id="${favoriteId}"]`);
        console.log('[DEBUG] Carte favori trouvée:', favoriteCard ? 'Oui' : 'Non');

        // Si la carte existe, ajoute une animation de suppression et la supprime
        if (favoriteCard) {
            console.log('[DEBUG] Suppression de la carte du DOM');
            
            // Ajoute une classe pour l'animation de suppression
            favoriteCard.classList.add('favorite-card-removing');
            
            // Attend la fin de l'animation avant de supprimer
            favoriteCard.addEventListener('animationend', () => {
                favoriteCard.remove();
                console.log('[DEBUG] Carte supprimée du DOM');
            });

            // Supprime le favori du stockage local
            console.log('[DEBUG] Suppression du favori du stockage local');
            removeFavorite(favoriteId);
            
            console.log('[DEBUG] Favori supprimé avec succès');
        } else {
            console.warn('[WARN] Aucune carte favori trouvée pour l\'ID:', favoriteId);
        }
    }
}