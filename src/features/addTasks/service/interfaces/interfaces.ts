import { ITask } from 'shared/store/toDoStore/interfaces/interfaces';


export interface ITodoService {

    onCheckUniqueTask: (newTask: string) => boolean;
    modifyNewTask: (task: string) => string;
    createNewTask: (validatedTask: string) => ITask;
    addTask: (task: string, includeModalError: () => void) => void;
}
