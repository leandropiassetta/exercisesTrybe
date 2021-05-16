//4 - The arithmetic mean is the result of the sum of all the elements divided by the total number of elements.

//With the same code as the previous exercise, if the final value is greater than 20, print the message: "value greater than 20". If not, print the message: "value less than or equal to 20".//

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const numbers2 = [5, 9, 3, 19 ];

const arithmeticAverage = (numbers) => {
    return numbers.reduce((sumTotal, number, _, totalNumbers) => {
      sumTotal += number / totalNumbers.length; 
      const average = sumTotal;
      return average;
    }, 0).toFixed(2);
  }

  const verifyAverage = (number, numberChecked) => {
    console.log(number > numberChecked ?  `Average value greater than ${numberChecked}` : `Average value less than ${numberChecked}`);
  }

verifyAverage(arithmeticAverage(numbers2), 20)
