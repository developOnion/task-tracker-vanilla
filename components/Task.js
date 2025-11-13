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
    }
}

customElements.define("task-tracker-task", Task);
