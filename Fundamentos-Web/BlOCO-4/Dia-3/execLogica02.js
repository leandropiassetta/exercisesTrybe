//Exercises 2:
/*For the second exercise, do the same as before, but print a rectangle triangle with 5 base asterisks. For example:
*/

function triangleRectangle (baseLine) {
    let line = ''
    for(column = 1; column <= baseLine; column += 1) {
        console.log(line += '*')
    }
}

triangleRectangle(5)