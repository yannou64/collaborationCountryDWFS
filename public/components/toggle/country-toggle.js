export function toggleCountry() {
    console.log("Exécution de toggleCountry");
    
    const favorisSection = document.getElementById('favoris');
    const homeSection = document.getElementById('home');
    const countrySection = document.getElementById('country');

    if (!favorisSection || !homeSection || !countrySection) {
        console.error("Un ou plusieurs éléments n'ont pas été trouvés");
        return;
    }

    // Afficher la section pays
    countrySection.style.display = 'flex';
    // Cacher les autres sections
    homeSection.style.display = 'none';
    favorisSection.style.display = 'none';

    console.log("Affichage de la section pays terminé");
}
