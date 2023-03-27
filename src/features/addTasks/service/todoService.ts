import { ITask } from 'shared/store/toDoStore/interfaces/interfaces';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { ITaskForm } from '../interfaces/interfaces';
import { ITodoService } from './interfaces/interfaces';



class TodoService implements ITodoService {

     onCheckUniqueTask(newTask: string) {
        return toDoStore.tasks.some(({ task }) => task === newTask);
    }

     modifyNewTask(task: string) {
        const taskValidaited = task.trim().toLowerCase();
        const newTask = taskValidaited[0].toUpperCase() + taskValidaited.slice(1);

        return newTask;
    }
     createNewTask(validatedTask: string) {
        return {
            task   : validatedTask,
            isDone : false,
            id     : validatedTask,
        };
    }

    addTask({task}: ITaskForm, includeModalError: () => void): void {
        const taskValidaited = this.modifyNewTask(task);
        const hasTask = this.onCheckUniqueTask(taskValidaited);

        if (hasTask) return includeModalError();

        const newTask = this.createNewTask(taskValidaited);

        toDoStore.addTask(newTask);
    }
}


export const todoService = new TodoService();
