let messageToDisplay = "Bienvenue les Bachelor 2, malgré la pluie !";

console.log(messageToDisplay);

let h1Element = document.getElementById("title");
h1Element.textContent = "Courage, bientôt le WE !";
h1Element.classList.add("green");

let newP = document.createElement("p");
newP.textContent = "Ce WE sera magnifique";
newP.classList.add("message");

let mainElement = document.getElementById("container");
mainElement.appendChild(newP);

let changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", function() {
    h1Element.textContent += "!";
});