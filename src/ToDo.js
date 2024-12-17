class toDoManager {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    getProject() {
        return this.projects;
    }

}

export {toDoManager, }