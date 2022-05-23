const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

document.querySelector("#zero").addEventListener("click", addNumber);
document.querySelector("#one").addEventListener("click", addNumber);
document.querySelector("#two").addEventListener("click", addNumber);
document.querySelector("#three").addEventListener("click", addNumber);
document.querySelector("#four").addEventListener("click", addNumber);
document.querySelector("#five").addEventListener("click", addNumber);
document.querySelector("#six").addEventListener("click", addNumber);
document.querySelector("#seven").addEventListener("click", addNumber);
document.querySelector("#eight").addEventListener("click", addNumber);
document.querySelector("#nine").addEventListener("click", addNumber);
document.querySelector("#ac").addEventListener("click", resetDisplay);
document.querySelector("#divide").addEventListener("click", changeOperator);
document.querySelector("#multiply").addEventListener("click", changeOperator);
document.querySelector("#subtract").addEventListener("click", changeOperator);
document.querySelector("#plus").addEventListener("click", changeOperator);
document.querySelector("#modulo").addEventListener("click", changeOperator);
document.querySelector("#equals").addEventListener("click", showResult);
document.querySelector("#decimal").addEventListener("click", addNumber);

let num1 = [];
let num2 = [];
let a = 0;
let b = 0;
let operator = undefined;
let newOperator = undefined;
let result = 0;

// If the operator is undefined the numbers enter become the first set of numbers
// If an operator has been stored already, the numbers entered become seoncd set
// Numbers go into an array, and are then joined together to get full number
function addNumber() {
  if (operator === undefined) {
    num1.push(this.textContent);
    a = +num1.join("");
    display.textContent = num1.join("");
  } else {
    num2.push(this.textContent);
    b = +num2.join("");
    display.textContent = `${a} ${operator} ${num2.join("")}`;
  }
}

// Called when a operator is clicked
// Logic determines if the operator is being stringed
function changeOperator() {
  if (operator === undefined) {
    operator = this.textContent;
    display.textContent = `${a} ${operator}`;
  } else {
    newOperator = this.textContent;
    calculate();
    rounded();
    display.textContent = `${result} ${newOperator}`;
    a = result;
    b = 0;
    num1 = [];
    num2 = [];
    operator = newOperator;
    newOperator = undefined;
  }
}

function rounded() {
  if (result % 1 != 0) {
    result = +result.toFixed(2);
  }
}

// Shows the result if user presses equals button
function showResult() {
  calculate();
  rounded();
  display.textContent = `${a} ${operator} ${b} = ${result}`;
}

// Checks what the operator is and calls math function
function calculate() {
  if (operator === "*") {
    result = multiply(a, b);
  } else if (operator === "+") {
    result = add(a, b);
  } else if (operator === "-") {
    result = subtract(a, b);
  } else if (operator === "/") {
    result = divide(a, b);
  } else if (operator === "%") {
    result = modulo(a, b);
  }
}
// ---------------------------------------------------------------------------------
// These are our math logic functions, called depending on operator
function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}
// ---------------------------------------------------------------------------------
// Resets the display and all variables to 0 or undefined. Called when AC is clicked
function resetDisplay() {
  num1 = [];
  num2 = [];
  a = 0;
  b = 0;
  operator = undefined;
  result = 0;
  display.textContent = 0;
}
