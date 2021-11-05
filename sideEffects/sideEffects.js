let thesis = {name: "Church's", date: 1936};

function renameThesis(newName){
  thesis.name = newName;
  console.log("Renamed!");
}

renameThesis("Church-Turing");
thesis;

// Assigning a new name to the thesis.name property 

// Thesis object, and this function is updating it 

// Reading data fromt he outside world ( the thesis object) instead of the inputs to the function 

// Logging to the console 

