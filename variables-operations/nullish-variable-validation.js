let x = null;
let z = 10 ; 

let someValue = z ??= x
console.log(someValue)

// works with undefiend too 
let a = undefined;
let b = 44 ; 

let someValue2 = a ??= b
console.log(someValue2)