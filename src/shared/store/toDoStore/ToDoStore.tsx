import { action, makeObservable, observable } from 'mobx';
import { ITodo, ITask } from './interfaces/interfaces';


class ToDo implements ITodo {
    tasks = [
        {
            task   : '',
            isDone : false,
            id     : '',
        },
    ];
    constructor() {
        this.tasks = [];
        makeObservable(this, {
            tasks                : observable,
            addTask              : action,
            toggleStatusByIdTask : action,
            removeTask           : action,
            removeAllTasks       : action,
        });
    }

    private onCheckUnique(newTask: string): boolean {
        return this.tasks.some(({ task }) => task === newTask);
    }

    private modifyNewtas(task: string) {
        const validaitedTask = task.trim().toLowerCase();
        const newValidaitedTask = validaitedTask[0].toUpperCase() + validaitedTask.slice(1);

        return newValidaitedTask;
    }
    private createNewTask(task: string) : ITask {
        const newTask = {
            task   : task,
            isDone : false,
            id     : task,
        };

        return newTask;
    }

    addTask(task: string, fn: () => void): void | Function {
        const validatedTask = this.modifyNewtas(task);
        const unique = this.onCheckUnique(validatedTask);

        if (unique) return fn();

        const newTask = this.createNewTask(task);

        this.tasks.push(newTask);
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

export const toDoStore = new ToDo();
