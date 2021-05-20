  /* Insert a new property with the key name "recurring" and the value "Yes" in the object and then print the object on the console. */

// value expected in the console //

const  infoPersonage = {
  personage: 'Margarida',
  origin: 'Pato Donald',
  note: 'Girlfriend of the main personage in Donald Duck comics.',
  recurrent: 'Yes'
};

// Exercise 2:

const addNewKeyAndValue = (key, value, obj) => obj[key] = value;

addNewKeyAndValue('recurrent', 'yes', infoPersonage)

console.log(infoPersonage)
