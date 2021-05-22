/*Make a pyramid with n base asterisks that is empty in the middle. Assume that the value of n will always be odd:
*/

//Exercises 5:

let base = 7;
let meio = (base + 1) / 2;
let esquerda = meio;
let direita = meio;
for (let linha = 1; linha <= meio; linha += 1) {
  let imprimir = '';
  for (let coluna = 1; coluna <= base; coluna += 1) {
    if (coluna === direita || coluna === esquerda || linha === meio) {
      imprimir = imprimir + '*';
    } else {
      imprimir = imprimir + ' ';
    }
  }
  console.log(imprimir);
  esquerda -= 1;
  direita += 1;
  imprimir = '';

}