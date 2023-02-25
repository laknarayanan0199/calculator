const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function calculateResult(operation){
const enteredNumber = getUserNumberInput();
const initialResult = currentResult;
let mathoperator;
if(operation === 'ADD'){
  currentResult += enteredNumber;
  mathoperator = "+";
} 
else if( operation === 'SUBTRACT'){
  currentResult -= enteredNumber;
  mathoperator = "-";
}
else if( operation === 'MULTIPLY'){
  currentResult *= enteredNumber;
  mathoperator = "*";
}
else if( operation === 'DIVIDE'){
  currentResult /= enteredNumber;
  mathoperator = "/";
}

createAndWriteOutput(mathoperator, initialResult, enteredNumber);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

function cancel(){
  outputResult(0,0);
  currentResult = 0;

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
cancelBtn.addEventListener('click', cancel)