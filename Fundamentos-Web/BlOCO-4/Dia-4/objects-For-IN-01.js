
let info = {
  personagem: 'Daisy Duck',
  origem: 'Donald Duck',
  nota: 'Girlfriend of the main personage in Donald Duck comics.',
  recorrente: 'Yes'
};

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