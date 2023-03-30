export interface IBalanceStore {
  moneyAccount: number;

}


export interface IAccumulationOperation {
  accumulation: number;
  date: Date;
  key: string | null;
}
export interface IAccumulationStore {
  accumulation: number;
  accumulationOperation: IAccumulationOperation[];
  addAccumulation: (newAccumulation: IAccumulationOperation) => void;
}




export interface ISpendingOperation {
  spending: number;
  categorie: string;
  date: Date;
  key: string | null
}

export interface ISpendingStore {
  spending: number;
  spendingOperations: ISpendingOperation[]
  addSpending: (operation: ISpendingOperation) => void;
}



export interface IIncomeOperation {
  income: number;
  sphere: string;
  date: Date;
  key: string | null
}
export interface IIncomeStore {
  income: number;
  incomeOperations: IIncomeOperation[];
  addIncome: (operation:IIncomeOperation) => void;
}
