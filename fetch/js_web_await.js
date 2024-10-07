let main = document.getElementById("main");

let showDogButton = document.getElementById("showDog");

showDogButton.addEventListener("click", showDog);

async function showDog() {

    let img = document.getElementById("dogImg");

    if (!img) {

        img = document.createElement("img");

        img.setAttribute("id", "dogImg");

        main.appendChild(img);
    }    

    let apiUrl = 'https://dog.ceo/api/breeds/image/random';    

    let response = await fetch(apiUrl);

    let jsonResponse = await response.json();

    img.setAttribute("src", jsonResponse.message);
}
