//3 - For the third exercise, calculate and print the arithmetic mean of the values contained in the array. //

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const arithmeticAverage = (numbers) => {
  console.log(numbers.reduce((sumTotal, number, index, totalNumbers) => {
      sumTotal += number / totalNumbers.length;
      return sumTotal;
  }, 0).toFixed(2));
}

arithmeticAverage(numbers)