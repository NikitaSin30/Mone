import { IFormIncome } from 'features/add-income/interfaces';

export interface IIncomeOperation {
  income: number;
  sphere: string;
  date: string;
}

export interface IServiceIncome {
    addIncome: (income:IFormIncome) => Promise<void>;
}
