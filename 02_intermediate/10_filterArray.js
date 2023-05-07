let testArray = [2, 4, 6, 3, 1, 5, 9, 8]

// console.log(testArray.fill("h", 2));
console.log(testArray.fill("h", 2, 5)); //    [2, 4, 'h', 'h','h', 5, 9, 8] - end range is exclusive
//fill all the values in array , 

const myNumber = [23, 44, 55, 66, 77, 88, 98, 33]

const result = myNumber.filter((num) => num != 55); //( can use < , > , !) 55 will not be there in new array

console.log(result);

let users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

// console.log(users.slice(1, 3)); // [ 'Tim', 'Ton' ]
// console.log(users.slice(1)); // [ 'Tim', 'Ton', 'Sam', 'Sor', 'Sod' ]

users.splice(1, 3, "HI")
users.splice(1, 3, "HI", "BYE") // [ 'Ted', 'HI', 'BYE' ]
console.log(users); // [ 'Ted', 'HI', 'Sor', 'Sod' ] 1 - starting value . 3 - 1, 2, 3 - Three positions will filled by HI

