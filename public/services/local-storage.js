/**
 * @fileoverview Service de gestion du stockage local
 * @module local-storage
 * @description Ce module gère la persistance des données dans le localStorage,
 * notamment les favoris et les préférences de thème.
 */

/**
 * Clés utilisées pour le stockage dans le localStorage
 * @constant {Object}
 * @private
 */
const STORAGE_KEYS = {
    FAVORITES: "favorites",
    THEME: "theme"
};

/**
 * Sauvegarde une donnée dans le localStorage
 * @param {string} key - Clé de stockage
 * @param {any} data - Données à sauvegarder
 * @returns {void}
 * @throws {Error} Si la clé est invalide ou si les données ne peuvent pas être sérialisées
 * @private
 */
function saveToStorage(key, data) {
    console.log(`[DEBUG] saveToStorage - Sauvegarde des données pour la clé: ${key}`);
    
    if (!Object.values(STORAGE_KEYS).includes(key)) {
        console.error('[ERROR] Clé de stockage invalide:', key);
        throw new Error('Clé de stockage invalide');
    }

    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
        console.log('[DEBUG] Données sauvegardées avec succès');
    } catch (error) {
        console.error('[ERROR] Erreur lors de la sauvegarde:', error);
        throw new Error('Impossible de sauvegarder les données');
    }
}

/**
 * Charge une donnée depuis le localStorage
 * @param {string} key - Clé de stockage
 * @param {any} defaultValue - Valeur par défaut si aucune donnée n'est trouvée
 * @returns {any} Données chargées ou valeur par défaut
 * @throws {Error} Si la clé est invalide ou si les données ne peuvent pas être désérialisées
 * @private
 */
function loadFromStorage(key, defaultValue) {
    console.log(`[DEBUG] loadFromStorage - Chargement des données pour la clé: ${key}`);
    
    if (!Object.values(STORAGE_KEYS).includes(key)) {
        console.error('[ERROR] Clé de stockage invalide:', key);
        throw new Error('Clé de stockage invalide');
    }

    try {
        const data = localStorage.getItem(key);
        if (!data) {
            console.log('[DEBUG] Aucune donnée trouvée, utilisation de la valeur par défaut');
            return defaultValue;
        }
        const parsedData = JSON.parse(data);
        console.log('[DEBUG] Données chargées avec succès');
        return parsedData;
    } catch (error) {
        console.error('[ERROR] Erreur lors du chargement:', error);
        throw new Error('Impossible de charger les données');
    }
}

/**
 * Sauvegarde la liste des favoris dans le localStorage
 * @param {Array} favorites - Liste des favoris à sauvegarder
 * @returns {void}
 * @throws {Error} Si les données ne peuvent pas être sauvegardées
 */
export function saveFavorites(favorites) {
    console.log('[DEBUG] saveFavorites - Sauvegarde des favoris');
    console.log('[DEBUG] Nombre de favoris à sauvegarder:', favorites.length);
    saveToStorage(STORAGE_KEYS.FAVORITES, favorites);
}

/**
 * Charge la liste des favoris depuis le localStorage
 * @returns {Array} Liste des favoris, retourne un tableau vide si aucun favori n'est trouvé
 * @throws {Error} Si les données ne peuvent pas être chargées
 */
export function loadFavorites() {
    console.log('[DEBUG] loadFavorites - Chargement des favoris');
    const favorites = loadFromStorage(STORAGE_KEYS.FAVORITES, []);
    console.log('[DEBUG] Nombre de favoris chargés:', favorites.length);
    return favorites;
}

/**
 * Ajoute un nouveau favori à la liste
 * @param {Object} favorite - L'objet favori à ajouter
 * @param {string|number} favorite.id - L'identifiant unique du favori
 * @returns {void}
 * @throws {Error} Si les données ne peuvent pas être sauvegardées
 */
export function addFavorite(favorite) {
    console.log('[DEBUG] addFavorite - Ajout d\'un nouveau favori');
    console.log('[DEBUG] ID du favori à ajouter:', favorite.id);
    
    const favorites = loadFavorites();
    favorites.push(favorite);
    saveFavorites(favorites);
    console.log('[DEBUG] Favori ajouté avec succès');
}

/**
 * Supprime un favori de la liste en utilisant son identifiant
 * @param {string|number} favoriteId - L'identifiant du favori à supprimer
 * @returns {void}
 * @throws {Error} Si les données ne peuvent pas être sauvegardées
 */
export function removeFavorite(favoriteId) {
    console.log('[DEBUG] removeFavorite - Suppression d\'un favori');
    console.log('[DEBUG] ID du favori à supprimer:', favoriteId);
    
    let favorites = loadFavorites();
    const initialLength = favorites.length;
    favorites = favorites.filter((f) => f.id !== favoriteId);
    
    if (favorites.length === initialLength) {
        console.warn('[WARN] Aucun favori trouvé avec l\'ID:', favoriteId);
    } else {
        console.log('[DEBUG] Favori supprimé avec succès');
    }
    
    saveFavorites(favorites);
}

/**
 * Sauvegarde le thème dans le localStorage
 * @param {string} theme - Le thème à sauvegarder ('light' ou 'dark')
 * @returns {void}
 * @throws {Error} Si le thème est invalide ou si les données ne peuvent pas être sauvegardées
 */
export function saveTheme(theme) {
    console.log('[DEBUG] saveTheme - Sauvegarde du thème');
    console.log('[DEBUG] Thème à sauvegarder:', theme);
    
    if (theme !== 'light' && theme !== 'dark') {
        console.error('[ERROR] Thème invalide:', theme);
        throw new Error('Thème invalide');
    }
    
    saveToStorage(STORAGE_KEYS.THEME, theme);
    console.log('[DEBUG] Thème sauvegardé avec succès');
}

/**
 * Charge le thème depuis le localStorage
 * @returns {string} Le thème chargé, retourne 'light' par défaut
 * @throws {Error} Si les données ne peuvent pas être chargées
 */
export function loadTheme() {
    console.log('[DEBUG] loadTheme - Chargement du thème');
    const theme = loadFromStorage(STORAGE_KEYS.THEME, 'light');
    console.log('[DEBUG] Thème chargé:', theme);
    return theme;
}