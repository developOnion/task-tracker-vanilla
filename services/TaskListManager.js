export function getTaskListFromLocalStorage() {
    if (localStorage.getItem("taskList")) {
        const storedList = JSON.parse(localStorage.getItem("taskList"));
        window.app.taskList.list = storedList;
    }
}

export function saveTaskListToLocalStorage() {
    localStorage.setItem("taskList", JSON.stringify(window.app.taskList.list));
}

export function addTask(taskText) {
    const newTask = {
        text: taskText,
        isCompleted: false,
    };
    window.app.taskList.list = [...window.app.taskList.list, newTask];
    saveTaskListToLocalStorage();
}

export function toggleTaskCompletion(index) {
    const updatedList = window.app.taskList.list.map((task, i) => {
        if (i === index) {
            return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
    });
    window.app.taskList.list = updatedList;
    saveTaskListToLocalStorage();
}

export function removeTask(index) {
    const updatedList = window.app.taskList.list.filter((_, i) => {
        return i !== index;
    });
    window.app.taskList.list = updatedList;
    saveTaskListToLocalStorage();
}
