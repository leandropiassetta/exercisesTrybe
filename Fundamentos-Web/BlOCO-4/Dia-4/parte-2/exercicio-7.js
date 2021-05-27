// Exercise 7:

// Test value : 'trybe' and 'be';
// The value expected in return of function is -> true

function verifyEndOfWord(strWord, strEnding) {
  return strWord.endsWith(strEnding) ? true : false;
}

console.log(verifyEndOfWord('Trybe', 'be'));