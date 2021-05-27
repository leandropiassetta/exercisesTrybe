// Exercise 6:

const numInteger = 5;

// The expected value is -> 15

function sumTotalNumInteger (number) {
  const arrayNumber = [...new Array(number)].reduce((acc, _, i) => {
    acc += i;
    return acc;
  }, 0);
  console.log(arrayNumber + number)
}

sumTotalNumInteger(5)