const numbers = [2,3,4]

function returnLargerNumber(numbers) {
    if(numbers.length < 1) {
        throw new Error('Empty array numbers')
    }
    return Math.max(...numbers)
}

console.log(returnLargerNumber(numbers))
