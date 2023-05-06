// Show user a signout button if he is authenticated,
// otherwise show the user option to Login/signup


let authenticated = true;

if (authenticated) {
    console.log("show signout button");
} else {
    console.log("Show login option")
}

//another way to write if else
authenticated ? console.log("Signout Button") : console.log("LOGIN")
