// Example 
// iterative 
function iterativeFactorial(n) {
  let product = 1;
  while (n > 0) {
    product *= n;
    n--;
  }
  console.log(product);
}

iterativeFactorial(4)

// declaring a function and passing in an argument 
// assigning 1 to a variable 
// while argument is more than 0 
// product * n 
// then product - 1 
// return product 

// calling the function and passing in 3 as an argument 

// n = 4 and product = 1 
// product * n = 4 
// n - 1 = 3 

// 4 * 3 = 12 
// n - 1 = 2 

// 12 * 2 = 24 
// n - 1 = 1 

// 1 * 24 = 24 

// Recursive 
function recursiveFactorial(n) {
  if (n === 0) return 1;
  console.log(n * recursiveFactorial(n - 1));
} 

recursiveFactorial(3)

// declaring a function and passing in an argument 
// if statement: if value of n (passed in argument) is less than 0, return 1 
// the return the value of n * the return value of n - 1

// calling the function 

// ------- Exercise -------------

// 1.) Iterative fibonacci

// Each Fibonacci number is defined as the sum of the previous two Fibonacci numbers, so fibonacci(n) = fibonacci(n-1) + fibonacci(n-2).
// By convention, the first two numbers are fixed: fibonacci(0) = 0 and fibonacci(1) = 1.

function iterativeFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let previous = 0;
  let current = 1;
  for (let i = n; i > 1; i--) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}

iterativeFibonacci(2) // should return 1

iterativeFibonacci(6) // should return 8

iterativeFibonacci(10) // should return 55

iterativeFibonacci(20) // should return 6765


// 2.) Recursive fibonnaci
function recursiveFibonacci(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  return recursiveFibonacci(n -2) + recursiveFibonacci(n-1);
} // recursive as we're calling the function inside the function

recursiveFibonacci(2) //should return 1

recursiveFibonacci(6) //should return 8

recursiveFibonacci(10) //should return 55

recursiveFibonacci(20) //should return 6765