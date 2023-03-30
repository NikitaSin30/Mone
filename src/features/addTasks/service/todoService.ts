import { ITask } from 'shared/store/toDoStore/interfaces/interfaces';
import { toDoStore } from 'shared/store/toDoStore/ToDoStore';
import { ITodoService } from './interfaces/interfaces';
import { todoApi } from 'api/todoApi';
import { userStore } from 'shared/store/userStore/UserStore';
import { mapperModificationString } from 'shared/mappers/mapperModificationString';



class TodoService implements ITodoService {


  async addTask(task: string, includeModalError: () => void) {
    const taskValidaited = mapperModificationString(task);
    const hasTask = this.onCheckUniqueTask(taskValidaited);

    if (hasTask) return includeModalError();

    try {
      const res: ITask = await todoApi.addTask(task, userStore.userId);
      toDoStore.addTask(res);
    } catch (error) {
      new Error();
    }
  }

  async deleteTask(id: string) {
    try {
      const task: ITask = toDoStore.getTask(id);
      await todoApi.deleteTask(task.key!, userStore.userId);
      toDoStore.removeTask(id);
    } catch (error) {
      new Error();
    }
  }

  async toggleisDoneTask(id: string) {
    const task:ITask = toDoStore.getTask(id)
    try {
      await todoApi.updateTask(task, userStore.userId)
      toDoStore.updateTask(id)
    } catch (error) {
      throw new Error('Ошибка')
    }
  }

  onCheckUniqueTask(newTask: string) {
    return toDoStore.tasks.some(({ task }) => task === newTask);
  }
}


export const todoService = new TodoService();
