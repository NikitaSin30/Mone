import { ISpendingOperation } from 'features/add-spending/service/interfaces';
import { IAccumulationOperation } from 'features/add-accumulation/service/interfaces';
import { IIncomeOperation } from 'features/add-income/service/interfaces';
import { OPERATION_ACCUMULATION, OPERATION_INCOME, OPERATION_SPENDING } from '../constants';

export interface IFactoryOperation {
    createOperation(typeOperation:typeof OPERATION_ACCUMULATION,accumulation:number):IAccumulationOperation
    createOperation(typeOperation:typeof OPERATION_SPENDING,spending:number,categorie:string):ISpendingOperation
    createOperation(typeOperation:typeof OPERATION_INCOME,income:number, sphere:string):IIncomeOperation
}
