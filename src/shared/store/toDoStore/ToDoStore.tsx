import { makeAutoObservable } from 'mobx';
import { ITodoStore, ITask } from './interfaces';




class ToDoStore implements ITodoStore {
    tasks: ITask[] = [];

    constructor() {
        makeAutoObservable(this);
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
        });
    }

    updateTask(id:string): void {
        this.tasks.map((task) => {
            if (task.id === id) task.isDone = !task.isDone;

            return task;
        });
    }

    getTask(id:string) {
        const task : ITask | undefined = this.tasks.find(task => task.id === id);

        if (task === undefined) {
            throw new Error();
        }

        return task;

    }

    setTasksWithdDB(task:ITask[]) {
        this.tasks = task;
    }
}

export const toDoStore = new ToDoStore();
