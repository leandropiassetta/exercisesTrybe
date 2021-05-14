/*
1 - Make five programs, one for each basic arithmetic operation. Your program must have two variables, a and b, defined at the beginning with the values that will be operated. Make programs for:
Add
Subtraction
Multiplication
Division
Module
*/

let a = 5;
let b = 10;

function addiction(a, b){
    return a + b;
  };
  function subtraction(a,b){
    return a - b;
  };
  function multiplication(a,b){
    return a * b;
  };
  function division(a,b){
    return a / b;
  };
  function module(a,b){
    return a % b;
  };

console.log(addiction(a,b));
console.log(subtraction(a,b));
console.log(multiplication(a,b));
console.log(division(a,b));
console.log(module(a,b));


