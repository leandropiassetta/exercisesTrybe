const number = 20

function positiveOrNegative(number) {
    if(typeof number !== Number) {
        Number(number)
    }
    if(number > 0) return 'positive';
    if(number < 0) return 'negative';
    if(number == 0) return 'zero';
}

console.log(positiveOrNegative('-5'))