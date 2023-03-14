const name = "keshav"
const repoCount = 20

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation

const gameName = new String('keshav-jha-com')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "  keshav "
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://keshav.com/keshav%20jha"

console.log(url.replace('%20', '-'))
console.log(url.includes('kumar'))

console.log(gameName.split('-'));

