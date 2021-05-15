/* 
9- Write a program that defines three numbers in variables at their beginning and return true if at least one of the three is odd. Otherwise, it returns false.
Bonus: use only one if.
*/

// let number1 = 1;
// let number2 = 2;
// let number3 = 3;

// if(number1 % 2 != 0 || number2 % 2 != 0|| number3 % 2 !=0){
//     console.log(true);
// }else{
//     console.log(false);
// }

const arrNumber = [2, 4, 4]
function oddNumber(arrNumber) {
    let haveOdd = false;

    for(i = 0; i < arrNumber.length; i++) {
        if(arrNumber[i] % 2 !== 0 ) {
            console.log(arrNumber[i])
            haveOdd = true;
            break;
        }
    }
    return haveOdd;
}
console.log(oddNumber(arrNumber))
