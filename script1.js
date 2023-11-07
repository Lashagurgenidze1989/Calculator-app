const buttons = Array.from(document.querySelectorAll(".grid-item"));
const display = document.querySelector(".display");

let calculation = [];
let operator = "";

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    let btnText = e.target.textContent;
    let lastChar = display.textContent.at(-1);

    if (btnText === "reset") {
      display.textContent = "";
      calculation = [];
      operator = "";
    } else if (btnText === "del") {
      display.textContent = display.textContent.slice(0, -1);
    } else if (btnText === ".") {
      if (!display.textContent.includes(".")) display.textContent += btnText;
    } else if (btnText === "=") {
      calculation.push(display.textContent);
      let result = eval(calculation.join(" ").replaceAll("x", "*"));
      display.textContent = result;
      calculation = [];
      operator = "";
    } else if (
      (btnText === "+" ||
        btnText === "-" ||
        btnText === "x" ||
        btnText === "/") &&
      (lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "x" ||
        lastChar === "/")
    ) {
      return;
    } else {
      display.textContent += btnText;
    }
  });
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
