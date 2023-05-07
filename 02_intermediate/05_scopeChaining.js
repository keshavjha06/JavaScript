let name = "Keshav"

console.log("Line number 3", name);

function sayName() {
    let name = "Mr. K"
    console.log("Line number 7", name);
    sayNameTwo()

    function sayNameTwo() {
        let name = "Mr. KJ"
        console.log("Line number 12", name)
    }
}



sayName();