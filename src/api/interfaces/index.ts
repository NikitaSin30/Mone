import { IAccumulationOperation, IIncomeOperation, ISpendingOperation } from '../../shared/store/cashFlowStore/interfaces';
import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces';
import { IFormAuth } from '../../features/auth/interfaces';


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
 categories : ICategorie[],
 tasks : ITask[],
}

export interface IDataFromDB {
 user: IDataUserFromDB,
    token : string,
}

export interface ICashFlowApi {
  addIncome: (incomeOperation: IIncomeOperation, id: string) => Promise<IIncomeOperation>;
  addAccumulation: (id: string, accumulationOperation: IAccumulationOperation) => Promise<IAccumulationOperation>;
  addSpending: (id: string, spendingOperation: ISpendingOperation) => Promise<ISpendingOperation>;
}

export interface IAuthApi {
    registration:(user: IFormAuth) => Promise<IResponseMessage>;
    login:(dataLogin:IFormAuth) => Promise<IDataFromDB>
    authentication:(token:string) => Promise<IDataFromDB>
    logout:(id:string) => Promise<IResponseMessage>
}


export interface ICategoriesApi {
  addCategorie: (categorie: ICategorie, userId: string) => Promise<IResponseMessage>;
}

export interface ITodoApi {
  addTask: (task: string, userId: string) => Promise<ITask>;
  deleteTask:(key:string, userId:string) => void
}
