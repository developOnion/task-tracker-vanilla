export default class Input extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const template = document.getElementById("task-tracker-input-template");
        const content = template.content.cloneNode(true);
        this.appendChild(content);
    }
}

customElements.define("task-tracker-input", Input);
