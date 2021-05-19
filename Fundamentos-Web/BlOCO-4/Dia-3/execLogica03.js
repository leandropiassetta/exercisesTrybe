//Exercises 3:
/*Now invert the side of the triangle rectangle. For example:
*/

function invertTriangleRectangle(size) {
    for (i = 1; i <= size; i++) {
        console.log('*'.repeat(i).padStart(size, ' '));
    }
}

invertTriangleRectangle(5)

// Another way
let numberLines = 10;

for (i = 1; i <= numberLines; i++) {
    let line = '';
    for (space = 0; space < numberLines - i; space++) {
    line += ' ';
    }
    for (asterisk = 0; asterisk < i; asterisk++) {
    line += '*';
    }
    console.log(line);
}