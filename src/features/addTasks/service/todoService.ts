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
            const res: ITask = await todoApi.addTask(task, userStore.userId);

            toDoStore.addTask(res);
        }
        catch (error) {
            console.log('Ошибка');
        }
    }

    async deleteTask(id: string) {
        try {
            const task: ITask = toDoStore.getTask(id);

            await todoApi.deleteTask(task.key!, userStore.userId);
            toDoStore.removeTask(id);
        }
        catch (error) {
            console.log('Ошибка');

        }
    }

    async toggleisDoneTask(id: string) {
        const task:ITask = toDoStore.getTask(id);

        try {
            await todoApi.updateTask(task, userStore.userId);
            toDoStore.updateTask(id);
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
