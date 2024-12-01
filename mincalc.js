const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentNumber = '';
let previousNumber = '';
let operation = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            currentNumber = '';
            previousNumber = '';
            operation = null;
            display.value = '';
        } else if (value === '=') {
            if (currentNumber && previousNumber && operation) {
                const result = calculate(previousNumber, currentNumber, operation);
                display.value = result;
                previousNumber = '';
                currentNumber = result.toString();
                operation = null;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentNumber) {
                previousNumber = currentNumber;
                currentNumber = '';
                operation = value;
            }
        } else {
            currentNumber += value;
            display.value = currentNumber;
        }
    });
});

function calculate(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error';
            }
        default:
            return 'Error';
    }
}    