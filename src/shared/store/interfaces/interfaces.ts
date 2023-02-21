export interface IOperation {
  income: number;
  sphere: string;
  date?: Date;
}

export interface ICashStore {
  moneyAccount: number;
  incomeCash: number;
  spentMoney: number;
  accumulation: number;
  setIncome(sum: number): void;
  setSpending(sum: number): void;
  setAccumulation(sum:number) : void;
}

export type TUser = {
  email: string;
};

export interface IUser {
  user: TUser;
  setUser(email: string): void;
}
