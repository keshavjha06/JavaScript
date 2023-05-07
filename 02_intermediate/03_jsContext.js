// sayHello(); - global context of js

// The function is registered & wrapped up and put inside a global context

/* function sayHello() {
     console.log("Hello");
 } */

if ("2" === 2) {
    console.log("This is true");
}

let myName = "keshav";
if (myName === window.myName) {
    console.log("This is again a true statement");
}

//execution context will execute the whole function
// window object is tied with the browser

