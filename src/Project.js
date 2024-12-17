class Project {
    constructor(name) {
        this.name = name;
    }
    
    #tasks = [];

    addTask(task) {
        this.#tasks.push(task);
    }

    getTasks() {
        return this.#tasks;
    }
}

export {Project, }