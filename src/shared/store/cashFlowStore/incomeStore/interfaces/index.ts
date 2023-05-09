import { IIncomeOperation } from 'features/add-income/service/interfaces';



export interface IIncomeOperationWithID extends IIncomeOperation {
  id:string
}
export interface IIncomeStore {
  income: number;
  incomeOperations: IIncomeOperationWithID[];
  addIncome: (operation: IIncomeOperationWithID) => void;
  setIncomeFromDB:(itcome: number, operations: IIncomeOperationWithID[]) => void;
}
