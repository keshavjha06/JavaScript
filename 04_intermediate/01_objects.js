let User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`);
    }
}

User.prototype.getFirsname = function () {
    console.log(`Your firstname is: ${this.firstName}`);
}

let keshav = new User("keshav", 2)
keshav.getCourseCount()

if (keshav.hasOwnProperty("firstName")) {
    keshav.getFirsname()
}

// console.log(keshav);

let sam = new User("Sam", 1)
sam.getCourseCount()
sam.getFirsname()
// console.log(sam);

/* new keyword invokes constructor and creating unique single instance everytime.Also takes care of this keyword.
regular function call was pointing to empty object in node / global object in browser.So new keyword is necessary 
All JavaScript objects inherit properties and methods from a prototype. */

