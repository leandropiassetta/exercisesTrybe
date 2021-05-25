// Exercise 4:

const arrNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

// The value expected is -> Fernanda //

const greaterNumberOfCharacters = (arrNames) => {
  return arrNames.sort((a, b) => b.length - a.length)[0]
}

// function greaterNumberOfCharacters () {
//   let control = arrNames[0];

//   for(index in arrNames) {
//     if(arrNames[index].length > control.length) {
//       control = arrNames[index];
//     } else {
//       control;
//     }
//   }
//   return control;
// }

console.log(greaterNumberOfCharacters(arrNames));
