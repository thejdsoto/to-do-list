import { DOMController } from "./DOMController.js";
import { EventListener } from "./EventListener.js";
import { toDoManager } from "./toDoManager.js";
import { Project } from "./Project.js";
import "./style.css";

console.log("Webpack is working!");
let manager = new toDoManager();
let project = new Project("project_test");
// let todo = new toDoManager();

// DOMController.displayProjects(todo.getProject());

// DOM CONTROLLERS
DOMController.renderProjects(manager);

// EventListener.showAddProjectDialog();

// EVENT LISTENERS
EventListener.displayTasks(manager);
EventListener.addProjectDialog();
EventListener.submitProject(manager);
EventListener.addTaskDialog();
EventListener.submitTask(manager);


// EventListener.closeAddProjectDialog();
// EventListener.closeAddTaskDialog();
// EventListener.submitProject(todo);

// Things to do:

// 1. finish code for displaying tasks when clicking the projects in the side nav - ok
// 2. add project functionality - ok
// 3. add task functionality
// 4. Delete task functionality
