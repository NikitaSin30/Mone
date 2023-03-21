import { ITask } from 'shared/store/toDoStore/interfaces/interfaces';


export interface IServiceTodo {

//   onCheckUniqueTask: (newTask: string) => boolean;
//   modifyNewTask: (task: string) => string;
//   createNewTask: (validatedTask: string) => ITask;
  middlewareAddTask: (task: string, includeModalError: () => void) => void;
}
