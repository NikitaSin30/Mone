import { makeAutoObservable } from 'mobx';
import { ITodoStore } from './interfaces';
import { IResponseTask } from 'interfaces';



class ToDoStore implements ITodoStore {
    public tasks: IResponseTask[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public add(task: IResponseTask) {
        this.tasks.push(task);
    }

    public delete(idTask: string) {
        this.tasks = this.tasks.filter((task) => task.id !== idTask);
    }
    public deleteAll() {
        this.tasks = [];
    }

    public switchIsDone(idTask: string) {
        this.tasks.map((task) => {
            if (task.id === idTask) task.isDone = !task.isDone;

            return task;
        });
    }

    getTask(idTask:string) {
        const task : IResponseTask | undefined = this.tasks.find(task => task.id === idTask);

        if (!task) {
            throw new Error('Произошла ошибка');
        }

        return task;

    }

    setTasksFromdDB(tasks:IResponseTask[]) {
        this.tasks = tasks;
    }
}

export const toDoStore = new ToDoStore();
