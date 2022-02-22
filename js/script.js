const heading = document.querySelector("h1");
const savedSpace = document.querySelector(".saved");
const savedEl = document.querySelector("#saved-el");

// Create and insert counter element to show counter value
const counterEl = document.createElement("div");
counterEl.classList.add("counter");
heading.after(counterEl);

// Create and instert button to subtract from counter
const minus = document.createElement("button");
minus.setAttribute("title", "Minus one");
counterEl.after(minus);
// Add icon inside minus button
const minusIcon = document.createElement("i");
minusIcon.classList.add("fa-solid", "fa-minus");
minus.append(minusIcon);

// Create and insert reset button
const reset = document.createElement("button");
reset.classList.add("reset");
reset.setAttribute("title", "Reset");
reset.textContent = "Reset";
minus.after(reset);

// Create and instert button to add to counter
const plus = document.createElement("button");
plus.setAttribute("title", "Plus one");
reset.after(plus);
// Add icon inside plus button
const plusIcon = document.createElement("i");
plusIcon.classList.add("fa-solid", "fa-plus");
plus.append(plusIcon);

// Create and insert save button
const save = document.createElement("button");
save.classList.add("save");
save.setAttribute("title", "Save");
save.textContent = "Save";
plus.after(save);

// Create and insert delete saved button
const deleteSaved = document.createElement("button");
deleteSaved.classList.add("delete");
deleteSaved.setAttribute("title", "Delete saved");
deleteSaved.textContent = "Delete saved";
savedSpace.after(deleteSaved);

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
