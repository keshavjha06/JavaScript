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
