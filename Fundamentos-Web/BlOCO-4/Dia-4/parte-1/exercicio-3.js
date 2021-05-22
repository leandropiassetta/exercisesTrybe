/*Make a for/in that shows all the keys of the object.*/
const  infoPersonage = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

// The value expected in the console:

/*
  personagem
  origem
  nota
  recorrente
*/

// Exercise 3:

const showAllKeys = (object) => {
  for(key in object) {
    console.log(key);
  }
}

showAllKeys(infoPersonage);

