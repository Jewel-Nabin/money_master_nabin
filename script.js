document.getElementById('calculator-button').addEventListener('click', function () {
    // Calculae Food Expense //
    const foodInput = document.getElementById('food-input');
    const foodAmountText = foodInput.value;
    const foodAmount = parseFloat(foodAmountText);
    foodInput.value = '';
    // Calculae rent Expensef //
    const rentInput = document.getElementById('rent-input');
    const rentAmountText = rentInput.value;
    const rentAmount = parseFloat(rentAmountText);
    rentInput.value = '';
    // Calculae clothes Expense //
    const clothesInput = document.getElementById('clothes-input');
    const clothesAmountText = clothesInput.value;
    const clothesAmount = parseFloat(clothesAmountText);
    clothesInput.value = '';
    // Total Expense //
    const totalExpense = document.getElementById('total-expenses');
    const totalExpenseAmount = foodAmount + rentAmount + clothesAmount;
    totalExpense.innerText = totalExpenseAmount;
    // Total Income //
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);
    incomeInput.value = '';
    // Total Balance //
    const totalIncome = document.getElementById('total-balance');
    const totalIncomeAmount = incomeAmount;
    totalIncome.innerText = totalIncomeAmount - totalExpenseAmount;
    const netBalance = totalIncome - totalExpense;

    // Balance //

});

document.getElementById('save-handler').addEventListener('click', function () {
   // Calculate Percentage //
    const saveInput = document.getElementById('save-input');
    const saveAmountText = saveInput.value;
    const saveAmount = parseFloat(saveAmountText);
    saveInput.value = '';

    // Saving Balance //
    const totalSave = document.getElementById('saving-amount');
    const totalSaveAmount = saveAmount;
    totalSave.innerText = totalIncomeAmount / 20;
    // Remaining Balance //
    const totalRemaining = document.getElementById('remaining-balance');
    const totalRemainingAmount = saveAmount;
    totalIncome.innerText = totalIncomeAmount - totalExpenseAmount;
    const netBalance = netBalance - saveAmount;
});