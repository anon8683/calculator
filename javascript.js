const display = document.querySelector("#display");

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

let num1 = [];
let num2 = [];
let a = 0;
let b = 0;
let operator = undefined;
let newOperator = undefined;
let result = 0;

function addNumber() {
  if (operator === undefined) {
    num1.push(+this.textContent);
    a = +num1.join("");
    display.textContent = num1.join("");
  } else {
    num2.push(+this.textContent);
    b = +num2.join("");
    display.textContent = `${num2.join("")}`;
  }
}

function changeOperator() {
  if (operator === undefined) {
    operator = this.textContent;
  } else {
    newOperator = this.textContent;
    calculate();
    display.textContent = result;
    a = result;
    b = 0;
    num1 = [];
    num2 = [];
    operator = newOperator;
    newOperator = undefined;
  }
}

function showResult() {
  calculate();
  display.textContent = result;
}

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

function resetDisplay() {
  num1 = [];
  num2 = [];
  a = 0;
  b = 0;
  operator = undefined;
  result = 0;
  display.textContent = 0;
}
