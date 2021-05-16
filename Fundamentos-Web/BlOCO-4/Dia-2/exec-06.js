//6 - Find out how many odd values there are in the array and print the result. If there are none, print the message: "no odd value found".//

const numbers = [- 4, 5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 101, 103];

const oddNumbersLength = (numbers) => numbers.filter(num => num % 2 !== 0).length

console.log(oddNumbersLength(numbers))