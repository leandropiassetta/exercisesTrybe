/* 
5-Make a program that defines three variables with the values of the three inner angles of a triangle. Return true if the angles represent the angles of a triangle and false otherwise.
For the angles to be of a valid triangle, the sum of the three must be 180 degrees. If the angles are invalid, the program must return an error message.
*/

let a = 50;
let b = 30;
let c = 100;

if (a + b + c == 180){
    console.log(true);
} else {
    console.log(false);
}