import { action, makeObservable, observable } from 'mobx';
import { ITodoStore, ITask } from './interfaces/interfaces';


class ToDoStore implements ITodoStore {
  tasks: ITask[] = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      toggleStatusByIdTask: action,
      removeTask: action,
      removeAllTasks: action,
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

  getTask(id:string){
    const task = this.tasks.filter(task => task.id === id)
    return task[0]
  }
}

export const toDoStore = new ToDoStore();
