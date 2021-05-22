// Exercise 2:

const arrNumber = [2, 3, 6, 7, 10, 1];

// expected return -> 4

const highestIndex = (integerArr) => {
  const highestNumber = Math.max(...integerArr);
  const highestIndex = integerArr.indexOf(highestNumber)
  console.log(highestIndex)
}

highestIndex(arrNumber)