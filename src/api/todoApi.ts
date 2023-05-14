
import { ITaskForm } from 'features/addTasks/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces';
import { ITodoApi } from './interfaces';
import { request } from './request/request';




class TodoApi implements ITodoApi {

    async addTask(task: ITaskForm, id: string) {

        try {
            const response = await request('/tasks/addtask','POST',{
                task,
                id,
            });


            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }

        }
        catch (error) {
            throw error;

        }
    }

    async deleteTask(key: string, userId: string) {
        try {

        }
        catch (error) {
            throw new Error('Что-то пошло не так');
        }
    }

    async updateTask(task:ITask,userId:string) {
        try {
            const upadatedTask = {
                ...task,
                isDone : !task.isDone,
            };

        }
        catch (error) {
            throw new Error('Может лучше в вебкам ? A не IT');
        }
    }
}

export const todoApi = new TodoApi();
