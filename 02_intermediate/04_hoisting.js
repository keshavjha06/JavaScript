// function declarations are scanned and made available - Hoisting . But not arrow function ,arrow function will behave like variable . It will throw error like xyz() is not a function / undefined
// variable declarations are scanned and made undefined

tipper("80")

function tipper(a) {
    let bill = parseInt(a);
    console.log(bill + 5);
}


let bigTipper = function (a) {
    let bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200")

// console.log(name) - undefined
// let name = "hitesh";

let name = "Keshav";
console.log(name)

function sayName() {
    let name = "Mr. K"
    console.log(name)
}

sayName();

console.log(name);

var x = 1
a()
b()
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}


