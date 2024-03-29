const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) - push merges one array to another

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); concat combines two arrays and give one combined array

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros); spread operator uses ...

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Keshav")) //false
console.log(Array.from("Keshav")) //makes array ['K' , 'e', 's', 'h', 'a', 'v']
console.log(Array.from({ name: "keshav" })) // interesting - gives empty array (need to give keys or values to form array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100 , 200 , 300]