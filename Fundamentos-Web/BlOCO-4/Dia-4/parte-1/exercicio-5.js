/* Now, define a second object with the same structure (the same keys) as the first and the following values: "Uncle Paws", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "The Last MacPatinhas", "Yes". */

const  infoPersonage = {
  personage: 'Daisy Duck',
  origin: 'Donald Duck',
  note: 'Girlfriend of the main personage in Donald Duck comics.',
  recurrent: 'YES'
};

const  infoPersonage2 = {
  personage: 'Scrooge McDuck',
  origin: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  note: 'The Last MacPatinhas',
  recurrent: 'Yes'
};

// The value expected in the console:

/* 
  Daisy Duck and Scrooge McDuck
    Donald Duck and Christmas on Bear Mountain, Dell's Four Color Comics # 178
    Main character's girlfriend in the Donald Duck and The Last Mac comics
    Both recurring // Pay attention to that last line!
*/

// Exercise 5:

const joinTwoValuesOfObjects = (obj1, obj2) => {
  Object.keys(obj1).forEach(key=> {
    if(obj1[key].toLowerCase() === 'yes' && obj2[key].toLowerCase() === 'yes') {
      console.log('Both recurrent')
    } else {
      console.log(obj1[key] + ' e ' + obj2[key]);
    }
  })
}

joinTwoValuesOfObjects(infoPersonage, infoPersonage2)