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


// No side effects
const thesis2 = renameThesis(thesis, "Church-Turing");
thesis; // old one is still the same
thesis2; // new object

// ctreating a new object and returning it 

// we don't want to update things in place, we want to take the old thing and make a new slightly different copy of it that we can
// return out 

// Taking some data an dretirning new data based on the old data


// often end up with single argument functions

