export interface ITask {
  task: string;
  id: string;
  isDone: boolean;
  key: string | null;
}

export interface ITodoStore {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (id: string) => void;
  removeAllTasks: () => void;
  getTask: (id: string) => ITask | void;
  setTasksWithdDB: (tasks: ITask[]) => void;
}
