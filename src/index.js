import { DOMController } from "./DOMController.js";
import { EventListener } from "./EventListener.js";
// import { toDoManager } from "./ToDoManager.js";
import { Project } from "./Project.js";
import "./style.css";

console.log("Webpack is working!");
let project = new Project("project_test");
// let todo = new toDoManager();

// DOMController.displayProjects(todo.getProject());
DOMController.renderTasks(project);
// EventListener.showAddProjectDialog();
EventListener.addTaskDialog();
// EventListener.closeAddProjectDialog();
// EventListener.closeAddTaskDialog();
// EventListener.showTasks(project);
// EventListener.submitProject(todo);
EventListener.submitTask(project);

// Things to do:

// 1. finish code for displaying tasks when clicking the projects in the side nav - ok
// 2. add project functionality - ok
// 3. add task functionality
// 4. Delete task functionality
