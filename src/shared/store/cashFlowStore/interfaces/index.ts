export interface IBalanceStore {
  moneyAccount: number;

}
export interface IAccumulationStore {
  accumulation: number;
  addAccumulation: (newAccumulation: number) => void;
}

export interface ISpendingOperation {
  spending: number;
  categorie: string;
  date: Date;
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
}
export interface IIncomeStore {
  income: number;
  incomeOperations: IIncomeOperation[];
  addIncome: (operation:IIncomeOperation) => void;
}
