import { ISpendingOperation } from 'features/add-spending/service/interfaces';
import { IAccumulationOperation } from 'features/add-accumulation/service/interfaces';
import { IIncomeOperation } from 'features/add-income/service/interfaces';

export interface IFactoryOperation {
    createOperation(typeOperation:'accumulationOperation',accumulation:number):IAccumulationOperation
    createOperation(typeOperation:'spendingOperation',spending:number,categorie:string):ISpendingOperation
    createOperation(typeOperation:'incomeOperation',income:number, sphere:string):IIncomeOperation
}
