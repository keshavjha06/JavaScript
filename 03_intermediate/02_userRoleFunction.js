/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/
// function getUserRole(name , role) 
let getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
        case "subadmin":
            return `${name} is sub-admin with access to create/delete courses`
        case "testprep":
            return `${name} is testprep with access to create/delete tests`
        case "user":
            return `${name} is a user to consume content`

        default:
            return `${name} is a trial user`
    }
}

console.log(getUserRole("keshav", "admin"));

let getRole = getUserRole("sammy", "user")

console.log(getRole);