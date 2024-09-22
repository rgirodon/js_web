console.log('Hello mes petits Bachelor !');

let cpt = 0;

let fruitsArray = ['orange', 'lemon', 'grape', 'strawberry', 'raspberry', 'banana', 'blueberry', 'apple', 'pear'];

let fruits = document.getElementById("fruitsList");

let addFruitsButton = document.getElementById("addFruits");

addFruitsButton.addEventListener("click", addFruits);

function addFruits() {

    if (cpt <= (fruitsArray.length - 1)) {
    
        let fruitItem = document.createElement("li");

        fruitItem.textContent = fruitsArray[cpt];

        fruits.appendChild(fruitItem);

        cpt++;
    }
    else {
        console.log('No more fruit to add !');
    }
}
