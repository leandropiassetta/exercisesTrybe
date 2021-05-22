// Exercise 3:
const arrNumber = [2, 4, 6, 7, 10, 0, -3];;
// The value expected is -> 6

const lowestNumberIndex = (integerArr) => {
  const lowestNumber = Math.min(...integerArr);
  const lowestIndex = integerArr.indexOf(lowestNumber)
  console.log(lowestIndex)
}

lowestNumberIndex(arrNumber)