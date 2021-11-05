// Impure function
let name = "Alonzo"; // global variable

function greet() {
  console.log(`Hello, ${name}!`);
}

greet(); // Calling the first time 

name = "Alan"; // Changes the value of name
greet(); // Calling the function a second time, giving a different output. 

// Impure: Here the function is being called at a later time when the variable changes, you could have an unexpected output. 
// Implicit return as there's no return statement. Means it could be doing something other than returning it's value (logging). 


// Pure function
function secondGreet(name) {
  return `Hello, ${name}!`;
}

secondGreet("Alonzo");

secondGreet("Alan");

// Pure: Expected output is output. Every time you call with the same argument, you will get the same result. 