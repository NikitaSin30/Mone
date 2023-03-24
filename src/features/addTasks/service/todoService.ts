import { ITask } from 'shared/store/toDoStore/interfaces/interfaces';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { ITodoService } from './interfaces/interfaces';



class TodoService implements ITodoService {

    private onCheckUniqueTask(newTask: string): boolean {
        return toDoStore.tasks.some(({ task }) => task === newTask);
    }

    private modifyNewTask(task: string) {
        const taskValidaited = task.trim().toLowerCase();
        const newTask = taskValidaited[0].toUpperCase() + taskValidaited.slice(1);

        return newTask;
    }
    private createNewTask(validatedTask: string): ITask {
        const newTask = {
            task   : validatedTask,
            isDone : false,
            id     : validatedTask,
        };

        return newTask;
    }

    addTask(task: string, includeModalError: () => void): void {
        const taskValidaited = this.modifyNewTask(task);
        const hasTask = this.onCheckUniqueTask(taskValidaited);

        if (hasTask) return includeModalError();

        const newTask = this.createNewTask(taskValidaited);

        toDoStore.addTask(newTask);
    }
}


export const todoService = new TodoService();
