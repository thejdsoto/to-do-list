import { Task } from "./Task.js";
import { Project } from "./Project.js";
import { toDo } from "./ToDo.js";
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

    // static showAddTaskDialog() {
    //     const dialog = document.querySelector(".content-header dialog");
    //     const showButton = document.querySelector("button.add-task");
        
    //     showButton.addEventListener("click", () => {
    //         dialog.showModal();
    //     });
    // }

    // static closeAddProjectDialog() {
    //     const dialog = document.querySelector("nav dialog");
    //     const closeButton = document.querySelector(".close-add-project");
    //     closeButton.addEventListener("click", () => {
    //         dialog.close();
    //     });
    // }

    // static closeAddTaskDialog() {
    //     const dialog = document.querySelector(".content-header dialog");
    //     const closeButton = document.querySelector(".close-add-task");
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

    // static submitTask(projects, idx) {
    //     const submitTaskBtn = document.querySelector(".submit-task");

    //     submitTaskBtn.addEventListener("click", () => {
    //         let title = document.querySelector(".title-input");
    //         let dateStart = document.querySelector(".date-start-input");
    //         let dateDue = document.querySelector(".date-due-input");

    //         let task = new Task(title.value, dateStart.value, dateDue.value, false);
    //         EventListener.createdProjects[parseInt(idx)].addTask(task);
    //     });
    // }

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