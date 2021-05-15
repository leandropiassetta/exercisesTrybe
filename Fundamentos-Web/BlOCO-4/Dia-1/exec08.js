/*
8- Write a program that defines three numbers in variables at their beginning and return true if at least one of the three is even. Otherwise, it returns false.
Bonus: use only one if.
*/

// let number1 = 1;
// let number2 = 2;
// let number3 = 3;

// if(number1 % 2 == 0 || number2 % 2==0 || number3 % 2== 0){
//     console.log(true);
// }else{
//     console.log(false);
// }

const arrNumber = [2, 3, 4];

function pairNumber(arrNumber) {
    let havePair = false;

    for(i = 0; i < arrNumber.length; i++) {
        if(arrNumber[i] % 2 === 0 ) {
            console.log(arrNumber[i])
            havePair = true;
            break;
        }
    }
    return havePair;
}
console.log(pairNumber(arrNumber))

