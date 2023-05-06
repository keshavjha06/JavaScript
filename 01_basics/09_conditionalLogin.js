// Allow user to access course if he is:
// logged in from email 
// logged in from Google 
// logged in from Facebook

let email = true;
let facebook = false;
let google = true;

if (email || facebook || google) {
    console.log("Login success");
}
