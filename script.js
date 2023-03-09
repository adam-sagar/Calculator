let operand1 = '';
let operand2 = '';
let operator = '';

function addNumber(number) {
    if (operand1 == '') {
        operand1 = number
    } else {
    operand2 = number}
    document.getElementById('results').value = number
}

function selectOperator(op) {
    operator = op
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
    }
    document.getElementById('results').value = result
}

function clearResult() {
    document.getElementById('results').value = ''
    operand1 = ''
    operand2 = ''
    operator = ''
}