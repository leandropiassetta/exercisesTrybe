//Exercises 1:

function palindromo(word) {
  let palavrainvertida = "";

  for (let i = word.length - 1; i >= 0; i -= 1) {
    palavrainvertida = palavrainvertida + word[i];
  }
  if (word === palavrainvertida) {
    return true;
  }
  return false;
}

//Exercises 2
function highNumber(arr) {
  let comparator = arr[0];
  let highIndice;
  for (let i = 0; i < arr.length; i += 1) {
    if (comparator < arr[i]) {
      comparator = arr[i];
      highIndice = i;
    }
  }
  return highIndice;
}

//Exercises 3
function smallNumber(arr) {
  let comparator = arr[0];
  let smallIndice;
  for (let i = 0; i < arr.length; i += 1) {
    if (comparator > arr[i]) {
      comparator = arr[i];
      smallIndice = i;
    }
  }
  return smallIndice;
}


//Exercises 4
function highName(name) {
  let highName = name[0];
  let countLetters = 0;
  for (let i in name) {
    let count = 0;
    count = name[i].length;
    if (count > countLetters) {
      highName = name[i];
      countLetters = count;
    }
  }
  return "The highest name is " + highName;
}
console.log(highName('Antônio foi no banheiro e não sabemos o que aconteceu'))
//Exercises 5:

function numberRepeat(numbers) {
  let repeatInteger = 0;
  let contNumbers = 0;
  let indexNumberRepeat = 0; 
  for(let index in numbers){
    let numberChecker = numbers[index];
    for(let index2 in numbers){
      if(numberChecker === numbers[index2]){
        contNumbers +=1;
      }
    }
    if(contNumbers > repeatInteger){
      repeatInteger = contNumbers;
      indexNumberRepeat = index;
    }
    contNumbers = 0;
  }
  return indexNumberRepeat;
}
