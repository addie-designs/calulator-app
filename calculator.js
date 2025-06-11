// Grabbing the display element

const equationInput = document.getElementById("input");
const equationOutput = document.getElementById("output");

//Grabbing the number buttons
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const decimal = document.getElementById("dot");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const add = document.getElementById("add");
const percentage = document.getElementById("percent");
const subtract = document.getElementById("subtract");
const calculate = document.getElementById("equal");
const clearHistory = document.querySelector("#clearHistory")

//Array to hold the equation input value
let emptyArray = [];


//Adds a value (number or operator) to the input array and updates the input display.
function addValueToScreen(value) {
  emptyArray.push(value);
  equationInput.innerHTML = emptyArray.join("");
}

//Evaluate the input array as a string expression,then display the result and add it to history
function calculatResult() {
  const arrayConvertedToString = emptyArray.join("");

  try {
    const result = eval(arrayConvertedToString);
    equationOutput.innerHTML = result;

    // Add to history
    addToHistory(arrayConvertedToString, result);
  } catch (error) {
    equationOutput.innerHTML = "Error";
  }
}

//clear all equation input and output
function clearAll() {
  emptyArray = [];
  equationInput.innerHTML = 0;
  equationOutput.innerHTML = 0;
}

//delete the last input value
function deleteOneValue() {
  emptyArray.pop();
  equationInput.innerHTML = emptyArray.join("");
}


//wait until the DOM is ready to attach all event listeners
document.addEventListener("DOMContentLoaded", () =>{
  zero.addEventListener("click", () => addValueToScreen(0));
  one.addEventListener("click", () => addValueToScreen(1));
  two.addEventListener("click", () => addValueToScreen(2));
  three.addEventListener("click", () => addValueToScreen(3));
  four.addEventListener("click", () => addValueToScreen(4));
  five.addEventListener("click", () => addValueToScreen(5));
  six.addEventListener("click", () => addValueToScreen(6));
  seven.addEventListener("click", () => addValueToScreen(7));
  eight.addEventListener("click", () => addValueToScreen(8));
  nine.addEventListener("click", () => addValueToScreen(9));
  decimal.addEventListener("click", () => addValueToScreen("."));
  divide.addEventListener("click", () => addValueToScreen("/"));
  multiply.addEventListener("click", () => addValueToScreen("*"));
  add.addEventListener("click", () => addValueToScreen("+"));
  percentage.addEventListener("click", () => addValueToScreen("%"));
  subtract.addEventListener("click", () => addValueToScreen("-"));
  calculate.addEventListener("click", () => calculatResult() );
  backspace.addEventListener("click", () => deleteOneValue());
  clearHistory.addEventListener("click", () => clearHistories())
})
 
//grabbing history list
const historyList = document.getElementById("historylist");

//array to hold the history
let history = [];

  function addToHistory(equation, result) {
    //Save to history array
    const entry = `${equation} = ${result}`;
    history.push(entry);

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = entry;

    

    // Add it to the history list in the HTML
    historyList.appendChild(li);
  }



// this function clears the history
function clearHistories() {
  history = [];
  historyList.innerHTML = "";
};

 
 