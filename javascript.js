const display = document.querySelector("#display");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");

// Add event listeners to buttons
operators.forEach((item) => item.addEventListener("click", changeOperator));
numbers.forEach((item) => item.addEventListener("click", addNumber));
document.querySelector("#ac").addEventListener("click", resetDisplay);
document.querySelector("#equals").addEventListener("click", showResult);
document.querySelector("#negative").addEventListener("click", negative);

let num1 = [];
let num2 = [];
let a = 0;
let b = 0;
let operator = undefined;
let newOperator = undefined;
let result = 0;
let negativeNumber = false;

// If the operator is undefined the numbers enter become the first set of numbers
// If an operator has been stored already, the numbers entered become second set
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

//If +/- button is pressed, add a "-" to the first element of our number arrays
function negative() {
  negativeNumber = true;
  if (negativeNumber === true && a === 0) {
    num1.unshift("-");
    negativeNumber = false;
  }
  if (negativeNumber === true && a != 0) {
    num2.unshift("-");
    negativeNumber = false;
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

// If the result is not a whole interger, round it to 2 decimal places
function rounded() {
  if (result % 1 != 0) {
    result = +result.toFixed(2);
  }
}

// Shows the result if user presses equals button
function showResult() {
  if (b === 0) {
    display.textContent = a;
  } else {
    calculate();
    rounded();
    display.textContent = `${a} ${operator} ${b} = ${result}`;
  }
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
  if (b === 0) {
    display.textContent = "Can't divide by zero silly";
  } else {
    return a / b;
  }
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

// ---------------------------------------------------------------------------------
// If backspace is pressed, this function is called and pop() array, then display new number
function removeDisplay() {
  if (operator === undefined) {
    num1.pop();
    a = +num1.join("");
    display.textContent = num1.join("");
  } else {
    num2.pop();
    b = +num2.join("");
    display.textContent = `${a} ${operator} ${num2.join("")}`;
  }
}

// Simulates clicks when keys are pressed
// Did this for simplicity
document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    removeDisplay();
  }
  if (e.key === "0") {
    document.getElementById("zero").click();
  }
  if (e.key === "1") {
    document.getElementById("one").click();
  }
  if (e.key === "2") {
    document.getElementById("two").click();
  }
  if (e.key === "3") {
    document.getElementById("three").click();
  }
  if (e.key === "4") {
    document.getElementById("four").click();
  }
  if (e.key === "5") {
    document.getElementById("five").click();
  }
  if (e.key === "6") {
    document.getElementById("six").click();
  }
  if (e.key === "7") {
    document.getElementById("seven").click();
  }
  if (e.key === "8") {
    document.getElementById("eight").click();
  }
  if (e.key === "9") {
    document.getElementById("nine").click();
  }
  if (e.key === "%") {
    document.getElementById("modulo").click();
  }
  if (e.key === "/") {
    document.getElementById("divide").click();
  }
  if (e.key === "*") {
    document.getElementById("multiply").click();
  }
  if (e.key === "-") {
    document.getElementById("subtract").click();
  }
  if (e.key === "+") {
    document.getElementById("plus").click();
  }
  if (e.key === ".") {
    document.getElementById("decimal").click();
  }
  if (e.key === "=" || e.key === "Enter") {
    document.getElementById("equals").click();
  }
});
