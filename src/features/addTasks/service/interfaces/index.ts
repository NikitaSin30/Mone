
import { ITaskForm } from 'features/addTasks/interfaces';



export interface ITask {
  task: string;
  isDone: boolean;
}

export interface ITodoService {
    addTask: (task: ITaskForm) => Promise<void>;
    switchIsDoneTask:(idTask: string) => Promise<void>
    deleteTask:(idTask: string) => Promise<void>
    deleteAllTasks:() => Promise<void>
}
