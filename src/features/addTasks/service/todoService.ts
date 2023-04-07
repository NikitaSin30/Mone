import { ITask } from 'shared/store/toDoStore/interfaces';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { todoApi } from 'api/todoApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/mappers/validateString';
import { ITaskForm } from '../interfaces';
import { ITodoService } from './interfaces';



class TodoService implements ITodoService {

    async addTask({ task }: ITaskForm, includeModalError: () => void) {
        const taskValidaited = validateString(task);
        const hasTask = this.onCheckUniqueTask(taskValidaited);

        if (hasTask) return includeModalError();

        try {

        }
        catch (error) {
            console.log('Ошибка');
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

    onCheckUniqueTask(newTask: string) {
        return toDoStore.tasks.some(({ task }) => task === newTask);
    }
}


export const todoService = new TodoService();
