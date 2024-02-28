const numbers = [10, 20, 5, 30];

// Find the index of the first element greater than 15
const indexOfGreaterThan = numbers.findIndex(number => number > 1 && number < 10 );

console.log(`the index is ${indexOfGreaterThan} `); // Output: 1
console.log(`The number is ${numbers[indexOfGreaterThan]}`)

