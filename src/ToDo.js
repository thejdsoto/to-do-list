class toDo {
    #projects = [
        {
            project: "Adam Project",
            task: "Task_1"
        },
        {
            project: "ZAP AND ZEAL",
            task: "Task_2"
        },
        {
            project: "GLOBE FTK",
            task: "Task_3"
        },
        {
            project: "Lose Turnel-use",
            task: "Task_4"
        },
        {
            project: "Boston",
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