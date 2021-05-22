  /* Insert a new property with the key name "recorrente" and the value "Sim" in the object and then print the object on the console. */

// value expected in the console //

const  infoPersonage = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercise 2:

const addNewKeyAndValue = (key, value, obj) => obj[key] = value;

addNewKeyAndValue('recorrente', 'Sim', infoPersonage);

console.log(infoPersonage);
