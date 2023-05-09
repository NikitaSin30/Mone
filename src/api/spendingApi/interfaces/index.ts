import { ISpendingOperation } from 'features/add-spending/service/interfaces';
import { ISpendingOperationWithID } from 'shared/store/cashFlowStore/spendingStore/interfaces';

export interface IResponseAddSpending {
    message:string,
    spendingOperationWithID:ISpendingOperationWithID
}

export interface ISpendingApi {
    addSpending:(id: string, spendingOperation: ISpendingOperation) => Promise<IResponseAddSpending>
}
