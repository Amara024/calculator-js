// program for a simple calculator
const operator = prompt('Enter operator(either +,-,* or /):');
const number1 = parseFloat(prompt('Enter first number:'));
const number2 = parseFloat(prompt('Enter second number:'));

let result;
// using if....else
if(operator =='+') {result = number1 + number2;}

else if (operator =='-') {result = number1 - number2;}

else if(operator =='*') {result = number1 * number2;}

else { result = number1 / number2;}

//displaythe result
console.log ('${number1} ${operator} ${number2} = ${result}');
