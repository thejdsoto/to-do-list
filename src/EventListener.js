import { Task } from "./Task.js";
import { Project } from "./Project.js";
import { TodoManager } from "./TodoManager.js";
import { DOMController } from "./DOMController.js";

class EventListener {
    static lastIndex;

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
                EventListener.getProjectIndex();
                EventListener.deleteTask(manager);
            });
        });
    }

    static submitProject(manager){
        const submitProjectBtn = document.querySelector(".submit-project");

        submitProjectBtn.addEventListener("click", (e) => {
            let name = document.querySelector(".name-input");
            let project = new Project(name.value);

            manager.addProject(project);   
            DOMController.clearNav();
            DOMController.clearForm();
            DOMController.renderProjects(manager);
            EventListener.getProjectIndex();
            EventListener.displayTasks(manager);
            e.preventDefault();
        });

    }

    static submitTask(manager) {
        const submitTaskBtn = document.querySelector(".submit-task");
        
        submitTaskBtn.addEventListener("click", () => {
            EventListener.getProjectIndex();
            let index = EventListener.lastIndex;
            let title = document.querySelector(".title-input");
            let dateStart = document.querySelector(".date-start-input");
            let dateDue = document.querySelector(".date-due-input");
            let task = new Task(title.value, dateStart.value, dateDue.value, "Incomplete");

            manager.addTask(task, index);
            DOMController.clearTable();
            DOMController.renderTasks(index, manager);
        });
    }

    static deleteTask(manager) {
        const deleteTaskBtn = document.querySelectorAll("button.delete");

        deleteTaskBtn.forEach((e) => {
            e.addEventListener("click", () => {
                EventListener.getProjectIndex();
                let projIndex = e.dataset.pidx;
                let taskIndex = e.dataset.tidx;

                manager.deleteTask(projIndex, taskIndex);
                DOMController.clearTable();
                DOMController.renderTasks(projIndex, manager);
                EventListener.deleteTask(manager);
            });
        })
    }
    
    static getProjectIndex() {
        const projectList = document.querySelectorAll("main .side nav ul li button");

        projectList.forEach((e) => {
            e.addEventListener("click", () => {
                EventListener.lastIndex = parseInt(e.dataset.index);
            });
        });
    }
}

export {EventListener, }
