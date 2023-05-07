import { ITaskForm } from 'features/addTasks/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces';


export interface ITodoService {
    addTask: (task: ITaskForm) => Promise<void>;
    switchIsDoneTask:(idTask: string) => Promise<void>
    deleteTask:(idTask: string) => Promise<void>
    deleteAllTasks:() => Promise<void>
}
