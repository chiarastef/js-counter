const counterEl = document.querySelector("#counter-el");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");
const savedEl = document.querySelector("#saved-el");
const saveButton = document.querySelector("#save-button");

let counter = 0;
counterEl.setAttribute("data-value", counter);

plus.addEventListener("click", plusOne);
minus.addEventListener("click", minusOne);
reset.addEventListener("click", resetCounter);
saveButton.addEventListener("click", saveNumber);

function plusOne() {
  counter++;
  counterEl.setAttribute("data-value", counter);
}

function minusOne() {
  if (counter === 0) {
    return;
  }
  counter--;
  counterEl.setAttribute("data-value", counter);
}

function resetCounter() {
  counter = 0;
  counterEl.setAttribute("data-value", counter);
}

function saveNumber() {
  if (savedEl.textContent == "") {
    savedEl.textContent += counter;
  } else {
    savedEl.textContent += " - " + counter;
  }

  counter = 0;
  counterEl.setAttribute("data-value", counter);
}
