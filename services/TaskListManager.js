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
