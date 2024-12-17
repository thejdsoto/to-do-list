import { toDo } from "./ToDo.js";
import { Project } from "./Project.js";

// class DOMController {
//     static displayTasks(button, projects) {
//         const tableBody = document.querySelector(".container table tbody");
//         const tr = document.createElement("tr");
//         const td = document.createElement("td");
//         let index = parseInt(button.dataset.idx);
//         td.innerText = `${projects[index].task}`;
        
//         tr.appendChild(td);
//         tableBody.appendChild(tr);
//     }

//     static displayProjects(projects) {
//         const projectList = document.querySelector("main .side nav ul");

//         projects.forEach((e, idx) => {
//             const li = document.createElement("li");
//             const btn = document.createElement("button");
//             btn.innerHTML = `                            
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
//                 </svg>
//                 ${e.name}
//                 `;
//             btn.setAttribute('data-idx', idx);
//             li.appendChild(btn);
//             projectList.appendChild(li);
//         });
//     }

//     static clearNav() {
//         const ul = document.querySelector("nav ul");

//         ul.innerHTML = '';
//     }
//     static clearTable() {
//         const tbody = document.querySelector("table tbody");

//         tbody.innerHTML = '';
//     }

//     static clearForm() {
//         const form = document.querySelector("form");
//         form.reset();
//     }
// }

export {DOMController, }