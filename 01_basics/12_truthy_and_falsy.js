/* falsy
false , 0 , -0,
BigInt 0n,
"",
undefined
null
''
NaN */

/* Truthy 
"0" , 'false' , " " , [] , {} , function(){}
*/

let user = "2";

// === for strict check,checks type and value
if (2 === user) {
    console.log("condition is true");
}

// console.log("2" + "2");

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15
val1 = undefined ?? 10 ?? 15 // 10
console.log(val1);

// Ternary operator:
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");