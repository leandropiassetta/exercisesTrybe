//Exercises 4:
/*Then, make a pyramid with n base asterisks:
*/

n = 5; //always odd

//number of characters of the current line

let numberChar = Math.ceil(n / 2);

for (let ast = 1; ast <= n; ast += 2) {
  //ast = amount of asterisk that will exist in the line
  let line = "";
  let spaces = "";
  let asterisk = "";

  for (let sp = 1; sp <= numberChar - ast; sp += 1) {
    //sp = line space counter
    spaces += " ";
  }

  for (let st = 1; st <= ast; st += 1) {
    //st = asterisk counter on the line
    asterisk += "*";
  }
  //defining amount of asteristic in the line
  numberChar += 1;
  line = spaces + asterisk;

  console.log(line);
}
