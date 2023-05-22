
import { ITaskForm } from 'features/addTasks/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces';
import { ITodoApi } from './interfaces';
import { DELETE_TASK_URL, DELETE_ALL_TASKS_URL } from './path/index';
import { request } from './request/request';




class TodoApi implements ITodoApi {

    async addTask(task: ITaskForm, idUser: string) {

        try {
            const response = await request('/tasks/addtask','POST',{
                task,
                id : idUser,
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

    async deleteTask(idTask: string, idUser: string) {
        try {
            const response = await request(DELETE_TASK_URL,'DELETE',{
                id : idUser,
                idTask,
            });


            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Что-то пошло не так');
        }
    }

    async deleteAllTasks(idUser:string) {
        try {
            const response = await request(DELETE_ALL_TASKS_URL,'DELETE',{ id: idUser });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }
        }
        catch (error) {

            throw error;
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
