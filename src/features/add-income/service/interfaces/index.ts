import { IFormIncome } from 'features/add-income/interfaces';
import { IIncomeOperation } from 'shared/store/cashFlowStore/interfaces';


export interface IServiceIncome {
    addIncome: (income:IFormIncome,switchShowModal:()=>void) => Promise<void>;
    createOperation:(income:number,sphere:string) => IIncomeOperation
}
