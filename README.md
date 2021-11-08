
# Functional JavaScript First Steps - Frontend Masters 

[Course](https://frontendmasters.com/courses/functional-first-steps/)
[Course notes](https://observablehq.com/@anjana/functional-javascript-first-steps)


- [What is functional programming?](#what-is-functional-programming)
- [Pure functions](#pure-functions)
- [Side effects](#side-effects)
- [Pure vs Impure functions](#pure-vs-impure-functions)
- [Why functional programming?](#why-functional-programming)
- [Why functional JavaScript?](#why-functional-javascript)


# What is functional programming?

  * A coding style supported by some languages 
  * JavaScript is not usually described as a functional language, but is a good way to learn functional programming 
  * A programming paradigm/mindset 
  * Other examples of programming paradigms:
      Imperative (understanding the world of computing as a series of commands)
      Object-Oriented (sub paradigm of imperative mindset)
      Declarative (Instead of telling the computer this is what I want you to do, declare this is what I would like, and we let the program figure out how to do the computation)


## Pure functions

  * only input in 
  * only output out 
  * Just needs it's input, and just returns it's output value. 
  * Pure functions are functions that don't have any side effects. 
  * Communication with the outside world is called a side effect. Not allowed in a pure function as it's a function that doesn't have any side effects.

> Think of a pure function as a black box. You have some input that comes in, and once the function has done it's computation you get an output. 


### Side effects 

  * Communication with the outside world is called a side effect 
  * A function that reads things from the outside world to do the computation (eg: what time is it)
  The function might send something to the outside world other than it's return value, (console.log, turn on a light, update a profile picture)


### Pure vs Impure functions

- pureVsImpureFunctions.js

Pure functions are deterministic; output is determined by it's input. You will always get the same result when you call the function with the same arguement. 

In functional programming we are passing in everything we need to work with as an argument to the function. Sometimes it's more useful to use gloablly defined functions from within other functions.

In that case, whether the function that calls another function is pure will depend on the purity of the function it's calling. 

If we know the inner function is pure and delegating computation to it, that doesn't mean it's impure. 

If a pure function is not allowed to do anything but return it's input it doesn't really do anything. 
How do we do anything with pure functions/in functional programming? How do you be productive without doing side effects? 

You don't. 

When we're doing functional programming we are concerned with the computational aspect of our program. 
Anything going on inside the program (logic, computations, manipulations of data) all of that becomes easier to deal with because it's more predictable and safer to handle. 
All of the impure side effects we can force out to the outer edges of our application. Everything inside the program is deterministic. 


## Why functional programming? 

  * More predictable, safer 
  * Easier to test/debug
  * Makes our lives easier
  * You can do everything with functions

  > Instead of thinking how should my program run, think: what should my program take in, and what should it return out? 


### Why functional JavaScript? 

  * Easier to work with/write than Object-Oriented 
  * Established community & tools



## Recursion 

Iteration: imperative, looping, stateful

Recursion: functional, self-referential, stateless 

> 2 ways of thinking about how to get the computer to do the same operation lots of different times. 

In the iteration: we think about the repetition in terms of loops (for, while) - usually changing a variable eg: counter
Value changing over time, stateful. 

In the recursive: instead of using for/while, using self reference. A function calling itself from within itself. 
More functional way.
To each call of the function, all I care about is the input coming in, and the output going out. We're not changing the values over time, we're getting rid of the state: stateless. 

Iteration isn't functional, use recursion instead. 


## Recursion performance and proper tail calls 

There is a performance difference between iterative and recursive functions. 

The recursive functions are calculating over again and again, and using memory. 

The recursive functions can call themselves multiple times. Multiple times that we're making the same call with the same argument. 

2 problems: can have double recursive call (doing work multiple times.) One solution could be memoization (cacheing the results of the functions), when you call the first time you don't need to repeat the computation because the value from the first time it is called is stored. 

https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19

The call stack: a new frame gets added each time the function is called, and the computer has a finite amount of memory. Recursion can go on potentiall infinitely in a finite resource environment. We keep adding frames to the stack and we can run out of room (call stack size exceeded). Potential solution: tail call optimization - this is a feature of some runtimes where it can perform an optimization on the recursive code if it is written in a particular way. 