import { ITask } from 'features/addTasks/service/interfaces';


export interface ITaskWithID extends ITask {
  id:string
}

export interface ITodoStore {
  tasks: ITaskWithID[];
  addTask: (task: ITaskWithID) => void;
  deleteTask: (id: string) => void;
  deleteAllTasks: () => void;
  setTasksFromdDB: (tasks: ITaskWithID[]) => void;
  switchIsDoneTask:(id:string) => void
}
