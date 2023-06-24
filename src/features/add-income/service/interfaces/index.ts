import { IFormIncome } from 'features/add-income/interfaces';



export interface IServiceIncome {
    add: (income:IFormIncome) => Promise<void>;
}
