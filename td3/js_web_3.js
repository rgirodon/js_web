function adviceMovie() {

    let age = parseInt(document.getElementById('age').value);

    let result = document.getElementById('result');

    if (age < 10) {

        result.textContent = 'Sonic';
    }
    else if (age < 18) {
    
        result.textContent = 'Les animaux fantastiques';
    }
    else {
        result.textContent = 'The Batman';
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