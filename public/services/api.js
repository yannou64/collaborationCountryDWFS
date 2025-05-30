/**
 * @fileoverview Service d'API pour les pays
 * @module api
 * @description Ce module gère les appels à l'API REST Countries pour récupérer
 * les informations sur les pays. Il fournit des fonctions pour obtenir la liste
 * de tous les pays ou les informations d'un pays spécifique.
 */

/**
 * URL de base de l'API REST Countries
 * @constant {string}
 * @private
 */
const baseApi = "https://restcountries.com/v3.1/";

/**
 * Récupère la liste de tous les pays
 * @function getCountries
 * @returns {Promise<Array>} Liste des pays avec leurs informations
 * @throws {Error} Si la requête échoue ou si les données sont invalides
 *
 * @example
 * // Récupérer tous les pays
 * const countries = await getCountries();
 */
export async function getCountries() {
  try {
    const resultat = await fetch(baseApi + "all");
    if (!resultat.ok) {
      throw new Error("Erreur dans la requête");
    }
    const data = await resultat.json();
    return data;
  } catch (error) {
    console.error("Erreur décelé dans la fonction getCountries : ", error);
  }
}

/**
 * Récupère les informations d'un pays spécifique
 * @function getCountry
 * @param {string} countryName - Le nom du pays à rechercher
 * @returns {Promise<Array>} Informations du pays recherché
 * @throws {Error} Si le nom du pays est invalide ou si la requête échoue
 *
 * @example
 * // Récupérer les informations de la France
 * const franceInfo = await getCountry('France');
 */
export async function getCountry(countryName) {
  try {
    // controle et traitement de countryName
    if (!countryName) throw new Error("countryName est falsy");
    const resultat = await fetch(baseApi + `name/${countryName}`);
    if (!resultat.ok) throw new Error("Erreur dans la requête");
    const data = await resultat.json();
    return data;
  } catch (error) {
    console.log("Erreur au niveau de getCountry : ", error);
  }
}

// Récupérer la carte d'un pays
export function displayMap(latitude, longitude) {
  try {
    // Vérifier si une carte existe déjà
    const existingMap = document.getElementById('map');
    if (existingMap && existingMap._leaflet_id) {
      // Si une carte existe, la détruire
      existingMap._leaflet_id = null;
      existingMap.innerHTML = '';
    }

    // Créer une nouvelle carte
    const map = L.map("map").setView([latitude, longitude], 6);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    return map;
  } catch (error) {
    console.error("Erreur lors de l'initialisation de la carte : ", error);
    return null;
  }
}
