export interface ITask {
  task: string;
  isDone: boolean;
  id: string;
}

export interface ITodo {
  tasks: ITask[];
  addTask: (task: string, fn:()=>void) => void | Function;
  removeTask: (id: string) => void;
  toggleStatusByIdTask: (id: string) => void;
  removeAllTasks: () => void;
}
