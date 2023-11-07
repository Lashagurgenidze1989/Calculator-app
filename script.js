const body = document.querySelector("body");
const switcher = document.querySelector("#switcher");
const orangeCircle = document.querySelector("#circle");

switcher.addEventListener("input", switchStyles);

function switchStyles(event) {
  if (Number(event.target.value) === 2) {
    orangeCircle.style.left = "27px";
    body.classList.add("theme2");
    body.classList.remove("theme3");
  } else if (Number(event.target.value) === 3) {
    orangeCircle.style.left = "51px";
    body.classList.add("theme3");
    body.classList.remove("theme2");
  } else {
    orangeCircle.style.left = "6px";
    body.classList.remove("theme2", "theme3");
  }
}

const display = document.querySelector(".display");
const number = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const delet = document.querySelector(".delete");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");

let currentInput = "";
let replaced = "";

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
    currentInput += oper.textContent;
    updateDisplay();
  });
});

delet.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
});

reset.addEventListener("click", () => {
  currentInput = "";
  updateDisplay();
});

equal.addEventListener("click", () => {
  calculate();
  updateDisplay();
});

function calculate() {
  replaced = replaced.replaceAll("x", "*");
  currentInput = eval(replaced);
  console.log(currentInput);
}
