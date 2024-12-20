import { DOMController } from "./DOMController.js";
import { EventListener } from "./EventListener.js";
import { TodoManager } from "./ToDoManager.js";
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
