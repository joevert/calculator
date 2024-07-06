let firstNumber='';
let secondNumber;
let operator;
let shouldResetDisplay = false;

const btnNumbers = document.querySelectorAll('.num');
const btnOperators = document.querySelectorAll('.operator');
const btnEqual = document.querySelector('.equal');
const btnClear = document.querySelector('.clear');

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

btnOperators.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber != ''){
            secondNumber = display.textContent;
            display.textContent = operate(firstNumber, secondNumber, operator);
            firstNumber = display.textContent;
        } else {
            firstNumber = display.textContent;
            display.textContent = '0';
        }
        operator = button.textContent;
    
    });
});

btnEqual.addEventListener('click', () => {
        if(firstNumber !== '' && operator !== null) {
            secondNumber = display.textContent;
            display.textContent = operate(firstNumber, secondNumber, operator);
            firstNumber = '';
            secondNumber = '';
            operator = null;
        }
});


btnClear.addEventListener('click', () => {
    display.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    operator = null;
});



function operate(firstNumber, secondNumber, operator) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    if (operator === '+')
        return sum(firstNumber, secondNumber);
    if (operator === '-')
        return sub(firstNumber, secondNumber);
    if (operator === '*')
        return mult(firstNumber, secondNumber);
    if (operator === '/')
        return div(firstNumber, secondNumber);
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