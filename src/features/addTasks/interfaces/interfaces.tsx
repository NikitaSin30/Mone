export interface ITaskForm {
    task: string
}

export interface IInputTask {
  onChangeIsModalActive: () => void;
  onChangeErr:() => void;
  isActive: boolean;
}
