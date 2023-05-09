import { IAccumulationOperationWithID } from 'shared/store/cashFlowStore/acuumulationStore/interfaces';
import { IIncomeOperationWithID } from 'shared/store/cashFlowStore/incomeStore/interfaces';
import { ITaskWithID } from 'shared/store/toDoStore/interfaces';
import { IFormAuth } from '../../features/auth/interfaces';
import { ITaskForm } from 'features/addTasks/interfaces';
import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';
import { ISpendingOperationWithID } from 'shared/store/cashFlowStore/spendingStore/interfaces';
import { ICategorieWithID } from 'shared/store/categoriesStore/interfaces';


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
 categories : ICategorieWithID[],
 tasks : ITaskWithID[],
}

export interface IDataFromDB {
  user: IDataUserFromDB,
  token : string,
}


export interface IAuthApi {
    registration:(user: IFormAuth) => Promise<IResponseMessage>;
    login:(dataLogin:IFormAuth) => Promise<IDataFromDB>
    authenticate:(token:string) => Promise<IDataFromDB>
    logout:(id:string) => Promise<void>
}




