// Imperative

let name = "Alonzo";
let greeting = "Hi";

console.log(`${greeting}, ${name}!`);

greeting = "Howdy!";
console.log(`${greeting}, ${name}!`);

// Not asking about the inputs/outputs 


// Functional 

function greet(secondGreeting, otherName) { // arguments are the input
  return `${secondGreeting}, ${otherName}!`; // the string is the output
}

greet("Hi", "Alonzo");

greet("Howdy", "Alan");