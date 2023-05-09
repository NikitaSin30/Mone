import { makeAutoObservable } from 'mobx';
import { ITodoStore, ITaskWithID } from './interfaces';




class ToDoStore implements ITodoStore {
    tasks: ITaskWithID[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTask(task: ITaskWithID) {
        this.tasks.push(task);
    }

    deleteTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    
    deleteAllTasks() {
        this.tasks = [];
    }

    switchIsDoneTask(id: string) {
        this.tasks.map((task) => {
            if (task.id === id) task.isDone = !task.isDone;

        });
    }

    setTasksFromdDB(task:ITaskWithID[]) {

        this.tasks = task;
    }
}

export const toDoStore = new ToDoStore();
