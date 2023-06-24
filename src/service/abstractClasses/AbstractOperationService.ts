import { IFactoryOperation } from 'shared/service/factory/interfaces';
import FactoryOperation from 'shared/service/factory/FactoryOperation';
import { IFormAccumulation } from 'features/add-accumulation/interfaces';
import { IFormIncome } from 'features/add-income/interfaces';
import { IFormSpending } from 'features/add-spending/interfaces';



type TDataForm = IFormAccumulation | IFormIncome | IFormSpending

export abstract class AbstractOperationService {
    protected factoryOperation:IFactoryOperation = new FactoryOperation();
    protected abstract add(data: TDataForm): Promise<void>;
}
