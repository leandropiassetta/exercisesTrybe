/* Make a new for/in, but now show all the key values of the object.*/
const  infoPersonage = {
  personage: 'Daisy Duck' ,
  origin: 'Pato Donald',
  note: 'Girlfriend of the main personage in Donald Duck comics.',
  recurrent: 'Yes'
};

// The value extpected in the console:

/*
    Margarida
    Pato Donald
    Girlfriend of the main personage in Donald Duck comics.
    Yes
*/

// Exercise 4:

const showAllValuesOfObject = (object) => {
  for(value in object) {
    console.log(object[value]);
  }
}

showAllValuesOfObject(infoPersonage);