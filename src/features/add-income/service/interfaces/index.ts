import { IFormIncome } from 'features/add-income/interfaces';


export interface IServiceIncome {
    addIncome: (income:IFormIncome,switchShowModal:()=>void) => Promise<void>;

    // createOperations:(income:number,sphere:string) => IIncomeOperation
}
