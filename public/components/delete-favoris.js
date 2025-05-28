/**
 * @fileoverview Gestionnaire de suppression des favoris
 * @module delete-favoris
 * @description Ce module gère la suppression des favoris dans l'interface utilisateur
 * et la synchronisation avec le stockage local.
 */

import { removeFavorite } from "../services/local-storage.js";

/**
 * Gère la suppression d'un favori lorsqu'un bouton de suppression est cliqué
 * @function handleFavoriteDeletion
 * @param {Event} e - L'événement de clic sur le bouton de suppression
 * @returns {void}
 * @throws {Error} Si l'ID du favori n'est pas un nombre valide
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

    // Trouve l'élément de la liste correspondant au favori
    const favoriteItem = document.querySelector(`li[data-favorite-id="${favoriteId}"]`);
    console.log('[DEBUG] Élément favori trouvé:', favoriteItem ? 'Oui' : 'Non');

    // Si l'élément existe, le supprime du DOM et du stockage local
    if (favoriteItem) {
      console.log('[DEBUG] Suppression de l\'élément du DOM');
      favoriteItem.remove();
      
      console.log('[DEBUG] Suppression du favori du stockage local');
      removeFavorite(favoriteId);
      
      console.log('[DEBUG] Favori supprimé avec succès');
    } else {
      console.warn('[WARN] Aucun élément favori trouvé pour l\'ID:', favoriteId);
    }
  }
}