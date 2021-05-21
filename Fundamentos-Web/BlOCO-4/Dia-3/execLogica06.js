/*
    Make a program that says whether a number defined in a variable is prime or not.

A prime number is a number that is only divisible by 1 and itself, that is, dividing it with any other numbers gives remainder other than zero.
*/

//Exercises 6:

function primeNumbers(numbers) {
let arrayNumbers = [];
    for (number = 0; number <= numbers; number++) {
        if (isPrime(number)) {
        arrayNumbers.push(number);
        }
    }
    return arrayNumbers;
}
function isPrime(number) {
    for(divisor = 2; divisor < number; divisor++)
        if(number  % divisor === 0) {
            return false
        };
    return number > 1
}

console.log(primeNumbers(13));
