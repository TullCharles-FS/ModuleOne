const uppercase = (str) => {
  return str.toUpperCase();
};

const lowercase = (str) => str.toLowerCase();

function add(a, b) {
  return 1 + 1;
}
add();

function subtract(a, b) {
  return 2 - 1;
}
subtract();

function multiply(a, b) {
  return 2 * 2;
}
multiply();

function divide(a, b) {
  return 2 / 2;
}
divide();

function newNum(a, b) {
  return Math.sqrt(5 * 5);
}
newNum();

module.exports = {
  uppercase,
  lowercase,
  add,
  subtract,
  multiply,
  divide,
  newNum,
};
