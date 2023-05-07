// function declarations are scanned and made available
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




