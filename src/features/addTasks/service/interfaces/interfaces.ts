import { ITask } from 'shared/store/toDoStore/interfaces/interfaces';


export interface ITodoService {
  deleteTask: (id: string) => Promise<void>;
  onCheckUniqueTask: (newTask: string) => boolean;
  addTask: (task: string, includeModalError: () => void) => Promise<void>;

}
