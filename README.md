# Functional Programming

This project demonstrates various functional programming concepts in JavaScript, including currying, function composition, and the use of higher-order functions like `pipe` and `reduce`. The project includes several modules that showcase these concepts through practical examples.


## Usage

You can run the examples provided in the project by executing the JavaScript files using Node.js.


## Modules

### `arity.js`

Demonstrates the use of partial application and function composition to update user data. It uses a `pipe` function to chain operations like getting a user, cloning the user object, and updating the user's age.

### `clone-obj.js`

Shows different methods to clone objects in JavaScript, avoiding shared state and mutation.

### `currying.js`

Illustrates the concept of currying, where a function is transformed into a sequence of functions, each with a single argument. It also demonstrates function composition using the `pipe` function.

### `function-composition.js`

Explains function composition by processing a string through a series of transformations, such as trimming, removing punctuation, capitalizing, and filtering out articles.

### `reduce-examples.js`

Provides examples of using the `reduce` function to perform operations like summing numbers, flattening arrays, counting occurrences, and grouping objects by a property.

## Key Concepts

- **Currying**: Transforming a function with multiple arguments into a sequence of functions, each with a single argument.
- **Function Composition**: Combining multiple functions to create a new function, where the output of one function becomes the input of the next.
- **Higher-Order Functions**: Functions that take other functions as arguments or return them as results, such as `pipe` and `reduce`.
