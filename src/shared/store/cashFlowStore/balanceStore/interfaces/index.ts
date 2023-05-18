export interface IBalanceStore {
  moneyAccount: number;
  updateCashAccount:(newBalance: number) => void;
  setBalanceFromDB: (sum: number) => void;
  updateAfterDeleteOperation:(sum:number,typeOperation:string) => void
}
