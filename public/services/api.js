// API avec REST Countries
const baseApi = "https://restcountries.com/v3.1/";
// GETALL
export async function getCountries() {
  try {
    const resultat = await fetch(baseApi + "all");
    if (!resultat.ok) {
      throw new Error("Erreur dans le fetch");
    }
    const data = await resultat.json()
    return data;
  } catch (error) {
    console.error("Erreur décelé dans la fonction getCountries : ", error);
  }
}

// GET