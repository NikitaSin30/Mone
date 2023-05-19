export interface IBalanceStore {
  moneyAccount: number;
  updateCashAccount:(newBalance: number) => void;
  setBalanceFromDB: (sum: number) => void;
}


export interface IAccumulationOperation {
  accumulation: number;
  date: Date;
}
export interface IAccumulationStore {
  accumulation: number;
  accumulationOperations: IAccumulationOperation[];
  setAccumulationFromDB:(accumulation: number, operations: IAccumulationOperation[]) => void;
  addAccumulation:(operationAccumulation:IAccumulationOperation ) => void
}




export interface ISpendingOperation {
  spending: number;
  categorie: string;
  date: Date;
}

export interface ISpendingStore {
  spending: number;
  spendingOperations: ISpendingOperation[];
  addSpending: (operation: ISpendingOperation) => void;
  setSpendingFromDB:(spending: number, operations: ISpendingOperation[]) => void;
}



export interface IIncomeOperation {
  income: number;
  sphere: string;
  date: Date;
}
export interface IIncomeStore {
  income: number;
  incomeOperations: IIncomeOperation[];
  addIncome: (operation: IIncomeOperation) => void;
  setIncomeFromDB:(itcome: number, operations: IIncomeOperation[]) => void;
}
