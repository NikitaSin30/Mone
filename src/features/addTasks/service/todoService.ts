import { ITask } from 'shared/store/toDoStore/interfaces';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/helpers/validateString';
import { ITaskForm } from '../interfaces';
import { ITodoService } from './interfaces';
import { ITodoApi } from 'api/interfaces';



class TodoService implements ITodoService {
    private todoApi:ITodoApi;

    constructor(todoApi:ITodoApi) {
        this.todoApi = todoApi;
    }
    
    async addTask( { task } : ITaskForm) {

        try {
            const taskValidaited = validateString(task);

            this.checkStoreHasTask(taskValidaited);

            const createdTask = this.createTask(taskValidaited);

            await this.todoApi.addTask(createdTask,userStore.user._id);
            toDoStore.addTask(createdTask);
        }
        catch (error) {
            throw error;
        }
    }

    async deleteTask(idTask: string) {
        try {
            await this.todoApi.deleteTask(idTask,userStore.user._id);
            toDoStore.deleteTask(idTask);
        }
        catch (error) {
            throw error;

        }
    }

    async deleteAllTasks() {
        try {
            await this.todoApi.deleteAllTasks(userStore.user._id);
            toDoStore.deleteAllTasks();
        }
        catch (error) {
            throw error;
        }
    }

    async switchIsDoneTask(idTask: string) {

        try {
            await this.todoApi.switchIsDoneTask(idTask,userStore.user._id);
            toDoStore.switchIsDoneTask(idTask);
        }
        catch (error) {
            throw error;
        }
    }

    private checkStoreHasTask(newTask: string) {
        const hasTask = toDoStore.tasks.some(({ task }) => task === newTask);

        if (hasTask) {
            throw new Error('Задача должна быть уникальна');
        }
    }

    private createTask( validatedTask : string):ITask {
        return {
            task   : validatedTask,
            id     : validatedTask,
            isDone : false,
        };
    }
}


export default TodoService;
