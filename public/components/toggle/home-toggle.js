export function toggleHome() {
    console.log("Exécution de toggleHome");
    
    const homeSection = document.getElementById('home');
    const favorisSection = document.getElementById('favoris');
    const countrySection = document.getElementById('country');

    if (!homeSection || !favorisSection || !countrySection) {
        console.error("Un ou plusieurs éléments n'ont pas été trouvés");
        return;
    }

    // Afficher la section home
    homeSection.style.display = 'flex';
    // Cacher les autres sections
    favorisSection.style.display = 'none';
    countrySection.style.display = 'none';

    console.log("Affichage de la section home terminé");
}
