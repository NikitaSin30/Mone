import { ITask } from 'shared/store/toDoStore/interfaces';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/service/helpers/validateString';
import { ITaskForm } from '../interfaces';
import { ITodoService } from './interfaces';
import { ITodoApi } from 'api/interfaces';



class TodoService implements ITodoService {
    private todoApi:ITodoApi;

    constructor(todoApi:ITodoApi) {
        this.todoApi = todoApi;
    }

    async addTask( { task } : ITaskForm) {

        const validaitedTask = validateString(task);

        this.checkStoreHasTask(validaitedTask);

        const newTask = this.createTask(validaitedTask);

        await this.todoApi.addTask(newTask,userStore.idUser);
        toDoStore.addTask(newTask);
    }



    async deleteTask(idTask: string) {
        try {
            await this.todoApi.deleteTask(idTask,userStore.idUser);
            toDoStore.deleteTask(idTask);
        }
        catch (error) {
            throw error;

        }
    }

    async deleteAllTasks() {
        try {
            await this.todoApi.deleteAllTasks(userStore.idUser);
            toDoStore.deleteAllTasks();
        }
        catch (error) {
            throw error;
        }
    }

    async switchIsDoneTask(idTask: string) {

        try {
            await this.todoApi.switchIsDoneTask(idTask,userStore.idUser);
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
