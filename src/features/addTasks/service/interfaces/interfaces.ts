import { ITask } from 'shared/store/toDoStore/interfaces/interfaces';


export interface ITodoService {

    onCheckUniqueTask: (newTask: string) => boolean;
    createNewTask: (validatedTask: string,key:string) => ITask;
    addTask: (task: string, includeModalError: () => void) => void;
}
