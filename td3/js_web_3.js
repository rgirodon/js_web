let moviesUnder10 = ['La Belle et la Bête', 'Jumanji', 'Pocahontas', 'Blanche-Neige'];

let moviesUnder18 = ['Robin des bois', 'Harry Potter', 'Creed', 'Titanic'];

let moviesOld = ['Le comte de Monte Cristo', 'Les 3 Mousquetaires', 'Coup de foudre à Nothing Hill', 'Love actually'];

function adviceMovie() {

    let age = parseInt(document.getElementById('age').value);

    let result = document.getElementById('result');

    if (age < 10) {

        result.textContent = moviesUnder10[Math.floor(Math.random() *(moviesUnder10.length))];
    }
    else if (age < 18) {
    
        result.textContent = moviesUnder18[Math.floor(Math.random()*(moviesUnder18.length))];
    }
    else {
        result.textContent = moviesOld[Math.floor(Math.random()*(moviesOld.length))];
    }
}

let advice = document.getElementById('advice');

advice.addEventListener('click', adviceMovie);

function resetForm() {

    document.getElementById('age').value = '';

    document.getElementById('result').textContent = '';
}

let reset = document.getElementById('reset');

reset.addEventListener('click', resetForm);