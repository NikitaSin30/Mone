import { ITask } from 'shared/store/toDoStore/interfaces/interfaces';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { IServiceTodo } from './interfaces/interfaces';



class ServiceTodo implements IServiceTodo {


    private onCheckUniqueTask(newTask: string): boolean {
        return toDoStore.tasks.some(({ task }) => task === newTask);
    }

    private modifyNewTask(task: string) {
        const validaitedTask = task.trim().toLowerCase();
        const newValidaitedTask = validaitedTask[0].toUpperCase() + validaitedTask.slice(1);

        return newValidaitedTask;
    }
    private createNewTask(validatedTask: string): ITask {
        const newTask = {
            task   : validatedTask,
            isDone : false,
            id     : validatedTask,
        };

        return newTask;
    }

    middlewareAddTask(task: string, includeModalError: () => void): void {
        const validatedTask = this.modifyNewTask(task);
        const unique = this.onCheckUniqueTask(validatedTask);

        if (unique) return includeModalError();

        const newTask = this.createNewTask(validatedTask);

        toDoStore.addTask(newTask);
    }
}


export const serviceTodo = new ServiceTodo();
