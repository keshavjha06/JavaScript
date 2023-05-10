const courses = [
    {
        name: "Complete ReactJs Course",
        price: "2.3"
    },
    {
        name: "Complete Mern Course",
        price: "3.2"
    },
    {
        name: "Complete Angular Course",
        price: "2.7"
    },
    {
        name: "Complete Vue Course",
        price: "2.1"
    },
    {
        name: "Django Vue Course",
        price: "4.1"
    }
]

/* <li class="list-group-item">Complete Vue Course
<span class="float-right">$ 2.1</span>
</li> */

function generateList() {
    const ul = document.querySelector(".list-group")
    ul.innerHTML = "";
    courses.forEach(course => {

        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")
        const price = document.createTextNode("$ " + course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)

    })
}

// generateList() can be written as 

window.addEventListener("load", generateList)

const button = document.querySelector(".sort-btn")
const button2 = document.querySelector(".sort-btn2")

button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price)
    generateList()
})

button2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price)
    generateList()
})