import { Task } from "./Task.js";
import { Project } from "./Project.js";
// import { toDo } from "./ToDo.js";
import { DOMController } from "./DOMController.js";

class EventListener {
    // static createdProjects = [];
    // static latestIndex;

    // static showAddProjectDialog() {
    //     const dialog = document.querySelector("nav dialog");
    //     const showButton = document.querySelector("button.add-project");
        
    //     showButton.addEventListener("click", () => {
    //         dialog.showModal();
    //     });
    // }

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

    // static closeAddProjectDialog() {
    //     const dialog = document.querySelector("nav dialog");
    //     const closeButton = document.querySelector(".close-add-project");
    //     closeButton.addEventListener("click", () => {
    //         dialog.close();
    //     });
    // }

    // static showTasks(projects) {
    //     const projectList = document.querySelectorAll("main .side nav ul li button");

    //     projectList.forEach((button) => {
    //         if (typeof button.dataset.idx !== undefined) {
    //             button.addEventListener("click", () => {
    //                 DOMController.clearTable();
    //                 DOMController.displayTasks(button, projects.getProject());
    //                 EventListener.latestIndex = button.dataset.idx;
    //                 console.log(EventListener.latestIndex);
    //             }); 
    //         }
    //     });
    // }

    // static submitProject = (todo) => {
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

    static submitTask(project) {
        const submitTaskBtn = document.querySelector(".submit-task");

        submitTaskBtn.addEventListener("click", () => {
            let title = document.querySelector(".title-input");
            let dateStart = document.querySelector(".date-start-input");
            let dateDue = document.querySelector(".date-due-input");

            let task = new Task(title.value, dateStart.value, dateDue.value, false);
            project.addTask(task);
            DOMController.clearTable();
            DOMController.renderTasks(project);
        });
    }
}

export {EventListener, }