import { Task } from "./Task.js";
import { Project } from "./Project.js";

class EventListener {
    static addTask() {
        const addTaskBTn = document.querySelector("button.add-task");

        addTaskBTn.addEventListener("click", () => {
            console.log("clicked");
            let task1 = new Task("test_desc1", "test_date_start1", "test_date_due1", false);
            let task2 = new Task("test_desc2", "test_date_start2", "test_date_due2", false);
            let project1 = new Project();
            project1.addTask(task1);
            project1.addTask(task2);
            console.log(project1.getTasks());
        });
    }
}

export {EventListener, }