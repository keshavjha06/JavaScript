let isEven = (element) => {
    /*    if (element % 2 === 0) {
           return true;
       }
   
       return false
   } */
    return element % 2 === 0;

}

console.log(isEven(2));

let result = [2, 3, 6, 8].every(isEven) //false -  checks for every element in array
console.log(result);

let res = [2, 4, 6, 8].every((e) => (e % 2 === 0))
console.log(res);

//(e) => {e % 2 === 0} - if using {} then you should write return