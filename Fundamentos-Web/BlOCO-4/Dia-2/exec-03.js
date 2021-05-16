//3 - For the third exercise, calculate and print the arithmetic mean of the values contained in the array. //

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const arithmeticAverage = (numbers) => {
  return numbers.reduce((sumTotal, number, _, totalNumbers) => {
      sumTotal += number / totalNumbers.length;
      const average = sumTotal
      return average;
  }, 0).toFixed(2);
}

console.log(arithmeticAverage(numbers))