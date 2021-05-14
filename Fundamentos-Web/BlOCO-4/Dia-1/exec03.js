/*
3-Make a program that returns the largest of three numbers. Define at the beginning of the program three variables with the values that will be compared.
*/

const numbers = []

function returnLargerNumber(numbers) {
    if(numbers.length < 1) {
        throw new Error('Empty array numbers')
    }
    return Math.max(...numbers)
}

console.log(returnLargerNumber(numbers))
