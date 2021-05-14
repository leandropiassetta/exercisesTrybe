//Exercise 1:
/* For today's first exercise, make a program that, given a value n, be n > 1, print on the screen a square made of n-size side asterisks.*/



let n = 5;

let line ="";

for(let column = 0; column < n; column += 1) {
    line += "*"; //line = *****
}

for(let i = 0; i < n; i +=1){
    console.log(line);
}






