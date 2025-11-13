const TaskList = {
    list: [],
};

const proxiedTaskList = new Proxy(TaskList, {
    set(target, prop, value) {
        target[prop] = value;

        if (prop === "list") {
            window.dispatchEvent(new Event("tasklistupdate"));
        }

        return true;
    },
});

export default proxiedTaskList;
