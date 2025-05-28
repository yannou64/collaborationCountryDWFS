/**
 * @fileoverview Gestionnaire de suppression des favoris
 * @module delet-favoris
 */

import { removeFavorite } from "../services/local-storage.js";

/**
 * Gère la suppression d'un favori lorsqu'un bouton de suppression est cliqué
 * @function handleFavoriteDeletion
 * @param {Event} e - L'événement de clic
 * @returns {void}
 * 
 * @example
 * // Ajouter l'écouteur d'événement
 * document.addEventListener('click', handleFavoriteDeletion);
 */
export function handleFavoriteDeletion(e) {
  console.log('Event target:', e.target); // Debug
  console.log('Has delete-button class:', e.target.classList.contains("delete-button")); // Debug
  
  // Vérifie si l'élément cliqué est un bouton de suppression
  if (e.target.classList.contains("delete-button")) {
    // Récupère l'ID du favori à supprimer
    const favoriteId = Number(e.target.getAttribute("data-favorite-id"));
    console.log('Favorite ID:', favoriteId); // Debug

    // Trouve l'élément de la liste correspondant au favori
    const favoriteItem = document.querySelector(`li[data-favorite-id="${favoriteId}"]`);
    console.log('Favorite item found:', !!favoriteItem); // Debug

    // Si l'élément existe, le supprime du DOM et du stockage local
    if (favoriteItem) {
      favoriteItem.remove();
      removeFavorite(favoriteId);
      console.log('removeFavorite called with:', favoriteId); // Debug
    }
  }
}