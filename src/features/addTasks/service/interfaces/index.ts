import { ITaskForm } from 'features/addTasks/interfaces';



export interface ITodoService {
    checkStoreHasTask: (newTask: string) => void;
    addTask: (task: ITaskForm) => Promise<void>;
    switchIsDoneTask:(idTask: string) => Promise<void>
    deleteTask:(idTask: string) => Promise<void>
    deleteAllTasks:() => Promise<void>
}
