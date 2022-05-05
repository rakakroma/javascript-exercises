const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (a) {
  return a.reduce((a, b) => { return a + b }, 0)
};

const multiply = function (a) {
  return a.reduce((a, b) => { return a * b }, 1)
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (a) {
  let b = 1;
  for (let i = 1; i <= a; i++) {
    b *= i;
  } return b;
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
