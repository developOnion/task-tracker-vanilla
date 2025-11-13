import TaskList from "./services/TaskList.js";

// custom component
import TaskTrackerPage from "./components/TaskTrackerPage.js";
import Task from "./components/Task.js";
import Input from "./components/Input.js";

// global app object
window.app = {};
app.taskList = TaskList;

function main() {
    document.addEventListener("DOMContentLoaded", () => {
        const taskTrackerPageComponent =
            document.createElement("task-tracker-page");
        console.log(taskTrackerPageComponent);
        const main = document.getElementById("main");
        main.appendChild(taskTrackerPageComponent);
    });
}

main();
