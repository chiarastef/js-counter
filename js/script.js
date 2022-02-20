const counterEl = document.querySelector("#counter-el");
const savedEl = document.querySelector("#saved-el");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");
const save = document.querySelector("#save");
const deleteSaved = document.querySelector("#delete");

// Set counter to 0 at launch
let counter = 0;
counterEl.textContent = counter;

// Buttons click event listeners to use counter
plus.addEventListener("click", plusOne);
minus.addEventListener("click", minusOne);
reset.addEventListener("click", resetCounter);
save.addEventListener("click", saveNumber);
deleteSaved.addEventListener("click", deleteValues);

// Add 1 to the value of the counter
function plusOne() {
  counter++;
  counterEl.textContent = counter;
}

// Subtract 1 to the value of the counter
function minusOne() {
  // If counter is already at 0 don't subtract
  if (counter === 0) {
    return;
  }
  counter--;
  counterEl.textContent = counter;
}

// Reset counter to 0
function resetCounter() {
  counter = 0;
  counterEl.textContent = counter;
}

// Save counter values and print them in 'saved' element
function saveNumber() {
  // Print the spaces and dashes only from the second value onwards
  if (savedEl.textContent == "") {
    savedEl.textContent += counter;
  } else {
    savedEl.textContent += " - " + counter;
  }
  // Reset counter to 0
  counter = 0;
  counterEl.textContent = counter;
}

// Delete all the saved values from 'saved' element
function deleteValues() {
  savedEl.textContent = "";
}
