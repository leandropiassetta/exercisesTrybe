/* Now, define a second object with the same structure (the same keys) as the first and the following values:'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'.  */

const  infoPersonage = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'SIM'
};

const  infoPersonage2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};

// The value expected in the console:

/* 
  Margarida e Tio Patinhas
  Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
  Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
  Ambos recorrentes // Atenção para essa última linha!
*/

// Exercise 5:

const joinTwoValuesOfObjects = (obj1, obj2) => {
  Object.keys(obj1).forEach(key=> {
    if(obj1[key].toLowerCase() === 'sim' && obj2[key].toLowerCase() === 'sim') {
      console.log('Ambos recorrentes')
    } else {
      console.log(obj1[key] + ' e ' + obj2[key]);
    }
  });
}

joinTwoValuesOfObjects(infoPersonage, infoPersonage2)