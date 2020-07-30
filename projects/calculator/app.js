const formula = ['0', '', '0'];
const numberDisplay = document.getElementById('cal-content');

numberDisplay.innerHTML = '0';

function btnNumberInput(newNumber) {
  let currentNumber = formula[2];

  if (currentNumber === formula[0]) {
    currentNumber = '0';
  }

  if (newNumber === '.' && !currentNumber.match(/\./g)) {
    currentNumber += newNumber;
  } else if (currentNumber === '0') {
    if (newNumber !== '0' && newNumber !== '.') {
      currentNumber = newNumber;
    } else {
      currentNumber = '0';
    }
  } else if (newNumber !== '.') {
    currentNumber += newNumber;
  }

  formula[2] = currentNumber;
  numberDisplay.innerText = formula[2].replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  debugerF();
}

function btnOperation(operation) {
  const operationSymbol = formula[1];
  let currentNumber = formula[2];
  const previousNumber = formula[0];

  if (operation === 'AC') {
    formula[2] = '0';
    formula[0] = '0';
    formula[1] = '';
    currentNumber = '0';
  } else if (operationSymbol !== '') {
    formula[2] = calculation(operation);
    currentNumber = formula[2];
  } else if (!['AC', '+/-', '='].includes(operation)) {
    formula[1] = operation;
    formula[0] = currentNumber;
    formula[2] = '0';
  }

  numberDisplay.innerHTML = currentNumber.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  debugerF();
}

function calculation(operation) {
  const currentNo = parseFloat(formula[2]);
  const previousNo = parseFloat(formula[0]);
  const operationSymbol = formula[1];
  let result = '0';

  if (operationSymbol === '+') {
    result = (previousNo + currentNo).toString();
  }

  if (operationSymbol === '/') {
    result = (previousNo / currentNo).toString();
  }

  if (operationSymbol === '-') {
    result = (previousNo - currentNo).toString();
  }

  if (operationSymbol === '*') {
    result = (previousNo * currentNo).toString();
  }

  if (operationSymbol === '%') {
    result = (previousNo % currentNo).toString();
  }

  if (!['AC', '+/-', '='].includes(operation)) {
    formula[1] = operation;
  }

  if (operation === '=') {
    formula[1] = '';
  }

  formula[0] = result;

  debugerF();
  return result;
}

function debugerF() {
  document.getElementById('debuger').innerHTML = formula;
}
