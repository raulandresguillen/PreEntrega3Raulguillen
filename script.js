// let display = document.getElementById('display');
// let expression = '';

// function appendToDisplay(value) {
//   expression += value;
//   display.value = expression;
// }

// function clearDisplay() {
//   expression = '';
//   display.value = '';
// }

// function calculate() {
//   try {
//     let result = eval(expression);
//     display.value = result;
//     expression = result.toString();
//   } catch (error) {
//     display.value = 'Error';
//     expression = '';
//   }
// }

//calculador 2

// let displayValue = '';

// function appendToDisplay(value) {
//   displayValue += value;
//   updateDisplay();
// }

// function updateDisplay() {
//   document.getElementById('display').value = displayValue;
// }

// function clearDisplay() {
//   displayValue = '';
//   updateDisplay();
// }

// function calculate() {
//   try {
//     const result = eval(displayValue);
//     displayValue = result.toString();
//     updateDisplay();
//   } catch (error) {
//     displayValue = 'Error';
//     updateDisplay();
//   }
// }


// calculador 3

let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

