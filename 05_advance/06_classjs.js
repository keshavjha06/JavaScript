class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    #courseList = []; // private variables are created using #
    getInfo() {
        return { name: this.name, email: this.email }
    }
    enrollCourse(name) {
        this.#courseList.push(name) // setter , we expects some params
    }
    getCourseList() {
        return this.#courseList; // getter , return the variable and no params usually 
    }
}

module.exports = User;

const rock = new User("rock", "rock@rock.com")
console.log(rock.getCourseList());
rock.enrollCourse("Angular Bootcamp")
console.log(rock.getCourseList());
console.log(rock.courseList);