import { toDo } from "./ToDo.js";
import { Project } from "./Project.js";
import { Task } from "./Task.js";

class DOMController {
    static displayTasks() {

    }

    static displayProjects() {
        const projectList = document.querySelector("main .side nav ul");
        let todo = new toDo();
        let projects = todo.getProject();

        projects.forEach((e) => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            btn.innerHTML = `                            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
                ${e.project}
                `;
            li.appendChild(btn);
            projectList.appendChild(li);
        });
    }
}

export {DOMController, }