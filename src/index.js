import { DOMController } from "./DOMController.js";
import { EventListener } from "./EventListener.js";
import { toDo } from "./ToDo.js";
import "./style.css";

console.log("Webpack is working!");
let todo = new toDo();

DOMController.displayProjects(todo.getProject());
EventListener.showDialog();
EventListener.closeDialog();
EventListener.showTasks(todo.getProject());
EventListener.submitProject(todo);

// Things to do:

// 1. finish code for displaying tasks when clicking the projects in the side nav
// 2. add project functionality
// 3. add task functionality
// 4. Delete task functionality
