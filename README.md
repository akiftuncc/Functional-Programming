# Functional Programming

This project demonstrates various functional programming concepts in JavaScript, including currying, function composition, and the use of higher-order functions like `pipe` and `reduce`. The project includes several modules that showcase these concepts through practical examples.


## Usage

First, install the project dependencies by running the following command in your terminal:
npm install

## Modules

### arity.js
Demonstrates the use of partial application and function composition to update user data. It uses a `pipe` function to chain operations like getting a user, cloning the user object, and updating the user's age.

### clone-obj.js
Shows different methods to clone objects in JavaScript, avoiding shared state and mutation.

### currying.js
Illustrates the concept of currying, where a function is transformed into a sequence of functions, each with a single argument. It also demonstrates function composition using the `pipe` function.

### function-composition.js
Explains function composition by processing a string through a series of transformations, such as trimming, removing punctuation, capitalizing, and filtering out articles.

### reduce-examples.js
Provides examples of using the `reduce` function to perform operations like summing numbers, flattening arrays, counting occurrences, and grouping objects by a property.

### Ramda
[Ramda](https://ramdajs.com/) is a practical functional programming library for JavaScript. It provides a wide range of utilities for working with functions and data in a functional style.

### Lodash
[Lodash](https://lodash.com/) is a modern JavaScript utility library that provides modular methods for common programming tasks. It helps in simplifying tasks like manipulating arrays, objects, and functions. 


## Key Concepts

- **Currying**: Transforming a function with multiple arguments into a sequence of functions, each with a single argument.
- **Function Composition**: Combining multiple functions to create a new function, where the output of one function becomes the input of the next.
- **Higher-Order Functions**: Functions that take other functions as arguments or return them as results, such as `pipe` and `reduce`.
