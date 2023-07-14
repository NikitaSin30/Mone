import { ISpendingOperation,IIncomeOperation, IAccumulationOperation } from 'interfaces';


type TOperation = ISpendingOperation | IAccumulationOperation | IIncomeOperation

export abstract class AbstractOperationAPI {
    protected abstract add<T>(userID: string, operation: TOperation): Promise<T>;
}
