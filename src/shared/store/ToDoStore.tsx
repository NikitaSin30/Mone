import { action, makeObservable, observable } from 'mobx';

interface ITask {
    task:string,
    isDone : boolean,
    id:string
}

interface ITodo {
  tasks: ITask[];
  setNewTask: (tasks: ITask) => void;
  removeTask: (id: string) => void;
  onCheckUnique: (task: string) => boolean;
  onSwitchIsDone: (id: string) => void;
  removeAllTasks: () => void
}

class ToDo implements ITodo {
    tasks = [
        {
            task   : '',
            isDone : false,
            id     : '',
        },
    ];
    constructor() {
        this.tasks = [];
        makeObservable(this, {
            tasks          : observable,
            setNewTask     : action,
            onCheckUnique  : action,
            onSwitchIsDone : action,
            removeTask     : action,
            removeAllTasks : action,
        });
    }
    setNewTask(task: ITask): void {
        this.tasks.push(task);
    }

    removeTask(id: string): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    removeAllTasks():void {
        this.tasks = [];
    }
    
    onCheckUnique(task: string): boolean {
        return this.tasks.some((i) => i.task === task);
    }

    onSwitchIsDone(id: string):void {
        this.tasks.map((i) => {
            if (i.id === id) {
                i.isDone = !i.isDone;

                return i;
            }

            return i;
        });
    }
}

export const ToDoStore = new ToDo();
