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

    deleteTask(idTask: string) {
        this.tasks = this.tasks.filter((task) => task.id !== idTask);
    }
    deleteAllTasks() {
        this.tasks = [];
    }

    toggleStatusByIdTask(idTask: string) {
        this.tasks.map((task) => {
            if (task.id === idTask) task.isDone = !task.isDone;

            return task;
        });
    }

    updateTask(idTask:string): void {
        this.tasks.map((task) => {
            if (task.id === idTask) task.isDone = !task.isDone;

            return task;
        });
    }

    getTask(idTask:string) {
        const task : ITask | undefined = this.tasks.find(task => task.id === idTask);

        if (!task) {
            throw new Error();
        }

        return task;

    }

    setTasksFromdDB(tasks:ITask[]) {
        this.tasks = tasks;
    }
}

export const toDoStore = new ToDoStore();
