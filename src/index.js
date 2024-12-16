import { DOMController } from "./DOMController.js";
import { EventListener } from "./EventListener.js";
import "./style.css";

console.log("Webpack is working!");

DOMController.displayProjects();
EventListener.showDialog();
EventListener.closeDialog();

// Things to do:

// (NOTE: Finish comments in style.css first)
// Planned modules:
// - EventListener
// - DOMController
// - Tasks
//     - setTask
//     - getTask
//     - deleteTask
// - Projects
//     - setProject
//     - getProject
//     - deleteProject

// 1. Set EventListeners for nav.
// 2. Set EventListener for Add Task button.
// 3. Create sample data of Tasks and display in DOM.
// 4. Create sample data of Projects and display in DOM.
// 5. Implement Add Task in console only