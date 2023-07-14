import { IResponseTask, IDataResponse, ITask } from 'interfaces';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { userStore } from 'shared/store/userStore/UserStore';
import { validateString } from 'shared/mappers/validateString';
import { ITaskForm } from 'interfaces';
import { ITodoService } from './interfaces';
import { ITodoAPI } from 'api/interfaces';



class TodoService implements ITodoService {
    private todoAPI:ITodoAPI;

    constructor(todoAPI:ITodoAPI) {
        this.todoAPI = todoAPI;
    }

    async add( { task } : ITaskForm) {

        const validaitedTask = validateString(task);

        this.checkStoreHasTask(validaitedTask);

        const newTask = this.createTask(validaitedTask);

        const { data } = await this.todoAPI.add<IDataResponse<IResponseTask>>(newTask,userStore.userID);

        toDoStore.add(data);
    }



    async delete(taskID: string) {
        try {
            await this.todoAPI.delete(taskID,userStore.userID);
            toDoStore.delete(taskID);
        }
        catch (error) {
            throw error;

        }
    }

    async deleteAll() {
        try {
            await this.todoAPI.deleteAll(userStore.userID);
            toDoStore.deleteAll();
        }
        catch (error) {
            throw error;
        }
    }

    async switchIsDoneTask(taskID: string) {

        try {
            await this.todoAPI.switchIsDoneTask(taskID,userStore.userID);
            toDoStore.switchIsDone(taskID);
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
            isDone : false,
        };
    }
}


export default TodoService;
