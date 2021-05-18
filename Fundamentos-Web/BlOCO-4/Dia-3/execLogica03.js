//Exercises 3:
/*Now invert the side of the triangle rectangle. For example:
*/

function invertTriangleRectangle(size) {
    for (i = 1; i <= size; i++) {
        console.log('*'.repeat(i).padStart(size, ' '));
    }
}

invertTriangleRectangle(5)