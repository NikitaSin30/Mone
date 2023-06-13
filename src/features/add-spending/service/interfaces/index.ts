import { IFormSpending } from '../../interfaces';
import { ISpendingOperation } from '../../../../shared/store/cashFlowStore/interfaces';


export interface ISpendingService {
    addSpending: (newSpending : IFormSpending) => Promise<void>;
}
