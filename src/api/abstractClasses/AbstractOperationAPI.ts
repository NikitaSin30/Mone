import { IAccumulationOperation, IIncomeOperation, ISpendingOperation } from 'shared/store/cashFlowStore/interfaces';


type TOperation = ISpendingOperation | IAccumulationOperation | IIncomeOperation

export abstract class AbstractOperationAPI {
    protected abstract add(userID: string, operation: TOperation): Promise<void>;
}
