// 8 - Using for, create an array from 1 to 25 and print the result. //

const array_1_To_25 = () => {
  const numbers = [];
  for(i = 1; i <= 25; i += 1) {
    numbers.push(i)
  }
  console.log(numbers)
}

array_1_To_25()