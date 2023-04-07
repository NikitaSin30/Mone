import { IAccumulationOperation, IIncomeOperation, ISpendingOperation } from '../../shared/store/cashFlowStore/interfaces';
import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { ITask } from 'shared/store/toDoStore/interfaces';
import { IFormSpending } from '../../features/add-spending/interfaces';
import { IFormAuth } from '../../features/auth/interfaces';

export interface ICashFlowApi {
  addIncome: (incomeOperation: IIncomeOperation, id: string) => Promise<IIncomeOperation>;
  addAccumulation: (id: string, accumulationOperation: IAccumulationOperation) => Promise<IAccumulationOperation>;
  addSpending: (id: string, spendingOperation: ISpendingOperation) => Promise<ISpendingOperation>;
}

export interface IAuthApi {
    registration:(user: IFormAuth) => Promise<any>;
    login:(dataLogin:IFormAuth) => Promise<any>

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
