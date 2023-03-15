export interface IBalanceStore {
  moneyAccount: number;

}
export interface IAccumulationStore {
  accumulation: number;
  addAccumulation: (newAccumulation: number) => void;
}

export interface ISpendingStore {
  spending: number;
  addSpending: (newSpending: number) => void;
}

export interface IIncomeStore {
  income: number;
  addIncome: (newItcome: number) => void;
}
