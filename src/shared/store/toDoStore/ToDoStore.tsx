import { makeAutoObservable } from 'mobx';
import { ITodoStore, ITask } from './interfaces';




class ToDoStore implements ITodoStore {
    public tasks: ITask[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public addTask(task: ITask) {
        this.tasks.push(task);
    }

    public deleteTask(idTask: string) {
        this.tasks = this.tasks.filter((task) => task.id !== idTask);
    }
    public deleteAllTasks() {
        this.tasks = [];
    }

    public switchIsDoneTask(idTask: string) {
        this.tasks.map((task) => {
            if (task.id === idTask) task.isDone = !task.isDone;

            return task;
        });
    }

    public updateTask(idTask:string): void {
        this.tasks.map((task) => {
            if (task.id === idTask) task.isDone = !task.isDone;

            return task;
        });
    }

    getTask(idTask:string) {
        const task : ITask | undefined = this.tasks.find(task => task.id === idTask);

        if (!task) {
            throw new Error('Произошла ошибка');
        }

        return task;

    }

    setTasksFromdDB(tasks:ITask[]) {
        this.tasks = tasks;
    }
}

export const toDoStore = new ToDoStore();
