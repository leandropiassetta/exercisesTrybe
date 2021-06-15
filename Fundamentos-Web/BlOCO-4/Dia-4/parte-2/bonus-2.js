const vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  let evenArr = [];
  vector.forEach(arr => {
    arr.forEach(num => {
      if(num % 2 === 0) evenArr.push(num)
    });
  });
  return evenArr;
}

console.log(arrayOfNumbers(vector))