class toDoManager {
    constructor() {
        this.projects = [
            {
                name: "project_1",
                tasks:   
                [
                    {
                    title: "task_1",
                    startDate: "startDate_1",
                    dueDate: "dueDate_1",
                    status: "Incomplete",
                    },
                    {
                    title: "task_2",
                    startDate: "startDate_2",
                    dueDate: "dueDate_2",
                    status: "Incomplete",
                    },
                    {
                    title: "task_3",
                    startDate: "startDate_3",
                    dueDate: "dueDate_3",
                    status: "Incomplete",
                    },
                    {
                    title: "task_4",
                    startDate: "startDate_4",
                    dueDate: "dueDate_4",
                    status: "Incomplete",
                    },            
                    {
                    title: "task_5",
                    startDate: "startDate_5",
                    dueDate: "dueDate_5",
                    status: "Incomplete",
                    }
                ]          
            },
            {
                name: "project_2",
                tasks:   
                [
                    {
                    title: "task_1b",
                    startDate: "startDate_1",
                    dueDate: "dueDate_1",
                    status: "Incomplete",
                    },
                    {
                    title: "task_2b",
                    startDate: "startDate_2",
                    dueDate: "dueDate_2",
                    status: "Incomplete",
                    },
                    {
                    title: "task_3b",
                    startDate: "startDate_3",
                    dueDate: "dueDate_3",
                    status: "Incomplete",
                    },
                    {
                    title: "task_4b",
                    startDate: "startDate_4",
                    dueDate: "dueDate_4",
                    status: "Incomplete",
                    },            
                    {
                    title: "task_5b",
                    startDate: "startDate_5",
                    dueDate: "dueDate_5",
                    status: "Incomplete",
                    }
                ]          
            },
        ];
    }

    addProject(project) {
        this.projects.push(project);
    }

    getProjects() {
        return this.projects;
    }

    addTask(task, index) {
        console.log(`before`);
        console.log(this.projects);
        this.projects[index].tasks.push(task);
        console.log(`after`);
        console.log(this.projects);
    }

}

export {toDoManager, }