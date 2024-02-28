
const fruits = ["apple", "banana","kiwi"];

const indexOfBanana = fruits.findIndex(fruit => fruit.startsWith('b'));

console.log(indexOfBanana) // Output: 1

const indexOfKiwi = fruits.findIndex(fruit => fruit == 'kiwi');

console.log("\n Index of kiwi: " + indexOfKiwi) // output: 2 