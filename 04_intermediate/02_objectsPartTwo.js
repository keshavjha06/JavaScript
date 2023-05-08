let User = {
    name: "",
    getUserName: function () {
        console.log(`User name is : ${this.name}`);
    }

}

let keshav = Object.create(User)
console.log(keshav);
keshav.name = "Keshav Jha"
keshav.getUserName();


let sam = Object.create(User, {
    name: { value: "sammy" },
    courseCount: { value: 3 },
})

sam.getUserName()