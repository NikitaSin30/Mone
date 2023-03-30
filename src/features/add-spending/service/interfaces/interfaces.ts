import { IFormSpending } from '../../interfaces/interfaces';
import { ISpendingOperation } from '../../../../shared/store/cashFlowStore/interfaces/interfaces';


export interface ISpendingService {
    addSpending: (newSpending : IFormSpending) => Promise<void>;

}
