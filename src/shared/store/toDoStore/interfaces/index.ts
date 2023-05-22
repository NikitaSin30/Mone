export interface ITask {
  task: string;
  id: string;
  isDone: boolean;
}

export interface ITodoStore {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  deleteTask: (id: string) => void;
  deleteAllTasks: () => void;
  getTask: (id: string) => ITask | void;
  setTasksFromdDB: (tasks: ITask[]) => void;
}
