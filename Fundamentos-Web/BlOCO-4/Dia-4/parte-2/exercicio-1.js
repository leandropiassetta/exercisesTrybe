// Exercise 1:

const verificaPalindromo = (word) =>  word.split('').reverse().join('') ? true : false;

console.log(verificaPalindromo('arara'))

// function verificaPalindrome(word) {
//   let palindromo = '';

//   for(i = word.length -1 ;i >= 0;i--) {
//     palindromo += word[i];
//   }
//   if(palindromo === word) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificaPalindrome('arara'));
