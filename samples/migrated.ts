interface Task {
    id: number;
    title: string;
    done: boolean;
}

export class TaskManager {
    taskList: Task[];
    taskIndex: number;

    constructor() {
        this.taskList = [];
        this.taskIndex = 0;
    }

    addTask(title: string): void {
        this.taskList.push({ id: this.taskIndex, title: title, done: false });
        this.taskIndex += 1;
    }

    completeTask(id: number): void {
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].id === id) {
                this.taskList[i].done = true;
            }
        }
    }
}

const managerInstance = new TaskManager();
managerInstance.addTask('Learn JS');
managerInstance.addTask('Learn TS');
managerInstance.completeTask(0);

console.log(managerInstance.taskList);