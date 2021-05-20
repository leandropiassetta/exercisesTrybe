//Exercises 01:

/* Using the object below, do the following exercises:
*/

const  infoPersonage = {
  personage: 'Margarida',
  origin: 'Pato Donald',
  note: 'Girlfriend of the main personage in Donald Duck comics.',
};

const  infoPersonage2 = {
  personage: 'Miney',
  origin: 'Mickey Mouse',
  note: 'Girlfriend of the main personage in Mickey Mouse comics.',
};

/* Print a welcome message on the console for the character above, including his name.
  Expected value on the console: Welcome, Margarida */

const welcomeToPersonage = (obj) => console.log(`Welcome, ${obj['personage']}`)

welcomeToPersonage(infoPersonage2)