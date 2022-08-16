const currentOperation = {
  firstVariable: "",
  operator: "",
  secondVariable: "",
  operationResult: ""
};

const initCalculator = function() {
  currentOperation.firstVariable = "";
  currentOperation.operator = "";
  currentOperation.secondVariable = "";
  currentOperation.operationResult = "";
  updateScreen();
}

const updateScreen = function() {
  if (!currentOperation.operator) {
    resultsOutput.innerText = currentOperation.firstVariable;
    operationOutput.innerText = '';
  } else {
    resultsOutput.innerText = currentOperation.secondVariable;
    operationOutput.innerText = currentOperation.firstVariable+currentOperation.operator;

  }
}

const operate = function(firstVariable, secondVariable) {
  firstVariable = parseFloat(firstVariable);
  secondVariable = parseFloat(secondVariable);
  
  switch(currentOperation.operator) {
    case '+':
      currentOperation.operationResult = firstVariable + secondVariable;
      break;
    case '-':
      currentOperation.operationResult = firstVariable - secondVariable;
      break;
    case '×':
      currentOperation.operationResult = firstVariable * secondVariable;
      break;
    case '÷':
      currentOperation.operationResult = firstVariable / secondVariable;
      break;
    default:
      console.log("Shouldn't evaluate with no operator!")
      break;
  }

  if (!currentOperation.operationResult) {
    alert("Critical Error: You can't divide by zero!")
    initCalculator();
  }

  operationOutput.innerText = currentOperation.firstVariable + currentOperation.operator + currentOperation.secondVariable;
  resultsOutput.innerText = currentOperation.operationResult;
  currentOperation.firstVariable = currentOperation.operationResult;
  currentOperation.secondVariable = "";
  console.log(currentOperation)
  currentOperation.operator = "";

}


// querySelectors for each button on the calculator
const clearButton = document.querySelector('#clear-button');
const deleteButton = document.querySelector('#delete-button');
const equalsButton = document.querySelector('#equals-button');
const decimalButton = document.querySelector('#decimal-button');

const operatorButtons = document.querySelectorAll('.operator_button');
const numberButtons = document.querySelectorAll('.number-button');


// querySelectors for Screen output for the calculator
const operationOutput = document.querySelector('#operation-output');
const resultsOutput = document.querySelector('#results-output');

// evenListeners for each button
clearButton.addEventListener('click', () => {
  initCalculator();
});

deleteButton.addEventListener('click', () => {
  if (!currentOperation.firstVariable) {
    currentOperation.firstVariable = currentOperation.firstVariable.slice(0, -1);
  } else {
    currentOperation.secondVariable = currentOperation.secondVariable.slice(0, -1);
  }
  updateScreen();
});


equalsButton.addEventListener('click', () => {
  operate(currentOperation.firstVariable, currentOperation.secondVariable);  
});

decimalButton.addEventListener('click', () => {
  if (!currentOperation.operator && !currentOperation.firstVariable.includes('.')) {
    currentOperation.firstVariable += '.';
    updateScreen();
  } else {
    currentOperation.secondVariable.includes('.')
    currentOperation.secondVariable += '.';
    updateScreen();
  }
});


// Create event listeners for all operator buttons and update currentOperation.operator
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', () => {
    if (currentOperation.operator) {
      operate(currentOperation.firstVariable, currentOperation.secondVariable);
    }
    currentOperation.operator = operatorButtons[i].innerText;
    updateScreen();
  });
};

//Create event listeners for all number buttons and add to appropriate variable
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', () => {
  if (!currentOperation.operator) {
    currentOperation.firstVariable += numberButtons[i].innerText;
  } else {
    currentOperation.secondVariable += numberButtons[i].innerText;
  }
  updateScreen();
  });
};






