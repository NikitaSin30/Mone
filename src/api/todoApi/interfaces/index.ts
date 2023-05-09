import { ITaskWithID } from 'shared/store/toDoStore/interfaces';
import { ITask } from 'features/addTasks/service/interfaces';


export interface IResponseAddTask {
    message:string,
    taskWithID:ITaskWithID
}

export interface ITodoApi {
  addTask: (task: ITask, id: string) => Promise<IResponseAddTask>;
  deleteTask:(idTask:string, id:string) => Promise<void>
  deleteAllTasks:(id:string) => Promise<void>
  switchIsDoneTask:(idTask:string, id:string) => Promise<void>
}
