
import { ITaskForm } from 'features/addTasks/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces';
import { ITodoAPI } from './interfaces';
import { DELETE_TASK_URL, DELETE_ALL_TASKS_URL, SWITCH_IS_DONE_URL,ADD_TASK_URL } from './path/index';
import { request } from './request/request';




export class TodoAPI implements ITodoAPI {

    async add(task: ITaskForm, userID: string) {

        try {
            const response = await request(ADD_TASK_URL,'POST',{
                task,
                userID,
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

    async delete(taskID: string, userID: string) {
        try {
            const response = await request(DELETE_TASK_URL,'DELETE',{
                userID,
                taskID,
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

    async deleteAll(userID:string) {
        try {
            const response = await request(DELETE_ALL_TASKS_URL,'DELETE',{ userID });

            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.message);
            }
        }
        catch (error) {

            throw error;
        }
    }

    async switchIsDoneTask(taskID:string,userID:string) {
        try {
            const response = await fetch(SWITCH_IS_DONE_URL, {
                method  : 'PUT',
                headers : {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify({
                    userID,
                    taskID,
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
}
