import { Task } from "./Task.js";
import { Project } from "./Project.js";
// import { toDo } from "./ToDo.js";
import { DOMController } from "./DOMController.js";

class EventListener {

    static addProjectDialog() {
        const dialog = document.querySelector("nav dialog");
        const showButton = document.querySelector("button.add-project");
        const closeButton = document.querySelector(".close-add-project");
        
        showButton.addEventListener("click", () => {
            dialog.showModal();
        });

        closeButton.addEventListener("click", () => {
            dialog.close();
        });
    }

    static addTaskDialog() {
        const dialog = document.querySelector(".content-header dialog");
        const showButton = document.querySelector("button.add-task");
        const closeButton = document.querySelector(".close-add-task");
        
        showButton.addEventListener("click", () => {
            dialog.showModal();
        });

        closeButton.addEventListener("click", () => {
            dialog.close();
        });
    }

    static displayTasks(manager) {
        const projectList = document.querySelectorAll("main .side nav ul li button");

        projectList.forEach((btn) => {
            btn.addEventListener("click", () => {
                let btnIndex = parseInt(btn.dataset.index);
                DOMController.clearTable();
                DOMController.renderTasks(btnIndex, manager);       
            });
        });
    }

    // static submitProject(manager){
    //     const submitProjectBtn = document.querySelector(".submit-project");

    //     submitProjectBtn.addEventListener("click", (e) => {
    //         let name = document.querySelector(".name-input");
    //         let project = new Project(name.value);

    //         EventListener.createdProjects.push(project);
    //         todo.addProject(project);   
    //         DOMController.clearNav();
    //         DOMController.clearForm();
    //         DOMController.displayProjects(todo.getProject());
    //         EventListener.showTasks(todo);
    //         e.preventDefault();
    //     });
    // }

    static submitTask(manager, index) {
        const submitTaskBtn = document.querySelector(".submit-task");
        const projectList = document.querySelectorAll("main .side nav ul li button");
        let lastIndex;

        projectList.forEach((e) => {
            e.addEventListener("click", () => {
                lastIndex = parseInt(e.dataset.index);
            });
        });

        submitTaskBtn.addEventListener("click", () => {
            let title = document.querySelector(".title-input");
            let dateStart = document.querySelector(".date-start-input");
            let dateDue = document.querySelector(".date-due-input");

            let task = new Task(title.value, dateStart.value, dateDue.value, "Incomplete");

            manager.addTask(task, lastIndex);
            DOMController.clearTable();
            DOMController.renderTasks(lastIndex, manager);
        });
    }
}

export {EventListener, }