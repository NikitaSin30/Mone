import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';

export interface IOperationSevice{
    deleteOperation:(id:string) => Promise<void>
}
