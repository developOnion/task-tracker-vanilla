import {
    toggleTaskCompletion,
    removeTask,
} from "../services/TaskListManager.js";

export default class Task extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const template = document.getElementById("task-tracker-task-template");
        const content = template.content.cloneNode(true);
        this.appendChild(content);

        const props = JSON.parse(this.dataset.task);
        this.querySelector(".task-item__checkbox").checked = props.isCompleted;
        this.querySelector(".task-item__text").textContent = props.text;

        this.querySelector(".task-item__checkbox").addEventListener(
            "change",
            () => {
                const index = Array.from(this.parentElement.children).indexOf(
                    this
                );
                toggleTaskCompletion(index);
            }
        );
        this.querySelector(".task-item__deleteBtn").addEventListener(
            "click",
            () => {
                const index = Array.from(this.parentElement.children).indexOf(
                    this
                );
                removeTask(index);
            }
        );
    }
}

customElements.define("task-tracker-task", Task);
