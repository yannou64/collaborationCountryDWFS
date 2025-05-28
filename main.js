// API
import { getCountries, getCountry } from "./public/services/api.js";
import { constructCountryPage } from "./public/components/country.js";
/////////////
//  Main
////////////
// On écoute le boutton d'exploration
document.getElementById("btn_input").addEventListener("click", () => {
  const country = document.getElementById("input").value;
  const countryInfo = getCountry(country)
  constructCountryPage(countryInfo)
});

