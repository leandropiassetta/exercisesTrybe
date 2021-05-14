/*
3-Make a program that returns the largest of three numbers. Define at the beginning of the program three variables with the values that will be compared.
*/

let number1 = 5; let number2 = 10; let number3 = 20;

if (number1 > number2 && number1 > number3){
    console.log(number1);
}else if(number2 > number1 && number2 > number3){
    console.log(number2);
}
 else{
     console.log(number3);
 }
