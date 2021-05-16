//6 - Find out how many odd values there are in the array and print the result. If there are none, print the message: "no odd value found".//

const numbers = [- 4, 5, '9', 3, 19, 70, 8, 100, 2, 35, 27, 101, 'l', 103, 2, 3];
// const numbers =[]

const oddNumbersLength = (numbers) => {
  const sizeOddNumbers =  numbers.filter(num => {
    return isNaN(num) ? false : num % 2 !== 0
  }).length;

  if(sizeOddNumbers) {
    console.log(sizeOddNumbers);
  } else {
    console.log('no oddNumbers value found');
  }
}

oddNumbersLength(numbers)