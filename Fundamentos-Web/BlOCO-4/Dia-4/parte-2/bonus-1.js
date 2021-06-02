const assert = require('assert');

function romanDigitToDecimal(romanNumber) {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  return dict[romanNumber];
}

function combineRomanNumbers(numberA, numberB) {
  const decimalA = romanDigitToDecimal(numberA);
  const decimalB = romanDigitToDecimal(numberB);
  if (decimalA >= decimalB) return decimalA;
  return -decimalA;
}

function romanToDecimal(romanNumber) {
  const lastRomanNumber = romanNumber[romanNumber.length - 1]

  let result = romanDigitToDecimal(lastRomanNumber);

  for (let index = romanNumber.length - 1; index > 0; index -= 1) {
    const A = romanNumber[index - 1];
    const B = romanNumber[index];
    result += combineRomanNumbers(A, B);
  }
  return result;
}

console.log(romanToDecimal('XXVIV'));

{
  const romanNumber = 'CDXLIX';
  const expect = 449;
  assert.strictEqual(romanToDecimal(romanNumber), expect);
}

{
  const romanNumber = 'IV';
  const expect = 4;
  assert.strictEqual(romanToDecimal(romanNumber), expect);
}