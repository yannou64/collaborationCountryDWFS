export function constructCountryPage() {
  const section = document.getElementById("country");
  section.innerHTML = `
          <h2>${country.name}</h2>
          <img src="${country.flags.svg}" alt="Drapeau de ${country.name}" width="150" />
      
          <button id="addToFavorites">Ajouter aux favoris</button>
        `;
}
constructCountryPage();

// Ajouter aux favoris
document.getElementById("addToFavorites").addEventListener("click", () => {
  addFavorite({ id: country.ccn3, name: country.name });
  alert(`${country.name} ajouté aux favoris.`);
});
