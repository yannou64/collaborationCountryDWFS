// API avec REST Countries
const baseApi = "https://restcountries.com/v3.1/";
// GETALL
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

// GET
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
