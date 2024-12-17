class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [
            {
                title: "task_1",
                startDate: "startDate_1",
                dueDate: "dueDate_1",
                isDone: false,
            },
            {
                title: "task_2",
                startDate: "startDate_2",
                dueDate: "dueDate_2",
                isDone: false,
            },
            {
                title: "task_3",
                startDate: "startDate_3",
                dueDate: "dueDate_3",
                isDone: false,
            },
            {
                title: "task_4",
                startDate: "startDate_4",
                dueDate: "dueDate_4",
                isDone: false,
            },            {
                title: "task_5",
                startDate: "startDate_5",
                dueDate: "dueDate_5",
                isDone: false,
            }
        ];
    }
    
    addTask(task) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }

}

export {Project, }