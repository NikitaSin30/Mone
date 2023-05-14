import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';

export interface ICashFlowItem {
    operation : TAllOperations
    deleteOperation: (id:string) => Promise<void>
}
