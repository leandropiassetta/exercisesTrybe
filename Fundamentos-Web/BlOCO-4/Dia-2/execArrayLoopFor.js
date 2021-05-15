/*


2 - For the second exercise, you must sum all the values contained in the array and print the result;
3 - For the third exercise, calculate and print the arithmetic mean of the values contained in the array;
4 - The arithmetic mean is the result of the sum of all the elements divided by the total number of elements.
		With the same code as the previous exercise, if the final value is greater than 20, print the message: "value greater than 20". If not, print the message: "value less than or equal to 20";
5 - Using it, find out which is the highest value contained in the array and print it;
6 - Find out how many odd values there are in the array and print the result. If there are none, print the message: "no odd value found";
7 - Using for, find out which is the smallest value contained in the array and print it;
8 - Using for, create an array from 1 to 25 and print the result;
9 - Using the array created in the previous exercise, print the result of the division of each of the elements by 2.

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let mean = 0;
let oddNumbers = 0;
let noOdds = 0;
let smallest = 0;
let newArray = [];
let greatest = 0;

//Exercises 1:

for (let pos in numbers) {
  console.log(`The position ${pos} have the value ${numbers[pos]}`);
}

//Exercises 2:

for (let i = 0; i < numbers.length; i+=1) {
  sum = sum + numbers[i];
}
console.log(
  "-----------------------------------------------------------------------"
);
console.log(`The sum of the elements in the array is: ${sum}`);

sum = 0;

for (let i in numbers) {
  sum += numbers[i];
}
console.log(
  "-----------------------------------------------------------------------"
);
console.log(`This is another way to do the sum and the result is: ${sum}`);

//Exercises 3:

mean = sum / numbers.length;
console.log("-----------------------------------------------------------------------");
console.log(`The arithmetic mean of the elements is this: ${mean}`);

//Exercises 4:

if(mean > 20){
	console.log("-----------------------------------------------------------------------")
	console.log("Value greater than 20");
}
else{
	console.log("-----------------------------------------------------------------------");
	console.log("Value less than 20");
}

//Exercises 5:

greatest = 0;

for (let i = 0; i < numbers.length; i+=1) {
	if (numbers[i] > greatest) {
		greatest = numbers[i];
	}
}
console.log("-----------------------------------------------------------------------");
console.log(`The greatest number in array numbers is: ${greatest}`);

//Exercises 6:

for (let i = 0; i < numbers.length; i+=1) {
	if(numbers[i] % 2 != 0) {
		oddNumbers+=1;		
	}
}
 
if (oddNumbers > 0){
	console.log("-----------------------------------------------------------------------");
	console.log(`The number of odd values in the array numbers is: ${oddNumbers}`);
}else{
	console.log("no odd value found");
}

//Exercises 7:
	
smallest = Infinity;

for (let i = 0; i < numbers.length; i+=1) {
	if (numbers[i] < smallest) {
		smallest = numbers[i];
	}
}	
console.log("-----------------------------------------------------------------------");
console.log(`The smallest number in array numbers is: ${smallest}`);

//Exercises 8:

for(let i = 1; i <= 25; i+=1){
	newArray.push(i);
}
console.log("-----------------------------------------------------------------------");
console.log(`creating 25 elements within the array`);

//Exercises 9:

newArray = [];

for(let i = 1; i <= 25; i+=1){
	newArray.push(i);
}

console.log("-----------------------------------------------------------------------");

for(let i in newArray){

	console.log(`printing the result of dividing each element of the array by two ${newArray[i]/2}`);
}







