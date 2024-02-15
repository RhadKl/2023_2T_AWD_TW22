let redValue = 192; 
let greenValue = 192; 
let blueValue = 192; 
let rotationAngle = 0; 


const buttons = document.querySelectorAll('.buttons button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        rotateBackground();
    });
});

function operation(op) {
    if (op === '+' || op === '-' || op === '*' || op === '/') {
        
        if (currentNumber !== "") {
            previousNumber = currentNumber;
            currentNumber = "";
        }
        operator = op;
    } else if (op === '=') {
        calculate();
    } else if (op === 'C') {
        clearDisplay();
    } else {
        appendToDisplay(op);
    }
    updateColor(op);
}

function updateColor(op) {
    switch (op) {
        case '+':
            if (redValue < 255) redValue += 20;
            if (greenValue < 255) greenValue += 20;
            if (blueValue < 255) blueValue += 20;
            break;
        case '-':
            if (redValue > 0) redValue -= 20;
            if (greenValue > 0) greenValue -= 20;
            if (blueValue > 0) blueValue -= 20;
            break;
        default:
            break;
    }
    document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

function rotateBackground() {
    rotationAngle += 45; 
    document.body.style.backgroundImage = `linear-gradient(${rotationAngle}deg, #87CEEB, #9ACD32)`;
}

let currentNumber = "";
let previousNumber = "";
let operator = null;

const display = document.getElementById('display');

function appendToDisplay(input) {
    
    if (previousNumber === undefined || previousNumber === null) previousNumber = "";
    if (operator === undefined || operator === null) operator = "";

   
    currentNumber += input;

    display.value = (previousNumber || '') + operator + currentNumber;
}


function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = null;
    display.value = "";
}

function calculate() {
    if (currentNumber === "" || operator === null) return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
  
    let equation = `${previousNumber} ${operator} ${currentNumber} = ${result}`;
    
    display.value = equation;
 
    currentNumber = result.toString();
    previousNumber = "";
    operator = null;
}
