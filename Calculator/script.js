let display = document.getElementById('display');
let calculation = "";

function display(value) {
    calculation += value;
    display.value = calculation;
}

function calculate(operator) {
    if (operator === '=') {
        let result = eval(calculation);
        display.value = result;
        calculation = result.toString();
    } else {
        display(operator)
    }
}