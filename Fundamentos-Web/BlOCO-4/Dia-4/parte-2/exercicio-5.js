// Exercise 5: 

const numbers = [2, 3, 2, 5, 8, 2, 3];

// The value expected is -> 2

function numberWithMoreRepetitions(arr) {
  const counts = arr.reduce((acc, cur) => {
    if (!acc[cur]) acc[cur] = 0;
    acc[cur] += 1;
    return acc;
  }, {});

  const entries = Object.entries(counts);
  const numMoreRepeat = entries.sort((countA, countB) => countB[1] - countA[1])[0][0];

  return `The number that is more repeated in the Array is this: ${numMoreRepeat}`;
}

console.log(numberWithMoreRepetitions(numbers));