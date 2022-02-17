document.getElementById('calculator-button').addEventListener('click', function () {
    // Calculae Food Expense
    let foodInput = document.getElementById('food-input');
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText);
    const foodToatal = document.getElementById('total-expense');
    const foodToatalText = foodToatal.innerText;
    foodInput.value = '';
    const previousfoodToatal = parseFloat(foodToatalText);
    foodToatal.innerText = previousfoodToatal + foodAmount;
    // Calculae rent Expense
    let rentInput = document.getElementById('rent-input');
    const rentAmountText = rentInput.value;
    const rentAmount = parseFloat(rentAmountText);
    const rentToatal = document.getElementById('total-expense');
    const rentToatalText = rentToatal.innerText;
    rentInput.value = '';
    const previousrentToatal = parseFloat(rentToatalText);
    foodToatal.innerText = previousrentToatal + rentAmount;
    console.log(foodToatal);
    // Calculae clothes Expense
    let clothesInput = document.getElementById('clothes-input');
    const clothesAmountText = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountText);
    const clothesToatal = document.getElementById('total-expense');
    const clothesToatalText = clothesToatal.innerText;
    clothesInput.value = '';
    const previousclothesToatal = parseFloat(clothesToatalText);
    foodToatal.innerText = previousclothesToatal + clothesAmount;
    console.log(foodToatal);

});