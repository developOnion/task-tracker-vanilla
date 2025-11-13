export default class TaskTrackerPage extends HTMLElement {
    #input = {
        taskText: "",
    };

    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        const styles = document.createElement("style");
        this.root.appendChild(styles);

        async function loadCSS() {
            const response = await fetch("/styles.css");
            const css = await response.text();
            console.log("Loaded CSS:", css);
            styles.textContent = css;
        }
        loadCSS();
    }

    connectedCallback() {
        const template = document.getElementById("task-tracker-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        window.addEventListener("tasklistupdate", () => {
            const taskListContainer = this.root.querySelector(
                ".task-tracker__list"
            );
            taskListContainer.innerHTML = "";
            this.render();
        });
        this.render();
    }

    render() {
        const inputComponent = document.createElement("task-tracker-input");
        const taskListContainer = this.root.querySelector(
            ".task-tracker__list"
        );

        taskListContainer.parentElement.insertBefore(
            inputComponent,
            taskListContainer
        );

        if (app.taskList.list.length) {
            app.taskList.list.forEach((task) => {
                const taskComponent =
                    document.createElement("task-tracker-task");
                taskComponent.dataset.task = JSON.stringify(task);
                taskListContainer.appendChild(taskComponent);
            });
        }

        this.setFormBindings(this.root.querySelector("form"));
    }

    setFormBindings(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert(`New task submitted: ${this.#input.taskText}`);
            this.#input.taskText = "";
        });

        this.#input = new Proxy(this.#input, {
            set(target, prop, value) {
                target[prop] = value;
                form.elements[prop].value = value;
                console.log(`Input updated: ${prop} = ${value}`);

                return true;
            },
        });

        this.root
            .querySelector(".task-form__input")
            .addEventListener("change", (event) => {
                this.#input.taskText = event.target.value;
            });
    }
}

customElements.define("task-tracker-page", TaskTrackerPage);
