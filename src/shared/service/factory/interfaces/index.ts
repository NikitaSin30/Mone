import { IAccumulationOperation, IIncomeOperation, ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';


export interface IFactoryOperation {
    createOperation(typeOperation:'accumulationOperation',accumulation:number):IAccumulationOperation
    createOperation(typeOperation:'spendingOperation',spending:number,categorie:string):ISpendingOperation
    createOperation(typeOperation:'incomeOperation',income:number, sphere:string):IIncomeOperation
}
