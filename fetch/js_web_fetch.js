let main = document.getElementById("main");

let showDogButton = document.getElementById("showDog");

showDogButton.addEventListener("click", showDog);

function showDog() {
    
    let img = document.getElementById("dogImg");

    if (!img) {

        img = document.createElement("img");

        img.setAttribute("id", "dogImg");

        main.appendChild(img);
    }    

    let apiUrl = 'https://dog.ceo/api/breeds/image/random';    

    fetch(apiUrl)
        .then(
            function(response) {

                return response.json();
            }
        )
        .then(
            function(jsonResponse) {
            
                img.setAttribute("src", jsonResponse.message);
            }
        );
}