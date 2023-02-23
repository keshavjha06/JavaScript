// Primitive

//7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


const bigNumber = 353535353533525255223n

// Reference (Non primitive)

// Array, Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Keshav",
    age: 25,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof heros);

//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

//Return type of variables in JavaScript
/* Primitive Datatypes
Number => number
String => string
Boolean => boolean
null  => object
undefined => undefined
Symbol => symbol
BigInt => bigint

Non - primitive Datatypes
Arrays => object
Function => function
Object  => object */

// +++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) , Heap (Non - Primitive)

let myYoutubename = "chai aur biscuits"

let anotherName = myYoutubename
anotherName = "chai aur coffee"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "keshav@google.com"

console.log(userOne.email);
console.log(userTwo.email);