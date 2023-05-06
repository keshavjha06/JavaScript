function sayMyName() {
    console.log("K");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("V");
}

// sayMyName() - sayMyName - function reference , sayMyName() - function execution

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Keshav"))
// console.log(loginUserMessage()) -  undefined

function calculateCartPrice(val1, val2, ...num1) { //(...num1) - rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]))
