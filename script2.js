const buttons = document.querySelectorAll(".grid-item");
const display = document.querySelector(".display");
const specialCars = ["+", "-", "*", "/", "="];
let output = "";

function calculate(btnValue) {
  if (btnValue === "=" && output !== "") {
    output = eval(output);
  } else if (btnValue === "reset") {
    output = "";
  } else if (btnValue === "del") {
    output = output.slice(0, -1);
  } else {
    if (output === "" && specialCars.includes(btnValue)) return;
    output += btnValue;
  }
  display.textContent = output;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

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
