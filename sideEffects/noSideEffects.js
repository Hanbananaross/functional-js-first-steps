const thesis = {name: "Church's", date: 1936}; // Creating a new thesis object, giving it a name and a date property 

function renameThesis(oldThesis, newName) { // declaring a function and passing in 2 arguments 
  return {
    name: newName, date: oldThesis.date
  }
}

const thesis2 = renameThesis(thesis, "Church-Turing"); // calling the function (passing in two values), and assigning it to a variable
console.log(thesis); // old one is still the same
console.log(thesis2); // new object

// creating a new object and returning it 

// we don't want to update things in place, we want to take the old thing and make a new slightly different copy of it that we can
// return out 

// Taking some data and returning new data based on the old data

// often end up with single argument functions in functional programming


// Mutable objects; you can change something about this object elsewhere in the program.
// This means that you can get a different output if the value of the object changes inbetween calls. 

// If you're working with immutable data you know you're going to get the same output. 