/**
 * @fileoverview Gestionnaire d'ajout des favoris
 * @module add-favoris
 * @description Ce module gère l'ajout des pays en favoris dans l'interface utilisateur
 * et la synchronisation avec le stockage local.
 */

import { addFavorite } from "../services/local-storage.js";

/**
 * Gère l'ajout d'un pays en favori
 * @function handleFavoriteAddition
 * @param {string} countryName - Le nom du pays à ajouter en favori
 * @param {string} flagUrl - L'URL du drapeau du pays
 * @returns {void}
 * @throws {Error} Si le nom du pays est invalide ou si l'ajout échoue
 * 
 * @example
 * // Ajouter un pays en favori
 * handleFavoriteAddition('France', 'https://flagcdn.com/fr.svg');
 */
export function handleFavoriteAddition(countryName, flagUrl) {
    console.log('[DEBUG] handleFavoriteAddition - Ajout d\'un nouveau favori');
    console.log('[DEBUG] Pays à ajouter:', countryName);

    if (!countryName || !flagUrl) {
        console.error('[ERROR] Données invalides pour l\'ajout du favori');
        throw new Error('Données invalides pour l\'ajout du favori');
    }

    // Créer l'objet favori
    const favorite = {
        id: Date.now(), // Utiliser timestamp comme ID unique
        name: countryName,
        flagUrl: flagUrl
    };

    // Ajouter aux favoris dans le localStorage
    addFavorite(favorite);

    // Créer et ajouter la carte de favori dans le DOM
    const favoritesContainer = document.querySelector('.favorites-container');
    if (!favoritesContainer) {
        console.error('[ERROR] Conteneur des favoris non trouvé');
        return;
    }

    const favoriteCard = document.createElement('div');
    favoriteCard.className = 'favorite-card';
    favoriteCard.setAttribute('data-favorite-id', favorite.id);

    favoriteCard.innerHTML = `
        <img src="${flagUrl}" alt="Drapeau de ${countryName}" class="favorite-flag">
        <h2>${countryName}</h2>
        <button class="delete-button" data-favorite-id="${favorite.id}">Retirer</button>
    `;

    favoritesContainer.appendChild(favoriteCard);
    console.log('[DEBUG] Carte de favori ajoutée avec succès');
}
