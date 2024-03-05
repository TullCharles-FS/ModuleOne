const uppercase = (str) => {
  return str.toUpperCase();
};

const lowercase = (str) => str.toLowerCase();

function add(a, b) {
  return a + b;
}
add();

function subtract(a, b) {
  return a - b;
}
subtract();

function multiply(a, b) {
  return a * b;
}
multiply();

function divide(a, b) {
  return a / b;
}
divide();

//function root(a, b) {
//return Math.sqrt(a * b);
//}
//root();

module.exports = {
  uppercase,
  lowercase,

  add,
  subtract,
  multiply,
  divide,
  //root,
};
