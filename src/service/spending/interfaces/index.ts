import { ISpendingOperation } from 'interfaces';
import { IFormSpending } from 'interfaces';


export interface ISpendingService {
    add: (newSpending : IFormSpending) => Promise<void>;
    createOperation:(newSpending : IFormSpending) => ISpendingOperation
}
