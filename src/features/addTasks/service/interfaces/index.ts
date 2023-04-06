import { ITaskForm } from 'features/addTasks/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces';


export interface ITodoService {
    onCheckUniqueTask: (newTask: string) => boolean;
    addTask: (task: ITaskForm, includeModalError: () => void) => Promise<void>;
}
