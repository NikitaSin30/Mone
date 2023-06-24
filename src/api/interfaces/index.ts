import { IAccumulationOperation, IIncomeOperation, ISpendingOperation } from '../../shared/store/cashFlowStore/interfaces';
import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces';
import { IFormAuth } from '../../features/auth/interfaces';
import { ITaskForm } from 'features/addTasks/interfaces';
import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';


export interface IResponseMessage {message:string}

export interface IDataUserFromDB {
 email : string,
 country : string,
 nickname : string,
 password : string,
 _id : string,
 balance : number,
 income : number,
 incomeOperations : IIncomeOperation[],
 spending : number,
 spendingOperations : ISpendingOperation[],
 accumulation : number,
 accumulationOperations : IAccumulationOperation[],
 allOperations: TAllOperations[]
 categories : ICategorie[],
 tasks : ITask[],
}

export interface IDataFromDB {
  user: IDataUserFromDB,
  token : string,
}

export interface ICashFlowAPI {
  addIncome: (incomeOperation: IIncomeOperation, userID: string) => Promise<void>;
  addAccumulation: (userID: string, accumulationOperation: IAccumulationOperation) => Promise<IAccumulationOperation>;
  addSpending: (userID: string, spendingOperation: ISpendingOperation) => Promise<void>;
}

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
  add: (task: ITaskForm, userID: string) => Promise<void>;
  delete:(taskID:string, userID:string) => Promise<void>
  deleteAll:(id:string) => Promise<void>
  switchIsDoneTask:(taskID:string, userID:string) => Promise<void>
}
