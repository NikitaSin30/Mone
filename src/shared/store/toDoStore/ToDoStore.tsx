import { action, makeObservable, observable } from 'mobx';
import { ITodo, ITask } from './interfaces/interfaces';


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


    addTask(task: ITask): void {
        this.tasks.push(task);
    }

    removeTask(id: string): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    removeAllTasks(): void {
        this.tasks = [];
    }

    toggleStatusByIdTask(id: string): void {
        this.tasks.map((task) => {
            if (task.id === id) task.isDone = !task.isDone;

            return task;
        });
    }
}

export const toDoStore = new ToDoStore();