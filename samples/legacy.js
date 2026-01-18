function TaskManager() {
    this.taskList = [];
    this.taskIndex = 0;
}

TaskManager.prototype.addTask = function (title) {
    this.taskList.push({ id: this.taskIndex, title: title, done: false });
    this.taskIndex += 1;
};

TaskManager.prototype.completeTask = function (id) {
    for (var i = 0; i < this.taskList.length; i++) {
        if (this.taskList[i].id === id) {
            this.taskList[i].done = true;
        }
    }
};

var managerInstance = new TaskManager();
managerInstance.addTask('Learn JS');
managerInstance.addTask('Learn TS');
managerInstance.completeTask(0);

console.log(managerInstance.taskList);