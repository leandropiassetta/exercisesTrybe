//Exercises 01:

/* Using the object below, do the following exercises:
*/

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Girlfriend of the main character in Donald Duck comics",
    recorrente: "Yes",
  };

  /* Print a welcome message on the console for the character above, including his name.
  Expected value on the console: Welcome, Margarida */

  console.log("Welcome" + ", " + info.personagem);

  /* Insert a new property with the key name "recurring" and the value "Yes" in the object and then print the object on the console. */

  console.log (info.recorrente) ;

  /*Make a for/in that shows all the keys of the object.*/

  for(let key in info){
      console.log(key);
  }
  
  /* Make a new for/in, but now show all the key values of the object.*/

  for(let key in info){
      console.log(info[key]);
  }

  /* Now, define a second object with the same structure (the same keys) as the first and the following values: "Uncle Paws", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "The Last MacPatinhas", "Yes". */

  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "The last MacPatinhas",
    recorrente: "Yes",
  };

  for(let key in info2){
    if(key == "recorrente"){
        console.log("ambos recorrentes")
    }else{
        console.log(info[key] + " e " + info2[key]);
    } 
    
  }