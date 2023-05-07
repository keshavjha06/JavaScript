// Array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Superman", "Batman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) - add element at the end of array
// myArr.push(7)
// myArr.pop() - removes end value

// myArr.unshift(9) - add new value at front of array
// myArr.shift() - removes new value at first position

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // -1 -> gives position of array , if there is no element , then it gives -1

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);



