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