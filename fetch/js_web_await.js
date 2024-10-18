let main = document.getElementById("main");

let showDogButton = document.getElementById("showDog");

showDogButton.addEventListener("click", showDog);

let showCatFactButton = document.getElementById("showCatFact");

showCatFactButton.addEventListener("click", showCatFact);

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

async function showCatFact() {

    let p = document.getElementById("catFactP");

    if (!p) {

        p = document.createElement("p");

        p.setAttribute("id", "catFactP");

        main.appendChild(p);
    }    

    let apiUrl = 'https://catfact.ninja/fact';    

    let response = await fetch(apiUrl);

    let jsonResponse = await response.json();

    p.textContent = jsonResponse.fact;
}
