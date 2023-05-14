import { ITask } from 'shared/store/toDoStore/interfaces';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { todoApi } from 'api/todoApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/helpers/validateString';
import { ITaskForm } from '../interfaces';
import { ITodoService } from './interfaces';



class TodoService implements ITodoService {

    async addTask( { task } : ITaskForm) {

        try {
            const taskValidaited = validateString(task);

            this.checkStoreHasTask(taskValidaited);

            const createdTask = this.createTask(taskValidaited);

            await todoApi.addTask(createdTask,userStore.idUser);
            toDoStore.addTask(createdTask);
        }
        catch (error) {
            throw error;
        }
    }

    async deleteTask(id: string) {
        try {

        }
        catch (error) {
            console.log('Ошибка');

        }
    }

    async toggleisDoneTask(id: string) {


        try {

        }
        catch (error) {
            console.log('Ошибка');

        }
    }

    checkStoreHasTask(newTask: string) {
        const hasTask = toDoStore.tasks.some(({ task }) => task === newTask);

        if (hasTask) {
            throw new Error('Задача должна быть уникальна');
        }
    }

    createTask( validatedTask : string):ITask {
        return {
            task   : validatedTask,
            id     : validatedTask,
            isDone : false,
        };
    }
}


export const todoService = new TodoService();
