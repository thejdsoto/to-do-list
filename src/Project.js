class Project {
    #tasks = [];

    addTask(task) {
        this.#tasks.push(task);
    }

    getTasks() {
        return this.#tasks;
    }
}

export {Project, }