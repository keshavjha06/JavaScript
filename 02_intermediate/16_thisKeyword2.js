console.log(this); // gives window object

let user = {
    firstName: "Hitesh",
    courseCount: 4,
    getCourseCount: function () {
        console.log("LINE 7", this); // also can use 'user' instead of 'this'
        function sayHello() {
            console.log("Hello");
            console.log("LINE 10", this);
        }
        sayHello();
    },
};

user.getCourseCount();

// For all regular function calls, 'this' points to window object