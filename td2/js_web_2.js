function computeSum() {

    let input1 = document.getElementById('input1').value;

    let input2 = document.getElementById('input2').value;

    let result = document.getElementById('result');

    result.textContent = parseInt(input1) + parseInt(input2);
}

let computeSumBtn = document.getElementById('computeSum');

computeSumBtn.addEventListener('click', computeSum);

function computeProduct() {

    let input1 = document.getElementById('input1').value;

    let input2 = document.getElementById('input2').value;

    let result = document.getElementById('result');

    result.textContent = parseInt(input1) * parseInt(input2);
}

let computeProductBtn = document.getElementById('computeProduct');

computeProductBtn.addEventListener('click', computeProduct);

function resetForm() {

    document.getElementById('input1').value = '';

    document.getElementById('input2').value = '';

    document.getElementById('result').textContent = '';
}

let reset = document.getElementById('reset');

reset.addEventListener('click', resetForm);