import {
    IResponseAccumulationOperation,
    IResponseIncomeOperation,
    IResponseSpendingOperation,
} from 'interfaces';
import { TAllOperations } from 'types';

export interface IBalanceStore {
  moneyAccount: number;
  updateCashAccount:(newBalance: number) => void;
  setBalanceFromDB: (sum: number) => void;
}

export interface IIncomeStore {
  income: number;
  incomeOperations: IResponseIncomeOperation[];
  addIncome: (operation: IResponseIncomeOperation) => void;
  setIncomeFromDB:(itcome: number, operations: IResponseIncomeOperation[]) => void;
}

export interface ISpendingStore {
  spending: number;
  spendingOperations: IResponseSpendingOperation[];
  addSpending: (operation: IResponseSpendingOperation) => void;
  setSpendingFromDB:(spending: number, operations: IResponseSpendingOperation[]) => void;
}

export interface IAccumulationStore {
  accumulation: number;
  accumulationOperations: IResponseAccumulationOperation[];
  setAccumulationFromDB:(accumulation: number, operations: IResponseAccumulationOperation[]) => void;
  addAccumulation:(operationAccumulation:IResponseAccumulationOperation ) => void
}

export interface IOperationStore{
    allOperations : TAllOperations[]
    addOperation: (operation : TAllOperations) => void
    setAllOperationsFromDB: (allOperations : TAllOperations[]) => void
}
