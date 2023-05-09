const user = {
    username: "keshav",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

/* user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

function chai() {
    let username = "keshav"
    console.log(this.username);
}

chai()

const chai = function () {
    let username = "keshav"
    console.log(this.username);
} */

// this keyword with variable(ex: this.username) used inside a function will give undefined

const chai = () => {  // arrow function
    let username = "keshav"
    console.log(this);
}
// chai()

// using this inside function will give global values but this used with arrow function will give {} empty set



/* const addTwo = (num1, num2) => {
    return num1 + num2
} */

// Explicit return

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) - Implicit return

// ** when used curly braces , return should be used , but with parenthesis() no need to use return

const addTwo = (num1, num2) => ({ username: "keshav" })

// To return an object , you need to wrap in parenthesis
console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {} , {} => {} , {} => () These fucntions will be used)