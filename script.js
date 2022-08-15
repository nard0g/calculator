const currentOperation = {
  firstVariable: undefined,
  operator: undefined,
  secondVariable: undefined
};

const initCalculator = function() {
  return;
}

// quesrySelectors for each button on the calculator
const clearButton = document.querySelector('#clear-button');
const deleteButton = document.querySelector('#delete-button');
const divideButton = document.querySelector('#divide-button');
const multiplyButton = document.querySelector('#multiply-button');
const subtractButton = document.querySelector('#subtract-button');
const addButton = document.querySelector('#add-button');
const equalsButton = document.querySelector('#equals-button');
const decimalButton = document.querySelector('#decimal-button');

const zeroButton = document.querySelector('#zero-button');
const oneButton = document.querySelector('#one-button');
const twoButton = document.querySelector('#two-button');
const threeButton = document.querySelector('#three-button');
const fourButton = document.querySelector('#four-button');
const fiveButton = document.querySelector('#five-button');
const sixButton = document.querySelector('#six-button');
const sevenButton = document.querySelector('#seven-button');
const eightButton = document.querySelector('#eight-button');
const nineButton = document.querySelector('#nine-button');


// querySelectors for Screen output for the calculator
const operationOutput = document.querySelector('#operation-output');
const resultsOutput = document.querySelector('#results-output');


const selectOperator = function() {
  currentOperation.firstVariable = resultsOutput.innerText;
  operationOutput.innerText = currentOperation.firstVariable+currentOperation.operator;
  resultsOutput.innerText = '';
};


// evenListeners for each button
clearButton.addEventListener('click', () => {
  resultsOutput.innerText = '';
  operationOutput.innerText = '';

});

deleteButton.addEventListener('click', () => {
  resultsOutput.innerText = operationOutput.innerText.slice(0, -1);
});

divideButton.addEventListener('click', () => {
  currentOperation.operator = divideButton.innerText;
  selectOperator();
});

multiplyButton.addEventListener('click', () => {
  currentOperation.operator = multiplyButton.innerText;
  selectOperator();
});

subtractButton.addEventListener('click', () => {
  currentOperation.operator = subtractButton.innerText;
  selectOperator();
});

addButton.addEventListener('click', () => {
  currentOperation.operator = addButton.innerText;
  selectOperator();
});

equalsButton.addEventListener('click', () => {
  selectOperator();
});

decimalButton.addEventListener('click', () => {
  if (!resultsOutput.innerText.includes('.')) {
    resultsOutput.innerText += '.';
  }
});


zeroButton.addEventListener('click', () => {
  resultsOutput.innerText += 0;
});

oneButton.addEventListener('click', () => {
  resultsOutput.innerText += 1;
});

twoButton.addEventListener('click', () => {
  resultsOutput.innerText += 2;
});

threeButton.addEventListener('click', () => {
  resultsOutput.innerText += 3;
});

fourButton.addEventListener('click', () => {
  resultsOutput.innerText += 4;
});

fiveButton.addEventListener('click', () => {
  resultsOutput.innerText += 5;
});

sixButton.addEventListener('click', () => {
  resultsOutput.innerText += 6;
});
sevenButton.addEventListener('click', () => {
  resultsOutput.innerText += 7;
});

eightButton.addEventListener('click', () => {
  resultsOutput.innerText += 8;
});

nineButton.addEventListener('click', () => {
  resultsOutput.innerText += 9;
});





const add = function(firstVariable, secondVariable) {
	return firstVariable + secondVariable;
};

const subtract = function(firstVariable, secondVariable) {
	return firstVariable - secondVariable;
};

const multiply = function(firstVariable, secondVariable) {
  return firstVariable * secondVariable;
};

const divide = function(firstVariable, secondVariable) {
  return firstVariable / secondVariable;
};


