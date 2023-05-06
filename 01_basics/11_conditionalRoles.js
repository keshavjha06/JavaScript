// Create an application with following roles:
// admin - gets full access
// subadmin - gets accesss to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content


let user = "admin";

switch (user) {
    case "admin":
        console.log("gets the full access")
        break;
    case "subadmin":
        console.log("gets the access to create/delete courses")
        break;
    case "testprep":
        console.log("gets the access to create/delete tests")
        break;
    case "user":
        console.log("gets access to consume content")
        break;
    default:
        console.log("Trial user");
        break;
}
