export interface ITodoItem {
  task: string;
  isDone: boolean;
  id: string;
  onDeleteTask: (idTask:string) => Promise<void>
  onToggleIsDoneTask:(idTask:string) => Promise<void>
}
