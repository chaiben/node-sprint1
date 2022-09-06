const sum = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("This function expect 2 numbers");
  } 
  return a + b;
};
const subtract = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("This function expect 2 numbers");
  } 
  return a - b;
};
const multiply = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("This function expect 2 numbers");
  } 
  return a * b;
};
const divide = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("This function expect 2 numbers");
  } 
  return a / b;
};

module.exports.sum = sum;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
