import { Task } from "./Task.js";
import { Project } from "./Project.js";
import { DOMController } from "./DOMController.js";

class EventListener {

    static showDialog() {
        const dialog = document.querySelector("dialog");
        const showButton = document.querySelector("dialog + button");
        
        showButton.addEventListener("click", () => {
            dialog.showModal();
        });
    }

    static closeDialog() {
        const dialog = document.querySelector("dialog");
        const closeButton = document.querySelector("dialog button");
        closeButton.addEventListener("click", () => {
            dialog.close();
        });
    }

    static showTasks(projects) {
        const projectList = document.querySelectorAll("main .side nav ul li button");

        projectList.forEach((button) => {
            button.addEventListener("click", () => {
                DOMController.clearTable();
                DOMController.displayTasks(button, projects);
            }); 
        });
    }

    static submitProject(todo) {
        const submitProjectBtn = document.querySelector(".submit-project");

        submitProjectBtn.addEventListener("click", (e) => {
            let name = document.querySelector(".name-input");
            let project = new Project(name.value);

            todo.addProject(project);
            DOMController.clearNav();
            DOMController.clearForm();
            DOMController.displayProjects(todo.getProject());
            EventListener.showTasks(todo.getProject());
            e.preventDefault();
        });
    }

    // static addTask() {
    //     const addTaskBTn = document.querySelector("button.add-task");

    //     addTaskBTn.addEventListener("click", () => {
    //         console.log("clicked");
    //         let task1 = new Task("test_desc1", "test_date_start1", "test_date_due1", false);
    //         let task2 = new Task("test_desc2", "test_date_start2", "test_date_due2", false);
    //         let project1 = new Project();
    //         project1.addTask(task1);
    //         project1.addTask(task2);
    //         console.log(project1.getTasks());
    //     });
    // }
}

export {EventListener, }