// 7 - Using for, find out which is the smallest value contained in the array and print it. //

const numbers = [- 4, 5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 101, 103];

const lowestArrayValue = (numbers) => {
  const lowestNumber = Math.min(...numbers);
  console.log(lowestNumber);
}

lowestArrayValue(numbers);