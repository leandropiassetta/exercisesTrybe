/* 
5-Make a program that defines three variables with the values of the three inner angles of a triangle. Return true if the angles represent the angles of a triangle and false otherwise.
For the angles to be of a valid triangle, the sum of the three must be 180 degrees. If the angles are invalid, the program must return an error message.
*/

const a = '50';
const b = '30';
const c = 100;


function triangleAngle(a, b, c) {
    const triangleAngle = 180;
    const validation = Number(a) + Number(b) + Number(c);
    
    if(validation !== triangleAngle) {
        throw new Error('Triangle angle invalid!!')
    } else if(validation === triangleAngle) {
        return true;
    }
}

console.log(triangleAngle('50',b,c))
// console.log(triangleAngle( 5, b, c))