const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return add(num1, -num2);
};

const sum = function(numberArray) {
	return numberArray.reduce((cumulativeSum, addend) => cumulativeSum + addend, 0);
};

const multiply = function(numberArray) {
  return numberArray.reduce((cumulativeProduct, factor) => 
    cumulativeProduct * factor, 1
  );
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	result = 1;
  for (i = 2; i < num + 1; i++) {
    result *= i;
  };
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
