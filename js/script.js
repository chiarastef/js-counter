const counterEl = document.querySelector("#counter-el");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

let counter = 0;
counterEl.textContent = counter;

plus.addEventListener("click", plusOne);
minus.addEventListener("click", minusOne);
reset.addEventListener("click", resetCounter);

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
