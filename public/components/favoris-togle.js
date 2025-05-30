export function toggleFavoris() {
    console.log("Exécution de toggleFavoris");
    
    const favorisSection = document.getElementById('favoris');
    const homeSection = document.getElementById('home');
    const countrySection = document.getElementById('country');

    if (!favorisSection || !homeSection || !countrySection) {
        console.error("Un ou plusieurs éléments n'ont pas été trouvés");
        return;
    }

    // Afficher la section favoris
    favorisSection.style.display = 'block';
    // Cacher les autres sections
    homeSection.style.display = 'none';
    countrySection.style.display = 'none';

    console.log("Affichage de la section favoris terminé");
}
