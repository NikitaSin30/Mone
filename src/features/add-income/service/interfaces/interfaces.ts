import { IIncomeOperation } from '../../../../shared/store/cashFlowStore/interfaces/interfaces';

export interface IServiceIncome {
    addIncome: (income: number, sphere: string) => Promise<void>;
    createOperations:(income:number,sphere:string) => IIncomeOperation
}