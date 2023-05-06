// singleton
// object.create

// object literals

const mySym = Symbol("key1") //declare symbol

const jsUser = {
    name: "Keshav",
    "full name": "Keshav Jha",
    [mySym]: "myKey1", //important
    age: 26,
    location: "Hyderabad",
    email: "abcd@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "xyz@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "def@gmail.com" //value does not change after using freeze
console.log(jsUser)

jsUser.greeting = function () {
    console.log("Hello Js User")
}

jsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

