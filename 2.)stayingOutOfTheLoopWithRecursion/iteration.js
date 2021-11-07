function sum(numbers) { // declaring a function and passing in an argument 
  let total = 0; // creating a variable
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

sum([0,1,2,3,4]); 
//calling the function and passing in an array as an argument. 


// for loop, for as long as i is less that the length of numbers, add 1 to i 
// then add numbers to total 

