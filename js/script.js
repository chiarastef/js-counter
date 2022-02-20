const counterEl = document.querySelector("#counter-el");
const savedEl = document.querySelector("#saved-el");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");
const save = document.querySelector("#save");
const deleteSaved = document.querySelector("#delete");

let counter = 0;
counterEl.textContent = counter;

plus.addEventListener("click", plusOne);
minus.addEventListener("click", minusOne);
reset.addEventListener("click", resetCounter);
save.addEventListener("click", saveNumber);
deleteSaved.addEventListener("click", deleteValues);

function plusOne() {
  counter++;
  counterEl.textContent = counter;
}

function minusOne() {
  if (counter === 0) {
    return;
  }
  counter--;
  counterEl.textContent = counter;
}

function resetCounter() {
  counter = 0;
  counterEl.textContent = counter;
}

function saveNumber() {
  if (savedEl.textContent == "") {
    savedEl.textContent += counter;
  } else {
    savedEl.textContent += " - " + counter;
  }
  counter = 0;
  counterEl.textContent = counter;
}

function deleteValues() {
  savedEl.textContent = "";
}
