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

export interface ICashFlowApi {
  addIncome: (incomeOperation: IIncomeOperation, idUser: string) => Promise<void>;
  addAccumulation: (idUser: string, accumulationOperation: IAccumulationOperation) => Promise<IAccumulationOperation>;
  addSpending: (idUser: string, spendingOperation: ISpendingOperation) => Promise<void>;
}

export interface IAuthApi {
    registration:(user: IFormAuth) => Promise<IResponseMessage>;
    login:(dataLogin:IFormAuth) => Promise<IDataFromDB>
    authenticate:(token:string) => Promise<IDataFromDB>
    logout:(idUser:string) => Promise<void>
}


export interface ICategoriesApi {
  addCategorie: (categorie: ICategorie, idUser: string) => Promise<void>;
  deleteCategorie: (idCategorie:string, idUser:string) => Promise<void>
}

export interface ITodoApi {
  switchIsDoneTask:(idTask:string, idUser:string) => Promise<void>
  addTask: (task: ITaskForm, idUser: string) => Promise<void>;
  deleteTask:(idTask:string, idUser:string) => Promise<void>
}
