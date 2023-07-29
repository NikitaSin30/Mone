import { ISpendingOperation } from 'interfaces';
import { IFormSpending } from 'interfaces';


export interface ISpendingService {
    add: (newSpending : IFormSpending) => Promise<void>;
    delete:(id:string) => Promise<void>
    createOperation:(newSpending : IFormSpending) => ISpendingOperation
}
