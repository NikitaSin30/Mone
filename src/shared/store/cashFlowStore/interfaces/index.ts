export interface IOperation{
    data:string
}

export interface IAccumulationOperation {
  accumulation: number;
  date: string;
}

export enum EOperationType{
  Income = 'Income',
  Accumulation = 'Accumulation',
  Spending = 'Spending',
}

export interface IAccumulationOperation extends IOperation {
  date: string;
  accumulation: number;
  type:EOperationType.Accumulation;
}

export interface ISpendingOperation extends IOperation {
  date: string;
  spending: number;
  categorie: string;
  type:EOperationType.Spending,
}

export interface IIncomeOperation extends IOperation {
  date: string;
  income: number;
  sphere: string;
  type:EOperationType.Income
}



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
