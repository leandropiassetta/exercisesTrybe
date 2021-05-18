//Exercise 1:
/* Make a program that, given a value n, be n > 1, print on the screen a square made of n-size side asterisks.*/

const sizeLine = 5

function createLineSquare(sizeLine) {
    let line = ''
    for(column = 1; column <= sizeLine; column += 1) {
        line += '*'
    }
    console.log(line)
}

function createSquare() {
    let column = '';
    for(line = 1; line <= sizeLine; line += 1) {
        column += createLineSquare(sizeLine)
    }
    return column
}

createSquare()
