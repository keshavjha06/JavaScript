/* const user = ["keshav", 3, "admin"]
let role = user[2]
let name = user[0]

let [name, courseCount, role] = user; 
console.log(role); */

// Destructuring happens for arrays and objects etc , same datatype and names/values on right and left side

const MyUser = {
    name: "keshav",
    courseCount: 5,
    role: "admin"
}

console.log(MyUser.courseCount);

const { name, courseCount, role } = MyUser;
console.log(courseCount);