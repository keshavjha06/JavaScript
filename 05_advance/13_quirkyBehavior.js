const student = {
    age: 24,
    name: {
        firstName: "Keshav",
        secondName: "Jha"
    }
}

student.age = 19;
console.log(student);
Object.freeze(student)
student.age = 16;
console.log(student);
student.name.firstName = "Not Keshav"
console.log(student)
Object.freeze(student.name)
student.name.firstName = "Not a Keshav"
console.log(student)

/* Reason behind this behaviour is: Objects are reference type in JS, so student object holds it's own reference while name holds it's own reference.That's the reason why freezing student doesn't freeze name which is a separate object itself. */