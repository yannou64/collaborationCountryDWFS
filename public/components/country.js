export function constructCountryPage() {
  const country = document.getElementById("country");
  country.style.display = "flex"; // on affiche le container country
  document.getElementById("favoris").style.display = "none"; // on fait disparaitre les autres container
  document.getElementById("home").style.display = "none";
  // construction de country
}
// constructCountryPage();

// Attendre que le DOM soit chargé avant d'ajouter les écouteurs d'événements
document.addEventListener('DOMContentLoaded', () => {
  const addToFavoritesButton = document.getElementById("addToFavorites");
  if (addToFavoritesButton) {
    addToFavoritesButton.addEventListener("click", () => {
      // Vérifier si country est défini avant de l'utiliser
      if (typeof country !== 'undefined') {
        addFavorite({ id: country.ccn3, name: country.name });
        alert(`${country.name} ajouté aux favoris.`);
      } else {
        console.error("La variable country n'est pas définie");
      }
    });
  } else {
    console.error("Le bouton addToFavorites n'a pas été trouvé dans le DOM");
  }
});
