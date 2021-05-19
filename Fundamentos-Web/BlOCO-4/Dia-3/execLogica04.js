//Exercises 4:
/*Then, make a pyramid with n base asterisks:
*/


let n = 5;

for (let i = 1; i <= n; i += 2) {
  let line = '';
  for (let s = 0; s < Math.ceil((n - i) / 2); s++) {
    line += 'l';
  }
  for (let c = 0; c < i; c++) {
    line += '*';
  }
  console.log(line);
}