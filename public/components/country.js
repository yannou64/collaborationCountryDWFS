/**
 * @fileoverview Gestionnaire d'affichage des informations des pays
 * @module country
 * @description Ce module gère la construction et l'affichage des pages de pays,
 * incluant les informations détaillées comme le drapeau, la capitale, la population, etc.
 */

import { getCountry } from '../services/api.js';
import { displayMap } from '../services/api.js';
import { toggleCountry } from './toggle/country-toggle.js';

/**
 * Construit la page de pays et l'affiche
 * @function constructCountryPage
 * @returns {void}
 * @throws {Error} Si le conteneur de pays n'est pas trouvé dans le DOM
 */
export function constructCountryPage() {
    const countryContainer = document.getElementById('country');
    if (countryContainer) {
        countryContainer.style.display = 'flex';
    }
}

/**
 * Affiche les informations détaillées d'un pays
 * @function displayCountry
 * @param {string} countryName - Le nom du pays à afficher
 * @returns {Promise<void>}
 * @throws {Error} Si le pays n'est pas trouvé ou si une erreur survient lors de l'affichage
 * 
 * @example
 * // Afficher les informations de la France
 * await displayCountry('France');
 */
export async function displayCountry(countryName) {
    try {
        const countryData = await getCountry(countryName);
        if (!countryData || countryData.length === 0) {
            throw new Error('Pays non trouvé');
        }

        // Afficher la section pays
        toggleCountry();

        const country = countryData[0];
        
        // Affichage du nom du pays
        const nameCountryElement = document.getElementById('country_contenu_up_right_Title_nameCountry');
        nameCountryElement.textContent = country.name.common;

        // Affichage du drapeau
        const flagElement = document.getElementById('country_contenu_up_right_Title_flag');
        flagElement.innerHTML = `<img src="${country.flags.svg}" alt="Drapeau de ${country.name.common}" style="width: 100px;">`;

        // Affichage de la carte
        if (country.latlng && country.latlng.length === 2) {
            // Attendre que le DOM soit mis à jour
            setTimeout(() => {
                const map = displayMap(country.latlng[0], country.latlng[1]);
                if (map) {
                    // Ajouter un marqueur pour le pays
                    L.marker([country.latlng[0], country.latlng[1]])
                        .addTo(map)
                        .bindPopup(country.name.common)
                        .openPopup();
                }
            }, 100);
        }

        // Affichage de la description
        const descriptionElement = document.getElementById('country_contenu_up_right_Description');
        const languages = Object.values(country.languages || {}).join(', ');
        const currencies = Object.values(country.currencies || {}).map(curr => curr.name).join(', ');
        
        descriptionElement.innerHTML = `
            <h2>Objectif Destination : ${country.name.common}</h2>
            <p>Préparez-vous pour une aventure inoubliable alors que nous explorons ce magnifique pays, où l'histoire et la modernité se rencontrent. Notre voyage commence à ${country.capital?.[0] || 'Non spécifiée'}, le cœur vibrant de cette nation.</p>
            <p>Monnaie : ${currencies || 'Non spécifiée'}</p>
            <p>Langue : ${languages || 'Non spécifiée'}</p>
        `;

        // Affichage des informations supplémentaires
        const downElement = document.getElementById('country_contenu_down');
        downElement.innerHTML = `
            <p>Avec une population de ${country.population?.toLocaleString() || 'Non spécifiée'} d'habitants, ce pays offre une diversité culturelle fascinante. Des villes animées aux villages tranquilles, chaque coin de ce pays est unique et rempli de surprises. Armée de votre esprit d'aventure, vous découvrirez des trésors cachés et des paysages à couper le souffle, tout comme Lara Croft explore les mystères du monde.</p>
        `;

    } catch (error) {
        console.error('Erreur lors de l\'affichage du pays:', error);
        // Gérer l'erreur de manière appropriée (par exemple, afficher un message d'erreur à l'utilisateur)
    }
}
