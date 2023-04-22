/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let dailyRate = 0;
let cost = 0;
let dayCounter = 0;

const daySelector = document.getElementById("day-selector");
const clearButton = document.getElementById("clear-button");

const halfDayButton = document.getElementById("half");
const fullDayButton = document.getElementById("full");

const calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

daySelector.addEventListener("click", function (event) {
  if (event.target.nodeName === "LI") {
    event.target.classList.toggle("clicked");
  }
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function () {
  for (let li of daySelector.children) {
    li.classList.remove("clicked");
  }
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", function () {
  dailyRate = 20;
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");

  calculateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", function () {
  dailyRate = 35;
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");

  calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
  dayCounter = 0;

  for (let li of daySelector.children) {
    if (li.classList.contains("clicked")) {
      dayCounter++;
    }
  }

  cost = dayCounter * dailyRate;

  calculatedCost.innerHTML = cost;
}
