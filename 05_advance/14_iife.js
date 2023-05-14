/* iife - immediately invoked function expression - The function will immediately execute
To avoid variables from global scope in function , we can create scope in function and we can use iife */

/* function chai() {
    console.log("I am iife without parameter");
}
chai(); It can be also written as*/

(function chai() {
    //named IIFE
    console.log("I am iife without parameter");
})(); // It is necessary to add ; to run anothe function of iife

((name) => {
    //arrow function / unnamed IIFE
    console.log(`I am iife with parameter  ${name}`);
})('Keshav')

// code('Keshav')