import { ref, child, push, update, remove } from 'firebase/database';
import { db } from 'shared/firebase/firebase';
import { ITask } from 'shared/store/toDoStore/interfaces/interfaces';
import { ITodoApi } from './interfaces/interfaces';




class TodoApi implements ITodoApi {

  async addTask(task: string, userId: string) {

    try {
      const newTaskKey =  push(child(ref(db), 'task')).key;
        const taskItem : ITask = {
            task: task,
            id: task,
            isDone: false,
            key: newTaskKey,
          }

      const updates: any = {};
      updates['users/' + userId + '/task/' + newTaskKey] = taskItem;

      await update(ref(db), updates);

      return taskItem;

    } catch (error) {
      throw new Error('Что-то пошло не так');
    }
  }

  async deleteTask(key: string, userId: string) {
    try {
      const updates: any = {};
      updates['users/' + userId + '/task/' + key] = null;
      await update(ref(db), updates);
    } catch (error) {
      throw new Error('Что-то пошло не так');
    }
  }

  async updateTask(task:ITask,userId:string) {
    try {
      const upadatedTask = { ...task, isDone: !task.isDone };
      const updates:any = {}
      updates['users/' + userId + '/task/' + task.key] = upadatedTask;
      await update(ref(db), updates);
    } catch (error) {
      throw new Error('Может лучше в вебкам ? A не IT')
    }
  }
}

export const todoApi = new TodoApi();
