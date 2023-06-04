// undefined and not defined

let a = 10;

function b() {
    let x = 10;
}

// console.log(x); x is not defined
// console.log(window.a); // 10 , window is not defined in local
// console.log(a); // 10
// console.log(this.a); // 10 , undefined in local

// all the outputs are in browser and not in local

/* Lexical environment */
function code() {
    var b = 10;
    chai()
    function chai() {
        // console.log(b);
    }
}
code()
console.log(b);

/* let and const */
// illegal shadowing
let myVar = 20
{
    var myVar2 = 20; // illegal shadowing
}

var myVa5 = 20
{
    let myVar6 = 20; // legal shadowing
}

let myVar3 = 20
{
    let myVar4 = 20; // legal shadowing,same for const
}

// Closure example
function outer() {
    function inner() {
        console.log(a)
    }
    let a = 10;
    return inner();
}
outer()

// encapsulation
function Counter() {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}
// console.log(count); -  count is not defined
var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

// Function Statement aka function Declaration
function a() {
    console.log("a is called");
}
// a()

// Function Expression
// b() // b is not defined
let b = function () {
    console.log("b is called");
}
a()
b()

// Anonumous Function
//function () { // Error - Function statement requires a name

//}

// Named Function Expression
var b = function xyz() {
    console.log("b is called");
}
xyz() // Error - xyz is not defined

// First  Class Funtions / First Class Citizens - passing another function inside a function
// The ability to use functions as values and can be passed as arguments to another functions and can be returned from the function

let b = function (param1) {
    return function xyz() {

    }
}

console.log(b())

// Callkback Function - The function which you pass into another function is called as callback function

// example

setTimeout(function () {
    console.log("timer");
}, 1000)

function x(y) {
    console.log("x");
    y();
}

x(function y() {
    console.log("y");

})

// x
// y
// timer

// Event Loop:

console.log("Start");

document.getElementById("btn").addEventListener("click", function cb() {
    console.log("callback");
})

console.log("End");

// Trust Issues with setTimeout()

console.log("start")

setTimeout(function cb() {
    console.log("callback");
}, 0) // eventhough it is 0 millisecond , it will register callback in webenvironment , once call stack is empty , the callback function gets executed

console.log("End")

// start
// End
// callback

// Higher order function

const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output;
}

console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i])
    }
    return output;
}

console.log(calculateCircumference(radius));


// functional programming

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));

// map() , filter() , reduce():

const arr = [5, 1, 3, 2, 6]

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2);
}

const output = arr.map(double)
const outputTriple = arr.map(triple)
const outputBinary = arr.map(binary)
console.log(output);
console.log(outputTriple);
console.log(outputBinary);

const output1 = arr.map((x) => x.toString(2)); // to transform a number array to binary array

// filter

const res = arr.filter((x) => x > 4)
console.log(res);

// reduce

// sum or max no inside array

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]

    }
    return sum;
}

console.log(findSum(arr));

const output2 = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0)
console.log(output2);

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }


    }
    return max;
}

console.log(findMax(arr));

const output3 = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0)

console.log(output3);

// callback hell or pyramid of doom
// const cart = ["shoes", "pants", "kurta"]

api.createOrder(cart, function () {
    api.proceedPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet()
        }
        )
    })
})

// Inversion of control

// Promises

const cart = ["shoes", "pants", "kurta"]

createOrder(cart, function (orderId) {
    proceedToPayment(orderId);
})
// better solution

const promise = createOrder(cart);

promise.then(function (orderId) {
    proceedToPayment(orderId);
})

// another way to write - Promise Chaining 

createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(orderId)
    })
    .then(function (paymentInfo) {
        return updateWalletBalance(orderId)
    })

const GITHUB_API = "https://api.github.com/users/keshav"

const user = fetch(GITHUB_API)

console.log(user);

// Initially the promiseState will be in pending and promiseResult will be undefined
// after sometime , the promiseState will be fulfilled and the proimseResult will be the data . The other state is rejected

// create a Promise:

const amazonCart = ["shoes", "pants", "kurta"]

createOrder(amazonCart) //orderId
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function () {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        console.log("I will be definitely be called");
    })

// Producer
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        //validateCart
        //createOrder
        //orderId
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid")
            reject()
        }
        //logic for createOrder
        const orderId = "12345"
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000)
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    ///
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful")
    })
}

function validateCart(cart) {
    // return true;
    return true; // false for reject
}







