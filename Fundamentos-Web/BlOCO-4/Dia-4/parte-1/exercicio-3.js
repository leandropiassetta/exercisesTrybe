/*Make a for/in that shows all the keys of the object.*/
const  infoPersonage = {
  personage: 'Daisy Duck',
  origin: 'Pato Donald',
  note: 'Girlfriend of the main personage in Donald Duck comics.',
  recurrent: 'Yes'
};

// The value expected in the console:

/*
    personage
    origin
    note
    recurrent
*/

// Exercise 3:

const showAllKeys = (object) => {
  for(key in object) {
    console.log(key);
  }
}

showAllKeys(infoPersonage);

