import { ITaskForm } from 'features/addTasks/interfaces';



export interface ITodoService {
    add: (task: ITaskForm) => Promise<void>;
    switchIsDoneTask:(taskID: string) => Promise<void>
    delete:(taskID: string) => Promise<void>
    deleteAll:() => Promise<void>
}
