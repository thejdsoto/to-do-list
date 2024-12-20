class TodoManager {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    getProjects() {
        return this.projects;
    }

    addTask(task, index) {
        this.projects[index].tasks.push(task);
    }

    editTask(task, index) {
        // For future improvement
    }

    deleteTask(projIndex, taskIndex) {
        this.projects[projIndex].tasks.splice(taskIndex, 1);
    }
}

export {TodoManager, }