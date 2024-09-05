// const add = function(num1, num2) {
// 	return num1 + num2;
// };
const add = ((num1, num2) => num1 + num2);

// const subtract = function(num1, num2) {
// 	return num1 - num2;
// };
const subtract = ((num1, num2) =>  num1 - num2);

// const sum = function(arr) {
// 	const result = arr.reduce(((accumulator, currentValue) => accumulator + currentValue), 0);
//   return result;
// };
const sum = (arr) => (arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0));

// const multiply = function(arr) {
//   const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
//   return product;
// };
const multiply = (arr) => (arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1));

// const power = function(num1, num2) {
// 	let result = 1;
//   for(let i = 0; i < num2; i++){
//     result = result * num1;
//   }
//   return result;
// };
const power = (num1, num2) => num1 ** num2;

// const factorial = function(num) {
// 	let result = 1;

//   for(let i = 2; i <= num; i++){
//     result = result * i;
//   }

//   return result;
// };
const factorial = (num) => num === 0 ? 1 : num * factorial(num -1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
