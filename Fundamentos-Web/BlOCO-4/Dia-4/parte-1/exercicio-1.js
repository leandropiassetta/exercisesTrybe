//Exercises 01:

const  infoPersonage = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const  infoPersonage2 = {
  personage: 'Minnie',
  origin: 'Mickey Mouse',
  note: 'Girlfriend of the main personage in Mickey Mouse comics.',
};

/* Print a welcome message on the console for the character above, including his name.
  Expected value on the console: Bem-vinda, Margarida!!*/

const welcomeToPersonage = (obj) => console.log(`Bem-vinda, ${obj['personagem']}!!`);

welcomeToPersonage(infoPersonage);