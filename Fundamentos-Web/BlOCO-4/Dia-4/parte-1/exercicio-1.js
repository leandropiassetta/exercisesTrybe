//Exercises 01:

const  infoPersonage = {
  personage: 'Daisy Duck',
  origin: 'Donald Duck',
  note: 'Girlfriend of the main personage in Donald Duck comics.',
};

const  infoPersonage2 = {
  personage: 'Minnie',
  origin: 'Mickey Mouse',
  note: 'Girlfriend of the main personage in Mickey Mouse comics.',
};

/* Print a welcome message on the console for the character above, including his name.
  Expected value on the console: Welcome, Daisy Duck */

const welcomeToPersonage = (obj) => console.log(`Welcome, ${obj['personage']}!!`);

welcomeToPersonage(infoPersonage);