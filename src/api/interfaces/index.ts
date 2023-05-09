import { ISpendingOperation } from 'features/add-spending/service/interfaces';
import { IAccumulationOperation } from 'features/add-accumulation/service/interfaces';
import { IAccumulationOperationWithID } from 'shared/store/cashFlowStore/acuumulationStore/interfaces';
import { IIncomeOperationWithID } from 'shared/store/cashFlowStore/incomeStore/interfaces';
import { IIncomeOperation } from 'features/add-income/service/interfaces';
import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces';
import { IFormAuth } from '../../features/auth/interfaces';
import { ITaskForm } from 'features/addTasks/interfaces';
import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';
import { ISpendingOperationWithID } from 'shared/store/cashFlowStore/spendingStore/interfaces';


export interface IResponseMessage {message:string}

export interface IDataUserFromDB {
 email : string,
 country : string,
 nickname : string,
 password : string,
 _id : string,
 balance : number,
 income : number,
 incomeOperations : IIncomeOperationWithID[],
 spending : number,
 spendingOperations : ISpendingOperationWithID[],
 accumulation : number,
 accumulationOperations : IAccumulationOperationWithID[],
 allOperations: TAllOperations[]
 categories : ICategorie[],
 tasks : ITask[],
}

export interface IDataFromDB {
  user: IDataUserFromDB,
  token : string,
}

export interface ICashFlowApi {
  addIncome: (incomeOperation: IIncomeOperation, id: string) => Promise<void>;
  addAccumulation: (id: string, accumulationOperation: IAccumulationOperation) => Promise<IAccumulationOperation>;
  addSpending: (id: string, spendingOperation: ISpendingOperation) => Promise<ISpendingOperation>;
}

export interface IAuthApi {
    registration:(user: IFormAuth) => Promise<IResponseMessage>;
    login:(dataLogin:IFormAuth) => Promise<IDataFromDB>
    authenticate:(token:string) => Promise<IDataFromDB>
    logout:(id:string) => Promise<void>
}


export interface ICategoriesApi {
  addCategorie: (categorie: ICategorie, userId: string) => Promise<IResponseMessage>;
  deleteCategorie: (idCategorie:string, userId:string) => Promise<void>
}

export interface ITodoApi {
  addTask: (task: ITaskForm, id: string) => Promise<void>;
  deleteTask:(idTask:string, id:string) => Promise<void>
  deleteAllTasks:(id:string) => Promise<void>
  switchIsDoneTask:(idTask:string, id:string) => Promise<void>
}
