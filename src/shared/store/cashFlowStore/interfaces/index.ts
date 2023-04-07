export interface IBalanceStore {
  moneyAccount: number;
  updateCashAccount:(newBalance: number) => void;
  setBalanceWithDB: (sum: number) => void;
}


export interface IAccumulationOperation {
  accumulation: number;
  date: Date;
}
export interface IAccumulationStore {
  accumulation: number;
  accumulationOperations: IAccumulationOperation[];
  addAccumulation: (newAccumulation: IAccumulationOperation) => void;
  setAccumulation:(accumulation: number, operations: IAccumulationOperation[]) => void;
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
  setSpendingWithDB:(spending: number, operations: ISpendingOperation[]) => void;
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
  setIncomeWithStore:(itcome: number, operations: IIncomeOperation[]) => void;
}
