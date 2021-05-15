/*
Write a program that converts a given grade in percent (from 0 to 100) into concepts from A to F. Follow these rules:

Percentage >= 90 -> A
Percentage >= 80 -> B
Percentage >= 70 -> C
Percentage >= 60 -> D
Percentage >= 50 -> E
Percentage < 50 -> F
The program must return an error message and close if the past note is less than 0 or more than 100.

*/


let proofNote = 90;

if (proofNote <= 100 && proofNote >=90){
    console.log("A");
}else if (proofNote < 90 && proofNote >=80){
    console.log("B");
}
else if (proofNote < 80 && proofNote >= 70){
    console.log("C");
}
else if (proofNote < 70 && proofNote >= 60){
    console.log("D");
}
else if (proofNote < 60 && proofNote >= 50){
    console.log("E");
}
else if(proofNote< 50 ){
    console.log("F")
}
else {
    console.log("Error")
}
