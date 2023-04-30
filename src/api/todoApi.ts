
import { ITaskForm } from 'features/addTasks/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces';
import { ITodoApi } from './interfaces';
import { DELETE_TASK } from './path/index';



class TodoApi implements ITodoApi {

    async addTask(task: ITaskForm, id: string) {

        try {
            const response = await fetch('/tasks/addtask', {
                method  : 'POST',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    task,
                    id,
                }),
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

    async deleteTask(idTask: string, id: string) {
        try {
            const response = await fetch(DELETE_TASK,{
                method  : 'DELETE',
                headers : {
                    'Content-type' : 'application/json',

                },
                body : JSON.stringify({
                    id,
                    idTask,
                }),
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
