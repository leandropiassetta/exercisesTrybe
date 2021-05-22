/* Make a new for/in, but now show all the key values of the object.*/
const  infoPersonage = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

// The value extpected in the console:

/*
  Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim
*/

// Exercise 4:

const showAllValuesOfObject = (object) => {
  for(value in object) {
    console.log(object[value]);
  }
}

showAllValuesOfObject(infoPersonage);