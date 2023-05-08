/* function init() {
    let firstName = "keshav"
    console.log("I am init");
    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName
}

let value = init();

value() */

function doAddition(x) {
    return function (y) {
        return x + y;
    }

}

let add5 = doAddition(4)
console.log(add5(5))
//doAddition() holds the reference of function(add5) and then add5() will be executing including the reference

// Also it can be written as

console.log(doAddition(5)(5));

// doAddition()()() -  curring

// even one reference of function is alive, it will not goes out of memory

//redux uses closure
