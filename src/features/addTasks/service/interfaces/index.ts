import { ITaskForm } from 'features/addTasks/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces';


export interface ITodoService {
    checkStoreHasTask: (newTask: string) => void;
    addTask: (task: ITaskForm) => Promise<void>;
}
