/**
 * @fileoverview Gestionnaire du thème sombre/clair
 * @module toggle-dark
 * @description Ce module gère le basculement entre le mode sombre et clair,
 * ainsi que la persistance de la préférence utilisateur.
 */

import { saveTheme, loadTheme } from "../../services/local-storage.js";

const THEME_KEY = 'theme';

/**
 * Gère le basculement entre le mode sombre et clair
 * @function toggleDarkMode
 * @description Bascule la classe 'dark' sur l'élément HTML, met à jour l'icône et sauvegarde la préférence
 * @returns {void}
 * @throws {Error} Si l'élément toggle n'est pas trouvé dans le DOM
 */
export const toggleDarkMode = () => {
    console.log('[DEBUG] toggleDarkMode - Début du basculement du thème');
    
    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    
    if (!toggle) {
        console.error('[ERROR] Élément theme-toggle non trouvé');
        throw new Error('Élément theme-toggle non trouvé');
    }

    const isDark = html.classList.toggle('dark');
    console.log('[DEBUG] Nouveau thème:', isDark ? 'sombre' : 'clair');
    
    // Mise à jour de l'icône
    if (isDark) {
        console.log('[DEBUG] Mise à jour de l\'icône vers mode sombre');
        toggle.innerHTML = '🌙';
        saveTheme('dark');
    } else {
        console.log('[DEBUG] Mise à jour de l\'icône vers mode clair');
        toggle.innerHTML = '☀️';
        saveTheme('light');
    }
    
    console.log('[DEBUG] Thème sauvegardé avec succès');
};

/**
 * Initialise le thème au chargement de la page
 * @function initTheme
 * @description Vérifie le thème sauvegardé et applique les paramètres appropriés
 * @returns {void}
 * @throws {Error} Si l'élément toggle n'est pas trouvé dans le DOM
 */
export const initTheme = () => {
    console.log('[DEBUG] initTheme - Initialisation du thème');
    
    const savedTheme = loadTheme();
    console.log('[DEBUG] Thème sauvegardé:', savedTheme);
    
    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    
    if (!toggle) {
        console.error('[ERROR] Élément theme-toggle non trouvé');
        throw new Error('Élément theme-toggle non trouvé');
    }
    
    if (savedTheme === 'dark') {
        console.log('[DEBUG] Application du thème sombre');
        html.classList.add('dark');
        toggle.innerHTML = '🌙';
    } else {
        console.log('[DEBUG] Application du thème clair');
        html.classList.remove('dark');
        toggle.innerHTML = '☀️';
    }
    
    console.log('[DEBUG] Thème initialisé avec succès');
};

/**
 * Initialise le composant de thème
 * @function initThemeComponent
 * @description Ajoute les écouteurs d'événements nécessaires
 * @returns {void}
 */
export const initThemeComponent = () => {
    console.log('[DEBUG] initThemeComponent - Initialisation du composant de thème');
    
    document.addEventListener('DOMContentLoaded', () => {
        console.log('[DEBUG] DOM chargé, initialisation du thème');
        initTheme();
    });
    
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        console.log('[DEBUG] Ajout de l\'écouteur d\'événement sur le bouton de thème');
        toggle.addEventListener('click', toggleDarkMode);
    } else {
        console.error('[ERROR] Élément theme-toggle non trouvé lors de l\'initialisation');
    }
};
