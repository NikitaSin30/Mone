import { IIncomeOperation, IAccumulationOperation,ISpendingOperation } from 'interfaces';

export interface IBalanceStore {
  moneyAccount: number;
  updateCashAccount:(newBalance: number) => void;
  setBalanceFromDB: (sum: number) => void;
}

export interface IIncomeStore {
  income: number;
  incomeOperations: IIncomeOperation[];
  addIncome: (operation: IIncomeOperation) => void;
  setIncomeFromDB:(itcome: number, operations: IIncomeOperation[]) => void;
}

export interface ISpendingStore {
  spending: number;
  spendingOperations: ISpendingOperation[];
  addSpending: (operation: ISpendingOperation) => void;
  setSpendingFromDB:(spending: number, operations: ISpendingOperation[]) => void;
}

export interface IAccumulationStore {
  accumulation: number;
  accumulationOperations: IAccumulationOperation[];
  setAccumulationFromDB:(accumulation: number, operations: IAccumulationOperation[]) => void;
  addAccumulation:(operationAccumulation:IAccumulationOperation ) => void
}
