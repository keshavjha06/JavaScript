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

    static login() {    // static methods cannot be inherited
        return "you are logged in"
    }
}

class SubAdmin extends User {
    constructor(name, email) {
        super(name, email) // super keyword can be used to call method/constructor from parent class
    }
    getAdminInfo() {
        return "I am subadmin"
    }
    login() { //if the method name is same in parent & child , then child method will be called
        return "login for admin only"
    }
}

module.exports = User;

const rock = new User("rock", "rock@rock.com")
console.log(rock.getCourseList());
rock.enrollCourse("Angular Bootcamp")
console.log(rock.getCourseList());
console.log(rock.courseList);


const tom = new SubAdmin("tom", "tom@jerry.com")
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());