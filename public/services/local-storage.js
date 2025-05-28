/**
 * Clé utilisée pour stocker les favoris dans le localStorage
 * @constant {string}
 */
const FAVORITES_KEY = "favorites";

/**
 * Sauvegarde la liste des favoris dans le localStorage
 * @param {Array} favorites - Liste des favoris à sauvegarder
 * @returns {void}
 */
export function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

/**
 * Charge la liste des favoris depuis le localStorage
 * @returns {Array} Liste des favoris, retourne un tableau vide si aucun favori n'est trouvé
 */
export function loadFavorites() {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
}

/**
 * Ajoute un nouveau favori à la liste
 * @param {Object} favorite - L'objet favori à ajouter
 * @param {string|number} favorite.id - L'identifiant unique du favori
 * @returns {void}
 */
export function addFavorite(favorite) {
    const favorites = loadFavorites();
    favorites.push(favorite);
    saveFavorites(favorites);
}

/**
 * Supprime un favori de la liste en utilisant son identifiant
 * @param {string|number} favoriteId - L'identifiant du favori à supprimer
 * @returns {void}
 */
export function removeFavorite(favoriteId) {
    let favorites = loadFavorites();
    favorites = favorites.filter((f) => f.id !== favoriteId);
    saveFavorites(favorites);
}