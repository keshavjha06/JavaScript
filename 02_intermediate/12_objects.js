// const tinderUser = new Object() - singleton object
const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sammy@gmail.com",
    fullname: {
        userfullname: {
            firstname: "keshav",
            lastname: "jha"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

const users = [
    {
        id: 1,
        email: "keshav@gmail.com"
    },
    {
        id: 1,
        email: "keshav@gmail.com"
    },
    {
        id: 1,
        email: "keshav@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //array inside array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //gives boolean

const course = {
    coursename: "js course",
    price: 999,
    courseAuthor: "Keshav"
}

// course.courseAuthor

const { courseAuthor: author } = course

// console.log(courseAuthor);
console.log(author);

// {
//     "name": "Keshav",
//     "course": "js course",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

