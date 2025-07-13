const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let firstNumber = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      firstNumber = "";
      operator = "";
      display.value = "";
      return;
    }

    if (value === "=") {
      if (firstNumber && operator && currentInput) {
        display.value = eval(`${firstNumber} ${operator} ${currentInput}`);
        currentInput = "";
        firstNumber = "";
        operator = "";
      }
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      operator = value;
      firstNumber = display.value;
      currentInput = "";
      return;
    }

    currentInput += value;
    display.value = currentInput;
  });
});
