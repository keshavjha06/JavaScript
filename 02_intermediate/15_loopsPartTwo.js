
const myStates = [
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu",
    "Maharashtra",
];

/* let i = 0;

for (; ;) {
    if (i > 3) break;
    console.log(i);
    i++;
} */

myStates.forEach((s) => (console.log(s)));
myStates.forEach(s => console.log(s));

// For of and For in loops

const names = ["youtube", "facebook", "Instagram", "Netflix", "Amazon"]

//for of is for array
for (const n of names) {
    console.log(n);
}

const symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    az: "amazon"
}

// for in is for objects
for (const n in symbols) {
    // console.log(n);
    // console.log(symbols[n]);
    console.log(`Key is ${n} and value is: ${symbols[n]}`);
}
