let cpt = 0;

let poetry = [
    "Sensations",
    "Par les soirs bleus d’été, j’irai dans les sentiers,",
    "Picoté par les blés, fouler l’herbe menue :",
    "Rêveur, j’en sentirai la fraîcheur à mes pieds.",
    "Je laisserai le vent baigner ma tête nue.",
    "Je ne parlerai pas, je ne penserai rien :",
    "Mais l’amour infini me montera dans l’âme,",
    "Et j’irai loin, bien loin, comme un bohémien,",
    "Par la Nature, – heureux comme avec une femme.",
    "Arthur Rimbaud, Cahiers de Douai"
];

let versesList = document.getElementById("verses");

let displayPoetryButton = document.getElementById("displayPoetry");

displayPoetryButton.addEventListener("click", addVerse);

function addVerse() {

    if (cpt <= (poetry.length - 1)) {

        let verse = document.createElement("p");

        if (cpt == 0) {

            verse.classList.add("title");
        }

        verse.textContent = poetry[cpt];

        verses.appendChild(verse);

        if (cpt == (poetry.length - 1)) {

            verse.classList.add("author");

            displayPoetryButton.setAttribute("disabled", "");
        }

        cpt++;
    }
}
