//Exercises 6:

/*Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/


let number = 11;

let amountOfDividers = 0;

for (let divisor = 1; divisor <= number ; divisor +=1) {
    if(number % divisor === 0){
        amountOfDividers +=1;
    }
}

if (amountOfDividers === 2){
    console.log("prime");
} else {
    console.log("no prime");
}