// 3. Now create a new array from the numbers array, without losing it. Each value of the new array must be equal to the corresponding value in the array numbers multiplied by the following. For example: the first value of the new array should be 45, as it is the multiplication of 5 (first value) and 9 (next value). The second value of the new array should be 27, since it is the multiplication of 9 (second value) and 3 (next value), and so on. If there is no next value, the multiplication must be done by 2. Do this using the for and the push method. The result should be the array below.//

// Exercises 3:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (i + 1 < numbers.length) {
    newNumbers.push(numbers[i] * numbers[i + 1]);
  } else {
    newNumbers.push(numbers[i] * 2);
  }
}

console.log(newNumbers.join(' '));
