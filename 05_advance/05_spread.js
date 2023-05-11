/* let returnedValue = Math.max(2, 5, 7, 4, 2, 8)
console.log(returnedValue);

var myObj = {}

Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 })
console.log(myObj); */

function sumOne(a, b) {
    return a + b;
}

let myA = [5, 4] // without changing function accessing values for arrays and objects

console.log(sumOne(...myA)); // spread operator

function sumTwo(...args) { // rest operator
    console.log(args);
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }
    return sum;
}

console.log(sumTwo(2, 3, 1, 5, 7));