const google = "google"
const fb = null

if (google) {
    console.log("I execute - BLOCK 1");
}

if (!!fb) {  // double shot
    console.log("I execute - BLOCK 2");
}