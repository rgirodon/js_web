let inputCounter = 0;

function addNumberHandler() {

    inputCounter++;

    let numbers = document.getElementById('numbers');

    let newNumber = document.createElement("div");
    newNumber.innerHTML = "Number : <input type=\"text\" id=\"number_" + inputCounter + "\" />";

    numbers.appendChild(newNumber);
}

let addNumber = document.getElementById('addNumber');

addNumber.addEventListener('click', addNumberHandler);


function computeSumHandler() {

    let sum = 0;

    for (let i = 0; i <= inputCounter; i++) {

        sum = sum + parseInt(document.getElementById('number_' + i).value);
    }

    let result = document.getElementById('result');

    result.textContent = sum;
}

let computeSum = document.getElementById('computeSum');

computeSum.addEventListener('click', computeSumHandler);



function computeProductHandler() {

    let product = 1;

    for (let i = 0; i <= inputCounter; i++) {

        product = product * parseInt(document.getElementById('number_' + i).value);
    }

    let result = document.getElementById('result');

    result.textContent = product;
}

let computeProduct = document.getElementById('computeProduct');

computeProduct.addEventListener('click', computeProductHandler);


function resetForm() {

    inputCounter = 0;

    let numbers = document.getElementById('numbers');

    numbers.innerHTML = "";

    let newNumber = document.createElement("div");
    newNumber.innerHTML = "Number : <input type=\"text\" id=\"number_" + inputCounter + "\" />";

    numbers.appendChild(newNumber);

    document.getElementById('result').textContent = '';
}

let reset = document.getElementById('reset');

reset.addEventListener('click', resetForm);
