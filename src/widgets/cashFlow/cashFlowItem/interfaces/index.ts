import { TAllOperations } from 'shared/store/cashFlowStore/operationsStore/types';

export interface ICashFlowItem {
    operation : TAllOperations
    onSuccessDelete: (id:string) => Promise<void>
}
