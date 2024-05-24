let firstNumber;
let secondNumber;
let operator;

const btnNumbers = document.querySelectorAll('.num');

const display = document.querySelector('.display');

btnNumbers.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    });
});



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