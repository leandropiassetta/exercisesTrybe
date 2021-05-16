//5 - Using it, find out which is the highest value contained in the array and print it.//

const numbers = [- 4, 5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 101, 103];

const highestNumber = (numbers) => {
  // let highNumber = 0
  // for(i = 0; i < numbers.length; i += 1) {
  //   if(numbers[i] > highNumber) {
  //     highNumber = numbers[i];
  //   }
  // }
  // console.log(highNumber)
  let highNumber = numbers[0]
  for(number of numbers) {
    if(number > highNumber) {
      highNumber = number
    }
  }
  console.log(highNumber)
}

highestNumber(numbers)