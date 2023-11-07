const buttons = document.querySelectorAll(".grid-item");
const display = document.querySelector(".display");

let calculation = [];
let strCalculation;

function calculate(button) {
  const value = button.textContent;

  if (value === "reset") {
    calculation = [];
    display.textContent = ".";
  } else if (value === "=") {
    display.textContent = eval(strCalculation.replaceAll("x", "*"));
  } else if (value === "del") {
    display.textContent = strCalculation.slice(0, -1);
    console.log(strCalculation);
  } else {
    calculation.push(value);
    strCalculation = calculation.join("");
    display.textContent = strCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);

//////////////////////////////  body type change /////////////////////////////

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
