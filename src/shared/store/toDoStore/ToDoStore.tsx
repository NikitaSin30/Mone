import { action, makeObservable, observable } from 'mobx';
import { ITodo, ITask } from './interfaces';


class ToDoStore implements ITodo {
    tasks:ITask[] = [];

    constructor() {
        makeObservable(this, {
            tasks                : observable,
            addTask              : action,
            toggleStatusByIdTask : action,
            removeTask           : action,
            removeAllTasks       : action,
        });
    }


    addTask(task: ITask) {
        this.tasks.push(task);
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    removeAllTasks() {
        this.tasks = [];
    }

    toggleStatusByIdTask(id: string) {
        this.tasks.map((task) => {
            if (task.id === id) task.isDone = !task.isDone;

            return task;
        });
    }
}

export const toDoStore = new ToDoStore();
