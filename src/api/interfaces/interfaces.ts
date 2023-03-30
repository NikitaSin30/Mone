import { IAccumulationOperation, IIncomeOperation, ISpendingOperation } from '../../shared/store/cashFlowStore/interfaces/interfaces';
import {IFormAuth} from "../../features/auth/interfaces/interfaces";
import { ICategorie } from 'shared/store/categoriesStore/interfaces/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces/interfaces';



export interface ICashFlowApi {
  addIncome: (userId: string, income: number, sphere: string) => Promise<IIncomeOperation>;
  addAccumulation: (userId: string, accumulation: number) => Promise<IAccumulationOperation>;
  addSpending: (userId: string, spending: number, categorie: string) => Promise<ISpendingOperation>;
}

export interface IAuthApi {
    registration:(user: IFormAuth) => Promise<string>;
    login:(email: string, password: string) => Promise<void>
    getUser:(userId: string)=> Promise<void>
}

export interface ICategoriesApi {
  addCategorie: (categorie: string, userId: string) => Promise<ICategorie>;
  deleteCategorie:(key:string,userId: string) => Promise<void>;
  addSpendingInCategorie: (categorie: ICategorie, userId: string) => Promise<void>;
}


export interface ITodoApi {
  addTask: (task: string, userId: string) => Promise<ITask>;
  deleteTask:(key:string, userId:string) => void
}
