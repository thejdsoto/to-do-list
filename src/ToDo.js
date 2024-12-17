class toDo {
    #projects = [
        {
            name: "Adam PRoject",
            task: "Task_1"
        },
        {
            name: "ZAP AND ZEAL",
            task: "Task_2"
        },
        {
            name: "GLOBE FTK",
            task: "Task_3"
        },
        {
            name: "Lose Turnel-use",
            task: "Task_4"
        },
        {
            name: "Boston",
            task: "Task_5"
        },
    ];

    addProject(project) {
        this.#projects.push(project);
    }

    getProject() {
        return this.#projects;
    }
}

export {toDo, }