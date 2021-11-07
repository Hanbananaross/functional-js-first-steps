function sum(numbers) { // declaring a function and passing in an argument
  if (numbers.length === 1){ 
    //base case - the base case is non recursive, stops the loop. 
    return numbers[0];
  } else {
    //recursive case
    return numbers[0] + sum(numbers.slice(1)); // recursive because it makes a call to itself 
  }
}

// if statement: if the length of numbers (the argument) is less than 1, return the first item of the array of numbers 
// else, return the first item of the array plus the return value of the sum()

sum([0,1,2,3,4]);

// Make sure that there are 2 parts to the function. 
// The recursive case and the base case - the base case is non recursive, stops the loop. 