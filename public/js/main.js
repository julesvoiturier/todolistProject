//! TASK AND TASK LIST
let taskList = document.querySelector("#taskList")
let task = document.querySelector('.task');

//! NEW TASK INPUT AND NEW TASK BUTTON
let newTaskButton = document.querySelector("#addTaskButton")
let newTaskInput = document.querySelector("#addTaskInput")

//! TASK BUTTONS
let validateButton = document.querySelectorAll(".validate")
let modifyButton = document.querySelectorAll(".modify")
let deleteButton = document.querySelectorAll(".delete")

let newTitleButton = document.querySelector(".modifyButton")
let newTitle = document.querySelector(".modifyInput")

//!SORT BUTTONS
let sortAll = document.querySelector("#sortAll")
let sortPending = document.querySelector("#sortPending")
let sortDone = document.querySelector("#sortDone")
let sortSection = document.querySelector("#sortSection")

sortAll.classList.add("buttonClick")


//! -------------------------------------------------------------------


//! ADD TASK 
newTaskButton.addEventListener("click", () => {
    if (newTaskInput.value) {
        let newTask = task.cloneNode(true);
        taskList.appendChild(newTask);
        newTask.firstElementChild.value = newTaskInput.value 
    }
    newTaskInput.value = ""
})

newTaskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        newTaskButton.click()
    }
})




sortSection.addEventListener("click", (e) => {

    let allTasks = document.querySelectorAll(".task")
    let length = allTasks.length
    console.log(length);

    allTasks.forEach(element => {
        element.classList.add("disappear")
    });

    if (e.target.id == "sortPending") {
        e.target.classList.add("buttonClick")
        e.target.previousElementSibling.classList.remove("buttonClick")
        e.target.nextElementSibling.classList.remove("buttonClick")
        allTasks.forEach(element => {
            if (element.classList.contains("greenBg")) {
            } else {
                element.classList.remove("disappear")
            }
        });

    } else if (e.target.id == "sortDone") {
        e.target.classList.toggle("buttonClick")
        e.target.previousElementSibling.classList.remove("buttonClick")
        e.target.previousElementSibling.previousElementSibling.classList.remove("buttonClick")
        allTasks.forEach(element => {
            if (element.classList.contains("greenBg") && element.classList.contains("disappear")) {
                element.classList.remove("disappear")
            } 
        });

    }  else if (e.target.id == "sortAll") {
        e.target.classList.toggle("buttonClick")
        e.target.nextElementSibling.classList.remove("buttonClick")
        e.target.nextElementSibling.nextElementSibling.classList.remove("buttonClick")
        allTasks.forEach(element => {
            element.classList.remove("disappear")
        });
    }
})


//! TASK BUTTONS EVENTS
taskList.addEventListener("click", (e) => {
    if (e.target.className.includes("validate") && !e.target.nextElementSibling.classList.contains("buttonClick")) {
        e.target.parentElement.parentElement.classList.toggle("greenBg")
        e.target.classList.toggle("buttonClick2")

    } else if (e.target.className.includes("modify") && !e.target.parentElement.parentElement.classList.contains("greenBg")) {
        let toModify = e.target.parentElement.previousElementSibling
        toModify.focus()

        toModify.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault()
                toModify.nextElementSibling.firstElementChild.nextElementSibling.click()
            }
        })

        if (toModify.readOnly) {
            toModify.removeAttribute("readonly")
            e.target.classList.add("buttonClick4")
            toModify.parentElement.classList.add("buttonClick3")
            toModify.classList.add("textModify")

            console.log(toModify);
        } else {
            e.target.classList.remove("buttonClick4")
            toModify.setAttribute("readonly", "readonly")
            toModify.parentElement.classList.remove("buttonClick3")
            toModify.classList.remove("textModify")
        }
        
    } else if (e.target.className.includes("delete")) {
        e.target.parentElement.parentElement.remove()
    } 
})















