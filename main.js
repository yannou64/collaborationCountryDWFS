import { getCountries } from "./public/services/api.js";

const countries = await getCountries()
console.log(countries)