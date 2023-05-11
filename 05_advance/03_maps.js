let myMap = new Map()

myMap.set(1, "Uno")
myMap.set(2, "dos")
myMap.set(3, "Tres")
myMap.set(4, "Cuatro")
myMap.set(5, "Pesto")

console.log(myMap);

/* for (let key of myMap.keys()) {
    console.log(`key is ${key}`);

}

for (let value of myMap.values()) {
    console.log(`value is ${value}`);

} */

for (let [key, value] of myMap) {
    console.log(`key is: ${key} and value is ${value}`);

}

myMap.forEach((v, k) => console.log(`value is ${v} and key is ${k}`))
//for each is designed for values and not index and in maps keys are considered as index . so in forEach loop value will be printed

myMap.delete(2)
console.log(myMap);