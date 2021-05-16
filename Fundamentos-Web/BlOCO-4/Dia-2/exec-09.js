// 9 - Using the array created in the previous exercise, print the result of the division of each of the elements by 2. //

const array_1_To_25 = () => {
  const numbers = [];
  for(i = 1; i <= 25; i += 1) {
    numbers.push(i)
  }
  return numbers
}

const divideEachElement = (numbers, divider) => numbers.map(num => {
  console.log(num / divider);
})

divideEachElement(array_1_To_25(), 2)