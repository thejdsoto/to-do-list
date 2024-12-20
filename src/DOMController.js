import { toDoManager } from "./toDoManager.js";
// import { Project } from "./Project.js";

class DOMController {
    static renderTasks(index, manager) {
        const tableBody = document.querySelector(".container table tbody");
        const project = manager.getProjects();

        project[index].tasks.forEach((e) => {
            const tr = document.createElement("tr");
            const deleteBtn = document.createElement("button");
            const editBtn = document.createElement("button");
            const tdActionBtn = document.createElement("td");

            for (let key in e) {    
                const td = document.createElement("td");
                td.innerText = e[key];  
                tr.appendChild(td);
            }

            deleteBtn.innerText = "Delete";
            editBtn.innerText = "Edit";
            tdActionBtn.appendChild(editBtn);
            tdActionBtn.appendChild(deleteBtn);
            tr.append(tdActionBtn);
            tableBody.appendChild(tr);
        }); 
    }

    static renderProjects(manager) {
        const projectList = document.querySelector("main .side nav ul");
        const projects = manager.getProjects();

        projects.forEach((e, idx) => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            btn.dataset.index = idx;
            btn.innerText = e.name;
            li.appendChild(btn);
            projectList.appendChild(li);
        })

    }

    static clearNav() {
        const ul = document.querySelector("nav ul");

        ul.innerHTML = '';
    }

    static clearTable() {
        const tbody = document.querySelector("table tbody");

        tbody.innerHTML = '';
    }

    static clearForm() {
        const form = document.querySelector("form");
        form.reset();
    }
}

export {DOMController, }