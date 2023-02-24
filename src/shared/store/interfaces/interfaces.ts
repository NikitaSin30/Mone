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

export interface ICategorie {
  categorie: string;
  id?: string;
  spentMoney: number;
}

export type TypeUser = {
  email: string;
};

export interface IUser {
  user: TypeUser;
  setUser(email: string): void;
}
