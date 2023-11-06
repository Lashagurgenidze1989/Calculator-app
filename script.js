/* const body = document.querySelector("body");
const switcher = document.querySelector("#switcher");
const orangeCircle = document.querySelector("#circle");

console.log(body);

switcher.addEventListener("input", () => switchStyles());

function switchStyles(event) {
  if (Number(event.target.value) == 2) {
    orangeCircle.style.left = "27px";
    body.classList.add("theme2");
  }
} */

const display = document.querySelector(".display");
const number = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const delet = document.querySelector(".delete");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");

let currentInput = "";
let operator = "";
let prevInput = "";
let result = 0;

function updateDisplay() {
  display.textContent = currentInput;
}

number.forEach((num) => {
  num.addEventListener("click", () => {
    currentInput += num.textContent;
    updateDisplay();
  });
});

operators.forEach((oper) => {
  oper.addEventListener("click", () => {
    if (currentInput !== "") {
      if (prevInput !== "") {
        calculate();
      }
      operator = oper.textContent;
      prevInput = currentInput;
      currentInput = "";
    }
  });
});

delet.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
});

reset.addEventListener("click", () => {
  currentInput = "";
  operator = "";
  prevInput = "";
  result = 0;
  updateDisplay();
});

equal.addEventListener("click", () => {
  if (prevInput !== "" && currentInput !== "") {
    calculate();
    prevInput = "";
    operator = "";
  }
});

function calculate() {
  if (prevInput !== "" && currentInput !== "") {
    switch (operator) {
      case "+":
        result = parseFloat(prevInput) + parseFloat(currentInput);
        break;
      case "-":
        result = parseFloat(prevInput) - parseFloat(currentInput);
        break;
      case "x":
        result = parseFloat(prevInput) * parseFloat(currentInput);
        break;
      case "/":
        if (currentInput !== "0") {
          result = parseFloat(prevInput) / parseFloat(currentInput);
        } else {
          result = "Error";
        }
        break;
      default:
        result = "Error";
    }
    currentInput = result; /* .toString(); */
    updateDisplay();
  }
}
