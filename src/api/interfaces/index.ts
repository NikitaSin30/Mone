import { IAccumulationOperation,
    IBaseResponse, IIncomeOperation,
    ISpendingOperation,
    ITask,ICategorie,
    IFormAuth } from 'interfaces';







export interface IAuthAPI {
    registration:(user: IFormAuth) => Promise<IBaseResponse>;
    login:<T>(dataLogin:IFormAuth) => Promise<T>
    authenticate:<T>(token:string) => Promise<T>
    logout:(userID:string) => Promise<IBaseResponse>
}

export interface ICategoriesAPI {
  add:<T>(categorie: ICategorie, userID: string) => Promise<T>;
  delete: (categorieID:string, userID:string) => Promise<void>
}

export interface ITodoAPI {
  add: <T>(task: ITask, userID: string) => Promise<T>;
  delete:(taskID:string, userID:string) => Promise<void>
  deleteAll:(id:string) => Promise<void>
  switchIsDoneTask:(taskID:string, userID:string) => Promise<void>
}

export interface IIncomeAPI{
    add:<T>( userID: string,incomeOperation: IIncomeOperation) => Promise<T>
}

export interface IAccumulationAPI{
    add:<T>(userID: string, accumulationOperation: IAccumulationOperation) => Promise<T>
}

export interface ISpendingAPI {
    add:<T>(userID: string, spendingOperation: ISpendingOperation) => Promise<T>
}
