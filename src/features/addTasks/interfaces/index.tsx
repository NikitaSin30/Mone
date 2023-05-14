export interface ITaskForm {
    task: string
}

export interface IInputTask {
  switchShowModalErr: () => void;
}

export interface IBuilderTask {
    setErromFromDB: (textMessage:string) => void
}
