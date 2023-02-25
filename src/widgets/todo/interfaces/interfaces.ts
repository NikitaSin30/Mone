export interface ITodoItem {
  task: string;
  isDone: boolean;
  id: string;
  onToggleStatus:() => void
}
