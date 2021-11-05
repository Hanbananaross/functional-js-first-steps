
# Functional JavaScript First Steps - Frontend Masters 

[Course](https://frontendmasters.com/courses/functional-first-steps/)
[Course notes](https://observablehq.com/@anjana/functional-javascript-first-steps)


- [What is functional programming?](##what-is-functional-programming)
- [Pure functions](##pure-functions)
- [Side effects](##side-effects)

## What is functional programming?

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




```
npm run start:ui 
```










