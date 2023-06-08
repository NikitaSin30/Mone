export interface IBalanceStore {
  moneyAccount: number;
  updateCashAccount:(newBalance: number) => void;
  setBalanceFromDB: (sum: number) => void;
}

export enum EOperationType{
  Income = 'Income',
  Accumulation = 'Accumulation',
  Spending = 'Spending',
}

interface Operation {
  date: string
}

export interface IAccumulationOperation extends Operation {
  accumulation: number;
  type:EOperationType.Accumulation;
}

export interface IAccumulationStore {
  accumulation: number;
  accumulationOperations: IAccumulationOperation[];
  setAccumulationFromDB:(accumulation: number, operations: IAccumulationOperation[]) => void;
  addAccumulation:(operationAccumulation:IAccumulationOperation ) => void
}




export interface ISpendingOperation extends Operation {
  spending: number;
  categorie: string;
  type:EOperationType.Spending,
}

export interface ISpendingStore {
  spending: number;
  spendingOperations: ISpendingOperation[];
  addSpending: (operation: ISpendingOperation) => void;
  setSpendingFromDB:(spending: number, operations: ISpendingOperation[]) => void;
}



export interface IIncomeOperation extends Operation {
  income: number;
  sphere: string;
  type:EOperationType.Income
}
export interface IIncomeStore {
  income: number;
  incomeOperations: IIncomeOperation[];
  addIncome: (operation: IIncomeOperation) => void;
  setIncomeFromDB:(itcome: number, operations: IIncomeOperation[]) => void;
}
