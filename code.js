let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, secondNumber, operator) {
    if (operator === '+')
        sum(firstNumber, secondNumber);
    if (operator === '-')
        sub(firstNumber, secondNumber);
    if (operator === '*')
        mult(firstNumber, secondNumber);
    if (operator === '/')
        div(firstNumber, secondNumber);
}

function sum (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function div (a, b) {
    return a / b;
}

function mult (a, b) {
    return a * b;
}