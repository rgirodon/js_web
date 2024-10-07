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
    
    axios.get(apiUrl)
            .then(function(response) {
                img.setAttribute("src", response.data.message);
            });
}
