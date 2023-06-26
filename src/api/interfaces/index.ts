import { IAccumulationOperation, IDataFromDB, IIncomeOperation, ISpendingOperation, ITask } from 'interfaces';
import { ICategorie } from 'interfaces';
import { IFormAuth } from 'interfaces';
import { ITaskForm } from 'interfaces';



export interface IResponseMessage {message:string}

export interface IAuthAPI {
    registration:(user: IFormAuth) => Promise<IResponseMessage>;
    login:(dataLogin:IFormAuth) => Promise<IDataFromDB>
    authenticate:(token:string) => Promise<IDataFromDB>
    logout:(userID:string) => Promise<void>
}


export interface ICategoriesAPI {
  add: (categorie: ICategorie, userID: string) => Promise<void>;
  delete: (categorieID:string, userID:string) => Promise<void>
}

export interface ITodoAPI {
  add: (task: ITask, userID: string) => Promise<void>;
  delete:(taskID:string, userID:string) => Promise<void>
  deleteAll:(id:string) => Promise<void>
  switchIsDoneTask:(taskID:string, userID:string) => Promise<void>
}

export interface IIncomeAPI{
    add:( userID: string,incomeOperation: IIncomeOperation) => Promise<void>
}

export interface IAccumulationAPI{
    add:(userID: string, accumulationOperation: IAccumulationOperation) => Promise<void>
}

export interface ISpendingAPI {
    add:(userID: string, spendingOperation: ISpendingOperation) => Promise<void>
}
