
import { ITask } from 'shared/store/toDoStore/interfaces';
import { ITodoApi } from './interfaces';




class TodoApi {

    async addTask(task: string, userId: string) {

        try {



        }
        catch (error) {
            throw new Error('Что-то пошло не так');
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
