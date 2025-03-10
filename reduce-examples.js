const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
// Result: 15

const nestedArrays = [[1, 2], [3, 4], [5]];
const flattened = nestedArrays.reduce((acc, arr) => acc.concat(arr), []);
// Result: [1, 2, 3, 4, 5]


const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
// Result: { apple: 2, banana: 3, orange: 2 }

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
];
const groupedByAge = people.reduce((acc, person) => {
    (acc[person.age] = acc[person.age] || []).push(person);
    return acc;
}, {});
// Result: { 25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }], 30: [{ name: 'Bob', age: 30 }] }

const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
const sentence = words.reduce((acc, word) => acc + ' ' + word);
// Result: " Hello world this is JavaScript"