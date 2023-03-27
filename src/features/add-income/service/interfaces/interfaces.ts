import { IFormIncome } from 'features/add-income/interfaces/interfaces';
import { IIncomeOperation } from '../../../../shared/store/cashFlowStore/interfaces/interfaces';

export interface IServiceIncome {
    addIncome: (income:IFormIncome,switchShowModal:()=>void) => Promise<void>;
    createOperations:(income:number,sphere:string) => IIncomeOperation
}
