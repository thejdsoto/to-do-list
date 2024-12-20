import { DOMController } from "./DOMController.js";
import { EventListener } from "./EventListener.js";
import { TodoManager } from "./TodoManager.js";
import "./style.css";

let manager = new TodoManager();

// DOM CONTROLLERS
DOMController.renderProjects(manager);

// EVENT LISTENERS
EventListener.addProjectDialog();
EventListener.addTaskDialog();
EventListener.displayTasks(manager);
EventListener.submitProject(manager);
EventListener.submitTask(manager);
EventListener.deleteTask(manager);
EventListener.getProjectIndex();


// Issues:
// 1. User is able to click add task even if no project is selected (leading to runtime error)
// 2. Need to put hover effects and and when side nav option is selected
// 3. Need to have validation in input of tasks (eg. blank inputs)
// 4. Need to have validation or handling of input of projects (eg. blank inputs)
// 5. Impelement saving inputs to localStorage