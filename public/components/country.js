export function constructCountryPage() {
  const country = document.getElementById("country") 
  country.style.display = "flex" // on affiche le container country
  document.getElementById("favoris").style.display = "none" // on fait disparaitre les autres container
  document.getElementById("home").style.display = "none"
  // construction de country
  
}
constructCountryPage();

// Ajouter aux favoris
document.getElementById("addToFavorites").addEventListener("click", () => {
  addFavorite({ id: country.ccn3, name: country.name });
  alert(`${country.name} ajouté aux favoris.`);
});
