import { IResponseTask } from 'interfaces';

export interface ITodoStore {
  tasks: IResponseTask[];
  add: (task: IResponseTask) => void;
  delete: (id: string) => void;
  deleteAll: () => void;
  getTask: (id: string) => IResponseTask | void;
  setTasksFromdDB: (tasks: IResponseTask[]) => void;
  switchIsDone:(id:string) => void
}
