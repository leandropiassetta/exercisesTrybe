//Exercises 3:
/*Now invert the side of the triangle. For example:
*/

let n = 5 

for (let ast = 1; ast <= n; ast += 1 ) {
    let spaces = "";
    let asterisk = "";
    let line = "";

//spaces

for (let sp = 0; sp < n - ast; sp += 1){
    spaces += " ";
}
 
//asterisko

for(let st = 1; st <= ast; st += 1){
    asterisk += "*";
}

line = spaces + asterisk;

console.log(line);
}