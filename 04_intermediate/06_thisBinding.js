const keshav = {
    firstName: "Keshav",
    lastName: "Jha",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `)

    }
}

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "sub-admin",
    courseCount: 4,

}

// keshav.getInfo()
// dj.getInfo()

let djInfo = keshav.getInfo.bind(dj)
djInfo()

// Also can be written as keshav.getInfo.bind(dj)();

keshav.getInfo.call(dj)

// bind gives the reference back and u have to manually  call that method but call directly calls the method.