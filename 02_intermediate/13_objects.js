let user = {
    firstName: "Keshav",
    lastName: "Jha",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function () {
        return `${this.firstName} has total of ${this.courseList.length} in his account`;
    },
    getInfo: function () {
        console.table(user); // also we can use this instead of user
    }
}

let courseList = true;
console.log(user.firstName)
console.log(user.getCourseCount())
user.buyCourse("React JS course")
user.buyCourse("Angular course")
console.log(user.getCourseCount())
user.getInfo()

