import { action, configure, makeAutoObservable, makeObservable, observable } from 'mobx';
import { ITodoStore, ITask } from './interfaces/interfaces';



class ToDoStore implements ITodoStore {
  tasks: ITask[] = [];

  constructor() {
    makeAutoObservable(this);
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

  updateTask(id:string): void {
    this.tasks.map((task) => {
      if (task.id === id) task.isDone = !task.isDone;
      return task;
    });
  }

  getTask(id:string){
    const task : ITask[] = this.tasks.filter(task => task.id === id)
    return {...task[0]}
  }
  
  setTasksWithdDB(task:ITask[]) {
    this.tasks = task
  }
}

export const toDoStore = new ToDoStore();
