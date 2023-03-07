const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.87833

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString());

// +++++++++++++++ Maths +++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));//5
console.log(Math.round(4.2));//4
console.log(Math.ceil(4.2));//higher value - 5
console.log(Math.floor(4.9));//lower value - 4
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log(Math.random());//values b/w 0-1
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
