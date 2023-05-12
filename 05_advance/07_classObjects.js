// import User from "./06_classjs.js"

const User = require("./06_classjs.js")

const keshav = new User("keshav", "keshav@gmail.com")

console.log(keshav.getInfo());
keshav.enrollCourse("React Bootcamp")
keshav.enrollCourse("Angular Bootcamp")

console.log(keshav.getCourseList());

let courses = keshav.getCourseList()

courses.forEach(c => console.log(c))