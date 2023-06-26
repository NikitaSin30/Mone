import { IFormAccumulation } from 'interfaces';
import { IFormIncome } from 'interfaces';
import { IFormSpending } from 'interfaces';
import { IAccumulationOperation,IIncomeOperation, ISpendingOperation } from 'interfaces';


type TDataForm = IFormAccumulation | IFormIncome | IFormSpending
type TCreatedOperation = IAccumulationOperation | ISpendingOperation | IIncomeOperation

export abstract class AbstractOperationService {
    protected abstract createOperation(data:TDataForm) : TCreatedOperation
    protected abstract add(data: TDataForm): Promise<void>;
}
