// API
import { getCountries, getCountry } from "./public/services/api.js";
import { constructCountryPage } from "./public/components/country.js";
import { initNavbarHandlers } from "./public/handler/navbar-handler.js";
import { initButtonHandlers } from "./public/handler/button-handler.js";

/////////////
//  Main
////////////
document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des handlers de la navbar
    initNavbarHandlers();
    
    // Initialisation des handlers des boutons
    initButtonHandlers();

    // On écoute le boutton d'exploration
    document.getElementById("btn_input").addEventListener("click", () => {
        const country = document.getElementById("input").value;
        const countryInfo = getCountry(country)
        constructCountryPage(countryInfo)
    });
});

