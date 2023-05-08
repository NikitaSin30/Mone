import { IFormIncome } from 'features/add-income/interfaces';



export interface IServiceIncome {
    addIncome: (income:IFormIncome) => Promise<void>;
}
